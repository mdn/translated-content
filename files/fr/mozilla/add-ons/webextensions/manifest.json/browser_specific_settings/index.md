---
title: browser_specific_settings
slug: Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings
tags:
  - Add-ons
  - Extensions
  - WebExtensions
  - browser_specific_settings
translation_of: Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings
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
      <td>
        <p>
          Habituellement, non (mais voir aussi
          <a
            href="/fr/Add-ons/WebExtensions/WebExtensions_and_the_Add-on_ID#When_do_you_need_an_Add-on_ID"
            >Quand avec-vous besoin d'une ID Complémentaire</a
          ><a
            href="/fr/Add-ons/WebExtensions/manifest.json/applications#When_do_I_need_the_applications_key"
            >?</a
          >). Obligatoire avant Firefox 48 (desktop) et Firefox pour Android.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Example</th>
      <td>
        <pre class="brush: json;">
"browser_specific_settings": {
  "gecko": {
    "id": "addon@example.com",
    "strict_min_version": "42.0"
  }
}
</pre
        >
      </td>
    </tr>
  </tbody>
</table>

## Description

La clé `browser_specific_settings` contient des clés qui sont spécifiques à certaines applications hôtes.

### Propriétés (Gecko) Firefox

Actuellement, elle contient uniquement une clé, `gecko`, qui est structurée ainsi :

- `id` est l'ID de l'extension. Facultatif à partir de Firefox 48, obligatoire avant Firefox 48. Voir les [WebExtensions et l'ID des extensions](/fr/Add-ons/WebExtensions/WebExtensions_and_the_Add-on_ID) pour voir quand vous devez spécifier un identifiant complémentaire.
- `strict_min_version `: la version minimum de Gecko supportée. Les versions contenant un "\*" ne sont pas valides dans ce domaine. Par défaut, c'est "42a1".
- `strict_max_version` : la version maximum de Gecko supportée. Si la version de Firefox sur laquelle l'extension est en cours d'installation ou d'exécution est au-dessus de cette version, l'extension sera désactivée ou ne sera pas autorisée à être installée. Par défaut, c'est "\*", qui désactive la vérification d'une version maximale.
- `update_url` est lien vers un [manifeste de mise à jour personnalisé](/fr-FR/Add-ons/Install_Manifests#updateURL). Notez que le lien doit commencer par "https". Cette clé consiste à gérer vous-même les mises à jour d'extension (c'est-à-dire pas via AMO).

Vois la liste des [versions Gecko valides](https://addons.mozilla.org/en-US/firefox/pages/appversions/).

#### Format d'ID d'extension

L'ID d'extension doit être l'un des suivants :

- [GUID](https://en.wikipedia.org/wiki/Universally_unique_identifier)
- Une chaîne formatée comme une adresse e-mail : `extensionname@example.org`

Ce dernier format est plus facile à générer et à manipuler. Sachez que l'utilisation d'une véritable adresse e-mail ici peut attirer des spams.

Par exemple :

```json
"id": "extensionname@example.org"
```

```json
"id": "{daf44bf7-a45e-4450-979c-91cf07434c3d}"
```

### Propriétés Microsoft Edge

> **Attention :** L'ajout de propriétés spécifiques à Edge au manifeste a causé une erreur avant Firefox 69 qui peut empêcher l'extension de s'installer.

Microsoft Edge stocke les paramètres spécifiques à son navigateur dans la sous-clé `edge`, qui possède les propriétés suivantes :

- `browser_action_next_to_addressbar`

  - : Propriété booléenne qui contrôle le placement de l'[action du navigateur](/fr/docs/Mozilla/Add-ons/WebExtensions/Browser_actions).

    - `true` est équivalent à la définition [`browser_action.default_area`](/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action#Syntax) à `navbar`.
    - `false` is équivalent à la définition [`browser_action.default_area`](/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action#Syntax) à `menupanel`.

## Exemples

Exemple avec toutes les clés possibles. Notez que vous n'incluez normalement ni une version `strict_max_version` ni une clé `update_url`.

```json
"browser_specific_settings": {
  "gecko": {
    "id": "addon@example.com",
    "strict_min_version": "42.0",
    "strict_max_version": "50.*",
    "update_url": "https://example.com/updates.json"
  },
  "edge": {
    "browser_action_next_to_addressbar": true
  }
}
```

## Compatibilité des navigateurs

{{Compat("webextensions.manifest.browser_specific_settings")}}
