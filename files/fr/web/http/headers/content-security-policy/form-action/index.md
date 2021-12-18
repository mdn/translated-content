---
title: 'CSP: form-action'
slug: Web/HTTP/Headers/Content-Security-Policy/form-action
tags:
  - CSP
  - Content-Security-Policy
  - Directive
  - HTTP
  - Security
  - Sécurité
  - form
  - form-action
translation_of: Web/HTTP/Headers/Content-Security-Policy/form-action
---
{{HTTPSidebar}}

La directive HTTP {{HTTPHeader("Content-Security-Policy")}} (CSP) **`form-action`** restreint les URL pouvant être utilisées comme cibles de soumissions de formulaires depuis un contexte donné.

> **Attention :** La question de savoir si `form-action` doit bloquer les redirections après une soumission de formulaire est encore [débattue](https://github.com/w3c/webappsec-csp/issues/8) et les implantations des navigateurs sur cet aspect sont incohérentes (par exemple Firefox 57 ne les bloque pas, contrairement à Chrome 63).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Version de CSP</th>
      <td>2</td>
    </tr>
    <tr>
      <th scope="row">Type de directive</th>
      <td>{{Glossary("Navigation directive")}}</td>
    </tr>
    <tr>
      <th scope="row">{{CSP("default-src")}} par défaut</th>
      <td>Non, ne pas la définir autorise toutes les adresses.</td>
    </tr>
  </tbody>
</table>

## Syntaxe

Une ou plusieurs sources peuvent être utilisées pour cette directive :

    Content-Security-Policy: form-action <source>;
    Content-Security-Policy: form-action <source> <source>;

### Sources

{{page("fr/Web/HTTP/Headers/Content-Security-Policy/default-src", "Sources")}}

## Exemples

### Configuration par balise \<meta>

```html
<meta http-equiv="Content-Security-Policy" content="form-action 'none'">
```

### Configuration par Apache

```bash
<IfModule mod_headers.c>
Header set Content-Security-Policy "form-action 'none';"
</IfModule>
```

### Configuration par Nginx

```bash
add_header Content-Security-Policy "form-action 'none';"
```

### Cas de violation

Utiliser un élément {{HTMLElement("form")}} avec un attribut `action` défini à un script embarqué JavaScript résultera en une violation de CSP :

```html example-bad
<meta http-equiv="Content-Security-Policy" content="form-action 'none'">

<form action="javascript:alert('Foo')" id="form1" method="post">
  <input type="text" name="fieldName" value="fieldValue">
  <input type="submit" id="submit" value="submit">
</form>

// Error: Refused to send form data because it violates the following
// Content Security Policy directive: "form-action 'none'".
```

## Spécifications

| Spécification                                                                        | Statut                       | Commentaire          |
| ------------------------------------------------------------------------------------ | ---------------------------- | -------------------- |
| {{specName("CSP 3.0", "#directive-form-action", "form-action")}} | {{Spec2('CSP 3.0')}} | Inchangé.            |
| {{specName("CSP 1.1", "#directive-form-action", "form-action")}} | {{Spec2('CSP 1.1')}} | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("http.headers.csp.Content-Security-Policy.form-action")}}

## Voir aussi

- {{HTTPheader("Content-Security-Policy")}}
- {{HTMLElement("form")}}
