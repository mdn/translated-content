---
title: white-space
slug: Web/CSS/white-space
tags:
  - CSS
  - Propriété
  - Reference
translation_of: Web/CSS/white-space
---
<div>{{CSSRef}}</div>

<p>La propriété <strong><code>white-space</code></strong> est utilisée pour décrire la façon dont les blancs sont gérés au sein de l'élément.</p>

<div>{{EmbedInteractiveExample("pages/css/white-space.html")}}</div>

<div class="note">
<p><strong>Note :</strong> Afin d'obtenir une césure au sein des mots, il faudra utiliser {{cssxref("overflow-wrap")}}, {{cssxref("word-break")}} ou bien {{cssxref("hyphens")}}.</p>
</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="brush: css no-line-numbers">/* Avec un mot-clé */
white-space: normal;
white-space: nowrap;
white-space: pre;
white-space: pre-wrap;
white-space: pre-line;
white-space: break-spaces;

/* Valeurs globales */
white-space: inherit;
white-space: initial;
white-space: unset;
</pre>

<p>La propriété <code>white-space</code> se définit avec l'un des mots-clés suivants.</p>

<h3 id="Valeurs">Valeurs</h3>

<dl>
 <dt><code>break-spaces</code></dt>
 <dd>Le comportement est identique à celui de <code>pre-wrap</code> mais chaque séquence de blancs continue d'occuper un espace, y compris en fin de ligne. Il y aura une opportunité de saut de ligne après chaque blanc. De tels espaces auront un impact sur les dimensions intrinsèques de la boîte (<code>min-content</code> et <code>max-content</code>).</dd>
 <dt><code>normal</code></dt>
 <dd>Les séries de blancs sont regroupées, les caractères de saut de ligne sont gérés comme les autres blancs. Les passages à la ligne sont faits naturellement pour remplir les boîtes.</dd>
 <dt><code>nowrap</code></dt>
 <dd>Les blancs sont regroupés comme avec <code>normal</code> mais les passages à la ligne automatiques sont supprimés.</dd>
 <dt><code>pre</code></dt>
 <dd>Les séries de blancs sont conservées telles quelles. Les sauts de ligne ont uniquement lieu avec les caractères de saut de ligne et avec les éléments {{HTMLElement("br")}}.</dd>
 <dt><code>pre-wrap</code></dt>
 <dd>Les séries de blancs sont conservées telles quelles. Les sauts de ligne ont lieu avec les caractères de saut de ligne, avec {{HTMLElement("br")}} et on a des passages à la ligne automatiques.</dd>
 <dt><code>pre-line</code></dt>
 <dd>Les séries de blancs sont regroupées, les sauts de lignes ont lieu avec les caractères de saut de ligne, les éléments {{HTMLElement("br")}} et on a des passages à la ligne automatiques.</dd>
</dl>

<p>Le tableau qui suit résume le comportement des différentes valeurs :</p>

<table class="standard-table">
 <thead>
  <tr>
   <th></th>
   <th>Nouvelles lignes</th>
   <th>Espaces et tabulations</th>
   <th>Retour à la ligne automatique</th>
   <th>Espaces en fin de ligne</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <th><code>normal</code></th>
   <td>Regroupées</td>
   <td>Regroupés</td>
   <td>Oui</td>
   <td>Retirés</td>
  </tr>
  <tr>
   <th><code>nowrap</code></th>
   <td>Regroupées</td>
   <td>Regroupés</td>
   <td>Non</td>
   <td>Retirés</td>
  </tr>
  <tr>
   <th><code>pre</code></th>
   <td>Préservées</td>
   <td>Préservés</td>
   <td>Non</td>
   <td>Conservés</td>
  </tr>
  <tr>
   <th><code>pre-wrap</code></th>
   <td>Préservées</td>
   <td>Préservés</td>
   <td>Oui</td>
   <td>Suspendus</td>
  </tr>
  <tr>
   <th><code>pre-line</code></th>
   <td>Préservées</td>
   <td>Regroupés</td>
   <td>Oui</td>
   <td>Retirés</td>
  </tr>
  <tr>
   <th><code>break-spaces</code></th>
   <td>Préservées</td>
   <td>Regroupés</td>
   <td>Oui</td>
   <td>Passent à la ligne.</td>
  </tr>
 </tbody>
</table>

<h3 id="Syntaxe_formelle">Syntaxe formelle</h3>

{{csssyntax}}

<h2 id="Exemples">Exemples</h2>

<h3 id="Exemple_simple">Exemple simple</h3>

<h4 id="HTML">HTML</h4>

<pre class="brush: html">&lt;code&gt;
var coucou = function(){
  // on notera l'indentation
  // avec deux espaces
  console.log("Hello World");

  var toto = function(){
    // ici 4 espaces
    console.log("Toto");
  }
  toto();
}
&lt;/code&gt;</pre>

<h4 id="CSS">CSS</h4>

<pre class="brush: css">code {
  white-space: pre;
}</pre>

<h4 id="Résultat">Résultat</h4>

<p>{{EmbedLiveSample("Exemple_simple")}}</p>

<h3 id="Passage_automatique_à_la_ligne_dans_un_élément_pre">Passage automatique à la ligne dans un élément <code>pre</code></h3>

<h4 id="HTML_2">HTML</h4>

<pre class="brush: html">&lt;pre&gt;
function jeNAuraisJamaisDuAppelerCetteFonctionAvecUnNomAussiLong(toto){
  console.log("Tout ça pour ça");
}
&lt;/pre&gt;</pre>

<h4 id="CSS_2">CSS</h4>

<pre class="brush: css">pre {
  word-wrap: break-word;      /* IE 5.5-7 */
  white-space: pre-wrap;      /* current browsers */
}</pre>

<h4 id="Résultat_2">Résultat</h4>

<p>{{EmbedLiveSample("Passage_automatique_à_la_ligne_dans_un_élément_pre")}}</p>

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
   <td>{{SpecName('CSS3 Text', '#propdef-white-space', 'white-space')}}</td>
   <td>{{Spec2('CSS3 Text')}}</td>
   <td>Définition de l'algorithme des césures de ligne et ajout de <code>break-spaces</code>.</td>
  </tr>
  <tr>
   <td>{{SpecName('CSS2.1', 'text.html#white-space-prop', 'white-space')}}</td>
   <td>{{Spec2('CSS2.1')}}</td>
   <td>Définition initiale.</td>
  </tr>
 </tbody>
</table>

<p>{{cssinfo}}</p>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<div>{{Compat("css.properties.white-space")}}</div>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{cssxref("overflow-wrap")}}</li>
 <li>{{cssxref("word-break")}}</li>
 <li>{{cssxref("hyphens")}}</li>
</ul>
