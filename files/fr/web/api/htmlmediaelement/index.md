---
title: HTMLMediaElement
slug: Web/API/HTMLMediaElement
l10n:
  sourceCommit: 2406bfdc031740afbd500a1fc953a76a4b7f8484
---

{{APIRef("HTML DOM")}}

L'interface **`HTMLMediaElement`** ajoute à {{DOMxRef("HTMLElement")}} les propriétés et les méthodes nécessaires pour prendre en charge les fonctionnalités de base liées aux médias qui sont communes aux vidéos et aux documents audios.

Les éléments {{DOMxRef("HTMLVideoElement")}} et {{DOMxRef("HTMLAudioElement")}} héritent de cette interface.

{{InheritanceDiagram}}

## Propriétés d'instance

_Cette interface hérite également des propriétés de ses ancêtres {{DOMxRef("HTMLElement")}}, {{DOMxRef("Element")}}, {{DOMxRef("Node")}} et {{DOMxRef("EventTarget")}}._

- {{DOMxRef("HTMLMediaElement.audioTracks")}} {{ReadOnlyInline}}
  - : Un objet {{DOMxRef("AudioTrackList")}} qui liste les objets {{DOMxRef("AudioTrack")}} contenus dans l'élément.
- {{DOMxRef("HTMLMediaElement.autoplay")}}
  - : Un booléen qui reflète l'attribut HTML [`autoplay`](/fr/docs/Web/HTML/Reference/Elements/video#autoplay), indiquant si la lecture doit commencer automatiquement dès qu'assez de média est disponible pour le faire sans interruption.

    > [!NOTE]
    > Lancer automatiquement la lecture audio sans que l'utilisateur·ice ne s'y attende ou ne le souhaite est une mauvaise expérience et doit être évité dans la plupart des cas, sauf exception. Voir le [guide de lecture automatique pour les médias et les API Web Audio](/fr/docs/Web/Media/Guides/Autoplay) pour plus d'informations. Gardez à l'esprit que les navigateurs peuvent ignorer les demandes de lecture automatique, donc votre code ne doit pas dépendre du bon fonctionnement de cette fonctionnalité.

- {{DOMxRef("HTMLMediaElement.buffered")}} {{ReadOnlyInline}}
  - : Retourne un objet {{DOMxRef("TimeRanges")}} qui indique les plages de la source média que le navigateur a mises en mémoire tampon (le cas échéant) au moment où la propriété `buffered` est consultée.
- {{DOMxRef("HTMLMediaElement.controls")}}
  - : Un booléen qui reflète l'attribut HTML [`controls`](/fr/docs/Web/HTML/Reference/Elements/video#controls), indiquant si les éléments d'interface utilisateur pour contrôler la ressource doivent être affichés.
- {{DOMxRef("HTMLMediaElement.controlsList")}}
  - : Retourne un objet {{DOMxRef("DOMTokenList")}} qui aide l'agent utilisateur à choisir quels contrôles afficher sur l'élément média lorsque l'agent utilisateur affiche son propre ensemble de contrôles. Le `DOMTokenList` prend une ou plusieurs des trois valeurs possibles&nbsp;: `nodownload`, `nofullscreen` et `noremoteplayback`.
- {{DOMxRef("HTMLMediaElement.crossOrigin")}}
  - : Une chaîne de caractères indiquant le [paramètre CORS](/fr/docs/Web/HTML/Reference/Attributes/crossorigin) pour cet élément média.
- {{DOMxRef("HTMLMediaElement.currentSrc")}} {{ReadOnlyInline}}
  - : Retourne une chaîne de caractères contenant l'URL absolue de la ressource média choisie.
- {{DOMxRef("HTMLMediaElement.currentTime")}}
  - : Une valeur à virgule flottante en double précision indiquant le temps de lecture actuel en secondes&nbsp;; si le média n'a pas commencé à être lu et n'a pas été déplacé, cette valeur correspond au temps de lecture initial du média. Définir cette valeur déplace la lecture à ce nouveau temps. Le temps est défini par rapport à la chronologie du média.
- {{DOMxRef("HTMLMediaElement.defaultMuted")}}
  - : Un booléen qui reflète l'attribut HTML [`muted`](/fr/docs/Web/HTML/Reference/Elements/video#muted), qui indique si la sortie audio de l'élément média doit être coupée par défaut.
