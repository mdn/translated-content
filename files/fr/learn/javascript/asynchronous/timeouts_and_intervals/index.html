---
title: 'JavaScript asynchrone coopératif : délais et intervalles'
slug: Learn/JavaScript/Asynchronous/Timeouts_and_intervals
tags:
  - Animation
  - Beginner
  - CodingScripting
  - Guide
  - Intervals
  - JavaScript
  - Loops
  - asynchronous
  - requestAnimationFrame
  - setInterval
  - setTimeout
  - timeouts
translation_of: Learn/JavaScript/Asynchronous/Timeouts_and_intervals
---
<div>{{LearnSidebar}}</div>

<div>{{PreviousMenuNext("Learn/JavaScript/Asynchronous/Introducing", "Learn/JavaScript/Asynchronous/Promises", "Learn/JavaScript/Asynchronous")}}</div>

<p>Ce tutoriel présente les méthodes traditionnelles dont dispose JavaScript pour exécuter du code de manière asynchrone après l'écoulement d'une période de temps déterminée ou à un intervalle régulier (par exemple, un nombre déterminé de fois par seconde), discute de leur utilité et examine leurs problèmes inhérents.</p>

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Prérequis :</th>
      <td>Connaissances informatiques de base, compréhension raisonnable des principes fondamentaux de JavaScript.</td>
    </tr>
    <tr>
      <th scope="row">Objectif :</th>
      <td>Comprendre les boucles et les intervalles asynchrones et leur utilité.</td>
    </tr>
  </tbody>
</table>

<h2 id="introduction">Introduction</h2>

<p>Depuis longtemps, la plate-forme Web offre aux programmeurs JavaScript un certain nombre de fonctions qui leur permettent d'exécuter du code de manière asynchrone après un certain intervalle de temps, et d'exécuter un bloc de code de manière asynchrone jusqu'à ce que vous lui demandiez de s'arrêter.</p>

<p>Ces fonctions sont :</p>

<dl>
  <dt><a href="/fr/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout"><code>setTimeout()</code></a></dt>
  <dd>Exécuter un bloc de code spécifié une fois, après qu'un temps spécifié se soit écoulé.</dd>
  <dt><a href="/fr/docs/Web/API/WindowOrWorkerGlobalScope/setInterval"><code>setInterval()</code></a></dt>
  <dd>Exécuter un bloc de code spécifique de manière répétée, avec un délai fixe entre chaque appel.</dd>
  <dt><a href="/fr/docs/Web/API/Window/requestAnimationFrame"><code>requestAnimationFrame()</a></code></dt>
  <dd>La version moderne de <code>setInterval()</code>. Exécute un bloc de code spécifié avant que le navigateur ne repeigne ensuite l'affichage, ce qui permet à une animation d'être exécutée à une fréquence d'images appropriée, quel que soit l'environnement dans lequel elle est exécutée.</dd>
</dl>

<p>Le code asynchrone mis en place par ces fonctions s'exécute sur le processus principal (après l'écoulement de leur minuterie spécifiée).</p>

<p>Il est important de savoir que vous pouvez (et allez souvent) exécuter un autre code avant qu'un appel <code>setTimeout()</code> ne s'exécute, ou entre les itérations de <code>setInterval()</code>. Selon l'intensité du processeur de ces opérations, elles peuvent retarder encore plus votre code asynchrone, car tout code asynchrone ne s'exécutera qu'<em>après</em> la disponibilité du processus principal. (En d'autres termes, lorsque la pile est vide.) Vous en apprendrez davantage à ce sujet au fur et à mesure que vous progresserez dans cet article.</p>

<p>Dans tous les cas, ces fonctions sont utilisées pour exécuter des animations constantes et d'autres traitements en arrière-plan sur un site Web ou une application. Dans les sections suivantes, nous allons vous montrer comment les utiliser.</p>

<h2 id="settimeout">setTimeout()</h2>

<p>Comme nous l'avons dit précédemment, <a href="/fr/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout"><code>setTimeout()</code></a> exécute un bloc de code particulier une fois qu'un temps spécifié s'est écoulé. Il prend les paramètres suivants :</p>

