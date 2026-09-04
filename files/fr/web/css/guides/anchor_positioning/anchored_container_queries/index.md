---
title: Utiliser les requêtes de conteneurs ancrés
short-title: Requêtes de conteneurs ancrés
slug: Web/CSS/Guides/Anchor_positioning/Anchored_container_queries
l10n:
  sourceCommit: a8b7faffbd3fdeae5c0be97793d963d8a31cd1cf
---

[Le positionnement par ancre CSS](/fr/docs/Web/CSS/Guides/Anchor_positioning) inclut des mécanismes pour fournir des [options de repli](/fr/docs/Web/CSS/Guides/Anchor_positioning/Try_options_hiding). Ce sont des positions alternatives que le navigateur peut essayer de placer pour un élément positionné par ancre, par rapport à son ancre, afin de le remettre à l'écran si l'élément positionné commence à déborder de la zone d'affichage (<i lang="en">viewport</i> en anglais).

**Les requêtes de conteneurs ancrés** augmentent encore l'utilité des options de repli du positionnement par ancre en permettant un style différent de l'élément positionné par ancre, en fonction de la position de repli dans laquelle il est placé. Ce guide montre comment utiliser les requêtes de conteneurs ancrés et fournit quelques exemples.

> [!NOTE]
> Pour des informations sur les principes de base du positionnement par ancre CSS, voir [Utiliser le positionnement par ancre CSS](/fr/docs/Web/CSS/Guides/Anchor_positioning/Using).

## Résumé des fonctionnalités

Lors du positionnement d'une infobulle (<i lang="en">tooltip</i> en anglais) par rapport à un élément d'interface utilisateur en utilisant le positionnement par ancre, il est utile de fournir des options de repli `position-try`, avec la propriété {{CSSxRef("position-try-fallbacks")}}. Celles-ci peuvent être utilisées pour garantir que l'infobulle reste affichée à l'écran aussi longtemps que possible.

Par exemple, si l'infobulle est placée au-dessus de l'élément d'interface utilisateur auquel elle est ancrée par défaut, si l'utilisateur·ice fait défiler vers le haut, vous pouvez utiliser des options de repli pour déplacer l'infobulle en dessous de l'élément juste avant qu'elle ne sorte de l'écran.

Un problème que cela ne résout pas à lui seul est la mise à jour du style de l'élément positionné par ancre pour s'adapter aux différentes options de repli. Par exemple, il est courant d'inclure une petite flèche sur l'infobulle qui pointe vers l'élément d'ancrage auquel elle est associée, améliorant l'expérience utilisateur·ice en rendant l'association visuelle plus claire. Lorsque l'infobulle se déplace vers une position différente, la position et l'orientation de la flèche doivent également changer, sinon cela donne un rendu incorrect.

Pour résoudre ce problème, vous pouvez utiliser les requêtes de conteneurs ancrés. Celles-ci étendent la fonctionnalité des [requêtes de conteneurs CSS](/fr/docs/Web/CSS/Guides/Containment/Container_queries) pour vous permettre de détecter lorsqu'une option de repli spécifique est appliquée à un élément positionné par ancre, et d'appliquer du CSS à ses descendants en conséquence. Plus précisément, les requêtes de conteneurs ancrés reposent sur deux fonctionnalités&nbsp;:

