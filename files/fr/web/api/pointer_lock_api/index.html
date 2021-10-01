---
title: Pointer Lock API
slug: Web/API/Pointer_Lock_API
tags:
  - API
  - Avancé
  - Jeux
  - Reference
  - mouse lock
  - pointer lock
translation_of: Web/API/Pointer_Lock_API
original_slug: WebAPI/Pointer_Lock
---
<div>{{DefaultAPISidebar("Pointer Lock API")}}</div>

<p><strong>Pointer lock</strong> (en français <em>Verrouillage du pointeur</em>, précedement appelé mouse lock) permet d'obtenir des informations sur le déplacement de la souris à travers le temps, et ne se cantonne pas à fournir la position absolue du curseur sur l'écran. Cette interface donne accès aux données brutes de la souris, permet de verrouiller la cible des évènements à un élément unique, limiter jusqu'où le mouvement de la souris peut aller dans une direction donnée et cacher le curseur de la vue.<br>
 <br>
 Cette API est utile pour les applications qui ont besoin d'écouter la souris pour contrôler des mouvements ou faire pivoter des objets sur leurs axes. Les jeux 3D de type FPS (First Person Shooter), les outils de modelisation, les vidéos immersives ou encore les cartes satellites sont autant de candidats idéals. L'utilisateur peut en effet changer l'angle de vue en bougeant simplement sa souris et sans cliquer sur aucun bouton ce qui les laisse donc disponibles pour effectuer d'autres actions.<br>
 <br>
 Comme Pointer lock continue de déclencher des évènements même quand le curseur est en dehors des limites du navigateur ou de l'écran, les joueurs peuvent cliquer sur les boutons et déplacer le curseur de la souris sans se soucier de quitter la zone de jeu et de cliquer accidentellement sur une autre application qui changerait le focus de la souris en dehors du jeu.</p>

<h2 id="basics">Concepts de base</h2>

<p>Pointer Lock partage des similtudes avec la <a href="/fr/docs/Web/API/Element/setCapture">capture de souris</a>. La capture de souris offre un flot ininterrompu d'évènements sur un élément cible quand la souris glisse mais s'arrête quand le bouton est relaché. Pour cette raison, Pointer lock diffère de la capture de souris sur les points suivants :</p>

<ul>
 <li>Persistance. Pointer lock ne libère pas la souris tant qu'un appel explicite à l'API n'a pas été effectué ou que l'utilisateur n'a pas fait un mouvement spécifique.</li>
 <li>Ne se limite pas aux bordures du navigateur ou de l'écran.</li>
 <li>Continue de déclencher des évènements peu importe l'état des boutons de la souris.</li>
 <li>Cache le curseur.</li>
</ul>

<h2 id="method_overview">Vue d'ensemble des méthodes/propriétées</h2>

<p>Cette section fournit une brève description de chaque propriété et méthode associée à la spécification de Pointer Lock.</p>

<h3 id="requestPointerLock()">requestPointerLock()</h3>

<p>L'API Pointer lock, de manière similaire à l'<a href="/fr/docs/Web/Guide/DOM/Using_full_screen_mode">API Fullscreen</a>, étend les les éléments DOM en ajoutant une nouvelle méthode, {{domxref("Element.requestPointerLock","requestPointerLock()")}}. Comme le préfixe fournisseur a récemment été retiré, vous devriez utiliser la syntaxe ci-dessous, par exemple pour demander un verrouillage deu pointeur sur un élément <code>canvas</code>:</p>

<pre class="brush: js">canvas.requestPointerLock = canvas.requestPointerLock ||
                            canvas.mozRequestPointerLock ||
                            canvas.webkitPointerLockElement;

canvas.requestPointerLock()</pre>

<h3 id="pointerLockElement_et_exitPointerLock()">pointerLockElement et exitPointerLock()</h3>

<p>L'API Pointer Lock étend également l'interface {{domxref("Document")}}, ajoutant à la fois une nouvelle propriété et une nouvelle méthode. La propriété {{domxref("Document.pointerLockElement","pointerLockElement")}}  est utilisée pour accéder à l'élément actuellement verrouillé (s'il y en a). La méthode {{domxref("Document.exitPointerLock","exitPointerLock()")}}  est utilisée pour libérer le verrou du pointeur.</p>

