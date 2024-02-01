from django.shortcuts import render
from django.http import HttpResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .serializers import *
from .models import *
from django.contrib.auth.models import User

# Create your views here.

@api_view()
def home(request):
    posts = Post.objects.all()
    serialize = PostSerializer(posts, many = True)
    return Response(serialize.data)

@api_view()
def postdetail(request, pk):
    posts = Post.objects.get(pk=pk)
    serialize = PostSerializer(posts)
    return Response(serialize.data)

@api_view()
def category(request):
    categories = Category.objects.all()
    serialize = CategorySerializer(categories, many = True)
    return Response(serialize.data)
