---
title: <input type="checkbox">
slug: Web/HTML/Element/Input/checkbox
tags:
  - Element
  - HTML
  - Input
  - Reference
  - Web
translation_of: Web/HTML/Element/input/checkbox
---
<div>{{HTMLRef}}</div>

<p>Les éléments {{htmlelement("input")}} de type <strong><code>checkbox</code></strong> sont affichés sous la forme de boîtes à cocher qui sont cochées lorsqu'elles sont activées. Elles permettent de sélectionner une ou plusieurs valeurs dans un formulaire.</p>

<div>{{EmbedInteractiveExample("pages/tabbed/input-checkbox.html", "tabbed-standard")}}</div>

<div class="note">
<p><strong>Note :</strong> <a href="/fr/docs/Web/HTML/Element/input/radio">Les boutons radio</a> sont semblables aux cases à cocher mais il existe une différence importante : les boutons radio permettent de sélectionner une seule valeur parmi plusieurs alors que les cases à cocher permettent de cocher/décocher plusieurs valeurs d'un groupe.</p>
</div>

<h2 id="Valeur">Valeur</h2>

<p>Une chaîne de caractères ({{domxref("DOMString")}}) qui représente la valeur de la case à cocher. Cette chaîne de caractères n'est pas affichée côté client mais est envoyée au serveur comme valeur associée à la donnée envoyée avec le nom de la case à cocher. Par exemple :</p>

<pre class="brush: html">&lt;form&gt;
  &lt;div&gt;
    &lt;input type="checkbox" id="subscribeNews" name="subscribe" value="newsletter"&gt;
    &lt;label for="subscribeNews"&gt;Souhaitez-vous vous abonner à la newsletter ?&lt;/label&gt;
  &lt;/div&gt;
  &lt;div&gt;
    &lt;button type="submit"&gt;S'abonner&lt;/button&gt;
  &lt;/div&gt;
&lt;/form&gt;</pre>

<p>{{EmbedLiveSample('Valeur', 600, 60)}}</p>

<p>Dans cet exemple, on a le nom (l'attribut <code>name</code>) <code>subscribe</code> utilisé pour la case à cocher avec une valeur (l'attribut <code>value</code>) qui est <code>newsletter</code>. Lorsque le formulaire est envoyé, les données seront transmises sous la forme <code>subscribe=newsletter</code>.</p>