- La propriété {{CSSxRef("container-type")}} avec la valeur `anchored`&nbsp;: Appliquez ceci à l'élément positionné par ancre pour commencer à détecter quand différentes options de repli sont appliquées.
- La règle {{CSSxRef("@container")}} avec la fonction `anchored()`&nbsp;: Celle-ci reçoit un descripteur [`fallback`](/fr/docs/Web/CSS/Reference/At-rules/@container#fallback) comme argument. La valeur du descripteur est une valeur `position-try-fallbacks`.

Par exemple, disons que nous avons un élément d'infobulle positionné par ancre qui est positionné au-dessus de son ancre par défaut avec une valeur {{CSSxRef("position-area")}} qui est `top`, mais qui a une valeur {{CSSxRef("position-try-fallbacks")}} définie à `flip-block`. Cela provoque le basculement de l'infobulle dans le sens du bloc vers le bas de son ancrage lorsqu'elle commence à déborder du haut de la zone d'affichage. Si nous voulons détecter quand le repli est appliqué à l'infobulle, nous devons d'abord définir `container-type: anchored` dessus pour le transformer en requête de conteneur ancré.

```css
.infobulle {
  position: absolute;
  position-anchor: --mon-ancre;
  position-area: top;
  position-try-fallbacks: flip-block;
  container-type: anchored;
}
```

Avec ceci en place, nous pouvons maintenant écrire une requête de conteneur comme suit&nbsp;:

```css
@container anchored(fallback: flip-block) {
  /* Styles des descendants ici */
}
```

Le test de requête — `anchored(fallback: flip-block)` — retourne vrai (`true`) lorsque l'option de repli `flip-block` est appliquée à l'infobulle, auquel cas les styles définis dans le bloc `@container` sont appliqués. Vous pouvez par exemple vouloir modifier la position et l'orientation de l'icône en forme de flèche afin qu'elle continue de pointer vers l'ancre, changer la direction d'un dégradé, etc.

> [!NOTE]
> Gardez à l'esprit que, comme pour toutes les requêtes de conteneur, les styles appliqués ne peuvent affecter que les descendants du conteneur, et non le conteneur lui-même. Cela peut nécessiter d'appliquer certains de vos styles d'élément positionné à un élément enveloppant à l'intérieur de celui-ci, plutôt qu'à l'élément lui-même, comme démontré dans [Exemple de repli multiples](#exemple_de_repli_multiples).

## Exemple d'utilisation simple

Cet exemple inclut un élément d'ancre qui a une boîte d'information (<i lang="en">infobox</i> en anglais) positionnée par rapport à lui.
Initialement, la boîte d'information est positionnée au-dessus de l'ancre et inclut une flèche pointant vers le bas vers l'ancre. Nous incluons un repli de position afin que la boîte d'information se déplace en dessous de l'ancre lorsque le contenu défile suffisamment pour que la boîte d'information commence à sortir du haut de la fenêtre. De plus, nous utilisons une requête de conteneur ancrée pour changer les styles une fois que le repli est activé, déplaçant la flèche et la pointant vers le haut à la place.

L'ancre et la boîte d'information sont représentées par deux éléments HTML {{HTMLElement("div")}}, comme indiqué ci-dessous. Ils sont entourés de contenu textuel dans le rendu final pour provoquer le défilement de la page, mais nous l'avons caché pour plus de concision&nbsp;:

```html
<div class="ancre">⚓︎</div>

<div class="boite-information">Boîte d'information</div>
```

```html hidden live-sample___basic-example
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

<p>
  Malesuada nunc vel risus commodo viverra maecenas accumsan lacus. Vel elit
  scelerisque mauris pellentesque pulvinar pellentesque habitant morbi
  tristique. Porta lorem mollis aliquam ut porttitor. Turpis cursus in hac
  habitasse platea dictumst quisque. Dolor sit amet consectetur adipiscing elit.
  Ornare lectus sit amet est placerat. Nulla aliquet porttitor lacus luctus
  accumsan.
</p>

<p>
  Nisi quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus. In arcu
  cursus euismod quis viverra nibh cras pulvinar. Vulputate ut pharetra sit amet
  aliquam.
</p>

<div class="ancre">⚓︎</div>

<div class="boite-information">Boîte d'information</div>

<p>
  Malesuada nunc vel risus commodo viverra maecenas accumsan lacus. Vel elit
  scelerisque mauris pellentesque pulvinar pellentesque habitant morbi
  tristique. Porta lorem mollis aliquam ut porttitor. Turpis cursus in hac
  habitasse platea dictumst quisque. Dolor sit amet consectetur adipiscing elit.
  Ornare lectus sit amet est placerat. Nulla aliquet porttitor lacus luctus
  accumsan.
</p>

<p>
  Malesuada nunc vel risus commodo viverra maecenas accumsan lacus. Vel elit
  scelerisque mauris pellentesque pulvinar pellentesque habitant morbi
  tristique. Porta lorem mollis aliquam ut porttitor. Turpis cursus in hac
  habitasse platea dictumst quisque. Dolor sit amet consectetur adipiscing elit.
  Ornare lectus sit amet est placerat. Nulla aliquet porttitor lacus luctus
  accumsan.
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

Dans notre CSS, nous commençons par définir le `<div>` d'ancre comme un élément d'ancre en lui donnant un {{CSSxRef("anchor-name")}} de `--mon-ancre`.

```css hidden live-sample___basic-example
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  width: 80%;
  max-width: 600px;
  margin: 0 auto;
}

p {
  font-size: 1.4em;
  line-height: 1.5;
}

.ancre {
  font-size: 2em;
  color: white;
  text-shadow: 1px 1px 1px black;
  background-color: blue;
  width: fit-content;
  padding: 5px 10px;
}

.boite-information {
  color: white;
  background-color: black;
  font-size: 1.4em;
  padding: 10px;
  margin: 1rem;
  border-radius: 10px;
}

.boite-information::before {
  color: black;
  font-size: 1rem;
  margin: 0;
  line-height: 0.5;
  left: 0;
  width: 100%;
  text-align: center;
}

@supports not (container-type: anchored) {
  body::before {
    content: "Votre navigateur ne prend pas en charge les requêtes de conteneurs ancrés.";
    background-color: wheat;
    display: block;
    text-align: center;
    padding: 1rem 0;
  }
}
```

```css live-sample___basic-example
.ancre {
  anchor-name: --mon-ancre;
}
```

Ensuite, nous donnons au `<div>` `boite-information` une valeur de {{CSSxRef("position")}} à `fixed` et une valeur {{CSSxRef("position-anchor")}} de `--mon-ancre` pour l'associer à l'élément d'ancre. Nous donnons ensuite à la boîte d'information une valeur {{CSSxRef("position-area")}} de `top` pour la positionner au-dessus de l'élément d'ancre et une valeur {{CSSxRef("position-try-fallbacks")}} de `bottom` afin que la boîte d'information soit déplacée en dessous de l'ancre lorsqu'elle commence à déborder du haut de la fenêtre lors du défilement du contenu vers le haut.

Enfin, nous définissons une valeur de {{CSSxRef("container-type")}} à `anchored` sur la boîte d'information pour la désigner comme un conteneur de requêtes ancrées, ce qui signifie que nous pouvons maintenant détecter quand différents `position-try-fallbacks` sont actifs sur la boîte d'information avec la règle {{CSSxRef("@container")}}, et mettre à jour les styles de ses descendants en conséquence.

```css live-sample___basic-example
.boite-information {
  position: fixed;
  position-anchor: --mon-ancre;
  position-area: top;
  position-try-fallbacks: bottom;
  container-type: anchored;
}
```

Maintenant nous ajoutons la flèche à la boîte d'information en utilisant du contenu généré sur son pseudo-élément {{CSSxRef("::before")}}. Nous définissons la propriété {{CSSxRef("content")}} du pseudo-élément sur une icône de flèche vers le bas appropriée, la positionnons en absolue et définissons sa propriété {{CSSxRef("top")}} à `105%` pour la positionner en bas de la boîte d'information (nous la définissons à plus de `100%` afin qu'elle corresponde visuellement à la position de la flèche vers le haut correspondante).

```css live-sample___basic-example
.boite-information::before {
  content: "▼";
  position: absolute;
  top: 105%;
}
```

Ensuite, nous ajoutons la requête de conteneur ancré. Nous incluons une règle `@container` avec son test défini comme `anchored(fallback: bottom)`. Cela signifie que lorsque le repli `bottom` est appliqué à la boîte d'information, le CSS à l'intérieur de la règle est appliqué au document. À l'intérieur, nous définissons un style alternatif pour le pseudo-élément `::before` de la boîte d'information qui remplace l'icône de flèche vers le bas par une flèche vers le haut et la positionne en haut de la boîte d'information.

```css live-sample___basic-example
@container anchored(fallback: bottom) {
  .boite-information::before {
    content: "▲";
    bottom: 100%;
    top: auto;
  }
}
```

> [!NOTE]
> Il y a plus de CSS inclus dans cet exemple pour gérer le style de base de tous les éléments, mais nous ne vous avons montré que les parties pertinentes pour les requêtes de conteneur ancrées. Pour voir le code complet, ouvrez l'exemple dans le MDN Playground en appuyant sur le bouton «&nbsp;Exécuter&nbsp;» sur l'un des blocs de code ou le rendu en direct.

L'exemple ressemble à ceci&nbsp;:

{{EmbedLiveSample("basic-example", "100%", 350)}}

Essayez de faire défiler la démonstration afin que l'ancre se rapproche du haut de la fenêtre et notez comment, non seulement la boîte d'information se déplace sous l'ancre pour rester à l'écran, mais le style se met également à jour afin que l'icône de flèche fonctionne toujours pour la nouvelle position de la boîte d'information.

Si vous faites défiler l'ancre vers le bas de la fenêtre, la boîte d'information remonte au-dessus de celle-ci. Nous n'avons pas besoin de définir une valeur supplémentaire `position-try-fallbacks` de `top` pour y parvenir, car `position-area: top` est la position par défaut de la boîte d'information. Si les replis fournis n'empêchent pas l'élément positionné par ancre de déborder, le navigateur revient à sa position par défaut.

## Exemple de repli multiples

Cet exemple montre plusieurs replis de position et des requêtes de conteneur ancrées en action, et aborde également le problème de ce qu'il faut faire si vous souhaitez utiliser des requêtes de conteneur ancrées pour définir des styles sur l'élément positionné par ancre lui-même, plutôt que sur ses descendants, en utilisant un élément englobant supplémentaire. L'exemple inclut également un peu de JavaScript qui vous permet de déplacer l'élément ancre autour de l'écran en utilisant la souris ou le clavier pour vérifier les différents replis.

Le HTML de cet exemple inclut deux éléments HTML {{HTMLElement("div")}} pour représenter l'ancre et la boîte d'information. Le `<div>` de classe `ancre` inclut un attribut [`tabindex`](/fr/docs/Web/HTML/Reference/Global_attributes/tabindex) pour le rendre accessible au clavier, tandis que le `<div>` de classe `boite-information` inclut un élément englobant `<div>` supplémentaire pour appliquer les styles de la boîte d'information, afin que nous puissions le mettre en forme avec la règle `@container`.

```html live-sample___multiple-fallbacks
<div class="ancre" tabindex="0">⚓︎</div>

<div class="boite-information">
  <div>Boîte d'information</div>
</div>
```

Nous commençons par définir les styles en définissant le `<div>` de classe `ancre` comme un élément d'ancrage, en lui donnant à nouveau un `anchor-name` de `--mon-ancre`. Nous le positionnons également en absolu afin de pouvoir le déplacer en définissant différentes valeurs de {{Glossary("inset properties", "propriétés d'encart")}} dessus avec JavaScript.

```css hidden live-sample___multiple-fallbacks
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
  height: 100%;
}

