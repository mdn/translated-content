---
title: IDBCursor
slug: Web/API/IDBCursor
tags:
  - API
  - IndexedDB
  - Interface
  - Référence(2)
translation_of: Web/API/IDBCursor
---
{{APIRef("IndexedDB")}}

L'interface **`IDBCursor`** de l' [API IndexedDB](/fr/docs/Web/API/API_IndexedDB) représente un [curseur](/fr/docs/Web/API/API_IndexedDB/Basic_Concepts_Behind_IndexedDB#range) pour traverser ou itérer sur plusieurs enregistrements dans une base de données.

Le curseur possède une source qui indique l'index ou le magasin d'objets sur lequel il itère. Il est décrit par une position dans cet intervalle et par une direction dans laquelle il se déplace : dans l'ordre des clés d'enregistrement suivant le sens donné au curseur (montant ou descendant). Le curseur permet à une application de traiter de façon asynchrone tous les enregistrements de sa plage.

On peut avoir autant de curseurs qu'on souhaite en même temps. Ce sera toujours le même objet `IDBCursor` qui représentera un curseur donné. Les opérations sont effectuées à l’intérieur de l'index ou du magasin d'objet.

{{AvailableInWorkers}}

## Méthodes

- {{domxref("IDBCursor.advance()")}}
  - : Définit le nombre d’itérations vers l'avant.
- {{domxref("IDBCursor.continue()")}}
  - : Avance le curseur sur la position suivante le long de sa direction, jusqu'à l'élément dont la clé correspond au paramètre (optionnel) passé à la fonction.
- {{domxref("IDBCursor.delete()")}}
  - : Retourne un objet {{domxref ("IDBRequest")}}, et, dans un thread séparé, supprime l'enregistrement à la position du curseur, sans changer la position du curseur. Ceci peut être utilisé pour supprimer des enregistrements spécifiques.
- {{domxref("IDBCursor.update()")}}
  - : Retourne un objet {{domxref("IDBRequest")}}, et, dans un thread séparé, met à jour la valeur à la position actuelle du curseur dans le magasin d'objets. Ceci peut être utilisé pour mettre à jour des enregistrements spécifiques.

## Propriétés

- {{domxref("IDBCursor.source")}} {{readonlyInline}}
  - : Renvoie le {{domxref("IDBObjectStore")}} ou {{domxref("IDBIndex")}} sur lequel le curseur itère. Cette fonction ne retourne jamais `null` et ne déclenche pas d’exception, même dans les cas ou le curseur est en train d'itérer, s'il a itéré en dehors la plage ou si la transaction n'est pas active.
- {{domxref("IDBCursor.direction")}} {{readonlyInline}}
  - : Renvoie la direction de parcours du curseur. Voir le paragraphe suivant, [Constantes](#constantes), pour les valeurs possibles.
- {{domxref("IDBCursor.key")}} {{readonlyInline}}
  - : Renvoie la clé de l'enregistrement à la position du curseur ou `undefined` si le curseur est en dehors de la plage. La clé peut être de n'importe quel type de données.
- {{domxref("IDBCursor.primaryKey")}} {{readonlyInline}}
  - : Renvoie la clé primaire effective actuelle du curseur ou `undefined` si le curseur est actuellement itéré ou a itéré en dehors de sa plage. La clé primaire du curseur peut être de tout type de données.

## Constantes

{{deprecated_header(13)}}

> **Attention :** Ces constantes ne sont plus disponibles - elles ont été retirées depuis Gecko 25. Les valeurs équivalentes en chaînes de caractères devraient être utilisées à la place (cf. {{bug(891944)}}).

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Constante</th>
      <th scope="col">Valeur</th>
      <th scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>NEXT</code></td>
      <td>
        <p><code>"next"</code></p>
      </td>
      <td>
        Le curseur indique tous les enregistrements, y compris les doublons. Il
        commence à la limite inférieure de la plage de clé et se déplace vers le
        haut (en itérant dans l'ordre des clés).
      </td>
    </tr>
    <tr>
      <td><code>NEXTUNIQUE</code></td>
      <td>
        <p><code>"nextunique"</code></p>
      </td>
      <td>
        Le curseur indique tous les enregistrements, à l'exclusion des doublons.
        Si plusieurs enregistrements existent avec la même clé, seule la
        première itération est récupérée. Il commence à la limite inférieure de
        la plage de clé et se déplace vers le haut.
      </td>
    </tr>
    <tr>
      <td><code>PREV</code></td>
      <td>
        <p><code>"prev"</code></p>
      </td>
      <td>
        Le curseur indique tous les enregistrements, y compris les doublons. Il
        commence à la limite supérieure de la plage de clé et se déplace vers le
        bas (en itérant dans l'ordre inverse des clés).
      </td>
    </tr>
    <tr>
      <td><code>PREVUNIQUE</code></td>
      <td>
        <p><code>"prevunique"</code></p>
      </td>
      <td>
        Le curseur indique tous les enregistrements, à l'exclusion des doublons.
        Si plusieurs enregistrements existent avec la même clé, seule la
        première itération est récupéré. Il commence à la limite supérieure de
        la plage de clé et se déplace vers le bas.
      </td>
    </tr>
  </tbody>
</table>

## Exemple

Dans ce fragment simple, nous créons une transaction, récupérons un magasin d'objets, puis utilisons un curseur pour parcourir tous les enregistrements du magasin d'objets. Le curseur ne nous oblige pas à sélectionner les données basées sur une clé, nous pouvons simplement travailler sur tout les enregistrements. Notez également que dans chaque itération de la boucle, vous pouvez récupérer les données de l'enregistrement en cours sous l'objet curseur à l'aide `curseur.value.toto`. Pour un exemple de travail complet, voir notre [exemple IDBCursor](https://github.com/mdn/IDBcursor-example/) ([l'exemple en _live_](https://mdn.github.io/IDBcursor-example/)).

```js
function afficheDonnee() {
  var transaction = db.transaction(['grandListAlbum'], "readonly");
  var objectStore = transaction.objectStore('grandListAlbum');

  objectStore.openCursor().onsuccess = function(event) {
    var curseur = event.target.result;
    if(curseur) {
      var listItem = document.createElement('li');
      listItem.innerHTML = curseur.value.titreAlbum + ', ' + curseur.value.annee;
      list.appendChild(listItem);

      curseur.continue();
    } else {
      console.log('Entrées tous affichés.');
    }
  };
}
```

## Spécifications

| Spécification                                                                | État                         | Commentaires |
| ---------------------------------------------------------------------------- | ---------------------------- | ------------ |
| {{SpecName('IndexedDB', '#idl-def-IDBCursor', 'cursor')}} | {{Spec2('IndexedDB')}} |              |

## Compatibilité des navigateurs

{{Compat("api.IDBCursor")}}

## Voir aussi

- [Manipuler IndexedDB](/fr/docs/Web/API/API_IndexedDB/Using_IndexedDB)
- Démarrer des transactions : {{domxref("IDBDatabase")}}
- Manipuler des transactions : {{domxref("IDBTransaction")}}
- Définir un intervalle de clés : {{domxref("IDBKeyRange")}}
- Récupérer des données et les modifier : {{domxref("IDBObjectStore")}}
- Manipuler des curseurs: {{domxref("IDBCursor")}}
- Exemple de référence pour IndexedDB : [To-do Notifications](https://github.com/mdn/to-do-notifications/tree/gh-pages)
