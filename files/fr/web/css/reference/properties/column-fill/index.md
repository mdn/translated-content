---
title: column-fill
slug: Web/CSS/Reference/Properties/column-fill
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

La propriété [CSS](/fr/docs/Web/CSS) **`column-fill`** contrôle la manière dont le contenu d'un élément est équilibré lorsqu'il est réparti en colonnes.

{{InteractiveExample("Démonstration CSS&nbsp;: column-fill")}}

```css interactive-example-choice
column-fill: auto;
```

```css interactive-example-choice
column-fill: balance;
```

```html interactive-example
<section id="default-example">
  <p id="example-element">
    Londres. Le trimestre de Michaelmas venait de se terminer, et le lord
    chancelier siégeait dans la salle de Lincoln's Inn. Un novembre implacable.
  </p>
</section>
```

```css interactive-example
#example-element {
  width: 100%;
  height: 90%;
  columns: 3;
  text-align: left;
}
```

## Syntaxe

```css
/* Valeurs avec un mot-clé */
column-fill: auto;
column-fill: balance;

/* Valeurs globales */
column-fill: inherit;
column-fill: initial;
column-fill: revert;
column-fill: revert-layer;
column-fill: unset;
```

La propriété `column-fill` est définie par l'un des mots-clés listés ci-dessous. La valeur initiale est `balance`, de sorte que le contenu est équilibré entre les colonnes.

### Valeurs

- `auto`
  - : Un mot-clé indiquant que les colonnes sont remplies dans l'ordre.
- `balance`
  - : Un mot-clé indiquant que le contenu doit être équitablement réparti entre les colonnes. Pour les médias paginés, seule la dernière page est équilibrée.

La spécification définit la valeur `balance-all`, dans laquelle le contenu est réparti également entre les colonnes dans des contextes fragmentés, tels que [les médias paginés](/fr/docs/Web/CSS/Guides/Paged_media). Cette valeur n'est pas encore prise en charge par les navigateurs.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Équilibrer le contenu des colonnes

#### HTML

```html
<p class="fill-auto">
  Ce paragraphe remplit les colonnes une par une. Comme tout le texte tient dans
  la première colonne, les autres restent vides.
</p>

<p class="fill-balance">
  Ce paragraphe tente d'équilibrer la quantité de contenu dans chaque colonne.
</p>
```

#### CSS

```css
p {
  height: 7em;
  background: #ffff99;
  columns: 3;
  column-rule: 1px solid;
}

p.fill-auto {
  column-fill: auto;
}

p.fill-balance {
  column-fill: balance;
}
```

### Résultat

{{EmbedLiveSample("Équilibrer le contenu des colonnes", "auto", 320)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

> [!WARNING]
> Il existe des problèmes d'interopérabilité et des bogues concernant `column-fill` entre les navigateurs, en raison de problèmes non résolus dans la spécification.
>
> En particulier, lorsqu'on utilise `column-fill: auto` pour remplir les colonnes séquentiellement, Chrome ne prend en compte cette propriété que si le conteneur multi-colonne possède une taille dans la dimension de bloc (par exemple, la hauteur en mode d'écriture horizontal). Firefox prend toujours en compte cette propriété, il remplit donc la première colonne avec l'intégralité du contenu lorsque aucune taille n'est définie.

## Voir aussi

- [Apprendre&nbsp;: Mise en page à colonnes multiples](/fr/docs/Learn_web_development/Core/CSS_layout/Multiple-column_Layout)
- La propriété {{CSSxRef("column-count")}}
- La propriété {{CSSxRef("column-width")}}
