---
title: margin
slug: Web/CSS/margin
---

{{CSSRef}}

La propriété **`margin`** définit la taille des marges sur les quatre côtés de l'élément. C'est une propriété raccourcie qui permet de manipuler les autres propriétés de marges : {{cssxref("margin-top")}}, {{cssxref("margin-right")}}, {{cssxref("margin-bottom")}} et {{cssxref("margin-left")}}.

Il est possible d'utiliser des valeurs négatives pour chacun des côtés.

{{EmbedInteractiveExample("pages/css/margin.html")}}

Les marges haute et basse n'ont aucun effet sur les élements en ligne (_inline_) qui ne sont pas [remplacés](/fr/docs/Web/CSS/Élément_remplacé) (par exemple les {{HTMLElement("span")}} ou {{HTMLElement("code")}}).

> **Note :** Les marges créent un espace supplémentaire à l'extérieur de l'élément. Le _« remplissage »_ ({{cssxref("padding")}}) permet quant à lui de créer un espace supplémentaire à l'intérieur de l'élément.

## Syntaxe

```css
/* La propriété s'applique aux quatre côtés */
margin: 1em;

/* vertical | horizontal */
margin: 5% auto;

/* haut | horizontal | bas */
margin: 1em auto 2em;

/* haut | droit | bas | gauche */
margin: 2px 1em 0 auto;

/* Valeurs globales */
margin: inherit;
margin: initial;
margin: unset;
```

La propriété `margin` peut être définie grâce à une, deux, trois ou quatre valeurs. Chaque valeur est une valeur de type {{cssxref("&lt;length&gt;")}} ou de type {{cssxref("&lt;percentage&gt;")}} ou est le mot-clé [`auto`](#auto). Les valeurs négatives permette de dessiner l'élément plus près de ses voisins que ne l'aurait permis la valeur par défaut.

- Avec **une** valeur, celle-ci définira la marge pour les quatre côtés de la boîte
- Avec **deux** valeurs, la première s'appliquera aux côtés haut et bas et la seconde aux côtés gauche et droit
- Avec **trois** valeurs, la première s'appliquera au côté haut, la deuxième aux côtés gauche et droit et la troisième au côté bas
- Avec **quatre** valeurs, la première s'appliquera en haut, la deuxième à droite, la troisième en bas et la quatrième à gauche (ce qui correspond au sens des aiguilles d'une montre - c'est plus facile à mémoriser).

### Valeurs

Cette propriété peut accepter une, deux, trois ou quatre valeurs avec les types suivants :

- `<length>`
  - : La marge est définie avec une valeur absolue. On peut utiliser des valeurs négatives. Pour les différentes unités possibles, voir la page {{cssxref("&lt;length&gt;")}}.
- `<percentage>`
  - : Une valeur relative, exprimée en pourcentage (type {{cssxref("&lt;percentage&gt;")}}, à la **largeur** du bloc englobant. On peut utiliser des valeurs négatives.
- `auto`
  - : `auto` est remplacé par une valeur adaptée (il peut être utilisé pour centrer les blocs, par exemple, `div { width:50%; margin:0 auto; }` permet de centrer un conteneur `div` horizontalement).

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Exemple simple

#### CSS

```css
.ex1 {
  margin: auto;
  background: gold;
  width: 66%;
}
.ex2 {
  margin: 20px 0px 0 -20px;
  background: gold;
  width: 66%;
}
```

#### HTML

```html
<div class="ex1">margin: auto; background: gold; width: 66%;</div>
<div class="ex2">margin: 20px 0px 0px -20px; background: gold; width: 66%;</div>
```

#### Résultat

{{EmbedLiveSample('Exemple_simple')}}

### Autres exemples

```css
margin: 5%; /* tous les côtés avec une marge de 5% */
margin: 10px; /* tous les côtés avec une marge de 10px */

margin: 1.6em 20px; /* haut et bas à 1.6em     */
/* gauche et droite à 20px */

margin: 10px 3% 1em; /* haut à 10px, gauche et droite à 3% */
/* bas à 1em */

margin: 10px 3px 30px 5px; /* haut à 10px, droite à 3px */
/* bas à 30px, gauche à 5px  */

margin: 1em auto; /* marge de 1em en haut et en bas       */
/* la boîte est centrée horizontalement */

margin: auto; /* boîte centrée horizontalement */
/* marge nulle en haut et en bas */
```

## Notes

### Centrer horizontalement

Afin de centrer un élément horizontalement, avec un navigateur « moderne » on peut utiliser {{cssxref("display")}}`: flex;` {{cssxref("justify-content")}}`: center;`.

Les anciens navigateurs comme IE8-9 ne gèrent pas ces valeurs. Aussi, il faudra utiliser `margin: 0 auto` pour centrer un élément au sein de son parent.

### Fusion des marges

Les marges haute et basse des éléments sont parfois fusionnées en une seule marge qui est égale à la plus grande des deux marges. Pour plus d'informations, lire [l'article sur la fusion des marges](/fr/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing).

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Fusion des marges](/fr/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing)
- [Le modèle de boîte CSS](/fr/docs/Learn/CSS/Building_blocks/The_box_model)
- {{cssxref("margin-top")}}, {{cssxref("margin-right")}}, {{cssxref("margin-bottom")}} et {{cssxref("margin-left")}}
