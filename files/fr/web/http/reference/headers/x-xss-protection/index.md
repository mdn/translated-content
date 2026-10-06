---
title: En-tête X-XSS-Protection
short-title: X-XSS-Protection
slug: Web/HTTP/Reference/Headers/X-XSS-Protection
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{Non-standard_Header}}

> [!WARNING]
> Même si cette fonctionnalité peut protéger les utilisateur·ice·s d'anciens navigateurs Web qui ne prennent pas en charge les {{Glossary("CSP")}}, dans certains cas, **`X-XSS-Protection` peut créer des vulnérabilités XSS** dans des sites Web pourtant sûrs.
> Consultez la section [Considérations de sécurité](#considérations_de_sécurité) ci-dessous pour plus d'informations.

{{Glossary("response header", "L'en-tête de réponse")}} HTTP **`X-XSS-Protection`** est une fonctionnalité d'Internet Explorer, Chrome et Safari qui empêche le chargement des pages lorsque ces navigateurs détectent des attaques de script inter-site réfléchi ({{Glossary("Cross-site_scripting", "XSS")}}).
Ces protections sont largement inutiles dans les navigateurs modernes lorsque les sites mettent en place une {{HTTPHeader("Content-Security-Policy")}} stricte qui désactive l'utilisation de JavaScript embarqué (`'unsafe-inline'`).

Il est recommandé d'utiliser [`Content-Security-Policy`](/fr/docs/Web/HTTP/Reference/Headers/Content-Security-Policy) plutôt que le filtrage XSS.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Type d'en-tête</th>
      <td>{{Glossary("Response header", "En-tête de réponse")}}</td>
    </tr>
  </tbody>
</table>

## Syntaxe

```http
X-XSS-Protection: 0
X-XSS-Protection: 1
X-XSS-Protection: 1; mode=block
X-XSS-Protection: 1; report=<reporting-uri>
```

## Directives

- `0`
  - : Désactive le filtrage XSS.
- `1`
  - : Active le filtrage XSS (généralement activé par défaut dans les navigateurs). Si une attaque de script inter-site est détectée, le navigateur assainit la page (il supprime les parties non sûres).
- `1; mode=block`
  - : Active le filtrage XSS. Au lieu d'assainir la page, le navigateur empêche son affichage si une attaque est détectée.
- `1; report=<reporting-URI>` (Chromium uniquement)
  - : Active le filtrage XSS. Si une attaque de script inter-site est détectée, le navigateur assainit la page et signale la violation. Cette directive utilise la fonctionnalité de la directive CSP {{CSP("report-uri")}} pour envoyer un rapport.

## Considérations de sécurité

### Vulnérabilités causées par le filtrage XSS

Considérez l'extrait de code HTML suivant pour une page Web&nbsp;:

```html
<script>
  var productionMode = true;
</script>
<!-- [...] -->
<script>
  if (!window.productionMode) {
    // Du code de débogage vulnérable
  }
</script>
```

Ce code est tout à fait sûr si le navigateur n'effectue pas de filtrage XSS. Cependant, s'il en effectue un et que la requête de recherche est `?quelquechose=%3Cscript%3Evar%20productionMode%20%3D%20true%3B%3C%2Fscript%3E`, le navigateur peut exécuter les scripts de la page sans tenir compte de `<script>var productionMode = true;</script>` (en pensant que le serveur l'a inclus dans la réponse parce qu'il figure dans l'identifiant de ressource uniforme), ce qui entraîne l'évaluation de `window.productionMode` à `undefined` et l'exécution du code de débogage non sûr.

Définir l'en-tête `X-XSS-Protection` sur `0` ou `1; mode=block` empêche les vulnérabilités comme celle décrite ci-dessus. La première valeur fait exécuter tous les scripts par le navigateur et la seconde empêche complètement le traitement de la page (bien que cette approche puisse être vulnérable aux [attaques par canal auxiliaire <sup>(angl.)</sup>](https://portswigger.net/research/abusing-chromes-xss-auditor-to-steal-tokens) si le site Web peut être intégré dans un `<iframe>`).

## Exemples

Bloquer le chargement des pages lorsqu'elles détectent des attaques XSS réfléchies&nbsp;:

```http
X-XSS-Protection: 1; mode=block
```

PHP

```php
header("X-XSS-Protection: 1; mode=block");
```

Apache (.htaccess)

```apacheconf
<IfModule mod_headers.c>
  Header set X-XSS-Protection "1; mode=block"
</IfModule>
```

Nginx

```nginx
add_header "X-XSS-Protection" "1; mode=block";
```

## Spécifications

Ne fait partie d'aucune spécification actuelle.

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'en-tête {{HTTPHeader("Content-Security-Policy")}}
- [Contrôler le filtre XSS — Microsoft <sup>(angl.)</sup>](https://learn.microsoft.com/en-us/archive/blogs/ieinternals/controlling-the-xss-filter)
- [Comprendre le vérificateur XSS — Virtue Security <sup>(angl.)</sup>](https://www.virtuesecurity.com/understanding-xss-auditor/)
- [L'en-tête `X-XSS-Protection` mal compris — blog.innerht.ml <sup>(angl.)</sup>](https://web.archive.org/web/20230527023943/https://blog.innerht.ml/the-misunderstood-x-xss-protection/)
