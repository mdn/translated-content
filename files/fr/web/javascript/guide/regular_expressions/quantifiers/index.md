---
title: Quantificateurs
slug: Web/JavaScript/Guide/Regular_expressions/Quantifiers
---

{{jsSidebar("JavaScript Guide")}}

Les quantificateurs indiquent le nombre de caractères ou d'expressions qu'il faut pour une correspondance.

## Types

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Caractères</th>
      <th scope="col">Signification</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>x*</code></td>
      <td>
        <p>
          Correspond à l'expression précédente qui est répétée 0 ou plusieurs
          fois. Équivalent à <code>{0,}</code>
        </p>
        <p>
          Ainsi, <code>/bo*/</code> correspond à 'boo' dans "Un booléen" et à
          'b' dans "Un bateau bleu", mais ne correspond à rien dans "Ce matin".
        </p>
      </td>
    </tr>
    <tr>
      <td><code>x+</code></td>
      <td>
        <p>
          Correspond à l'expression précédente qui est répétée une ou plusieurs
          fois. C'est équivalent à <code>{1,}</code>.
        </p>
        <p>
          Ainsi, <code>/a+/</code> correspond au 'a' dans "maison" et à tous les
          'a' dans "maaaaaaison" mais ne correspond à rien dans "mission".
        </p>
      </td>
    </tr>
    <tr>
      <td><code>x?</code></td>
      <td>
        <p>
          Correspond à l'expression précédente qui est présente une fois ou pas
          du tout. C'est équivalent à <code>{0,1}</code>.<br /><br />Ainsi,
          <code>/e?le?/</code> correspond au 'el' dans "gel" et au 'le' dans
          "angle" mais aussi au 'l' dans "Oslo".<br /><br />S'il est utilisé
          immédiatement après l'un des quantificateurs : *, +, ?, ou {}, il rend
          le quantificateur moins « gourmand » auquel cas le moins de caractères
          correspond (le comportement par défaut, « gourmand », permettant de
          faire correspondre le plus de caractères possible). Par exemple
          <code>/\d+/</code> utilisée avec "123abc" fait correspondre "123".
          Utiliser <code>/\d+?/</code> à la même chaîne de caractères fait
          correspondre "1".<br /><br />Ce symbole est également utilisé dans les
          tests de présence autour de l'expression, décrits par les lignes
          <code>x(?=y)</code> et <code>x(?!y)</code> de ce tableau.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>x{n}</code></td>
      <td>
        <p>
          Correspond pour exactement n occurences de l'expression précédente. N
          doit être un entier positif.<br /><br />Ainsi, <code>/a{2}/</code> ne
          correspond pas au 'a' de "Mozilla" mais correspond à tous les 'a' de
          "Mozilaa" et aux deux premiers 'a' de "Mozillaaa".
        </p>
      </td>
    </tr>
    <tr>
      <td><code>x{n,}</code></td>
      <td>
        <p>
          Correspond lorsqu'il y a au moins <code>n</code> occurences de
          l'expression précédente. <code>n</code> doit être un entier positif.
        </p>
        <p>
          Par exemple <code>/a{2,}/</code> correspondra à <code>"aa"</code> ou à
          <code>"aaa"</code> ou encore à <code>"aaaa"</code> mais pas à
          <code>"a"</code>.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>x{n,m}</code></td>
      <td>
        <p>
          Lorsque <code>n</code> et <code>m</code> sont des entiers positifs,
          cela correspond à au moins <code>n</code> occurences de l'expression
          précédente et à au plus <code>m</code> occurrences. Lorsque
          <code>m</code> n'est pas utilisé, la valeur par défaut correspondante
          sera l'infini.
        </p>
        <p>
          Ainsi, <code>/a{1,3}/</code> ne correspond à rien dans "Mozill", au
          'a' de "Mozilla", au deux premiers 'a' de "Mozillaa" et au trois
          premiers 'a' de "Mozillaaaaa". Pour ce dernier exemple, on doit noter
          que le correspondance ne se fait que sur "aaa" bien qu'il y ait plus
          de 'a' dans la chaîne de caractères.
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <p>
          <code>x*?</code><br /><code>x+?</code><br /><code>x??</code
          ><br /><code>x{n}?</code><br /><code>x{n,}?</code><br /><code
            >x{n,m}?</code
          >
        </p>
      </td>
      <td>
        <p>
          Correspond à l'expression précédente qui est présente une fois ou pas
          du tout. C'est équivalent à <code>{0,1}</code>.<br /><br />Ainsi,
          <code>/e?le?/</code> correspond au 'el' dans "gel" et au 'le' dans
          "angle" mais aussi au 'l' dans "Oslo".<br /><br />S'il est utilisé
          immédiatement après l'un des quantificateurs : *, +, ?, ou {}, il rend
          le quantificateur moins « gourmand » auquel cas le moins de caractères
          correspond (le comportement par défaut, « gourmand », permettant de
          faire correspondre le plus de caractères possible). Par exemple
          <code>/\d+/</code> utilisée avec "123abc" fait correspondre "123".
          Utiliser <code>/\d+?/</code> à la même chaîne de caractères fait
          correspondre "1".<br /><br />Ce symbole est également utilisé dans les
          tests de présence autour de l'expression, décrits par les lignes
          <code>x(?=y)</code> et <code>x(?!y)</code> de ce tableau.
        </p>
      </td>
    </tr>
  </tbody>
</table>
