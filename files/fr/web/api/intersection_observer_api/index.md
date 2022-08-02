---
title: Intersection Observer API
slug: Web/API/Intersection_Observer_API
translation_of: Web/API/Intersection_Observer_API
---
{{SeeCompatTable}}{{DefaultAPISidebar("Intersection Observer API")}}

L'API _Intersection Observer_ permet d'observer de manière asynchrone l'évolution de l'intersection d'un élément cible avec un élément ancêtre ou avec la zone d'affichage d'un document de niveau supérieur.

Historiquement, détecter la visibilité d'un élément, ou la visibilité relative de deux éléments l'un par rapport à l'autre, a été une tache difficile, résolue de manière peu rigoureuse et pouvant nuire à la fluidité de la page consultée. Malheureusement, avec la maturation de la toile, ce genre d'information se révèle de plus en plus nécessaire. La donnée de l'intersection est requise pour de nombreuses raisons, telles que:

- Le chargement paresseux d'images ou d'autres types de contenus au fur et à mesure que la page défile.
- L'implantation de « défilement infini », où de plus en plus de contenu est chargé tandis que l'utilisateur défile, afin qu'il n'ait pas à changer de page.
- Le signalement de la visibilité pour les publicités afin de calculer les revenus publicitaires.
- La décision d'exécuter ou non une tâche ou une animation selon que l'utilisateur va en voir le résultat ou non.

De par le passé, l'implantation de la détection d'intersection impliquait des gestionnaires d'évènements et des boucles appelant des méthodes telles que {{domxref("Element.getBoundingClientRect()")}} afin de générer les informations nécessaires pour chaque élément concerné. Comme la totalité du code est exécuté dans le _thread_ principal, même une seule de ces boucles peut causer des problèmes de performance. Si un site est rempli de ces tests, les choses peuvent vite devenir très moches.

Prenons une page qui utilise un défilement infini. Mettons qu'elle utilise une bibliothèque fournie par un éditeur afin de gérer les publicités placées périodiquement le long de la page, qu'elle a des graphiques animés ici et là, et qu'elle utilise une bibliothèque personnalisée pour dessiner des cases de notifications et ce genre de choses. Chacune de ces choses a ses propres procédures de détection d'intersection, toutes exécutées dans le _thread_ principal. L'auteur du site ne le réalise peut-être même pas, puisqu'il utilise deux bibliothèques dont il ne connaît pas forcément les détails de fonctionnement. Quand l'utilisateur navigue sur la page, ces procédures de détection d'intersection réagissent constamment pendant l'exécution du code de défilement, rendant l'expérience frustrante pour l'utilisateur vis-à-vis de son navigateur, du site Internet et de son ordinateur.

