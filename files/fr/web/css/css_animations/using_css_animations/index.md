---
title: Utiliser les animations CSS
slug: Web/CSS/CSS_Animations/Using_CSS_animations
translation_of: Web/CSS/CSS_Animations/Using_CSS_animations
original_slug: Web/CSS/Animations_CSS/Utiliser_les_animations_CSS
---
{{CSSRef}}

Les **animations CSS** permettent de créer des transitions entre deux états de mise en forme. Une animation est décrite par deux choses : des propriétés propres à l'animation d'une part et un ensemble d'étapes (_keyframes_) qui indiquent l'état initial, final et éventuellement des états intermédiaires d'autre part.

Trois avantages permettent de distinguer les animations CSS des techniques d'animations utilisant JavaScript :

1.  On peut aisément obtenir des animations simples sans avoir à connaître JavaScript.
2.  Les animations s'exécuteront correctement même lorsque le système est soumis à une charge modérée. Il est possible que des animations JavaScript s'exécutent lentement si elles sont mal décrites. Dans le cadre des animations CSS, le moteur de rendu peut utiliser certaines techniques (comme le _frame-skipping_) afin que le résultat obtenu soit aussi fluide que possible.
3.  En laissant le contrôle de l'animation au navigateur, celui-ci peut optimiser les performances et l'efficacité du système, par exemple en réduisant la fréquence de mise à jour des animations qui sont exécutées dans des onglets qui ne sont pas visibles à l'écran.

## Paramétrer l'animation

Pour créer une animation CSS, il faut utiliser la propriété raccourcie {{cssxref("animation")}} ou les propriétés détaillées correspondantes sur un ou plusieurs éléments. Cette propriété permet de configurer la durée, le minutage et d'autres détails à propos de l'animation. **Attention, cela ne détermine pas l'apparence visuelle de l'animation.** Celle-ci est définie en utilisant des règles CSS de mise en forme au sein de la règle @ {{cssxref("@keyframes")}} comme décrit ci-après.

Les propriétés détaillées rattachées à la propriété raccourcie {{cssxref("animation")}} sont :

- {{cssxref("animation-delay")}}
  - : Cette propriété définit le délai entre le moment où l'élément est chargé et le moment où l'animation commence.
- {{cssxref("animation-direction")}}
  - : Cette propriété indique si l'animation doit alterner entre deux directions de progressions (faire des allers-retours) ou recommencer au début à chaque cycle de répétition.
- {{cssxref("animation-duration")}}
  - : Cette propriété définit la durée d'un cycle de l'animation.
- {{cssxref("animation-fill-mode")}}
  - : Cette propriété indique les valeurs qui doivent être appliquées aux propriétés avant et après l'exécution de l'animation.
- {{cssxref("animation-iteration-count")}}
  - : Cette propriété détermine le nombre de fois que l'animation est répétée. On peut utiliser le mot-clé `infinite` afin de répéter une animation infiniment.
- {{cssxref("animation-name")}}
  - : Cette propriété permet de déclarer un nom qui pourra être utilisé comme référence à l'animation pour la règle @ {{cssxref("@keyframes")}}.
- {{cssxref("animation-play-state")}}
  - : Cette propriété permet d'interrompre (« pause ») ou de reprendre l'exécution d'une animation.
- {{cssxref("animation-timing-function")}}
  - : Cette propriété configure la fonction de minutage d'une animation, autrement dit comment celle-ci accélère entre l'état initial et l'état final notamment grâce à des fonctions décrivant des courbes d'accélération.

## Définir les étapes composant une animation (`@keyframes`)

Une fois qu'on a définit les propriétés propres à l'animation, on doit définir la mise en forme qui évolue lors de cette animation. Pour cela on définit deux étapes ou plus grâce à la règle @ {{cssxref("@keyframes")}}. Chaque étape décrit la façon dont l'élément animé doit être affiché à un instant donné lors de l'animation.

La durée de l'animation est définie avant et la règle `@keyframes` utilise donc des valeurs exprimées en pourcentages (type CSS {{cssxref("percentage")}}) pour indiquer l'instant correspondant à cet état. 0% indique l'état initial de l'animation et 100% indique l'état final. Ces deux états étant très important, il existe deux alias pour les décrire : `from` et `to`. Ces états sont optionnels et si `from`/`0%` ou `to`/`100%` ne sont pas définis, le navigateur utilisera les valeurs calculées des différentes propriétés.

