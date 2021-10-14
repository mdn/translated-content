---
title: Une session HTTP typique
slug: Web/HTTP/Session
tags:
  - HTTP
  - Session
  - Session HTTP
translation_of: Web/HTTP/Session
---
{{HTTPSidebar}}

Dans les protocoles client-serveur, comme HTTP, les sessions se composent de trois phases :

1.  Le client établit une connexion TCP (ou la connexion appropriée si la couche de transport n'est pas TCP).
2.  Le client envoie sa requête et attend la réponse.
3.  Le serveur traite la requête, renvoyant sa réponse, fournissant un code d'état et des données appropriées.

À partir de HTTP / 1.1, la connexion n'est plus fermée après avoir terminé la troisième phase, et le client peut à nouveau effectuer une requête : cela signifie que la deuxième et la troisième phases peuvent maintenant être effectuées à tout moment.

## Établir une connexion

Dans les protocoles client-serveur, c'est le client qui établit la connexion. L'ouverture d'une connexion en HTTP signifie l'initiation d'une connexion dans la couche de transport sous-jacente, généralement TCP.

Avec TCP, le port par défaut, pour un serveur HTTP sur un ordinateur, est le port 80. D'autres ports peuvent également être utilisés, comme 8000 ou 8080. L'URL d'une page à récupérer contient à la fois le nom de domaine et le numéro de port, Ce dernier peut être omis s'il en est à 80. Voir [Identifying resources on the Web](/fr/docs/Web/HTTP/Basics_of_HTTP/Identifying_resources_on_the_Web) pour plus de details.

> **Note :** Le modèle client-serveur n'autorise pas le serveur à envoyer des données au client sans une demande explicite. Pour contourner ce problème, les développeurs Web utilisent plusieurs techniques: effectuer un ping sur le serveur périodiquement via le {{domxref("XMLHTTPRequest")}}, {{domxref("Fetch")}} API, en utilisant le HTML [WebSockets API](/fr/WebSockets "en/WebSockets"), ou des protocoles similaires.

## Envoi d'une demande client

Une fois la connexion établie, l'agent utilisateur peut envoyer la demande (un agent utilisateur est généralement un navigateur Web, mais peut être autre chose, un robot d'exploration, par exemple). Une demande de client consiste en des directives de texte, séparées par CRLF (retour de chariot, suivi d'une alimentation en ligne), divisé en trois blocs :

1.  La première ligne contient une méthode de demande suivie de ses paramètres:

    - le chemin d'accès du document, c'est-à-dire une URL absolue sans le protocole ou le nom de domaine
    - la version du protocole HTTP

2.  Les lignes subséquentes représentent un en-tête HTTP, ce qui donne aux informations du serveur quel type de données est approprié (par exemple, quelle langue, quels types MIME) ou d'autres données modifient son comportement (par exemple, ne pas envoyer de réponse s'il est déjà mis en cache). Ces en-têtes HTTP forment un bloc qui se termine par une ligne vide.
3.  Le bloc final est un bloc de données facultatif, qui peut contenir d'autres données principalement utilisées par la méthode POST.

### Demandes d'exemple

Obtenir la page racine de developer.mozilla.org, c'est-à-dire [http://developer.mozilla.org/](https://developer.mozilla.org), et dire au serveur que l'utilisateur-agent préférerait la page en français si possible :

    GET / HTTP/1.1
    Host: developer.mozilla.org
    Accept-Language: fr

Observez cette dernière ligne vide, ceci sépare le bloc de données du bloc d'en-tête. Comme il n'y a pas de `Content-Length` fourni dans un en-tête HTTP, ce bloc de données est présenté vide, marquant la fin des en-têtes, permettant au serveur de traiter la demande le moment où elle reçoit cette ligne vide.

Par exemple, en envoyant le résultat d'un formulaire :

    POST /contact_form.php HTTP/1.1
    Host: developer.mozilla.org
    Content-Length: 64
    Content-Type: application/x-www-form-urlencoded

    name=Joe%20User&request=Send%20me%20one%20of%20your%20catalogue

### Méthodes de demande

HTTP définit un ensemble de [méthodes de requête](/fr/docs/HTTP/Méthode) indiquant l'action souhaitée à effectuer sur une ressource. Bien qu'ils puissent également être des noms, ces méthodes de requêtes sont parfois appelées verbes HTTP. Les requêtes les plus courantes sont `GET` et `POST` :

