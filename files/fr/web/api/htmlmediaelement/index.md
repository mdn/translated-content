---
title: HTMLMediaElement
slug: Web/API/HTMLMediaElement
tags:
  - API
  - Audio
  - DOM
  - Interface
  - Media
  - Video
translation_of: Web/API/HTMLMediaElement
---
{{APIRef("HTML DOM")}}

L'interface **`HTMLMediaElement`** ajoute à {{domxref("HTMLElement")}} les propriétés et les méthodes nécessaires pour prendre en charge les fonctionnalités de base liées aux médias qui sont communes aux vidéos et aux documents audios. {{domxref("HTMLVideoElement")}} et {{domxref("HTMLAudioElement")}} héritent de cette interface.

## Propriétés

_Cette interface hérite aussi des propriétés de ses ancêtres_ _{{domxref("HTMLElement")}}, {{domxref("Element")}}, {{domxref("Node")}} et {{domxref("EventTarget")}}._

- {{domxref("HTMLMediaElement.audioTracks")}}
  - : est une {{domxref("AudioTrackList")}} qui liste les objets {{domxref("AudioTrack")}} (_pistes audio_) contenus dans l'élément.
- {{domxref("HTMLMediaElement.autoplay")}}

  - : est un {{jsxref("Boolean")}} qui reflète l'attribut HTML {{htmlattrxref("autoplay","video")}}, indiquant si la lecture doit commencer automatiquement dès que suffisamment de médias sont disponibles pour le faire sans interruption.

    > **Note :** Les sites qui lisent automatiquement l'audio (ou les vidéos avec une piste audio) peuvent être désagréables pour les utilisateurs, il faut donc l'éviter autant que possible. Si vous devez offrir la fonctionnalité de lecture automatique, vous devez la faire activer (par un utilisateur qui la lance expréssement). Cependant, cela peut être utile lors de la création d'éléments média dont la source sera définie ultérieurement, sous le contrôle de l'utilisateur.

- {{domxref("HTMLMediaElement.buffered")}}{{readonlyinline}}
  - : Renvoie un objet {{domxref("TimeRanges")}} qui indique les plages de la source du média que le navigateur a en mémoire tampon (le cas échéant) au moment de l'accès à la propriété `buffered`.
- {{domxref("HTMLMediaElement.controller")}}
  - : est un objet {{domxref("MediaController")}} qui représente le contrôleur du média assigné à l'élément, ou `null` si aucun n'est défini.
- {{domxref("HTMLMediaElement.controls")}}
  - : est un {{jsxref('Boolean')}} qui reflète l'attribut HTML {{htmlattrxref("controls","video")}}, indiquant quels éléments de contrôle de ressource de l'interface utilisateur doivent être affichés.
- {{domxref("HTMLMediaElement.controlsList")}} {{readonlyinline}}
  - : renvoie une {{domxref("DOMTokenList")}} qui aide l'agent utilisateur à sélectionner les contrôles à afficher sur l'élément du média chaque fois que l'agent utilisateur affiche son propre jeu de contrôles. La `DOMTokenList` prend une ou plusieurs des trois valeurs possibles : `nodownload`, `nofullscreen` et `noremoteplayback`.
- {{domxref("HTMLMediaElement.crossOrigin")}}
  - : est une {{domxref("DOMString")}} (_chaîne de caractères_) indiquant les [règlages CORS](/fr/docs/Web/HTML/Reglages_des_attributs_CORS) pour cet élément de média.
- {{domxref("HTMLMediaElement.currentSrc")}}{{readonlyinline}}
  - : Renvoie une {{domxref("DOMString")}} (_chaîne de caractères_) avec l'URL absolue de la ressource de média choisie.
- {{domxref("HTMLMediaElement.currentTime")}}
  - : est un `double` indiquant le temps de lecture actuel en secondes. La définition de cette valeur recherche le média à la nouvelle heure.
