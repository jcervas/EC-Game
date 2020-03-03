# EC Game Web Client

Your mission is to out-campaign your opponent, who is competing against you to be President.

Imagine that there are seven competitive states in the **NOTUSISTAN** Electoral College used for its presidential elections, operating under the same winner take all, weighted voting rules as in the US Electoral College.

Each player has **$100** to spend across the seven states, in increments of **$1** (No decimals or fractions in your numbers are allowed). By directing resources to states, you get a competitive advantage. For every $1 additional spent in a state, you gain an additional 1 percentage point in vote share. For every additional $1 spent by your opponent, you lose 1 percentage point (whoever spends the most money in the state, wins that state).

For example, if you allocate $44 to State D, and your opponent only allocated $14, you win State D's 13 EC votes. If instead you allocated $31 to State C, your opponent would win 8 EC votes by allocating anything between $32 and $100.

The seven states have Electors shown in the second column. There is a total of 139 EC votes, with **70 needed to win**.

**Ties in each state are decided by coin toss.** There is no requirement to allocate any money in a state, or you can allocate up to the full allotment in just one state.

You compete against one other person, randomly selected from our database. The goal is to win *70 EC votes* or more so you become President.

When you’re ready, **enter your allotments below**. (You can play as many times as you like, but only your first guess will count.)

## TO-DO

- Calculate win/lose of participant against one other randomly selected previous particpant from results.json (Vote-share starts at 50, increases by 1 for every $1 allocated, subtracted by 1 for every $1 by opponent. Voteshare will be different in future versions of this game)
- Calculate win/lose against all other participants (calculated the same way as above, but only need to store 1|0 if win or lose, and then totaled, which will be displayed in histogram
- Merge new participates data into the master database
- Build D3 svg of barchart comparing the participants allocations, the empirical averages, and the Banzhaf 'ideal'
- Build D3 svg histogram of wins against other particpants, with x-axis being percentage of wins and the y-axis being the number that falls into each bin. Make each bin 1 percentage point.
