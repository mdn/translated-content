---
title: Options de repli et masquage conditionnel au débordement
short-title: Traiter le débordement
slug: Web/CSS/Guides/Anchor_positioning/Try_options_hiding
l10n:
  sourceCommit: 81f8fcd666952c1782653a3675347c392cc997ca
---

Lorsque vous utilisez la [position par ancres CSS](/fr/docs/Web/CSS/Guides/Anchor_positioning), il est important de veiller à ce que les éléments positionnés par ancre apparaissent toujours à un endroit pratique pour que l'utilisateur·ice puisse interagir avec eux, si possible, quel que soit l'emplacement de l'ancre. Par exemple, lorsque vous faites défiler la page, les ancres et leurs éléments positionnés associés se déplacent vers le bord de la fenêtre d'affichage. Lorsqu'un élément positionné commence à déborder de la fenêtre, vous voudrez changer sa position pour le remettre dans l'écran, par exemple du côté opposé de l'ancre.

Dans certaines situations, il peut être préférable de simplement masquer les éléments positionnés qui débordent — par exemple, si leurs ancres sont hors écran, leur contenu pourrait ne pas avoir de sens.

Ce guide explique comment utiliser les mécanismes de positionnement des ancres CSS pour gérer ces cas — **options de repli d'essai de positionnement** et **masquage conditionnel**. Les options de repli d'essai de positionnement fournissent des positions alternatives que le navigateur peut essayer pour placer les éléments positionnés lorsqu'ils commencent à déborder, afin de les maintenir à l'écran. Le masquage conditionnel permet de définir les conditions dans lesquelles l'ancre ou un élément positionné sera masqué.

> [!NOTE]
> Pour les notions fondamentales du positionnement des ancres CSS, voir [Utiliser la position par ancres CSS](/fr/docs/Web/CSS/Guides/Anchor_positioning/Using).

## Résumé des fonctionnalités

Si une infobulle est fixée en haut à droite d'un élément d'interface, lorsque l'utilisateur·ice fait défiler le contenu de sorte que cette fonctionnalité se retrouve dans le coin supérieur droit de la fenêtre, l'infobulle aura disparu de l'écran. Le positionnement des ancres CSS résout ce type de problème. La propriété {{CSSxRef("position-try-fallbacks")}} du module permet de définir une ou plusieurs options de repli alternatives que le navigateur peut essayer pour éviter que l'élément positionné ne déborde.

Les options de repli d'essai de positionnement peuvent être définies en utilisant&nbsp;:

