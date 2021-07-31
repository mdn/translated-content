---
title: try...catch
slug: Web/JavaScript/Reference/Statements/try...catch
tags:
  - JavaScript
  - Reference
  - Statement
translation_of: Web/JavaScript/Reference/Statements/try...catch
original_slug: Web/JavaScript/Reference/Instructions/try...catch
---
<div>{{jsSidebar("Statements")}}</div>

<p>L'instruction <strong><code>try...catch</code></strong> regroupe des instructions à exécuter et définit une réponse si l'une de ces instructions provoque une exception.</p>

<div>{{EmbedInteractiveExample("pages/js/statement-trycatch.html")}}</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox">try {
   <em>instructions_try</em>
}
[catch (<em>exception_var_1</em> if <em>condition_1</em>) { // non-standard
   <em>instructions_catch_1</em>
}]
...
[catch (<em>exception_var_2</em>) {
   <em>instructions_catch_2</em>
}]
[finally {
   <em>instructions_finally</em>
}]
</pre>

<dl>
 <dt><code>instructions_try</code></dt>
 <dd>Les instructions qu'on souhaite exécuter.</dd>
 <dt><code>instructions_catch_1</code>, <code>instructions_catch_2</code></dt>
 <dd>Les instructions à exécuter si une exception est levée dans le bloc <code>try</code>.</dd>
 <dt><code>exception_var_1</code>, <code>exception_var_2</code></dt>
 <dd>Un identifiant qui permet de récupérer la valeur de l'exception associée à la clause <code>catch</code>.</dd>
 <dt><code>condition_1</code></dt>
 <dd>Une expression conditionnelle.</dd>
 <dt><code>instructions_finally</code></dt>
 <dd>Les instructions à exécuter une fois que l'instruction <code>try</code> est terminée. Ces instructions s'exécuteront, qu'il y ait eu une exception ou non.</dd>
</dl>

<h2 id="Description">Description</h2>

<p>L'instruction <code>try</code> est composée d'un bloc <code>try</code> contenant une ou plusieurs instructions, d'au moins une clause <code>catch</code> ou d'une clause <code>finally</code> ou des deux. On peut donc avoir les trois formes suivantes pour cette instruction :</p>

<ol>
 <li><code>try...catch</code></li>
 <li><code>try...finally</code></li>
 <li><code>try...catch...finally</code></li>
</ol>

<p>Une clause <code>catch</code> contient les instructions à exécuter si une exception est levée par une instruction du bloc <code>try</code>. On souhaite généralement que le bloc <code>try</code> se déroule sans problème. Si toutefois une erreur se produit, on veut pouvoir contrôler ce qui se passe et on transmet donc le contrôle au bloc <code>catch</code>. Si une instruction contenue dans le bloc <code>try</code> (ou une fonction appelée depuis le bloc <code>try</code>) renvoie une exception, le contrôle sera immédiatement passé à la clause <code>catch</code>. Si aucune exception n'est levée, la clause <code>catch</code> ne sera pas utilisée.</p>

<p>La clause <code>finally</code> s'exécute après le bloc <code>try</code> et après le bloc <code>catch</code> (si celui-ci a été déclenché) mais avant les instructions qui suivent. Les instructions de cette clause sont toujours exécutées, qu'il y ait eu ou non une exception de déclenchée et/ou d'interceptée.</p>

<p>Il est possible d'imbriquer plusieurs instructions <code>try</code>. Si un <code>try</code> imbriqué ne possède pas de clause <code>catch</code>, la clause <code>catch</code> du <code>try</code> du niveau supérieur sera utilisée (et ainsi de suite).</p>

<p>Pour plus d'informations sur les exceptions et les erreurs en JavaScript, voir le chapitre du <a href="/fr/docs/Web/JavaScript/Guide/Instructions#Les_instructions_utilis.C3.A9es_pour_les_exceptions">Guide JavaScript</a> correspondant.</p>

<h3 id="Clause_catch_inconditionnelle">Clause <code>catch</code> inconditionnelle</h3>

<p>Lorsqu'une seule clause <code>catch</code> inconditionnelle est utilisée, le bloc <code>catch</code> est utilisée pour n'importe quelle exception qui est levée. Ainsi, dans le fragment de code qui suit, pour toute exception produite, le contrôle de l'exécution passera à la clause <code>catch</code>.</p>

<pre class="brush: js">try {
   throw "monException"; // génère une exception
}
catch (e) {
   // les instructions utilisées pour gérer les
   // exceptions
   logErreurs(e); // on transfère l'objet de l'exception à une méthode
                  // gestionnaire
}
</pre>

