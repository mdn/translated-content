---
title: var()
slug: Web/CSS/var
---

{{CSSRef}}{{SeeCompatTable}}

La función **`var()`** puede ser utilizada como valor en cualquier propiedad de un elemento. La función var() no puede ser usada como nombre de una propiedad, selector o cualquier cosa que no sea un valor de propiedad. (Hacerlo provoca normalmente una sintaxis erronea o bien un valor que no tiene conexión con la variable).

## Sintaxis

El primer parámetro que recibe la función es el nombre de la custom property que será reemplazada. Se puede utilizar un segundo parámetro opcional como fallback de el primero. Si la custom property referenciada por el primer parámetro no es válida, entonces la función utiliza el valor del segúndo parámetro.

{{csssyntax}}

### Valores

- \<custom-property-name>
  - : El nombre de la custom property a la que se hace referencia, representada por un identificador válido, es decir, cualquier nombre que comience por dos guiones. Las "custom properties" son para uso exclusivo de autores y usuarios. CSS no dará nunca un significado más alla del que se detalla aquí.
- \<declaration-value>
  - : El valor por defecto de la custom property en caso de que la custom property referenciada sea inválida. Este valor puede contener cualquier caracter salvo algunos con significado especial como saltos de linea, llaves sin cerrar, exclamaciones o puntos y comas .

## Ejemplos

```css
:root {
  --main-bg-color: pink;
}

body {
  background-color: var(--main-bg-color);
}
```

```css
/* Fallback */
/* En el estilo del componente: */
.component .header {
  color: var(--header-color, blue);
}

.component .text {
  color: var(--text-color, black);
}

/* En el estilo de la aplicación: */
.component {
  --text-color: #080; /* header-color no está definido y por lo tanto permanece con el valor "blue" definido como fallback */
}
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- [Usando variables CSS](/es/docs/Web/CSS/Using_CSS_variables)
