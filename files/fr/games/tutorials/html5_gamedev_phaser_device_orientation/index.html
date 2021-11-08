---
title: Jeu 2D avec l'API Device orientation
slug: Games/Tutorials/HTML5_Gamedev_Phaser_Device_Orientation
translation_of: Games/Tutorials/HTML5_Gamedev_Phaser_Device_Orientation
original_slug: Games/Workflows/HTML5_Gamedev_Phaser_Device_Orientation_FR
---
<div>{{GamesSidebar}}</div><p>{{IncludeSubnav("/fr/docs/Jeux")}}  </p>

<p>Dans ce tutoriel, nous allons passer par le processus de construction d'un jeu mobile HTML5 qui utilise les API  <a href="/fr/Apps/Fundamentals/gather_and_modify_data/responding_to_device_orientation_changes">Device Orientation</a>  et <a href="/fr/docs/Web/API/Vibration_API">Vibration</a>   pour améliorer le "gameplay" et est construit avec le "framework" <a class="external external-icon" href="http://phaser.io/">Phaser </a>. La connaissance JavaScript de base est recommandée pour tirer le meilleur parti de ce tutoriel.</p>

<h2 id="Exemple_de_jeu">Exemple de jeu</h2>

<p>A la fin de ce tutoriel, vous aurez une démo entièrement fonctionnelle du jeu : <a href="http://orb.enclavegames.com/">Cyber Orb</a>. Il ressemblera à quelque chose comme cela :</p>

<p><img src="cyber-orb.png"></p>

<h2 id="Le_framework_Phaser">Le framework Phaser</h2>

<p><a href="http://phaser.io/">Phaser</a> est un framework pour créer des jeux mobiles et PC en utilisant les technologies HTML5. Malgré son manque de maturité, la communauté est assez active, et il évolue rapidement.  Les sources sont<a href="https://github.com/photonstorm/phaser"> sur Github</a>, lisez y la <a href="http://docs.phaser.io/">documentation</a> de base, jetez un œil aux <a href="http://examples.phaser.io/">exemples</a>. Le framework Phaser offre un ensemble d'outils qui permettent d'accélérer le développement et aident à mettre en oeuvre les tâches courantes nécessaires au développement d'un  jeu.</p>

<h2 id="Mise_en_place_du_projet">Mise en place du projet</h2>

<p>Vous pouvez voir <a href="https://github.com/EnclaveGames/Cyber-Orb">le code d'exemple du projet</a> sur GitHub. La structure n'est pas compliquée : le point de départ est le fichier <code>index.html</code> où nous initialisons le framework, mettons en place le {{htmlelement("canvas")}} et jouons au jeu.</p>

<p><img src="cyber-orb-github.png"></p>

<p>Vous pouvez l'ouvir avec votre navigateur préféré pour essayer le jeu. Il y a aussi trois dossiers :</p>

<ul>
 <li><code>img</code> : toutes les images utilisées dans le jeu</li>
 <li><code>src</code> : les fichiers JavaScript où le code source est défini</li>
 <li>audio : tous les fichiers son du jeu</li>
</ul>

<h2 id="Mettre_en_place_le_canevas">Mettre en place le canevas</h2>

<p>Nous voulons un rendu de notre jeu sur un canevas, mais nous ne le ferons pas manuellement - cela sera pris en charge par le framework. Disons-le : notre point de départ est le fichier<code> index.html</code> avec le contenu suivant. Vous pouvez créer vous-même si vous voulez suivre :</p>

