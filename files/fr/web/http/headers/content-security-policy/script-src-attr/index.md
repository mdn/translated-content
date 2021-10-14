---
title: 'CSP: script-src-attr'
slug: Web/HTTP/Headers/Content-Security-Policy/script-src-attr
tags:
  - CSP
  - Content
  - Content-Security-Policy
  - Directive
  - HTTP
  - Reference
  - Script
  - Security
  - Sécurité
  - script-src
  - script-src-attr
  - source
translation_of: Web/HTTP/Headers/Content-Security-Policy/script-src-attr
---
{{HTTPSidebar}}

La directive HTTP {{HTTPHeader("Content-Security-Policy")}} (CSP) **`script-src-attr`** spécifie les sources valides pour du code JavaScript embarqué dans des éléments {{HTMLElement("script")}} ou dans des gestionnaires d'évènements par attribut comme `onclick`, mais non les URL chargées par des éléments {{HTMLElement("script")}}.

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
        Oui, si cette directive est absente, l'agent utilisateur consultera la
        directive {{CSP("script-src")}}, qui a pour valeur par défaut
        celle de la directive <code>default-src</code>
      </td>
    </tr>
  </tbody>
</table>

## Syntaxe

Une ou plusieurs sources peuvent être autorisées pour cette directive :

    Content-Security-Policy: script-src-attr <source>;
    Content-Security-Policy: script-src-attr <source> <source>;

`script-src-attr`  peut être utilisée conjointement à  {{CSP("script-src")}} :

    Content-Security-Policy: script-src <source>;
    Content-Security-Policy: script-src-attr <source>;

### Sources

{{page("fr/Web/HTTP/Headers/Content-Security-Policy/default-src", "Sources")}}

## Exemples

### Valeur par défaut avec script-src

Si la directive `script-src-attr` est absente, l'agent utilisateur se rabat sur la valeur de la directive {{CSP("script-src")}}, qui elle-même a pour valeur par défaut celle de la directive {{CSP("default-src")}}.

## Spécifications

| Spécification                                                                                    | Statut                       | Commentaire          |
| ------------------------------------------------------------------------------------------------ | ---------------------------- | -------------------- |
| {{specName("CSP 3.0", "#directive-script-src-attr", "script-src-attr")}} | {{Spec2("CSP 3.0")}} | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("http.headers.csp.Content-Security-Policy.script-src-attr")}}

## Voir aussi

- {{HTTPHeader("Content-Security-Policy")}}
- {{HTMLElement("script")}}
- {{CSP("script-src")}}
- {{CSP("script-src-elem")}}
