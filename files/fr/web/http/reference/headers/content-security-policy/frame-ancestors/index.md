---
title: "Content-Security-Policy : directive frame-ancestors"
short-title: frame-ancestors
slug: Web/HTTP/Reference/Headers/Content-Security-Policy/frame-ancestors
l10n:
  sourceCommit: a2b29d9159294f1437e0adf49cdf3019e9c1c24b
---

La directive HTTP {{HTTPHeader("Content-Security-Policy")}} (CSP) **`frame-ancestors`** définit les parents valides pouvant intégrer une page en utilisant {{HTMLElement("frame")}}, {{HTMLElement("iframe")}}, {{HTMLElement("object")}} ou {{HTMLElement("embed")}}.

Définir cette directive à `'none'` est comparable à l'en-tête HTTP {{HTTPHeader("X-Frame-Options", "X-Frame-Options: deny")}} (aussi supporté sur les anciens navigateurs).

> [!NOTE]
> **`frame-ancestors`** permet de définir quelles sources parentes peuvent intégrer une page.
> Cela diffère de **`frame-src`**, qui permet de définir d'où les cadres intégrés d'une page peuvent être chargés.

> [!NOTE]
> La directive **`frame-ancestors`** [vérifie chaque ancêtre <sup>(angl.)</sup>](https://w3c.github.io/webappsec-csp/#frame-ancestors-and-frame-options). Si un ancêtre ne correspond pas, le chargement est annulé. Par conséquent, tous les ancêtres doivent être autorisés par la directive **`frame-ancestors`** des cadres feuilles lors de l'utilisation de cadres imbriqués.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Version de CSP</th>
      <td>2</td>
    </tr>
    <tr>
      <th scope="row">Type de directive</th>
      <td>{{Glossary("Navigation directive", "Directive de navigation")}}</td>
    </tr>
    <tr>
      <th scope="row">Solution de repli {{CSP("default-src")}}</th>
      <td>Non. Ne pas définir cette directive autorise toutes les adresses.</td>
    </tr>
    <tr>
      <th colspan="2" scope="row">
        Cette directive n'est pas prise en charge dans l'élément HTML {{HTMLElement("meta")}}.
      </th>
    </tr>
  </tbody>
</table>

## Syntaxe

```http
Content-Security-Policy: frame-ancestors 'none';
Content-Security-Policy: frame-ancestors <source-expression-list>;
```

Cette directive peut avoir l'une des valeurs suivantes&nbsp;:

- `'none'`
  - : Cette ressource ne peut pas être intégrée. Les guillemets simples sont obligatoires.
- `<source-expression-list>`
  - : Une liste de valeurs _d'expressions de source_ séparées par des espaces. Cette ressource peut être intégrée si l'intégrateur correspond à l'une des expressions de source données. Pour cette directive, les valeurs d'expression de source suivantes sont applicables&nbsp;:
    - [`<host-source>`](/fr/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#host-source)
    - [`<scheme-source>`](/fr/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#scheme-source)
    - [`'self'`](/fr/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#self)

> [!NOTE]
> La syntaxe de la directive `frame-ancestors` est similaire à la syntaxe de liste de sources acceptée par d'autres directives (par exemple, {{CSP("child-src")}}), mais elle ne se replie pas sur le paramètre `default-src`. Une politique qui déclare `default-src 'none'` permet toujours à la ressource d'être intégrée par n'importe qui.

## Exemples

```http
Content-Security-Policy: frame-ancestors 'none';

Content-Security-Policy: frame-ancestors 'self' https://www.example.org;

Content-Security-Policy: frame-ancestors 'self' https://example.org https://example.com https://store.example.com;
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'en-tête {{HTTPHeader("Content-Security-Policy")}}
- L'en-tête {{HTTPHeader("X-Frame-Options")}}
- La directive CSP {{CSP("frame-src")}}
