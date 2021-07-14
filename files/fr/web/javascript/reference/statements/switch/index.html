---
title: switch
slug: Web/JavaScript/Reference/Statements/switch
tags:
  - Instruction
  - JavaScript
  - Reference
translation_of: Web/JavaScript/Reference/Statements/switch
original_slug: Web/JavaScript/Reference/Instructions/switch
---
<div>{{jsSidebar("Statements")}}</div>

<p>L'instruction <strong><code>switch</code></strong> évalue une expression et, selon le résultat obtenu et le cas associé, exécute les instructions correspondantes.</p>

<div>{{EmbedInteractiveExample("pages/js/statement-switch.html")}}</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox">switch (expression) {
  case valeur1:
    // Instructions à exécuter lorsque le résultat
    // de l'expression correspond à valeur1
    instructions1;
    [break;]
  case valeur2:
    // Instructions à exécuter lorsque le résultat
    // de l'expression correspond à valeur2
    instructions 2;
    [break;]
  ...
  case valeurN:
    // Instructions à exécuter lorsque le résultat
    // de l'expression à valeurN
    instructionsN;
    [break;]
  [default:
    // Instructions à exécuter lorsqu'aucune des valeurs
    // ne correspond
    instructions_def;
    [break;]]
}</pre>

<dl>
 <dt><code>expression</code></dt>
 <dd>Une expression à comparer avec chacune des clause <code>case</code>.</dd>
 <dt><code>case expressionN </code> {{optional_inline}}</dt>
 <dd>Une clause qu'on compare avec <code>expression</code>.</dd>
 <dt><code>default </code>{{optional_inline}}</dt>
 <dd>Une clause exécutée si aucune correspondance n'est trouvée avec les clause <code>case</code> (et/ou s'il n'y a pas de <code>break</code> pour les clauses <code>case</code> précédentes).</dd>
 <dt><code>instructionsN</code></dt>
 <dd>Les instructions à exécuter lorsque l'<code>expression</code> correspond au cas présenté pour cette clause.</dd>
 <dt><code>instructions_def</code></dt>
 <dd>Les instructions à exécuter si l'<code>expression</code> ne correspond à aucun cas de figure précédemment décrit.</dd>
</dl>

<h2 id="Description">Description</h2>

<p>Une instruction <code>switch</code> commence par évaluer l'expression fournie (cette évaluation ne se produit qu'une fois). Si une correspondance est trouvée, le programme exécutera les instructions associées. Si plusieurs cas de figure correspondent, le premier sera sélectionné (même si les cas sont différents les uns des autres).</p>

<p>Le programme recherche tout d'abord une clause <code>case</code> dont l'expression est évaluée avec la même valeur que l'expression d'entrée (au sens de {{jsxref("Opérateurs/Opérateurs_de_comparaison","l'égalité stricte","#.C3.89galit.C3.A9_stricte_(.3D.3D.3D)",1)}}. Si une telle clause est trouvée, les instructions associées sont exécutées. Si aucune clause <code>case</code> n'est trouvée, le programme recherche la clause optionnelle <code>default</code> et si elle existe, les instructions correspondantes sont exécutées. Si cette clause optionnelle n'est pas utilisée, le programme continue son exécution après l'instruction <code>switch</code>. Par convention, la clause <code>default</code> est utilisée en dernière mais cela n'est pas nécessaire.</p>

<p>L'instruction {{jsxref("Instructions/break","break")}} peut optionnellement être utilisée pour chaque cas et permet de s'assurer que seules les instructions associées à ce cas seront exécutées. Si <code>break</code> n'est pas utilisé, le programme continuera son exécution avec les instructions suivantes (des autres cas de l'instruction <code>switch</code>).</p>

<h2 id="Exemples">Exemples</h2>

<h3 id="Utiliser_switch">Utiliser <code>switch</code></h3>

<p>Dans l'exemple suivant, si l'expression <code>expr</code> vaut "Bananes", le programme trouve la correspondance et exécute l'instruction associée. Lorsque l'instruction <code>break</code> est trouvée, le programme « sort » de l'instruction <code>switch</code> et continue l'exécution avec les instructions  suivantes. Si <code>break</code> n'avait pas été utilisé, l'instruction du cas "Cerises" aurait également été exécutée.</p>

