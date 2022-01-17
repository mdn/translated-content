---
title: 'CSP: style-src-elem'
slug: Web/HTTP/Headers/Content-Security-Policy/style-src-elem
tags:
  - CSP
  - Content
  - Content-Security-Policy
  - Directive
  - HTTP
  - Reference
  - Security
  - Style
  - Sécurité
  - source
  - style-src
  - style-src-elem
translation_of: Web/HTTP/Headers/Content-Security-Policy/style-src-elem
---
{{HTTPSidebar}}

La directive HTTP {{HTTPHeader("Content-Security-Policy")}} (CSP) **`style-src-elem`** spécifie les sources valides pour les feuilles de styles embarquées avec l'élément {{HTMLElement("style")}} et pour l'élément {{HTMLElement("link")}} avec l'attribut `rel="stylesheet"`.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Version de CSP</th>
      <td>3</td>
    </tr>
    <tr>
      <th scope="row">Type de directive</th>
      <td>{{Glossary("Fetch directive")}}</td>
    </tr>
    <tr>
      <th scope="row">{{CSP("default-src")}} par défaut</th>
      <td>
        <p>
          Oui, si cette directive est absente, l'agent utilisateur consultera la
          directive {{CSP("style-src")}}, qui a pour valeur par défaut
          celle de la directive <code>default-src</code>
        </p>
      </td>
    </tr>
  </tbody>
</table>

## Syntaxe

Une ou plusieurs sources peuvent être autorisées pour cette directive :

    Content-Security-Policy: style-src-elem <source>;
    Content-Security-Policy: style-src-elem <source> <source>;

`style-src-elem` peut être utilisée conjointement à {{CSP("style-src")}} :

    Content-Security-Policy: style-src <source>;
    Content-Security-Policy: style-src-elem <source>;

### Sources

{{page("fr/Web/HTTP/Headers/Content-Security-Policy/connect-src", "Sources")}}

- 'report-sample'
  - : Requiert qu'un échantillon du code violant la directive soit inclus dans le rapport envoyé.

## Spécifications

| Spécification                                                                                | Statut                       | Commentaire          |
| -------------------------------------------------------------------------------------------- | ---------------------------- | -------------------- |
| {{specName("CSP 3.0", "#directive-style-src-elem", "style-src-elem")}} | {{Spec2("CSP 3.0")}} | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("http.headers.csp.Content-Security-Policy.style-src-elem")}}

## Voir aussi

- {{HTTPHeader("Content-Security-Policy")}}
- {{CSP("style-src")}}
- {{CSP("style-src-attr")}}
- {{HTTPHeader("Link")}} header
- {{HTMLElement("style")}}, {{HTMLElement("link")}}
- {{cssxref("@import")}}
- {{domxref("CSSStyleSheet.insertRule()")}}
- {{domxref("CSSGroupingRule.insertRule()")}}
- {{domxref("CSSStyleDeclaration.cssText")}}
