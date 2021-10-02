---
title: BlobBuilder
slug: Web/API/BlobBuilder
tags:
  - API
  - DOM
  - DOM Reference
  - Obsolete
translation_of: Web/API/BlobBuilder
---
<p>{{APIRef("File API")}}{{ obsolete_header}}</p>

<p>L'interface <code>BlobBuilder</code> fournit une manière simple de construire des objets {{domxref("Blob")}}. Il suffit de créer un <code>BlobBuilder</code> et de lui ajouter des données  en appellant la méthode {{manch("append")}}. Une fois finalisé, l'appel à la méthode {{manch("getBlob")}} permet de récupérer un {{domxref("Blob")}} contenant les données envoyées au constructeur dudit Blob.</p>

<div class="note">
  <p><strong>Note:</strong> L'interface <code>BlobBuilder</code> est désormais déconseillé (deprecated) au profit du nouveau constructeur {{domxref('Blob')}}.</p>
</div>

<h2 id="Aperçu_des_méthodes">Aperçu des méthodes</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <td><code>void <a href="/en-US/docs/Web/API/BlobBuilder#append()">append</a>(in ArrayBuffer data);</code></td>
  </tr>
  <tr>
   <td><code>void <a href="/en-US/docs/Web/API/BlobBuilder#append()">append</a>(in Blob data);</code></td>
  </tr>
  <tr>
   <td><code>void <a href="/en-US/docs/Web/API/BlobBuilder#append()">append</a>(in String data, [optional] in String endings);</code></td>
  </tr>
  <tr>
   <td><code>Blob <a href="/en-US/docs/Web/API/BlobBuilder#getBlob()">getBlob</a>([optional] in DOMString contentType);</code></td>
  </tr>
  <tr>
   <td><code>File <a href="/en-US/docs/Web/API/BlobBuilder#getFile()">getFile</a>(in DOMString name, [optional] in DOMString contentType);</code></td>
  </tr>
 </tbody>
</table>

<h2 id="Méthodes">Méthodes</h2>

<h3 id="append()">append()</h3>

<p>Ajoute le contenu de l'objet JavaScript spécifié au {{domxref("Blob")}} en construction. Si la valeur spécifiée n'est pas un {{domxref("Blob")}}, un <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer"><code>ArrayBuffer</code></a>, ou une <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/String"><code>String</code></a>, la valeur est forcée (coerced) à string avant d'être ajoutée au blob.</p>

<pre class="syntaxbox">void append(
  in ArrayBuffer data
);

void append(
  in Blob data
);


void append(
  in String data,
  [optional] in String endings
);
</pre>

<h4 id="Paramètres">Paramètres</h4>

<dl>
 <dt><code>data</code></dt>
 <dd>Les données à ajouter au {{domxref("Blob")}} en construction.</dd>
 <dt><code>endings</code></dt>
 <dd>Spécifie comment les chaînes (strings) contenant des <code>\n</code> doivent être rendues. Cela peut être <code>"transparent"</code> (endings inchangés) ou <code>"native"</code> (les endings sont changés pour respecter la convention du système de fichier de l'OS de l'hôte). Par défault, la valeur est <code>"transparent"</code>.</dd>
</dl>

<h3 id="getBlob()">getBlob()</h3>

<p>Retourne l'objet {{domxref("Blob")}} qui a été construit en utilisant les données passées en argument des différents appels à {{manch("append")}}.</p>

<pre class="syntaxbox">Blob getBlob(
  in DOMString contentType {{optional_inline}}
);
</pre>

<h4 id="Paramètres_2">Paramètres</h4>

<dl>
 <dt>contentType {{optional_inline}}</dt>
 <dd>Le type MIME des données  retournées par le {{domxref("Blob")}}. Ce sera la valeur de la propriété 'type' de l'objet <code>Blob</code>.</dd>
</dl>

<h4 id="Valeur_de_retour">Valeur de retour</h4>

<p>Un objet {{domxref("Blob")}} contenant toutes les données passées en argument de chaque appel à  {{manch("append")}} depuis la création du <code>BlobBuilder</code>. Cela remet aussi à zéro (reset) le <code>BlobBuilder</code> de tel sorte que le prochain appel à {{manch("append")}} démarrera la création d'un nouveau blob vierge.</p>

<h3 id="getFile()_non-standard_inline">getFile() {{non-standard_inline}}</h3>

<p>Retourne un objet {{domxref("File")}}.</p>

<pre class="syntaxbox">File getFile(
  in DOMString name,
  [optional] in DOMString contentType
);
</pre>

<h4 id="Paramètres_3">Paramètres</h4>

<dl>
 <dt>name</dt>
 <dd>Le nom du fichier.</dd>
 <dt>contentType {{optional_inline}}</dt>
 <dd>Le type MIME des données  retournées par le {{domxref("File")}}. Ce sera la valeur de la propriété 'type' de l'objet <code>File</code>.</dd>
</dl>

<h4 id="Valeur_deretour">Valeur deretour</h4>

<p>Un objet {{domxref("File")}}.</p>

<h2 id="Browser_compatibility">Browser compatibility</h2>



<p>{{Compat("api.BlobBuilder")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{spec("http://dev.w3.org/2009/dap/file-system/file-writer.html#idl-def-BlobBuilder", "File API Specification: BlobBuilder", "ED")}}</li>
 <li>{{domxref("Blob")}}</li>
 <li>{{domxref("File")}}</li>
</ul>
