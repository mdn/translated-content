---
title: La construction d'objet en pratique
slug: Learn/JavaScript/Objects/Object_building_practice
tags:
  - Apprendre
  - Article
  - Canvas
  - Débutant
  - JavaScript
  - Manuel
  - Objets
  - Tutoriel
translation_of: Learn/JavaScript/Objects/Object_building_practice
original_slug: Learn/JavaScript/Objects/la_construction_d_objet_en_pratique
---
{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/Objects/JSON", "Learn/JavaScript/Objects/Adding_bouncing_balls_features", "Learn/JavaScript/Objects")}}

Dans l'article précédent, nous avons passé en revue l'essentiel de la théorie de l'objet Javascript et sa syntaxe détaillée, vous donnant ainsi des bases solides sur lesquelles commencer. Dans le présent article nous plongeons dans un exercice pratique afin d'accroître votre savoir-faire dans la construction d'objets entièrement personnalisés donnant un résultat plutôt amusant et très coloré.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Pré-requis :</th>
      <td>
        <p>
          Connaissance basique de l'informatique, une compréhension basique du
          HTML et du CSS, une familiarité avec  les bases du JavaScript (voir
          <a href="/fr/docs/Learn/JavaScript/First_steps">Premiers pas</a> et
          <a href="/fr/docs/Learn/JavaScript/Building_blocks"
            >Les blocs de construction</a
          >) et les bases de la programmation objet en JavaScript (voir <a
            href="/fr/docs/Learn/JavaScript/Object-oriented/Introduction"
            >Introduction aux objets</a
          >). 
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Objectif :</th>
      <td>
        <p>
          Acquérir plus de pratique dans l'utilisation des objets et des
          techniques orientées objet dans un contexte "monde réel".
        </p>
      </td>
    </tr>
  </tbody>
</table>

## Faisons bondir quelques balles

Dans cet article, nous écrirons une démo classique de "balles bondissantes", pour vous montrer à quel point les objets peuvent être utiles en JavaScript. Nos petites balles bondiront partout sur notre écran et changeront de couleurs lorsqu'elles se toucheront. L'exemple finalisé ressemblera un peu à ceci :

![](bouncing-balls.png)

Cet exemple utilise l'[API Canvas](/fr/docs/Learn/JavaScript/Client-side_web_APIs/Drawing_graphics) pour dessiner les balles sur l'écran, et l'API [requestAnimationFrame](/fr/docs/Web/API/window/requestAnimationFrame)  pour animer l'ensemble de l'affichage — Nul besoin d'avoir une connaissance préalable de ces APIs, nous expérons qu'une fois cet article terminé, vous aurez envie d'en faire une exploration approfondie. Tout le long du parcours nous utiliserons certains objets formidables et vous montrerons nombre de techniques sympathiques comme des balles bondissantes sur les murs et la vérification de balles qui s'entrechoquent (encore connue sous l'appelation **détection de collision**).

