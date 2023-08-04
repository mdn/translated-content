---
title: MDN convenciones y definiciones
slug: MDN/Writing_guidelines/Experimental_deprecated_obsolete
---

{{MDNSidebar}}

Este artículo define algunas convenciones y definiciones que se usan comúnmente en MDN, que pueden no ser obvias para algunas personas cuando las encuentran en la documentación.

## Definiciones

### Desaprobado y obsoleto

**Desaprobado** y **obsoleto** son términos comunes asociados con tecnologías y especificaciones, pero ¿qué significan?

- Desaprobado
  - En MDN, el término **desaprobado** se usa para marcar una API o tecnología que ya no se recomienda, pero que aún está implementada y puede funcionar. Recientemente, la hemos actualizado a la definición utilizada en nuestro [proyecto de datos de compatibilidad del navegador](https://github.com/mdn/browser-compat-data/blob/master/schemas/compat-data-schema.md#status-information), que esa "característica ya no se recomienda. Es posible que se elimine en el futuro o que solo se conserve por motivos de compatibilidad. Evita el uso de esta funcionalidad."
- Obsoleto
  - En MDN, el término **obsoleto** se utiliza para marcar una API o tecnología que no solo ya no se recomienda, sino que ya no se implementa en los navegadores. Sin embargo, esto fue confuso — es similar a desaprobado, y la distinción no es muy útil (aún no debes usarlo en un sitio de producción). Por lo tanto, ya no la usamos, y cualquier instancia con la que te encuentres se debe eliminar/reemplazar por desaprobada.

### Experimental

**Experimental** puede significar diferentes cosas según el contexto en el que lo escuches o lo leas. Cuando una tecnología se describe como experimental en MDN, significa que la tecnología es incipiente e inmadura, y actualmente está en proceso de ser agregada a la plataforma web (o considerada para agregarla).

Uno o ambos de estos serán ciertos:

- Está implementado y habilitado de forma predeterminada en menos de dos de los principales navegadores modernos.
- Su especificación definitoria no es estable y es probable que cambie significativamente. Por lo tanto, su sintaxis y comportamiento están sujetos a cambios en futuras versiones de navegadores a medida que cambie la especificación.

Si una o ambas de estas definiciones es cierta, entonces debes pensar detenidamente antes de comenzar a usar esa tecnología en cualquier tipo de proyecto de producción (es decir, no solo en una demostración o experimento). Consulta también la definición de experimental en nuestro [proyecto de datos de compatibilidad del navegador](https://github.com/mdn/browser-compat-data/blob/master/schemas/compat-data-schema.md#status-information).

Por el contrario, un elemento ya no es experimental cuando:

- Está implementado en dos o más navegadores principales; o
- Su especificación definitoria es estable y es poco probable que cambie.

El _or_ es importante aquí — por lo general, si una tecnología es compatible con varios navegadores importantes, la especificación será estable, pero no siempre es así. Y algunas tecnologías tendrán una especificación estable y se usarán bien, pero no tendrán soporte nativo en los navegadores ([IMSC](/es/docs/Related/IMSC), por ejemplo).

### Páginas archivadas

Las páginas archivadas son páginas que se almacenan en el [Archivo de contenido obsoleto](/es/docs/Archive) de MDN. Estas páginas contienen información lo suficientemente desactualizada como para que ya no sea directamente útil para nadie.

Por lo general, estas se refieren a proyectos de Mozilla que han sido descontinuados y ya no se debe confiar en ellos. Pero no las eliminamos simplemente porque forman un registro histórico útil, y algunos de los patrones o ideas contenidos en ellos podrían ser útiles para trabajos futuros. Un buen ejemplo es el [proyecto B2G (Firefox OS)](/es/docs/Archive/B2G_OS).

#### ¿Cuándo se debe archivar una página?

Una página se debe archivar si se ajusta a la descripción anterior. Para archivar una página, debes utilizar la "función Mover página" (_Avanzado > Mover este artículo_) para mover la página al árbol de páginas de archivo (/es/docs/Archive). Es posible que no tengas los permisos para usar esta función, y antes de comenzar a archivar páginas, primero debas discutirlo con la comunidad MDN; habla con nosotros en nuestro [Foro de discusión](https://discourse.mozilla.org/c/mdn).

### Páginas eliminadas

Las páginas eliminadas son páginas que se eliminaron explícitamente de MDN — consulta, por ejemplo, la interfaz [`SharedKeyframeList`](/es/docs/Web/API/SharedKeyframeList) y el constructor [`SharedKeyframeList()`](/es/docs/Web/API/SharedKeyframeList/SharedKeyframeList). Estas páginas contienen información que ya no es útil de ninguna manera y/o puede ser incorrecta hasta el punto en que mantenerla disponible puede ser confuso o malo para la gente.

Estas pueden ser:

- Páginas de referencia para funciones de API que se eliminaron de la especificación antes de que se implementaran en cualquier navegador.
- Artículos que cubren técnicas que luego se demostró que eran malas prácticas y fueron reemplazadas por mejores técnicas.
- Artículos que contienen información que luego fue reemplazada por otros artículos de mejor calidad.
- Artículos que contienen contenido inapropiado para MDN.
- Traducciones antiguas, desactualizadas y difíciles de arreglar, lo que significa que la versión en inglés es preferible y comenzar una nueva traducción sería una opción más fácil.

#### ¿Cuándo se debe eliminar una página?

Se debe eliminar una página si se ajusta a la descripción anterior. Para eliminar una página, debes utilizar la función "Eliminar esta página" (_Avanzado> Eliminar esta página_) para eliminar la página. Probablemente no tengas los permisos para usar esta función, y cuando pienses en eliminar páginas, primero debes discutirlo con la comunidad de MDN; habla con nosotros en nuestro [Foro de discusión](https://discourse.mozilla.org/c/mdn).

### Cuando documentar nuevas tecnologías

En MDN, buscamos constantemente documentar nuevas tecnologías de estándares web según corresponda. Intentamos lograr un equilibrio entre publicar la documentación lo suficientemente temprano para que los desarrolladores puedan aprender sobre las nuevas funciones tan pronto como lo necesiten y publicarla lo suficientemente tarde para que la tecnología sea madura y estable para que los documentos no necesiten actualizaciones constantes o rápida eliminación.

En general, nuestra definición de lo más temprano que consideraremos para documentar una nueva tecnología es:

_"Cuando la función está en una pista de estándares y se implementa en algún lugar."_

Definitivamente deberías considerar documentar una nueva tecnología si:

- Se especifica en un documento de especificación publicado bajo una organización de estándares confiable (como W3C, WHATWG, Khronos, IETF, etc.), que ha alcanzado un nivel razonable de estabilidad (por ejemplo, un borrador de trabajo del W3C o una recomendación candidata, o la especificación está buscando ser bastante estable a juzgar por el flujo de asuntos presentados en su contra).
- Se implementa de manera consistente en al menos un navegador, y otros desarrolladores de navegadores muestran signos de interés (como un boleto activo o un proceso de "intención de implementar" en vigor).

Deberías tener más cuidado al documentar una nueva tecnología (pero deberías considerarla si tiene sentido) si:

- No tiene una especificación, o la especificación es una nota aproximada que parece estar sujeta a cambios.
- Uno o cero navegadores lo implementan actualmente, y los navegadores que no lo admiten no muestran signos de interés en implementarlo (puedes evaluar esto preguntando a los ingenieros que trabajan en esos navegadores, buscando rastreadores de errores del navegador y listas de correo, etc.).

No debes considerar documentar una nueva tecnología si:

- No es una tecnología expuesta a la web y/o es completamente propietaria.
- Ya muestra signos de estar obsoleto o reemplazado por una característica similar.

## Convenciones

### Cuando se elimina algo de la especificación

A veces, durante el desarrollo de una nueva especificación, o en el transcurso de la evolución de los estándares como HTML, se agregan nuevos elementos, métodos, propiedades, etc. a la especificación, permanecen allí por un tiempo y luego se eliminan nuevamente. A veces, esto sucede muy rápido y, a veces, estos nuevos elementos permanecen en la especificación durante meses o incluso años antes de ser eliminados. Esto puede hacer que sea complicado decidir cómo manejar la eliminación del artículo de la especificación. Aquí hay algunas pautas que te ayudarán a decidir qué hacer.

> **Nota:** Para los propósitos de esta discusión, la palabra "elemento" se usa para significar cualquier cosa que pueda ser parte de una especificación: un elemento o un atributo de un elemento, una interfaz o cualquier método individual, propiedad u otro miembro de una interfaz, etcétera.

- Si el elemento _nunca_ se implementó en una versión de lanzamiento de _cualquier_ navegador, incluso detrás de una preferencia o marca, simplemente elimina cualquier referencia al elemento de la documentación.

  - Si el elemento tiene páginas de documentación que describen solo ese elemento (como {{domxref("RTCPeerConnection.close()")}}), elimina esa página. Si el elemento eliminado es una interfaz, esto significa eliminar también las subpáginas que describen las propiedades y los métodos de esa interfaz.
  - Elimina el elemento de cualquier lista de propiedades, atributos, métodos, etc. Para los métodos de una interfaz, eso significa eliminarlo de la sección "Métodos" en la página de descripción general de la interfaz, por ejemplo.
  - Busca en el texto de la página de descripción general para esa interfaz, elemento, etc., cualquier referencia al elemento eliminado. Elimina esas referencias, asegurándote de no dejar extraños problemas gramaticales u otros problemas con el texto. Esto puede significar no solo borrar palabras, sino reescribir una oración o párrafo para que tenga más sentido. También puede significar eliminar secciones enteras de contenido si la descripción del uso del elemento es extensa.
  - Del mismo modo, busca cualquier discusión sobre el tema en las guías y tutoriales sobre la API o tecnología relevante. Elimina esas referencias, asegurándote de no dejar extraños problemas gramaticales u otros problemas con el texto. Esto puede significar no solo borrar palabras, sino reescribir una oración o párrafo para que tenga más sentido. También puede significar eliminar secciones enteras de contenido si la descripción del uso del elemento es extensa.
  - Busca en MDN referencias al elemento eliminado, en caso de que haya discusiones en otro lugar. Es poco probable que las haya, ya que si nunca se implementó, es poco probable que se discuta ampliamente. Elimina también esas menciones.
  - Si el [repositorio de datos de compatibilidad del navegador](https://github.com/mdn/browser-compat-data) contienen datos de los elementos eliminados, elimina esos objetos del código JSON y envía una SE con ese cambio, explicando por qué en el mensaje de confirmación y la descripción de la SE. Ten cuidado de no romper la sintaxis JSON mientras haces esto.

- Si el elemento se implementó en cualquier versión de lanzamiento de uno o más navegadores, pero _solo_ detrás de una preferencia o marca, no elimines el elemento de la documentación inmediatamente. En su lugar, marca el artículo como obsoleto de la siguiente manera:

  - Si el elemento tiene páginas de documentación que describen solo ese elemento (como {{domxref("RTCPeerConnection.close()")}}), agrega la macro [`deprecated_header`](https://github.com/mdn/yari/tree/main/kumascript/macros/deprecated_header.ejs) en la parte superior de la página y agrega la etiqueta `Deprecated` a la lista de etiquetas de la página.
  - En la página de descripción general del elemento, la interfaz o la API, busca la lista de elementos que incluyan el elemento que se ha eliminado de la especificación y agrega la macro [`deprecated_inline`](https://github.com/mdn/yari/tree/main/kumascript/macros/deprecated_inline.ejs) después del nombre del elemento en esa lista.
  - Busca en el texto informativo de la página de descripción general de esa interfaz, elemento, etc., cualquier referencia al elemento eliminado. Agrega cuadros de advertencia en los lugares apropiados con texto del tipo "\[lo que sea] se ha eliminado de la especificación y pronto se eliminará de los navegadores. Consulta \[enlace a la página] para conocer una nueva forma de hacer esto."
  - Del mismo modo, busca cualquier discusión sobre el tema en las guías y tutoriales sobre la API o tecnología relevante. Agrega advertencias similares.
  - Busca en MDN referencias al elemento eliminado, en caso de que haya discusiones en otro lugar. Agrega también cuadros de advertencia similares allí.
  - En algún momento en el futuro, se puede tomar la decisión de eliminar el elemento de la documentación; Normalmente no hacemos esto, pero si el artículo no se utilizó o no fue interesante, podemos decidir hacerlo.
  - Actualiza cualquier entrada relevante en el [repositorio de datos de compatibilidad del navegador](https://github.com/mdn/browser-compat-data) para reflejar la obsolescencia de los elementos afectados.

- Si el elemento se implementó en una o más versiones de publicaciones de navegadores, sin que sea necesario cambiar una preferencia o una marca, marca el elemento como obsoleto, de la siguiente manera:

  - Si el elemento tiene páginas de documentación que describen solo ese elemento (como {{domxref("RTCPeerConnection.close()")}}), agrega la macro [`deprecated_header`](https://github.com/mdn/yari/tree/main/kumascript/macros/deprecated_header.ejs) en la parte superior de la página y agrega la etiqueta `Deprecated` a la lista de etiquetas de la página.
  - En la página de descripción general del elemento, la interfaz o la API, busca la lista de elementos que incluyan el elemento que se ha eliminado de la especificación y agrega la macro [`deprecated_inline`](https://github.com/mdn/yari/tree/main/kumascript/macros/deprecated_inline.ejs) después del nombre del elemento en esa lista.
  - Busca en el texto informativo de la página de descripción general de esa interfaz, elemento, etc., cualquier referencia al elemento eliminado. Agrega recuadros de advertencia en los lugares apropiados con texto del tipo "\[lo que sea] se ha eliminado de la especificación y está obsoleto. Es posible que se elimine de los navegadores en el futuro, por lo que no debes usarlo. Consulta \[enlace a la página] para conocer una nueva forma de hacer esto."
  - Del mismo modo, busca cualquier discusión sobre el tema en las guías y tutoriales sobre la API o tecnología relevante. Agrega advertencias similares.
  - Busca en MDN referencias al elemento eliminado, en caso de que haya discusiones en otro lugar. Agrega también cuadros de advertencia similares allí.
  - Es poco probable que estos elementos se eliminen de la documentación pronto, si es que alguna vez lo hacen. Sin embargo, es posible que parte o todo el material se mueva a la sección [Archivo](/es/docs/Archive) del sitio.
  - Actualiza todas las entradas relevantes en el [repositorio de datos de compatibilidad del navegador](https://github.com/mdn/browser-compat-data) para reflejar la obsolescencia de los elementos afectados.

Utiliza el sentido común con la redacción de los mensajes de advertencia y otros cambios en el texto sugeridos por las pautas anteriores. Los diferentes elementos requerirán una redacción y un manejo diferentes de la situación. En caso de duda, no dudes en pedir consejo en la [sala del chat de Docs Web de MDN](https://chat.mozilla.org/#/room/#mdn:mozilla.org) en [Matrix](https://wiki.mozilla.org/Matrix), o en el [foro de debate de Docs Web de MDN](https://discourse.mozilla.org/c/mdn).

### Copiar contenido dentro de MDN

A veces, necesitas reutilizar el mismo texto en varias páginas (o deseas usar el contenido de una página como plantilla para otra página). Tienes tres opciones:

- Si deseas copiar una página completa:

  1. Mientras visualizas la página que deseas copiar, en el menú **Avanzado** (engrane), elige [**Clona esta página**](/es/docs/MDN/Contribute/Creating_and_editing_pages#Clone_of_an_existing_page). Esto abre la interfaz de usuario del editor para una nueva página, con el contenido de la página clonada ya poblada.
  2. Introduce un **título** y un **`slug`** nuevo para la página clonada.
  3. Edita el contenido de la página según sea necesario y guárdalo como usualmente lo haces.

- Si deseas copiar solo una parte de una página, **no solo visites la página y la copies**. Esto introduce bits adicionales de HTML no deseados en la página destino, y alguien tendrá que limpiar eso, tú u otro editor. Nadie quiere eso. Para copiar parte de una página MDN a otra página:

  1. En la página fuente, haz clic en el botón **Editar** en la página de fuente.
  2. **Copia el contenido que deseas reutilizar desde la interfaz de usuario del editor.**
  3. Haz clic en **Descartar** para salir de la interfaz de usuario del editor de esa página.
  4. Abre la interfaz de usuario del editor de la página donde deseas pegar.
  5. Pega el contenido del portapapeles.

  > **Nota:** Chrome generalmente no incluye las clases aplicadas al contenido al copiar y pegar documentos en nuestro editor. Debes revisar el contenido después de hacer esto y volver a aplicar los estilos perdidos. Checa las tablas, cuadros de sintaxis, resaltado de sintaxis y secciones ocultas de contenido en particular.

- A veces, literalmente, deseas utilizar el mismo contenido en muchas páginas. En este caso, es mejor que coloques el contenido en una página y luego uses la macro [`Page`](https://github.com/mdn/yari/tree/main/kumascript/macros/Page.ejs) para trasladar el material de una página a otra. De esta forma, siempre que se actualice el texto de la página fuente, la página de destino también se actualizará (es decir, esto sucederá en una actualización forzada o cuando la página destino pase por una reconstrucción programada).

#### Copiar contenido de otro lugar

A menudo, hay contenido útil sobre un tema en algún lugar de la web además de MDN. Sin embargo, copiar dicho contenido puede plantear dificultades, tanto legales como técnicas.

En el nivel técnico, los motores de búsqueda suelen penalizar a un sitio en su clasificación por reproducir contenido disponible en otros lugares. Por lo tanto, es preferible tener contenido original en MDN, para mejorar la clasificación del contenido de MDN en los motores de búsqueda. Puedes vincular al contenido existente de MDN.

A nivel legal, debes estar autorizado para contribuir con el contenido, y debes tener licencia y atribución de una manera que sea compatible con [licencia de MDN](/es/docs/MDN/About#Copyrights_and_licenses).

- **Si creaste el contenido existente** (para tus propios fines y no como trabajo por encargo) y estás dispuesto a contribuir a MDN con la licencia de MDN, este es el caso más fácil y estás libre de contribuir con el contenido.
- **Si los derechos de autor del contenido pertenecen a otra persona**, debes tener licencia y atribuir de manera compatible con la licencia de MDN. A menudo, no es fácil para alguien que no es abogado determinar qué licencias son compatibles. Para estar seguro, comunícate con un miembro del [equipo de personal de MDN](https://wiki.mozilla.org/MDN#Staff_Team), quien puede consultar al equipo legal de Mozilla para obtener orientación si es necesario .

#### Cómo comunicar un conflicto de especificaciones

Ten en cuenta que a veces (pero rara vez) hay un conflicto entre diferentes versiones de especificaciones (generalmente W3C versus WHATWG), p. ej. una versión puede tener una característica listada como obsoleta, mientras que la otra no. En tales casos, considera cuál es la realidad, es decir, qué están haciendo los navegadores, y escribe una nota "importante" para resumir ese último estado. Por ejemplo, a enero de 2019, el atributo global [`inputmode`](/es/docs/Web/HTML/Global_attributes/inputmode) tiene un conflicto, que se resumió al igual que:

> **Advertencia:** **Conflicto de especificaciones**: La [lista de especificaciones de WHATWG `inputmode`](https://html.spec.whatwg.org/multipage/interaction.html#attr-inputmode), y los navegadores modernos están trabajando para admitirlo. Sin embargo, la [especificación W3C HTML 5.2](https://www.w3.org/TR/html52/index.html#contents) ya no la incluye (es decir, la marca como desaprobada). Debes considerar que la definición del WHATWG es correcta, hasta que se logre un consenso.
