---
title: throw
slug: Web/JavaScript/Reference/Statements/throw
tags:
  - Exception
  - JavaScript
  - Reference
  - Statement
translation_of: Web/JavaScript/Reference/Statements/throw
original_slug: Web/JavaScript/Reference/Instructions/throw
---
<div>{{jsSidebar("Statements")}}</div>

<p>L'instruction <strong><code>throw</code></strong> permet de lever une exception définie par l'utilisateur. L'exécution de la fonction courante sera stoppée (les instructions situées après l'instruction <code>throw</code> ne seront pas exécutées) et le contrôle sera passé au premier bloc {{jsxref("Instructions/try...catch","catch")}} de la pile d'appels. Si aucun bloc <code>catch</code> ne se trouve dans les fonctions de la pile d'appels, le programme sera terminé.</p>

<div>{{EmbedInteractiveExample("pages/js/statement-throw.html")}}</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox">throw <em>expression</em>; </pre>

<dl>
 <dt><code>expression</code></dt>
 <dd>L'expression qui fournit l'exception à lever.</dd>
</dl>

<h2 id="Description">Description</h2>

<p>L'instruction <code>throw</code> permet de lever (<em>throw</em> en anglais) une exception. Lorsqu'on lève une exception, <code>expression</code> fournit la valeur de l'exception. Chacune des instructions ci-après permet de lever une exception :</p>

<pre class="brush: js">throw "monErreur"; // génère une exception étant une chaîne de caractères
throw 42;          // génère une exception ayant la valeur 42
throw true;        // génère une exception ayant la valeur true
throw new Error("Obligatoire");  // génère un objet Error avec le message "Obligatoire"</pre>

<p>On notera également que l'instruction <code>throw</code> est affectée par {{jsxref("Grammaire_lexicale","l'insertion automatique de point-virgule","#Insertion_automatique_de_points-virgules",1)}} car il n'est pas permis d'avoir un caractère de fin de ligne entre le mot-clé <code>throw</code> et l'expression.</p>

<h2 id="Exemples">Exemples</h2>

<h3 id="Lever_une_exception_qui_est_un_objet">Lever une exception qui est un objet</h3>

<p>Il est possible de lever une exception qui est un objet et de faire référence aux propriétés de cet objet au sein du bloc <code>catch</code>. Dans l'exemple suivant, on crée un objet <code>monException</code> du type <code>ExceptionUtilisateur</code> puis on utilise cet objet avec une instruction <code>throw</code>.</p>

<pre class="brush: js">function ExceptionUtilisateur(message) {
   this.message = message;
   this.name = "ExceptionUtilisateur";
}
function getNomMois(mo) {
   mo = mo-1; // Adjust month number for array index (1=Jan, 12=Dec)
   var mois = ["Jan", "Fév", "Mar", "Avr", "Mai", "Juin", "Juil",
      "Août", "Sept", "Oct", "Nov", "Déc"];
   if (mois[mo] !== undefined) {
      return mois[mo];
   } else {
      throw new ExceptionUtilisateur("Numéro de mois invalide");
   }
}

try {
   // les instructions à tenter
   var monMois = 15; // 15 est en dehors des limites prévues
   var nomMois = getNomMois(monMois);
} catch (e) {
   nomMois = "unknown";
   console.error(e.message, e.name); // on passe les caractéristiques de l'exception
                                     // à un gestionnaire d'erreur
}
</pre>

<h3 id="Deuxième_exemple_avec_un_objet">Deuxième exemple avec un objet</h3>

<p>Ici, on cherche à valider une chaîne de caractères représentant un code postal américain. Si le format utilisé est invalide, cela provoquera une exception avec un objet du type <code>ZipFormatIncorrectException</code>. (Le mot-clé {{jsxref("Instructions/const","const")}} introduit avec ECMAScript 6 est utilisé dans cet exemple).</p>

<pre class="brush: js">/*
 * Crée un objet ZipCode.
 *
 * Les formats acceptés sont :
 *    12345
 *    12345-6789
 *    123456789
 *    12345 6789
 *
 * Si l'argument passé au constructeur ZipCode n'est pas conforme
 * à un de ces formats, une exception sera levée.
 */

function ZipCode(zip) {
   zip = new String(zip);
   pattern = /[0-9]{5}([- ]?[0-9]{4})?/;
   if (pattern.test(zip)) {
      // la valeur du code sera la première correspondance
      // dans la chaîne
      this.value = zip.match(pattern)[0];
      this.valueOf = function() {
         return this.value
      };
      this.toString = function() {
         return String(this.value)
      };
   } else {
      throw new ZipFormatIncorrectException(zip);
   }
}

function ZipFormatIncorrectException(value) {
   this.value = value;
   this.message = "le format n'est pas conforme";
   this.toString = function() {
      return this.value + this.message;
   };
}

/*
 * Cette fonction pourrait être utilisée dans un script
 * pour valider des adresses
 */

const ZIPCODE_INVALID = -1;
const ZIPCODE_UNKNOWN_ERROR = -2;

function vérifierZipCode(z) {
   try {
      z = new ZipCode(z);
   } catch (e) {
      if (e instanceof ZipFormatIncorrectException) {
         return ZIPCODE_INVALID;
      } else {
         return ZIPCODE_UNKNOWN_ERROR;
      }
   }
   return z;
}

a = vérifierZipCode(95060);         // renvoie 95060
b = vérifierZipCode(9560);          // renvoie -1
c = vérifierZipCode("a");           // renvoie -1
d = vérifierZipCode("95060");       // renvoie 95060
e = vérifierZipCode("95060 1234");  // renvoie 95060 1234
</pre>

<h3 id="Propager_une_exception">Propager une exception</h3>

<p>L'instruction <code>throw</code> peut être utilisée pour transmettre une exception qui aurait été interceptée avec {{jsxref("Instructions/try...catch","catch")}}. Dans l'exemple suivant, on intercepte une exception avec une valeur numérique et on propage l'exception si la valeur est supérieure à 50. L'exception qui est levée se propage dans la fonction appelante ou au niveau le plus haut, visible par l'utilisateur.</p>

<pre class="brush: js">try {
   throw n; // lève une exception avec une valeur numérique
} catch (e) {
   if (e &lt;= 50) {
      // des instructions pour gérer les cas entre 1 et 50
   } else {
      // ce cas ne peut pas être géré maintenant, on transmet l'exception
      throw e;
   }
}
</pre>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">État</th>
   <th scope="col">Commentaires</th>
  </tr>
  <tr>
   <td>{{SpecName('ES3')}}</td>
   <td>{{Spec2('ES3')}}</td>
   <td>Définition initiale. Implémentée avec JavaScript 1.4</td>
  </tr>
  <tr>
   <td>{{SpecName('ES5.1', '#sec-12.13', 'throw statement')}}</td>
   <td>{{Spec2('ES5.1')}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName('ES6', '#sec-throw-statement', 'throw statement')}}</td>
   <td>{{Spec2('ES6')}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-throw-statement', 'throw statement')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.statements.throw")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{jsxref("Instructions/try...catch","try...catch")}}</li>
 <li>{{jsxref("Error")}}</li>
</ul>
