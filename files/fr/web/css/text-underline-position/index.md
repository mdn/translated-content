---
title: text-underline-position
slug: Web/CSS/text-underline-position
tags:
  - CSS
  - Propriété
  - Reference
translation_of: Web/CSS/text-underline-position
---
{{CSSRef}}

La propriété **`text-underline-position`** définit la position du soulignement utilisé lorsque la propriété {{cssxref("text-decoration")}} prend la valeur `underline`.

```css
/* Avec un mot-clé */
text-underline-position: auto;
text-underline-position: under;
text-underline-position: left;
text-underline-position: right;

/* Avec plusieurs mots-clés */
text-underline-position: under left;
text-underline-position: right under;

/* Valeurs globales */
text-underline-position: inherit;
text-underline-position: initial;
text-underline-position: unset;
```

Cette propriété est héritée sur les différents éléments et n'est pas réinitialisée avec la propriété raccourcie {{cssxref("text-decoration")}}, ce qui permet de la définir simplement pour l'ensemble du document.

```css
:root {
  /* Une meilleure règle par défaut pour un document */
  /* avec de nombreuses formules chimiques */
  text-underline-position: under;
}
```

## Syntaxe

### Valeurs

- `auto`
  - : Ce mot-clé permet à l'agent utilisateur d'utiliser un algorithme pour choisir entre `under` et `alphabetic`.
- `under`
  - : Ce mot-clé force la ligne à se situer sous la ligne de base, à une position où elle ne traversera pas de [jambage](https://fr.wikipedia.org/wiki/Jambage). Cela est notamment utile lorsqu'on veut souligner de façon lisible des formules chimiques ou mathématiques (qui utilisent fréquemment des indices).
- `left`
  - : In vertical writing-modes, this keyword forces the line to be placed on the _left_ of the characters. In horizontal writing-modes, it is a synonym of `under.`
- `right`
  - : Pour les modes d'écritures verticaux, ce mot-clé force la ligne à être placée à droite des caractères. Pour les modes d'écritures horizontaux, ce mot-clé est synonyme de `under.`
- `auto-pos`{{non-standard_inline}}
  - : Ce mot-clé est synonyme de `auto` et c'est ce dernier qui doit être utilisé à la place.
- `above`{{non-standard_inline}}
  - : Ce mot-clé force la ligne à être dessinée au dessus du texte. Lorsqu'on écrit avec un script d'Asie orientale, la valeur `auto` aura un effet semblable.
- `below`{{non-standard_inline}}
  - : Ce mot-clé force la ligne à être dessinée sous le texte. Lorsqu'on utilise un texte alphabétique, la valeur `auto` aura un effet semblable.

### Syntaxe formelle

{{csssyntax}}

## Exemples

### HTML

```html
<p class="chimique">
  C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>
</p>
<p class="defaut">
  Et là avec des <sub>indices</sub>
  et du jambage
</p>
```

### CSS

```css
.chimique {
  text-decoration: underline;
  text-underline-position: under;
}

.defaut {
  text-decoration: underline;
  text-underline-position: auto;
}
```

### Résultat

{{EmbedLiveSample("Exemples","100%","100%")}}

## Spécifications

| Spécification                                                                                                                        | Statut                                       | Commentaires         |
| ------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------- | -------------------- |
| {{SpecName('CSS3 Text Decoration', '#text-underline-position-property', 'text-underline-position')}} | {{Spec2('CSS3 Text Decoration')}} | Définition initiale. |

{{cssinfo}}

## Compatibilité des navigateurs

{{Compat("css.properties.text-underline-position")}}

## Voir aussi

- {{cssxref("text-decoration")}}
- {{cssxref("text-decoration-line")}}
- {{cssxref("text-decoration-style")}}
- {{cssxref("text-decoration-color")}}
- [La documentation sur les valeurs non-standard utilisées par Microsoft](https://msdn.microsoft.com/en-us/library/ie/ms531176%28v=vs.85%29.aspx)
