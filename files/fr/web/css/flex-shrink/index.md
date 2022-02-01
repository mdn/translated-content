---
title: flex-shrink
slug: Web/CSS/flex-shrink
tags:
  - CSS
  - Propriété
  - Reference
translation_of: Web/CSS/flex-shrink
---
{{CSSRef}}

La propriété **`flex-shrink`** définit le facteur de rétrécissement d'un élément flexible. Si la taille de l'ensemble des éléments flexibles est supérieure à la taille du conteneur, les éléments seront comprimés selon leur facteur `flex-shrink`.

`flex-shrink` est généralement utilisé avec les propriétés {{cssxref("flex-grow")}} et {{cssxref("flex-basis")}}. Elle est souvent définie grâce à la propriété raccourcie {{cssxref("flex")}}.

{{EmbedInteractiveExample("pages/css/flex-shrink.html")}}

Pour plus d'informations, voir la page [Utiliser les boîtes flexibles (_flexbox_) CSS](/fr/docs/Web/CSS/CSS_Flexible_Box_Layout/Utilisation_des_flexbox_en_CSS).

## Syntaxe

```css
/* Valeurs numériques */
/* Type <number>      */
flex-shrink: 2;
flex-shrink: 0.6;

/* Valeurs globales */
flex-shrink: inherit;
flex-shrink: initial;
flex-shrink: unset;
```

La propriété `flex-shrink` est définie grâce à une valeur de type [`<number>`](#number).

### Valeurs

- `<number>`
  - : Un nombre (type {{cssxref("&lt;number&gt;")}}) qui correspond au facteur de rétrécissement utilisé. Plus la valeur est élevée, plus l'élément sera compressé si nécessaire. Les valeurs négatives sont invalides. La valeur par défaut est `1`.

### Syntaxe formelle

{{csssyntax}}

## Exemples

### HTML

```html
<p>A,B,C ont flex-shrink: 1. D et E ont flex-shrink: 2.</p>
<div id="content">
  <div class="box" style="background-color:red;">A</div>
  <div class="box" style="background-color:lightblue;">B</div>
  <div class="box" style="background-color:yellow;">C</div>
  <div class="box1" style="background-color:brown;">D</div>
  <div class="box1" style="background-color:lightgreen;">E</div>
</div>
```

### CSS

```css
#content {
  display: flex;
  width: 500px;
}

#content div {
  flex-basis: 120px;
  border: 3px solid rgba(0,0,0.2);
}

.box {
  flex-shrink: 1;
}

.box1 {
  flex-shrink: 2;
}
```

### Résultat

{{EmbedLiveSample('Exemples', 500, 300)}}

## Spécifications

| Spécification                                                                    | État                             | Commentaires         |
| -------------------------------------------------------------------------------- | -------------------------------- | -------------------- |
| {{SpecName('CSS3 Flexbox', '#flex-shrink', 'flex-shrink')}} | {{Spec2('CSS3 Flexbox')}} | Définition initiale. |

{{cssinfo}}

## Compatibilité des navigateurs

{{Compat("css.properties.flex-shrink")}}

## Voir aussi

- Guide sur les boîtes flexibles : _[Les concepts de bases](/fr/docs/Web/CSS/Disposition_flexbox_CSS/Concepts_de_base_flexbox)_
- Guide sur les boîtes flexibles : _[Contrôler les proportions des boîtes flexibles le long de l'axe principal](/fr/docs/Web/CSS/Disposition_flexbox_CSS/Contrôler_les_proportions_des_boîtes_flexibles_le_long_de_l_axe_principal)_
