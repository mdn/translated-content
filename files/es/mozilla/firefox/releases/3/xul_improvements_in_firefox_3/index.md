---
title: Mejoras XUL en Firefox 3
slug: Mozilla/Firefox/Releases/3/XUL_improvements_in_Firefox_3
---

{{FirefoxSidebar}}

Firefox 3 proporciona varios nuevos elementos [XUL](/es/XUL), además de mejoras en los elementos existentes. Aún que este material se documenta en detalle en otro lugar, este artículo ofrece una buena lista de estas mejoras así como enlaces a la documentación detallada.

### Los nuevos elementos

- [Los controles numéricos](/es/Tutorial_de_XUL/Controles_numéricos):

  - El elemento [`<scale>`](/es/XUL/scale) permite crear escalas deslizantes que dejan al usuario seleccionar cualquier valor dentro de un rango especificado. Este control podría utilizarse, por ejemplo, para crear un control de volumen.
  - El valor `number` para el atributo `type` de cajas de texto (`textbox`) crea una caja de texto donde sólo se pueden introducir números. Además, aparecen botones de flecha en un lateral que permiten incrementar o disminuir los valores. [Más información sobre cajas de texto numérico](https://wiki.mozilla.org/XUL:Specs:NumberBox). [Error 345510 en Firefox](https://bugzil.la/345510)
  - El elemento [`<spinbuttons>`](/es/XUL/spinbuttons), que puede usarse para crear controles con la ayuda de vínculos XBL. [Error 155053 en Firefox](https://bugzil.la/155053)
  - Los controles, [`<datepicker>`](/es/XUL/datepicker) y [`<timepicker>`](/es/XUL/timepicker) sirven para permitir entradas de fecha y hora. El seleccionador de fecha está disponible en varios estilos según el atributo `type` y permite entradas vía cajas de texto o de un calendario. [Más información sobre seleccionadores de fecha (en)](https://wiki.mozilla.org/XUL:Specs:DateTimePickers) [Referencia de seleccionadores de fecha](/es/XUL/datepicker) [Referencia de seleccionadores de hora](/es/XUL/timepicker)

- Hay una [guía](/es/XUL/Guía_de_popup) sobre menús y elementos emergentes que describe las nuevas funciones disponibles.

  - El elemento [`<dropmarker>`](/es/XUL/dropmarker) es útil para crear, con vínculos XBL, controles de estilo de menú. ([Error 348614 en Firefox](https://bugzil.la/348614))
  - El elemento [`<panel>`](/es/XUL/panel) está diseñado para elementos emergentes que no son menús. Pueden albergar cualquier tipo de contenido. Para menús se debería utilizar el elemento \<menupopup>. Los menús permiten la navegación mediante el teclado y apertura/cierre de sub-menús.

### Las mejoras

#### en los árboles

- Los árboles pueden desplazarse horizontalmente ahora. Si las columnas no caben dentro del ancho disponible, aparece una barra de desplazamiento horizontal. Esto ocurre si el ancho de las columnas especificado suma más que el espacio disponible. Ver [Error 212789 en Firefox](https://bugzil.la/212789) para más detalles.
- Un nuevo estilo de selección permite seleccionar celdas individualmente, en lugar de filas enteras. Para usar este estilo de selección, se fijará el atributo `seltype` de los árboles como `cell`. ([Error 296040 en Firefox](https://bugzil.la/296040))
- Los árboles admiten la edición de celdas individuales. Cuando el usuario hace doble clic en una celda, aparece un campo de texto donde puede editar los contenidos de la celda. Ver [estas notas](https://wiki.mozilla.org/XUL:Tree) para más detalles. ([Error 201499 en Firefox](https://bugzil.la/201499))
- Los elementos \<treecol> admiten ahora un atributo `overflow`, que puede definirse como verdadero para permitir que el texto de las celdas de esa columna se expanda a las celdas vecinas vacías, si el texto es demasiado largo para caber en esa única celda.

#### de los menús

- El atributo `image` se usa ahora consistentemente para definir imágenes.
- Las listas de menú lanzan el evento `select` cuando se selecciona un elemento.
- Las propiedades `inputField` y `editable` han sido añadidas a la lista de menú.
- El elemento \<menu> tiene métodos para añadir, insertar y eliminar elementos de menú. ([Error 372552 en Firefox](https://bugzil.la/372552))
- Los elementos `<menu>`, `<menuitem>` y `<menuseparator>`:

  - tienen la propiedad `selected`, de sólo lectura, que indica si el elemento está seleccionado en una \<menulist>.
  - tienen la propiedad `control`, de sólo lectura, que devuelve la \<menulist> rodeada.
  - admiten las propiedades `accessKey`, `disabled`, `crop`, `image` y `label` que definen el atributo correspondiente.

- La propiedad `editor` permite obtener la interfaz `nsIEditor` interna para el campo de texto de un elemento `menulist` modificable.
- Los menús pueden mostrarse transparentes en las plataformas que lo permiten. ([Error 70798 en Firefox](https://bugzil.la/70798))

#### en las cajas de texto

- Definir el atributo `spellcheck` de una [caja de texto](/es/XUL/textbox) a '`true`' activará la comprobación ortográfica integrada en esa caja de texto. ([Error 346787 en Firefox](https://bugzil.la/346787))
- La `<textbox>` tiene el método `reset()` para reiniciar el valor de una caja de texto a su valor predeterminado. La propiedad `defaultValue` se usará para obtener y modificar el valor por defecto de la caja de texto. ([Error 312867 en Firefox](https://bugzil.la/312867))
- Se ofrece la propiedad `editor` que permite obtener la interfaz `nsIEditor` interna del campo de texto.([Error 312867 en Firefox](https://bugzil.la/312867))
- La [`caja de texto`](/es/XUL/textbox) admite el atributo `newlines` que especifica cómo se tratarán los saltos de linea en el texto pegado. [Error 253481 en Firefox](https://bugzil.la/253481). Los posibles valores son:

  - `pasteintact` - pega todo tal cual está
  - `pastetofirst` - (valor por defecto) pega sólo hasta el primer salto de linea
  - `replacewithspaces` - reemplaza los saltos de linea por espacios
  - `replacewithcommas` - reemplaza los saltos de linea con comas
  - `strip` - elimina todos los saltos de linea
  - `stripsurroundingwhitespace` - elimina todos los saltos de linea y los espacios vacíos cercanos

### Otras mejoras

- El atributo `type` de un `<button>` se fijará a `repeat` para crear botones que ejecuten el evento asociado mientras se mantiene pulsado con el ratón.
- El atributo [`buttondisabledaccept`](/es/XUL/Atributos/buttondisabledaccept) puede usarse en el elemento `<dialog>` para tener el botón aceptar (OK) inicialmente desactivado.
- El elemento `<titlebar>` admite el atributo `allowevents` que permite pasar eventos a los hijos de la barra de título.
- El `<splitter>` admite el valor adicional `'both'` para el atributo `collapse`, que indica que el separador puede colapsar elementos en ambos lados cuando se arrastra. El atributo `substate` se fijará a antes o después cuando uno es colapsado. ([Error 337955 en Firefox](https://bugzil.la/337955))
- El elemento `<richlistbox>` permite selección múltiple. Se fijará el atributo `seltype` a `'multiple'` para activarlo.
- El elemento `<radio>` tiene un atributo `group` que puede definir la (id) identificación de un elemento `<radiogroup>` al cual pertenece el botón de selección. Esto permite organizar los botones de selección, de una manera que quizás no sea conveniente, al colocarlos dentro de un grupo de selección.
- Los métodos `openPopup()` y `openPopupAtScreen()` son admitidos por menús, paneles y títulos emergentes. Estos métodos deberían utilizarse en lugar de `showPopup()` que ha generado confusiones en su uso.
- Se ha mejorado la gestión del elemento \<key> (tecla) para los usuarios de teclados no latino. Ver el evento de tecla de Gecko.
- En Mac OS X, los atributos 'activetitlebarcolor' y 'inactivetitlebarcolor' de los elementos raiz (\<window>, \<dialog>, \<prefwindow> and \<wizard>) son accesibles para personalizar el color de la barra de títulos de la pantalla.

### Ver también

- [XUL](/es/XUL)
