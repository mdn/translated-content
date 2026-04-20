---
title: Experimental, en desuso y obsoleto
short-title: Estados de tecnología
slug: MDN/Writing_guidelines/Experimental_deprecated_obsolete
l10n:
  sourceCommit: 2e427c5c185433c5a6612c63bf877753a5fedc99
---

Estos términos se asocian comúnmente con tecnologías y especificaciones y se usan en MDN Web Docs para etiquetar el estado de una tecnología. Para la definición de estos términos, MDN Web Docs se alinea con el repositorio [Browser Compatibility Data (BCD)](https://github.com/mdn/browser-compat-data/blob/main/schemas/compat-data-schema.md#status-information).
Estos términos se describen a continuación en el contexto de su uso en MDN Web Docs.

## Experimental

Cuando una tecnología se describe como experimental en MDN Web Docs, significa que la tecnología es naciente e inmadura y actualmente está _en proceso_ de ser añadida a la plataforma web (o siendo considerada para su adición).
Marcar una tecnología como experimental indica que los lectores deben pensar cuidadosamente antes de usar esa tecnología en cualquier tipo de proyecto de producción (es decir, un proyecto que no sea solo una demostración o un experimento). Se [anima a los lectores a probar características experimentales](https://github.com/mdn/browser-compat-data/blob/main/schemas/compat-data-schema.md#status-information) y proporcionar comentarios a los proveedores de navegadores y autores de estándares.

Para una tecnología marcada como **experimental**, se aplican una o más de las siguientes condiciones:

- Se implementa y habilita de forma predeterminada en la compilación de versión de **solo uno** de los motores de renderizado de navegadores principales modernos.
- Solo se admite a través de cambios de configuración como preferencias o indicadores, independientemente del número de motores de renderizado admitidos.
- Es probable que su especificación definitiva cambie significativamente de manera incompatible con versiones anteriores (es decir, puede romper el código existente que se basa en la característica).

> [!NOTE]
> Una característica lanzada solo en un motor de renderizado todavía se considera experimental, incluso si está disponible en compilaciones de vista previa de otros motores de renderizado (o estableciendo una preferencia o indicador).

El estado **experimental** de una tecnología puede caducar si se cumple una o más de las siguientes condiciones:

- Es compatible de forma predeterminada con **dos o más** de los motores de renderizado de navegadores principales.
- Es compatible de forma predeterminada con un solo motor de renderizado de navegador durante dos o más años y no sufre cambios importantes.
- Es poco probable que su especificación definitiva cambie de manera que rompa la compatibilidad.

Para ver ejemplos de estas condiciones, consulte la documentación del [indicador experimental](https://github.com/mdn/browser-compat-data/blob/main/docs/data-guidelines/index.md#setting-experimental) de BCD.

Generalmente, si una tecnología es compatible con varios navegadores principales, la especificación será estable, pero este no siempre es el caso.
Por otro lado, algunas tecnologías pueden tener una especificación estable, pero no tienen soporte nativo en los navegadores. [IMSC](/es/docs/Related/IMSC), por ejemplo, se usa mediante un polyfill de JavaScript.

Una característica o tecnología que forma parte de una especificación activa o un proceso de estandarización y no está marcada como **en desuso** se dice que está en **vía de estandarización**.

## En desuso

El término **en desuso** en MDN Web Docs se usa para marcar una API o tecnología que ya no se recomienda. Una API o tecnología en desuso podría eliminarse en el futuro o podría conservarse solo por motivos de compatibilidad y seguir funcionando. Recomendamos evitar el uso de las funcionalidades marcadas como en desuso.

Para obtener más información sobre la definición de **en desuso**, consulte la documentación del [indicador en desuso](https://github.com/mdn/browser-compat-data/blob/main/docs/data-guidelines/index.md#setting-deprecated) de BCD.

## Obsoleto

En MDN Web Docs, el término **obsoleto** se usaba históricamente para indicar una API o tecnología que no solo ya no se recomienda, sino que tampoco se implementa en los navegadores.
Debido a que la distinción entre **obsoleto** y **en desuso** no es muy útil, ya no usamos el término **obsoleto** en MDN Web Docs.

> [!NOTE]
> Si encuentra alguna instancia de **obsoleto**, debe eliminarla o reemplazarla con el término **en desuso**.

## Directrices para eliminar contenido

A veces, durante el desarrollo de una nueva especificación o en el transcurso de la evolución de los estándares vivos como HTML, se agregan nuevos elementos, métodos, propiedades, etc., a la especificación, se mantienen allí por un tiempo y luego se eliminan. A veces esto sucede muy rápidamente, y a veces estos elementos nuevos permanecen en la especificación durante meses o incluso años antes de ser eliminados. Esto puede hacer que sea difícil decidir cómo manejar la eliminación del elemento de la especificación.

Aquí hay algunas directrices para ayudarlo a decidir qué hacer cuando algo se elimina de la especificación.

> [!NOTE]
> Para los propósitos de esta discusión, la palabra "elemento" se usa para referirse a cualquier cosa que pueda ser parte de una especificación: un elemento o un atributo de un elemento, una interfaz o cualquier método individual, una propiedad u otro miembro de una interfaz, etc.

### Si el elemento nunca se implementó

Si el elemento _nunca_ se implementó en una versión de lanzamiento de _ningún_ navegador, ni siquiera detrás de una preferencia o un indicador, elimine cualquier referencia al elemento de la documentación.

- Si el elemento tiene alguna página de documentación que describa solo ese elemento (como {{domxref("RTCPeerConnection.close()")}}), elimine esa página.
  Si el elemento eliminado es una interfaz, esto significa eliminar también cualquier subpágina que describa las propiedades y los métodos en esa interfaz.
- Elimine el elemento de cualquier lista de propiedades, atributos, métodos, etc. Para los métodos de una interfaz, por ejemplo, esto significa eliminarlo de la sección "Métodos" en la página de descripción general de la interfaz.
- Busque en el texto de la página de descripción general de esa interfaz, elemento, etc., cualquier referencia al elemento eliminado. Elimine esas referencias, asegurándose de no dejar problemas gramaticales extraños u otros problemas con el texto. Esto puede significar no solo eliminar palabras sino reescribir una oración o párrafo para que tenga más sentido. También puede significar eliminar secciones enteras de contenido si la descripción del uso del elemento es larga.
- De manera similar, busque cualquier discusión sobre el elemento en las guías y tutoriales sobre la API o tecnología relevante. Elimine esas referencias, asegurándose de no dejar problemas gramaticales extraños u otros problemas con el texto. Esto puede significar no solo eliminar palabras sino reescribir una oración o párrafo para que tenga más sentido. También puede significar eliminar secciones enteras de contenido si la descripción del uso del elemento es larga.
- Busque en MDN Web Docs referencias al elemento eliminado, en caso de que haya discusiones en otro lugar. Es poco probable que las haya, ya que si nunca se implementó, es poco probable que se discuta ampliamente. Elimine esas menciones también.
- Si los archivos JSON en el [repositorio de datos de compatibilidad del navegador](https://github.com/mdn/browser-compat-data) contienen datos de los elementos eliminados, elimine esos objetos del código JSON y envíe una solicitud de extracción con ese cambio, explicando el motivo en el mensaje de confirmación y la descripción. Tenga cuidado de no romper la sintaxis JSON mientras lo hace.

### Si el elemento se implementó en un navegador detrás de un indicador

Si el elemento se implementó en cualquier versión de lanzamiento de uno o más navegadores pero _solo_ detrás de una preferencia o un indicador, no lo elimine de la documentación de inmediato. En su lugar, marque el elemento como **en desuso** de la siguiente manera:

- Actualice los datos de estado del elemento en el repositorio browser-compat-data mediante el [envío de una solicitud de extracción](https://github.com/mdn/browser-compat-data/blob/main/docs/contributing.md#updating-the-compat-data).
- Busque en el texto informativo de la página de descripción general de esa interfaz, elemento, etc., cualquier referencia al elemento eliminado. Agregue cuadros de advertencia en lugares apropiados con texto como "[elemento] se ha eliminado de la especificación y se eliminará de los navegadores pronto. Consulte [enlace a página] para una nueva forma de hacerlo".
- De manera similar, busque cualquier discusión sobre el elemento en las guías y tutoriales sobre la API o tecnología relevante. Agregue advertencias similares.
- Busque en MDN Web Docs referencias al elemento eliminado, en caso de que haya discusiones en otro lugar. Agregue cuadros de advertencia similares allí también.
- En algún momento en el futuro, se puede tomar la decisión de eliminar realmente el elemento de la documentación; generalmente no hacemos esto, pero si el elemento estaba especialmente poco utilizado o poco interesante, podemos decidir hacerlo.
- Actualice cualquier entrada relevante en el [repositorio de datos de compatibilidad del navegador](https://github.com/mdn/browser-compat-data) para reflejar la obsolescencia de los elementos afectados.

### Si el elemento se implementó en un navegador sin un indicador

Si el elemento se implementó en una o más compilaciones de lanzamiento de navegadores sin requerir una preferencia o un indicador, marque el elemento como **en desuso**, de la siguiente manera:

- Actualice los datos de estado del elemento en el repositorio browser-compat-data mediante el [envío de una solicitud de extracción](https://github.com/mdn/browser-compat-data/blob/main/docs/contributing.md#updating-the-compat-data).
- Busque en el texto informativo de la página de descripción general de esa interfaz, elemento, etc., cualquier referencia al elemento eliminado. Agregue cuadros de advertencia en lugares apropiados con texto como "[elemento] se ha eliminado de la especificación y está en desuso. Es posible que se elimine de los navegadores en el futuro, por lo que no debe usarlo. Consulte [enlace a página] para una nueva forma de hacerlo".
- De manera similar, busque cualquier discusión sobre el elemento en las guías y tutoriales sobre la API o tecnología relevante. Agregue advertencias similares.
- Busque en MDN Web Docs referencias al elemento eliminado, en caso de que haya discusiones en otro lugar. Agregue cuadros de advertencia similares allí también.
- Es poco probable que estos elementos se eliminen de la documentación en el corto plazo, si es que alguna vez se eliminan.
- Actualice cualquier entrada relevante en el [repositorio de datos de compatibilidad del navegador](https://github.com/mdn/browser-compat-data) para reflejar la desuso de los elementos afectados.

Use el sentido común con la redacción de los mensajes de advertencia y otros cambios en el texto sugeridos en las directrices anteriores.
Diferentes elementos requerirán una redacción y un manejo diferente de la situación.
En caso de duda, no dude en pedir consejo en las [salas de chat de MDN Web Docs](/es/docs/MDN/Community/Communication_channels#chat_rooms).

## Directrices para documentar un conflicto de especificaciones

A veces, pero rara vez, puede haber un conflicto entre diferentes versiones de especificaciones (generalmente W3C versus WHATWG). Por ejemplo, una versión puede tener una característica listada como en desuso, mientras que la otra no.
En tales casos, considere cuál es la realidad, es decir, considere qué están haciendo realmente los navegadores y escriba una nota "importante" para resumir ese último estado.
Por ejemplo, a partir de enero de 2019, el atributo global [`inputmode`](/es/docs/Web/HTML/Reference/Global_attributes/inputmode) tiene un conflicto, que se resumió así:

> [!WARNING]
> Conflicto de especificaciones: La especificación WHATWG lista [`inputmode`](https://html.spec.whatwg.org/multipage/interaction.html#attr-inputmode) y los navegadores modernos están trabajando hacia su soporte.
> La [especificación HTML 5.2 del W3C](https://html.spec.whatwg.org/multipage/index.html#contents), sin embargo, ya no la lista (es decir, la marca como obsoleta).
> Debe considerar la definición de WHATWG como correcta, hasta que se alcance un consenso.

## Véase también

- [Macros de estado de características](/es/docs/MDN/Writing_guidelines/Page_structures/Feature_status)
