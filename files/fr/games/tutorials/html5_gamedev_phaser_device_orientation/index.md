---
title: Jeu 2D avec l'API Device orientation
slug: Games/Tutorials/HTML5_Gamedev_Phaser_Device_Orientation
translation_of: Games/Tutorials/HTML5_Gamedev_Phaser_Device_Orientation
original_slug: Games/Workflows/HTML5_Gamedev_Phaser_Device_Orientation_FR
---
{{GamesSidebar}}

Dans ce tutoriel, nous allons passer par le processus de construction d'un jeu mobile HTML5 qui utilise les API [Device Orientation](/fr/Apps/Fundamentals/gather_and_modify_data/responding_to_device_orientation_changes) et [Vibration](/fr/docs/Web/API/Vibration_API) pour améliorer le "gameplay" et est construit avec le "framework" [Phaser](http://phaser.io/). La connaissance JavaScript de base est recommandée pour tirer le meilleur parti de ce tutoriel.

## Exemple de jeu

A la fin de ce tutoriel, vous aurez une démo entièrement fonctionnelle du jeu : [Cyber Orb](http://orb.enclavegames.com/). Il ressemblera à quelque chose comme cela :

![](cyber-orb.png)

## Le framework Phaser

[Phaser](http://phaser.io/) est un framework pour créer des jeux mobiles et PC en utilisant les technologies HTML5. Malgré son manque de maturité, la communauté est assez active, et il évolue rapidement. Les sources sont [sur GitHub](https://github.com/photonstorm/phaser), lisez y la [documentation](http://docs.phaser.io/) de base, jetez un œil aux [exemples](http://examples.phaser.io/). Le framework Phaser offre un ensemble d'outils qui permettent d'accélérer le développement et aident à mettre en oeuvre les tâches courantes nécessaires au développement d'un jeu.

## Mise en place du projet

Vous pouvez voir [le code d'exemple du projet](https://github.com/EnclaveGames/Cyber-Orb) sur GitHub. La structure n'est pas compliquée : le point de départ est le fichier `index.html` où nous initialisons le framework, mettons en place le {{htmlelement("canvas")}} et jouons au jeu.

![](cyber-orb-github.png)

Vous pouvez l'ouvir avec votre navigateur préféré pour essayer le jeu. Il y a aussi trois dossiers :

- `img` : toutes les images utilisées dans le jeu
- `src` : les fichiers JavaScript où le code source est défini
- audio : tous les fichiers son du jeu

## Mettre en place le canevas

Nous voulons un rendu de notre jeu sur un canevas, mais nous ne le ferons pas manuellement - cela sera pris en charge par le framework. Disons-le : notre point de départ est le fichier `index.html` avec le contenu suivant. Vous pouvez créer vous-même si vous voulez suivre :

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <title>Cyber Orb demo</title>
    <style> body { margin: 0; background: #333; } </style>
    <script src="src/phaser-arcade-physics.2.2.2.min.js"></script>
    <script src="src/Boot.js"></script>
    <script src="src/Preloader.js"></script>
    <script src="src/MainMenu.js"></script>
    <script src="src/Howto.js"></script>
    <script src="src/Game.js"></script>
</head>
<body>
<script>
(function() {
    var game = new Phaser.Game(320, 480, Phaser.CANVAS, 'game');
    game.state.add('Boot', Ball.Boot);
    game.state.add('Preloader', Ball.Preloader);
    game.state.add('MainMenu', Ball.MainMenu);
    game.state.add('Howto', Ball.Howto);
    game.state.add('Game', Ball.Game);
    game.state.start('Boot');
})();
</script>
</body>
</html>
```

Ça ressemble à une simple page de site HTML avec des éléments basiques dans la balise `<head>` _(en-tête)_ : police de caractères, titre, CSS et inclusion des fichiers Javascript. Le `<body>` _(corps)_ contient l'initialisation du framework et la définition des états du jeu.

```js
var game = new Phaser.Game(320, 480, Phaser.CANVAS, 'game');
```

La ligne ci-dessus va initialiser l'instance de Phaser - les arguments sont la largeur et la hauteur du canevas, la méthode de rendu (nous utilisons `CANVAS`, mais il y a aussi les options `WEBGL` et `AUTO` disponibles) et l'ID optionnel du conteneur DOM dans lequel nous voulons placer le canevas. Si rien n'est spécifié dans ce dernier argument, ou si l'élément n'est pas trouvé, le `canvas` sera ajouté à la balise `<body>`. Sans le framework, pour ajouter l'élément `canvas` à la page, il faudrait écrire quelque chose comme ça dans la balise `<body>`:

```html
<canvas id='game' width='320' height='480'></canvas>
```

La chose importante à retenir est que le framework met en place des méthodes utiles pour accélérer beaucoup de choses comme la manipulation d'images ou la gestion des éléments, ce qui serait beaucoup plus difficile à faire manuellement.

> **Note :** Vous pouvez lire l'article [Building Monster Wants Candy](http://gamedevelopment.tutsplus.com/tutorials/getting-started-with-phaser-building-monster-wants-candy--cms-21723) pour une introduction approfondie aux fonctions et méthodes de base de Phaser.

Retour aux états du jeu : la ligne ci-dessous ajoute un nouvel état appelé Boot au jeu :

```html
game.state.add('Boot', Ball.Boot);
```

La première valeur est le nom de l'état et la seconde est l'objet que nous voulons lui assigner. La méthode `start` démarre l'état donné et le rend actif. Voyons ce que les états sont en réalité.

## Gestion des états du jeu

Les états du jeu dans Phaser sont différentes phases du jeu. Dans notre cas, ils sont chargés depuis des fichiers Javascript pour mieux les maintenir par la suite. Dans ce jeu nous avons les états : `Boot (démarrage)`, `Preloader (préchargement)`, `MainMenu (menu principal)`, `Howto` _(comment jouer)_ et `Game (jeu)`. `Boot` s'occupe d'initialiser quelques paramètres, `Preloader` charge tous les graphismes et les sons, `MainMenu` est le menu avec le bouton start, `Howto` affiche les instructions "comment jouer" et `Game`, est l'état qui permet de jouer. Passons rapidement au contenu de ces états.

### Boot.js _(démarrage)_

L'état `Boot` est le premier du jeu.

```js
var Ball = {
    _WIDTH: 320,
    _HEIGHT: 480
};
Ball.Boot = function(game) {};
Ball.Boot.prototype = {
    preload: function() {
        this.load.image('preloaderBg', 'img/loading-bg.png');
        this.load.image('preloaderBar', 'img/loading-bar.png');
    },
    create: function() {
        this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.game.scale.pageAlignHorizontally = true;
        this.game.scale.pageAlignVertically = true;
        this.game.state.start('Preloader');
    }
};
```

Le principal objet "`Ball`"  est défini et nous ajoutons deux variables appelées `_WIDTH` et `_HEIGHT` qui sont la largeur et la hauteur du caneva du jeu — elles nous aideront à positionner les éléments à l'écran. Nous chargeons d'abord deux images qui seront utilisées plus tard dans l'état `Preload` _(préchargement)_ pour montrer la progression du chargement de tous les autres éléments. La fonction `create` contient une configuration de base : nous configurons la mise à l'échelle et l'alignement du canevas et passons à l'état `Preload` lorsque tout est prêt.

### Preloader.js _(préchargement)_

L'état `Preloader` prend soin de charger tous les éléments :

```js
Ball.Preloader = function(game) {};
Ball.Preloader.prototype = {
    preload: function() {
        this.preloadBg = this.add.sprite((Ball._WIDTH-297)*0.5, (Ball._HEIGHT-145)*0.5, 'preloaderBg');
        this.preloadBar = this.add.sprite((Ball._WIDTH-158)*0.5, (Ball._HEIGHT-50)*0.5, 'preloaderBar');
        this.load.setPreloadSprite(this.preloadBar);

        this.load.image('ball', 'img/ball.png');
        // ...
        this.load.spritesheet('button-start', 'img/button-start.png', 146, 51);
        // ...
        this.load.audio('audio-bounce', ['audio/bounce.ogg', 'audio/bounce.mp3', 'audio/bounce.m4a']);
    },
    create: function() {
        this.game.state.start('MainMenu');
    }
};
```

Il y a des images uniques, des feuilles de "sprites" et des fichiers audio chargés par le "framework". Dans cet état, la `preloadBar` _(barre du préchargement)_ affiche la progression à l'écran. Cette progression des éléments chargés est visualisée par le framework avec l'utilisation d'une image. Avec chaque élément chargé, vous pouvez voir plus de l'image `preloadBar`: de 0% à 100%, mis à jour sur chaque image. Une fois que tous les éléments sont chargés, l'état MainMenu est lancé.

### MainMenu.js _(menu principal)_

L'état `MainMenu` montre le menu principal du jeu, sur lequel vous pouvez lancer le jeu en cliquant sur le bouton.

```js
Ball.MainMenu = function(game) {};
Ball.MainMenu.prototype = {
    create: function() {
        this.add.sprite(0, 0, 'screen-mainmenu');
        this.gameTitle = this.add.sprite(Ball._WIDTH*0.5, 40, 'title');
        this.gameTitle.anchor.set(0.5,0);
        this.startButton = this.add.button(Ball._WIDTH*0.5, 200, 'button-start', this.startGame, this, 2, 0, 1);
        this.startButton.anchor.set(0.5,0);
        this.startButton.input.useHandCursor = true;
    },
    startGame: function() {
        this.game.state.start('Howto');
    }
};
```

Pour créer un nouveau bouton, il y a la méthode `add.button` avec la liste suivante d'arguments facultatifs :

- position absolue supérieure sur Canvas en pixels.
- position gauche absolue sur Canvas en pixels.
- nom de l'élément image utilisé par le bouton.
- fonction qui doit être exécutée quand quelqu'un clique sur le bouton.
- le contexte d'exécution.
- cadre de l'objet image utilisé comme état du bouton "hover" _(flottant)_ .
- cadre de l'objet image utilisé comme état du bouton "normal" ou "out" _(en dehors)_.
- cadre de l'objet image utilisé comme état du bouton "click" ou "down" (_en bas_).

`Anchor.set` configure le point d'ancrage du bouton sur lequel tous les calculs de la position sont appliqués. Dans notre cas, il est ancré à mi-chemin du bord gauche et au début du bord supérieur, de sorte qu'il peut être facilement centré horizontalement sur l'écran sans avoir besoin de connaître sa largeur.

Lorsque le bouton de démarrage est enfoncé, au lieu de sauter directement dans l'action, le jeu affichera l'écran avec les informations sur la façon de jouer.

### Howto.js _(comment jouer)_

```js
Ball.Howto = function(game) {
};
Ball.Howto.prototype = {
    create: function() {
        this.buttonContinue = this.add.button(0, 0, 'screen-howtoplay', this.startGame, this);
    },
    startGame: function() {
        this.game.state.start('Game');
    }
};
```

L'état `Howto` affiche les instructions du jeu à l'écran avant de commencer le jeu. Après avoir cliqué sur l'écran, le jeu réel est lancé.

### Game.js (jeu)

L'état `game` à partir du fichier `Game.js` est le lieu où toute la magie opère. Toute l'initialisation est dans la fonction `create ()` (lancée une fois au début du jeu). Après cela, certaines fonctionnalités nécessiteront d'autres codes à contrôler — nous écrirons nos propres fonctions pour gérer des tâches plus complexes. En particulier, notez la fonction `update ()` exécutée à chaque frame, qui met à jour des choses telles que la position de la balle.

```js
Ball.Game = function(game) {};
Ball.Game.prototype = {
    create: function() {},
    initLevels: function() {},
    showLevel: function(level) {},
    updateCounter: function() {},
    managePause: function() {},
    manageAudio: function() {},
    update: function() {},
    wallCollision: function() {},
    handleOrientation: function(e) {},
    finishLevel: function() {}
};
```

Les fonctions `create` et `update` sont spécifiques au framework, tandis que d'autres seront nos créations :

- `initLevels` initialise les données de niveau.
- `showLevel` affiche à l'écran les données du niveau.
- `updateCounter` met à jour le temps passé à jouer chaque niveau et enregistre le temps total passé à jouer sur le jeu.
- `managePause` met en pause et reprend le jeu.
- `manageAudio` allume et éteint le son.
- `wallCollision` est exécuté quand la balle frappe les murs ou d'autres objets.
- `handleOrientation` est la fonction liée à l'événement responsable de l'API d'orientation des périphériques, fournissant les contrôles de mouvement lorsque le jeu est en cours d'exécution sur un périphérique mobile avec le matériel approprié.
- `finishLevel` charge un nouveau niveau lorsque le niveau actuel est terminé ou termine le jeu si le niveau final est terminé.

### Ajout de la balle et de ses mécanismes de mouvement

D'abord, dans la fonction `create`, initialisons l'objet '`ball`' et assignons lui quelques propriétés :

```js
ball = this.add.sprite((320-22)/2, 450, 'ball');
ball.anchor.setTo(0.5, 0.5);
ball.body.bounce.setTo(0.3, 0.3);
ball.body.setCircle(10, 11, 11);
ball.body.linearDamping = 1;
```

On ajoute un "sprite" à une place donnée sur l'écran en utilisant l'image `'ball'`. On ajoute aussi le point de repère de tous les calculs physiques ( '`anchor`' ) au milieu de la balle,  permettant au moteur physique d'arcade (qui gère toute la physique du mouvement de la balle) et en définissant la taille du corps pour la détection de collision . La propriété `bounce` est utilisée pour définir le rebondissement de la balle quand elle frappe les obstacles.

### Contrôle de la balle

C'est déjà sympa d'avoir une balle prête à être lancée dans la zone de jeu, mais c'est aussi important de pouvoir le faire. Maintenant on va ajouter la possibilité de contrôler la balle avec le clavier sur les ordinateurs, et ensuite on ajoutera l'implémentation de l'API Device Orientation ( _gyroscope_). Maintenant, concentrons-nous sur le clavier en ajoutant la ligne suivante pour la fonction `create()` :

```js
this.keys = this.game.input.keyboard.createCursorKeys();
```

Comme vous pouvez le voir, Phaser a une fonction spéciale  `createCursorKeys()` qui nous donnera un objet avec des gestionnaires d'événements pour les quatre touches fléchées : haut, bas, gauche et droite.

Ensuite, nous allons ajouter le code suivant dans la fonction `update ()`, il sera lancé à chaque "frame". L'objet `this.keys` sera vérifié aux pressions de touche du joueur, la balle réagira donc en conséquence :

```js
if(this.keys.left.isDown) {
    this.ball.body.velocity.x -= this.movementForce;
}
else if(this.keys.right.isDown) {
    this.ball.body.velocity.x += this.movementForce;
}
if(this.keys.up.isDown) {
    this.ball.body.velocity.y -= this.movementForce;
}
else if(this.keys.down.isDown) {
    this.ball.body.velocity.y += this.movementForce;
}
```

De cette manière on peut vérifier quelle touche est pressée à un moment donné et appliquer une force définie à la balle, ce qui a pour effet d'augmenter sa vélocité dans la bonne direction.

## Implémentation de l'API Device Orientation (_gyroscopique_)

La particularité du jeu est qu'il utilise l'API gyroscopique sur les mobiles. Grâce à elle, vous pouvez jouer au jeu en inclinant l'appareil dans la direction où vous voulez que la balle aille. Voilà le code de la fonction  `create()` qui l'implémente :

```js
window.addEventListener("deviceorientation", this.handleOrientation, true);
```

L'ajout d'un évènement "listener" à l'évenement `"deviceorientation"` et la modification de la fonction `handleOrientation`ressembleront à ceci :

```js
handleOrientation: function(e) {
    var x = e.gamma;
    var y = e.beta;
    Ball._player.body.velocity.x += x;
    Ball._player.body.velocity.y += y;
}
```

Plus l'appareil est incliné, plus la force appliquée à la balle et sa vélocité sont importantes.

![](cyber-orb-flame-orientation.png)

> **Note :** Pour en savoir plus sur l'implémentation de l'orientation du périphérique et sur le code brut, lisez [Gardez-le au niveau : en réponse aux changements d'orientation du périphérique](/fr/Apps/Build/gather_and_modify_data/responding_to_device_orientation_changes).

### Ajout du trou

L'objectif principal du jeu est de déplacer la balle du point de départ vers le point d'arrivée, qui est dans notre cas, un trou dans le sol. L'implémentation ressemble beaucoup à celle de la création de la balle et est ajoutée dans la fonction `create()` de l'état `Game` :

```js
this.hole = this.add.sprite(Ball._WIDTH*0.5, 90, 'hole');
this.physics.enable(this.hole, Phaser.Physics.ARCADE);
this.hole.anchor.set(0.5);
this.hole.body.setSize(2, 2);
```

La seule différence est que '`hole.body`' est mis à `immovable`_(fixe)_, il ne bougera donc pas quand la balle le touchera et la collision sera alors calculée ( ce point sera approfondit plus loin dans cet article ).

### Création du mur du labyrinthe

Pour rendre le jeu plus difficile et plus intéressant, nous allons ajouter des obstacles entre la balle et la sortie. Nous pourrions utiliser un éditeur de niveau, mais pour ce tutoriel, créons quelque chose par nous-mêmes.

Pour conserver les informations du bloc, nous utiliserons un tableau de données de niveau : pour chaque bloc, nous stockons les positions absolues supérieure et gauche en pixels (`x` et `y`) et le type du bloc - horizontal ou vertical (`t` avec le '`w` 'valeur signifiant largeur et' `h` 'signifiant hauteur). Ensuite, pour charger le niveau, nous allons analyser les données et afficher les blocs spécifiques à ce niveau. Dans la fonction `initLevels`, nous avons :

```js
this.levelData = [
    [
        { x: 96, y: 224, t: 'w' }
    ],
    [
        { x: 72, y: 320, t: 'w' },
        { x: 200, y: 320, t: 'h' },
        { x: 72, y: 150, t: 'w' }
    ],
    // ...
];
```

Chaque élément de tableau contient une collection de blocs avec une position `x` et `y` et une valeur `t` pour chacun. Après `levelData`, mais toujours dans la fonction `initLevels`, nous ajoutons les blocs dans un tableau de la boucle `for` en utilisant certaines des méthodes spécifiques au framework :

```js
for(var i=0; i<this.maxLevels; i++) {
    var newLevel = this.add.group();
    newLevel.enableBody = true;
    newLevel.physicsBodyType = Phaser.Physics.ARCADE;
    for(var e=0; e<this.levelData[i].length; e++) {
        var item = this.levelData[i][e];
        newLevel.create(item.x, item.y, 'element-'+item.t);
    }
    newLevel.setAll('body.immovable', true);
    newLevel.visible = false;
    this.levels.push(newLevel);
}
```

Tout d'abord, `add.group ()` est utilisé pour créer un nouveau groupe d'éléments. Ensuite, le type de corps `ARCADE` est défini pour ce groupe pour activer les calculs physiques. La méthode `newLevel.create` crée de nouveaux éléments dans le groupe avec les positions de départ haut et gauche et sa propre image. Si vous ne souhaitez pas parcourir à nouveau la liste des éléments pour ajouter explicitement une propriété à chacun d'eux, vous pouvez utiliser `setAll` sur un groupe pour l'appliquer à tous les éléments de ce groupe.

Les objets sont stockés dans le tableau `this.levels`, qui est ,par défaut, invisible. Pour charger des niveaux spécifiques, nous nous assurons que les niveaux précédents sont cachés et affichent le niveau actuel :

```js
showLevel: function(level) {
    var lvl = level | this.level;
    if(this.levels[lvl-2]) {
        this.levels[lvl-2].visible = false;
    }
    this.levels[lvl-1].visible = true;
}
```

Grâce à cela, le jeu donne au joueur un défi : il doit maintenant rouler la balle à travers l'aire de jeu et la guider dans le labyrinthe construit à partir des blocs. C'est juste un exemple de chargement des niveaux, et il n'y a que 5, juste pour présenter l'idée, mais vous pouvez travailler à l'étendre par vous-même.

### Détection de collision

À ce stade, nous avons la balle qui est contrôlée par le joueur, le trou à atteindre et les obstacles qui bloquent la route. Il y a un problème cependant : notre jeu n'a pas encore de détection de collision, donc il ne se passe rien quand la balle frappe les blocs, elle passe juste à travers. Réparons-le ! Les bonnes nouvelles sont que le cadre se chargera de calculer la détection de collision, il suffit de spécifier les objets en collision dans la fonction `update ()` :

```js
this.physics.arcade.collide(this.ball, this.borderGroup, this.wallCollision, null, this);
this.physics.arcade.collide(this.ball, this.levels[this.level-1], this.wallCollision, null, this);
```

Cela dira à la structure d'exécuter la fonction `wallCollision` lorsque la balle frappe l'un des murs. Nous pouvons utiliser la fonction `wallCollision` pour ajouter toutes les fonctionnalités que nous voulons comme jouer le son du rebondissement et implémenter l'API Vibration.

#### Ajout de son

Parmi les éléments préchargés, il y avait une piste audio (dans différents formats pour la compatibilité avec les navigateurs), que nous pouvons utiliser maintenant. Il doit d'abord être défini dans la fonction `create ()` :

```js
this.bounceSound = this.game.add.audio('audio-bounce');
```

Si l'état de l'audio est `true` _(vrai)_ (les sons du jeu sont activés), nous pouvons le jouer dans la fonction `wallCollision`:

```js
if(this.audioStatus) {
    this.bounceSound.play();
}
```

C'est tout - charger et jouer les sons est facile avec Phaser.

#### Implementing the Vibration API

Lorsque la détection de collision fonctionne comme prévu, ajoutons quelques effets spéciaux avec l'aide de l'API Vibration.

![](cyber-orb-flame-vibration.png)

La meilleure façon de l'utiliser dans notre cas est de faire vibrer le téléphone chaque fois que la balle frappe les murs, à l'intérieur de la fonction `wallCollision` :

```js
if("vibrate" in window.navigator) {
    window.navigator.vibrate(100);
}
```

Si la méthode `vibrate` est prise en charge par le navigateur et disponible dans l'objet `window.navigator`, faites vibrer le téléphone pendant 100 millisecondes. C'est tout !

### Ajout du temps écoulé

Pour améliorer la rejouabilité et donner aux joueurs l'option de rivaliser les uns avec les autres, nous pouvons introduire le temps écoulé. Grâce à cela, le joueur peut jouer les niveaux encore et encore en essayant d'améliorer son score. Pour implémenter cela dans le jeu, nous devons créer une variable pour stocker le nombre réel de secondes écoulées depuis le début du jeu et le montrer au joueur dans le jeu. Définissons d'abord la variable :

```js
this.timer = 0; // time elapsed in the current level
this.totalTimer = 0; // time elapsed in the whole game
```

Ensuite, juste après, nous pouvons initialiser les objets texte nécessaires à l'affichage de cette information pour l'utilisateur:

```js
this.timerText = this.game.add.text(15, 15, "Time: "+this.timer, this.fontBig);
this.totalTimeText = this.game.add.text(120, 30, "Total time: "+this.totalTimer, this.fontSmall);
```

Nous définissons les positions supérieure et gauche du texte, le contenu qui sera affiché et le style appliqué au texte. Nous l'avons imprimé à l'écran, mais il serait bon de mettre à jour les valeurs toutes les secondes :

```js
this.time.events.loop(Phaser.Timer.SECOND, this.updateCounter, this);
```

Cette boucle, également dans la fonction `create` , exécutera la fonction `updateCounter` à chaque seconde du début du jeu afin que nous puissions appliquer les modifications en conséquence. Voici à quoi ressemble la fonction `updateCounter` complète :

```js
updateCounter: function() {
    this.timer++;
    this.timerText.setText("Time: "+this.timer);
    this.totalTimeText.setText("Total time: "+(this.totalTimer+this.timer));
},
```

Comme vous pouvez le voir, nous incrémentons la variable `this.timer` et mettons à jour le contenu des objets texte avec les valeurs actuelles à chaque itération, de sorte que le joueur voit le temps écoulé.

### Finition du niveau et du jeu

La balle tourne sur l'écran, le minutage fonctionne et nous avons le trou créé que nous devons atteindre. Maintenant, mettons en place la possibilité de finir le niveau ! La ligne suivante de la fonction `update ()` ajoute un écouteur qui se déclenche lorsque la balle arrive au trou.

```js
this.physics.arcade.overlap(this.ball, this.hole, this.finishLevel, null, this);
```

Cela fonctionne de la même manière que la méthode `collide` expliquée précédemment. Lorsque la balle chevauche le trou (au lieu de collision), la fonction `finishLevel` est exécutée :

```js
finishLevel: function() {
    if(this.level >= this.maxLevels) {
        this.totalTimer += this.timer;
        alert('Congratulations, game completed!\nTotal time of play: '+this.totalTimer+' seconds!');
        this.game.state.start('MainMenu');
    }
    else {
        alert('Congratulations, level '+this.level+' completed!');
        this.totalTimer += this.timer;
        this.timer = 0;
        this.level++;
        this.timerText.setText("Time: "+this.timer);
        this.totalTimeText.setText("Total time: "+this.totalTimer);
        this.levelText.setText("Level: "+this.level+" / "+this.maxLevels);
        this.ball.body.x = this.ballStartPos.x;
        this.ball.body.y = this.ballStartPos.y;
        this.ball.body.velocity.x = 0;
        this.ball.body.velocity.y = 0;
        this.showLevel();
    }
},
```

Si le niveau actuel est égal au nombre maximum de niveaux (dans ce cas, 5), le jeu est terminé - vous recevrez un message de félicitations avec le nombre de secondes écoulées pendant toute la partie et un clique sur un bouton vous ramène au menu principal.

Si le niveau actuel est inférieur à 5, toutes les variables nécessaires sont réinitialisées et le niveau suivant est chargé.

## Idées pour de nouvelles fonctionnalités

Ceci est simplement une démonstration de travail d'un jeu qui pourrait avoir beaucoup de fonctionnalités supplémentaires. Nous pouvons par exemple ajouter des "power-ups" à collecter en cours de route qui feront rouler notre balle plus rapidement, arrêter le chronomètre pendant quelques secondes ou donner à la balle des pouvoirs spéciaux pour traverser les obstacles. Il y a aussi de la place pour les pièges qui ralentiront la balle ou rendront le but plus difficile à atteindre. Vous pouvez créer plus de niveaux de difficulté croissante. Vous pouvez même mettre en œuvre des trophées, des classements et des médailles pour différentes actions du jeu. Il y a des possibilités infinies - elles ne dépendent que de votre imagination.

## Résumé

J'espère que ce tutoriel vous aidera à plonger dans le développement de jeux en 2D et vous inspirera pour créer des jeux géniaux par vous-même. Vous pouvez jouer au jeu de démonstration [Cyber Orb](http://orb.enclavegames.com/) et consulter son [code source sur GitHub](https://github.com/EnclaveGames/Cyber-Orb).

HTML5 nous donne des outils bruts, les frameworks construits au-dessus deviennent plus rapides et meilleurs, alors c'est un bon moment pour le développement de jeux web. Dans ce tutoriel, nous avons utilisé Phaser, mais il existe un certain nombre d' [autres frameworks](http://html5devstarter.enclavegames.com/#frameworks) qui méritent d'être considérés aussi, comme [ImpactJS](http://impactjs.com/), [Construct 2](https://www.scirra.com/construct2) ou [PlayCanvas](http://playcanvas.com/) — cela dépend de vos préférences, de vos compétences en codage (ou de leur absence), de l'échelle du projet, des exigences et d'autres aspects. Vous devriez les regarder tous et décider lequel convient le mieux à vos besoins.
