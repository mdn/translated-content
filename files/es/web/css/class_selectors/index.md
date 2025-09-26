---
title: Selectores de clase
slug: Web/CSS/Class_selectors
---

En un documento HTML, los selectores de clase buscan un elemento basado en el contenido de su atributo `class`. El atributo [`class`](/es/docs/Web/HTML/Reference/Global_attributes#class) está definido como una lista de elementos separados por espacio, y uno de esos elementos debe coincidir exactamente con el nombre de clase dado en el selector.

## Sintaxis

```
.classname { style properties }
```

Nótese que esto es equivalente al siguiente {{Cssxref("Attribute_selectors", "selector de atributo")}}:

```
[class~=classname] { style properties }
```

## Ejemplo

### CSS

```css
span.classy {
  background-color: DodgerBlue;
}
```

### HTML

```html
<span class="classy">Aquí hay un span con algo de texto.</span>
<span>Aquí hay otro.</span>
```

{{EmbedLiveSample('Ejemplo', 200, 50)}}

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}
