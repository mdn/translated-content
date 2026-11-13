---
title: En-tête If-Range
short-title: If-Range
slug: Web/HTTP/Reference/Headers/If-Range
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

{{Glossary("request header", "L'en-tête de requête")}} HTTP **`If-Range`** rend une requête de plage [conditionnelle](/fr/docs/Web/HTTP/Guides/Conditional_requests).
Si la condition est remplie, une [requête de plage](/fr/docs/Web/HTTP/Guides/Range_requests) est émise, et le serveur retourne une réponse {{HTTPStatus("206", "206 Partial Content")}} avec une partie (ou des parties) de la ressource dans le corps.
Si la condition n'est pas remplie, la ressource complète est renvoyée avec un statut {{HTTPStatus("200", "200 OK")}}.

Cet en-tête peut être utilisé soit avec le validateur {{HTTPHeader("Last-Modified")}}, soit avec {{HTTPHeader("ETag")}}, mais pas avec les deux.

Le cas d'utilisation le plus courant est de reprendre un téléchargement en garantissant que la ressource sur le serveur n'a pas été modifiée depuis que la dernière partie a été reçue par le client.

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
If-Range: <day-name>, <day> <month> <year> <hour>:<minute>:<second> GMT
If-Range: <etag>
```

## Directives

- `<etag>`
  - : Une balise d'entité représentant de façon unique la ressource demandée. Il s'agit d'une chaîne de caractères ASCII placée entre guillemets doubles (comme `"675af34563dc-tr34"`). Une balise d'entité faible (préfixée par `W/`) ne doit pas être utilisée dans cet en-tête.
- `<day-name>`
  - : L'un des mots `Mon`, `Tue`, `Wed`, `Thu`, `Fri`, `Sat` ou `Sun` (sensible à la casse).
- `<day>`
  - : Numéro de jour à 2 chiffres, par exemple «&nbsp;04&nbsp;» ou «&nbsp;23&nbsp;».
- `<month>`
  - : L'un des mots `Jan`, `Feb`, `Mar`, `Apr`, `May`, `Jun`, `Jul`, `Aug`, `Sep`, `Oct`, `Nov`, `Dec` (sensible à la casse).
- `<year>`
  - : Numéro d'année à 4 chiffres, par exemple «&nbsp;1990&nbsp;» ou «&nbsp;2018&nbsp;».
- `<hour>`
  - : Numéro d'heure à 2 chiffres, par exemple «&nbsp;09&nbsp;» ou «&nbsp;23&nbsp;».
- `<minute>`
  - : Numéro de minute à 2 chiffres, par exemple «&nbsp;04&nbsp;» ou «&nbsp;59&nbsp;».
- `<second>`
  - : Numéro de seconde à 2 chiffres, par exemple «&nbsp;04&nbsp;» ou «&nbsp;59&nbsp;».
- GMT
  - : Temps sur le Méridien de Greenwich. Les dates HTTP sont toujours exprimées en GMT, jamais en heure locale.

## Exemples

```http
If-Range: Wed, 21 Oct 2015 07:28:00 GMT

If-Range: "67ab43"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Le guide [des requêtes conditionnelles HTTP](/fr/docs/Web/HTTP/Guides/Conditional_requests)
- L'en-tête {{HTTPHeader("ETag")}}
- L'en-tête {{HTTPHeader("Last-Modified")}}
- Les en-têtes de requête conditionnelle {{HTTPHeader("If-Match")}}, {{HTTPHeader("If-Modified-Since")}}, {{HTTPHeader("If-Unmodified-Since")}}, {{HTTPHeader("If-None-Match")}}
- Les codes de statut de réponse {{HTTPStatus("206", "206 Partial Content")}}, {{HTTPStatus("412", "412 Precondition Failed")}}, {{HTTPStatus("416", "416 Range Not Satisfiable")}}
