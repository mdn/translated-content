---
title: "HTMLScriptElement : propriété crossOrigin"
short-title: crossOrigin
slug: Web/API/HTMLScriptElement/crossOrigin
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

La propriété **`crossOrigin`** de l'interface {{DOMxRef("HTMLScriptElement")}} reflète les paramètres de {{Glossary("CORS", "partage des ressources entre origines multiples")}} pour l'élément script. Pour les scripts classiques provenant d'autres {{Glossary("Origin", "origines")}}, cela contrôle si les informations d'erreur complètes seront exposées. Pour les scripts modules, cela contrôle le script lui-même et tous les scripts qu'il importe. Voir [attributs de configuration CORS](/fr/docs/Web/HTML/Reference/Attributes/crossorigin) pour plus de détails.

## Valeur

Une chaîne de caractères correspondant à un mot-clé qui définit le mode CORS à utiliser lors de la récupération de la ressource. Les valeurs possibles sont&nbsp;:

- `anonymous` ou une chaîne de caractères vide (`""`)
  - : Les requêtes envoyées par {{DOMxRef("HTMLScriptElement")}} utiliseront le {{DOMxRef("Request.mode", "mode", "", "nocode")}} `cors` et le mode {{DOMxRef("Request.credentials", "d'identification", "", "nocode")}} `same-origin`. Cela signifie que CORS est activé et que les informations d'identification sont envoyées _si_ la ressource est récupérée depuis la même origine que celle du document chargé.
- `use-credentials`
  - : Les requêtes envoyées par {{DOMxRef("HTMLScriptElement")}} utiliseront le {{DOMxRef("Request.mode", "mode", "", "nocode")}} `cors` et le mode {{DOMxRef("Request.credentials", "d'identification", "", "nocode")}} `include`. Toutes les ressources demandées par l'élément utiliseront CORS, quel que soit le domaine depuis lequel la ressource est récupérée.

Si la propriété `crossOrigin` est définie avec une autre valeur, cela revient au même que de la définir sur `anonymous`.

Si la propriété `crossOrigin` n'est pas définie, la ressource est récupérée sans CORS ({{DOMxRef("Request.mode", "mode", "", "nocode")}} `no-cors` et mode {{DOMxRef("Request.credentials", "d'identification", "", "nocode")}} `same-origin`).

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{DOMxRef("HTMLImageElement.crossOrigin")}}
- La propriété {{DOMxRef("HTMLLinkElement.crossOrigin")}}
- La propriété {{DOMxRef("HTMLMediaElement.crossOrigin")}}
