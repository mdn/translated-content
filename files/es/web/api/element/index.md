---
title: Element
slug: Web/API/Element
l10n:
  sourceCommit: 5351b03470685486d841a3340c6971351058194f
---

{{APIRef("DOM")}}

**`Element`** es la clase base más general de la que heredan todos los objetos de tipo elemento (es decir, los objetos que representan elementos) en un {{DOMxRef("Document")}}. Solo tiene los métodos y las propiedades comunes a todos los tipos de elementos. Las clases más específicas heredan de `Element`.

Por ejemplo, la interfaz {{DOMxRef("HTMLElement")}} es la interfaz base para los elementos HTML. Del mismo modo, la interfaz {{DOMxRef("SVGElement")}} es la base para todos los elementos SVG, y la interfaz {{DOMxRef("MathMLElement")}} es la interfaz base para los elementos MathML. La mayor parte de la funcionalidad se especifica en niveles inferiores de la jerarquía de clases.

Lenguajes ajenos al ámbito de la plataforma web, como XUL a través de la interfaz `XULElement`, también implementan `Element`.

{{InheritanceDiagram}}

## Propiedades de instancia

_`Element` hereda propiedades de su interfaz padre, {{DOMxRef("Node")}}, y, por extensión, de la interfaz padre de esta, {{DOMxRef("EventTarget")}}._

- {{DOMxRef("Element.activeViewTransition")}} {{ReadOnlyInline}} {{experimental_inline}}
  - : Devuelve una instancia de {{domxref("ViewTransition")}} que representa la [transición de vista](/es/docs/Web/API/View_Transition_API) que está activa en el elemento en este momento.
- {{DOMxRef("Element.assignedSlot")}} {{ReadOnlyInline}}
  - : Devuelve un {{DOMxRef("HTMLSlotElement")}} que representa el {{htmlelement("slot")}} en el que está insertado el nodo.
- {{DOMxRef("Element.attributes")}} {{ReadOnlyInline}}
  - : Devuelve un objeto {{DOMxRef("NamedNodeMap")}} que contiene los atributos asignados del elemento HTML correspondiente.
- {{domxref("Element.childElementCount")}} {{ReadOnlyInline}}
  - : Devuelve el número de elementos hijo de este elemento.
- {{domxref("Element.children")}} {{ReadOnlyInline}}
  - : Devuelve los elementos hijo de este elemento.
- {{DOMxRef("Element.classList")}} {{ReadOnlyInline}}
  - : Devuelve un {{DOMxRef("DOMTokenList")}} que contiene la lista de atributos de clase.
- {{DOMxRef("Element.className")}}
  - : Una cadena que representa la clase del elemento.
- {{DOMxRef("Element.clientHeight")}} {{ReadOnlyInline}}
  - : Devuelve un número que representa la altura interior del elemento.
- {{DOMxRef("Element.clientLeft")}} {{ReadOnlyInline}}
  - : Devuelve un número que representa el ancho del borde izquierdo del elemento.
- {{DOMxRef("Element.clientTop")}} {{ReadOnlyInline}}
  - : Devuelve un número que representa el ancho del borde superior del elemento.
- {{DOMxRef("Element.clientWidth")}} {{ReadOnlyInline}}
  - : Devuelve un número que representa el ancho interior del elemento.
- {{DOMxRef("Element.currentCSSZoom")}} {{ReadOnlyInline}}
  - : Un número que indica el tamaño de zoom efectivo del elemento, o 1.0 si el elemento no se renderiza.
- {{DOMxRef("Element.customElementRegistry")}} {{ReadOnlyInline}}
  - : El objeto {{domxref("CustomElementRegistry")}} asociado a este elemento, o `null` si no se ha establecido ninguno.
- {{DOMxRef("Element.elementTiming")}} {{Experimental_Inline}}
  - : Una cadena que refleja el atributo [`elementtiming`](/es/docs/Web/HTML/Reference/Attributes/elementtiming), el cual marca un elemento para su observación mediante la API {{domxref("PerformanceElementTiming")}}.
- {{domxref("Element.firstElementChild")}} {{ReadOnlyInline}}
  - : Devuelve el primer elemento hijo de este elemento.
- {{DOMxRef("Element.id")}}
  - : Una cadena que representa el id del elemento.
- {{DOMxRef("Element.innerHTML")}}
  - : Una cadena que representa el marcado del contenido del elemento.
- {{domxref("Element.lastElementChild")}} {{ReadOnlyInline}}
  - : Devuelve el último elemento hijo de este elemento.
- {{DOMxRef("Element.localName")}} {{ReadOnlyInline}}
  - : Una cadena que representa la parte local del nombre cualificado del elemento.
- {{DOMxRef("Element.namespaceURI")}} {{ReadOnlyInline}}
  - : El URI del namespace del elemento, o `null` si no tiene namespace.
- {{DOMxRef("Element.nextElementSibling")}} {{ReadOnlyInline}}
  - : Un `Element`: el elemento que sigue inmediatamente al elemento dado en el árbol, o `null` si no hay ningún elemento hermano.
- {{DOMxRef("Element.outerHTML")}}
  - : Una cadena que representa el marcado del elemento, incluido su contenido. Cuando se usa como setter, reemplaza el elemento por los nodos obtenidos al analizar la cadena dada.
- {{DOMxRef("Element.part")}} {{ReadOnlyInline}}
  - : Representa los identificadores de parte del elemento (es decir, los establecidos mediante el atributo `part`), devueltos como un {{domxref("DOMTokenList")}}.
- {{DOMxRef("Element.prefix")}} {{ReadOnlyInline}}
  - : Una cadena que representa el prefijo del namespace del elemento, o `null` si no se especifica ningún prefijo.
- {{DOMxRef("Element.previousElementSibling")}} {{ReadOnlyInline}}
  - : Un `Element`: el elemento que precede inmediatamente al elemento dado en el árbol, o `null` si no hay ningún elemento hermano.
