---
title: Gestes pincer et zoomer
slug: Web/API/Pointer_events/Pinch_zoom_gestures
tags:
  - Guide
  - PointerEvent
  - touch
translation_of: Web/API/Pointer_events/Pinch_zoom_gestures
original_slug: Web/API/Pointer_events/gestes_pincer_zoom
---
<p>{{DefaultAPISidebar("Pointer Events")}}</p>

<p>Ajouter la gestion des <em>gestes</em> à une application peut améliorer de manière significative l'expérience utilisateur. Il existe de nombreux types de gestes, du simple geste <em>swipe</em> (balayage de l'écran) aux gestes plus complexes avec plusieurs doigts comme le <em>twist</em> (rotation), où les points de contact (dits <em>pointeurs</em>) bougent dans des directions différentes.</p>

<p>Cet exemple montre comment détecter les gestes de <em>pinch/zoom</em> (pincer/zoomer), en utilisant les {{domxref("Pointer_events","événements de pointeur")}} pour détecter si l'utilisateur bouge deux pointeurs plus proches ou plus loin l'un de l'autre. </p>

<div class="note">
<p><strong>Note :</strong> Une version <em>en direct</em> de cette application est disponible sur <a href="https://mdn.github.io/dom-examples/pointerevents/Pinch_zoom_gestures.html">Github</a>. Le <a href="https://github.com/mdn/dom-examples/blob/master/pointerevents/Pinch_zoom_gestures.html">code source est également disponible sur Github</a>; les pull requests et <a href="https://github.com/mdn/dom-examples/issues">bug reports</a> sont les bienvenus.</p>
</div>

<h2 id="Exemple">Exemple</h2>

<p>Dans cet exemple, on utilise les {{domxref("Pointer_events","événement de pointeur")}} pour détecter simultanément plusieurs appareils de pointage quel qu'en soit le type, comme les doigts, la souris, et le stylet. Le geste de pincer (zoomer), qui consiste à déplacer deux pointeurs plus près l'un vers l'autre, change la couleur d'arrière-plan de l'élément cible en  <code>lightblue</code>. Le geste d'étirer (dézoomer), qui consiste à déplacer deux pointeur plus loin l'un de l'autre, change la couleur d'arrière-plan de l'élément cible en <code>pink</code>.</p>

<h3 id="Définir_la_cible_du_toucher">Définir la cible du toucher</h3>

<p>L'application utilise un {{HTMLElement("div")}} pour définir la zone cible du pointeur.</p>

<pre class="brush: html">&lt;style&gt;
  div {
    margin: 0em;
    padding: 2em;
  }
  #target {
    background: white;
    border: 1px solid black;
  }
&lt;/style&gt;
</pre>

<h3 id="État_global">État global</h3>

<p>Prendre en charge un mouvement à deux pointeurs nécessite de conserver un état des événements du pointeur durant les différentes phases de l'événement. Cette application utilise deux variables globales pour mettre en cache l'état de l'événement.</p>

<pre class="brush: js">// Variables globales pour mettre en cache l'état de l'événement
var evCache = new Array();
var prevDiff = -1;
</pre>

<h3 id="Enregistrer_les_gestionnaires_d'événement">Enregistrer les gestionnaires d'événement</h3>

<p>Les gestionnaires d'événement sont enregistrés pour les événements de pointeur suivants: {{event("pointerdown")}}, {{event("pointermove")}} et {{event("pointerup")}}. Le gestionnaire pour {{event("pointerup")}} est utilisé pour les événements {{event("pointercancel")}}, {{event("pointerout")}} et {{event("pointerleave")}} puisque ces quatre événements ont la même sémantique dans cette application.</p>

