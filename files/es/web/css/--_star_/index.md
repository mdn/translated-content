---
title: "Propiedades personalizadas (--*): variables CSS"
slug: Web/CSS/--*
---

{{CSSRef}}

Los nombres de las propiedades que tiene el prefijo `--`, como `--ejemplo-nombre`, representan las _propiedades personalizadas_ que contienen un valor que puede ser usado en otras declaraciones usando la función {{cssxref("var")}}.

Las propiedades personalizadas tienen como alcance los elementos en los que se declaran y participan en la cascada: el valor de dicha propiedad personalizada es el de la declaración decidida por el algoritmo en cascada.

{{CSSInfo}}

## Sintaxis

```css
--somekeyword: left;
--somecolor: #0000ff;
--somecomplexvalue: 3px 6px rgb(20, 32, 54);
```

- `<declaración-valor>`
  - : Este valor coincide con cualquier secuencia de uno o más tokens, siempre que la secuencia no contenga un token no permitido.

> **Nota:** Los nombres de las propiedades personalizadas distinguen entre mayúsculas y minúsculas — `--mi-color` se tratará como una propiedad personalizada separada de `--Mi-color`.

### Sintaxis formal

{{CSSSyntax}}

## Ejemplo

### HTML

```html
<p id="firstParagraph">
  Este párrafo debe tener un fondo azul y un texto amarillo.
</p>
<p id="secondParagraph">
  Este párrafo debe tener un fondo amarillo y un texto azul.
</p>
<div id="container">
  <p id="thirdParagraph">
    Este párrafo debe tener un fondo verde y un texto amarillo.
  </p>
</div>
```

### CSS

```css
:root {
  --first-color: #488cff;
  --second-color: #ffff8c;
}

#firstParagraph {
  background-color: var(--first-color);
  color: var(--second-color);
}

#secondParagraph {
  background-color: var(--second-color);
  color: var(--first-color);
}

#container {
  --first-color: #48ff32;
}

#thirdParagraph {
  background-color: var(--first-color);
  color: var(--second-color);
}
```

### Resultado

{{EmbedLiveSample('Example', 500, 130)}}

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- [Usando variables CSS](/es/docs/Web/CSS/Using_CSS_variables)
- La función {{cssxref("var")}}
