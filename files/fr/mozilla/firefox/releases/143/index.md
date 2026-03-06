---
title: Firefox 143 note de version pour les développeurs
short-title: Firefox 143
slug: Mozilla/Firefox/Releases/143
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

Cet article présente les changements de Firefox 143 qui concernent les développeur·euse·s.
Firefox 143 est sorti le [16 septembre 2025 <sup>(angl.)</sup>](https://whattrainisitnow.com/release/?version=143).

## Changements pour les développeur·euse·s web

### HTML

- L'élément HTML {{HTMLElement("input")}} `{{HTMLElement("input/color", "type=\"color\"")}}` accepte désormais non seulement les couleurs HEX comme `#ff6699`, mais aussi toutes les valeurs CSS {{CSSxRef("color_value", "&lt;color&gt;")}}, par exemple `oklab(50% 0.1 0.1 / 0.5)`. ([bogue Firefox 1965029 <sup>(angl.)</sup>](https://bugzil.la/1965029)).

### CSS

- Le pseudo-élément {{CSSxRef("::details-content")}} est désormais activé par défaut. Il permet de mettre en forme le contenu de l'élément HTML {{HTMLElement("details")}}. ([bogue Firefox 1941406 <sup>(angl.)</sup>](https://bugzil.la/1941406)).
- Le pseudo-élément {{CSSxRef("::marker")}} peut maintenant être utilisé pour mettre en forme un élément de liste créé à l'aide des pseudo-éléments {{CSSxRef("::before")}} ou {{CSSxRef("::after")}}. Cela se fait via les sélecteurs [`::before::marker`](/fr/docs/Web/CSS/Reference/Selectors/::before#les_pseudo-éléments_imbriqués_beforemarker) et [`::after::marker`](/fr/docs/Web/CSS/Reference/Selectors/::after#les_pseudo-éléments_imbriqués_aftermarker). ([bogue Firefox 1980215 <sup>(angl.)</sup>](https://bugzil.la/1980215)).
- Le dimensionnement multi-passes des pistes de grille est désormais activé par défaut et suit l'algorithme défini dans la spécification CSS Grid. Dans cet algorithme, les colonnes sont dimensionnées en premier, puis les lignes&nbsp;: les valeurs en pourcentage sont résolues après que la taille du conteneur est connue. Grâce à cette prise en charge, les pistes de lignes en pourcentage ([basées sur un pourcentage](/fr/docs/Web/CSS/Reference/Properties/grid-template-rows#percentage)) et les éléments de grille avec un rapport d'aspect sont maintenant dimensionnés correctement dans plus de cas. ([bogue Firefox 1957244 <sup>(angl.)</sup>](https://bugzil.la/1957244)).

### JavaScript

Pas de changement notable.

### APIs

#### Suppressions

- La propriété obsolète {{DOMxRef("CompositionEvent.locale")}} n'est plus prise en charge. ([bogue Firefox 1700969 <sup>(angl.)</sup>](https://bugzil.la/1700969)).

### Conformité WebDriver (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- L'événement `browsingContext.contextCreated` est désormais émis pour tous les contextes ouverts lors de l'abonnement à l'événement ([bogue Firefox 1754273 <sup>(angl.)</sup>](https://bugzil.la/1754273)).
- De nouvelles commandes pour le module `network` permettent d'enregistrer les données réseau&nbsp;:
  - `network.addDataCollector` ajoute un collecteur de données réseau à des `contexts`, `userContexts` ou globalement. Le collecteur enregistre les données réseau correspondant aux `dataTypes` fournis. Actuellement, seul le type de données «&nbsp;response&nbsp;» est pris en charge. Un `maxEncodedDataSize` doit aussi être fourni&nbsp;: les données dépassant cette taille ne seront pas enregistrées ([bogue Firefox 1971778 <sup>(angl.)</sup>](https://bugzil.la/1971778)).
  - `network.removeDataCollector` supprime un collecteur de données réseau précédemment ajouté ([bogue Firefox 1971781 <sup>(angl.)</sup>](https://bugzil.la/1971781)).
  - `network.getData` récupère les données collectées pour un identifiant de `request`, un `dataType` et éventuellement un identifiant de `collector`. Si un identifiant de `collector` est fourni, les client·e·s peuvent aussi passer le drapeau `disown` pour libérer les données du collecteur. Les données sont supprimées lorsqu'elles ne sont plus détenues par aucun collecteur ([bogue Firefox 1971780 <sup>(angl.)</sup>](https://bugzil.la/1971780)).
  - `network.disownData` libère les données pour un identifiant de `request` et un `dataType` à partir de l'identifiant de `collector` fourni ([bogue Firefox 1971779 <sup>(angl.)</sup>](https://bugzil.la/1971779)).
- Correction d'un bogue où `emulation.setLocaleOverride` n'appliquait pas la langue aux iframes cross-origin nouvellement créées ([bogue Firefox 1978533 <sup>(angl.)</sup>](https://bugzil.la/1978533)).
- Correction d'un bogue où plusieurs commandes comme `session.subscribe` échouaient si un onglet était déchargé ([bogue Firefox 1949037 <sup>(angl.)</sup>](https://bugzil.la/1949037)).
- Correction de l'événement `browsingContext.navigationCommitted` afin que la propriété `url` inclue désormais les identifiants d'authentification de base ([bogue Firefox 1980137 <sup>(angl.)</sup>](https://bugzil.la/1980137)).

## Changements pour les développeur·euse·s d'extensions

- Ajout de {{WebExtAPIRef("storage.StorageArea.getKeys()")}}. Cette méthode retourne un tableau contenant toutes les clés d'une zone de stockage. Elle est disponible pour toutes les zones de stockage, c'est-à-dire {{WebExtAPIRef("storage.sync", "sync")}}, {{WebExtAPIRef("storage.local", "local")}}, {{WebExtAPIRef("storage.session", "session")}} et {{WebExtAPIRef("storage.managed", "managed")}}. ([bogue Firefox 1910669 <sup>(angl.)</sup>](https://bugzil.la/1910669))
- La sélection par l'utilisateur·ice d'une suggestion d'extension dans la barre d'adresse (omnibox), une action qui déclenche {{WebExtAPIRef("omnibox.onInputEntered")}}, est désormais considérée comme une [action utilisateur·ice](/fr/docs/Mozilla/Add-ons/WebExtensions/User_actions). En plus d'activer les API nécessitant une action utilisateur·ice, sélectionner une suggestion d'extension dans la barre d'adresse accorde aussi la permission `"activeTab"`.

## Fonctionnalités web expérimentales

- **`text-autospace`**&nbsp;: `layout.css.text-autospace.enabled`

  La propriété CSS **`text-autospace`** permet de définir l'espace appliqué entre les caractères chinois/japonais/coréens (CJK) et les caractères non CJK. Actuellement, ces valeurs sont seulement analysées et n'ont pas d'effet sur l'affichage. ([bogue Firefox 1869577 <sup>(angl.)</sup>](https://bugzil.la/1869577)).

- **Textures externes WebGPU**&nbsp;: `dom.webgpu.external-texture.enable`

  L'interface {{DOMxRef("GPUExternalTexture")}} et la méthode {{DOMxRef("GPUDevice.importExternalTexture()")}} sont prises en charge pour importer des textures externes à partir d'images vidéo ou d'éléments. ([bogue Firefox 1979100 <sup>(angl.)</sup>](https://bugzil.la/1979100)).

Ces fonctionnalités sont livrées dans Firefox 143 mais sont désactivées par défaut.
Pour les tester, recherchez la préférence correspondante dans la page `about:config` et définissez-la sur `true`.
Vous pouvez retrouver d'autres fonctionnalités de ce type sur la page [Fonctionnalités expérimentales](/fr/docs/Mozilla/Firefox/Experimental_features).
