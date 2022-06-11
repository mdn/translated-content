---
title: 'CSP : script-src'
slug: Web/HTTP/Headers/Content-Security-Policy/script-src
translation_of: Web/HTTP/Headers/Content-Security-Policy/script-src
browser-compat: http.headers.csp.Content-Security-Policy.script-src
---
{{HTTPSidebar}}

La directive HTTP [`Content-Security-Policy`](/fr/docs/Web/HTTP/Headers/Content-Security-Policy) **`script-src`** spécifie les sources valides pour du code JavaScript. Cela inclut les URL chargées directement par les éléments [`<script>`](/fr/docs/Web/HTML/Element/script), et aussi les scripts embarqués, les attributs de gestion d'évènements (par exemple `onclick`) et [les feuilles de style XSLT](/fr/docs/Web/XSLT) pouvant déclencher l'exécution de scripts.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Version de CSP</th>
      <td>1</td>
    </tr>
    <tr>
      <th scope="row">Type de directive</th>
      <td><a href="/fr/docs/Glossary/Fetch_directive">Directive de récupération</a></td>
    </tr>
    <tr>
      <th scope="row">Utilisation de <a href="/fr/docs/Web/HTTP/Headers/Content-Security-Policy/default-src"><code>default-src</code></a> par défaut</th>
      <td>
        Oui, si cette directive est absente, l'agent utilisateur consultera la directive <code>default-src</code>.
      </td>
    </tr>
  </tbody>
</table>

## Syntaxe

Une ou plusieurs sources peuvent être autorisées pour cette directive&nbsp;:

```http
Content-Security-Policy: script-src <source>;
Content-Security-Policy: script-src <source> <source>;
```

### Sources

`<source>` peut être n'importe quelle valeur parmi celles énumérées dans [l'article sur les valeurs sources CSP](/fr/docs/Web/HTTP/Headers/Content-Security-Policy/Sources#sources).

On notera que cet ensemble de valeurs peut être utilisé pour toutes les [directives de récupération](/fr/docs/Glossary/Fetch_directive) (et pour [certaines autres directives](/fr/docs/Web/HTTP/Headers/Content-Security-Policy/Sources#directives_associées)).

## Exemples

### Cas de violation

Soit cet en-tête CSP&nbsp;:

```http
Content-Security-Policy: script-src https://example.com/
```

Ces scripts seront bloqués et ne seront pas chargés ou exécutés&nbsp;:

```html
<script src="https://not-example.com/js/bibliotheque.js"></script>
```

On notera que les gestionnaires d'évènements déclarés dans les attributs sont aussi bloqués&nbsp;:

```html
<button id="btn" onclick="faireQuelqueChose()">
```

Il faudra les remplacer par des appels à la méthode [`addEventListener()`](/fr/docs/Web/API/EventTarget/addEventListener)&nbsp;:

```js
document.getElementById("btn").addEventListener('click', faireQuelqueChose);
```

### Scripts embarqués non fiables

> **Note :** Bloquer les styles et scripts embarqués est l'une des stratégies de sécurité principales que CSP propose. Toutefois, si vous en avez absolument besoin, il existe des mécanismes qui vous permettront de les autoriser.

Vous pouvez autoriser les scripts embarqués et les gestionnaires d'évènements par attributs en spécifiant la valeur `'unsafe-inline'`, des nonces ou des empreintes correspondant au script.

```http
Content-Security-Policy: script-src 'unsafe-inline';
```

Cette directive CSP autorisera tous les scripts [`<script>`](/fr/docs/Web/HTML/Element/script) embarqués à même le HTML&nbsp;:

```html
<script>
  var inline = 1;
</script>
```

Vous pouvez aussi utiliser un nonce pour autoriser spécifiquement certains éléments [`<script>`](/fr/docs/Web/HTML/Element/script) contenus à même le document HTML&nbsp;:

```http
Content-Security-Policy: script-src 'nonce-2726c7f26c'
```

Ce nonce doit alors être utilisé sur l'élément [`<script>`](/fr/docs/Web/HTML/Element/script)&nbsp;:

```html
<script nonce="2726c7f26c">
  var inline = 1;
</script>
```

Autrement, vous pouvez créer des empreintes à partir de vos scripts. CSP accepte les algorithmes sha256, sha384 et sha512.

```http
Content-Security-Policy: script-src 'sha256-B2yPHKaXnvFWtRChIbabYmUBFZdVfKKXHbWtWidDVF8='
```

Lors de la génération de l'empreinte, vous ne devez pas inclure les balises et tenir compte de la casse et des caractères blancs (espaces, retours à la ligne, etc.).

```html
<script>var inline = 1;</script>
```

### `unsafe-eval`

La valeur `'unsafe-eval'` contrôle différents méthodes qui créent du code JavaScript à partir de chaines de caractères. Si `'unsafe-eval'` n'est pas spécifiée avec la directive `script-src`, ces méthodes seront bloquées et n'auront aucun effet&nbsp;:

- [`eval()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/eval)
- [`Function()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Function)
- En passant une chaine à des méthodes tel que : `window.setTimeout("alert('Coucou le monde');", 500);`

  - [`setTimeout()`](/fr/docs/Web/API/setTimeout)
  - [`setInterval()`](/fr/docs/Web/API/setInterval)
  - [`window.setImmediate()`](/fr/docs/Web/API/window/setImmediate)

- `window.execScript()` {{non-standard_inline}} (IE10 et versions précédentes)

### `strict-dynamic`

La valeur `'strict-dynamic'` indique que la confiance explicitement donnée à un script de la page, par le biais d'un nonce ou d'une empreinte, doit être propagée à tous les scripts chargés par celui-ci. Par conséquent, toute liste de permissions ou expressions de sources telles que `'self'` ou `'unsafe-inline'` sera ignorée. Par exemple, une règle telle que `script-src 'strict-dynamic' 'nonce-R4nd0m' https://whitelisted.com/` autoriserait le chargement de scripts comme `<script nonce="R4nd0m" src="https://example.com/loader.js">` et s'appliquerait ensuite à tous les scripts chargés par `loader.js`, mais interdirait les scripts chargés depuis `https://allowlisted.example.com/` à moins qu'ils soient accompagnés d'un nonce ou chargés depuis un script dont la source est de confiance.

```http
Content-Security-Policy: script-src 'strict-dynamic' 'nonce-someNonce'
```

Ou&nbsp;:

```http
Content-Security-Policy: script-src 'strict-dynamic' 'sha256-base64EncodedHash'
```

Il est possible de déployer `strict-dynamic` de manière rétrocompatible, sans chercher à connaitre l'agent utilisateur. Cette directive&nbsp;:

```http
Content-Security-Policy: script-src 'unsafe-inline' https: 'nonce-abcdefg' 'strict-dynamic'
```

fonctionnera comme `'unsafe-inline' https:` pour les navigateurs prenant en charge CSP1, `https: 'nonce-abcdefg'` pour ceux prenant en charge CSP2 et comme `'nonce-abcdefg' 'strict-dynamic'` pour ceux prenant en charge CSP3.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`Content-Security-Policy`](/fr/docs/Web/HTTP/Headers/Content-Security-Policy)
- [`<script>`](/fr/docs/Web/HTML/Element/script)
- [`script-src-elem`](/fr/docs/Web/HTTP/Headers/Content-Security-Policy/script-src-elem)
- [`script-src-attr`](/fr/docs/Web/HTTP/Headers/Content-Security-Policy/script-src-attr)