- [Options de repli prédéfinies](#options_de_repli_prédéfinies).
- [Valeurs `position-area`](#utiliser_position-area_comme_option_de_repli_dessai).
- [Options personnalisées](#options_de_repli_personnalisées) définies avec la règle {{CSSxRef("@position-try")}}.

De plus, la propriété {{CSSxRef("position-try-order")}} permet de définir différentes options qui font qu'une option de repli disponible est appliquée de préférence au positionnement initial de l'élément. Par exemple, vous pouvez vouloir afficher initialement l'élément dans un espace disposant de plus de hauteur ou de largeur disponible.

La propriété abrégée {{CSSxRef("position-try")}} permet de définir les valeurs de `position-try-order` et `position-try-fallbacks` en une seule déclaration.

Dans certaines situations, le contenu positionné par une ancre n'a pas de sens si l'ancre est hors de l'écran, ou inversement. Par exemple, vous pouvez avoir une ancre contenant une question de quiz, et des réponses dans des éléments positionnés associés, et vouloir les afficher ensemble ou pas du tout. Cela peut être réalisé avec le masquage conditionnel, qui est géré via la propriété {{CSSxRef("position-visibility")}}. Cette propriété accepte différentes valeurs qui définissent les conditions dans lesquelles les éléments débordants seront masqués.

## Options de repli prédéfinies

Les valeurs prédéfinies d'options de repli de la propriété `position-try-fallbacks` (définies comme [`<try-tactic>`](/fr/docs/Web/CSS/Reference/Properties/position-try-fallbacks#try-tactic) dans la spécification) vont «&nbsp;basculer&nbsp;» la position de l'élément positionné par ancre sur un ou deux axes si l'élément devait autrement déborder.

L'élément peut être basculé sur l'axe de bloc (`flip-block`), l'axe en ligne (`flip-inline`), ou en diagonale le long d'une ligne imaginaire tracée d'un coin de l'ancre à travers son centre jusqu'à son coin opposé (`flip-start`). Ces trois valeurs basculent l'élément, en miroir vers le côté opposé pour les deux premières valeurs, et vers un côté adjacent pour `flip-start`. Par exemple, si un élément positionné `10px` au-dessus de son ancre commence à déborder en haut de l'ancre, la valeur `flip-block` basculerait l'élément positionné pour le placer à 10px en dessous de son ancre.

Dans cet exemple, nous incluons deux éléments HTML {{HTMLElement("div")}}. Le premier sera notre élément d'ancre, et le second sera positionné par rapport à l'ancre&nbsp;:

```html
<div class="anchor">⚓︎</div>

<div class="infobox">
  <p>Ceci est une boîte d'information.</p>
</div>
```

Nous appliquons un style à l'élément `<body>` pour qu'il soit plus grand que la fenêtre d'affichage afin de pouvoir faire défiler l'ancre et l'élément positionné dans la fenêtre, horizontalement et verticalement&nbsp;:

```css
body {
  width: 1500px;
  height: 500px;
}
```

À des fins d'illustration, nous positionnons absolument l'ancre pour qu'elle apparaisse près du centre du rendu initial du `<body>`&nbsp;:

```css hidden
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

.anchor {
  anchor-name: --my-anchor;
  position: absolute;
  top: 100px;
  left: 45%;
}
```

L'élément positionné par ancre reçoit un positionnement fixe et est attaché au coin supérieur gauche de l'ancre à l'aide d'un `position-area`. On lui donne `position-try-fallbacks: flip-block, flip-inline;` pour lui fournir des options de repli afin d'éviter qu'il ne déborde lorsque l'ancre s'approche du bord de la fenêtre.

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
  position: fixed;
  position-anchor: --my-anchor;
  position-area: top left;
  position-try-fallbacks: flip-block, flip-inline;
}
```

> [!NOTE]
> Lorsque plusieurs options de repli d'essai de positionnement sont définies, elles sont séparées par des virgules et essayées dans l'ordre où elles sont définies.

Essayez de faire défiler la démo afin que l'ancre s'approche des bords&nbsp;:

{{EmbedLiveSample("Options de repli prédéfinies", "100%", 250)}}

- Déplacez l'ancre vers le haut de la fenêtre. L'élément positionné bascule en bas à gauche de l'ancre pour éviter le débordement.
- Déplacez l'ancre vers la gauche de la fenêtre. L'élément positionné bascule en haut à droite de l'ancre pour éviter le débordement.

Si vous déplacez l'ancre vers le coin supérieur gauche de la fenêtre d'affichage, vous remarquerez un problème — lorsque l'élément positionné commence à déborder à la fois dans la direction du bloc et en ligne, il revient à sa position par défaut en haut à gauche et déborde dans les deux directions, ce qui n'est pas souhaité.

Cela se produit parce que nous n'avons donné au navigateur que les options de position `flip-block` _ou_ `flip-inline`. Nous ne lui avons pas donné la possibilité d'essayer les deux en même temps. Le navigateur essaie les options de repli, cherchant celle qui permet à l'élément positionné d'être entièrement rendu à l'intérieur de la fenêtre ou du bloc conteneur. S'il n'en trouve pas, il affiche l'élément positionné à sa position de rendu initiale, sans appliquer d'options de repli.

La section suivante montre comment corriger ce problème.

## Combiner plusieurs valeurs en une option

Il est possible d'insérer plusieurs [options de repli prédéfinies](#options_de_repli_prédéfinies) ou plusieurs noms [d'option de repli personnalisée](#options_de_repli_personnalisées) dans une seule valeur d'option de repli, séparée par des espaces, au sein de la liste `position-try-fallbacks` séparée par des virgules. Lors de l'application de ces options de repli, le navigateur combine les effets individuels en une seule option de repli combinée.

Utilisons une option de repli combinée pour corriger le problème observé dans la démo précédente. Le HTML et le CSS de cette démo sont identiques, à l'exception des styles de positionnement de la boîte d'information. Dans ce cas, on lui ajoute une troisième option de repli&nbsp;: `flip-block flip-inline`&nbsp;:

```html hidden
<div class="anchor">⚓︎</div>

<div class="infobox">
  <p>Ceci est une boîte d'information.</p>
</div>
```

```css hidden
body {
  width: 1500px;
  height: 500px;
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

.anchor {
  anchor-name: --my-anchor;
  position: absolute;
  top: 100px;
  left: 45%;
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

```css-nolint
.infobox {
  position: fixed;
  position-anchor: --my-anchor;
  position-area: top left;
  position-try-fallbacks:
    flip-block,
    flip-inline,
    flip-block flip-inline;
}
```

Cela signifie que le navigateur essaie d'abord `flip-block` puis `flip-inline` pour éviter le débordement. Si ces options de repli échouent toutes les deux, il tente alors de combiner les deux, en inversant la position de l'élément à la fois sur l'axe de bloc et sur l'axe en ligne simultanément. Lorsque vous faites défiler l'ancre vers les bords supérieur _et_ gauche de la fenêtre d'affichage, l'élément positionné bascule vers le bas à droite.

{{EmbedLiveSample("Combiner plusieurs valeurs en une option", "100%", 250)}}

## Utiliser `position-area` comme option de repli d'essai

Les options de repli d'essai prédéfinies `<try-tactic>` sont utiles mais limitées, car elles ne permettent que d'inverser le placement de l'élément positionné selon les axes. Et si vous avez un élément positionné par ancre placé en haut à gauche de son ancre, et que vous voulez le déplacer directement sous l'ancre s'il commence à déborder&nbsp;?

Pour y parvenir, vous pouvez utiliser une valeur {{CSSxRef("position-area")}} comme option de repli d'essai, en l'incluant dans la liste `position-try-fallbacks`. Cela crée automatiquement une option de repli fondée sur cette position. En pratique, c'est un raccourci pour créer une [option de position personnalisée](#options_de_repli_personnalisées) qui contient uniquement cette valeur de propriété `position-area`.

L'exemple suivant montre l'utilisation des options de repli d'essai `position-area`. Nous utilisons le même HTML et CSS, sauf pour le positionnement de la boîte d'information. Dans ce cas, nos options de repli d'essai sont des valeurs `position-area` — `top`, `top-right`, `right`, `bottom-right`, `bottom`, `bottom-left`, et `left`. L'élément positionné sera placé de façon raisonnable, quel que soit le bord de la fenêtre d'affichage vers lequel l'ancre se dirige. Cette approche verbeuse est plus granulaire et plus flexible que l'approche par valeurs prédéfinies.

```html hidden
<div class="anchor">⚓︎</div>

<div class="infobox">
  <p>Ceci est une boîte d'information.</p>
</div>
```

```css hidden
body {
  width: 1500px;
  height: 500px;
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

.anchor {
  anchor-name: --my-anchor;
  position: absolute;
  top: 100px;
  left: 45%;
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

```css-nolint
.infobox {
  position: fixed;
  position-anchor: --my-anchor;
  position-area: top left;
  position-try-fallbacks:
    top, top right, right,
    bottom right, bottom,
    bottom left, left;
}
```

> [!NOTE]
> Vous ne pouvez pas ajouter des options de repli `position-area` dans une option de position combinée séparée par des espaces au sein d'une liste d'options de repli d'essai.

Faites défiler la page et observez l'effet de ces options de repli d'essai lorsque l'ancre s'approche du bord de la fenêtre d'affichage&nbsp;:

{{EmbedLiveSample("Utiliser `position-area` comme option de repli d'essai", "100%", 250)}}

## Options de repli personnalisées

Pour créer des options de repli de position personnalisées qui ne sont pas disponibles via les mécanismes précédents, utilisez la règle {{CSSxRef("@position-try")}}. La syntaxe est&nbsp;:

```plain
@position-try --try-fallback-name {
  descriptor-list
}
```

Le `--try-fallback-name` est un nom défini par le·la développeur·euse pour l'option de repli d'essai de position. Ce nom peut ensuite être défini dans la liste d'options de repli d'essai séparée par des virgules, valeur de la propriété {{CSSxRef("position-try-fallbacks")}}. Si plusieurs règles `@position-try` portent le même nom, la dernière dans l'ordre du document remplace les autres. Évitez d'utiliser le même nom pour vos options de repli d'essai _et_ pour vos ancres ou vos noms de propriétés personnalisées&nbsp;; cela n'invalide pas la règle @, mais rendra votre CSS très difficile à suivre.

La propriété `descriptor-list` définit les valeurs de propriété pour cette option de repli d'essai, notamment le placement, les dimensions et les marges de l'élément positionné. La liste restreinte des descripteurs autorisés comprend&nbsp;:

- La propriété {{CSSxRef("position-area")}}
- [Propriétés inset](/fr/docs/Glossary/Inset_properties)
- Propriétés de marge (par exemple {{CSSxRef("margin-left")}}, {{CSSxRef("margin-block-start")}})
- [Propriétés d'auto-alignement](/fr/docs/Web/CSS/Guides/Anchor_positioning/Using#centrer_sur_lancre_avec_anchor-center)
- Propriétés de dimensionnement ({{CSSxRef("width")}}, {{CSSxRef("block-size")}}, etc.)
- La propriété {{CSSxRef("position-anchor")}}

Les valeurs définies dans la règle @ sont appliquées à l'élément positionné lorsque l'option de repli d'essai nommée est utilisée. Les propriétés précédemment définies sur l'élément sont remplacées par les valeurs du descripteur. Si l'utilisateur fait défiler la page et qu'une autre option de repli d'essai est appliquée (ou qu'aucune ne l'est), les valeurs de l'option précédente sont réinitialisées.

Dans cet exemple, vous configurez et utilisez plusieurs options de repli personnalisées. Vous utilisez le même code HTML et CSS de base que dans les exemples précédents.

Vous commencez par définir quatre options de repli personnalisées avec `@position-try`&nbsp;:

```html hidden
<div class="anchor">⚓︎</div>

<div class="infobox">
  <p>Ceci est une boîte d'information.</p>
</div>
```

```css hidden
body {
  width: 1500px;
  height: 500px;
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

.anchor {
  anchor-name: --my-anchor;
  position: absolute;
  top: 100px;
  left: 45%;
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
@position-try --custom-left {
  position-area: left;
  width: 100px;
  margin-right: 10px;
}

@position-try --custom-bottom {
  position-area: bottom;
  margin-top: 10px;
}

@position-try --custom-right {
  position-area: right;
  width: 100px;
  margin-left: 10px;
}

@position-try --custom-bottom-right {
  position-area: bottom right;
  margin: 10px 0 0 10px;
}
```

Une fois vos options de repli personnalisées créées, vous pouvez les inclure dans la liste de position en faisant référence à leurs noms&nbsp;:

```css
.infobox {
  position: fixed;
  position-anchor: --my-anchor;
  position-area: top;
  width: 200px;
  margin-bottom: 10px;
  position-try-fallbacks:
    --custom-left, --custom-bottom, --custom-right, --custom-bottom-right;
}
```

Remarquez que la position par défaut est définie par `position-area: top`. Lorsque la boîte d'information ne déborde pas de la page dans aucune direction, la boîte d'information est placée au‑dessus de l'ancre et les options de repli d'essai définies dans la propriété `position-try-fallbacks` sont ignorées. Notez également que la boîte d'information a une largeur fixe et une marge inférieure définies. Ces valeurs changent lorsque différentes options de repli d'essai sont appliquées.

Si la boîte d'information commence à déborder, le navigateur essaie les options de position listées dans la propriété `position-try-fallbacks`&nbsp;:

- Le navigateur essaie d'abord la position de repli `--custom-left`. Cela déplace la boîte d'information à gauche de l'ancre, ajuste la marge en conséquence et donne également à la boîte d'information une largeur différente.
- Ensuite, le navigateur essaie la position `--custom-bottom`. Cela place la boîte d'information sous l'ancre et définit une marge appropriée. Elle n'inclut pas de descripteur `width`, donc la boîte d'information revient à sa largeur par défaut de `200px` définie par la propriété `width`.
- Le navigateur essaie ensuite la position `--custom-right`. Elle fonctionne de la même façon que la position `--custom-left`, avec la même valeur de descripteur `width` appliquée, mais les valeurs de `position-area` et de `margin` sont inversées pour placer la boîte d'information correctement à droite.
- Si aucune des autres options de repli ne parvient à empêcher l'élément positionné de déborder, le navigateur essaie en dernier recours la position `--custom-bottom-right`. Elle fonctionne de façon similaire aux autres options de repli, mais place l'élément positionné en bas à droite de l'ancre.

Si aucune des options de repli ne permet d'empêcher l'élément positionné de déborder, la position revient à la valeur initiale `position-area: top;`.

> [!NOTE]
> Lorsque une option de repli d'essai est appliquée, ses valeurs remplacent les valeurs par défaut définies sur l'élément positionné. Par exemple, la `width` par défaut définie sur l'élément positionné est `200px`, mais lorsque l'option de repli d'essai `--custom-right` est appliquée, sa largeur est définie à `100px`.

Faites défiler la page et observez l'effet de ces options de repli d'essai lorsque l'ancre s'approche du bord de la fenêtre d'affichage&nbsp;:

{{EmbedLiveSample("Options de repli personnalisées", "100%", 250)}}

## Utiliser `position-try-order`

La propriété {{CSSxRef("position-try-order")}} a un objectif légèrement différent du reste de la fonctionnalité d'essai de position, en ce qu'elle utilise des options de repli d'essai de position lorsque l'élément positionné est affiché pour la première fois, plutôt que lorsqu'il est en train de déborder.

Cette propriété permet de définir que vous souhaitez que l'élément positionné soit affiché initialement en utilisant l'option de repli d'essai qui offre à son bloc conteneur le plus d'espace en largeur ou en hauteur. Cela s'obtient en définissant les valeurs `most-height`, `most-width`, `most-block-size` ou `most-inline-size`. Vous pouvez également supprimer les effets de toute valeur `position-try-order` définie précédemment en utilisant la valeur `normal`.

Si aucune option de repli d'essai disponible n'offre plus d'espace en largeur/hauteur que le positionnement initial attribué à l'élément, `position-try-order` n'a aucun effet.

Voyons une démo qui montre l'effet de cette propriété. Le HTML est identique à celui des exemples précédents, sauf que nous avons ajouté un `<form>` contenant des boutons radio, vous permettant de sélectionner différentes valeurs de `position-try-order` pour en observer les effets.

```html hidden
<div class="anchor">⚓︎</div>

<div class="infobox">
  <p>Ceci est une boîte d'information.</p>
</div>

<form>
  <fieldset>
    <legend>Choisir un ordre d'essai</legend>
    <div>
      <label for="radio-normal">normal</label>
      <input
        type="radio"
        id="radio-normal"
        name="position-try-order"
        value="normal"
        checked />
    </div>
    <div>
      <label for="radio-most-height">most-height</label>
      <input
        type="radio"
        id="radio-most-height"
        name="position-try-order"
        value="most-height" />
    </div>
  </fieldset>
</form>
```

Nous incluons une option de repli d'essai personnalisée — `--custom-bottom` — qui place l'élément sous l'ancre et ajoute une marge&nbsp;:

```css hidden
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

.anchor {
  anchor-name: --my-anchor;
  position: absolute;
  top: 100px;
  left: 45%;
}

.infobox {
  color: darkblue;
  background-color: azure;
  border: 1px solid #dddddd;
  padding: 10px;
  border-radius: 10px;
  font-size: 1rem;
  text-align: center;
}

form {
  position: fixed;
  bottom: 2px;
  right: 2px;
}
```

```css
@position-try --custom-bottom {
  top: anchor(bottom);
  bottom: unset;
  margin-top: 10px;
}
```

Nous positionnons initialement la boîte d'information en haut de l'ancre, puis lui appliquons notre option de repli d'essai personnalisée&nbsp;:

```css
.infobox {
  position: fixed;
  position-anchor: --my-anchor;
  bottom: anchor(top);
  margin-bottom: 10px;
  justify-self: anchor-center;
  position-try-fallbacks: --custom-bottom;
}
```

Enfin, nous incluons un peu de JavaScript qui attache un gestionnaire d'évènement [`change`](/fr/docs/Web/API/HTMLElement/change_event) aux boutons radio. Lorsqu'un bouton radio est sélectionné, sa valeur est appliquée à la propriété `position-try-order` de la boîte d'information.

```js
const infobox = document.querySelector(".infobox");
const radios = document.querySelectorAll('[name="position-try-order"]');

for (const radio of radios) {
  radio.addEventListener("change", setTryOrder);
}

function setTryOrder(e) {
  const tryOrder = e.target.value;
  infobox.style.positionTryOrder = tryOrder;
}
```

Vous pouvez sélectionner l'option d'ordre `most-height`. Cela a pour effet d'appliquer l'option de repli d'essai `--custom-bottom`, qui place l'élément sous l'ancre. Cela se produit parce qu'il y a plus d'espace sous l'ancre que dessus.

{{EmbedLiveSample("Utiliser `position-try-order`", "100%", 300)}}

## Masquer conditionnellement des éléments positionnés avec une ancre

Dans certaines situations, vous pouvez vouloir masquer un élément positionné par ancre. Par exemple, si l'élément d'ancrage est rogné parce qu'il est trop proche du bord de la fenêtre d'affichage, vous pouvez souhaiter masquer complètement son élément associé. La propriété {{CSSxRef("position-visibility")}} permet de définir les conditions selon lesquelles les éléments positionnés sont masqués.

Par défaut, l'élément positionné s'affiche `always`. La valeur `no-overflow` **masque fortement** l'élément positionné si celui‑ci commence à déborder de son élément conteneur ou de la fenêtre d'affichage.

La valeur `anchors-visible`, en revanche, masque fortement l'élément positionné si son ou ses ancres associées sont **complètement** masquées (par débordement de leur élément conteneur ou de la fenêtre d'affichage, ou par recouvrement d'autres éléments). L'élément positionné reste visible si une partie quelconque de l'ancre est encore visible.

Un élément fortement masqué se comporte comme si lui‑même et ses descendants avaient la valeur {{CSSxRef("visibility")}} `hidden`, indépendamment de leur valeur réelle de `visibility`.

Voyons cette propriété en action.

Cet exemple utilise le même HTML et le même CSS que dans les exemples précédents, la boîte d'information étant attachée au bord inférieur de l'ancre. La boîte d'information reçoit `position-visibility: no-overflow;` pour être masquée complètement lorsqu'elle est défilée vers le haut au point où elle commence à déborder de la fenêtre d'affichage.

```html hidden
<p>
  Malesuada nunc vel risus commodo viverra maecenas accumsan lacus. Vel elit
  scelerisque mauris pellentesque pulvinar pellentesque habitant morbi
  tristique.
</p>

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

```css hidden
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

.anchor {
  anchor-name: --my-anchor;
}

body {
  width: 50%;
  margin: 0 auto;
}
```

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
  position: fixed;
  position-anchor: --my-anchor;
  margin-bottom: 5px;
  position-area: top span-all;
  position-visibility: no-overflow;
}
```

Faites défiler la page et notez comment l'élément positionné est masqué une fois qu'il atteint le haut de la fenêtre d'affichage&nbsp;:

{{EmbedLiveSample("Masquage conditionnel avec `position-visibility`", "100%", 250)}}

## Voir aussi

- Le module de [position par ancre CSS](/fr/docs/Web/CSS/Guides/Anchor_positioning)
- [Utiliser la position par ancre CSS](/fr/docs/Web/CSS/Guides/Anchor_positioning/Using)
- [Apprendre&nbsp;: positionnement CSS](/fr/docs/Learn_web_development/Core/CSS_layout/Positioning)
- Le module des [propriétés et valeurs logiques CSS](/fr/docs/Web/CSS/Guides/Logical_properties_and_values)
- [Apprendre&nbsp;: dimensionner des éléments en CSS](/fr/docs/Learn_web_development/Core/Styling_basics/Sizing)
