---
title: decodeURIComponent()
slug: Web/JavaScript/Reference/Global_Objects/decodeURIComponent
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

La fonction **`decodeURIComponent()`** permet de décoder un composant d'un identifiant de ressource uniforme (URI) précédemment créé par {{JSxRef("encodeURIComponent()")}} ou par une méthode similaire.

{{InteractiveExample("Démonstration JavaScript&nbsp;: decodeURIComponent()")}}

```js interactive-example
function containsEncodedComponents(x) {
  // exemple ?,=,&,/ etc
  return decodeURI(x) !== decodeURIComponent(x);
}

console.log(containsEncodedComponents("%3Fx%3Dtest")); // ?x=test
// Résultat attendu : true

console.log(containsEncodedComponents("%D1%88%D0%B5%D0%BB%D0%BB%D1%8B")); // шеллы
// Résultat attendu : false
```

## Syntaxe

```js-nolint
decodeURIComponent(encodedURI)
```

### Paramètres

- `encodedURI`
  - : Un composant encodé d'un identifiant de ressource uniforme (URI).

### Valeur de retour

Une nouvelle chaîne de caractères représentant la version décodée du composant d'identifiant de ressource uniforme (URI) encodé fourni.

### Exceptions

- {{JSxRef("URIError")}}
  - : Levée si `encodedURI` contient un `%` qui n'est pas suivi de deux chiffres hexadécimaux, ou si la séquence d'échappement n'encode pas un caractère UTF-8 valide.

## Description

`decodeURIComponent()` est une propriété fonction de l'objet global.

`decodeURIComponent()` utilise le même algorithme de décodage que celui décrit dans {{JSxRef("decodeURI()")}}. Il décode _toutes_ les séquences d'échappement, y compris celles qui ne sont pas créées par {{JSxRef("encodeURIComponent")}}, comme `-.!~*'()`.

## Exemples

### Décoder un composant d'URL encodé

```js
decodeURIComponent("JavaScript_%D1%88%D0%B5%D0%BB%D0%BB%D1%8B");
// "JavaScript_шеллы"
```

### Gérer les exceptions

```js
try {
  const a = decodeURIComponent("%E0%A4%A");
} catch (e) {
  console.error(e);
}

// Lève une erreur "URIError: malformed URI sequence"
```

### Décoder les paramètres de requête d'une URL

`decodeURIComponent()` ne peut pas être utilisé directement pour analyser les paramètres de requête d'une URL. Un peu de préparation est nécessaire.

```js
function decodeQueryParam(p) {
  return decodeURIComponent(p.replace(/\+/g, " "));
}

decodeQueryParam("requete+de+recherche%20%28correcte%29");
// 'requete de recherche (correcte)'
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La fonction {{JSxRef("decodeURI()")}}
- La fonction {{JSxRef("encodeURI()")}}
- La fonction {{JSxRef("encodeURIComponent()")}}
