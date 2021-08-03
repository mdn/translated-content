---
title: decodeURIComponent()
slug: Web/JavaScript/Reference/Global_Objects/decodeURIComponent
tags:
  - JavaScript
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/decodeURIComponent
original_slug: Web/JavaScript/Reference/Objets_globaux/decodeURIComponent
---
{{jsSidebar("Objects")}}

La fonction **`decodeURIComponent()`** permet de décoder un composant d'un Uniform Resource Identifier (URI) précédemment créé par {{jsxref("encodeURIComponent")}} ou par une méthode similaire.

{{EmbedInteractiveExample("pages/js/globalprops-decodeuricomponent.html")}}

## Syntaxe

    decodeURIComponent(encodedURI)

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

| Spécification                                                                                                                | État                         | Commentaires         |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------- | -------------------- |
| {{SpecName('ES3')}}                                                                                                     | {{Spec2('ES3')}}         | Définition initiale. |
| {{SpecName('ES5.1', '#sec-15.1.3.2', 'decodeURIComponent')}}                                             | {{Spec2('ES5.1')}}     |                      |
| {{SpecName('ES6', '#sec-decodeuricomponent-encodeduricomponent', 'decodeURIComponent')}}         | {{Spec2('ES6')}}         |                      |
| {{SpecName('ESDraft', '#sec-decodeuricomponent-encodeduricomponent', 'decodeURIComponent')}} | {{Spec2('ESDraft')}} |                      |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.decodeURIComponent")}}

## Voir aussi

- {{jsxref("decodeURI")}}
- {{jsxref("encodeURI")}}
- {{jsxref("encodeURIComponent")}}
