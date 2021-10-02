---
title: TextEncoder()
slug: Web/API/TextEncoder/TextEncoder
translation_of: Web/API/TextEncoder/TextEncoder
---
{{APIRef("Encoding API")}}

Le constructeur **`TextEncoder()`** retourne un nouvel objet {{DOMxRef("TextEncoder")}} utf-8.

## Syntaxe

    encoder = new TextEncoder();

### Paramètre

- `TextEncoder()` ne prend plus de paramètre depuis Firefox 48 et Chrome 53.

> **Note :** Avant Firefox 48 et Chrome 53, le nom de l'encodage était accepté comme un paramètre pour l'objet `TextEncoder`, depuis ces deux navigateurs ont supprimé le support pour les encodages autres que l'`utf-8` afin de respecté les [spécifications](https://www.w3.org/TR/encoding/#dom-textencoder). N'importe quel indication d'encodage passé au constructeur sera ignoré et un `utf-8` `TextEncoder` sera créé.

### Exceptions

- `TextEncoder()` ne lève plus d’exception depuis Firefox 48 et Chrome 53

> **Note :** Avant Firefox 48 et Chrome 53, une exception était levée pour les types d'encodage inconnu.

## Spécification

| Spécification                                                                    | Statu                        | Commentaire         |
| -------------------------------------------------------------------------------- | ---------------------------- | ------------------- |
| {{SpecName("Encoding", "#dom-textencoder", "TextEncoder()")}} | {{Spec2("Encoding")}} | Définition initiale |

## Compatibilité des navigateurs

{{Compat("api.TextEncoder.TextEncoder")}}

## Voir aussi

- L'interface {{DOMxRef("TextEncoder")}} appartenant à ce constructeur.
