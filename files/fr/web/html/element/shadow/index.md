---
title: '<shadow> : l''élément obsolète pour la racine virtuelle'
slug: Web/HTML/Element/Shadow
tags:
  - Composant web
  - Déprécié
  - Element
  - HTML
  - Reference
  - Web
translation_of: Web/HTML/Element/shadow
---
<div>{{deprecated_header}}{{HTMLRef}}</div>

<p>L'élément HTML <strong><code>&lt;shadow&gt;</code></strong> était utilisé comme un point d'insertion ({{glossary("insertion point")}}) du <em>shadow DOM</em>. Cet élément a été retiré de la spécification et est <a href="https://github.com/w3c/webcomponents/commit/041ba5518b9372768234d2766de503b98a03fa45">désormais obsolète</a>.</p>

<h2 id="Attributs">Attributs</h2>

<p>Cet élément inclut uniquement <a href="/fr/docs/Web/HTML/Attributs_universels">les attributs universels</a>.</p>

<h2 id="Exemples">Exemples</h2>

<p>Voici un exemple simple de l'utilisation de l'élément <code>&lt;shadow&gt;</code>. Il s'agit d'un fichier HTML pourvu de tout ce qui est nécessaire.</p>

<div class="note">
<p><strong>Note :</strong> il s'agit d'une technologie expérimentale. Pour faire fonctionner ce code, le navigateur où vous l'affichez doit supporter les composants web (<em>web components</em>). Pour plus d'informations, voir <a href="/fr/docs/Web/Web_Components#Activer_les_Web_Components_dans_Firefox">Activer les composants web sous Firefox</a>.</p>
</div>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;html&gt;
  &lt;head&gt;&lt;/head&gt;
  &lt;body&gt;

  &lt;!-- Ce &lt;div&gt; accueillera les shadow roots. --&gt;
  &lt;div&gt;
    &lt;!-- Ce titre ne sera pas affiché --&gt;
    &lt;h4&gt;My Original Heading&lt;/h4&gt;
  &lt;/div&gt;

  &lt;script&gt;
    // Récupère le contenu du &lt;div&gt; ci-dessus
    var origContent = document.querySelector('div');
    // Crée le premier shadow root
    var shadowroot1 = origContent.createShadowRoot();
    // Crée le second shadow root
    var shadowroot2 = origContent.createShadowRoot();

    // Insère un contenu dans le plus vieux shadow root
    shadowroot1.innerHTML =
      '&lt;p&gt;Older shadow root inserted by &amp;lt;shadow&amp;gt;&lt;/p&gt;';
    // Insère dans le plus jeune shadow root, y compris &lt;shadow&gt;.
    // La balise précédente ne sera pas affichée à moins que
    // l'élément &lt;shadow&gt; ne soit utilisé ci-dessous.
    shadowroot2.innerHTML =
      '&lt;shadow&gt;&lt;/shadow&gt; &lt;p&gt;Younger shadow root, displayed because it is the youngest.&lt;/p&gt;';
  &lt;/script&gt;

  &lt;/body&gt;
&lt;/html&gt;
</pre>

<h3 id="Résultat_statique">Résultat statique</h3>

<p><img alt="Exemple pour shadow" src="shadow-example.png"></p>


<h2 id="Résumé_technique">Résumé technique</h2>


<table class="properties">
 <tbody>
  <tr>
   <th scope="row"><dfn><a href="/fr/docs/Web/HTML/Cat%C3%A9gorie_de_contenu">Catégories de contenu </a></dfn></th>
   <td><a href="/fr/docs/Web/HTML/Content_categories#Transparent_content_model">Contenu transparent</a>.</td>
  </tr>
  <tr>
   <th scope="row"><dfn>Contenu autorisé </dfn></th>
   <td><a href="/fr/docs/Web/HTML/Cat%C3%A9gorie_de_contenu#Contenu_de_flux">Contenu de flux</a>.</td>
  </tr>
  <tr>
   <th scope="row"><dfn>Omission de balises</dfn></th>
   <td>{{no_tag_omission}}</td>
  </tr>
  <tr>
   <th scope="row"><dfn>Parents autorisés</dfn></th>
   <td>Tout élément qui accepte un contenu de flux.</td>
  </tr>
  <tr>
   <th scope="row">Rôles ARIA autorisés</th>
   <td>Aucun.</td>
  </tr>
  <tr>
   <th scope="row"><dfn>Interface DOM</dfn></th>
   <td>{{domxref("HTMLShadowElement")}}</td>
  </tr>
 </tbody>
</table>
<h2 id="Spécifications">Spécifications</h2>

<p>Cet élément ne fait plus partie d'aucune spécification.</p>
<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("html.elements.shadow")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><a href="/fr/docs/Web/Web_Components">Les composants web</a></li>
 <li>{{HTMLElement("content")}}</li>
 <li>{{HTMLElement("template")}}</li>
 <li>{{HTMLElement("slot")}}</li>
 <li>{{HTMLElement("element")}}</li>
</ul>
