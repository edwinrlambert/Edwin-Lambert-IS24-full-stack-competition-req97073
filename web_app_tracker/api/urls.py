from django.urls import path
from .views import main, read_from_json_file

urlpatterns = [
    path("", main),
    path("get-json-data/", read_from_json_file, name='get_json_data')
]