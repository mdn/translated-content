---
title: "HTMLMediaElement : méthode play()"
short-title: play()
slug: Web/API/HTMLMediaElement/play
l10n:
  sourceCommit: 976891fb78ba24cb4ac6e58ae8a903b20eae4337
---

{{APIRef("HTML DOM")}}

La méthode **`play()`** de l'interface {{DOMxRef("HTMLMediaElement")}} tente de commencer la lecture du média.
Elle retourne une promesse ({{JSxRef("Promise")}}) qui est résolue lorsque la lecture a commencé avec succès.

Si la lecture ne peut pas commencer pour une raison quelconque, comme des problèmes de permission, la promesse est rejetée.

## Syntaxe

```js-nolint
play()
```

### Paramètres

Aucun.

### Valeur de retour

Une promesse ({{JSxRef("Promise")}}) qui est résolue lorsque la lecture a commencé avec succès, ou rejetée si la lecture ne peut pas commencer pour une raison quelconque.

> [!NOTE]
> Les navigateurs publiés avant 2019 peuvent ne pas retourner de valeur depuis `play()`.

### Exceptions

Le **gestionnaire de rejet** de la promesse est appelé avec un objet {{DOMxRef("DOMException")}} passé en tant que seul paramètre d'entrée (par opposition à une exception traditionnelle étant levée). Les erreurs possibles incluent&nbsp;:

- `NotAllowedError` {{DOMxRef("DOMException")}}
  - : Fournie si l'agent utilisateur (navigateur) ou le système d'exploitation n'autorise pas la lecture des médias dans le contexte ou la situation actuelle. Le navigateur peut exiger que l'utilisateur·ice démarre explicitement la lecture des médias en cliquant sur un bouton «&nbsp;lecture&nbsp;», par exemple en raison d'une [Politique de permissions](/fr/docs/Web/HTTP/Guides/Permissions_Policy).
- `NotSupportedError` {{DOMxRef("DOMException")}}
  - : Fournie si la source du média (qui peut être définie comme un objet {{DOMxRef("MediaStream")}}, {{DOMxRef("MediaSource")}}, {{DOMxRef("Blob")}} ou {{DOMxRef("File")}}, par exemple) ne représente pas un format de média pris en charge.

D'autres exceptions peuvent être signalées, selon les détails d'implémentation du navigateur, de l'implémentation du lecteur multimédia, etc.

## Notes d'utilisation

Bien que le terme «&nbsp;autoplay&nbsp;» soit généralement associé aux pages qui commencent immédiatement à lire des médias dès leur chargement, les politiques de lecture automatique des navigateurs s'appliquent également à toute lecture de médias initiée par un script, y compris les appels à `play()`.

Si {{Glossary("user agent", "l'agent utilisateur")}} est configuré pour ne pas autoriser la lecture automatique ou initiée par script des médias, l'appel à `play()` entraînera le rejet immédiat de la promesse retournée avec une `NotAllowedError`. Les sites Web doivent être prêts à gérer cette situation. Par exemple, un site ne doit pas présenter une interface utilisateur qui suppose que la lecture a commencé automatiquement, mais doit plutôt mettre à jour son interface en fonction de la réussite ou du rejet de la promesse retournée. Voir [l'exemple](#exemples) ci-dessous pour plus d'informations.

> [!NOTE]
> La méthode `play()` peut amener l'utilisateur·ice à être invité·e à accorder la permission de lire le média, ce qui peut entraîner un délai avant que la promesse retournée ne soit résolue. Assurez-vous que votre code ne s'attend pas à une réponse immédiate.

Pour des informations encore plus détaillées sur la lecture automatique et le blocage de la lecture automatique, consultez notre article [Guide de la lecture automatique pour les API média et Web Audio](/fr/docs/Web/Media/Guides/Autoplay).

## Exemples

### Confirmer la lecture et gérer les états

Cet exemple montre comment confirmer que la lecture a commencé et comment gérer, de manière élégante, les blocages de lecture automatique.

Lorsque cet exemple est exécuté, il commence par collecter des références à l'élément HTML {{HTMLElement("video")}} ainsi qu'au {{HTMLElement("button")}} utilisé pour basculer la lecture.
Il configure ensuite un gestionnaire d'évènements pour l'évènement {{DOMxRef("Element/click_event", "click")}} sur le bouton de basculement et tente de commencer automatiquement la lecture en appelant la fonction [`async`](/fr/docs/Web/JavaScript/Reference/Statements/async_function) `playVideo()`.

Une fonction d'aide `toggleButton()` nous permet de définir ce qui doit se passer dans le code lorsque nous lui passons une valeur booléenne représentant l'état de lecture (par exemple, `toggleButton(true)`).
Si la lecture réussit, le texte du bouton et son [`aria-label`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) changent pour «&nbsp;Pause&nbsp;».
Si la lecture échoue, le bouton et l'`aria-label` affichent «&nbsp;Lecture&nbsp;».
Cela garantit que le `playButton` correspond à l'état de lecture en surveillant la résolution ou le rejet de la {{JSxRef("Promise")}} retournée par `play()`&nbsp;:

```html live-sample___handling-states
<div class="bloc-video">
  <video
    id="video"
    width="480"
    loop
    src="/shared-assets/videos/flower.mp4"></video>
  <button type="button" id="bouton-lecture" aria-label="Lecture"></button>
</div>
```

```js live-sample___handling-states
let elementVideo = document.getElementById("video");
let boutonLecture = document.getElementById("bouton-lecture");

boutonLecture.addEventListener("click", gererBoutonLecture);
playVideo();

function basculerBouton(playing) {
  if (playing) {
    boutonLecture.textContent = "Pause";
    boutonLecture.setAttribute("aria-label", "Pause");
  } else {
    boutonLecture.textContent = "Lecture";
    boutonLecture.setAttribute("aria-label", "Lecture");
  }
}

async function playVideo() {
  try {
    await elementVideo.play();
    basculerBouton(true);
  } catch (err) {
    basculerBouton(false);
  }
}

function gererBoutonLecture() {
  if (elementVideo.paused) {
    playVideo();
  } else {
    elementVideo.pause();
    basculerBouton(false);
  }
}
```

```css hidden live-sample___handling-states
.bloc-video {
  position: relative;
}

#video {
  border: 2px solid black;
}

#bouton-lecture {
  position: absolute;
  top: 10px;
  left: 10px;
  padding: 8px 12px;
  background-color: black;
  color: white;
  border: none;
  cursor: pointer;
}
```

{{EmbedLiveSample("handling-states", , 300)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Les technologies multimédias Web](/fr/docs/Web/Media)
- Apprendre&nbsp;: [Vidéo et audio HTML](/fr/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio)
- [Guide de lecture automatique pour les API multimédias et Web Audio](/fr/docs/Web/Media/Guides/Autoplay)
- [Utiliser l'API Web Audio](/fr/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
