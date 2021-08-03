---
title: Promise.prototype.finally()
slug: Web/JavaScript/Reference/Global_Objects/Promise/finally
tags:
  - JavaScript
  - Méthode
  - Promises
  - Reference
  - finally
translation_of: Web/JavaScript/Reference/Global_Objects/Promise/finally
original_slug: Web/JavaScript/Reference/Objets_globaux/Promise/finally
---
<div>{{JSRef}}</div>

<p>La méthode <code><strong>finally()</strong></code> renvoie un objet <code>Promise</code> et accepte en argument une fonction de <em>callback</em> qui est appelée lorsque la promesse a été résolue (qu'elle ait été tenue ou rejetée). Cela permet d'exécuter du code une fois que la promesse a été traitée, quel que soit le résultat. On évite ainsi de dupliquer du code entre les gestionnaires {{jsxref("Promise.then", "then()")}} et {{jsxref("Promise.catch", "catch()")}}.</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox"><var>p.finally(onFinally)</var>;

p.finally(function() {
   // appelée dans tous les
   // cas de terminaison
});
</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><code>onFinally</code></dt>
 <dd>Une fonction (objet {{jsxref("Function")}}) appelé lorsque la promesse courante est résolue.</dd>
</dl>

<h3 id="Valeur_de_retour">Valeur de retour</h3>

<p>Cette méthode renvoie un objet {{jsxref("Promise")}}.</p>

<h2 id="Description">Description</h2>

<p>La méthode <code>finally</code> peut être utile si on souhaite effectuer un traitement ou du nettoyage (fermetures de flux, libération de ressources, etc.) une fois qu'une promesse est résolue, quel que soit l'état de la résolution (tenue ou rejetée).</p>

<p>La méthode <code>finally</code> est similaire à l'utilisation de la forme <code>.then(onFinally, onFinally)</code>, on notera toutefois quelques différences :</p>

<ul>
 <li>Lorsqu'on crée une fonction en ligne, on peut ne la passer qu'une seule fois et éviter d'avoir à déclarer une variable ou à la déclarer à deux reprises.</li>
 <li>Un <em>callback</em> <code>finally</code> ne recevra pas d'argument car on ne peut pas savoir si la promesse a été tenue ou rompue. Cette fonction est précisément appelée lorsqu'on ne s'intéresse pas à la raison du rejet ou à la réussite de la promesse. Une telle valeur est donc superflue. Ainsi :
  <ul>
   <li>À la différence de <code>Promise.resolve(2).then(() =&gt; {}, () =&gt; {})</code> qui sera résolue avec la valeur {{jsxref("undefined")}}, <code>Promise.resolve(2).finally(() =&gt; {})</code> sera résolue avec la valeur <code>2</code>.</li>
   <li>De même, à la différence de <code>Promise.reject(3).then(() =&gt; {}, () =&gt; {})</code> qui sera résolue avec la valeur <code>undefined</code>, <code>Promise.reject(3).finally(() =&gt; {})</code> sera rejetée avec <code>3</code>.</li>
  </ul>
 </li>
</ul>

<div class="note">
<p><strong>Note :</strong> Toutefois, on notera qu'utiliser <code>throw</code> (ou que renvoyer une promesse rompue) dans le <em>callback</em> <code>finally</code> rejettera la promesse avec l'exception indiquée dans l'appel à <code>throw</code>.</p>
</div>

<h2 id="Exemples">Exemples</h2>

<pre class="brush: js">let isLoading = true;

<code>fetch(myRequest).then(function(response) {
    var contentType = response.headers.get("content-type");
    if(contentType &amp;&amp; contentType.includes("application/json")) {
      return response.json();
    }
    throw new TypeError("Oups, ceci n'est pas du JSON !");
  })
  .then(function(json) { /* traiter le JSON */ })
  .catch(function(error) { console.log(error);
       /* La ligne précédent peut aussi déclencher une
          erreur (si console vaut {} par exemple) */
   })
</code>  .finally(function() { isLoading = false; });

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
   <td>{{SpecName('ESDraft', '#sec-promise.prototype.finally', 'Promise.prototype.finally')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.Promise.finally")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{jsxref("Promise")}}</li>
 <li>{{jsxref("Promise.prototype.then()")}}</li>
 <li>{{jsxref("Promise.prototype.catch()")}}</li>
</ul>
