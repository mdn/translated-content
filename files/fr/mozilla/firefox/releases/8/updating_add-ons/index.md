---
title: Mise à jour des modules complémentaires pour Firefox 8
slug: Mozilla/Firefox/Releases/8/Updating_add-ons
l10n:
  sourceCommit: 2591a9b59de88401a2ef0fb7d0b8d0281e3f5376
---

Cet article fournit des informations sur les étapes à suivre pour mettre à jour votre module complémentaire existant afin qu'il soit compatible avec Firefox 8. Voir [Firefox 8 pour les développeuses et développeurs](/fr/docs/Mozilla/Firefox/Releases/8) pour une liste complète de tous les changements apportés dans Firefox 8.

## Faut-il faire quelque chose ?

Si votre module complémentaire est distribué sur [addons.mozilla.org](https://addons.mozilla.org/fr/firefox/) (AMO), il a été vérifié par un outil automatisé de compatibilité. Les modules complémentaires qui n'utilisent pas d'API ayant changé dans Firefox 8 et qui n'ont pas de composants binaires (qui [doivent être recompilés pour chaque version majeure de Firefox <sup>(angl.)</sup>](https://web.archive.org/web/20210119071646/https://developer.mozilla.org/en-US/docs/Mozilla/Developer_guide/Interface_Compatibility#binary_interfaces)) ont été automatiquement mis à jour sur AMO pour indiquer qu'ils fonctionnent dans Firefox 8.

Vous devez donc commencer par visiter AMO et vérifier si votre module complémentaire nécessite des modifications.

> [!NOTE]
> Vous devez quand même tester votre module complémentaire sur Firefox 8, même s'il a été automatiquement mis à jour. Il existe des cas limites qui peuvent ne pas être détectés automatiquement.

Une fois que vous avez confirmé que vous devez apporter des modifications, revenez sur cette page et continuez à lire.

## Remarque sur le processus de développement

Il convient de noter que lors du démarrage, Firefox 8 vérifie désormais les modules complémentaires tiers lors de son premier démarrage et présente une interface utilisateur permettant aux utilisateur·ice·s de décider s'ils souhaitent les activer ou non. Si vous déposez votre module complémentaire dans le répertoire de profil pour le tester, Firefox ne l'active pas automatiquement au premier démarrage, mais affiche cette interface à la place.

Vous pouvez éviter cela en définissant la préférence `extensions.autoDisableScopes` sur 14. Cela ne doit être fait qu'à des fins de développement et de test.

## Interfaces qui ont été fusionnées

Dans le cadre de nos efforts continus pour rationaliser les internes de Gecko, quelques interfaces ont été fusionnées&nbsp;:

- `nsIDOMWindowInternal` a été fusionné avec `nsIDOMWindow`. L'interface `nsIDOMWindowInternal` existe toujours, mais elle est vide et sera entièrement supprimée dans Firefox 9. Vous devez mettre à jour tout code qui dépend de l'existence de `nsIDOMWindowInternal` pour qu'il utilise `nsIDOMWindow` à la place.
- Toutes les sous-interfaces de `nsISelection` ont été fusionnées dans l'interface de base `nsISelection`. Si par hasard vous utilisiez auparavant `nsISelection2` ou `nsISelection3`, vous devez mettre à jour votre code.

## Gestion améliorée des dates

Maintenant que l'objet JavaScript {{JSxRef("Date")}} peut analyser les dates au format ISO 8601, le module de code [`ISO8601DateUtils.jsm` <sup>(angl.)</sup>](https://web.archive.org/web/20210613204753/https://developer.mozilla.org/en-US/docs/Mozilla/JavaScript_code_modules/ISO8601DateUtils.jsm) a été supprimé. Si vous utilisiez ce module de code, vous devez mettre à jour votre code pour utiliser les méthodes de `Date` à la place.

## Changements du DOM

Il y a eu quelques changements dans le DOM qui impactent les modules complémentaires&nbsp;:

### Changements de sélection

Auparavant, {{DOMxRef("Document.getSelection()")}} retournait une version sous forme de chaîne de caractères de la sélection au lieu de l'objet {{DOMxRef("Selection")}} lui-même. Il s'agissait d'un comportement non standard, qui a été corrigé.

### Conflits potentiels de noms

Lorsque l'API File du DOM a été ajoutée, un nouveau global appelé {{DOMxRef("File")}} a été ajouté&nbsp;; cela peut entrer en conflit avec des objets dans vos scripts. Si vous avez des globals appelés `File`, vous devez les renommer.

De même, un nouveau global, `ChromeWorker`, a été introduit pour permettre l'utilisation des Workers depuis le code chrome. Si par hasard vous avez des globals avec ce nom, vous devez les renommer.

## Changements de sécurité

La prise en charge de SSL 2.0 a été supprimée. Cela ne doit pas affecter les modules complémentaires actuels. Cependant, à titre de référence, certains anciens codes ont été supprimés, ainsi que la prise en charge des préférences `security.enable_ssl2` (qui est désactivée par défaut) et de toutes les préférences commençant par `security.ssl2`.

## Voir aussi

- [Firefox 8 pour les développeuses et développeurs](/fr/docs/Mozilla/Firefox/Releases/8)
