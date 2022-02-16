---
title: 'CSP: navigate-to'
slug: Web/HTTP/Headers/Content-Security-Policy/navigate-to
tags:
  - CSP
  - Content-Security-Policy
  - Directive
  - HTTP
  - Navigation
  - Reference
  - Security
  - Sécurité
  - navigate-to
translation_of: Web/HTTP/Headers/Content-Security-Policy/navigate-to
---
{{HTTPSidebar}}

La directive HTTP {{HTTPHeader("Content-Security-Policy")}} (CSP) **`navigate-to`** restreint les URL vers lesquelles un document peut initier une navigation de quelque manière que ce soit, dont {{HTMLElement("form")}} (si {{CSP("form-action")}} n'est pas spécifié), {{HTMLElement("a")}}, {{DOMxRef("window.location")}}, {{DOMxRef("window.open")}}, etc. Elle permet de renforcer les navigations que le document peut initier et **non** les adresses vers lesquelles ce document peut naviguer.

> **Note :** Si la directive {{CSP("form-action")}} est présente, la directive `navigate-to` ne sera pas appliquée sur la navigation par la soumission de formulaire.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Version de CSP</th>
      <td>3</td>
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

    Content-Security-Policy: navigate-to <source>;
    Content-Security-Policy: navigate-to <source> <source>;

### Sources

{{page("fr/Web/HTTP/Headers/Content-Security-Policy/default-src", "Sources")}}

## Exemples

### Configuration par balise \<meta>

```html
<meta http-equiv="Content-Security-Policy" content="navigate-to 'none'">
```

### Cas de violation

Utiliser l'élément {{HTMLElement("form")}} avec un attribut `action` défini à un script embarqué en JavaScript résultera en une violation de CSP :

```html example-bad
<meta http-equiv="Content-Security-Policy" content="navigate-to 'none'">

<form action="javascript:alert('Foo')" id="form1" method="post">
  <input type="text" name="fieldName" value="fieldValue">
  <input type="submit" id="submit" value="submit">
</form>
```

## Spécifications

| Spécification                                                                        | Statut                       | Commentaire          |
| ------------------------------------------------------------------------------------ | ---------------------------- | -------------------- |
| {{specName("CSP 3.0", "#directive-navigate-to", "navigate-to")}} | {{Spec2("CSP 3.0")}} | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("http.headers.csp.Content-Security-Policy.navigate-to")}}

## Voir aussi

- {{HTTPheader("Content-Security-Policy")}}
- {{CSP("form-action")}}
- Attribut `href` {{HTMLElement("a")}}
- {{HTMLElement("form")}}
- {{DOMxRef("window.location")}}
- {{DOMxRef("window.open")}}
