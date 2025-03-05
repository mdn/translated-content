---
title: Requêtes d'intervalle en HTTP
slug: Web/HTTP/Range_requests
l10n:
  sourceCommit: 2efdf13735ef976b441b7f32e50058bc5419c1c3
---

{{HTTPSidebar}}

Une requête d'intervalle HTTP (ou requête partielle) demande au serveur d'envoyer une partie de la ressource au client. Les requêtes d'intervalle sont utiles pour différents clients, comme les lecteurs média qui permettent d'aller à un instant donné de l'audio ou de la vidéo, les outils d'édition qui ont uniquement besoin d'une fraction d'un grand fichier pour le manipuler, les gestionnaires de téléchargement qui permettent de suspendre puis de reprendre un téléchargement.

## Vérifier si un serveur prend en charge les requêtes partielles

Si la réponse HTTP inclut l'en-tête [`Accept-Ranges`](/fr/docs/Web/HTTP/Headers/Accept-Ranges) avec une autre valeur que `none`, cela indique que le serveur prend en charge les requêtes d'intervalle. Si la réponse ne contient pas l'en-tête `Accept-Ranges`, cela indique que le serveur ne les prend pas en charge. Si les requêtes d'intervalle ne sont pas prises en charge, les applications peuvent s'adapter à cette condition&nbsp;; par exemple un gestionnaire de téléchargement pourrait désactiver les boutons de mise en pause qui s'appuient sur les requêtes d'intervalle pour suspendre/reprendre un téléchargement.

