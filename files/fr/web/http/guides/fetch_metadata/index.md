---
title: Métadonnées de récupération
slug: Web/HTTP/Guides/Fetch_metadata
l10n:
  sourceCommit: 7e4e8954972d77196e4beedca4a3f8610da34dc9
---

Une **métadonnée de récupération** est le terme désignant un groupe d'en-têtes de requête HTTP qui fournissent au serveur des informations sur le contexte dans lequel la requête est effectuée.

Entre autres choses, les métadonnées de récupération permettent au serveur de savoir&nbsp;:

- Si la requête représente une navigation entre documents, une requête pour une sous-ressource, ou si elle a été effectuée explicitement depuis JavaScript, par exemple en utilisant l'API {{DOMxRef("window.fetch()", "fetch()")}}.

- La relation entre le demandeur de la ressource et la ressource demandée&nbsp;: s'ils sont de la même {{Glossary("origin", "origine")}}, du même {{Glossary("site")}}, ou de sites complètement différents.

En utilisant les informations contenues dans ces en-têtes pour autoriser ou refuser des requêtes spécifiques, un serveur peut mettre en place une défense contre les [_attaques inter-origines_](#attaques_inter-origines) telles que les [falsifications de requêtes inter-sites (CSRF)](/fr/docs/Web/Security/Attacks/CSRF) et diverses [fuites inter-sites](/fr/docs/Web/Security/Attacks/XS-Leaks).

## Les en-têtes de métadonnées de récupération

La [spécification des métadonnées de récupération <sup>(angl.)</sup>](https://w3c.github.io/webappsec-fetch-metadata/) définit quatre en-têtes de métadonnées de récupération&nbsp;:

- {{HTTPHeader("Sec-Fetch-Site")}}
- {{HTTPHeader("Sec-Fetch-Mode")}}
- {{HTTPHeader("Sec-Fetch-User")}}
- {{HTTPHeader("Sec-Fetch-Dest")}}

Comme tous les en-têtes préfixés par `Sec-`, ceux-ci sont des {{Glossary("forbidden request header", "en-têtes de requête interdits")}}, ce qui signifie qu'ils ne peuvent pas être définis ou modifiés par le code frontal du site web. De plus, les en-têtes de métadonnées de récupération ne sont envoyés que dans les requêtes vers des [URL potentiellement fiables](/fr/docs/Web/Security/Defenses/Secure_Contexts#url_potentiellement_fiables), de sorte que les serveurs sur des origines non sécurisées (`http://`) ne reçoivent pas ces en-têtes.

### `Sec-Fetch-Dest`

Cet en-tête indique la _destination_ de la requête. Cet attribut est défini dans l'API Fetch, où il est exposé en tant que propriété {{DOMxRef("Request.destination")}}.

On peut le considérer, de manière approximative, comme la manière dont la ressource retournée est utilisée.

Pour la plupart des {{Glossary("replaced elements", "éléments remplacés")}}, la valeur de l'en-tête indique l'élément pour lequel cette ressource est utilisée, comme `iframe`, `object`, `audio` ou `video`. Une valeur de `image` indique que la ressource est utilisée comme image référencée par un élément remplacé tel qu'un élément HTML {{HTMLElement("img")}}, une propriété CSS {{CSSxRef("background-image")}}, un élément SVG {{SVGElement("image")}}, ou tout autre endroit de la plateforme web qui utilise des images chargées à partir de sous-ressources.

D'autres valeurs de destination intéressantes incluent&nbsp;:

- `document`
  - : La requête concerne un nouveau document qui est la cible d'une navigation de niveau supérieur (par exemple, l'utilisateur·ice cliquant sur un lien dans la page ou envoyant un formulaire).

- `script`
  - : La ressource est utilisée comme script chargé à partir d'un élément HTML {{HTMLElement("script")}} ou d'un appel à {{DOMxRef("WorkerGlobalScope.importScripts()", "importScripts()")}} dans un web worker.

    Des valeurs plus spécifiques sont utilisées pour indiquer d'autres endroits où la ressource est utilisée comme script, tels que les worklets (`audioworklet` et `paintworklet`) et les workers (`sharedworker`, `serviceworker` et `worker`).

- `empty`
  - : La requête n'a pas de destination définie&nbsp;: entre autres causes possibles, c'est la valeur donnée si la requête est le résultat d'un appel à {{DOMxRef("Window.fetch()", "fetch()")}}.

Pour l'ensemble complet des valeurs possibles, voir la {{HTTPHeader("Sec-Fetch-Site", "page de référence", "", "nocode")}} pour cet en-tête.

### `Sec-Fetch-Mode`

Cet en-tête indique le _mode_ de la requête. Comme pour la _destination_, le mode est défini dans [l'API Fetch](/fr/docs/Web/API/Fetch_API), où il est exposé en tant que propriété {{DOMxRef("Request.mode")}}.

Les valeurs les plus couramment utilisées sont&nbsp;:

- `navigate`
  - : La requête représente une navigation entre documents (par exemple, l'utilisateur·ice cliquant sur un lien).

- `no-cors`
  - : La requête est effectuée en mode `no-cors`.

    Cela signifie que la requête est autorisée inter-origine sans que le serveur n'envoie les en-têtes [CORS](/fr/docs/Web/HTTP/Guides/CORS) appropriés, avec la restriction que la réponse ne peut pas être accessible par le JavaScript s'exécutant côté client (elle est _opaque_).

    Il s'agit du mode par défaut pour les pages qui chargent des sous-ressources telles que des images, des polices, des scripts et des feuilles de style, et explique pourquoi un site différent est par défaut autorisé à utiliser les sous-ressources de votre site, même si vous n'avez pas configuré CORS pour le permettre.

- `cors`
  - : Si la requête est inter-origine, le serveur doit répondre avec les en-têtes [CORS](/fr/docs/Web/HTTP/Guides/CORS) appropriés, sinon la requête échoue. Si le serveur répond avec les en-têtes CORS appropriés, alors le corps de la réponse et certains en-têtes sont mis à disposition de l'appelant.

    Cela se rencontre le plus souvent pour les requêtes inter-origine effectuées depuis JavaScript en utilisant [l'API Fetch](/fr/docs/Web/API/Fetch_API), lorsque l'appelant a besoin d'accéder à la ressource retournée (par exemple, un appel fetch pour récupérer du JSON depuis le serveur).

- `same-origin`
  - : La requête n'est autorisée que si l'appelant est de la même origine que la ressource demandée.

### `Sec-Fetch-Site`

Ce en-tête indique la relation entre l'origine de la ressource demandée et l'origine du demandeur de la ressource.

Il indique si le demandeur provient de&nbsp;:

- La même {{Glossary("origin", "origine")}} que la ressource demandée.
- Une origine différente, mais le même {{Glossary("site")}}.
- Un site différent.

Par exemple, si un·e utilisateur·ice clique sur un lien dans une page à `https://books.example.org/authors`, le navigateur effectue une requête pour récupérer le document défini dans la cible du lien. Le tableau suivant montre les valeurs de l'en-tête `Sec-Fetch-Site` associé pour différentes valeurs de cible de lien&nbsp;:

| Cible du lien                      | Valeur de `Sec-Fetch-Site` |
| ---------------------------------- | -------------------------- |
| `https://books.example.org/titles` | `same-origin`              |
| `https://login.example.org/`       | `same-site`                |
| `https://books.example.com/titles` | `cross-site`               |

Des correspondances similaires s'appliquent à d'autres requêtes HTTP, telles que&nbsp;:

- Les envois de formulaire par l'attribut [`action`](/fr/docs/Web/HTML/Reference/Elements/form#action) d'un élément HTML {{HTMLElement("form")}}.
- Les requêtes pour des sous-ressources telles que des images, des polices ou des scripts.
- Les requêtes effectuées à l'aide de l'API {{DOMxRef("window.fetch()", "fetch()")}}.

L'en-tête `Sec-Fetch-Site` peut également avoir la valeur `none` pour les requêtes qui n'ont pas de site en tant que demandeur, y compris, par exemple, les requêtes effectuées lorsque l'utilisateur·ice saisit une URL dans la barre d'adresse du navigateur ou clique sur un favori. La spécification appelle ces [requêtes directement initiées par l'utilisateur·ice <sup>(angl.)</sup>](https://w3c.github.io/webappsec-fetch-metadata/#directly-user-initiated).

### `Sec-Fetch-User`

Cet en-tête n'est inclus que si la requête a été initiée par une action de l'utilisateur·ice (comme un clic sur un lien), et s'il est inclus, il a toujours la valeur `?1`.

## Attaques inter-origines

Une métadonnée de récupération est particulièrement utile comme défense contre les _attaques inter-origines_. Ces attaques ciblent généralement un·e utilisateur·ice qui a un compte sur un site légitime et qui est connecté·e à ce site. L'attaquant·e crée un site web qui effectue une _requête inter-origines_ vers le site légitime, puis trompe l'utilisateur·ice pour qu'il·elle exécute cette requête.

> [!NOTE]
> Nous utilisons le terme _attaque inter-origines_ dans ce guide, bien que de nombreuses attaques soient conventionnellement appelées _attaques inter-sites_.
>
> Une {{Glossary("origin", "origine")}} est un concept plus restrictif qu'un {{Glossary("site")}}. En particulier, un site inclut les sous-domaines d'un domaine, et une origine ne le fait pas&nbsp;: ainsi `https://example.org` et `https://login.example.org` sont le même site, mais des origines différentes.
>
> Cela signifie que, bien que toutes les attaques inter-sites soient des attaques inter-origines, certaines attaques inter-origines ne sont _pas_ des attaques inter-sites. Par exemple, si un·e attaquant·e prend le contrôle d'un sous-domaine d'un site, il·elle peut alors attaquer le site en utilisant des requêtes _inter-origines_ et _dans le site_. Pour inclure ces attaques, nous utilisons le terme plus restrictif.

Par exemple, le site de l'attaquant·e peut contenir un élément HTML {{HTMLElement("form")}} qui envoie au site légitime. Pour certaines attaques inter-origines, aucune interaction de l'utilisateur·ice n'est nécessaire&nbsp;: la page de l'attaquant·e peut simplement exécuter une requête {{DOMxRef("Window.fetch()", "fetch()")}} vers le site légitime lors du chargement de la page, et l'utilisateur·ice n'a alors qu'à ouvrir la page de l'attaquant·e pour que la requête inter-origines soit exécutée.

Parce que la requête provient du navigateur de l'utilisateur·ice, elle inclut tous les cookies définis pour l'utilisateur·ice par le site légitime, y compris les cookies que le site légitime utilise pour identifier les utilisateur·ice·s. La requête se voit donc attribuer les privilèges de cet utilisateur·ice.

On peut distinguer deux types d'attaques inter-origines&nbsp;:

- [Falsification de requête inter-sites (CSRF)](/fr/docs/Web/Security/Attacks/CSRF)&nbsp;: dans ces attaques, la requête inter-origines effectue une action conséquente sur le serveur légitime, en utilisant des paramètres fournis par l'attaquant·e. Par exemple, la requête demande au serveur de transférer de l'argent du compte de l'utilisateur·ice ciblé·e vers le compte de l'attaquant·e.

- [Fuites inter-sites](/fr/docs/Web/Security/Attacks/XS-Leaks)&nbsp;: dans ces attaques, l'attaquant·e utilise la requête pour obtenir des informations sur la relation de l'utilisateur·ice avec le site cible, souvent par le biais de canaux secondaires tels que les [évènements d'erreur](/fr/docs/Web/Security/Attacks/XS-Leaks#révéler_lexistence_dune_page_à_laide_dévènements_derreur).

La plupart des sites Web veulent refuser certaines requêtes inter-origines tout en en autorisant d'autres&nbsp;: par exemple, si vous refusez toutes les requêtes inter-origines, personne ne peut naviguer vers votre site depuis un site différent&nbsp;!

En utilisant les métadonnées de récupération, un serveur peut construire une politique pour autoriser ou refuser les requêtes inter-origines en fonction des détails de leur contexte.

## Politique d'isolation des ressources

Un type de politique courant est appelé _politique d'isolation des ressources_. Lorsque le serveur reçoit une requête, il examine les en-têtes de métadonnées de récupération de la requête pour n'autoriser que&nbsp;:

- Les requêtes de même origine (et parfois les requêtes du même site, si vous faites confiance à vos sous-domaines).
- Les requêtes de navigation de premier niveau provenant d'une autre origine, afin que les utilisateur·ice·s puissent accéder à votre site en cliquant sur des liens dans d'autres sites.
- Les requêtes vers des points de terminaison spécifiques qui sont destinés à être accessibles inter-origines, y compris ceux qui utilisent [CORS](/fr/docs/Web/HTTP/Guides/CORS).

Par exemple, le code [Express](/fr/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs) suivant n'autorise que les requêtes de même origine, les requêtes directement initiées par l'utilisateur·ice et les navigations.

```js
function estAutorise(req) {
  // Permet les requêtes de même origine
  // Permet les requêtes directement initiées par l'utilisateur·ice (à partir des favoris, de la barre d'adresse, etc.)
  const secFetchSite = req.headers["sec-fetch-site"];
  if (secFetchSite === "same-origin" || secFetchSite === "none") {
    return true;
  }

  // Permet les navigations inter-sites, comme cliquer sur des liens
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
    getAdminPage(req, res);
  } else {
    res.status(403).send("Interdit");
  }
});
```

Notez qu'il envoie également l'en-tête de réponse {{HTTPHeader("Vary")}}. Cela garantit que si la réponse est mise en cache, la réponse mise en cache n'est donnée qu'aux requêtes ayant les mêmes valeurs pour les en-têtes de métadonnées de récupération que nous utilisons.

La page [Politique d'isolation des ressources <sup>(angl.)</sup>](https://xsleaks.dev/docs/defenses/isolation-policies/resource-isolation/) fournit plus d'exemples de code pour une politique d'isolation des ressources.

## Voir aussi

- [CSRF](/fr/docs/Web/Security/Attacks/CSRF)
- [Fuites inter-sites](/fr/docs/Web/Security/Attacks/XS-Leaks)
- [Protégez vos ressources contre les attaques web avec les métadonnées de récupération <sup>(angl.)</sup>](https://web.dev/articles/fetch-metadata) (web.dev)
- [Métadonnées de récupération <sup>(angl.)</sup>](https://xsleaks.dev/docs/defenses/opt-in/fetch-metadata/) (Wiki des Fuites-XS)
