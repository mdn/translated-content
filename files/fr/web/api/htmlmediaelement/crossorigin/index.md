---
title: "HTMLMediaElement : propriété crossOrigin"
short-title: crossOrigin
slug: Web/API/HTMLMediaElement/crossOrigin
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

La propriété **`crossOrigin`** de l'interface {{DOMxRef("HTMLMediaElement")}} est le paramètre CORS pour cet élément d'image. Voir les [attributs des paramètres CORS](/fr/docs/Web/HTML/Reference/Attributes/crossorigin) pour plus de détails.

## Valeur

Une chaîne de caractères représentant le mot-clé définissant le mode CORS à utiliser lors de la récupération de la ressource. Les valeurs possibles sont&nbsp;:

- `anonymous` ou une chaîne de caractères vide (`""`)
  - : Les requêtes envoyées par le {{DOMxRef("HTMLMediaElement")}} utiliseront le {{DOMxRef("Request.mode", "mode", "", "nocode")}} `cors` et les {{DOMxRef("Request.credentials", "informations d'identification", "", "nocode")}} `same-origin`. Cela signifie que CORS est activé et que les informations d'identification sont envoyées _si_ la ressource est récupérée depuis la même origine que celle à partir de laquelle le document a été chargé.
- `use-credentials`
  - : Les requêtes envoyées par le {{DOMxRef("HTMLMediaElement")}} utiliseront le {{DOMxRef("Request.mode", "mode", "", "nocode")}} `cors` et les {{DOMxRef("Request.credentials", "informations d'identification", "", "nocode")}} `include`. Toutes les requêtes de ressources effectuées par l'élément utiliseront CORS, quel que soit le domaine d'où provient la récupération.

Si la propriété `crossOrigin` est définie avec une autre valeur, c'est comme définir `anonymous`.

Si la propriété `crossOrigin` n'est pas définie, la ressource est récupérée sans CORS (le {{DOMxRef("Request.mode", "mode", "", "nocode")}} `no-cors` et les {{DOMxRef("Request.credentials", "informations d'identification", "", "nocode")}} `same-origin`).

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{DOMxRef("HTMLImageElement.crossOrigin")}}
- La propriété {{DOMxRef("HTMLLinkElement.crossOrigin")}}
- La propriété {{DOMxRef("HTMLScriptElement.crossOrigin")}}
