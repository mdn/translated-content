---
title: En-tête de requête
slug: Glossary/Request_header
---

Un **en-tête de requête** est un {{glossary("header","en-tête HTTP")}} qui peut être utilisé dans une requête HTTP et ne concerne pas le contenu du message. Les en-têtes de requête, comme {{HTTPHeader("Accept")}}, {{HTTPHeader("Accept-Language", "Accept-*")}} ou {{HTTPHeader("If-Modified-Since","If-*")}}, permettent d'effectuer des requêtes conditionnelles ; d'autres comme {{HTTPHeader("Cookie")}}, {{HTTPHeader("User-Agent")}} ou {{HTTPHeader("Referer")}} précisent le contexte pour que le serveur adapte la réponse.

Tous les en-têtes apparaissant dans une requête ne sont pas des _en-têtes de requête_. Par exemple, l'en-tête {{HTTPHeader("Content-Length")}} apparaissant dans une requête {{HTTPMethod("POST")}} est en fait un {{glossary("entity header","en-tête d'entité")}} faisant référence à la taille du corps du message de requête. Cependant, ces en-têtes d'entité sont souvent appelés en-têtes de requête dans un tel contexte.

De plus, [CORS](/fr/docs/Glossary/CORS) définit un sous-ensemble d'en-têtes de requête comme {{glossary('simple header','en-têtes simples')}}, en-têtes de requêtes qui sont toujours considérés comme autorisés et non listés explicitement dans les réponses des requêtes de {{glossary("preflight request", "contrôle")}}.

Quelques en-têtes de requêtes après une requête {{HTTPMethod("GET")}} :

```
GET /home.html HTTP/1.1
Host: developer.mozilla.org
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.9; rv:50.0) Gecko/20100101 Firefox/50.0
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
Accept-Language: en-US,en;q=0.5
Accept-Encoding: gzip, deflate, br
Referer: https://developer.mozilla.org/testpage.html
Connection: keep-alive
Upgrade-Insecure-Requests: 1
If-Modified-Since: Mon, 18 Jul 2016 02:36:04 GMT
If-None-Match: "c561c68d0ba92bbeb8b0fff2a9199f722e3a621a"
Cache-Control: max-age=0
```

À strictement parler, l'en-tête {{HTTPHeader("Content-Length")}} dans cet exemple n'est pas un en-tête de requête comme les autres, mais un {{glossary("entity header","en-tête d'entité")}} :

```
POST /myform.html HTTP/1.1
Host: developer.mozilla.org
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.9; rv:50.0) Gecko/20100101 Firefox/50.0
Content-Length: 128
```

## Voir aussi

### Savoir technique

- [Liste de tous les en-têtes HTTP](/fr/docs/HTTP/Headers)