<pre class="brush: html">&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;meta charset="utf-8" /&gt;
    &lt;title&gt;Cyber Orb demo&lt;/title&gt;
    &lt;style&gt; body { margin: 0; background: #333; } &lt;/style&gt;
    &lt;script src="src/phaser-arcade-physics.2.2.2.min.js"&gt;&lt;/script&gt;
    &lt;script src="src/Boot.js"&gt;&lt;/script&gt;
    &lt;script src="src/Preloader.js"&gt;&lt;/script&gt;
    &lt;script src="src/MainMenu.js"&gt;&lt;/script&gt;
    &lt;script src="src/Howto.js"&gt;&lt;/script&gt;
    &lt;script src="src/Game.js"&gt;&lt;/script&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;script&gt;
(function() {
    var game = new Phaser.Game(320, 480, Phaser.CANVAS, 'game');
    game.state.add('Boot', Ball.Boot);
    game.state.add('Preloader', Ball.Preloader);
    game.state.add('MainMenu', Ball.MainMenu);
    game.state.add('Howto', Ball.Howto);
    game.state.add('Game', Ball.Game);
    game.state.start('Boot');
})();
&lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;</pre>

<p>Ça ressemble à une simple page de site HTML avec des éléments basiques dans la balise <code>&lt;head&gt;</code> <em>(en-tête)</em> : police de caractères, titre, CSS et inclusion des fichiers Javascript. Le <code>&lt;body&gt;</code> <em>(corps)</em> contient l'initialisation du framework et la définition des états du jeu.</p>

<pre class="brush: js">var game = new Phaser.Game(320, 480, Phaser.CANVAS, 'game');</pre>

<p>La ligne ci-dessus va initialiser l'instance de Phaser - les arguments sont la largeur et la hauteur du canevas, la méthode de rendu (nous utilisons <code>CANVAS</code>, mais il y a aussi les options <code>WEBGL</code> et <code>AUTO</code> disponibles) et l'ID optionnel du conteneur DOM dans lequel nous voulons placer le canevas. Si rien n'est spécifié dans ce dernier argument, ou si l'élément n'est pas trouvé, le <code>canvas</code> sera ajouté à la balise <code>&lt;body&gt;</code>. Sans le framework, pour ajouter l'élément <code>canvas</code> à la page, il faudrait écrire quelque chose comme ça dans la balise <code>&lt;body&gt;</code>:</p>

<pre class="brush: html">&lt;canvas id='game' width='320' height='480'&gt;&lt;/canvas&gt;</pre>

<p>La chose importante à retenir est que le framework met en place des méthodes utiles pour accélérer beaucoup de choses comme la manipulation d'images ou la gestion des éléments, ce qui serait beaucoup plus difficile à faire manuellement.</p>

<div class="note">
<p><strong>Note :</strong> Vous pouvez lire l'article <a href="http://gamedevelopment.tutsplus.com/tutorials/getting-started-with-phaser-building-monster-wants-candy--cms-21723">Building Monster Wants Candy</a> pour une introduction approfondie aux fonctions et méthodes de base de Phaser.</p>
</div>

<p>Retour aux états du jeu : la ligne ci-dessous ajoute un nouvel état appelé Boot au jeu :</p>

<pre class="brush: html">game.state.add('Boot', Ball.Boot);</pre>

<p>La première valeur est le nom de l'état et la seconde est l'objet que nous voulons lui assigner. La méthode  <code>start</code>  démarre l'état donné et le rend actif. Voyons ce que les états sont en réalité. </p>

<h2 id="Gestion_des_états_du_jeu">Gestion des états du jeu</h2>

<p>Les états du jeu dans Phaser sont différentes phases du jeu. Dans notre cas, ils sont chargés depuis des fichiers Javascript pour mieux les maintenir par la suite. Dans ce jeu nous avons les états : <code>Boot <em>(démarrage)</em></code>, <code>Preloader <em>(préchargement)</em></code>, <code>MainMenu <em>(menu principal), </em></code> <code>Howto</code> <em>(comment jouer)</em> et <code>Game <em>(jeu)</em></code>. <code>Boot</code> s'occupe d'initialiser quelques paramètres, <code>Preloader</code> charge tous les graphismes et les sons, <code>MainMenu</code> est le menu avec le bouton start, <code>Howto</code> affiche les instructions "comment jouer" et <code>Game</code>, est l'état qui permet de  jouer. Passons rapidement au contenu de ces états.</p>

<h3 id="Boot.js_(démarrage)">Boot.js <em>(démarrage)</em></h3>

<p>L'état <code>Boot</code> est le premier du jeu.</p>

<pre class="brush: js">var Ball = {
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
};</pre>

<p>Le principal objet "<code>Ball</code>"  est défini et nous ajoutons deux variables appelées <code>_WIDTH</code> et <code>_HEIGHT</code> qui sont la largeur et la hauteur du caneva du jeu  —  elles nous aideront à positionner les éléments à l'écran. Nous chargeons d'abord deux images qui seront utilisées plus tard dans l'état <code>Preload</code> <em>(préchargement)</em> pour montrer la progression du chargement de tous les autres éléments. La fonction <code>create</code> contient une configuration de base : nous configurons la mise à l'échelle et l'alignement du canevas et passons à l'état <code>Preload</code>  lorsque tout est prêt.</p>

<h3 id="Preloader.js_(préchargement)">Preloader.js <em>(préchargement)</em></h3>

<p>L'état <code>Preloader</code> prend soin de charger tous les éléments :</p>

<pre class="brush: js">Ball.Preloader = function(game) {};
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
};</pre>

