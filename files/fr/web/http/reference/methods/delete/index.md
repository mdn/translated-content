---
title: DELETE
slug: Web/HTTP/Reference/Methods/DELETE
original_slug: Web/HTTP/Methods/DELETE
l10n:
  sourceCommit: 803a7a460338dab4900fd44cf7ab569e3bf5799a
---

La méthode HTTP **`DELETE`** demande au serveur de supprimer une ressource donnée.

La méthode `DELETE` n'a pas de sémantique définie pour le corps du message, qui devrait donc être vide.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">La requête possède un corps</th>
      <td>Elle peut</td>
    </tr>
    <tr>
      <th scope="row">En cas de réussite, la réponse contient un corps</th>
      <td>Elle peut</td>
    </tr>
    <tr>
      <th scope="row">La méthode est <a href="/fr/docs/Glossary/Safe/HTTP">sûre</a></th>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">La méthode est <a href="/fr/docs/Glossary/Idempotent">idempotente</a></th>
      <td>Oui</td>
    </tr>
    <tr>
      <th scope="row">La requête peut être <a href="/fr/docs/Glossary/Cacheable">mise en cache</a></th>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">La méthode est autorisée pour les <a href="/fr/docs/Learn/Forms">formulaires HTML</a>
      </th>
      <td>Non</td>
    </tr>
  </tbody>
</table>

## Syntaxe

```http
DELETE <cible-requête>["?"<fragment-requête>] HTTP/1.1
```

- `<cible-requête>`
  - : Identifie la ressource cible de la requête lorsqu'elle est combinée avec l'information fournie par [l'en-tête `Host`](/fr/docs/Web/HTTP/Reference/Headers/Host). Il s'agit d'un chemin absolu (par exemple `/chemin/vers/fichier.html`) pour les requêtes vers un serveur originel et d'une URL absolue pour les requêtes vers les serveurs mandataires (<i lang="en">proxies</i>) (par exemple `http://www.example.com/chemin/vers/fichier.html`).
- `<fragment-requête>` {{optional_inline}}
  - : Un fragment de requête optionnel précédé d'un point d'interrogation `?`. Utilisé généralement pour fournir de l'information sous la forme de paires `clé=valeur`.

## Exemples

### Suppression d'une ressource

La requête suivante demande au serveur la suppression de la ressource `fichier.html`&nbsp;:

```http
DELETE /fichier.html HTTP/1.1
Host: example.com
```

Si la requête réussit, plusieurs [codes de statut de réponses](/fr/docs/Web/HTTP/Reference/Status#successful_responses) peuvent être renvoyés.
Une réponse [`204 No Content`](/fr/docs/Web/HTTP/Reference/Status/204) indique que la requête a réussi et qu'aucune information supplémentaire ne doit être fournie au client en retour&nbsp;:

```http
HTTP/1.1 204 No Content
Date: Wed, 04 Sep 2024 10:16:04 GMT
```

Une réponse [`200 OK`](/fr/docs/Web/HTTP/Reference/Status/200) indique que la requête réussit et que le corps de la réponse inclut une représentation décrivant le résultat&nbsp;:

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

Une réponse [`202 Accepted`](/fr/docs/Web/HTTP/Reference/Status/202) indique que la requête a été acceptée et qu'elle réussira probablement, mais que la ressource n'a pas encore été supprimée du serveur.

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

- [Les méthodes des requêtes HTTP](/fr/docs/Web/HTTP/Reference/Methods)
- [Les codes de statut des réponses HTTP](/fr/docs/Web/HTTP/Reference/Status)
  - [200](/fr/docs/Web/HTTP/Reference/Status/200)
  - [202](/fr/docs/Web/HTTP/Reference/Status/202)
  - [204](/fr/docs/Web/HTTP/Reference/Status/204)
- [Les en-têtes HTTP](/fr/docs/Web/HTTP/Reference/Headers)
