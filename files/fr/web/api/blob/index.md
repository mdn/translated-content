---
title: Blob
slug: Web/API/Blob
tags:
  - API
  - Référence(2)
  - WebAPI
translation_of: Web/API/Blob
---
<div>{{APIRef("File API")}}</div>

<p>Un objet <strong><code>Blob</code></strong> représente un objet, semblable à un fichier, qui est immuable et qui contient des données brutes. Les <em>blobs</em> (pour <em><strong>B</strong>inary <strong>L</strong>arge <strong>Ob</strong>jects</em>) représentent des données qui ne sont pas dans un format JavaScript natif. L'interface {{domxref("File")}} est basée sur l'interface <code>Blob</code> et hérite des fonctionnalités de cette dernière tout en ajoutant des fonctionnalités pour gérer les fichiers sur le système de l'utilisateur.</p>

<p>Pour construire un <code>Blob</code> à partir d'objets qui ne sont pas des blobs ou à partir d'autres données, on pourra utiliser le constructeur {{domxref("Blob.Blob", "Blob()")}}. Pour créer un blob qui contient un sous-ensemble d'un autre blob, on pourra employer la méthode {{domxref("Blob.slice()", "slice()")}}. Pour obtenir un <code>Blob</code> à partir d'un fichier du système de l'utilisateur, consulter la documentation {{domxref("File")}}.</p>

<p>Les API qui acceptent des objets <code>Blob</code> sont également listées sur la documentation de {{domxref("File")}}.</p>

<div class="note">
<p><strong>Note :</strong> La méthode <code>slice()</code> utilisait auparavant un deuxième argument qui indiquait le nombre d'octets à copier dans le nouveau blob. Si on utilisait un couple de valeur <code>début + longueur</code> qui dépassait la taille du blob source, le blob qui était renvoyé contenait les données à partir de l'indice de début et jusuq'à la fin du blob.</p>
</div>

<div class="note">
  <p><strong>Note :</strong> La méthode <code>slice()</code> doit être utilisée avec certains préfixes sur certaines versions de navigateurs : <code>blob.mozSlice()</code> pour Firefox 12 et antérieur, <code>blob.webkitSlice()</code> dans Safari. Un ancienne version de <code>slice()</code> sans préfixes avait une sémantique différente et est désormais obsolète. La prise en charge de <code>blob.mozSlice()</code> a été abandonnée avec Firefox 30.</p>
</div>

<h2 id="Constructeur">Constructeur</h2>

<dl>
 <dt>{{domxref("Blob.Blob", "Blob(blobParts[, options])")}}</dt>
 <dd>Ce constructeur renvoie un nouvel objet <code>Blob</code> qui contient la concaténation des valeurs du tableau passé en paramètre.</dd>
</dl>

<h2 id="Propriétés">Propriétés</h2>

<dl>
 <dt>{{domxref("Blob.isClosed")}} {{readonlyinline}} {{experimental_inline}}</dt>
 <dd>Un booléen qui indique si la méthode {{domxref("Blob.close()")}} a été appelée sur le blob. Les blobs qui ont été fermés ne peuvent pas être lus.</dd>
 <dt>{{domxref("Blob.size")}} {{readonlyinline}}</dt>
 <dd>La taille des données contenues dans l'objet <code>Blob</code>, exprimée en octets.</dd>
 <dt>{{domxref("Blob.type")}} {{readonlyinline}}</dt>
 <dd>Une chaîne de caractères qui indique le type MIME des données contenues dans le <code>Blob</code>. Si le type est inconnu, la chaîne de caractères est vide.</dd>
</dl>

<h2 id="Méthodes">Méthodes</h2>

<dl>
 <dt>{{domxref("Blob.close()")}} {{experimental_inline}}</dt>
 <dd>Cette méthode clotûre le blob et libère éventuellement les ressources sous-jacentes.</dd>
 <dt>{{domxref("Blob.slice()", "Blob.slice([début[, fin[, contentType]]])")}}</dt>
 <dd>Cette méthode renvoie un nouvel objet <code>Blob</code> qui contient les données dans le fragment du <code>Blob</code> source entre <code>début</code> et <code>fin</code>.</dd>
</dl>

<h2 id="Exemples">Exemples</h2>

<h3 id="Utilisation_du_constructeur_Blob">Utilisation du constructeur <code>Blob</code></h3>

<p>Le constructeur {{domxref("Blob.Blob", "Blob()")}} permet de créer des blobs à partir d'autres objets. Par exemple, on peut construire un blob à partir d'une chaîne de caractères :</p>

<pre>var debug = {coucou: "monde"};
var blob = new Blob([JSON.stringify(debug, null, 2)], {type : 'application/json'});</pre>

<h3 id="Créer_une_URL_de_données_vers_un_tableau_typé">Créer une URL de données vers un tableau typé</h3>

<pre class="brush: js">var typedArray = GetTheTypedArraySomehow();

// On ajoute un type MIME pertinent
var blob = new Blob([typedArray], {type: 'application/octet-binary'});
var url = URL.createObjectURL(blob);

// url ressemblera à :
//   blob:d3958f5c-0777-0845-9dcf-2cb28783acaf

// désormais on peut utiliser l'URL dans tout
// contexte qui utilise des URL (img.src par
// exemple)
</pre>

<h3 id="Extraire_des_données_à_partir_d'un_blob">Extraire des données à partir d'un blob</h3>

<p>La seule façon de lire le contenu d'un blob est d'utiliser un objet {{domxref("FileReader")}}. Dans le code qui suit, on lit le contenu d'un blob sous la forme d'un tableau typé.</p>

<pre class="brush: js">var reader = new FileReader();
reader.addEventListener("loadend", function() {
   // reader.result contient le contenu du
   // blob sous la forme d'un tableau typé
});
reader.readAsArrayBuffer(blob);</pre>

<p>En utilisant d'autres méthodes de {{domxref("FileReader")}}, on peut lire le contenu du blob si c'est une chaîne ou une URL de données.</p>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">État</th>
   <th scope="col">Commentaires</th>
  </tr>
  <tr>
   <td>{{SpecName('File API','#blob','Blob')}}</td>
   <td>{{Spec2('File API')}}</td>
   <td>Définition initiale.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("api.Blob")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{domxref("BlobBuilder")}}</li>
 <li>{{domxref("File")}}</li>
 <li>{{domxref("URL.createObjectURL")}}</li>
 <li><a href="/fr/docs/Mozilla/Tech/XPCOM/Language_Bindings/Components.utils.importGlobalProperties">Components.utils.importGlobalProperties</a></li>
</ul>
