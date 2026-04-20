---
title: Barras laterales de referencia de API
slug: MDN/Writing_guidelines/Howto/Write_an_api_reference/Sidebars
l10n:
  sourceCommit: 6d363614de8a40c33d1afe92e4e846b75beea986
---

{{MDNSidebar}}

Puede incluir una barra lateral personalizada en las páginas de referencia de API para que muestre enlaces a interfaces relacionadas, tutoriales y otros recursos relevantes solo para esa API.
Este artículo explica cómo hacerlo.

## Crear una barra lateral

Debe seguir los siguientes tres pasos para crear su barra lateral de API:

1. Cree sus páginas de referencia de API.
2. Agregue una entrada para su API en particular al archivo [`GroupData.json`](https://github.com/mdn/content/blob/main/files/jsondata/GroupData.json).
3. Use la macro [`APIRef`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/api_list_specs.rs) para insertar la barra lateral en cada página en la que desee mostrarla.

Repasemos cada uno de estos pasos a su vez.
El ejemplo al que nos referiremos en este artículo es la [Fetch API](/es/docs/Web/API/Fetch_API).

### Agregar una entrada a GroupData.json

El archivo `GroupData.json` contiene todos los datos relacionados con los enlaces que deben aparecer en las barras laterales de referencia de API.
Cuando se invoca, la macro `APIRef` toma un nombre de API dado como parámetro, busca ese nombre en `GroupData.json`, construye una barra lateral apropiada y la inserta en la página.

Para agregar una entrada a `GroupData.json`, necesita:

1. Asegurarse de tener una cuenta de [GitHub](https://github.com/).
2. Hacer un fork del repositorio de contenido de MDN, crear una nueva rama para contener sus cambios y clonar el repositorio localmente.
3. Cambiar a su nueva rama antes de comenzar a trabajar, y asegurarse de enviar los cambios a ella después de terminar.
4. Crear una solicitud de extracción para que el equipo de MDN pueda revisar su trabajo y solicitar cambios si es necesario.

El archivo `GroupData.json` se puede encontrar dentro del directorio `files/jsondata/`.
Al mirarlo, verá una estructura JSON gigante, con cada API teniendo su propio miembro.
El nombre es el nombre de la API, y el valor es un objeto que contiene varios submiembros que definen los enlaces de la barra lateral que se crearán.

Por ejemplo, mire la página [Fetch API](/es/docs/Web/API/Fetch_API) en MDN.
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

Como puede ver, hemos usado "Fetch API" para el nombre, y dentro del valor del objeto incluimos varios submiembros.

#### Submiembros para incluir dentro de una entrada de GroupData

Esta sección enumera todos los submiembros que podría incluir en una entrada de `GroupData`.

Tenga en cuenta que la mayoría de los valores incluidos dentro de los submiembros listados equivalen tanto al texto del enlace como a los slugs agregados al final de la página principal del índice de API — `https://developer.mozilla.org/<código-de-idioma>/docs/Web/API` — para crear la URL final del enlace mostrado.
Entonces, por ejemplo, "Response" dará como resultado que se cree un enlace así:

```html
<li><a href="/es/docs/Web/API/Response">Response</a></li>
```

Hay algunas excepciones.
Por ejemplo, el submiembro "guides" contiene las URLs que apuntan a guías/tutoriales asociados.
En este caso, las URLs se agregan al final de la raíz de documentos de MDN — `https://developer.mozilla.org/<código-de-idioma>` — lo que permite incluir un artículo en cualquier lugar de MDN.

Aquí están los miembros disponibles.
Todos son técnicamente opcionales, pero se recomienda encarecidamente que, en lugar de omitirlos, incluya arreglos vacíos.

1. `"overview"` — el valor es un arreglo, dentro del cual incluye el slug de la página de descripción general de la API, si la hay.
   "Fetch API" da como resultado un enlace a [https://developer.mozilla.org/es/docs/Web/API/Fetch_API](/es/docs/Web/API/Fetch_API).
2. `"interfaces"` — el valor es un arreglo en el que debe enumerar todas las interfaces que forman parte de esa API.
   "Response" da como resultado un enlace a [https://developer.mozilla.org/es/docs/Web/API/Response](/es/docs/Web/API/Response).
3. `"methods"` — el valor es un arreglo que debe contener cualquier método que la especificación agregue a las interfaces asociadas con otras API, como los métodos de instanciación creados en {{domxref("Navigator")}} o {{domxref("Window")}}.
   Si hay una gran cantidad de métodos, es posible que desee considerar enumerar solo los más populares, o ponerlos primero en la lista.
   "fetch()" da como resultado un enlace a [https://developer.mozilla.org/es/docs/Web/API/fetch](/es/docs/Web/API/Window/fetch).
   _No_ enumere los métodos que son miembros de interfaces que son propiedad de la misma API.
4. `"properties"` — el valor es un arreglo que debe contener todas las propiedades asociadas con la API.
   Esto puede incluir propiedades que son miembros de interfaces definidas en la especificación de la API, y propiedades que la API define en otras interfaces.
   Si hay una gran cantidad de propiedades, es posible que desee considerar enumerar solo las más populares, o ponerlas primero en la lista.
   "Headers.append" da como resultado un enlace a [https://developer.mozilla.org/es/docs/Web/API/Headers/append](/es/docs/Web/API/Headers/append).
5. `"events"` — el valor es un arreglo que debe contener el _título_ de los eventos que son parte de la API pero se definen en interfaces que _no_ son parte de la API (los eventos que pertenecen a interfaces en la API (`interfaces`) se documentan de forma predeterminada).
   Si hay una gran cantidad de eventos, es posible que desee considerar enumerar solo los más populares, o ponerlos primero en la lista.
   Por ejemplo, `"Document: selectionchange"` es parte de la [Selection API](/es/docs/Web/API/Selection_API) pero `Document` no lo es, así que agregamos el evento al arreglo y se vinculará desde el tema [Selection API](/es/docs/Web/API/Selection_API).
6. `"guides"` — el valor es un arreglo de cadenas, cada una de las cuales aborda un tema de guía que explica cómo usar la API.
   Las cadenas contienen la parte de la dirección URL de la guía después de la ruta de idioma: es decir, la parte `/docs/...` de la URL de la guía.
   Por ejemplo, para vincular al tema "Using Fetch" en `https://developer.mozilla.org/es/docs/Web/API/Fetch_API/Using_Fetch`, el arreglo de guías contendría "/docs/Web/API/Fetch_API/Using_Fetch".
7. `"dictionaries"` — un arreglo de cadenas que enumera todos los diccionarios que forman parte de la API.
   Generalmente, aquí solo se deben enumerar los diccionarios usados por más de una propiedad o método, a menos que tengan un significado especial o sea probable que requieran referencias de múltiples páginas.
   "CryptoKeyPair" da como resultado un enlace a [https://developer.mozilla.org/es/docs/Web/API/CryptoKeyPair](/es/docs/Web/API/CryptoKeyPair).
   > [!NOTE]
   > MDN se está alejando de documentar diccionarios por separado.
   > Cuando es posible, ahora se describen como objetos en los lugares donde se usan.
8. `"types"` — un arreglo de typedefs y tipos enumerados definidos por la API.
   Puede optar por enumerar solo aquellos que son de especial importancia o a los que se hace referencia desde múltiples páginas, para mantener la lista corta.
   > [!NOTE]
   > MDN se está alejando de documentar typedefs por separado.
   > Cuando es posible, ahora se describen como valores en los lugares donde se usan.
9. `"callbacks"` — el valor es un arreglo que contiene una lista de todos los tipos de devolución de llamada definidos para la API.
   Puede encontrar innecesario usar este grupo, incluso en API que incluyen tipos de devolución de llamada, ya que a menudo no son útiles para documentar por separado.

## Etiquetas usadas por las barras laterales

Algunos submiembros se descubren automáticamente desde las páginas secundarias, según las etiquetas de página.
Las páginas bajo la API de nivel superior se rastrean cada vez que se representa la barra lateral, y las entradas se crean automáticamente para métodos (etiqueta "Method"), propiedades (etiqueta "Property") y constructores (etiqueta "Constructor").

Los submiembros también se decoran automáticamente con iconos de advertencia según las etiquetas.
Se agregan decoraciones para submiembros experimentales (etiqueta "Experimental"), no estándar (etiqueta "Non Standard" o "Non-standard") o en desuso (etiqueta "Deprecated").

Más información sobre el procesamiento basado en etiquetas está disponible [en la fuente de APIRef](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/api_list_specs.rs).

## Insertar la barra lateral

Una vez que haya agregado una entrada para su API en `GroupData.json`, la haya enviado como una solicitud de extracción y haya aceptado el cambio en el repositorio principal, puede incluirla en sus páginas de referencia de API usando la macro [`APIRef`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/api_list_specs.rs), que toma el nombre que usó para su API en GroupData como parámetro.
Como ejemplo, la barra lateral de la [WebVR API](/es/docs/Web/API/WebVR_API) se incluye en sus páginas con lo siguiente:

```plain
\{{APIRef("WebVR API")}}
```
