---
title: En-tête ECT
short-title: ECT
slug: Web/HTTP/Reference/Headers/ECT
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

{{SeeCompatTable}}

L'{{Glossary("request header", "en-tête de requête")}} HTTP **`ECT`** est utilisé dans les [indications client](/fr/docs/Web/HTTP/Guides/Client_hints) pour indiquer le {{Glossary("effective connection type", "type de connexion effectif")}}&nbsp;: `slow-2g`, `2g`, `3g` ou `4g`.

La valeur représente le «&nbsp;profil réseau&nbsp;» qui correspond le mieux à la latence et à la bande passante de la connexion, plutôt que les mécanismes réels utilisés pour transférer les données.
Par exemple, `2g` peut être utilisé pour représenter une connexion Wi-Fi lente avec une latence élevée et une faible bande passante, tandis que `4g` peut représenter un réseau haut débit rapide à base de fibre.

Cette indication permet à un serveur de choisir quelles informations sont envoyées en fonction des grandes caractéristiques du réseau. Par exemple, un serveur peut choisir d'envoyer des versions plus petites des images et autres ressources sur des connexions moins performantes. La valeur peut aussi servir de point de départ pour déterminer quelles informations sont envoyées, ce qui est ensuite affiné à l'aide des indications {{HTTPHeader("RTT")}} et {{HTTPHeader("Downlink")}}.

> [!NOTE]
> Un serveur qui définit `ECT` dans {{HTTPHeader("Accept-CH")}} peut aussi le définir dans {{HTTPHeader("Vary")}} pour indiquer que les réponses doivent être mises en cache pour différentes valeurs de ECT.

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
ECT: <value>
```

## Directives

- `<value>`
  - : Une valeur indiquant le {{Glossary("effective connection type", "type de connexion effectif")}}. Peut être&nbsp;: `slow-2g`, `2g`, `3g` ou `4g`.

## Exemples

Le serveur doit d'abord activer la réception de l'en-tête `ECT` en envoyant l'en-tête de réponse {{HTTPHeader("Accept-CH")}} contenant `ECT`&nbsp;:

```http
Accept-CH: ECT
```

Ensuite, lors des requêtes suivantes, le client peut renvoyer un en-tête `ECT`&nbsp;:

```http
ECT: 2g
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Améliorer la confidentialité des utilisateur·ice·s et l'expérience des développeur·euse·s avec les indications client User-Agent](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints?hl=fr)
- Indications client réseau&nbsp;:
  - {{HTTPHeader("Downlink")}}
  - {{HTTPHeader("RTT")}}
  - {{HTTPHeader("Save-Data")}}
- L'en-tête {{HTTPHeader("Accept-CH")}}
- [Mise en cache HTTP Vary](/fr/docs/Web/HTTP/Guides/Caching#vary) et {{HTTPHeader("Vary")}}
- La propriété API {{DOMxRef("NetworkInformation.effectiveType")}}
