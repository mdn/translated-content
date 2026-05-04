---
title: Utiliser les animations CSS
short-title: Utiliser les animations
slug: Web/CSS/Guides/Animations/Using
l10n:
  sourceCommit: 32bdfdb82cf91ce9942b694286dec62be2cc20aa
---

Les **animations CSS** permettent de créer des transitions entre deux états de mise en forme. Une animation est décrite par deux choses&nbsp;: des propriétés propres à l'animation d'une part et un ensemble d'étapes (<i lang="en">keyframes</i> en anglais) qui indiquent l'état initial, final et éventuellement des états intermédiaires d'autre part.

Trois avantages permettent de distinguer les animations CSS des techniques d'animations utilisant JavaScript :

1. On peut aisément obtenir des animations simples sans avoir à connaître JavaScript.
2. Les animations s'exécuteront correctement même lorsque le système est soumis à une charge modérée. Il est possible que des animations JavaScript s'exécutent lentement si elles sont mal décrites. Dans le cadre des animations CSS, le moteur de rendu peut utiliser certaines techniques (comme le _frame-skipping_) afin que le résultat obtenu soit aussi fluide que possible.
3. En laissant le contrôle de l'animation au navigateur, celui-ci peut optimiser les performances et l'efficacité du système, par exemple en réduisant la fréquence de mise à jour des animations qui sont exécutées dans des onglets qui ne sont pas visibles à l'écran.

## Paramétrer l'animation

