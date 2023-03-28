import os, json
from django.shortcuts import render
from django.conf import settings
from django.http import HttpResponse


# Function to display contents from the backend.
def main(request):
    return HttpResponse("<h1>Hello World!</h1>")

# Function to read contents from the JSON File.
def read_json_file(request):
    
    # Initializing JSON File Path.
    json_file_path = os.path.join(settings.MEDIA_ROOT, 'data','product_list_json.json')
    
    try:
        # Read the contents from the JSON file.
        with open(json_file_path, 'r') as file:
            data = json.dumps(json.load(file), indent=4)
            
        return HttpResponse(data, content_type='application/json')
    # For Exceptions regarding Files.
    except FileNotFoundError as file_ex:
        print(f"An Exception Occurred: {type(file_ex).__name__} - {str(file_ex)}. Check if the file exist or whether the path to the file is correct.")
    except ValueError as value_ex:
        print(f"An Exception Occurred: {type(value_ex).__name__} - {str(value_ex)}. Check if the file contains any json value or whether the data is in proper json format.")
    # For Other General Exceptions.
    except Exception as ex:
        print(f"An Exception Occurred: {type(ex).__name__} - {str(ex)}.")
        