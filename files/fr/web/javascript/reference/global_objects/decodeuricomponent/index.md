---
title: decodeURIComponent()
slug: Web/JavaScript/Reference/Global_Objects/decodeURIComponent
---

{{jsSidebar("Objects")}}

La fonction **`decodeURIComponent()`** permet de décoder un composant d'un Uniform Resource Identifier (URI) précédemment créé par {{jsxref("encodeURIComponent")}} ou par une méthode similaire.

{{EmbedInteractiveExample("pages/js/globalprops-decodeuricomponent.html")}}

## Syntaxe

```js
decodeURIComponent(encodedURI);
```

### Paramètres

- `encodedURI`
  - : Un composant d'URI qui est encodé.

### Valeur de retour

Une nouvelle chaîne de caractères qui représente la version décodée du composant d'URI encodé passé en argument.

### Exceptions levées

Cette méthode lève une exception {{jsxref("URIError")}} ("_malformed URI sequence_") lorsqu'elle est utilisée de façon incorrecte.

## Description

Cette méthode remplace chaque séquence d'échappement du composant d'URI encodé par le caractère que la séquence représente.

## Exemples

### Décoder un composant d'URL encodé

```js
decodeURIComponent("JavaScript_%D1%88%D0%B5%D0%BB%D0%BB%D1%8B");
// "JavaScript_шеллы"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("decodeURI")}}
- {{jsxref("encodeURI")}}
- {{jsxref("encodeURIComponent")}}
