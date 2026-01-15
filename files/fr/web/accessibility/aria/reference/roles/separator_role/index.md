---
title: "ARIA : rôle separator"
short-title: separator
slug: Web/Accessibility/ARIA/Reference/Roles/separator_role
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

Le rôle `separator` indique que l'élément est un diviseur qui sépare et distingue les sections de contenu ou les groupes d'éléments de menu. Le rôle ARIA implicite de l'élément de rupture thématique natif {{HTMLElement('hr')}} est `separator`.

## Description

Un séparateur est un diviseur qui sépare et distingue les sections de contenu ou les groupes d'éléments de menu. Il existe deux types de séparateurs : une structure statique qui fournit une frontière visible, identique à l'élément HTML {{HTMLElement('hr')}} , et un widget déplaçable et focalisable.

Les éléments avec le rôle `separator` ont une valeur implicite de [`aria-orientation`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-orientation) de `horizontal`.

### Séparateur non sélectionnable

Un séparateur non sélectionnable est un élément structurel statique qui peut être utilisé pour aider à diviser visuellement deux groupes d'éléments de menu dans un menu ou pour fournir une règle horizontale entre deux sections d'une page. Les ruptures thématiques qui ne sont pas sélectionnables peuvent toujours être perçues par un·e utilisateur·ice de lecteur d'écran lorsqu'il·elle utilise un curseur de lecture qui ne dépend pas du ciblage.

```html
<h2>Mon premier article de blog</h2>
…
<img src="blueline.gif" role="separator" alt="" />
<h2>Deux ans plus tard, mon deuxième article</h2>
…
```

Dans l'exemple, une image crée un séparateur visuel entre deux articles de blog. L'auteur·ice aurait pu utiliser un élément de rupture thématique sémantique {{HTMLElement('hr')}} et le styliser avec CSS pour le rendre bleu (et ne pas avoir à changer l'image lorsqu'il change le thème du blog), ou l'auteur·ice aurait pu englober chaque article dans l'élément sémantique {{HTMLElement('article')}}, ou les deux.

```html
<section role="feed">
  <article>
    <h2>Mon premier article de blog</h2>
    …
  </article>
  <hr />
  <article>
    <h2>Deux ans plus tard, mon deuxième article</h2>
    …
  </article>
</section>
```

```css
[role="feed"] > hr {
  height: 3px;
  background-color: blue;
}
```

Un nom accessible n'est pas nécessaire.

### Séparateur sélectionnable

Le rôle de séparateur peut être utilisé pour identifier l'élément comme un séparateur visuel entre des groupes d'éléments dans un menu, tels que des groupes d'éléments `menuitemradio` ou `menuitemcheckbox`.

Si le séparateur est sélectionnable, qu'il fournit une frontière visible entre deux sections de contenu et permet à l'utilisateur·ice de modifier la taille relative des sections en déplaçant sa position, la valeur de [`aria-valuenow`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuenow) doit être définie sur un nombre reflétant la position courante du séparateur et cette valeur doit être mise à jour lors des changements. Les propriétés [`aria-valuemin`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemin) et [`aria-valuemax`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemax) doivent aussi être incluses si elles ne sont pas définies sur les valeurs par défaut 0 et 100 respectivement.

Un nom accessible, avec [`aria-label`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label), doit être ajouté s'il y a plus d'un séparateur sélectionnable.

### Tous les descendants sont des présentations

Certaines catégories de composants d'interface utilisateur, lorsqu'elles sont représentées dans une API d'accessibilité de plate-forme, ne peuvent contenir que du texte. Les API d'accessibilité n'ont pas de moyen de représenter des éléments sémantiques contenus dans un `separator`. Pour contourner cette limitation, les navigateurs appliquent automatiquement le rôle [`presentation`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role) à tous les éléments descendants d'un élément `separator`, car ce rôle ne prend pas en charge les enfants sémantiques.

Par exemple, considérez l'élément `separator` ci‑dessous qui contient un titre&nbsp;:

```html
<div role="separator"><h3>Titre de mon séparateur</h3></div>
```

Étant donné que les descendants d'un `separator` sont présentiels, le code suivant est équivalent&nbsp;:

```html
<div role="separator"><h3 role="presentation">Titre de mon séparateur</h3></div>
```

Du point de vue de l'utilisateur·ice de technologie d'assistance, le titre n'existe pas puisque les extraits précédents sont équivalents à ce qui suit dans l'[arbre d'accessibilité](/fr/docs/Glossary/Accessibility_tree)&nbsp;:

```html
<div role="separator">Titre de mon séparateur</div>
```

### Propriétés, états et rôles WAI-ARIA associés

- [`aria-orientation`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-orientation) (par défaut&nbsp;: horizontal pour separator)
  - : Par défaut, le séparateur pour le rôle `separator` est supposé horizontal. La valeur peut être incluse et définie sur horizontal, indéfini (la valeur par défaut pour les autres rôles sauf indication contraire), ou vertical.

- [`aria-valuenow`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuenow)
  - : Si le séparateur est sélectionnable et possède une valeur connue, `aria-valuenow` définit la valeur courante. Si le séparateur n'est pas sélectionnable ou que la valeur est inconnue, n'incluez pas cet attribut.

- [`aria-valuemin`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemin) (par défaut&nbsp;: 0)
  - : Si le séparateur est sélectionnable et que la valeur minimale n'est pas 0, incluez la valeur minimale avec `aria-valuemin`.

- [`aria-valuemax`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemax) (par défaut&nbsp;: 100)
  - : Si le séparateur est sélectionnable et que la valeur maximale n'est pas 100, incluez `aria-valuemax` avec une valeur égale ou supérieure à `aria-valuemin`.

- [`aria-valuetext`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuetext)
  - : Si le séparateur est sélectionnable et que `aria-valuenow` n'est pas optimal pour fournir à l'utilisateur·ice une information exploitable, le contenu de `aria-valuetext` sera lu à la place de la valeur de `aria-valuenow`.

## Spécifications

{{Specifications}}

## Voir aussi

- L'élément HTML {{HTMLElement('hr')}} de rupture thématique
- [Exemple de séparateur dans une barre de menu <sup>(angl.)</sup>](https://www.w3.org/WAI/ARIA/apg/patterns/menubar/examples/menubar-editor/)
