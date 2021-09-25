---
title: Trucs et astuces pour les animations CSS
slug: Web/CSS/CSS_Animations/Tips
tags:
  - Animations CSS
  - CSS
  - Exemple
  - Guide
  - Tutoriel
translation_of: Web/CSS/CSS_Animations/Tips
original_slug: Web/CSS/Animations_CSS/Conseils
---
<div>{{CSSRef}}</div>

<p>Les animations CSS permettent de réaliser réaliser des effets incroyables en mainpulant les éléments de vos documents et applications.. Cependant, il est parfois compliqué d'obtenir l'effet désiré. Dans cet article, on explorera différents conseils visant à simplifier la réalisation d'animations.</p>

<h2 id="Relancer_une_animation">Relancer une animation</h2>

<p>La spécifications des <a href="/en-US/docs/Web/CSS/CSS_Animations">animations CSS</a> ne permet pas de relancer une animation. Il n'existe pas de méthode <code>resetAnimation()</code> qui puisse être appelée sur les éléments et on ne peut pas utiliser la propriété {{cssxref("animation-play-state")}} pour la redéfinir sur <code>"running"</code>. Pour obtenir cet effet qui permette de relancer une animation terminée, on utilisera cette astuce.</p>

<h3 id="CSS">CSS</h3>

<p>Tout d'abord, on définit l'animation avec des règles CSS (certaines règles superflues sont masquées ici à des fins de concision).</p>

<pre class="brush: css hidden">.runButton {
  cursor: pointer;
  width: 300px;
  border: 1px solid black;
  font-size: 16px;
  text-align: center;
  margin-top: 12px;
  padding-top: 2px;
  padding-bottom: 4px;
  color: white;
  background-color: darkgreen;
  font: 14px "Open Sans", "Arial", sans-serif;
}</pre>

<pre class="brush: css">@keyframes colorchange {
  0% { background: yellow }
  100% { background: blue }
}

.box {
  width: 100px;
  height: 100px;
  border: 1px solid black;
}

.changing {
  animation: colorchange 2s;
}</pre>

<p>On a deux classes qui sont définies. La classe <code>box</code> qui décrit l'apparence de la boîte, sans aucune information relative à l'animation. Les détails de l'animation sont inclus dans la classe <code>changing</code> qui indique que les {{cssxref("@keyframes")}} intitulées <code>colorchange</code> doivent être utilisées sur une période de deux secondes afin d'animer la boîte.</p>

<p>Si on n'utilise que ces règles, la boîte n'est pas animée lorsqu'elle s'affiche.</p>

<h3 id="HTML">HTML</h3>

<p>Voici le fragment de HTML où on utilise un élément {{HTMLElement("div")}} qu'on veut animer et un bouton pour lancer (ou relancer) l'animation.</p>

<pre class="brush: html">&lt;div class="box"&gt;
&lt;/div&gt;

&lt;div class="runButton" onclick="play()"&gt;Cliquer pour lancer l'animation&lt;/div&gt;</pre>

<h3 id="JavaScript">JavaScript</h3>

<p>Enfin, voyons le JavaScript qui sera utilisé. Cette technique repose principalement sur la fonction <code>play()</code> qui est appelée lorsque l'utilisateur clique sur le bouton.</p>

<pre class="brush: js">function play() {
  document.querySelector(".box").className = "box";
  window.requestAnimationFrame(function(time) {
    window.requestAnimationFrame(function(time) {
      document.querySelector(".box").className = "box changing";
    });
  });
}</pre>

<p>Cela paraît un peu étrange. Mais afin que l'animation soit lancée à nouveau, il faut : retirer l'effet d'animation, lancer le recalcul des styles dans le document pour que cette action soit enregistrée puis ajouter l'animation à nouveau sur l'élément.</p>

<p>Voici ce qui se produit lorsque la fonction <code>play()</code> est appelée :</p>

