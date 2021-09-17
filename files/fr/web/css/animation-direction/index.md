---
title: animation-direction
slug: Web/CSS/animation-direction
tags:
  - CSS
  - Propriété
  - Reference
translation_of: Web/CSS/animation-direction
---
<div>{{CSSRef}}</div>

<p>La propriété <strong><code>animation-direction</code></strong> indique si les cycles de l'animation doivent être joués dans le sens inverse et/ou de façon alternée.</p>

<div>{{EmbedInteractiveExample("pages/css/animation-direction.html")}}</div>

<p>Généralement, on passera par la propriété raccourcie {{cssxref("animation")}} qui permet de définir les différentes propriétés liées aux animations avec une déclaration.</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="brush: css no-line-numbers">/* Valeurs avec un mot-clé */
animation-direction: normal;
animation-direction: reverse;
animation-direction: alternate;
animation-direction: alternate-reverse;

/* Gestion de plusieurs animations */
animation-direction: normal, reverse;
animation-direction: alternate, reverse, normal;

/* Valeurs globales */
animation-direction: inherit;
animation-direction: initial;
animation-direction: unset;
</pre>

<h3 id="Valeurs">Valeurs</h3>

<dl>
 <dt><code>normal</code></dt>
 <dd>L'animation est jouée dans le sens normal à chaque cycle. Autrement dit, au début de chaque cycle, l'animation est initialisée dans l'état de début. C'est le réglage par défaut.</dd>
 <dt><code>reverse</code></dt>
 <dd>L'animation est jouée dans le sens inverse à chaque cycle. Au début de chaque cycle, l'animation reprend depuis l'état de fin.</dd>
 <dt><code>alternate</code></dt>
 <dd>La lecture de l'animation se fait de façon alternée et change de sens à chaque cycle en commençant par le sens normal. Lorsque le sens est inversé, les étapes de l'animation sont effectuées de façon inversée et les fonctions de progression (<em>timing function</em><em>s</em>) sont également inversées (<code>ease-in</code> sera ainsi remplacée par <code>ease-out</code>). Le premier cycle se fait dans le sens normal, le deuxième dans le sens inverse et ainsi de suite.</dd>
 <dt><code>alternate-reverse</code></dt>
 <dd>La lecture de l'animation se fait de façon alternée et change de sens à chaque cycle en commençant par le sens inverse (cf. ci-avant). Le premier cycle se fait dans le sens inverse, le deuxième dans le sens normal et ainsi de suite.</dd>
</dl>

<div class="note">
<p><strong>Note :</strong> Lorsqu'on utiliser plusieurs valeurs, séparées par des virgules, pour une propriété <code>animation-*</code>, selon leur quantité, elles seront différemment affectées aux animations définies par {{cssxref("animation-name")}}. Pour plus d'informations, voir : paramétrer <a href="/fr/docs/Web/CSS/Animations_CSS/Utiliser_les_animations_CSS">les valeurs des propriétés pour plusieurs animations</a>.</p>
</div>

<h3 id="Syntaxe_formelle">Syntaxe formelle</h3>

{{csssyntax}}

<h2 id="Exemples">Exemples</h2>

<h3 id="CSS">CSS</h3>

<pre class="brush: css">p {
  animation-duration: 5s;
  animation-name: glissement;
  animation-iteration-count: infinite;
}

.aller {
  animation-direction: normal;
}

.retour {
  animation-direction: reverse;
}
@keyframes glissement {
  from {
    margin-left: 100%;
    width: 300%;
  }

  to {
    margin-left: 0%;
    width: 100%;
  }
}</pre>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;p class="aller"&gt;
  La Chenille et Alice se considérèrent un instant en silence.
  Enfin la Chenille sortit le houka de sa bouche, et lui adressa
  la parole d’une voix endormie et traînante.
&lt;/p&gt;

&lt;p class="retour"&gt;
  « Revenez, » lui cria la Chenille. « J’ai quelque chose
  d’important à vous dire ! »
&lt;/p&gt;</pre>

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
   <td>{{SpecName('CSS3 Animations', '#animation-direction', 'animation-direction')}}</td>
   <td>{{Spec2('CSS3 Animations')}}</td>
   <td>Définition initiale.</td>
  </tr>
 </tbody>
</table>

<p>{{cssinfo}}</p>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("css.properties.animation-direction")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><a href="/fr/docs/Web/CSS/CSS_Animations/Utiliser_les_animations_CSS" title="Tutorial about CSS animations">Manipuler les animations CSS</a></li>
 <li>{{domxref("AnimationEvent", "AnimationEvent")}}</li>
</ul>
