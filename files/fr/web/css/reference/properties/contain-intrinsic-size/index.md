---
title: contain-intrinsic-size
slug: Web/CSS/Reference/Properties/contain-intrinsic-size
l10n:
  sourceCommit: 1dbba9f7a2c2e35c6e01e8a63159e2aac64b601b
---

La [propriété raccourcie](/fr/docs/Web/CSS/Guides/Cascade/Shorthand_properties) [CSS](/fr/docs/Web/CSS) **`contain-intrinsic-size`** définit la taille d'un élément que le navigateur utilisera pour la mise en page lorsque l'élément est soumis à la [compartimentation de la taille](/fr/docs/Web/CSS/Guides/Containment/Using#compartimentation_de_la_taille).

## Propriétés constituantes

Cette propriété est une propriété raccourcie pour les propriétés CSS suivantes&nbsp;:

- {{CSSxRef("contain-intrinsic-width")}}
- {{CSSxRef("contain-intrinsic-height")}}

## Syntaxe

```css
/* Valeurs avec un mot-clé */
contain-intrinsic-size: none;

/* Valeurs de type <length> */
contain-intrinsic-size: 1000px;
contain-intrinsic-size: 10rem;

/* largeur | hauteur */
contain-intrinsic-size: 1000px 1.5em;

/* Valeurs auto et <length> */
contain-intrinsic-size: auto 300px;
contain-intrinsic-size: auto none;

/* auto largeur | auto hauteur */
contain-intrinsic-size: auto 300px auto 4rem;

/* Valeurs globales */
contain-intrinsic-size: inherit;
contain-intrinsic-size: initial;
contain-intrinsic-size: revert;
contain-intrinsic-size: revert-layer;
contain-intrinsic-size: unset;
```

### Valeurs

Les valeurs suivantes peuvent être définies pour la propriété `contain-intrinsic-size`&nbsp;:

- `none`
  - : L'élément n'a pas de taille intrinsèque dans la (ou les) dimension(s) concernée(s).
- `<length>`
  - : L'élément possède la longueur ({{CSSxRef("&lt;length&gt;")}}) définie dans la (ou les) dimension(s) concernée(s).
- `auto [<length> | none]`
  - : Une valeur mémorisée de la taille de l'élément «&nbsp;rendu normalement&nbsp;» si elle existe et si l'élément omet son contenu (par exemple lorsqu'il est hors écran)&nbsp;; sinon la `<length>` définie.
    Le mot‑clé `none` peut remplacer `<length>` dans les cas où des longueurs fixes `0px` se comportent différemment de `none` (par exemple dans des mises en page en colonnes multiples ou en grille).

Si une valeur est fournie en tant que mot‑clé, en tant que longueur ou en tant que paire `auto [<length> | none]`, elle s'applique à la fois à la largeur et à la hauteur.

Deux valeurs de longueur peuvent être définies ; elles s'appliquent respectivement à la largeur puis à la hauteur.
Si deux paires `auto [<length> | none]` sont définies, la première paire s'applique à la largeur et la seconde à la hauteur.

## Description

La propriété est généralement appliquée aux éléments susceptibles de déclencher la compartimentation de taille, tels que {{CSSxRef("contain", "contain: size")}} et {{CSSxRef("content-visibility")}}.

La compartimentation de taille permet à un agent utilisateur de disposer un élément comme s'il avait une taille fixe, évitant des recalculs de mise en page inutiles en évitant le rerendu des éléments enfants pour déterminer la taille réelle (améliorant ainsi l'expérience utilisateur).
Par défaut, la compartimentation de taille considère les éléments comme s'ils n'avaient pas de contenu et peut contracter la mise en page de la même manière que si les contenus n'avaient ni largeur ni hauteur.
La propriété `contain-intrinsic-inline-size` permet aux auteur·ice·s de définir une valeur appropriée à utiliser comme taille en ligne pour la mise en page.

La valeur `auto <length>` permet de mémoriser la taille en ligne d'un élément si celui‑ci a déjà été «&nbsp;rendu normalement&nbsp;» (avec ses éléments enfants), puis d'utiliser cette valeur mémorisée à la place de la valeur définie lorsque l'élément omet son contenu.
Cela permet aux éléments hors écran avec {{CSSxRef("content-visibility", "content-visibility: auto")}} de bénéficier de la compartimentation de taille sans que les développeur·euse·s aient à être aussi précis·e·s dans leurs estimations de la taille des éléments.
La valeur mémorisée n'est pas utilisée si les éléments enfants sont en cours de rendu (si la compartimentation de taille est activée, la `<length>` définie est utilisée).

Dans les mises en page en grille et en colonnes multiples, une taille explicite est traitée différemment d'une hauteur implicite basée sur le contenu.
Les éléments peuvent être mis en page de façon sensiblement différente de ce qu'elle serait si l'élément était simplement rempli de contenu jusqu'à cette hauteur.
La valeur `auto none` permet à l'élément de revenir à `contain-intrinsic-size: none` si aucune valeur mémorisée n'existe, ce qui permet de disposer l'élément comme s'il n'avait pas de contenu. Ceci est presque toujours préférable à définir 0px comme taille intrinsèque dans les mises en page en grille et en colonnes multiples, où les éléments contenus peuvent déborder de leurs parents et provoquer une mise en page inattendue.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Utiliser des paires de valeurs automatiques pour la taille intrinsèque

Cet exemple montre `contain-intrinsic-size: auto <length>` et `contain-intrinsic-size: auto none`, dans une mise en page où de nombreux éléments affichés verticalement ont des estimations de taille intrinsèque à la fois exactes et inexactes.
L'utilisation de `content-visibility: auto` évite de rendre les éléments lorsqu'ils sont hors écran, ainsi cette propriété se prête bien à une combinaison avec `contain-intrinsic-size` pour améliorer les performances de rendu et réduire les [recalculs de mise en page](/fr/docs/Glossary/Reflow).

La paire de valeurs `contain-intrinsic-size: auto 500px` indique au navigateur d'utiliser 500px comme une sorte de «&nbsp;taille de remplacement&nbsp;» (largeur et hauteur) pour l'élément lorsqu'il est hors écran et que la page est en cours de mise en page.
Lorsque l'utilisateur fait défiler jusqu'à l'élément et qu'il doit être affiché, le navigateur calculera la taille réelle de l'élément et de son contenu.
S'il existe une différence entre la taille de remplacement et la taille calculée, cela peut forcer un nouveau recalcul de la mise en page, avec les modifications associées de la position de la barre latérale.

Une fois que le navigateur dispose de l'information de taille réelle pour l'élément, il mémorisera cette taille lorsque l'élément repassera hors écran, et utilisera la taille mémorisée pour les calculs de mise en page à la place de la valeur de remplacement.
L'avantage est que le navigateur n'a pas besoin de rendre de façon répétée le contenu de l'élément pour calculer sa taille, ce qui est particulièrement utile lorsque le contenu est complexe ou dépend de ressources réseau ou de JavaScript.

#### HTML

```html
<div id="container">
  <div id="auto-length-note">
    <p>
      Votre navigateur ne prend pas en charge
      <code>contain-intrinsic-size: auto &lt;length&gt;</code>.
    </p>
  </div>
  <div class="auto-length">
    <p>Élément un</p>
  </div>
  <div class="auto-length">
    <p>Élément deux</p>
  </div>
  <div class="auto-length large-intrinsic-size">
    <p class="small">Élément trois</p>
  </div>
  <div class="auto-length large-intrinsic-size">
    <p class="small">Élément quatre</p>
  </div>
  <div id="auto-none-note">
    <p>
      Votre navigateur ne prend pas en charge
      <code>contain-intrinsic-size: auto none</code>.
    </p>
  </div>
  <div class="auto-length none">
    <p>Élément cinq</p>
  </div>
  <div class="auto-length none">
    <p>Élément six</p>
  </div>
</div>
```

#### CSS

```css hidden
div,
p {
  padding: 1rem;
  margin-bottom: 1rem;
  font-size: 2rem;
  font-family: sans-serif;
}

code {
  background-color: lightgray;
  padding: 0.25rem;
  border-radius: 0.25rem;
}

#container {
  width: 90%;
  height: 80%;
}

.auto-length,
.auto-length.none {
  display: none;
}

#auto-length-note,
#auto-none-note {
  display: block;
  padding: 0;
}

#auto-length-note p,
#auto-none-note p {
  padding: 0.5rem;
  width: 100%;
  height: max-content;
  font-size: 1rem;
  line-height: 1.5rem;
  background-color: tomato;
}

@supports (contain-intrinsic-size: auto none) {
  .auto-length.none {
    display: block;
  }
  #auto-none-note {
    display: none;
  }
}
@supports (contain-intrinsic-size: auto 500px) {
  .auto-length {
    display: block;
  }
  #auto-length-note {
    display: none;
  }
}
```

```css
p {
  height: 500px;
  width: 500px;
  border: 4px dotted;
  background: lightblue;
}

.auto-length {
  content-visibility: auto;
  contain-intrinsic-size: auto 500px;
  background-color: linen;
  outline: 4px dotted blue;
}

.large-intrinsic-size {
  /* Définir une taille intrinsèque inexacte pour l'élément */
  contain-intrinsic-size: auto 5000px;
  background-color: lightgray;
  outline: 4px dotted red;
}

.small {
  /* Cet élément est beaucoup plus petit que prévu */
  height: 100px;
  width: 100px;
}

.none {
  background-color: papayawhip;
  contain-intrinsic-size: auto none;
  outline: 4px dotted red;
}
```

#### Résultat

- Les deux premières boîtes ont une taille intrinsèque qui correspond à leur taille réelle, donc lorsqu'elles apparaissent à l'écran la mise en page est recalculée, mais la barre de défilement et la position de défilement restent inchangées.

- Les troisième et quatrième boîtes ont une taille intrinsèque très importante, la mise en page initiale calculée par le navigateur est donc beaucoup trop grande, et nous avons réduit ces boîtes afin qu'il soit évident lorsqu'on atteint un point provoquant un changement de mise en page drastique.

  Lorsque la troisième et la quatrième boîtes apparaissent à l'écran, leur taille est recalculée, ce qui réduit la hauteur de la boîte et de son parent.
  L'effet est que le curseur de défilement saute vers le bas de la page (nous avons en fait défilé davantage à l'intérieur de la boîte que prévu) et que la barre de défilement devient plus longue, car l'ensemble de la page est moins haut que prévu.

