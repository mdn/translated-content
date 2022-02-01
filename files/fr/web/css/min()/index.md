---
title: min()
slug: Web/CSS/min()
translation_of: Web/CSS/min()
---
{{CSSRef}}

La fonction CSS **`min()`** permet d'obtenir la plus petite valeurs parmi une liste d'expressions, séparées par des virgules afin d'utiliser ce minimum comme valeur d'une propriété CSS. La fonction `min()` peut être utilisée à tout endroit où une valeur de type {{cssxref("&lt;length&gt;")}}, {{cssxref("&lt;frequency&gt;")}}, {{cssxref("&lt;angle&gt;")}}, {{cssxref("&lt;time&gt;")}}, {{cssxref("&lt;percentage&gt;")}}, {{cssxref("&lt;number&gt;")}} ou {{cssxref("&lt;integer&gt;")}} est autorisée.

```css
/* property: min(expression [, expression]) */
width: min(10vw, 4em, 80px);
```

Dans l'exemple précédent, la largeur mesurera au plus 80 pixels de large, sera moins large si la zone d'affichage (_viewport_) est moins large que 800 pixels ou si un `em` vaut moins que 20 pixels de large. Autrement dit, la valeur fournie `min()` est calculée comme un seuil et généralement, on aura un seuil maximal dans une expression `min()` (ce qui peut paraître contradictoire à juste titre).

## Syntaxe

La fonction `min()` prend comme arguments une ou plusieurs expressions, séparées par des virgules. Elle renvoie comme valeur le plus petit résultat des évaluations des expressions passées en arguments.

Les expressions passées à cette fonction peuvent utiliser des fonctions mathématiques (cf. {{CSSxRef("calc", "calc()")}}), des valeurs littérales ou d'autres expressions (ex. avec {{CSSxRef("attr", "attr()")}}). Il est nécessaire que ces expressions fournissent une valeur d'un type valide (ex. {{cssxref("&lt;length&gt;")}}).

Il est tout à fait possible de combiner des valeurs avec différentes unités dans les expressions passées en arguments. On peut également utiliser des parenthèses à l'intérieur des expressions afin de s'assurer de la précédence des opérateurs.

### Notes

- Les expressions mathématiques qui utilisent des pourcentages pour les hauteurs et largeurs de colonnes de tableaux, de groupes de colonnes de tableaux, pour les lignes de tableaux, pour les groupes de lignes de tableaux et pour les cellules de tableau seront considérées comme `auto` si le tableau suit une disposition automatique ou fixée.
- Il est possible d'imbriquer des fonctions `min()` et `min()` dans les expressions et d'utiliser les opérateurs mathématiques d'addition, soustraction, multiplication, division sans nécessairement recourir à `calc()`.

### Syntaxe formelle

{{csssyntax}}

## Exemples

### Définir une taille maximale pour un champ de saisie et son libellé

La fonction `min()` peut également être utilisée pour définir la taille maximale d'un contrôle dans un formulaire et permettre de réduire le champ et le libellé associé lorsque la largeur de l'écran diminue.

#### CSS

```css
input, label {
  padding: 2px;
  box-sizing: border-box;
  display: inline-block;
  width: min(40%, 400px);
  background-color: pink;
}

form {
  margin: 4px;
  border: 1px solid black;
  padding: 4px;
}
```

On a ici la règle qui s'applique au formulaire et qui occupe 100% de la largeur de son parent. On déclare avec `min()` que la largeur doit mesurer au plus 400 pixels ou 40% de la largeur du formulaire. Autrement dit, la taille la plus grande que pourra atteindre le champ et le libellé sera 400 pixels. La largeur la plus étroite sera nécessairement 40% (ce qui peut être tout petit sur l'affichage d'une montre par exemple).

#### HTML

```html
<form>
  <label>Saisir quelque chose :</label>
  <input type="text">
</form>
```

{{EmbedLiveSample("Définir_une_taille_maximale_pour_un_champ_de_saisie_et_son_libellé", '100%', '110')}}

## Accessibilité

Lorsqu'on utilise `min()` afin de contrôler la taille du texte, il faut s'assurer que le texte puisse toujours être suffisamment grand pour être lisible. Pour cela, on peut imbriquer l'appel à `min()` dans [`max()`](/fr/docs/Web/CSS/max) utilisant [une unité de longueur relative](/fr/docs/Web/CSS/length#Unités_de_longueur_relatives) en deuxième argument afin de garantir une lisibilité minimale :

```css
small {
  font-size: max(min(0.5vw, 0.5em), 1rem);
}
```

On aura ainsi une taille minimale de `1rem` et la taille du texte qui se met à l'échelle si on zoome sur la page.

- [Comprendre les règles 1.4 du WCAG](/fr/docs/Web/Accessibility/Understanding_WCAG/Perceivable#Guideline_1.4_Make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background) (MDN)
- [Comprendre le critère de réussite 1.4.4 du WCAG 2.0 (W3C)](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-scale.html)

## Spécifications

| Spécification                                                            | État                             | Commentaires |
| ------------------------------------------------------------------------ | -------------------------------- | ------------ |
| {{SpecName('CSS4 Values', '#calc-notation', 'min()')}} | {{Spec2('CSS4 Values')}} |              |

## Compatibilité des navigateurs

{{Compat("css.types.min")}}

## Voir aussi

- {{CSSxRef("calc", "calc()")}}
- {{CSSxRef("clamp", "clamp()")}}
- {{CSSxRef("max", "max()")}}
- [Valeurs et unités en CSS](/fr/docs/Apprendre/CSS/Introduction_à_CSS/Values_and_units)
