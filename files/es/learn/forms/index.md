---
title: Formularios en HTML5
slug: Learn/Forms
---

Los elementos y atributos para formularios en HTML5 proveen un mayor grado de marcado semántico que en HTML4 y eliminan gran parte del tedioso trabajo de programar y diseñar que se necesitaba en HTML4. Las funcionalidades de los formularios en HTML5 brindan una experiencia mejor para los usuarios al permitir que los formularios tengan un comportamiento más consistente entre diferentes sitios web y al darle una devolución inmediata acerca de la información ingresada. También proveen esta experiencia a los usuarios que han deshabilitado javascript en sus navegadores.

Este documento describe los elementos nuevos o que han cambiado que están disponibles en Gecko/Firefox.

### El elemento `<input>`

El elemento `{{ HTMLElement("input") }}` tiene nuevos valores para el atributo [`type`](/es/docs/Web/HTML/Element/input#type).

- `search`: El elemento representa una caja de búsqueda. Los saltos de línea son quitados del valor ingresado pero no se modifica ninguna otra sintaxis.
- `tel`: El elemento representa un control para editar un número de teléfono, porque los números teléfonicos varían ampliamente en el mundo. Puedes usar atributos como [`pattern`](/es/docs/Web/HTML/Element/input#pattern) y [`maxlength`](/es/docs/Web/HTML/Element/input#maxlength) para restringir los valores ingresados en la caja.
- `url`: El elemento representa un control para editar una [URL](http://es.wikipedia.org/URL). Se quitan los saltos de línea y espacios en blanco antes y después del valor ingresados.
- `email`: El elemento representa una dirección de correo electrónico. Los saltos de línea se quitan automáticamente del valor ingresado. Puede ingresarse una direccón de correo no válida, pero el campo de ingreso sólo funcionará si la dirección ingresada satisface la producción ABNF `1*( atext / "." ) "@" ldh-str 1*( "." ldh-str )` donde `atext` está definida en RFC 5322, sección 3.2.3 y `ldh-str` está definida en RFC 1034, sección 3.5.

  > **Nota:** si el atributo [`multiple`](/es/docs/Web/HTML/Element/input#multiple) está agregado, pueden ingresarse muchas direcciones de correo electrónico en ese campo {{ HTMLElement("input") }}, como una lista separada por espacios, pero no está implementado actualmente en Firefox.

El elemento {{ HTMLElement("input") }} también tiene nuevos atributos:

- [`list`](/es/docs/Web/HTML/Element/input#list): El ID de un elemento {{ HTMLElement("datalist") }} cuyo contenido, los elementos {{ HTMLElement("option") }}, van a ser usados como ayudas y serán mostrados como propuestas en el área de sugerencias del campo input.
- [`pattern`](/es/docs/Web/HTML/Element/input#pattern): Una expresión regular contra la que es verificado el valor del control, que puede ser usada con valores de [`type`](/es/docs/Web/HTML/Element/input#type) de `text`, `tel`, `search`, `url` y `email`.
- [`formmethod`](/es/docs/Web/HTML/Element/input#formmethod): Una cadena que indica qué método HTTP (GET, POST, PUT o DELETE) debe ser usado cuando se envía; sobrescribe el [`method`](/es/docs/Web/HTML/Element/form#method) del elemento {{ HTMLElement("form") }}, si se define. El [`formmethod`](/es/docs/Web/HTML/Element/input#formmethod) sólo se aplica cuando el [`type`](/es/docs/Web/HTML/Element/input#type) es image o submit, y, para los métodos PUT y DELETE, sólo funcionará con un destino que esté en el mismo dominio (política del mismo origen).

### El elemento `<form>`

El elemento {{ HTMLElement("form") }} tiene un nuevo atributo:

- [`novalidate`](/es/docs/Web/HTML/Element/form#novalidate): Este atributo previene que el formulario sea validado antes del envío.

### El elemento `<datalist>`

El elemento {{ HTMLElement("datalist") }} representa la lista de elementos {{ HTMLElement("option") }} como sugerencias cuando se llena un campo {{ HTMLElement("input") }}.

Puedes usar el atributo [`list`](/es/docs/Web/HTML/Element/input#list) en un elemento {{ HTMLElement("input") }} para enlazar a un campo de ingreso específico con un elemento {{ HTMLElement("datalist") }} determinado.

```html
<label>Superhéroe favorito</label>
<input list="superheroes" name="list" />
<datalist id="superheroes">
  <option label="Iron Man" value="Iron Man"></option>
  <option label="The Hulk" value="The Hulk"></option>
</datalist>
```

### El elemento `<output>`

El elemento `{{ HTMLElement("output") }}` representa el resultado de un cálculo.

Puedes usar el atributo [`for`](/es/docs/Web/HTML/Element/output#for) para especificar una relación entre el elemento output y otros elementos en el documento que afectan el cálculo (por ejemplo, ingreso de datos o parámetros). El valor del atributo [`for`](/es/docs/Web/HTML/Element/output#for) es una lista separada por espacios de IDs de otros elementos.

### El atributo placeholder

El atributo [`placeholder`](/es/docs/Web/HTML/Element/input#placeholder) en elementos `{{ HTMLElement("input") }}` y `{{ HTMLElement("textarea") }}` provee una ayuda a los usuarios acerca de qué debe ser ingresado en el campo. El texto introducido en el placeholder no debe contener «enters» o saltos de línea.

```html
<input
  type="email"
  id="user-email"
  placeholder="e.g. john.doe@mozilla.com"
  required />
```

### El atributo autofocus

El atributo **autofocus** te permite especificar que una parte del formulario debe tener foco para ingresar información cuando se carga la página, a menos que el usuario lo cambie, por ejemplo al escribir en otro lugar. Sólo un elemento del formulario en un documento puede tener el atributo **autofocus**, que es de tipo boolean. Este atributo puede ser aplicado a los elementos `{{ HTMLElement("input") }}`, `{{ HTMLElement("button") }}`, `{{ HTMLElement("select") }}` y `{{ HTMLElement("textarea") }}`. La excepción es que **autofocus** no puede ser aplicado a un elemento `<input>` si el atributo [`type`](/es/docs/Web/HTML/Element/input#type) `hidden` está seleccionado (esto quiere decir, no se puede enfocar automáticamente un elemento escondido).

```html
<input type="text" id="user" autofocus />
```

### La propiedad label.control del DOM

La interface [HTMLLabelElement](/en/DOM/HTMLLabelElement) DOM brinda una propiedad extra, sumadas a las propiedades que corresponden a los atributos del elemento `{{ HTMLElement("label") }}` de HTML. La propiedad **control** devuelve el controlador etiquetado, es decir el controlador para quien está hecha la etiqueta, que está determinado por el atributo [`for`](/es/docs/Web/HTML/Element/label#for) (si está definido) o por el primer elemento controlador descendiente.

### Validación restringida

El HTML5 brinda sintaxis y elementos de API para posibilitar la validación de formularios del lado del cliente. Aunque esta funcionalidad no reemplaza la validación del lado del servidor, que todavía es necesaria por seguridad e integridad de la información, la validación del lado del cliente puede brindar una experiencia de usuario mejor al darle al usuario una respuesta inmediata acerca de la información ingresada.

#### Sintaxis de HTML para la validación restringida

Los siguientes elementos de sintaxis de HTML5 pueden ser usados para restringir datos en el formulario.

- El atributo [`required`](/es/docs/Web/HTML/Element/input#required) en los elementos {{ HTMLElement("input") }}, {{ HTMLElement("select") }} y {{ HTMLElement("textarea") }} indica que se debe ingresar algún dato. (En el elemento {{ HTMLElement("input") }}, [`required`](/es/docs/Web/HTML/Element/input#required) sólo se aplica con ciertos valores del atributo [`type`](/es/docs/Web/HTML/Element/input#type).)
- El atributo [`pattern`](/es/docs/Web/HTML/Element/input#pattern) en el elemento {{ HTMLElement("input") }} restringe el valor para que concuerde con una expresión regular específica.
- Los atributos [`min`](/es/docs/Web/HTML/Element/input#min) y [`max`](/es/docs/Web/HTML/Element/input#max) del elemento {{ HTMLElement("input") }} restringen los valores máximos y mínimos que pueden ser ingresados.
- El atributo [`step`](/es/docs/Web/HTML/Element/input#step) del elemento {{ HTMLElement("input") }} (cuando se usa en combinación con los atributos [`min`](/es/docs/Web/HTML/Element/input#min) y [`max`](/es/docs/Web/HTML/Element/input#max)) restringe la granularidad de los valores ingresados. Un valor que no se corresponda con un valor permitido no será validado.
- El atributo [`maxlength`](/es/docs/Web/HTML/Element/input#maxlength) de los elementos {{ HTMLElement("input") }} y {{ HTMLElement("textarea") }} restringe el máximo número de caracteres (en puntos de código unicode) que el usuario puede ingresar.
- Los valores `url` y `email` para [`type`](/es/docs/Web/HTML/Element/input#type) restringen el valor para una URL o dirección de correo válida respectivamente.

Además, puedes prevenir la validación restringida especificando el atributo [`novalidate`](/es/docs/Web/HTML/Element/form#novalidate) en el elemento {{ HTMLElement("form") }}, o el atributo [`formnovalidate`](/es/docs/Web/HTML/Element/button#formnovalidate) en el elemento {{ HTMLElement("button") }} y en el elemento {{ HTMLElement("input") }} (cuando [`type`](/es/docs/Web/HTML/Element/input#type) es `submit` o `image`). Estos atributos indican que el formulario no será validado cuando se envie.

#### API de validación restringida

Las siguientes propiedades y métodos del DOM relacionadas con la validación restringida están disponibles para scripts del lado del cliente:

- En objetos [HTMLFormElement](/en/DOM/HTMLFormElement), el método `checkValidity()`, que devuelve verdadero si todos los elementos asociados del formulario que necesitan validación satisfacen las restricciones y falso si no lo hacen.
- En [elementos asociados al formulario](/en/HTML/Content_categories#form-associated):

  - la propiedad `willValidate`, que es falso si el elemento no satisface las restricciones.
  - la propiedad `validity`, que es un objeto [ValidityState](/en/DOM/ValidityState_Interface) que representa los estados de validación en que está el elemento (p.e., condiciones de restricción que han fallado o exitosas).
  - la propiedad `validationMessage`, que es un mensaje que contiene todas las fallas en las restricciones que pertenecen a ese elemento.
  - el método `checkValidity()`, que devuelve falso si el elemento falla en satisfacer alguna de las restricciones o verdadero si pasa lo contrario.
  - el método `setCustomValidity()`, que establece un mensaje de validación personalizado, permitiendo imponer y validad restricciones más allá de las que están predefinidas.
