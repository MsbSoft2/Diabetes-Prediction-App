from django.urls import path
from .views import PersonApiView

urlpatterns = [
    path('', PersonApiView.as_view()),
]
