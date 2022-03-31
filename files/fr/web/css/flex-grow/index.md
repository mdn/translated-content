---
title: flex-grow
slug: Web/CSS/flex-grow
tags:
  - CSS
  - Propriété
  - Reference
translation_of: Web/CSS/flex-grow
---
{{CSSRef}}

La propriété CSS **`flex-grow`** définit le facteur d'expansion d'un élément flexible selon sa dimension principale. Elle indique la quantité d'espace restant que l'élément devrait consommer dans un conteneur flexible relativement à la taille des autres éléments du même conteneur.

La dimension principale correspond à la hauteur ou à la largeur de l'élément selon la valeur de {{cssxref("flex-direction")}}.

L'espace restant qui est réparti correspond à la taille du conteneur flexible moins la somme des tailles des éléments flexibles. Si tous les éléments voisins possèdent le même facteur d'expansion, ils recevront tous la même part d'espace.

La plupart du temps `flex-grow` est utilisé avec les autres propriétés flexibles {{cssxref("flex-shrink")}} et {{cssxref("flex-basis")}}. On pourra utiliser la propriété raccourcie {{cssxref("flex")}} afin de s'assurer que toutes les valeurs des propriétés flexibles auront été définies.

{{EmbedInteractiveExample("pages/css/flex-grow.html")}}

Pour plus d'informations, voir la page [Utiliser les boîtes flexibles (_flexbox_) CSS](/fr/docs/Web/CSS/CSS_Flexible_Box_Layout/Utilisation_des_flexbox_en_CSS).

## Syntaxe

```css
flex-grow: 2;
flex-grow: 0.6;

/* Valeurs globales */
flex-shrink: inherit;
flex-shrink: initial;
flex-shrink: unset;
```

La propriété `flex-grow` se définit avec une valeur de type [`<number>`](#number).

### Valeurs

- `<number>`
  - : Un nombre (type {{cssxref("&lt;number&gt;")}} qui correspond au facteur de grossissement utilisé. Plus la valeur est élevée, plus l'élément sera étendu si nécessaire. Les valeurs négatives sont invalides. La valeur par défaut est 0.

### Syntaxe formelle

{{csssyntax}}

## Exemples

### HTML

```html
<h4>A,B,C et F ont flex-shrink:1 . D et E ont flex-grow:1 .</h4>
<div id="content">
  <div class="box" style="background-color:red;">A</div>
  <div class="box" style="background-color:lightblue;">B</div>
  <div class="box" style="background-color:yellow;">C</div>
  <div class="box1" style="background-color:brown;">D</div>
  <div class="box1" style="background-color:lightgreen;">E</div>
  <div class="box" style="background-color:brown;">F</div>
</div>
```

### CSS

```css
#content {
  display: flex;

  justify-content: space-around;
  flex-flow: row wrap;
  align-items: stretch;
}

.box {
  flex-shrink: 1;
  border: 3px solid rgba(0,0,0,.2);
}

.box1 {
  flex-grow: 1;
  border: 3px solid rgba(0,0,0,.2);
}
```

### Résultat

{{EmbedLiveSample('Exemples', '700px', '300px')}}

## Spécifications

| Spécification                                                                        | État                             | Commentaires         |
| ------------------------------------------------------------------------------------ | -------------------------------- | -------------------- |
| {{SpecName('CSS3 Flexbox','#flex-grow-property','flex-grow')}} | {{Spec2('CSS3 Flexbox')}} | Définition initiale. |

{{cssinfo}}

## Compatibilité des navigateurs

{{Compat("css.properties.flex-grow")}}

## Voir aussi

- [`flex-grow` est étrange ?](https://css-tricks.com/flex-grow-is-weird/) un article (en anglais) écrit par Manuel Matuzovic sur CSS-Tricks et qui illustre le fonctionnement de `flex-grow`
- Guide sur les boîtes flexibles : _[Les concepts de bases](/fr/docs/Web/CSS/Disposition_flexbox_CSS/Concepts_de_base_flexbox)_
- Guide sur les boîtes flexibles : _[Contrôler les proportions des boîtes flexibles le long de l'axe principal](/fr/docs/Web/CSS/Disposition_flexbox_CSS/Contrôler_les_proportions_des_boîtes_flexibles_le_long_de_l_axe_principal)_
