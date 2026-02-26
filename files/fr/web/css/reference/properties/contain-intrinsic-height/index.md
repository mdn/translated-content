---
title: contain-intrinsic-height
slug: Web/CSS/Reference/Properties/contain-intrinsic-height
l10n:
  sourceCommit: 1dbba9f7a2c2e35c6e01e8a63159e2aac64b601b
---

La propriété [CSS](/fr/docs/Web/CSS) **`contain-intrinsic-height`** définit la hauteur d'un élément que le navigateur peut utiliser pour la mise en page lorsque l'élément est soumis à la [compartimentation de la taille](/fr/docs/Web/CSS/Guides/Containment/Using#compartimentation_de_la_taille).

## Syntaxe

```css
/* Valeurs avec un mot-clé */
contain-intrinsic-height: none;

/* Valeurs de type <length> */
contain-intrinsic-height: 1000px;
contain-intrinsic-height: 10rem;

/* Valeurs auto et <length> */
contain-intrinsic-height: auto 300px;

/* Valeurs globales */
contain-intrinsic-height: inherit;
contain-intrinsic-height: initial;
contain-intrinsic-height: revert;
contain-intrinsic-height: revert-layer;
contain-intrinsic-height: unset;
```

### Valeurs

Les valeurs suivantes peuvent être définies pour un élément.

- `none`
  - : L'élément n'a pas de hauteur intrinsèque.
- `<length>`
  - : L'élément a la hauteur définie ({{CSSxRef("&lt;length&gt;")}}).
- `auto <length>`
  - : Une valeur mémorisée de la hauteur de l'élément «&nbsp;rendu normalement&nbsp;» si elle existe et si l'élément omet son contenu (par exemple, lorsqu'il est hors écran)&nbsp;; sinon la `<length>` définie.

## Description

La propriété est généralement appliquée avec des éléments qui peuvent déclencher la compartimentation de la taille, tels que {{CSSxRef("contain", "contain: size")}} et {{CSSxRef("content-visibility")}}, et peut également être définie en utilisant la [propriété raccourcie](/fr/docs/Web/CSS/Guides/Cascade/Shorthand_properties) {{CSSxRef("contain-intrinsic-size")}}.

Le confinement de la taille permet à un agent utilisateur de présenter un élément comme s'il avait une taille fixe, ce qui permet d'éviter les modifications inutiles en évitant de rendre à nouveau les éléments enfants pour déterminer la taille réelle (améliorant ainsi l'expérience de l'utilisateur·ice).
Par défaut, la compartimentation de taille considère les éléments comme s'ils n'avaient pas de contenu et peut contracter la mise en page de la même manière que si les contenus n'avaient ni hauteur (ni largeur).
La propriété `contain-intrinsic-height` permet aux auteur·ice·s de définir une valeur appropriée à utiliser comme hauteur pour la mise en page.

La valeur `auto <length>` permet de mémoriser la hauteur de l'élément si celui‑ci a déjà été «&nbsp;rendu normalement&nbsp;» (avec ses éléments enfants), puis d'utiliser cette valeur mémorisée à la place de la hauteur définie lorsque l'élément omet son contenu.
Cela permet aux éléments hors écran avec {{CSSxRef("content-visibility", "content-visibility: auto")}} de bénéficier de la compartimentation de taille sans que les développeur·euse·s aient à être aussi précis·e·s dans leurs estimations de la taille des éléments.
La valeur mémorisée n'est pas utilisée si les éléments enfants sont en cours de rendu (si la compartimentation de taille est activée, la longueur (`<length>`) sera utilisée).

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

En complément de l'exemple ci‑dessous, la page {{CSSxRef("contain-intrinsic-size")}} contient un exemple interactif qui vous montre l'effet de la modification de la largeur et de la hauteur intrinsèques.

### Définir la hauteur intrinsèque

Le HTML ci‑dessous définit un élément «&nbsp;contained_element&nbsp;» qui sera soumis à une contrainte de taille, et qui contient un élément enfant.

```html
<div id="contained_element">
  <div class="child_element"></div>
</div>
```

Le CSS ci‑dessous règle {{CSSxRef("content-visibility")}} de `contained_element` sur `auto`, donc si l'élément est masqué il sera contraint en taille.
La largeur et la hauteur utilisées lorsque l'élément est contraint sont définies simultanément à l'aide de `contain-intrinsic-width` et `contain-intrinsic-height`, respectivement.

```css
#contained_element {
  border: 2px solid green;
  width: 151px;
  content-visibility: auto;
  contain-intrinsic-width: 152px;
  contain-intrinsic-height: 52px;
}
.child_element {
  border: 1px solid red;
  background: blue;
  height: 50px;
  width: 150px;
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [content-visibility&nbsp;: la nouvelle propriété CSS qui améliore vos performances de rendu](https://web.dev/articles/content-visibility?hl=fr) (web.dev)
- La propriété {{CSSxRef("contain-intrinsic-size")}}
- La propriété {{CSSxRef("contain-intrinsic-width")}}
- La propriété {{CSSxRef("contain-intrinsic-block-size")}}
- La propriété {{CSSxRef("contain-intrinsic-inline-size")}}