<pre class="brush: js">function init() {
 // Ajoute les gestionnaires d'événements pour la cible du pointeur
 var el=document.getElementById("target");
 el.onpointerdown = pointerdown_handler;
 el.onpointermove = pointermove_handler;

 // Même chose pour les événements pointer{up,cancel,out,leave} puisque
 // la sémantique pour ces événements - dans cette appli - est identique.
 el.onpointerup = pointerup_handler;
 el.onpointercancel = pointerup_handler;
 el.onpointerout = pointerup_handler;
 el.onpointerleave = pointerup_handler;
}
</pre>

<h3 id="Pointer_down">Pointer down</h3>

<p>L'événement {{event("pointerdown")}} est déclenché quand un pointeur (souris, stylo/stylet ou point de contact sur un écran tactile) entre en contact avec la <em>surface de contact</em>. Dans cette application, l'état de l'événement doit être mis en cache dans le cas où il fait partie d'un geste à deux pointeurs pour pincer/zoomer.</p>

<pre class="brush: js">function pointerdown_handler(ev) {
 // L'événement pointerdown signale le début d'une interraction de toucher.
 // L'événement est mis en cache pour prendre en charge les gestes à 2 doigts
 evCache.push(ev);
 log("pointerDown", ev);
}
</pre>

<h3 id="Pointer_move">Pointer move</h3>

