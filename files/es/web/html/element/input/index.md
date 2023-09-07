---
title: input
slug: Web/HTML/Element/input
---

## Resumen

El elemento HTML `<input>` se usa para crear controles interactivos para formularios basados en la web con el fin de recibir datos del usuario.Hay disponible una amplia variedad de tipos de datos de entrada y widgets de control, que dependen del dispositivo y el agente de usuario ([user agent](/es/docs/Glossary/user_agent)).El elemento `<input>` es uno de los más potentes y complejos en todo HTML debido a la gran cantidad de combinaciones de tipos y atributos de entrada.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/es/docs/Web/Guide/HTML/categorias_de_contenido"
          >Categorías de contenido</a
        >
      </th>
      <td>
        <a
          href="/es/docs/Web/Guide/HTML/categorias_de_contenido#Contenido_dinámico"
          >Contenido dinámico</a
        >, enlistado, presentable, reajustable, elemento asociado a formulario,
        <a
          href="/es/docs/Web/Guide/HTML/categorias_de_contenido#Contenido_textual_o_estático"
          >contenido textual</a
        >. Si su atributo <a href="/es/docs/Web/HTML/Element/input#type"><code>type</code></a> no es
        <code>hidden</code>, entonces contenido etiquetable, contenido palpable.
      </td>
    </tr>
    <tr>
      <th scope="row">Contenido permitido</th>
      <td>
        Ninguno, pues es un
        {{Glossary("empty element", "elemento vacío")}}.
      </td>
    </tr>
    <tr>
      <th scope="row">Omisión de etiqueta</th>
      <td>
        Debe tener una etiqueta de apertura y no debe tener etiqueta de cierre.
      </td>
    </tr>
    <tr>
      <th scope="row">Elementos padre permitidos</th>
      <td>
        Cualquier elemento que acepte
        <a
          href="/es/docs/Web/Guide/HTML/categorias_de_contenido#Contenido_textual_o_estático"
          >contenido textual</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Interfaz DOM</th>
      <td>{{domxref("HTMLInputElement")}}</td>
    </tr>
  </tbody>
</table>

## Atributos

Este elemento incluye los [atributos globales](/es/docs/Web/HTML/Atributos_Globales), y los indicados a continuación.

