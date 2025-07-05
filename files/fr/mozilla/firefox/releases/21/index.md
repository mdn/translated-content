---
title: Firefox 21 pour les développeurs
slug: Mozilla/Firefox/Releases/21
---

{{FirefoxSidebar}}

Firefox 21 est sorti le 14 mai 2013. Cette page résume les principaux changements dans Firefox 21 qui sont utiles aux développeurs, que vous soyez développeur web, développeur Firefox et Gecko, ou développeur d'add-ons.

## Changement pour les développeurs Web

### HTML

- L'attribut [`scoped`](/fr/docs/Web/HTML/Reference/Elements/style#scoped) a été ajouté à l'élément {{HTMLElement("style")}}. Il permet d'inclure des styles qui sont isolés du reste du document. Ces styles peuvent être sélectionnés par le pseudo élément CSS {{cssxref(":scope")}} ajouté dans Firefox 20. ([bug Firefox 508725](https://bugzil.la/508725)).
- Le nouvel élément HTML {{HTMLElement("main")}} a été implémenté ([bug Firefox 820508](https://bugzil.la/820508)).

### JavaScript

- [E4X](/fr/docs/E4X), une ancienne extension JavaScript, a été retirée. Implementée seulement par Gecko, elle n'a jamais reçu suffisament de soutien ([bug Firefox 788293](https://bugzil.la/788293)).
- [parseInt](/fr/docs/Web/JavaScript/Reference/Global_Objects/parseInt) ne traite plus les chaînes de caractères commençant par "0" comme un octal ([bug Firefox 786135](https://bugzil.la/786135)).

### CSS

- La valeur `none` pour {{cssxref("user-select", "-moz-user-select")}} a maintenant le même comportement que la valeur `-moz-none`, alignant Gecko sur WebKit (Chrome, Safari), Presto (Opera) et Trident (Internet Explorer) ([bug Firefox 816298](https://bugzil.la/816298)).
- Dans des contenus XHTML, la valeur `auto` de {{cssxref("hyphens", "-moz-hyphens")}} appliquait incorrectement des règles de césure quand le langage n'était pas explicitement défini. Cela a été corrigé par ([bug Firefox 702121](https://bugzil.la/702121)).
- Une valeur `auto` a été ajoutée pour la propriété CSS {{cssxref("-moz-orient")}}. La valeur `auto` est équivalente à `horizontal` quand appliquée à {{HTMLElement("meter")}} et {{HTMLElement("progress")}} ([bug Firefox 835883](https://bugzil.la/835883)).

### DOM

- La propriété `origin` a été ajoutée à {{domxref("window.location")}} ([bug Firefox 828261](https://bugzil.la/828261)).
- Les méthodes `valueAsDate` et `valueAsNumber` ont été ajoutées à `<input type="time">` ([bug Firefox 781570](https://bugzil.la/781570)).
- Les attributs `min` et `max` sont maintenant aussi appliquées à `<input type="time">` ([bug Firefox 781572](https://bugzil.la/781572)).
- De nouveaux keyCodes pour contrôler le volume sont supportées ([bug Firefox 674739](https://bugzil.la/674739)).
- De nouveaux keyCodes pour des anciennes disposition de touches de claviers tels que AS/400 sont maintenant supportées sur Windows et Linux ([bug Firefox 833719](https://bugzil.la/833719)).
- Différentes valeurs keyCode pour des touches OEM spécifiques sur Windows sont maintenant supportées ([bug Firefox 833719](https://bugzil.la/833719)).
- La fonction [`window.crypto.getRandomValues`](/fr/docs/Web/API/Crypto/getRandomValues) est maintenant implémentée ([bug Firefox 440046](https://bugzil.la/440046)).

### SVG

- La propriété {{cssxref("paint-order")}} a été implémentée ([bug Firefox 828805](https://bugzil.la/828805)).

### Networking

- Nous continuons à faire évoluer notre implémentation de CSP pour qu'elle corresponde à la spécification CSP 1.0, qui vient d'atteindre la statut de Candidate Recommendation :
  - Le support de l'entête HTTP `Content-Security-Policy` conformément à la spécification (en plus de l'entête expérimental `X-Content-Security-Policy`) a été ajouté ([bug Firefox 783049](https://bugzil.la/783049)). **Note :** le patch pour ce nouvel entête est arrivé dans Firefox 21, mais il a été désactivé dans les compilations ([bug Firefox 842657](https://bugzil.la/842657)).

### Worker

- Les fonctions {{domxref("window.URL.createObjectURL", "URL.createObjectURL")}} et {{domxref("window.URL.revokeObjectURL", "URL.revokeObjectURL")}} font maintenant partie des [fonctions disponibles au workers](/fr/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers).

## Changement pour les add-ons et les développeurs Mozilla

- Les applications FUEL ne peuvent plus utiliser le service Livemarks ([bug Firefox 834492](https://bugzil.la/834492)). Le service Livemarks est déprécié et mis en retrait en faveur de l'interface async.
- `resource:///modules/` et `resource://gre/modules/` ne sont plus identiques ([bug Firefox 755724](https://bugzil.la/755724)). Ce changement a eu lieu à cause du travail pour la version metro de Firefox. Si vous chargez des modules en utilisant `resource:///modules/`, vous devriez vérifier si vous ne préférez pas utiliser `resource://gre/modules/` à la place. Notez que certains modules ont migrés de Firefox à Toolkit ([bug Firefox 840287](https://bugzil.la/840287) et [bug Firefox 811548](https://bugzil.la/811548) ont déplacé respectivement `NewTabUtils.jsm` et les modules thumbnail).
- Le SDK Add-on est maintenant inclus dans Firefox ([bug Firefox 731779](https://bugzil.la/731779))
- L'API History a vu plusieurs API dépréciées, retirées :
  - Remplacées par `mozIAsyncFavicons` :
    - `nsIFaviconService::setFaviconUrlForPage`
    - `nsIFaviconService::setFaviconData`
    - `nsIFaviconService::getFaviconData`
    - `nsIFaviconService::getFaviconForPage`
    - `nsIFaviconService::setAndLoadFaviconForPage`
    - `nsIFaviconService::getFaviconImageForPage`
    - `nsIFaviconService::getFaviconDataAsDataURL`

  - Remplacées par `mozIAsyncLivemarks` :
    - `nsILivemarkService::*`
    - `PlacesUtils.itemIsLivemark`
    - `PlacesUtils.nodeIsLivemarkContainer`
    - `PlacesUtils.nodeIsLivemarkItem`

  - Retire seulement le 3e arguments :
    - `PlacesUIUtils.showBookmarkDialog`

  - Plus implementé par Places, utilisez `mozIAsyncHistory` à la place :
    - `nsIGlobalHistory2::addURI`
    - `nsIGlobalHistory2::isVisited`
    - `nsIGlobalHistory2::setPageTitle`

  - Plus nécessaire, utilisez `onDeleteURI` ou `onItemRemoved`:
    - `nsINavHistoryObserver::OnBeforeDeleteURI`
    - `nsINavBookmarkObserver::OnBeforeItemRemoved`

  - Jamais implementé correctement :
    - `nsINavHistoryFullVisitResultNode`

  - Déprécié, utilisez `mozIAsyncHistory::updatePlaces` à la place :
    - `nsINavHistoryService::AddVisit`

- `nsIHttpChannel.redirectTo` a été ajouté pour permettre de rediriger les canaux HTTP sans faire des bidouilles fragiles.

## Voir aussi

- [Firefox 21 Release Notes](https://www.mozilla.org/en-US/firefox/21.0/releasenotes/)
- [Site Compatibility for Firefox 21](/fr/docs/Site_Compatibility_for_Firefox_21)
- [Add-on Compatibility for Firefox 21](https://blog.mozilla.org/addons/2013/04/26/compatibility-for-firefox-21/)

### Anciennes versions

{{Firefox_for_developers('20')}}
