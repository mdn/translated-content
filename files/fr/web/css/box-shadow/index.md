---
title: box-shadow
slug: Web/CSS/box-shadow
tags:
  - CSS
  - Propriété
  - Reference
translation_of: Web/CSS/box-shadow
---
{{CSSRef}}

La propriété CSS **`box-shadow`** ajoute des ombres à la boîte d'un élément via une liste d'ombres séparées par des virgules. Une boîte d'ombre est définie avec des décalages horizontal et vertical par rapport à l'élément, avec des rayons de flou et d'étalement et avec une couleur.

{{EmbedInteractiveExample("pages/css/box-shadow.html")}}Elle permet de projeter une ombre depuis un élément. Si une {{cssxref("border-radius")}} est définie sur l'élément avec l'ombre, la boîte de l'ombre prendra les mêmes arrondis. L'ordre des couches (_z order_) pour plusieurs ombres sera le même [que pour les ombres texte](/fr/docs/Web/CSS/text-shadow) (la première ombre est sur le dessus).

[Le générateur de `box-shadow`](/fr/docs/Web/CSS/CSS_Box_Model/Box-shadow_generator) est un outil interactif qui permet de générer des valeurs pour `box-shadow`.

## Syntaxe

```css
/* offset-x | offset-y | color */
box-shadow: 60px -16px teal;

/* offset-x | offset-y | blur-radius | color */
box-shadow: 10px 5px 5px black;

/* offset-x | offset-y | blur-radius | spread-radius | color */
box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);

/* inset | offset-x | offset-y | color */
box-shadow: inset 5em 1em gold;

/* Une liste d'ombres, séparées par des virgules */
box-shadow: 3px 3px red, -1em 0 0.4em olive;

/* Mots-clés globaux */
box-shadow: inherit;
box-shadow: initial;
box-shadow: unset;
```

La propriété `box-shadow` peut être définie grâce :

