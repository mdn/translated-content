---
title: text-decoration-style
slug: Web/CSS/text-decoration-style
---

{{CSSRef}}

La propriété **`text-decoration-style`** définit le style appliqué sur les lignes visées par {{cssxref("text-decoration-line")}}. Le style s'applique à toutes les lignes définies avec `text-decoration-line`.

> **Note :** Il n'existe pas de méthode permettant de mettre en forme les lignes décorées différemment les unes des autres.

{{EmbedInteractiveExample("pages/css/text-decoration-style.html")}}

Si la mise en forme appliquée possède une sémantique forte (par exemple barrer le texte pour indiquer qu'il a été supprimé), on recommande aux auteurs d'utiliser les balises HTML associées si elles existent (par exemple {{HTMLElement("del")}} ou {{HTMLElement("s")}}). Les navigateurs peuvent parfois désactiver la mise en forme et ces éléments permettent de conserver la sémantique du contenu quoi qu'il arrive.

La propriété raccourcie {{cssxref("text-decoration")}} permet de paramétrer cette propriété et d'autres propriétés associées aux décorations.

## Syntaxe

```css
/* Valeurs avec des mots-clés */
text-decoration-style: solid;
text-decoration-style: double;
text-decoration-style: dotted;
text-decoration-style: dashed;
text-decoration-style: wavy;

/* Valeurs globales */
text-decoration-style: inherit;
text-decoration-style: initial;
text-decoration-style: unset;
```

### Valeurs

- `solid`
  - : Dessine une ligne.
- `double`
  - : Dessine une double-ligne.
- `dotted`
  - : Dessiner une ligne avec des points.
- `dashed`
  - : Dessine une ligne avec des tirets.
- `wavy`
  - : Dessine une ligne ondulée.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### CSS

```css
.exemple {
  -moz-text-decoration-line: underline;
  -moz-text-decoration-style: wavy;
  -moz-text-decoration-color: red;
  -webkit-text-decoration-line: underline;
  -webkit-text-decoration-style: wavy;
  -webkit-text-decoration-color: red;
  text-decoration-line: underline;
  text-decoration-style: wavy;
  text-decoration-color: red;
}
```

### HTML

```html
<p class="exemple">Et voilà le résultat.</p>
```

### Résultat

{{EmbedLiveSample('Exemples')}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété raccourcie {{cssxref("text-decoration")}} qui permet, entre autres, de paramétrer `text-decoration-style`.
