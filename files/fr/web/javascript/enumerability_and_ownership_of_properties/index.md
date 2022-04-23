---
title: Rattachement et caractère énumérable des propriétés
slug: Web/JavaScript/Enumerability_and_ownership_of_properties
tags:
  - Guide
  - Intermédiaire
  - JavaScript
translation_of: Web/JavaScript/Enumerability_and_ownership_of_properties
original_slug: Web/JavaScript/Caractère_énumérable_des_propriétés_et_rattachement
---
{{JsSidebar("More")}}

Les propriétés dites « énumérables » sont celles pour lesquelles la caractéristique interne `[[Enumerable]]` vaut `true`. C'est le cas par défaut pour les propriétés qui sont créées grâce à une affectation simple ou grâce à un initialisateur de propriété. Les propriétés définies avec des méthodes analogues à {{jsxref("Object.defineProperty()")}} auront `[[Enumerable]]` à `false`). Les propriétés énumérables sont celles qui seront parcourues dans une boucle {{jsxref("Instructions/for...in","for..in")}} (sauf si le nom de la propriété est un {{jsxref("Symbol")}}).

Le rattachement des propriétés est détérminé selon que la propriété est directement rattachée à l'objet et non à sa chaîne de prototypes. Il est également possible de récupérer l'ensemble des propriétés d'un objet. Dans le tableau suivant, on détaille les moyens possibles pour détecter, parcourir, énumérer, récupérer les propriétés d'un objet.

