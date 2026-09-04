---
title: Aperçu sur le développement des applications Web et des Widgets accessibles
short-title: Applications et widgets Web accessibles
slug: Web/Accessibility/Guides/Accessible_web_applications_and_widgets
original_slug: Web/Accessibility/An_overview_of_accessible_web_applications_and_widgets
l10n:
  sourceCommit: c1564acf160ef4b320fb7b89ab65211b9c50cf1b
---

La plupart des bibliothèques JavaScript proposent une collection de widgets côté client qui imitent le comportement des interfaces de bureau classiques. Des curseurs, barres de menus, listes de fichiers, etc., peuvent être créés avec JavaScript, CSS et HTML. Comme la spécification HTML4 ne fournit pas de balises intégrées pour décrire sémantiquement ces widgets, les développeur·euse·s utilisent généralement des éléments HTML génériques comme {{HTMLElement('div')}} et {{HTMLElement('span')}}. Cela donne un widget visuellement similaire à son équivalent de bureau, mais il manque souvent d'informations sémantiques dans le balisage pour être utilisable par une technologie d'assistance.

## Problématique

Le contenu dynamique d'une page web peut être particulièrement problématique pour les utilisateur·ice·s qui, pour diverses raisons, ne peuvent pas voir l'écran. Les flux boursiers, les mises à jour en direct de Twitter, les indicateurs de progression, etc., modifient le DOM d'une façon que les technologies d'assistance ne détectent pas toujours. C'est là qu'intervient l'[ARIA](/fr/docs/Web/Accessibility/ARIA).

_Exemple 1&nbsp;: Balisage d'un widget d'onglets sans étiquetage ARIA. Il n'y a aucune information dans le code pour décrire la forme et la fonction du widget._

```html
<!-- Ceci est un widget d'onglets. Comment le sauriez-vous en regardant uniquement le balisage ? -->
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

_Exemple 2&nbsp;: Voici comment le widget d'onglets peut être stylisé visuellement. Les utilisateur·ice·s peuvent le reconnaître à l'œil, mais il n'y a aucune sémantique exploitable par une technologie d'assistance._

![Capture d'écran du widget d'onglets](tabs_widget.png)

## ARIA

**ARIA** permet aux développeur·euse·s de décrire leurs widgets plus précisément en ajoutant des attributs spéciaux au balisage. Conçue pour combler le fossé entre les balises HTML standard et les contrôles de type bureau des applications web dynamiques, ARIA fournit des rôles et des états qui décrivent le comportement de la plupart des widgets d'interface utilisateur connus.

> [!WARNING]
> Beaucoup de ces fonctionnalités ont été ajoutées lorsque les navigateurs ne prenaient pas encore en charge les fonctionnalités HTML modernes. **Les développeur·euse·s doivent toujours privilégier l'utilisation de l'élément HTML sémantique approprié plutôt que d'utiliser ARIA**.

La spécification ARIA comprend trois types d'attributs&nbsp;: rôles, états et propriétés. Les rôles décrivent des widgets absents de HTML 4, comme les curseurs, barres de menus, onglets et boîtes de dialogue. Les propriétés décrivent les caractéristiques de ces widgets, par exemple s'ils sont déplaçables, s'ils ont un élément requis ou un menu contextuel. Les états décrivent l'état d'interaction d'un élément, indiquant à la technologie d'assistance s'il est occupé, désactivé, sélectionné ou masqué.

Les attributs ARIA sont interprétés automatiquement par le navigateur et traduits vers les API d'accessibilité du système d'exploitation. Un élément avec `role="slider"` sera contrôlé comme un curseur natif du système.

Cela garantit une expérience utilisateur plus cohérente que dans la génération précédente d'applications web, car les utilisateur·ice·s de technologies d'assistance peuvent appliquer leurs connaissances des applications de bureau aux applications web.

_Exemple 3&nbsp;: Balisage du widget d'onglets avec les attributs ARIA ajoutés._

```html
<!-- Les tabulations sont bien définies  -->
<!-- Des attributs ARIA ont été ajoutés pour lister les différentes tabulations. -->
<ol role="tablist">
  <li id="ch1Tab" role="tab">
    <a href="#ch1Panel">Chapitre 1</a>
  </li>
  <li id="ch2Tab" role="tab">
    <a href="#ch2Panel">Chapitre 2</a>
  </li>
  <li id="quizTab" role="tab">
    <a href="#quizPanel">Quiz</a>
  </li>
</ol>

