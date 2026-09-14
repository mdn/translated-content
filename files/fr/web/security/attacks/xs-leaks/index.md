---
title: Fuites inter-sites (Fuites-XS)
slug: Web/Security/Attacks/XS-Leaks
l10n:
  sourceCommit: 81bf621759d3a52fdf737c2d75f186a0073d1406
---

Les fuites inter-sites, également appelées Fuites-XS (<i lang="en">Cross-Site Leaks</i> en anglais, raccourci <abbr lang="en">XS-Leaks</abbr>), sont une classe d'attaques dans laquelle le site d'un·e attaquant·e peut obtenir des informations sur le site cible, ou sur la relation de l'utilisateur·ice avec le site cible, en utilisant les API de la plateforme web qui permettent aux sites d'interagir entre eux. Les informations divulguées peuvent inclure, par exemple&nbsp;:

- Si l'utilisateur·ice a visité·e le site cible.
- Si l'utilisateur·ice est connecté·e au site cible.
- Quel est l'identifiant de l'utilisateur·ice sur le site.
- Ce que l'utilisateur·ice a récemment recherché sur le site.

Cela peut sembler être un problème beaucoup moins grave que, par exemple, une attaque de [script inter-sites](/fr/docs/Web/Security/Attacks/XSS), mais cela peut tout de même avoir de graves conséquences pour les utilisateur·ice·s. Par exemple&nbsp;:

- Un·e utilisateur·ice peut avoir des comptes sur des sites web qu'il ou elle ne souhaite pas rendre publics. La divulgation de ces informations à un·e attaquant·e peut l'exposer à des extorsions ou à des représailles de la part d'un gouvernement oppressif (par exemple, contre un·e utilisateur·ice recherchant des informations sur des procédures médicales spécifiques).
- Savoir qu'un·e utilisateur·ice a un compte sur un site, surtout si son identifiant peut être déterminé, peut rendre une attaque d'hameçonnage ultérieure beaucoup plus convaincante.

Contrairement à d'autres attaques telles que les [scripts inter-sites](/fr/docs/Web/Security/Attacks/XSS) ou le [détournement de clics](/fr/docs/Web/Security/Attacks/Clickjacking), les fuites inter-sites ne constituent pas une technique unique. Il s'agit plutôt d'un terme désignant une classe entière d'attaques qui exploitent les faiblesses des mécanismes d'isolation des sites web par les navigateurs.

Dans ce guide, nous n'essayons pas de décrire toutes les attaques et défenses liées aux fuites inter-sites. Nous commençons plutôt par décrire quelques attaques exemples, puis nous présentons les faiblesses sous-jacentes communes qui les rendent possibles, avant de décrire certaines défenses générales pouvant fonctionner contre de nombreuses attaques connues.

## Exemples de fuites inter-sites

Dans cette section, nous décrivons trois fuites inter-sites différentes, pour donner une idée de leur fonctionnement.

