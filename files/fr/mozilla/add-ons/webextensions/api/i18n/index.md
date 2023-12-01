---
title: i18n
slug: Mozilla/Add-ons/WebExtensions/API/i18n
---

{{AddonSidebar}}

Fonctions permettant d'internationaliser votre extension. Vous pouvez utiliser ces API pour obtenir des chaînes localisées à partir de fichiers locaux conditionnés avec votre extension, connaître la langue actuelle du navigateur et en connaître la valeur de son [En-tete "Accept-Language"](/fr/docs/Web/HTTP/Content_negotiation#The_Accept-Language_header).

Pour plus de détails sur l'utilisation de i18n pour votre extension, voir :

- [Internationalization](/fr/Add-ons/WebExtensions/Internationalization): un guide d'utilisation du système WebExtension i18n.
- [Référence de message spécifique aux paramètres régionaux](/fr/Add-ons/WebExtensions/API/i18n/Locale-Specific_Message_reference)&nbsp;: Les extensions fournissent des chaînes de caractères locales dans des fichiers appelés `messages.json`. Cette page décrit le format de `messages.json`.

## Types

- {{WebExtAPIRef("i18n.LanguageCode")}}
  - : Une [balise de langue](https://www.w3.org/Protocols/rfc2616/rfc2616-sec3.html#sec3.10) telle que `"en-US"` ou "`fr`".

## Fonctions

- {{WebExtAPIRef("i18n.getAcceptLanguages()")}}
  - : Obtient les [accept-languages](/fr/docs/Web/HTTP/Content_negotiation#The_Accept-Language_header) du navigateur. Ceci est différent des paramètres régionaux utilisés par le navigateur. Pour obtenir les paramètres régionaux, utilisez {{WebExtAPIRef('i18n.getUILanguage')}}.
- {{WebExtAPIRef("i18n.getMessage()")}}
  - : Obtient la chaîne localisée pour le message spécifié.
- {{WebExtAPIRef("i18n.getUILanguage()")}}
  - : Obtient la langue de l'interface utilisateur du navigateur. Ceci est différent de {{WebExtAPIRef('i18n.getAcceptLanguages')}} qui renvoie les langues utilisateur préférées.
- {{WebExtAPIRef("i18n.detectLanguage()")}}
  - : Détecte la langue du texte fourni en utilisant le [détecteur de langue compact](https://github.com/CLD2Owners/cld2).

## Compatibilité des navigateurs

{{Compat}}

{{WebExtExamples("h2")}}

> **Note :**
> Cette API est basée sur l'API Chromium [`chrome.i18n`](https://developer.chrome.com/extensions/i18n). Cette documentation est dérivée de [`i18n.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/i18n.json) dans le code de Chromium.
>
> Les données de compatibilité relatives à Microsoft Edge sont fournies par Microsoft Corporation et incluses ici sous la licence Creative Commons Attribution 3.0 pour les États-Unis.
