---
title: Précédence des opérateurs
slug: Web/JavaScript/Reference/Operators/Operator_precedence
---

{{jsSidebar("Operators")}}

La **précédence des opérateurs** détermine l'ordre dans lequel les opérateurs sont évalués. Les opérateurs avec la plus haute précédence sont évalués en premier.

Ainsi, l'opérateur de multiplication (« `*` ») (ayant une précédence plus haute que l'opérateur d'addition (« `+` »)) est évalué en premier et l'expression `6 * 4 + 2` renverra 26 (et pas 36).

{{EmbedInteractiveExample("pages/js/expressions-operatorprecedence.html")}}

## Associativité

L'associativité détermine l'ordre dans lequel des opérateurs de même précédence sont évalués. Par exemple, considérons l'expression suivante :

```js
a OP b OP c
```

Une associativité de gauche (gauche à droite) signifie qu'elle est évaluée comme `(a OP b) OP c`, tandis qu'une associativité de droite (droite à gauche) signifie qu'elle est interprétée comme `a OP (b OP c)`. Les opérateurs d'affectation sont associatifs de droite, on peut donc écrire :

```js
a = b = 5;
```

avec le résultat attendu que `a` et `b` obtiennent la même valeur de 5. C'est parce que l'opérateur d'affectation retourne la valeur qu'il affecte. D'abord, `b` est défini à la valeur 5. Ensuite, `a` est défini avec la valeur renvoyée par `b = 5` qui est 5.

## Exemples

```js
3 > 2 && 2 > 1;
// renvoie true

3 > 2 > 1;
// renvoie false car 3 > 2 vaut true et que true > 1 vaut false
// En ajoutant des parenthèses, on y voit plus clair (3 > 2) > 1
```

## Tableau

Le tableau suivant est classé de la plus haute (19) à la plus basse (1) précédence.

