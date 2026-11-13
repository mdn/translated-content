---
title: "Caractère littéral : a, b"
slug: Web/JavaScript/Reference/Regular_expressions/Literal_character
l10n:
  sourceCommit: aff319cd81d10cfda31b13adb3263deafb284b20
---

Un **caractère littéral** (<i lang="en">literal character</i> en anglais) correspond exactement à lui-même dans le texte d'entrée.

## Syntaxe

```regex
c
```

### Paramètres

- `c`
  - : Un seul caractère qui n'est pas l'un des caractères de syntaxe décrits ci-dessous.

## Description

Dans les expressions rationnelles, la plupart des caractères peuvent apparaître littéralement. Ils constituent généralement les éléments de base les plus simples des motifs. Par exemple, voici un motif tiré de l'exemple [supprimer des balises HTML](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Quantifier#supprimer_des_balises_html)&nbsp;:

```js
const motif = /<.+?>/g;
```

Dans cet exemple, `.`, `+` et `?` sont appelés _caractères de syntaxe_. Ils ont des significations particulières dans les expressions rationnelles. Les autres caractères du motif (`<` et `>`) sont des caractères littéraux. Ils correspondent à eux-mêmes dans le texte d'entrée&nbsp;: les chevrons gauche et droit.

Les caractères suivants sont des caractères de syntaxe dans les expressions rationnelles et ne peuvent pas apparaître comme caractères littéraux&nbsp;:

