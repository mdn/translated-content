---
title: regExp.lastIndex
slug: Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex
---

{{JSRef}}

La propriété **`lastIndex`** est un entier en lecture/écriture qui permet de définir l'indice (position) à partir duquel chercher la prochaine correspondance pour une instance d'expression rationnelle donnée.

{{EmbedInteractiveExample("pages/js/regexp-lastindex.html")}}{{js_property_attributes(1,0,0)}}

## Syntaxe

```js
regExpObj.lastIndex;
```

## Description

Cette propriété n'est définie que si l'instance d'expression rationnelle utilise le marqueur (_flag_) `"g"` pour effectuer une recherche globale ou le marqueur `"y"` afin d'effectuer une recherche adhérente. Les règles suivantes s'appliquent :

- Si `lastIndex` est supérieur à la longueur de la chaîne de caractères, `regexp.test` et `regexp.exec` échoueront et `lastIndex` sera redéfini à 0.
- Si `lastIndex` est égal à la longueur de la chaîne de caractères et si l'expression rationnelle correspond avec la chaîne vide, il y aura une correspondance à partir de `lastIndex`.
- Si `lastIndex` est égal à la longueur de la chaîne de caractères et que l'expression rationnelle ne peut correspondre à la chaîne vide, on n'aura pas de correspondance et `lastIndex` sera réinitialisé à 0.
- Sinon, `lastIndex` sera défini à la position suivant la correspondance la plus récente.

## Exemples

Si on a la séquence d'instructions suivante :

```js
var re = /(hi)?/g;
```

Correspond à la chaîne vide.

```js
console.log(re.exec("hi"));
console.log(re.lastIndex);
```

Renvoie `["hi", "hi"]` avec `lastIndex` égal à 2.

```js
console.log(re.exec("hi"));
console.log(re.lastIndex);
```

Renvoie `["", undefined]`, un tableau dont le premier élément est la chaîne vide car `lastIndex` valait 2 (et vaut toujours 2) et `"hi"` était de longueur 2.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("RegExp.prototype.ignoreCase")}}
- {{jsxref("RegExp.prototype.global")}}
- {{jsxref("RegExp.prototype.multiline")}}
- {{jsxref("RegExp.prototype.source")}}
- {{jsxref("RegExp.prototype.sticky")}}
