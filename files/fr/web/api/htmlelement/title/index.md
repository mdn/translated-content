---
title: HTMLElement.title
slug: Web/API/HTMLElement/title
tags:
  - API
  - HTML DOM
  - HTMLElement
  - Propriété
  - Reference
translation_of: Web/API/HTMLElement/title
---
<div>{{ APIRef("HTML DOM") }}</div>

<p>La propriété <strong><code>HTMLElement.title</code></strong> représente le titre de l'élément, le texte habituellement affiché dans une fenêtre contextuelle d''info-bulle' lorsque la souris survole le nœud affiché.</p>

<div class="note">
<p><strong>Note :</strong> Si un nœud n'a pas d'attribut <code>title</code>, alors l'action par défaut est de l'hériter de son nœud parent, qui peut à son tour l'hériter de son nœud parent, etc..</p>

<pre> &lt;div title="InfoCool"&gt;
   &lt;div title=""&gt;le survol de la souris ici fera apparaître "InfoCool"&lt;/div&gt;
   &lt;div title=" "&gt;le survol de la souris ici ne fera rien apparaître&lt;/div&gt;
 &lt;/div&gt;
</pre>
</div>

<h2 id="Syntax">Syntaxe</h2>

<pre class="eval">var <em>chn</em> = <em>element</em>.title;<em>
</em>element.title = <em>chn</em>;
</pre>

<h2 id="Example">Exemple</h2>

<pre class="brush: js"> bouton1.title = "cliquer pour rafraîchir";
</pre>

<h2 id="Specification">Spécifications</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">Statut</th>
   <th scope="col">Commentaire</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('HTML WHATWG', '#dom-title', 'title')}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td>Pas de changement par rapport à la {{SpecName('DOM2 HTML')}}.</td>
  </tr>
  <tr>
   <td>{{SpecName('DOM2 HTML', 'html.html#ID-78276800', 'title')}}</td>
   <td>{{Spec2('DOM2 HTML')}}</td>
   <td>Pas de changement par rapport à la {{SpecName('DOM1')}}.</td>
  </tr>
  <tr>
   <td>{{SpecName('DOM1', 'level-one-html.html#ID-78276800', 'title')}}</td>
   <td>{{Spec2('DOM1')}}</td>
   <td>Définition initiale.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("api.HTMLElement.title")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>L'attribut HTML global <a href="/fr/docs/Web/HTML/Attributs_universels/title"><strong>title</strong></a>.</li>
</ul>
