---
title: 'CSP: script-src'
slug: Web/HTTP/Headers/Content-Security-Policy/script-src
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
  - source
translation_of: Web/HTTP/Headers/Content-Security-Policy/script-src
---
{{HTTPSidebar}}

La directive HTTP {{HTTPHeader("Content-Security-Policy")}} (CSP) **`script-src`** spécifie les sources valides pour du code JavaScript. Cela inclut non seulement les URL chargées directement par les éléments {{HTMLElement("script")}}, mais aussi les scripts embarqués, les attributs de gestion d'évènements (`onclick`) et [les feuilles de style XSLT](/en-US/docs/Web/XSLT) pouvant déclencher l'exécution de scripts.

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
      <th scope="row">{{CSP("default-src")}} par défaut</th>
      <td>
        Oui, si cette directive est absente, l'agent utilisateur consultera la
        directive <code>default-src</code>
      </td>
    </tr>
  </tbody>
</table>

## Syntaxe

Une ou plusieurs sources peuvent être autorisées pour cette directive :

    Content-Security-Policy: script-src <source>;
    Content-Security-Policy: script-src <source> <source>;

### Sources

{{page("fr/Web/HTTP/Headers/Content-Security-Policy/default-src", "Sources")}}

## Exemples

### Cas de violation

Soit cet en-tête CSP :

```bash
Content-Security-Policy: script-src https://example.com/
```

Ces scripts seront bloqués et ne seront pas chargés ou exécutés :

```html
<script src="https://not-example.com/js/library.js"></script>
```

Notez que les gestionnaires d'évènements par attributs sont aussi bloqués :

```html
<button id="btn" onclick="doSomething()">
```

Vous devez les remplacer par des appels à la méthode {{domxref("EventTarget.addEventListener", "addEventListener")}} :

```js
document.getElementById("btn").addEventListener('click', doSomething);
```

### Scripts embarqués non fiables

> **Note :** Bloquer les styles et scripts embarqués est l'une des stratégies de sécurité majeures que CSP propose. Toutefois, si vous en avez absolument besoin, il existe des mécanismes qui vous permettront de les autoriser.

Vous pouvez autoriser les scripts embarqués et les gestionnaires d'évènements par attributs en spécifiant la valeur `'unsafe-inline'`, des nonces ou des hashs correspondant au script.

```bash
Content-Security-Policy: script-src 'unsafe-inline';
```

Cette directive CSP autorisera tous les scripts {{HTMLElement("script")}} embarqués :

```html
<script>
  var inline = 1;
</script>
```

Vous pouvez aussi utiliser un nonce pour autoriser spécifiquement certains éléments {{HTMLElement("script")}} embarqués :

```bash
Content-Security-Policy: script-src 'nonce-2726c7f26c'
```

Vous devrez alors définir ce nonce sur l'élément {{HTMLElement("script")}} :

```html
<script nonce="2726c7f26c">
  var inline = 1;
</script>
```

Autrement, vous pouvez créer des hashs à partir de vos scripts. CSP accepte les algorithmes sha256, sha384 et sha512.

```bash
Content-Security-Policy: script-src 'sha256-B2yPHKaXnvFWtRChIbabYmUBFZdVfKKXHbWtWidDVF8='
```

Lors de la génération du hash, vous ne devez pas inclure les balises et tenir compte de la casse et des caractères blancs (espaces, retours à la ligne, etc.).

```html
<script>var inline = 1;</script>
```

### Expressions d'évaluation non fiables

La valeur `'unsafe-eval'` contrôle différents méthodes qui créent du code JavaScript à partir de chaines de caractères. Si `'unsafe-eval'` n'est pas spécifiée avec la directive `script-src`, ces méthodes seront bloquées et n'auront aucun effet :

- {{jsxref("eval", "eval()")}}
- {{jsxref("Function", "Function()")}}
- En passant une chaine à des méthodes tel que : `window.setTimeout("alert(\"Hello World!\");", 500);`

  - {{domxref("window.setTimeout")}}
  - {{domxref("window.setInterval")}}
  - {{domxref("window.setImmediate")}}

- {{domxref("window.execScript")}} {{non-standard_inline}} (IE10 et versions précédentes)

### strict-dynamic

La valeur `'strict-dynamic'` spécifie que la confiance explicitement donnée à un script de la page, par le biais d'un nonce ou d'un hash, doit être propagée à tous les scripts chargés par celui-ci. En conséquence, toute liste de permissions ou expressions de sources telles que `'self'` ou `'unsafe-inline'` sont ignorées. Par exemple, une règle telle que `script-src 'strict-dynamic' 'nonce-R4nd0m' https://whitelisted.com/` autoriserait le chargement de scripts comme `<script nonce="R4nd0m" src="https://example.com/loader.js">` et s'appliquerait ensuite à tous les scripts chargés par `loader.js`, mais interdirait les scripts chargés depuis `https://whitelisted.com/` à moins qu'ils soient accompagnés d'un nonce ou chargés depuis un script dont la source est de confiance.

```bash
script-src 'strict-dynamic' 'nonce-someNonce'
```

_Ou_

```bash
script-src 'strict-dynamic' 'sha256-base64EncodedHash'
```

Il est possible de déployer `strict-dynamic` de manière rétrocompatible, sans chercher à connaitre l'agent utilisateur. Cette directive :

```bash
script-src 'unsafe-inline' https: 'nonce-abcdefg' 'strict-dynamic'
```

fonctionnera comme `'unsafe-inline' https:` pour les navigateurs supportant CSP1, `https: 'nonce-abcdefg'` pour ceux supportant CSP2 et comme `'nonce-abcdefg' 'strict-dynamic'` pour ceux supportant CSP3.

## Spécifications

| Spécification                                                                        | Statut                       | Commentaire         |
| ------------------------------------------------------------------------------------ | ---------------------------- | ------------------- |
| {{specName("CSP 3.0", "#directive-script-src", "script-src")}} | {{Spec2('CSP 3.0')}} | Inchangé.           |
| {{specName("CSP 1.1", "#directive-script-src", "script-src")}} | {{Spec2('CSP 1.1')}} | Initial definition. |

## Compatibilité des navigateurs

{{Compat("http.headers.csp.Content-Security-Policy.script-src")}}

## Voir aussi

- {{HTTPHeader("Content-Security-Policy")}}
- {{HTMLElement("script")}}
- {{CSP("script-src-elem")}}
- {{CSP("script-src-attr")}}
