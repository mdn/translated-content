---
title: spellcheck
slug: Web/HTML/Global_attributes/spellcheck
tags:
  - Attribut
  - Attribut universel
  - HTML
  - Reference
translation_of: Web/HTML/Global_attributes/spellcheck
original_slug: Web/HTML/Attributs_universels/spellcheck
---
<div>{{HTMLSidebar("Global_attributes")}}</div>

<p>L'attribut universel <code><strong>spellcheck</strong></code> est un attribut à valeur contrainte qui définit si l'orthographe du contenu de l'élément doit être vérifiée.</p>

<div>{{EmbedInteractiveExample("pages/tabbed/attribute-spellcheck.html","tabbed-shorter")}}</div>

<p>Les valeurs autorisées pour cet attribut sont :</p>

<ul>
 <li><code>true</code> : cette valeur indique que, si possible, l'orthographe de l'élément doit être vérifiée avec le correcteur orthographique.</li>
 <li><code>false</code> : cette valeur indique que l'orthographe de l'élément ne doit pas être vérifié.</li>
</ul>

<p>La valeur par défaut de l'attribut (utilisée si elle n'est pas définie explicitement) sera fonction du navigateur et du type d'élément. Cette valeur par défaut peut également être héritée (autrement dit, la valeur utilisée pour l'élément courant sera la valeur explicite définie pour son plus proche ancêtre dans l'arbre des éléments).</p>

<p>Cet attribut est un attribut à valeur contrainte, ce n'est pas un attribut booléen. Il faut donc utiliser explicitement les valeurs <code>true</code> ou <code>false</code>. Ainsi :</p>

<pre class="example-bad brush: html">&lt;label spellcheck&gt;Label exemple&lt;/label&gt;</pre>

<p>sera invalide, la formulation correcte étant :</p>

<pre class="example-good brush: html">&lt;label spellcheck="true"&gt;Label exemple&lt;/label&gt;</pre>

<p>Cet attribut n'est qu'une indication à destination du navigateur : il n'est pas obligatoire qu'un navigateur puisse vérifier l'orthographe. Les éléments non-éditables ne sont généralement pas vérifiés, même lorsque <code><strong>spellcheck</strong></code> vaut <code>true</code> et que le navigateur possède une fonctionnalité de vérification orthographique.</p>

<p>La valeur par défaut sera différente selon l'élément et le navigateur :</p>

<table class="fullwidth-table">
 <tbody>
  <tr>
   <th>Navigateur</th>
   <th>{{HTMLElement("html")}}</th>
   <th>{{HTMLElement("textarea")}}</th>
   <th>{{HTMLElement("input")}}</th>
   <th>Autres</th>
   <th>Commentaires</th>
  </tr>
  <tr>
   <td rowspan="3">Firefox / Gecko</td>
   <td><code>false</code></td>
   <td><code>false</code></td>
   <td><code>false</code></td>
   <td><em>hérité</em></td>
   <td>Lorsque <code>layout.spellcheckDefault</code> vaut <code>0</code></td>
  </tr>
  <tr>
   <td><strong><code>false</code></strong></td>
   <td><strong><code>true</code></strong></td>
   <td><strong><em>hérité</em></strong></td>
   <td><strong><em>hérité</em></strong></td>
   <td><strong>Lorsque <code>layout.spellcheckDefault</code> vaut <code>1</code> (valeur par défaut)</strong></td>
  </tr>
  <tr>
   <td><code>false</code></td>
   <td><code>true</code></td>
   <td><code>true</code></td>
   <td><em>hérité</em></td>
   <td>Lorsque <code>layout.spellcheckDefault</code> vaut <code>2</code></td>
  </tr>
  <tr>
   <td>Chrome</td>
   <td><code>false</code></td>
   <td><code>true</code></td>
   <td>?</td>
   <td><em>hérité</em></td>
  </tr>
  <tr>
   <td>Internet Explorer</td>
   <td><code>false</code></td>
   <td><code>true</code></td>
   <td>?</td>
   <td><em>hérité</em></td>
  </tr>
  <tr>
   <td>Opera</td>
   <td><code>false</code></td>
   <td><code>true</code></td>
   <td>?</td>
   <td><em>hérité</em></td>
  </tr>
  <tr>
   <td>Safari</td>
   <td><code>false</code></td>
   <td><code>true</code></td>
   <td>?</td>
   <td><em>hérité</em></td>
  </tr>
 </tbody>
</table>

<h2 id="Exemples">Exemples</h2>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;!-- La valeur par défaut --&gt;
&lt;textarea&gt;Saisissay un texte issy&lt;/textarea&gt;

&lt;!-- Les valeurs explicites --&gt;
&lt;textarea spellcheck="true"&gt;Saisissay un texte issy&lt;/textarea&gt;
&lt;textarea spellcheck="false"&gt;Saisissay un texte issy&lt;/textarea&gt;
</pre>

<h3 id="Résultat">Résultat</h3>

<p>{{EmbedLiveSample("Exemples","200","300")}}</p>

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
   <td>{{SpecName('HTML WHATWG', "interaction.html#spelling-and-grammar-checking", "spellcheck")}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td>Pas de changement depuis la dernière dérivation, {{SpecName('HTML5.1')}}</td>
  </tr>
  <tr>
   <td>{{SpecName('HTML5.1', "editing.html#spelling-and-grammar-checking", "spellcheck")}}</td>
   <td>{{Spec2('HTML5.1')}}</td>
   <td>Dérivée de {{SpecName('HTML WHATWG')}}, définition initiale.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("html.global_attributes.spellcheck")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><a href="/fr/docs/Web/HTML/Attributs_universels">Les différents attributs universels</a></li>
</ul>
