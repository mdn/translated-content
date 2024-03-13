---
title: permissions
slug: Mozilla/Add-ons/WebExtensions/API/permissions
---

{{AddonSidebar}}Permet aux extensions de demander des permissions supplémentaires lors de l'exécution, après leur installation.

Les extensions ont besoin de permissions pour accéder aux nombreuses API WebExtension les plus puissantes. Ils peuvent demander des permissions lors de l'installation en incluant les permissions dont ils ont besoin dans la clé du manifest.json des [`permissions`](/fr/Add-ons/WebExtensions/manifest.json/permissions). Les principaux avantages de demander des permissions au moment de l'installation sont les suivants:

- L'utilisateur est seulement demandé une fois, donc il est moins perturbateur pour eux et une décision plus simple
- L'extension peut compter sur l'accès aux API dont elle a besoin, car si elle est en cours d'exécution, les permissions ont été accordées.

Il n'y a pas encore d'interface graphique simple permettant aux utilisateurs d'afficher les permissions des modules complémentaires WebExtensions installés. Les utilisateurs doivent utiliser about:debugging, puis allez dans la section des modules complémentaires, puis utilisez le lien "Manifest Url" pour le module complémentaire. Cela montrera le json brut, qui inclut un bloc "permissions" qui montre les permissions utilisées par l'addon.

Avec l'API de permissions, une extension peut demander des permissions supplémentaires lors de l'exécution. Ces permissions doivent être listées dans la clé [`optional_permissions`](/fr/Add-ons/WebExtensions/manifest.json/optional_permissions) du manifest.json. Notez que certaines permissions ne sont pas autorisées dans `optional_permissions`. Les principaux avantages de ceci sont :

- L'extension peut s'exécuter avec un plus petit nombre de permissions, sauf lorsqu'elle en a réellement besoin
- L'extension peut gérer le refus de permission de manière gracieuse au lieu de présenter à l'utilisateur un choix global "tout ou rien" au moment de l'installation. Vous pouvez toujours obtenir beaucoup de cette carte d'extension sans lui donner accès à votre emplacement, par exemple.
- L'extension peut avoir besoin des [permissions hôtes](/fr/Add-ons/WebExtensions/manifest.json/permissions#Host_permissions), mais ne sait pas à l'installation exactement quelles permissions d'hôte qu'il a besoin. Par exemple, la liste des hôtes peut être un paramètre utilisateur. Dans ce scénario, demander une gamme plus spécifique d'hôtes au moment de l'exécution peut être une alternative à demander "\<all_urls>" au moment de l'installation.

Pour utiliser l'API de permissions, déterminez les permissions que votre extension peut demander lors de l'exécution, et indiquez-les dans [`optional_permissions`](/fr/docs/Add-ons/WebExtensions/manifest.json/optional_permissions). Après cela, vous pouvez demander toutes les permissions incluses dans `optional_permissions`. Les demandes peuvent uniquement être effectuées dans le gestionnaire pour une action de l'utilisateur (par exemple, un gestionnaire de clics). Pour des conseils sur la conception de votre demande d'autorisations d'exécution, afin de maximiser la probabilité que les utilisateurs les accordent, consultez la section [Demande de permissions à exécuter](/fr/Mozilla/Add-ons/WebExtensions/demander_les_bonnes_permissions#Demander_les_permissions_à_éxécuter)

## Types

- {{WebExtAPIRef("permissions.Permissions")}}
  - : Représente un ensemble de permissions.

## Méthodes

- {{WebExtAPIRef("permissions.contains()")}}
  - : Découvrez si l'extensions a le jeu de permissions donné.
- {{WebExtAPIRef("permissions.getAll()")}}
  - : Obtenez toutes les permissions que cette extension a actuellement.
- {{WebExtAPIRef("permissions.remove()")}}
  - : Renoncer à un ensemble de permissions.
- {{WebExtAPIRef("permissions.request()")}}
  - : Demander un ensemble de permissions.

## Event handlers

- {{WebExtAPIRef("permissions.onAdded")}}
  - : Activé lorsqu'une nouvelle permission est accordée.
- {{WebExtAPIRef("permissions.onRemoved")}}
  - : Déclenché lorsque une permission est supprimée.

## Compatibilité des navigateurs

{{Compat}}

{{WebExtExamples("h2")}}

> **Note :**
>
> Cette API est basée sur l'API Chromium [`chrome.permissions`](https://developer.chrome.com/extensions/permissions).
>
> Les données de compatibilité relatives à Microsoft Edge sont fournies par Microsoft Corporation et incluses ici sous la licence Creative Commons Attribution 3.0 pour les États-Unis.
