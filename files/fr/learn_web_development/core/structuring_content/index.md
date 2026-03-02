---
title: Structurer le contenu avec HTML
short-title: HTML
slug: Learn_web_development/Core/Structuring_content
l10n:
  sourceCommit: 25a3f6c781777a135143b0edd4b5e1f85857b802
---

{{NextMenu("Learn_web_development/Core/Structuring_content/Basic_HTML_syntax", "Learn_web_development/Core")}}

HTML est la technologie qui définit le contenu et la structure de n'importe quel site Web. Bien rédigé, il doit aussi définir la sémantique (le sens) du contenu de manière lisible par une machine, ce qui est essentiel pour l'accessibilité, le référencement et l'exploitation des fonctionnalités intégrées fournies par les navigateurs afin que le contenu fonctionne de façon optimale. Ce module couvre les bases du langage, avant d'aborder des domaines clés tels que la structure du document, les liens, les listes, les images, les formulaires, et plus encore.

## Prérequis

Avant de commencer ce module, vous n'avez pas besoin de connaissances préalables en HTML, mais vous devriez au moins être familier·ère avec l'utilisation d'un ordinateur et la navigation passive sur le Web (c'est‑à‑dire simplement le consulter et consommer du contenu). Vous devriez disposer d'un environnement de travail de base (comme expliqué dans [Installer les logiciels de base](/fr/docs/Learn_web_development/Getting_started/Environment_setup/Installing_software)), et comprendre comment créer et gérer des fichiers (comme expliqué dans [Gérer les fichiers](/fr/docs/Learn_web_development/Getting_started/Environment_setup/Dealing_with_files)). Les deux font partie de notre module pour débutant·e·s [Commencer avec le Web](/fr/docs/Learn_web_development/Getting_started/Your_first_website).

> [!NOTE]
> Si vous travaillez sur un ordinateur, une tablette ou un autre appareil où vous ne pouvez pas créer de fichiers, vous pouvez essayer d'exécuter le code dans un éditeur en ligne tel que [CodePen <sup>(angl.)</sup>](https://codepen.io/) ou [JSFiddle <sup>(angl.)</sup>](https://jsfiddle.net/).

## Tutoriels et défis

- [Syntaxe de base du HTML](/fr/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax)
  - : Couvre les notions fondamentales de {{Glossary("HTML")}} pour bien commencer — nous définissons les éléments, les attributs et d'autres termes importants, et expliquons comment ils s'intègrent dans le langage. Nous montrons aussi comment une page HTML typique est structurée et comment un élément HTML est construit, et expliquons d'autres caractéristiques de base importantes du langage. En chemin, nous manipulerons un peu de HTML pour susciter votre intérêt&nbsp;!
- [Qu'y a‑t‑il dans l'en‑tête&nbsp;? Métadonnées d'une page Web](/fr/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata)
  - : {{Glossary("Head","L'en-tête")}} d'un document HTML est la partie qui **n'est pas** affichée dans le navigateur lorsque la page est chargée. Elle contient des métadonnées telles que l'élément {{HTMLElement("title")}} de la page, des liens vers le {{Glossary("CSS")}} (si vous souhaitez mettre en forme votre contenu HTML avec du CSS), des liens vers des favicons personnalisés et des métadonnées (des informations sur le HTML, par exemple l'auteur et des mots‑clés importants décrivant le document).
- [Titres et paragraphes](/fr/docs/Learn_web_development/Core/Structuring_content/Headings_and_paragraphs)
  - : L'une des principales fonctions du HTML est d'organiser le texte afin qu'un navigateur puisse afficher un document HTML comme son auteur l'entend. Cet article explique comment le HTML peut fournir une structure de page fondamentale en définissant des titres et des paragraphes.
- [Emphase et importance](/fr/docs/Learn_web_development/Core/Structuring_content/Emphasis_and_importance)
  - : L'article précédent expliquait pourquoi la sémantique est importante en HTML et se concentrait sur les titres et les paragraphes. Cet article poursuit le thème de la sémantique en présentant des éléments HTML qui appliquent de l'emphase et de l'importance au texte (équivalents à l'italique et au gras dans le texte imprimé).
- [Listes](/fr/docs/Learn_web_development/Core/Structuring_content/Lists)
  - : Les listes sont partout — de votre liste de courses à l'ensemble d'instructions que vous suivez inconsciemment pour vous rendre quelque part, en passant par les étapes de ces tutoriels&nbsp;! Il n'est donc pas surprenant que le HTML propose un ensemble d'éléments permettant de définir différents types de listes. Sur le Web, il existe trois types de listes&nbsp;: non ordonnée, ordonnée et description. Cette leçon montre comment utiliser ces différents types.
