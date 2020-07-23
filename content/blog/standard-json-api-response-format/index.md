---
title: Standard JSON API response format
date: "2019-10-20T22:12:03.284Z"
description: "Standard JSON API response format"
---

![Chinese Salty Egg](./jsonapi.png)

Recently one of my friend asked me if there is any standard response we follow for API response, this question asked too much from beginner developers especially those are new in term of API
I was really interested by this question as I have to design a JSON API everyday. I found myself wondering if there is any standard over there.
I started searching about standard JSON format but unfortunately there is no standard Not only within JSON itself, but in terms of how to use it for RESTful applications or anything else of the sort. Everybody does it differently.
So i decided to explain what the standard we are following in our company, we are writing API’s in rails framework and returning response as JSON to front-end applications
There are 2 kind of responses in each API request which are Success response and Error response i will explain briefly some of our API’s responses how it looks

The main response structure have 4 keys which are
> 1) error_code code to indicate if there was an error
> 2) Success always returning true or false if the response is success will returning true otherwise will get false
> 3) Message it’s better to return the response message from back-end
> 4) data which is the main key and will have the data that should be displayed

```json
{
    "success": true,
    "message": "User logged in successfully",
    "data": { }
}
```

So let’s start with the bellow login example response , we have got the message and success out of data key and got the user object, JWT token and related relationship inside data

```json
{
    "success": true,
    "message": "User logged in successfully",
    "data": {
        "user": {
            "id": 2,
            "name": "Client",
            "client_id": 1,
            "email": "client@clickapps.co",
            "gender_label": null,
            "gender": null,
            "mobile": "123654789",
            "code_country": "00967",
            "birth_date": null,
            "avatar": "http://localhost:3000/default_image.png",
            "sms_notification": true,
            "is_mobile_verified": false,
            "otp": {
                "otp": "8704"
            },
            "client_city": {
                "id": 3,
                "name_ar": "الرياض",
                "name_en": "Riadh",
                "name": "Riadh",
                "status": 1,
                "status_label": "Active",
                "country": {
                    "id": 2,
                    "name": "Kingdub saudi Arab",
                    "code_country": "ksa",
                    "avatar": "http://localhost:3000/default_image.png",
                    "status": 1,
                    "status_label": "Active"
                }
            },
            "client_locations": [
                {
                    "id": 1,
                    "client_id": 1,
                    "latitude": "0.0",
                    "longitude": "0.0",
                    "address": "169 Rath Rapids",
                    "address_ar": "964 Michale Parkway",
                    "address_en": "169 Rath Rapids",
                    "building_name": "building_name",
                    "location_type": 1,
                    "location_type_label": "Home",
                    "apartment_name": null,
                    "require_permission": false,
                    "city": null,
                    "zip_code": null
                }
            ]
        },
        "role": "client",
        "token": "eyJhbGciOiJIUzI1NiJ9.eyJpZCI6MiwibmFtZSI6IkNsaWVudCIsImVtYWlsIjoiY2xpZW50QGNsaWNrYXBwcy5jbyIsIm1vYmlsZSI6IjEyMzY1NDc4OSIsImltYWdlIjoiL2RlZmF1bHRfaW1hZ2UucG5nIiwiYWRtaW4iOmZhbHNlLCJpYXQiOjE1NDc5MjU0MzIsImV4cCI6MTU1MDUxNzQzMn0.4Vyjd7BG7v8AFSmGKmIs4VM2FBw3gOLn97Qdf6U4jxU"
    }
}
```

Example with failed response

```json

{
    "success": false,
    "message": "Invalid email or password",
    "error_code": 1308,
    "data": {}
}
```

Example Login response using mobile number

```json
{
   "success": true,
   "message": "otp sent successfully",
   "data": {
       "otp": "9286"
   }
}
```

Example Login response using wrong mobile number

```json
{
   "success": false,
   "message": "Invalid mobile number.",
   "error_code": 1306,
   "data": {}
}
```

response

```json
{
   "success": true,
   "message": "otp confirmed successfully",
   "data": {
       "user": {
           "id": 8,
           "name": "mmb",
           "email": "mmb.221177@gmail.com",
           "status": 2,
           "status_label": "Active",
           "mobile": "738422532",
           "code_country": "00967",
           "avatar": "http://localhost:3000/default_image.jpg",
           "customer_id": 3,
           "provider_id": null
       },
       "token": "eyJhbGciOiJIUzI1NiJ9.eyJpZCI6OCwibmFtZSI6Im1tYiIsImVtYWlsIjoibW1iLjIyMTE3N0BnbWFpbC5jb20iLCJpYXQiOjE1NDc5NjYxMzQsImV4cCI6MTU1MDU1ODEzNH0.TLMc6owRpsOWl-al7yErWKcF7ylEGYW4ihEK_gLn5KY"
   }
}
```

