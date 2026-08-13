---
title: "Element : évènement auxclick"
short-title: auxclick
slug: Web/API/Element/auxclick_event
l10n:
  sourceCommit: ac7f589f2471fde8e5ee910a7fbd8a4bff931140
---

{{APIRef("UI Events")}}

L'évènement **`auxclick`** est déclenché sur un objet {{DOMxRef("Element")}} lorsqu'un bouton de dispositif de pointage non principal (tout bouton de souris autre que le principal — généralement le bouton le plus à gauche) a été enfoncé et relâché à l'intérieur du même élément.

`auxclick` est déclenché après que les évènements {{DOMxRef("Element/mousedown_event", "mousedown")}} et {{DOMxRef("Element/mouseup_event", "mouseup")}} ont été déclenchés, dans cet ordre.

## Syntaxe

Utilisez le nom de l'évènement dans des méthodes comme {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}}, ou définissez une propriété de gestionnaire d'évènement.

```js-nolint
addEventListener("auxclick", (event) => { })

onauxclick = (event) => { }
```

## Type d'évènement

Un objet {{DOMxRef("PointerEvent")}}. Hérite de {{DOMxRef("MouseEvent")}}.

{{InheritanceDiagram("PointerEvent")}}

> [!NOTE]
> Dans les versions antérieures de la spécification, le type d'évènement pour cet évènement était un {{DOMxRef("MouseEvent")}}. Consultez la [compatibilité des navigateurs](#compatibilité_des_navigateurs) pour plus d'informations.

## Empêcher les actions par défaut

Pour la grande majorité des navigateurs qui associent le clic central à l'ouverture d'un lien dans un nouvel onglet, y compris Firefox, il est possible d'annuler ce comportement en appelant {{DOMxRef("Event.preventDefault()", "preventDefault()")}} depuis un gestionnaire d'évènement `auxclick`.

Lorsque vous écoutez les évènements `auxclick` provenant d'éléments qui ne prennent pas en charge la saisie ou la navigation, vous souhaitez souvent empêcher explicitement d'autres actions par défaut associées à l'action d'enfoncement du bouton central de la souris. Sous Windows, il s'agit généralement du défilement automatique, tandis que sous macOS et Linux, il s'agit généralement du collage depuis le presse-papiers. Pour ce faire, il suffit d'empêcher le comportement par défaut de l'évènement {{DOMxRef("Element/mousedown_event", "mousedown")}} ou {{DOMxRef("Element/pointerdown_event", "pointerdown")}}.

De plus, vous devez peut-être éviter l'ouverture d'un menu contextuel système après un clic droit. En raison des différences de synchronisation entre les systèmes d'exploitation, il s'agit là aussi d'un comportement par défaut de `auxclick` qui ne peut être désactivé. À la place, cela peut être réalisé en désactivant le comportement par défaut de l'évènement {{DOMxRef("Element/contextmenu_event", "contextmenu")}}.

## Exemples

Dans cet exemple, nous définissons des fonctions pour deux gestionnaires d'évènements — {{DOMxRef("Element.click_event", "onclick")}} et `onauxclick`. La première modifie la couleur d'arrière-plan du bouton, tandis que la seconde modifie la couleur de premier plan (texte) du bouton. Vous pouvez également voir ces deux fonctions en action en testant la démonstration avec une souris à plusieurs boutons ([voir la démonstration en direct sur GitHub <sup>(angl.)</sup>](https://mdn.github.io/dom-examples/auxclick/)&nbsp;; voir également [le code source <sup>(angl.)</sup>](https://github.com/mdn/dom-examples/blob/main/auxclick/index.html)).

### JavaScript

```js
let bouton = document.querySelector("button");
let html = document.querySelector("html");

function aleatoire(nombre) {
  return Math.floor(Math.random() * nombre);
}

function couleurAleatoire() {
  return `rgb(${aleatoire(255)} ${aleatoire(255)} ${aleatoire(255)})`;
}

bouton.onclick = () => {
  bouton.style.backgroundColor = couleurAleatoire();
};

bouton.onauxclick = (e) => {
  e.preventDefault();
  bouton.style.color = couleurAleatoire();
};

bouton.oncontextmenu = (e) => {
  e.preventDefault();
};
```

Remarquez qu'en plus de capturer l'évènement `auxclick` en utilisant `onauxclick`, l'évènement {{DOMxRef("Element.contextmenu_event", "contextmenu")}} est également capturé, et {{DOMxRef("Event.preventDefault", "preventDefault()")}} est appelé sur cet évènement, afin d'empêcher le menu contextuel de s'afficher après l'application du changement de couleur.

### HTML

```html
<button>Cliquez-moi&nbsp;!</button>
```

```css hidden
html {
  height: 100%;
  overflow: hidden;
}

body {
  height: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
}

button {
  border: 0;
  background-color: white;
  font-size: 8vw;
  display: block;
  width: 100%;
  height: 100%;
  letter-spacing: 0.5rem;
}
```

{{EmbedLiveSample("Exemples", 640, 300)}}

> [!NOTE]
> Si vous utilisez une souris à trois boutons, vous remarquez que le gestionnaire `onauxclick` est exécuté lorsque l'un des boutons de souris non gauche est cliqué (incluant généralement les boutons «&nbsp;spéciaux&nbsp;» des souris de jeu).

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Apprendre&nbsp;: Introduction aux évènements](/fr/docs/Learn_web_development/Core/Scripting/Events)
- L'évènement {{DOMxRef("Element/click_event", "click")}}
- L'évènement {{DOMxRef("Element/contextmenu_event", "contextmenu")}}
- L'évènement {{DOMxRef("Element/dblclick_event", "dblclick")}}
- L'évènement {{DOMxRef("Element/mousedown_event", "mousedown")}}
- L'évènement {{DOMxRef("Element/mouseup_event", "mouseup")}}
- L'évènement {{DOMxRef("Element/pointerdown_event", "pointerdown")}}
- L'évènement {{DOMxRef("Element/pointerup_event", "pointerup")}}
