import os, json
from django.shortcuts import render
from django.conf import settings
from django.http import HttpResponse, JsonResponse
from rest_framework import generics, status
from rest_framework.views import APIView
from rest_framework.response import Response

#* VARIABLES
# Initializing JSON File Path.
json_file_path = os.path.join(settings.MEDIA_ROOT, 'data','product_list_json.json')

# 



#* FUNCTIONS
# Function to display contents from the backend.
def main(request):
    return HttpResponse("<h1>Hello World!</h1>")

# Function to read JSON.
def read_json():
    # Read the contents from the JSON file.
    with open(json_file_path, 'r') as file:
        json_data = json.load(file)
    return json_data

# Function to write JSON.
def write_json(json_data):
    # Write the updated data to the file.
    with open(json_file_path, 'w') as file:
        json.dump(json_data, file, indent=4)

# Function to read contents from the JSON File.
def read_from_json_file(request):
    try:
        # Read the contents from the JSON file.
        json_data = read_json()
        # return HttpResponse(json_data, content_type='application/json')
        return JsonResponse(json_data, safe=False)
    
    # For Exceptions regarding Files.
    except FileNotFoundError as file_ex:
        print(f"An Exception Occurred: {type(file_ex).__name__} - {str(file_ex)}. Check if the file exist or whether the path to the file is correct.")
    except ValueError as value_ex:
        print(f"An Exception Occurred: {type(value_ex).__name__} - {str(value_ex)}. Check if the file contains any json value or whether the data is in proper json format.")
    # For Other General Exceptions.
    except Exception as ex:
        print(f"An Exception Occurred: {type(ex).__name__} - {str(ex)}.")
        
# Function to add contents to the JSON File.
def add_to_json_file(request):
    if request.method == "POST":
        # Get the JSON data from the body.
        json_data = json.loads(request.body)
        
        # Read the current details from the JSON File.
        existing_json_data = read_json()
        
        # Append and write the data to the JSON File.
        existing_json_data.append(json_data)
        write_json(existing_json_data)
            
        # Return a success response.
        return HttpResponse("Product added successfully.")
    else:
        # Return a error response.
        return HttpResponse("Invalid request method.", status=400)
    
# Function to update contents to the JSON File.
def update_to_json_file(request):
    if request.method == "POST":
        # Get the updated data from the form.
        updated_product = {
            "productId": request.POST.get("productId"),
            "productName": request.POST.get("productName"),
            "productOwnerName": request.POST.get("productOwnerName"),
            "Developers": request.POST.get("Developers"),
            "scrumMasterName": request.POST.get("scrumMasterName"),
            "startDate": request.POST.get("startDate"),
            "methodology": request.POST.get("methodology")
        }
        
        # Read the contents of the JSON File.
        product_list = read_json()
        
        # Find the product with matching productId and update the contents.
        for product in product_list:
            if product["productId"] == updated_product["productId"]:
                product.update(updated_product)
                break
            
        # Write the contents to the JSON File.
        write_json(product_list)
        
        # Return a success response.
        return HttpResponse("Product Updated Successfully.")
    else:
        # Return a error response.
        return HttpResponse("Invalid request method.", status=400)
    
def delete_from_json_file(request):
    if request.method == "POST":
        # Get the productId from the response.
        product_id = request.POST.get("productId")
        
        # Read contents from the JSON File.
        product_list = read_json()
        
        # Find product with matching Id and delete it.
        for i, product in enumerate(product_list):
            if product["productId"] == int(product_id):
                del product_list[i]
                break
            
        # Write the contents to the JSON File.
        write_json(product_list)
        
        # Return a success response.
        return HttpResponse("Product Deleted Successfully.")
    else:
        # Return a error response.
        return HttpResponse("Invalid request method.", status=400)