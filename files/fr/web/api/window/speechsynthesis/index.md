---
title: "Window : propriété speechSynthesis"
short-title: speechSynthesis
slug: Web/API/Window/speechSynthesis
l10n:
  sourceCommit: 62cedc63226017e9e7d0718b6fea3529ca8dbf37
---

{{APIRef("Web Speech API")}}

La propriété en lecture seule `speechSynthesis` de l'interface {{DOMxRef("Window")}} retourne un objet {{DOMxRef("SpeechSynthesis")}}, qui est le point d'entrée pour utiliser la fonctionnalité de synthèse vocale de [l'API Web Speech](/fr/docs/Web/API/Web_Speech_API).

## Valeur

Un objet {{DOMxRef("SpeechSynthesis")}}.

## Exemples

Dans notre [démonstration de synthétiseur vocal <sup>(angl.)</sup>](https://github.com/mdn/dom-examples/tree/main/web-speech-api/speak-easy-synthesis), nous commençons par obtenir une référence au contrôleur SpeechSynthesis en utilisant `window.speechSynthesis`.
Après avoir défini certaines variables nécessaires, nous récupérons une liste des voix disponibles en utilisant {{DOMxRef("SpeechSynthesis.getVoices()")}} et remplissons un menu de sélection avec celles-ci afin que l'utilisateur·ice puisse choisir la voix qu'il souhaite.

Dans le gestionnaire `inputForm.onsubmit`, nous empêchons l'envoi du formulaire avec [`preventDefault()`](/fr/docs/Web/API/Event/preventDefault), créons une nouvelle instance de {{DOMxRef("SpeechSynthesisUtterance")}} contenant le texte de l'élément {{HTMLElement("input")}}, définissons la voix de l'énoncé sur la voix sélectionnée dans l'élément {{HTMLElement("select")}} et commençons à faire parler l'énoncé par la méthode {{DOMxRef("SpeechSynthesis.speak()")}}.

```js
const synthese = window.speechSynthesis;

const formEntree = document.querySelector("form");
const texteEntree = document.querySelector("input");
const selecteurVoix = document.querySelector("select");

function remplirListeVoix() {
  const voix = synthese.getVoices();

  for (const voixActuelle of voix) {
    const option = document.createElement("option");
    option.textContent = `${voixActuelle.name} (${voixActuelle.lang})`;

    if (voixActuelle.default) {
      option.textContent += " — DEFAULT";
    }

    option.setAttribute("data-lang", voixActuelle.lang);
    option.setAttribute("data-name", voixActuelle.name);
    selecteurVoix.appendChild(option);
  }
}

remplirListeVoix();
if (speechSynthesis.onvoiceschanged !== undefined) {
  speechSynthesis.onvoiceschanged = remplirListeVoix;
}

formEntree.onsubmit = (event) => {
  event.preventDefault();

  const utterThis = new SpeechSynthesisUtterance(texteEntree.value);
  const optionSelectionnee =
    selecteurVoix.selectedOptions[0].getAttribute("data-name");
  utterThis.voice = voix.find((v) => v.name === optionSelectionnee);
  synthese.speak(utterThis);
  texteEntree.blur();
};
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [L'API Web Speech](/fr/docs/Web/API/Web_Speech_API)
