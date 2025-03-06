---
title: "Crypto : méthode randomUUID()"
slug: Web/API/Crypto/randomUUID
l10n:
  sourceCommit: 59adb56b83da91ee1744b723f2f7a37195c2ec82
---

{{APIRef("Web Crypto API")}}{{SecureContext_header}}

La méthode **`randomUUID()`**, rattachée à l'interface [`Crypto`](/fr/docs/Web/API/Crypto), est utilisée pour générer un [UUID](/fr/docs/Glossary/UUID) v4 en utilisant un générateur de nombres aléatoires sécurisé.

## Syntaxe

```js-nolint
randomUUID()
```

### Paramètres

Aucun.

### Valeur de retour

Une chaîne de caractères générées aléatoirement et qui est un UUID au format v4 sur 36 caractères.

## Exemples

On accède à cette méthode à l'aide de la propriété globale [`crypto`](/fr/docs/Web/API/Window/crypto).

```js
/* Si self.crypto.randomUUID() est bien disponible : */

const uuid = self.crypto.randomUUID();
console.log(uuid); // par exemple "36b8f84d-df4e-4d49-b662-bcde71a8764f"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [L'API Web Crypto](/fr/docs/Web/API/Web_Crypto_API)
- La propriété globale [`crypto`](/fr/docs/Web/API/Window/crypto) qui permet d'obtenir un objet [`Crypto`](/fr/docs/Web/API/Crypto).
- [`Crypto.getRandomValues()`](/fr/docs/Web/API/Crypto/getRandomValues) qui permet d'obtenir des valeurs aléatoires sécurisées sur autant d'octets que souhaité.