<table>
  <caption>
    Caractère énumérable et rattachement - méthodes natives pour détecter,
    récupérer et parcourir les propriétés
  </caption>
  <tbody>
    <tr>
      <th>Fonctionnalité</th>
      <th>Rattachement direct à l'objet</th>
      <th>Rattachement direct à l'objet et sur la chaîne de prototypes</th>
      <th>Uniquement sur la chaîne de prototypes</th>
    </tr>
    <tr>
      <td>Détection</td>
      <td>
        <table>
          <thead>
            <tr>
              <th scope="col">Énumérables</th>
              <th scope="col">Non-énumérables</th>
              <th scope="col">Toutes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <p>
                  <code
                    ><a
                      href="/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object/propertyIsEnumerable"
                      >propertyIsEnumerable()</a
                    ></code
                  >
                </p>
                <p>
                  <code
                    ><a
                      href="/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object/hasOwnProperty"
                      >hasOwnProperty()</a
                    ></code
                  >
                </p>
              </td>
              <td>
                <code
                  ><a
                    href="/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object/hasOwnProperty"
                    >hasOwnProperty()</a
                  >
                  - </code
                >en utilisant <code
                  ><a
                    href="/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object/propertyIsEnumerable"
                    >propertyIsEnumerable()</a
                  ></code
                >
                afin d'exclure les propriétés énumérables
              </td>
              <td>
                <code
                  ><a
                    href="/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object/hasOwnProperty"
                    >hasOwnProperty()</a
                  ></code
                >
              </td>
            </tr>
          </tbody>
        </table>
      </td>
      <td>
        <table>
          <thead>
            <tr>
              <th scope="col">Énumerables</th>
              <th scope="col">Non-énumérables</th>
              <th scope="col">Toutes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                Cette fonctionnalité n'est pas disponible sans code
                supplémentaire.
              </td>
              <td>
                Cette fonctionnalité n'est pas disponible sans code
                supplémentaire.
              </td>
              <td>
                <code
                  ><a
                    href="/fr/docs/Web/JavaScript/Reference/Opérateurs/L_opérateur_in"
                    >in</a
                  ></code
                >
              </td>
            </tr>
          </tbody>
        </table>
      </td>
      <td>
        Cette fonctionnalité n'est pas disponible sans code supplémentaire.
      </td>
    </tr>
    <tr>
      <td>Récupération</td>
      <td>
        <table>
          <thead>
            <tr>
              <th scope="col">Énumérables</th>
              <th scope="col">Non-énumérables</th>
              <th scope="col">Toutes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <p>
                  <code
                    ><a
                      href="/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object/keys"
                      >Object.keys()</a
                    ></code
                  >
                </p>
                <p>
                  <code
                    ><a
                      href="/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object/getOwnPropertyNames"
                      >getOwnPropertyNames()</a
                    ></code
                  >
                </p>
                <p>
                  <code
                    ><a
                      href="/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object/getOwnPropertySymbols"
                      >getOwnPropertySymbols()</a
                    ></code
                  >
                </p>
              </td>
              <td>
                <code
                  ><a
                    href="/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object/getOwnPropertyNames"
                    >getOwnPropertyNames()</a
                  ></code
                >
                <code
                  >- <a
                    href="/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object/getOwnPropertySymbols"
                    >getOwnPropertySymbols()</a
                  > </code
                >en utilisant <code
                  ><a
                    href="/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object/propertyIsEnumerable"
                    >propertyIsEnumerable()</a
                  ></code
                >
                afin d'exclure les propriétés énumérables
              </td>
              <td>
                <p>
                  <code
                    ><a
                      href="/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object/getOwnPropertyNames"
                      >getOwnPropertyNames()</a
                    ></code
                  >
                </p>
                <p>
                  <code
                    ><a
                      href="/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object/getOwnPropertySymbols"
                      >getOwnPropertySymbols()</a
                    ></code
                  >
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </td>
      <td>
        Cette fonctionnalité n'est pas disponible sans code supplémentaire.
      </td>
      <td>
        Cette fonctionnalité n'est pas disponible sans code supplémentaire.
      </td>
    </tr>
    <tr>
      <td>Parcours</td>
      <td>
        <table>
          <thead>
            <tr>
              <th scope="col">Énumérables</th>
              <th scope="col">Non-énumérables</th>
              <th scope="col">Toutes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <p>
                  <code
                    ><a
                      href="/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object/keys"
                      >Object.keys()</a
                    ></code
                  >
                </p>
                <p>
                  <code
                    ><a
                      href="/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object/getOwnPropertyNames"
                      >getOwnPropertyNames()</a
                    ></code
                  >
                </p>
                <p>
                  <code
                    ><a
                      href="/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object/getOwnPropertySymbols"
                      >getOwnPropertySymbols()</a
                    ></code
                  >
                </p>
              </td>
              <td>
                <code
                  ><a
                    href="/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object/getOwnPropertyNames"
                    >getOwnPropertyNames()</a
                  >
                  -
                  <a
                    href="/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object/getOwnPropertySymbols"
                    >getOwnPropertySymbols()</a
                  ></code
                >en utilisant <code
                  ><a
                    href="/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object/propertyIsEnumerable"
                    >propertyIsEnumerable()</a
                  ></code
                >
                afin d'exclure les propriétés énumérables
              </td>
              <td>
                <p>
                  <code
                    ><a
                      href="/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object/getOwnPropertyNames"
                      >getOwnPropertyNames()</a
                    ></code
                  >
                </p>
                <p>
                  <code
                    ><a
                      href="/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object/getOwnPropertySymbols"
                      >getOwnPropertySymbols()</a
                    ></code
                  >
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </td>
      <td>
        <table>
          <thead>
            <tr>
              <th scope="col">Énumerables</th>
              <th scope="col">Non-énumérables</th>
              <th scope="col">Toutes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <code
                  ><a
                    href="/fr/docs/Web/JavaScript/Reference/Instructions/for...in"
                    >for..in</a
                  ></code
                >
              </td>
              <td>
                Cette fonctionnalité n'est pas disponible sans code
                supplémentaire.
              </td>
              <td>
                Cette fonctionnalité n'est pas disponible sans code
                supplémentaire.
              </td>
            </tr>
          </tbody>
        </table>
      </td>
      <td>
        Cette fonctionnalité n'est pas disponible sans code supplémentaire.
      </td>
    </tr>
  </tbody>
</table>

## Obtenir les propriétés selon leur caractère énumérable et selon leur rattachement

Dans la plupart des cas, ce n'est pas l'algorithme le plus efficace mais il est présenté ici à des fins explicatives.

- On peut détecter la présence d'une propriété grâce à `RecuperateurDePropriete.laMethodeSouhaitee(obj).indexOf(prop) > -1`
- On peut parcourir les propriétés souhaitées avec `RecuperateurDePropriete.laMethodeSouhaitee(obj).forEach(function (value, prop) {});` (on peut aussi utiliser `filter()`, `map()`, etc.)

