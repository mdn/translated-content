---
title: Guide de style rédactionnel
short-title: Style rédactionnel
slug: MDN/Writing_guidelines/Writing_style_guide
l10n:
  sourceCommit: e5b34bf966c5183bd8ebfe720208a49b7ab639fd
---

Ce guide de style rédactionnel décrit comment le contenu doit être rédigé, organisé, orthographié et mis en forme sur MDN Web Docs.

Ces directives visent à assurer la cohérence de la langue et du style sur l'ensemble du site. Cela dit, nous nous intéressons davantage au contenu qu'à sa mise en forme, vous n'avez donc pas à apprendre l'intégralité du guide de style avant de contribuer. Toutefois, ne soyez pas surpris·e si une autre personne modifie ensuite votre travail pour le conformer à ce guide. Les relecteur·ice·s pourront aussi vous renvoyer vers ce guide lors de la soumission d'une proposition de contenu.

> [!NOTE]
> Les aspects linguistiques de ce guide s'appliquent principalement à la documentation en **anglais**. D'autres langues peuvent, et sont encouragées à, créer leur propre guide de style. Ceux-ci doivent être publiés comme sous-pages de la page de l'équipe de localisation correspondante. Cependant, ce guide reste à consulter pour la mise en forme et l'organisation du contenu.

Après avoir listé les lignes directrices générales, ce guide décrit le style de rédaction recommandé pour MDN Web Docs, puis la manière de mettre en forme différents composants d'une page, comme les listes et les titres.

## Lignes directrices générales de rédaction

L'objectif est d'écrire des pages qui incluent toutes les informations dont les lecteur·ice·s peuvent avoir besoin pour comprendre le sujet traité.

Les sous-sections suivantes fournissent des recommandations pour y parvenir&nbsp;:

- [Considérez votre public cible](#considérez_votre_public_cible)
- [Considérez les trois C de la rédaction](#considérez_les_trois_c_de_la_rédaction)
- [Incluez des exemples pertinents](#incluez_des_exemples_pertinents)
- [Fournissez une introduction descriptive](#fournissez_une_introduction_descriptive)
- [Utilisez un langage inclusif](#utilisez_un_langage_inclusif)
- [Rédigez en pensant au référencement](#rédigez_en_pensant_au_référencement)

### Considérez votre public cible

Gardez le public cible du contenu en tête. Par exemple, une page sur des techniques réseau avancées n'a vraisemblablement pas besoin d'entrer autant dans les détails sur les concepts de base du réseau qu'une page typique sur le réseau. Gardez à l'esprit qu'il s'agit de lignes directrices. Certains conseils peuvent ne pas s'appliquer dans tous les cas.

### Considérez les trois C de la rédaction

Les trois C d'une bonne rédaction sont&nbsp;: clarté, concision et cohérence.

- **Clair**&nbsp;: Assurez-vous que votre texte est clair et simple. En général, utilisez la voix active et des pronoms non ambigus. Écrivez des phrases courtes, une idée par phrase. Définissez les nouveaux termes, en tenant compte du public, avant de les utiliser.
- **Concis**&nbsp;: Il est important de savoir quelle quantité d'information fournir. Trop de détails rend la page fastidieuse à lire et elle sera rarement utilisée.
- **Cohérent**&nbsp;: Utilisez la même terminologie de manière cohérente sur la page et entre plusieurs pages.

### Incluez des exemples pertinents

De manière générale, ajoutez des exemples ou des scénarios concrets pour mieux expliquer le contenu. Cela aide les lecteur·ice·s à comprendre les informations conceptuelles et procédurales de façon plus tangible et pratique.

Utilisez des exemples pour clarifier l'usage de chaque paramètre et préciser les cas limites éventuels.
Vous pouvez aussi utiliser des exemples pour montrer des solutions à des tâches courantes et à des problèmes susceptibles de survenir.

### Fournissez une introduction descriptive

Assurez-vous que le ou les premiers paragraphes avant le premier titre résument adéquatement les informations que la page va couvrir et ce que les lecteur·ice·s pourront accomplir après lecture. Ainsi, la personne qui lit peut déterminer rapidement si la page est pertinente pour ses besoins et ses objectifs d'apprentissage.

Dans un guide ou un tutoriel, l'introduction doit informer des sujets traités ainsi que des prérequis éventuels. Le premier paragraphe doit mentionner les technologies et/ou API documentées ou discutées, avec des liens vers les informations associées, et donner des indications sur les situations où le contenu de l'article sera utile.

- **Exemple d'introduction trop courte**&nbsp;: Cet exemple d'introduction est beaucoup trop court. Il omet trop d'informations, comme ce que signifie exactement «&nbsp;tracer&nbsp;» du texte, où le texte est dessiné, et ainsi de suite.

  > **`CanvasRenderingContext2D.strokeText()`** dessine une chaîne.

- **Exemple d'introduction trop longue**&nbsp;: Cet exemple met à jour l'introduction, mais elle devient alors trop longue.
  Trop de détails sont inclus, et le texte part trop en profondeur dans la description d'autres méthodes et propriétés.
  L'introduction devrait plutôt se concentrer sur la méthode `strokeText()` et renvoyer vers les guides appropriés pour les autres détails.

  > Lorsqu'elle est appelée, la méthode **`CanvasRenderingContext2D.strokeText()`** de l'API Canvas 2D trace les contours des caractères de la chaîne spécifiée à partir des coordonnées indiquées, en utilisant la couleur de stylo courante.
  > En imagerie informatique, «&nbsp;tracer&nbsp;» un texte signifie dessiner le contour des glyphes de la chaîne sans remplir chaque caractère avec de la couleur.
  >
  > Le texte est dessiné en utilisant la police courante du contexte telle que définie par la propriété {{domxref("CanvasRenderingContext2D.font", "font")}} du contexte.
  >
  > Le placement du texte par rapport aux coordonnées spécifiées est déterminé par les propriétés `textAlign`, `textBaseline` et `direction` du contexte.
  > `textAlign` contrôle le placement de la chaîne par rapport à l'abscisse spécifiée&nbsp;; si la valeur est `"center"`, la chaîne est dessinée à partir de `x - (stringWidth / 2)`, plaçant l'abscisse spécifiée au milieu de la chaîne.
  > Si la valeur est `"left"`, la chaîne est dessinée à partir de la valeur de `x` spécifiée.
  > Et si `textAlign` vaut `"right"`, le texte est dessiné de sorte qu'il se termine à l'abscisse spécifiée.
  >
  > (…)
  >
  > Vous pouvez, en option, fournir un quatrième paramètre qui permet d'indiquer une largeur maximale pour la chaîne, en pixels.
  > Si vous fournissez ce paramètre, le texte est compressé horizontalement ou mis à l'échelle (ou autrement ajusté) pour tenir dans un espace de cette largeur lors du rendu.
  >
  > Vous pouvez appeler la méthode **`fillText()`** pour dessiner les caractères d'une chaîne remplis avec une couleur au lieu de ne tracer que leurs contours.

- **Exemple d'introduction appropriée**&nbsp;: La section suivante donne un bien meilleur aperçu de la méthode `strokeText()`.

  > La méthode {{domxref("CanvasRenderingContext2D")}} **`strokeText()`**, qui fait partie de l'[API Canvas 2D](/fr/docs/Web/API/Canvas_API), trace les contours des caractères d'une chaîne donnée, ancrés à la position indiquée par les coordonnées X et Y fournies.
  > Le texte est dessiné en utilisant la {{domxref("CanvasRenderingContext2D.font", "police")}} courante du contexte, et est justifié et aligné selon les propriétés {{domxref("CanvasRenderingContext2D.textAlign", "textAlign")}}, {{domxref("CanvasRenderingContext2D.textBaseline", "textBaseline")}} et {{domxref("CanvasRenderingContext2D.direction", "direction")}}.
  >
  > Pour plus de détails et des exemples, voir la section [Texte](/fr/docs/Learn_web_development/Extensions/Client-side_APIs/Drawing_graphics#texte) de la page «&nbsp;Dessiner des graphiques&nbsp;» ainsi que notre article principal sur le sujet, [Dessiner du texte](/fr/docs/Web/API/Canvas_API/Tutorial/Drawing_text).

### Utilisez un langage inclusif

MDN a un public large et divers.
Nous recommandons fortement de rendre le texte aussi inclusif que possible.
Voici des alternatives à certains termes couramment utilisés dans la documentation&nbsp;:

- Évitez **maître** et **esclave**, préférez **principal** et **réplica**.
- Remplacez **liste blanche** et **liste noire** par **liste d'autorisation** et **liste d'interdiction**.
- **Sanity** doit être remplacé par **cohérence**.
- À la place de **dummy**, utilisez **exemple**.
- Vous ne devriez pas avoir besoin d'utiliser **fou** et **insensé** dans la documentation&nbsp;; si c'est le cas, envisagez d'utiliser **fantastique** à la place.

Il est préférable d'utiliser un langage épicène lorsque le genre n'est pas pertinent.
Par exemple, si vous parlez des actions d'un homme spécifique, utiliser «&nbsp;il&nbsp;»/«&nbsp;son&nbsp;» convient&nbsp;; mais si le sujet est une personne de n'importe quel genre, «&nbsp;il·elle&nbsp;»/«&nbsp;son·sa&nbsp;» n'est pas approprié.

Exemples&nbsp;:

- **Incorrect**&nbsp;: «&nbsp;Une boîte de dialogue de confirmation demande à l'utilisateur s'il souhaite autoriser la page à utiliser sa webcam.&nbsp;»
- **Incorrect**&nbsp;: «&nbsp;Une boîte de dialogue de confirmation demande à l'utilisatrice si elle souhaite autoriser la page à utiliser sa webcam.&nbsp;»

Les deux versions sont genrées. Pour corriger, utilisez des pronoms neutres&nbsp;:

- **Correct**&nbsp;: «&nbsp;Une boîte de dialogue de confirmation demande à l'utilisateur·ice s'il·elle souhaite autoriser la page à utiliser sa webcam.&nbsp;»

> [!NOTE]
> MDN Web Docs autorise l'usage du pluriel de troisième personne comme «&nbsp;singular they&nbsp;» en anglais. Les pronoms neutres incluent «&nbsp;they&nbsp;», «&nbsp;them&nbsp;», «&nbsp;their&nbsp;» et «&nbsp;theirs&nbsp;».

Une autre option consiste à mettre les utilisateur·ice·s au pluriel&nbsp;:

- **Correct**&nbsp;: «&nbsp;Une boîte de dialogue de confirmation demande aux utilisateur·ice·s s'il·elle·s souhaitent autoriser la page à utiliser leurs webcams.&nbsp;»

La meilleure solution reste de réécrire pour éliminer les pronoms&nbsp;:

- **Correct**&nbsp;: «&nbsp;Une boîte de dialogue de confirmation demandant l'autorisation d'accéder à la webcam apparaît.&nbsp;»
- **Correct**&nbsp;: «&nbsp;Une boîte de dialogue qui demande l'autorisation d'utiliser la webcam apparaît.&nbsp;»

Cette dernière approche est sans doute préférable.
Non seulement elle est plus correcte grammaticalement, mais elle supprime une partie de la complexité liée aux genres dans différentes langues qui peuvent avoir des règles très différentes.
Cette solution peut faciliter la traduction, autant pour les lecteur·ice·s que pour les traducteur·ice·s.

### Utilisez un langage accessible

Évitez les mots spatiaux et directionnels, comme «&nbsp;au-dessus&nbsp;», «&nbsp;au-dessous&nbsp;», «&nbsp;gauche&nbsp;», «&nbsp;droite&nbsp;» ou «&nbsp;ici&nbsp;». Ces termes supposent une mise en page visuelle spécifique, qui peut ne pas s'appliquer à tout le monde. Ils peuvent aussi être ambigus ou trompeurs, en particulier pour les utilisateur·ice·s de lecteurs d'écran ou pour celles et ceux qui lisent du contenu traduit, où le langage directionnel peut être ambigu ou difficile à traduire correctement. Dans des mises en page réactives, où la position du contenu change selon la taille d'écran, ces références directionnelles peuvent devenir inexactes. Ce type de langage nuit à l'accessibilité et rend la navigation et la compréhension plus difficiles.

Utilisez à la place des formulations descriptives qui identifient clairement la section, le concept ou l'élément référencé. Référez-vous aux sections par leurs titres, et aux exemples ou extraits de code par ce qu'ils démontrent ou contiennent.

Par exemple&nbsp;:

- **Correct**&nbsp;: «&nbsp;Reportez-vous à la section [Accessibilité](/fr/docs/Web/CSS/Reference/Values/gradient/repeating-conic-gradient#accessibilité) plus loin sur cette page.&nbsp;»
- **Incorrect**&nbsp;: «&nbsp;Reportez-vous à la section d'accessibilité ci-dessous.&nbsp;»

- **Correct**&nbsp;: «&nbsp;Dans l'exemple de code suivant, nous animons un cercle avec des transitions CSS.&nbsp;»
- **Incorrect**&nbsp;: «&nbsp;Dans l'exemple de code ci-dessous, nous animons un cercle avec des transitions CSS.&nbsp;»

- **Correct**&nbsp;: «&nbsp;Ce concept est expliqué dans la section précédente intitulée Créer une requête média.&nbsp;»
- **Incorrect**&nbsp;: «&nbsp;Ce concept est expliqué dans la section ci-dessus.&nbsp;»

Évitez aussi les textes de lien vagues comme «&nbsp;Cliquez ici&nbsp;» ou «&nbsp;Lisez cet article&nbsp;». Un texte de lien descriptif apporte un meilleur contexte pour toutes et tous et améliore l'expérience des technologies d'assistance.

<!-- markdownlint-disable descriptive-link-text -->

- **Correct**&nbsp;: «&nbsp;En savoir plus sur [la façon d'ordonner les éléments flexibles](/fr/docs/Web/CSS/Guides/Flexible_box_layout/Ordering_items).&nbsp;»
- **Incorrect**&nbsp;: «&nbsp;Cliquez [ici](/fr/docs/Web/CSS/Guides/Flexible_box_layout/Ordering_items) pour en savoir plus.&nbsp;»
- **Incorrect**&nbsp;: «&nbsp;Lisez [cet article](/fr/docs/Web/CSS/Guides/Flexible_box_layout/Ordering_items) pour en savoir plus.&nbsp;»

<!-- markdownlint-enable descriptive-link-text -->

En suivant ces lignes directrices, vous contribuez à rendre la documentation MDN accessible, claire et utilisable par toutes et tous, quel que soit le mode d'accès à la page.

### Rédigez en pensant au référencement

L'objectif principal de tout texte sur MDN Web Docs doit toujours être d'expliquer et d'informer à propos des technologies du Web ouvert afin que les développeur·euse·s puissent apprendre vite ce qu'iels veulent faire ou trouver les détails nécessaires pour peaufiner leur code. Il est néanmoins important que le contenu soit trouvable. Pour cela, gardez à l'esprit l'optimisation pour les moteurs de recherche ({{Glossary("SEO")}}) lors de la rédaction.

Cette section couvre les pratiques standard, recommandations et exigences pour aider les moteurs de recherche à catégoriser et indexer facilement notre contenu afin que les lecteur·ice·s trouvent ce dont iels ont besoin.

La liste de contrôle suivante est utile lors de la rédaction et de la relecture afin de s'assurer que la page et ses voisines seront correctement indexées par les moteurs&nbsp;:

- **Veillez à ce que les pages ne soient pas trop similaires**&nbsp;: Si le contenu de différentes pages se ressemble trop textuellement, les moteurs de recherche considéreront que les pages traitent du même sujet même si ce n'est pas le cas.
  Par exemple, si une interface a les propriétés `width` et `height`, il est facile que les textes se ressemblent étonnamment sur les deux pages, avec quelques mots échangés et le même exemple. Cela complique le travail des moteurs pour différencier les pages, qui finissent par se partager le classement, rendant chacune plus difficile à trouver.

  Il est donc important de s'assurer que chaque page a son propre contenu. Les suggestions suivantes peuvent aider&nbsp;:
  - **Expliquez davantage de notions distinctives**&nbsp;: Cherchez des cas d'usage où il pourrait y avoir plus de différences qu'on ne le pense. Par exemple, pour `width` et `height`, parlez des différences d'usage de l'espace horizontal et vertical, et proposez une discussion adaptée. Vous pouvez mentionner par exemple l'usage de `width` pour faire de la place à une barre latérale, tandis que `height` gère le défilement vertical ou les pieds de page. Inclure des informations d'accessibilité est aussi utile et important.
  - **Utilisez des exemples différents**&nbsp;: Les exemples sont souvent encore plus similaires que le corps du texte, car ils peuvent utiliser plusieurs des mêmes méthodes ou propriétés. Écrivez donc un nouvel exemple, ou fournissez-en plusieurs, dont au moins certains différents.
  - **Ajoutez des descriptions pour les exemples**&nbsp;: Incluez un aperçu de ce que fait l'exemple ainsi qu'une explication de son fonctionnement, avec un niveau de détail adapté au sujet et au public cible.

  La façon la plus simple d'éviter une trop grande similarité est d'écrire chaque article à partir de zéro si le temps le permet.

- **Veillez à ce que les pages ne soient pas trop courtes**&nbsp;: Si une page contient trop peu de contenu (appelées «&nbsp;pages maigres&nbsp;» en SEO), les moteurs de recherche ne les catalogueront pas correctement, voire pas du tout. Ces pages sont difficiles à trouver. À titre indicatif, veillez à ce que les pages ne fassent pas moins de 300 mots environ. N'allongez pas artificiellement une page&nbsp;; considérez ce seuil comme un objectif minimal quand c'est possible.

  Ces lignes directrices de base peuvent aider à créer des pages suffisamment riches sans les encombrer de texte inutile&nbsp;:
  - **Évitez les ébauches**&nbsp;: Si l'article est une ébauche ou manque de contenu, complétez-le. Nous essayons d'éviter les pages «&nbsp;brouillon&nbsp;» sur MDN Web Docs, même si elles existent, et de nombreuses pages manquent de sections entières.
  - **Vérifiez la structure de la page**&nbsp;: Vérifiez que la page est structurée correctement pour son [type de page](/fr/docs/MDN/Writing_guidelines/Page_structures/Page_types). Assurez-vous que toutes les sections sont présentes et correctement remplies.
  - **Assurez l'exhaustivité**&nbsp;: Vérifiez que rien ne manque. Assurez-vous que tous les paramètres sont listés et expliqués. Couvrez les exceptions éventuelles — c'est un endroit où manquent souvent des informations.
  - **Développez tous les concepts**&nbsp;: Il est facile de donner une explication rapide. Assurez-vous que toutes les nuances sont couvertes. Y a-t-il des cas particuliers&nbsp;? Des restrictions connues dont le lectorat devrait être informé&nbsp;?
  - **Ajoutez des exemples**&nbsp;: Il devrait y avoir des exemples couvrant tous les paramètres ou au moins ceux que les personnes débutantes à intermédiaires utiliseront, ainsi que ceux avancés qui demandent des explications supplémentaires. Chaque exemple doit être précédé d'un aperçu de ce qu'il fait, des connaissances nécessaires, etc. Après l'exemple (ou entre des parties), ajoutez du texte expliquant le fonctionnement du code. Ne négligez pas les détails ni la gestion des erreurs. Gardez à l'esprit que les utilisateur·ice·s copieront vos exemples et que votre code finira en production.
    Voir nos [recommandations pour les exemples de code](/fr/docs/MDN/Writing_guidelines/Code_style_guide) pour plus d'informations.
  - **Expliquez les cas d'usage**&nbsp;: S'il existe des cas d'usage fréquents pour la fonctionnalité décrite, parlez-en. Au lieu de supposer qu'une personne déduira qu'une méthode peut résoudre un problème courant, ajoutez une section avec un exemple et une explication.
  - **Ajoutez des informations sur les images**&nbsp;: Incluez un texte [`alt`](/fr/docs/Web/HTML/Reference/Elements/img#alt) approprié sur toutes les images et schémas. Ce texte, ainsi que les légendes, comptent, car les robots d'indexation ne lisent pas les images, donc le texte `alt` leur décrit le contenu.

    > [!NOTE]
    > Il n'est pas recommandé d'ajouter trop de mots-clés ni des mots-clés non liés au sujet pour tenter d'améliorer le classement. Ce type de comportement est repéré et souvent pénalisé.
    > De même, **n'ajoutez pas** de matière répétitive et inutile ou des blocs de mots-clés dans la page pour gonfler sa taille et son classement. Cela nuit à la lisibilité et à nos résultats de recherche.

- **Concentrez-vous sur le sujet**&nbsp;: Il est préférable d'écrire autour du sujet de la page plutôt qu'autour d'un mot-clé précis. Il est probable qu'il existe de nombreux mots-clés pour un sujet donné&nbsp;; beaucoup d'expert·e·s SEO compilent une liste de 5 à 100 mots-clés à inclure selon la longueur de l'article. Cela diversifie le vocabulaire et réduit les répétitions.

## Style de rédaction

Outre des phrases grammaticalement correctes en français, nous recommandons de suivre ces lignes directrices pour garder la cohérence sur MDN Web Docs.

- [Abréviations et acronymes](#abréviations_et_acronymes)
- [Capitalisation](#capitalisation)
- [Contractions](#contractions)
- [Nombres et numéraux](#nombres_et_numéraux)
- [Pluriels](#pluriels)
- [Apostrophes et guillemets](#apostrophes_et_guillemets)
- [Virgules](#virgules)
- [Traits d'union](#traits_dunion)
- [Orthographe](#orthographe)
- [Terminologie](#terminologie)
- [Voix](#voix)

### Abréviations et acronymes

Une abréviation est une version raccourcie d'un mot plus long, tandis qu'un acronyme est un nouveau mot créé à partir des premières lettres d'une expression. Cette section décrit les règles pour les abréviations et acronymes.

- **Développements**&nbsp;: À la première mention d'un terme sur une page, développez les acronymes susceptibles d'être inconnus. En cas de doute, développez. Mieux encore, liez l'article ou l'entrée du [glossaire](/fr/docs/Glossary) qui décrit la technologie.
  - **Correct**&nbsp;: «&nbsp;XUL (XML User Interface Language) est le langage XML de Mozilla…&nbsp;»
  - **Incorrect**&nbsp;: «&nbsp;XUL est le langage XML de Mozilla…&nbsp;»

- **Capitalisation et points**&nbsp;: Utilisez des majuscules complètes et supprimez les points dans toutes les abréviations et acronymes, y compris pour des organisations comme «&nbsp;US&nbsp;» et «&nbsp;UN&nbsp;».
  - **Correct**&nbsp;: XUL
  - **Incorrect**&nbsp;: X.U.L.&nbsp;; Xul

- **Abréviations latines**&nbsp;: Vous pouvez utiliser des abréviations latines courantes (etc., c-à-d., ex&nbsp;:) dans des parenthèses et des notes. Utilisez des points dans ces abréviations, suivis d'une virgule ou de la ponctuation adéquate.

  <!-- markdownlint-disable search-replace -->
  - **Correct**&nbsp;: «&nbsp;Les navigateurs (ex&nbsp;: Firefox) peuvent être utilisés…&nbsp;»
  - **Incorrect**&nbsp;: «&nbsp;Les navigateurs ex Firefox peuvent être utilisés…&nbsp;»
  - **Incorrect**&nbsp;: «&nbsp;Les navigateurs, ex. Firefox, peuvent être utilisés…&nbsp;»
  - **Incorrect**&nbsp;: «&nbsp;Les navigateurs, (ex: Firefox) peuvent être utilisés…&nbsp;»
  <!-- markdownlint-enable search-replace -->

  Dans le texte normal (c'est-à-dire hors notes ou parenthèses), utilisez l'équivalent en toutes lettres en français.
  - **Correct**&nbsp;: «&nbsp;… navigateurs web, et cetera.&nbsp;»
  - **Incorrect**&nbsp;: «&nbsp;… navigateurs web, etc.&nbsp;»

  - **Correct**&nbsp;: «&nbsp;Les navigateurs web tels que Firefox peuvent être utilisés…&nbsp;»
  - **Incorrect**&nbsp;: «&nbsp;Les navigateurs web ex, Firefox peuvent être utilisés…&nbsp;»

  Le tableau suivant résume les significations et équivalents français des abréviations latines&nbsp;:

  <!-- markdownlint-disable search-replace -->

  | Abrév. | Latin            | Français                         |
  | ------ | ---------------- | -------------------------------- |
  | cf.    | _confer_         | compare                          |
  | ex.    | _exempli gratia_ | par exemple                      |
  | et al. | _et alii_        | et autres                        |
  | etc.   | _et cetera_      | et cetera, et ainsi de suite     |
  | c-à-d. | _id est_         | c'est-à-dire, en d'autres termes |
  | N.B.   | _nota bene_      | notez bien                       |
  | P.S.   | _post scriptum_  | post-scriptum                    |

  <!-- markdownlint-enable search-replace -->

  > [!NOTE]
  > Demandez-vous toujours si l'usage d'une abréviation latine est réellement utile. Certaines sont si peu utilisées que beaucoup de lecteur·ice·s les confondent ou ignorent leur sens.
  >
  > Assurez-vous aussi de les utiliser correctement. Par exemple, ne confondez pas «&nbsp;c-a-d.&nbsp;» avec «&nbsp;ex.&nbsp;», ce qui est fréquent.

- **Pluriels d'abréviations et d'acronymes**&nbsp;: Pour former le pluriel, ajoutez _s_. N'utilisez jamais d'apostrophe.
  - **Correct**&nbsp;: CD-ROMs
  - **Incorrect**&nbsp;: CD-ROM's

- **«&nbsp;Versus&nbsp;», «&nbsp;vs.&nbsp;» et «&nbsp;v.&nbsp;»**&nbsp;: Si vous utilisez la contraction, «&nbsp;vs.&nbsp;» est préférée à «&nbsp;v.&nbsp;» et peut être utilisée dans les titres. Ailleurs dans le texte, utilisez la forme développée «&nbsp;versus&nbsp;».
  - **Correct**&nbsp;: ceci vs. cela
  - **Incorrect**&nbsp;: ceci v. cela
  - **Correct**&nbsp;: cela versus cela

### Capitalisation

Utilisez les règles standards de capitalisation française dans le corps du texte et écrivez «&nbsp;World Wide Web&nbsp;» avec des majuscules. Il est acceptable d'utiliser «&nbsp;web&nbsp;» (seul ou comme modificateur) et «&nbsp;internet&nbsp;» en minuscules.

> [!NOTE]
> Cette règle diffère d'une version précédente du guide, vous pouvez donc trouver de nombreuses occurrences de «&nbsp;Web&nbsp;» et «&nbsp;Internet&nbsp;» sur MDN.
> N'hésitez pas à les corriger lors d'autres modifications, mais n'éditez pas un article uniquement pour cela.

Les noms des touches de clavier utilisent la casse phrase, pas les majuscules complètes.
Par exemple, «&nbsp;<kbd>Entrée</kbd>&nbsp;» et non «&nbsp;<kbd>ENTRÉE</kbd>&nbsp;».
La seule exception&nbsp;: vous pouvez utiliser «&nbsp;<kbd>ESC</kbd>&nbsp;» pour abréger la touche «&nbsp;<kbd>Échap</kbd>&nbsp;».

Certains mots doivent toujours être capitalisés, comme les marques qui incluent des capitales ou les mots dérivés d'un nom propre (sauf dans du code qui impose une casse). Exemples&nbsp;:

- Boolean (nommé d'après le logicien [George Boole <sup>(angl.)</sup>](https://en.wikipedia.org/wiki/George_Boole))
- JavaScript (marque d'Oracle Corporation, à écrire comme trademarké)
- Python, TypeScript, Django et autres langages et frameworks

Certains outils et projets ont leur capitalisation de marque. Cela peut être tout en minuscules («&nbsp;npm&nbsp;» ou «&nbsp;webpack&nbsp;»), tout en majuscules («&nbsp;UNIX&nbsp;», «&nbsp;GNOME&nbsp;», «&nbsp;VIM&nbsp;») ou en casse mixte («&nbsp;TypeScript&nbsp;», «&nbsp;macOS&nbsp;», «&nbsp;jQuery&nbsp;»).

La capitalisation officielle du site ou de la documentation doit toujours être respectée, même en début de phrase. Si vous n'aimez pas commencer par une minuscule, reformulez. Par exemple&nbsp;: «&nbsp;Vous pouvez utiliser le gestionnaire de paquets npm pour…&nbsp;» plutôt que «&nbsp;npm permet de…&nbsp;».

### Contractions

Notre style rédactionnel a tendance à être informel, donc vous pouvez utiliser des contractions (par exemple, «&nbsp;n'est pas&nbsp;», «&nbsp;ne peut pas&nbsp;», «&nbsp;ne devrait pas&nbsp;») si vous le souhaitez.

### Nombres et numéraux

- **Virgules**&nbsp;: Dans le texte courant, utilisez des virgules uniquement pour les nombres de cinq chiffres et plus.
  - **Correct**&nbsp;: 4000&nbsp;; 54 000
  - **Incorrect**&nbsp;: 4,000&nbsp;; 54000

- **Dates**&nbsp;: Pour les dates (hors échantillons de code), utilisez le format «&nbsp;1<sup>er</sup> Janvier 1900&nbsp;».
  - **Correct**&nbsp;: 24 février 1906
  - **Incorrect**&nbsp;: February 24th, 1906&nbsp;; 24 February, 1906&nbsp;; 24/02/1906

  Vous pouvez aussi utiliser le format JJ/MM/AAAA.
  - **Correct**&nbsp;: 24/02/1906
  - **Incorrect**&nbsp;: 02/24/1906&nbsp;; 1906/24/02&nbsp;; 06/02/24

- **Décennies**&nbsp;: Utilisez le format «&nbsp;1990&nbsp;». N'utilisez pas d'apostrophe.
  - **Correct**&nbsp;: 1920
  - **Incorrect**&nbsp;: 1920'

### Pluriels

Utilisez les pluriels français, pas les formes influencées par le latin ou le grec.

- **Correct**&nbsp;: scénarios, maximums
- **Incorrect**&nbsp;: scenarii, maxima

### Apostrophes et guillemets

N'utilisez pas de guillemets ou d'apostrophes «&nbsp;courbes&nbsp;». Sur MDN Web Docs, utilisez uniquement des guillemets droits et des apostrophes droites. En effet, nous devons choisir une seule forme pour la cohérence. Si des caractères courbes se glissent dans des extraits de code, même en ligne, des personnes pourraient les copier en pensant qu'ils fonctionnent, ce qui n'est pas le cas.

- **Correct**&nbsp;: N'utilisez pas les «&nbsp;apostrophes courbes&nbsp;».
- **Incorrect**&nbsp;: N&rsquo;utilisez pas les &ldquo;apostrophes courbes.&rdquo;

### Virgules

La liste suivante décrit des situations courantes où il faut connaître les règles d'usage de la virgule&nbsp;:

- **Après une proposition introductive**&nbsp;: Une proposition subordonnée introductive se trouve généralement au début d'une phrase. Utilisez une virgule après cette proposition pour la séparer de la proposition principale suivante.
  - Exemple 1&nbsp;:
    - **Correct**&nbsp;: «&nbsp;Dans cet exemple, vous apprendrez à utiliser une virgule.&nbsp;»
    - **Incorrect**&nbsp;: «&nbsp;Dans cet exemple vous apprendrez à utiliser une virgule.&nbsp;»
  - Exemple 2&nbsp;:
    - **Correct**&nbsp;: «&nbsp;Si vous cherchez des recommandations, consultez notre guide de style.&nbsp;»
    - **Incorrect**&nbsp;: «&nbsp;Si vous cherchez des recommandations consultez notre guide de style.&nbsp;»
  - Exemple 3&nbsp;:
    - **Correct**&nbsp;: «&nbsp;Sur les plateformes mobiles, vous obtenez généralement un clavier numérique pour saisir des données.&nbsp;»
    - **Incorrect**&nbsp;: «&nbsp;Sur les plateformes mobiles vous obtenez généralement un clavier numérique pour saisir des données.&nbsp;»

- **Avant les conjonctions**&nbsp;: La virgule dite «&nbsp;d'Oxford&nbsp;» est la virgule qui précède la conjonction dans une série de trois éléments ou plus. Sur MDN Web Docs, nous utilisons la virgule d'Oxford. Les virgules séparent aussi chaque élément de la liste.
  - **Correct**&nbsp;: «&nbsp;Je voyagerai en train, en avion, et en voiture.&nbsp;»
  - **Incorrect**&nbsp;: «&nbsp;Je voyagerai en train, en avion et en voiture.&nbsp;»

  N'utilisez pas de virgule avant «&nbsp;et&nbsp;» et «&nbsp;ou&nbsp;» dans une liste de deux éléments.
  - **Correct**&nbsp;: «&nbsp;Mon chien est mignon et intelligent.&nbsp;»
  - **Incorrect**&nbsp;: «&nbsp;Mon chien est mignon, et intelligent.&nbsp;»

  Utilisez une virgule avant «&nbsp;mais&nbsp;» si elles relient deux propositions indépendantes. Si la phrase devient trop longue ou complexe, envisagez de la scinder.
  - Exemple 1&nbsp;:
    - **Correct**&nbsp;: «&nbsp;Vous pouvez effectuer cette étape, mais vous devez faire attention au paramètre du fichier.&nbsp;»
    - **Incorrect**&nbsp;: «&nbsp;Vous pouvez effectuer cette étape, mais vous devez faire attention au paramètre du fichier.&nbsp;»
  - Exemple 2&nbsp;:
    - **Correct**&nbsp;: «&nbsp;Mon père est strict mais affectueux.&nbsp;»
    - **Incorrect**&nbsp;: «&nbsp;Mon père est strict, mais affectueux.&nbsp;»

- **Propositions restrictives et non restrictives**&nbsp;: Une proposition restrictive est essentielle au sens de la phrase et ne nécessite pas de virgules. Elle est généralement introduite par «&nbsp;qui&nbsp;» et **ne doit pas** être précédée d'une virgule.
  - **Correct**&nbsp;: «&nbsp;Nous avons conçu un cours qui inclut toutes les informations essentielles dont vous avez besoin pour atteindre votre objectif.&nbsp;»
  - **Incorrect**&nbsp;: «&nbsp;Nous avons conçu un cours, qui inclut toutes les informations essentielles dont vous avez besoin pour atteindre votre objectif.&nbsp;»

  Une proposition non restrictive apporte une information additionnelle et n'est pas essentielle. Elle est généralement introduite par «&nbsp;qui&nbsp;» et doit être précédée d'une virgule.
  - **Correct**&nbsp;: «&nbsp;Vous rédigez une politique, qui est une liste d'origines autorisées pour chaque fonctionnalité.&nbsp;»
  - **Incorrect**&nbsp;: «&nbsp;Vous rédigez une politique qui est une liste d'origines autorisées pour chaque fonctionnalité.&nbsp;»

- **Avant «&nbsp;comme&nbsp;»**&nbsp;: Si «&nbsp;comme&nbsp;» fait partie d'une proposition non restrictive et que le reste de la phrase est une proposition indépendante, utilisez une virgule avant «&nbsp;comme&nbsp;».
  - **Correct**&nbsp;: «&nbsp;L'objet Array possède des méthodes pour manipuler les tableaux de différentes façons, comme les joindre, les inverser et les trier.&nbsp;»
  - **Incorrect**&nbsp;: «&nbsp;L'objet Array possède des méthodes pour manipuler les tableaux de différentes façons comme les joindre, les inverser et les trier.&nbsp;»

  Exemple sans virgule&nbsp;: la proposition contenant «&nbsp;comme&nbsp;» est ici essentielle au sens.
  - **Correct**&nbsp;: «&nbsp;Les applications web deviennent plus puissantes en ajoutant des fonctionnalités comme la manipulation audio et vidéo et en permettant l'accès aux données brutes via WebSockets.&nbsp;»
  - **Incorrect**&nbsp;: «&nbsp;Les applications web deviennent plus puissantes en ajoutant des fonctionnalités, comme la manipulation audio et vidéo, et en permettant l'accès aux données brutes via WebSockets.&nbsp;»

### Traits d'union

Les mots composés ne doivent être traités avec un trait d'union que lorsque la dernière lettre du préfixe est une voyelle et qu'elle est identique à la première lettre du radical.

- **Correct**&nbsp;: re-elect, co-op, e-mail
- **Incorrect**&nbsp;: reelect, coop, email

### Orthographe

Utilisez l'orthographe du français moderne.

De manière générale, utilisez la première entrée du [Dictionnaire de l'Académie française](https://www.dictionnaire-academie.fr/), sauf si cette entrée est une variante ou est principalement utilisée dans une autre forme du français. Par exemple, si vous [recherchez «&nbsp;événement&nbsp;»](https://www.dictionnaire-academie.fr/article/A9E3137*), vous trouverez la mention «&nbsp;événement&nbsp;» comme forme principale, et «&nbsp;évènement&nbsp;» comme variante admise mais moins courante.
N'utilisez pas les variantes orthographiques non recommandées.

<!-- cSpell:ignore évènement -->

- **Correct**&nbsp;: événement
- **Incorrect**&nbsp;: évènement

> [!NOTE]
> Ceci ne concerne que la documentation anglaise.

Nous avons installé [cSpell <sup>(angl.)</sup>](https://cspell.org/) pour détecter les fautes d'orthographe. Il s'exécute chaque semaine et génère [un rapport d'erreurs d'orthographe <sup>(angl.)</sup>](https://github.com/mdn/content/issues?q=Weekly+spelling+check+is%3Aissue+in%3Atitle) dans le dépôt. Vous pouvez aussi l'exécuter en local avec la commande&nbsp;:

```bash
yarn lint:typos
```

Dans le dépôt, nous maintenons plusieurs listes de mots, situées dans [`.vscode/dictionaries` <sup>(angl.)</sup>](https://github.com/mdn/content/tree/main/.vscode/dictionaries), qui contiennent des mots validés absents des dictionnaires par défaut. Vous pouvez ajouter des mots à ces listes s'ils sont valides mais signalés par l'outil. Lisez [`.vscode/cspell.json` <sup>(angl.)</sup>](https://github.com/mdn/content/blob/main/.vscode/cspell.json) pour comprendre le contenu de chaque dictionnaire et la configuration de la vérification orthographique.

### Terminologie

Voici nos recommandations pour certains termes techniques&nbsp;:

- **Éléments HTML**&nbsp;: Utilisez le terme «&nbsp;élément&nbsp;» pour parler des éléments HTML et XML, plutôt que «&nbsp;balise&nbsp;». En outre, l'élément doit être entouré de chevrons «&nbsp;<>&nbsp;» et stylé avec des accents graves (backticks). Par exemple, utiliser \<input\> entre accents graves l'affichera comme `<input>` comme attendu.
  - **Correct**&nbsp;: l'élément `<span>`
  - **Incorrect**&nbsp;: la balise span

  Sur MDN, vous pouvez en option indiquer l'élément HTML avec la macro [`HTMLElement`](/fr/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros#linking_to_pages_in_references), qui stylise l'élément, ajoute les chevrons «&nbsp;<>&nbsp;» et crée un lien vers sa page de référence.
  - **Avec accents graves**&nbsp;: `<span>`
  - **Avec la macro**&nbsp;: {{HTMLElement("span")}}

- **Paramètres vs. arguments**&nbsp;: Le terme préféré sur MDN Web Docs est **paramètres**. Évitez «&nbsp;arguments&nbsp;» pour la cohérence quand c'est possible.

- **Actions d'interface**&nbsp;: Dans des séquences de tâches, décrivez les actions avec l'impératif. Identifiez l'élément d'interface par son libellé et son type.
  - **Correct**&nbsp;: «&nbsp;Cliquez sur le bouton Modifier.&nbsp;»
  - **Incorrect**&nbsp;: «&nbsp;Cliquez sur Modifier.&nbsp;»

### Voix

La voix active est préférée, mais la voix passive est acceptable compte tenu du ton informel de notre contenu.
Restez cohérent·e.

## Composants de page

Cette section liste les lignes directrices à suivre pour différentes parties de chaque page, comme les titres, notes, liens et exemples.

- [Exemples de code](#exemples_de_code)
- [Références (liens)](#références_liens)
- [Liens externes](#liens_externes)
- [URL raccourcies (shortlinks)](#url_raccourcies_shortlinks)
- [Niveaux de titres](#niveaux_de_titres)
- [Images et autres médias](#images_et_autres_médias)
- [Listes](#listes)
- [Section «&nbsp;Voir aussi&nbsp;»](#section_voir_aussi)
- [Sous-pages](#sous-pages)
- [Slugs](#slugs)
- [Titres](#titres)

### Exemples de code

Une page MDN Web Docs peut contenir plusieurs exemples de code. Les recommandations suivantes s'appliquent à l'écriture d'exemples&nbsp;:

- Chaque extrait devrait inclure&nbsp;:
  - **Titre**&nbsp;: Un court titre `###` (`<h3>`) décrivant le scénario démontré par l'exemple. Par exemple, «&nbsp;Utilisation de l'impression offset&nbsp;» et «&nbsp;Revenir au style du calque précédent&nbsp;».
  - **Description**&nbsp;: Une brève description avant le code qui précise ce sur quoi attirer l'attention. Par exemple, «&nbsp;Dans l'exemple suivant, deux couches de cascade sont définies en CSS, `base` et `special`.&nbsp;»
  - **Explication du résultat**&nbsp;: Une explication après le code qui décrit le résultat et le fonctionnement.
- En général, l'exemple doit non seulement montrer la syntaxe et l'usage de la fonctionnalité, mais aussi mettre en avant l'objectif et les situations où une personne développeuse voudrait ou devrait l'utiliser.
- Si vous travaillez avec un grand exemple, il peut être pertinent de le scinder en parties plus petites qui peuvent être décrites individuellement.
- Lors de l'ajout d'[exemples interactifs](/fr/docs/MDN/Writing_guidelines/Page_structures/Live_samples), notez que tous les blocs de code d'un même type (HTML, CSS, JavaScript) sont concaténés avant l'exécution. Vous pouvez donc scinder le code en plusieurs segments, chacun avec ses propres descriptions, titres, etc. Cela rend la documentation de code très puissante et flexible.

Pour le style et la mise en forme des exemples, voir nos [Recommandations de style pour les exemples de code](/fr/docs/MDN/Writing_guidelines/Code_style_guide).

### Références (liens)

Lorsque vous faites référence à une autre page MDN ou à une section d'une page par son titre, utilisez la casse phrase dans le texte du lien (faites correspondre le titre). Utilisez la casse phrase même si elle diffère de celle du titre de la page ou de la section liée. N'utilisez pas de guillemets autour du texte du lien. Pour référencer une page par son titre&nbsp;:

- **Correct**&nbsp;: «&nbsp;Reportez-vous au guide [Ordonner les éléments flexibles](/fr/docs/Web/CSS/Guides/Flexible_box_layout/Ordering_items).&nbsp;»
- **Incorrect**&nbsp;: «&nbsp;Reportez-vous au guide "[Ordering flex items](/fr/docs/Web/CSS/Guides/Flexible_box_layout/Ordering_items)".&nbsp;»

Suivez un style cohérent pour les liens vers des sections dans une page&nbsp;:

- **Correct**&nbsp;: «&nbsp;Pour plus d'informations, voir la section [Allocation en JavaScript](/fr/docs/Web/JavaScript/Guide/Memory_management#allocation_en_javascript) du guide _Gestion de la mémoire_.&nbsp;»

Si la section liée est sur la même page, vous pouvez indiquer sa position avec des formulations descriptives.

- **Correct**&nbsp;: «&nbsp;Ce concept est décrit plus en détail dans la section [Accessibilité](/fr/docs/Web/CSS/Reference/Values/gradient/repeating-conic-gradient#accessibilité) de ce document.&nbsp;»
- **Incorrect**&nbsp;: «&nbsp;Ce concept est décrit plus en détail dans la section [Accessibilité](/fr/docs/Web/CSS/Reference/Values/gradient/repeating-conic-gradient#accessibilité) ci-dessous.&nbsp;»

Sur MDN, une autre façon de lier une page de référence est d'utiliser une macro. Ces macros sont décrites sur la page [Macros couramment utilisées](/fr/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros#linking_to_pages_in_references). Par exemple, pour lier une page de référence d'un élément HTML, utilisez la macro `HTMLElement`, et pour une propriété CSS, utilisez `CSSxRef`.

Nous suivons des recommandations similaires dans les sections [Voir aussi](#voir_aussi) en fin de page de référence, de glossaire et de guides.

### Liens externes

Les liens externes sont autorisés dans des situations spécifiques. Utilisez les règles ci-dessous pour décider si un lien externe est pertinent. Les demandes qui ajoutent des liens externes seront refusées si elles ne respectent pas ces règles.

Si vous envisagez d'ajouter un lien externe au contenu [Apprendre le développement web](/fr/docs/Learn_web_development), lisez aussi [Lignes directrices du contenu d'apprentissage &gt; Liens et intégrations partenaires](/fr/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds).

De manière générale, si vous envisagez d'ajouter un lien externe, assurez-vous de minimiser les risques suivants&nbsp;:

- Liens rompus ou obsolètes
- Apparence d'un soutien ou d'une recommandation, en particulier pour des produits ou services commerciaux
- Tentative d'utiliser MDN Web Docs pour diffuser du spam
- Liens raccourcis qui masquent la destination

> [!NOTE]
> Avant d'ajouter un lien externe, envisagez de renvoyer à un contenu au sein de MDN Web Docs. Les liens internes sont plus faciles à maintenir et augmentent la valeur de l'ensemble de MDN pour les lecteur·ice·s.

- **Bons liens externes**&nbsp;: Ils mènent à des ressources pertinentes, durables et largement fiables. Préférez des liens vers un contenu&nbsp;:
  - Unique ou indispensable (par exemple, une RFC de l'IETF)
  - Nécessaire pour l'attribution ou la citation (par exemple, dans le cadre d'une licence Creative Commons)
  - Plus susceptible d'être maintenu que s'il était recopié sur MDN Web Docs (par exemple, des notes de version d'un fournisseur)
  - Libre ou communautaire, comme MDN Web Docs

- **Mauvais liens externes**&nbsp;: Ils manquent de pertinence, de maintenabilité, d'accessibilité, ou posent des obstacles aux lecteur·ice·s. Évitez les liens vers un contenu&nbsp;:
  - Générique ou non spécifique (par exemple, la page d'accueil d'un fournisseur plutôt que sa documentation pertinente)
  - Éphémère ou non maintenu (par exemple, une annonce ponctuelle)
  - Auto-liant ou auto-promotionnel (par exemple, le propre travail de l'auteur en dehors de MDN)
  - Payant derrière un péage (par exemple, un cours coûteux inaccessible à beaucoup)
  - Inaccessible (par exemple, une vidéo sans sous-titres)

- **Liens auto-promotionnels ou spam**&nbsp;: Bien qu'un billet personnel, une conférence ou un dépôt GitHub puissent avoir de la valeur, les lier peut créer un conflit d'intérêts apparent. Réfléchissez à deux fois avant de lier des ressources avec lesquelles vous avez un lien personnel ou commercial.

  > [!NOTE]
  > Si vous avez une relation commerciale ou personnelle avec la cible d'un lien, vous devez la divulguer dans votre demande. Le non-respect peut mettre en péril votre participation à MDN Web Docs.

  Parfois, ces liens sont pertinents et appropriés. Par exemple, si vous êtes rédacteur·ice d'une spécification et contribuez à la documentation liée, alors lier cette spécification est attendu et acceptable. Mais vous devez divulguer la relation.

### URL raccourcies (shortlinks)

Un raccourcisseur d'URL peut être utile pour raccourcir des liens longs en adresses plus courtes et mémorisables. Cependant, ils masquent la destination. De plus, pour certains services, la destination peut être modifiée après création, ce qui peut être utilisé de manière malveillante.

N'utilisez pas de liens créés via des raccourcisseurs tiers ouverts. Par exemple, si `https://monliencourt.lien/tototata` est une URL courte générée par une personne et redirige vers `https://exemple.fr/unlientroplong/details/show?page_id=tototata`, utilisez l'URL longue d'`exemple.fr`.

<!-- markdownlint-disable search-replace -->

À l'inverse, les raccourcisseurs de premier niveau gérés par l'organisation qui gère aussi la destination sont encouragés. `https://bugzil.la` est détenu et exploité par Mozilla et redirige vers `https://bugzilla.mozilla.org/`, également un domaine Mozilla. Dans ce cas, utilisez l'URL courte. Par exemple, utilisez `https://bugzil.la/1682349` plutôt que `https://bugzilla.mozilla.org/show_bug.cgi?id=1682349`.

<!-- markdownlint-enable search-replace -->

### Niveaux de titres

Quand un nouveau paragraphe ouvre une nouvelle section, ajoutez un titre.
Utilisez les niveaux de titre Markdown sans en sauter&nbsp;: `##`, puis `###`, puis `####`, qui correspondent aux balises HTML [de titres](/fr/docs/Web/HTML/Reference/Elements/Heading_Elements) `<h2>`, `<h3>`, et `<h4>`.

`##` est le plus haut niveau autorisé, car `#` est réservé au titre de page.
Nous recommandons de ne pas dépasser trois niveaux. Si vous pensez avoir besoin d'un quatrième niveau, envisagez de scinder l'article. Vous pouvez aussi présenter l'information sous forme de points pour éviter un niveau quatre.

Gardez à l'esprit les recommandations suivantes lors de la création de sous-titres&nbsp;:

- **N'ajoutez pas de sous-sections uniques.** Ne subdivisez pas un sujet en un seul sous-sujet.
  C'est deux sous-titres ou plus, ou aucun.
- **N'utilisez pas de styles, classes ou macros en ligne dans les titres.** Vous pouvez toutefois utiliser des accents graves pour indiquer des termes de code (par exemple, «&nbsp;Utiliser l'interface `TotoTata`&nbsp;»).
- **Évitez les «&nbsp;chocs de titres&nbsp;».** Ce sont des titres immédiatement suivis d'un sous-titre, sans texte entre les deux.
  Ce n'est pas esthétique et ne fournit pas de texte introductif au début de la section.

### Images et autres médias

Si vous incluez des images ou d'autres médias sur une page, suivez ces règles&nbsp;:

- Assurez-vous que la licence du média autorise son usage. Essayez d'utiliser des licences très permissives comme [CC0 <sup>(angl.)</sup>](https://creativecommons.org/public-domain/cc0/) ou au moins compatibles avec notre licence générale — [Creative Commons Attribution - Partage dans les mêmes conditions](https://creativecommons.org/licenses/by-sa/2.5/deed.fr).
- Pour les images, passez-les par <https://tinypng.com> ou <https://imageoptim.com> pour réduire le poids.
- Pour les `SVG`, faites passer le code par [SVGOMG <sup>(angl.)</sup>](https://jakearchibald.github.io/svgomg/), et assurez-vous que le fichier `SVG` a une ligne vide à la fin.
- Chaque image doit [inclure un texte `alt` descriptif](/fr/docs/MDN/Writing_guidelines/Howto/Images_media#adding_alternative_text_to_images).

### Listes

Formatez et structurez les listes de manière cohérente sur toutes les pages.
Chaque élément doit être rédigé avec une ponctuation appropriée, quel que soit le type de liste.
Selon le type de liste, adaptez l'écriture comme décrit ci-dessous. Dans les deux cas, incluez une phrase d'introduction qui présente l'information de la liste.

- **Listes à puces**&nbsp;: Utilisez-les pour regrouper des informations concises liées. Chaque élément doit suivre une structure similaire. Les phrases et les syntagmes (fragments sans verbe ou sujet) doivent respecter la ponctuation — les phrases finissent par un point, les syntagmes non.

  S'il y a plusieurs phrases dans un élément, un point doit clôturer chaque phrase, y compris la dernière, comme dans un paragraphe. Exemple&nbsp;:

  > Dans cet exemple, nous devons inclure&nbsp;:
  >
  > - Une condition, avec une brève explication.
  > - Une condition similaire, avec une brève explication.
  > - Encore une condition, avec une explication supplémentaire.

  Remarquez la structure répétée d'un point à l'autre. Dans cet exemple, chaque point énonce une condition suivie d'une brève explication, et chaque élément se termine par un point.

  Si des éléments sont des phrases incomplètes, aucun point n'est requis à la fin. Par exemple&nbsp;:

  > Les propriétés, liées à la couleur, utiles dans ce scénario sont&nbsp;:
  >
  > - propriétéA&nbsp;: Définit la couleur d'arrière-plan
  > - propriétéB&nbsp;: Ajoute une ombre au texte

  Si un ou plusieurs éléments sont des phrases complètes, utilisez un point après chaque élément, même si l'élément contient trois mots ou moins. Dans la mesure du possible, uniformisez&nbsp;: soit toutes des phrases, soit tous des syntagmes.

- **Listes numérotées**&nbsp;: Utilisées pour énumérer des étapes d'instructions. La clarté est prioritaire, surtout si chaque étape est longue. Comme pour les puces, respectez la ponctuation. Exemple&nbsp;:

  > Pour structurer correctement une liste numérotée&nbsp;:
  >
  > 1. Ouvrez par un titre ou un court paragraphe pour introduire les instructions. Il est important de donner le contexte.
  > 2. Rédigez vos instructions et gardez chaque étape dans son propre élément numéroté.
  >    Vos instructions peuvent être longues&nbsp;; écrivez clairement et ponctuez correctement.
  > 3. Après les instructions, terminez par un court résumé ou une explication du résultat attendu.

  Exemple de conclusion pour la liste précédente&nbsp;:

  > Nous avons créé une courte liste numérotée qui fournit des étapes pour produire une liste numérotée au bon format.

  Remarquez que les éléments des listes numérotées se lisent comme de courts paragraphes. Comme elles servent souvent à décrire une procédure, gardez chaque élément centré sur une étape&nbsp;: une étape par élément.

### Section « Voir aussi »

La plupart des guides, pages de référence et même pages de glossaire sur MDN Web Docs contiennent une section _Voir aussi_ à la fin de l'article. Cette section contient des [références](#références_liens) vers des sujets liés au sein de MDN et parfois des liens externes. Par exemple, voici la [section Voir aussi](/fr/docs/Web/CSS/Reference/At-rules/@layer#voir_aussi) de la page `@layer`.

En général, présentez les liens de la section Voir aussi sous forme de [liste à puces](#listes) avec chaque élément comme un syntagme. Dans la section [Apprendre le développement web](/fr/docs/Learn_web_development), la section Voir aussi suit un format de [liste de définitions](/fr/docs/MDN/Writing_guidelines/Howto/Markdown_in_MDN#definition_lists).

Pour maintenir la cohérence, gardez à l'esprit les points suivants lors de l'ajout ou la mise à jour d'une section Voir aussi.

#### Texte des liens

- Le texte du lien doit être le même que le titre de la page ou de la section cible. Par exemple, le texte du lien vers la page [ARIA](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes) intitulée «&nbsp;ARIA states and properties&nbsp;» sera&nbsp;:
  - **Correct**&nbsp;: [ARIA states and properties](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes)
- Utilisez la casse phrase même si elle diffère du titre de la page ou de la section liée. Par exemple, le texte du lien vers la page [Mode Quirks](/fr/docs/Web/HTML/Guides/Quirks_mode_and_standards_mode) en casse phrase correcte sera&nbsp;:
  - **Correct**&nbsp;: [Mode Quirks](/fr/docs/Web/HTML/Guides/Quirks_mode_and_standards_mode)
- Pour les liens externes, utilisez aussi la casse phrase même si la casse de l'article cible diffère. Exception&nbsp;: les titres de livres.
  > [!NOTE]
  > Si le lien mène vers une page en anglais, on ajoutera la mention «&nbsp;<sup>(angl.)</sup>&nbsp;» après le texte du lien.
- Sur MDN, vous pouvez utiliser une macro pour lier une page, comme expliqué dans [Lier des pages dans les références](/fr/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros#lien_vers_les_pages_de_références) sur la page _Macros couramment utilisées_. L'usage d'une macro ajoute un formatage de code au mot-clé dans le texte du lien, comme ci-dessous.
- Aucune ponctuation en fin d'élément, il s'agira d'un terme ou d'un syntagme.
  - **Correct**&nbsp;: Le mot-clé [`revert-layer`](/fr/docs/Web/CSS/revert-layer)
  - **Incorrect**&nbsp;: [`revert-layer`](/fr/docs/Web/CSS/revert-layer)
  - **Correct**&nbsp;: L'[API HTML DOM](/fr/docs/Web/API/HTML_DOM_API)
  - **Incorrect**&nbsp;: [HTML DOM API](/fr/docs/Web/API/HTML_DOM_API)
- Comme montré, ajoutez un formatage code avec des accents graves aux mots-clés et littéraux dans le texte du lien, même si ce formatage n'apparaît pas dans les titres. Par exemple, pour le titre «&nbsp;le constructeur Array()&nbsp;», le texte du lien sera [le constructeur `Array()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/Array).

#### Texte descriptif

- Gardez le texte descriptif autour du lien minimal. En cas de description, placez-la après le lien et un deux-points. Formulez comme un syntagme sans ponctuation finale. Gardez tout le texte lié en tête pour faciliter le balayage.
  - **Correct**&nbsp;: {{cssxref(":checked")}}, {{cssxref(":indeterminate")}}&nbsp;: Sélecteurs CSS pour mettre en forme des cases à cocher
- N'utilisez pas la conjonction «&nbsp;and&nbsp;» avant le dernier élément d'une série.
  - **Correct**&nbsp;: {{cssxref("background-color")}}, {{cssxref("border-color")}}, {{cssxref("color")}}, {{cssxref("caret-color")}}, {{cssxref("column-rule-color")}}, {{cssxref("outline-color")}}, {{cssxref("text-decoration-color")}}, {{cssxref("text-emphasis-color")}}, {{cssxref("text-shadow")}}&nbsp;: Autres propriétés liées à la couleur
- Pour les liens externes, essayez d'indiquer la source et l'année de publication ou de mise à jour entre parenthèses quand c'est pertinent. Cela renseigne la destination et aide la maintenance. Pour un article sur [l'attente au niveau supérieur](https://v8.dev/features/top-level-await) sur v8.dev (2019)&nbsp;:
  - **Correct**&nbsp;: [Top-level await <sup>(angl.)</sup>](https://v8.dev/features/top-level-await) sur v8.dev (2019)
- Pour les livres, vous pouvez aussi fournir les auteur·ice·s. Évitez de le faire pour des billets de blog ou dépôts GitHub.

#### Ordre des liens

- Listez d'abord les pages MDN de référence, puis les guides et tutoriels.
- Si la liste mélange interne et externe, placez d'abord les liens internes.
- À l'intérieur de chaque groupe, utilisez l'ordre alphabétique ou du simple vers l'avancé selon le contexte.

### Sous-pages

Quand vous ajoutez des articles sur un sujet, vous le ferez typiquement en créant une page d'atterrissage, puis des sous-pages pour chaque article.
La page d'atterrissage doit commencer par un ou deux paragraphes décrivant le sujet ou la technologie, puis fournir une liste des sous-pages avec leur description.
Vous pouvez automatiser l'insertion des pages dans la liste à l'aide de macros.

Par exemple, le guide [JavaScript](/fr/docs/Web/JavaScript) est structuré comme suit&nbsp;:

- [JavaScript/Guide](/fr/docs/Web/JavaScript/Guide) - Page principale de table des matières
- [JavaScript/Guide/JavaScript Overview](/fr/docs/Web/JavaScript/Guide/Introduction)
- [JavaScript/Guide/Functions](/fr/docs/Web/JavaScript/Guide/Functions)
- [JavaScript/Guide/Details of the Object Model](/fr/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain)

Évitez de placer votre article au sommet de la hiérarchie, ce qui ralentit le site et nuit à la recherche et à la navigation.

### Slugs

Le titre de page, affiché en haut, peut différer du «&nbsp;slug&nbsp;», qui est la partie de l'URL suivant `<locale>/docs/`. Gardez à l'esprit&nbsp;:

- Les slugs doivent rester courts. Lors de la création d'un nouveau niveau de hiérarchie, son composant dans le slug doit tenir en un ou deux mots.
- Utilisez des underscores pour les composants multi-mots, comme `Basic_HTML_syntax` dans `/fr/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax`.
- Utilisez aussi la casse phrase pour chaque composant du slug, comme `Basic_HTML_syntax` ci-dessus.

### Titres

Les titres sont utilisés dans les résultats de recherche et structurent la hiérarchie dans le fil d'Ariane. Un titre peut différer du «&nbsp;slug&nbsp;», comme expliqué dans la section [Slugs](#slugs).

Gardez à l'esprit&nbsp;:

- **Style de capitalisation**&nbsp;: Utilisez la casse phrase pour les titres et sections sur MDN Web Docs (ne capitalisez que le premier mot et les noms propres)&nbsp;:
  - **Correct**&nbsp;: «&nbsp;A new method for creating JavaScript rollovers&nbsp;»
  - **Incorrect**&nbsp;: «&nbsp;A New Method for Creating JavaScript Rollovers&nbsp;»

  Beaucoup de pages plus anciennes ne respectent pas encore cette règle. Mettez-les à jour au besoin. Nous avançons progressivement.

- **Règles générales**&nbsp;: Décider quoi documenter et comment structurer le contenu est l'une des premières étapes. Écrire une table des matières peut aider à ordonner l'information. Couvrez d'abord les concepts simples, puis les plus avancés. Traitez d'abord le conceptuel, ensuite l'actionnel.

  Recommandations pour les titres de page, sections et sous-sections&nbsp;:
  - **Du plus large au plus précis**&nbsp;: Comme indiqué dans [Niveaux de titres](#niveaux_de_titres), descendez de `##` vers `####` sans sauter. Utilisez les niveaux élevés pour les titres introductifs généraux et des titres plus spécifiques pour les niveaux inférieurs.
  - **Regroupez logiquement**&nbsp;: Assurez-vous que les sous-sections liées sont regroupées sous un titre de niveau supérieur. Nommer clairement les sections aide.
  - **Titres courts**&nbsp;: Des titres courts se balayent mieux dans le texte et la table des matières.
  - **Titres spécifiques**&nbsp;: Utilisez le titre pour indiquer l'information couverte. Par exemple, «&nbsp;Éléments HTML&nbsp;» plutôt que «&nbsp;Introduction&nbsp;».
  - **Titres focalisés**&nbsp;: Un seul objectif par titre. Évitez autant que possible la conjonction «&nbsp;and&nbsp;».
  - **Construction parallèle**&nbsp;: Utilisez un langage similaire pour des titres d'un même niveau. Par exemple, si un niveau `###` utilise des gérondifs en «&nbsp;-ing&nbsp;», essayez de tous les écrire ainsi. Si un titre commence par un verbe à l'impératif («&nbsp;Utiliser&nbsp;», «&nbsp;Configurer&nbsp;»), faites de même pour les autres au même niveau.
  - **Évitez de répéter le titre parent**&nbsp;: Ne répétez pas le texte d'un titre de niveau supérieur dans les titres de niveau inférieur. Par exemple, dans une section «&nbsp;Virgules&nbsp;», nommez une sous-section «&nbsp;Après une proposition introductive&nbsp;» plutôt que «&nbsp;Virgules après une proposition introductive&nbsp;».
  - **N'utilisez pas d'article initial**&nbsp;: Évitez de commencer les titres par «&nbsp;a&nbsp;», «&nbsp;an&nbsp;» ou «&nbsp;the&nbsp;».
  - **Ajoutez un texte introductif**&nbsp;: Après un titre, ajoutez un court texte pour expliquer ce qui sera couvert.

## Voir aussi

- [Lignes directrices pour écrire des exemples de code](/fr/docs/MDN/Writing_guidelines/Code_style_guide)
- [Lignes directrices pour les exemples HTML](/fr/docs/MDN/Writing_guidelines/Code_style_guide/HTML)
- [Lignes directrices pour les exemples CSS](/fr/docs/MDN/Writing_guidelines/Code_style_guide/CSS)
- [Lignes directrices pour les exemples JavaScript](/fr/docs/MDN/Writing_guidelines/Code_style_guide/JavaScript)
- [Lignes directrices pour les exemples de shell](/fr/docs/MDN/Writing_guidelines/Code_style_guide/Shell)

## Lectures complémentaires

### Autres guides de style

Si vous avez des questions d'usage et de style non couvertes ici, nous recommandons le [Guide de rédaction de Microsoft <sup>(angl.)</sup>](https://learn.microsoft.com/en-us/style-guide/welcome/) ou le [Manuel de style de Chicago <sup>(angl.)</sup>](https://www.chicagomanualofstyle.org/).

### Langue, grammaire et orthographe

Pour améliorer vos compétences en rédaction et en édition, les ressources suivantes peuvent aider&nbsp;:

- En français&nbsp;:
  - [Dictionnaire de l'Académie française](https://www.dictionnaire-academie.fr/) sur dictionnaire-academie.fr
  - [Dire, Ne pas dire](https://www.academie-francaise.fr/dire-ne-pas-dire) sur academie-francaise.fr
  - [Grammarlecte, un outil de correction grammaticale et orthographique pour Firefox](https://addons.mozilla.org/fr/firefox/addon/grammalecte-fr/)
- En anglais&nbsp;:
  - [Erreurs courantes en anglais <sup>(angl.)</sup>](https://brians.wsu.edu/common-errors-in-english-usage/) sur brians.wsu.edu
  - [FAQ grammaire anglaise <sup>(angl.)</sup>](https://websites.umich.edu/~jlawler/aue.html) sur alt-usage-english.org
  - [Langue anglaise et usage <sup>(angl.)</sup>](https://english.stackexchange.com/) sur english.stackexchange.com&nbsp;: questions-réponses sur l'usage
  - [Merriam-Webster's Concise Dictionary of English Usage <sup>(angl.)</sup>](https://books.google.com/books?id=UDIjAQAAIAAJ) sur google.com/books (publié en 2002)&nbsp;: conseils argumentés et accessibles&nbsp;; utile pour des personnes non natives, notamment pour les prépositions
  - [On Writing Well <sup>(angl.)</sup>](https://www.harpercollins.com/products/on-writing-well-william-zinsser) de William Zinsser sur harpercollins.com (2016)
  - [Style: Lessons in Clarity and Grace <sup>(angl.)</sup>](https://books.google.com/books?id=QjskvgEACAAJ) de Joseph Williams et Gregory Colomb sur google.com/books (2019)
