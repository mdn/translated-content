---
title: String.prototype.valueOf()
slug: Web/JavaScript/Reference/Global_Objects/String/valueOf
---

{{JSRef}}

La méthode **`valueOf()`** renvoie la valeur primitive de l'objet {{jsxref("String")}}.

{{EmbedInteractiveExample("pages/js/string-valueof.html")}}

## Syntaxe

```js
str.valueOf();
```

### Valeur de retour

Une chaîne de caractères qui représente la valeur primitive d'un objet {{jsxref("String")}}.

## Description

La méthode `valueOf()` de `String` renvoie la valeur primitive de l'objet `String` sous la forme d'une chaine de caractères. Cette valeur est équivalente à {{jsxref("String.prototype.toString()")}}.

Cette méthode est généralement appelée en interne par JavaScript et non explicitement dans du code.

## Exemples

```js
var x = new String("Coucou monde");
console.log(x.valueOf()); // affiche "Coucou monde"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("String.prototype.toString()")}}
- {{jsxref("Object.prototype.valueOf()")}}
