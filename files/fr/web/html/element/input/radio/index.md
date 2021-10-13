---
title: <input type="radio">
slug: Web/HTML/Element/Input/radio
tags:
  - Formulaires
  - HTML
  - Input
  - Reference
translation_of: Web/HTML/Element/input/radio
---
<div>{{HTMLRef}}</div>

<p>Les éléments <code>&lt;input&gt;</code> dont l'attribut <code>type</code> vaut <strong><code>radio</code></strong> sont généralement utilisés pour construire des groupes d'options parmi lesquelles on ne peut choisir qu'une valeur. Les « boutons radio » sont représentés par des cercles remplis lorsqu'ils sont sélectionnés.</p>

<div>{{EmbedInteractiveExample("pages/tabbed/input-radio.html", "tabbed-standard")}}</div>

<p>On les appelle boutons radios par analogie avec les boutons qui étaient utilisés sur les anciens postes de radios.</p>

<div class="note">
<p><strong>Note :</strong> <a href="/fr/docs/Web/HTML/Element/input/checkbox">Les cases à cocher (<em>checkboxes</em>)</a> ressemblent aux boutons radios. Toutefois, il existe une différence fondamentale : les boutons radio ne permettent de sélectionner qu'une seule option au sein d'un groupe alors que les cases à cocher permettent d'en sélectionner plusieurs.</p>
</div>

<h2 id="Valeur">Valeur</h2>

<p>L'attribut <code>value</code> est une chaîne de caractères (un objet {{domxref("DOMString")}} au sens du DOM) qui contient la valeur du bouton radio. Cette valeur n'est pas montrée à l'utilisateur par le navigateur ou tout autre agent utilisateur, elle permet d'identifier l'option sélectionnée.</p>

<h3 id="Définir_un_groupe_de_boutons_radio">Définir un groupe de boutons radio</h3>

<p>Pour définir un groupe de boutons radio, on leur donne le même nom via l'attribut {{htmlattrxref("name", "input")}}. Une fois qu'on a formé un groupe de boutons radio, on ne pourra sélectionner qu'une seule des options de ce groupes (cliquer sur une option désélectionnera automatiquement l'option précédemment choisie dans ce groupe).</p>

<p>Il est possible d'avoir autant de groupes que nécessaire, il suffit que chaque groupe ait un nom (l'attribut <code>name</code>) unique.</p>

<p>Ainsi, si on souhaite utiliser un formulaire afin de demander à l'utilisateur sa méthode de contact préférée, on pourra créer trois boutons radio avec l'attribut <code>name</code> qui vaut <code>contact</code> et pour lesquels l'attribut {{htmlattrxref("value", "input")}} varie : <code>email</code> pour le premier, <code>telephone</code> pour le deuxième et <code>courrier</code> pour le dernier. Cette valeur et le nom du groupe ne sont pas affichés (ce sera le rôle de l'élément {{HTMLElement("label")}} de fournir un intitulé).</p>

<p>Voici le fragment de code HTML correspondant à cet exemple :</p>

<pre class="brush: html">&lt;form&gt;
  &lt;p&gt;Veuillez choisir la meilleure méthode pour vous contacter :&lt;/p&gt;
  &lt;div&gt;
    &lt;input type="radio" id="contactChoice1"
     name="contact" value="email"&gt;
    &lt;label for="contactChoice1"&gt;Email&lt;/label&gt;

    &lt;input type="radio" id="contactChoice2"
     name="contact" value="telephone"&gt;
    &lt;label for="contactChoice2"&gt;Téléphone&lt;/label&gt;

    &lt;input type="radio" id="contactChoice3"
     name="contact" value="courrier"&gt;
    &lt;label for="contactChoice3"&gt;Courrier&lt;/label&gt;
  &lt;/div&gt;
  &lt;div&gt;
    &lt;button type="submit"&gt;Envoyer&lt;/button&gt;
  &lt;/div&gt;
&lt;/form&gt;</pre>

<p>On voit ici trois boutons radio dont l'attribut <code>name</code> vaut <code>contact</code> et dont chacun possède une valeur unique pour l'attribut <code>value</code>. Ils possèdent également un identifiant unique ({{domxref("Element.id", "id")}}) qui est utilisé pour rattacher le libellé fourni par l'élément {{HTMLElement("label")}} via l'attribut {{htmlattrxref("for", "label")}}.</p>

<p>Voici le résultat obtenu :</p>

<p>{{EmbedLiveSample('Définir_un_groupe_de_boutons_radio', 600, 130)}}</p>

