---
title: Changer la priorité des requêtes HTTP (Non standard)
slug: Mozilla/Firefox/Releases/1.5/Changing_the_priority_of_HTTP_requests
l10n:
  sourceCommit: 594ae0d4ffb6326a9529fe366d30ca633309ee30
---

> [!WARNING]
> L'approche décrite dans ce sujet n'est pas standard et n'est pas recommandée.
>
> La meilleure façon de demander des ressources via HTTP est d'utiliser {{DOMxRef("Window/fetch", "fetch()")}}, qui permet de définir la priorité ([`priority`](/fr/docs/Web/API/RequestInit#priority)).
> Vous pouvez également définir la priorité HTTP sur les éléments [`HTMLLinkElement`](/fr/docs/Web/API/HTMLLinkElement/fetchPriority), {{DOMxRef("HTMLIFrameElement")}} et [`HTMLImageElement`](/fr/docs/Web/API/HTMLImageElement/fetchPriority) (et les balises associées) en utilisant l'attribut `fetchpriority`.

Dans [Firefox 1.5](/fr/docs/Mozilla/Firefox/Releases/1.5), une API a été ajoutée pour prendre en charge la modification de la priorité des requêtes [HTTP](/fr/docs/Web/HTTP). Avant cela, il n'existait aucun moyen d'indiquer directement qu'une requête avait une priorité différente. L'API est définie dans `nsISupportsPriority`, mais elle est exprimée en termes très génériques afin que tout objet puisse implémenter cette interface pour activer le concept de priorité. Cet article traite spécifiquement de l'utilisation de cette interface pour modifier la priorité des requêtes HTTP.

Au moment de la rédaction, la modification de la priorité d'une requête HTTP n'affecte que l'ordre dans lequel les tentatives de connexion sont effectuées. Cela signifie que la priorité n'a d'effet que lorsqu'il y a plus de connexions (vers un serveur) que ce qui est autorisé.

Les exemples de ce document sont tous écrits en [JavaScript](/fr/docs/Web/JavaScript) en utilisant XPCOM.

Il convient de noter que la valeur de l'attribut `priority` suit les conventions UNIX, les nombres plus petits (y compris les nombres négatifs) ayant une priorité supérieure.

## Accéder à la priorité depuis un `nsIChannel`

Pour modifier la priorité d'une requête HTTP, vous devez accéder au `nsIChannel` sur lequel la requête est effectuée. Si vous n'avez pas de canal existant, vous pouvez en créer un comme suit&nbsp;:

```js
var ios = Components.classes["@mozilla.org/network/io-service;1"].getService(
  Components.interfaces.nsIIOService,
);
var ch = ios.newChannel("https://www.example.com/", null, null);
```

Une fois que vous disposez d'un `nsIChannel`, vous pouvez accéder à la priorité de la manière suivante&nbsp;:

```js
if (ch instanceof Components.interfaces.nsISupportsPriority) {
  ch.priority = Components.interfaces.nsISupportsPriority.PRIORITY_LOWEST;
}
```

Pour plus de commodité, l'interface définit plusieurs valeurs de priorité standard que vous pouvez utiliser, allant de `PRIORITY_HIGHEST` à `PRIORITY_LOWEST`.

## Obtenir un `nsIChannel` depuis `XMLHttpRequest`

Si vous programmez en [JavaScript](/fr/docs/Web/JavaScript), vous voudrez probablement utiliser {{DOMxRef("XMLHttpRequest")}}, une abstraction de niveau supérieur pour une requête HTTP. Vous pouvez accéder au membre `channel` d'un {{DOMxRef("XMLHttpRequest")}} une fois que vous avez appelé sa méthode `open`, comme suit&nbsp;:

```js
var req = new XMLHttpRequest();
req.open("GET", "https://www.example.com", false);
if (req.channel instanceof Components.interfaces.nsISupportsPriority) {
  req.channel.priority =
    Components.interfaces.nsISupportsPriority.PRIORITY_LOWEST;
}
req.send(null);
```

> [!NOTE]
> Cet exemple utilise un {{DOMxRef("XMLHttpRequest")}} synchrone, ce que vous ne devriez pas faire en pratique.

## Ajuster la priorité

`nsISupportsPriority` inclut une méthode utilitaire nommée `adjustPriority`. Vous devriez l'utiliser si vous souhaitez modifier la priorité d'une requête d'un certain montant. Par exemple, si vous souhaitez augmenter légèrement la priorité d'une requête par rapport à sa valeur actuelle, vous pouvez faire ce qui suit&nbsp;:

```js
// en supposant que nous disposons déjà d'un nsIChannel ci-dessus
if (ch instanceof Components.interfaces.nsISupportsPriority) {
  ch.adjustPriority(-1);
}
```

Rappelez-vous que des nombres plus faibles signifient une priorité plus élevée, donc ajuster par un nombre négatif augmentera la priorité de la requête.
