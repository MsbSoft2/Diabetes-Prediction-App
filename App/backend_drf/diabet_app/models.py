from django.db import models

# Create your models here.

GENDER_TYPE = (
    ('male', 'male'),
    ('female', 'female'),
)


class Person(models.Model):
    fullName = models.CharField(max_length=50)
    gender = models.CharField(choices=GENDER_TYPE, default=GENDER_TYPE[0][0], max_length=10)
    diabet = models.BooleanField(default=False)

    def __str__(self):
        return self.fullName