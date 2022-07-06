---
title: browserSettings.proxyConfig
slug: Mozilla/Add-ons/WebExtensions/API/proxy/settings
tags:
  - API
  - Add-ons
  - Extensions
  - Property
  - Reference
  - WebExtensions
  - browserSettings
  - proxyConfig
translation_of: Mozilla/Add-ons/WebExtensions/API/proxy/settings
original_slug: Mozilla/Add-ons/WebExtensions/API/browserSettings/proxyConfig
---
{{AddonSidebar()}}

Un objet {{WebExtAPIRef("types.BrowserSetting", "BrowserSetting")}} qui peut être utilisé pour modifier les paramètres de proxy du navigateur.

> **Note :** La possibilité de modifier les paramètres de proxy nécessite un accès à une fenêtre privée car les paramètres de proxy affectent à la fois les fenêtres privées et non privées. Par conséquent, si une extension n'a pas reçu l'autorisation de fenêtre privée, les appels à `proxy.settings.set()` lanceront une exception.

La valeur sous-jacente est un objet avec les propriétés énumérées ci-dessous.

Lors de la définition de cet objet, toutes les propriétés sont facultatives. Notez que les propriétés omises seront réinitialisées à leur valeur par défaut.

- `autoConfigUrl`{{optional_inline}}
  - : `string`. Une URL à utiliser pour configurer le proxy.
- `autoLogin`{{optional_inline}}
  - : `boolean`. Ne pas demander l'authentification si le mot de passe est enregistré. Par défaut à `false`.
- `ftp`{{optional_inline}}
  - : `string`. L'adresse du proxy FTP. Peut inclure un port.
- `http`{{optional_inline}}
  - : `string`. L'adresse du proxy HTTP. Peut inclure un port.
- `httpProxyAll`{{optional_inline}}
  - : `boolean`. Utilisez le serveur proxy HTTP pour tous les protocoles. Par défaut à `false`.
- `passthrough`{{optional_inline}}
  - : `string`. Une liste d'hôtes séparés par des virgules qui ne doivent pas être mandatés. La valeur par défaut est "localhost, 127.0.0.1".
- `proxyDNS`{{optional_inline}}
  - : `boolean`. DNS proxy lors de l'utilisation de SOCKS5. Par défaut à `false`.
- `proxyType`{{optional_inline}}
  - : `string`. Le type de proxy à utiliser. Cela peut prendre l'une des valeurs suivantes : "none", "autoDetect", "system", "manual", "autoConfig". Par défaut à "system".
- `socks`{{optional_inline}}
  - : `string`. L'adresse du proxy SOCKS. Peut inclure un port.
- `socksVersion`{{optional_inline}}
  - : `integer`. La version du proxy SOCKS. Peut être 4 ou 5. Par défaut à 5.
- `ssl`{{optional_inline}}
  - : `string`. L'adresse du proxy SSL. Peut inclure un port.

## Exemples

```js
let proxySettings = {
  proxyType: "manual",
  http: "http://proxy.org:8080",
  socksVersion: 4,
  passthrough: ".example.org"
};

browser.proxy.settings.set({value: proxySettings});
```

{{WebExtExamples}}

## Compatibilité du navigateur

{{Compat("webextensions.api.proxy.settings", 10)}}