<h3 id="La_représentation_des_données_d’un_groupe_de_boutons_radio">La représentation des données d’un groupe de boutons radio</h3>

<p>Lorsqu'on envoie le formulaire précédent avec une option sélectionnée, les données du formulaire contiendront une valeur sous la forme <code>"contact=<em>valeur</em>"</code>. Ainsi, si l'utilisateur clique sur le bouton radio « Téléphone » et envoie le formulaire, les données du formulaire contiendront <code>"contact=telephone"</code>.</p>

<p>Si l'attribut <code>value</code> n'est pas fourni dans le document HTML, la valeur par défaut utilisée sera <code>on</code> pour l'ensemble du groupe. Si c'était le cas avec notre exemple précédent et que l'utilisateur avait cliqué sur l'option « Téléphone » et envoyé le formulaire, les données envoyées auraient contenu <code>"contact=on"</code> ce qui ne s'avère pas très utile. Aussi, mieux vaut ne pas oublier les attributs <code>value</code> !</p>

<div class="note">
<p><strong>Note :</strong> Si aucun bouton radio n'est sélectionné au moment de l'envoi du formulaire, le groupe radio n'est pas inclus dans les données envoyées par le formulaire car il n'y a aucune valeur à fournir.</p>
</div>

<p>Généralement, on souhaite qu'au moins une option soit sélectionné parmi les boutons d'un groupe et on inclue donc souvent un attribut <code>checked</code> sur l'un des boutons afin d'avoir une option sélectionnée par défaut.</p>

<p>Ajoutant un peu de code à notre exemple pour étudier les données générées par ce formulaire. On modifie le code HTML afin d'ajouter un bloc {{HTMLElement("pre")}} qui contiendra les données produites par le formulaire :</p>

<pre class="brush: html">&lt;form&gt;
  &lt;p&gt;Veuillez choisir la meilleure méthode pour vous contacter :&lt;/p&gt;
  &lt;div&gt;
    &lt;input type="radio" id="contactChoice1"
     name="contact" value="email"&gt;
    &lt;label for="contactChoice1"&gt;Email&lt;/label&gt;

    &lt;input type="radio" id="contactChoice2"
     name="contact" value="telephone"&gt;
    &lt;label for="contactChoice2"&gt;Téléphone&lt;/label&gt;

    &lt;input type="radio" id="contactChoice3"
     name="contact" value="courrier"&gt;
    &lt;label for="contactChoice3"&gt;Courrier&lt;/label&gt;
  &lt;/div&gt;
  &lt;div&gt;
    &lt;button type="submit"&gt;Envoyer&lt;/button&gt;
  &lt;/div&gt;
&lt;/form&gt;
&lt;pre id="log"&gt;
&lt;/pre&gt;
</pre>

<p>Ensuite, on ajoute du code <a href="/fr/docs/Web/JavaScript">JavaScript</a> pour rattacher un gestionnaire d'évènement sur l'évènement {{event("submit")}} qui est déclenché lorsque l'utilisateur clique sur le bouton « Envoyer » :</p>

<pre class="brush: js">var form = document.querySelector("form");
var log = document.querySelector("#log");

form.addEventListener("submit", function(event) {
  var data = new FormData(form);
  var output = "";
  for (const entry of data) {
    output = entry[0] + "=" + entry[1] + "\r";
  };
  log.innerText = output;
  event.preventDefault();
}, false);</pre>

<p>Vous pouvez manipuler cet exemple et voir qu'il n'y a jamais plus 'un résultat pour le groupe <code>"contact"</code>.</p>

<p>{{EmbedLiveSample("La_représentation_des_données_d’un_groupe_de_boutons_radio", 600, 130)}}</p>

<h2 id="Attributs_supplémentaires">Attributs supplémentaires</h2>

<p>En complément des attributs partagés par l'ensemble des éléments {{HTMLElement("input")}}, les boutons radio peuvent utiliser les attributs suivants :</p>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Attribut</th>
   <th scope="col">Definition</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td><code>{{anch("checked")}}</code></td>
   <td>Un attribut booléen qui indique si le bouton radio est l'élément sélectionné du groupe.</td>
  </tr>
  <tr>
   <td><code>{{anch("value")}}</code></td>
   <td>Une chaîne à utiliser comme valeur pour le bouton radio lors de l'envoi du formulaire si ce bouton est choisi.</td>
  </tr>
 </tbody>
</table>

<h3 id="htmlattrdef(checked)">{{htmlattrdef("checked")}}</h3>

<p>Un attribut booléen qui indique si c'est ce champ radio qui est sélectionné parmi le groupe.</p>