- {{DOMxRef("Element.scrollHeight")}} {{ReadOnlyInline}}
  - : Devuelve un número que representa la altura del área de desplazamiento de un elemento.
- {{DOMxRef("Element.scrollLeft")}}
  - : Un número que representa el desplazamiento horizontal (hacia la izquierda) del elemento.
- {{DOMxRef("Element.scrollLeftMax")}} {{Non-standard_Inline}} {{ReadOnlyInline}}
  - : Devuelve un número que representa el desplazamiento horizontal máximo posible hacia la izquierda para el elemento.
- {{DOMxRef("Element.scrollTop")}}
  - : Un número que representa la cantidad de píxeles que se ha desplazado verticalmente la parte superior del elemento.
- {{DOMxRef("Element.scrollTopMax")}} {{Non-standard_Inline}} {{ReadOnlyInline}}
  - : Devuelve un número que representa el desplazamiento vertical máximo posible hacia arriba para el elemento.
- {{DOMxRef("Element.scrollWidth")}} {{ReadOnlyInline}}
  - : Devuelve un número que representa el ancho del área de desplazamiento del elemento.
- {{DOMxRef("Element.shadowRoot")}} {{ReadOnlyInline}}
  - : Devuelve el shadow root abierto que aloja el elemento, o `null` si no hay ningún shadow root abierto.
- {{DOMxRef("Element.slot")}}
  - : Devuelve el nombre del slot del shadow DOM en el que está insertado el elemento.
- {{DOMxRef("Element.tagName")}} {{ReadOnlyInline}}
  - : Devuelve una cadena con el nombre de la etiqueta del elemento dado.

### Propiedades de instancia incluidas desde ARIA

_La interfaz `Element` también incluye las siguientes propiedades._

- {{domxref("Element.ariaAtomic")}}
  - : Una cadena que refleja el atributo [`aria-atomic`](/es/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-atomic), que indica si las tecnologías de asistencia presentarán toda la región modificada o solo partes de ella, según las notificaciones de cambio definidas por el atributo [`aria-relevant`](/es/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-relevant).
- {{domxref("Element.ariaAutoComplete")}}
  - : Una cadena que refleja el atributo [`aria-autocomplete`](/es/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-autocomplete), que indica si introducir texto podría activar la visualización de una o más predicciones del valor que el usuario pretende introducir en un combobox, searchbox o textbox, y especifica cómo se presentarían esas predicciones si se hicieran.
- {{domxref("Element.ariaBrailleLabel")}}
  - : Una cadena que refleja el atributo [`aria-braillelabel`](/es/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-braillelabel), que define la etiqueta braille del elemento.
- {{domxref("Element.ariaBrailleRoleDescription")}}
  - : Una cadena que refleja el atributo [`aria-brailleroledescription`](/es/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-brailleroledescription), que define la descripción braille del rol ARIA del elemento.
- {{domxref("Element.ariaBusy")}}
  - : Una cadena que refleja el atributo [`aria-busy`](/es/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-busy), que indica si un elemento está siendo modificado, ya que las tecnologías de asistencia podrían optar por esperar a que finalicen las modificaciones antes de mostrarlas al usuario.
- {{domxref("Element.ariaChecked")}}
  - : Una cadena que refleja el atributo [`aria-checked`](/es/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked), que indica el estado actual de "marcado" de las casillas de verificación, los botones de opción y otros widgets que admiten ese estado.
- {{domxref("Element.ariaColCount")}}
  - : Una cadena que refleja el atributo [`aria-colcount`](/es/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colcount), que define el número de columnas de una tabla, grid o treegrid.
- {{domxref("Element.ariaColIndex")}}
  - : Una cadena que refleja el atributo [`aria-colindex`](/es/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colindex), que define el índice o la posición de columna de un elemento con respecto al número total de columnas dentro de una tabla, grid o treegrid.
- {{domxref("Element.ariaColIndexText")}}
  - : Una cadena que refleja el atributo [`aria-colindextext`](/es/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colindextext), que define una alternativa de texto legible por personas para aria-colindex.
- {{domxref("Element.ariaColSpan")}}
  - : Una cadena que refleja el atributo [`aria-colspan`](/es/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colspan), que define el número de columnas que abarca una celda o gridcell dentro de una tabla, grid o treegrid.
- {{domxref("Element.ariaCurrent")}}
  - : Una cadena que refleja el atributo [`aria-current`](/es/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-current), que indica el elemento que representa el ítem en curso dentro de un contenedor o un conjunto de elementos relacionados.
- {{domxref("Element.ariaDescription")}}
  - : Una cadena que refleja el atributo [`aria-description`](/es/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-description), que define un valor de cadena que describe o añade una anotación al elemento actual.
- {{domxref("Element.ariaDisabled")}}
  - : Una cadena que refleja el atributo [`aria-disabled`](/es/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-disabled), que indica que el elemento es perceptible pero está deshabilitado, por lo que no es editable ni operable de ningún otro modo.
- {{domxref("Element.ariaExpanded")}}
  - : Una cadena que refleja el atributo [`aria-expanded`](/es/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded), que indica si un elemento de agrupación que pertenece a este elemento, o que este controla, está expandido o contraído.
- {{domxref("Element.ariaHasPopup")}}
  - : Una cadena que refleja el atributo [`aria-haspopup`](/es/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-haspopup), que indica la disponibilidad y el tipo de elemento emergente interactivo, como un menú o un cuadro de diálogo, que puede activarse mediante un elemento.
- {{domxref("Element.ariaHidden")}}
  - : Una cadena que refleja el atributo [`aria-hidden`](/es/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-hidden), que indica si el elemento se expone a una API de accesibilidad.
- {{domxref("Element.ariaInvalid")}}
  - : Una cadena que refleja el atributo [`aria-invalid`](/es/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-invalid), que indica que el valor introducido no se ajusta al formato que espera la aplicación.
