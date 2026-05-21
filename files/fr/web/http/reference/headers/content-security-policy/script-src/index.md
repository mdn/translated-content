---
title: "Content-Security-Policy : directive script-src"
short-title: script-src
slug: Web/HTTP/Reference/Headers/Content-Security-Policy/script-src
l10n:
  sourceCommit: dc788bf0ea36cb1ebe809c82aaae2c77cb3e18c0
---

La directive HTTP {{HTTPHeader("Content-Security-Policy")}} (CSP) **`script-src`** définit les sources valides pour du code JavaScript. Cela inclut les URL chargées directement par les éléments HTML {{HTMLElement("script")}}, mais aussi les scripts embarqués, les attributs de gestion d'évènements (par exemple `onclick`) et [les feuilles de style XSLT](/fr/docs/Web/XML/XSLT) pouvant déclencher l'exécution de scripts.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Version de CSP</th>
      <td>1</td>
    </tr>
    <tr>
      <th scope="row">Type de directive</th>
      <td>{{Glossary("Fetch directive", "Directive de récupération")}}</td>
    </tr>
    <tr>
      <th scope="row">Solution de repli {{CSP("default-src")}}</th>
      <td>
        Oui, si cette directive est absente, l'agent utilisateur consultera la directive <code>default-src</code>.
      </td>
    </tr>
  </tbody>
</table>

## Syntaxe

```http
Content-Security-Policy: script-src 'none';
Content-Security-Policy: script-src <source-expression-list>;
```

Cette directive peut avoir l'une des valeurs suivantes&nbsp;:

- `'none'`
  - : Aucune ressource de ce type ne peut être chargée. Les guillemets simples sont obligatoires.
- `<source-expression-list>`
  - : Une liste de valeurs _d'expressions de source_ séparées par des espaces. Les ressources de ce type peuvent être chargées si elles correspondent à l'une des expressions de source données. Pour cette directive, toutes les valeurs d'expression de source énumérées dans [la syntaxe des directives de récupération](/fr/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#syntaxe_des_directives_de_récupération) sont applicables.

## Exemples

### Autoriser les ressources provenant de domaines de confiance

Étant donné cet en-tête CSP qui n'autorise les scripts que depuis `https://exemple.com`&nbsp;:

```http
Content-Security-Policy: script-src https://exemple.com/
```

le script suivant est bloqué et ne sera ni chargé ni exécuté&nbsp;:

```html
<script src="https://hors-exemple.com/js/library.js"></script>
```

On notera que les gestionnaires d'évènements déclarés dans les attributs sont aussi bloqués&nbsp;:

```html
<button id="btn" onclick="faireQuelquechose()">Cliquez sur moi</button>
```

Vous devriez les remplacer par des appels à la méthode {{DOMxRef("EventTarget.addEventListener", "addEventListener")}}&nbsp;:

```js
document.getElementById("btn").addEventListener("click", faireQuelquechose);
```

