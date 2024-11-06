---
title: incognito
slug: Mozilla/Add-ons/WebExtensions/manifest.json/incognito
---

{{AddonSidebar}}

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row" style="width: 30%">Type</th>
      <td>chaîne</td>
    </tr>
    <tr>
      <th scope="row">Obligatoire</th>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">Exemple</th>
      <td>
        <pre class="brush: json">"incognito": "spanning"</pre>
        <pre class="brush: json">"incognito": "split"</pre>
        <pre class="brush: json">"incognito": "not_allowed"</pre>
      </td>
    </tr>
  </tbody>
</table>

Utilisez la clé `incognito` pour contrôler la façon dont l'extension fonctionne avec les fenêtres de navigation privées.

Il s'agit d'une chaîne qui peut prendre l'une des valeurs suivantes:

- "spanning" (la valeur par défaut) : affichera des événements à partir de fenêtres et d'onglets privés et non privés. Fenêtres et onglets obtiendront une propriété `incognito` dans la [`fenêtre`](/fr/docs/Mozilla/Add-ons/WebExtensions/API/windows/Window) ou l'[`onglet`](/fr/docs/Mozilla/Add-ons/WebExtensions/API/tabs/Tab) qui les représente. Cette propriété indique si l'objet est ou non privé :

  ```js
  browser.windows.getLastFocused().then((windowInfo) => {
    console.log(`Window is private: ${windowInfo.incognito}`);
  });
  ```

- "split" : l'extension sera divisée entre des fenêtres privées et non privées. Il existe effectivement deux copies de l'extension en cours d'exécution : l'une ne voit que des fenêtres non privées, l'autre ne voit que des fenêtres privées. Chaque copie a un accès isolé aux APIs Web (par exemple, [`localStorage`](/fr/docs/Web/API/Storage/LocalStorage) n'est pas partagé). Toutefois, l'API des WebExtension [`storage.local`](/fr/docs/Mozilla/Add-ons/WebExtensions/API/storage/local) est partagé. (**Note:** ce paramètre n'est pas supporté par Firefox.)
- "not_allowed" : les onglets privés et les fenêtres sont invisibles pour l'extension.

## Exemple

```json
"incognito": "spanning"
```

```json
"incognito": "split"
```

```json
"incognito": "not_allowed"
```

## Compatibilité des navigateurs

{{Compat}}
