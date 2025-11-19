---
title: "HTML : HyperText Markup Language"
short-title: HTML
slug: Web/HTML
l10n:
  sourceCommit: 04158640487c17d515de8078c9307a2f906377d0
---

**HTML** signifie «&nbsp;_HyperText Markup Language_&nbsp;» qu'on peut traduire par «&nbsp;langage de balises pour l'hypertexte&nbsp;». Il est utilisé afin de créer et de représenter le contenu d'une page web et sa structure. D'autres technologies sont utilisées avec HTML pour décrire la présentation d'une page ([CSS](/fr/docs/Web/CSS)) et/ou ses fonctionnalités interactives ([JavaScript](/fr/docs/Web/JavaScript)).

L'«&nbsp;hypertexte&nbsp;» désigne les liens qui relient les pages web entre elles, que ce soit au sein d'un même site web ou entre différents sites web. Les liens sont un aspect fondamental du Web. Ce sont eux qui forment cette «&nbsp;toile&nbsp;» (ce mot est traduit par _web_ en anglais). En téléchargeant du contenu sur l'Internet et en le reliant à des pages créées par d'autres personnes, vous devenez un participant actif du World Wide Web.

Le langage HTML utilise des «&nbsp;balises&nbsp;» pour annoter du texte, des images et d'autres contenus afin de les afficher dans un navigateur web. Le balisage HTML comprend des «&nbsp;éléments&nbsp;» spéciaux tels que {{HTMLElement("head")}}, {{HTMLElement("title")}}, {{HTMLElement("body")}}, {{HTMLElement("header")}}, {{HTMLElement("footer")}}, {{HTMLElement("article")}}, {{HTMLElement("section")}}, {{HTMLElement("p")}}, {{HTMLElement("div")}}, {{HTMLElement("span")}}, {{HTMLElement("img")}}, {{HTMLElement("aside")}}, {{HTMLElement("audio")}}, {{HTMLElement("canvas")}}, {{HTMLElement("datalist")}}, {{HTMLElement("details")}}, {{HTMLElement("embed")}}, {{HTMLElement("nav")}}, {{HTMLElement("search")}}, {{HTMLElement("output")}}, {{HTMLElement("progress")}}, {{HTMLElement("video")}}, {{HTMLElement("ul")}}, {{HTMLElement("ol")}}, {{HTMLElement("li")}} et bien d'autres.

En HTML, les balises sont insensibles à la casse et peuvent aussi bien être écrites en minuscules, en majuscules voire avec un mélange des deux. Autrement dit, la balise `<title>` pourrait très bien être écrite comme `<Title>`, `<TiTle>` ou d'une autre façon.

Les articles suivants fournissent des éléments de référence utiles au développement web.

## Tutoriels pour les débutant·e·s

Nos [modules de base pour apprendre le développement web](/fr/docs/Learn_web_development/Core) proposent des tutoriels modernes et à jour couvrant les fondamentaux de HTML.

- [Votre premier site web&nbsp;: création du contenu](/fr/docs/Learn_web_development/Getting_started/Your_first_website/Creating_the_content)
  - : Cet article propose une brève introduction à ce qu'est HTML et à son utilisation, destiné aux personnes totalement débutantes en développement web.
- [Structurer le contenu avec HTML](/fr/docs/Learn_web_development/Core/Structuring_content)
  - : Ce module aborde les bases du langage HTML, puis les domaines clés comme la structure des documents, les liens, les listes, les images, les formulaires et plus encore.

## Guides

Les [guides HTML](/fr/docs/Web/HTML/Guides) vous aident à construire avec HTML sur le Web, couvrant des sujets comme les formulaires, CORS, le préchargement de contenu et les images réactives.

- [Formulaires HTML](/fr/docs/Learn_web_development/Extensions/Forms)
  - : Les formulaires sont une partie très importante du Web&nbsp;: ils fournissent une grande partie des fonctionnalités nécessaires pour interagir avec les sites web (inscription, connexion, envoi de commentaires, achat de produits, etc.). Ce module vous initie à la création de la partie client/«&nbsp;front-end&nbsp;» des formulaires.
- [Image avec CORS activé](/fr/docs/Web/HTML/How_to/CORS_enabled_image)
  - : L'attribut [`crossorigin`](/fr/docs/Web/HTML/Reference/Elements/img#crossorigin), combiné à un en-tête {{glossary("CORS")}} approprié, permet de charger des images définies par l'élément {{HTMLElement("img")}} depuis des origines externes et de les utiliser dans un élément {{HTMLElement("canvas")}} comme si elles étaient chargées depuis l'origine courante.
