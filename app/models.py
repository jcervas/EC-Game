from app import db
from sqlalchemy import func
import json

class GameEncoder(json.JSONEncoder):
    def default(self, o):
        return {
            'a_allocation': o.a_allocation,
            'b_allocation': o.b_allocation,
            'c_allocation': o.c_allocation,
            'd_allocation': o.d_allocation,
            'e_allocation': o.e_allocation,
            'f_allocation': o.f_allocation,
            'g_allocation': o.g_allocation,
            'round': o.round,
            'ip':o.ip,
        }

class Game(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    ip = db.Column(db.String)
    a_allocation = db.Column(db.Integer)
    b_allocation = db.Column(db.Integer)
    c_allocation = db.Column(db.Integer)
    d_allocation = db.Column(db.Integer)
    e_allocation = db.Column(db.Integer)
    f_allocation = db.Column(db.Integer)
    g_allocation = db.Column(db.Integer)
    round = db.Column(db.String(128))

    def new(json, ip_addr):
        return Game(
            a_allocation=json["A"],
            b_allocation=json["B"],
            c_allocation=json["C"],
            d_allocation=json["D"],
            e_allocation=json["E"],
            f_allocation=json["F"],
            g_allocation=json["G"],
            round=json["round"],
            ip=ip_addr,
        )
    
    def get_count():
        return db.session.query(func.count(Game.id)).scalar()

    def __repr__(self):
        return "<id {} : ip {}> a_allocation = {}, b_allocation = {}, \
            c_allocation = {}, d_allocation = {}, e_allocation = {}, \
            f_allocation = {}, g_allocation = {}, round = {}".format(
            self.id,
            self.ip,
            self.a_allocation,
            self.b_allocation,
            self.c_allocation,
            self.d_allocation,
            self.e_allocation,
            self.f_allocation,
            self.g_allocation,
            self.round,
        )