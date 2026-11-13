---
title: Une session HTTP typique
slug: Web/HTTP/Guides/Session
l10n:
  sourceCommit: 182692930243199b48e10dfc2cc43c51f9373aa2
---

Dans les protocoles client-serveur, comme HTTP, les sessions se composent de trois phases&nbsp;:

1. Le client établit une connexion TCP (ou la connexion appropriée si la couche de transport n'est pas TCP).
2. Le client envoie sa requête et attend la réponse.
3. Le serveur traite la requête, renvoyant sa réponse, fournissant un code d'état et des données appropriées.

À partir de HTTP / 1.1, la connexion n'est plus fermée après avoir terminé la troisième phase, et le client peut à nouveau effectuer une requête&nbsp;: cela signifie que la deuxième et la troisième phases peuvent maintenant être effectuées à tout moment.

## Établir une connexion

Dans les protocoles client-serveur, c'est le client qui établit la connexion. L'ouverture d'une connexion en HTTP signifie l'initiation d'une connexion dans la couche de transport sous-jacente, généralement TCP.

Avec TCP, le port par défaut, pour un serveur HTTP sur un ordinateur, est le port 80. D'autres ports peuvent également être utilisés, comme 8000 ou 8080. L'URL d'une page à récupérer contient à la fois le nom de domaine et le numéro de port, Ce dernier peut être omis s'il en est à 80. Voir [la référence sur les URL](/fr/docs/Web/URI) pour plus de details.

> [!NOTE]
> Le modèle client-server ne permet pas au serveur d'envoyer les données au client sans une requêtes explicite pour ça. Cependant, diverses API Web permettent ce cas d'utilisation, y compris [l'API Push](/fr/docs/Web/API/Push_API), les [évènements envoyés par le serveur](/fr/docs/Web/API/Server-sent_events), et [l'API WebSockets](/fr/docs/Web/API/WebSockets_API).

## Envoi d'une demande client

Une fois la connexion établie, l'agent utilisateur peut envoyer la requête (un agent utilisateur est généralement un navigateur Web, mais il peut s'agir de n'importe quel autre élément, comme un robot d'indexation, par exemple). Une requête client se compose de directives textuelles, séparées par des CRLF (retour chariot, suivi d'un saut de ligne), réparties en trois blocs&nbsp;:

1. La première ligne contient une méthode de demande suivie de ses paramètres&nbsp;:
   - le chemin d'accès du document, c'est-à-dire une URL absolue sans le protocole ou le nom de domaine
   - la version du protocole HTTP

2. Les lignes subséquentes représentent un en-tête HTTP, ce qui donne aux informations du serveur quel type de données est approprié (par exemple, quelle langue, quels types MIME) ou d'autres données modifient son comportement (par exemple, ne pas envoyer de réponse s'il est déjà mis en cache). Ces en-têtes HTTP forment un bloc qui se termine par une ligne vide.
3. Le bloc final est un bloc de données facultatif, qui peut contenir d'autres données principalement utilisées par la méthode POST.

### Exemple de requêtes

La récupération de la page racine de developer.mozilla.org, (`https://developer.mozilla.org/`), et dire au serveur que l'agent utilisateur privilégie la page en français, si possible&nbsp;:

```http
GET / HTTP/1.1
Host: developer.mozilla.org
Accept-Language: fr
```

Observez cette dernière ligne vide, ceci sépare le bloc de données du bloc d'en-tête. Comme il n'y a pas de `Content-Length` fourni dans un en-tête HTTP, ce bloc de données est présenté vide, marquant la fin des en-têtes, permettant au serveur de traiter la demande le moment où elle reçoit cette ligne vide.

Par exemple, en envoyant le résultat d'un formulaire&nbsp;:

```http
POST /contact_form.php HTTP/1.1
Host: developer.mozilla.org
Content-Length: 64
Content-Type: application/x-www-form-urlencoded

name=Joe%20User&request=Send%20me%20one%20of%20your%20catalogue
```

### Méthodes de requête

HTTP définit un ensemble de [méthodes de requête](/fr/docs/Web/HTTP/Reference/Methods) indiquant l'action souhaitée à effectuer sur une ressource. Bien qu'ils puissent également être des noms, ces méthodes de requêtes sont parfois appelées verbes HTTP. Les requêtes les plus courantes sont `GET` et `POST`&nbsp;:

- La méthode {{HTTPMethod ("GET")}} demande une représentation de données de la ressource définie. Les requêtes utilisant `GET` ne doivent que récupérer les données.
- La méthode {{HTTPMethod ("POST")}} envoie des données à un serveur afin qu'il puisse changer son état. C'est la méthode souvent utilisée pour les [formulaires HTML](/fr/docs/Learn_web_development/Extensions/Forms).

