---
title: :-moz-only-whitespace
slug: Web/CSS/Reference/Selectors/:-moz-only-whitespace
l10n:
  sourceCommit: c52ed787442db9d65b21f5c2874fa6bfd08a253a
---

{{Non-standard_Header}}

> [!NOTE]
> Dans la spécification [CSS4 Selectors <sup>(angl.)</sup>](https://drafts.csswg.org/selectors-4/#the-empty-pseudo), le sélecteur {{CSSxRef(":empty")}} a été modifié pour se comporter comme `:-moz-only-whitespace` mais aucun navigateur ne prend actuellement en charge cette fonctionnalité.

La [pseudo-classe](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-classes) [CSS](/fr/docs/Web/CSS) **`:-moz-only-whitespace`** est un [extension de Mozilla](/fr/docs/Web/CSS/Reference/Mozilla_extensions) qui correspond aux éléments qui n'ont aucun nœud enfant, aux nœuds texte vides ou aux nœuds texte ne possédant que des espaces.

## Syntaxe

```css
:-moz-only-whitespace {
  /* ... */
}
```

## Exemples

### HTML

```html-nolint
<div> </div>
```

### CSS

```css
div {
  border: 4px solid red;
}

:-moz-only-whitespace {
  border-color: lime;
}
```

### Résultat

{{EmbedLiveSample("Exemples", "100%", "50")}}

## Spécifications

Définie brièvement comme `:blank` dans [Selectors Level 4 <sup>(angl.)</sup>](https://drafts.csswg.org/selectors-4/#changes-2018-02), mais cette fonctionnalité a ensuite été fusionnée avec {{CSSxRef(":empty")}} et {{CSSxRef(":blank")}} a été redéfinie pour signifier {{HTMLElement("input")}} vide.

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La pseudo-classe {{CSSxRef(":blank")}}
- La pseudo-classe {{CSSxRef(":empty")}}
