---
title: USVString
slug: Web/API/USVString
tags:
  - API
  - DOM
  - Reference
  - String
  - WedIDL
translation_of: Web/API/USVString
---
<p>{{APIRef("DOM")}}</p>

<p><code>USVString</code> correspond à l'ensemble de toutes les séquences possibles de valeurs scalaires unicode. <code>USVString</code> correspond à une {{JSxRef("String", "chaîne de caractères")}} lorsqu'elle est renvoyée en JavaScript ; elle n'est généralement utilisée que pour les API qui effectuent un traitement de texte et ont besoin d'une chaîne de valeurs scalaires unicode pour fonctionner. <code>USVString</code> est équivalent à {{DOMxRef("DOMString")}} sauf qu'il n'autorise pas les points de code de substitution non appariés. Les points de code de substitution non appariés présents dans <code>USVString</code> sont convertis par le navigateur en "caractère de remplacement" Unicode <code>U+FFFD</code>, (�).</p>

<h2 id="Specification">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">Statut</th>
   <th scope="col">Commentaire</th>
  </tr>
  <tr>
   <td>{{SpecName("WebIDL", "#idl-USVString", "USVString")}}</td>
   <td>{{Spec2("WebIDL")}}</td>
   <td>Définition initiale.</td>
  </tr>
 </tbody>
</table>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{JSxRef("String")}}</li>
 <li>{{DOMxRef("DOMString")}}</li>
 <li>{{DOMxRef("CSSOMString")}}</li>
 <li><a href="/fr/docs/Web/API/DOMString/Binary">Chaîne de caractères binaires</a></li>
</ul>
