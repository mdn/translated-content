---
title: Falsification de requête intersites (CSRF)
slug: Web/Security/Attacks/CSRF
l10n:
  sourceCommit: e142af8b967180298c5718a381cb8953434b175f
---

Dans une attaque de falsification de requête intersites (<i lang="en">cross-site request forgery</i>, CSRF), un·e attaquant·e amène l'utilisateur·ice ou le navigateur à émettre une requête HTTP vers le site visé depuis un site malveillant. La requête inclut les informations d'identification de l'utilisateur·ice et amène le serveur à exécuter une action nuisible, pensant que l'utilisateur·ice l'a voulue.

## Vue d'ensemble

Un site web effectue généralement des actions particulières pour le compte d'un·e utilisateur·ice — acheter un produit ou prendre un rendez-vous, par exemple — en recevant une requête HTTP depuis le navigateur de l'utilisateur·ice, souvent avec des paramètres détaillant l'action à réaliser. Pour s'assurer que la requête provient bien de la personne visée, le serveur s'attend à ce qu'elle inclue des {{glossary("Credential", "credentials")}} pour l'utilisateur·ice&nbsp;: par exemple, un cookie contenant l'identifiant de session.

Dans l'exemple ci‑dessous, l'utilisateur·ice s'est déjà connecté·e à sa banque et le navigateur a enregistré un cookie de session. La page contient un élément {{htmlelement("form")}}, qui permet de transférer des fonds à une autre personne. Lorsque l'utilisateur·ice soumet le formulaire, le navigateur envoie une requête {{httpmethod("POST")}} au serveur, incluant les données du formulaire. Si l'utilisateur·ice est connecté·e, la requête inclut le cookie de l'utilisateur·ice. Le serveur valide le cookie et réalise l'action particulière — ici, le virement&nbsp;:

![Diagramme montrant un·e utilisateur·ice qui soumet un formulaire dans le navigateur, le navigateur effectuant ensuite une requête POST vers le serveur, et le serveur validant la requête.](form-post.svg)

Dans ce guide, nous appellerons une telle requête, qui exécute une action particulière, une _requête modifiant l'état_.

