---
title: Liste de vérification de l'accessibilité mobile
slug: Web/Accessibility/Guides/Mobile_accessibility_checklist
original_slug: Web/Accessibility/Mobile_accessibility_checklist
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

Ce document fournit une liste de vérification concise des exigences d'accessibilité pour les développeur·euse·s d'applications mobiles. Il a vocation à évoluer en continu à mesure que de nouveaux modèles apparaissent.

## Couleur

- Le contraste des couleurs doit être conforme aux [exigences du niveau AA de la WCAG 2.2 <sup>(angl.)</sup>](https://w3c.github.io/wcag/guidelines/22/#contrast-minimum)&nbsp;:
  - Un ratio de contraste de 4,5:1 pour le texte normal (moins de 18 points ou 14 points en gras).
  - Un ratio de contraste de 3:1 pour le texte de grande taille (au moins 18 points ou 14 points en gras).

- L'information transmise par la couleur doit aussi être disponible par d'autres moyens (texte souligné pour les liens, etc.).

## Visibilité

- Les techniques de masquage du contenu telles que l'opacité nulle, l'ordre z-index ou le placement hors écran ne doivent pas être utilisées exclusivement pour gérer la visibilité.
- Tout ce qui n'est pas l'écran actuellement visible doit être _réellement_ invisible (particulièrement pertinent pour les applications monopage avec plusieurs _cartes_)&nbsp;:
  - Utilisez l'attribut `hidden` ou les propriétés de style `visibility` ou `display`.
  - Sauf cas absolument inévitable, l'attribut `aria-hidden` ne doit pas être utilisé.

## Sélection

- Tous les éléments activables doivent pouvoir recevoir la sélection&nbsp;:
  - Les contrôles standards comme les liens, boutons et champs de formulaire sont sélectionnables par défaut.
  - Les contrôles non standards doivent avoir un [rôle ARIA](/fr/docs/Web/Accessibility/ARIA/Reference/Roles) approprié, tel que `button`, `link` ou `checkbox`.

- La gestion de la sélection doit suivre un ordre logique et cohérent.

## Équivalents textuels

- Un équivalent textuel doit être fourni pour chaque élément non textuel non strictement décoratif de l'application.
  - Utilisez _alt_ et _title_ lorsque c'est pertinent ([Guide anglophone sur l'utilisation de l'attribut HTML title <sup>(angl.)</sup>](https://www.tpgi.com/using-the-html-title-attribute-updated/)).
  - Si ces attributs ne sont pas applicables, utilisez les [états et propriétés ARIA](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes) appropriés comme `aria-label`, `aria-labelledby` ou `aria-describedby`.

- Les images de texte sont à proscrire.
- Tous les composants d'interface utilisateur avec un texte visible (ou une image de texte) comme libellé doivent avoir ce même texte dans le [nom programmatique](https://w3c.github.io/wcag/guidelines/22/#dfn-name) du composant. [WCAG 2.1&nbsp;: Libellé dans le nom.](https://www.w3.org/WAI/WCAG21/Understanding/label-in-name.html)
- Tous les contrôles de formulaire doivent avoir des libellés (éléments HTML {{HTMLElement("label")}}) pour les utilisateur·ice·s de lecteurs d'écran.

## Gestion des états

- Les contrôles standards comme les boutons radio et les cases à cocher sont gérés par le système d'exploitation. Cependant, pour les autres contrôles personnalisés, les changements d'état doivent être fournis via les [états ARIA <sup>(angl.)</sup>](https://w3c.github.io/aria/#state_prop_def) tels que `aria-checked`, `aria-disabled`, `aria-selected`, `aria-expanded` et `aria-pressed`.

## Orientation

- Le contenu ne doit pas être limité à une seule orientation, comme portrait ou paysage, sauf si cela est essentiel. [WCAG 2.1&nbsp;: Orientation <sup>(angl.)</sup>](https://www.w3.org/WAI/WCAG21/Understanding/orientation.html)
  - Par exemple, une application de piano ou un chèque bancaire nécessite une orientation spécifique.

## Bonnes pratiques générales

- Un titre d'application doit être fourni.
- Les titres ne doivent pas rompre la structure hiérarchique

  ```html
  <h1>Titre de niveau supérieur</h1>
  <h2>Titre secondaire</h2>
  <h2>Autre titre secondaire</h2>
  <h3>Titre de niveau inférieur</h3>
  ```

- Les [rôles de repère ARIA](/fr/docs/Web/Accessibility/ARIA/Reference/Roles#3._rôles_de_repères) doivent être utilisés pour décrire la structure d'une application ou d'un document, tels que `banner`, `complementary`, `contentinfo`, `main`, `navigation`, `search`.
- Pour les événements tactiles, veillez à ce qui suit ([WCAG 2.1&nbsp;: Annulation du pointeur <sup>(angl.)</sup>](https://www.w3.org/WAI/WCAG21/Understanding/pointer-cancellation.html))&nbsp;:
  - L'événement d'appui ne doit pas être utilisé pour exécuter une partie de la fonction&nbsp;;
  - À défaut, la _fin_ de la fonction doit se produire lors du relâchement, et un mécanisme doit permettre d'annuler l'action avant son achèvement ou de l'annuler après coup&nbsp;;
  - À défaut, le relâchement doit permettre d'annuler toute action déclenchée lors de l'appui&nbsp;;
  - Toutes les règles ci-dessus peuvent être enfreintes s'il est essentiel de déclencher l'action à l'appui, généralement pour simuler des expériences réelles ou fournir un retour en temps réel. Par exemple, commandes de jeu, claviers de piano ou claviers virtuels.

- Les cibles tactiles doivent être suffisamment grandes pour permettre l'interaction (voir les [BBC Mobile Accessibility Guidelines <sup>(angl.)</sup>](https://www.bbc.co.uk/accessibility/forproducts/guides/mobile/target-touch-size) pour des recommandations sur la taille des cibles).

> [!NOTE]
> La [version originale de ce document <sup>(angl.)</sup>](https://yzen.github.io/firefoxos/2014/04/30/mobile-accessibility-checklist.html) a été rédigée par [Yura Zenevich](https://yzen.github.io/).
