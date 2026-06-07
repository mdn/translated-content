---
title: Firefox 21 note de version pour les développeurs
short-title: Firefox 21
slug: Mozilla/Firefox/Releases/21
l10n:
  sourceCommit: 83f4e64da466670c3700110da364546253eae127
---

Firefox 21 est sorti le 14 mai 2013. Cet article répertorie les principaux changements utiles non seulement aux développeur·euse·s Web, mais aussi aux développeur·euse·s Firefox et Gecko ainsi qu'aux développeur·euse·s d'extensions.

## Changement pour les développeur·euse·s Web

### HTML

- L'attribut `scoped` a été ajouté à l'élément {{HTMLElement("style")}}. Il permet d'inclure des styles qui sont isolés du reste du document. Ces styles peuvent être sélectionnés par le pseudo élément CSS {{CSSxRef(":scope")}} ajouté dans Firefox 20. ([bogue Firefox 508725 <sup>(angl.)</sup>](https://bugzil.la/508725)).
- Le nouvel élément HTML {{HTMLElement("main")}} a été implémenté ([bogue Firefox 820508 <sup>(angl.)</sup>](https://bugzil.la/820508)).

### JavaScript

- ECMAScript pour XML (E4X), une ancienne extension JavaScript, a été retirée. Implémentée seulement par Gecko, elle n'a jamais reçu suffisamment de soutien ([bogue Firefox 788293 <sup>(angl.)</sup>](https://bugzil.la/788293)).
- {{JSxRef("parseInt()")}} ne traite plus les chaînes de caractères commençant par `"0"` comme un octal ([bogue Firefox 786135 <sup>(angl.)</sup>](https://bugzil.la/786135)).

### CSS

- La valeur `none` pour {{CSSxRef("user-select", "-moz-user-select")}} a maintenant le même comportement que la valeur `-moz-none`, alignant Gecko sur WebKit (Chrome, Safari), Presto (Opera) et Trident (Internet Explorer) ([bogue Firefox 816298 <sup>(angl.)</sup>](https://bugzil.la/816298)).
- Dans des contenus XHTML, la valeur `auto` de {{CSSxRef("hyphens", "-moz-hyphens")}} appliquait incorrectement des règles de césure quand le langage n'était pas explicitement défini. Cela a été corrigé par ([bogue Firefox 702121 <sup>(angl.)</sup>](https://bugzil.la/702121)).
- Une valeur `auto` a été ajoutée pour la propriété CSS {{CSSxRef("-moz-orient")}}. La valeur `auto` est équivalente à `horizontal` quand appliquée à {{HTMLElement("meter")}} et {{HTMLElement("progress")}} ([bogue Firefox 835883 <sup>(angl.)</sup>](https://bugzil.la/835883)).
- La requêtes média `-moz-windows-glass` a été ajouté sous Windows 7 et les versions antérieures de Windows ([bogue Firefox 816803 <sup>(angl.)</sup>](https://bugzil.la/816803)).

### DOM

- Prise en charge de {{DOMxRef("RTCPeerConnection")}} (en tant que `MozRTCPeerConnection`) est maintenant activée par défaut ([bogue Firefox 796463 <sup>(angl.)</sup>](https://bugzil.la/796463)). Elle peut être désactivée si nécessaire en définissant `media.peerconnection.enabled` sur false.
- La propriété `origin` a été ajoutée à {{DOMxRef("Window.location")}} ([bogue Firefox 828261 <sup>(angl.)</sup>](https://bugzil.la/828261)).
- Les méthodes `valueAsDate` et `valueAsNumber` ont été ajoutées à `<input type="time">` ([bogue Firefox 781570 <sup>(angl.)</sup>](https://bugzil.la/781570)).
- Les attributs `min` et `max` sont maintenant aussi appliquées à `<input type="time">` ([bogue Firefox 781572 <sup>(angl.)</sup>](https://bugzil.la/781572)).
- De nouveaux keyCodes pour contrôler le volume sont supportées ([bogue Firefox 674739 <sup>(angl.)</sup>](https://bugzil.la/674739)).
- De nouveaux keyCodes pour des anciennes disposition de touches de claviers tels que AS/400 sont maintenant supportées sur Windows et Linux ([bogue Firefox 833719 <sup>(angl.)</sup>](https://bugzil.la/833719)).
- Différentes valeurs keyCode pour des touches OEM spécifiques sur Windows sont maintenant supportées ([bogue Firefox 833719 <sup>(angl.)</sup>](https://bugzil.la/833719)).
- La fonction [`window.crypto.getRandomValues`](/fr/docs/Web/API/Crypto/getRandomValues) est maintenant implémentée ([bogue Firefox 440046 <sup>(angl.)</sup>](https://bugzil.la/440046)).
- Les méthodes non standard `NodeIterator.expandEntityReferences()` et `TreeWalker.expandEntityReferences()` ont été supprimées ([bogue Firefox 672190 <sup>(angl.)</sup>](https://bugzil.la/672190)).
- CSSOM&nbsp;: la méthode `CSSKeyframesRule.insertRule()` a été supprimée au profit de {{DOMxRef("CSSKeyframesRule.appendRule()")}} pour correspondre à un changement de spécification ([bogue Firefox 841896 <sup>(angl.)</sup>](https://bugzil.la/841896)).
- CSSOM&nbsp;: si le paramètre donné à {{DOMxRef("CSSStyleSheet.insertRule")}} contient plus d'une règle, un {{DOMxRef("DOMException")}} avec un `SYNTAX_ERR` est maintenant levé ([bogue Firefox 765599 <sup>(angl.)</sup>](https://bugzil.la/765599)).
- Jusqu'à présent, lorsque les mêmes en-têtes étaient définis à plusieurs reprises avec [`XMLHttpRequest.setRequestHeader`](/fr/docs/Web/API/XMLHttpRequest/setRequestHeader), la dernière valeur définie était utilisée. Ce comportement a été modifié pour se conformer à la spécification, de sorte que ces valeurs sont correctement combinées ([bogue Firefox 819051 <sup>(angl.)</sup>](https://bugzil.la/819051)).

### SVG

- La propriété {{CSSxRef("paint-order")}} a été implémentée ([bogue Firefox 828805 <sup>(angl.)</sup>](https://bugzil.la/828805)).
- La préférence `svg.smil.enabled` a été supprimée. SMIL est toujours activé. ([bogue Firefox 835030 <sup>(angl.)</sup>](https://bugzil.la/835030))

### Réseau

- Nous continuons à faire évoluer notre implémentation de CSP pour qu'elle corresponde à la spécification CSP 1.0, qui vient d'atteindre la statut de Candidate Recommendation&nbsp;:
  - Le support de l'entête HTTP `Content-Security-Policy` conformément à la spécification (en plus de l'entête expérimental `X-Content-Security-Policy`) a été ajouté ([bogue Firefox 783049 <sup>(angl.)</sup>](https://bugzil.la/783049)).
    > [!NOTE]
    > Le patch pour ce nouvel en-tête est arrivé dans Firefox 21, mais il a été désactivé dans les compilations ([bogue Firefox 842657 <sup>(angl.)</sup>](https://bugzil.la/842657)).

### Worker

- Les fonctions {{DOMxRef("URL.createObjectURL_static", "URL.createObjectURL()")}} et {{DOMxRef("URL.revokeObjectURL_static", "URL.revokeObjectURL()")}} font maintenant partie des [fonctions disponibles dans les workers](/fr/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers).

## Changement pour les add-ons et les développeurs Mozilla

- Les applications FUEL ne peuvent plus utiliser le service Livemarks ([bogue Firefox 834492 <sup>(angl.)</sup>](https://bugzil.la/834492)). Le service Livemarks est déprécié et mis en retrait en faveur de l'interface async.
- `resource:///modules/` et `resource://gre/modules/` ne sont plus identiques ([bogue Firefox 755724 <sup>(angl.)</sup>](https://bugzil.la/755724)). Ce changement a eu lieu à cause du travail pour la version métro de Firefox. Si vous chargez des modules en utilisant `resource:///modules/`, vous devez vérifier si vous ne préférez pas utiliser `resource://gre/modules/` à la place. Notez que certains modules ont migrés de Firefox à Toolkit ([bogue Firefox 840287 <sup>(angl.)</sup>](https://bugzil.la/840287) et [bogue Firefox 811548 <sup>(angl.)</sup>](https://bugzil.la/811548) ont déplacé respectivement `NewTabUtils.jsm` et les modules thumbnail).
- Le SDK Add-on est maintenant inclus dans Firefox ([bogue Firefox 731779 <sup>(angl.)</sup>](https://bugzil.la/731779))
- L'API History a vu plusieurs API obsolètes, retirées&nbsp;:
  - Remplacées par `mozIAsyncFavicons`&nbsp;:
    - `nsIFaviconService::setFaviconUrlForPage`
    - `nsIFaviconService::setFaviconData`
    - `nsIFaviconService::getFaviconData`
    - `nsIFaviconService::getFaviconForPage`
    - `nsIFaviconService::setAndLoadFaviconForPage`
    - `nsIFaviconService::getFaviconImageForPage`
    - `nsIFaviconService::getFaviconDataAsDataURL`

  - Remplacées par `mozIAsyncLivemarks`&nbsp;:
    - `nsILivemarkService::*`
    - `PlacesUtils.itemIsLivemark`
    - `PlacesUtils.nodeIsLivemarkContainer`
    - `PlacesUtils.nodeIsLivemarkItem`

  - Retiré seulement le 3e argument&nbsp;:
    - `PlacesUIUtils.showBookmarkDialog`

  - N'est plus implémenté par Places, utilisez `mozIAsyncHistory` à la place&nbsp;:
    - `nsIGlobalHistory2::addURI`
    - `nsIGlobalHistory2::isVisited`
    - `nsIGlobalHistory2::setPageTitle`

  - N'est plus nécessaire, utilisez `onDeleteURI` ou `onItemRemoved`&nbsp;:
    - `nsINavHistoryObserver::OnBeforeDeleteURI`
    - `nsINavBookmarkObserver::OnBeforeItemRemoved`

  - Jamais implémenté correctement&nbsp;:
    - `nsINavHistoryFullVisitResultNode`

  - Obsolète, utilisez `mozIAsyncHistory::updatePlaces` à la place&nbsp;:
    - `nsINavHistoryService::AddVisit`

- `nsIHttpChannel.redirectTo` a été ajouté pour permettre de rediriger les canaux HTTP sans faire des bidouilles fragiles.

## Voir aussi

- [Notes de version de Firefox 21 <sup>(angl.)</sup>](https://website-archive.mozilla.org/www.mozilla.org/firefox_releasenotes/en-us/firefox/21.0/releasenotes/)
- [Compatibilité des extensions pour Firefox 21 <sup>(angl.)</sup>](https://blog.mozilla.org/addons/2013/04/26/compatibility-for-firefox-21/)