- [Fonctions avancées du texte](/fr/docs/Learn_web_development/Core/Structuring_content/Advanced_text_features)
  - : De nombreux autres éléments HTML servent à définir la sémantique du texte, que nous n'avons pas abordés dans l'article [Emphase et importance](/fr/docs/Learn_web_development/Core/Structuring_content/Emphasis_and_importance). Les éléments décrits dans cet article sont moins connus mais utiles à connaître (ce n'est pas une liste exhaustive). Vous y apprendrez à baliser des citations, du code informatique et d'autres textes apparentés, les indices et exposants, les informations de contact, et plus encore.

- [Baliser une lettre](/fr/docs/Learn_web_development/Core/Structuring_content/Marking_up_a_letter) <sup>Défi</sup>
  - : Nous apprenons tous à écrire une lettre tôt ou tard&nbsp;; c'est aussi un exemple utile pour tester vos compétences en mise en forme du texte. Dans ce défi, vous avez une lettre à baliser pour tester vos compétences en mise en forme de texte HTML, ainsi que les hyperliens et l'utilisation correcte de l'élément HTML `<head>`.

- [Structurer des documents](/fr/docs/Learn_web_development/Core/Structuring_content/Structuring_documents)
  - : En plus de définir les parties individuelles de votre page (comme «&nbsp;un paragraphe&nbsp;» ou «&nbsp;une image&nbsp;»), le HTML comporte également un certain nombre d'éléments de niveau bloc utilisés pour définir des zones de votre site Web (comme «&nbsp;l'en-tête&nbsp;», «&nbsp;le menu de navigation&nbsp;», «&nbsp;la colonne principale de contenu&nbsp;»). Cet article explique comment planifier une structure de site basique, et écrire le HTML qui représente cette structure.

- [Créer des liens](/fr/docs/Learn_web_development/Core/Structuring_content/Creating_links)
  - : Les liens (également appelés hyperliens) sont vraiment importants — ils sont ce qui fait du Web _une toile_. Cet article présente la syntaxe nécessaire pour créer un lien et aborde les bonnes pratiques en matière de liens.

- [Structurer une page de contenu](/fr/docs/Learn_web_development/Core/Structuring_content/Structuring_a_page_of_content) <sup>Défi</sup>
  - : Structurer une page de contenu prête à être mise en page avec du CSS est une compétence essentielle à maîtriser&nbsp;; dans ce défi, vous serez testé·e sur votre capacité à imaginer l'apparence finale d'une page et à choisir des sémantiques structurelles appropriées pour construire une mise en page.
- [Images HTML](/fr/docs/Learn_web_development/Core/Structuring_content/HTML_images)
  - : Au début, le Web n'était que du texte, et c'était assez ennuyeux. Heureusement, il n'a pas fallu longtemps avant d'ajouter la possibilité d'intégrer des images (et d'autres types de contenu plus intéressants) dans les pages Web. Dans cet article, nous verrons comment utiliser en profondeur l'élément HTML {{HTMLElement("img")}}, y compris les bases, l'annoter avec des légendes à l'aide de {{HTMLElement("figure")}} et détailler son lien avec les images de fond de {{Glossary("CSS")}}.
- [Vidéo et audio HTML](/fr/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio)
  - : Maintenant que nous sommes à l'aise avec l'ajout de simples images à une page Web, l'étape suivante consiste à ajouter des lecteurs vidéo et audio à vos documents HTML&nbsp;! Dans cet article, nous verrons comment faire cela avec les éléments HTML {{HTMLElement("video")}} et {{HTMLElement("audio")}}&nbsp;; nous terminerons en examinant comment ajouter des sous-titres/légendes à vos vidéos.
- [Page de présentation Bestiolles rampantes](/fr/docs/Learn_web_development/Core/Structuring_content/Splash_page) <sup>Défi</sup>
  - : Dans ce défi, nous testerons vos connaissances sur certaines des techniques abordées dans les dernières leçons, en vous demandant d'ajouter des images et des vidéos à une page de présentation consacrée aux insectes et autres petites bestioles.
- [Bases des tableaux HTML](/fr/docs/Learn_web_development/Core/Structuring_content/HTML_table_basics)
  - : Cet article vous initie aux tableaux HTML, couvrant les notions de base telles que les lignes, les cellules, les en-têtes, la façon de faire déborder des cellules sur plusieurs colonnes et lignes, et comment regrouper toutes les cellules d'une colonne pour des besoins de mise en forme.
- [Accessibilité des tableaux HTML](/fr/docs/Learn_web_development/Core/Structuring_content/Table_accessibility)
  - : Dans cet article, nous examinons d'autres fonctionnalités d'accessibilité des tableaux HTML, comme les légendes/résumés, le groupement des lignes en sections d'en-tête, de corps et de pied de tableau, et le périmétrage des colonnes et des lignes.
