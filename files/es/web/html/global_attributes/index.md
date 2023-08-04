---
title: Atributos globales
slug: Web/HTML/Global_attributes
---

{{HTMLSidebar("Atributos_globales")}}

Los **atributos globales** son atributos comunes a todos los elementos HTML; se pueden usar en todos los elementos, aunque es posible que no tengan ningún efecto en algunos elementos.

Los atributos globales se pueden especificar en todos los [elementos HTML](/es/docs/Web/HTML/Element), _incluso aquellos no especificados en el estándar_. Eso significa que cualquier elemento no estándar debe permitir estos atributos, aunque el uso de esos elementos significa que el documento ya no es compatible con HTML5. Por ejemplo, los navegadores compatibles con HTML5 ocultan el contenido marcado como `<foo hidden>...</foo>`, aunque `<foo>` no sea un elemento HTML válido.

Además de los atributos globales HTML básicos, también existen los siguientes atributos globales:

- `xml:lang` y `xml:base` — estos se heredan de las especificaciones XHTML y están en desuso, pero se mantienen por motivos de compatibilidad.
- Los múltiples atributos **`[aria-*](/es/docs/Web/Accessibility/ARIA)`**, utilizados para mejorar la accesibilidad.
- Los atributos de [control de eventos](/es/docs/Web/Guide/Events/Event_handlers): **`onabort`**, **`onautocomplete`**, **`onautocompleteerror`**, **`onblur`**, **`oncancel`**, **`oncanplay`**, **`oncanplaythrough`**, **`onchange`**, **`onclick`**, **`onclose`**, **`oncontextmenu`**, **`oncuechange`**, **`ondblclick`**, **`ondrag`**, **`ondragend`**, **`ondragenter`**, **`ondragexit`**, **`ondragleave`**, **`ondragover`**, **`ondragstart`**, **`ondrop`**, **`ondurationchange`**, **`onemptied`**, **`onended`**, **`onerror`**, **`onfocus`**, **`oninput`**, **`oninvalid`**, **`onkeydown`**, **`onkeypress`**, **`onkeyup`**, **`onload`**, **`onloadeddata`**, **`onloadedmetadata`**, **`onloadstart`**, **`onmousedown`**, **`onmouseenter`**, **`onmouseleave`**, **`onmousemove`**, **`onmouseout`**, **`onmouseover`**, **`onmouseup`**, **`onmousewheel`**, **`onpause`**, **`onplay`**, **`onplaying`**, **`onprogress`**, **`onratechange`**, **`onreset`**, **`onresize`**, **`onscroll`**, **`onseeked`**, **`onseeking`**, **`onselect`**, **`onshow`**, **`onsort`**, **`onstalled`**, **`onsubmit`**, **`onsuspend`**, **`ontimeupdate`**, **`ontoggle`**, **`onvolumechange`**, **`onwaiting`**.

## Lista de atributos globales

- **`[accesskey](/es/docs/Web/HTML/Global_attributes/accesskey)`**
  - : Proporciona una pista para generar un atajo de teclado para el elemento actual. Este atributo consta de una lista de caracteres separados por espacios. El navegador debe utilizar el primero que exista en la distribución del teclado del ordenador.
- **`[autocapitalize](/es/docs/Web/HTML/Global_attributes/autocapitalize)`**
  - : Controla si la entrada de texto se pone en mayúsculas automáticamente a medida que el usuario la introduce o edita. Puede tener los siguientes valores:
    - `off` o `none`, no se aplica capitalización automática (todas las letras están predeterminadas en minúsculas)
    - `on` o `sentences`, la primera letra de cada oración de manera predeterminada tiene una letra mayúscula; todas las demás letras están predeterminadas en minúsculas
    - `words`, la primera letra de cada palabra de manera predeterminada tiene una letra mayúscula; todas las demás letras están predeterminadas en minúsculas
    - `characters`, todas las letras de manera predeterminada deben estar en mayúsculas
- **`[class](/es/docs/Web/HTML/Global_attributes/class)`**
  - : Una lista separada por espacios de las clases del elemento. Las clases permiten que CSS y JavaScript seleccionen y accedan a elementos específicos a través de los [selectores de clase](/es/docs/Web/CSS/Class_selectors) o funciones como el método {{DOMxRef("document.getElementsByClassName()")}}.
- **`[contenteditable](/es/docs/Web/HTML/Global_attributes/contenteditable)`**
  - : Un atributo enumerado que indica si el usuario debe poder editar el elemento. Si es así, el navegador modifica su «_widget_» para permitir la edición. El atributo debe tomar uno de los siguientes valores:
    - `true` o la _cadena vacía_, la cual indica que el elemento debe ser editable;
    - `false`, el cual indica que el elemento no debe ser editable.
