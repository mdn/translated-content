---
title: anchor-name
slug: Web/CSS/Reference/Properties/anchor-name
l10n:
  sourceCommit: 8300697ca75ca1e77175912110d4fe9ef48cb0bb
---

La propriété [CSS](/fr/docs/Web/CSS) **`anchor-name`** permet de définir un élément comme **élément d'ancre** en lui attribuant un ou plusieurs **noms d'ancre**. Chaque nom peut ensuite être utilisé comme valeur de la propriété {{CSSxRef("position-anchor")}} d'un élément positionné pour l'associer à l'ancre.

## Syntaxe

```css
/* Valeurs uniques */
anchor-name: none;
anchor-name: --name;

/* Valeurs multiples */
anchor-name: --name, --another-name;

/* Valeurs globales */
anchor-name: inherit;
anchor-name: initial;
anchor-name: revert;
anchor-name: revert-layer;
anchor-name: unset;
```

### Valeurs

- `none`
  - : Valeur par défaut. Définir `anchor-name: none` sur un élément signifie qu'il n'est pas défini comme élément d'ancre. Si l'élément était précédemment défini comme ancre et associé à un élément positionné, définir `anchor-name: none` dissocie les deux.

- {{CSSxRef("dashed-ident")}}
  - : Un ou plusieurs identifiants personnalisés séparés par des virgules, définissant le ou les noms de l'ancre, qui peuvent ensuite être référencés dans une propriété {{CSSxRef("position-anchor")}}.

## Description

Pour positionner un élément par rapport à un élément d'ancre, l'élément positionné requiert trois caractéristiques&nbsp;: une association, une position et un emplacement. Les propriétés `anchor-name` et {{CSSxRef("position-anchor")}} fournissent une association explicite.

L'élément d'ancre accepte un ou plusieurs noms d'ancre `<dashed-ident>` définis via la propriété `anchor-name`. Lorsqu'un de ces noms est ensuite utilisé comme valeur de la propriété `position-anchor` d'un élément ayant sa propriété {{CSSxRef("position")}} définie à `absolute` ou `fixed`, les deux éléments sont associés. Ils deviennent liés en définissant un emplacement sur l'élément associé par rapport à l'ancre, ce qui en fait un «&nbsp;élément positionné par ancre&nbsp;».

Si plusieurs éléments d'ancre partagent le même nom d'ancre, et que ce nom est référencé par la propriété `position-anchor` d'un élément positionné, cet élément sera associé au dernier élément d'ancre portant ce nom dans l'ordre du DOM.

Le positionnement par ancre modifie le [bloc englobant](/fr/docs/Web/CSS/Guides/Display/Containing_block) des éléments positionnés par ancre, rendant leur `position` relative à leur ancre plutôt qu'au plus proche ancêtre positionné.

Pour lier et placer un élément positionné à un emplacement précis par rapport à un élément d'ancre, une fonctionnalité de positionnement par ancre est nécessaire, comme la fonction {{CSSxRef("anchor()")}} (utilisée dans la valeur d'une {{Glossary("inset properties", "propriété d'encart")}}) ou la propriété {{CSSxRef("position-area")}}.