<ul>
  <li>Une fonction à exécuter, ou une référence à une fonction définie ailleurs.</li>
  <li>Un nombre représentant l'intervalle de temps en millisecondes (1000 millisecondes équivalent à 1 seconde) à attendre avant d'exécuter le code. Si vous spécifiez une valeur de <code>0</code> (ou omettez la valeur), la fonction sera exécutée dès que possible. (Voir la note ci-dessous sur la raison pour laquelle elle s'exécute "dès que possible" et non "immédiatement"). Plus d'informations sur les raisons pour lesquelles vous pourriez vouloir faire cela plus tard.</li>
  <li>Zéro ou plusieurs valeurs représentant les paramètres que vous souhaitez transmettre à la fonction lors de son exécution.</li>
</ul>

<div class="note">
  <p><strong>Note :</strong> La quantité de temps spécifiée (ou le délai) n'est <strong>pas</strong> le <em>temps garanti</em> à l'exécution, mais plutôt le <em>temps minimum</em> à l'exécution. Les rappels que vous passez à ces fonctions ne peuvent pas s'exécuter tant que la pile du processus principal n'est pas vide.</p>
  <p>En conséquence, un code comme <code>setTimeout(fn, 0)</code> s'exécutera dès que la pile sera vide, <strong>pas</strong> immédiatement. Si vous exécutez un code comme <code>setTimeout(fn, 0)</code> mais qu'immédiatement après vous exécutez une boucle qui compte de 1 à 10 milliards, votre rappel sera exécuté après quelques secondes.</p>
</div>

<p>Dans l'exemple suivant, le navigateur attendra deux secondes avant d'exécuter la fonction anonyme, puis affichera le message d'alerte (<a href="https://mdn.github.io/learning-area/javascript/asynchronous/loops-and-intervals/simple-settimeout.html">voir son exécution en direct</a>, et <a href="https://github.com/mdn/learning-area/blob/master/javascript/asynchronous/loops-and-intervals/simple-settimeout.html">voir le code source</a>) :</p>

<pre class="brush: js">let maSalutation = setTimeout(() =&gt; {
  console.log('Bonjour, M. Univers !');
}, 2000);</pre>

<p>Les fonctions que vous spécifiez n'ont pas besoin d'être anonymes. Vous pouvez donner un nom à votre fonction, et même la définir ailleurs et passer une référence de fonction à <code>setTimeout()</code>. Les deux versions suivantes de l'extrait de code sont équivalentes à la première :</p>

<pre class="brush: js">// Avec une fonction nommée
let maSalutation = setTimeout(function direBonjour() {
  console.log('Bonjour, M. Univers !');
}, 2000);

// Avec une fonction définie séparément
function direBonjour() {
  console.log('Bonjour, M. Univers !');
}

let maSalutation = setTimeout(direBonjour, 2000);</pre>

<p>Cela peut être utile si vous avez une fonction qui doit être appelée à la fois à partir d'un délai d'attente et en réponse à un événement, par exemple. Mais cela peut aussi vous aider à garder votre code en ordre, surtout si le rappel du délai d'attente représente plus de quelques lignes de code.</p>

<p><code>setTimeout()</code> renvoie une valeur d'identifiant qui peut être utilisée pour faire référence au délai d'attente ultérieurement, par exemple lorsque vous souhaitez l'arrêter. Voir <a href="#clearing_timeouts">Effacement des délais d'attente</a> (ci-dessous) pour apprendre comment faire cela.</p>

<h3 id="passing_parameters_to_a_settimeout_function">Passage de paramètres à une fonction setTimeout()</h3>

<p>Tous les paramètres que vous voulez passer à la fonction en cours d'exécution à l'intérieur du <code>setTimeout()</code> doivent lui être passés comme paramètres supplémentaires à la fin de la liste.</p>

<p>Par exemple, vous pouvez remanier la fonction précédente pour qu'elle dise bonjour à la personne dont le nom lui est transmis :</p>

<pre class="brush: js">function direBonjour(who) {
  console.log(`Bonjour ${who} !`);
}</pre>

<p>Maintenant, vous pouvez passer le nom de la personne dans l'appel <code>setTimeout()</code> comme troisième paramètre :</p>

<pre class="brush: js">let maSalutation = setTimeout(direBonjour, 2000, 'M. Univers');</pre>

<h3 id="clearing_timeouts">Effacement des délais d'attente</h3>

<p>Enfin, si un timeout a été créé, vous pouvez l'annuler avant que le temps spécifié ne se soit écoulé en appelant <a href="/fr/docs/Web/API/WindowOrWorkerGlobalScope/clearTimeout"><code>clearTimeout()</code></a>, en lui passant en paramètre l'identifiant de l'appel <code>setTimeout()</code>. Donc pour annuler notre timeout ci-dessus, vous feriez ceci :</p>

<pre class="brush: js">clearTimeout(maSalutation);</pre>

<div class="note">
  <p><strong>Note :</strong> Voir <code><a href="https://mdn.github.io/learning-area/javascript/asynchronous/loops-and-intervals/greeter-app.html">greeter-app.html</a></code> pour une démo un peu plus élaborée qui permet de définir le nom de la personne à saluer dans un formulaire, et d'annuler la salutation à l'aide d'un bouton séparé (<a href="https://github.com/mdn/learning-area/blob/master/javascript/asynchronous/loops-and-intervals/greeter-app.html">voir aussi le code source</a>).</p>
</div>

<h2 id="setinterval">setInterval()</h2>

<p><code>setTimeout()</code> fonctionne parfaitement lorsque vous devez exécuter du code une fois après une période de temps définie. Mais que se passe-t-il lorsque vous avez besoin d'exécuter le code encore et encore - par exemple, dans le cas d'une animation ?</p>

<p>C'est là qu'intervient le <a href="/fr/docs/Web/API/WindowOrWorkerGlobalScope/setInterval"><code>setInterval()</code></a>. Cela fonctionne de manière très similaire à <code>setTimeout()</code>, sauf que la fonction que vous passez comme premier paramètre est exécutée de manière répétée à une fréquence égale au nombre de millisecondes donné par le deuxième paramètre distinct, plutôt qu'une seule fois. Vous pouvez également passer tous les paramètres requis par la fonction en cours d'exécution comme paramètres ultérieurs de l'appel <code>setInterval()</code>.</p>

<p>Prenons un exemple. La fonction suivante crée un nouvel objet <a href="/fr/docs/Web/JavaScript/Reference/Global_Objects/Date"><code>Date()</code></a>, en extrait une chaîne de temps en utilisant <a href="/fr/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleTimeString"><code>toLocaleTimeString()</code></a>, puis l'affiche dans l'interface utilisateur. Elle exécute ensuite la fonction une fois par seconde à l'aide de <code>setInterval()</code>, créant l'effet d'une horloge numérique qui se met à jour une fois par seconde (<a href="https://mdn.github.io/learning-area/javascript/asynchronous/loops-and-intervals/setinterval-clock.html">voir cela en direct</a>, et aussi <a href="https://github.com/mdn/learning-area/blob/master/javascript/asynchronous/loops-and-intervals/setinterval-clock.html">voir la source</a>) :</p>

<pre class="brush: js">function displayTime() {
   let date = new Date();
   let time = date.toLocaleTimeString();
   document.getElementById('demo').textContent = time;
}

const createClock = setInterval(displayTime, 1000);</pre>

<p>Tout comme <code>setTimeout()</code>, <code>setInterval()</code> renvoie une valeur d'identification que vous pouvez utiliser plus tard lorsque vous devez effacer l'intervalle.</p>

<h3 id="clearing_intervals">Effacement des intervalles</h3>

<p><code>setInterval()</code> continue à exécuter une tâche pour toujours, à moins que vous ne fassiez quelque chose à ce sujet. Vous voudrez probablement un moyen d'arrêter de telles tâches, sinon vous pouvez finir par obtenir des erreurs lorsque le navigateur ne peut pas compléter d'autres versions de la tâche, ou si l'animation gérée par la tâche est terminée. Vous pouvez le faire de la même manière que vous arrêtez les temporisations - en passant l'identifiant renvoyé par l'appel <code>setInterval()</code> à la fonction <a href="/fr/docs/Web/API/WindowOrWorkerGlobalScope/clearInterval"><code>clearInterval()</code></a> :</p>

<pre class="brush: js">const myInterval = setInterval(myFunction, 2000);

clearInterval(myInterval);</pre>

<h4 id="Active_learning_Creating_your_own_stopwatch!">Apprentissage actif : Créez votre propre chronomètre !</h4>

<p>Tout ceci étant dit, nous avons un défi à vous proposer. Prenez une copie de notre exemple <code><a href="https://github.com/mdn/learning-area/blob/master/javascript/asynchronous/loops-and-intervals/setinterval-clock.html">setInterval-clock.html</a></code>, et modifiez-le pour créer votre propre chronomètre simple.</p>

<p>Vous devez afficher une heure comme précédemment, mais dans cet exemple, vous avez besoin :</p>

<ul>
  <li>Un bouton "Start" pour lancer le chronomètre.</li>
  <li>Un bouton "Stop" pour le mettre en pause/arrêter.</li>
  <li>Un bouton "Reset" pour réinitialiser le temps à <code>0</code>.</li>
  <li>L'affichage du temps pour indiquer le nombre de secondes écoulées, plutôt que le temps réel.</li>
</ul>

<p>Voici quelques conseils pour vous :</p>

<ul>
  <li>Vous pouvez structurer et styliser le balisage du bouton comme vous le souhaitez ; veillez simplement à utiliser du HTML sémantique, avec des crochets vous permettant de saisir les références du bouton à l'aide de JavaScript.</li>
  <li>Vous voulez probablement créer une variable qui commence à <code>0</code>, puis s'incrémente d'une unité toutes les secondes en utilisant une boucle constante.</li>
  <li>Il est plus facile de créer cet exemple sans utiliser un objet <code>Date()</code>, comme nous l'avons fait dans notre version, mais moins précis - vous ne pouvez pas garantir que le rappel se déclenchera après exactement <code>1000</code>ms. Une façon plus précise serait d'exécuter <code>startTime = Date.now()</code> pour obtenir un horodatage du moment exact où l'utilisateur a cliqué sur le bouton de démarrage, puis de faire <code>Date.now() - startTime</code> pour obtenir le nombre de millisecondes après le clic sur le bouton de démarrage.</li>
  <li>Vous souhaitez également calculer le nombre d'heures, de minutes et de secondes sous forme de valeurs distinctes, puis les afficher ensemble dans une chaîne de caractères après chaque itération de la boucle. À partir du deuxième compteur, vous pouvez calculer chacune de ces valeurs.</li>
  <li>Comment les calculeriez-vous ? Réfléchissez-y :
    <ul>
      <li>Le nombre de secondes dans une heure est de <code>3600</code>.</li>
      <li>Le nombre de minutes sera le nombre de secondes restantes lorsque toutes les heures auront été retirées, divisé par <code>60</code>.</li>
      <li>Le nombre de secondes sera le nombre de secondes restantes lorsque toutes les minutes auront été retirées.</li>
    </ul>
  </li>
  <li>Vous devrez inclure un zéro de tête sur vos valeurs d'affichage si le montant est inférieur à <code>10</code>, afin que cela ressemble davantage à une horloge/chronomètre traditionnel.</li>
  <li>Pour mettre le chronomètre en pause, il faut effacer l'intervalle. Pour le réinitialiser, vous devrez remettre le compteur à <code>0</code>, effacer l'intervalle, puis mettre immédiatement à jour l'affichage.</li>
  <li>Vous devriez probablement désactiver le bouton de démarrage après l'avoir pressé une fois, et le réactiver après l'avoir arrêté/réinitialisé. Sinon, les pressions multiples sur le bouton de démarrage appliqueront plusieurs <code>setInterval()</code> à l'horloge, ce qui entraînera un comportement erroné.</li>
</ul>

<div class="note">
  <p><strong>Note :</strong> Si vous êtes bloqué, vous pouvez <a href="https://mdn.github.io/learning-area/javascript/asynchronous/loops-and-intervals/setinterval-stopwatch.html">trouver notre version ici</a> (voir le <a href="https://github.com/mdn/learning-area/blob/master/javascript/asynchronous/loops-and-intervals/setinterval-stopwatch.html">code source</a>).</p>
</div>

<h2 id="things_to_keep_in_mind_about_settimeout_and_setinterval">Choses à garder à l'esprit concernant setTimeout() et setInterval()</h2>

<p>Il y a quelques éléments à garder à l'esprit lorsque vous travaillez avec <code>setTimeout()</code> et <code>setInterval()</code>. Passons-les en revue maintenant.</p>

<h3 id="recursive_timeouts">Délais récursifs</h3>

<p>Il existe une autre façon d'utiliser <code>setTimeout()</code> : vous pouvez l'appeler de manière récursive pour exécuter le même code de manière répétée, au lieu d'utiliser <code>setInterval()</code>.</p>

<p>L'exemple ci-dessous utilise un <code>setTimeout()</code> récursif pour exécuter la fonction passée toutes les <code>100</code> millisecondes :</p>

<pre class="brush: js">let i = 1;

setTimeout(function run() {
  console.log(i);
  i++;
  setTimeout(run, 100);
}, 100);</pre>

<p>Comparez l'exemple ci-dessus à celui qui suit - celui-ci utilise <code>setInterval()</code> pour accomplir le même effet :</p>

<pre class="brush: js">let i = 1;

setInterval(function run() {
  console.log(i);
  i++;
}, 100);</pre>

<h4 id="how_do_recursive_settimeout_and_setinterval_differ">Quelle est la différence entre le <code>setTimeout()</code> récursif et le <code>setInterval()</code> ?</h4>

<p>La différence entre les deux versions du code ci-dessus est subtile.</p>

<ul>
  <li>Le <code>setTimeout()</code> récursif garantit le délai indiqué entre les exécutions. L'attente de la prochaine exécution commencera uniquement après que le code ait fini de s'exécuter. Dans cet exemple, le code s'exécutera, puis attendra <code>100</code> millisecondes avant de s'exécuter à nouveau - l'intervalle sera donc le même, quelle que soit la durée d'exécution du code.</li>
  <li>L'exemple utilisant <code>setInterval()</code> fait les choses un peu différemment. L'intervalle que vous avez choisi <em>inclut</em> le temps d'exécution du code que vous voulez exécuter. Disons que le code prend <code>40</code> millisecondes pour s'exécuter - l'intervalle finit alors par être seulement de <code>60</code> millisecondes.</li>
  <li>Lorsque vous utilisez <code>setTimeout()</code> de manière récursive, chaque itération peut calculer un délai différent avant d'exécuter l'itération suivante. En d'autres termes, la valeur du deuxième paramètre peut spécifier un temps différent en millisecondes à attendre avant d'exécuter à nouveau le code.</li>
</ul>

<p>Lorsque votre code a le potentiel de prendre plus de temps à s'exécuter que l'intervalle de temps que vous avez assigné, il est préférable d'utiliser le <code>setTimeout()</code> récursif - cela maintiendra l'intervalle de temps constant entre les exécutions, quelle que soit la durée d'exécution du code, et vous n'obtiendrez pas d'erreurs.</p>

<h3 id="immediate_timeouts">Délais immédiats</h3>

<p>En utilisant <code>0</code> comme valeur pour <code>setTimeout()</code>, on planifie l'exécution de la fonction de rappel spécifiée dès que possible, mais seulement après l'exécution du processus de code principal.</p>

<p>Par exemple, le code ci-dessous (<a href="https://mdn.github.io/learning-area/javascript/asynchronous/loops-and-intervals/zero-settimeout.html">voir en direct</a>) produit une alerte contenant <code>"Hello"</code>, puis une alerte contenant <code>"World"</code> dès que vous cliquez sur OK sur la première alerte.</p>

<pre class="brush: js">setTimeout(() =&gt; {
  alert('World');
}, 0);

alert('Hello');</pre>

<p>Cela peut être utile dans les cas où vous souhaitez définir un bloc de code à exécuter dès que l'ensemble du thread principal a terminé son exécution - placez-le dans la boucle d'événement asynchrone, de sorte qu'il s'exécutera immédiatement après.</p>

<h3 id="clearing_with_cleartimeout_or_clearinterval">Effacement avec clearTimeout() ou clearInterval()</h3>

<p><code>clearTimeout()</code> et <code>clearInterval()</code> utilisent toutes deux la même liste d'entrées pour effacer. Il est intéressant de noter que cela signifie que vous pouvez utiliser l'une comme l'autre méthode pour effacer un <code>setTimeout()</code> ou <code>setInterval()</code>.</p>

<p>Par souci de cohérence, vous devriez utiliser <code>clearTimeout()</code> pour effacer les entrées <code>setTimeout()</code> et <code>clearInterval()</code> pour effacer les entrées <code>setInterval()</code>. Cela permettra d'éviter toute confusion.</p>

<h2 id="requestanimationframe">requestAnimationFrame()</h2>

<p><a href="/fr/docs/Web/API/Window/requestAnimationFrame"><code>requestAnimationFrame()</code></a> est une fonction de bouclage spécialisée, créée pour exécuter des animations de manière efficace dans le navigateur. Elle exécute un bloc de code spécifié avant que le navigateur ne repeigne ensuite l'affichage, ce qui permet d'exécuter une animation à une fréquence de rafraîchissement appropriée, quel que soit l'environnement dans lequel elle est exécutée.</p>

<p>Elle a été créée en réponse aux problèmes perçus avec les fonctions asynchrones antérieures comme <code>setInterval()</code>, qui, par exemple, ne s'exécute pas à une fréquence d'images optimisée pour le matériel et continue à s'exécuter alors qu'elle pourrait s'arrêter lorsque l'onglet n'est plus actif ou si l'animation se déroule hors de la page, etc.</p>

<p>(<a href="http://creativejs.com/resources/requestanimationframe/index.html">Plus d'informations à ce sujet sur CreativeJS</a> <small>(en)</small>.)</p>

<div class="note">
  <p><strong>Note :</strong> Vous trouverez des exemples d'utilisation de <code>requestAnimationFrame()</code> ailleurs dans le cours - voir par exemple <a href="/fr/docs/Learn/JavaScript/Client-side_web_APIs/Drawing_graphics">Dessiner des éléments graphiques</a>, et <a href="/fr/docs/Learn/JavaScript/Objects/Object_building_practice">La construction d'objet en pratique</a>.</p>
</div>

<p>La méthode prend comme argument un rappel à invoquer avant le repeignage. C'est le modèle général dans lequel vous le verrez utilisé :</p>

<pre class="brush: js">function draw() {
   // Le code du dessin va ici
   requestAnimationFrame(draw);
}

draw();</pre>

<p>L'idée est de définir une fonction dans laquelle votre animation est mise à jour (par exemple, vos sprites sont déplacés, le score est mis à jour, les données sont rafraîchies, ou autre). Ensuite, vous l'appelez pour lancer le processus. À la fin du bloc de fonctions, vous appelez <code>requestAnimationFrame()</code> avec la référence de la fonction passée en paramètre, et cela indique au navigateur de rappeler la fonction lors du prochain rafraîchissement de l'affichage. Ceci est ensuite exécuté en continu, car le code appelle <code>requestAnimationFrame()</code> de manière récursive.</p>

<div class="note">
  <p><strong>Note :</strong> Si vous souhaitez réaliser une sorte d'animation DOM simple et constante, <a href="/fr/docs/Web/CSS/CSS_Animations">les animations CSS</a> sont probablement plus rapides. Elles sont calculées directement par le code interne du navigateur, plutôt que par JavaScript.</p>
  <p>Si, toutefois, vous faites quelque chose de plus complexe et impliquant des objets qui ne sont pas directement accessibles à l'intérieur du DOM (comme les objets <a href="/fr/docs/Web/API/Canvas_API">2D Canvas API</a> ou <a href="/fr/docs/Web/API/WebGL_API">WebGL</a>), <code>requestAnimationFrame()</code> est la meilleure option dans la plupart des cas.</p>
</div>

<h3 id="how_fast_does_your_animation_run">Quelle est la vitesse de votre animation ?</h3>

<p>La fluidité de votre animation dépend directement de la fréquence d'images de votre animation, qui est mesurée en images par seconde (ips). Plus ce nombre est élevé, plus votre animation sera fluide, jusqu'à un certain point.</p>

<p>Comme la plupart des écrans ont une fréquence de rafraîchissement de 60 Hz, la fréquence d'images la plus rapide que vous pouvez viser est de 60 images par seconde (IPS) lorsque vous travaillez avec des navigateurs Web. Cependant, plus d'images signifie plus de traitement, ce qui peut souvent provoquer des saccades et des sauts - également connus sous le nom de <em>dégradation des images</em>, ou <em>saccades</em>.</p>

<p>Si vous disposez d'un moniteur avec une fréquence de rafraîchissement de 60 Hz et que vous souhaitez obtenir 60 IPS, vous disposez d'environ 16,7 millisecondes (<code>1000 / 60</code>) pour exécuter votre code d'animation et rendre chaque image. Ceci est un rappel que vous devrez être attentif à la quantité de code que vous essayez d'exécuter pendant chaque passage dans la boucle d'animation.</p>

<p><code>requestAnimationFrame()</code> essaie toujours de se rapprocher le plus possible de cette valeur magique de 60 IPS. Parfois, ce n'est pas possible - si vous avez une animation vraiment complexe et que vous l'exécutez sur un ordinateur lent, votre fréquence d'images sera inférieure. Dans tous les cas, <code>requestAnimationFrame()</code> fera toujours du mieux qu'il peut avec ce dont il dispose.</p>

<h3 id="how_does_requestanimationframe_differ_from_setinterval_and_settimeout">En quoi requestAnimationFrame() diffère-t-il de setInterval() et setTimeout() ?</h3>

<p>Parlons un peu plus de la façon dont la méthode <code>requestAnimationFrame()</code> diffère des autres méthodes utilisées précédemment. En regardant notre code d'en haut :</p>

<pre class="brush: js">function draw() {
   // Le code du dessin va ici
   requestAnimationFrame(draw);
}

draw();</pre>

<p>Voyons maintenant comment faire la même chose en utilisant <code>setInterval()</code> :</p>

<pre class="brush: js">function draw() {
   // Le code du dessin va ici
}

setInterval(draw, 17);</pre>

<p>Comme nous l'avons couvert précédemment, vous ne spécifiez pas d'intervalle de temps pour <code>requestAnimationFrame()</code>. Il l'exécute simplement aussi vite et aussi bien que possible dans les conditions actuelles. Le navigateur ne perd pas non plus de temps à l'exécuter si l'animation est hors écran pour une raison quelconque, etc.</p>

<p><code>setInterval()</code>, d'autre part <em>exige</em> qu'un intervalle soit spécifié. Nous sommes arrivés à notre valeur finale de 17 via la formule <em>1000 millisecondes / 60Hz</em>, puis nous l'avons arrondie. Arrondir vers le haut est une bonne idée ; si vous arrondissez vers le bas, le navigateur pourrait essayer d'exécuter l'animation à une vitesse supérieure à 60 FPS, et cela ne ferait de toute façon aucune différence pour la fluidité de l'animation. Comme nous l'avons déjà dit, 60 Hz est la fréquence de rafraîchissement standard.</p>

<h3 id="including_a_timestamp">Inclure un horodatage</h3>

<p>Le rappel réel passé à la fonction <code>requestAnimationFrame()</code> peut également recevoir un paramètre : une valeur <em>timestamp</em>, qui représente le temps depuis que le <code>requestAnimationFrame()</code> a commencé à s'exécuter.</p>

<p>C'est utile car cela vous permet d'exécuter des choses à des moments précis et à un rythme constant, quelle que soit la vitesse ou la lenteur de votre appareil. Le modèle général que vous utiliserez ressemble à quelque chose comme ceci :</p>

<pre class="brush: js">let startTime = null;

function draw(timestamp) {
    if (!startTime) {
      startTime = timestamp;
    }

   currentTime = timestamp - startTime;

   // Faire quelque chose en fonction du temps actuel

   requestAnimationFrame(draw);
}

draw();</pre>

<h3 id="browser_support">Prise en charge des navigateurs</h3>

<p><code>requestAnimationFrame()</code> est supporté par des navigateurs plus récents que pour <code>setInterval()</code>/<code>setTimeout()</code>.  Il est intéressant de noter qu'elle est disponible dans Internet Explorer 10 et plus.</p>

<p>Ainsi, à moins que vous ne deviez prendre en charge d'anciennes versions d'IE, il y a peu de raisons de ne pas utiliser <code>requestAnimationFrame()</code>.</p>

<h3 id="a_simple_example">Un exemple simple</h3>

<p>Assez avec la théorie ! Construisons votre propre exemple personnel de <code>requestAnimationFrame()</code>. Vous allez créer une simple "animation de toupie" - le genre que vous pourriez voir affiché dans une application lorsqu'elle est occupée à se connecter au serveur, etc.</p>

<div class="note">
  <p><strong>Note :</strong> Dans un exemple du monde réel, vous devriez probablement utiliser des animations CSS pour exécuter ce type d'animation simple. Cependant, ce genre d'exemple est très utile pour démontrer l'utilisation de <code>requestAnimationFrame()</code>, et vous seriez plus susceptible d'utiliser ce genre de technique lorsque vous faites quelque chose de plus complexe comme la mise à jour de l'affichage d'un jeu à chaque image.</p>
</div>

<ol>
  <li><p>Prenez un modèle HTML de base (<a href="https://github.com/mdn/learning-area/blob/master/html/introduction-to-html/getting-started/index.html">comme celui-ci</a>).</p></li>
  <li><p>Placez un élément <a href="/fr/docs/Web/HTML/Element/div"><code>&lt;div&gt;</code></a> vide à l'intérieur de l'élément <a href="/fr/docs/Web/HTML/Element/body"><code>&lt;body&gt;</code></a>, puis ajoutez un caractère ↻ à l'intérieur. Ce caractère de flèche circulaire fera office de notre toupie pour cet exemple.</p></li>
  <li><p>Appliquez le CSS suivant au modèle HTML (de la manière que vous préférez). Cela définit un fond rouge sur la page, définit la hauteur du <code>&lt;body&gt;</code> à <code>100%</code> de la hauteur de <a href="/fr/docs/Web/HTML/Element/html"><code>&lt;html&gt;</code></a>, et centre le <code>&lt;div&gt;</code> à l'intérieur du <code>&lt;body&gt;</code>, horizontalement et verticalement.</p>
    <pre class="brush: css">html {
  background-color: white;
  height: 100%;
}

body {
  height: inherit;
  background-color: red;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

div {
  display: inline-block;
  font-size: 10rem;
}</pre>
  </li>
  <li><p>Insérez un élément <a href="/fr/docs/Web/HTML/Element/script"><code>&lt;script&gt;</code></a> juste au-dessus de la balise de fermeture <code>&lt;/body&gt;</code>.</p></li>
  <li><p>Insérez le JavaScript suivant dans votre élément <code>&lt;script&gt;</code>. Ici, vous stockez une référence à l'élément <code>&lt;div&gt ; </code> à l'intérieur d'une constante, définissez une variable <code>rotateCount</code> à <code>0</code>, définissez une variable non initialisée qui sera utilisée plus tard pour contenir une référence à l'appel <code>requestAnimationFrame()</code>, et en définissant une variable <code>startTime</code> à <code>null</code>, qui sera plus tard utilisée pour stocker l'heure de début de l'appel <code>requestAnimationFrame()</code>.</p>
    <pre class="brush: js">const spinner = document.querySelector('div');
let rotateCount = 0;
let startTime = null;
let rAF;
</pre>
 </li>
 <li>
  <p>Sous le code précédent, insérez une fonction <code>draw()</code> qui sera utilisée pour contenir notre code d'animation, qui inclut le paramètre <code>timestamp</code> :</p>
    <pre class="brush: js">function draw(timestamp) {

}</pre>
  </li>
  <li><p>À l'intérieur de <code>draw()</code>, ajoutez les lignes suivantes. Elles définiront l'heure de départ si elle n'est pas déjà définie (cela ne se produira que lors de la première itération de la boucle), et définiront le <code>rotateCount</code> à une valeur pour faire tourner le spinner par (l'horodatage actuel, prendre l'horodatage de départ, divisé par trois pour que cela n'aille pas trop vite) :</p>
    <pre class="brush: js">  if(!startTime) {
   startTime = timestamp;
  }

  rotateCount = (timestamp - startTime) / 3;
</pre>
  </li>
  <li><p>Sous la ligne précédente à l'intérieur de <code>draw()</code>, ajoutez le bloc suivant - il s'assure que la valeur de <code>rotateCount</code> est comprise entre <code>0</code> et <code>360</code> en utilisant le modulo à 360 (c'est-à-dire le reste restant lorsque la valeur est divisée par <code>360</code>) afin que l'animation du cercle puisse continuer sans interruption, à une valeur basse et raisonnable. Notez que ce n'est pas strictement nécessaire, mais il est plus facile de travailler avec des valeurs de 0-359 degrés que des valeurs comme <code>"128000 degrés"</code>.</p>
    <pre class="brush: js">rotateCount %= 360;</pre>
  </li>
  <li>Ensuite, sous le bloc précédent, ajoutez la ligne suivante pour faire tourner le spinner :
    <pre class="brush: js">spinner.style.transform = `rotate(${rotateCount}deg)`;</pre>
  </li>
  <li><p>Tout en bas, à l'intérieur de la fonction <code>draw()</code>, insérez la ligne suivante. C'est la clé de toute l'opération - vous définissez la variable définie précédemment à un appel actif <code>requestAnimation()</code>, qui prend la fonction <code>draw()</code> comme paramètre. Cela fait démarrer l'animation, en exécutant constamment la fonction <code>draw()</code> à un taux aussi proche que possible de 60 IPS.</p>
  <pre class="brush: js">rAF = requestAnimationFrame(draw);</pre>
  </li>
  <li><p>Sous la définition de la fonction <code>draw()</code>, ajoutez un appel à la fonction <code>draw()</code> pour lancer l'animation.</p>
    <pre class="brush: js">draw();</pre>
  </li>
</ol>

<div class="note">
  <p><strong>Note :</strong> Vous pouvez trouver l'<a href="https://mdn.github.io/learning-area/javascript/asynchronous/loops-and-intervals/simple-raf-spinner.html">exemple terminé en direct sur GitHub</a>. (Vous pouvez également voir le <a href="https://github.com/mdn/learning-area/blob/master/javascript/asynchronous/loops-and-intervals/simple-raf-spinner.html">code source</a>).</p>
</div>

<h3 id="clearing_a_requestanimationframe_call">Effacer un appel de requestAnimationFrame()</h3>

<p>Effacer un appel de <code>requestAnimationFrame()</code> peut être fait en appelant la méthode <code>cancelAnimationFrame()</code> correspondante. (Notez que le nom de la fonction commence par "cancel", et non par "clear" comme pour les méthodes "set...").</p>

<p>Il suffit de lui passer la valeur renvoyée par l'appel <code>requestAnimationFrame()</code> à annuler, que vous avez stockée dans la variable <code>rAF</code> :</p>

<pre class="brush: js">cancelAnimationFrame(rAF);</pre>

<h3 id="active_learning_starting_and_stopping_our_spinner">Apprentissage actif : Démarrer et arrêter la toupie</h3>

<p>Dans cet exercice, nous aimerions que vous testiez la méthode <code>cancelAnimationFrame()</code> en prenant notre exemple précédent et en le mettant à jour, en ajoutant un écouteur d'événements pour démarrer et arrêter le spinner lorsque la souris est cliquée n'importe où sur la page.</p>

<p>Quelques conseils :</p>

<ul>
  <li>Un écouteur d'événements <code>click</code> peut être ajouté à la plupart des éléments, y compris le document <code>&lt;body&gt;</code>. Il est plus logique de le placer sur l'élément <code>&lt;body&gt;</code> si vous voulez maximiser la zone cliquable - l'événement remonte jusqu'à ses éléments enfants.</li>
  <li>Vous voudrez ajouter une variable de suivi pour vérifier si la toupie tourne ou non, effacer le cadre d'animation si c'est le cas, et le rappeler si ce n'est pas le cas.</li>
</ul>

<div class="note">
  <p><strong>Note :</strong> Essayez d'abord vous-même ; si vous êtes vraiment bloqué, consultez nos pages <a href="https://mdn.github.io/learning-area/javascript/asynchronous/loops-and-intervals/start-and-stop-spinner.html">exemple en direct</a> et <a href="https://github.com/mdn/learning-area/blob/master/javascript/asynchronous/loops-and-intervals/start-and-stop-spinner.html">code source</a>.</p>
</div>

<h3 id="throttling_a_requestanimationframe_animation">Ralentissement d'une animation requestAnimationFrame()</h3>

<p>Une limitation de <code>requestAnimationFrame()</code> est que vous ne pouvez pas choisir votre fréquence d'images. Ce n'est pas un problème la plupart du temps, car en général, vous voulez que votre animation se déroule de la manière la plus fluide possible. Mais qu'en est-il lorsque vous souhaitez créer une animation old school, de style 8 bits ?</p>

<p>C'était un problème, par exemple, dans l'animation de marche inspirée de Monkey Island de notre article <a href="/fr/docs/Learn/JavaScript/Client-side_web_APIs/Drawing_graphics">Dessiner des éléments graphiques</a> :</p>

<p>{{EmbedGHLiveSample("learning-area/javascript/apis/drawing-graphics/loops_animation/7_canvas_walking_animation.html", '100%', 260)}}</p>

<p>Dans cet exemple, vous devez animer à la fois la position du personnage à l'écran et le sprite affiché. Il n'y a que 6 images dans l'animation du sprite. Si vous montriez une image différente du sprite pour chaque image affichée à l'écran par <code>requestAnimationFrame()</code>, Guybrush bougerait ses membres trop vite et l'animation aurait l'air ridicule. Cet exemple étrangle la vitesse à laquelle le sprite cycle ses images en utilisant le code suivant :</p>

<pre class="brush: js">if (posX % 13 === 0) {
  if (sprite === 5) {
    sprite = 0;
  } else {
    sprite++;
  }
}</pre>

<p>Ainsi, le code ne cycle le sprite qu'une fois toutes les 13 images d'animation.</p>

<p>...En fait, c'est environ toutes les 6,5 images, car nous mettons à jour <code>posX</code> (position du personnage sur l'écran) par deux à chaque image :</p>

<pre class="brush: js">if (posX &gt; width/2) {
  newStartPos = -( (width/2) + 102 );
  posX = Math.ceil(newStartPos / 13) * 13;
  console.log(posX);
} else {
  posX += 2;
}</pre>

<p>C'est le code qui calcule comment mettre à jour la position dans chaque image d'animation.</p>

<p>La méthode que vous utilisez pour accélérer votre animation dépendra de votre code particulier. Par exemple, dans l'exemple précédent de la toupie, vous pourriez faire en sorte qu'elle semble se déplacer plus lentement en n'augmentant le <code>rotateCount</code> que de un à chaque image, au lieu de deux.</p>

<h2 id="active_learning_a_reaction_game">Apprentissage actif : un jeu de réaction</h2>

<p>Pour la dernière section de cet article, vous allez créer un jeu de réaction à 2 joueurs. Le jeu aura deux joueurs, dont l'un contrôlera le jeu à l'aide de la touche <kbd>A</kbd>, et l'autre avec la touche <kbd>L</kbd>.</p>

<p>Lorsque l'on appuie sur le bouton <em>Start</em>, une toupie comme celle que nous avons vue précédemment s'affiche pendant un temps aléatoire compris entre 5 et 10 secondes. Après ce temps, un message apparaîtra disant <code>"PLAYERS GO !!"</code> - une fois que cela se produit, le premier joueur à appuyer sur son bouton de contrôle gagnera la partie.</p>

<p>{{EmbedGHLiveSample("learning-area/javascript/asynchronous/loops-and-intervals/reaction-game.html", '100%', 500)}}</p>

<p>Travaillons ensemble :</p>

<ol>
  <li><p>Tout d'abord, téléchargez le <a href="https://github.com/mdn/learning-area/blob/master/javascript/asynchronous/loops-and-intervals/reaction-game-starter.html">fichier de démarrage de l'application</a>. Celui-ci contient la structure HTML et le style CSS finis, ce qui nous donne un plateau de jeu qui affiche les informations des deux joueurs (comme vu ci-dessus), mais avec le spinner et le paragraphe des résultats affichés l'un au-dessus de l'autre. Il ne vous reste plus qu'à écrire le code JavaScript.</p></li>
  <li><p>À l'intérieur de l'élément vide <a href="/fr/docs/Web/HTML/Element/script"><code>&lt;script&gt;</code></a> de votre page, commencez par ajouter les lignes de code suivantes qui définissent certaines constantes et variables dont vous aurez besoin dans le reste du code :</p>
    <pre class="brush: js">const spinner = document.querySelector('.spinner p');
const spinnerContainer = document.querySelector('.spinner');
let rotateCount = 0;
let startTime = null;
let rAF;
const btn = document.querySelector('button');
const result = document.querySelector('.result');</pre>
    <p>Dans l'ordre, ce sont :</p>
    <ol>
      <li>Une référence à la toupie, afin que vous puissiez l'animer.</li>
      <li>Une référence à l'élément <a href="/fr/docs/Web/HTML/Element/div"><code>&lt;div&gt;</code></a> qui contient la toupie, utilisée pour l'afficher et la masquer.</li>
      <li>Un nombre de rotations. Ce paramètre détermine le nombre de rotations de la toupie que vous souhaitez afficher à chaque image de l'animation.</li>
      <li>Un temps de démarrage nul. Il sera rempli avec une heure de début lorsque la toupie commencera à tourner.</li>
      <li>Une variable non initialisée pour stocker ultérieurement l'appel <a href="/fr/docs/Web/API/Window/requestAnimationFrame"><code>requestAnimationFrame()</code></a> qui anime la toupie.</li>
      <li>Une référence au bouton de démarrage.</li>
      <li>Une référence au paragraphe des résultats.</li>
    </ol>
  </li>
  <li><p>Ensuite, sous les lignes de code précédentes, ajoutez la fonction suivante. Elle prend deux nombres et retourne un nombre aléatoire entre les deux. Vous en aurez besoin pour générer un intervalle de temps aléatoire plus tard.</p>
    <pre class="brush: js">function random(min,max) {
  var num = Math.floor(Math.random()*(max-min)) + min;
  return num;
}</pre>
  </li>
  <li><p>Ajoutez ensuite la fonction <code>draw()</code>, qui anime la toupie. Cette version est très similaire à celle de l'exemple simple de la toupie, plus haut :</p>
    <pre class="brush: js">function draw(timestamp) {
  if(!startTime) {
   startTime = timestamp;
  }

  rotateCount = (timestamp - startTime) / 3;

  rotateCount %= 360;

  spinner.style.transform = 'rotate(' + rotateCount + 'deg)';
  rAF = requestAnimationFrame(draw);
}</pre>
  </li>
  <li><p>Il est maintenant temps de mettre en place l'état initial de l'application lors du premier chargement de la page. Ajoutez les deux lignes suivantes, qui masquent le paragraphe des résultats et le conteneur de la toupie en utilisant <code>display : none;</code>.</p>
    <pre class="brush: js">result.style.display = 'none';
spinnerContainer.style.display = 'none';</pre>
  </li>
  <li><p>Ensuite, définissez une fonction <code>reset()</code>, qui remet l'application dans l'état initial nécessaire pour relancer le jeu après qu'il a été joué. Ajoutez ce qui suit au bas de votre code :</p>
    <pre class="brush: js">function reset() {
  btn.style.display = 'block';
  result.textContent = '';
  result.style.display = 'none';
}</pre>
  </li>
  <li><p>Bon, assez de préparation !  Il est temps de rendre le jeu jouable ! Ajoutez le bloc suivant à votre code. La fonction <code>start()</code> appelle <code>draw()</code> pour commencer à faire tourner la toupie et l'afficher dans l'interface utilisateur, cache le bouton <em>Start</em> pour que vous ne puissiez pas perturber le jeu en le démarrant plusieurs fois simultanément, et exécute un appel <code>setTimeout()</code> qui exécute une fonction <code>setEndgame()</code> après qu'un intervalle aléatoire entre 5 et 10 secondes se soit écoulé. Le bloc suivant ajoute également un écouteur d'événements à votre bouton pour exécuter la fonction <code>start()</code> lorsqu'il est cliqué.</p>
    <pre class="brush: js">btn.addEventListener('click', start);

function start() {
  draw();
  spinnerContainer.style.display = 'block';
  btn.style.display = 'none';
  setTimeout(setEndgame, random(5000,10000));
}</pre>
    <div class="note">
      <p><strong>Note :</strong> Vous verrez que cet exemple appelle <code>setTimeout()</code> sans stocker la valeur de retour. (Donc, pas <code>let myTimeout = setTimeout(functionName, interval)</code>.)</p>
      <p>Cela fonctionne très bien, tant que vous n'avez pas besoin d'effacer votre intervalle/temps d'attente à un moment donné. Si vous le faites, vous devrez sauvegarder l'identifiant renvoyé !</p>
    </div>
    <p>Le résultat net du code précédent est que lorsque le bouton <em>Start</em> est pressé, la toupie est affichée et les joueurs sont amenés à attendre un temps aléatoire avant d'être invités à appuyer sur leur bouton. Cette dernière partie est gérée par la fonction <code>setEndgame()</code>, que vous allez définir ensuite.</p>
  </li>
  <li><p>Ajoutez ensuite la fonction suivante à votre code :</p>
    <pre class="brush: js">function setEndgame() {
  cancelAnimationFrame(rAF);
  spinnerContainer.style.display = 'none';
  result.style.display = 'block';
  result.textContent = 'JOUEURS : ALLEZ-Y !!';

  document.addEventListener('keydown', keyHandler);

  function keyHandler(e) {
    let isOver = false;
    console.log(e.key);

    if (e.key === "a") {
      result.textContent = 'Le joueur 1 a gagné !!';
      isOver = true;
    } else if (e.key === "l") {
      result.textContent = 'Le joueur 2 a gagné !!';
      isOver = true;
    }

    if (isOver) {
      document.removeEventListener('keydown', keyHandler);
      setTimeout(reset, 5000);
    }
  };
}</pre>
    <p>Son fonctionnement :</p>
    <ol>
      <li>Tout d'abord, annule l'animation de la toupie avec <a href="/fr/docs/Web/API/Window/cancelAnimationFrame"><code>cancelAnimationFrame()</code></a> (il est toujours bon de nettoyer les processus inutiles), et cache le conteneur de la toupie.</li>
      <li>Ensuite, affiche le paragraphe des résultats et définissez son contenu textuel sur "JOUEURS : ALLEZ-Y !!" pour signaler aux joueurs qu'ils peuvent maintenant appuyer sur leur bouton pour gagner.</li>
      <li>Attache un écouteur d'événements <a href="/fr/docs/Web/API/Document/keydown_event"><code>keydown</code></a> au document. Lorsqu'un bouton quelconque est enfoncé, la fonction <code>keyHandler()</code> est exécutée.</li>
      <li>À l'intérieur de <code>keyHandler()</code>, le code inclut l'objet événement en tant que paramètre (représenté par <code>e</code>) - sa propriété <a href="/fr/docs/Web/API/KeyboardEvent/key"><code>key</code></a> contient la touche qui vient d'être pressée, et vous pouvez l'utiliser pour répondre à des pressions de touche spécifiques par des actions spécifiques.</li>
      <li>Définit la variable <code>isOver</code> à false, afin que nous puissions suivre si les bonnes touches ont été pressées pour que le joueur 1 ou 2 gagne. Nous ne voulons pas que le jeu se termine lorsqu'une mauvaise touche a été pressée.</li>
      <li>Enregistre <code>e.key</code> dans la console, ce qui est un moyen utile de connaître la valeur <code>key</code> des différentes touches sur lesquelles vous appuyez.</li>
      <li>Lorsque <code>e.key</code> est "a", affiche un message pour dire que le joueur 1 a gagné, et lorsque <code>e.key</code> est "l", affiche un message pour dire que le joueur 2 a gagné. (<strong>Note:</strong> Cela ne fonctionnera qu'avec les minuscules a et l - si un A ou un L majuscule est soumis (la touche plus <kbd>Shift</kbd>), il est compté comme une touche différente !). Si une de ces touches a été pressée, mettez <code>isOver</code> à <code>true</code>.</li>
      <li>Seulement si <code>isOver</code> est <code>true</code>, supprime l'écouteur d'événements <code>keydown</code> en utilisant <a href="/fr/docs/Web/API/EventTarget/removeEventListener"><code>removeEventListener()</code></a> de sorte qu'une fois que l'appui gagnant s'est produit, plus aucune entrée clavier n'est possible pour perturber le résultat final du jeu. Vous utilisez également <code>setTimeout()</code> pour appeler <code>reset()</code> après 5 secondes - comme expliqué précédemment, cette fonction réinitialise le jeu à son état initial afin qu'une nouvelle partie puisse être lancée.</li>
    </ol>
  </li>
</ol>

<p>Voilà, c'est fait !</p>

<div class="note">
  <p><strong>Note :</strong> Si vous êtes bloqué, consultez <a href="https://mdn.github.io/learning-area/javascript/asynchronous/loops-and-intervals/reaction-game.html">notre version du jeu en live</a> (voir également le <a href="https://github.com/mdn/learning-area/blob/master/javascript/asynchronous/loops-and-intervals/reaction-game.html">code source</a>).</p>
</div>

<h2 id="conclusion">Conclusion</h2>

<p>Voilà, tous les éléments essentiels des boucles et des intervalles asynchrones sont couverts dans un seul article. Vous trouverez ces méthodes utiles dans de nombreuses situations, mais veillez à ne pas en abuser ! Parce qu'ils s'exécutent toujours sur le processus principal, les rappels lourds et intensifs (en particulier ceux qui manipulent le DOM) peuvent vraiment ralentir une page si vous ne faites pas attention.</p>

<p>{{PreviousMenuNext("Learn/JavaScript/Asynchronous/Introducing", "Learn/JavaScript/Asynchronous/Promises", "Learn/JavaScript/Asynchronous")}}</p>

<h2 id="in_this_module">Dans ce module</h2>

<ul>
  <li><a href="/fr/docs/Learn/JavaScript/Asynchronous/Concepts">Concepts généraux de programmation asynchrone</a></li>
  <li><a href="/fr/docs/Learn/JavaScript/Asynchronous/Introducing">Introduction au JavaScript asynchrone</a></li>
  <li><a href="/fr/docs/Learn/JavaScript/Asynchronous/Timeouts_and_intervals">JavaScript asynchrone coopératif : Délais et intervalles</a></li>
  <li><a href="/fr/docs/Learn/JavaScript/Asynchronous/Promises">Gérer les opérations asynchrones avec élégance grâce aux Promesses</a></li>
  <li><a href="/fr/docs/Learn/JavaScript/Asynchronous/Async_await">Faciliter la programmation asynchrone avec async et await</a></li>
  <li><a href="/fr/docs/Learn/JavaScript/Asynchronous/Choosing_the_right_approach">Choisir la bonne approche</a></li>
</ul>
