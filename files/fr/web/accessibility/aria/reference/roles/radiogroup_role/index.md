---
title: "ARIA : rôle radiogroup"
short-title: radiogroup
slug: Web/Accessibility/ARIA/Reference/Roles/radiogroup_role
l10n:
  sourceCommit: a8b25483994fa47cf949b432ddf34a6bce2ddb2e
---

Le rôle `radiogroup` représente un groupe de boutons `radio`.

## Description

Un groupe radio est un ensemble d'options [`radio`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/radio_role) liées. Un `radiogroup` est un type de liste [`select`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/select_role) qui ne peut avoir qu'une seule entrée, ou bouton radio, sélectionnée à la fois.

Lorsque vous utilisez le bouton radio HTML natif [`<input type="radio">`](/fr/docs/Web/HTML/Reference/Elements/input/radio), les boutons radio sont regroupés lorsque chaque bouton du groupe possède le même [`name`](/fr/docs/Web/HTML/Reference/Elements/input#name). Une fois le groupe créé, sélectionner un bouton radio désélectionne automatiquement tout autre bouton radio actuellement sélectionné du même groupe. Cela associe les boutons radio entre eux, mais pour exposer explicitement le regroupement comme un `radiogroup`, il faut définir le rôle ARIA.

Il est recommandé de créer des groupes radio en utilisant des boutons radio HTML natifs avec le même nom. Cependant, si vous devez utiliser les rôles et attributs ARIA à la place des contrôles de formulaire HTML sémantiques, les boutons radio personnalisés doivent se comporter comme les boutons radio natifs.

Lorsque vous utilisez des éléments non sémantiques comme boutons radio, vous devez garantir que l'utilisateur·ice ne peut sélectionner qu'un seul bouton radio du groupe à la fois. Lorsqu'un élément du groupe est sélectionné (`aria-checked` à `true`), l'élément précédemment sélectionné devient non sélectionné (`aria-checked` à `false`). L'attribut `aria-checked` est défini sur les rôles `radio` associés, et non sur le `radiogroup` lui-même.

Certaines implémentations de `radiogroup` initialisent le groupe avec tous les boutons non sélectionnés. Une fois qu'un bouton radio est sélectionné, il n'est généralement pas possible de revenir à un état où aucun bouton n'est sélectionné.

Le `radiogroup` doit avoir un nom accessible, soit par un label visible référencé par [`aria-labelledby`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby), soit par un label spécifié avec [`aria-label`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label). Si des éléments fournissent des informations supplémentaires sur le groupe, ils sont référencés par le `radiogroup` via la propriété [`aria-describedby`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby).

## Propriétés, états et rôles WAI-ARIA associés

- le rôle [`radio`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/radio_role)
  - : Un des boutons sélectionnables d'un groupe, dans un `radiogroup`, où un seul bouton peut être sélectionné à la fois.
- [`aria-labelledby`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) / [`aria-label`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)
  - : Le `radiogroup` doit avoir un nom accessible, soit par un label visible référencé par `aria-labelledby`, soit par un label spécifié avec `aria-label`.
- [`aria-describedby`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby)
  - : Référence vers des éléments fournissant des informations supplémentaires sur le `radiogroup`.
- [`aria-required`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-required)
  - : Indique qu'un bouton radio du groupe doit avoir `aria-checked="true"` avant que le formulaire puisse être soumis. L'état requis est spécifié sur l'élément `radiogroup` et non sur les boutons radio, contrairement à l'attribut HTML [`required`](/fr/docs/Web/HTML/Reference/Attributes/required) qui est défini directement sur un ou plusieurs éléments radio {{HTMLElement('input')}}.
- [`aria-errormessage`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-errormessage)
  - : Identifie l'élément qui fournit un message d'erreur pour le `radiogroup`, si une erreur est présente. Ce message doit être masqué lorsqu'il n'est pas pertinent.

## Interactions au clavier

Pour les boutons radio dans un `radiogroup` qui n'est pas dans une [`toolbar`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/toolbar_role), les interactions clavier suivantes doivent être prises en charge&nbsp;:

- <kbd>Tab</kbd> et <kbd>Maj + Tab</kbd>
  - : Déplace la sélection dans et hors du `radiogroup`. Lorsque la sélection entre dans un `radiogroup`, si un bouton radio est sélectionné, la sélection se place sur ce bouton. Si aucun bouton n'est sélectionné, la sélection se place sur le premier bouton du groupe.
- <kbd>Espace</kbd>
  - : Sélectionne le bouton radio sélectionné si ce n'est pas déjà le cas.
- <kbd>Flèche vers la droite</kbd> et <kbd>Flèche vers le bas</kbd>
  - : Déplace la sélection vers le bouton radio suivant du groupe, désélectionne le bouton précédemment sélectionné et sélectionne le nouveau bouton. Si la sélection est sur le dernier bouton, elle se déplace vers le premier bouton du groupe.
- <kbd>Flèche vers la gauche</kbd> et <kbd>Flèche vers le haut</kbd>
  - : Déplace la sélection vers le bouton radio précédent du groupe, désélectionne le bouton précédemment sélectionné et sélectionne le nouveau bouton. Si la sélection est sur le premier bouton, elle se déplace vers le dernier bouton du groupe.

Les flèches sont utilisées pour naviguer entre les éléments d'une barre d'outils. Lorsqu'un `radiogroup` est imbriqué dans une barre d'outils, l'utilisateur·ice doit pouvoir naviguer parmi tous les éléments de la barre, y compris les boutons radio, sans changer le bouton sélectionné. Ainsi, lors de la navigation dans un `radiogroup` dans une [`toolbar`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/toolbar_role) avec les flèches, le bouton sélectionné ne change pas. Dans une barre d'outils, les touches <kbd>Espace</kbd> et <kbd>Entrée</kbd> sélectionnent le bouton radio sélectionné si ce n'est pas déjà le cas, et <kbd>Tab</kbd> déplace la sélection dans et hors de la barre d'outils.

## Fonctionnalités JavaScript requises

Les interactions utilisateur pour les `radiogroup` doivent reproduire celles d'un groupe de boutons radio HTML natifs avec le même nom. Les événements clavier pour Tab, Espace et les flèches doivent être capturés. Les clics sur les éléments radio et leurs labels associés doivent aussi être capturés. De plus, [la gestion de la sélection <sup>(angl.)</sup>](https://usability.yale.edu/web-accessibility/articles/focus-keyboard-operability) doit être assurée.

En général, quitter un élément sélectionné amène à l'élément sélectionnable suivant dans l'ordre du DOM. Utiliser les flèches pour naviguer dans un groupe de boutons radio maintient la sélection dans le groupe, déplaçant la sélection vers le premier bouton radio lorsque <kbd>Flèche vers la droite</kbd> ou <kbd>Flèche vers le bas</kbd> est relâchée alors que la sélection était sur le dernier bouton, et vers le dernier bouton si <kbd>Flèche vers la gauche</kbd> ou <kbd>Flèche vers le haut</kbd> est relâchée alors que la sélection était sur le premier bouton. La gestion dynamique de [`tabindex`](/fr/docs/Web/HTML/Reference/Global_attributes/tabindex) est une méthode pour gérer ces événements.

## Fonctionnalités CSS requises

Utilisez le sélecteur d'attribut `[aria-checked="true"]` ([sélecteur d'attribut](/fr/docs/Web/CSS/Reference/Selectors/Attribute_selectors)) pour styliser l'état sélectionné des boutons radio.

