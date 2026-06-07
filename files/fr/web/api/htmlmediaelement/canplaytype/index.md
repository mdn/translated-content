---
title: "HTMLMediaElement : méthode canPlayType()"
short-title: canPlayType()
slug: Web/API/HTMLMediaElement/canPlayType
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{APIRef("HTML DOM")}}

La méthode **`canPlayType()`** de l'interface {{DOMxRef("HTMLMediaElement")}} indique la probabilité que le navigateur actuel puisse lire un média d'un type MIME donné.

## Syntaxe

```js-nolint
canPlayType(type)
```

### Paramètres

- `type`
  - : Une chaîne de caractères définissant le [type MIME](/fr/docs/Web/HTTP/Guides/MIME_types) du média et (optionnellement) un [`paramètre codecs`](/fr/docs/Web/Media/Guides/Formats/codecs_parameter) contenant une liste séparée par des virgules des codecs pris en charge.

### Valeur de retour

Une chaîne de caractères indiquant la probabilité que le média puisse être lu.
La chaîne de caractères sera l'une des valeurs suivantes&nbsp;:

- `""` (une chaîne de caractères vide)
  - : Le média ne peut pas être lu sur l'appareil actuel.
- `probably`
  - : Le média est probablement lisible sur cet appareil.
- `maybe`
  - : Il n'y a pas suffisamment d'informations pour déterminer si le média peut être lu (jusqu'à ce que la lecture soit réellement tentée).

## Exemples

```js
let obj = document.createElement("video");
console.log(obj.canPlayType("video/mp4")); // "maybe"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'interface {{DOMxRef("HTMLMediaElement")}}&nbsp;: utilisée pour définir la méthode `HTMLMediaElement.canPlayType()`
- L'interface {{DOMxRef("MediaCapabilities")}}
- [Gérer les problèmes de compatibilité des médias dans le contenu web](/fr/docs/Web/Media/Guides/Formats/Support_issues)
- [Guide des types et formats de médias](/fr/docs/Web/Media/Guides/Formats)
- [Codecs dans les types de médias courants](/fr/docs/Web/Media/Guides/Formats/codecs_parameter)
