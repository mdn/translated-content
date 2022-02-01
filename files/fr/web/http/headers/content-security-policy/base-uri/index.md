---
title: 'CSP: base-uri'
slug: Web/HTTP/Headers/Content-Security-Policy/base-uri
tags:
  - CSP
  - Content-Security-Policy
  - Directive
  - HTTP
  - Reference
  - Security
  - Sécurité
  - source
translation_of: Web/HTTP/Headers/Content-Security-Policy/base-uri
---
{{HTTPSidebar}}

La directive HTTP {{HTTPHeader("Content-Security-Policy")}} (CSP) **`base-uri`** restreint les URL qui peuvent être utilisées comme valeur d'un élément {{HTMLElement("base")}}. Si cette valeur est absente, alors toutes les adresses sont autorisées. Si cette directive est absente, l'agent utilisateur va utiliser la valeur dans l'élément {{HTMLElement("base")}}.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Version de CSP</th>
      <td>2</td>
    </tr>
    <tr>
      <th scope="row">Type de directive</th>
      <td>{{Glossary("Document directive")}}</td>
    </tr>
    <tr>
      <th scope="row">{{CSP("default-src")}} par défaut</th>
      <td>Non, ne pas la définir autorise toutes les URL</td>
    </tr>
  </tbody>
</table>

## Syntaxe

Une ou plusieurs _sources_ peuvent être autorisées pour cette directive :

    Content-Security-Policy: base-uri <source>;
    Content-Security-Policy: base-uri <source> <source>;

### Sources

Bien que cette directive utilise les mêmes arguments que d'autres directives CSP, certains d'entre eux n'ont pas de sens concernant l'élément {{HTMLElement("base")}}, comme les valeurs `'unsafe-inline'` et `'strict-dynamic'`

{{page("fr/Web/HTTP/Headers/Content-Security-Policy/default-src", "Sources")}}

## Exemples

### Configuration par balise \<meta>

```html
<meta http-equiv="Content-Security-Policy" content="base-uri 'self'">
```

### Configuration par Apache

```bash
<IfModule mod_headers.c>
Header set Content-Security-Policy "base-uri 'self'";
</IfModule>
```

### Configuration par Nginx

```bash
add_header Content-Security-Policy "base-uri 'self';"
```

### Cas de violation

À partir du moment où votre domaine n'est pas `example.com`, un élément {{HTMLElement("base")}} avec son attribut `href` défini à `https://example.com` résultera en une violation de CSP.

```html example-bad
<meta http-equiv="Content-Security-Policy" content="base-uri 'self'">
<base href="https://example.com/">

// Error: Refused to set the document's base URI to 'https://example.com/'
// because it violates the following Content Security Policy
// directive: "base-uri 'self'"
```

## Spécifications

| Spécification                                                                | Statut                       | Commentaire          |
| ---------------------------------------------------------------------------- | ---------------------------- | -------------------- |
| {{specName("CSP 3.0", "#directive-base-uri", "base-uri")}} | {{Spec2('CSP 3.0')}} | Inchangé.            |
| {{specName("CSP 1.1", "#directive-base-uri", "base-uri")}} | {{Spec2('CSP 1.1')}} | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("http.headers.csp.base-uri")}}

## Voir aussi

- {{HTTPheader("Content-Security-Policy")}}
- {{HTMLElement("base")}}
- {{domxref("Node.baseURI")}}
