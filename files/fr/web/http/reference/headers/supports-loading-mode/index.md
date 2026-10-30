---
title: En-tête Supports-Loading-Mode
short-title: Supports-Loading-Mode
slug: Web/HTTP/Reference/Headers/Supports-Loading-Mode
l10n:
  sourceCommit: 1474534461893381d54c502e655f334b5568e597
---

{{SecureContext_Header}}{{SeeCompatTable}}

{{Glossary("response Header", "L'en-tête de réponse")}} HTTP **`Supports-Loading-Mode`** permet à une réponse à l'adhésion volontaire d'être chargée dans un nouveau contexte à haut risque, dans lequel elle ne peut autrement pas être chargée.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Type d'en-tête</th>
      <td>{{Glossary("Response header", "En-tête de réponse")}}</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted response header", "En-tête de réponse autorisé par CORS")}}
      </th>
      <td>Non</td>
    </tr>
  </tbody>
</table>

## Syntaxe

```http
Supports-Loading-Mode: <client-hint-headers>
```

## Directives

Le valeur de l'en-tête `Supports-Loading-Mode` est une liste d'un ou plusieurs jetons, qui peuvent inclure les valeurs suivantes&nbsp;:

- `credentialed-prerender` {{Experimental_Inline}}
  - : Indique qu'une origine de destination choisit de charger des documents par le [pré-rendu](/fr/docs/Web/API/Speculation_Rules_API#utiliser_le_pré-rendu) inter-site et de même origine.
- `fenced-frame` {{Experimental_Inline}}
  - : La réponse peut être chargée à l'intérieur d'un [cadre protégé](/fr/docs/Web/API/Fenced_frame_API). Sans cette adhésion explicite, toutes les navigations à l'intérieur d'un cadre protégé échouent.

## Exemples

```http
Supports-Loading-Mode: fenced-frame
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [L'API Fenced Frame](/fr/docs/Web/API/Fenced_frame_API)
- [L'API Speculation Rules](/fr/docs/Web/API/Speculation_Rules_API)
- [Chargement spéculatif](/fr/docs/Web/Performance/Guides/Speculative_loading)
- [Pré-rendre des pages dans Chrome pour des navigations instantanées <sup>(angl.)</sup>](https://developer.chrome.com/docs/web-platform/prerender-pages) sur developer.chrome.com
