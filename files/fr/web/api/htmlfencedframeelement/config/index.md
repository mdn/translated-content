---
title: "HTMLFencedFrameElement : propriété config"
short-title: config
slug: Web/API/HTMLFencedFrameElement/config
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{SeeCompatTable}}{{APIRef("Fenced Frame API")}}

La propriété **`config`** de l'interface {{domxref("HTMLFencedFrameElement")}} contient un objet {{domxref("FencedFrameConfig")}}, qui représente la navigation d'un élément HTML {{htmlelement("fencedframe")}}, c'est-à-dire le contenu qui y sera affiché. Un `FencedFrameConfig` est renvoyé par une source telle que l'[API Protected Audience](https://privacysandbox.google.com/private-advertising/protected-audience?hl=fr).

## Valeur

La valeur par défaut de `config` est `null`.

Lorsque sa valeur est définie sur une instance d'objet {{domxref("FencedFrameConfig")}}, les propriétés internes du `FencedFrameConfig` (par exemple `mappedURL`) déterminent ce qui est chargé à l'intérieur du `<fencedframe>` associé. De plus&nbsp;:

- Le type de navigation sera `"replace"` (voir {{domxref("NavigateEvent.navigationType")}}), ce qui signifie que l'entrée d'historique courante est remplacée par la nouvelle, au lieu d'ajouter une nouvelle entrée d'historique.
- La {{httpheader("Referrer-Policy")}} de la navigation est définie sur `"no-referrer"`.

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
> Il faut passer `resolveToConfig: true` à l'appel de `runAdAuction()` pour obtenir un objet `FencedFrameConfig`. Si ce n'est pas le cas, la promesse ({{jsxref("Promise")}}) résultante renverra un URN qui ne peut être utilisé que dans un élément HTML {{htmlelement("iframe")}}.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Les cadres protégés](https://privacysandbox.google.com/private-advertising/fenced-frame?hl=fr) sur privacysandbox.google.com
- [Le bac à sable de la vie privée](https://privacysandbox.google.com/?hl=fr) sur privacysandbox.google.com
