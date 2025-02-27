---
title: border-top-left-radius
slug: Web/CSS/border-top-left-radius
---

{{CSSRef}}

La propiedad CSS **`border-top-left-radius`** establece el redondeo de la esquina superior izquierda del elemento. El redondeo puede ser un círculo o una elipse, o si uno de los valores es `0`, no se redondeará la esquina, dejándola cuadrada.

![border-radius.png](border-radius.png)

Un fondo, siendo una imagen o color, está limitado a los bordes, incluso a los redondeados; la posición exacta del corte será definida por el valor de la propiedad {{cssxref("background-clip")}}.

> [!NOTE]
> Si el valor de esta propiedad no se establece en una propiedad reducida {{cssxref("border-radius")}} que es aplicada al elemento después de la propiedad `border-top-left-radius`, el valor de esta propiedad es restaurado a su valor inicial por la [propiedad de forma reducida](/es/docs/Web/CSS/Shorthand_properties).

{{cssinfo}}

## Sintaxis

```css
/* la esquina es un círculo */
/* border-top-left-radius: radius */
border-top-left-radius: 3px;

/* la esquina es una elipse */
/* border-top-left-radius: horizontal vertical */
border-top-left-radius: 0.5em 1em;

border-top-left-radius: inherit;
```

donde:

- _radius_
  - : Es un valor {{cssxref("&lt;length&gt;")}} o {{cssxref("&lt;percentage&gt;")}} que denota el radio del círculo que se usará para el borde en esa esquina.
- _horizontal_
  - : Es un valor {{cssxref("&lt;length&gt;")}} o {{cssxref("&lt;percentage&gt;")}} que denota el eje semi-mayor horizontal de la elipse que se usará en el borde de esa esquina.
- _vertical_
  - : Es un valor {{cssxref("&lt;length&gt;")}} o {{cssxref("&lt;percentage&gt;")}} que denota el eje semi-mayor vertical de la elipse que se usará en el borde de esa esquina.

### Valores

- `<length>`
  - : Denota el tamaño del radio de círculo o del eje semi-mayor o semi-menor de la elipse. Puede ser expresado en cualquier tipo de unidad permitida por el tipo de dato CSS {{cssxref("&lt;length&gt;")}}. Los valores negativos no son válidos.
- `<percentage>`
  - : Denota el tamaño del radio del círculo, o de los ejes semi-mayores y semi-menores de la elipse, usando valores porcentuales. Porcentajes del eje horizontal toman como referencia a la anchura de la caja, y porcentajes del eje vertical toman como referencia la altura de la caja. Los valores negativos no son válidos.

### Sintaxis formal

{{csssyntax}}

## Ejemplos

#### Un arco de círculo usado como borde

```html hidden
<div></div>
```

```css
div {
  background-color: lightgreen;
  border: solid 1px black;
  width: 100px;
  height: 100px;
  border-top-left-radius: 40px 40px;
}
```

{{EmbedLiveSample}}

#### Un arco de elipse usado como borde

```html hidden
<div></div>
```

```css
div {
  background-color: lightgreen;
  border: solid 1px black;
  width: 100px;
  height: 100px;
  border-top-left-radius: 40px 20px;
}
```

{{EmbedLiveSample}}

#### La caja es un cuadro: un arco de círculo es usado como borde

```html hidden
<div></div>
```

```css
div {
  background-color: lightgreen;
  border: solid 1px black;
  width: 100px;
  height: 100px;
  border-top-left-radius: 40%;
}
```

{{EmbedLiveSample}}

#### La caja no es un círculo: un arco de elipse es usado como borde

```html hidden
<div></div>
```

```css
div {
  background-color: lightgreen;
  border: solid 1px black;
  border-top-left-radius: 40%;
  width: 100px;
  height: 200px;
}
```

{{EmbedLiveSample}}

#### El color de fondo está delimitado al borde

```html hidden
<div></div>
```

```css
div {
  border: black 3px double;
  border-top-left-radius: 40%;
  height: 100px;
  width: 100px;
  background-color: rgb(250, 20, 70);
  background-clip: content-box;
}
```

{{EmbedLiveSample}}

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

Las propiedades CSS relacionadas con radio de borde: la forma reducida {{cssxref("border-radius")}}, las propiedades de las otras esquinas: {{cssxref("border-top-right-radius")}}, {{cssxref("border-bottom-right-radius")}}, y {{cssxref("border-bottom-left-radius")}}.