<p>À la différence des autres navigateurs, Firefox conservera <a href="https://stackoverflow.com/questions/5985839/bug-with-firefox-disabled-attribute-of-input-not-resetting-when-refreshing">l'état coché dynamique</a> d'un bouton radio au fur et à mesure des chargements de la page. On pourra utiliser l'attribut {{htmlattrxref("autocomplete","input")}} afin de contrôler cette fonctionnalité.</p>

<h3 id="htmlattrdef(value)">{{htmlattrdef("value")}}</h3>

<p>L'attribut <code>value</code> est partagé par l'ensemble des types d'élément {{HTMLElement("input")}}. Dans le cas d'un bouton radio, il a un rôle spécifique et permet d'associer un texte qui sera envoyé avec le formulaire pour représenter la valeur sélectionnée. Si la valeur de <code>value</code> n'est pas définie, ce sera la chaîne de caractères <code>"on"</code> qui sera envoyée.</p>

<h2 id="Utiliser_les_boutons_radio">Utiliser les boutons radio</h2>

<p>Nous avons déjà vu certaines techniques ci-avant. Voyons désormais d'autres fonctionnalités fréquemment utilisées avec ces boutons.</p>

<h3 id="Sélectionner_un_bouton_radio_par_défaut">Sélectionner un bouton radio par défaut</h3>

<p>Pour qu'un bouton radio soit sélectionné par défaut, on ajoutera l'attribut booléen <code>checked</code>. Voici ce que ça donne pour l'exemple précédent, légèrement modifié :</p>

<pre class="brush: html">&lt;form&gt;
  &lt;p&gt;Veuillez choisir la meilleure méthode pour vous contacter :&lt;/p&gt;
  &lt;div&gt;
    &lt;input type="radio" id="contactChoice1"
     name="contact" value="email" checked&gt;
    &lt;label for="contactChoice1"&gt;Email&lt;/label&gt;

    &lt;input type="radio" id="contactChoice2"
     name="contact" value="telephone"&gt;
    &lt;label for="contactChoice2"&gt;Téléphone&lt;/label&gt;

    &lt;input type="radio" id="contactChoice3"
     name="contact" value="courrier"&gt;
    &lt;label for="contactChoice3"&gt;Courrier&lt;/label&gt;
  &lt;/div&gt;
  &lt;div&gt;
    &lt;button type="submit"&gt;Envoyer&lt;/button&gt;
  &lt;/div&gt;
&lt;/form&gt;</pre>

<p>{{EmbedLiveSample('Sélectionner_un_bouton_radio_par_défaut', 600, 130)}}</p>

<p>Ici, c'est le premier bouton radio qui sera sélectionné par défaut.</p>

<div class="note">
<p><strong>Note :</strong> Si l'attribut <code>checked</code> est placé sur plus d'un bouton, c'est le dernier bouton contenant l'attribut qui sera sélectionné. C'est donc l'ordre des valeurs qui déterminera la valeur par défaut. Pour rappel, il ne peut y avoir qu'un seul bouton radio du groupe qui soit sélectionné à un instant donné.</p>
</div>

<h3 id="Fournir_une_plus_grande_zone_de_sélection">Fournir une plus grande zone de sélection</h3>

<p>Dans les exemples précédents, vous avez peut-être constaté qu'en cliquant sur l'élément {{htmlelement("label")}} associé au bouton radio, cela sélectionnait la valeur de ce bouton. C'est une fonctionnalité HTML très pratique qui facilite la sélection des options, notamment sur les écrans de petites tailles comme ceux des smartphones.</p>

<p>Au-delà des raisons relatives à l'accessibilité, il s'agit d'un autre argument en faveur de la bonne utilisation des éléments <code>&lt;label&gt;</code> dans les formulaires.</p>

<h2 id="Validation">Validation</h2>

<p>Il n'existe pas de contrainte de validation particulière pour les boutons radio.</p>

<h2 id="Mettre_en_forme_les_boutons_radio">Mettre en forme les boutons radio</h2>

<p>L'exemple qui suit est une version légèrement plus détaillée de l'exemple précédent qui contient une mise en forme et une meilleure sémantique grâce aux éléments HTML utilisés :</p>

