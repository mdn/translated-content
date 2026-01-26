---
title: "ARIA : rôle menu"
short-title: menu
slug: Web/Accessibility/ARIA/Reference/Roles/menu_role
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

Le rôle `menu` est un type de widget composite qui offre une liste de choix à l'utilisateur·ice.

## Description

Un `menu` représente généralement un regroupement d'actions ou de fonctions courantes que l'utilisateur·ice peut invoquer. Le rôle `menu` est approprié lorsqu'une liste d'éléments de menu est présentée d'une manière similaire à un menu dans une application de bureau. Les sous-menus, également connus sous le nom de menus contextuels, ont également le rôle `menu`.

Bien que le terme «&nbsp;menu&nbsp;» soit un terme générique utilisé pour décrire la navigation sur un site, le rôle `menu` est destiné à une liste d'actions ou de fonctions qui nécessitent une fonctionnalité complexe, telle que la gestion de la sélection des widgets composites et la navigation par première lettre.

Un menu peut être une liste de contrôles toujours visible ou un widget qui peut être ouvert et fermé. Un widget `menu` fermé est généralement ouvert, ou rendu visible, en activant un bouton de menu, en choisissant un élément dans un menu qui ouvre un sous-menu, ou en invoquant une commande, telle que <kbd>Shift + F10</kbd> sous Windows, qui ouvre un menu contextuel.

Lorsqu'un utilisateur·ice active un choix dans un menu qui a été ouvert, le menu se ferme généralement. Si l'action de choix du menu invoque un sous-menu, le menu restera ouvert et le sous-menu sera affiché.

Lorsqu'un menu s'ouvre, la sélection du clavier est placée sur le premier élément de menu. Pour être accessible au clavier, vous devez [gérer la sélection <sup>(angl.)</sup>](https://usability.yale.edu/web-accessibility/articles/focus-keyboard-operability) pour tous les éléments descendants&nbsp;: tous les éléments de menu dans le `menu` sont sélectionnables. Le bouton de menu qui ouvre le menu et les éléments de menu, plutôt que le menu lui-même, sont les éléments sélectionnables.

Les éléments de menu incluent [`menuitem`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/menuitem_role), [`menuitemcheckbox`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemcheckbox_role) et [`menuitemradio`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemradio_role). Les éléments de menu [désactivés](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-disabled) sont sélectionnables mais ne peuvent pas être activés.

Les éléments de menu peuvent être regroupés dans des éléments avec le rôle [`group`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/group_role) et séparés par des éléments avec le rôle [`separator`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/separator_role). Ni `group` ni `separator` ne reçoivent la sélection ou ne sont interactifs.

Si un `menu` est ouvert à la suite d'une action contextuelle, <kbd>Échap</kbd> ou <kbd>Entrée</kbd> peuvent ramener la sélection au contexte d'invocation. Si la sélection était sur le bouton de menu, <kbd>Entrée</kbd> ouvre le menu, donnant la sélection au premier élément de menu. Si la sélection est sur le menu lui-même, <kbd>Échap</kbd> ferme le menu et ramène la sélection au bouton de menu ou à l'élément parent de la barre de menu (ou à l'action contextuelle qui a ouvert le menu).

Les éléments avec le rôle `menu` ont une valeur implicite de [`aria-orientation`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-orientation) de `vertical`. Pour un menu orienté horizontalement, utilisez [`aria-orientation="horizontal"`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-orientation).

Si le menu est visuellement persistant, envisagez d'utiliser le rôle [`menubar`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/menubar_role) à la place.

### Propriétés, états et rôles WAI-ARIA associés

- les rôles [`menuitem`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/menuitem_role), [`menuitemcheckbox`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemcheckbox_role) et [`menuitemradio`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemradio_role)
  - : Rôles des éléments contenus dans un `menu` ou `menubar` contenant, connus collectivement sous le nom d'«&nbsp;éléments de menu&nbsp;». Ceux-ci doivent être capables de recevoir la sélection.
- le rôle [`group`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/group_role)
  - : Les éléments de menu peuvent être imbriqués dans un [`group`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/group_role).
- le rôle [`separator`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/separator_role)
  - : Un séparateur qui sépare et distingue les sections de contenu ou les groupes d'éléments de menu au sein du menu.

- l'attribut [`tabindex`](/fr/docs/Web/HTML/Reference/Global_attributes/tabindex)
  - : Le conteneur `menu` a `tabindex` défini sur `-1` ou `0` et chaque élément du menu a `tabindex` défini sur `-1`.
- [`aria-activedescendant`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-activedescendant)
  - : Défini sur l'ID de l'élément focalisé, s'il y en a un.
- [`aria-orientation`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-orientation)
  - : Indique si l'orientation du menu est horizontale ou verticale&nbsp;; par défaut, elle est `verticale` si omise.