Vous ne pouvez pas associer un élément positionné à une ancre si l'ancre est masquée, par exemple avec {{CSSxRef("display", "display: none")}} ou {{CSSxRef("visibility", "visibility: hidden")}}, ou si l'ancre fait partie du [contenu ignoré](/fr/docs/Web/CSS/Guides/Containment/Using#ignorer_son_contenu) d'un autre élément à cause de {{CSSxRef("content-visibility", "content-visibility: hidden")}}.

La propriété `anchor-name` est prise en charge sur tous les éléments qui génèrent une boîte principale. Cela signifie que les [pseudo-éléments](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-elements), y compris le contenu généré avec {{CSSxRef("::before")}} et {{CSSxRef("::after")}}, ainsi que des éléments d'interface comme le curseur du champ [`range`](/fr/docs/Web/HTML/Reference/Elements/input/range) ({{CSSxRef("::-webkit-slider-thumb")}}), peuvent être des éléments d'ancre. Les pseudo-éléments sont implicitement ancrés au même élément que l'élément d'origine du pseudo-élément, sauf indication contraire.

Pour plus d'informations sur les fonctionnalités et l'utilisation des ancres, consultez le module [Positionnement par ancre CSS](/fr/docs/Web/CSS/Guides/Anchor_positioning) et le guide [Utiliser le positionnement par ancre CSS](/fr/docs/Web/CSS/Guides/Anchor_positioning/Using).

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Utilisation simple

Cet exemple associe un élément positionné à une ancre, en positionnant l'élément à droite de l'ancre.

#### HTML

Nous définissons deux éléments HTML {{HTMLElement("div")}}&nbsp;: un élément d'ancre avec la classe `anchor` et un élément positionné avec la classe `infobox`.

Nous ajoutons également du texte de remplissage autour des deux `<div>` pour que le {{HTMLElement("body")}} soit plus haut et nécessite un défilement.

```html
<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
  incididunt ut labore et dolore magna aliqua. Dui nunc mattis enim ut tellus
  elementum sagittis vitae et.
</p>

<div class="anchor">⚓︎</div>

<div class="infobox">
  <p>Ceci est une boîte d'information.</p>
</div>

<p>
  Nisi quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus. In arcu
  cursus euismod quis viverra nibh cras pulvinar. Vulputate ut pharetra sit amet
  aliquam.
</p>

<p>
  Malesuada nunc vel risus commodo viverra maecenas accumsan lacus. Vel elit
  scelerisque mauris pellentesque pulvinar pellentesque habitant morbi
  tristique. Porta lorem mollis aliquam ut porttitor. Turpis cursus in hac
  habitasse platea dictumst quisque. Dolor sit amet consectetur adipiscing elit.
  Ornare lectus sit amet est placerat. Nulla aliquet porttitor lacus luctus
  accumsan.
</p>
```

#### CSS

Nous commençons par déclarer la `<div>` `anchor` comme élément d'ancre en lui attribuant un nom d'ancre via la propriété `anchor-name`&nbsp;:

```css hidden
body {
  width: 50%;
  margin: 0 auto;
}

.anchor {
  font-size: 1.8rem;
  color: white;
  text-shadow: 1px 1px 1px black;
  background-color: hsl(240 100% 75%);
  width: fit-content;
  border-radius: 10px;
  border: 1px solid black;
  padding: 3px;
}
```

```css
.anchor {
  anchor-name: --my-anchor;
}
```

Nous associons la seconde `<div>` à l'élément d'ancre en définissant son nom d'ancre comme valeur de la propriété {{CSSxRef("position-anchor")}} de l'élément positionné. Nous définissons ensuite&nbsp;:

- la propriété {{CSSxRef("position")}} à `fixed`, ce qui convertit l'élément en _élément positionné par ancre_ pour qu'il puisse être positionné par rapport à l'ancre sur la page&nbsp;;
- les propriétés {{CSSxRef("left")}} et {{CSSxRef("top")}} à des fonctions {{CSSxRef("anchor()")}} avec les valeurs `right` et `top` respectivement. Cela place le bord gauche de la boîte d'information contre le bord droit de son ancre, et son bord supérieur par rapport au bord supérieur de l'ancre&nbsp;;
- {{CSSxRef("margin-left")}} à `10px`, pour créer un espace entre l'élément positionné et son ancre.

```css hidden
.infobox {
  color: darkblue;
  background-color: azure;
  border: 1px solid #dddddd;
  padding: 10px;
  border-radius: 10px;
  font-size: 1rem;
}
```

```css
.infobox {
  position-anchor: --my-anchor;
  position: fixed;
  left: anchor(right);
  top: anchor(top);
  margin-left: 10px;
}
```

#### Résultat

Faites défiler la page pour voir comment la boîte d'information est positionnée par rapport à l'ancre. Lorsque l'ancre défile vers le haut, l'élément positionné se déplace avec elle.

{{EmbedLiveSample("Utilisation simple", "100%", 225)}}

### Plusieurs éléments positionnés

Cet exemple montre comment associer plusieurs éléments positionnés à une seule ancre.

#### HTML

Le code HTML est identique à l'exemple précédent, sauf qu'ici nous avons plusieurs éléments `<div>` positionnés avec des [`id`](/fr/docs/Web/HTML/Reference/Global_attributes/id) différents pour les identifier.

```html
<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
  incididunt ut labore et dolore magna aliqua. Dui nunc mattis enim ut tellus
  elementum sagittis vitae et.
</p>

<div class="anchor">⚓︎</div>

<div class="infobox" id="infobox1">
  <p>Ceci est une boîte d'information.</p>
</div>

<div class="infobox" id="infobox2">
  <p>Ceci est une autre boîte d'information.</p>
</div>

<p>
  Nisi quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus. In arcu
  cursus euismod quis viverra nibh cras pulvinar. Vulputate ut pharetra sit amet
  aliquam.
</p>

<p>
  Malesuada nunc vel risus commodo viverra maecenas accumsan lacus. Vel elit
  scelerisque mauris pellentesque pulvinar pellentesque habitant morbi
  tristique. Porta lorem mollis aliquam ut porttitor. Turpis cursus in hac
  habitasse platea dictumst quisque. Dolor sit amet consectetur adipiscing elit.
  Ornare lectus sit amet est placerat. Nulla aliquet porttitor lacus luctus
  accumsan.
</p>
```

#### CSS

Nous déclarons la `<div>` `anchor` comme un élément d'ancre en utilisant la propriété `anchor-name`, en lui attribuant un nom d'ancre comme précédemment.

```css hidden
body {
  width: 50%;
  margin: 0 auto;
}

.anchor {
  font-size: 1.8rem;
  color: white;
  text-shadow: 1px 1px 1px black;
  background-color: hsl(240 100% 75%);
  width: fit-content;
  border-radius: 10px;
  border: 1px solid black;
  padding: 3px;
}
```

```css
.anchor {
  anchor-name: --my-anchor;
}
```

Chacun des deux éléments positionnés est associé à l'élément d'ancre en définissant son nom d'ancre comme valeur de la propriété {{CSSxRef("position-anchor")}} de l'élément positionné. Les deux éléments reçoivent également la position `fixed`, ce qui en fait des **éléments positionnés par ancre**. Les éléments positionnés sont ensuite placés à différents endroits autour de l'ancre à l'aide d'une combinaison de propriétés d'encart comme ci-dessus et des propriétés {{CSSxRef("align-self")}} / {{CSSxRef("justify-self")}} avec la valeur `anchor-center`, alignant la boîte d'information au centre de l'ancre dans les directions en ligne et en bloc respectivement.

```css hidden
.infobox {
  color: darkblue;
  background-color: azure;
  border: 1px solid #dddddd;
  padding: 10px;
  border-radius: 10px;
  font-size: 1rem;
}
```

```css
.infobox {
  position-anchor: --my-anchor;
  position: fixed;
}

#infobox1 {
  left: anchor(right);
  align-self: anchor-center;
  margin-left: 10px;
}

#infobox2 {
  bottom: anchor(top);
  justify-self: anchor-center;
  margin-bottom: 15px;
}
```

#### Résultat

Faites défiler la page pour voir comment les deux boîtes d'information sont rattachées à l'ancre.

{{EmbedLiveSample("Plusieurs éléments positionnés", "100%", 225)}}

### Plusieurs noms d'ancre

Cet exemple montre qu'un élément d'ancre peut avoir plusieurs noms d'ancre.

#### HTML

Le code HTML est identique à l'exemple précédent.

```html hidden
<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
  incididunt ut labore et dolore magna aliqua. Dui nunc mattis enim ut tellus
  elementum sagittis vitae et.
</p>

<div class="anchor">⚓︎</div>

<div class="infobox" id="infobox1">
  <p>Ceci est une boîte d'information.</p>
</div>

<div class="infobox" id="infobox2">
  <p>Ceci est une autre boîte d'information.</p>
</div>

<p>
  Nisi quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus. In arcu
  cursus euismod quis viverra nibh cras pulvinar. Vulputate ut pharetra sit amet
  aliquam.
</p>

<p>
  Malesuada nunc vel risus commodo viverra maecenas accumsan lacus. Vel elit
  scelerisque mauris pellentesque pulvinar pellentesque habitant morbi
  tristique. Porta lorem mollis aliquam ut porttitor. Turpis cursus in hac
  habitasse platea dictumst quisque. Dolor sit amet consectetur adipiscing elit.
  Ornare lectus sit amet est placerat. Nulla aliquet porttitor lacus luctus
  accumsan.
</p>
```

#### CSS

Le CSS est identique à l'exemple précédent, à ceci près que nous incluons deux noms séparés par des virgules dans la valeur de la propriété `anchor-name` de la cible et que chaque élément positionné a une valeur différente pour `position-anchor`.

```css hidden
body {
  width: 50%;
  margin: 0 auto;
}

.anchor {
  font-size: 1.8rem;
  color: white;
  text-shadow: 1px 1px 1px black;
  background-color: hsl(240 100% 75%);
  width: fit-content;
  border-radius: 10px;
  border: 1px solid black;
  padding: 3px;
}

.infobox {
  color: darkblue;
  background-color: azure;
  border: 1px solid #dddddd;
  padding: 10px;
  border-radius: 10px;
  font-size: 1rem;
}
```

```css
.anchor {
  anchor-name: --anchor1, --anchor2;
}

.infobox {
  position: fixed;
}

#infobox1 {
  position-anchor: --anchor1;
  left: anchor(right);
  align-self: anchor-center;
  margin-left: 10px;
}

#infobox2 {
  position-anchor: --anchor2;
  bottom: anchor(top);
  justify-self: anchor-center;
  margin-bottom: 15px;
}
```

#### Résultat

Faites défiler la page pour voir comment les deux boîtes d'information sont rattachées à l'ancre.

{{EmbedLiveSample("Plusieurs noms d'ancre", "100%", 225)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{CSSxRef("position-anchor")}}
- La propriété {{CSSxRef("anchor-scope")}}
- L'attribut HTML [`anchor`](/fr/docs/Web/HTML/Reference/Global_attributes/anchor)
- Le module [de position par ancre CSS](/fr/docs/Web/CSS/Guides/Anchor_positioning)
- Le guide [d'utilisation de positionnement d'ancre CSS](/fr/docs/Web/CSS/Guides/Anchor_positioning/Using)
