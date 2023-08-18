---
title: Zones live ARIA
slug: Web/Accessibility/ARIA/ARIA_Live_Regions
---

## Introduction

Dans le passé, un changement dans une page web débouchait souvent sur une relecture intégrale, ce qui agaçait souvent l'utilisateur, ou au contraire très peu ou pas de lecture du tout, rendant inaccessible une partie, voire l'ensemble des informations. Jusqu'à récemment, les lecteurs d'écran n'étaient en mesure d'améliorer cela du fait de l'absence d'éléments standardisés pour prévenir le lecteur d'écran d'un changement. Les zones «&nbsp;live&nbsp;» ARIA comblent cette lacune et fournissent des solutions aux lecteurs d'écran afin de savoir si et comment interrompre l'utilisateur lors d'un changement.

## Zones « live » basiques

Le contenu dynamique qui s'actualise sans rechargement de la page est généralement une zone ou un composant d'interface. Les changements de contenu simples, sans interaction possible, devraient être marqués comme des zones «&nbsp;live&nbsp;». Ci-dessous, voici une liste de chaque propriété relative à une zone «&nbsp;live&nbsp;» ARIA et sa description.

- aria-live&nbsp;:
  - : L'attribut `aria-live=VALEUR_POLITESSE` est utilisé pour définir la priorité avec laquelle le lecteur d'écran devrait traiter une mise à jour dans une zone «&nbsp;live&nbsp;» – les valeurs possibles sont&nbsp;: `off`/`polite`/`assertive`. La valeur par défaut est `off`. Cet attribut est de loin le plus important.
- aria-controls&nbsp;:

  - : L'attribut `aria-controls=[LISTE_IDs]` est utilisé pour associer un contrôle avec les zones qu'il contrôle. Les zones sont identifiées comme un `ID` dans un élément {{ HTMLElement("div") }}, et plusieurs zones peuvent être associées à un unique contrôle, en séparant les identifiants des zones par un espace, par exemple&nbsp;: `aria-controls="maZoneID1 maZoneID2"`.

    > **Attention :** Nous ne savons pas si `aria-controls` pour les zones «&nbsp;live&nbsp;» est utilisé dans des technologies d'assistance modernes, et si oui lesquelles. Des recherches sont nécessaires.

Normalement, seul `aria-live="polite"` est utilisé. Toute zone recevant une mise à jour qu'il est important de faire suivre à l'utilisateur, mais pas au point de le déranger dans sa navigation, devrait recevoir cet attribut. Le lecteur d'écran lira les changements dès que l'utilisateur sera inoccupé.

Pour les zones de moindre importance, ou qui seraient perturbantes à cause d'actualisations répétées et rapprochées ou toute autre raison, il est possible de les rendre silencieux avec `aria-live="off"`.

### Cas d'étude simple&nbsp;: une ''combobox'' actualise des informations utiles à l'écran

Un site web spécialisé dans l'ornithologie fournit une liste déroulante avec des noms d'oiseaux. Lorsqu'un oiseau est sélectionné dans la liste, une zone de la page web est actualisée avec les détails concernant la famille d'oiseaux choisie.

`<select size="1" id="bird-selector" aria-controls="bird-info"><option> .... </select>`

```html
<div role="region" id="bird-info" aria-live="polite"></div>
```

Lorsque l'utilisateur sélectionne un nouvel oiseau, l'information est lue. Du fait de la valeur `polite`, le lecteur d'écran attendra une pause de la part de l'utilisateur. Ainsi, descendre dans la liste ne déclenchera pas la lecture pour chaque oiseau visité par l'utilisateur, mais uniquement pour celui qui sera finalement choisi.

## Préférences de rôles pour les zones « live » spécialisées

Dans les cas prédéfinis répandus ci-dessous, il est préférable d'utiliser un des rôles de zone «&nbsp;live&nbsp;» spécifique fourni&nbsp;:

