<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400"></a></p>


## About Micro Service
#### run development

    composer install
    create .env
    php artisan migrate --seed
    php artisan passport:install
    php artisan passport:client --personal
    php artisan serve

Run & Test

##### Authentication

```http
POST /api/login HTTP/1.1
Content-Type: application/json
```

```json
Body
{
    "email": "budi@gmail.com",
    "password": "budiman"
}
```

```json
Status 200
Content-Type: application/json
{
  "error": false,
  "message": "Proses login berhasil",
  "data": {
    "id": 1,
    "name": "budi",
    "email": "budi@gmail.com",
    "email_verified_at": null,
    "created_at": "2020-12-07T11:52:25.000000Z",
    "updated_at": "2020-12-07T11:52:25.000000Z",
    "token": "eyJ0e......"
  }
}
```


##### Post Disbursement

```http
POST /api/disbursement HTTP/1.1
Content-Type: application/json
Authorization: Bearer {token}
```

```json
Body
{
  "bank_code": "bni",
  "account_number": "1234567890",
  "amount": 10000,
  "remark": "sample remark"
}
```

```json
Status 200
Content-Type: application/json
{
  "error": false,
  "message": "Detail",
  "data": {
    "id": 6416761029,
    "amount": 10000,
    "status": "PENDING",
    "timestamp": "2020-12-12T22:43:55.000000Z",
    "bank_code": "bni",
    "account_number": "1234567890",
    "beneficiary_name": "PT FLIP",
    "remark": "sample remark",
    "time_served": null,
    "fee": 4000,
    "user_id": 1,
    "updated_at": "2020-12-12T15:44:00.000000Z",
    "created_at": "2020-12-12T15:44:00.000000Z"
  }
}
```
##### List Disbursement

```http
GET /api/disbursement HTTP/1.1
Content-Type: application/json
Authorization: Bearer {token}
```

```json
Status 200
Content-Type: application/json
{
  "error": false,
  "message": "List",
  "data": {
    "current_page": 1,
    "data": [
      {
        "id": 6673194606,
        "amount": 10000,
        "status": "SUCCESS",
        "bank_code": "bni",
        "account_number": "1234567890",
        "beneficiary_name": "PT FLIP",
        "remark": "sample remark",
        "receipt": "https:\/\/flip-receipt.oss-ap-southeast-5.aliyuncs.com\/debit_receipt\/126316_3d07f9fef9612c7275b3c36f7e1e5762.jpg",
        "fee": 4000,
        "timestamp": "2020-12-12 23:00:50",
        "time_served": "2020-12-12 23:09:50",
        "user_id": 1,
        "created_at": "2020-12-07T14:58:09.000000Z",
        "updated_at": "2020-12-12T16:10:55.000000Z"
      },
      {
        "id": 6416761029,
        "amount": 10000,
        "status": "SUCCESS",
        "bank_code": "bni",
        "account_number": "1234567890",
        "beneficiary_name": "PT FLIP",
        "remark": "sample remark",
        "receipt": "https:\/\/flip-receipt.oss-ap-southeast-5.aliyuncs.com\/debit_receipt\/126316_3d07f9fef9612c7275b3c36f7e1e5762.jpg",
        "fee": 4000,
        "timestamp": "2020-12-12 22:57:39",
        "time_served": "2020-12-12 23:06:39",
        "user_id": 1,
        "created_at": "2020-12-12T15:44:00.000000Z",
        "updated_at": "2020-12-12T16:07:45.000000Z"
      }
    ],
    "first_page_url": "http:\/\/127.0.0.1:8000\/api\/disbursement?page=1",
    "from": 1,
    "last_page": 1,
    "last_page_url": "http:\/\/127.0.0.1:8000\/api\/disbursement?page=1",
    "links": [
      {
        "url": null,
        "label": "&laquo; Previous",
        "active": false
      },
      {
        "url": "http:\/\/127.0.0.1:8000\/api\/disbursement?page=1",
        "label": 1,
        "active": true
      },
      {
        "url": null,
        "label": "Next &raquo;",
        "active": false
      }
    ],
    "next_page_url": null,
    "path": "http:\/\/127.0.0.1:8000\/api\/disbursement",
    "per_page": 10,
    "prev_page_url": null,
    "to": 2,
    "total": 2
  }
}
```

##### Detail Disbursement & Synchronize Status

```http
POST /api/disbursement/detail/{id} HTTP/1.1
Content-Type: application/json
Authorization: Bearer {token}
```

```json
Query (if need to synchronize status from server) OR non / optional
{
  "synchronize": 1,
}
```

```json
Status 200
Content-Type: application/json
{
  "error": false,
  "message": "Detail",
  "data": {
    "id": 6673194606,
    "amount": 10000,
    "status": "SUCCESS",
    "bank_code": "bni",
    "account_number": "1234567890",
    "beneficiary_name": "PT FLIP",
    "remark": "sample remark",
    "receipt": "https:\/\/flip-receipt.oss-ap-southeast-5.aliyuncs.com\/debit_receipt\/126316_3d07f9fef9612c7275b3c36f7e1e5762.jpg",
    "fee": 4000,
    "timestamp": "2020-12-13 05:26:05",
    "time_served": "2020-12-13 05:35:05",
    "user_id": 1,
    "created_at": "2020-12-07T14:58:09.000000Z",
    "updated_at": "2020-12-12T22:36:10.000000Z"
  }
}
```

#### run UI 
UI with reactjs and just complete until login 

    npm install
    npm run dev / npm run watch
