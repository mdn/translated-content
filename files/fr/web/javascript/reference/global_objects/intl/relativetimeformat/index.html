---
title: Intl.RelativeTimeFormat
slug: Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat
tags:
  - Constructeur
  - Internationalisation
  - Intl
  - JavaScript
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat
original_slug: Web/JavaScript/Reference/Objets_globaux/Intl/RelativeTimeFormat
---
<div>{{JSRef}}</div>

<p>L'objet <strong><code>Intl.RelativeTimeFormat</code></strong> est un constructeur fournissant des objets pour mettre en forme des données temporelles relatives en respectant le format des locales.</p>

<div>{{EmbedInteractiveExample("pages/js/intl-relativetimeformat.html")}}</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre>new Intl.RelativeTimeFormat([<var>locales</var>[, <var>options</var>]])</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><code>locales</code></dt>
 <dd>
 <p>Une chaine de caractères avec un identifiant de langue BCP 47, ou un tableau de ce type de chaine de caractères. Pour le format général et l'interprétation de l'argument <code>locales</code>, voir la page {{jsxref("Objets_globaux/Intl","Intl","#L'identification_et_le_choix_de_la_locale")}}.</p>
 </dd>
 <dt><code>options</code> {{optional_inline}}</dt>
 <dd>
 <p>Optionnel, un objet possédant tout ou partie des propriétés suivantes :</p>
 <dl>
  <dt><code>localeMatcher</code></dt>
  <dd>L'algorithme de correspondance à utiliser pour la locale. Les valeurs possibles sont <code>"lookup"</code> et <code>"best fit"</code> ; le défaut est <code>"best fit"</code>. Pour des informations sur cette option, voir la page {{jsxref("Objets_globaux/Intl","Intl","##Choix_de_la_locale")}}.</dd>
  <dt><code>numeric</code></dt>
  <dd>Le format du message de sortie. Les valeurs possibles sont <code>"always"</code> (par exemple <code>1 day ago</code>) ou  <code>"auto"</code> (par exemple <code>yesterday</code>). <code>"auto"</code> permet de ne pas toujours avoir de valeurs numériques dans le message produit.</dd>
  <dt><code>style</code></dt>
  <dd>La longueur du message internationalisé. Les valeurs possibles sont : <code>"long"</code> (la valeur par défaut) (par exemple : <code>in 1 month</code>), <code>"short"</code> (par exemple : <code>in 1 mo.</code>) ou  <code>"narrow"</code> (par exemple : <code>in 1 mo.</code>). Le style <code>narrow</code> peut être semblable au style <code>short</code> pour certaines locales.</dd>
 </dl>
 </dd>
</dl>

<h2 id="Description">Description</h2>

<h3 id="Propriétés">Propriétés</h3>

<dl>
 <dt>{{jsxref("RelativeTimeFormat.prototype", "Intl.RelativeTimeFormat.prototype")}}</dt>
 <dd>Cette propriété permet d'ajouter des propriétés à l'ensemble des instances.</dd>
</dl>

<h3 id="Méthodes">Méthodes</h3>

<dl>
 <dt>{{jsxref("RelativeTimeFormat.supportedLocalesOf", "Intl.RelativeTimeFormat.supportedLocalesOf()")}}</dt>
 <dd>Cette méthode renvoie un tableau des locales, parmi celles passées en argument, qui sont pris en charge pour le formatage internationalisé des temps relatifs sans qu'il y ait besoin d'utiliser la locale par défaut de l'environnement d'exécution.</dd>
</dl>

<h2 id="Les_instances_de_RelativeTimeFormat">Les instances de <code>RelativeTimeFormat</code></h2>

<h3 id="Propriétés_2">Propriétés</h3>

<p>Les instances de RelativeTimeFormat héritent des propriétés suivantes grâce à leur prototype :</p>

<p>{{page('/fr/docs/Web/JavaScript/Reference/Objets_globaux/Intl.RelativeTimeFormat/prototype', 'Propriétés')}}</p>

<h3 id="Méthodes_2">Méthodes</h3>

<p>Les instances de <code>RelativeTimeFormat</code> héritent des méthodes suivantes grâce à leur prototype :</p>

<p>{{page('/fr/docs/Web/JavaScript/Reference/Objets_globaux/Intl.RelativeTimeFormat/prototype', 'Méthodes')}}</p>

<h2 id="Exemples">Exemples</h2>

<h3 id="Utiliser_format">Utiliser <code>format()</code></h3>

<p>L'exemple suivant illustre comment créer un formateur de temps relatif en anglais :</p>

<pre class="brush: js">// On crée un formateur en anglais en utilisant explicitement
// les valeurs par défaut.
const rtf = new Intl.RelativeTimeFormat("en", {
    localeMatcher: "best fit", // autre valeur possible : "lookup"
    numeric: "always", // autre valeur possible : "auto"
    style: "long", // autre valeur possible : "short" ou "narrow"
});

// On formate un temps relatif avec une valeur négative (-1).
rtf.format(-1, "day");
// &gt; "1 day ago"

// On formate un temps relatif avec une valeur positive (1).
rtf.format(1, "day");
// &gt; "in 1 day"</pre>

<h3 id="Utiliser_loption_auto">Utiliser l'option <code>auto</code></h3>

<p>Si l'option <code>numeric:auto</code> est passée, on aura la chaîne de caractères <code>yesterday</code> ou <code>tomorrow</code> plutôt que <code>1 day ago</code> ou <code>in 1 day</code>. De cette façon, on peut ne pas avoir de valeur numérique dans la valeur produite.</p>

<pre class="brush: js">// On crée un formateur en anglais avec l'option
// numeric: "auto".
const rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" });

// On formate un temps relatif avec une valeur négative (-1).
rtf.format(-1, "day");
// &gt; "yesterday"

// On formate un temps relatif avec une valeur positive (1).
rtf.format(1, "day");
// &gt; "tomorrow"
</pre>

<h3 id="Utiliser_formatToParts">Utiliser <code>formatToParts()</code></h3>

<p>L'exemple suivant illustre comment créer un formateur de temps relatif qui renvoie les différents fragments pour exprimer le temps relatif internationalisé.</p>

<pre class="brush: js">const rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" });

// On crée un temps relatif exprimé en jour.
rtf.formatToParts(-1, "day");
// &gt; [{ type: "literal", value: "yesterday"}]

rtf.formatToParts(100, "day");
// &gt; [{ type: "literal", value: "in " },
      { type: "integer", value: "100", unit: "day" },
      { type: "literal", value: " days" }]
</pre>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">Etat</th>
   <th scope="col">Commentaires</th>
  </tr>
  <tr>
   <td><a href="https://tc39.es/proposal-intl-relative-time/#sec-intl-relativetimeformat-constructor">Proposition pour le constructeur <code>Intl.RelativeTimeFormat</code></a></td>
   <td>Proposition de niveau 3</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.Intl.RelativeTimeFormat")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><a href="https://developers.google.com/web/updates/2018/10/intl-relativetimeformat">L'API <code>Intl.RelativeTimeFormat</code>, un billet de Mathias Bynens (en anglais)</a></li>
</ul>
