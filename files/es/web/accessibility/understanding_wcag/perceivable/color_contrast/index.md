---
title: Contraste del color
slug: Web/Accessibility/Understanding_WCAG/Perceivable/Color_contrast
---

El [contraste del color](https://www.w3.org/TR/WCAG21/#dfn-contrast-ratio) entre el fondo y el contenido del primer plano (que suele ser texto) debe ser lo suficientemente alto como para garantizar la legibilidad.

Al diseñar interfaces legibles para diferentes capacidades de visión, las directrices de la WCAG recomiendan las siguientes relaciones de contraste:

| Tipo de contenido                                                                       | Relación mínima (nivel AA) | Relación mejorada (nivel AAA) |
| --------------------------------------------------------------------------------------- | -------------------------- | ----------------------------- |
| Cuerpo de texto                                                                         | 4.5 : 1                    | 7 : 1                         |
| Texto a gran escala (120-150% mayor que el cuerpo de texto)                             | 3 : 1                      | 4.5 : 1                       |
| Componentes activos de la interfaz de usuario y objetos gráficos como iconos y gráficos | 3 : 1                      | No definido                   |

Estas proporciones no se aplican al texto "incidental", como controles inactivos, logotipos o texto puramente decorativo.

Consulta la sección [Solución](#solución) a continuación para obtener más información.

Tener un buen contraste de color en tu sitio web beneficia a todos tus usuarios, pero es particularmente beneficioso para los que tienen cierto tipo de ceguera al color y otras afecciones similares, como los que experimentan una baja sensibilidad al contraste y tienen dificultades para diferenciar colores parecidos. Esto se debe a que no distinguen las áreas brillantes y oscuras con tanta facilidad como las personas que no tienen esa discapacidad, y por lo tanto tienen problemas para ver los bordes y otros detalles.

Es bueno tener un diseño atractivo en tu sitio web, pero el diseño es inútil si tus usuarios no pueden leer el contenido.

## Ejemplos

Veamos algunos ejemplos simples con código HTML y CSS:

```html
<div class="good">Buen contraste</div>
<div class="bad">Mal contraste</div>
```

```css
div {
  /* General div styles here */
}

.good {
  background-color: #fae6fa;
}

.bad {
  background-color: #400064;
}
```

Ambos fragmentos de texto tienen color negro por defecto.

### Ejemplo bueno

El `<div>` "good" tiene un color de fondo púrpura claro, lo que hace que el texto sea fácil de leer:

```html hidden
<div class="good">Good contrast</div>
```

```css hidden
div {
  font-family: sans-serif;
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
  width: 250px;
  padding: 30px;
  border-radius: 20px;
  box-shadow: 1px 1px 1px black;
}

.good {
  background-color: #fae6fa;
}
```

{{EmbedLiveSample('example1', '100%', '100')}}

### Ejemplo malo

El `<div>` "bad", por otro lado, tiene un color de fondo púrpura muy oscuro, lo que hace que el texto sea mucho más difícil de leer:

```html hidden
<div class="bad">Bad contrast</div>
```

```css hidden
div {
  font-family: sans-serif;
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
  width: 250px;
  padding: 30px;
  border-radius: 20px;
  box-shadow: 1px 1px 1px black;
}

.bad {
  background-color: #400064;
}
```

{{EmbedLiveSample('example2', '100%', '100')}}

## Solución

Al elegir un esquema de color para tu sitio web, selecciona colores de primer plano y de fondo que tengan un buen contraste. Haz que el contraste de color sea lo mejor posible dentro de las limitaciones de tu diseño — preferiblemente elige el nivel AAA (ver 1.4.6 más abajo), pero al menos cumple con el nivel AA (ver 1.4.3 más abajo).

Si incluyes contenido no textual, como vídeo o animación, debes seguir 1.4.11 (nuevamente, ver más abajo).

Para verificar el contraste a medida que seleccionas los colores puedes utlizar una herramienta como [Color Contrast Checker](http://webaim.org/resources/contrastchecker/) de WebAIM.

También puedes comprobar el contraste de color sobre la marcha utilizando las herramientas para desarrolladores de Firefox— ver nuestra guía [Accessibility inspector](/es/docs/Tools/Accessibility_inspector), y en particular la sección [Check for accessibility issues](/es/docs/Tools/Accessibility_inspector#Check_for_accessibility_issues). Prueba a usarlo en los ejemplos en vivo en la sección de descripción.

## Criterios de conformidad relacionados con WCAG

- [1.4.3 Contraste mínimo (AA)](https://www.w3.org/TR/WCAG21/#contrast-minimum)

  - : El contraste de color entre el fondo y el contenido del primer plano debe tener un nivel mínimo para garantizar la legibilidad:

    - El texto y el fondo deben tener una relación de contraste de al menos 4.5:1.
    - Los encabezados (o simplemente el texto más grande) deben tener una relación de contraste de al menos 3:1. El texto más grande se define como de al menos 18pt, o 14pt en negrita.

- [1.4.6 Contraste mejorado (AAA)](https://www.w3.org/TR/WCAG21/#contrast-enhanced)

  - : Esto sigue y se basa en el criterio 1.4.3.

    - El texto y el fondo deben tener una relación de contraste de al menos 7:1.
    - Los encabezados (o simplemente el texto más grande) deben tener una relación de contraste de al menos 4.5:1.

- [1.4.11 Contraste no textual (AA)](https://www.w3.org/TR/WCAG21/#non-text-contrast) (añadido en 2.1)
  - : Debe haber una relación mínima de contraste de color de 3 a 1 para los componentes de la interfaz de usuario y los objetos gráficos.

## Ver también

- [Color and color contrast](/es/docs/Learn/Accessibility/CSS_and_JavaScript#Color_and_color_contrast)
- [Multiple labels](/es/docs/Learn/HTML/Forms/How_to_structure_an_HTML_form#Multiple_labels)
- [Understanding Non-Text Contrast](https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast.html)
