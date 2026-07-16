---
title: Mise à jour des extensions pour Firefox 3
slug: Mozilla/Firefox/Releases/3/Updating_extensions
l10n:
  sourceCommit: 886f2641ae90a70858c5e7d0d20959c70ee44d9d
---

Cet article fournit des informations utiles aux développeur·euse·s qui souhaitent mettre à jour leurs extensions afin qu'elles fonctionnent correctement sous Firefox 3.

Avant d'aller plus loin, une astuce utile que nous pouvons vous donner&nbsp;: si la seule modification requise pour votre extension consiste à augmenter la valeur du champ `maxVersion` dans son manifeste d'installation, et que vous hébergez votre extension sur [addons.mozilla.org <sup>(angl.)</sup>](https://addons.mozilla.org/), vous n'avez en réalité pas besoin de téléverser une nouvelle version de votre extension&nbsp;! Utilisez le Panneau de configuration des développeur·euse·s sur AMO pour ajuster la valeur `maxVersion`. Vous évitez ainsi de devoir faire réévaluer votre extension.

## Première étape : mise à jour du manifeste d'installation

La première étape — et, pour la plupart des extensions, la seule opération nécessaire — il s'agit de mettre à jour le fichier [manifeste d'installation <sup>(angl.)</sup>](https://web.archive.org/web/20210421140209/https://developer.mozilla.org/en-US/docs/Archive/Add-ons/Install_Manifests), [`install.rdf` <sup>(angl.)</sup>](https://web.archive.org/web/20160809001138/https://developer.mozilla.org/en-US/Add-ons/Themes/Obsolete/Creating_a_Skin_for_Firefox/install.rdf), pour indiquer la compatibilité avec Firefox 3.

Trouvez la ligne indiquant la version maximale compatible de Firefox (qui, pour Firefox 2, ressemblait probablement à ceci)&nbsp;:

```xml
<em:maxVersion>2.0.*</em:maxVersion>
```

Modifiez-la pour indiquer la compatibilité avec Firefox 3&nbsp;:

```xml
<em:maxVersion>3.0.*</em:maxVersion>
```

Et réinstallez ensuite votre extension.

Notez que Firefox 3 n'a plus besoin d'un «&nbsp;.0&nbsp;» supplémentaire dans son numéro de version, donc au lieu d'utiliser `3.0.0.*`, il ne faut plus qu'indiquer `3.0.*`.

Il y a eu (et il y a probablement encore) un certain nombre de changements d'API qui risquent de casser certaines extensions. Nous travaillons encore à compiler une liste complète de ces changements.

> [!NOTE]
> Si votre extension utilise toujours un script [`Install.js` <sup>(angl.)</sup>](https://web.archive.org/web/20210604075726/https://developer.mozilla.org/en-US/docs/Archive/Install.js) plutôt qu'un [manifeste d'installation <sup>(angl.)</sup>](https://web.archive.org/web/20210421140209/https://developer.mozilla.org/en-US/docs/Archive/Add-ons/Install_Manifests), il vous faut faire la transition vers un manifeste d'installation maintenant. Firefox 3 ne gère plus les scripts `install.js` dans les fichiers XPI.

### Ajout de localisations au manifeste d'installation

Firefox 3 permet d'utiliser de nouvelles propriétés dans le manifeste d'installation pour définir des descriptions localisées. Les anciennes méthodes continuent à fonctionner, mais la nouvelle permet à Firefox de charger les localisations même lorsque le module complémentaire est désactivé ou sur le point d'être installé. Consultez [Localisation des descriptions d'extensions <sup>(angl.)</sup>](https://web.archive.org/web/20210126131244/https://developer.mozilla.org/en-US/docs/Mozilla/Localization/Localizing_extension_descriptions) pour plus de détails.

## Deuxième étape : s'assurer de fournir des mises à jour sécurisées

Si vous hébergez des modules complémentaires vous-mêmes et pas sur un fournisseur d'hébergement sécurisé comme [addons.mozilla.org](https://addons.mozilla.org), vous devez fournir une méthode sécurisée de mise à jour pour vos modules. Pour ce faire, il faut soit héberger vos mises à jour sur un site SSL, ou utiliser des clés cryptographiques pour signer les informations de mise à jour. Consultez [Mises à jour sécurisées <sup>(angl.)</sup>](https://web.archive.org/web/20201031093738/https://developer.mozilla.org/en-US/docs/Archive/Add-ons/Extension_Versioning,_Update_and_Compatibility#securing_updates) pour plus d'informations.

## Troisième étape : s'occuper des changements d'API

Plusieurs API ont changé de manière significative. Les changements les plus importants, qui affectent probablement un grand nombre d'extensions, sont les suivants&nbsp;:

### DOM

Les nœuds provenant de documents externes doivent être clonés à l'aide de {{DOMxRef("Document.importNode()")}} (ou adoptés avec
{{DOMxRef("Document.adoptNode()")}}) avant de pouvoir être insérés dans le document courant. Pour en savoir plus sur les problèmes
de {{DOMxRef("Node.ownerDocument")}}, consultez la [FAQ DOM du W3C <sup>(angl.)</sup>](https://www.w3.org/DOM/faq.html#ownerdoc).

Firefox n'impose actuellement pas cette règle (elle l'a fait pendant un certain temps lors du développement de Firefox 3, mais trop de sites se cassent lorsque cette règle est appliquée). Nous encourageons les développeur·euse·s web à corriger leur code pour suivre cette règle afin d'améliorer la compatibilité future.

### Marque-pages et historique

Si votre extension accède aux marque-pages ou à l'historique d'une quelconque manière, elle doit être substantiellement modifiée pour être compatible avec Firefox 3. Les anciennes API pour accéder à ces informations ont été remplacées par la nouvelle architecture [Places <sup>(angl.)</sup>](https://web.archive.org/web/20210620103113/https://developer.mozilla.org/en-US/docs/Mozilla/Tech/Places). Consultez le [Guide de migration vers Places <sup>(angl.)</sup>](https://web.archive.org/web/20200621121524/https://developer.mozilla.org/en-US/docs/Mozilla/Tech/Places/Places_Developer_Guide) pour des détails sur la mise à jour de vos extensions existantes en utilisant l'API Places.

### Gestionnaire de téléchargement

L'API du gestionnaire de téléchargement a légèrement changé suite à la transition d'un stockage de données RDF vers l'API [Storage <sup>(angl.)</sup>](https://web.archive.org/web/20210401045303/https://developer.mozilla.org/en-US/docs/Mozilla/Tech/XPCOM/Storage). La transition doit être très facile à faire. En outre, l'API permettant d'examiner la progression des téléchargements a été modifiée pour permettre l'existence de plusieurs écouteurs sur le gestionnaire de téléchargement. Consultez `nsIDownloadManager`, `nsIDownloadProgressListener` et [Surveillance de téléchargements <sup>(angl.)</sup>](https://web.archive.org/web/20210516125311/https://developer.mozilla.org/en-US/docs/Archive/Mozilla/Monitoring_downloads) pour plus d'informations.

### Gestionnaire de mots de passe

Si votre extension accède aux informations de connexion des utilisateur·ice·s à l'aide du Gestionnaire de mots de passe, elle doit être mise à jour pour utiliser la nouvelle API du Gestionnaire d'identification.

- L'article [Utiliser nsILoginManager](https://web.archive.org/web/20210530180123/https://developer.mozilla.org/en-US/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsILoginManager/Using_nsILoginManager) fournit des exemples, dont une démonstration d'écriture d'extension fonctionnant à la fois avec le Gestionnaire de mots de passe et le Gestionnaire d'identification, afin qu'elle fonctionne tant avec Firefox 3 que dans les versions précédentes.
- `nsILoginInfo`
- `nsILoginManager`

Il est également possible de ne pas utiliser le stockage du gestionnaire de mots de passe intégré si vous désirez fournir votre propre implémentation de stockage de mots de passe dans vos extensions. Consultez [Création d'un module de stockage du gestionnaire d'identification <sup>(angl.)</sup>](https://web.archive.org/web/20210515154057/https://developer.mozilla.org/en-US/docs/Mozilla/Creating_a_login_manager_storage_module) pour plus de détails.

### Popups (menus, menus contextuels, bulles d'information et panneaux)

Le système de popups XUL a été modifié de manière importante dans Firefox 3. Celui-ci gère les menus principaux, les menus contextuels et les panneaux d'information. Un guide [d'utilisation des popups <sup>(angl.)</sup>](https://web.archive.org/web/20210418010207/https://developer.mozilla.org/en-US/docs/Archive/Mozilla/XUL/PopupGuide) a été créé pour expliquer en détail le fonctionnement du système. Une chose à noter est l'obsolescence de `popup.showPopup` en faveur des nouvelles méthodes `popup.openPopup` et `popup.openPopupAtScreen`.

### Complément automatique

La méthode `handleEnter()` de l'interface `nsIAutoCompleteController` a été modifiée pour accepter un paramètre indiquant si le texte a été sélectionné depuis le popup de complément automatique ou par l'appui sur la touche Entrée par l'utilisateur·ice après avoir saisi le texte.

### DOMParser

- Lorsqu'un objet `DOMParser` est instancié, il hérite du principal du code appelant et des valeurs `documentURI` et `baseURI` de la fenêtre dont le constructeur venait.
- Si l'appelant a des privilèges UniversalXPConnect, il peut fournir des paramètres à `new DOMParser()`. Si moins de trois paramètres sont fournis, les paramètres restants prennent la valeur `null` par défaut.
  - Le premier paramètre est le principal à utiliser&nbsp;; il remplace le principal par défaut normalement hérité.
  - Le second paramètre est la valeur `documentURI` à utiliser.
  - Le troisième paramètre est la valeur `baseURI` à utiliser.

- Si vous initialisez un `DOMParser` à l'aide d'un contrat, comme en appelant `createInstance()`, et que vous n'appelez pas la méthode `init()` de `DOMParser`, toute tentative de démarrer une opération d'analyse crée et initialise automatiquement le `DOMParser` avec un principal à null et des pointeurs `null` pour `documentURI` et `baseURI`.

### Arrêter d'utiliser l'API de chaînes de caractères interne

L'API de chaînes de caractères interne n'est plus exportée&nbsp;; vous devez migrer vers l'API de chaînes de caractères externe. Consultez ces articles pour des informations utiles&nbsp;:

- [Guide des chaînes de caractères externes de Mozilla <sup>(angl.)</sup>](https://web.archive.org/web/20160423162648/https://developer.mozilla.org/en-US/docs/Mozilla/Mozilla_external_string_guide)
- [XPCOM Glue <sup>(angl.)</sup>](https://web.archive.org/web/20210625030032/https://developer.mozilla.org/en-US/docs/Mozilla/Tech/XPCOM/Glue)
- [Migrer des liaisons internes vers des liaisons figées <sup>(angl.)</sup>](https://web.archive.org/web/20210620000937/https://developer.mozilla.org/en-US/docs/Archive/Add-ons/Migrating_from_Internal_Linkage_to_Frozen_Linkage)

### Interfaces supprimées

Les interfaces suivantes ont été retirées de Gecko 1.9, sur lequel se base Firefox 3. Si votre extension utilise l'une ou l'autre d'entre-elles, vous devez mettre à jour votre code&nbsp;:

- `nsIDOMPaintListener`
- `nsIDOMScrollListener`
- `nsIDOMMutationListener`
- `nsIDOMPageTransitionListener`
- `nsICloseAllWindows` (voir le [bogue Firefox 386200 <sup>(angl.)</sup>](https://bugzil.la/386200))

## Quatrième étape : vérifier les changements chrome appropriés

Il y a eu quelques changements dans la disposition du chrome qui peuvent affecter certaines extensions.

### Nouvelles boîtes

Un changement mineur dans le chrome peut nécessiter des changements dans votre code. Un nouveau `vbox` a été ajouté, appelé «&nbsp;browser-bottombox&nbsp;», qui comprend la Barre de recherche et la Barre d'état en bas de la fenêtre de navigation. Bien que ceci n'affecte pas l'apparence de l'affichage, votre extension peut être affectée si elle utilise des overlays chrome relatifs à ces éléments.

Par exemple, si vous faisiez précédemment un overlay chrome avant la Barre d'état, comme ceci&nbsp;:

```xml
<window id="main-window">
  <something insertbefore="status-bar" />
</window>
```

Vous devez à présent le faire comme ceci&nbsp;:

```xml
<vbox id="browser-bottombox">
  <something insertbefore="status-bar" />
</vbox>
```

Ou utilisez la technique suivante pour que votre overlay fonctionne tant avec Firefox 2 que Firefox 3&nbsp;:

```xml
<window id="main-window">
  <vbox id="browser-bottombox" insertbefore="status-bar">
    <something insertbefore="status-bar" />
  <vbox>
</window>
```

### Boîtes modifiées

Les extensions qui tentent de superposer sur la boîte «&nbsp;appcontent&nbsp;» pour faire flotter le chrome au-dessus du contenu du document ne peuvent plus afficher ce matériel. Vous devez mettre à jour votre extension pour utiliser le nouvel élément XUL [`<xul:panel>` <sup>(angl.)</sup>](https://web.archive.org/web/20210301150646/https://developer.mozilla.org/en-US/docs/Archive/Mozilla/XUL/panel). Si vous souhaitez que le panneau ne disparaisse pas automatiquement après un délai, vous pouvez définir l'attribut `noautohide` sur `true`.

## Autres changements

_Ajoutez ici les changements simples que vous avez dû faire à vos extensions pour qu'elles fonctionnent avec Firefox 3._

- `chrome://browser/base/utilityOverlay.js` n'est plus géré pour des raisons de sécurité. Si vous l'utilisiez auparavant, vous devriez passer à `chrome://browser/content/utilityOverlay.js`.
- Les implémentations de `nsIAboutModule` doivent à présent supporter la méthode `getURIFlags`. Consultez [nsIAboutModule.idl <sup>(angl.)</sup>](https://searchfox.org/firefox-main/source/netwerk/protocol/about/nsIAboutModule.idl) pour la documentation. Ceci affecte les extensions qui fournissent de nouvelles URI `about:`. ([Bogue Firefox 337746 <sup>(angl.)</sup>](https://bugzil.la/337746))
- L'élément [`<xul:tabbrowser>` <sup>(angl.)</sup>](https://web.archive.org/web/20210221234616/https://developer.mozilla.org/en-US/docs/Archive/Mozilla/XUL/tabbrowser) ne fait plus partie du «&nbsp;toolkit&nbsp;» ([bogue Firefox 339964 <sup>(angl.)</sup>](https://bugzil.la/339964)). Cela signifie qu'il n'est plus disponible pour les applications XUL et extensions. Il continue cependant à être utilisé dans la fenêtre principale de Firefox (browser.xul).
- Les changements dans les `nsISupports_proxies` et éventuellement aux interfaces liées aux processus doivent être documentés.
- Si vous utilisez des instructions de traitement XML comme `<?xml-stylesheet ?>` dans vos fichiers XUL, tenez compte des changements effectués dans le [bogue Firefox 319654 <sup>(angl.)</sup>](https://bugzil.la/319654)&nbsp;:
  1. Les instructions de traitement XML sont à présent ajoutées au DOM des documents XUL. Cela signifie que {{DOMxRef("Node.firstChild", "document.firstChild")}} n'est plus forcément l'élément racine. Si vous avez besoin de l'élément racine dans votre script, utilisez plutôt {{DOMxRef("document.documentElement")}}.
  2. Les instructions de traitement `<?xml-stylesheet ?>` et `<?xul-overlay ?>` n'ont plus d'effet en dehors du prologue du document.

- `window.addEventListener("load", myFunc, true)` n'est pas déclenché au chargement de contenu web (chargement de page dans le navigateur). Ceci est causé par le [bogue Firefox 296639 <sup>(angl.)</sup>](https://bugzil.la/296639) qui modifie la manière dont les fenêtres internes et externes communiquent. Une solution simple consiste à utiliser `gBrowser.addEventListener("load", myFunc, true)` qui fonctionne également dans Firefox 2.
- `content.window.getSelection()` fournit un objet (qui peut être converti en une chaîne de caractères avec `toString()`), contrairement à l'ancienne `content.document.getSelection()`, à présent dépréciée, qui retourne une chaîne de caractères.
- `event.preventBubble()` avait été dépréciée dans Firefox 2 et a été retirée de Firefox 3. Utilisez {{DOMxRef("event.stopPropagation()")}}, qui fonctionne également dans Firefox 2.
- Les timers initialisés par`setTimeout()` sont à présent bloqués par les fenêtres modales suite à la correction du [bogue Firefox 52209 <sup>(angl.)</sup>](https://bugzil.la/52209). Vous pouvez utiliser `nsITimer` à la place.
- Si votre extension doit permettre à une source non sûre (par exemple un site web) d'accéder au chrome de l'extension, vous devez utiliser le nouveau [paramètre `contentaccessible` <sup>(angl.)</sup>](https://web.archive.org/web/20210623201644/https://developer.mozilla.org/en-US/docs/Mozilla/Chrome_Registration#contentaccessible).
