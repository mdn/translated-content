---
title: JSON
slug: Web/JavaScript/Reference/Global_Objects/JSON
tags:
  - JSON
  - JavaScript
  - Object
  - Reference
  - polyfill
translation_of: Web/JavaScript/Reference/Global_Objects/JSON
original_slug: Web/JavaScript/Reference/Objets_globaux/JSON
---
<div>{{JSRef}}</div>

<p>L’objet <strong><code>JSON</code></strong> contient des méthodes pour interpréter du <a class="external" href="https://json.org/">JSON</a> (JavaScript Object Notation) (voir également la page du glossaire {{glossary("JSON")}}) et convertir des valeurs en JSON. Il ne peut être appelé ou construit, et, en dehors de ses deux méthodes, n’a pas de fonctionnalité propre.</p>

<h2 id="Différences_entres_JavaScript_et_JSON">Différences entres JavaScript et JSON</h2>

<p>JSON est une syntaxe pour sérialiser des objets, tableaux, nombres, chaînes de caractères, booléens et valeurs <em>null</em>. Elle est basée sur la syntaxe de JavaScript mais en est distincte : du code JavaScript n’est pas nécessairement du JSON, et du JSON n’est pas nécessairement du JavaScript.</p>

<ul>
 <li>Pour les objets et les tableaux
  <ul>
   <li>Les noms de propriété doivent être des chaînes de caractères délimitées par des guillements doubles ; les <em>trailing commas</em> sont interdits</li>
  </ul>
 </li>
 <li>Pour les nombres
  <ul>
   <li>Les zéros non significatifs sont interdits ; un point décimal doit être suivi d’au moins un chiffre (plus exactement : <code>JSON.stringify()</code> ignorera les zéros mais <code>JSON.parse()</code> déclenchera une exception <code>SyntaxError</code>).</li>
  </ul>
 </li>
 <li>Pour le texte : <strong>tout texte JSON est une expression JavaScript</strong> (pour les moteurs qui implémentent <a href="https://github.com/tc39/proposal-json-superset">cette proposition</a>).
  <ul>
   <li>Pour les autres moteurs, seul un jeu limité de caractères peut être échappé ; certains caractères de contrôle sont interdits ; le séparateur de ligne Unicode (<a href="https://unicode-table.com/en/2028/">U+2028</a>) et le séparateur de paragraphe (<a href="https://unicode-table.com/en/2029/">U+2029</a>) sont autorisés en JSON mais pas en JavaScript dans les littéraux de chaînes de caractères.</li>
  </ul>
 </li>
</ul>

<p>Dans l'exemple suivant, on utilise {{jsxref("JSON.parse()")}} afin d'analyser la chaîne JSON et <code>eval</code> afin d'exécuter le code correspondant :</p>

<pre class="brush: js">var code = '"\u2028\u2029"';
JSON.parse(code); // vaut "\u2028\u2029" pour tous les moteurs
eval(code); // provoque une SyntaxError pour les anciens moteurs</pre>

<h2 id="Syntaxe_complète">Syntaxe complète</h2>

<pre class="syntaxbox"><var>JSON</var> = <strong>null</strong>
    <em>ou</em> <strong>true</strong> <em>ou</em> <strong>false</strong>
    <em>ou</em> <var>NombreJSON</var>
    <em>ou</em> <var>ChaîneJSON</var>
    <em>ou</em> <var>ObjetJSON</var>
    <em>ou</em> <var>TableauJSON</var>

<var>NombreJSON</var> = <strong>-</strong> <var>NombrePositif</var>
          <em>ou</em> <var>NombrePositif</var>
<var>NombrePositif</var> = NombreDécimal
              <em>ou</em> <var>NombreDécimal</var> <strong>.</strong> <var>Chiffres</var>
              <em>ou</em> <var>NombreDécimal</var> <strong>.</strong> <var>Chiffres</var> <var>PartiExposant</var>
              <em>ou</em> <var>NombreDécimal</var> <var>PartiExposant</var>
<var>NombreDécimal</var> = <strong>0</strong>
             <em>ou</em> <var>UnÀNeuf</var> <var>Chiffres</var>
<var>PartiExposant</var> = <strong>e</strong> <var>Exposant</var>
            <em>ou</em> <strong>E</strong> <var>Exposant</var>
<var>Exposant</var> = <var>Chiffres</var>
        <em>ou</em> <strong>+</strong> <var>Chiffres</var>
        <em>ou</em> <strong>-</strong> <var>Chiffres</var>
<var>Chiffres</var> = <var>Chiffre</var>
      <em>ou</em> <var>Chiffres</var> <var>Chiffre</var>
<var>Chiffre</var> = <strong>0</strong> à <strong>9</strong>
<var>UnÀNeuf</var> = <strong>1</strong> à <strong>9</strong>

<var>ChaîneJSON</var> = <strong>""</strong>
          <em>ou</em> <strong>"</strong> <var>ChaîneCaractères</var> <strong>"</strong>
<var>ChaîneCaractères</var> = <var>ChaîneCaractère</var>
                <em>ou</em> <var>ChaîneCaractères</var> <var>ChaîneCaractère</var>
