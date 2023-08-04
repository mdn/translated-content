---
title: min()
slug: Web/CSS/min
---

{{CSSRef}}

La [función](/es/docs/Web/CSS/CSS_Functionals) [CSS](/es/docs/Web/CSS) **`min()`** permite establecer el valor mas pequeño (mas negativo) de una lista de expresiones separadas por coma como el valor de una propiedad CSS. La función `min()` puede ser usada donde quiera que {{CSSxRef("&lt;length&gt;")}}, {{CSSxRef("&lt;frequency&gt;")}}, {{CSSxRef("&lt;angle&gt;")}}, {{CSSxRef("&lt;time&gt;")}}, {{CSSxRef("&lt;percentage&gt;")}}, {{CSSxRef("&lt;number&gt;")}}, o {{CSSxRef("&lt;integer&gt;")}} esté permitido.

{{EmbedInteractiveExample("pages/css/function-min.html")}}

En el primer ejemplo anterior, el ancho será al menos 200px, pero será menor si el viewport es menor de 400px de ancho (en tal caso 1vw sería 4px, así 50vw sería 200px). En otras palabras, el ancho máximo es 200px. Piensa en el valor de `min()` como el máximo valor que una propiedad puede tener.

## Sintaxis

La funcion `min()` toma uno o mas expresiones separadas por coma como sus parametros, y usa el valor mas pequeño de esas expresiones como su valor.

Las expresiones pueden ser expresiones matemáticas (usando operadores aritmeticos), valores literales, u otras expresiones, tales como {{CSSxRef("attr", "attr()")}}, que se evaluan a un tipo de argumento válido (like {{CSSxRef("&lt;length&gt;")}}).

Se pueden usar distintas unidades de medida para cada valor en la expresion, si se desea. Tambien puede usar parentesis para establecer orden de percedencia si lo requiere.

- Expresiones matematicas que involucran porcentajes para los anchos y altos en columnas de tabla, grupos de columnas de tabla, filas de tablas, y celdas de tablas en ambos layout fijo y tablas pueden ser tratados como si se hubiera especificado `auto`
- Es permitido anidar `max()` y otros funciones `min()` como valores de expresiones. Las expresiones son completamente matematicas asi que puede usarse adicion directa, resta, multiplicacion y division sin usar la funcion `calc()` en si.
- La expresion pueden ser valores combinando los operadores de adicion ( + ), resta ( - ), multiplicacion ( \* ) y division ( / ) , aplicando las reglas estandares de precedencia de operadores. Asegurese de poner un espacio en cada lado de los operandos de + y -. Los oprandos en la expresion pueden ser cualquier valor de sintaxis `<length>`.
- Usted puede (y con frecuencia necesitara) combinar los valores `min()` y `max()`, o usar `min()` dentro de las funciones `clamp()` o `calc()`.
- Usted puede proveer mas de 2 argumentos, si tiene multiples restricciones para aplicar.

### Sintaxis formal

{{CSSSyntax}}

## Probemas de accesibilidad

Cuando use `min()` para establecer el maximo valor de fonr size, asegurese de que la fuente todavia podra ser escalada por lo menos al 200% para mas legibilidad (sin tecnologia asistente como la funcion de zoom).

- [MDN Understanding WCAG, Guideline 1.4 explanations](/es/docs/Web/Accessibility/Understanding_WCAG/Perceivable#Guideline_1.4_Make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Understanding Success Criterion 1.4.4 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-scale.html)

## Ejemplos

### Setting a maximum size for a label and input

Otro caso de uso para las funciones CSS es establecer la maxima longitud en controles enformularios responsive: habilitando el ancho de los labels y los inputs para encogerse como lo hace el ancho del formulario

Veamos algo de CSS:

```css
input,
label {
  padding: 2px;
  box-sizing: border-box;
  display: inline-block;
  width: min(40%, 400px);
  background-color: pink;
}

form {
  margin: 4px;
  border: 1px solid black;
  padding: 4px;
}
```

Aquí, el formulario en si mismo, junto con el margen, borde y padding, será de 100% del ancho de su padre. Declaramos el input y el label para que sean menores ente el 40% del ancho del formulario hasta el padding o de 400px, el que sea menor. En otras palabras, lo mas ancho que el label y el input pueden ser es de 400px. Lo mas estrecho que serán es 40% del ancho del formulario, el cual en pantallas de relojes inteligentes es muy pequeño.

```html
<form>
  <label>Escribe algo:</label>
  <input type="text" />
</form>
```

{{EmbedLiveSample("Setting_a_maximum_size_for_a_label_and_input", "100%", "110")}}

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- {{CSSxRef("calc", "calc()")}}
- {{CSSxRef("clamp", "clamp()")}}
- {{CSSxRef("max", "max()")}}
- [CSS Values](/es/docs/Learn/CSS/Introduction_to_CSS/Values_and_units)
