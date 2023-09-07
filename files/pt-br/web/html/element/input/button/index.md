---
title: <input type="button">
slug: Web/HTML/Element/input/button
---

{{HTMLSidebar}}

Elementos {{HTMLElement("input")}} do tipo **`button`** são renderizados como um simples botão, que podem ser programados para controlar funcionalidades customizadas em qualquer lugar de uma página web quando for atribuído um evento (tipicamente para um evento {{event("click")}}).

{{EmbedInteractiveExample("pages/tabbed/input-button.html", "tabbed-shorter")}}

> **Nota:** Enquanto elementos `<input>` do tipo `button` ainda são perfeitamente válidos, os novos elementos {{HTMLElement("button")}} são agora os favoráveis meios para criar botões. Uma etiqueta de texto (label) para um {{HTMLElement("button")}} pode ser inserida entre uma tag de abertura e outra de fechamento, podendo ser incluídas até imagens.

<table class="properties">
  <tbody>
    <tr>
      <td>
        <strong><a href="#value">Value</a></strong>
      </td>
      <td>
        Um {{domxref("DOMString")}} usado como uma etiqueta de botão.
      </td>
    </tr>
    <tr>
      <td><strong>Eventos</strong></td>
      <td>{{event("click")}}</td>
    </tr>
    <tr>
      <td><strong>Atributos comuns suportados</strong></td>
      <td>
        <a href="/pt-BR/docs/Web/HTML/Element/input#type"><code>type</code></a>, e
        <a href="/pt-BR/docs/Web/HTML/Element/input#value"><code>value</code></a>
      </td>
    </tr>
    <tr>
      <td><strong>atributos IDL</strong></td>
      <td><code>value</code></td>
    </tr>
    <tr>
      <td><strong>Métodos</strong></td>
      <td>Nenhum</td>
    </tr>
  </tbody>
</table>

## Value

