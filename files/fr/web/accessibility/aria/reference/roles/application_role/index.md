---
title: "ARIA : rôle application"
short-title: application
slug: Web/Accessibility/ARIA/Reference/Roles/application_role
l10n:
  sourceCommit: a8b25483994fa47cf949b432ddf34a6bce2ddb2e
---

Le rôle `application` indique aux technologies d'assistance qu'un élément _et tous ses enfants_ doivent être traités comme une application de bureau, et qu'aucune technique d'interprétation HTML traditionnelle ne doit être utilisée. Ce rôle ne doit être utilisé que pour définir des applications web très dynamiques et proches d'une application de bureau. La plupart des applications web mobiles et de bureau _ne sont pas_ considérées comme des applications dans ce contexte.

```html
<div role="application" aria-label="…">…</div>
```

En spécifiant le rôle `application`, cela indique que cet élément `div` et tous ses descendants doivent être traités comme faisant partie d'une application de bureau.

## Description

Le rôle `application` [de structure de document](/fr/docs/Web/Accessibility/ARIA/Reference/Roles#1._rôles_dans_la_structure_des_documents), indique aux technologies d'assistance que cette partie du contenu web contient des éléments qui ne se conforment à aucun autre élément HTML connu ni à aucun widget WAI-ARIA. Toute interprétation spéciale des structures HTML et des widgets doit être suspendue, et le contrôle doit être entièrement remis au navigateur et à l'application web pour gérer l'interaction par la souris, le clavier ou le toucher.

Dans ce mode, l'auteur·ice du site est entièrement responsable de la gestion de toutes les saisies clavier, de la gestion du focus et des autres interactions, et ne peut pas supposer que les technologies d'assistance effectueront un traitement de leur côté.

Si l'application web englobée par le rôle application contient des parties qui _doivent_ être traitées comme du contenu web normal, un rôle [`document`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/document_role) ou [`article`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/article_role) doit être utilisé pour contenir ce contenu.

### Contexte

Pour des raisons historiques, notamment sous Windows, les lecteurs d'écran et certaines autres technologies d'assistance (TA) ont traditionnellement récupéré l'intégralité du contenu web depuis le navigateur d'un coup une fois le chargement terminé. Les technologies d'assistance construisent leur propre représentation qui a le plus de sens pour qu'un·e utilisateur·ice malvoyant·e consomme le contenu. Cela est souvent appelé _document virtuel_, _mode navigation_, ou des termes similaires. Le document est simplifié en une vue à une seule colonne. Un modèle d'interaction clavier est généré, très similaire à un traitement de texte où les utilisateur·ice·s peuvent lire ligne par ligne, phrase par phrase ou paragraphe par paragraphe. La technologie d'assistance lit toutes les informations sémantiques comme les liens, titres, contrôles de formulaire, tableaux, listes ou images.

En outre, un ensemble de soi-disant _touches de navigation rapide_ a été établi au fil des ans, permettant aux utilisateur·ice·s malvoyant·e·s de parcourir rapidement une page via un type d'élément particulier. Ces éléments incluent généralement les titres, champs de formulaire, listes, tableaux, liens, graphiques ou zones repères.

Pour que tout cela fonctionne, les technologies d'assistance interceptent presque toutes les saisies clavier et les consomment elles-mêmes, ne laissant rien passer au navigateur ou à un autre agent utilisateur. Pour interagir avec une page web, un ensemble standard de widgets est reconnu et, en appuyant sur une touche particulière (souvent la touche <kbd>Entrée</kbd>), ce mode est désactivé. Le mode lecteur d'écran, souvent appelé _mode formulaire_ ou _mode focus_, laisse à nouveau toutes les saisies clavier passer au navigateur. <kbd>Échap</kbd> est la méthode la plus courante pour revenir en mode _navigation_, mais dans une section `application` spécifique, certains lecteurs d'écran peuvent nécessiter d'autres touches pour quitter ce mode volontairement. Par exemple <kbd>NUM +</kbd> avec JAWS.

Le rôle `application` est conçu pour fournir un moyen aux widgets qui ne font pas partie de l'ensemble standard d'être accessibles pour une interaction directe dans les technologies d'assistance qui utilisent à la fois les modes _navigation_ et _focus_ pour interagir avec le contenu web. La plupart des widgets courants ont des comportements d'interaction clavier attendus. Pour cette raison, une expérience clavier personnalisée créée par un auteur web pourrait créer une expérience confuse.

### Rôles, états et propriétés WAI-ARIA associés

- [`document`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/document_role), [`article`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/article_role)
  - : Utilisé pour indiquer les parties de l'application qui doivent être traitées comme du contenu web normal
- [`aria-activedescendant`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-activedescendant)
  - : Utilisé pour gérer le focus à l'intérieur de l'application.
- [`aria-label`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)
  - : Utilisé pour fournir le nom de l'application ou la fonction du widget exposé.
- [`aria-describedby`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby)
  - : Utilisé pour référencer l'ID d'un élément qui contient des instructions supplémentaires pour la navigation ou l'utilisation de cet élément.
- [`aria-roledescription`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-roledescription)
  - : Utilisé pour donner à l'application un texte de rôle plus descriptif que les lecteurs d'écran peuvent énoncer. Celui-ci doit être localisé.
- [`aria-disabled`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-disabled)
  - : Indique qu'un élément est visible mais désactivé
- [`aria-errormessage`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-errormessage)
  - : Référence l'élément qui fournit le message d'erreur pour l'élément sur lequel il est défini
- [`aria-expanded`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded)
  - : Si défini sur `true`, l'élément de regroupement détenu ou contrôlé par cet élément est développé, ou `false` s'il est réduit.
- [`aria-haspopup`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-haspopup)
  - : Indique qu'il existe un élément contextuel, tel qu'un menu ou une boîte de dialogue, qui peut être déclenché par l'élément.

### Interactions clavier

L'interaction clavier est entièrement sous le contrôle de l'auteur·ice du site et peut correspondre à n'importe quoi associé au widget particulier implémenté. Dans une application de présentation, par exemple, un widget pourrait être créé qui utilise les touches fléchées pour positionner des éléments sur la diapositive, et utilise un retour audio via une région ARIA en direct pour communiquer la position et le statut de chevauchement avec d'autres objets. Le focus est géré via _aria-activedescendant_.

Les touches <kbd>Tab</kbd>, <kbd>Espace</kbd> et <kbd>Entrée</kbd>, ainsi que <kbd>Échap</kbd>, doivent être gérées par l'application. La seule exception est si le focus est défini sur un widget standard à l'intérieur de l'application qui prend en charge la navigation clavier du navigateur, par exemple un élément [input](/fr/docs/Web/HTML/Reference/Elements/input).

### Fonctionnalités JavaScript requises

- keyPress
  - : Utilisé pour gérer les saisies clavier et contrôler le focus
- Click, Touch
  - : À gérer en fonction de votre widget
- Modification des valeurs d'attributs
  - : [`aria-activedescendant`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-activedescendant) est utilisé pour gérer le focus dans le conteneur de l'application. À définir en réponse aux événements clavier ou autres événements de l'application qui modifient le focus ou le point d'interaction.

> [!NOTE]
> Le rôle `application` n'a pas de widget HTML associé et est donc totalement libre. L'auteur de l'application doit assumer l'entière responsabilité d'éviter que les utilisateur·ice·s restent bloqués dans un piège de focus à l'intérieur d'un élément dont ils ne peuvent pas sortir. Tous les aspects de l'interaction, y compris le retour au contenu web normal dans d'autres parties de la page, doivent être gérés. À utiliser avec discernement et prudence, et pensez à tester&nbsp;!

## Exemples

Quelques applications web notables qui utilisent ou ont utilisé correctement le rôle application sont&nbsp;:

- Google Docs, Sheets et Slides
- Les éditeurs web WYSIWYG CKEditor et TinyMCE, comme celui utilisé sur le Mozilla Developer Network
- Certaines parties de Gmail

## Problèmes d'accessibilité

Une utilisation incorrecte du rôle `application` peut retirer involontairement l'accès à certaines informations d'une page web, soyez donc très attentif à son usage. Réfléchissez bien à si vous en avez réellement besoin et si vous ne pouvez pas simplement utiliser un ensemble d'autres widgets connus pour accomplir la même tâche.

Si utilisé, le rôle application doit être ajouté au conteneur commun le plus bas possible, et non sur l'élément `<body>`, par exemple. Assurez-vous également de tester ce que vous avez écrit avec des technologies d'assistance, pour vérifier que cela fonctionne comme prévu.

## Spécifications

{{Specifications}}

## Ordre de priorité

Appliquer le rôle `application` fera que cet élément et tous ses descendants seront traités comme du contenu applicatif, et non comme du contenu web. Tout mécanisme de lecture que les technologies d'assistance pourraient avoir pour le contenu web ne s'appliquera pas.

## Voir aussi

- [Si vous utilisez le rôle WAI-ARIA `application`, faites-le avec discernement <sup>(angl.)</sup>](https://www.marcozehe.de/if-you-use-the-wai-aria-role-application-please-do-so-wisely/) - billet de blog de Marco Zehe
- [Utiliser le rôle ARIA `application` <sup>(angl.)</sup>](https://tink.uk/using-the-aria-application-role/) - par Léonie Watson
