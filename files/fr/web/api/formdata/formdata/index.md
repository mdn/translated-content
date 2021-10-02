---
title: FormData()
slug: Web/API/FormData/FormData
tags:
  - API
  - Constructeur
  - FormData
  - Reference
  - XHR
  - XMLHttpRequest
translation_of: Web/API/FormData/FormData
---
<p>{{APIRef("XMLHttpRequest")}}</p>

<p>Le constructeur <code><strong>FormData()</strong></code> crée un nouvel objet {{domxref("FormData")}}.</p>

<div class="note">
<p><strong>Note :</strong> Cette fonctionnalité est disponible dans <a href="/fr/docs/Web/API/Web_Workers_API">Web Workers</a>.</p>
</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="brush: js"><code>var formData = new FormData(</code><code>form</code><code>)</code></pre>

<h3 id="Parameters">Paramètres</h3>

<dl>
 <dt><code>form </code>{{optional_inline}}</dt>
 <dd>Un element HTML {{HTMLElement("form")}} — quand il est spécifié, l'objet {{domxref("FormData")}} sera rempli avec les clés/valeurs du formulaire en utilisant les noms de propriétés de chaque élément pour clé et les valeurs soumises. Cela encodera aussi le contenu des fichiers.</dd>
</dl>

<h2 id="Exemples">Exemples</h2>

<p>La ligne suivante crée un objet <code>FormData</code> vide:</p>

<pre class="brush: js">var formData = new FormData(); // Formulaire vide à cet instant</pre>

<p>Vous pouvez ajouter un couple clé/valeur en utilisant {{domxref("FormData.append")}} :</p>

<pre class="brush: js">formData.append('username', 'Chris');
</pre>

<p>Ou vous pouvez spécifier l'argument optionnel <code><em>form</em></code> à la création de l'objet <code>FormData</code> pour le pré-remplir avec les valeurs issues du formulaire spécifié :</p>

<pre class="brush: html">&lt;form id="myForm" name="myForm"&gt;
  &lt;div&gt;
    &lt;label for="username"&gt;Enter name:&lt;/label&gt;
    &lt;input type="text" id="username" name="username"&gt;
  &lt;/div&gt;
  &lt;div&gt;
    &lt;label for="useracc"&gt;Enter account number:&lt;/label&gt;
    &lt;input type="text" id="useracc" name="useracc"&gt;
  &lt;/div&gt;
  &lt;div&gt;
    &lt;label for="userfile"&gt;Upload file:&lt;/label&gt;
    &lt;input type="file" id="userfile" name="userfile"&gt;
  &lt;/div&gt;
&lt;input type="submit" value="Submit!"&gt;
&lt;/form&gt;
</pre>

<div class="note">
<p><strong>Note :</strong> Seuls les champs de formulaires valides sont inclus dans un objet FormData, c'est-à-dire ceux qui portent un nom (attribut <code>name</code>), qui ne sont pas désactivés et qui sont cochés (boutons radio et cases à cocher) ou sélectionnés (une ou plusieurs options dans une sélection).</p>
</div>

<pre class="brush: js">var myForm = document.getElementById('myForm');
formData = new FormData(myForm);</pre>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">Statut</th>
   <th scope="col">Commentaires</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('XMLHttpRequest','#dom-formdata','FormData()')}}</td>
   <td>{{Spec2('XMLHttpRequest')}}</td>
   <td>Définition initiale.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("api.FormData.FormData")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{domxref("XMLHTTPRequest")}}</li>
 <li><a href="/fr/docs/DOM/XMLHttpRequest/Using_XMLHttpRequest">Manipuler <code>XMLHttpRequest</code></a></li>
 <li><a href="/fr/docs/DOM/XMLHttpRequest/FormData/Using_FormData_Objects">Utiliser les objets <code>FormData</code></a></li>
 <li>{{HTMLElement("Form")}}</li>
</ul>
