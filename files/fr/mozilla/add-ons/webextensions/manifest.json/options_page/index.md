---
title: options_page
slug: Mozilla/Add-ons/WebExtensions/manifest.json/options_page
tags:
  - Add-ons
  - Deprecated
  - Extensions
  - Manifest
  - Options
  - WebExtensions
  - options_page
translation_of: Mozilla/Add-ons/WebExtensions/manifest.json/options_page
---
<div>{{AddonSidebar}}</div>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="row" style="width: 30%;">Type</th>
   <td><code>String</code></td>
  </tr>
  <tr>
   <th scope="row">Mandatory</th>
   <td>No</td>
  </tr>
  <tr>
   <th scope="row">Example</th>
   <td>
    <pre class="brush: json;">
"options_page": "options/options.html"</pre>
   </td>
  </tr>
 </tbody>
</table>

<div>{{Deprecated_Header}}
<div class="warning">
  <p><strong>Attention :</strong>Cette clé du manifest a été dépréciée. Utilisez <code><a href="/fr/Add-ons/WebExtensions/manifest.json/options_ui">options_ui</a></code>à la place.</p></div>
</div>

<p>Utilisez la clé d'<code>options_page</code> pour définir une <a href="/fr/Add-ons/WebExtensions/Options_pages">page d'options</a> pour votre extension.</p>

<p>La page des options contient les paramètres de l'extension. L'utilisateur peut y accéder depuis le gestionnaire d'add-ons du navigateur, et vous pouvez l'ouvrir depuis votre extension en utilisant {{WebExtAPIRef("runtime.openOptionsPage()")}}.</p>

<p>Contrairement aux pages d'options spécifiées à l'aide de la nouvelle clé <code>options_ui</code>, les pages d'options spécifiées à l'aide de la clé <code>options_page</code> obsolète ne reçoivent pas les styles de navigateur et s'ouvrent toujours dans un onglet normal du navigateur.</p>

<h2 id="Exemple">Exemple</h2>

<pre class="brush: json;">"options_page": "options/options.html"
</pre>

<h2 id="Compatibilité_du_navigateur">Compatibilité du navigateur</h2>



<p>{{Compat("webextensions.manifest.options_page")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><code><a href="/fr/Add-ons/WebExtensions/manifest.json/options_ui">options_ui</a></code></li>
 <li><a href="/fr/Add-ons/WebExtensions/user_interface/Options_pages">Options pages</a></li>
</ul>