<table class="fullwidth-table">
  <tbody>
    <tr>
      <th>Précédence</th>
      <th>Type d'opérateur</th>
      <th>Associativité</th>
      <th>Opérateurs individuels</th>
    </tr>
    <tr>
      <td>19</td>
      <td>
        <a href="/fr/docs/Web/JavaScript/Reference/Operators/Grouping"
          >Groupement</a
        >
      </td>
      <td>Non applicable</td>
      <td><code>( … )</code></td>
    </tr>
    <tr>
      <td colspan="1" rowspan="5">18</td>
      <td>
        <a
          href="/fr/docs/Web/JavaScript/Reference/Operators/Property_Accessors#notation_avec_point"
          >Accès à un membre</a
        >
      </td>
      <td rowspan="2">Gauche à droite</td>
      <td><code>… . …</code></td>
    </tr>
    <tr>
      <td>
        <a
          href="/fr/docs/Web/JavaScript/Reference/Operators/Property_Accessors#notation_avec_crochets"
          >Accès à un membre calculé</a
        >
      </td>
      <td><code>… [ … ]</code></td>
    </tr>
    <tr>
      <td>
        <code
          ><a
            href="/fr/docs/Web/JavaScript/Reference/Operators/new"
            >new</a
          ></code
        >
        (avec une liste d'arguments)
      </td>
      <td>Non applicable</td>
      <td><code>new … ( … )</code></td>
    </tr>
    <tr>
      <td>
        <a href="/fr/docs/Web/JavaScript/Guide/Functions">Appel de fonction</a>
      </td>
      <td rowspan="2">Gauche à droite</td>
      <td>
        <code>… ( <var>… </var>)</code>
      </td>
    </tr>
    <tr>
      <td>
        <a href="/fr/docs/Web/JavaScript/Reference/Operators/Optional_chaining"
          >Chaînage optionnel</a
        >
      </td>
      <td><code>?.</code></td>
    </tr>
    <tr>
      <td>17</td>
      <td>
        <code
          ><a
            href="/fr/docs/Web/JavaScript/Reference/Operators/new"
            >new</a
          ></code
        >
        (sans liste d'arguments)
      </td>
      <td>Droite à gauche</td>
      <td><code>new …</code></td>
    </tr>
    <tr>
      <td rowspan="2">16</td>
      <td>
        <a
          href="/fr/docs/Web/JavaScript/Reference/Operators#incrémentation_et_décrémentation"
          >Incrémentation suffixe</a
        >
      </td>
      <td rowspan="2">Non applicable</td>
      <td><code>… ++</code></td>
    </tr>
    <tr>
      <td>
        <a
          href="/fr/docs/Web/JavaScript/Reference/Operators#incrémentation_et_décrémentation"
          >Décrémentation suffixe</a
        >
      </td>
      <td><code>… --</code></td>
    </tr>
    <tr>
      <td colspan="1" rowspan="10">15</td>
      <td>
        <a
          href="/fr/docs/Web/JavaScript/Reference/Operators/Logical_NOT"
          >NON logique (!)</a
        >
      </td>
      <td rowspan="10">Droite à gauche</td>
      <td><code>! …</code></td>
    </tr>
    <tr>
      <td>
        <a
          href="/fr/docs/Web/JavaScript/Reference/Operators/Bitwise_NOT"
          >NON binaire (~)</a
        >
      </td>
      <td><code>~ …</code></td>
    </tr>
    <tr>
      <td>
        <a
          href="/fr/docs/Web/JavaScript/Reference/Operators/Unary_plus"
          >Plus unaire (+)</a
        >
      </td>
      <td><code>+ …</code></td>
    </tr>
    <tr>
      <td>
        <a
          href="/fr/docs/Web/JavaScript/Reference/Operators/Unary_negation"
          >Négation unaire (-)</a
        >
      </td>
      <td><code>- …</code></td>
    </tr>
    <tr>
      <td>
        <a
          href="/fr/docs/Web/JavaScript/Reference/Operators#incrémentation_et_décrémentation"
          >Incrémentation préfixe</a
        >
      </td>
      <td><code>++ …</code></td>
    </tr>
    <tr>
      <td>
        <a
          href="/fr/docs/Web/JavaScript/Reference/Operators#incrémentation_et_décrémentation"
          >Décrémentation préfixe</a
        >
      </td>
      <td><code>-- …</code></td>
    </tr>
    <tr>
      <td>
        <code
          ><a
            href="/fr/docs/Web/JavaScript/Reference/Operators/typeof"
            >typeof</a
          ></code
        >
      </td>
      <td><code>typeof …</code></td>
    </tr>
    <tr>
      <td>
        <code
          ><a
            href="/fr/docs/Web/JavaScript/Reference/Operators/void"
            >void</a
          ></code
        >
      </td>
      <td><code>void …</code></td>
    </tr>
    <tr>
      <td>
        <code
          ><a
            href="/fr/docs/Web/JavaScript/Reference/Operators/delete"
            >delete</a
          ></code
        >
      </td>
      <td><code>delete …</code></td>
    </tr>
    <tr>
      <td>
        <code
          ><a href="/fr/docs/Web/JavaScript/Reference/Operators/await"
            >await</a
          ></code
        >
      </td>
      <td><code>await …</code></td>
    </tr>
    <tr>
      <td>14</td>
      <td>
        <a
          href="/fr/docs/Web/JavaScript/Reference/Operators/Exponentiation"
          >Exponentiation (**)</a
        >
      </td>
      <td>Droite à gauche</td>
      <td><code>… ** …</code></td>
    </tr>
    <tr>
    <td rowspan="3">13</td>
      <td>
        <a
          href="/fr/docs/Web/JavaScript/Reference/Operators/Multiplication"
          >Multiplication (*)</a
        >
      </td>
      <td rowspan="3">Gauche à droite</td>
      <td><code>… * …</code></td>
    </tr>
    <tr>
      <td>
        <a
          href="/fr/docs/Web/JavaScript/Reference/Operators/Division"
          >Division (/)</a
        >
      </td>
      <td><code>… / …</code></td>
    </tr>
    <tr>
      <td>
        <a
          href="/fr/docs/Web/JavaScript/Reference/Operators/Remainder"
          >Reste (%)</a
        >
      </td>
      <td><code>… % …</code></td>
    </tr>
    <tr>
      <td rowspan="2">12</td>
      <td>
        <a
          href="/fr/docs/Web/JavaScript/Reference/Operators/Addition"
          >Addition (+)</a
        >
      </td>
      <td rowspan="2">Gauche à droite</td>
      <td><code>… + …</code></td>
    </tr>
    <tr>
      <td>
        <a
          href="/fr/docs/Web/JavaScript/Reference/Operators/Subtraction"
          >Soustraction (-)</a
        >
      </td>
      <td><code>… - …</code></td>
    </tr>
    <tr>
      <td rowspan="3">11</td>
      <td>
        <a
          href="/fr/docs/Web/JavaScript/Reference/Operators/Left_shift"
          >Décalage binaire à gauche (&#x3C;&#x3C;)</a
        >
      </td>
      <td rowspan="3">Gauche à droite</td>
      <td><code>… &#x3C;&#x3C; …</code></td>
    </tr>
    <tr>
      <td>
        <a
          href="/fr/docs/Web/JavaScript/Reference/Operators/Right_shift"
          >Décalage binaire à droite (>>)</a
        >
      </td>
      <td><code>… >> …</code></td>
    </tr>
    <tr>
      <td>
        <a
          href="/fr/docs/Web/JavaScript/Reference/Operators/Unsigned_right_shift"
          >Décalage binaire à droite non-signé (>>>)</a
        >
      </td>
      <td><code>… >>> …</code></td>
    </tr>
    <tr>
      <td rowspan="6">10</td>
      <td>
        <a
          href="/fr/docs/Web/JavaScript/Reference/Operators/Less_than"
          >Inférieur strict (&#x3C;)</a
        >
      </td>
      <td rowspan="6">Gauche à droite</td>
      <td><code>… &#x3C; …</code></td>
    </tr>
    <tr>
      <td>
        <a
          href="/fr/docs/Web/JavaScript/Reference/Operators/Less_than_or_equal"
          >Inférieur ou égal (&#x3C;=)</a
        >
      </td>
      <td><code>… &#x3C;= …</code></td>
    </tr>
    <tr>
      <td>
        <a
          href="/fr/docs/Web/JavaScript/Reference/Operators/Greater_than"
          >Supérieur strict (>)</a
        >
      </td>
      <td><code>… > …</code></td>
    </tr>
    <tr>
      <td>
        <a
          href="/fr/docs/Web/JavaScript/Reference/Operators/Greater_than_or_equal"
          >Supérieur ou égal (>=)</a
        >
      </td>
      <td><code>… >= …</code></td>
    </tr>
    <tr>
      <td>
        <code
          ><a href="/fr/docs/Web/JavaScript/Reference/Operators/in"
            >in</a
          ></code
        >
      </td>
      <td><code>… in …</code></td>
    </tr>
    <tr>
      <td>
        <code
          ><a
            href="/fr/docs/Web/JavaScript/Reference/Operators/instanceof"
            >instanceof</a
          ></code
        >
      </td>
      <td><code>… instanceof …</code></td>
    </tr>
    <tr>
      <td rowspan="4">9</td>
      <td>
        <a
          href="/fr/docs/Web/JavaScript/Reference/Operators/Equality"
          >Égalité faible (==)</a
        >
      </td>
      <td rowspan="4">Gauche à droite</td>
      <td><code>… == …</code></td>
    </tr>
    <tr>
      <td>
        <a
          href="/fr/docs/Web/JavaScript/Reference/Operators/Inequality"
          >Inégalité faible (!=)</a
        >
      </td>
      <td><code>… != …</code></td>
    </tr>
    <tr>
      <td>
        <a
          href="/fr/docs/Web/JavaScript/Reference/Operators/Strict_equality"
          >Égalité stricte (===)</a
        >
      </td>
      <td><code>… === …</code></td>
    </tr>
    <tr>
      <td>
        <a
          href="/fr/docs/Web/JavaScript/Reference/Operators/Strict_inequality"
          >Inégalité stricte (!==)</a
        >
      </td>
      <td><code>… !== …</code></td>
    </tr>
    <tr>
      <td>8</td>
      <td>
        <a
          href="/fr/docs/Web/JavaScript/Reference/Operators/Bitwise_AND"
          >ET binaire (&#x26;)</a
        >
      </td>
      <td>Gauche à droite</td>
      <td><code>… &#x26; …</code></td>
    </tr>
    <tr>
      <td>7</td>
      <td>
        <a
          href="/fr/docs/Web/JavaScript/Reference/Operators/Bitwise_XOR"
          >OU exclusif / XOR binaire (^)</a
        >
      </td>
      <td>Gauche à droite</td>
      <td><code>… ^ …</code></td>
    </tr>
    <tr>
      <td>6</td>
      <td>
        <a
          href="/fr/docs/Web/JavaScript/Reference/Operators/Bitwise_OR"
          >OU binaire (|)</a
        >
      </td>
      <td>Gauche à droite</td>
      <td><code>… | …</code></td>
    </tr>
    <tr>
      <td>5</td>
      <td>
        <a
          href="/fr/docs/Web/JavaScript/Reference/Operators/Logical_AND"
          >ET logique (&#x26;&#x26;)</a
        >
      </td>
      <td>Gauche à droite</td>
      <td><code>… &#x26;&#x26; …</code></td>
    </tr>
    <tr>
      <td rowspan="2">4</td>
      <td>
        <a
          href="/fr/docs/Web/JavaScript/Reference/Operators/Logical_OR"
          >OU logique (||)</a
        >
      </td>
      <td rowspan="2">Gauche à droite</td>
      <td><code>… || …</code></td>
    </tr>
    <tr>
      <td>
        <a
          href="/fr/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator"
          >Coalescence des nuls (??)</a
        >
      </td>
      <td><code>… ?? …</code></td>
    </tr>
    <tr>
      <td>3</td>
      <td>
        <a
          href="/fr/docs/Web/JavaScript/Reference/Operators/Conditional_Operator"
          >Opérateur conditionnel ternaire</a
        >
      </td>
      <td>Droite à gauche</td>
      <td><code>… ? … : …</code></td>
    </tr>
    <tr>
      <td rowspan="18">2</td>
      <td rowspan="16">
        <a
          href="/fr/docs/Web/JavaScript/Reference/Operators#opérateurs_daffectation"
          >Affectation</a
        >
      </td>
      <td rowspan="16">Droite à gauche</td>
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
      <td>
        <code
          ><a href="/fr/docs/Web/JavaScript/Reference/Operators/yield"
            >yield</a
          ></code
        >
      </td>
      <td rowspan="2">Droite à gauche</td>
      <td><code>yield …</code></td>
    </tr>
    <tr>
      <td>
        <code
          ><a href="/fr/docs/Web/JavaScript/Reference/Operators/yield*"
            >yield*</a
          ></code
        >
      </td>
      <td><code>yield* …</code></td>
    </tr>
    <tr>
      <td>1</td>
      <td>
        <a
          href="/fr/docs/Web/JavaScript/Reference/Operators/Comma_Operator"
          >Virgule</a
        >
      </td>
      <td>Gauche à droite</td>
      <td><code>… , …</code></td>
    </tr>
  </tbody>
</table>
