# Diabetes Detetion App
## Developer: Moahmmad Sadra Boromand

I made a project using Machine learning algorithms, Django Rest framework and React.js and in this post I want to tell about my experience.

This is a diabetes diagnosis project that I first analyzed the data and then trained it using the logistic regression algorithm model, in the next step I created a Django rest framework project and used the data training model and using the data post method I took the data and then performed the prediction, and of course before that I created a model called Person that stores the data of the patients and the prediction result of their disease.

In the next step, I took the created api in the React.js project and established a connection using the axios library and sent and received requests in json, and finally the result is displayed to the user.


**🔴 My suggestion to the friends of data science is to try to combine their ML and DL projects with other frameworks so that this science can be used effectively, because it is always a problem that people who know how to work with frameworks and algorithms Ai's are not dominant and vice versa.**

**Note:**

 Before entering the field of data science, I myself was a full-stack web developer and mobile developer, and I always like to combine ai topics with web and mobile frameworks.

## *Technologies used*

- *Data analysis with Numpy - Matplotlib - seaborn*
- *Machine learning algorithms - logistic regression*
- *Django Rest Framework*
- *React JS - Axios*


## *Run:*
ML
```
Install required libraries
```
---

backend_drf
```
pip install -r requirements.txt
python manage.py makemigrations
python manage.py migrate
python manage.py createsuperuser
py manage.py runserver
```
---
reactjs_app
```
npm i
npm start
```