<p>La clause <code>catch</code> définit un identifiant (dans l'exemple précédent, c'est <code>e</code>) qui contient la valeur définie par l'instruction <code>throw</code>. Ce bloc <code>catch</code> est en quelque sorte unique en JavaScript car l'identifiant est créé lors de l'entrée dans le bloc <code>catch</code>, la valeur est alors ajoutée à la portée courant et la durée de vie de l'identifiant est limitée au bloc <code>catch</code>. Une fois que le bloc <code>catch</code> a été exécuté, l'identifiant n'est plus disponible.</p>

<h3 id="Clauses_catch_conditionnelles">Clauses <code>catch</code> conditionnelles</h3>

<p>{{non-standard_header}}</p>

<p>Il est aussi possible d'utiliser une ou plusieurs clauses <code>catch</code> conditionnelles afin de gérer des exceptions spécifiques. Dans ce cas, selon l'exception produite, la clause <code>catch</code> appropriée sera utilisée. Dans l'exemple qui suit, le code contenu dans le bloc <code>try</code> peut produire trois exceptions : {{jsxref("TypeError")}}, {{jsxref("RangeError")}}, et {{jsxref("EvalError")}}. Lorsqu'une exception se produit, le contrôle de l'exécution est passé à la clause <code>catch</code> correspondante. SI l'exception qui est déclenchée ne correspond à aucune des conditions, le contrôle passera à la clause <code>catch</code> non-conditionnelle si elle est trouvée..</p>

<p>Si on utilise une clause <code>catch</code> inconditionnelle avec une ou plusieurs clauses <code>catch</code> conditionnelles, la clause inconditionnelle doit être spécifiée en dernière. Si ce n'est pas le cas, la clause <code>catch</code> inconditionnelle interceptera tous les types d'exceptions avant les autres clauses.</p>

<pre class="brush: js">try {
    maRoutine(); // peut déclencher trois types d'exceptions
} catch (e if e instanceof TypeError) {
    // les instructions pour gérer TypeError
} catch (e if e instanceof RangeError) {
    // les instructions pour gérer RangeError
} catch (e if e instanceof EvalError) {
    // les instructions pour gérer EvalError
} catch (e) {
    // les instructions pour gérer les autres exceptions
}
</pre>

<p>Dans le fragment de code qui suit, on aura le même fonctionnement mais en utilisant uniquement des fonctionnalités standard (selon ECMAScript). Ce code est plus long mais fonctionne pour tous les environnements conformes à ECMAScript :</p>

<pre class="brush: js">try {
    maRoutine(); // may throw three types of exceptions
} catch (e) {
    if (e instanceof TypeError) {
        // les instructions pour gérer TypeError
    } else if (e instanceof RangeError) {
        // les instructions pour gérer RangeError
    } else if (e instanceof EvalError) {
        // les instructions pour gérer EvalError
    } else {
       // les instructions pour gérer les autres exceptions
    }
}
</pre>

<h3 id="L'identifiant_de_l'exception">L'identifiant de l'exception</h3>

<p>Lorsqu'une exception est levée dans le bloc <code>try</code>, <em><code>exception_var</code></em> (par exemple le <code>e</code> dans « <code>catch (e)</code> ») contient la valeur définie par l'instruction {{jsxref("Instructions/throw","throw")}}. Cet identifiant peut être utilisé pour accéder aux propriétés de l'objet et ainsi obtenir des informations sur l'exception qui a eu lieu. Cet identifiant est local à la clause <code>catch</code>, il est créé lorsqu'on rentre dans la clause <code>catch</code> et n'est plus disponible une fois que la clause a fini son exécution.</p>

<pre class="brush: js">function isValidJSON(txt){
  try {
    JSON.parse(txt);
    return true;
  } catch {
    return false;
  }
}</pre>

<h3 id="La_clause_finally">La clause <code>finally</code></h3>

<p>La clause <code>finally</code> contient les instructions à exécuter après que les instructions du bloc <code>try</code> et éventuellement celles de la clause <code>catch</code> aient été exécutées mais avant que les instructions suivant l'instruction <code>try</code> soient exécutées. La clause <code>finally</code> est exécutée dans tous les cas (si on a eu une exception ou non). Si une exception est levée et qu'il n'y a pas de clause <code>catch</code>, les instructions de la clause <code>finally</code> sont tout de même exécutées.</p>

<p>Cela peut paraître étrange qu'un bloc de code qui s'exécute même lorsqu'il y a une exception… Il faut comprendre que le code qui suit le bloc try...catch ne sera <strong>pas</strong> exécuté. Aussi, le bloc <code>finally</code> permet de contenir toutes les instructions de clôture/nettoyage nécessaire. On évite donc de dupliquer ce code qui doit toujours être utilisé.</p>

