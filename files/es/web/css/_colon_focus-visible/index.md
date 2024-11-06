---
title: ":focus-visible"
slug: Web/CSS/:focus-visible
---

{{CSSRef}}

La pseudo-clase **`:focus-visible`** se aplica mientras un elemento coincide con la pseudo-clase {{CSSxRef(":focus")}} y el UA ([Agente de Usuario](/es/docs/Glossary/User_agent)) determina mediante heurística que el foco debe hacerse evidente en el elemento. (Muchos navegdores muestras un "anillo de enfoque" por defecto en este caso.

Este selector es útil para proporcionar un indicador de enfoque diferente basado en la modalidad de entrada del usuario (ratón vs teclado).

Nótese que Firefox soporta una funcionalidad similar a través de una pseudo-clase prefijada — {{CSSxRef(":-moz-focusring")}}.

## Sintaxis

{{CSSSyntax}}

## Ejemplos

### Ejemplos básicos

En este ejemplo, el selector `:focus-visible` usa el comportamiento del UA para deteminar cuándo emparejar. Compara lo que sucede cuando haces clic en los diferentes controles con un ratón con lo que sucede cuando los atraviesas con el teclado. Note la diferencia de comportamiento con respecto a los elementos con estilo `:focus`.

```html
<input value="Default styles" /><br />
<button>Default styles</button><br />
<input class="focus-only" value=":focus only" /><br />
<button class="focus-only">:focus only</button><br />
<input class="focus-visible-only" value=":focus-visible only" /><br />
<button class="focus-visible-only">:focus-visible only</button>
```

```css
input,
button {
  margin: 10px;
}

.focus-only:focus {
  outline: 2px solid black;
}

.focus-visible-only:focus-visible {
  outline: 4px dashed darkorange;
}
```

{{EmbedLiveSample("Basic_example", "100%", 300)}}

### Mostrando selectivamente el indicador de enfoque

Un control personalizado, como un botón de [elemento personalizado](/es/docs/User:Andreas_Wuest/Custom_Elements), puede utilizar `:focus-visible` para aplicar selectivamente un indicador de enfoque sólo en el enfoque del teclado. Esto coincide con el comportamiento de enfoque nativo para controles como {{htmlelement("button")}}.

```html
<custom-button tabindex="0" role="button">Click Me</custom-button>
```

```
custom-button {
  display: inline-block;
  margin: 10px;
}

custom-button:focus {
  /* Provide a fallback style for browsers
     that don't support :focus-visible */
  outline: none;
  background: lightgrey;
}

custom-button:focus:not(:focus-visible) {
  /* Remove the focus indicator on mouse-focus for browsers
     that do support :focus-visible */
  background: transparent;
}

custom-button:focus-visible {
  /* Draw a very noticeable focus style for
     keyboard-focus on browsers that do support
     :focus-visible */
  outline: 4px dashed darkorange;
  background: transparent;
}
```

{{EmbedLiveSample("Selectively_showing_the_focus_indicator", "100%", 300)}}

## Polyfill

You can polyfill `:focus-visible` usando [focus-visible.js](https://github.com/WICG/focus-visible).

## Problemas de accesibilidad

### Baja visión

Asegúrate de que el indicador de enfoque visual pueda ser visto por personas con baja visión. Esto también beneficiará a cualquier persona que utilice una pantalla en un espacio brillantemente iluminado (como el exterior en el sol). [WCAG 2.1 SC 1.4.11 Contraste Sin Texto](https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast.html) requiere que el indicador de enfoque visual sea al menos 3 a 1.

- Indicadores de enfoque visual accesibles: [Déle a su sitio un poco de enfoque! Consejos para diseñar indicadores de enfoque útiles y utilizables](https://www.deque.com/blog/give-site-focus-tips-designing-usable-focus-indicators/)

### Cognición

Puede que no sea obvio por qué el indicador de enfoque aparece y desaparece si una persona está utilizando formas mixtas de entrada. Para los usuarios con preocupaciones cognitivas, o que tienen menos conocimientos tecnológicos, esta falta de comportamiento consistente para los elementos interactivos puede ser confusa.

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Vea también

- {{CSSxRef(":focus")}}
- {{CSSxRef(":focus-within")}}
