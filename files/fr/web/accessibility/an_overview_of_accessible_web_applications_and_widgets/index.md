---
title: Aperçu sur le développement des applications Web et des Widgets accessibles
slug: Web/Accessibility/An_overview_of_accessible_web_applications_and_widgets
tags:
  - ARIA
  - Accessisibilité
  - Applications Web
  - Guide
translation_of: Web/Accessibility/An_overview_of_accessible_web_applications_and_widgets
original_slug: >-
  Accessibilité/Aperçu_d_applications_Web_et_de_composants_dynamiques_accessibles
---
Le Web est en perpétuelle évolution. En effet, les sites à contenu statique sont de plus en plus remplacés par des sites dynamiques à l’utilisation assez proche des applications de bureaux. Les sites Web dynamiques utilisent abondamment JavaScript et AJAX. Les designers créent des widgets et des éléments d'interface grâce aux langages du Web notamment HTML, CSS et Javascript. Ce tournant dans l’histoire du Web permet d'améliorer grandement l'expérience utilisateur et l'utilisation sur mobile (responsive). Mais certains utilisateurs peuvent être exclus par manque d'accessibilité. En effet, JavaScript avait la réputation d'être inaccessible aux technologies d'assistance tel que les interpréteurs d’écran. Or, il existe maintenant des techniques pour rendre le Web accessible à une large palette d’utilisateurs.

## Problématique

La plupart des librairies JavaScript proposent des composants côté client qui miment le comportement familier des interfaces de bureaux classiques. Carrousels, barres de menu et d’autres composants peuvent être créés avec JavaScript, CSS et HTML. Mais du moment que les spécifications HTML 4 ne proposaient pas de tags pour décrire sémantiquement ce type de composants, les développeurs se contentaient d'éléments génériques tel que le tag `<div>` ou le tag `<span>`. Or, si d’apparence ces composants ressemblaient parfaitement à ceux spécifiques aux applications de bureau, on ne disposait pas d'informations sémantiques suffisantes pour les rendres accessibles aux technologies d’assistance. L’accès au contenu dynamique d’une page Web peut devenir problématique plus particulièrement pour les utilisateurs qui, pour une raison ou pour une autre ne peuvent pas voir l’écran. Les niveaux de stock, les indicateurs de progression... modifient le DOM de telle sorte que les technologies d'assistance n’y ont pas accès. C'est dans ce contexte que [ARIA](/fr/ARIA) entre en jeu.

_Exemple 1: Code d_’_une tabulation sans informations ARIA. Il n'y a aucune information permettant de décrire la forme du widget et ses fonctions._

```html
<!-- This is a tabs widget. How would you know, looking only at the markup? -->
<ol>
  <li id="ch1Tab">
    <a href="#ch1Panel">Chapitre 1</a>
  </li>
  <li id="ch2Tab">
    <a href="#ch2Panel">Chapitre 2</a>
  </li>
  <li id="quizTab">
    <a href="#quizPanel">Quiz</a>
  </li>
</ol>

<div>
  <div id="ch1Panel">Le contenu du chapitre 1 va ici</div>
  <div id="ch2Panel">Le contenu du chapitre 2 va ici</div>
  <div id="quizPanel">Le contenu du Quiz va ici</div>
</div>
```

_Example 2: Telles qu'elles sont représentées ci-dessous, les tabulations peuvent être reconnues en tant que tel par les utilisateurs. Or aucune information sémantique exploitable par une technologie d_’_assistance n_’_est présente._
![Screenshot of the tabs widget](tabs_widget.png)

## ARIA

