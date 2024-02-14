from django.db import models
from django.contrib.auth.models import User
from django.utils import timesince

# Create your models here.

class Category(models.Model):

    name = models.CharField(max_length=50)

    
    def __str__(self):
        return self.name.capitalize()

class Post(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    image = models.ImageField(upload_to='images/')
    category = models.ManyToManyField(Category)
    date_added = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-date_added']

    def date_timefield(self):
        return timesince.timesince(self.date_added)
    
    def __str__(self):
        return self.title
