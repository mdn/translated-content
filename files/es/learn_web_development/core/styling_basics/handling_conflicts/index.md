---
title: Solucionar conflictos
slug: Learn_web_development/Core/Styling_basics/Handling_conflicts
l10n:
  sourceCommit: 2b4a2ad5d9ba084a9eaa2f9204102655e7b575c4
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Test_your_skills/Box_model", "Learn_web_development/Core/Styling_basics/Test_your_skills/Cascade", "Learn_web_development/Core/Styling_basics")}}

El objetivo de esta lección es profundizar tu comprensión de algunos de los conceptos más fundamentales de CSS —la cascada, la especificidad y la herencia— que controlan cómo se aplica el CSS al HTML y cómo se resuelven los conflictos entre declaraciones de estilo.

Aunque trabajar en esta lección puede parecer poco relevante de forma inmediata y algo más académico que otras partes del curso, ¡comprender estos conceptos te ahorrará muchos problemas más adelante! Te animamos a trabajar esta sección con detenimiento y a comprobar que entiendes los conceptos antes de continuar.

<table>
  <tbody>
    <tr>
      <th scope="row">Prerrequisitos:</th>
      <td>
        Conceptos básicos de HTML (estudiar
        <a href="/es/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >Sintaxis HTML básica</a
        >), <a href="/es/docs/Learn_web_development/Core/Styling_basics/Basic_selectors">selectores CSS</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Resultados del aprendizaje:</th>
      <td>
        <ul>
          <li>Comprender cómo pueden entrar en conflicto las reglas en CSS.</li>
          <li>La herencia.</li>
          <li>La cascada.</li>
          <li>Los conceptos principales que rigen el resultado de los conflictos: la especificidad, el orden de origen y la importancia.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Reglas conflictivas

CSS significa **hojas de estilo en cascada** (del inglés, _Cascading Style Sheets_), y esa primera palabra, _cascada_, es increíblemente importante de entender: el modo en que se comporta la cascada es clave para entender CSS.

En algún momento, estarás trabajando en un proyecto y descubrirás que algún CSS que crees que debería aplicarse a un elemento no funciona. A menudo, este problema ocurre cuando creas dos reglas que aplican valores diferentes de la misma propiedad al mismo elemento.

La [**cascada**](/es/docs/Web/CSS/Guides/Cascade/Introduction) y el concepto estrechamente relacionado de la [**especificidad**](/es/docs/Web/CSS/Guides/Cascade/Specificity) son mecanismos que controlan qué regla se aplica cuando surge este tipo de conflicto. Es posible que la declaración que da estilo a tu elemento no sea la que esperas, así que necesitas entender cómo funcionan estos mecanismos.

También es importante aquí el concepto de [**herencia**](/es/docs/Web/CSS/Guides/Cascade/Inheritance), que significa que algunas propiedades CSS heredan por defecto los valores establecidos en el elemento padre del elemento actual, mientras que otras no. Esto también puede provocar un comportamiento inesperado.

Vamos a empezar echando un vistazo rápido a los conceptos clave con los que estamos tratando; después analizaremos cada uno por turno y veremos cómo interactúan entre sí y con tu CSS. Estos conceptos pueden parecer difíciles de entender, pero se volverán más claros a medida que practiques más al escribir CSS.

### Cascada

Las hojas de estilo tienen efecto en [**cascada**](/es/docs/Web/CSS/Guides/Cascade/Introduction). En un nivel muy simple, esto significa que el origen y el orden de las reglas CSS importan. Cuando dos reglas tienen la misma especificidad, se aplica la que se define en último lugar en la hoja de estilo. Existen otros conceptos que también influyen, como las [capas de cascada](/es/docs/Learn_web_development/Core/Styling_basics/Cascade_layers), pero son más avanzados y no los trataremos en detalle aquí.

En el siguiente ejemplo tenemos dos reglas que podrían aplicarse al elemento `<h1>`. El contenido del `<h1>` termina siendo de color azul. Esto se debe a que ambas reglas provienen del mismo origen, tienen un selector de elemento idéntico y, por lo tanto, la misma especificidad, pero gana la última en el orden de origen.

```html live-sample___cascade-simple
<h1>Este es mi encabezado.</h1>
```

```css live-sample___cascade-simple
h1 {
  color: red;
}
h1 {
  color: blue;
}
```

{{EmbedLiveSample("cascade-simple")}}

### Especificidad

