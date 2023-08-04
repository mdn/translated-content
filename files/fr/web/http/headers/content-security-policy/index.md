---
title: Politique de sécurité de contenu
slug: Web/HTTP/Headers/Content-Security-Policy
---

{{HTTPSidebar}}

L'en-tête de réponse HTTP **`Content-Security-Policy`** permet aux administrateurs d'un site web de contrôler les ressources que l'agent utilisateur est autorisé à charger pour une page donnée. Bien qu'il y ait quelques exceptions, ces règles impliquent la plupart du temps de définir les origines du serveur et les points d'accès pour les scripts. Cet en-tête aide à se protéger contre les attaques de _cross-site scripting_ ({{Glossary("XSS")}}).

Pour plus d'informations, voir cet article sur [_Content Security Policy_ (CSP)](/fr/docs/Web/HTTP/CSP).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Type d'en-tête</th>
      <td>En-tête de réponse</td>
    </tr>
    <tr>
      <th scope="row">Nom d'en-tête interdit</th>
      <td>Non</td>
    </tr>
  </tbody>
</table>

## Syntaxe

```
Content-Security-Policy: <policy-directive>; <policy-directive>
```

## Directives

### Directives de récupération (_fetch_)

Les directives de récupération (ou _fetch directives_ en anglais) contrôlent les emplacements à partir desquels certains types de ressource peuvent être chargés.

- {{CSP("child-src")}}
  - : Définit les sources valides pour les [web workers](/fr/docs/Web/API/Web_Workers_API) et les éléments qui représentent des contextes de navigation imbriqués tels que {{HTMLElement("frame")}} et {{HTMLElement("iframe")}}.

> **Attention :** Plutôt que la directive **`child-src`**, si vous souhaitez réguler les contextes de navigation imbriqués et les workers séparément, vous pouvez utiliser respectivement les directives {{CSP("frame-src")}} et {{CSP("worker-src")}}.

- {{CSP("connect-src")}}
  - : Restreint les URL qui peuvent être chargées via des scripts.
- {{CSP("default-src")}}
  - : Représente la valeur par défaut des directives de récupération qui ne sont pas définies explicitement.
- {{CSP("font-src")}}
  - : Définit les sources valides pour les polices de caractères chargées depuis {{cssxref("@font-face")}}.
- {{CSP("frame-src")}}
  - : Définit les sources valides pour les éléments qui représentent des contextes de navigation imbriqués, tels que {{HTMLElement("frame")}} et {{HTMLElement("iframe")}}.
- {{CSP("img-src")}}
  - : Définit les sources valides pour les images et les favicons.
- {{CSP("manifest-src")}}
  - : Définit les sources valides pour les fichiers de manifeste d'application.
- {{CSP("media-src")}}
  - : Définit les sources valides pour les ressources média des éléments {{HTMLElement("audio")}} et {{HTMLElement("video")}}.
- {{CSP("object-src")}}
  - : Définit les sources valides pour les ressources des éléments {{HTMLElement("object")}}, {{HTMLElement("embed")}} et {{HTMLElement("applet")}}.

> **Note :** Les éléments contrôlés pa ar `object-src` sont considérés peut-être par coïcidence comme des éléments HTML du passé et ne recevront de nouvelles fonctionnalités normalisées (comme les attributs de sécurité `sandbox` et `allow` pour `<iframe>`). De ce fait, il est **recommandé** de restreindre cette directive, c'est-à-dire la définir explicitement à `object-src 'none'` dans la mesure du possible.

- {{CSP("prefetch-src")}}
  - : Définit .
- {{CSP("script-src")}}
  - : Définit les sources valides pour les fichiers JavaScript.
- {{CSP("script-src-elem")}}{{experimental_inline}}
  - : Définit les sources valides de code JavaScript chargé avec l'élément {{HTMLElement("script")}}.
- {{CSP("script-src-attr")}}{{experimental_inline}}
  - : Définit les sources valides de JavaScript pour les écouteurs d'évènements par les attributs `on<eventName>`.
- {{CSP("style-src")}}
  - : Définit les sources valides pour les feuilles de styles.
- {{CSP("style-src-elem")}}{{experimental_inline}}
  - : Définit les sources valides pour les feuilles de styles définies avec l'élément {{HTMLElement("style")}} ou chargées avec l'élément {{HTMLElement("link")}} ayant l'attribut `rel="stylesheet"`.
