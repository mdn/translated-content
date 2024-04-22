---
title: permissions
slug: Mozilla/Add-ons/WebExtensions/manifest.json/permissions
---

{{AddonSidebar}}

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row" style="width: 30%">Type</th>
      <td><code>Tableau</code></td>
    </tr>
    <tr>
      <th scope="row">Obligatoire</th>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">Exemple</th>
      <td>
        <pre class="brush: json">
"permissions": [
  "*://developer.mozilla.org/*",
  "webRequest"
]</pre
        >
      </td>
    </tr>
  </tbody>
</table>

Utilisez la clé `permissions` pour demander des pouvoirs spéciaux pour votre extension. Cette clé est un ensemble de chaînes, et chaque chaîne est une demande d'autorisation.

Si vous demandez des autorisations avec cette clé, le navigateur peut informer l'utilisateur, au moment de l'installation, que l'extension demande certains privilèges, et lui demande de confirmer qu'il est d'accord. Le navigateur peut également permettre à l'utilisateur d'inspecter les privilèges d'une extension après l'installation.

Comme la demande d'octroi de privilèges peut avoir un impact sur la volonté des utilisateurs d'installer votre extension, la demande de privilèges mérite une attention particulière. Par exemple, vous voulez éviter de demander des permissions inutiles et vous voudrez peut-être fournir des informations sur la raison pour laquelle vous demandez des permissions dans la description du magasin de votre extension. Vous trouverez plus d'informations sur les questions que vous devez prendre en compte dans l'article [Demander les bonnes permissions](/fr/Add-ons/WebExtensions/Request_the_right_permissions).

La clé peut contenir trois types d'autorisations:

- Les permissions d'hôte
- Les permissions API
- La permission activeTab

## Les permissions d'hôte

Les permissions d'hôte sont spécifiées comme [modèles de correspondance](/fr/docs/Mozilla/Add-ons/WebExtensions/Match_patterns), et chaque modèle identifie un groupe d'URL pour lequel l'extension demande des privilèges supplémentaires. Par exemple, une autorisation d'hôte pourrait être `"*://developer.mozilla.org/*"`.

Les privilèges supplémentaires incluent :

- [XMLHttpRequest](/fr/docs/Web/API/XMLHttpRequest) et l'accès [fetch](/fr/docs/Web/API/Fetch_API) à ces origines sans restrictions d'origine croisée (même pour les demandes faites à partir de scripts de contenu)
- La possibilité d'injecter des scripts par programme (à l'aide de [tabs.executeScript](/fr/docs/Mozilla/Add-ons/WebExtensions/API/tabs/executeScript)) dans les pages issues de ces origines
- La possibilité de recevoir des événements de l'API [webRequest](/fr/docs/Mozilla/Add-ons/WebExtensions/API/webRequest) pour ces hôtes
- La possibilité d'accéder aux cookies de cet hôte à l'aide de l'API [cookies](/fr/Add-ons/WebExtensions/API/cookies), tant que la permission de cet API est également incluse.
- Contourne la protection de suivi si l'hôte est un domaine complet sans caractères génériques. Ne fonctionne pas avec \<all_urls>.

Dans Firefox, à partir de la version 56, les extensions reçoivent automatiquement les permissions d'hôte pour leur propre origine, qui se présentent sous la forme :

```
moz-extension://60a20a9b-1ad4-af49-9b6c-c64c98c37920/
```

Où `60a20a9b-1ad4-af49-9b6c-c64c98c37920` est l'ID interne de l'extension. L'extension peut obtenir cette URL par programmation en appelant [extension.getURL()](/fr/Add-ons/WebExtensions/API/extension/getURL):

```js
browser.extension.getURL("");
// moz-extension://60a20a9b-1ad4-af49-9b6c-c64c98c37920/
```

## Les permissions API

Les autorisations API sont spécifiées comme des mots-clés, et chaque mot clé nomme une [API WebExtension](/fr/docs/) que l'extension souhaite utiliser.

Les mots clés suivants sont actuellement disponibles:

- `activeTab`
- `alarms`
- `background`
- `bookmarks`
- `browserSettings`
- `browsingData`
- `clipboardRead`
- `clipboardWrite`
- `contentSettings`
- `contextMenus`
- `contextualIdentities`
- `cookies`
- `debugger`
- `dns`
- `downloads`
- `downloads.open`
- `find`
- `geolocation`
- `history`
- `identity`
- `idle`
- `management`
- `menus`
- `menus.overrideContext`
- `nativeMessaging`
- `notifications`
- `pageCapture`
- `pkcs11`
- `privacy`
- `proxy`
- `search`
- `sessions`
- `storage`
- `tabHide`
- `tabs`
- `theme`
- `topSites`
- `unlimitedStorage`
- `webNavigation`
- `webRequest`
- `webRequestBlocking`

Dans la plupart des cas, la permission accorde uniquement l'accès à l'API, avec les exceptions suivantes :

