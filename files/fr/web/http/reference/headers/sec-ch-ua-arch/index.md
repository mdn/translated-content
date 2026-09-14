---
title: En-tête Sec-CH-UA-Arch
short-title: Sec-CH-UA-Arch
slug: Web/HTTP/Reference/Headers/Sec-CH-UA-Arch
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

{{SeeCompatTable}}{{SecureContext_Header}}

{{Glossary("request header", "L'en-tête de requête")}} HTTP **`Sec-CH-UA-Arch`** est une [indication du client](/fr/docs/Web/HTTP/Guides/Client_hints#indications_du_client_sur_lagent_utilisateur) qui contient l'architecture CPU sous-jacente de l'agent utilisateur, telle que ARM ou x86.

Cela peut être utilisé par un serveur, par exemple, pour sélectionner et proposer le format binaire correct d'un exécutable à télécharger pour un·e utilisateur·ice.

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
Sec-CH-UA-Arch: <arch>
```

### Directives

- `<arch>`
  - : Une chaîne de caractères indiquant l'architecture de la plateforme sous-jacente, telle que&nbsp;: `"x86"`, `"ARM"`, `"[arm64-v8a, armeabi-v7a, armeabi]"`.

## Exemples

### Utiliser `Sec-CH-UA-Arch`

Un serveur demande l'en-tête `Sec-CH-UA-Arch` en incluant l'en-tête {{HTTPHeader("Accept-CH")}} dans une réponse à une requête du client, en utilisant le nom de l'en-tête souhaité comme jeton&nbsp;:

```http
HTTP/1.1 200 OK
Accept-CH: Sec-CH-UA-Arch
```

Le client peut choisir de fournir l'indication et d'ajouter l'en-tête `Sec-CH-UA-Arch` aux requêtes suivantes.
Par exemple, sur un ordinateur Windows basé sur X86, le client peut ajouter l'en-tête comme indiqué ci-dessous&nbsp;:

```http
GET /my/page HTTP/1.1
Host: example.site

Sec-CH-UA: " Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"
Sec-CH-UA-Mobile: ?0
Sec-CH-UA-Platform: "Windows"
Sec-CH-UA-Arch: "x86"
```

Notez que les [en-têtes à faible entropie](/fr/docs/Web/HTTP/Guides/Client_hints#indications_à_faible_entropie) sont ajoutés à la requête même s'ils ne sont pas définis dans la réponse du serveur.

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
