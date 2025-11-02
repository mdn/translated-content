---
title: Méthode de requête PUT
short-title: PUT
slug: Web/HTTP/Reference/Methods/PUT
original_slug: Web/HTTP/Methods/PUT
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

La méthode HTTP **`PUT`** crée une nouvelle ressource ou remplace la représentation de la ressource cible par le {{Glossary("HTTP Content", "contenu")}} de la requête.

La différence entre `PUT` et {{HTTPMethod("POST")}} est que `PUT` est {{Glossary("idempotent", "idempotente")}}&nbsp;: l'appeler une fois ou plusieurs fois successivement ne change rien (il n'y a pas d'effets secondaires).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">La requête a un corps</th>
      <td>Oui</td>
    </tr>
    <tr>
      <th scope="row">La réponse de succès a un corps</th>
      <td>Non</td>
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
PUT <request-target>["?"<query>] HTTP/1.1
```

- `<request-target>`
  - : Identifie la ressource cible de la requête lorsqu'elle est combinée avec l'information fournie dans l'en-tête {{HTTPHeader("Host")}}.
    Il s'agit d'un chemin absolu (par exemple `/chemin/vers/fichier.html`) dans les requêtes vers un serveur d'origine, et d'une URL absolue dans les requêtes vers les serveurs mandataires (<i lang="en">proxies</i>) (par exemple `http://www.exemple.fr/chemin/vers/fichier.html`).
- `<query>` {{Optional_Inline}}
  - : Un fragment de requête optionnel précédé d'un point d'interrogation `?`.
    Souvent utilisé pour transmettre des informations sous la forme de paires `clé=valeur`.

## Exemple

### Création réussie d'une ressource

La requête `PUT` suivante demande la création d'une ressource à l'adresse `exemple.fr/nouveau.html` avec le contenu `<p>Nouveau fichier</p>`&nbsp;:

```http
PUT /nouveau.html HTTP/1.1
Host: exemple.fr
Content-type: text/html
Content-length: 16

<p>Nouveau fichier</p>
```

Si la ressource cible **ne possède pas** de représentation courante et que la requête `PUT` en crée une avec succès, le serveur d'origine doit envoyer une réponse {{HTTPStatus("201", "201 Created")}}&nbsp;:

```http
HTTP/1.1 201 Created
Content-Location: /nouveau.html
```

Si la ressource cible **possède déjà** une représentation et que celle-ci est modifiée avec succès selon l'état transmis dans la requête, le serveur d'origine doit envoyer soit une réponse {{HTTPStatus("200", "200 OK")}}, soit une réponse {{HTTPStatus("204", "204 No Content")}} pour indiquer la réussite de la requête&nbsp;:

```http
HTTP/1.1 204 No Content
Content-Location: /existant.html
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

Le navigateur n'utilise pas la méthode `PUT` pour les actions initiées par l'utilisateur·ice, donc la «&nbsp;compatibilité navigateur&nbsp;» ne s'applique pas.
Les développeur·euse·s peuvent définir cette méthode de requête avec {{DOMxRef("Window.fetch", "fetch()")}}.

## Voir aussi

- [Méthodes de requête HTTP](/fr/docs/Web/HTTP/Reference/Methods)
- [Codes d'état de réponse HTTP](/fr/docs/Web/HTTP/Reference/Status)
- [En-têtes HTTP](/fr/docs/Web/HTTP/Reference/Headers)
- Les statuts de réponse {{HTTPStatus("201", "201 Created")}}, {{HTTPStatus("204", "204 No Content")}}
