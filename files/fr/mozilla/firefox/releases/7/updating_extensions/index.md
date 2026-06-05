---
title: Mise à jour des extensions pour Firefox 7
slug: Mozilla/Firefox/Releases/7/Updating_extensions
l10n:
  sourceCommit: 2591a9b59de88401a2ef0fb7d0b8d0281e3f5376
---

Cet article offre des conseils aux développeur·euse·s d'extensions qui souhaitent mettre à jour leurs extensions pour qu'elles fonctionnent dans Firefox 7. Heureusement, la plupart des changements sont relativement mineurs dans cette version, et peu d'extensions devraient nécessiter des modifications importantes pour fonctionner dans Firefox 7.

> [!NOTE]
> Pour une liste complète des changements liés aux développeur·euse·s dans Firefox 7, voir [Firefox 7 pour les développeuses et développeurs](/fr/docs/Mozilla/Firefox/Releases/7).

Comme toujours, vous devez [recompiler tous les composants binaires <sup>(angl.)</sup>](https://web.archive.org/web/20210119071646/https://developer.mozilla.org/en-US/docs/Mozilla/Developer_guide/Interface_Compatibility#binary_interfaces) pour les rendre compatibles avec Firefox 7.

## Changements XPCOM affectant la compatibilité

La plupart des changements dans cette version sont des suppressions d'interfaces XPCOM, ou des suppressions d'API spécifiques et obsolètes des interfaces.

### Interfaces supprimées

Les interfaces suivantes ont été supprimées, car elles n'étaient plus indispensables&nbsp;:

- `nsIDOM3Node`
- `nsIDOM3TypeInfo`
- `schemaTypeInfo`
- `nsIDOMNSDocument`
- `nsIDOMDocumentStyle`

Vous pouvez obtenir une liste complète des interfaces supprimées dans la section [Interfaces supprimées](/fr/docs/Mozilla/Firefox/Releases/7#removed_interfaces) de [Firefox 7 pour les développeuses et développeurs](/fr/docs/Mozilla/Firefox/Releases/7).

### Changements des méthodes

Certaines interfaces ont des méthodes qui ont été modifiées&nbsp;:

- `nsINavHistoryObserver` et `nsINavBookmarkObserver`
  - : Ces interfaces ont été modifiées pour mieux prendre en charge Firefox Sync en ajoutant un nouveau paramètre GUID à plusieurs de leurs méthodes. Le code basé sur JavaScript ne doit pas nécessiter de modifications, car il s'agit simplement de l'ajout d'un nouveau paramètre optionnel. Cependant, les composants binaires doivent être mis à jour pour prendre en compte le nouveau paramètre.
- `nsIDOMFile`
  - : Un certain nombre de méthodes non standard ont été supprimées de cette interface. Cela affecte les méthodes `File.getDataAsUrl()` et `File.getAsBinary()` de l'objet {{DOMxRef("File")}}. Cependant, cette fonctionnalité peut désormais être trouvée dans l'objet standard {{DOMxRef("FileReader")}}.

## Autres changements notables

Ces changements n'affectent pas la compatibilité (nous ne plaisantions pas lorsque nous avons dit qu'il n'y avait pas beaucoup de changements qui le faisaient dans cette version), mais ils ajoutent des capacités faciles à exploiter qui pourraient vous être particulièrement utiles.

### Déchargement des modules de code JavaScript

La nouvelle méthode `Components.utils.unload()` vous permet de décharger les modules de code JavaScript précédemment chargés en appelant `Components.utils.load()`. Cela peut être particulièrement utile avec les extensions sans redémarrage (auto-amorcées), afin de pouvoir décharger une ancienne version d'un module de code lorsqu'une nouvelle version de votre extension est installée.

### Préférences embarquées

Vous pouvez désormais avoir des [options de préférences embarquées <sup>(angl.)</sup>](https://web.archive.org/web/20210417084958/https://developer.mozilla.org/en-US/docs/Archive/Add-ons/Inline_Options) dans la fenêtre du gestionnaire de modules complémentaires, ce qui permet aux utilisateur·ice·s de configurer votre module complémentaire sans avoir à ouvrir une boîte de dialogue de préférences séparée. Il y a des limites à ce que les types de contrôles de configuration peuvent être fournis, mais cela reste très utile — de plus, cela fonctionne pour les [extensions sans redémarrage (auto-amorcées) <sup>(angl.)</sup>](https://web.archive.org/web/20210519000929/https://developer.mozilla.org/en-US/docs/Archive/Add-ons/Bootstrapped_extensions).

## Voir aussi

- [Firefox 7 pour les développeuses et développeurs](/fr/docs/Mozilla/Firefox/Releases/7)
- [Blog des modules complémentaires&nbsp;: compatibilité des modules complémentaires avec Firefox 7 <sup>(angl.)</sup>](https://blog.mozilla.org/addons/2011/07/19/firefox-7-compat-looking-to-8/)
- [Changements XPCOM dans Gecko 2.0 <sup>(angl.)</sup>](https://web.archive.org/web/20210514105748/https://developer.mozilla.org/en-US/docs/Mozilla/Tech/XPCOM/Guide/Changes_in_Gecko_2.0)