Seu atributo [`value`](/pt-BR/docs/Web/HTML/Element/input#value) de um elemento `<input type="button">` contém uma {{domxref("DOMString")}} que é usado como uma etiqueta (label) de um botão

```html
<input type="button" value="Click Me" />
```

{{EmbedLiveSample("summary-example3", 650, 30)}}

Se você não especificar um `value`, você obtém um botão vazio:

```html
<input type="button" />
```

{{EmbedLiveSample("summary-example1", 650, 30)}}

## Usando buttons

Elementos `<input type="button">` não possuem comportamento padrão (seu primos, `<input type="submit">` e [`<input type="reset">`](/pt-BR/docs/Web/HTML/Element/input/reset) são usados para submeter e resetar formulários). Para que botões possam fazer algo, você tem de escrever um código em JavaScript para fazê-lo trabalhar.

### Um simples botão

Nós iremos começar criando um simples botão com um evento {{event("click")}} que inicia nossa máquina (bem, ele altera o `value` do botão e o contéudo texto do seguinte parágrafo):

```html
<form>
  <input type="button" value="Start machine" />
</form>
<p>The machine is stopped.</p>
```

```js
const button = document.querySelector("input");
const paragraph = document.querySelector("p");

button.addEventListener("click", updateButton);

function updateButton() {
  if (button.value === "Start machine") {
    button.value = "Stop machine";
    paragraph.textContent = "The machine has started!";
  } else {
    button.value = "Start machine";
    paragraph.textContent = "The machine is stopped.";
  }
}
```

O script recebe uma referência para o objeto {{domxref("HTMLInputElement")}} representando o `<input>` no DOM, salvando esta referência na variável `button`. {{domxref("EventTarget.addEventListener", "addEventListener()")}} é então usado para criar uma função que será chamada quando o evento {{event("click")}} for executado no botão.

{{EmbedLiveSample("A_simple_button", 650, 100)}}

### Adicionando atalhos de teclados aos botões

Keyboard shortcuts, also known as access keys and keyboard equivalents, let the user trigger a button using a key or combination of keys on the keyboard. To add a keyboard shortcut to a button — just as you would with any {{HTMLElement("input")}} for which it makes sense — you use the [`accesskey`](/pt-BR/docs/Web/HTML/Global_attributes#accesskey) global attribute.

In this example, <kbd>s</kbd> is specified as the access key (you'll need to press <kbd>s</kbd> plus the particular modifier keys for your browser/OS combination; see [accesskey](/pt-BR/docs/Web/HTML/Global_attributes/accesskey) for a useful list of those).

```html
<form>
  <input type="button" value="Start machine" accesskey="s" />
</form>
<p>The machine is stopped.</p>
```

```js hidden
const button = document.querySelector("input");
const paragraph = document.querySelector("p");

button.addEventListener("click", updateButton);

function updateButton() {
  if (button.value === "Start machine") {
    button.value = "Stop machine";
    paragraph.textContent = "The machine has started!";
  } else {
    button.value = "Start machine";
    paragraph.textContent = "The machine is stopped.";
  }
}
```

{{EmbedLiveSample("Adding_keyboard_shortcuts_to_buttons", 650, 100)}}

> **Note:** The problem with the above example of course is that the user will not know what the access key is! In a real site, you'd have to provide this information in a way that doesn't intefere with the site design (for example by providing an easily accessible link that points to information on what the site accesskeys are).

### Desativando e ativando um botão

To disable a button, simply specify the [`disabled`](/pt-BR/docs/Web/HTML/Global_attributes#disabled) global attribute on it, like so:

```html
<input type="button" value="Disable me" disabled />
```

You can enable and disable buttons at run time by simply setting `disabled` to `true` or `false`. In this example our button starts off enabled, but if you press it, it is disabled using `button.disabled = true`. A {{domxref("WindowTimers.setTimeout","setTimeout()")}} function is then used to reset the button back to its enabled state after two seconds.

```html hidden
<input type="button" value="Enabled" />
```

```js hidden
const button = document.querySelector("input");

button.addEventListener("click", disableButton);

function disableButton() {
  button.disabled = true;
  button.value = "Disabled";
  window.setTimeout(function () {
    button.disabled = false;
    button.value = "Enabled";
  }, 2000);
}
```

{{EmbedLiveSample("Hidden_code_1", 650, 60)}}

If the `disabled` attribute isn't specified, the button inherits its `disabled` state from its parent element. This makes it possible to enable and disable groups of elements all at once by enclosing them in a container such as a {{HTMLElement("fieldset")}} element, and then setting `disabled` on the container.

The example below shows this in action. This is very similar to the previous example, except that the `disabled` attribute is set on the `<fieldset>` when the first button is pressed — this causes all three buttons to be disabled until the two second timeout has passed.

```html hidden
<fieldset>
  <legend>Button group</legend>
  <input type="button" value="Button 1" />
  <input type="button" value="Button 2" />
  <input type="button" value="Button 3" />
</fieldset>
```

```js hidden
const button = document.querySelector("input");
const fieldset = document.querySelector("fieldset");

button.addEventListener("click", disableButton);

function disableButton() {
  fieldset.disabled = true;
  window.setTimeout(function () {
    fieldset.disabled = false;
  }, 2000);
}
```

{{EmbedLiveSample("Hidden_code_2", 650, 60)}}

> **Note:** Firefox will, unlike other browsers, by default, [persist the dynamic disabled state](http://stackoverflow.com/questions/5985839/bug-with-firefox-disabled-attribute-of-input-not-resetting-when-refreshing) of a {{HTMLElement("button")}} across page loads. Use the [`autocomplete`](/pt-BR/docs/Web/HTML/Element/button#autocomplete) attribute to control this feature.

## Validação

Buttons não participam na validação; eles não tem um valor real para ser restringido.

## Exemplos

The below example shows a very simple drawing app created using a {{htmlelement("canvas")}} element and some simple CSS and JavaScript (we'll hide the CSS for brevity). The top two controls allow you to choose the color and size of the drawing pen. The button, when clicked, invokes a function that clears the canvas.

```html
<div class="toolbar">
  <input type="color" aria-label="select pen color" />
  <input
    type="range"
    min="2"
    max="50"
    value="30"
    aria-label="select pen size" /><span class="output">30</span>
  <input type="button" value="Clear canvas" />
</div>

<canvas class="myCanvas">
  <p>Add suitable fallback here.</p>
</canvas>
```

```css hidden
body {
  background: #ccc;
  margin: 0;
  overflow: hidden;
}

.toolbar {
  background: #ccc;
  width: 150px;
  height: 75px;
  padding: 5px;
}

input[type="color"],
input[type="button"] {
  width: 90%;
  margin: 0 auto;
  display: block;
}

input[type="range"] {
  width: 70%;
}

span {
  position: relative;
  bottom: 5px;
}
```

```js
var canvas = document.querySelector(".myCanvas");
var width = (canvas.width = window.innerWidth);
var height = (canvas.height = window.innerHeight - 85);
var ctx = canvas.getContext("2d");

ctx.fillStyle = "rgb(0,0,0)";
ctx.fillRect(0, 0, width, height);

var colorPicker = document.querySelector('input[type="color"]');
var sizePicker = document.querySelector('input[type="range"]');
var output = document.querySelector(".output");
var clearBtn = document.querySelector('input[type="button"]');

// covert degrees to radians
function degToRad(degrees) {
  return (degrees * Math.PI) / 180;
}

// update sizepicker output value

sizePicker.oninput = function () {
  output.textContent = sizePicker.value;
};

// store mouse pointer coordinates, and whether the button is pressed
var curX;
var curY;
var pressed = false;

// update mouse pointer coordinates
document.onmousemove = function (e) {
  curX = window.Event
    ? e.pageX
    : e.clientX +
      (document.documentElement.scrollLeft
        ? document.documentElement.scrollLeft
        : document.body.scrollLeft);
  curY = window.Event
    ? e.pageY
    : e.clientY +
      (document.documentElement.scrollTop
        ? document.documentElement.scrollTop
        : document.body.scrollTop);
};

canvas.onmousedown = function () {
  pressed = true;
};

canvas.onmouseup = function () {
  pressed = false;
};

clearBtn.onclick = function () {
  ctx.fillStyle = "rgb(0,0,0)";
  ctx.fillRect(0, 0, width, height);
};

function draw() {
  if (pressed) {
    ctx.fillStyle = colorPicker.value;
    ctx.beginPath();
    ctx.arc(
      curX,
      curY - 85,
      sizePicker.value,
      degToRad(0),
      degToRad(360),
      false,
    );
    ctx.fill();
  }

  requestAnimationFrame(draw);
}

draw();
```

{{EmbedLiveSample("Examples", '100%', 600)}}

## Específicações

| Specification                                                                                       | Status                   | Comments |
| --------------------------------------------------------------------------------------------------- | ------------------------ | -------- |
| {{SpecName('HTML WHATWG', 'forms.html#button-state-(type=button)', '&lt;input type="button"&gt;')}} | {{Spec2('HTML WHATWG')}} |          |
| {{SpecName('HTML5 W3C', 'forms.html#button-state-(type=button)', '&lt;input type="button"&gt;')}}   | {{Spec2('HTML5 W3C')}}   |          |

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- {{HTMLElement("input")}} and the {{domxref("HTMLInputElement")}} interface which implements it.
- The more modern {{HTMLElement("button")}} element.
- [Compatibility of CSS properties](/pt-BR/docs/Learn/HTML/Forms/Property_compatibility_table_for_form_widgets)