- {{DOMxRef("HTMLMediaElement.defaultPlaybackRate")}}
  - : Un `double` indiquant la vitesse de lecture par défaut du média.
- {{DOMxRef("HTMLMediaElement.disableRemotePlayback")}}
  - : Un booléen qui définit ou retourne l'état de lecture à distance, indiquant si l'élément média est autorisé à avoir une interface de lecture à distance.
- {{DOMxRef("HTMLMediaElement.duration")}} {{ReadOnlyInline}}
  - : Une valeur à virgule flottante en double précision en lecture seule indiquant la durée totale du média en secondes. Si aucune donnée média n'est disponible, la valeur retournée est `NaN`. Si le média est de longueur indéfinie (comme un flux en direct, un média d'appel WebRTC ou similaire), la valeur est `Infinity`.
- {{DOMxRef("HTMLMediaElement.ended")}} {{ReadOnlyInline}}
  - : Retourne un booléen qui indique si l'élément média a terminé la lecture.
- {{DOMxRef("HTMLMediaElement.error")}} {{ReadOnlyInline}}
  - : Retourne un objet {{DOMxRef("MediaError")}} pour la dernière erreur rencontrée, ou `null` s'il n'y a pas eu d'erreur.
- {{DOMxRef("HTMLMediaElement.loop")}}
  - : Un booléen qui reflète l'attribut HTML [`loop`](/fr/docs/Web/HTML/Reference/Elements/video#loop), qui indique si l'élément média doit recommencer la lecture lorsqu'il arrive à la fin.
- {{DOMxRef("HTMLMediaElement.mediaKeys")}} {{ReadOnlyInline}} {{SecureContext_Inline}}
  - : Retourne un objet {{DOMxRef("MediaKeys")}}, c'est un ensemble de clés que l'élément peut utiliser pour le déchiffrement des données média lors de la lecture. Si aucune clé n'est disponible, la valeur peut être `null`.
- {{DOMxRef("HTMLMediaElement.muted")}}
  - : Un booléen qui détermine si l'audio est coupé. `true` si l'audio est coupé, `false` sinon.
- {{DOMxRef("HTMLMediaElement.networkState")}} {{ReadOnlyInline}}
  - : Retourne un `unsigned short` (énumération) indiquant l'état actuel de la récupération du média sur le réseau.
- {{DOMxRef("HTMLMediaElement.paused")}} {{ReadOnlyInline}}
  - : Retourne un booléen qui indique si l'élément média est en pause.
- {{DOMxRef("HTMLMediaElement.playbackRate")}}
  - : Un `double` qui indique la vitesse à laquelle le média est lu.
- {{DOMxRef("HTMLMediaElement.played")}} {{ReadOnlyInline}}
  - : Retourne un objet {{DOMxRef('TimeRanges')}} qui contient les plages de la source média que le navigateur a lues, le cas échéant.
- {{DOMxRef("HTMLMediaElement.preload")}}
  - : Une chaîne de caractères qui reflète l'attribut HTML [`preload`](/fr/docs/Web/HTML/Reference/Elements/video#preload), indiquant quelles données doivent être préchargées, le cas échéant. Les valeurs possibles sont&nbsp;: `none`, `metadata`, `auto`.
- {{DOMxRef("HTMLMediaElement.preservesPitch")}}
  - : Une valeur booléenne qui détermine si la hauteur du son sera préservée. Si elle est définie à `false`, la hauteur s'ajustera à la vitesse de l'audio.
- {{DOMxRef("HTMLMediaElement.readyState")}} {{ReadOnlyInline}}
  - : Retourne un `unsigned short` (énumération) indiquant l'état de préparation du média.
- {{DOMxRef("HTMLMediaElement.remote")}} {{ReadOnlyInline}}
  - : Retourne une instance d'objet {{DOMxRef("RemotePlayback")}} associée à l'élément média.
- {{DOMxRef("HTMLMediaElement.seekable")}} {{ReadOnlyInline}}
  - : Retourne un objet {{DOMxRef('TimeRanges')}} qui contient les plages temporelles auxquelles l'utilisateur·ice peut accéder, le cas échéant.
