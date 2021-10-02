---
title: RandomSource.getRandomValues()
slug: Web/API/Crypto/getRandomValues
tags:
  - API
  - Cryptographie
  - Methode(2)
  - Méthode
  - Reference
  - Référence(2)
translation_of: Web/API/Crypto/getRandomValues
original_slug: Web/API/RandomSource/getRandomValues
---
{{APIRef("Web Crypto API")}}

La méthode **`RandomSource.getRandomValues()`** permet d’obtenir des valeurs pseudo-aléatoires cryptographiquement satisfaisantes. Le tableau donné en paramètre est rempli avec des nombres pseudo-aléatoires.

Pour garantir une performance suffisante, les implémentations n’utilisent pas un vrai générateur de nombres aléatoires, mais un générateur de nombres pseudo-aléatoires _semé_ avec une valeur ayant suffisamment d'{{Glossary("entropie")}}. Les générateurs utilisés d’une implémentation à une autre seront différents mais toujours satisfaisants pour une utilisation en cryptographie. Les implémentations doivent également utiliser une graine ayant suffisamment d’entropie, comme une source d’entropie au niveau du système.

## Syntaxe

    cryptoObj.getRandomValues(typedArray);

### Paramètres

- _typedArray_
  - : Un {{jsxref("TypedArray")}} de nombres entiers, qui est un {{jsxref("Int8Array")}}, un {{jsxref("Uint8Array")}}, un {{jsxref("Uint16Array")}}, un {{jsxref("Int32Array")}}, ou encore un {{jsxref("Uint32Array")}}. Tous les éléments du tableau seront subsitués avec des nombres aléatoires.

### Exceptions

- Une {{exception("QuotaExceededError")}} {{domxref("DOMException")}} est levée si la taille de la requête est plus grand que 65 536 octets.

## Exemple

```js
/* on part du principe ici que window.crypto.getRandomValues est disponible */

var array = new Uint32Array(10);
window.crypto.getRandomValues(array);

console.log("Your lucky numbers:");
for (var i = 0; i < array.length; i++) {
    console.log(array[i]);
}
```

## Spécification

| Specification                                                                                | Status                               | Comment            |
| -------------------------------------------------------------------------------------------- | ------------------------------------ | ------------------ |
| {{SpecName('Web Crypto API', '#RandomSource-method-getRandomValues')}} | {{Spec2('Web Crypto API')}} | Initial definition |

## Compatibilité des navigateurs

{{Compat("api.Crypto.getRandomValues")}}

## Voir aussi

- {{ domxref("Window.crypto") }} pour obtenir un objet {{domxref("Crypto")}}.
- {{jsxref("Math.random")}}, une source non cryptographique de nombres aléatoires.
