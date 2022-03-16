---
title: '::first-letter'
slug: Web/CSS/::first-letter
tags:
  - CSS
  - Pseudo-element
  - Reference
translation_of: Web/CSS/::first-letter
---
{{CSSRef}}

Le [pseudo-élément](/fr/docs/Web/CSS/Pseudo-elements) **`::first-letter`** sélectionne la première lettre de la première ligne d'un bloc, si elle n'est pas précédée par un quelconque autre contenu (comme une image ou un tableau en ligne) sur sa ligne.

```css
/* Sélectionne la première lettre */
/* d'un élément <p> */
p::first-letter {
  color: red;
  font-size: 130%;
}
```

La première lettre d'un élément n'est pas forcément évidente à identifier :

- La ponctuation, c'est-à-dire n'importe quel caractère défini dans une des classes Unicode

  <i lang="en">open</i>

  (Ps),

  <i lang="en">close</i>

  (Pe),

  <i lang="en">initial quote</i>

  (Pi),

  <i lang="en">final quote</i>

  (Pf) et

  <i lang="en">other punctuation</i>

  (Po) , précédant ou suivant immédiatement la première lettre est aussi sélectionnée par ce pseudo-élément.

- D'autre part, certaines langues possèdent des digraphes qui sont mis en majuscule ensemble, comme le `IJ` en néerlandais. Dans ces rares cas, les deux lettres du digraphes doivent être sélectionnées par le pseudo-élément `::first-letter`. (Ceci est mal supporté par les navigateurs, reportez vous au [tableau de compatibilité des navigateurs](/fr/docs/Web/CSS/::first-letter#compatibilit%c3%a9_des_navigateurs)).
- Enfin, une combinaison du pseudo-élément {{cssxref("::before")}} et de la propriété {{cssxref("content")}} peut injecter du texte au début de l'élément. Dans ce cas, `::first-letter` sélectionnera la première lettre du contenu inséré.

Une première lettre n'a de signification que dans une [boîte englobante](/fr/docs/Web/CSS/Visual_formatting_model#les_%C3%A9l%C3%A9ments_de_bloc_et_les_bo%C3%AEtes_de_bloc), ainsi le pseudo-élément `::first-letter` n'a un effet que sur les éléments ayant une valeur {{cssxref("display")}} correspondant à `block`, `inline-block`, `table-cell`, `list-item` ou `table-caption`. Dans tous les autres cas, `::first-letter` n'a pas d'effet.

## Propriétés utilisables

Seul un petit sous-groupe de propriétés CSS peuvent être utilisées dans un bloc déclaratif contenant un sélecteur utilisant le pseudo-élément `::first-letter` :