Let’s have some examples with main HTTP-variables which are GET, POST, PUT and DELETE
GET response with collection of data

```json
{
    "success": true,
    "message": "Data found",
    "data": {
        "requests": [
            {
                "id": 10,
                "request_code": "8B2BD1",
                "provider_name": "Al Marasim Ladies Salon",
                "provider_name_ar": "Al Marasim Ladies Salon",
                "provider_name_en": "Al Marasim Ladies Salon",
                "service_name": "Nails & Feet",
                "service_name_ar": "الأظافر والقدمين",
                "service_name_en": "Nails & Feet",
                "start_datetime": "2018-09-04 18:03:07",
                "status_label": "Pending",
                "status": 1,
                "price_clinic_ksa": "46.01",
                "price_clinic_uae": "52.66",
                "price_demand_uae": "68.57",
                "price_demand_ksa": "80.84",
                "price_type": "hour",
                "provider_avatar": "http://localhost:3000/default_image.png",
                "provider_cover": "http://localhost:3000/default_image.png",
                "request_redeemed": false,
                "selected_price": 1,
                "selected_price_label": "Sar",
                "service_type": 1,
                "service_type_label": "In clinic",
                "transaction_status": 1,
                "transaction_status_label": "Unprocessed payment"
            },
            {
                "id": 8,
                "request_code": "8713ED",
                "provider_name": "Provider",
                "provider_name_ar": "Provider",
                "provider_name_en": "Provider",
                "service_name": "Nails & Feet",
                "service_name_ar": "الأظافر والقدمين",
                "service_name_en": "Nails & Feet",
                "start_datetime": "2018-09-04 18:03:07",
                "status_label": "Pending",
                "status": 1,
                "price_clinic_ksa": "92.62",
                "price_clinic_uae": "63.49",
                "price_demand_uae": "4.28",
                "price_demand_ksa": "87.9",
                "price_type": "hour",
                "provider_avatar": "http://localhost:3000/default_image.png",
                "provider_cover": "http://localhost:3000/default_image.png",
                "request_redeemed": false,
                "selected_price": 1,
                "selected_price_label": "Sar",
                "service_type": 1,
                "service_type_label": "In clinic",
                "transaction_status": 1,
                "transaction_status_label": "Unprocessed payment"
            }
        ],
        "pagination": {
            "current_page": 1,
            "next_page": null,
            "previous_page": null,
            "total_pages": 1,
            "per_page": 10,
            "total_entries": 5
        }
    }
}

```

POST

```json
{
    "success": true,
    "message": "Order 766013 Code has been Submitted successfully",
    "data": {
        "request": {
            "id": 11,
            "request_code": "766013",
            "provider_name": "Provider",
            "provider_name_ar": "Provider",
            "provider_name_en": "Provider",
            "service_name": "Nails & Feet",
            "service_name_ar": "الأظافر والقدمين",
            "service_name_en": "Nails & Feet",
            "start_datetime": "2019-10-16 06:26:00",
            "status_label": "Pending",
            "status": 1,
            "price_clinic_ksa": "92.62",
            "price_clinic_uae": "63.49",
            "price_demand_uae": "4.28",
            "price_demand_ksa": "87.9",
            "price_type": "hour",
            "provider_avatar": "http://localhost:3000/default_image.png",
            "provider_cover": "http://localhost:3000/default_image.png",
            "request_redeemed": false,
            "selected_price": "sar",
            "selected_price_label": "Sar",
            "service_type": 1,
            "service_type_label": "In clinic",
            "transaction_status": 1,
            "transaction_status_label": "Unprocessed payment",
            "provider_mobile": "361234567",
            "provider_code_country": "00967",
            "payment_method_label": "Cash on delivery",
            "payment_method": 1,
            "client": {
                "id": 1,
                "name": "Client",
                "user_id": 2,
                "email": "client@clickapps.co",
                "mobile": "123654789",
                "code_country": "00967",
                "city_id": 3,
                "city_name": "Riadh"
            },
            "description_en": "test",
            "description_ar": "اختبار",
            "submitted_at": "2019-01-19T19:31:26.629Z",
            "provider_address": null,
            "feedback": null,
            "can_give_feedback": true,
            "provider_rating": "0.0",
            "latitude": "0.0",
            "longitude": "0.0",
            "address_ar": "اختبر العنوان",
            "address_en": "test address",
            "address": "test address",
            "city": "Dubia",
            "zip_code": "325",
            "client_location": {
                "id": 1,
                "client_id": 1,
                "latitude": "0.0",
                "longitude": "0.0",
                "address": "169 Rath Rapids",
                "address_ar": "964 Michale Parkway",
                "address_en": "169 Rath Rapids",
                "building_name": "building_name",
                "location_type": 1,
                "location_type_label": "Home",
                "apartment_name": null,
                "require_permission": false,
                "city": null,
                "zip_code": null
            }
        }
    }
}
```

