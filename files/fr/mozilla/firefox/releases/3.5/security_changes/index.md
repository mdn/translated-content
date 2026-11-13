---
title: Changements de sécurité dans Firefox 3.5
slug: Mozilla/Firefox/Releases/3.5/Security_changes
l10n:
  sourceCommit: 2591a9b59de88401a2ef0fb7d0b8d0281e3f5376
---

Cet article traite des modifications liées à la sécurité dans Firefox 3.5.

## Modifications apportées à l'enregistrement des éléments d'interface

Une faille de sécurité a été corrigée afin d'empêcher l'utilisation de contenu distant en tant qu'élément d'interface. Cela pouvait affecter tout module complémentaire dont le fichier `chrome.manifest` contenait une ressource faisant référence à un fichier sur le Web.

Ce bogue a été corrigé en ajoutant un nouveau drapeau `URI_IS_LOCAL_RESOURCE` à l'interface `nsIProtocolHandler`, qui indique que le protocole peut être enregistré en toute sécurité en tant que chrome. Tout module complémentaire qui crée son propre gestionnaire de protocole et tente de l'enregistrer dans son fichier `chrome.manifest` doit utiliser ce drapeau pour fonctionner correctement.

## Navigation privée

Firefox 3.5 implémente la navigation privée, un mode dans lequel les cookies, l'historique et d'autres informations potentiellement privées ne sont pas enregistrés de manière permanente sur l'ordinateur de l'utilisateur·ice. Les extensions et autres modules complémentaires peuvent prendre en charge la fonctionnalité de navigation privée, en détectant lorsqu'elle est utilisée afin d'éviter d'enregistrer des informations privées pendant que le mode de navigation privée est activé. Voir [Prise en charge du mode de navigation privée <sup>(angl.)</sup>](https://web.archive.org/web/20210620014429/https://developer.mozilla.org/en-US/docs/Archive/Mozilla/Supporting_private_browsing_mode) pour plus de détails.

Les modules d'extension peuvent détecter si le mode de navigation privée est activé en utilisant la fonction [`NPN_GetValue()` <sup>(angl.)</sup>](https://web.archive.org/web/20210308202622/https://developer.mozilla.org/en-US/docs/Archive/Plugins/Reference/NPN_GetValue) pour vérifier la valeur actuelle de la variable `NPNVprivateModeBool`.

## Nouveau traitement des erreurs de certificat

Dans les versions précédentes de Firefox 3, les erreurs de certificat SSL donnaient lieu à l'affichage de la page d'erreur réseau standard, `about:neterror`, dans la fenêtre du navigateur. À partir de Firefox 3.5, une nouvelle page d'erreur, `about:certerror`, s'affiche à la place. L'URL d'erreur est formatée ainsi&nbsp;:

`about:certerror?e=error&u=url&d=desc`

Les applications intégrées souhaitant fournir des pages d'erreur de certificat personnalisées peuvent désormais le faire en fournissant leur propre implémentation de page `about:` et en réglant la préférence `security.alternate_certificate_error_page` sur le nom de page approprié (par exemple, `"certerror"`).

## Voir aussi

- [Firefox 3.5 pour les développeuses et développeurs](/fr/docs/Mozilla/Firefox/Releases/3.5)
