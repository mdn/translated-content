---
title: "Groupe non capturant : (?:...)"
slug: Web/JavaScript/Reference/Regular_expressions/Non-capturing_group
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Un **groupe non capturant** (<i lang="en">non-capturing group</i> en anglais) regroupe un sous-motif, ce qui vous permet d'appliquer un [quantificateur](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Quantifier) à l'ensemble du groupe ou d'utiliser des [disjonctions](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction) à l'intérieur. Il fonctionne comme [l'opérateur de regroupement](/fr/docs/Web/JavaScript/Reference/Operators/Grouping) dans les expressions JavaScript et, contrairement aux [groupes capturant](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group), il ne mémorise pas le texte correspondant, ce qui permet de meilleures performances et évite toute confusion lorsque le motif contient également des groupes capturant utiles.

## Syntaxe

```regex
(?:pattern)
```

### Paramètres

- `pattern`
  - : Un motif constitué de tout ce que vous pouvez utiliser dans un littéral d'expression rationnelle, y compris une [disjonction](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction).

## Exemples

### Regrouper un sous-motif et appliquer un quantificateur

Dans l'exemple suivant, nous testons si un chemin de fichier se termine par `styles.css` ou `styles.[un hachage hexadécimal].css`. Comme toute la partie `\.[\da-f]+` est optionnelle, afin d'y appliquer le quantificateur `?`, nous devons la regrouper dans un nouvel atome. L'utilisation d'un groupe non capturant améliore les performances en ne créant pas les informations de correspondance supplémentaires dont nous n'avons pas besoin.

```js
function estFeuilleDeStyle(chemin) {
  return /styles(?:\.[\da-f]+)?\.css$/.test(chemin);
}

estFeuilleDeStyle("styles.css"); // true
estFeuilleDeStyle("styles.1234.css"); // true
estFeuilleDeStyle("styles.cafe.css"); // true
estFeuilleDeStyle("styles.1234.min.css"); // false
```

### Regrouper une disjonction

Une disjonction a la priorité la plus basse dans une expression rationnelle. Si vous souhaitez utiliser une disjonction dans un motif plus large, vous devez la grouper. Nous vous conseillons d'utiliser un groupe non capturant, sauf si vous avez besoin du texte correspondant à la disjonction. L'exemple suivant correspond aux extensions de fichiers et utilise le même code que l'article sur les [assertions de limite d'entrée](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Input_boundary_assertion#faire_correspondre_les_extensions_de_fichiers)&nbsp;:

```js
function estUneImage(nomFichier) {
  return /\.(?:png|jpe?g|webp|avif|gif)$/i.test(nomFichier);
}

estUneImage("image.png"); // true
estUneImage("image.jpg"); // true
estUneImage("image.pdf"); // false
```

### Éviter les risques liés à la re-factorisation

Les groupes de capture sont accessibles par leur position dans le motif. Si vous ajoutez ou supprimez un groupe de capture, vous devez également mettre à jour la position des autres groupes de capture si vous y accédez au moyen des résultats de correspondance ou des [rétro-références](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Backreference). Cela peut provoquer des bogues, surtout si la plupart des groupes servent uniquement à la syntaxe (pour appliquer des quantificateurs ou regrouper des disjonctions). Les groupes non capturant évitent ce problème et permettent de suivre facilement les indices des véritables groupes de capture.

Par exemple, supposons que nous ayons une fonction qui correspond au motif `title='xxx'` dans une chaîne de caractères (exemple tiré de [groupe de capture](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group#pairing_quotes)). Pour s'assurer que les guillemets correspondent, nous utilisons une rétro-référence pour faire référence au premier guillemet.

```js
function analyserTitres(chaineDeCaracteresMeta) {
  return chaineDeCaracteresMeta.match(/title=(["'])(.*?)\1/)[2];
}

analyserTitres('title="toto"'); // 'toto'
```

Si nous décidons plus tard d'ajouter `name='xxx'` comme alias de `title=`, nous devons regrouper la disjonction dans un autre groupe&nbsp;:

```js example-bad
function analyserTitres(chaineDeCaracteresMeta) {
  // Oups — la rétro-référence et l'accès à l'index sont décalés d'une position !
  return chaineDeCaracteresMeta.match(/(title|name)=(["'])(.*?)\1/)[2];
}

analyserTitres('name="toto"'); // Impossible de lire les propriétés de null (lecture de '2')
// Car \1 désigne maintenant la chaîne de caractères "name", qui ne se trouve pas à la fin.
```

Au lieu de localiser tous les endroits où nous faisons référence aux indices des groupes de capture et de les mettre à jour un par un, il est préférable d'éviter d'utiliser un groupe de capture&nbsp;:

```js example-good
function analyserTitres(chaineDeCaracteresMeta) {
  // Ne capture pas la disjonction title|name
  // parce que nous n'utilisons pas sa valeur
  return chaineDeCaracteresMeta.match(/(?:title|name)=(["'])(.*?)\1/)[2];
}

analyserTitres('name="toto"'); // 'toto'
```

Les [groupes de capture nommés](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Named_capturing_group) sont un autre moyen d'éviter les risques liés à la re-factorisation. Ils permettent d'accéder aux groupes de capture par un nom personnalisé, ce qui n'est pas affecté lorsque d'autres groupes de capture sont ajoutés ou supprimés.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Le guide [des groupes et rétro-références](/fr/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences)
- [Expressions régulières](/fr/docs/Web/JavaScript/Reference/Regular_expressions)
- [Groupe de capture&nbsp;: `(...)`](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group)
- [Groupe de capture nommé&nbsp;: `(?<name>...)`](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Named_capturing_group)