<p>La propriété {{domxref("Document.pointerLockElement","pointerLockElement")}}  est utile pour déterminer si un élément est actuellement verrouillé (pour une vérification booléenne par exemple) et également pour obtenir une référence vers l'élément s'il existe.</p>

<p>Voici un exemple d'utilisation de <code>pointerLockElement</code>:</p>

<pre class="brush: js">document.pointerLockElement = document.pointerLockElement    ||
                              document.mozPointerLockElement ||
                              document.webkitPointerLockElement;

// 1) Utiliser une vérification booléenne--le pointeur est-il verrouillé?
if (!!document.pointerLockElement) {
  // pointeur verrouillé
} else {
  // pointeur non verrouillé
}

// 2) Accéder à l'élément verrouillé
if (document.pointerLockElement === someElement) {
  // someElement est l'élément sur lequel le pointeur est verrouillé
}
</pre>

<p>La méthode {{domxref("Document.exitPointerLock()")}} est utilisée pour libérer le verrouillage du pinteur, et, comme {{domxref("Element.requestPointerLock","requestPointerLock")}}, marche de manière asynchrone, on utilise les événements {{event("pointerlockchange")}} et {{event("pointerlockerror")}}, que vous verrez plus en détails ci-dessous.</p>

<pre class="brush: js">document.exitPointerLock = document.exitPointerLock    ||
                           document.mozExitPointerLock ||
                           document.webkitExitPointerLock;

// Essaie de déverrouiller
document.exitPointerLock();
</pre>

<h2 id="mouselocklostevent">Événement pointerlockchange</h2>

<p>Quand l'état de verrouillage du pointeur change — par exemple quand on appelle {{domxref("Element.requestPointerLock","requestPointerLock()")}}, {{domxref("Document.exitPointerLock","exitPointerLock()")}}, que l'utilisateur presse la touche ECHAP, etc.—l'événement {{event("pointerlockchange")}} est envoyé au <code>document</code>. C'est un simple événement qui ne contient pas de données supplémentaires.</p>

<pre class="brush: js">document.pointerLockElement = document.pointerLockElement    ||
                              document.mozPointerLockElement ||
                              document.webkitPointerLockElement;

function pointerLockChange() {
  if (!!document.pointerLockElement) {
    console.log("Verrouillé.");
  } else {
    console.log("Non verrouillé.");
  }
}

document.addEventListener('pointerlockchange', pointerLockChange, false);
document.addEventListener('mozpointerlockchange', pointerLockChange, false);
document.addEventListener('webkitpointerlockchange', pointerLockChange, false);
</pre>

<h2 id="mouselocklostevent">Événement pointerlockerror</h2>

<p>Quand une erreur est causée par l'appel de {{domxref("Element.requestPointerLock","requestPointerLock()")}} ou {{domxref("Document.exitPointerLock","exitPointerLock()")}}, l'événement {{event("pointerlockerror")}} est envoyé au <code>document</code>. C'est un simple événement qui ne contient pas de données supplémentaires.</p>

<pre class="brush: js">document.addEventListener('pointerlockerror', lockError, false);
document.addEventListener('mozpointerlockerror', lockError, false);
document.addEventListener('webkitpointerlockerror', pointerLockChange, false);

function lockError(e) {
  alert("Pointer lock failed");
}
</pre>

<div class="note">
  <p><strong>Note :</strong> Jusqu'à Firefox 50, les événements ci-dessus étaient préfixés avec <code>moz</code>.</p>
</div>

<h2 id="extensions">Extensions aux événements de souris</h2>

