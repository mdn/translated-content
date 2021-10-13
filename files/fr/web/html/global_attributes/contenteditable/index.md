---
title: contenteditable
slug: Web/HTML/Global_attributes/contenteditable
tags:
  - Attribut
  - Attribut universel
  - HTML
  - Reference
translation_of: Web/HTML/Global_attributes/contenteditable
original_slug: Web/HTML/Attributs_universels/contenteditable
---
<div>{{HTMLSidebar("Global_attributes")}}</div>

<p>L'<a href="/fr/docs/Web/HTML/Attributs_universels">attribut universel</a> <code><strong>contenteditable</strong></code> est un attribut à valeur contrainte qui indique si l'élément courant doit pouvoir être édité par l'utilisateur ou non. Lorsque c'est le cas, des éléments de l'interface du navigateur (ou de l'agent utilisateur) sont modifiés afin de permettre l'édition.</p>

<div>{{EmbedInteractiveExample("pages/tabbed/attribute-contenteditable.html","tabbed-shorter")}}</div>

<p>Les valeurs autorisées pour cet attribut sont :</p>

<ul>
 <li><code>true</code> ou la chaîne de caractères vide qui indiquent que l'élément est éditable</li>
 <li><code>false</code> qui indique que l'élément ne peut pas être édité.</li>
</ul>

<p>Si cet attribut n'est pas défini, sa valeur est héritée depuis son élément parent.</p>

<p>Cet attribut n'est pas un attribut booléen ! Cela signifie qu'une valeur explicite est nécessaire pour son fonctionnement. Toute forme telle que <code>&lt;label contenteditable&gt;Exemple&lt;/label&gt;</code> n'est pas autorisée. La version correcte sera <code>&lt;label contenteditable="true"&gt;Exemple&lt;/label&gt;</code>.</p>

<p>Il est possible de modifier la couleur du symbole d'insertion grâce à la propriété CSS {{cssxref("caret-color")}}.</p>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">État</th>
   <th scope="col">Commentaires</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName("HTML Editing", "contentEditable.html#contenteditable", "contenteditable")}}</td>
   <td>{{Spec2("HTML Editing")}}</td>
   <td>Ajout de <code>"events"</code>, <code>"caret"</code>, <code>"typing"</code>, <code>"plaintext-only"</code>.</td>
  </tr>
  <tr>
   <td>{{SpecName("HTML WHATWG", "editing.html#attr-contenteditable", "contenteditable")}}</td>
   <td>{{Spec2("HTML WHATWG")}}</td>
   <td>Aucune modification depuis la dernière dérivation, {{SpecName("HTML5.2")}}</td>
  </tr>
  <tr>
   <td>{{SpecName("HTML5.2", "editing.html#making-document-regions-editable-the-contenteditable-content-attribute", "contenteditable")}}</td>
   <td>{{Spec2("HTML5.2")}}</td>
   <td>Dérivation de {{SpecName("HTML WHATWG")}}, aucune modification depuis {{SpecName("HTML5.1")}}</td>
  </tr>
  <tr>
   <td>{{SpecName("HTML5.1", "editing.html#making-document-regions-editable-the-contenteditable-content-attribute", "contenteditable")}}</td>
   <td>{{Spec2("HTML5.1")}}</td>
   <td>Dérivation de {{SpecName("HTML WHATWG")}}, aucune modification depuis {{SpecName("HTML5 W3C")}}</td>
  </tr>
  <tr>
   <td>{{SpecName("HTML5 W3C", "editing.html#attr-contenteditable", "contenteditable")}}</td>
   <td>{{Spec2("HTML5 W3C")}}</td>
   <td>Dérivation de {{SpecName("HTML WHATWG")}}, définition initiale.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("html.global_attributes.contenteditable")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><a href="/fr/docs/Web/HTML/Contenu_editable">Rendre le contenu éditable</a></li>
 <li><a href="/fr/docs/Web/HTML/Attributs_universels">Tous les attributs universels</a></li>
 <li>{{domxref("HTMLElement.contentEditable")}} et {{domxref("HTMLElement.isContentEditable")}}</li>
 <li>{{cssxref("caret-color")}}</li>
 <li><a href="/fr/docs/Web/API/HTMLElement/input_event">L'évènement <code>input</code> pour l'objet DOM <code>HTMLElement</code></a></li>
</ul>
