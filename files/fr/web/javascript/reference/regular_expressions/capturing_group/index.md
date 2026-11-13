---
title: "Groupe capturant : (...)"
slug: Web/JavaScript/Reference/Regular_expressions/Capturing_group
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Un **groupe capturant** (<i lang="en">capturing group</i> en anglais) regroupe un sous-modèle, vous permettant d'appliquer un [quantificateur](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Quantifier) à l'ensemble du groupe ou d'utiliser des [disjonctions](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction) à l'intérieur. Il mémorise les informations sur la correspondance du sous-modèle, afin que vous puissiez y faire référence plus tard avec une [rétro-référence](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Backreference), ou accéder aux informations avec les [résultats de correspondance](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec#valeur_de_retour).

Si vous n'avez pas besoin du résultat de la correspondance du sous-modèle, utilisez plutôt un [groupe non capturant](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Non-capturing_group), ce qui améliore les performances et évite les risques de re-factorisation.

## Syntaxe

```regex
(pattern)
```

### Paramètres

- `pattern`
  - : Un motif consistant en tout ce que vous pouvez utiliser dans un littéral regex, y compris une [disjonction](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction).

## Description

Un groupe capturant agit comme [l'opérateur de regroupement](/fr/docs/Web/JavaScript/Reference/Operators/Grouping) dans les expressions JavaScript, vous permettant d'utiliser un sous-modèle comme un seul [atome](/fr/docs/Web/JavaScript/Reference/Regular_expressions#atomes).

Les groupes capturant sont numérotés dans l'ordre de leurs parenthèses ouvrantes. Le premier groupe capturant porte le numéro `1`, le deuxième `2`, et ainsi de suite. Les [groupes capturant nommés](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Named_capturing_group) sont également des groupes capturant et sont numérotés avec les autres groupes capturant (non nommés). Vous pouvez accéder aux informations sur la correspondance du groupe capturant&nbsp;:

- La valeur de retour (qui est un tableau) de {{JSxRef("RegExp.prototype.exec()")}}, {{JSxRef("String.prototype.match()")}} et {{JSxRef("String.prototype.matchAll()")}}
- Les paramètres `pN` de la fonction de rappel de remplacement des méthodes {{JSxRef("String.prototype.replace()")}} et {{JSxRef("String.prototype.replaceAll()")}}
- Les [rétro-références](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Backreference) dans le même motif

> [!NOTE]
> Même dans le tableau résultat de `exec()`, vous accédez aux groupes capturant par les numéros `1`, `2`, etc., car l'élément `0` correspond à la correspondance entière. `\0` n'est pas une rétro-référence, mais une [séquence d'échappement de caractère](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape) pour le caractère nul.

Les groupes capturant dans le code source de l'expression rationnelle correspondent à leurs résultats un par un. Si un groupe capturant n'est pas reconnu (par exemple, s'il appartient à une alternative non reconnue dans une [disjonction](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction)), le résultat correspondant est `undefined`.

```js
/(ab)|(cd)/.exec("cd"); // ['cd', undefined, 'cd']
```

Vous pouvez [quantifier](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Quantifier) les groupes de capture. Dans ce cas, les informations de correspondance associées à ce groupe correspondent à sa dernière correspondance.

```js
/([ab])+/.exec("abc"); // ['ab', 'b']; car "b" vient après "a", ce résultat remplace le précédent
```

Les groupes capturant peuvent être utilisés dans les assertions [anticipées](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion) et de [précédence](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Lookbehind_assertion). Comme les assertions de précédence reconnaissent leurs atomes à l'envers, la correspondance finale associée à ce groupe est celle qui apparaît à l'extrémité _gauche_ de la chaîne de caractères. Toutefois, les indices des groupes correspondants conservent leurs positions relatives dans le code source de l'expression rationnelle.

```js
/c(?=(ab))/.exec("cab"); // ['c', 'ab']
/(?<=(a)(b))c/.exec("abc"); // ['c', 'a', 'b']
/(?<=([ab])+)c/.exec("abc"); // ['c', 'a']; car l'assertion rétrospective reconnaît "a" après avoir reconnu "b"
```

Vous pouvez imbriquer les groupes de capture. Dans ce cas, le groupe externe reçoit d'abord son numéro, puis le groupe interne, car ils sont ordonnés selon leurs parenthèses ouvrantes. Si un quantificateur répète un groupe imbriqué, chaque correspondance du groupe remplace les résultats des sous-groupes, parfois par `undefined`.

```js
/((a+)?(b+)?(c))*/.exec("aacbbbcac"); // ['aacbbbcac', 'ac', 'a', undefined, 'c']
```

Dans l'exemple ci-dessus, le groupe externe correspond trois fois&nbsp;:

1. Correspond à `"aac"`, avec les sous-groupes `"aa"`, `undefined`, et `"c"`.
2. Correspond à `"bbbc"`, avec les sous-groupes `undefined`, `"bbb"`, et `"c"`.
3. Correspond à `"ac"`, avec les sous-groupes `"a"`, `undefined`, et `"c"`.

Le résultat `"bbb"` de la deuxième correspondance n'est pas conservé, car la troisième correspondance le remplace par `undefined`.

Vous pouvez obtenir les indices de début et de fin de chaque groupe capturant dans la chaîne de caractères d'entrée en utilisant l'indicateur [`d`](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/hasIndices). Cela ajoute une propriété `indices` au tableau retourné par `exec()`.

Vous pouvez éventuellement définir un nom pour un groupe capturant, ce qui aide à éviter les pièges liés aux positions des groupes et à l'indexation. Voir les [groupes capturant nommés](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Named_capturing_group) pour plus d'informations.

Les parenthèses ont d'autres usages dans différentes syntaxes d'expressions rationnelles. Par exemple, elles encadrent également les assertions anticipées et les assertions de précédence. Comme ces syntaxes commencent toutes par `?`, et que `?` est un [quantificateur](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Quantifier) qui ne peut normalement pas apparaître directement après `(`, cela ne crée pas d'ambiguïté.

## Exemples

### Correspondre à une date

L'exemple suivant correspond à une date au format `YYYY-MM-DD`&nbsp;:

```js
function analyserDate(entree) {
  const fragment = /^(\d{4})-(\d{2})-(\d{2})$/.exec(entree);
  if (!fragment) {
    return null;
  }
  return fragment.slice(1).map((p) => parseInt(p, 10));
}

analyserDate("2019-01-01"); // [2019, 1, 1]
analyserDate("2019-06-19"); // [2019, 6, 19]
```

### Associer des guillemets

La fonction suivante correspond aux motifs `title='xxx'` et `title="xxx"` dans une chaîne de caractères. Pour garantir que les guillemets correspondent, nous utilisons une rétro-référence pour faire référence au premier guillemet. L'accès au deuxième groupe capturant (`[2]`) retourne la chaîne de caractères entre les guillemets correspondants&nbsp;:

```js
function analyserTitre(chaineDeCaracteresMeta) {
  return chaineDeCaracteresMeta.match(/title=(["'])(.*?)\1/)[2];
}

analyserTitre('title="toto"'); // 'toto'
analyserTitre("title='toto' lang='en'"); // 'toto'
analyserTitre('title="Avantages des groupes capturant nommés"'); // "Avantages des groupes capturant nommés"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Le guide [des groupes et rétro-références](/fr/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences)
- [Expressions rationnelles](/fr/docs/Web/JavaScript/Reference/Regular_expressions)
- [Groupe non capturant&nbsp;: `(?:...)`](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Non-capturing_group)
- [Groupe capturant nommé&nbsp;: `(?<name>...)`](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Named_capturing_group)
- [Rétro-référence&nbsp;: `\1`, `\2`](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Backreference)
