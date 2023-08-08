---
title: Crypto.getRandomValues()
slug: Web/API/Crypto/getRandomValues
---

{{APIRef("Web Crypto API")}}

La méthode **`Crypto.getRandomValues()`** permet d'obtenir des valeurs aléatoires suffisamment fortes pour un usage cryptographique. Le tableau fourni en paramètre est rempli de nombres aléatoires (au sens cryptographique).

Pour garantir des performances suffisantes, les implémentations n'utilisent pas un générateur de nombres aléatoires, mais un générateur de nombres pseudo-aléatoires _amorcé_ (<i lang="en">seeded</i>) avec une graine ayant suffisamment d'entropie. L'algorithme du générateur de nombres pseudo-aléatoires (PRNG) peut varier selon les [agents utilisateur](/fr/docs/Glossary/User_agent), mais est considéré comme satisfaisant pour un usage cryptographique. Les implémentations doivent utiliser une graine ayant suffisamment d'entropie, telle qu'une source d'entropie au niveau du système.

`getRandomValues()` est la seule propriété de l'interface `Crypto` qui peut être utilisée depuis un contexte non-sécurisé.

## Syntaxe

```js
getRandomValues(typedArray);
```

### Paramètres

- `typedArray`
  - : Un tableau typé ([`TypedArray`](/fr/docs/Web/JavaScript/Reference/Global_Objects/TypedArray)) utilisant des valeurs entières, c'est-à-dire une valeur dont le type est l'un des types suivants&nbsp;: [`Int8Array`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Int8Array), [`Uint8Array`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array), [`Uint8ClampedArray`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Uint8ClampedArray), [`Int16Array`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Int16Array), [`Uint16Array`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Uint16Array), [`Int32Array`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Int32Array), [`Uint32Array`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Uint32Array), [`BigInt64Array`](/fr/docs/Web/JavaScript/Reference/Global_Objects/BigInt64Array), [`BigUint64Array`](/fr/docs/Web/JavaScript/Reference/Global_Objects/BigUint64Array) (mais **pas** `Float32Array` ni `Float64Array`). Tous les éléments du tableau seront écrasés avec des nombres aléatoires.

### Valeur de retour

La valeur de retour correspond au même tableau que celui passé en argument mais dont le contenu a été remplacé par des nombres aléatoires générés pour l'occasion. On notera que `typedArray` est modifié directement, il n'y a pas de copie effectuée.

### Exceptions

Cette méthode peut lever une exception dans certaines conditions.

- [`DOMException`](/fr/docs/Web/API/DOMException) (avec le nom [`QuotaExceededError`](/fr/docs/Web/API/DOMException#quotaexceedederror))
  - : La longueur demandée dépasse 65536 octets.

## Notes d'utilisation

`getRandomValues()` ne doit pas être utilisée afin de générer des clés de chiffrement. Il faut utiliser la méthode [`generateKey()`](/fr/docs/Web/API/SubtleCrypto/generateKey) à la place. En effet, plusieurs raisons invitent à ce choix et notamment le fait que `getRandomValues()` puisse être exécutée depuis un contexte non sécurisé.

Il n'y a pas de seuil minimal d'entropie imposé par la spécification pour la cryptographie web. Les agents utilisateurs doivent fournir la meilleure entropie possible lors de la génération de nombres aléatoires en utilisant un générateur de nombres pseudo-aléatoires bien défini et efficace, construit au sein de l'agent utilisateur mais amorcé avec des graines provenant d'une source de nombres pseudo-aléatoires externe, comme une fonction spécifique à la plateforme sous-jacente (par exemple, l'appareil `/dev/urandom` sur Unix) ou une autre source de données aléatoires ou pseudo-aléatoires.

## Exemples

```js
/* En partant du principe que window.crypto.getRandomValues */
/* est disponible */

let array = new Uint32Array(10);
self.crypto.getRandomValues(array);

console.log("Votre tirage du jour :");
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [L'API Web Crypto](/fr/docs/Web/API/Web_Crypto_API)
- [`crypto`](/fr/docs/Web/API/crypto_property) qui permet d'obtenir un objet [`Crypto`](/fr/docs/Web/API/Crypto)
- [`Math.random()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Math/random), une fonction qui permet de générer des nombres aléatoires à des fins non-cryptographiques.
