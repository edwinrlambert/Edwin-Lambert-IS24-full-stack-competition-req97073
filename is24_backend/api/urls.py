from django.urls import path
from .views import main, read_json_file

urlpatterns = [
    # path("", main),
    path("", read_json_file)
]