Dans une attaque CSRF, l'attaquant·e crée un site contenant un formulaire. L'[`attribut action`](/fr/docs/Web/HTML/Reference/Elements/form#action) du formulaire pointe vers le site de la banque, et le formulaire contient des champs cachés imitant ceux de la banque&nbsp;:

```html
<form action="https://ma-banque.exemple.org/transfer" method="POST">
  <input type="hidden" name="recipient" value="attacker" />
  <input type="hidden" name="amount" value="1000" />
</form>
```

La page contient aussi du JavaScript qui soumet le formulaire au chargement de la page&nbsp;:

```js
const form = document.querySelector("form");
form.submit();
```

Lorsque l'utilisateur·ice visite la page, le navigateur soumet le formulaire au site de la banque. Comme l'utilisateur·ice est connecté·e à sa banque, la requête peut inclure le vrai cookie de l'utilisateur·ice, si bien que le serveur de la banque valide la requête et transfère les fonds&nbsp;:

![Diagramme montrant une attaque CSRF dans laquelle une page leurre soumet une requête POST au site bancaire de l'utilisateur·ice.](csrf-form-post.svg)

Il existe d'autres moyens pour l'attaquant·e d'émettre une falsification de requête intersites. Par exemple, si le site utilise une requête {{httpmethod("GET")}} pour effectuer l'action, l'attaquant·e peut éviter d'utiliser un formulaire et exécuter l'attaque en envoyant à la personne visée un lien vers une page qui contient un balisage comme ceci&nbsp;:

```html
<img
  src="https://ma-banque.exemple.org/transfer?recipient=attacker&amount=1000" />
```

Lorsque l'utilisateur·ice charge la page, le navigateur tente de récupérer la ressource d'image, qui est en réalité la requête de transaction.

De manière générale, une attaque CSRF est possible si votre site&nbsp;:

- Utilise des requêtes HTTP pour modifier un état côté serveur.
- Utilise uniquement des cookies pour vérifier que la requête provient d'un·e utilisateur·ice authentifié·e.
- Utilise uniquement des paramètres dans la requête que l'attaquant·e peut prédire.

## Défenses contre CSRF

Dans cette section, nous décrivons trois défenses alternatives contre CSRF et une quatrième pratique à utiliser en _défense en profondeur_ qui complète l'une ou l'autre.

- La première défense principale consiste à [utiliser des _jetons CSRF_](#jetons_csrf) intégrés à la page. C'est la méthode la plus courante si vous émettez des requêtes modifiant l'état depuis des formulaires, comme dans l'exemple ci‑dessus.

- La deuxième consiste à [utiliser les _métadonnées Fetch_](#métadonnées_fetch) via des en‑têtes HTTP pour vérifier si la requête modifiant l'état est émise intersite ou non.

- La troisième consiste à s'assurer que les requêtes modifiant l'état [ne sont pas des _requêtes simples_](#éviter_les_requêtes_simples), afin que les requêtes intersites soient bloquées par défaut. Cette méthode convient si vous émettez des requêtes modifiant l'état via des API JavaScript comme {{domxref("Window.fetch()", "fetch()")}}.

Enfin, nous aborderons [l'attribut de cookie `SameSite`](#défense_en_profondeur_cookies_samesite), qui peut servir de défense en profondeur aux côtés de l'une des méthodes précédentes.

### Jetons CSRF

Dans cette défense, lorsque le serveur sert une page, il y intègre une valeur imprévisible appelée _jeton CSRF_. Ensuite, lorsque la page légitime envoie la requête modifiant l'état au serveur, elle inclut le jeton CSRF dans la requête HTTP. Le serveur peut alors vérifier la valeur du jeton et n'exécute la requête que si elle correspond. Comme un·e attaquant·e ne peut pas deviner la valeur du jeton, il·elle ne peut pas émettre une falsification réussie. Même si l'attaquant·e découvre un jeton après son utilisation, la requête ne peut pas être rejouée si le jeton change à chaque fois.

Pour les soumissions de formulaire, le jeton CSRF est généralement inclus dans un champ caché, de sorte qu'il soit automatiquement renvoyé au serveur pour vérification lors de la soumission du formulaire.

Pour une API JavaScript comme `fetch()`, le jeton peut être placé dans un cookie ou intégré à la page, puis JavaScript extrait la valeur et l'envoie dans un en‑tête supplémentaire.

Les frameworks web modernes proposent généralement une prise en charge intégrée des jetons CSRF&nbsp;: par exemple, [Django <sup>(angl.)</sup>](https://www.djangoproject.com/) permet de protéger les formulaires à l'aide de la balise [`csrf_token` <sup>(angl.)</sup>](https://docs.djangoproject.com/en/5.1/ref/csrf/). Cette balise génère un champ de formulaire caché supplémentaire contenant le jeton, que le framework vérifie ensuite côté serveur.

Pour tirer parti de cette protection, vous devez comprendre tous les endroits de votre site où vous utilisez des requêtes HTTP modifiant l'état et vous assurer d'utiliser la défense fournie par votre framework choisi.

### Métadonnées Fetch

Les métadonnées Fetch sont un ensemble d'en‑têtes de requête HTTP, ajoutés par le navigateur, qui fournissent des informations supplémentaires sur le contexte d'une requête HTTP. Le serveur peut utiliser ces en‑têtes pour décider d'autoriser ou non une requête.

Le plus pertinent pour CSRF est l'en‑tête {{httpheader("Sec-Fetch-Site")}}, qui indique au serveur si la requête est _same-origin_, _same-site_, _cross-site_ ou initiée directement par l'utilisateur·ice. Le serveur peut utiliser cette information pour autoriser les requêtes d'origine autorisée ou les bloquer comme des attaques CSRF potentielles.

Par exemple, ce code [Express](/fr/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs) n'autorise que les requêtes _same-site_ et _same-origin_&nbsp;:

```js
app.post("/transfer", (req, res) => {
  const secFetchSite = req.headers["sec-fetch-site"];
  if (secFetchSite === "same-origin" || secFetchSite === "same-site") {
    console.log("allowed");
    // Met à jour de l'état
  } else {
    console.log("denied");
    // Ne met pas à jour l'état
  }
});
```

Voir {{glossary("Fetch metadata request header")}} pour la liste complète des en‑têtes de métadonnées Fetch, et [Protéger vos ressources contre les attaques web avec Fetch Metadata <sup>(angl.)</sup>](https://web.dev/articles/fetch-metadata) pour un guide d'utilisation.

### Éviter les requêtes simples

Les navigateurs distinguent deux types de requêtes HTTP&nbsp;: les [_requêtes simples_](/fr/docs/Web/HTTP/Guides/CORS#simple_requests) et les autres.

Les requêtes simples, qui sont le type de requête émise par la soumission d'un élément `<form>`, peuvent être effectuées intersites sans être bloquées. Puisque les formulaires peuvent émettre des requêtes intersites depuis les débuts du web, il est important pour la compatibilité qu'ils puissent toujours le faire. C'est pourquoi nous devons implémenter d'autres stratégies pour protéger les formulaires contre CSRF, comme l'utilisation d'un jeton CSRF.

En revanche, d'autres parties de la plateforme web, en particulier des API JavaScript comme {{domxref("Window.fetch()", "fetch()")}}, peuvent émettre d'autres types de requêtes (par exemple, des requêtes qui définissent des en‑têtes personnalisés), et ces requêtes ne sont pas autorisées intersites par défaut, de sorte qu'une attaque CSRF ne réussirait pas.

Ainsi, un site web qui utilise `fetch()` ou `XMLHttpRequest` peut se protéger contre CSRF en s'assurant que les requêtes modifiant l'état qu'il émet ne sont jamais des requêtes simples.

Par exemple, définir l'{{httpheader("Content-Type")}} de la requête à `"application/json"` empêchera son traitement en tant que requête simple&nbsp;:

```js
fetch("https://ma-banque.exemple.org/transfer", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ recipient: "joe", amount: "100" }),
});
```

De même, définir un en‑tête personnalisé sur la requête empêchera son traitement comme requête simple&nbsp;:

```js
fetch("https://ma-banque.exemple.org/transfer", {
  method: "POST",
  headers: {
    "X-MA-BANQUE-ANTI-CSRF": 1,
  },
  body: JSON.stringify({ recipient: "joe", amount: "100" }),
});
```

Le nom de l'en‑tête peut être quelconque, tant qu'il n'entre pas en conflit avec des en‑têtes standards.

Le serveur peut alors vérifier l'existence de l'en‑tête&nbsp;: s'il existe, le serveur sait que la requête n'a pas été traitée comme une requête simple.

#### Requêtes non simples et CORS

Nous avons dit que les requêtes non simples ne sont _par défaut_ pas envoyées intersites. Le problème est que le protocole [Partage des ressources entre origines (CORS)](/fr/docs/Web/HTTP/Guides/CORS) permet à un site d'assouplir cette restriction.

Plus précisément, votre site sera vulnérable à une attaque CSRF depuis une origine donnée si sa réponse à une requête modifiant l'état inclut&nbsp;:

- L'en‑tête {{httpheader("Access-Control-Allow-Origin")}} et que cet en‑tête liste l'origine émettrice&nbsp;;
- L'en‑tête {{httpheader("Access-Control-Allow-Credentials")}}.

### Défense en profondeur&nbsp;: cookies SameSite

L'attribut de cookie [`SameSite`](/fr/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value) apporte une certaine protection contre les attaques CSRF. Ce n'est pas une défense complète, et il convient de la considérer comme un complément à l'une des autres défenses, pour fournir une certaine défense en profondeur.

Cet attribut contrôle quand un navigateur est autorisé à inclure le cookie dans une requête intersite. Il a trois valeurs possibles&nbsp;: `None`, `Lax` et `Strict`.

La valeur `Strict` offre la protection la plus forte&nbsp;: si cet attribut est défini, le navigateur n'inclura le cookie dans aucune requête intersite. Cependant, cela crée un problème d'ergonomie&nbsp;: si l'utilisateur·ice est connecté·e à votre site et suit un lien vers votre site depuis un autre site, alors vos cookies ne seront pas inclus, et l'utilisateur·ice ne sera pas reconnu·e à l'arrivée sur votre site.

La valeur `Lax` assouplit cette restriction&nbsp;: les cookies sont inclus dans les requêtes intersites si les deux conditions suivantes s'appliquent&nbsp;:

- La requête est une navigation du contexte de navigation de niveau supérieur.
- La requête a utilisé une méthode {{glossary("Safe/HTTP", "safe")}}&nbsp;: notablement, {{httpmethod("GET")}} est sûre, mais {{httpmethod("POST")}} ne l'est pas.

Cependant, `Lax` offre une protection nettement plus faible que `Strict`&nbsp;:

- Un·e attaquant·e peut déclencher une navigation de premier niveau. Par exemple, au début de cet article, nous montrons une attaque CSRF où l'attaquant·e soumet un formulaire vers la cible&nbsp;: cela est considéré comme une navigation de premier niveau. Si le formulaire était soumis avec `GET`, alors la requête inclurait tout de même des cookies avec `SameSite=Lax`.
- Même si le serveur vérifie que la requête n'a pas été envoyée avec `GET`, certains frameworks web prennent en charge la «&nbsp;surcharge de méthode&nbsp;» (<i lang="en">method override</i>)&nbsp;: cela permet à un·e attaquant·e d'envoyer une requête avec `GET` tout en la faisant apparaître côté serveur comme si elle utilisait `POST`.

De façon générale, vous devriez essayer d'utiliser `Strict` pour certains cookies et `Lax` pour d'autres&nbsp;:

- `Lax` pour les cookies que vous utilisez afin de décider si un·e utilisateur·ice connecté·e doit se voir afficher une page&nbsp;;
- `Strict` pour les cookies utilisés pour des requêtes modifiant l'état que vous ne souhaitez pas autoriser intersites.

Un autre problème avec l'attribut `SameSite` est qu'il protège des requêtes provenant d'un autre {{glossary("Site", "site")}}, et non d'une autre {{glossary("Origin", "origin")}}. C'est une protection plus laxiste, car (par exemple) `https://foo.example.org` et `https://bar.example.org` sont considérés comme le même site, bien qu'ils soient des origines différentes. En pratique, si vous comptez sur la protection _same‑site_, vous devez faire confiance à tous les sous‑domaines de votre site.

Voir [Contournement des restrictions de cookies SameSite <sup>(angl.)</sup>](https://portswigger.net/web-security/csrf/bypassing-samesite-restrictions) pour plus de détails sur les limites de `SameSite`.

### Liste de contrôle récapitulative de la défense

Nous pouvons résumer les défenses ci‑dessus ainsi&nbsp;:

- Comprendre où, dans votre site, vous implémentez des requêtes modifiant l'état qui utilisent des cookies de session pour déterminer quel·le utilisateur·ice a émis la requête.
- Mettre en œuvre au moins une des défenses principales décrites dans ce document&nbsp;:
  - Si vous utilisez des éléments `<form>` pour émettre ces requêtes, assurez‑vous d'utiliser un framework qui prend en charge les jetons CSRF et utilisez‑le.
  - Si vous utilisez des API JavaScript comme `fetch()` ou `XMLHttpRequest` pour émettre des requêtes modifiant l'état, assurez‑vous qu'elles ne soient pas des requêtes simples.
  - Quel que soit le mécanisme utilisé pour émettre les requêtes, envisagez d'utiliser les métadonnées Fetch pour interdire les requêtes intersites.
- Éviter d'utiliser la méthode `GET` pour émettre des requêtes modifiant l'état.
- Définir l'attribut `SameSite` des cookies de session sur `Strict` si vous le pouvez, ou `Lax` si nécessaire.

## Voir aussi

- [Aide‑mémoire de prévention des CSRF <sup>(angl.)</sup>](https://cheatsheetseries.owasp.org/cheatsheets/Cross-Site_Request_Forgery_Prevention_Cheat_Sheet.html) sur [owasp.org <sup>(angl.)</sup>](https://owasp.org/)
