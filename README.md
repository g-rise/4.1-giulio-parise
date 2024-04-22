# Api Rest de una llista de tasques

El projecte preveu la creació d'un servidor utilitzant Express per donar servei a l'Api Rest de la llista de tasques, amb l'aplicació de arquitectura exagonal.

------------


![TypeScript](https://img.shields.io/badge/-TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)  ![Node.js](https://img.shields.io/badge/-Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white)  ![Express](https://img.shields.io/badge/-Express-000000?style=flat-square&logo=express&logoColor=white)


------------

## Estructura de carpetes i archius

``` 
API-Rest-ToDoList-Async
├── src/
│   ├── domain/
│   │   └── task.ts
│   ├── application/
│   │   └── taskService.ts
│   └── infrastructure/
│   │   └── taskController.ts
│   │   └── middleware/
│   │      └── basicAuth.ts
│   │      └── httpMiddleware.ts
│   ├── routes/
│   │   └── taskRoute.ts
│   └── app.ts
```
------------

## Scripts

#### `npm run dev`

Per correr el projecte utilitzant TypeScript

#### `npm run build`

Per transpilar el archius TypeScript a JavaScript.

#### `npm run lint`

Per correr el eslint sobre els archius del projecte

------------

## Mètodes de l'Api rest

- **GET `/tasks`**

  Mètode per retornar totes les tasques.

- **GET `/tasks/:id`**

  Mètode per retornar una tasca específica.

- **POST `/tasks`**

  Mètode per afegir una tasca. Retorna la tasca creada.

- **PUT `/tasks/:id`**

  Actualitza l'estat d'una tasca de no completada a completada. Retorna la tasca actualitzada.

- **DELETE `/tasks/:id`**

  Elimina una tasca de la llista.

------------

## Postman

En la carpeta **`/postman`** hi ha una col·lecció de peticions HTTP que exemplifiquen el funcionament del projecte.