body {
  height: inherit;
}

p {
  font-size: 1.4em;
  line-height: 1.5;
}

.ancre {
  font-size: 2em;
  color: white;
  text-shadow: 1px 1px 1px black;
  background-color: blue;
  width: fit-content;
  padding: 5px 10px;
}

@supports not (container-type: anchored) {
  body::before {
    content: "Votre navigateur ne prend pas en charge les requêtes de conteneurs ancrés.";
    background-color: wheat;
    display: block;
    text-align: center;
    padding: 1rem 0;
  }
}
```

```css live-sample___multiple-fallbacks
.ancre {
  anchor-name: --mon-ancre;
  position: absolute;
}
```

Ensuite, nous positionnons notre boîte d'information par rapport à notre ancre en la positionnant de façon absolue et en lui donnant une valeur `position-anchor` de `--mon-ancre`. Cette fois, nous la positionnons en haut à gauche de l'ancre avec une valeur `position-area` de `top left`. Nous définissons ensuite trois `position-try-fallbacks` — `flip-block`, `flip-inline` et `flip-block flip-inline` — ce qui fait que la boîte d'information inverse sa position le long de son axe de bloc, de son axe en ligne ou des deux, pour rester à l'écran lorsque l'ancre se rapproche des différents bords de la fenêtre.

Enfin, nous transformons la boîte d'information en une requête de conteneur ancré en définissant `container-type: anchored`.

```css live-sample___multiple-fallbacks
.boite-information {
  position: absolute;
  position-anchor: --mon-ancre;
  position-area: top left;
  position-try-fallbacks:
    flip-block,
    flip-inline,
    flip-block flip-inline;
  container-type: anchored;
}
```

À ce stade, nous allons vous présenter les styles visuels de base définis sur la boîte d'information, afin d'illustrer le fait que, dans ce cas précis, nous appliquons ces styles à l'élément conteneur `<div>` situé à l'intérieur de la boîte d'information plutôt qu'à la boîte d'information elle-même. Comme mentionné précédemment, nous procédons ainsi afin de pouvoir manipuler ces styles à l'aide de requêtes de conteneur ancré. Ça ne serait pas possible s'ils étaient définis directement sur la boîte d'information, car celle-ci fait office de requête de conteneur ancré.

Plus particulièrement, nous définissons ici une valeur de {{CSSxRef("border-radius")}} qui crée un arrondi sur tous les coins de la boîte d'information sauf le coin inférieur droit. Comme la boîte d'information est positionnée en haut à gauche de l'ancre, ce coin sert de flèche, pointant vers l'ancre.

```css live-sample___multiple-fallbacks
.boite-information div {
  color: white;
  background-color: black;
  font-size: 1.4em;
  padding: 10px;
  margin: 1px;

  border-radius: 10px 10px 0 10px;
}
```

Enfin, nous définissons une requête de conteneur ancré pour chaque solution de repli d'essai de position susceptible d'être appliquée à la boîte d'information utilisant les règles `@container`. Dans chaque cas, nous modifions les coins arrondis appliqués à l'élément enveloppant la boîte d'information `<div>` afin que le coin le plus proche de l'ancre ne soit jamais arrondi.

```css live-sample___multiple-fallbacks
@container anchored(fallback: flip-block) {
  .boite-information div {
    border-radius: 10px 0 10px 10px;
  }
}

