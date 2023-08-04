---
title: Utiliser les cookies HTTP
slug: Web/HTTP/Cookies
l10n:
  sourceCommit: 72d4c8678b172f558eca279d98abf23395e0d9a4
---

{{HTTPSidebar}}

Un **cookie HTTP** (également appelé cookie web ou cookie de navigateur) est une donnée de petite taille envoyée par le serveur au navigateur web de l'utilisatrice ou de l'utilisateur. Le navigateur peut alors enregistrer le cookie et le renvoyer au serveur lors des requêtes ultérieures.

Généralement, un cookie HTTP sert à indiquer que deux (ou plusieurs) requêtes proviennent du même navigateur où une personne est connectée. Il permet de mémoriser des informations d'état alors que le protocole HTTP [est sans état](/fr/docs/Web/HTTP/Overview#http_est_sans_état_mais_pas_sans_session).

Les cookies ont trois usages principaux&nbsp;:

- La gestion de session
  - : Connexions aux sites, chariots d'achats, scores de jeux, ou toute autre chose que le serveur devrait mémoriser
- La personnalisation
  - : Les préférences et autres éléments de configuration
- Le pistage
  - : L'enregistrement et l'analyse du comportement de la personne visitant le site

Les cookies ont été un outil général de stockage côté client. Bien que cela était pertinent lorsque c'était la seule façon de stocker des données côté client, il est désormais recommandé d'utiliser des API modernes dédiées à cet usage. Les cookies sont envoyés avec chaque requête et peuvent alourdir les performances (notamment pour les connexions mobiles). Les API modernes pour le stockage de données client sont&nbsp;:

- [L'API Web Storage](/fr/docs/Web/API/Web_Storage_API) (`localStorage` et `sessionStorage`)
- [IndexedDB](/fr/docs/Web/API/IndexedDB_API).

> **Note :** Pour observer les cookies enregistrés (et les autres types de stockage utilisés par une page web), vous pouvez activer [l'inspecteur de stockage](https://firefox-source-docs.mozilla.org/devtools-user/storage_inspector/index.html) dans les outils de développement de Firefox et ouvrir le niveau Cookies dans la hiérarchie de l'onglet Stockage.

## Créer un cookie

Après avoir reçu une requête HTTP, un serveur peut envoyer un ou plusieurs en-têtes [`Set-Cookie`](/fr/docs/Web/HTTP/Headers/Set-Cookie) avec la réponse. Le navigateur enregistre alors généralement le ou les cookies et les renvoie via l'en-tête HTTP [`Cookie`](/fr/docs/Web/HTTP/Headers/Cookie) pour les requêtes envers le même serveur. Il est possible d'indiquer une date d'expiration ou une durée de vie après laquelle le cookie ne devrait plus être envoyé. Il est également possible d'ajouter des restrictions supplémentaires pour le domaine et les chemins pour lesquels le cookie peut être envoyé. Pour plus de détails sur les attributs des en-têtes mentionnés plus tôt, consultez la page de référence pour [`Set-Cookie`](/fr/docs/Web/HTTP/Headers/Set-Cookie).

### Les en-têtes `Set-Cookie` et `Cookie`

L'en-tête de réponse [`Set-Cookie`](/fr/docs/Web/HTTP/Headers/Set-Cookie) envoie des cookies depuis le serveur jusqu'à l'agent utilisateur. On peut définir un cookie simple de cette façon&nbsp;:

```http
Set-Cookie: <nom-cookie>=<valeur-cookie>
```

Dans l'exemple qui suit, le serveur indique au client, via les en-têtes, de stocker une paire de cookies&nbsp;:

```http
HTTP/2.0 200 OK
Content-Type: text/html
Set-Cookie: delicieux_cookie=choco
Set-Cookie: savoureux_cookie=menthe

[contenu de la page]
```

Ensuite, pour chaque requête ultérieure à ce serveur, le navigateur renverra les cookies enregistrés via l'en-tête [`Cookie`](/fr/docs/Web/HTTP/Headers/Cookie).

```http
GET /page_exemple.html HTTP/2.0
Host: www.example.org
Cookie: delicieux_cookie=choco; savoureux_cookie=menthe
```

> **Note :** Voici différents guides pour utiliser l'en-tête `Set-Cookie` avec différentes technologies côté serveur&nbsp;:
>
> - [PHP](https://www.php.net/manual/en/function.setcookie.php)
> - [Node.JS](https://nodejs.org/dist/latest/docs/api/http.html#http_response_setheader_name_value)
> - [Python](https://docs.python.org/3/library/http.cookies.html)
> - [Ruby on Rails](https://api.rubyonrails.org/classes/ActionDispatch/Cookies.html)

### Définir la durée de vie d'un cookie

La durée de vie d'un cookie peut être définie de deux façons&nbsp;:

- Les cookies de _session_ sont supprimés à la fin de la session courante. C'est le navigateur qui définit cet instant et certains navigateurs _restaurent les sessions_ au redémarrage. Dans cette configuration, les cookies de session peuvent durer indéfiniment.
- Les cookies _permanents_ sont supprimés à la date indiquée par l'attribut `Expires` ou après une période indiquée par l'attribut `Max-Age`.

Par exemple&nbsp;:

```http
Set-Cookie: id=a3fWa; Expires=Thu, 31 Oct 2021 07:28:00 GMT;
```

> **Note :** Lorsqu'une date et une heure sont indiquées dans l'attribut `Expires`, elles sont relatives au client qui enregistre le cookie et pas au serveur.

Si votre site permet d'authentifier des utilisatrices ou utilisateurs, il devrait régénérer et renvoyer les cookies de session à chaque fois que la personne s'authentifie, y compris pour ceux qui existent déjà. Cette approche permet d'éviter [les attaques par fixation de session](/fr/docs/Web/Security/Types_of_attacks#fixation_de_session), où une tierce partie peut réutiliser des cookies de session.

### Restreindre l'accès aux cookies

Il est possible de s'assurer que les cookies sont envoyés de façon sécurisée et ne sont pas manipulés par des acteurs indésirables à l'aide de deux attributs&nbsp;:

- `Secure`
- `HttpOnly`

Un cookie avec l'attribut `Secure` sera uniquement envoyé au serveur si la requête est chiffrée (avec le protocole HTTPS). Il ne sera jamais envoyé sur une adresse HTTP non sécurisée (exception faite de `localhost`). Cela signifie qu'une [attaque d'interception](/fr/docs/Glossary/MitM) ne permettra pas de lire l'information. Les sites qui utilisent un protocole non sécurisé, comme ceux avec `http:` dans l'URL, ne peuvent pas définir de cookies avec l'attribut `Secure`. Toutefois, l'attribut `Secure` ne garantit pas une protection absolue des données sensibles des cookies. Ainsi, quelqu'un qui a accès au disque dur du client (ou au code JavaScript du site si l'attribut `HttpOnly` n'est pas ajouté) pourra toujours lire et modifier l'information.

Lorsque l'attribut `HttpOnly` est indiqué, le cookie est inaccessible en JavaScript et ne peut pas être manipulé avec l'API [`Document.cookie`](/fr/docs/Web/API/Document/cookie), il est uniquement envoyé au serveur. Ainsi, les cookies qui persistent côté serveur pour les sessions n'ont pas besoin d'être disponibles en JavaScript et devraient être paramétrés avec l'attribut `HttpOnly`. Cette précaution permet de réduire les risque d'attaque [XSS](</fr/docs/Web/Security/Types_of_attacks#cross-site_scripting_(xss)>).

Voici un exemple&nbsp;:

```http
Set-Cookie: id=a3fWa; Expires=Thu, 21 Oct 2021 07:28:00 GMT; Secure; HttpOnly
```

### Définir où les cookies sont envoyés

Les attributs `Domain` et `Path` définissent la _portée_ d'un cookie, c'est-à-dire les URL vers lesquelles le cookie pourra être envoyé.

#### Attribut `Domain`

L'attribut `Domain` indique les hôtes qui peuvent recevoir un cookie. Si cet attribut est absent, la valeur par défaut sera l'hôte qui a défini le cookie en _excluant les sous-domaines_. Si `Domain` est indiqué, les sous-domaines sont toujours inclus. Aussi, indiquer `Domain` est moins restrictif que de l'omettre. Toutefois, cet attribut peut s'avérer utile lorsque les sous-domaines doivent partager de l'information à propos d'une personne.

Ainsi, si on définit `Domain=mozilla.org`, les cookies seront disponibles sur les sous-domaines comme `developer.mozilla.org`.

#### Attribut `Path`

L'attribut `Path` indique un chemin d'URL qui doit exister dans l'URL demandée pour que l'en-tête `Cookie` soit envoyé.
Le caractère `%x2F` ("/") est considéré comme un séparateur de répertoire et les sous-répertoires correspondront alors.

Ainsi, si on indique `Path=/docs`, les requêtes vers les chemins suivants contiendront les cookies&nbsp;:

- `/docs`
- `/docs/`
- `/docs/Web/`
- `/docs/Web/HTTP`

En revanche, pour ces chemins, les cookies ne seront pas ajoutés&nbsp;:

- `/`
- `/docsets`
- `/fr/docs`

#### Attribut `SameSite`

L'attribut [`SameSite`](/fr/docs/Web/HTTP/Headers/Set-Cookie/SameSite) permet aux serveurs d'indiquer quand les cookies doivent être envoyés lors de requêtes vers d'autres [origines/sites](/fr/docs/Glossary/Site). Cela fournit une certaine protection contre les attaques [<i lang="en">cross-site request forgery</i>](/fr/docs/Glossary/CSRF).

Cet attribut peut prendre trois valeurs différentes&nbsp;:

- `Strict`
  - : Le navigateur envoie uniquement le cookie pour les requêtes vers le même site d'origine du cookie
- `Lax`
  - : Similaire à `Strict`, mais le navigateur envoie également le cookie lorsque la personne _navigue_ vers le site d'origine du cookie (même si elle vient d'un site différent), par exemple lorsqu'elle suit un lien depuis un site externe.
- `None`.
  - : Les cookies sont envoyés pour les requêtes du même site et pour les autres sites, mais _uniquement dans des contextes sécurisés_ (autrement dit, si on a `SameSite=None`, l'attribut `Secure` doit également être présent).

Si aucun attribut `SameSite` n'est indiqué, la valeur par défaut est `Lax`.

Voici un exemple&nbsp;:

```http
Set-Cookie: macle=mavaleur; SameSite=Strict
```

> **Note :** La spécification concernant `SameSite` a changé (MDN documente le comportement actuel). Voir [le tableau de compatibilité pour `SameSite`](/fr/docs/Web/HTTP/Headers/Set-Cookie/SameSite#compatibilité_des_navigateurs) pour plus d'informations dont l'attribut est géré selon les versions des navigateurs&nbsp;:
>
> - `SameSite=Lax` est désormais la valeur par défaut si `SameSite` n'est pas indiqué. Auparavant, les cookies étaient par défaut envoyés pour toutes les requêtes.
> - Les cookies avec `SameSite=None` doivent désormais utiliser l'attribut `Secure` (autrement dit, le contexte doit être sécurisé).
> - Les cookies provenant d'un même domaine ne sont plus considérés comme provenant du même site si le schéma utilisé est différent (`http:` est considéré comme différent de `https:`).

#### Préfixes de cookie

Étant donné la conception du mécanisme des cookies, un serveur ne peut pas confirmer qu'un cookie a été défini depuis une origine sécurisée ou même _l'emplacement_ depuis lequel un cookie a été défini à l'origine.

Une application vulnérable sur un sous-domaine pourrait donc définir un cookie avec l'attribut `Domain`, ce qui donnerait accès à ce cookie sur l'ensemble des sous-domaines. Ce mécanisme pourrait être abusé lors d'une _attaque par fixation de session_. Voir [la description de ce type d'attaque](/fr/docs/Web/Security/Types_of_attacks#fixation_de_session) pour plus d'informations sur les méthodes de prévention.

Comme [mesure de défense en profondeur](https://fr.wikipedia.org/wiki/Défense_en_profondeur), on peut utiliser des _préfixes de cookie_ pour confirmer différents aspects du cookie. Deux préfixes sont disponibles&nbsp;:

- `__Host-`
  - : Si un nom de cookie utilise ce préfixe, il sera uniquement accepté dans un en-tête [`Set-Cookie`](/fr/docs/Web/HTTP/Headers/Set-Cookie) si&nbsp;:
    - Il est marqué avec l'attribut `Secure`
    - Il a été envoyé depuis une origine sécurisée
    - Il n'inclut pas d'attribut `Domain`
    - L'attribut `Path` vaut `/`.
      Ainsi, de tels cookies peuvent être vus comme verrouillés au domaine.
- `__Secure-`
  - : Si un nom de cookie utilise ce préfixe, il sera uniquement accepté dans un en-tête [`Set-Cookie`](/fr/docs/Web/HTTP/Headers/Set-Cookie) s'il est marqué avec l'attribut `Secure` et qu'il a été envoyé depuis une origine sécurisée. Il s'agit d'une forme plus faible que celle fournie par le préfixe `__Host-`.

Le navigateur rejettera les cookies avec ces préfixes et qui ne respectent pas ces contraintes. On notera qu'ainsi, les cookies créés par les sous-domaines et avec ces préfixes sont confinés au sous-domaine en question ou ignorés complètement. Comme le serveur d'application vérifie uniquement le nom d'un cookie donné pour l'authentification ou la validité d'un jeton CSRF, cela sert de mesure contre les fixations de session.

> **Attention :** Sur le serveur d'application, l'application web _doit_ vérifier le nom complet du cookie, incluant le préfixe. Les agents utilisateurs ne suppriment pas le préfixe avant de l'envoyer dans l'en-tête [`Cookie`](/fr/docs/Web/HTTP/Headers/Cookie) de la réponse.

Pour plus d'informations sur les préfixes et la compatibilité des navigateurs associée, voir [la section sur les préfixes de la page sur l'article de référence `Set-Cookie`](/fr/docs/Web/HTTP/Headers/Set-Cookie#préfixes_de_cookie).

#### Accéder aux cookies en JavaScript avec `Document.cookie`

On peut créer de nouveaux cookies en JavaScript à l'aide de la propriété [`Document.cookie`](/fr/docs/Web/API/Document/cookie). Il est aussi possible d'accéder aux cookies existants depuis le code JavaScript si l'attribut `HttpOnly` n'a pas été ajouté.

```js
document.cookie = "delicieux_cookie=choco";
document.cookie = "savoureux_cookie=menthe";
console.log(document.cookie);
// affiche ce qui suit dans la console "delicieux_cookie=choco; savoureux_cookie=menthe"
```

Les cookies créés en JavaScript ne peuvent pas inclure l'attribut `HttpOnly`.

Voir la section qui suit sur [la sécurité](#sécurité)&nbsp;: les cookies disponibles en JavaScript peuvent être volés via des attaques XSS.

## Sécurité

> **Note :** Quand des informations sont enregistrées dans des cookies, elles sont visibles et éditables par l'utilisatrice ou l'utilisateur final·e. Selon le cas d'usage de l'application, vous pouvez utiliser un identifiant opaque qui sera utilisé par le serveur ou utiliser d'autres mécanismes d'authentification ou de confidentialité comme [les JSON Web Tokens](https://jwt.io/introduction).

Plusieurs mécanismes existent pour prévenir les attaques utilisant les cookies&nbsp;:

- L'attribut `HttpOnly` qui permet d'éviter l'accès aux cookies en JavaScript.
- Les cookies utilisés pour des informations sensibles (par exemple pour indiquer un état authentifié) devraient avoir&nbsp;:
  - Une durée de vie courte
  - L'attribut `SameSite` fixé à `Strict` ou `Lax` (voir [l'attribut `SameSite`](#attribut_samesite) ci-avant). Pour [les navigateurs qui prennent en charge `SameSite`](/fr/docs/Web/HTTP/Headers/Set-Cookie#compatibilité_des_navigateurs), cela permet de s'assurer que le cookie d'authentification n'est pas envoyé pour les requêtes entre plusieurs sites/origines. La requête malveillante serait alors vue comme non-authentifiée depuis le serveur d'application.

## Pistage et vie privée

### Cookies tiers

Un cookie est associé à un domaine et à un schéma donné (par exemple `http` ou `https`). Il peut être associé à des sous-domaines si l'attribut [`Set-Cookie`](/fr/docs/Web/HTTP/Headers/Set-Cookie) `Domain` est fourni. Si le domaine et le schéma du cookie correspondent à la page courante, le cookie est considéré comme provenant du même site que la page et donc comme un _cookie en propre_.

Si le domaine et schéma sont différents, le cookie n'est pas considéré comme provenant du même site et est alors qualifié de _cookie tiers_. Bien que le serveur hébergeant la page définit des cookies en propre, la page peut contenir des images ou d'autres ressources situées sur d'autres domaines (par exemple des publicités) qui peuvent définir des cookies tiers. Ces cookies sont principalement utilisés pour les publicités et le pistage sur le Web (voir [les types de cookies utilisés par Google](https://policies.google.com/technologies/types)).

Un serveur tiers peut créer un profil d'une personne à partir des habitudes et parcours de navigation grâce aux cookies qui lui sont envoyés par le navigateur lors de l'accès à différents sites. Par défaut, Firefox et Safari bloquent les cookies tiers connus pour le pistage. Ces cookies peuvent aussi être bloqués en utilisant les paramètres des autres navigateurs ou des extensions. Le blocage des cookies peut parfois empêcher le bon fonctionnement de composants tiers (comme les intégrations de réseaux sociaux).

> **Note :** Les serveurs peuvent (et devraient) définir [l'attribut `SameSite`](/fr/docs/Web/HTTP/Headers/Set-Cookie/SameSite) pour indiquer si un cookie peut être envoyé ou non à un site tierce.

### Régulations relatives aux cookies

Les régulations ou législations qui s'appliquent aux cookies incluent:

- Le règlement général sur la protection des données (RGPD ou GDPR en anglais) de l'Union européenne
- La directive ePrivacy de l'Union européenne
- Le <i lang="en">California Consumer Privacy Act</i> pour l'état de Californie aux États-Unis (s'applique aux entités ayant un revenu brut supérieur à 25 millions de dollars entre autres choses)

Ces textes ont une portée mondiale et s'appliquent à tout site web auquel peut accéder une personne de ces juridictions (ici l'Union européenne et la Californie). Ils décrivent des règles sur&nbsp;:

- La notification des personnes utilisant le site en cas d'utilisation des cookies.
- La capacité des personnes à pouvoir refuser tout ou partie des cookies.
- La capacité des personnes à utiliser les fonctionnalités principales sans recevoir de cookies.

D'autres législations peuvent exister et c'est à l'équipe qui conçoit et développe le site/l'application de les connaître et de s'y conformer. Certaines entreprises fournissent des services relatifs aux bannières de cookies qui peuvent aider à se conformer à ces lois.

## Autres méthodes pour stocker des informations dans le navigateur

Si on veut stocker des données dans le navigateur, une autre approche consiste à utiliser [l'API <i lang="en">Web Storage API</i>](/fr/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API). Les propriétés [`window.sessionStorage`](/fr/docs/Web/API/Window/sessionStorage) et [`window.localStorage`](/fr/docs/Web/API/Window/localStorage) peuvent être vues comme des analogues respectifs aux cookies de session et aux cookies permanents, mais permettent de stocker plus de données que les cookies et ne sont jamais envoyées implicitement au serveur. Pour des données plus structurées et plus volumineuses, on pourra utiliser [l'API IndexedDB](/fr/docs/Web/API/IndexedDB_API), ou une bibliothèque tierce qui facilite son utilisation.

Certaines techniques peuvent être utilisées pour recréer des cookies après leur suppression. On parle alors de cookies zombies. Ces techniques ne respectent pas les règles relatives à la vie privée et être contraires aux lois sur ces questions, exposant un site web qui les utiliserait à des poursuites.

## Voir aussi

- [`Set-Cookie`](/fr/docs/Web/HTTP/Headers/Set-Cookie)
- [`Cookie`](/fr/docs/Web/HTTP/Headers/Cookie)
- [`Document.cookie`](/fr/docs/Web/API/Document/cookie)
- [`Navigator.cookieEnabled`](/fr/docs/Web/API/Navigator/cookieEnabled)
- [L'attribut `SameSite`](/fr/docs/Web/HTTP/Headers/Set-Cookie/SameSite)
- [La RFC 6265 qui spécifie les cookies](https://datatracker.ietf.org/doc/html/rfc6265)
- [La page Wikipédia sur les cookies](<https://fr.wikipedia.org/wiki/Cookie_(informatique)>)
- [Les cookies, le RGPD, et la directive ePrivacy (pas un site officiel de l'UE)](https://gdpr.eu/cookies/)
- [Firefox&nbsp;: inspecter les cookies en utilisant l'inspecteur de stockage (en anglais)](https://firefox-source-docs.mozilla.org/devtools-user/storage_inspector/index.html)