PUT

```json
{
    "success": true,
    "message": "Category updated successfully",
    "data": {
        "category": {
            "id": 11,
            "name": "First categpry",
            "name_ar": "فئة تجريبية",
            "name_en": "First categpry",
            "status": 1,
            "status_label": "Active",
            "sub_categories": []
        }
    }
}
```

DELETE


```json
{
    "success": true,
    "message": "Category deleted successfully",
    "data": {}
}
```

Push notification response

```json
{
  aps: {
    alert: {
      "loc-key":  "REQUEST_FORMAT",
      "loc-args": [@message]
    },
    sound:      "default",
    id:         @id,
    request_id:  @request_id,
    push_type:  push_type,
    payload:    @payload
  },
  pn_gcm: {
    data: {
      message: @message,
    }
  }
}
```

Some of our message responses

```json
errors:
    # 10XX : Main App Errors
    '1000': 'App Server Error, please contact the admin' # Global Error
    '1001': 'Missing Headers'
    '1002': 'Missing Parameters'
    '1003': 'Invalid offset or limit'
    '1004': 'Invalid Locale'
    '1005': 'Invalid Timezone'
    '1006': 'You exceeded the limit of requests per minute, Please try again after sometime.'
# 11XX : Http Errors
    '1101': 'Unauthorized'
    '1102': 'Not authorized to access'
    '1103': 'Unprocessable Entity'
    '1104': 'Authentication Failed'
    '1105': 'Not Found'
# 12XX : Auth Erorrs
    '1201': 'Your session is expired, please login again' # Token expired
    '1202': 'Your sessions is invalid' # JWT verification error
    '1203': 'Your sessions is invalid' # Error encountered while decoding JWT token
    '1204': 'Your sessions token is invalid' # Invalid token
    '1205': 'You are Unauthorized, Please login' # You are Unauthorized, Please login
    '1206': 'Authentication Error, User Not found' # Authentication Error, User Not found
# 13XX Session Errors
    '1301': 'Invalid Credentials'
    '1302': 'Invalid Login Type'
    '1303': 'Invalid Social Type'
    '1304': 'Login Error'
    '1305': 'You Account is disabled by the admin.'
    '1306': 'Invalid mobile number.'
    '1307': 'Wrong confirmation code! Try again.'
    '1308': 'Invalid email or password'
    '1309': 'Your account already exist in the app, please try to login.'
    '1310': 'Your request is invalid or your request time is over, please try again.'
    '1311': 'You are not authorized to access this app'
    '1312': 'An issue in the Active Directory Service, please contat the Administrator'
    '1313': 'your email still not confirmed, please confirm your email'
    '1314': 'Email link has been expired'
    '1315': 'Your account is not activated Please verify your email to activate the account'
    '1316': 'You cannot delete user until his requests been completed or cancelled'
    '1317': 'This number has already registered'
    '1318': 'Please before you login with google account first sign up'
    '1319': 'Your old mobile number is wrong'
    '1320': 'confirmation code is expired! Try again'
    '1321': 'You cannot delete provider until he completed or cancelled his requests'
    '1322': 'Your account was blocked by Admin. Please contact admin at support@laancare.com'
data_found:             'Data found'
  no_data_found:          'No data found'
  not_found:              'Not found'
  x_not_found:            '%{name} not found!'
  update_successfully:    'Updated successfully'
  x_update_successfully:  '%{name} updated successfully'
  created_successfully:   'Created successfully'
  x_created_successfully: '%{name} created successfully'
  deleted_successfully:   'Deleted successfully'
  x_deleted_successfully: '%{name} deleted successfully'
  request_submitted:      'Order %{code} Code has been Submitted successfully'
  orders_not_found:       'No orders yet'

```

Consultation

This is not global standard format for RESTful API’s but we follow it in most of our applications in our company if you liked feel free to design your API’s and i will encourage you to have a look at this repo it has rails api template with Dry base controller and all these responses built in it.
Feel free to share your inputs and how your structuring api response at your organization.
