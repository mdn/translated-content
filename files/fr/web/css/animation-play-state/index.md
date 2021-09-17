---
title: animation-play-state
slug: Web/CSS/animation-play-state
tags:
  - CSS
  - Propriété
  - Reference
translation_of: Web/CSS/animation-play-state
---
<div>{{CSSRef}}</div>

<p>La propriété <strong><code>animation-play-state</code></strong> définit si une animation est en cours d'exécution ou si elle est en pause.</p>

<div>{{EmbedInteractiveExample("pages/css/animation-play-state.html")}}</div>

<p>Lorsqu'on reprend une animation en pause, celle-ci reprendra où elle avait été interrompue (elle ne recommencera pas depuis le début de la séquence).</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="brush: css no-line-numbers">/* On a une seule animation */
animation-play-state: running;
animation-play-state: paused;

/* On gère plusieurs animations */
/* avec des valeurs respectives */
animation-play-state: paused, running, running;

/* Valeurs globales */
animation-play-state: inherit;
animation-play-state: initial;
animation-play-state: unset;
</pre>

<h3 id="Valeurs">Valeurs</h3>

<dl>
 <dt><code>running</code></dt>
 <dd>L'animation est en cours.</dd>
 <dt><code>paused</code></dt>
 <dd>L'animation est en pause.</dd>
</dl>

<div class="note">
<p><strong>Note :</strong> Lorsqu'on utilise plusieurs valeurs, séparées par des virgules, pour une propriété <code>animation-*</code>, elles seront respectivement affectées aux animations définies par {{cssxref("animation-name")}}. Pour plus d'informations, voir : <a href="/fr/docs/Web/CSS/Animations_CSS/Utiliser_les_animations_CSS">paramétrer les valeurs des propriétés pour plusieurs animations</a>.</p>
</div>

<h3 id="Syntaxe_formelle">Syntaxe formelle</h3>

{{csssyntax}}

<h2 id="Exemples">Exemples</h2>

<h3 id="CSS">CSS</h3>

<pre class="brush: css">p {
  animation-duration: 3s;
  animation-name: glissement;
  animation-iteration-count: infinite;
}

.arret {
  animation-play-state: paused;
}

.encours {
  animation-play-state: running;
}

@keyframes glissement {
  from {
    margin-left: 100%;
    width: 200%;
  }

  to {
    margin-left: 0%;
    width: 100%;
  }
}</pre>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;p class="arret"&gt;
  La Chenille et Alice se considérèrent un instant en silence.
  Enfin la Chenille sortit le houka de sa bouche, et lui adressa
  la parole d’une voix endormie et traînante.
&lt;/p&gt;

&lt;p class="encours"&gt;
  Alice, un peu irritée du parler bref de la Chenille, se redressa
  de toute sa hauteur.
&lt;/p&gt; </pre>

<h3 id="Résultat">Résultat</h3>

<p>{{EmbedLiveSample("Exemples","300","200")}}</p>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">État</th>
   <th scope="col">Commentaires</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('CSS3 Animations', '#animation-play-state', 'animation-play-state')}}</td>
   <td>{{Spec2('CSS3 Animations')}}</td>
   <td>Définition initiale.</td>
  </tr>
 </tbody>
</table>

<p>{{cssinfo}}</p>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("css.properties.animation-play-state")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><a href="/fr/docs/Web/CSS/CSS_Animations/Utiliser_les_animations_CSS">Manipuler les animations CSS</a></li>
 <li>{{domxref("AnimationEvent", "AnimationEvent")}}</li>
</ul>
