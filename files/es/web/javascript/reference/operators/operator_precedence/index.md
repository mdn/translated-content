---
title: Precedencia de operadores
slug: Web/JavaScript/Reference/Operators/Operator_precedence
---

{{jsSidebar("Operators")}}

La **precedencia de operadores** determina el orden en el cual los operadores son evaluados uno respecto del otro. Los operadores con mayor precedencia se convierten en los operandos de los operadores con menor precedencia.

{{EmbedInteractiveExample("pages/js/expressions-operatorprecedence.html")}}

## Precedencia y Asociatividad

Considere la expresión descrita debajo. Note que `OP1` y `OP2` son ambos ejemplos de operadores.

```js
a OP1 b OP2 c
```

Si `OP1` y `OP2` tienen diferente niveles de precedencia (véase la tabla debajo), el operador
con la precedencia más alta va primero y la asociatividad no importa. Observe como la multiplicación
tiene mayor precedencia que la suma y se ejecuta primero, a pesar de que la suma se escribe primero en el código.

```js-nolint
console.log(3 + 10 * 2); // muestra 23
console.log(3 + (10 * 2)); // muestra 23 porque los paréntesis son superfluos
console.log((3 + 10) * 2); // muestra 26 porque los paréntesis cambian el orden
```

La asociatividad a la izquierda (de izquierda a derecha) significa que es procesado como
`(a OP1 b) OP2 c`, mientras que la asociatividad a la derecha (de derecha a izquierda) significa que es interpretado como
`a OP1 (b OP2 c)`. Los opearadores de asignación son de asociatividad a la derecha, entonces se puede escribir:

```js
a = b = 5; // es igual a escribir a = (b = 5);
```

con el resultado esperado de que `a` y `b` obtienen el valor 5. Esto
es porque el operador de asignación retorna el valor que es asignado. Primero,
`b` es establecido en 5. Luego `a` también es establecida en 5, el valor de retorno
de `b = 5`, también conocido como el operando de la derecha de la asignación.

Como otro ejemplo, el operador de exponenciación tiene la particularidad de tener asociatividad a la derecha,
a diferencia de los restantes operadores aritméticos que poseen asociatividad a la izquierda. Es interesante notar que,
el order de evaluación siempre es de izquierda a derecha sin importar la asociatividad y la precedencia.

<table class="standard-table">
  <tbody>
    <tr>
      <td>Código</td>
      <td>Salida</td>
    </tr>
    <tr>
      <td>
        <pre class="brush: js">
function echo(nombre, num) {
    console.log("Evaluando el lado " + nombre);
    return num;
}
// Nótese el operador división (/)
console.log(echo("izquierdo", 6) / echo("derecho", 2));
</pre
        >
      </td>
      <td>
        <pre class="brush: plain">
Evaluando el lado izquierdo
Evaluando el lado derecho
3
</pre
        >
      </td>
    </tr>
    <tr>
      <td>
        <pre class="brush: js">
function echo(nombre, num) {
    console.log("Evaluando el lado " + nombre);
    return num;
}
// Nótese el operador potencia (**)
console.log(echo("izquierdo", 2) ** echo("derecho", 3));</pre
        >
      </td>
      <td>
        <pre class="brush: plain">
Evaluando el lado izquierdo
Evaluando el lado derecho
8</pre
        >
      </td>
    </tr>
  </tbody>
</table>

La diferencia en asociatividad entra en juego cuando hay múltiples operadores con la
misma precedencia. Con un único operador u operadores con diferente precedencia,
la asociatividad no afecta la salida, como puede verse en el ejemplo de arriba. En el ejemplo
debajo, observe como la asociatividad afecta la salida cuando múltiples operadores idénticos
son usados.

<table class="standard-table">
  <tbody>
    <tr>
      <td>Código</td>
      <td>Saludo</td>
    </tr>
    <tr>
      <td>
        <pre class="brush: js">
function echo(nombre, num) {
    console.log("Evaluando el lado " + nombre);
    return num;
}
// Nótese el operador división (/)
console.log(echo("izquierdo", 6) / echo("medio", 2) / echo("derecho", 3));
</pre
        >
      </td>
      <td>
        <pre class="brush: plain">