<pre class="brush: js">switch (expr) {
  case "Oranges":
    console.log("Oranges : 0.59 € le kilo.");
    break;
  case "Pommes":
    console.log("Pommes : 0.32 € le kilo.");
    break;
  case "Bananes":
    console.log("Bananes : 0.48 € le kilo.");
    break;
  case "Cerises":
    console.log("Cerises : 3.00 € le kilo.");
    break;
  case "Mangues":
  case "Papayes":
    console.log("Mangues et papayes : 2.79 € le kilo.");
    break;
  default:
    console.log("Désolé, nous n'avons plus de " + expr + ".");
}

console.log("Autre chose ?");
</pre>

<h3 id="Que_se_passe-t-il_si_on_oublie_un_break">Que se passe-t-il si on oublie un <code>break</code> ?</h3>

<p>Si on omet une instruction <code>break</code>, le script exécutera les instructions pour le cas correspondant et aussi celles pour les cas suivants jusqu'à la fin de l'instruction <code>switch</code> ou jusqu'à une instruction <code>break</code>. Par exemple :</p>

<pre class="brush: js">var toto = 0;
switch (toto) {
    case -1:
        console.log('moins un');
        break;
    case 0: // toto vaut 0 donc ce cas correspond
        console.log(0);
        // NOTE : le break aurait du être placé ici
    case 1: // pas de break pour 'case 0:' les instructions de ce cas sont
            // exécutées aussi
        console.log(1);
        break; // on a un break a ce niveau donc les instructions
               // des cas suivants ne seront pas exécutées
    case 2:
        console.log(2);
        break;
    default:
        console.log('default');
}</pre>

<h3 id="Peut-on_intercaler_la_règle_par_défaut">Peut-on intercaler la règle par défaut ?</h3>

<p>Oui, il est possible de placer le cas <code>default</code> entre deux autres cas. Ainsi, si on a une valeur qui ne correspond pas aux différents cas, elle passera par le bloc <code>default</code> puis par les autres s'il n'y a pas de <code>break</code>. Par exemple :</p>

<pre class="brush: js">var toto = 5
switch (toto) {
  case 2:
    console.log(2); // ne sera pas exécuté
    break;
  default:
    console.log("default"); // sera exécuté
  case 1:
    console.log("1"); // sera exécuté car il n'y a
                      // pas de break avant
}
// La console affichera "default" puis "1"
</pre>

<h3 id="Méthodes_pour_regrouper_différents_cas">Méthodes pour regrouper différents cas</h3>

<p>Pour la source depuis laquelle les exemples suivants ont été adaptés, voir <a href="https://stackoverflow.com/questions/13207927/switch-statement-multiple-cases-in-javascript">cette question Stack Overflow</a>.</p>

<h4 id="Regrouper_différents_cas_pour_exécuter_une_unique_opération">Regrouper différents cas pour exécuter une unique opération</h4>

<p>Cette méthode utilise le fait que s'il n'y a pas d'instruction {{jsxref("Instructions/break","break")}}, l'exécution se poursuivra avec les instructions des cas suivants (même si les expressions de ces cas ne correspondent pas à la valeur de l'expression d'entrée).</p>

<p>On peut donc regrouper différentes valeurs les unes à la suite des autres pour exécuter des instructions pour ces valeurs :</p>

<pre class="brush: js">var animal = 'girafe';
switch (animal) {
    case 'vache':
    case 'girafe':
    case 'chien':
    case 'cochon':
        console.log('Cet animal est un mammifère');
        break;
    case 'oiseau':
    default:
        console.log('Cet animal n\'est pas un mammifère.');
}</pre>

<h4 id="Chaîner_des_opérations">Chaîner des opérations</h4>

<p>Dans l'exemple qui suit, on illustre comment exécuter une série d'instructions qui varie en fonction du paramètre (ici un entier) fourni. Cela montre que les différents cas sont testés dans l'ordre dans lequel ils sont mis au sein du <code>switch</code> :</p>

<pre class="brush: js">var toto = 1;
var output = 'Résultat : ';
switch (toto) {
    case 0:
        output += 'Donc ';
    case 1:
        output += 'quel ';
        output += 'est ';
    case 2:
        output += 'votre ';
    case 3:
        output += 'nom ';
    case 4:
        output += '?';
        console.log(output);
        break;
    case 5:
        output += '!';
        console.log(output);
        break;
    default:
        console.log('Veuillez choisir un nombre entre 0 et 5 !');
}</pre>

