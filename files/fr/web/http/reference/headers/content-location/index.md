---
title: En-tête Content-Location
short-title: Content-Location
slug: Web/HTTP/Reference/Headers/Content-Location
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

L'{{Glossary("representation header", "en-tête de représentation")}} HTTP **`Content-Location`** indique un emplacement alternatif pour les données renvoyées.
Son utilisation principale est d'indiquer l'URL d'une ressource transmise à la suite d'une [négociation de contenu](/fr/docs/Web/HTTP/Guides/Content_negotiation).

L'en-tête `Content-Location` est différent de l'en-tête {{HTTPHeader("Location")}}.
`Content-Location` indique l'URL directe pour accéder à la ressource lorsqu'une [négociation de contenu](/fr/docs/Web/HTTP/Guides/Content_negotiation) a eu lieu, permettant au client de contourner la négociation de contenu lors des requêtes suivantes pour cette ressource.
`Location`, en revanche, indique soit la cible d'une redirection `3XX`, soit l'URL d'une ressource nouvellement créée dans une réponse {{HTTPStatus("201", "201 Created")}}.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Type d'en-tête</th>
      <td>{{Glossary("Representation header", "En-tête de représentation")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden request header", "En-tête de requête interdit")}}</th>
      <td>Non</td>
    </tr>
  </tbody>
</table>

## Syntaxe

```http
Content-Location: <url>
```

## Directives

- `<url>`
  - : Une URL qui peut être [absolue](/fr/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL#url_absolues_et_url_relatives) ou [relative](/fr/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL#url_absolues_et_url_relatives) à l'URL de la requête.

## Exemples

### Requêter des données auprès d'un serveur dans différents formats

Supposons qu'une API de site puisse retourner des données au format {{Glossary("JSON")}}, {{Glossary("XML")}} ou au format [CSV <sup>(angl.)</sup>](https://en.wikipedia.org/wiki/Comma-separated_values). Si l'URL d'un document particulier est `https://exemple.com/documents/toto`, le site pourrait retourner différentes URLs pour `Content-Location` selon l'en-tête {{HTTPHeader("Accept")}} de la requête&nbsp;:

| En-tête de requête                    | En-tête de réponse                       |
| ------------------------------------- | ---------------------------------------- |
| `Accept: application/json, text/json` | `Content-Location: /documents/toto.json` |
| `Accept: application/xml, text/xml`   | `Content-Location: /documents/toto.xml`  |
| `Accept: text/plain, text/*`          | `Content-Location: /documents/toto.txt`  |

These URLs are examples — the site could serve the different filetypes with any URL
patterns it wishes, such as a [query string parameter](/fr/docs/Web/API/HTMLAnchorElement/search): `/documents/foo?format=json`,
`/documents/foo?format=xml`, and so on.

Le client pourrait alors se souvenir que la version JSON est disponible à cette URL précise, et éviter la négociation de contenu lors de la prochaine requête pour ce document.

Le serveur pourrait également prendre en compte d'autres en-têtes de [négociation de contenu](/fr/docs/Web/HTTP/Guides/Content_negotiation), comme {{HTTPHeader("Accept-Language")}}.

### Indicating the URL of a transaction's result

Supposons que vous ayez un {{HTMLElement("form")}} pour envoyer de l'argent à un·e autre utilisateur·ice d'un site.

```html
<form action="/send-payment" method="post">
  <p>
    <label>
      À qui voulez-vous envoyer l'argent&nbsp;?
      <input type="text" name="recipient" />
    </label>
  </p>

  <p>
    <label>
      Combien&nbsp;?
      <input type="number" name="amount" />
    </label>
  </p>

  <button type="submit">Envoyer de l'argent</button>
</form>
```

Lorsque le formulaire est soumis, le site génère un reçu pour la transaction. Le
serveur pourrait utiliser `Content-Location` pour indiquer l'URL de ce reçu pour un accès futur.

```http
HTTP/1.1 200 OK
Content-Type: text/html; charset=utf-8
Content-Location: /mon-reçus/38

<!doctype html>
(Beaucoup de HTML…)

<p>Vous avez envoyé 50,00 € à Sandra Smith.</p>

(Beaucoup plus de HTML…)
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'en-tête {{HTTPHeader("Location")}}
