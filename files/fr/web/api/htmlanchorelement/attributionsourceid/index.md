---
title: "HTMLAnchorElement: attributionSourceId property"
short-title: attributionSourceId
slug: Web/API/HTMLAnchorElement/attributionSourceId
l10n:
  sourceCommit: af9a8ff87cfa6563c9a082162ce4ed7ba0b204e1
---

{{APIRef("HTML DOM")}}{{SeeCompatTable}}

La propriété **`attributionSourceId`** de l'interface {{DOMxRef("HTMLAnchorElement")}} obtient et définit l'attribut HTML `attributionsourceid` sur un élément HTML {{HTMLElement("a")}}.

La propriété `attributionSourceId` est utilisée dans le cadre de la spécification [mesure des clics privés <sup>(angl.)</sup>](https://privacycg.github.io/private-click-measurement/) pour identifier le contenu qui a été cliqué lors du suivi d'un lien vers un autre site.

## Valeur

Un nombre. Les valeurs valides pour la mesure des clics privés sont comprises entre `0` et `255`. La valeur par défaut est `0`. Les valeurs en dehors de cette plage ne provoqueront pas d'erreur lors de la définition de la propriété, mais seront ignorées par le navigateur à des fins d'attribution.

## Exemples

### Définir un identifiant de source d'attribution sur un lien

```html
<a
  id="ad-link"
  href="https://exemple.com"
  attributiondestination="https://exemple.com">
  Cliquez pour visiter notre boutique
</a>
```

```js
const adLink = document.getElementById("ad-link");
adLink.attributionSourceId = 17;

console.log(adLink.attributionSourceId); // 17
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'interface {{DOMxRef("HTMLAnchorElement")}}
- L'élément HTML {{HTMLElement("a")}}
- La spécification [de mesure des clics privés <sup>(angl.)</sup>](https://privacycg.github.io/private-click-measurement/)