Si vous ne pouvez pas remplacer les gestionnaires d'évènements en ligne, vous pouvez utiliser l'expression de source `'unsafe-hashes'` pour les autoriser.
Voir [Hachages non sécurisés](#hachages_non_sécurisés) pour plus d'informations.

### Autoriser les scripts externes à l'aide de hachages

Autoriser les domaines de confiance, comme montré dans la section ci-dessus, est une approche générale pour définir les emplacements à partir desquels le code peut être chargé en toute sécurité.
C'est une approche pragmatique, en particulier lorsque votre site utilise de nombreuses ressources et que vous avez confiance que le site de confiance ne sera pas compromis.

Une méthode alternative consiste à définir les scripts autorisés en utilisant des hachages de fichiers.
Avec cette approche, un fichier externe dans un élément `<script>` ne peut être chargé et exécuté que si toutes les valeurs de hachage valides dans son attribut [`integrity`](/fr/docs/Web/HTML/Reference/Elements/script#integrity) correspondent aux valeurs autorisées dans l'en-tête CSP.
La fonctionnalité [Intégrité des sous-ressources](/fr/docs/Web/Security/Defenses/Subresource_Integrity) vérifie en outre que le fichier téléchargé possède la valeur de hachage indiquée, et n'a donc pas été modifié.
C'est plus sûr que de faire confiance à un domaine, car les fichiers ne seront utilisés que s'ils ne sont pas modifiés, même s'ils sont chargés à partir d'un site compromis.
Cependant, c'est plus granulaire, et nécessite que les valeurs de hachage soient mises à jour dans le CSP et les éléments script chaque fois que les scripts associés sont modifiés.

L'en-tête CSP ci-dessous illustre cette approche.
Il permet les scripts pour lesquels le hachage SHA384 est `oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC` ou le hachage SHA256 est `fictional_value`.

```http
Content-Security-Policy: script-src 'sha384-oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC' 'sha256-fictional_value'
```

Le script `exemple-framework.js` ci-dessous devrait se charger car la valeur de hachage dans son attribut `integrity` est également présente dans le CSP (à condition que le fichier ait effectivement ce hachage une fois téléchargé&nbsp;!)

```html
<script
  src="https://exemple.com/exemple-framework.js"
  integrity="sha384-oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC"
  crossorigin="anonymous"></script>
```

L'attribut `integrity` peut avoir plusieurs valeurs, chacune fournissant un hachage pour le fichier calculé à l'aide d'un algorithme différent.
Pour qu'un script externe soit chargé, le CSP exige que _toutes_ les valeurs de hachage valides dans l'attribut soient également présentes dans la déclaration `script-src` du CSP.
Le script ci-dessous ne se chargera donc pas, car le deuxième hachage n'est pas présent dans l'en-tête CSP ci-dessus.

```html
<script
  src="https://exemple.com/exemple-framework.js"
  integrity="sha384-oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC sha256-not-in-csp"
  crossorigin="anonymous"></script>
```

Cette règle ne s'applique qu'aux valeurs de hachage _valides_.
Les valeurs qui ne sont pas reconnues comme des hachages par le navigateur sont ignorées, donc le script suivant devrait se charger&nbsp;:

```html
<script
  src="https://exemple.com/exemple-framework.js"
  integrity="invalid-or-unsupported-hash sha384-oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC"
  crossorigin="anonymous"></script>
```

[L'intégrité des sous-ressources](/fr/docs/Web/Security/Defenses/Subresource_Integrity) contient plus d'informations sur le calcul des hachages et l'utilisation de l'attribut `integrity`.

### Scripts embarqués non fiables

> [!NOTE]
> Interdire les styles et scripts embarqués est l'une des stratégies de sécurité principales que CSP propose. Toutefois, si vous en avez absolument besoin, il existe des mécanismes qui vous permettront de les autoriser.
> Les hachages s'appliquent aux scripts et styles embarqués, mais pas aux gestionnaires d'évènements.
> Voir [Hachages non sécurisés](#hachages_non_sécurisés) pour plus d'informations.

Pour autoriser les scripts et styles embarqués, vous pouvez définir `'unsafe-inline'`, une source de nonce ou une source de hachage correspondant au bloc embarqué.
La politique de sécurité de contenu suivante permettra tous les éléments HTML {{HTMLElement("script")}} embarqués&nbsp;:

```http
Content-Security-Policy: script-src 'unsafe-inline';
```

Cette directive CSP autorisera tous les scripts {{HTMLElement("script")}} embarqués à même le HTML&nbsp;:

```html
<script>
  const inline = 1;
  // …
</script>
```

Autoriser tous les scripts embarqués est considéré comme un risque de sécurité, il est donc recommandé d'utiliser une source de nonce ou une source de hachage à la place.
Pour autoriser les scripts et styles embarqués avec une source de nonce, vous devez générer une valeur {{Glossary("Nonce", "unique")}} aléatoire (en utilisant un générateur de jetons aléatoires cryptographiquement sécurisé) et l'inclure dans la politique.
Il est important de noter que cette valeur de nonce doit être générée dynamiquement car elle doit être unique pour chaque requête HTTP&nbsp;:

```http
Content-Security-Policy: script-src 'nonce-2726c7f26c'
```

Ce nonce doit alors être utilisé sur l'élément {{HTMLElement("script")}}&nbsp;:

```html
<script nonce="2726c7f26c">
  const inline = 1;
  // …
</script>
```

Autrement, vous pouvez créer des empreintes à partir de vos scripts. CSP accepte les algorithmes sha256, sha384 et sha512.

```http
Content-Security-Policy: script-src 'sha256-B2yPHKaXnvFWtRChIbabYmUBFZdVfKKXHbWtWidDVF8='
```

Lors de la génération de l'empreinte, ne pas inclure les balises {{HTMLElement("script")}} et noter que la casse et les espaces comptent, y compris les espaces en début ou en fin de ligne.

```html
<script>
  const inline = 1;
</script>
```

### Hachages non sécurisés

Les politiques pour les ressources inline avec des hachages comme `script-src 'sha256-{HASHED_INLINE_SCRIPT}'` permettent les scripts et styles par leur hachage, mais pas les gestionnaires d'évènement&nbsp;:

```html
<!-- Autorisé par CSP : script-src 'sha256-{HASHED_INLINE_SCRIPT}' -->
<script>
  const inline = 1;
</script>

<!-- CSP : script-src 'sha256-{HASHED_EVENT_HANDLER}'
      ne permettra pas ce gestionnaire d'évènement -->
<button onclick="monScript()">Envoyer</button>
```

Au lieu de permettre `'unsafe-inline'`, vous pouvez utiliser l'expression de source `'unsafe-hashes'` si le code ne peut pas être mis à jour pour utiliser des appels équivalents à {{DOMxRef("EventTarget.addEventListener", "addEventListener")}}.
Étant donné une page HTML qui inclut le gestionnaire d'évènement inline suivant&nbsp;:

```html
<!-- Je veux utiliser addEventListener, mais je ne peux pas :( -->
<button onclick="monScript()">Envoyer</button>
```

L'en-tête CSP suivant permettra l'exécution du script&nbsp;:

```http
Content-Security-Policy:  script-src 'unsafe-hashes' 'sha256-{HASHED_EVENT_HANDLER}'
```

### Expression `unsafe-eval`

La valeur `'unsafe-eval'` contrôle différents méthodes qui créent du code JavaScript à partir de chaines de caractères. Si `'unsafe-eval'` n'est pas spécifiée avec la directive `script-src`, ces méthodes seront bloquées et n'auront aucun effet&nbsp;:

- {{JSxRef("Global_Objects/eval", "eval()")}}
- {{JSxRef("Function", "Function()")}}
- Lors du passage d'une chaîne de caractères littérale à des méthodes telles que&nbsp;: `setTimeout("alert(\"Coucou le monde\");", 500);`
  - {{DOMxRef("Window.setTimeout", "setTimeout()")}}
  - {{DOMxRef("Window.setInterval", "setInterval()")}}
  - {{DOMxRef("Window.setImmediate", "setImmediate()")}}

- `window.execScript()` {{Non-standard_Inline}} (Avant IE11 seulement)

### Exécution non sécurisée de WebAssembly

L'expression de source `'wasm-unsafe-eval'` contrôle l'exécution de WebAssembly.
Si une page possède un en-tête CSP et que `'wasm-unsafe-eval'` n'est pas défini dans la directive `script-src`, WebAssembly est bloqué pour le chargement et l'exécution sur la page.

L'expression de source `'wasm-unsafe-eval'` est plus spécifique que `'unsafe-eval'` qui permet à la fois la compilation (et l'instanciation) de WebAssembly et, par exemple, l'utilisation de l'opération `eval` en JavaScript.
Si le mot-clé de source `'unsafe-eval'` est utilisé, cela remplace toute occurrence de `'wasm-unsafe-eval'` dans la politique CSP.

```http
Content-Security-Policy: script-src 'wasm-unsafe-eval'
```

### `strict-dynamic`

La valeur `'strict-dynamic'` indique que la confiance explicitement donnée à un script de la page, par le biais d'un nonce ou d'une empreinte, doit être propagée à tous les scripts chargés par celui-ci. Par conséquent, toute liste de permissions ou expressions de sources telles que `'self'` ou `'unsafe-inline'` sera ignorée.

Par exemple, une règle telle que `script-src 'strict-dynamic' 'nonce-R4nd0m' https://whitelisted.com/` autoriserait le chargement de scripts comme `<script nonce="R4nd0m" src="https://exemple.com/loader.js">` et s'appliquerait ensuite à tous les scripts chargés par `loader.js`, mais interdirait les scripts chargés depuis `https://allowlisted.exemple.com/` à moins qu'ils soient accompagnés d'un nonce ou chargés depuis un script dont la source est de confiance.

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

### Autoriser les règles de spéculation

Pour inclure des [règles de spéculation](/fr/docs/Web/API/Speculation_Rules_API) dans un élément script (voir aussi [`<script type="speculationrules">`](/fr/docs/Web/HTML/Reference/Elements/script/type/speculationrules)), vous devez utiliser la directive `script-src` avec l'une des sources `'inline-speculation-rules'`, une source de hachage ou une source de nonce. Par exemple&nbsp;:

```http
Content-Security-Policy: script-src 'inline-speculation-rules'
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'en-tête {{HTTPHeader("Content-Security-Policy")}}
- L'élément HTML {{HTMLElement("script")}}
- La directive CSP {{CSP("script-src-elem")}}
- La directive CSP {{CSP("script-src-attr")}}
