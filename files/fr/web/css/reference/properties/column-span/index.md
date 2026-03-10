---
title: column-span
slug: Web/CSS/Reference/Properties/column-span
l10n:
  sourceCommit: 46a4425d4b7160129fd4c8d0f684ccd0617326b7
---

La propriété [CSS](/fr/docs/Web/CSS) **`column-span`** permet à un élément de s'étendre sur l'ensemble des colonnes lorsque sa valeur est `all`.

{{InteractiveExample("Démonstration CSS&nbsp;: column-span")}}

```css interactive-example-choice
column-span: none;
```

```css interactive-example-choice
column-span: all;
```

```html interactive-example
<section id="default-example">
  <div class="multicol-element">
    <p>
      Londres. Le trimestre de Michaelmas venait de se terminer, et le lord
      chancelier siégeait dans la salle de Lincoln's Inn.
    </p>
    <div id="example-element">Étendue&nbsp;?</div>
    <p>
      Un novembre implacable. Tant de boue dans les rues comme si les eaux
      venaient tout juste de se retirer de la surface de la terre, et il ne
      serait pas étonnant de rencontrer un Megalosaurus, quarante pieds de long
      environ, se dandinant comme un lézard éléphantesque en montant Holborn
      Hill.
    </p>
  </div>
</section>
```

```css interactive-example
.multicol-element {
  width: 100%;
  text-align: left;
  column-count: 3;
}

.multicol-element p {
  margin: 0;
}

#example-element {
  background-color: rebeccapurple;
  padding: 10px;
  color: white;
}
```

## Syntaxe

```css
/* Valeurs avec un mot-clé */
column-span: none;
column-span: all;

/* Valeurs globales */
column-span: inherit;
column-span: initial;
column-span: revert;
column-span: revert-layer;
column-span: unset;
```

La propriété `column-span` est définie par l'une des valeurs listées ci‑dessous.

### Valeurs

- `none`
  - : L'élément ne s'étend pas sur plusieurs colonnes.
- `all`
  - : L'élément s'étend sur l'ensemble des colonnes. Le contenu du flux normal apparaissant avant l'élément est équilibré entre toutes les colonnes de façon automatique. L'élément établit un nouveau bloc de contexte de formatage.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Faire en sorte qu'un titre s'étende sur toutes les colonnes

Dans cet exemple, le titre s'étend sur l'ensemble des colonnes de l'article.

#### HTML

```html
<article>
  <h2>Titre s'étendant sur toutes les colonnes</h2>
  <p>
    Le h2 doit s'étendre sur toutes les colonnes. Le reste du texte doit être
    réparti entre les colonnes.
  </p>
  <p>
    Ceci est un bloc de texte réparti en trois colonnes grâce à la propriété CSS
    `columns`. Le texte est réparti de façon égale entre les colonnes.
  </p>
  <p>
    Ceci est un bloc de texte réparti en trois colonnes grâce à la propriété CSS
    `columns`. Le texte est réparti de façon égale entre les colonnes.
  </p>
  <p>
    Ceci est un bloc de texte réparti en trois colonnes grâce à la propriété CSS
    `columns`. Le texte est réparti de façon égale entre les colonnes.
  </p>
  <p>
    Ceci est un bloc de texte réparti en trois colonnes grâce à la propriété CSS
    `columns`. Le texte est réparti de façon égale entre les colonnes.
  </p>
</article>
```

#### CSS

```css
article {
  columns: 3;
}

h2 {
  column-span: all;
}
```

#### Résultat

{{EmbedLiveSample("Faire en sorte qu'un titre s'étende sur toutes les colonnes", "auto", 260)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Étendre et équilibrer les colonnes](/fr/docs/Web/CSS/Guides/Multicol_layout/Spanning_balancing_columns)
- [Éléments en ligne](/fr/docs/Glossary/Inline-level_content)
- L'interface API {{DOMxRef("HTMLSpanElement")}}
