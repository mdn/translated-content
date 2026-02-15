---
title: En-tête Critical-CH
short-title: Critical-CH
slug: Web/HTTP/Reference/Headers/Critical-CH
l10n:
  sourceCommit: 7f6778934020a9b5b82b4dd8ca79a99bc9950c2a
---

{{SeeCompatTable}}{{SecureContext_Header}}

L'{{Glossary("response header", "en-tête de réponse")}} HTTP **`Critical-CH`** est utilisé avec {{HTTPHeader("Accept-CH")}} pour indiquer les [indications client](/fr/docs/Web/HTTP/Guides/Client_hints) acceptées qui sont [critiques](/fr/docs/Web/HTTP/Guides/Client_hints#indications_du_client_critiques).

Les agents utilisateur recevant une réponse avec `Critical-CH` doivent vérifier si les en-têtes critiques indiqués ont été envoyés dans la requête d'origine. Si ce n'est pas le cas, l'agent utilisateur relancera la requête avec les en-têtes critiques au lieu d'afficher la page. Cette approche garantit que les préférences client définies avec des indications critiques sont toujours utilisées, même si elles ne sont pas incluses dans la première requête ou après un changement de configuration du serveur.

Chaque en-tête listé dans l'en-tête `Critical-CH` doit aussi être présent dans les en-têtes `Accept-CH` et `Vary`.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Type d'en-tête</th>
      <td>
        {{Glossary("Response header", "En-tête de réponse")}}
      </td>
    </tr>
  </tbody>
</table>

## Syntaxe

```http
Critical-CH: <ch-list>
```

### Directives

- `<ch-list>`
  - : Une liste d'un ou plusieurs en-têtes d'indications client, séparés par des virgules, que le serveur considère comme des indications critiques.

## Exemples

Le client effectue une première requête vers le serveur&nbsp;:

```http
GET / HTTP/1.1
Host: exemple.com
```

Le serveur répond, en indiquant via {{HTTPHeader("Accept-CH")}} qu'il accepte {{HTTPHeader("Sec-CH-Prefers-Reduced-Motion")}}. Dans cet exemple, `Critical-CH` est aussi utilisé pour préciser que `Sec-CH-Prefers-Reduced-Motion` est considéré comme une indication critique.

```http
HTTP/1.1 200 OK
Content-Type: text/html
Accept-CH: Sec-CH-Prefers-Reduced-Motion
Vary: Sec-CH-Prefers-Reduced-Motion
Critical-CH: Sec-CH-Prefers-Reduced-Motion
```

> [!NOTE]
> Nous avons précisé `Sec-CH-Prefers-Reduced-Motion` dans l'en-tête {{HTTPHeader("Vary")}} pour indiquer que les réponses doivent être mises en cache séparément selon la valeur de cet en-tête (même si l'URL reste la même).
> Chaque en-tête listé dans l'en-tête `Critical-CH` doit aussi être présent dans les en-têtes `Accept-CH` et `Vary`.

Le client relance automatiquement la requête (du fait de la présence de `Critical-CH` ci-dessus), en indiquant au serveur via `Sec-CH-Prefers-Reduced-Motion` qu'il a une préférence utilisateur pour les animations à mouvement réduit&nbsp;:

```http
GET / HTTP/1.1
Host: exemple.com
Sec-CH-Prefers-Reduced-Motion: "reduce"
```

Le client inclura cet en-tête dans les requêtes suivantes de la session courante, sauf si `Accept-CH` change dans les réponses pour indiquer qu'il n'est plus pris en charge par le serveur.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Indications client](/fr/docs/Web/HTTP/Guides/Client_hints)
- [L'API User-Agent Client Hints](/fr/docs/Web/API/User-Agent_Client_Hints_API)
- [Améliorer la confidentialité et l'expérience développeur avec User-Agent Client Hints <sup>(angl.)</sup>](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints)
- L'en-tête {{HTTPHeader("Accept-CH")}}
- [Mise en cache HTTP&nbsp;: Vary](/fr/docs/Web/HTTP/Guides/Caching#vary) et {{HTTPHeader("Vary")}}
- La propriété API {{DOMxRef("PerformanceNavigationTiming.criticalCHRestart")}}