- {{DOMxRef("HTMLMediaElement.seeking")}} {{ReadOnlyInline}}
  - : Retourne un booléen qui indique si le média est en cours de déplacement vers une nouvelle position.
- {{DOMxRef("HTMLMediaElement.sinkId")}} {{ReadOnlyInline}} {{SecureContext_Inline}}
  - : Retourne une chaîne de caractères qui est l'identifiant unique du périphérique audio délivrant la sortie, ou une chaîne vide si le périphérique audio par défaut de l'agent utilisateur est utilisé.
- {{DOMxRef("HTMLMediaElement.src")}}
  - : Une chaîne de caractères qui reflète l'attribut HTML [`src`](/fr/docs/Web/HTML/Reference/Elements/video#src), qui contient l'URL d'une ressource média à utiliser.
- {{DOMxRef("HTMLMediaElement.srcObject")}}
  - : Un objet qui sert de source au média associé à `HTMLMediaElement`, ou `null` si non attribué.
- {{DOMxRef("HTMLMediaElement.textTracks")}} {{ReadOnlyInline}}
  - : Retourne un objet {{DOMxRef('TextTrackList')}} contenant la liste des objets {{DOMxRef("TextTrack")}} contenus dans l'élément.
- {{DOMxRef("HTMLMediaElement.videoTracks")}} {{ReadOnlyInline}}
  - : Retourne un objet {{DOMxRef('VideoTrackList')}} contenant la liste des objets {{DOMxRef("VideoTrack")}} contenus dans l'élément.
- {{DOMxRef("HTMLMediaElement.volume")}}
  - : Un `double` indiquant le volume audio, de 0.0 (silencieux) à 1.0 (le plus fort).

## Propriétés obsolètes

Ces propriétés sont obsolètes et ne doivent pas être utilisées, même si un navigateur les prend encore en charge.

