---
title: Informations sur l'accessibilité pour les auteurs de sites web
short-title: Informations pour les auteurs de sites web
slug: Web/Accessibility/Guides/Information_for_Web_authors
l10n:
  sourceCommit: 79f65d8322a4e55e9f3f4c91441c9188dbe670e0
---

Ce document liste les recommandations, réglementations, guides pratiques et outils pour vérifier et corriger les problèmes d'accessibilité sur les sites web.

## Recommandations et réglementations

- [Guide des pratiques d'implémentation <abbr>ARIA</abbr> (<abbr>APG</abbr>) <sup>(angl.)</sup>](https://www.w3.org/WAI/ARIA/apg/)
  - : Guide des sémantiques d'accessibilité définies par la spécification d'Application Internet Riche et Accessible (<i lang="en">Accessible Rich Internet Application</i> en anglais aussi abrégée <abbr>ARIA</abbr>) pour créer des expériences web accessibles. Décrit comment appliquer ces sémantiques à des modèles de conception courants et widgets, avec des exemples fonctionnels.
- [Règles pour l'accessibilité du contenu web (<abbr>WCAG</abbr>) <sup>(angl.)</sup>](https://www.w3.org/WAI/standards-guidelines/wcag/)
  - : Un autre ensemble important de recommandations du <i lang="en">W3C Web Accessibility Initiative</i> (<abbr>WAI</abbr>). L'Union européenne prévoit de baser ses futures réglementations sur ces règles. Elles sont discutées sur la [liste de discussion du groupe d'intérêt <abbr>WAI</abbr> <sup>(angl.)</sup>](https://www.w3.org/WAI/about/groups/waiig/#mailinglist).
- [ARIA sur ce site](/fr/docs/Web/Accessibility/ARIA)
  - : Guide <abbr>MDN</abbr> de tous les [rôles ARIA](/fr/docs/Web/Accessibility/ARIA/Reference/Roles) et [propriétés ARIA](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes), incluant bonnes pratiques, rôles et propriétés associés, et exemples.

## Guides pratiques

- [Accessibilité pour les équipes <sup>(angl.)</sup>](https://digital.gov/guides/accessibility-for-teams/)
  - : Un guide succinct de la <i lang="en">Technology Transformation Services</i> de l'administration américaine, couvrant plusieurs sujets d'accessibilité avec des liens vers des vidéos pratiques et des références WCAG associées.
- [Création de pages web accessibles <sup>(angl.)</sup>](https://www.ibm.com/able/requirements/requirements/)
  - : IBM a rendu publiques et interactives ses exigences d'accessibilité à respecter.

## Vérification et correction automatisées

Utilisez un outil pour vérifier rapidement les erreurs courantes dans votre navigateur.

- [HTML CodeSniffer <sup>(angl.)</sup>](https://squizlabs.github.io/HTML_CodeSniffer/)
- [aXe <sup>(angl.)</sup>](https://chromewebstore.google.com/detail/axe-devtools-web-accessib/lhdoppojpmngadmnindnejefpokejbdd?hl=fr)
- [Audit d'accessibilité Lighthouse <sup>(angl.)</sup>](https://developer.chrome.com/docs/lighthouse/overview/)
- [Accessibility Insights <sup>(angl.)</sup>](https://accessibilityinsights.io/)
- [<abbr>WAVE</abbr> <sup>(angl.)</sup>](https://wave.webaim.org/extension/)

Outils à intégrer dans votre processus de développement pour ajouter des tests d'accessibilité automatisés et détecter les erreurs au fil du développement&nbsp;:

- [axe-core <sup>(angl.)</sup>](https://github.com/dequelabs/axe-core)
- [jsx-a11y <sup>(angl.)</sup>](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y)
- [Lighthouse Audits <sup>(angl.)</sup>](https://github.com/GoogleChrome/lighthouse/blob/main/docs/readme.md#using-programmatically)
- [AccessLint.js <sup>(angl.)</sup>](https://github.com/accesslint/accesslint.js/tree/master)

Des outils {{glossary("Continuous integration", "d'intégration continue")}} permettent de détecter les problèmes d'accessibilité dans vos pull requests GitHub&nbsp;:

- [AccessLint <sup>(angl.)</sup>](https://accesslint.com/)

Il est préférable de tester vos applications web avec de vraies personnes, mais vous pouvez simuler le daltonisme, la basse vision, le contraste faible et le zoom. Testez toujours votre site sans souris ni tactile pour vérifier la navigation au clavier. Essayez aussi la navigation vocale. Désactivez la souris et utilisez des extensions comme [Web Disability Simulator <sup>(angl.)</sup>](https://chromewebstore.google.com/detail/web-disability-simulator/olioanlbgbpmdlgjnnampnnlohigkjla).
