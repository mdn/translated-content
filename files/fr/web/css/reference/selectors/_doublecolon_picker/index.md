---
title: ::picker()
slug: Web/CSS/Reference/Selectors/::picker
original_slug: Web/CSS/::picker
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

{{SeeCompatTable}}

Le [pseudo-élément](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-elements) [CSS](/fr/docs/Web/CSS) **`::picker()`** cible la partie sélecteur (<i lang="en">picker</i>) d'un élément, par exemple la liste déroulante d'un [élément `<select>` personnalisable](/fr/docs/Learn_web_development/Extensions/Forms/Customizable_select).

## Syntaxe

```css-nolint
::picker(<ident>) {
  /* ... */
}
```

### Paramètres

- {{cssxref("ident")}}
  - : Une chaîne représentant l'élément dont vous souhaitez cibler le sélecteur. Les valeurs suivantes sont disponibles&nbsp;:
    - `select`
      - : La liste déroulante des éléments `<select>` personnalisables.

## Description

Le pseudo-élément `::picker()` cible la partie sélecteur d'un contrôle de formulaire, c'est‑à‑dire la partie contextuelle qui apparaît pour permettre une sélection lorsque l'on presse le bouton de contrôle. Il n'est disponible à la sélection que lorsque l'élément d'origine possède un sélecteur et que l'apparence de base lui est appliquée via la valeur `base-select` de la propriété {{cssxref("appearance")}}.

Le sélecteur `::picker(select)` cible tous les descendants d'un élément `<select>` personnalisable à l'exception du premier enfant `<button>`&nbsp;; ces descendants sont groupés par le navigateur et rendus comme le sélecteur. Le premier `<button>` enfant représente le bouton de contrôle qui ouvre le sélecteur lorsqu'il est pressé.

Cela permet de cibler l'ensemble du contenu du sélecteur comme une seule entité, par exemple pour personnaliser sa {{cssxref("border", "bordure")}}, l'animer lorsqu'il apparaît et disparaît, ou le positionner ailleurs que sa position par défaut. Notre guide [éléments `<select>` personnalisables](/fr/docs/Learn_web_development/Extensions/Forms/Customizable_select) montre de nombreux exemples d'utilisation de `::picker(select)`.

### Comportement du sélecteur en tant que popover

L'élément `<select>` et le sélecteur ont automatiquement une relation implicite invocateur/popover, telle que définie par l'[API Popover](/fr/docs/Web/API/Popover_API). Voir [Utiliser l'API Popover](/fr/docs/Web/API/Popover_API/Using) pour plus de détails sur le comportement des popovers, et voir [Animer le menu du sélecteur à l'aide des états de popover](/fr/docs/Learn_web_development/Extensions/Forms/Customizable_select#animating_the_picker_using_popover_states) pour un cas d'usage typique rendu possible par cette association implicite.

### Positionnement par ancre du sélecteur

Autre effet de la relation implicite invocateur/popover évoquée ci‑dessus&nbsp;: l'élément `<select>` et le sélecteur ont aussi une ancre implicite en référence, ce qui signifie que le sélecteur est automatiquement à l'élément via le [positionnement par ancrage en CSS](/fr/docs/Web/CSS/CSS_anchor_positioning). Cela présente plusieurs avantages, notamment&nbsp;:

- Les styles par défaut du navigateur positionnent le sélecteur relativement au bouton (l'ancre) et vous pouvez personnaliser cette position comme expliqué dans [Positionner des éléments relativement à leur ancre](/fr/docs/Web/CSS/CSS_anchor_positioning/Using#positioning_elements_relative_to_their_anchor). À titre de référence, les styles par défaut associés sont les suivants&nbsp;:

  ```css
  inset: auto;
  margin: 0;
  min-inline-size: anchor-size(self-inline);
  min-block-size: 1lh;
  /* Aller jusqu'au bord de la fenêtre et ajouter des barres de défilement si
     nécessaire. */
  max-block-size: stretch;
  overflow: auto;
  /* En dessous et étendu vers la droite, par défaut. */
  position-area: block-end span-inline-end;
  ```

- Les styles par défaut du navigateur définissent aussi des alternatives de repli avec `position-try` qui repositionnent le sélecteur s'il risque de déborder de la fenêtre d'affichage. Les options de repli sont expliquées dans [Options de repli et masquage conditionnel en cas de débordement](/fr/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding). À titre de référence, les styles de repli par défaut associés sont les suivants&nbsp;:

  ```css
  position-try-order: most-block-size;
  position-try-fallbacks:
    /* D'abord au-dessus et étendu vers la droite, */
    /* puis en dessous mais étendu vers la gauche, */
    /* puis au-dessus et étendu vers la gauche. */
    block-start span-inline-end,
    block-end span-inline-start,
    block-start span-inline-start;
  ```

## Exemples

### Usage de base avec un sélecteur personnalisé

Pour activer la fonctionnalité de sélecteur personnalisable et les styles de base minimaux du navigateur (et retirer le style fourni par l'OS), il faut définir la valeur `base-select` d'{{cssxref("appearance")}} à la fois sur l'élément `<select>` et sur son sélecteur&nbsp;:

```css
select,
::picker(select) {
  appearance: base-select;
}
```

On peut ensuite, par exemple, retirer la {{cssxref("border", "bordure")}} noire par défaut du sélecteur&nbsp;:

```css
::picker(select) {
  border: none;
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les éléments {{htmlelement("select")}}, {{htmlelement("option")}}, {{htmlelement("optgroup")}}, {{htmlelement("label")}}, {{htmlelement("button")}} et {{htmlelement("selectedcontent")}}
- {{cssxref("::picker-icon")}}, {{cssxref("::checkmark")}}
- {{cssxref(":open")}}, {{cssxref(":checked")}}
- [Éléments `<select>` personnalisables](/fr/docs/Learn_web_development/Extensions/Forms/Customizable_select)
