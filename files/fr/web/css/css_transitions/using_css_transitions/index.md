---
title: Utiliser les transitions CSS
slug: Web/CSS/CSS_Transitions/Using_CSS_transitions
tags:
  - Avancé
  - CSS
  - Guide
  - Transitions
translation_of: Web/CSS/CSS_Transitions/Using_CSS_transitions
original_slug: Web/CSS/CSS_Transitions/Utiliser_transitions_CSS
---
{{CSSref}}

Les **transitions CSS** permettent de contrôler la vitesse d'animation lorsque les propriétés CSS sont modifiées. Plutôt que le changement soit immédiat, on peut l'étaler sur une certaine période. Ainsi, si on souhaite passer un élément de blanc à noir, on pourra utiliser les transitions CSS afin que cette modification soit effectuée progressivement, selon une courbe d'accélération donnée.

Les animations qui utilisent des transitions entre deux états sont souvent appelées _transitions implicites_ car l'état initial et l'état final sont définis implicitement par le navigateur.

![A CSS transition tells the browser to draw the intermediate states between the initial and final states, showing the user a smooth transitions.](transitionsprinciple.png)

Les transitions CSS vous permettent de choisir :

- les propriétés à animer en les listant explicitement
- le début de l'animation
- la durée de l'animation
- la façon dont la transition s'exécutera

## Quelles sont les propriétés CSS qui peuvent être animées ?

On peut définir les propriétés qu'on souhaite animer et la façon dont on souhaite les animer. Cela permet de créer des transitions complexes. Toutefois, toutes les propriétés ne peuvent pas être animées et [la liste des propriétés concernées est limitée](/fr/docs/Web/CSS/CSS_animated_properties).

> **Note :** La gestion de la valeur `auto` représente un cas complexe. La spécification requiert de ne pas animer une telle valeur. Certains navigateurs dont ceux basés sur Gecko respectent cette règle mais d'autres comme WebKit sont moins stricts. Attention donc lors de l'utilisation des animations avec `auto`.

> **Note :** Attention lorsqu'on manipule des transitions directement après avoir ajouté un élément via `.appendChild()` ou en supprimant la propriété `display: none;`. Cela sera compris comme si l'état initial n'avait jamais eu lieu et que l'élément avait toujours été dans son état final. Pour contourner ce problème, on peut appliquer `window.setTimeout()` pendant quelques millisecondes avant de modifier la propriété CSS sur laquelle on souhaite appliquer une transition.

## Les propriétés CSS relatives aux transitions

Les transitions CSS sont généralement contrôlées grâce à la propriété raccourcie {{cssxref("transition")}}. Les différents composants d'une transition CSS peuvent être décrits dans le détail grâce aux propriétés détaillées suivantes :

> **Note :** Dans les exemples ci-après, l'effet de répétition est uniquement utilisé à des fins de visualisation. Si vous souhaitez obtenir des effets visuels qui se répètent, il faudra utiliser la propriété {{cssxref("animation")}}.

- {{cssxref("transition-property")}}
  - : Cette propriété définit le nom des propriétés CSS pour lesquelles on veut appliquer des transitions. Seules les propriétés listées ici seront sujettes aux transitions. Les modifications appliquées aux autres propriétés seront instantanées.
- {{cssxref("transition-duration")}}
  - : Cette propriété définit la durée de la transition. On peut définir une durée pour toutes les transitions ou une durée pour chacune des propriétés.
- {{cssxref("transition-timing-function")}}
  - : Cette propriété définit une fonction qui décrit la façon dont les valeurs intermédiaires sont calculées. On utilise pour cela des [fonctions de temporisation](/fr/docs/Web/CSS/easing-function).
- {{cssxref("transition-delay")}}
  - : Cette propriété indique le temps à attendre entre le moment où la propriété est modifiée et le début de la transition.

La syntaxe de la propriété raccourcie {{cssxref("transition")}} est :

```css
div {
  transition: <property> <duration> <timing-function> <delay>;
}
```

## Exemples

### Un exemple simple

Avec cette feuille de style, on opère une transition CSS sur la taille de police de quatre secondes après deux secondes écoulées lorsque l'utilisateur passe la souris sur l'élément :

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
    <p>La boîte ci-dessous utilise des transitions pour les propriétés : width, height, background-color, transform. Survolez la boîte pour voir les animations.</p>
    <div class="box">Sample</div>
</body>
```

#### CSS Content

```css
.box {
    border-style: solid;
    border-width: 1px;
    display: block;
    width: 100px;
    height: 100px;
    background-color: #0000FF;
    transition: width 2s, height 2s, background-color 2s, transform 2s;
}

.box:hover {
    background-color: #FFCCCC;
    width: 200px;
    height: 200px;
    transform: rotate(180deg);
}
```

{{EmbedLiveSample('Exemple_avec_plusieurs_propriétés_animées', 600, 300)}}

### Appliquer une transition sur plusieurs propriétés

#### CSS

```css
.box {
  border-style: solid;
  border-width: 1px;
  display: block;
  width: 100px;
  height: 100px;
  background-color: #0000FF;
  transition: width 2s, height 2s, background-color 2s, transform 2s;
}

.box:hover {
  background-color: #FFCCCC;
  width: 200px;
  height: 200px;
  transform: rotate(180deg);
}
```

#### HTML

```html
<p>Cette boîte utilisera des transitions pour width, height, background-color, transform.
   Survolez cette boîte pour voir l'effet.</p>
