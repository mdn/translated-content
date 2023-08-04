---
title: <textarea>
slug: Web/HTML/Element/textarea
---

## Resumen

El **elemento** **HTML `<textarea>`** representa un control para la edición mutilínea de texto sin formato.

## Contenido de Uso

| [Content categories](/es/docs/HTML/Content_categories) | [Flow content](/es/docs/HTML/Content_categories#Flow_content), [phrasing content](/es/docs/HTML/Content_categories#Phrasing_content), [Interactive content](/es/docs/HTML/Content_categories#Interactive_content), [listed](/es/docs/HTML/Content_categories#Form_listed), [labelable](/es/docs/HTML/Content_categories#Form_labelable), [resettable](/en/HTML/Content_categories#form_resettable), y [submittable](/es/docs/HTML/Content_categories#Form_submittable) [form-associated](/es/docs/HTML/Content_categories#Form-associated_) elemento |
| ------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Contenido Permitido                                    | Datos carácter                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| Omisión de etiquetas                                   | {{no_tag_omission}}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| Elementos padre permitidos                             | Cualquier elemento que soporta [phrasing content](/es/docs/HTML/Content_categories#Phrasing_content).                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Interfaz Dom                                           | {{domxref("HTMLTextAreaElement")}}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |

## Atributos

Este elemento contiene [global attributes](/es/docs/HTML/Global_attributes).

- `autocapitalize` {{non-standard_inline}}
  - : Este es un atributo no estándar utilizado por iOS Safari Mobile (y, por lo tanto, también por casi todos los navegadores de iOS, incluyendo Safari, Firefox y Chrome). Controla cuándo y cómo el texto debe ponerse automáticamente en mayúsculas mientras es ingresado/editado por el usuario. Los valores no obsoletos están disponible en iOs 5 y en versiones posteriores. Sus valores posibles son:
    - `none`: Deshabilita la capitalización automática
    - `sentences`: Escribe automáticamente con mayúscula la primera letra de cada frase.
    - `words`: Automáticamente escribe con mayúsculas la primera letra de las palabras.
    - `characters`: Automáticamente escribe con mayúscula todos los caracteres.
    - `on`: {{deprecated_inline()}} En desuso desde la versión 5 de iOS.
    - `off`: {{deprecated_inline()}} En desuso desde la versión 5 de iOS.
- `autocomplete`

  - : Este atributo indica si el valor del control puede ser completado automáticamente por el navegador. Los posibles valores son:

    - `off`: El usuario debe explícitamente introducir el valor del campo para cada uso, o el documento proporciona su propio método de auto-completado; el navegador no completa automáticamente.
    - `on`: El navegador puede completar automáticamente el valor basándose en valores que el usuario haya insertado durante usos previos.

    Si el atributo **autocomplete** no está definidio en el elemento textarea, entonces el navegador usa el valor del atributo **autocomplete** del propietario del elemento `<textarea>` . El propietario del formulario es o bien el elemento form del cual el \<textarea> es descendiente o el elemento form cuyo id está especificado en el atributo form del elemento. Para más información, ver el atributo [`autocomplete`](/es/docs/Web/HTML/Element/form#autocomplete) en {{HTMLElement("form")}}.

- `autofocus`
  - : Este atributo booleano te permite especificar que un control de un formulario adquiera el foco cuando se carga la página, salvo que el usuario anule esto , por ejemplo tecleando en un control diferente. Sólo se puede especificar este atributo en los elementos asociados a formularios.
- `cols`
  - : La anchura visible del control de texto, en caracteres de anchura media. Si está definido debe ser positivo. Si no, por defecto, el valor es 20 (HTML 5).
- `disabled`
  - : Este atributo booleano indica que el usuario no puede interactuar con el control. Si el atributo no está definido se hereda su valor del elemento en el que está contenido, por ejemplo {{ HTMLElement("fieldset") }}; Si no está dentro de un elemento contenedor con el atributo disable establecido, entonces el control estará habilitado.
- `form`
  - : El formulario al cual el elemento textarea está asociado (el propietario del formulario). El valor del atributo debe ser un ID de un elemento formulario del mismo documento. Si no se especifica este atributo, el textarea debe ser un descendiente de un elemento formulario. Permite colocar elementos textarea en cualquier lugar dentro de un documento, no sólo como descendientes de formularios.
- `maxlength`
  - : Indica el número máximo de caracteres (Unicode code points) que el usuario puede insertar. Si no está especificado entonces el usuario puede insertar un número ilimitado de caracteres.
- `minlength`
  - : El mínimo número de caracteres (Unicode code points) que el usuaurio debe insertar.
- `name`
  - : El nombre del control
- `placeholder`
  - : Se puede añadir un indicación para el usuario que defina que se debe insertar en el control. Los retornos de carro y las nuevas líneas dentro lso marcadores de posición deben ser tratado como nuevas líneas al representar dicha indicación.
- `readonly`
  - : Este atributo booleano indica que el usuario no puede modificar el valor del control. Al contrario que el atributo `disable`, el atributo `readonly` no evita que el usuario haga click o seleccione el control. El valor del control read-only si que se envía con el formulario.
- `required`
  - : Este atributo indica que el usuario debe rellenar el contro con un valor antes de poder enviar el formulario.
- `rows`
  - : El número de líneas visibles en el control
- `selectionDirection`
  - : La dirección en la que la selección ocurre dentro del control. Es "forward" si la selección ocurre de izquierda a derecha en una localización LTR, o "backward" si la selección fue hecha en sentido contrario. Puede ser "none" si se desconoce la dirección.
- `selectionEnd`
  - : El índice del último caracter de la selección actual.
- `selectionStart`
  - : El índice del primer caracter de la selección actual.
- `spellcheck`
  - : Un valor `true` en este atributo indica que el elemento necesita tener `checked` el corrector ortográfico y gramatical. El caloor `default` indica que el elemento va a comportarse de acuerdo al comportamiento por defecto, basado en el `spellcheck` del padre. El valor `false` indica que no se deben hacer esas comprobaciones.
- `wrap`
  - : Indica como el control envuelve al texto. Los posibles valores son:
    - `hard`: El navegador insertar automáticamente caracteres de nueva línea (CR+LF) para que ninguna línea tenga más anchura que la del control; el atributo `cols` debe estar espeficicado.
    - `soft`: El navegador asegura que todas las nuevas líneas constan de la pareja de caracteres CR+LF , pero no insertar nuevas líneas adicionales.Soft es el valor por defecto si no se especifica nada.

## Interfaz DOM

Este elemento implementa el interfaz [`HTMLTextAreaElement`](/en/DOM/HTMLTextAreaElement) .

Gecko 2.0 introduce el soporte para textareas redimensionable. Esto se controla con la propiedad CSS {{ cssxref("resize") }} . Por defecto la posibilidad de redimiensionar el control está habilitada, pero puede ser explícitamente deshabilitada mediante el uso del siguiente CSS:

```css
textarea {
  resize: none;
}
```

## Interacción con CSS

En relación a CSS, un `<textarea>` es un [replaced element](/es/docs/CSS/Replaced_element). La especificación HTML no define dónde está el punto de referencia de un `<textarea>`. Así que los diferentes navegadores lo sitúan en diferentes posiciones. En los navegadores basados en Gecko, ese punto de referencia del `<textarea>` se sitúa en el punto de referencia de la primera línea del `<textarea>`, en otro navegadores puede estár situado al final de la caja del `<textarea>` . Se recomienda no usar {{cssxref("vertical-align")}}`: baseline` , ya que obtendríamos un comportamiento no impredecible.

Un _textarea_ tiene dimensiones intrínsecas, como una imagen agrandada.

## Ejemplo

### Contenido HTML

```html
<textarea name="textarea" rows="10" cols="50">Write something here</textarea>
```

{{ EmbedLiveSample('Example','600','200') }}

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver además

Otros elementos relacionados con formularios: {{ HTMLElement("form") }}, {{ HTMLElement("button") }}, {{ HTMLElement("datalist") }}, {{ HTMLElement("legend") }}, {{ HTMLElement("label") }}, {{ HTMLElement("select") }}, {{ HTMLElement("optgroup") }}, {{ HTMLElement("option") }}, {{ HTMLElement("input") }}, {{ HTMLElement("keygen") }}, {{ HTMLElement("fieldset") }}, {{ HTMLElement("output") }}, {{ HTMLElement("progress") }} and {{ HTMLElement("meter") }}.

{{HTMLSidebar}}
