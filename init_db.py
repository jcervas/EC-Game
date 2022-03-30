from app import db
from app.models import Game
import json

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
        ip='SEED DATA',
    )
    db.session.add(g)

db.session.commit()
