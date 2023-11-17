---
title: calc
slug: Web/CSS/calc
---

{{CSSRef}}{{SeeCompatTable}}

## Sumario

La función CSS `calc()` puede ser usada en cualquier sitio donde {{cssxref("&lt;length&gt;")}}, {{cssxref("&lt;frequency&gt;")}}, {{cssxref("&lt;angle&gt;")}}, {{cssxref("&lt;time&gt;")}}, {{cssxref("&lt;number&gt;")}}, o {{cssxref("&lt;integer&gt;")}} sea requerido. `Con calc()` puedes realizar cálculos para determinar valores de propiedades CSS.

Es posible anidar llamadas a `calc()` dentro de otras llamadas `calc()`.

## Sintaxis

```
calc(expresión)
```

### Values

- expresión
  - : Una expresión matemática cuyo resultado es usado como valor para la propiedad sobre la cual se aplica.

### Expresiones

La expresión puede ser una combinación de los siguientes operadores:

- **+**
  - : Suma
- **-**
  - : Resta
- **\***
  - : Multiplicación. Al menos uno de los argumentos debe ser un {{cssxref("&lt;number&gt;")}}.
- **/**
  - : División. El divisor debe ser un {{cssxref("&lt;number&gt;")}}.

Los operandos en la expresión pueden ser valores tanto positivos como negativos. Puedes usar diferentes unidades para cada valor si lo deseas. Es recomendable el uso de paréntesis para añadir legibilidad a la expresión o para forzar precedencia en las operaciones en caso necesario.

> **Nota:** La división por cero dará lugar a un error generado por el analizador de HTML del navegador.

> **Nota:** las operaciones + y - siempre deben estar separadas de sus operandos mediante espacios en blanco. La expresión `calc(50% -8px)` será tomada como un operando de porcentaje seguido de otro operando de signo negativo (una expresión inválida, dado que no hay operador en medio), mientras que la expresión `calc(50% - 8px)` es un porcentaje seguido de una operación de resta.
> Los operadores `* y` `/` no requieren espacio en blanco, pero es recomendable añadirlo por consistencia.

## Ejemplos

### Añadir un margen a un objeto en pantalla

`calc()` hace más fácil añadir márgenes a un objeto en determinadas circunstancias. En este ejemplo, CSS crea un espacio horizontal de color amarillo que llena el ancho de la ventana con un hueco de 40 pixels en ambos lados:

```css
.banner {
  position: absolute;
  left: 40px;
  width: 90%; /* salvaguarda para navegadores que no reconocen calc() */
  width: calc(100% - 80px);
  border: solid black 1px;
  box-shadow: 1px 2px;
  background-color: yellow;
  padding: 6px;
  text-align: center;
}
```

```html
<div class="banner">This is a banner!</div>
```

{{ EmbedLiveSample('Positioning_an_object_on_screen_with_a_margin', '100%', '60') }}

### Entradas de formulario que se ajustan automáticamente al ancho de su contenedor

Otro caso de uso para `calc()` es asegurar que los campos de un formulario llenan el espacio disponible sin pasarse de los límites de su contenedor mientras mantienen el margen apropiado.

Echémosle un vistazo al CSS:

```css
input {
  padding: 2px;
  display: block;
  width: 98%; /* salvaguarda para navegadores que no reconocen calc() */
  width: calc(100% - 1em);
}

#formbox {
  width: 130px; /* salvaguarda para navegadores que no reconocen calc() */
  width: calc(100% / 6);
  border: 1px solid black;
  padding: 4px;
}
```

El formulario usa 1/6 del ancho disponible. Para asegurar que los campos de entrada tienen el tamaño adecuado, usamos `calc()` de nuevo para establecer el ancho que deberían tener (el de su contenedor) menos 1em. Para probar esto, usaremos el siguiente HTML:

```html
<form>
  <div id="formbox">
    <label>Type something:</label>
    <input type="text" />
  </div>
</form>
```

{{ EmbedLiveSample('Automatically_sizing_form_fields_to_fit_their_container', '100%', '80') }}

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- [Firefox 4: CSS3 calc() ✩ Mozilla Hacks – the Web developer blog](https://hacks.mozilla.org/2010/06/css3-calc/)