Evaluando el lado izquierdo
Evaluando el lado medio
Evaluando el lado derecho
1
</pre
        >
      </td>
    </tr>
    <tr>
      <td>
        <pre class="brush: js">
function echo(nombre, num) {
    console.log("Evaluando el lado " + nombre);
    return num;
}
// Nótese el operador potencia (**)
console.log(echo("izquierdo", 2) ** echo("medio", 3) ** echo("derecho", 2));
</pre
        >
      </td>
      <td>
        <pre class="brush: plain">
Evaluando el lado izquierdo
Evaluando el lado medio
Evaluando el lado derecho
512
</pre
        >
      </td>
    </tr>
    <tr>
      <td>
        <pre class="brush: js">
function echo(nombre, num) {
    console.log("Evaluando el lado " + nombre);
    return num;
}
// Nótese los paréntesis alrededor de las potencias de la izquierda y el medio
console.log((echo("izquierdo", 2) ** echo("medio", 3)) ** echo("derecho", 2));</pre
        >
      </td>
      <td>
        <pre class="brush: plain">
Evaluando el lado izquierdo
Evaluando el lado medio
Evaluando el lado derecho
64</pre
        >
      </td>
    </tr>
  </tbody>
</table>

Viendo los fragmentos de códigos de arriba, `6 / 2 / 3` es lo mismo que
`(6 / 2) / 3` porque la división es asociativa a la izquierda. La potencia, por otro lado,
es asociativa a la derecha, entonces `2 ** 3 ** 2` es lo mismo que
`2 ** (3 ** 2)`. Por lo tanto, hacer `(2 ** 3) ** 2` cambia el orden
y el resultado en el 64 que se ve en la tabla de arriba.

Recuerde que la precedencia viene antes de la asociatividad. Entonces, mezclando
división y potencia, esta última precede a la división. Por ejemplo,
`2 ** 3 / 3 ** 2` resulta en 0.8888888888888888 porque es lo mismo que hacer
`(2 ** 3) / (3 ** 2)`.

### Nota sobre agrupamiento y operadores de cortocircuito

En la tabla debajo, **Agrupamiento** se lista con la mayor precedencia.
Sin embargo, esto no siempre significa que la expresión dentro de los símbolos
de agrupación `( … )` es evaluada primero, especialmente cuando se trata de
cortocircuitos.

Cortocircuitar es una jerga para la evaluación condicional. Por ejemplo, en la expresión
`a && (b + c)`, si `a` es {{Glossary("falsy")}}, entonces
la expresión `(b + c)` no será evaluada, incluso si está dentro de
paréntesis. Se podría decir que el operador de conjunción lógica ("&&") está
"cortocircuitado". Junto con la conjunción lógica, otros operadores cortocircuitados
son la disyunción lógica ("||"), la coalescencia nula ("??"), el encadenamiento opcional ("?."),
y el operador condicional ternario. A continuación, algunos ejemplos.

```js-nolint
a || (b * c); // evalúa primero `a`, luego produce `a` si `a` es "truthy"
a && (b < c); // evalúa primero `a`, luego produce `a` si `a` es "falsy"
a ?? (b || c); // evalúa primero `a`, luego produce `a` si `a` no es `null` ni `undefined`
a?.b.c; // evalúa primero `a`, luego produce `undefined` si `a` es `null` ó `undefined`
```

## Ejemplos

```js
3 > 2 && 2 > 1;
// Retorna `true`

3 > 2 > 1;
// Retorna `false` porque 3 > 2 es `true`, luego `true` es convertido a 1
// por coerción de tipos, luego `true` > 1 se convierte en 1 > 1, que es
// `false`. Agregar paréntesis hace que las cosas se vean claras: (3 > 2) > 1.
```

## Tabla

La siguiente tabla lista los operadores en orden de mayor precedencia (19) a menor precedencia (1).

