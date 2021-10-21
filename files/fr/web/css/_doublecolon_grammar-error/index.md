---
title: '::grammar-error'
slug: Web/CSS/::grammar-error
tags:
  - CSS
  - Experimental
  - Pseudo-element
  - Reference
translation_of: Web/CSS/::grammar-error
---
{{CSSRef}}{{SeeCompatTable}}

Le pseudo-élément CSS **`::grammar-error`** représente une portion de texte que le navigateur signale comme contenant une ou plusieurs erreurs de grammaire.

```css
::grammar-error {
  color: green;
}
```

## Propriétés autorisées

Seul un sous-ensemble restreint de propriétés CSS peut être utilisé dans une règle contenant `::grammar-error` :

- {{cssxref("background-color")}},
- {{cssxref("caret-color")}},
- {{cssxref("color")}},
- {{cssxref("cursor")}},
- {{cssxref("outline")}} et les propriétés détaillées associées,
- {{cssxref("text-decoration")}} et les propriétés détaillées associées.
- {{cssxref("text-emphasis-color")}},
- {{cssxref("text-shadow")}}

## Syntaxe

    ::grammar-error

## Exemples

### CSS

```css
p::grammar-error { color:red }
```

### HTML

```html
<p>
  Alice devina tout de suite qu’il chercher l’éventail
  et la paire de gants.
</p>
```

### Résultat

{{EmbedLiveSample("Exemples","250","100")}}

## Spécifications

| Spécification                                                                                                    | État                                         | Commentaires        |
| ---------------------------------------------------------------------------------------------------------------- | -------------------------------------------- | ------------------- |
| {{SpecName('CSS4 Pseudo-Elements', '#selectordef-grammar-error', '::grammar-error')}} | {{Spec2('CSS4 Pseudo-Elements')}} | Définition initiale |

## Compatibilité des navigateurs

{{Compat("css.selectors.grammar-error")}}

## Voir aussi

- {{cssxref("::spelling-error")}}
