from django.db import models
from django.conf import settings
# Create your models here.


class Question(models.Model):
    question = models.CharField(max_length=255)

class Answer(models.Model):
    answer = models.CharField(max_length=255)
    user = models.ForeignKey(settings.AUTH_USER_MODEL,on_delete=models.CASCADE)
    