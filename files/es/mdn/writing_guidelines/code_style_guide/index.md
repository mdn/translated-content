---
title: Directrices para escribir ejemplos de código
slug: MDN/Writing_guidelines/Code_style_guide
original_slug: MDN/Writing_guidelines/Writing_style_guide/Code_style_guide
l10n:
  sourceCommit: f7c186696980fee97e72261370d7b5a8c1cd9302
---

{{MDNSidebar}}

Las pautas descritas en este artículo se aplican al estilo y formato de los ejemplos de código, independientemente del lenguaje. Para obtener pautas sobre qué contenido incluir al escribir ejemplos de código, consulta la [guía de estilo de escritura](/es/docs/MDN/Writing_guidelines/Writing_style_guide#code_examples).

Para pautas específicas de tecnología, consulta los siguientes artículos:

- [Directrices HTML](/es/docs/MDN/Writing_guidelines/Code_style_guide/HTML)
- [Directrices CSS](/es/docs/MDN/Writing_guidelines/Code_style_guide/CSS)
- [Directrices de JavaScript](/es/docs/MDN/Writing_guidelines/Code_style_guide/JavaScript)
- [Directrices de la interfaz de línea de comandos (Shell)](/es/docs/MDN/Writing_guidelines/Code_style_guide/Shell)

## Mejores prácticas generales

Esta sección proporciona las mejores prácticas para crear un ejemplo de código mínimo comprensible que demuestre el uso de una función o característica específica.

Los ejemplos de código que agregues a MDN Web Docs deben ser:

- lo suficientemente simples como para ser comprensibles, pero
- lo suficientemente complejos como para hacer algo interesante, y preferiblemente útiles.

Existe una consideración general que debes tener en cuenta: **Los lectores copiarán y pegarán el fragmento de código en su propio código y es posible que lo utilicen en producción.**

Por lo tanto, debes asegurarte de que el ejemplo de código sea utilizable, siga las mejores prácticas generalmente aceptadas y **no** realice acciones que puedan hacer que una aplicación sea insegura, ineficiente, abultada o inaccesible. Si el ejemplo de código no es ejecutable o no es apto para producción, asegúrate de incluir una advertencia en un comentario de código y en el texto explicativo; por ejemplo, si es solo un fragmento y no un ejemplo completo, deja esto claro. Esto también significa que debes proporcionar **toda** la información necesaria para ejecutar el ejemplo, incluidas las dependencias e información de configuración.

Los ejemplos de código deben ser lo más autosuficientes y comprensibles posible. El objetivo no es necesariamente producir código eficiente e ingenioso que impresione a expertos y tenga una gran funcionalidad, sino más bien producir ejemplos de trabajo reducidos que se puedan entender lo más rápido posible.

Algunas mejores prácticas adicionales incluyen:

- El ejemplo de código debe ser corto y mostrar idealmente solo la característica que te interesa de inmediato.
- **Solo** incluye el código que es esencial para el ejemplo. Una gran cantidad de código no relevante puede distraer o confundir fácilmente al lector. Si deseas proporcionar un ejemplo completo y más extenso, colócalo en uno de nuestros [repositorios de GitHub](https://github.com/mdn/) (o en JSBin, Codepen u otro similar) y luego proporciona el enlace a la versión completa arriba o debajo del fragmento.
- No incluyas código innecesario del lado del servidor, bibliotecas, marcos de trabajo (_frameworks_), preprocesadores y otras dependencias similares. Esto dificulta la portabilidad y la comprensión del código. Usa código simple siempre que sea posible.
- No asumas el conocimiento de los lectores sobre bibliotecas, marcos, preprocesadores u otras características no nativas. Por ejemplo, utiliza nombres de clases que tengan sentido dentro del ejemplo en lugar de nombres de clases que tengan sentido para usuarios de BEM o Bootstrap.
- Escribe tu código de manera limpia y comprensible, incluso si no es la forma más eficiente de escribirlo.
- Sé inclusivo en tus ejemplos de código; considera que los lectores de MDN provienen de todo el mundo y son diversos en sus etnias, religiones, edades, géneros, etc. Asegúrate de que el texto en los ejemplos de código refleje esa diversidad y sea inclusivo para todas las personas.
- No uses malas prácticas por brevedad (como elementos de presentación como {{HTMLElement("big")}} o {{domxref("Document.write", "document.write()")}}); hazlo correctamente.
- En el caso de demostraciones de API, si estás utilizando múltiples API juntas, señala qué APIs se incluyen y qué características provienen de cada una.

## Pautas para el formato

Las opiniones sobre la correcta indentación, espaciado y longitud de líneas siempre han sido controvertidas. Las discusiones sobre estos temas son una distracción para crear y mantener el contenido.

En MDN Web Docs, utilizamos [Prettier](https://prettier.io/) como formateador de código para mantener consistente el estilo de código (y evitar discusiones fuera de tema). Puedes consultar nuestro [archivo de configuración](https://github.com/mdn/content/blob/main/.prettierrc.json) para conocer las reglas actuales y leer la [documentación de Prettier](https://prettier.io/docs/en/index.html).

Prettier formatea todo el código y mantiene el estilo consistente. Sin embargo, hay algunas reglas adicionales que debes seguir.

Estas pautas de MDN Web Docs para formatear ejemplos de código también son buenas prácticas cuando estás codificando.

### Elección de un lenguaje de sintaxis

Para garantizar el formato adecuado y el resaltado de sintaxis de los bloques de código, los escritores deben especificar el lenguaje del bloque de código que están escribiendo. Consulta [Bloques de código de ejemplo en el formato MDN Markdown](/es/docs/MDN/Writing_guidelines/Howto/Markdown_in_MDN#example_code_blocks) para obtener una lista de los lenguajes admitidos por MDN, así como detalles sobre cómo solicitar un nuevo lenguaje.

Si el bloque de código es pseudocódigo, la salida de un comando, o de alguna manera no es un lenguaje de programación, establece explícitamente el lenguaje como `plain`.

> [!WARNING]
> Si el lenguaje deseado aún no es compatible con MDN, **no** establezcas el lenguaje de un bloque de código en un lenguaje similar, ya que hacerlo puede tener efectos secundarios no deseados con el formato de Prettier y el resaltado de sintaxis.

### Longitud de línea de código

- Las líneas de código no deben ser tan largas que requieran desplazamiento horizontal para leerlas.
- Como práctica recomendada, mantiene las líneas de código hasta un máximo de 80 caracteres de longitud (64 para [ejemplos interactivos](https://github.com/mdn/interactive-examples)).
- Divide las líneas largas en puntos naturales de ruptura por el bien de la legibilidad, pero no a expensas de las mejores prácticas.

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
  impresionante máquina merodeadora`";
```

```js example-good
if (
  obj.CONDITION ||
  obj.OTHER_CONDITION ||
  obj.SOME_OTHER_CONDITION ||
  obj.YET_ANOTHER_CONDITION
) {
  /* algo */
}

const toolkitProfileService = Components.classes[
  "@mozilla.org/toolkit/profile-service;1"
].createInstance(Components.interfaces.nsIToolkitProfileService);
```

### Altura del bloque de código

Los bloques de código deben ser tan largos como sea necesario, pero no más. Idealmente, apunta a algo corto, como 15-25 líneas. Si un bloque de código va a ser mucho más largo, considera mostrar solo el fragmento más útil y enlaza al ejemplo completo en un repositorio de GitHub o CodePen, por ejemplo.

#### Formato de código en línea

Utiliza la sintaxis de código en línea (\`) para marcar los nombres de funciones, nombres de variables y nombres de métodos. Por ejemplo: "la función `frenchText()`".

**Los nombres de los métodos deben ir seguidos de un par de paréntesis**: por ejemplo, `doSomethingUseful()`. Los paréntesis ayudan a diferenciar los métodos de otros términos de código.

## Pautas para una representación adecuada

Estas pautas deben seguirse para asegurar que los ejemplos de código que escribas se visualicen correctamente en MDN Web Docs. También debes considerar la capacidad de respuesta al escribir ejemplos de código para que también sean útiles en dispositivos móviles.

### Tamaño del ejemplo de código renderizado

- **Establece el ancho al 100%**: El panel de contenido principal en MDN Web Docs tiene aproximadamente 700px de ancho en escritorio, por lo que los ejemplos de código incrustados deben lucir bien con ese ancho.
- **Establece la altura por debajo de los 700px**: Recomendamos mantener esta altura para el ancho del ejemplo de código renderizado para una legibilidad máxima en pantalla.

### Color en el ejemplo de código renderizado

- Usa palabras clave para los colores primarios y otros colores "básicos", por ejemplo:

  ```css example-good
  color: black;
  color: white;
  color: red;
  ```

- Utiliza `rgb()` para colores más complejos (incluidos los semitransparentes):

  ```css example-good
  color: rgb(0 0 0 / 50%);
  color: rgb(248 242 230);
  ```

- Para colores hexadecimales, utiliza la forma corta cuando sea relevante:

  ```css example-good
  color: #058ed9;
  color: #a39a92c1;
  color: #ff0;
  color: #fbfa;
  ```

  ```css-nolint example-bad
  color: #ffff00;
  color: #ffbbffaa;
  ```

### Marcar ejemplos renderizados como buenos o malos

Notarás en esta página que los bloques de código que representan buenas prácticas están renderizados con una marca de verificación verde en la esquina derecha, y los bloques de código que demuestran malas prácticas están renderizados con una cruz blanca en un círculo rojo.

Puedes seguir el mismo estilo al escribir ejemplos de código. No es necesario utilizar este estilo en todas partes, solo en páginas donde desees destacar específicamente buenas y malas prácticas en tus ejemplos de código.

Para lograr esta representación, utiliza "vallas de código" para delimitar el bloque de código, seguido de la cadena de información del lenguaje. Por ejemplo:

```js
function myFunc() {
  console.log("Hello!");
}
```

Para representar el bloque de código como un ejemplo bueno o malo, agrega `example-good` o `example-bad` después de la cadena de información del lenguaje, de la siguiente manera:

````md
```html example-good
<p></p>
```

```html example-bad
<p></p>
```
````

Estos se representarán como:

```html example-good
<p class="brush: js example-good"></p>
```

```html example-bad
<p class="brush: js example-bad"></p>
```
