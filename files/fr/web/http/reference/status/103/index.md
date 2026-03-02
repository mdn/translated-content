---
title: 103 Early Hints
slug: Web/HTTP/Reference/Status/103
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

Le code de statut de [réponse informative](/fr/docs/Web/HTTP/Reference/Status#réponses_informatives) HTTP **`103 Early Hints`** peut être envoyé par un serveur pendant qu'il prépare encore une réponse, avec des indices sur les sites et ressources auxquels la réponse finale fera référence.
Cela permet à un navigateur de [préconnecter](/fr/docs/Web/HTML/Reference/Attributes/rel/preconnect) à des sites ou de commencer à [précharger](/fr/docs/Web/HTML/Reference/Attributes/rel/preload) des ressources avant même que le serveur ait préparé et envoyé la réponse finale.
Les ressources préchargées indiquées par les indices précoces sont récupérées par le client dès que les indices sont reçus.

La réponse d'indice précoce est principalement destinée à être utilisée avec l'en-tête {{HTTPHeader("Link")}}, qui indique les ressources à charger.
Elle peut aussi contenir un en-tête [`Content-Security-Policy`](/fr/docs/Web/HTTP/Guides/CSP) appliqué lors du traitement de l'indice précoce.

Un serveur peut envoyer plusieurs réponses `103`, par exemple après une redirection.
Les navigateurs ne traitent que la première réponse d'indices précoces, et cette réponse doit être ignorée si la requête aboutit à une redirection inter-origine.

> [!NOTE]
> Pour des raisons de compatibilité et de sécurité, il est recommandé de [n'envoyer des réponses HTTP `103 Early Hints` que sur HTTP/2 ou version ultérieure <sup>(angl.)</sup>](https://www.rfc-editor.org/rfc/rfc8297#section-3) sauf si le client est connu pour gérer correctement les réponses informatives.
>
> La plupart des navigateurs limitent la prise en charge à HTTP/2 ou version ultérieure pour cette raison. Voir la [compatibilité des navigateurs](#compatibilité_des_navigateurs) ci-dessous.
> Malgré cela, les exemples ci-dessous utilisent la notation de style HTTP/1.1 par convention.

## Syntaxe

```http
103 Early Hints
```

## Exemples

### Exemple de préconnexion

La réponse d'indice précoce `103` suivante montre une réponse où le serveur indique que le client pourrait vouloir préconnecter à une origine particulière (`https://cdn.exemple.com`).
Comme pour l'attribut HTML [`rel=preconnect`](/fr/docs/Web/HTML/Reference/Attributes/rel/preconnect), il s'agit d'un indice que la page aura probablement besoin de ressources provenant de l'origine cible, et que le navigateur peut améliorer l'expérience utilisateur en initiant préventivement une connexion vers cette origine.

```http
103 Early Hint
Link: <https://cdn.exemple.com>; rel=preconnect, <https://cdn.exemple.com>; rel=preconnect; crossorigin
```

Cet exemple préconnecte deux fois à `https://cdn.exemple.com`&nbsp;:

- La première connexion sera utilisée pour charger des ressources pouvant être récupérées sans CORS, comme des images.
- La seconde connexion inclut l'attribut [`crossorigin`](/fr/docs/Web/HTML/Reference/Attributes/crossorigin) et sera utilisée pour charger des ressources protégées par [CORS](/fr/docs/Web/HTTP/Guides/CORS), comme des polices.

Les ressources protégées par CORS doivent être récupérées via une connexion totalement distincte. Si vous n'avez besoin que d'un seul type de ressource depuis une origine, il suffit de préconnecter une seule fois.

Ensuite, le serveur envoie la réponse finale.
Celle-ci inclut un préchargement de police avec crossorigin et une balise `<img>` chargée depuis l'origine supplémentaire.

```http
200 OK
Content-Type: text/html

<!doctype html>
...
<link rel="preload" href="https://cdn.example.com/fonts/my-font.woff2" as="font" type="font/woff2" crossorigin>
...
<img src="https://cdn.example.com/images/image.jpg" alt="">
...
```

### Exemple de préchargement

La réponse d'indice précoce `103` suivante indique qu'une feuille de style `style.css` pourrait être nécessaire dans la réponse finale.

```http
103 Early Hint
Link: </style.css>; rel=preload; as=style
```

Ensuite, le serveur envoie la réponse finale.
Celle-ci inclut un lien vers la feuille de style, qui aura peut-être déjà été préchargée grâce à l'indice précoce.

```http
200 OK
Content-Type: text/html

<!doctype html>
...
<link rel="stylesheet" rel="preload" href="style.css" />
...
```

### Réponse d'indice précoce avec CSP

L'exemple suivant montre la même réponse d'indice précoce mais avec un en-tête `Content-Security-Policy` inclus.

```http
103 Early Hint
Content-Security-Policy: style-src: self;
Link: </style.css>; rel=preload; as=style
```

La réponse précoce limite le préchargement à la même origine que la requête.
La feuille de style sera préchargée si l'origine correspond.

La réponse finale peut définir la CSP à `none`, comme ci-dessous.
La feuille de style aura déjà été préchargée, mais ne sera pas utilisée lors de l'affichage de la page.

```http
200 OK
Content-Security-Policy: style-src: none;
Content-Type: text/html

<!doctype html>
...
<link rel="stylesheet" rel="preload" href="style.css" />
...
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'en-tête HTTP {{HTTPHeader("Link")}}
- [Partage des ressources entre origines (CORS)](/fr/docs/Web/HTTP/Guides/CORS)
- [Content Security Policy (CSP)](/fr/docs/Web/HTTP/Guides/CSP)
- [`rel="preconnect"`](/fr/docs/Web/HTML/Reference/Attributes/rel/preconnect) (attribut de l'élément {{HTMLElement("link")}})
- [`rel="preload"`](/fr/docs/Web/HTML/Reference/Attributes/rel/preload) (attribut de l'élément {{HTMLElement("link")}})
- [`fetchpriority`](/fr/docs/Web/HTML/Reference/Elements/link#fetchpriority) (attribut de l'élément {{HTMLElement("link")}})
- [Early Hints update: How Cloudflare, Google, and Shopify are working together to build a faster Internet for everyone <sup>(angl.)</sup>](https://blog.cloudflare.com/early-hints-performance/)
