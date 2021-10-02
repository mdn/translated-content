---
title: CDATASection
slug: Web/API/CDATASection
tags:
  - API
  - DOM
  - Interface
  - Référence(2)
  - Section
translation_of: Web/API/CDATASection
---
<div>{{APIRef("DOM")}}</div>

<p>L'interface <code><strong>CDATASection</strong></code> représente une section CDATA qui peut être utilisée dans un document XML afin d'inclure des portions de texte qui ne sont pas échappées (les symboles &lt; et &amp; présents dans ces portions n'ont pas besoin d'être échappés comme ils doivent l'être normalement dans un document XML).</p>

<p>En termes de balisage, une section CDATA a la forme suivante :</p>

<pre class="syntaxbox">&lt;![CDATA[  ... ]]&gt;
</pre>

<p>Par exemple :</p>

<pre class="brush:xml">&lt;toto&gt;
  Voici une section CDATA :
  &lt;![CDATA[  &lt; &gt; &amp; ]]&gt; dans laquelle
  le texte n'est pas échappé.
&lt;/toto&gt;
</pre>

<p>La seule séquence qui n'est pas autorisée dans une section CDATA est le délimiteur de fin d'une séquence CDATA lui-même :</p>

<pre class="brush:xml">&lt;![CDATA[  ]]&gt; causera une erreur   ]]&gt;
</pre>

<p>On notera que les sections ne doivent pas être utilisées dans des documents HTML.</p>

<p>{{InheritanceDiagram(600,120)}}</p>

<h2 id="Propriétés">Propriétés</h2>

<p><em>Cette interface ne dispose pas de propriétés spécifiques et implémente celles de son parent : {{domxref("Text")}}.</em></p>

<h2 id="Méthodes">Méthodes</h2>

<p><em>Cette interface ne dispose pas de méthodes spécifiques et implémente celles de son parent : {{domxref("Text")}}.</em></p>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th>Spécification</th>
   <th>État</th>
   <th>Commentaires</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('DOM WHATWG', '#interface-cdatasection', 'CDATASection')}}</td>
   <td>{{Spec2('DOM WHATWG')}}</td>
   <td>Rajouté dans le bogue <a href="https://github.com/whatwg/dom/pull/295">#295</a></td>
  </tr>
  <tr>
   <td>{{SpecName('DOM3 Core', 'core.html#ID-667469212', 'CDATASection')}}</td>
   <td>{{Spec2('DOM3 Core')}}</td>
   <td>Aucune modification depuis {{SpecName('DOM2 Core')}}</td>
  </tr>
  <tr>
   <td>{{SpecName('DOM2 Core', 'core.html#ID-667469212', 'CDATASection')}}</td>
   <td>{{Spec2('DOM2 Core')}}</td>
   <td>Aucune modification depuis {{SpecName('DOM1')}}.</td>
  </tr>
  <tr>
   <td>{{SpecName('DOM1', 'level-one-core.html#ID-667469212', 'CDATASection')}}</td>
   <td>{{Spec2('DOM1')}}</td>
   <td>Définition initiale.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>



<p>{{Compat("api.CDATASection")}}</p>
