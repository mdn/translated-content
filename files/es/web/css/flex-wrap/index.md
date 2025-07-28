---
title: flex-wrap
slug: Web/CSS/flex-wrap
---

## Resumen

La propiedad **`flex-wrap`** de [CSS](/es/docs/Web/CSS) especifica si los elementos "hijos" son obligados a permanecer en una misma línea o pueden fluir en varias líneas. Si la cobertura (wrap) está permitida, esta propiedad también te permite controlar la dirección en la cual serán apilados los elementos.

{{cssinfo}}

Ver [Usando cajas flexibles CSS](/es/docs/Web/Guide/CSS/Cajas_flexibles) para conocer más propiedades e información.

## Sintaxis

```
Sintaxis formal: {{csssyntax("flex-wrap")}}
```

```
flex-wrap: nowrap
flex-wrap: wrap
flex-wrap: wrap-reverse

flex-wrap: inherit
```

### Valores

Se aceptan los siguientes valores:

- `nowrap`
  - : Los elementos flex son distribuidos en una sola línea, lo cual puede llevar a que se desborde el contenedor flex. El valor **cross-start** es equivalente a **start** o **before** según el valor de {{cssxref("flex-direction")}}.
- `wrap`
  - : Los elementos flex son colocados en varias líneas. El valor **cross-start** equivale a **start** o **before** dependiendo del valor `flex-direction` y **cross-end** implicaría lo opuesto a lo especificado por **cross-start**.
- `wrap-reverse`
  - : Actúa como `wrap` pero **cross-start** y **cross-end** están intercambiados.

## Ejemplos

```
element {
  flex-wrap: nowrap;
}
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- [Usando cajas flexibles CSS](/es/docs/Web/Guide/CSS/Cajas_flexibles)
