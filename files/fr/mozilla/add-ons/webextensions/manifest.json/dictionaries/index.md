---
title: dictionaries
slug: Mozilla/Add-ons/WebExtensions/manifest.json/dictionaries
---

{{AddonSidebar}}

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row" style="width: 30%">Type</th>
      <td><code>Object</code></td>
    </tr>
    <tr>
      <th scope="row">Obligatoire</th>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">Exemple</th>
      <td>
        <pre class="brush: json">
"dictionaries": {
  "en-US": "dictionaries/en-US.dic"
}</pre
        >
      </td>
    </tr>
  </tbody>
</table>

Les clés des `dictionaries` specifie le `locale_code` pour lequel votre extension fournit un dictionnaire. Bien que le dictionnaire se compose de deux fichiers, l'un avec une extension `.dic` et l'autre avec une extension `.aff`, seul celui avec l'extension `.dic` est référencé dans le fichier manifest.json.

## Exemple

```json
"dictionaries": {
  "en-US": "dictionaries/en-US.dic"
}
```

## Compatibilité des navigateurs

{{Compat}}
