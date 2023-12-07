from rest_framework.request import HttpRequest, Request
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Person, GENDER_TYPE
from .serializers import PersonSerializer
import numpy as np
import joblib

model_logReg = joblib.load('ml_model/diabetes_logModel.pkl')

# Create your views here.
class PersonApiView(APIView):

    def post(self, req: Request):
        fn = req.data.get('fn')
        gen = req.data.get('gen')
        prag = req.data.get('prag')
        gol = req.data.get('gol')
        bp = req.data.get('bp')
        th = req.data.get('th')
        an = req.data.get('an')
        bmi = req.data.get('bmi')
        dpf = req.data.get('dpf')
        age = req.data.get('age')
        print('post', req.data)
        input_data = np.float32([prag, gol, bp, th, an, bmi, dpf, age]).reshape(1, -1)
        # predict
        pred = model_logReg.predict(input_data)[0]

        print(input_data)
        print('pred', pred)
        # 'diabet': True if int(pred) == 1 else False
        data = {
            'fullName': fn,
            'gender': GENDER_TYPE[0][0] if gen == 'male' else GENDER_TYPE[1][0],
            'diabet': True if int(pred) == 1 else False
        }
        serializer = PersonSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