- {{DOMxRef("HTMLMediaElement.controller")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Un objet `MediaController` qui représente le contrôleur média assigné à l'élément, ou `null` si aucun n'est assigné.
- {{DOMxRef("HTMLMediaElement.mediaGroup")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Une chaîne de caractères qui reflète l'attribut HTML `mediagroup`, qui indique le nom du groupe d'éléments auquel il appartient. Un groupe d'éléments média partage un même `MediaController`.
- `HTMLMediaElement.mozAudioCaptured` {{ReadOnlyInline}} {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Retourne un booléen. Lié à la capture de flux audio.
- `HTMLMediaElement.mozFragmentEnd` {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Un `double` qui donne accès à la fin du fragment si l'élément média possède un URI de fragment pour `currentSrc`, sinon il est égal à la durée du média.

## Méthodes d'instance

_Cette interface hérite également des méthodes de ses ancêtres {{DOMxRef("HTMLElement")}}, {{DOMxRef("Element")}}, {{DOMxRef("Node")}} et {{DOMxRef("EventTarget")}}._

- {{DOMxRef("HTMLMediaElement.addTextTrack()")}}
  - : Ajoute un nouvel objet {{DOMxRef("TextTrack")}} (comme une piste de sous-titres) à un élément média. Ceci est une interface uniquement programmatique et n'affecte pas le DOM.
- {{DOMxRef("HTMLMediaElement.captureStream()")}}
  - : Retourne {{DOMxRef("MediaStream")}}, capture un flux du contenu média.
- {{DOMxRef("HTMLMediaElement.canPlayType()")}}
  - : Étant donné une chaîne de caractères définissant un type MIME de média (éventuellement avec le [paramètre `codecs`](/fr/docs/Web/Media/Guides/Formats/codecs_parameter) inclus), `canPlayType()` retourne la chaîne de caractères `probably` si le média doit pouvoir être lu, `maybe` s'il n'y a pas assez d'informations pour déterminer si le média sera lu ou non, ou une chaîne vide si le média ne peut pas être lu.
- {{DOMxRef("HTMLMediaElement.fastSeek()")}}
  - : Effectue rapidement un déplacement à l'instant donné avec une faible précision.
- {{DOMxRef("HTMLMediaElement.load()")}}
  - : Réinitialise le média au début et sélectionne la meilleure source disponible parmi celles fournies à l'aide de l'attribut [`src`](/fr/docs/Web/HTML/Reference/Elements/video#src) ou de l'élément HTML {{HTMLElement("source")}}.
- {{DOMxRef("HTMLMediaElement.pause()")}}
  - : Met en pause la lecture du média.
- {{DOMxRef("HTMLMediaElement.play()")}}
  - : Démarre la lecture du média.
- {{DOMxRef("HTMLMediaElement.seekToNextFrame()")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Atteint l'image suivante dans le média. Cette méthode non standard et expérimentale permet de piloter manuellement la lecture et le rendu du média à une vitesse personnalisée, ou de parcourir le média image par image pour effectuer des filtrages ou d'autres opérations.
- {{DOMxRef("HTMLMediaElement.setMediaKeys()")}} {{SecureContext_Inline}}
  - : Retourne un objet {{JSxRef("Promise")}}. Définit les clés {{DOMxRef("MediaKeys")}} à utiliser lors du déchiffrement du média pendant la lecture.
- {{DOMxRef("HTMLMediaElement.setSinkId()")}} {{SecureContext_Inline}}
  - : Définit l'identifiant du périphérique audio à utiliser pour la sortie et retourne un objet {{JSxRef("Promise")}}. Ceci ne fonctionne que lorsque l'application est autorisée à utiliser le périphérique spécifié.

## Méthodes obsolètes

_Ces méthodes sont obsolètes et ne doivent pas être utilisées, même si un navigateur les prend encore en charge._

- {{DOMxRef("HTMLMediaElement.captureStream", "HTMLMediaElement.mozCaptureStream()")}} {{Non-standard_Inline}}
  - : Équivalent préfixé Firefox de {{DOMxRef("HTMLMediaElement.captureStream()")}}. Voir sa [compatibilité des navigateurs](/fr/docs/Web/API/HTMLMediaElement/captureStream#compatibilité_des_navigateurs) pour plus de détails.
- `HTMLMediaElement.mozCaptureStreamUntilEnded()` {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : _Aucune description disponible._
- `HTMLMediaElement.mozGetMetadata()` {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Retourne {{JSxRef('Object')}}, qui contient des propriétés représentant les métadonnées de la ressource média en cours de lecture sous forme de paires `{clé: valeur}`. Une copie distincte des données est retournée à chaque appel de la méthode. Cette méthode doit être appelée après le déclenchement de l'évènement [`loadedmetadata`](/fr/docs/Web/API/HTMLMediaElement/loadedmetadata_event).

## Évènements

_Hérite des évènements de son parent, {{DOMxRef("HTMLElement")}}._

Écoutez ces évènements en utilisant {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}} ou en assignant un gestionnaire d'évènements à la propriété `oneventname` de cette interface.

- {{DOMxRef("HTMLMediaElement.abort_event", "abort")}}
  - : Déclenché lorsque la ressource n'a pas été entièrement chargée, mais pas à la suite d'une erreur.
- {{DOMxRef("HTMLMediaElement.canplay_event", "canplay")}}
  - : Déclenché lorsque l'agent utilisateur peut lire le média, mais estime que **pas** assez de données ont été chargées pour lire le média jusqu'à la fin sans devoir s'arrêter pour mettre en mémoire tampon du contenu supplémentaire.
- {{DOMxRef("HTMLMediaElement.canplaythrough_event", "canplaythrough")}}
  - : Déclenché lorsque l'agent utilisateur peut lire le média et estime que suffisamment de données ont été chargées pour lire le média jusqu'à la fin sans avoir à s'arrêter pour mettre en mémoire tampon du contenu supplémentaire.
- {{DOMxRef("HTMLMediaElement.durationchange_event", "durationchange")}}
  - : Déclenché lorsque la propriété de durée a été mise à jour.
- {{DOMxRef("HTMLMediaElement.emptied_event", "emptied")}}
  - : Déclenché lorsque le média est devenu vide&nbsp;; par exemple, lorsque le média a déjà été chargé (ou partiellement chargé), et que la méthode {{DOMxRef("HTMLMediaElement.load()")}} est appelée pour le recharger.
- {{DOMxRef("HTMLMediaElement.encrypted_event", "encrypted")}}
  - : Déclenché lorsque des données d'initialisation sont trouvées dans le média, indiquant que le média est chiffré.
- {{DOMxRef("HTMLMediaElement.ended_event", "ended")}}
  - : Déclenché lorsque la lecture s'arrête à la fin du média (\<audio> ou \<video>) ou parce qu'aucune donnée supplémentaire n'est disponible.
- {{DOMxRef("HTMLMediaElement.error_event", "error")}}
  - : Déclenché lorsque la ressource n'a pas pu être chargée en raison d'une erreur.
- {{DOMxRef("HTMLMediaElement.loadeddata_event", "loadeddata")}}
  - : Déclenché lorsque la première image du média a fini de se charger.
- {{DOMxRef("HTMLMediaElement.loadedmetadata_event", "loadedmetadata")}}
  - : Déclenché lorsque les métadonnées ont été chargées.
- {{DOMxRef("HTMLMediaElement.loadstart_event", "loadstart")}}
  - : Déclenché lorsque le navigateur a commencé à charger une ressource.
- {{DOMxRef("HTMLMediaElement.pause_event", "pause")}}
  - : Déclenché lorsqu'une demande de mise en pause est traitée et que l'activité est passée à l'état de pause, le plus souvent lorsque la méthode {{DOMxRef("HTMLMediaElement.pause()")}} du média est appelée.
- {{DOMxRef("HTMLMediaElement.play_event", "play")}}
  - : Déclenché lorsque la propriété `paused` passe de `true` à `false`, à la suite de l'appel à la méthode {{DOMxRef("HTMLMediaElement.play()")}} ou de l'attribut `autoplay`.
- {{DOMxRef("HTMLMediaElement.playing_event", "playing")}}
  - : Déclenché lorsque la lecture est prête à démarrer après avoir été mise en pause ou retardée en raison d'un manque de données.
- {{DOMxRef("HTMLMediaElement.progress_event", "progress")}}
  - : Déclenché périodiquement pendant que le navigateur charge une ressource.
- {{DOMxRef("HTMLMediaElement.ratechange_event", "ratechange")}}
  - : Déclenché lorsque la vitesse de lecture a changé.
- {{DOMxRef("HTMLMediaElement.seeked_event", "seeked")}}
  - : Déclenché lorsqu'une opération de déplacement est terminée.
- {{DOMxRef("HTMLMediaElement.seeking_event", "seeking")}}
  - : Déclenché lorsqu'une opération de déplacement commence.
- {{DOMxRef("HTMLMediaElement.stalled_event", "stalled")}}
  - : Déclenché lorsque l'agent utilisateur tente de récupérer des données média, mais que les données n'arrivent pas comme prévu.
- {{DOMxRef("HTMLMediaElement.suspend_event", "suspend")}}
  - : Déclenché lorsque le chargement des données média a été suspendu.
- {{DOMxRef("HTMLMediaElement.timeupdate_event", "timeupdate")}}
  - : Déclenché lorsque la propriété {{DOMxRef("HTMLMediaElement.currentTime", "currentTime")}} a été mise à jour.
- {{DOMxRef("HTMLMediaElement.volumechange_event", "volumechange")}}
  - : Déclenché lorsque le volume a changé.
- {{DOMxRef("HTMLMediaElement.waiting_event", "waiting")}}
  - : Déclenché lorsque la lecture s'est arrêtée en raison d'un manque temporaire de données.
- {{DOMxRef("HTMLMediaElement.waitingforkey_event", "waitingforkey")}}
  - : Déclenché lorsque la lecture est d'abord bloquée en attente d'une clé.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les éléments HTML {{HTMLElement("video")}} et {{HTMLElement("audio")}}.
- Les interfaces {{DOMxRef("HTMLVideoElement")}} et {{DOMxRef("HTMLAudioElement")}}, dérivées de `HTMLMediaElement`.
- [Technologies des médias web](/fr/docs/Web/Media)
- Domaine d'apprentissage&nbsp;: [Audio et vidéo HTML](/fr/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio)
- [Guide des types et formats de médias](/fr/docs/Web/Media/Guides/Formats)
- [Gérer les problèmes de prise en charge des médias dans le contenu web](/fr/docs/Web/Media/Guides/Formats/Support_issues)
