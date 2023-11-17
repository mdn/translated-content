---
title: OPTIONS
slug: Web/HTTP/Methods/OPTIONS
---

{{HTTPSidebar}}

La **méthode HTTP `OPTIONS`** est utilisée pour décrire les options de communication pour la ressource ciblée. Le client peut renseigner une URL spécifique pour la méthode OPTIONS, ou une astérisque (\*) pour interroger le serveur dans sa globalité.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">La requête a un corps</th>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">Une réponse de succès a un corps</th>
      <td>Oui</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Sûre")}}</th>
      <td>Oui</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Idempotente")}}</th>
      <td>Oui</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Peut être mise en cache")}}</th>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">
        Autorisée dans les
        <a
          href="https://developer.mozilla.org/fr/docs/Web/Guide/HTML/Formulaires"
          >formulaires HTML</a
        >
      </th>
      <td>Non</td>
    </tr>
  </tbody>
</table>

## Syntaxe

```
OPTIONS /index.html HTTP/1.1
OPTIONS * HTTP/1.1
```

## Examples

### Identifier les méthodes HTTP autorisées

Pour déterminer les méthodes HTTP supportées par le serveur, on peut utiliser curl et envoyer une requête OPTIONS :

```bash
curl -X OPTIONS http://example.org -i
```

La réponse contient un en-tête {{HTTPHeader("Allow")}} qui liste les méthodes autorisées :

```
HTTP/1.1 200 OK
Allow: OPTIONS, GET, HEAD, POST
Cache-Control: max-age=604800
Date: Thu, 13 Oct 2016 11:45:00 GMT
Expires: Thu, 20 Oct 2016 11:45:00 GMT
Server: EOS (lax004/2813)
x-ec-custom-error: 1
Content-Length: 0
```

### Requête de pré-vérification cross-origin [CORS](/fr/docs/Glossary/CORS)

En [CORS](/fr/docs/Web/HTTP/Access_control_CORS), une requête de pré-vérification est envoyée avec la méthode `OPTIONS` afin que le serveur indique si la requête est acceptable avec les paramètres spécifiés. En tant qu'élément de la requête de pré-vérification, le header {{HTTPHeader("Access-Control-Request-Method")}} notifie le serveur que lorsque la véritable requête sera envoyée, ce sera avec une méthode `POST`. Le header {{HTTPHeader("Access-Control-Request-Headers")}} indique au serveur que lorsque la vraie requête sera envoyée, elle aura les en-tête personnalisés `X-PINGOTHER` et `Content-Type`. Le serveur a maintenant la possibilité de déterminer s'il souhaite ou non accepter la requête dans les conditions énoncées par la requête de pré-vérification.

```
OPTIONS /resources/post-here/ HTTP/1.1
Host: bar.other
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
Accept-Language: en-us,en;q=0.5
Accept-Encoding: gzip,deflate
Accept-Charset: ISO-8859-1,utf-8;q=0.7,*;q=0.7
Connection: keep-alive
Origin: http://foo.example
Access-Control-Request-Method: POST
Access-Control-Request-Headers: X-PINGOTHER, Content-Type
```

Dans la réponse du serveur, l'en-tête {{HTTPHeader("Access-Control-Allow-Methods")}} indique que les méthodes `POST`, `GET`, and `OPTIONS` sont utilisables pour interroger la ressource. Cet en-tête est similaire à {{HTTPHeader("Allow")}}, mais utilisé uniquement dans le contexte CORS.

```
HTTP/1.1 200 OK
Date: Mon, 01 Dec 2008 01:15:39 GMT
Server: Apache/2.0.61 (Unix)
Access-Control-Allow-Origin: http://foo.example
Access-Control-Allow-Methods: POST, GET, OPTIONS
Access-Control-Allow-Headers: X-PINGOTHER, Content-Type
Access-Control-Max-Age: 86400
Vary: Accept-Encoding, Origin
Content-Encoding: gzip
Content-Length: 0
Keep-Alive: timeout=2, max=100
Connection: Keep-Alive
Content-Type: text/plain
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- en-tête {{HTTPHeader("Allow")}}
- [CORS](/fr/docs/Web/HTTP/Access_control_CORS)