| Rôle        | Description                                                                                                                                                                                                                                             | Compatibilité                                                                                                                                                                                                         |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| log         | Chat, erreur, jeux ou autres types de journalisation                                                                                                                                                                                                    | Pour maximiser la compatibilité, ajouter un `aria-live="polite"` redondant lorsque vous utiliserez ce rôle.                                                                                                           |
| status      | Une barre d'état ou une zone de l'écran qui fournit un état actualisé de quelque chose. Les utilisateurs de lecteur d'écran ont à leur disposition une commande spéciale pour lire l'état courant.                                                      | Pour maximiser la compatibilité, ajouter un `aria-live="polite"` redondant lorsque vous utiliserez ce rôle.                                                                                                           |
| alert       | Message d'erreur ou avertissement souligné à l'écran. Les alertes sont particulièrement importantes pour la validation côté client notifiée à l'utilisateur. (TBD: lien vers un tutoriel sur les formulaires ARIA avec des informations plus complètes) | Pour maximiser la compatibilité, ajouter un `aria-live="assertive"` redondant lorsque vous utiliserez ce rôle. Attention, cette redondance occasionne un problème de double restitution orale dans VoiceOver sur iOS. |
| progressbar | Élément hybride entre un composant d'interface et une zone «&nbsp;Live&nbsp;». Utilisez ce rôle avec les attributs `aria-valuemin`, `aria-valuenow` et `aria-valuemax`. (TBD&nbsp;: Ajouter plus d'informations pour cet élément).                      |                                                                                                                                                                                                                       |
| marquee     | Pour faire défiler un texte, comme pour un téléscripteur ou un afficheur alphanumérique.                                                                                                                                                                |                                                                                                                                                                                                                       |
| timer       | Pour tout type de minuterie ou d'horloge, tel qu'un compte-à-rebours ou un chronomètre.                                                                                                                                                                 |                                                                                                                                                                                                                       |

## Zones « live » avancées

(TBD&nbsp;: Qu'est-ce qui est pris en charge par qui&nbsp;?)

Le support général des zones "Live" a été ajouté à JAWS à partir de la version 10.0. Windows Eyes supporte les zones "Live" depuis la version 8.0 "pour une utilisation en dehors du mode de navigation (Browse Mode) pour Microsoft Internet Explorer et Mozilla Firefox". NVDA a ajouté un support basique pour les zones "Live" pour Mozilla Firefox en 2008 et qui a été amélioré en 2010 et 2014. En 2015 un support basique fut également ajouté à Internet Explorer (MSHTML).

The Paciello Group propose des [informations sur l'état du support des zones "Live"](https://www.paciellogroup.com/blog/2014/03/screen-reader-support-aria-live-regions/)(2014). Paul Jadam s'est intéressé plus particulièrement au [support des attributs aria-atomic and aria-relevant](http://pauljadam.com/demos/aria-atomic-relevant.html).

- aria-atomic :
  - : L'attribut `aria-atomic=BOOLÉEN` est utilisé pour définir si le lecteur d'écran doit ou non présenter la zone « Live » comme un ensemble, même si une partie seulement de la zone est modifiée – Les valeurs possibles sont `false`/`true`. La valeur par défaut est `false`.
- aria-relevant :
  - : L'attribut `aria-relevant=[LISTE_DES_CHANGEMENTS]` est utilisé pour définir quel type de changements est adéquat à une zone «&nbsp;Live&nbsp;» – les valeurs possibles sont `additions` (addition)/`removals` (suppression)/`text` (texte)/`all` (tous). La valeur par défaut est «&nbsp;`additions text`.&nbsp;»
- aria-labelledby :
  - : L'attribut `aria-labelledby=[LISTE_ID]` est utilisé pour associer un ou des libellés à une zone. Le fonctionnement est similaire à celui d'`aria-controls` mais les références d'id pointent vers les libellés associés aux blocs identifiés, et les références multiples sont également séparées par un espace.
- aria-describedby :
  - : L'attribut `aria-describedby=[LISTE_ID]` est utilisé pour associer une ou des descriptions à une zone. Le fonctionnement est similaire à celui d'`aria-controls` mais les références d'identifiant pointent vers les textes descriptifs associés aux blocs identifiés, et les références multiples sont également séparées par un espace.

### Cas d'étude avancé : liste de contacts

Un site de chat voudrait afficher la liste des utilisateurs actuellement connectés. L'affichage de la liste des utilisateurs doit alors refléter l'état de connexion ou de déconnexion des utilisateurs de manière dynamique (sans actualisation de la page).

```html
<ul id="roster" aria-live="polite" aria-relevant="additions removals">
  <!-- utilisez JavaScript ici pour ajouter/supprimer des utilisateurs-->
</ul>
```

#### Détails des propriétés « live » d'ARIA

- L'attribut `aria-live="polite"` indique au lecteur d'écran qu'il doit attendre que l'utilisateur soit inactif avant de lui présenter une mise à jour. C'est la valeur la plus communément utilisée, car interrompre l'utilisateur avec la valeur `assertive` briserait son flux de lecture.
- L'attribut `aria-atomic` n'est pas défini (`false` par défaut), ainsi seuls les utilisateurs ajoutés ou supprimés devraient être lus et non l'intégralité de la liste, à chaque mise à jour.
- L'attribut `aria-relevant="additions removals"` assure à la fois que les utilisateurs ajoutés et supprimés de la liste seront lus.

TBD&nbsp;: Cas d'étude(s) réel(s) de l'attribut aria-atomic="true".
