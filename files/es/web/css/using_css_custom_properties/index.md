---
title: Uso de propiedades personalizadas (variables) en CSS
slug: Web/CSS/Using_CSS_custom_properties
---

{{cssref}}

En CSS, las **propiedades personalizadas** (también conocidas como **variables**) son entidades definidas por autores de CSS que contienen valores específicos que se pueden volver a utilizar en un documento. Se establecen mediante la notación de propiedades personalizadas (por ejemplo, **`--main-color: black;`**) y se acceden mediante la función {{cssxref("var", "var()")}} (por ejemplo, color: **`var (--main-color);`**).

Sitios web complejos tienen cantidades muy grandes de CSS, a menudo con una gran cantidad de valores repetidos. Por ejemplo, el mismo color se puede utilizar en cientos de lugares diferentes, lo cual requiere buscar y reemplazar globalmente si necesitamos cambiar ese color. Las variables CSS permiten que un valor se almacene en un lugar y luego se haga referencia en varios otros lugares. Un beneficio adicional son los identificadores semánticos. Por ejemplo **`--main-text-color`** es más fácil de entender que **`#00ff00`**, especialmente si este mismo color también se utiliza en otro contexto.

Las variables CSS están sujetas a la cascada, y heredan su valor de su padre.

## Uso Básico

Para declarar propiedades personalizadas (variables) usamos un nombre que comienze con dos guiones (`--`), y un valor que puede ser cualquier valor válido de CSS. Como cualquier otra propiedad, la escribimos dentro de un set de reglas de estilo, algo así:

```css
elemento {
  --main-bg-color: brown;
}
```

Ten en cuenta que el selector que usemos para las reglas de estilo define el ámbito (scope) en el que podremos usar la propiedad personalizada (variable). Una buena práctica común es declarar variables en la pseudo-clase {{cssxref(":root")}}, y así aplicarlas globalmente al documento HTML:

```css
:root {
  --main-bg-color: brown;
}
```

Sin embargo, esto no tiene por qué ser siempre así: podrían haber muy buenas razones para querer limitar el ámbito de tus propiedades personalizadas.

> **Nota:** Los nombres de propiedades personalizadas son case sensitive (distinguen entre mayúsuculas y minúsculas) — `--my-color` será tratado como una propiedad personalizada distinta a `--My-color`.

Como mencionamos anteriormente, para acceder al valor de una propiedad personalizada usamos el nombre de la propiedad dentro de la función {{cssxref("var()")}}, en lugar de cualquier otro valor normal:

```css
elemento {
  background-color: var(--main-bg-color);
}
```

## Primeros pasos con propiedades personalizadas (variables)

Comencemos con este simple CSS que colorea elementos de diferentes clases con el mismo color:

```css
.uno {
  color: white;
  background-color: brown;
  margin: 10px;
  width: 50px;
  height: 50px;
  display: inline-block;
}

.dos {
  color: white;
  background-color: black;
  margin: 10px;
  width: 150px;
  height: 70px;
  display: inline-block;
}
.tres {
  color: white;
  background-color: brown;
  margin: 10px;
  width: 75px;
}
.cuatro {
  color: white;
  background-color: brown;
  margin: 10px;
  width: 100px;
}

.cinco {
  background-color: brown;
}
```

Lo aplicaremos a este HTML:

```html
<div>
  <div class="uno">1:</div>
  <div class="dos">2: Texto <span class="cinco">5 - más texto</span></div>
  <input class="tres" />
  <textarea class="cuatro">4: Lorem Ipsum</textarea>
</div>
```

... lo cual nos lleva a esto:

{{EmbedLiveSample("sample1",600,180)}}

Observa la repetición en el CSS. El color de fondo se pone a marrón (`brown`) en varios lugares. Para algunas declaraciones CSS, es posible declarar esto más alto en la cascada y dejar que la herencia CSS resuelva este problema de forma natural. Para proyectos no triviales, esto no siempre es posible. Al declarar una variable en la pseudo-clase {{cssxref(":root")}}, podemos evitar repetición usando la variable.

```css
:root {
  --main-bg-color: brown;
}

.uno {
  color: white;
  background-color: var(--main-bg-color);
  margin: 10px;
  width: 50px;
  height: 50px;
  display: inline-block;
}

.dos {
  color: white;
  background-color: black;
  margin: 10px;
  width: 150px;
  height: 70px;
  display: inline-block;
}
.tres {
  color: white;
  background-color: var(--main-bg-color);
  margin: 10px;
  width: 75px;
}
.cuatro {
  color: white;
  background-color: var(--main-bg-color);
  margin: 10px;
  width: 100px;
}

.cinco {
  background-color: var(--main-bg-color);
}
```

Esto conduce al mismo resultado que el ejemplo anterior pero permite una declaración canónica de la propiedad deseada; muy útil si queremos cambiar el valor en toda la página más tarde.

## Herencia de propiedades personalizadas

Las propiedades personalizadas heredan. Lo que significa que si no se establece ningún valor para una propiedad personalizada en un elemento dado, se utiliza el valor de su elemento padre. Veámos el siguiente HTML:

```html
<div class="uno">
  <div class="dos">
    <div class="tres"></div>
    <div class="cuatro"></div>
  </div>
</div>
```

... con el siguiente CSS:

```css
.dos {
  --test: 10px;
}

.tres {
  --test: 2em;
}
```

En este caso, los resultados de `var(--test)` son:

