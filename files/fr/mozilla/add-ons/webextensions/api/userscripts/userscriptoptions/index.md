---
title: UserScripts.UserScriptOptions
slug: Mozilla/Add-ons/WebExtensions/API/userScripts/UserScriptOptions
tags:
  - Add-ons
  - Extensions
  - Firefox
  - Guide
  - Intermediate
  - NeedsExample
  - UserScriptOptions
  - WebExtensions
  - userScripts
translation_of: Mozilla/Add-ons/WebExtensions/API/userScripts/UserScriptOptions
---
{{AddonSidebar}}

L'objet UserScriptOptions représente les scripts de contenu à enregistrer. Sa syntaxe est similaire à celle des options contentScript prises en charge par browser.contentScripts.register. Les différences sont les suivantes :

- il ne prend pas en charge une propriété css (utilisez browser.contentScripts.register pour enregistrer/désenregistrer dynamiquement les feuilles de style)
- Il supporte une propriété optionnelle scriptMetadata (comme un objet JSON simple qui contient certaines propriétés de métadonnées associées aux userScripts enregistrés)

L'objet UserScriptOptions a les propriétés suivantes :

- `allFrames`{{optional_inline}}
  - : Même chose que `all_frames` dans la clé [`content_scripts`](/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts).
- `excludeGlobs`{{optional_inline}}
  - : Même chose que `exclude_globs` dans la clé [`content_scripts`](/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts).
- `excludeMatches`{{optional_inline}}
  - : Même chose que `exclude_matches` dans la clé [`content_scripts`](/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts).
- `includeGlobs`{{optional_inline}}
  - : Même chose que `include_globs` dans la clé [`content_scripts`](/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts).
- `js`{{optional_inline}}
  - : Un ensemble d'objets. Chaque objet a soit une propriété nommée `file`, qui est une URL commençant à l'extension manifest.json et pointant vers un fichier JavaScript à enregistrer, soit une propriété nommée `code`, qui est un code JavaScript à enregistrer.
- `matchAboutBlank`{{optional_inline}}
  - : Même chose que `match_about_blank` dans la clé [`content_scripts`](/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts).
- `matches`
  - : Même chose que `matches` dans la clé [`content_scripts`](/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts).
- `runAt`{{optional_inline}}
  - : Même chose que `run_at` dans la clé [`content_scripts`](/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts).
- `scriptMetadata` {{optional_inline}}
  - : Une valeur de métadonnées de script utilisateur

Sa syntaxe est similaire à celle des options contentScript prises en charge par browser.contentScripts.register.