<p>Si l'attribut <code>value</code> n'était pas renseigné, la valeur par défaut sera <code>on</code> (dans l'exemple, les données envoyées au serveur auraient la forme <code>subscribe=on</code>).</p>

<div class="note">
<p><strong>Note :</strong> Si la case à cocher n'est pas cochée lorsque le formulaire est envoyé, aucune valeur n'est envoyée au serveur pour indiquer cet état (autrement dit, le client n'envoie pas quelque chose comme <code>value=unchecked</code>) ; la valeur n'est pas transmise au serveur du tout.</p>
</div>

<h2 id="Attributs_supplémentaires">Attributs supplémentaires</h2>

<p>En plus des attributs qui sont partagés par l'ensemble des éléments {{HTMLElement("input")}}, les champs de type <code>"checkbox"</code> prennent aussi en charge les attributs suivants :</p>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Attribut</th>
   <th scope="col">Description</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td><code>{{anch("checked")}}</code></td>
   <td>Un attribut booléen. Si celui-ci est présent, la case à cocher sera cochée.</td>
  </tr>
  <tr>
   <td><code>{{anch("value")}}</code></td>
   <td>La chaîne de caractères qui sera utilisée pour représenter la valeur lorsque celle-ci sera envoyée au serveur si la case est cochée.</td>
  </tr>
 </tbody>
</table>

<h3 id="htmlattrdefchecked">{{htmlattrdef("checked")}}</h3>

<p>Un attribut booléen qui indique si la case est cochée. Cet attribut n'indique pas si la case est actuellement cochée : si l'état a été modifié, l'attribut dans le document ne reflètera pas cette modification (seul l'attribut IDL <code>checked</code>de l'objet {{domxref("HTMLInputElement")}} est mis à jour).</p>

<div class="note">
<p><strong>Note :</strong> À la différence des autres champs, les valeurs des cases à cocher ne sont envoyées au serveur que lorsqu'elles sont cochées. Lorsque c'est le cas, c'est la valeur de l'attribut <code>value</code> qui est envoyé.</p>
</div>

<p>À la différence des autres navigateurs, Firefox <a href="https://stackoverflow.com/questions/5985839/bug-with-firefox-disabled-attribute-of-input-not-resetting-when-refreshing">conserve l'état coché placé dynamiquement</a> d'un champ <code>&lt;input&gt;</code> après les rechargements de la page. L'attribut {{htmlattrxref("autocomplete","input")}} peut être utilisé afin de contrôler cette fonctionnalité.</p>

<h3 id="htmlattrdefvalue">{{htmlattrdef("value")}}</h3>

<p>L'attribut <code>value</code> est partagé par l'ensemble des éléments <code>&lt;input&gt;</code> mais il a un rôle spécifique pour les champs de type <code>checkbox</code> : lorsqu'un formulaire est envoyé, seules les cases à cocher qui sont cochées sont envoyées au serveur et c'est la valeur de l'attribut <code>value</code> qui est envoyée. Si l'attribut <code>value</code> n'est pas renseigné, ce sera la chaîne de caractères <code>"on"</code> qui sera envoyée par défaut.</p>

<h2 id="Utiliser_les_cases_à_cocher">Utiliser les cases à cocher</h2>

<h3 id="Gérer_plusieurs_cases_à_cocher">Gérer plusieurs cases à cocher</h3>

<p>Dans l'exemple précédent, il n'y a qu'une seule case à cocher. Dans un scénario réaliste, on aura vraisemblablement plusieurs cases à cocher. Si celles-ci n'ont pas de rapport entre elles, il est possible de les gérer de façon séparée avec des cases à cocher « unitaires » comme illustré précédemment. Toutefois, si les valeurs sont liées entre elles, il est alors nécessaire d'indiquer ce lien.</p>

<p>Dans l'exemple qui suit, on affiche différentes cases à cocher pour représenter les intérets d'un utilisateur (voir l'exemple complet dans la section {{anch("Exemples")}}).</p>

<pre class="brush: html">&lt;fieldset&gt;
  &lt;legend&gt;Veuillez sélectionner vos intérêts :&lt;/legend&gt;
  &lt;div&gt;
    &lt;input type="checkbox" id="coding" name="interest" value="coding"&gt;
    &lt;label for="coding"&gt;Développement&lt;/label&gt;
  &lt;/div&gt;
  &lt;div&gt;
    &lt;input type="checkbox" id="music" name="interest" value="music"&gt;
    &lt;label for="music"&gt;Musique&lt;/label&gt;
  &lt;/div&gt;
&lt;/fieldset&gt;</pre>

<p>{{EmbedLiveSample('Gérer_plusieurs_cases_à_cocher', 600, 100)}}</p>

<p>Dans cet exemple on voit que chaque case à cocher utilise le même attribut <code>name</code>. Si les deux cases sont cochées lorsque le formulaire est envoyé, la chaîne des paires nom/valeur qui sera envoyée au serveur sera : <code>interest=coding&amp;interest=music</code>. Lorsque les données parviennent au serveur, on peut ainsi récupérer un tableau des valeurs sélctionnées (voir <a href="https://stackoverflow.com/questions/18745456/handle-multiple-checkboxes-with-a-single-serverside-variable">Gérer plusieurs cases à cocher avec une seule variable côté serveur</a> par exemple).</p>

<h3 id="Cocher_certaines_cases_par_défaut">Cocher certaines cases par défaut</h3>

<p>Afin qu'une case à cocher soit sélectionnée par défaut, il suffit de placer l'attribut booléen <code>checked</code>. Voir l'exemple qui suit :</p>

<pre class="brush: html">&lt;fieldset&gt;
  &lt;legend&gt;Veuillez sélectionner vos intérêts&lt;/legend&gt;
  &lt;div&gt;
    &lt;input type="checkbox" id="coding" name="interest" value="coding" checked&gt;
    &lt;label for="coding"&gt;Développement&lt;/label&gt;
  &lt;/div&gt;
  &lt;div&gt;
    &lt;input type="checkbox" id="music" name="interest" value="music"&gt;
    &lt;label for="music"&gt;Musique&lt;/label&gt;
  &lt;/div&gt;
&lt;/fieldset&gt;</pre>

<p>{{EmbedLiveSample('Cocher_certaines_cases_par_défaut', 600, 100)}}</p>

<h3 id="Fournir_une_zone_cliquable_plus_grande">Fournir une zone cliquable plus grande</h3>

<p>Dans les exemples précédents, vous avez peut-être remarqué qu'il était possible de cocher une case en cliquant sur l'élément {{htmlelement("label")}} associé. Il s'agit d'une fonctionnalité particulièrement utile des étiquettes de formulaire HTML : il y a ainsi plus d'espace qui peut être utilisé pour sélectionner les options voulues (notamment sur les petits écrans).</p>

<p>En plus des raisons liées à l'accessibilité, il s'agit d'une bonne raison pour indiquer correctement des éléments <code>&lt;label&gt;</code> dans vos formulaires.</p>

<h3 id="Gérer_un_état_indéterminé">Gérer un état indéterminé</h3>

<p>Il existe un état indéterminé pour les cases à cocher qui indique que la case n'est ni cochée, ni décochée mais indéterminéee. Cet état peut être obtenu via la propriété <code>indeterminate</code> d'un élément {{domxref("HTMLInputElement")}} en JavaScript (il est impossible d'obtenir cet état en utilisant uniquement du HTML) :</p>

<pre class="brush: js">inputInstance.indeterminate = true;</pre>

<p>Dans la plupart des navigateurs, une case à cocher dans un état indéterminé est représentée avec une ligne horizontale en travers de la case.</p>

<p>Voici un exemple d'utilisation de cet état (tiré de <a href="https://css-tricks.com/indeterminate-checkboxes/">CSS Tricks</a>) où on tient le compte des ingrédients qu'on possède pour une recette. Lorsqu'on coche ou décoche une case d'un ingrédient, une fonction JavaScript vérifie le nombre d'ingrédients possédés (c'est-à-dire cochés) :</p>

<ul>
 <li>Si aucun n'est coché, la case associée à la recette est décochée.</li>
 <li>Si un ou deux éléments sont cochés, la case associée à la recette est dans un état indéterminé.</li>
 <li>Si les trois ingrédients sont cochés, la case associée à la recette est cochée.</li>
</ul>

<p>Dans cet exemple, l'état <code>indeterminate</code> est utilisé afin d'indiquer qu'on possède certains ingrédients mais pas suffisamment pour une recette.</p>

<pre class="brush: js">
var overall = document.querySelector('input[id="EnchTbl"]');
var ingredients = document.querySelectorAll('ul input');

overall.addEventListener('click', function(e) {
  e.preventDefault();
});

for(var i = 0; i &lt; ingredients.length; i++) {
  ingredients[i].addEventListener('click', updateDisplay);
}

function updateDisplay() {
  var checkedCount = 1;
  for(var i = 0; i &lt; ingredients.length; i++) {
    if(ingredients[i].checked) {
      checkedCount++;
    }
  }
  if(checkedCount === 0) {
    overall.checked = false;
    overall.indeterminate = false;
  } else if(checkedCount === ingredients.length) {
    overall.checked = true;
    overall.indeterminate = false;
  } else {
    overall.checked = false;
    overall.indeterminate = true;
  }
}
</pre>

<p>{{EmbedGHLiveSample("learning-area/html/forms/indeterminate-example/index.html", '100%', 200)}}</p>

<div class="note">
<p><strong>Note :</strong> Si vous envoyez un formulaire avec une case à cocher dans un état indéterminé, le résultat obtenu est le même que si la case avait été décochée : aucune donnée n'est envoyée au serveur.</p>
</div>

<h2 id="Validation">Validation</h2>

<p>Il n'y a pas de mécanisme de validation natif pour la valeur d'une case à cocher.</p>

<h2 id="Exemples">Exemples</h2>

<p>Dans l'exemple suivant, on développe l'exemple vu précédemment avec les groupes de cases à cocher : il y a cette fois plus d'options et un champ texte libre qui permet de saisir une autre valeur. Pour cela on utilise un bloc de code JavaScript et quelques règles CSS pour la mise en forme.</p>

<pre class="brush: html">&lt;form&gt;
  &lt;fieldset&gt;
  &lt;legend&gt;Veuillez sélectionner vos intérêts&lt;/legend&gt;
    &lt;div&gt;
      &lt;input type="checkbox" id="coding" name="interest" value="coding"&gt;
      &lt;label for="coding"&gt;Développement&lt;/label&gt;
    &lt;/div&gt;
    &lt;div&gt;
      &lt;input type="checkbox" id="music" name="interest" value="music"&gt;
      &lt;label for="music"&gt;Musique&lt;/label&gt;
    &lt;/div&gt;
    &lt;div&gt;
      &lt;input type="checkbox" id="art" name="interest" value="art"&gt;
      &lt;label for="art"&gt;Art&lt;/label&gt;
    &lt;/div&gt;
    &lt;div&gt;
      &lt;input type="checkbox" id="sports" name="interest" value="sports"&gt;
      &lt;label for="sports"&gt;Sports&lt;/label&gt;
    &lt;/div&gt;
    &lt;div&gt;
      &lt;input type="checkbox" id="cooking" name="interest" value="cooking"&gt;
      &lt;label for="cooking"&gt;Cuisine&lt;/label&gt;
    &lt;/div&gt;
    &lt;div&gt;
      &lt;input type="checkbox" id="other" name="interest" value="other"&gt;
      &lt;label for="other"&gt;Autre&lt;/label&gt;
      &lt;input type="text" id="otherValue" name="other"&gt;
    &lt;/div&gt;
    &lt;div&gt;
      &lt;button type="submit"&gt;Envoyer le formulaire&lt;/button&gt;
    &lt;/div&gt;
  &lt;/fieldset&gt;
&lt;/form&gt;</pre>

<pre class="brush: css">html {
  font-family: sans-serif;
}

form {
  width: 600px;
  margin: 0 auto;
}

div {
  margin-bottom: 10px;
}

fieldset {
  background: cyan;
  border: 5px solid blue;
}

legend {
  padding: 10px;
  background: blue;
  color: cyan;
}

#otherValue
{
  display: none;
}

#other:checked ~ #otherValue
{
  display: inline-block;
}
</pre>

<h3 id="JavaScript">JavaScript</h3>

<pre class="brush: js">var otherCheckbox = document.querySelector('input[value="other"]');
var otherText = document.querySelector('input[id="otherValue"]');
otherText.style.visibility = 'hidden';

otherCheckbox.onchange = function() {
  if(otherCheckbox.checked) {
    otherText.style.visibility = 'visible';
    otherText.value = '';
  } else {
    otherText.style.visibility = 'hidden';
  }
};</pre>

<p>{{EmbedLiveSample('Exemples', '100%', 300)}}</p>

<h2 id="Résumé_technique">Résumé technique</h2>

<table class="properties">
 <tbody>
  <tr>
   <td><strong>{{anch("Valeur")}}</strong></td>
   <td>Une chaîne de caractères ({{domxref("DOMString")}}) qui représente la valeur de la case à cocher.</td>
  </tr>
  <tr>
   <td><strong>Évènements</strong></td>
   <td>{{event("change")}} et {{event("input")}}</td>
  </tr>
  <tr>
   <td><strong>Attributs pris en charge</strong></td>
   <td><code>checked</code></td>
  </tr>
  <tr>
   <td><strong>Attributs IDL</strong></td>
   <td><code>checked</code> et <code>value</code></td>
  </tr>
  <tr>
   <td><strong>Méthodes</strong></td>
   <td>{{domxref("HTMLInputElement.select", "select()")}}</td>
  </tr>
 </tbody>
</table>

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
   <td>{{SpecName('HTML WHATWG', 'forms.html#checkbox-state-(type=checkbox)', '&lt;input type="checkbox"&gt;')}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName('HTML5 W3C', 'forms.html#checkbox-state-(type=checkbox)', '&lt;input type="checkbox"&gt;')}}</td>
   <td>{{Spec2('HTML5 W3C')}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("html.elements.input.input-checkbox")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>L'élément {{HTMLElement("input")}} et l'interface DOM qu'il implémente : {{domxref("HTMLInputElement")}}.</li>
 <li>{{cssxref(":checked")}}</li>
 <li>{{cssxref("indeterminate")}}</li>
</ul>
