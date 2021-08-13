---
title: Intl.DateTimeFormat.prototype.formatToParts()
slug: Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/formatToParts
tags:
  - DateTimeFormat
  - Internationalisation
  - Intl
  - JavaScript
  - Méthode
  - Prototype
  - Reference
  - i18n
translation_of: Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/formatToParts
original_slug: Web/JavaScript/Reference/Objets_globaux/Intl/DateTimeFormat/formatToParts
---
<div>{{JSRef}}</div>

<p>La méthode <strong><code>Intl.DateTimeFormat.prototype.formatToParts()</code></strong> permet de mettre en forme des chaînes de caractères avec des informations temporelles selon la locale utilisée.</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox">Intl.DateTimeFormat.prototype.formatToParts(date)</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><code>date</code> {{optional_inline}}</dt>
 <dd>La date qu'on souhaite mettre en forme.</dd>
</dl>

<h3 id="Valeur_de_retour">Valeur de retour</h3>

<p>Un tableau ({{jsxref("Array")}}) d'objets qui contiennent les composants de la date mis en forme.</p>

<h2 id="Description">Description</h2>

<p>La méthode <code>formatToParts()</code> est utile lorsqu'on souhaite mettre en forme des dates de façon personnalisée. Elle renvoie un tableau d'objets qui contiennent les fragments spécifiques à la locale, à partir desquels on peut construire des chaînes tout en conservant les parties spécifique à la locale. La structure de l'objet renvoyé par la méthode est semblable à celle-ci :</p>

<pre class="brush: js">[
  { type: "day", value: "17" },
  { type: "weekday", value "Monday" }
]</pre>

<p>Les types possibles sont :</p>

<dl>
 <dt><code>day</code></dt>
 <dd>La chaîne utilisée pour désigner le jour, par exemple <code>"17"</code>.</dd>
 <dt><code>dayPeriod</code></dt>
 <dd>La chaîne utilisée pour désigner le moment de la journée, par exemple <code>"AM"</code> (qui désigne la matinée, avant midi) ou <code>"PM"</code> (qui désigne l'après-midi).</dd>
 <dt><code>era</code></dt>
 <dd>La chaîne utilisée pour l'ère (par exemple <code>"BC"</code> ou <code>"AD"</code>).</dd>
 <dt><code>hour</code></dt>
 <dd>La chaîne utilisée pour l'heure (par exemple <code>"3"</code> or <code>"03"</code>).</dd>
 <dt><code>literal</code></dt>
 <dd>La chaîne utilisée pour séparée le jour de l'heure (par exemple <code>"</code> <code>:</code> <code>,</code> <code>/</code> <code>"</code>).</dd>
 <dt><code>minute</code></dt>
 <dd>La chaîne utilisée pour les minutes (par exemple <code>"00"</code>).</dd>
 <dt><code>month</code></dt>
 <dd>La chaîne utilisée pour le mois (par exemple <code>"12"</code>).</dd>
 <dt><code>second</code></dt>
 <dd>La chaîne utilisée pour les secondes (par exemple <code>"02"</code>).</dd>
 <dt><code>timeZoneName</code></dt>
 <dd>La chaîne utilisée pour désigner le fuseau horaire (par exemple <code>"UTC"</code>).</dd>
 <dt><code>weekday</code></dt>
 <dd>La chaîne de caractères utilisée pour le jour de la semaine, par exemple <code>"M"</code>, <code>"Monday"</code> ou <code>"Montag"</code>.</dd>
 <dt><code>year</code></dt>
 <dd>La chaîne utilisée pour désigner l'année (par exemple <code>"2012"</code> ou <code>"96"</code>).</dd>
</dl>

<h2 id="Exemples">Exemples</h2>

<p><code>DateTimeFormat</code> produit des chaînes localisées opaques qui ne peuvent pas être manipulées directement :</p>

<pre class="brush: js">var date = Date.UTC(2012, 11, 17, 3, 0, 42);

var formatter = new Intl.DateTimeFormat("en-us", {
  weekday: 'long',
  year: 'numeric',
  month: 'numeric',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
  hour12: true,
  timeZone: "UTC"
});

formatter.format(date);
// "Monday, 12/17/2012, 3:00:42 AM"
</pre>

<p>Cependant, pour de nombreuses interfaces utilisateur, on peut vouloir personnaliser la mise en forme de cette chaîne de caractères. La méthode <code>formatToParts</code> permet une mise en forme dans le souci de la locale en manipulant les différentes composantes :</p>

<pre class="brush: js">formatter.formatToParts(date);

// return value:
[
  { type: 'weekday',   value: 'Monday' },
  { type: 'separator', value: ', '     },
  { type: 'month',     value: '12'     },
  { type: 'literal', value: '/'      },
  { type: 'day',       value: '17'     },
  { type: 'literal', value: '/'      },
  { type: 'year',      value: '2012'   },
  { type: 'literal', value: ', '     },
  { type: 'hour',      value: '3'      },
  { type: 'literal', value: ':'      },
  { type: 'minute',    value: '00'     },
  { type: 'literal', value: ':'      },
  { type: 'second',    value: '42'     },
  { type: 'literal', value: ' '      },
  { type: 'dayPeriod', value: 'AM'     }
]
</pre>

<p>L'information étant décomposée, on peut alors la mettre en forme et la recomposée de façon adaptée :</p>

<pre class="brush: js">var dateString = formatter.formatToParts(date).map(({type, value}) =&gt; {
  switch (type) {
    case 'dayPeriod': return `&lt;strong&gt;${value}&lt;/strong&gt;`;
    default : return value;
  }
}).reduce((string, part) =&gt; string + part);

console.log(formatter.format(date));
// "Monday, 12/17/2012, 3:00:42 AM"

console.log(dateString);
// "Monday, 12/17/2012, 3:00:42 &lt;strong&gt;AM&lt;/strong&gt;"</pre>

<h2 id="Prothèse_démulation_polyfill">Prothèse d'émulation (<em>polyfill</em>)</h2>

<p>Une prothèse de cette fonctionnalité est disponible sur le dépôt décrivant <a href="https://github.com/zbraniecki/proposal-intl-formatToParts">la proposition de fonctionnalité</a>.</p>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">État</th>
   <th scope="col">Commentaires</th>
  </tr>
  <tr>
   <td>{{SpecName('ES Int Draft', '#sec-Intl.DateTimeFormat.prototype.formatToParts', 'Intl.DateTimeFormat.prototype.formatToParts')}}</td>
   <td>{{Spec2('ES Int Draft')}}</td>
   <td>Définition initiale.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.Intl.DateTimeFormat.formatToParts")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{jsxref("DateTimeFormat", "Intl.DateTimeFormat")}}</li>
 <li>{{jsxref("DateTimeFormat.format", "Intl.DateTimeFormat.prototype.format")}}</li>
 <li>{{jsxref("Date.prototype.toLocaleString()")}}</li>
 <li>{{jsxref("Date.prototype.toLocaleDateString()")}}</li>
 <li>{{jsxref("Date.prototype.toLocaleTimeString()")}}</li>
</ul>
