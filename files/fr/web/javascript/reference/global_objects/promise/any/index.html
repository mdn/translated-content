---
title: Promise.any()
slug: Web/JavaScript/Reference/Global_Objects/Promise/any
tags:
  - JavaScript
  - Method
  - Méthode
  - Promise
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Promise/any
original_slug: Web/JavaScript/Reference/Objets_globaux/Promise/any
---
<div>{{JSRef}}</div>

<p>La méthode <strong><code>Promise.any()</code></strong> prend comme argument un itérable contenant des objets {{JSxRef("Promise")}} et, dès qu'une des promesses de cet itérable est tenue, renvoie une unique promesse résolue avec la valeur de la promesse résolue. Si aucune promesse de l'itérable n'est tenue (c'est-à-dire si toutes les promesses sont rejetées), la promesse renvoyée est rompue avec un objet {{JSxRef("Objets_globaux/AggregateError", "AggregateError")}} (une nouvelle sous-classe de {{JSxRef("Error")}} qui regroupe un ensemble d'erreurs). Cette méthode fait essentiellement le <em>contraire</em> de {{JSxRef("Promise.all()")}} (qui renvoie une promesse tenue uniquement si toutes les promesses de l'itérable passé en argument ont été tenues).</p>

<p>{{EmbedInteractiveExample("pages/js/promise-any.html")}}</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="notranslate">Promise.any(<var>iterable</var>);</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><code>iterable</code></dt>
 <dd>Un objet <a href="/fr/docs/Web/JavaScript/Reference/Les_protocoles_iteration">itérable</a> tel qu'un tableau ({{JSxRef("Array")}}) contenant des promesses ({{jsxref("Promise")}}).</dd>
</dl>

<h3 id="Valeur_de_retour">Valeur de retour</h3>

