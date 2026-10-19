---
title: HTMLFormElement
slug: Web/API/HTMLFormElement
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{APIRef("HTML DOM")}}

La interfaz **`HTMLFormElement`** representa un elemento {{HTMLElement("form")}} en el DOM. Permite acceder a distintos aspectos del formulario (y, en algunos casos, modificarlos), así como a los elementos que lo componen.

{{InheritanceDiagram}}

## Propiedades de instancia

_Esta interfaz también hereda las propiedades de su elemento padre, {{domxref("HTMLElement")}}._

- {{domxref("HTMLFormElement.acceptCharset")}}
  - : Una cadena que refleja el valor del atributo HTML [`accept-charset`](/es/docs/Web/HTML/Reference/Elements/form#accept-charset) del formulario.
- {{domxref("HTMLFormElement.action")}}
  - : Una cadena que refleja el valor del atributo HTML [`action`](/es/docs/Web/HTML/Reference/Elements/form#action) del formulario, que contiene el URI de un programa que procesa la información que envía el formulario.
- {{domxref("HTMLFormElement.autocomplete")}}
  - : Una cadena que refleja el valor del atributo HTML [`autocomplete`](/es/docs/Web/HTML/Reference/Attributes/autocomplete) del formulario e indica si el navegador puede rellenar automáticamente los valores de los controles de este formulario.
- {{domxref("HTMLFormElement.encoding")}} o {{domxref("HTMLFormElement.enctype")}}
  - : Una cadena que refleja el valor del atributo HTML [`enctype`](/es/docs/Web/HTML/Reference/Elements/form#enctype) del formulario e indica el tipo de contenido que se usa para transmitir el formulario al servidor. Solo se pueden asignar los valores especificados. Ambas propiedades son sinónimas.
- {{domxref("HTMLFormElement.elements")}} {{ReadOnlyInline}}
  - : Una {{domxref("HTMLFormControlsCollection")}} que contiene todos los controles de formulario que pertenecen a este elemento de formulario.
- {{domxref("HTMLFormElement.length")}} {{ReadOnlyInline}}
  - : Un `long` que refleja el número de controles del formulario.
- {{domxref("HTMLFormElement.name")}}
  - : Una cadena que refleja el valor del atributo HTML [`name`](/es/docs/Web/HTML/Reference/Elements/form#name) del formulario, que contiene el nombre del formulario.
- {{domxref("HTMLFormElement.noValidate")}}
  - : Un valor booleano que refleja el valor del atributo HTML [`novalidate`](/es/docs/Web/HTML/Reference/Elements/form#novalidate) del formulario e indica si se debe omitir la validación del formulario.
- {{domxref("HTMLFormElement.method")}}
  - : Una cadena que refleja el valor del atributo HTML [`method`](/es/docs/Web/HTML/Reference/Elements/form#method) del formulario e indica el método HTTP que se usa para enviarlo. Solo se pueden asignar los valores especificados.
- {{domxref("HTMLFormElement.rel")}}
  - : Una cadena que refleja el valor del atributo HTML [`rel`](/es/docs/Web/HTML/Reference/Attributes/rel) del formulario, que representa, como una lista de valores enumerados separados por espacios, los tipos de enlaces que crea el formulario.
- {{domxref("HTMLFormElement.relList")}} {{ReadOnlyInline}}
  - : Una {{domxref("DOMTokenList")}} que refleja el atributo HTML [`rel`](/es/docs/Web/HTML/Reference/Attributes/rel), en forma de lista de tokens.
- {{domxref("HTMLFormElement.target")}}
  - : Una cadena que refleja el valor del atributo HTML [`target`](/es/docs/Web/HTML/Reference/Elements/form#target) del formulario e indica dónde se muestran los resultados recibidos al enviarlo.

Los campos de entrada con nombre se añaden como propiedades a la instancia del formulario al que pertenecen y pueden sobrescribir las propiedades nativas si comparten el mismo nombre (por ejemplo, en un formulario con un campo de entrada llamado `action`, la propiedad `action` devolverá ese campo en lugar del atributo HTML [`action`](/es/docs/Web/HTML/Reference/Elements/form#action) del formulario).

## Métodos de instancia

_Esta interfaz también hereda los métodos de su elemento padre, {{domxref("HTMLElement")}}._

- {{domxref("HTMLFormElement.checkValidity", "checkValidity()")}}
  - : Devuelve `true` si los controles hijos del elemento están sujetos a la [validación de restricciones](/es/docs/Web/HTML/Guides/Constraint_validation) y las cumplen; devuelve `false` si algún control no satisface sus restricciones. Dispara un evento llamado {{domxref("HTMLInputElement/invalid_event", "invalid")}} en cada control que no cumple sus restricciones; dichos controles se consideran no válidos si el evento no se cancela. Corresponde al programador decidir cómo responder a `false`.
- {{domxref("HTMLFormElement.reportValidity", "reportValidity()")}}
  - : Devuelve `true` si los controles hijos del elemento cumplen sus [restricciones de validación](/es/docs/Web/HTML/Guides/Constraint_validation). Cuando devuelve `false`, se disparan eventos {{domxref("HTMLInputElement/invalid_event", "invalid")}} cancelables en cada hijo no válido y se informa al usuario de los problemas de validación.
- {{domxref("HTMLFormElement.requestSubmit", "requestSubmit()")}}
  - : Solicita que el formulario se envíe usando el botón de envío especificado y su configuración correspondiente.
- {{domxref("HTMLFormElement.reset", "reset()")}}
  - : Restablece el formulario a su estado inicial.
- {{domxref("HTMLFormElement.submit", "submit()")}}
  - : Envía el formulario al servidor.

## Eventos

Para detectar estos eventos, usa `addEventListener()` o asigna un detector de eventos a la propiedad `oneventname` de esta interfaz.

- {{domxref("HTMLFormElement/formdata_event", "formdata")}}
  - : El evento `formdata` se dispara después de construirse la lista de entradas que representa los datos del formulario.
- {{domxref("HTMLFormElement/reset_event", "reset")}}
  - : El evento `reset` se dispara cuando se restablece un formulario.
- {{domxref("HTMLFormElement/submit_event", "submit")}}
  - : El evento `submit` se dispara cuando se envía un formulario.

## Notas de uso

### Obtener un objeto de elemento de formulario

Para obtener un objeto `HTMLFormElement`, puedes usar un [selector CSS](/es/docs/Web/CSS/Guides/Selectors) con {{domxref("Document.querySelector", "querySelector()")}} o consultar la lista de todos los formularios del documento mediante su propiedad {{domxref("Document.forms", "forms")}}.

{{domxref("Document.forms")}} devuelve un array de objetos `HTMLFormElement` con cada uno de los formularios de la página. Después, puedes usar cualquiera de las siguientes sintaxis para obtener un formulario concreto:

- `document.forms[index]`
  - : Devuelve el formulario que ocupa la posición `index` del array de formularios.
- `document.forms[id]`
  - : Devuelve el formulario cuyo ID es `id`.
- `document.forms[name]`
  - : Devuelve el formulario cuyo atributo `name` tiene el valor `name`.

### Acceder a los elementos del formulario

Puedes acceder a la lista de elementos del formulario que contienen datos consultando la propiedad {{domxref("HTMLFormElement.elements", "elements")}} del formulario. Esta devuelve una {{domxref("HTMLFormControlsCollection")}} con todos los elementos de entrada de datos del usuario del formulario, tanto los que son descendientes de `<form>` como los que pasan a formar parte de él mediante su atributo `form`.

También puedes obtener un elemento del formulario usando su atributo `name` como clave del objeto `form`, pero es mejor usar `elements`: contiene _solo_ los elementos del formulario y no puede mezclarse con otros atributos de `form`.

### Problemas al nombrar elementos

Algunos nombres interfieren con el acceso desde JavaScript a las propiedades y los elementos del formulario.

Por ejemplo:

- `<input name="id">` tendrá prioridad sobre `<form id="…">`. Esto significa que `form.id` no hará referencia al id del formulario, sino al elemento cuyo nombre es `"id"`. Lo mismo ocurrirá con cualquier otra propiedad del formulario, como `<input name="action">` o `<input name="post">`.
- `<input name="elements">` hará que la colección `elements` del formulario resulte inaccesible. La referencia `form.elements` pasará a apuntar a ese elemento individual.

Para evitar este tipo de problemas con los nombres de los elementos:

- _Siempre_ usa la colección `elements` para evitar ambigüedades entre el nombre de un elemento y una propiedad del formulario.
- _Nunca_ uses `"elements"` como nombre de un elemento.

Si no usas JavaScript, esto no causará ningún problema.

### Elementos que se consideran controles de formulario

Los elementos incluidos en `HTMLFormElement.elements` y `HTMLFormElement.length` son los siguientes:

- {{HTMLElement("button")}}
- {{HTMLElement("fieldset")}}
- {{HTMLElement("input")}} (excepto aquellos cuyo [`type`](/es/docs/Web/HTML/Reference/Elements/input#type) sea `"image"`, que se omiten por razones históricas)
- {{HTMLElement("object")}}
- {{HTMLElement("output")}}
- {{HTMLElement("select")}}
- {{HTMLElement("textarea")}}

La lista que devuelve `elements` no incluye ningún otro elemento, lo que la convierte en una forma excelente de acceder a los elementos más importantes al procesar formularios.

## Ejemplos

En este ejemplo se crea un elemento de formulario nuevo, se modifican sus atributos y después se envía:

```js
const f = document.createElement("form"); // Crea un formulario
document.body.appendChild(f); // Lo añade al cuerpo del documento
f.action = "/cgi-bin/some.cgi"; // Añade los atributos action y method
f.method = "POST";
f.submit(); // Llama al método submit() del formulario
```

Extrae información de un elemento `<form>` y establece algunos de sus atributos:

```html
<form name="formA" action="/cgi-bin/test" method="post">
  <p>
    Pulsa "Info" para ver los detalles del formulario o "Establecer" para
    cambiarlos.
  </p>
  <p>
    <button type="button" id="info">Info</button>
    <button type="button" id="set-info">Establecer</button>
    <button type="reset">Restablecer</button>
  </p>

  <textarea id="form-info" rows="15" cols="20"></textarea>
</form>
```

```js
document.getElementById("info").addEventListener("click", () => {
  // Obtiene una referencia al formulario a través de su nombre
  const f = document.forms["formA"];
  // Las propiedades del formulario que nos interesan
  const properties = [
    "elements",
    "length",
    "name",
    "charset",
    "action",
    "acceptCharset",
    "action",
    "enctype",
    "method",
    "target",
  ];
  // Recorre las propiedades y las convierte en una cadena que podemos mostrar al usuario
  const info = properties
    .map((property) => `${property}: ${f[property]}`)
    .join("\n");

  // Establece que el <textarea> del formulario muestre las propiedades del formulario
  document.forms["formA"].elements["form-info"].value = info; // document.forms["formA"]['form-info'].value también funcionaría
});

document.getElementById("set-info").addEventListener("click", (e) => {
  // Obtiene una referencia al formulario a través del destino del evento
  // e.target es el botón y .form es el formulario al que pertenece
  const f = e.target.form;
  // El argumento debe ser una referencia a un elemento de formulario.
  f.action = "a-different-url.cgi";
  f.name = "a-different-name";
});
```

Envía un `<form>` a una ventana nueva:

```html
<form action="test.php" target="_blank">
  <p>
    <label>Nombre: <input type="text" name="first-name" /></label>
  </p>
  <p>
    <label>Apellidos: <input type="text" name="last-name" /></label>
  </p>
  <p>
    <label><input type="password" name="pwd" /></label>
  </p>

  <fieldset>
    <legend>Mascota preferida</legend>

    <p>
      <label><input type="radio" name="pet" value="cat" /> Gato</label>
    </p>
    <p>
      <label><input type="radio" name="pet" value="dog" /> Perro</label>
    </p>
  </fieldset>

  <fieldset>
    <legend>Vehículos en propiedad</legend>

    <p>
      <label
        ><input type="checkbox" name="vehicle" value="Bike" />Tengo una
        bicicleta</label
      >
    </p>
    <p>
      <label
        ><input type="checkbox" name="vehicle" value="Car" />Tengo un
        coche</label
      >
    </p>
  </fieldset>

  <p><button>Enviar</button></p>
</form>
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- El elemento HTML que implementa esta interfaz: {{HTMLElement("form")}}.
