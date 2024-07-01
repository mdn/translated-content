---
title: Commentaires
slug: Web/CSS/Comments
---

{{CSSRef}}

Les commentaires sont utilisés afin d'ajouter des notes explicatives ou pour empêcher le navigateur d'interpréter certaines parties de la feuille de style. Les commentaires n'ont donc aucun impact sur la disposition d'un document.

## Syntaxe

On peut utiliser des commentaires à chaque endroit où un blanc est autorisé.

```css
/* Commentaire */
```

## Exemples

```css
/* Commentaire sur une ligne */

/*
Commentaire
sur plusieurs
lignes
*/

/* Le commentaire qui suit permet
   de désactiver une règle */
/*
span {
  color: blue;
  font-size: 1.5em;
}
*/
```

## Notes

La syntaxe des commentaires avec `/* */` est utilisée pour étaler un commentaire sur une ou plusieurs lignes. On ne peut pas utiliser d'autres moyens pour les commentaires dans une feuille de style externe. Lorsqu'on utilise l'élément {{HTMLElement("style")}}, on peut utiliser les commentaires HTML `<!-- -->` pour masquer du CSS sur des navigateurs plus anciens mais cela n'est pas une méthode recommandée.

À l'instar des autres langages de programmation programmation qui utilisent `/* */` pour les commentaires, il est impossible de les imbriquer. Autrement dit, la première apparition de `*/` suivant un `/*`, ferme le commentaire.

## Spécifications

- [La référence CSS](/fr/docs/Web/CSS/Reference)
