---
title: form
slug: Web/API/HTMLFormElement
---

{{APIRef("HTML DOM")}}

### Interfaz del elemento formulario de HTML

Los elementos `FORM` comparten todas las propiedades y métodos de los otros elementos HTML descritos en el capítulo del [elemento](/es/docs/Web/API/Element). También tienen la interfaz especial [HTMLFormElement](https://www.w3.org/TR/DOM-Level-2-HTML/html.html#ID-40002357).

Esta interfaz proporciona métodos para crear y modificar los elementos `FORM` usando el DOM. El siguiente ejemplo muestra como crear un nuevo formulario, como modificar sus atributos y enviarlo:

```
// Crea un formulario
var f = document.createElement("form");

// Lo añade en el cuerpo ('body') del documento
document.body.appendChild(f);

// Añade los atributos de acción y método
f.action = "/cgi-bin/some.cgi";
f.method = "POST"

// Llama el método de enviar el formulario
f.submit();
```

Además, el siguiente documento HTML muestra como se puede extraer información de un formulario y cambiar algunos de sus atributos.

```
<title>Ejemplo de formulario</title>
<script type="text/javascript">
  function getFormInfo() {
    var info;

    // Obtiene una referencia utilizando la colección de formularios
    var f = document.forms["formularioA"];
    info = "f.elements: " + f.elements + "\n"
         + "f.length: " + f.length + "\n"
         + "f.name: " + f.elements + "\n"
         + "f.acceptCharset: " + f.acceptCharset + "\n"
         + "f.action: " + f.action + "\n"
         + "f.enctype: " + f.enctype + "\n"
         + "f.encoding: " + f.encoding + "\n"
         + "f.method: " + f.method + "\n"
         + "f.target: " + f.target;
    document.forms["formularioA"].elements['tex'].value = info;
  }

  // Se pasa la referencia al formulario desde el
  // atributo al hacer clic ('onclick') del botón con la ayuda de este.formulario ('this.form')
  function setFormInfo(f) {
    f.method = "GET";
    f.action = "/cgi-bin/evil_executable.cgi";
    f.name   = "totally_new";
  }
</script>

<h1>Ejemplo de formulario</h1>

<form name="formularioA" id="formularioA"
 action="/cgi-bin/test" method="POST">
 <p>Haga clic en "Info" para ver informaciones de este formulario.
    Haga clic en "Set" para cambiar los parámetros y otra vez en "Info" para ver los efectos</p>
 <p>
  <input type="button" value="Info"
   onclick="getFormInfo();">
  <input type="button" value="Set"
   onclick="setFormInfo(this.form);">
  <input type="reset" value="Reset">
  <br>
  <textarea id="tex" style="height:15em; width:20em">
 </p>
</form>
```

### Propiedades

- [form.elements](/es/docs/Web/API/HTMLFormElement/elements) (todos los elementos del formulario)
  - : `.elements` devuelve una colección de todos los controles que hay en el formulario `FORM`.
- [form.length](/es/docs/Web/API/HTMLFormElement/length)
  - : `.length` devuelve la cantidad de controles que hay en el formulario
- [form.name](/es/docs/Web/API/HTMLFormElement/name)
  - : `.name` devuelve el nombre del formulario actual en forma de cadena.
- [form.acceptCharset](/es/docs/Web/API/HTMLFormElement/acceptCharset)
  - : `.acceptCharset` devuelve una lista del conjunto de caracteres soportados para el actual elemento `FORM`.
- [form.action](/es/docs/Web/API/HTMLFormElement/action)
  - : `.action` obtiene/configura la acción del elemento `FORM`.
- [form.enctype](/es/docs/Web/API/HTMLFormElement/enctype)
  - : `.enctype` gets/sets the content type of the `FORM` element.
- [form.encoding](/es/docs/Web/API/HTMLFormElement/encoding)
  - : `.encoding` gets/sets the content type of the `FORM` element.
- [form.method](/es/docs/Web/API/HTMLFormElement/method)
  - : `.method` obtiene/configura el método HTTP utilizado para enviar el formulario.
- [form.target](/es/docs/Web/API/HTMLFormElement/target)
  - : `.target` obtiene/configura el objetivo de la acción (i.e., the frame to render its output in).

### Métodos

- [form.submit](/es/docs/Web/API/HTMLFormElement/submit)
  - : submit() manda el formulario.
- [form.reset](/es/docs/Web/API/HTMLFormElement/reset)
  - : reset() restaura el formulario, lo devuelve al estado inicial.
