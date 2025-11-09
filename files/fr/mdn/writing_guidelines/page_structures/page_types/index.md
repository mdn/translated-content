---
title: Types de pages
slug: MDN/Writing_guidelines/Page_structures/Page_types
l10n:
  sourceCommit: c68f51255b41e080f34f27aafc6fcd3aafa52114
---

Il existe plusieurs types de pages qui sont utilisés de façon répétée sur MDN.
Cet article décrit ces types de pages, leur objectif, et donne des exemples pour chacun ainsi que des modèles à utiliser lors de la création d'une nouvelle page.

Il existe trois grandes catégories de types de pages sur MDN, bien que certains types puissent appartenir à plusieurs catégories.

- Les pages de **référence** décrivent les détails d'un élément et sont organisées selon la structure de l'élément décrit.
- Les pages de **guide** expliquent comment faire ou utiliser quelque chose, et sont organisées selon les objectifs du·de la lecteur·ice.
- Les pages de **navigation** servent principalement à fournir des liens vers d'autres pages, généralement sur des sujets associés.

## Création d'une nouvelle page

Ajouter un nouveau document est relativement simple, surtout si vous pouvez commencer par copier un fichier `index.md` d'un sujet similaire.
Quelques points à garder à l'esprit&nbsp;:

- Les documents sont rédigés en Markdown dans un fichier `index.md`.
- Par exemple, si vous créez un nouveau document pour un en-tête HTTP appelé `foo`, créez un nouveau dossier à `files/en-us/web/http/reference/headers/foo` et placez le fichier Markdown dans ce dossier (`files/en-us/web/http/reference/headers/foo/index.md`).
- Le fichier `index.md` d'un document doit commencer par un front-matter définissant le `title`, le `slug` et, la plupart du temps, le `page-type`.
  Il peut être utile de consulter le front-matter d'un fichier `index.md` similaire.

## Utiliser les modèles

Lorsque vous créez une nouvelle page, vous pouvez vous assurer d'utiliser la bonne structure et le bon contenu en consultant l'un de nos modèles de page — voir les sections ci-dessous.
Vous pouvez trouver le code source exact de chaque modèle (si vous souhaitez le copier) en suivant le lien «&nbsp;Source sur **GitHub**&nbsp;» en bas de chaque modèle.
Ces modèles de page n'ont pas beaucoup de sens en tant que pages publiées, mais si vous consultez leur code source, vous verrez qu'ils contiennent de nombreux commentaires utiles, des espaces réservés et des conseils détaillant comment remplir les informations manquantes et créer votre page.

En haut de chaque modèle, vous trouverez une section intitulée _À supprimer avant publication_ — elle contient des informations sur la façon de remplir le titre de la page, le slug, le menu latéral et les tags (par exemple, des informations qui n'apparaissent pas dans le corps de l'article).
Vous devez supprimer cette section après avoir suivi les instructions, avant que la page ne soit considérée comme terminée.

## Anciennes mises en page

Il arrive parfois de tomber sur d'anciennes pages de référence qui sont très différentes des modèles présentés ici.
Par exemple, les anciennes pages d'interface regroupaient tous les membres d'une interface sur une seule page, et il n'existait pas de pages individuelles pour chaque méthode/propriété/constructeur/écouteur d'événement.

Si vous tombez sur un ensemble de pages au format ancien, nous serions ravi·e·s que vous les mettiez à jour au nouveau format&nbsp;!
Cependant, nous comprenons que cela puisse représenter beaucoup de travail.
Si la quantité d'informations à mettre à jour n'est pas trop importante et que vous avez un peu de temps, n'hésitez pas à essayer de les mettre à jour au nouveau format.

Si le travail est plus conséquent, vous devez prendre en compte quelques facteurs pour prioriser la mise à jour&nbsp;:

- À quel point l'information est-elle obsolète&nbsp;?
- Quelle est la qualité de l'information&nbsp;?
- La fonctionnalité est-elle populaire&nbsp;? L'information est-elle recherchée&nbsp;?

