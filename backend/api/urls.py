from django.urls import path
from .views import (get_current_user)
urlpatterns = [
    path("user/", get_current_user),
]