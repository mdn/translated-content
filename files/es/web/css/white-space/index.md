---
title: white-space
slug: Web/CSS/white-space
---

{{CSSRef}}

La propiedad **`white-space`** de CSS, determina cómo se maneja el espacio en blanco dentro de un elemento. Para hacer que las palabras se dividan _en sí mismas_, usa {{cssxref("overflow-wrap")}}, {{cssxref("word-break")}}, o {{cssxref("hyphens")}} en su lugar.

#### Ejemplo

```css
/* Valores con palabras clave */
white-space: normal;
white-space: nowrap;
white-space: pre;
white-space: pre-wrap;
white-space: pre-line;

/* Valores Globales */
white-space: inherit;
white-space: initial;
white-space: unset;
```

```html hidden
<div class="grid">
  <div class="col">
    <div class="cell">
      <div class="label">normal</div>
      <div>
        <p class="wspNormal">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          pellentesque metus eget massa feugiat lobortis.
        </p>
      </div>
    </div>
    <div class="cell">
      <div class="label">pre-wrap</div>
      <div>
        <p class="wspPreWrap">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          pellentesque metus eget massa feugiat lobortis.
        </p>
      </div>
    </div>
    <div class="cell">
      <div class="label">pre-line</div>
      <div>
        <p class="wspPreLine">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          pellentesque metus eget massa feugiat lobortis.
        </p>
      </div>
    </div>
    <div class="cell">
      <div class="label">nowrap</div>
      <div>
        <p class="wspNowrap">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          pellentesque metus eget massa feugiat lobortis.
        </p>
      </div>
    </div>
    <div class="cell">
      <div class="label">pre</div>
      <div>
        <p class="wspPre">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          pellentesque metus eget massa feugiat lobortis.
        </p>
      </div>
    </div>
    <div class="note">
      Los ejemplos anteriores aplican al siguiente HTML (square represents white
      spaces):
      <pre>
☐☐&lt;p&gt;
☐☐☐☐Lorem ipsum dolor sit amet, consectetur adipiscing elit.
☐☐☐☐Nulla pellentesque metus eget massa feugiat lobortis.
☐☐&lt;/p&gt;</pre
      >
    </div>
  </div>
</div>
```

```css hidden
html,
body {
  height: 100%;
  box-sizing: border-box;
}

pre {
  margin-bottom: 0;
}

.grid {
  width: 100%;
  height: 100%;
  display: flex;
  background: #eee;
  font: 1em monospace;
}

.row {
  display: flex;
  flex: 1 auto;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}

.col {
  display: flex;
  flex: 1 auto;
  flex-direction: column;
}

.cell {
  box-sizing: border-box;
  margin: 0.5em;
  padding: 0;
  background-color: #fff;
  overflow: hidden;
  text-align: center;
}

.note {
  background: #fff3d4;
  padding: 1em;
  margin: 0.5em;
  font: 0.8em sans-serif;
  text-align: left;
  flex: none;
}

p {
  width: 50%;
  font: 0.8em sans-serif;
  max-width: 100%;
  box-sizing: border-box;
  overflow: hidden;
  resize: horizontal;
  background: #e4f0f5;
  padding: 0.5em;
  margin: 0.5em auto 0;
  text-align: left;
}

.wspNormal {
  white-space: normal;
}
.wspNowrap {
  white-space: nowrap;
}
.wspPre {
  white-space: pre;
}
.wspPreWrap {
  white-space: pre-wrap;
}
.wspPreLine {
  white-space: pre-line;
}
```

{{EmbedLiveSample("", "100%", 530, "", "", "")}}

{{cssinfo}}

## Sintáxis

La propiedad `white-space` se especifica con una de las palabras clave de la siguiente lista de valores.

### Valores

- `normal`
  - : Secuencias de espacios en blanco son reducidas a un solo espacio. Saltos de linea en el origen son tratados como un espacio en blanco. Agregar saltos de linea necesarios para llenar el contenedor.
- `nowrap`
  - : Reduce espacios en blanco igual que el modo `normal`, pero suprime saltos de linea del origen.
- `pre`
  - : Secuencias de espacios son preservados. Lineas son solo rotas en caracteres de saltos de linea encontrado en el origen y en elementos html {{HTMLElement("br")}}.
- `pre-wrap`
  - : Secuencias de espacio son preservadas. Lineas son rotas en caracteres de saltos de linea, en elementos html {{HTMLElement("br")}}, y agrega saltos necesarios para rellenar los cuadros de linea
- `pre-line`
  - : Secuencias de espacios en blanco son reducidas. Lineas son rotas en caracteres de salto de linea, en elementos html {{HTMLElement("br")}}, y los necesarios para rellenar los cuadros de linea

La siguiente tabla resume el comportamiento de los diversos valores de `white-space`:

|            | Nuevas líneas | Espacios y tabulaciones | Ajuste de texto |
| ---------- | ------------- | ----------------------- | --------------- |
| `normal`   | Contraer      | Contraer                | Ajustar         |
| `nowrap`   | Contraer      | Contraer                | No ajustar      |
| `pre`      | Preservar     | Preservar               | No ajustar      |
| `pre-wrap` | Preservar     | Preservar               | Ajustar         |
| `pre-line` | Preservar     | Contraer                | Ajustar         |

### Formal syntax

{{csssyntax}}

## Ejemplos

### Ejemplo básico

```css
code {
  white-space: pre;
}
```

### La línea sedivide dentro de los elementos {{HTMLElement("pre")}}

```css
pre {
  word-wrap: break-word; /* IE 5.5-7 */
  white-space: -moz-pre-wrap; /* Firefox 1.0-2.0 */
  white-space: pre-wrap; /* Modern browsers */
}
```

## See it in action

```html hidden
<div id="css-code" class="box">
  p { white-space:
  <select>
    <option>normal</option>
    <option>nowrap</option>
    <option>pre</option>
    <option>pre-wrap</option>
    <option>pre-line</option>
  </select>
  }
</div>
<div id="results" class="box">
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </p>
</div>
```

```css hidden
.box {
  width: 300px;
  padding: 16px;
  border-radius: 10px;
}

#css-code {
  background-color: rgb(220, 220, 220);
  font-size: 16px;
}

#results {
  background-color: rgb(230, 230, 230);
  overflow-x: scroll;
  height: 400px;
  white-space: normal;
  font-size: 14px;
}
```

```js hidden
var select = document.querySelector("#css-code select");
var results = document.querySelector("#results p");
select.addEventListener("change", function (e) {
  results.setAttribute("style", "white-space: " + e.target.value);
});
```

### Fuente

```
    <p>    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.

    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
```

### CSS + Resultado

{{ EmbedLiveSample('See_in_action', '80%', '500px') }}

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## See also

- Propiedades que define como rompen las palabras d*entro de ellas mismas*: {{cssxref("overflow-wrap")}}, {{cssxref("word-break")}}, {{cssxref("hyphens")}}
