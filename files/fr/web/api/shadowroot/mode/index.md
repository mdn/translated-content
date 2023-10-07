---
title: ShadowRoot.mode
slug: Web/API/ShadowRoot/mode
---

{{APIRef("Shadow DOM")}}

La propriété **`mode`**, rattachée à l'interface {{domxref("ShadowRoot")}}, indique son mode. Celui-ci peut valoir `open` ou `closed` et indique si les fonctionnalités internes de la racine sont accessibles en JavaScript.

Lorsque le mode d'une racine _shadow_ vaut `closed`, les détails d'implémentation internes sont inaccessibles et inchangeables avec JavaScript (de la même façon que les détails du fonctionnement de l'élément {{HTMLElement("video")}} sont inaccessibles et inchangeables en JavaScript).

## Syntaxe

```js
var mode = shadowRoot.mode;
```

### Valeur

Une valeur définie via l'énumération [`ShadowRootMode`](https://dom.spec.whatwg.org/#enumdef-shadowrootmode) : soit `open`, soit `closed`.

## Exemples

```js
let customElem = document.querySelector("mon-element-shadow-dom");
let shadow = customElem.shadowRoot;

// Une autre façon de vérifier si la racine est ouverte :
// on obtiendra null si elle est fermée
if (shadow) {
  // Si elle est ouverte, on ferme la racine pour
  // cacher ce qu'il y a à l'intérieur.
  shadow.mode = "closed";
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
