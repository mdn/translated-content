---
title: "HTMLIFrameElement : propriété credentialless"
short-title: credentialless
slug: Web/API/HTMLIFrameElement/credentialless
l10n:
  sourceCommit: dd868507df863ab4f37d53c960c76e20e9ee365f
---

{{APIRef("HTML DOM")}}{{SeeCompatTable}}

La propriété **`credentialless`** de l'interface {{DOMxRef("HTMLIFrameElement")}} indique si l'élément HTML {{HTMLElement("iframe")}} est sans identifiants, ce qui signifie que les documents à l'intérieur seront chargés dans de nouveaux contextes éphémères.

Ces contextes n'ont pas accès à leur réseau, aux cookies et aux données de stockage associées à leur origine. À la place, ils utilisent de nouveaux contextes, locaux à la durée de vie du document de plus haut niveau. Cela signifie que toute donnée stockée ne sera plus accessible après que l'utilisateur·ice aura quitté la page ou l'aura rechargée.

En contrepartie, les règles d'intégration de la {{HTTPHeader("Cross-Origin-Embedder-Policy")}} (COEP) peuvent être levées, de sorte que les documents avec COEP défini peuvent intégrer des documents tiers qui ne le sont pas. Voir [IFrame sans identifiant](/fr/docs/Web/HTTP/Guides/IFrame_credentialless) pour une explication plus approfondie.

## Valeur

Un booléen. La valeur par défaut est `false`&nbsp;; définissez-la à `true` pour rendre l'`<iframe>` sans identifiants.

## Exemples

### Lecture

Définir un `<iframe>` sans identifiants comme suit&nbsp;:

```html
<iframe
  src="https://fr.wikipedia.org/wiki/Spectre_(vuln%C3%A9rabilit%C3%A9)"
  title="Spectre (vulnérabilité) — Wikipedia"
  width="960"
  height="600"
  credentialless></iframe>
```

Retourner la valeur de la propriété `credentialless`&nbsp;:

```js
const iframeElem = document.querySelector("iframe");
console.log(iframeElem.credentialless); // retournera true dans les navigateurs compatibles
```

### Écriture

Définir le minimum de détails dans le HTML&nbsp;:

```html
<iframe width="960" height="600"> </iframe>
```

Puis définir `credentialless` à `true` et charger le contenu de l'`<iframe>` via un script&nbsp;:

```js
const iframeElem = document.querySelector("iframe");

iframeElem.credentialless = true;
iframeElem.title = "Spectre (vulnérabilité) — Wikipedia";
iframeElem.src =
  "https://fr.wikipedia.org/wiki/Spectre_(vuln%C3%A9rabilit%C3%A9)";
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [IFrame sans identifiant](/fr/docs/Web/HTTP/Guides/IFrame_credentialless)
- L'élément HTML {{HTMLElement("iframe")}}
