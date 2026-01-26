---
title: "HTMLLinkElement : propriété crossOrigin"
short-title: crossOrigin
slug: Web/API/HTMLLinkElement/crossOrigin
l10n:
  sourceCommit: 0a9c10fc67901972221dc7b3d006334fbfa73dce
---

{{APIRef("HTML DOM")}}

La propriété **`crossOrigin`** de l'interface {{domxref("HTMLLinkElement")}} définit le paramètre de partage des ressources entre origines multiples ({{Glossary("CORS", "CORS")}}) à utiliser lors de la récupération de la ressource.

## Valeur

Une chaîne de caractères indiquant le mode CORS à utiliser lors de la récupération de la ressource. Les valeurs possibles sont&nbsp;:

- `anonymous` ou la chaîne de caractères vide (`""`)
  - : Les requêtes envoyées par {{domxref("HTMLLinkElement")}} utiliseront le mode `cors` {{domxref("Request.mode", "mode", "", "nocode")}} et le mode `same-origin` {{domxref("Request.credentials", "credentials", "", "nocode")}}. Cela signifie que CORS est activé et que les informations d'identification sont envoyées _si_ la ressource est récupérée depuis la même origine que celle du document chargé.
- `use-credentials`
  - : Requests sent by the {{domxref("HTMLLinkElement")}} will use the `cors` {{domxref("Request.mode", "mode", "", "nocode")}} and the `include` {{domxref("Request.credentials", "credentials", "", "nocode")}} mode. All resources requests by the element will use CORS, regardless of what domain the fetch is from.

Si la propriété `crossOrigin` est définie avec une autre valeur, cela équivaut à définir `anonymous`.

Si la propriété `crossOrigin` n'est pas définie, la ressource est récupérée sans CORS (mode `no-cors` {{domxref("Request.mode", "mode", "", "nocode")}} et mode `same-origin` {{domxref("Request.credentials", "credentials", "", "nocode")}}).

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{domxref("HTMLImageElement.crossOrigin")}}
- La propriété {{domxref("HTMLMediaElement.crossOrigin")}}
- La propriété {{domxref("HTMLScriptElement.crossOrigin")}}