L'API _Intersection Observer_ permet d'intégrer une fonction _callback_ qui est exécutée quand un élément qu'on souhaite surveiller entre ou sort d'un autre élément (ou du _viewport_ (zone d'affichage)), ou quand la taille de leur intersection varie d'une quantité prédéterminée. Ainsi, les sites n'ont plus besoin de faire quoi que ce soit sur le _thread_ principal pour surveiller ce genre d'intersection d'éléments, et le navigateur est libre de gérer la détection d'intersection comme bon lui semble.

Il y a une chose sur laquelle l'API _Intersection Observer_ ne peut pas vous renseigner : le nombre de pixels qui intersectent, ou bien desquels il s'agit précisément; par contre elle permet d'ordonner des actions souvent utiles telles que « si ils s'intersectent de plus de N%, alors faire ceci ».

## Concepts et utilisation de l'observateur d'intersections

L'API _Intersection Observer_ permet de mettre en place une fonction _callback_ qui est appelée quand un élément, appelé la **cible**, intersecte ou bien le _viewport_ (la zone d'affichage) ou bien un élément prédéfini ; dans le cadre de cette API, nous l’appellerons **l'élément racine** ou **la racine**. Typiquement, on voudra observer les variations de l'intersection par rapport à la zone d'affichage du document (ce qui est fait en passant l'argument `null` au moment de désigner l'élément racine). Que vous utilisiez la zone d'affichage ou un autre élément comme racine, l'API fonctionne de la même façon, en exécutant une fonction _callback_, fournie au préalable, lorsque la visibilité de l'élément cible change de telle sorte qu'il atteint la quantité voulue d'intersection avec l'élément racine.

Le degré d'intersection entre l'élément cible et sa racine est le **ratio d'intersection**. C'est une représentation du pourcentage de l'élément cible qui est visible, exprimée sous la forme d'un nombre compris entre 0.0 et 1.0.

### Création d'un observateur d'intersection

Créez l'observateur d'intersection en appelant son constructeur et en lui passant la référence d'une fonction _callback_. Cette fonction sera exécutée quand un palier est franchi dans un sens ou dans un autre :

```js
var options = {
  root: document.querySelector('#scrollArea'),
  rootMargin: '0px',
  threshold: 1.0
}

var observer = new IntersectionObserver(callback, options);
```

Un palier de 1.0 signifie que lorsque 100% de la cible est visible dans l'élément désigné par l'option `root` (l'élément racine), la fonction _callback_ est invoquée.

#### Options de l'observateur d'intersection

L'objet `options` qui est passé dans le constructeur  {{domxref("IntersectionObserver.IntersectionObserver", "IntersectionObserver()")}} permet de contrôler les circonstances selon lesquelles la fonction _callback_ de l'observateur est invoquée. Il possède les champs suivants :

- `root`
  - : L'élément qui est utilisé comme zone d'affichage au moment d'évaluer la visibilité de la cible. Il doit être un ancêtre de la cible. S'il n'est pas spécifié ou s'il prend la valeur `null`, sa valeur par défaut est la zone d'affichage (le _viewport_) du navigateur.
- `rootMargin`
  - : La marge autour de la racine. Peut prendre des valeurs similaires à la propriété CSS {{cssxref("margin")}} par exemple "`10px 20px 30px 40px"` (top, right, bottom, left). Si l'élément `root` a été spécifié, les valeurs peuvent être exprimées en pourcentages. Cet ensemble de valeur sert à agrandir ou à réduire chaque coté du cadre délimitant l'élément racine avant d'évaluer les intersections. Par défaut, toutes les valeurs prennent la valeur zéro.
- `threshold`
  - : Soit un nombre, soit un tableau de nombre qui indique à quel pourcentage de la visibilité de la cible la fonction _callback_ de la cible doit être exécuté. Si vous souhaitez seulement détecter quand la visibilité franchit la barre des 50%, vous pouvez entrer la valeur 0.5. Si vous voulez que le _callback_ soit exécuté chaque fois que la visibilité varie de 25% de plus, il faudra spécifier le tableau \[0, 0.25, 0.5, 0.75, 1]. La valeur par défaut est 0 (ce qui signifie que dés qu'un seul pixel sera visible, la fonction _callback_ sera exécutée). Une valeur de 1.0 signifie que le palier n'est considéré comme franchi qu'une fois que tous les pixels sont visibles.

#### Choisir un élément à observer

Une fois l'observateur créé, il faut lui donner un élément cible à observer :

```js
var target = document.querySelector('#listItem');
observer.observe(target);
```

Lorsque la cible franchit un palier spécifié indiqué dans l'objet `IntersectionObserver`, la fonction _callback_ est appelée. Le _callback_ reçoit une liste d'objets {{domxref("IntersectionObserverEntry")}} ainsi que l'observateur :

```js
var callback = function(entries, observer) {
  entries.forEach(entry => {
    // chaque élément de entries correspond à une variation
    // d'intersection pour un des éléments cible:
    //   entry.boundingClientRect
    //   entry.intersectionRatio
    //   entry.intersectionRect
    //   entry.isIntersecting
    //   entry.rootBounds
    //   entry.target
    //   entry.time
  });
};
```

Soyez attentif au fait que la fonction _callback_ est exécutée dans le _thread_ principal. Elle devrait être exécutée aussi rapidement que possible ; si une opération prenant du temps a besoin d'être effectuée, utilisez {{domxref("Window.requestIdleCallback()")}}.

De plus, remarquez que si vous avez spécifié l'option `root`, la cible doit être un descendant de l'élément `root`.

### Comment est calculée l'intersection

Toutes les régions envisagées par l'API _Intersection Observer_ sont des rectangles; les éléments de forme irrégulière sont assimilées au plus petit rectangle qui contient l'élément en question tout entier. De même, si la partie visible d'un élément n'est pas rectangulaire, le rectangle d'intersection de l'élément sera le plus petit rectangle qui contient toute la partie visible de l'élément.

Il est utile de comprendre comment les différentes propriétés fournies par {{domxref("IntersectionObserverEntry")}} décrivent une intersection.

#### La racine de l'intersection et la marge de la racine

Avant de pouvoir étudier l'intersection d'un élément avec un conteneur, nous devons savoir quel est ce conteneur. Ce conteneur est **la racine de l'intersection**, ou **élément racine**. Ce peut être soit un élément du document qui est un ancêtre de l'élément à observer, ou `null` si l'on souhaite utiliser la zone d'affichage (_viewport_) du document comme conteneur.

Le rectangle utilisé pour délimiter la racine de l'intersection peut être ajusté en ajustant la **marge de la racine**, c'est-à-dire le champ `rootMargin`, lors de la création de {{domxref("IntersectionObserver")}}. La valeur de `rootMargin` définit le décalage ajouté à chaque coté du cadre délimitant la racine de l'intersection pour créer le cadre final de la racine de l'intersection (accessible via {{domxref("IntersectionObserverEntry.rootBounds")}} quand la fonction _callback_ est exécutée).

#### Paliers

Plutôt que de rapporter le moindre changement de variation de la visibilité d'un élément, l'API Intersection Observer utilise des **paliers**. Lors de la création d'un observateur, vous pouvez fournir une ou plusieurs valeurs numériques qui représentent des pourcentages de visibilité de l'élément cible. Dans ce cas, l'API ne rapportent que les changements de visibilité qui franchissent ces paliers.

Par exemple, si vous voulez être informé à chaque fois que la visibilité d'une cible passe au dessus ou en dessous de chaque multiple de 25%, il faudra fournir le tableau \[0, 0.25, 0.5, 0.75, 1] comme liste de paliers lors de la création de l'observateur. Vous pouvez préciser dans quelle direction a changé la visibilité (c'est-à-dire, si l'élément est devenu plus ou moins visible) en lisant la valeur de la propriété {{domxref("IntersectionObserverEntry.isIntersecting", "isIntersecting")}} du  {{domxref("IntersectionObserverEntry")}} passé dans la fonction `callback` lors du changement de visibilité. Si `isIntersecting` est `true`, l'élément cible est devenu au moins aussi visible quand le palier a été franchi. Si elle vaut `false`, la cible n'est plus aussi visible que le palier spécifié.

Pour mieux comprendre comment fonctionnent les paliers, faites défiler la boîte ci-dessous. A l'intérieur, chacune des boîtes colorées affiche son pourcentage de visibilité sur chacun de ses quatre coins, de telle sorte que l'on peut voir ces ratios changer tandis que le conteneur défile. Chaque boîte a un ensemble différent de paliers :

- La première boîte a un palier pour chaque point de pourcentage de visibilité; c'est à dire que le tableau {{domxref("IntersectionObserver.thresholds")}} est `[0.00, 0.01, 0.02, ..., 0.99, 1.00]`.
- La deuxième boîte a un unique palier, à 50%.
- La troisième boîte a des paliers tous les 10% de visibilité (0%, 10%, 20%, etc.).
- La dernière boîte a des paliers tous les 25%.

##### Exemple de seuil

```html hidden
<template id="boxTemplate">
  <div class="sampleBox">
    <div class="label topLeft"></div>
    <div class="label topRight"></div>
    <div class="label bottomLeft"></div>
    <div class="label bottomRight"></div>
  </div>
</template>

<main>
  <div class="contents">
    <div class="wrapper">
    </div>
  </div>
</main>
```

```css hidden
.contents {
  position: absolute;
  width: 700px;
  height: 1725px;
}

.wrapper {
  position: relative;
  top: 600px;
}

.sampleBox {
  position: relative;
  left: 175px;
  width: 150px;
  background-color: rgb(245, 170, 140);
  border: 2px solid rgb(201, 126, 17);
  padding: 4px;
  margin-bottom: 6px;
}

#box1 {
  height: 200px;
}

#box2 {
  height: 75px;
}

