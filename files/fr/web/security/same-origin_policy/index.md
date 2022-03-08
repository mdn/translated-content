---
title: Same-origin policy
slug: Web/Security/Same-origin_policy
translation_of: Web/Security/Same-origin_policy
original_slug: Web/Security/Same_origin_policy_for_JavaScript
---
La same-origin policy restreint la manière dont un document ou un script chargé depuis une origine peut interagir avec une autre ressource chargée depuis une autre origine.

## Définition de l'origine

Deux pages ont la même origine si le protocole, le port (si spécifié) et l'hôte sont les mêmes pour les deux pages. Le tableau suivant présente des comparaisons d'origines pour l'URL `http://store.company.com/dir/page.html` :

| URL                                               | Résultat | Motif                 |
| ------------------------------------------------- | -------- | --------------------- |
| `http://store.company.com/dir2/other.html`        | Succès   |                       |
| `http://store.company.com/dir/inner/another.html` | Succès   |                       |
| `https://store.company.com/secure.html`           | Échec    | Protocoles différents |
| `http://store.company.com:81/dir/etc.html`        | Échec    | Ports différents      |
| `http://news.company.com/dir/other.html`          | Échec    | Hôtes différents      |

Voir aussi [origin definition for `file:` URLs](/fr/docs/Same-origin_policy_for_file:_URIs).

Les cookies utilisent une définition de l'origine différente de celle qui vient d'être définie.

## Changer l'origine

Une page peut changer son origine dans une certaine mesure. Un script peut définir la valeur de `document.domain` vers un suffixe du domaine courant. S'il procéde ainsi, le domaine le plus court sera utilisé pour les prochaines vérifications d'origines. Par exemple, un script dans la page `http://store.company.com/dir/other.html` exécute le code suivant :

    document.domain = "company.com";

Après l'exécution de ce code, la page passerait le test d'origine avec `http://company.com/dir/page.html`. Ceci-dit, il ne serait pas possible de définir `document.domain` à `othercompany.com`.

Le numéro de port est stocké par le navigateur séparément. Tout appel aux setter, y compris `document.domain = document.domain` entraine l'effacement du port par la valeur `null`. Une page située sur `company.com:8080` ne peut donc pas communiquer avec une autre située sur `company.com` en ne définissant que `document.domain = "company.com"` dans la première page. Ceci doit être fait dans les deux pages, ainsi les ports seront à `null` pour les deux.

## Accès réseau cross-origin

La same-origin policy contrôle les interactions entre deux origines différentes, quand vous utilisez [`XMLHttpRequest`](/fr/docs/DOM/XMLHttpRequest) par exemple. Ces interactions sont généralement rangées dans trois catégories :

- _Écritures_ cross-origin généralement autorisées. Par exemple, les liens, les redirections ou les envois de formulaires. Quelques rares requêtes HTTP nécessitent [preflight](/fr/docs/HTTP/Access_control_CORS#Preflighted_requests).
- _Embarqué_ cross-origin généralement autorisé. Les exemples sont listés ci-après.
- _Lectures_ cross-origin généralement non autorisées.

Voici quelques exemples de ressources qui peuvent être embarqués malgré leur origine incompatible avec la same-origin policy :

- JavaScript avec `<script src="..."></script>`. Les messages d'erreur de syntaxe ne sont disponibles que pour les scripts ayant la même origine.
- CSS avec `<link rel="stylesheet" href="...">`. Étant donnée la [souplesse des règles de syntaxe](http://scarybeastsecurity.blogspot.dk/2009/12/generic-cross-browser-cross-domain.html) du CSS, les CSS d'origine différentes nécessitent une entête `Content-Type` correcte. Les restrictions varient selon les navigateurs : [IE](http://msdn.microsoft.com/en-us/library/ie/gg622939%28v=vs.85%29.aspx), [Firefox](http://www.mozilla.org/security/announce/2010/mfsa2010-46.html), [Chrome](http://code.google.com/p/chromium/issues/detail?id=9877), [Safari](http://support.apple.com/kb/HT4070) et [Opera](http://www.opera.com/support/kb/view/943/).
- Images avec [`<img>`](/fr/docs/HTML/Element/Img). Les formats d'image supportés, comprenant PNG, JPEG, GIF, BMP, SVG...
- Fichiers média avec [`<video>`](/fr/docs/HTML/Element/video) et [`<audio>`](/fr/docs/HTML/Element/audio).
- Objets avec [`<object>`](/fr/docs/HTML/Element/object), [`<embed>`](/fr/docs/HTML/Element/embed) et [`<applet>`](/fr/docs/HTML/Element/applet).
- Fontes de polices avec [`@font-face`](/fr/docs/CSS/@font-face). Certain navigateurs autorisent les fontes cross-origin, d'autres appliquent la same-origin policy.
- N'importe quoi avec [`<frame>`](/fr/docs/HTML/Element/frame) et [`<iframe>`](/fr/docs/HTML/Element/iframe). Un site peut utiliser l'entête [`X-Frame-Options`](/fr/docs/HTTP/X-Frame-Options) pour interdire cela depuis une page n'ayant pas la même origine.

### Autoriser l'accès cross-origin

Utiliser [CORS](/fr/docs/HTTP/Access_control_CORS) pour autoriser l'accès cross-origin.

### Comment bloquer l'accès cross-origin access

- Pour interdire les écritures cross-origin writes, contrôlez dans la requête un token qui ne peut être déviné, connu sous le nom de [Cross-Site Request Forgery (CSRF)](https://www.owasp.org/index.php/Cross-Site_Request_Forgery_%28CSRF%29) token, et interdisez la lecture cross-origin des pages qui connaissent ce token.
- Pour interdire la lecture cross-origin d'une ressource, assurez-vous qu'elle ne peut pas être embarquée.
- Pour interdire l'embarquement (embed) d'une ressource cross-origin, assurez vous qu'elle ne peut pas être interprétée comme une des ressources embarquable vues précédemment. Dans la plupart des cas, les navigateurs ne respectent pas le `Content-Type`. Par exemple, pour une balise `<script>` pointant un document HTML, le navigateur va tenter d'interpréter le code HTML comme du JavaScript. Si votre ressource n'est pas un point d'entrée de votre site, vous pouvez également utiliser un jeton CSRF.

## Accès script cross-origin

Les APIs JavaScript comme [`iframe.contentWindow`](/fr/docs/DOM/HTMLIFrameElement), [`window.parent`](/fr/docs/DOM/window.parent), [`window.open`](/fr/docs/DOM/window.open) et [`window.opener`](/fr/docs/DOM/window.opener) autorisent les documents à se référencer directement entre eux. Quand deux documents n'ont pas la même origine, ces références fournissent des accès limités aux objets [Window](http://www.whatwg.org/specs/web-apps/current-work/multipage/browsers.html#security-window) et [Location](http://www.whatwg.org/specs/web-apps/current-work/multipage/history.html#security-location).  Certains navigateurs [permettent l'accès à plus de propriétés](https://bugzilla.mozilla.org/show_bug.cgi?id=839867) que ce que les spécifications permettent. À la place, vous pouvez utiliser [`window.postMessage`](/fr/docs/DOM/window.postMessage) pour communiquer entre deux documents.

## Voir aussi

- [Same-origin policy for file: URIs](/en/Same-origin_policy_for_file:_URIs)
- [Same-Origin Policy at W3C](http://www.w3.org/Security/wiki/Same_Origin_Policy)
