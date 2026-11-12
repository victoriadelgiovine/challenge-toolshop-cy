# XAcademy - QA Automation – Cypress | Toolshop

## Descripción del proyecto

Proyecto de automatización de pruebas funcionales E2E (End-to-End) sobre la aplicación web [Practice Software Testing – Toolshop](https://with-bugs.practicesoftwaretesting.com/#/).

## Tecnologías y herramientas

- **Cypress:** automatización de pruebas E2E.
- **JavaScript:** lenguaje utilizado para desarrollar los tests.
- **Node.js:** entorno de ejecución.
- **Fixtures:** almacenamiento de datos de prueba.
- **Custom Commands:** comandos personalizados para reutilizar acciones.
- **Trello:** gestión y seguimiento de tareas y bugs.
- **Git / GitHub:** control de versiones y almacenamiento del proyecto.

## Estructura del proyecto

```text
.
├── cypress.config.js
├── cypress
│   ├── e2e
│   │   ├── 01-compra.cy.js
│   │   ├── 02-registro.cy.js
│   │   ├── 03-contacto.cy.js
│   │   ├── 04-login.cy.js
│   │   ├── 05-busqueda.cy.js
│   │   ├── 06-carrito.cy.js
│   │   └── 07-api.cy.js
│   ├── fixtures
│   │   ├── checkout.json
│   │   ├── contact.json
│   │   ├── register.json
│   │   ├── search.json
│   │   └── users.json
│   └── support
│       ├── commands.js
│       ├── e2e.js
│       └── selectors.js
├── .gitignore
├── package.json``
├── package-lock.json
└── README.md
```

## Gestión y documentación QA

**Tablero Trello**

https://trello.com/b/eqbpBNU9/bug-tracker-toolshop

**Archivo de casos de prueba**

https://docs.google.com/spreadsheets/d/1qY850XJUuGPUUrVFrW4CXWsvgH_TqilGgK4JNguP66Q/edit?gid=443160301#gid=443160301

## Ejecución de las pruebas

### Requisitos previos

- Tener instalado Node.js.
- Tener instalado Google Chrome.
- Clonar el repositorio.

### Instalación

```bash
npm install
```

### Ejecutar Cypress en modo visual

```bash
npx cypress open
```

### Ejecutar las pruebas desde terminal

```bash
npx cypress run
```

### Ejecutar un test específico en Chrome

```bash
npx cypress run --browser chrome --spec "cypress/e2e/01-compra.cy.js"
```


## Integrante del proyecto

**Victoria Paula Del Giovine**

- Rol: QA Tester / QA Automation en formación.
- Email: victoriapaulaml@gmail.com

Proyecto desarrollado individualmente.
