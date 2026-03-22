---
title: overscroll-behavior-inline
slug: Web/CSS/Reference/Properties/overscroll-behavior-inline
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

La propriété [CSS](/fr/docs/Web/CSS) **`overscroll-behavior-inline`** définit le comportement d'un navigateur lorsqu'il atteint la limite de défilement dans la direction en ligne (_horizontale_).

Voir {{CSSxRef("overscroll-behavior")}} pour une explication complète.

## Syntaxe

```css
/* Valeurs avec un mot-clé */
overscroll-behavior-inline: auto; /* Par défaut */
overscroll-behavior-inline: contain;
overscroll-behavior-inline: none;

/* Valeurs globales */
overscroll-behavior-inline: inherit;
overscroll-behavior-inline: initial;
overscroll-behavior-inline: revert;
overscroll-behavior-inline: revert-layer;
overscroll-behavior-inline: unset;
```

La propriété `overscroll-behavior-inline` est définie avec un mot-clé choisi parmi la liste des valeurs ci-dessous.

### Valeurs

- `auto`
  - : Le comportement de dépassement de défilement par défaut se produit normalement.
- `contain`
  - : Le comportement de dépassement de défilement par défaut (par exemple, les effets de «&nbsp;rebondissement&nbsp;») est observé à l'intérieur de l'élément où cette valeur est définie. Cependant, aucun enchaînement de défilement ne se produit sur les zones de défilement voisines&nbsp;; les éléments sous-jacents ne défileront pas. La valeur `contain` désactive la navigation native du navigateur, y compris le geste de «&nbsp;tirer pour actualiser&nbsp;» vertical et la navigation par balayage horizontal.
- `none`
  - : Aucun enchaînement de défilement ne se produit vers les zones de défilement voisines, et le comportement de dépassement de défilement par défaut est empêché.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Prévenir le dépassement de défilement dans la direction en ligne

Dans cette démonstration, nous avons deux boîtes de niveau bloc, l'une à l'intérieur de l'autre. La boîte externe a une grande {{CSSxRef("width")}} définie dessus afin que la page puisse défiler horizontalement. La boîte interne a une petite largeur (et {{CSSxRef("height")}}) définie dessus afin qu'elle s'adapte confortablement à l'intérieur de la fenêtre d'affichage, mais son contenu a une grande largeur afin qu'il puisse également défiler horizontalement.

Par défaut, lorsque la boîte interne est défilée et qu'une limite de défilement est atteinte, toute la page commencera à défiler, ce qui n'est probablement pas ce que nous voulons. Pour éviter que cela ne se produise dans la direction en ligne, nous avons défini `overscroll-behavior-inline: contain` sur la boîte interne.

#### HTML

```html
<main>
  <div>
    <div>
      <p>
        <code>overscroll-behavior-inline</code> a été utilisé pour faire en
        sorte que lorsque les limites de défilement de la boîte interne jaune
        sont atteintes, toute la page ne commence pas à défiler.
      </p>
    </div>
  </div>
</main>
```

#### CSS

```css
main {
  height: 400px;
  width: 3000px;
  background-color: white;
  background-image: repeating-linear-gradient(
    to right,
    transparent 0px,
    transparent 19px,
    rgb(0 0 0 / 50%) 20px
  );
}

main > div {
  height: 300px;
  width: 400px;
  overflow: auto;
  position: relative;
  top: 50px;
  left: 50px;
  overscroll-behavior-inline: contain;
}

div > div {
  height: 100%;
  width: 1500px;
  background-color: yellow;
  background-image: repeating-linear-gradient(
    to right,
    transparent 0px,
    transparent 19px,
    rgb(0 0 0 / 50%) 20px
  );
}

p {
  padding: 10px;
  background-color: rgb(255 0 0 / 50%);
  margin: 0;
  width: 360px;
  position: relative;
  top: 10px;
  left: 10px;
}
```

#### Résultat

{{EmbedLiveSample("Prévenir le dépassement de défilement dans la direction en ligne", "100%", 500)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété raccourcie {{CSSxRef("overscroll-behavior")}}
- La propriété {{CSSxRef("overscroll-behavior-x")}}
- La propriété {{CSSxRef("overscroll-behavior-y")}}
- La propriété {{CSSxRef("overscroll-behavior-block")}}
- Le module [du comportement de dépassement de défilement CSS](/fr/docs/Web/CSS/Guides/Overscroll_behavior)