<pre class="brush: html">&lt;form&gt;
  &lt;fieldset&gt;
    &lt;legend&gt;Veuillez choisir la meilleure méthode pour vous contacter :&lt;/legend&gt;
    &lt;div&gt;
      &lt;input type="radio" id="contactChoice1"
       name="contact" value="email" checked&gt;
      &lt;label for="contactChoice1"&gt;Email&lt;/label&gt;

      &lt;input type="radio" id="contactChoice2"
       name="contact" value="telephone"&gt;
      &lt;label for="contactChoice2"&gt;Téléphone&lt;/label&gt;

      &lt;input type="radio" id="contactChoice3"
       name="contact" value="courrier"&gt;
      &lt;label for="contactChoice3"&gt;Courrier&lt;/label&gt;
    &lt;/div&gt;
    &lt;div&gt;
      &lt;button type="submit"&gt;Envoyer&lt;/button&gt;
    &lt;/div&gt;
  &lt;/fieldset&gt;
&lt;/form&gt;</pre>

<p>On voit ici peu de modifications mais notamment l'ajout d'éléments {{htmlelement("fieldset")}} et {{htmlelement("legend")}} qui permettent de grouper les options (à la fois pour la mise en forme et pour la sémantique du document).</p>

<p>La feuille de style CSS utilisée est la suivante :</p>

<pre class="brush: css">html {
  font-family: sans-serif;
}

div:first-of-type {
  display: flex;
  align-items: flex-start;
  margin-bottom: 5px;
}

label {
  margin-right: 15px;
  line-height: 32px;
}

input {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  border-radius: 50%;
  width: 16px;
  height: 16px;

  border: 2px solid #999;
  transition: 0.2s all linear;
  margin-right: 5px;

  position: relative;
  top: 4px;
}

input:checked {
  border: 6px solid black;
}

button,
legend {
  color: white;
  background-color: black;
  padding: 5px 10px;
  border-radius: 0;
  border: 0;
  font-size: 14px;
}

button:hover,
button:focus {
  color: #999;
}

button:active {
  background-color: white;
  color: black;
  outline: 1px solid black;
}</pre>

<p>La propriété utilisée la plus notable est {{cssxref("-moz-appearance")}} (utilisée avec certains préfixes navigateur). Par défaut, les boutons radios (ainsi que les cases à cocher) sont mis en forme avec l'apparence native liée au système d'exploitation sous-jacente. Avec <code>appearance: none</code>, on peut passer outre cette mise en forme native et créer ses propres styles pour ces boutons. Ici, nous avons utilisé {{cssxref("border")}} et {{cssxref("border-radius")}} avec {{cssxref("transition")}} afin de créer une animation lors de la sélection. On utilise également la pseudo-classe {{cssxref(":checked")}} pour définir l'apparence du bouton radio lorsqu'il est sélectionné.</p>

<p>Cette méthode n'est pas exempte d'inconvénient : <code>appearance</code> fonctionne correctement pour une mise en forme simple mais peut se comporter de façons différentes selon les navigateurs et elle ne fonctionne pas du tout avec Internet Explorer. Attention donc à tester votre site dans les différents navigateurs.</p>

<p>{{EmbedLiveSample('Mettre_en_forme_les_boutons_radio', 600, 120)}}</p>

<p>De plus, la légende et le bouton d'envoi ont été mis en forme pour avoir un contraste marqué. Ce n'est pas peut-être pas la mise en forme idéale pour toutes les applications web mais cela illustre certaines des possibilités.</p>

<h2 id="Résumé_technique">Résumé technique</h2>

<table class="properties">
 <tbody>
  <tr>
   <td><strong>{{anch("Valeur")}}</strong></td>
   <td>Une chaîne de caractères {{domxref("DOMString")}} qui représente la valeur du bouton radio.</td>
  </tr>
  <tr>
   <td><strong>Évènements</strong></td>
   <td>{{event("change")}} et {{event("input")}}</td>
  </tr>
  <tr>
   <td><strong>Attributs pris en charge</strong></td>
   <td>{{htmlattrxref("checked", "input")}}</td>
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
 <tbody>
  <tr>
   <th>Spécification</th>
   <th>État</th>
   <th>Commentaires</th>
  </tr>
  <tr>
  </tr>
  <tr>
   <td>{{SpecName('HTML WHATWG', 'forms.html#radio-button-state-(type=radio)', '&lt;input type="radio"&gt;')}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName('HTML5 W3C', 'forms.html#radio-button-state-(type=radio)', '&lt;input type="radio"&gt;')}}</td>
   <td>{{Spec2('HTML5 W3C')}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("html.elements.input.input-radio")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>L'élément {{HTMLElement("input")}} et l'interface {{domxref("HTMLInputElement")}} du DOM qui est implémentée par cet élément</li>
 <li>L'interface {{domxref("RadioNodeList")}} qui décrit une liste de boutons radio</li>
</ul>
