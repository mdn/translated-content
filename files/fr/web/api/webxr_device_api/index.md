---
title: L'API de périphérique WebXR
slug: Web/API/WebXR_Device_API
tags:
  - API
  - AR
  - Réalité augmentée
  - Réalité virtuelle
  - VR
  - WebXR
  - WebXR API
translation_of: Web/API/WebXR_Device_API
---
{{DefaultAPISidebar("WebXR Device API")}}

**WebXR** est un ensemble de standards utilisés pour supporter le rendu de scènes 3D vers du matériel conçu pour présenter des mondes virtuels (**Réalité Virtuelle**, ou **VR**), ou pour ajouter des contenus graphiques dans le monde réel, (**Réalité Augmentée**, ou **AR**).

L'**API de périphérique WebXR** implémente le coeur des fonctionnalités WebXR, gère la sélection de périphériques de sortie, affiche la scène 3D sur le périphérique choisi à la fréquence d'images appropriée, et gère les vecteurs de mouvement créés en utilisant les contrôleurs d'entrée.

Les périphèriques compatibles WebXR comprennent les casques 3D entièrement immersifs avec le suivi du mouvement et de l'orientation, les lunettes qui supperposent des contenus graphiques par dessus la scène du monde réel au travers des images, et les smartphones qui augmentent la realité en capturant le monde via une camera et en qui augmentent la scène avec des images générées par ordinateur.

Pour accomplir toutes ces choses, l'API de périphériques WebXR fournit les fonctionnalités clés suivantes:

- Trouver un périphérique de sortie VR ou AR compatible
- Afficher une scène 3D sur le périphérique à la fréquence d'images appropriée
- (Optionellement) refléter la sortie sur un affichage 2D
- Créer des vecteurs représentant les mouvements des commandes d'entrée

Au niveau le plus basique, une scène est présentée en 3D en calculant la perspective à appliquer à la scène dans le but de l'afficher du point de vue de chacun des yeux de l'utilisateur en calculant la position de chaque oeil et en affichant la scène de cette position, regardant dans la même direction que l'utilisateur. Ces deux images sont conçuent à l'intérieur d'une seule mémoire tampon, avec l'image de rendu pour l'oeil gauche dans la partie gauche et l'image de rendu de l'oeil droit dans la partie droite de la mémoire tampon. Une fois que les perspectives des deux yeux sur la scène ont été conçues, la mémoire résultante est délivrée au périphérique WebXR pour être présentée à l'utilisateur via son casque ou tout autre périphérique d'affichage approprié.

## Les concepts et l'utilisation des périphériques WebXR

Alors que l'ancienne [WebVR API](/en-US/docs/Web/API/WebVR_API) avait été conçue uniquement pour le support de la réalité virtuelle (VR), l'API WebXR supporte à la fois la VR et la réalité augmentée (AR) sur le web. Le support pour la fonctionnalité de réalité augmentée est ajouté par le module WebXR Augmented Reality.

Un périphérique XR typique peut avoir aussi bien 3 que 6 degrés de liberté et peut ou non posséder un capteur de position externe.

L'équipement peut également inclure un accéléromètre, un baromètre, ou d'autres capteurs qui sont utilisés pour détecter lorsque l'utilisateur se déplace dans l'espace, tourne sa tête, ou similaires.

## Accéder à l'API WebXR

Pour accéder à l'API WebXR à l'intérieur du contexte d'une fenêtre donnée, utiliser la propriété {{domxref("navigator.xr")}}, qui retourne un objet {{domxref("XRSystem")}} au travers duquel toute l'API de périphérique WebXR Device API est alors exposée.

- {{domxref("navigator.xr")}} {{ReadOnlyInline}}
  - : Cette propriété, ajoutée à l'interface {{domxref("Navigator")}}, retourne l'objet  {{domxref("XRSystem")}} au travers duquel l'API WebXR est exposée. Si cette propriété est missing ou `null`, WebXR n'est pas disponible.

## Les interfaces WebXR

