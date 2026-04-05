---
title: text-underline-offset
slug: Web/CSS/Reference/Properties/text-underline-offset
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

La propriété [CSS](/fr/docs/Web/CSS) **`text-underline-offset`** définit la distance de décalage d'une ligne de décoration de texte soulignée (appliquée à l'aide de {{CSSxRef("text-decoration")}}) par rapport à sa position originale.

{{InteractiveExample("Démonstration CSS&nbsp;: text-underline-offset")}}

```css interactive-example-choice
text-underline-offset: auto;
```

```css interactive-example-choice
text-underline-offset: 8px;
```

```css interactive-example-choice
text-underline-offset: -0.5rem;
```

```html interactive-example
<section id="default-example">
  <p id="example-element">Et après tout, nous ne sommes que des ordinaires</p>
</section>
```

```css interactive-example
p {
  font: 1.5em sans-serif;
  text-decoration-line: underline;
  text-decoration-color: red;
}
```

`text-underline-offset` ne fait pas partie de la propriété raccourcie {{CSSxRef('text-decoration')}}. Lorsqu'un élément peut avoir plusieurs lignes de `text-decoration`, `text-underline-offset` n'affecte que le soulignement, et **pas** les autres options de décoration de ligne possibles telles que `overline` ou `line-through`.

## Syntaxe

```css
/* Valeurs avec un mot-clé */
text-underline-offset: auto;

/* Valeurs de type <length> */
text-underline-offset: 0.1em;
text-underline-offset: 3px;

/* Valeurs de type <percentage> */
text-underline-offset: 20%;

/* Valeurs globales */
text-underline-offset: inherit;
text-underline-offset: initial;
text-underline-offset: revert;
text-underline-offset: revert-layer;
text-underline-offset: unset;
```

La propriété `text-underline-offset` est définie avec le mot-clé `none` ou avec une valeur de la liste suivante.

### Valeurs

- `auto`
  - : Le navigateur choisit un décalage approprié pour le soulignage.
- {{CSSxRef("&lt;length&gt;")}}
  - : Définit le décalage des soulignements en tant que longueur ({{CSSxRef("&lt;length&gt;")}}), remplaçant la suggestion du fichier de police et la valeur par défaut du navigateur. Il est recommandé d'utiliser des unités `em` afin que le décalage s'adapte à la taille de la police.
- {{CSSxRef("&lt;percentage&gt;")}}
  - : Définit le décalage des soulignements en tant que pourcentage ({{CSSxRef("&lt;percentage&gt;")}}) de **1em** dans la police de l'élément. Un pourcentage hérite en tant que valeur relative, et donc s'adapte aux changements de la police. Pour une application donnée de cette propriété, le décalage est constant sur toute la boîte à laquelle le soulignement est appliqué, même s'il y a des éléments enfants avec des tailles de police ou un alignement vertical différents.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Démonstration de `text-underline-offset`

```html
<p class="ligne-une">
  Voici un texte souligné avec une ligne ondulée rouge&nbsp;!
</p>
<br />
<p class="ligne-deux">
  Ce texte a des lignes à la fois au-dessus et en dessous. Seule la ligne du bas
  est décalée.
</p>
```

```css
p {
  text-decoration: underline wavy red;
  text-underline-offset: 1em;
}

.ligne-deux {
  text-decoration-color: purple;
  text-decoration-line: underline overline;
}
```

{{EmbedLiveSample("Démonstration de `text-underline-offset`")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{CSSxRef("text-decoration")}}
- La propriété {{CSSxRef("text-decoration-thickness")}}