- `tabs` vous permet d'accéder aux [parties privilégiées des API de l'onglet](/fr/Add-ons/WebExtensions/API/tabs) : `Tab.url`, `Tab.title`, et `Tab.faviconUrl`. Dans Firefox, vous avez également besoin de `tabs` si vous souhaitez inclure `url` dans le paramètre `queryInfo` dans [`tabs.query()`](/fr/docs/Mozilla/Add-ons/WebExtensions/API/tabs/query). Le reste de l'API `tabs` peut être utilisé sans demander aucune permission.
- `webRequestBlocking` vous permet d'utiliser l'argument "blocage", afin que vous puissiez [modifier et annuler les requêtes](/fr/Add-ons/WebExtensions/API/WebRequest).
- `downloads.open` vous permet d'utiliser l'API {{WebExtAPIRef("downloads.open()")}}.
- `tabHide` vous permet d'utiliser l'API {{WebExtAPIRef("tabs.hide()")}}.

## Permission activeTab

Cette autorisation est spécifiée comme " `activeTab` " (_onglet actif_). Si une extension possède la permission `activeTab` , lorsque l'utilisateur interagit avec l'extension, celle-ci reçoit des privilèges supplémentaires uniquement pour l'onglet actif.

"L'interaction utilisateur" comprend :

- L'utilisateur clique sur l'action du navigateur de l'extension ou sur l'action de la page
- L'utilisateur sélectionne un élément de son menu contextuel
- L'utilisateur active un raccourci clavier défini par l'extension

Les privilèges supplémentaires sont les suivants :

- La capacité d'injecter du JavaScript ou du CSS dans l'onglet par programme, en utilisant [`browser.tabs.executeScript`](/fr/Add-ons/WebExtensions/API/tabs/executeScript) et [`browser.tabs.insertCSS`](/fr/Add-ons/WebExtensions/API/tabs/insertCSS)
- L'accès aux parties privilégiées des onglets de l'API pour l'onglet actuel : Tab.url, Tab.title et Tab.faviconUrl.

L'objectif de cette permission est de permettre aux extensions de réaliser une utilisation courante, sans avoir à leur accorder de permissions très puissantes. Beaucoup d'extensions veulent "faire quelque chose à la page courante quand l'utilisateur le demande". Par exemple, considérez une extension qui veut exécuter un script dans la page courante quand l'utilisateur clique sur une action de navigateur. Si la permission `activeTab` n'existait pas, l'extension devrait demander une permission d'hôte \<all_urls>. Mais cela donnerait à l'extension plus de puissance que nécessaire : elle pourrait désormais exécuter des scripts dans n'importe quel onglet, à tout moment, plutôt que simplement dans l'onglet actif et juste en réponse à une action de l'utilisateur.

Notez que vous ne pouvez accéder qu'à l'onglet ou aux données qui s'y trouvaient au moment de l'interaction de l'utilisateur (par exemple le clic). Lorsque l'onglet actif s'éloigne, par exemple en raison d'un chargement terminé ou d'un autre événement, l'autorisation ne vous donne plus accès à l'onglet.

Habituellement, l'onglet qui est accordé à `activeTab` est juste l'onglet actuellement actif, sauf dans un cas. L'API [`menus`](/fr/Add-ons/WebExtensions/API/menus) permet à une extension de créer un élément de menu qui s'affiche lorsque le contexte utilisateur clique sur un onglet (c'est-à-dire sur l'élément de l'onglet qui permet à l'utilisateur de passer d'un onglet à un autre). Si l'utilisateur clique sur un tel élément, la permission `activeTab` est accordée pour l'onglet sur lequel l'utilisateur a cliqué, même s'il ne s'agit pas de l'onglet actuellement actif (A partir de Firefox 63, [bug Firefox 1446956](https://bugzil.la/1446956)).

## Accès au presse-papiers

Il existe deux permissions qui permettent aux extensions d'interagir avec le Presse-papiers :

- `clipboardWrite`: écrivez dans le presse-papiers à l'aide de {{DOMxRef("Clipboard.write()")}}, {{DOMxRef("Clipboard.writeText()")}}, `document.execCommand("copy")` ou `document.execCommand("cut")`
- `clipboardRead`: lisez le presse-papiers à l'aide de {{DOMxRef("Clipboard.read()")}}, {{DOMxRef("Clipboard.readText()")}} ou `document.execCommand("paste")`

Voir [Intérargir avec le presse-papiers](/fr/docs/Mozilla/Add-ons/WebExtensions/Interact_with_the_clipboard) pour tous les détails de ce sujet.

## Stockage illimité

La permission `unlimitedStorage` :

- permet aux extensions de dépasser tout quota imposé par l'API {{WebExtAPIRef("storage.local")}}
- dans Firefox, permet aux extensions de créer une base de données [bases de données Indexed DB "persistante"](/fr/docs/Web/API/API_IndexedDB/Browser_storage_limits_and_eviction_criteria#Les_différents_types_de_stockage_des_données), sans que le navigateur ne demande à l'utilisateur la permission au moment de la création de la base.

## Exemple

```json
"permissions": ["*://developer.mozilla.org/*"]
```

Demande d'accès privilégié aux pages sous developer.mozilla.org.

```json
"permissions": ["tabs"]
```

Demande d'accès aux éléments privilégiés de l'API `tabs.`

```json
"permissions": ["*://developer.mozilla.org/*", "tabs"]
```

Demande des deux permissions ci-dessus.

## Compatibilité des navigateurs

{{Compat}}
