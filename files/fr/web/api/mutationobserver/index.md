---
title: MutationObserver
slug: Web/API/MutationObserver
translation_of: Web/API/MutationObserver
---
{{APIRef("DOM")}}

`MutationObserver` fournit un moyen d’intercepter les changements dans le [DOM](/en-US/docs/DOM). Il a été conçu pour remplacer les [Mutation Events](/en-US/docs/DOM/Mutation_events) définis dans la spécification DOM3 Events.

## Constructeur

### `MutationObserver()`

Le constructeur permettant d’instancier un nouvel observateur de mutations DOM.

    new MutationObserver( function callback );

#### Paramètres

- `callback`
  - : Une fonction qui sera appelée à chaque mutation du DOM. L’observateur appellera cette fonction avec deux arguments. Le premier est un tableau d’objets de type {{domxref("MutationRecord")}}&nbsp;; le second est l’instance de `MutationObserver`.

## Méthodes d’instance

<table class="standard-table">
  <tbody>
    <tr>
      <td>
        <code
          >void <a href="#observe()">observe</a>( {{domxref("Node")}}
          target,
          <a href="#MutationObserverInit">MutationObserverInit</a> options
          );</code
        >
      </td>
    </tr>
    <tr>
      <td>
        <code>void <a href="#disconnect()">disconnect</a>();</code>
      </td>
    </tr>
    <tr>
      <td>
        <code>Array <a href="#takeRecords()">takeRecords</a>();</code>
      </td>
    </tr>
  </tbody>
</table>

> **Note :** La cible {{domxref("Node")}} ne doit pas être confondue avec celle de [NodeJS](https://nodejs.org/en/).

### `observe()`

Inscrit l’instance du `MutationObserver` afin d’être notifié des mutations DOM du nœud sélectionné.

    void observe( {{domxref("Node")}} target, MutationObserverInit options );

#### Paramètres

- `target`
  - : Le {{domxref("Node")}} (nœud) sur lequel doivent être observées les mutations DOM.
- `options`
  - : Un objet du type [`MutationObserverInit`](#MutationObserverInit). Il spécifie quelles mutations DOM sont à rapporter.

> **Note :** ajouter un observateur sur un élément revient à utiliser `addEventListener`. Si vous observez un élément plusieurs fois, cela n’a pas d’impact, dans le sens où, si vous observez un élément deux fois, la callback ne sera pas appelée deux fois, et vous n’aurez pas besoin d’appeler `disconnect()` deux fois. En d’autres termes, une fois qu’un élément est observé, l’observer à nouveau avec la même instance n’a pas d’effet. Cependant, si la callback est différente, un nouvel observateur sera ajouté.

### `disconnect()`

L’instance `MutationObserver` cesse de recevoir les notifications de mutations DOM. Jusqu’à ce que la méthode [`observe()`](<#observe()>) soit appelée à nouveau, les callbacks de l’observateur ne seront pas invoquées.

    void disconnect();

> **Note :** Selon la [spécification](https://dom.spec.whatwg.org/#garbage-collection), un `MutationObserver` est supprimé par le garbage collector si l'élément cible est supprimé.

### `takeRecords()`

Vide la file des mutations enregistrées du `MutationObserver` et retourne son contenu.

    Array takeRecords();

- Valeur de retour
  - : Retourne un tableau de {{domxref("MutationRecord")}}.

## `MutationObserverInit`

`MutationObserverInit` est un objet pouvant avoir les propriétés suivantes&nbsp;:

> **Note :** Au moins une propriété parmi `childList`, `attributes` ou `characterData` doit être initialisée à `true`, sinon l’erreur <i lang="en">"An invalid or illegal string was specified</i>" sera émise.

<table class="standard-table">
  <tbody>
    <tr>
      <td class="header">Propriété</td>
      <td class="header">Description</td>
    </tr>
    <tr>
      <td><code>childList</code></td>
      <td>
        <code>true</code> si l’ajout ou la suppression des éléments enfants du
        nœud visé (incluant les nœuds de texte) sont à observer.
      </td>
    </tr>
    <tr>
      <td><code>attributes</code></td>
      <td>
        <code>true</code> si les mutations d’attributs du nœud visé sont à
        observer.
      </td>
    </tr>
    <tr>
      <td><code>characterData</code></td>
      <td>
        <code>true</code> si les mutations de texte du nœud visé sont à observer.
      </td>
    </tr>
    <tr>
      <td><code>subtree</code></td>
      <td>
        <code>true</code> si les descendants du nœud visé sont également à
        observer.
      </td>
    </tr>
    <tr>
      <td><code>attributeOldValue</code></td>
      <td>
        <code>true</code> si <code>attributes</code> est <code>true</code> et si
        la valeur des attributs avant mutation doit être enregistrée.
      </td>
    </tr>
    <tr>
      <td><code>characterDataOldValue</code></td>
      <td>
        <code>true</code> si <code>characterData</code> est <code>true</code> et
        si la valeur des données avant mutation doit être enregistrée.
      </td>
    </tr>
    <tr>
      <td><code>attributeFilter</code></td>
      <td>
        Spécifiez un tableau de noms d’attributs locaux (sans namespace) si vous
        souhaitez n’observer les mutations que sur une partie des attributs.
      </td>
    </tr>
  </tbody>
</table>

## Exemple d’utilisation

L’exemple suivant est extrait de ce [blog](http://hacks.mozilla.org/2012/05/dom-mutationobserver-reacting-to-dom-changes-without-killing-browser-performance/).

```js
// Selectionne le noeud dont les mutations seront observées
var targetNode = document.getElementById('some-id');

// Options de l'observateur (quelles sont les mutations à observer)
var config = { attributes: true, childList: true };

// Fonction callback à éxécuter quand une mutation est observée
var callback = function(mutationsList) {
    for(var mutation of mutationsList) {
        if (mutation.type == 'childList') {
            console.log('Un noeud enfant a été ajouté ou supprimé.');
        }
        else if (mutation.type == 'attributes') {
            console.log("L'attribut '" + mutation.attributeName + "' a été modifié.");
        }
    }
};

// Créé une instance de l'observateur lié à la fonction de callback
var observer = new MutationObserver(callback);

// Commence à observer le noeud cible pour les mutations précédemment configurées
observer.observe(targetNode, config);

// L'observation peut être arrêtée par la suite
observer.disconnect();
```

## Autres articles pour en savoir plus (en anglais)

- [A brief overview](http://updates.html5rocks.com/2012/02/Detect-DOM-changes-with-Mutation-Observers)
- [A more in-depth discussion](http://hacks.mozilla.org/2012/05/dom-mutationobserver-reacting-to-dom-changes-without-killing-browser-performance/)
- [A screencast by Chromium developer Rafael Weinstein](http://www.youtube.com/watch?v=eRZ4pO0gVWw)
- [The mutation summary library](http://code.google.com/p/mutation-summary/)
- [The DOM standard](http://dom.spec.whatwg.org/#mutation-observers) which defines the `MutationObserver` interface

## Spécifications

| Spécification                                                                            | Statut                           | Commentaire |
| ---------------------------------------------------------------------------------------- | -------------------------------- | ----------- |
| {{SpecName('DOM WHATWG', '#mutationobserver', 'MutationObserver')}} | {{ Spec2('DOM WHATWG') }} |             |

## Compatibilité des navigateurs

{{Compat("api.MutationObserver")}}
