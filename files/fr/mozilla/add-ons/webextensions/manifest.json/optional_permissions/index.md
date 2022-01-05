---
title: optional_permissions
slug: Mozilla/Add-ons/WebExtensions/manifest.json/optional_permissions
tags:
  - Add-ons
  - WebExtensions
  - manifest.json
  - optional_permissions
translation_of: Mozilla/Add-ons/WebExtensions/manifest.json/optional_permissions
---
{{AddonSidebar}}

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row" style="width: 30%">Type</th>
      <td>Tableau</td>
    </tr>
    <tr>
      <th scope="row">Obligatoire</th>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">Exemple</th>
      <td>
        <pre class="brush: json">
"optional_permissions": [
  "*://developer.mozilla.org/*",
  "webRequest"
]</pre
        >
      </td>
    </tr>
  </tbody>
</table>

Utilisez la clé `optional_permissions` pour lister les permissions que vous souhaitez demander pour l'exécution, une fois que votre extension a été installée.

La clé de [`permissions`](/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) énumère les permissions dont votre extension a besoin  si elle doit être installée. En revanche , `optional_permissions` liste les permissions dont votre extension n'a pas besoin au moment de l'installation, mais qu'il peut être nécessaire de demander pour l'exécution à un moment donné après son installation. Pour demander une permission, utilisez l'API  {{webextapiref("permissions")}} . La demande de permission peut présenter probablement à l'utilisateur une boîte de dialogue lui demandant d'accorder la permission à votre extension.

Pour des conseils sur la conception de votre demande d'autorisations d'exécution, afin de maximiser la probabilité que les utilisateurs les accordent, consultez la section, voir [Demander les permissions à éxécuter](/fr/docs/Mozilla/Add-ons/WebExtensions/demander_les_bonnes_permissions#Demander_les_permissions_à_éxécuter).

La clé peut contenir deux types d'autorisations: les permissions d'hôte et les permissions d'API

## Permissions d'hôte

Ce sont les mêmes que les permissions d'hôte que vous pouvez spécifier dans la clé [`permissions`](/fr/Add-ons/WebExtensions/manifest.json/permissions#Host_permissions).

## Permissions d'API

Vous pouvez inclure l'un des éléments suivants ici, mais pas dans tous les navigateurs : consultez la table de compatibilité pour obtenir des détails spécifiques au navigateur :

- `activeTab`
- `background`
- `bookmarks`
- `browserSettings`
- `clipboardRead`
- `clipboardWrite`
- `contentSettings`
- `contextMenus`
- `cookies`
- `debugger`
- `downloads`
- `downloads.open`
- `find`
- `geolocation`
- `history`
- `idle`
- `management`
- `notifications`
- `pageCapture`
- `privacy`
- `tabHide`
- `tabs`
- `topSites`
- `webNavigation`
- `webRequest`
- `webRequestBlocking`

Notez qu'il s'agit d'un sous-ensemble des permissions API permises dans les [`permissions`](/fr/Add-ons/WebExtensions/manifest.json/permissions#API_permissions).

Dans cet ensemble, les permissions suivantes sont accordées en silence, sans invite de l'utilisateur : `activeTab`, `cookies`, `idle`, `webRequest`, `webRequestBlocking`.

## Exemple

```json
 "optional_permissions": ["*://developer.mozilla.org/*"]
```

Activez l'extension pour demander un accès privilégié aux pages sous developer.mozilla.org.

```json
  "optional_permissions": ["tabs"]
```

Activez l'extension pour demander l'accès aux éléments privilégiés de l'API des onglets.

```json
  "optional_permissions": ["*://developer.mozilla.org/*", "tabs"]
```

Activez l'extension pour demander les deux permissions ci-dessus.

## Comptabilité du navigateur

{{Compat("webextensions.manifest.optional_permissions")}}