- La méthode {{HTTPMethod ("GET")}} demande une représentation de données de la ressource spécifiée. Les requêtes utilisant `GET` ne doivent que récupérer les données.
- La méthode {{HTTPMethod ("POST")}} envoie des données à un serveur afin qu'il puisse changer son état. C'est la méthode souvent utilisée pour les [formulaires HTML](/fr/docs/Web/Guide/HTML/Formulaires).

## Structure d'une réponse du serveur

Une fois que l'agent connecté a envoyé sa requête, le serveur Web le traite et finalement renvoie une réponse. Similaire à une demande de client, une réponse de serveur est formée de directives de texte, séparées par [CRLF](/fr/docs/Glossaire/CRLF), mais divisées en trois blocs :

1.  La première ligne, _la ligne d'état_, consiste en une reconnaissance de la version HTTP utilisée, suivie d'une demande d'état (et sa brève signification dans un texte lisible par l'homme).
2.  Les lignes suivantes représentent des en-têtes HTTP spécifiques, en donnant aux clients des informations sur les données envoyées (par exemple, type, taille de données, algorithme de compression utilisé, conseils sur la mise en cache). De la même manière que le bloc d'en-têtes HTTP pour une demande de client, ces en-têtes HTTP forment un bloc se terminant par une ligne vide.
3.  Le dernier bloc est un bloc de données, qui contient les données facultatives.

### Examples de réponses

Réponse réussie de la page Web :

    HTTP/1.1 200 OK
    Date: Sat, 09 Oct 2010 14:28:02 GMT
    Server: Apache
    Last-Modified: Tue, 01 Dec 2009 20:18:22 GMT
    ETag: "51142bc1-7449-479b075b2891b"
    Accept-Ranges: bytes
    Content-Length: 29769
    Content-Type: text/html

    <!DOCTYPE html... (here comes the 29769 bytes of the requested web page)

Notification selon laquelle la ressource demandée a été définitivement déplacé ( en permanence ) :

    HTTP/1.1 301 Moved Permanently
    Server: Apache/2.2.3 (Red Hat)
    Content-Type: text/html; charset=iso-8859-1
    Date: Sat, 09 Oct 2010 14:30:24 GMT
    Location: https://developer.mozilla.org/ (this is the new link to the resource; it is expected that the user-agent will fetch it)
    Keep-Alive: timeout=15, max=98
    Accept-Ranges: bytes
    Via: Moz-Cache-zlb05
    Connection: Keep-Alive
    X-Cache-Info: caching
    X-Cache-Info: caching
    Content-Length: 325 (the content contains a default page to display if the user-agent is not able to follow the link)

    <!DOCTYPE HTML PUBLIC "-//IETF//DTD HTML 2.0//EN">
    <html><head>
    <title>301 Moved Permanently</title>
    </head><body>
    <h1>Moved Permanently</h1>
    <p>The document has moved <a href="https://developer.mozilla.org/">here</a>.</p>
    <hr>
    <address>Apache/2.2.3 (Red Hat) Server at developer.mozilla.org Port 80</address>
    </body></html>

Notification selon laquelle la ressource demandée n'existe pas :

    HTTP/1.1 404 Not Found
    Date: Sat, 09 Oct 2010 14:33:02 GMT
    Server: Apache
    Last-Modified: Tue, 01 May 2007 14:24:39 GMT
    ETag: "499fd34e-29ec-42f695ca96761;48fe7523cfcc1"
    Accept-Ranges: bytes
    Content-Length: 10732
    Content-Type: text/html

    <!DOCTYPE html... (contains a site-customized page helping the user to find the missing resource)

### Codes d'état de réponse

[Les codes d'état de réponse HTTP](/fr/docs/Web/HTTP/Status) indiquent si une requête HTTP spécifique a été effectuée avec succès. Les réponses sont regroupées en cinq classes: réponses d'information, réponses réussies, redirections, erreurs de client et erreurs de serveurs.

- {{HTTPStatus(200)}}: OK. La demande a réussi.
- {{HTTPStatus(301)}}: Moved Permanently. Ce code de réponse signifie que l'URL de la ressource demandée a été modifiée.
- {{HTTPStatus(404)}}: Not Found. Le serveur ne peut pas trouver la ressource demandée.

## Voir aussi

- [Identifying resources on the Web](/fr/docs/Web/HTTP/Basics_of_HTTP/Identifying_resources_on_the_Web) (en anglais)
- [En-têtes HTTP](/fr/docs/Web/HTTP/Headers)
- [Méthode de requête HTTP](/fr/docs/HTTP/Méthode)
- [Codes de réponse HTTP](/fr/docs/Web/HTTP/Status)
