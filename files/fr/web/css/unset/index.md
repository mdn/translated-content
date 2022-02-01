---
title: unset
slug: Web/CSS/unset
tags:
  - CSS
  - Mot-clé
  - Reference
  - Web
translation_of: Web/CSS/unset
---
{{CSSRef}}

Le mot-clé **`unset`** correspond à la combinaison des mots-clés {{cssxref("initial")}} et {{cssxref("inherit")}}. Comme les autres mots-clés globaux à tout CSS, il peut être utilisé pour n'importe quelle propriété CSS, y compris la propriété raccourcie {{cssxref("all")}}. Ce mot-clé _réinitialise_ la propriété afin que sa valeur soit la valeur héritée depuis l'élément parent ou soit la valeur initiale (s'il n'y a pas d'héritage). Autrement dit, s'il y a de l'héritage, ce mot-clé se comporte comme `inherit`, sinon, il se comporte comme `initial`.

## Exemples

### Avec `color`

#### CSS

```css
p {
  color: red;
}

#sidebar p {
  color: unset;
}
```

#### HTML

```html
<p>This text is red</p>
<div id="sidebar">
  <p>This text has the default color</p>
</div>
```

#### Résultat

{{EmbedLiveSample('Avec_color', '100%', '120')}}

### Avec `border`

#### CSS

```css
div {
  border: 1px solid green;
}

p {
  border: 1px solid red;
}

.truc p {
  border-color: unset;
}
```

#### HTML

```html
<p>Ce texte a une bordure rouge.</p>
<div class="toto">
  <p>Ce texte a une bordure rouge</p>
</div>
<div class="truc">
  <p>Ce texte a une bordure noire (la valeur initiale, non héritée)</p>
</div>
```

#### Résultat

{{EmbedLiveSample('Avec_border','100%','200')}}

## Spécifications

| Spécification                                                                | État                             | Commentaires                    |
| ---------------------------------------------------------------------------- | -------------------------------- | ------------------------------- |
| {{SpecName('CSS4 Cascade', '#inherit-initial', 'unset')}} | {{Spec2('CSS4 Cascade')}} | Aucun changement depuis Level 3 |
| {{SpecName('CSS3 Cascade', '#inherit-initial', 'unset')}} | {{Spec2('CSS3 Cascade')}} | Définition initiale             |

## Compatibilité des navigateurs

{{Compat("css.types.global_keywords.unset")}}

## Voir aussi

- Les valeurs globales qui peuvent s'appliquer pour toutes les propriétés CSS :

  - {{cssxref("initial")}},
  - {{cssxref("inherit")}},
  - {{cssxref("unset")}},
  - {{cssxref("revert")}}.

- La propriété {{cssxref("all")}} est une propriété raccourcie qui permet de réinitialiser l'ensemble des propriétés avec leurs valeurs initiales, héritées, annulées ou indéfinies.
