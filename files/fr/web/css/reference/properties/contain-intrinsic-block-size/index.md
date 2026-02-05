---
title: contain-intrinsic-block-size
slug: Web/CSS/Reference/Properties/contain-intrinsic-block-size
l10n:
  sourceCommit: 1dbba9f7a2c2e35c6e01e8a63159e2aac64b601b
---

La [propriété logique](/fr/docs/Web/CSS/Guides/Logical_properties_and_values) [CSS](/fr/docs/Web/CSS) **`contain-intrinsic-block-size`** définit la taille de bloc d'un élément que le navigateur peut utiliser pour la mise en page lorsque l'élément est soumis à la [compartimentation de la taille](/fr/docs/Web/CSS/Guides/Containment/Using#compartimentation_de_la_taille).

La taille de bloc est la dimension d'un élément perpendiculaire au flux de texte au sein d'une ligne. Dans un [mode d'écriture](/fr/docs/Web/CSS/Reference/Properties/writing-mode) horizontal comme le français standard, la taille de bloc correspond à la dimension verticale (hauteur)&nbsp;; dans un mode d'écriture vertical, elle correspond à la dimension horizontale.

## Syntaxe

```css
/* Valeurs avec un mot-clé */
contain-intrinsic-block-size: none;

/* Valeurs de type <length> */
contain-intrinsic-block-size: 1000px;
contain-intrinsic-block-size: 10rem;

/* Valeur auto et <length> */
contain-intrinsic-block-size: auto 300px;

/* Valeurs globales */
contain-intrinsic-block-size: inherit;
contain-intrinsic-block-size: initial;
contain-intrinsic-block-size: revert;
contain-intrinsic-block-size: revert-layer;
contain-intrinsic-block-size: unset;
```

### Valeurs

Les valeurs suivantes peuvent être définies pour la taille de bloc intrinsèque d'un élément&nbsp;:

- `none`
  - : L'élément n'a pas de taille de bloc intrinsèque.
- `<length>`
  - : L'élément a la taille de bloc définie, exprimée en utilisant le type de donnée {{CSSxRef("&lt;length&gt;")}}.
- `auto <length>`
  - : Lorsque l'élément est en compartimentation de taille et qu'il omet son contenu (par exemple, lorsqu'il est hors écran et que `content-visibility: auto` est défini), la taille de bloc est mémorisée à partir de la taille réelle de l'élément lors du dernier rendu de ses éléments enfants.
    Si l'élément n'a jamais rendu ses éléments enfants et n'a donc pas de valeur mémorisée pour la taille de l'élément normalement rendu, ou s'il n'omettait pas son contenu, la taille de bloc est la `<length>` définie.

## Description

La propriété est couramment appliquée avec des éléments pouvant activer la compartimentation de taille, tels que {{CSSxRef("contain", "contain: size")}} et {{CSSxRef("content-visibility")}}.

La compartimentation de taille permet à un agent utilisateur de disposer un élément comme s'il avait une taille fixe.
Cela évite des recalculs de mise en page inutiles en évitant le rerendu des éléments enfants pour déterminer la taille réelle (améliorant ainsi l'expérience utilisateur).
Par défaut, la compartimentation de taille considère les éléments comme s'ils n'avaient pas de contenu et peut contracter la mise en page de la même manière que si les contenus n'avaient ni largeur ni hauteur.
La propriété `contain-intrinsic-block-size` permet aux auteur·ice·s de définir une valeur appropriée à utiliser comme taille de bloc pour la mise en page.

La valeur `auto <length>` permet de mémoriser la taille de bloc d'un élément si celui‑ci a déjà été «&nbsp;rendu normalement&nbsp;» (avec ses éléments enfants), et d'utiliser cette valeur mémorisée au lieu de la valeur définie lorsque l'élément n'a pas de contenu.
Cela permet aux éléments hors écran avec {{CSSxRef("content-visibility", "content-visibility: auto")}} de bénéficier de la compartimentation de taille sans que les développeur·euse·s aient à estimer précisément la taille de l'élément.
La valeur mémorisée n'est pas utilisée si les éléments enfants sont en cours de rendu&nbsp;; si la compartimentation de taille est activée, la valeur `<length>` définie est utilisée.

## Definition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Définir la taille de bloc intrinsèque

Le HTML ci‑dessous définit un élément «&nbsp;contained_element&nbsp;» qui sera soumis à une contrainte de taille, et qui contient un élément enfant.

```html
<div id="contained_element">
  <div class="child_element"></div>
</div>
```

Le CSS ci‑dessous règle {{CSSxRef("content-visibility")}} de `contained_element` sur `auto`, donc si l'élément est masqué il sera contraint en taille.
La taille de bloc intrinsèque et la taille en ligne utilisées lorsque l'élément est contraint sont définies simultanément à l'aide de `contain-intrinsic-block-size` et `contain-intrinsic-inline-size`, respectivement.

```css
#contained_element {
  border: 2px solid green;
  inline-size: 151px;
  content-visibility: auto;
  contain-intrinsic-inline-size: 152px;
  contain-intrinsic-block-size: 52px;
}
.child_element {
  border: 1px solid red;
  background: blue;
  block-size: 50px;
  inline-size: 150px;
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [content-visibility&nbsp;: la nouvelle propriété CSS qui améliore vos performances de rendu](https://web.dev/articles/content-visibility?hl=fr) (web.dev)
- La propriété {{CSSxRef("contain-intrinsic-inline-size")}}
- La propriété {{CSSxRef("contain-intrinsic-size")}}
- La propriété {{CSSxRef("contain-intrinsic-width")}}
- La propriété {{CSSxRef("contain-intrinsic-height")}}
