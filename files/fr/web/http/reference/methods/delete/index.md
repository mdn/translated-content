---
title: Méthode de requête DELETE
short-title: DELETE
slug: Web/HTTP/Reference/Methods/DELETE
original_slug: Web/HTTP/Methods/DELETE
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

La méthode HTTP **`DELETE`** demande au serveur de supprimer une ressource donnée.

La méthode `DELETE` n'a pas de sémantique définie pour le corps du message, qui devrait donc être vide.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">La requête a un corps</th>
      <td>Elle peut</td>
    </tr>
    <tr>
      <th scope="row">La réponse de succès a un corps</th>
      <td>Elle peut</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Safe/HTTP", "Sûre")}}</th>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Idempotent", "Idempotente")}}</th>
      <td>Oui</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Cacheable", "Mis en cache")}}</th>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">
        Autorisée dans <a href="/fr/docs/Learn_web_development/Extensions/Forms">les formulaires HTML</a>
      </th>
      <td>Non</td>
    </tr>
  </tbody>
</table>

## Syntaxe

```http
DELETE <request-target>["?"<query>] HTTP/1.1
```

- `<request-target>`
  - : Identifie la ressource cible de la requête lorsqu'elle est combinée avec l'information fournie par l'en-tête {{HTTPHeader("Host")}}. Il s'agit d'un chemin absolu (par exemple `/chemin/vers/fichier.html`) pour les requêtes vers un serveur originel et d'une URL absolue pour les requêtes vers les serveurs mandataires (<i lang="en">proxies</i>) (par exemple `http://www.example.com/chemin/vers/fichier.html`).
- `<query>` {{Optional_Inline}}
  - : Un fragment de requête optionnel précédé d'un point d'interrogation `?`. Utilisé généralement pour fournir de l'information sous la forme de paires `clé=valeur`.

## Exemples

### Suppression d'une ressource

La requête suivante demande au serveur la suppression de la ressource `fichier.html`&nbsp;:

```http
DELETE /fichier.html HTTP/1.1
Host: example.com
```

Si la requête réussit, plusieurs [codes de statut de réponses](/fr/docs/Web/HTTP/Reference/Status#successful_responses) peuvent être renvoyés.
Une réponse {{HTTPStatus("204", "204 No Content")}} indique que la requête a réussi et qu'aucune information supplémentaire ne doit être fournie au client en retour&nbsp;:

```http
HTTP/1.1 204 No Content
Date: Wed, 04 Sep 2024 10:16:04 GMT
```

Une réponse {{HTTPStatus("200", "200 OK")}} indique que la requête réussit et que le corps de la réponse inclut une représentation décrivant le résultat&nbsp;:

```http
HTTP/1.1 200 OK
Content-Type: text/html; charset=UTF-8
Date: Fri, 21 Jun 2024 14:18:33 GMT
Content-Length: 1234

<html>
  <body>
    <h1>Fichier "fichier.html" supprimé.</h1>
  </body>
</html>
```

Une réponse {{HTTPStatus("202", "202 Accepted")}} indique que la requête a été acceptée et qu'elle réussira probablement, mais que la ressource n'a pas encore été supprimée du serveur.

```http
HTTP/1.1 202 Accepted
Date: Wed, 26 Jun 2024 12:00:00 GMT
Content-Type: text/html; charset=UTF-8
Content-Length: 1234

<html>
  <body>
    <h1>Suppression acceptée pour "fichier.html".</h1>
    <p>Voir <a href="http://example.com/tasks/123/status">la console de statut</a> pour plus de détails.</p>
  </body>
</html>
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Codes de statut HTTP&nbsp;: {{HTTPStatus("200")}}, {{HTTPStatus("202")}}, {{HTTPStatus("204")}}
- [Méthodes de requête HTTP](/fr/docs/Web/HTTP/Reference/Methods)
- [Codes de statut de réponse HTTP](/fr/docs/Web/HTTP/Reference/Status)
- [En-têtes HTTP](/fr/docs/Web/HTTP/Reference/Headers)