<p>Il y a des images uniques, des feuilles de "sprites" et des fichiers audio chargés par le "framework". Dans cet état, la <code>preloadBar</code> <em>(barre du préchargement)</em> affiche la progression à l'écran. Cette progression des éléments chargés est visualisée par le framework avec l'utilisation d'une image. Avec chaque élément chargé, vous pouvez voir plus de l'image <code>preloadBar</code>: de 0% à 100%, mis à jour sur chaque image. Une fois que tous les éléments sont chargés, l'état MainMenu est lancé.</p>

<h3 id="MainMenu.js_(menu_principal)">MainMenu.js <em>(menu principal)</em></h3>

<p>L'état <code>MainMenu</code> montre le menu principal du jeu, sur lequel vous pouvez lancer le jeu en cliquant sur le bouton.</p>

<pre class="brush: js">Ball.MainMenu = function(game) {};
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
};</pre>

<p>Pour créer un nouveau bouton, il y a la méthode <code>add.button</code> avec la liste suivante d'arguments facultatifs :</p>

<ul>
 <li>position absolue supérieure sur Canvas en pixels.</li>
 <li>position gauche absolue sur Canvas en pixels.</li>
 <li>nom de l'élément image utilisé par le bouton.</li>
 <li>fonction qui doit être exécutée quand quelqu'un clique sur le bouton.</li>
 <li>le contexte d'exécution.</li>
 <li>cadre  de l'objet image utilisé comme état du bouton "hover" <em>(flottant)</em> .</li>
 <li>cadre de l'objet image utilisé comme état du bouton "normal" ou "out" <em>(en dehors)</em>.</li>
 <li>cadre de l'objet image utilisé comme état du bouton "click" ou "down" (<em>en bas</em>).</li>
</ul>

<p><code>Anchor.set</code> configure le point d'ancrage du bouton sur lequel tous les calculs de la position sont appliqués. Dans notre cas, il est ancré à mi-chemin du bord gauche et au début du bord supérieur, de sorte qu'il peut être facilement centré horizontalement sur l'écran sans avoir besoin de connaître sa largeur.</p>

<p>Lorsque le bouton de démarrage est enfoncé, au lieu de sauter directement dans l'action, le jeu affichera l'écran avec les informations sur la façon de jouer.</p>

<h3 id="Howto.js_(comment_jouer)">Howto.js <em>(comment jouer)</em></h3>

<pre class="brush: js">Ball.Howto = function(game) {
};
Ball.Howto.prototype = {
    create: function() {
        this.buttonContinue = this.add.button(0, 0, 'screen-howtoplay', this.startGame, this);
    },
    startGame: function() {
        this.game.state.start('Game');
    }
};</pre>

<p>L'état <code>Howto</code> affiche les instructions du jeu à l'écran avant de commencer le jeu. Après avoir cliqué sur l'écran, le jeu réel est lancé.</p>

<h3 id="Game.js_(jeu)">Game.js (jeu)</h3>

<p>L'état <code>game</code> à partir du fichier <code>Game.js</code> est le lieu où toute la magie opère. Toute l'initialisation est dans la fonction <code>create ()</code> (lancée une fois au début du jeu). Après cela, certaines fonctionnalités nécessiteront d'autres codes à contrôler  —  nous écrirons nos propres fonctions pour gérer des tâches plus complexes. En particulier, notez  la fonction <code>update ()</code> exécutée à chaque frame, qui met à jour des choses telles que la position de la balle.</p>

<pre class="brush: js">Ball.Game = function(game) {};
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
};</pre>

<p>Les fonctions <code>create</code> et <code>update</code> sont spécifiques au framework, tandis que d'autres seront nos créations :</p>