- [`^`, `$`](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Input_boundary_assertion)
- [`\`](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape)
- [`*`, `+`, `?`, `{`, `}`](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Quantifier)
- [`(`, `)`](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group)
- [`[`, `]`](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Character_class)
- [`|`](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction)

Dans les classes de caractères, davantage de caractères peuvent apparaître littéralement. Consultez la page [Classe de caractères](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Character_class) pour en savoir plus. Par exemple `\.` et `[.]` correspondent tous deux à un `.` littéral. Dans les [classes de caractères en mode `v`](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Character_class#classe_de_caractères_du_mode_v), toutefois, d'autres caractères sont réservés à la syntaxe. Le tableau ci-dessous répertorie les caractères ASCII et indique s'ils peuvent apparaître échappés ou non échappés selon le contexte&nbsp;: «&nbsp;✅&nbsp;» signifie que le caractère représente lui-même, «&nbsp;❌&nbsp;» signifie qu'il provoque une erreur de syntaxe, et «&nbsp;⚠️&nbsp;» signifie que le caractère est valide, mais représente autre chose que lui-même.

<table class="fullwidth-table">
  <thead>
    <tr>
      <th scope="col" rowspan="2">Caractères</th>
      <th scope="col" colspan="2">Hors des classes de caractères en mode <code>u</code> ou <code>v</code></th>
      <th scope="col" colspan="2">Dans les classes de caractères en mode <code>u</code></th>
      <th scope="col" colspan="2">Dans les classes de caractères en mode <code>v</code></th>
    </tr>
    <tr>
      <th scope="col">Non échappé</th>
      <th scope="col">Échappé</th>
      <th scope="col">Non échappé</th>
      <th scope="col">Échappé</th>
      <th scope="col">Non échappé</th>
      <th scope="col">Échappé</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>123456789&nbsp;"'<br>ACEFGHIJKLMN<br>OPQRTUVXYZ_<br>aceghijklmop<br>quxyz</code></td>
      <td>✅</td><td>❌</td><td>✅</td><td>❌</td><td>✅</td><td>❌</td>
    </tr>
    <tr>
      <td><code>!#%&,:;&lt;=&gt;@`~</code></td>
      <td>✅</td><td>❌</td><td>✅</td><td>❌</td><td>✅</td><td>✅</td>
    </tr>
    <tr>
      <td><code>]</code></td>
      <td>❌</td><td>✅</td><td>❌</td><td>✅</td><td>❌</td><td>✅</td>
    </tr>
    <tr>
      <td><code>()[{}</code></td>
      <td>❌</td><td>✅</td><td>✅</td><td>✅</td><td>❌</td><td>✅</td>
    </tr>
    <tr>
      <td><code>*+?</code></td>
      <td>❌</td><td>✅</td><td>✅</td><td>✅</td><td>✅</td><td>✅</td>
    </tr>
    <tr>
      <td><code>/</code></td>
      <td>✅</td><td>✅</td><td>✅</td><td>✅</td><td>❌</td><td>✅</td>
    </tr>
    <tr>
      <td><code>0DSWbdfnrstvw</code></td>
      <td>✅</td><td>⚠️</td><td>✅</td><td>⚠️</td><td>✅</td><td>⚠️</td>
    </tr>
    <tr>
      <td><code>B</code></td>
      <td>✅</td><td>⚠️</td><td>✅</td><td>❌</td><td>✅</td><td>❌</td>
    </tr>
    <tr>
      <td><code>$.</code></td>
      <td>⚠️</td><td>✅</td><td>✅</td><td>✅</td><td>✅</td><td>✅</td>
    </tr>
    <tr>
      <td><code>|</code></td>
      <td>⚠️</td><td>✅</td><td>✅</td><td>✅</td><td>❌</td><td>✅</td>
    </tr>
    <tr>
      <td><code>-</code></td>
      <td>✅</td><td>❌</td><td>✅⚠️</td><td>✅</td><td>❌⚠️</td><td>✅</td>
    </tr>
    <tr>
      <td><code>^</code></td>
      <td>⚠️</td><td>✅</td><td>✅⚠️</td><td>✅</td><td>✅⚠️</td><td>✅</td>
    </tr>
    <tr>
      <td><code>\</code></td>
      <td>❌⚠️</td><td>✅</td><td>❌⚠️</td><td>✅</td><td>❌⚠️</td><td>✅</td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Les caractères qui peuvent être échappés ou non échappés dans les classes de caractères en mode `v` sont précisément ceux qui sont interdits comme «&nbsp;doubles signes de ponctuation&nbsp;». Consultez les [classes de caractères en mode `v`](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Character_class#classe_de_caractères_du_mode_v) pour en savoir plus.

Lorsque vous souhaitez faire correspondre littéralement un caractère syntaxique, vous devez [l'échapper](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape) avec une barre oblique inversée (`\`). Par exemple, pour faire correspondre un `*` littéral dans un motif, vous devez écrire `\*` dans le motif. L'utilisation de caractères syntaxiques comme caractères littéraux entraîne des résultats inattendus ou des erreurs de syntaxe — par exemple, `/*/` n'est pas une expression rationnelle valide, car le quantificateur n'est précédé d'aucun motif. En [mode insensible à l'Unicode](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#mode_sensible_à_lunicode), `]`, `{`, et `}` peuvent apparaître littéralement s'il est impossible de les analyser comme la fin d'une classe de caractères ou comme des délimiteurs de quantificateur. Il s'agit d'une [syntaxe obsolète pour la compatibilité du Web](/fr/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#regexp), et vous ne devez pas vous y fier.

Les littéraux d'expression rationnelle ne peuvent pas définir certains caractères littéraux non syntaxiques. `/` ne peut pas apparaître comme caractère littéral dans un littéral d'expression rationnelle, car `/` en est le délimiteur. Vous devez l'échapper sous la forme `\/` pour faire correspondre un `/` littéral. Les terminateurs de ligne ne peuvent pas non plus apparaître comme caractères littéraux dans un littéral d'expression rationnelle, car un littéral ne peut pas s'étendre sur plusieurs lignes. Vous devez plutôt utiliser un [caractère échappé](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape) tel que `\n`. Il n'y a pas de telles restrictions avec le constructeur {{JSxRef("RegExp/RegExp", "RegExp()")}}, bien que les littéraux de chaîne de caractères suivent leurs propres règles d'échappement (par exemple, `"\\"` représente une seule barre oblique inversée, donc `new RegExp("\\*")` et `/\*/` sont équivalents).

En [mode insensible à l'Unicode](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#mode_sensible_à_lunicode), le motif est interprété comme une séquence [d'unités de code UTF-16](/fr/docs/Web/JavaScript/Reference/Global_Objects/String#caractères_utf-16_points_de_code_unicode_et_groupes_de_graphèmes). Cela signifie que les paires de substituts représentent réellement deux caractères littéraux. Cela provoque des comportements inattendus lorsqu'elles sont associées à d'autres fonctionnalités&nbsp;:

```js
/^[😄]$/.test("😄"); // false, parce que le motif est interprété comme /^[\ud83d\udc04]$/
/^😄+$/.test("😄😄"); // false, parce que le motif est interprété comme /^\ud83d\udc04+$/
```

En mode sensible à l'Unicode, le motif est interprété comme une séquence de points de code Unicode et les paires de substituts ne sont pas séparées. Vous devez donc toujours privilégier l'indicateur `u`.

## Exemples

### Utiliser les caractères littéraux

L'exemple suivant est repris de la page [Caractère échappé](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape#utiliser_les_caractères_échappés). Les caractères `a` et `b` sont littéraux dans le motif, tandis que `\n` est un caractère échappé, car il ne peut pas apparaître littéralement dans un littéral d'expression rationnelle.

```js
const motif = /a\nb/;
const chaineDeCaracteres = `a
b`;
console.log(motif.test(chaineDeCaracteres)); // true
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Le guide [des classes de caractères](/fr/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes)
- [Expressions rationnelles](/fr/docs/Web/JavaScript/Reference/Regular_expressions)
- [Échappement de caractères&nbsp;: `\n`, `\u{...}`](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape)