- {{domxref("Element.ariaKeyShortcuts")}}
  - : Una cadena que refleja el atributo [`aria-keyshortcuts`](/es/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-keyshortcuts), que indica los atajos de teclado que el autor ha implementado para activar un elemento o darle el foco.
- {{domxref("Element.ariaLabel")}}
  - : Una cadena que refleja el atributo [`aria-label`](/es/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label), que define un valor de cadena que etiqueta el elemento actual.
- {{domxref("Element.ariaLevel")}}
  - : Una cadena que refleja el atributo [`aria-level`](/es/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-level), que define el nivel jerárquico de un elemento dentro de una estructura.
- {{domxref("Element.ariaLive")}}
  - : Una cadena que refleja el atributo [`aria-live`](/es/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-live), que indica que un elemento se actualizará y describe los tipos de actualizaciones que los agentes de usuario, las tecnologías de asistencia y el usuario pueden esperar de la región dinámica.
- {{domxref("Element.ariaModal")}}
  - : Una cadena que refleja el atributo [`aria-modal`](/es/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-modal), que indica si un elemento es modal cuando se muestra.
- {{domxref("Element.ariaMultiLine")}}
  - : Una cadena que refleja el atributo [`aria-multiline`](/es/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-multiline), que indica si un cuadro de texto admite varias líneas de entrada o solo una.
- {{domxref("Element.ariaMultiSelectable")}}
  - : Una cadena que refleja el atributo [`aria-multiselectable`](/es/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-multiselectable), que indica que el usuario puede seleccionar más de un elemento de entre los descendientes seleccionables actuales.
- {{domxref("Element.ariaOrientation")}}
  - : Una cadena que refleja el atributo [`aria-orientation`](/es/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-orientation), que indica si la orientación del elemento es horizontal, vertical o desconocida/ambigua.
- {{domxref("Element.ariaPlaceholder")}}
  - : Una cadena que refleja el atributo [`aria-placeholder`](/es/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-placeholder), que define una breve sugerencia para ayudar al usuario a introducir datos cuando el control no tiene valor.
- {{domxref("Element.ariaPosInSet")}}
  - : Una cadena que refleja el atributo [`aria-posinset`](/es/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-posinset), que define el número o la posición de un elemento dentro del conjunto de listitems o treeitems al que pertenece.
- {{domxref("Element.ariaPressed")}}
  - : Una cadena que refleja el atributo [`aria-pressed`](/es/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-pressed), que indica el estado actual de "presionado" de los botones de alternancia (toggle buttons).
- {{domxref("Element.ariaReadOnly")}}
  - : Una cadena que refleja el atributo [`aria-readonly`](/es/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-readonly), que indica que el elemento no es editable, pero sí operable.
- {{domxref("Element.ariaRelevant")}} {{Non-standard_Inline}}
  - : Una cadena que refleja el atributo [`aria-relevant`](/es/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-relevant), que indica qué notificaciones activará el agente de usuario cuando se modifique el árbol de accesibilidad dentro de una región dinámica. Se usa para describir qué cambios en una región `aria-live` son relevantes y deben anunciarse.
- {{domxref("Element.ariaRequired")}}
  - : Una cadena que refleja el atributo [`aria-required`](/es/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-required), que indica que se requiere una entrada del usuario en el elemento antes de poder enviar un formulario.
- {{domxref("Element.ariaRoleDescription")}}
  - : Una cadena que refleja el atributo [`aria-roledescription`](/es/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-roledescription), que define una descripción legible por personas, localizada por el autor, del rol de un elemento.
- {{domxref("Element.ariaRowCount")}}
  - : Una cadena que refleja el atributo [`aria-rowcount`](/es/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowcount), que define el número total de filas de una tabla, grid o treegrid.
- {{domxref("Element.ariaRowIndex")}}
  - : Una cadena que refleja el atributo [`aria-rowindex`](/es/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowindex), que define el índice o la posición de fila de un elemento con respecto al número total de filas de una tabla, grid o treegrid.
- {{domxref("Element.ariaRowIndexText")}}
  - : Una cadena que refleja el atributo [`aria-rowindextext`](/es/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowindextext), que define una alternativa de texto legible por personas para aria-rowindex.
- {{domxref("Element.ariaRowSpan")}}
  - : Una cadena que refleja el atributo [`aria-rowspan`](/es/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowspan), que define el número de filas que abarca una celda o gridcell dentro de una tabla, grid o treegrid.
- {{domxref("Element.ariaSelected")}}
  - : Una cadena que refleja el atributo [`aria-selected`](/es/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected), que indica el estado "seleccionado" actual de los elementos que admiten ese estado.
- {{domxref("Element.ariaSetSize")}}
  - : Una cadena que refleja el atributo [`aria-setsize`](/es/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-setsize), que define el número de elementos del conjunto de listitems o treeitems.
- {{domxref("Element.ariaSort")}}
  - : Una cadena que refleja el atributo [`aria-sort`](/es/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-sort), que indica si los elementos de una tabla o grid están ordenados de forma ascendente o descendente.
- {{domxref("Element.ariaValueMax")}}
  - : Una cadena que refleja el atributo [`aria-valueMax`](/es/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemax), que define el valor máximo permitido para un widget de rango.
- {{domxref("Element.ariaValueMin")}}
  - : Una cadena que refleja el atributo [`aria-valueMin`](/es/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemin), que define el valor mínimo permitido para un widget de rango.
- {{domxref("Element.ariaValueNow")}}
  - : Una cadena que refleja el atributo [`aria-valueNow`](/es/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuenow), que define el valor actual de un widget de rango.
- {{domxref("Element.ariaValueText")}}
  - : Una cadena que refleja el atributo [`aria-valuetext`](/es/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuetext), que define la alternativa de texto legible por personas de `aria-valuenow` para un widget de rango.