<p>Selon les valeurs fournies à la variable <code>toto</code>, on aura les résultats suivants :</p>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Valeur</th>
   <th scope="col">Texte</th>
  </tr>
  <tr>
   <td>toto vaut {{jsxref("NaN")}} ou est différent de 1, 2, 3, 4, 5 ou 0</td>
   <td>Veuillez choisir un nombre entre 0 et 5 !</td>
  </tr>
  <tr>
   <td>0</td>
   <td>Résultat : Donc quel est votre nom ?</td>
  </tr>
  <tr>
   <td>1</td>
   <td>Résultat : quel est votre nom ?</td>
  </tr>
  <tr>
   <td>2</td>
   <td>Résultat : votre nom ?</td>
  </tr>
  <tr>
   <td>3</td>
   <td>Résultat : nom ?</td>
  </tr>
  <tr>
   <td>4</td>
   <td>Résultat : ?</td>
  </tr>
  <tr>
   <td>5</td>
   <td>Résultat : !</td>
  </tr>
 </tbody>
</table>

<h3 id="switch_et_les_variables_avec_une_portée_de_bloc"><code>switch</code> et les variables avec une portée de bloc</h3>

<p>Avec ECMAScript 2015 (ES6), on peut utiliser les instructions <code><a href="/en-US/docs/Web/JavaScript/Reference/Statements/let">let</a></code> et <code><a href="/en-US/docs/Web/JavaScript/Reference/Statements/const">const</a></code> pour déclarer des variables dont la portée sera celle du bloc englobant.</p>

<p>Prenons cet exemple :</p>

<pre class="brush: js">const action = 'dire_bonjour';
switch (action) {
  case 'dire_bonjour':
    let message = 'bonjour';
    console.log(message);
    break;
  case 'dire_coucou':
    let message = 'coucou';
    console.log(message);
    break;
  default:
    console.log('Aucune action reçue.');
    break;
}</pre>

<p>Si on exécute cet exemple, on aura l'erreur <code>Uncaught SyntaxError: Identifier 'message' has already been declared</code> qui n'est probablement pas le résultat espéré.</p>

<p>Cela se produit car la première instruction <code>let message = 'bonjour';</code> entre en conflit avec <code>let message = 'coucou';</code> bien qu'elles soient rattachées à deux instructions <code>case</code> distinctes <code>case 'dire_bonjour':</code> et <code>case 'dire_coucou':</code> mais ces deux instructions s'inscrivent dans le même bloc et on a donc <code>message</code> déclaré deux fois dans le même bloc, soit deux fois dans la même portée.</p>

<p>Pour régler ce problème, il suffit de rajouter des accolades pour définir un bloc d'instructions pour chaque <code>case</code> :</p>

<pre class="brush: js">const action = 'dire_bonjour';
switch (action) {
  case 'dire_bonjour': <strong>{ // accolade ajoutée</strong>
    let message = 'bonjour';
    console.log(message);
    break;
  <strong>} // accolade ajoutée</strong>
  case 'dire_coucou': <strong>{ // accolade ajoutée</strong>
    let message = 'coucou';
    console.log(message);
    break;
  <strong>} // accolade ajoutée</strong>
  default: <strong>{ // accolade ajoutée</strong>
    console.log('Aucune action reçue.');
    break;
  <strong>} // accolade ajoutée</strong>
}</pre>

<p>Cette nouvelle version, exécutée, produira <code>"bonjour"</code> dans la console, sans causer d'erreur.</p>

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
   <td>Définition initiale. Implémentée avec JavaScript 1.2</td>
  </tr>
  <tr>
   <td>{{SpecName('ES5.1', '#sec-12.11', 'instruction switch')}}</td>
   <td>{{Spec2('ES5.1')}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName('ES6', '#sec-switch-statement', 'instruction switch')}}</td>
   <td>{{Spec2('ES6')}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-switch-statement', 'switch statement')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.statements.switch")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{jsxref("Instructions/if...else","if...else")}}</li>
 <li>{{jsxref("Instructions/break","break")}}</li>
</ul>
