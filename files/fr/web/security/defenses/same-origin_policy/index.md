---
title: Politique de même origine (Same-origin)
short-title: Politique de même origine
slug: Web/Security/Defenses/Same-origin_policy
l10n:
  sourceCommit: 39070892d5d1a5cc55312a0ac10c97f4c339384f
---

La **politique de même origine** (<i lang="en">same-origin policy</i>) est un mécanisme de sécurité fondamental qui restreint la façon dont un document ou un script chargé par une {{Glossary("origin", "origine")}} peut interagir avec une ressource provenant d'une autre origine.

Elle permet d'isoler les documents potentiellement malveillants, réduisant ainsi les vecteurs d'attaque possibles. Par exemple, elle empêche un site web malveillant sur Internet d'exécuter du JavaScript dans un navigateur pour lire des données d'un service de messagerie tiers (auquel l'utilisateur·ice est connecté·e) ou d'un intranet d'entreprise (protégé contre l'accès direct par l'attaquant·e car il ne possède pas d'adresse IP publique) et de relayer ces données à l'attaquant·e.

## Définition de l'origine

Deux URL ont la _même origine_ si le {{Glossary("protocol", "protocole")}}, le {{Glossary("port")}} (s'il est spécifié) et le {{Glossary("host", "hôte")}} sont identiques pour les deux. Vous pouvez voir cela référencé comme le «&nbsp;triplet schéma/hôte/port&nbsp;» ou simplement «&nbsp;triplet&nbsp;». (Un «&nbsp;triplet&nbsp;» est un ensemble d'éléments qui, ensemble, forment un tout — une forme générique pour double/triple/quadruple/quintuple, etc.)

Le tableau suivant donne des exemples de comparaisons d'origines avec l'URL `http://store.company.com/dir/page.html`&nbsp;:

| URL                                               | Résultat     | Motif                 |
| ------------------------------------------------- | ------------ | --------------------- |
| `http://store.company.com/dir2/other.html`        | Même origine |                       |
| `http://store.company.com/dir/inner/another.html` | Même origine |                       |
| `https://store.company.com/secure.html`           | Échec        | Protocoles différents |
| `http://store.company.com:81/dir/etc.html`        | Échec        | Ports différents      |
| `http://news.company.com/dir/other.html`          | Échec        | Hôtes différents      |

### Origines héritées

Les scripts exécutés depuis des pages ayant une URL `about:blank` ou une [URL `javascript:`](/fr/docs/Web/URI/Reference/Schemes/javascript) héritent de l'origine du document contenant cette URL, car ces types d'URL ne contiennent pas d'information sur un serveur d'origine.

Par exemple, `about:blank` est souvent utilisé comme URL pour de nouvelles fenêtres pop-up vides dans lesquelles le script parent écrit du contenu (par exemple via le mécanisme {{DOMxRef("Window.open()")}}). Si cette pop-up contient aussi du JavaScript, ce script héritera de la même origine que le script qui l'a créée.

Les URL `data:` reçoivent un nouveau contexte de sécurité vide.

### Origines de fichiers

Les navigateurs modernes traitent généralement l'origine des fichiers chargés via le schéma `file:///` comme des _origines opaques_.
Cela signifie que si un fichier inclut d'autres fichiers du même dossier (par exemple), ils ne sont pas considérés comme provenant de la même origine et peuvent déclencher des erreurs {{Glossary("CORS")}}.

