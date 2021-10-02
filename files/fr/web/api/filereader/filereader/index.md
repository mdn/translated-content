---
title: FileReader()
slug: Web/API/FileReader/FileReader
tags:
  - API
  - Constructeur
  - FileReader
  - Reference
translation_of: Web/API/FileReader/FileReader
---
<p><strong><code>FileReader()</code></strong>  est un constructeur qui permet de créer un nouvel objet FileReader.</p>

<p>Pour plus de details à propos de <code>FileReader</code>, visiter <a href="/en-US/docs/Web/API/File/Using_files_from_web_applications">Using files from web applications</a>.</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="brush: js">var reader = new FileReader();</pre>

<h3 id="Paramèteres">Paramèteres</h3>

<p>Aucun.</p>

<h2 id="Exemple">Exemple</h2>

<p>L'extrait de code ci-dessous montre la création d'un objet <code><a href="/en-US/docs/Web/API/FileReader">FileReader</a></code> en utilisant le constructeur <code>FileReader()</code>  ainsi qu'une utilisation subséquente de cet objet:</p>

<pre class="brush: js">function printFile(file) {
  var reader = new FileReader();
  reader.onload = function(evt) {
    console.log(evt.target.result);
  };
  reader.readAsText(file);
}
</pre>

<h2 id="Caractéristiques">Caractéristiques</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Caractéristique</th>
   <th scope="col">Status</th>
   <th scope="col">Commentaire</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('File API')}}</td>
   <td>{{Spec2('File API')}}</td>
   <td>Définition Initiale</td>
  </tr>
 </tbody>
</table>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><a href="/en-US/docs/Web/API/File/Using_files_from_web_applications">Using files from web applications</a></li>
</ul>