#box3 {
  height: 150px;
}

#box4 {
  height: 100px;
}

.label {
  font: 14px "Open Sans", "Arial", sans-serif;
  position: absolute;
  margin: 0;
  background-color: rgba(255, 255, 255, 0.7);
  border: 1px solid rgba(0, 0, 0, 0.7);
  width: 3em;
  height: 18px;
  padding: 2px;
  text-align: center;
}

.topLeft {
  left: 2px;
  top: 2px;
}

.topRight {
  right: 2px;
  top: 2px;
}

.bottomLeft {
  bottom: 2px;
  left: 2px;
}

.bottomRight {
  bottom: 2px;
  right: 2px;
}
```

```js hidden
let observers = [];

startup();

function startup() {
  let wrapper = document.querySelector(".wrapper");

  // Options for the observers

  let observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: []
  };

  // An array of threshold sets for each of the boxes. The
  // first box's thresholds are set programmatically
  // since there will be so many of them (for each percentage
  // point).

  let thresholdSets = [
    [],
    [0.5],
    [0.0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
    [0, 0.25, 0.5, 0.75, 1.0]
  ];

  for (let i=0; i<=1.0; i+= 0.1) {
    thresholdSets[0].push(i);
  }

  // Add each box, creating a new observer for each

  for (let i=0; i<4; i++) {
    let template = document.querySelector("#boxTemplate").content.cloneNode(true);
    let boxID = "box" + (i+1);
    template.querySelector(".sampleBox").id = boxID;
    wrapper.appendChild(document.importNode(template, true));

    // Set up the observer for this box

    observerOptions.threshold = thresholdSets[i];
    observers[i] = new IntersectionObserver(intersectionCallback, observerOptions);
    observers[i].observe(document.querySelector("#" + boxID));
  }

  // Scroll to the starting position

  //wrapper.scrollIntoView({
  //  block: "start",
  //});
  document.scrollingElement.scrollTop = wrapper.firstChild.getBoundingClientRect().top + window.scrollY;
  document.scrollingElement.scrollLeft = 750;
}

