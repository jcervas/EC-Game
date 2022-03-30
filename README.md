# cervas_ec_game

## Running locally

The following commands pertain to usage with a Bash/Unix style shell - if using Window's Command Prompt one should look up the equivalent commands.

1. Make a virtual environment via `python3 -m venv venv`
2. Activate the virtual environment via `source venv/bin/activate`
3. Install dependencies via `pip install -r requirements.txt`
    * If you encounter `Error: pg_config executable not found.` try `brew install postgresql`, close the shell and repeat step 3.
    * You can also skip the `psycopg2` requirement for running the app locally. It is needed for deployment on Heroku, so it should stay in `requirements.txt`
4. Start the app via `flask run`

## Deploying to Heroku

Helpful [blog post](https://blog.miguelgrinberg.com/post/the-flask-mega-tutorial-part-xviii-deployment-on-heroku) for creating a new Heroku App. Other sections of that blog might be useful if you have other questions about how to do something in flask.

Preconditions (should be one time steps):

1. You have a Heroku account that is an owner or collaborator for this project (contact baxter.demers@gmail.com)
2. Install the [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli)
3. You are authenticated in the Heroku CLI via `heroku login`
4. Add the Heroku remote via `heroku git:remote -a ec-game`

Process (need to do it everytime to deploy.):

1. Add and commit your code e.g. `git commit -a -m "heroku deployment changes"`
2. `git push heroku master`
3. Ensure that the build passes and checkout the app on the web

## Layout

Front End:
Most JavaScript lives in `./app/static/js/main.js`
Most HTML lives in `./app/templates/index.html`
Most CSS lives in `./app/static/styles/all.css`

Back End:
Server endpoints: `./app/routes.py`
Object-relational mapping: `./app/models.py`