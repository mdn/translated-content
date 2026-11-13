---
title: En-tête Cookie
short-title: Cookie
slug: Web/HTTP/Reference/Headers/Cookie
l10n:
  sourceCommit: efc22e586d21b91311f504a99c54437bbbbe96ef
---

{{Glossary("request header", "L'en-tête de requête")}} HTTP **`Cookie`** contient les [cookies HTTP](/fr/docs/Web/HTTP/Guides/Cookies) stockés et associés au serveur (c'est-à-dire, précédemment envoyés par le serveur avec l'en-tête {{HTTPHeader("Set-Cookie")}} ou définis en JavaScript avec {{DOMxRef("Document.cookie")}}).

L'en-tête `Cookie` est optionnel et peut être omis si, par exemple, les paramètres de confidentialité du navigateur bloquent les cookies.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Type d'en-tête</th>
      <td>{{Glossary("Request header", "En-tête de requête")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden request header", "En-tête de requête interdit")}}</th>
      <td>Oui</td>
    </tr>
  </tbody>
</table>

## Syntaxe

```http
Cookie: <cookie-list>
Cookie: name=value
Cookie: name=value; name2=value2; name3=value3
```

## Directives

- `<cookie-list>`
  - : Une liste de paires nom-valeur sous la forme `<cookie-name>=<cookie-value>`.
    Les paires de la liste sont séparées par un point-virgule suivi d'un espace.

## Exemples

### Envoyer des cookies

```http
Cookie: PHPSESSID=298zf09hf012fh2; csrftoken=u32t4o3tb3gg43; _gat=1
```

### Cookies portant le même nom

Plusieurs cookies peuvent porter le même nom s'ils ont été définis avec des attributs `Path` ou `Domain` différents.
Ceci inclut le cas où un cookie a été défini avec un attribut `Domain` et l'autre sans, même s'ils s'appliquent au même hôte. Si plusieurs correspondent à une requête, le navigateur peut tous les inclure dans l'en-tête `Cookie`.

Les cookies partitionnés sont également indexés sur le site de premier niveau, de sorte que les cookies peuvent porter le même nom s'ils sont définis par le même hôte dans deux contextes d'intégration différents. Voir [CHIPS](/fr/docs/Web/Privacy/Guides/Third-party_cookies/Partitioned_cookies).

Par exemple, supposons que des réponses distinctes du même hôte définissent ces cookies&nbsp;:

```http
Set-Cookie: theme=light; Path=/
Set-Cookie: theme=dark; Path=/docs
```

Une requête vers `/docs` peut contenir les deux&nbsp;:

```http
Cookie: theme=dark; theme=light
```

L'en-tête `Cookie` n'inclut pas les attributs des cookies, et les entrées de cookies ne sont pas ordonnées, de sorte que le serveur ne peut pas déterminer leurs chemins ou domaines à partir de l'en-tête seul.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Le code de statut {{HTTPStatus("413", "413 Content Too Large")}}
- L'en-tête {{HTTPHeader("Set-Cookie")}}
- La propriété API {{DOMxRef("Document.cookie")}}
