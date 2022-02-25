---
title: place-content
slug: Web/CSS/place-content
tags:
  - CSS
  - Propriété
  - Propriété raccourcie
  - Reference
translation_of: Web/CSS/place-content
---
{{CSSRef}}

La propriété raccourcie **`place-content`** permet de définir les valeurs des propriétés {{cssxref("align-content")}} et {{cssxref("justify-content")}}. Elle peut être utilisée pour n'importe quelle méthode de disposition (boîtes flexibles, grilles, etc;) qui prend en charge ces deux propriétés d'alignement.

{{EmbedInteractiveExample("pages/css/place-content.html")}}Syntaxe

```css
/* Valeurs décrivant l'alignement */
/* Note : align-content ne gère pas les valeurs left et right */
place-content: center start;
place-content: start center;
place-content: end left;
place-content: flex-start center;
place-content: flex-end center;

/* Valeurs décrivant l'alignement par rapport à la ligne de base */
/* Note : justify-content ne gère pas les valeurs liées à la ligne de base */
place-content: baseline center;
place-content: first baseline space-evenly;
place-content: last baseline right;

/* Valeurs décrivant la distribution de l'alignment */
place-content: space-between space-evenly;
place-content: space-around space-evenly;
place-content: space-evenly stretch;
place-content: stretch space-evenly;

/* Valeurs globales */
place-content: inherit;
place-content: initial;
place-content: unset;
```

La première valeur utilisée sera celle qui correspond à {{cssxref("align-content")}} et la seconde valeur correspondra à {{cssxref("justify-content")}}. Si la deuxième valeur n'est pas présente, la première valeur indiquée sera également utilisée pour `justify-content`.

> **Attention :** Si une seule valeur est fournie et que celle-ci est invalide pour l'une ou l'autre des propriétés détaillées, c'est la déclaration entière qui sera invalide.

### Valeurs

- `start`
  - : Les éléments sont alignés vers le début du conteneur pour l'axe correspondant.
- `end`
  - : Les éléments sont alignés vers la fin du conteneur pour l'axe correspondant.
- `flex-start`
  - : Les éléments sont alignés vers le début du conteneur flexible pour l'axe correspondant. Cette valeur ne s'applique qu'aux éléments flexibles. Pour les éléments qui ne sont pas des éléments d'un conteneur flexible, cette valeur sera synonyme de `start`.
- `flex-end`
  - : Les éléments sont alignés vers la fin du conteneur flexible pour l'axe correspondant. Cette valeur ne s'applique qu'aux éléments flexibles. Pour les éléments qui ne sont pas des éléments d'un conteneur flexible, cette valeur sera synonyme de `end`.
- `center`
  - : Les éléments sont alignés au centre du conteneur dans l'axe correspondant.
- `left`
  - : Les éléments sont alignés vers le bord gauche du conteneur dans l'axe correspondant. Si l'axe de cette propriété n'est pas parallèle à l'axe en ligne (_inline axis_), cette valeur sera synonyme de `start`.
- `right`
  - : Les éléments sont alignés vers le bord droit du conteneur dans l'axe correspondant. Si l'axe de cette propriété n'est pas parallèle à l'axe en ligne (_inline axis_), cette valeur sera synonyme de `start`.
- `space-between`
  - : Les éléments sont équirépartis dans le conteneur sur l'axe correspondant. Ainsi, l'espace entre chaque élément adjacent sera le même. Le premier élément est aligné sur le bord du conteneur et le dernier élément est également aligné sur le bord du conteneur à la fin de l'axe.
- `baseline first baseline`
  `last baseline`
  - : Specifies participation in first- or last-baseline alignment: aligns the alignment baseline of the box’s first or last baseline set with the corresponding baseline in the shared first or last baseline set of all the boxes in its baseline-sharing group.
    The fallback alignment for `first baseline` is `start`, the one for `last baseline` is `end`.
- `space-around`
  - : Les éléments sont équirépartis dans le conteneur sur l'axe correspondant. L'espace entre chaque élément adjacent sera le même. L'espace entre le bord du conteneur et le premier élément sera la moitié de l'espace utilisé entre chaque élément. L'espace entre le dernier élément et le bord du conteneur sera la moitié de l'espace utilisé entre chaque élément.
- `space-evenly`
  - : Les éléments sont équirépartis dans le conteneur sur l'axe correspondant. L'espace entre chaque élément adjacent sera le même, ce sera également cet espace qui sera utilisé entre le bord du conteneur et le premier élément et entre le dernier élément et le bord du conteneur.
- `stretch`
  - : Si la somme des tailles des éléments est inférieure à la taille du conteneur pour l'axe correspondant, tous les éléments dimensionnés automatiquement seront étirés de la même façon (et pas de façon proportionnelle) tout en respectant les contraintes imposées par {{cssxref("max-height")}}/{{cssxref("max-width")}} (ou par les fonctionnalités équivalentes) afin que la taille de l'ensemble des éléments soit exactement celle du conteneur.