Pour créer une animation CSS, il faut utiliser la propriété raccourcie {{CSSxRef("animation")}} ou les propriétés détaillées correspondantes sur un ou plusieurs éléments. Cette propriété permet de configurer la durée, le minutage et d'autres détails à propos de l'animation. **Attention, cela ne détermine pas l'apparence visuelle de l'animation.** Celle-ci est définie en utilisant des règles CSS de mise en forme au sein de la règle {{CSSxRef("@keyframes")}} comme décrit dans la section [Définir une séquence d'animation à l'aide d'images clés](#defining_an_animation_sequence_using_keyframes) ci-dessous.

Les propriétés détaillées rattachées à la propriété raccourcie {{CSSxRef("animation")}} sont&nbsp;:

- {{CSSxRef("animation-composition")}}
  - : Définit {{Glossary("composite operation", "l'opération de composition")}} à utiliser lorsque plusieurs animations affectent simultanément la même propriété. Cette propriété ne fait pas partie de la propriété raccourcie `animation`.
- {{CSSxRef("animation-delay")}}
  - : Définit le délai entre le chargement d'un élément et le début d'une séquence d'animation, et si l'animation doit commencer immédiatement depuis son début ou à mi-chemin de l'animation.
- {{CSSxRef("animation-direction")}}
  - : Définit si la première itération d'une animation doit être en avant ou en arrière et si les itérations suivantes doivent alterner de direction à chaque passage dans la séquence ou revenir au point de départ et répéter.
- {{CSSxRef("animation-duration")}}
  - : Définit la durée pendant laquelle une animation complète un cycle.
- {{CSSxRef("animation-fill-mode")}}
  - : Définit comment une animation applique des styles à sa cible avant et après son exécution.
    > [!NOTE]
    > Dans le cas du mode de remplissage d'animation {{CSSxRef("animation-fill-mode", "forwards", "#forwards")}}, les propriétés animées se comportent comme si elles étaient incluses dans une valeur de propriété {{CSSxRef("will-change")}}. Si un nouveau contexte d'empilement a été créé pendant l'animation, l'élément cible conserve le contexte d'empilement après la fin de l'animation.
- {{CSSxRef("animation-iteration-count")}}
  - : Définit le nombre de fois qu'une animation doit se répéter.
- {{CSSxRef("animation-name")}}
  - : Définit le nom de la règle {{CSSxRef("@keyframes")}} décrivant les images clés d'une animation.
- {{CSSxRef("animation-play-state")}}
  - : Définit si une séquence d'animation doit être mise en pause ou jouée.
- {{CSSxRef("animation-timeline")}}
  - : Définit la chronologie utilisée pour contrôler la progression d'une animation CSS.
- {{CSSxRef("animation-timing-function")}}
  - : Définit comment une animation passe d'une image clé à une autre en établissant des courbes d'accélération.

## Définir les étapes composant une animation (`@keyframes`)

Une fois qu'on a définit les propriétés propres à l'animation, on doit définir la mise en forme qui évolue lors de cette animation. Pour cela on définit deux étapes ou plus grâce à la règle @ {{CSSxRef("@keyframes")}}. Chaque étape décrit la façon dont l'élément animé doit être affiché à un instant donné lors de l'animation.

La durée de l'animation est définie avant et la règle `@keyframes` utilise donc des valeurs exprimées en pourcentages (type CSS {{CSSxRef("percentage")}}) pour indiquer l'instant correspondant à cet état. 0% indique l'état initial de l'animation et 100% indique l'état final. Ces deux états étant très important, il existe deux alias pour les décrire&nbsp;: `from` et `to`. Ces états sont optionnels et si `from`/`0%` ou `to`/`100%` ne sont pas définis, le navigateur utilisera les valeurs calculées des différentes propriétés.

Il est également possible d'ajouter des étapes intermédiaires, entre l'état initial et l'état final de l'animation.

## Utiliser la propriété raccourcie `animation`

La propriété raccourcie {{CSSxRef("animation")}} est utile pour gagner de l'espace. Par exemple, certaines des règles que nous avons utilisées tout au long de cet article&nbsp;:

```css
p {
  animation-duration: 3s;
  animation-name: slide-in;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}
```

...peuvent être remplacées en utilisant la propriété raccourcie `animation`.

```css
p {
  animation: 3s infinite alternate slide-in;
}
```

Pour en savoir plus sur la séquence dans laquelle les différentes valeurs des propriétés d'animation peuvent être spécifiées en utilisant la propriété raccourcie `animation`, consultez la page de référence {{CSSxRef("animation")}}.

## Définir plusieurs valeurs de propriétés d'animation

Les propriétés d'animation CSS en version longue peuvent accepter plusieurs valeurs, séparées par des virgules. Cette fonctionnalité peut être utilisée lorsque vous souhaitez appliquer plusieurs animations dans une seule règle et définir des durées, des nombres d'itérations, etc., différents pour chacune des animations. Voyons quelques exemples rapides pour expliquer les différentes permutations.

Dans ce premier exemple, il y a trois valeurs de durée et trois valeurs de nombre d'itérations. Ainsi, chaque animation se voit attribuer une valeur de durée et de nombre d'itérations à la même position que le nom de l'animation. L'animation `fadeInOut` se voit attribuer une durée de `2.5s` et un nombre d'itérations de `2`, et l'animation `bounce` se voit attribuer une durée de `1s` et un nombre d'itérations de `5`.

```css
animation-name: fadeInOut, moveLeft300px, bounce;
animation-duration: 2.5s, 5s, 1s;
animation-iteration-count: 2, 1, 5;
```

Dans ce deuxième exemple, trois noms d'animation sont définis, mais il n'y a qu'une seule durée et un seul nombre d'itérations. Dans ce cas, les trois animations se voient attribuer la même durée et le même nombre d'itérations.

```css
animation-name: fadeInOut, moveLeft300px, bounce;
animation-duration: 3s;
animation-iteration-count: 1;
```

Dans ce troisième exemple, trois animations sont spécifiées, mais seulement deux durées et nombres d'itérations. Dans les cas où il n'y a pas assez de valeurs dans la liste pour en attribuer une distincte à chaque animation, l'attribution des valeurs se fait en cycle, du premier au dernier élément de la liste disponible, puis revient au premier élément. Ainsi, `fadeInOut` obtient une durée de `2.5s`, et `moveLeft300px` obtient une durée de `5s`, qui est la dernière valeur de la liste des durées. L'attribution des valeurs de durée se réinitialise maintenant à la première valeur&nbsp;; `bounce`, donc, obtient une durée de `2.5s`. Les valeurs de nombre d'itérations (et toutes les autres valeurs de propriétés que vous définissez) seront attribuées de la même manière.

```css
animation-name: fadeInOut, moveLeft300px, bounce;
animation-duration: 2.5s, 5s;
animation-iteration-count: 2, 1;
```

Si le déséquilibre entre le nombre d'animations et les valeurs des propriétés d'animation est inversé, par exemple s'il y a cinq valeurs `animation-duration` pour trois valeurs `animation-name`, alors les valeurs de propriété d'animation supplémentaires ou inutilisées, dans ce cas, deux valeurs `animation-duration`, ne s'appliquent à aucune animation et sont ignorées.

## Exemples

### Utiliser une animation pour que le texte traverse la fenêtre du navigateur

Cet exemple simple met en forme un élément HTML {{HTMLElement("p")}} en utilisant les propriétés de transition {{CSSxRef("translate")}} et {{CSSxRef("scale")}} afin que le texte glisse depuis le bord droit de la fenêtre du navigateur.

```css
p {
  animation-duration: 3s;
  animation-name: slide-in;
}

@keyframes slide-in {
  from {
    translate: 150vw 0;
    scale: 200% 1;
  }

  to {
    translate: 0 0;
    scale: 100% 1;
  }
}
```

Dans cet exemple, le style pour l'élément HTML {{HTMLElement("p")}} défini que l'animation doit durer 3 secondes du début à la fin, en utilisant la propriété {{CSSxRef("animation-duration")}} et que le nom de la règle {{ CSSxRef("@keyframes")}} définissant les étapes clés de la séquence d'animation est `slide-in`.

Dans ce cas, nous n'avons que deux images clés. La première se produit à `0%` (en utilisant l'alias `from`). Ici, nous configurons la propriété {{CSSxRef("translate")}} de l'élément pour qu'elle soit à `150vw` (c'est-à-dire au-delà du bord droit de l'élément contenant), et la propriété {{CSSxRef("scale")}} de l'élément pour qu'elle soit à 200% (ou deux fois sa taille en ligne par défaut), ce qui fait que le paragraphe est deux fois plus large que son bloc contenant `<body>`. Cela fait que la première image de l'animation a l'en-tête dessiné hors du bord droit de la fenêtre du navigateur.

