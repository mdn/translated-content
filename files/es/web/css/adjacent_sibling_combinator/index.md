---
title: Selectores de hermanos adyacentes
slug: Web/CSS/Adjacent_sibling_combinator
---

{{CSSRef("Selectors")}}

Se hace referencia a este selector como selector adyacente o selector del próximo hermano. Sólo seleccionará un elemento especificado que esté inmediatamente después de otro elemento especificado.

## Síntaxis

```
elemento_anterior + elemento_afectado { estilos }
```

## Ejemplo

```css
li:first-of-type + li {
  color: red;
}
```

```html
<ul>
  <li>Uno</li>
  <li>Dos</li>
  <li>Tres</li>
</ul>
```

{{EmbedLiveSample('Example_1', 200, 100)}}

## Ejemplo

Otro caso podría ser dar estilos a un span que se use de pie de foto de los siguientes elementos {{HTMLElement("img")}} :

```css
img + span.caption {
  font-style: italic;
}
```

que coincidiría con los siguientes elementos {{HTMLElement("span")}} :

```html
<img src="photo1.jpg" /><span class="caption">The first photo</span>
<img src="photo2.jpg" /><span class="caption">The second photo</span>
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- [Selectores de hermanos generales](/es/docs/Web/CSS/Selectores_hermanos_generales)