Si vous souhaitez constituer une équipe pour travailler sur une mise à jour, ou simplement signaler ou discuter d'un contenu à mettre à jour, n'hésitez pas à [ouvrir un ticket de contenu <sup>(angl.)</sup>](https://github.com/mdn/content/issues) ou à [nous demander de l'aide](/fr/docs/MDN/Community/Communication_channels).

## Clé front-matter « page-type »

Nous avons défini une clé front-matter `page-type` pour identifier clairement le type de page MDN. Les modèles ci-dessous indiquent quelle valeur de `page-type` utiliser pour chaque type de page.

Pour la liste complète des types de pages, voir [La clé front-matter page-type](/fr/docs/MDN/Writing_guidelines/Page_structures/Page_types/Page_type_key).

## Modèles de page

Vous trouverez ci-dessous des exemples des différents types de pages présents sur MDN, ainsi que des modèles à utiliser pour créer de nouveaux contenus selon le type de contenu à présenter, notamment&nbsp;:

- [Page d'accueil d'API](#page_daccueil_dapi)
- [Page de référence d'API](#page_de_référence_dapi)
- [Sous-page de référence d'API](#sous-page_de_référence_dapi)
- [Page de référence ARIA](#page_de_référence_aria)
- [Page conceptuelle](#page_conceptuelle)
- [Page de référence de fonctionnalité CSS](#page_de_référence_de_fonctionnalité_css)
- [Page d'accueil de module CSS](#page_daccueil_de_module_css)
- [Page de glossaire](#page_de_glossaire)
- [Page de référence d'élément HTML](#page_de_référence_délément_html)
- [Page de référence d'attribut HTML](#page_de_référence_dattribut_html)
- [Page de référence d'en-tête HTTP](#page_de_référence_den-tête_http)
- [Page d'accueil](#page_daccueil)
- [Page de référence d'élément SVG](#page_de_référence_délément_svg)
- [Pages «&nbsp;Apprendre le développement web&nbsp;»](#pages_«_apprendre_le_développement_web_»)

Chaque section inclut des liens vers des exemples de pages réelles pour chaque type.

### Page d'accueil d'API

Une **page d'accueil d'API** ({{Glossary("API")}}) donne un aperçu de ce que fait une API particulière, ainsi que des liens vers la documentation de chaque interface, global, fonction, etc. proposés par l'API.
Elle ne lie pas directement vers des méthodes ou propriétés spécifiques des classes de l'API, sauf dans le texte d'introduction.
Il s'agit principalement d'une page de _navigation_, mais elle sert aussi de page de _référence_ synthétique pour l'API.

Il existe des cas où plusieurs API distinctes sont définies dans leurs propres spécifications, mais sont étroitement liées et il est donc pertinent de les regrouper sur une seule page d'accueil d'API.
Par exemple, la [Generic Sensor API](https://w3c.github.io/sensors/) couvre les aspects généraux des capteurs, mais des aspects plus spécifiques sont couverts dans d'autres API comme [Ambient Light Sensor](https://w3c.github.io/ambient-light/), [Motion Sensor](https://w3c.github.io/motion-sensors/), etc.
Dans ces cas, de nombreux concepts de haut niveau sont identiques, il n'est donc pas pertinent de les répéter sur plusieurs pages d'accueil.
Il est alors préférable, pour éviter la répétition et améliorer la recherche, de tout regrouper sous une seule page d'accueil «&nbsp;Web sensors&nbsp;».

#### Exemple

- [WebVR API](/fr/docs/Web/API/WebVR_API)

#### Modèle

- [Modèle de page d'accueil d'API](/fr/docs/MDN/Writing_guidelines/Page_structures/Page_types/API_landing_page_template)

### Page de référence d'API

> [!NOTE]
> Aussi appelée _page d'accueil d'interface_.

Une **page de référence d'API** liste toutes les méthodes, propriétés, événements, etc. qui sont membres d'une interface ou classe donnée.
Elle donne un aperçu de ce que fait la classe ou l'interface, ou de son usage, et fournit des liens vers la documentation de chacun de ses membres.
Elle est plus détaillée qu'une page d'accueil d'API, qui lie généralement vers plusieurs pages de référence d'API.

#### Exemple

- [L'interface de requête](/fr/docs/Web/API/Request) de [L'API Fetch](/fr/docs/Web/API/Fetch_API).

#### Templates

- [API reference page template](/fr/docs/MDN/Writing_guidelines/Page_structures/Page_types/API_reference_page_template)

### Sous-page de référence d'API

Une **sous-page de référence d'API** est une page enfant d'une page de référence d'API.
Elle documente en détail un seul membre d'interface.

#### Exemples

- [Méthode `count()`](/fr/docs/Web/API/IDBIndex/count) de l'interface [IDBIndex](/fr/docs/Web/API/IDBIndex) (faisant partie de l'[API IndexedDB](/fr/docs/Web/API/IndexedDB_API))
- [Propriété `capabilities`](/fr/docs/Web/API/VRDisplay/capabilities) de l'interface [VRDisplay](/fr/docs/Web/API/VRDisplay) (faisant partie de l'[API WebVR](/fr/docs/Web/API/WebVR_API))
- [Constructeur `Request()`](/fr/docs/Web/API/Request/Request) de l'interface [Request](/fr/docs/Web/API/Request) (faisant partie de l'[API Fetch](/fr/docs/Web/API/Fetch_API))
- [Événement `vrdisplaypresentchange`](/fr/docs/Web/API/Window/vrdisplaypresentchange_event) (faisant partie de l'[API WebVR](/fr/docs/Web/API/WebVR_API), rattaché à l'interface [Window](/fr/docs/Web/API/Window))

#### Modèles

- [Modèle de sous-page de méthode d'API](/fr/docs/MDN/Writing_guidelines/Page_structures/Page_types/API_method_subpage_template)
- [Modèle de sous-page de propriété d'API](/fr/docs/MDN/Writing_guidelines/Page_structures/Page_types/API_property_subpage_template)
- [Modèle de sous-page de constructeur d'API](/fr/docs/MDN/Writing_guidelines/Page_structures/Page_types/API_constructor_subpage_template)
- [Modèle de sous-page d'événement d'API](/fr/docs/MDN/Writing_guidelines/Page_structures/Page_types/API_event_subpage_template)

### Page de référence d'élément HTML

Une **page de référence HTML** liste tous les attributs disponibles sur un élément HTML, explique l'objectif et l'utilisation de l'élément, et fournit des exemples, des informations sur la compatibilité des navigateurs et d'autres données importantes.

#### Exemple

- [Élément `<video>`](/fr/docs/Web/HTML/Reference/Elements/video)

#### Modèles

- [Modèle de page d'élément HTML](/fr/docs/MDN/Writing_guidelines/Page_structures/Page_types/HTML_element_page_template)

### Page de référence d'attribut HTML

Une page de référence d'attribut HTML liste toutes les valeurs existantes pour un attribut HTML, explique l'objectif et les cas d'utilisation de l'attribut, et fournit des exemples, des informations sur la compatibilité des navigateurs et d'autres données importantes.

> [!NOTE]
> Les attributs spécifiques à un élément (par exemple, `placeholder` pour `<input>`) ne nécessitent pas de page séparée si l'attribut peut être suffisamment couvert dans la page de référence de l'élément parent (par exemple, l'attribut `placeholder` doit être documenté sur la page de l'élément `<input>`, et non comme une page indépendante).

#### Exemple

- [Attribut `class`](/fr/docs/Web/HTML/Reference/Global_attributes/class)

#### Modèles

- [Modèle de page d'attribut HTML](/fr/docs/MDN/Writing_guidelines/Page_structures/Page_types/HTML_attribute_page_template)

### Page de référence d'élément SVG

Une **page de référence SVG** liste tous les attributs disponibles sur un élément SVG, explique l'objectif et l'utilisation de l'élément, et fournit des exemples, des informations sur la compatibilité des navigateurs et d'autres données importantes.

#### Exemple

- [Élément \<g>](/fr/docs/Web/SVG/Reference/Element/g)

#### Modèles

- [Modèle de page d'élément SVG](/fr/docs/MDN/Writing_guidelines/Page_structures/Page_types/SVG_element_page_template)

### Page d'accueil de module CSS

Chaque **module [CSS](/fr/docs/Web/CSS)** représente une spécification CSS qui fournit la prise en charge de certaines fonctionnalités et implémentations en CSS. Par exemple, le module [Modèle de boîte CSS](/fr/docs/Web/CSS/Guides/Box_model) représente la [spécification](/fr/docs/Web/CSS/Guides/Box_model#spécifications) qui décrit les propriétés de marge et de remplissage permettant de créer des espacements dans et autour d'une boîte CSS.

Une **page d'accueil de module CSS** donne un aperçu des fonctionnalités offertes par le module et liste toutes les propriétés, types de données, fonctions CSS, etc. proposés par le module. Lorsque c'est possible, la page d'accueil du module CSS propose une démonstration rapide de ce qu'il est possible de réaliser avec les propriétés du module via un exemple interactif.
La page d'accueil du module sert principalement de page de _navigation_, mais fait aussi office de page de _référence_ synthétique pour le module.

Certaines propriétés et fonctionnalités associées qui appartiennent à d'autres modules, mais qui sont étroitement liées à la fonctionnalité offerte par le module que vous documentez, peuvent aussi être abordées dans une section _Concepts associés_.
Par exemple, le type de données `<easing-function>` et la media query `prefers-reduced-motion` ne sont pas couverts dans le module CSS animations, mais comme ils sont étroitement liés aux animations CSS, il est pertinent de les mettre en avant dans la section [Concepts associés](/fr/docs/Web/CSS/Guides/Animations#concepts_associés) de la page d'accueil du module CSS animations.

#### Exemples

- [Animations CSS](/fr/docs/Web/CSS/Guides/Animations)
- [Interface utilisateur CSS de base](/fr/docs/Web/CSS/Guides/Basic_user_interface)
- [Effets de filtre CSS](/fr/docs/Web/CSS/Guides/Filter_effects)
- [Alignement du défilement CSS](/fr/docs/Web/CSS/Guides/Scroll_snap)

#### Modèles

- [Modèle de page d'accueil de module CSS](/fr/docs/MDN/Writing_guidelines/Page_structures/Page_types/CSS_module_landing_page_template)

### Page de référence de fonctionnalité CSS

Une **page de référence CSS** liste toutes les syntaxes disponibles pour une fonctionnalité CSS telle qu'un sélecteur ou une propriété, et explique l'objectif et l'utilisation de la fonctionnalité. Elle fournit aussi des exemples, des informations sur la compatibilité des navigateurs et d'autres données importantes.

#### Exemples

- [Propriété `background-color`](/fr/docs/Web/CSS/Reference/Properties/background-color)
- [Pseudo-classe `:hover`](/fr/docs/Web/CSS/Reference/Selectors/:hover)
- [Règle @media](/fr/docs/Web/CSS/Reference/At-rules/@media)

#### Modèles

- [Modèle de page de propriété CSS](/fr/docs/MDN/Writing_guidelines/Page_structures/Page_types/CSS_property_page_template)
- [Modèle de page de sélecteur CSS](/fr/docs/MDN/Writing_guidelines/Page_structures/Page_types/CSS_selector_page_template)
- [Modèle de page de fonction CSS](/fr/docs/MDN/Writing_guidelines/Page_structures/Page_types/CSS_function_page_template)

### Page de référence d'en-tête HTTP

Une **page de référence d'en-tête HTTP** liste toutes les directives disponibles qu'un en-tête HTTP peut contenir, et explique l'objectif et l'utilisation de l'en-tête.
Elle fournit aussi des exemples, des informations sur la compatibilité des navigateurs et d'autres explications importantes.

#### Exemple

- [En-tête Cache-Control](/fr/docs/Web/HTTP/Reference/Headers/Cache-Control)

#### Modèles

- [Modèle de page d'en-tête HTTP](/fr/docs/MDN/Writing_guidelines/Page_structures/Page_types/HTTP_header_page_template)

### Page de référence ARIA

Une **page de référence ARIA** décrit un [rôle](/fr/docs/Web/Accessibility/ARIA/Reference/Roles) ou un [attribut](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes) qui définit des moyens de rendre le contenu web et les applications web plus accessibles aux personnes en situation de handicap.

#### Exemples

- [Attribut `aria-busy`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-busy)
- [Rôle `application`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/application_role)

#### Modèles

- [Modèle de page ARIA](/fr/docs/MDN/Writing_guidelines/Page_structures/Page_types/ARIA_Page_Template)

### Page conceptuelle

Une **page conceptuelle** est une page de _guide_ qui explique ou enseigne quelque chose.
En général, si une page contient principalement du texte explicatif et ne correspond à aucun autre type de page, il s'agit probablement d'une page conceptuelle.
Une discussion approfondie sur un sujet peut être répartie sur plusieurs pages conceptuelles, reliées entre elles à l'aide des macros [Next](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/previous_menu_next.rs) et [Previous](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/previous_menu_next.rs).

#### Exemples

- [Utiliser l'API WebVR](/fr/docs/Web/API/WebVR_API/Using_the_WebVR_API)
- [Visualisations avec l'API Web Audio](/fr/docs/Web/API/Web_Audio_API/Visualizations_with_Web_Audio_API)
- [Gestion des conflits](/fr/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts)

### Page de glossaire

Une **page de glossaire** contient une brève explication d'un terme, d'un sujet ou d'un concept.
Le premier paragraphe doit être une description simple et autonome du terme, ne dépassant pas quelques phrases.
Cela peut être suivi de liens vers des informations complémentaires dans la section **Voir aussi**.
Si la page devient trop longue (plus d'un écran environ), elle doit être convertie en page conceptuelle. Voir [Comment écrire et référencer une entrée du glossaire](/fr/docs/MDN/Writing_guidelines/Howto/Write_a_new_entry_in_the_glossary) pour plus de détails.

#### Exemples

- [DOM](/fr/docs/Glossary/DOM)
- [Exception](/fr/docs/Glossary/Exception)
- [Lien hypertexte](/fr/docs/Glossary/Hyperlink)

#### Modèles

- [Modèle de page de glossaire](/fr/docs/MDN/Writing_guidelines/Page_structures/Page_types/Glossary_page_template)

### Page d'accueil

Une **page d'accueil** sert de menu pour ses sous-pages, et est donc principalement une page de _navigation_.
La structure d'une page d'accueil est généralement utilisée pour la page racine d'un ensemble de pages sur un sujet particulier.
Elle commence par un bref résumé du sujet, puis présente une liste structurée de liens vers ses sous-pages, et éventuellement, du contenu supplémentaire utile au·à la lecteur·ice.

La liste des sous-pages peut être générée automatiquement à l'aide du modèle [`SubpagesWithSummaries` <sup>(angl.)</sup>](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/subpages_with_summaries.rs). Cependant, dans les cas plus complexes, la liste peut devoir être créée (et maintenue) manuellement.

### Pages « Apprendre le développement web »

La section [Apprendre le développement web](/fr/docs/Learn_web_development) de MDN s'adresse spécifiquement aux personnes qui apprennent les bases du développement web, et nécessite donc une approche différente du reste du contenu MDN. Vous trouverez plus de conseils dans [Règles de rédaction pour Apprendre le développement web](/fr/docs/MDN/Writing_guidelines/Learning_content).

Il n'existe que quelques types de pages dans «&nbsp;Apprendre le développement web&nbsp;»&nbsp;:

- **Page d'accueil de groupe de modules**, par exemple [Modules d'apprentissage de base](/fr/docs/Learn_web_development/Core)
  - : Ces pages contiennent un paragraphe d'introduction, une section détaillant les prérequis à avoir avant de commencer le groupe de modules, et une liste des modules, suivie d'une liste optionnelle de liens «&nbsp;Voir aussi&nbsp;».
- **Page d'accueil de module**, par exemple [Structurer le contenu avec HTML](/fr/docs/Learn_web_development/Core/Structuring_content)
  - : Ces pages contiennent un paragraphe d'introduction, une section détaillant les prérequis à avoir avant de commencer le module, et une liste des tutoriels inclus, suivie d'une liste optionnelle de «&nbsp;Tutoriels supplémentaires&nbsp;» qui sont liés mais ne font pas partie du parcours d'apprentissage principal, et d'une liste optionnelle de liens «&nbsp;Voir aussi&nbsp;».
- **Page de tutoriel**, par exemple [Syntaxe HTML de base](/fr/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax)
  - : La structure d'un tutoriel «&nbsp;Apprendre&nbsp;» n'est pas stricte, mais il doit proposer une expérience d'apprentissage pratique (voir [Règles de rédaction pour Apprendre le développement web&nbsp;> Approche](/fr/docs/MDN/Writing_guidelines/Learning_content#approche)), il doit comporter une section «&nbsp;Pré-requis&nbsp;» et «&nbsp;Objectifs d'apprentissage&nbsp;» en haut de page, et le contenu doit enseigner les objectifs d'apprentissage annoncés.

### Exemples

- [HTML](/fr/docs/Web/HTML)
- [CSS](/fr/docs/Web/CSS)
- [API Web](/fr/docs/Web/API)
- [JavaScript](/fr/docs/Web/JavaScript)
- [Apprendre le développement web](/fr/docs/Learn_web_development)
- [Ressources communautaires](/fr/docs/MDN/Community)

## Voir aussi

- [Composants de page](/fr/docs/MDN/Writing_guidelines/Writing_style_guide#page_components)
- [Créer des exemples de code en markdown](/fr/docs/MDN/Writing_guidelines/Code_style_guide)
