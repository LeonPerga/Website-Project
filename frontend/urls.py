from django.urls import path
from .views import index

urlpatterns = [
    path('', index),
    path('login', index),
    path('signup', index),
    path('custom', index),
    path('standard', index),
    path('profile', index),

]