---
title: icons
slug: Mozilla/Add-ons/WebExtensions/manifest.json/icons
tags:
  - Add-ons
  - Extensions
  - WebExtensions
translation_of: Mozilla/Add-ons/WebExtensions/manifest.json/icons
---
<div>{{AddonSidebar}}</div>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="row" style="width: 30%;">Type</th>
   <td><code>Objet</code></td>
  </tr>
  <tr>
   <th scope="row">Obligatoire</th>
   <td>Non</td>
  </tr>
  <tr>
   <th scope="row">Exemple</th>
   <td>
    <pre class="brush: json">
"icons": {
  "48": "icon.png",
  "96": "icon@2x.png"
}</pre>
   </td>
  </tr>
 </tbody>
</table>

<p>La clé icons spécifie des icônes pour votre extension. Ces icônes seront utilisées pour représenter l'extension dans des composants tels que le gestionnaire des modules d'extensions.</p>

<p>Elle se compose d'une paire de valeurs-clés de taille d'image et le chemin d'accès au fichier image par rapport au répertoire racine de l'extension.</p>

<p>Si la clé icons n'est pas fournie, une icône d'extension standard sera utilisée par défaut.</p>

<p>Vous devez fournir au moins une icône d'extension principale, idéalement d'une taille de 48x48 pixels. C'est l'icône par défaut qui sera utilisée dans le Gestionnaire des extensions. Vous pouvez, cependant, fournir des icônes de n'importe quelle taille, et Firefox tentera de trouver la meilleure icône à afficher dans les différents composants.</p>

<p>Firefox considérera la résolution de l'écran lors du choix d'une icône. Pour offrir la meilleure expérience visuelle aux utilisateurs avec des écrans haute résolution, tels que les écrans Retina, fournissez des versions deux fois plus grandes de toutes vos icônes.</p>

<h2 id="Exemple">Exemple</h2>

<p>Les clés dans l'objet icons spécifient la taille de l'icône en pixels et la valeur spécifie le chemin relatif de l'icône. Cet exemple contient une icône d'extension 48px et une version plus grande pour les écrans haute résolution.</p>

<pre class="brush: json">"icons": {
  "48": "icon.png",
  "96": "icon@2x.png"
}</pre>

<h2 id="SVG">SVG</h2>

<p>Vous pouvez utiliser SVG et le navigateur mettra à l'échelle appropriée votre icône. Il existe actuellement deux réserves :</p>

<ol>
 <li>Vous devez spécifier un "viewBox" dans l'image. Par exemple :
  <pre class="brush: html">&lt;svg viewBox="0 0 48 48" width="48" height="48" ...</pre>
 </li>
 <li>Même si vous pouvez utiliser un fichier, vous devez toujours spécifier différentes tailles de l'icône dans votre<code> manifest. </code>Par exemple :
  <pre class="brush: json">"icons": {
  "48": "icon.svg",
  "96": "icon.svg"
}</pre>
 </li>
</ol>

<div class="note">
<p><strong>Note :</strong> si vous utilisez un programme comme Inkscape pour créer un SVG, vous voudrez peut-être l'enregistrer en tant que "SVG simple". Firefox peut être gêné par des espaces de noms spéciaux, et ne pas afficher votre icône.</p>
</div>

<h2 id="Compatibilité_du_navigateur">Compatibilité du navigateur</h2>

<p>{{Compat("webextensions.manifest.icons")}}</p>
