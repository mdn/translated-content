---
title: Delay
slug: Web/API/EffectTiming/delay
tags:
  - API
  - Animation
  - AnimationEffectTimingProperties
  - Experimental
  - Propriété
  - Reference
translation_of: Web/API/EffectTiming/delay
original_slug: Web/API/AnimationEffectTimingProperties/delay
---
<div>{{SeeCompatTable}}{{APIRef("Web Animations")}}</div>

<p>La propriété <strong><code>delay</code></strong> est un dictionnaire pour {{domxref("AnimationEffectTimingProperties")}} qui représente le nombre de millisecondes à attendre avant de démarrer une animation.</p>

<div class="note">
<p><strong>Note :</strong> {{domxref("Element.animate()")}}, {{domxref("KeyframeEffectReadOnly.KeyframeEffectReadOnly", "KeyframeEffectReadOnly()")}} et {{domxref("KeyframeEffect.KeyframeEffect", "KeyframeEffect()")}} acceptent toutes un objet avec des propriétés de minutage, y compris <code>delay</code>. La valeur de <code>delay</code> correspond directement à {{domxref("AnimationEffectTimingReadOnly.delay")}} dans les objets  {{domxref("AnimationEffectReadOnly.timing")}} renvoyés par {{domxref("AnimationEffectReadOnly")}}, {{domxref("KeyframeEffectReadOnly")}} et {{domxref("KeyframeEffect")}}.</p>
</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox">var <em>timingProperties</em> = {
  delay: <em>delayInMilliseconds</em>
};

<em>timingProperties</em>.delay = <em>delayInMilliseconds</em>;
</pre>

<h3 id="Valeur">Valeur</h3>

<p>Un nombre qui indique la durée qui doit s'écouler entre le début du cycle de l'animation et le début de l'intervalle d'activité (c'est-à-dire le moment où l'animation commence réellement). La valeur par défaut est 0.</p>

<h2 id="Exemples">Exemples</h2>

<p>Dans l'exemple <em><a href="https://codepen.io/rachelnabors/pen/EPJdJx?editors=0010">Pool of Tears</a></em>, chaque larme commence à un instant aléatoire grâce à l'objet de minutage :</p>

<pre class="brush: js">// Générateur de valeurs plus
// ou moins aléatoires
var getRandomMsRange = function(min, max) {
  return Math.random() * (max - min) + min;
}

// On parcourt l'ensemble des larmes
tears.forEach(function(el) {

  // On anime chacune des larmes
  el.animate(
    tearsFalling,
    {
      delay: getRandomMsRange(-1000, 1000), // aléatoire pour chaque larme
      duration: getRandomMsRange(2000, 6000), // aléatoire pour chaque larme
      iterations: Infinity,
      easing: "cubic-bezier(0.6, 0.04, 0.98, 0.335)"
    });
});</pre>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">État</th>
   <th scope="col">Commentaires</th>
  </tr>
  <tr>
   <td>{{SpecName('Web Animations', '#start-delay', 'delay')}}</td>
   <td>{{Spec2('Web Animations')}}</td>
   <td>Brouillon d'édiiton.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("api.EffectTiming.delay")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><a href="/fr/docs/Web/API/Web_Animations_API">L'API Web Animations</a></li>
 <li>{{domxref("Element.animate()")}}, {{domxref("KeyframeEffectReadOnly.KeyframeEffectReadOnly", "KeyframeEffectReadOnly()")}}, et {{domxref("KeyframeEffect.KeyframeEffect", "KeyframeEffect()")}} qui acceptent toutes un objet de minutage, y compris celui-ci (<code>delay</code>)</li>
 <li>La valeur de cette propriété correspond à celle de {{domxref("AnimationEffectTimingReadOnly")}} (qui est l'objet de minutage {{domxref("AnimationEffectReadOnly.timing", "timing")}} pour {{domxref("AnimationEffectReadOnly")}}, {{domxref("KeyframeEffectReadOnly")}} et {{domxref("KeyframeEffect")}}).</li>
 <li>Les propriétés CSS {{cssxref("transition-delay")}} et {{cssxref("animation-delay")}}</li>
</ul>
