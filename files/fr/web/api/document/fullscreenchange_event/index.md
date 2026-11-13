---
title: "Document : évènement fullscreenchange"
short-title: fullscreenchange
slug: Web/API/Document/fullscreenchange_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("Fullscreen API")}}

L'évènement **`fullscreenchange`** de l'interface {{DOMxRef("Document")}} est déclenché immédiatement après que le navigateur soit passé en mode plein écran ou en soit sorti.

L'évènement est envoyé à l'élément qui passe en mode plein écran ou en sort, et cet évènement remonte ensuite jusqu'au document.

Pour savoir si l'élément entre ou sort du mode plein écran, vérifiez la valeur de {{DOMxRef("Document.fullscreenElement")}}&nbsp;: si cette valeur est `null`, l'élément sort du mode plein écran, sinon il y entre.

Cet événement n'est pas annulable.

## Syntaxe

Utilisez le nom de l'évènement dans des méthodes comme {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}}, ou définissez une propriété de gestionnaire d'évènements.

```js-nolint
addEventListener("fullscreenchange", (event) => { })

onfullscreenchange = (event) => { }
```

## Type d'évènement

Un objet {{DOMxRef("Event")}} générique.

## Exemples

### Journalisation des évènements `fullscreenchange`

Dans cet exemple, un gestionnaire pour l'évènement `fullscreenchange` est ajouté à l'interface {{DOMxRef("Document")}}.

Si l'utilisateur·ice clique sur le bouton «&nbsp;Basculer le mode plein écran&nbsp;», le gestionnaire de l'évènement `click` basculera le mode plein écran pour le `div`. Si `document.fullscreenElement` a une valeur, il quittera le mode plein écran. Sinon, le `div` sera placé en mode plein écran.

Rappelez-vous qu'au moment où l'évènement `fullscreenchange` est traité, l'état de l'élément a déjà changé. Donc, si le changement est vers le mode plein écran, `document.fullscreenElement` pointera vers l'élément qui est maintenant en mode plein écran. En revanche, si `document.fullscreenElement` est `null`, le mode plein écran a été annulé.

Cela signifie que, dans le code de l'exemple, si un élément est actuellement en mode plein écran, le gestionnaire `fullscreenchange` enregistre l'identifiant (`id`) de l'élément en plein écran dans la console. Si `document.fullscreenElement` est `null`, le code enregistre un message indiquant que le changement est pour quitter le mode plein écran.

#### HTML

```html
<h1>Exemple d'évènement fullscreenchange</h1>
<div id="div-plein-ecran">
  <button id="bascule-plein-ecran">Basculer le mode plein écran</button>
  <pre id="journalisation"></pre>
</div>
```

#### CSS

```css
* {
  box-sizing: border-box;
}

#div-plein-ecran {
  height: 150px;
  padding: 1rem;
  background-color: pink;
}

#journalisation {
  height: 80px;
  padding: 0 0.5rem;
  background-color: white;
  overflow: scroll;
}
```

#### JavaScript

```js
const journalisation = document.querySelector("#journalisation");
const divPleinEcran = document.querySelector("#div-plein-ecran");

function log(message) {
  journalisation.textContent = `${journalisation.textContent}\n${message}`;
}

function fullscreenchangeHandler(event) {
  // document.fullscreenElement pointe vers l'élément qui est en mode
  // plein écran s'il y en a un. S'il n'y en a pas, la valeur de la
  // propriété est null.
  if (document.fullscreenElement) {
    log(
      `Element : ${document.fullscreenElement.id} est entré en mode plein écran.`,
    );
  } else {
    log("Quitter le mode plein écran.");
  }
}

document.addEventListener("fullscreenchange", fullscreenchangeHandler);

// Lorsque le bouton de basculement est cliqué, entrer/sortir du mode plein écran
document.getElementById("bascule-plein-ecran").addEventListener("click", () => {
  if (document.fullscreenElement) {
    // exitFullscreen n'est disponible que sur l'objet Document.
    document.exitFullscreen();
  } else {
    divPleinEcran.requestFullscreen();
  }
});
```

{{EmbedLiveSample("Journalisation des évènements `fullscreenchange`", 640, 250, "", "", "", "fullscreen")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'évènement {{DOMxRef("Document/fullscreenerror_event", "fullscreenerror")}}
- L'évènement {{DOMxRef("Element/fullscreenchange_event", "fullscreenchange")}} de l'interface {{DOMxRef("Element")}}
- [L'API Fullscreen](/fr/docs/Web/API/Fullscreen_API)
- [Guide de l'API Fullscreen](/fr/docs/Web/API/Fullscreen_API/Guide)
