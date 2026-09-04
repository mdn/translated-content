---
title: Mise à jour des modules complémentaires pour Firefox 9
slug: Mozilla/Firefox/Releases/9/Updating_add-ons
l10n:
  sourceCommit: 2d5b20a5eabb48bc5472ebe94b11afe2aa84f585
---

Firefox 9 n'apporte pas beaucoup de changements qui devraient poser des problèmes de compatibilité pour les développeur·euse·s de modules complémentaires. Cependant, il y a quelques éléments possibles qui pourraient vous poser problème, alors examinons-les.

## Faut-il faire quelque chose ?

Si votre module complémentaire est distribué sur [addons.mozilla.org](https://addons.mozilla.org/fr/firefox/) (AMO), il a été vérifié par un outil automatisé de vérification de compatibilité. Les modules complémentaires qui n'utilisent pas d'API ayant changé dans Firefox 8 et qui n'ont pas de composants binaires (qui doivent être recompilés pour chaque version majeure de Firefox) ont été automatiquement mis à jour sur AMO pour indiquer qu'ils fonctionnent dans Firefox 9.

Vous devez donc commencer par visiter AMO et vérifier si votre module complémentaire nécessite des modifications.

> [!NOTE]
> Vous devez quand même tester votre module complémentaire sur Firefox 9, même s'il a été automatiquement mis à jour. Il existe des cas limites qui peuvent ne pas être détectés automatiquement.

Une fois que vous avez confirmé que des modifications sont nécessaires, revenez sur cette page et continuez à lire.

## Les modules complémentaires amorcés peuvent supprimer les scripts de chargement différé

Si votre module complémentaire utilise `nsIChromeFrameMessageManager.loadFrameScript()` avec l'indicateur de chargement différé activé, le script est chargé dans chaque cadre créé à partir de ce moment. C'est génial, sauf qu'avant Firefox 9, il n'y avait aucun moyen d'arrêter le chargement du script, donc il continuait à se produire même après l'arrêt de votre module complémentaire.

À partir de Firefox 9, vous devez appeler la nouvelle méthode `nsIChromeFrameMessageManager.removeDelayedFrameScript()` pour arrêter le chargement de votre script dans les cadres nouvellement créés. Vous faites cela comme ceci, par exemple&nbsp;:

```js
browser.messageManager.removeDelayedFrameScript(
  "chrome://mon-extension/contenu/du-script.js",
);
```

## Changements dans les interfaces

- L'interface `nsIURL` a été légèrement modifiée. L'attribut `nsIURL.param` a été supprimé, et la méthode `nsIURLParser.parsePath()` a deux arguments de moins qu'auparavant.
- Deux méthodes ont été supprimées de `nsIBrowserHistory`&nbsp;: `registerOpenPage()` et `unregisterOpenPage()`. Ces méthodes avaient été dépréciées.
- La méthode `nsIEditorSpellCheck.saveDefaultDictionary()` a été supprimée dans le cadre du support des paramètres de vérification orthographique par site. De plus, `nsIEditorSpellCheck.updateCurrentDictionary()` ne prend plus de paramètre.
- L'interface `nsIGlobalHistory3` a été supprimée. Sa fonctionnalité était d'une utilité limitée (voire inexistante) pour les modules complémentaires, donc cela ne doit affecter personne.
- Plusieurs attributs de propriétés de canaux spécialisés ont été fusionnés dans l'interface de base `nsIChannel`. Cela ne doit pas affecter la compatibilité, puisque ces interfaces héritent de `nsIChannel` de toute façon.

## Changements dans les préférences

Les préférences `geo.wifi.*` n'ont plus de valeurs par défaut, bien qu'elles soient respectées si elles existent. Si votre code lit ces préférences sans gérer le cas où elles n'existent pas, vous devez mettre à jour votre code pour gérer l'exception qui est levée lorsqu'elles ne sont pas présentes.

## Changements dans XPConnect

`nodePrincipal` et `baseURIObject` ont été déplacés de `nsDOMClassInfo` vers `XrayWrapper`. Cela ne doit pas affecter de nombreux modules complémentaires, car cela ne pose un problème que s'ils tentent d'accéder à ces propriétés sur des objets DOM {{domxref("Node")}} à partir de scripts non privilégiés ayant demandé des privilèges XPConnect en utilisant `enablePrivilege()`.

## Changements dans le DOM

- La méthode obsolète depuis longtemps `Navigator.taintEnabled()` a été supprimée. Elle n'a plus été utile depuis très longtemps, mais était souvent utilisée dans les scripts de détection de navigateur, puisqu'elle était spécifique à Netscape. Appeler cette méthode déclenche une exception à partir de Firefox 9.
- Les gestionnaires d'évènements sont désormais implémentés en tant qu'interfaces IDL standard. Dans la plupart des cas, ça ne vous affecte pas, sauf si vous définissez ou accédez à des gestionnaires d'évènements sur des objets prototype DOM. Par exemple, vous ne pouvez plus modifier `Window.prototype.onload`.

## Autres changements qui peuvent affecter la compatibilité binaire

Ces changements sont notables en ce qu'ils peuvent affecter les composants XPCOM binaires. Ceux-ci doivent être reconstruits de toute façon, puisque c'est requis pour chaque version majeure de Firefox, mais pourraient introduire des erreurs de compilation, donc ils méritent d'être notés en particulier.

- L'interface `nsIDOMHTMLDocument` a maintenant un nouvel attribut `scripts`, qui implémente l'attribut {{domxref("Document.scripts")}}.
- La méthode `nsIJumpListShortcut.iconImageUri()` a été ajoutée, pour permettre d'établir des favicons sur les entrées URI de la liste de saut sous Windows.

## Changements de thème

L'attribut `pending` a été ajouté à l'élément `<tab>`. Si cet attribut est présent, l'onglet est en cours de restauration par le service de stockage de session. Vous pouvez l'utiliser pour mettre en forme l'onglet pendant le processus de restauration. Il est à noter que si l'utilisateur·ice a activé la préférence «&nbsp;Ne pas charger les onglets avant qu'ils ne soient sélectionnés&nbsp;», l'attribut `pending` est défini sur les onglets jusqu'à ce qu'ils soient chargés.

De même, les onglets ont maintenant un attribut `unread`&nbsp;; cette propriété, si elle est présente, indique que l'onglet a changé depuis la dernière fois qu'il était l'onglet actif. Vous pouvez l'utiliser pour mettre en forme les onglets différemment lorsqu'ils ont changé depuis la dernière fois que l'utilisateur·ice les a regardés. C'est également présent sur les onglets qui n'ont pas encore été regardés pendant la session en cours.
