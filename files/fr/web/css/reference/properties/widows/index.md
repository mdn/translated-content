---
title: widows
slug: Web/CSS/Reference/Properties/widows
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

La propriété [CSS](/fr/docs/Web/CSS) **`widows`** définit le nombre minimum de lignes qui peuvent être laissées en haut de [la page](/fr/docs/Web/CSS/Guides/Paged_media), la région ou [la colonne](/fr/docs/Web/CSS/Guides/Multicol_layout).

En typographie, une _veuve_ est la dernière ligne d'un paragraphe qui apparaît seule en haut d'une page. (Le paragraphe se poursuit à partir d'une page précédente.)

## Syntaxe

```css
/* Valeurs de type <integer> */
widows: 2;
widows: 3;

/* Valeurs globales */
widows: inherit;
widows: initial;
widows: revert;
widows: revert-layer;
widows: unset;
```

### Valeurs

- {{CSSxRef("&lt;integer&gt;")}}
  - : Cet entier indique le nombre minimum de lignes qui peuvent apparaître en haut d'une nouvelle page, région ou colonne lorsqu'une rupture intervient. Si la valeur est négative, la déclaration est invalide.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemple

### Contrôler les lignes veuves dans les colonnes

#### HTML

```html
<div>
  <p>Un premier paragraphe avec un peu de texte.</p>
  <p>
    Un deuxième paragraphe avec un peu plus de texte et qui permet d'illustrer
    le fonctionnement de widows.
  </p>
  <p>
    Enfin, un troisième paragraphe avec un peu plus de texte que le premier.
  </p>
</div>
```

#### CSS

```css
div {
  background-color: #8cffa0;
  columns: 3;
  widows: 2;
}

p {
  background-color: #8ca0ff;
}

p:first-child {
  margin-top: 0;
}
```

#### Résultat

{{EmbedLiveSample("Exemple", 400, 160)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{CSSxRef("orphans")}}
- [Les médias paginés](/fr/docs/Web/CSS/Guides/Paged_media)
