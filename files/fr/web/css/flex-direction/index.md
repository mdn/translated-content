---
title: flex-direction
slug: Web/CSS/flex-direction
tags:
  - CSS
  - Propriété
  - Reference
translation_of: Web/CSS/flex-direction
---
{{CSSRef}}

La propriété **`flex-direction`** définit la façon dont les éléments flexibles sont placés dans un conteneur flexible : elle définit l'axe principal et la direction des éléments (normale ou inversée).

{{EmbedInteractiveExample("pages/css/flex-direction.html")}}

On notera que les valeurs `row` et `row-reverse` sont impactées par la direction du conteneur. Si {{htmlattrxref("dir")}} vaut `ltr`, `row` représente l'axe horizontal allant de la gauche vers la droite et `row-reverse` représente le même axe allant de la droite vers la gauche. Si `dir` vaut `rtl`, `row` correspondra à l'axe horizontal orienté de la droite vers la gauche et `row-reverse` de la gauche vers la droite.

Pour plus d'informations, voir la page [Utiliser les boîtes flexibles (_flexbox_) CSS](/fr/docs/Web/CSS/CSS_Flexible_Box_Layout/Utilisation_des_flexbox_en_CSS).

## Syntaxe

```css
/* La direction suit une ligne */
flex-direction: row;

/* Semblable à <row> mais dans */
/* la direction opposée        */
flex-direction: row-reverse;

/* Les lignes de texte sont */
/* empilées                 */
flex-direction: column;

/* Semblable à <column> mais dans */
/* la direction opposée           */
flex-direction: column-reverse;

/* Valeurs globales */
flex-direction: inherit;
flex-direction: initial;
flex-direction: unset;
```

### Valeurs

- `row`
  - : L'axe principal du conteneur flexible suit la direction du texte. Les points **main-start** et **main-end** vont dans la même direction que le contenu.
- `row-reverse`
  - : L'axe principal du conteneur flexible suit la direction du texte. Les points **main-start** et **main-end** vont dans la direction opposée au contenu.
- `column`
  - : L'axe principal du conteneur flexible suit l'axe de bloc (perpendiculaire à la direction du texte). Les points **main-start** et **main-end** correspondent aux points **before** et **after** de {{cssxref("writing-mode")}}.
- `column-reverse`
  - : Se comporte comme `column` mais **main-start** et **main-end** sont échangés.

### Syntaxe formelle

{{csssyntax}}

## Exemples

### HTML

```html
<h4>Un exemple avec column-reverse</h4>
<div id="content">
    <div class="box" style="background-color:red;">A</div>
    <div class="box" style="background-color:lightblue;">B</div>
    <div class="box" style="background-color:yellow;">C</div>
</div>
<h4>Un exemple avec row-reverse</h4>
<div id="content1">
    <div class="box" style="background-color:red;">A</div>
    <div class="box" style="background-color:lightblue;">B</div>
    <div class="box" style="background-color:yellow;">C</div>
</div>
```

### CSS

```css
#content {
  width: 200px;
  height: 200px;
  border: 1px solid #c3c3c3;
  display: flex;
  flex-direction: column-reverse;
}

#content1 {
  width: 200px;
  height: 200px;
  border: 1px solid #c3c3c3;
  display: flex;
  flex-direction: row-reverse;
}

.box {
  width: 50px;
  height: 50px;
}
```

### Résultat

{{EmbedLiveSample('Exemples', '', '300')}}

## Accessibilité

Lorsqu'on utilise `flex-direction` avec les valeurs `row-reverse` ou `column-reverse`, on crée une déconnexion entre la présentation visuelle du contenu et l'ordre du DOM. Cela aura un impact négatif pour les utilisateurs qui naviguent à l'aide d'outils d'assistance tels que les les lecteurs d'écran. Si l'ordre visuel est important, les utilisateurs de lecteurs d'écran n'auront pas accès à l'ordre correct pour la lecture.

- [Les boîtes flexibles et la déconnexion par rapport à la navigation au clavier, Tink (en anglais)](https://tink.uk/flexbox-the-keyboard-navigation-disconnect/)
- [L'importance de l'ordre de la source, Adrian Roselli (en anglais)](http://adrianroselli.com/2015/09/source-order-matters.html)
- [Comprendre les règles 1.3 du WCAG](/fr/docs/Web/Accessibility/Understanding_WCAG/Perceivable#Guideline_1.3_%E2%80%94_Create_content_that_can_be_presented_in_different_ways)
- [Comprendre les critères de réussite 1.3.2 WCAG 2.0, W3C (en anglais)](https://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-sequence.html)

## Spécifications

| Spécification                                                                            | État                             | Commentaires         |
| ---------------------------------------------------------------------------------------- | -------------------------------- | -------------------- |
| {{SpecName('CSS3 Flexbox', '#flex-direction', 'flex-direction')}} | {{Spec2('CSS3 Flexbox')}} | Définition initiale. |

{{cssinfo}}

## Compatibilité des navigateurs

{{Compat("css.properties.flex-direction")}}

## Voir aussi

- Guide CSS sur les boîtes flexibles : _[Concepts de base](/fr/docs/Web/CSS/Disposition_flexbox_CSS/Concepts_de_base_flexbox)_
- Guide CSS sur les boîtes flexibles : _[Ordonner les éléments flexibles](/fr/docs/Web/CSS/Disposition_flexbox_CSS/Ordering_Flex_Items)_
