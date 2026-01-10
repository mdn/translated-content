---
title: HTMLIFrameElement
slug: Web/API/HTMLIFrameElement
l10n:
  sourceCommit: f6e66d18205c93fcaeb2ea9ad51541b5b4d7d2b1
---

{{APIRef("HTML DOM")}}

L'interface **`HTMLIFrameElement`** fournit des propriétés et des méthodes spéciales (en plus de celles de l'interface {{DOMxRef("HTMLElement")}} auxquelles elle peut accéder par héritage) pour manipuler la disposition et la présentation des éléments "en-ligne" d'un cadre.

{{InheritanceDiagram(600,120)}}

## Propriétés d'instance

_Hérite également des propriétés de son parent, {{DOMxRef("HTMLElement")}}_.

- `HTMLIFrameElement.align` {{Deprecated_Inline}}
  - : Une chaîne de caractères qui définit l'alignement du cadre par rapport au contexte environnant.
- {{DOMxRef("HTMLIFrameElement.allow")}}
  - : Une chaîne de caractères qui indique la [politique d'autorisations](/fr/docs/Web/HTTP/Guides/Permissions_Policy) définie pour ce `<iframe>`.
- {{DOMxRef("HTMLIFrameElement.allowfullscreen")}}
  - : Un booléen indiquant si le cadre intégré est prêt à être placé en mode plein écran. Voir [Utiliser le mode plein écran](/fr/docs/Web/API/Fullscreen_API) pour plus de détails.
- {{DOMxRef("HTMLIFrameElement.allowPaymentRequest")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Un booléen indiquant si l'[API Payment Request](/fr/docs/Web/API/Payment_Request_API) peut être appelée à l'intérieur d'un cadre intégré (<i lang="en">iframe</i> en anglais) inter-origine (<i lang="en">cross-origin</i> en anglais).
- {{DOMxRef("HTMLIFrameElement.browsingTopics")}} {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Une propriété booléenne indiquant que les sujets sélectionnés pour l'utilisateur·ice actuel·le doivent être envoyés avec la requête pour la source de l'élément HTML {{HTMLElement("iframe")}} associé. Cela reflète la valeur de l'attribut de contenu `browsingtopics`.
    {{DOMxRef("HTMLIFrameElement.contentDocument")}} {{ReadOnlyInline}}
  - : Retourne un objet {{DOMxRef("Document")}}, le document actif dans le contexte de navigation imbriqué du cadre intégré.
- {{DOMxRef("HTMLIFrameElement.contentWindow")}} {{ReadOnlyInline}}
  - : Retourne un {{Glossary("WindowProxy")}}, la fenêtre mandataire pour le contexte de navigation imbriqué.
- {{DOMxRef("HTMLIFrameElement.credentialless")}} {{Experimental_Inline}}
  - : Un booléen indiquant si un `<iframe>` est sans identifiants, ce qui signifie que son contenu est chargé dans un nouveau contexte éphémère. Ce contexte n'a pas accès au stockage partagé et aux identifiants du contexte parent. En contrepartie, les règles d'intégration du {{HTTPHeader("Cross-Origin-Embedder-Policy")}} (COEP) peuvent être levées, de sorte que les documents avec COEP défini peuvent intégrer des documents tiers qui ne le sont pas. Voir [IFrame sans identifiant](/fr/docs/Web/HTTP/Guides/IFrame_credentialless) pour une explication plus approfondie.
- {{DOMxRef("HTMLIFrameElement.csp")}} {{Experimental_Inline}}
  - : Définit la politique de sécurité du contenu qu'un document incorporé doit accepter d'appliquer à lui-même.
- {{DOMxRef("HTMLIFrameElement.featurePolicy")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Retourne l'interface {{DOMxRef("FeaturePolicy")}} qui fournit une API simple pour l'introspection des [politiques d'autorisations](/fr/docs/Web/HTTP/Guides/Permissions_Policy) appliquées à un document spécifique.
- `HTMLIFrameElement.frameBorder` {{Deprecated_Inline}}
  - : Est une chaîne de caractères qui indique s'il faut créer des bordures entre les cadres.
- {{DOMxRef("HTMLIFrameElement.height")}}
  - : Est une chaîne de caractères qui reflète l'attribut HTML [`height`](/fr/docs/Web/HTML/Reference/Elements/iframe#height) indiquant la hauteur du cadre.
- {{DOMxRef("HTMLIFrameElement.loading")}}
  - : Une chaîne de caractères fournissant une indication au navigateur que le cadre intégré (<i lang="en">iframe</i> en anglais) doit être chargée immédiatement (`eager`) ou au besoin (`lazy`).
    Cela reflète l'attribut HTML [`loading`](/fr/docs/Web/HTML/Reference/Elements/iframe#loading).
- `HTMLIFrameElement.longDesc` {{Deprecated_Inline}}
  - : Est une chaîne de caractères qui contient l'URI d'une description longue du cadre.
- `HTMLIFrameElement.marginHeight` {{Deprecated_Inline}}
  - : Est une chaîne de caractères représentant la hauteur de la marge du cadre.
- `HTMLIFrameElement.marginWidth` {{Deprecated_Inline}}
  - : Est une chaîne de caractères représentant la largeur de la marge du cadre.
- {{DOMxRef("HTMLIFrameElement.name")}}
  - : Est une chaîne de caractères qui reflète l'attribut HTML [`name`](/fr/docs/Web/HTML/Reference/Elements/iframe#name) contenant un nom permettant de faire référence au cadre.
- {{DOMxRef("HTMLIFrameElement.privateToken")}} {{Experimental_Inline}}
  - : Une représentation sous forme de chaîne de caractères d'un objet d'options représentant une opération de [jeton d'état privé](/fr/docs/Web/API/Private_State_Token_API/Using)&nbsp;; cet objet a la même structure que la propriété [`privateToken`](/fr/docs/Web/API/RequestInit#privatetoken) du dictionnaire `RequestInit`. Reflète le contenu de l'attribut [`privateToken`](/fr/docs/Web/HTML/Reference/Elements/iframe#privatetoken) de l'élément `<iframe>` associé.
- {{DOMxRef("HTMLIFrameElement.referrerPolicy")}}
  - : Est une chaîne de caractères qui reflète l'attribut HTML [`referrerPolicy`](/fr/docs/Web/HTML/Reference/Elements/iframe#referrerpolicy) attribut HTML indiquant le référent à utiliser lors de l'extraction de la ressource liée.
- {{DOMxRef("HTMLIFrameElement.sandbox")}}
  - : Retourne un objet {{DOMxRef("DOMTokenList")}} qui reflète l'attribut [`sandbox`](/fr/docs/Web/HTML/Reference/Elements/iframe#sandbox) indiquant des restrictions supplémentaires sur le comportement du contenu imbriqué.
- `HTMLIFrameElement.scrolling` {{Deprecated_Inline}}
  - : Est une chaîne de caractères qui indique si le navigateur doit fournir des barres de défilement pour le cadre.
- {{DOMxRef("HTMLIFrameElement.src")}}
  - : Est une chaîne de caractères qui reflète l'attribut HTML [`src`](/fr/docs/Web/HTML/Reference/Elements/iframe#src) contenant l'adresse du contenu à intégrer. Notez que la suppression programmatique de l'attribut src d'un `<iframe>` (par exemple via {{DOMxRef("Element.removeAttribute()")}}) entraîne le chargement de `about:blank` dans le cadre dans Firefox (à partir de la version 65), les navigateurs basés sur Chromium et Safari/iOS.
- {{DOMxRef("HTMLIFrameElement.srcdoc")}}
  - : Est une chaîne de caractères qui représente le contenu à afficher dans le cadre.
- {{DOMxRef("HTMLIFrameElement.width")}}
  - : Est une chaîne de caractères qui reflète l'attribut HTML [`width`](/fr/docs/Web/HTML/Reference/Elements/iframe#width) indiquant la largeur du cadre.

## Méthodes d'instance

_Hérite également des méthodes de son parent, {{DOMxRef("HTMLElement")}}_.

- {{DOMxRef("HTMLIFrameElement.getSVGDocument()")}}
  - : Retourne le SVG intégré en tant que {{DOMxRef("Document")}}.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément HTML implémentant cette interface&nbsp;: {{HTMLElement("iframe")}}
