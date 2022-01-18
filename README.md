# PokeTienda!

Desafío realizado para práctica Front-End Trainee.


## Link al proyecto

[PokeTienda](https://inspiring-cray-809417.netlify.app/)

## Información general
Landing page para la visualización de pokemones, con barra de busqueda de pokémon.
La página inicia con un listado de 30 pokemones.

## Tecnologías/librerías

 - ReactJs: Para el desarrollo general del proyecto.
 - Javascript: Para lógica de programación.
 - JSX: Extensión de sintaxis de Javascript.
 - CSS: Estilos de la app.
 - PokeApi: https://pokeapi.co/docs/v2

## Componentes destacados

### Header
Pequeño header con logo de PokeTienda con una animación de scale.
### Input de búsqueda de pokémon
Campo de busqueda, en el cual sólo puedes buscar por medio del nombre exacto del pokémon.
### ItemListContainer
Componente principal en el cual se visualiza el listado de pokemones arrojados por la PokeApi.
### ItemList
Componente ubicado dentro del ItemListContainer donde se itera el listado de los pokemones.
### Item
Card con información de los pokemones cargados, en el cual se aprecia:
-Imagen del pokémon.
-Nombre.
-Tipo de pokémon.
### Footer
Link al perfil del desarrollador.
Link a la página de la empresa.
###
## Modo Responsive
Se diseño el modo responsive en las siguientes resoluciones:
Mobile: 375px
Tablet S: 576px
Tablet M: 768px
Resto del responsive para Desktop.
## Estilos
CSS Puro, con 2 animaciones, una para el logo del Header, y otra para el Loading de la pokkébola.
Font: Lato, San-Serif.
Colores: #EF5350, #D32B2B, #FFCD00, #2366BD

## Folders
Todos los componentes se encuentran separados por carpetas, así mismo cada componente tiene en su misma carpeta sus estilos.
Dentro de src se encuentra un archivo llamada getAPI.js para cada request.
El resto de la lógica de los llamados se encuentran dentro del componente ItemListContainer.

## Instalación 
*npm i*
___
## Para inicio del servidor
*npm run start*

___
### Desarrollado por [Luis Julio](https://www.linkedin.com/in/antsth/)

