---
title: En-tête Sec-CH-Prefers-Reduced-Transparency
short-title: Sec-CH-Prefers-Reduced-Transparency
slug: Web/HTTP/Reference/Headers/Sec-CH-Prefers-Reduced-Transparency
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

{{SeeCompatTable}}{{SecureContext_Header}}

{{Glossary("request header", "L'en-tête de requête")}} HTTP **`Sec-CH-Prefers-Reduced-Transparency`** est une [indication client](/fr/docs/Web/HTTP/Guides/Client_hints#indications_du_client_sur_les_préférences_média_utilisateur) qui indique la préférence de l'agent utilisateur pour une transparence réduite.

Si un serveur signale à un client avec l'en-tête {{HTTPHeader("Accept-CH")}} qu'il accepte `Sec-CH-Prefers-Reduced-Transparency`, le client peut alors répondre avec cet en-tête pour indiquer la préférence de l'utilisateur·ice pour une transparence réduite. Le serveur peut envoyer au client un contenu adapté en conséquence — par exemple, du CSS ou des images — pour réduire la transparence du contenu.

Cet en-tête est basé sur la requête média {{CSSxRef("@media/prefers-reduced-transparency", "prefers-reduced-transparency")}}.

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
Sec-CH-Prefers-Reduced-Transparency: <preference>
```

### Directives

- `<preference>`
  - : La préférence de l'agent utilisateur pour une transparence réduite. Cela provient souvent du paramètre correspondant dans le système d'exploitation sous-jacent. La valeur de cette directive peut être soit `no-preference`, soit `reduce`.

## Exemples

### Utiliser `Sec-CH-Prefers-Reduced-Transparency`

Le client effectue une requête initiale au serveur&nbsp;:

```http
GET / HTTP/1.1
Host: example.com
```

Le serveur répond, indiquant au client avec {{HTTPHeader("Accept-CH")}} qu'il accepte `Sec-CH-Prefers-Reduced-Transparency`. Dans cet exemple, {{HTTPHeader("Critical-CH")}} est également utilisé, indiquant que `Sec-CH-Prefers-Reduced-Transparency` est considéré comme une [indication client critique](/fr/docs/Web/HTTP/Guides/Client_hints#indications_du_client_critiques).

```http
HTTP/1.1 200 OK
Content-Type: text/html
Accept-CH: Sec-CH-Prefers-Reduced-Transparency
Vary: Sec-CH-Prefers-Reduced-Transparency
Critical-CH: Sec-CH-Prefers-Reduced-Transparency
```

> [!NOTE]
> Nous avons également défini `Sec-CH-Prefers-Reduced-Transparency` dans l'en-tête {{HTTPHeader("Vary")}}, pour indiquer au navigateur que le contenu servi varie en fonction de la valeur de cet en-tête — même si l'URL reste la même — afin que le navigateur n'utilise pas simplement une réponse mise en cache existante et mette plutôt en cache cette réponse séparément. Chaque en-tête répertorié dans l'en-tête `Critical-CH` doit également être présent dans les en-têtes `Accept-CH` et `Vary`.

Le client réessaie automatiquement la requête (en raison de la spécification de `Critical-CH` ci-dessus), indiquant au serveur avec `Sec-CH-Prefers-Reduced-Transparency` qu'il a une préférence utilisateur·ice pour une transparence réduite&nbsp;:

```http
GET / HTTP/1.1
Host: example.com
Sec-CH-Prefers-Reduced-Transparency: "reduce"
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
- [HTTP Caching&nbsp;: Vary](/fr/docs/Web/HTTP/Guides/Caching#vary) et l'en-tête {{HTTPHeader("Vary")}}
- [Améliorer la confidentialité des utilisateur·ice·s et l'expérience des développeur·euse·s avec les indications de l'agent utilisateur du client <sup>(angl.)</sup>](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) sur developer.chrome.com
