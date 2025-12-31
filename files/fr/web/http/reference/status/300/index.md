---
title: 300 Multiple Choices
slug: Web/HTTP/Reference/Status/300
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

Le code de statut de [réponse de redirection](/fr/docs/Web/HTTP/Reference/Status#messages_de_redirection) HTTP **`300 Multiple Choices`** indique que la requête a plusieurs réponses possibles.
L'agent utilisateur ou l'utilisateur·ice doit en choisir une.

> [!NOTE]
> Lors de la [négociation de contenu pilotée par l'agent](/fr/docs/Web/HTTP/Guides/Content_negotiation#négociation_menée_par_lagent), un client et un serveur décident ensemble de la meilleure variante d'une ressource donnée lorsque le serveur possède plusieurs variantes.
> La plupart des clients n'ont pas de méthode pour choisir automatiquement parmi les réponses, et les allers-retours supplémentaires ralentissent l'interaction client-serveur.
> La [négociation de contenu pilotée par le serveur](/fr/docs/Web/HTTP/Guides/Content_negotiation#négociation_de_contenu_menée_par_le_serveur) est bien plus courante, le serveur choisissant la ressource la plus appropriée pour le client en fonction des en-têtes de la requête ({{HTTPHeader("Accept-Language")}}, {{HTTPHeader("Accept")}}, etc.).

Le serveur doit inclure dans la réponse un contenu contenant une liste de métadonnées de ressources et d'URI parmi lesquels l'utilisateur·ice ou l'agent utilisateur peut choisir.
Le format du contenu dépend de l'implémentation, mais doit pouvoir être facilement analysé par l'agent utilisateur (comme du HTML ou du JSON).

Si le serveur a un choix préféré que le client doit demander, il peut l'indiquer dans un en-tête {{HTTPHeader("Location")}}.

## Statut

```http
300 Multiple Choices
```

## Exemples

### Réponse 300 avec liste de ressources

L'exemple suivant illustre un échange requête-réponse de négociation de contenu transparente.
Un serveur Apache propose plusieurs variantes d'une ressource définie dans une [carte de types <sup>(angl.)</sup>](https://httpd.apache.org/docs/trunk/mod/mod_negotiation.html#typemaps)&nbsp;; `index.html.en` pour une ressource en anglais, et `index.html.fr` pour une version française&nbsp;:

```http
URI: index.html.en
Content-Language: en

URI: index.html.fr
Content-Language: fr
```

Un en-tête de requête `Negotiate: trans` indique que le client souhaite utiliser TCN pour choisir une ressource.
Le faible support de ce mécanisme par les navigateurs signifie qu'un agent utilisateur comme curl doit être utilisé à la place&nbsp;:

```bash
curl -v -H "Negotiate: trans" http://localhost/index
```

Cela produit la requête suivante&nbsp;:

```http
GET /index HTTP/1.1
Host: localhost
User-Agent: curl/8.7.1
Accept: */*
Negotiate: trans
```

On reçoit une réponse `300` avec les détails des différentes représentations de la ressource demandée&nbsp;:

```http
HTTP/1.1 300 Multiple Choices
Date: Fri, 30 Aug 2024 09:21:48 GMT
Server: Apache/2.4.59 (Unix)
Alternates: {"index.html.en" 1 {type text/html} {language en} {length 48}}, {"index.html.fr" 1 {type text/html} {language fr} {length 45}}
Vary: negotiate,accept-language
TCN: list
Content-Length: 419
Content-Type: text/html; charset=iso-8859-1

<html><head>
<title>300 Multiple Choices</title>
</head><body>
<h1>Choix multiples</h1>
Variantes disponibles&nbsp;:
<ul>
<li><a href="index.html.en">index.html.en</a> , type text/html, language en</li>
<li><a href="index.html.fr">index.html.fr</a> , type text/html, language fr</li>
</ul>
</body></html>
```

## Spécifications

{{Specifications}}

## Voir aussi

- [Les redirections en HTTP](/fr/docs/Web/HTTP/Guides/Redirections)
- [Les codes de statut de réponse HTTP](/fr/docs/Web/HTTP/Reference/Status)
- Le code de statut HTTP {{HTTPStatus("301", "301 Moved Permanently")}}
- Le code de statut HTTP {{HTTPStatus("302", "302 Found")}} redirection temporaire
- Le code de statut HTTP {{HTTPStatus("308", "308 Permanent Redirect")}}
- Le code de statut HTTP {{HTTPStatus("506", "506 Variant Also Negotiates")}}
- [Algorithme de négociation du serveur Apache <sup>(angl.)</sup>](https://httpd.apache.org/docs/current/en/content-negotiation.html#algorithm)
- {{RFC("2295", "Négociation de contenu transparente dans HTTP")}}
