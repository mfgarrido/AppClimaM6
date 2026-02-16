# App de Clima — SPA con Vue.js

## Descripción

Esta aplicación corresponde al desarrollo del Módulo 6 y consiste en una App de Clima implementada como una Single Page Application (SPA) utilizando Vue.js.

La temática utilizada se basa en la visualización del clima de distintos lugares, permitiendo al usuario explorar información básica del clima actual y acceder a información más detallada como pronósticos y estadísticas semanales.

La aplicación utiliza componentes reutilizables, binding reactivo, manejo de eventos y navegación interna sin recarga de página mediante Vue Router.

---

## Vistas principales

### Home

* Vista inicial de la aplicación.
* Muestra un listado de lugares con información básica del clima.
* Permite buscar o filtrar lugares mediante un input interactivo.
* Desde cada tarjeta se puede navegar al detalle del lugar seleccionado.

### Detalle de Lugar

* Muestra información ampliada del lugar seleccionado.
* Incluye:

  * Clima actual
  * Pronóstico de varios días
  * Estadísticas calculadas (mínimo, máximo, promedio)
* Permite volver a la vista Home mediante navegación interna.

---

## Rutas configuradas (Vue Router)

| Ruta         | Descripción                                                  |
| ------------ | ------------------------------------------------------------ |
| `/`          | Vista Home con listado de lugares                            |
| `/lugar/:id` | Vista dinámica que muestra el detalle del lugar seleccionado |

La navegación se realiza sin recargar la página gracias al uso de Vue Router y `<router-link>`.

---

## Instrucciones para ejecutar el proyecto

1. Clonar repositorio o descargar proyecto

2. Abrir terminal en la carpeta del proyecto

3. Instalar dependencias

```
npm install
```

4. Ejecutar servidor de desarrollo

```
npm run dev
```

5. Abrir en navegador la URL indicada en la terminal (ejemplo)

```
http://localhost:5173/
```

---

## Subida a repositorio GitHub

Inicializar repositorio local:

```
git init
git add .
git commit -m "Entrega modulo 6"
```

Conectar repositorio remoto:

```
git remote add origin URL_DEL_REPOSITORIO
git branch -M main
git push -u origin main
```

Para actualizaciones:

```
git add .
git commit -m "Actualización del proyecto"
git push
```

---

## Tecnologías utilizadas

* Vue.js
* Vue Router
* Vite
* JavaScript
* HTML5
* CSS3

---

## Autor

Matías Figueroa
Enlace a repositorio: https://github.com/mfgarrido/AppClimaM6.git