---
title: Utiliser les cookies HTTP
slug: Web/HTTP/Guides/Cookies
l10n:
  sourceCommit: cd0ac3ad401c47d7c854d2e30d65af5934a8f657
---

Un **cookie** (également appelé cookie web ou cookie de navigateur) est un petit morceau de données qu'un serveur envoie au navigateur web d'un·e utilisateur·ice. Le navigateur peut stocker des cookies, créer de nouveaux cookies, modifier ceux existants et les renvoyer au même serveur lors de requêtes ultérieures. Les cookies permettent aux applications web de stocker des quantités limitées de données et de se souvenir des informations d'état&nbsp;; par défaut, le protocole HTTP est [sans état](/fr/docs/Web/HTTP/Guides/Overview#http_est_sans_état_mais_pas_sans_session).

Dans cet article, nous allons explorer les principales utilisations des cookies, expliquer les meilleures pratiques pour les utiliser et examiner leurs implications en matière de confidentialité et de sécurité.

## À quoi servent les cookies

En général, le serveur utilise le contenu des cookies HTTP pour déterminer si différentes requêtes proviennent du même navigateur/utilisateur·ice, puis émettre une réponse personnalisée ou générique selon le cas. Ce qui suit décrit un système de connexion utilisateur·ice de base&nbsp;:

1. L'utilisateur·ice envoie ses identifiants de connexion au serveur, par exemple à travers un formulaire.
2. Si les identifiants sont corrects, le serveur met à jour l'interface utilisateur pour indiquer que l'utilisateur·ice est connecté·e, et répond avec un cookie contenant un identifiant de session qui enregistre son état de connexion dans le navigateur.
3. Plus tard, l'utilisateur·ice se rend sur une autre page du même site. Le navigateur envoie le cookie contenant l'identifiant de session avec la requête correspondante pour indiquer qu'il pense toujours que l'utilisateur·ice est connecté·e.
4. Le serveur vérifie l'identifiant de session et, s'il est toujours valide, envoie à l'utilisateur·ice une version personnalisée de la nouvelle page. S'il n'est pas valide, l'identifiant de session est supprimé et l'utilisateur·ice voit une version générique de la page (ou peut-être un message «&nbsp;accès refusé&nbsp;» et est invité·e à se reconnecter).

![Représentation visuelle du système de connexion décrit ci-dessus](/shared-assets/images/diagrams/http/cookies/cookie-basic-example.png)

Les cookies sont principalement utilisés à trois fins&nbsp;:

- **Gestion de session**&nbsp;: État de connexion de l'utilisateur·ice, contenu du panier, scores de jeu ou tout autre détail lié à la session de l'utilisateur·ice que le serveur doit mémoriser.
- **Personnalisation**&nbsp;: Préférences de l'utilisateur·ice telles que la langue d'affichage et le thème de l'interface utilisateur.
- **Suivi**&nbsp;: Enregistrement et analyse du comportement de l'utilisateur·ice.

### Stockage des données

Aux débuts du web, lorsqu'il n'y avait pas d'autre option, les cookies étaient utilisés à des fins générales de stockage côté client. Les API de stockage modernes sont désormais recommandées, par exemple [l'API Web Storage](/fr/docs/Web/API/Web_Storage_API) (`localStorage` et `sessionStorage`) et [IndexedDB](/fr/docs/Web/API/IndexedDB_API).

Elles sont conçues pour le stockage, n'envoient jamais de données au serveur et n'ont pas les autres inconvénients liés à l'utilisation des cookies pour le stockage&nbsp;:

- Les navigateurs sont généralement limités à un nombre maximum de cookies par domaine (varie selon le navigateur, généralement dans les centaines), et une taille maximale par cookie (généralement 4 Ko). Les API de stockage peuvent stocker des quantités de données plus importantes.
- Les cookies sont envoyés avec chaque requête, ce qui peut nuire aux performances (par exemple sur des connexions mobiles lentes), surtout si vous avez beaucoup de cookies définis.