Pour commencer, faites des copies locales de nos fichiers [`index.html`](https://github.com/mdn/learning-area/blob/master/javascript/oojs/bouncing-balls/index.html), [`style.css`](https://github.com/mdn/learning-area/blob/master/javascript/oojs/bouncing-balls/style.css), et [`main.js`](https://github.com/mdn/learning-area/blob/master/javascript/oojs/bouncing-balls/main.js). Ces fichiers contiennent respectivement :

1.  Un document  HTML très simple contenant un élément {{HTMLElement("h1")}} , un élément {{HTMLElement("canvas")}} pour dessiner nos balles dessus et des élements  pour appliquer notre CSS et notre JavaScript à notre HTML ;
2.  Quelques styles très simples qui servent principalement à mettre en forme et placer le `<h1>`, et se débarasser de toutes barres de défilement ou de marges autour du pourtour de notre page (afin que cela paraisse plus sympathique et élégant) ;
3.  Un peu de JavaScript qui sert à paramétrer l'élément  `<canvas>` et fournir les fonctions globalles que nous utiliserons.

La première partie du script ressemble à ceci :

```js
const canvas = document.querySelector('canvas');

const ctx = canvas.getContext('2d');

const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;
```

Ce script prend une référence à l'élément  `<canvas>` et ensuite invoque la méthode  [`getContext()`](/fr/docs/Web/API/HTMLCanvasElement/getContext) sur lui, nous donnant ainsi un contexte sur lequel nous pouvons commencer à dessiner. La variable résultante  (`ctx`)  est l'objet qui représente directement la surface du Canvas où nous pouvons dessiner et qui nous permet de dessiner des formes 2D sur ce dernier.

Après, nous configurons  les variables `width` (largeur) et `height`(hauteur),  et la largeur et la hauteur de l'élément canvas (représentés par les propriétés  `canvas.width` et `canvas.height` ) afin qu'elles soient identiques à la fenêtre du navigateur (la surface sur laquelle apparaît la page web— Ceci peut être tiré des propriétés {{domxref("Window.innerWidth")}} et {{domxref("Window.innerHeight")}}).

Vous verrez qu'ici nous enchaînons les assignations des valeurs des différentes variables ensemble à des fins de rapidité. Ceci est parfaitement autorisé.

Le dernier morceau du script ressemble à ceci :

```js
function random(min, max) {
  var num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
}
```

Cette fonction prend deux nombres comme arguments, et renvoie un nombre compris entre les deux.

## Modéliser une balle dans notre programme

Notre programme met en œuvre beaucoup de balles bondissant partout sur l'écran. Comme nos balles se comporteront toutes de la même façon, cela semble tout à fait sensé de les représenter avec un objet. Commençons donc en ajoutant le constructeur suivant à la fin de notre code.

```js
function Ball(x, y, velX, velY, color, size) {
  this.x = x;
  this.y = y;
  this.velX = velX;
  this.velY = velY;
  this.color = color;
  this.size = size;
}
```

Ici, nous incluons des paramètres qui définissent  des propriétés dont chaque balle aura besoin pour fonctionner dans notre programme :

- Les coordonnées `x` et `y`  — les coordonnées verticales et horizontales où la balle débutera sur l'écran. Ceci peut se trouver entre 0 (coin à gauche en haut) et la valeur de la hauteur et de la largeur de la fenêtre du navigateur (coin en bas à droite).
- Une vitesse horizontale et verticale (`velX` et `velY`) — à chaque balle est attribuée une vitesse horizontale et verticale; en termes réels ces valeurs seront régulièrement ajoutéés aux valeurs de la coordonnée `x`/`y` quand nous commencerons à animer les balles, afin de les faire bouger d'autant sur chaque vignette (frame).
- `color` — chaque balle a une couleur.
- `size` — chaque balle a une taille — ce sera son rayon mesuré en pixels.

Ceci règle le problème des propriétés mais qu'en est il des méthodes ? Nous voulons maintenant amener nos balles à faire quelque chose dans notre programme.

### Dessiner la balle

En premier lieu ajoutez la méthode `draw()` au `prototype` de `Ball()` :

```js
Ball.prototype.draw = function() {
  ctx.beginPath();
  ctx.fillStyle = this.color;
  ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
  ctx.fill();
}
```

En utilisant cette fonction, nous pouvons dire à notre balle de se dessiner sur l'écran en appelant une série de membres du contexte 2D du canvas que nous avons défini plus tôt  (`ctx`). Le contexte est comme le papier et maintenant nous allons demander à notre stylo d'y dessiner quelque chose :

- Premièrement, nous utilisons [`beginPath()`](/fr/docs/Web/API/CanvasRenderingContext2D/beginPath) pour spécifier que nous voulons dessiner une forme sur le papier.
- Ensuite, nous utilisons [`fillStyle`](/fr/docs/Web/API/CanvasRenderingContext2D/fillStyle) pour définir de quelle couleur nous voulons que la forme soit — nous lui attribuons la valeur de la propriété `color` de notre balle.
- Après, nous utilisons la méthode [`arc()`](/fr/docs/Web/API/CanvasRenderingContext2D/arc) pour tracer une forme en arc sur le papier. Ses paramètres sont :

  - Les positions `x` et `y` du centre de l'arc — nous specifions donc les propriétés `x` et `y` de notre balle.
  - Le rayon de l'arc — nous specifions la propriété `size` de notre balle.
  - Les deux derniers paramètres spécifient l'intervalle de début et de fin en degrés pour dessiner l'arc. Ici nous avons spécifié 0 degrés et `2 * PI` qui est l'équivalent de 360 degrés en radians (malheureusement  vous êtes obligés  de spécifier ces valeurs en radians et non en degrés). Cela nous donne un cercle complet. Si vous aviez spécifié seulement  `1 * PI`, vous auriez eu un demi-cercle (180 degrés).

- En dernière position nous utilisons la méthode [`fill()`](/fr/docs/Web/API/CanvasRenderingContext2D/fill) qui est habituellement utilisée pour spécifier que nous souhaitons mettre fin au dessin que nous avons commencé avec `beginPath()`, et remplir la surface délimitée avec la couleur que nous avions spécifiée plus tôt avec `fillStyle`.

Vous pouvez déjà commencer à tester votre objet.

1.  Sauvegardez le code et chargez le fichier html dans un navigateur.
2.  Ouvrez la console JavaScript du navigateur et actualisez la page afin que la taille du canvas change et prenne la petite taille restante de la fenêtre lorsque la console est ouverte.
3.  Tapez dans la console ce qui suit afin de créer une nouvelle instance de balle :

    ```js
    let testBall = new Ball(50, 100, 4, 4, 'blue', 10);
    ```

4.  Essayez d'appeler ses membres :

    ```js
    testBall.x
    testBall.size
    testBall.color
    testBall.draw()
    ```

5.  Lorsque vous entrerez la dernière ligne, vous devriez voir la balle se dessiner quelque part sur votre canvas.

### Mettre à jour les données de la balle

Nous pouvons dessiner la balle dans n'importe quelle position, mais actuellement pour commencer à la bouger nous aurons besoin d'une sorte de fonction de mise à jour. Insérez donc le code suivant à la fin de votre fichier JavaScript pour ajouter une méthode `update()` au `prototype` de `Ball()`:

```js
Ball.prototype.update = function() {
  if ((this.x + this.size) >= width) {
    this.velX = -(this.velX);
  }

  if ((this.x - this.size) <= 0) {
    this.velX = -(this.velX);
  }

  if ((this.y + this.size) >= height) {
    this.velY = -(this.velY);
  }

  if ((this.y - this.size) <= 0) {
    this.velY = -(this.velY);
  }

  this.x += this.velX;
  this.y += this.velY;
}
```

Les quatre premières parties de la fonction vérifient si la balle a atteint le rebord  du canvas. Si c'est le cas, nous inversons la polarité de la vitesse appropriée pour faire bouger la balle dans le sens opposé. Donc par exemple, si la balle se déplaçait vers le haut (positif `velY`) alors la vitesse verticale est changée afin qu'elle commence à bouger plutôt vers le bas (negatif `velY`).

Dans les quatre cas nous :

- Verifions si la coordonnée `x` est plus grande que la largeur du canvas (la balle est en train de sortir du côté droit).
- Verifions si la coordonnée `x` est plus petite que 0 (la balle est en train de sortir du côté gauche).
- Verifions si la coordonnée `y` est plus grande que la hauteur du canvas (la balle est en train de sortir par le bas).
- Verifions si la coordonnée `y` est plus petite que 0 (la balle est en train de sortir par le  haut).

Dans chaque cas, nous incluons la taille `size` de la balle dans les calculs parce que les coordonnées  `x`/`y`  sont situées au centre de la balle mais nous voulons que le pourtour de la balle rebondisse sur le rebord  — nous ne voulons pas que la balle sorte à moité hors de l'écran avant de commencer à rebondir vers l'arrière.

Les deux dernières lignes ajoutent la valeur `velX` à la coordonnée `x` et la valeur `velY` à la coordonnée `y` — la balle est en effet mise en mouvement chaque fois que cette méthode est invoquée.

Cela suffira pour l'instant, passons à l'animation !

## Animer la balle

Maintenant, rendons cela amusant. Nous allons commencer à ajouter des balles au canvas et à les animer.

1.  Tout d'abord, nous avons besoin d'un endroit où stocker toutes nos balles. Le tableau suivant fera ce travail — ajoutez-le au bas de votre code maintenant :

    ```js
    let balls = [];
    ```

        while (balls.length < 25) {
          let size = random(10,20);
          let ball = new Ball(
            // ball position always drawn at least one ball width
            // away from the edge of the canvas, to avoid drawing errors
            random(0 + size,width - size),
            random(0 + size,height - size),
            random(-7,7),
            random(-7,7),
            'rgb(' + random(0,255) + ',' + random(0,255) + ',' + random(0,255) +')',
            size
          );

          balls.push(ball);
        }

    Tous les programmes qui animent les choses impliquent généralement une boucle d'animation, qui sert à mettre à jour les informations dans le programme et à restituer ensuite la vue résultante sur chaque image de l'animation. C'est la base de la plupart des jeux et autres programmes similaires.

2.  Ajoutez ce qui suit au bas de votre code maintenant :

    ```js
    function loop() {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.25)';
      ctx.fillRect(0, 0, width, height);

      for (let i = 0; i < balls.length; i++) {
        balls[i].draw();
        balls[i].update();
      }

      requestAnimationFrame(loop);
    }
    ```

    Notre fonction `loop()` fonctionne comme suit :

    - On définit la couleur de remplissage du canvas en noir semi-transparent, puis dessine un rectangle de couleur sur toute la largeur et la hauteur du canvas, en utilisant `fillRect()` (les quatre paramètres fournissent une coordonnée de départ et une largeur et une hauteur pour le rectangle dessiné ). Cela sert à masquer le dessin de l'image précédente avant que la suivante ne soit dessinée. Si vous ne faites pas cela, vous verrez juste de longs serpents se faufiler autour de la toile au lieu de balles qui bougent ! La couleur du remplissage est définie sur semi-transparent, `rgba (0,0,0,.25)`, pour permettre aux quelques images précédentes de briller légèrement, produisant les petites traînées derrière les balles lorsqu'elles se déplacent. Si vous avez changé 0.25 à 1, vous ne les verrez plus du tout. Essayez de faire varier ce dernier nombre (entre 0 et 1) pour voir l'effet qu'il a.
    - On crée un nouvel objet `Ball()` avec des attributs générées aléatoirement grâce à la fonction `random()`, puis on ajoute l'objet au tableau, mais seulement lorsque le nombre de balles dans le tableau est inférieur à 25. Donc quand on a 25 balles à l'écran, plus aucune balle supplémentaire n'apparaît. Vous pouvez essayer de faire varier le nombre dans `balls.length <25` pour obtenir plus, ou moins de balles à l'écran. En fonction de la puissance de traitement de votre ordinateur / navigateur, spécifier plusieurs milliers de boules peut ralentir l'animation de façon très significative !
    - Le programme boucle à travers tous les objets du tableau sur chacun desquels il exécute la fonction `draw()` et `update()` pour dessiner à l'écran chaque balle et faire les mise à jour de chaque attribut vant le prochain rafraîchissement.
    - Exécute à nouveau la fonction à l'aide de la méthode `requestAnimationFrame()` — lorsque cette méthode est exécutée en permanence et a reçu le même nom de fonction, elle exécute cette fonction un nombre défini de fois par seconde pour créer une animation fluide. Cela se fait généralement de manière récursive — ce qui signifie que la fonction s'appelle elle-même à chaque fois qu'elle s'exécute, de sorte qu'elle sera répétée encore et encore.

3.  Finallement mais non moins important, ajoutez la ligne suivante au bas de votre code — nous devons appeler la fonction une fois pour démarrer l'animation.

    ```js
    loop();
    ```

Voilà pour les bases — essayez d'enregistrer et de rafraîchir pour tester vos balles bondissantes!

## Ajouter la détection de collision

Maintenant, pour un peu de plaisir, ajoutons une détection de collision à notre programme, afin que nos balles sachent quand elles ont frappé une autre balle.

1.  Tout d'abord, ajoutez la définition de méthode suivante ci-dessous où vous avez défini la méthode `update()` (c'est-à-dire le bloc `Ball.prototype.update`).

    ```js
    Ball.prototype.collisionDetect = function() {
      for (let j = 0; j < balls.length; j++) {
        if (!(this === balls[j])) {
          const dx = this.x - balls[j].x;
          const dy = this.y - balls[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < this.size + balls[j].size) {
            balls[j].color = this.color = 'rgb(' + random(0, 255) + ',' + random(0, 255) + ',' + random(0, 255) +')';
          }
        }
      }
    }
    ```

    Cette méthode est un peu complexe, donc ne vous inquiétez pas si vous ne comprenez pas exactement comment cela fonctionne pour le moment. Regardons cela pas-à-pas :

    - Pour chaque balle _b_, nous devons vérifier chaque autre balle pour voir si elle est entrée en collision avec *b*. Pour ce faire, on inspecte toutes les balles du tableau `balls[]` dans une boucle `for`.
    - Immédiatement à l'intérieur de cette boucle `for`, une instruction `if` vérifie si la balle courante  *b'* , inspectée dans la boucle, n'est égale à la balle *b. Le code correspondant est :*  `b'!== b`_._ En effet, nous ne voulons pas vérifier si une balle _b_ est entrée en collision avec elle-même ! Nous contrôlons donc si la balle actuelle _b_—dont la méthode `collisionDetect()` est invoquée—est distincte de la balle _b'_ inspectée dans la boucle*.* Ainsi le bloc de code venant après l'instruction `if` ne s'exécutera que si les balles _b_ et _b'_ ne sont pas identiques.
    - Un algorithme classique permet ensuite de vérifier la superposition de deux disques. Ceci est expliqué plus loin dans [2D collision detection](/fr/docs/Games/Techniques/2D_collision_detection).
    - Si une collision est détectée, le code à l'intérieur de l'instruction interne `if` est exécuté. Dans ce cas, nous définissons simplement la propriété `color` des deux cercles à une nouvelle couleur aléatoire. Nous aurions pu faire quelque chose de bien plus complexe, comme faire rebondir les balles de façon réaliste, mais cela aurait été beaucoup plus complexe à mettre en œuvre. Pour de telles simulations de physique, les développeurs ont tendance à utiliser des bibliothèques de jeux ou de physiques telles que [PhysicsJS](http://wellcaffeinated.net/PhysicsJS/), [matter.js](http://brm.io/matter-js/), [Phaser](http://phaser.io/), etc.

2.  Vous devez également appeler cette méthode dans chaque image de l'animation. Ajouter le code ci-dessous  juste après la ligne `balls[i].update();`:

    ```js
    balls[i].collisionDetect();
    ```

3.  Enregistrez et rafraîchissez la démo à nouveau, et vous verrez vos balles changer de couleur quand elles entrent en collision !

> **Note :** Si vous avez des difficultés à faire fonctionner cet exemple, essayez de comparer votre code JavaScript avec notre [version finale](https://github.com/mdn/learning-area/blob/master/javascript/oojs/bouncing-balls/main-finished.js) (voir également la [démo en ligne](http://mdn.github.io/learning-area/javascript/oojs/bouncing-balls/index-finished.html)).

## Résumé

Nous espérons que vous vous êtes amusé à écrire votre propre exemple de balles aléatoires bondissantes comme dans le monde réel, en utilisant diverses techniques orientées objet et divers objets d'un bout à l'autre du module ! Nous espérons vous avoir offert un aperçu utile de l'utilisation des objets.

C'est tout pour les articles sur les objets — il ne vous reste plus qu'à tester vos compétences dans l'évaluation sur les objets.

## Voir aussi

- [Didacticiel sur canvas](/fr/docs/Web/API/Canvas_API/Tutorial) — un guide pour débutants sur l'utilisation de canvas 2D.
- [requestAnimationFrame()](/fr/docs/Web/API/window/requestAnimationFrame)
- [Détection de collision 2D](/fr/docs/Games/Techniques/2D_collision_detection)
- [Détection de collision 3D](/fr/docs/Games/Techniques/3D_collision_detection)
- [Jeu d'évasion 2D utilisant du JavaScript pu](/fr/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript) —un excellent tutoriel pour débutant montrant comment construire un jeu en 2D.
- [Jeu d'évasion 2D utilisant phaser](/fr/docs/Games/Tutorials/2D_breakout_game_Phaser) — explique les bases de la construction d'un jeu 2D en utilisant une bibliothèque de jeux JavaScript.

{{PreviousMenuNext("Learn/JavaScript/Objects/JSON", "Learn/JavaScript/Objects/Adding_bouncing_balls_features", "Learn/JavaScript/Objects")}}

## Dans ce module

- [Les bases de l'objet](/fr/docs/Learn/JavaScript/Objects/Basics)
- [JavaScript orienté objet pour les débutants](/fr/docs/Learn/JavaScript/Objects/Object-oriented_JS)
- [Prototypes d'objets](/fr/docs/Learn/JavaScript/Objects/Object_prototypes)
- [Héritage en JavaScript](/fr/docs/Learn/JavaScript/Objects/Inheritance)
- [Travailler avec des données JSON](/fr/docs/Learn/JavaScript/Objects/JSON)
- [Pratique de construction d'objets](/fr/docs/Learn/JavaScript/Objects/Object_building_practice)
- [Ajout de fonctionnalités à notre démo de balles bondissantes](/fr/docs/Learn/JavaScript/Objects/Adding_bouncing_balls_features)