<ul>
 <li><code>initLevels</code> initialise les données de niveau.</li>
 <li><code>showLevel</code> affiche à l'écran les données du niveau.</li>
 <li><code>updateCounter</code> met à jour le temps passé à jouer chaque niveau et enregistre le temps total passé à jouer sur le jeu. </li>
 <li><code>managePause</code> met en pause et reprend le jeu.</li>
 <li><code>manageAudio</code> allume et éteint le son.</li>
 <li><code>wallCollision</code> est exécuté quand la balle frappe les murs ou d'autres objets.</li>
 <li><code>handleOrientation</code> est la fonction liée à l'événement responsable de l'API d'orientation des périphériques, fournissant les contrôles de mouvement lorsque le jeu est en cours d'exécution sur un périphérique mobile avec le matériel approprié.</li>
 <li><code>finishLevel</code> charge un nouveau niveau lorsque le niveau actuel est terminé ou termine le jeu si le niveau final est terminé.</li>
</ul>

<h3 id="Ajout_de_la_balle_et_de_ses_mécanismes_de_mouvement">Ajout de la balle et de ses mécanismes de mouvement</h3>

<p>D'abord, dans la fonction <code>create</code>, initialisons l'objet '<code>ball</code>' et assignons lui quelques propriétés :</p>

<pre class="brush: js">ball = this.add.sprite((320-22)/2, 450, 'ball');
ball.anchor.setTo(0.5, 0.5);
ball.body.bounce.setTo(0.3, 0.3);
ball.body.setCircle(10, 11, 11);
ball.body.linearDamping = 1;</pre>

<p>On ajoute un "sprite" à une place donnée sur l'écran en utilisant l'image <code>'ball'</code>. On ajoute aussi le point de repère de tous les calculs physiques ( '<code>anchor</code>' ) au milieu de la balle,  permettant au moteur physique d'arcade (qui gère toute la physique du mouvement de la balle) et en définissant la taille du corps pour la détection de collision . La propriété  <code>bounce</code> est utilisée pour définir le rebondissement de la balle quand elle frappe les obstacles.</p>

<h3 id="Contrôle_de_la_balle">Contrôle de la balle</h3>

<p>C'est déjà sympa d'avoir une balle prête à être lancée dans la zone de jeu, mais c'est aussi important de pouvoir le faire. Maintenant on va ajouter la possibilité de contrôler la balle avec le clavier sur les ordinateurs, et ensuite on ajoutera l'implémentation de l'API  Device Orientation ( <em>gyroscope</em>). Maintenant, concentrons-nous sur le clavier en ajoutant la ligne suivante pour la fonction <code>create()</code> :</p>

<pre class="brush: js">this.keys = this.game.input.keyboard.createCursorKeys();</pre>

<p>Comme vous pouvez le voir, Phaser a une fonction spéciale  <code>createCursorKeys()</code> qui nous donnera un objet avec des gestionnaires d'événements pour les quatre touches fléchées : haut, bas, gauche et droite. </p>

<p>Ensuite, nous allons ajouter le code suivant dans la fonction <code>update ()</code>, il sera lancé à chaque "frame". L'objet <code>this.keys</code> sera vérifié aux pressions de touche du joueur, la balle réagira donc en conséquence :</p>

<pre class="brush: js">if(this.keys.left.isDown) {
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
}</pre>

<p>De cette manière on peut vérifier quelle touche est pressée à un moment donné et appliquer une force définie à la balle, ce qui a pour effet d'augmenter sa vélocité dans la bonne direction.</p>

<h2 id="Implémentation_de_l'API_Device_Orientation_(gyroscopique)">Implémentation de l'API Device Orientation (<em>gyroscopique</em>)</h2>

<p>La particularité du jeu est qu'il utilise l'API gyroscopique sur les mobiles. Grâce à elle, vous pouvez jouer au jeu en inclinant l'appareil dans la direction où vous voulez que la balle aille. Voilà le code de la fonction  <code>create()</code> qui l'implémente :</p>

<pre class="brush: js">window.addEventListener("deviceorientation", this.handleOrientation, true);</pre>

<p>L'ajout d'un évènement "listener" à l'évenement <code>"deviceorientation"</code> et la modification de la fonction <code>handleOrientation</code>ressembleront à ceci :</p>

<pre class="brush: js">handleOrientation: function(e) {
    var x = e.gamma;
    var y = e.beta;
    Ball._player.body.velocity.x += x;
    Ball._player.body.velocity.y += y;
}</pre>

<p>Plus l'appareil est incliné, plus la force appliquée à la balle et sa vélocité sont importantes.</p>

<p><img src="cyber-orb-flame-orientation.png"></p>

