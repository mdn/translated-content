---
title: Référence des éléments HTML
slug: Web/HTML/Element
tags:
  - Basic
  - Element
  - HTML
  - Reference
  - Web
  - l10n:priority
translation_of: Web/HTML/Element
---

{{HTMLSidebar("Elements")}}

Cette page répertorie tous les [éléments](/fr/docs/Glossary/Element) [HTML](/fr/docs/Glossary/HTML), qui sont créés à l'aide de [balises](/fr/docs/Glossary/Tag). Ils sont regroupés par fonction pour vous aider à trouver facilement ce que vous avez en tête. Une liste alphabétique de tous les éléments est fournie dans la barre latérale de la page de chaque élément ainsi que de celle-ci.

> **Note :** Pour plus d'informations sur les bases des éléments et attributs HTML, voir [la section sur les éléments dans l'article Introduction au HTML](/fr/docs/Learn/HTML/Introduction_to_HTML#elements_%e2%80%94_the_basic_building_blocks).

## Racine principale

| Élément | Description |
| ------- | ----------- |
| {{HTMLElement("html")}} | L'élément HTML **`<html>`** représente la racine d'un document HTML ou XHTML. Tout autre élément du document doit être un descendant de cet élément. |

## Métadonnées du document

Les métadonnées contiennent des informations à propos de la page. Elles comprennent des informations sur les styles, les scripts et les données qui aident les programmes ([moteur de recherche](/fr/docs/Glossary/Search_engine), [navigateurs](/fr/docs/Glossary/Browser), etc.) à utiliser et à rendre la page. Les métadonnées relatives aux styles et aux scripts peuvent être définies dans la page ou renvoyer à un autre fichier contenant ces informations.

| Élément | Description |
| ------- | ----------- |
| {{HTMLElement("base")}}  | L'élément **`<base>`** définit l'URL de base à utiliser pour recomposer toutes les URL relatives contenues dans un document. Il ne peut y avoir qu'un seul élément `<base>` au sein d'un document. |
| {{HTMLElement("head")}}  | L'élément HTML **\<head>** fournit des informations générales (métadonnées) sur le document, incluant son titre et des liens ou des définitions vers des scripts et feuilles de style. |
| {{HTMLElement("link")}}  | L'élément HTML **`<link>`** définit la relation entre le document courant et une ressource externe. Cet élément peut être utilisé pour définir un lien vers [une feuille de style](/fr/docs/Glossaire/CSS), vers les icônes utilisées en barre de titre ou comme icône d'application sur les appareils mobiles. |
| {{HTMLElement("meta")}}  | L'élément HTML **`<meta>`** représente toute information de métadonnées qui ne peut pas être représentée par un des éléments ({{HTMLElement("base")}}, {{HTMLElement("link")}}, {{HTMLElement("script")}}, {{HTMLElement("style")}} ou {{HTMLElement("title")}}) |
| {{HTMLElement("style")}} | L'élément HTML **`<style>`** contient des informations de mise en forme pour un document ou une partie d'un document. Par défaut, les instructions de mise en forme écrites dans cet élément sont écrites en [CSS](/fr/docs/Web/CSS). |
| {{HTMLElement("title")}} | L'élément **`<title>`** définit le titre du document (qui est affiché dans la barre de titre du navigateur ou dans l'onglet de la page). Cet élément ne peut contenir que du texte, les balises qu'il contiendrait seraient ignorées. |

## Racine de sectionnement

| Élément | Description |
| ------- | ----------- |
| {{HTMLElement("body")}} | L'élément HTML **`<body>`** représente le contenu principal du document HTML. Il ne peut y avoir qu'un élément `<body>` par document. |

## Sectionnement du contenu

Organiser le contenu d'une page en différentes sections permet d'avoir une structure logique au sein d'un document. Grâce à ces éléments, on peut créer un plan pour la page, ajouter des titres pour identifier les sections et également gérer un en-tête et un bas de page.

| Élément | Description |
| ------- | ----------- |
| {{HTMLElement("address")}}                                                                                                                                                                                                                                                                                                                           | L'élément HTML **`<address>`** indique des informations de contact pour une personne, un groupe de personnes ou une organisation. |
| {{HTMLElement("article")}}                                                                                                                                                                                                                                                                                                                           | L'élément **`<article>`** représente une composition autonome dans un document, une page, une application ou un site, destinée à être distribuée ou réutilisée de manière indépendante (par exemple, dans le cadre d'une syndication). Exemples : un message de forum, un article de magazine ou de journal, ou un article de blog, une fiche produit, un commentaire soumis par un utilisateur, un widget ou gadget interactif, ou tout autre élément de contenu indépendant. |
| {{HTMLElement("aside")}}                                                                                                                                                                                                                                                                                                                             | L'élément **`<aside>`** (en français, « aparté ») représente une partie d'un document dont le contenu n'a qu'un rapport indirect avec le contenu principal du document. Les apartés sont fréquemment présents sous la forme d'encadrés ou de boîtes de légende. |
| {{HTMLElement("footer")}}                                                                                                                                                                                                                                                                                                                            | L'élément HTML **`<footer>`** représente le pied de page de la [section](/fr/docs/Web/Guide/HTML/Content_categories#sectioning_content) ou de la [racine de sectionnement](/fr/docs/Web/Guide/HTML/Using_HTML_sections_and_outlines#sectioning_root) la plus proche. Un élément `<footer>` contient habituellement des informations sur l'autrice ou l'auteur de la section, les données relatives au droit d'auteur (_copyright_) ou les liens vers d'autres documents en relation. |
| {{HTMLElement("header")}}                                                                                                                                                                                                                                                                                                                            | L'élément [HTML](/fr/docs/Web/HTML) **`<header>`** représente du contenu introductif, généralement un groupe de contenu introductif ou de contenu aidant à la navigation. Il peut contenir des éléments de titre, mais aussi d'autres éléments tels qu'un logo, un formulaire de recherche, le nom d'auteur, etc. |
| [`<h1>`](/fr/docs/Web/HTML/Element/Heading_Elements), [`<h2>`](/fr/docs/Web/HTML/Element/Heading_Elements), [`<h3>`](/fr/docs/Web/HTML/Element/Heading_Elements), [`<h4>`](/fr/docs/Web/HTML/Element/Heading_Elements), [`<h5>`](/fr/docs/Web/HTML/Element/Heading_Elements), [`<h6>`](/fr/docs/Web/HTML/Element/Heading_Elements) | Les éléments **`<h1>`** à **`<h6>`** représentent six niveaux de titres dans un document, `<h1>` est le plus important et `<h6>` est le moins important. Un élément de titre décrit brièvement le sujet de la section qu'il introduit. |
| {{HTMLElement("main")}}                                                                                                                                                                                                                                                                                                                              | L’élément HTML **`<main>`** représente le contenu majoritaire du {{HTMLElement("body")}} du document. Le contenu principal de la zone est constitué de contenu directement en relation, ou qui étend le sujet principal du document ou de la fonctionnalité principale d'une application. |
| {{HTMLElement("nav")}}                                                                                                                                                                                                                                                                                                                               | L'élément HTML **\<nav>** représente une section d'une page ayant des liens vers d'autres pages ou des fragments de cette page. Autrement dit, c'est une section destinée à la navigation dans un document (avec des menus, des tables des matières, des index, etc.). |
| {{HTMLElement("section")}}                                                                                                                                                                                                                                                                                                                           | L'élément HTML **`<section>`** représente une section générique d'un document, par exemple un groupe de contenu thématique. Une section commence généralement avec un titre. |