- {{domxref("HTMLMediaElement.defaultMuted")}}
  - : est un {{jsxref('Boolean')}} qui reflète l'attribut HTML {{htmlattrxref("muted","video")}}, qui indique si la sortie audio de l'élément média doit être désactivée par défaut.
- {{domxref("HTMLMediaElement.defaultPlaybackRate")}}
  - : est un `double` indiquant le taux de lecture par défaut pour le média.
- {{domxref("HTMLMediaElement.disableRemotePlayback")}}
  - : est un {{jsxref('Boolean')}} qui définit ou retourne l'état de lecture à distance, indiquant si l'élément de média est autorisé à avoir une interface de lecture à distance.
- {{domxref("HTMLMediaElement.duration")}}{{readonlyinline}}
  - : renvoie un `double` indiquant la longueur du média en secondes, ou 0 si aucune donnée multimédia n'est disponible.
- {{domxref("HTMLMediaElement.ended")}}{{readonlyinline}}
  - : renvoie un {{jsxref('Boolean')}} qui indique si l'élément média est terminé.
- {{domxref("HTMLMediaElement.error")}}{{readonlyinline}}
  - : renvoie un objet {{domxref("MediaError")}} pour l'erreur la plus récente, ou `null` s'il n'y a pas eu d'erreur.
- {{domxref("HTMLMediaElement.loop")}}
  - : est un {{jsxref('Boolean')}} qui reflète l'attribut HTML {{htmlattrxref("loop","video")}} (_boucle_), lequel indique si l'élément média doit recommencer quand il arrive à la fin.
- {{domxref("HTMLMediaElement.mediaGroup")}}
  - : est une {{domxref("DOMString")}} qui reflète l'attribut HTML {{htmlattrxref("mediagroup","video")}}, lequel indique le nom du groupe d'éléments auquel il appartient. Un groupe d'éléments média partage un  {{domxref('MediaController')}} commun.
- {{domxref("HTMLMediaElement.mediaKeys")}}{{readonlyinline}} {{experimental_inline}}
  - : Renvoie un objet {{domxref("MediaKeys")}} ou `null`. `MediaKeys` est un ensemble de clés qu'un élément `HTMLMediaElement` associé peut utiliser pour déchiffrer les données du média pendant la lecture.
- {{domxref("HTMLMediaElement.mozAudioCaptured")}}{{readonlyinline}} {{non-standard_inline}}
  - : renvoie un {{jsxref('Boolean')}}. Lié à la capture de flux audio.
- {{domxref("HTMLMediaElement.mozFragmentEnd")}} {{non-standard_inline}}
  - : est un `double` qui donne accès à l'heure de fin du fragment si l'élément média a un fragment URI pour `currentSrc`, sinon il est égal à la durée du média.
- {{domxref("HTMLMediaElement.mozFrameBufferLength")}} {{non-standard_inline}} {{deprecated_inline}}

  - : est un `unsigned long` qui indique le nombre d'échantillons qui seront renvoyés dans le "framebuffer" de chaque évènement `MozAudioAvailable`. Ce nombre est un total pour tous les canaux, et par défaut est défini par le nombre de canaux \* 1024 (c'est-à-dire, 2 canaux \* 1024 échantillons = total 2048).

    La propriété `mozFrameBufferLength` peut être définie à une nouvelle valeur pour une latence plus faible, de plus grandes quantités de données, etc. La taille donnée _doit_ être un nombre compris entre 512 et 16384. L'utilisation d'autres tailles entraîne la levée d'une exception. Le meilleur moment pour définir une nouvelle longueur est après le lancement de l'évènement [loadedmetadata](/en-US/docs/Web/Events/loadedmetadata), lorsque l'information audio est connue, mais avant que l'audio ait commencé ou que les événements `MozAudioAvailable` aient commencé à se déclencher.

- {{domxref("HTMLMediaElement.mozSampleRate")}}{{readonlyinline}} {{non-standard_inline}} {{deprecated_inline}}
  - : renvoie un `double` représentant le nombre d'échantillons par seconde. Par exemple, 44100 échantillons par seconde correspondent à la fréquence d'échantillonnage utilisée par les CD audio.
