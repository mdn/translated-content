---
title: Cross-Origin Resource Sharing (CORS)
slug: Web/HTTP/Guides/CORS
l10n:
  sourceCommit: ca26363fcc6fc861103d40ac0205e5c5b79eb2fa
---

Le **Cross-Origin Resource Sharing** ({{Glossary("CORS")}}) (ou «&nbsp;partage des ressources entre origines multiples&nbsp;» en français, moins usité) est un mécanisme basé sur les en-têtes {{Glossary("HTTP")}} qui permet à un serveur d'indiquer toute {{Glossary("origin", "origine")}} (domaine, schéma ou port) autre que la sienne à partir de laquelle un navigateur doit autoriser le chargement des ressources. CORS repose également sur un mécanisme par lequel les navigateurs effectuent une requête «&nbsp;préliminaire&nbsp;» (<i lang="en">preflight</i> en anglais) au serveur hébergeant la ressource cross-origin, afin de vérifier que le serveur autorise la requête réelle. Dans cette pré-requête, le navigateur envoie des en-têtes indiquant la méthode HTTP et les en-têtes qui sont utilisés dans la requête réelle.

Par exemple, une requête inter-origine&nbsp;: le code JavaScript côté client servi depuis `https://domaine-a.com` utilise {{DOMxRef("Window/fetch", "fetch()")}} pour effectuer une requête vers `https://domaine-b.com/data.json`.

Pour des raisons de sécurité, les navigateurs restreignent les requêtes HTTP inter-origine initiées par des scripts. Par exemple, `fetch()` et {{DOMxRef("XMLHttpRequest")}} respectent la [politique de même origine](/fr/docs/Web/Security/Defenses/Same-origin_policy). Cela signifie qu'une application web utilisant ces API ne peut demander des ressources qu'à partir de la même origine que celle depuis laquelle l'application a été chargée, sauf si la réponse d'autres origines inclut les bons en-têtes CORS.

