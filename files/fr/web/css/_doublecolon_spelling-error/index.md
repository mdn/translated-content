---
title: '::spelling-error'
slug: Web/CSS/::spelling-error
tags:
  - CSS
  - Experimental
  - Pseudo-element
  - Reference
translation_of: Web/CSS/::spelling-error
---
{{CSSRef}}{{SeeCompatTable}}

Le pseudo-élément **`::spelling-error`** représente une portion de texte que le navigateur signale comme étant mal orthographiée.

```css
::spelling-error {
  color: red;
}
```

## Propriétés autoriséees

Seul un sous-ensemble restreint de propriétés CSS peut être utilisé dans une règle dont le sélecteur contient `::spelling-error` :

- {{cssxref("color")}},
- {{cssxref("background-color")}},
- {{cssxref("cursor")}},
- {{cssxref("caret-color")}}
- {{cssxref("outline")}} et les propriétés détaillées correspondantes,
- {{cssxref("text-decoration")}} et les propriétés détaillées correspondantes.
- {{cssxref("text-emphasis-color")}},
- {{cssxref("text-shadow")}}

## Syntaxe

    ::spelling-error

## Exemples

### CSS

```css
p::spelling-error { color:red }
```

### HTML

```html
<p>
  Alice devina tout de suite qu’il cherch l’éventail
  et la paire de gants.
</p>
```

### Résultat

{{EmbedLiveSample("Exemples","250","100")}}

## Spécifications

| Spécification                                                                                                        | État                                         | Commentaires        |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- | ------------------- |
| {{SpecName('CSS4 Pseudo-Elements', '#selectordef-spelling-error', '::spelling-error')}} | {{Spec2('CSS4 Pseudo-Elements')}} | Définition initiale |

## Compatibilité des navigateurs

{{Compat("css.selectors.spelling-error")}}

## Voir aussi

- {{cssxref("::grammar-error")}}
