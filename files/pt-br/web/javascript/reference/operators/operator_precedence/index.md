---
title: Precedência de Operadores
slug: Web/JavaScript/Reference/Operators/Operator_precedence
---

{{jsSidebar("Operators")}}

## Resumo

A precedência de operadores determina a ordem em que os operadores são processados. Operadores com maior precedência são processados primeiro.

Um exemplo simples:

```
3 + 4 * 5 // returns 23
```

O operador de multiplicação ("`*`") tem maior precedência que o operador de adição ("`+`") e por isso será executado primeiro.

## Associatividade

Associatividade determina a ordem em que operadores da mesma precedência são processados. Por exemplo, considere a expressão:

```
a OP b OP c
```

Associatividade à esquerda (esquerda para direita) significa que a expressão será processada como `(a OP b) OP c`, enquanto associatividade à direita (direita para esquerda) significa que será interpretada como `a OP (b OP c)`. Operadores de atribuição são associativos à direita, então você pode escrever:

```
a = b = 5; 5 = b = a
```

com o resultado esperado que `a` e `b` tenham o valor 5. Isto é porque o operador de atribuição retorna o valor que ele atribuiu. Primeiro, `b` é definido com o valor 5. Então `a` é definido com o valor de `b`.

## Tabela

A tabela seguinte está ordenada da mais alta (20) para a mais baixa (0) precedência.