> [!NOTE]
> Pour voir les cookies enregistrés (et les autres types de stockage utilisés par une page web), vous pouvez utiliser [l'inspecteur de stockage <sup>(angl.)</sup>](https://firefox-source-docs.mozilla.org/devtools-user/storage_inspector/index.html) dans les outils de développement de Firefox, ou le [panneau Application <sup>(angl.)</sup>](https://developer.chrome.com/docs/devtools/progressive-web-apps) dans les outils de développement de Chrome.

## Créer, supprimer et mettre à jour des cookies

Après avoir reçu une requête HTTP, un serveur peut envoyer un ou plusieurs en-têtes {{HTTPHeader("Set-Cookie")}} avec la réponse, chacun d'eux définissant un cookie distinct. Un cookie est défini avec une paire nom-valeur comme ceci&nbsp;:

```http
Set-Cookie: <cookie-name>=<cookie-value>
```

La réponse HTTP suivante indique au navigateur récepteur de stocker une paire de cookies&nbsp;:

```http
HTTP/2.0 200 OK
Content-Type: text/html
Set-Cookie: delicieux_cookie=choco
Set-Cookie: savoureux_cookie=menthe

[contenu de la page]
```

> [!NOTE]
> Pour savoir comment utiliser l'en-tête `Set-Cookie` dans différents langages/frameworks côté serveur&nbsp;: [PHP <sup>(angl.)</sup>](https://www.php.net/manual/en/function.setcookie.php), [Node.js <sup>(angl.)</sup>](https://nodejs.org/docs/latest-v19.x/api/http.html#responsesetheadername-value), [Python <sup>(angl.)</sup>](https://docs.python.org/3/library/http.cookies.html), [Ruby on Rails <sup>(angl.)</sup>](https://api.rubyonrails.org/classes/ActionDispatch/Cookies.html).

Lorsque qu'une nouvelle requête est effectuée, le navigateur envoie généralement les cookies précédemment stockés pour le domaine actuel au serveur dans un en-tête HTTP {{HTTPHeader("Cookie")}}&nbsp;:

```http
GET /page_exemple.html HTTP/2.0
Host: www.exemple.org
Cookie: delicieux_cookie=choco; savoureux_cookie=menthe
```

### Suppression : Définir la durée de vie d'un cookie

Vous pouvez définir une date d'expiration ou une période après laquelle le cookie doit être supprimé et ne plus être envoyé. Selon les attributs définis dans l'en-tête {{HTTPHeader("Set-Cookie")}} lors de la création des cookies, ils peuvent être soit des cookies _permanents_, soit des cookies de _session_&nbsp;:

- Les cookies permanents sont supprimés après la date définie dans l'attribut `Expires`&nbsp;:

  ```http
  Set-Cookie: id=a3fWa; Expires=Thu, 31 Oct 2021 07:28:00 GMT;
  ```

  ou après la période définie dans l'attribut `Max-Age`&nbsp;:

  ```http
  Set-Cookie: id=a3fWa; Max-Age=2592000
  ```

  > [!NOTE]
  > `Expires` est disponible depuis plus longtemps que `Max-Age`, cependant `Max-Age` est moins sujet aux erreurs et prend le pas lorsque les deux sont définis. La raison en est que lorsque vous définissez une date et une heure pour `Expires`, elles sont relatives au client sur lequel le cookie est défini. Si le serveur est réglé sur une heure différente, cela pourrait provoquer des erreurs.

- _Session_ cookies — cookies sans attribut `Max-Age` ou `Expires` — sont supprimés lorsque la session en cours se termine. Le navigateur définit quand la «&nbsp;session en cours&nbsp;» se termine, et certains navigateurs utilisent la _restauration de session_ lors du redémarrage. Cela peut entraîner la persistance indéfinie des cookies de session.

  > [!NOTE]
  > Si votre site authentifie des utilisateur·ice·s, il doit régénérer et renvoyer les cookies de session, même ceux qui existent déjà, chaque fois qu'un·e utilisateur·ice s'authentifie. Cette approche aide à prévenir les attaques de [fixation de session <sup>(angl.)</sup>](https://owasp.org/www-community/attacks/Session_fixation), où un tiers peut réutiliser la session d'un·e utilisateur·ice.

Pour supprimer immédiatement un cookie, définissez à nouveau le cookie avec le même nom, chemin et domaine (si défini), et définissez son attribut `Expires` à une date passée ou son attribut `Max-Age` à `0` ou négatif. Cela indique au navigateur de supprimer le cookie immédiatement. Par exemple&nbsp;:

```http
Set-Cookie: id=a3fWa; Max-Age=0
```

Vous pouvez également effacer tous les cookies associés à un domaine enregistrable en utilisant l'en-tête de réponse {{HTTPHeader("Clear-Site-Data")}}.
Par exemple, l'en-tête suivant envoyé depuis `https://toto.exemple.com/` effacerait tous les cookies envoyés par `exemple.com` et tous ses sous-domaines, tels que `tout.tata.exemple.com`.

```http
Clear-Site-Data: "cookies"
```

Il existe certaines techniques conçues pour recréer des cookies après leur suppression. Celles-ci sont connues sous le nom de «&nbsp;cookies zombies&nbsp;». Ces techniques violent les principes de [confidentialité](#pistage_et_vie_privée) et de contrôle des utilisateur·ice·s, peuvent enfreindre les [réglementations sur la protection des données](#régulations_relatives_aux_cookies) et pourraient exposer un site Web les utilisant à des responsabilités légales.

### Mettre à jour les valeurs de cookies

Pour mettre à jour un cookie avec HTTP, le serveur peut envoyer un en-tête {{HTTPHeader("Set-Cookie")}} avec le nom du cookie existant et une nouvelle valeur. Par exemple&nbsp;:

```http
Set-Cookie: id=nouvelle-valeur
```

Il existe plusieurs raisons pour lesquelles vous pourriez vouloir faire cela, par exemple si un·e utilisateur·ice a mis à jour ses préférences et que l'application souhaite refléter les changements dans les données côté client (vous pourriez également le faire avec un mécanisme de stockage côté client tel que [le stockage web](/fr/docs/Web/API/Web_Storage_API)).

#### Mettre à jour les cookies avec JavaScript

Dans le navigateur, vous pouvez créer de nouveaux cookies avec JavaScript en utilisant la propriété {{DOMxRef("Document.cookie")}}, ou l'API asynchrone {{DOMxRef("Cookie_Store_API", "Cookie Store", "", 1)}}. Notez que tous les exemples ci-dessous utilisent `Document.cookie`, car c'est l'option la plus largement supportée/établie.

```js
document.cookie = "delicieux_cookie=choco";
document.cookie = "savoureux_cookie=fraise";
```

Vous pouvez également accéder aux cookies existants et définir de nouvelles valeurs pour ceux-ci&nbsp;:

```js
console.log(document.cookie);
// affiche "delicieux_cookie=choco; savoureux_cookie=fraise"

document.cookie = "delicieux_cookie=baie_des_bois";

console.log(document.cookie);
// affiche "delicieux_cookie=choco; savoureux_cookie=fraise; delicieux_cookie=baie_des_bois"
```

Pour des raisons de sécurité, vous ne pouvez pas modifier les valeurs des cookies en envoyant directement un en-tête `Cookie` mis à jour lors de l'initiation d'une requête, par exemple avec {{DOMxRef("Window/fetch", "fetch()")}} ou {{DOMxRef("XMLHttpRequest")}}.

Il existe de bonnes raisons pour lesquelles vous ne devriez pas permettre à JavaScript de modifier les cookies. Vous pouvez empêcher JavaScript d'accéder à un cookie en définissant l'attribut [`HttpOnly`](/fr/docs/Web/HTTP/Reference/Headers/Set-Cookie#httponly) lors de sa création. Consultez la section [Sécurité](#sécurité) pour plus de détails.

## Sécurité

Lorsque vous stockez des informations dans des cookies, par défaut toutes les valeurs des cookies sont visibles et peuvent être modifiées par l'utilisateur·ice final. Vous ne voulez vraiment pas que vos cookies soient mal utilisés — par exemple, accessibles/modifiés par des acteurs malveillants, ou envoyés à des domaines où ils ne devraient pas être envoyés. Les conséquences potentielles peuvent aller de l'ennuyeux — des applications qui ne fonctionnent pas ou qui présentent un comportement étrange — au catastrophique. Un·e criminel·le pourrait par exemple voler un identifiant de session et l'utiliser pour définir un cookie qui donne l'impression qu'il est connecté en tant qu'autre personne, prenant ainsi le contrôle de son compte bancaire ou de commerce électronique.

Vous pouvez sécuriser vos cookies de différentes manières, qui sont examinées dans cette section.

### Bloquer l'accès à vos cookies

Vous pouvez vous assurer que les cookies sont envoyés de manière sécurisée et ne sont pas accessibles par des parties ou des scripts non autorisés de deux manières&nbsp;: avec l'attribut `Secure` et l'attribut `HttpOnly`&nbsp;:

```http
Set-Cookie: id=a3fWa; Expires=Thu, 21 Oct 2021 07:28:00 GMT; Secure; HttpOnly
```

- Un cookie avec l'attribut `Secure` n'est envoyé au serveur qu'avec une requête chiffrée par le protocole HTTPS. Il n'est jamais envoyé avec HTTP non sécurisé (sauf sur localhost), ce qui signifie que les attaquant·e·s {{Glossary("MitM", "de la personne au milieu")}} ne peuvent pas y accéder facilement. Les sites non sécurisés (avec `http:` dans l'URL) ne peuvent pas définir de cookies avec l'attribut `Secure`. Cependant, ne supposez pas que `Secure` empêche tout accès aux informations sensibles dans les cookies. Par exemple, quelqu'un ayant accès au disque dur du client (ou à JavaScript si l'attribut `HttpOnly` n'est pas défini) peut lire et modifier les informations.

- Un cookie avec l'attribut `HttpOnly` ne peut pas être accédé par JavaScript, par exemple en utilisant {{DOMxRef("Document.cookie")}}&nbsp;; il ne peut être accédé que lorsqu'il atteint le serveur. Les cookies qui persistent les sessions utilisateur·ice, par exemple, devraient avoir l'attribut `HttpOnly` défini — il serait vraiment dangereux de les rendre disponibles à JavaScript. Cette précaution aide à atténuer les attaques de type cross-site scripting ([XSS](/fr/docs/Web/Security/Attacks/XSS)).

> [!NOTE]
> Selon l'application, vous pouvez vouloir utiliser un identifiant opaque que le serveur consulte plutôt que de stocker directement des informations sensibles dans les cookies, ou explorer des mécanismes d'authentification/confidentialité alternatifs tels que les [Jetons web JSON <sup>(angl.)</sup>](https://www.jwt.io/).

### Définir où les cookies sont envoyés

Les attributs `Domain` et `Path` définissent la _portée_ d'un cookie, c'est-à-dire les URL vers lesquelles le cookie peut être envoyé.

- L'attribut `Domain` indique les hôtes qui peuvent recevoir un cookie. Si cet attribut est défini, les cookies sont disponibles sur le serveur défini et ses sous-domaines. Par exemple, si vous définissez `Domain=mozilla.org` depuis `mozilla.org`, les cookies sont disponibles sur ce domaine et ses sous-domaines comme `developer.mozilla.org`.

  ```http
  Set-Cookie: id=a3fWa; Expires=Thu, 21 Oct 2021 07:28:00 GMT; Secure; HttpOnly; Domain=mozilla.org
  ```

  Si l'en-tête `Set-Cookie` ne définit pas d'attribut `Domain`, les cookies sont disponibles sur le serveur qui les définit _mais pas sur ses sous-domaines_. Par conséquent, définir l'attribut `Domain` est moins restrictif que de l'omettre.
  Notez qu'un serveur ne peut définir l'attribut `Domain` que sur son propre domaine ou un domaine parent, pas sur un sous-domaine ou un autre domaine.
  Ainsi, par exemple, un serveur avec le domaine `foo.example.com` pourrait définir l'attribut sur `example.com` ou `foo.example.com`, mais pas sur `bar.foo.example.com` ou `elsewhere.com` (les cookies seraient néanmoins _envoyés_ aux sous-domaines tels que `bar.foo.example.com`).
  Voir [Domaines invalides](/fr/docs/Web/HTTP/Reference/Headers/Set-Cookie#domaines_invalides) pour plus de détails.

- L'attribut `Path` indique un chemin URL qui doit exister dans l'URL demandée pour envoyer l'en-tête `Cookie`. Par exemple&nbsp;:

  ```http
  Set-Cookie: id=a3fWa; Expires=Thu, 21 Oct 2021 07:28:00 GMT; Secure; HttpOnly; Path=/docs
  ```

  Le caractère `%x2F` (`/`) est considéré comme un séparateur de répertoires, et les sous-répertoires correspondent également. Par exemple, si vous définissez `Path=/docs`, ces chemins de requête correspondent&nbsp;:
  - `/docs`
  - `/docs/`
  - `/docs/Web/`
  - `/docs/Web/HTTP`

  En revanche, pour ces chemins, les cookies ne sont pas ajoutés&nbsp;:
  - `/`
  - `/docsets`
  - `/fr/docs`

  > [!NOTE]
  > L'attribut `Path` permet de contrôler quels cookies le navigateur envoie en fonction des différentes parties d'un site.
  > Il n'est pas destiné à être une mesure de sécurité et [ne protège pas](/fr/docs/Web/API/Document/cookie#sécurité) contre la lecture non autorisée du cookie à partir d'un chemin différent.

### Contrôler les cookies tiers avec `SameSite`

L'attribut [`SameSite`](/fr/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value) permet aux serveurs de définir si et quand les cookies sont envoyés avec des requêtes inter-sites (depuis d'autres sites) — c'est-à-dire des [cookies tiers](/fr/docs/Web/Privacy/Guides/Third-party_cookies). Les requêtes inter-sites sont des requêtes où le {{Glossary("Site", "site")}} (le domaine enregistrable) et/ou le schéma (http ou https) ne correspondent pas au site que l'utilisateur·ice visite actuellement. Cela inclut les requêtes envoyées lorsque des liens sont cliqués sur d'autres sites pour naviguer vers votre site, ainsi que toute requête envoyée par du contenu tiers intégré.

`SameSite` aide à prévenir la fuite d'informations, à préserver la [vie privée](#pistage_et_vie_privée) de l'utilisateur·ice et à fournir une certaine protection contre les attaques de type {{Glossary("CSRF", "cross-site request forgery")}}. Il prend trois valeurs possibles&nbsp;: `Strict`, `Lax` et `None`&nbsp;:

- `Strict` oblige le navigateur à n'envoyer le cookie qu'en réponse à des requêtes provenant du site d'origine du cookie. Cela devrait être utilisé lorsque vous avez des cookies liés à des fonctionnalités qui sont toujours derrière une navigation initiale, comme l'authentification ou le stockage des informations du panier d'achat.

  ```http
  Set-Cookie: cart=110045_77895_53420; SameSite=Strict
  ```

  > [!NOTE]
  > Les cookies utilisés pour des informations sensibles devraient également avoir une [durée de vie](#suppression_définir_la_durée_de_vie_dun_cookie) courte.

- `Lax` est similaire, sauf que le navigateur envoie également le cookie lorsque l'utilisateur·ice _navigue_ vers le site d'origine du cookie (même si l'utilisateur·ice provient d'un site différent). Cela est utile pour les cookies affectant l'affichage d'un site — par exemple, vous pouvez avoir des informations sur les produits partenaires avec un lien d'affiliation sur votre site. Lorsque ce lien est suivi vers le site partenaire, ils peuvent vouloir définir un cookie indiquant que le lien d'affiliation a été suivi, ce qui affiche une bannière de récompense et offre une réduction si le produit est acheté.

  ```http
  Set-Cookie: affiliate=e4rt45dw; SameSite=Lax
  ```

- `None` définit que les cookies sont envoyés à la fois pour les requêtes provenant du site d'origine et pour les requêtes inter-sites. Cela est utile si vous souhaitez envoyer des cookies avec des requêtes effectuées à partir de contenu tiers intégré dans d'autres sites, par exemple, des fournisseurs de technologies publicitaires ou d'analytique. Notez que si `SameSite=None` est défini, l'attribut `Secure` doit également être défini — `SameSite=None` nécessite un _contexte sécurisé_.

  ```http
  Set-Cookie: widget_session=7yjgj57e4n3d; SameSite=None; Secure; HttpOnly
  ```

Si aucun attribut `SameSite` n'est défini, le cookie est traité comme `Lax` par défaut.

### Préfixes de cookie

En raison de la conception du mécanisme des cookies, un serveur ne peut pas confirmer qu'un cookie a été défini à partir d'une origine sécurisée ni même indiquer _où_ un cookie a été initialement défini.

Une application sur un sous-domaine peut définir un cookie avec l'attribut `Domain`, ce qui donne accès à ce cookie sur tous les autres sous-domaines. Ce mécanisme peut être abusé dans une attaque de [fixation de session <sup>(angl.)</sup>](https://owasp.org/www-community/attacks/Session_fixation).

En tant que [mesure de défense en profondeur <sup>(angl.)</sup>](<https://en.wikipedia.org/wiki/Defense_in_depth_(computing)>), vous pouvez utiliser des _préfixes de cookie_ pour imposer des restrictions spécifiques sur les attributs d'un cookie dans les agents utilisateurs compatibles. Tous les préfixes de cookie commencent par un double underscore (`__`) et se terminent par un tiret (`-`). Quatre préfixes sont disponibles&nbsp;:

- **`__Secure-`**&nbsp;: Les cookies dont le nom commence par `__Secure-` doivent être définis avec l'attribut `Secure` par une page sécurisée (HTTPS).
- **`__Host-`**&nbsp;: Les cookies dont le nom commence par `__Host-` doivent être définis avec l'attribut `Secure` par une page sécurisée (HTTPS). De plus, ils ne doivent pas avoir d'attribut `Domain` défini, et l'attribut `Path` doit être défini sur `/`. Cela garantit que ces cookies ne sont envoyés qu'à l'hôte qui les a définis, et non à un autre hôte du domaine. Cela garantit également qu'ils sont définis pour l'ensemble de l'hôte et ne peuvent pas être remplacés sur un chemin quelconque de cet hôte. Cette combinaison produit un cookie qui est aussi proche que possible de traiter l'origine comme une frontière de sécurité.
- **`__Http-`**&nbsp;: Les cookies dont le nom commence par `__Http-` doivent être définis avec l'attribut `Secure` par une page sécurisée (HTTPS) et doivent en outre avoir l'attribut `HttpOnly` défini pour prouver qu'ils ont été définis par l'en-tête `Set-Cookie` (ils ne peuvent pas être définis ou modifiés avec des fonctionnalités JavaScript telles que {{DOMxRef("Document.cookie")}} ou [l'API Cookie Store](/fr/docs/Web/API/Cookie_Store_API)).
- **`__Host-Http-`**&nbsp;: Les cookies dont le nom commence par `__Host-Http-` doivent être définis avec l'attribut `Secure` par une page sécurisée (HTTPS) et doivent avoir l'attribut `HttpOnly` défini pour prouver qu'ils ont été définis par l'en-tête `Set-Cookie`. De plus, ils ont également les mêmes restrictions que les cookies préfixés `__Host-`. Cette combinaison produit un cookie qui est aussi proche que possible de traiter l'origine comme une frontière de sécurité tout en garantissant aux développeur·euse·s et aux opérateur·ice·s de serveur que sa portée est limitée aux requêtes HTTP.

Le navigateur rejette les cookies avec ces préfixes qui ne respectent pas leurs restrictions. Comme le serveur d'application ne vérifie qu'un nom de cookie spécifique pour déterminer si l'utilisateur·ice est authentifié·e ou si un jeton CSRF est correct, cela agit effectivement comme une mesure de défense contre la [fixation de session <sup>(angl.)</sup>](https://owasp.org/www-community/attacks/Session_fixation).

> [!NOTE]
> Sur le serveur, l'application web _doit_ vérifier le nom complet du cookie, y compris le préfixe. Les agents utilisateurs _ne_ suppriment pas le préfixe du cookie avant de l'envoyer dans l'en-tête {{HTTPHeader("Cookie")}} d'une requête.

Pour plus d'informations sur les préfixes de cookie et l'état actuel de la prise en charge par les navigateurs, consultez la [section Préfixes de l'article de référence Set-Cookie](/fr/docs/Web/HTTP/Reference/Headers/Set-Cookie#préfixes_de_cookie).

## Pistage et vie privée

Comme nous l'avons mentionné précédemment, l'attribut `SameSite` peut être utilisé pour contrôler quand les cookies tiers sont envoyés, ce qui peut aider à préserver la vie privée des utilisateur·ice·s. La vie privée est une considération très importante lors de la création de sites web, car lorsqu'elle est bien gérée, elle peut renforcer la confiance des utilisateur·ice·s. À l'inverse, une mauvaise gestion peut complètement éroder cette confiance et causer toutes sortes de problèmes.

Les cookies tiers peuvent être définis par du contenu tiers intégré dans des sites avec des {{HTMLElement("iframe")}}. Ils ont de nombreuses utilisations légitimes, notamment le partage d'informations sur le profil utilisateur·ice, le comptage des impressions publicitaires ou la collecte d'analyses sur différents domaines liés.

Cependant, les cookies tiers peuvent également être utilisés pour créer des expériences utilisateur intrusives et inquiétantes. Un serveur tiers peut créer un profil de l'historique de navigation et des habitudes d'un·e utilisateur·ice en se basant sur les cookies envoyés par le même navigateur lorsqu'il accède à plusieurs sites. L'exemple classique est lorsque vous recherchez des informations sur un produit sur un site et que vous êtes ensuite poursuivi sur le web par des publicités pour des produits similaires où que vous alliez.

Les fournisseurs de navigateurs savent que les utilisateur·ice·s n'aiment pas ce comportement et, par conséquent, ont tous commencé à bloquer les cookies tiers par défaut, ou du moins ont prévu de le faire. Les cookies tiers (ou simplement les cookies de suivi) peuvent également être bloqués par d'autres paramètres du navigateur ou extensions.

> [!NOTE]
> Le blocage des cookies peut empêcher certains composants tiers (comme les composants de médias sociaux) de fonctionner comme prévu. À mesure que les navigateurs imposent des restrictions supplémentaires sur les cookies tiers, les développeur·euse·s devraient commencer à chercher des moyens de réduire leur dépendance à ces cookies.

Consultez notre article sur les [cookies tiers](/fr/docs/Web/Privacy/Guides/Third-party_cookies) pour des informations détaillées sur les cookies tiers, les problèmes qui y sont associés et les alternatives disponibles. Consultez notre page d'accueil sur la [vie privée](/fr/docs/Web/Privacy) pour plus d'informations sur la vie privée en général.

## Régulations relatives aux cookies

Les législations ou régulations qui couvrent l'utilisation des cookies incluent&nbsp;:

- La [réglementation générale sur la protection des données](https://gdpr.eu/) (GDPR) dans l'Union européenne
- La directive ePrivacy dans l'UE
- La <i lang="en">California Consumer Privacy Act</i>

Ces régulations ont une portée mondiale. Elles s'appliquent à tout site sur le _World Wide_ Web auquel des utilisateur·ice·s de ces juridictions accèdent (l'UE et la Californie, avec la réserve que la loi californienne ne s'applique qu'aux entités dont le chiffre d'affaires brut dépasse 25 millions USD, entre autres).

Ces régulations incluent des exigences telles que&nbsp;:

- Informer les utilisateur·ice·s que votre site utilise des cookies.
- Permettre aux utilisateur·ice·s de refuser de recevoir certains ou tous les cookies.
- Permettre aux utilisateur·ice·s d'utiliser la majeure partie de votre service sans recevoir de cookies.

Il peut y avoir d'autres régulations qui régissent l'utilisation des cookies dans votre localité. Il vous incombe de connaître et de respecter ces régulations. Il existe des entreprises qui proposent du code de «&nbsp;bannière de cookies&nbsp;» pour vous aider à vous conformer à ces régulations.

> [!NOTE]
> Les entreprises devraient divulguer les types de cookies qu'elles utilisent sur leurs sites à des fins de transparence et pour se conformer aux régulations. Par exemple, voir [l'avis de Google sur les types de cookies qu'il utilise](https://policies.google.com/technologies/cookies#types-of-cookies) et [l'avis de confidentialité sur les sites Web, les communications et les cookies de Mozilla](https://www.mozilla.org/fr/privacy/websites/#cookies).

## Voir aussi

- Les en-têtes HTTP associés&nbsp;: {{HTTPHeader("Set-Cookie")}}, {{HTTPHeader("Cookie")}}
- Les API JavaScript associées&nbsp;: {{DOMxRef("Document.cookie")}}, {{DOMxRef("Navigator.cookieEnabled")}}, {{DOMxRef("Cookie_Store_API", "l'API Cookie Store", "", 1)}}
- [Les cookies tiers](/fr/docs/Web/Privacy/Guides/Third-party_cookies)
- [Spécification des cookies&nbsp;: RFC 6265 <sup>(angl.)</sup>](https://datatracker.ietf.org/doc/html/rfc6265)
- [Cookies, le RGPD et la directive ePrivacy <sup>(angl.)</sup>](https://gdpr.eu/cookies/)
