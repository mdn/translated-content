---
title: PUT
slug: Web/HTTP/Methods/PUT
tags:
  - HTTP
  - Reference
  - Request method
translation_of: Web/HTTP/Methods/PUT
original_slug: Web/HTTP/Méthode/PUT
browser-compat: http.methods.PUT
---
{{HTTPSidebar}}

La **méthode HTTP PUT** crée une nouvelle ressource ou remplace une représentation de la ressource ciblée par le contenu de la requête.

La différence entre `PUT` et [`POST`](/fr/docs/Web/HTTP/Methods/POST) tient au fait que `PUT` est une méthode idempotente. Une requête PUT, envoyée une ou plusieurs fois avec succès, aura toujours le même effet (il n'y a pas d'effet _de bord_). À l'inverse, des requêtes POST successives et identiques peuvent avoir des effets additionnels, ce qui peut revenir par exemple à passer plusieurs fois une commande.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">La requête a un corps</th>
      <td>Oui</td>
    </tr>
    <tr>
      <th scope="row">Une réponse de succès a un corps</th>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row"><a href="/fr/docs/Glossary/safe">Sûre</a></th>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">
        <a href="/fr/docs/Glossary/Idempotent">Idempotente</a>
      </th>
      <td>Oui</td>
    </tr>
    <tr>
      <th scope="row">
        <a href="/fr/docs/Glossary/cacheable">Peut être mise en cache</a>
      </th>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">
        Autorisée dans les <a href="/fr/docs/Learn/Forms">formulaires HTML</a>
      </th>
      <td>Non</td>
    </tr>
  </tbody>
</table>

## Syntaxe

```html
PUT /new.html HTTP/1.1
```

## Exemple

### Requête

    PUT /new.html HTTP/1.1
    Host: example.com
    Content-type: text/html
    Content-length: 16

    <p>Nouveau fichier</p>

### Réponses

Si la ressource ciblée ne possède pas de représentation courante et que la requête `PUT` en crée une avec succès, alors le serveur d'origine doit informer l'agent utilisateur en envoyant une réponse [`201`](/fr/docs/Web/HTTP/Status/201) (`Created`).

    HTTP/1.1 201 Created
    Content-Location: /new.html

Si la ressource ciblée a déjà une représentation et que cette représentation est modifiée avec succès, conformément à l'état de la représentation jointe, alors le serveur d'origine doit envoyer une réponse, que ce soit [`200`](/fr/docs/Web/HTTP/Status/200) (`OK`) ou [`204`](/fr/docs/Web/HTTP/Status/204) (`No Content`), pour indiquer la réussite de la requête.

    HTTP/1.1 204 No Content
    Content-Location: /existing.html

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`201`](/fr/docs/Web/HTTP/Status/201)
- [`204`](/fr/docs/Web/HTTP/Status/204)
