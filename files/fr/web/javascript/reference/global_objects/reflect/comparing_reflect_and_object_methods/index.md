---
title: Comparaison entre Reflect et les méthodes d'Object
slug: >-
  Web/JavaScript/Reference/Global_Objects/Reflect/Comparing_Reflect_and_Object_methods
tags:
  - Aperçu
  - Intermédiaire
  - JavaScript
  - Object
  - Reflect
translation_of: >-
  Web/JavaScript/Reference/Global_Objects/Reflect/Comparing_Reflect_and_Object_methods
original_slug: >-
  Web/JavaScript/Reference/Objets_globaux/Reflect/Comparaison_entre_Reflect_et_les_méthodes_Object
---
{{jssidebar}}

L'objet {{jsxref("Reflect")}}, introduit avec ES2015, est un objet natif fournissant des méthodes pour s'interfacer avec les objets JavaScript. Certaines fonctions statiques de `Reflect` ont une correspondance avec les méthodes fournies par {{jsxref("Object")}} et disponibles avant ES2015. Bien que ces méthodes aient un comportement similaire, il y a souvent de subtiles différences entre elles.

Dans ce tableau, nous énumérons les différences entre les méthodes disponibles avec `Object` et `Reflect`. Si une méthode n'existe pas dans le cas indiqué, elle sera notée N/A.

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Nom de la méthode</th>
      <th scope="col"><code>Object</code></th>
      <th scope="col"><code>Reflect</code></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>defineProperty()</code></td>
      <td>
        {{jsxref("Object.defineProperty()")}} renvoie l'objet qui a
        été passé à la fonction. Déclenche une exception
        <code>TypeError</code> si la propriété n'a pu être définie sur l'objet.
      </td>
      <td>
        {{jsxref("Reflect.defineProperty()")}} renvoie
        <code>true</code> si la propriété a été définie sur l'objet et
        <code>false</code> sinon.
      </td>
    </tr>
    <tr>
      <td><code>defineProperties()</code></td>
      <td>
        {{jsxref("Object.defineProperties()")}} renvoie les objets
        passés à la fonction. Déclenche une exception <code>TypeError</code> si
        une des propriétés n'a pu être définie.
      </td>
      <td>N/A</td>
    </tr>
    <tr>
      <td><code>set()</code></td>
      <td>N/A</td>
      <td>
        {{jsxref("Reflect.set()")}} renvoie <code>true</code> si la
        propriété a été définie sur l'objet et <code>false</code> sinon.
        Déclenche une exception <code>TypeError</code> si la cible n'était pas
        un <code>Object</code>.
      </td>
    </tr>
    <tr>
      <td><code>get()</code></td>
      <td>N/A</td>
      <td>
        {{jsxref("Reflect.get()")}} renvoie la valeur de la propriété.
        Déclenche une exception <code>TypeError</code> si la cible n'était pas
        un <code>Object</code>.
      </td>
    </tr>
    <tr>
      <td><code>deleteProperty()</code></td>
      <td>N/A</td>
      <td>
        {{jsxref("Reflect.deleteProperty()")}} renvoie
        <code>true</code> si la propriété a été supprimée de l'objet et
        <code>false</code> sinon.
      </td>
    </tr>
    <tr>
      <td><code>getOwnPropertyDescriptor()</code></td>
      <td>
        {{jsxref("Object.getOwnPropertyDescriptor()")}} renvoie
        un descripteur de la propriété si elle existe sur l'objet passé en
        argument. Si la propriété n'existe pas, la méthode renvoie
        <code>undefined</code>. Si la valeur passée en premier argument n'est
        pas un objet, elle sera automatiquement convertie en un objet.
      </td>
      <td>
        {{jsxref("Reflect.getOwnPropertyDescriptor()")}} renvoie
        un descripteur de la propriété si elle existe sur l'objet et
        <code>undefined</code> si elle n'existe pas. Déclenche une exception
        <code>TypeError</code> si la valeur passée en premier argument n'est pas
        un objet.
      </td>
    </tr>
    <tr>
      <td><code>getOwnPropertyDescriptors()</code></td>
      <td>
        {{jsxref("Object.getOwnPropertyDescriptors()")}} renvoie
        un objet contenant un descripteur de propriété pour chaque objet passé
        en argument. Renvoie un objet vide si l'objet passé en argument ne
        contient pas les descripteurs.
      </td>
      <td>N/A</td>
    </tr>
    <tr>
      <td><code>getPrototypeOf()</code></td>
      <td>
        {{jsxref("Object.getPrototypeOf()")}} renvoie le prototype de
        l'objet fourni. Renvoie <code>null</code> s'il n'y a pas de propriétés
        héritées. En ES5, déclenche une exception <code>TypeError</code> pour
        les valeurs qui ne sont pas des objets (pour ES6 et ensuite, les valeurs
        sont converties en objet).
      </td>
      <td>
        {{jsxref("Reflect.getPrototypeOf()")}} renvoie le
        prototype de l'objet fourni. Renvoie <code>null</code> s'il n'y a pas de
        propriétés héritées et déclenche une exception
        <code>TypeError</code> pour les valeurs qui ne sont pas des objets.
      </td>
    </tr>
    <tr>
      <td><code>setPrototypeOf()</code></td>
      <td>
        {{jsxref("Object.setPrototypeOf()")}} renvoie l'objet fourni
        si le prototype a pu être défini. Déclenche une exception
        <code>TypeError</code> si le prototype utilisé n'était pas un objet ou
        <code>null</code> ou si le prototype de l'objet à modifier n'est pas
        extensible.
      </td>
      <td>
        {{jsxref("Reflect.setPrototypeOf()")}} renvoie
        <code>true</code> si le prototype a pu être défini sur l'objet et
        <code>false</code> sinon (y compris lorsque le prototype n'est pas
        extensible). Déclenche une exception <code>TypeError</code> si la cible
        passée n'est pas un objet ou si le prototype à appliquer n'est pas un
        objet ou n'est pas <code>null</code>.
      </td>
    </tr>
    <tr>
      <td><code>isExtensible()</code></td>
      <td>
        {{jsxref("Object.isExtensible()")}} renvoie
        <code>true</code> si l'objet est extensible et <code>false</code> sinon.
        En ES5, déclenche une exception <code>TypeError</code> si le premier
        argument fourni n'est pas un objet. Avec ES6 et ensuite, si l'argument
        fourni est une valeur primitive, il est converti en un objet
        non-extensible et la méthode renvoie donc <code>false</code>.
      </td>
      <td>
        <p>
          {{jsxref("Reflect.isExtensible()")}} renvoie
          <code>true</code> si l'objet est extensible et
          <code>false</code> sinon. Déclenche une exception
          <code>TypeError</code> si le premier argument n'est pas un objet.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>preventExtensions()</code></td>
      <td>
        <p>
          {{jsxref("Object.preventExtensions()")}} renvoie l'objet
          qui a été rendu non-extensible. En ES5, déclenche une exception si
          l'argument n'est pas un objet. Avec ES6 et ensuite, si l'argument
          fourni est une valeur primitive, il est converti en un objet
          non-extensible et c'est cette valeur qui est renvoyée.
        </p>
      </td>
      <td>
        {{jsxref("Reflect.preventExtensions()")}} renvoie
        <code>true</code> si l'objet a été rendu non-extensible et
        <code>false</code> sinon. Déclenche une exception
        <code>TypeError</code> si l'argument n'est pas un objet.
      </td>
    </tr>
    <tr>
      <td><code>keys()</code></td>
      <td>
        {{jsxref("Object.keys()")}} renvoie un tableau de chaînes de
        caractères qui sont les noms des propriétés propres (et énumérables) de
        l'objet. En ES5, déclenche une exception <code>TypeError</code> si la
        cible n'est pas un objet. Avec ES6 et les versions suivantes, les
        valeurs primitives sont converties en objets.
      </td>
      <td>N/A</td>
    </tr>
    <tr>
      <td><code>ownKeys()</code></td>
      <td>N/A</td>
      <td>
        {{jsxref("Reflect.ownKeys()")}} renvoie un tableau des noms des
        propriétés pour les clés des propriétés propres de de l'objet. Déclenche
        une exception <code>TypeError</code> si la cible n'est pas un objet.
      </td>
    </tr>
  </tbody>
</table>
