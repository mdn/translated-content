---
title: HTML (HyperText Markup Language)
slug: Web/HTML
---

{{HTMLSidebar}}

**HTML** signifie « _HyperText Markup Language_ » qu'on peut traduire par « langage de balises pour l'hypertexte ». Il est utilisé afin de créer et de représenter le contenu d'une page web et sa structure. D'autres technologies sont utilisées avec HTML pour décrire la présentation d'une page ([CSS](/fr/docs/Web/CSS)) et/ou ses fonctionnalités interactives ([JavaScript](/fr/docs/Web/JavaScript)).

L'« hypertexte » désigne les liens qui relient les pages web entre elles, que ce soit au sein d'un même site web ou entre différents sites web. Les liens sont un aspect fondamental du Web. Ce sont eux qui forment cette « toile » (ce mot est traduit par _web_ en anglais). En téléchargeant du contenu sur l'Internet et en le reliant à des pages créées par d'autres personnes, vous devenez un participant actif du World Wide Web.

Le langage HTML utilise des « balises » pour annoter du texte, des images et d'autres contenus afin de les afficher dans un navigateur web. Le balisage HTML comprend des « éléments » spéciaux tels que [`<head>`](/fr/docs/Web/HTML/Element/head), [`<title>`](/fr/docs/Web/HTML/Element/title), [`<body>`](/fr/docs/Web/HTML/Element/body), [`<header>`](/fr/docs/Web/HTML/Element/header), [`<footer>`](/fr/docs/Web/HTML/Element/footer), [`<article>`](/fr/docs/Web/HTML/Element/article), [`<section>`](/fr/docs/Web/HTML/Element/section), [`<p>`](/fr/docs/Web/HTML/Element/p), [`<div>`](/fr/docs/Web/HTML/Element/div), [`<span>`](/fr/docs/Web/HTML/Element/span), [`<img>`](/fr/docs/Web/HTML/Element/Img), [`<aside>`](/fr/docs/Web/HTML/Element/aside), [`<audio>`](/fr/docs/Web/HTML/Element/audio), [`<canvas>`](/fr/docs/Web/HTML/Element/canvas), [`<datalist>`](/fr/docs/Web/HTML/Element/datalist), [`<details>`](/fr/docs/Web/HTML/Element/details), [`<embed>`](/fr/docs/Web/HTML/Element/embed), [`<nav>`](/fr/docs/Web/HTML/Element/nav), [`<output>`](/fr/docs/Web/HTML/Element/output), [`<progress>`](/fr/docs/Web/HTML/Element/Progress), [`<video>`](/fr/docs/Web/HTML/Element/video), [`<ul>`](/fr/docs/Web/HTML/Element/ul), [`<ol>`](/fr/docs/Web/HTML/Element/ol), [`<li>`](/fr/docs/Web/HTML/Element/li) et bien d'autres.

En HTML, les balises sont insensibles à la casse et peuvent aussi bien être écrites en minuscules, en majuscules voire avec un mélange des deux. Autrement dit, la balise `<title>` pourrait très bien être écrite comme `<Title>`, `<TiTle>` ou d'une autre façon.

Les articles suivants fournissent des éléments de référence utiles au développement web.

## Ressources clés

- Introduction au HTML
  - : Vous faites vos premiers pas dans le développement web ? [Nos articles sur les bases de HTML](/fr/docs/Learn/Getting_started_with_the_web/HTML_basics) expliquent ce qu'est HTML et comment l'utiliser.
- Tutoriels HTML
  - : Pour plus d'informations sur l'utilisation du HTML, des tutoriels et des exemples complets, vous pouvez consulter [notre section Apprendre HTML](/fr/docs/Learn/HTML).
- Référence HTML
  - : Dans notre [référence exhaustive](/fr/docs/Web/HTML/Reference), vous trouverez le détail de chaque élément et attribut constituant HTML.

> **Remarque :**
>
> #### Vous cherchez à devenir un développeur web front-end ?
>
> Nous avons élaboré un cours qui comprend toutes les informations essentielles dont vous avez besoin pour atteindre votre objectif.
>
> [Commencer](/fr/docs/Learn/Front-end_web_developer)

## Tutoriels pour les débutants

La section [Apprendre HTML](/fr/docs/Learn/HTML) contient plusieurs modules pour vous apprendre à utiliser HTML — sans autre connaissance particulière.

- [Une introduction à HTML](/fr/docs/Learn/HTML/Introduction_to_HTML)
  - : Dans ce module, on brosse un premier portrait de HTML pour présenter les concepts importants, la syntaxe. On voit comment appliquer HTML sur du texte, comment créer des hyperliens et comment structurer une page web grâce à HTML.