Il est également possible d'ajouter des étapes intermédiaires, entre l'état initial et l'état final de l'animation.

## Exemples

> **Note :** Les exemples ci-après n'utilisent pas la version préfixée des propriétés liées aux animations. Il est possible que d'anciens navigateurs (antérieurs à 2017) aient besoin de ces préfixes pour fonctionner auquel cas l'exemple « _live_ » ne fonctionnera pas.

### Utiliser une animation pour que le texte traverse la fenêtre du navigateur

Dans cet exemple simple, on met en forme l'élément {{HTMLElement("p")}} afin que le texte passe de la droite vers la gauche de l'écran

On notera que les animations comme celle-ci peuvent agrandir la page qui sera alors plus grande que la fenêtre du navigateur. Pour éviter ce problème, on pourra placer l'élément animé dans un conteneur et utiliser {{cssxref("overflow")}}`:hidden` sur ce conteneur.

```css
p {
  animation-duration: 3s;
  animation-name: slidein;
}

@keyframes slidein {
  from {
    margin-left: 100%;
    width: 300%;
  }

  to {
    margin-left: 0%;
    width: 100%;
  }
}
```

Dans cet exemple, on indique dans les propriétés de {{HTMLElement("p")}} que l'animation doit durer trois secondes entre le début et la fin (c'est le rôle de {{cssxref("animation-duration")}}) et que le nom utilisé par la règle @ {{cssxref("@keyframes")}} pour faire référence à cette animation sera `slidein`.

Ici, on ne souhaite illustrer que les animations mais on aurait très bien pu avoir d'autres règles « classiques » pour d'autres propriétés à déclarer sur l'élément.

Les étapes (_keyframes_) de l'animation sont définies via la règle @ {{cssxref("@keyframes")}}. Dans ce premier exemple, on a uniquement deux étapes. La première décrit l'état à 0% (on utilise l'alias `from`). Pour cet état initial, on veut que la marge gauche de l'élément soit à 100% (c'est-à-dire tout à droite de l'élément englobant) et que la largeur de l'élément soit de 300% (soit trois fois la largeur de l'élément englobant). Cela permet que le contenu soit dessiné hors de la fenêtre lors de l'état initial.

La seconde, et dernière, étape, se produit à 100% d'avancement (dans l'exemple, on utilise l'alias `to`). Pour cet état, la marge gauche vaut 0% et la largeur de l'élément vaut 100%. De cette façon le contenu finit sa course contre le borde gauche de la zone de contenu.

```html
<p>The Caterpillar and Alice looked at each other for some time in silence:
at last the Caterpillar took the hookah out of its mouth, and addressed
her in a languid, sleepy voice.</p>
```

> **Note :** Pour observer l'animation, il peut être nécessaire de rafraîchir la page ou d'utiliser la vue CodePen/JSFiddle.

{{EmbedLiveSample("Utiliser_une_animation_pour_que_le_texte_traverse_la_fenêtre_du_navigateur","100%","250")}}

### Ajouter une autre étape

Ajoutons une autre étape à partir de l'animation précédente. Ici, nous allons agrandir la taille de police utilisée lorsque l'élément arrive de la droite avant qu'elle ne réduise à nouveau pour revenir à la taille originale une fois arrivée la fin de l'animation. Pour cela, on ajoute une étape dans la règle @ `@keyframes` :

```css
75% {
  font-size: 300%;
  margin-left: 25%;
  width: 150%;
}
```

```css hidden
p {
  animation-duration: 3s;
  animation-name: slidein;
}

@keyframes slidein {
  from {
    margin-left: 100%;
    width: 300%;
  }

  75% {
    font-size: 300%;
    margin-left: 25%;
    width: 150%;
  }

  to {
    margin-left: 0%;
    width: 100%;
  }
}
```

```html hidden
<p>The Caterpillar and Alice looked at each other for some time in silence:
at last the Caterpillar took the hookah out of its mouth, and addressed
her in a languid, sleepy voice.</p>
```

