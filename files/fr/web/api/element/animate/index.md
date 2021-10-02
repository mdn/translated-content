---
title: Element.animate()
slug: Web/API/Element/animate
tags:
  - API
translation_of: Web/API/Element/animate
---
<p>{{APIRef('Web Animations')}} {{SeeCompatTable}}</p>

<p>La méthode <strong><code>Element.animate()</code></strong> est un raccourci permettant de créer et jouer une animation sur un élément. Elle retourne l'instance de type {{domxref("Animation")}} alors créée.</p>

<div class="note">
<p><strong>Note :</strong> Les éléments peuvent avoir plusieurs animations. Vous pouvez obtenir une liste des animations qui affectent un élément en appelant {{domxref("Element.getAnimations()")}}.</p>
</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="brush: js"><var>element</var>.animate(<var>keyframes</var>, <var>options</var>); </pre>

<h3 id="Paramèters">Paramèters</h3>

<dl>
 <dt><code>keyframes</code></dt>
 <dd><p>Un <a href="/en-US/docs/Web/API/Web_Animations_API/Keyframe_Formats">objet formatté représentant un ensemble de keyframes</a>.</p></dd>
 <dt><code>options</code></dt>
 <dd><p>Un nombre entier (<em>Integer</em>) <strong>représentant la durée de l'animation</strong> (en millisecondes), ou un objet (<em>Object</em>) <strong>contenant une ou plusieurs propriétés de timing</strong>:</p>
 <dl>
  <dt><code>id {{optional_inline}}</code></dt>
  <dd>Une propriété unique pour <code>animate()</code>: une <a href="/en-US/docs/Web/API/DOMString"><code>DOMString</code></a> qui permet de référencer l'animation.</dd>
 </dl>
 </dd>
</dl>

<div>{{Page("/en-US/docs/Web/API/Web_Animations_API/Animation_timing_properties", "Properties")}}</div>

<h4 id="Options_à_venir">Options à venir</h4>

<p>Les options suivantes n'ont pas encore été implémentées, mais seront ajoutées dans un futur proche.</p>

<dl>
 <dt><code>composite {{optional_inline}}</code></dt>
 <dd>Détermine comment sont combinées les valeurs de cette animation avec d'autres animations qui ne spécifient pas leur propre opération composite. La valeur par défaut est <code>replace</code>.
 <ul>
  <li><code>add</code> induit un effet d'ajout, dans lequel chaque itération successive se construit sur la précédente. Par exemple pour <code>transform</code>, une valeur <code>translateX(-200px)</code> n'annulerait pas une précédente valeur <code>rotate(20deg)</code> mais s'y ajouterait, pour donner <code>translateX(-200px) rotate(20deg)</code>.</li>
  <li><code>accumulate</code> est similaire mais un peu plus intéressant: <code>blur(2)</code> et <code>blur(5)</code> deviennent <code>blur(7) et non</code> <code>blur(2) blur(5)</code>.</li>
  <li><code>replace</code>, quand à elle, remplace la précédente valeur par la nouvelle. </li>
 </ul>
 </dd>
 <dt><code>iterationComposite {{optional_inline}}</code></dt>
 <dd>Détermine comment les valeurs se construisent, d'itération en itération, <strong>dans une même animation</strong>. Peut être définie par <code>accumulate</code> ou <code>replace</code> (voir ci-dessus). La valeur par défaut est <code>replace</code>.</dd>
 <dt><code>spacing {{optional_inline}}</code></dt>
 <dd><p>Détermine comment les keyframes sans offset temporel devraient être réparties sur la durée de l'animation. La valeur par défaut est <code>distribute</code>.</p>
 <ul>
  <li><code>distribute</code> positionne les keyframes de façon à ce que les différences entre deux offsets de keyframes successifs soient égaux, c'est-à-dire que, sans aucun offset, les keyframes seront distribuées régulièrement / également sur toute la durée de l'animation.</li>
  <li><code>paced</code> positionne les keyframes de façon à ce que les distances entre deux valeurs successives d'une propriété spécifiée par "paced" soient égales, c'est-à-dire que plus la différence entre les valeurs de ces propriétés successives est grande, plus les keyframes seront éloignées les unes des autres.</li>
 </ul>
 </dd>
</dl>

<h3 id="Valeur_de_retour">Valeur de retour</h3>

<p>Retourne un objet de type {{domxref("Animation")}}.</p>

<h2 id="Exemple">Exemple</h2>

<p>Dans la démo <a href="https://codepen.io/rachelnabors/pen/rxpmJL/?editors=0010">Down the Rabbit Hole (with the Web Animation API)</a>, la méthode <code>animate()</code> est utilisée pour immédiatement créer et jouer une animation sur l'élément <code>#tunnel,</code> pour le faire défiler vers le haut, indéfiniment. Remarquez le tableau d'objets définissant les keyframes et le bloc contenant les options de timing de l'animation.</p>

<pre class="brush: js">document.getElementById("tunnel").animate([
  // keyframes
  { transform: 'translateY(0px)' },
  { transform: 'translateY(-300px)' }
], {
  // timing options
  duration: 1000,
  iterations: Infinity
});
</pre>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">Statut</th>
   <th scope="col">Commentaire</th>
  </tr>
  <tr>
   <td>{{SpecName('Web Animations', '#the-animatable-interface', 'animate()' )}}</td>
   <td>{{Spec2('Web Animations')}}</td>
   <td>Initial definition</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("api.Element.animate")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><a href="/en-US/docs/Web/API/Web_Animations_API">Web Animations API</a></li>
 <li>{{domxref("Element.getAnimations()")}}</li>
 <li>{{domxref("Animation")}}</li>
</ul>
