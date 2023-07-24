---
title: "-moz-force-broken-image-icon"
slug: Web/CSS/-moz-force-broken-image-icon
---

{{Non-standard_header}}{{ CSSRef() }}

## Resumen

`-moz-force-broken-image-icon` es una propiedad CSS extendida. El valor `1` fuerza un icono de imagen no encontrada aunque la imagen tenga el atributo `alt`. Cuando el valor es `0` la imagen actuará normalmente y solo mostrará el atributo `alt`.

> **Nota:** Aunque el valor sea `1` el atributo `alt` se seguirá mostrando. Más información debajo.

{{cssinfo}}

## Sintaxis

```
-moz-force-broken-image-icon: <integer>;
```

### Valores

{{cssxref("&lt;integer&gt;")}}

## Ejemplos

```css
img {
  -moz-force-broken-image-icon: 1;
  height: 100px;
  width: 100px;
}
```

```html
<img src="/enlace/roto/imagen.png" alt="Imagen con enlace roto" />
```

{{ EmbedLiveSample('Examples','125','125','/files/4619/broken%20image%20link.png') }}

> **Nota:** A no ser que la imagen tenga una altura y ancho especificados, el icono de imagen rota no se mostrará, pero el atributo alt no se mostrará si el valor de `-moz-force-broken-image-icon` es `1`.

## Notas

- Esta propiedad solo funcionará en los navegadores basados en Gecko
- No se recomienda el uso de esta propiedad. Se debería usar un atributo alt adecuado.

## Ver también

- [Error 58646 en Firefox](https://bugzil.la/58646)