- [Le multimédia et l'intégration](/fr/docs/Learn/HTML/Multimedia_and_embedding)
  - : Dans ce module, on explore comment utiliser HTML pour intégrer des fichiers multimédias dans une page web. Cela couvre les différentes façons d'inclure une image, comment ajouter une vidéo ou un fichier audio voire aussi comment intégrer d'autres pages web.
- [Les tableaux HTML](/fr/docs/Learn/HTML/Tables)
  - : Il est parfois compliqué de représenter des données tabulaires de façon compréhensible et lisible sur une page web. Dans ce module, on voit les différentes balises utilisées pour construire des tableaux et certaines fonctionnalités plus complexes comme les légendes et résumés.
- [Les formulaires HTML](/fr/docs/Learn/Forms)
  - : Les formulaires sont cruciaux sur le Web, ils permettent de créer un compte sur un site, de se connecter, d'acheter des produits, d'écrire des commentaires, etc. Dans ce module, on voit comment créer des formulaires pour le navigateur (« côté client »).
- [Utiliser HTML pour résoudre des problèmes courants](/fr/docs/Learn/HTML/Howto)
  - : Ce module fournit un ensemble d'articles au sujet des problèmes qu'on rencontre fréquemment lorsqu'on crée une page web : gérer les titres, ajouter des images ou des vidéos, mettre en avant une partie du texte, créer un formulaire, etc.

## Sujets avancés

- [Images avec le contrôle d'accès HTTP](/fr/docs/Web/HTML/CORS_enabled_image)
  - : L'attribut [`crossorigin`](/fr/docs/Web/HTML/Element/Img#attr-crossorigin), associé à un en-tête [CORS](/fr/docs/Glossary/CORS) approprié, permet de charger des images définies par l'élément [`<img>`](/fr/docs/Web/HTML/Element/Img) depuis des origines étrangères et de les utiliser dans un élément [`<canvas>`](/fr/docs/Web/HTML/Element/canvas) comme si elles étaient chargées depuis l'origine actuelle.
- [Attributs de réglage du CORS](/fr/docs/Web/HTML/Attributes/crossorigin)
  - : Certains éléments HTML qui fournissent un support pour [CORS](/fr/docs/Web/HTTP/CORS), tels que [`<img>`](/fr/docs/Web/HTML/Element/Img) ou [`<video>`](/fr/docs/Web/HTML/Element/video), ont un attribut `crossorigin` (propriété `crossOrigin`), qui vous permet de configurer les requêtes CORS pour les données extraites de l'élément.
- [Précharger du contenu avec `rel="preload"`](/fr/docs/Web/HTML/Preloading_content)
  - : La valeur `preload` de l'attribut [`<link>`](/fr/docs/Web/HTML/Element/link) de l'élément [`rel`](/fr/docs/Web/HTML/Element/link#attr-rel) vous permet d'écrire des requêtes déclaratives de récupération dans votre [`<head>`](/fr/docs/Web/HTML/Element/head) HTML, en spécifiant les ressources dont vos pages auront besoin très rapidement après le chargement, et que vous souhaitez donc commencer à précharger au début du cycle de vie d'une page, avant que le cycle de rendu du navigateur ne se mette en marche. Cela permet de s'assurer que ces éléments sont disponibles plus tôt et qu'ils risquent moins de bloquer le premier rendu de la page, améliorant ainsi les performances. Cet article fournit un guide de base sur le fonctionnement du `preload`.

## Références

- [Référence HTML](/fr/docs/Web/HTML/Reference)
  - : HTML est un langage décrivant la structure et le contenu sémantique d'un document web. Il est constitué d'**éléments**, chacun pouvant être paramétré grâce à différents **attributs**. Les documents HTML sont connectés à d'autres via des [liens](/fr/docs/Web/HTML/Link_types)
- [Référence des éléments HTML](/fr/docs/Web/HTML/Element)
  - : Cette page liste les différents éléments HTML.
- [Liste des attributs HTML](/fr/docs/Web/HTML/Attributes)
  - : Les éléments du langage HTML possèdent des **attributs**. Il s'agit de valeurs supplémentaires qui configurent les éléments ou ajustent leur comportement de diverses manières.
- [Attributs universels](/fr/docs/Web/HTML/Global_attributes)
  - : Les attributs universels peuvent être spécifiés sur tous les [éléments HTML](/fr/docs/Web/HTML/Element), _même ceux qui ne sont pas spécifiés dans la norme_. Par exemple, les navigateurs qui prennent en charge HTML5 masquent les contenus marqués comme `<toto hidden>…<toto>` , bien que `<toto>` ne soit pas un élément valide HTML.
- [Éléments en ligne](/fr/docs/Web/HTML/Inline_elements) et [éléments de bloc](/fr/docs/Web/HTML/Block-level_elements)
  - : Les éléments HTML sont habituellement des éléments « en ligne » ou des éléments de bloc. Un élément en ligne occupe seulement l'espace associé aux balises. Les éléments de bloc sont une catégorie d'éléments HTML opposés aux éléments en ligne. Leur caractéristique principale réside dans le fait qu'ils sont séparés par un saut de ligne avant et après l'élément. Ce faisant, ils prennent la largeur de leurs conteneurs (créant ainsi un bloc de contenu).
- [Types de lien](/fr/docs/Web/HTML/Link_types)
  - : Les différents liens permettent de décrire les relations entre deux documents qui sont reliés entre eux par un élément [`<a>`](/fr/docs/Web/HTML/Element/a), [`<area>`](/fr/docs/Web/HTML/Element/area) ou [`<link>`](/fr/docs/Web/HTML/Element/link).
- [Formats de média audio et vidéo pris en charge par HTML](/fr/docs/Web/Media/Formats)
  - : Les éléments [`<audio>`](/fr/docs/Web/HTML/Element/audio) et [`<video>`](/fr/docs/Web/HTML/Element/video) permettent d'ajouter des médias audio et vidéo directement dans le navigateur (sans avoir à utiliser des plugins ou programmes tiers).
- [Types de contenu HTML](/fr/docs/Web/Guide/HTML/Content_categories)
  - : HTML s'organise selon différents types de contenu dont chacun peut être autorisé ou non en fonction du contexte. Ces catégories indiquent quels éléments peuvent être contenus ou non dans d'autres éléments. Cet article explique le fonctionnement de ces catégories.

## Sujets connexes

- [Appliquer des couleurs sur des éléments HTML grâce à CSS](/fr/docs/Web/HTML/Applying_color)
  - : Cet article couvre la plupart des façons d'utiliser CSS pour ajouter de la couleur au contenu HTML, en indiquant les parties des documents HTML qui peuvent être colorées et les propriétés CSS à utiliser pour ce faire. Il comprend des exemples, des liens vers des outils de création de palettes, etc.
