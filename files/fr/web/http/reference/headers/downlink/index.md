---
title: En-tête Downlink
short-title: Downlink
slug: Web/HTTP/Reference/Headers/Downlink
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

{{SeeCompatTable}}

L'{{Glossary("request header", "en-tête de requête")}} HTTP **`Downlink`** est utilisé dans les [indications client](/fr/docs/Web/HTTP/Guides/Client_hints) pour fournir la bande passante approximative en <abbr>Mbps</abbr> (mégabits par seconde) de la connexion du client au serveur.

Cette indication permet à un serveur de choisir quelles informations sont envoyées en fonction de la bande passante du réseau.
Par exemple, un serveur peut choisir d'envoyer des versions plus petites des images et autres ressources sur des réseaux à faible bande passante.

> [!NOTE]
> L'en-tête {{HTTPHeader("Vary")}} est utilisé dans les réponses pour indiquer qu'une ressource différente est envoyée pour chaque valeur différente de l'en-tête (voir [Mise en cache HTTP Vary](/fr/docs/Web/HTTP/Guides/Caching#vary)).
> Même si `Downlink` est utilisé pour configurer les ressources envoyées, il est conseillé de ne pas l'inclure dans l'en-tête {{HTTPHeader("Vary")}} — il est susceptible de changer souvent, ce qui rend la ressource impossible à mettre en cache.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Type d'en-tête</th>
      <td>
        {{Glossary("Request header", "En-tête de requête")}},
        <a href="/fr/docs/Web/HTTP/Guides/Client_hints">indication client</a>
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
Downlink: <number>
```

## Directives

- `<number>`
  - : Débit descendant en Mbps, arrondi à 25 kilobits près.
    Le débit descendant peut être utilisé comme une variable de {{Glossary("fingerprinting", "prise d'empreinte")}}, donc les valeurs de l'en-tête sont volontairement grossières pour réduire le risque d'utilisation abusive.

## Exemples

Le serveur doit d'abord activer la réception de l'en-tête `Downlink` en envoyant l'en-tête de réponse {{HTTPHeader("Accept-CH")}} contenant `Downlink`&nbsp;:

```http
Accept-CH: Downlink
```

Ensuite, lors des requêtes suivantes, le client peut renvoyer un en-tête `Downlink`&nbsp;:

```http
Downlink: 1.7
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Améliorer la confidentialité des utilisateur·ice·s et l'expérience des développeur·euse·s avec les indications client User-Agent](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints?hl=fr)
- Indications client réseau&nbsp;:
  - {{HTTPHeader("RTT")}}
  - {{HTTPHeader("ECT")}}
  - {{HTTPHeader("Save-Data")}}
- L'en-tête {{HTTPHeader("Accept-CH")}}
- [Mise en cache HTTP Vary](/fr/docs/Web/HTTP/Guides/Caching#vary) et {{HTTPHeader("Vary")}}
- La propriété API {{DOMxRef("NetworkInformation.effectiveType")}}
