---
title: En-tête Sec-Fetch-User
short-title: Sec-Fetch-User
slug: Web/HTTP/Reference/Headers/Sec-Fetch-User
l10n:
  sourceCommit: 7e4e8954972d77196e4beedca4a3f8610da34dc9
---

[L'en-tête de métadonnées de requête de récupération](/fr/docs/Web/HTTP/Guides/Fetch_metadata) HTTP **`Sec-Fetch-User`** est envoyé pour les requêtes initiées par une activation de l'utilisateur·ice, et sa valeur est toujours `?1`.

Un serveur peut utiliser cet en-tête pour identifier si une requête de navigation provenant d'un document, d'une iframe, etc., a été initiée par l'utilisateur·ice.

L'en-tête n'est inclus que dans les requêtes vers des [URL potentiellement fiables](/fr/docs/Web/Security/Defenses/Secure_Contexts#url_potentiellement_digne_de_confiance).

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
Sec-Fetch-User: ?1
```

## Directives

La valeur est toujours `?1`. Lorsqu'une requête est déclenchée par autre chose qu'une activation de l'utilisateur·ice, la spécification exige que les navigateurs omettent complètement l'en-tête.

## Exemples

### Utiliser `Sec-Fetch-User`

Si un·e utilisateur·ice clique sur un lien d'une page vers une autre page de la même origine, la requête résultante a les en-têtes suivants&nbsp;:

```http
Sec-Fetch-Dest: document
Sec-Fetch-Mode: navigate
Sec-Fetch-Site: same-origin
Sec-Fetch-User: ?1
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les en-têtes de requête de métadonnées de récupération {{HTTPHeader("Sec-Fetch-Dest")}}, {{HTTPHeader("Sec-Fetch-Mode")}}, {{HTTPHeader("Sec-Fetch-Site")}}
- [Protéger vos ressources contre les attaques web avec les métadonnées de récupération <sup>(angl.)</sup>](https://web.dev/articles/fetch-metadata) (web.dev)
- [Terrain d'essai des en-têtes de métadonnées de requête de récupération <sup>(angl.)</sup>](https://secmetadata.appspot.com/) (secmetadata.appspot.com)
