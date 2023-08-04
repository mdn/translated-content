---
title: Vary
slug: Web/HTTP/Headers/Vary
---

{{HTTPSidebar}}

L'en-tête HTTP **`Vary`** détermine comment les en-têtes de requêtes futures sont associés pour décider si une réponse en cache peut être réutilisée plutôt que de solliciter à nouveau le serveur d'origine. Il est utilisé par le serveur pour indiquer quels en-têtes sont utilisés pour représenter une resource dans un algorithme de [négociation de contenu](/fr/docs/Web/HTTP/Content_negotiation).

L'en-tête `Vary` doit être renseigné de manière identique sur une réponse {{HTTPStatus("304")}} `Not Modified` à ce qu'elle aurait été sur la réponse {{HTTPStatus("200")}} `OK` correspondante.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Type d'en-tête</th>
      <td>{{Glossary("Response header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>non</td>
    </tr>
  </tbody>
</table>

## Syntaxe

```
Vary: *
Vary: <header-name>, <header-name>, ...
```

## Directives

- \*
  - : Chaque requête pour une URL doit être traitée comme une requête unique à ne pas mettre en cache. Une meilleure manière de l'indiquer est d'utiliser {{HTTPHeader("Cache-Control")}}`: private`, qui est plus clair à lire et signale aussi que l'objet ne doit jamais être mis en cache.
- \<header-name>
  - : Une liste séparé par des virgules de noms d'en-tête à prendre en compte lorsqu'il est décidé si une réponse en cache peut être utilisée ou non.

## Examples

### Service dynamique

Lorsque l'en-tête `Vary: User-Agent` est utilisée, les serveurs de cache doivent prendre en compte l'agent de l'utilisateur pour décider de servir la page depuis le cache ou non. Par exemple, si vous servez du contenu différent pour les utilisateurs sur mobile, il aide à éviter qu'une version ordinateur de votre site ne soit distribuée à un utilisateur sur mobile. Il peut aider google et d'autres moteurs de recherche à prendre en compte la version pour mobile d'un site, ainsi que de signaler que le [Cloaking](https://en.wikipedia.org/wiki/Cloaking) n'est pas intentionel.

```
Vary: User-Agent
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{HTTPHeader("Cache-Control")}}
- {{HTTPHeader("User-Agent")}}
- [Best Practices for Using the Vary Header – fastly.com](https://www.fastly.com/blog/best-practices-for-using-the-vary-header)