- {{domxref("HTMLMediaElement.muted")}}
  - : est un {{jsxref('Boolean')}} qui détermine si l'audio est coupé. `true` (_vrai_) si l'audio est coupé et `false` (_faux_) sinon.
- {{domxref("HTMLMediaElement.networkState")}}{{readonlyinline}}
  - : renvoie un `unsigned short` (énumération) indiquant l'état actuel de récupération du média sur le réseau.
- {{domxref("HTMLMediaElement.paused")}}{{readonlyinline}}
  - : renvoie un {{jsxref('Boolean')}} qui indique si l'élément média est en pause.
- {{domxref("HTMLMediaElement.playbackRate")}}
  - : est un `double` qui indique la vitesse à laquelle le média est lu.
- {{domxref("HTMLMediaElement.played")}}{{readonlyinline}}
  - : renvoie un objet {{domxref('TimeRanges')}} qui contient les plages de la source média que le navigateur a lu, le cas échéant.
- {{domxref("HTMLMediaElement.preload")}}
  - : est une {{domxref("DOMString")}} (_chaîne_) qui reflète l'attribut HTML {{htmlattrxref("preload","video")}}, indiquant quelles données doivent être préchargées, le cas échéant. Les valeurs possibles sont : `none`, `metadata`, `auto`.
- {{domxref("HTMLMediaElement.preservesPitch")}} {{non-standard_inline}}
  - : est un {{jsxref('Boolean')}} qui détermine si la hauteur du son sera préservée. S'il est défini à `false` (_faux_), la hauteur du son s'ajustera à la vitesse de l'audio. C'est implémenté avec préfixe dans Firefox (`mozPreservesPitch`) et WebKit (`webkitPreservesPitch`).
- {{domxref("HTMLMediaElement.readyState")}}{{readonlyinline}}
  - : Renvoie un `unsigned short` (énumération) indiquant l'état de préparation des médias.
- {{domxref("HTMLMediaElement.seekable")}}{{readonlyinline}}
  - : Renvoie un objet {{domxref('TimeRanges')}} qui contient les plages de temps que l'utilisateur peut rechercher, le cas échéant.
- {{domxref("HTMLMediaElement.seeking")}}{{readonlyinline}}
  - : Renvoie un {{jsxref('Boolean')}} qui indique si les médias sont en train de chercher une nouvelle position.
- {{domxref("HTMLMediaElement.sinkId")}}{{readonlyinline}} {{experimental_inline}}
  - : Renvoie une {{domxref("DOMString")}} (_chaîne_) qui est l'identifiant unique du périphérique audio de sortie, ou une chaîne vide s'il utilise l'agent utilisateur par défaut. Cet identifiant doit être l'une des valeurs `MediaDeviceInfo.deviceid` retournées par {{domxref("MediaDevices.enumeratedDevices()")}}, `id-multimedia` ou `id-communications`.
- {{domxref("HTMLMediaElement.src")}}
  - : est une {{domxref("DOMString")}} qui reflète l'attribut HTML {{htmlattrxref("src","video")}}, lequel contient l'URL d'une ressource média à utiliser.
- {{domxref("HTMLMediaElement.srcObject")}}
  - : est un {{domxref('MediaStream')}} représentant le média à lire ou qui a joué dans le `HTMLMediaElement` courant, ou `null` s'il n'est pas assigné.
- {{domxref("HTMLMediaElement.textTracks")}}{{readonlyinline}}
  - : Renvoie la liste d'objets {{domxref("TextTrack")}} (_piste de texte_) contenus dans l'élément.
- {{domxref("HTMLMediaElement.videoTracks")}}{{readonlyinline}}

  - : Renvoie la liste d'objets {{domxref("VideoTrack")}} (_pistes vidéo_) contenus dans l'élément.

    > **Note :** Gecko ne prend en charge que la lecture d'une seule piste et l'analyse des métadonnées des pistes n'est disponible que pour les médias avec le format de conteneur Ogg.