## Structure d'une réponse du serveur

Une fois que l'agent connecté a envoyé sa requête, le serveur web la traite, puis retourne une réponse. À l'instar d'une requête client, une réponse serveur est constituée de directives textuelles, séparées par des CRLF, mais divisées en trois blocs&nbsp;:

1. La première ligne, _la ligne d'état_, consiste en une reconnaissance de la version HTTP utilisée, suivie d'une demande d'état (et sa brève signification dans un texte lisible par l'homme).
2. Les lignes suivantes représentent des en-têtes HTTP spécifiques, en donnant aux clients des informations sur les données envoyées (par exemple, type, taille de données, algorithme de compression utilisé, conseils sur la mise en cache). De la même manière que le bloc d'en-têtes HTTP pour une demande de client, ces en-têtes HTTP forment un bloc se terminant par une ligne vide.
3. Le dernier bloc est un bloc de données, qui contient les données facultatives.

### Examples de réponses

Réponse réussie de la page Web&nbsp;:

```http
HTTP/1.1 200 OK
Content-Type: text/html; charset=utf-8
Content-Length: 55743
Connection: keep-alive
Cache-Control: s-maxage=300, public, max-age=0
Content-Language: fr
Date: Thu, 06 Dec 2018 17:37:18 GMT
ETag: "2e77ad1dc6ab0b53a2996dfd4653c1c3"
Server: meinheld/0.6.1
Strict-Transport-Security: max-age=63072000
X-Content-Type-Options: nosniff
X-Frame-Options: DENY
X-XSS-Protection: 1; mode=block
Vary: Accept-Encoding,Cookie
Age: 7

<!doctype html>
<html lang="fr">
<head>
  <meta charset="utf-8">
  <title>Une page Web simple</title>
</head>
<body>
  <h1>Une page Web HTML basique</h1>
  <p>Bonjour, le monde&nbsp;!</p>
</body>
</html>
```

Avis indiquant que la ressource demandée a été déplacée de manière permanente&nbsp;:

```http
HTTP/1.1 301 Moved Permanently
Server: Apache/2.4.37 (Red Hat)
Content-Type: text/html; charset=utf-8
Date: Thu, 06 Dec 2018 17:33:08 GMT
Location: https://developer.mozilla.org/ (voici le nouveau lien vers la ressource ; l'agent utilisateur doit le récupérer)
Keep-Alive: timeout=15, max=98
Accept-Ranges: bytes
Via: Moz-Cache-zlb05
Connection: Keep-Alive
Content-Length: 325 (le contenu comprend une page par défaut à afficher si l'agent utilisateur n'est pas en mesure de suivre le lien)

<!doctype html>… (contient une page personnalisée pour le site, destinée à aider l'utilisateur·ice à trouver la ressource manquante)
```

Notification selon laquelle la ressource demandée n'existe pas&nbsp;:

```http
HTTP/1.1 404 Not Found
Content-Type: text/html; charset=utf-8
Content-Length: 38217
Connection: keep-alive
Cache-Control: no-cache, no-store, must-revalidate, max-age=0
Content-Language: en-US
Date: Thu, 06 Dec 2018 17:35:13 GMT
Expires: Thu, 06 Dec 2018 17:35:13 GMT
Server: meinheld/0.6.1
Strict-Transport-Security: max-age=63072000
X-Content-Type-Options: nosniff
X-Frame-Options: DENY
X-XSS-Protection: 1; mode=block
Vary: Accept-Encoding,Cookie
X-Cache: Error from cloudfront

<!doctype html>… (contient une page personnalisée pour le site, destinée à aider l'utilisateur·ice à trouver la ressource manquante)
```

### Codes de statut de réponse

[Les codes de statut de réponse HTTP](/fr/docs/Web/HTTP/Reference/Status) indiquent si une requête HTTP spécifique a été effectuée avec succès. Les réponses sont regroupées en cinq classes: réponses d'information, réponses réussies, redirections, erreurs de client et erreurs de serveurs.

- {{HTTPStatus(200)}}&nbsp;: OK. La demande a réussi.
- {{HTTPStatus(301)}}&nbsp;: Moved Permanently. Ce code de réponse signifie que l'URL de la ressource demandée a été modifiée.
- {{HTTPStatus(404)}}&nbsp;: Not Found. Le serveur ne peut pas trouver la ressource demandée.

## Voir aussi

- [Les URL](/fr/docs/Web/URI)
- [Les en-têtes HTTP](/fr/docs/Web/HTTP/Reference/Headers)
- [Méthodes de requête HTTP](/fr/docs/Web/HTTP/Reference/Methods)
- [Codes de réponse HTTP](/fr/docs/Web/HTTP/Reference/Status)
