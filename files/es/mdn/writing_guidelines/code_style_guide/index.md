---
title: Directrices para escribir ejemplos de código
short-title: Estilo de código
slug: MDN/Writing_guidelines/Code_style_guide
l10n:
  sourceCommit: 7ff752fba26e0bb950998bb5476157ff96c7d314
---

Este artículo describe las directrices de estilo y formato de código para ejemplos de código en MDN Web Docs, independientemente del lenguaje de programación.
Para obtener directrices sobre la prosa y otros contenidos, consulte la [guía de estilo de escritura](/es/docs/MDN/Writing_guidelines/Writing_style_guide#code_examples).

Para obtener directrices específicas de tecnología, consulte los siguientes artículos:

- [Directrices HTML](/es/docs/MDN/Writing_guidelines/Code_style_guide/HTML)
- [Directrices CSS](/es/docs/MDN/Writing_guidelines/Code_style_guide/CSS)
- [Directrices de JavaScript](/es/docs/MDN/Writing_guidelines/Code_style_guide/JavaScript)
- [Directrices de la línea de comandos (Shell)](/es/docs/MDN/Writing_guidelines/Code_style_guide/Shell)

## Principios generales para los ejemplos de código

Hay una consideración general que debe tener en cuenta: **Los lectores copiarán y pegarán los ejemplos en su propio código y pueden ponerlo en producción.**
Por lo tanto, debe asegurarse de que los ejemplos de código sean utilizables, sigan las mejores prácticas generalmente aceptadas y no hagan nada que cause que una aplicación sea insegura, ineficiente, abultada o inaccesible.

Si el ejemplo de código no es ejecutable o digno de producción, incluya una advertencia en un comentario de código y en el texto explicativo; por ejemplo, si solo es un fragmento y no un ejemplo completo, deje esto claro. Esto también significa que debe proporcionar toda la información necesaria para ejecutar el ejemplo, incluyendo cualquier dependencia e información de configuración.

Los ejemplos de código deben ser lo suficientemente simples para ser comprensibles, pero lo suficientemente complejos para hacer algo interesante y (preferiblemente) útil.
El objetivo no es necesariamente producir código eficiente e ingenioso que impresione a los expertos y tenga una gran funcionalidad, sino más bien compartir ejemplos de trabajo reducidos que puedan entenderse y aprenderse lo más rápido posible.

Algunas directrices más generales incluyen:

- Los ejemplos de código deben ser cortos y idealmente solo mostrar la característica que le interesa de inmediato.
- Escriba su código para que sea lo más comprensible posible, incluso si no es la forma más eficiente de escribirlo.
- No incluya código innecesario del lado del servidor, bibliotecas, marcos de trabajo, preprocesadores y otras dependencias similares. Hacen que el código sea menos portable y más difícil de ejecutar y comprender. Use código simple siempre que sea posible.
- No asuma el conocimiento de los lectores sobre ninguna biblioteca, marco de trabajo, preprocesador u otras características no nativas. Por ejemplo, use nombres de clase que tengan sentido dentro del ejemplo en lugar de nombres de clase que tengan sentido para usuarios de BEM o Bootstrap.
- Sea inclusivo en sus ejemplos de código; considere que los lectores de MDN provienen de todo el mundo y son diversos en sus etnias, religiones, edades, géneros, etc. Asegúrese de que el texto en los ejemplos de código refleje esa diversidad sea inclusivo para todas las personas.
- No use características en desuso por brevedad (como elementos de presentación como {{HTMLElement("big")}} o {{domxref("Document.write", "document.write()")}}); hágalo correctamente.
- En el caso de demostraciones de API, si está usando múltiples API juntas, señale qué API están incluidas y qué características provienen de dónde.

### Soporte del navegador

Al crear ejemplos de código para una tecnología que aún no está disponible en todos los navegadores principales, considere usar [detección de características](/es/docs/Learn_web_development/Extensions/Testing/Feature_detection) para retroceder a un comportamiento más simple o informar al usuario que su navegador aún no es compatible.
No especifique los navegadores compatibles y sus versiones en comentarios de código o en prosa, ya que esta información rápidamente queda desactualizada.

## Estilo y formato de código de MDN

Las opiniones sobre la sangría correcta, el espacio en blanco y las longitudes de línea siempre han sido controvertidas. Las discusiones sobre estos temas son una distracción para crear y mantener contenido.
En MDN Web Docs, usamos [Prettier](https://prettier.io/) como formateador de código para mantener el estilo de código consistente y evitar discusiones fuera de tema. Puede consultar nuestro [archivo de configuración](https://github.com/mdn/content/blob/main/.prettierrc.json) para conocer las reglas actuales y leer la [documentación de Prettier](https://prettier.io/docs/index.html).

Además del formato automatizado, hay algunas otras reglas para los ejemplos de código en MDN para que el resultado se represente bien.

### Elegir el lenguaje correcto

Para garantizar el formato adecuado y el resaltado de sintaxis de los bloques de código, especifique correctamente el lenguaje del bloque de código.
Consulte [Bloques de código de ejemplo en Markdown de MDN](/es/docs/MDN/Writing_guidelines/Howto/Markdown_in_MDN#example_code_blocks) para obtener una lista de los lenguajes compatibles con MDN, así como detalles sobre cómo solicitar un nuevo lenguaje.

Si el bloque de código es pseudocódigo, la salida de un comando o de alguna otra manera no es un lenguaje de programación, configure el lenguaje como `plain`:

````md
```plain
StaleElementReferenceException: The element reference of ABD-123 is stale…
```
````

> [!WARNING]
> Si el lenguaje deseado aún no es compatible con MDN, **no** configure el lenguaje de un bloque de código en un lenguaje similar, ya que hacerlo puede tener efectos secundarios no deseados con el formato de Prettier y el resaltado de sintaxis.

### Longitud de línea de código

Las líneas de código no deben ser tan largas que requieran desplazamiento horizontal para leerlas.
Divida las líneas largas en puntos naturales de ruptura por el bien de la legibilidad, pero no a expensas de las mejores prácticas.
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
  "había encontrado su muerte mientras miraba fijamente el cavernoso cañón de " +
  "esta impresionante máquina merodeadora.";
```

Incluso mejor es usar una plantilla literal:

```js example-good
const tommyCat = `Dijo Tommy el Gato mientras retrocedía para limpiar cualquier materia extraña
  que pudiera haberse metido en su poderosa garganta. Más de una rata callejera gorda
  había encontrado su muerte mientras miraba fijamente el cavernoso cañón de
  esta impresionante máquina merodeadora.`;
```

### Altura del bloque de código

Los bloques de código deben ser tan largos como sea necesario, pero no más. Idealmente, apunte a algo corto, como 15-25 líneas. Si un bloque de código va a ser mucho más largo, considere mostrar solo la parte más útil y vincularse a un ejemplo completo en un repositorio de GitHub, Gist o CodePen, por ejemplo.

### Formato de código en línea

Use la sintaxis de código en línea para marcar nombres de funciones, nombres de variables y nombres de métodos. Por ejemplo: "la función `frenchText()`" se escribe en markdown como:

```md
la función `frenchText()`
```

Los nombres de los métodos deben ir seguidos de un par de paréntesis: por ejemplo, `doSomethingUseful()`. Los paréntesis ayudan a diferenciar los métodos de otros términos de código.

## Directrices para una representación adecuada

Estas directrices deben seguirse para garantizar que los ejemplos de código que escriba se muestren correctamente en MDN Web Docs. También debe considerar la capacidad de respuesta al escribir ejemplos de código para que también sean útiles en dispositivos móviles.

### Tamaño del ejemplo de código representado

- **Establezca el ancho al 100%**: El panel de contenido principal en MDN Web Docs tiene aproximadamente 700px de ancho en el escritorio, por lo que los ejemplos de código incrustados deben verse bien con ese ancho.
- **Establezca la altura por debajo de 700px**: Recomendamos mantener esta altura para el ancho del ejemplo de código representado para una legibilidad máxima en pantalla.

### Resaltar ejemplos como buenos o malos

Notará en esta página que los bloques de código que representan buenas prácticas a seguir se representan con una marca de verificación verde en la esquina derecha, y los bloques de código que demuestran malas prácticas se representan con una cruz blanca en un círculo rojo.

Puede seguir el mismo estilo al escribir ejemplos de código. No necesita usar este estilo en todas partes, solo en lugares donde desee señalar específicamente el buen y mal uso en los ejemplos de código.

Un bloque de código se escribe en markdown usando "cercas de código" para delimitar el bloque de código, seguido del lenguaje en la cadena de información. Por ejemplo:

````md
```js
function myFunc() {
  console.log("Hello!");
}
```
````

Para representar el bloque de código como un ejemplo bueno o malo, agregue `example-good` o `example-bad` después de la cadena del lenguaje, así:

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

Use el texto de marcador de posición lorem-ipsum generado desde [lipsum.com](https://www.lipsum.com/) o el complemento de VS Code [Lorem ipsum](https://marketplace.visualstudio.com/items?itemName=Tyriar.lorem-ipsum). El texto lorem-ipsum estándar está incluido en nuestra configuración de verificación ortográfica, por lo que no se reportará como errores tipográficos en IDE o en pruebas durante la revisión del código. El uso de un texto de marcador de posición consistente hace que el código de ejemplo sea más fácil de revisar, especialmente cuando aparece repetidamente. También ayuda a mantener los ejemplos claramente para fines de ilustración y evita distraer a los lectores con contenido irrelevante.