<div>
  <!-- Remarquez les attributs role and aria-labelledby servant à décrire les tabulations. -->
  <div id="ch1Panel" role="tabpanel" aria-labelledby="ch1Tab">
    Contenu du Chapitre 1
  </div>
  <div id="ch2Panel" role="tabpanel" aria-labelledby="ch2Tab">
    Contenu du Chapitre 2
  </div>
  <div id="quizPanel" role="tabpanel" aria-labelledby="quizTab">
    Contenu du Quiz
  </div>
</div>
```

ARIA est [largement prise en charge <sup>(angl.)</sup>](https://caniuse.com/#feat=wai-aria) par tous les principaux navigateurs et de nombreuses technologies d'assistance.

### Les changement représentationnels

Les changements représentationnels incluent l'utilisation du CSS pour changer l'apparence du contenu (mettre une bordure rouge autour de données invalides, changer la couleur de fond d'une case à cocher), le faire apparaitre ou disparaitre.

#### Les changements d'états

ARIA fournit des attributs pour déclarer l'état actuel d'un widget d'interface. Exemples (liste non exhaustive)&nbsp;:

- `aria-checked`
  - : Indique l'état d'une case à cocher ou d'un bouton radio.
- `aria-disabled`
  - : Indique qu'un élément est visible mais non modifiable ou non utilisable.
- `aria-grabbed`
  - : Indique l'état «&nbsp;attrapé&nbsp;» d'un objet lors d'une opération de glisser-déposer.

(Pour la liste complète des états ARIA, consulter la [liste des états et propriétés ARIA <sup>(angl.)</sup>](https://w3c.github.io/aria/#introstates).)

Les développeur·euse·s doivent utiliser les états ARIA pour indiquer l'état des éléments de widget et utiliser les sélecteurs d'attributs CSS pour modifier l'apparence visuelle selon les changements d'état (plutôt que de modifier une classe par script).

#### Les changements de visibilité

Lorsque la visibilité du contenu est modifiée (c'est-à-dire qu'un élément est masqué ou affiché), les développeurs doivent modifier la valeur de la propriété **`aria-hidden`**. Les techniques décrites ci-dessus doivent être utilisées pour déclarer du CSS permettant de cacher visuellement un élément en utilisant `display:none`.

Les parties pertinentes de l'exemple sont expliquées ci-dessous.Dans cet exemple, le code HTML de l'info-bulle a le format indiqué dans l'exemple 2a. La ligne 9 définit l'état **`aria-hidden`** à `true`.

```html
<div class="text">
  <label id="tp1-label" for="first">Prénom&nbsp;:</label>
  <input
    type="text"
    id="first"
    name="first"
    size="20"
    aria-labelledby="tp1-label"
    aria-describedby="tp1"
    aria-required="false" />
  <div id="tp1" class="tooltip" role="tooltip" aria-hidden="true">
    Votre prénom est facultatif
  </div>