Cette nouvelle étape indique au navigateur que, lorsqu'on atteint 75% d'avancement, il faut que la marge à gauche soit de 25% et que la largeur du paragraphe représente 150% de la largeur de l'élément englobant.

> **Note :** Pour observer l'animation, il peut être nécessaire de rafraîchir la page ou d'utiliser la vue CodePen/JSFiddle.

{{EmbedLiveSample("Ajouter_une_autre_étape","100%","250")}}

### Répéter une animation

Pour que l'animation se répète, il suffit d'utiliser la propriété {{cssxref("animation-iteration-count")}} et d'indiquer le nombre de répétitions souhaitées. Ici, on utilise la valeur `infinite` pour que l'animation se répète à l'infini :

```css
p {
  animation-duration: 3s;
  animation-name: slidein;
  animation-iteration-count: infinite;
}
```

```css hidden
@keyframes slidein {
  from {
    margin-left: 100%;
    width: 300%;
  }

  to {
    margin-left: 0%;
    width: 100%;
  }
}
```

```html hidden
<p>The Caterpillar and Alice looked at each other for some time in silence:
at last the Caterpillar took the hookah out of its mouth, and addressed
her in a languid, sleepy voice.</p>
```

{{EmbedLiveSample("Répéter_une_animation","100%","250")}}

### Obtenir un effet aller-retour

On a donc une animation qui se répète mais on obtient un résultat étrange, l'animation redémarre à chaque fois depuis l'état initial. Si on veut que le texte parcourt l'écran de droite à gauche puis de gauche à droite, on pourra utiliser la propriété {{cssxref("animation-direction")}} avec la valeur `alternate` :

```css
p {
  animation-duration: 3s;
  animation-name: slidein;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}
```

```css hidden
@keyframes slidein {
  from {
    margin-left: 100%;
    width: 300%;
  }

  to {
    margin-left: 0%;
    width: 100%;
  }
}
```

```html hidden
<p>The Caterpillar and Alice looked at each other for some time in silence:
at last the Caterpillar took the hookah out of its mouth, and addressed
her in a languid, sleepy voice.</p>
```

{{EmbedLiveSample("Obtenir_un_effet_aller-retour","100%","250")}}

### Utiliser la propriété raccourcie `animation`

La propriété raccourcie {{cssxref("animation")}} permet d'économiser de l'espace. Par exemple, si on prend cette règle :

```css
p {
  animation-duration: 3s;
  animation-name: slidein;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}
```

On peut la réécrire de façon plus concise :

```css
p {
  animation: 3s infinite alternate slidein;
}
```

> **Note :** Pour plus de détails, vous pouvez consulter la page de référence sur la propriété {{cssxref("animation")}}.

### Utiliser plusieurs valeurs pour différentes animations

Les propriétés CSS détaillées permettent d'utiliser plusieurs valeurs, séparées par des virgules. Cela permet de paramétrer plusieurs animations via une seule règle. Prenons quelques exemples.

Dans ce premier exemple, on a trois animations nommées différemment mais qui utilisent la même durée et le même nombre d'itération :

```css
animation-name: fadeInOut, moveLeft300px, bounce;
animation-duration: 3s;
animation-iteration-count: 1;
```

Dans ce deuxième exemple, les trois propriétés ont cette fois des composantes distinctes, pour la durée et le nombre d'itération. Ici, par exemple `fadeInOut` a une durée de 2.5s et 2 itérations.

```css
animation-name: fadeInOut, moveLeft300px, bounce;
animation-duration: 2.5s, 5s, 1s;
animation-iteration-count: 2, 1, 5;
```

Dans ce troisième cas, on a toujours trois animations mais uniquement deux durées et deux nombres d'itération. Lorsqu'il y a moins de valeurs que d'animations, on boucle sur les valeurs. Par exemple, avec le code qui suit, `fadeInOut` durera `2.5s`, `moveLeft300px` durera `5s`. On arrive à la fin de la liste des valeurs de durée et on reprend donc au début : `bounce` aura donc une durée de `2.5s`. Le nombre d'itérations sera affecté de la même façon.

```css
animation-name: fadeInOut, moveLeft300px, bounce;
animation-duration: 2.5s, 5s;
animation-iteration-count: 2, 1;
```

### Utiliser les événements liés aux animations