### Syntaxe formelle

{{CSSSyntax}}

## Exemples

### CSS

```css
#container {
  display: flex;
  height:240px;
  width: 240px;
  flex-wrap: wrap;
  background-color: #8c8c8c;
  writing-mode: horizontal-tb; /* Cette valeur peut être modifiée dans l'exemple */
  direction: ltr; /* Cette valeur peut être modifiée dans l'exemple */
  place-content: flex-end center; /* Cette valeur peut être modifiée dans l'exemple */
}

div > div {
  border: 2px solid #8c8c8c;
  width: 50px;
  background-color: #a0c8ff;
}

.small {
  font-size: 12px;
  height: 40px;
}

.large {
  font-size: 14px;
  height: 50px;
}
```

### HTML

```html
<div id="container">
  <div class="small">Lorem</div>
  <div class="small">Lorem<br/>ipsum</div>
  <div class="large">Lorem</div>
  <div class="large">Lorem<br/>impsum</div>
  <div class="large"></div>
  <div class="large"></div>
</div>
```

```html hidden
<code>writing-mode:</code><select id="writingMode">
  <option value="horizontal-tb" selected>horizontal-tb</option>
  <option value="vertical-rl">vertical-rl</option>
  <option value="vertical-lr">vertical-lr</option>
  <option value="sideways-rl">sideways-rl</option>
  <option value="sideways-lr">sideways-lr</option>
</select><code>;</code><br/>
<code>direction:</code><select id="direction">
  <option value="ltr" selected>ltr</option>
  <option value="rtl">rtl</option>
</select><code>;</code><br/>
<code>place-content:</code><select id="alignContentAlignment">
  <option value="normal">normal</option>
  <option value="first baseline">first baseline</option>
  <option value="last baseline">last baseline</option>
  <option value="baseline">baseline</option>
  <option value="space-between">space-between</option>
  <option value="space-around">space-around</option>
  <option value="space-evenly" selected>space-evenly</option>
  <option value="stretch">stretch</option>
  <option value="center">center</option>
  <option value="start">start</option>
  <option value="end">end</option>
  <option value="flex-start">flex-start</option>
  <option value="flex-end">flex-end</option>
</select>
<select id="justifyContentAlignment">
  <option value="normal">normal</option>
  <option value="space-between">space-between</option>
  <option value="space-around">space-around</option>
  <option value="space-evenly">space-evenly</option>
  <option value="stretch">stretch</option>
  <option value="center" selected>center</option>
  <option value="start">start</option>
  <option value="end">end</option>
  <option value="flex-start">flex-start</option>
  <option value="flex-end">flex-end</option>
  <option value="left">left</option>
  <option value="right">right</option>
</select><code>;</code>
```

```js hidden
var update = function () {
   document.getElementById("container").style.placeContent = document.getElementById("alignContentAlignment").value + " " + document.getElementById("justifyContentAlignment").value;
}

var alignContentAlignment = document.getElementById("alignContentAlignment");
alignContentAlignment.addEventListener("change",  update);

var justifyContentAlignment = document.getElementById("justifyContentAlignment");
justifyContentAlignment.addEventListener("change", update);

var writingM = document.getElementById("writingMode");
writingM.addEventListener("change", function (evt) {
   document.getElementById("container").style.writingMode = evt.target.value;
});
var direction = document.getElementById("direction");
direction.addEventListener("change", function (evt) {
   document.getElementById("container").style.direction = evt.target.value;
});
```

### Résultat

{{EmbedLiveSample("Exemples", "370", "300")}}

## Spécifications

| Spécification                                                                                            | État                                     | Commentaires         |
| -------------------------------------------------------------------------------------------------------- | ---------------------------------------- | -------------------- |
| {{SpecName("CSS3 Box Alignment", "#propdef-place-content", "place content")}} | {{Spec2("CSS3 Box Alignment")}} | Définition initiale. |

{{cssinfo}}

## Compatibilité des navigateurs

{{Compat("css.properties.place-content")}}

### Prise en charge pour les dispositions flexibles

{{Compat("css.properties.place-content.flex_context")}}

### Prise en charge pour les grilles

{{Compat("css.properties.place-content.grid_context")}}

## Voir aussi

- [Utiliser les boîtes flexibles en CSS](/fr/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox)
- Guide sur les grilles : _[Aligner des objets dans une grille](/fr/docs/Web/CSS/CSS_Grid_Layout/Box_Alignment_in_CSS_Grid_Layout)_
- Guide sur les boîtes flexibles : _[Les concepts de bases](/fr/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox)_
- Guide sur les boîtes flexibles : _[Aligner des objets dans un conteneur flexible](/fr/docs/Web/CSS/CSS_Flexible_Box_Layout/Aligning_Items_in_a_Flex_Container)_
- [Le module de spécification CSS Box Alignment](/fr/docs/Web/CSS/CSS_Box_Alignment)
- La propriété {{cssxref("align-content")}}
- La propriété {{cssxref("justify-content")}}
