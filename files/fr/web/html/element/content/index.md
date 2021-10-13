---
title: '<content> : l''élément Shadow DOM d''emplacement du contenu'
slug: Web/HTML/Element/content
tags:
  - Content
  - DOM
  - Deprecated
  - Element
  - HTML
  - HTML Web Components
  - Placeholder
  - Reference
  - Web
  - Web Components
  - shadow dom
translation_of: Web/HTML/Element/content
browser-compat: html.elements.content
---
<div>{{HTMLRef}}</div>

<div class="warning">
  <p><strong>Attention :</strong> Cette fonctionnalité a été supprimée des standards du Web. Bien que quelques navigateurs puissent encore la supporter, elle est en cours d'éradication. Ne l'utilisez ni dans d'anciens projets, ni dans de nouveaux. Les pages et applications Web l'utilisant peuvent cesser de fonctionner à tout moment.</p>
</div>

<p>L'élément HTML <strong><code>&lt;content&gt;</code></strong> — une partie obsolète de la suite de technologies <a href="/fr/docs/Web/Web_Components">Web Components</a> — était utilisé à l'intérieur de <a href="/fr/docs/Web/Web_Components/Using_shadow_DOM">Shadow DOM</a> comme un point d'insertion, et n'était pas destiné à être utilisé dans du HTML ordinaire. Il a maintenant été remplacé par l'élément <a href="/fr/docs/Web/HTML/Element/slot"><code>&lt;slot&gt;</code></a>, qui crée un point dans le DOM où un Shadow DOM peut être inséré.</p>

<div class="note">
  <p><strong>Note :</strong>Bien que présent dans les premières versions des spécifications et mis en œuvre dans plusieurs navigateurs, cet élément a été supprimé dans les versions ultérieures de la spécification, et ne doit pas être utilisé. Il est documenté ici pour aider à adapter le code écrit à l'époque où il était inclus dans la spécification afin qu'il fonctionne avec les versions plus récentes de la spécification.</p>
</div>

<table class="properties">
    <tbody>
    <tr>
      <th scope="row"><a href="/fr/docs/Web/Guide/HTML/Content_categories">Catégories de contenu</a></th>
      <td><a href="/fr/docs/Web/Guide/HTML/Content_categories#transparent_content_model">Contenu transparent</a>.</td>
    </tr>
    <tr>
      <th scope="row">Contenu autorisé</th>
      <td><a href="/fr/docs/Web/Guide/HTML/Content_categories#flow_content">Contenu de flux</a>.</td>
    </tr>
    <tr>
      <th scope="row">Omission de balises</th>
      <td> 	Aucune, la balise d'ouverture et la balise de fermeture sont obligatoires.</td>
    </tr>
    <tr>
      <th scope="row">Parents autorisés</th>
      <td>Tout élément qui accepte du contenu de flux.</td>
    </tr>
    <tr>
      <th scope="row">Interface DOM</th>
      <td><a href="/fr/docs/Web/API/HTMLContentElement"><code>HTMLContentElement</code></a></td>
    </tr>
  </tbody>
 </table>

<h2 id="attributes">Attributs</h2>

<p>Comme pour tous les éléments, on peut utiliser <a href="/fr/docs/Web/HTML/Global_attributes">les attributs universels</a> sur <code>&lt;content&gt;</code>.</p>

<dl>
  <dt><code>select</code></dt>
  <dd>Une liste de sélecteurs séparés par des virgules. La syntaxe utilisée est la même que celle utilisée pour les sélecteurs CSS. Ils permettent de sélectionner le contenu à insérer à la place de l'élément <code>&lt;content&gt;</code>.</dd>
</dl>

<h2 id="example">Exemple</h2>

<p>Voici un exemple simple d'utilisation de l'élément <code>&lt;content&gt;</code>. Il s'agit d'un fichier HTML It is an HTML file with everything needed in it.</p>

<div class="note">
  <p><strong>Note :</strong>Pour que ce code fonctionne, le navigateur utilisé doit prendre en charge les composants web (voir par exemple <a href="/fr/docs/Web/Web_Components#enabling_web_components_in_firefox">l'activation des composants web dans Firefox</a>).</p>
</div>

<pre class="brush: html">&lt;html&gt;
  &lt;head&gt;&lt;/head&gt;
  &lt;body&gt;
  &lt;!-- Le contenu original auquel on accède via &lt;content&gt; --&gt;
  &lt;div&gt;
    &lt;h4&gt;L'en-tête de mon contenu&lt;/h4&gt;
    &lt;p&gt;Le texte de mon contenu&lt;/p&gt;
  &lt;/div&gt;

  &lt;script&gt;
  // On récupère le &lt;div&gt; ci-avant.
  var myContent = document.querySelector('div');
  // On crée un shadow DOM sur le &lt;div&gt;
  var shadowroot = myContent.createShadowRoot();
  // On ajoute un nouvel en-tête dans le shadow DOM
  // et on conserve le paragraphe original.
  shadowroot.innerHTML =
   '&lt;h2&gt;Titre inséré&lt;/h2&gt; &lt;content select="p"&gt;&lt;/content&gt;';
  &lt;/script&gt;

  &lt;/body&gt;
&lt;/html&gt;
</pre>

<p>Si vous l'affichez dans un navigateur web, il devrait ressembler à ce qui suit.</p>

<p><img alt="Contenu de l'exemple" src="content-example.png"></p>

<h2 id="specifications">Spécifications</h2>

<p>Ce document ne fait plus partie d'aucune spécification.</p>

<h2 id="browser_compatibility">Compatibilité des navigateurs</h2>

<p>{{Compat}}</p>

<h2 id="see_also">Voir aussi</h2>

<ul>
  <li><a href="/fr/docs/Web/Web_Components">Web Components</a></li>
  <li>Les éléments <a href="/fr/docs/Web/HTML/Element/Shadow"><code>&lt;shadow&gt;</code></a>, <a href="/fr/docs/Web/HTML/Element/slot"><code>&lt;slot&gt;</code></a>, <a href="/fr/docs/Web/HTML/Element/template"><code>&lt;template&gt;</code></a></li>
 </ul>