<p>L'API Pointer lock étend l'interface {{domxref("MouseEvent")}} normale avec les attributs de mouvement. Deux nouveaux attributs sont ajoutés aux événements de souris —{{domxref("MouseEvent.movementX","movementX")}} et {{domxref("MouseEvent.movementY","movementY")}}— fournissant le changement de position de la souris. Ces paramètres ont pour valeur les différences entre les valeurs des propriétés de {{domxref("MouseEvent.screenX","screenX")}} / {{domxref("MouseEvent.screenY","screenY")}} stockées dans les événements {{event("mousemove")}}, <code>eNow</code> et <code>ePrevious</code>. En d'autres termes, <code>movementX = eNow.screenX - ePrevious.screenX</code>.</p>

<h3 id="locked_state">État verrouillé</h3>

<p>Quand le verrouillage du pointeur est activé, les propriétés standard {{domxref("MouseEvent.clientX","clientX")}}, {{domxref("MouseEvent.clientY","clientY")}}, {{domxref("MouseEvent.screenX","screenX")}}, et {{domxref("MouseEvent.screenY","screenY")}} sont gardées constantes, comme si la souris ne bougeait pas. Les propriétés {{domxref("MouseEvent.movementX","movementX")}} et {{domxref("MouseEvent.movementY","movementY")}} continuent de fournir le changement de position de la souris. Il n'y a pas de limite aux valeurs {{domxref("MouseEvent.movementX","movementX")}} et {{domxref("MouseEvent.movementY","movementY")}}, si la souris continue de bouger toujours dans la même direction. Le curseur de la souris n'existe pas et il ne peut pas sortir de la fenêtre ou être bloqué par un bord de l'écran.</p>

<h3 id="unlocked_state">État déverrouillé</h3>

<p>Les paramètres {{domxref("MouseEvent.movementX","movementX")}} et {{domxref("MouseEvent.movementY","movementY")}} sont disponibles quel que soit l'état de la souris, verrou ou non.</p>

<p>Quand la souris est déverrouillée, il est possible que le curseur soit en dehors de la fenêtre et il est alors remis automatiquement à l'intérieur. Si cela arrive, {{domxref("MouseEvent.movementX","movementX")}} et {{domxref("MouseEvent.movementY","movementY")}} sont définis à zéro.</p>

<h2 id="example">Simple exemple pas à pas</h2>

<p>Nous avons écrit une <a href="https://mdn.github.io/dom-examples/pointer-lock/">démo de verrouillage de pointer</a> pour vous montrer comment l'utiliser pour mettre en place un système de contrôle simple (<a href="https://github.com/mdn/dom-examples/tree/master/pointer-lock">voir le code source</a>). La démo ressemble à ça:</p>

<p><img alt="Un cercle rouge sur un arrière-plan noir." src="pointer-lock.png"></p>

<p>Cette démo utilise JavaScript pour dessiner une balle dans un élément {{ htmlelement("canvas") }}. Quand vous cliquez sur le canvas, le verrouillage du pointeur est utilisé pour supprimer le curseur de la souris à l'écran et vous permettre de déplacer la balle avec la souris. Voyons comment cela fonctionne.</p>

<p>On définit les positions initiales x et y sur le canvas:</p>

<pre class="brush: js">var x = 50;
var y = 50;</pre>

<p>Les méthodes de verrouillage de pointeur sont préfixées dans les anciennes versions des navigateurs, on prend donc en compte les différentes implémentations des navigateurs:</p>

<pre class="brush: js">canvas.requestPointerLock = canvas.requestPointerLock ||
                            canvas.mozRequestPointerLock ||
                            canvas.webkitRequestPointerLock;

document.exitPointerLock = document.exitPointerLock ||
                           document.mozExitPointerLock ||
                           document.webkitExitPointerLock;</pre>

<p>Maintenant, on définit un gestionnaire d'événement qui appelle la méthode <code>requestPointerLock()</code> quand le canvas est cliqué, ce qui déclenche le verrouillage du pointeur.</p>

<pre class="brush: js">canvas.onclick = function() {
  canvas.requestPointerLock();
}</pre>

<p>Et maintenant le gestionnaire d'événement pour le verrouillage: <code>pointerlockchange</code>. Quand cet événement se déclenche, on appelle <code>lockChangeAlert()</code> pour gérer le changement.</p>

