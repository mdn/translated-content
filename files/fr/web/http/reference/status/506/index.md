---
title: 506 Variant Also Negotiates
slug: Web/HTTP/Reference/Status/506
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

Le code de statut de [réponse d'erreur serveur](/fr/docs/Web/HTTP/Reference/Status#réponses_derreur_côté_serveur) HTTP **`506 Variant Also Negotiates`** est retourné lors de la négociation de contenu lorsqu'il y a une boucle récursive dans le processus de sélection d'une ressource.

La [négociation de contenu pilotée par l'agent](/fr/docs/Web/HTTP/Guides/Content_negotiation#négociation_menée_par_lagent) permet à un client et un serveur de décider ensemble de la meilleure variante d'une ressource donnée lorsque le serveur dispose de plusieurs variantes.
Un serveur envoie un code d'état `506` en raison d'une mauvaise configuration du serveur qui entraîne des références circulaires lors de la création des réponses.

Le manque de normalisation sur la façon dont les clients choisissent automatiquement parmi les réponses, et les allers-retours supplémentaires qui ralentissent l'interaction client-serveur, font que ce mécanisme est rarement utilisé.
La [négociation de contenu pilotée par le serveur](/fr/docs/Web/HTTP/Guides/Content_negotiation#négociation_de_contenu_menée_par_le_serveur) est beaucoup plus courante, où un serveur choisit directement la ressource la plus appropriée pour le client en fonction des en-têtes de la requête ({{HTTPHeader("Accept-Language")}}, {{HTTPHeader("Accept")}}, etc.).

## Statut

```http
506 Variant Also Negotiates
```

## Exemples

### Ressource avec variantes

Dans l'exemple suivant, un client demande une page en langue `fr` en utilisant l'en-tête {{HTTPHeader("Accept-Language")}}.
Cela peut être réalisé avec curl&nbsp;:

```bash
curl  -H "Negotiate: trans" -H "Accept-Language: fr;" http://exemple.com/index
```

Cela produit la requête suivante&nbsp;:

```http
GET /index HTTP/1.1
Host: exemple.com
User-Agent: curl/8.7.1
Accept: */*
Negotiate: trans
Accept-Language: fr
```

En raison d'une mauvaise configuration du serveur, la réponse variante pour `fr` pointe vers une [carte de type <sup>(angl.)</sup>](https://httpd.apache.org/docs/trunk/mod/mod_negotiation.html#typemaps) qui provoque elle-même une négociation transparente.
Le serveur peut détecter cette condition par la présence d'un en-tête `TCN` dans une réponse de choix avant qu'elle ne soit envoyée&nbsp;:

```http
HTTP/1.1 506 Variant Also Negotiates
Date: Mon, 22 Jul 2024 10:00:00 GMT
Server: Apache/2.4.41 (Unix)
Content-Type: text/html; charset=UTF-8
Content-Length: 233
TCN: list
Vary: negotiate,accept-language
Alternates: {"index.html.en" 1 {type text/html} {language en} {length 48}}, {"another-map.html.fr.map" 1 {type text/html} {language fr} {length 45}}}}

<html>
<head>
  <title>506 Variant Also Negotiates</title>
</head>
<body>
  <h1>La variante négocie également</h1>
  <p>Une variante de la ressource demandée est elle-même une ressource négociable. Cela indique une erreur de configuration.</p>
</body>
</html>
```

## Spécifications

{{Specifications}}

## Voir aussi

- Le code de statut HTTP {{HTTPStatus("300", "300 Multiple Choices")}}
- Le {{RFC("2295")}}
- [Négociation de contenu](/fr/docs/Web/HTTP/Guides/Content_negotiation)
- [Les codes de statut de réponse HTTP](/fr/docs/Web/HTTP/Reference/Status)
- [Content Negotiation <sup>(angl.)</sup>](https://httpd.apache.org/docs/2.4/content-negotiation.html) dans la documentation Apache HTTP Server
- [Source de `mod_negotiation.c` d'Apache httpd <sup>(angl.)</sup>](https://github.com/apache/httpd/blob/6a2433cb3fbc30c8a55f450a046e4b0f69e73143/modules/mappers/mod_negotiation.c#L2687-L2691) montrant les conditions qui déclenchent la réponse `HTTP_VARIANT_ALSO_VARIES`.
