---
title: Utiliser les transitions CSS
short-title: Utiliser les transitions
slug: Web/CSS/Guides/Transitions/Using
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

Les **transitions CSS** offrent un moyen de contrôler la vitesse d'animation lors de la modification des propriétés CSS. Au lieu que les changements de propriété prennent effet immédiatement, vous pouvez faire en sorte que les modifications d'une propriété s'effectuent sur une période donnée. Par exemple, si vous changez la couleur d'un élément du blanc au noir, le changement est généralement instantané. Avec les transitions CSS activées, les changements se produisent à des intervalles de temps qui suivent une courbe d'accélération, toutes personnalisables.

Les animations qui consistent à passer d'un état à un autre sont souvent appelées _transitions implicites_, car les états intermédiaires entre l'état initial et l'état final sont implicitement définis par le navigateur.

![Une transition CSS indique au navigateur de dessiner les états intermédiaires entre les états initial et final, offrant à l'utilisateur une transition fluide.](transitionsprinciple.png)

Les transitions CSS permettent de choisir les propriétés à animer (en [_les listant explicitement_](/fr/docs/Web/CSS/Reference/Properties/transition-property)), le moment où l'animation commencera (en définissant un [_délai_](/fr/docs/Web/CSS/Reference/Properties/transition-delay)), la durée de la transition (en définissant une [_durée_](/fr/docs/Web/CSS/Reference/Properties/transition-duration)) et la façon dont la transition se déroulera (en définissant une [_fonction de temporisation_](/fr/docs/Web/CSS/Reference/Properties/transition-timing-function), par exemple de façon linéaire ou rapide au début, lente à la fin).

## Quelles sont les propriétés CSS qui peuvent être animées ?

L'auteur·ice Web peut définir quelles propriétés doivent être animées et de quelle manière. Cela permet de créer des transitions complexes. Cependant, certaines propriétés [ne sont pas animables](/fr/docs/Web/CSS/Guides/Animations/Animatable_properties) car il n'est pas logique de les animer.

> [!NOTE]
> La valeur `auto` représente souvent un cas très complexe. La spécification recommande de ne pas animer de et vers `auto`. Certains agents utilisateurs, comme ceux basés sur Gecko, respectent cette exigence, tandis que d'autres, comme ceux basés sur WebKit, sont moins stricts. L'utilisation d'animations avec `auto` peut entraîner des résultats imprévisibles, selon le navigateur et sa version, et doit être évitée.

## Définir les transitions

Les transitions CSS sont généralement contrôlées grâce à la propriété raccourcie {{CSSxRef("transition")}}. C'est la meilleure façon de configurer les transitions, car cela permet d'éviter des paramètres désynchronisés, ce qui peut être très frustrant à déboguer dans le CSS.

Vous pouvez contrôler les différents composants de la transition avec les sous-propriétés suivantes&nbsp;:

- {{CSSxRef("transition-property")}}
  - : Définit le ou les noms des propriétés CSS auxquelles appliquer les transitions. Seules les propriétés listées ici sont animées lors des transitions&nbsp;; les modifications des autres propriétés sont appliquées instantanément comme d'habitude.
- {{CSSxRef("transition-duration")}}
  - : Définit la durée pendant laquelle la transition doit s'effectuer. Vous pouvez définir une durée unique qui s'applique à toutes les propriétés pendant la transition, ou plusieurs valeurs pour permettre à chaque propriété de se transformer sur une période différente.
- {{CSSxRef("transition-timing-function")}}
  - : Définit une fonction qui décrit comment les valeurs intermédiaires des propriétés sont calculées. Les _fonctions de temporisation_ déterminent comment les valeurs intermédiaires de la transition sont calculées. La plupart des [fonctions de temporisation](/fr/docs/Web/CSS/Reference/Values/easing-function) peuvent être spécifiées en fournissant le graphique de la fonction correspondante, tel que défini par quatre points définissant une courbe de Bézier cubique. Vous pouvez également choisir une temporisation depuis le [répertoire des fonctions de temporisation <sup>(angl.)</sup>](https://easings.net/).
- {{CSSxRef("transition-delay")}}
  - : Définit le temps à attendre entre le moment où une propriété est modifiée et le début effectif de la transition.

La syntaxe CSS raccourcie de `transition` s'écrit ainsi&nbsp;:

```plain
transition: <property> <duration> <timing-function> <delay>;
```

## Exemples

### Exemple simple

Avec cette feuille de style, on opère une transition CSS sur la taille de police de quatre secondes après deux secondes écoulées lorsque l'utilisateur·ice passe la souris sur l'élément&nbsp;:

```css
#delay {
  font-size: 14px;
  transition-property: font-size;
  transition-duration: 4s;
  transition-delay: 2s;
}

#delay:hover {
  font-size: 36px;
}
```

### Exemple avec plusieurs propriétés animées

```html hidden
<body>
  <p>
    La boîte ci-dessous utilise des transitions pour les propriétés&nbsp;:
    width, height, background-color, transform. Survolez la boîte pour voir les
    animations.
  </p>
  <div class="box">Exemple</div>
</body>
```

#### CSS

```css
.box {
  border-style: solid;
  border-width: 1px;
  display: block;
  width: 100px;
  height: 100px;
  background-color: blue;
  transition:
    width 2s,
    height 2s,
    background-color 2s,
    rotate 2s;
}

.box:hover {
  background-color: #ffcccc;
  width: 200px;
  height: 200px;
  rotate: 180deg;
}
```

{{EmbedLiveSample("Exemple avec plusieurs propriétés animées", 600, 300)}}

### Quand les listes de valeurs des propriétés ont des longueurs différentes

Si la liste des valeurs pour une propriété est plus courte qu'une autre, les valeurs de la liste la plus courte seront répétées pour que la longueur réelle corresponde. Ainsi&nbsp;:

```css
div {
  transition-property: opacity, left, top, height;
  transition-duration: 3s, 5s;
}
```

Sera équivalent à&nbsp;:

```css
div {
  transition-property: opacity, left, top, height;
  transition-duration: 3s, 5s, 3s, 5s;
}
```

De même, si la liste est trop longue par rapport à {{CSSxRef("transition-property")}}, elle sera tronquée. Ainsi&nbsp;:

```css
div {
  transition-property: opacity, left;
  transition-duration: 3s, 5s, 2s, 1s;
}
```

Sera équivalent à&nbsp;:

```css
div {
  transition-property: opacity, left;
  transition-duration: 3s, 5s;
}
```

### Utiliser les transitions pour accentuer les éléments pour un menu

On utilise parfois CSS pour mettre en avant les éléments d'un menu lorsque l'utilisateur·ice les survole avec sa souris. On peut facilement utiliser les transitions CSS pour améliorer l'effet obtenu.

Tout d'abord, on définit le menu en HTML&nbsp;:

```html
<nav>
  <a href="#">Accueil</a>
  <a href="#">À propos</a>
  <a href="#">Contact</a>
  <a href="#">Liens</a>
</nav>
```

On construit le CSS pour définir l'apparence du menu&nbsp;:

```css
nav {
  display: flex;
  gap: 0.5rem;
}

a {
  flex: 1;
  background-color: #333333;
  color: white;
  border: 1px solid;
  padding: 0.5rem;
  text-align: center;
  text-decoration: none;
  transition: all 0.5s ease-out;
}

a:hover,
a:focus {
  background-color: white;
  color: #333333;
}
```

Le CSS établit l'apparence du menu, avec les couleurs de fond et de texte qui changent lorsque l'élément est dans ses états {{CSSxRef(":hover")}} et {{CSSxRef(":focus")}}&nbsp;:

{{EmbedLiveSample("Utiliser les transitions pour accentuer les éléments pour un menu")}}

### Faire une transition de `display` et `content-visibility`

Cet exemple montre comment {{CSSxRef("display")}} et {{CSSxRef("content-visibility")}} peuvent être animés. Ce comportement est utile pour créer des animations d'entrée/sortie où vous souhaitez, par exemple, retirer un conteneur du DOM avec `display: none`, mais le faire disparaître progressivement avec {{CSSxRef("opacity")}} plutôt que de disparaître immédiatement.

Les navigateurs prenant en charge les transitions de `display` et `content-visibility` utilisent une variation du [type d'animation discrète](/fr/docs/Web/CSS/Guides/Animations/Animatable_properties#discrète). Cela signifie généralement que les propriétés basculeront entre deux valeurs à 50 % de l'animation entre les deux.

Il y a cependant une exception, qui se produit lors de l'animation vers/depuis `display: none` ou `content-visibility: hidden`. Dans ce cas, le navigateur basculera entre les deux valeurs afin que le contenu animé soit visible pendant toute la durée de l'animation.

Par exemple&nbsp;:

- Lors de l'animation de `display` de `none` à `block` (ou une autre valeur de `display` visible), la valeur basculera à `block` à `0 %` de la durée de l'animation afin qu'elle soit visible pendant toute l'animation.
- Lors de l'animation de `display` de `block` (ou une autre valeur de `display` visible) à `none`, la valeur basculera à `none` à `100 %` de la durée de l'animation afin qu'elle soit visible pendant toute l'animation.

Lors de la transition de ces propriétés, {{CSSxRef("transition-behavior", "transition-behavior: allow-discrete")}} doit être défini sur les transitions. Cela permet effectivement d'activer les transitions de `display`/`content-visibility`.

Lors de la transition de `display`, {{CSSxRef("@starting-style")}} est nécessaire pour fournir un ensemble de valeurs de départ pour les propriétés définies sur un élément que vous souhaitez animer lorsque l'élément reçoit sa première mise à jour de style. Cela est nécessaire pour éviter un comportement inattendu. Par défaut, les transitions CSS ne sont pas déclenchées lors des premières mises à jour de style des éléments lorsqu'ils apparaissent pour la première fois dans le DOM, ce qui inclut lorsque `display` passe de `none` à un autre état. Les animations `content-visibility` n'ont pas besoin de valeurs de départ définies dans un bloc `@starting-style`. Cela est dû au fait que `content-visibility` ne masque pas un élément du DOM comme le fait `display`&nbsp;: il se contente de ne pas rendre le contenu de l'élément.

#### HTML

Le HTML contient deux éléments {{HTMLElement("p")}} avec un {{HTMLElement("div")}} entre les deux que nous allons animer de `display: none` à `block`.

```html
<p>
  Cliquez n'importe où sur l'écran ou appuyez sur une touche pour basculer le
  <code>&lt;div&gt;</code> entre caché et affiché.
</p>

<div>
  Il s'agit d'un élément <code>&lt;div&gt;</code> qui passe de
  <code>display: none; opacity: 0</code> à
  <code>display: block; opacity: 1</code>. Sympa, non&nbsp;?
</div>

<p>
  Il s'agit d'un autre paragraphe pour montrer que
  <code>display: none;</code> est appliqué et supprimé sur le
  <code>&lt;div&gt; </code> ci-dessus. Si seule son <code>opacity</code>
  était modifiée, il prendrait toujours de la place dans le DOM.
  <code>opacity</code> étant modifiée, elle prendrait toujours de la place dans
  le DOM.
</p>
```

#### CSS

```css
html {
  height: 100vh;
}

div {
  font-size: 1.6rem;
  padding: 20px;
  border: 3px solid red;
  border-radius: 20px;
  width: 480px;

  display: none;
  opacity: 0;
  transition:
    opacity 1s,
    display 1s allow-discrete;
  /* Équivalent à
  transition: all 1s allow-discrete; */
}

.showing {
  opacity: 1;
  display: block;
}

@starting-style {
  .showing {
    opacity: 0;
  }
}
```

On notera que le bloc `@starting-style` est utilisé pour définir le style de départ de la transition, et l'inclusion de la propriété `display` dans la liste des transitions, avec `allow-discrete` défini dessus.

#### JavaScript

Enfin, nous incluons un peu de JavaScript pour configurer des écouteurs d'événements afin de déclencher la transition (avec la classe `showing`).

```js
const divElem = document.querySelector("div");
const htmlElem = document.querySelector(":root");

htmlElem.addEventListener("click", showHide);
document.addEventListener("keydown", showHide);

function showHide() {
  divElem.classList.toggle("showing");
}
```

#### Résultat

Le code s'affiche comme suit&nbsp;:

{{EmbedLiveSample("Faire une transition de `display` et `content-visibility`", "100%", 350)}}

## Exemples avec JavaScript

> [!NOTE]
> Il faut faire attention lors de l'utilisation d'une transition immédiatement après&nbsp;:
>
> - l'ajout de l'élément au DOM en utilisant `.appendChild()`
> - la suppression de la propriété `display: none;` d'un élément.
>
> Cela est traité comme si l'état initial n'avait jamais eu lieu et que l'élément était toujours dans son état final. Une façon de surmonter cette limitation est d'appliquer un `setTimeout()` de quelques millisecondes avant de changer la propriété CSS que vous souhaitez faire transiter.

### Utiliser les transitions CSS pour lisser les transformations avec JavaScript

Les transitions permettent de lisser les opérations effectuées avec JavaScript. Par exemple :

```html live-sample___js-transitions
<p>Cliquez n'importe où pour déplacer la balle</p>
<div id="toto" class="ball"></div>
```

```js live-sample___js-transitions
// Faire déplacer la balle vers une certaine position :
const f = document.getElementById("toto");
document.addEventListener("click", (ev) => {
  f.style.transform = `translateY(${ev.clientY - 25}px)`;
  f.style.transform += `translateX(${ev.clientX - 25}px)`;
});
```

Avec CSS, il suffit d'ajouter une transition à l'élément et chaque modification sera appliquée de façon régulière&nbsp;:

```css hidden live-sample___js-transitions
body {
  background-color: white;
  color: #333333;
  font:
    1.2em / 1.5 "Helvetica Neue",
    "Helvetica",
    "Arial",
    sans-serif;
  padding: 0;
  margin: 0;
}

p {
  margin-top: 3em;
}

main {
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 660px;
  height: 400px;
  border: 1px solid #cccccc;
  padding: 20px;
}
```

```css live-sample___js-transitions
.ball {
  border-radius: 25px;
  width: 50px;
  height: 50px;
  background: #cc0000;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 1s;
}
```

{{EmbedLiveSample("js-transitions", "", 400)}}

### Détecter le début et la fin d'une transition

Vous pouvez utiliser l'évènement {{DOMxRef("Element/transitionend_event", "transitionend")}} pour détecter qu'une animation a terminé son exécution. Il s'agit d'un objet {{DOMxRef("TransitionEvent")}}, qui possède deux propriétés supplémentaires par rapport à un objet {{DOMxRef("Event")}} classique&nbsp;:

- `propertyName`
  - : Une chaîne de caractères indiquant le nom de la propriété CSS dont la transition est terminée.
- `elapsedTime`
  - : Un nombre à virgule flottante indiquant le nombre de secondes pendant lesquelles la transition a été en cours au moment où l'évènement a été déclenché. Cette valeur n'est pas affectée par la valeur de {{CSSxRef("transition-delay")}}.

Comme d'habitude, vous pouvez utiliser la méthode {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}} pour surveiller cet évènement&nbsp;:

```js
el.addEventListener("transitionend", updateTransition);
```

Vous pouvez détecter le début d'une transition en utilisant {{DOMxRef("Element/transitionrun_event", "transitionrun")}} (se déclenche avant tout délai) et {{DOMxRef("Element/transitionstart_event", "transitionstart")}} (se déclenche après tout délai), de la même manière&nbsp;:

```js
el.addEventListener("transitionrun", signalStart);
el.addEventListener("transitionstart", signalStart);
```

> [!NOTE]
> L'évènement `transitionend` ne se déclenche pas si la transition est interrompue avant d'être terminée, soit parce que l'élément est rendu {{CSSxRef("display", "display: none")}}, soit parce que la valeur de la propriété animée est modifiée.

## Spécifications

{{Specifications}}

## Voir aussi

- L'interface {{DOMxRef("TransitionEvent")}} et l'évènement {{DOMxRef("Element/transitionend_event", "transitionend")}}
- [Utiliser les animations CSS](/fr/docs/Web/CSS/Guides/Animations/Using)
