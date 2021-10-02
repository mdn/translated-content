---
title: Blob.type
slug: Web/API/Blob/type
tags:
  - API
  - DOM
  - Fichiers
  - Propriété
translation_of: Web/API/Blob/type
---
<div>{{APIRef("File API")}}</div>

<p>La propriété <strong><code>type</code></strong> de l'objet <a href="fr/docs/Web/API/Blob"><code>Blob</code></a> fourni le type MIME (Internet media type) d'un fichier. Celle-ci retourne une chaîne de caractère vide si le type n'a pas pu être déterminé.</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox">var mimetype = <var>instanceOfFile</var>.type</pre>

<h2 id="Valeur">Valeur</h2>

<p>Une chaîne de caractères (par exemple : "image/png").</p>

<h2 id="Exemple">Exemple</h2>

<pre class="brush:js">var i, fileInput, files, allowedFileTypes;

// fileInput est un HTMLInputElement: &lt;input type="file" multiple id="myfileinput"&gt;
fileInput = document.getElementById("myfileinput");

// files est un objet FileList (similaire à NodeList)
files = fileInput.files;

// notre application accepte seulement les images de type *.png, *.jpeg et *.gif
allowedFileTypes = ["image/png", "image/jpeg", "image/gif"];

for (i = 0; i &lt; files.length; i++) {
  // Vérifie si file.type est un type autorisé.
  if (allowedFileTypes.indexOf(<strong>files[i].type</strong>) &gt; -1) {
    // le type du fichier (file) correspond à l'un des types autorisés. Faites quelque chose ici.
  }
});
</pre>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">Statut</th>
   <th scope="col">Commentaire</th>
  </tr>
  <tr>
   <td>{{SpecName('File API', '#dfn-type', 'type')}}</td>
   <td>{{Spec2('File API')}}</td>
   <td>Définition initiale.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<div>
<div>


<p>{{Compat("api.Blob.type")}}</p>
</div>

<h2 id="Voir_aussi">Voir aussi</h2>
</div>

<ul>
 <li>{{domxref("Blob")}}</li>
</ul>
