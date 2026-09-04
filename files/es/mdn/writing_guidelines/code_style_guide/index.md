---
title: Directrices para escribir ejemplos de código
short-title: Estilo de código
slug: MDN/Writing_guidelines/Code_style_guide
l10n:
  sourceCommit: 7ff752fba26e0bb950998bb5476157ff96c7d314
---

Este artículo describe las directrices de estilo y formato para los ejemplos de código en MDN Web Docs, independientemente del lenguaje de programación.
Para obtener directrices sobre la prosa y otros contenidos, consulta la [guía de estilo de escritura](/es/docs/MDN/Writing_guidelines/Writing_style_guide#code_examples).

Para obtener directrices específicas de tecnología, consulta los siguientes artículos:

- [Directrices de HTML](/es/docs/MDN/Writing_guidelines/Code_style_guide/HTML)
- [Directrices de CSS](/es/docs/MDN/Writing_guidelines/Code_style_guide/CSS)
- [Directrices de JavaScript](/es/docs/MDN/Writing_guidelines/Code_style_guide/JavaScript)
- [Directrices del indicador de Shell](/es/docs/MDN/Writing_guidelines/Code_style_guide/Shell)

## Principios generales para los ejemplos de código

Existe una consideración general que debes tener en cuenta: **Los lectores copiarán y pegarán ejemplos en su propio código y es posible que lo utilicen en producción.**
Por lo tanto, debes asegurarte de que los ejemplos de código sean utilizables, sigan las mejores prácticas generalmente aceptadas y no hagan nada que pueda hacer que una aplicación sea insegura, ineficiente, abultada o inaccesible.
Si el ejemplo de código no es ejecutable o no es apto para producción, incluye una advertencia en un comentario de código y en el texto explicativo; por ejemplo, si es solo un fragmento y no un ejemplo completo, deja esto claro. Esto también significa que debes proporcionar toda la información necesaria para ejecutar el ejemplo, incluidas las dependencias y la información de configuración.

Los ejemplos de código deben ser lo suficientemente sencillos para ser comprensibles, pero lo suficientemente complejos para hacer algo interesante y, preferiblemente, útiles.
El objetivo no es necesariamente producir código eficiente e ingenioso que impresione a expertos y tenga una gran funcionalidad, sino más bien compartir ejemplos de trabajo reducidos que se puedan entender y aprender lo más rápido posible.

Algunas directrices más generales incluyen:

- Los ejemplos de código deben ser cortos y, idealmente, mostrar solo la característica que te interesa de inmediato.
- Escribe tu código para que sea lo más comprensible posible, incluso si no es la forma más eficiente de escribirlo.
- No incluyas código innecesario del lado del servidor, bibliotecas, marcos de trabajo (_frameworks_), preprocesadores y otras dependencias similares. Hacen que el código sea menos portátil y más difícil de ejecutar y entender. Usa código simple siempre que sea posible.
- No asumas el conocimiento de los lectores sobre bibliotecas, marcos de trabajo, preprocesadores u otras características no nativas. Por ejemplo, usa nombres de clases que tengan sentido dentro del ejemplo en lugar de nombres de clases que tengan sentido para usuarios de BEM o Bootstrap.
- Sé inclusivo en tus ejemplos de código; considera que los lectores de MDN provienen de todo el mundo y son diversos en sus etnias, religiones, edades, géneros, etc. Asegúrate de que el texto en los ejemplos de código refleje esa diversidad y sea inclusivo para todas las personas.
- No uses características obsoletas por brevedad (como elementos de presentación como {{HTMLElement("big")}} o {{domxref("Document.write", "document.write()")}}); hazlo correctamente.
- En el caso de demostraciones de API, si estás utilizando múltiples API juntas, señala qué API se incluyen y qué características provienen de cada una.

### Compatibilidad con navegadores

Al crear ejemplos de código para una tecnología que aún no está disponible en todos los navegadores principales, considera usar la [detección de características](/es/docs/Learn_web_development/Extensions/Testing/Feature_detection) para recurrir a un comportamiento más simple o informar al usuario que su navegador aún no es compatible.
No especifiques los navegadores compatibles y sus versiones en comentarios de código o prosa, ya que esta información queda obsoleta rápidamente.

## Estilo y formato de código de MDN

Las opiniones sobre la indentación, el espacio en blanco y la longitud de línea correctos siempre han sido controvertidas. Las discusiones sobre estos temas son una distracción para crear y mantener el contenido.
En MDN Web Docs, usamos [Prettier](https://prettier.io/) como formateador de código para mantener el estilo de código consistente y evitar discusiones fuera de tema. Puedes consultar nuestro [archivo de configuración](https://github.com/mdn/content/blob/main/.prettierrc.json) para conocer las reglas actuales y leer la [documentación de Prettier](https://prettier.io/docs/index.html).

Además del formato automatizado, hay algunas otras reglas para los ejemplos de código en MDN para que el resultado se represente bien.

### Elige el lenguaje correcto

Para garantizar el formato adecuado y el resaltado de sintaxis de los bloques de código, especifica correctamente el lenguaje del bloque de código.
Consulta [Bloques de código de ejemplo en Markdown de MDN](/es/docs/MDN/Writing_guidelines/Howto/Markdown_in_MDN#example_code_blocks) para obtener una lista de los lenguajes compatibles con MDN, así como detalles sobre cómo solicitar un nuevo lenguaje.

Si el bloque de código es pseudocódigo, la salida de un comando o, de alguna manera, no es un lenguaje de programación, establece el lenguaje en `plain`:

````md
```plain
StaleElementReferenceException: The element reference of ABD-123 is stale…
```
````

> [!WARNING]
> Si el lenguaje deseado aún no es compatible con MDN, **no** establezcas el lenguaje de un bloque de código en un lenguaje similar, ya que hacerlo puede tener efectos secundarios no deseados con el formato de Prettier y el resaltado de sintaxis.

### Longitud de línea de código

Las líneas de código no deben ser tan largas que requieran desplazamiento horizontal para leerlas.
Divide las líneas largas en puntos naturales de ruptura por el bien de la legibilidad, pero no a expensas de las mejores prácticas.
Por ejemplo, esto no es ideal:

```js example-bad
let tommyCat =
  "Dijo Tommy el Gato mientras retrocedía para limpiar cualquier materia extraña que pudiera haberse metido en su poderosa garganta. Más de una rata callejera gorda había encontrado su muerte mientras miraba fijamente el cavernoso cañón de esta impresionante máquina merodeadora.";
```

Esto es mejor, pero algo incómodo:

```js
const tommyCat =
  "Dijo Tommy el Gato mientras retrocedía para limpiar cualquier materia extraña " +
  "que pudiera haberse metido en su poderosa garganta. Más de una rata callejera gorda " +
  "había encontrado su muerte mientras miraba fijamente el cavernoso cañón de esta " +
  "impresionante máquina merodeadora.";
```

Incluso mejor es usar una plantilla literal:

```js example-good
const tommyCat = `Dijo Tommy el Gato mientras retrocedía para limpiar cualquier materia extraña
  que pudiera haberse metido en su poderosa garganta. Más de una rata callejera gorda
  había encontrado su muerte mientras miraba fijamente el cavernoso cañón de esta
  impresionante máquina merodeadora.`;
```

### Altura del bloque de código

Los bloques de código deben ser tan largos como sea necesario, pero no más. Idealmente, apunta a algo corto, como 15-25 líneas. Si un bloque de código va a ser mucho más largo, considera mostrar la parte más útil y enlaza a un ejemplo completo en un repositorio de GitHub, Gist o CodePen, por ejemplo.

### Formato de código en línea

Usa la sintaxis de código en línea para marcar nombres de funciones, nombres de variables y nombres de métodos. Por ejemplo: "la función `frenchText()`" se escribe en markdown como:

```md
la función `frenchText()`
```

Los nombres de los métodos deben ir seguidos de un par de paréntesis: por ejemplo, `doSomethingUseful()`. Los paréntesis ayudan a diferenciar los métodos de otros términos de código.

## Directrices para una representación adecuada

Debes seguir estas directrices para asegurarte de que los ejemplos de código que escribas se muestren correctamente en MDN Web Docs. También debes considerar la capacidad de respuesta al escribir ejemplos de código para que también sean útiles en dispositivos móviles.

### Tamaño del ejemplo de código renderizado

- **Establece el ancho al 100%**: El panel de contenido principal en MDN Web Docs tiene aproximadamente 700px de ancho en el escritorio, por lo que los ejemplos de código incrustados deben verse bien con ese ancho.
- **Establece la altura por debajo de los 700px**: Recomendamos mantener esta altura para el ancho del ejemplo de código renderizado para una legibilidad máxima en pantalla.

### Resaltar ejemplos como buenos o malos

Notarás en esta página que los bloques de código que representan buenas prácticas a seguir se representan con una marca de verificación verde en la esquina derecha, y los bloques de código que demuestran malas prácticas se representan con una cruz blanca en un círculo rojo.

Puedes seguir el mismo estilo al escribir ejemplos de código. No es necesario que uses este estilo en todas partes, solo en lugares donde quieras destacar específicamente el buen y mal uso en los ejemplos de código.

Un bloque de código se escribe en markdown usando "vallas de código" para delimitar el bloque de código, seguido del lenguaje en la cadena de información. Por ejemplo:

````md
```js
function myFunc() {
  console.log("Hello!");
}
```
````

Para representar el bloque de código como un ejemplo bueno o malo, agrega `example-good` o `example-bad` después de la cadena del lenguaje, así:

````md
```html example-good
<p>Buen ejemplo</p>
```

```html example-bad
<p>Mal ejemplo</p>
```
````

Estos se representarán como:

```html example-good
<p>Buen ejemplo</p>
```

```html example-bad
<p>Mal ejemplo</p>
```

## Directrices para usar texto de marcador de posición

Usa el texto de marcador de posición lorem-ipsum generado desde [lipsum.com](https://www.lipsum.com/) o el complemento de VS Code [Lorem ipsum](https://marketplace.visualstudio.com/items?itemName=Tyriar.lorem-ipsum). El texto estándar de lorem-ipsum se incluye en nuestra configuración del verificador ortográfico, por lo que no se reportará como errores tipográficos en los IDE o en las pruebas durante la revisión de código. Usar un texto de marcador de posición consistente hace que el código de ejemplo sea más fácil de revisar, especialmente cuando aparece repetidamente. También ayuda a mantener los ejemplos claramente para fines de ilustración y evita distraer a los lectores con contenido irrelevante.
