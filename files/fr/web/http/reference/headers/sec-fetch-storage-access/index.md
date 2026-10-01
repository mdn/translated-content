---
title: En-tête Sec-Fetch-Storage-Access
short-title: Sec-Fetch-Storage-Access
slug: Web/HTTP/Reference/Headers/Sec-Fetch-Storage-Access
l10n:
  sourceCommit: e936e7271df947f25184a5ba8a21445bbd4d056c
---

{{Glossary("fetch metadata request header", "L'en-tête de métadonnées de requête de récupération")}} HTTP **`Sec-Fetch-Storage-Access`** fournit le «&nbsp;statut d'accès au stockage&nbsp;» pour le contexte de récupération actuel.

Le statut peut indiquer que l'autorisation d'accéder aux [cookies tiers non partitionnés](/fr/docs/Web/Privacy/Guides/State_Partitioning#partitionner_létat)&nbsp;:

- N'est pas accordé.
- A été accordé mais pas activé pour le contexte de requête actuel.
- A été accordé pour le contenu de la requête actuel, et les cookies ont été envoyés avec la requête.

Les navigateurs compatibles doivent inclure cet en-tête dans les requêtes inter-sites lorsque le mode d'identification de la requête est [`include`](/fr/docs/Web/API/Request/credentials#include).
L'en-tête ne doit pas être envoyé avec des requêtes du même site (puisque ces requêtes ne peuvent pas impliquer de cookies inter-sites), ou si le [mode d'identification](/fr/docs/Web/API/Request/credentials) de la requête est «&nbsp;omit&nbsp;».
La ressource demandée doit également avoir une [origine potentiellement fiable](/fr/docs/Web/Security/Defenses/Secure_Contexts#origines_potentiellement_dignes_de_confiance).

Si l'autorisation d'accès au stockage a été accordée mais pas activée, un serveur peut répondre avec {{HTTPHeader("Activate-Storage-Access")}} pour demander l'activation de l'autorisation pour le contexte.
Pour plus d'informations, voir [En-têtes d'accès au stockage](/fr/docs/Web/API/Storage_Access_API#les_en-têtes_daccès_au_stockage) dans la vue d'ensemble de [l'API d'accès au stockage](/fr/docs/Web/API/Storage_Access_API).

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
Sec-Fetch-Storage-Access: none
Sec-Fetch-Storage-Access: inactive
Sec-Fetch-Storage-Access: active
```

## Directives

Une valeur indiquant le statut d'accès au stockage pour le contexte de récupération actuel.
Les valeurs suivantes sont autorisées (les serveurs doivent ignorer les autres valeurs)&nbsp;:

- `none`
  - : Le contexte ne dispose pas de l'autorisation `storage-access` ni d'accès aux cookies non partitionnés.
- `inactive`
  - : Le contexte dispose de l'autorisation `storage-access`, mais n'a pas choisi de l'utiliser (et ne dispose pas d'un accès aux cookies non partitionnés par d'autres moyens).
    Si cette valeur est définie, l'en-tête de requête {{HTTPHeader("Origin")}} doit également être défini.
- `active`
  - : Le contexte dispose d'un accès aux cookies non partitionnés.
    Si cette valeur est définie, l'en-tête de requête {{HTTPHeader("Origin")}} doit également être défini.

## Exemples

Voir les [exemples](/fr/docs/Web/HTTP/Reference/Headers/Activate-Storage-Access#exemples) dans {{HTTPHeader("Activate-Storage-Access")}}.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'en-tête {{HTTPHeader("Activate-Storage-Access")}}
- [Les en-têtes d'accès au stockage](/fr/docs/Web/API/Storage_Access_API#storage_access_headers) dans _l'API Storage Access_
- [Les séquences d'en-têtes d'accès au stockage](/fr/docs/Web/API/Storage_Access_API#storage_access_header_sequences) dans _l'API Storage Access_
- [Utiliser l'API Storage Access](/fr/docs/Web/API/Storage_Access_API/Using)
- [Terrain d'essai des en-têtes de métadonnées de requête de récupération <sup>(angl.)</sup>](https://secmetadata.appspot.com/) (secmetadata.appspot.com)
