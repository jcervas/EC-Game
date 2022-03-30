from flask import render_template, jsonify, request
import json
from app import app, db
from app.models import Game, GameEncoder
import random


@app.route("/")
@app.route("/index")
@app.route("/gametwo")
def gametwo():
    return render_template(
        "gametwo.html", title="Electoral College Game Two", n_participants=Game.get_count()
    )

@app.route("/gameone")
def gameone():
    return render_template(
        "gameone.html", title="Electoral College Game One", n_participants=Game.get_count()
    )

@app.route('/write_game', methods=['POST'])
def post_game():
    print("write_game: ")
    allocations_json = request.json
    print("\njson", allocations_json)
    game = Game.new(allocations_json, request.environ.get('REMOTE_ADDR'))
    db.session.add(game)
    db.session.commit()
    print("committed to db. Now has",len(Game.query.all()),"entries")
    return "foo"

@app.route('/random_game', methods=['GET'])
def random_game():
    n_games = Game.get_count()
    game_id = random.randint(0,n_games)
    game = Game.query.get_or_404(game_id)
    return json.dumps(game, cls=GameEncoder) 

@app.route('/get_all_games', methods=['GET'])
def get_all_games():
    print("getting games")
    games = Game.query.all()
    print("got {} games".format(len(games)))
    return json.dumps(games, cls=GameEncoder)

@app.route('/reset', methods=['DELETE'])
def reset():
    n_deleted = Game.query.delete()

    with open("data/results.json") as f:
        results = json.load(f)

    for result in results:
        g = Game(
            a_allocation=result["A"],
            b_allocation=result["B"],
            c_allocation=result["C"],
            d_allocation=result["D"],
            e_allocation=result["E"],
            f_allocation=result["F"],
            g_allocation=result["G"],
            round=result["round"],
        )
        db.session.add(g)
    db.session.commit()
    return str(n_deleted)
