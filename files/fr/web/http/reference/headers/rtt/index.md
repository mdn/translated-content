---
title: En-tête RTT
short-title: RTT
slug: Web/HTTP/Reference/Headers/RTT
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

{{SeeCompatTable}}

L'{{Glossary("request header", "en-tête de requête")}} HTTP **`RTT`** est un [indicateur du client sur le réseau](/fr/docs/Web/HTTP/Guides/Client_hints#indications_du_client_sur_le_réseau) qui fournit le temps de trajet aller-retour approximatif au niveau de l'application, en millisecondes.
L'indicateur RTT inclut le temps de traitement côté serveur, contrairement au RTT de la couche transport.

La valeur RTT est arrondie au multiple de 25 millisecondes le plus proche pour prévenir [l'empreinte numérique](/fr/docs/Glossary/Fingerprinting), bien qu'il existe de nombreux autres mécanismes qu'un attaquant peut utiliser pour obtenir des informations similaires sur le temps aller-retour.

Cet indice permet à un serveur de choisir les informations à envoyer en fonction de la réactivité/latence du réseau. Par exemple, il peut choisir d'envoyer moins de ressources.

> [!NOTE]
> L'en-tête {{HTTPHeader("Vary")}} est utilisé dans les réponses pour indiquer qu'une ressource différente est envoyée pour chaque valeur différente de l'en-tête (voir [Mise en cache HTTP `Vary`](/fr/docs/Web/HTTP/Guides/Caching#vary)). Même si `RTT` est utilisé pour configurer les ressources envoyées envisagez de l'omettre dans l'en-tête {{HTTPHeader("Vary")}} — il est susceptible de changer fréquemment, ce qui rend la ressource effectivement non mise en cache.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Type d'en-tête</th>
      <td>
        {{Glossary("Request header", "En-tête de requête")}},
        <a href="/fr/docs/Web/HTTP/Guides/Client_hints">indicateur client réseau</a>
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden request header", "En-tête de requête interdit")}}</th>
      <td>Non</td>
    </tr>
  </tbody>
</table>

## Syntaxe

```http
RTT: <number>
```

## Directives

- `<number>`
  - : Le temps de trajet aller-retour approximatif en millisecondes, arrondi au multiple de 25 millisecondes le plus proche.

## Exemples

### Utiliser les indicateurs client RTT

Un serveur doit d'abord s'inscrire pour recevoir l'en-tête `RTT` en envoyant l'en-tête de réponse {{HTTPHeader("Accept-CH")}} contenant `RTT`.

```http
Accept-CH: RTT
```

Alors, lors des requêtes suivantes, le client peut renvoyer un en-tête `RTT`&nbsp;:

```http
RTT: 125
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les indications client du réseau {{HTTPHeader("Downlink")}}, {{HTTPHeader("ECT")}}, {{HTTPHeader("Save-Data")}}
- L'en-tête {{HTTPHeader("Accept-CH")}}
- [Mise en cache HTTP&nbsp;: Vary](/fr/docs/Web/HTTP/Guides/Caching#vary) et l'en-tête {{HTTPHeader("Vary")}}
- La propriété API {{DOMxRef("NetworkInformation.effectiveType")}}
- [Améliorer la confidentialité des utilisateur·ice·s et l'expérience des développeur·euse·s avec User-Agent Client Hints <sup>(angl.)</sup>](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) sur developer.chrome.com
