# contador-de-cumpleaños
# README - Pequeño Sitio Web de Cumpleaños

Este repositorio contiene los archivos necesarios para crear un sencillo sitio web que cuenta los días hasta el cumpleaños de una persona y permite la descarga de una carta en el día del cumpleaños. A continuación, te proporcionaremos una breve descripción y guía de uso.

## Descripción

Este proyecto se enfoca en crear un contador que muestra la cantidad de días restantes desde la fecha en la que se carga el sitio web hasta la fecha de cumpleaños de una persona. En el día del cumpleaños, el usuario puede descargar una carta de felicitación.
Este no es nada del otro mundo, simplemente es un detalle que elabore y quiza a alguien mas le pueda servir.

## Uso


1. **Configura la fecha de cumpleaños**:
   Abre el archivo `index.html` en un editor de código y busca la siguiente línea:

   ```javascript
  var countDownDate1 = new Date("'yyyy-mm-dd").getTime();
   ```

   Reemplaza `'yyyy-mm-dd'` con la fecha de cumpleaños de la persona en formato 'año-mes-día'.

2. **Abre el sitio web**:
   Abre el archivo `index.html` en tu navegador web favorito. El contador mostrará la cantidad de días restantes hasta el cumpleaños de la persona.

3. **Descarga la carta**:
   En el día del cumpleaños, el botón "Descargar carta" estará habilitado. Simplemente haz clic en el botón para descargar la carta de felicitación.
* Remplaza el pdf que yo ya tengo por el tuyo *

4. **Personalización (opcional)**:
   Si deseas personalizar el diseño o el mensaje de la carta de felicitación, puedes modificar el archivo `index.html` y los archivos CSS y JS según tus preferencias.

## Notas

- El archivo `script.js` es el encargado de gestionar la lógica del contador y la habilitación del botón de descarga de la carta. Puedes revisar su contenido si deseas comprender mejor el funcionamiento.

- Este proyecto es bastante sencillo y no requiere conocimientos avanzados de programación. Si tienes alguna pregunta o deseas realizar mejoras, no dudes en explorar y modificar el código a tu gusto.