- À deux, trois ou quatre valeurs de longueur ({{cssxref("&lt;length&gt;")}}) :

  - Avec deux valeurs, celles-ci sont respectivement considérées comme les coordonnées de décalage de l'ombre : [`<offset-x>` et `<offset-y>`](#offset)
  - Si une troisième valeur est fournie, celle-ci correspondra au rayon du flou : [`<blur-radius>`](#blur)
  - Si une quatrième valeur est fournie, celle-ci correspondra au rayon d'étalement : [`<spread-radius>`](#spread).

- Au mot-clé optionnel [`inset`](#inset)
- À une valeur de couleur ([`<color>`](#color)) optionnelle.

### Valeurs

- `inset`
  - : Si la valeur n'est pas définie (le cas par défaut), l'ombre sera une ombre portée (comme si la boîte était élevée au-dessus du contenu).
    La présence du mot-clé `inset` modifie l'ombre afin qu'elle soit tournée vers l'intérieur du cadre (comme si le contenu était enfoncé dans la boîte). Les ombres tournées vers l'intérieur sont dessinées à l'intérieur de la bordure (même les transparentes), au-dessus de l'arrière-plan mais sous le contenu.
- `<offset-x>` `<offset-y>`
  - : Deux valeurs de longueur ({{cssxref("&lt;length&gt;")}} qui permettent de définir le décalage de l'ombre. `<offset-x>` définit la distance horizontale du décalage et les valeurs négatives placeront l'ombre à gauche de l'élément. `<offset-y>` définit la distance verticale et les distances négatives placent l'ombre au-dessus de l'élément (cf. {{cssxref("&lt;length&gt;")}} pour les différentes unités possibles).
    Si les deux valeurs sont `0`, l'ombre est placée derrière l'élément (et peut générer un effet de flou si `<blur-radius>` et/ou `<spread-radius>` est utilisé).
- `<blur-radius>`
  - : Une troisième valeur de longueur ({{cssxref("&lt;length&gt;")}}). Plus cette valeur sera grande, plus le flou de l'ombre sera diffus : l'ombre sera donc plus étalée et plus légère. Les valeurs négatives ne sont pas autorisées. Si la valeur n'est pas définie, sa valeur par défaut est `0` (le côté de l'ombre est rectiligne).
- `<spread-radius>`
  - : Une quatrième valeur de longueur ({{cssxref("&lt;length&gt;")}}). Les valeurs positives étaleront l'ombre et les valeurs négatives rétréciront l'ombre. Si elle n'est pas définie, la valeur par défaut est `0` (l'ombre aura la même taille que l'élément).
- `<color>`
  - : Une valeur de couleur ({{cssxref("&lt;color&gt;")}}). Si la valeur n'est pas définie, la couleur utilisée dépend du navigateur ce sera généralement la propriété {{cssxref("color")}} mais Safari affiche une ombre transparente.

### Interpolation

Chaque ombre de la liste (`none` sera traitée comme une liste de longueur nulle) est interpolée via la couleur, le décalage horizontal et vertical, le rayon de flou et l'étalement (lorsque c'est pertinent). Pour chaque ombre, si les deux ombres sont ou ne sont pas `inset`, l'ombre interpolée doit respecter cette valeur. Si l'une des ombres a `inset` et l'autre non, la liste d'ombres ne peut pas être interpolée. Si les listes d'ombres ont des longueurs différentes, la liste la plus courte sera complétée à la fin avec des ombres dont la couleur est `transparent`, toutes les longueurs valent `0` et `inset` pour que la valeur corresponde à la plus longue liste.

### Syntaxe formelle

{{csssyntax}}

## Exemples

### CSS

```css
p {
  height: 5em;
  width: 300px;
  background-color: rgba(128,128,128,0.1);
}
.ombre_droite_haut {
  box-shadow: 60px -16px teal; /* la valeur négative décale vers le haut */
}

.ombre_interieure {
  box-shadow: inset 5em 1em gold;
  /* le mot-clé inset renverse l'ombre à l'intérieur */
}

.ombres_multiples_diffuses {
  box-shadow: inset 0 0 1em gold, 0 0 2em red;
  /* deux ombres dans la liste et des rayons de flou pour chacune */
}
```

### HTML

```html
<p class="ombre_droite_haut">Déportée dans l'autre sens</p>

<p class="ombre_interieure">L'ombre est dans le contenu !</p>

<p class="ombres_multiples_diffuses">Du rouge dehors et du doré dedans</p>
```

### Résultat

{{EmbedLiveSample("Exemples","400","300")}}

## Spécifications

| Spécification                                                                    | État                                     | Commentaires         |
| -------------------------------------------------------------------------------- | ---------------------------------------- | -------------------- |
| {{SpecName('CSS3 Backgrounds', '#box-shadow', 'box-shadow')}} | {{Spec2('CSS3 Backgrounds')}} | Définition initiale. |

{{cssinfo}}

## Compatibilité des navigateurs

{{Compat("css.properties.box-shadow")}}

## Voir aussi

- [Tutoriel et box-shadow tutorial and examples](https://markusstange.wordpress.com/2009/02/15/fun-with-box-shadows/)
- [Générateur d'ombres CSS](https://cssgenerator.org/box-shadow-css-generator.html)
- [Appliquer des couleurs sur des éléments HTML grâce à CSS](/fr/docs/Web/HTML/Applying_color)
- Le type de données {{cssxref("&lt;color&gt;")}}
- Les autres propriétés relatives aux couleurs : {{cssxref("color")}}, {{cssxref("background-color")}}, {{cssxref("border-color")}}, {{cssxref("outline-color")}}, {{cssxref("text-decoration-color")}}, {{cssxref("text-emphasis-color")}}, {{cssxref("text-shadow")}}, {{cssxref("caret-color")}} et {{cssxref("column-rule-color")}}.
