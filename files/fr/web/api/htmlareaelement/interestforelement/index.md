---
title: "HTMLAreaElement : propriété interestForElement"
short-title: interestForElement
slug: Web/API/HTMLAreaElement/interestForElement
l10n:
  sourceCommit: e00212a2a707a57b49b58b37a6a6c978aaef2bbd
---

{{APIRef("HTML DOM")}}

La propriété **`interestForElement`** de l'interface {{DOMxRef("HTMLAreaElement")}} obtient ou définit l'élément cible d'un invocateur d'intérêt (<i lang="en">interest invoker</i>), lorsque l'élément HTML {{HTMLElement("area")}} associé est défini comme invocateur d'intérêt.

Voir [Création d'un invocateur d'intérêt](/fr/docs/Web/API/Popover_API/Using_interest_invokers#création_dun_invocateur_dinteret) pour plus de détails.

## Valeur

Une instance d'objet {{DOMxRef("Element")}}, ou `null` si l'élément `<area>` associé n'a pas d'élément cible défini.

## Exemples

### Exemple simple d'utilisation de `interestForElement`

Dans cet exemple, nous utilisons la propriété `interestForElement` d'un élément `<area>` pour définir son élément cible, puis récupérer le `tagName` de cet élément. Le `tagName` est ensuite affiché dans le contenu texte de l'élément `<area>`.

#### HTML

Le balisage inclut un élément `<area>` et un élément `<div>`. Nous transformons l'élément `<div>` en popover en lui ajoutant l'attribut `popover`.

```html live-sample___basic-interest-invoker
<map>
  <area href="#" shape="default" />
</map>
<div id="mypopover" popover>I am a <code>&lt;div&gt;</code> element.</div>
```

```css hidden live-sample___basic-interest-invoker
map {
  width: 200px;
  height: 100px;
  background-color: pink;
  padding: 5px;
}
```

#### JavaScript

On récupère des références aux éléments `<area>` et `<div>` dans le script, puis on crée la relation invocateur d'intérêt ↔ élément cible entre le `<area>` et le `<div>` en affectant à la propriété `interestForElement` du `<area>` une référence vers le `<div>`. On définit ensuite le contenu texte de l'élément `<area>` sur une chaîne contenant le `tagName` de l'élément cible, obtenu via `invoker.interestForElement.tagName`.

```js live-sample___basic-interest-invoker
const invoker = document.querySelector("area");
const popover = document.querySelector("div");

invoker.interestForElement = popover;

invoker.textContent = `Mon élément cible est un ${invoker.interestForElement.tagName}`;
```

#### Résultat

L'exemple se rend ainsi&nbsp;:

{{EmbedLiveSample("basic-interest-invoker", "100%", "100")}}

Essayez de montrer de l'intérêt pour la zone (par exemple au survol ou au focus) pour faire apparaître le `<div>`.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Utilisation des invocateurs d'intérêt](/fr/docs/Web/API/Popover_API/Using_interest_invokers)
- [L'API Popover](/fr/docs/Web/API/Popover_API)