- {{DOMxRef("XRSystem")}}
  - : La propriété {{domxref("Navigator.xr", "navigator.xr")}} retourne l'instance de la fenêtre de {{domxref("XRSystem")}}, qui est le mécanisme par lequel votre code acède à l'API WebXR. En utilisant l'interface `XRSystem`, vous pouvez créer {{domxref("XRSession")}} pour représenter les sessions AR et/ou VR actuelles.
- {{DOMxRef("XRFrame")}}
  - : Lors de la présentation d'une session XR, l'état de tous les objets suivis qui composent la session sont représentés par une `XRFrame`. Pour obtenir un `XRFrame`, appeler la méthode {{domxref("XRSession.requestAnimationFrame", "requestAnimationFrame()")}} de la session, en fournissant un callback qui sera appelé avec le `XRFrame` une fois disponible. Les événements qui communiquent avec des états de suivi utiliseront aussi `XRFrame` pour contenir ces informations.
- {{DOMxRef("XRRenderState")}}
  - : Fournis un ensemble de propriétés configurables qui changent la façon dont les images produites par une `XRSession` sont composées.
- {{DOMxRef("XRSession")}}
  - : Fournit l'interface pour interagir avec le matériel XR. Une fois que la `XRSession` est obtenue depuis {{domxref("XRSystem.requestSession", "navigator.xr.requestSession()")}}, la session peut être utilisée pour vérifier la position et l'orientation du visualiseur, interroger le périphérique pour obtenir des informations sur l'environnement, et présenter le monde virtuel ou augmenté à l'utilisateur.
- {{DOMxRef("XRSpace")}}
  - : `XRSpace` est une classe de base opaque sur laquelle toutes les interfaces de système de coordonnées virtuelles sont basées. Les positions dans WebXR sotn toujours exprimées par rapport à un `XRSpace` particulier au moment où un {{domxref("XRFrame")}} a lieu. Ce système de coordonnées dans l'espace a son origine à une position physique donnée.
- {{DOMxRef("XRReferenceSpace")}}
  - : Une sous classe de {{domxref("XRSpace")}} qui est utilisée pour identifier une relation spatiale en relation avec l'environnement physique de l'utilisateur. Le système de coordonées `XRReferenceSpace` devrait rester inchangé pendant toute la durée de vie du {{domxref("XRSession")}}. Le monde n'a pas de frontières et s'étend infiniment dans toutes les directions.
