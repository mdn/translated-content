---
title: Sintaxis de definición de valor
slug: Web/CSS/Value_definition_syntax
---

{{CSSRef()}}

**La sintaxis de definición de valores CSS**, una gramática formal, se utiliza para definir el conjunto de valores válidos para una propiedad o función CSS. Además de esta sintaxis, el conjunto de valores válidos puede restringirse aún más mediante restricciones semánticas (por ejemplo, para que un número sea estrictamente positivo).

La sintaxis de definición describe qué valores están permitidos y las interacciones entre ellos. Un componente puede ser una _palabra clave_, algunos caracteres _literales_, ó un valor de tipo de dato de CSS o propiedad CSS.

## Tipos de valor de los componentes

### Palabras clave

#### Palabras clave genéricas

Una palabra clave con significado predefinido aparece literalmente, sin comillas, por ejemplo: `auto`, `smaller` or `ease-in`.

#### El caso específico de `inherit` e `initial`

Todas las propiedades CSS aceptan las palabras clave `inherit` e `initial` que son definidas vía CSS. Estas no son mostradas en la definición del valor y están implícitamente definidas.

### Literales

En CSS, unos pocos caracteres pueden aparecer por su cuenta, como la barra ('`/`') o la coma ('`,`'), y son usadas en una propiedad o definición para separar sus partes. La coma es a menudo usada para separar valores en enumeraciones, o parámetros en funciones de tipo matemático; la barra a menudo separa partes de el valor que es semánticamente diferente, pero que tiene una sintaxis común. Típicamente, la barra es usada a veces en propiedades abreviadas para separar componentes que son del mismo tipo, pero pertenecen a diferentes propiedades.

Ambos símbolos aparecen literalmente en una definición de valor.

### Tipos de dato

#### Tipos de dato básicos

Un tipo de dato usado vía CSS es definido una sola vez para todos los valores en la especificación. Se llaman _tipos de datos básicos,_ estan representados por su nombre rodeados del símbolo '`<`' y '`>`': {{ cssxref("&lt;angle&gt;") }}, {{cssxref("&lt;string&gt;")}}, …

#### Tipos de dato no terminales

Tipos de dato poco comunes, llamados _tipos de datos no terminales_, están también rodeados por '`<`' y '`>`'.

Los tipos de dato no terminales son de dos tipos::

- tipos de datos _que comparten el mismo nombre de propiedad_, colocados entre comillas . En este caso el tipo de dato comparte el mismo conjunto de valores de la propiedad. A menudo son usados en la definición de propiedades abreviadas.
- tipos de datos _que no comparten el mismo nombre de la propiedad_. Estos tipos de datos son muy cercanos a sus tipos de datos básicos. Ellos solo difieren de los tipos de datos básicos en la ubicación física de su definición: en este caso la definición es usualmente físicamente muy cercana a la definición de la propiedad que la esta usando.

## Combinadores de los valores de componentes

### Corchetes

_Corchetes_ encierran varias entidades, combinadores, y multiplicadores, luego los transforman en un solo componente. Son usados para **agrupar componentes para sobreescribir las reglas de precedencia.**

```
bold [ thin && <length> ]
```

El ejemplo empareja con los siguientes valores:

- `bold thin 2vh`
- `bold 0 thin`
- `bold thin 3.5em`

Pero no con:

- `thin bold 3em`, porque `bold` esta yuxtapuesto con el componente definido por los corchetes, debe aparecer antes de él.

### Yuxtaposición

Colocar varias palabras clave, literales, o tipos de datos, uno al lado del otro, solo separados por uno o varios espacios se llama _yuxtaponer._ Todos los componentes yuxtapuestos son **obligatorios y deben aparecer en ese orden exacto.**

```
bold <length> , thin
```

El ejemplo empareja con los siguientes valores:

- `bold 1em, thin`
- `bold 0, thin`
- `bold 2.5cm, thin`
- `bold 3vh, thin`

Pero no con:

- `thin 1em, bold` porque las entidades deben aparecer en el orden expresado
- `bold 1em thin` porque las entidades son obligatorias; la coma que es un literal debe estar presente
- `bold 0.5ms, thin` porque los valores `ms` no son de tipo {{cssxref("&lt;length&gt;")}}

### Doble ampersand

Separar dos o mas componentes por un _doble ampersand_, `&&`, significa que todas esas entidades son **obligatorias pero pueden aparecer en cualquier orden.**

```
bold && <length>
```

El ejemplo empareja con los siguientes valores:

- `bold 1em`
- `bold 0`
- `2.5cm bold`
- `3vh bold`

Pero no con:

- `bold` porque ambos componentes deben aparecer en el valor
- `bold 1em bold` porque ambos componentes deben aparecer solo una vez

