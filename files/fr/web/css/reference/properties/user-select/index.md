---
title: user-select
slug: Web/CSS/Reference/Properties/user-select
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

La propriété [CSS](/fr/docs/Web/CSS) **`user-select`** contrôle si l'utilisateur·ice peut sélectionner du texte. Cela n'a aucun effet sur le contenu chargé dans l'interface utilisateur d'un navigateur (son {{Glossary("Chrome", "chrome")}}), sauf pour les boîtes de texte.

{{InteractiveExample("Démonstration CSS&nbsp;: user-select")}}

```css interactive-example-choice
user-select: none;
```

```css interactive-example-choice
user-select: text;
```

```css interactive-example-choice
user-select: all;
```

```html interactive-example
<section id="default-example">
  <p id="example-element">Essayez de sélectionner ce texte</p>
</section>
```

```css interactive-example
#example-element {
  font-size: 1.5rem;
}
```

## Syntaxe

```css
/* Valeurs avec un mot-clé */
user-select: none;
user-select: auto;
user-select: text;
user-select: all;

/* Valeurs globales */
user-select: inherit;
user-select: initial;
user-select: revert;
user-select: revert-layer;
user-select: unset;
```

> [!NOTE]
> `user-select` n'est pas une propriété héritée, bien que la valeur initiale `auto` fasse qu'elle se comporte comme si elle était héritée la plupart du temps. Les navigateurs basés sur WebKit/Chromium _implémentent_ la propriété comme héritée, ce qui viole le comportement décrit dans la spécification, et cela entraînera certains problèmes. Jusqu'à présent, Chromium a choisi de [corriger les problèmes <sup>(ang.)</sup>](https://chromium.googlesource.com/chromium/src/+/b01af0b296ecb855aac95c4ed335d188e6eac2de) pour que le comportement final respecte les spécifications.

### Valeurs

- `none`
  - : Le texte de l'élément et de ses sous-éléments n'est pas sélectionnable. Notez que l'objet {{DOMxRef("Selection")}} peut contenir ces éléments.
- `auto`
  - : La valeur utilisée de `auto` est déterminée comme suit&nbsp;:
    - Pour les pseudo-éléments `::before` et `::after`, la valeur utilisée est `none`
    - Si la valeur utilisée de `user-select` sur le parent de cet élément est `none`, la valeur utilisée est `none`
    - Sinon, si la valeur utilisée de `user-select` sur le parent de cet élément est `all`, la valeur utilisée est `all`
    - Sinon, la valeur utilisée est `text`

- `text`
  - : Le texte peut être sélectionné par l'utilisateur·ice.
- `all`
  - : Le contenu de l'élément doit être sélectionné de manière atomique&nbsp;: si une sélection contient une partie de l'élément, alors la sélection doit contenir l'intégralité de l'élément, y compris tous ses descendants. Si un double-clic ou un clic contextuel se produit dans des sous-éléments, l'ancêtre le plus élevé avec cette valeur sera sélectionné.

> [!NOTE]
> Le module [d'interface utilisateur de base CSS](/fr/docs/Web/CSS/Guides/Basic_user_interface) définit une valeur `contain` pour la propriété `user-select` afin de permettre à la sélection de commencer à l'intérieur de l'élément pour être contenue dans les limites de cet élément, cependant, cela n'est pris en charge dans aucun navigateur.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### HTML

```html
<p>Vous devriez pouvoir sélectionner ce texte.</p>
<p class="unselectable">Hop, vous ne pouvez pas sélectionner ce texte !</p>
<p class="all">
  Cliquer une fois permettra de sélectionner l'ensemble du texte.
</p>
```

### CSS

```css
.unselectable {
  -webkit-user-select: none; /* Safari */
  user-select: none;
}

.all {
  -webkit-user-select: all;
  user-select: all;
}
```

### Résultat

{{EmbedLiveSample("Exemples")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Le pseudo-élément {{CSSxRef("::selection")}}
- L'objet JavaScript {{DOMxRef("Selection")}}
