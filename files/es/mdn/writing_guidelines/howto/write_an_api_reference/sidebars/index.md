---
title: Menús de referencia de la API
slug: MDN/Writing_guidelines/Howto/Write_an_api_reference/Sidebars
---

{{MDNSidebar}}

Puede incluir un menú lateral personalizado en las páginas de referencia de la API para que muestre enlaces a interfaces relacionadas, tutoriales y otros recursos relevantes solo para esa API.
En este artículo se explica cómo.

## Crear un menú lateral

Debes seguir los siguientes tres pasos para crear el menú lateral de la API:

1. Cree sus páginas de referencia de API.
2. Añade una entrada para tu API en particular al archivo [`GroupData.json`](https://github.com/mdn/content/blob/main/files/jsondata/GroupData.json).
3. Utiliza la macro [`APIRef`](https://github.com/mdn/yari/blob/main/kumascript/macros/APIRef.ejs) para insertar el menú lateral en cada página en la que quieras mostrarlo.

Repasemos cada uno de estos pasos a su vez.
El ejemplo al que nos referiremos en este artículo es la [API Fetch](/es/docs/Web/API/Fetch_API).

### Añadir una entrada a GroupData.json

El archivo `GroupData.json` contiene todos los datos relacionados con los enlaces que deben aparecer en los menús laterales de referencia de la API.
Cuando se invoca, la macro `APIRef` toma un nombre de API que se le da como parámetro, busca ese nombre en `GroupData.json`, crea un menú lateral adecuado y la inserta en la página.

Para añadir una entrada a `GroupData.json`, debes:

1. Asegúrate de tener una cuenta de [GitHub](https://github.com/).
2. Haga una copia del repositorio de contenido de MDN, cree una nueva rama para contener sus cambios y clone el repositorio localmente.
3. Revise su nueva rama antes de comenzar a trabajar y asegúrese de enviar sus cambios en ella después de terminar.
4. Cree una solicitud de incorporación para que el equipo de MDN pueda revisar su trabajo y solicitar cambios si es necesario.

El archivo `GroupData.json` se puede encontrar dentro del directorio `files/jsondata/`.
Mirándolo, verás una estructura JSON gigante, con cada API teniendo sus propios miembros.
El nombre es el nombre de la API y el valor es un objeto que contiene varios submiembros que definen los enlaces del menú lateral que se creará.

Por ejemplo, consulte la página [API Fetch](/es/docs/Web/API/Fetch_API) en MDN.
La entrada correspondiente en `GroupData.json` se ve así:

```json
"Fetch API": {
    "overview":   [ "Fetch API"],
    "interfaces": [ "Headers",
                    "Request",
                    "Response",
                    "FetchController",
                    "FetchObserver",
                    "FetchSignal",
                    "ObserverCallback" ],
    "methods":    [ "fetch()" ],
    "properties": [],
    "events":     []
},
```

Como puede ver, hemos utilizado "Fetch API" para el nombre, y dentro del valor del objeto incluimos varios submiembros.

#### Submiembros a incluir dentro de una entrada de GroupData

Esta sección enumera todos los submiembros que podría incluir en una entrada de `GroupData`.

Tenga en cuenta que la mayoría de los valores incluidos dentro de los submiembros enumerados equivalen tanto al texto del enlace como a los slugs añadidos al final de la página principal del índice de la API — `https://developer.mozilla.org/<language-code>/docs/Web/API` — para crear la URL final del enlace mostrado.
Entonces, por ejemplo, "Response" resultará en la creación de un enlace como este:

```html
<li><a href="/es/docs/Web/API">Response</a></li>
```

Hay algunas excepciones.
Por ejemplo, el submiembro "guías" contiene uno o más conjuntos de información de enlace (título y slug) que define enlaces a guías/tutoriales asociados.
En este caso, los slugs se adjuntan al final de la raíz de MDN docs — `https://developer.mozilla.org/_<language-code>/docs` — lo que permite incluir un artículo en cualquier parte de MDN.

Estos son los miembros disponibles.
Todos estos son técnicamente opcionales, pero se recomienda encarecidamente que en lugar de omitirlos, incluya arreglos vacíos.

1. `"overview"`: el valor es un arreglo, dentro de la cual se incluye el slug de la página de descripción general de la API, si la hay.
   "Fetch API" da como resultado un enlace a [https://developer.mozilla.org/es/docs/Web/API/Fetch_API](/es/docs/Web/API/Fetch_API).
2. `"interfaces"`: el valor es un arreglo en el que debe enumerar todas las interfaces que forman parte de esa API.
   "Response" da como resultado un enlace a [https://developer.mozilla.org/es/docs/Web/API/Response](/es/docs/Web/API/Response).
3. `"methods"`: el valor es un arreglo que debe contener cualquier método que la especificación agregue a las interfaces asociadas con otras API, como los métodos de instanciación creados en {{domxref ("Navigator")}} o {{domxref("Window")}}.
   Si hay una gran cantidad de métodos, es posible que desees considerar solo enumerar los más populares o ponerlos en primer lugar en la lista.
   "fetch()" da como resultado un enlace a [https://developer.mozilla.org/es/docs/Web/API/fetch](/es/docs/Web/API/Window/fetch).
   _No_ agregue métodos que son miembros de interfaces que son propiedad de la misma API.
4. `"properties"` — el valor es un arreglo que debe contener todas las propiedades asociadas con la API.
   Esto puede incluir propiedades que son miembros de interfaces definidas en la especificación de la API y propiedades que la API define en otras interfaces.
   Si hay un gran número de propiedades, es posible que desees considerar solo enumerar las más populares o ponerlas en primer lugar en la lista.
   "Headers.append" da como resultado un enlace a [https://developer.mozilla.org/es/docs/Web/API/Headers/append](/es/docs/Web/API/Headers/append).
5. `"events"`: el valor es una matriz que debe contener todos los eventos asociados con la API, definidos en la especificación de la API o en otro lugar.
   Si hay una gran cantidad de eventos, es posible que desees considerar solo enumerar los más populares o ponerlos en primer lugar en la lista.
   "animationstart" da como resultado un enlace a [https://developer.mozilla.org/es/docs/Web/Events/animationstart](/es/docs/Web/API/Element/animationstart_event).
6. `"guides"`: el valor es un arreglo que contiene uno o más objetos que definen enlaces a guías que explican cómo usar la API.
   Cada objeto contiene dos submiembros: "url", que contiene la URL parcial que apunta al artículo de guía, y "title", que define la prueba de enlace para el enlace.
   A modo de ejemplo, el siguiente objeto:

   ```json
   {
     "url": "/docs/Web/API/Detecting_device_orientation",
     "title": "Detectando la orientación del dispositivo"
   }
   ```

   Crea un enlace con el título "Detectando la orientación del dispositivo", que apunta a [https://developer.mozilla.org/es/docs/Web/API/Device_orientation_events/Detecting_device_orientation](/es/docs/Web/API/Device_orientation_events/Detecting_device_orientation).

7. `"diccionarios"`: una serie de cadenas que enumeran todos los diccionarios que forman parte de la API.
   En general, aquí solo se deben enumerar los diccionarios utilizados por más de una propiedad o método, a menos que tengan un significado especial o sea probable que requieran referencias de varias páginas.
   "CryptoKeyPair" da como resultado un enlace a [https://developer.mozilla.org/es/docs/Web/API/CryptoKeyPair](/es/docs/Web/API/CryptoKeyPair).
   > [!NOTE]
   > MDN se está alejando de documentar diccionarios por separado.
   > Cuando es posible, ahora se describen como objetos en los lugares donde se usan.
8. `"types"`: un arreglo de definiciones de tipo y tipos enumerados definidos por la API.
   Puede optar por enumerar solo aquellos que son de especial importancia o a los que se hace referencia desde varias páginas, con el fin de mantener la lista corta.
   > [!NOTE]
   > MDN se está alejando de documentar por separado las definiciones de tipo.
   > Cuando es posible, ahora se describen como valores en los lugares donde se utilizan.
9. `"callbacks"`: el valor es un arreglo que contiene una lista de todos los tipos de _callback_ definidos para la API.
   Puede que le resulte innecesario utilizar este grupo, incluso en las API que incluyen tipos de _callbacks_, ya que a menudo no son útiles para documentar por separado.

## Etiquetas utilizadas por los menús laterales

Algunos submiembros se descubren automáticamente en las páginas secundarias, en función de las etiquetas de página.
Las páginas bajo la API de nivel superior se rastrean cada vez que se representa la barra lateral, y las entradas se crean automáticamente para métodos (etiqueta "Method"), propiedades (etiqueta "Property") y constructores (etiqueta "Constructor").

Los submiembros también se decoran automáticamente con iconos de advertencia basados en etiquetas.
Se añaden decoraciones para submiembros experimentales (etiqueta "Experimental"), no estándar (etiqueta "Non Standard" o "Non-standard") o en desuso (etiqueta "Deprecated").

Más información sobre el procesamiento basado en etiquetas está disponible [en la fuente APIRef](https://github.com/mdn/yari/blob/main/kumascript/macros/APIRef.ejs).

## Insertar el menú lateral

Una vez que hayas agregado una entrada para tu API en `GroupData.json`, la hayas enviado como una solicitud de incorporación y se haya aceptado el cambio en el repositorio principal, puedes incluirla en las páginas de referencia de tu API utilizando la macro [`APIRef`](https://github.com/mdn/yari/blob/main/kumascript/macros/APIRef.ejs), que toma el nombre que usaste para tu API en GroupData como parámetro.
Como ejemplo, el menú lateral de la [API WebVR](/es/docs/Web/API/WebVR_API) se incluye en sus páginas con lo siguiente:

```plain
\{{APIRef("WebVR API")}}
```