- [Attributs de configuration CORS](/fr/docs/Web/HTML/Reference/Attributes/crossorigin)
  - : Certains éléments HTML qui prennent en charge [CORS](/fr/docs/Web/HTTP/Guides/CORS), comme {{HTMLElement("img")}} ou {{HTMLElement("video")}}, possèdent un attribut `crossorigin` (propriété `crossOrigin`), qui permet de configurer les requêtes CORS pour les données récupérées par l'élément.
- [Précharger du contenu avec rel="preload"](/fr/docs/Web/HTML/Reference/Attributes/rel/preload)
  - : La valeur `preload` de l'attribut [`rel`](/fr/docs/Web/HTML/Reference/Elements/link#rel) de l'élément {{htmlelement("link")}} permet d'écrire des requêtes de récupération déclaratives dans votre {{htmlelement("head")}} HTML, en spécifiant les ressources dont vos pages auront besoin très rapidement après le chargement. Vous pouvez ainsi commencer à précharger ces ressources tôt dans le cycle de chargement, avant que le moteur principal de rendu du navigateur ne démarre. Cela garantit leur disponibilité plus tôt et réduit le risque de bloquer le premier affichage de la page, ce qui améliore les performances. Cet article propose un guide de base sur le fonctionnement de `preload`.
- [Images réactives](/fr/docs/Web/HTML/Guides/Responsive_images)
  - : Cet article présente le concept d'images réactives&nbsp;: des images qui s'adaptent aux appareils ayant des tailles d'écran, des résolutions et d'autres caractéristiques très variées. Il présente aussi les outils HTML permettant de les mettre en œuvre, afin d'améliorer les performances sur différents appareils.

## Référence

- [Référence HTML](/fr/docs/Web/HTML/Reference)
  - : HTML est composé d'**éléments**, chacun pouvant être modifié par un certain nombre d'**attributs**. Les documents HTML sont reliés entre eux par des **liens**.
- [Référence des éléments HTML](/fr/docs/Web/HTML/Reference/Elements)
  - : Parcourez la liste de tous les {{glossary("Element", "éléments")}} {{glossary("HTML")}}.
- [Référence des attributs HTML](/fr/docs/Web/HTML/Reference/Attributes)
  - : Les éléments HTML possèdent des **attributs**. Ce sont des valeurs supplémentaires qui configurent les éléments ou modifient leur comportement de différentes manières.
- [Attributs globaux](/fr/docs/Web/HTML/Reference/Global_attributes)
  - : Les attributs globaux peuvent être spécifiés sur tous les [éléments HTML](/fr/docs/Web/HTML/Reference/Elements), _même ceux non spécifiés dans la norme_. Cela signifie que tout élément non standard doit tout de même accepter ces attributs, même si cela rend le document non conforme à HTML5.
- [Éléments de type en-ligne](/fr/docs/Glossary/Inline-level_content) et [éléments de type bloc](/fr/docs/Glossary/Block-level_content)
  - : Les éléments HTML sont généralement «&nbsp;en-ligne&nbsp;» ou «&nbsp;bloc&nbsp;». Un élément en-ligne occupe uniquement l'espace délimité par ses balises. Un élément de type bloc occupe tout l'espace de son élément parent (contenant), créant ainsi une «&nbsp;boîte de bloc&nbsp;».
- [Commentaires HTML](/fr/docs/Web/HTML/Guides/Comments)
  - : Les commentaires HTML servent à ajouter des notes explicatives dans le balisage ou à empêcher le navigateur d'interpréter certaines parties du document.
- [Guide des types et formats de médias sur le web](/fr/docs/Web/Media/Guides/Formats)
  - : Les éléments {{HTMLElement("audio")}} et {{HTMLElement("video")}} permettent de lire des médias audio et vidéo nativement dans votre contenu, sans avoir besoin de support logiciel externe.
- [Catégories de contenu HTML](/fr/docs/Web/HTML/Guides/Content_categories)
  - : HTML comprend plusieurs types de contenu, chacun pouvant être utilisé dans certains contextes et interdit dans d'autres. De même, chaque contexte a un ensemble d'autres catégories de contenu qu'il peut contenir et des éléments qui peuvent ou non y être utilisés. Ce guide présente ces catégories.
- [Mode «&nbsp;Quirks&nbsp;» et mode standard](/fr/docs/Web/HTML/Guides/Quirks_mode_and_standards_mode)
  - : Informations historiques sur le mode «&nbsp;Quirks&nbsp;» et le mode standard.

## Sujets associés

- [Appliquer de la couleur aux éléments HTML avec CSS](/fr/docs/Web/CSS/Guides/Colors/Applying_color)
  - : Cet article présente la plupart des façons d'utiliser CSS pour ajouter de la couleur au contenu HTML, en listant les parties des documents HTML qui peuvent être colorées et les propriétés CSS à utiliser.
