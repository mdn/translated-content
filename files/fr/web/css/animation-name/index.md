---
title: animation-name
slug: Web/CSS/animation-name
tags:
  - CSS
  - Propriété
  - Reference
translation_of: Web/CSS/animation-name
---
<div>{{CSSRef}}</div>

<p>La propriété <strong><code>animation-name</code></strong> définit une liste d'animations qui doivent être appliquées à l'élément ciblé. Chaque nom indique une règle @ {{cssxref("@keyframes")}} qui définit les valeurs des propriétés pour la séquence.</p>

<div>{{EmbedInteractiveExample("pages/css/animation-name.html")}}</div>

<p>Généralement, on pourra utiliser la propriété raccourcie {{cssxref("animation")}} pour définir l'ensemble des propriétés liées aux animations.</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="brush:css no-line-numbers">/* Valeur avec un mot-clé */
animation-name: none;

/* Valeur utilisant un identifiant */
animation-name: test_05;

/* Gestion de plusieurs animations */
animation-name: test1, animation4;

/*  Valeurs globales * /
animation-name: initial
animation-name: inherit
animation-name: unset
</pre>

<h3 id="Valeurs">Valeurs</h3>

<dl>
 <dt><code>none</code></dt>
 <dd>Un mot-clé qui indique qu'aucune étape (<em>keyframe</em>) ne sera utilisée. Il peut être utilisée pour désactiver une animation sans changer l'ordre des autres identifiants ou afin de désactiver les animations provenant de la cascade.</dd>
 <dt>{{cssxref("custom-ident","&lt;custom-ident&gt;")}}</dt>
 <dd>Une chaîne de caractères qui identifie l'animation. Un identifiant est une séquence, insensible à la casse, de lettres entre <code>a</code> et <code>z</code>, de nombres entre <code>0</code> et <code>9</code>, de tirets bas (<code>_</code>) et/ou de tirets (<code>-</code>). Le première caractère qui n'est pas un tiret doit être une lettre. Il est également interdit d'utiliser deux tirets en début d'identifiant. Enfin, la chaîne de l'identifiant ne peut pas être <code>unset</code>, <code>initial</code>, <code>inherit</code> ou une combinaison analogue avec une casse différente.</dd>
</dl>

<div class="note">
<p><strong>Note :</strong> Lorsqu'on utiliser plusieurs valeurs, séparées par des virgules, pour une propriété <code>animation-*</code>, selon leur quantité, elles seront différemment affectées aux animations définies par {{cssxref("animation-name")}}. Pour plus d'informations, voir : paramétrer <a href="/fr/docs/Web/CSS/Animations_CSS/Utiliser_les_animations_CSS">les valeurs des propriétés pour plusieurs animations</a>.</p>
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

<pre class="brush: html">&lt;p&gt;
  La Chenille et Alice se considérèrent un instant en silence.
  Enfin la Chenille sortit le houka de sa bouche, et lui adressa
  la parole d’une voix endormie et traînante.
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
   <td>{{SpecName('CSS3 Animations', '#animation-name', 'animation-name')}}</td>
   <td>{{Spec2('CSS3 Animations')}}</td>
   <td>Définition initiale.</td>
  </tr>
 </tbody>
</table>

<p>{{cssinfo}}</p>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("css.properties.animation-name")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><a href="/fr/docs/Web/CSS/CSS_Animations/Utiliser_les_animations_CSS">Manipuler les animations CSS</a></li>
 <li>{{domxref("AnimationEvent", "AnimationEvent")}}</li>
</ul>