![Représentation schématique du mécanisme CORS](https://mdn.github.io/shared-assets/images/diagrams/http/cors/fetching-page-cors.svg)

Le mécanisme CORS prend en charge des requêtes inter-origine sécurisées et des transferts de données entre navigateurs et serveurs. Les navigateurs utilisent CORS dans des API telles que `fetch()` ou `XMLHttpRequest` pour réduire les risques liés aux requêtes HTTP inter-origine.

## Quelles requêtes utilisent le CORS ?

Ce [standard de partage inter-origine <sup>(angl.)</sup>](https://fetch.spec.whatwg.org/#http-cors-protocol) peut activer les requêtes HTTP inter-origine pour&nbsp;:

- Les appels à `fetch()` ou `XMLHttpRequest`, comme mentionné ci-dessus.
- Les polices web (pour l'utilisation de polices entre domaines dans `@font-face` en CSS), comme décrit dans les [exigences de chargement des polices <sup>(angl.)</sup>](https://drafts.csswg.org/css-fonts/#font-fetching-requirements), afin que les serveurs puissent déployer des polices TrueType qui ne peuvent être chargées qu'en inter-origine et utilisées par les sites web autorisés.
- [Textures WebGL](/fr/docs/Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL).
- Images ou images vidéo dessinées sur un canevas avec {{DOMxRef("CanvasRenderingContext2D.drawImage()", "drawImage()")}}.
- [Formes CSS à partir d'images.](/fr/docs/Web/CSS/Guides/Shapes/From_images)

Ceci est un article général sur le partage des ressources entre origines multiples et inclut une discussion des en-têtes HTTP nécessaires.

## Aperçu fonctionnel

Le standard CORS fonctionne grâce à l'ajout de nouveaux [en-têtes HTTP](/fr/docs/Web/HTTP/Reference/Headers) qui permettent aux serveurs de décrire un ensemble d'origines autorisées pour lire l'information depuis un navigateur web. De plus, pour les méthodes de requêtes HTTP qui entraînent des effets de bord sur les données côté serveur (notamment pour les méthodes en dehors de {{HTTPMethod("GET")}} ou pour les méthodes {{HTTPMethod("POST")}} utilisées avec certains [types MIME](/fr/docs/Web/HTTP/Guides/MIME_types)), la spécification indique que les navigateurs doivent effectuer une requête préliminaire (<i lang="en">preflight request</i> en anglais) et demander au serveur les méthodes prises en charges avec une requête utilisant la méthode {{HTTPMethod("OPTIONS")}} puis, après approbation du serveur, envoyer la vraie requête. Les serveurs peuvent également indiquer aux clients s'il est nécessaire de fournir des informations d'authentification (que ce soit des [cookies](/fr/docs/Web/HTTP/Guides/Cookies) ou des données [d'authentification HTTP](/fr/docs/Web/HTTP/Guides/Authentication)) avec les requêtes.

Les échecs CORS génèrent des erreurs, mais pour des raisons de sécurité, les détails de l'erreur _ne sont pas accessibles par JavaScript_. Tout ce que le code sait, c'est qu'une erreur s'est produite. La seule façon de déterminer précisément ce qui s'est passé est de consulter la console du navigateur pour obtenir plus de détails.

Les sections qui suivent évoquent les différents scénarios relatifs au CORS ainsi qu'un aperçu des en-têtes HTTP utilisés.

## Exemples de scénarios pour le contrôle d'accès

Nous présentons trois scénarios qui illustrent le fonctionnement du partage des ressources entre origines multiples (CORS). Tous ces exemples utilisent {{DOMxRef("Window/fetch", "fetch()")}}, qui peut effectuer des requêtes entre origines dans n'importe quel navigateur compatible.

### Requêtes simples

Certaines requêtes ne déclenchent pas de {{Glossary("Preflight_request", "requête CORS préliminaire")}}. Celles-ci sont appelées _requêtes simples_ dans l'ancienne [spécification CORS <sup>(angl.)</sup>](https://www.w3.org/TR/2014/REC-cors-20140116/#terminology), bien que la [spécification Fetch <sup>(angl.)</sup>](https://fetch.spec.whatwg.org/) (qui définit maintenant le CORS) n'utilise pas ce terme.

La motivation est que l'élément {{HTMLElement("form")}} de HTML 4.0 (qui précède les requêtes inter-origines avec {{DOMxRef("Window/fetch", "fetch()")}} et {{DOMxRef("XMLHttpRequest")}}) peut soumettre des requêtes simples à n'importe quelle origine, donc toute personne écrivant un serveur doit déjà se protéger contre les attaques {{Glossary("CSRF", "falsification de requête inter-sites")}} (CSRF). Dans cette hypothèse, le serveur n'a pas besoin de s'inscrire (en répondant à une requête préliminaire) pour recevoir toute requête qui ressemble à une soumission de formulaire, puisque la menace de CSRF n'est pas pire que celle d'une soumission de formulaire. Cependant, le serveur doit toujours s'inscrire en utilisant {{HTTPHeader("Access-Control-Allow-Origin")}} pour _partager_ la réponse avec le script.

Une _requête simple_ est une requête qui **respecte toutes les conditions suivantes**&nbsp;:

- Les seules méthodes autorisées sont&nbsp;:
  - {{HTTPMethod("GET")}}
  - {{HTTPMethod("HEAD")}}
  - {{HTTPMethod("POST")}}

- Hormis les en-têtes définis automatiquement par l'agent utilisateur (par exemple, {{HTTPHeader("Connection")}}, {{HTTPHeader("User-Agent")}} ou les {{Glossary("Forbidden request header", "en-têtes de requête interdits")}}), les seuls en-têtes qui peuvent être paramétrés manuellement sont les [en-têtes de requête CORS sécurisés](/fr/docs/Glossary/CORS-safelisted_request_header), qui sont&nbsp;:
  - {{HTTPHeader("Accept")}}
  - {{HTTPHeader("Accept-Language")}}
  - {{HTTPHeader("Content-Language")}}
  - {{HTTPHeader("Content-Type")}} (cf. les contraintes supplémentaires ci-après)
  - {{HTTPHeader("Range")}} (uniquement avec une [valeur d'en-tête de plage unique <sup>(angl.)</sup>](https://fetch.spec.whatwg.org/#simple-range-header-value)&nbsp;; par exemple, `bytes=256-` ou `bytes=127-255`)

- Les seules combinaisons type/sous-type autorisées pour le {{Glossary("MIME type", "type MIME")}} défini dans l'en-tête {{HTTPHeader("Content-Type")}} sont&nbsp;:
  - `application/x-www-form-urlencoded`
  - `multipart/form-data`
  - `text/plain`

- Si la requête est effectuée à l'aide d'un objet {{DOMxRef("XMLHttpRequest")}}, aucun gestionnaire d'évènements n'est enregistré sur l'objet retourné par la propriété {{DOMxRef("XMLHttpRequest.upload")}} utilisée dans la requête&nbsp;; c'est-à-dire que, étant donné une instance `xhr` {{DOMxRef("XMLHttpRequest")}}, aucun code n'a appelé `xhr.upload.addEventListener()` pour ajouter un gestionnaire d'évènements afin de surveiller le téléchargement.
- Aucun objet {{DOMxRef("ReadableStream")}} n'est utilisé dans la requête.

> [!NOTE]
> Les aperçus WebKit Nightly et Safari Technology imposent des restrictions supplémentaires sur les valeurs autorisées dans les en-têtes {{HTTPHeader("Accept")}}, {{HTTPHeader("Accept-Language")}} et {{HTTPHeader("Content-Language")}}. Si l'un de ces en-têtes contient des valeurs «&nbsp;non standard&nbsp;», WebKit/Safari ne considère pas la requête comme une «&nbsp;requête simple&nbsp;». Les valeurs que WebKit/Safari considère comme «&nbsp;non standard&nbsp;» ne sont pas documentées, sauf dans les bogues WebKit suivants&nbsp;:
>
> - [Exiger une requête préliminaire pour les en-têtes de requête CORS sécurisés non standard Accept, Accept-Language et Content-Language <sup>(angl.)</sup>](https://webkit.org/b/165178)
> - [Autoriser les virgules dans les en-têtes de requête Accept, Accept-Language et Content-Language pour les requêtes CORS simples <sup>(angl.)</sup>](https://webkit.org/b/165566)
> - [Passer à un modèle de liste noire pour les en-têtes Accept restreints dans les requêtes CORS simples <sup>(angl.)</sup>](https://webkit.org/b/166363)
>
> Aucun autre navigateur n'applique ces restrictions supplémentaires, car elles ne font pas partie de la spécification.

Si, par exemple, on a un contenu web situé sous le domaine `http://toto.exemple` qui souhaite invoquer du contenu situé sous le domaine `http://truc.autre`, on pourrait utiliser du code JavaScript semblable à ce qui suit sur `toto.exemple`&nbsp;:

```js
const fetchPromise = fetch("https://truc.autre");

fetchPromise
  .then((reponse) => reponse.json())
  .then((donnee) => {
    console.log(donnee);
  });
```

Cette opération effectue un échange simple entre le client et le serveur, en utilisant les en-têtes CORS pour gérer les privilèges&nbsp;:

![Schéma d'une requête GET CORS simple](https://mdn.github.io/shared-assets/images/diagrams/http/cors/simple-request.svg)

Voyons ce que le navigateur va envoyer au serveur dans ce cas&nbsp;:

```http
GET /resources/public-data/ HTTP/1.1
Host: bar.other
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.14; rv:71.0) Gecko/20100101 Firefox/71.0
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
Accept-Language: fr-FR,fr;q=0.5
Accept-Encoding: gzip,deflate
Connection: keep-alive
Origin: https://toto.exemple
```

L'en-tête de requête à noter est {{HTTPHeader("Origin")}}, qui montre que l'invocation provient de `https://toto.exemple`.

Voyons maintenant comment le serveur répond&nbsp;:

```http
HTTP/1.1 200 OK
Date: Mon, 01 Dec 2008 00:23:53 GMT
Server: Apache/2
Access-Control-Allow-Origin: *
Keep-Alive: timeout=2, max=100
Connection: Keep-Alive
Transfer-Encoding: chunked
Content-Type: application/xml

[…XML Data…]
```

En réponse, le serveur retourne un en-tête {{HTTPHeader("Access-Control-Allow-Origin")}} avec `Access-Control-Allow-Origin: *`, ce qui signifie que la ressource peut être accédée par **n'importe quelle** origine.

```http
Access-Control-Allow-Origin: *
```

Ce modèle d'utilisation des en-têtes {{HTTPHeader("Origin")}} et {{HTTPHeader("Access-Control-Allow-Origin")}} est la forme la plus simple du protocole de contrôle d'accès. Si les propriétaires de la ressource sur `https://truc.autre` souhaitent restreindre l'accès à la ressource aux requêtes _uniquement_ depuis `https://toto.exemple` (c'est-à-dire qu'aucun autre domaine que `https://toto.exemple` ne peut accéder à la ressource en inter-origine), ils enverraient&nbsp;:

```http
Access-Control-Allow-Origin: https://toto.exemple
```

> [!NOTE]
> Lorsqu'il répond à une [requête avec informations d'identification](#requests_with_credentials), le serveur **doit** définir une origine dans la valeur de l'en-tête `Access-Control-Allow-Origin`, au lieu de définir le caractère générique `*`.

### Requêtes préliminaires

Contrairement aux [_requêtes simples_](#requêtes_simples), pour les requêtes «&nbsp;préliminaires&nbsp;», le navigateur envoie d'abord une requête HTTP utilisant la méthode {{HTTPMethod("OPTIONS")}} à la ressource sur l'autre origine, afin de déterminer si la requête réelle est sûre à envoyer. Ces requêtes inter-origines sont préliminaires, car elles peuvent avoir des implications pour les données de l'utilisateur·ice.

L'exemple suivant montre une requête qui est préliminaire&nbsp;:

```js
const fetchPromise = fetch("https://truc.autre/doc", {
  method: "POST",
  mode: "cors",
  headers: {
    "Content-Type": "text/xml",
    "X-PINGOTHER": "pingpong",
  },
  body: "<person><name>Arun</name></person>",
});

fetchPromise.then((reponse) => {
  console.log(reponse.status);
});
```

La démonstration ci‑dessus crée un corps XML à envoyer avec la requête `POST`. De plus, un en‑tête HTTP non standard `X-PINGOTHER` est défini. Ces en‑têtes ne font pas partie de HTTP/1.1, mais sont généralement utiles aux applications web. Comme la requête utilise un `Content-Type` de `text/xml` et qu'un en‑tête personnalisé est défini, cette requête est préliminaire.

![Schéma d'une requête préliminaire](https://mdn.github.io/shared-assets/images/diagrams/http/cors/preflight-correct.svg)

> [!NOTE]
> Comme décrit ci‑dessous, la requête `POST` réelle n'inclut pas les en‑têtes `Access-Control-Request-*`&nbsp;; ils ne sont nécessaires que pour la requête `OPTIONS`.

Voyons l'échange complet entre le client et le serveur. Le premier échange est la _requête préliminaire/réponse_&nbsp;:

```http
OPTIONS /doc HTTP/1.1
Host: truc.autre
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.14; rv:71.0) Gecko/20100101 Firefox/71.0
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
Accept-Language: fr-FR,fr;q=0.5
Accept-Encoding: gzip,deflate
Connection: keep-alive
Origin: https://toto.exemple
Access-Control-Request-Method: POST
Access-Control-Request-Headers: content-type,x-pingother

HTTP/1.1 204 No Content
Date: Mon, 01 Dec 2008 01:15:39 GMT
Server: Apache/2
Access-Control-Allow-Origin: https://toto.exemple
Access-Control-Allow-Methods: POST, GET, OPTIONS
Access-Control-Allow-Headers: X-PINGOTHER, Content-Type
Access-Control-Max-Age: 86400
Vary: Accept-Encoding, Origin
Keep-Alive: timeout=2, max=100
Connection: Keep-Alive
```

Le premier bloc ci‑dessus représente la requête préliminaire avec la méthode {{HTTPMethod("OPTIONS")}}. Le navigateur détermine qu'il doit l'envoyer en fonction des paramètres de requête utilisés par l'extrait de code JavaScript ci‑dessus, afin que le serveur puisse répondre si l'envoi de la requête réelle avec ces paramètres est acceptable. OPTIONS est une méthode HTTP/1.1 utilisée pour obtenir des informations complémentaires depuis les serveurs et est une méthode {{Glossary("Safe/HTTP", "sûre")}}, ce qui signifie qu'elle ne peut pas être utilisée pour modifier la ressource. Notez que en plus de la requête OPTIONS, deux autres en‑têtes de requête sont envoyés&nbsp;:

```http
Access-Control-Request-Method: POST
Access-Control-Request-Headers: content-type,x-pingother
```

L'en‑tête {{HTTPHeader("Access-Control-Request-Method")}} informe le serveur, dans le cadre d'une requête préliminaire, que lorsque la requête réelle est envoyée, elle utilise la méthode `POST`. L'en‑tête {{HTTPHeader("Access-Control-Request-Headers")}} informe le serveur que la requête réelle contient les en‑têtes personnalisés `X-PINGOTHER` et `Content-Type`. Le serveur peut alors déterminer s'il peut accepter une requête dans ces conditions.

Le second bloc ci‑dessus est la réponse que le serveur retourne, qui indique que la méthode de requête (`POST`) et les en‑têtes de requête (`X-PINGOTHER`) sont acceptables. Voyons de plus près les lignes suivantes&nbsp;:

```http
Access-Control-Allow-Origin: https://foo.example
Access-Control-Allow-Methods: POST, GET, OPTIONS
Access-Control-Allow-Headers: X-PINGOTHER, Content-Type
Access-Control-Max-Age: 86400
```

Le serveur répond avec `Access-Control-Allow-Origin: https://foo.example`, restreignant l'accès à l'origine requérante uniquement. Il répond également avec `Access-Control-Allow-Methods`, qui indique que `POST` et `GET` sont des méthodes valides pour interroger la ressource concernée (cet en‑tête est similaire à l'en‑tête de réponse {{HTTPHeader("Allow")}}, mais utilisé strictement dans le contexte du contrôle d'accès).

Le serveur envoie aussi `Access-Control-Allow-Headers` avec la valeur `X-PINGOTHER, Content-Type`, confirmant que ces en‑têtes peuvent être utilisés avec la requête réelle. Comme `Access-Control-Allow-Methods`, `Access-Control-Allow-Headers` est une liste d'en‑têtes acceptables, séparée par des virgules.

Enfin, {{HTTPHeader("Access-Control-Max-Age")}} donne la durée en secondes pendant laquelle la réponse à la requête préliminaire peut être mise en cache sans envoyer une autre requête préliminaire. La valeur par défaut est de 5 secondes. Dans le présent cas, la durée maximale est de 86400 secondes (= 24 heures). Notez que chaque navigateur a une [valeur interne maximale](/fr/docs/Web/HTTP/Reference/Headers/Access-Control-Max-Age) qui prévaut lorsque la valeur `Access-Control-Max-Age` la dépasse.

Une fois la requête préliminaire terminée, la requête réelle est envoyée&nbsp;:

```http
POST /doc HTTP/1.1
Host: truc.autre
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.14; rv:71.0) Gecko/20100101 Firefox/71.0
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
Accept-Language: fr-FR,fr;q=0.5
Accept-Encoding: gzip,deflate
Connection: keep-alive
X-PINGOTHER: pingpong
Content-Type: text/xml; charset=UTF-8
Referer: https://toto.exemple/exemples/preflightInvocation.html
Content-Length: 55
Origin: https://toto.exemple
Pragma: no-cache
Cache-Control: no-cache

<person><name>Arun</name></person>

HTTP/1.1 200 OK
Date: Mon, 01 Dec 2008 01:15:40 GMT
Server: Apache/2
Access-Control-Allow-Origin: https://toto.exemple
Vary: Accept-Encoding, Origin
Content-Encoding: gzip
Content-Length: 235
Keep-Alive: timeout=2, max=99
Connection: Keep-Alive
Content-Type: text/plain

[Du contenu XML]
```

#### Requêtes préliminaires et redirection

Tous les navigateurs ne prennent pas encore en charge le suivi des redirections après une requête préliminaire. Si une redirection se produit après une telle requête, certains navigateurs affichent actuellement un message d'erreur tel que le suivant&nbsp;:

> La requête a été redirigée vers `https://exemple.com/toto`, ce qui est interdit pour les requêtes inter-origines nécessitant une prévalidation.
> La requête nécessite une prévalidation, ce qui est interdit pour suivre les redirections inter-origines.

Le protocole CORS exigeait initialement ce comportement mais [a depuis été modifié pour ne plus l'exiger <sup>(angl.)</sup>](https://github.com/whatwg/fetch/commit/0d9a4db8bc02251cc9e391543bb3c1322fb882f2). Toutefois, tous les navigateurs n'ont pas encore implémenté ce changement et conservent donc le comportement initial.

Tant que les navigateurs ne se sont pas alignés sur la spécification, vous pouvez contourner cette limitation en faisant une ou les deux actions suivantes&nbsp;:

- Modifier le comportement côté serveur pour éviter la requête préliminaire et/ou pour éviter la redirection
  — Modifier la requête afin qu'il s'agisse d'une [requête simple](#requêtes_simples) qui n'entraîne pas de prévalidation

Si cela n'est pas possible, une autre solution consiste à&nbsp;:

1. Effectuer une [requête simple](#requêtes_simples) (en utilisant {{DOMxRef("Response.url")}} pour l'API Fetch, ou {{DOMxRef("XMLHttpRequest.responseURL")}}) pour déterminer vers quelle URL la requête prévalidée réelle aboutirait.
2. Faire une autre requête (la requête _réelle_) en utilisant l'URL obtenue depuis `Response.url` ou `XMLHttpRequest.responseURL` lors de la première étape.

Cependant, si la requête déclenche une prévalidation à cause de la présence de l'en-tête `Authorization`, vous ne pouvez pas contourner la limitation avec les étapes ci‑dessus. Et vous ne pouvez pas du tout la contourner à moins de contrôler le serveur vers lequel la requête est effectuée.

### Requêtes avec informations d'authentification

> [!NOTE]
> Lorsque vous effectuez des requêtes authentifiées vers un autre domaine, les politiques relatives aux cookies tiers s'appliquent toujours. La politique s'applique indépendamment de toute configuration côté serveur ou côté client décrite dans ce chapitre.

La fonctionnalité la plus intéressante exposée à la fois par {{DOMxRef("Window/fetch", "fetch()")}} ou {{DOMxRef("XMLHttpRequest")}} et CORS est la possibilité d'effectuer des requêtes «&nbsp;authentifiées&nbsp;» qui tiennent compte des [cookies HTTP](/fr/docs/Web/HTTP/Guides/Cookies) et des informations d'authentification HTTP. Par défaut, lors d'appels inter-origine avec `fetch()` ou `XMLHttpRequest`, les navigateurs _n'envoient pas_ les informations d'authentification.

Pour demander qu'une requête `fetch()` inclue les informations d'authentification, définir l'option [`credentials`](/fr/docs/Web/API/RequestInit#credentials) sur `"include"`.

Pour demander qu'une requête `XMLHttpRequest` inclue les informations d'authentification, définir la propriété {{DOMxRef("XMLHttpRequest.withCredentials")}} à `true`.

Dans cet exemple, un contenu initialement chargé depuis `https://toto.exemple` effectue une requête GET vers une ressource située sur `https://truc.autre` qui définit des cookies. Le contenu sur toto.exemple peut contenir le code JavaScript suivant&nbsp;:

```js
const url = "https://truc.autre/resources/credentialed-content/";

const requete = new Request(url, { credentials: "include" });

const fetchPromise = fetch(requete);
fetchPromise.then((reponse) => console.log(reponse));
```

Ce code crée un objet {{DOMxRef("Request")}} en définissant l'option `credentials` sur `"include"` dans le constructeur, puis transmet cet objet à `fetch()`. Comme il s'agit d'une requête `GET` simple, elle n'est pas prévalidée, mais le navigateur **rejette** toute réponse qui ne possède pas l'en-tête {{HTTPHeader("Access-Control-Allow-Credentials")}} défini à `true`, et ne rend pas la réponse disponible pour le contenu web qui a effectué l'appel.

![Diagramme d'une requête GET avec Access-Control-Allow-Credentials](https://mdn.github.io/shared-assets/images/diagrams/http/cors/include-credentials.svg)

Voici un exemple d'échange entre le client et le serveur&nbsp;:

```http
GET /resources/credentialed-content/ HTTP/1.1
Host: truc.autre
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.14; rv:71.0) Gecko/20100101 Firefox/71.0
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
Accept-Language: fr-FR,fr;q=0.5
Accept-Encoding: gzip,deflate
Connection: keep-alive
Referer: https://toto.exemple/exemples/credential.html
Origin: https://toto.exemple
Cookie: pageAccess=2

HTTP/1.1 200 OK
Date: Mon, 01 Dec 2008 01:34:52 GMT
Server: Apache/2
Access-Control-Allow-Origin: https://toto.exemple
Access-Control-Allow-Credentials: true
Cache-Control: no-cache
Pragma: no-cache
Set-Cookie: pageAccess=3; expires=Wed, 31-Dec-2008 01:34:53 GMT
Vary: Accept-Encoding, Origin
Content-Encoding: gzip
Content-Length: 106
Keep-Alive: timeout=2, max=100
Connection: Keep-Alive
Content-Type: text/plain

[contenu text/plain]
```

Bien que l'en-tête `Cookie` de la requête contienne le cookie destiné au contenu de `https://truc.autre`, si `truc.autre` ne répond pas avec un {{HTTPHeader("Access-Control-Allow-Credentials")}} avec la valeur `true`, comme le montre cet exemple, la réponse est ignorée et n'est pas mise à la disposition du contenu web.

#### Requêtes préliminaires et informations d'authentification

Les requêtes de prévalidation CORS ne doivent jamais inclure d'informations d'authentification. La _réponse_ à une requête préliminaire doit préciser `Access-Control-Allow-Credentials: true` pour indiquer que la requête réelle peut être effectuée avec des informations d'authentification.

> [!NOTE]
> Certains services d'authentification d'entreprise exigent que des certificats clients TLS soient envoyés dans les requêtes de prévalidation, en contradiction avec la spécification [Fetch <sup>(angl.)</sup>](https://fetch.spec.whatwg.org/#cors-protocol-and-credentials).
>
> Firefox 87 permet d'activer ce comportement non conforme en définissant la préférence&nbsp;: `network.cors_preflight.allow_client_cert` sur `true` [bogue Firefox 1511151 <sup>(angl.)</sup>](https://bugzil.la/1511151). Les navigateurs basés sur Chromium envoient actuellement toujours des certificats client TLS dans les requêtes de pré-vérification CORS [bogue Chrome 775438 <sup>(angl.)</sup>](https://crbug.com/775438).

#### Requêtes authentifiées et jokers (_wildcards_)

Lors de la réponse à une requête avec informations d'authentification&nbsp;:

- Le serveur **ne doit pas** définir le caractère générique `*` pour la valeur de l'en-tête de réponse `Access-Control-Allow-Origin`, mais doit au contraire indiquer une origine explicite&nbsp;; par exemple, `Access-Control-Allow-Origin: https://exemple.com`
- Le serveur **ne doit pas** définir le caractère générique `*` pour la valeur de l'en-tête de réponse `Access-Control-Allow-Headers`, mais doit au contraire indiquer une liste explicite de noms d'en-têtes&nbsp;; par exemple, `Access-Control-Allow-Headers: X-PINGOTHER, Content-Type`
- Le serveur **ne doit pas** définir le caractère générique `*` pour la valeur de l'en-tête de réponse `Access-Control-Allow-Methods`, mais doit au contraire indiquer une liste explicite de noms de méthodes&nbsp;; par exemple, `Access-Control-Allow-Methods: POST, GET`
- Le serveur **ne doit pas** définir le caractère générique `*` pour la valeur de l'en-tête de réponse `Access-Control-Expose-Headers`, mais doit au contraire indiquer une liste explicite de noms d'en-têtes&nbsp;; par exemple, `Access-Control-Expose-Headers: Content-Encoding, Kuma-Revision`

Si une requête inclut des informations d'authentification (le plus souvent l'en‑tête `Cookie`) et que la réponse contient un en‑tête `Access-Control-Allow-Origin: *` (c'est‑à‑dire avec le joker), le navigateur bloque l'accès à la réponse et affiche une erreur CORS dans la console des outils de développement.

En revanche, si une requête inclut des informations d'authentification (comme l'en‑tête `Cookie`) et que la réponse contient une origine réelle plutôt que le joker (par exemple `Access-Control-Allow-Origin: https://exemple.com`), alors le navigateur autorise l'accès à la réponse depuis l'origine définie.

Notez aussi qu'un en‑tête de réponse `Set-Cookie` ne définit pas de cookie si la valeur de `Access-Control-Allow-Origin` dans cette réponse est le joker `*` plutôt qu'une origine réelle.

#### Cookies tiers

Notez que les cookies définis dans les réponses CORS sont soumis aux politiques normales de cookies tiers. Dans l'exemple ci-dessus, la page est chargée depuis `toto.exemple`, mais l'en-tête `Set-Cookie` dans la réponse est envoyé par `truc.autre`, et ne serait donc pas enregistré si le navigateur de l'utilisateur·ice est configuré pour rejeter tous les cookies tiers.

Les cookies définis dans les requêtes et réponses CORS sont soumis aux mêmes politiques de cookies tiers.

Les politiques de cookies tiers peuvent empêcher l'envoi de cookies tiers dans les requêtes, ce qui empêche effectivement un site de faire des requêtes authentifiées même si le serveur tiers le permet (en utilisant `Access-Control-Allow-Credentials`). La politique par défaut diffère selon les navigateurs, mais peut être définie à l'aide de l'attribut [SameSite](/fr/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value).

Même si les requêtes authentifiées sont autorisées, un navigateur peut être configuré pour rejeter tous les cookies tiers présents dans les réponses.

## En-têtes de réponse HTTP

Dans cette section, on liste les en-têtes de réponse HTTP qui sont renvoyés par le serveur pour le contrôle d'accès, tels que définis par la spécification _Cross-Origin Resource Sharing_. La section précédente illustre, avec des exemples concrets, leur fonctionnement.

### `Access-Control-Allow-Origin`

Une ressource retournée peut comporter un en‑tête {{HTTPHeader("Access-Control-Allow-Origin")}} avec la syntaxe suivante&nbsp;:

```http
Access-Control-Allow-Origin: <origin> | *
```

`Access-Control-Allow-Origin` indique soit une origine unique autorisée à accéder à la ressource&nbsp;; soit — pour les requêtes **sans** informations d'authentification — le joker `*` indique aux navigateurs d'autoriser n'importe quelle origine à accéder à la ressource.

Par exemple, pour autoriser du code provenant de l'origine `https://mozilla.org` à accéder à la ressource, vous pouvez définir&nbsp;:

```http
Access-Control-Allow-Origin: https://mozilla.org
Vary: Origin
```

Si le serveur indique une origine unique (qui peut varier dynamiquement en fonction de l'origine requérante dans le cadre d'une liste d'autorisations) plutôt que le joker `*`, le serveur doit également inclure `Origin` dans l'en‑tête de réponse {{HTTPHeader("Vary")}} pour indiquer aux clients que les réponses du serveur varient selon la valeur de l'en‑tête de requête {{HTTPHeader("Origin")}}.

### `Access-Control-Expose-Headers`

L'en-tête {{HTTPHeader("Access-Control-Expose-Headers")}} ajoute les en-têtes définis à la liste blanche que JavaScript (comme {{DOMxRef("Response.headers")}}) dans les navigateurs est autorisé à accéder.

```http
Access-Control-Expose-Headers: <header-name>[, <header-name>]*
```

Par exemple, ce qui suit permet aux en-têtes `X-My-Custom-Header` et `X-Another-Custom-Header` d'être exposés au navigateur&nbsp;:

```http
Access-Control-Expose-Headers: X-My-Custom-Header, X-Another-Custom-Header
```

### `Access-Control-Max-Age`

L'en-tête {{HTTPHeader("Access-Control-Max-Age")}} indique la durée pendant laquelle le résultat de la requête préliminaire peut être mis en cache. Pour un exemple de requête préliminaire, voir les exemples ci-dessus.

```http
Access-Control-Max-Age: <delta-en-secondes>
```

Le paramètre `delta-en-secondes` indique le nombre de secondes pendant lesquelles les résultats peuvent être mis en cache.

### `Access-Control-Allow-Credentials`

L'en-tête {{HTTPHeader("Access-Control-Allow-Credentials")}} indique si la réponse à la requête peut être exposée lorsque l'option `credentials` est définie sur `true`. Lorsqu'il est utilisé dans le cadre d'une réponse à une requête de pré-vérification, il indique si la requête proprement dite peut être effectuée à l'aide d'identifiants. Notez que les simples requêtes `GET` ne font pas l'objet d'un contrôle préalable, et donc si une requête est effectuée pour une ressource avec des identifiants, si cet en-tête n'est pas retourné avec la ressource, la réponse est ignorée par le navigateur et n'est pas retournée au contenu web.

```http
Access-Control-Allow-Credentials: true
```

[Requêtes avec informations d'authentification](#requêtes_avec_informations_dauthentification) sont discutées ci-dessus.

### `Access-Control-Allow-Methods`

L'en‑tête {{HTTPHeader("Access-Control-Allow-Methods")}} indique la ou les méthodes autorisées pour accéder à la ressource. Cet en‑tête est utilisé en réponse à une requête préliminaire. Les conditions dans lesquelles une requête fait l'objet d'une prévalidation sont expliquées ci‑dessus.

```http
Access-Control-Allow-Methods: <method>[, <method>]*
```

Un exemple de {{Glossary("preflight request", "requête préliminaire")}} est donné ci‑dessus, incluant un exemple qui envoie cet en‑tête au navigateur.

### `Access-Control-Allow-Headers`

L'en‑tête {{HTTPHeader("Access-Control-Allow-Headers")}} est utilisé en réponse à une {{Glossary("preflight request", "requête préliminaire")}} pour indiquer quels en‑têtes HTTP peuvent être utilisés lors de l'envoi de la requête réelle. Cet en‑tête est la réponse côté serveur à l'en‑tête {{HTTPHeader("Access-Control-Request-Headers")}} du navigateur.

```http
Access-Control-Allow-Headers: <header-name>[, <header-name>]*
```

## En-têtes de requête HTTP

Cette section décrit les en-têtes que les clients peuvent utiliser lors de l'envoi de requêtes HTTP afin d'exploiter les fonctionnalités du partage entre origines. Notez que ces en-têtes sont automatiquement définis lors des appels aux serveurs. Les développeur·euse·s effectuant des requêtes multi-origines n'ont pas besoin de définir ces en-têtes de partage entre origines de manière programmatique.

### `Origin`

L'en‑tête {{HTTPHeader("Origin")}} indique l'origine de la requête d'accès inter‑origine ou de la requête préliminaire.

```http
Origin: <origin>
```

L'origine est une URL indiquant le serveur depuis lequel la requête est initiée. Elle n'inclut aucune information de chemin, uniquement le nom du serveur.

> [!NOTE]
> La valeur `origin` peut être `null`.

Notez que, dans toute requête de contrôle d'accès, l'en‑tête {{HTTPHeader("Origin")}} est **toujours** envoyé.

### `Access-Control-Request-Method`

L'en‑tête {{HTTPHeader("Access-Control-Request-Method")}} est utilisé lors de l'envoi d'une requête préliminaire afin d'informer le serveur de la méthode HTTP qui est utilisée quand la requête réelle est effectuée.

```http
Access-Control-Request-Method: <method>
```

Des exemples d'utilisation se trouvent [ci‑dessus.](#requêtes_préliminaires)

### `Access-Control-Request-Headers`

L'en‑tête {{HTTPHeader("Access-Control-Request-Headers")}} est utilisé lors de l'envoi d'une requête préliminaire pour indiquer au serveur quels en‑têtes HTTP sont utilisés lors de la requête réelle (par exemple, en les passant par l'option [`headers`](/fr/docs/Web/API/RequestInit#headers)). Cet en‑tête côté client reçoit une réponse correspondante côté serveur dans l'en‑tête {{HTTPHeader("Access-Control-Allow-Headers")}}.

```http
Access-Control-Request-Headers: <field-name>[,<field-name>]*
```

Des exemples d'utilisation se trouvent [ci‑dessus](#requêtes_préliminaires).

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Les erreurs CORS](/fr/docs/Web/HTTP/Guides/CORS/Errors)
- [Activer CORS&nbsp;: je veux ajouter la prise en charge de CORS à mon serveur <sup>(angl.)</sup>](https://enable-cors.org/server.html)
- [L'API Fetch](/fr/docs/Web/API/Fetch_API)
- L'interface API {{DOMxRef("XMLHttpRequest")}}
- [Est-ce que ça fonctionne avec CORS&nbsp;? <sup>(angl.)</sup>](https://httptoolkit.com/will-it-cors/) — un guide interactif et un générateur sur le CORS
- [Comment utiliser le navigateur Chrome sans CORS <sup>(angl.)</sup>](https://alfilatov.com/posts/run-chrome-without-cors/)
- [Utiliser le CORS avec tous les navigateurs (modernes) <sup>(angl.)</sup>](https://www.telerik.com/blogs/using-cors-with-all-modern-browsers)
- [Réponse sur Stack Overflow avec des «&nbsp;comment faire&nbsp;» pour résoudre les problèmes courants <sup>(angl.)</sup>](https://stackoverflow.com/questions/43871637/no-access-control-allow-origin-header-is-present-on-the-requested-resource-whe/43881141#43881141)&nbsp;:
  - Comment éviter les requêtes préliminaires
  - Comment utiliser un proxy CORS pour contourner _«&nbsp;No Access-Control-Allow-Origin header&nbsp;»_
  - Comment corriger _«&nbsp;Access-Control-Allow-Origin header must not be the wildcard&nbsp;»_
