---
title: repeat()
slug: Web/CSS/repeat
---

{{cssref}}

La función [CSS](/es/docs/Web/CSS) **`repeat()`** representa un fragmento repetido de la lista de la pista, permitiendo un gran número de columnas o renglones que exhiben un patrón recurrente para ser escrito de una forma más compacta.

Esta función puede ser usada en las propiedades CSS Grid {{cssxref("grid-template-columns")}} y {{cssxref("grid-template-rows")}}.

```css
/* <track-repeat> values */
repeat(4, 1fr)
repeat(4, [col-start] 250px [col-end])
repeat(4, [col-start] 60% [col-end])
repeat(4, [col-start] 1fr [col-end])
repeat(4, [col-start] min-content [col-end])
repeat(4, [col-start] max-content [col-end])
repeat(4, [col-start] auto [col-end])
repeat(4, [col-start] minmax(100px, 1fr) [col-end])
repeat(4, [col-start] fit-content(200px) [col-end])
repeat(4, 10px [col-start] 30% [col-middle] auto [col-end])
repeat(4, [col-start] min-content [col-middle] max-content [col-end])

/* <auto-repeat> values */
repeat(auto-fill, 250px)
repeat(auto-fit, 250px)
repeat(auto-fill, [col-start] 250px [col-end])
repeat(auto-fit, [col-start] 250px [col-end])
repeat(auto-fill, [col-start] minmax(100px, 1fr) [col-end])
repeat(auto-fill, 10px [col-start] 30% [col-middle] 400px [col-end])

/* <fixed-repeat> values */
repeat(4, 250px)
repeat(4, [col-start] 250px [col-end])
repeat(4, [col-start] 60% [col-end])
repeat(4, [col-start] minmax(100px, 1fr) [col-end])
repeat(4, [col-start] fit-content(200px) [col-end])
repeat(4, 10px [col-start] 30% [col-middle] 400px [col-end])
```

## Síntaxis

### Valores

- {{cssxref("&lt;length&gt;")}}
  - : Una longitud no negativa.
- {{cssxref("&lt;percentage&gt;")}}
  - : Un porcentaje no negativo relativo con el tamaño en línea del contenedor de la cuadrícula en las pistas de la cuadrícula de columna, y el tamaño del bloque del contenedor de la cuadrícula en las pistas de la cuadrúcula de la fila. Si el tamaño de la rejilla depende del tamaño de sus pistas, entonces el `<percentage>` debe ser tratado como `auto`. El agente de usuario puede ajustar las contribuciones de tamaño intrínseco de la pista al tamaño del contenedor de la rejilla y aumentar el tamaño final de la pista en la cantidad que resultaría en respetar el porcentaje.
- {{cssxref("&lt;flex&gt;")}}
  - : Una dimensión no negativa con la unidad `fr` especificando el factor flexible de la pista. Cada pista de tamaño `<flex>` comparte el espacio restante en proporción a su factor flex
- `max-content`
  - : Representa la contribución mas grande de max-content de los elementos de la cuadrícula ocupando la pista.
- `min-content`
  - : Representa la contribución más pequeña min-content de los elementos de la cuadrícula ocupando la pista.
- `auto`
  - : Como un máximo, idéntico a `max-content`. Como un mínimo representa el mayor tamaño mínimo (como se específica en {{cssxref("min-width")}}/{{cssxref("min-height")}}) de los elementos de la cuadrícula ocupando la pista.
- `auto-fill`
  - : Si el contenedor de cuadrícula tiene un tamaño definido o máximo en el eje relevante, entonces el número de repeticiones es el mayor entero positivo posible que no hace que la cuadrícula desborde su contenedor de cuadrícula. Tratando cada pista con su función de dimensiones máximo de pista (cada valor se utiliza individualmente para definir `grid-template-rows` o `grid-template-columns`), si está definido. De lo contrario, como su función de tamaño mínimo de pista, y teniendo en cuenta la brecha de cuadrícula. Si se desbordara cualquier número de repeticiones, entonces la repetición es `1`. De lo contrario, si el contenedor de la cuadrícula tiene un tamaño mínimo definido en el eje relevante, el número de repeticiones es el número entero positivo más pequeño posible que cumple ese requisito mínimo. De lo contrario, la lista de pistas especificada se repite solo una vez.
- `auto-fit`

  - : Se comporta igual que el autocompletado `auto-fill`, excepto que después de colocar los elementos de la cuadrícula se colapsan las pistas vacías repetidas. Una pista vacía es aquella sin elementos de cuadrícula colocados o que se extienden a través de ella. (Esto puede provocar el colapso de todas las pistas, si están todas vacías).

    Una pista colapsada se trata como si tuviera una única función de tamaño de pista fija de `0px`, y los canales (gutters) a cada lado de ella colapsan.

    Con el fin de encontrar el número de pistas repetidas automáticamente, el agente de usuario distribuye el tamaño de la pista a un valor especificado por el agente de usuario (por ejemplo, `1px)`, para evitar la división por cero.

## Ejemplo

### CSS

```css
#container {
  display: grid;
  grid-template-columns: repeat(2, 50px 1fr) 100px;
  grid-gap: 5px;
  box-sizing: border-box;
  height: 200px;
  width: 100%;
  background-color: #8cffa0;
  padding: 10px;
}

#container > div {
  background-color: #8ca0ff;
  padding: 5px;
}
```

### HTML

```html
<div id="container">
  <div>Este elemento tiene un ancho de 50 pixels.</div>
  <div>Elemento con un ancho flexible.</div>
  <div>Este elemento tiene un ancho de 50 pixels.</div>
  <div>Elemento con un ancho flexible.</div>
  <div>Este elemento tiene un ancho de 100 pixels.</div>
</div>
```

### Resultados

{{EmbedLiveSample("Example", "100%", 200)}}

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}
