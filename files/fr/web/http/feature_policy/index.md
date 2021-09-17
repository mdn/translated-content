---
title: Feature Policy
slug: Web/HTTP/Feature_Policy
tags:
  - Feature Policy
  - Feature-Policy
  - HTTP
  - Introduction
  - Overview
  - Reference
  - Security
  - Sécurité
  - access
  - accès
  - delegation
  - header
  - permission
translation_of: Web/HTTP/Feature_Policy
---
{{HTTPSidebar}}

Feature Policy ("réglementation des fonctionnalités" en français) permet aux développeurs web d'activer, de modifier ou de désactiver spécifiquement le comportement de certaines fonctionnalités et API dans le navigateur. Elle est similaire à {{Glossary("CSP", "Content Security Policy")}} mais contrôle les fonctionnalités plus que la sécurité.

> **Note :** L'en-tête `Feature-Policy` a maintenant été renommé `Permissions-Policy` dans la spécification, et cet article va possiblement être modifié en conséquence.

## En résumé

Feature Policy est un mécanisme vous permettant de déclarer explicitement quelles fonctionnalités sont utilisées ou non par votre site web. Ceci vous permet donc de mettre en place des bonnes pratiques en limitant les fonctionnalités disponibles, et ce bien que votre code source évoluera avec le temps et que du contenu externe puisse être intégré postérieurement et plus sainement.

Avec Feature Policy, vous pouvez opter pour un ensemble de "règles" que le navigateur imposera à certaines fonctionnalités utilisées sur un site web. Ces règles restreignent quelles API le site peut utiliser ou comment il peut modifier le comportement par défaut du navigateur pour utiliser certaines fonctionnalités.

Par exemple, voici des choses que vous pourrez faire avec Feature Policy :

- Changer le comportement par défaut de la lecture automatique sur mobile ou pour les vidéos de source externe,
- Vous interdire d'utiliser les API sensitives comme l'appareil photographique ou le microphone.
- Permettre aux iframes d'utiliser l'[API plein écran](/en-US/docs/Web/API/Fullscreen_API).
- Empêcher l'utilisateur d'API obsolètes comme les [XHR synchrones](/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest) ou {{domxref("document.write()")}}.
- Vous assurer que les images sont dimensionnées correctement et ne sont pas trop grosses pour le cadre de la fenêtre.

## Concepts et utilisation

Feature Policy vous permet de contrôler quelles origines peuvent utiliser quelles fonctionnalités, à la fois au niveau supérieur de navigation et dans cadres embarqués. Essentiellement, vous devez écrire une règle qui fournit une liste d'origines permises pour chaque fonctionnalité. Celles contrôlées par Feature Policy ne seront activées que dans les documents ou cadres si leur origine respective est présente dans la liste de permissions associée à cette fonctionnalité.

Pour chaque fonctionnalités contrôlée, le navigateurs entretient une liste d'origines (dite "liste de permissions" ou _allowlist_) pour lesquelles la fonctionnalité est activée. Si vous ne spécifiez aucune règle pour une fonctionnalité, alors la liste de permissions par défaut sera utilisée. Celle-ci est spécifique à chaque fonctionnalité.

### Écrire une règle

Une règle est composée d'un ensemble de directives individuelles. Chaque directive est une combinaison d'un nom de fonctionnalités et d'une liste de permissions pour les origines qui pourront utiliser la fonctionnalité.

### Appliquer votre règle

Feature Policy fournit deux manières d'appliquer des règles pour contrôler les fonctionnalités :

- L'en-tête HTTP {{httpheader("Feature-Policy")}}.
- L'attribut {{HTMLElement("iframe","<code>allow</code>","#Attributes")}} sur les iframes.

La principale différence entre les deux est que que l'attribut ne contrôle les fonctionnalités que dans l'iframe tandis que l'en-tête les contrôle dans la réponse et chacun des contenus imbriqués dans la page.

Pour plus de détails, voir [Utiliser Feature Policy](/en-US/docs/Web/HTTP/Feature_Policy/Using_Feature_Policy).

### Déterminer la règle

Les scripts peuvent demander programmatiquement à savoir quelles règles s'appliquent au moyen de l'objet {{DOMxRef("FeaturePolicy")}} avec {{DOMxRef("Document.featurePolicy")}} ou {{DOMxRef("HTMLIFrameElement.featurePolicy")}}.

## Types de fonctionnalités contrôlables

Bien que Feature Policy fournit un moyen de contrôler de multiples fonctionnalités en utilisant une syntaxe constante, le comportement des fonctionnaltiés contrôlées varie et dépend de plusieurs facteurs.

