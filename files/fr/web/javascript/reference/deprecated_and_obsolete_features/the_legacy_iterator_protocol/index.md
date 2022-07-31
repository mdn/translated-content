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
{{JSSideBar("More")}}

> **Attention :** Ce protocole historique était une fonctionnalité spécifique à SpiderMonkey et est supprimé à partir de Firefox 58. Pour utiliser des itérations par la suite, veuillez utiliser des boucles [for..of](/fr/docs/Web/JavaScript/Reference/Instructions/for...of) ainsi que le [protocole itérateur](/fr/docs/Web/JavaScript/Guide/Le_protocole_iterator).

## Le protocole itérateur obsolète, spécifique à Firefox

Avant la version 26, Firefox implémentait un autre protocole d'itération semblable à celui défini par [ES2015](/fr/docs/Web/JavaScript/Guide/Le_protocole_iterator).

Un objet est un itérateur historique lorsqu'il implémente une méthode `next()` avec la sémantique suivante et lorsqu'il renvoie une exception {{jsxref("Objets_globaux/StopIteration", "StopIteration")}} à la fin de l'itération :

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="col">Propriété</th>
      <th scope="col">Valeur</th>
    </tr>
    <tr>
      <td><code>next</code></td>
      <td><p>Une fonction sans argument qui renvoie une valeur.</p></td>
    </tr>
  </tbody>
</table>

### Les différences entre le protocole historique et celui d'ES2015

- La valeur était directement renvoyée par la fonction `next` alors qu'avec le protocole ES2015, elle est contenue dans une propriété `value`
- La fin de l'itération était signalée par un objet {{jsxref("Objets-globaux/StopIteration", "StopIteration")}}.

### Un exemple simple utilisant l'ancien protocole

#### Exemple

```js
function créerItérateur(tableau){
    var nextIndex = 0;

    return {
       next: function(){
           if(nextIndex < tableau.length){
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
```

## Voir aussi

- [Les itérateurs et générateurs](/fr/docs/Web/JavaScript/Guide/iterateurs_et_generateurs)
- [D'autres fonctionnalités dépréciées et obsolètes](/fr/docs/JavaScript/Reference/Annexes/Fonctionnalités_dépréciées)
