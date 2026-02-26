---
title: encodeURI()
slug: Web/JavaScript/Reference/Global_Objects/encodeURI
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

La fonction **`encodeURI()`** encode un {{Glossary("URI")}} en remplaçant chaque occurrence de certains caractères par une, deux, trois ou quatre séquences d'échappement représentant l'encodage {{Glossary("UTF-8")}} du caractère (il n'y aura quatre séquences d'échappement que pour les caractères composés de deux codets suppléants). Par rapport à {{JSxRef("encodeURIComponent()")}}, cette fonction encode moins de caractères, préservant ceux qui font partie de la syntaxe de l'URI.

{{InteractiveExample("Démonstration JavaScript&nbsp;: encodeURI()")}}

```js interactive-example
const uri = "https://mozilla.org/?x=шеллы";
const encoded = encodeURI(uri);
console.log(encoded);
// Résultat attendu : "https://mozilla.org/?x=%D1%88%D0%B5%D0%BB%D0%BB%D1%8B"

try {
  console.log(decodeURI(encoded));
  // Résultat attendu : "https://mozilla.org/?x=шеллы"
} catch (e) {
  // Capture une URI mal formée
  console.error(e);
}
```

## Syntaxe

```js-nolint
encodeURI(uri)
```

### Paramètres

- `uri`
  - : Une chaîne de caractères à encoder en tant qu'URI.

### Valeur de retour

Une nouvelle chaîne de caractères représentant la chaîne fournie encodée en tant qu'URI.

### Exceptions

- {{JSxRef("URIError")}}
  - : Levée si `uri` contient un [codet suppléant isolé](/fr/docs/Web/JavaScript/Reference/Global_Objects/String#caractères_utf-16_points_de_code_unicode_et_clusters_de_graphèmes).

## Description

`encodeURI()` est une propriété fonction de l'objet global.

La fonction `encodeURI()` échappe les caractères par unités de code UTF-8, chaque octet étant encodé au format `%XX`, complété à gauche par 0 si nécessaire. Comme les codets suppléants isolés en UTF-16 ne codent aucun caractère Unicode valide, ils provoquent une levée de {{JSxRef("URIError")}} par `encodeURI()`.

`encodeURI()` échappe tous les caractères **sauf**&nbsp;:

```plain
A—Z a—z 0—9 - _ . ! ~ * ' ( )

; / ? : @ & = + $ , #
```

Les caractères de la seconde ligne sont ceux qui peuvent faire partie de la syntaxe d'un URI, et ne sont échappés que par `encodeURIComponent()`. `encodeURI()` et `encodeURIComponent()` n'encodent pas les caractères `-.!~*'()`, appelés «&nbsp;marques non réservées&nbsp;», qui n'ont pas de rôle réservé mais sont autorisés dans un URI «&nbsp;tels quels&nbsp;». (Voir {{RFC("2396")}})

La fonction `encodeURI()` n'encode pas les caractères qui ont une signification spéciale (caractères réservés) pour un URI. L'exemple suivant montre toutes les parties qu'un URI peut contenir. Notez comment certains caractères servent à signifier une signification particulière&nbsp;:

```url
http://preudo:motdepasse@www.exemple.com:80/chemin/du/fichier.php?toto=316&tata=ceci+est+un+espace#ancre
```

`encodeURI`, comme son nom l'indique, sert à encoder une URL dans son ensemble, en supposant qu'elle est déjà bien formée. Si vous souhaitez assembler dynamiquement des valeurs de chaîne dans une URL, il est préférable d'utiliser {{JSxRef("encodeURIComponent()")}} sur chaque segment dynamique, afin d'éviter la présence de caractères de syntaxe d'URL à des endroits non souhaités.

```js
const name = "Thomas & Jerry";

// This is bad:
const link = encodeURI(`https://exemple.com/?choice=${name}`); // "https://exemple.com/?choice=Thomas%20&%20Jerry"
console.log([...new URL(link).searchParams]); // [['choice', 'Thomas '], [" Jerry", '']

// Instead:
const link = encodeURI(
  `https://exemple.com/?choice=${encodeURIComponent(name)}`,
);
// "https://exemple.com/?choice=Thomas%2520&%2520Jerry"
console.log([...new URL(link).searchParams]); // [['choice', "Thomas%20&%20Jerry"]]
```

## Exemples

### `encodeURI()` contre `encodeURIComponent()`

`encodeURI()` diffère de {{JSxRef("encodeURIComponent()")}} comme suit&nbsp;:

```js
const set1 = ";,/?:@&=+$#"; // Caractères réservés
const set2 = "-_.!~*'()"; // Caractères non-réservés
const set3 = "ABC abc 123"; // Caractères alphanumériques et espace

console.log(encodeURI(set1)); // ;,/?:@&=+$#
console.log(encodeURI(set2)); // -_.!~*'()
console.log(encodeURI(set3)); // ABC%20abc%20123 (l'espace est encodé en %20)

console.log(encodeURIComponent(set1)); // %3B%2C%2F%3F%3A%40%26%3D%2B%24%23
console.log(encodeURIComponent(set2)); // -_.!~*'()
console.log(encodeURIComponent(set3)); // ABC%20abc%20123 (l'espace est encodé en %20)
```

### Encodage d'un codet suppléant isolé

Une exception {{JSxRef("URIError")}} sera levée si on tente d'encoder un codet suppléant qui ne fait pas partie d'une paire haut-bas. Par exemple&nbsp;:

```js
// On a une paire de codets surrogate
console.log(encodeURI("\uD800\uDFFF"));

// Ici, seul le caractère "haut"
// ce qui déclenche une "URIError: malformed URI sequence"
console.log(encodeURI("\uD800"));

// Ici, seul le caractère "bas"
// ce qui déclenche une "URIError: malformed URI sequence"
console.log(encodeURI("\uDFFF"));
```

Vous pouvez utiliser {{JSxRef("String.prototype.toWellFormed()")}}, qui remplace les codets suppléants isolés par le caractère de remplacement Unicode (U+FFFD), pour éviter cette erreur. Vous pouvez aussi utiliser {{JSxRef("String.prototype.isWellFormed()")}} pour vérifier si une chaîne de caractères contient des codets suppléants isolés avant de la passer à `encodeURI()`.

### Encodage pour RFC3986

La {{RFC("3986")}} plus récente rend les crochets réservés (pour {{Glossary("IPv6")}}) et donc non encodés lors de la formation de quelque chose qui pourrait faire partie d'une URL (comme un hôte). Elle réserve aussi !, ', (, ), et \*, même si ces caractères n'ont pas d'usage de délimitation d'URI formalisé. La fonction suivante encode une chaîne de caractères au format d'URL conforme à la RFC3986.

```js
function encodeRFC3986URI(str) {
  return encodeURI(str)
    .replace(/%5B/g, "[")
    .replace(/%5D/g, "]")
    .replace(
      /[!'()*]/g,
      (c) => `%${c.charCodeAt(0).toString(16).toUpperCase()}`,
    );
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La fonction {{JSxRef("decodeURI()")}}
- La fonction {{JSxRef("encodeURIComponent()")}}
- La fonction {{JSxRef("decodeURIComponent()")}}
