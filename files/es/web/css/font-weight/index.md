---
title: font-weight
slug: Web/CSS/font-weight
---

{{CSSRef}}

## Resumen

La propiedad **`font-weight`** de [CSS](/es/docs/CSS) especifica el peso o grueso de la letra. Algunos tipos de letra sólo están disponibles en `normal` y `bold`.

{{cssinfo}}

## Sintaxis

```css
font-weight: normal;
font-weight: bold;

/* Relativo al padre */
font-weight: lighter;
font-weight: bolder;

font-weight: 100;
font-weight: 200;
font-weight: 300;
font-weight: 400;
font-weight: 500;
font-weight: 600;
font-weight: 700;
font-weight: 800;
font-weight: 900;

/* Valores globales */
font-weight: inherit;
font-weight: initial;
font-weight: unset;
```

### Valores

- normal
  - : Peso/grueso normal de la fuente. Igual que 400.
- bold
  - : Grueso ancho (_negrita_). Igual que 700.
- lighter
  - : Corresponde a un tipo de fuente menos grueso que el tipo del elemento padre (dentro de los valores disponibles).
- bolder
  - : Corresponde a un tipo de fuente más grueso que el tipo del elemento padre (dentro de los valores disponibles).
- 100, 200, 300, 400, 500, 600, 700, 800, 900
  - : Pesos numéricos para los tipos de fuente que nos permiten más flexibilidad que `normal - bold`. Si el peso especificado no existe en el tipo de fuente escogido, un valor entre 600 y 900 se presentará con el valor más próximo disponible para dar una letra más oscura. De igual forma, un valor entre 100 y 500 se presentará con el valor más próximo disponible para dar una letra más clara. Esto significa que para los tipos de letra que sólo dispongan de normal y bold, cualquier valor entre 100 y 500 será normal y entre 600 y 900, será bold.

## Ejemplos

### HTML

```html
<p>
  Alice was beginning to get very tired of sitting by her sister on the bank,
  and of having nothing to do: once or twice she had peeped into the book her
  sister was reading, but it had no pictures or conversations in it, 'and what
  is the use of a book,' thought Alice 'without pictures or conversations?'
</p>

<div>
  I'm heavy<br />
  <span>I'm lighter</span>
</div>
```

### CSS

```css
/* Poner texto del párrafo en negrita. */
p {
  font-weight: bold;
}

/* Poner texto del div a dos pasos más oscuro que lo
   normal pero menos que una negrita estándar. */
div {
  font-weight: 600;
}

/* Sets text enclosed within span tag
   to be one step lighter than the parent. */
span {
  font-weight: lighter;
}
```

### Resultado

{{EmbedLiveSample("Examples","400","300")}}

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}
