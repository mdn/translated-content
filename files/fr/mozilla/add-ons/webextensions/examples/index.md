---
title: Exemples de WebExtensions
slug: Mozilla/Add-ons/WebExtensions/Examples
tags:
  - Interface
  - WebExtensions
translation_of: Mozilla/Add-ons/WebExtensions/Examples
original_slug: Mozilla/Add-ons/WebExtensions/Exemples
---
{{AddonSidebar}}

Pour illustrer la manière d'utiliser les API WebExtension, nous disposons d'un répertoire d'exemples d'extensions sur le site <https://github.com/mdn/webextensions-examples>. Cet article décrit comment exécuter ces exemples et énumère les exemples ainsi que les API WebExtension qu'ils illustrent.

Ces exemples fonctionnent dans Firefox Nightly : la plupart travaillent dans les versions antérieures de Firefox, mais vérifiez la version minimum [strict_min_version](/fr/Add-ons/WebExtensions/manifest.json/applications) dans le fichier manifest.json de l'extension pour en être sur.

> **Attention :** Certains exemples ne fonctionnent que sur des domaines ou des pages spécifiques. Les détails des restrictions éventuelles sont fournis dans le fichier "readme" de chaque exemple. Aucun des exemples ne fonctionne par défaut dans les fenêtres de navigation privée, voir [Extensions dans la navigation privée](https://support.mozilla.org/en-US/kb/extensions-private-browsing#w_enabling-or-disabling-extensions-in-private-windows) pour plus de détails.

Pour essayer ces exemples, clonez ensuite le dépôt :

1.  Charger l'extension à partir de son dossier source en utilisant la fonction [Charger temporairement l'extension](/fr/Add-ons/WebExtensions/Temporary_Installation_in_Firefox). L'extension reste chargée jusqu'à ce que vous redémarriez Firefox.
2.  Couvrir le dossier source de l'extension en ligne de commande et utiliser le  [web-ext](/fr/Add-ons/WebExtensions/Getting_started_with_web-ext) pour exécuter l'extension. L'extension reste chargée jusqu'à ce que vous redémarriez Firefox.
3.  Dans Firefox utilisez **File** > **Open File** et trouvez l'exemple dans le dossier de  [`build`](https://github.com/mdn/webextensions-examples/tree/master/build). Le dossier `build` contient les versions construites et signées de tous les exemples. L'exemple est ainsi installé de façon permanente.

> **Attention :** Veuillez ne pas soumettre ces exemples de WebExtension à AMO (addons.mozilla.org), vous n'avez pas besoin de signer l'add-on pour exécuter les exemples de WebExtension. Il suffit de suivre les étapes ci-dessus.

Si vous souhaitez contribuer au dépôt, [envoyez-nous une demande](https://github.com/mdn/webextensions-examples/blob/master/CONTRIBUTING.md)

{{WebExtAllExamples}}
