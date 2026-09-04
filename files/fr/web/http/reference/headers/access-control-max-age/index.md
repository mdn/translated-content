---
title: En-tête Access-Control-Max-Age
short-title: Access-Control-Max-Age
slug: Web/HTTP/Reference/Headers/Access-Control-Max-Age
l10n:
  sourceCommit: 7f6778934020a9b5b82b4dd8ca79a99bc9950c2a
---

L'{{Glossary("response header", "en-tête de réponse")}} HTTP **`Access-Control-Max-Age`** indique pendant combien de temps les résultats d'une {{Glossary("preflight request", "requête préliminaire")}} (c'est-à-dire les informations contenues dans les en-têtes {{HTTPHeader("Access-Control-Allow-Methods")}} et {{HTTPHeader("Access-Control-Allow-Headers")}}) peuvent être mis en cache.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Type d'en-tête</th>
      <td>{{Glossary("Response header", "En-tête de réponse")}}</td>
    </tr>
  </tbody>
</table>

## Syntaxe

```http
Access-Control-Max-Age: <delta-seconds>
```

## Directives

- `<delta-seconds>`
  - : Nombre maximal de secondes pendant lesquelles les résultats peuvent être mis en cache, sous la forme d'un entier non signé et non négatif.
    Firefox [limite cela à 24 heures <sup>(angl.)</sup>](https://searchfox.org/firefox-main/source/netwerk/protocol/http/nsCORSListenerProxy.cpp#1393) (86400 secondes).
    Chromium (avant la version 76) [limite à 10 minutes <sup>(angl.)</sup>](https://source.chromium.org/chromium/chromium/src/+/main:services/network/public/cpp/cors/preflight_result.cc;drc=52002151773d8cd9ffc5f557cd7cc880fddcae3e;l=36) (600 secondes).
    Chromium (à partir de la version 76) [limite à 2 heures <sup>(angl.)</sup>](https://source.chromium.org/chromium/chromium/src/+/main:services/network/public/cpp/cors/preflight_result.cc;drc=49e7c0b4886cac1f3d09dc046bd528c9c811a0fa;l=31) (7200 secondes).
    La valeur par défaut est 5 secondes.

## Exemples

Mettre en cache les résultats d'une requête préliminaire pendant 10 minutes&nbsp;:

```http
Access-Control-Max-Age: 600
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'en-tête HTTP {{HTTPHeader("Access-Control-Allow-Headers")}}
- L'en-tête HTTP {{HTTPHeader("Access-Control-Allow-Methods")}}