<div class="note">
<p><strong>Note :</strong> Pour en savoir plus sur l'implémentation de l'orientation du périphérique et sur le code brut, lisez <a href="/fr/Apps/Build/gather_and_modify_data/responding_to_device_orientation_changes">Gardez-le au niveau : en réponse aux changements d'orientation du périphérique</a>. </p>
</div>

<h3 id="Ajout_du_trou">Ajout du trou</h3>

<p>L'objectif principal du jeu est de déplacer la balle du point de départ vers le point d'arrivée, qui est dans notre cas, un trou dans le sol. L'implémentation ressemble beaucoup à celle de la création de la balle et est ajoutée dans la fonction <code>create()</code> de l'état <code>Game</code> :</p>

<pre class="brush: js">this.hole = this.add.sprite(Ball._WIDTH*0.5, 90, 'hole');
this.physics.enable(this.hole, Phaser.Physics.ARCADE);
this.hole.anchor.set(0.5);
this.hole.body.setSize(2, 2);</pre>

<p>La seule différence est que '<code>hole.body</code>' est mis à <code>immovable</code><em>(fixe)</em>, il ne bougera donc pas quand la balle le touchera et la collision sera alors calculée ( ce point sera approfondit plus loin dans cet article ).</p>

<h3 id="Création_du_mur_du_labyrinthe">Création du mur du labyrinthe</h3>

<p>Pour rendre le jeu plus difficile et plus intéressant, nous allons ajouter des obstacles entre la balle et la sortie. Nous pourrions utiliser un éditeur de niveau, mais pour ce tutoriel, créons quelque chose par nous-mêmes.</p>

<p>Pour conserver les informations du bloc, nous utiliserons un tableau de données de niveau : pour chaque bloc, nous stockons les positions absolues supérieure et gauche en pixels (<code>x</code> et <code>y</code>) et le type du bloc - horizontal ou vertical (<code>t</code> avec le '<code>w</code> 'valeur signifiant largeur et' <code>h</code> 'signifiant hauteur). Ensuite, pour charger le niveau, nous allons analyser les données et afficher les blocs spécifiques à ce niveau. Dans la fonction <code>initLevels</code>, nous avons :</p>

<pre class="brush: js">this.levelData = [
    [
        { x: 96, y: 224, t: 'w' }
    ],
    [
        { x: 72, y: 320, t: 'w' },
        { x: 200, y: 320, t: 'h' },
        { x: 72, y: 150, t: 'w' }
    ],
    // ...
];</pre>

<p>Chaque élément de tableau contient une collection de blocs avec une position <code>x</code> et <code>y</code> et une valeur <code>t</code> pour chacun. Après <code>levelData</code>, mais toujours dans la fonction <code>initLevels</code>, nous ajoutons les blocs dans un tableau de la boucle <code>for</code> en utilisant certaines des méthodes spécifiques au framework :</p>

<pre class="brush: js">for(var i=0; i&lt;this.maxLevels; i++) {
    var newLevel = this.add.group();
    newLevel.enableBody = true;
    newLevel.physicsBodyType = Phaser.Physics.ARCADE;
    for(var e=0; e&lt;this.levelData[i].length; e++) {
        var item = this.levelData[i][e];
        newLevel.create(item.x, item.y, 'element-'+item.t);
    }
    newLevel.setAll('body.immovable', true);
    newLevel.visible = false;
    this.levels.push(newLevel);
}</pre>

<p>Tout d'abord, <code>add.group ()</code> est utilisé pour créer un nouveau groupe d'éléments. Ensuite, le type de corps <code>ARCADE</code> est défini pour ce groupe pour activer les calculs physiques. La méthode <code>newLevel.create</code> crée de nouveaux éléments dans le groupe avec les positions de départ haut et gauche et sa propre image. Si vous ne souhaitez pas parcourir à nouveau la liste des éléments pour ajouter explicitement une propriété à chacun d'eux, vous pouvez utiliser <code>setAll</code> sur un groupe pour l'appliquer à tous les éléments de ce groupe.<br>
 <br>
 Les objets sont stockés dans le tableau <code>this.levels</code>, qui est ,par défaut, invisible. Pour charger des niveaux spécifiques, nous nous assurons que les niveaux précédents sont cachés et affichent le niveau actuel :</p>

<pre class="brush: js">showLevel: function(level) {
    var lvl = level | this.level;
    if(this.levels[lvl-2]) {
        this.levels[lvl-2].visible = false;
    }
    this.levels[lvl-1].visible = true;
}</pre>