- `type`

  - : El tipo de control a mostrar. Su valor predeterminado es `text`, si no se especifica este atributo. Los posibles valores son:

    - `button`: Botón sin un comportamiento específico.
    - `checkbox`: Casilla de selección. Se debe usar el atributo **value** para definir el valor que se enviará por este elemento. Se usa el atributo **checked** para indicar si el elemento está seleccionado. También se puede usar el atributo **indeterminate** (el cual solo se puede establecer programaticamente) para indicar que la casilla está en un estado indeterminado (en la mayoría de las plataformas, se dibuja una línea horizontal a través de la casilla).
    - `color`: Control para espicificar un color. Una interfaz de selección de color no requiere más funcionalidad que la de aceptar colores simples como texto ([más información](<http://www.w3.org/TR/html5/forms.html#color-state-(type=color)>)).
    - `date`: Control para introducir una fecha (año, mes y día, sin tiempo).
    - `datetime`: {{deprecated_inline}} Control para introducir una fecha y hora (horas, minutos, segundos y fracción de segundo), basado en la zona horaria UTC. **Esta característica ha sido [removida de WHATWG HTML.](https://github.com/whatwg/html/issues/336)**
    - `datetime-local`: Control para introducir fecha y hora, sin zona horaria específica.
    - `email`: Campo para introducir una dirección de correo electrónico. El valor introducido se valida para que contenga una cadena vacía o una dirección de correo válida antes de enviarse. Las pseudo-clases {{cssxref(":valid")}} y {{cssxref(":invalid")}} son aplicadas segun corresponda.
    - `file`: Control que permite al usuario seleccionar un archivo. Se puede usar el atributo **accept** para definir los tipos de archivo que el control podrá seleccionar.
    - `hidden`: Control que no es mostrado en pantalla, pero cuyo valor es enviado al servidor.
    - `image`: Botón de envío de formulario con gráfico. Se debe usar el atributo **src** para definir el origen de la imagen y el atributo **alt** para definir un texto alternativo. Se puede usar los atributos **height** y **width** para definir el tamaño de la imagen en píxeles.
    - `month`: Control para introducir un mes y año, sin zona horaria específica.
    - `number`: Control para introducir un número de punto flotante.
    - `password`: Control de línea simple cuyo valor permanece oculto. Se puede usar el atributo **maxlength** para especificar la longitud máxima del valor que se puede introducir.
    - `radio`: Botón radio. Se debe usar el atributo **value** para definir el valor que se enviará por este elemento. Se usa el atributo **checked** para indicar si el elemento está seleccionado de forma predeterminada. Los botones radio que tengan el mismo valor para su atributo **name** están dentro del mismo "grupo de botones radio". Solo un botón radio dentro de un grupo puede ser seleccionado a la vez.
    - `range`: Control para introducir un número cuyo valor exacto no es importante. Este control usa los siguientes valores predeterminados si no se especifica cada atributo:

      - `min`: 0
      - `max`: 100
      - `value`: `min` + (`max -` `min`) / 2, o `min` si `max` es menor que `min`
      - `step`: 1

    - `reset`: Botón que restaura los contenidos de un formulario a sus valores predeterminados.
    - `search`: Cuadro de texto de línea simple para introducir textos de búsqueda. Los saltos de línea son eliminados automáticamente del valor introducido.
    - `submit`: Botón que envía el formulario.
    - `tel`: Control para introducir un número telefónico. Los saltos de línea son eliminados automáticamente del valor introducido, pero no hay otra sintaxis forzada. Se pueden usar atributos como **pattern** y **maxlength** para restringir los valores introducidos en este control. Las pseudo-clases CSS {{cssxref(":valid")}} y {{cssxref(":invalid")}} son aplicadas segun corresponda.
    - `text`: Campo de texto de línea simple. Los saltos de línea son eliminados automáticamente del valor introducido.
    - `time`: Control para introducir un valor de tiempo sin zona horaria específica.
    - `url`: Campo para editar una URL. El valor introducido se valida para que contenga una cadena vacía o una ruta URL absoluta antes de enviarse. Los saltos de línea y espacios en blanco al principio o al final del valor son eliminados automáticamente. Se pueden usar atributos como **pattern** y **maxlength** para restringir los valores introducidos en el control. Las pseudo-clases {{cssxref(":valid")}} y {{cssxref(":invalid")}} son aplicadas segun corresponda.
    - `week`: Control para introducir una fecha que consiste en número de semana del año y número de semana sin zona horaria específica.

- `accept`

  - : Si el valor del atributo **type** es `file`, este atributo indica los tipos de archivo que el servidor acepta, de otra manera será ignorado. El valor debe ser una lista de tipos de contenido únicos, separados por coma:

    - Una extensión de archivo, comenzando por el caracter STOP (U+002E). (Ejemplos: ".jpg,.png,.doc")
    - Un tipo MIME válido sin extensiones
    - `audio/*`, que representa archivos de audio
    - `video/*`, que representa archivos de vídeo
    - `image/*`, que representa archivos de imagen

- `accesskey` sólo HTML4 {{deprecated_inline}}
  - : Un caracter que el usuario puede presionar para establecer el cursor en el control. Este atributo es global en HTML5.
- `mozactionhint` {{non-standard_inline}}
  - : Especifica una "pista de acción" usada para determinar cómo etiquetar la tecla "enter" en dispositivos móviles con teclados virtuales. Los valores soportados son `go`, `done`, `next`, `search`, y `send`. Esto queda automáticamente mapeado al texto apropiado y no son sensibles al uso de mayúsculas.
- `autocapitalize` {{non-standard_inline}}

  - : Atributo no estándar usado por [Chrome](https://developers.google.com/web/updates/2015/04/autocapitalize) e iOS Safari Mobile, el cual controla si se deben cambiar los textos a mayúsculas automáticamente mientras son introducidos/editados por el usuario, y la forma en que esto se hará. Los valores no obsoletos están disponibles en iOS5 y superior. Los valores posibles son:

    - `none`: Deshabilita completamente las mayúsculas automáticas.
    - `sentences`: Cambia automáticamente a mayúscula la primera letra de la sentencia.
    - `words`: Cambia automáticamente a mayúscula la primera letra de cada palabra.
    - `characters`: Cambia automáticamente a mayúscula todos los caracteres.
    - `on`: {{deprecated_inline}} Obsoleto desde iOS 5.
    - `off`: {{deprecated_inline}} Obsoleto desde iOS 5.

    [Documentation sobre `autocapitalize` en la Referencia HTML de Safari](https://developer.apple.com/library/safari/documentation/AppleApplications/Reference/SafariHTMLRef/Articles/Attributes.html#//apple_ref/doc/uid/TP40008058-autocapitalize)

- `autocomplete`

  - : Este atributo indica si el valor del control puede ser completado automáticamente por el navegador.
    Los valores posibles son:

    - `off`: El usuario debe explícitamente introducir un valor en este campo para cualquier uso, o el documento provee su propio método de auto-completado. El navegador no completa automáticamente lo introducido.
    - `on`: Se permite al navegador completar automáticamente el valor basado en los valores que se han introducido previamente. Sin embargo, `on` no provee mayor información sobre qué clase de datos podría esperar el usuario introducir.
    - `name`: Nombre completo.
    - `honorific-prefix`: Prefixo o título (Ejemplos: "Sr.", "Sra.", "Dr.", "Srita.").
    - `given-name`: Nombre de pila.
    - `additional-name`: Segundo nombre.
    - `family-name`: Apellido.
    - `honorific-suffix`: Sufijo (Ejemplos: "Hijo", "Señor", "II").
    - `nickname`: Apodo.
    - `email`: Correo electrónico.
    - `username`: Nombre de usuario.
    - `new-password`: Nueva contraseña (por ejemplo, al crear una cuenta o cambiar la contraseña).
    - `current-password`: Contraseña actual.
    - `organization-title`: Título de organización (Ejemplos: "Ingeniero de Software", "Vicepresidente", "Director General Adjunto").
    - `organization`: Organización.
    - `street-address`: Calle (en dirección).
    - `address-line1`, `address-line2`, `address-line3`, `address-level4`, `address-level3`, `address-level2`, `address-level1`: Valores para dirección.
    - `country`: País.
    - `country-name`: Nombre del país.
    - `postal-code`: Código postal.
    - `cc-name`: Nombre completo en un instrumento de pago.
    - `cc-given-name`: Nombre de pila en un instrumento de pago.
    - `cc-additional-name`: Segundo nombre en un instrumento de pago.
    - `cc-family-name`: Apellido en un instrumento de pago.
    - `cc-number`: Código de identificación de un instrumento de pago(por ejemplo, el número de tarjeta de crédito).
    - `cc-exp:` Fecha de expiración de un instrumento de pago.
    - `cc-exp-month`: Mes de expiración en un instrumento de pago.
    - `cc-exp-year`: Año de expiración en un instrumento de pago.
    - `cc-csc`: Código de seguridad en un instrumento de pago.
    - `cc-type`: Tipo de instrumento de pago (por ejemplo, Visa).
    - `transaction-currency`: Tipo de moneda de la transacción.
    - `transaction-amount`: Monto de la transacción.
    - `language`: Idioma preferido, etiqueta BCP 47 válida.
    - `bday`: Fecha de cumpleaños.
    - `bday-day`: Día de cumpleaños.
    - `bday-month`: Mes de cumpleaños.
    - `bday-year`: Año de cumpleaños.
    - `sex`: Sexo (ejemplos, Femenino, Female, Fa'afafine), texto libre, sin líneas nuevas.
    - `tel`: Teléfono.
    - `url`: Dirección web correspondiente a la compañía, persona, dirección o información de contacto en los demás campos asociados a éste.
    - `photo`: Fotografía, ícono u otra imagen correspondiente a la compañía, persona, dirección o información de contacto en los otros campos asociados a éste.

    Véase el [Estándar WHATWG](https://html.spec.whatwg.org/multipage/forms.html#autofill) para információn más detallada.

    Si el atributo **autocomplete** no está especificado en un elemento input, el navegador usa el atributo **autocomplete** del formulario al que pertenece el elemento `<input>`, es decir, el elemento `form` del cual es descendiente el elemento `<input>`, o aquél cuyo **id** está especificado en el atributo **form** del elemento input. Para mayor información, véase el atributo [`autocomplete`](/es/docs/Web/HTML/Element/form#autocomplete) en {{HTMLElement("form")}}.

    El atributo **autocomplete** también controla si Firefox, a diferencia de otros navegadores, [persistirá el estado deshabilitado dinámico, y (si aplica) la selección dinámica](http://stackoverflow.com/questions/5985839/bug-with-firefox-disabled-attribute-of-input-not-resetting-when-refreshing) de un `<input>` a través de las cargas de la página. La característica de persistencia está habilitada de forma predeterminada. Estableciendo el valor de **autocomplete** como `off` se deshabilita esta característica. Esto funciona aún cuando el atributo **autocomplete** no se aplicaría normalmente al `<input>` en virtud de su atributo **type**. Véase [Error 654072 en Firefox](https://bugzil.la/654072).

    Para navegadores más modernos (incluyendo Firefox 38+, Google Chrome 34+, IE 11+), establecer el atributo **autocomplete** _no_ previene que el administrador de contraseñas del navegador le pregunte al usuario si desea guardar la información de inicio de sesión (usuario y contraseña), ni tampoco, de permitirlo el usuario, que se autocompleten estos campos la próxima vez que el usuario visite la página. Véase [El atributo autocomplete y campos de inicio de sesión](/es/docs/Web/Security/Securing_your_site/Turning_off_form_autocompletion#The_autocomplete_attribute_and_login_fields).

- `autocorrect` {{non-standard_inline}}

  - : Es un atributo no estándar, soportado por Safari, que es usado para controlar si la autocorrección debe estar habilitada cuando el usuario está introduciendo/editando el texto de un `<input>`. Los valores posibles de este atributo son:

    - `on`: Habilita la autocorrección
    - `off`: Deshabilita la autocorrección

    [Documentación de `autocorrect` en la Referencia HTML de Safari](https://developer.apple.com/library/safari/documentation/AppleApplications/Reference/SafariHTMLRef/Articles/Attributes.html#//apple_ref/doc/uid/TP40008058-autocorrect)

- `autofocus`
  - : Este atributo Booleano permite especificar que un control de formulario tenga el cursor cuando la página se carga, a menos que el usuario lo reemplace, por ejemplo, escribiendo en un control diferente. Solo un elemento de formulario en un mismo documento puede tener el atributo **autofocus**, el cual es Booleano. No puede ser aplicado si el atributo **type** tiene valor `hidden` (es decir, no se puede establecer automáticamente el cursor en un control oculto). Nótese que el cursor se podría establecer en el control antes de disparar el evento [`DOMContentLoaded`.](/es/docs/Web/Events/DOMContentLoaded)
- `capture`
  - : Cuando el valor del atributo **type** es `file`, la presencia de este atributo Booleano indica que se le dará preferencia a la captura del medio directamente del ambiente del dispositivo, usando algún [mecanismo de captura de medios](https://www.w3.org/TR/html-media-capture/#dfn-media-capture-mechanism).
- `checked`

  - : Cuando el valor del atributo **type** es `radio` o `checkbox`, la presencia de este atributo Booleano indica que el control está seleccionado de forma predeterminada. De lo contrario, será ignorado.

    En Firefox, a diferencia de otros navegadores, de forma predeterminada, [se persiste el estado de selección dinámico](http://stackoverflow.com/questions/5985839/bug-with-firefox-disabled-attribute-of-input-not-resetting-when-refreshing) en un `<input>` a través de las cargas de la página. Para controlar esta característica se usa el atributo [`autocomplete`](/es/docs/Web/HTML/Element/input#autocomplete).

- `disabled`

  - : Este atributo Booleano indica que el control no está disponible para interacción. En particular, el evento `click` [no será invocado](https://html.spec.whatwg.org/multipage/forms.html#enabling-and-disabling-form-controls:-the-disabled-attribute) en controles deshabilitados. De igual forma, el valor de un control deshabilitado no es enviado con el formulario.

    En Firefox, a diferencia de otros navegadores, de forma predeterminada, [se persiste el estado de selección dinámico](http://stackoverflow.com/questions/5985839/bug-with-firefox-disabled-attribute-of-input-not-resetting-when-refreshing) en un `<input>` a través de las cargas de la página. Para controlar esta característica se usa el atributo [`autocomplete`](/es/docs/Web/HTML/Element/input#autocomplete).

- `form`
  - : El elemento form al que está asociado el elemento (su _formulario propietario_). El valor del atributo debe ser el **id** de un elemento {{HTMLElement("form")}} en el mismo documento. Si el atributo no es especificado, este elemento `<input>` deberá ser descendiente de un elemento {{HTMLElement("form")}}. Este atributo permite poner elementos `<input>` en cualquier parte dentro de un documento, no solamente como descendientes de su formulario. Un input puede ser asociado sólo con un formulario.
- `formaction`
  - : El URI de un programa que procesa la información enviada por el elemento input, cuando es un botón de tipo `submit` o `image`. Si se especifica, reemplaza al atributo [`action`](/es/docs/Web/HTML/Element/form#action) del formulario al que pertenece el elemento.
- `formenctype`

  - : Si el elemento es de tipo `submit` o `image`, este atributo especifica el tipo de contenido que es usado para enviar el formulario al servidor. Los valores posibles son:

    - `application/x-www-form-urlencoded`: El valor predeterminado si el atributo no es especificado.
    - `multipart/form-data`: Se usa este valor cuando se tiene un elemento `<input>` con atributo [`type`](/es/docs/Web/HTML/Element/input#type) de valor `file`.
    - `text/plain`

    Si este atributo está especificado, reemplaza al atributo [`enctype`](/es/docs/Web/HTML/Element/form#enctype) del formulario al que pertenece el elemento.

- `formmethod`

  - : Si el elemento input es un botón de tipo `submit` o `image`, este atributo especifica el método HTTP que el navegador usará para enviar el formulario. Los valores posibles son:

    - `post`: Los datos del formulario son incluidos en el cuerpo del formulario, y enviados al servidor.
    - `get`: Los datos del formulario son añadidos al URI del **form** con un símbolo '?' como separador, y el URI resultante es enviado al servidor. Se usa este método cuando el formulario no tiene efectos secundarios y contiene solamente caracteres ASCII.

    Si este atributo está especificado, reemplaza al atributo [`method`](/es/docs/Web/HTML/Element/form#method) del formulario al que pertenece el elemento.

- `formnovalidate`
  - : Si el elemento input es de tipo `submit` o `image`, este atributo Booleano especifica que el formulario no será validado cuando se envíe. Si este atributo está especificado, reemplaza al atributo [`novalidate`](/es/docs/Web/HTML/Element/form#novalidate) del formulario al que pertenece el elemento.
- `formtarget`

  - : Si el elemento input es de tipo `submit` o `image`, este atributo es el nombre o palabra clave que indica dónde mostrar la respuesta que se recibe después de enviar el formulario. Este es el nombre, o palabra clave, de un _contexto de navegación_ (por ejemplo, pestaña, ventana o frame incrustado). Si este atributo está especificado, reemplaza al atributo [`target`](/es/docs/Web/HTML/Element/form#target) del formulario al que pertenece el elemento. Las siguientes palabras clave tienen significado especial:

    - `_self`: Carga la respuesta en el mismo contexto de navegación actual. Este valor es el predeterminado cuando no se especifica el atributo.
    - `_blank`: Carga la respuesta en un contexto de navegación nuevo.
    - `_parent`: Carga la respuesta en el contexto de navegación padre del actual. Si no hay contexto padre, se comporta de la misma forma que `_self`.
    - `_top`: Carga la respuesta en el contexto de navegación principal (es decir, el contexto que es ancestro del actual y que no tenga padre). Si no hay contexto padre, se comporta de la misma forma que `_self`.

- `height`
  - : Si el valor del atributo **type** es `image`, este atributo define la altura de la imagen mostrada para el botón.
- `incremental` {{non-standard_inline}}
  - : Es un atributo no estándar, soportado por WebKit (Safari) y Blink (Chrome), que solo aplica cuando el atributo **type** es `search`. Si el atributo está presente, sin importar su valor, el `<input>` dispara eventos [`search`](/es/docs/Web/Events/search) conforme el usuario edita el valor. El evento solo es disparado después de que un tiempo definido en implementación haya pasado desde la última vez que se presionó una tecla. Si el atributo está ausente, el evento [`search`](/es/docs/Web/Events/search) solo se disparará cuando el usuario explícitamente inicie una búsqueda (por ejemplo, presionando la tecla Enter dentro del control). [Documentación de `incremental en la Referencia HTML de Safari`](https://developer.apple.com/library/safari/documentation/AppleApplications/Reference/SafariHTMLRef/Articles/Attributes.html#//apple_ref/doc/uid/TP40008058-incremental)
- `inputmode`

  - : Una pista para el navegador sobre qué teclado mostrar. Este atributo aplica cuando el valor del atributo **type** es text, password, email, o url. Los valores posibles son:

    - `verbatim`: Alfanumérico, sin contenido con significado, como nombres de usuario o contraseñas.
    - `latin`: Escritura en caracteres de latín, en el lenguaje de elección del usuario, con ayuda de escritura, como predicción de texto. Para comunicación humano-computadora, como en cuadros de búsqueda.
    - `latin-name`: Como _latin_, pero con nombres de personas.
    - `latin-prose`: Como _latin_, pero con ayuda de escritura más agresiva. Para comunicación humano-humano, como mensajería instantánea o correo electrónico.
    - `full-width-latin`: Como _latin-prose_, pero para idiomas secundarios del usuario.
    - `kana`: Escritura en kana o romaji, típicamente escritura en hiragana, usando caracteres de anchura completa, con soporte para conversión a kanji. Usado para escritura en japonés.
    - `katakana`: Escritura en katakana, usando caracteres de anchura completa, con soporte para conversión a kanji. Usado para escritura en japonés.
    - `numeric`: Escritura en caracteres numéricos, incluyendo teclas para los dígitos de 0 a 9, el separador de miles segun las preferencias del usuario, y el caracter para indicar números negativos. Destinado a códigos numéricos, por ejemplo, números de tarjeta de crédito. Para valores numéricos reales, es preferible usar \<input type="number"> en lugar de este atributo.
    - `tel`: Escritura de teléfonos, incluído las teclas de asterisco y gato. Es preferible el uso de \<input type="tel"> en lugar de este atributo.
    - `email`: Escritura de correo electrónico. Es preferible el uso de \<input type="email"> en lugar de este atributo.
    - `url`: Escritura de URL. Es preferible el uso de \<input type="url"> en lugar de este atributo.

- `list`
  - : Identifica una lista de opciones predefinidas como sugerencias al usuario. El valor debe ser el **id** de un elemento {{HTMLElement("datalist")}} en el mismo documento. El navegador muestra solamente las opciones que son válidas para el elemento. Este atributo es ignorado cuando el atributo **type** tiene valor `hidden`, `checkbox`, `radio`, `file`, o algun tipo de botón.
- `max`
  - : El valor máximo (numérico o fecha-hora) para este elemento, el cual no debe ser menor que su valor mínimo (atributo **min**).
- `maxlength`
  - : Si el valor del atributo **type** es `text`, `email`, `search`, `password`, `tel`, o `url`, este atributo especifica el número máximo de caracteres (en puntos de código Unicode) que el usuario puede introducir. Para los otros tipos de control, es ignorado. Puede exceder el valor del atributo **size**. Si no se especifica, el usuario puede introducir una cantidad ilimitada de caracteres. Especificar un número negativo resulta en el comportamiento predeterminado (es decir, el usuario puede introducir una cantidad ilimitada de caracteres). La restricción es evaluada sólo cuando el valor del atributo ha sido modificado.
- `min`
  - : El valor mínimo (numérico o fecha-hora) para este elemento, el cual no debe ser mayor a su valor máximo (atributo **max**).
- `minlength`
  - : Si el valor del atributo **type** es `text`, `email`, `search`, `password`, `tel`, o `url`, este atributo especifica la longitud mínima de caracteres (en puntos de código Unicode) que el usuario puede introducir. Para los otros tipos de control, es ignorado.
- `multiple`
  - : Este atributo Booleano indica si el usuario puede introducir más de un valor. Este atributo aplica cuando el atributo **type** es `email` o `file`, y en caso contrario es ignorado.
- `name`
  - : El nombre del control, el cual es enviado con los datos del formulario.
- `pattern`
  - : Una expresión regular contra la que el valor es evaluado. El patrón debe coincidir con el valor completo, no solo una parte. Se puede usar el atributo **title** para describir el patrón como ayuda al usuario. Este atributo aplica cuando el atributo **type** es `text`, `search`, `tel`, `url`, `email`, o `password`, y en caso contrario es ignorado. El lenguaje de expresión regular es el mismo que el algoritmo {{jsxref("RegExp")}} de JavaScript, con el parámetro `'u'` que permite tratar al patrón como una secuencia de código Unicode. El patrón no va rodeado por diagonales.
- `placeholder`

  - : Una pista para el usuario sobre lo que puede introducir en el control. El texto no debe contener saltos de línea.

    > **Nota:** No se debe usar el atributo `placeholder` en lugar de un elemento {{HTMLElement("label")}}, pues sus propósitos son diferentes. El elemento {{HTMLElement("label")}} describe el rol del elemento en el formulario (es decir, indica qué tipo de información se espera), y el atributo `placeholder` es una pista sobre el formato que debe tener el contenido. Hay casos en los que el atributo `placeholder` no es visible para el usuario, por lo que el formulario debe ser comprensible para el usuario aunque este atributo no esté presente.

- `readonly`
  - : Este atributo indica que el usuario no puede modificar el valor del control. El valor del atributo es irrelevante. De ser necesario el acceso lectura-escritura al valor, _no_ se debe agregar el atributo "**readonly**". Es ignorado si el atributo **type** es `hidden`, `range`, `color`, `checkbox`, `radio`, `file`, o de tipo botón (como `button` o `submit`).
- `required`
  - : Este atributo especifica que el usuario debe llenar el control antes de enviarlo al formulario. No puede ser usado cuando el atributo **type** es `hidden`, `image`, o de tipo botón (`submit`, `reset`, o `button`). Las pseudo-clases {{cssxref(":optional")}} y {{cssxref(":required")}} se aplicarán al campo según sea apropiado.
- `results` {{non-standard_inline}}
  - : Este es un atributo no estándar, soportado por Safari, que sólo aplica cuando el atributo **type** es `search`. Es usado para controlar el máximo número de entradas que se deben mostrar en el listado nativo del `<input>` de búsquedas pasadas. Este valor debe ser un número entero no negativo.
- `selectionDirection`
  - : La dirección en la que ocurre la selección. Esto es "forward" (hacia adelante) si la selección fue hecha de izquierda a derecha en una escritura LTR o izquierda a derecha en una escritura RTL, o "backward" (hacia atrás) si la selección fue hecha de forma opuesta. Puede ser "none" si la dirección de selección es desconocida.
- `selectionEnd`
  - : La separación dentro del contenido de texto del último caracter seleccionado. Si no hay selección, este valor indica la separación para el caracter que sigue a la posición actual del cursor (es decir, la posición que el siguiente caracter que se escriba ocupará).
- `selectionStart`
  - : La separación dentro del contenido del primer caracter seleccionado. Si no hay selección, este valor indica la separación para el caracter que sigue a la posición actual del cursor (es decir, la posición que el siguiente caracter que se escriba ocupará).
- `size`
  - : El tamaño inicial del control. Este valor es en píxeles, a menos que el atributo **type** sea `text` o `password`, en cuyo caso será el número entero de caracteres. A partir de HTML5, este atributo aplica sólo cuando el atributo **type** es `text`, `search`, `tel`, `url`, `email`, o `password`, de otro modo es ignorado. Además, el tamaño debe ser mayor a cero. Si no se especifica un tamaño, se usa un valor predeterminado de 20. HTML5 simplemente establece que "el agente usuario debe asegurarse que al menos esa cantidad de caracteres sea visible", pero los caracteres pueden tener anchuras diferentes en ciertas fuentes. En algunos navegadores, una cadena con _x_ caracteres no será completamente visible aunque su tamaño esté definido con un mínimo de _x_.
- `spellcheck`
  - : Si se establece este atributo con valor `true`, se está indicando que se debe revisar la ortografía y gramática del elemento. El valor `default` indica que el elemento va a actuar acorde al comportamiento predeterminado del navegador, posiblemente basado en el valor del atributo `spellcheck` de su elemento padre. El valor `false` indica que el elemento no debe ser revisado.
- `src`
  - : Si el atributo **type** es `image`, este atributo especifica el URI para la ubicación de la imagen a mostrar en el botón de envío gráfico. En caso contrario, es ignorado.
- `step`
  - : Trabaja con los atributos **min** y **max**, para limitar el incremento de valores numéricos o de fecha-hora. Puede ser el valor `any` o un número positivo de punto flotante. Si no se establece este atributo como `any`, el control acepta solamente valores múltiplos del valor del atributo, mayores al mínimo.
- `tabindex` específico para el elemento en HTML$, global en HTML5
  - : La posición del elemento en el orden de navegación por la tecla Tab dentro del documento.
- `usemap` solo para HTML4
  - : El nombre de un elemento {{HTMLElement("map")}} usado como mapa de imagen.
- `value`
  - : El valor inicial del control. Este atributo es opcional, excepto cuando el atributo **type** es `radio` o `checkbox`.
    Nótese que cuando se recarga la página, Gecko e IE [ignorarán el valor especificado en el código fuente HTML](https://bugzilla.mozilla.org/show_bug.cgi?id=46845#c186), si el valor fue modificado antes de recargar.
- `webkitdirectory` {{non-standard_inline}}
  - : Este atributo Booleano indica si el selector usado cuando el atributo **type** es `file` debe permitir la selección de directorios solamente.
- `width`
  - : Si el valor del atributo **type** es `image`, este atributo define la anchura de la imagen mostrada en el botón.
- `x-moz-errormessage` {{non-standard_inline}}
  - : Esta extensión de Mozilla permite especificar el mensaje de error cuando un campo no es validado exitosamente.

## Notas

### Introducción de archivos

> **Nota:** A partir de Gecko 2.0, llamar al método `click()` en un elemento `<input>` de tipo "file" abre el selector de archivos y permite al usuario seleccionar archivos. Véase [Utilizar ficheros desde aplicaciones web](/es/docs/Using_files_from_web_applications) para ejemplos y más detalles.

No se puede establecer el valor de un selector de archivos desde un script. Hacer algo como lo siguiente no tiene efecto alguno:

```js
var e = getElementById("someFileInputElement");
e.value = "foo";
```

### Mensajes de error

Para que Firefox presente un mensaje de error personalizado cuando la validación de un campo falla, se puede usar el atributo `x-moz-errormessage`:

```html
<input
  type="email"
  x-moz-errormessage="Por favor, especifique una dirección de correo válida." />
```

Nótese, sin embargo, que esto no es estándar, y no tendrá efecto en otros navegadores.

## Ejemplos

## Ejemplo 1: Cuadro de texto simple

### HTML

```html
<p>Simple input box</p>
<input type="text" value="Type here" />
```

### Resultado

{{EmbedLiveSample('', '', '100')}}

## Ejemplo 2: Escenario de uso común

### HTML

```html
<p>A common form that includes input tags</p>
<form action="getform.php" method="get">
  <label>First name: <input type="text" /></label><br />
  <label>Last name: <input type="text" /></label><br />
  <label>E-mail: <input type="email" /></label><br />
  <input type="submit" value="Submit" />
</form>
```

### Resultado

{{EmbedLiveSample('', '', '200')}}

### Usando mozactionhint en Firefox mobile

Se puede usar el atributo [`mozactionhint`](/es/docs/Web/HTML/Element/input#mozactionhint) para especificar el texto para la etiqueta de la tecla Enter en el teclado virtual cuando el formulario es mostrado en Firefox mobile. Por ejemplo, para mostrar una etiqueta "Next", se puede hacer esto:

```html
<input type="text" mozactionhint="next" />
```

El resultado es:

[![mozactionhint.png](mozactionhint.png?size=webview)](mozactionhint.png)

## Regionalización

Los valores permitidos para ciertos tipos de \<input> dependen de la región. En algunos casos, 1,000.00 is a valid number, mientras en otros la manera válida de escribir un número es 1.000,00.

Firefox usa la siguiente heurística para determinar la región con la cual validar los datos introducidos por el usuario (por lo menos para `type="number"`):

- Intenta con el lenguaje especificado por el atributo `lang`/`xml:lang` del elemento o de sus elementos ascendentes.
- Intenta con el lenguaje especificado en algun encabezado HTTP Content-Language o
- Si ninguno está especificado, usa la región definida en el navegador.

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- Otros elementos relacionados con formularios: {{HTMLElement("form")}}, {{HTMLElement("button")}}, {{HTMLElement("datalist")}}, {{HTMLElement("legend")}}, {{HTMLElement("label")}}, {{HTMLElement("select")}}, {{HTMLElement("optgroup")}}, {{HTMLElement("option")}}, {{HTMLElement("textarea")}}, {{HTMLElement("keygen")}}, {{HTMLElement("fieldset")}}, {{HTMLElement("output")}}, {{HTMLElement("progress")}} and {{HTMLElement("meter")}}.
- [Cross-browser HTML5 placeholder text](http://webdesignerwall.com/tutorials/cross-browser-html5-placeholder-text)
