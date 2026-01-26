---
title: HTMLVideoElement
slug: Web/API/HTMLVideoElement
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

{{APIRef("HTML DOM")}}

Implémentée par l'élément HTML {{HTMLElement("video")}}, l'interface **`HTMLVideoElement`** fournit des propriétés et méthodes particulières pour manipuler les objets vidéo. Elle hérite également des propriétés et méthodes de {{DOMxRef("HTMLMediaElement")}} et {{DOMxRef("HTMLElement")}}.

La liste des [formats médias pris en charge](/fr/docs/Web/Media/Guides/Formats) varie d'un navigateur à l'autre. Vous devez soit fournir votre vidéo dans un format unique pris en charge par tous les navigateurs concernés, soit fournir plusieurs sources vidéo dans suffisamment de formats différents pour couvrir tous les navigateurs que vous souhaitez prendre en charge.

{{InheritanceDiagram}}

## Propriétés d'instance

_Hérite des propriétés de son interface parente, {{DOMxRef("HTMLMediaElement")}} et de {{DOMxRef("HTMLElement")}}._

- {{DOMxRef("HTMLVideoElement.disablePictureInPicture")}}
  - : Indique si l'agent utilisateur doit suggérer le mode image dans l'image aux utilisateur·ice·s ou non.
- {{DOMxRef("HTMLVideoElement.height")}}
  - : Une chaîne de caractères qui reflète l'attribut HTML [`height`](/fr/docs/Web/HTML/Reference/Elements/video#height), qui indique la hauteur de la zone d'affichage, en pixels CSS.
- {{DOMxRef("HTMLVideoElement.poster")}}
  - : Une chaîne de caractères qui reflète l'attribut HTML [`poster`](/fr/docs/Web/HTML/Reference/Elements/video#poster), qui indique une image à afficher tant qu'aucune donnée vidéo n'est disponible.
- {{DOMxRef("HTMLVideoElement.videoHeight")}} {{ReadOnlyInline}}
  - : Retourne une valeur entière non signée indiquant la hauteur intrinsèque de la ressource en pixels CSS, ou 0 si aucun média n'est encore disponible.
- {{DOMxRef("HTMLVideoElement.videoWidth")}} {{ReadOnlyInline}}
  - : Retourne une valeur entière non signée indiquant la largeur intrinsèque de la ressource en pixels CSS, ou 0 si aucun média n'est encore disponible.
- {{DOMxRef("HTMLVideoElement.width")}}
  - : Une chaîne de caractères qui reflète l'attribut HTML [`width`](/fr/docs/Web/HTML/Reference/Elements/video#width), qui indique la largeur de la zone d'affichage, en pixels CSS.

### Propriétés spécifiques à Firefox

- `HTMLVideoElement.mozParsedFrames` {{ReadOnlyInline}} {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Retourne un `unsigned long` indiquant le nombre d'images vidéo qui ont été analysées depuis la ressource média.
- `HTMLVideoElement.mozDecodedFrames` {{ReadOnlyInline}} {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Retourne un `unsigned long` indiquant le nombre d'images vidéo analysées qui ont été décodées en images.
- `HTMLVideoElement.mozPresentedFrames` {{ReadOnlyInline}} {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Retourne un `unsigned long` indiquant le nombre d'images décodées qui ont été présentées au pipeline de rendu pour affichage.
- `HTMLVideoElement.mozPaintedFrames` {{ReadOnlyInline}} {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Retourne un `unsigned long` indiquant le nombre d'images présentées qui ont été affichées à l'écran.
- `HTMLVideoElement.mozFrameDelay` {{ReadOnlyInline}} {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Retourne un `double` indiquant le temps de retard, en secondes, de la dernière image vidéo affichée.
- `HTMLVideoElement.mozHasAudio` {{ReadOnlyInline}} {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Retourne un booléen indiquant s'il y a de l'audio associé à la vidéo.

## Méthodes d'instances

_Hérite des méthodes de son interface parente, {{DOMxRef("HTMLMediaElement")}} et de {{DOMxRef("HTMLElement")}}._

- {{DOMxRef("HTMLVideoElement.cancelVideoFrameCallback()")}}
  - : Annule une fonction de rappel de trame vidéo précédemment enregistrée (voir {{DOMxRef("HTMLVideoElement.requestVideoFrameCallback", "requestVideoFrameCallback()")}}).
- {{DOMxRef("HTMLVideoElement.getVideoPlaybackQuality()")}}
  - : Retourne un objet {{DOMxRef("VideoPlaybackQuality")}} qui contient les métriques de lecture actuelles. Ces informations incluent, par exemple, le nombre d'images perdues ou corrompues ainsi que le nombre total d'images.
- {{DOMxRef("HTMLVideoElement.requestPictureInPicture()")}}
  - : Demande à l'agent utilisateur de passer la vidéo en mode image dans l'image.
- {{DOMxRef("HTMLVideoElement.requestVideoFrameCallback()")}}
  - : Enregistre une fonction de rappel qui s'exécute lorsqu'une nouvelle trame vidéo est envoyée au compositeur. Cela permet aux développeur·euse·s d'effectuer des opérations efficaces sur chaque trame vidéo.

## Évènements

_Hérite des évènements de son interface parente, {{DOMxRef("HTMLMediaElement")}} et de {{DOMxRef("HTMLElement")}}._

Écoutez ces évènements en utilisant {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}} ou en assignant un gestionnaire d'évènement à la propriété `oneventname` de cette interface.

- {{DOMxRef("HTMLVideoElement.enterpictureinpicture_event", "enterpictureinpicture")}}
  - : Déclenché lorsque le `HTMLVideoElement` passe avec succès en mode image dans l'image.
- {{DOMxRef("HTMLVideoElement.leavepictureinpicture_event", "leavepictureinpicture")}}
  - : Déclenché lorsque le `HTMLVideoElement` quitte avec succès le mode image dans l'image.
- {{DOMxRef("HTMLVideoElement.resize_event", "resize")}}
  - : Déclenché lorsque l'une ou les deux propriétés {{DOMxRef("HTMLVideoElement.videoWidth", "videoWidth")}} et {{DOMxRef("HTMLVideoElement.videoHeight", "videoHeight")}} viennent d'être mises à jour.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément HTML qui implémente cette interface&nbsp;: {{HTMLElement("video")}}.
- [Les formats médias pris en charge](/fr/docs/Web/Media/Guides/Formats)
