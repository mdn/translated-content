---
title: 404 Not Found
slug: Web/HTTP/Reference/Status/404
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

Le code de statut de [réponse d'erreur client](/fr/docs/Web/HTTP/Reference/Status#réponses_derreur_côté_client) HTTP **`404 Not Found`** indique que le serveur ne trouve pas la ressource demandée.
Les liens qui mènent à une page 404 sont souvent appelés liens brisés ou morts et peuvent être sujets au [pourrissement des liens](https://fr.wikipedia.org/wiki/Lien_mort).

Un code de statut 404 indique uniquement que la ressource est absente, sans préciser si cela est temporaire ou permanent.
Si une ressource est supprimée de façon permanente, les serveurs doivent envoyer le code de statut {{HTTPStatus("410", "410 Gone")}} à la place.

Les erreurs 404 sur un site Web peuvent entraîner une mauvaise expérience pour vos visiteur·euse·s, il convient donc de minimiser le nombre de liens brisés (internes et externes) afin d'éviter la frustration des lecteur·ice·s.
Les causes courantes des réponses 404 sont des URL mal saisies ou des pages déplacées ou supprimées sans redirection.
Pour plus d'informations, consultez le guide [des redirections en HTTP](/fr/docs/Web/HTTP/Guides/Redirections).

## Statut

```http
404 Not Found
```

## Exemples

### Page introuvable

La récupération d'une page inexistante peut ressembler à la requête suivante&nbsp;:

```http
GET /my-deleted-blog-post HTTP/1.1
Host: exemple.com
```

Le serveur retourne une réponse similaire à celle-ci&nbsp;:

```http
HTTP/1.1 404 Not Found
Age: 249970
Cache-Control: max-age=604800
Content-Type: text/html; charset=UTF-8
Date: Fri, 28 Jun 2024 11:40:58 GMT
Expires: Fri, 05 Jul 2024 11:40:58 GMT
Last-Modified: Tue, 25 Jun 2024 14:14:48 GMT
Server: ECAcc (nyd/D13E)
Vary: Accept-Encoding
X-Cache: 404-HIT
Content-Length: 1256

<!doctype html>
<head>
    <title>404 not found</title>
    ...
```

### Pages d'erreur personnalisées

Pour le serveur Apache, vous pouvez définir un chemin vers une page 404 personnalisée dans un fichier `.htaccess`.
L'exemple ci-dessous utilise `notfound.html` comme page à afficher aux visiteur·euse·s en cas d'erreur 404, bien qu'une approche courante consiste à nommer le fichier `404.html` ou `404.php` (selon la technologie côté serveur) à la racine du serveur&nbsp;:

```apacheconf
ErrorDocument 404 /notfound.html
```

> [!NOTE]
> La personnalisation de la page 404 est une bonne chose avec modération.
> N'hésitez pas à rendre votre page 404 humoristique et humaine, mais ne perturbez pas vos visiteur·euse·s sur la raison de l'affichage inattendu.
>
> Pour un exemple de page 404 personnalisée, consultez la [page 404 KonMari <sup>(angl.)</sup>](https://konmari.com/404).

## Spécifications

{{Specifications}}

## Voir aussi

- [Les codes de statut de réponse HTTP](/fr/docs/Web/HTTP/Reference/Status)
- Le code de statut HTTP {{HTTPStatus("410")}}
- [Wikipédia&nbsp;: Erreur HTTP 404](https://fr.wikipedia.org/wiki/Erreur_HTTP_404)