- {{domxref("Element.role")}}
  - : Una cadena que refleja el atributo [`role`](/es/docs/Web/Accessibility/ARIA/Reference/Roles) establecido explícitamente, que proporciona el rol semántico del elemento.

#### Propiedades de instancia reflejadas desde referencias a elementos ARIA

Estas propiedades reflejan los elementos especificados mediante una referencia por `id` en los atributos correspondientes, pero con algunas salvedades. Consulta [Referencias a elementos reflejadas](/es/docs/Web/API/Document_Object_Model/Reflected_attributes) en la guía _Atributos reflejados_ para obtener más información.

- {{domxref("Element.ariaActiveDescendantElement")}}
  - : Un elemento que representa el elemento activo cuando el foco está en un widget [`composite`](/es/docs/Web/Accessibility/ARIA/Reference/Roles/composite_role), [`combobox`](/es/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role), [`textbox`](/es/docs/Web/Accessibility/ARIA/Reference/Roles/textbox_role), [`group`](/es/docs/Web/Accessibility/ARIA/Reference/Roles/group_role) o [`application`](/es/docs/Web/Accessibility/ARIA/Reference/Roles/application_role).
    Refleja el atributo [`aria-activedescendant`](/es/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-activedescendant).
- {{domxref("Element.ariaControlsElements")}}
  - : Un array de elementos cuyo contenido o presencia controla el elemento al que se aplica.
    Refleja el atributo [`aria-controls`](/es/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-controls).
- {{domxref("Element.ariaDescribedByElements")}}
  - : Un array de elementos que contienen la descripción accesible del elemento al que se aplica.
    Refleja el atributo [`aria-describedby`](/es/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby).
- {{domxref("Element.ariaDetailsElements")}}
  - : Un array de elementos que proporcionan detalles accesibles para el elemento al que se aplica.
    Refleja el atributo [`aria-details`](/es/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details).
- {{domxref("Element.ariaErrorMessageElements")}}
  - : Un array de elementos que proporcionan un mensaje de error para el elemento al que se aplica.
    Refleja el atributo [`aria-errormessage`](/es/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-errormessage).
- {{domxref("Element.ariaFlowToElements")}}
  - : Un array de elementos que identifican el siguiente elemento (o elementos) en un orden de lectura alternativo del contenido, que reemplaza el orden de lectura general predeterminado a criterio del usuario.
    Refleja el atributo [`aria-flowto`](/es/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-flowto).
- {{domxref("Element.ariaLabelledByElements")}}
  - : Un array de elementos que proporcionan el nombre accesible del elemento al que se aplica.
    Refleja el atributo [`aria-labelledby`](/es/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby).
- {{domxref("Element.ariaOwnsElements")}}
  - : Un array de elementos que pertenecen al elemento al que se aplica.
    Se usa para definir una relación visual, funcional o contextual entre un elemento padre y sus hijos cuando la jerarquía del DOM no puede representar esa relación.
    Refleja el atributo [`aria-owns`](/es/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-owns).

## Métodos de instancia

_`Element` hereda métodos de su interfaz padre, {{DOMxRef("Node")}}, y, a su vez, de la interfaz padre de esta, {{DOMxRef("EventTarget")}}._

- {{DOMxRef("Element.after()")}}
  - : Inserta un conjunto de objetos {{domxref("Node")}} o cadenas en la lista de hijos del padre del `Element`, justo después del `Element`.
- {{DOMxRef("Element.animate()")}}
  - : Un método abreviado para crear y ejecutar una animación en un elemento. Devuelve la instancia del objeto Animation creada.
- {{DOMxRef("Element.ariaNotify()")}}
  - : Especifica que un lector de pantalla debe anunciar una cadena de texto dada.
- {{DOMxRef("Element.append()")}}
  - : Inserta un conjunto de objetos {{domxref("Node")}} o cadenas después del último hijo del elemento.
- {{DOMxRef("Element.attachShadow()")}}
  - : Adjunta un árbol shadow DOM al elemento especificado y devuelve una referencia a su {{DOMxRef("ShadowRoot")}}.
- {{DOMxRef("Element.before()")}}
  - : Inserta un conjunto de objetos {{domxref("Node")}} o cadenas en la lista de hijos del padre del `Element`, justo antes del `Element`.
- {{DOMxRef("Element.checkVisibility()")}}
  - : Devuelve si se espera que un elemento sea visible o no, según comprobaciones configurables.
- {{DOMxRef("Element.closest()")}}
  - : Devuelve el `Element` que es el ancestro más cercano del elemento actual (o el propio elemento) y que coincide con los selectores indicados como parámetro.
- {{DOMxRef("Element.computedStyleMap()")}}
  - : Devuelve una interfaz {{DOMxRef("StylePropertyMapReadOnly")}} que proporciona una representación de solo lectura de un bloque de declaraciones CSS, como alternativa a {{DOMxRef("CSSStyleDeclaration")}}.
- {{DOMxRef("Element.getAnimations()")}}
  - : Devuelve un array de objetos Animation que están activos actualmente en el elemento.
- {{DOMxRef("Element.getAttribute()")}}
  - : Obtiene el valor del atributo con el nombre dado de este nodo y lo devuelve como una cadena.
- {{DOMxRef("Element.getAttributeNames()")}}
  - : Devuelve un array con los nombres de los atributos del elemento actual.
- {{DOMxRef("Element.getAttributeNode()")}}
  - : Obtiene la representación como nodo del atributo especificado del nodo actual y la devuelve como un {{DOMxRef("Attr")}}.
- {{DOMxRef("Element.getAttributeNodeNS()")}}
  - : Obtiene la representación como nodo del atributo con el nombre y el namespace especificados de este nodo y lo devuelve como un {{DOMxRef("Attr")}}.
