---
title: Barras laterales de referencia de API
slug: MDN/Writing_guidelines/Howto/Write_an_api_reference/Sidebars
l10n:
  sourceCommit: 6d363614de8a40c33d1afe92e4e846b75beea986
---

Puedes incluir una barra lateral personalizada en las páginas de referencia de la API para que muestre enlaces a interfaces relacionadas, tutoriales y otros recursos relevantes solo para esa API.
Este artículo explica cómo.

## Crear una barra lateral

Debes seguir los siguientes tres pasos para crear la barra lateral de la API:

1. Crea tus páginas de referencia de API.
2. Añade una entrada para tu API en particular al archivo [`GroupData.json`](https://github.com/mdn/content/blob/main/files/jsondata/GroupData.json).
3. Utiliza la macro [`APIRef`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/api_list_specs.rs) para insertar la barra lateral en cada página en la que quieras mostrarla.

Repasemos cada uno de estos pasos.
El ejemplo al que nos referiremos en este artículo es la [Fetch API](/es/docs/Web/API/Fetch_API).

### Añadir una entrada a GroupData.json

El archivo `GroupData.json` contiene todos los datos relacionados con los enlaces que deben aparecer en las barras laterales de referencia de la API.
Cuando invocas la macro `APIRef`, toma un nombre de API que se le da como parámetro, busca ese nombre en `GroupData.json`, crea una barra lateral adecuada y la inserta en la página.

Para añadir una entrada a `GroupData.json`, debes:

1. Asegúrate de tener una cuenta en [GitHub](https://github.com/).
2. Haz un fork del repositorio de contenido de MDN, crea una nueva rama para contener tus cambios, y clona el repositorio localmente.
3. Cambia a tu nueva rama antes de empezar a trabajar, y asegúrate de hacer push a tus cambios cuando termines.
4. Crea un pull request para que el equipo de MDN pueda revisar tu trabajo, y solicitar cambios si es necesario.

El archivo `GroupData.json` está en el directorio `files/jsondata/`.
Al mirarlo, verás una estructura JSON extensa, donde cada API tiene su propio miembro.
El nombre es el nombre de la API, y el valor es un objeto que contiene varios submiembros que definen los enlaces de la barra lateral que se crearán.

Por ejemplo, consulta la página [Fetch API](/es/docs/Web/API/Fetch_API) en MDN.
La entrada correspondiente en `GroupData.json` se ve así:

```json
{
  "Fetch API": {
    "overview": ["Fetch API"],
    "interfaces": [
      "Headers",
      "Request",
      "Response",
      "FetchController",
      "FetchObserver",
      "FetchSignal",
      "ObserverCallback"
    ],
    "methods": ["fetch()"],
    "properties": [],
    "events": []
  }
}
```

Como puedes ver, hemos utilizado "Fetch API" para el nombre, y dentro del valor del objeto incluimos varios submiembros.

#### Submiembros a incluir dentro de una entrada de GroupData

Esta sección enumera todos los submiembros que podrías incluir en una entrada de `GroupData`.

Ten en cuenta que la mayoría de los valores incluidos dentro de los submiembros enumerados equivalen tanto al texto del enlace como a los slugs añadidos al final de la página principal del índice de la API — `https://developer.mozilla.org/<language-code>/docs/Web/API` — para crear la URL final del enlace mostrado.
Por ejemplo, "Response" generará un enlace como este:

```html
<li><a href="/es/docs/Web/API/Response">Response</a></li>
```

Hay algunas excepciones.
Por ejemplo, el submiembro "guides" contiene las URLs que apuntan a guías/tutoriales asociados.
En este caso, MDN añade las URLs al final de la raíz de MDN docs — `https://developer.mozilla.org/<language-code>` — lo que permite incluir un artículo en cualquier parte de MDN.

Estos son los miembros disponibles.
Todos son técnicamente opcionales, pero se recomienda encarecidamente que, en lugar de omitirlos, incluyas arreglos vacíos.

1. `"overview"` — el valor es un arreglo, dentro del cual debes incluir el slug de la página de descripción general de la API, si existe.
   "Fetch API" da como resultado un enlace a [https://developer.mozilla.org/es/docs/Web/API/Fetch_API](/es/docs/Web/API/Fetch_API).
2. `"interfaces"` — el valor es un arreglo en el que debes enumerar todas las interfaces que forman parte de esa API.
   "Response" da como resultado un enlace a [https://developer.mozilla.org/es/docs/Web/API/Response](/es/docs/Web/API/Response).
3. `"methods"` — el valor es un arreglo que debe contener cualquier método que la especificación agregue a las interfaces asociadas con otras API, como los métodos de instanciación creados en {{domxref("Navigator")}} o {{domxref("Window")}}.
   Si hay una gran cantidad de métodos, quizás quieras considerar enumerar solo los más populares, o colocarlos al principio de la lista.
   "fetch()" da como resultado un enlace a [https://developer.mozilla.org/es/docs/Web/API/fetch](/es/docs/Web/API/Window/fetch).
   _No_ incluyas en la lista métodos que sean miembros de interfaces que pertenezcan a la misma API.
4. `"properties"` — el valor es un arreglo que debe contener todas las propiedades asociadas con la API.
   Esto puede incluir propiedades que son miembros de interfaces definidas en la especificación de la API y propiedades que la API define en otras interfaces.
   Si hay una gran cantidad de propiedades, quizás quieras considerar enumerar solo las más populares, o colocarlas al principio de la lista.
   "Headers.append" da como resultado un enlace a [https://developer.mozilla.org/es/docs/Web/API/Headers/append](/es/docs/Web/API/Headers/append).
5. `"events"` — el valor es un arreglo que debe contener el _título_ de los eventos que forman parte de la API, pero están definidos en interfaces que _no_ forman parte de la API (los eventos pertenecientes a las interfaces en la API (`interfaces`) se documentan por defecto).
   Si hay una gran cantidad de eventos, quizás quieras considerar enumerar solo los más populares, o colocarlos al principio de la lista.
   Por ejemplo, `"Document: selectionchange"` es parte de la [Selection API](/es/docs/Web/API/Selection_API), pero `Document` no, por lo que agregamos el evento al arreglo y se vinculará desde el tema [Selection API](/es/docs/Web/API/Selection_API).
6. `"guides"` — el valor es un arreglo de cadenas de texto, cada una de las cuales aborda un tema de guía que explica cómo usar la API.
   Las cadenas contienen la parte de la URL de la guía que sigue a la ruta del idioma: es decir, la parte `/docs/...` de la URL de la guía.
   Por ejemplo, para enlazar con el tema "Uso de Fetch" en `https://developer.mozilla.org/es/docs/Web/API/Fetch_API/Using_Fetch`, el arreglo de la guía contendría "/docs/Web/API/Fetch_API/Using_Fetch".
7. `"dictionaries"` — un arreglo de cadenas de texto que enumera todos los diccionarios que forman parte de la API.
   En general, aquí solo se deben enumerar los diccionarios utilizados por más de una propiedad o método, a menos que tengan un significado especial o sea probable que requieran referencias desde varias páginas.
   "CryptoKeyPair" da como resultado un enlace a [https://developer.mozilla.org/es/docs/Web/API/CryptoKeyPair](/es/docs/Web/API/CryptoKeyPair).
   > [!NOTE]
   > MDN está dejando de documentar diccionarios por separado.
   > Siempre que sea posible, ahora los describe como objetos en los lugares donde se usan.
8. `"types"` — un arreglo de definiciones de tipo y tipos enumerados definidos por la API.
   Puedes optar por enumerar solo aquellos que son de especial importancia o a los que se hace referencia desde varias páginas, con el fin de mantener la lista breve.
   > [!NOTE]
   > MDN está dejando de documentar por separado las definiciones de tipo.
   > Siempre que sea posible, ahora los describe como valores en los lugares donde se utilizan.
9. `"callbacks"` — el valor es un arreglo que contiene una lista de todos los tipos de callback definidos para la API.
   Es posible que consideres innecesario usar este grupo, incluso en las API que incluyen tipos de callback, ya que a menudo no resulta útil documentarlos por separado.

## Etiquetas utilizadas por las barras laterales

MDN descubre algunos submiembros automáticamente en las páginas secundarias, en función de las etiquetas de la página.
Las páginas bajo la API de nivel superior son rastreadas cada vez que se renderiza la barra lateral, y MDN crea automáticamente las entradas para métodos (etiqueta "Method"), propiedades (etiqueta "Property") y constructores (etiqueta "Constructor").

Los submiembros también se decoran automáticamente con iconos de advertencia basados en etiquetas.
Se añaden decoraciones para submiembros experimentales (etiqueta "Experimental"), no estándar (etiqueta "Non Standard" o "Non-standard") u obsoletos (etiqueta "Deprecated").

Más información sobre el procesamiento basado en etiquetas está disponible [en el código fuente de APIRef](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/api_list_specs.rs).

## Insertar la barra lateral

Una vez que hayas agregado una entrada para tu API en `GroupData.json`, la hayas enviado como un pull request y el cambio haya sido aceptado en el repositorio principal, puedes incluirla en las páginas de referencia de tu API utilizando la macro [`APIRef`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/api_list_specs.rs), que toma el nombre que usaste para tu API en GroupData como parámetro.
Como ejemplo, la barra lateral de la [WebVR API](/es/docs/Web/API/WebVR_API) se incluye en sus páginas con lo siguiente:

```plain
\{{APIRef("WebVR API")}}
```
