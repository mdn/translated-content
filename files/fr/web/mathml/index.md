---
title: MathML
slug: Web/MathML
l10n:
  sourceCommit: 9036ccca6d55b90913ca424e6706b0c9ed1fa93b
---

**Mathematical Markup Language (MathML)** est un langage basé sur [XML](/fr/docs/Web/XML) permettant de décrire des formules mathématiques.

[MathML <sup>(angl.)</sup>](https://w3c.github.io/mathml/) est à l'origine conçu comme une spécification générique pour les navigateurs, les suites bureautiques, [les systèmes de calcul formel](https://fr.wikipedia.org/wiki/Système_de_calcul_formel), les lecteurs [EPUB <sup>(angl.)</sup>](https://www.w3.org/publishing/epub33/), les générateurs vers [LaTeX](https://fr.wikipedia.org/wiki/LaTeX)… Toutefois, cette approche n'est pas adaptée au Web&nbsp;: [le sous-ensemble concernant la sémantique <sup>(angl.)</sup>](https://w3c.github.io/mathml/#contm) n'a jamais été implémenté dans les navigateurs tandis que [le sous-ensemble sur la disposition mathématique <sup>(angl.)</sup>](https://w3c.github.io/mathml/#presm) a conduit à des implémentations incomplètes et/ou incohérentes par les navigateurs.

[<i lang="en">MathML Core</i> <sup>(angl.)</sup>](https://w3c.github.io/mathml-core/) est un sous-ensemble avec des détails d'implémentation plus précis, basés sur des règles provenant de [LaTeX](https://fr.wikipedia.org/wiki/LaTeX) et du [format Open Font <sup>(angl.)</sup>](https://docs.microsoft.com/en-us/typography/opentype/spec/math). Il est conçu pour les navigateurs et pour fonctionner en accord avec les autres standards du Web que sont [HTML](/fr/docs/Web/HTML), [CSS](/fr/docs/Web/CSS), [DOM](/fr/docs/Web/API/Document_Object_Model), et [JavaScript](/fr/docs/Web/JavaScript).

Vous pouvez trouver ci-dessous des liens vers de la documentation, des exemples et des outils permettant d'utiliser MathML. MDN utilise [le noyau MathML <sup>(angl.)</sup>](https://w3c.github.io/mathml-core/) comme spécification de référence mais, en raison d'un parcours de standardisation irrégulier, certaines fonctionnalités MathML héritées peuvent encore apparaître dans des implémentations et des contenus web existants.

> [!NOTE]
> Comme il est fortement recommandé que les développeur·euse·s et les auteur·ice·s passent à MathML Core, peut-être en s'appuyant sur d'autres technologies web pour couvrir les cas d'utilisation manquants. Le groupe de travail Math maintient un ensemble de [prothèses d'émulation MathML <sup>(angl.)</sup>](https://github.com/w3c/mathml-polyfills) pour faciliter cette transition.

## Tutoriels

Les [tutoriels MathML](/fr/docs/Web/MathML/Tutorials) sont conçus pour vous guider à travers les sujets en supposant que vous n'avez aucune expérience préalable, en commençant par les bases et en progressant vers des techniques plus avancées.

- [MathML pour les débutant·e·s](/fr/docs/Web/MathML/Tutorials/For_beginners)
  - : Ce tutoriel vous guide dans la création de formules mathématiques en utilisant un balisage structuré. Il commence par une introduction à l'ajout de MathML dans un document HTML, suivie d'une exploration approfondie des composants clés&nbsp;: fractions et racines, éléments scriptés et conteneurs de texte. Le tutoriel couvre ensuite les mises en page tabulaires pour les matrices et le formatage mathématique avancé. Enfin, un défi teste votre compréhension en vous demandant de recréer trois formules mathématiques célèbres en utilisant les concepts appris.

## Guides

Les [guides MathML](/fr/docs/Web/MathML/Guides) sont des ressources qui vous aident à créer du contenu MathML sur vos pages web, y compris des conseils sur l'écriture, les éditeurs, les polices et plus encore.

- [Rédiger du MathML](/fr/docs/Web/MathML/Guides/Authoring)
  - : Suggestions et conseils pour rédiger du MathML, y compris des éditeurs MathML recommandés et comment intégrer leur sortie dans le contenu Web.
- [Polices pour MathML](/fr/docs/Web/MathML/Guides/Fonts)
  - : Comment les utilisateur·ice·s peuvent installer ces polices mathématiques pour afficher correctement MathML dans les navigateurs.

## Référence

La [référence MathML](/fr/docs/Web/MathML/Reference) est une liste complète des éléments et attributs MathML documentés sur MDN.

- [Référence d'élément MathML](/fr/docs/Web/MathML/Reference/Element)
  - : Détails sur chaque élément MathML et informations de compatibilité pour les navigateurs de bureau et mobiles.
- [Référence des attributs universels MathML](/fr/docs/Web/MathML/Reference/Global_attributes)
  - : Informations sur les attributs universels MathML applicables à tous les éléments.
- [Référence des attributs MathML](/fr/docs/Web/MathML/Reference/Attribute)
  - : Informations sur les attributs MathML qui modifient l'apparence ou le comportement des éléments.
- [Valeurs des attributs MathML](/fr/docs/Web/MathML/Reference/Values)
  - : Informations complémentaires sur les valeurs des attributs MathML.

## Exemples

Vous trouvez ci-dessous quelques exemples que vous pouvez consulter pour vous aider à comprendre comment utiliser MathML.

### Formules MathML

Les démonstrations suivantes présentent des concepts mathématiques de complexité croissante dans le contenu Web.

- [Démontrer le théorème de Pythagore](/fr/docs/Web/MathML/Guides/Proving_the_Pythagorean_theorem)
  - Petit exemple montrant une démonstration du théorème de Pythagore.
- [Dérivation de la formule quadratique](/fr/docs/Web/MathML/Guides/Deriving_the_quadratic_formula)
  - : Présente la dérivation de la formule quadratique.
- [Test MathML de Mozilla <sup>(angl.)</sup>](https://fred-wang.github.io/MathFonts/mozilla_mathml_test/)
  - : Test original du projet MathML de Mozilla. Il contient des exemples tirés du [TeXbook <sup>(angl.)</sup>](https://en.wikipedia.org/wiki/Computers_and_Typesetting) avec des références d'images générées par TeX.

### Autres technologies Web

Les démonstrations suivantes mélangent MathML avec d'autres technologies Web pour produire du contenu avancé.

- [Élément personnalisé `<la-tex>` <sup>(angl.)</sup>](https://fred-wang.github.io/TeXZilla/examples/customElement.html)
  - : Un [élément personnalisé](/fr/docs/Web/API/Web_components/Using_custom_elements) qui accepte du contenu [LaTeX <sup>(angl.)</sup>](https://en.wikipedia.org/wiki/LaTeX).
- [Démo du champ magnétique <sup>(angl.)</sup>](https://fred-wang.github.io/TeXZilla/examples/toImageWebGL.html)
  - : Une représentation 3D d'un champ magnétique, utilisant [SVG](/fr/docs/Web/SVG) et [WebGL](/fr/docs/Web/API/WebGL_API).
- [<i lang="el-GR">Συνάρτηση ζήτα Ρήμαν</i> <sup>(grec)</sup>)](https://fred-wang.github.io/MathFonts/%CE%A3%CF%85%CE%BD%CE%AC%CF%81%CF%84%CE%B7%CF%83%CE%B7_%CE%B6%CE%AE%CF%84%CE%B1_%CE%A1%CE%AE%CE%BC%CE%B1%CE%BD.html)
  - : Un article grec sur la fonction zêta de Riemann, avec des [polices Web](/fr/docs/Learn_web_development/Core/Text_styling/Web_fonts) de la [Société des polices grecques <sup>(grec)</sup>](https://greekfontsociety-gfs.gr/).
- [Équation de Pell <sup>(angl.)</sup>](https://people.igalia.com/fwang/pell-bigint-mathml/)
  - : Un programme JavaScript pour résoudre l'équation de Pell en utilisant [`BigInt`](/fr/docs/Web/JavaScript/Reference/Global_Objects/BigInt).
- [Programme de Lovelace pour les nombres de Bernoulli <sup>(angl.)</sup>](https://people.igalia.com/fwang/lovelace-jsclass-mathml/)
  - : Un émulateur pour le programme d'Ada Lovelace afin de calculer les nombres de Bernoulli, utilisant des [éléments privés](/fr/docs/Web/JavaScript/Reference/Classes/Private_elements).

## Obtenir de l'aide de la communauté

- [La page d'accueil de W3C Math](https://www.w3.org/Math/)
- [Signaler des problèmes sur le dépôt GitHub w3c/mathml <sup>(angl.)</sup>](https://github.com/w3c/mathml/issues)
- [Archive des mails www-math w3.org <sup>(angl.)</sup>](https://lists.w3.org/Archives/Public/www-math/)

## Outils

- [Le validateur W3C <sup>(angl.)</sup>](https://validator.w3.org)
- [Page wiki de la W3C <sup>(angl.)</sup>](https://www.w3.org/wiki/Math_Tools)

## Sujets associés

- [CSS](/fr/docs/Web/CSS)
- [HTML](/fr/docs/Web/HTML)
- [SVG](/fr/docs/Web/SVG)

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
