---
title: all
slug: Web/CSS/all
translation_of: Web/CSS/all
---
{{CSSRef}}

La [propriété raccourcie](/fr/docs/Web/CSS/Propri%C3%A9t%C3%A9s_raccourcies) **`all`** permet de réinitialiser toutes les propriétés, à l'exception de {{cssxref("unicode-bidi")}} et {{cssxref("direction")}}, avec leurs valeurs initiales, héritées ou qui proviennent d'une autre feuille de style.

{{EmbedInteractiveExample("pages/css/all.html")}}

## Syntaxe

```css
/* Valeurs globales */
all: initial;
all: inherit;
all: unset;

/* Héritage et cascade CSS : Niveau 4 */
all: revert;
```

La propriété `all` est définie avec un des mots-clés globaux de CSS. On notera que la valeur de cette propriété n'a pas d'impact sur les propriétés {{cssxref("unicode-bidi")}} et {{cssxref("direction")}}.

### Valeurs

- `initial`
  - : Voir {{cssxref("initial")}}. Ce mot-clé indique que toutes les propriétés qui sont définies pour l'élément auquel s'applique `all` (ou qu'il hérite de cette valeur via un élément parent) devront prendre leurs valeurs initiales.
- `inherit`
  - : Voir {{cssxref("inherit")}}. Ce mot-clé indique que toutes les propriétés qui sont définies pour l'élément auquel s'applique `all` (ou qu'il hérite de cette valeur via un élément parent) devront prendre les valeurs héritées (c'est-à-dire celles définies pour le parent de l'élément).
- `unset`
  - : Voir {{cssxref("unset")}}. Ce mot-clé indique que toutes les propriétés qui s'appliquent à l'élément ou à son parent prendront la valeur déclarée pour le parent si elles peuvent être héritées ou la valeur initiale sinon.
- `revert`

  - : Voir {{cssxref("revert")}}. Si la valeur obtenue dans la cascade est le mot-clé `revert`, le comportement obtenu sera différent selon l'origine de la déclaration :

    - La déclaration provient de l'agent utilisateur :
      - : Synonyme de `unset`.
    - La déclaration provient de l'utilisateur :
      - : Le moteur remonte [la cascade](/fr/docs/Apprendre/CSS/Introduction_%C3%A0_CSS/La_cascade_et_l_h%C3%A9ritage) au niveau de l'agent utilisateur afin de calculer la valeur comme si aucune règle n'était appliquée par le document ou par l'utilisateur.
    - La déclaration provient de l'auteur (du document)
      - : Le moteur remonte [la cascade](/fr/docs/Apprendre/CSS/Introduction_%C3%A0_CSS/La_cascade_et_l_h%C3%A9ritage) au niveau de l'utilisateur afin de calculer la valeur comme si aucune règle ne provenait du document pour cette propriété.Cette origine inclue [les origines des surcharges DOM et des animations](https://www.w3.org/TR/css-cascade-4/#origin).

### Syntaxe formelle

{{csssyntax}}

## Exemples

### HTML

```html
<blockquote id="quote">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
</blockquote>
Phasellus eget velit sagittis.
```

### CSS

```css
body {
  font-size: small;
  background-color: #F0F0F0;
  color: blue;
}

blockquote {
  background-color: skyblue;
  color: red;
}
```

### Résultat

#### Pas de propriété `all`

```html hidden
<blockquote id="quote">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</blockquote> Phasellus eget velit sagittis.
```

```css hidden
body { font-size: small; background-color: #F0F0F0; color:blue; }
blockquote { background-color: skyblue;  color: red; }
```

{{EmbedLiveSample("Pas_de_propriété_all", "200", "125")}}

L'élément {{HTMLElement("blockquote")}} utilise la mise en forme par défaut du navigateur avec un arrière-plan spécifique et une couleur pour le texte. L'élément se comporte comme un élément de bloc : le texte qui suit est placé en dessous.

#### `all:unset`

```html hidden
<blockquote id="quote">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</blockquote> Phasellus eget velit sagittis.
```

```css hidden
body { font-size: small; background-color: #F0F0F0; color:blue; }
blockquote { background-color: skyblue;  color: red; }
blockquote { all: unset; }
```

{{EmbedLiveSample("all:unset", "200", "125")}}

L'élément {{HTMLElement("blockquote")}} n'utilise pas la mise en forme par défaut du naivgateur, c'est un élément en ligne (_inline_) (sa valeur initiale), la valeur de {{cssxref("background-color")}} est `transparent` (la valeur initiale), mais {{cssxref("font-size")}} vaut toujours `small` (valeur héritée) et {{cssxref("color")}} vaut (valeur héritée).

#### `all:initial`

```html hidden
<blockquote id="quote">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</blockquote> Phasellus eget velit sagittis.
```

```css hidden
body { font-size: small; background-color: #F0F0F0; color:blue; }
blockquote { background-color: skyblue;  color: red; }
blockquote { all: initial; }
```

{{EmbedLiveSample("all:initial", "200", "125")}}

L'élément {{HTMLElement("blockquote")}} n'utilise pas la mise en forme par défaut du navigateur, c'est un élément en ligne (sa valeur initiale). La propriété {{cssxref("background-color")}} vaut `transparent` (sa valeur initiale), {{cssxref("font-size")}} vaut `normal` (valeur initiale) et {{cssxref("color")}} vaut `black` (sa valeur initiale).

#### `all:inherit`

```html hidden
<blockquote id="quote">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</blockquote> Phasellus eget velit sagittis.
```

```css hidden
body { font-size: small; background-color: #F0F0F0; color:blue; }
blockquote { background-color: skyblue; color: red; }
blockquote { all: inherit; }
```

{{EmbedLiveSample("all:inherit", "200", "125")}}

L'élément {{HTMLElement("blockquote")}} n'utilise pas la mise en forme par défaut du navigateur, c'est un élément de bloc (valeur héritée depuis l'élément englobant {{HTMLElement("div")}}), {{cssxref("background-color")}} vaut `#F0F0F0` (valeur héritée), {{cssxref("font-size")}} vaut `small` (valeur héritée) et {{cssxref("color")}} vaut `blue` (valeur héritée).

## Spécifications

| Spécification                                                            | État                             | Commentaires                 |
| ------------------------------------------------------------------------ | -------------------------------- | ---------------------------- |
| {{SpecName('CSS4 Cascade', '#all-shorthand', 'all')}} | {{Spec2('CSS4 Cascade')}} | Ajout de la valeur `revert`. |
| {{SpecName('CSS3 Cascade', '#all-shorthand', 'all')}} | {{Spec2('CSS3 Cascade')}} | Définition initiale.         |

{{cssinfo}}

## Compatibilité des navigateurs

{{Compat("css.properties.all")}}

## Voir aussi

Les mots-clés indiquant des valeurs globales pour CSS :

- {{cssxref("initial")}},
- {{cssxref("inherit")}},
- {{cssxref("unset")}},
- {{cssxref("revert")}}.