<ul>
 <li>Une promesse ({{jsxref("Promise")}}) <strong>déjà résolue</strong> si l'itérable passé en argument est vide.</li>
 <li>Une promesse ({{jsxref("Promise")}}) <strong>résolue en asynchrone</strong> si l'itérable passé en argument ne contient pas de promesses.</li>
 <li>Une promesse ({{jsxref("Promise")}}) <strong>en attente</strong> dans tous les autres cas. La promesse renvoyée est résolue (qu'elle soit tenue ou rompue) <strong>de façon asynchrone</strong> lorsqu'au moins une des promesses de l'itérable est tenue ou si toutes les promesses ont été rompues.</li>
</ul>

<h2 id="Description">Description</h2>

<p>Cette méthode est utile afin de renvoyer la première promesse tenue d'un ensemble de promesse. Elle permet de court-circuiter dès qu'une promesse est tenue, sans attendre que les autres promesses soient résolues. Contrairement à {{JSxRef("Promise.all()")}} qui renvoie un tableau avec les valeurs de résolution des promesses, on a ici une seule valeur de résolution (celle de la première promesse tenue). Ce peut être bénéfique lorsqu'on a un ensemble de promesses et qu'on ne souhaite en résoudre qu'une sans se soucier de savoir laquelle des promesses a été tenue en premier.</p>

<p>À la différence de {{JSxRef("Promise.race()")}} qui renvoie la valeur de la première promesse résolue (qu'elle ait été tenue ou rompue), <code>Promise.any()</code> renvoie une promesse avec la valeur de la première promesse <em>tenue</em>. Cette méthode ignore les promesses qui sont rompues jusqu'à obtenir une promesse tenue.</p>

<h3 id="Une_des_promesses_est_tenue">Une des promesses est tenue</h3>

<p>La promesse renvoyée par <code>Promise.any()</code> est résolue avec la première valeur résolue de l'itérable, qu'il s'agisse d'une promesse ou non, et que les autres promesses de l'itérable aient échoué ou non.</p>

<ul>
 <li>Si une des promesses de l'itérable (non vide) est tenue ou que les valeurs fournies dans l'itérable ne sont pas des promesses, alors la promesse renvoyée par <code>Promise.any()</code> est résolue de façon asynchrone.</li>
</ul>

<h3 id="Toutes_les_promesses_sont_rompues">Toutes les promesses sont rompues</h3>

<p>Si toutes les promesses de l'itérable échouent, <code>Promise.any()</code> échoue de asynchrone avec pour valeur d'échec un objet {{JSxRef("Objets_globaux/AggregateError", "AggregateError")}}, qui étend {{JSxRef("Error")}}, et contient une propriété <code>errors</code> qui est un tableau contenant l'ensemble des valeurs d'échec des différentes promesses de l'itérable.</p>

<ul>
 <li>Si l'itérable reçu était vide, alors la promesse retournée par cette méthode est rejetée de manière synchrone et la propriété <code>errors</code> de l'objet <code>AggregateError</code> est un tableau vide.</li>
</ul>

<h2 id="Exemples">Exemples</h2>

<h3 id="Première_résolue">Première résolue</h3>

<p><code>Promise.any()</code> prend pour valeur de résolution celle de la première promesse résolue, et ce même si une des promesses de l'itérable a échoué avant. Ce comportement est différent de ce {{JSxRef("Promise.race()")}}, qui s'arrête à la première promesse qui se termine avec sa valeur de résolution ou d'échec.</p>

<pre class="brush: js notranslate">const pErr = new Promise((resolve, reject) =&gt; {
  reject("J'échoue toujours");
});

const pLente = new Promise((resolve, reject) =&gt; {
  setTimeout(resolve, 500, "Éventuellement résolue");
});

const pRapide = new Promise((resolve, reject) =&gt; {
  setTimeout(resolve, 100, "Rapidement résolue");
});

Promise.any([pErr, pLente, pRapide]).then((valeur) =&gt; {
  console.log(valeur);
  // pRapide s'est résolue en premier
});
// résultat attendu : "Rapidement résolue"</pre>

<h3 id="Échec_avec_AggregateError">Échec avec AggregateError</h3>

<p><code>Promise.any()</code> échoue avec un objet {{JSxRef("AggregateError")}} si aucun des promesses n'est résolue.</p>

<pre class="brush: js notranslate">const pErr = new Promise((resolve, reject) =&gt; {
  reject("J'échoue toujours");
});

Promise.any([pErr]).catch((err) =&gt; {
  console.log(err);
})
// résultat attendu : "AggregateError: No Promise in Promise.any was resolved"</pre>

<h3 id="Afficher_la_première_image_chargée">Afficher la première image chargée</h3>

<p>Dans cet exemple, nous avons une fonction qui requête une image et retourne un Blob. Nous utilisons <code>Promise.any()</code> pour requêter plusieurs images et afficher la première qui nous sera disponible (c'est-à-dire dont la promesse sera résolue).</p>

<pre class="brush: js notranslate">function fetchAndDecode(url) {
  return fetch(url).then(réponse =&gt; {
    if (!réponse.ok)
      throw new Error(`Erreur HTTP ! état : ${response.status}`);
    else
      return réponse.blob();
  })
}

let café = fetchAndDecode('coffee.jpg');
let thé = fetchAndDecode('tea.jpg');

Promise.any([café, thé]).then(valeur =&gt; {
  let URLobjet = URL.createObjectURL(valeur);
  let image = document.createElement('img');
  image.src = URLobjet;
  document.body.appendChild(image);
})
.catch(e =&gt; {
  console.log(e.message);
});</pre>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <td><strong>Spécification</strong></td>
  </tr>
  <tr>
   <td>{{SpecName('Promise.any')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.Promise.any")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{JSxRef("Promise")}}</li>
 <li>{{JSxRef("Promise.all()")}}</li>
 <li>{{JSxRef("Promise.race()")}}</li>
</ul>
