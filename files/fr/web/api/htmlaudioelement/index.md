---
title: HTMLAudioElement
slug: Web/API/HTMLAudioElement
l10n:
  sourceCommit: be1922d62a0d31e4e3441db0e943aed8df736481
---

{{APIRef("HTML DOM")}}

L'interface **`HTMLAudioElement`** donne accès aux propriétés des éléments HTML {{HTMLElement("audio")}}, ainsi qu'aux méthodes permettant de les manipuler.

Cet élément est basé sur l'interface {{DOMxRef("HTMLMediaElement")}}, dont il hérite des propriétés et des méthodes.

{{InheritanceDiagram}}

## Constructeur

- {{DOMxRef("HTMLAudioElement.Audio", "Audio()")}}
  - : Crée et retourne un nouvel objet `HTMLAudioElement`, en lançant éventuellement le chargement d'un fichier audio si une URL de fichier est fournie.

## Propriétés d'instance

_Aucune propriété spécifique&nbsp;; hérite des propriétés de son parent {{DOMxRef("HTMLMediaElement")}} et de {{DOMxRef("HTMLElement")}}._

## Méthodes d'instance

_Hérite des méthodes de son parent {{DOMxRef("HTMLMediaElement")}} et de {{DOMxRef("HTMLElement")}}. Elle n'offre pas de méthodes propres._

## Exemples

### Utilisation simple

Vous pouvez créer un `HTMLAudioElement` entièrement en JavaScript à l'aide du constructeur {{DOMxRef("HTMLAudioElement.Audio", "Audio()")}}&nbsp;:

```js
const audioElement = new Audio("car_horn.wav");
```

vous pouvez ensuite appeler la méthode `play()` sur l'élément&nbsp;:

```js
audioElement.play();
```

> [!NOTE]
> Un écueil courant consiste à essayer de lire un élément audio immédiatement au chargement de la page. La politique d'autoplay par défaut des navigateurs modernes bloque ce comportement. Consultez les articles [Firefox <sup>(angl.)</sup>](https://hacks.mozilla.org/2019/02/firefox-66-to-block-automatically-playing-audible-video-and-audio/) et [Chrome](https://developer.chrome.com/blog/autoplay?hl=fr) pour les bonnes pratiques et les solutions de contournement.

Parmi les propriétés les plus couramment utilisées de l'élément audio, on trouve {{DOMxRef("HTMLMediaElement.src", "src")}}, {{DOMxRef("HTMLMediaElement.currentTime", "currentTime")}}, {{DOMxRef("HTMLMediaElement.duration", "duration")}}, {{DOMxRef("HTMLMediaElement.paused", "paused")}}, {{DOMxRef("HTMLMediaElement.muted", "muted")}} et {{DOMxRef("HTMLMediaElement.volume", "volume")}}. Cet extrait copie la durée du fichier audio dans une variable&nbsp;:

```js
const audioElement = new Audio("car_horn.wav");
audioElement.addEventListener("loadeddata", () => {
  let duration = audioElement.duration;
  // La variable duration contient maintenant la durée (en secondes) du clip audio
});
```

## Évènements

_Hérite des méthodes de son parent {{DOMxRef("HTMLMediaElement")}} et de son ancêtre {{DOMxRef("HTMLElement")}}._ Écoutez les évènements à l'aide de [`addEventListener()`](/fr/docs/Web/API/EventTarget/addEventListener) ou en assignant un gestionnaire à la propriété `oneventname` de cette interface.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Technologies des médias web](/fr/docs/Web/Media)
- [Diffusion audio et vidéo](/fr/docs/Web/Media/Guides/Audio_and_video_delivery)
- L'élément HTML implémentant cette interface&nbsp;: {{HTMLElement("audio")}}.
