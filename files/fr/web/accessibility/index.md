---
title: Accessibilité
slug: Web/Accessibility
l10n:
  sourceCommit: 04158640487c17d515de8078c9307a2f906377d0
---

**L'accessibilité** (souvent abrégée en **A11y** — c'est-à-dire «&nbsp;a&nbsp;», puis 11 caractères, puis «&nbsp;y&nbsp;») en développement web consiste à permettre au plus grand nombre d'utiliser les sites web, même lorsque les capacités des personnes sont limitées d'une manière ou d'une autre.

Pour beaucoup de personnes, la technologie facilite les choses. Pour les personnes en situation de handicap, la technologie rend les choses possibles. L'accessibilité consiste à développer des contenus aussi accessibles que possible, quelles que soient les capacités physiques et cognitives de chacun·e et la façon dont on accède au web.

> **Le Web est fondamentalement conçu pour fonctionner pour tout le monde**, quel que soit leur matériel, logiciel, langue, lieu ou capacité.
> Lorsque le Web atteint cet objectif, il est accessible à des personnes ayant une grande diversité de capacités auditives, motrices, visuelles et cognitives. \
> – ([W3C - Accessibilité](https://www.w3.org/standards/webdesign/accessibility))

## Tutoriels pour les débutant·e·s

Notre [module Accessibilité de la section Apprendre le développement web](/fr/docs/Learn_web_development/Core/Accessibility) propose des tutoriels modernes et à jour sur les fondamentaux de l'accessibilité.

- [Qu'est-ce que l'accessibilité&nbsp;?](/fr/docs/Learn_web_development/Core/Accessibility/What_is_accessibility)
  - : Cet article introduit le module en expliquant ce qu'est l'accessibilité&nbsp;: quels groupes de personnes il faut prendre en compte et pourquoi, quels outils différentes personnes utilisent pour interagir avec le web, et comment intégrer l'accessibilité dans votre flux de travail de développement web.
- [Outils d'accessibilité et technologies d'assistance](/fr/docs/Learn_web_development/Core/Accessibility/Tooling)
  - : Cette partie présente les outils permettant de résoudre les problèmes d'accessibilité, ainsi que les technologies d'assistance utilisées par les personnes en situation de handicap pour naviguer sur le web. Vous utiliserez ces outils tout au long des articles suivants.
- [HTML&nbsp;: une bonne base pour l'accessibilité](/fr/docs/Learn_web_development/Core/Accessibility/HTML)
  - : Une grande partie du contenu web peut être rendue accessible simplement en utilisant les bons éléments HTML pour le bon usage. Cet article détaille comment utiliser HTML pour garantir une accessibilité maximale.
- [Bonnes pratiques d'accessibilité CSS et JavaScript](/fr/docs/Learn_web_development/Core/Accessibility/CSS_and_JavaScript)
  - : CSS et JavaScript, bien utilisés, permettent aussi de créer des expériences web accessibles, mais s'ils sont mal employés, ils peuvent nuire à l'accessibilité. Cet article présente des bonnes pratiques CSS et JavaScript à suivre pour garantir que même les contenus complexes restent accessibles.
- [Bases de WAI-ARIA](/fr/docs/Learn_web_development/Core/Accessibility/WAI-ARIA_basics)
  - : Parfois, créer des contrôles d'interface complexes avec du HTML peu sémantique et du contenu dynamique mis à jour par JavaScript peut être difficile. WAI-ARIA est une technologie qui ajoute des sémantiques supplémentaires reconnues par les navigateurs et les technologies d'assistance. Cette partie montre comment l'utiliser simplement pour améliorer l'accessibilité.
- [Médias accessibles](/fr/docs/Learn_web_development/Core/Accessibility/Multimedia)
  - : Les contenus multimédias (vidéo, audio, image) peuvent poser des problèmes d'accessibilité. Il faut leur fournir des alternatives textuelles adaptées pour qu'ils soient compris par les technologies d'assistance et leurs utilisateur·ice·s. Cet article explique comment faire.
- [Accessibilité mobile](/fr/docs/Learn_web_development/Core/Accessibility/Mobile)
  - : L'accès au web sur mobile étant très répandu, et les plateformes comme iOS et Android disposant d'outils d'accessibilité complets, il est important de penser à l'accessibilité de vos contenus web sur ces supports. Cet article présente les points d'attention spécifiques au mobile.

## Guides sur l'accessibilité

Les [guides sur l'accessibilité](/fr/docs/Web/Accessibility/Guides) couvrent les principes d'écriture, la conformité WCAG, les widgets et la navigation accessibles, l'accessibilité mobile et d'autres sujets clés pour comprendre pourquoi l'accessibilité est cruciale sur le web et comment l'améliorer dans vos projets.

- [Informations sur l'accessibilité pour les auteur·ice·s web](/fr/docs/Web/Accessibility/Guides/Information_for_Web_authors)
  - : Ce document liste les recommandations, réglementations, tutoriels et outils pour vérifier et corriger les problèmes d'accessibilité sur les sites web.
- [Personnalisation pour une navigation plus sûre](/fr/docs/Web/Accessibility/Guides/Browsing_safely)
  - : Cet article explique comment rendre le contenu web accessible aux personnes souffrant de troubles vestibulaires, et à celles qui les accompagnent, en tirant parti des options de personnalisation et des réglages d'accessibilité intégrés aux systèmes d'exploitation.
- [Applications web et widgets accessibles](/fr/docs/Web/Accessibility/Guides/Accessible_web_applications_and_widgets)
  - : La plupart des bibliothèques JavaScript proposent des widgets côté client qui imitent le comportement d'interfaces bureautiques connues. Mais il manque souvent des informations sémantiques dans le balisage pour qu'ils soient utilisables par les technologies d'assistance. Ce document décrit des techniques pour améliorer l'accessibilité de ces widgets.
- [Widgets JavaScript accessibles au clavier](/fr/docs/Web/Accessibility/Guides/Keyboard-navigable_JavaScript_widgets)
  - : Jusqu'à récemment, les développeur·euse·s web souhaitant rendre accessibles leurs widgets stylisés en `<div>` ou `<span>` manquaient de techniques adaptées. **L'accessibilité clavier** fait partie des exigences minimales à connaître. Ce document décrit comment rendre les widgets JavaScript accessibles au clavier.
- [Liste de vérification pour l'accessibilité mobile](/fr/docs/Web/Accessibility/Guides/Mobile_accessibility_checklist)
  - : Ce document propose une liste concise des exigences d'accessibilité à destination des développeur·euse·s d'applications mobiles.
- [Comprendre les Web Content Accessibility Guidelines (WCAG)](/fr/docs/Web/Accessibility/Guides/Understanding_WCAG)
  - : Une série d'articles qui expliquent rapidement les étapes à suivre pour se conformer aux recommandations des Web Content Accessibility Guidelines (WCAG).
- [Accessibilité cognitive](/fr/docs/Web/Accessibility/Guides/Cognitive_accessibility)
  - : L'accessibilité cognitive concerne les personnes ayant des troubles cognitifs ou d'apprentissage. Ce document introduit l'accessibilité cognitive et comment améliorer l'accès au web pour ces publics.
- [Accessibilité et motifs spatiaux](/fr/docs/Web/Accessibility/Guides/Accessibility_and_Spatial_Patterns)
  - : Ce document décrit des motifs visuels pouvant provoquer des symptômes physiques chez les personnes souffrant d'épilepsie photosensible, de troubles vestibulaires ou d'autres troubles perceptifs.
- [Accessibilité web&nbsp;: comprendre les couleurs et la luminance](/fr/docs/Web/Accessibility/Guides/Colors_and_Luminance)
  - : Comprendre la couleur, la luminance et la saturation est important pour la conception et la lisibilité pour tous les utilisateurs voyants, mais c'est essentiel pour les personnes malvoyantes, daltoniennes ou ayant des troubles neurologiques, cognitifs ou autres.
- [Accessibilité web pour les crises et réactions physiques](/fr/docs/Web/Accessibility/Guides/Seizure_disorders)
  - : Certains contenus visuels web peuvent provoquer des crises chez des personnes atteintes de troubles cérébraux. Cet article aide à comprendre les contenus à risque et à trouver des outils et stratégies pour les éviter.
- [ARIA](/fr/docs/Web/Accessibility/ARIA)
  - : Une collection d'articles pour apprendre à utiliser ARIA (<i lang="en">Accessible Rich Internet Applications</i>) afin de rendre vos documents HTML plus accessibles.

## Références

- [Référence ARIA](/fr/docs/Web/Accessibility/ARIA/Reference)
  - : Documentation de référence sur les attributs et rôles ARIA (<i lang="en">Accessible Rich Internet Applications</i>).

## Voir aussi

- [Guides pour les développeur·euse·s](/fr/docs/MDN/Guides)
- [WAI Interest Group <sup>(angl.)</sup>](https://www.w3.org/WAI/about/groups/waiig/)
