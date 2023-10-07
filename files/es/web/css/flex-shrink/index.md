---
title: flex-shrink
slug: Web/CSS/flex-shrink
---

{{CSSRef}}

La propiedad [CSS](/es/docs/CSS) **`flex-shrink`** especifica el factor de contracción de un flex item. Los flex items se encogerán para llenar el contenedor de acuerdo a su número `flex-shrink` , cuando el tamaño por defecto de los flex items sea mayor al de su contenedor flex container.

#### Ejemplo

```css
flex-shrink: 2;
flex-shrink: 0.6;

/* Valores globales */
flex-shrink: inherit;
flex-shrink: initial;
flex-shrink: unset;
```

```html hidden
<div class="grid">
  <div class="row">
    <div class="cell">
      flex-shrink:
      <div class="container">
        <div class="item small">
          <strong>0.5</strong>
          <p>
            <small
              >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at
              purus vitae ipsum hendrerit vulputate quis vitae risus.</small
            >
          </p>
        </div>
        <div class="item mid">
          <strong>1</strong>
          <p>
            <small
              >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at
              purus vitae ipsum hendrerit vulputate quis vitae risus.</small
            >
          </p>
        </div>
        <div class="item large">
          <strong>3</strong>
          <p>
            <small
              >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at
              purus vitae ipsum hendrerit vulputate quis vitae risus.</small
            >
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
```

```css hidden
html,
body {
  height: 100%;
  box-sizing: border-box;
  background: #eee;
}

.grid {
  width: 100%;
  height: 100%;
  display: flex;
  font: 1em monospace;
}

.row {
  display: flex;
  flex: 1 auto;
  flex-direction: row;
  flex-wrap: wrap;
}

.cell {
  margin: 0.5em;
  padding: 0.5em;
  background-color: #fff;
  overflow: hidden;
  text-align: left;
  flex: 1;
}

.note {
  background: #fff3d4;
  padding: 1em;
  margin: 0.5em;
  font: 0.8em sans-serif;
  text-align: left;
  flex: 1;
  white-space: nowrap;
}

.container {
  background: #e4f0f5;
  margin-top: 0.5em;

  display: flex;
}

.item {
  border: 1px solid black;
  padding: 1em;
}

.small {
  flex-shrink: 0.5;
}
.mid {
  flex-shrink: 1;
}
.large {
  flex-shrink: 3;
}
```

{{EmbedLiveSample("", "100%", 280, "", "", "")}}

{{cssinfo}}

## Sintaxis

La propiedad `flex-shrink` se especifica como un único [`<número>`](#number).

### Valores

- `<número>`
  - : Véase{{cssxref("&lt;number&gt;")}}. Los valores negativos no son válidos

### Sintaxi formal

{{csssyntax}}

## Ejemplo

### HTML

```html
<p>
  El ancho del contenido es de 500px; el flex-basis de los flex items es 120px.
</p>
<p>A, B, C tiene flex-shrink:1. D y E tienen flex-shrink:2</p>
<p>El ancho de D y E es menor al de los otros.</p>
<div id="content">
  <div class="box" style="background-color:red;">A</div>
  <div class="box" style="background-color:lightblue;">B</div>
  <div class="box" style="background-color:yellow;">C</div>
  <div class="box1" style="background-color:brown;">D</div>
  <div class="box1" style="background-color:lightgreen;">E</div>
</div>
```

### CSS

```css
#content {
  display: flex;
  width: 500px;
}

#content div {
  flex-basis: 120px;
  border: 3px solid rgba(0, 0, 0, 0.2);
}

.box {
  flex-shrink: 1;
}

.box1 {
  flex-shrink: 2;
}
```

### Result

{{EmbedLiveSample('', '500px', '300px')}}

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Vea también

- CSS Flexbox Guide: _[Basic Concepts of Flexbox](/es/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox)_
- CSS Flexbox Guide: _[Controlling Ratios of flex items along the main axis](/es/docs/Web/CSS/CSS_Flexible_Box_Layout/Controlling_Ratios_of_Flex_Items_Along_the_Main_Ax)_
