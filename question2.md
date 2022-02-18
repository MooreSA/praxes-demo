GET http://api.supercars.com/manufacturers/
RES Status: 200
Sample JSON

```
{
    "manufacturers": [
        {
            "id": 1,
            "name": "Ford",
            "url": "https://www.ford.com/"
        },
        {
            "id": 2,
            "name": "Mazda",
            "url": "https://www.mazda.com/"
        }
    ]
}
```

GET http://api.supercars.com/manufacturers/1/
RES Status: 200
Sample JSON

```
{
    "manufacturer": {
        "id": 1,
        "name": "Ford",
        "url": "https://www.ford.com/"
    }
}
```

POST http://api.supercars.com/manufacturers/
RES Status: 201
Sample JSON

```
{
    "manufacturer": {
        "id": 3,
        "name": "Toyota",
        "url": "https://www.toyota.com/"
    },
    "message": "Manufacturer added successfully"
}
```

PUT http://api.supercars.com/manufacturers/1/
RES Status: 200
Sample JSON

```
{
    "manufacturer": {
        "id": 1,
        "name": "Ford",
        "url": "https://www.ford.ca/"
    },
    "message": "Manufacturer updated successfully"
}
```

DELETE http://api.supercars.com/manufacturers/1/
RES Status: 200
Sample JSON

```
{
    "message": "Manufacturer deleted successfully"
}
```

GET http://api.supercars.com/models/
RES Status: 200
Sample JSON

```
{
    "models": [
        {
            "id": 1,
            "name": "Fiesta",
            "manufacturer": 1,
        },
        {
            "id": 2,
            "name": "Focus",
            "manufacturer": 1,
        },
        {
            "id": 3,
            "name": "Mazda3",
            "manufacturer": 2,
        }
    ]
}
```

GET http://api.supercars.com/models/1/
RES Status: 200
Sample JSON

```
{
    "model": {
        "id": 1,
        "name": "Fiesta",
        "manufacturer": 1,
    }

```

POST http://api.supercars.com/models/
RES Status: 201
Sample JSON

```
{
    "model": {
        "id": 4,
        "name": "Corolla",
        "manufacturer": 2,
    },
    "message": "Model added successfully"
}
```

PUT http://api.supercars.com/models/1/
RES Status: 200
Sample JSON

```
{
    "model": {
        "id": 1,
        "name": "Fiesta",
        "manufacturer": 1,
    },
    "message": "Model updated successfully"
}
```

DELETE http://api.supercars.com/models/1/
RES Status: 200
Sample JSON

```
{
    "message": "Model deleted successfully"
}
```

GET http://api.supercars.com/cars/
RES Status: 200
Sample JSON

```
{
    cars: [
        {
            "id": 1,
            "year" 2019,
            "vin": 123ABCD,
            "model": 1,
        },
        {
            "id": 2,
            "year" 2022,
            "vin": ABCD123,
            "model": 2,
        }
    ]
}
```

GET http://api.supercars.com/cars/1/
RES Status: 200
Sample JSON

```
{
    "car": {
        "id": 1,
        "year" 2019,
        "vin": 123ABCD,
        "model": 1,
    }
}
```

POST http://api.supercars.com/cars/
RES Status: 201
Sample JSON

```
{
    "car": {
        "id": 3,
        "year" 2020,
        "vin": ABCD123,
        "model": 2,
    },
    "message": "Car added successfully"
}
```

PUT http://api.supercars.com/cars/1/
RES Status: 200
Sample JSON

```
{
    "car": {
        "id": 1,
        "year" 2019,
        "vin": 123ABCD,
        "model": 1,
    },
    "message": "Car updated successfully"
}
```

DELETE http://api.supercars.com/cars/1/
RES Status: 200
Sample JSON

```
{
    "message": "Car deleted successfully"
}
```