- [`aria-label`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) ou [`aria-labelledby`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)
  - : Le `menu` doit avoir un nom accessible. Utilisez `aria-labelledby` si un label visible est présent, sinon utilisez `aria-label`. Incluez soit `aria-labelledby` défini sur l'`id` de l'`menuitem` ou du `button` qui contrôle son affichage, soit utilisez `aria-label` pour définir le label.
- [`aria-owns`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-owns)
  - : Défini uniquement sur le conteneur de menu pour inclure des éléments qui ne sont pas des enfants DOM du conteneur. Si défini, ces éléments apparaîtront dans l'ordre de lecture dans la séquence dans laquelle ils sont référencés et après tout élément qui est un enfant DOM. Lors de la gestion du focus, assurez-vous que l'ordre de focus visuel correspond à cet ordre de lecture de la technologie d'assistance.

### Interactions au clavier

- <kbd>Espace</kbd> / <kbd>Entrée</kbd>
  - : Si l'élément est un élément de menu parent, il ouvre le sous-menu et déplace la sélection sur le premier élément du sous-menu. Sinon, il active l'élément de menu, ce qui charge un nouveau contenu et place la sélection sur le titre de ce contenu.
- <kbd>Échap</kbd>
  - : Lorsqu'il se trouve dans un sous-menu, il ferme le sous-menu et déplace la sélection sur l'élément de menu ou de barre de menu parent.
- <kbd>Flèche droite</kbd>
  - : Dans une barre de menu, déplace la sélection sur l'élément suivant de la barre de menu. Si la sélection est sur le dernier élément, il déplace la sélection sur le premier élément. Si dans un sous-menu, si la sélection est sur un élément qui n'a pas de sous-menu, il ferme le sous-menu et déplace la sélection sur l'élément suivant de la barre de menu. Sinon, il ouvre le sous-menu de l'élément de barre de menu nouvellement focalisé, en gardant la sélection sur cet élément de barre de menu parent. S'il n'est pas dans une barre de menu ou un sous-menu et n'est pas sur un `menuitem` avec un sous-menu, si la sélection n'est pas le dernier élément sélectionnable du menu, il déplace éventuellement la sélection sur le prochain élément sélectionnable.
- <kbd>Flèche gauche</kbd>
  - : Déplace la sélection sur l'élément précédent de la barre de menu. Si la sélection est sur le premier élément, il déplace la sélection sur le dernier élément. Si dans un sous-menu, il ferme le sous-menu et déplace la sélection sur l'élément de menu parent. S'il n'est pas dans une barre de menu ou un sous-menu, si la sélection n'est pas le premier élément sélectionnable du menu, il déplace éventuellement la sélection sur le dernier élément sélectionnable.
- <kbd>Flèche bas</kbd>
  - : Ouvre le sous-menu et déplace la sélection sur le premier élément du sous-menu.
- <kbd>Flèche haut</kbd>
  - : Ouvre le sous-menu et déplace la sélection sur le dernier élément du sous-menu.
- <kbd>Début</kbd>
  - : Déplace la sélection sur le premier élément de la barre de menu.
- <kbd>Fin</kbd>
  - : Déplace la sélection sur le dernier élément de la barre de menu.
- N'importe quelle touche de caractère
  - : Déplace la sélection sur le prochain élément de la barre de menu ayant un nom commençant par le caractère tapé. Si aucun des éléments n'a un nom commençant par le caractère tapé, la sélection ne se déplace pas.

## Exemples

Voici deux exemples d'implémentations de menus.

### Exemple 1 : menu de navigation

```html
<div>
  <button id="menubutton" aria-haspopup="true" aria-controls="menu">
    <img src="hamburger.svg" alt="Sections de la page" />
  </button>
  <ul id="menu" role="menu" aria-labelledby="menubutton">
    <li role="presentation">
      <a role="menuitem" href="#description">Description</a>
    </li>
    <li role="presentation">
      <a role="menuitem" href="#propriétés_états_et_rôles_wai-aria_associés">
        Propriétés, états et rôles WAI-ARIA associés
      </a>
    </li>
    <li role="presentation">
      <a role="menuitem" href="#interactions_au_clavier">
        Interactions au clavier
      </a>
    </li>
    <li role="presentation">
      <a role="menuitem" href="#exemples">Exemples</a>
    </li>
    <li role="presentation">
      <a role="menuitem" href="#spécifications">Spécifications</a>
    </li>
    <li role="presentation">
      <a role="menuitem" href="#voir_ausi">Voir aussi</a>
    </li>
  </ul>
</div>
```