[WAI-ARIAI](https://www.w3.org/WAI/standards-guidelines/aria/), les spécifications concernant les applications **internet "riches" et accessibles** sont publiées par l’iniative du [W3C sur l’accessibilité](https://www.w3.org/WAI/), et fournissent la sémantique essentielle au bon fonctionnement des lecteurs d'écran. ARIA permet aux développeurs de décrire en quelque sorte leurs widgets plus finement en ajoutant des attributs spéciaux à leurs balises. Ces spécifications comblent le vide qui existait entre les spécifications du standard HTML et des widgets. ARIA spécifie des rôles et des états permettant de décrire en quelque sorte le fonctionnement des widgets d’interfaces utilisateurs les plus connus.

> **Attention :** Beaucoup d’entre eux ont été ajouté plus tard dans HTML5, et **les développeurs devraient toujours préférer utiliser la balise HTML correspondante plutôt qu’utiliser ARIA**.

Les spécifications ARIA distinguent 3 types d’attributs : rôles, états et propriétés. Les rôles sont utilisés pour les widgets ne faisant pas partie des spécifications HTML 4 comme des sliders, menus, barres, boites de dialogue... Les propriétés sont utilisées pour représenter les caractéristiques de ces widgets, elles décrivent les caractéristiques de ces widgets comme s'il sont déplaçables avec la souris, requièrent un élément ou ont un popup associés à eux. Les états, comme leur nom l'indique, servent à representer l'état actuel de ces éléments en informant les technologies d'assistance s'il est occupé, désactivé, sélectionné ou masqué.

Les attributs ARIA ont été conçus de façon à être interprétés directement par les navigateurs Web et interagir directement avec les APIs d'accessibilité natives des systèmes d'exploitation. Quand les spécifications ARIA sont implementées, les technologies d'assistance peuvent interagir avec les widgets JavaScript personnalisés de la même façon qu'ils interagissent avec leurs équivalents de bureau. Les technologies d'assistance peuvent ainsi fournir une expérience utilisateur homogène.

_Example 3 : L'exemple ci-dessous ajoute des attributs ARIA aux balises déjà présentes._

```html
<!-- Les tabulations sont bien définies  -->
<!-- Des attributs ARIA ont été ajoutés pour lister les différentes tabulations. -->
<ol role="tablist">
  <li id="ch1Tab" role="tab">
    <a href="#ch1Panel">Chapter 1</a>
  </li>
  <li id="ch2Tab" role="tab">
    <a href="#ch2Panel">Chapter 2</a>
  </li>
  <li id="quizTab" role="tab">
    <a href="#quizPanel">Quiz</a>
  </li>
</ol>

<div>
  <!-- Remarquez les attributs role and aria-labelledby servant à décrire les tabulations. -->
  <div id="ch1Panel" role="tabpanel" aria-labelledby="ch1Tab">Chapter 1 content goes here</div>
  <div id="ch2Panel" role="tabpanel" aria-labelledby="ch2Tab">Chapter 2 content goes here</div>
  <div id="quizPanel" role="tabpanel" aria-labelledby="quizTab">Contenu du Quiz;/div>
</div>
```

Les versions récentes des navigateurs majeurs du marché fournissent un support ARIA Firefox, Chrome, Safari, Internet Explorer... De nombreuses technologies d'assistance libres d’accès tel que NVDA et Orca fournissent aussi un support ARIA. Le support de ces spécifications est aussi de plus en plus présent dans les balises des librairies JavaScript : JQuery UI, YUI, Google Closure et Dojo Dijit.

### Les changement représentationnels

Les changements représentationnels incluent l'utilisation du CSS pour changer l'apparence du contenu (mettre une bordure rouge autour de données invalides, changer la couleur de fond d’une case à cocher), le faire apparaitre ou disparaitre.

#### Les Changements d'états

Les attributs pour décrire l’état actuel d'un widget sont fournis, par exemple :

- **`aria-checked`** indique l’état d'une case à cocher ou d'un bouton radio,
- **`aria-disabled`** indique qu’un élément est visible, mais désactivé,
- **`aria-expanded`** indique qu’un élément est déroulé.

La liste n’est pas exhaustive. Pour voir la liste complète, consulter [les spécifications des états et propriétés ARIA)](https://www.w3.org/TR/wai-aria-1.1/#introstates).

Les développeurs devraient se servir des états ARIA pour indiquer l'état des widgets et utiliser les sélecteurs d'attributs CSS pour en modifier l'apparence en fonction des changements d'états plutôt qu'au moyen d'un script qui modifierait des classes sur le widget.

#### Les changements de visibilité

Lorsque la visibilité du contenu est modifiée (c'est-à-dire qu'un élément est masqué ou affiché), les développeurs doivent modifier la valeur de la propriété **`aria-hidden`**. Les techniques décrites ci-dessus doivent être utilisées pour déclarer du CSS permettant de cacher visuellement un élément en utilisant `display:none`.

Les parties pertinentes de l'exemple sont expliquées ci-dessous.Dans cet exemple, le code HTML de l’info-bulle a le format indiqué dans l'exemple 2a. La ligne 9 définit l’état **`aria-hidden`** à `true`.

```html
<div class="text">
    <label id="tp1-label" for="first">First Name:</label>
    <input type="text" id="first" name="first" size="20"
           aria-labelledby="tp1-label"
           aria-describedby="tp1"
           aria-required="false" />
    <div id="tp1" class="tooltip"
         role="tooltip"
         aria-hidden="true">Your first name is optional</div>
</div>
```

Le CSS pour ce balisage est montré dans l'exemple 2b. Notez qu’il n’y a pas de nom de classe personnalisé utilisé, seul le statut de l'attribut **`aria-hidden`** à la ligne 1*.
Exemple 2b. Un attribut basé sur le sélecteur indiquant l'état.*

```css
div.tooltip[aria-hidden="true"] {
  display: none;
  }
```

Le JavaScript à mettre à jour est la propriété **`aria-hidden`** du formulaire montré dans l'exemple 2c. Notez que le script met à jour seulement l'attribut **`aria-hidden`** à la (ligne 2) ; il n'y a pas besoin d'ajouter ou de supprimer un nom de classe personnalisé.

_Exemple 2c. JavaScript pour mettre à jour l'attribut aria-checked._

```js
var showTip = function(el) {
  el.setAttribute('aria-hidden', 'false');
}
```

### Les changements de rôles

ARIA permet aux développeurs de déclarer un rôle sémantique pour un élément qui produirait des sémantiques fausses. Par exemple, quand une liste non ordonnée est utilisée pour créer un menu, {{ HTMLElement("ul") }} devrait avoir un **`role`** de `menubar` et chaque {{ HTMLElement("li") }} devrait avoir un **`role`** de `menuitem`. Le **`role`** d'un élément ne doit pas changer. À la place, il faut supprimer l'élément original et le remplacer par un nouveau **`role`**.

Considérons une zone d’écriture, soit une zone qui permet à l’utilisateur d’éditer une partie de son texte, sans changer de contexte. Cette zone a un mode "vue", dans lequel le texte n’est pas éditable, et un mode "édition", dans lequel le texte peut être modifié. Un développeur peut être tenté d’implémenter le mode "vue" avec un texte en lecture seule via l’élément {{ HTMLElement("input") }} et en configurant le  **`role`**  ARIA à  `button`, puis passe au mode "édition" en rendant l’élément écrivable et en supprimant le **`role`** attribué dans le mode "édition" (puisque les éléments de type {{ HTMLElement("input") }} ont leur propre rôle sémantique).

Ne faites pas ça. À la place, il vaut mieux implémenter le mode "vue" avec un autre élément, comme {{ HTMLElement("div") }} ou {{ HTMLElement("span") }} avec un **`role`** de `button`, et le mode "édition" avec un élément texte {{ HTMLElement("input") }}.

## La navigation au clavier

Souvent, les développeurs négligent la prise en charge du clavier lorsqu’ils créent des widgets personnalisés. Pour être accessible à une large gamme d’utilisateurs, toutes les fonctionnalités d’une application Web ou d’un widget doivent également pouvoir être contrôlées avec le clavier, sans nécessiter de souris. En pratique, cela implique généralement de suivre les conventions prises en charge par des widgets similaires sur le bureau, en tirant pleinement partie des touches <kbd>Tab</kbd>, <kbd>Entrée</kbd>, <kbd>Espace</kbd> et des flèches.

Traditionnellement, la navigation au clavier sur le Web était limitée à la touche Tabulation. Un utilisateur appuie sur <kbd>Tab</kbd> pour faire la mise au point de chaque lien, bouton ou formulaire sur la page dans un ordre linéaire, en utilisant <kbd><kbd>Maj</kbd>+<kbd>Tab</kbd></kbd> pour revenir en arrière. C’est une forme unidimensionnelle de navigation en avant ou en arrière, un élément à la fois. Sur les pages assez denses, un utilisateur clavier doit souvent appuyer plusieurs fois sur la touche <kbd>Tab</kbd> avant d’accéder à la section requise. La mise en œuvre de conventions de clavier de type bureautique sur le Web peut considérablement accélérer la navigation pour de nombreux utilisateurs.

Voici un résumé de la façon dont la navigation au clavier devrait fonctionner dans une application Web compatible ARIA :

- La touche

  <kbd>Tab</kbd>

  devrait fournir le focus au widget dans son ensemble. Par exemple, la tabulation d’une barre de menu devrait mettre l’accent sur le premier élément du menu.

- Les touches fléchées devraient permettre la sélection ou la navigation dans le widget. Par exemple, en utilisant les touches

  <kbd>←</kbd>

  et

  <kbd>→</kbd>

  , vous devez déplacer le focus sur les éléments de menu précédent et suivant.

- Lorsque le widget n’est pas à l’intérieur d’un formulaire, les touches

  <kbd>Entrée</kbd>

  et

  <kbd>Espace</kbd>

  permettent de sélectionner ou d’activer le contrôle.

- Dans un formulaire, la touche

  <kbd>Espace</kbd>

  doit sélectionner ou activer le contrôle, tandis que la touche

  <kbd>Entrée</kbd>

  doit soumettre l’action par défaut du formulaire.

- En cas de doute, imitez le comportement standard du bureau du contrôle que vous créez.

Ainsi, pour l'exemple de widget `Tabs` ci-dessus, l'utilisatrice ou l'utilisateur devrait être capable de naviguer dans le conteneur du widget (l'élément [`<ol>`](/fr/docs/Web/HTML/Element/ol) dans notre balisage) en utilisant les touches <kbd>Tab</kbd> et <kbd>Maj</kbd>+<kbd>Tab</kbd>. Une fois que le focus du clavier est à l'intérieur du conteneur, les touches fléchées devraient permettre à l'utilisatrice ou l'utilisateur de naviguer entre chaque onglet (les éléments [`<li>`](/fr/docs/Web/HTML/Element/li)). De là, les conventions varient d'une plateforme à l'autre. Sous Windows, l'onglet suivant doit être automatiquement activé lorsque l'utilisatrice ou l'utilisateur appuie sur les touches fléchées. Sous Mac OS X, on peut appuyer sur <kbd>Entrée</kbd> ou sur <kbd>Espace</kbd> pour activer l'onglet suivant. Un tutoriel en profondeur pour créer des [widgets navigables grâce à des contrôles JavaScript](/fr/docs/Web/Accessibility/Keyboard-navigable_JavaScript_widgets) comme décrit ici montre comment avoir ce comportement en JS.

Pour plus de détails à propos de ces conventions de navigation au clavier, un aperçu ici [DHTML style guide](http://dev.aol.com/dhtml_style_guide) est disponible. Il délivre un aperçu de la façon dont la navigation au clavier devrait fonctionner pour chaque type de widget pris en charge par ARIA. Le W3C offre également un document utile [ARIA Best Practices](http://www.w3.org/WAI/PF/aria-practices/Overview.html) qui inclut la navigation au clavier et les raccourcis pour une variété de widgets.

## Voir aussi

- [ARIA](/fr/docs/Accessibilit%C3%A9/ARIA)
- [Des applications WEB et la FAQ ARIA](/fr/docs/Accessibilit%C3%A9/ARIA/FAQ_Applications_Web_et_ARIA)
- [WAI-ARIA Spécification](http://www.w3.org/TR/wai-aria/)
- [WAI-ARIA Best Practices](http://www.w3.org/WAI/PF/aria-practices/Overview.html)
- [DHTML Style Guide](http://dev.aol.com/dhtml_style_guide)