- {{CSP("style-src-attr")}}{{experimental_inline}}
  - : Définit les sources valides pour les feuilles de styles embarquées appliquées à des éléments individuels du DOM par l'attribut `style`.
- {{CSP("worker-src")}}
  - : Définit les sources valides pour les scripts des {{domxref("Worker")}}, {{domxref("SharedWorker")}} et {{domxref("ServiceWorker")}}.

### Directives de document

Les directives de document permettent de paramétrer les propriétés d'un document ou d'un environnement pour [un _web worker_](/fr/docs/Web/API/Web_Workers_API) auquel une règle de sécurité s'applique.

- {{CSP("base-uri")}}
  - : Restreint les URL qui peuvent être utilisées au sein de l'élément {{HTMLElement("base")}} d'un document.
- {{CSP("plugin-types")}}
  - : Restreint le type de plugin qui peut être intégré dans un document en limitant le type de ressource qui peut être chargé.
- {{CSP("sandbox")}}
  - : Active un bac-à-sable (_sandbox_) pour la ressource visée. Cela fonctionne de façon analogue à l'attribut [`sandbox`](/fr/docs/Web/HTML/Element/iframe#sandbox) de {{HTMLElement("iframe")}}.

### Directives de navigation

Les directives de navigation permettent par exemple de paramétrer les emplacements vers lesquels l'utilisateur peut naviguer ou envoyer un formulaire.

- {{CSP("form-action")}}
  - : Restreint les URL qui peuvent être utilisées comme cibles pour envoyer des formulaires depuis un contexte donné.
- {{CSP("frame-ancestors")}}
  - : Définit les parent valides qui peuvent intégrer une page grâce aux éléments {{HTMLElement("frame")}}, {{HTMLElement("iframe")}}, {{HTMLElement("object")}}, {{HTMLElement("embed")}}, ou {{HTMLElement("applet")}}.
- {{CSP("navigate-to")}}{{experimental_inline}}
  - : Restreint les URL vers lesquelles on peut naviguer depuis un document, quel que soit le moyen de navigation (un lien, un formulaire, `window.location`, `window.open`, etc.)

### Directives de rapport

Les directives de rapport permettent de contrôler ce qui se passe lorsqu'une règle CSP est violée. Voir également l'en-tête {{HTTPHeader("Content-Security-Policy-Report-Only")}}.

- {{CSP("report-uri")}}{{deprecated_inline}}
  - : Indique à l'agent utilisateur de rapporter les tentatives d'enfreintes du CSP. Un rapport d'enfreinte est un ensemble de documents JSON envoyés via une requête HTTP `POST` à l'URI indiquée.

> **Attention :** Bien que la directive [`report-to`](/fr/docs/Web/HTTP/Headers/Content-Security-Policy/report-to) est prévue remplacer la directive **`report-uri`** maintenant dépréciée, [`report-to`](/fr/docs/Web/HTTP/Headers/Content-Security-Policy/report-to) n'est pas encore supportée par la plupart des navigateurs modernes. Par rétrocompatibilité avec les navigateurs courants et tout en prévoyant une compatibilité future quand les navigateurs supporteront [`report-to`](/fr/docs/Web/HTTP/Headers/Content-Security-Policy/report-to), vous pouvez spécifier les deux directives **`report-uri`** et [`report-to`](/fr/docs/Web/HTTP/Headers/Content-Security-Policy/report-to):
>
> ```
> Content-Security-Policy: ...; report-uri https://endpoint.com; report-to groupname
> ```
>
> Dans les navigateurs qui supportent [`report-to`](/fr/docs/Web/HTTP/Headers/Content-Security-Policy/report-to), la directive **`report-uri`** sera ignorée.

- {{CSP("report-to")}}{{experimental_inline}}
  - : Déclenche un évènement `SecurityPolicyViolationEvent`.

### Autres directives

- {{CSP("block-all-mixed-content")}}
  - : Empêche le chargement de toute ressource via HTTP lorsque la page est chargée avec HTTPS.
- {{CSP("referrer")}} {{deprecated_inline}}{{non-standard_inline}}
  - : {{HTTPHeader("Referrer-Policy")}} doit être utilisé à la place. Était utilisée pour indiquer l'en-tête référent (sic) pour les liens sortants.
