---
title: Liste des priorités de la documentation de MDN
slug: orphaned/MDN/Contribute/Documentation_priorities
tags:
  - Best practices
  - Community
  - MDN
  - Documentation
  - Priorities
translation_of: MDN/Contribute/Documentation_priorities
original_slug: MDN/Contribute/Documentation_priorities
---
{{MDNSidebar}}

Ce document définit les différents niveaux de priorité sur MDN, et indique quels sujets de documentation existent dans chaque niveau - nous les catégorisons entre **Niveau 1** et **Niveau 2**.

L'objectif de ce document est double :

- Aider à appliquer des mesures de priorité aux bogues de contenu pendant notre processus de triage, ce qui aide les contributeurs à prendre une décision sur les bogues sur lesquels travailler en découvrant ceux qui sont les plus importants pour le moment.
- Aider les contributeurs qui souhaitent travailler sur un sujet spécifique (plutôt que sur un bogue particulier) à décider du sujet où il serait le plus utile de consacrer du temps (par exemple, pour les personnes qui aiment exécuter des scripts de nettoyage automatique sur MDN).

L'importance relative de ces documents a été déterminée uniquement en fonction du nombre de pages vues. Il y a beaucoup de mesures que nous aurions pu utiliser, mais le nombre de pages vues est objectif et reste un bon indicateur. Les technologies web les plus importantes sont consultées plus souvent et, par conséquent, la résolution des problèmes liés à ces documents semble la plus importante.