Utilisez les pseudo-classes CSS {{CSSXRef(':hover')}} et {{CSSXRef(':focus')}} pour styliser la sélection visuelle au clavier et le survol. L'effet de sélection et de survol doit englober le bouton radio et le label pour faciliter la perception de l'option choisie et indiquer que cliquer sur le label ou le bouton active le bouton radio.

## Exemples

Voici la structure de base d'un `radiogroup` utilisant les rôles ARIA non sémantiques à la place du HTML sémantique&nbsp;:

```html
<div role="radiogroup" aria-labelledby="question">
  <div id="question">Quelle est la meilleure couleur&nbsp;?</div>
  <div id="radioGroup">
    <p>
      <span
        id="colorOption_0"
        tabindex="0"
        role="radio"
        aria-checked="false"
        aria-labelledby="purple"></span>
      <span id="purple">Violet</span>
    </p>
    <p>
      <span
        id="colorOption_1"
        tabindex="-1"
        role="radio"
        aria-checked="false"
        aria-labelledby="aubergine"></span>
      <span id="aubergine">Aubergine</span>
    </p>
    <p>
      <span
        id="colorOption_2"
        tabindex="-1"
        role="radio"
        aria-checked="false"
        aria-labelledby="magenta"></span>
      <span id="magenta">Magenta</span>
    </p>
    <p>
      <span
        id="colorOption_3"
        tabindex="-1"
        role="radio"
        aria-checked="false"
        aria-labelledby="all"></span>
      <span id="all">Toutes les couleurs ci-dessus</span>
    </p>
  </div>
</div>
```

Cela pourrait être écrit en HTML sémantique, sans CSS ni JavaScript&nbsp;:

```html
<fieldset>
  <legend>Quelle est la meilleure couleur&nbsp;?</legend>
  <p>
    <input name="colorOption" type="radio" id="purple" />
    <label for="purple">Violet</label>
  </p>
  <p>
    <input name="colorOption" type="radio" id="aubergine" />
    <label for="aubergine">Aubergine</label>
  </p>
  <p>
    <input name="colorOption" type="radio" id="magenta" />
    <label for="magenta">Magenta</label>
  </p>
  <p>
    <input name="colorOption" type="radio" id="all" />
    <label for="all">Toutes les couleurs ci-dessus</label>
  </p>
</fieldset>
```

Dans cet exemple avec {{HTMLElement('fieldset')}}, le rôle `radiogroup` n'est pas nécessaire, mais pour que le regroupement soit explicitement annoncé comme `radiogroup`, ajoutez le rôle ARIA.

## Spécifications

{{Specifications}}

## Voir aussi

- L'élément HTML {{HTMLElement('fieldset')}}
- L'élément HTML {{HTMLElement('input/radio', '&lt;input type="radio">')}} de bouton radio
- [ARIA&nbsp;: rôle `radio`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/radio_role)
- [`aria-errormessage`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-errormessage)
- [`aria-invalid`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-invalid)
- [`aria-readonly`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-readonly)
- [`aria-required`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-required)
