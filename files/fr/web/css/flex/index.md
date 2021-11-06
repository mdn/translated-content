---
title: flex
slug: Web/CSS/flex
translation_of: Web/CSS/flex
---
{{CSSRef}}

La propriété **`flex`** est une propriété raccourcie qui définit la capacité d'un élément flexible à modifier ses dimensions afin de remplir l'espace disponible de son conteneur.

Les propriétés détaillées correspondantes à cette propriété raccourcie sont {{cssxref("flex-grow")}}, {{cssxref("flex-shrink")}} et {{cssxref("flex-basis")}}.

Les éléments flexibles peuvent être étirés ou réduits pour utiliser un espace proportionnel à leur coefficient de grossissement ou de rétrécissement afin de ne pas dépasser d'un conteneur.

{{EmbedInteractiveExample("pages/css/flex.html")}}

## Description

Pour la plupart des cas, on utilisera une des valeurs suivantes : `auto`, `initial`, `none` ou un nombre positif sans unité. Pour voir l'effet de ces valeurs, essayez de redimensionner les conteneurs flexibles ci-après :

```html hidden
<div class="flex-container">

   <div class="item auto">auto</div>
   <div class="item auto">auto</div>
   <div class="item auto">auto</div>

</div>

<div class="flex-container">

   <div class="item auto">auto</div>
   <div class="item initial">initial</div>
   <div class="item initial">initial</div>

</div>

<div class="flex-container">

   <div class="item auto">auto</div>
   <div class="item auto">auto</div>
   <div class="item none">none</div>

</div>

<div class="flex-container">

   <div class="item initial">initial</div>
   <div class="item none">none</div>
   <div class="item none">none</div>

</div>

<div class="flex-container">

   <div class="item four">4</div>
   <div class="item two">2</div>
   <div class="item one">1</div>

</div>
```

```css hidden
* {
  box-sizing: border-box;
}

.flex-container {
   background-color: #F4F7F8;
   resize: horizontal;
   overflow: hidden;
   display: flex;
   margin: 1em;
}

.item {
  margin: 1em;
  padding: 0.5em;
  width: 110px;
  min-width: 0;
  background-color: #1B5385;
  color: white;
  font-family: monospace;
}

.initial {
  flex: initial;
}

.auto {
  flex: auto;
}

.none {
  flex: none;
}

.four {
  flex: 4;
}

.two {
  flex: 2;
}

.one {
  flex: 1;
}
```

{{EmbedLiveSample("Description", "100%","370")}}

Par défaut, les éléments flexibles ne se rétrécissent pas en dessous de la taille minimale du contenu. Pour modifier ce comportement, il faudra paramétrer {{cssxref("min-width")}} ou {{cssxref("min-height")}}.

Voir la page [Utiliser les boîtes flexibles (_flexbox_) CSS](/fr/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox "CSS/Using_CSS_flexible_boxes") pour plus d'informations.

## Syntaxe

```css
/* Valeurs de base */
flex: auto;
flex: initial;
flex: none;

/* Une valeur sans unité pour flex-grow */
/* flex-basis vaut alors 0 */
flex: 2;

/* Une valeur, largeur/hauteur: flex-basis */
flex: 10em;
flex: 30px;
flex: content;

/* Deux valeurs : flex-grow | flex-basis */
flex: 1 30px;

/* Deux valeurs : flex-grow | flex-shrink */
/* flex-basis vaut alors 0 */
flex: 2 2;

/* Trois valeurs : flex-grow | flex-shrink | flex-basis */
flex: 2 2 10%;

/* Valeurs globales */
flex: inherit;
flex: initial;
flex: unset;
```

La propriété `flex` peut être définie avec une, deux ou trois valeurs.

