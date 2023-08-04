---
title: version
slug: Mozilla/Add-ons/WebExtensions/manifest.json/version
---

{{AddonSidebar}}

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row" style="width: 30%">Type</th>
      <td><code>Chaîne</code></td>
    </tr>
    <tr>
      <th scope="row">Obligatoire</th>
      <td>Oui</td>
    </tr>
    <tr>
      <th scope="row">Exemple</th>
      <td><pre class="brush: json">"version": "0.1"</pre></td>
    </tr>
  </tbody>
</table>

Version de l'extension, sous forme de nombres et de caractères ASCII séparés par des points. Pour connaître les détails du format de version, consultez la page [Format de la version](/fr/docs/Toolkit_version_format).

Vous pouvez inspecter le [code de linter des modules complémentaires](https://github.com/mozilla/addons-linter/blob/master/src/schema/formats.js#L10) pour voir comment les versions d'extension pour Firefox sont validées.

Notez que [la syntaxe définie pour la version de Chrome](https://developer.chrome.com/extensions/manifest/version) est plus restrictive que celle utilisée par Firefox :

- Les valeurs d'une `version` valide pour Chrome seront toujours valables pour Firefox
- Les valeurs d'une `version` valide pour Firefox peuvent ne pas être valides pour Chrome

Pour obtenir votre version d'extension dans votre code JavaScript, utilisez :

```js
console.log(browser.runtime.getManifest().version);
```

## Exemple

Si le manifest contient :

```js
"version": "0.1"
```

Pour obtenir votre version d'extension dans votre code JavaScript, utilisez :

```js
console.log(browser.runtime.getManifest().version);
// expected output: "0.1"
```

## Compatibilité des navigateurs

{{Compat}}
