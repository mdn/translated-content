---
title: :local-link
slug: Web/CSS/Reference/Selectors/:local-link
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{SeeCompatTable}}

La [pseudo-classe](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-classes) [CSS](/fr/docs/Web/CSS) **`:local-link`** représente un lien vers le même document. Il s'agit donc d'un élément qui est l'ancre source d'un lien hypertexte dont la cible est une URL absolue correspondant à l'URL du document contenant l'élément.

```css
/* Sélectionne n'importe quel <a> ciblant le document courant */
a:local-link {
  color: green;
}
```

## Syntaxe

```css
:local-link {
  /* ... */
}
```

## Exemples

### HTML

```html
<a href="#target">Voici un lien vers la page courante.</a><br />
<a href="https://example.fr">Voici un lien externe</a><br />
```

### CSS

```css
a:local-link {
  color: green;
}
```

### Résultat

{{EmbedLiveSample("Exemples")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

Cette fonctionnalité est une proposition intégrée dans la spécification. Actuellement, aucun navigateur ne la prend en charge.

## Voir aussi

- Pseudo-classes relatives aux liens&nbsp;:
  - {{CSSxRef(":link")}}
  - {{CSSxRef(":visited")}}
  - {{CSSxRef(":hover")}}
  - {{CSSxRef(":active")}}
- Le module des [sélecteurs CSS](/fr/docs/Web/CSS/Guides/Selectors)
