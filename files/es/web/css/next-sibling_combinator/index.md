---
title: Selectores de hermanos adyacentes
slug: Web/CSS/Next-sibling_combinator
---

Se hace referencia a este selector como selector adyacente o selector del próximo hermano. Sólo seleccionará un elemento especificado que esté inmediatamente después de otro elemento especificado.

## Síntaxis

```
elemento_anterior + elemento_afectado { estilos }
```

## Ejemplo

### CSS

```css
li:first-of-type + li {
  color: red;
}
```

### HTML

```html
<ul>
  <li>Uno</li>
  <li>Dos</li>
  <li>Tres</li>
</ul>
```

### Resultado

{{EmbedLiveSample('Ejemplo', 200, 100)}}

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- [Selectores de hermanos generales](/es/docs/Web/CSS/Subsequent-sibling_combinator)
