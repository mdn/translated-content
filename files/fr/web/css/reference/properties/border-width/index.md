---
title: border-width
slug: Web/CSS/Reference/Properties/border-width
l10n:
  sourceCommit: 1dbba9f7a2c2e35c6e01e8a63159e2aac64b601b
---

La [propriété raccourcie](/fr/docs/Web/CSS/Guides/Cascade/Shorthand_properties) [CSS](/fr/docs/Web/CSS) **`border-width`** permet de définir l'épaisseur de la bordure d'un élément.

{{InteractiveExample("Démonstration CSS&nbsp;: border-width")}}

```css interactive-example-choice
border-width: thick;
```

```css interactive-example-choice
border-width: 1em;
```

```css interactive-example-choice
border-width: 4px 1.25em;
```

```css interactive-example-choice
border-width: 2ex 1.25ex 0.5ex;
```

```css interactive-example-choice
border-width: 0 4px 8px 12px;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element">
    Ceci est une boîte avec une bordure autour.
  </div>
</section>
```

```css interactive-example
#example-element {
  background-color: palegreen;
  color: black;
  border: 0 solid crimson;
  padding: 0.75em;
  width: 80%;
  height: 100px;
}
```

## Syntaxe

```css
/* Valeurs avec un mot-clé */
border-width: thin;
border-width: medium;
border-width: thick;

/* Valeur de type <length> */
border-width: 5px;

/* haut et bas | gauche et droite */
border-width: 2px 1.5em;

/* haut | gauche et droite | bas */
border-width: 1px 2em 1.5cm;

/* haut | droite | bas | gauche */
border-width: 1px 2em 0 4rem;

/* Valeurs globales */
border-width: inherit;
border-width: initial;
border-width: revert;
border-width: revert-layer;
border-width: unset;
```

La propriété `border-width` peut être définie avec une, deux, trois ou quatre valeurs.

- Lorsqu'**une** valeur est fournie, elle s'applique comme largeur à **tous les côtés**.
- Lorsque **deux** valeurs sont fournies, la première largeur s'applique au **haut et au bas**, la seconde à la **gauche et à la droite**.
- Lorsque **trois** valeurs sont fournies, la première largeur s'applique au **haut**, la deuxième à la **gauche et à la droite**, la troisième au **bas**.
- Lorsque **quatre** valeurs sont fournies, les largeurs s'appliquent au **haut**, à la **droite**, au **bas** et à la **gauche** dans cet ordre (sens des aiguilles d'une montre).

### Valeurs

- `<line-width>`
  - : Une valeur de longueur ({{CSSxRef("&lt;length&gt;")}}) ou un mot-clé indiquant l'épaisseur de la bordure. Le mot-clé doit être l'une des valeurs suivantes&nbsp;:
    - `thin` (fin)
    - `medium` (intermédiaire)
    - `thick` (épais)

> [!NOTE]
> La spécification ne définit pas précisément l'épaisseur correspondante à chacun de ces mots-clés, les rendant dépendants de l'implémentation. Toutefois, la spécification indique que l'épaisseur doit suivre la relation d'inégalité suivante : `thin ≤ medium ≤ thick` et que les valeurs pour chaque mot-clé doivent être constantes pour un même document.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Mélange de valeurs et de longueurs

#### HTML

```html
<p id="une-valeur">Une valeur : la bordure fait 6px sur les 4 côtés.</p>

<p id="deux-valeurs">
  Deux valeurs différentes : elle fait 2px en haut et en bas et elle mesure 10px
  pour les bords droit et gauche.
</p>

<p id="trois-valeurs">
  Trois valeurs différentes : 0.3em pour le haut, 9px pour le bas et zéro pour
  la droite et la gauche.
</p>

<p id="quatre-valeurs">
  Quatre valeurs différentes : "thin" pour le haut, "medium" pour la droite,
  "thick" pour le bas et 1em pour la gauche.
</p>
```

#### CSS

```css
#une-valeur {
  border: ridge #cccccc;
  border-width: 6px;
}

#deux-valeurs {
  border: solid red;
  border-width: 2px 10px;
}

#trois-valeurs {
  border: dotted orange;
  border-width: 0.3em 0 9px;
}

#quatre-valeurs {
  border: solid lightgreen;
  border-width: thin medium thick 1em;
}

p {
  width: auto;
  margin: 0.25em;
  padding: 0.25em;
}
```

#### Résultat

{{EmbedLiveSample("Mélange de valeurs et de longueurs", 320, 320)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les propriétés raccourcies liées aux bordures&nbsp;: {{CSSxRef("border")}}, {{CSSxRef("border-style")}}, {{CSSxRef("border-color")}}
- Les propriétés liées à la largeur des bordures&nbsp;: {{CSSxRef("border-bottom-width")}}, {{CSSxRef("border-left-width")}}, {{CSSxRef("border-right-width")}}, {{CSSxRef("border-top-width")}}
