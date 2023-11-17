---
title: Indications du client (client hints)
slug: Web/HTTP/Client_hints
---

Les **indications du client** (_client hints_ en anglais) sont un ensemble d'[en-têtes de requêtes HTTP](/fr/docs/Web/HTTP/Headers) qu'un serveur peut demander de façon proactive à un client afin de connaître les caractéristiques spécifiques à l'appareil du client et aux préférences utilisées dans l'agent utilisateur. L'ensemble des en-têtes pour ces « indications » sont listées dans [En-têtes HTTP > Indications du client](/fr/docs/Web/HTTP/Headers#client_hints).

Un serveur doit annoncer sa prise en charge de telles indications via l'en-tête [`Accept-CH`](/fr/docs/Web/HTTP/Headers/Accept-CH) qui contiendra les indications du client qui l'intéressent. Lorsqu'un client qui prend en charge cette fonctionnalité reçoit cet en-tête `Accept-CH`, il ajoute les en-têtes d'indication correspondantes aux requêtes suivantes.

Ainsi, après avoir reçu l'en-tête `Accept-CH` suivant dans une réponse. Le client pourrait ajouter les en-têtes [`Width`](/fr/docs/Web/HTTP/Headers/Width), [`Viewport-Width`](/fr/docs/Web/HTTP/Headers/Viewport-Width), et [`Downlink`](/fr/docs/Web/HTTP/Headers/Downlink) aux requêtes suivantes.

```
Accept-CH: Width, Viewport-Width, Downlink
```

Le serveur peut alors utiliser ces informations du client pour déterminer les ressources à lui envoyer.

> **Note :** Les indications du client peuvent aussi être formulées en HTML à l'aide de l'élément [`<meta>`](/fr/docs/Web/HTML/Element/meta) avec l'attribut [`http-equiv`](/fr/docs/Web/HTML/Element/meta#attr-http-equiv) :
>
> ```html
> <meta http-equiv="Accept-CH" content="Width, Viewport-Width, Downlink" />
> ```

## Client Hints Infrastructures variables

Afin d'indiquer à la gestion du cache que les [indications du client](/fr/docs/Web/HTTP/Headers#clients_hints) peuvent modifier la teneur de la réponse, il faudra utiliser l'en-tête HTTP [`Vary`](/fr/docs/Web/HTTP/Headers/Vary).

Exemple de réponse variable :

```
Vary: Accept, Width, Viewport-Width, Downlink
```

## Voir aussi

- [En-têtes HTTP pour ces indications](/fr/docs/Web/HTTP/Headers#clients_hints)
- [En-tête HTTP `Vary`](/fr/docs/Web/HTTP/Headers/Vary)
- [Infrastructure générale pour les indications du client](https://wicg.github.io/client-hints-infrastructure/)
