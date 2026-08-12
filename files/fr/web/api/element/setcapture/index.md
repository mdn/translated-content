---
title: "Element : méthode setCapture()"
short-title: setCapture()
slug: Web/API/Element/setCapture
l10n:
  sourceCommit: 976891fb78ba24cb4ac6e58ae8a903b20eae4337
---

{{APIRef("DOM")}}{{Non-standard_Header}}{{Deprecated_Header}}

La méthode **`setCapture()`** de l'interface {{DOMxRef("Element")}} permet de gérer un évènement `mousedown` afin de rediriger tous les évènements de la souris vers cet élément jusqu'à ce que le bouton de la souris soit relâché ou que {{DOMxRef("Document.releaseCapture()")}} soit appelée.

> [!WARNING]
> Cette interface n'a jamais bénéficié d'un large support inter-navigateurs et vous recherchez probablement plutôt {{DOMxRef("Element.setPointerCapture()")}}, de l'API Pointer Events.

## Syntaxe

```js-nolint
setCapture(retargetToElement)
```

### Paramètres

- `retargetToElement`
  - : Si `true`, tous les évènements sont ciblés directement vers cet élément&nbsp;; si `false`, les évènements peuvent aussi être déclenchés sur les descendants de cet élément.

### Valeur de retour

Aucune ({{JSxRef("undefined")}}).

## Exemples

Dans cet exemple, les coordonnées en cours de la souris sont dessinées pendant que vous passez la souris après avoir cliqué et maintenu enfoncé un élément.

```html
<p>
  Ceci est un exemple de l'utilisation de la capture de la souris sur des
  éléments dans Gecko 2.0.
</p>
<p><a id="monBouton" href="#">Testez-moi</a></p>
<div id="sortie">Pas encore d'évènements</div>
```

```css
#monBouton {
  border: solid black 1px;
  color: black;
  padding: 2px;
  box-shadow: black 2px 2px;
}
```

```js
function mouseDown(e) {
  e.target.setCapture();
  e.target.addEventListener("mousemove", mouseMoved);
}

function mouseUp(e) {
  e.target.removeEventListener("mousemove", mouseMoved);
}

function mouseMoved(e) {
  const output = document.getElementById("sortie");
  output.textContent = `Position: ${e.clientX}, ${e.clientY}`;
}

const btn = document.getElementById("monBouton");
if (btn.setCapture) {
  btn.addEventListener("mousedown", mouseDown);
  btn.addEventListener("mouseup", mouseUp);
} else {
  document.getElementById("sortie").textContent =
    "Désolé, il semble qu'il n'y ait pas de prise en charge de setCapture dans ce navigateur";
}
```

[Voir l'exemple en direct <sup>(angl.)</sup>](https://mdn.dev/archives/media/samples/domref/mousecapture.html)

## Notes

L'élément ne peut pas être entièrement déplacé vers le haut ou vers le bas, selon la disposition des autres éléments.

## Spécifications

Ne fait partie d'aucune spécification.

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode {{DOMxRef("Document.releaseCapture()")}}
- La méthode {{DOMxRef("Element.setPointerCapture()")}}