```js
var RecuperateurDePropriete = {
    getOwnEnumerables: function (obj) {
        return this._getPropertyNames(obj, true, false, this._enumerable);
         // On pourrait également utiliser for..in qu'on filtre avec hasOwnProperty
         // ou encore : return Object.keys(obj);
    },
    getOwnNonenumerables: function (obj) {
        return this._getPropertyNames(obj, true, false, this._notEnumerable);
    },
    getOwnEnumerablesAndNonenumerables: function (obj) {
        return this._getPropertyNames(obj, true, false, this._enumerableAndNotEnumerable);
        // On peut également simplement utiliser : return Object.getOwnPropertyNames(obj);
    },
    getPrototypeEnumerables: function (obj) {
        return this._getPropertyNames(obj, false, true, this._enumerable);
    },
    getPrototypeNonenumerables: function (obj) {
        return this._getPropertyNames(obj, false, true, this._notEnumerable);
    },
    getPrototypeEnumerablesAndNonenumerables: function (obj) {
        return this._getPropertyNames(obj, false, true, this._enumerableAndNotEnumerable);
    },
    getOwnAndPrototypeEnumerables: function (obj) {
        return this._getPropertyNames(obj, true, true, this._enumerable);
        // On pourra aussi utiliser for..in sans filtre
    },
    getOwnAndPrototypeNonenumerables: function (obj) {
        return this._getPropertyNames(obj, true, true, this._notEnumerable);
    },
    getOwnAndPrototypeEnumerablesAndNonenumerables: function (obj) {
        return this._getPropertyNames(obj, true, true, this._enumerableAndNotEnumerable);
    },
    // Fonctions de rappels statiques
    _enumerable : function (obj, prop) {
        return obj.propertyIsEnumerable(prop);
    },
    _notEnumerable : function (obj, prop) {
        return !obj.propertyIsEnumerable(prop);
    },
    _enumerableAndNotEnumerable : function (obj, prop) {
        return true;
    },
    // Inspirée par https://stackoverflow.com/a/8024294/271577
    _getPropertyNames : function getAllPropertyNames(obj, iterateSelfBool, iteratePrototypeBool, includePropCb) {
        var props = [];

        do {
            if (iterateSelfBool) {
                Object.getOwnPropertyNames(obj).forEach(function (prop) {
                    if (props.indexOf(prop) === -1 && includePropCb(obj, prop)) {
                        props.push(prop);
                    }
                });
            }
            if (!iteratePrototypeBool) {
                break;
            }
            iterateSelfBool = true;
        } while (obj = Object.getPrototypeOf(obj));

        return props;
    }
};
```

## Tableau de détection

<table>
  <thead>
    <tr>
      <th scope="row"></th>
      <th scope="col"><code>in</code></th>
      <th scope="col"><code>for..in</code></th>
      <th scope="col"><code>obj.hasOwnProperty()</code></th>
      <th scope="col"><code>obj.propertyIsEnumerable()</code></th>
      <th scope="col"><code>Object.keys()</code></th>
      <th scope="col"><code>Object.getOwnPropertyNames()</code></th>
      <th scope="col"><code>Object.getOwnPropertyDescriptors()</code></th>
      <th scope="col"><code>Reflect.ownKeys()</code></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Propriétés énumérables</th>
      <td>true</td>
      <td>true</td>
      <td>true</td>
      <td>true</td>
      <td>true</td>
      <td>true</td>
      <td>true</td>
      <td>true</td>
    </tr>
    <tr>
      <th scope="row">Propriétés non-énumérables</th>
      <td>true</td>
      <td>false</td>
      <td>true</td>
      <td>false</td>
      <td>false</td>
      <td>true</td>
      <td>true</td>
      <td>true</td>
    </tr>
    <tr>
      <th scope="row">Propriétés dont les clés sont des symboles</th>
      <td>true</td>
      <td>false</td>
      <td>true</td>
      <td>false</td>
      <td>false</td>
      <td>false</td>
      <td>true</td>
      <td>true</td>
    </tr>
    <tr>
      <th scope="row">Propriétés héritées et énumérables</th>
      <td>true</td>
      <td>true</td>
      <td>false</td>
      <td>false</td>
      <td>false</td>
      <td>false</td>
      <td>false</td>
      <td>false</td>
    </tr>
    <tr>
      <th scope="row">Propriétés héritées et non-énumérables</th>
      <td>true</td>
      <td>false</td>
      <td>false</td>
      <td>false</td>
      <td>false</td>
      <td>false</td>
      <td>false</td>
      <td>false</td>
    </tr>
    <tr>
      <th scope="row">Propriétés héritées dont les clés sont des symboles</th>
      <td>true</td>
      <td>false</td>
      <td>false</td>
      <td>false</td>
      <td>false</td>
      <td>false</td>
      <td>false</td>
      <td>false</td>
    </tr>
  </tbody>
</table>

## Voir aussi

- [`in`](/fr/docs/Web/JavaScript/Reference/Opérateurs/L_opérateur_in)
- [`for..in`](/fr/docs/Web/JavaScript/Reference/Instructions/for...in)
- {{jsxref("Object.hasOwnProperty()")}}
- {{jsxref("Object.propertyIsEnumerable()")}}
- {{jsxref("Object.getOwnPropertyNames()")}}
- {{jsxref("Object.keys()")}}
- {{jsxref("Object.getOwnPropertyDescriptors()")}}