La [especificidad](/es/docs/Web/CSS/Guides/Cascade/Specificity) es un algoritmo que el navegador utiliza para decidir qué valor de propiedad se aplica a un elemento. Si varias reglas tienen selectores diferentes que establecen valores distintos para la misma propiedad y apuntan al mismo elemento, la especificidad decide el valor de propiedad que se aplica al elemento. La especificidad es, básicamente, una medida de cuán específica será la selección de un selector:

- Un selector de tipo (elemento) es menos específico: seleccionará todos los elementos de ese tipo que aparezcan en una página, por lo que tiene menos peso. Los selectores de pseudoelemento tienen la misma especificidad que los selectores de elemento normales.
- Un selector de clase es más específico: seleccionará solo los elementos de una página que tengan un valor determinado del atributo `class`, por lo que tiene más peso. Los selectores de atributo y las pseudoclases tienen el mismo peso que una clase.
- Un selector de ID es todavía más específico: solo selecciona un único elemento con un valor determinado de `id`. Por lo tanto, tiene aún más peso.

A continuación tenemos de nuevo dos reglas que podrían aplicarse al elemento `<h1>`. El `<h1>` de abajo termina siendo de color rojo, a pesar de que la declaración `color: blue` aparece más tarde en el orden de origen, porque el selector de clase `main-heading` otorga a su regla una especificidad mayor que la del selector de tipo `h1`. Se aplica la declaración con mayor especificidad, la definida mediante el selector de clase.

```html live-sample___specificity-simple
<h1 class="main-heading">Este es mi encabezado.</h1>
```

```css live-sample___specificity-simple
.main-heading {
  color: red;
}

h1 {
  color: blue;
}
```

{{EmbedLiveSample("specificity-simple")}}

Explicaremos el algoritmo de especificidad más adelante.

### Herencia

La herencia también debe entenderse en este contexto: algunos valores de propiedades CSS establecidos en los elementos padre son heredados por sus elementos hijo, y otros no.

Por ejemplo, si estableces `color` y `font-family` en un elemento, todos los elementos que estén dentro de él también se mostrarán con ese color y esa fuente, a menos que les hayas aplicado directamente valores diferentes de color y fuente.

```html live-sample___inheritance-simple
<p>
  Como se ha establecido que el body tenga un color azul, este se hereda a
  través de sus descendientes.
</p>
<p>
  Podemos cambiar el color aplicando un estilo diferente a un elemento
  específico, como este
  <span>span</span>.
</p>
```

```css live-sample___inheritance-simple
body {
  color: blue;
}

span {
  color: black;
}
```

{{EmbedLiveSample("inheritance-simple")}}

Algunas propiedades no se heredan; por ejemplo, {{cssxref("width")}}. Si estableces un `width` (ancho) del `50%` en un elemento, sus descendientes no obtendrán un ancho del `50%` con respecto al `width` de su elemento padre. ¡Si este fuera el caso, usar CSS sería muy frustrante!