<p>La clause <code>finally</code> peut être utilisée afin d'exécuter les actions nécessaires pour que le script « échoue correctement » en cas d'erreur. On peut par exemple tirer parti de <code>finally</code> pour fermer un flux, libérer une ressource, etc. Dans l'exemple suivant, exécuté côté serveur, le script accède à un fichier. Si une exception se produit lorsque le fichier est ouvert, la clause <code>finally</code> permet de fermer le fichier avant que le script échoue. Le code contenu dans le bloc <code>finally</code> sera exécuté même si on a une instruction <code>return</code> dans la section <code>try</code> ou dans la section <code>catch</code>.</p>

<pre class="brush: js">ouvrirMonFichier()
try {
   // on utilise une ressource
   écrireDansMonFichier(mesDonnées);
}
finally {
   fermerMonFichier(); // on ferme toujours la ressource
}
</pre>

<h2 id="Exemples">Exemples</h2>

<h3 id="Blocs_try_imbriqués">Blocs <code>try</code> imbriqués</h3>

<p>Tout d'abord, on utilise ce fragment de code, qui produit le résultat suivant :</p>

<pre class="brush: js">try {
  try {
    throw new Error("oups");
  }
  finally {
    console.log("finally");
  }
}
catch (ex) {
  console.error("externe", ex.message);
}

// Produira dans la console :
// "finally"
// "externe" "oups"
</pre>

<p>Et maintenant, si on a déjà intercepté l'exception avec une clause <code>catch</code> dans le bloc imbriqué :</p>

<pre class="brush: js">try {
  try {
    throw new Error("oups");
  }
  catch (ex) {
    console.error("interne", ex.message);
  }
  finally {
    console.log("finally");
  }
}
catch (ex) {
  console.error("externe", ex.message);
}

// Produira dans la console:
// "interne" "oups"
// "finally"
</pre>

<p>Ensuite, si on propage l'erreur à nouveau :</p>

<pre class="brush: js">try {
  try {
    throw new Error("oups");
  }
  catch (ex) {
    console.error("interne", ex.message);
    throw ex;
  }
  finally {
    console.log("finally");
  }
}
catch (ex) {
  console.error("externe", ex.message);
}

// Produira dans la console :
// "interne" "oups"
// "finally"
// "externe" "oups"
</pre>

<p>Toute exception ne sera interceptée qu'une seule fois par le bloc <code>catch</code> le plus « proche » à moins qu'elle ne soit retransmise à nouveau. Bien entendu, toute exception qui aura été levée par le bloc interne (il se peut que les instructions d'une clause catch provoquent une erreur) sera interceptée par le bloc externe.</p>

<h3 id="Valeur_de_retour_et_bloc_finally">Valeur de retour et bloc <code>finally</code></h3>

<p>Lorsque le bloc <code>finally</code> renvoie une valeur, c'est cette valeur qui devient la valeur de retour pour l'ensemble du bloc <code>try-catch-finally</code> et ce, peu importe, s'il y a des instructions {{jsxref("Instructions/return","return")}} dans les blocs <code>try</code> et <code>catch</code>. Cela inclue également les exceptions levées dans le bloc <code>catch</code> :</p>

<pre class="brush: js">try {
  try {
    throw new Error("oups");
  }
  catch (ex) {
    console.error("interne", ex.message);
    throw ex;
  }
  finally {
    console.log("finally");
    return;
  }
}
catch (ex) {
  console.error("externe", ex.message);
}

// Produira dans la console :
// "interne" "oups"
// "finally"
</pre>

<p>Le "oups" externe n'est pas renvoyé car l'instruction <code>return</code> est utilisée dans la clause <code>finally</code> du bloc interne. Cela aurait également été le cas avec n'importe quelle valeur renvoyée par le bloc <code>catch</code>.</p>

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
   <td>{{SpecName('ES5.1', '#sec-12.14', 'instruction try')}}</td>
   <td>{{Spec2('ES5.1')}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName('ES6', '#sec-try-statement', 'Instruction try')}}</td>
   <td>{{Spec2('ES6')}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-try-statement', 'try statement')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td>Points ne faisant pas partie du standard ECMA-262 actuel : utilisation de plusieurs clauses catch et de plusieurs clauses conditionnelles (extension liée à SpiderMonkey, correspondant à JavaScript 1.5).</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.statements.try_catch")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{jsxref("Error")}}</li>
 <li>{{jsxref("Instructions/throw", "throw")}}</li>
</ul>
