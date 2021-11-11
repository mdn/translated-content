---
title: Catégories de contenu
slug: Web/Guide/HTML/Content_categories
tags:
  - Avancé
  - Contenus
  - Guide
  - HTML
translation_of: Web/Guide/HTML/Content_categories
original_slug: Web/Guide/HTML/Catégories_de_contenu
---
Chaque élément [HTML](https://developer.mozilla.org/fr/docs/Web/HTML) est membre d'un certain nombre de catégories de contenu qui regroupent des éléments partageant un ensemble de caractéristiques. Ceci est un regroupement lâche, en ce sens qu'il ne crée pas réellement de relation entre les éléments de ces types, mais il aide à définir et à décrire leur comportement et les règles associées qu'ils doivent respecter, en particulier lorsque l'on entre dans leurs détails complexes. Il est également possible que les éléments ne soient membres d'aucune de ces catégories.

Il y a trois types différents de catégories de contenu :

- Les catégories de contenu principales qui décrivent un ensemble de règles de contenu partagées par une grande variété d'éléments ;
- Les catégories de contenu relatives aux formulaires qui décrivent les règles de contenu partagées par les éléments en lien avec les formulaires ;
- Les catégories de contenu spécifiques qui décrivent des catégories plus rares et qui s'appliquent à peu d'éléments, parfois dans un contexte particulier

> **Note :** un discours plus détaillé sur ces catégories de contenu et de leurs fonctionnalités comparatives dépasse le cadre de cet article ; pour en savoir plus, vous pouvez lire les [parties correspondantes de la spécification HTML](https://html.spec.whatwg.org/multipage/dom.html#kinds-of-content) (en).

![](content_categories_venn.png)

## Principales catégories de contenu

### Contenu de méta-données

Les éléments appartenant à cette catégorie modifient la présentation ou le comportement du reste du document, insèrent des liens vers d'autres documents ou comportent des informations sur la structure même des données.

Les éléments appartenant à cette catégories sont : {{HTMLElement("base")}}, {{HTMLElement("command")}}{{ Obsolete_inline()}} , {{HTMLElement("link")}}, {{HTMLElement("meta")}}, {{HTMLElement("noscript")}}, {{HTMLElement("script")}}, {{HTMLElement("style")}} et {{HTMLElement("title")}}.

### Contenu de flux

Les éléments appartenant à la catégorie de contenu de flux contiennent généralement du texte ou du contenu intégré. Ces éléments sont : {{HTMLElement("a")}}, {{HTMLElement("abbr")}}, {{HTMLElement("address")}}, {{HTMLElement("article")}}, {{HTMLElement("aside")}}, {{HTMLElement("audio")}}, {{HTMLElement("b")}},{{HTMLElement("bdo")}}, {{HTMLElement("bdi")}}, {{HTMLElement("blockquote")}}, {{HTMLElement("br")}}, {{HTMLElement("button")}}, {{HTMLElement("canvas")}}, {{HTMLElement("cite")}}, {{HTMLElement("code")}}, {{ Obsolete_inline() }}{{HTMLElement("command")}}, {{HTMLElement("data")}}, {{HTMLElement("datalist")}}, {{HTMLElement("del")}}, {{HTMLElement("details")}}, {{HTMLElement("dfn")}}, {{HTMLElement("div")}}, {{HTMLElement("dl")}}, {{HTMLElement("em")}}, {{HTMLElement("embed")}}, {{HTMLElement("fieldset")}}, {{HTMLElement("figure")}}, {{HTMLElement("footer")}}, {{HTMLElement("form")}}, {{HTMLElement("h1")}}, {{HTMLElement("h2")}}, {{HTMLElement("h3")}}, {{HTMLElement("h4")}}, {{HTMLElement("h5")}}, {{HTMLElement("h6")}}, {{HTMLElement("header")}}, {{HTMLElement("hgroup")}}, {{HTMLElement("hr")}}, {{HTMLElement("i")}}, {{HTMLElement("iframe")}}, {{HTMLElement("img")}}, {{HTMLElement("input")}}, {{HTMLElement("ins")}}, {{HTMLElement("kbd")}}, {{HTMLElement("keygen")}}{{deprecated_inline()}}, {{HTMLElement("label")}}, {{HTMLElement("main")}}, {{HTMLElement("map")}}, {{HTMLElement("mark")}}, {{MathMLElement("math")}}, {{HTMLElement("menu")}}, {{HTMLElement("meter")}}, {{HTMLElement("nav")}}, {{HTMLElement("noscript")}}, {{HTMLElement("object")}}, {{HTMLElement("ol")}}, {{HTMLElement("output")}}, {{HTMLElement("p")}}, {{HTMLElement("picture")}}, {{HTMLElement("pre")}}, {{HTMLElement("progress")}}, {{HTMLElement("q")}}, {{HTMLElement("ruby")}}, {{HTMLElement("s")}}, {{HTMLElement("samp")}}, {{HTMLElement("script")}}, {{HTMLElement("section")}}, {{HTMLElement("select")}}, {{HTMLElement("small")}}, {{HTMLElement("span")}}, {{HTMLElement("strong")}}, {{HTMLElement("sub")}}, {{HTMLElement("sup")}}, {{SVGElement("svg")}}, {{HTMLElement("table")}}, {{HTMLElement("template")}}, {{HTMLElement("textarea")}}, {{HTMLElement("time")}}, {{HTMLElement("ul")}}, {{HTMLElement("var")}}, {{HTMLElement("video")}}, {{HTMLElement("wbr")}} et le texte.

Quelques autres éléments appartiennent à cette catégorie mais seulement sous certaines conditions :

- {{HTMLElement("area")}} s'il est un descendant de l'élément {{HTMLElement("map")}}
- {{HTMLElement("link")}} si l'attribut [**itemprop**](/fr/docs/HTML/Global_attributes#itemprop "/fr/docs/HTML/Global_attributes#itemprop") est présent
- {{HTMLElement("meta")}} si l'attribut [**itemprop**](/fr/docs/HTML/Global_attributes#itemprop "/fr/docs/HTML/Global_attributes#itemprop") est présent
- {{HTMLElement("style")}} si l'attribut {{htmlattrxref("scoped","style")}} {{deprecated_inline()}} est présent

### Contenu sectionnant

Les éléments appartenant à cette catégorie sont ceux créant une nouvelle [section dans le plan du document](/fr/docs/HTML/Sections_and_Outlines_of_an_HTML5_document "/fr/docs/HTML/Sections_and_Outlines_of_an_HTML5_document") qui définit la portée des éléments {{HTMLElement("header")}}, des éléments {{HTMLElement("footer")}} et du [contenu de titre](<#Contenu de titre> "#Contenu de titre").

Les éléments appartenant à cette catégorie sont les éléments {{HTMLElement("article")}}, {{HTMLElement("aside")}}, {{HTMLElement("nav")}} et {{HTMLElement("section")}}.

> **Note :** Il ne faut pas confondre ce modèle de contenu avec la catégorie de [racine de sectionnement](/fr/docs/HTML/Sections_and_Outlines_of_an_HTML5_document#Racines_de_sectionnement "/fr/docs/HTML/Sections_and_Outlines_of_an_HTML5_document#Racines_de_sectionnement") qui isole un contenu par rapport à la structure (ou plan) principale.

### Contenu de titre

Le contenu de titre définit le titre d'une section, qu'elle soit marquée par un [contenu sectionnant](#) de manière explicite ou qu'elle soit définie de manière implicite par le contenu de titre lui-même.

Les éléments appartenant à cette catégorie sont {{HTMLElement("h1")}}, {{HTMLElement("h2")}}, {{HTMLElement("h3")}}, {{HTMLElement("h4")}}, {{HTMLElement("h5")}}, {{HTMLElement("h6")}} et {{HTMLElement("hgroup")}}.

> **Note :** Bien qu'il soit probable qu'un élément {{HTMLElement("header")}} comporte du contenu de titre, il n'est pas lui-même un contenu de titre.

> **Note :** {{HTMLElement("hgroup")}} est supprimé du document recommandé par W3C.

### Contenu phrasé

Le contenu phrasé définit le texte et le balisage qu'il contient. Des séquences de contenu phrasé constituent des paragraphes.

Les éléments appartenant à cette catégorie sont  {{HTMLElement("abbr")}}, {{HTMLElement("audio")}}, {{HTMLElement("b")}}, {{HTMLElement("bdo")}}, {{HTMLElement("br")}}, {{HTMLElement("button")}}, {{HTMLElement("canvas")}}, {{HTMLElement("cite")}}, {{HTMLElement("code")}}, {{ Obsolete_inline() }}{{HTMLElement("command")}}, {{HTMLElement("data")}}, {{HTMLElement("datalist")}}, {{HTMLElement("dfn")}}, {{HTMLElement("em")}}, {{HTMLElement("embed")}}, {{HTMLElement("i")}}, {{HTMLElement("iframe")}}, {{HTMLElement("img")}}, {{HTMLElement("input")}}, {{HTMLElement("kbd")}}, {{HTMLElement("keygen")}}{{deprecated_inline()}}, {{HTMLElement("label")}}, {{HTMLElement("mark")}}, {{MathMLElement("math")}}, {{HTMLElement("meter")}}, {{HTMLElement("noscript")}}, {{HTMLElement("object")}}, {{HTMLElement("output")}}, {{HTMLElement("picture")}}, {{HTMLElement("progress")}}, {{HTMLElement("q")}}, {{HTMLElement("ruby")}}, {{HTMLElement("samp")}}, {{HTMLElement("script")}}, {{HTMLElement("select")}}, {{HTMLElement("small")}}, {{HTMLElement("span")}}, {{HTMLElement("strong")}}, {{HTMLElement("sub")}}, {{HTMLElement("sup")}}, {{SVGElement("svg")}}, {{HTMLElement("textarea")}}, {{HTMLElement("time")}}, {{HTMLElement("var")}}, {{HTMLElement("video")}}, {{HTMLElement("wbr")}} et du texte brut (n'étant pas une simple suite de blancs).

Quelques autres éléments appartiennent à cette catégorie mais seulement selon certaines conditions :

- {{HTMLElement("a")}} s'il contient seulement du contenu phrasé
- {{HTMLElement("area")}} s'il est un descendant de l'élément {{HTMLElement("map")}}
- {{HTMLElement("del")}} s'il contient seulement du contenu phrasé
- {{HTMLElement("ins")}} s'il contient seulement du contenu phrasé
- {{HTMLElement("link")}} si l'attribut [**itemprop**](/fr/docs/HTML/Global_attributes#itemprop "/fr/docs/HTML/Global_attributes#itemprop") est présent
- {{HTMLElement("map")}} s'il contient seulement du contenu phrasé
- {{HTMLElement("meta")}} si l'attribut [**itemprop**](/fr/docs/HTML/Global_attributes#itemprop "/fr/docs/HTML/Global_attributes#itemprop") est présent

### Contenu intégré

Le contenu intégré importe une autre ressource ou intègre du contenu provenant d'un autre langage de balisage ou d'un autre espace de noms dans le document. Les éléments appartenant à cette catégorie sont : {{HTMLElement("audio")}}, {{HTMLElement("canvas")}}, {{HTMLElement("embed")}}, {{HTMLElement("iframe")}}, {{HTMLElement("img")}}, {{MathMLElement("math")}}, {{HTMLElement("object")}}, {{HTMLElement("svg")}}, {{HTMLElement("video")}}.

### Contenu interactif

Le contenu interactif regroupe des éléments spécialement conçus pour une interaction avec l'utilisateur. Les éléments appartenant à cette catégories sont : {{HTMLElement("a")}}, {{HTMLElement("button")}}, {{HTMLElement("details")}}, {{HTMLElement("embed")}}, {{HTMLElement("iframe")}}, {{HTMLElement("keygen")}}{{deprecated_inline()}} , {{HTMLElement("label")}}, {{HTMLElement("select")}}, et {{HTMLElement("textarea")}}.

Quelques éléments appartiennent à cette catégorie seulement sous certaines conditions :

- {{HTMLElement("audio")}} si l'attribut {{htmlattrxref("controls", "audio")}} est présent
- {{HTMLElement("img")}} si l'attribut {{htmlattrxref("usemap", "img")}} est présent
- {{HTMLElement("input")}} si l'attribubt {{htmlattrxref("type", "input")}} ne vaut pas `hidden`
- {{HTMLElement("menu")}} si l'attribut {{htmlattrxref("type", "menu")}} vaut `toolbar`
- {{HTMLElement("object")}} si l'attribut {{htmlattrxref("usemap", "object")}} est présent
- {{HTMLElement("video")}}, si l'attribut {{htmlattrxref("controls", "video")}} est présent

### Contenu tangible

Un contenu peut être dit tangible lorsqu'il n'est ni vide ni caché. Les éléments dont le modèle de contenu est de flux ou phrasé devraient toujours avoir au moins un noeud dont le contenu est tangible.

### Contenu associé aux formulaires

Le contenu associé aux formulaires contient les éléments possédés par un formulaire, exposé avec un attribut **form**. Être possédé par un formulaire signifie être descendant d'un élément  {{HTMLElement("form")}} ou de l'élément dont l'identifiant est référencé par la valeur de l'attribut **form**.

Cette catégorie contient les éléments :

- {{HTMLElement("button")}}
- {{HTMLElement("fieldset")}}
- {{HTMLElement("input")}}
- {{HTMLElement("keygen")}}{{deprecated_inline()}}
- {{HTMLElement("label")}}
- {{HTMLElement("meter")}}
- {{HTMLElement("object")}}
- {{HTMLElement("output")}}
- {{HTMLElement("progress")}}
- {{HTMLElement("select")}}
- {{HTMLElement("textarea")}}

Cette catégorie peut être subdivisée en plusieurs sous-catégories.

- listed (éléments listés)
  - : Les éléments étant listés sont les ensembles IDL [form.elements](/fr/docs/DOM/form.elements "DOM/form.elements") et fieldset.elements. Ce sont : {{HTMLElement("button")}}, {{HTMLElement("fieldset")}}, {{HTMLElement("input")}}, {{HTMLElement("keygen")}}{{deprecated_inline()}} , {{HTMLElement("object")}}, {{HTMLElement("output")}}, {{HTMLElement("select")}}, et {{HTMLElement("textarea")}}.
- labelable (éléments étiquetables)
  - : Les éléments pouvant être associés avec des éléments  {{HTMLElement("label")}}. Ce sont : {{HTMLElement("button")}}, {{HTMLElement("input")}}, {{HTMLElement("keygen")}}{{deprecated_inline()}} , {{HTMLElement("meter")}}, {{HTMLElement("output")}}, {{HTMLElement("progress")}}, {{HTMLElement("select")}} et {{HTMLElement("textarea")}}.
- submittable (éléments participants à l'envoi du formulaire)
  - : Les éléments pouvant être utilisés pour construire les données du formulaires quand celui-ci est envoyé. Ce sont : {{HTMLElement("button")}}, {{HTMLElement("input")}}, {{HTMLElement("keygen")}}{{deprecated_inline()}} , {{HTMLElement("object")}}, {{HTMLElement("select")}} et {{HTMLElement("textarea")}}.
- resettable (éléments de ré-initialisation)
  - : Éléments pouvant être impactés lorsqu'un formulaire est ré-initialisé. Ce sont : {{HTMLElement("input")}}, {{HTMLElement("keygen")}}{{deprecated_inline()}}, {{HTMLElement("output")}},{{HTMLElement("select")}} et {{HTMLElement("textarea")}}.

## Catégories secondaires

Il existe des classifications secondaires d'éléments qu'il peut être utile de connaître également.

### Éléments supports de script

Les éléments supports de script sont des éléments qui ne contribuent pas directement à la sortie rendue d'un document. Au lieu de cela, ils servent à prendre en charge les scripts, soit en contenant ou en spécifiant le code de script directement, soit en spécifiant les données qui seront utilisées par les scripts. Ce sont :

- {{HTMLElement("script")}}
- {{HTMLElement("template")}}

## Modèle de contenu transparent

Si l'élément possède un modèle de contenu transparent, son contenu doit alors être structuré comme du HTML5 valide, et ce, même si l'élément transparent a été enlevé et remplacé par ses éléments fils.

Les éléments {{HTMLElement("del")}} et {{HTMLELement("ins")}} sont des exemples d'éléments transparents.

    <p>Bonjour <del><em>tout</em></del> <ins>le monde</ins>.</p>

Si ces éléments étaient retirés, ce fragment de code HTML serait toujours du HTML valide.

    <p>Bonjour <em>tout</em> le monde.</p>

## Autres modèles de contenu

[Racine de sectionnement.](/fr/docs/HTML/Sections_and_Outlines_of_an_HTML5_document#Racines_de_sectionnement "/fr/docs/HTML/Sections_and_Outlines_of_an_HTML5_document#Racines_de_sectionnement")