<pre class="brush: js">// Gestionnaire d'événement de changement d'état du verrouilllage pour les différents navigateurs
document.addEventListener('pointerlockchange', lockChangeAlert, false);
document.addEventListener('mozpointerlockchange', lockChangeAlert, false);
document.addEventListener('webkitpointerlockchange', lockChangeAlert, false);
</pre>

<p>La fonction suivante vérifie si la propriété <code>pointLockElement</code> est sur notre canvas. Si c'est le cas, on attache un gestionnaire d'événement pour gérer les mouvements de la souris avec la fonction <code>updatePosition()</code>. Sinon, elle enlève le gestionnaire d'événement.</p>

<pre class="brush: js">function lockChangeAlert() {
  if (document.pointerLockElement === canvas) {
    console.log('The pointer lock status is now locked');
    document.addEventListener("mousemove", updatePosition, false);
  } else {
    console.log('The pointer lock status is now unlocked');
    document.removeEventListener("mousemove", updatePosition, false);
  }
}</pre>

<p>La fonction <code>updatePosition()</code> met à jour la position de la balle sur le canvas (les valeurs <code>x</code> et <code>y</code>), et inclut également des instructions <code>if()</code> pour vérifier si la balle est sortie des bords du canvas. Dans ce cas, la balle se ressort au bord opposé. Elle vérifie également si un appel à <code><a href="/fr/docs/Web/API/Window/requestAnimationFrame">requestAnimationFrame()</a></code> a été effectué et si ce n'est pas le cas, l'appelle pour qu'elle déclenche la fonction <code>canvasDraw()</code> et mette à jour le canvas. Un tracker est mis en place pour afficher les valeurs X et Y à l'écran, pour référence.</p>

<pre class="brush: js">var tracker = document.getElementById('tracker');

var animation;
function updatePosition(e) {
  x += e.movementX;
  y += e.movementY;
  if (x &gt; canvas.width + RADIUS) {
    x = -RADIUS;
  }
  if (y &gt; canvas.height + RADIUS) {
    y = -RADIUS;
  }
  if (x &lt; -RADIUS) {
    x = canvas.width + RADIUS;
  }
  if (y &lt; -RADIUS) {
    y = canvas.height + RADIUS;
  }
  tracker.textContent = "X position: " + x + ", Y position: " + y;

  if (!animation) {
    animation = requestAnimationFrame(function() {
      animation = null;
      canvasDraw();
    });
  }
}</pre>

<p>La fonction <code>canvasDraw()</code> affiche la balle aux position <code>x</code> et <code>y</code> en cours:</p>

<pre class="brush: js">function canvasDraw() {
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#f00";
  ctx.beginPath();
  ctx.arc(x, y, RADIUS, 0, degToRad(360), true);
  ctx.fill();
}</pre>

<h2 id="iframe_limitations">iframe limitations</h2>

<p>Le verrouilage du pointeur ne peut concerner qu'une seule iframe à la fois. Quand vous verrouillez une iframe, vous ne pouvez pas essayer de verrouiller une autre iframe et y transférer la cible; une erreur sera levée. Pour éviter cette limitation, déverrouillez d'abord la première iframe, puis verrouillez la seconde.</p>

<p>Tandis que cela fonctionne pour les iframes par défaut, les iframes en "sandbox" bloquent le verrouillage. La possibilité d'éviter cette limitation, sous la forme de la combinaison attribut/valeur <code>&lt;iframe sandbox="allow-pointer-lock"&gt;</code>, devrait bientôt apparaître dans Chrome.</p>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Etat</th>
   <th scope="col">Commentaire</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('Pointer Lock')}}</td>
   <td>{{Spec2('Pointer Lock')}}</td>
   <td>Initial specification.</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility">Compatibilité navigateur</h2>

<h3 id="Element.requestPointerLock"><code>Element.requestPointerLock</code></h3>

<p>{{Compat("api.Element.requestPointerLock")}}</p>

<h2 id="See_also">Voir aussi</h2>

<ul>
 <li>{{domxref("MouseEvent")}}</li>
</ul>
