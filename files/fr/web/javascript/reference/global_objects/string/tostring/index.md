---
title: String.prototype.toString()
slug: Web/JavaScript/Reference/Global_Objects/String/toString
---

{{JSRef}}

La méthode **`toString()`** renvoie une chaine de caractères représentant l'objet renseigné.

{{EmbedInteractiveExample("pages/js/string-tostring.html")}}

## Syntaxe

```js
str.toString();
```

### Valeur de retour

Une chaîne de caractères représentant la chaîne appelante.

## Description

L'objet {{jsxref("String")}} surcharge la méthode `toString()` de l'objet {{jsxref("Object")}} ; il n'hérite pas de {{jsxref("Object.toString","Object.prototype.toString()")}}. Pour Les objets `String`, la méthode `toString()` renvoie une chaine de caractères représentant l'objet, et est similaire à la méthode {{jsxref("String.prototype.valueOf()")}}.

## Exemples

L'exemple suivant affiche la valeur textuelle d'un objet {{jsxref("String")}} :

```js
var x = new String("coucou monde");
console.log(x.toString()); // affiche "coucou monde"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("Object.prototype.toSource()")}}
- {{jsxref("String.prototype.valueOf()")}}
