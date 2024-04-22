---
title: Expires
slug: Web/HTTP/Headers/Expires
---

{{HTTPSidebar}}

Le header **`Expires`** contient la date/heure après laquelle la réponse est considérée comme dépréciée.

Les dates invalides, telles que la valeur 0, représentent une date dans le passé et signifient que la ressource est expirée.

Si un header {{HTTPHeader("Cache-Control")}} contient une directive "max-age" ou "s-max-age" dans la réponse, le header `Expires` sera ignoré.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
      <td>{{Glossary("Response header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>no</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("Simple response header", "CORS-safelisted response-header")}}
      </th>
      <td>yes</td>
    </tr>
  </tbody>
</table>

## Syntaxe

```
Expires: <http-date>
```

## Directives

- \<http-date>
  - : An HTTP-date timestamp.

## Exemples

```
Expires: Wed, 21 Oct 2015 07:28:00 GMT
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{HTTPHeader("Cache-Control")}}
- {{HTTPHeader("Age")}}
