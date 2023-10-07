---
title: Traiter les questions de soutien aux médias dans le contenu web
slug: Web/Media/Formats/Support_issues
---

{{QuickLinksWithSubpages("/fr/docs/Web/Media")}}

L'une des réalités du travail avec la présentation et la manipulation audio et vidéo sur le web est qu'il existe un certain nombre de formats de médias disponibles, de degrés de popularité variables et avec des capacités variées. La possibilité de choisir est bonne pour l'utilisateur, dans la mesure où il peut choisir le format qui répond le mieux à ses besoins. Il y a cependant un inconvénient : comme il y a un grand choix, avec tant de types de licences et de principes de conception différents, chaque développeur de navigateur web est laissé à lui-même pour décider des types de fichiers média et des codecs à prendre en charge.

Cela impose une charge légère, mais raisonnablement facile à surmonter, au développeur web : gérer correctement la situation lorsque le navigateur de l'utilisateur ne peut pas gérer un type de média particulier. Ce guide couvre les techniques que vous pouvez utiliser pour développer des contenus web qui répondent à vos besoins médiatiques tout en offrant l'expérience la plus largement compatible possible. Les sujets que nous examinerons sont les solutions de secours, les formats de base des médias et les pratiques de traitement des erreurs qui permettront à votre contenu de fonctionner dans le plus grand nombre de situations possible.

## Utilisation de cadres d'affiches

Un **cadre d'affiche** est une image fixe représentative du contenu d'une vidéo. Il peut s'agir simplement de la première image de la vidéo ; cependant, dans de nombreux cas, la première image est vide, ou ne contient rien d'autre que le logo d'une entreprise, ou une autre image qui ne donne au lecteur aucun contexte pour le contenu de la vidéo.

Une bonne image d'affiche est soit représentative du contenu de la vidéo, soit une image qui ne provient même pas de la vidéo elle-même mais qui contient des images et/ou du texte qui donnent au lecteur une idée utile du contenu de la vidéo. Dans le cas d'un film d'action, par exemple, le cadre de l'affiche peut être une image exemplaire de l'une des scènes les plus connues du film.

Un concept similaire peut être appliqué aux images fixes ; si une image que vous souhaitez présenter est très grande et peut prendre du temps à télécharger (en particulier pour les appareils ou les connexions plus lents), vous pouvez proposer une version à plus faible résolution ou une version alternative qui sera affichée jusqu'à ce que la version en qualité intégrale soit disponible pour être affichée.

Nous examinerons ces deux scénarios et la manière de les mettre en œuvre.

### Images d'affiches pour la vidéo

### Images progressives

Les images — qu'elles soient intégrés à l'aide de {{HTMLElement("img")}} ou de {{HTMLElement("image")}} — ne supportent pas un concept similaire aux cadres. Cependant, il existe des moyens de présenter une image de faible qualité pendant qu'elle est encore en cours de chargement. Il faut pour cela créer vos images en utilisant des formats progressifs, tels que le progressif {{Glossary("JPEG")}} ou l'entrelacé {{Glossary("PNG")}}.

Une fois que votre image a été convertie en forme progressive, vous pouvez simplement l'utiliser comme d'habitude.

```html
<img
  src="/images/stafff-photo-huge-progressive.jpg"
  alt="Photo du personnel, prise en janvier 1972" />
```

Lors de l'utilisation d'une image progressive, les données sont stockées de telle sorte que le navigateur est en mesure de rendre une représentation de faible qualité de l'image dès que possible, puis de mettre à jour l'image au fur et à mesure de son chargement — ou une fois celui-ci terminé — pour la présenter en pleine qualité.

> **Note :** Les images progressives (ou entrelacées) sont par nature légèrement plus grandes que les versions non progressives des mêmes images. C'est à vous de déterminer si l'entrelacement sera bénéfique pour vos utilisateurs.

## Vérification de la compatibilité en JavaScript

{{domxref("HTMLMediaElement.canPlayType")}} et {{domxref("MediaSource.isTypeSupported")}}...
