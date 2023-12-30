from django.shortcuts import render
from django.Http import HttpResponse

def index(request):
        return HttpResponse("Hello, world. You're at the polls index.")