<p>Grâce à cela, le jeu donne au joueur un défi : il doit maintenant rouler la balle à travers l'aire de jeu et la guider dans le labyrinthe construit à partir des blocs. C'est juste un exemple de chargement des niveaux, et il n'y a que 5, juste pour présenter l'idée, mais vous pouvez travailler à l'étendre par vous-même.</p>

<h3 id="Détection_de_collision">Détection de collision</h3>

<p>À ce stade, nous avons la balle qui est contrôlée par le joueur, le trou à atteindre et les obstacles qui bloquent la route. Il y a un problème cependant : notre jeu n'a pas encore de détection de collision, donc il ne se passe rien quand la balle frappe les blocs, elle passe juste à travers. Réparons-le ! Les bonnes nouvelles sont que le cadre se chargera de calculer la détection de collision, il suffit de spécifier les objets en collision dans la fonction <code>update ()</code> :</p>

<pre class="brush: js">this.physics.arcade.collide(this.ball, this.borderGroup, this.wallCollision, null, this);
this.physics.arcade.collide(this.ball, this.levels[this.level-1], this.wallCollision, null, this);</pre>

<p>Cela dira à la structure d'exécuter la fonction <code>wallCollision</code> lorsque la balle frappe l'un des murs. Nous pouvons utiliser la fonction <code>wallCollision</code> pour ajouter toutes les fonctionnalités que nous voulons comme jouer le son du rebondissement et implémenter l'API Vibration.</p>

<h4 id="Ajout_de_son">Ajout de son</h4>

<p>Parmi les éléments préchargés, il y avait une piste audio (dans différents formats pour la compatibilité avec les navigateurs), que nous pouvons utiliser maintenant. Il doit d'abord être défini dans la fonction <code>create ()</code> :</p>

<pre class="brush: js">this.bounceSound = this.game.add.audio('audio-bounce');</pre>

<p>Si l'état de l'audio est <code>true</code> <em>(vrai)</em> (les sons du jeu sont activés), nous pouvons le jouer dans la fonction <code>wallCollision</code>:</p>

<pre class="brush: js">if(this.audioStatus) {
    this.bounceSound.play();
}</pre>

<p>C'est tout - charger et jouer les sons est facile avec Phaser.</p>

<h4 id="Implementing_the_Vibration_API">Implementing the Vibration API</h4>

<p>Lorsque la détection de collision fonctionne comme prévu, ajoutons quelques effets spéciaux avec l'aide de l'API Vibration.</p>

<p><img src="cyber-orb-flame-vibration.png"></p>

<p>La meilleure façon de l'utiliser dans notre cas est de faire vibrer le téléphone chaque fois que la balle frappe les murs, à l'intérieur de la fonction <code>wallCollision</code> :</p>

<pre class="brush: js">if("vibrate" in window.navigator) {
    window.navigator.vibrate(100);
}</pre>

<p>Si la méthode <code>vibrate</code> est prise en charge par le navigateur et disponible dans l'objet <code>window.navigator</code>, faites vibrer le téléphone pendant 100 millisecondes. C'est tout !</p>

<h3 id="Ajout_du_temps_écoulé">Ajout du temps écoulé</h3>

<p>Pour améliorer la rejouabilité et donner aux joueurs l'option de rivaliser les uns avec les autres, nous pouvons introduire le temps écoulé. Grâce à cela, le joueur peut jouer les niveaux encore et encore en essayant d'améliorer son score. Pour implémenter cela dans le jeu, nous devons créer une variable pour stocker le nombre réel de secondes écoulées depuis le début du jeu et le montrer au joueur dans le jeu. Définissons d'abord la variable :</p>

<pre class="brush: js">this.timer = 0; // time elapsed in the current level
this.totalTimer = 0; // time elapsed in the whole game</pre>

<p>Ensuite, juste après, nous pouvons initialiser les objets texte nécessaires à l'affichage de cette information pour l'utilisateur:</p>

<pre class="brush: js">this.timerText = this.game.add.text(15, 15, "Time: "+this.timer, this.fontBig);
this.totalTimeText = this.game.add.text(120, 30, "Total time: "+this.totalTimer, this.fontSmall);</pre>

<p>Nous définissons les positions supérieure et gauche du texte, le contenu qui sera affiché et le style appliqué au texte. Nous l'avons imprimé à l'écran, mais il serait bon de mettre à jour les valeurs toutes les secondes :</p>

