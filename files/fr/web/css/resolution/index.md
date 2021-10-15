---
title: <resolution>
slug: Web/CSS/resolution
tags:
  - CSS
  - Reference
  - Type
translation_of: Web/CSS/resolution
---
{{CSSRef}}

Le type de donnée CSS **`<resolution>`**, utilisé dans les _[media queries](/fr/docs/Web/CSS/Media_Queries)_, décrit la densité de pixels d'un appareil d'affichage, c'est-à-dire sa résolution.

Les dimensions font référence aux unités CSS (un pixel CSS, un centimètre CSS, etc.) et non aux dimensions physiques.

## Syntaxe

Une valeur de ce type sera composée d'un nombre (une valeur de type {{cssxref("&lt;number&gt;")}}) immédiatement suivi d'une unité de résolution (`dpi`, `dpcm`, …). Comme pour les autres dimensions CSS, il n'y a aucun espace entre la valeur numérique et l'unité.

Bien que toutes les unités représentent la même chose pour la valeur `0`, l'unité ne peut être omise dans ce cas puisque ce n'est pas une donnée de type {{cssxref("&lt;length&gt;")}} : `0` est invalide et ne représente pas `0dpi`, `0dpcm`, ni `0dppx`.

### Unités

- `dpi`
  - : Cette unité représente le nombre de [points par pouce](https://fr.wikipedia.org/wiki/Point_par_pouce). Un écran compte habituellement 72 ou 96 ppi (dpi), tandis qu'un document imprimé en compte généralement un nombre beaucoup plus élevé. Puisque 1 pouce équivaut à 2,54 cm, `1 dpi ≈ 0,39 dpcm`.
- `dpcm`
  - : Cette unité représente le nombre de [points par centimètre](https://fr.wikipedia.org/wiki/Point_par_pouce#Tableau_de_conversion). Puisque 1 pouce équivaut à 2.54 cm, `1dpcm ≈ 2,54 dpi`.
- `dppx`
  - : Cette unité représente le nombre de points par unité CSS `px`. Puisque le ratio entre les unités CSS `in` et CSS `px` vaut 1:96, `1 dppx` est équivalent à `96 dpi`, ce qui correspond à la résolution par défaut des images affichées en CSS tel que défini par {{cssxref("image-resolution")}}.
- `x`
  - : Un alias pour `dppx`.

> **Note :** Bien que le nombre `0` représente la même mesure pour ces différentes unités. Si la valeur est écrite sans unité, elle sera considérée comme invalide. Autrement dit, `0` est invalide et ne représente pas `0dpi`, `0dpcm` ou `0dppx`.

## Exemples

### Usage correct

Voici quelques exemples d'utilisation correcte de données de type `<resolution>` :

```css
96dpi                                              Usage correct : un {{cssxref("&lt;number&gt;")}} (ici un {{cssxref("&lt;integer&gt;")}}) suivi d'une unité.
@media print and (min-resolution: 300dpi) { ... }  Usage correct dans le contexte d'une media query.
```

### Usages incorrects

```css
72 dpi    Incorrect : les espaces ne sont pas acceptés entre le {{cssxref("&lt;number&gt;")}} et l'unité.
ten dpi   Incorrect : seules des expressions numériques sont acceptées.
0         Incorrect : l'unité ne peut être omise que pour l'expression de la valeur 0 de type {{cssxref("&lt;length&gt;")}}.
```

### Exemple appliqué

#### CSS

```css
/* Saurez-vous trouver votre résolution en dpi */
/* via l'exemple live ?                        */
@media screen and (min-resolution: 100dpi) {
  .exemple {
    background-color: palegreen;
  }
}

@media screen and (max-resolution: 99dpi) {
  .exemple {
    background-color: orange;
  }
}
```

#### HTML

```html
<p class="exemple">
  À ces mots le Chapelier ouvrit de grands yeux ; mais
  il se contenta de dire : « Pourquoi une pie
  ressemble-t-elle à un pupitre ? »
</p>
```

#### Résultat

{{EmbedLiveSample("Exemple_appliqué","200","200")}}

## Spécifications

| Spécification                                                                                    | État                                     | Commentaires             |
| ------------------------------------------------------------------------------------------------ | ---------------------------------------- | ------------------------ |
| {{SpecName('CSS4 Values', '#resolution', '&lt;resolution&gt;')}}             | {{Spec2('CSS4 Values')}}         | Ajout de l'unité `x`.    |
| {{SpecName('CSS3 Values', '#resolution', '&lt;resolution&gt;')}}             | {{Spec2('CSS3 Values')}}         | Ajout de l'unité `dppx`. |
| {{SpecName('CSS3 Media Queries', '#resolution', '&lt;resolution&gt;')}} | {{Spec2('CSS3 Media Queries')}} | Définition initiale.     |

## Compatibilité des navigateurs

{{Compat("css.types.resolution")}}

## Voir aussi

- [Les _media queries_ CSS](/fr/docs/Web/CSS/Media_Queries)
- [La caractéristique média `resolution`](/fr/docs/Web/CSS/@media/resolution)
