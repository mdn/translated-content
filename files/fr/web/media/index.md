---
title: Technologies médias sur le web
short-title: Médias
slug: Web/Media
l10n:
  sourceCommit: 58cc81b21f777d745877ec1430df8ba2852ff411
---

Au fil des ans, la capacité du Web à présenter, créer et gérer des fichiers audio, vidéo et autres médias s'est perfectionnée. Il existe désormais un grand nombre d'API, ainsi que des éléments HTML, des interfaces DOM et d'autres fonctionnalités qui permettent de travailler avec les médias de manière passionnante et immersive. Cet article répertorie des guides et des références pour diverses fonctionnalités que vous pouvez utiliser lorsque vous intégrez des médias dans vos projets.

## Guides

Le [guides des médias](/fr/docs/Web/Media/Guides) sont des ressources qui vous aident à comprendre, transformer et optimiser les médias sur le Web, notamment les fichiers audio, vidéo et images, à l'aide des technologies Web modernes.

- [Intégration audio et vidéo](/fr/docs/Web/Media/Guides/Audio_and_video_delivery)
  - : Nous pouvons diffuser du contenu audio et vidéo sur le Web de différentes manières, allant des fichiers multimédias «&nbsp;statiques&nbsp;» aux flux adaptatifs en direct. Cet article se veut un point de départ pour explorer les différents mécanismes de diffusion des médias sur le Web et leur compatibilité avec les navigateurs courants.
- [Manipulation audio et vidéo](/fr/docs/Web/Media/Guides/Audio_and_video_manipulation)
  - : Le fait de disposer d'audio et de vidéo natifs dans le navigateur signifie que nous pouvons utiliser ces flux de données avec des technologies telles que {{htmlelement("canvas")}}, [WebGL](/fr/docs/Web/API/WebGL_API) ou l'[API Web Audio](/fr/docs/Web/API/Web_Audio_API) pour modifier directement l'audio et la vidéo, par exemple en ajoutant des effets de réverbération/compression à l'audio ou des filtres gris/sépia à la vidéo.
- [Guide de lecture automatique pour les API média et Web Audio](/fr/docs/Web/Media/Guides/Autoplay)
  - : La lecture automatique inattendue de fichiers multimédias ou audio peut être une surprise désagréable pour les utilisateur·ice·s. Bien que la lecture automatique ait son utilité, elle doit être utilisée avec précaution. Afin de permettre aux utilisateur·ice·s de contrôler cette fonctionnalité, de nombreux navigateurs proposent désormais des options de blocage de la lecture automatique. Cet article est un guide sur la lecture automatique, avec des conseils sur quand et comment l'utiliser et comment travailler avec les navigateurs pour gérer le blocage de la lecture automatique de manière élégante.
- [Utiliser DASH avec les vidéos en HTML](/fr/docs/Web/API/Media_Source_Extensions_API/DASH_Adaptive_Streaming)
  - : Le protocole DASH (<i lang="en">Dynamic Adaptive Streaming over HTTP</i> ou Diffusion adaptative dynamique sur HTTP, en français) est un protocole de streaming adaptatif. Cela signifie qu'il permet à un flux vidéo de basculer entre différents débits en fonction des performances du réseau, afin de garantir la continuité de la lecture vidéo.
- [Diffusion audio et vidéo](/fr/docs/Web/Media/Guides/Streaming)
  - : Un guide qui explique comment diffuser du contenu audio et vidéo, ainsi que les techniques et technologies que vous pouvez utiliser pour garantir la meilleure qualité et/ou performance possible de vos diffusions.
- [Guide des types et formats de médias&nbsp;: contenu image, audio et vidéo](/fr/docs/Web/Media/Guides/Formats)
  - : Guide des types de fichiers et codecs disponibles pour les images, les fichiers audio et les vidéos sur le Web. Il comprend des recommandations sur les formats à utiliser pour chaque type de contenu, les meilleures pratiques, notamment comment fournir des solutions de secours et hiérarchiser les types de médias, ainsi que des informations générales sur la prise en charge par les navigateurs de chaque conteneur multimédia et codec.
