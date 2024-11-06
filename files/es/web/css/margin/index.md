---
title: margin
slug: Web/CSS/margin
---

{{CSSRef}}

## Resumen

La propiedad CSS **`margin`** establece el margen para los cuatro lados. Es una abreviación para evitar tener que establecer cada lado por separado con las otras propiedades de margen: {{ cssxref("margin-top") }}, {{ cssxref("margin-right") }}, {{ cssxref("margin-bottom") }} y {{ cssxref("margin-left") }}.

También se permiten valores negativos.

{{cssinfo}}

## Sintaxis

```css
/* Aplica a todos los cuatro lados */
margin: 1em;

/* Vertical | Horizontal */
margin: 5% auto;

/* Arriba | Horizontal | Abajo */
margin: 1em auto 2em;

/* Arriba | Derecha | Abajo | Izquierda */
margin: 2px 1em 0 auto;

/* Valores globales */
margin: inherit;
margin: initial;
margin: unset;
```

### Valores

Acepta uno, dos , tres o cuatro valores de los siguientes:

- `<length>`
  - : Especifica un ancho fijo. Valores negativos son permitidos. Mira {{cssxref("&lt;length&gt;")}} para conocer las posibles unidades.
- `<percentage>`
  - : Un {{cssxref("&lt;percentage&gt;")}} relativo al **ancho** del bloque contenedor. Se permiten valores negativos.
- `auto`
  - : `auto es reemplazado por algún valor` apropiado. Por ejemplo, puede usarse para centrar horizontalmente un elemento bloque.
    `div { width:50%; margin:0 auto; }` centrará el div horizontalmente.

<!---->

- **Un** único valor aplicará para todos los **cuatro lados**.
- **Dos** valores aplicarán: El primer valor para **arriba y abajo**, el segundo valor para **izquierda y derecha**.
- **Tres** valores aplicarán: El primero para **arriba**, el segundo para **izquierda y derecha**, el tercero para **abajo**.
- **Cuatro** valores aplicarán en sentido de las manecillas del reloj empezando desde arriba. (**Arriba, derecha, abajo, izquierda**)

### Sintaxis formal

{{csssyntax}}

## Ejemplos

### Ejemplo simple

HTML

```html
<div class="ex1">
  margin: auto;<br />
  background: gold;<br />
  width: 66%;
</div>
<div class="ex2">
  margin: 20px 0 0 -20px;<br />
  background: gold;<br />
  width: 66%;
</div>
```

CSS

```css
.ex1 {
  margin: auto;
  background: gold;
  width: 66%;
}
.ex2 {
  margin: 20px 0px 0 -20px;
  background: gold;
  width: 66%;
}
```

{{ EmbedLiveSample('Simple_example') }}

### Otro ejemplo

```css
margin: 5%; /* 5% para todos los lados */

margin: 10px; /* 10px para todos los lados */

margin: 1.6em 20px; /* 1.6em arriba y abajo, 20px izquierda y derecha */

margin: 10px 3% 1em; /* 10px arriba, 3% izquierda y derecha, 1em abajo */

margin: 10px 3px 30px 5px; /* 10px arriba, 3px derecha, 30px abajo, 5px izquierda */

margin: 1em auto; /* 1em arriba y abajo, centrado horizontalmente */

margin: auto; /* 0px de margen vertical, centrado horizontalmente */
```

## Centrado horizontal con `margin: 0 auto;`

Para centrar algo horizontalmente en navegadores modernos, usa `display: flex; justify-content: center;` .

Sin embargo, en navegadores antiguos como IE8-9, **flexbox** no está disponible. Para poder centrar un elemento horizontalmente con respecto a su contenedor, usa `margin: 0 auto;`

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- [Entendiendo el colapso de margen](/es/docs/Web/CSS/CSS_Modelo_Caja/Mastering_margin_collapsing)