- Les dernières boîtes ont `auto none`, donc elles ont une taille estimée nulle.
  Lorsqu'elles apparaissent à l'écran, la taille de l'élément et de son parent est recalculée pour être beaucoup plus grande, si bien que la barre de défilement diminue et remonte.

Après avoir défilé jusqu'en bas, vous pouvez ensuite faire défiler la page vers le haut et vers le bas en douceur, car l'utilisation de `content-visibility: auto` enregistre la taille réellement rendue de l'élément pour la prochaine fois où il s'affichera.

{{EmbedLiveSample("Utiliser des paires de valeurs automatiques pour la taille intrinsèque", 800, 400)}}

### Définir la taille intrinsèque

Cet exemple fournit des listes de sélection qui peuvent être utilisées pour modifier `contain-intrinsic-size`, `content-visibility` et `contain` sur un élément afin d'observer l'effet des différents réglages.

#### CSS

```css
#contained_element {
  border: 2px solid green;
  width: 120px;
}
.child_element {
  border: 1px solid red;
  background: blue;
  height: 50px;
  width: 150px;
}
```

#### JavaScript

Le code ci-dessous ajoute des styles à l'élément contenant, et les supprime, en fonction des options sélectionnées.

```js
const containedElement = document.querySelector("#contained_element");
const intrinsicSizeSelector = document.querySelector(
  "#contain_intrinsic_size_selector",
);
const containSelector = document.querySelector("#contain_selector");
const contentVisibilitySelector = document.querySelector(
  "#content_visibility_selector",
);

containedElement.style["contain-intrinsic-size"] =
  intrinsicSizeSelector.options[intrinsicSizeSelector.selectedIndex].text;
containedElement.style["contain"] =
  containSelector.options[containSelector.selectedIndex].text;
containedElement.style["content-visibility"] =
  contentVisibilitySelector.options[
    contentVisibilitySelector.selectedIndex
  ].text;

intrinsicSizeSelector.addEventListener("change", () => {
  containedElement.style["contain-intrinsic-size"] =
    intrinsicSizeSelector.options[intrinsicSizeSelector.selectedIndex].text;
});

containSelector.addEventListener("change", () => {
  containedElement.style["contain"] =
    containSelector.options[containSelector.selectedIndex].text;
});

contentVisibilitySelector.addEventListener("change", () => {
  containedElement.style["content-visibility"] =
    contentVisibilitySelector.options[
      contentVisibilitySelector.selectedIndex
    ].text;
});
```