- **`[contextmenu](/es/docs/Web/HTML/Global_attributes/contextmenu)`** {{deprecated_inline}}
  - : El [id](#attr-id) de un {{HTMLElement ("menu")}} para usar como el menú contextual para este elemento.
- **`[data-*](/es/docs/Web/HTML/Global_attributes/data-*)`**
  - : Forma una clase de atributos, denominados atributos de datos personalizados, que permiten el intercambio de información de propiedad entre el [HTML](/es/docs/Web/HTML) y su representación {{Glossary("DOM")}} que pueden utilizar los scripts. Todos estos datos personalizados están disponibles a través de la interfaz {{DOMxRef("HTMLElement")}} del elemento en el que está configurado el atributo. La propiedad {{DOMxRef("HTMLElement.dataset")}} les da acceso.
- **`[dir](/es/docs/Web/HTML/Global_attributes/dir)`**
  - : Un atributo enumerado que indica la direccionalidad del texto del elemento. Puede tener los siguientes valores:
    - `ltr`, que significa _de izquierda a derecha_ y s debe usar para idiomas que se escriben de izquierda a derecha (tal como el Español);
    - `rtl`, que significa _de derecha a izquierda_ y se utiliza para idiomas que se escriben de derecha a izquierda (tal como el Árabe);
    - `auto`, permite que el agente de usuario decida. Utiliza un algoritmo básico ya que analiza los caracteres dentro del elemento hasta que encuentra un carácter con una direccionalidad fuerte, luego aplica esa direccionalidad a todo el elemento.
- **`[draggable](/es/docs/Web/HTML/Global_attributes/draggable)`**
  - : Un atributo enumerado que indica si el elemento se puede arrastrar mediante la [API de arrastrar y soltar](/es/docs/DragDrop/Drag_and_Drop). Puede tener los siguientes valores:
    - `true`, indica que el elemento se puede arrastrar
    - `false`, indica que el elemento **no** se puede arrastrar.
- **`[dropzone](/es/docs/Web/HTML/Global_attributes/dropzone)`** {{deprecated_inline}}
  - : Un atributo enumerado que indica qué tipos de contenido se pueden colocar en un elemento, utilizando la [API de arrastrar y soltar](/es/docs/DragDrop/Drag_and_Drop). Puede tener los siguientes valores: -`copy`, indica que soltar creará una copia del elemento que se arrastró
    - `move`, indica que el elemento que se arrastró se moverá a esta nueva ubicación.
    - `link`, creará un enlace a los datos arrastrados.
- **`[exportparts](/es/docs/Web/HTML/Global_attributes/exportparts)`** {{Experimental_Inline}}
  - : Se utiliza para exportar de forma transitiva partes de sombras de un árbol de sombras anidado a un árbol contenedor de luz.
- **`[hidden](/es/docs/Web/HTML/Global_attributes/hidden)`**
  - : Un atributo booleano indica que el elemento aún no es o ya no es _relevante_. Por ejemplo, se puede utilizar para ocultar elementos de la página que no se pueden utilizar hasta que se haya completado el proceso de inicio de sesión. El navegador no representará tales elementos. Este atributo no se debe utilizar para ocultar contenido que se podría mostrar legítimamente.
- **`[id](/es/docs/Web/HTML/Global_attributes/id)`**
  - : Define un identificador (ID) único que debe ser único en todo el documento. Su propósito es identificar el elemento al vincularlo (usando un identificador de fragmento), al escribir un script o al aplicarle estilo (con CSS).
- **`[inputmode](/es/docs/Web/HTML/Global_attributes/inputmode)`**
  - : Proporciona una pista a los navegadores sobre el tipo de configuración de teclado virtual que se debe utilizar al editar este elemento o su contenido. Se usa principalmente en elementos {{HTMLElement("input")}}, pero se puede usar en cualquier elemento mientras esté en modo [`contenteditable`](/es/docs/Web/HTML/Global_attributes#contenteditable).
- **`[is](/es/docs/Web/HTML/Global_attributes/is)`**
  - : Te permite especificar que un elemento HTML estándar se debe comportar como un elemento integrado personalizado registrado (consulta [Uso de elementos personalizados](/es/docs/Web/Web_Components/Using_custom_elements) para obtener más detalles).

> **Nota:** Los atributos `item*` son parte de [Función de microdatos HTML de WHATWG](https://html.spec.whatwg.org/multipage/microdata.html#microdata).

- **`[itemid](/es/docs/Web/HTML/Global_attributes/itemid)`**
  - : El identificador único y global de un artículo.
- **`[itemprop](/es/docs/Web/HTML/Global_attributes/itemprop)`**
  - : Se usa para agregar propiedades a un elemento. Se puede especificar a cada elemento HTML un atributo `itemprop`, donde un `itemprop` consiste en un par de nombre y valor.
- **`[itemref](/es/docs/Web/HTML/Global_attributes/itemref)`**
  - : Las propiedades que no son descendientes de un elemento con el atributo `itemscope` se pueden asociar con el elemento usando un `itemref`. Proporciona una lista de IDs de elementos (no `itemid`s) con propiedades adicionales en otras partes del documento.
- **`[itemscope](/es/docs/Web/HTML/Global_attributes/itemscope)`**
  - : `itemscope` (normalmente) funciona junto con [`itemtype`](/es/docs/Web/HTML/Global_attributes#itemtype) para especificar que el HTML contenido en un bloque es sobre un elemento en particular. `itemscope` crea el «_Item_» y define el alcance del `itemtype` asociado con él. `itemtype` es una URL válida de un vocabulario (tal como [schema.org](https://schema.org/)) que describe el elemento y las propiedades de su contexto.
- **`[itemtype](/es/docs/Web/HTML/Global_attributes/itemtype)`**
  - : Especifica la URL del vocabulario que se utilizará para definir `itemprop`s (propiedades del elemento) en la estructura de datos. [`itemscope`](/es/docs/Web/HTML/Global_attributes#itemscope) se utiliza para establecer el alcance de la estructura de datos en la que estará activo el vocabulario establecido por `itemtype`.
- **`[lang](/es/docs/Web/HTML/Global_attributes/lang)`**
  - : Ayuda a definir el idioma de un elemento: el idioma en el que se encuentran los elementos no editables o el idioma en el que el usuario debe escribir los elementos editables. El atributo contiene una "etiqueta de idioma" (compuesta de "subetiquetas de idioma" separadas por guiones) en el formato definido en [_Etiquetas para identificar idiomas (BCP47)_](https://www.ietf.org/rfc/bcp/bcp47.txt). [xml:lang](#attr-xml:lang) tiene prioridad sobre él.
- **`[part](/es/docs/Web/HTML/Global_attributes/part)`**
  - : Una lista separada por espacios de los nombres de las partes del elemento. Los nombres de las partes permiten que CSS seleccione y aplique estilo a elementos específicos en la sombra de un árbol mediante el pseudoelemento {{CSSxRef("::part")}}.
- **`[slot](/es/docs/Web/HTML/Global_attributes/slot)`**
  - : Asigna un espacio en la sombra de un árbol [DOM de sombra](/es/docs/Web/Web_Components/Shadow_DOM) a un elemento: Un elemento con un atributo `slot` es asignado al espacio creado por el elemento {{HTMLElement("slot")}} cuyo valor del atributo [`name`](/es/docs/Web/HTML/Element/slot#name) coincide con el valor del atributo `slot`.
- **`[spellcheck](/es/docs/Web/HTML/Global_attributes/spellcheck)`**
  - : Un atributo enumerado define si se puede verificar el elemento para detectar errores ortográficos. Puede tener los siguientes valores:
    - `true`, el cual indica que, si es posible, el elemento se debe revisar para detectar errores ortográficos;
    - `false`, indica que el elemento **no** se debe revisar para detectar errores ortográficos.
- **`[style](/es/docs/Web/HTML/Global_attributes/style)`**
  - : Contiene declaraciones de estilo [CSS](/es/docs/Web/CSS) que se aplicarán al elemento. Ten en cuenta que se recomienda que los estilos se definan en un archivo o archivos separados. Este atributo y el elemento {{HTMLElement("style")}} principalmente tienen el propósito de permitir un estilo rápido, por ejemplo, con fines de prueba.
- **`[tabindex](/es/docs/Web/HTML/Global_attributes/tabindex)`**
  - : Un atributo entero que indica si el elemento puede tomar el foco de entrada (es _enfocable_), si debe participar en la navegación secuencial del teclado y, de ser así, en qué posición. Puede tomar varios valores:
    - un _valor negativo_ significa que el elemento se debe poder enfocar, pero no debe ser accesible mediante la navegación secuencial del teclado;
    - `0` significa que el elemento se debe poder enfocar y ser accesible a través de la navegación secuencial del teclado, pero su orden relativo está definido por la convención de la plataforma;
    - un _valor positivo_ significa que el elemento se debe poder enfocar y ser accesible mediante la navegación secuencial del teclado; el orden en el que se enfocan los elementos es el valor creciente del [tabindex](#attr-tabindex). Si varios elementos comparten el mismo `tabindex`, su orden relativo sigue sus posiciones relativas en el documento.
- **`[title](/es/docs/Web/HTML/Global_attributes/title)`**
  - : Contiene un texto que representa información de advertencia relacionada con el elemento al que pertenece. Normalmente, pero no necesariamente, dicha información se puede presentar al usuario como información sobre herramientas.
- **`[translate](/es/docs/Web/HTML/Global_attributes/translate)`** {{Experimental_Inline}}
  - : Un atributo enumerado que se utiliza para especificar si los valores de atributo de un elemento y los valores de sus hijos de nodo {{DOMxRef("Text")}} se deben traducir cuando la página está localizada, o si se deben dejar sin cambios. Puede tener los siguientes valores:
    - la cadena vacía y `yes`, indican que el elemento se traducirá.
    - `no`, lo cual indica que el elemento **no** se traducirá.

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ve también

- Las interfaces {{DOMxRef("Element")}} y {{DOMxRef("GlobalEventHandlers")}} que permiten consultar la mayoría de los atributos globales.
