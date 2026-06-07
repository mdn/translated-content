---
title: En-tête Save-Data
short-title: Save-Data
slug: Web/HTTP/Reference/Headers/Save-Data
l10n:
  sourceCommit: 6c43d5c2607cbc84c8ec488400ebb66448992958
---

{{SeeCompatTable}}

{{Glossary("request header", "L'en-tête de requête")}} HTTP **`Save-Data`** est un [indications du client réseau](/fr/docs/Web/HTTP/Guides/Client_hints#indications_du_client_sur_le_réseau) qui indique la préférence du client pour une utilisation réduite des données.
Cela peut être pour des raisons telles que des coûts de transfert élevés, des vitesses de connexion lentes, etc.

`Save-Data` est un [indications à faible entropie](/fr/docs/Web/HTTP/Guides/Client_hints#indications_à_faible_entropie), et peut donc être envoyé par le client même s'il n'est pas demandé par le serveur utilisant un {{HTTPHeader("Accept-CH")}} en-tête de réponse.
De plus, il doit être utilisé pour réduire les données envoyées au client indépendamment des valeurs des autres indices de client qui indiquent la capacité du réseau, comme {{HTTPHeader("Downlink")}} et {{HTTPHeader("RTT")}}.

Une valeur de `On` indique que l'utilisateur·ice a explicitement choisi un mode de réduction de l'utilisation des données sur le client.
Lorsqu'elle est communiquée aux origines, cela leur permet de fournir un contenu alternatif pour réduire les données téléchargées, comme des ressources d'image et de vidéo plus petites, un balisage et un style différents, le désactivation du sondage et des mises à jour automatiques, etc.

> [!NOTE]
> La désactivation de HTTP/2 Server Push ({{RFC("7540", "Server Push", "8.2")}}) peut réduire les téléchargements de données.
> Notez que cette fonctionnalité n'est plus prise en charge par défaut dans la plupart des principaux moteurs de navigateur.

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
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted response header", "En-tête de réponse autorisé par CORS")}}
      </th>
      <td>Non</td>
    </tr>
  </tbody>
</table>

## Syntaxe

```http
Save-Data: <sd-token>
```

## Directives

- `<sd-token>`
  - : Une valeur indiquant si le client souhaite activer le mode de réduction de l'utilisation des données.
    `on` indique oui, tandis que `off` (la valeur par défaut) indique non.

## Exemples

### Utiliser `Save-Data: on`

Le message suivant demande une ressource avec l'en-tête `Save-Data` indiquant que le client choisit le mode de réduction de l'utilisation des données&nbsp;:

```http
GET /image.jpg HTTP/1.1
Host: exemple.com
Save-Data: on
```

Le serveur répond avec une réponse `200`, et l'en-tête {{HTTPHeader("Vary")}} indique que `Save-Data` a peut-être été utilisé pour créer la réponse, et les caches doivent en tenir compte pour différencier les réponses&nbsp;:

```http
HTTP/1.1 200 OK
Content-Length: 102832
Vary: Accept-Encoding, Save-Data
Cache-Control: public, max-age=31536000
Content-Type: image/jpeg

[…]
```

### Omettre `Save-Data`

Dans ce cas, le client demande la même ressource sans l'en-tête `Save-Data`&nbsp;:

```http
GET /image.jpg HTTP/1.1
Host: exemple.com
```

La réponse du serveur fournit la version complète du contenu.
L'en-tête {{HTTPHeader("Vary")}} garantit que les réponses doivent être mises en cache séparément en fonction de la valeur de l'en-tête `Save-Data`.
Cela peut garantir que l'utilisateur·ice ne reçoit pas une image de qualité inférieure à partir du cache lorsque l'en-tête `Save-Data` n'est plus présent (par exemple, après être passé du réseau cellulaire au Wi-Fi).

```http
HTTP/1.1 200 OK
Content-Length: 481770
Vary: Accept-Encoding, Save-Data
Cache-Control: public, max-age=31536000
Content-Type: image/jpeg

[…]
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La fonctionnalité `@media` CSS {{CSSxRef("@media/prefers-reduced-data")}} {{Experimental_Inline}}
- L'en-tête {{HTTPHeader("Vary")}} indique que le contenu servi varie en fonction de la valeur de `Save-Data` (voir [HTTP Caching&nbsp;: Vary](/fr/docs/Web/HTTP/Guides/Caching#vary))
- La propriété API {{DOMxRef("NetworkInformation.saveData")}}
- [Aidez vos utilisateur·ice·s à économiser des données `Save-Data` <sup>(angl.)</sup>](https://css-tricks.com/help-users-save-data/) sur css-tricks.com
- [Fournir des applications rapides et légères avec Save-Data <sup>(angl.)</sup>](https://web.dev/articles/optimizing-content-efficiency-save-data) sur web.dev
- [Améliorer la confidentialité des utilisateur·ice·s et l'expérience des développeur·euse·s avec les indications de l'agent utilisateur du client <sup>(angl.)</sup>](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) (developer.chrome.com)