- **Avec une valeur**, la syntaxe doit être :

  - un nombre sans unité ({{cssxref("&lt;number&gt;")}}) : celui-ci est alors interprété comme la valeur de [`<flex-grow>`](#grow)
  - ou une valeur de largeur valide ({{cssxref("width")}}) : celle-ci est alors interprétée comme la valeur de [`<flex-basis>`](#basis)
  - ou le mot-clé [`none`](#none).

- **Avec deux valeurs**

  - la première doit être un nombre sans unité ({{cssxref("&lt;number&gt;")}}) qui correspond à la valeur de [`<flex-grow>`](#grow).
  - la seconde valeur doit être :

    - un nombre sans unité ({{cssxref("&lt;number&gt;")}}) : celui-ci est alors interprété comme la valeur de [`<flex-shrink>`](#shrink)
    - ou une valeur de largeur valide ({{cssxref("width")}}) : celle-ci est alors interprétée comme la valeur de [`<flex-basis>`](#basis)

- **Avec trois valeurs**

  - la première valeur doit être un nombre sans unité ({{cssxref("&lt;number&gt;")}}) : celui-ci est alors interprété comme la valeur de [`<flex-grow>`](#grow)
  - la deuxième valeur doit être un nombre sans unité ({{cssxref("&lt;number&gt;")}}) : celui-ci est alors interprété comme la valeur de [`<flex-shrink>`](#shrink)
  - la troisième valeur doit être une valeur de largeur valide ({{cssxref("width")}}) : celle-ci est alors interprétée comme la valeur de [`<flex-basis>`](#basis)

### Valeurs

- `auto`
  - : L'élément est dimensionné selon ses propriétés `width` et `height` mais peut grandir pour absorber l'espace libre disponible dans le conteneur flexible ou rétrécir à sa taille minimale pour rentrer dans le conteneur. Cette valeur est équivalente à "`flex: 1 1 auto`".
- `initial`
  - : L'élément est dimensionné selon ses propriétés `width` et `height`. Ce comportement est équivalent à la valeur par défaut (`0 1 auto`). Si besoin, l'élément rétrécit à sa taille minimale pour rentrer dans le conteneur mais il ne grandira pas s'il y a de l'espace disponible dans ce conteneur. Ce mot-clé est équivalent à "`flex: 0 1 auto`".
- `none`
  - : L'élément est dimensionné par rapport à ses propriétés `width` et `height`. Il n'est pas flexible : il ne peut ni rétrécir ni grandir selon l'espace du conteneur flexible. Ce mot-clé est équivalent à "`flex: 0 0 auto`".
- `<'flex-grow'>`
  - : Voir {{cssxref("flex-grow")}}. Les valeurs négatives sont interdites et la valeur par défaut est `1`.
- `<'flex-shrink'>`
  - : Voir {{cssxref("flex-shrink")}}. Les valeurs négatives sont interdites et la valeur par défaut est `1`.
- `<'flex-basis'>`
  - : Voir {{cssxref("flex-basis")}}. Une valeur valide pour {{cssxref("width")}} et {{cssxref("height")}}. La valeur par défaut est `0`.

> **Note :** Lorsqu'on utilise une ou deux valeurs sans unité dans la règle, `flex-basis` vaudra 0. Pour plus d'informations, voir [le brouillon de spécification du module des boîtes flexibles](https://drafts.csswg.org/css-flexbox/#flex-common).

### Syntaxe formelle

{{csssyntax}}

## Exemples

### CSS

```css
#flex-container {
	display: flex;
	flex-direction: row;
}

#flex-container > .flex-item {
	flex: auto;
}

#flex-container > .raw-item {
	width: 5rem;
}
```

### HTML

```html
<div id="flex-container">
    <div class="flex-item" id="flex">Boîte flexible (cliquer pour passer à la boîte « normale »)</div>
    <div class="raw-item" id="raw">Boîte « normale » </div>
</div>
```

### JavaScript

```js
var flex = document.getElementById("flex");
var raw = document.getElementById("raw");
flex.addEventListener("click", function() {
	raw.style.display = raw.style.display == "none" ? "block" : "none";
});
```

```css
#flex-container {
	width: 100%;
	font-family: Consolas, Arial, sans-serif;
}

#flex-container > div {
	border: 1px solid #f00;
	padding: 1rem;
}

#flex-container > .raw-item {
	border: 1px solid #000;
}
```

### Résultat

{{EmbedLiveSample('Exemples','100%','60')}}

## Spécifications

| Spécification                                                            | État                             | Commentaires         |
| ------------------------------------------------------------------------ | -------------------------------- | -------------------- |
| {{SpecName('CSS3 Flexbox', '#flex-property', 'flex')}} | {{Spec2('CSS3 Flexbox')}} | Définition initiale. |

{{cssinfo}}

## Compatibilité des navigateurs

{{Compat("css.properties.flex")}}

## Voir aussi

- Guide sur les boîtes flexibles : _[Les concepts de bases](/fr/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox)_
- Guide sur les boîtes flexibles : _[Contrôler les proportions des boîtes flexibles le long de l'axe principal](/fr/docs/Web/CSS/CSS_Flexible_Box_Layout/Controlling_Ratios_of_Flex_Items_Along_the_Main_Ax)_
