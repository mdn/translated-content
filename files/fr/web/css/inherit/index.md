---
title: inherit
slug: Web/CSS/inherit
tags:
  - CSS
  - Mot-clé
  - Reference
translation_of: Web/CSS/inherit
---
{{CSSRef}}

Le mot-clé **`inherit`** est une valeur qui peut être utilisée pour qu'une propriété prenne [la valeur calculée](/fr/docs/Web/CSS/Valeur_calculée) de la propriété pour l'élément parent. Cette valeur peut être utilisée sur n'importe quelle propriété CSS, y compris sur la propriété raccourcie {{cssxref("all")}}.

Pour [les propriétés héritées](/fr/docs/Web/CSS/Héritage#Propriétés_héritées "en/CSS/inheritance"), cela accentue le comportement par défaut et ce mot-clé n'est nécessaire que pour surcharger une autre règle.

Pour [les propriétés non-héritées](/fr/docs/Web/CSS/Héritage#Propriétés_non_héritées "en/CSS/inheritance"), cela permettra d'obtenir le comportement indiqué. Ce comportement a peu d'intérêt dans ces cas et mieux vaudra utiliser {{cssxref("initial")}} ou {{cssxref("unset")}}.

L'héritage provient toujours de l'élément parent par rapport à l'arbre du document, même si cet élément n'est pas le bloc englobant.

## Exemples

### CSS

```css
p {
  color: green;
}

.exemple {
  color: inherit;
}
```

### HTML

```html
<p>Alice remarqua, avec quelque surprise, qu’en
   tombant sur le plancher les cailloux se changeaient
   en petits gâteaux, et une brillante idée lui
   traversa l’esprit.</p>
<p class="exemple">Elle avala un des gâteaux, et s’aperçut avec
   joie qu’elle diminuait rapidement</p>
```

### Résultat

{{EmbedLiveSample("Exemples")}}

## Spécifications

| Spécification                                                                            | État                             | Commentaires                                  |
| ---------------------------------------------------------------------------------------- | -------------------------------- | --------------------------------------------- |
| {{SpecName('CSS4 Cascade', '#inherit', 'inherit')}}                     | {{Spec2('CSS4 Cascade')}} | Aucun changement.                             |
| {{SpecName('CSS3 Values', "#common-keywords", "inherit")}}             | {{Spec2('CSS3 Values')}} | Aucun changement {{SpecName('CSS2.1')}} |
| {{SpecName('CSS2.1', "cascade.html#value-def-inherit", "inherit")}} | {{Spec2('CSS2.1')}}         | Définition initiale.                          |

## Compatibilité des navigateurs

{{Compat("css.types.global_keywords.inherit")}}

## Voir aussi

- [L'héritage](/fr/docs/Web/CSS/Héritage)
- La propriété {{cssxref("all")}}
- Les propriétés globales {{cssxref("initial")}}, {{cssxref("unset")}} et {{cssxref("revert")}}.
- La propriété {{cssxref("all")}} permet de réinitialiser l'ensemble des propriétés avec leurs valeurs initiales, héritées, annulées ou indéfinies.