- [Utilisation d'images dans HTML](/fr/docs/Web/Media/Guides/Images)
  - : Guide pour ajouter des images à des sites Web réactifs, accessibles et performants.

## Références

### HTML

Les éléments HTML suivants sont utilisés pour inclure des médias dans une page.

- {{HTMLElement("audio")}}
  - : L'élément `<audio>` est utilisé pour lire l'audio. Il peut être utilisé de manière invisible comme destination pour des supports plus complexes, ou avec des contrôles visibles permettant à l'utilisateur de contrôler la lecture des fichiers audio. Accessible depuis JavaScript en tant qu'objets {{domxref("HTMLAudioElement")}}.
- {{HTMLElement("video")}}
  - : L'élément `<video>` est utilisé pour lire du contenu vidéo. Il peut être utilisé pour présenter des fichiers vidéo ou comme destination pour le contenu vidéo en streaming. `<video>` Peut également être utilisé comme un moyen de relier des API média à d'autres technologies HTML et DOM, notamment {{HTMLElement("canvas")}} (pour la capture et la manipulation d'images), par exemple. Il est accessible depuis JavaScript en tant qu'objets {{domxref("HTMLVideoElement")}}.
- {{HTMLElement("track")}}
  - : L'élément HTML `<track>` peut être placé dans un élément {{HTMLElement("audio")}} ou {{HTMLElement("video")}} afin de fournir une référence à une piste de sous-titres ou de légende au format [WebVTT](/fr/docs/Web/API/WebVTT_API) à utiliser lors de la lecture des médias. Accessible depuis JavaScript en tant qu'objets {{domxref("HTMLTrackElement")}}.
- {{HTMLElement("source")}}
  - : L'élément HTML `<source>` est utilisé dans un élément {{HTMLElement("audio")}} ou {{HTMLElement("video")}} pour spécifier les médias source à présenter. Plusieurs sources peuvent être utilisées pour fournir le média dans différents formats, tailles ou résolutions. Accessible depuis JavaScript en tant qu'objets {{domxref("HTMLSourceElement")}}.

### API

- [API Media Capabilities](/fr/docs/Web/API/Media_Capabilities_API)
  - : L'API Media Capabilities vous permet de déterminer les capacités d'encodage et de décodage de l'appareil sur lequel votre application ou votre site fonctionne. Vous pouvez ainsi décider en temps réel quels formats utiliser et à quel moment.
- [API Media Capture et Streams](/fr/docs/Web/API/Media_Capture_and_Streams_API)
  - : Référence pour l'API qui permet de diffuser, d'enregistrer et de manipuler des médias à la fois localement et sur un réseau. Cela inclut l'utilisation de caméras et de microphones locaux pour capturer des vidéos, des fichiers audio et des images fixes.
- [API Media Session](/fr/docs/Web/API/Media_Session_API)
  - : L'API Media Session permet de personnaliser les notifications multimédias. Pour ce faire, elle fournit des métadonnées qui seront affichées par l'agent utilisateur pour les médias lus par votre application Web. Elle fournit également des gestionnaires d'actions que le navigateur peut utiliser pour accéder aux touches multimédias de la plateforme, telles que les touches matérielles des claviers, des casques et des télécommandes, ainsi que les touches logicielles situées dans les zones de notification et sur les écrans de verrouillage des appareils mobiles.
- [API d'enregistrement MediaStream](/fr/docs/Web/API/MediaStream_Recording_API)
  - : L'API d'enregistrement MediaStream vous permet de capturer des flux multimédias afin de traiter ou filtrer les données, ou encore de les enregistrer sur disque.
- [API Web Audio](/fr/docs/Web/API/Web_Audio_API)
  - : L'API Web Audio vous permet de générer, filtrer et manipuler des données audio en temps réel et sur des enregistrements, puis d'envoyer ces données audio vers une destination telle qu'un élément `<audio>`, un flux multimédia ou un disque.
- [WebRTC](/fr/docs/Web/API/WebRTC_API)
  - : WebRTC (<i lang="en">Web Real-Time Communication</i> ou Communication en temps réel sur le Web, en français) permet de diffuser en direct des flux audio et vidéo, ainsi que de transférer des données arbitraires, entre deux pairs sur Internet, sans passer par un intermédiaire.

## Sujets connexes

Sujets connexes susceptibles de vous intéresser, car ils peuvent être utilisés de manière intéressante en tandem avec les API multimédias.

- [Multimédia accessible](/fr/docs/Learn_web_development/Core/Accessibility/Multimedia)
  - : Dans ce guide, nous abordons les différentes façons dont les concepteurs et développeurs Web peuvent créer du contenu accessible aux personnes ayant des capacités différentes. Cela va de l'utilisation de l'attribut [`alt`](/fr/docs/Web/HTML/Reference/Elements/img#alt) sur les éléments {{HTMLElement("img")}} aux légendes, en passant par le balisage des médias pour les lecteurs d'écran.
- [API Canvas](/fr/docs/Web/API/Canvas_API)
  - : L'API Canvas vous permet de dessiner dans un {{HTMLElement("canvas")}}, de manipuler et de modifier le contenu d'une image. Elle peut être utilisée avec les médias de nombreuses façons, notamment en définissant un élément `<canvas>` comme destination pour la lecture vidéo ou la capture par caméra, afin de pouvoir capturer et manipuler des images vidéo.
- [WebGL](/fr/docs/Web/API/WebGL_API)
  - : WebGL fournit une API compatible OpenGL ES en plus de l'API Canvas existante, ce qui permet de réaliser des graphiques 3D puissants sur le Web. Grâce à un canevas, cela peut être utilisé pour ajouter des images 3D à du contenu multimédia.
- [WebXR](/fr/docs/Web/API/WebXR_Device_API)
  - : WebXR, qui a remplacé l'API WebVR désormais obsolète, est une technologie qui prend en charge la création de contenu en réalité virtuelle (VR) et en réalité augmentée (AR). Le contenu en réalité mixte peut ensuite être affiché sur l'écran de l'appareil ou à l'aide de lunettes ou d'un casque.
- [WebVR](/fr/docs/Web/API/WebVR_API) {{deprecated_inline}}
  - : L'API Web Virtual Reality prend en charge les appareils de réalité virtuelle (VR) tels que l'Oculus Rift ou le HTC Vive, permettant aux développeurs de traduire la position et les mouvements de l'utilisateur en mouvements dans une scène 3D qui est ensuite présentée sur l'appareil. WebVR a été remplacé par WebXR et devrait bientôt être supprimé des navigateurs.
- [Fondamentaux pour la spatialisation avec Web Audio](/fr/docs/Web/API/Web_Audio_API/Web_audio_spatialization_basics)
  - : Dans les environnements 3D, qu'il s'agisse de scènes 3D rendues à l'écran ou d'une expérience de réalité mixte vécue à l'aide d'un casque, il est important que le son soit restitué de manière à donner l'impression qu'il provient de la direction de sa source. Ce guide explique comment y parvenir.
