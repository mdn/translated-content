---
title: File
slug: Web/API/File
tags:
  - DOM
  - File
translation_of: Web/API/File
---
<div>{{APIRef}}</div>

<p>L’interface <strong><code>File</code></strong> fournit des informations sur des fichiers et permet au code JavaScript d’une une page web d’accéder à leurs contenus.</p>

<p>Les objets <code>File</code> sont généralements obtenus à partir de :</p>

<ul>
 <li>l’objet {{domxref("FileList")}} retourné lorsque qu’un utilisateur ou une utilisatrice sélectionne des fichiers grâce à un élément {{HTMLElement("input")}} ;</li>
 <li>l’objet {{domxref("DataTransfer")}} d’une opération de glisser-déposer ;</li>
 <li>l’API <code>mozGetAsFile()</code> de l’élément {{domxref("HTMLCanvasElement")}}.</li>
</ul>

<p>Dans Gecko, le code privilégié peut créer des objets <code>File</code> représentant tout fichier local sans nécessiter une interaction de l’utilisateur ou de l’utilisatrice (voir {{anch("Notes d’implémentation")}} pour plus d’informations.)</p>

<p>Un objet <code>File</code> est un genre spécifique de {{domxref("Blob")}}, et peut être utilisé dans tout contexte où un blob peut l’être. En particulier, {{domxref("FileReader")}}, {{domxref("URL.createObjectURL()")}}, {{domxref("ImageBitmapFactories.createImageBitmap()", "createImageBitmap()")}}, et {{domxref("XMLHttpRequest", "", "send()")}} acceptent indifféremment des <code>Blob</code>s et des <code>File</code>s.</p>

<p>Voir <a href="/fr/docs/Web/API/File/Using_files_from_web_applications">Utiliser des fichiers à partir d'applications web</a> pour plus d’informations et des exemples.</p>

<p>{{InheritanceDiagram}}</p>

<h2 id="Constructeur">Constructeur</h2>

<dl>
 <dt>{{domxref("File.File", "File()")}}</dt>
 <dd>Renvoie un <code>File</code> nouvellement construit.</dd>
</dl>

<h2 id="Propriétés">Propriétés</h2>

<dl>
 <dt>{{domxref("File.lastModified")}} {{readonlyinline}}</dt>
 <dd>Renvoie le temps de dernière modification du fichier, exprimé en millisecondes écoulées depuis l’ère UNIX (1er janvier 1970 à minuit).</dd>
 <dt>{{domxref("File.lastModifiedDate")}} {{readonlyinline}} {{deprecated_inline}} {{gecko_minversion_inline("15.0")}}</dt>
 <dd>Renvoie la {{jsxref("Date")}} de dernière modification du fichier.</dd>
 <dt>{{domxref("File.name")}} {{readonlyinline}}</dt>
 <dd>Renvoie le nom du fichier.</dd>
 <dt>{{domxref("File.webkitRelativePath")}} {{readonlyinline}} {{non-standard_inline}}</dt>
 <dd>Renvoie le chemin auquel l’URL du {{domxref("File")}} est relative.</dd>
</dl>

<p><code>File</code> implémente {{domxref("Blob")}}, et ainsi possède les propriétés suivantes :</p>

<dl>
 <dt>{{domxref("File.size")}} {{readonlyinline}}</dt>
 <dd>Renvoie la taille du fichier en octets.</dd>
 <dt>{{domxref("File.type")}} {{readonlyinline}}</dt>
 <dd>Renvoie le type <a href="/fr/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Complete_list_of_MIME_types">MIME</a>du fichier.</dd>
</dl>

<h2 id="Méthodes">Méthodes</h2>

<p><em>L’interface <code>File</code> ne définit aucune méthode, mais hérite des méthodes de l’interface {{domxref("Blob")}} :</em></p>

<dl>
 <dt>{{domxref("Blob.slice()", "Blob.slice([start[, end[, contentType]]])")}}</dt>
 <dd>Renvoie un nouvel objet <code>Blob</code> contenant les données du blob source comprises dans l’intervalle d’octets spécifié.</dd>
 <dt>{{domxref("Blob.stream()", "Blob.stream()")}}</dt>
 <dd>Transforme le <code>File</code> en un {{domxref("ReadableStream")}} pouvant être utilisé pour lire le contenu du <code>File</code>.</dd>
 <dt>{{domxref("Blob.text()", "Blob.text()")}}</dt>
 <dd>Transforme le <code>File</code> en un flux (<em>stream</em>) et le lit en entier. Renvoie une {{jsxref("promise", "promesse")}} qui se résoud en une {{domxref("USVString")}} (texte).</dd>
 <dt>{{domxref("Blob.arrayBuffer()", "Blob.arrayBuffer()")}}</dt>
 <dd>Transforme le <code>File</code> en un flux (<em>stream</em>) et le lit en entier. Retourne une {{jsxref("promise", "promesse")}} qui se résoud en un {{domxref("ArrayBuffer")}}.</dd>
</dl>

<h2 id="Spécifications">Spécifications</h2>

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
   <td>{{SpecName('File API')}}</td>
   <td>{{Spec2('File API')}}</td>
   <td>Définition initiale.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("api.File")}}</p>

<h3 id="Notes_d’implémentation">Notes d’implémentation</h3>

<ul>
 <li>Dans Gecko, vous pouvez utiliser API depuis du code chrome. Voir <a href="/en-US/docs/Extensions/Using_the_DOM_File_API_in_chrome_code">Using the DOM File API in chrome code</a> pour plus de détails. Pour l’utiliser depuis du code chrome, JSM, ou portée Bootstrap, vous devez l’importer en utilisant <code><a href="/en-US/docs/Components.utils.importGlobalProperties">Cu.importGlobalProperties</a>(['File']);</code></li>
 <li>À partir de Gecko 6.0 {{geckoRelease("6.0")}}, le code privilégié (par exemple au sein d’une extension) peut passer un objet {{interface("nsIFile")}} au constructeur DOM <code>File</code> pour spécifier le fichier à référencer.</li>
 <li>À partir de Gecko 8.0 {{geckoRelease("8.0")}}, vous pouvez utiliser <code>new File</code> pour créer des objets <code>File</code> depuis des composants XPCOM au lieu de devoir instancier les objets {{interface("nsIDOMFile")}} directement. Contrairement à {{domxref("Blob")}}, le constructeur prend le nom de fichier comme second argument. Le nom de fichier peut être une chaîne quelconque.
  <pre class="syntaxbox">new File(
  Array parts,
  String filename,
  BlobPropertyBag properties
);</pre>
 </li>
 <li>Les propriétés et méthodes non standard suivantes ont été retirées de Gecko 7 {{geckoRelease("7.0")}} : {{domxref("File.fileName")}}, {{domxref("File.fileSize")}}, {{domxref("File.getAsBinary()")}}, {{domxref("File.getAsDataURL()")}}, {{domxref("File.getAsText()","File.getAsText(string encoding)")}} ({{bug("661876")}}). Les propriétés standard {{domxref("File.name")}}, {{domxref("Blob.size")}}, et les méthodes de {{domxref("FileReader")}} devraient être utilisées à la place.</li>
</ul>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><a href="/fr/docs/Web/API/File/Using_files_from_web_applications">Utiliser des fichiers à partir d'applications web</a></li>
 <li>{{domxref("FileReader")}}</li>
 <li><a href="/en-US/docs/Extensions/Using_the_DOM_File_API_in_chrome_code">Using the DOM File API in chrome code</a> (pour du code privilégié s’exécutant dans Gecko, tel que des extensions de Firefox)</li>
</ul>