La deuxième image clé se produit à `100%` (en utilisant l'alias `to`). La propriété {{CSSxRef("translate")}} est définie à `0%` et la propriété {{CSSxRef("scale")}} de l'élément est définie à `1`, ce qui correspond à `100%`. Cela fait que l'en-tête termine son animation dans son état par défaut, aligné contre le bord gauche de la zone de contenu.

```html
<p>
  Le Caterpillar et Alice se regardèrent pendant un certain temps en
  silence&nbsp;: enfin, le Caterpillar sortit le narguilé de sa bouche et
  s'adressa à elle d'une voix languissante et endormie.
</p>
```

> [!NOTE]
> Rechargez la page pour voir l'animation.

{{EmbedLiveSample("Utiliser une animation pour que le texte traverse la fenêtre du navigateur", "100%", 250)}}

### Ajouter une autre étape d'animation

Ajoutons une autre image clé à l'animation de l'exemple précédent. Supposons que nous voulons que le nom d'Alice devienne rose et grandisse, puis retrouve sa taille et sa couleur d'origine lorsqu'il se déplace de droite à gauche. Bien que nous puissions changer la {{CSSxRef("font-size")}}, modifier des propriétés qui impactent le modèle de boîte affecte négativement les performances. À la place, nous enveloppons son nom dans un {{HTMLElement("span")}} et appliquons ensuite une mise à l'échelle et une couleur séparément. Cela nécessite l'ajout d'une deuxième animation n'affectant que le `<span>`&nbsp;:

```css
@keyframes grow-shrink {
  25%,
  75% {
    scale: 100%;
  }

  50% {
    scale: 200%;
    color: magenta;
  }
}
```

Le code complet ressemble maintenant à ceci&nbsp;:

```css
p {
  animation-duration: 3s;
  animation-name: slide-in;
}
p span {
  display: inline-block;
  animation-duration: 3s;
  animation-name: grow-shrink;
}

@keyframes slide-in {
  from {
    translate: 150vw 0;
    scale: 200% 1;
  }

  to {
    translate: 0 0;
    scale: 100% 1;
  }
}

@keyframes grow-shrink {
  25%,
  75% {
    scale: 100%;
  }

  50% {
    scale: 200%;
    color: magenta;
  }
}
```

Nous avons ajouté un {{HTMLElement("span")}} autour de «&nbsp;Alice&nbsp;»&nbsp;:

```html
<p>
  Le Caterpillar et <span>Alice</span> se regardèrent pendant un certain temps
  en silence&nbsp;: enfin, le Caterpillar sortit le narguilé de sa bouche et
  s'adressa à elle d'une voix languissante et endormie.
</p>
```

Cela indique au navigateur que le nom doit être normal pour les 25% premiers et derniers de l'animation, mais devenir rose tout en étant agrandi puis revenir à sa taille et couleur d'origine au milieu. Nous définissons la propriété {{CSSxRef("display")}} des éléments `span` sur `inline-block` car les propriétés `transform` n'affectent pas le contenu {{Glossary("inline-level content", "contenu en ligne")}} non remplacé.

> [!NOTE]
> Rechargez la page pour voir l'animation.

{{EmbedLiveSample("Ajouter une autre étape d'animation", "100%", 250)}}

### Répéter une animation

Pour que l'animation se répète, il suffit d'utiliser la propriété {{CSSxRef("animation-iteration-count")}} et d'indiquer le nombre de répétitions souhaitées. Ici, on utilise la valeur `infinite` pour que l'animation se répète à l'infini&nbsp;:

```css
p {
  animation-duration: 3s;
  animation-name: slide-in;
  animation-iteration-count: infinite;
}
```

```css hidden
@keyframes slide-in {
  from {
    translate: 150vw 0;
    scale: 200% 1;
  }

  to {
    translate: 0 0;
    scale: 100% 1;
  }
}
```

```html hidden
<p>
  Le Caterpillar et Alice se regardèrent pendant un certain temps en
  silence&nbsp;: enfin, le Caterpillar sortit le narguilé de sa bouche et
  s'adressa à elle d'une voix languissante et endormie.
</p>
```

{{EmbedLiveSample("Répéter une animation", "100%", 250)}}

### Obtenir un effet aller-retour

On a donc une animation qui se répète mais on obtient un résultat étrange, l'animation redémarre à chaque fois depuis l'état initial. Si on veut que le texte parcourt l'écran de droite à gauche puis de gauche à droite, on pourra utiliser la propriété {{CSSxRef("animation-direction")}} avec la valeur `alternate`&nbsp;:

```css
p {
  animation-duration: 3s;
  animation-name: slide-in;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}
```

```css hidden
@keyframes slide-in {
  from {
    translate: 150vw 0;
    scale: 200% 1;
  }

  to {
    translate: 0 0;
    scale: 100% 1;
  }
}
```

```html hidden
<p>
  Le Caterpillar et Alice se regardèrent pendant un certain temps en
  silence&nbsp;: enfin, le Caterpillar sortit le narguilé de sa bouche et
  s'adressa à elle d'une voix languissante et endormie.
</p>
```

{{EmbedLiveSample("Obtenir un effet aller-retour", "100%", 250)}}

### Utiliser les évènements liés aux animations

Vous pouvez obtenir un contrôle supplémentaire sur les animations — ainsi que des informations utiles à leur sujet — en utilisant les évènements d'animation. Ces évènements, représentés par l'objet {{DOMxRef("AnimationEvent")}}, peuvent être utilisés pour détecter quand les animations commencent, se terminent et lorsqu'une nouvelle itération commence. Chaque évènement inclut l'heure à laquelle il s'est produit ainsi que le nom de l'animation qui a déclenché l'évènement.

Nous allons modifier l'exemple du texte glissant pour afficher des informations sur chaque évènement d'animation lorsqu'il se produit, afin de mieux comprendre leur fonctionnement.

Nous avons inclus la même animation par étapes que dans l'exemple précédent. Cette animation durera 3 secondes, sera appelée `"slide-in"`, se répétera 3 fois et se déplacera dans une direction alternative à chaque fois. Dans le {{CSSxRef("@keyframes")}}, l'échelle et la translation sont manipulées le long de l'axe x pour faire glisser l'élément à travers l'écran.

```css
.slide-in {
  animation-duration: 3s;
  animation-name: slide-in;
  animation-iteration-count: 3;
  animation-direction: alternate;
}
```

```css hidden
@keyframes slide-in {
  from {
    translate: 150vw 0;
    scale: 200% 1;
  }

  to {
    translate: 0 0;
    scale: 100% 1;
  }
}
```

#### Ajouter le gestionnaire d'évènement d'animation

Nous allons utiliser du code JavaScript pour écouter les trois évènements d'animation possibles. Ce code configure nos écouteurs d'évènements&nbsp;; nous l'appelons lorsque le document est chargé pour tout mettre en place.

```js
const element = document.getElementById("regardez-moi");
element.addEventListener("animationstart", listener);
element.addEventListener("animationend", listener);
element.addEventListener("animationiteration", listener);

element.className = "slide-in";
```

C'est un code assez standard&nbsp;; vous pouvez consulter la documentation de {{DOMxRef("eventTarget.addEventListener()")}} pour plus de détails sur son fonctionnement. La dernière chose que fait ce code est de définir la `class` de l'élément que nous allons animer sur `"slide-in"`&nbsp;; nous faisons cela pour démarrer l'animation.

Pourquoi&nbsp;? Parce que l'évènement `animationstart` se déclenche dès que l'animation commence, et dans notre cas, cela se produit avant l'exécution de notre code. Nous allons donc démarrer l'animation nous-mêmes en définissant la classe de l'élément sur le style qui sera animé après coup.

#### Écouter les évènements

Les évènements sont transmis à la fonction `listener()`, qui est décrite ci-dessous.

```js
function listener(event) {
  const l = document.createElement("li");
  switch (event.type) {
    case "animationstart":
      l.textContent = `Début : le temps écoulé est ${event.elapsedTime}s`;
      break;
    case "animationend":
      l.textContent = `Fin : le temps écoulé est ${event.elapsedTime}s`;
      break;
    case "animationiteration":
      l.textContent = `Nouvelle boucle démarrée à ${event.elapsedTime}s`;
      break;
  }
  document.getElementById("sortie").appendChild(l);
}
```

Ce code, est également, très simple. Il consulte {{DOMxRef("event.type")}} afin de déterminer l'évènement qui s'est produit, puis ajoute une note appropriée à la {{HTMLElement("ul")}} (liste non ordonnée) que nous utilisons pour enregistrer ces évènements.

Le résultat obtenu devrait ressembler à quelque chose comme ceci&nbsp;:

- Début : le temps écoulé est 0s
- Nouvelle boucle démarrée à 3.01200008392334s
- Nouvelle boucle démarrée à 6.00600004196167s
- Fin : le temps écoulé est 9.234000205993652s

Notez que les temps sont très proches, mais pas exactement, de ceux attendus compte tenu du timing établi lors de la configuration de l'animation. Notez également qu'après la dernière itération de l'animation, l'évènement `animationiteration` n'est pas envoyé&nbsp;; à la place, l'évènement `animationend` est envoyé.

Juste pour compléter, voici le HTML qui affiche le contenu de la page, y compris la liste dans laquelle le script insère les informations sur les évènements reçus&nbsp;:

```html
<h1 id="regardez-moi">Regardez-moi bouger</h1>
<p>
  Un exemple d'animation CSS pour déplacer un élément <code>H1</code> sur une
  page.
</p>
<p>
  De plus, nous affichons du texte chaque fois qu'un évènement d'animation se
  déclenche, afin que vous puissiez les voir en action.
</p>
<ul id="sortie"></ul>
```

Et voici le résultat en direct.

> [!NOTE]
> Rechargez la page pour voir l'animation.

{{EmbedLiveSample("Utiliser les évènements liés aux animations", 600, 300)}}

### Animer `display` et `content-visibility`

Cet exemple montre comment {{CSSxRef("display")}} et {{CSSxRef("content-visibility")}} peuvent être animés. Ce comportement est utile pour créer des animations d'entrée/sortie où vous souhaitez, par exemple, supprimer un conteneur du DOM avec `display: none`, mais le faire disparaître en douceur avec {{CSSxRef("opacity")}} plutôt que de disparaître immédiatement.

Les navigateurs prenant en charge l'animation de `display` et `content-visibility` utilisent une variation du [type d'animation discrète](/fr/docs/Web/CSS/Guides/Animations/Animatable_properties#discrète). Cela signifie généralement que les propriétés basculeront entre deux valeurs à 50 % du temps d'animation entre les deux.

Il y a cependant une exception, qui se produit lors de l'animation vers/depuis `display: none` ou `content-visibility: hidden` vers une valeur visible. Dans ce cas, le navigateur basculera entre les deux valeurs afin que le contenu animé soit affiché pendant toute la durée de l'animation.

De ce fait, par exemple&nbsp;:

- Lors de l'animation de `display` de `none` à `block` (ou une autre valeur visible de `display`), la valeur basculera à `block` à `0 %` de la durée de l'animation afin qu'elle soit visible pendant toute la durée.
- Lors de l'animation de `display` de `block` (ou une autre valeur visible de `display`) à `none`, la valeur basculera à `none` à `100 %` de la durée de l'animation afin qu'elle soit visible pendant toute la durée.

#### HTML

Le HTML contient deux éléments {{HTMLElement("p")}} avec un {{HTMLElement("div")}} entre les deux que nous allons animer de `display` `none` à `block`.

```html
<p>
  Cliquez n'importe où sur l'écran ou appuyez sur une touche pour basculer le
  <code>&lt;div&gt;</code> entre caché et affiché.
</p>

<div>
  Il s'agit d'un élément <code>&lt;div&gt;</code> qui anime entre
  <code>display: none; opacity: 0</code> et
  <code>display: block; opacity: 1</code>. Sympa, non&nbsp;?
</div>

<p>
  Ceci est un autre paragraphe pour montrer que
  <code>display: none;</code> est appliqué et supprimé sur le
  <code>&lt;div&gt;</code> ci-dessus. Si seule son <code>opacity</code>
  était modifiée, il prendrait toujours de la place dans le DOM.
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
  opacity: 0;
  display: none;
}

/* Classes d'animation */

div.fade-in {
  display: block;
  animation: fade-in 0.7s ease-in forwards;
}

div.fade-out {
  animation: fade-out 0.7s ease-out forwards;
}

/* Images clés d'animation */

@keyframes fade-in {
  0% {
    opacity: 0;
    display: none;
  }

  100% {
    opacity: 1;
    display: block;
  }
}

@keyframes fade-out {
  0% {
    opacity: 1;
    display: block;
  }

  100% {
    opacity: 0;
    display: none;
  }
}
```

Notez l'inclusion de la propriété `display` dans les images clés d'animation.

#### JavaScript

Enfin, nous incluons un peu de JavaScript pour configurer les écouteurs d'évènements afin de déclencher les animations. Plus précisément, nous ajoutons la classe `fade-in` au `<div>` lorsque nous voulons qu'il apparaisse, et `fade-out` lorsqu'il doit disparaître.

```js
const divElem = document.querySelector("div");
const htmlElem = document.querySelector(":root");

htmlElem.addEventListener("click", showHide);
document.addEventListener("keydown", showHide);

function showHide() {
  if (divElem.classList[0] === "fade-in") {
    divElem.classList.remove("fade-in");
    divElem.classList.add("fade-out");
  } else {
    divElem.classList.remove("fade-out");
    divElem.classList.add("fade-in");
  }
}
```

#### Résultat

Le code s'affiche comme suit&nbsp;:

{{EmbedLiveSample("Animer `display` et `content-visibility`", "100%", 350)}}

## Voir aussi

- Le module [des animations CSS](/fr/docs/Web/CSS/Guides/Animations)
- L'interface API {{DOMxRef("AnimationEvent")}}
- [Utiliser les transitions CSS](/fr/docs/Web/CSS/Guides/Transitions/Using)
- [Utiliser l'API Web Animations](/fr/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API)