> **Nota:** yuxtaposición tiene precedencia sobre el doble ampersand, esto quiere decir que `bold thin && <length>` es equivalente a `[ bold thin ] && <length>`. Que describe a `bold thin <length>` ó `<length> bold thin` pero no a `bold <length> thin`.

### Barra doble

Separar dos o mas componentes por una _barra doble_, `||`, significa que todas las entidades son opcionales: **al menos una debe estar presente, y pueden aparecer en cualquier orden.** Típicamente ésto es usado para definir los diferentes valores de una [propiedad abreviada](/es/docs/CSS/Shorthand_properties).

```
<'border-width'> || <'border-style'> || <'border-color'>
```

El ejemplo empareja con los siguientes valores:

- `1em solid blue`
- `blue 1em`
- `solid 1px yellow`

Pero no con:

- `blue yellow` porque un componente debe aparecer al menos una vez.
- `bold` porque no es una palabra clave permitida como valor de ninguna de las entidades.

> **Nota:** el doble ampersand tiene precedencia sobre la barra doble, que significa que `bold || thin && <length>` es equivalente a `bold || [ thin && <length> ]`. Describe a `bold`, `thin`, `<length>`, `bold thin`, `<length> bold`, o `thin <length> bold` pero no `bold <length> bold thin` porque bold, si no es omitido debe colocarse antes o después de el componente `thin && <length>`

### Barra simple

Separar dos o mas componentes con _una barra simple_, `|`, quiere decir que todas las entidades son opciones exclusivas: **exactamente una de estas opciones debe estar presente.** Esto es tipicamente usado para separar una lista de posibles palabras clave.

```
<percentage> | <length> | left | center | right | top | bottom
```

El ejemplo empareja con los siguientes valores:

- `3%`
- `0`
- `3.5em`
- `left`
- `center`
- `right`
- `top`
- `bottom`

Pero no

- `center 3%` porque solo uno de los componentes debe estar presente
- `3em 4.5em` porque un componente debe estar presente máximo una vez.

> **Nota:** la barra doble tiene precedencia sobre la barra simple, quiere decir que `bold | thin || <length>` es equivalente a `bold | [ thin || <length> ]`. Describe `bold`, `thin`, `<length>`, `<length> thin`, o `thin <length>` pero no `bold <length>` porque solo una entidad de cada lado del combinador `|` puede estar presente.

## Multiplicadores de valores de componentes

Un multiplicador es un símbolo que indica cuantas veces una entidad precedente puede ser repetida. Sin un multiplicador, una entidad debe aparecer exactamente una vez.

Note que los multiplicadores no pueden sumarse y tienen precedencia sobre los combinadores.

### Asterisco (`*`)

El _multiplicador asterisco_ indica que la entidad puede aparecer **cero, una o varias veces.**

```
bold smaller*
```

El ejemplo empareja con los siguientes valores:

- `bold`
- `bold smaller`
- `bold smaller smaller`
- `bold smaller smaller smaller` y así sucesivamente

Pero no:

- `smaller` porque `bold` esta yuxtapuesto y debe aparecer antes de la palabra clave `smaller`

### Suma (`+`)

El _multiplicador suma_ indica que la entidad puede aparecer **una o varias veces.**

```
bold smaller+
```

El ejemplo empareja con los siguientes valores:

- `bold smaller`
- `bold smaller smaller`
- `bold smaller smaller smaller` y sucesivamente

Pero no:

- `bold` porque `smaller` debe aparecer al menos una vez
- `smaller` porque `bold` esta yuxtapuesto y debe aparecer antes de cualquier palabra clave `smaller`

### Pregunta (`?`)

El _multiplicador pregunta_ indica que la entidad es opcional y **debe aparecer cero o una vez**

```
bold smaller?
```

El ejemplo empareja con los siguientes valores:

- `bold`
- `bold smaller`

Pero no:

- `bold smaller smaller` porque `smaller` debe aparecer como máximo una vez
- `smaller bold` porque `bold` esta yuxtapuesto y debe aparecer antes de cualquier palabra clave `smaller`

### Llaves (`{ }`)

El _multiplicador llaves,_ encierra a dos enteros A y B separados por una coma, indica que la entidad **debe aparecer al menos A veces y como mas B veces**

```
bold smaller{1,3}
```

El ejemplo empareja con los siguientes valores:

- `bold smaller`
- `bold smaller smaller`
- `bold smaller smaller smaller`

Pero no:

- `bold` porque `smaller` debe aparecer al menos una vez
- `bold smaller smaller smaller smaller` porque `smaller` debe aparecer un máximo de tres veces.
- `smaller bold` porque `bold` esta yuxtapuesto u debe aparecer antes de cualquier palabra clave `smaller`

### Hash (`#`)