- Para el elemento `class="dos"`: `10px`
- Para el elemento `class="tres"`: `2em`
- Para el elemento `class="cuatro"`: `10px` (heredado de su padre)
- Para el elemento `class="uno"`: _valor no válido_, que es el valor predeterminado de cualquier propiedad personalizada.

Tenga en cuenta que éstas son propiedades personalizadas, no variables reales como podemos encontrar en otros lenguajes de programación. El valor se calcula donde sea necesario, no se almacena para su uso en otras reglas. Por ejemplo, no se puede declarar una propiedad para un elemento y esperar recuperarla en las reglas del descendiente de un hermano. La propiedad sólo está configurada para el selector que coincida y sus descendientes, como cualquier CSS normal.

## Valores de sustitución (fallback) de propiedades personalizadas

Utilizando [`var()`](/es/docs/Web/CSS/var) podemos definir múltiples **valores de sustitución (fallback)** que se usarán cuando la variable dada no está definida aún; esto puede ser útil cuando se trabaja con [Custom Elements](/es/docs/Web/Web_Components/Using_custom_elements) y [Shadow DOM](/es/docs/Web/Web_Components/Using_shadow_DOM).

> **Nota:** **Los valores de sustitución (fallback) no se usan para arreglar problemas de compatibilidad del navegador.** Si el navegador no tiene soporte para Propiedades Personalizadas de CSS, el valor de fallback no es de ayuda. **Es simplemente un respaldo para que aquellos navegadores que sí soportan Propiedades Personalizadas de CSS** puedan elegir un valor diferente en caso de que la variable no se haya definido o contenga un valor no válido.

El primer argumento a la función es el nombre de la [propiedad personalizada](https://www.w3.org/TR/css-variables/#custom-property)que se va a sustituir. El segundo argumento a la función, si se proporciona, es un valor de reserva, que se utiliza como valor de sustitución cuando la [propiedad personalizada](https://www.w3.org/TR/css-variables/#custom-property)referenciada no es válida. La función solo acepta dos parámetros, asignando todo lo que después de la primera coma como el segundo parámetro. Si ese segundo parámetro es inválido, por ejemplo una lista de valores separados por comas, el fallback fallará. Por ejemplo:

```css
.dos {
  color: var(--my-var, red); /* Rojo (red) si --my-var no esta definida */
}

.tres {
  background-color: var(
    --my-var,
    var(--my-background, pink)
  ); /* Rosa (pink) si my-var y --my-background no están definidas */
}

.tres {
  background-color: var(
    --my-var,
    --my-background,
    pink
  ); /* Invalido: "--background, pink" */
}
```

Como vemos en el segundo ejemplo de arriba, la manera correcta de incluir más de un fallback es usar una propiedad personalizada como fallback (la cual tiene su propio fallback). Esta técnica se ha visto que puede causar problemas de rendimiento al tomar más tiempo analizar las variables.

> **Nota:** La sintaxis del fallback, como la de las [propiedades personalizadas](https://www.w3.org/TR/css-variables/#custom-property), permite comas. Por ejemplo, `var(--foo, red, blue)` define un fallback de `red, blue` — es decir, cualquier cosa entre la primera coma y el final de la función se considera un valor de fallback.

## Validez y valores

El clásico concepto de validez en CSS, vinculado a cada propiedad, no es muy útil con respecto a las propiedades personalizadas. Cuando se analizan los valores de las propiedades personalizadas, el navegador no sabe dónde se utilizarán, por lo que debe considerar casi todos los valores como _válidos_.

Desafortunadamente, estos valores válidos se pueden usar, a través de la notación funcional `var()`, en un contexto en el que tal vez no tengan sentido. Propiedades y variables personalizadas pueden llevar a declaraciones CSS no válidas, dando lugar al nuevo concepto de _válido en tiempo calculado._

## ¿Qué pasa con los valores inválidos?

Cuando el navegador encuentra una sustitución inválida con `var()`, se usará el valor inicial o heredado.

Considera el siguiente fragmento:

### HTML

```html
<p>This paragraph is initial black.</p>
```

### CSS

```css
:root {
  --text-color: 16px;
}
p {
  color: blue;
}
p {
  color: var(--text-color);
}
```

Como esperaríamos, el navegador sustituye `var(--text-color)` con el valor de `--text-color`, pero `16px` no es un valor válido para la propiedad {{cssxref("color")}}. Después de la sustitución, la propiedad no tiene sentido. El navegador maneja esta situación en dos pasos:

1. Comprueba si la propiedad color se puede heredar. Sí, pero el elemento `<p>` no tiene un padre con una propiedad color. Así que pasamos al siguiente paso.
2. Toma el valor de su **valor inicial por defecto**.

### Resultado

{{EmbedLiveSample('What_happens_with_invalid_variables')}}

El color del párrafo no será azul (blue) porque la sustición inválida se reemplaza con el valor inicial, no el fallback. Si hubiéramos escrito `color: 16px` sin ninguna sustitución de variables, sería entonces un error de sintaxis. La declaración anterior será usada.

## Valores en JavaScript

Para utilizar los valores de las propiedades personalizadas en JavaScript, es como las propiedades estándar.

```js
// Obtener la variable desde el estilo inline
element.style.getPropertyValue("--my-var");

// Obtener variable desde cualquier lugar
getComputedStyle(element).getPropertyValue("--my-var");

// Establecer variable en estilo inline
element.style.setProperty("--my-var", jsVar + 4);
```

## Ver también

- [`custom properties`](/es/docs/Web/CSS/--*)
