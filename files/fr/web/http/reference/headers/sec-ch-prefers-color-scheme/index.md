---
title: En-tête Sec-CH-Prefers-Color-Scheme
short-title: Sec-CH-Prefers-Color-Scheme
slug: Web/HTTP/Reference/Headers/Sec-CH-Prefers-Color-Scheme
l10n:
  sourceCommit: 6c43d5c2607cbc84c8ec488400ebb66448992958
---

{{SeeCompatTable}}{{SecureContext_Header}}

{{Glossary("request header", "L'en-tête de requête")}} HTTP **`Sec-CH-Prefers-Color-Scheme`** est une [indication du client pour les fonctionnalités multimédias](/fr/docs/Web/HTTP/Guides/Client_hints#indications_du_client_sur_les_préférences_média_utilisateur) qui fournit la préférence de l'utilisateur·ice pour les thèmes de couleur clairs ou sombres.
Un·e utilisateur·ice indique sa préférence avec un paramètre du système d'exploitation (par exemple, mode clair ou sombre) ou un paramètre de l'agent utilisateur.

Si un serveur indique à un client avec l'en-tête {{HTTPHeader("Accept-CH")}} qu'il accepte `Sec-CH-Prefers-Color-Scheme`, le client peut alors répondre avec cet en-tête pour indiquer la préférence de l'utilisateur·ice pour un schéma de couleurs spécifique. Le serveur peut envoyer au client un contenu adapté, y compris des images ou du CSS, pour afficher un mode clair ou sombre pour le contenu rendu ultérieurement.

Cet en-tête est basé sur la requête média {{CSSxRef("@media/prefers-color-scheme", "prefers-color-scheme")}}.

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

## Notes d'utilisation

L'en-tête **`Sec-CH-Prefers-Color-Scheme`** permet aux sites d'obtenir la préférence de l'utilisateur·ice pour le schéma de couleurs au moment de la requête&nbsp;; ils peuvent ensuite choisir de fournir le CSS pertinent pour la préférence de l'utilisateur·ice en ligne, pour des raisons de performance. Si le serveur intègre le CSS en ligne, il peut vouloir inclure un en-tête de réponse {{HTTPHeader("Vary")}} définissant `Sec-CH-Prefers-Color-Scheme`, pour indiquer que la réponse est adaptée à un schéma de couleurs particulier.

Si la performance n'est pas une considération critique dans ce contexte, vous pouvez plutôt gérer la préférence de l'utilisateur·ice pour le schéma de couleurs en utilisant la requête média {{CSSxRef("@media/prefers-color-scheme")}} et/ou l'API {{DOMxRef("Window.matchMedia()")}}.

`Sec-CH-Prefers-Color-Scheme` est une indication à haute entropie, donc le site doit s'inscrire pour la recevoir en envoyant un en-tête de réponse {{HTTPHeader("Accept-CH")}} approprié. Un agent utilisateur peut intentionnellement omettre l'en-tête `Sec-CH-Prefers-Color-Scheme` pour préserver la vie privée de l'utilisateur·ice, car la préférence de l'utilisateur·ice pourrait, en théorie, être utilisée pour le fingerprinting.

## Syntaxe

```http
Sec-CH-Prefers-Color-Scheme: <preference>
```

### Directives

- `<preference>`
  - : Une chaîne de caractères indiquant la préférence de l'agent utilisateur pour un contenu clair ou sombre&nbsp;: `"light"` ou `"dark"`.
    La valeur peut provenir d'un paramètre correspondant dans le système d'exploitation sous-jacent.

## Exemples

### Utiliser `Sec-CH-Prefers-Color-Scheme`

Le client effectue une requête initiale au serveur&nbsp;:

```http
GET / HTTP/1.1
Host: example.com
```

Le serveur répond, indiquant au client avec {{HTTPHeader("Accept-CH")}} qu'il accepte `Sec-CH-Prefers-Color-Scheme`. Dans cet exemple, {{HTTPHeader("Critical-CH")}} est également utilisé, indiquant que `Sec-CH-Prefers-Color-Scheme` est considéré comme une [indication client critique](/fr/docs/Web/HTTP/Guides/Client_hints#indications_du_client_critiques).

```http
HTTP/1.1 200 OK
Content-Type: text/html
Accept-CH: Sec-CH-Prefers-Color-Scheme
Vary: Sec-CH-Prefers-Color-Scheme
Critical-CH: Sec-CH-Prefers-Color-Scheme
```

> [!NOTE]
> Nous avons également défini `Sec-CH-Prefers-Color-Scheme` dans l'en-tête {{HTTPHeader("Vary")}} pour indiquer que les réponses doivent être mises en cache séparément en fonction de la valeur de cet en-tête (même si l'URL reste la même).
> Chaque en-tête répertorié dans l'en-tête `Critical-CH` doit également être présent dans les en-têtes `Accept-CH` et `Vary`.

Le client réessaie automatiquement la requête (en raison de la spécification de `Critical-CH` ci-dessus), indiquant au serveur avec `Sec-CH-Prefers-Color-Scheme` qu'il a une préférence utilisateur·ice pour un contenu sombre&nbsp;:

```http
GET / HTTP/1.1
Host: example.com
Sec-CH-Prefers-Color-Scheme: "dark"
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
- La requête média CSS {{CSSxRef("@media/prefers-color-scheme")}}
- [Améliorer la confidentialité des utilisateur·ice·s et l'expérience des développeur·euse·s avec les indications de l'agent utilisateur du client <sup>(angl.)</sup>](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) sur developer.chrome.com