Le principe général est qu'il devrait y avoir un moyen intuitif et fiable pour les développeurs web de savoir quand une fonctionnalité dont ils ont besoin est désactivée. Les fonctionnalités récemment introduites peuvent fournir une API explicitement conçue pour signaler un tel cas, mais celles préexistantes et qui ont intégré tardivement Feature Policy utilisent typiquement des mécanismes plus anciens, par exemple :

- Retourner "permission denied" pour les API JavaScript qui requièrent une élévation de privilèges de la part de l'utilisateur,
- Retourner `false` ou jeter une erreur depuis une API JavaScript qui permet d'accéder à une fonctionnalité,
- Modifier les valeurs par défaut ou les options qui contrôlent le comportement de la fonctionnalité.

L'ensemble actuel des fonctionnalités contrôlables se résume donc à deux grandes catégories :

- Imposer des bonnes pratiques pour une bonne expérience d'utilisation,
- Fournir un contrôle granulaire sur les fonctionnalités sensitives ou puissantes.

### Bonnes pratiques pour une bonne expérience d'utilisation

Il y a plusieurs fonctionnalités contrôlables pour vous aider à mettre en place de bonnes pratiques afin d'assurer de bonnes performances et une expérience d'utilisation agréable.

Dans la plupart des cas, les fonctionnalités contrôlables sont celles qui, si utilisées, vont affecter négativement l'expérience d'utilisation. Pour éviter de faire dysfonctionner un site web déjà existant, ces fonctionnalités autorisent par défaut leur usage par toutes les origines. Une bonne pratique est donc d'utiliser des règles qui désactivent ces fonctionnalités pour certaines origines.

La liste de ces fonctionnalités est :

- Animations de rafraichissement de l'affichage,
- Formats d'image du passé,
- Images surdimensionnées,
- Scripts synchrones,
- Requêtes XMLHTTPRequest sychrones,
- Images non optimisées,
- Médias non dimensionnés.

### Contrôle granulaire sur certaines fonctionnalités

Le web fournit des fonctionnalités et API que peuvent affecter l'anonymat, la vie privée et la sécurité si leur usage est abusif. Dans certains cas, vous pourriez avoir envie de limiter strictement la manière dont de telles fonctionnalités sont utilisées sur un site web. Il y a des moyens de permettre à des fonctionnalités d'être activées ou désactivées pour des origines ou des cadres spécifiques dans un site web. Quand ils sont disponibles, les moyens intègrent avec l'API Permissions ou des mécanismes propres à eux-mêmes la possibilité de vérifier si la fonctionnalité est disponible.

Les fonctionnalités incluent (voir la [liste des Features](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Feature-Policy#Directives)) :

- Accéléromètre
- Capteur de luminosité ambiante
- Lecture automatique
- Appareil photographique
- Médias chiffrés
- Plein écran
- Géolocalisation
- Gyroscope
- Magnétomètre
- Microphone
- MIDI
- PaymentRequest
- Picture-in-picture
- USB
- Web Share API
- VR / XR

## Exemples

- [Utiliser Feature Policy](/en-US/docs/Web/HTTP/Feature_Policy/Using_Feature_Policy)
- Voir [Démonstrations de Feature Policy](http://feature-policy-demos.appspot.com/) pour un exemple d'utilisation de plusieurs règles.

## Spécifications

| Spécification                                                                                                    | Statut                               | Commentaire                                                                                                                                                                                                                                             |
| ---------------------------------------------------------------------------------------------------------------- | ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName("Feature Policy","#feature-policy-http-header-field","Feature-Policy")}} | {{Spec2("Feature Policy")}} | Définition initiale. Définit l'en-tête {{httpheader("Feature-Policy")}}. Les directives sont définies dans la spécification pour les fonctionnalités qu'elles contrôlent. Voir les pages individuelles des directives pour plus de détails. |

## Compatibilité des navigateurs

{{Compat("http.headers.Feature-Policy")}}

## Voir aussi

- [Utiliser Feature Policy](/en-US/docs/Web/HTTP/Feature_Policy/Using_Feature_Policy)
- {{HTTPHeader("Feature-Policy")}} HTTP header
- {{HTMLElement("iframe","<code>allow</code>","#Attributes")}} attribute on iframes
- [Introduction à Feature Policy](https://developers.google.com/web/updates/2018/06/feature-policy)
- [Feature policies sur www.chromestatus.com](https://www.chromestatus.com/features#component%3A%20Blink%3EFeaturePolicy)
- [Feature-Policy Tester (extension Chrome Developer Tools)](https://chrome.google.com/webstore/detail/feature-policy-tester-dev/pchamnkhkeokbpahnocjaeednpbpacop)
- [Anonymat, permissions et informations sur la sécurité](/en-US/docs/Web/Privacy)