@container anchored(fallback: flip-inline) {
  .boite-information div {
    border-radius: 10px 10px 10px 0;
  }
}

@container anchored(fallback: flip-block flip-inline) {
  .boite-information div {
    border-radius: 0 10px 10px 10px;
  }
}
```

> [!NOTE]
> Nous avons masqué la plupart des styles de base par souci de concision, ainsi que le JavaScript qui fournit les contrôles de déplacement (ceci n'est pas pertinent pour la démonstration). Pour voir le code complet, ouvrez l'exemple dans le MDN Playground en appuyant sur le bouton «&nbsp;Exécuter&nbsp;» sur l'un des blocs de code ou le rendu en direct.

```js hidden live-sample___multiple-fallbacks
const divAncre = document.querySelector(".ancre");

let xPos = 250;
let yPos = 120;

function definirPosition() {
  const maxX = document.body.clientWidth - divAncre.clientWidth - 25;
  const maxY = document.body.clientHeight - divAncre.clientHeight - 25;

  if (xPos < 25) {
    xPos = 25;
  }

  if (xPos > maxX) {
    xPos = maxX;
  }

  if (yPos < 25) {
    yPos = 25;
  }

  if (yPos > maxY) {
    yPos = maxY;
  }

  divAncre.style.left = `${xPos}px`;
  divAncre.style.top = `${yPos}px`;
}

