---
title: Le protocole itérateur historique
slug: >-
  Web/JavaScript/Reference/Deprecated_and_obsolete_features/The_legacy_Iterator_protocol
tags:
  - JavaScript
  - Legacy Iterator
translation_of: >-
  Web/JavaScript/Reference/Deprecated_and_obsolete_features/The_legacy_Iterator_protocol
original_slug: Web/JavaScript/Guide/Le_protocole_itérateur_historique
---
<div>{{JSSideBar("More")}}</div>

<div class="warning"><p><strong>Attention :</strong> Ce protocole historique était une fonctionnalité spécifique à SpiderMonkey et est supprimé à partir de Firefox 58. Pour utiliser des itérations par la suite, veuillez utiliser des boucles <a href="/fr/docs/Web/JavaScript/Reference/Instructions/for...of">for..of</a> ainsi que le <a href="/fr/docs/Web/JavaScript/Guide/Le_protocole_iterator">protocole itérateur</a>.</p></div>

<h2 id="Le_protocole_itérateur_obsolète_spécifique_à_Firefox">Le protocole itérateur obsolète, spécifique à Firefox</h2>

<p>Avant la version 26, Firefox implémentait un autre protocole d'itération semblable à celui défini par <a href="/fr/docs/Web/JavaScript/Guide/Le_protocole_iterator">ES2015</a>.</p>

<p>Un objet est un itérateur historique lorsqu'il implémente une méthode <code>next()</code> avec la sémantique suivante et lorsqu'il renvoie une exception {{jsxref("Objets_globaux/StopIteration", "StopIteration")}} à la fin de l'itération :</p>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Propriété</th>
   <th scope="col">Valeur</th>
  </tr>
  <tr>
   <td><code>next</code></td>
   <td>
    <p>Une fonction sans argument qui renvoie une valeur.</p>
   </td>
  </tr>
 </tbody>
</table>

<h3 id="Les_différences_entre_le_protocole_historique_et_celui_d'ES2015">Les différences entre le protocole historique et celui d'ES2015</h3>

<ul>
 <li>La valeur était directement renvoyée par la fonction <code>next</code> alors qu'avec le protocole ES2015, elle est contenue dans une propriété <code>value</code></li>
 <li>La fin de l'itération était signalée par un objet {{jsxref("Objets-globaux/StopIteration", "StopIteration")}}.</li>
</ul>

<h3 id="Un_exemple_simple_utilisant_l'ancien_protocole">Un exemple simple utilisant l'ancien protocole</h3>

<h4 id="Exemple">Exemple</h4>

<pre class="brush: js">function créerItérateur(tableau){
    var nextIndex = 0;

    return {
       next: function(){
           if(nextIndex &lt; tableau.length){
               return tableau[nextIndex++];
           else
               throw new StopIteration();
       }
    }
}

var it = créerItérateur(['yo', 'ya']);

console.log(it.next()); // 'yo'
console.log(it.next()); // 'ya'
try{
    console.log(it.next());
}
catch(e){
    if(e instanceof StopIteration){
         // fin de l'itération
    }
}
</pre>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><a href="/fr/docs/Web/JavaScript/Guide/iterateurs_et_generateurs">Les itérateurs et générateurs</a></li>
 <li><a href="/fr/docs/JavaScript/Reference/Annexes/Fonctionnalités_dépréciées">D'autres fonctionnalités dépréciées et obsolètes</a></li>
</ul>
