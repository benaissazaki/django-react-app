# django-react-app
A template for a Django-React web app

## Backend
Includes Django REST framework and Simplejwt for JWT authentication.  
Packages managed by pipenv.  
The SECRET_KEY is hidden from settings.py, it must be defined in secret_settings.py located in the same folder as settings.py.

`pip install pipenv`  
`pipenv install`  
`pipenv run ./manage.py runserver`  

## Frontend  
Includes Reactstrap for UI, state management with Redux and Redux Thunk.  
Packages managed by Yarn.  
Tests using Jest, Chai and Enzyme

`yarn install`  
`yarn start`