- Toutes les propriétés liées aux polices de caractère : {{cssxref("font")}}, {{cssxref("font-style")}}, {{cssxref("font-feature-settings")}}, {{cssxref("font-kerning")}}, {{cssxref("font-language-override")}}, {{cssxref("font-stretch")}}, {{cssxref("font-synthesis")}}, {{cssxref("font-variant")}}, {{cssxref("font-variant-alternates")}}, {{cssxref("font-variant-caps")}}, {{cssxref("font-variant-east-asian")}}, {{cssxref("font-variant-ligatures")}}, {{cssxref("font-variant-numeric")}}, {{cssxref("font-variant-position")}}, {{cssxref("font-weight")}}, {{cssxref("font-size")}}, {{cssxref("font-size-adjust")}}, {{cssxref("line-height")}} et {{cssxref("font-family")}}.
- Toutes les propriétés liées à l'arrière-plan : {{cssxref("background")}},{{cssxref("background-color")}}, {{cssxref("background-image")}}, {{cssxref("background-clip")}}, {{cssxref("background-origin")}}, {{cssxref("background-position")}}, {{cssxref("background-repeat")}}, {{cssxref("background-size")}}, {{cssxref("background-attachment")}} et {{cssxref("background-blend-mode")}}.
- Toutes les propriétés liées à `margin` : {{cssxref("margin")}}, {{cssxref("margin-top")}}, {{cssxref("margin-right")}}, {{cssxref("margin-bottom")}}, {{cssxref("margin-left")}}.
- Toutes les propriétés liées à `padding` : {{cssxref("padding")}}, {{cssxref("padding-top")}}, {{cssxref("padding-right")}}, {{cssxref("padding-bottom")}}, {{cssxref("padding-left")}}.
- Toutes les propriétés liées aux bordures : les raccourcis {{cssxref("border")}}, {{cssxref("border-style")}}, {{cssxref("border-color")}}, {{cssxref("border-width")}}, {{cssxref("border-radius")}}, {{cssxref("border-image")}}, et les propriétés détaillées.
- La propriété {{cssxref("color")}} .
- Les propriétés  {{cssxref("text-decoration")}}, {{cssxref("text-shadow")}}, {{cssxref("text-transform")}}, {{cssxref("letter-spacing")}}, {{cssxref("word-spacing")}} (lorsqu'approprié), {{cssxref("line-height")}}, {{cssxref("text-decoration-color")}}, {{cssxref("text-decoration-line")}}, {{cssxref("text-decoration-style")}}, {{cssxref("box-shadow")}}, {{cssxref("float")}}, {{cssxref("vertical-align")}} (seulement si `float` vaut `none`).

Puisque cette liste sera complétée dans l'avenir, il est recommandé de ne pas utiliser d'autres propriétés dans un bloc de déclaration, de manière à concevoir un CSS pérenne.

> **Note :** Dans CSS 2, les pseudo-éléments étaient précédés d'un seul caractère deux-points. Puisque les pseudo-classes suivaient elles aussi cette convention, la distinction était impossible. Afin de résoudre ce problème, CSS 2.1 a modifié la convention des pseudo-éléments. Désormais un pseudo-élément est précédé de deux caractères deux-points, et une pseudo-classe est toujours précédée d'un seul caractère deux-points.
>
> Du fait que de nombreux navigateurs avaient déjà implémentés la syntaxe CSS 2 dans une version publique, tous les navigateurs supportant la syntaxe à deux caractères deux-points peuvent aussi supporter l'ancienne syntaxe à un caractère deux-points.
>
> Si les navigateurs anciens doivent être supportés, `:first-letter` est le seul choix viable. Sinon, la syntaxe `::first-letter` doit être privilégiée.

## Syntaxe

{{csssyntax}}

## Exemples

Dans cet exemple, on prend la première lettre de chaque paragraphe et on l'affiche en rouge et en gros.

### CSS

```css
p::first-letter {
  color: red;
  font-size: 130%;
}
```

### HTML

```html
<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt
  ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
  dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est. Lorem ipsum dolor
  sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy amet.</p>
<p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat.</p>
<p>Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut
  aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit
  esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et
  iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait
  nulla facilisi.</p>
<p>-The beginning of a special punctuation mark.</p>
<p>_The beginning of a special punctuation mark.</p>
<p>"The beginning of a special punctuation mark.</p>
<p>'The beginning of a special punctuation mark.</p>
<p>*The beginning of a special punctuation mark.</p>
<p>#The beginning of a special punctuation mark.</p>
<p>「特殊的汉字标点符号开头。</p>
<p>《特殊的汉字标点符号开头。</p>
<p>“特殊的汉字标点符号开头。</p>
```

### Résultat

{{EmbedLiveSample('Exemples', '80%', 420)}}

## Spécifications

| Spécification                                                                                                        | Statut                                       | Commentaire                                                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('CSS4 Pseudo-Elements', '#first-letter-pseudo', '::first-letter')}}             | {{Spec2('CSS4 Pseudo-Elements')}} | Généralisation des propriétés permises pour la mise en forme du texte et des popriétés de mise en page en-ligne, {{cssxref("opacity")}} et {{cssxref("box-shadow")}}. |
| {{SpecName('CSS3 Text Decoration', '#text-shadow', 'text-shadow avec ::first-letter')}} | {{Spec2('CSS3 Text Decoration')}} | Autorise l'usage de {{cssxref("text-shadow")}} avec `::first-letter`.                                                                                                    |
| {{SpecName('CSS3 Selectors', '#first-letter', '::first-letter')}}                             | {{Spec2('CSS3 Selectors')}}         | Définition des cas limites comme les listes, ou les comportement spécifiques à certaines langues (comme le digraphe néerlandais `IJ`).                                             |
| {{SpecName('CSS2.1', 'selector.html#first-letter', '::first-letter')}}                         | {{Spec2('CSS2.1')}}                     | Aucune modification.                                                                                                                                                               |
| {{SpecName('CSS1', '#the-first-letter-pseudo-element', '::first-letter')}}                 | {{Spec2('CSS1')}}                     | La définition initiale utilisait la syntaxe à un caractère deux-points.                                                                                                            |

## Compatibilité des navigateurs

{{Compat("css.selectors.first-letter")}}

## Voir aussi

- {{cssxref("::first-line")}}