<table class="fullwidth-table">
  <tbody>
    <tr>
      <th>Precedência</th>
      <th>Tipo do Operador</th>
      <th>Associatividade</th>
      <th>Operadores individuais</th>
    </tr>
    <tr>
      <td>20</td>
      <td>
        <a href="/pt-BR/docs/Web/JavaScript/Reference/Operators/Grouping"
          >Agrupamento</a
        >
      </td>
      <td>n/a</td>
      <td><code>( … )</code></td>
    </tr>
    <tr>
      <td rowspan="3">19</td>
      <td>
        <a
          href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Property_Accessors#Dot_notation"
          >Acesso a Membro</a
        >
      </td>
      <td>esquerda para direita</td>
      <td><code>… . …</code></td>
    </tr>
    <tr>
      <td>
        <a
          href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Property_Accessors#Dot_notation"
          >Acesso a Membro Computado</a
        >
      </td>
      <td>esquerda para direita</td>
      <td><code>… [ … ]</code></td>
    </tr>
    <tr>
      <td>
        <a
          href="/pt-BR/docs/JavaScript/Reference/Operators/Special/new"
          >new</a
        >
        (com lista de argumentos)
      </td>
      <td>n/a</td>
      <td><code>new … ( … )</code></td>
    </tr>
    <tr>
      <td rowspan="2">18</td>
      <td>
        <a
          href="/pt-BR/docs/Web/JavaScript/Guide/Functions"
          >Chamada a Função</a
        >
      </td>
      <td>esquerda para direita</td>
      <td>
        <code>… ( <var>… </var>)</code>
      </td>
    </tr>
    <tr>
      <td>
        <a
          href="/pt-BR/docs/Web/JavaScript/Reference/Operators/new"
          >new</a
        >
        (sem lista de argumentos)
      </td>
      <td>direita para esquerda</td>
      <td><code>new …</code></td>
    </tr>
    <tr>
      <td rowspan="2">17</td>
      <td>
        <a
          href="/pt-BR/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Increment"
          >Incremento Pós-fixado</a
        >
      </td>
      <td>n/a</td>
      <td><code>… ++</code></td>
    </tr>
    <tr>
      <td>
        <a
          href="/pt-BR/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Decrement"
          >Decremento Pós-fixado</a
        >
      </td>
      <td>n/a</td>
      <td><code>… --</code></td>
    </tr>
    <tr>
      <td rowspan="9">16</td>
      <td>
        <a
          href="/pt-BR/docs/Web/JavaScript/Reference/Operators/Logical_Operators#Logical_NOT"
          >NÃO lógico</a
        >
      </td>
      <td>direita para esquerda</td>
      <td><code>! …</code></td>
    </tr>
    <tr>
      <td>
        <a
          href="/pt-BR/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators#Bitwise_NOT"
          >NÃO bit-a-bit</a
        >
      </td>
      <td>direita para esquerda</td>
      <td><code>~ …</code></td>
    </tr>
    <tr>
      <td>
        <a
          href="/pt-BR/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Unary_plus"
          >Positivo Unário</a
        >
      </td>
      <td>direita para esquerda</td>
      <td><code>+ …</code></td>
    </tr>
    <tr>
      <td>
        <a
          href="/pt-BR/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Unary_negation"
          >Negativo Unário</a
        >
      </td>
      <td>direita para esquerda</td>
      <td><code>- …</code></td>
    </tr>
    <tr>
      <td>
        <a
          href="/pt-BR/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Increment"
          >Incremento Pré-fixado</a
        >
      </td>
      <td>direita para esquerda</td>
      <td><code>++ …</code></td>
    </tr>
    <tr>
      <td>
        <a
          href="/pt-BR/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Decrement"
          >Decremento Pré-fixado</a
        >
      </td>
      <td>direita para esquerda</td>
      <td><code>-- …</code></td>
    </tr>
    <tr>
      <td>
        <a
          href="/pt-BR/docs/Web/JavaScript/Reference/Operators/typeof"
          >typeof</a
        >
      </td>
      <td>direita para esquerda</td>
      <td><code>typeof …</code></td>
    </tr>
    <tr>
      <td>
        <a
          href="/pt-BR/docs/Web/JavaScript/Reference/Operators/void"
          >void</a
        >
      </td>
      <td>direita para esquerda</td>
      <td><code>void …</code></td>
    </tr>
    <tr>
      <td>
        <a
          href="/pt-BR/docs/Web/JavaScript/Reference/Operators/delete"
          >delete</a
        >
      </td>
      <td>direita para esquerda</td>
      <td><code>delete …</code></td>
    </tr>
    <tr>
      <td>15</td>
      <td>
        <p>
          <a
            href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Exponentiation"
            >Exponenciação</a
          >
        </p>
      </td>
      <td>direita para esquerda</td>
      <td>… ** …</td>
    </tr>
    <tr>
      <td rowspan="3">14</td>
      <td>
        <a
          href="/pt-BR/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Multiplication"
          >Multiplicação</a
        >
      </td>
      <td>esquerda para direita</td>
      <td><code>… * …</code></td>
    </tr>
    <tr>
      <td>
        <a
          href="/pt-BR/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Division"
          >Divisão</a
        >
      </td>
      <td>esquerda para direita</td>
      <td><code>… / …</code></td>
    </tr>
    <tr>
      <td>
        <a
          href="/pt-BR/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Remainder"
          >Resto</a
        >
      </td>
      <td>esquerda para direita</td>
      <td><code>… % …</code></td>
    </tr>
    <tr>
      <td rowspan="2">13</td>
      <td>
        <a
          href="/pt-BR/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Addition"
          >Adição</a
        >
      </td>
      <td>esquerda para direita</td>
      <td><code>… + …</code></td>
    </tr>
    <tr>
      <td>
        <a
          href="/pt-BR/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Subtraction"
          >Subtração</a
        >
      </td>
      <td>esquerda para direita</td>
      <td><code>… - …</code></td>
    </tr>
    <tr>
      <td rowspan="3">12</td>
      <td>
        <a
          href="/pt-BR/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators"
          >Deslocamento de bits para esquerda</a
        >
      </td>
      <td>esquerda para direita</td>
      <td><code>… &#x3C;&#x3C; …</code></td>
    </tr>
    <tr>
      <td>
        <a
          href="/pt-BR/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators"
          >Deslocamento de bits para direita</a
        >
      </td>
      <td>esquerda para direita</td>
      <td><code>… >> …</code></td>
    </tr>
    <tr>
      <td>
        <a
          href="/pt-BR/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators"
          >Deslocamento de bits para direita, sem sinal</a
        >
      </td>
      <td>esquerda para direita</td>
      <td><code>… >>> …</code></td>
    </tr>
    <tr>
      <td rowspan="6">11</td>
      <td>
        <a
          href="/pt-BR/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#Less_than_operator"
          >Menor Que</a
        >
      </td>
      <td>esquerda para direita</td>
      <td><code>… &#x3C; …</code></td>
    </tr>
    <tr>
      <td>
        <a
          href="/pt-BR/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#Less_than__or_equal_operator"
          >Menor ou Igual a</a
        >
      </td>
      <td>esquerda para direita</td>
      <td><code>… &#x3C;= …</code></td>
    </tr>
    <tr>
      <td>
        <a
          href="/pt-BR/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#Greater_than_operator"
          >Maior Que</a
        >
      </td>
      <td>esquerda para direita</td>
      <td><code>… > …</code></td>
    </tr>
    <tr>
      <td>
        <a
          href="/pt-BR/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#Greater_than_or_equal_operator"
          >Maior ou Igual a</a
        >
      </td>
      <td>esquerda para direita</td>
      <td><code>… >= …</code></td>
    </tr>
    <tr>
      <td>
        <a
          href="/pt-BR/docs/Web/JavaScript/Reference/Operators/in"
          >in</a
        >
      </td>
      <td>esquerda para direita</td>
      <td><code>… in …</code></td>
    </tr>
    <tr>
      <td>
        <a
          href="/pt-BR/docs/Web/JavaScript/Reference/Operators/instanceof"
          >instanceof</a
        >
      </td>
      <td>esquerda para direita</td>
      <td><code>… instanceof …</code></td>
    </tr>
    <tr>
      <td rowspan="4">10</td>
      <td>
        <a
          href="/pt-BR/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#Equality"
          >Igualdade</a
        >
      </td>
      <td>esquerda para direita</td>
      <td><code>… == …</code></td>
    </tr>
    <tr>
      <td>
        <a
          href="/pt-BR/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#Inequality"
          >Desigualdade</a
        >
      </td>
      <td>esquerda para direita</td>
      <td><code>… != …</code></td>
    </tr>
    <tr>
      <td>
        <a
          href="/pt-BR/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#Identity"
          >Igualdade Estrita</a
        >
      </td>
      <td>esquerda para direita</td>
      <td><code>… === …</code></td>
    </tr>
    <tr>
      <td>
        <a
          href="/pt-BR/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#Nonidentity"
          >Desigualdade Estrita</a
        >
      </td>
      <td>esquerda para direita</td>
      <td><code>… !== …</code></td>
    </tr>
    <tr>
      <td>9</td>
      <td>
        <a
          href="/pt-BR/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators#Bitwise_AND"
          >E bit-a-bit</a
        >
      </td>
      <td>esquerda para direita</td>
      <td><code>… &#x26; …</code></td>
    </tr>
    <tr>
      <td>8</td>
      <td>
        <a
          href="/pt-BR/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators#Bitwise_XOR"
          >OU exclusivo bit-a-bit</a
        >
      </td>
      <td>esquerda para direita</td>
      <td><code>… ^ …</code></td>
    </tr>
    <tr>
      <td>7</td>
      <td>
        <a
          href="/pt-BR/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators#Bitwise_OR"
          >OU bit-a-bit</a
        >
      </td>
      <td>esquerda para direita</td>
      <td><code>… | …</code></td>
    </tr>
    <tr>
      <td>6</td>
      <td>
        <a
          href="/pt-BR/docs/Web/JavaScript/Reference/Operators/Logical_Operators#Logical_AND"
          >E lógico</a
        >
      </td>
      <td>esquerda para direita</td>
      <td><code>… &#x26;&#x26; …</code></td>
    </tr>
    <tr>
      <td>5</td>
      <td>
        <a
          href="/pt-BR/docs/Web/JavaScript/Reference/Operators/Logical_Operators#Logical_OR"
          >OU lógico</a
        >
      </td>
      <td>esquerda para direita</td>
      <td><code>… || …</code></td>
    </tr>
    <tr>
      <td>4</td>
      <td>
        <a
          href="/pt-BR/docs/Web/JavaScript/Reference/Operators/Conditional_Operator"
          >Condicional</a
        >
      </td>
      <td>direita para esquerda</td>
      <td><code>… ? … : …</code></td>
    </tr>
    <tr>
      <td rowspan="12">3</td>
      <td rowspan="12">
        <a
          href="/pt-BR/docs/Web/JavaScript/Reference/Operators/Assignment_Operators"
          >Atribuição</a
        >
      </td>
      <td rowspan="12">direita para esquerda</td>
      <td><code>… = …</code></td>
    </tr>
    <tr>
      <td><code>… += …</code></td>
    </tr>
    <tr>
      <td><code>… -= …</code></td>
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
      <td rowspan="2">2</td>
      <td>
        <a
          href="/pt-BR/docs/Web/JavaScript/Reference/Operators/yield"
          >yield</a
        >
      </td>
      <td rowspan="2">direita para esquerda</td>
      <td><code>yield …</code></td>
    </tr>
    <tr>
      <td>
        <a
          href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/yield*"
          >yield*</a
        >
      </td>
      <td><code>yield* …</code></td>
    </tr>
    <tr>
      <td>1</td>
      <td>
        <a
          href="/pt-BR/docs/Web/JavaScript/Reference/Operators/Spread_operator"
          >Propagação</a
        >
      </td>
      <td>n/a</td>
      <td><code>...</code> …</td>
    </tr>
    <tr>
      <td>0</td>
      <td>
        <a
          href="/pt-BR/docs/Web/JavaScript/Reference/Operators/Comma_Operator"
          >Vírgula / Sequência</a
        >
      </td>
      <td>esquerda para direita</td>
      <td><code>… , …</code></td>
    </tr>
  </tbody>
</table>
