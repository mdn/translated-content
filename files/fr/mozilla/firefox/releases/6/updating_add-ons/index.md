---
title: Mise à jour des modules pour Firefox 6
slug: Mozilla/Firefox/Releases/6/Updating_add-ons
l10n:
  sourceCommit: 1d3d0c10ebf5c8c55f75b9adce74d1e5001866c6
---

Cet article fournit un aperçu des modifications que vous devez peut-être apporter à vos modules pour qu'ils fonctionnent correctement dans Firefox 6. Vous pouvez trouver une liste complète des changements liés aux développeur·euse·s dans Firefox 6 dans [Firefox 6 pour les développeuses et développeurs](/fr/docs/Mozilla/Firefox/Releases/6).

## Faut-il faire quelque chose ?

Si votre module est distribué sur [addons.mozilla.org](https://addons.mozilla.org/fr/firefox/) (AMO), il a été vérifié par un outil automatisé de vérification de compatibilité. Les modules qui n'utilisent pas d'API ayant changé dans Firefox 6 et qui n'ont pas de composants binaires (qui doivent être recompilés pour chaque version majeure de Firefox) ont été automatiquement mis à jour sur AMO pour indiquer qu'ils fonctionnent dans Firefox 6.

Vous devez donc commencer par visiter AMO et vérifier si votre module nécessite des modifications.

> [!NOTE]
> Vous devez toujours tester votre module sur Firefox 6, même s'il a été automatiquement mis à jour. Il existe des cas particuliers qui peuvent ne pas être détectés automatiquement.

Une fois que vous avez confirmé que vous devez apporter des modifications, revenez sur cette page et continuez à lire.

## Changements liés à l'interface utilisateur

L'ajout du nouveau sous-menu Développement Web dans le menu Outils signifie que les superpositions qui dépendent des éléments qui ont été déplacés là-bas fonctionnent différemment de ce qu'elles faisaient auparavant. Vos superpositions continuent de fonctionner, mais vos éléments ne se retrouvent pas là où vous vous y attendez. Vous devez mettre à jour vos superpositions pour vous assurer que les éléments de menu vont là où vous voulez qu'ils aillent.

De même, l'ordre des éléments de menu dans les menus Historique et Marque-pages peut également affecter les superpositions de votre module.

## Compatibilité des composants binaires

Un bogue dans Firefox 5 faisait que les composants binaires n'étaient pas correctement rejetés s'ils avaient été construits pour une version différente de Gecko. Cela a été corrigé dans Firefox 6&nbsp;; si les composants binaires de votre module ne se chargent pas, assurez-vous de les avoir reconstruits avec le SDK Gecko 6.

## Préférences

La préférence `app.update.timer` a été supprimée&nbsp;; vous devez utiliser la préférence `app.update.timerMinimumDelay` à la place.

De plus, des préférences de confidentialité spécifiques aux sites ont été ajoutées. Cela n'affecte que les modules qui s'attendent à ce que les préférences liées à la confidentialité (confidentialité, mémorisation des mots de passe, etc.) se trouvent dans la fenêtre principale des préférences.

## Changements liés au DOM

La propriété {{DOMxRef("window.top")}} est désormais en lecture seule. Cela affecte votre module si vous avez une variable non déclarée nommée `top` dans un script chrome.

## Gestion des URL

Les URL `javascript:` et `data:` saisies dans la barre d'adresse n'héritent plus du principal de la page actuellement chargée. Cela n'affecte probablement pas de nombreux modules, mais si vous exécutez du code qui utilise ces URL, vous devez vérifier que tout fonctionne comme prévu.

Le [bogue Firefox 658949 <sup>(angl.)</sup>](https://bugzil.la/658949) a modifié la manière dont le symbole dièse (#) est traité dans les URL de type data, ce qui peut casser les feuilles de style CSS contenant ce symbole si celui-ci n'est pas échappé.

## Interfaces

Certaines interfaces qui étaient obsolètes ou des détails d'implémentation [ont été supprimées](/fr/docs/Mozilla/Firefox/Releases/6#interfaces_supprimées). Si vous dépendez de l'une d'entre elles, vous devez réviser votre code.