- [Structurer un tableau de données sur les planètes](/fr/docs/Learn_web_development/Core/Structuring_content/Planet_data_table) <sup>Défi</sup>
  - : Dans ce défi, nous vous fournissons des données sur les planètes de notre système solaire. Votre tâche est de les structurer dans un tableau HTML accessible.
- [Formulaires et boutons en HTML](/fr/docs/Learn_web_development/Core/Structuring_content/HTML_forms)
  - : Les formulaires et les boutons HTML sont des outils puissants pour interagir avec les utilisateur·ice·s — le plus souvent, ils servent à collecter des données auprès des utilisateur·ice·s ou à leur permettre de contrôler une interface utilisateur. Dans cet article, nous présentons une introduction aux bases des formulaires et des boutons.
- [Déboguer le HTML](/fr/docs/Learn_web_development/Core/Structuring_content/Debugging_HTML)
  - : Écrire du HTML, c'est bien, mais que faire si quelque chose tourne mal et que vous ne parvenez pas à localiser l'erreur dans le code&nbsp;? Cet article présente des outils qui peuvent vous aider à trouver et corriger les erreurs en HTML.

## Tester vos compétences

Vous trouverez des articles «&nbsp;Tester vos compétences&nbsp;» placés entre les articles de tutoriel pour vérifier que vous avez retenu les informations les plus importantes avant de passer à la suite. Si vous souhaitez explorer tous ces articles ensemble, vous pouvez les trouver listés à [Tester vos compétences&nbsp;: HTML](/fr/docs/Learn_web_development/Core/Structuring_content/Test_your_skills).

## Consulter des tutoriels supplémentaires

Ces tutoriels ne font pas partie du parcours d'apprentissage, mais ils sont néanmoins intéressants — vous pouvez les considérer comme des objectifs d'approfondissement à étudier en option une fois que vous aurez terminé les principaux articles du module principal.

- [Inclure des graphiques vectoriels en HTML](/fr/docs/Learn_web_development/Core/Structuring_content/Including_vector_graphics_in_HTML)
  - : Les graphiques vectoriels sont très utiles dans de nombreuses circonstances — ils ont de petites tailles de fichier et sont hautement évolutifs, ils ne se pixelisent donc pas lorsqu'on effectue un zoom ou qu'on les agrandit beaucoup. Dans cet article, nous vous montrons comment en inclure un dans votre page Web.
- [D'object à iframe — technologies générales d'intégration](/fr/docs/Learn_web_development/Core/Structuring_content/General_embedding_technologies)
  - : Les développeur·euse·s pensent souvent à intégrer des médias tels que des images, des vidéos et de l'audio dans des pages Web. Dans cet article, nous faisons un pas de côté en examinant certains éléments qui permettent d'intégrer une grande variété de types de contenu dans vos pages Web&nbsp;: les éléments HTML {{HTMLElement("iframe")}}, {{HTMLElement("embed")}} et {{HTMLElement("object")}}. Les `<iframe>` servent à intégrer d'autres pages Web, et les deux autres permettent d'intégrer des ressources externes telles que des fichiers PDF.

## Voir aussi

- [Apprendre HTML et CSS <sup>(angl.)</sup>](https://scrimba.com/learn-html-and-css-c0p?via=mdn), Scrimba <sup>[_Partenaire d'apprentissage MDN_](/fr/docs/MDN/Writing_guidelines/Learning_content#liens_partenaires_et_intégrations)</sup>
  - : [Scrimba's <sup>(angl.)</sup>](https://scrimba.com?via=mdn) _Apprendre HTML et CSS_ vous enseigne le HTML et le CSS en construisant et en déployant cinq projets, avec des leçons interactives et des défis animés par des formateurs expérimentés.
- [Apprendre HTML <sup>(angl.)</sup>](https://www.codecademy.com/learn/learn-html), Codecademy
  - : Une autre ressource utile pour apprendre les bases du HTML.
- [Les bases du HTML sémantique <sup>(angl.)</sup>](https://scrimba.com/the-frontend-developer-career-path-c0j/~0xid?via=mdn), Scrimba <sup>[_Partenaire d'apprentissage MDN_](/fr/docs/MDN/Writing_guidelines/Learning_content#liens_partenaires_et_intégrations)</sup>
  - : Cette leçon interactive fournit une description utile du HTML, en insistant sur l'importance de l'aspect _sémantique_.

{{NextMenu("Learn_web_development/Core/Structuring_content/Basic_HTML_syntax", "Learn_web_development/Core")}}
