---
title: anchor()
slug: Web/CSS/Reference/Values/anchor
l10n:
  sourceCommit: 3e0ba995376cace7f08f0771635f86f0fb1753b3
---

La [fonction](/fr/docs/Web/CSS/Reference/Values/Functions) [CSS](/fr/docs/Web/CSS) **`anchor()`** peut être utilisée dans les valeurs d'une [propriété d'encart](#propriétés_acceptant_les_valeurs_de_la_fonction_anchor) d'un élément **positionné par ancre**, et retourne une valeur de longueur relative à la position des bords de l'élément d'ancre associé.

## Syntaxe

```css
/* côté ou pourcentage */
top: anchor(bottom);
top: anchor(50%);
top: calc(anchor(bottom) + 10px)
inset-block-end: anchor(start);

/* côté de l'ancre nommée */
top: anchor(--my-anchor bottom);
inset-block-end: anchor(--my-anchor start);

/* côté de l'ancre nommée avec valeur de repli */
top: anchor(--my-anchor bottom, 50%);
inset-block-end: anchor(--my-anchor start, 200px);
left: calc(anchor(--my-anchor right, 0%) + 10px);
```

### Paramètres

La syntaxe de la fonction `anchor()` est la suivante&nbsp;:

```plain
anchor(<anchor-name> <anchor-side>, <length-percentage>)
```

Les paramètres sont&nbsp;:

- `<anchor-name>` {{Optional_Inline}}
  - : La valeur de la propriété {{CSSxRef("anchor-name")}} de l'élément d'ancre auquel vous voulez positionner le côté de l'élément. Il s'agit d'une valeur `<dashed-ident>`. Si elle est omise, l'élément utilise son **ancre par défaut**, référencée dans sa propriété {{CSSxRef("position-anchor")}}, ou associée à l'élément via l'attribut HTML [`anchor`](/fr/docs/Web/HTML/Reference/Global_attributes/anchor).

    > [!NOTE]
    > Définir un `<anchor-name>` à l'intérieur d'une fonction `anchor()` n'associe pas un élément à une ancre&nbsp;; cela ne sert qu'à positionner l'élément par rapport à cette ancre. La propriété CSS {{CSSxRef("position-anchor")}} ou l'attribut HTML [`anchor`](/fr/docs/Web/HTML/Reference/Global_attributes/anchor) reste nécessaire pour créer l'association.

- `<anchor-side>`
  - : Définit le côté de l'ancre, ou la distance relative depuis le côté de départ (`start`), par rapport auquel vous positionnez l'élément. Si une valeur physique ou logique est utilisée et qu'elle n'est pas [compatible](#compatibilité_des_propriétés_dencart_et_des_valeurs_anchor-side) avec la propriété d'encart sur laquelle `anchor()` est définie, la valeur de repli est utilisée. Les valeurs valides comprennent&nbsp;:
    - `top`
      - : Le haut de l'élément d'ancre.
    - `right`
      - : Le côté droit de l'élément d'ancre.
    - `bottom`
      - : Le bas de l'élément d'ancre.
    - `left`
      - : Le côté gauche de l'élément d'ancre.
    - `inside`
      - : Le même côté que la propriété d'encart.
    - `outside`
      - : Le côté opposé de la propriété d'encart.
    - `start`
      - : Le début logique du [bloc contenant](/fr/docs/Web/CSS/Guides/Display/Containing_block) de l'élément d'ancre le long de l'axe de la propriété d'encart sur laquelle la fonction `anchor()` est définie.
    - `end`
      - : La fin logique du bloc contenant de l'élément d'ancre le long de l'axe de la propriété d'encart sur laquelle la fonction `anchor()` est définie.
    - `self-start`
      - : Le début logique du contenu de l'élément d'ancre le long de l'axe de la propriété d'encart sur laquelle la fonction `anchor()` est définie.
    - `self-end`
      - : La fin logique du contenu de l'élément d'ancre le long de l'axe de la propriété d'encart sur laquelle la fonction `anchor()` est définie.
    - `center`
      - : Le centre de l'axe de la propriété d'encart sur laquelle la fonction `anchor()` est définie.
    - {{CSSxRef("percentage")}}
      - : Définit la distance, en pourcentage, depuis le début du contenu de l'élément le long de l'axe de la propriété d'encart sur laquelle la fonction `anchor()` est définie.

- {{CSSxRef("length-percentage")}} {{Optional_Inline}}
  - : Définit une valeur de repli que la fonction doit utiliser si la fonction `anchor()` n'est pas valide.

### Valeur de retour

Renvoie une valeur {{CSSxRef("length")}}.

## Description

La fonction `anchor()` permet de positionner un élément par rapport aux bords d'un élément d'ancre. Elle n'est valide que dans les valeurs des {{Glossary("inset properties", "propriété d'encart")}} appliquées à des éléments en position absolue ou fixe.

Elle retourne une valeur `<length>` qui définit la distance entre le côté de l'élément positionné par ancre indiqué par la valeur d'encart et le côté de l'élément d'ancre indiqué par la valeur `<anchor-side>` choisie. Comme elle retourne une `<length>`, elle peut être utilisée dans [d'autres fonctions CSS](/fr/docs/Web/CSS/Reference/Values/Functions) acceptant des valeurs de longueur, y compris {{CSSxRef("calc()")}}, {{CSSxRef("clamp()")}}, etc.

Si aucune ancre portant le nom défini par `<anchor-name>` n'existe, ou si l'élément positionné n'a pas d'ancre associée (par exemple via la propriété {{CSSxRef("position-anchor")}}), le premier paramètre est considéré comme invalide et la valeur de repli `<length-percentage>` est utilisée si elle est disponible. Par exemple, si `top: anchor(bottom, 50px)` est défini sur l'élément positionné mais qu'aucune ancre n'est associée, la valeur de repli sera utilisée, donc `top` aura une valeur calculée de `50px`.

Pour plus d'informations sur les fonctionnalités et l'utilisation des ancres, consultez le module [Positionnement par ancre CSS](/fr/docs/Web/CSS/Guides/Anchor_positioning) et le guide [Utiliser le positionnement par ancre CSS](/fr/docs/Web/CSS/Guides/Anchor_positioning/Using).

### Propriétés acceptant les valeurs de la fonction `anchor()`

Les {{Glossary("inset properties", "propriétés d'encart")}} CSS qui acceptent une fonction `anchor()` comme composant de valeur incluent&nbsp;:

- {{CSSxRef("top")}}
- {{CSSxRef("left")}}
- {{CSSxRef("bottom")}}
- {{CSSxRef("right")}}
- {{CSSxRef("inset")}} (raccourcie)
- {{CSSxRef("inset-block-start")}}
- {{CSSxRef("inset-block-end")}}
- {{CSSxRef("inset-block")}} (raccourcie)
- {{CSSxRef("inset-inline-start")}}
- {{CSSxRef("inset-inline-end")}}
- {{CSSxRef("inset-inline")}} (raccourcie)

### Compatibilité des propriétés d'encart et des valeurs `<anchor-side>`

Lorsque vous utilisez une fonction `anchor()` dans la valeur d'une propriété d'encart, le paramètre `<anchor-side>` indiqué dans la fonction doit être compatible avec l'axe sur lequel la propriété d'encart s'applique.

Cela signifie que les valeurs physiques de `<anchor-side>` peuvent être utilisées dans les propriétés d'encart physiques si la propriété a la même direction d'axe que `<anchor-side>`. Autrement dit, les côtés `top` et `bottom` ne sont pas valides dans les propriétés `left` et `right`, et inversement, les côtés `left` et `right` ne sont pas valides dans les propriétés `top` et `bottom`. Par exemple, `top: anchor(bottom)` est correct, car ce sont deux valeurs verticales, mais `top: anchor(left)` n'est pas valide, car `left` est une valeur horizontale. Si `top: anchor(left, 50px)` est défini, la valeur de repli sera utilisée, donc `top` aura une valeur calculée de `50px`. Si aucune valeur de repli n'est présente, la propriété d'encart se comporte comme si elle était définie sur `auto`.

Vous pouvez utiliser des valeurs logiques de `<anchor-side>` dans les propriétés d'encart physiques et logiques, car elles sont relatives à l'axe pertinent de la propriété d'encart, qu'elle soit logique ou physique. Par exemple, `top: anchor(start)`, `top: anchor(self-end)`, `inset-block-start: anchor(end)` et `inset-inline-end: anchor(self-start)` fonctionnent tous correctement.

L'utilisation de paramètres physiques `<anchor-side>` dans des propriétés d'encart logiques est plus complexe, car le côté physique doit correspondre à l'axe pertinent de la propriété d'encart dans le mode d'écriture courant. Par exemple&nbsp;:

- En mode d'écriture horizontal, la direction du bloc est de haut en bas, donc `inset-block-end: anchor(bottom)` fonctionne mais `inset-block-end: anchor(left)` est incompatible. Si `inset-block-end: anchor(left, 50px)` est défini, la valeur calculée sera `50px` et l'élément positionné sera placé à `50px` de la fin du bloc (en bas) de son ancêtre positionné le plus proche ou de la fenêtre d'affichage, selon la valeur de `position`.
- En mode d'écriture vertical, la direction du bloc est de droite à gauche ou de gauche à droite, donc `inset-block-end: anchor(left)` fonctionne, mais `inset-block-end: anchor(top)` est incompatible. Si `inset-block-end: anchor(top, 50px)` est défini, la valeur calculée sera `50px` et l'élément positionné sera placé à `50px` de la fin du bloc (à gauche ou à droite selon le mode d'écriture) de son ancêtre positionné le plus proche ou de la fenêtre d'affichage, selon la valeur de `position`.

Pour éviter toute confusion avec ces valeurs, il est conseillé d'utiliser les propriétés d'encart logiques avec des valeurs `<anchor-side>` logiques, et les propriétés d'encart physiques avec des valeurs `<anchor-side>` physiques. Vous devez privilégier l'utilisation des valeurs logiques autant que possible car elles sont meilleures pour [l'internationalisation](/fr/docs/Glossary/Internationalization).

Les valeurs `center` et `<percentage>` sont valides dans la fonction `anchor()` pour toutes les propriétés d'encart logiques et physiques.

Le tableau ci-dessous liste les propriétés d'encart et les valeurs de paramètre `<anchor-side>` qui leur sont compatibles. Seules les propriétés d'encart longues sont listées&nbsp;; elles composent les valeurs des propriétés raccourcies.

| Propriété d'encart                         | Valeur `<anchor-side>` compatible                                                                                                               |
| ------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| Toutes                                     | `center`                                                                                                                                        |
| Toutes                                     | `<percentage>`                                                                                                                                  |
| `top` et `bottom`                          | `top`, `bottom`, `start`, `end`, `self-start`, `self-end`                                                                                       |
| `left` et `right`                          | `left`, `right`, `start`, `end`, `self-start`, `self-end`                                                                                       |
| `inset-block-start` et `inset-block-end`   | `start`, `end`, `self-start`, et `self-end`<br>`top` et `bottom` en mode d'écriture horizontal<br>`left` et `right` en mode d'écriture vertical |
| `inset-inline-start` et `inset-inline-end` | `start`, `end`, `self-start`, et `self-end`<br>`left` et `right` en mode d'écriture horizontal<br>`top` et `bottom` en mode d'écriture vertical |

### Utiliser `anchor()` pour positionner des fenêtres contextuelles

Lorsque vous utilisez `anchor()` pour positionner des [fenêtres contextuelles](/fr/docs/Web/HTML/Reference/Global_attributes/popover), sachez que [les styles par défaut des fenêtres contextuelles <sup>(angl.)</sup>](https://html.spec.whatwg.org/multipage/rendering.html#flow-content-3:~:text=%5Bpopover%5D%20%7B) peuvent entrer en conflit avec la position que vous souhaitez obtenir. Les coupables habituels sont les styles par défaut de `margin` et `inset`, il est donc conseillé de les réinitialiser&nbsp;:

```css
.positionedPopover {
  margin: 0;
  inset: auto;
}
```

Le groupe de travail CSS [étudie des moyens d'éviter ce contournement <sup>(angl.)</sup>](https://github.com/w3c/csswg-drafts/issues/10258).

### Utiliser `anchor()` dans `calc()`

Lorsque la fonction `anchor()` fait référence à un côté de l'ancre par défaut, vous pouvez inclure une marge ({{CSSxRef("margin")}}) pour créer un espacement entre les bords de l'ancre et de l'élément positionné si besoin. Vous pouvez aussi inclure la fonction `anchor()` dans une fonction {{CSSxRef("calc")}} pour ajouter un espacement.

Cet exemple positionne le bord droit de l'élément positionné contre le bord gauche de l'ancre, puis ajoute une marge pour créer un espace entre les bords&nbsp;:

```css
.positionedElement {
  right: anchor(left);
  margin-left: 10px;
}
```

Cet exemple positionne le bord logique de fin de bloc de l'élément positionné à `10px` du bord logique de début de bloc de l'ancre&nbsp;:

```css
.positionedElement {
  inset-block-end: calc(anchor(start) + 10px);
}
```

### Positionner un élément par rapport à plusieurs ancres

Vous pouvez positionner un élément par rapport à plusieurs ancres en définissant différentes valeurs `<anchor-name>` dans la fonction `anchor()` de différentes propriétés d'encart sur le même élément (voir [Élément positionné par rapport à plusieurs ancres](#élément_positionné_par_rapport_à_plusieurs_ancres) ci-dessous). Cela permet de créer des fonctionnalités utiles comme des poignées de redimensionnement aux coins d'un élément positionné.

Bien qu'un élément positionné puisse être placé par rapport à plusieurs éléments d'ancre, il n'est toujours associé qu'à une seule ancre, définie via sa propriété {{CSSxRef("position-anchor")}} (ou l'attribut HTML [`anchor`](/fr/docs/Web/HTML/Reference/Global_attributes/anchor)). C'est cette ancre qui défile avec l'élément lors du défilement de la page&nbsp;; elle peut aussi servir à contrôler quand l'élément est [masqué conditionnellement](/fr/docs/Web/CSS/Guides/Anchor_positioning/Try_options_hiding#masquer_conditionnellement_des_éléments_positionnés_avec_une_ancre).

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Exemple courant

Dans cet exemple, la fonction `anchor()` sert à définir la hauteur d'un élément positionné par ancre à celle de son ancre, en alignant ses bords supérieur et inférieur sur ceux de l'ancre. La fonction `anchor()` utilisée dans une fonction `calc()` permet ensuite de décaler l'élément positionné par rapport à son ancre.

#### HTML

Nous incluons un élément HTML {{HTMLElement("div")}} qui sera défini comme notre ancre, et un élément HTML {{HTMLElement("p")}} que nous positionnerons par rapport à cette ancre&nbsp;:

```html
<div class="anchor">⚓︎</div>

<p class="positionedElement">Ceci est un élément positionné.</p>
```

#### CSS

Nous définissons la valeur de `anchor-name` de l'élément d'ancre comme celle de la propriété `position-anchor` de l'élément positionné pour les associer, puis nous appliquons trois propriétés d'encart à l'élément positionné par ancre. Les deux premières alignent le bord supérieur de l'élément avec celui de l'ancre et le bord inférieur avec celui de l'ancre. Dans la troisième propriété d'encart, la fonction `anchor()` est utilisée dans une fonction `calc()` pour placer le bord gauche de l'élément à `10px` du bord droit de l'ancre.

```css
.anchor {
  anchor-name: --infobox;
  background: palegoldenrod;
  font-size: 3em;
  width: fit-content;
  border: 1px solid goldenrod;
}

.positionedElement {
  position: absolute;
  position-anchor: --infobox;
  margin: 0;
  top: anchor(top);
  left: calc(anchor(right) + 10px);
  bottom: anchor(bottom);
  background-color: olive;
  border: 1px solid darkolivegreen;
}
```

#### Résultat

{{EmbedLiveSample("Exemple courant", "100%", 240)}}

### Comparaison des différentes valeurs d'ancre

Cet exemple montre un élément positionné par rapport à une ancre via ses propriétés {{CSSxRef("top")}} et {{CSSxRef("left")}}, qui sont définies à l'aide de fonctions `anchor()`. Il inclut également deux menus déroulants permettant de faire varier les valeurs `<anchor-side>` dans ces fonctions `anchor()`, afin de voir leur effet.

#### HTML

Nous définissons deux éléments HTML {{HTMLElement("div")}}, l'un avec la classe `anchor` et l'autre avec la classe `infobox`. Ceux-ci sont respectivement l'élément d'ancre et l'élément positionné que nous allons associer.

Nous ajoutons également du texte de remplissage autour des deux `<div>` pour rendre le {{HTMLElement("body")}} plus haut et permettre le défilement. Cet exemple inclut aussi deux éléments HTML {{HTMLElement("select")}} pour créer les menus déroulants permettant de choisir différentes valeurs `<anchor-side>` pour positionner l'élément. Le texte de remplissage et les éléments `<select>` sont masqués pour plus de clarté.

```html hidden
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
```

```html
<div class="anchor">⚓︎</div>

<div class="infobox">
  <p>Ceci est une boîte d'information.</p>
</div>
```

```html hidden
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

<form>
  <div>
    <label for="top-anchor-side">
      Définir une valeur verticale <code>anchor()</code>&nbsp;:
    </label>
    <select id="top-anchor-side" name="top-anchor-side">
      <option value="top">top: anchor(top)</option>
      <option value="bottom" selected>top: anchor(bottom)</option>
      <option value="start">top: anchor(start)</option>
      <option value="end">top: anchor(end)</option>
      <option value="center">top: anchor(center)</option>
      <option value="0%">top: anchor(0%)</option>
      <option value="25%">top: anchor(25%)</option>
      <option value="50%">top: anchor(50%)</option>
      <option value="75%">top: anchor(75%)</option>
      <option value="100%">top: anchor(100%)</option>
    </select>
  </div>
  <div>
    <label for="left-anchor-side">
      Définir une valeur horizontale <code>anchor()</code>&nbsp;:
    </label>
    <select id="left-anchor-side" name="left-anchor-side">
      <option value="left">left: anchor(left)</option>
      <option value="right" selected>left: anchor(right)</option>
      <option value="self-start">left: anchor(self-start)</option>
      <option value="self-end">left: anchor(self-end)</option>
      <option value="center">left: anchor(center)</option>
      <option value="0%">left: anchor(0%)</option>
      <option value="25%">left: anchor(25%)</option>
      <option value="50%">left: anchor(50%)</option>
      <option value="75%">left: anchor(75%)</option>
      <option value="100%">left: anchor(100%)</option>
    </select>
  </div>
</form>
```

#### CSS

Nous définissons une `<div>` `anchor` comme élément d'ancre en lui attribuant un nom d'ancre via la propriété {{CSSxRef("anchor-name")}}. Nous l'associons ensuite à l'élément positionné en définissant la même valeur pour sa propriété {{CSSxRef("position-anchor")}}. `top: anchor(--my-anchor bottom)` place le bord supérieur de la boîte d'information contre le bord inférieur de son ancre, tandis que `left: anchor(right)` place le bord gauche de la boîte d'information contre le bord droit de son ancre. Cette position initiale sera modifiée lorsque différentes valeurs seront choisies dans les menus déroulants.

```css hidden
.anchor {
  font-size: 2rem;
  color: white;
  text-shadow: 1px 1px 1px black;
  background-color: hsl(240 100% 75%);
  width: 100px;
  height: 100px;
  text-align: center;
  line-height: 100px;
  border-radius: 10px;
  border: 1px solid black;
  padding: 3px;
}

body {
  width: 80%;
  margin: 0 auto;
}

form {
  background: white;
  border: 1px solid black;
  padding: 5px;
  position: fixed;
  top: 0;
  right: 2px;
}

select {
  display: block;
  margin-top: 5px;
}

form div:last-child {
  margin-top: 10px;
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
  anchor-name: --my-anchor;
}

.infobox {
  position: fixed;
  position-anchor: --my-anchor;
  top: anchor(--my-anchor bottom);
  left: anchor(right);
}
```

#### JavaScript

Nous écoutons l'évènement `change` qui se produit lorsqu'une nouvelle valeur `<anchor-side>` est choisie, et nous définissons cette valeur comme le `<anchor-side>` dans la fonction `anchor()` de la propriété d'encart pertinente (`top` ou `left`) de la boîte d'information.

```js
const infobox = document.querySelector(".infobox");
const topSelect = document.querySelector("#top-anchor-side");
const leftSelect = document.querySelector("#left-anchor-side");

topSelect.addEventListener("change", (e) => {
  const anchorSide = e.target.value;
  infobox.style.top = `anchor(--my-anchor ${anchorSide})`;
});

leftSelect.addEventListener("change", (e) => {
  const anchorSide = e.target.value;
  infobox.style.left = `anchor(${anchorSide})`;
});
```

#### Résultat

Sélectionnez différentes valeurs dans les menus déroulants pour voir comment elles affectent le positionnement de la boîte d'information.

{{EmbedLiveSample("Comparaison des différentes valeurs d'ancre", "100%", 240)}}

### Élément positionné par rapport à plusieurs ancres

Cet exemple positionne un élément par rapport à deux ancres différentes, qui servent à définir la position des coins supérieur gauche et inférieur droit de l'élément positionné par ancre. Les ancres peuvent être déplacées à l'aide des commandes clavier ou en les faisant glisser, ce qui redimensionne l'élément positionné.

#### HTML

Nous définissons au total trois éléments HTML {{HTMLElement("div")}}. Les deux premiers ont la classe `anchor` et seront définis comme ancres&nbsp;; chacun possède un `id` individuel qui servira à leur fournir des informations de positionnement différentes. Le dernier `<div>` a la classe `infobox` et sera défini comme l'élément positionné. Nous incluons l'attribut [`tabindex`](/fr/docs/Web/HTML/Reference/Global_attributes/tabindex) pour leur permettre de recevoir la sélection clavier.

```html
<div id="anchor1" class="anchor" tabindex="0">⚓︎1</div>

<div id="anchor2" class="anchor" tabindex="0">⚓︎2</div>

<div class="infobox">
  <p>Ceci est une boîte d'information.</p>
</div>
```

#### CSS

```css hidden
body {
  width: 150vw;
  height: 150vh;
}

.anchor {
  font-size: 1rem;
  color: white;
  text-shadow: 1px 1px 1px black;
  background-color: hsl(240 100% 75%);
  width: fit-content;
  border-radius: 10px;
  border: 1px solid black;
  padding: 3px;
  &:focus {
    background-color: hsl(60 100% 75%);
  }
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

Chaque ancre reçoit une valeur {{CSSxRef("anchor-name")}} différente, une valeur {{CSSxRef("position")}} sur `absolute`, et des valeurs d'encart différentes pour placer les ancres en formation rectangulaire.

```css
.anchor {
  position: absolute;
}

#anchor1 {
  anchor-name: --my-anchor1;
  top: 50px;
  left: 100px;
}

#anchor2 {
  anchor-name: --my-anchor2;
  top: 200px;
  left: 350px;
}
```

L'élément positionné par ancre, avec sa propriété `position` définie sur `fixed`, est associé à une ancre via sa propriété {{CSSxRef("position-anchor")}}. Il est positionné par rapport à deux ancres en incluant deux valeurs `<anchor-name>` différentes dans les fonctions `anchor()` définies sur ses propriétés d'encart. Dans ce cas, nous utilisons des valeurs {{CSSxRef("&lt;percentage&gt;")}} pour le paramètre `<anchor-side>`, ce qui définit la distance à partir du début de l'axe de la propriété d'encart sur laquelle la fonction est appliquée.

```css
.infobox {
  position-anchor: --my-anchor1;
  position: fixed;
  top: anchor(--my-anchor1 100%);
  left: anchor(--my-anchor1 100%);
  bottom: anchor(--my-anchor2 0%);
  right: anchor(--my-anchor2 0%);
}
```

```js hidden
// récupérer toutes les ancres et rendre chacune déplaçable
const anchors = document.querySelectorAll(".anchor");
anchors.forEach((anchor) => makeDraggable(anchor));

function makeDraggable(elem) {
  let pos1, pos2, pos3, pos4;

  elem.onmousedown = dragMouseDown;
  elem.addEventListener("keyup", (e) => {
    switch (e.key) {
      case "d":
        elem.style.left = `${elem.offsetLeft + 5}px`;
        break;
      case "q":
        elem.style.left = `${elem.offsetLeft - 5}px`;
        break;
      case "z":
        elem.style.top = `${elem.offsetTop - 5}px`;
        break;
      case "s":
        elem.style.top = `${elem.offsetTop + 5}px`;
        break;
    }
    e.preventDefault();
  });

  function elementMove(e) {
    console.dir(e);
    // calculer la nouvelle position du curseur :
    pos1 = pos3 - e.offsetLeft;
    pos2 = pos4 - e.offsetTop;
    pos3 = e.offsetLeft;
    pos4 = e.offsetTop;
    // définir la nouvelle position de l'élément :
    elem.style.top = `${elem.offsetTop - pos2}px`;
    elem.style.left = `${elem.offsetLeft - pos1}px`;
  }

  function dragMouseDown(e) {
    // obtenir la position du curseur de la souris au démarrage :
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // appeler une fonction chaque fois que la souris se déplace :
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    // calculer la nouvelle position du curseur :
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // définir la nouvelle position de l'élément :
    elem.style.top = `${elem.offsetTop - pos2}px`;
    elem.style.left = `${elem.offsetLeft - pos1}px`;
  }

  function closeDragElement() {
    // arrêter le déplacement lorsque le bouton de la souris est relâché :
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
```

#### Résultat

L'élément positionné est placé par rapport aux deux ancres. Faites-les glisser avec la souris ou sélectionnez-les au clavier et utilisez les touches <kbd>Z</kbd>, <kbd>Q</kbd>, <kbd>S</kbd> et <kbd>D</kbd> pour les déplacer vers le haut, le bas, la gauche et la droite. Observez comment cela modifie leur position et, par conséquent, la zone de l'élément positionné. Faites défiler la page pour voir comment les positions de tous les éléments sont conservées.

{{EmbedLiveSample("Élément positionné par rapport à plusieurs ancres", "100%", 350)}}

> [!NOTE]
> Cet exemple est une «&nbsp;preuve de concept&nbsp;» et n'est pas destiné à être utilisé en production. Parmi ses limites, l'exemple se casse si vous essayez de déplacer les ancres l'une au-delà de l'autre horizontalement ou verticalement.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{CSSxRef("position-anchor")}}
- La propriété {{CSSxRef("position-area")}}
- La fonction {{CSSxRef("anchor-size()")}}
- Le guide [pour utiliser le positionnement par ancre CSS](/fr/docs/Web/CSS/Guides/Anchor_positioning/Using)
- Le guide [d'options de repli et masquage conditionnel pour le dépassement](/fr/docs/Web/CSS/Guides/Anchor_positioning/Try_options_hiding)
- Le module [de position par ancre CSS](/fr/docs/Web/CSS/Guides/Anchor_positioning)
