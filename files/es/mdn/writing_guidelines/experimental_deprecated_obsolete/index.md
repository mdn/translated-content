---
title: Experimental, desaprobado y obsoleto
slug: MDN/Writing_guidelines/Experimental_deprecated_obsolete
l10n:
  sourceCommit: 8d0cbeacdc1872f7e4d966177151585c58fb879e
---

{{MDNSidebar}}

Estos términos se asocian comúnmente con tecnologías y especificaciones y se utilizan en MDN Web Docs para etiquetar el estado de una tecnología. Para la definición de estos términos, MDN Web Docs se alinea con el repositorio [Browser Compatibility Data (BCD)](https://github.com/mdn/browser-compat-data/blob/main/schemas/compat-data-schema.md#status-information).
Estos términos se describen a continuación en el contexto de su uso en MDN Web Docs.

## Experimental

Cuando una tecnología se describe como experimental en MDN Web Docs, significa que la tecnología es emergente e inmadura y actualmente está _en proceso_ de ser añadida a la plataforma web (o de ser considerada para su adición).
Marcar una tecnología como experimental indica que los lectores deben pensar cuidadosamente antes de usar esa tecnología en cualquier tipo de proyecto en producción (es decir, un proyecto que no sea solo una demostración o un experimento). Se [anima a los lectores a probar funciones experimentales](https://github.com/mdn/browser-compat-data/blob/main/schemas/compat-data-schema.md#status-information) y proporcionar comentarios a los proveedores de navegadores y autores de estándares.

Para una tecnología marcada como **experimental**, se aplican una o más de las siguientes condiciones:

- Se implementa y habilita de forma predeterminada en la compilación de la versión de **solo un** motor de renderizado de los navegadores principales modernos.
- Solo se admite a través de cambios de configuración como preferencias o parámetros, independientemente del número de motores de renderizado admitidos.
- Es probable que su especificación definitiva cambie significativamente en formas incompatibles con versiones anteriores (es decir, puede romper el código existente que se basa en la característica).

> [!NOTE]
> Una función que solo se publica en un motor de renderizado se sigue considerando experimental, incluso si está disponible en compilaciones de vista previa de otros motores de renderizado (o estableciendo una preferencia o indicador).

El estado **experimental** de una tecnología puede caducar si se cumple una o más de las siguientes condiciones:

- Es compatible de forma predeterminada en **dos o más** de los principales motores de renderizado de los navegadores.
- Es compatible de forma predeterminada con un único motor de renderizado de navegador durante dos o más años y no sufre cambios importantes.
- Es poco probable que su especificación definitiva cambie de manera que rompa la compatibilidad.

Para ver ejemplos de estas condiciones, consulte la documentación de [bandera experimental](https://github.com/mdn/browser-compat-data/blob/main/docs/data-guidelines/index.md#setting-experimental) de BCD.

Usualmente, si una tecnología es soportada a través de varios de los navegadores principales, la especificación será estable, pero este no es siempre el caso.
Por otro lado, algunas tecnologías pueden tener una especificación estable, pero no tienen soporte nativo en los navegadores. [IMSC](/es/docs/Related/IMSC), por ejemplo, se utiliza mediante un polyfill de JavaScript. <!-- need to revisit link -->

Una característica o tecnología que forma parte de una especificación activa o un proceso de estandarización y no está marcada como **obsoleta** se dice que está en **vía de estandarización**.

## Desaprobada

El término **desaprobado** en MDN Web Docs se utiliza para marcar una API o tecnología que ya no se recomienda. Una API o tecnología obsoleta podría eliminarse en el futuro o podría conservarse solo por motivos de compatibilidad y seguir funcionando. Recomendamos evitar el uso de las funcionalidades marcadas como desaprobadas.

Para más información en la definición de **desaprobado**, vea la [la bandera desaprobado](https://github.com/mdn/browser-compat-data/blob/main/docs/data-guidelines/index.md#encuadre-deprecated) de la documentación de BCD.

## Obsoleto

En MDN Web Docs, el término **obsoleto** se usaba históricamente para indicar una API o tecnología que ya no solo ya no se recomienda, sino que ya no se implementa en los navegadores.
Debido a que la distinción entre **obsoleto** y **desaprobado** no es muy útil, ya no usamos el término **obsoleto** en MDN Web Docs.

> [!NOTE]
> Si te encuentras con algún caso de **obsoleto**, debes eliminarlo o reemplazarlo con el término **desaprobado**.

## Pautas para eliminar contenido

A veces, durante el desarrollo de una nueva especificación o en el transcurso de la evolución de los estándares, como en HTML, se agregan nuevos elementos, métodos, propiedades, etc., a la especificación, se mantienen allí durante un tiempo y luego se eliminan. A veces esto sucede muy rápidamente, y a veces estos nuevos elementos permanecen en la especificación durante meses o incluso años antes de ser eliminados. Esto puede hacer que sea difícil decidir cómo manejar la eliminación del elemento de la especificación.

Aquí hay algunas pautas para ayudarlo a decidir qué hacer cuando se elimina algo de la especificación.

> [!NOTE]
> A los efectos de esta discusión, la palabra "elemento" se utiliza para referirse a cualquier cosa que pueda ser parte de una especificación: un elemento o un atributo de un elemento, una interfaz o cualquier método individual, una propiedad u otro miembro de una interfaz, y así sucesivamente.

### Si el elemento nunca se implementó

Si el elemento _nunca_ fue implementado en una versión de _cualquier_ navegador, ni siquiera detrás de una preferencia o un parámetro, elimine cualquier referencia al elemento de la documentación.

- Si el artículo tiene alguna página de documentación que describa solo ese artículo (como {{domxref("RTCPeerConnection.close()")}}), elimina esa página.
  Si el elemento eliminado es una interfaz, esto significa eliminar también cualquier subpágina que describa las propiedades y los métodos en esa interfaz.
- Elimine el elemento de cualquier lista de propiedades, atributos, métodos, etc. Para los métodos de una interfaz, por ejemplo, esto significa eliminarla de la sección "Métodos" en la página de descripción general de la interfaz.
- Busque en el texto de la página de resumen de esa interfaz, elemento, etc., cualquier referencia al elemento eliminado. Elimine esas referencias, asegurándose de no dejar problemas gramaticales extraños u otros problemas con el texto. Esto puede significar no solo eliminar palabras, sino reescribir una oración o párrafo para que tenga más sentido. También puede significar eliminar secciones enteras de contenido si la descripción del uso del artículo es larga.
- Del mismo modo, busca cualquier discusión sobre el tema en las guías y tutoriales sobre la API o tecnología relevante. Elimine esas referencias, asegurándose de no dejar problemas gramaticales extraños u otros problemas con el texto. Esto puede significar no solo eliminar palabras, sino reescribir una oración o párrafo para que tenga más sentido. También puede significar eliminar secciones enteras de contenido si la descripción del uso del artículo es larga.
- Busque en MDN Web Docs referencias al elemento eliminado, en caso de que haya discusiones en otro lugar. Es poco probable que los haya, ya que si nunca se implementó, es poco probable que se discuta ampliamente. Elimina esas menciones también.
- Si los archivos JSON en el [repositorio de datos de compatibilidad del navegador](https://github.com/mdn/browser-compat-data) contienen datos de los elementos eliminados, elimine esos objetos del código JSON y envíe una solicitud de revisión con ese cambio, explicando el motivo en el mensaje de confirmación y la descripción. Tenga cuidado de no romper la sintaxis JSON mientras lo hace.

### Si el elemento se implementó en un navegador detrás de un argumento

Si el elemento se implementó en cualquier versión de lanzamiento de uno o más navegadores pero _solo_ detrás de una preferencia o un argumento, no lo elimine de la documentación de inmediato. En su lugar, marca el artículo como **desaprobado** de la siguiente manera:

- Si el artículo tiene alguna página de documentación que describa solo ese artículo (como {{domxref ("RTCPeerConnection.close()")}}), agrega la macro [`deprecated_header`](https://github.com/mdn/yari/blob/main/kumascript/macros/Deprecated_Header.ejs) a la parte superior de la página y agrega la siguiente entrada de metadato `status:`:

  ```yaml
  status:
    - deprecated
  ```

- En la página de descripción general del elemento, interfaz o API, busca la lista de elementos que incluye el elemento que se ha eliminado de la especificación y agrega la macro [`deprecated_inline`](https://github.com/mdn/yari/blob/main/kumascript/macros/Deprecated_Inline.ejs) después del nombre del elemento en esa lista.
- Buscar en el texto informativo de la página de resumen de esa interfaz, elemento, etc., cualquier referencia al elemento eliminado. Agregue cuadros de advertencia en los lugares apropiados con texto como "\[item] se ha eliminado de la especificación y se eliminará pronto de los navegadores. Consulta \[enlace a página] para obtener una nueva forma de hacerlo."
- Del mismo modo, busca cualquier discusión sobre el tema en las guías y tutoriales sobre la API o tecnología relevante. Añade advertencias similares.
- Busque en MDN Web Docs referencias al elemento eliminado, en caso de que haya discusiones en otro lugar. Añade mensajes de advertencia similares allí también.
- En algún momento en el futuro, se puede tomar la decisión de eliminar el artículo de la documentación; normalmente no lo hacemos, pero si el artículo estaba especialmente inutilizado o no era interesante, podemos decidir hacerlo.
- Actualizar cualquier entrada relevante en el [Repositorio de datos de compatibilidad del navegador](https://github.com/mdn/browser-compat-data) para reflejar la obsolescencia de los artículos afectados.

### Si el elemento se implementó en un navegador sin un parámetro

Si el elemento se implementó en una o más compilaciones de versiones de navegadores sin requerir una preferencia o un parámetro, marque el elemento como **desaprobado**, de la siguiente manera:

- Si el artículo tiene alguna página de documentación que describa solo ese artículo (como {{domxref ("RTCPeerConnection.close()")}}), agrega la macro [`deprecated_header`](https://github.com/mdn/yari/blob/main/kumascript/macros/Deprecated_Header.ejs) a la parte superior de la página y agrega la siguiente entrada de metadato `status:`:

  ```yaml
  status:
    - deprecated
  ```

- En la página de descripción general del elemento, interfaz o API, busca la lista de elementos que incluye el elemento que se ha eliminado de la especificación y agrega la macro [`deprecated_inline`](https://github.com/mdn/yari/blob/main/kumascript/macros/Deprecated_Inline.ejs) después del nombre del elemento en esa lista.
- Buscar en el texto informativo de la página de resumen de esa interfaz, elemento, etc., cualquier referencia al elemento eliminado. Agregue mensajes de advertencia en los lugares apropiados con texto como "\[item] ha sido eliminado de la especificación y está desaprobado. Es posible que se elimine de los navegadores en el futuro, por lo que no debes usarlo. Consulta \[enlace a página] para obtener una nueva forma de hacerlo."
- Del mismo modo, busca cualquier discusión sobre el tema en las guías y tutoriales sobre la API o tecnología relevante. Añade advertencias similares.
- Busque en MDN Web Docs referencias al elemento eliminado, en caso de que haya discusiones en otro lugar. Añade mensajes de advertencia similares allí también.
- Es poco probable que estos artículos se eliminen de la documentación en el corto plazo, si es que se eliminan alguna vez.
- Actualizar cualquier entrada relevante en el [Repositorio de datos de compatibilidad del navegador](https://github.com/mdn/browser-compat-data) para reflejar la caducidad de los artículos afectados.

Utilice el sentido común con la redacción de los mensajes de advertencia y otros cambios en el texto sugeridos en las pautas anteriores.
Diferentes elementos requerirán una redacción y un manejo diferente de la situación.
En caso de duda, no dudes en pedir consejo en las [salas de chat de MDN Web Docs](/es/docs/MDN/Community/Communication_channels#chat_rooms).

## Pautas para documentar un conflicto de especificaciones

A veces, pero rara vez, puede haber un conflicto entre diferentes versiones de especificaciones (generalmente W3C versus WHATWG). Por ejemplo, una versión puede tener una función que aparece como obsoleta, mientras que la otra no.
En tales casos, considere cuál es la realidad, es decir, considere qué están haciendo realmente los navegadores y escriba una nota "importante" para resumir ese último estado.
Por ejemplo, a partir de enero de 2019, el atributo global [`inputmode`](/es/docs/Web/HTML/Global_attributes/inputmode) tiene un conflicto, que se resumió así: <!--este ejemplo de advertencia de conflicto de especificaciones ya no existe en esa página. no pude encontrar ningún otro ejemplo-->

> [!WARNING]
> Conflicto de especificación: La especificación WHATWG enumera [`inputmode`](https://html.spec.whatwg.org/multipage/interaction.html#attr-inputmode) y los navegadores modernos están trabajando para soportarlo.
> La [especificación HTML 5.2 del W3C](https://html.spec.whatwg.org/multipage/index.html#contents), sin embargo, ya no la enumera (es decir, la marca como obsoleta).
> Debe considerar la definición de WHATWG como correcta, hasta que se llegue a un consenso.
