---
title: "Guide des types et formats de médias : contenu image, audio et vidéo"
slug: Web/Media/Formats
---

{{QuickLinksWithSubpages("/fr/docs/Web/Media")}}

Depuis presque ses débuts, le web a inclus un support pour une certaine forme de présentation visuelle des médias. À l'origine, ces capacités étaient limitées et ont été développées de manière organique, les différents navigateurs trouvant leurs propres solutions aux problèmes liés à l'inclusion d'images fixes et vidéo sur le web. Le web moderne dispose de puissantes fonctionnalités pour prendre en charge la présentation et la manipulation des médias, avec plusieurs API liées aux médias prenant en charge divers types de contenu. En général, les formats de médias pris en charge par un navigateur sont entièrement laissés à la discrétion des créateurs du navigateur, ce qui peut compliquer le travail d'un développeur web.

Ce guide donne un aperçu des types de fichiers médias, {{Glossary("codec", "codecs")}}, et des algorithmes qui peuvent comprendre des médias utilisés sur le web. Il fournit également des informations sur la prise en charge des navigateurs pour diverses combinaisons de ceux-ci, et des suggestions pour la hiérarchisation des formats, ainsi que sur les formats qui excellent pour des types de contenu spécifiques.

## Références

### Images

- [Guide des types et formats de fichiers d'images](/fr/docs/Web/Media/Formats/Types_des_images)
  - : Couvre la prise en charge des types de fichiers d'images et des formats de contenu dans les principaux navigateurs web, et fournit des informations de base sur chaque type : avantages, limites et cas d'utilisation intéressant les concepteurs et les développeurs web.
- [Types de fichiers d'images pour les concepteurs de sites web](/fr/docs/Web/Media/Formats/Images_for_web_designers)
  - : Des informations fondamentales sur les différents types de fichiers d'images qui peuvent être utiles aux concepteurs de sites web, y compris les meilleures pratiques et les cas d'utilisation pour chaque type, et des lignes directrices pour choisir le bon format de fichier d'image pour des types de contenu spécifiques.

### Types de fichiers médias et codecs

- [Conteneurs de médias (types de fichiers)](/fr/docs/Web/Media/Formats/Containers)
  - : Un guide des types de fichiers qui contiennent des données médiatiques. Certains sont spécifiques à l'audio, tandis que d'autres peuvent être utilisés pour du contenu audio ou audiovisuel combiné, comme les films. Comprend des aperçus de chacun des types de fichiers pris en charge par les principaux navigateurs web, ainsi que des informations sur la prise en charge des navigateurs et les fonctionnalités prises en charge.
- [Guide des codecs audio pour le Web](/fr/docs/Web/Media/Formats/Audio_codecs)
  - : Un guide des codecs audio autorisés par les conteneurs de médias communs, ainsi que par les principaux navigateurs. Comprend les avantages, les limites, les principales spécifications et capacités, et des cas d'utilisation. Il couvre également le support de chaque navigateur pour l'utilisation du codec dans des conteneurs donnés.
- [Guide des codecs vidéo du Web](/fr/docs/Web/Media/Formats/Video_codecs)
  - : Cet article fournit des informations de base sur les codecs vidéo pris en charge par les principaux navigateurs, ainsi que sur certains codecs qui ne sont pas couramment pris en charge mais que vous pourriez quand même rencontrer. Il couvre également les capacités des codecs, leurs avantages et leurs limites, ainsi que les niveaux de prise en charge et les restrictions des navigateurs.
- [Le paramètre "codecs" dans les types de médias courants](/fr/docs/Web/Media/Formats/codecs_parameter)
  - : Lorsque vous spécifiez le type MIME décrivant un format de média, vous pouvez fournir des détails en utilisant le paramètre `codecs` dans le cadre de la chaîne de type. Ce guide décrit le format et les valeurs possibles du paramètre `codecs` pour les types de médias les plus courants.
- [Codecs utilisés par WebRTC](/fr/docs/Web/Media/Formats/WebRTC_codecs)
  - : [WebRTC](/fr/docs/Web/API/WebRTC_API) n'utilise pas de conteneur, mais diffuse le média encodé lui-même de pair à pair en utilisant des objets {{domxref("MediaStreamTrack")}} pour représenter chaque piste audio ou vidéo. Ce guide présente les codecs couramment utilisés avec le WebRTC.

## Guides

### Concepts

- [Concepts de l'audio numérique](/fr/docs/Web/Media/Formats/Audio_concepts)
  - : Une introduction à la manière dont le son est converti en forme numérique et stocké pour être utilisé par les ordinateurs. Il explique les concepts de base sur la façon dont l'audio est échantillonné, ainsi que des concepts tels que le taux d'échantillonnage, les trames audio et la compression audio.
- [Concepts de la vidéo numérique](/fr/docs/Web/Media/Formats/Video_concepts)
  - : Un guide des concepts fondamentaux liés à la vidéo numérique telle qu'elle est utilisée sur le web, y compris des notions de base sur les formats de couleur, le sous-échantillonnage chromatique, la façon dont la perception humaine influence le codage vidéo, etc.

### Tutoriels et modes d'emploi

- [Apprendre : Contenu vidéo et audio](/fr/docs/Apprendre/HTML/Multimedia_and_embedding/Contenu_audio_et_video)
  - : Ce tutoriel présente et détaille l'utilisation des médias sur le web.
- [Traiter les questions de soutien aux médias dans le contenu web](/fr/docs/Web/Media/Formats/Questions_sur_le_soutien)
  - : Dans ce guide, nous examinons comment construire un contenu web qui maximise la qualité ou les performances tout en offrant la compatibilité la plus large possible, en choisissant judicieusement les formats des médias et en proposant des solutions de repli et des formats alternatifs là où cela serait utile.

## Autres sujets

- [Capacités des médias API](/fr/docs/Web/API/Media_Capabilities_API)
  - : L'API des capacités média vous permet de découvrir les capacités de codage et de décodage de l'appareil sur lequel votre application ou votre site fonctionne. Cela vous permet de prendre des décisions en temps réel sur les formats à utiliser et le moment de leur utilisation.
