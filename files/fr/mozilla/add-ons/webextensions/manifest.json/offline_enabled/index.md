---
title: offline_enabled
slug: Mozilla/Add-ons/WebExtensions/manifest.json/offline_enabled
tags:
  - Add-ons
  - Deprecated
  - Extensions
  - Non-standard
  - Offline
  - WebExtensions
  - google chrome
translation_of: Mozilla/Add-ons/WebExtensions/manifest.json/offline_enabled
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
      <td><pre class="brush: json">"offline_enabled": true</pre></td>
    </tr>
  </tbody>
</table>

{{Non-standard_Header}}

Si l'application ou l'extension doit fonctionner hors ligne. Lorsque Chrome détecte qu'il est hors ligne, les applications avec ce champ réglé sur true seront mises en surbrillance dans la page Nouvel onglet.

A partir de Chrome 35, les applications (ChromeOS uniquement à partir de 2018) sont supposées activées hors ligne et la valeur par défaut de `"offline_enabled"` est `true` sauf si la permission `"webview"` est demandée.Dans ce cas, la connectivité réseau est supposée nécessaire et `"offline_enabled"` par défaut est `false`.

La valeur `"offline_enabled"` est également utilisée pour déterminer si un contrôle de connectivité réseau sera effectué lors du lancement d'une application en [mode Chrome OS kiosk](https://developer.chrome.com/apps/manifest/kiosk_enabled). Une vérification de la connectivité réseau sera effectuée lorsque les applications ne sont pas activées hors ligne, et le lancement de l'application sera mis en attente jusqu'à ce que l'appareil obtienne la connectivité à Internet.

## Compatibilité du navigateur

{{Compat("webextensions.manifest.offline_enabled")}}
