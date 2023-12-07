from django.shortcuts import render
from django.http.request import HttpRequest
from django.http import JsonResponse
from .models import Person, GENDER_TYPE
import numpy as np
import joblib

# load logistic regression model diabetes
model = joblib.load('ml_model/diabetes_logModel.pkl')


# Create your views here.
def home(req: HttpRequest):
    context = {
        'title': 'اصلی',
    }
    if req.method == "POST":
        fn = req.POST.get('fn')
        gen = req.POST.get('gen')
        prag = np.int32(req.POST.get('prag'))
        gol = np.int32(req.POST.get('gol'))
        bp = np.int32(req.POST.get('bp'))
        th = np.int32(req.POST.get('th'))
        an = np.int32(req.POST.get('an'))
        bmi = np.float32(req.POST.get('bmi'))
        dpf = np.float32(req.POST.get('dpf'))
        age = np.int32(req.POST.get('age'))
        data = np.float32([prag, gol, bp, th, an, bmi, dpf, age]).reshape(1, -1)
        print(data)
        pred = model.predict(data)[0]
        context['ans'] = pred
        context['fn'] = fn
        person = Person()
        person.fullName = fn
        person.gender = GENDER_TYPE[0][0] if gen == 'male' else GENDER_TYPE[1][0]
        person.diabet = True if int(pred) == 1 else False
        person.save()
        print('pred', pred)
    return render(req, 'home.html', context)


def about(req: HttpRequest):
    context = {
        'title': 'درباره ما',
    }
    return render(req, 'about.html', context)


def blog(req: HttpRequest):
    context = {
        'title': 'دیابت چیست',
    }
    return render(req, 'blog.html', context)
