---
title: 'CSP : navigate-to'
slug: conflicting/Web/HTTP/Headers/Content-Security-Policy
translation_of: Web/HTTP/Headers/Content-Security-Policy/navigate-to
original_slug: Web/HTTP/Headers/Content-Security-Policy/navigate-to
browser-compat: http.headers.csp.Content-Security-Policy.navigate-to
---
{{HTTPSidebar}}

La directive HTTP [`Content-Security-Policy`](/fr/docs/Web/HTTP/Headers/Content-Security-Policy) **`navigate-to`** restreint les URL vers lesquelles un document peut initier une navigation de quelque manière que ce soit ([`<form>`](/fr/docs/Web/HTML/Element/Form), si [`form-action`](/fr/docs/Web/HTTP/Headers/Content-Security-Policy/form-action) n'est pas spécifié&nbsp;; [`<a>`](/fr/docs/Web/HTML/Element/a), [`window.location`](/fr/docs/Web/API/Window/location), [`window.open`](/fr/docs/Web/API/Window/open), etc.). Cette contrainte ne concerne que les navigations *initiées* par le document et **pas** les destinations vers lesquelles il est possible de naviguer depuis le document.

> **Note :** Si la directive [`form-action`](/fr/docs/Web/HTTP/Headers/Content-Security-Policy/form-action) est présente, la directive `navigate-to` ne s'appliquera pas aux navigations causées par les envois de formulaire.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Version de CSP</th>
      <td>3</td>
    </tr>
    <tr>
      <th scope="row">Type de directive</th>
      <td><a href="/fr/docs/Glossary/Navigation_directive">Directive de navigation</a></td>
    </tr>
    <tr>
      <th scope="row">Utilisation de <a href="/fr/docs/Web/HTTP/Headers/Content-Security-Policy/default-src"><code>default-src</code></a> par défaut</th>
      <td>Non, ne pas définir cette directive autorise toutes les adresses.</td>
    </tr>
  </tbody>
</table>

## Syntaxe

Une ou plusieurs sources peuvent être utilisées pour cette directive&nbsp;:

```http
Content-Security-Policy: navigate-to <source>;
Content-Security-Policy: navigate-to <source> <source>;
```

### Sources

`<source>` peut être n'importe quelle valeur parmi celles énumérées dans [l'article sur les valeurs sources CSP](/fr/docs/Web/HTTP/Headers/Content-Security-Policy/Sources#sources).

On notera que cet ensemble de valeurs peut être utilisé pour toutes les [directives de récupération](/fr/docs/Glossary/Fetch_directive) (et pour [certaines autres directives](/fr/docs/Web/HTTP/Headers/Content-Security-Policy/Sources#directives_associées)).

## Exemples

### Configuration avec la balise `<meta>`

```html
<meta http-equiv="Content-Security-Policy" content="navigate-to 'none'">
```

### Cas de violation

Utiliser l'élément [`<form>`](/fr/docs/Web/HTML/Element/Form) avec un attribut `action` défini avec un script JavaScript embarqué résultera en une violation de CSP&nbsp;:

```html example-bad
<meta http-equiv="Content-Security-Policy" content="navigate-to 'none'">

<form action="javascript:console.log('toto')" id="form1" method="post">
  <input type="text" name="fieldName" value="fieldValue">
  <input type="submit" id="submit" value="submit">
</form>
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`Content-Security-Policy`](/fr/docs/Web/HTTP/Headers/Content-Security-Policy)
- [`form-action`](/fr/docs/Web/HTTP/Headers/Content-Security-Policy/form-action)
- L'attribut [`href`](/fr/docs/Web/HTML/Element/a#href) pour l'élément HTML [`<a>`](/fr/docs/Web/HTML/Element/a)
- [`<form>`](/fr/docs/Web/HTML/Element/Form)
- [`window.location`](/fr/docs/Web/API/Window/location)
- [`window.open`](/fr/docs/Web/API/Window/open)
