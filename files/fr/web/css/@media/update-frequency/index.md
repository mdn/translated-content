---
title: update
slug: Web/CSS/@media/update-frequency
tags:
  - CSS
  - Caractéristique média
  - Reference
translation_of: Web/CSS/@media/update-frequency
---
<div>{{CSSRef}}</div>

<p><strong><code>update</code></strong> est une caractéristique média (cf. {{cssxref("@media")}}) qui permet de vérifier la vitesse à laquelle l'appareil d'affichage peut modifier l'apparence du contenu.</p>

<h2 id="Syntaxe">Syntaxe</h2>

<p>La caractéristique <code>update</code> est définie avec un mot-clé parmi ceux de la liste ci-après.</p>

<dl>
 <dt><code>none</code></dt>
 <dd>Une fois le document affiché, son apparence ne peut plus être modifiée (ex. le document est imprimé sur du papier).</dd>
 <dt><code>slow</code></dt>
 <dd>Une fois le document affiché, son apparence peut évoluer mais lentement (ex. des livres électroniques utilisant une encre électronique ou des appareils de lecture avec un niveau d'énergie faible).</dd>
 <dt><code>fast</code></dt>
 <dd>Une fois le document affiché, son apparence peut évoluer rapidement (ex. un ordinateur qui serait capable de gérer les transitions CSS).</dd>
</dl>

<h2 id="Exemples">Exemples</h2>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;p&gt;
  Si ce texte est animé, cela signifie que vous utilisez
  un appareil avec un affichage qui évolue rapidement.
&lt;/p&gt;
</pre>

<h3 id="CSS">CSS</h3>

<pre class="brush: css">@keyframes jiggle {
  from {
    transform: translateY(0);
  }

  to {
    transform: translateY(25px);
  }
}

@media (update: fast) {
  p {
    animation: 1s jiggle linear alternate infinite;
  }
}</pre>

<h3 id="Résultat">Résultat</h3>

<p>{{EmbedLiveSample("Exemples")}}</p>

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
   <td>{{SpecName('CSS4 Media Queries', '#update', 'update')}}</td>
   <td>{{Spec2('CSS4 Media Queries')}}</td>
   <td>Définition initiale.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("css.at-rules.media.update")}}</p>
