---
title: Screen Capture API
slug: Web/API/Screen_Capture_API
tags:
  - API
  - Capture
  - Conference
  - Media
  - MediaDevices
  - Overvew
  - Screen Capture
  - Screen Sharing
  - Video
  - Window
  - display
  - getDisplayMedia
  - screen
translation_of: Web/API/Screen_Capture_API
---
{{DefaultAPISidebar("Screen Capture API")}}

The Screen Capture API introduces additions to the existing Media Capture and Streams API to let the user select a screen or portion of a screen (such as a window) to capture as a media stream. This stream can then be recorded or shared with others over the network.

## API Screen Capture concepts et utilisation

L'API Screen Capture est relativement simple à utiliser. Sa seule méthode est {{domxref("MediaDevices.getDisplayMedia()")}} dont le but est de demander à l'utilisateur un écran ou une portion d'écran à capturer sous la forme de {{domxref("MediaStream")}}.

Pour commencer à capturer une vidéo de l'écran, il faut appeler `getDisplayMedia()` dans une instance de `navigator.mediaDevices`

```js
captureStream = await navigator.mediaDevices.getDisplayMedia(displayMediaOptions);
```

La {{jsxref("Promise")}} retournée par `getDisplayMedia()` résout un {{domxref("MediaStream")}} qui diffuse le dédia capturé.

Voir l'article [Utiliser l'API Screen Capture](/en-US/docs/Web/API/Screen_Capture_API/Using_Screen_Capture) pour plus de détails sur l’utilisation de l’API pour capturer le contenu de l’écran sous forme de flux.

## Ajouts à l'interface actuelle

L'API Screen Capture n'a pas sa propre interface. Cependant, elle ajoute une méthode à l'existante interface {{domxref("MediaDevices")}} .

### Interface MediaDevices

- {{domxref("MediaDevices.getDisplayMedia()")}}
  - : La méthode `getDisplayMedia()` est ajoutée à l'interface `MediaDevices`. Similaire à {{domxref("MediaDevices.getUserMedia", "getUserMedia()")}}, cette méthode crée une promise qui  method creates a promise qui résout un {{domxref("MediaStream")}} contenant  la zone d'affichage sélectionnée par l'utilisateur, dans un format qui correspond aux options spécifiées.

## Ajouts aux dictionnaires actuels

L'API Screen Capture ajoute des propriétés au dictionnaire suivant définit par d'autres spécificités.

### MediaTrackConstraints

- {{domxref("MediaTrackConstraints.cursor")}}
  - : Un {{domxref("ConstrainDOMString")}}  indiquant si le curseur doit ou non être inclus dans le flux de la surface d'affichage capturée, et s'il doit toujours être visible ou s'il ne doit l'être que lorsque la souris est en mouvement.
- {{domxref("MediaTrackConstraints.displaySurface")}}
  - : Un {{domxref("ConstrainDOMString")}} indiquant quel type de surface d'affichage doit être capturé. La valeur peut être `application`, `browser`, `monitor`, ou `window`.
- {{domxref("MediaTrackConstraints.logicalSurface")}}
  - : Indique si la vidéo dans le flux représente ou non une surface d'affichage logique (c'est-à-dire une surface qui peut ne pas être entièrement visible à l'écran ou peut-être complètement hors écran). La valeur `true` indique qu'une surface d'affichage logique doit être capturée.

### MediaTrackSettings

- {{domxref("MediaTrackSettings.cursor")}}
  - : Une chaîne de caractères indiquant si la surface d'affichage en cours de capture comprend ou non le curseur de la souris et, dans l'affirmative, si elle est visible uniquement lorsque la souris est en mouvement ou si elle est toujours visible. La valeur peut être `always`, `motion`, ou `never`.
- {{domxref("MediaTrackSettings.displaySurface")}}
  - : Une chaîne indiquant le type de surface d'affichage en cours de capture. La valeur peut être`application`, `browser`, `monitor`, ou `window`.
- {{domxref("MediaTrackSettings.logicalSurface")}}
  - : Valeur booléenne valant `true` si la vidéo en cours de capture ne correspond pas directement à une seule zone d'affichage à l'écran.

### MediaTrackSupportedConstraints

- {{domxref("MediaTrackSupportedConstraints.cursor")}}
  - : Valeur booléenne valant `true` si l'environnement actuel supporte la contrainte {{domxref("MediaTrackConstraints.cursor")}}.
- {{domxref("MediaTrackSupportedConstraints.displaySurface")}}
  - : Valeur booléenne valant `true` si l'environnement actuel supporte la contrainte {{domxref("MediaTrackConstraints.displaySurface")}}.
- {{domxref("MediaTrackSupportedConstraints.logicalSurface")}}
  - : Valeur booléenne valant `true` si l'environnement actuel supporte la contrainte {{domxref("MediaTrackConstraints.logicalSurface")}}.

## Dictionnaires

Le dictionnaire suivant est difinit par l'API Screen Capture.

- `CursorCaptureConstraint`
  - : Un type de chaîne énuméré utilisé pour fournir la valeur de la propriété `cursor` aux paramètres et aux contraintes. La valeur peut être `always`, `motion`, ou `never`.
- `DisplayCaptureSurfaceType`
  - : Un type de chaîne énuméré utilisé pour identifier le type de surface d'affichage à capturer. ce type est utilisé pour la propriété `displaySurface` dans les objets contraints et paramètres, et a plusieurs valeurs possibles `application`, `browser`, `monitor`, and `window`.

## Validation de Feature Policy

{{Glossary("User agent", "User agents")}} qui supportent  Feature Policy (soit en utilisant les entetes HTTP {{HTTPHeader("Feature-Policy")}} ou l'attribut {{HTMLElement("iframe")}}{{htmlattrxref("allow", "iframe")}} peut spécifier la volonté d'utiliser l'API Screen Capture API en utilisant la directive Policy Controle `display-capture`:

```html
<iframe allow="display-capture" src="/some-other-document.html">
```

La liste d’autorisations par défaut est `self`, ce qui permet à tout contenu du document d’utiliser Screen Capture.

Voir [Utiliser Feature Policy](/en-US/docs/Web/HTTP/Feature_Policy/Using_Feature_Policy) pour une explication plus en détail sur comment est utilisé Feature Policy.

## Caracteristiques

| Caracteristiques                         | Statut                               | Commentaire         |
| ---------------------------------------- | ------------------------------------ | ------------------- |
| {{SpecName('Screen Capture')}} | {{Spec2('Screen Capture')}} | Définition Initiale |

## Compatibilité des Navigateurs

{{Compat("api.MediaDevices.getDisplayMedia")}}

## Voir aussi

- [Utiliser l'API Screen Capture](/en-US/docs/Web/API/Screen_Capture_API/Using_Screen_Capture)
- {{domxref("MediaDevices.getDisplayMedia()")}}