Gardez également à l'esprit que ces niveaux sont constitués d'arborescences de documents isolés (c'est-à-dire la page liée, plus tous les documents de la hiérarchie qui lui sont inférieurs). Il arrive qu'un document de niveau 1 soit lié à un document de niveau 2, ou vice versa, et c'est normal.

Les chiffres entre parenthèses après chaque arbre de documents représentent le nombre de documents sous cet arbre pour l'anglais. Ces chiffres sont susceptibles de changer au fil du temps, et il faudra peut-être les revoir avant longtemps.

## Niveau 1

Le contenu de niveau 1 est le plus important sur MDN : il compte le plus grand nombre de lectrices et lecteurs. Il est censé couvrir les technologies les plus importantes pour la plateforme web.

- [Accessibilité](/fr/docs/Web/Accessibility) (104)
- [CSS : Feuilles de style en cascade](/fr/docs/Web/CSS) (933)
- [Événements](/fr/docs/Web/Events) (4)
- [HTML : HyperText Markup Language](/fr/docs/Web/HTML) (239)
- [HTTP](/fr/docs/Web/HTTP) (292)
- [JavaScript](/fr/docs/Web/JavaScript) (921)
- [Apprendre le développement web](/fr/docs/Learn) (355)
- [Médias sur le Web](/fr/docs/Web/Media) (17)
- [Performance](/fr/docs/Web/Performance) (16)
- [Vie privée](/fr/docs/Web/Privacy) (1)
- [Applications web progressives](/fr/docs/Web/Progressive_web_apps) (16)
- [Sécurité](/fr/docs/Web/Security) (27)
- [Référence des API Web](/fr/docs/Web/API) : Les interfaces des groupes suivants sont de niveau 1 (voir la section [API Web de niveau 1](#tier_1_webapis) ci-dessous pour un éventail plus large de ce que cela inclut (1189) :

  - Canvas API (112)
  - Clipboard API (13)
  - DOM (439)
  - DOM Events (22)
  - Fetch API (47)
  - File API (48)
  - HTML DOM (371)
  - URL API (43)
  - Web Storage API (8)
  - WebSockets API (28)
  - XMLHttpRequest (58)

- [Manifestes des applications web](/fr/docs/Web/Manifest) (19)
- [WebAssembly](/fr/docs/WebAssembly) (12)
- [Composants web](/fr/docs/Web/Web_Components) (5)

**Total des pages pour le niveau 1 : 4150**

## Niveau 2

Le contenu de niveau 2 est moins couramment utilisé, mais néanmoins utile.

- [CSS Houdini](/fr/docs/Web/Houdini) (1)
- [Développement de jeux vidéo](/fr/docs/Games) (73)
- [Guides pour les développeurs du Web](/fr/docs/Web/Guide) (56)
- [MathML](/fr/docs/Web/MathML) (38)
- [Le projet MDN](/fr/docs/MDN) (82). C'est important, mais les corrections seront principalement traitées par l'équipe principale du MDN).
- [SVG](/fr/docs/Web/SVG) (382)
- [Le glossaire](/fr/docs/Glossary) (534)
- [Référence des API Web](/fr/docs/Web/API) pour celles qui ne figurent pas parmi celles de niveau 1. (4701)
- [WebExtensions](/fr/docs/Mozilla/Add-ons/WebExtensions) (635). Pas vraiment un sujet en lien direct avec la plateforme web, mais quand même important.

**Total des pages pour le niveau 2 : 6502**

## Autres contenus

Il existe d'autres contenus sur MDN qui ne concernent pas la plateforme web (comme les contenus archivés, les documents spécifiques à Firefox sur les outils de développement ou les détails internes pour ce navigateur). Ce contenu a été complètement déprogrammé et, dans la plupart des cas, nous essayons de lui trouver une nouvelle place ou de le supprimer s'il n'est plus utile. Nous ne recommandons pas à notre communauté de consacrer du temps à des domaines qui ne sont pas explicitement répertoriés sur cette page.

## API Web niveau 1

Les documents de référence pour les interfaces des API qui suivent (et leurs pages enfant) sont actuellement considérés comme étant de niveau 1. Pour plus d'informations sur la justification de ces regroupements et priorités, voir le travail effectué dans <https://github.com/mdn/sprints/issues/3327>.

### Canvas API (112)

- [`CanvasGradient`](/fr/docs/Web/API/CanvasGradient) (2)
- [`CanvasImageSource`](/fr/docs/Web/API/CanvasImageSource) (1)
- [`CanvasPattern`](/fr/docs/Web/API/CanvasPattern) (2)
- [`CanvasRenderingContext2D`](/fr/docs/Web/API/CanvasRenderingContext2D) (71)
- [`ImageBitmap`](/fr/docs/Web/API/ImageBitmap) (4)
- [`ImageBitmapRenderingContext`](/fr/docs/Web/API/ImageBitmapRenderingContext) (2)
- [`ImageData`](/fr/docs/Web/API/ImageData) (5)
- [`OffscreenCanvas`](/fr/docs/Web/API/OffscreenCanvas) (8)
- [`Path2D`](/fr/docs/Web/API/Path2D) (3)
- [`RenderingContext`](/fr/docs/Web/API/RenderingContext) (1)
- [`TextMetrics`](/fr/docs/Web/API/TextMetrics) (13)

### Clipboard API (13)

- [`Clipboard`](/fr/docs/Web/API/Clipboard) (5)
- [`ClipboardEvent`](/fr/docs/Web/API/ClipboardEvent) (3)
- [`ClipboardItem`](/fr/docs/Web/API/ClipboardItem) (5)

### DOM (439)

> **Note :** « DOM » n'est qu'un groupe partiel - nous n'avons inclus que les documents relatifs à l'interface ayant le plus grand nombre de pages vues, afin de maintenir la taille du niveau 1 à un nombre gérable. Les autres interfaces DOM qui ne figurent pas dans cette liste sont dans le niveau 2.

- [`AbortController`](/fr/docs/Web/API/AbortController) (4)
- [`ChildNode`](/fr/docs/Web/API/ChildNode) (5)
- [`CustomEvent`](/fr/docs/Web/API/CustomEvent) (4)
- [`Document`](/fr/docs/Web/API/Document) (164)
- [`DOMParser`](/fr/docs/Web/API/DOMParser) (2)
- [`DOMString`](/fr/docs/Web/API/DOMString) (2)
- [`Element`](/fr/docs/Web/API/Element) (176)
- [`Event`](/fr/docs/Web/API/Event) (24)
- [`EventTarget`](/fr/docs/Web/API/EventTarget) (5)
- [`HTMLCollection`](/fr/docs/Web/API/HTMLCollection) (4)
- [`MutationObserver`](/fr/docs/Web/API/MutationObserver) (5)
- [`Node`](/fr/docs/Web/API/Node) (36)
- [`NodeList`](/fr/docs/Web/API/NodeList) (7)
- [`USVString`](/fr/docs/Web/API/USVString) (1)

### DOM Events (22)

> **Note :** « DOM Events » n'est qu'un groupe partiel - nous n'avons inclus que les documents relatifs à l'interface ayant le plus grand nombre de pages vues, afin de maintenir la taille du niveau 1 à un nombre raisonnable. Les autres interfaces DOM Events qui ne figurent pas dans cette liste se trouvent au niveau 2.

- [`EventListener`](/fr/docs/Web/API/EventListener) (2)
- [`KeyboardEvent`](/fr/docs/Web/API/KeyboardEvent) (20)

### Fetch API (47)

- [`Body`](/fr/docs/Web/API/Body) (8)
- [`Headers`](/fr/docs/Web/API/Headers) (11)
- [`Request`](/fr/docs/Web/API/Request) (15)
- [`Response`](/fr/docs/Web/API/Response) (13)

### File API (48)

- [`Blob`](/fr/docs/Web/API/Blob) (8)
- [`File`](/fr/docs/Web/API/File) (15)
- [`FileList`](/fr/docs/Web/API/FileList) (1)
- [`FileReader`](/fr/docs/Web/API/FileReader) (19)
- [`FileReaderSync`](/fr/docs/Web/API/FileReaderSync) (5)

### HTML DOM (371)

> **Note :** « HTML DOM » n'est qu'un groupe partiel - nous n'avons inclus que les documents de l'interface ayant le plus grand nombre de pages vues, afin de maintenir la taille du niveau 1 à un nombre gérable. Les autres interfaces HTML DOM qui ne figurent pas dans cette liste sont dans le niveau 2.

- [`History`](/fr/docs/Web/API/History) (9)
- [`HTMLAudioElement`](/fr/docs/Web/API/HTMLAudioElement) (4)
- [`HTMLCanvasElement`](/fr/docs/Web/API/HTMLCanvasElement) (14)
- [`HTMLElement`](/fr/docs/Web/API/HTMLElement) (45)
- [`HTMLFormElement`](/fr/docs/Web/API/HTMLFormElement) (17)
- [`HTMLInputElement`](/fr/docs/Web/API/HTMLInputElement) (17)
- [`HTMLTextAreaElement`](/fr/docs/Web/API/HTMLTextAreaElement) (2)
- [`Location`](/fr/docs/Web/API/Location) (17)
- [`Navigator`](/fr/docs/Web/API/Navigator) (45)
- [`NavigatorLanguage`](/fr/docs/Web/API/NavigatorLanguage) (3)
- [`NavigatorOnLine`](/fr/docs/Web/API/NavigatorOnLine) (3)
- [`Window`](/fr/docs/Web/API/Window) (182)
- [`WindowEventHandlers`](/fr/docs/Web/API/WindowEventHandlers) (13)

### URL API (43)

- [`URL`](/fr/docs/Web/API/URL) (18)
- [`URLSearchParams`](/fr/docs/Web/API/URLSearchParams) (14)
- [`URLUtilsReadOnly`](/fr/docs/Web/API/URLUtilsReadOnly) (11)

### Web Storage API (8)

- [`Storage`](/fr/docs/Web/API/Storage) (7)
- [`StorageEvent`](/fr/docs/Web/API/StorageEvent) (1)

### WebSockets API (28)

- [`CloseEvent`](/fr/docs/Web/API/CloseEvent) (3)
- [`MessageEvent`](/fr/docs/Web/API/MessageEvent) (7)
- [`WebSocket`](/fr/docs/Web/API/WebSocket) (18)

### XMLHttpRequest (58)

- [`FormData`](/fr/docs/Web/API/FormData) (12)
- [`XMLHttpRequest`](/fr/docs/Web/API/XMLHttpRequest) (40)
- [`XMLHttpRequestEventTarget`](/fr/docs/Web/API/XMLHttpRequestEventTarget) (6)
