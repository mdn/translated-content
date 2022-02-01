---
title: text-decoration
slug: Web/CSS/text-decoration
tags:
  - CSS
  - Propriété
  - Propriété raccourcie
  - Reference
translation_of: Web/CSS/text-decoration
---
{{CSSRef}}

La propriété **`text-decoration`** est utilisée pour « décorer » le texte en ajoutant une ligne pouvant être positionnée sous, sur ou à travers le texte. C'est une [propriété raccourcie](/fr/docs/Web/CSS/Propri%C3%A9t%C3%A9s_raccourcies) qui permet de paramétrer simultanément les propriétés « détaillées » : {{cssxref("text-decoration-line")}}, {{cssxref("text-decoration-color")}} et {{cssxref("text-decoration-style")}}.

{{EmbedInteractiveExample("pages/css/text-decoration.html")}}Ces décorations se propagent sur les différents éléments enfants. Cela signifie qu'il n'est pas possible de désactiver la décoration d'un élément descendant pour lequel un ancêtre est décoré. Par exemple, avec ce fragment de HTML `<p>Ce texte a <em> des mots mis en avant</em> dedans.</p>`, et cette règle CSS `p { text-decoration: underline; }`, on aura tout le  paragraphe souligné, même si on applique la règle `em { text-decoration: none; }`, cela n'aurait aucun impact. En revanche, ajouter la règle `em { text-decoration: overline; }` entraînerait un cumul des décorations pour « des mots mis en avant ».

> **Note :** La spécification CSS Text Decoration de niveau 3 indique que cette propriété est une propriété raccourcie pour les trois propriétés {{cssxref("text-decoration-color")}}, {{cssxref("text-decoration-line")}} et {{cssxref("text-decoration-style")}}. Comme pour les autres propriétés raccourcies, cela signifie que la valeur de chaque « sous-propriété » est réinitialisée avec sa valeur par défaut si elle n'est pas explicitement définie dans la propriété raccourcie.

## Syntaxe

```css
/* Valeurs avec mots-clés */
text-decoration: none;                 /* Aucune décoration */
text-decoration: underline red;        /* On souligne en rouge */
text-decoration: underline wavy red;   /* On souligne en rouge avec */
                                       /* une ligne ondulée */

/* Valeurs globales */
text-decoration: inherit;
text-decoration: initial;
text-decoration: unset;
```

### Valeurs

- {{cssxref("text-decoration-line")}}
  - : Cette valeur indique le type de décoration utilisée.
- {{cssxref("text-decoration-color")}}
  - : Cette valeur indique la couleur de la décoration utilisée.
- {{cssxref("text-decoration-style")}}
  - : Cette valeur indique le style à utiliser pour la décoration.

### Syntaxe formelle

{{csssyntax}}

## Exemples

### CSS

```css
.under {
  text-decoration: underline red;
}

.over {
  text-decoration: wavy overline lime;
}

.line {
  text-decoration: line-through;
}

.plain {
  text-decoration: none;
}

.underover {
  text-decoration: dashed underline overline;
}

.blink {
  text-decoration: blink;
}
```

### HTML

```html
<p class="under">Ce texte a une ligne en dessous.</p>
<p class="over">Ce texte a une ligne au dessus.</p>
<p class="line">Ce texte est barré d'une ligne.</p>
<p>Ce <a class="plain" href="#">lien ne sera pas souligné</a>,
    comme les liens le sont normalement. Attention à ces décorations
    sur les ancres cars le soulignement sert souvent d'indication pour
    un hyperlien.</p>
<p class="underover">Ce texte a des lignes en dessous et au dessus.</p>
<p class="blink">Ce texte peut clignoter selon le navigateur utilisé.</p>
```

### Résultat

{{EmbedLiveSample('Exemples','auto','280')}}

## Spécifications

| Spécification                                                                                                    | État                                         | Commentaires                                                                                                                     |
| ---------------------------------------------------------------------------------------------------------------- | -------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('CSS3 Text Decoration', '#text-decoration-property', 'text-decoration')}} | {{Spec2('CSS3 Text Decoration')}} | Transformée comme une propriété raccourcie. Ajout du support pour la valeur de {{cssxref('text-decoration-style')}}. |
| {{SpecName('CSS2.1', 'text.html#lining-striking-props', 'text-decoration')}}             | {{Spec2('CSS2.1')}}                     | Pas de changement significatif.                                                                                                  |
| {{SpecName('CSS1', '#text-decoration', 'text-decoration')}}                                 | {{Spec2('CSS1')}}                     | Définition initiale.                                                                                                             |

{{cssinfo}}

## Compatibilité des navigateurs

{{Compat("css.properties.text-decoration")}}

## Voir aussi

- L'attribut {{cssxref("list-style")}} qui contrôle la façon dont les éléments apparaissent dans les listes HTML {{HTMLElement("ol")}} et {{HTMLElement("ul")}}.
- Les propriétés détaillées associées à cette propriété raccourcie :

  - {{cssxref("text-decoration-line")}}
  - {{cssxref("text-decoration-color")}}
  - {{cssxref("text-decoration-style")}}.