Il est possible d'obtenir des informations et un certain contrôle sur les animations en utilisant l'objet {{domxref("AnimationEvent")}}. Celui-ci peut être utilisé pour détecter quand les animations commencent, finissent et il peut déclencher une nouvelle itération. Chaque événement inclue l'instant auquel il s'est produit et le nom de l'animation qui a déclenché l'événement.

Dans la suite de cet article, nous allons modifier l'exemple précédent pour obtenir des informations supplémentaires sur chaque événement d'animation lorsqu'il se produit afin de mieux voir comment cela fonctionne.

#### La feuille de style CSS

On commence par rédiger le CSS pour l'animation. Ici, l'animation durera 3 secondes, sera intitulée `slidein`, se répètera trois fois et changera de direction pour faire des allers-retours. Dans la règle @ {{cssxref("@keyframes")}}, on manipule la largeur et la marge à gauche de l'élément afin que ce dernier traverse l'écran.

```css
.slidein {
  animation-duration: 3s;
  animation-name: slidein;
  animation-iteration-count: 3;
  animation-direction: alternate;
}

@keyframes slidein {
  from {
    margin-left:100%;
    width:300%
  }

  to {
    margin-left:0%;
    width:100%;
  }
}
```

#### Les gestionnaires d'événements

On utilisera JavaScript pour « écouter » les trois événements possibles. Le code qui suit permet de définir les gestionnaires d'événement (à utiliser une fois que le document a été chargé).

```js
var element = document.getElementById("watchme");
element.addEventListener("animationstart", listener, false);
element.addEventListener("animationend", listener, false);
element.addEventListener("animationiteration", listener, false);

element.className = "slidein";
```

Ce code est plutôt classique, n'hésitez pas à consulter la documentation de {{domxref("eventTarget.addEventListener()")}} si besoin. Pour finir, ce script attribut une classe sur `slidein` sur l'élément.

Quel est l'intérêt ? En fait, l'événement `animationstart` est déclenché dès que l'animation démarre et cela se produit alors avant l'exécution du script. Pour éviter cela, on démarre l'animation via le script en définissant la classe de l'élément à animer.

#### Écouter les événements

Les événements sont transmis à la fonction `listener()` décrite ici :

```js
function listener(event) {
  var l = document.createElement("li");
  switch(event.type) {
    case "animationstart":
      l.innerHTML = "Début : durée écoulée : " + event.elapsedTime;
      break;
    case "animationend":
      l.innerHTML = "Fin : durée écoulée : " + event.elapsedTime;
      break;
    case "animationiteration":
      l.innerHTML = "Nouvelle boucle démarrée à : " + event.elapsedTime;
      break;
  }
  document.getElementById("output").appendChild(l);
}
```

Ce code consulte {{domxref("event.type")}} afin de déterminer l'événement qui s'est produit puis ajoute un élément {{HTMLElement("ul")}} au document pour alimenter un journal des événements.

Le résultat obtenu devrait ressembler à quelque chose comme :

- Début : durée écoulée : 0
- Nouvelle boucle démarrée à : 3.01200008392334
- Nouvelle boucle démarrée à : 6.00600004196167
- Fin : durée écoulée : 9.234000205993652

On voit ici que les durées sont proches mais pas exactes. On voit également que, lors de la fin de l'animation, l'événement `animationiteration` n'est pas envoyé, seul `animationend` est déclenché.

#### Le document HTML

Afin d'être tout à fait complet, voici le code HTML qui peut être utilisé et qui contint la liste dans laquelle on enregistrera les événements reçus :

```html
<h1 id="watchme">Regardez-moi bouger</h1>
<p>
  Un exemple d'animation CSS pour déplacer
  un élément <code>H1</code> sur une page.
</p>
<p>
  Voici les événements relatifs aux animations :
</p>
<ul id="output">
</ul>
</body>
```

{{EmbedLiveSample('Utiliser_les_événements_liés_aux_animations', '600', '300')}}

## Voir aussi

- {{domxref("AnimationEvent")}}
- [Détecter la prise en charge des animations CSS](/fr/docs/Web/CSS/CSS_Animations/Detecting_CSS_animation_support)
- [Manipuler les transitions CSS](/fr/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions)
- [CSS](https://www.cssdebutant.com)