Nótese que la [sintaxis spread](/es/docs/Web/JavaScript/Reference/Operators/Spread_syntax) está intencionalmente excluída de la tabla — porque, citando
una [respuesta en Stack Overflow](https://stackoverflow.com/questions/48656338/operator-precedence-for-js-spread-and-rest-operators/48656377), "[la sintaxis spread no es un operador](https://stackoverflow.com/questions/44934828/is-it-spread-syntax-or-the-spread-operator) y por lo tanto no tiene una precedencia. Es parte de la sintaxis de arreglos literales y llamadas a funciones (y objetos literales)."

<table class="fullwidth-table">
  <tbody>
    <tr>
      <th>Precedencia</th>
      <th>Tipo de operador</th>
      <th>Asociatividad</th>
      <th>Operadores individuales</th>
    </tr>
    <tr>
      <td>19</td>
      <td>
        {{jsxref("Operators/Grouping", "Agrupamiento", "", 1)}}
      </td>
      <td>n/a</td>
      <td><code>( … )</code></td>
    </tr>
    <tr>
      <td rowspan="5">18</td>
      <td>
        {{jsxref("Operators/Property_Accessors", "Acceso a propiedades (notación por punto)", "#notaci.c3.b3n_por_punto",
                1)}}
      </td>
      <td>a la izquierda</td>
      <td><code>… . …</code></td>
    </tr>
    <tr>
      <td>
        {{jsxref("Operators/Property_Accessors", "Acceso a propiedades (notación por corchetes)","#notaci.c3.b3n_por_corchetes", 1)}}
      </td>
      <td>a la izquierda</td>
      <td><code>… [ … ]</code></td>
    </tr>
    <tr>
      <td>{{jsxref("Operators/new","new")}} (con lista de argumentos)</td>
      <td>n/a</td>
      <td><code>new … ( … )</code></td>
    </tr>
    <tr>
      <td>
        {{jsxref("Functions","Llamada a función", "", 1)}}
      </td>
      <td>a la izquierda</td>
      <td>
        <code>… ( … )</code>
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Operators/Optional_chaining","Encadenamiento opcional", "", 1)}}
      </td>
      <td>a la izquierda</td>
      <td><code>?.</code></td>
    </tr>
    <tr>
      <td>17</td>
      <td>
        {{jsxref("Operators/new","new")}} (sin lista de argumentos)
      </td>
      <td>a la derecha</td>
      <td><code>new …</code></td>
    </tr>
    <tr>
      <td rowspan="2">16</td>
      <td>
        {{jsxref("Operators","Incremento sufijo","#incremento_y_decremento", 1)}}
      </td>
      <td rowspan="2">n/a</td>
      <td><code>… ++</code></td>
    </tr>
    <tr>
      <td>
        {{jsxref("Operators","Decremento sufijo","#incremento_y_decremento", 1)}}
      </td>
      <td><code>… --</code></td>
    </tr>
    <tr>
      <td rowspan="10">15</td>
      <td>
        {{jsxref("Operators/Logical_NOT","NOT lógico (!)", "", 1)}}
      </td>
      <td rowspan="10">a la derecha</td>
      <td><code>! …</code></td>
    </tr>
    <tr>
      <td>
        {{jsxref("Operators/Bitwise_NOT","NOT a nivel de bits (~)","", 1)}}
      </td>
      <td><code>~ …</code></td>
    </tr>
    <tr>
      <td>
        {{jsxref("Operators/Unary_plus","Suma unaria (+)", "", 1)}}
      </td>
      <td><code>+ …</code></td>
    </tr>
    <tr>
      <td>
        {{jsxref("Operators/Unary_plus","Negación unaria (-)", "", 1)}}
      </td>
      <td><code>- …</code></td>
    </tr>
    <tr>
      <td>
        {{jsxref("Operators","Incremento prefijo","#incremento_y_decremento", 1)}}
      </td>
      <td><code>++ …</code></td>
    </tr>
    <tr>
      <td>
        {{jsxref("Operators","Decremento prefijo","#incremento_y_decremento", 1)}}
      </td>
      <td><code>-- …</code></td>
    </tr>
    <tr>
      <td>{{jsxref("Operators/typeof", "typeof")}}</td>
      <td><code>typeof …</code></td>
    </tr>
    <tr>
      <td>{{jsxref("Operators/void", "void")}}</td>
      <td><code>void …</code></td>
    </tr>
    <tr>
      <td>{{jsxref("Operators/delete", "delete")}}</td>
      <td><code>delete …</code></td>
    </tr>
    <tr>
      <td>{{jsxref("Operators/await", "await")}}</td>
      <td><code>await …</code></td>
    </tr>
    <tr>
      <td>14</td>
      <td>
        {{jsxref("Operators/Exponentiation","Potenciación (**)","", 1)}}
      </td>
      <td>a la derecha</td>
      <td><code>… ** …</code></td>
    </tr>
    <tr>
      <td rowspan="3">13</td>
      <td>
        {{jsxref("Operators/Multiplication","Multiplicación (*)","", 1)}}
      </td>
      <td rowspan="3">a la izquierda</td>
      <td><code>… * …</code></td>
    </tr>
    <tr>
      <td>
        {{jsxref("Operators/Division","División (/)","", 1)}}
      </td>
      <td><code>… / …</code></td>
    </tr>
    <tr>
      <td>
        {{jsxref("Operators/Remainder","Resto (%)","", 1)}}
      </td>
      <td><code>… % …</code></td>
    </tr>
    <tr>
      <td rowspan="2">12</td>
      <td>
        {{jsxref("Operators/Addition","Adición (+)","", 1)}}
      </td>
      <td rowspan="2">a la izquierda</td>
      <td><code>… + …</code></td>
    </tr>
    <tr>
      <td>
        {{jsxref("Operators/Subtraction","Sustracción (-)","", 1)}}
      </td>
      <td><code>… - …</code></td>
    </tr>
    <tr>
      <td rowspan="3">11</td>
      <td>
        {{jsxref("Operators/Left_shift","Desplazamiento de bits a la izquierda (&#x3C;&#x3C;)","", 1)}}
      </td>
      <td rowspan="3">a la izquierda</td>
      <td><code>… &#x3C;&#x3C; …</code></td>
    </tr>
    <tr>
      <td>
        {{jsxref("Operators/Right_shift","Desplazamiento de bits a la derecha (&#x3E;&#x3E;)","", 1)}}
      </td>
      <td><code>… &#x3E;&#x3E; …</code></td>
    </tr>
    <tr>
      <td>
        {{jsxref("Operators/Unsigned_right_shift","Desplazamiento de bits a la derecha sin signo (&#x3E;&#x3E;&#x3E;)","", 1)}}
      </td>
      <td><code>… &#x3E;&#x3E;&#x3E; …</code></td>
    </tr>
    <tr>
      <td rowspan="6">10</td>
      <td>
        {{jsxref("Operators/Less_than","Menor a (&#x3C;)","", 1)}}
      </td>
      <td rowspan="6">a la izquierda</td>
      <td><code>… &#x3C; …</code></td>
    </tr>
    <tr>
      <td>
        {{jsxref("Operators/Less_than_or_equal","Menor o igual a (&#x3C;&#x3D;)","", 1)}}
      </td>
      <td><code>… &#x3C;&#x3D; …</code></td>
    </tr>
    <tr>
      <td>
        {{jsxref("Operators/Greater_than","Mayor a (&#x3E;)","", 1)}}
      </td>
      <td><code>… &#x3E; …</code></td>
    </tr>
    <tr>
      <td>
        {{jsxref("Operators/Greater_than_or_equal","Mayor o igual a (&#x3E;&#x3D;)","", 1)}}
      </td>
      <td><code>… &#x3E;&#x3D; …</code></td>
    </tr>
    <tr>
      <td>{{jsxref("Operators/in", "in")}}</td>
      <td><code>… in …</code></td>
    </tr>
    <tr>
      <td>{{jsxref("Operators/instanceof", "instanceof")}}</td>
      <td><code>… instanceof …</code></td>
    </tr>
    <tr>
      <td rowspan="4">9</td>
      <td>
        {{jsxref("Operators/Equality","Igualdad (&#x3D;&#x3D;)","", 1)}}
      </td>
      <td rowspan="4">a la izquierda</td>
      <td><code>… == …</code></td>
    </tr>
    <tr>
      <td>
        {{jsxref("Operators/Inequality","Desigualdad (!&#x3D;)","", 1)}}
      </td>
      <td><code>… != …</code></td>
    </tr>
    <tr>
      <td>
        {{jsxref("Operators/Strict_equality","Igualdad estricta (&#x3D;&#x3D;&#x3D;)","", 1)}}
      </td>
      <td><code>… === …</code></td>
    </tr>
    <tr>
      <td>
        {{jsxref("Operators/Strict_inequality","Desigualdad estricta (!&#x3D;&#x3D;)","", 1)}}
      </td>
      <td><code>… !== …</code></td>
    </tr>
    <tr>
      <td>8</td>
      <td>
        {{jsxref("Operators/Bitwise_AND","AND a nivel de bits (&#x26;)","", 1)}}
      </td>
      <td>a la izquierda</td>
      <td><code>… &#x26; …</code></td>
    </tr>
    <tr>
      <td>7</td>
      <td>
        {{jsxref("Operators/Bitwise_XOR","XOR a nivel de bits (^)","", 1)}}
      </td>
      <td>a la izquierda</td>
      <td><code>… ^ …</code></td>
    </tr>
    <tr>
      <td>6</td>
      <td>
        {{jsxref("Operators/Bitwise_OR","OR a nivel de bits (|)","", 1)}}
      </td>
      <td>a la izquierda</td>
      <td><code>… | …</code></td>
    </tr>
    <tr>
      <td>5</td>
      <td>
        {{jsxref("Operators/Logical_AND","AND lógico (&#x26;&#x26;)","", 1)}}
      </td>
      <td>a la izquierda</td>
      <td><code>… &#x26;&#x26; …</code></td>
    </tr>
    <tr>
      <td rowspan="2">4</td>
      <td>
        {{jsxref("Operators/Logical_OR","OR lógico (||)","", 1)}}
      </td>
      <td>a la izquierda</td>
      <td><code>… || …</code></td>
    </tr>
    <tr>
      <td>
        {{jsxref("Operators/Nullish_coalescing_operator","Operador de coalescencia nula (??)","", 1)}}
      </td>
      <td>a la izquierda</td>
      <td><code>… ?? …</code></td>
    </tr>
    <tr>
      <td>3</td>
      <td>
        {{jsxref("Operators/Conditional_Operator","Operador condicional (ternario)","", 1)}}
      </td>
      <td>a la derecha</td>
      <td><code>… ? … : …</code></td>
    </tr>
    <tr>
      <td rowspan="18">2</td>
      <td rowspan="16">
        {{jsxref("Operators","Asignación","#operadores_de_asignaci%C3%B3n", 1)}}
      </td>
      <td rowspan="16">a la derecha</td>
      <td><code>… = …</code></td>
    </tr>
    <tr>
      <td><code>… += …</code></td>
    </tr>
    <tr>
      <td><code>… -= …</code></td>
    </tr>
    <tr>
      <td><code>… **= …</code></td>
    </tr>
    <tr>
      <td><code>… *= …</code></td>
    </tr>
    <tr>
      <td><code>… /= …</code></td>
    </tr>
    <tr>
      <td><code>… %= …</code></td>
    </tr>
    <tr>
      <td><code>… &#x3C;&#x3C;= …</code></td>
    </tr>
    <tr>
      <td><code>… >>= …</code></td>
    </tr>
    <tr>
      <td><code>… >>>= …</code></td>
    </tr>
    <tr>
      <td><code>… &#x26;= …</code></td>
    </tr>
    <tr>
      <td><code>… ^= …</code></td>
    </tr>
    <tr>
      <td><code>… |= …</code></td>
    </tr>
    <tr>
      <td><code>… &#x26;&#x26;= …</code></td>
    </tr>
    <tr>
      <td><code>… ||= …</code></td>
    </tr>
    <tr>
      <td><code>… ??= …</code></td>
    </tr>
    <tr>
      <td>{{jsxref("Operators/yield", "yield")}}</td>
      <td rowspan="2">a la derecha</td>
      <td><code>yield …</code></td>
    </tr>
    <tr>
      <td>{{jsxref("Operators/yield*", "yield*")}}</td>
      <td><code>yield* …</code></td>
    </tr>
    <tr>
      <td>1</td>
      <td>
        {{jsxref("Operators/Comma_Operator","Operador coma","", 1)}}
      </td>
      <td>a la izquierda</td>
      <td><code>… , …</code></td>
    </tr>
  </tbody>
</table>
