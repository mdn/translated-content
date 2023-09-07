---
title: flex
slug: Web/CSS/flex
---

{{CSSRef}}

## Resumen

La propiedad CSS flex es una propiedad resumida que indica la capacidad de un elemento flexible para alterar sus dimensiones y llenar el espacio disponible. Los elementos flexibles pueden ser estirados para utilizar el espacio disponible proporcional a su factor de crecimiento flexible o su factor de contracción flexible para evitar desbordamiento.

{{cssinfo}}

Consulte [Cómo usar las cajas flexibles de CSS](/es/docs/Web/CSS/CSS_Flexible_Box_Layout/Usando_las_cajas_flexibles_CSS/) para conocer más propiedades e información.

## Sintaxis

```css
/* 0 0 auto */
flex: none;

/* Un valor, número sin unidades: flex-grow */
flex: 2;

/* Un valor, width/height: flex-basis */
flex: 10em;
flex: 30px;
flex: auto;
flex: content;

/* Dos valores: flex-grow | flex-basis */
flex: 1 30px;

/* Dos valores: flex-grow | flex-shrink */
flex: 2 2;

/* Tres valores: flex-grow | flex-shrink | flex-basis */
flex: 2 2 10%;

/* Valores globales */
flex: inherit;
flex: initial;
flex: unset;
```

### Valores

- `<'flex-grow'>`
  - : Define el [flex-grow](/es/docs/Web/CSS/flex-grow) del elemento flexible. Ver { { Xref_cssnumber ( ) } } para obtener más detalles. Los valores negativos no se consideran válidos. El valor predeterminado es 1 cuando se omite.
- `<'flex-shrink'>`
  - : Define el [`flex-shrink`](/es/docs/Web/CSS/flex-shrink) del elemento flexible. Ver { { Xref_cssnumber ( ) } } para obtener más detalles. Los valores negativos no se consideran válidos. El valor predeterminado es 1 cuando se omite.
- `<'flex-basis'>`
  - : Define el [`flex-basis`](/es/docs/CSS/flex-basis) del elemento flexible. Se acepta cualquier valor válido para las propiedades `width` y `height`. Un tamaño preferente de 0 debe tener una unidad para evitar ser interpretado como flexible. El valor predeterminado es 0% cuando se omite.
- `none`
  - : Esta palabra clave se computa a `0 0 auto`.

### Sintaxis normal

{{csssyntax}}

## Ejemplo

```css
#flex-container {
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: row;
  flex-direction: row;
}

#flex-container > .flex-item {
  -webkit-flex: auto;
  flex: auto;
}

#flex-container > .raw-item {
  width: 5rem;
}
```

```html
<div id="flex-container">
  <div class="flex-item" id="flex">Flex box (click to toggle raw box)</div>
  <div class="raw-item" id="raw">Raw box</div>
</div>
```

```js hidden
var flex = document.getElementById("flex");
var raw = document.getElementById("raw");
flex.addEventListener("click", function () {
  raw.style.display = raw.style.display == "none" ? "block" : "none";
});
```

```css hidden
#flex-container {
  width: 100%;
  font-family: Consolas, Arial, sans-serif;
}

#flex-container > div {
  border: 1px solid #f00;
  padding: 1rem;
}

#flex-container > .raw-item {
  border: 1px solid #000;
}
```

### Resultado

{{EmbedLiveSample('Example','100%','60')}}

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- [Usar las cajas felxibles de CSS](/es/docs/Web/CSS/CSS_Flexible_Box_Layout/Usando_las_cajas_flexibles_CSS/)