<p>Le gestionnaire d'événement {{event("pointermove")}} détecte si un utilisateur est en train d'effectuer le geste de pincer/zoomer. Si deux pointeurs sont utilisés, et que la distance entre les pointeurs augmente (ce qui signifie qu'on étire ou dézoome), la couleur d'arrière-plan est changée en <code>pink</code>, et si la distance entre les pointeurs diminue (ce qui signifie qu'on pince ou dézoome), la couleur d'arrière-plan est changée en <code>lightblue</code>. Dans une application plus sophistiquée, le pincement ou l'étirement pourrait être utilisé pour appliquer une sémantique spécifique à l'application.</p>

<p>Quand cet événement est traité, la bordure de la cible est définie à <code>dashed</code> pour fournir une indication visuelle claire que l'élément a reçu un événement de déplacement.</p>

<pre class="brush: js">function pointermove_handler(ev) {
 // Cette fonction implémente la détection du mouvement horizontal pincer/zoomer.
 //
 // Si la distance entre les deux pointeurs augmente (zoomer),
 // l'arrière-plan de l'élément cible est changé en "pink" et si la
 // distance diminue (dezoomer), la couleur est changée en "lightblue".
 //
 // Cette fonctionne définie la bordure de l'élément cible à "dashed" pour indiquer
 // visuellement que la cible du pointeur a reçu un événement de déplacement.
 log("pointerMove", ev);
 ev.target.style.border = "dashed";

 // Trouve le pointeur en cours dans le cache et le met à jour avec cet événement
 for (var i = 0; i &lt; evCache.length; i++) {
   if (ev.pointerId == evCache[i].pointerId) {
      evCache[i] = ev;
      break;
   }
 }

 // Si deux pointeurs sont utilisés, vérifie le geste de pincement
 if (evCache.length == 2) {
   // Calcule la distance entre les deux pointeurs
   var curDiff = Math.abs(evCache[0].clientX - evCache[1].clientX);

   if (prevDiff &gt; 0) {
     if (curDiff &gt; prevDiff) {
       // La distance entre les deux pointeurs a augmenté
       log("Pinch moving OUT -&gt; Zoom in", ev);
       ev.target.style.background = "pink";
     }
     if (curDiff &lt; prevDiff) {
       // La distance entre les deux pointeurs a diminué
       log("Pinch moving IN -&gt; Zoom out",ev);
       ev.target.style.background = "lightblue";
     }
   }

   // Met en cache la distance pour les événements suivants
   prevDiff = curDiff;
 }
}
</pre>

<h3 id="Pointer_up">Pointer up</h3>

<p>L'événement {{event("pointerup")}} est déclenché quand le pointeur est levé de la <em>surface de contact</em>. Quand cela arrive, l'événement est retiré du cache et la couleur d'arrière-plan et bordure de la cible sont rétablies à leur valeur d'origine.</p>

<p>Dans cette application, ce gestionnaire est également utilisé pour les événements {{event("pointercancel")}}, {{event("pointerleave")}} et {{event("pointerout")}}.</p>

<pre class="brush: js">function pointerup_handler(ev) {
  log(ev.type, ev);
  // Retire ce pointeur du cache et rétablit l'arrière-plan et
  // et bordure de la cible
  remove_event(ev);
  ev.target.style.background = "white";
  ev.target.style.border = "1px solid black";

  // Si le nombre de pointeurs restant est inférieur à deux, remet à zéro la différence
  if (evCache.length &lt; 2) prevDiff = -1;
}
</pre>

<h3 id="Application_UI">Application UI</h3>

<p>Cette application utilise un élément {{HTMLElement("div")}} comme zone de toucher et fournit des boutons pour activer et nettoyer les logs.</p>

<div class="note">
  <p><strong>Note :</strong> Pour empêcher que le comportement par défaut du navigateur au toucher surcharge le gestionnaire de l'application, la propriété {{cssxref("touch-action")}} est appliquée à l'élément {{HTMLElement("body")}}.</p>
</div>

<pre class="brush: html">&lt;body onload="init();" style="touch-action:none"&gt;
 &lt;div id="target"&gt;Touchez l'écran avec deux pointeurs, puis pincez ou étirez.&lt;br/&gt;
    La couleur d'arrière-plan changera en rose au pincement (Zoomer)
    ou en bleu clair à l'étirement (Dézoomer).&lt;/div&gt;
 &lt;!-- UI pour log/debug --&gt;
 &lt;button id="log" onclick="enableLog(event);"&gt;Démarrer/Stopper les logs&lt;/button&gt;
 &lt;button id="clearlog" onclick="clearLog(event);"&gt;Nettoyer les logs&lt;/button&gt;
 &lt;p&gt;&lt;/p&gt;
 &lt;output&gt;&lt;/output&gt;
&lt;/body&gt;
</pre>

<h3 id="Fonctions_diverses">Fonctions diverses</h3>

<p>Ces fonctions prennent en charge l'application mais ne sont pas directement impliquées dans le flux des événements.</p>

<h4 id="Gestion_du_Cache">Gestion du Cache</h4>

<p>Cette fonction aide à gérer le cache global des événements, <code>evCache</code>.</p>

<pre class="brush: js">function remove_event(ev) {
 // Supprime l'événement du cache
 for (var i = 0; i &lt; evCache.length; i++) {
   if (evCache[i].pointerId == ev.pointerId) {
     evCache.splice(i, 1);
     break;
   }
 }
}
</pre>

<h4 id="Log_des_événements">Log des événements</h4>

<p>Ces fonctions sont utilisées pour afficher l'activité du pointeur dans la fenêtre de l'application (pour aider à debugger et à apprendre le flux des événements).</p>

<pre class="brush: js">// Flag log
var logEvents = false;

// Fonctions Log/debug
function enableLog(ev) {
  logEvents = logEvents ? false : true;
}

function log(prefix, ev) {
  if (!logEvents) return;
  var o = document.getElementsByTagName('output')[0];
  var s = prefix + ": pointerID = " + ev.pointerId +
                " ; pointerType = " + ev.pointerType +
                " ; isPrimary = " + ev.isPrimary;
  o.innerHTML += s + "
";
}

function clearLog(event) {
 var o = document.getElementsByTagName('output')[0];
 o.innerHTML = "";
}
</pre>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><a href="https://hacks.mozilla.org/2015/08/pointer-events-now-in-firefox-nightly/">Pointer Events now in Firefox Nightly</a>; Mozilla Hacks; by Matt Brubeck and Jason Weathersby; 2015-Aug-04</li>
 <li><a href="https://github.com/jquery/PEP">jQuery Pointer Events Polyfill</a></li>
 <li><a href="http://www.google.com/design/spec/patterns/gestures.html">Gestures</a>; Google Design Patterns</li>
</ul>
