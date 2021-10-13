---
title: 'Attribut HTML : crossorigin'
slug: Web/HTML/Attributes/crossorigin
tags:
  - Advanced
  - Attribute
  - CORS
  - HTML
  - NeedsContent
  - Reference
  - Security
translation_of: Web/HTML/Attributes/crossorigin
original_slug: Web/HTML/Reglages_des_attributs_CORS
---
<div>{{HTMLSidebar}}</div>

<p>L'attribut <strong><code>crossorigin</code></strong>, valable sur les éléments <a href="/fr/docs/Web/HTML/Element/audio"><code>&lt;audio&gt;</code></a>, <a href="/fr/docs/Web/HTML/Element/Img"><code>&lt;img&gt;</code></a>, <a href="/fr/docs/Web/HTML/Element/link"><code>&lt;link&gt;</code></a>, <a href="/fr/docs/Web/HTML/Element/script"><code>&lt;script&gt;</code></a> et <a href="/fr/docs/Web/HTML/Element/video"><code>&lt;video&gt;</code></a>, fournit la prise en charge de <a href="/en-US/docs/Web/HTTP/CORS">CORS</a>, définissant la manière dont l'élément traite les demandes d'origine croisée, permettant ainsi la configuration des demandes CORS pour les données extraites de l'élément. Selon l'élément, l'attribut peut être un attribut de paramètres CORS.</p>

<p>L'attribut de contenu <code>crossorigin</code> sur les éléments médias est un attribut de paramétrage CORS.</p>

<p>Ces attributs sont énumérés, et ont les valeurs possibles suivantes :</p>

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Mot-clé</th>
      <th scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>anonymous</code></td>
      <td>Les requêtes CORS pour cet élément auront le marqueur d'authentification (<em>credentials flag</em>) avec la valeur <code>'same-origin'</code>.</td>
    </tr>
    <tr>
      <td><code>use-credentials</code></td>
      <td>Les requêtes CORS pour cet élément auront le marqueur d'authentification (<em>credentials flag</em>) avec la valeur <code>'include'</code>.</td>
    </tr>
    <tr>
      <td><code>""</code></td>
      <td>Utiliser la chaîne vide (<code>crossorigin=""</code>) ou l'attribut seul (<code>crossorigin</code>) sera équivalent à l'utilisation de la valeur <code>anonymous</code>.</td>
    </tr>
  </tbody>
</table>

<p>Par défaut (quand l'attribut n'est pas spécifié), le CORS n'est pas du tout utilisé. Le mot-clé « anonymous » signifie que, lorsqu'il n'y a pas la même origine, il n'y aura ni échange d<strong>'informations d'authentification de l'utilisateur</strong> via des cookies, ni des certificats TLS côté client ou des authentifications HTTP comme détaillé dans la <a href="https://www.w3.org/TR/cors/#user-credentials">section terminologique de la spécification CORS</a>.</p>

<p>Un mot-clé invalide ou une chaîne de caractères vide seront interprétés comme le mot-clé <code>anonymous</code>.</p>

<div class="note">
  <p><strong>Note :</strong> Avant Firefox 83, l'attribut <code>crossorigin</code> n'était pas pris en charge pour <code>rel="icon"</code> ; il existe également <a href="https://bugs.chromium.org/p/chromium/issues/detail?id=1121645">un bug sur Chrome</a>.</p>
</div>

<h2 id="examples">Exemples</h2>
<h3 id="example_crossorigin_with_the_script_element">Utiliser <code>crossorigin</code> avec l'élément <code>script</code></h3>

<p>On peut utiliser l'élément <a href="/fr/docs/Web/HTML/Element/script"><code>&lt;script&gt;</code></a> afin d'indiquer au navigateur d'exécuter un script (ici, <code>https://exemple.com/framework-exemple.js</code>) sans envoyer les informations d'authentification de l'utilisateur.</p>

<pre class="brush: html">&lt;script src="https://exemple.com/framework-exemple.js" crossorigin="anonymous"&gt;&lt;/script&gt;</pre>

<h3 id="example_webmanifest_with_credentials">Utiliser des informations d'authentification avec un manifeste</h3>

<p>La valeur <code>use-credentials</code> doit être utilisée lorsqu'on récupère un <a href="/fr/docs/Web/Manifest">manifeste</a> nécessitant des informations d'authentification, y compris lorsque le fichier provient de la même origine :</p>

<pre class="brush: html">&lt;link rel="manifest" href="/app.manifest" crossorigin="use-credentials"&gt;</pre>

<h2 id="specifications">Spécifications</h2>

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Spécification</th>
      <th scope="col">Statut</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{{SpecName('HTML WHATWG', 'infrastructure.html#cors-settings-attributes', 'CORS settings attributes')}}</td>
      <td>{{Spec2('HTML WHATWG')}}</td>
    </tr>
    <tr>
      <td>{{SpecName('HTML WHATWG', 'embedded-content.html#attr-img-crossorigin', 'crossorigin')}}</td>
      <td>{{Spec2('HTML WHATWG')}}</td>
    </tr>
  </tbody>
</table>

<h2 id="browser_compatibility">Compatibilité des navigateurs</h2>

<h3 id="script_crossorigin">Pour l'élément script</h3>

<p>{{Compat("html.elements.script.crossorigin")}}</p>

<h3 id="video_crossorigin">Pour l'élément video</h3>

<p>{{Compat("html.elements.video.crossorigin")}}</p>

<h3 id="link_crossorigin">Pour l'élément link</h3>

<p>{{Compat("html.elements.link.crossorigin")}}</p>

<h2 id="see_also">Voir aussi</h2>

<ul>
	<li><a href="/fr/docs/Web/HTTP/CORS">Partage des ressources entre origines (CORS)</a></li>
	<li><a href="/fr/docs/Web/HTML/Attributes/rel">L'attribut HTML <code>rel</code></a></li>
</ul>