function intersectionCallback(entries) {
  entries.forEach(function(entry) {
    let box = entry.target;
    let visiblePct = (Math.floor(entry.intersectionRatio * 100)) + "%";

    box.querySelector(".topLeft").innerHTML = visiblePct;
    box.querySelector(".topRight").innerHTML = visiblePct;
    box.querySelector(".bottomLeft").innerHTML = visiblePct;
    box.querySelector(".bottomRight").innerHTML = visiblePct;
  });
}
```

{{EmbedLiveSample("Exemple_de_seuil", 500, 500)}}

## Interfaces

- {{domxref("IntersectionObserver")}}
  - : L'interface principale pour l'API Intersection Observer. Elle fournit des méthodes pour créer et manipuler un observateur qui peut observer n'importe quel nombre d'éléments cibles pour une même configuration d'intersection. Chaque observateur peut observer de manière asynchrone les évolutions de l'intersection entre un ou plusieurs éléments cibles et un élément ancêtre partagé, ou avec le {{Glossary('viewport')}} de leur {{domxref("Document")}} de niveau supérieur. L'ancêtre ou le _viewport_ est désigné par le terme **racine**.
- {{domxref("IntersectionObserverEntry")}}
  - : Cette interface décrit l'intersection d'un élément cible spécifique avec la racine de l'observateur à un moment donné. Les objets de ce type ne peuvent être obtenus que de deux façons : comme entrée du callback de votre `IntersectionObserver`, ou en appelant {{domxref("IntersectionObserver.takeRecords()")}}.

## Un exemple simple

Cet exemple simple va faire changer la couleur et la transparence d'un élément cible à mesure qu'il devient plus ou moins visible. Sur la page _[Timing element visibility with the Intersection Observer API](/fr/docs/Web/API/Intersection_Observer_API/Timing_element_visibility)_, vous pourrez trouver un exemple plus développé montrant comment chronométrer le temps durant lequel un élément (par exemple, une publicité) a été visible à l'écran, et comment réagir à cette information en enregistrant des statistiques ou en mettant à jour des éléments.

### HTML

Le code HTML de cet exemple est très court. L'élément principal est la boîte que nous allons cibler (avec l'ingénieuse dénomination `"box"`) et certains contenus dans la boîte.

```html
<div id="box">
  <div class="vertical">
    Bienvenue dans <strong>La Boîte !</strong>
  </div>
