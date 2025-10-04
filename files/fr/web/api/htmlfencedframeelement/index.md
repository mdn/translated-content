---
title: HTMLFencedFrameElement
slug: Web/API/HTMLFencedFrameElement
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{SeeCompatTable}}{{APIRef("Fenced Frame API")}}

L'interface **`HTMLFencedFrameElement`** représente un élément {{htmlelement("fencedframe")}} en JavaScript et fournit des propriétés de configuration.

{{InheritanceDiagram}}

## Propriétés d'instance

_Hérite des propriétés de son parent, {{domxref("HTMLElement")}}._

- {{domxref("HTMLFencedFrameElement.allow")}} {{experimental_inline}}
  - : Obtient et définit la valeur de l'attribut `allow` correspondant sur `<fencedframe>`, qui représente une [politique d'autorisations](/fr/docs/Web/HTTP/Guides/Permissions_Policy) appliquée au contenu lors de sa première intégration.
- {{domxref("HTMLFencedFrameElement.config")}} {{experimental_inline}}
  - : Un objet {{domxref("FencedFrameConfig")}}, qui représente la navigation d'un {{htmlelement("fencedframe")}}, c'est-à-dire le contenu qui y sera affiché. Un `FencedFrameConfig` est renvoyé par une source telle que l'[API Protected Audience](https://privacysandbox.google.com/private-advertising/protected-audience?hl=fr).
- {{domxref("HTMLFencedFrameElement.height")}} {{experimental_inline}}
  - : Obtient et définit la valeur de l'attribut `height` correspondant sur `<fencedframe>`, qui définit la hauteur de l'élément.
- {{domxref("HTMLFencedFrameElement.width")}} {{experimental_inline}}
  - : Obtient et définit la valeur de l'attribut `width` correspondant sur `<fencedframe>`, qui définit la largeur de l'élément.

## Exemples

Pour définir le contenu affiché dans un `<fencedframe>`, une API d'utilisation (comme [Protected Audience](https://privacysandbox.google.com/private-advertising/protected-audience?hl=fr) ou [Shared Storage](https://privacysandbox.google.com/private-advertising/shared-storage?hl=fr)) génère un objet {{domxref("FencedFrameConfig")}}, qui est ensuite affecté à la propriété `config` du `<fencedframe>`.

L'exemple suivant récupère un `FencedFrameConfig` depuis une enchère publicitaire de l'API Protected Audience, qui est ensuite utilisé pour afficher la publicité gagnante dans un `<fencedframe>`&nbsp;:

```js
const frameConfig = await navigator.runAdAuction({
  // … configuration de l'enchère
  resolveToConfig: true,
});

const frame = document.createElement("fencedframe");
frame.config = frameConfig;
```

> [!NOTE]
> Il faut passer `resolveToConfig: true` à l'appel de `runAdAuction()` pour obtenir un objet `FencedFrameConfig`. Si ce n'est pas le cas, la {{jsxref("Promise")}} résultante renverra un URN qui ne peut être utilisé que dans un {{htmlelement("iframe")}}.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Les cadres protégés](https://privacysandbox.google.com/private-advertising/fenced-frame?hl=fr) sur privacysandbox.google.com
- [Le bac à sable de la vie privée](https://privacysandbox.google.com/?hl=fr) sur privacysandbox.google.com
