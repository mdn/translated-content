---
title: HTMLSelectElement
slug: Web/API/HTMLSelectElement
translation_of: Web/API/HTMLSelectElement
---
<div>{{ APIRef("HTML DOM") }}</div>

<p>L'interface <code><strong>HTMLSelectElement</strong></code> représente un élément HTML {{HTMLElement("select")}}. Cet élément partage aussi toute les propriétés et méthodes des autres elements HTML via l'interface {{ domxref("HTMLElement") }}.</p>

<p>{{InheritanceDiagram(600, 120)}}</p>

<h2 id="Properties">Propriétés</h2>

<p><em>Cette interface hérite des propriétés de {{domxref("HTMLElement")}}, de {{domxref("Element")}} et de {{domxref("Node")}}.</em></p>

<dl>
  <dt>{{domxref("HTMLSelectElement.autofocus")}}</dt>
  <dd>Un {{jsxref("Boolean")}} reflétant l'attribut HTML {{htmlattrxref("autofocus", "select")}} qui indique si le contrôle doit bénéficier d'une priorité d'entrée au chargement de la page, à moins que l'utilisateur ne passe outre, par exemple en saisissant un autre contrôle. Cet attribut ne peut être spécifié que pour un seul élément associé à un formulaire dans un document.</dd>
  <dt>{{domxref("HTMLSelectElement.disabled")}}</dt>
  <dd>Un {{jsxref("Boolean")}} reflétant l'attribut {{htmlattrxref("disabled", "select")}} qui indique si le contrôle est désactivé. S'il est désactivé, il n'accepte pas les clics.</dd>
  <dt>{{domxref("HTMLSelectElement.form")}} {{ReadOnlyInline}}</dt>
  <dd>Un {{domxref("HTMLFormElement")}} référençant le formulaire auquel cet élément est associé. Si l'élément n'est pas associé à un élément {{HTMLElement("form")}}, il retourne <code>null</code>.</dd>
  <dt>{{domxref("HTMLSelectElement.labels")}} {{ReadOnlyInline}}</dt>
  <dd>Une {{domxref("NodeList")}} d'éléments {{HTMLElement("label")}} associés à l'élément.</dd>
  <dt>{{domxref("HTMLSelectElement.length")}}</dt>
  <dd>Un <code>unsigned long</code>, le nombre d'éléments {{HTMLElement("option")}} dans cet élément <code>select</code>.</dd>
  <dt>{{domxref("HTMLSelectElement.multiple")}}</dt>
  <dd>Un {{jsxref("Boolean")}} reflétant l'attribut {{htmlattrxref("multiple", "select")}} qui indique si plusieurs éléments peuvent être sélectionnés.</dd>
  <dt>{{domxref("HTMLSelectElement.name")}}</dt>
  <dd>Une chaîne de caratères {{domxref("DOMString")}} reflétant l'attribut HTML {{htmlattrxref("name", "select")}} contenant le nom de ce contrôle utilisé par les serveurs et les fonctions de recherche DOM.</dd>
  <dt>{{domxref("HTMLSelectElement.options")}} {{ReadOnlyInline}}</dt>
  <dd>Une {{domxref("HTMLOptionsCollection")}} représentant l'ensemble des {{HTMLElement("option")}} ({{domxref("HTMLOptionElement")}}) contenus par cet élément.</dd>
  <dt>{{domxref("HTMLSelectElement.required")}}</dt>
  <dd>Un {{jsxref("Boolean")}} reflétant l'attribut {{htmlattrxref("required", "select")}} qui indique si l'utilisateur doit sélectionner une valeur avant de soumettre le formulaire.</dd>
  <dt>{{domxref("HTMLSelectElement.selectedIndex")}}</dt>
  <dd>Un <code>long</code> reflétant l'indice du premier élément {{HTMLElement("option")}} sélectionné. La valeur <code>-1</code> indique qu'aucun élément n'est sélectionné.</dd>
  <dt>{{domxref("HTMLSelectElement.selectedOptions")}} {{ReadOnlyInline}}</dt>
  <dd>Une {{domxref("HTMLCollection")}} représentant l'ensemble des éléments {{HTMLElement("option")}} qui sont sélectionnés.</dd>
  <dt>{{domxref("HTMLSelectElement.size")}}</dt>
  <dd>Un <code>long</code> reflétant l'attribut {{htmlattrxref("size", "select")}} attribut HTML, qui contient le nombre d'éléments visibles dans le contrôle. La valeur par défaut est 1, sauf si <code>multiple</code> est <code>true</code>, auquel cas elle est de 4.</dd>
  <dt>{{domxref("HTMLSelectElement.type")}} {{ReadOnlyInline}}</dt>
  <dd>Une chaîne de caractères {{domxref("DOMString")}} représentant le type du contrôle de formulaire. Lorsque <code>multiple</code> est <code>true</code>, il renvoie <code>"select-multiple"</code> ; sinon, il renvoie <code>"select-one"</code>.</dd>
  <dt>{{domxref("HTMLSelectElement.validationMessage")}} {{ReadOnlyInline}}</dt>
  <dd>Une chaîne de caractères {{domxref("DOMString")}} représentant un message localisé qui décrit les contraintes de validation que le contrôle ne satisfait pas (le cas échéant). Cet attribut est la chaîne vide si le contrôle n'est pas un candidat à la validation des contraintes (<code>willValidate</code> est faux), ou s'il satisfait à ses contraintes.</dd>
  <dt>{{domxref("HTMLSelectElement.validity")}} {{ReadOnlyInline}}</dt>
  <dd>Un {{domxref("ValidityState")}} reflétant l'état de validité dans lequel se trouve ce contrôle.</dd>
  <dt>{{domxref("HTMLSelectElement.value")}}</dt>
  <dd>Une chapine de caractères {{domxref("DOMString")}} reflétant la valeur du contrôle de formulaire. Renvoie la propriété <code>value</code> du premier élément d'option sélectionné s'il y en a un, sinon la chaîne vide.</dd>
  <dt>{{domxref("HTMLSelectElement.willValidate")}} {{ReadOnlyInline}}</dt>
  <dd>Un {{jsxref("Boolean")}} qui indique si le bouton est un candidat à la validation des contraintes. Il vaut <code>false</code> si des conditions l'empêchent de bénéficier de la validation par contrainte.</dd>
