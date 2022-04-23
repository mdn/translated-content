---
title: content_security_policy
slug: Mozilla/Add-ons/WebExtensions/manifest.json/content_security_policy
tags:
  - Add-ons
  - Extensions
  - WebExtensions
translation_of: Mozilla/Add-ons/WebExtensions/manifest.json/content_security_policy
---
{{AddonSidebar}}

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row" style="width: 30%">Type</th>
      <td><code>String</code></td>
    </tr>
    <tr>
      <th scope="row">Obligatoire</th>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">Exemple</th>
      <td>
        <pre class="brush: json">
"content_security_policy": "default-src 'self'"</pre
        >
      </td>
    </tr>
  </tbody>
</table>

Les extensions ont une politique de sécurité de contenu qui leur est appliquée par défaut. La stratégie par défaut restreint les sources à partir desquelles elles peuvent charger les ressources [\<script>](/fr/docs/HTML/Element/script) et [\<object>](/docs/Web/HTML/Element/object), et interdit les pratiques potentiellement dangereuses telles que l’utilisation d’[`eval()`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/eval). Voir la [politique de sécurité de contenu par défaut](/fr/Add-ons/WebExtensions/Content_Security_Policy#Default_content_security_policy) pour en savoir plus sur ces implications.

Vous pouvez utiliser la clé `"content_security_policy"` pour desserrer ou resserrer la politique par défaut. Cette clé est spécifiée de la même manière que l’en-tête HTTP Content-Security-Policy. Voir l’[utilisation de la politique de sécurité de contenu](/fr/docs/HTTP/CSP) pour une description générale de la syntaxe de CSP.

Par exemple, vous pouvez utiliser cette clé pour&nbsp;:

- permettre à l’extension de charger des scripts et des objets hors de son paquet, en fournissant leurs URL dans les directives {{CSP("script-src")}} or {{CSP("object-src")}}&nbsp;;
- permettre à l’extension d’exécuter des scripts en ligne, en [fournissant le hash du script dans la directive `"script-src"`](/fr/docs/HTTP/Headers/Content-Security-Policy/script-src#Unsafe_inline_script)&nbsp;;
- permettre à l’extension d’utiliser `eval()` et des fonctionnalités similaires, en incluant `'unsafe-eval'` dans la directive {{CSP("script-src")}}&nbsp;;
- limiter les sources autorisées pour d’autres types de contenu, tels que les images et les feuilles de style, en utilisant la [directive de politique](https://publicsuffix.org/list/) appropriée.

Il existe des restrictions sur la politique que vous pouvez spécifier ici&nbsp;:

- La politique doit inclure au moins les directives {{CSP("script-src")}} et les {{CSP("object-src")}}, et la directive {{CSP("script-src")}} doit contenir le mot-clé `'self'`.
- Les sources distantes doivent utiliser le schéma `https:`.
- Les sources distantes ne doivent pas utiliser de caractères génériques pour les domaines dans la [liste des suffixes publics](https://publicsuffix.org/list/) (ainsi, «&nbsp;\*.co.uk&nbsp;» et «&nbsp;\*.blogspot.com&nbsp;» ne sont pas autorisés, même si «&nbsp;\*.foo.blogspot.com&nbsp;» est autorisé).
- Toutes les sources doivent spécifier un hôte.
- Les seuls schémas autorisés pour les sources sont&nbsp;: `blob:`, `filesystem:`, `moz-extension:`, et `https:`.
- Les seuls [mots-clés](/fr/docs/HTTP/Headers/Content-Security-Policy/default-src#Sources) autorisés sont&nbsp;: `'none'`, `'self'`, et `'unsafe-eval'`.

## Exemple

### Examples valides

Autoriser les scripts distants de "https\://example.com" : <sup>(<em>voir note</em> <a href="/fr/Add-ons/WebExtensions/manifest.json/content_security_policy$edit#exampleNote_1">1</a>)</sup>

```json
"content_security_policy": "script-src 'self' https://example.com; object-src 'self'"
```

Autoriser les scripts distants depuis n’importe quel sous-domaine de «&nbsp;jquery.com&nbsp;»&nbsp;:

```json
"content_security_policy": "script-src 'self' https://*.jquery.com; object-src 'self'"
```

Autoriser [`eval()` et ses amis ](</fr/Add-ons/WebExtensions/Content_Security_Policy#eval()_et_amis>):

```json
"content_security_policy": "script-src 'self' 'unsafe-eval'; object-src 'self';"
```

Autoriser le script en ligne&nbsp;: `"<script>alert('Hello, world.');</script>"`&nbsp;:

```json
"content_security_policy": "script-src 'self' 'sha256-qznLcsROx4GACP2dm0UCKCzCG+HiZ1guq6ZZDob/Tng='; object-src 'self'"
```

Conserver le reste de la politique, mais exiger également que les images soient empaquetées avec l’extension&nbsp;:

```json
"content_security_policy": "script-src 'self'; object-src 'self'; img-src 'self'"
```

Exiger que tous les types de contenu soient empaquetés avec l’extension&nbsp;:

```json
"content_security_policy": "default-src 'self'"
```

### Exemples non valides

Politique qui omet la directive `"object-src"`&nbsp;:

```json
"content_security_policy": "script-src 'self' https://*.jquery.com;"
```

Politique qui omet le mot-clé `"self"` dans la directive `"script-src"`&nbsp;:

```json
"content_security_policy": "script-src https://*.jquery.com; object-src 'self'"
```

Le schéma pour une source distante n’est pas `https:`&nbsp;:

```json
"content_security_policy": "script-src 'self' http://code.jquery.com; object-src 'self'"
```

Le caractère générique est utilisé avec un domaine générique&nbsp;:

```json
"content_security_policy": "script-src 'self' https://*.blogspot.com; object-src 'self'"
```

La source spécifie un schéma mais aucun hôte&nbsp;:

```json
"content_security_policy": "script-src 'self' https:; object-src 'self'"
```

La directive inclut le mot-clé non pris en charge `'unsafe-inline'`&nbsp;:

```json
"content_security_policy": "script-src 'self' 'unsafe-inline'; object-src 'self'"
```

1\. _Note&nbsp;: les exemples valides montrent l’utilisation correcte des clés dans CSP. Toutefois, les extensions avec_ _`'unsafe-eval'`, `'unsafe-inline'`, des blobs, des scripts ou des sources distantes dans leur CSP ne sont pas autorisées à être répertoriées sur addons.mozilla.org en raison de problèmes de sécurité majeurs._

## Compatibilité des navigateurs

{{Compat("webextensions.manifest.content_security_policy")}}