Pour améliorer progressivement ce widget de navigation qui est par défaut accessible, la classe pour masquer le `menu` et l'inclusion de `tabindex="-1"` sur le contenu interactif de l'élément de menu doivent être ajoutées avec JavaScript au chargement.

Quand on inclut un «&nbsp;menu&nbsp;» pour la navigation du site, il ne faut pas utiliser le rôle `menu`. Au lieu de cela, pour la navigation principale du site, utilisez l'élément HTML natif {{HTMLElement("nav")}} ou simplement une liste de liens. Le rôle `menu` doit être réservé aux widgets composites nécessitant une gestion de la sélection. Voir [Pratiques ARIA pour la navigation dans les informations divulguées <sup>(angl.)</sup>](https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/examples/disclosure-navigation/) pour une explication et des exemples supplémentaires.

### Exemple 2 : sélecteur d'options de sous-menu de barre de menu

Le code suivant est un menu contextuel imbriqué dans une barre de menu. Il s'affiche lorsque le bouton de menu est activé. C'est un menu pour sélectionner la couleur du texte à partir d'une liste d'options de couleur&nbsp;:

```html
<div>
  <button
    type="button"
    aria-haspopup="menu"
    aria-controls="colormenu"
    tabindex="0"
    aria-label="Couleur du texte : violet">
    Violet
  </button>
  <ul role="menu" id="colormenu" aria-label="Options de couleur" tabindex="-1">
    <li
      role="menuitemradio"
      aria-checked="true"
      style="color: purple"
      tabindex="-1">
      Violet
    </li>
    <li
      role="menuitemradio"
      aria-checked="false"
      style="color: magenta"
      tabindex="-1">
      Magenta
    </li>
    <li
      role="menuitemradio"
      aria-checked="false"
      style="color: black"
      tabindex="-1">
      Noir
    </li>
  </ul>
</div>
```

Le bouton qui ouvre le menu a [`aria-haspopup="menu"`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-haspopup) défini, indiquant explicitement que le popup qu'il contrôle est un `menu`.

Pour qu'un menu s'ouvre, l'utilisateur interagit généralement avec un bouton de menu en tant qu'élément déclencheur. Le bouton de menu doit être sélectionnable et répondre à la fois aux événements de clic et aux événements clavier. Lorsqu'il est sélectionné, le fait de choisir <kbd>Entrée</kbd>, <kbd>Espace</kbd>, <kbd>Flèche vers le bas</kbd> ou <kbd>Flèche vers le haut</kbd> doit ouvrir le menu et placer la sélection sur un élément de menu.

L'ouverture et la fermeture du menu basculent l'attribut [`aria-expanded="true"`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded) sur le bouton. Il est ajouté lorsque le menu est ouvert. Supprimé ou défini sur `false` lorsque le menu est fermé. La valeur `true` indique que le menu est affiché et que l'activation du bouton de menu ferme le menu.

Lorsque le menu est ouvert, le bouton lui-même ne reçoit généralement pas la sélection, car les utilisateurs naviguent à travers les éléments du menu. Au lieu de cela, <kbd>Échap</kbd> et éventuellement <kbd>Maj + Tab</kbd> ferment le menu et renvoient la sélection au bouton de menu.

Le rôle `menu` a été défini sur le {{HTMLElement("ul")}}, identifiant l'élément `<ul>` comme un menu.

L'affichage et la dissimulation du menu peuvent être effectués avec CSS. Par exemple, dans ces exemples de code, nous pouvons utiliser les sélecteurs d'attribut et de frère suivant pour basculer la visibilité du menu&nbsp;:

```css
[role="menu"] {
  display: none;
}
[aria-expanded="true"] + [role="menu"] {
  display: block;
}
```

L'exemple de navigation a un bouton statique. L'exemple de sous-menu a un bouton qui est mis à jour lorsque l'utilisateur·ice sélectionne une nouvelle valeur. Dans ce cas, l'attribut `aria-label="Couleur du texte : violet"` est défini sur l'élément `menu`. Il définit le nom accessible pour le menu comme «&nbsp;Couleur du texte&nbsp;: violet&nbsp;»&nbsp;; identifiant l'objectif du menu (sélectionner une couleur de texte) et la valeur actuelle (violet). Lorsqu'une nouvelle couleur est sélectionnée, la valeur de la propriété `aria-label` doit également être mise à jour.

## Spécifications

{{Specifications}}

## Voir aussi

- [ARIA&nbsp;: rôle `menubar`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/menubar_role)
- [ARIA&nbsp;: rôle `menuitem`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/menuitem_role)
- [ARIA&nbsp;: rôle `menuitemcheckbox`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemcheckbox_role)
- [ARIA&nbsp;: rôle `menuitemradio`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemradio_role)
- L'attribut ARIA [`aria-haspopup`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-haspopup)
