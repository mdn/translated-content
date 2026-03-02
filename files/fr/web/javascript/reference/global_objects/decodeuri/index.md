---
title: decodeURI()
slug: Web/JavaScript/Reference/Global_Objects/decodeURI
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

La fonction **`decodeURI()`** décode un identifiant de ressource uniforme (URI) précédemment créé par {{JSxRef("encodeURI()")}} ou une routine similaire.

{{InteractiveExample("Démonstration JavaScript&nbsp;: decodeURI()")}}

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
decodeURI(encodedURI)
```

### Paramètres

- `encodedURI`
  - : Un identifiant de ressource uniforme complet et encodé.

### Valeur de retour

Une nouvelle chaîne de caractères représentant la version non encodée de l'identifiant de ressource uniforme (URI) fourni.

### Exceptions

- {{JSxRef("URIError")}}
  - : Levée si `encodedURI` contient un `%` qui n'est pas suivi de deux chiffres hexadécimaux, ou si la séquence d'échappement n'encode pas un caractère UTF-8 valide.

## Description

`decodeURI()` est une propriété fonction de l'objet global.

La fonction `decodeURI()` décode l'URI en traitant chaque séquence d'échappement de la forme `%XX` comme une unité de code UTF-8 (un octet). En UTF-8, le nombre de bits à 1 en tête du premier octet, qui peut être 0 (pour les caractères {{Glossary("ASCII")}} sur 1 octet), 2, 3 ou 4, indique le nombre d'octets du caractère. Ainsi, en lisant la première séquence d'échappement, `decodeURI()` peut déterminer combien d'autres séquences d'échappement consommer. Si `decodeURI()` ne trouve pas le nombre attendu de séquences, ou si les séquences d'échappement n'encodent pas un caractère UTF-8 valide, une exception {{JSxRef("URIError")}} est levée.

`decodeURI()` décode toutes les séquences d'échappement, mais si la séquence encode l'un des caractères suivants, la séquence d'échappement est conservée dans la chaîne de sortie (car ils font partie de la syntaxe URI)&nbsp;:

```plain
; / ? : @ & = + $ , #
```

## Exemples

### Décoder une URL cyrillique

```js
decodeURI(
  "https://developer.mozilla.org/ru/docs/JavaScript_%D1%88%D0%B5%D0%BB%D0%BB%D1%8B",
);
// "https://developer.mozilla.org/ru/docs/JavaScript_шеллы"
```

### `decodeURI()` contre `decodeURIComponent()`

`decodeURI()` suppose que l'entrée est une URI complète, donc il ne décode pas les caractères qui font partie de la syntaxe de l'URI.

```js
decodeURI(
  "https://developer.mozilla.org/docs/JavaScript%3A%20a_scripting_language",
);
// "https://developer.mozilla.org/docs/JavaScript%3A a_scripting_language"

decodeURIComponent(
  "https://developer.mozilla.org/docs/JavaScript%3A%20a_scripting_language",
);
// "https://developer.mozilla.org/docs/JavaScript: a_scripting_language"
```

### Gérer les exceptions

```js
try {
  const a = decodeURI("%E0%A4%A");
} catch (e) {
  console.error(e);
}

// Lève une erreur "URIError: malformed URI sequence"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La fonction {{JSxRef("decodeURIComponent()")}}
- La fonction {{JSxRef("encodeURI()")}}
- La fonction {{JSxRef("encodeURIComponent()")}}
