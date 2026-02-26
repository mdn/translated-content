---
title: "Attribut HTML universel : anchor"
short-title: anchor
slug: Web/HTML/Reference/Global_attributes/anchor
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{Non-standard_Header}}{{SeeCompatTable}}

L'[attribut universel](/fr/docs/Web/HTML/Reference/Global_attributes) **`anchor`** permet d'associer un élément positionné à un élément d'ancre. La valeur de l'attribut correspond à la valeur de l'attribut [`id`](/fr/docs/Web/HTML/Reference/Global_attributes/id) de l'élément auquel vous voulez arrimer l'élément positionné. L'élément positionné peut ensuite être placé à l'aide de la [mise en position par ancrage en CSS](/fr/docs/Web/CSS/Guides/Anchor_positioning/Using).

> [!NOTE]
> Vous pouvez également associer un élément positionné à un élément d'ancre avec CSS, en utilisant les propriétés {{CSSxRef("anchor-name")}} et {{CSSxRef("position-anchor")}}. Si les deux techniques d'ancrage sont appliquées au même élément, la technique CSS prévaut sur la technique HTML.

## Exemples

### Utilisation simple de l'attribut `anchor`

L'exemple suivant utilise HTML pour associer un élément positionné à une ancre. Le CSS sert ensuite à fixer l'élément positionné à droite de l'ancre.

#### HTML

On crée un élément HTML {{HTMLElement("div")}} avec un `id` égal à `ancre-exemple`. Il s'agit de notre élément d'ancre. On inclut ensuite un autre `<div>` avec l'attribut `anchor` défini à `ancre-exemple`. Le premier `<div>` est ainsi désigné comme ancre pour le second, associant les deux éléments.

On ajoute également du texte de remplissage autour des deux `<div>` pour augmenter la hauteur du {{HTMLElement("body")}} afin de permettre le défilement.

```html
<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
  incididunt ut labore et dolore magna aliqua. Dui nunc mattis enim ut tellus
  elementum sagittis vitae et.
</p>

<div class="ancre" id="ancre-exemple">⚓︎</div>

<div class="boite-info" anchor="ancre-exemple">
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

```css hidden
body {
  width: 50%;
  margin: 0 auto;
}

.ancre {
  font-size: 1.8rem;
  color: white;
  text-shadow: 1px 1px 1px black;
  background-color: hsl(240 100% 75%);
  width: fit-content;
  border-radius: 10px;
  border: 1px solid black;
  padding: 3px;
}

.boite-info {
  color: darkblue;
  background-color: azure;
  border: 1px solid #dddddd;
  padding: 10px;
  border-radius: 10px;
  font-size: 1rem;
}
```

Le CSS est utilisé pour convertir l'élément `boite-info` en un _élément positionné par ancre_ et le positionner par rapport à son ancre. On définit&nbsp;:

- la propriété {{CSSxRef("position")}} à `fixed`, ce qui transforme l'élément en élément positionné pour qu'il puisse être placé relativement à la position de l'ancre&nbsp;;
- la propriété {{CSSxRef("left")}} à une fonction {{CSSxRef("anchor()")}} avec la valeur `right`. Cela rattache l'élément positionné à son ancre, en alignant son bord gauche sur le bord droit de l'ancre&nbsp;;
- la propriété {{CSSxRef("align-self")}} à [`anchor-center`](/fr/docs/Web/CSS/Guides/Anchor_positioning/Using#centrage_sur_lancre_à_laide_de_anchor-center). Cela centre la boîte d'information par rapport au centre de l'ancre dans la direction en ligne&nbsp;;
- la propriété {{CSSxRef("margin-left")}} à `10px`, créant un espace entre l'élément positionné par ancre et son ancre.

```css
.boite-info {
  position: fixed;
  left: anchor(right);
  align-self: anchor-center;
  margin-left: 10px;
}
```

#### Résultat

Faites défiler l'exemple pour voir comment la boîte d'information est arrimée à l'ancre. Lorsque l'attribut `anchor` est pris en charge, la boîte d'information sera fixée à droite de l'ancre. Sinon, la boîte d'information sera fixée à la fenêtre d'affichage.

{{EmbedLiveSample("Utilisation simple de l'attribut `anchor`", "100%", 225)}}

## Spécifications

Cet attribut ne fait pas encore partie de la spécification HTML. Consultez la discussion sur l'ajout de l'attribut `anchor` à [https://github.com/whatwg/html/pull/9144](https://github.com/whatwg/html/pull/9144).

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété DOM {{DOMxRef("HTMLElement.anchorElement")}}
- La propriété CSS {{CSSxRef("anchor-name")}}
- La propriété CSS {{CSSxRef("position-anchor")}}
- Le module de [mise en position par ancrage en CSS](/fr/docs/Web/CSS/Guides/Anchor_positioning)