<var>ChaîneCaractère</var> = un caractère
                  <em>sauf</em> <strong>"</strong> <em>ou</em> <strong>\</strong> <em>ou</em> U+0000 à U+001F
               <em>ou</em> <var>SéquenceÉchappement</var>
<var>SéquenceÉchappement</var> = <strong>\" </strong><em>ou</em> <strong>\/ </strong><em>ou</em> <strong>\\ </strong><em>ou</em> <strong>\b </strong><em>ou</em> <strong>\f </strong><em>ou</em> <strong>\n </strong><em>ou</em> <strong>\r </strong><em>ou</em> <strong>\t</strong>
              <em>ou</em> <strong>\u</strong> <var>ChifreHexadécimal</var> <var>ChifreHexadécimal</var> <var>ChifreHexadécimal</var> <var>ChifreHexadécimal</var>
<var>ChifreHexadécimal</var> = <strong>0</strong> à <strong>9</strong>
        <em>ou</em> <strong>A</strong> à <strong>F</strong>
        <em>ou</em> <strong>a</strong> à <strong>f</strong>

<var>ObjetJSON</var> = <strong>{</strong> <strong>}</strong>
          <em>ou</em> <strong>{</strong> <var>Membres</var> <strong>}</strong>
<var>Membres</var> = <var>ChaîneJSON</var> <strong>:</strong> <var>JSON</var>
       <em>ou</em> <var>Membres</var> <strong>,</strong> <var>ChaîneJSON</var> <strong>:</strong> <var>JSON</var>

<var>TableauJSON</var> = <strong>[</strong> <strong>]</strong>
         <em>ou</em> <strong>[</strong> <var>ÉlémentsTableau</var> <strong>]</strong>
<var>ÉlémentsTableau</var> = <var>JSON</var>
             <em>ou</em> <var>ÉlémentsTableau</var> <strong>,</strong> <var>JSON</var></pre>

<p>Des espaces blancs insignifiants peuvent être présents n’importe où sauf dans un <code><var>JSONNumber</var></code> (les nombres ne doivent pas contenir d’espaces blancs) ou dans un <code><var>JSONString</var></code> (where it is interpreted as the corresponding character in the string, or would cause an error). Les caractères tabulation (<a href="https://unicode-table.com/en/0009/">U+0009</a>), retour chariot (<a href="https://unicode-table.com/en/000D/">U+000D</a>), saut de ligne (<a href="https://unicode-table.com/en/000A/">U+000A</a>), and espace (<a href="https://unicode-table.com/en/0020/">U+0020</a>) sont les seuls caractères blancs valides.</p>

<h2 id="Méthodes">Méthodes</h2>

<dl>
 <dt>{{jsxref("JSON.parse()", "JSON.parse(<var>texte</var>[, <var>revivificateur</var>])")}}</dt>
 <dd>Analysez le <code>texte</code> de la chaîne comme JSON, transformez éventuellement la valeur produite et ses propriétés, et renvoyez la valeur. Toute violation de la syntaxe JSON, y compris celles concernant les différences entre JavaScript et JSON, entraîne l'envoi d'un {{jsxref("SyntaxError")}}. L'option "<code>revivificateur</code>" permet d'interpréter ce que le <code>remplacement</code> a utilisé pour remplacer d'autres types de données.</dd>
 <dt>{{jsxref("JSON.stringify()", "JSON.stringify(<var>valeur</var>[, remplacement[, expace]])")}}</dt>
 <dd>Retourne une chaîne JSON correspondant à la valeur spécifiée, en incluant éventuellement seulement certaines propriétés ou en remplaçant les valeurs des propriétés d'une manière définie par l'utilisateur. Par défaut, toutes les instances de {{jsxref("undefined")}} sont remplacées par {{jsxref("null")}}, et les autres types de données natives non prises en charge sont censurés. L'option de <code>remplacement</code> permet de spécifier un autre comportement.</dd>
</dl>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">État</th>
   <th scope="col">Commentaires</th>
  </tr>
  <tr>
   <td>{{SpecName('ES5.1', '#sec-15.12', 'JSON')}}</td>
   <td>{{Spec2('ES5.1')}}</td>
   <td>Définition initiale.</td>
  </tr>
  <tr>
   <td>{{SpecName('ES6', '#sec-json-object', 'JSON')}}</td>
   <td>{{Spec2('ES6')}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-json-object', 'JSON')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.JSON")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{jsxref("Date.prototype.toJSON()")}}</li>
 <li>Quelques outils permettant de manipuler des données en JSON
  <ul>
   <li><a href="http://jsoncompare.org/">JSON Compare</a> qui permet de comparer deux JSON</li>
   <li><a href="http://jsonbeautifier.org/">JSON Beautifier</a> qui permet de visualiser et d'éditer un fichier JSON</li>
   <li><a href="https://jsonparser.org/">JSON Parser</a> qui permet de formatter une chaîne JSON</li>
   <li><a href="https://extendsclass.com/json-validator.html">JSON Formatter</a> qui permet de formatter et échapper une chaîne JSON </li>
   <li><a href="https://tools.learningcontainer.com/json-validator/">JSON Validator</a> qui permet de valider une chaîne JSON</li>
  </ul>
 </li>
</ul>
