---
title: Méthode de requête GET
short-title: GET
slug: Web/HTTP/Reference/Methods/GET
original_slug: Web/HTTP/Methods/GET
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

La méthode HTTP **`GET`** demande une représentation de la ressource spécifiée.
Les requêtes utilisant `GET` doivent uniquement servir à demander des données et ne doivent pas contenir de corps.

> [!NOTE]
> La sémantique de l'envoi d'un corps de message dans une requête `GET` n'est pas définie.
> Certains serveurs peuvent refuser la requête avec une [erreur client 4XX](/fr/docs/Web/HTTP/Reference/Status#réponses_derreur_côté_client).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">La requête a un corps</th>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">La réponse de succès a un corps</th>
      <td>Oui</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Safe/HTTP", "Sûre")}}</th>
      <td>Oui</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Idempotent", "Idempotente")}}</th>
      <td>Oui</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Cacheable", "Mis en cache")}}</th>
      <td>Oui</td>
    </tr>
    <tr>
      <th scope="row">
        Autorisée dans <a href="/fr/docs/Learn_web_development/Extensions/Forms">les formulaires HTML</a>
      </th>
      <td>Oui</td>
    </tr>
  </tbody>
</table>

## Syntaxe

```http
GET <request-target>["?"<query>] HTTP/1.1
```

- `<request-target>`
  - : Identifie la ressource cible de la requête lorsqu'elle est combinée avec l'information fournie par l'en-tête {{HTTPHeader("Host")}}.
    Il s'agit d'un chemin absolu (par exemple `/chemin/vers/fichier.html`) pour les requêtes vers un serveur d'origine et d'une URL absolue pour les requêtes vers les serveurs mandataires (<i lang="en">proxies</i>) (par exemple `http://www.exemple.fr/chemin/vers/fichier.html`).
- `<query>` {{Optional_Inline}}
  - : Un fragment de requête optionnel précédé d'un point d'interrogation `?`.
    Utilisé généralement pour fournir de l'information sous la forme de paires `clé=valeur`.

## Exemples

### Récupération réussie d'une ressource

La requête `GET` suivante demande la ressource située à `exemple.fr/contact`&nbsp;:

```http
GET /contact HTTP/1.1
Host: exemple.fr
User-Agent: curl/8.6.0
Accept: */*
```

Le serveur renvoie la ressource avec le code de statut {{HTTPStatus("200", "200 OK")}}, indiquant le succès&nbsp;:

```http
HTTP/1.1 200 OK
Content-Type: text/html; charset=UTF-8
Date: Fri, 21 Jun 2024 14:18:33 GMT
Last-Modified: Thu, 17 Oct 2019 07:18:26 GMT
Content-Length: 1234

<!doctype html>
<!-- Contenu HTML -->
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Méthodes de requête HTTP](/fr/docs/Web/HTTP/Reference/Methods)
- [Codes de statut de réponse HTTP](/fr/docs/Web/HTTP/Reference/Status)
- [En-têtes HTTP](/fr/docs/Web/HTTP/Reference/Headers)
- L'en-tête {{HTTPHeader("Range")}}
- La méthode {{HTTPMethod("POST")}}
