---
title: "ARIA : attribut aria-hidden"
short-title: aria-hidden
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-hidden
l10n:
  sourceCommit: a8b25483994fa47cf949b432ddf34a6bce2ddb2e
---

L'attribut `aria-hidden` indique un état d'élément déterminant s'il est exposé à une API d'accessibilité.

## Description

L'attribut `aria-hidden` peut être utilisé pour masquer du contenu non interactif à l'API d'accessibilité.

Ajouter `aria-hidden="true"` à un élément retire cet élément et tous ses enfants de l'arbre d'accessibilité. Cela peut améliorer l'expérience des utilisateur·ice·s de technologies d'assistance en masquant&nbsp;:

- Du contenu purement décoratif, comme des icônes ou des images
- Du contenu dupliqué, comme du texte répété
- Du contenu hors écran ou réduit, comme des menus

La présence de l'attribut `aria-hidden` masque le contenu aux technologies d'assistance mais ne masque rien visuellement.

`aria-hidden="true"` ne doit pas être utilisé sur des éléments pouvant recevoir la sélection. De plus, puisque cet attribut est hérité par les enfants d'un élément, il ne doit pas être ajouté au parent ou à un ancêtre d'un élément pouvant recevoir la sélection.

> [!WARNING]
> N'utilisez pas `aria-hidden="true"` sur des éléments pouvant recevoir la sélection.

Le statut masqué d'un élément dépend de son rendu. Le rendu est généralement contrôlé par le CSS. Par exemple, un élément dont la propriété `display` est définie à `none` via CSS n'est pas rendu. Un élément est considéré comme masqué si lui-même ou l'un de ses ancêtres n'est pas rendu ou a la valeur de son attribut `aria-hidden` définie à `true`. Notez qu'un élément et ses enfants ayant `aria-hidden="true"` resteront visibles, sauf s'ils sont également masqués par le CSS.

Soyez prudent·e lorsque vous utilisez `aria-hidden` pour masquer du contenu visuellement rendu aux technologies d'assistance. Vous ne devez pas masquer du contenu visible sauf si cela améliore l'expérience des utilisateur·ice·s de technologies d'assistance en supprimant du contenu redondant ou superflu. Ce n'est que lorsque le sens et la fonctionnalité identiques ou équivalents sont exposés aux technologies d'assistance que la suppression de contenu visible de l'API d'accessibilité peut être envisagée.

> [!NOTE]
> Tenez compte de tous les handicaps lorsque vous masquez du contenu visuellement rendu aux technologies d'assistance. Tous les utilisateur·ice·s de technologies d'assistance ne sont pas malvoyant·e·s. Si le contenu visible ne correspond pas au contenu textuel dans l'API d'accessibilité, l'expérience utilisateur sera négativement impactée pour les utilisateur·ice·s voyant·e·s.

En apparence, `aria-hidden="true"` et les rôles `presentation` et son synonyme `none` semblent similaires, mais leur intention est différente.

- `aria-hidden="true"` retire l'élément entier de l'API d'accessibilité.
- `role="presentation"` et `role="none"` retirent la signification sémantique d'un élément tout en exposant l'élément et son contenu aux technologies d'assistance.

`aria-hidden="true"` ne doit pas être ajouté lorsque&nbsp;:

- L'attribut HTML [`hidden`](/fr/docs/Web/HTML/Reference/Global_attributes/hidden) est présent
- L'élément ou son ancêtre est masqué avec [`display: none`](/fr/docs/Web/CSS/Reference/Properties/display)
- L'élément ou son ancêtre est masqué avec [`visibility: hidden`](/fr/docs/Web/CSS/Reference/Properties/visibility)

Dans ces trois scénarios, l'attribut est inutile car l'élément a déjà été retiré de l'arbre d'accessibilité. Masquer visuellement les éléments avec `display` ou `visibility` masque le contenu à l'écran et aux technologies d'assistance.

Utiliser `aria-hidden="false"` ne réexpose pas l'élément aux technologies d'assistance si l'un de ses parents définit `aria-hidden="true"`.

## Exemple

Ajouter `aria-hidden="true"` à l'icône masque le caractère de l'icône pour qu'il ne soit pas inclus dans le nom accessible.

```html
<button>
  <span class="fa fa-tweet" aria-hidden="true"></span>
  <span class="label"> Tweeter </span>
</button>
```

Ici, nous avons un bouton avec [une icône Font Awesome <sup>(angl.)</sup>](https://fontawesome.com/). Nous masquons l'icône aux technologies d'assistance avec `aria-hidden="true"`, car exposer l'icône à ces technologies pourrait entraîner une redondance ou, si l'icône n'a pas le même contenu que le texte visible, une confusion.

## Valeurs

- `false`
  - : L'élément est exposé à l'API d'accessibilité comme s'il était rendu.
- `true`
  - : L'élément est masqué à l'API d'accessibilité.
- `undefined` (par défaut)
  - : L'état masqué de l'élément est déterminé par l'agent utilisateur selon qu'il est rendu ou non.

## Interfaces associées

- {{domxref("Element.ariaHidden")}}
  - : La propriété {{domxref("Element.ariaHidden", "ariaHidden")}}, partie de l'interface {{domxref("Element")}}, reflète la valeur de l'attribut `aria-hidden`, qui indique si l'élément est exposé à une API d'accessibilité.
- {{domxref("ElementInternals.ariaHidden")}}
  - : La propriété {{domxref("ElementInternals.ariaHidden", "ariaHidden")}}, partie de l'interface {{domxref("ElementInternals")}}, reflète la valeur de l'attribut `aria-hidden`.

## Rôles associés

Utilisé dans **TOUS** les rôles

## Spécifications

{{Specifications}}

## Voir aussi

- L'attribut ARIA [`aria-disabled`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-disabled)
- L'attribut ARIA [`aria-modal`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-modal)
- L'attribut ARIA [`aria-expanded`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded)
- L'attribut HTML [`hidden`](/fr/docs/Web/HTML/Reference/Global_attributes/hidden)
- La propriété CSS {{CSSXref('display')}}
- La propriété CSS {{CSSXref('visibility')}}
