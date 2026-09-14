---
title: "Element : évènement fullscreenchange"
short-title: fullscreenchange
slug: Web/API/Element/fullscreenchange_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("Fullscreen API")}}

L'évènement **`fullscreenchange`** se déclenche immédiatement après qu'un objet {{DOMxRef("Element")}} est passé en mode plein écran ou en est sorti.

Cet évènement est envoyé à un `Element` qui passe en mode plein écran ou en en sort.

Pour savoir si un `Element` passe en mode plein écran ou en sort, vérifiez la valeur de {{DOMxRef("Document.fullscreenElement")}}&nbsp;: si cette valeur est `null`, l'élément quitte le mode plein écran, sinon il y entre.

Cet évènement n'est pas annulable.

## Syntaxe

Utilisez le nom de l'évènement dans des méthodes comme {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}}, ou définissez une propriété de gestionnaire d'évènement.

```js-nolint
addEventListener("fullscreenchange", (event) => { })

onfullscreenchange = (event) => { }
```

## Type d'évènement

Un objet générique {{DOMxRef("Event")}}.

## Exemples

Dans cet exemple, un gestionnaire pour l'évènement `fullscreenchange` est ajouté à l'élément dont l'ID est `div-pleinecran`.

Si l'utilisateur·ice clique sur le bouton «&nbsp;Basculer le mode plein écran&nbsp;», le gestionnaire `click` bascule le mode plein écran pour le `div`. Si `document.fullscreenElement` a une valeur, il quitte le mode plein écran. Sinon, le `div` est placé en mode plein écran.

Rappelez-vous que, au moment où l'évènement `fullscreenchange` est traité, le statut de l'élément a déjà changé. Ainsi, si le changement concerne le mode plein écran, `document.fullscreenElement` pointe vers l'élément qui est maintenant en mode plein écran. En revanche, si `document.fullscreenElement` est `null`, le mode plein écran a été annulé.

Cela signifie que, dans le code d'exemple, si un élément est actuellement en mode plein écran, le gestionnaire `fullscreenchange` enregistre un `id` de l'élément en plein écran dans la console. Si `document.fullscreenElement` est `null`, le code enregistre un message indiquant que le changement concerne la sortie du mode plein écran.

### HTML

```html
<h1>exemple d'évènement fullscreenchange</h1>
<div id="div-pleinecran">
  <button id="basculer-pleinecran">Basculer le mode plein écran</button>
</div>
```

### JavaScript

```js
function gestionChangementPleinEcran(event) {
  // document.fullscreenElement va pointer vers l'élément qui
  // est en mode plein écran s'il y en a un. Sinon, la valeur
  // de la propriété est null.
  if (document.fullscreenElement) {
    console.log(
      `Element : ${document.fullscreenElement.id} est entré en mode plein écran.`,
    );
  } else {
    console.log("Mode plein écran quitté.");
  }
}

const el = document.getElementById("div-pleinecran");

el.addEventListener("fullscreenchange", gestionChangementPleinEcran);
// ou
el.onfullscreenchange = gestionChangementPleinEcran;

// Lorsque l'on clique sur le bouton bascule, entrer/sortir du mode plein écran
document
  .getElementById("basculer-pleinecran")
  .addEventListener("click", (event) => {
    if (document.fullscreenElement) {
      // exitFullscreen n'est disponible que sur l'objet Document.
      document.exitFullscreen();
    } else {
      el.requestFullscreen();
    }
  });
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{DOMxRef("Document.fullscreenchange_event", "Document : évènement fullscreenchange",,1)}}
- {{DOMxRef("Element.fullscreenerror_event", "Element : évènement fullscreenerror",,1)}}
- [L'API Fullscreen](/fr/docs/Web/API/Fullscreen_API)
- [Guide de l'API Fullscreen](/fr/docs/Web/API/Fullscreen_API/Guide)
