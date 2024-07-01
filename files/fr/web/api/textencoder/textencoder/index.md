---
title: TextEncoder()
slug: Web/API/TextEncoder/TextEncoder
---

{{APIRef("Encoding API")}}

Le constructeur **`TextEncoder()`** retourne un nouvel objet {{DOMxRef("TextEncoder")}} utf-8.

## Syntaxe

```js
encoder = new TextEncoder();
```

### Paramètre

- `TextEncoder()` ne prend plus de paramètre depuis Firefox 48 et Chrome 53.

> **Note :** Avant Firefox 48 et Chrome 53, le nom de l'encodage était accepté comme un paramètre pour le constructeur de `TextEncoder`.
> Depuis, ces deux navigateurs ont supprimé le support pour les encodages autres que l'`utf-8` afin de respecter les [spécifications](https://www.w3.org/TR/encoding/#dom-textencoder).
> Désormais, n'importe quelle indication d'encodage passée au constructeur sera ignorée et `TextEncoder` sera créé avec le support de l'encodage `utf-8` uniquement.

### Exceptions

- `TextEncoder()` ne lève plus d'exception en cas de type d'encodage inconnu depuis Firefox 48 et Chrome 53.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'interface {{DOMxRef("TextEncoder")}} appartenant à ce constructeur.