Pour vérifier si un serveur prend en charge les requêtes d'intervalle, vous pouvez envoyer une requête [`HEAD`](/fr/docs/Web/HTTP/Methods/HEAD) afin d'inspecter les en-têtes sans demander la ressource complète. Si vous utilisez [curl](https://curl.se/), vous pouvez utiliser l'option `-I` afin d'envoyer une requête `HEAD`&nbsp;:

```bash
curl -I https://i.imgur.com/z4d4kWk.jpg
```

Cela produira la requête HTTP suivante&nbsp;:

```http
HEAD /z4d4kWk.jpg HTTP/2
Host: i.imgur.com
User-Agent: curl/8.7.1
Accept: */*
```

La réponse contiendra uniquement les en-têtes et pas de corps dans la réponse&nbsp;:

```http
HTTP/2 200
content-type: image/jpeg
last-modified: Thu, 02 Feb 2017 11:15:53 GMT
…
accept-ranges: bytes
content-length: 146515
```

Dans cette réponse, `Accept-Ranges: bytes` indique que 'bytes' (les octets) peut être utilisé comme unité afin de définir un intervalle (il n'existe pas d'autres unités disponibles actuellement). L'en-tête [`Content-Length`](/fr/docs/Web/HTTP/Headers/Content-Length) est aussi utile et indique la taille totale de l'image s'il fallait envoyer la même requête avec la méthode [`GET`](/fr/docs/Web/HTTP/Methods/GET) à la place.

## Demander un intervalle donné au serveur

Si le serveur prend en charge les requêtes d'intervalle, on pourra indiquer la ou les parties du document qu'on souhaite récupérer depuis le serveur en précisant l'en-tête [`Range`](/fr/docs/Web/HTTP/Headers/Range) dans la requête HTTP.

### Demander un seul intervalle

On peut demander un intervalle simple. Nous allons ici utiliser curl pour illustrer ce cas. L'option `-H` ajoute un en-tête à la requête. Ici il s'agit de l'en-tête `Range` dont on se sert pour demander les 1024 premiers octets. La dernière option, `--output -`, permet d'afficher le résultat binaire dans le terminal&nbsp;:

```bash
curl https://i.imgur.com/z4d4kWk.jpg -i -H "Range: bytes=0-1023" --output -
```

La requête émise ressemble à&nbsp;:

```http
GET /z4d4kWk.jpg HTTP/2
Host: i.imgur.com
User-Agent: curl/8.7.1
Accept: */*
Range: bytes=0-1023
```

Et le serveur répond avec un statut [`206 Partial Content`](/fr/docs/Web/HTTP/Status/206)&nbsp;:

```http
HTTP/2 206
content-type: image/jpeg
content-length: 1024
content-range: bytes 0-1023/146515
…

(contenu binaire)
```

L'en-tête [`Content-Length`](/fr/docs/Web/HTTP/Headers/Content-Length) indique alors la taille de l'intervalle demandé, pas la taille complète de l'image. L'en-tête de réponse [`Content-Range`](/fr/docs/Web/HTTP/Headers/Content-Range) indique que ce message partiel appartient à une ressource plus étendue.

### Demander plusieurs intervalles

L'en-tête [`Range`](/fr/docs/Web/HTTP/Headers/Range) permet également de récupérer plusieurs intervalles à la fois pour un document en plusieurs parties. Les intervalles sont alors séparés par une virgule.

```bash
curl http://www.example.com -i -H "Range: bytes=0-50, 100-150"
```

Le serveur répond avec un statut [`206 Partial Content`](/fr/docs/Web/HTTP/Status/206) comme indiqué ci-après. La réponse contient un en-tête [`Content-Type`](/fr/docs/Web/HTTP/Headers/Content-Type) qui indique qu'un intervalle d'octets en plusieurs parties suit. La chaîne de caractères de délimitation (`3d6b6a416f9b5` dans cet exemple) est utilisée afin de séparer les parties du corps. Chacune possède ses propres champs `Content-Type` et `Content-Range`&nbsp;:

```http
HTTP/1.1 206 Partial Content
Content-Type: multipart/byteranges; boundary=3d6b6a416f9b5
Content-Length: 282

--3d6b6a416f9b5
Content-Type: text/html
Content-Range: bytes 0-50/1270

<!doctype html>
<html lang="en-US">
<head>
    <title>Example Do
--3d6b6a416f9b5
Content-Type: text/html
Content-Range: bytes 100-150/1270

eta http-equiv="Content-type" content="text/html; c
--3d6b6a416f9b5--
```

### Requêtes d'intervalle conditionnelles

Lorsqu'on envoie des requêtes ultérieures pour récupérer d'autres parties de la ressource, il faut s'assurer que la ressource stockée n'a pas été modifiée depuis la réception du dernier fragment.

L'en-tête de requête [`If-Range`](/fr/docs/Web/HTTP/Headers/If-Range) permet de construire une requête d'intervalle conditionnelle&nbsp;: si la condition indiquée est respectée, la requête d'intervalle sera respectée et le serveur renverra une réponse HTTP [`206 Partial Content`](/fr/docs/Web/HTTP/Status/206) avec le corps approprié. Si la condition n'est pas respectée, la ressource complète sera renvoyée avec un statut [`200 OK`](/fr/docs/Web/HTTP/Status/200). Cet en-tête peut être utilisé avec un validateur [`Last-Modified`](/fr/docs/Web/HTTP/Headers/Last-Modified) ou [`ETag`](/fr/docs/Web/HTTP/Headers/ETag), mais pas avec les deux.

```http
If-Range: Wed, 21 Oct 2015 07:28:00 GMT
```

## Réponses aux requêtes d'intervalle

Trois statuts de réponse s'appliquent pour les requêtes d'intervalle&nbsp;:

- Lorsqu'une requête d'intervalle réussit, le serveur émet un statut [`206 Partial Content`](/fr/docs/Web/HTTP/Status/206).
- Lorsqu'une requête d'intervalle dépasse les limites de la ressource, cela causera un statut [`416 Range Not Satisfiable`](/fr/docs/Web/HTTP/Status/416), indiquant qu'aucune valeur de l'intervalle n'appartient à la ressource, par exemple, si l'octet de départ de chaque intervalle demandé est supérieur à la longueur de la ressource.
- Si les requêtes d'intervalle ne sont pas prises en charge, un statut [`200 OK`](/fr/docs/Web/HTTP/Status/200) est renvoyé avec l'intégralité du corps de la réponse.

## Comparaison avec l'envoi fragmenté (<i lang="en">chunked</i>) avec `Transfer-Encoding`

L'en-tête [`Transfer-Encoding`](/fr/docs/Web/HTTP/Headers/Transfer-Encoding) permet d'envoyer une ressource par fragments, ce qui s'avère utile lorsqu'il faut envoyer beaucoup de données et que la taille totale de la réponse n'est pas connue avant que la requête ait été complètement traitée. Le serveur envoie alors directement des données au client, sans mettre la réponse en tampon ni en déterminant la longueur exacte, ce qui permet de diminuer la latence. Les requêtes d'intervalle et les envois fragmentés sont compatibles et peuvent être utilisés ensemble ou non.

## Voir aussi

- Les codes de statut associés&nbsp;:
  - [`200 OK`](/fr/docs/Web/HTTP/Status/200)
  - [`206 Partial Content`](/fr/docs/Web/HTTP/Status/206)
  - [`416 Range Not Satisfiable`](/fr/docs/Web/HTTP/Status/416)
- Les en-têtes associés&nbsp;:
  - [`Accept-Ranges`](/fr/docs/Web/HTTP/Headers/Accept-Ranges)
  - [`Range`](/fr/docs/Web/HTTP/Headers/Range)
  - [`Content-Range`](/fr/docs/Web/HTTP/Headers/Content-Range)
  - [`If-Range`](/fr/docs/Web/HTTP/Headers/If-Range)
  - [`Transfer-Encoding`](/fr/docs/Web/HTTP/Headers/Transfer-Encoding)
