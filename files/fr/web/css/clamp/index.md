---
title: clamp()
slug: Web/CSS/clamp
tags:
  - CSS
  - Fonction
  - Reference
translation_of: Web/CSS/clamp()
original_slug: Web/CSS/clamp()
---
{{CSSRef}}

La fonction CSS **`clamp()`** permet de ramener (d'écrêter) une valeur entre deux bornes inférieure et supérieure. Cette fonction utilise trois paramètres : une valeur minimale, la valeur à tester et une valeur maximale. La fonction `clamp()` peut être utilisée à tout endroit où une valeur de type {{cssxref("&lt;length&gt;")}}, {{cssxref("&lt;frequency&gt;")}}, {{cssxref("&lt;angle&gt;")}}, {{cssxref("&lt;time&gt;")}}, {{cssxref("&lt;percentage&gt;")}}, {{cssxref("&lt;number&gt;")}} ou {{cssxref("&lt;integer&gt;")}} peut être utilisée.

> **Note :** l'expression  `clamp(MIN, VAL, MAX)` sera résolue comme `max(MIN, min(VAL, MAX)))`.

```css
width: clamp(10px, 4em, 80px);
```

Dans l'exemple précédent, la largeur fera au plus 80 pixels et au moins 10 pixels mais mesurera 4em de large si un em mesure entre 2.5 et 20px.

Prenons comme hypothèse qu'un em mesure 16px de large :

```css
width: clamp(10px, 4em, 80px);
/* avec 1em = 16px, on a 4em = 16px * 4 = 64px */
width: clamp(10px, 64px, 80px);
/* clamp(MIN, VAL, MAX) est résolue comme max(MIN, min(VAL, MAX))) */
width: max(10px, min(64px, 80px))
width: max(10px, 64px);
width: 64px;
```

## Syntaxe

La fonction `clamp()` utilise trois expressions séparées par des virgules comme paramètres. Ces paramètres sont, dans l'ordre, la valeur minimale, la valeur préférée et la valeur maximale.

La valeur minimale est la borne inférieure des valeurs autorisées. C'est cette valeur qui sera utilisée si la valeur préférée lui est inférieure.

La valeur préférée correspond à la valeur qui sera utilisée si elle est supérieure à la borne inférieure et inférieure à la borne supérieure.

La valeur maximale est la borne supérieure des valeurs autorisées. C'est cette valeur qui sera utilisée si la valeur préférée lui est supérieure.

Les expressions passées en paramètres peuvent utiliser des fonctions mathématiques (voir  {{CSSxRef("calc")}} pour plus d'informationsn), des valeurs littérales ou d'autres expressions ( {{CSSxRef("attr", "attr()")}} par exemple) tant que le résultat de cette expression est évalué avec un type valide. Il est aussi possible d'utiliser des expressions mathématiques sans `calc()` et il est également possible d'ajouter des parenthèses pour prioriser correctement les opérations imbriquées.

Il est possible d'utiliser différentes unités pour chacune des valeurs des expressions.

### Notes

- Les expressions mathématiques qui utilisent des pourcentages pour les hauteurs et largeurs de colonnes de tableaux, de groupes de colonnes de tableaux, pour les lignes de tableaux, pour les groupes de lignes de tableaux et pour les cellules de tableau seront considérées comme `auto` si le tableau suit une disposition automatique ou fixée.
- Il est possible d'imbriquer des fonctions `max()` et `min()` dans les expressions et d'utiliser les opérateurs mathématiques d'addition, soustraction, multiplication, division sans nécessairement recourir à `calc()`.
- Attention à bien utiliser un espace de chaque côté des opérateurs + et -.

### Syntaxe formelle

{{csssyntax}}

## Exemples

### Indiquer une taille de police minimale et maximale

Un autre cas d'utilisation est de permettre à une taille de police de caractères de varier sans être minuscule et illisible et sans non plus être énorme.

#### CSS

```css
h1 {
  font-size: 2rem;
}
h1.responsive {
  font-size: clamp(32px, 2em, 2rem);
}
```

Ici on utilise l'unité `rem` pour fixer un maximum correspondant à deux fois la taille `em` de la racine.

#### HTML

```html
<h1>Ce texte est toujours lisible mais sa taille ne change pas.</h1>
<h1 class="responsive">Ce texte est toujours lisible et s'adapte dans une certaine mesure.</h1>
```

#### Résultat

{{EmbedLiveSample("Indiquer_une_taille_de_police_minimale_et_maximale", '700', '300')}}

## Spécifications

| Spécification                                                                | État                             | Commentaires |
| ---------------------------------------------------------------------------- | -------------------------------- | ------------ |
| {{SpecName('CSS4 Values', '#calc-notation', 'clamp()')}} | {{Spec2('CSS4 Values')}} |              |

## Compatibilité des navigateurs

{{Compat("css.types.clamp")}}

## Voir aussi

- {{CSSxRef("calc")}}
- {{CSSxRef("max")}}
- {{CSSxRef("min")}}
- [Valeurs CSS](/fr/docs/Apprendre/CSS/Introduction_à_CSS/Values_and_units)