</div>
```

### CSS

Le CSS n'est pas extrêmement important dans le cadre de cet exemple ; il met en place l'élément et établit que les attributs {{cssxref("background-color")}} et {{cssxref("border")}} peuvent participer à des [transitions CSS](/fr/docs/Web/CSS/CSS_Transitions). Nous utiliserons ces transitions pour faire évoluer l'élément de telle sorte qu'il devienne plus ou moins obscur.

```css
#box {
  background-color: rgba(40, 40, 190, 255);
  border: 4px solid rgb(20, 20, 120);
  transition: background-color 1s, border 1s;
  width: 350px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.vertical {
  color: white;
  font: 32px "Arial";
}

.extra {
  width: 350px;
  height: 350px;
  margin-top: 10px;
  border: 4px solid rgb(20, 20, 120);
  text-align: center;
  padding: 20px;
}
```

### JavaScript

Enfin, jetons un œil au code JavaScript qui utilise l'API _Intersection Observer_.

#### Préparation

Premièrement, nous devons préparer des variables et installer l'observateur.

```js
var numSteps = 20.0;

var boxElement;
var prevRatio = 0.0;
var increasingColor = "rgba(40, 40, 190, ratio)";
var decreasingColor = "rgba(190, 40, 40, ratio)";

// On met l'ensemble en place.

