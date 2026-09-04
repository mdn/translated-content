---
title: "Window : propriété credentialless"
short-title: credentialless
slug: Web/API/Window/credentialless
l10n:
  sourceCommit: dd868507df863ab4f37d53c960c76e20e9ee365f
---

{{APIRef}}{{SeeCompatTable}}

La propriété en lecture seule **`credentialless`** retourne un booléen qui indique si le document actuel a été chargé à l'intérieur d'un {{HTMLElement("iframe")}} sans informations d'identification, ce qui signifie qu'il est chargé dans un nouveau contexte éphémère.

Ce contexte n'a pas accès au réseau, aux cookies et aux données de stockage associées à son origine. Il utilise un nouveau contexte local à la durée de vie du document de niveau supérieur. En retour, les règles d'intégration du {{HTTPHeader("Cross-Origin-Embedder-Policy")}} (COEP) peuvent être levées, de sorte que les documents avec COEP défini peuvent intégrer des documents tiers qui ne le sont pas.

Voir [IFrame sans informations d'identification](/fr/docs/Web/HTTP/Guides/IFrame_credentialless) pour une explication plus complète.

## Valeur

Un booléen. Une valeur de `true` indique que le document a été chargé à l'intérieur d'un `<iframe>` sans informations d'identification&nbsp;; `false` indique que ce n'est pas le cas.

## Exemples

Vous pouvez indiquer un `<iframe>` sans informations d'identification de la manière suivante&nbsp;:

```html
<iframe
  src="https://fr.wikipedia.org/wiki/Spectre_(vuln%C3%A9rabilit%C3%A9)"
  title="Spectre (vulnérabilité) — Wikipedia"
  width="960"
  height="600"
  credentialless></iframe>
```

Dans les navigateurs compatibles, si le document chargé dans un `<iframe>` exécutait la ligne suivante, elle retournerait `true`&nbsp;:

```js
console.log(window.credentialless);
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
