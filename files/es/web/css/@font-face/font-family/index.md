---
title: font-family
slug: Web/CSS/@font-face/font-family
---

{{CSSRef}}

## Resumen

El descriptor CSS font-family CSS permite al autor especificar el tipo de fuente para un elemento.

La propiedad font-family puede contener varias fuentes a modo de sistema de "seguridad. Si el navegador no soporta la primera, probará con la siguiente y así sucesivamente.

hay dos tipos de nombres de familias de fuentes:

- **family-name** - El nombre de la familia de fuentes, como "times", "courier", "arial", etc.
- **generic-family** - El nombre de la familia genérica , como "serif", "sans-serif", "cursive", "fantasy", "monospace".

Comienza con la fuente que quieras, y acaba siempre con una familia de fuente genérica para permitir al navegador elegir una fuente similar dentro de la familia genérica en caso de que no haya otras fuentes disponibles.

{{cssinfo}}

## Síntaxis

```
font-family: font|initial|inherit;
```

### Valores

**family-name
generic-family**
Un lista priorizada de nombre de familias de fuentes y/o de nombres de familias genéricas.

**`initial`**
Establace el valor por defecto para esta propiedad.

**`inherit`**
Hereda esta propiedad del elemento padre.

**serif**
Fuente genérica con serif como, por ejemplo, el tipo de fuente Times.

**sans-serif**
Fuente genérica sin serif como, por ejemplo, el tipo de fuente Arial.

**fantasy**
Fuente genérica Fantasy.

**monospace**
Fuente genérica Monospace, como por ejemplo Courier.

**cursive**
Fuente genérica cursiva, como por ejemplo Script.

### Síntaxis Formal

{{csssyntax}}

## Ejemplos

Como ejemplo , consideremos la familia de fuentes garamon, es su forma normal, obtendremos el siguiente resultado:

```css
p {
  font-family: "Times New Roman", Georgia, Serif;
}
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}