#### HTML

Le HTML définit deux boutons, un élément conteneur qui est soumis à la compartimentation via la propriété `content-visibility`.

```html
<p>
  <label for="contain_intrinsic_size_selector">contain-intrinsic-size:</label>
  <select id="contain_intrinsic_size_selector">
    <option>none</option>
    <option>40px 130px</option>
    <option>auto 40px auto 130px</option></select
  >;<br />

  <label for="contain_selector">contain:</label>
  <select id="contain_selector">
    <option>none</option>
    <option>size</option>
    <option>strict</option></select
  >;<br />

  <label for="content_visibility_selector">content-visibility:</label>
  <select id="content_visibility_selector">
    <option>visible</option>
    <option>auto</option>
    <option>hidden</option></select
  >;
</p>

<div id="contained_element">
  <div class="child_element"></div>
</div>
```

#### Résultat

Utilisez les sélecteurs pour appliquer les styles donnés à l'élément HTML `div` contenant.
Notez que lorsque `content-visibility` est `visible` ou `auto`, modifier `contain-intrinsic-size` ne fait aucune différence.
En revanche, si le contenu est masqué, définir `contain-intrinsic-size` sur `none` contracte l'élément parent comme si son élément enfant n'avait aucune taille.

{{EmbedLiveSample("Définir la taille intrinsèque", "100%", 170)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{CSSxRef("contain-intrinsic-block-size")}}
- La propriété {{CSSxRef("contain-intrinsic-inline-size")}}
- [Utiliser la compartimentation CSS](/fr/docs/Web/CSS/Guides/Containment/Using)
- Le module [de compartimentation CSS](/fr/docs/Web/CSS/Guides/Containment)
- [content-visibility&nbsp;: la nouvelle propriété CSS qui améliore vos performances de rendu](https://web.dev/articles/content-visibility?hl=fr) (web.dev)