<div class="box"></div>
```

#### Résultat

{{EmbedLiveSample('Appliquer_une_transition_sur_plusieurs_propriétés', 600, 300)}}

### Le rôle de la taille des listes de valeurs

Si la liste des valeurs pour une propriété est plus courte qu'une autre, les valeurs de la liste la plus courte seront répétées pour que la longueur réelle corresponde. Ainsi :

```css
div {
  transition-property: opacity, left, top, height;
  transition-duration: 3s, 5s;
}
```

Sera équivalent à :

```css
div {
  transition-property: opacity, left, top, height;
  transition-duration: 3s, 5s, 3s, 5s;
}
```

De même, si la liste est trop longue par rapport à {{cssxref("transition-property")}}, elle sera tronquée. Ainsi,

```css
div {
 transition-property: opacity, left;
 transition-duration: 3s, 5s, 2s, 1s;
}
```

Sera équivalent à :

```css
div {
  transition-property: opacity, left;
  transition-duration: 3s, 5s;
}
```

### Utiliser les transitions pour accentuer les éléments pour un menu

On utilise parfois CSS pour mettre en avant les éléments d'un menu lorsque l'utilisateur les survole avec sa souris. On peut facilement utiliser les transitions CSS pour améliorer l'effet obtenu.

Tout d'abord, on définit le menu en HTML :

```html
<nav>
  <a href="#">Accueil</a>
  <a href="#">À propos</a>
  <a href="#">Contact</a>
  <a href="#">Liens</a>
</nav>
```

On construit le CSS pour définir l'apparence du menu :

```css
a {
  color: #fff;
  background-color: #333;
  transition: all 1s ease-out;
}

a:hover,
a:focus {
  color: #333;
  background-color: #fff;
}
```

```css hidden
html,
body {
  margin: 0;
  padding: 0;
}

nav {
  display: flex;
  padding: 12px;
  background-color: #333;
}

a {
  width: 100px;
  border: 1px solid #fff;
  border-radius: 18px;
  outline: 0;
  padding: 8px 12px;
  text-align: center;
  text-decoration: none;
  font: bold 12px Verdana;
}

a:not(:last-child) {
  margin-right: 12px;
}
```

Ainsi, lorsque la souris survole l'élément, la couleur du texte et de l'arrière-plan change.

{{EmbedLiveSample("Utiliser_les_transitions_pour_accentuer_les_éléments_pour_un_menu","300","300")}}

## Exemples avec JavaScript

### Utiliser les transitions CSS pour lisser les transformations avec JavaScript

Les transitions permettent de lisser les opérations effectuées avec JavaScript. Par exemple :

```html
<p>Click anywhere to move the ball</p>
<div id="foo"></div>
```

Avec JavaScript, on peut ajouter un effet de mouvement sur la balle :

```js
var f = document.getElementById('foo');
document.addEventListener('click', function(ev){
    f.style.transform = 'translateY('+(ev.clientY-25)+'px)';
    f.style.transform += 'translateX('+(ev.clientX-25)+'px)';
},false);
```

Avec CSS, il suffit d'ajouter une transition à l'élément et chaque modification sera appliquée de façon régulière :

```css
p {
  padding-left: 60px;
}

#foo {
  border-radius: 50px;
  width: 50px;
  height: 50px;
  background: #c00;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 1s;
}
```

{{JSFiddleEmbed("https://jsfiddle.net/9h261pzo/291/")}}

### Détecter le début et la fin d'une transition

L'évènement {{event("transitionend")}} est déclenché lorsqu'une transition est terminée. C'est un objet {{domxref("TransitionEvent")}} qui possède deux propriétés supplémentaires qu'un {{domxref("Event")}} :

- `propertyName`
  - : Une chaîne de caractères qui indique le nom de la propriété CSS pour laquelle la transition est terminée.
- `elapsedTime`
  - : Un nombre flottant qui indique le nombre de secondes durant lesquelles la transition s'est déroulée. Cette valeur n'est pas modifiée par la valeur de {{cssxref("transition-delay")}}.

Comme pour les différents évènements, on pourra utiliser {{domxref("eventtarget.addEventListener()")}}) pour « écouter » cet événement :

```js
el.addEventListener("transitionend", updateTransition, true);
```

Pour détecter le début d'une transition, on pourra utiliser l'évènement {{event("transitionrun")}} qui est déclenché avant tout retardement et l'évènement {{event("transitionstart")}} qui est déclenché après tout retardement :

```js
el.addEventListener("transitionrun", signalStart, true);
el.addEventListener("transitionstart", signalStart, true);
```

> **Note :** L'événement `transitionend` n'est pas déclenché si la transition est interrompue avant la fin de la transition si {{cssxref("display")}}`: none` ou si la valeur de la propriété est modifiée.

## Spécifications

| Spécification                                        | État                                     | Commentaires         |
| ---------------------------------------------------- | ---------------------------------------- | -------------------- |
| {{SpecName('CSS3 Transitions', '', '')}} | {{Spec2('CSS3 Transitions')}} | Définition initiale. |

## Voir aussi

- L'interface {{domxref("TransitionEvent")}} et l'événement {{event("transitionend")}}
- [Utiliser les animations CSS](/fr/docs/Web/CSS/CSS_Animations/Using_CSS_animations)
