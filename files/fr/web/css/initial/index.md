---
title: initial
slug: Web/CSS/initial
tags:
  - CSS
  - Cascade
  - Mot-clé
  - Reference
translation_of: Web/CSS/initial
---
{{CSSRef}}

Le mot-clé **`initial`** applique la valeur initiale d'une propriété à un élément. La valeur initiale est fournie par le navigateur et peut être utilisée pour chaque propriété CSS. Cette propriété prendra alors [la valeur initiale](/fr/docs/Web/CSS/Valeur_initiale) spécifiée pour cette la propriété.

La propriété {{cssxref("all")}} peut être utilisée avec cette valeur afin de réinitialiser l'ensemble des propriétés CSS.

> **Note :** Pour [les propriétés héritées](/fr/docs/Web/CSS/Héritage#Propriétés_héritées), la valeur initiale peut donner des résultats étranges et mieux vaudra utiliser les mots-clés {{cssxref("inherit")}}, {{cssxref("unset")}} ou {{cssxref("revert")}}. Attention également à ne pas confondre la valeur initiale avec la valeur décrite dans la feuille de style portée par le navigateur.

## Exemples

### CSS

```css
/* On écrit le texte en rouge */
.exemple {
  color: red;
}

/* Et on veut que le texte mis en avant
   prenne la valeur initiale de
   color */
.exemple em {
  color: initial;
}
```

### HTML

```html
 <p class="exemple">
    Texte rouge
       <em>
          ce texte est avec la couleur initiale (noire)
       </em>
    ce texte est rouge aussi
 </p>
```

### Résultat

{{EmbedLiveSample("Exemples")}}

## Spécifications

| Spécification                                                        | État                             | Commentaires         |
| -------------------------------------------------------------------- | -------------------------------- | -------------------- |
| {{SpecName('CSS4 Cascade', '#initial', 'initial')}} | {{Spec2('CSS4 Cascade')}} | Aucun changement.    |
| {{SpecName('CSS3 Cascade', '#initial', 'initial')}} | {{Spec2('CSS3 Cascade')}} | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("css.types.global_keywords.initial")}}

## Voir aussi

- [La notion de valeur initiale](/fr/docs/Web/CSS/Valeur_initiale)
- {{cssxref("inherit")}}
- {{cssxref("unset")}}
- {{cssxref("revert")}}
- {{cssxref("all")}}
