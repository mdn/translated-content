---
title: clip
slug: Web/CSS/clip
translation_of: Web/CSS/clip
---

{{CSSRef}}{{deprecated_header}}

## Resumen

La propiedad de CSS `clip` define qué porción de un elemento es visible. La propiedad `clip` se aplica solamente sobre elementos con {{ cssxref("position","position:absolute") }} o {{cssxref("position", "position:fixed")}}.

> **Advertencia:** This property is deprecated. Use {{cssxref("clip-path")}} instead.

{{cssinfo}}

## Sintaxis

```
Sintaxis formal: {{csssyntax("clip")}}
```

```
clip: rect(1px, 10em, 3rem, 2ch)
clip: auto

clip: inherit
```

### Valores

- `<shape>`

  - : Una forma rectangular del formulario

    ```
    rect(<top>, <right>, <bottom>, <left>)   /* sintaxis estándar */
    ```

    o

    ```
    rect(<top> <right> <bottom> <left>)      /* sintaxis compatible inversa */
    ```

    donde `<top>` y `<bottom>` especifícan desplazamientos de la _esquina del borde superior_ de la caja, y `<right>`, y `<left>` especifican desplazamientos de la _esquina del borde izquiedo_ de la caja.

    `<top>`, `<right>`, `<bottom>`, y `<left>` pueden cada uno tenerun valor {{cssxref("&lt;length&gt;")}} o `auto`.

- `auto`
  - : El elemento no se recorta (valor por defecto)

## Ejemplos

```css
p { border:dotted;  position:relative; }

#img2 {
  position:absolute;  left:263px;

  clip: rect(40px, 200px, 150px, 30px);
  /* sintáxis estándar, no soportada por Internet Explorer 4-7 */
}

#img3 {
  position: absolute; left:526px;

  clip: rect(40px  200px  150px  30px);
  /* sintáxis no-estándar, pero soportada por todos los exploradores importantes incluyendo Firefox y IE */
}
```

![hut.jpg](/@api/deki/files/3613/=hut.jpg) ![hut.jpg](/@api/deki/files/3613/=hut.jpg) ![hut.jpg](/@api/deki/files/3613/=hut.jpg)

## Especificaciones

| Especificación                                                                   | Estado                                   | Comentario                     |
| -------------------------------------------------------------------------------- | ---------------------------------------- | ------------------------------ |
| {{ SpecName('CSS3 Transitions', '#animatable-css', 'clip') }} | {{ Spec2('CSS3 Transitions') }} | Define `clip` como animatable. |
| {{ SpecName('CSS2.1', 'visufx.html#clipping', 'clip') }}     | {{ Spec2('CSS2.1') }}             |                                |

## Compatibilidad entre exploradores

{{Compat("css.properties.clip")}}

## Ver también

- Propiedades CSS relacionadas: {{ cssxref("text-overflow") }}, {{ cssxref("white-space") }}, {{ Cssxref("overflow-x") }}, {{ Cssxref("overflow-y") }}, {{ Cssxref("overflow") }}, {{ Cssxref("display") }}, {{ Cssxref("position") }}
