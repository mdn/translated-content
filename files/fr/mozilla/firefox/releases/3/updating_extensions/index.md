---
title: Mise à jour des extensions pour Firefox 3
slug: Mozilla/Firefox/Releases/3/Updating_extensions
tags:
  - Firefox 3
translation_of: Mozilla/Firefox/Releases/3/Updating_extensions
original_slug: Mise_à_jour_des_extensions_pour_Firefox_3
---
1.  Notes de versions pour développeurs

    1.  [Notes de versions pour développeurs](/fr/docs/Mozilla/Firefox/Releases)

2.  Modules complémentaires

    1.  [WebExtensions](/fr/Add-ons/WebExtensions)
    2.  [Thèmes](/fr/Add-ons/Themes)

3.  Fonctionnement interne de Firefox

    1.  [Le projet Mozilla](/fr/docs/Mozilla/)
    2.  [Gecko](/fr/docs/Mozilla/Gecko)
    3.  [Mode « headless »](/fr/docs/Mozilla/Firefox/Headless_mode)
    4.  [Modules de code Javascript](/fr/docs/Mozilla/JavaScript_code_modules)
    5.  [JS-ctypes](/fr/docs/Mozilla/js-ctypes)
    6.  [Le projet MathML](/fr/docs/Mozilla/MathML_Project)
    7.  [MFBT](/fr/docs/Mozilla/MFBT)
    8.  [Les projets Mozilla](/fr/docs/Mozilla/Projects)
    9.  [Le système de préférences](/fr/docs/Mozilla/Preferences)
    10. [Connexions WebIDL](/fr/docs/Mozilla/WebIDL_bindings)
    11. [XPCOM](/fr/docs/Mozilla/Tech/XPCOM)
    12. [XUL](/fr/docs/Mozilla/Tech/XUL)