</dl>

<h2 id="Methods">Méthodes</h2>

<p><em>Cette interface hérite des méthodes de {{domxref("HTMLElement")}}, et de {{domxref("Element")}} et {{domxref("Node")}}.</em></p>

<dl>
  <dt>{{domxref("HTMLSelectElement.add()")}}</dt>
  <dd>Ajoute un élément à la collection d'éléments <code>option</code> pour cet élément <code>select</code>.</dd>
  <dt>{{domxref("HTMLSelectElement.blur()")}} {{obsolete_inline}}</dt>
  <dd>Supprime le focus d'entrée de cet élément. <em>Cette méthode est maintenant mise en œuvre sur {{domxref("HTMLElement")}}.</em>.</dd>
  <dt>{{domxref("HTMLSelectElement.checkValidity()")}}</dt>
  <dd>Vérifie si l'élément a des contraintes et s'il les satisfait. Si l'élément ne respecte pas ses contraintes, le navigateur déclenche un événement {{domxref("HTMLInputElement/invalid_event", "invalid")}} annulable sur l'élément (et retourne <code>false</code>).</dd>
  <dt>{{domxref("HTMLSelectElement.focus()")}} {{obsolete_inline}}</dt>
  <dd>Donne le focus d'entrée à cet élément. <em>Cette méthode est maintenant mise en œuvre sur {{domxref("HTMLElement")}}</em>.</dd>
  <dt>{{domxref("HTMLSelectElement.item()")}}</dt>
  <dd>Obtient un élément de la collection d'options de l'élément {{HTMLElement("select")}}. Vous pouvez également accéder à un élément en spécifiant l'index entre des parenthèses ou des crochets de style tableau, sans appeler cette méthode explicitement.</dd>
  <dt>{{domxref("HTMLSelectElement.namedItem()")}}</dt>
  <dd>Obtient l'élément dans la collection d'options avec le nom spécifié. La chaîne de nom peut correspondre soit au <code>id</code>, soit à l'attribut <code>name</code> d'un nœud d'option. Vous pouvez également accéder à un élément en spécifiant le nom entre des crochets de style tableau ou des parenthèses, sans appeler cette méthode explicitement.</dd>
  <dt>{{domxref("HTMLSelectElement.remove()")}}</dt>
  <dd>Supprime l'élément à l'indice spécifié de la collection d'options pour cet élément <code>select</code>.</dd>
  <dt>{{domxref("HTMLSelectElement.reportValidity()")}}</dt>
  <dd>Cette méthode signale à l'utilisateur les problèmes liés aux contraintes sur l'élément, le cas échéant. S'il y a des problèmes, elle déclenche un événement {{domxref("HTMLInputElement/invalid_event", "invalid")}} annulable sur l'élément, et retourne <code>false</code> ; s'il n'y a pas de problèmes, elle retourne <code>true</code>.</dd>
  <dt>{{domxref("HTMLSelectElement.setCustomValidity()")}}</dt>
  <dd>Définit le message de validation personnalisé pour l'élément de sélection au message spécifié. Utilisez la chaîne vide pour indiquer que l'élément n'a <em>pas</em> d'erreur de validité personnalisée.</dd>
