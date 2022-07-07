---
title: HTMLVideoElement
slug: Web/API/HTMLVideoElement
tags:
  - API
  - HTML DOM
  - HTMLVideoElement
  - Interface
  - Reference
  - Video
translation_of: Web/API/HTMLVideoElement
---
{{APIRef("HTML DOM")}}

L'interface **`HTMLVideoElement`** fournit des propriétés et des méthodes spéciales pour manipuler des objets vidéo. Elle hérite également des propriétés et des méthodes de [`HTMLMediaElement`](/fr/docs/Web/API/HTMLMediaElement) et de [`HTMLElement`](/fr/docs/Web/API/HTMLElement).

La liste des [formats multimédias pris en charge](/fr/docs/Web/Media/Formats) varie d’un navigateur à l’autre. Vous pouvez fournir votre vidéo dans un format unique que tous les navigateurs pertinents prennent en charge, ou fournir plusieurs sources vidéo dans des formats suffisamment différents couverts par les différents navigateurs que vous ciblez.

{{InheritanceDiagram(600, 140)}}

## Propriétés

_Cette interface hérite des propriétés de ses interfaces ancêtres :_ _{{domxref("HTMLMediaElement")}} et_ _{{domxref("HTMLElement")}}._

- {{domxref("HTMLVideoElement.height")}}
  - : Une chaîne de caractères {{domxref("DOMString")}} qui reflète la valeur de l'attribut HTML {{htmlattrxref("height", "video")}} indiquant la hauteur de la zone d'affichage, en pixels.
- {{domxref("HTMLVideoElement.poster")}}
  - : Une chaîne de caractères {{domxref("DOMString")}} qui reflète la valeur de l'attribut {{htmlattrxref("poster", "video")}} qui indique une image à afficher tant qu'aucune donnée vidéo n'est disponible.
- {{domxref("HTMLVideoElement.videoHeight")}} {{readonlyInline}}
  - : Un entier non signé qui indique la hauteur intrinsèque de la ressource, exprimée en pixels CSS, ou 0 tant que le média n'est pas disponible.
- {{domxref("HTMLVideoElement.videoWidth")}} {{readonlyInline}}
  - : Un entier non signé qui indique la largeur intrinsèque de la ressource, exprimée en pixels CSS, ou 0 tant que le média n'est pas disponible.
- {{domxref("HTMLVideoElement.width")}}
  - : Une chaîne de caractères {{domxref("DOMString")}} qui reflète la valeur de l'attribut HTML {{htmlattrxref("width", "video")}} indiquant la largeur de la zone d'affichage, en pixels.

### Propriétés spécifiques à Gecko

- {{domxref("HTMLVideoElement.mozParsedFrames")}} {{Non-standard_Inline}}{{ReadOnlyInline}}
  - : Un entier non signé indiquant le nombre de _frames_ qui ont été analysées (_parsed_) depuis la ressource média.
- {{domxref("HTMLVideoElement.mozDecodedFrames")}} {{Non-standard_Inline}}{{ReadOnlyInline}}
  - : Un entier non signé indiquant le nombre de _frames_ qui ont été décodées en images.
- {{domxref("HTMLVideoElement.mozPresentedFrames")}} {{Non-standard_Inline}}{{ReadOnlyInline}}
  - : Un entier non signé indiquant le nombre de _frames_ décodées qui ont été présentées au canal de rendu pour l'affichage.
- {{domxref("HTMLVideoElement.mozPaintedFrames")}} {{Non-standard_Inline}}{{ReadOnlyInline}}
  - : Un entier non signé indiquant le nombre de _frames_ présentées et qui ont été affichées à l'écran.
- {{domxref("HTMLVideoElement.mozFrameDelay")}} {{Non-standard_Inline}}{{ReadOnlyInline}}
  - : Un double indiquant le retard, exprimé en secondes, pour l'affichage de la dernière _frame_ affichée.
- {{domxref("HTMLVideoElement.mozHasAudio")}} {{Non-standard_Inline}}{{ReadOnlyInline}}
  - : Un booléen indiquant s'il y a de l'audio associé à cette vidéo.

### Propriétés spécifiques à Microsoft

- {{DOMxRef("HTMLVideoElement.msFrameStep()")}} {{Non-standard_Inline}}
  - : Permet d'avancer ou de reculer la vidéo d'une _frame_.
- {{DOMxRef("HTMLVideoElement.msHorizontalMirror")}} {{Non-standard_Inline}}
  - : Permet d'indiquer ou de définir si la vidéo est inversée horizontalement dans l'affichage.
- {{DOMxRef("HTMLVideoElement.msInsertVideoEffect()")}} {{Non-standard_Inline}}
  - : Ajoute l'effet vidéo indiqué dans le canal de rendu.
- {{DOMxRef("HTMLVideoElement.msIsLayoutOptimalForPlayback")}} {{Non-standard_Inline}}{{ReadOnlyInline}}
  - : Indique si la vidéo peut être affichée plus efficacement.
- {{DOMxRef("HTMLVideoElement.msIsStereo3D")}} {{Non-standard_Inline}}{{ReadOnlyInline}}
  - : Un booléen qui détermine si le système considère que la vidéo chargée est en stéréo 3D. La valeur `true` indique que la source est en stéro 3D.
- {{DOMxRef("HTMLVideoElement.msZoom")}} {{Non-standard_Inline}}
  - : Contrôle si le cadre de la vidéo est réduit pour s'inscrire dans la zone d'affichage de la vidéo (autrement dit : si la vidéo est zoomée/tronquée pour s'inscrire dans la zone correspondante).

## Méthodes

_Hérite des méthodes de son parent {{domxref("HTMLMediaElement")}} et de son ancêtre {{domxref("HTMLElement")}}._

- {{domxref("HTMLVideoElement.getVideoPlaybackQuality()")}} {{experimental_inline}}
  - : Cette méthode renvoie un objet {{domxref("VideoPlaybackQuality")}} contenant les métriques/statistiques sur la lecture actuelle avec des informations comme le nombre d'images sautées ou corrompues ainsi que le nombre total d'images.

## Évènements

_Hérite des méthodes de son parent {{domxref("HTMLMediaElement")}} et de son ancêtre {{domxref("HTMLElement")}}._ Pour écouter ces évènements, on utilisera [`addEventListener()`](/fr/docs/Web/API/EventTarget/addEventListener) ou on affectera un gestionnaire d'évènement avec la propriété `on<NomEvenement>` (ex. `onclick`) de l'interface.

## Spécifications

| Spécification                                                                                | État                             | Commentaires |
| -------------------------------------------------------------------------------------------- | -------------------------------- | ------------ |
| {{SpecName('HTML WHATWG', "#htmlvideoelement", "HTMLVideoElement")}} | {{Spec2('HTML WHATWG')}} |              |

## Compatibilité des navigateurs

{{Compat("api.HTMLVideoElement")}}

## Voir aussi

- L'élément HTML qui implémente cette interface {{HTMLElement("video")}}.
- [Les formats médias pris en charge](/fr/docs/Web/Media/Formats)