<pre class="brush: js">this.time.events.loop(Phaser.Timer.SECOND, this.updateCounter, this);</pre>

<p>Cette boucle, également dans la fonction  <code>create</code> , exécutera la fonction <code>updateCounter</code> à chaque seconde du début du jeu afin que nous puissions appliquer les modifications en conséquence. Voici à quoi ressemble la fonction <code>updateCounter</code> complète :</p>

<pre class="brush: js">updateCounter: function() {
    this.timer++;
    this.timerText.setText("Time: "+this.timer);
    this.totalTimeText.setText("Total time: "+(this.totalTimer+this.timer));
},</pre>

<p>Comme vous pouvez le voir, nous incrémentons la variable <code>this.timer</code> et mettons à jour le contenu des objets texte avec les valeurs actuelles à chaque itération, de sorte que le joueur voit le temps écoulé.</p>

<h3 id="Finition_du_niveau_et_du_jeu">Finition du niveau et du jeu</h3>

<p>La balle tourne sur l'écran, le minutage fonctionne et nous avons le trou créé que nous devons atteindre. Maintenant, mettons en place la possibilité de finir le niveau ! La ligne suivante de la fonction <code>update ()</code> ajoute un écouteur qui se déclenche lorsque la balle arrive au trou.</p>

<pre class="brush: js">this.physics.arcade.overlap(this.ball, this.hole, this.finishLevel, null, this);</pre>

<p>Cela fonctionne de la même manière que la méthode <code>collide</code> expliquée précédemment. Lorsque la balle chevauche le trou (au lieu de collision), la fonction <code>finishLevel</code> est exécutée :</p>

<pre class="brush: js">finishLevel: function() {
    if(this.level &gt;= this.maxLevels) {
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
},</pre>

<p>Si le niveau actuel est égal au nombre maximum de niveaux (dans ce cas, 5), le jeu est terminé - vous recevrez un message de félicitations avec le nombre de secondes écoulées pendant toute la partie et un clique sur un bouton vous ramène au menu principal.</p>

<p>Si le niveau actuel est inférieur à 5, toutes les variables nécessaires sont réinitialisées et le niveau suivant est chargé.</p>

<h2 id="Idées_pour_de_nouvelles_fonctionnalités">Idées pour de nouvelles fonctionnalités</h2>

<p>Ceci est simplement une démonstration de travail d'un jeu qui pourrait avoir beaucoup de fonctionnalités supplémentaires. Nous pouvons par exemple ajouter des "power-ups" à collecter en cours de route qui feront rouler notre balle plus rapidement, arrêter le chronomètre pendant quelques secondes ou donner à la balle des pouvoirs spéciaux pour traverser les obstacles. Il y a aussi de la place pour les pièges qui ralentiront la balle ou rendront le but plus difficile à atteindre. Vous pouvez créer plus de niveaux de difficulté croissante. Vous pouvez même mettre en œuvre des trophées, des classements et des médailles pour différentes actions du jeu. Il y a des possibilités infinies - elles ne dépendent que de votre imagination.</p>

<h2 id="Résumé">Résumé</h2>

<p>J'espère que ce tutoriel vous aidera à plonger dans le développement de jeux en 2D et vous inspirera pour créer des jeux géniaux par vous-même. Vous pouvez jouer au jeu de démonstration <a href="http://orb.enclavegames.com/">Cyber Orb</a> et consulter son <a href="https://github.com/EnclaveGames/Cyber-Orb">code source sur GitHub</a>.</p>

<p>HTML5 nous donne des outils bruts, les frameworks construits au-dessus deviennent plus rapides et meilleurs, alors c'est un bon moment pour le développement de jeux web. Dans ce tutoriel, nous avons utilisé Phaser, mais il existe un certain nombre d' <a href="http://html5devstarter.enclavegames.com/#frameworks">autres frameworks</a> qui méritent d'être considérés aussi, comme <a href="http://impactjs.com/">ImpactJS</a>, <a href="https://www.scirra.com/construct2">Construct 2</a> ou <a href="http://playcanvas.com/">PlayCanvas</a> — cela dépend de vos préférences, de vos compétences en codage (ou de leur absence), de l'échelle du projet, des exigences et d'autres aspects. Vous devriez les regarder tous et décider lequel convient le mieux à vos besoins.</p>
