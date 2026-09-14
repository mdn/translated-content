---
title: "Response : méthode clone()"
short-title: clone()
slug: Web/API/Response/clone
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}

La méthode **`clone()`** de l'interface {{DOMxRef("Response")}} crée un clone d'un objet réponse, identique en tous points, mais stocké dans une variable différente.

Tout comme l'API sous-jacente {{DOMxRef("ReadableStream.tee")}}, le {{DOMxRef("Response.body", "body")}} d'une `Response` clonée signalera une contre-pression au rythme du consommateur le plus _rapide_ des deux corps, et les données non lues seront mises en file d'attente en interne sur le `body` consommé le plus lentement, sans aucune limite ni contre-pression.
La contre-pression désigne le mécanisme par lequel le consommateur de données en streaming (dans ce cas, le code qui lit le corps) ralentit le producteur de données (comme le serveur TCP) afin de ne pas charger de grandes quantités de données en mémoire en attente d'utilisation par l'application.
Si une seule branche clonée est consommée, alors l'intégralité du corps sera mise en mémoire tampon.
Ainsi, `clone()` permet de lire une réponse deux fois de suite, mais il ne faut pas l'utiliser pour lire de très grands corps en parallèle à des vitesses différentes.

`clone()` lève une {{JSxRef("TypeError")}} si le corps de la réponse a déjà été utilisé.
En fait, la principale raison d'être de `clone()` est de permettre plusieurs utilisations des objets corps (lorsqu'ils ne sont utilisables qu'une seule fois).

## Syntaxe

```js-nolint
clone()
```

### Paramètres

Aucun.

### Valeur de retour

Un objet {{DOMxRef("Response")}}.

## Exemples

Dans notre [exemple de clonage de réponse Fetch <sup>(angl.)</sup>](https://github.com/mdn/dom-examples/blob/main/fetch/fetch-response-clone/index.html) ([voir le clonage de réponse Fetch en direct <sup>(angl.)</sup>](https://mdn.github.io/dom-examples/fetch/fetch-response-clone/)), nous créons un nouvel objet {{DOMxRef("Request")}} à l'aide du constructeur {{DOMxRef("Request.Request","Request()")}}, auquel nous passons le chemin d'un fichier JPG.
Nous récupérons ensuite cette requête avec {{DOMxRef("Window/fetch", "fetch()")}}.
Lorsque la récupération réussit, nous la clonons, extrayons un blob des deux réponses à l'aide de deux appels à {{DOMxRef("Response.blob")}}, créons des URL d'objet à partir des blobs avec {{DOMxRef("URL.createObjectURL_static", "URL.createObjectURL()")}}, et les affichons dans deux éléments {{HTMLElement("img")}} distincts.

```js
const image1 = document.querySelector(".img1");
const image2 = document.querySelector(".img2");

const maRequete = new Request("flowers.jpg");

fetch(maRequete).then((reponse) => {
  const reponse2 = reponse.clone();

  reponse.blob().then((monBlob) => {
    const urlObjet = URL.createObjectURL(monBlob);
    image1.src = urlObjet;
  });

  reponse2.blob().then((monBlob) => {
    const urlObjet = URL.createObjectURL(monBlob);
    image2.src = urlObjet;
  });
});
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [L'API ServiceWorker](/fr/docs/Web/API/Service_Worker_API)
- [Contrôle d'accès HTTP (CORS)](/fr/docs/Web/HTTP/Guides/CORS)
- La référence [HTTP](/fr/docs/Web/HTTP)
