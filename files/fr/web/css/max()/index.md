---
title: max()
slug: Web/CSS/max()
tags:
  - CSS
  - Fonction
  - Reference
translation_of: Web/CSS/max()
---
{{CSSRef}}

La fonction CSS **`max()`** permet d'obtenir la plus grande valeurs parmi une liste d'expressions, séparées par des virgules afin d'utiliser ce maximum comme valeur d'une propriété CSS. La fonction `max()` peut être utilisée à tout endroit où une valeur de type {{cssxref("&lt;length&gt;")}}, {{cssxref("&lt;frequency&gt;")}}, {{cssxref("&lt;angle&gt;")}}, {{cssxref("&lt;time&gt;")}}, {{cssxref("&lt;percentage&gt;")}}, {{cssxref("&lt;number&gt;")}} ou {{cssxref("&lt;integer&gt;")}} est autorisée.

```css
/* property: max(expression [, expression]) */
width: max(10vw, 4em, 80px);
```

Dans l'exemple précédent, la largeur mesurera au moins 80 pixels de large, sera plus large si la zone d'affichage (_viewport_) est plus large que 800 pixels ou si un `em` vaut plus que 20 pixels de large. Autrement dit, la valeur fournie `max()` est calculée comme un seuil et généralement, on aura un seuil minimal dans une expression `max()` (ce qui peut paraître contradictoire à juste titre).

## Syntaxe

La fonction `max()` prend comme arguments une ou plusieurs expressions, séparées par des virgules. Elle renvoie comme valeur le plus grand résultat des évaluations des expressions passées en arguments.

Les expressions passées à cette fonction peuvent utiliser des fonctions mathématiques (cf. {{CSSxRef("calc", "calc()")}}), des valeurs littérales ou d'autres expressions (ex. avec [`attr()`](/fr/docs/Web/CSS/attr)). Il est nécessaire que ces expressions fournissent une valeur d'un type valide (ex. {{cssxref("&lt;length&gt;")}}).

Il est tout à fait possible de combiner des valeurs avec différentes unités dans les expressions passées en arguments. On peut également utiliser des parenthèses à l'intérieur des expressions afin de s'assurer de la précédence des opérateurs.

### Notes

- Les expressions mathématiques qui utilisent des pourcentages pour les hauteurs et largeurs de colonnes de tableaux, de groupes de colonnes de tableaux, pour les lignes de tableaux, pour les groupes de lignes de tableaux et pour les cellules de tableau seront considérées comme `auto` si le tableau suit une disposition automatique ou fixée.
- Il est possible d'imbriquer des fonctions `max()` et `min()` dans les expressions et d'utiliser les opérateurs mathématiques d'addition, soustraction, multiplication, division sans nécessairement recourir à `calc()`.

### Syntaxe formelle

{{csssyntax}}

## Exemples

### Garantir une taille minimale pour des images

`max()` permet de simplifier la définition d'une taille **minimale**, par exemple la largeur d'une image. Dans cet exemple, la règle CSS permet d'obtenir un logo qui s'étire sur la moitié de la fenêtre pour les fenêtres les plus larges, sans dépasser 300 pixels et sans avoir à utiliser des requêtes média.

#### CSS

```css
.logo {
  width: max(50vw, 300px);
}
```

#### HTML

```html
<img src="https://developer.mozilla.org/static/img/web-docs-sprite.svg" alt="MDN Web Docs" class="logo">
```

#### Résultat

{{EmbedLiveSample('Garantir_une_taille_minimale_pour_des_images', 'auto', '60')}}

Avec cet exemple, le logo sera au moins large de 300 pixels et sera plus large afin d'occuper la moitié de la zone d'affichage si le _viewport_ devient plus large que 600 pixels.

### Fixer une taille minimale pour une police

On peut également utiliser `max()` pour définir la taille d'une police et fixer un seuil minimal pour garantir une certaine lisibilité.

#### CSS

```css
h1 {
  font-size: 2rem;
}
h1.responsive {
  font-size: max(4vw, 2em, 2rem);
}
```

Avec ces règles, la valeur pour `font-size` vaudra au moins `2rems` ou deux fois la taille par défaut de la police sur la page.

#### HTML

```html
<h1>Ce texte est toujours lisible mais sa taille ne change pas.</h1>
<h1 class="responsive">Ce texte est toujours lisible et s'adapte dans une certaine mesure.</h1>
```

#### Résultat

{{EmbedLiveSample('Fixer_une_taille_minimale_pour_une_police', '700', '300')}}

## Spécifications

| Spécification                                                            | État                             | Commentaires         |
| ------------------------------------------------------------------------ | -------------------------------- | -------------------- |
| {{SpecName('CSS4 Values', '#calc-notation', 'max()')}} | {{Spec2('CSS4 Values')}} | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("css.types.max")}}

## Voir aussi

- {{CSSxRef("calc", "calc()")}}
- {{CSSxRef("clamp", "clamp()")}}
- {{CSSxRef("min", "min()")}}
- [Valeurs et unités en CSS](/fr/docs/Apprendre/CSS/Introduction_à_CSS/Values_and_units)
