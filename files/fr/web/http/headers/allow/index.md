---
title: Allow
slug: Web/HTTP/Headers/Allow
---

{{HTTPSidebar}}

L'entête **`Allow`** liste les méthodes supportées par une ressource.

Cet entête doit être envoyée si le serveur répond avec un statut {{HTTPStatus("405")}} `Method Not Allowed` pour indiquer quelles méthodes peuvent être utilisées pour la requête. Une entête `Allow` vide indique que la ressource n'autorise aucune méthode, ce qui peut erriver temporairement pour une ressource donnée, par exemple.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Type d'entête</th>
      <td>{{Glossary("Entity header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>non</td>
    </tr>
  </tbody>
</table>

## Syntaxe

```
Allow: <methodes-http>
```

## Directives

- \<methodes-http>
  - : La liste des [méthodes de requête HTTP](/fr/docs/Web/HTTP/Methods) autorisées, séparées par des virgules.

## Exemples

```
Allow: GET, POST, HEAD
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{HTTPStatus("405")}}
- {{HTTPHeader("Server")}}