</dl>

<h2 id="Events">Événements</h2>

<p>Écoutez ces événements en utilisant {{domxref("EventTarget/addEventListener", "addEventListener()")}} ou en affectant un écouteur d'événements à la propriété <code>on<em>eventname</em></code> de cette interface :</p>

<dl>
  <dt>Événement {{domxref("HTMLElement/input_event", "input")}}</dt>
  <dd>S'active lorsque la <code>valeur</code> d'un élément {{HTMLElement("input")}}, {{HTMLElement("select")}} ou {{HTMLElement("textarea")}} a été modifiée.</dd>
</dl>

<h2 id="Example">Exemple</h2>

<h3 id="Get_information_about_the_selected_option">Obtenir des informations sur l'option sélectionnée</h3>

<pre class="brush: js">/* en supposant que nous ayons le HTML suivant
&lt;select id='s'&gt;
    &lt;option&gt;Premier&lt;/option&gt;
    &lt;option selected&gt;Deuxième&lt;/option&gt;
    &lt;option&gt;Troisième&lt;/option&gt;
&lt;/select&gt;
*/

const select = document.getElementById('s');

// renvoie l'index de l'option sélectionnée
console.log(select.selectedIndex); // 1

// retourne la valeur de l'option sélectionnée
console.log(select.options[select.selectedIndex].value) // Deuxième
</pre>

<p>Une meilleure façon de suivre les modifications apportées à la sélection de l'utilisateur consiste à surveiller l'événement {{domxref("HTMLElement/change_event", "change")}} qui se produit sur le <code>&lt;select&gt;</code>. Cela vous indiquera quand la valeur change, et vous pourrez alors mettre à jour ce dont vous avez besoin. Voir <a href="/fr/docs/Web/API/HTMLElement/change_event#select_element">l'exemple fourni</a> dans la documentation de l'événement <code>change</code> pour plus de détails.</p>

<h2 id="Specifications">Spécifications</h2>

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
      <td>{{SpecName('HTML WHATWG', '#htmlselectelement', 'HTMLSelectElement')}}</td>
      <td>{{Spec2('HTML WHATWG')}}</td>
      <td>Ajoute la propriété <code>autocomplete</code> et la méthode <code>reportValidity()</code>.</td>
    </tr>
    <tr>
      <td>{{SpecName('HTML5 W3C', 'forms.html#htmlselectelement', 'HTMLSelectElement')}}</td>
      <td>{{Spec2('HTML5 W3C')}}</td>
      <td>Ajoute les propriétés <code>autofocus</code>, <code>form</code>, <code>required</code>, <code>labels</code>, <code>selectedOptions</code>, <code>willValidate</code>, <code>validity</code> et <code>validationMessage</code>. <br>La propriété <code>tabindex</code> et les méthodes <code>blur()</code> et <code>focus()</code> ont été déplacées vers {{domxref("HTMLElement")}}. <br>Les méthodes <code>item()</code>, <code>namedItem()</code>, <code>checkValidity()</code> et <code>setCustomValidity()</code>.</td>
    </tr>
    <tr>
      <td>{{SpecName('DOM2 HTML', 'html.html#ID-94282980', 'HTMLSelectElement')}}</td>
      <td>{{Spec2('DOM2 HTML')}}</td>
      <td><code>options</code> retourne désormais un {{domxref("HTMLOptionsCollection")}}.<br> <code>length</code> retourne désormais un <code>unsigned long</code>.</td>
    </tr>
    <tr>
      <td>{{SpecName('DOM1', 'level-one-html.html#ID-94282980', 'HTMLSelectElement')}}</td>
      <td>{{Spec2('DOM1')}}</td>
      <td>Définition initiale.</td>
    </tr>
  </tbody>
</table>

<h2 id="Browser_compatibility">Compatibilité des navigateurs</h2>

<p>{{Compat("api.HTMLSelectElement")}}</p>

<h2 id="See_also">Voir aussi</h2>

<ul>
  <li>L'élément HTML {{HTMLElement("select")}}, qui implémente cette interface.</li>
</ul>