- {{CSP("require-sri-for")}}{{experimental_inline}}
  - : Oblige à utiliser le contrôle d'intégrité des sous-ressources ({{Glossary("SRI")}}) pour les scripts ou les styles de la page.
- {{CSP("trusted-types")}}{{experimental_inline}}
  - : Utilisée pour spécifier une liste de permissions de règles de [Trusted Types](https://w3c.github.io/webappsec-trusted-types/dist/spec/). Les Trusted Types permettent à des applications de verrouiller les puits d'injection XSS dans le DOM pour n'accepter que des valeurs typées et non falsifiables plutôt que des chaines de caractères.
- {{CSP("upgrade-insecure-requests")}}
  - : Indique à l'agent utilisateur de considérer toutes les URL non-sécurisées d'un site (celles servies via HTTP) comme si elles avaient été remplacées par des URL sécurisées. Cette directive est destinée aux sites web qui ont de nombreuses URL historiques non-sécurisées et qui doivent être réécrites.

## Utilisation du _CSP_ dans les _web workers_

En général, les _web workers_ ne sont pas gérés par les règles de sécurité du contenu du document (ou du _worker_ parent) qui les a créé. Pour indiquer une règle de sécurité du contenu pour le _worker_, on utilisera un en-tête de réponse `Content-Security-Policy` pour la requête qui a demandé le script du _worker_.

Il y a une exception à cette règle lorsque l'origine du script d'un _worker_ est un identifiant global unique (par exemple si l'URL utilise un schéma de donnée ou un blob). Dans ce cas, le _worker_ hérite de la règle de sécurité du contenu depuis le document ou le _worker_ qui l'a créé.

## Gérer plusieurs politiques de sécurité

Le CSP permet d'indiquer plusieurs règles pour une même ressource avec l'en-tête `Content-Security-Policy`, l'en-tête {{HTTPHeader("Content-Security-Policy-Report-Only")}} et l'élément {{HTMLElement("meta")}}.

L'en-tête `Content-Security-Policy` peut être utilisé plus d'une fois comme illustré ci-après. On notera la directive {{CSP("connect-src")}} utilisée ici. Bien que la deuxième règle autorise la connexion, la première contient `connect-src 'none'`. L'ajout de règles supplémentaires permet uniquement d'augmenter les protections. Les niveaux les plus stricts pour chaque règle sont alors utilisés. Dans l'exemple qui suit, cela signifie que la directive `connect-src 'none'` sera respectée.

```
Content-Security-Policy: default-src 'self' http://example.com;
                          connect-src 'none';
Content-Security-Policy: connect-src http://example.com/;
                          script-src http://example.com/
```

## Exemples

### Exemple 1

Dans cet exemple, on désactive les scripts écrits à même le document (_inline_), les opérations `eval()` et les ressources (images, polices, scripts, etc.) peuvent uniquement être chargées via HTTPS :

```
// en-tête HTTP
Content-Security-Policy: default-src https:

// version avec la balise HTML meta
<meta http-equiv="Content-Security-Policy" content="default-src https:">
```

### Exemple 2

Cet exemple est plutôt adapté pour un site historique qui utilise de nombreux scripts écrits dans les documents mais pour lequel on veut s'assurer que les ressources sont chargées via HTTPS et pour lequel on veut désactiver les plugins :

```
Content-Security-Policy: default-src https: 'unsafe-eval' 'unsafe-inline'; object-src 'none'
```

### Exemple 3

On ne met pas en place la règle de sécurité mais on récolte les enfreintes qui se seraient produites pour cette règle :

```
Content-Security-Policy-Report-Only: default-src https:; report-uri /csp-violation-report-endpoint/
```

Pour plus d'exemples, consulter [les recommandations de Mozilla pour la sécurité web](https://wiki.mozilla.org/Security/Guidelines/Web_Security#Examples_5).

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{HTTPHeader("Content-Security-Policy-Report-Only")}}
- [La sécurité du contenu pour les WebExtensions](/fr/Add-ons/WebExtensions/Content_Security_Policy)
- [Les sécurités pour l'affichage et la confidentialité dans les outils de développement de Firefox](/fr/docs/Outils/Barre_de_développement/Display_security_and_privacy_policies)