4.  Développer et contribuer

    1.  [Instructions de compilation](/fr/docs/Mozilla/Developer_guide/Build_Instructions)
    2.  [Configuration des options de compilation](/fr/docs/Mozilla/Developer_guide/Build_Instructions/Configuring_Build_Options)
    3.  [Fonctionnement de la compilation](/fr/docs/Mozilla/Developer_guide/Build_Instructions/How_Mozilla_s_build_system_works)
    4.  [Code source de Mozilla](/fr/docs/Mozilla/Developer_guide/Source_Code/Mercurial)
    5.  [Localisation](/fr/docs/Mozilla/Localization)
    6.  [Mercurial](/fr/docs/Mozilla/Mercurial)
    7.  [Assurance qualité](/fr/docs/Mozilla/QA)
    8.  [Utilisation de code Mozilla dans d'autres projets](/fr/docs/Mozilla/Using_Mozilla_code_in_other_projects)

Cet article fournit des informations qui seront utiles pour les développeurs désirant mettre à jour leurs extensions pour qu'elles fonctionnent correctement avec Firefox 3.

Avant d'aller plus loin, voici une indication utile : si la seule modification dont votre extension a besoin est une mise à jour du champ `maxVersion` dans son manifeste d'installation, et que celle-ci est hébergée sur [addons.mozilla.org](https://addons.mozilla.org), il n'est pas vraiment nécessaire de renvoyer une nouvelle version de votre extension ! Utilisez simplement le Developer Control Panel sur AMO pour ajuster la valeur de `maxVersion`. Cela vous évitera également la revérification de votre extension.

### Première étape : mise à jour du manifeste d'installation

La première étape — et pour la plupart des extensions la seule qui sera nécessaire — est de mettre à jour le fichier de [manifeste d'installation](/fr/Manifestes_d'installation), `install.rdf`, pour indiquer sa compatibilité avec Firefox 3.

Trouvez simplement la ligne indiquant la version maximale compatible de Firefox (qui, pour Firefox 2, ressemblait probablement à ceci) :

     <em:maxVersion>2.0.*</em:maxVersion>

Modifiez-la pour indiquer la compatibilité avec Firefox 3 :

     <em:maxVersion>3.0.*</em:maxVersion>

Et réinstallez ensuite votre extension.

Notez que Firefox 3 n'a plus besoin d'un « .0 » supplémentaire dans son numéro de version, donc au lieu d'utiliser « 3.0.0.\* », il ne faut plus indiquer que « 3.0.\* ».

> **Note :** Notez qu'à ce point, il faut s'attendre à d'autres changements dans Firefox 3. Ceux-ci peuvent poser des problèmes à certaines extensions, il faut donc éviter de publier une extension avec la valeur `3.0.0.*` pour `maxVersion` avant que la RC de Firefox 3 soit disponible. Durant la pariode beta de Firefox 3, il convient d'utiliser `3.0b5` comme valeur de `maxVersion`.

Il y a eu (et il y aura encore) un certain nombre de changements dans les API qui poseront probablement des problèmes à certaines. Nous sommes encore en train d'établir une liste complète de ces changements.

> **Note :** Si votre extension utilise toujours un script [`Install.js`](\"fr/Install.js\") plutôt qu'un [manifeste d'installation](\"fr/Manifestes_d\'installation\"), il vous faudra faire la transition vers un manifeste d'installation maintenant. Firefox 3 ne gère plus les scripts `install.js` dans les fichiers XPI.

#### Ajout de localisations au manifeste d'installation

Firefox 3 permet d'utiliser de nouvelles propriétés dans le manifeste d'installation pour spécifier des descriptions localisées. Les anciennes méthodes continuent à fonctionner, mais la nouvelle permet à Firefox de charger les localisations même lorsque le module complémentaire est désactivé ou sur le point d'être installé. Consultez [Localisation des descriptions d'extensions](/fr/Localisation_des_descriptions_d'extensions) pour plus de détails.

### Deuxième étape : s'assurer de fournir des mises à jour sécurisées

Si vous hébergez des modules complémentaires vous-mêmes et pas sur un fournisseur d'hébergement sécurisé comme [addons.mozilla.org](https://addons.mozilla.org), vous devrez fournir une méthode sécurisée de mise à jour pour vos modules. Pour ce faire, il faudrait soit héberger vos mises à jour sur un site SSL, ou utiliser des clés cryptographiques pour signer les informations de mise à jour. Consultez [Mises à jour sécurisées](/fr/Versions_d'une_extension,_mise_à_jour_et_compatibilité#Mises_.C3.A0_jour_s.C3.A9curis.C3.A9es) pour plus d'informations.

### Troisième étape : s'occuper des changements d'API

Plusieurs API ont changé de manière significative. Les changements les plus importants, qui affecteront probablement un grand nombre d'extensions, sont les suivants :

#### DOM

Les nœuds provenant de documents externes doivent être clonés à l'aide de [`document.importNode()`](/fr/docs/Web/API/Document/importNode) (ou adoptés avec
[`document.adoptNode()`](/fr/docs/Web/API/Document/adoptNode)) avant de pouvoir être insérés dans le document courant. Pour en savoir plus sur les problèmes
de [`Node.ownerDocument`](/fr/docs/Web/API/Node/ownerDocument), consultez la [FAQ DOM du W3C](http://www.w3.org/DOM/faq.html#ownerdoc) (en anglais).

Gecko n'obligeait pas à utiliser [`document.importNode()`](/fr/docs/Web/API/Document/importNode) et [`document.adoptNode()`](/fr/docs/Web/API/Document/adoptNode) avant sa version 1.9. Depuis les versions 1.9
alphas, si un nœud n'est pas adopté ou importé avant d'être utilisé dans un autre document, l'exception
`WRONG_DOCUMENT_ERR` est déclenchée (`NS_ERROR_DOM_WRONG_DOCUMENT_ERR`). implémentation dans le [bug 47903](https://bugzilla.mozilla.org/show_bug.cgi?id=47903).

#### Marque-pages et historique

Si votre extension accède aux marque-pages ou à des données de l'historique d'une manière ou d'une autre, elle devra être substantiellement modifiée pour être compatible avec Firefox 3. Les anciennes API pour accéder à ces informations ont été remplacées par la nouvelle architecture [Places](/fr/Places). Consultez le [Guide de migration vers Places](/fr/Guide_de_migration_vers_Places) pour des détails sur la mise à jour de vos extensions existantes en utilisant l'API Places.

#### Gestionnaire de téléchargement

L'API du gestionnaire de téléchargement a légèrement changé suite à la transition d'un stockage de données RDF vers l'API [Storage](/fr/Storage). La transition devrait être très facile à faire. En outre, l'API permettant d'examiner la progression des téléchargements a été modifiée pour permettre l'existence de plusieurs écouteurs sur le gestionnaire de téléchargement. Consultez [`nsIDownloadManager`](/fr/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIDownloadManager), [`nsIDownloadProgressListener`](/fr/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIDownloadProgressListener) et [Surveillance de téléchargements](/fr/Surveillance_de_téléchargements) pour plus d'informations.

#### Gestionnaire de mots de passe

Si votre extension accède à des informations d'identification à l'aide du Gestionnaire de mots de passe, elle devra être adaptée pour utiliser la nouvelle API du gestionnaire d'identification.

- L'article [Utilisation de nsILoginManager](/fr/Utilisation_de_nsILoginManager) fournit des exemples, dont une démonstration d'écriture d'extension fonctionnant à la fois avec le Gestionnaire de mots de passe et le Gestionnaire d'identification, afin qu'elle fonctionne tant avec Firefox que dans les versions précédentes.
- [`nsILoginInfo`](/fr/NsILoginInfo)
- [`nsILoginManager`](/fr/NsILoginManager)

Il est également possible de ne pas utiliser le stockage du gestionnaire de mots de passe intégré si vous désirez fournir votre propre implémentation de stockage de mots de passe dans vos extensions. Consultez [Création d'un module de stockage du gestionnaire d'identification](/fr/Création_d'un_module_de_stockage_du_gestionnaire_d'identification) pour plus de détails.

#### Popups (menus, menus contextuels, bulles d'information et panneaux)

Le système de popups XUL a été modifié de manière importante dans Firefox 3. Celui-ci gère les menus principaux, les menus contextuels et les panneaux d'information. Un guide d'[utilisation des popups](/fr/XUL/Guide_des_popups) a été créé pour expliquer en détail le fonctionnement du système. Une chose à noter est l'obsolescence de `popup.showPopup` en faveur des nouvelles méthodes `popup.openPopup` et `popup.openPopupAtScreen`.

#### Complément automatique

La méthode [`handleEnter()`](/fr/NsIAutoCompleteController#handleEnter.28.29) de l'interface [`nsIAutoCompleteController`](/fr/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIAutoCompleteController) a été modifiée pour accepter un paramètre indiquant si le texte a été sélectionné depuis le popup de complément automatique ou par l'appui sur la touche Entrée par l'utilisateur après avoir saisi le texte.

#### DOMParser

- Lorsqu'un objet `DOMParser` est instancié, il hérite du principal du code appelant et des valeurs `documentURI` et `baseURI` de la fenêtre dont le constructeur venait.
- Si l'appelant a des privilèges UniversalXPConnect, il peut fournir des paramètres à `new DOMParser()`. Si moins de trois paramètres sont fournis, les paramètres restants prendront la valeur `null` par défaut.

  - Le premier paramètre est le principal à utiliser ; il remplace le principal par défaut normalement hérité.
  - Le second paramètre est la valeur `documentURI` à utiliser.
  - Le troisième paramètre est la valeur `baseURI` à utiliser.

- Si vous initialisez un `DOMParser` à l'aide d'un contrat, comme en appelant `createInstance()`, et que vous n'appelez pas la méthode `init()` de `DOMParser`, toute tentative de démarrer une opération d'analyse créera et initialisera automatiquement le `DOMParser` avec un principal à null et des pointeurs `null` pour `documentURI` et `baseURI`.

#### Interfaces supprimées

Les interfaces suivantes ont été retirées de Gecko 1.9, sur lequel se base Firefox 3. Si votre extension utilise l'une ou l'autre d'entre-elles, vous devrez mettre à jour votre code :

- `nsIDOMPaintListener`
- `nsIDOMScrollListener`
- `nsIDOMMutationListener`
- `nsIDOMPageTransitionListener`
- `nsICloseAllWindows` (voir le [bug 386200](https://bugzilla.mozilla.org/show_bug.cgi?id=386200 'FIXED: SeaMonkey only: no "view cert button" in untrusted cert error dialog'))

### Quatrième étape : vérifier les changements chrome appropriés

Un changement mineur dans le chrome pourrait nécessiter des changements dans votre code. Un nouveau `vbox` a été ajouté, appelé « browser-bottombox », qui comprend la Barre de recherche et la Barre d'état en bas de la fenêtre de navigation. Bien que ceci n'affecte pas l'apparence de l'affichage, votre extension peut être affectée si elle utilise des overlays chrome relatifs à ces éléments.

Par exemple, si vous faisiez précédemment un overlay chrome avant la Barre d'état, comme ceci :

    <window id="main-window">
      <something insertbefore="status-bar" />
    </window>

Vous devrez à présent le faire comme ceci :

    <vbox id="browser-bottombox">
      <something insertbefore="status-bar" />
    </vbox>

Ou utilisez la technique suivante pour que votre overlay fonctionne tant avec Firefox 2 que Firefox 3 :

    <window id="main-window">
      <vbox id="browser-bottombox" insertbefore="status-bar">
        <something insertbefore="status-bar" />
      <vbox>
    </window>

> **Note :** Ce changement s'applique à partir de Firefox 3 beta 4 et des nightlies précédentes.

### Autres changements

_Ajoutez ici les changements simples que vous avez dû faire à vos extensions pour qu'elles fonctionnent avec Firefox 3._

- `chrome://browser/base/utilityOverlay.js` n'est plus géré pour des raisons de sécurité. Si vous l'utilisiez auparavant, vous devriez passer à `chrome://browser/content/utilityOverlay.js`.
- Les implémentations de [`nsIAboutModule`](/fr/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIAboutModule) doivent à présent supporter la méthode `getURIFlags`. Consultez [nsIAboutModule.idl](https://dxr.mozilla.org/mozilla-central/source/netwerk/protocol/about/public/nsIAboutModule.idl) pour la documentation. Ceci affecte les extensions qui fournissent de nouvelles URI `about:`. ([bug 337746](https://bugzilla.mozilla.org/show_bug.cgi?id=337746 'FIXED: [FIX]Move "safe about" hardcoding out of security manager'))
- L'élément [`tabbrowser`](/fr/docs/Mozilla/Tech/XUL/tabbrowser) ne fait plus partie du « toolkit » ([bug 339964](https://bugzilla.mozilla.org/show_bug.cgi?id=339964)). Cela signifie qu'il n'est plus disponible pour les applications XUL et extensions. Il continue cependant à être utilisé dans la fenêtre principale de Firefox (browser.xul).
- Les changements dans les [proxys nsISupports](/fr/Proxys_nsISupports) et éventuellement aux interfaces liées aux threads doivent être documentés.
- Si vous utilisez des instructions de traitement XML comme `<?xml-stylesheet ?>` dans vos fichiers XUL, tenez compte des changements effectués dans le [bug 319654](https://bugzilla.mozilla.org/show_bug.cgi?id=319654) :

  1.  Les instructions de traitement XML sont à présent ajoutées au DOM des documents XUL. Cela signifie que [`document.firstChild`](/fr/docs/Web/API/Document/firstChild) n'est plus forcément l'élément racine. Si vous avez besoin de l'élément racine dans votre script, utilisez plutôt [`document.documentElement`](/fr/docs/Web/API/Document/documentElement).
  2.  Les instructions de traitement `<?xml-stylesheet ?>` et `<?xul-overlay ?>` n'ont plus d'effet en dehors du prologue du document.

- `window.addEventListener("load", myFunc, true)` n'est pas déclenché au chargement de contenu web (chargement de page dans le navigateur). Ceci est causé par le [bug 296639](https://bugzilla.mozilla.org/show_bug.cgi?id=296639) qui modifie la manière dont les fenêtres internes et externes communiquent. Une correction simple est d'utiliser `gBrowser.addEventListener("load", myFunc, true)` comme décrit dans [les exemples de code](/fr/Extraits_de_code/Onglets_de_navigation#D.C3.A9tection_du_chargement_d.27une_page) et qui fonctionnera dans Firefox 2 également.
- `content.window.getSelection()` fournit un objet (qui peut être converti en une chaîne avec `toString()`), contrairement à l'ancienne `content.document.getSelection()`, à présent dépréciée, qui renvoie une chaîne.
- `event.preventBubble()` avait été dépréciée dans Firefox 2 et a été retirée de Firefox 3. Utilisez [`event.stopPropagation()`](/fr/DOM/event.stopPropagation), qui fonctionne également dans Firefox 2.
- Les timers initialisés par`setTimeout()` sont à présent bloqués par les fenêtres modales suite à la correction du [bug 52209](https://bugzilla.mozilla.org/show_bug.cgi?id=52209). Vous pouvez utiliser `nsITimer` à la place.
- Si votre extension doit permettre à une source non sûre (par exemple un site web) d'accéder au chrome de l'extension, vous devrez utiliser le nouveau paramètre [`contentaccessible`](/fr/Enregistrement_chrome#contentaccessible).
- FireFox 3.6 est sensible aux accents dans les pages XUL ! Il faut donc soigneusement enlever toute ponctuation, même dans les commentaires.
