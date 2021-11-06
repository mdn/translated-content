---
title: 'CSP: style-src'
slug: Web/HTTP/Headers/Content-Security-Policy/style-src
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
translation_of: Web/HTTP/Headers/Content-Security-Policy/style-src
---
{{HTTPSidebar}}

La directive HTTP {{HTTPHeader("Content-Security-Policy")}} (CSP) **`style-src`** spécifie les sources valides pour des feuilles de style.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Version de CSP</th>
      <td>1</td>
    </tr>
    <tr>
      <th scope="row">Type de directive</th>
      <td>{{Glossary("Fetch directive")}}</td>
    </tr>
    <tr>
      <th scope="row">{{CSP("default-src")}} fallback</th>
      <td>
        Oui, si cette directive est absente, l'agent utilisateur consultera la
        directive <code>default-src</code>
      </td>
    </tr>
  </tbody>
</table>

## Syntaxe

Une ou plusieurs sources peuvent être autorisées pour cette directive :

    Content-Security-Policy: style-src <source>;
    Content-Security-Policy: style-src <source> <source>;

### Sources

{{page("fr/Web/HTTP/Headers/Content-Security-Policy/connect-src", "Sources")}}

## Exemples

### Cas de violation

Soit cet en-tête CSP :

```bash
Content-Security-Policy: style-src https://example.com/
```

Ces feuilles de style seront bloquées et ne se chargeront pas :

```html
<link href="https://not-example.com/styles/main.css" rel="stylesheet" type="text/css" />

<style>
#inline-style { background: red; }
</style>

<style>
  @import url("https://not-example.com/styles/print.css") print;
</style>
```

De même que les styles chargés avec l'en-tête {{HTTPHeader("Link")}} :

```bash
Link: <https://not-example.com/styles/stylesheet.css>;rel=stylesheet
```

Les attributes de style seront aussi bloqués :

```html
<div style="display:none">Foo</div>
```

De même que les styles ajoutés par JavaScript en définissant l'attribut `style` directement, ou en définissant la propriété {{domxref("CSSStyleDeclaration.cssText", "cssText")}} :

```js
document.querySelector('div').setAttribute('style', 'display:none;');
document.querySelector('div').style.cssText = 'display:none;';
```

Toutefois, les propriétés de styles qui sont définies directement dans l'attribut {{domxref("HTMLElement.style", "style")}} ne seront pas bloquées, permettant aux utilisateurs de manipuler sainement les styles avec JavaScript :

```js
document.querySelector('div').style.display = 'none';
```

Ce genre de manipulations peut être bloqué en désactivant JavaScript au moyen de la directive CSP {{CSP("script-src")}}.

### Styles embarqués non fiables

> **Note :** Bloquer les styles et scripts embarqués est l'une des stratégies de sécurité majeures que CSP propose. Toutefois, si vous en avez absolument besoin, il existe des mécanismes qui vous permettront de les autoriser.

Vous pouvez autoriser les styles embarqués en spécifiant la valeur `'unsafe-inline'`, des nonces ou des hashs correspondant à la feuille de style.

```bash
Content-Security-Policy: style-src 'unsafe-inline';
```

Cette directive CSP autorisera toutes les feuilles de styles embarquées telles que l'élément {{HTMLElement("style")}} et l'attribut `style` sur tous les éléments :

```html
<style>
#inline-style { background: red; }
</style>

<div style="display:none">Foo</div>
```

Vous pouvez aussi utiliser un nonce pour autoriser spécifiquement certains éléments {{HTMLElement("style")}} :

```bash
Content-Security-Policy: style-src 'nonce-2726c7f26c'
```

Vous devrez alors définir ce nonce sur l'élément {{HTMLElement("style")}} :

```html
<style nonce="2726c7f26c">
#inline-style { background: red; }
</style>
```

Autrement, vous pourrez créer des hashs à partir de vos feuilles de styles. CSP accepte les algorithmes sha256, sha384 et sha512.

```bash
Content-Security-Policy: style-src 'sha256-a330698cbe9dc4ef1fb12e2ee9fc06d5d14300262fa4dc5878103ab7347e158f'
```

Lors de la génération du hash, vous ne devez pas inclure les balises et tenir compte de la casse et des caractères blancs (espaces, retours à la ligne, etc.).

```html
<style>#inline-style { background: red; }</style>
```

### Style non fiables

La valeur `'unsafe-eval'` contrôle différente méthodes de mise en page qui créent des déclarations de style à partir de chaines de caractères. Si `'unsafe-eval'` n'est pas spécifiée avec la directive `style-src`, ces méthodes seront bloquées et n'auront aucun effet :

- {{domxref("CSSStyleSheet.insertRule()")}}
- {{domxref("CSSGroupingRule.insertRule()")}}
- {{domxref("CSSStyleDeclaration.cssText")}}

## Spécifications

| Specification                                                                    | Status                       | Comment              |
| -------------------------------------------------------------------------------- | ---------------------------- | -------------------- |
| {{specName("CSP 3.0", "#directive-style-src", "style-src")}} | {{Spec2('CSP 3.0')}} | Inchangé.            |
| {{specName("CSP 1.1", "#directive-style-src", "style-src")}} | {{Spec2('CSP 1.1')}} | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("http.headers.csp.Content-Security-Policy.style-src")}}

## Voir aussi

- {{HTTPHeader("Content-Security-Policy")}}
- {{CSP("style-src-elem")}}
- {{CSP("style-src-attr")}}
- {{HTTPHeader("Link")}} header
- {{HTMLElement("style")}}, {{HTMLElement("link")}}
- {{cssxref("@import")}}
- {{domxref("CSSStyleSheet.insertRule()")}}
- {{domxref("CSSGroupingRule.insertRule()")}}
- {{domxref("CSSStyleDeclaration.cssText")}}
