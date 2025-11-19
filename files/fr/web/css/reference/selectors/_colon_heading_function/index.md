---
title: :heading()
slug: Web/CSS/Reference/Selectors/:heading_function
original_slug: Web/CSS/:heading_function
l10n:
  sourceCommit: 1a1fe4efc4bfa6147f084aad12cf9908130f76ab
---

{{SeeCompatTable}}

La fonction de [pseudo-classe](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-classes) [CSS](/fr/docs/Web/CSS) **`:heading()`** représente tous les [éléments de titre](/fr/docs/Web/HTML/Reference/Elements/Heading_Elements) qui correspondent à une valeur calculée à l'aide de la notation `An+B`. Cela vous permet de mettre en forme des éléments à des niveaux de titre spécifiques en même temps, plutôt que de les correspondre et de les mettre en forme individuellement.

> [!NOTE]
> La fonction `:heading()` a la même [spécificité](/fr/docs/Web/CSS/Guides/Cascade/Specificity#how_is_specificity_calculated) qu'un sélecteur de classe, c'est-à-dire `0-1-0`. Ainsi, `:heading()` aurait une spécificité de `0-1-0`, et `section:heading()` aurait une spécificité de `0-1-1`.

## Syntaxe

```css-nolint
:heading([ <An+B> [, <An+B>]* | even | odd ]) {
  /* ... */
}
```

### Paramètres

La fonction pseudo-classe `:heading()` prend une liste séparée par des virgules d'expressions `An+B` ou de valeurs de mots-clés qui décrivent un modèle pour faire correspondre les éléments de titre.

#### Valeurs de mots-clés

- `odd`
  - : Représente les éléments de titre dont la position numérique est impaire&nbsp;: `<h1>`, `<h3>`, et `<h5>`.
- `even`
  - : Représente les éléments de titre dont la position numérique est paire&nbsp;: `<h2>`, `<h4>`, et `<h6>`.

#### Notation fonctionnelle

- `<An+B>`
  - : Représente les éléments de titre dont la position numérique correspond au modèle `An+B`, pour chaque valeur entière positive ou nulle de `n`, où&nbsp;:
    - `A` est une taille de pas entière,
    - `B` est un décalage entier,
    - `n` est tous les entiers non négatifs, à partir de 0.

    Cela peut être lu comme le `An+B`-ème élément d'une liste. Les valeurs de `A` et `B` doivent toutes deux avoir des valeurs {{cssxref("&lt;integer&gt;")}}.

## Remarques d'utilisation

La fonction pseudo-classe `:heading()` ne correspond qu'aux éléments qui sont sémantiquement reconnus comme des titres. Elle ne correspond pas aux éléments avec un attribut [`role="heading"`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/heading_role), ni ne respecte l'attribut ARIA ['aria-level'](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-level).

## Exemples

### Utilisation de paramètres de mots-clés

Dans cet exemple, le mot-clé `odd` correspond aux titres avec des niveaux impairs, qui sont `<h1>` et `<h3>`. Le mot-clé `even` est utilisé pour cibler les niveaux de titre pairs, `<h2>` et `<h4>`.

```html
<h1>Entête 1</h1>
<h2>Entête 2</h2>
<h3>Entête 3</h3>
<h4>Entête 4</h4>
```

```css
:heading(odd) {
  color: tomato;
}
:heading(even) {
  color: slateblue;
}
```

{{EmbedLiveSample("Utilisation_de_parametres_de_mots-cles", "", "215")}}

### Utilisation de la notation `An+B`

```html
<h1>Science</h1>
<h2>Physiques</h2>
<h3>Physique atomique, moléculaire et optique</h3>
<h4>Physique optique</h4>
<h5>Raysons X</h5>
<h6>Découverte</h6>
```

```css hidden
main {
  display: flex;
  justify-content: space-around;
}
```

```css
/* Cible les titres <h3> et <h4> */
:heading(3, 4) {
  font-weight: 100;
}
/* Cible les titres dans l'ordre inverse à partir de <h3> */
:heading(-n + 3) {
  color: tomato;
}
/* Cible chaque troisième titre à partir de <h1> */
:heading(3n + 1) {
  font-style: italic;
}
/* Cible les titres après le niveau 5 */
:heading(n + 5) {
  color: slateblue;
}
```

Dans cet exemple&nbsp;:

- `:heading(3, 4)` correspond aux éléments `<h3>` et `<h4>`
- `:heading(-n + 3)` correspond aux éléments de titre dans l'ordre inverse, donc `<h3>`, `<h2>` et `<h1>`
- `:heading(3n + 1)` correspond à chaque troisième élément de titre (`3n`) à partir de `<h1>`, donc cela inclurait `<h1>` et `<h4>`
- `:heading(n + 5)` correspond aux éléments de titre à partir de `<h5>` et inclura `<h6>`

{{EmbedLiveSample("Functional_notation_example", "", "292")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Le sélecteur {{CSSXRef(":heading")}}
