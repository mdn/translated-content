---
title: "Document : propriété pointerLockElement"
short-title: pointerLockElement
slug: Web/API/Document/pointerLockElement
l10n:
  sourceCommit: c99ff93a1b71e7d664509fdd3e0c168920be967a
---

{{APIRef("Pointer Lock API")}}

La propriété en lecture seule **`pointerLockElement`** de l'interface {{DOMxRef("Document")}} fournit l'élément défini comme cible des évènements souris lorsque le pointeur est verrouillé.
Elle vaut `null` si le verrouillage est en attente, si le pointeur n'est pas verrouillé ou si la cible se trouve dans un autre document.

## Valeur

Un objet {{DOMxRef("Element")}} ou `null`.

## Exemples

### Vérifier l'état du verrouillage du pointeur

Cet exemple contient un élément HTML {{HTMLElement("div")}} qui contient à son tour un {{HTMLElement("button")}}. Cliquer sur le bouton demande le verrouillage du pointeur pour le `<div>`.

L'exemple écoute aussi l'évènement {{DOMxRef("Document/pointerlockchange_event", "pointerlockchange")}}&nbsp;: lorsque cet évènement est déclenché, le gestionnaire d'évènements désactive le bouton «&nbsp;Verrouiller&nbsp;» si un élément du document possède le verrouillage du pointeur, et active le bouton sinon.

L'effet est que si vous cliquez sur le bouton «&nbsp;Verrouiller&nbsp;», le pointeur est verrouillé et le bouton est désactivé&nbsp;: si vous quittez ensuite le verrouillage du pointeur (par exemple, en appuyant sur la touche <kbd>Échap</kbd>), le bouton est réactivé.

#### HTML

```html
<div id="container">
  <button id="lock">Verrouiller</button>
</div>
```

#### CSS

```css
div {
  height: 100px;
  width: 200px;
  border: 2px solid blue;
}
```

#### JavaScript

```js
const lock = document.querySelector("#lock");
const container = document.querySelector("#container");

lock.addEventListener("click", () => {
  container.requestPointerLock();
});

document.addEventListener("pointerlockchange", () => {
  const locked = document.pointerLockElement;
  lock.disabled = Boolean(locked);
});
```

#### Résultat

{{EmbedLiveSample("Vérifier l'état du verrouillage du pointeur")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode {{DOMxRef("Document.exitPointerLock()")}}
- La méthode {{DOMxRef("Element.requestPointerLock()")}}
- [L'API Pointer Lock](/fr/docs/Web/API/Pointer_Lock_API)
