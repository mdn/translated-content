---
title: ":local-link"
slug: Web/CSS/:local-link
---

{{CSSRef}}

La [pseudo-classe](/fr/docs/Web/CSS/Pseudo-classes) [CSS](/fr/docs/Web/CSS) **`:local-link`** représente un lien vers le même document. Il s'agit donc d'un élément qui est l'ancre source d'un lien hypertexte dont la cible est une URL absolue correspondant à l'URL du document contenant l'élément.

```css
/* Sélectionne n'importe quel <a> ciblant le document courant */
a:local-link {
  color: green;
}
```

## Syntaxe

{{csssyntax}}

## Exemples

### HTML

```html
<a href="#target">Voici un lien vers la page courante.</a><br />
<a href="https://example.com">Voici un lien externe</a><br />
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

- Pseudo-classes relatives aux liens&nbsp;: {{cssxref(":link")}}, {{cssxref(":visited")}}, {{cssxref(":hover")}}, {{cssxref(":active")}}