> [!NOTE]
> En las páginas de referencia de las propiedades CSS de MDN encontrarás un cuadro de información técnica llamado «Definición formal», que enumera varios datos sobre esa propiedad, incluyendo si se hereda o no. Consulta, como ejemplo, la [sección de definición formal de la propiedad `color`](/es/docs/Web/CSS/Reference/Properties/color#sintaxis_formal).

### Comprender cómo funcionan juntos estos conceptos

Estos tres conceptos (la cascada, la especificidad y la herencia) controlan en conjunto qué CSS se aplica a qué elemento. En las siguientes secciones veremos cómo funcionan juntos. A veces puede parecer un poco complicado, pero empezarás a recordarlos a medida que ganes experiencia con CSS, ¡y siempre puedes consultar los detalles si se te olvidan! Incluso los desarrolladores con experiencia no recuerdan todos los detalles.

## Comprender la herencia

Vamos a empezar con la herencia. En el siguiente ejemplo tenemos un elemento {{HTMLElement("ul")}} con dos niveles de listas no ordenadas anidadas dentro de él. Hemos dado al `<ul>` exterior un borde, un relleno y un color de fuente.

La propiedad `color` es una propiedad heredable. Así, el valor de la propiedad `color` se aplica a los hijos directos y también a los hijos indirectos: los `<li>` hijos inmediatos y los que están dentro de la primera lista anidada. A continuación, hemos añadido la clase `special` a la segunda lista anidada y le hemos aplicado un color diferente. Este color se hereda a través de sus hijos.

```html live-sample___inheritance
<ul class="main">
  <li>Elemento uno</li>
  <li>
    Elemento dos
    <ul>
      <li>2.1</li>
      <li>2.2</li>
    </ul>
  </li>
  <li>
    Elemento tres
    <ul class="special">
      <li>
        3.1
        <ul>
          <li>3.1.1</li>
          <li>3.1.2</li>
        </ul>
      </li>
      <li>3.2</li>
    </ul>
  </li>
</ul>
```

```css live-sample___inheritance
.main {
  color: rebeccapurple;
  border: 2px solid #cccccc;
  padding: 1em;
}

.special {
  color: black;
  font-weight: bold;
}
```

{{EmbedLiveSample("inheritance", "", "280px")}}

Propiedades como `width` (como se mencionó anteriormente), `margin`, `padding` y `border` no son propiedades heredables. Si el borde se heredara en los hijos de este ejemplo de lista, cada lista y cada elemento de lista obtendría un borde, ¡probablemente un efecto que nunca querríamos!

Aunque todas las páginas de propiedades CSS indican si la propiedad se hereda o no, a menudo puedes intuirlo si sabes qué aspecto va a dar estilo el valor de esa propiedad.

### Control de la herencia

CSS proporciona cinco valores de propiedad universales especiales para controlar la herencia. Todas las propiedades CSS aceptan estos valores.

- {{cssxref("inherit")}}
  - : Establece que el valor de la propiedad aplicado a un elemento seleccionado sea el mismo que el de su elemento padre. En la práctica, esto "activa la herencia".
- {{cssxref("initial")}}
  - : Establece que el valor de la propiedad aplicado a un elemento seleccionado sea el [valor inicial](/es/docs/Web/CSS/Guides/Cascade/Property_value_processing) de esa propiedad.
- {{cssxref("revert")}}
  - : Restablece el valor de la propiedad aplicado a un elemento seleccionado al estilo predeterminado del navegador, en lugar de los valores predeterminados aplicados a esa propiedad. Este valor se comporta como {{cssxref("unset")}} en muchos casos.
- {{cssxref("revert-layer")}}
  - : Restablece el valor de la propiedad aplicado a un elemento seleccionado al valor establecido en una [capa de cascada](/es/docs/Web/CSS/Reference/At-rules/@layer) anterior.
- {{cssxref("unset")}}
  - : Restablece la propiedad a su valor natural, lo que significa que si la propiedad se hereda de forma natural, actúa como `inherit`; en caso contrario, actúa como `initial`.

> [!NOTE]
> Consulta [Tipos de origen](/es/docs/Web/CSS/Guides/Cascade/Introduction#origin_types) para obtener más información sobre cada uno de ellos y cómo funcionan.

### Jugar con las propiedades de control de la herencia

Podemos ver una lista de enlaces y explorar cómo funcionan los valores universales. El ejemplo en vivo de abajo te permite jugar con el CSS y ver qué sucede cuando haces cambios. Jugar con el código es realmente la mejor forma de entender mejor el HTML y el CSS.

Por ejemplo:

1. El segundo elemento de la lista tiene aplicada la clase `my-class-1`. Esto establece el color del elemento `<a>` anidado dentro de él en `inherit`. Si eliminas la regla, ¿cómo cambia el color del enlace?
2. ¿Entiendes por qué el tercer y el cuarto enlace tienen el color que tienen? El tercer enlace está establecido en `initial`, lo que significa que usa el valor inicial de la propiedad (en este caso, negro) y no el valor predeterminado del navegador para los enlaces, que es azul. El cuarto está establecido en `unset`, lo que significa que el texto del enlace usa el color del elemento padre, verde.
3. ¿Cuál de los enlaces cambiará de color si defines un nuevo color para el elemento `<a>`, por ejemplo, `a { color: red; }`?
4. Después de leer la siguiente sección sobre cómo restablecer todas las propiedades, vuelve aquí y cambia la propiedad `color` por `all`. Fíjate en cómo el segundo enlace queda en una nueva línea y tiene una viñeta. ¿Qué propiedades crees que se heredaron?

```html live-sample___keywords
<ul>
  <li>Color de <a href="#">enlace</a> predeterminado</li>
  <li class="my-class-1">Heredar el color del <a href="#">enlace</a></li>
  <li class="my-class-2">Restablecer el color del <a href="#">enlace</a></li>
  <li class="my-class-3">Anular el color del <a href="#">enlace</a></li>
</ul>
```

```css live-sample___keywords
body {
  color: green;
}

.my-class-1 a {
  color: inherit;
}

.my-class-2 a {
  color: initial;
}

.my-class-3 a {
  color: unset;
}
```

{{EmbedLiveSample("keywords")}}

### Restablecer todos los valores de propiedad

La propiedad abreviada de CSS {{cssxref("all")}} se puede utilizar para aplicar uno de estos valores de herencia a (casi) todas las propiedades a la vez. Su valor puede ser cualquiera de los valores de herencia (`inherit`, `initial`, `revert`, `revert-layer` o `unset`). Es una forma práctica de deshacer los cambios realizados en los estilos para poder volver a un punto de partida conocido antes de empezar a introducir cambios nuevos.

En el siguiente ejemplo tenemos dos citas en bloque. La primera tiene un estilo aplicado directamente al propio elemento de cita en bloque. La segunda tiene una clase aplicada a la cita en bloque, que establece el valor de `all` en `unset`.

```html live-sample___all
<blockquote>
  <p>Esta cita en bloque tiene estilo</p>
</blockquote>

<blockquote class="fix-this">
  <p>Esta cita en bloque no tiene estilo</p>
</blockquote>
```

```css live-sample___all
blockquote {
  background-color: orange;
  border: 2px solid blue;
}

.fix-this {
  all: unset;
}
```

{{EmbedLiveSample("all")}}

Prueba a establecer el valor de `all` en algunos de los otros valores disponibles y observa cuál es la diferencia.

## Comprender la cascada

Ahora entendemos que la herencia es la razón por la que un párrafo anidado en lo profundo de la estructura de tu HTML tiene el mismo color que el CSS aplicado al `body`. Gracias a las lecciones introductorias, entendemos cómo cambiar el CSS aplicado a algo en cualquier punto del documento, ya sea asignando CSS a un elemento o creando una clase. Ahora veremos cómo la cascada define qué reglas CSS se aplican cuando más de un bloque de estilo aplica la misma propiedad, pero con valores diferentes, al mismo elemento.

Hay tres factores que hay que tener en cuenta, enumerados aquí en orden creciente de importancia. Los posteriores anulan a los anteriores:

1. **Orden de origen**
2. **Especificidad**
3. **Importancia**

Vamos a examinarlos para ver cómo determinan exactamente los navegadores qué CSS debe aplicarse.

### Orden de origen

Ya hemos visto cómo importa el orden de origen en la cascada. Si tienes más de una regla, todas con exactamente el mismo peso, gana la que aparece en último lugar en el CSS. Puedes pensarlo así: la regla más cercana al propio elemento sobrescribe a las anteriores hasta que la última gana y da estilo al elemento.

El orden de origen solo importa cuando el peso de especificidad de las reglas es el mismo, así que veamos a continuación la especificidad.

### Especificidad

A menudo te encontrarás en una situación en la que sabes que una regla aparece más tarde en la hoja de estilo, pero se aplica una regla anterior en conflicto. Esto ocurre porque la regla anterior tiene **mayor especificidad**: es más específica y, por lo tanto, el navegador la elige como la que debe dar estilo al elemento.

Como vimos antes en esta lección, un selector de clase tiene más peso que un selector de elemento, por lo que las propiedades definidas en el bloque de estilo de la clase anularán las definidas en el bloque de estilo del elemento.

Cabe destacar aquí que, aunque pensamos en los selectores y en las reglas que se aplican al texto o componente que seleccionan, no se sobrescribe toda la regla, sino solo las propiedades que se declaran en varios lugares.

Este comportamiento ayuda a evitar la repetición en tu CSS. Una práctica común es definir estilos genéricos para los elementos básicos y, después, crear clases para aquellos que sean diferentes. Por ejemplo, en la hoja de estilo de abajo hemos definido estilos genéricos para los encabezados de nivel 2 y, después, hemos creado algunas clases que cambian solo algunas de las propiedades y valores. Los valores definidos inicialmente se aplican a todos los encabezados, y después los valores más específicos se aplican a los encabezados que tienen las clases.

```html live-sample___mixing-rules
<h2>Encabezado sin clase</h2>
<h2 class="small">Encabezado con la clase small</h2>
<h2 class="bright">Encabezado con la clase bright</h2>
```

```css live-sample___mixing-rules
h2 {
  font-size: 2em;
  color: black;
  font-family: "Georgia", serif;
}

.small {
  font-size: 1em;
}

.bright {
  color: rebeccapurple;
}
```

{{EmbedLiveSample("mixing-rules", "", "240px")}}

Ahora vamos a ver cómo calcula el navegador la especificidad. Ya sabemos que un selector de elemento tiene una especificidad baja y puede ser sobrescrito por una clase. Básicamente, se otorga un valor en puntos a los diferentes tipos de selectores, y la suma de estos te da el peso de ese selector en particular, que después puede evaluarse frente a otras posibles coincidencias.

La cantidad de especificidad que tiene un selector se mide con tres valores (o componentes) diferentes, que pueden considerarse como columnas de ID, CLASE y ELEMENTO, con un valor de centenas, decenas y unidades, respectivamente:

- **ID**: Suma un punto en esta columna (100 puntos) por cada selector de ID contenido en el selector general.
- **Clases**: Suma un punto en esta columna (10 puntos) por cada selector de clase, selector de atributo o pseudoclase contenido en el selector general.
- **Elementos**: Suma un punto en esta columna (1 punto) por cada selector de elemento o pseudoelemento contenido en el selector general.

> [!NOTE]
> El selector universal ([`*`](/es/docs/Web/CSS/Reference/Selectors/Universal_selectors)), los [combinadores](/es/docs/Learn_web_development/Core/Styling_basics/Combinators) (`+`, `>`, `~`, ' ') y el selector de ajuste de especificidad ({{cssxref(":where()")}}), junto con sus parámetros, no tienen ningún efecto en la especificidad.

La siguiente tabla muestra algunos ejemplos aislados para ir entrando en materia. Repásalos y asegúrate de entender por qué tienen la especificidad que les hemos asignado. Puedes encontrar detalles de cada selector en la [referencia de selectores](/es/docs/Web/CSS/Guides/Selectors/Selectors_and_combinators) de MDN.

| Selector                                  | Identificadores | Clases | Elementos | Especificidad total |
| ----------------------------------------- | --------------- | ------ | --------- | ------------------- |
| `h1`                                      | 0               | 0      | 1         | 0-0-1               |
| `h1 + p::first-letter`                    | 0               | 0      | 3         | 0-0-3               |
| `li > a[href*="en-US"] > .inline-warning` | 0               | 2      | 2         | 0-2-2               |
| `#identifier`                             | 1               | 0      | 0         | 1-0-0               |

#### Ejemplo detallado de especificidad

Antes de continuar, veamos un ejemplo en acción. Quizá quieras abrirlo en el Playground de MDN en una pestaña aparte para poder consultarlo fácilmente mientras lees la explicación.

```html live-sample___specificity-boxes
<div class="container" id="outer">
  <div class="container" id="inner">
    <ul>
      <li class="nav"><a href="#">Uno</a></li>
      <li class="nav"><a href="#">Dos</a></li>
    </ul>
  </div>
</div>
```

```css live-sample___specificity-boxes
/* 1. especificidad: 1-0-1 */
#outer a {
  background-color: red;
}

/* 2. especificidad: 2-0-1 */
#outer #inner a {
  background-color: blue;
}

/* 3. especificidad: 1-0-4 */
#outer div ul li a {
  color: yellow;
}

/* 4. especificidad: 1-1-3 */
#outer div ul .nav a {
  color: white;
}

/* 5. especificidad: 0-2-4 */
div div li:nth-child(2) a:hover {
  border: 10px solid black;
}

/* 6. especificidad: 0-2-3 */
div li:nth-child(2) a:hover {
  border: 10px dashed black;
}

/* 7. especificidad: 0-3-3 */
div div .nav:nth-child(2) a:hover {
  border: 10px double black;
}

a {
  display: inline-block;
  line-height: 40px;
  font-size: 20px;
  text-decoration: none;
  text-align: center;
  width: 200px;
  margin-bottom: 10px;
}

ul {
  padding: 0;
}

li {
  list-style-type: none;
}
```

{{EmbedLiveSample("specificity-boxes", "100%", "170")}}

Entonces, ¿qué está pasando aquí? En primer lugar, solo nos interesan las primeras siete reglas de este ejemplo y, como notarás, hemos incluido sus valores de especificidad en un comentario antes de cada una.

- Los dos primeros selectores compiten por el estilo del `background-color` del enlace. Gana el segundo y hace que el color de fondo sea `blue` (azul) porque tiene un selector de ID adicional en la cadena: su especificidad es 2-0-1 frente a 1-0-1.
- Los selectores 3 y 4 compiten por el estilo del `color` del texto del enlace. Gana el segundo y hace que el texto sea `white` (blanco) porque, aunque tiene un selector de elemento menos, el selector que falta se sustituye por un selector de clase, que tiene más peso que un selector de elemento. La especificidad ganadora es 1-1-3 frente a 1-0-4.
- Los selectores 5 a 7 compiten por el estilo del `border` del enlace cuando se pasa el cursor sobre él. El selector 6 pierde claramente frente al selector 5, con una especificidad de 0-2-3 frente a 0-2-4: tiene un selector de elemento menos en la cadena. El selector 7, sin embargo, supera tanto al 5 como al 6 porque tiene el mismo número de subselectores en la cadena que el selector 5, pero se ha sustituido un elemento por un selector de clase. Así, la especificidad ganadora es 0-3-3 frente a 0-2-3 y 0-2-4.

> [!NOTE]
> Cada tipo de selector tiene su propio nivel de especificidad, que no puede ser sobrescrito por selectores con un nivel de especificidad menor. Por ejemplo, _un millón_ de selectores de **clase** combinados no podrían sobrescribir la especificidad de _un_ selector de **id**.
>
> La mejor forma de evaluar la especificidad es puntuar los niveles de especificidad de forma individual, empezando por el más alto y pasando al siguiente más bajo cuando sea necesario. Solo cuando hay un empate entre las puntuaciones de los selectores dentro de una columna de especificidad es necesario evaluar la siguiente columna; de lo contrario, puedes descartar los selectores de menor especificidad, ya que nunca podrán sobrescribir a los de mayor especificidad.

#### ID frente a clases

Los selectores de ID tienen una especificidad alta. Esto significa que los estilos aplicados a partir de la coincidencia de un selector de ID anularán los estilos aplicados a partir de otros selectores, incluidos los de clase y de tipo. Como un ID solo puede aparecer una vez en una página, y debido a la alta especificidad de los selectores de ID, es preferible añadir una clase a un elemento en lugar de un ID.

Si usar el ID es la única forma de apuntar al elemento (quizá porque no tienes acceso al marcado y no puedes editarlo), considera usar el ID dentro de un [selector de atributo](/es/docs/Web/CSS/Reference/Selectors/Attribute_selectors), como `p[id="header"]`.

### Estilos en línea

Los estilos en línea, es decir, la declaración de estilo dentro de un atributo [`style`](/es/docs/Web/HTML/Reference/Global_attributes/style), tienen prioridad sobre todos los estilos normales, sin importar la especificidad. Estas declaraciones no tienen selectores, pero su especificidad puede interpretarse como 1-0-0-0: siempre mayor que cualquier otro peso de especificidad, sin importar cuántos ID haya en los selectores.

### !important

Existe una pieza especial de CSS que puedes usar para anular todos los cálculos anteriores, incluso los estilos en línea: la marca `!important`. Sin embargo, debes tener mucho cuidado al usarla. Esta marca se utiliza para convertir un par concreto de propiedad y valor en la regla más específica, anulando así las reglas normales de la cascada, incluidos los estilos en línea normales.

> [!NOTE]
> Es útil saber que la marca `!important` existe para que sepas qué es cuando te la encuentres en el código de otras personas. **Sin embargo, te recomendamos encarecidamente que nunca la uses a menos que sea absolutamente necesario.** La marca `!important` cambia el modo en que funciona normalmente la cascada, por lo que puede dificultar mucho la depuración de problemas de CSS, especialmente en una hoja de estilo grande.

Echa un vistazo a este ejemplo, en el que tenemos dos párrafos, uno de los cuales tiene un ID.

```html live-sample___important
<p class="better">Esto es un párrafo.</p>
<p class="better" id="winning">¡Un selector para gobernarlos a todos!</p>
```

```css live-sample___important
#winning {
  background-color: red;
  border: 1px solid black;
}

.better {
  background-color: gray;
  border: none !important;
}

p {
  background-color: blue;
  color: white;
  padding: 5px;
}
```

{{EmbedLiveSample("important")}}

Vamos a repasarlo para ver qué está pasando. Intenta eliminar algunas de las propiedades para ver qué sucede si te cuesta entenderlo:

1. Verás que se han aplicado los valores de {{cssxref("color")}} y {{cssxref("padding")}} de la tercera regla, pero no el de {{cssxref("background-color")}}. ¿Por qué? En realidad, las tres deberían aplicarse, porque las reglas que aparecen más tarde en el orden de origen suelen anular a las anteriores.
2. Sin embargo, ganan las reglas anteriores porque los selectores de clase tienen mayor especificidad que los selectores de elemento.
3. Ambos elementos tienen una [`class`](/es/docs/Web/HTML/Reference/Global_attributes/class) de valor `better`, pero el segundo tiene también un [`id`](/es/docs/Web/HTML/Reference/Global_attributes/id) de valor `winning`. Como los ID tienen una especificidad _aún mayor_ que las clases, tanto el `background-color` `red` (rojo) como el `border` de `1px` negro deberían aplicarse al segundo elemento, mientras que el primer elemento obtendría el fondo gris y ningún borde, tal como especifica la clase.
4. El segundo elemento _sí_ obtiene el `background-color` `red` (rojo), pero ningún `border`. ¿Por qué? Por la marca `!important` en la segunda regla. Añadir la marca `!important` después de `border: none` significa que esta declaración ganará sobre el valor de `border` de la regla anterior, aunque el selector de ID tenga mayor especificidad.

> [!NOTE]
> La única forma de anular una declaración importante es incluir otra declaración importante con la _misma especificidad_ más tarde en el orden de origen, o una con mayor especificidad.

Una situación en la que quizá tengas que usar la marca `!important` es cuando trabajas en un CMS en el que no puedes editar los módulos CSS principales, y realmente quieres anular un estilo en línea o una declaración importante que no se puede anular de ninguna otra forma. Pero, de verdad, evita usarla si puedes.

## El efecto de la ubicación del CSS

Por último, es importante señalar que la precedencia de una declaración CSS depende de la hoja de estilo en la que se especifique.

Es posible que los usuarios establezcan hojas de estilo personalizadas para anular los estilos del desarrollador. Por ejemplo, un usuario con discapacidad visual podría querer establecer el tamaño de fuente en todas las páginas web que visita al doble del tamaño normal, para facilitar la lectura.

### Orden de las declaraciones que se anulan

Las declaraciones en conflicto se aplicarán en el siguiente orden, y las posteriores anularán a las anteriores:

1. Declaraciones en las hojas de estilo del agente de usuario (por ejemplo, los estilos predeterminados del navegador, que se usan cuando no hay ningún otro estilo establecido).
2. Declaraciones normales en las hojas de estilo del usuario (estilos personalizados establecidos por un usuario).
3. Declaraciones normales en las hojas de estilo de autor (estos son los estilos que establecemos nosotros, los desarrolladores web).
4. Declaraciones importantes en las hojas de estilo de autor.
5. Declaraciones importantes en las hojas de estilo del usuario.
6. Declaraciones importantes en las hojas de estilo del agente de usuario.

> [!NOTE]
> El orden de precedencia se invierte para los estilos marcados con `!important`. Tiene sentido que las hojas de estilo de los desarrolladores web anulen las hojas de estilo del usuario, para que el diseño se mantenga tal como estaba previsto; sin embargo, a veces los usuarios tienen buenas razones para anular los estilos de los desarrolladores web, como se mencionó anteriormente, y esto puede lograrse usando `!important` en sus reglas.

## Resumen

Si has entendido la mayor parte de este artículo, ¡enhorabuena! Has empezado a familiarizarte con la mecánica fundamental de CSS.

Si no has entendido del todo la cascada, la especificidad y la herencia, ¡no te preocupes! Esto es sin duda lo más complicado que hemos tratado hasta ahora en el curso, y es algo que incluso los desarrolladores web profesionales a veces encuentran complicado. Te aconsejamos que vuelvas a este artículo varias veces a medida que avanzas en el curso, y que sigas pensando en ello.

Vuelve aquí si empiezas a encontrarte con problemas extraños en los que los estilos no se aplican como esperabas. Podría ser un problema de especificidad. A continuación, te daremos algunas pruebas que puedes usar para comprobar cuánto has entendido y retenido de la información que hemos proporcionado sobre la cascada.

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Test_your_skills/Box_model", "Learn_web_development/Core/Styling_basics/Test_your_skills/Cascade", "Learn_web_development/Core/Styling_basics")}}
