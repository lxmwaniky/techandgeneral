from django.urls import path
from . import views

urlpatterns = [
        path('', views.home, name='tng-home'),
        path('about/', views.about, name='tng-about'),
        path('contact/', views.contact, name='tng-contact'),
        path('blog/', views.blog, name='tng-blog')
]