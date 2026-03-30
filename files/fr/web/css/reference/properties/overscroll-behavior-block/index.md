---
title: overscroll-behavior-block
slug: Web/CSS/Reference/Properties/overscroll-behavior-block
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

La propriété [CSS](/fr/docs/Web/CSS) **`overscroll-behavior-block`** définit le comportement d'un navigateur lorsqu'il atteint la limite de défilement dans la direction du bloc (_verticale_).

Voir {{CSSxRef("overscroll-behavior")}} pour une explication complète.

## Syntaxe

```css
/* Valeurs avec un mot-clé */
overscroll-behavior-block: auto; /* Par défaut */
overscroll-behavior-block: contain;
overscroll-behavior-block: none;

/* Valeurs globales */
overscroll-behavior-block: inherit;
overscroll-behavior-block: initial;
overscroll-behavior-block: revert;
overscroll-behavior-block: revert-layer;
overscroll-behavior-block: unset;
```

La propriété `overscroll-behavior-block` est définie avec un mot-clé choisi parmi la liste des valeurs ci-dessous.

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

### Prévenir le dépassement de défilement dans la direction du bloc

Dans cette démonstration, nous avons deux boîtes de niveau bloc, l'une à l'intérieur de l'autre. La boîte externe a une grande hauteur ({{CSSxRef("height")}}) définie dessus afin que la page puisse défiler verticalement. La boîte interne a une petite largeur ({{CSSxRef("width")}}) (et `height`) définie dessus afin qu'elle s'adapte confortablement à l'intérieur de la fenêtre d'affichage, mais son contenu a une grande `height` afin qu'il puisse également défiler verticalement.

Par défaut, lorsque la boîte interne est défilée et qu'une limite de défilement est atteinte, toute la page commencera à défiler, ce qui n'est probablement pas ce que nous voulons. Pour éviter que cela ne se produise dans la direction du bloc, nous avons défini `overscroll-behavior-block: contain` sur la boîte interne.

#### HTML

```html
<main>
  <div>
    <div>
      <p>
        <code>overscroll-behavior-block</code> a été utilisé pour faire en sorte
        que lorsque les limites de défilement de la boîte interne jaune sont
        atteintes, la page entière ne commence pas à défiler.
      </p>
    </div>
  </div>
</main>
```

#### CSS

```css
main {
  height: 3000px;
  width: 500px;
  background-color: white;
  background-image: repeating-linear-gradient(
    to bottom,
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
  overscroll-behavior-block: contain;
}

div > div {
  height: 1500px;
  width: 100%;
  background-color: yellow;
  background-image: repeating-linear-gradient(
    to bottom,
    transparent 0px,
    transparent 19px,
    rgb(0 0 0 / 50%) 20px
  );
}

p {
  padding: 10px;
  background-color: rgb(255 0 0 / 50%);
  margin: 0;
  width: 340px;
  position: relative;
  top: 10px;
  left: 10px;
}
```

#### Résultat

{{EmbedLiveSample("Prévenir le dépassement de défilement dans la direction du bloc", "100%", 500)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété raccourcie {{CSSxRef("overscroll-behavior")}}
- La propriété {{CSSxRef("overscroll-behavior-x")}}
- La propriété {{CSSxRef("overscroll-behavior-y")}}
- La propriété {{CSSxRef("overscroll-behavior-inline")}}
- Le module [du comportement de dépassement de défilement CSS](/fr/docs/Web/CSS/Guides/Overscroll_behavior)