- {{DOMxRef("XRBoundedReferenceSpace")}}
  - : `XRBoundedReferenceSpace` étend le système de coordonées {{domxref("XRReferenceSpace")}} pour inclure en plus la prise en charge d'un monde aux limites définies. Contrairement à `XRReferenceSpace`, l'origine doit être localisée au niveau du sol (c'est à dire *y* = 0). Les composantes x et z de l'origine sont présumées être localisées au centre ou à proximité du centre de la pièce ou de la surface.
- {{DOMxRef("XRView")}}
  - : Représente une vue unique dans la scène XR pour une image particulière. Chaque XRView correspond à la surface d'affichage vidéo utilisée pour présenter la scène à l'utilisateur. Par exemple, un appareil XR donné peut avoir deux vues: une pour l'œil gauche et une pour la droite. Chaque vue a un décalage utilisé pour déplacer la position de la vue par rapport à la caméra, afin de permettre la création d'effets stéréographiques.
- {{DOMxRef("XRViewport")}}
  - : Décrit un viewport. Un viewport est une partie rectangulaire d'une surface graphique. Dans WebXR, un viewport représente la zone d'une surface de dessin correspondant à un {{domxref ("XRView")}} particulier, tel que la partie de l'image tampon WebGL utilisée pour rendre l'une des perspectives des deux yeux sur la scène.
- {{DOMxRef("XRRigidTransform")}}
  - : Une transformation définie en utilisant une position et une orientation dans le système de coordonnées de l'espace virtuel comme décrit par le {{domxref ("XRSpace")}}.
- {{DOMxRef("XRPose")}}
  - : Décrit une position et une orientation dans l'espace par rapport à un {{domxref ("XRSpace")}}.
- {{DOMxRef("XRViewerPose")}}
  - : Basé sur {{domxref("XRPose")}}, `XRViewerPose` spécifie l'état d'un spectateur de la scène WebXR comme indiqué par le périphérique XR. Un tableau d'objets {{domxref ("XRView")}} est inclus, chacun représentant une perspective de la scène. Par exemple, il faut deux vues pour créer la vue stéréoscopique telle que perçue par la vision humaine: une pour l'œil gauche et une seconde pour l'œil droit. Une vue est légèrement décalée vers la gauche par rapport à la position du visualiseur et l'autre vue est décalée vers la droite de la même distance. La liste de vues peut également être utilisée pour représenter les perspectives de chacun des spectateurs d'une scène, dans un environnement multi-utilisateurs.
- {{DOMxRef("XRInputSource")}}
  - : Représente tout périphérique d'entrée que l'utilisateur peut utiliser pour effectuer des actions ciblées dans le même espace virtuel que le visualiseur. Les sources d'entrée peuvent inclure des dispositifs tels que des contrôleurs manuels, des systèmes de suivi optique et d'autres dispositifs explicitement associés au dispositif XR. Les autres périphériques d'entrée tels que les claviers, les souris et les manettes de jeu ne sont pas présentés comme des instances `XRInputSource`.
- {{DOMxRef("XRWebGLLayer")}}
  - : Une couche qui sert de tampon d'image [WebGL](/en-US/docs/Web/API/WebGL_API) dans lequel la vue d'une scène est rendue. L'utilisation de WebGL pour afficher la scène offre des avantages de performances substantiels grâce à l'accélération graphique.

### Interfaces événementielles

Les interfaces suivantes sont utilisées pour représenter les événements utilisés par l'API WebXR.

- {{domxref("XRInputSourceEvent")}}
  - : Envoyé lorsque l'état d'un {{domxref ("XRInputSource")}} change. Cela peut se produire, par exemple, lorsque la position et/ou l'orientation de l'appareil change, ou lorsque des boutons sont enfoncés ou relâchés.
- {{domxref("XRInputSourcesChangeEvent")}}
  - : Envoyé pour indiquer que l'ensemble des sources d'entrée disponibles a changé pour le {{domxref ("XRSession")}}.
- {{domxref("XRReferenceSpaceEvent")}}
  - : Envoyé lorsque l'état d'un {{domxref ("XRReferenceSpace")}} change.
- {{domxref("XRSessionEvent")}}
  - : Envoyé pour indiquer que l'état d'un {{domxref ("XRSession")}} a changé. Par exemple, si la position et/ou l'orientation

## Extensions de l'API WebGL

L'API WebGL est étendue par la spécification WebXR pour augmenter le contexte WebGL afin de lui permettre d'être utilisée pour afficher des vues dans un périphérique WebXR.

- {{domxref("WebGLRenderingContextBase.makeXRCompatibile","WebGLRenderingContextBase.makeXRCompatibile()")}}
  - : Configure le contexte WebGL pour qu'il soit compatible avec WebXR. Si le contexte n'a pas été créé initialement avec la propriété {{domxref ("WebGLContextAttributes.xrCompatible", "xrCompatible")}} définie sur `true`, vous devez appeler `makeXRCompatible()` avant d'essayer d'utiliser le contexte WebGL pour le rendu WebXR. Renvoie un {{jsxref ("Promise")}} qui se résout une fois que le contexte a été préparé, ou est rejeté si le contexte ne peut pas être configuré pour être utilisé par WebXR.

## Guides et tutoriels

Les guides et didacticiels suivants sont une excellente ressource pour apprendre à comprendre WebXR et les concepts graphiques 3D/VR/AR sous-jacents.

### Les bases

- [Fundamentals of WebXR](/en-US/docs/Web/API/WebXR_Device_API/Fundamentals)
  - : Avant de plonger dans les détails de la création de contenu à l'aide de WebXR, il peut être utile de lire cet aperçu de la technologie, qui comprend des introductions à une terminologie qui peut ne pas vous être familière ou qui peut être utilisée d'une nouvelle manière.
- [Matrix math for the web](/en-US/docs/Web/API/WebGL_API/Matrix_math_for_the_web)
  - : Un guide expliquant comment les matrices peuvent être utilisées sur le Web, y compris pour les transformations CSS et à des fins WebGL, ainsi que pour gérer le positionnement et l'orientation des objets dans des contextes WebXR.
- [WebXR application life cycle](/en-US/docs/Web/API/WebXR_Device_API/Lifecycle)
  - : An overview of the overall life cycle of a WebXR application, from startup to shutdown. This article serves as an introduction to the basics of what's involved in creating a WebXR experience without diving into the code in detail. It's a good way to prepare for the next steps.Un aperçu du cycle de vie global d'une application WebXR, du démarrage à l'arrêt. Cet article sert d'introduction aux bases de ce qu'implique la création d'une expérience WebXR sans plonger dans le code en détail. C'est un bon moyen de se préparer aux prochaines étapes.

### Créer une expérience de réalité mixte

- [Starting up and shutting down a WebXR session](/en-US/docs/Web/API/WebXR_Device_API/Startup_and_shutdown)
  - : Avant de présenter une scène à l'aide d'un appareil XR tel qu'un casque ou des lunettes, vous avez besoin de créer une session WebXR liée à une couche de rendu qui dessine la scène pour la présentation dans chacun des écrans de l'appareil XR pour que l'effet 3D puisse être présenté à l'utilisateur. Ce guide explique comment créer et arrêter des sessions WebXR.
- [Geometry and reference spaces in WebXR](/en-US/docs/Web/API/WebXR_Device_API/Geometry)
  - : Dans ce guide, les concepts requis de la géométrie 3D sont brièvement passés en revue, et les fondamentaux de cette géométrie représentés dans WebXR sont détaillés. Apprenez comment les espaces de référence sont utilisés pour positionner les objets - et le visualiseur - et les différences entre les types d'espace de référence disponibles, ainsi que leurs cas d'utilisation.
- [Spatial tracking in WebXR](/en-US/docs/Web/API/WebXR_Device_API/Spatial_tracking)
  - : Ce guide décrit comment les objets—incluant le corps de l'utilisateur et ses parties—sont situés dans l'espace, et comment leur mouvement et leur orientation les uns par rapport aux autres sont surveillés et gérés au fil du temps. Cet article explique la relation entre les espaces, les poses/attitudes, les spectateurs et les vues.
- [Rendering and the WebXR frame animation callback](/en-US/docs/Web/API/WebXR_Device_API/Rendering)
  - : En commençant par la planification des images à afficher, ce guide explique ensuite comment déterminer le placement des objets dans la vue et comment les afficher dans la mémoire tampon WebGL utilisée pour chacune des deux vues de la scène pour les deux yeux.
- [Viewpoints and viewers: Simulating cameras in WebXR](/en-US/docs/Web/API/WebXR_Device_API/Cameras)
  - :  through a world in which the viewer doesn't really move.WebGL (et donc WebXR) n'a pas vraiment de concept de caméra, qui est le concept traditionnel utilisé pour représenter un point de vue dans les graphiques 3D. Dans cet article, nous voyons comment simuler une caméra et comment créer l'illusion de déplacer un spectateur dans un monde même si ce n'est pas le cas.
- [Lighting a WebXR setting](/en-US/docs/Web/API/WebXR_Device_API/Lighting)
  - : Le rendu WebXR étant basé sur WebGL, les mêmes techniques d'éclairage utilisées pour toute application 3D sont appliquées aux scènes WebXR. Cependant, il existe des problèmes spécifiques à la création de paramètres de réalité augmentée et virtuelle qui doivent être pris en compte lors de l'écriture de votre code d'éclairage. Cet article traite de ces problèmes.
- [Using bounded reference spaces](/en-US/docs/Web/API/WebXR_Device_API/Bounded_reference_spaces)
  - : Dans cet article, nous examinons comment utiliser un espace de référence `bounded-floor` pour définir les limites des endroits où le spectateur peut se déplacer en toute sécurité sans quitter la zone suivie par son matériel XR ou entrer en collision avec un obstacle physique. Sur les appareils qui le prennent en charge, le `bounded-floor` peut être un outil utile dans votre répertoire.

### Rendre interactif

- [Movement, orientation, and motion: A WebXR example](/en-US/docs/Web/API/WebXR_Device_API/Movement_and_motion)
  - : Dans cet exemple et tutoriel, nous utilisons les informations apprises tout au long de la documentation WebXR pour créer une scène contenant un cube et l'utilisateur peut déplacer autour en utilisant à la fois le casque VR, le clavier et la souris.
- [Inputs and input sources](/en-US/docs/Web/API/WebXR_Device_API/Inputs)
  - : Un guide sur les sources d'entrée et comment gérer efficacement les périphériques d'entrée utilisés pour contrôler la session WebXR, et comment recevoir et traiter les entrées utilisateur de ces périphériques.
- [Targeting and hit detection](/en-US/docs/Web/API/Web_Audio_API/Targeting)
  - : Comment utiliser le mode rayon de ciblage et l'espace de rayon de ciblage d'une source d'entrée pour afficher un rayon de ciblage, identifier les surfaces ou les objets ciblés et effectuer des tâches associées.
- [Using WebXR input profiles](/en-US/docs/Web/API/WebXR_Device_API/Input_profiles)
  - : Un guide pour interpréter les données {{Glossary ("JSON")}} fournies par le [WebXR Input Profiles Registry](https://github.com/immersive-web/webxr-input-profiles/tree/master/packages/registry), qui peut être utilisé pour déterminer les options et commandes disponibles sur les périphériques d'entrée de l'utilisateur.
- [Supporting advanced controllers and gamepads in WebXR applications](/en-US/docs/Web/WebXR_Device_API/Gamepads)
  - : WebXR utilise l'objet {{domxref ("Gamepad")}} pour décrire les commandes disponibles sur les périphériques d'entrée complexes (tels que les manettes avec plusieurs boutons et/ou axes) et les périphériques tels que les manettes de jeu. Dans ce guide, découvrez comment faire usage des commandes de ces périphériques.

### Performance and sécurité

- [WebXR performance guide](/en-US/docs/Web/API/WebXR_Device_API/Performance)
  - : Recommandations et astuces pour vous aider à optimiser les performances de votre application WebXR.
- [Permissions and security for WebXR](/en-US/docs/Web/API/WebXR_Device_API/Permissions_and_security)
  - : L'API de périphérique WebXR doit faire face à de nombreux domaines de sécurité, de l'établissement d'une politique de fonctionnalité à l'assurance que l'utilisateur a l'intention d'utiliser la présentation en réalité mixte avant de l'activer.

### Inclure d'autres médias

- [Positional audio in a 3D environment](/en-US/docs/Web/Media/3D_audio)
  - : Dans les environnements 3D, qui peuvent être soit des scènes 3D rendues à l'écran, soit une expérience de réalité mixte expérimentée à l'aide d'un casque, il est important que l'audio soit exécuté de sorte qu'il semble provenir de la direction de sa source. Ce guide explique comment y parvenir.
- [Playing video in a 3D environment](/en-US/docs/Web/Media/3D_video)
  - : Dans ce guide, nous examinons comment lire une vidéo dans une scène 3D. Cette technique peut être utilisée à la fois dans des applications [WebGL](/en-US/docs/Web/API/WebGL_API) standard présentées sur un écran plat d'ordinateur, ou dans un environnement de réalité virtuelle ou augmentée généré par [WebXR](/en-US/docs/Web/API/WebXR_Device_API).

## Spécifications

| Spécification                | Status                   | Commentaire          |
| ---------------------------- | ------------------------ | -------------------- |
| {{SpecName("WebXR")}} | {{Spec2("WebXR")}} | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("api.Navigator.xr")}}

## Voir aussi

- [Graphics on the web](/en-US/docs/Web/Guide/Graphics)
- [Drawing graphics](/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Drawing_graphics)
- [WebGL API](/en-US/docs/Web/API/WebGL_API): Graphiques 2D et 3D sur le web
- [Canvas API](/en-US/docs/Web/API/Canvas_API): Le dessin en 2D pour le web
- [Canvas tutorial](/en-US/docs/Web/API/Canvas_API/Tutorial)
