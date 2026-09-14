---
title: En-tête From
short-title: From
slug: Web/HTTP/Reference/Headers/From
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

L'{{Glossary("request header", "en-tête de requête")}} HTTP **`From`** contient une adresse e-mail Internet d'un·e administrateur·ice qui contrôle un agent utilisateur automatisé.

Si vous exécutez un agent utilisateur robotisé (un robot d'indexation web, par exemple), l'en-tête `From` doit être envoyé dans les requêtes afin que vous puissiez être contacté·e en cas de problème, comme un robot envoyant des requêtes excessives, indésirables ou invalides.

> [!WARNING]
> Vous ne devez pas utiliser l'en-tête `From` pour le contrôle d'accès ou l'authentification.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Type d'en-tête</th>
      <td>{{Glossary("Request header", "En-tête de requête")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden request header", "En-tête de requête interdit")}}</th>
      <td>Non</td>
    </tr>
  </tbody>
</table>

## Syntaxe

```http
From: <email>
```

## Directives

- `<email>`
  - : Une adresse e-mail exploitable par une machine.

## Exemples

```http
From: webmaster@example.org
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'en-tête {{HTTPHeader("Host")}}
