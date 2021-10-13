---
title: <input type="color">
slug: Web/HTML/Element/Input/color
tags:
  - Element
  - HTML
  - Input
  - Reference
  - Web
translation_of: Web/HTML/Element/input/color
---
<div>{{HTMLRef}}</div>

<p>Les éléments {{HTMLElement("input")}} de type <code><strong>"color"</strong></code> permettent de sélectionner une couleur via une interface (un sélecteur de couleur) ou en saisissant le code hexadécimal de la couleur au format <code>"#rrggbb"</code>. Ce format de valeur peut être utilisé en CSS.</p>

<p>L'apparence du contrôle de sélection des couleurs peut grandement varier d'un navigateur à un autre et d'un système d'exploitation à un autre. Pour certains navigateurs, seul un champ textuel sera affiché afin de saisir le code de la couleur (avec des mécanismes de validation vérifiant le format), pour d'autres, ce sera le sélecteur de couleur du système d'exploitation qui sera utilisé et pour d'autres encore, ce sera un sélecteur de couleur spécifique.</p>

<div>{{EmbedInteractiveExample("pages/tabbed/input-color.html", "tabbed-standard")}}</div>

<h2 id="Valeur">Valeur</h2>

<p>L'attribut {{htmlattrxref("value", "input")}} d'un élément <code>&lt;input type="color"&gt;</code> est une chaîne de caractères sur 7 caractères qui correspond au code de la couleur en représentation hexadécimale RGB. Autrement dit, le premier caractère est un croisillon (#) , les deux suivants indiquent la composante rouge (R) de la couleur, les deux suivants indiquent la couleur verte (G pour <em>Green</em> en anglais) et les deux suivants indiquent la composante bleue (B) de la couleur. La valeur respecte nécessairement ce format et n'est jamais vide.</p>

<div class="note">
<p><strong>Note :</strong> Si la valeur saisie n'est pas un code hexadécimal RGB d'une couleur opaque valide, c'est la valeur <code>"#000000"</code> (c'est-à-dire la couleur noire) qui sera utilisée. Il est notamment impossible d'utiliser les noms de couleurs CSS ou des fonctions CSS afin de définir cette valeur. Il faut garder à l'esprit que HTML et CSS sont deux langages séparés, définis par des spécifications distinctes. De plus, les couleurs avec un canal alpha ne sont pas prises en charges, utiliser un code avec une notation sur 9 caractères entraînera également l'utilisation de <code>"#000000"</code>.</p>
</div>

<h2 id="Utiliser_les_contrôles_de_saisie_des_couleurs">Utiliser les contrôles de saisie des couleurs</h2>

<p>Les éléments <code>&lt;input type="color"&gt;</code> sont simples à utiliser (notamment en raison du faible nombre d'attributs qu'ils gèrent).</p>

<h3 id="Fournir_une_couleur_par_défaut">Fournir une couleur par défaut</h3>

<p>Il est possible de créer un sélecteur de couleur qui emploie une valeur par défaut :</p>

<pre class="brush: html">&lt;input type="color" value="#ff0000"&gt;</pre>

<p>{{EmbedLiveSample("Fournir_une_couleur_par_défaut", 700, 30)}}</p>

