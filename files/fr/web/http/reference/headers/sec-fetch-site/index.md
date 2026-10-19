---
title: En-tête Sec-Fetch-Site
short-title: Sec-Fetch-Site
slug: Web/HTTP/Reference/Headers/Sec-Fetch-Site
l10n:
  sourceCommit: 7e4e8954972d77196e4beedca4a3f8610da34dc9
---

[L'en-tête de métadonnées de requête de récupération](/fr/docs/Web/HTTP/Guides/Fetch_metadata) HTTP **`Sec-Fetch-Site`** indique la relation entre l'origine de l'initiateur de la requête et l'origine de la ressource demandée.

En d'autres termes, cet en-tête indique à un serveur si une requête pour une ressource provient de la même origine, du même site, d'un site différent ou s'il s'agit d'une requête «&nbsp;initiée par l'utilisateur·ice&nbsp;». Le serveur peut alors utiliser cette information pour décider si la requête doit être autorisée.

Les requêtes de même origine sont généralement autorisées par défaut, mais ce qui se passe pour les requêtes provenant d'autres origines peut dépendre davantage de la ressource demandée ou des informations contenues dans un autre en-tête de métadonnées de requête de récupération. Par défaut, les requêtes non acceptées doivent être rejetées avec un code de réponse {{HTTPStatus("403")}}.

L'en-tête n'est inclus que dans les requêtes vers des [URL potentiellement fiables](/fr/docs/Web/Security/Defenses/Secure_Contexts#url_potentiellement_fiables).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Type d'en-tête</th>
      <td>{{Glossary("Fetch Metadata Request Header", "En-tête de métadonnées de requête de récupération")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden request header", "En-tête de requête interdit")}}</th>
      <td>Oui (préfixe <code>Sec-</code>)</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted request header", "En-tête de requête autorisé par CORS")}}
      </th>
      <td>Non</td>
    </tr>
  </tbody>
</table>

## Syntaxe

```http
Sec-Fetch-Site: cross-site
Sec-Fetch-Site: same-origin
Sec-Fetch-Site: same-site
Sec-Fetch-Site: none
```

## Directives

- `cross-site`
  - : L'initiateur de la requête et le serveur hébergeant la ressource appartiennent à des sites différents (c'est-à-dire une requête de «&nbsp;potentially-evil.com&nbsp;» pour une ressource sur «&nbsp;example.com&nbsp;»).
- `same-origin`
  - : L'initiateur de la requête et le serveur hébergeant la ressource ont la même {{Glossary("origin", "origine")}} (même schéma, hôte et port).
- `same-site`
  - : L'initiateur de la requête et le serveur hébergeant la ressource appartiennent au même {{Glossary("site")}}, y compris le schéma.
- `none`
  - : Cette requête est une opération initiée par l'utilisateur·ice. Par exemple&nbsp;: saisir une URL dans la barre d'adresse, ouvrir un favori ou faire glisser un fichier dans la fenêtre du navigateur.

## Exemples

Une requête de récupération vers `https://monsite.example/toto.json` provenant d'une page Web située à l'adresse `https://monsite.example` (sur le même port) est une requête de même origine.
Le navigateur génère l'en-tête `Sec-Fetch-Site: same-origin` comme indiqué ci-dessous, et le serveur autorise généralement la requête&nbsp;:

```http
GET /toto.json
Sec-Fetch-Dest: empty
Sec-Fetch-Mode: cors
Sec-Fetch-Site: same-origin
```

Une requête de récupération vers la même URL depuis un autre site, par exemple `potentially-evil.com`, entraîne la génération par le navigateur d'un en-tête différent (par exemple, `Sec-Fetch-Site: cross-site`), que le serveur peut choisir d'accepter ou de rejeter&nbsp;:

```http
GET /toto.json
Sec-Fetch-Dest: empty
Sec-Fetch-Mode: cors
Sec-Fetch-Site: cross-site
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les en-têtes de métadonnées de requête de récupération {{HTTPHeader("Sec-Fetch-Mode")}}, {{HTTPHeader("Sec-Fetch-User")}}, {{HTTPHeader("Sec-Fetch-Dest")}}
- [Protéger vos ressources contre les attaques web avec les métadonnées de récupération <sup>(angl.)</sup>](https://web.dev/articles/fetch-metadata) (web.dev)
- [Terrain d'essai des en-têtes de métadonnées de requête de récupération <sup>(angl.)</sup>](https://secmetadata.appspot.com/) (secmetadata.appspot.com)
