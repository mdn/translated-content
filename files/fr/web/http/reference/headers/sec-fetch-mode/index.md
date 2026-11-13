---
title: En-tête Sec-Fetch-Mode
short-title: Sec-Fetch-Mode
slug: Web/HTTP/Reference/Headers/Sec-Fetch-Mode
l10n:
  sourceCommit: 7e4e8954972d77196e4beedca4a3f8610da34dc9
---

[L'en-tête de métadonnées de requête de récupération](/fr/docs/Web/HTTP/Guides/Fetch_metadata) HTTP **`Sec-Fetch-Mode`** indique le [mode](/fr/docs/Web/API/Request/mode) de la requête.

De manière générale, cela permet à un serveur de distinguer les requêtes provenant d'un·e utilisateur·ice naviguant entre des pages HTML et les requêtes visant à charger des images et d'autres ressources.
Par exemple, cet en-tête contient `navigate` pour les requêtes de navigation de niveau supérieur, tandis que `no-cors` est utilisé pour le chargement d'une image.

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
Sec-Fetch-Mode: cors
Sec-Fetch-Mode: navigate
Sec-Fetch-Mode: no-cors
Sec-Fetch-Mode: same-origin
Sec-Fetch-Mode: websocket
```

Les serveurs doivent ignorer cet en-tête s'il contient une autre valeur.

## Directives

> [!NOTE]
> Ces directives correspondent aux valeurs de [`Request.mode`](/fr/docs/Web/API/Request/mode#valeur).

- `cors`
  - : La requête est une requête du [protocole CORS](/fr/docs/Web/HTTP/Guides/CORS).
- `navigate`
  - : La requête est initiée par la navigation entre des documents HTML.
- `no-cors`
  - : La requête est une requête no-cors (voir [`Request.mode`](/fr/docs/Web/API/Request/mode#valeur)).
- `same-origin`
  - : La requête est effectuée depuis la même origine que la ressource demandée.
- `websocket`
  - : La requête est effectuée pour établir une connexion [WebSocket](/fr/docs/Web/API/WebSockets_API).

## Exemples

### Utiliser `Sec-Fetch-Mode`

Si un·e utilisateur·ice clique sur un lien d'une page vers une autre page de la même origine, la requête résultante a les en-têtes suivants (notez que le mode est `navigate`)&nbsp;:

```http
Sec-Fetch-Dest: document
Sec-Fetch-Mode: navigate
Sec-Fetch-Site: same-origin
Sec-Fetch-User: ?1
```

Une requête inter-site générée par un élément HTML {{HTMLElement("img")}} aboutit à une requête avec les en-têtes HTTP suivants (notez que le mode est `no-cors`)&nbsp;:

```http
Sec-Fetch-Dest: image
Sec-Fetch-Mode: no-cors
Sec-Fetch-Site: cross-site
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les en-têtes de métadonnées de requête de récupération {{HTTPHeader("Sec-Fetch-Dest")}}, {{HTTPHeader("Sec-Fetch-Site")}}, {{HTTPHeader("Sec-Fetch-User")}}
- [Protéger vos ressources contre les attaques web avec les métadonnées de récupération <sup>(angl.)</sup>](https://web.dev/articles/fetch-metadata) (web.dev)
- [Terrain d'essai des en-têtes de métadonnées de requête de récupération <sup>(angl.)</sup>](https://secmetadata.appspot.com/) (secmetadata.appspot.com)