<p>Si aucune valeur n'est indiquée, c'est <code>"#000000"</code> qui sera utilisée par défaut (la couleur noire). Comme indiqué dans la note ci-avant, la valeur de cet attribut doit être de la forme <code>"#rrggbb"</code>. Pour les couleurs dans un autre format (couleurs nommées CSS ou couleurs calculées à l'aide des fonctions <code>rgb()</code> ou <code>rgba()</code>), il faudra les convertir au format hexadécimal avant de les utiliser pour <code>value</code>.</p>

<h3 id="Détecter_le_changement_de_couleur">Détecter le changement de couleur</h3>

<p>Comme pour les différents éléments {{HTMLElement("input")}}, deux évènements peuvent être utilisés afin de détecter une modification de la couleur : {{event("input")}} et {{event("change")}}. <code>input</code> est déclenché sur l'élément <code>&lt;input&gt;</code> à chaque fois que la couleur change. L'évènement <code>change</code> est déclenché lorsque l'utilisateur ferme le sélecteur de couleur. Dans tous les cas, il est possible de déterminer la nouvelle valeur de l'élément grâce à {{domxref("HTMLInputElement.value", "value")}}.</p>

<pre class="brush: js">colorPicker.addEventListener("input", updateFirst, false);
colorPicker.addEventListener("change", watchColorPicker, false);

function watchColorPicker(event) {
  document.querySelectorAll("p").forEach(function(p) {
    p.style.color = event.target.value;
  });
}
</pre>

<h3 id="Sélectionner_la_valeur">Sélectionner la valeur</h3>

<p>Si l'implémentation du navigateur n'affiche pas de sélecteur de couleur mais un champ texte, il est possible de sélectionner la valeur du texte avec la méthode {{domxref("HTMLInputElement.select", "select()")}}. Si le navigateur affiche un sélecteur de couleur, <code>select()</code> ne fera rien. Soyez conscient⋅e de ce comportement afin d'adapter votre code à ce cas.</p>

<pre class="brush: js">colorWell.select();</pre>

<h2 id="Validation">Validation</h2>

<p>La valeur d'un tel champ est considérée invalide si l'interface utilisateur ne parvient pas à convertir la saisie de l'utilisateur en une notation hexadécimale sur sept caractères et en minuscules. Si c'est le cas, la pseudo-classe CSS {{cssxref(":invalid")}} sera appliquée à l'élément.</p>

<h2 id="Exemples">Exemples</h2>

<p>Créons un exemple qui utilise un sélecteur de couleur et les évènements {{event("change")}} et {{event("input")}} afin de choisir une nouvelle couleur et de l'appliquer sur chaque élément {{HTMLElement("p")}} du document.</p>

<h3 id="HTML">HTML</h3>

<p>Le fragment de code HTML utilisé est relativement simple. On utilise quelques paragraphes descriptifs ainsi qu'un élément {{HTMLElement("input")}} de type <code>"color"</code> dont l'identifiant est <code>"colorWell"</code> (c'est la valeur de cette couleur qu'on utilisera pour changer la couleur du texte des paragraphes).</p>

<pre class="brush: html">&lt;p&gt;Un exemple qui illustre l'utilisation de &lt;code&gt;&amp;lt;input type="color"&amp;gt;&lt;/code&gt;.&lt;/p&gt;

&lt;label for="colorWell"&gt;Couleur :&lt;/label&gt;
&lt;input type="color" value="#ff0000" id="colorWell"&gt;

&lt;p&gt;Vous pouvez ici voir que la couleur du premier paragraphe changer
   lorsqu'on ajuste la valeur dans le sélecteur. Pour cela, on
   utilise l'évènement &lt;code&gt;input&lt;/code&gt;. Lorsqu'on ferme le
   sélecteur, l'évènement &lt;code&gt;change&lt;/code&gt; est déclenché et on
   applique la modification est appliquée à l'ensemble des paragraphes.&lt;/p&gt;</pre>

<h3 id="JavaScript">JavaScript</h3>

<p>Tout d'abord, on établit certains variables : une pour la couleur du sélecteur et une autre couleur pour la couleur par défaut. On ajoute un gestionnaire {{event("load")}} afin de lancer les actions de démarrage lorsque la page est chargée.</p>

<pre class="brush: js">var colorWell
var defaultColor = "#0000ff";

window.addEventListener("load", startup, false);
</pre>

<h4 id="Initialisation">Initialisation</h4>

<p>Lorsque la page est chargée, l'évènement <code>"load"</code> est déclenché et la fonction <code>startup()</code> est donc appelée :</p>

<pre class="brush: js">function startup() {
  colorWell = document.querySelector("#colorWell");
  colorWell.value = defaultColor;
  colorWell.addEventListener("input", updateFirst, false);
  colorWell.addEventListener("change", updateAll, false);
  colorWell.select();
}
</pre>

<p>Dans cette fonction, on utilise la variable <code>colorWell</code> déclarée plus haut et on remplit sa valeur avec la valeur par défaut (la valeur de <code>defaultColor</code>). Ensuite, on indique les gestionnaires d'évènements : {{event("input")}} appellera <code>updateFirst()</code> et {{event("change")}} appellera <code>updateAll()</code> qui seront détaillés ensuite.</p>

<p>Enfin, on appelle {{domxref("HTMLInputElement.select", "select()")}} afin de sélectionner le texte du champ si le contrôle est un champ texte.</p>

<h4 id="Réagir_suite_aux_modifications_de_couleurs">Réagir suite aux modifications de couleurs</h4>

<p>On dispose de deux fonctions qui gèrent les modifications de couleurs. La fonction <code>updateFirst()</code> permet de répondre à l'évènement <code>input</code> et modifie la couleur du premier paragraphe dans le document en utilisant la nouvelle valeur saisie. Étant donné que les évènements <code>input</code> ont lieu à chaque fois qu'un ajustement est fait, cette fonction sera appelée sans cesse lorsque le sélecteur de couleur est utilisé.</p>

<pre class="brush: js">function updateFirst(event) {
  var p = document.querySelector("p");

  if (p) {
    p.style.color = event.target.value;
  }
}</pre>

<p>Lorsque le sélecteur est fermé, cela signifie que la valeur ne sera plus modifié avant une prochaine ouverture du sélecteur. Un évènement <code>change</code> est alors envoyé et cela déclenche alors l'appel de la fonction <code>updateAll()</code> :</p>

<pre class="brush: js">function updateAll(event) {
  document.querySelectorAll("p").forEach(function(p) {
    p.style.color = event.target.value;
  });
}
</pre>

<p>Cela permet de modifier la couleur de chaque bloc {{HTMLElement("p")}} du document afin que la couleur (cf. {{cssxref("color")}}) soit celle sélectionnée dans le contrôle. Pour récupérer cette valeur, on utilise l'objet {{domxref("Event.target", "event.target")}}.</p>

<h3 id="Résultat">Résultat</h3>

<p>{{EmbedLiveSample("Exemples", 700, 200)}}</p>

<h2 id="Résumé_technique">Résumé technique</h2>

<table class="properties">
 <tbody>
  <tr>
   <td><strong>{{anch("Valeur")}}</strong></td>
   <td>Une chaîne de caractères sur sept caractères qui indique la couleur (cf. {{cssxref("&lt;color&gt;")}}) en notation hexadécimale (en minuscule).</td>
  </tr>
  <tr>
   <td><strong>Évènements</strong></td>
   <td>{{event("change")}} et {{event("input")}}.</td>
  </tr>
  <tr>
   <td><strong>Attributs pris en charge</strong></td>
   <td>{{htmlattrxref("autocomplete", "input")}} et {{htmlattrxref("list", "input")}}.</td>
  </tr>
  <tr>
   <td><strong>Attributs IDL</strong></td>
   <td><code>list</code> et <code>value</code>.</td>
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
   <td>{{SpecName('HTML WHATWG', '#color-state-(type=color)')}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName('HTML5 W3C', 'forms.html#the-input-element')}}</td>
   <td>{{Spec2('HTML5 W3C')}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName('HTML4.01', 'interact/forms.html#h-17.4')}}</td>
   <td>{{Spec2('HTML4.01')}}</td>
   <td>Définition initiale.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("html.elements.input.input-color")}}</p>
