---
title: En-tête Sec-CH-Prefers-Reduced-Motion
short-title: Sec-CH-Prefers-Reduced-Motion
slug: Web/HTTP/Reference/Headers/Sec-CH-Prefers-Reduced-Motion
l10n:
  sourceCommit: 6c43d5c2607cbc84c8ec488400ebb66448992958
---

{{SeeCompatTable}}{{SecureContext_Header}}

{{Glossary("request header", "L'en-tête de requête")}} HTTP **`Sec-CH-Prefers-Reduced-Motion`** est une [indication du client pour les fonctionnalités multimédias](/fr/docs/Web/HTTP/Guides/Client_hints#indications_du_client_sur_les_préférences_média_utilisateur) qui indique la préférence de l'agent utilisateur pour que les animations soient affichées avec un mouvement réduit.

Si un serveur indique à un client avec l'en-tête {{HTTPHeader("Accept-CH")}} qu'il accepte `Sec-CH-Prefers-Reduced-Motion`, le client peut alors répondre avec cet en-tête pour indiquer la préférence de l'utilisateur·ice pour un mouvement réduit. Le serveur peut envoyer au client un contenu adapté, par exemple du JavaScript ou du CSS, pour réduire le mouvement de toutes les animations présentées dans le contenu rendu ultérieurement. Cela peut inclure la réduction de la vitesse ou de l'amplitude du mouvement pour réduire l'inconfort des personnes souffrant de troubles vestibulaires.

Cet en-tête est basé sur la requête média {{CSSxRef("@media/prefers-reduced-motion", "prefers-reduced-motion")}}.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Type d'en-tête</th>
      <td>
        {{Glossary("Request header", "En-tête de requête")}},
        <a href="/fr/docs/Web/HTTP/Guides/Client_hints">Indication du client</a>
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden request header", "En-tête de requête interdit")}}</th>
      <td>Oui (préfixe <code>Sec-</code>)</td>
    </tr>
  </tbody>
</table>

## Syntaxe

```http
Sec-CH-Prefers-Reduced-Motion: <preference>
```

### Directives

- `<preference>`
  - : La préférence de l'agent utilisateur pour les animations à mouvement réduit. Cela provient souvent du paramètre correspondant dans le système d'exploitation sous-jacent. La valeur de cette directive peut être soit `no-preference`, soit `reduce`.

## Exemples

### Utiliser `Sec-CH-Prefers-Reduced-Motion`

Le client effectue une requête initiale au serveur&nbsp;:

```http
GET / HTTP/1.1
Host: example.com
```

Le serveur répond, indiquant au client avec {{HTTPHeader("Accept-CH")}} qu'il accepte `Sec-CH-Prefers-Reduced-Motion`. Dans cet exemple, {{HTTPHeader("Critical-CH")}} est également utilisé, indiquant que `Sec-CH-Prefers-Reduced-Motion` est considéré comme une [indication client critique](/fr/docs/Web/HTTP/Guides/Client_hints#indications_du_client_critiques).

```http
HTTP/1.1 200 OK
Content-Type: text/html
Accept-CH: Sec-CH-Prefers-Reduced-Motion
Vary: Sec-CH-Prefers-Reduced-Motion
Critical-CH: Sec-CH-Prefers-Reduced-Motion
```

> [!NOTE]
> Nous avons également défini `Sec-CH-Prefers-Reduced-Motion` dans l'en-tête {{HTTPHeader("Vary")}} pour indiquer au navigateur que le contenu servi varie en fonction de la valeur de cet en-tête, même si l'URL reste la même, afin que le navigateur ne se contente pas d'utiliser une réponse mise en cache existante et mette plutôt en cache cette réponse séparément. Chaque en-tête répertorié dans l'en-tête `Critical-CH` doit également être présent dans les en-têtes `Accept-CH` et `Vary`.

Le client réessaie automatiquement la requête (en raison de la spécification de `Critical-CH` ci-dessus), indiquant au serveur avec `Sec-CH-Prefers-Reduced-Motion` qu'il a une préférence utilisateur·ice pour des animations à mouvement réduit&nbsp;:

```http
GET / HTTP/1.1
Host: example.com
Sec-CH-Prefers-Reduced-Motion: "reduce"
```

Le client inclut l'en-tête dans les requêtes suivantes de la session en cours, sauf si l'en-tête `Accept-CH` change dans les réponses pour indiquer qu'il n'est plus pris en charge par le serveur.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Indications du client](/fr/docs/Web/HTTP/Guides/Client_hints)
- [L'API d'indications de l'agent utilisateur du client](/fr/docs/Web/API/User-Agent_Client_Hints_API)
- L'en-tête {{HTTPHeader("Accept-CH")}}
- La requête média CSS {{CSSxRef("@media/prefers-reduced-motion")}}
- [HTTP Caching&nbsp;: Vary](/fr/docs/Web/HTTP/Guides/Caching#vary) et l'en-tête {{HTTPHeader("Vary")}}
- [Améliorer la confidentialité des utilisateur·ice·s et l'expérience des développeur·euse·s avec les indications de l'agent utilisateur du client <sup>(angl.)</sup>](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) sur developer.chrome.com
