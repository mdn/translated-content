---
title: Experimental, obsoleto y en desuso
slug: MDN/Writing_guidelines/Experimental_deprecated_obsolete
l10n:
  sourceCommit: 2e427c5c185433c5a6612c63bf877753a5fedc99
---

Estos términos se asocian comúnmente con tecnologías y especificaciones y se utilizan en MDN Web Docs para etiquetar el estado de una tecnología. Para la definición de estos términos, MDN Web Docs se alinea con el repositorio [Browser Compatibility Data (BCD)](https://github.com/mdn/browser-compat-data/blob/main/schemas/compat-data-schema.md#status-information).
Estos términos se describen a continuación en el contexto de su uso en MDN Web Docs.

## Experimental

Cuando una tecnología se describe como experimental en MDN Web Docs, significa que la tecnología es emergente e inmadura y actualmente está _en proceso_ de ser añadida a la plataforma web (o de ser considerada para su adición).
Marcar una tecnología como experimental indica que los lectores deben pensar cuidadosamente antes de usar esa tecnología en cualquier tipo de proyecto en producción (es decir, un proyecto que no sea solo una demostración o un experimento). Se [anima a los lectores a probar funciones experimentales](https://github.com/mdn/browser-compat-data/blob/main/schemas/compat-data-schema.md#status-information) y proporcionar comentarios a los proveedores de navegadores y autores de estándares.

Para una tecnología marcada como **experimental**, se aplican una o más de las siguientes condiciones:

- Se implementa y habilita de forma predeterminada en la compilación de la versión de **solo un** motor de renderizado de los navegadores principales modernos.
- Solo se admite a través de cambios de configuración como preferencias o banderas, independientemente del número de motores de renderizado admitidos.
- Es probable que su especificación definitiva cambie significativamente en formas incompatibles con versiones anteriores (es decir, puede romper el código existente que se basa en la característica).

> [!NOTE]
> Una función que solo se publica en un motor de renderizado se sigue considerando experimental, incluso si está disponible en compilaciones de vista previa de otros motores de renderizado (o estableciendo una preferencia o indicador).

El estado **experimental** de una tecnología puede caducar si se cumple una o más de las siguientes condiciones:

- Es compatible de forma predeterminada en **dos o más** de los principales motores de renderizado de los navegadores.
- Es compatible de forma predeterminada con un único motor de renderizado de navegador durante dos o más años y no sufre cambios importantes.
- Es poco probable que su especificación definitiva cambie de manera que rompa la compatibilidad.

Consulta la documentación de BCD sobre la [propiedad experimental](https://github.com/mdn/browser-compat-data/tree/main/docs/data-guidelines#setting-experimental) para ver ejemplos de estas condiciones.

Normalmente, si varios navegadores principales admiten una tecnología, la especificación será estable; sin embargo, no siempre ocurre así.
Por otro lado, algunas tecnologías pueden tener una especificación estable, pero no tienen soporte nativo en los navegadores. [IMSC](/es/docs/Related/IMSC), por ejemplo, se usa mediante un polyfill de JavaScript.

Una característica o tecnología que forma parte de una especificación activa o un proceso de estandarización y no está marcada como **obsoleta** se dice que está en **vía de estandarización**.

## Obsoleto

En MDN Web Docs, usamos el término **obsoleto** (deprecated) para marcar una API o tecnología que ya no recomendamos. Es posible que eliminemos estas tecnologías en el futuro o que solo las mantengamos por motivos de compatibilidad, aunque sigan funcionando. Recomendamos evitar el uso de las funcionalidades marcadas como obsoletas.

Consulta la documentación de BCD sobre la [propiedad deprecated](https://github.com/mdn/browser-compat-data/tree/main/docs/data-guidelines#setting-deprecated) para obtener más información sobre la definición de **obsoleto**.

## En desuso

Históricamente, en MDN Web Docs usábamos el término **en desuso** (obsolete) para indicar que una API o tecnología no solo ya no se recomienda, sino que además los navegadores ya no la implementan.
Como la distinción entre **en desuso** y **obsoleto** no es muy útil, ya no usamos el término **en desuso** en MDN Web Docs.

> [!NOTE]
> Si encuentras alguna mención a **en desuso**, debes eliminarla o sustituirla por el término **obsoleto**.

## Pautas para eliminar contenido

A veces, durante el desarrollo de una nueva especificación o la evolución de estándares vivos como HTML, se añaden nuevos elementos, métodos y propiedades que permanecen en la especificación un tiempo y luego desaparecen. En ocasiones, esto ocurre muy rápido; en otras, estos elementos nuevos permanecen meses o incluso años antes de que se eliminen. Esto puede complicar la decisión sobre cómo gestionar la eliminación de un elemento de la especificación.

Aquí tienes algunas pautas que te ayudarán a decidir qué hacer cuando se elimina algo de la especificación.

> [!NOTE]
> A los efectos de esta discusión, usamos la palabra "elemento" para referirnos a cualquier cosa que pueda ser parte de una especificación: un elemento o un atributo de un elemento, una interfaz o cualquier método individual, una propiedad u otro miembro de una interfaz, y así sucesivamente.

### Si el elemento nunca se implementó

Si el elemento _nunca_ fue implementado en una versión de lanzamiento de _cualquier_ navegador, ni siquiera detrás de una preferencia o una bandera, se debe eliminar cualquier referencia al elemento de la documentación.

- Si el elemento tiene alguna página de documentación que describa solo ese elemento (como {{domxref("RTCPeerConnection.close()")}}), elimina esa página.
  Si el elemento eliminado es una interfaz, también debes eliminar cualquier subpágina que describa sus propiedades y métodos.
- Elimina el elemento de cualquier lista de propiedades, atributos, métodos, etc. En el caso de los métodos de una interfaz, por ejemplo, debes quitarlo de la sección "Métodos" en la página de descripción general de la interfaz.
- Busca en el texto de la página de descripción general de esa interfaz, elemento, etc., cualquier referencia al elemento eliminado. Elimina esas referencias y asegúrate de no dejar errores gramaticales ni otros problemas en el texto. Esto puede significar no solo eliminar palabras, sino reescribir una oración o párrafo para que tenga más sentido. También puede que debas eliminar secciones enteras de contenido si la descripción del uso del elemento es muy extensa.
- Del mismo modo, busca cualquier discusión sobre el elemento en las guías y tutoriales sobre la API o tecnología correspondiente. Elimina esas referencias y asegúrate de no dejar errores gramaticales ni otros problemas con el texto. Esto puede significar no solo eliminar palabras, sino reescribir una oración o párrafo para que tenga más sentido. También puede significar eliminar secciones enteras de contenido si la descripción del uso del elemento es muy extensa.
- Busca en MDN Web Docs referencias al elemento eliminado, por si existen menciones en otros lugares. Es improbable que existan, ya que si nunca se implementó, es poco probable que se discuta ampliamente. Elimina también esas menciones.
- Si los archivos JSON en el [repositorio Browser Compatibility Data](https://github.com/mdn/browser-compat-data) contienen información de los elementos eliminados, borra esos objetos del código JSON y envía un pull request con ese cambio, explicando el motivo en el mensaje de confirmación y en la descripción del pull request. Asegúrate de no romper la sintaxis del JSON al realizar esto.

### Si el elemento se implementó en un navegador tras una bandera

Si el elemento se implementó en cualquier versión de lanzamiento de uno o más navegadores, pero _solo_ mediante una preferencia o bandera (flag), no lo elimines de la documentación de inmediato. En su lugar, márcalo como **obsoleto** de la siguiente manera:

- Actualiza los datos de estado del elemento en el repositorio browser-compat-data [enviando un pull request](https://github.com/mdn/browser-compat-data/blob/main/docs/contributing.md#updating-the-compat-data).
- Busca en el texto informativo de la página de descripción general de esa interfaz, elemento, etc., cualquier referencia al elemento eliminado. Añade avisos de advertencia en los lugares adecuados con un texto similar a "\[elemento] se ha eliminado de la especificación y pronto se eliminará de los navegadores. Consulta \[enlace a la página] para obtener una nueva forma de hacer esto."
- Del mismo modo, busca cualquier discusión sobre el elemento en las guías y tutoriales sobre la API o tecnología relevante. Añade avisos de advertencia similares.
- Busca en MDN Web Docs referencias al elemento eliminado, en caso de que haya discusiones en otro lugar. Añade también allí avisos de advertencia similares.
- En algún momento en el futuro, es posible que decidamos eliminar definitivamente el elemento de la documentación; normalmente no hacemos esto, pero si el elemento apenas se utilizaba o carecía de interés, podríamos optar por hacerlo.
- Actualiza cualquier entrada relevante en el [repositorio Browser Compatibility Data](https://github.com/mdn/browser-compat-data) para reflejar que los elementos afectados están obsoletos.

### Si el elemento se implementó en un navegador sin una bandera

Si uno o más navegadores implementaron el elemento en alguna versión final sin requerir una preferencia o bandera, marca el elemento como **obsoleto** de la siguiente manera:

- Actualiza los datos de estado del elemento en el repositorio browser-compat-data [enviando un pull request](https://github.com/mdn/browser-compat-data/blob/main/docs/contributing.md#updating-the-compat-data).
- Busca en el texto informativo de la página de descripción general de esa interfaz, elemento, etc., cualquier referencia al elemento eliminado. Añade avisos de advertencia en los lugares adecuados con un texto similar a "\[elemento] se ha eliminado de la especificación y está obsoleto. Es posible que los navegadores lo eliminen en el futuro, por lo que no deberías usarlo. Consulta \[enlace a la página] para conocer la nueva forma de hacer esto".
- Del mismo modo, busca cualquier discusión sobre el elemento en las guías y tutoriales sobre la API o tecnología relevante. Añade avisos de advertencia similares.
- Busca en MDN Web Docs referencias al elemento eliminado, en caso de que haya discusiones en otro lugar. Añade también allí avisos de advertencia similares.
- Es poco probable que eliminemos estos elementos de la documentación pronto, si es que llegamos a hacerlo.
- Actualiza cualquier entrada relevante en el [repositorio Browser Compatibility Data](https://github.com/mdn/browser-compat-data) para reflejar la obsolescencia de los elementos afectados.

Usa el sentido común al redactar los mensajes de advertencia y los demás cambios en el texto que se sugieren en las pautas anteriores.
Cada elemento requerirá una redacción y un manejo diferente de la situación.
Si tienes dudas, pide consejo en las [salas de chat de MDN Web Docs](/es/docs/MDN/Community/Communication_channels#chat_rooms).

## Pautas para documentar un conflicto de especificaciones

A veces, aunque no es frecuente, puede haber un conflicto entre diferentes versiones de una especificación (normalmente entre la W3C y la WHATWG). Por ejemplo, puede que una versión marque una funcionalidad como obsoleta mientras que la otra no.
En tales casos, considera cuál es la realidad, es decir, considera qué están haciendo realmente los navegadores y escribe una nota "importante" que resuma este estado actual.
Por ejemplo, a partir de enero de 2019, el atributo global [`inputmode`](/es/docs/Web/HTML/Reference/Global_attributes/inputmode) tiene un conflicto, que se resumió así:

> [!WARNING]
> Conflicto de especificación: La especificación WHATWG incluye [`inputmode`](https://html.spec.whatwg.org/multipage/interaction.html#attr-inputmode) y los navegadores modernos están trabajando para soportarlo.
> Sin embargo, la [especificación HTML 5.2 de la W3C](https://html.spec.whatwg.org/multipage/index.html#contents) ya no lo incluye (es decir, lo marca como obsoleto).
> Considera la definición de WHATWG como correcta, hasta que se llegue a un consenso.

## Véase también

- [Macros de estado de las características](/es/docs/MDN/Writing_guidelines/Page_structures/Feature_status)
