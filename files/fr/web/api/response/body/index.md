---
title: "Response : propriété body"
short-title: body
slug: Web/API/Response/body
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}

La propriété en lecture seule **`body`** de l'interface {{DOMxRef("Response")}} est un objet {{DOMxRef("ReadableStream")}} contenant le corps de la réponse.

## Valeur

Un {{DOMxRef("ReadableStream")}}, ou [`null`](/fr/docs/Web/JavaScript/Reference/Operators/null) pour tout objet `Response` [créé](/fr/docs/Web/API/Response/Response) avec une propriété [`body`](/fr/docs/Web/API/Response/Response#body) nulle, ou pour toute [réponse HTTP](/fr/docs/Web/HTTP/Guides/Messages#réponses_http) réelle qui n'a pas de [corps](/fr/docs/Web/HTTP/Guides/Messages#corps_de_la_réponse).

Le flux est un [flux d'octets lisible](/fr/docs/Web/API/Streams_API/Using_readable_byte_streams), qui prend en charge la lecture sans copie à l'aide d'un {{DOMxRef("ReadableStreamBYOBReader")}}.

> [!NOTE]
> Les navigateurs actuels ne respectent pas réellement l'exigence de la spécification qui impose de définir la propriété `body` à `null` pour les réponses sans corps (par exemple, les réponses aux requêtes {{HTTPMethod("HEAD")}} ou les réponses {{HTTPStatus("204", "204 No Content")}}).

## Exemples

### Copier une image

Dans notre [exemple de transfert de flux simple <sup>(angl.)</sup>](https://mdn.github.io/dom-examples/streams/simple-pump/), nous récupérons une image, exposons le flux de la réponse avec `response.body`, créons un lecteur avec {{DOMxRef("ReadableStream.getReader()", "ReadableStream.getReader()")}}, puis nous ajoutons les morceaux de ce flux dans un second flux lisible personnalisé — créant ainsi une copie identique de l'image.

```js
const image = document.getElementById("target");

// Récupérer l'image d'origine
fetch("./tortoise.png")
  // Récupérer son corps comme ReadableStream
  .then((reponse) => reponse.body)
  .then((corps) => {
    const lecteur = corps.getReader();

    return new ReadableStream({
      start(controleur) {
        return pomper();

        function pomper() {
          return lecteur.read().then(({ done, value }) => {
            // Lorsqu'il n'y a plus de données à consommer, fermer le flux
            if (done) {
              controleur.close();
              return;
            }

            // Ajouter le prochain morceau de données dans notre flux cible
            controleur.enqueue(value);
            return pomper();
          });
        }
      },
    });
  })
  .then((flux) => new Response(flux))
  .then((reponse) => reponse.blob())
  .then((blob) => URL.createObjectURL(blob))
  .then((url) => console.log((image.src = url)))
  .catch((err) => console.error(err));
```

### Créer un lecteur BYOB

Dans cet exemple, nous construisons un {{DOMxRef("ReadableStreamBYOBReader")}} à partir du corps en utilisant {{DOMxRef("ReadableStream.getReader()", "ReadableStream.getReader({mode: 'byob'})")}}. Nous pouvons alors utiliser ce lecteur pour mettre en œuvre un transfert sans copie des données de la réponse.

```js
async function obtenirProduits(url) {
  const reponse = await fetch(url);
  const lecteur = reponse.body.getReader({ mode: "byob" });
  // lire la réponse
}

obtenirProduits(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
);
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [L'API Fetch](/fr/docs/Web/API/Fetch_API)
- [L'API Streams](/fr/docs/Web/API/Streams_API)
- [L'API ServiceWorker](/fr/docs/Web/API/Service_Worker_API)