- {{domxref("HTMLMediaElement.volume")}}
  - : est un `double` indiquant le volume audio, de 0.0 (silence) à 1.0 (le plus fort).

### Gestionnaires d'évènements

- {{domxref("HTMLMediaElement.onencrypted")}}
  - : définit le {{domxref('EventHandler')}} (_gestionnaire d'évènements_) appelé quand le média est encrypté.
- {{domxref("HTMLMediaElement.onwaitingforkey")}}
  - : définit le {{domxref('EventHandler')}} (_gestionnaire d'évènements_) appelé quand la lecture est bloquée en attente d'une clé de chiffrement.

## Attributs obsolètes

Ces attributs sont obsolètes et ne doivent plus être utilisés, même si un navigateur les prend encore en charge.

- {{domxref("HTMLMediaElement.initialTime")}} {{readonlyinline}} {{non-standard_inline}} {{obsolete_inline}}
  - : renvoie un `double` qui indique la position de lecture initiale en secondes.
- {{domxref("HTMLMediaElement.mozChannels")}} {{readonlyinline}} {{non-standard_inline}} {{deprecated_inline}}
  - : renvoie un `double` représentant le nombre de canaux dans la ressource audio (c'est-à-dire 2 pour stéréo).

### Gestionnaires d'évènements obsolètes

- {{domxref("HTMLMediaElement.onmozinterruptbegin")}} {{non-standard_inline}} {{obsolete_inline}}
  - : définit le {{event("Event_handlers", "event handler")}} (_gestionnaire d'évènements_) appelé lorsque l'élément média est interrompu du fait du gestionnaire de canaux audio. C'était une spécificité de Firefox, implémentée pour Firefox OS et supprimée à partir de Firefox 55.
- {{domxref("HTMLMediaElement.onmozinterruptend")}} {{non-standard_inline}} {{obsolete_inline}}
  - : définit le {{event("Event_handlers", "event handler")}} (_gestionnaire d'évènements_) appelé lorsque l'interruption est terminée. C'était une spécificité de Firefox, implémentée pour Firefox OS et supprimée à partir de Firefox 55.

## Méthodes

_Cette interface hérite aussi des méthodes de ses ancêtres {{domxref("HTMLElement")}}, {{domxref('Element')}}, {{domxref('Node')}} et {{domxref('EventTarget')}}._

- {{domxref("HTMLMediaElement.addTextTrack()")}}
  - : Ajoute une piste de texte (telle qu'une piste pour les sous-titres) à un élément de média.
- {{domxref("HTMLMediaElement.captureStream()")}} {{experimental_inline}}
  - : Renvoie {{domxref("MediaStream")}}, capture un flux du contenu du média.
- {{domxref("HTMLMediaElement.canPlayType()")}}
  - : Détermine si le type de média spécifié peut être lu.
- {{domxref("HTMLMediaElement.fastSeek()")}}
  - : cherche directement à l'heure donnée.
- {{domxref("HTMLMediaElement.load()")}}
  - : Réinitialise l'élément média et redémarre la ressource. Tous les événements en attente sont ignorés. La quantité de données média récupérées est toujours affectée par l'attribut `preload`. Cette méthode peut être utile pour libérer des ressources après la suppression de tout attribut `src` et des descendants d'éléments `source`. Sinon, il est généralement inutile d'utiliser cette méthode, à moins que cela ne soit nécessaire pour réanalyser les enfants de l'élément `source` après des modifications dynamiques.
- {{domxref("HTMLMediaElement.mozCaptureStream()")}} {{non-standard_inline}}
  - : \[enter description]
- {{domxref("HTMLMediaElement.mozCaptureStreamUntilEnded()")}} {{non-standard_inline}}
  - : \[enter description]
- {{domxref("HTMLMediaElement.mozGetMetadata()")}} {{non-standard_inline}}
  - : Renvoie un {{jsxref('Object')}}, qui contient des propriétés représentant les métadonnées de la ressource média en cours de lecture, comme paires `{key: value}`. Une copie distincte des données est renvoyée chaque fois que la méthode est appelée. Cette méthode doit être appelée après le déclenchement de l'évènement [loadedmetadata](/en-US/docs/Web/Events/loadedmetadata).
- {{domxref("HTMLMediaElement.pause()")}}
  - : met en pause la lecture du média.
- {{domxref("HTMLMediaElement.play()")}}
  - : commence la lecture du média.
- {{domxref("HTMLMediaElement.seekToNextFrame()")}} {{non-standard_inline}} {{experimental_inline}}
  - : cherche l'image suivante dans les médias. Cette méthode expérimentale non standard permet de conduire manuellement la lecture et le rendu des médias à une vitesse personnalisée, ou de se déplacer dans le média image par image pour effectuer un filtrage ou d'autres opérations.
- {{domxref("HTMLMediaElement.setMediaKeys()")}} {{experimental_inline}}
  - : Renvoie {{jsxref("Promise")}}. Définit les {{domxref("MediaKeys")}}, clés à utiliser quand le média doit être décrypté pendant la lecture.
- {{domxref("HTMLMediaElement.setSinkId()")}} {{experimental_inline}}
  - : définit l'identifiant du périphérique audio à utiliser en sortie et renvoie un {{jsxref("Promise")}}. Cela fonctionne uniquement quand l'application est autorisée à utiliser l'appareil spécifié.

## Méthodes obsolètes

Ces méthodes sont obsolètes et ne doivent plus être utilisées, même si un navigateur les prend encore en charge.

- {{domxref("HTMLMediaElement.mozLoadFrom()")}} {{non-standard_inline}} {{deprecated_inline}}
  - : Cette méthode, disponible seulement pour les implémentations Mozilla, charge les données d'un autre élément de média. Ce fonctionnement est similaire à `load()` excepté qu'à la place d'exécuter l'algorithme normal de sélection de la ressource, la source est simplement définie sur  `currentSrc` de l'autre élément. Ceci est optimisé pour que cet élément accède à toutes les données mises en cache et en mémoire tampon de l'autre élément ; en fait, les deux éléments partagent les données téléchargées, de sorte que les données téléchargées par l'un ou l'autre élément sont disponibles pour les deux.

## Spécifications

| Spécification                                                                                                            | Statut                               | Commentaire                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------ | --------------------------------------------------------------------------------------------------------- |
| {{SpecName('HTML WHATWG', "the-video-element.html#htmlmediaelement", "HTMLMediaElement")}} | {{Spec2('HTML WHATWG')}}     | Pas de changement de {{SpecName('HTML5 W3C')}}                                                     |
| {{SpecName('HTML5 W3C', "embedded-content-0.html#htmlmediaelement", "HTMLMediaElement")}} | {{Spec2('HTML5 W3C')}}         | Définition initiale.                                                                                      |
| {{SpecName('EME', '#introduction', 'Encrypted Media Extensions')}}                                 | {{Spec2('EME')}}                 | Ajout de {{domxref("MediaKeys")}}, {{domxref("MediaEncryptedEvent")}}, et setMediaKeys. |
| {{SpecName('Media Capture','#htmlmediaelement-extensions','HTMLMediaElement')}}                 | {{Spec2('Media Capture')}} | Ajout de `sinkId`, `setSinkId()` et `captureStream()`.                                                    |

## Compatibilité des navigateurs

{{Compat("api.HTMLMediaElement")}}

## Voir aussi

- References

  - Les éléments HTML {{HTMLElement("video")}} et {{HTMLElement("audio")}}.
  - Les interfaces {{domxref("HTMLVideoElement")}} et {{domxref("HTMLAudioElement")}}, dérivées de `HTMLMediaElement`.

- Articles

  - [Contenu audio et video](/fr/Apprendre/HTML/Multimedia_and_embedding/Contenu_audio_et_video)
  - [Formats pris en charge par `audio` et `video`](/fr/docs/Web/HTML/Formats_pour_audio_video)
  - [Web Audio API](/fr/docs/Web/API/Web_Audio_API)