- [Révéler l'existence d'une page à l'aide d'évènements d'erreur](#révéler_lexistence_dune_page_à_laide_dévènements_derreur)&nbsp;: dans cette attaque, un·e attaquant·e peut déterminer si certains points de terminaison du site cible retournent des codes d'erreur HTTP, en essayant de les charger en tant que ressources et en écoutant les événements {{DOMxRef("HTMLElement/error_event", "error")}} et {{DOMxRef("HTMLElement/load_event", "load")}}. Si certaines pages ne sont disponibles que pour les utilisateur·ice·s connectés, l'attaquant·e peut déterminer si l'utilisateur·ice est connecté·e au site cible.
- [Compter les cadres en utilisant des références de fenêtre](#compter_les_cadres_en_utilisant_des_références_de_fenêtre)&nbsp;: dans cette attaque, un·e attaquant·e obtient une référence à un objet {{DOMxRef("Window")}} hébergeant une page du site cible, par exemple en tant que valeur de retour d'un appel à {{DOMxRef("Window.open()")}}. L'attaquant·e peut alors déterminer le nombre d'éléments {{HTMLElement("iframe")}} dans la page cible, ce qui peut à nouveau révéler si l'utilisateur·ice est connecté·e au site cible.
- [Fuite de redirections avec une CSP](#fuite_de_redirections_avec_une_csp)&nbsp;: dans cette attaque, la page de l'attaquant·e dispose d'une [politique de sécurité du contenu](/fr/docs/Web/HTTP/Guides/CSP) qui n'autorise le chargement que d'une page particulière du site cible, puis tente de charger cette page. Si le chargement de la page est bloqué, l'attaquant·e sait que le site cible a redirigé la requête. Cette redirection peut indiquer si l'utilisateur·ice était connecté·e (ou non) en fonction du fonctionnement du site.

Ces trois attaques sont déployées de la même manière&nbsp;: l'attaquant·e crée une page qui met en œuvre l'attaque, puis persuade l'utilisateur·ice de visiter la page, par exemple en lui envoyant un courriel ou en partageant un post contenant le lien. Lorsque l'utilisateur·ice visite la page, l'attaque s'exécute automatiquement.

Dans le reste de cette section, nous décrivons ces trois attaques un peu plus en détail, afin de vous donner une idée concrète de leur fonctionnement. Bien que les trois attaques ciblent des parties assez différentes de la plateforme web, elles ont une cause sous-jacente commune&nbsp;: la mesure dans laquelle le navigateur permet aux sites web de se connecter et d'interagir entre eux par des mécanismes tels que l'encadrement, le chargement de sous-ressources ou l'ouverture de nouvelles fenêtres.

> [!NOTE]
> Pour un catalogue plus complet des fuites inter-sites, voir le [Wiki des Fuites-XS <sup>(angl.)</sup>](https://xsleaks.dev/) et [l'antisèche OWASP sur les fuites inter-sites <sup>(angl.)</sup>](https://cheatsheetseries.owasp.org/cheatsheets/XS_Leaks_Cheat_Sheet.html).

### Révéler l'existence d'une page à l'aide d'évènements d'erreur

Dans cette attaque, l'attaquant·e teste si certaines pages du site cible peuvent être chargées, en vérifiant si les tentatives de les intégrer en tant que ressources génèrent une erreur. Si ces pages ne sont disponibles que pour les utilisateur·ice·s connecté·e·s, un·e attaquant·e peut déterminer si un·e utilisateur·ice est connecté·e.

L'attaque repose sur la capacité d'un site web à charger une ressource depuis un autre site, par exemple en définissant l'attribut `src` d'un élément HTML {{HTMLElement("script")}} sur l'URL de la ressource&nbsp;:

```js
const script = document.createElement("script");
script.src = "https://example.org/admin";
document.head.appendChild(script);
```

Cela entraîne une requête HTTP vers le site `https://example.org/`. Si la requête inclut des cookies que le site utilise pour identifier les utilisateur·ice·s, et que la page demandée n'est disponible que pour les utilisateur·ice·s connecté·e·s, alors le succès ou l'échec de la requête révèle si l'utilisateur·ice est connecté·e ou non.

Si la requête échoue, par exemple parce que le serveur retourne un code d'état HTTP {{HTTPStatus("404")}}, alors l'élément déclenche un évènement {{DOMxRef("HTMLElement/error_event", "error")}}. Si la requête réussit, l'élément déclenche un évènement {{DOMxRef("HTMLElement/load_event", "load")}}. En écoutant ces évènements, l'attaquant·e peut découvrir si l'utilisateur·ice est connecté·e.

```js
const url = "https://example.org/admin";
const script = document.createElement("script");

script.addEventListener("load", (e) => {
  console.log(`${url} existe`);
});

script.addEventListener("error", (e) => {
  console.log(`${url} n'existe pas`);
});

script.src = url;
document.head.appendChild(script);
```

Un·e attaquant·e peut même être capable de découvrir l'identifiant d'un·e utilisateur·ice, en essayant itérativement de charger des pages pour voir si des pages comme `https://example.org/users/mon_identifiant` existent.

### Compter les cadres en utilisant des références de fenêtre

Dans une attaque de comptage de cadres, l'attaquant·e découvre le nombre de cadres actuellement chargés dans la page cible. Cela révèle des informations sur l'état du site cible, ce qui peut permettre à l'attaquant·e de savoir, par exemple, si l'utilisateur·ice est actuellement connecté·e au site.

Si un site attaquant obtient une référence à un objet {{DOMxRef("Window")}} contenant le site cible, l'attaquant·e peut compter le nombre de cadres dans le site cible en lisant la propriété {{DOMxRef("Window.length", "window.length")}}.

L'attaquant·e peut obtenir un objet `Window` en appelant {{DOMxRef("Window.open()", "window.open()")}}&nbsp;:

```js
const cible = window.open("https://example.org");
const cadres = cible.length;
```

D'une autre manière, l'attaquant·e peut intégrer le site cible dans un cadre intégré ({{HTMLElement("iframe")}}), et récupérer la propriété {{DOMxRef("HTMLIFrameElement.contentWindow", "contentWindow")}} du cadre&nbsp;:

```html
<iframe src="https://example.org"></iframe>
```

```js
const cible = document.querySelector("iframe").contentWindow;
const cadres = cible.length;
```

### Fuite de redirections avec une CSP

Sur certains sites web, le serveur redirige une requête, ou non, en fonction du fait que l'utilisateur·ice est connecté·e (ou a un statut spécial sur le site). Par exemple, imaginez un site qui montre aux administrateur·ice·s une page à `https://admin.example.org/`. Si l'utilisateur·ice n'est pas connecté·e et demande cette page, le serveur peut alors le·la rediriger vers `https://login.example.org/`.
Cela signifie que si un·e attaquant·e pouvait déterminer si une tentative de chargement de `https://admin.example.org/` a conduit à une redirection, il·elle sait alors si l'utilisateur·ice est administrateur·ice sur le site.

Dans l'attaque décrite ici, l'attaquant·e utilise la fonctionnalité [Politique de sécurité du contenu (CSP)](/fr/docs/Web/HTTP/Guides/CSP) pour détecter si une requête inter-site a été redirigée.

- Tout d'abord, ils créent une page régie par une CSP qui n'autorise que les éléments HTML {{HTMLElement("iframe")}} à contenir du contenu provenant de `https://admin.example.org/`.

- Ensuite, ils ajoutent un écouteur d'évènement dans la page qui écoute l'évènement {{DOMxRef("Document.securitypolicyviolation_event", "securitypolicyviolation")}}.

- Enfin, ils créent un élément HTML {{HTMLElement("iframe")}} et définissent son attribut `src` sur `https://admin.example.org/`.

```html
<!doctype html>
<html lang="fr">
  <head>
    <meta
      http-equiv="Content-Security-Policy"
      content="frame-src https://admin.example.org/" />
  </head>
  <body>
    <script>
      document.addEventListener("securitypolicyviolation", () => {
        console.log("La page a été redirigée");
      });
      const cadre = document.createElement("iframe");
      document.body.appendChild(cadre);
      cadre.src = "https://admin.example.org/";
    </script>
  </body>
</html>
```

- Si l'utilisateur·ice est connecté·e en tant qu'administrateur, alors un `<iframe>` se charge, et le navigateur ne déclenche pas `securitypolicyviolation`.
- Si l'utilisateur·ice n'est pas connecté·e en tant qu'administrateur, le serveur redirige vers `https://login.example.org/`. Comme cette URL n'est pas autorisée par la CSP de l'attaquant·e, le navigateur bloque le `<iframe>` et déclenche l'évènement `securitypolicyviolation`, et le gestionnaire d'évènements de l'attaquant·e s'exécute.

Notez que cette attaque fonctionne même si le site cible interdit l'intégration en utilisant un mécanisme tel que {{CSP("frame-ancestors")}}.

## Défenses contre les fuites inter-sites

Les fuites inter-sites exploitent des mécanismes de la plateforme web qui permettent aux sites web d'interagir entre eux. En conséquence, les défenses contre les fuites inter-sites impliquent généralement _d'isoler_ le site cible des attaquant·e·s potentiel·le·s, en désactivant ou en contrôlant ces interactions inter-sites.

Comme les fuites inter-sites peuvent fonctionner de nombreuses manières différentes, il n'existe pas de défense unique qui fonctionne contre toutes. Cependant, il existe plusieurs pratiques qui fonctionnent contre beaucoup d'entre elles, et nous les résumons ici.

### Récupérer les métadonnées

La [récupération des métadonnées](/fr/docs/Web/HTTP/Guides/Fetch_metadata) est le terme utilisé pour une collection d'en-têtes de requête HTTP qui fournissent des informations sur le contexte d'une requête HTTP, y compris&nbsp;:

- {{HTTPHeader("Sec-Fetch-Site")}}&nbsp;: Si la requête est de même origine, du même site ou inter-site.
- {{HTTPHeader("Sec-Fetch-Mode")}}&nbsp;: Le {{DOMxRef("Request.mode", "mode")}} de la requête.
- {{HTTPHeader("Sec-Fetch-User")}}&nbsp;: Si la requête est une navigation initiée par l'utilisateur·ice.
- {{HTTPHeader("Sec-Fetch-Dest")}}&nbsp;: Le {{DOMxRef("Request.destination", "destination")}} de la requête.

Les en-têtes de récupération des métadonnées ne constituent pas un mécanisme de défense en soi, mais permettent à un serveur de mettre en œuvre une politique qui refuse les requêtes utilisées dans les fuites inter-sites ainsi que dans d'autres attaques telles que les attaques par [falsification de requête inter-sites (CSRF)](/fr/docs/Web/Security/Attacks/CSRF).

Par exemple, l'attaque [Révéler l'existence d'une page à l'aide d'évènements d'erreur](#révéler_lexistence_dune_page_à_laide_dévènements_derreur) dépend du fait que l'attaquant·e puisse effectuer des requêtes inter-sites pour charger, en tant que ressources, des pages appartenant à la cible&nbsp;:

```js
// Essaye de charger une page dans la cible en tant que ressource
const script = document.createElement("script");
script.src = "https://example.org/admin";
document.head.appendChild(script);
```

Un serveur peut utiliser la récupération des métadonnées pour refuser ces requêtes, comme dans le code [Express](/fr/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs) suivant&nbsp;:

```js
function estAutorise(req) {
  // Autorise les requêtes de même origine, du même site et initiées par l'utilisateur·ice
  const secFetchSite = req.headers["sec-fetch-site"];
  if (
    secFetchSite === "same-origin" ||
    secFetchSite === "same-site" ||
    secFetchSite === "none"
  ) {
    return true;
  }

  // Autorise les navigations inter-sites, comme cliquer sur des liens
  const secFetchMode = req.headers["sec-fetch-mode"];
  if (secFetchMode === "navigate" && req.method === "GET") {
    return true;
  }

  // Refuse tout le reste
  return false;
}

app.get("/admin", (req, res) => {
  res.setHeader("Vary", "sec-fetch-site, sec-fetch-mode");
  if (estAutorise(req)) {
    // Répond avec la page d'administration si l'utilisateur·ice est admin
    obtenirPageAdmin(req, res);
  } else {
    res.status(404).send("Introuvable.");
  }
});
```

Comme la requête de l'attaquant·e est inter-site et n'est pas une navigation, ce serveur retourne toujours une erreur pour celle-ci, que l'utilisateur·ice soit connecté·e ou non.

Notez que nous envoyons également l'en-tête de réponse {{HTTPHeader("Vary")}}. Cela garantit que si la réponse est mise en cache, la réponse mise en cache n'est donnée qu'aux requêtes ayant les mêmes valeurs pour les en-têtes de métadonnées de récupération que nous utilisons.

Une telle politique est appelée _politique d'isolation des ressources_. Pour en apprendre davantage sur l'implémentation de politiques d'isolation avec les métadonnées de récupération, consultez [Protéger vos ressources contre les attaques web avec les métadonnées de récupération <sup>(angl.)</sup>](https://web.dev/articles/fetch-metadata) et [Politiques d'isolation <sup>(angl.)</sup>](https://xsleaks.dev/docs/defenses/isolation-policies/).

### Cookies `SameSite`

L'attribut de cookie [`SameSite`](/fr/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value) détermine si le cookie est envoyé ou non dans les requêtes provenant d'un autre site.

La valeur `Lax` de `SameSite` signifie que les requêtes inter-sites incluent le cookie uniquement si la requête est une navigation de niveau supérieur (ce qui signifie essentiellement que la valeur de la barre d'adresse du navigateur change pour le site cible) et utilise une méthode {{Glossary("Safe/HTTP", "sûre")}} (notamment, cela exclut les requêtes {{HTTPMethod("POST")}}).

Cela peut protéger contre certaines fuites inter-sites. Par exemple, l'attaque [Révéler l'existence d'une page à l'aide d'évènements d'erreur](#révéler_lexistence_dune_page_à_laide_dévènements_derreur) dépend de requêtes de ressources inter-sites effectuées par l'attaquant·e et incluant les cookies de session de l'utilisateur·ice. Définir `SameSite` à `Lax` sur le cookie de session de l'utilisateur·ice empêche cette attaque, car le cookie n'est pas inclus dans la requête de l'attaquant·e et le serveur ne retourne jamais de page nécessitant une connexion.

En règle générale, traitez `SameSite` comme une mesure de défense en profondeur et déployez-la en complément d'une politique d'isolation plus explicite, comme une politique fondée sur les métadonnées de récupération.

### Empêcher l'encadrement

De nombreuses fuites inter-sites reposent sur la capacité du site attaquant à intégrer la cible dans un élément HTML {{HTMLElement("iframe")}}. Par exemple, l'attaquant·e peut utiliser cette méthode pour obtenir une référence vers la fenêtre ({{DOMxRef("Window")}}) de la cible et permettre une attaque de [comptage de cadres](#compter_les_cadres_en_utilisant_des_références_de_fenêtre).

Il est donc recommandé d'empêcher l'intégration d'un site, sauf si vous devez l'autoriser. Si vous devez l'autoriser, limitez-la autant que possible.

Deux outils sont pertinents ici&nbsp;:

- La [directive `frame-ancestors`](/fr/docs/Web/HTTP/Guides/CSP#protection_contre_le_détournement_de_clics) d'une [politique de sécurité du contenu](/fr/docs/Web/HTTP/Guides/CSP).
- L'en-tête de réponse {{HTTPHeader("X-Frame-Options")}}.

La directive `frame-ancestors` remplace `X-Frame-Options`. Bien que [la prise en charge de `frame-ancestors` par les navigateurs soit très bonne](/fr/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/frame-ancestors#compatibilité_des_navigateurs), certains navigateurs très anciens, notamment Internet Explorer, ne prennent pas en charge `frame-ancestors`.

Si `frame-ancestors` et `X-Frame-Options` sont tous deux définis, les navigateurs qui prennent en charge `frame-ancestors` ignorent `X-Frame-Options`. Il n'y a donc aucune raison de ne pas définir `X-Frame-Options` en plus de `frame-ancestors` et d'empêcher ainsi l'intégration, même dans les navigateurs qui ne prennent pas en charge `frame-ancestors`.

### Politique d'ouverture inter-origine (COOP)

Comme nous l'avons vu dans l'attaque consistant à [compter les cadres](#compter_les_cadres_en_utilisant_des_références_de_fenêtre), une autre façon d'obtenir une référence vers la fenêtre ({{DOMxRef("Window")}}) de la cible consiste à utiliser la valeur de retour d'un appel à {{DOMxRef("Window.open()", "window.open()")}}&nbsp;:

```js
const cible = window.open("https://example.com");
```

L'en-tête de réponse {{HTTPHeader("Cross-Origin-Opener-Policy")}} détermine si un document est ouvert dans le même {{Glossary("Browsing context", "groupe de contextes de navigation")}} que le document qui l'a ouvert.

Si votre serveur envoie cet en-tête et lui attribue une valeur autre que la valeur par défaut `"unsafe-none"`, alors, si un document d'une autre origine tente d'ouvrir votre page avec `window.open()`, votre page est chargée dans un autre groupe de contextes de navigation. Cela signifie notamment que l'ouvreur n'obtient pas de référence vers l'objet `window` de votre page et ne peut donc pas l'utiliser dans une attaque de comptage de cadres.

## Liste de contrôle récapitulative de la défense

Les fuites inter-sites regroupent différentes attaques ciblant diverses parties de la plateforme web. Une seule défense ne fonctionne contre aucune d'entre elles et certaines fuites, comme celle qui exploite une CSP pour divulguer des redirections, ne disposent encore d'aucune défense.

Dans ce guide, nous avons présenté quelques défenses qui contribuent à isoler votre site des attaquant·e·s potentiel·le·s et nous vous recommandons de toutes les mettre en œuvre&nbsp;:

- Utilisez les métadonnées de récupération pour mettre en œuvre une politique d'isolation des ressources.
- Définissez l'attribut `SameSite` des cookies de session sur `Strict` si possible ou sur `Lax` si nécessaire.
- Utilisez la directive CSP `frame-ancestors` et l'en-tête de réponse `X-Frame-Options` pour empêcher l'intégration de votre site ou contrôler les sites qui peuvent l'intégrer.
- Envoyez l'en-tête de réponse `Cross-Origin-Opener-Policy` pour empêcher les autres sites d'accéder à votre objet global `window`.

## Voir aussi

- [Wiki des Fuites-XS <sup>(angl.)</sup>](https://xsleaks.dev/) (xsleaks.dev)
- [Antisèche sur les fuites inter-sites <sup>(angl.)</sup>](https://cheatsheetseries.owasp.org/cheatsheets/XS_Leaks_Cheat_Sheet.html) (OWASP)