- {{DOMxRef("Element.getAttributeNS()")}}
  - : Obtiene el valor del atributo con el namespace y el nombre especificados de este nodo y lo devuelve como una cadena.
- {{DOMxRef("Element.getBoundingClientRect()")}}
  - : Devuelve el tamaño de un elemento y su posición relativa al viewport.
- {{domxref("Element.getBoxQuads()")}} {{Experimental_Inline}}
  - : Devuelve una lista de objetos {{domxref("DOMQuad")}} que representan los fragmentos CSS del nodo.
- {{DOMxRef("Element.getClientRects()")}}
  - : Devuelve una colección de rectángulos que indican los rectángulos delimitadores de cada línea de texto.
- {{DOMxRef("Element.getElementsByClassName()")}}
  - : Devuelve una {{DOMxRef("HTMLCollection")}} dinámica que contiene todos los descendientes del elemento actual que tienen la lista de clases dada como parámetro.
- {{DOMxRef("Element.getElementsByTagName()")}}
  - : Devuelve una {{DOMxRef("HTMLCollection")}} dinámica que contiene todos los elementos descendientes del elemento actual con un nombre de etiqueta determinado.
- {{DOMxRef("Element.getElementsByTagNameNS()")}}
  - : Devuelve una {{DOMxRef("HTMLCollection")}} dinámica que contiene todos los elementos descendientes del elemento actual con un nombre de etiqueta y un namespace determinados.
- {{DOMxRef("Element.getHTML()")}}
  - : Devuelve el contenido DOM del elemento como una cadena HTML, con la posibilidad de incluir el shadow DOM.
- {{DOMxRef("Element.hasAttribute()")}}
  - : Devuelve un valor booleano que indica si el elemento tiene el atributo especificado o no.
- {{DOMxRef("Element.hasAttributeNS()")}}
  - : Devuelve un valor booleano que indica si el elemento tiene el atributo especificado en el namespace especificado o no.
- {{DOMxRef("Element.hasAttributes()")}}
  - : Devuelve un valor booleano que indica si el elemento tiene uno o más atributos HTML presentes.
- {{DOMxRef("Element.hasPointerCapture()")}}
  - : Indica si el elemento sobre el que se invoca tiene la captura del puntero identificado por el ID de puntero dado.
- {{DOMxRef("Element.insertAdjacentElement()")}}
  - : Inserta un nodo de elemento dado en una posición dada relativa al elemento sobre el que se invoca.
- {{DOMxRef("Element.insertAdjacentHTML()")}}
  - : Analiza el texto como HTML o XML e inserta los nodos resultantes en el árbol en la posición indicada.
- {{DOMxRef("Element.insertAdjacentText()")}}
  - : Inserta un nodo de texto dado en una posición dada relativa al elemento sobre el que se invoca.
- {{DOMxRef("Element.matches()")}}
  - : Devuelve un valor booleano que indica si el elemento sería seleccionado por la cadena de selector especificada.
- {{DOMxRef("Element.moveBefore()")}}
  - : Mueve un {{domxref("Node")}} dado dentro del nodo sobre el que se invoca, como hijo directo y antes de un nodo de referencia dado, sin eliminarlo para volver a insertarlo después.
- {{DOMxRef("Element.prepend()")}}
  - : Inserta un conjunto de objetos {{domxref("Node")}} o cadenas antes del primer hijo del elemento.
- {{DOMxRef("Element.pseudo()")}} {{experimental_inline}}
  - : Devuelve un objeto {{domxref("CSSPseudoElement")}} que representa el [pseudoelemento](/es/docs/Web/CSS/Reference/Selectors/Pseudo-elements) de [CSS](/es/docs/Web/CSS) del tipo especificado asociado al elemento.
- {{DOMxRef("Element.querySelector()")}}
  - : Devuelve el primer {{DOMxRef("Node")}} que coincide con la cadena de selector especificada, relativa al elemento.
- {{DOMxRef("Element.querySelectorAll()")}}
  - : Devuelve una {{DOMxRef("NodeList")}} con los nodos que coinciden con la cadena de selector especificada, relativa al elemento.
- {{DOMxRef("Element.releasePointerCapture()")}}
  - : Libera (detiene) la captura del puntero establecida previamente para un {{DOMxRef("PointerEvent")}} concreto.
- {{DOMxRef("Element.remove()")}}
  - : Elimina el elemento de la lista de hijos de su padre.
- {{DOMxRef("Element.removeAttribute()")}}
  - : Elimina el atributo especificado del nodo actual.
- {{DOMxRef("Element.removeAttributeNode()")}}
  - : Elimina la representación como nodo del atributo con el nombre dado del nodo actual.
- {{DOMxRef("Element.removeAttributeNS()")}}
  - : Elimina del nodo actual el atributo con el nombre y el namespace especificados.
- {{DOMxRef("Element.replaceChildren()")}}
  - : Reemplaza los hijos existentes de un {{domxref("Node")}} por un nuevo conjunto de hijos especificado.
- {{DOMxRef("Element.replaceWith()")}}
  - : Reemplaza el elemento en la lista de hijos de su padre por un conjunto de objetos {{domxref("Node")}} o cadenas.
- {{DOMxRef("Element.requestFullscreen()")}}
  - : Solicita de forma asíncrona al navegador que muestre el elemento en pantalla completa.
- {{DOMxRef("Element.requestPointerLock()")}}
  - : Permite solicitar de forma asíncrona que el puntero quede bloqueado sobre el elemento dado.
- {{domxref("Element.scroll()")}}
  - : Desplaza el contenido a un conjunto concreto de coordenadas dentro de un elemento dado.
- {{domxref("Element.scrollBy()")}}
  - : Desplaza un elemento la cantidad dada.
- {{DOMxRef("Element.scrollIntoView()")}}
  - : Desplaza la página hasta que el elemento sea visible.
