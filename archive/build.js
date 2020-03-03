define('nyt5/analytics', [], function() {

     var canonical = document.querySelector("link[rel='canonical']").href,
          pageview = ['_trackPageview'];

     if (canonical) {
          var a = document.createElement("a");
          a.href = canonical;
          if (a.pathname != document.location.pathname) pageview.push(a.pathname);
     }

     _gaq = [
          ['_setAccount', 'UA-127081488-2'], pageview
     ];

     require(['https://www.google-analytics.com/ga.js']);

});


// define('pushData',[
//     'jquery/nyt',
//     'https://int.nyt.com/applications/godzown/assets/godzown.js',
//     'foundation/models/user-data',
// ], function($, godZown, userData) {
//
//   //dont know if this matters http://attribute.adm.int.newsdev.net/projects/number-guessing-game
//
//
//     // in staging
//     // https://int.stg.nyt.com/applications/godzown/assets/godzown.js
//     // godZown.setHost("http://www.stg.nytimes.com/"); // for staging
//     //godZown.setHost("http://www.nytimes.com/"); // for production
//     godZown.setHost("http://0.0.0.0:8000/"); // for local development
//
//     var godzown_slug = "2015-07-28-number-guessing-game",
//         attr_slug = "number-guessing-game",
//         // attr_url = 'http://projects.nytimes.com/attribute/projects/' + attr_slug + '/submissions.json';
//         attr_url = "http://attribute-collector.newsdev.nytimes.com/projects/" + attr_slug + "/submissions";
//     // setItem takes two arguments: slug, and a JSON object (not array) to be saved.
//     //
//     // Requests to the backend are throttled to 2000 ms
//
//     return function(data, callback) {
//
//
//         data.userId = userData.getUserId();
//         data.loggedIn = userData.isLoggedIn();
//         // data.subscriber = userData.isLoggedIn() && (userData.isWebSubscriber() || userData.isMobileSubscriber() || userData.isTabletSubscriber() || userData.isSmartphoneSubscriber());
//
//         godZown.getItem(godzown_slug).fail(function(err) {
//             // console.log('godzown.getItem failed with this error', err.status);
//             // this means that it only pushes the first time.
//             if (err.status == 404) push();
//         }).done(function() {
//             // push anyway on localhost to make my life easier
//             // if (location.hostname == 'localhost.nytimes.com') push();
//         });
//
//
//         // alternative data
//         $.ajax({
//             url: attr_url,
//             type: 'POST',
//             data: data,
//             xhrFields: {
//                 withCredentials: true
//             }
//         });
//
//         function push() {
//             // console.log('push', data);
//             godZown.setItem(godzown_slug, {
//                 date: new Date(),
//                 data: data
//             })
//             .done(function(status) {
//                 if (status.success) {
//                     console.log('saved!');
//                     callback(null);
//                 } else callback('fail', status);
//             })
//             .fail(function(jqXHR) {
//                 callback('bad request', jqXHR);
//             });
//         }
//     };
// });

