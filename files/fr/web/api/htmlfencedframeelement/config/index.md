---
title: "HTMLFencedFrameElement : propriété config"
short-title: config
slug: Web/API/HTMLFencedFrameElement/config
l10n:
  sourceCommit: e316526e520d8163e9151dca8973eb777b5285e0
---

{{APIRef("Fenced Frame API")}}

La propriété **`config`** de l'interface {{DOMxRef("HTMLFencedFrameElement")}} contient un objet {{DOMxRef("FencedFrameConfig")}}, qui représente la navigation d'un élément HTML {{HTMLElement("fencedframe")}}, c'est-à-dire le contenu qui y est affiché. Un `FencedFrameConfig` est retourne par une source telle que [l'API Protected Audience](https://privacysandbox.google.com/private-advertising/protected-audience?hl=fr).

## Valeur

La valeur par défaut de `config` est `null`.

Lorsque sa valeur est définie sur une instance d'objet {{DOMxRef("FencedFrameConfig")}}, les propriétés internes du `FencedFrameConfig` (par exemple `mappedURL`) déterminent ce qui est chargé à l'intérieur du `<fencedframe>` associé. De plus&nbsp;:

- Le type de navigation est `"replace"` (voir {{DOMxRef("NavigateEvent.navigationType")}}), ce qui signifie que l'entrée d'historique courante est remplacée par la nouvelle, au lieu d'ajouter une nouvelle entrée d'historique.
- La {{HTTPHeader("Referrer-Policy")}} de la navigation est définie sur `"no-referrer"`.

## Exemples

Pour définir le contenu affiché dans un `<fencedframe>`, une API d'utilisation (comme [Protected Audience](https://privacysandbox.google.com/private-advertising/protected-audience?hl=fr) ou [Shared Storage](https://privacysandbox.google.com/private-advertising/shared-storage?hl=fr)) génère un objet {{DOMxRef("FencedFrameConfig")}}, qui est ensuite affecté à la propriété `config` du `<fencedframe>`.

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
> Il faut passer `resolveToConfig: true` à l'appel de `runAdAuction()` pour obtenir un objet `FencedFrameConfig`. Si ce n'est pas le cas, la promesse ({{JSxRef("Promise")}}) résultante retourne un URN qui ne peut être utilisé que dans un élément HTML {{HTMLElement("iframe")}}.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Les cadres protégés](https://privacysandbox.google.com/private-advertising/fenced-frame?hl=fr) sur privacysandbox.google.com
- [Le bac à sable de la vie privée](https://privacysandbox.google.com/?hl=fr) sur privacysandbox.google.com
