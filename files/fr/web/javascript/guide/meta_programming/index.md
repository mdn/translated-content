---
title: Métaprogrammation
slug: Web/JavaScript/Guide/Meta_programming
tags:
  - Guide
  - JavaScript
  - Proxy
  - Reflect
translation_of: Web/JavaScript/Guide/Meta_programming
original_slug: Web/JavaScript/Guide/Métaprogrammation
---
{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide/iterateurs_et_generateurs","Web/JavaScript/Guide/Modules")}}

À partir d'ECMAScript 2015, JavaScript fournit les objets natifs {{jsxref("Proxy")}} et {{jsxref("Reflect")}}. Ces objets permettent d'intercepter et de définir des comportements spécifiques pour certaines opérations fondamentales du langage (par exemple la recherche d'une propriété, l'affectation, l'énumération, l'appel d'une fonction, etc.). Grâce à ces deux objets, il est possible d'interagir avec le langage lui-même (on parle alors de métaprogrammation).

## Les proxies

Introduits avec ECMAScript 2015, les objets {{jsxref("Proxy")}} permettent d'intercepter certaines opérations JavaScript et de définir le comportement à avoir quand celles-ci se produisent. Par exemple, on peut intercepter l'accès à une propriété d'un objet :

```js
var handler = {
  get: function(cible, nom){
    return nom in cible ? cible[nom] : 42;
}};
var p = new Proxy({}, handler);
p.a = 1;
console.log(p.a, p.b); // 1, 42
```

Ici, l'objet `Proxy` définit une _cible_ (ici c'est un objet vide) et un gestionnaire (_handler_) qui implémente une _trappe_ pour l'opération _get_. Ainsi, l'objet qui est « proxyfié » ne renverra pas `undefined` lorsqu'on tentera d'accéder à une propriété qui n'est pas définie, à la place le nombre 42 sera renvoyé.

> **Note :** D'autres exemples sont disponibles sur la page de l'objet {{jsxref("Proxy")}}.

### Terminologie

Lorsqu'on utilise les proxies et leurs fonctionnalités, on utilisera les termes suivants :

- {{jsxref("Objets_globaux/Proxy/handler","gestionnaire (handler)","","true")}}
  - : L'objet qui contient les trappes.
- trappes
  - : Les méthodes qui fournissent l'accès aux propriétés. Ce concept est analogue aux trappes utilisées dans les systèmes d'exploitations.
- cible
  - : L'objet que le proxy virtualise. C'est généralement un objet utilisé en arrière-plan pour stocker les informations. Les invariants (c'est-à-dire les éléments sémantiques qui doivent rester inchangés) concernant le caractère non-extensible de l'objet ou l'aspect non-configurable des propriétés sont vérifiés par rapport à cet objet cible.
- invariants
  - : Les éléments sémantiques qui ne doivent pas être modifiés par les opérations définies dans les proxies. Si un invariant n'est pas respecté au sein d'un gestionnaire, cela provoquera une exception {{jsxref("TypeError")}}.

## Les gestionnaires et les trappes

Le tableau suivant résume les différentes trappes disponibles pour les objets `Proxy`. Pour plus d'explications et de détails, voir les différents [pages de la référence](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Proxy/handler) sur chacun de ces concepts.

<table class="standard-table">
  <thead>
    <tr>
      <th>Gestionnaires / Trappes</th>
      <th>Opérations interceptées</th>
      <th>Invariants</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        {{jsxref("Objets_globaux/Proxy/handler/getPrototypeOf", "handler.getPrototypeOf()")}}
      </td>
      <td>
        {{jsxref("Object.getPrototypeOf()")}}<br />{{jsxref("Reflect.getPrototypeOf()")}}<br />{{jsxref("Object/proto", "__proto__")}}<br />{{jsxref("Object.prototype.isPrototypeOf()")}}<br />{{jsxref("Operators/instanceof", "instanceof")}}
      </td>
      <td>
        <code>getPrototypeOf</code> doit renvoyer un objet ou
        <code>null</code>.<br /><br />Si <code>cible</code> n'est pas
        extensible, <code>Object.getPrototypeOf(proxy)</code> doit renvoyer le
        même objet que <code>Object.getPrototypeOf(cible)</code>.
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Objets_globaux/Proxy/handler/setPrototypeOf", "handler.setPrototypeOf()")}}
      </td>
      <td>
        {{jsxref("Object.setPrototypeOf()")}}<br />{{jsxref("Reflect.setPrototypeOf()")}}
      </td>
      <td>
        <p>
          Si <code>cible</code> n'est pas extensible, le paramètre
          <code>prototype</code> doit être la même valeur que
          <code>Object.getPrototypeOf(cible)</code>.
        </p>
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Objets_globaux/Proxy/handler/isExtensible", "handler.isExtensible()")}}
      </td>
      <td>
        <p>{{jsxref("Object.isExtensible()")}}</p>
        <p>{{jsxref("Reflect.isExtensible()")}}</p>
      </td>
      <td>
        <p>
          <code>Object.isExtensible(proxy)</code> doit renvoyer la même valeur
          que <code>Object.isExtensible(target)</code>.
        </p>
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Objets_globaux/Proxy/handler/preventExtensions", "handler.preventExtensions()")}}
      </td>
      <td>
        <p>{{jsxref("Object.preventExtensions()")}}</p>
        <p>{{jsxref("Reflect.preventExtensions()")}}</p>
      </td>
      <td>
        <p>
          <code>Object.preventExtensions(proxy)</code> ne renvoie
          <code>true</code> que si <code>Object.isExtensible(proxy)</code> vaut
          <code>false</code>.
        </p>
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Objets_globaux/Proxy/handler/getOwnPropertyDescriptor", "handler.getOwnPropertyDescriptor()")}}
      </td>
      <td>
        <p>{{jsxref("Object.getOwnPropertyDescriptor()")}}</p>
        <p>{{jsxref("Reflect.getOwnPropertyDescriptor()")}}</p>
      </td>
      <td>
        <p>
          <code>getOwnPropertyDescriptor</code> doit renvoyer un objet ou
          <code>undefined</code>.
        </p>
        <p>
          Une propriété ne peut pas être vue comme non-existante si elle existe
          comme une propriété propre non-configurable de l'objet cible.
        </p>
        <p>
          Une propriété ne peut pas être vue comme non-existante si elle existe
          comme une propriété propre de la cible et que l'objet cible n'est pas
          extensible.
        </p>
        <p>
          Une propriété ne peut pas être vue comme existante si elle n'existe
          pas comme une propriété propre de l'objet cible et que l'objet cible
          n'est pas extensible.
        </p>
        <p>
          Une propriété ne peut pas être vue comme non-configurable si elle
          n'existe pas comme une propriété propre de l'objet cible ou si elle
          existe comme une propriété configurable propre de l'objet cible.
        </p>
        <p>
          Le résultat de
          <code>Object.getOwnPropertyDescriptor(cible)</code> peut être appliqué
          à la cible en utilisant <code>Object.defineProperty</code> sans que
          cela ne lève d'exception.
        </p>
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Objets_globaux/Proxy/handler/defineProperty", "handler.defineProperty()")}}
      </td>
      <td>
        <p>{{jsxref("Object.defineProperty()")}}</p>
        <p>{{jsxref("Reflect.defineProperty()")}}</p>
      </td>
      <td>
        <p>
          Une propriété ne peut pas être ajoutée si l'objet cible n'est pas
          extensible.
        </p>
        <p>
          Une propriété ne peut pas être ajoutée ou être modifiée afin d'être
          non-configurable si elle n'existe pas comme une propriété propre de
          l'objet cible et qu'elle n'est pas non-configurable.
        </p>
        <p>
          Une propriété peut ne pas être non-configurable si une propriété
          correspondante configurable existe sur l'objet cible.
        </p>
        <p>
          Si une propriété possède une propriété correspondante sur l'objet
          cible, <code>Object.defineProperty(cible, prop, descripteur)</code> ne
          doit pas renvoyer d'exception.
        </p>
        <p>
          En mode strict, si la valeur de retour de
          <code>defineProperty</code> est <code>false</code>, cela entraînera
          une exception {{jsxref("TypeError")}} exception.
        </p>
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Objets_globaux/Proxy/handler/has", "handler.has()")}}
      </td>
      <td>
        <p>Requête d'une propriété : <code>toto in proxy</code></p>
        <p>
          Requête d'une propriété héritée :
          <code>toto in Object.create(proxy)</code>
        </p>
        <p>{{jsxref("Reflect.has()")}}</p>
      </td>
      <td>
        <p>
          Une propriété ne peut pas être vue comme non-existante si elle existe
          comme propriété propre non-configurable de l'objet cible.
        </p>
        <p>
          Une propriété ne peut pas être vue comme non-existante si elle existe
          comme propriété propre de l'objet cible et que l'objet cible n'est pas
          extensible.
        </p>
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Objets_globaux/Proxy/handler/get", "handler.get()")}}
      </td>
      <td>
        <p>
          Accès à une propriété : <code>proxy[toto]</code> et
          <code>proxy.truc</code>
        </p>
        <p>
          Accès à une propriété héritée :
          <code>Object.create(proxy)[toto]</code>
        </p>
        <p>{{jsxref("Reflect.get()")}}</p>
      </td>
      <td>
        <p>
          La valeur rapportée pour la propriété doit être la même que la valeur
          de la propriété correspondante sur l'objet cible si celle-ci est une
          propriété de donnée non accessible en écriture et non-configurable..
        </p>
        <p>
          La valeur rapportée pour une propriété doit être
          <code>undefined</code> si la propriété correspondante de l'objet cible
          est une propriété d'accesseur dont l'attribut [[Get]] vaut
          <code>undefined</code>.
        </p>
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Objets_globaux/Proxy/handler/set", "handler.set()")}}
      </td>
      <td>
        <p>
          Affection d'une propriété : <code>proxy[toto] = truc</code> et
          <code>proxy.toto = truc</code><br /><br />Affectation d'une propriété
          héritée : <code>Object.create(proxy)[toto] = truc</code
          ><br /><br />{{jsxref("Reflect.set()")}}
        </p>
      </td>
      <td>
        <p>
          Il est impossible de modifier la valeur d'une propriété pour que
          celle-ci soit différente de la valeur de la propriété correspondante
          de l'objet cible si la propriété de l'objet cible est une propriété de
          donnée qui n'est pas accessible en écriture et qui n'est pas
          configurable.
        </p>
        <p>
          Il est impossible de modifier la valeur d'une propriété si la
          propriété correspondante de l'objet cible est une propriété
          d'accesseur non-configurable dont l'attribut [[Set]] vaut
          <code>undefined</code>.
        </p>
        <p>
          En mode strict, si le gestionnaire pour <code>set</code> renvoie
          <code>false</code>, cela provoquera une exception
          {{jsxref("TypeError")}}.
        </p>
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Objets_globaux/Proxy/handler/deleteProperty", "handler.deleteProperty()")}}
      </td>
      <td>
        <p>
          Suppression d'une propriété : <code>delete proxy[toto]</code> et
          <code>delete proxy.toto</code
          ><br /><br />{{jsxref("Reflect.deleteProperty()")}}
        </p>
      </td>
      <td>
        Une propriété ne peut pas être supprimée si elle existe comme une
        propriété propre non-configurable de l'objet cible.
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Objets_globaux/Proxy/handler/enumerate", "handler.enumerate()")}}
      </td>
      <td>
        <p>
          Lister les propriétés avec <code>for...in</code> :
          <code>for (var nom in proxy) {...}</code
          ><br /><br />{{jsxref("Reflect.enumerate()")}}
        </p>
      </td>
      <td>La méthode <code>enumerate</code> doit renvoyer un objet.</td>
    </tr>
    <tr>
      <td>
        {{jsxref("Objets_globaux/Proxy/handler/ownKeys", "handler.ownKeys()")}}
      </td>
      <td>
        <p>
          {{jsxref("Object.getOwnPropertyNames()")}}<br />{{jsxref("Object.getOwnPropertySymbols()")}}<br />{{jsxref("Object.keys()")}}<br />{{jsxref("Reflect.ownKeys()")}}
        </p>
      </td>
      <td>
        <p>
          Le résultat de <code>ownKeys</code> est une liste.<br /><br />Le type
          de chaque élément de la liste est soit une
          {{jsxref("String")}} soit un  {{jsxref("Symbol")}}.<br /><br />La
          liste résultatnte doit contenir les clés de toutes les propriétés
          non-configurables de l'objet cible.<br /><br />Si l'objet cible n'est
          pas extensible, la liste résultante doit contenir toutes les clés des
          propriétés propres de l'objet cibles et aucune autre valeur.
        </p>
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Objets_globaux/Proxy/handler/apply", "handler.apply()")}}
      </td>
      <td>
        <p>
          <code>proxy(..args)</code
          ><br /><br />{{jsxref("Function.prototype.apply()")}} and
          {{jsxref("Function.prototype.call()")}}<br /><br />{{jsxref("Reflect.apply()")}}
        </p>
      </td>
      <td>
        Il n'y a pas d'invariant pour la méthode <code>handler.apply</code>.
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Objets_globaux/Proxy/handler/construct", "handler.construct()")}}
      </td>
      <td>
        <p>
          <code>new proxy(...args)</code
          ><br />{{jsxref("Reflect.construct()")}}
        </p>
      </td>
      <td>Le résultat doit être un <code>Objet</code>.</td>
    </tr>
  </tbody>
</table>

## Proxies révocables

La méthode {{jsxref("Proxy.revocable()")}} est utilisée pour créer un objet `Proxy` qui puisse être révoqué. Cela signifie que que le proxy pourra être révoqué avec la fonction `revoke` et arrêtera le proxy. Après cet arrêt, toute opération sur le proxy entraînera une exception {{jsxref("TypeError")}}.

```js
var revocable = Proxy.revocable({}, {
  get: function(cible, nom) {
    return "[[" + nom + "]]";
  }
});
var proxy = revocable.proxy;
console.log(proxy.toto); // "[[toto]]"

revocable.revoke();

console.log(proxy.toto); // déclenche une TypeError
proxy.toto = 1;          // une TypeError encore
delete proxy.toto;       // toujours une TypeError
typeof proxy             // "object", typeof ne déclenche aucune trappe
```

## Réflexion

{{jsxref("Reflect")}} est un objet natif qui fournit des méthodes pour les opérations JavaScript qui peuvent être interceptées. Ces méthodes sont les mêmes que celles gérées par les {{jsxref("Objets_globaux/Proxy/handler","gestionnaires de proxy","","true")}}. `Reflect` n'est pas un constructeur et ne peut pas être utilisé comme une fonction !

`Reflect` aide à transférer les opérations par défaut depuis le gestionnaire vers la cible.

Par exemple, avec {{jsxref("Reflect.has()")}}, on obtient le comportement de l'opérateur [`in`](/fr/docs/Web/JavaScript/Reference/Opérateurs/L_opérateur_in) sous forme d'une fonction :

```js
Reflect.has(Object, "assign"); // true
```

{{PreviousNext("Web/JavaScript/Guide/iterateurs_et_generateurs","Web/JavaScript/Guide/Modules")}}
