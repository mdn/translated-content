---
title: HTMLSelectElement.remove()
slug: Web/API/HTMLSelectElement/remove
translation_of: Web/API/HTMLSelectElement/remove
---
<p>{{ APIRef("HTML DOM") }}</p>

<p>La méthode <code><strong>HTMLSelectElement.remove()</strong></code> enlève l'option à l'index choisi dans la liste des options de cet objet select.</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="eval">collection.remove(index);
</pre>

<h3 id="Parameters">Paramètre</h3>

<ul>
 <li><em>index est</em> un entier long définissant la position du {{ domxref("HTMLOptionElement") }} à enlever de la collection. Si rien n'est trouvé à cette position dans la liste, la méthode n'a aucun effet.</li>
</ul>

<dl>
</dl>

<h2 id="Exemple">Exemple</h2>

<pre class="brush: js">var sel = document.getElementById("maListe");
sel.remove(1);

/*
  Prend l'objet select existant suivant :

  &lt;select id="maListe" name="maListe"&gt;
    &lt;option value="1"&gt;Option: Value 1&lt;/option&gt;
    &lt;option value="2"&gt;Option: Value 2&lt;/option&gt;
    &lt;option value="3"&gt;Option: Value 3&lt;/option&gt;
  &lt;/select&gt;

  Et le transforme en:

  &lt;select id="maListe" name="maListe"&gt;
    &lt;option value="1"&gt;Option: Value 1&lt;/option&gt;
    &lt;option value="3"&gt;Option: Value 3&lt;/option&gt;
  &lt;/select&gt;
*/
 </pre>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
  <tr>
   <td>{{SpecName('HTML WHATWG', '#dom-select-remove', 'HTMLSelectElement.remove()')}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName('HTML5 W3C', 'forms.html#dom-select-remove', 'HTMLSelectElement.remove()')}}</td>
   <td>{{Spec2('HTML5 W3C')}}</td>
   <td>Is a snapshot of {{SpecName("HTML WHATWG")}}.</td>
  </tr>
  <tr>
   <td>{{SpecName('DOM2 HTML', 'html.html#ID-33404570', 'HTMLSelectElement.remove()')}}</td>
   <td>{{Spec2('DOM2 HTML')}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName('DOM1', 'level-one-html.html#ID-33404570', 'HTMLSelectElement.remove()')}}</td>
   <td>{{Spec2('DOM1')}}</td>
   <td>Initial definition.</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility">Compatibilité des navigateurs</h2>

<p>{{Compat("api.HTMLSelectElement.remove")}}</p>

<h2 id="See_also">Voir aussi</h2>

<ul>
 <li>{{ domxref("ChildNode.remove") }}, la méthode appelée quand remove est créé sans argument pour un {{ domxref("HTMLSelectElement") }}.</li>
 <li>{{domxref("HTMLSelectElement") }} qui possède cette méthode.</li>
</ul>