- {{DOMxRef("Element.scrollIntoViewIfNeeded()")}} {{Non-standard_Inline}}
  - : Desplaza el elemento actual hasta el área visible de la ventana del navegador si todavía no está dentro de ella. **Usa en su lugar el método estándar {{DOMxRef("Element.scrollIntoView()")}}.**
- {{domxref("Element.scrollTo()")}}
  - : Desplaza el contenido a un conjunto concreto de coordenadas dentro de un elemento dado.
- {{DOMxRef("Element.setAttribute()")}}
  - : Establece el valor de un atributo con un nombre específico en el nodo actual.
- {{DOMxRef("Element.setAttributeNode()")}}
  - : Establece la representación como nodo del atributo con el nombre dado en el nodo actual.
- {{DOMxRef("Element.setAttributeNodeNS()")}}
  - : Establece la representación como nodo del atributo con el nombre y el namespace especificados en el nodo actual.
- {{DOMxRef("Element.setAttributeNS()")}}
  - : Establece el valor del atributo con el namespace y el nombre especificados de este nodo.
- {{DOMxRef("Element.setCapture()")}} {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Configura la captura de eventos del ratón, redirigiendo todos los eventos del ratón a este elemento.
- {{DOMxRef("Element.setHTML()")}} {{SecureContext_Inline}}
  - : Analiza y [sanitiza](/es/docs/Web/API/HTML_Sanitizer_API) una cadena de HTML para convertirla en un fragmento de documento, que luego reemplaza el subárbol original del elemento en el DOM.
- {{DOMxRef("Element.setHTMLUnsafe()")}}
  - : Analiza una cadena de HTML, sin sanear, para obtener un fragmento de documento, que luego reemplaza el subárbol original del elemento en el DOM. La cadena HTML puede incluir shadow roots declarativos, que se analizarían como elementos template si el HTML se hubiera establecido con [`Element.innerHTML`](/es/docs/Web/API/Element/innerHTML).
- {{DOMxRef("Element.setPointerCapture()")}}
  - : Designa un elemento concreto como objetivo de captura de los futuros [eventos de puntero](/es/docs/Web/API/Pointer_events).
- {{DOMxRef("Element.startViewTransition()")}} {{experimental_inline}}
  - : Inicia una nueva [transición de vista](/es/docs/Web/API/View_Transition_API) dentro del mismo documento (SPA) [con ámbito de elemento](/es/docs/Web/API/View_Transition_API/Using_element-scoped) y devuelve un objeto {{domxref("ViewTransition")}} que la representa.
- {{DOMxRef("Element.toggleAttribute()")}}
  - : Alterna un atributo booleano en el elemento especificado: lo elimina si está presente y lo añade si no lo está.

## Eventos

Escucha estos eventos con `addEventListener()` o asignando un detector de eventos a la propiedad `oneventname` de esta interfaz.

- {{domxref("Element/afterscriptexecute_event","afterscriptexecute")}} {{Non-standard_Inline}} {{deprecated_inline}}
  - : Se dispara cuando se ha ejecutado un script.
- {{domxref("Element/beforeinput_event", "beforeinput")}}
  - : Se dispara cuando el valor de un elemento input está a punto de modificarse.
- {{domxref("Element/beforematch_event", "beforematch")}}
  - : Se dispara en un elemento que está en el estado [_hidden until found_](/es/docs/Web/HTML/Reference/Global_attributes/hidden) cuando el navegador está a punto de revelar su contenido porque el usuario lo ha encontrado mediante la función "buscar en la página" o mediante la navegación por fragmento.
- {{domxref("Element/beforescriptexecute_event","beforescriptexecute")}} {{Non-standard_Inline}} {{deprecated_inline}}
  - : Se dispara cuando un script está a punto de ejecutarse.
- {{domxref("Element/beforexrselect_event", "beforexrselect")}} {{Experimental_Inline}}
  - : Se dispara antes de que se envíen los eventos select de WebXR ({{domxref("XRSession/select_event", "select")}}, {{domxref("XRSession/selectstart_event", "selectstart")}}, {{domxref("XRSession/selectend_event", "selectend")}}).
- {{domxref("Element/contentvisibilityautostatechange_event", "contentvisibilityautostatechange")}}
  - : Se dispara en cualquier elemento que tenga establecido {{cssxref("content-visibility", "content-visibility: auto")}} cuando empieza o deja de ser [relevante para el usuario](/es/docs/Web/CSS/Guides/Containment/Using) y de [omitir su contenido](/es/docs/Web/CSS/Guides/Containment/Using).
- {{domxref("Element/input_event","input")}}
  - : Se dispara cuando cambia el valor de un elemento como resultado directo de una acción del usuario.
- {{domxref("Element/securitypolicyviolation_event","securitypolicyviolation")}}
  - : Se dispara cuando se infringe una [Política de Seguridad del Contenido](/es/docs/Web/HTTP/Guides/CSP).
- {{domxref("Element/wheel_event","wheel")}}
  - : Se dispara cuando el usuario gira la rueda de un dispositivo señalador (normalmente un ratón).

### Eventos de animación

- {{domxref("Element/animationcancel_event", "animationcancel")}}
  - : Se dispara cuando una animación se interrumpe inesperadamente.
- {{domxref("Element/animationend_event", "animationend")}}
  - : Se dispara cuando una animación ha finalizado normalmente.
- {{domxref("Element/animationiteration_event", "animationiteration")}}
  - : Se dispara cuando ha terminado una iteración de la animación.
- {{domxref("Element/animationstart_event", "animationstart")}}
  - : Se dispara cuando comienza una animación.

### Eventos del portapapeles

- {{domxref("Element/copy_event", "copy")}}
  - : Se dispara cuando el usuario inicia una acción de copiar a través de la interfaz de usuario del navegador.
- {{domxref("Element/cut_event", "cut")}}
  - : Se dispara cuando el usuario inicia una acción de cortar a través de la interfaz de usuario del navegador.
- {{domxref("Element/paste_event", "paste")}}
  - : Se dispara cuando el usuario inicia una acción de pegar a través de la interfaz de usuario del navegador.

### Eventos de composición

- {{domxref("Element/compositionend_event", "compositionend")}}
  - : Se dispara cuando un sistema de composición de texto, como un {{glossary("input method editor", "editor de método de entrada")}}, completa o cancela la sesión de composición actual.
- {{domxref("Element/compositionstart_event", "compositionstart")}}
  - : Se dispara cuando un sistema de composición de texto, como un {{glossary("input method editor", "editor de método de entrada")}}, inicia una nueva sesión de composición.
- {{domxref("Element/compositionupdate_event", "compositionupdate")}}
  - : Se dispara cuando se recibe un carácter nuevo en el contexto de una sesión de composición de texto controlada por un sistema de composición de texto, como un {{glossary("input method editor", "editor de método de entrada")}}.

### Eventos de foco

- {{domxref("Element/blur_event", "blur")}}
  - : Se dispara cuando un elemento ha perdido el foco.
- {{domxref("Element/focus_event", "focus")}}
  - : Se dispara cuando un elemento ha recibido el foco.
- {{domxref("Element/focusin_event", "focusin")}}
  - : Se dispara cuando un elemento ha recibido el foco, después de {{domxref("Element/focus_event", "focus")}}.
- {{domxref("Element/focusout_event", "focusout")}}
  - : Se dispara cuando un elemento ha perdido el foco, después de {{domxref("Element/blur_event", "blur")}}.

### Eventos de pantalla completa

- {{domxref("Element/fullscreenchange_event", "fullscreenchange")}}
  - : Se envía a un `Element` cuando entra en el modo de [pantalla completa](/es/docs/Web/API/Fullscreen_API/Guide) o sale de él.
- {{domxref("Element/fullscreenerror_event", "fullscreenerror")}}
  - : Se envía a un `Element` si se produce un error al intentar ponerlo en modo de [pantalla completa](/es/docs/Web/API/Fullscreen_API/Guide) o sacarlo de él.

### Eventos de teclado

- {{domxref("Element/keydown_event", "keydown")}}
  - : Se dispara cuando se presiona una tecla.
- {{domxref("Element/keypress_event", "keypress")}} {{Deprecated_Inline}}
  - : Se dispara cuando se presiona una tecla que produce un valor de carácter.
- {{domxref("Element/keyup_event", "keyup")}}
  - : Se dispara cuando se suelta una tecla.

### Eventos de ratón

- {{domxref("Element/auxclick_event", "auxclick")}}
  - : Se dispara cuando se presiona y suelta un botón no principal de un dispositivo señalador (por ejemplo, cualquier botón del ratón que no sea el izquierdo) sobre un elemento.
- {{domxref("Element/click_event", "click")}}
  - : Se dispara cuando se presiona y se suelta sobre un único elemento un botón del dispositivo señalador (por ejemplo, el botón principal del ratón).
- {{domxref("Element/contextmenu_event", "contextmenu")}}
  - : Se dispara cuando el usuario intenta abrir un menú contextual.
- {{domxref("Element/dblclick_event", "dblclick")}}
  - : Se dispara cuando se hace doble clic con un botón del dispositivo señalador (por ejemplo, el botón principal del ratón) sobre un único elemento.
- {{domxref("Element/DOMActivate_event", "DOMActivate")}} {{Deprecated_Inline}}
  - : Se produce cuando se activa un elemento, por ejemplo, mediante un clic del ratón o al presionar una tecla.
- {{domxref("Element/DOMMouseScroll_event", "DOMMouseScroll")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Se produce cuando se utiliza la rueda del ratón o un dispositivo similar y la cantidad de desplazamiento acumulada supera una línea o una página desde el último evento.
- {{domxref("Element/mousedown_event", "mousedown")}}
  - : Se dispara cuando se presiona un botón del dispositivo señalador sobre un elemento.
- {{domxref("Element/mouseenter_event", "mouseenter")}}
  - : Se dispara cuando un dispositivo señalador (normalmente un ratón) se mueve sobre el elemento que tiene asociado el detector.
- {{domxref("Element/mouseleave_event", "mouseleave")}}
  - : Se dispara cuando el puntero de un dispositivo señalador (normalmente un ratón) sale de un elemento que tiene asociado el detector.
- {{domxref("Element/mousemove_event", "mousemove")}}
  - : Se dispara cuando un dispositivo señalador (normalmente un ratón) se mueve mientras está sobre un elemento.
- {{domxref("Element/mouseout_event", "mouseout")}}
  - : Se dispara cuando un dispositivo señalador (normalmente un ratón) sale del elemento al que está asociado el detector o de uno de sus hijos.
- {{domxref("Element/mouseover_event", "mouseover")}}
  - : Se dispara cuando un dispositivo señalador se mueve sobre el elemento al que está asociado el detector o sobre uno de sus hijos.
- {{domxref("Element/mouseup_event", "mouseup")}}
  - : Se dispara cuando se suelta un botón del dispositivo señalador sobre un elemento.
- {{domxref("Element/mousewheel_event", "mousewheel")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Se dispara cuando se acciona la rueda del ratón o un dispositivo similar.
- {{domxref("Element/MozMousePixelScroll_event", "MozMousePixelScroll")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Se dispara cuando se acciona la rueda del ratón o un dispositivo similar.
- {{domxref("Element/webkitmouseforcechanged_event", "webkitmouseforcechanged")}} {{Non-standard_Inline}}
  - : Se dispara cada vez que cambia la cantidad de presión sobre el trackpad o la pantalla táctil.
- {{domxref("Element/webkitmouseforcedown_event", "webkitmouseforcedown")}} {{Non-standard_Inline}}
  - : Se dispara después del evento mousedown, en cuanto se ha aplicado presión suficiente para considerarlo un "clic con fuerza".
- {{domxref("Element/webkitmouseforcewillbegin_event", "webkitmouseforcewillbegin")}} {{Non-standard_Inline}}
  - : Se dispara antes del evento {{domxref("Element/mousedown_event", "mousedown")}}.
- {{domxref("Element/webkitmouseforceup_event", "webkitmouseforceup")}} {{Non-standard_Inline}}
  - : Se dispara después del evento {{domxref("Element/webkitmouseforcedown_event", "webkitmouseforcedown")}}, en cuanto la presión se ha reducido lo suficiente para dar por terminado el "clic con fuerza".

### Eventos de puntero

- {{domxref("Element/gotpointercapture_event", "gotpointercapture")}}
  - : Se dispara cuando un elemento captura un puntero mediante {{domxref("Element/setPointerCapture", "setPointerCapture()")}}.
- {{domxref("Element/lostpointercapture_event", "lostpointercapture")}}
  - : Se dispara cuando se libera un [puntero capturado](/es/docs/Web/API/Pointer_events).
- {{domxref("Element/pointercancel_event", "pointercancel")}}
  - : Se dispara cuando se cancela un evento de puntero.
- {{domxref("Element/pointerdown_event", "pointerdown")}}
  - : Se dispara cuando un puntero se activa.
- {{domxref("Element/pointerenter_event", "pointerenter")}}
  - : Se dispara cuando un puntero entra en los límites de hit test de un elemento o de uno de sus descendientes.
- {{domxref("Element/pointerleave_event", "pointerleave")}}
  - : Se dispara cuando un puntero sale de los límites de hit test de un elemento.
- {{domxref("Element/pointermove_event", "pointermove")}}
  - : Se dispara cuando un puntero cambia de coordenadas.
- {{domxref("Element/pointerout_event", "pointerout")}}
  - : Se dispara cuando un puntero sale de los límites de _hit test_ de un elemento (entre otros motivos).
- {{domxref("Element/pointerover_event", "pointerover")}}
  - : Se dispara cuando un puntero entra en los límites de hit test de un elemento.
- {{domxref("Element/pointerrawupdate_event", "pointerrawupdate")}}
  - : Se dispara cuando un puntero cambia cualquier propiedad que no dispare los eventos {{domxref("Element/pointerdown_event", "pointerdown")}} ni {{domxref("Element/pointerup_event", "pointerup")}}.
- {{domxref("Element/pointerup_event", "pointerup")}}
  - : Se dispara cuando un puntero deja de estar activo.

### Eventos de desplazamiento

- {{domxref("Element/scroll_event", "scroll")}}
  - : Se dispara cuando se ha desplazado la vista del documento o un elemento.
- {{domxref("Element/scrollend_event", "scrollend")}}
  - : Se dispara cuando la vista del documento ha terminado de desplazarse.
- {{domxref("Element/scrollsnapchange_event", "scrollsnapchange")}} {{experimental_inline}}
  - : Se dispara en el contenedor de desplazamiento al finalizar una operación de desplazamiento, cuando se ha seleccionado un nuevo objetivo de ajuste de desplazamiento (scroll snap).
- {{domxref("Element/scrollsnapchanging_event", "scrollsnapchanging")}} {{experimental_inline}}
  - : Se dispara en el contenedor de desplazamiento cuando el navegador determina que hay un nuevo objetivo de ajuste de desplazamiento pendiente; es decir, se seleccionará cuando termine el gesto de desplazamiento en curso.

### Eventos táctiles

- {{domxref("Element/gesturechange_event","gesturechange")}} {{Non-standard_Inline}}
  - : Se dispara cuando los dedos se mueven durante un gesto táctil.
- {{domxref("Element/gestureend_event","gestureend")}} {{Non-standard_Inline}}
  - : Se dispara cuando ya no hay varios dedos en contacto con la superficie táctil, finalizando así el gesto.
- {{domxref("Element/gesturestart_event","gesturestart")}} {{Non-standard_Inline}}
  - : Se dispara cuando varios dedos entran en contacto con la superficie táctil, iniciando así un nuevo gesto.
- {{domxref("Element/touchcancel_event", "touchcancel")}}
  - : Se dispara cuando uno o más puntos de contacto se interrumpen de una manera específica de la implementación (por ejemplo, si se crean demasiados puntos de contacto).
- {{domxref("Element/touchend_event", "touchend")}}
  - : Se dispara cuando uno o más puntos de contacto se retiran de la superficie táctil.
- {{domxref("Element/touchmove_event", "touchmove")}}
  - : Se dispara cuando uno o más puntos de contacto se desplazan por la superficie táctil.
- {{domxref("Element/touchstart_event", "touchstart")}}
  - : Se dispara cuando uno o más puntos de contacto se colocan sobre la superficie táctil.

### Eventos de transición

- {{domxref("Element/transitioncancel_event", "transitioncancel")}}
  - : Un {{domxref("Event")}} que se dispara cuando se ha cancelado una [transición CSS](/es/docs/Web/CSS/Guides/Transitions).
- {{domxref("Element/transitionend_event", "transitionend")}}
  - : Un {{domxref("Event")}} que se dispara cuando una [transición CSS](/es/docs/Web/CSS/Guides/Transitions) ha terminado de reproducirse.
- {{domxref("Element/transitionrun_event", "transitionrun")}}
  - : Un {{domxref("Event")}} que se dispara cuando se crea una [transición CSS](/es/docs/Web/CSS/Guides/Transitions) (es decir, cuando se añade a un conjunto de transiciones en ejecución), aunque no necesariamente haya comenzado.
- {{domxref("Element/transitionstart_event", "transitionstart")}}
  - : Un {{domxref("Event")}} que se dispara cuando una [transición CSS](/es/docs/Web/CSS/Guides/Transitions) ha comenzado a realizarse.

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}
