---
title: Précédence des opérateurs
slug: Web/JavaScript/Reference/Operators/Operator_Precedence
tags:
  - JavaScript
  - Opérateur
  - Reference
  - precedence
translation_of: Web/JavaScript/Reference/Operators/Operator_Precedence
original_slug: Web/JavaScript/Reference/Opérateurs/Précédence_des_opérateurs
---
{{jsSidebar("Operators")}}

La **précédence des opérateurs** détermine l'ordre dans lequel les opérateurs sont évalués. Les opérateurs avec la plus haute précédence sont évalués en premier.

Ainsi, l'opérateur de multiplication (« `*` ») (ayant une précédence plus haute que l'opérateur d'addition (« `+` »)) est évalué en premier et l'expression `6 * 4 + 2` renverra 26 (et pas 36).

{{EmbedInteractiveExample("pages/js/expressions-operatorprecedence.html")}}

## Associativité

L'associativité détermine l'ordre dans lequel des opérateurs de même précédence sont évalués. Par exemple, considérons l'expression suivante :

    a OP b OP c

Une associativité de gauche (gauche à droite) signifie qu'elle est évaluée comme `(a OP b) OP c`, tandis qu'une associativité de droite (droite à gauche) signifie qu'elle est interprétée comme `a OP (b OP c)`. Les opérateurs d'affectation sont associatifs de droite, on peut donc écrire :

```js
a = b = 5;
```

avec le résultat attendu que `a` et `b` obtiennent la même valeur de 5. C'est parce que l'opérateur d'affectation retourne la valeur qu'il affecte. D'abord, `b` est défini à la valeur 5. Ensuite, `a` est défini avec la valeur renvoyée par `b = 5` qui est 5.

## Exemples

```js
3 > 2 && 2 > 1
// renvoie true

3 > 2 > 1
// renvoie false car 3 > 2 vaut true et que true > 1 vaut false
// En ajoutant des parenthèses, on y voit plus clair (3 > 2) > 1
```

## Tableau

Le tableau suivant est classé de la plus haute (0) à la plus basse (19) précédence.

