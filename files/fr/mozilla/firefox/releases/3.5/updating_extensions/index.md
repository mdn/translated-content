---
title: Mise à jour des extensions pour Firefox 3.5
slug: Mozilla/Firefox/Releases/3.5/Updating_extensions
l10n:
  sourceCommit: 886f2641ae90a70858c5e7d0d20959c70ee44d9d
---

Cet article fournit des informations utiles aux développeur·euse·s d'extensions qui souhaitent mettre à jour leurs extensions pour qu'elles fonctionnent correctement dans Firefox 3.5.

## Mises à jour simples

Cette section couvre les bases de ce que vous devez faire chaque fois que vous mettez à jour une extension pour une nouvelle version de Firefox.

### Testez votre extension

Commencez par modifier le fichier `install.rdf` de votre extension, en mettant à jour `maxVersion` à 3.5b4 (si vous testez sur Firefox 3.5 beta 4), et augmentez la `version` de votre extension.

Ensuite, créez un nouveau profil Firefox afin que vos tests ne mettent pas en danger votre profil habituel. Accédez au répertoire contenant Firefox, puis exécutez la commande&nbsp;:

```bash
firefox -createProfile testBeta4
```

Sur Mac, vous devez naviguer jusqu'au bundle de l'application Firefox&nbsp;:

```bash
cd /Applications/Firefox.app/Contents/MacOS/
firefox -createProfile testBeta4
```

Lancez Firefox en utilisant le nouveau profil en exécutant cette commande dans le terminal&nbsp;:

```bash
firefox -P testBeta4
```

Testez votre extension de manière approfondie. Nous vous suggérons de définir les préférences suivantes sur `true` afin d'être alerté de tout avertissement ou exception JavaScript&nbsp;:

- `javascript.options.strict`
- `javascript.options.showInConsole`

### Mettre à jour votre extension

Si vous rencontrez des problèmes lors des tests, mettez à jour votre code pour corriger les problèmes. Cet article contient des informations utiles sur les éléments qui peuvent nécessiter un certain travail.

Une fois que vous avez fait cela, essayez d'utiliser à nouveau votre extension, cette fois avec votre profil habituel. Cela aide à garantir la compatibilité avec toutes les données existantes.

### Mettre à jour votre extension sur addons.mozilla.org

Enfin, il est temps de publier votre extension mise à jour. Si votre extension n'a pas nécessité de modifications de code, vous pouvez vous connecter au tableau de bord AMO et mettre à jour la version de compatibilité. Sinon, vous devez télécharger une nouvelle version sur AMO.

