---
title: Qu'est-ce que l'accessibilité ?
slug: Learn/Common_questions/Design_and_accessibility/What_is_accessibility
tags:
  - Accessibility
  - Beginner
  - Intro
  - NeedsActiveLearning
  - Web
translation_of: Learn/Common_questions/What_is_accessibility
original_slug: Learn/Common_questions/What_is_accessibility
---

Cet article aborde les concepts de base qui forment l'accessibilité pour le Web.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Prérequis&nbsp;:</th>
      <td>Aucun.</td>
    </tr>
    <tr>
      <th scope="row">Objectifs&nbsp;:</th>
      <td>
        Comprendre ce qu'est l'accessibilité et pourquoi elle est importante.
      </td>
    </tr>
  </tbody>
</table>

Que ce soit en raison de limitations physiques ou techniques, il peut arriver que les visiteurs de votre site web ne peuvent l'utiliser comme vous le pensiez. Dans cet article, vous trouverez quelques principes généraux à propos de l'accessibilité, ainsi que quelques règles que nous expliquerons.

## Pédagogie active

_Il n'y a, pour le moment, pas de matériau pour la pédagogie active. [Cependant, vous pouvez contribuer](/fr/docs/MDN/D%C3%A9buter_sur_MDN)._

## Aller plus loin

### Principes généraux de l'accessibilité

En premier lieu, on associe parfois l'accessibilité avec des limitations péjoratives. Ce bâtiment doit être accessible et doit donc respecter ces règlements pour les largeurs de portes, la taille des toilettes, l'emplacement de l'ascenseur.

Cette approche est plutôt limitée. Dans tous les cas, l'accessibilité permet d'atteindre plus de personnes, éventuellement de servir plus de clients. Comment font les Brésiliens pour utiliser un site uniquement en anglais ou français ? Est-ce que les personnes qui possèdent des smartphones peuvent naviguer sur des sites encombrés, conçus pour être affichés uniquement sur de grands écrans et avec une bande passante important ? Ces personnes passeront leur chemin. De façon général, _nous devons penser nos produits et nos créations avec le point de vue de l'ensemble du public ou des clients et nous devons nous adapter par rapport à ce point de vue, d'où la raison d'être de l'accessibilité_.

### L'accessibilité sur le Web

Dans le cadre spécifique qu'est le Web, l'accessibilité signifie que n'importe qui peut accéder au contenu que vous publiez en ligne, quel que soit la situation de handicap, l'emplacement géographique, les limitations techniques ou autres.

Prenons l'exemple de la vidéo :

- Déficience auditive
  - : Comment une personne déficiente auditivement peut-elle profiter de la vidéo ? Il est nécessaire de fournir des sous-titres, voire mieux, une transcription écrite complète. Assurez-vous également que les personnes puissent ajuster le volume à leur convenance.
- Déficience visuelle
  - : Ici aussi, il est préférable de fournir une transcription que l'utilisateur pourra consulter sans lancer la vidéo, ainsi qu'une audio-description décrivant, en voix off, ce qui se passe dans la vidéo.
- Mise en pause
  - : Certains utilisateurs peuvent avoir du mal à comprendre ce qui est dit par quelqu'un dans la vidéo. La fonctionnalité de mise en pause peut leur permettre de lire les sous-titres ou de comprendre l'information.
- Utilisation du clavier
  - : Laissez à l'utilisateur la possibilité de lancer la vidéo mais aussi de la mettre en pause grâce à des touches du clavier.

#### Les bases de l'accessibilité web

Afin qu'un page web soit un minimum accessible, il faut :

- Fournir des alternatives textuelles pour toutes les images du site qui sont utilisées pour porter du sens. Cela permettra aux personnes atteint d'une déficience visuelle d'utiliser un logiciel pour lire cette description ou aux personnes avec des connexions erratiques de récupérer le texte et de l'afficher avant l'image.
- S'assurer que tous les utilisateurs peuvent manipuler les interfaces graphiques (par exemple les menus déroulants) avec le clavier (par exemple avec la touche tabulation ou la touche Entrée).
- Fournir un attribut qui définisse le langage utilisé pour le contenu de la page afin qu'un logiciel lecteur d'écran puisse lire le texte correctement.
- S'assurer que tous les utilisateurs puissent naviguer entre les différents éléments d'une page avec le clavier sans être « piégés » dans un endroit de la page (c'est généralement la touche tabulation qui est utilisée pour ce type d'actions)

Ces règles ne forment qu'un minimum nécessaire pour l'accessibilité.

### Les défendeurs de l'accessibilité

Depuis 1999, le {{Glossary("W3C")}} possède un groupe de travail appelé {{Glossary("WAI","Web Accessibility Initiative")}} (_WAI_ ou Initiative pour l'Accessibilité du Web en français) qui promeut l'accessibilité grâce à des recommandations, des ressources d'aide et des matériaux internationaux sur l'accessibilité.

## Plus de détails

Vous pouvez vous référer à :

- [L'article Wikipédia](https://fr.wikipedia.org/wiki/Accessibilit%C3%A9) sur l'accessibilité
- [Le site WAI (le projet W3C's Web Accessibility Initiative) (en anglais)](http://www.w3.org/WAI/)

## Prochaines étapes

L'accessibilité peut avoir un impact tant sur le design d'un site que sur sa structure technique.

- Pour le design, nous vous conseillons de lire [Concevoir un site pour tous les types d'utilisateurs](/fr/Apprendre/Concevoir_site_tous_types_utilisateurs).
- Pour l'aspect technique, vous pourriez commencer par voir comment [intégrer des images dans des pages web](/fr/Apprendre/HTML/Howto/Add_images_to_a_webpage).