## Contenu textuel

Le contenu HTML textuel permet d'organiser des blocs ou des sections de contenu entre la balise ouvrante {{HTMLElement("body")}} et la balise fermante `</body>`. Ces éléments sont cruciaux pour l'accessibilité et le référencement car ils permettent d'identifier le sens du contenu.

| Élément | Description |
| ------- | ----------- |
| {{HTMLElement("blockquote")}} | L'élément HTML **`<blockquote>`** (qui signifie _bloc de citation_) indique que le texte contenu dans l'élément est une citation longue. Le texte est généralement affiché avec une indentation (voir [les notes](#usage_notes) ci-après). Une URL indiquant la source de la citation peut être donnée grâce à l'attribut **`cite`** tandis qu'un texte représentant la source peut être donné via l'élément [`<cite>`](/fr/docs/Web/HTML/Element/cite). |
| {{HTMLElement("dd")}}         | L'élément HTML **`<dd>`** fournit la description, la définition ou la valeur du terme précédent ([`<dt>`](/fr/docs/Web/HTML/Element/dt)) dans une liste de description ([`<dl>`](/fr/docs/Web/HTML/Element/dl)). |
| {{HTMLElement("div")}}        | L'élément HTML **`<div>`** (ou division) est le conteneur générique du contenu du flux. Il n'a aucun effet sur le contenu ou la mise en page tant qu'il n'est pas mis en forme d'une manière quelconque à l'aide de [CSS](/fr/docs/Web/CSS). |
| {{HTMLElement("dl")}}         | L'élément HTML **`<dl>`** représente une liste de descriptions sous la forme d'une liste de paires associant des termes (fournis par des éléments [`<dt>`](/fr/docs/Web/HTML/Element/dt)) et leurs descriptions ou définitions (fournies par des éléments [`<dd>`](/fr/docs/Web/HTML/Element/dd)). On utilisera par exemple cet élément pour implémenter un glossaire. |
| {{HTMLElement("dt")}}         | L'élément HTML **`<dt>`** identifie un terme dans une liste de définitions ou de descriptions. Cet élément n'apparaît qu'en tant qu'élément enfant d'un élément [`<dl>`](/fr/docs/Web/HTML/Element/dl) et est généralement suivi d'un élément [`<dd>`](/fr/docs/Web/HTML/Element/dd). Plusieurs éléments `<dt>` qui se suivent indiqueront qu'ils partagent la définition/description fournie par le prochain élément [`<dd>`](/fr/docs/Web/HTML/Element/dd). |
| {{HTMLElement("figcaption")}} | L'élément HTML **`<figcaption>`** représente une légende décrivant le reste du contenu de son élément parent [`<figure>`](/fr/docs/Web/HTML/Element/figure). |
| {{HTMLElement("figure")}}     | L'élément HTML **`<figure>`** représente un contenu autonome, éventuellement accompagné d'une légende facultative, qui est spécifiée à l'aide de l'élément [`<figcaption>`](/fr/docs/Web/HTML/Element/figcaption). La figure, sa légende et son contenu sont référencés comme une seule unité. |
| {{HTMLElement("hr")}}         | L'élément HTML **`<hr>`** représente un changement thématique entre des éléments de paragraphe (par exemple, un changement de décor dans un récit, un changement de sujet au sein d'une section). |
| {{HTMLElement("li")}}         | L'élément HTML **`<li>`** est utilisé pour représenter un élément dans une liste. Il doit être contenu dans un élément parent : une liste ordonnée ({{HTMLElement("ol")}}), une liste non ordonnée ({{HTMLElement("ul")}}) ou un menu ({{HTMLElement("menu")}}). Dans les menus et les listes non ordonnées, les éléments de liste sont habituellement affichés en utilisant des puces. Dans les listes ordonnées, ils sont habituellement affichés avec compteur croissant à gauche, tel qu'un nombre ou une lettre. |
| {{HTMLElement("menu")}}       | L'élément [HTML](/fr/docs/Web/HTML) **`<menu>`** est une alternative sémantique à [`<ul>`](/fr/docs/Web/HTML/Element/ul), mais est traité par les navigateurs, et en termes d'accessibilité comme un élément [`<ul>`](/fr/docs/Web/HTML/Element/ul). Il représente une liste d'éléments non-ordonnée (chaque élément de la liste étant représenté par un élément [`<li>`](/fr/docs/Web/HTML/Element/li)). |
| {{HTMLElement("ol")}}         | L'élément HTML **`<ol>`** représente une liste ordonnée. Les éléments d'une telle liste sont généralement affichés avec un indicateur ordinal pouvant prendre la forme de nombres, de lettres, de chiffres romains ou de points. La mise en forme de la numérotation n'est pas utilisée dans la description HTML mais dans la feuille de style CSS associée grâce à la propriété [`list-style-type`](/fr/docs/Web/CSS/list-style-type). |
| {{HTMLElement("p")}}          | L'élément HTML **`<p>`** représente un paragraphe de texte. Les paragraphes sont généralement représentés comme des blocs et séparés par un espace vertical, leur première ligne est également parfois indentée. Les paragraphes sont [des éléments blocs](/fr/docs/Web/HTML/Éléments_en_bloc). |
| {{HTMLElement("pre")}}        | L'élément [HTML](/fr/docs/Web/HTML) **`<pre>`** représente du texte préformaté, généralement écrit avec une [police à chasse fixe](https://fr.wikipedia.org/wiki/Police_d%27%C3%A9criture_%C3%A0_chasse_fixe). Le texte est affiché tel quel, les espaces utilisés dans le document HTML seront retranscrits. |
| {{HTMLElement("ul")}}         | L'élément HTML **`<ul>`** représente une liste d'éléments sans ordre particulier. Il est souvent représenté par une liste à puces. |

## Sémantique du texte en ligne

Les éléments pour le texte en ligne peuvent être utilisés pour définir la signification, la structure ou la mise en forme d'un terme, d'une ligne ou d'un fragment de texte.

| Élément | Description |
| ------- | ----------- |
| {{HTMLElement("a")}}      | L'élément HTML **`<a>`** (pour ancre ou _anchor_ en anglais), avec [son attribut `href`](#href), crée un lien hypertexte vers des pages web, des fichiers, des adresses e-mail, des emplacements se trouvant dans la même page, ou tout ce qu'une URL peut adresser. Le contenu de chaque élément `<a>` **doit** indiquer la destination du lien. Si [l'attribut `href`](#href) est présent, appuyer sur la touche entrée en se concentrant sur l'élément `<a>` l'activera. |
| {{HTMLElement("abbr")}}   | L'élément HTML **`<abbr>`** (**abréviation** en français) représente une abréviation ou un acronyme ; l'attribut facultatif [`title`](/fr/docs/Web/HTML/Global_attributes#attr-title) peut fournir une explication ou une description de l'abréviation. S'il est présent, `title` doit contenir cette description complète et rien d'autre. |
| {{HTMLElement("b")}}      | L'élément HTML **`<b>`** permet d'attirer l'attention du lecteur sur un contenu qui n'a pas, pour autant, d'importance significative. Anciennement utilisé pour mettre le texte en gras. Cet élément ne doit pas être utilisé pour mettre en forme des éléments, c'est la propriété CSS [`font-weight`](/fr/docs/Web/CSS/font-weight) qu'il faut utiliser. Si l'élément est d'une importance particulière, on utilisera l'élément HTML [`<strong>`](/fr/docs/Web/HTML/Element/strong). |
| {{HTMLElement("bdi")}}    | L'élément **`<bdi>`** (ou élément d'isolation de texte bidirectionnel) isole une portée (_span_) de texte pouvant être formatée dans une direction différente de celle du texte qui l'entoure. Cela permet, par exemple, de présenter correctement une citation en arabe (écrit de droite à gauche) au sein d'un texte écrit en français (écrit de gauche à droite). |
| {{HTMLElement("bdo")}}    | L'élément HTML **`<bdo>`** (pour élément de remplacement du texte bidirectionnel) est utilisé afin d'outrepasser la direction du texte. Cela permet d'imposer une direction donnée à un texte. L'orientation du texte est inversée mais pas celle des caractères. |
| {{HTMLElement("br")}}     | L'élément HTML **`<br>`** crée un saut de ligne (un retour chariot) dans le texte. Il s'avère utile lorsque les sauts de ligne ont une importance (par exemple lorsqu'on écrit une adresse ou un poème). |
| {{HTMLElement("cite")}}   | L'élément **`<cite>`** contient le titre d'une œuvre telle qu'un livre, une chanson, un film, une sculpture… Cet élément doit inclure le titre de l'œuvre. Cette référence peut-être abrégée en accord avec les conventions d'usages pour l'ajout des métadonnées de citations. |
| {{HTMLElement("code")}}   | L'élément HTML **`<code>`** représente un court fragment de code machine. Par défaut, l'agent utilisateur utilise une police à chasse fixe (_monospace_) afin d'afficher le texte contenu dans cet élément. |
| {{HTMLElement("data")}}   | L'élément HTML **`<data>`** relie un contenu à une version de ce contenu interprétable par un ordinateur. Si le contenu possède une composante temporelle, l'élément [`<time>`](/fr/docs/Web/HTML/Element/time) doit être utilisé. |
| {{HTMLElement("dfn")}}    | L'élément HTML **`<dfn>`** (aussi nommé « définition ») est utilisé pour indiquer le terme défini dans le contexte d'une expression ou d'une phrase de définition. L'élément [`<p>`](/fr/docs/Web/HTML/Element/p), le couple [`<dt>`](/fr/docs/Web/HTML/Element/dt)/[`<dd>`](/fr/docs/Web/HTML/Element/dd) ou l'élément [`<section>`](/fr/docs/Web/HTML/Element/section) qui est le plus proche ancêtre de `<dfn>` est considéré comme la définition du terme. |
| {{HTMLElement("em")}}     | L'élément [HTML](/fr/docs/Web/HTML) **`<em>`** (pour emphase) est utilisé afin de marquer un texte sur lequel on veut insister. Les éléments `<em>` peuvent être imbriqués, chaque degré d'imbrication indiquant un degré d'insistance plus élevé. |
| {{HTMLElement("i")}}      | L'élément HTML **`<i>`** représente un morceau de texte qui se différencie du texte principal. Cela peut par exemple être le cas pour des termes techniques, des phrases dans une langue étrangère ou encore l'expression des pensées d'un personnage. Le contenu de cet élément est généralement affiché en italique. |
| {{HTMLElement("kbd")}}    | L'élément HTML **`<kbd>`** représente une plage de texte en ligne indiquant la saisie de texte par l'utilisateur à partir d'un clavier, d'une saisie vocale ou de tout autre dispositif de saisie de texte. Par convention, le {{Glossary("user agent")}} rend par défaut le contenu d'un élément `<kbd>` en utilisant sa police monospace, bien que cela ne soit pas requis par le standard HTML. |
| {{HTMLElement("mark")}}   | L'élément HTML **`<mark>`** représente un texte marqué ou surligné à cause de sa pertinence dans le contexte. Il peut par exemple être utilisé afin d'indiquer les correspondances d'un mot-clé recherché au sein d'un document. |
| {{HTMLElement("q")}}      | L'élément HTML **`<q>`** indique que le texte qu'il contient est une citation en incise. La plupart des navigateurs modernes entoure le texte de cet élément avec des marques de citation. Cet élément est destiné aux citations courtes qui ne nécessitent pas de sauts de paragraphe. Pour les plus grandes citations, on utilisera l'élément {{HTMLElement("blockquote")}}. |
| {{HTMLElement("rp")}}     | L'élément HTML **`<rp>`** est utilisé pour fournir ce qui fera office de parenthèse aux navigateurs qui ne prennent pas en charge les annotations Ruby. |
| {{HTMLElement("rt")}}     | L'élément HTML **`<rt>`** indique la composante texte d'une annotation Ruby, il est notamment utilisé pour la prononciation, la traduction ou la translitération des caractères d'Asie orientale. Cet élément est toujours contenu dans un élément {{HTMLElement("ruby")}}. |
| {{HTMLElement("ruby")}}   | L'élément HTML **`<ruby>`** représente une annotation ruby. Les annotations Ruby servent à afficher la prononciation des caractères d'Asie orientale. |
| {{HTMLElement("s")}}      | L'élément HTML **`<s>`** permet d'afficher du texte qui est barré car il n'est plus pertinent ou car il est obsolète. `<s>` ne doit pas être employé pour indiquer des éditions dans un document (on utilisera alors {{HTMLElement("del")}} et {{HTMLElement("ins")}}). |
| {{HTMLElement("samp")}}   | L'élément [HTML](/fr/docs/Web/HTML) **`<samp>`** est un élément qui permet de représenter un résultat produit par un programme informatique en incise dans du texte. Il est généralement affiché avec la police à chasse fixe du navigateur (par exemple en [Courier](https://fr.wikipedia.org/wiki/Courier_(police_d%27%C3%A9criture)) ou en Lucida Console). |
| {{HTMLElement("small")}}  | L'élément HTML **`<small>`** permet de représenter des commentaires ou des textes à écrire en petits caractères (des termes d'un contrat, des mentions relatives au droit d'auteur, etc.) quelle que soit la présentation. |
| {{HTMLElement("span")}}   | L'élément HTML **`<span>`** est un conteneur générique en ligne (_inline_) pour les contenus phrasés. Il ne représente rien de particulier. Il peut être utilisé pour grouper des éléments afin de les mettre en forme (grâce aux attributs {{htmlattrxref("class")}} ou {{htmlattrxref("id")}} et aux règles [CSS](/fr/docs/Web/CSS)) ou parce qu'ils partagent certaines valeurs d'attribut comme {{htmlattrxref("lang")}}. Il doit uniquement être utilisé lorsqu'aucun autre élément sémantique n'est approprié. `<span>` est très proche de l'élément {{HTMLElement("div")}}, mais l'élément `<div>` est [un élément de bloc](/fr/docs/Web/HTML/Éléments_en_bloc), alors que `<span>` est [un élément en ligne](/fr/docs/Web/HTML/Éléments_en_ligne). |
| {{HTMLElement("strong")}} | L'élément HTML **`<strong>`** indique que le texte a une importance particulière ou un certain sérieux voire un caractère urgent. Cela se traduit généralement par un affichage en gras. |
| {{HTMLElement("sub")}}    | L'élément HTML **`<sub>`** est utilisé, pour des raisons typographiques, afin d'afficher du texte en indice (sous la ligne de base et généralement plus petit) par rapport au bloc de texte environnant. |
| {{HTMLElement("sup")}}    | L'élément HTML **`<sup>`** est utilisé, pour des raisons typographiques, afin d'afficher du texte en exposant (plus haut et généralement plus petit) par rapport au bloc de texte environnant. |
| {{HTMLElement("time")}}   | L'élément HTML **`<time>`** permet de représenter une période donnée. Cet élément permet d'utiliser l'attribut `datetime` afin de traduire la date ou l'instant dans un format informatique (permettant aux moteurs de recherche d'exploiter ces données ou de créer des rappels). |
| {{HTMLElement("u")}}      | L'élément HTML **`<u>`** permet d'afficher un fragment de texte qui est annoté avec des éléments non textuels. Par défaut, le contenu de l'élément est souligné. Cela pourra par exemple être le cas pour marquer un texte comme étant un nom propre chinois, ou pour marquer un texte qui a été mal orthographié. |
| {{HTMLElement("var")}}    | L'élément HTML **`<var>`** représente une variable dans une expression mathématique ou un texte lié à la programmation. Son contenu est généralement représenté avec une version italique de la police environnante utilisée, toutefois, ce comportement peut dépendre du navigateur utilisé. |
| {{HTMLElement("wbr")}}    | L'élément HTML **`<wbr>`** permet de représenter un emplacement où casser la ligne si nécessaire. Le navigateur pourra alors utiliser cet emplacement pour effectuer un saut de ligne si le texte est trop long et qu'en temps normal, une règle empêche le saut de ligne. |

## Images et médias

HTML prend en charge différents fichiers multimédias pour les images, les fichiers audio et vidéo.

| Élément | Description |
| ------- | ----------- |
| {{HTMLElement("area")}}  | L'élément HTML **`<area>`** définit une zone particulière d'une image et peut lui associer un [lien hypertexte](/fr/docs/Glossary/Hyperlink). Cet élément n'est utilisé qu'au sein d'un élément [`<map>`](/fr/docs/Web/HTML/Element/map). |
| {{HTMLElement("audio")}} | L'élément HTML **`<audio>`** est utilisé afin d'intégrer un contenu sonore dans un document. Il peut contenir une ou plusieurs sources audio représentées avec l'attribut `src` ou l'élément [`<source>`](/fr/docs/Web/HTML/Element/Source) : le navigateur choisira celle qui convient le mieux. Il peut également être la destination de médias diffusés en continu, en utilisant un [`MediaStream`](/fr/docs/Web/API/MediaStream). |
| {{HTMLElement("img")}}   | L'élément [HTML](/fr/docs/Web/HTML) **`<img>`** permet d'intégrer une image dans un document. |
| {{HTMLElement("map")}}   | L'élément HTML **`<map>`** est utilisé avec des éléments {{HTMLElement("area")}} afin de définir une image cliquable divisée en régions. |
| {{HTMLElement("track")}} | L'élément HTML **`<track>`** est utilisé comme élément fils d'un élément [`<audio>`](/fr/docs/Web/HTML/Element/audio) ou [`<video>`](/fr/docs/Web/HTML/Element/video) et permet de fournir une piste texte pour le média (par exemple afin de gérer automatiquement les sous-titres). Les pistes texte utilisées avec cet élément sont formatées selon [le format WebVTT](/fr/docs/Web/API/WebVTT_API) (ce sont des fichiers `.vtt`) (WebVTT pour <i lang="en">Web Video Text Tracks</i>). |
| {{HTMLElement("video")}} | L'élément HTML **`<video>`** intègre un contenu vidéo dans un document. |

## Contenu embarqué

En plus du contenu multimédia, un document HTML peut embarquer d'autres contenus (bien que les interactions soient plutôt limitées).

| Élément | Description |
| ------- | ----------- |
| {{HTMLElement("embed")}}   | L'élément HTML **`<embed>`** permet d'intégrer du contenu externe à cet endroit dans le document. Le contenu peut être fourni par une application externe ou une autre source telle qu'un _plugin_ du navigateur. |
| {{HTMLElement("iframe")}}  | L'élément HTML **`<iframe>`** représente un [contexte de navigation](/fr/docs/Glossary/Browsing_context) imbriqué qui permet en fait d'obtenir une page HTML intégrée dans la page courante. |
| {{HTMLElement("object")}}  | L'élément HTML **`<object>`** représente une ressource externe qui peut être interprétée comme une image, un contexte de navigation imbriqué ou une ressource à traiter comme un _plugin_. |
| {{HTMLElement("picture")}} | L'élément HTML **`<picture>`** est un conteneur utilisé afin de définir zéro ou plusieurs éléments {{HTMLElement("source")}} destinés à un élément {{HTMLElement("img")}}. Le navigateur choisira la source la plus pertinente selon la disposition de la page (les contraintes qui s'appliquent à la boîte dans laquelle l'image devra être affichée), selon l'appareil utilisé (la densité de pixels de l'affichage par exemple avec les appareils hiDPI) et selon les formats pris en charge (ex. WebP pour les navigateurs Chromium ou PNG pour les autres). Si aucune correspondance n'est trouvée parmi les éléments `<source>`, c'est le fichier défini par l'attribut {{htmlattrxref("src", "img")}} de l'élément `<img>` qui sera utilisé. |
| {{HTMLElement("portal")}}  | L'élément [HTML](/fr/docs/Web/HTML) **`<portal>`** permet d'embarquer une autre page HTML à l'intérieur de la page courante afin de permettre une navigation plus souple vers de nouvelles pages. |
| {{HTMLElement("source")}}  | L'élément HTML **`<source>`** définit différentes ressources média pour un élément {{HTMLElement("picture")}}, {{HTMLElement("audio")}} ou {{HTMLElement("video")}}. C'est un élément vide : il ne possède pas de contenu et ne nécessite pas de balise fermante. Il est généralement utilisé pour distribuer le même contenu en utilisant [les différents formats pris en charge par les différents navigateurs](/fr/docs/Web/HTML/formats_media_support). |

## SVG et MathML

Vous pouvez intégrer du contenu [SVG](/fr/docs/Web/SVG) et [MathML](/fr/docs/Web/MathML) directement dans des documents HTML, en utilisant les éléments [`<svg>`](/fr/docs/Web/SVG/Element/svg) et [`<math>`](/fr/docs/Web/MathML/Element/math).

| Élément | Description |
| ------- | ----------- |
| {{SVGElement("svg")}}     | L'élément `svg` peut être utilisé pour intégrer des fragments de code SVG à l'intérieur d'un document (par exemple, un document HTML). Ce fragment de code SVG dispose de ses propres [viewport](/fr/docs/) et système de coordonnée. |
| {{MathMLElement("math")}} | L'élément racine de MathML est `<math>`. Tout objet représenté en MathML doit être encadré de balises `<math>`. De plus, il est interdit d'imbriquer un autre élément `<math>` à l'intérieur d'un premier. Il est toutefois possible d'avoir un nombre arbitraire d'éléments fils à l'intérieur d'un élément `<math>`. |

## Scripts

Afin de créer du contenu dynamique et des applications web, des langages de script peuvent être utilisés pour manipuler le document HTML. Certains éléments HTML permettent de gérer les liens entre les scripts et le document.

| Élément | Description |
| ------- | ----------- |
| {{HTMLElement("canvas")}}   | On utilise l'élément **HTML `<canvas>`** avec l'API [canvas](/fr/docs/Web/API/Canvas_API), ou l'API [WebGL](/fr/docs/Web/API/WebGL_API) pour dessiner des graphiques et des animations. |
| {{HTMLElement("noscript")}} | L'élément HTML **`<noscript>`** définit un fragment HTML qui doit être affiché si les fonctionnalités de script ne sont pas prises en charge ou si elles sont désactivées. |
| {{HTMLElement("script")}}   | L'élément HTML **`<script>`** est utilisé pour intégrer ou faire référence à un script exécutable. Cela fait généralement référence à du code JavaScript mais ce peut également être un autre type de script (par exemple [WebGL](/fr/docs/Apprendre/WebGL)). |

## Gestion de l'édition

Ces éléments permettent d'indiquer si des portions du texte ont été modifiées.

| Élément | Description |
| ------- | ----------- |
| {{HTMLElement("del")}} | L'élément HTML **`<del>`** représente une portion de texte ayant été supprimée d'un document. Cet élément est souvent (mais pas nécessairement) affiché rayé. L'élément [`<ins>`](/fr/docs/Web/HTML/Element/ins) est quant à lui utilisé pour représenter des portions de texte ajoutées. |
| {{HTMLElement("ins")}} | L'élément HTML **`<ins>`** représente un fragment de texte qui a été ajouté dans un document. |

## Contenu tabulaire

Les éléments listés ici permettent de créer et de gérer des données tabulaires.

| Élément | Description |
| ------- | ----------- |
| {{HTMLElement("caption")}}  | L'élément **`<caption>`** définit la légende (ou le titre) d'un tableau. |
| {{HTMLElement("col")}}      | L'élément HTML **`<col>`** définit une colonne appartenant à un tableau et est utilisé afin de définir la sémantique commune à toutes ses cellules. On trouve généralement cet élément au sein d'un élément [`<colgroup>`](/fr/docs/Web/HTML/Element/colgroup). |
| {{HTMLElement("colgroup")}} | L'élément HTML **`<colgroup>`** définit un groupe de colonnes au sein d'un tableau. |
| {{HTMLElement("table")}}    | L'élément HTML **`<table>`** permet de représenter un tableau de données, c'est-à-dire des informations exprimées sur un tableau en deux dimensions. |
| {{HTMLElement("tbody")}}    | L'élément [HTML](/fr/docs/Web/HTML) **`<tbody>`** permet de regrouper un ou plusieurs éléments [`<tr>`](/fr/docs/Web/HTML/Element/tr) afin de former le corps d'un tableau HTML ([`<table>`](/fr/docs/Web/HTML/Element/table)). |
| {{HTMLElement("td")}}       | L'élément [HTML](/fr/docs/Web/HTML) **`<td>`** définit une cellule d'un tableau qui contient des données. Cet élément fait partie du _modèle de tableau_. |
| {{HTMLElement("tfoot")}}    | L'élément [HTML](/fr/docs/Web/HTML) **`<tfoot>`** permet de définir un ensemble de lignes qui résument les colonnes d'un tableau. |
| {{HTMLElement("th")}}       | L'élément HTML **`<th>`** définit une cellule d'un tableau comme une cellule d'en-tête pour un groupe de cellule. La nature de ce groupe est définie grâce aux attributs [`scope`](#scope) et [`headers`](#headers). |
| {{HTMLElement("thead")}}    | L'élément [HTML](/fr/docs/Web/HTML) **`<thead>`** définit un ensemble de lignes qui définit l'en-tête des colonnes d'un tableau. |
| {{HTMLElement("tr")}}       | L'élément HTML **`<tr>`** définit une ligne de cellules dans un tableau. Une ligne peut être constituée d'éléments [`<td>`](/fr/docs/Web/HTML/Element/td) (les données des cellules) et [`<th>`](/fr/docs/Web/HTML/Element/th) (les cellules d'en-têtes). |

## Formulaires

HTML fournit un certain nombre d'éléments qui peuvent être utilisés ensemble pour créer des formulaires que l'utilisateur peut remplir et soumettre au site Web ou à l'application. De nombreuses informations complémentaires à ce sujet sont disponibles dans le [guide des formulaires HTML](/fr/docs/Learn/Forms).

| Élément | Description |
| ------- | ----------- |
| {{HTMLElement("button")}}   | L'élément **`<button>`** représente un bouton cliquable, utilisé pour soumettre [des formulaires](/fr/docs/Learn/Forms) ou n'importe où dans un document pour une fonctionnalité de bouton accessible et standard. Par défaut, les boutons HTML sont présentés dans un style ressemblant à la plate-forme d'exécution de [l'agent utilisateur](/fr/docs/Glossary/User_agent), mais vous pouvez modifier l'apparence des boutons avec [CSS](/fr/docs/Web/CSS). |
| {{HTMLElement("datalist")}} | L'élément HTML **`<datalist>`** contient un ensemble d'éléments [`<option>`](/fr/docs/Web/HTML/Element/Option) qui représentent les valeurs possibles pour d'autres contrôles. |
| {{HTMLElement("fieldset")}} | L'élément HTML **`<fieldset>`** est utilisé afin de regrouper plusieurs contrôles interactifs ainsi que des étiquettes ([`<label>`](/fr/docs/Web/HTML/Element/Label)) dans un formulaire HTML. |
| {{HTMLElement("form")}}     | L'élément HTML **`<form>`** représente un formulaire, c'est-à-dire une section d'un document qui contient des contrôles interactifs permettant à un utilisateur de fournir des informations. |
| {{HTMLElement("input")}}    | L'élément [HTML](/fr/docs/Web/HTML) **`<input>`** est utilisé pour créer un contrôle interactif dans un formulaire web qui permet à l'utilisatrice ou l'utilisateur de saisir des données. Les saisies possibles et le comportement de l'élément `<input>` dépendent fortement de la valeur indiquée dans son attribut `type` et de ses autres attributs. Il existe différents contrôles pour la saisie, qui dépendent de l'appareil utilisé et de [l'agent utilisateur](/fr/docs/Glossary/User_agent). |
| {{HTMLElement("label")}}    | L'élément HTML **`<label>`** représente une légende pour un objet d'une interface utilisateur. Il peut être associé à un contrôle en utilisant l'attribut `for` ou en plaçant l'élément du contrôle à l'intérieur de l'élément `<label>`. Un tel contrôle est appelé _contrôle étiqueté_ par l'élément `<label>`. |
| {{HTMLElement("legend")}}   | L'élément HTML **\<legend>** représente une légende pour le contenu de son élément parent {{HTMLElement("fieldset")}}. |
| {{HTMLElement("meter")}}    | L'élément HTML **`<meter>`** représente une valeur scalaire dans un intervalle donné ou une valeur fractionnaire. |
| {{HTMLElement("optgroup")}} | L'élément HTML **`<optgroup>`**, utilisé dans un formulaire, permet de créer un groupe d'options parmi lesquelles on peut choisir dans un élément {{HTMLElement("select")}}. |
| {{HTMLElement("option")}}   | L'élément HTML **`<option>`**, utilisé dans un formulaire, permet de représenter un contrôle au sein d'un élément {{HTMLElement("select")}}, {{HTMLElement("optgroup")}} ou {{HTMLElement("datalist")}}. Cet élément peut donc représenter des éléments d'un menu dans un document HTML. |
| {{HTMLElement("output")}}   | L'élément HTML **`<output>`** représente un conteneur dans lequel un site ou une application peut injecter le résultat d'un calcul ou d'une action utilisateur. |
| {{HTMLElement("progress")}} | L'élément HTML **`<progress>`** indique l'état de complétion d'une tâche et est généralement représenté par une barre de progression. |
| {{HTMLElement("select")}}   | L'élément HTML **`<select>`** représente un contrôle qui fournit une liste d'options parmi lesquelles l'utilisateur pourra choisir. |
| {{HTMLElement("textarea")}} | L'élément HTML **`<textarea>`** représente un contrôle qui permet d'éditer du texte sur plusieurs lignes. |

## Éléments interactifs

HTML fournit différents éléments qui permettent de créer des interfaces utilisateur interactives.

| Élément | Description |
| ------- | ----------- |
| {{HTMLElement("details")}} | L'élément HTML **`<details>`** est utilisé comme un outil permettant de révéler une information. Un résumé ou un intitulé peuvent être fournis grâce à un élément [`<summary>`](/fr/docs/Web/HTML/Element/summary). |
| {{HTMLElement("dialog")}}  | L'élément HTML **`<dialog>`** représente une boite de dialogue ou un composant interactif (par exemple un inspecteur ou une fenêtre). |
| {{HTMLElement("summary")}} | L'élément HTML **`<summary>`** représente une boîte permettant de révéler le contenu d'un résumé ou d'une légende pour le contenu d'un élément {{HTMLElement("details")}}. En cliquant sur l'élément `<summary>`, on passe de l'état affiché à l'état masqué (et vice versa) de l'élément `<details>` parent. |

## _Web Components_

Les composants web (ou « _Web Components_ ») permettent de créer et d'utiliser des éléments personnalisés comme s'ils étaient des éléments HTML classiques. Cela permet également de créer ses propres versions des éléments standards HTML.

| Élément | Description |
| ------- | ----------- |
| {{HTMLElement("slot")}}     | L'élément HTML **`<slot>`** représente un emplacement d'un composant web qu'on peut remplir avec son propre balisage. On peut ainsi obtenir un document construit avec différents arbres DOM. Cet élément fait partie des outils relatifs [aux composants web (Web Components)](/fr/docs/Web/Web_Components). |
| {{HTMLElement("template")}} | L'élément HTML **`<template>`** (ou **_Template Content_** ou modèle de contenu) est un mécanisme utilisé pour stocker du contenu HTML (côté client) qui ne doit pas être affiché lors du chargement de la page mais qui peut être instancié et affiché par la suite grâce à un script JavaScript. |

## Éléments obsolètes ou dépréciés

> **Attention :** Ces éléments sont d'anciens éléments HTML qui sont désormais dépréciés et qui ne devraient plus être utilisés. **Ces éléments ne doivent pas être utilisés dans de nouveaux projets et doivent être remplacés dans les anciens projets dès que possible.** Ces éléments uniquement sont listés ici à des fins d'information.

| Élément | Description |
| ------- | ----------- |
| {{HTMLElement("acronym")}}   | > **Attention :** Cette fonctionnalité a été supprimée des standards du Web. Bien que quelques navigateurs puissent encore la supporter, elle est en cours d'éradication. Ne l'utilisez ni dans d'anciens projets, ni dans de nouveaux. Les pages et applications Web l'utilisant peuvent cesser de fonctionner à tout moment. |
| {{HTMLElement("applet")}}    | > **Attention :** Cette fonctionnalité a été supprimée des standards du Web. Bien que quelques navigateurs puissent encore la supporter, elle est en cours d'éradication. Ne l'utilisez ni dans d'anciens projets, ni dans de nouveaux. Les pages et applications Web l'utilisant peuvent cesser de fonctionner à tout moment. |
| {{HTMLElement("bgsound")}}   | > **Attention :** Cette fonctionnalité a été supprimée des standards du Web. Bien que quelques navigateurs puissent encore la supporter, elle est en cours d'éradication. Ne l'utilisez ni dans d'anciens projets, ni dans de nouveaux. Les pages et applications Web l'utilisant peuvent cesser de fonctionner à tout moment. |
| {{HTMLElement("big")}}       | > **Attention :** Cette fonctionnalité a été supprimée des standards du Web. Bien que quelques navigateurs puissent encore la supporter, elle est en cours d'éradication. Ne l'utilisez ni dans d'anciens projets, ni dans de nouveaux. Les pages et applications Web l'utilisant peuvent cesser de fonctionner à tout moment. |
| {{HTMLElement("blink")}}     | > **Attention :** Cette fonctionnalité a été supprimée des standards du Web. Bien que quelques navigateurs puissent encore la supporter, elle est en cours d'éradication. Ne l'utilisez ni dans d'anciens projets, ni dans de nouveaux. Les pages et applications Web l'utilisant peuvent cesser de fonctionner à tout moment. |
| {{HTMLElement("center")}}    | > **Attention :** Cette fonctionnalité est obsolète. Bien qu'encore supportée par des navigateurs, son utilisation est découragée pour tout nouveau projet. Évitez de l'utiliser. |
| {{HTMLElement("content")}}   | > **Attention :** Cette fonctionnalité a été supprimée des standards du Web. Bien que quelques navigateurs puissent encore la supporter, elle est en cours d'éradication. Ne l'utilisez ni dans d'anciens projets, ni dans de nouveaux. Les pages et applications Web l'utilisant peuvent cesser de fonctionner à tout moment. |
| {{HTMLElement("dir")}}       | > **Attention :** Cette fonctionnalité est obsolète. Bien qu'encore supportée par des navigateurs, son utilisation est découragée pour tout nouveau projet. Évitez de l'utiliser. |
| {{HTMLElement("font")}}      | > **Attention :** Cette fonctionnalité a été supprimée des standards du Web. Bien que quelques navigateurs puissent encore la prendre en charge, elle est en cours d'éradication. Ne l'utilisez ni dans d'anciens projets, ni dans de nouveaux. Les pages et applications web l'utilisant peuvent cesser de fonctionner à tout moment. |
| {{HTMLElement("frame")}}     | L'élément [HTML](/fr/docs/Web/HTML) **`<frame>`** définit une zone particulière dans laquelle un autre document HTML est affiché. Une `<frame>` (un «&nbsp;cadre&nbsp;» en français) doit être utilisée dans un élément [`<frameset>`](/fr/docs/Web/HTML/Element/frameset). |
| {{HTMLElement("frameset")}}  | > **Attention :** Cette fonctionnalité a été supprimée des standards du Web. Bien que quelques navigateurs puissent encore la prendre en charge, elle est en cours d'éradication. Ne l'utilisez ni dans d'anciens projets, ni dans de nouveaux. Les pages et applications web l'utilisant peuvent cesser de fonctionner à tout moment. |
| {{HTMLElement("image")}}     | L'élément HTML **`<hgroup>`** représente un titre de plusieurs niveaux pour une section d'un document. Il regroupe un ensemble d'éléments [`<h1>–<h6>`](/fr/docs/Web/HTML/Element/Heading_Elements). |
| {{HTMLElement("keygen")}}    | L'élément HTML **`<image>`** est un élément obsolète, remplacé depuis longtemps par l'élément standard {{HTMLElement("img")}}. |
| {{HTMLElement("marquee")}}   | L'élément HTML **`<keygen>`** existe afin de faciliter la génération de clés et l'envoi d'une clé publique via un formulaire HTML. Le mécanisme utilisé est conçu pour être utilisé avec les systèmes de gestion de certificats électroniques. L'élément `keygen` est prévu pour être utilisé dans un formulaire HTML avec d'autres informations permettant de construire une requête de certificat, le résultat du processus étant un certificat signé. |
| {{HTMLElement("menuitem")}}  | L'élément HTML **`<marquee>`** est utilisé pour insérer une zone de texte défilant. |
| {{HTMLElement("nobr")}}      | L'élément HTML **`<menuitem>`** représente une commande qu'un utilisateur peut utiliser via un menu contextuel ou un menu rattaché à un bouton. |
| {{HTMLElement("noembed")}}   | L'élément HTML **`<nobr>`** évite qu'un texte soit coupé par un retour à la ligne automatique ; il est donc affiché sur une seule ligne. Il peut être alors nécessaire d'utiliser les barres de défilement pour lire le texte en intégralité. |
| {{HTMLElement("noframes")}}  | L'élément **`<noembed>`** est une façon obsolète et non standardisée de fournir une alternative de contenu pour les navigateurs ne supportant pas l'élément {{HTMLElement("embed")}} ou des [catégories de contenu](/fr/docs/Web/HTML/Catégorie_de_contenu) qu'un auteur aimerait utiliser. |
| {{HTMLElement("param")}}     | L'élément HTML obsolète **`<noframes>`** est utilisé par les navigateurs qui ne supportent pas les éléments {{HTMLElement("frame")}}, ou qui sont configurés afin de ne pas les supporter. |
| {{HTMLElement("plaintext")}} | L'élément HTML **`<param>`** définit les paramètres qui peuvent être employés dans un élément {{HTMLElement("object")}}. |
| {{HTMLElement("rb")}}        | L'élément HTML **`<plaintext>`** permet d'afficher du texte qui n'est pas interprété comme du HTML. Il ne possède pas de balise de fermeture, car tout ce qui suit n'est plus considéré comme du HTML. |
| {{HTMLElement("rtc")}}       | L'élément de **base ruby (`<rb>`)** est utilisé afin de délimiter le composant texte de base d'une annotation {{HTMLElement("ruby")}}. Autrement dit, le texte qui est annoté. Un élément `<rb>` devrait encadrer chaque segment atomique du texte de base. |
| {{HTMLElement("shadow")}}    | L'élément **`<rtc>`** permet d'ajouter des notations Ruby sémantiques. Il est donc « proche » des éléments liées à la représentation Ruby comme {{HTMLElement("rb")}}, {{HTMLElement("ruby")}}. Les éléments {{HTMLElement("rb")}} peuvent être annotés pour la prononciation ({{HTMLElement("rt")}}) ou pour la sémantique ({{HTMLElement("rtc")}}). |
| {{HTMLElement("spacer")}}    | L'élément HTML **`<shadow>`** était utilisé comme un point d'insertion ({{glossary("insertion point")}}) du _shadow DOM_. Cet élément a été retiré de la spécification et est [désormais obsolète](https://github.com/w3c/webcomponents/commit/041ba5518b9372768234d2766de503b98a03fa45). |
| {{HTMLElement("strike")}}    | L'élément HTML **`<spacer>`** était utilisé pour insérer des blancs au sein d'une page web. Il a été créé par Netscape pour obtenir le même effet que celui qui était créé avec des images GIF d'un pixel, permettant d'ajouter des espaces blancs. Cependant, `<spacer>` n'est pas pris en charge par les principaux navigateurs principaux et il faut utiliser les règles CSS pour obtenir ces effets d'alignement. Firefox ne prend plus en charge cet élément depuis la version 4. |
| {{HTMLElement("tt")}}        | L'élément HTML **`<strike>`** permet de représenter du texte barré ou avec une ligne le traversant. |
| {{HTMLElement("xmp")}}       | L'élément HTML **`<tt>`** (pour _Teletype Text_) crée un élément en ligne, écrit dans la police à chasse fixe par défaut du navigateur. Cet élément a été conçu pour mettre en forme du texte comme s'il apparaissait sur un affichage à largeur fixe tel qu'un téléscripteur. |
