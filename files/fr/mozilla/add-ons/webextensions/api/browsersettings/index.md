---
title: browserSettings
slug: Mozilla/Add-ons/WebExtensions/API/browserSettings
tags:
  - API
  - Add-ons
  - Extensions
  - Non-standard
  - Reference
  - WebExtensions
  - browserSettings
translation_of: Mozilla/Add-ons/WebExtensions/API/browserSettings
---
{{AddonSidebar}}Permet à une extension de modifier certaines paramètres globaux du navigateur. Chaque propriété de cette API est un objet {{WebExtAPIRef("types.BrowserSetting", "BrowserSetting")}}, fournissant la possibilité de modifier un paramètre particulier.Parce que ce sont les paramètres globaux, il est possible d'étendre les conflits des extensions. voir la documentation de [`BrowserSetting.set()`](/fr/Add-ons/WebExtensions/API/types/BrowserSetting/set) pour plus détails sur la façon dont les conflits sont traités.

Pour utiliser cette API, vous devez avoir la [permission](/fr/Add-ons/WebExtensions/manifest.json/permissions) "browserSettings".

## Propriétés

- {{WebExtAPIRef("browserSettings.allowPopupsForUserEvents")}}
  - : Déterminer si le code exécuté dans les pages Web peut afficher les fenêtres contextuelles en réponse aux événements utilisateur.
- {{WebExtAPIRef("browserSettings.cacheEnabled")}}
  - : Déterminer si le cache du navigateur est activé ou pas.
- {{WebExtAPIRef("browserSettings.closeTabsByDoubleClick")}}
  - : Détermine si l'onglet sélectionné peut être fermé en double-cliquant
- {{WebExtAPIRef("browserSettings.contextMenuShowEvent")}}
  - : Détermine l'événement de souris qui déclenche un menu contextuel.
- {{WebExtAPIRef("browserSettings.ftpProtocolEnabled")}}
  - : Détermine si le protocole FTP est activé.
- {{WebExtAPIRef("browserSettings.homepageOverride")}}
  - : Lire la valeur de la page d'accueil du navigateur.
- {{WebExtAPIRef("browserSettings.imageAnimationBehavior")}}
  - : Détermine comment le navigateur traite les images animées.
- {{WebExtAPIRef("browserSettings.newTabPageOverride")}}
  - : Lire la valeur de la nouvelle page de l'onglet du navigateur.
- {{WebExtAPIRef("browserSettings.newTabPosition")}}
  - : Contrôle la position des onglets nouvellement ouverts par rapport aux onglets déjà ouverts.
- {{WebExtAPIRef("browserSettings.openBookmarksInNewTabs")}}
  - : Détermine si les signets sont ouverts dans l'onglet actuel ou dans un nouvel onglet.
- {{WebExtAPIRef("browserSettings.openSearchResultsInNewTabs")}}
  - : Détermine si les résultats de recherche sont ouverts dans l'onglet actuel ou dans un nouvel onglet.
- {{WebExtAPIRef("browserSettings.openUrlbarResultsInNewTabs")}}
  - : Détermine si les suggestions de saisie semi-automatique de la barre d'adresse sont ouvertes dans l'onglet actuel ou dans un nouvel onglet.
- {{WebExtAPIRef("browserSettings.overrideDocumentColors")}}
  - : Contrôle si les couleurs choisies par l'utilisateur remplacent les couleurs de la page.
- {{WebExtAPIRef("browserSettings.useDocumentFonts")}}
  - : Contrôle si le navigateur utilisera les polices spécifiées par une page Web ou n'utilisera que des polices intégrées.
- {{WebExtAPIRef("browserSettings.webNotificationsDisabled")}}
  - : Empêche les sites Web d'afficher des notifications à l'aide de la web API  [`Notification`](/fr/docs/Web/API/notification).
- {{WebExtAPIRef("browserSettings.zoomFullPage")}}
  - : Contrôle si le zoom est appliqué à la page entière ou seulement au texte.
- {{WebExtAPIRef("browserSettings.zoomSiteSpecific")}}
  - : Contrôle si le zoom est appliqué sur un modèle par-site ou par-onglet. Si {{WebExtAPIRef("privacy.websites")}}`.resistFingerprinting` est à vrai, ce réglage n'a aucun effet et le modèle de zoom appliqué reste par-onglet.

## Compatibilité du navigateur

{{Compat("webextensions.api.browserSettings")}}

{{WebExtExamples("h2")}}