</div>
```

Le CSS pour ce balisage est montré ci-dessous. Notez qu'aucun nom de classe personnalisé n'est utilisé, seul le statut de l'attribut **`aria-hidden`** compte.

```css
div.tooltip[aria-hidden="true"] {
  display: none;
}
```

Le JavaScript permettant de mettre à jour la propriété **`aria-hidden`** du formulaire présenté ci-dessus est donné dans le code suivant. Notez que le script ne fait que mettre à jour l'attribut **`aria-hidden`**&nbsp;; il n'est pas nécessaire d'ajouter ou de retirer une classe personnalisée.

```js
var showTip = function (el) {
  el.setAttribute("aria-hidden", "false");
};
```

### Les changements de rôles

ARIA permet aux développeur·euse·s de déclarer un rôle sémantique pour un élément qui, autrement, n'aurait pas ou aurait une sémantique incorrecte. Le **`role`** d'un élément ne doit pas changer. Il faut plutôt supprimer l'élément d'origine et le remplacer par un élément avec le nouveau **`role`**.

Par exemple, considérons un widget d'_édition en ligne_&nbsp;: un composant qui permet à l'utilisateur·ice de modifier un texte directement, sans changer de contexte. Ce composant possède un mode «&nbsp;vue&nbsp;», dans lequel le texte n'est pas éditable mais peut être activé, et un mode «&nbsp;édition&nbsp;», dans lequel le texte peut être modifié. Un·e développeur·euse pourrait être tenté·e d'implémenter le mode «&nbsp;vue&nbsp;» en utilisant un élément texte {{ HTMLElement("input") }} en lecture seule et en lui attribuant le **`role`** ARIA `button`, puis de passer au mode «&nbsp;édition&nbsp;» en rendant l'élément éditable et en supprimant l'attribut **`role`** (puisque les éléments {{ HTMLElement("input") }} ont leur propre sémantique de rôle).

Ne faites pas cela. Il vaut mieux implémenter le mode «&nbsp;vue&nbsp;» avec un autre élément, comme un {{ HTMLElement("div") }} ou un {{ HTMLElement("span") }} avec un **`role`** de `button`, et le mode «&nbsp;édition&nbsp;» avec un élément texte {{ HTMLElement("input") }}.

## La navigation au clavier

Souvent, les développeur·euse·s négligent la prise en charge du clavier lorsqu'ils créent des widgets personnalisés. Pour être accessible à une large gamme d'utilisateur·ice·s, toutes les fonctionnalités d'une application Web ou d'un widget doivent également pouvoir être contrôlées avec le clavier, sans nécessiter de souris. En pratique, cela implique généralement de suivre les conventions adoptées par des widgets similaires sur le bureau, en tirant pleinement parti des touches <kbd>Tab</kbd>, <kbd>Entrée</kbd>, <kbd>Espace</kbd> et des flèches.

Traditionnellement, la navigation au clavier sur le Web était limitée à la touche <kbd>Tab</kbd>. Un·e utilisateur·ice appuie sur <kbd>Tab</kbd> pour faire la mise au point de chaque lien, bouton ou formulaire sur la page dans un ordre linéaire, en utilisant <kbd><kbd>Maj</kbd>+<kbd>Tab</kbd></kbd> pour revenir en arrière. Il s'agit d'une navigation unidimensionnelle — en avant ou en arrière, un élément à la fois. Sur les pages denses, un·e utilisateur·ice au clavier doit souvent appuyer de nombreuses fois sur la touche <kbd>Tab</kbd> avant d'accéder à la section souhaitée. Mettre en œuvre des conventions de navigation de type bureau sur le Web peut considérablement accélérer la navigation pour de nombreux utilisateur·ice·s.

Voici un résumé de la façon dont la navigation au clavier devrait fonctionner dans une application Web compatible ARIA&nbsp;:

- La touche <kbd>Tab</kbd> doit fournir le focus au widget dans son ensemble. Par exemple, la tabulation d'une barre de menu ne doit pas mettre le focus sur le premier élément du menu.
- Les touches fléchées doivent permettre la sélection ou la navigation dans le widget. Par exemple, utiliser les touches fléchées gauche et droite doit déplacer le focus sur les éléments de menu précédent et suivant.
- Lorsque le widget n'est pas à l'intérieur d'un formulaire, les touches <kbd>Entrée</kbd> et <kbd>Espace</kbd> doivent permettre de sélectionner ou d'activer le contrôle.
- Dans un formulaire, la touche <kbd>Espace</kbd> doit sélectionner ou activer le contrôle, tandis que la touche <kbd>Entrée</kbd> doit soumettre l'action par défaut du formulaire.
- En cas de doute, imitez le comportement standard du bureau du contrôle que vous créez.

Ainsi, pour l'exemple de widget «&nbsp;Onglets&nbsp;» ci-dessus, l'utilisateur·ice doit pouvoir naviguer dans le conteneur du widget (l'élément {{HTMLElement('ol')}} dans notre balisage) à l'aide des touches <kbd>Tab</kbd> et <kbd>Maj</kbd>+<kbd>Tab</kbd>. Une fois que le focus du clavier est à l'intérieur du conteneur, les touches fléchées doivent permettre de naviguer entre chaque onglet (les éléments {{HTMLElement('li')}}). À partir de là, les conventions varient selon la plateforme. Sous Windows, l'onglet suivant doit être automatiquement activé lorsque l'utilisateur·ice appuie sur les touches fléchées. Sous macOS, il est possible d'appuyer sur <kbd>Entrée</kbd> ou <kbd>Espace</kbd> pour activer l'onglet suivant. Un tutoriel détaillé pour créer des [widgets JavaScript navigables au clavier](/fr/docs/Web/Accessibility/Guides/Keyboard-navigable_JavaScript_widgets) décrit comment obtenir ce comportement en JavaScript.

## Voir aussi

- [ARIA](/fr/docs/Web/Accessibility/ARIA)
- [Créer des widgets JavaScript navigables au clavier](/fr/docs/Web/Accessibility/Guides/Keyboard-navigable_JavaScript_widgets)
- [Spécification WAI-ARIA <sup>(angl.)</sup>](https://w3c.github.io/aria/)
- [Bonnes pratiques d'implémentation WAI-ARIA <sup>(angl.)</sup>](https://www.w3.org/WAI/ARIA/apg/)
