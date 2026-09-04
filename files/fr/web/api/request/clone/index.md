---
title: "Request : méthode clone()"
short-title: clone()
slug: Web/API/Request/clone
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}

La méthode **`clone()`** de l'interface {{DOMxRef("Request")}} crée une copie de l'objet `Request` actuel.

Comme l'API sous-jacente {{DOMxRef("ReadableStream.tee")}}, le {{DOMxRef("Request.body", "body")}} d'une `Request` clonée signalera la contre-pression au rythme du consommateur le plus _rapide_ des deux corps, et les données non lues sont mises en file d'attente en interne sur le `body` consommé plus lentement, sans aucune limite ni contre-pression.
Faites attention lorsque vous construisez une `Request` à partir d'un flux puis que vous la clonez.

`clone()` lève une exception {{JSxRef("TypeError")}} si le corps de la requête a déjà été utilisé. En fait, la principale raison d'existence de `clone()` est de permettre plusieurs utilisations des objets body (lorsqu'ils ne peuvent être utilisés qu'une seule fois).

Si vous souhaitez modifier la requête, il peut être préférable d'utiliser le constructeur {{DOMxRef("Request")}}.

## Syntaxe

```js-nolint
clone()
```

### Paramètres

Aucun.

### Valeur de retour

Un objet {{DOMxRef("Request")}}, qui est une copie exacte de la `Request` sur laquelle `clone()` a été appelé.

## Exemples

Dans l'extrait de code suivant, nous créons une nouvelle requête à l'aide du constructeur {{DOMxRef("Request.Request", "Request()")}} (pour un fichier image dans le même répertoire que le script), puis nous clonons la requête.

```js
const maRequete = new Request("fleurs.jpg");
const nouvelleRequete = maRequete.clone(); // une copie de la requête est maintenant stockée dans nouvelleRequete
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [L'API ServiceWorker](/fr/docs/Web/API/Service_Worker_API)
- [Contrôle d'accès HTTP (CORS)](/fr/docs/Web/HTTP/Guides/CORS)
- La référence [HTTP](/fr/docs/Web/HTTP)