window.addEventListener("load", function(event) {
  boxElement = document.querySelector("#box");

  createObserver();
}, false);
```

Les constantes et variables que nous préparons sont :

- `numSteps`
  - : Une constante qui indique combien de paliers nous voulons avoir entre les ratios de visibilité de 0.0 et de 1.0.
- `prevRatio`
  - : Cette variable sera utilisée pour mémoriser quel était le ratio de visibilité la dernière fois qu'un palier a été franchi ; ce qui nous permettra de savoir si l'élément est en train de devenir plus ou moins visible.
- `increasingColor`
  - : Une chaîne de caractères définissant une couleur que nous appliquerons à l'élément cible quand le ratio de visibilité augmente. Le mot "ratio" dans cette chaîne de caractères sera remplacé par la ratio de visibilité de la cible actuelle, de telle sorte que l'élément, en plus de changer de couleur, deviendra de plus en plus opaque à mesure qu'il deviendra obscur.
- `decreasingColor`
  - : De même, il s'agit d'une chaîne de caractères qui définit une couleur que nous appliquerons lorsque le ratio de visibilité diminue.

On appelle {{domxref("EventTarget.addEventListener", "Window.addEventListener()")}} pour commencer à écouter l'évènement {{event("load")}} ; une fois que la page a finit de charger, on obtient une référence de l'élément avec l'identifiant `"box"` grâce à {{domxref("Document.querySelector", "querySelector()")}}, puis on appelle la méthode `createObserver()` que l'on va définir un peu plus tard pour gérer la création et l'installation de l'observateur d'intersection.

#### Création de l'observateur d'intersection

La méthode `createObserver()` est appelée une fois que le chargement de la page est terminé afin de gérer la création du nouveau {{domxref("IntersectionObserver")}} et de commencer le processus d'observation de l'élément cible.

```js
function createObserver() {
  var observer;

  var options = {
    root: null,
    rootMargin: "0px",
    threshold: buildThresholdList()
  };

  observer = new IntersectionObserver(handleIntersect, options);
  observer.observe(boxElement);
}
```

On commence par définir un objet `options` contenant les paramètres pour l'observateur. On voudra observer les évolutions de la visibilité de l'élément cible relativement au _viewport_, on initialise donc `root` avec `null`. Nous n'avons pas besoin de marge, donc l'espace de marge, `rootMargin`, est initialisé à `"0px"`. Ainsi, l'observateur surveillera les variations de l'intersection entre les frontières de l'élément cible et ceux du _viewport_, sans aucun espace ajouté ou ôté.

La liste de paliers de ratio de visibilité, `threshold`, est construite par la fonction `buildThresholdList()`. La liste de paliers est construite mécaniquement dans cet exemple car il y en a un certain nombre, et que ce nombre a vocation à être ajustable.

Une fois que `options` est prêt, nous pouvons créer le nouvel observateur, en appelant le constructeur {{domxref("IntersectionObserver.IntersectionObserver", "IntersectionObserver()")}} , en précisant une fonction _callback_ à appeler quand l'intersection franchit l'un de nos paliers, `handleIntersect()`, et notre ensemble d'options. On appelle alors {{domxref("IntersectionObserver.observe", "observe()")}} sur l'observateur retourné, afin de le passer à l'élément qui sera notre cible

On pourrait également choisir de surveiller l'évolution de la visibilité de l'intersection de plusieurs éléments par rapport au _viewport_ en appelant `observer.observe()`pour chacun de ces éléments.

#### Construction du tableau de paliers de ratios

La fonction`buildThresholdList()`, qui construit la liste de paliers, ressemble à ceci :

```js
function buildThresholdList() {
  var thresholds = [];

  for (var i=1.0; i<=numSteps; i++) {
    var ratio = i/numSteps;
    thresholds.push(ratio);
  }

  thresholds.push(0);
  return thresholds;
}
```

Cela construit la tableau de paliers (chacun de ces paliers étant un ratio compris entre 0.0 et 1.0, ajouté en poussant la valeur`i/numSteps`dans le tableau `thresholds` pour chaque entier `i` entre 1 et `numSteps`). On pousse également 0 pour inclure cette valeur. Le résultat, dans le cas où`numSteps`a sa valeur par défaut, est la liste de paliers suivante :

<table class="standard-table">
  <tbody>
    <tr>
      <th>#</th>
      <th>Ratio</th>
      <th>#</th>
      <th>Ratio</th>
    </tr>
    <tr>
      <th>1</th>
      <td>0.05</td>
      <th>11</th>
      <td>0.55</td>
    </tr>
    <tr>
      <th>2</th>
      <td>0.1</td>
      <th>12</th>
      <td>0.6</td>
    </tr>
    <tr>
      <th>3</th>
      <td>0.15</td>
      <th>13</th>
      <td>0.65</td>
    </tr>
    <tr>
      <th>4</th>
      <td>0.2</td>
      <th>14</th>
      <td>0.7</td>
    </tr>
    <tr>
      <th>5</th>
      <td>0.25</td>
      <th>15</th>
      <td>0.75</td>
    </tr>
    <tr>
      <th>6</th>
      <td>0.3</td>
      <th>16</th>
      <td>0.8</td>
    </tr>
    <tr>
      <th>7</th>
      <td>0.35</td>
      <th>17</th>
      <td>0.85</td>
    </tr>
    <tr>
      <th>8</th>
      <td>0.4</td>
      <th>18</th>
      <td>0.9</td>
    </tr>
    <tr>
      <th>9</th>
      <td>0.45</td>
      <th>19</th>
      <td>0.95</td>
    </tr>
    <tr>
      <th>10</th>
      <td>0.5</td>
      <th>20</th>
      <td>1.0</td>
    </tr>
  </tbody>
</table>

Bien sur, on pourrait coder en dur le tableau de paliers dans notre code, et c'est souvent ce que vous ferez. Cependant, cet exemple laisse un peu de place pour plus de configuration afin d'ajuster la granularité, par exemple.

#### Gérer les évolutions de l'intersection

Quand le navigateur détecte que l'élément cible (dans notre cas, celui avec l'identifiant `"box"`) a été révélé ou caché de tel sorte que son ratio de visibilité franchit l'un des paliers de notre liste, il appelle la fonction `handleIntersect()`:

```js
function handleIntersect(entries, observer) {
  entries.forEach(function(entry) {
    if (entry.intersectionRatio > prevRatio) {
      entry.target.style.backgroundColor = increasingColor.replace("ratio", entry.intersectionRatio);
    } else {
      entry.target.style.backgroundColor = decreasingColor.replace("ratio", entry.intersectionRatio);
    }

    prevRatio = entry.intersectionRatio;
  });
}
```

Pour chaque {{domxref("IntersectionObserverEntry")}} dans la liste `entries`, on cherche si le {{domxref("IntersectionObserverEntry.intersectionRatio", "intersectionRatio")}} de l'entrée augmente; si c'est le cas, on donne à la propriété CSS {{cssxref("background-color")}} de la cible la valeur `increasingColor` (pour rappel, c'est la chaîne de caractères `"rgba(40, 40, 190, ratio)"`), et on remplace le mot "ratio" avec le `intersectionRatio` de l'entrée. Le résultat : non seulement la couleur change, mais la transparence de l'élément change aussi. Quand le ratio d'intersection diminue, l'alpha de la couleur de fond diminue de même, et l'élément devient plus transparent.

De même, si le `intersectionRatio` augmente, on utilise la chaîne de caractères `decreasingColor` et on y remplace le mot "ratio" avec `intersectionRatio` avant d'assigner le `background-color` de l'élément cible.

Enfin, afin de surveiller si le ratio d'intersection augmente ou diminue, on garde en mémoire le ratio actuel dans la variable `prevRatio`.

### Résultat

Vous pouvez retrouver le résultat ci-dessous. Déroulez cette page vers le haut ou vers le bas et observez comment l'apparence de la boîte change au fur et à mesure.

{{EmbedLiveSample('Un_exemple_simple', 400, 400)}}

Vous pouvez consulter un exemple encore plus détaillé sur l'article _[Timing element visibility with the Intersection Observer API](/fr/docs/Web/API/Intersection_Observer_API/Timing_element_visibility)_.

## Spécifications

| Spécification                                    | État                                         | Commentaire          |
| ------------------------------------------------ | -------------------------------------------- | -------------------- |
| {{SpecName('IntersectionObserver')}} | {{Spec2('IntersectionObserver')}} | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("api.IntersectionObserver")}}

## Voir aussi

- [Une prothèse (_polyfill_) pour l'API _Intersection Observer_](https://github.com/WICG/IntersectionObserver/tree/gh-pages/polyfill)
- _[Timing element visibility with the Intersection Observer API](/fr/docs/Web/API/Intersection_Observer_API/Timing_element_visibility)_
- {{domxref("IntersectionObserver")}} et {{domxref("IntersectionObserverEntry")}}
