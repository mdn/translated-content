---
title: Mise à jour des extensions pour Firefox 4
slug: Mozilla/Firefox/Releases/4/Updating_extensions_for_Firefox_4
l10n:
  sourceCommit: e3a2272d272f21ea38e5fff9bd6ccec2d0dfb1a8
---

Cet article fournit des informations détaillées sur les modifications apportées à Firefox 4 qui pourraient avoir une incidence sur les extensions existantes.

## Changement de l'interface utilisateur

### La barre d'état

La barre d'état a été supprimée de Firefox 4, avec une nouvelle barre d'extensions ajoutée à sa place. Voir [La barre d'extensions](/fr/docs/Mozilla/Firefox/Releases/4/The_add-on_bar) pour plus de détails.

### Barres d'outils

#### Création de barres d'outils

Si votre extension crée une nouvelle barre d'outils à l'aide d'une surcouche, il se peut que votre barre d'outils n'apparaisse pas. Cela se produit lorsque votre élément `<toolbox>` en surcouche est un enfant de l'élément `<window>` au lieu d'être un enfant direct de l'élément de surcouche. Déplacez la boîte à outils en dehors de l'élément window pour résoudre ce problème.

### Le menu de l'application Firefox

Sous Windows, la barre de menus est désormais masquée par défaut. À la place, un seul bouton ouvre un menu d'application Firefox simplifié. Ce menu inclut les fonctionnalités de menu les plus utilisées, ce qui rend l'application plus facile à utiliser. La barre de menus peut toujours être accessible en appuyant sur la touche <kbd>Alt</kbd>.

Si votre extension n'est découvrable qu'avec la barre de menus, vous devez également superposer le menu de l'application. Il n'y a pas d'emplacement spécifique pour placer les éléments de menu des extensions, vous devez donc examiner le menu et choisir le bon emplacement pour votre extension particulière.

### Onglets

Un certain nombre de modifications ont été apportées à l'élément `<tabbrowser>` pour aider à prendre en charge les onglets d'application et les panoramas, ainsi que pour transformer la barre d'onglets en une barre d'outils standard. D'autres modifications qui peuvent casser les extensions existantes incluent&nbsp;:

- Les évènements `TabClose`, `TabSelect` et `TabOpen` ne se propagent plus jusqu'à l'élément `<tabbrowser>` (`gBrowser`). Les écouteurs d'évènements pour ces évènements doivent être ajoutés à `gBrowser.tabContainer` plutôt qu'à `gBrowser` directement.
- Le menu contextuel des onglets n'est plus un enfant anonyme de l'élément `<tabbrowser>`. Il peut donc être superposé directement avec des [surcouches XUL <sup>(angl.)</sup>](https://web.archive.org/web/20160927025909/https://developer.mozilla.org/en-US/docs/Mozilla/Tech/XUL/Overlays). Il peut également être accessible plus directement en JavaScript avec `gBrowser.tabContextMenu`. Voir [cet article de blog <sup>(angl.)</sup>](https://gavinsharp.com/blog/2010/03/31/accessingmodifying-the-firefox-tab-context-menu-from-extensions/) pour plus de détails.

## Changements dans XPCOM

Plusieurs changements ont été apportés qui affectent les modules complémentaires et les applications incluant des composants XPCOM. Voir [Changements dans XPCOM dans Gecko 2 <sup>(angl.)</sup>](https://web.archive.org/web/20210514105748/https://developer.mozilla.org/en-US/docs/Mozilla/Tech/XPCOM/Guide/Changes_in_Gecko_2.0) pour plus de détails.

## Le gestionnaire de modules complémentaires

Le gestionnaire de modules complémentaires remanié est désormais implémenté sous forme d'onglet plutôt que dans une fenêtre séparée. Parmi les changements qui affectent votre navigateur du point de vue de l'expérience utilisateur, l'icône de votre module complémentaire peut maintenant être de 64x64 pixels au lieu de 32x32. Bien que les icônes de 32x32 pixels fonctionnent toujours, il est évident que votre module complémentaire a meilleure apparence s'il fournit une icône de 64x64 pixels. Heureusement, les icônes de 64x64 pixels sont rétrocompatibles et se redimensionnent bien, vous pouvez donc simplement passer à cette taille sans avoir besoin des deux tailles.

De plus, l'arrière-plan du gestionnaire de modules complémentaires a été repensé. L'interface `nsIExtensionManager` a disparu, tout comme l'ancien stockage basé sur RDF qu'elle utilisait. Les métadonnées des modules complémentaires sont désormais stockées dans une base de données SQLite, et le gestionnaire de modules complémentaires est maintenant un [module de code JavaScript <sup>](https://web.archive.org/web/20210531090101/https://developer.mozilla.org/en-US/docs/Mozilla/JavaScript_code_modules) appelé [AddonManager <sup>](https://firefox-source-docs.mozilla.org/toolkit/mozapps/extensions/addon-manager/AddonManager.html).

Une différence clé avec la nouvelle API est que la demande de métadonnées des modules complémentaires est désormais asynchrone au lieu de synchrone&nbsp;; cela s'applique également aux modules complémentaires utilisant FUEL, donc tous les modules complémentaires qui demandent des métadonnées sur les modules complémentaires doivent être mis à jour.

## Mise en fil d'execution

Vous ne pouvez plus passer des objets JavaScript entre les fils d'exécution. Cela rend le gestionnaire de fils d'exécution principalement inutile pour les développeur·euse·s de modules complémentaires, malheureusement, et il n'existe pas pour le moment beaucoup d'alternatives. Il est possible que dans le futur, le [`ChromeWorker` <sup>(angl.)</sup>](https://web.archive.org/web/20210512121129/https://developer.mozilla.org/en-US/docs/Mozilla/Gecko/Chrome/API/ChromeWorker) soit amélioré pour combler ce vide.

## Redirections réseau

L'API pour gérer les redirections réseau a été modifiée pour être asynchrone&nbsp;; tous les modules complémentaires s'enregistrant dans la catégorie «&nbsp;net-channel-event-sinks&nbsp;» doivent être mis à jour pour utiliser la nouvelle API `asyncOnChannelRedirect`.

## Décompression des XPI

Firefox 4 [n'extrait plus les XPI <sup>(angl.)</sup>](https://bugzil.la/533038) lors de l'installation des extensions. Il place simplement le fichier XPI dans le profil utilisateur, puis lit les fichiers chrome et autres directement à partir du XPI. Un jar à l'intérieur du XPI fonctionne toujours, mais n'est plus nécessaire, ce qui peut faciliter votre développement ou votre compilation. Cela a été fait principalement pour des raisons de performance sur les systèmes d'exploitation lents, et permet une meilleure invalidation du cache, ce qui aide également les développeur·euse·s. Cependant, tous les types de fichiers ne peuvent pas encore être lus à partir du XPI, donc si votre extension utilise l'un de ces fichiers, vous devez définir [`<em:unpack>` <sup>(angl.)</sup>](https://web.archive.org/web/20210421140209/https://developer.mozilla.org/en-US/docs/Archive/Add-ons/Install_Manifests#unpack) dans votre install.rdf pour que Firefox continue d'extraire votre XPI et utilise des fichiers individuels, sinon votre extension échoue lors de l'accès à ces fichiers.

Si votre extension ne contient que ces types de fichiers, vous n'avez pas besoin de faire de modifications&nbsp;:

- `install.rdf`
- `chrome.manifest`
- `chrome` (y compris `content`, `locale`, `skin`)
- préférences par défaut
- composants XPCOM écrits en JavaScript

Si votre extension contient l'un des éléments suivants, vous devez inclure `<em:unpack>` dans le fichier install.rdf&nbsp;:

- Composants XPCOM binaires
- Bibliothèques partagées chargées avec ctypes
- `searchplugins/` (qui sont censés être chargés automatiquement par Firefox)
- `dictionaries/`
- Icônes de fenêtre (peut être [corrigé <sup>(angl.)</sup>](https://bugzil.la/595462))

Si le code de votre extension accède à d'autres fichiers que vous avez intégrés dans le fichier XPI, vous devez soit inclure `<em:unpack>` dans le fichier `install.rdf`, soit apporter quelques modifications à votre code pour prendre en charge l'installation compressée. Tout code utilisant `getInstallLocation()` et `nsIFile` doit soit inclure `em:unpack`, soit être modifié. Vous pouvez utiliser la méthode `Addon.getResourceURI()`, qui retourne un `nsIURI` pointant vers le fichier demandé. Si l'extension est décompressée, il s'agit d'une URI `file://`. Si l'extension est compressée, il s'agit d'une URI `jar://`. Vous pouvez ouvrir des flux vers ces URI en ouvrant un canal à l'aide de `nsIIOService`, ce qui vous permet de charger le contenu des fichiers sans décompression.

## Les enfants HWND ont été supprimés

Cela ne doit affecter qu'un très petit nombre de développeur·euse·s. Dans les versions précédentes de Firefox, des `HWND` enfants étaient créés sur Windows pour un usage interne. Dans le cadre des travaux visant à améliorer les performances graphiques, ceux-ci ne sont plus créés.

Malheureusement, quelques extensions ont réussi à accéder à ces `HWND` et à les manipuler directement&nbsp;; ces extensions ne fonctionnent plus dans Firefox 4. Nous avons mis en place quelques solutions temporaires pour aider certains pilotes de dispositifs de pointage et logiciels d'assistance (lecteurs d'écran, par exemple). Cependant, nous avons décidé de ne pas ajouter encore plus de solutions temporaires pour prendre en charge les extensions, qui n'auraient jamais dû faire cela en premier lieu.

Si vous maintenez une extension qui utilise des composants natifs dépendant de `HWND` qui n'existent plus, vous devez mettre à jour votre extension. Il y a deux façons de le faire.

La première, et meilleure, solution consiste à cesser d'accéder aux `HWND` et à utiliser à la place les fonctionnalités Web ou XUL pour implémenter votre extension. Il y a beaucoup de nouvelles fonctionnalités dans Firefox 4 qui rendent possibles de nombreuses choses qui nécessitaient auparavant du code natif, donc vous n'avez peut-être plus besoin de le faire.

Si vous constatez que cela ne fonctionne pas et que vous devez toujours accéder directement aux `HWND`, votre seule solution est d'écrire un plugin NPAPI qui réalise ce travail. Cela représente beaucoup de travail, mais cela fonctionne. Bien sûr, cela n'aide pas si les `HWND` spécifiques que vous utilisez n'existent plus.

## Conseils pour le développement et les tests

### Mise en cache

Comme Firefox met désormais en cache le code et d'autres ressources de manière plus agressive, veillez à purger les caches au démarrage de Firefox 4. Sinon, vous risquez de tester des éléments obsolètes de votre extension. Pour cela, lancez Firefox avec l'option de ligne de commande `-purgecaches`.

### Le gestionnaire de profils

L'ancien outil Gestionnaire de profils est supprimé dans Firefox 4, bien qu'il ne l'ait pas encore été. Cet outil n'a pas été mis à jour depuis longtemps et lui manquent des fonctionnalités. De plus, sa présence ralentit le démarrage de l'application.

Un remplaçant du Gestionnaire de profils est [disponible <sup>(angl.)</sup>](https://ftp.mozilla.org/pub/utilities/profilemanager/). (Voir aussi [le bogue Firefox 539524 <sup>(angl.)</sup>](https://bugzil.la/539524)). Ce nouvel outil est indépendant du navigateur et plus robuste que l'ancien Gestionnaire de profils.

### Installation globale des extensions

Les options de ligne de commande `-install-global-extension` et `-install-global-theme` ont été supprimées. La gestion de l'installation globale a toujours été compliquée, et des discussions sont en cours pour déterminer la marche à suivre. En attendant, consultez [Installation des extensions <sup>(angl.)</sup>](https://extensionworkshop.com/documentation/publish/signing-and-distribution-overview/) pour des informations sur les moyens d'installer automatiquement des modules complémentaires.

## Voir aussi

- [Rendre votre module compatible avec Firefox 4 <sup>(angl.)</sup>](https://blog.mozilla.org/addons/2010/11/11/making-add-on-compatible-firefox-4/) (article de blog)
