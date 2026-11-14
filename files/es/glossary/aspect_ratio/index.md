---
title: Relación de aspecto
slug: Glossary/Aspect_ratio
l10n:
  sourceCommit: c44003c788a907ef19e0d766e98f29ffca5b6798
---

Una **relación de aspecto** es la relación proporcional entre el ancho y el alto de un elemento o de un {{glossary("viewport")}}. Se representa con un valor {{cssxref("ratio")}}, que consta de dos números.

Tener una relación de aspecto, ya sea inherente, como la de las imágenes y los videos, o establecida de forma explícita, mantiene las proporciones previstas de un elemento. También puedes consultar la relación de aspecto de un elemento o de un viewport, algo útil al desarrollar componentes y diseños flexibles.

En CSS, el tipo de dato {{cssxref("ratio")}} se escribe como `width / height` (por ejemplo, `1 / 1` para un cuadrado o `16 / 9` para el formato panorámico) o como un solo número, en cuyo caso este representa el ancho y el alto vale `1`.

```css
.wideBox {
  aspect-ratio: 5 / 2;
}
.tallBox {
  aspect-ratio: 0.25;
}
```

En SVG, la relación de aspecto se define mediante el atributo [`viewBox`](/es/docs/Web/SVG/Reference/Attribute/viewBox), que consta de cuatro valores. Los dos primeros son las coordenadas de origen X e Y más pequeñas que puede tener el SVG, y los dos últimos son el ancho y el alto, que determinan la relación de aspecto del SVG.

```svg
<svg viewBox="0 0 300 100" xmlns="http://www.w3.org/2000/svg"></svg>
```

En las API de JavaScript, al consultar una relación de aspecto se obtiene un número de coma flotante de doble precisión que representa el ancho dividido entre el alto. También puedes usar JavaScript para establecer la relación de aspecto de un elemento. Por ejemplo, al establecer una restricción de relación de aspecto para un video de 1920x1080 con la propiedad {{domxref("MediaTrackConstraint.aspectRatio")}}, el valor se calcularía como 16/9, o 1920/1080, que equivale a `1.7777777778`:

```js
const constraints = {
  width: 1920,
  height: 1080,
  aspectRatio: 1.777777778,
};

myTrack.applyConstraints(constraints);
```

## Véase también

- Propiedad CSS {{cssxref("aspect-ratio")}}
- Guía [Comprender las relaciones de aspecto](/es/docs/Web/CSS/Guides/Box_sizing/Aspect_ratios)
- Módulo [CSS box sizing](/es/docs/Web/CSS/Guides/Box_sizing)
- Términos relacionados del glosario:
  - {{glossary("intrinsic size", "tamaño intrínseco")}}
- Valores de las propiedades CSS {{cssxref("min-content")}}, {{cssxref("max-content")}} y {{cssxref("fit-content")}}.
