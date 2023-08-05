---
title: MathML
slug: Web/MathML
---

{{MathMLRef}}

**Mathematical Markup Language (MathML)** est un langage basé sur [XML](/fr/docs/Web/XML) permettant de décrire des formules mathématiques.

[MathML](https://w3c.github.io/mathml/) était à l'origine conçu comme une spécification générique pour les navigateurs, les suites bureautiques, [les systèmes de calcul formel](https://fr.wikipedia.org/wiki/Système_de_calcul_formel), les lecteurs [EPUB](https://www.w3.org/publishing/epub32/), les générateurs vers [LaTeX](https://fr.wikipedia.org/wiki/LaTeX)… Toutefois, cette approche n'était pas adaptée au Web&nbsp;: [le sous-ensemble concernant la sémantique](https://w3c.github.io/mathml/#contm) n'a jamais été implémenté dans les navigateurs tandis que [le sous-ensemble sur la disposition mathématique](https://w3c.github.io/mathml/#presm) a conduit à des implémentations incomplètes et/ou incohérentes par les navigateurs.

[<i lang="en">MathML Core</i>](https://w3c.github.io/mathml-core/) est un sous-ensemble avec des détails d'implémentation plus précis, basés sur des règles provenant de [LaTeX](https://en.wikipedia.org/wiki/LaTeX) et du [format Open Font](https://docs.microsoft.com/en-us/typography/opentype/spec/math). Il est conçu pour les navigateurs et pour fonctionner en accord avec les autres standards du Web que sont [HTML](/fr/docs/Web/HTML), [CSS](/fr/docs/Web/CSS), [DOM](/fr/docs/Web/API/Document_Object_Model), et [JavaScript](/fr/docs/Web/JavaScript).

Vous trouverez ici des liens vers la documentation, les exemples et les outils permettant de travailler avec cette technologie. Bien que nombre de ces ressources soient encore basées sur [<i lang="en">MathML Full</i>](https://w3c.github.io/mathml/), la transition vers [<i lang="en">MathML Core</i>](https://w3c.github.io/mathml-core/) est en cours. Il est recommandé d'utiliser cette nouvelle spécification pour le développement et l'édition sur le Web et de recourir à d'autres technologies web pour compléter les cas d'usages qui étaient uniquement couverts par l'ancienne spécification.

## Référence MathML

- [Référence des éléments MathML](/fr/docs/Web/MathML/Element)
  - : Des informations précises sur chaque élément MathML et leurs compatibilités avec les différents navigateurs.
- [Référence des attributs MathML](/fr/docs/Web/MathML/Attribute)
  - : Des informations sur les attributs MathML qui modifient l'apparence ou le comportement des éléments.
- [Exemples MathML](/fr/docs/Web/MathML/Examples)
  - : Des fragments de code MathML ainsi que des exemples pour comprendre son fonctionnement.
- [Éditer du MathML](/fr/docs/Web/MathML/Authoring)
  - : Des conseils sur l'édition de document en MathML&nbsp;: les éditeurs à utiliser et comment intégrer le code produit dans du contenu web.

## Obtenir de l'aide de la communauté

- [La page d'accueil de W3C Math](https://www.w3.org/Math/)
- [Les archives mail de www-math w3.org](https://lists.w3.org/Archives/Public/www-math/)
- [Le groupe Google mozilla.dev.tech.mathml (inactif depuis 2020)](https://groups.google.com/g/mozilla.dev.tech.mathml)
- [Le wiki utilisé par les contributrices et contributeurs de Mozilla (page éditée pour la dernière fois en 2016)](https://wiki.mozilla.org/MathML:Home_Page)

## Outils

- [Le validateur W3C](https://validator.w3.org)
- [L'ensemble d'extensions Mathzilla pour Firefox](https://addons.mozilla.org/fr/firefox/collections/5509895/mathzilla/)
- [TeXZilla](https://github.com/fred-wang/TeXZilla) — convertisseur JavaScript de LaTeX à MathML ([démo](http://fred-wang.github.io/TeXZilla/), [extension Firefox](https://addons.mozilla.org/fr/firefox/addon/texzilla/), [utilisation dans une page web, un programme JavaScript, etc.](https://github.com/fred-wang/TeXZilla/wiki/Using-TeXZilla))
- [LaTeXML](https://math.nist.gov/~BMiller/LaTeXML/) qui permet de transformer des documents LaTeX en pages HTML+MathML
- [MathJax](https://www.mathjax.org/) — moteur de rendu de JavaScript pour les formules mathématiques, compatible avec tous les navigateurs. Pour forcer MathJax à utiliser le MathML natif, essayez [cette extension Firefox](https://addons.mozilla.org/fr/firefox/addon/native-mathml/), ou [cette extension pour Safari](https://fred-wang.github.io/mathjax-native-mathml-safari/mathjax-native-mathml.safariextz) ou [ce script GreaseMonkey](https://openuserjs.org/scripts/fred.wang/MathJax_Native_MathML/).

## Sujets connexes

- [CSS](/fr/docs/Web/CSS)
- [HTML](/fr/docs/Web/HTML)
- [SVG](/fr/docs/Web/SVG)

## Compatibilité des navigateurs

{{Compat}}