Voir [Soumettre une extension à AMO <sup>(angl.)</sup>](https://extensionworkshop.com/documentation/publish/signing-and-distribution-overview/#distributing-your-addon) pour plus d'informations.

## Accéder à la base de données Places

Avant Firefox 3.5, accéder directement à la base de données Places en utilisant [l'API Storage <sup>(angl.)</sup>](https://web.archive.org/web/20210401045303/https://developer.mozilla.org/en-US/docs/Mozilla/Tech/XPCOM/Storage) nécessitait un peu de manipulation&nbsp;:

```js
const places = Components.classes["@mozilla.org/file/directory_service;1"]
  .getService(Components.interfaces.nsIProperties)
  .get("ProfD", Components.interfaces.nsIFile);
places.append("places.sqlite");
const db = Components.classes["@mozilla.org/storage/service;1"]
  .getService(Components.interfaces.mozIStorageService)
  .openDatabase(places);
```

Ça construit un chemin vers le fichier de base de données `places.sqlite` manuellement, puis ouvre le fichier pour l'accès à Storage.

Firefox 3.5 ajoute un service dédié qui offre un moyen pratique d'accéder à la base de données Places&nbsp;; la technique ci-dessus ne fonctionne pas dans Firefox 3.5 ou ultérieur.

```js
const db = Components.classes[
  "@mozilla.org/browser/nav-history-service;1"
].getService(Components.interfaces.nsPIPlacesDatabase).DBConnection;
```

## Zones de recherche

Le type `timed` de [`textbox`](https://web.archive.org/web/20201205234810/https://developer.mozilla.org/en-US/docs/Archive/Mozilla/XUL/textbox) est obsolète&nbsp;; à la place, vous devriez utiliser `search`.

Dans Firefox 3, vous auriez pu utiliser&nbsp;:

```xml
<textbox type="timed" timeout="1000" oncommand="alert(this.value);"/>
```

Dans Firefox 3.5, vous devez changer par en&nbsp;:

```xml
<textbox type="search" timeout="1000" oncommand="alert(this.value);"/>
```

## JSON

Le module JavaScript JSON.jsm a été supprimé dans Firefox 3.5 au profit du support natif de l'objet JSON. Pour plus de détails, consultez l'article sur [JSON](/fr/docs/Web/JavaScript/Reference/Global_Objects/JSON) pour un aperçu plus général de JSON et de son utilisation dans différentes versions de Firefox.

Pour garantir la compatibilité avec Firefox 3 et Firefox 3.5, vous pouvez faire ce qui suit&nbsp;:

```js
if (typeof JSON === "undefined") {
  Components.utils.import("resource://gre/modules/JSON.jsm");
  JSON.parse = JSON.fromString;
  JSON.stringify = JSON.toString;
}
```

Cela fonctionne en important le module JavaScript JSON.jsm si JSON n'est pas pris en charge nativement, puis en mappant les méthodes fournies par ce module à celles utilisées par JSON natif, de sorte que les mêmes appels fonctionnent.

Vous pouvez également contourner ce problème en utilisant directement l'interface `nsIJSON`.

## Modifications des menus contextuels

Pour prendre en charge les nouvelles fonctionnalités audio et vidéo ajoutées dans Gecko 1.9.1, la classe `nsContextMenu` renomme l'accesseur `imageURL` en `mediaURL`&nbsp;; toutefois, `imageURL` a été réintroduit le 9 juin 2009.

## Modifications apportées à l'enregistrement de l'interface

Firefox 3.5 corrige une faille de sécurité qui permettait d'utiliser du chrome distant. Cela affecte tout module complémentaire qui inclut une ressource dans son fichier `chrome.manifest` référant une URL de site Web, de données ou de ressource. Voir [Changements de sécurité dans Firefox 3.5](/fr/docs/Mozilla/Firefox/Releases/3.5/Security_changes) pour plus de détails.

## Obtenir un contexte de chargement à partir d'une requête

Auparavant, il était possible d'obtenir un contexte de chargement à partir d'une requête en interrogeant diverses API de docShell. En particulier, on utilisait souvent `notificationCallbacks.getInterface(nsIDOMWindow)` pour obtenir l'objet window associé au chargement. Bien que cette approche ancienne puisse fonctionner dans certains cas, il n'est plus recommandé de l'utiliser ([détails <sup>(angl.)</sup>](https://bugzil.la/457153#c16)).

La façon correcte et fiable consiste à utiliser un `nsILoadContext` (voir la [définition de l'interface <sup>(angl.)</sup>](https://searchfox.org/firefox-main/source/docshell/base/nsILoadContext.idl)).

En JavaScript, on procède ainsi&nbsp;:

```js
let loadContext;
try {
  loadContext = aRequest
    .QueryInterface(Components.interfaces.nsIChannel) // aRequest correspond à aSubject dans observe
    .notificationCallbacks.getInterface(Components.interfaces.nsILoadContext);
} catch (ex) {
  try {
    loadContext = aRequest.loadGroup.notificationCallbacks.getInterface(
      Components.interfaces.nsILoadContext,
    );
  } catch (ex) {
    loadContext = null;
  }
}
// vous pouvez maintenant utiliser |loadContext.associatedWindow| pour obtenir l'objet Window
```

Voici un autre exemple en JavaScript si celui ci-dessus ne fonctionne pas&nbsp;:

```js
// SOURCE : https://stackoverflow.com/questions/10719606/is-it-possible-to-know-the-target-domwindow-for-an-httprequest

function getWindowForRequest(request) {
  if (request instanceof Components.interfaces.nsIRequest) {
    try {
      if (request.notificationCallbacks) {
        return request.notificationCallbacks.getInterface(
          Components.interfaces.nsILoadContext,
        ).associatedWindow;
      }
    } catch (e) {}
    try {
      if (request.loadGroup && request.loadGroup.notificationCallbacks) {
        return request.loadGroup.notificationCallbacks.getInterface(
          Components.interfaces.nsILoadContext,
        ).associatedWindow;
      }
    } catch (e) {}
  }
  return null;
}
```

En C++, vous pouvez procéder comme suit&nbsp;:

```cpp
nsCOMPtr<nsILoadContext> loadContext;
nsCOMPtr<nsIChannel> channel = do_QueryInterface(aRequest);
NS_QueryNotificationCallbacks(channel, loadContext);
```

## Barres d'outils personnalisables

Dans Firefox 3.5, le comportement des barres d'outils personnalisables a changé de sorte que le binding `<xul:toolbar/>` supprime désormais les éléments de la barre d'outils de son `<xul:toolbarpalette/>` associé et les ajoute à la barre d'outils, au lieu de les cloner et de les copier dans la barre d'outils. Cela signifie que la palette ne contient désormais que les éléments absents de la barre d'outils, contrairement au comportement précédent qui consistait à contenir tous les éléments personnalisables, qu'ils soient affichés ou non dans la barre d'outils. Cela peut poser des problèmes pour les extensions qui dépendent de la possibilité de récupérer tous les éléments personnalisables de la barre d'outils à partir du `<xul:toolbarpalette/>`, ou qui tentent d'insérer dynamiquement des éléments dans la palette pour les rendre disponibles lors de la personnalisation de la barre d'outils. Plus d'informations sont disponibles dans [bogue Firefox 407725 <sup>(angl.)</sup>](https://bugzil.la/407725) et [bogue WebKit 467045 <sup>(angl.)</sup>](https://bugzil.la/467045).

## XPCNativeWrapper

À partir de Firefox 3.5, vous ne pouvez plus utiliser les bindings `data:` dans les packages chrome qui obtiennent l'automatisation `XPCNativeWrapper`. Cela résout un problème de sécurité potentiel.

Les documents XUL reçoivent désormais le traitement `XPCNativeWrapper`, vous devez donc utiliser la méthode `getAttribute()` pour récupérer les valeurs des attributs au lieu de les lire directement.

Si votre extension utilise `xpcnativewrappers=no` (ce qui n'est pas conseillé, car ce n'est pas sûr), le XBL de cette extension n'est pas appliqué aux documents utilisant l'automatisation `XPCNativeWrapper` à partir de Firefox 3.5.

## Nouvelles fonctionnalités intéressantes

### Écoute des évènements sur tous les onglets

Firefox 3.5 permet désormais d'ajouter et de supprimer des écouteurs de progression qui surveillent tous les onglets. Voir [Écoute des évènements sur tous les onglets <sup>(angl.)</sup>](https://web.archive.org/web/20210412023656/https://developer.mozilla.org/en-US/docs/Mozilla/Developer_guide/Listening_to_events_on_all_tabs) pour plus de détails.

## Pour les développeur·euse·s de thèmes

- Consultez [Modifications des thèmes dans Firefox 3.5 <sup>(angl.)</sup>](https://web.archive.org/web/20191004004454/https://developer.mozilla.org/en-US/docs/Archive/Themes/Theme_changes_in_Firefox_3.5).
- Rendez-vous sur le forum MozillaZine [Modifications des thèmes pour FF3.1 <sup>(angl.)</sup>](https://forums.mozillazine.org/viewtopic.php?f=18&t=665138) pour obtenir un aperçu / une liste de tous les changements entre 3.0 et 3.1 qui impactent les développeur·euse·s de thèmes. Cela concerne les nouvelles fonctionnalités CSS (comme nth-child, -moz-box-shadow, etc.), les modifications des widgets existants, les améliorations générales de l'interface utilisateur et les nouvelles fonctionnalités de FF3.1 (prise en charge audio/vidéo, navigation privée, restauration de session étendue, ombres de boîte/fenêtre/texte).