// db.items.count({slug: "2015-06-02-marriage-chart-game"})
;
define('amanda', ['d3/3'], function(d3) {

     return function(user, everyone, winner, totals, avg, sumOfAll, cont) {

          var histTitle = d3.select(".g-histogram-title");

          var dif = Math.abs(user - winner);

          var commify = d3.format(",");

          var pctConverter = function(d) {
               return d3.round(100 * d);
          };

          var pctileScore = getPercentileOfScore(dif, totals, winner);

          var hedScale = d3.scale.threshold()
               .domain([1, 2, 5, 10, 20])
               .range([
                    "Congratulations! You guessed correctly.",
                    "You were very close. Well done!",
                    "Pretty good!",
                    "Not the worst!",
                    "Sorry, you weren't very close.",
                    "Unfortunately, someone has to lose, and it's you."
               ]);


          var allUserLength = d3.sum(everyone, function(d) {
               return d.adjFreq;
          });

          if (user === 0) histTitle.text("What a beautiful mind you have! (You didn't win, though.)");
          else {
               histTitle.text(hedScale(dif));
          }

          var allReadersNice = commify(allUserLength);

          var minNumberPeopleOutsmarted = commify(totals.length - totals.filter(function(d) {
               return d === winner;
          }).length);

          // var minNumberPeopleOutsmarted = "REDO THIS CALC";

          var pctile = pctConverter(1 - pctileScore);

          var pranksterPct = pctConverter(d3.sum(
               everyone.filter(function(d) {
                    return d.guess >= 67;
               })
               .map(function(d) {
                    return d.pct;
               })
          ));
          //And you weren't far off from reality if you made that assumption.

          var newTotals = d3.round((2 / 3) * d3.mean(totals.filter(function(d) {
               return d <= 67;
          })));

          var sentences = {
               "winner": "<p>Congratulations! You could not have done any better than you did. You correctly guessed two-thirds of the average of the guesses of " + allReadersNice + " New York Times readers. These numbers may change as more people play, but for the time being, you may relish the fact that you have outsmarted the masses. Specifically, you outsmarted at least " + minNumberPeopleOutsmarted + " other readers. Time to hit Wall Street!</p>",
               "withinTwo": "<p>You were extremely close. So far, the average of all numbers has been " + avg + ", which means two-thirds of the average is " + winner + " and your entry of " + user + " is close to the mark. Your guess, while not a winner, was better than those of " + pctile + " percent of all readers. Take a bow.</p>",
               "withinFive": "<p>So far, the average of all numbers has been " + avg + ", which means two-thirds of the average is " + winner + " and your entry of " + user + " is within five of the mark. Though not the winning entry, it's still closer than about " + pctile + " percent of other readers.</p>",
               "within10": "<p>Not bad â€“ but you're not quite one of the winners.  So far, the average of all numbers has been " + avg + ", which means two-thirds of the average is " + winner + ". About " + d3.round(100 - pctile) + " percent of readers guessed closer than you.</p>",
               "notClose": "<p>Your guess of " + user + " is well off the mark of " + winner + ", the number representing two-thirds of the average of " + allReadersNice + " readers' guesses (including yours). You didn't win, but you do get a consolation prize: 850 words about human psychology and behavioral economics explaining the error of your ways.</p>",
               "prankster": "<p>On top of that, we have to ask â€“ why pick " + user + "? Are you some kind of math prankster? It's possible you misunderstood the question (if so, we apologize). But think about it: " + user + " can never be two-thirds of the average of everyone's guesses. Even if everyone guessed 100, the average, once rounded, would be 67.</p><p>Still, there are interesting things to consider with an entry like this. Specifically, how many <em>other people</em> predicted that there would be people like you and increased their guess accordingly? As you can see from the histogram above, you're not alone. About 1 in " + 1 / (pranksterPct / 100) + " readers so far are math pranksters like you. Without them, the winning response would have been " + newTotals + " instead of " + winner + ".",
               "guessed33": "<p>Your guess is particularly interesting to economists and game theorists alike. If everyone else basically picked randomly, the average would be 50; your guess represents two-thirds of that. This is an example of what the economist Colin Camerer has called â€œk-stepâ€ thinking (more on that in a minute).</p><p>For you, k is 1: you are thinking one step ahead.</p>",
               "guessed22": "<p>Your guess is particularly interesting to economists and game theorists alike. If everyone else basically picked randomly, the average would be 50; two-thirds of that is 33. And your guess, " + user + ", represents two-thirds of <em>that</em>. This is an example of what the economist Colin Camerer has called â€œk-stepâ€ thinking (more on that in a minute). For you, k is 2: you are thinking two steps ahead.</p>",
               "guessed15": "<p>Your guess is particularly interesting to economists and game theorists alike. It represents what the economist Colin Camerer has called â€œk-stepâ€ thinking (more on that in a minute). For you, k is 3: You are thinking three steps ahead. Suppose everyone guesses randomly, producing an average answer of 50. A first-level thinker would guess 33 â€“ two-thirds of 50. A second-level thinker, knowing many people would guess 33, would pick 22 â€“ two-thirds of 33. A third-level thinker, like you, would guess 15 â€“ two-thirds of 22. Obviously, this line of thinking goes on and on.</p><p>Your guess suggests you thought three steps ahead â€“ or maybe you thought all the way ahead but assumed that the average other contestant was thinking only two steps ahead. Let us explain:",
               "guessed66": "Well, this is an interesting choice. Unfortunately for you, it's also an incorrect one. By definition, your guess of " + user + " means you think all other users would guess 99 or 100 â€” which, of course, would mean they were all badly wrong, since the average could never be higher than 67 (after rounding).",
               "nash": "<p>Your choice, " + user + ", didn't win, but it suggests you have something in common with John Nash, the great mathematician for whom the Nash equilibrium is named (more on that below) and was the subject of a book and movie, â€œA Beautiful Mind.â€</p><p>Your answer means you took this problem to its logical conclusion. Unfortunately for you, most other players did not, which means you only did better than about " + d3.round(pctile) + " percent of players. But we're still impressed. Let us explain:</p>",
               "guessedAverage": "<p>But your guess is interesting because it represents the average of everyone else's guess (instead of two-thirds of the average, which was our goal). Wrap your brain around this: The current winner of this puzzle based his or her answer by thinking that, on average, other people would guess like you.</p>"
          };


          return function() {
               var graf = [];

               if (dif === 0) graf.push(sentences.winner);
               if (dif > 0 && dif < 3) graf.push(sentences.withinTwo);
               if (dif >= 3 && dif < 6) graf.push(sentences.withinFive);
               if (dif >= 6 && dif < 11) graf.push(sentences.within10);
               if (dif >= 11 && dif < 99 && [0, 66].indexOf(user) == -1) graf.push(sentences.notClose);
               // if (dif >= 66 && dif < 99 && user !== 66) graf.push(sentences.notClose);
               if (user > 67) graf.push(sentences.prankster);
               if (user === 66) graf.push(sentences.guessed66);
               if (user === 33) graf.push(sentences.guessed33);
               if (user === 15) graf.push(sentences.guessed15);
               if (user === 22) graf.push(sentences.guessed22);
               if (user === avg) graf.push(sentences.guessedAverage);
               if (user === 0) graf.push(sentences.nash);

               d3.select(".g-user-custom-response").html('').append("ul").selectAll(".custom-response-item")
                    .data(graf)
                    .enter()
                    .append("li")
                    .attr("class", "custom-response-item")
                    .html(function(d) {
                         return d;
                    });

               return "hello";
          };


     };

     // ths function is quite bad.
     function getPercentileOfScore(userDiff, totals, winner) {

          var diffs = [];
          totals.forEach(function(d) {
               diffs.push(Math.abs(d - winner));
          });

          diffs = diffs.sort(function(a, b) {
               return a - b;
          });

          var numSmaller = 0;
          diffs.forEach(function(d) {
               if (d > userDiff) return;
               numSmaller++;
          });

          var pctGuessingCloser = numSmaller / diffs.length;

          return pctGuessingCloser;
     }


});