Notez que la [spécification URL <sup>(angl.)</sup>](https://url.spec.whatwg.org/#origin) indique que l'origine des fichiers dépend de l'implémentation, et certains navigateurs peuvent traiter les fichiers du même répertoire ou sous-répertoire comme ayant la même origine, même si cela présente des [implications de sécurité <sup>(angl.)</sup>](https://www.mozilla.org/en-US/security/advisories/mfsa2019-21/#CVE-2019-11730).

## Changer l'origine

> [!WARNING]
> L'approche décrite ici (utilisation du mutateur {{DOMxRef("document.domain")}}) est obsolète car elle affaiblit les protections offertes par la politique de même origine, et complique le modèle d'origine dans les navigateurs, entraînant des problèmes d'interopérabilité et des failles de sécurité.

Une page peut changer sa propre origine, avec certaines limitations. Un script peut définir la valeur de {{DOMxRef("document.domain")}} sur son domaine courant ou un super-domaine de son domaine courant. Si elle est définie sur un super-domaine, ce dernier (le plus court) sera utilisé pour les vérifications de même origine.

Par exemple, supposons qu'un script du document à l'adresse `http://store.company.com/dir/other.html` exécute ce qui suit&nbsp;:

```js
document.domain = "company.com";
```

Après cela, la page pourra passer le test de même origine avec `http://company.com/dir/page.html` (à condition que `http://company.com/dir/page.html` définisse aussi son `document.domain` à `"company.com"` pour l'autoriser — voir {{DOMxRef("document.domain")}} pour plus d'informations). Cependant, `company.com` ne peut **pas** définir `document.domain` à `othercompany.com`, car ce n'est pas un super-domaine de `company.com`.

Le numéro de port est vérifié séparément par le navigateur. Tout appel à `document.domain`, y compris `document.domain = document.domain`, entraîne la réinitialisation du port à `null`. Il est donc **impossible** de faire communiquer `company.com:8080` avec `company.com` en ne définissant que `document.domain = "company.com"` dans le premier. Il faut le définir dans les deux pages pour que leurs ports soient tous deux à `null`.

Ce mécanisme présente certaines limitations. Par exemple, il lèvera une exception {{DOMxRef("DOMException")}} `SecurityError` si le document est dans un élément {{HTMLElement("iframe")}} sandboxé, et changer l'origine de cette façon n'affecte pas les vérifications d'origine utilisées par de nombreuses API Web (par exemple, {{DOMxRef("Window.localStorage", "localStorage")}}, {{DOMxRef("IndexedDB_API", "IndexedDB")}}, {{DOMxRef("BroadcastChannel")}}, {{DOMxRef("SharedWorker")}}). Une liste plus exhaustive des cas d'échec se trouve dans [Document.domain > Échecs](/fr/docs/Web/API/Document/domain#échecs).

> [!NOTE]
> Lorsque vous utilisez `document.domain` pour permettre à un sous-domaine d'accéder à son domaine parent, vous devez définir `document.domain` sur la _même valeur_ à la fois dans le domaine parent et dans le sous-domaine. Cela est nécessaire même si cela revient à redéfinir le domaine parent sur sa valeur d'origine. Ne pas le faire peut entraîner des erreurs de permission.

## Accès réseau inter-origines

La politique de même origine contrôle les interactions entre deux origines différentes, par exemple lorsque vous utilisez {{DOMxRef("Window/fetch", "fetch()")}} ou un élément HTML {{HTMLElement("img")}}. Ces interactions sont généralement classées en trois catégories&nbsp;:

- Les _écritures_ inter-origines (<i lang="en">cross-origin</i> en anglais) sont généralement autorisées. Exemples&nbsp;: liens, redirections, envois de formulaires. Certaines requêtes HTTP nécessitent une [requête préliminaire](/fr/docs/Web/HTTP/Guides/CORS#requêtes_préliminaires).
- L'_embarquement_ inter-origines est généralement autorisé (voir les exemples ci-dessous).
- Les _lectures_ inter-origines sont généralement interdites, mais l'accès en lecture est souvent contourné via l'embarquement. Par exemple, il est possible de lire les dimensions d'une image embarquée, les actions d'un script embarqué, ou la [disponibilité d'une ressource embarquée <sup>(angl.)</sup>](https://bugzil.la/629094).

Voici quelques exemples de ressources pouvant être embarquées inter-origines&nbsp;:

- Le JavaScript avec `<script src="…"></script>`. Les détails d'erreur de syntaxe ne sont disponibles que pour les scripts de même origine.
- Le CSS appliqué avec `<link rel="stylesheet" href="…">`. En raison de la souplesse de la syntaxe CSS, une feuille de style inter-origines nécessite un en-tête `Content-Type` correct. Les navigateurs bloquent le chargement d'une feuille de style si le type MIME est incorrect et que la ressource ne commence pas par une construction CSS valide.
- Les images affichées par {{HTMLElement("img")}}.
- Les médias lus par {{HTMLElement("video")}} et {{HTMLElement("audio")}}.
- Les ressources externes embarquées avec {{HTMLElement("object")}} et {{HTMLElement("embed")}}.
- Les polices appliquées avec {{CSSxRef("@font-face")}}. Certains navigateurs autorisent les polices inter-origines, d'autres exigent la même origine.
- Tout ce qui est embarqué par {{HTMLElement("iframe")}}. Les sites peuvent utiliser l'en-tête {{HTTPHeader("X-Frame-Options")}} pour empêcher l'embarquement inter-origines.

### Autoriser l'accès inter-origines

Utilisez [CORS](/fr/docs/Web/HTTP/Guides/CORS) pour autoriser l'accès inter-origines. CORS fait partie de {{Glossary("HTTP")}} et permet aux serveurs de définir d'autres hôtes à partir desquels un navigateur peut charger du contenu.

### Comment bloquer l'accès inter-origines

- Pour interdire les écritures cross-origin writes, contrôlez dans la requête un token qui ne peut être déviné, connu sous le nom de [Cross-Site Request Forgery (CSRF) <sup>(angl.)</sup>](https://owasp.org/www-community/attacks/csrf) token, et interdisez la lecture cross-origin des pages qui connaissent ce token.
- Pour interdire la lecture cross-origin d'une ressource, assurez-vous qu'elle ne peut pas être embarquée.
- Pour interdire l'embarquement (embed) d'une ressource cross-origin, assurez vous qu'elle ne peut pas être interprétée comme une des ressources embarquable vues précédemment. Dans la plupart des cas, les navigateurs ne respectent pas le `Content-Type`. Par exemple, pour une balise `<script>` pointant un document HTML, le navigateur va tenter d'interpréter le code HTML comme du JavaScript. Si votre ressource n'est pas un point d'entrée de votre site, vous pouvez également utiliser un jeton CSRF.

## Accès aux API de scripts inter-origines

Les API JavaScript comme {{DOMxRef("HTMLIFrameElement.contentWindow", "iframe.contentWindow")}}, {{DOMxRef("window.parent")}}, {{DOMxRef("window.open")}} et {{DOMxRef("window.opener")}} permettent aux documents de se référencer directement entre eux. Lorsque deux documents n'ont pas la même origine, ces références ne donnent qu'un accès très limité aux objets {{DOMxRef("Window")}} et {{DOMxRef("Location")}}, comme décrit dans les deux sections suivantes.

Pour communiquer entre documents de différentes origines, utilisez {{DOMxRef("window.postMessage")}}.

Spécification&nbsp;: [HTML Living Standard § Objets inter-origines <sup>(angl.)</sup>](https://html.spec.whatwg.org/multipage/browsers.html#cross-origin-objects).

### Window

L'accès inter-origines (<i lang="en">cross-origin</i> en anglais) aux propriétés suivantes de `Window` est autorisé&nbsp;:

| Méthodes                          |
| --------------------------------- |
| {{DOMxRef("window.blur")}}        |
| {{DOMxRef("window.close")}}       |
| {{DOMxRef("window.focus")}}       |
| {{DOMxRef("window.postMessage")}} |

| Attributs                      | Accès            |
| ------------------------------ | ---------------- |
| {{DOMxRef("window.closed")}}   | Lecture seule    |
| {{DOMxRef("window.frames")}}   | Lecture seule    |
| {{DOMxRef("window.length")}}   | Lecture seule    |
| {{DOMxRef("window.location")}} | Lecture/écriture |
| {{DOMxRef("window.opener")}}   | Lecture seule    |
| {{DOMxRef("window.parent")}}   | Lecture seule    |
| {{DOMxRef("window.self")}}     | Lecture seule    |
| {{DOMxRef("window.top")}}      | Lecture seule    |
| {{DOMxRef("window.window")}}   | Lecture seule    |

Certains navigateurs autorisent l'accès à plus de propriétés que celles listées ci-dessus.

### Location

L'accès inter-origines aux propriétés suivantes de `Location` est autorisé&nbsp;:

| Méthodes                        |
| ------------------------------- |
| {{DOMxRef("location.replace")}} |

| Attributs                    | Accès          |
| ---------------------------- | -------------- |
| {{DOMxRef("location.href")}} | Écriture seule |

Certains navigateurs autorisent l'accès à plus de propriétés que celles listées ci-dessus.

## Accès au stockage de données inter-origines

L'accès aux données stockées dans le navigateur, comme le [Web Storage](/fr/docs/Web/API/Web_Storage_API) et [IndexedDB](/fr/docs/Web/API/IndexedDB_API), est séparé par origine. Chaque origine dispose de son propre espace de stockage, et le JavaScript d'une origine ne peut ni lire ni écrire dans le stockage appartenant à une autre origine.

{{Glossary("Cookie", "Cookies")}} utilise une définition différente de l'origine. Une page peut définir un cookie pour son propre domaine ou pour tout domaine parent, tant que ce domaine parent n'est pas un suffixe public. Firefox et Chrome utilisent la [liste des suffixes publics <sup>(angl.)</sup>](https://publicsuffix.org/) pour déterminer si un domaine est un suffixe public. Lors de la définition d'un cookie, vous pouvez limiter sa disponibilité à l'aide des attributs `Domain`, `Path`, `Secure` et `HttpOnly`. Lors de la lecture d'un cookie, il n'est pas possible de savoir d'où il a été défini. Même si vous n'utilisez que des connexions https sécurisées, tout cookie visible peut avoir été défini via une connexion non sécurisée.

## Voir aussi

- [Same Origin Policy sur W3C <sup>(angl.)</sup>](https://www.w3.org/Security/wiki/Same_Origin_Policy)
- [Same-origin policy sur web.dev <sup>(angl.)</sup>](https://web.dev/same-origin-policy/)
- L'entête HTTP {{HTTPHeader("Cross-Origin-Resource-Policy")}}
- L'entête HTTP {{HTTPHeader("Cross-Origin-Embedder-Policy")}}
