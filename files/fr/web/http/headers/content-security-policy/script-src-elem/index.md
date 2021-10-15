---
title: 'CSP: script-src-elem'
slug: Web/HTTP/Headers/Content-Security-Policy/script-src-elem
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
  - script-src-elem
  - source
translation_of: Web/HTTP/Headers/Content-Security-Policy/script-src-elem
---
{{HTTPSidebar}}

La directive HTTP {{HTTPHeader("Content-Security-Policy")}} (CSP) **`script-src-elem`** spécifie les sources valides pour des éléments {{HTMLElement("script")}} JavaScript, mais non pour des scripts embarqués ou des gestionnaire d'évènements par attribut comme `onclick`.

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

    Content-Security-Policy: script-src-elem <source>;
    Content-Security-Policy: script-src-elem <source> <source>;

`script-src-elem` peut être utilisée conjointement à {{CSP("script-src")}} :

    Content-Security-Policy: script-src <source>;
    Content-Security-Policy: script-src-elem <source>;

### Sources

{{page("fr/Web/HTTP/Headers/Content-Security-Policy/default-src", "Sources")}}

## Exemples

### Valeur par défaut avec script-src

Si la directive `script-src-elem` est absente, l'agent utilisateur se rabat sur la valeur de la directive {{CSP("script-src")}}, qui elle-même a pour valeur par défaut celle de la directive {{CSP("default-src")}}.

## Spécifications

| Spécification                                                                                    | Statut                       | Commentaire          |
| ------------------------------------------------------------------------------------------------ | ---------------------------- | -------------------- |
| {{specName("CSP 3.0", "#directive-script-src-elem", "script-src-elem")}} | {{Spec2("CSP 3.0")}} | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("http.headers.csp.Content-Security-Policy.script-src-elem")}}

## Voir aussi

- {{HTTPHeader("Content-Security-Policy")}}
- {{HTMLElement("script")}}
- {{CSP("script-src")}}
- {{CSP("script-src-attr")}}