<ol>
 <li>On réinitialise la liste des classes CSS de la boîte avec uniquement <code>box</code>. Ce faisant, on retire toutes les autres classes qui s'appliquaient à la boîte, y compris la classe <code>changing</code> en charge de l'animation. Autrement dit, on retire l'effet d'animation. Toutefois, ces modifications de classes n'auront pas d'effet tant que les styles ne sont pas recalculés et qu'un rafraîchissement est réalisé pour appliquer ces modifications.</li>
 <li>Afin de s'assurer que les styles sont recalculés, on utilise {{domxref("window.requestAnimationFrame()")}} en définissant une fonction de rappel (<em>callback</em>). La fonction de rappel est exécutée juste avant le prochain rafraîchissement du document. Seul problème : avant le rafraîchissement, le recalcul des styles n'a pas encore eu lieu. Aussi…</li>
 <li>Notre fonction de rappel invoque à nouveau <code>requestAnimationFrame()</code> ! Cette fois, la fonction de rappel est lancée avant le prochain rafraîchissement qui aura lieu après le recalcul des styles. Dans cette nouvelle fonction de rappel, on ajoute la classe <code>changing</code> à la boîte afin que l'animation soit lancée lors du rafraîchissement.</li>
</ol>

<p>Bien entendu, on ajoutera également un gestion d'événement au bouton pour que l'ensemble soit bien branché :</p>

<pre class="brush: js">document.querySelector(".runButton").addEventListener("click", play, false);</pre>

<h3 id="Résultat">Résultat</h3>

<p>{{EmbedLiveSample('Relancer_une_animation', 320, 160)}}</p>

<h2 id="Arrêter_une_animation">Arrêter une animation</h2>

<p>Si on retire la propriété {{cssxref("animation-name")}} appliquée à un élément, l'animation s'arrêtera au prochain état défini. Si on souhaite plutôt que l'animation se termine et parvienne à un point d'arrêt, il faudra utiliser une autre approche. Voici quelques pistes :</p>

<ol>
 <li>L'animation doit être la plus isolée possible et on ne doit pas reposer sur  <code>animation-direction: alternate</code>. Il faut une animation explicitement séquencée qui parcourt l'ensemble de l'animation en un cycle.</li>
 <li>Utiliser JavaScript pour retirer l'animation lorsque l'évènement <code>animationiteration</code> se déclenche.</li>
</ol>

<p>Ces pistes sont utilisées dans la démonstration suivante :</p>

<h3 id="CSS_2">CSS</h3>

<pre class="brush: css">.slidein {
  animation-duration: 5s;
  animation-name: slidein;
  animation-iteration-count: infinite;
}

.stopped {
  animation-name: none;
}

@keyframes slidein {
  0% {
    margin-left: 0%;
  }
  50% {
    margin-left: 50%;
  }
  100% {
    margin-left: 0%;
  }
}
</pre>

<h3 id="HTML_2">HTML</h3>

<pre class="brush: html">&lt;h1 id="watchme"&gt;Cliquer pour arrêter&lt;/h1&gt;
</pre>

<h3 id="JavaScript_2">JavaScript</h3>

<pre class="brush: js">let watchme = document.getElementById('watchme')

watchme.className = 'slidein'
const listener = (e) =&gt; {
  watchme.className = 'slidein stopped'
}
watchme.addEventListener('click', () =&gt;
  watchme.addEventListener('animationiteration', listener, false)
)
</pre>

<h3 id="Résultat_2">Résultat</h3>

<p>{{EmbedLiveSample("Arrêter_une_animation")}}</p>

<p><a href="https://jsfiddle.net/morenoh149/5ty5a4oy/">Voir cette démo</a></p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><a href="/fr/docs/Web/CSS/Animations_CSS/Utiliser_les_animations_CSS">Manipuler les animations CSS</a></li>
 <li><a href="/fr/docs/Web/CSS/Animations_CSS">Les animations CSS</a></li>
 <li>{{domxref("Window.requestAnimationFrame()")}}</li>
</ul>