require([
     'jquery/nyt',
     'underscore/1.6',
     'foundation/views/page-manager',
     'nyt5/analytics',
     'd3/3',
     'queue/1',
     // 'pushData',
     'amanda',
     'https://int.nyt.com/applications/godzown/assets/godzown.js',
     // 'resizerScript'     // uncomment this line to include resizerScript
     // 'lib/text-balancer' // uncomment to balance headlines
     // 'templates'         // uncomment to use src/templates
], function($, _, PageManager, Analytics, d3, queue) {

     window.$ = $;
     var margin = {
          top: 5,
          right: 5,
          bottom: 45,
          left: 35
     };

     var prettySurePhone = innerWidth <= 415;

     var xAxisFormat = function(d) {
          if (prettySurePhone) {
               return d % 10 === 0 ? d : "";
          }
          return d % 5 === 0 ? d : "";
     };

     // var amanda;
     var gdata;

     d3.select(".g-smallcaps").text("").append("a").text("*").attr("href", "#g-note");

     // focus on user input field for quick entry
     if (innerWidth > 600) $('#g-user-submit-input').focus();

     //start a timer
     var currentTime = (new Date()).getTime();

     var winningEntry, averageOfAllGuesses, sumOfAllEntries;

     var commify = d3.format(",");

     var graphic = d3.select(".g-graphic"),
          submitButton = d3.select(".g-submit"),
          bottomSection = d3.select(".g-bottom-section"),
          inputBox = $('input'),
          histogramTitle = d3.select(".g-histogram-title"),
          eventualDecimalRound = d3.select(".g-decimal-eventual-round"),
          roundingWarning = d3.select(".g-rounding-warning"),
          outOfBoundsWarning = d3.select('.g-out-of-bounds-warning'),
          totalHighWarning = d3.select(".g-totalHighWarning-warning"),
          totalLowWarning = d3.select(".g-totalLowWarning-warning"),
          totalAlloted = d3.select(".g-total-allocated");

     var mobile = magnum.device == "mobile";

     var width = graphic.node().clientWidth - margin.left - margin.right,
          height = graphic.node().clientHeight - margin.top - margin.bottom;

     // TODO change to prod!

     var userResultsUrl = "results_tmp.json", // <-- production
          // var userResultsUrl = "https://int.stg.nyt.com/newsgraphics/2015/2015-08-11-number-guessing-game/results.json",  // <-- staging
          liveUpdateInterval = 5 * 1000; // 5 seconds

     var userGuess,
          totals = [];

     queue()
          .defer(d3.tsv, NYTG_ASSETS + "starter.tsv")
          .defer(d3.json, userResultsUrl)
          .await(ready);

     d3.json(userResultsUrl, function(data) {
          console.log(data);
          const totalPlayers =
               d3.nest()
               .key(d => d.round)
               .rollup(d => d.length)
               .entries(data);

          console.log(JSON.stringify(totalPlayers))

          var totals =
               d3.nest()
               .key(function(d) {
                    return d.round;
               })
               .rollup(function(values) {
                    return {
                         A: d3.mean(values, function(d) {
                              return d.A
                         }),
                         B: d3.mean(values, function(d) {
                              return d.B
                         }),
                         C: d3.mean(values, function(d) {
                              return d.C
                         }),
                         D: d3.mean(values, function(d) {
                              return d.D
                         }),
                         E: d3.mean(values, function(d) {
                              return d.E
                         }),
                         F: d3.mean(values, function(d) {
                              return d.F
                         }),
                         G: d3.mean(values, function(d) {
                              return d.G
                         })
                    };
               })
               .map(data);

          console.log(totals)

     });


     var a = generateQAPairs(".g-option-1", ".g-answer-1", 30, 80);
     var b = generateQAPairs(".g-option-2", ".g-answer-2", 0, 49);
     var c = generateState(".g-state-1", ".g-state-1a", ".g-ev-1");
     var c2 = generateState(".g-state-2", ".g-state-2a", ".g-ev-2");

     function generateQAPairs(sel1, sel2, floor, ceil) {
          var dif = ceil - floor,
               qNum = d3.round(floor + Math.random() * dif),
               ansMin = qNum + 1
          ansNum = d3.round(Math.floor(Math.random() * qNum));

          d3.select(sel1).text(qNum);
          d3.select(sel2).text(ansNum);
          d3.select(".g-answer-3").text(ansMin);
          return qNum;
     }

     function generateState(sel3, sel4, sel5) {
          var state = "ABCDEF";
          var st = state.substr(Math.floor(Math.random() * 7), 1);

          if (st == "A") {
               ev = 3
          } else if (st == "B") {
               ev = 5
          } else if (st == "C") {
               ev = 8
          } else if (st == "D") {
               ev = 13
          } else if (st == "E") {
               ev = 21
          } else if (st == "F") {
               ev = 34
          } else {
               ev = 55
          }
          d3.select(sel3).text(st);
          d3.select(sel4).text(st);
          d3.select(sel5).text(ev);

          return st;
     }

     // window.refresh = function() {
     //   queue()
     //       .defer(d3.tsv, NYTG_ASSETS + "ft-adj.tsv")
     //       // TODO change to prod!
     //       .defer(d3.json, "https://int.stg.nyt.com/newsgraphics/2015/2015-08-11-number-guessing-game/results.json")
     //       .await(ready);
     //     };



     function ready(err, seedData, userData) {
          if (err) console.warn(err);


          console.log(userData)

          function countByState(data) {
               return d3.nest()
                    .key(function(d) {
                         return d.round;
                    })
                    .rollup(function(d) {
                         return +d[0].a;
                    })
                    .map(data);
          }


          gdata = combineData(seedData, userData);

          sumOfAllEntries = d3.sum(gdata, function(d) {
               return +d.adjFreq;
          });
          d3.select(".g-num-nyt-users").text(commify(sumOfAllEntries));

          submitButton.on("click", showAnswer);
          initializeInputListeners();

          $(window).resize(_.debounce(render, 300));

          // -------------------------------------------------
          // german mode: no code executes below this point.
          // -------------------------------------------------

          function combineData(seedData, userData) {
               var countByGuessNYT = countByGuess(userData),
                    countByGuessFT = countByGuess(seedData);

               return d3.range(0, 101).map(function(guess) {
                    return {
                         guess: +guess,
                         adjFreq: (countByGuessNYT[guess] || 0) + (countByGuessFT[guess] || 0)
                    };
               });

               function countByGuess(data) {
                    return d3.nest()
                         .key(function(d) {
                              return d.guess;
                         })
                         .rollup(function(d) {
                              return +d[0].count;
                         })
                         .map(data);
               }
          }

          function updateData() {

               // add the guess to the totals, and calculate a new average
               var sum = 0,
                    count = 0;

               totals = [];

               gdata.forEach(function(d) {
                    d.adjFreq = +d.adjFreq + (userGuess === d.guess ? 1 : 0);
                    sum += d.adjFreq * d.guess;
                    count += d.adjFreq;
                    totals = totals.concat(_.times(d.adjFreq, _.constant(d.guess)));
               });

               // console.log('real avg', d3.mean(totals));

               averageOfAllGuesses = d3.round(sum / count);

               sumOfAllEntries = d3.sum(gdata, function(d) {
                    return +d.adjFreq;
               });

               //calculate a new winning entry
               winningEntry = d3.round((2 / 3) * averageOfAllGuesses);

               // calculate percentages
               gdata.forEach(function(d) {
                    d.pct = +d.adjFreq / sumOfAllEntries;
               });

               d3.select(".g-num-nyt-users").text(commify(sumOfAllEntries));
               d3.selectAll(".g-total-users-updateable").text(commify(sumOfAllEntries));

               render();

          }

          function initializeInputListeners() {
               inputBox.on('input', function(e) {
                    var isValid = checkInputValidity($(this).val());
                    submitButton.classed('g-disabled', !isValid);
               });

               inputBox.keyup(function(e) {
                    if (e.keyCode == 13) {
                         var v = Math.round($(this).val());
                         $(this).val(v);
                         var isValid = checkInputValidity(v);
                         if (isValid) showAnswer();
                    }
               });
          }

          function checktotalVar(A, B, C, D, E, F, G) {
               return totalVar = Math.round(Number(A) + Number(B) + Number(C) + Number(D) + Number(E) + Number(F) + Number(G))
          }

          function checkInputValidity(val) {

               //fire a warning if there are decimals
               var val2 = val;

               outOfBoundsWarning.classed('g-hidden', val >= 0 && val <= 100);

               // fire a warning if?
               if ((val2 / Math.floor(val2) !== 1) && (val2 <= 100) && !isNaN(val2 / Math.floor(val2))) {
                    roundingWarning.classed("g-hidden", false);
                    eventualDecimalRound.text(Math.round(val2));
               } else {
                    roundingWarning.classed("g-hidden", true);
               }

               var vA = $("#g-user-submit-inputA").val();
               var vB = $("#g-user-submit-inputB").val();
               var vC = $("#g-user-submit-inputC").val();
               var vD = $("#g-user-submit-inputD").val();
               var vE = $("#g-user-submit-inputE").val();
               var vF = $("#g-user-submit-inputF").val();
               var vG = $("#g-user-submit-inputG").val();

               var totalVal = checktotalVar(vA, vB, vC, vD, vE, vF, vG)
               console.log(totalVar)
               totalAlloted.text(Math.round(totalVal));

               if (totalVar > 100) {
                    totalHighWarning.classed("g-hidden", false);
               } else {
                    totalHighWarning.classed("g-hidden", true);
               }

               if (totalVal < 100) {
                    totalLowWarning.classed("g-hidden", false);
               } else {
                    totalLowWarning.classed("g-hidden", true);
               }

               return (!isNaN(val2) && (val2 >= 0) && (val2 <= 100) && val2.toString().indexOf("x") < 0 && (totalVar == 100));
          }

          function showAnswer() {

               //check validity of answer backup
               var vA = $("#g-user-submit-inputA").val();
               var vB = $("#g-user-submit-inputB").val();
               var vC = $("#g-user-submit-inputC").val();
               var vD = $("#g-user-submit-inputD").val();
               var vE = $("#g-user-submit-inputE").val();
               var vF = $("#g-user-submit-inputF").val();
               var vG = $("#g-user-submit-inputG").val();

               var isValidA = checkInputValidity(vA);
               var isValidB = checkInputValidity(vB);
               var isValidC = checkInputValidity(vC);
               var isValidD = checkInputValidity(vD);
               var isValidE = checkInputValidity(vE);
               var isValidF = checkInputValidity(vF);
               var isValidG = checkInputValidity(vG);

               // var isValidTotal = checkInputTotal(vA,vB,vC,vD,vE,vF,vG)

               if (!isValidA) return;
               if (!isValidB) return;
               if (!isValidC) return;
               if (!isValidD) return;
               if (!isValidE) return;
               if (!isValidF) return;
               if (!isValidG) return;

               // if (!isValidTotal) return;

               //deactivate text input
               $("#g-user-submit-inputA").blur();
               $("#g-user-submit-inputB").blur();
               $("#g-user-submit-inputC").blur();
               $("#g-user-submit-inputD").blur();
               $("#g-user-submit-inputE").blur();
               $("#g-user-submit-inputF").blur();
               $("#g-user-submit-inputG").blur();

               // show the bottom section and animate to it
               bottomSection.classed("g-hidden", false);

               $('html,body').animate({
                    scrollTop: $(".g-bottom-section").offset().top - (magnum.device == "desktop" ? 60 : 0)
               }, 1500);

               //turn off the whole input container
               d3.select("#g-input").classed("g-disabled", true);

               // d3.select("#related-coverage")
               //         .style("display", "block");

               //what was the user's guess?
               userGuessA = +document.getElementById('g-user-submit-inputA').value;
               userGuessB = +document.getElementById('g-user-submit-inputB').value;
               userGuessC = +document.getElementById('g-user-submit-inputC').value;
               userGuessD = +document.getElementById('g-user-submit-inputD').value;
               userGuessE = +document.getElementById('g-user-submit-inputE').value;
               userGuessF = +document.getElementById('g-user-submit-inputF').value;
               userGuessG = +document.getElementById('g-user-submit-inputG').value;

               updateData();

               var userData = {
                    guessA: userGuessA,
                    guessB: userGuessB,
                    guessC: userGuessC,
                    guessD: userGuessD,
                    guessE: userGuessE,
                    guessF: userGuessF,
                    guessG: userGuessG,
                    mobile: mobile,
                    timePondered: ((new Date()).getTime() - currentTime) / 1000
               };
               console.log(userData)


               pushData(userData, function(err, status) {
                    if (err) return console.warn('error', status);
                    // console.log('worked!');
               });

               //render the chart
               render();

               // function(user, everyone, winner, totals, avg, sumOfAll)
               amanda = amandaFunc(userGuess, gdata, winningEntry, totals, averageOfAllGuesses, sumOfAllEntries);

               //push
               amanda();

               setTimeout(pullFreshUserGuesses, liveUpdateInterval);

               function pullFreshUserGuesses() {
                    d3.json(userResultsUrl + '?random=' + (Math.random() * 10000).toFixed(0), function(err, newUserData) {
                         gdata = combineData(seedData, newUserData);
                         updateData();
                         // console.log('update', averageOfAllGuesses, winningEntry);
                         render();
                         amanda = amandaFunc(userGuess, gdata, winningEntry, totals, averageOfAllGuesses, sumOfAllEntries);
                         amanda();
                         setTimeout(pullFreshUserGuesses, liveUpdateInterval);
                    });
               }

          }

          // window.render = render;

          function render() {

               var histogram = d3.select(".g-histogram").html("");

               width = histogram.node().clientWidth - margin.left - margin.right;
               height = histogram.node().clientHeight - margin.top - margin.bottom;

               // console.log("rendering", width, height);

               var svg = histogram.append("svg")
                    .attr("width", width + margin.left + margin.right)
                    .attr("height", height + margin.top + margin.bottom)
                    .append("g")
                    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

               var x0 = d3.scale.ordinal()
                    .rangeBands([0, width], prettySurePhone ? 0 : 0.3)
                    .domain(d3.range(0, 101));

               var y = d3.scale.linear()
                    .range([height, 0])
                    .domain([0, d3.max(gdata, function(d) {
                         return d.pct;
                    })]);

               var xAxis = d3.svg.axis()
                    .scale(x0)
                    .tickSize(-height)
                    .tickPadding(10)
                    .tickFormat(xAxisFormat)
                    .orient("bottom");

               var yAxis = d3.svg.axis()
                    .scale(y)
                    .tickSize(-width)
                    .tickPadding(8)
                    .tickFormat(d3.format("%"))
                    .orient("left");

               var xAxisGroup = svg.append("g")
                    .attr("class", "x axis")
                    .attr("transform", "translate(0," + (height) + ")")
                    .call(xAxis)
                    .selectAll("g")
                    .classed("g-major", function(d) {
                         return d % 5 === 0;
                    });

               var yAxisGroup = svg.append("g")
                    .attr("class", "y axis")
                    .call(yAxis)
                    .selectAll("g")
                    .classed("g-baseline", function(d) {
                         return d === 0;
                    });

               var bar = svg.append("g").attr("class", "g-bar-container").selectAll(".g-bar")
                    .data(gdata)
                    .enter().append("line")
                    .attr("class", "g-bar")
                    .classed("g-current-winning-entry", function(d) {
                         return d.guess === winningEntry;
                    })
                    .classed("g-user-average", function(d) {
                         return d.guess === averageOfAllGuesses;
                    })
                    .classed("g-user-guess", function(d) {
                         return d.guess === userGuess;
                    })
                    .attr("transform", function(d) {
                         return 'translate(' + x0(d.guess) + ',0)';
                    })
                    .attr("stroke-width", x0.rangeBand())
                    .attr("y2", function(d) {
                         return y(d.pct) - 1;
                    })
                    .attr("y1", y(0) - 1);

               if (userGuess) {
                    var val = gdata.filter(function(d) {
                         return d.guess === userGuess;
                    })[0].pct;

                    if (userGuess == averageOfAllGuesses || userGuess == winningEntry) {
                         svg.append("line")
                              .attr("class", "g-bar g-user-guess g-additional")
                              .classed('g-user-average', userGuess == averageOfAllGuesses)
                              .classed('g-current-winning-entry', userGuess == winningEntry)
                              .attr("transform", 'translate(' + x0(userGuess) + ',0)')
                              .attr("stroke-width", x0.rangeBand())
                              .attr("y2", y(val) - 1)
                              .attr("y1", y(0) - 1);
                    }
               }

               var labels = [{
                         "desktopDisplay": "Your guess",
                         "mobileDisplay": "Your guess",
                         "guess": userGuess,
                         "labelClass": "g-user-guess"
                    },
                    {
                         "desktopDisplay": "Winner (2/3 of average)",
                         "mobileDisplay": "Winner (2/3 of avg.)",
                         "guess": winningEntry,
                         "labelClass": "g-current-winning-entry"
                    },
                    {
                         "desktopDisplay": "Average of all guesses",
                         "mobileDisplay": "Avg. of everyone",
                         "guess": averageOfAllGuesses,
                         "labelClass": "g-user-average"
                    },
               ];

               labels.sort(function(a, b) {
                    return a.guess - b.guess;
               });

               svg.append("text")
                    .attr("class", "g-x-axis-label")
                    .attr("x", width)
                    .attr("y", height + margin.bottom - 5)
                    .text("Readers' guesses");

               renderFeedbackTable();

               // renderDesktopLabels();

               // function renderDesktopLabels() {

               //  var histogramLabelGroup = svg.append("g").attr("class", "g-label-container").selectAll(".g-histogram-label")
               //      .data(labels)
               //    .enter().append("g")
               //      .attr("class", function(d) { return "g-histogram-label"; })
               //      .attr("transform", function(d) { return "translate(" + (x0(d.guess) + x0.rangeBand()/2) + ",0)"; });

               //    if (!mobile) {
               //      var label = histogramLabelGroup.append("text")
               //          .attr("class", function(d) { return d.labelClass; })
               //          .text(function(d) { return d.desktopDisplay; })
               //          .attr("transform", function(d) {
               //              var guess = d.guess;
               //              var val = data.filter(function(d) { return d.guess === guess; })[0].pct;
               //              return "translate(0," + y(val) + ")" + "rotate(-45)" + "translate(5,-5)";
               //          });

               //      var label1Coords = label[0][0].getBBox();

               //    }

               //    histogramLabelGroup.append("text")
               //        .attr("class", function(d) { return d.labelClass + " g-number-label"; })
               //        .text(function(d) { return d.guess; })
               //        .attr("y", function(d) {

               //          if (mobile) {
               //            var guess = d.guess;
               //            var val = data.filter(function(d) { return d.guess === guess; })[0].pct;
               //            return y(val) - 5;
               //          }
               //          return height + margin.top;
               //        });
               //   }
               // $(window).resize(_.debounce(render, 300));

               function renderFeedbackTable() {

                    var kc = histogram.append("div").attr("class", "g-key-container");

                    var row = kc.append("table").selectAll(".g-key-item-group g-row")
                         .data(labels)
                         .enter().append("tr")
                         .attr("class", "g-key-item-group")
                         .classed("g-you", function(d) {
                              return d.labelClass === "g-user-guess";
                         });

                    var keyTableCell = row.append("td")
                         .attr("class", "g-cell");

                    keyTableCell.append("span")
                         .attr("class", function(d) {
                              return d.labelClass + " g-key-block";
                         });

                    keyTableCell.append("span")
                         .attr("class", "g-key-label")
                         .text(function(d) {
                              return mobile ? d.mobileDisplay : d.desktopDisplay;
                         });

                    row.append("td")
                         .attr("class", "g-cell g-num")
                         .text(function(d) {
                              return d.guess;
                         });

                    kc.append("div")
                         .attr("class", "g-people-played")
                         .html("After <span class='g-total-users-updateable'>" + commify(sumOfAllEntries) + "</span> guesses");

               }

          }

     }


});

define("script", function() {});