El _multiplicador hash_ indica que la entidad puede repetirse **una o mas veces** (como con el multiplicador de suma) pero cada ocurrencia se **separa por una coma** ('`,`').

```
bold smaller#
```

El ejemplo empareja con los siguientes valores:

- `bold smaller`
- `bold smaller, smaller`
- `bold smaller, smaller, smaller` y así sucesivamente

Pero no:

- `bold` porque `smaller` debe aparecer al menos una vez
- `bold smaller smaller smaller` porque las diferentes ocurrencias de `smaller` deben estar separadas por comas
- `smaller` porque `bold` esta yuxtapuesto y debe aparecer antes de cualquier palabra clave `smaller`

## Sumario

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Símbolo</th>
      <th scope="col">Nombre</th>
      <th scope="col">Descripción</th>
      <th scope="col">Ejemplo</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th colspan="4">Combinadores</th>
    </tr>
    <tr>
      <td></td>
      <td>Yuxtaposición</td>
      <td>Componentes obligatorios que deben aparecer en el mismo orden</td>
      <td><code>solid &#x3C;length></code></td>
    </tr>
    <tr>
      <td><code>&#x26;&#x26;</code></td>
      <td>Doble ampersand</td>
      <td>
        Componentes obligatorios pero que pueden aparecer en cualquier orden
      </td>
      <td><code>length> &#x26;&#x26; &#x3C;string></code></td>
    </tr>
    <tr>
      <td><code>||</code></td>
      <td>Barra doble</td>
      <td>
        Al menos uno de los componentes debe estar presente, y pueden aparecer
        en cualquier orden
      </td>
      <td>
        <code>&#x3C;'border-image-outset'> || &#x3C;'border-image-slice'></code>
      </td>
    </tr>
    <tr>
      <td><code>|</code></td>
      <td>Barra simple</td>
      <td>Exactamente uno de los componentes debe estar presente</td>
      <td><code>smaller | small | normal | big | bigger</code></td>
    </tr>
    <tr>
      <td><code>[ ]</code></td>
      <td>Corchetes</td>
      <td>Agrupa componentes para sobreescribir las reglas de precedencia</td>
      <td><code>bold [ thin &#x26;&#x26; &#x3C;length> ]</code></td>
    </tr>
    <tr>
      <th colspan="4">Multiplicadores</th>
    </tr>
    <tr>
      <td></td>
      <td>Sin multiplicador</td>
      <td>Exactamente 1 vez</td>
      <td><code>solid</code></td>
    </tr>
    <tr>
      <td><code>*</code></td>
      <td>Asterisco</td>
      <td>0 or more times</td>
      <td><code>bold smaller*</code></td>
    </tr>
    <tr>
      <td><code>+</code></td>
      <td>Suma</td>
      <td>1 o mas veces</td>
      <td><code>bold smaller+</code></td>
    </tr>
    <tr>
      <td><code>?</code></td>
      <td>Pregunta</td>
      <td>0 o 1 vez (es <em>opcional)</em></td>
      <td><code>bold smaller?</code></td>
    </tr>
    <tr>
      <td><code>{A,B}</code></td>
      <td>Llaves</td>
      <td>Al menos <code>A</code> veces, como mas <code>B</code> veces</td>
      <td><code>bold smaller{1,3}</code></td>
    </tr>
    <tr>
      <td><code>#</code></td>
      <td>Hash</td>
      <td>
        1 o mas veces, pero cada ocurrencia separada por una coma
        ('<code>,</code>')
      </td>
      <td><code>bold smaller#</code></td>
    </tr>
  </tbody>
</table>

## Especificaciones

{{Specifications}}

## Vea también

- CSS Key Concepts: [CSS syntax](/es/docs/Web/CSS/Syntax), [at-rule](/es/docs/Web/CSS/At-rule), [comments](/es/docs/Web/CSS/Comments), [specificity](/es/docs/Web/CSS/Specificity) and [inheritance](/es/docs/Web/CSS/inheritance), the [box](/es/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model), [layout modes](/es/docs/Web/CSS/Layout_mode) and [visual formatting models](/es/docs/Web/CSS/Visual_formatting_model), and [margin collapsing](/es/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing), or the [initial](/es/docs/Web/CSS/initial_value), [computed](/es/docs/Web/CSS/computed_value), [resolved](/es/docs/Web/CSS/resolved_value), [specified](/es/docs/Web/CSS/specified_value), [used](/es/docs/Web/CSS/used_value), and [actual](/es/docs/Web/CSS/actual_value) values. Definitions of [value syntax](/es/docs/Web/CSS/Value_definition_syntax), [shorthand properties](/es/docs/Web/CSS/Shorthand_properties) and [replaced elements](/es/docs/Web/CSS/Replaced_element).