<table class="fullwidth-table">
  <tbody>
    <tr>
      <th>Précédence</th>
      <th>Type d'opérateur</th>
      <th>Associativité</th>
      <th>Opérateurs individuels</th>
    </tr>
    <tr>
      <td>0</td>
      <td>
        <a href="/fr/docs/Web/JavaScript/Reference/Op%C3%A9rateurs/Groupement"
          >Groupement</a
        >
      </td>
      <td>Non applicable</td>
      <td><code>( … )</code></td>
    </tr>
    <tr>
      <td colspan="1" rowspan="5">1</td>
      <td>
        <a
          href="/fr/docs/Web/JavaScript/Reference/Opérateurs/Opérateurs_de_membres#Notation_avec_point"
          >Accès à un membre</a
        >
      </td>
      <td>Gauche à droite</td>
      <td><code>… . …</code></td>
    </tr>
    <tr>
      <td>
        <a
          href="/fr/docs/Web/JavaScript/Reference/Opérateurs/Opérateurs_de_membres#Notation_avec_crochets"
          >Accès à un membre calculé</a
        >
      </td>
      <td>Gauche à droite</td>
      <td><code>… [ … ]</code></td>
    </tr>
    <tr>
      <td>
        <code
          ><a
            href="/fr/docs/JavaScript/Reference/R%C3%A9f%C3%A9rence_JavaScript/Op%C3%A9rateurs/Op%C3%A9rateurs_sp%C3%A9ciaux/L&#x27;op%C3%A9rateur_new"
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
        <a href="/fr/docs/Web/JavaScript/Guide/Fonctions">Appel de fonction</a>
      </td>
      <td>Gauche à droite</td>
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
      <td>Gauche à droite</td>
      <td><code>?.</code></td>
    </tr>
    <tr>
      <td>2</td>
      <td>
        <code
          ><a
            href="/fr/docs/JavaScript/Reference/R%C3%A9f%C3%A9rence_JavaScript/Op%C3%A9rateurs/Op%C3%A9rateurs_sp%C3%A9ciaux/L&#x27;op%C3%A9rateur_new"
            >new</a
          ></code
        >
        (sans liste d'arguments)
      </td>
      <td>Droite à gauche</td>
      <td><code>new …</code></td>
    </tr>
    <tr>
      <td rowspan="2">3</td>
      <td>
        <a
          href="/fr/docs/Web/JavaScript/Reference/Opérateurs/Opérateurs_arithmétiques#Incr.C3.A9ment_(.2B.2B)"
          >Incrémentation suffixe</a
        >
      </td>
      <td>Non applicable</td>
      <td><code>… ++</code></td>
    </tr>
    <tr>
      <td>
        <a
          href="/fr/docs/Web/JavaScript/Reference/Opérateurs/Opérateurs_arithmétiques#D.C3.A9cr.C3.A9ment_(--)"
          >Décrémentation suffixe</a
        >
      </td>
      <td>Non applicable</td>
      <td><code>… --</code></td>
    </tr>
    <tr>
      <td colspan="1" rowspan="10">4</td>
      <td>
        <a
          href="/fr/docs/Web/JavaScript/Reference/Opérateurs/Opérateurs_logiques#Logical_NOT_.28.21.29"
          >NON logique</a
        >
      </td>
      <td>Droite à gauche</td>
      <td><code>! …</code></td>
    </tr>
    <tr>
      <td>
        <a
          href="/fr/docs/Web/JavaScript/Reference/Opérateurs/Opérateurs_binaires#.7E_.28NON_binaire.29"
          >NON binaire</a
        >
      </td>
      <td>Droite à gauche</td>
      <td><code>~ …</code></td>
    </tr>
    <tr>
      <td>
        <a
          href="/fr/docs/Web/JavaScript/Reference/Opérateurs/Opérateurs_arithmétiques#Plus_unaire_(.2B)"
          >Plus unaire</a
        >
      </td>
      <td>Droite à gauche</td>
      <td><code>+ …</code></td>
    </tr>
    <tr>
      <td>
        <a
          href="/fr/docs/Web/JavaScript/Reference/Opérateurs/Opérateurs_arithmétiques#N.C3.A9gation_unaire_(-)"
          >Négation unaire</a
        >
      </td>
      <td>Droite à gauche</td>
      <td><code>- …</code></td>
    </tr>
    <tr>
      <td>
        <a
          href="/fr/docs/Web/JavaScript/Reference/Opérateurs/Opérateurs_arithmétiques#Incr.C3.A9ment_(.2B.2B)"
          >Incrémentation préfixe</a
        >
      </td>
      <td>Droite à gauche</td>
      <td><code>++ …</code></td>
    </tr>
    <tr>
      <td>
        <a
          href="/fr/docs/Web/JavaScript/Reference/Opérateurs/Opérateurs_arithmétiques#D.C3.A9cr.C3.A9ment_(--)"
          >Décrémentation préfixe</a
        >
      </td>
      <td>Droite à gauche</td>
      <td><code>-- …</code></td>
    </tr>
    <tr>
      <td>
        <code
          ><a
            href="/fr/docs/Web/JavaScript/Reference/Opérateurs/L_opérateur_typeof"
            >typeof</a
          ></code
        >
      </td>
      <td>Droite à gauche</td>
      <td><code>typeof …</code></td>
    </tr>
    <tr>
      <td>
        <code
          ><a
            href="/fr/docs/Web/JavaScript/Reference/Opérateurs/L_opérateur_void"
            >void</a
          ></code
        >
      </td>
      <td>Droite à gauche</td>
      <td><code>void …</code></td>
    </tr>
    <tr>
      <td>
        <code
          ><a
            href="/fr/docs/Web/JavaScript/Reference/Opérateurs/L_opérateur_delete"
            >delete</a
          ></code
        >
      </td>
      <td>Droite à gauche</td>
      <td><code>delete …</code></td>
    </tr>
    <tr>
      <td>
        <code
          ><a href="/fr/docs/Web/JavaScript/Reference/Op%C3%A9rateurs/await"
            >await</a
          ></code
        >
      </td>
      <td>Droite à gauche</td>
      <td><code>await …</code></td>
    </tr>
    <tr>
      <td rowspan="4">5</td>
      <td>
        <a
          href="/fr/docs/Web/JavaScript/Reference/Opérateurs/Opérateurs_arithmétiques#Exponentiation_(**)"
          >Exponentiation</a
        >
      </td>
      <td>Droite à gauche</td>
      <td><code>… ** …</code></td>
    </tr>
    <tr>
      <td>
        <a
          href="/fr/docs/Web/JavaScript/Reference/Opérateurs/Opérateurs_arithmétiques#Multiplication_(*)"
          >Multiplication</a
        >
      </td>
      <td>Gauche à droite</td>
      <td><code>… * …</code></td>
    </tr>
    <tr>
      <td>
        <a
          href="/fr/docs/Web/JavaScript/Reference/Opérateurs/Opérateurs_arithmétiques#Division_(.2F)"
          >Division</a
        >
      </td>
      <td>Gauche à droite</td>
      <td><code>… / …</code></td>
    </tr>
    <tr>
      <td>
        <a
          href="/fr/docs/Web/JavaScript/Reference/Opérateurs/Opérateurs_arithmétiques#Reste_(.25)"
          >Reste</a
        >
      </td>
      <td>Gauche à droite</td>
      <td><code>… % …</code></td>
    </tr>
    <tr>
      <td rowspan="2">6</td>
      <td>
        <a
          href="/fr/docs/Web/JavaScript/Reference/Opérateurs/Opérateurs_arithmétiques#Addition_(.2B)"
          >Addition</a
        >
      </td>
      <td>Gauche à droite</td>
      <td><code>… + …</code></td>
    </tr>
    <tr>
      <td>
        <a
          href="/fr/docs/Web/JavaScript/Reference/Opérateurs/Opérateurs_arithmétiques#Soustraction_(-)"
          >Soustraction</a
        >
      </td>
      <td>Gauche à droite</td>
      <td><code>… - …</code></td>
    </tr>
    <tr>
      <td rowspan="3">7</td>
      <td>
        <a
          href="/fr/docs/Web/JavaScript/Reference/Opérateurs/Opérateurs_binaires#.3C.3C_.28d.C3.A9calage_.C3.A0_gauche.29"
          >Décalage binaire à gauche</a
        >
      </td>
      <td>Gauche à droite</td>
      <td><code>… &#x3C;&#x3C; …</code></td>
    </tr>
    <tr>
      <td>
        <a
          href="/fr/docs/Web/JavaScript/Reference/Opérateurs/Opérateurs_binaires#.3E.3E_.28d.C3.A9calage_.C3.A0_droite_avec_propagation_du_signe.29"
          >Décalage binaire à droite</a
        >
      </td>
      <td>Gauche à droite</td>
      <td><code>… >> …</code></td>
    </tr>
    <tr>
      <td>
        <a
          href="/fr/docs/Web/JavaScript/Reference/Opérateurs/Opérateurs_binaires#.3E.3E.3E_.28d.C3.A9calage_.C3.A0_droite_avec_insertion_de_z.C3.A9ros.29"
          >Décalage binaire à droite non-signé</a
        >
      </td>
      <td>Gauche à droite</td>
      <td><code>… >>> …</code></td>
    </tr>
    <tr>
      <td rowspan="6">8</td>
      <td>
        <a
          href="/fr/docs/Web/JavaScript/Reference/Opérateurs/Opérateurs_de_comparaison#Inf.C3.A9rieur_strict_(<)"
          >Inférieur strict</a
        >
      </td>
      <td>Gauche à droite</td>
      <td><code>… &#x3C; …</code></td>
    </tr>
    <tr>
      <td>
        <a
          href="/fr/docs/Web/JavaScript/Reference/Opérateurs/Opérateurs_de_comparaison#Inf.C3.A9rieur_ou_.C3.A9gal_(<.3D)"
          >Inférieur ou égal</a
        >
      </td>
      <td>Gauche à droite</td>
      <td><code>… &#x3C;= …</code></td>
    </tr>
    <tr>
      <td>
        <a
          href="/fr/docs/Web/JavaScript/Reference/Opérateurs/Opérateurs_de_comparaison#Sup.C3.A9rieur_strict_(>)"
          >Supérieur strict</a
        >
      </td>
      <td>Gauche à droite</td>
      <td><code>… > …</code></td>
    </tr>
    <tr>
      <td>
        <a
          href="/fr/docs/Web/JavaScript/Reference/Opérateurs/Opérateurs_de_comparaison#Sup.C3.A9rieur_ou_.C3.A9gal_(>.3D)"
          >Supérieur ou égal</a
        >
      </td>
      <td>Gauche à droite</td>
      <td><code>… >= …</code></td>
    </tr>
    <tr>
      <td>
        <code
          ><a href="/fr/docs/Web/JavaScript/Reference/Opérateurs/L_opérateur_in"
            >in</a
          ></code
        >
      </td>
      <td>Gauche à droite</td>
      <td><code>… in …</code></td>
    </tr>
    <tr>
      <td>
        <code
          ><a
            href="/fr/docs/Web/JavaScript/Reference/Op%C3%A9rateurs/instanceof"
            >instanceof</a
          ></code
        >
      </td>
      <td>Gauche à droite</td>
      <td><code>… instanceof …</code></td>
    </tr>
    <tr>
      <td rowspan="4">9</td>
      <td>
        <a
          href="/fr/docs/Web/JavaScript/Reference/Opérateurs/Opérateurs_de_comparaison#.C3.89galit.C3.A9_simple_(.3D.3D)"
          >Égalité faible</a
        >
      </td>
      <td>Gauche à droite</td>
      <td><code>… == …</code></td>
    </tr>
    <tr>
      <td>
        <a
          href="/fr/docs/Web/JavaScript/Reference/Opérateurs/Opérateurs_de_comparaison#In.C3.A9galit.C3.A9_simple_(!.3D)"
          >Inégalité faible</a
        >
      </td>
      <td>Gauche à droite</td>
      <td><code>… != …</code></td>
    </tr>
    <tr>
      <td>
        <a
          href="/fr/docs/Web/JavaScript/Reference/Opérateurs/Opérateurs_de_comparaison#.C3.89galit.C3.A9_stricte_(.3D.3D.3D)"
          >Égalité stricte</a
        >
      </td>
      <td>Gauche à droite</td>
      <td><code>… === …</code></td>
    </tr>
    <tr>
      <td>
        <a
          href="/fr/docs/Web/JavaScript/Reference/Opérateurs/Opérateurs_de_comparaison#In.C3.A9galit.C3.A9_stricte_(!.3D.3D)"
          >Inégalité stricte</a
        >
      </td>
      <td>Gauche à droite</td>
      <td><code>… !== …</code></td>
    </tr>
    <tr>
      <td>10</td>
      <td>
        <a
          href="/fr/docs/Web/JavaScript/Reference/Opérateurs/Opérateurs_binaires#&#x26;_.28ET_binaire.29"
          >ET binaire</a
        >
      </td>
      <td>Gauche à droite</td>
      <td><code>… &#x26; …</code></td>
    </tr>
    <tr>
      <td>11</td>
      <td>
        <a
          href="/fr/docs/Web/JavaScript/Reference/Opérateurs/Opérateurs_binaires#.5E_.28XOR_binaire.29"
          >OU exclusif (<em>XOR</em>) binaire</a
        >
      </td>
      <td>Gauche à droite</td>
      <td><code>… ^ …</code></td>
    </tr>
    <tr>
      <td>12</td>
      <td>
        <a
          href="/fr/docs/Web/JavaScript/Reference/Opérateurs/Opérateurs_binaires#(OU_binaire)"
          title="JavaScript/Reference/Operators/Bitwise_Operators"
          >OU binaire</a
        >
      </td>
      <td>Gauche à droite</td>
      <td><code>… | …</code></td>
    </tr>
    <tr>
      <td>13</td>
      <td>
        <a
          href="/fr/docs/Web/JavaScript/Reference/Opérateurs/Opérateurs_logiques#Logical_AND_.28&#x26;&#x26;.29"
          >ET logique</a
        >
      </td>
      <td>Gauche à droite</td>
      <td><code>… &#x26;&#x26; …</code></td>
    </tr>
    <tr>
      <td>14</td>
      <td>
        <a
          href="/fr/docs/Web/JavaScript/Reference/Opérateurs/Opérateurs_logiques#OU_logique_(.7C.7C)"
          >OU logique</a
        >
      </td>
      <td>Gauche à droite</td>
      <td><code>… || …</code></td>
    </tr>
    <tr>
      <td>15</td>
      <td>
        <a
          href="/fr/docs/Web/JavaScript/Reference/Op%C3%A9rateurs/L_op%C3%A9rateur_conditionnel"
          >Opérateur conditionnel ternaire</a
        >
      </td>
      <td>Droite à gauche</td>
      <td><code>… ? … : …</code></td>
    </tr>
    <tr>
      <td rowspan="13">16</td>
      <td rowspan="13">
        <a
          href="/fr/docs/Web/JavaScript/Reference/Op%C3%A9rateurs/Op%C3%A9rateurs_d_affectation"
          >Affectation</a
        >
      </td>
      <td rowspan="13">Droite à gauche</td>
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
      <td><code>… **= …</code></td>
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
      <td colspan="1" rowspan="2">17</td>
      <td>
        <code
          ><a href="/fr/docs/Web/JavaScript/Reference/Op%C3%A9rateurs/yield"
            >yield</a
          ></code
        >
      </td>
      <td>Droite à gauche</td>
      <td><code>yield …</code></td>
    </tr>
    <tr>
      <td>
        <code
          ><a href="/fr/docs/Web/JavaScript/Reference/Opérateurs/yield*"
            >yield*</a
          ></code
        >
      </td>
      <td>Droite à gauche</td>
      <td><code>yield* …</code></td>
    </tr>
    <tr>
      <td>18</td>
      <td>
        <a
          href="/fr/docs/Web/JavaScript/Reference/Op%C3%A9rateurs/Op%C3%A9rateur_de_d%C3%A9composition"
          >Décomposition</a
        >
      </td>
      <td>Non applicable</td>
      <td><code>...</code> …</td>
    </tr>
    <tr>
      <td>19</td>
      <td>
        <a
          href="/fr/docs/Web/JavaScript/Reference/Op%C3%A9rateurs/L_op%C3%A9rateur_virgule"
          >Virgule</a
        >
      </td>
      <td>Gauche à droite</td>
      <td><code>… , …</code></td>
    </tr>
  </tbody>
</table>
