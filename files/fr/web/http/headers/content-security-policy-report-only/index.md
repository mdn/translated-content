---
title: Content-Security-Policy-Report-Only
slug: Web/HTTP/Headers/Content-Security-Policy-Report-Only
---

{{HTTPSidebar}}

L'en-tête de réponse HTTP **`Content-Security-Policy-Report-Only`** permet aux développeurs web d'expérimenter avec les règles CSP en contrôlant leur application sans bloquer de contenu. Ces rapports de violations sont constitués d'un document {{Glossary("JSON")}} envoyé via une requête HTTP `POST` à l'URI spécifiée.

Pour plus d'informations, voir aussi cet article sur les [Content Security Policy (CSP)](/fr/docs/Web/HTTP/CSP).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Type d'en-tête</th>
      <td>{{Glossary("Response header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>non</td>
    </tr>
    <tr>
      <th colspan="2" scope="row">
        Cet en-tête n'est pas supporté au sein d'un élément
        {{HTMLElement("meta")}}.
      </th>
    </tr>
  </tbody>
</table>

## Syntaxe

```js
Content-Security-Policy-Report-Only: <policy-directive>; <policy-directive>
```

## Directives

Les directives de l'en-tête {{HTTPHeader("Content-Security-Policy")}} peuvent aussi être appliquées à l'en-tête `Content-Security-Policy-Report-Only`.

La directive CSP {{CSP("report-uri")}} doit être utilisée avec celui-ci, ou définir cet en-tête ne servirait à rien puisqu'aucun rapport ne serait envoyé.

## Exemples

Cet en-tête rapporte les violations qui seront constatées. Vous pouvez l'utiliser pour améliorer vos CSP. Vous pouvez observer comment votre site fonctionne en consultant les rapports ou [redirections malicieuses](https://secure.wphackedhelp.com/blog/wordpress-malware-redirect-hack-cleanup/), puis choisir les règles voulues pour bloquer le contenu avec l'en-tête {{HTTPHeader("Content-Security-Policy")}}.

```
Content-Security-Policy-Report-Only: default-src https:; report-uri /csp-violation-report-endpoint/
```

Si vous voulez toujours recevoir des rapports, mais aussi imposer des règles, utilisez l'en-tête {{HTTPHeader("Content-Security-Policy")}} avec la directive {{CSP("report-uri")}}.

```
Content-Security-Policy: default-src https:; report-uri /csp-violation-report-endpoint/
```

## Syntaxe d'un rapport de violation

L'objet de rapport JSON contient les informations suivantes :

- `blocked-uri`
  - : L'URI de la ressource dont le chargement a été bloqué par les règles Content Security Policy. Si l'URI bloquée est d'une origine différente que celle du document (`document-uri`), alors l'URI bloquée est tronquée pour contenir uniquement le schéma, l'hôte et le port.
- `disposition`
  - : Soit `"enforce"`, soit `"report"`, selon que l'en-tête qui a déclenché l'envoi du rapport est {{HTTPHeader("Content-Security-Policy")}} ou `Content-Security-Policy-Report-Only`.
- `document-uri`
  - : L'URI du document dans lequel la violation a eu lieu.
- `effective-directive`
  - : La directive qui a causé la violation.
- `original-policy`
  - : La règle originale telle que spécifiée par l'en-tête `Content-Security-Policy-Report-Only`.
- `referrer`
  - : Le référent du document dans lequel la violation a eu lieu.
- `script-sample`
  - : Les 40 premiers caractères du script embarqué, du gestionnaire d'évènements par attribut ou de la feuille de style qui a causé la violation.
- `status-code`
  - : Le code de statut HTTP de la ressource sur laquelle l'objet global a été instancié.
- `violated-directive`
  - : Le nom de la directive qui a été violée.

## Extrait de rapport de violation

Considérons une page à l'adresse `http://example.com/signup.html`. Elle utilise la règle CSP suivante, interdisant tout excepté les feuilles de styles chargées depuis `cdn.example.com`.

```
Content-Security-Policy-Report-Only: default-src 'none'; style-src cdn.example.com; report-uri /_/csp-reports
```

La page HTML correspondant à l'adresse `signup.html` ressemble à :

```html
<!doctype html>
<html>
  <head>
    <title>Sign Up</title>
    <link rel="stylesheet" href="css/style.css" />
  </head>
  <body>
    ... Content ...
  </body>
</html>
```

Avez-vous identifié une violation ?Les feuilles de styles ne sont acceptées que si elles sont chargées depuis `cdn.example.com`, et pourtant le site tente d'en charger une depuis sa propre origine (`http://example.com`). Un navigateur capable d'imposer des règles CSP enverra le rapport de violation suivant sous la forme d'une requête POST à l'adresse `http://example.com/_/csp-reports` quand la page sera visitée :

```js
{
  "csp-report": {
    "document-uri": "http://example.com/signup.html",
    "referrer": "",
    "blocked-uri": "http://example.com/css/style.css",
    "violated-directive": "style-src cdn.example.com",
    "original-policy": "default-src 'none'; style-src cdn.example.com; report-uri /_/csp-reports",
    "disposition": "report"
  }
}
```

Comme vous le voyez, la rapport inclut le chemin complet de la ressource à l'origine de la violaton dans la propriété `blocked-uri`. Ce n'est pas toujours le cas. Par exemple, quand la page `signup.html` essaiera de charger un CSS depuis `http://anothercdn.example.com/stylesheet.css`, le navigateur n'inclura pas le chemin complet mais seulement son origine (`http://anothercdn.example.com`). Cela est fait pour empêcher les fuites d'informations sensibles à propos de ressources externes.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{HTTPHeader("Content-Security-Policy")}}
- CSP {{CSP("report-uri")}} directive
- [Content Security in WebExtensions](/fr/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy)
- [Display security and privacy policies In Firefox Developer Tools](/fr/docs/Tools/GCLI/Display_security_and_privacy_policies)