definirPosition();

document.body.addEventListener("keydown", (e) => {
  if (e.key === "z") {
    yPos -= 25;
  } else if (e.key === "d") {
    xPos += 25;
  } else if (e.key === "s") {
    yPos += 25;
  } else if (e.key === "q") {
    xPos -= 25;
  }

  definirPosition();
});

document.body.addEventListener("click", (e) => {
  xPos = e.clientX;
  yPos = e.clientY;

  definirPosition();
});
```

Cet exemple s'affiche ainsi&nbsp;:

{{EmbedLiveSample("multiple-fallbacks", "100%", 350)}}

Essayez de déplacer l'élément d'ancre autour de la zone d'affichage en procédant ainsi&nbsp;:

- En cliquant avec la souris (ou en touchant l'écran si vous êtes sur un appareil tactile) à l'endroit où vous souhaitez déplacer l'ancre.
- En utilisant les touches <kbd>Z</kbd>, <kbd>Q</kbd>, <kbd>S</kbd> et <kbd>D</kbd> pour déplacer l'ancre vers le haut, la gauche, le bas et la droite, respectivement.

Lorsque vous rapprochez l'élément ancre des bords de l'écran, notez comment la boîte d'information se déplace autour de celui-ci pour rester visible à l'écran, et comment le `border-radius` appliqué à la boîte d'information change de sorte que l'angle non arrondi pointe toujours vers l'ancre. Déplacer l'ancre dans les différents coins vous permet de visualiser les différents effets.

## Voir aussi

- [Requêtes de conteneurs CSS](/fr/docs/Web/CSS/Guides/Containment/Container_queries)
- [Utiliser les requêtes de taille et de style du conteneur](/fr/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries)
- [Utiliser les requêtes d'état de défilement du conteneur](/fr/docs/Web/CSS/Guides/Conditional_rules/Container_scroll-state_queries)
- Le module [de positionnement par ancre CSS](/fr/docs/Web/CSS/Guides/Anchor_positioning)
- [Apprendre&nbsp;: positionnement CSS](/fr/docs/Learn_web_development/Core/CSS_layout/Positioning)
