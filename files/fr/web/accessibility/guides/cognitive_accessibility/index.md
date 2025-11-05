---
title: Accessibilité cognitive
slug: Web/Accessibility/Guides/Cognitive_accessibility
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

L'accessibilité cognitive concerne les aspects d'accessibilité pour les personnes ayant des troubles cognitifs et des difficultés d'apprentissage. Ce document présente l'accessibilité cognitive et explique comment améliorer l'accessibilité du Web pour les personnes ayant des différences cognitives et d'apprentissage.

Le handicap cognitif recouvre un large éventail de situations, allant des personnes avec une déficience intellectuelle (qui peuvent avoir les capacités affaiblies) aux troubles liés à l'âge (problèmes de mémoire ou de réflexion). Cela inclut aussi les personnes ayant des troubles psychiques, comme la dépression ou la schizophrénie, ainsi que les personnes avec des troubles d'apprentissage, comme la dyslexie ou le trouble du déficit de l'attention avec ou sans hyperactivité (TDAH).

Bien qu'il existe une grande diversité dans les définitions cliniques des troubles cognitifs, les personnes concernées rencontrent un ensemble commun de difficultés fonctionnelles. Ces difficultés incluent la compréhension du contenu, la mémorisation des étapes à suivre pour accomplir une tâche, ou la confusion causée par des mises en page web incohérentes ou non conventionnelles. Dans ce document, nous nous concentrons sur les actions que les développeur·euse·s doivent entreprendre pour améliorer l'accessibilité cognitive de leurs sites web et applications.

## Vue d'ensemble

Les troubles cognitifs et intellectuels couvrent un large spectre et peuvent être momentanés, temporaires ou permanents. Par exemple, la démence et la maladie d'Alzheimer sont des troubles cognitifs permanents qui s'aggravent progressivement. D'autres troubles cognitifs permanents incluent l'aphasie, les troubles du langage, l'autisme, le TDA/H, la dyslexie et la dyscalculie.

Un exemple de trouble cognitif temporaire peut concerner des personnes affectées par des substances comme l'alcool ou les drogues. Une autre forme peut être la dépression, par exemple lors d'un deuil ou d'une tristesse passagère après avoir vu un contenu en ligne. Un troisième exemple est le manque de sommeil.

Il peut sembler difficile de répondre à la grande diversité des différences cognitives, d'autant que les solutions adaptées à deux personnes différentes peuvent parfois être contradictoires. Une façon d'aborder ce défi est de se concentrer sur les compétences cognitives. Les compétences cognitives incluent&nbsp;:

- l'attention
- la mémoire
- la vitesse de traitement
- la gestion du temps
- les lettres et le langage
- les chiffres, les symboles et les mathématiques
- la compréhension et la prise de décision

Une approche solide pour proposer des solutions accessibles aux personnes ayant des troubles cognitifs comprend&nbsp;:

- proposer le contenu de plusieurs façons (par exemple, synthèse vocale ou vidéo)&nbsp;;
- fournir un contenu facile à comprendre, rédigé selon des standards de langage clair&nbsp;;
- attirer l'attention sur le contenu important&nbsp;;
- limiter les distractions (contenu ou publicités inutiles)&nbsp;;
- garantir une mise en page et une navigation cohérentes&nbsp;;
- intégrer des éléments familiers (liens soulignés, bleus non visités et violets visités)&nbsp;;
- diviser les processus en étapes logiques et essentielles avec des indicateurs d'avancement&nbsp;;
- rendre l'authentification aussi simple que possible sans compromettre la sécurité&nbsp;;
- faciliter la saisie des formulaires (messages d'erreur clairs et aide à la correction des erreurs).

## Règles WCAG

Les WCAG, ou «&nbsp;Directives pour l'accessibilité du contenu Web&nbsp;» (<i lang="en">Web Content Accessibility Guidelines</i> en anglais), comprennent plusieurs recommandations visant à améliorer l'accessibilité cognitive. Ces directives sont publiées par l'Initiative pour l'accessibilité du Web (WAI) du World Wide Web Consortium (W3C), l'organisme international principal de normalisation pour Internet. Ce groupe est également responsable des recommandations [Accessible Rich Internet Application (ARIA)](/fr/docs/Web/Accessibility/ARIA/Guides).

Les WCAG reposent sur quatre principes&nbsp;: les sites web doivent être perceptibles, utilisables, compréhensibles et robustes. Pour cela, elles définissent 17 directives spécifiques, dont six sont particulièrement pertinentes pour l'accessibilité cognitive.

Toutes les recommandations suivantes profitent à bien plus qu'aux seules personnes ayant des troubles cognitifs. Par exemple, la possibilité de prolonger la durée de validité d'un code d'authentification envoyé par SMS sur un appareil mobile aide dans les situations suivantes&nbsp;:

- Personnes ayant des troubles de l'attention ou de l'anxiété.
- Personnes ayant une faible mémoire à court terme ou effectuant plusieurs tâches à la fois.
- Personnes moins à l'aise avec la technologie.
- Personnes ayant une mauvaise réception sans fil.
- Personnes ayant des troubles de la motricité.

## Adaptabilité

La [règle 1.3 <sup>(angl.)</sup>](https://www.w3.org/WAI/WCAG21/Understanding/adaptable) indique que «&nbsp;le contenu doit être **adaptable**&nbsp;». Créez un contenu qui peut être présenté de différentes manières sans perte d'information ni de structure. Par exemple, proposez des mises en page {{glossary('responsive web design', 'adaptatives')}} avec un affichage mobile en colonne unique.

Toutes les informations, y compris la structure et les relations véhiculées par la présentation, doivent être disponibles sous une forme perceptible par tou·te·s les utilisateur·ice·s pour atteindre cet objectif. Par exemple, l'information peut être lue à voix haute par un outil de synthèse vocale. Rendre votre contenu compréhensible par les logiciels est un bon moyen de garantir qu'il pourra être utilisé dans d'autres modes de présentation.

## Temps

Il est important de laisser aux utilisateur·ice·s le temps nécessaire pour accomplir leurs tâches. La [règle 2.2 <sup>(angl.)</sup>](https://www.w3.org/WAI/WCAG21/Understanding/enough-time) indique qu'il faut «&nbsp;donner aux utilisateur·ice·s suffisamment de **temps** pour lire et utiliser le contenu&nbsp;».

Une **limite de temps** est tout processus qui se produit sans intervention de l'utilisateur·ice après un certain délai ou de façon périodique, comme une déconnexion après 30 minutes ou le fait d'avoir 15 minutes pour effectuer un achat. Les personnes ayant des troubles cognitifs peuvent avoir besoin de plus de temps pour lire le contenu ou remplir des formulaires. Les solutions incluent le fait d'accorder plus de temps pour terminer les tâches ou de supprimer complètement les contraintes de temps.

### Minuteries

Options pour ajuster les exigences de temps&nbsp;:

- Permettre à l'utilisateur·ice de désactiver ou d'ajuster la limite de temps jusqu'à 10 fois la limite initiale avant d'y être confronté·e.
- Avertir l'utilisateur·ice et fournir un délai d'au moins 20 secondes pour prolonger la durée du délai d'expiration d'un facteur 10 via une action, comme appuyer sur la barre d'espace.

Proposez un bouton ou une option permettant d'activer une durée de session plus longue, voire aucune limite de session. Exemples de contenus chronométrés&nbsp;: formulaires, exercices de lecture chronométrés, supports de formation. Si la limite de temps dépasse 20 heures, aucune adaptation n'est requise.

### Mouvements, clignotements, défilements

Il est important de ne pas distraire les utilisateur·ice·s, en particulier celles et ceux ayant des troubles cognitifs.

Si des informations en mouvement, clignotantes, défilantes ou se mettant à jour automatiquement démarrent sans intervention, durent plus de cinq secondes et sont présentées en parallèle avec d'autres contenus, l'utilisateur·ice doit pouvoir les mettre en pause, les arrêter, les masquer ou les contrôler, sauf si cela est essentiel au fonctionnement. «&nbsp;Essentiel&nbsp;» signifie que retirer ces informations modifierait fondamentalement le sens du contenu et/ou la fonctionnalité, **et** que l'information ou la fonctionnalité ne peut être obtenue d'aucune autre manière conforme. Cela inclut les GIF animés, si l'animation dure plus de 5 secondes.

Autres critères temporels à prendre en compte&nbsp;:

- Les personnes ayant des limitations cognitives ou linguistiques peuvent avoir besoin de plus de temps pour lire et comprendre. Pour une meilleure accessibilité, supprimez toute limite de temps. Le contenu chronométré doit aussi être évité, sauf pour les médias synchronisés non interactifs et les événements en temps réel.
- Les personnes ayant des troubles de l'attention doivent pouvoir se concentrer sans distraction. L'utilisateur·ice doit pouvoir reporter ou supprimer les interruptions, sauf en cas d'urgence. Cela permet aux personnes concernées de se concentrer sur l'objectif principal du contenu. Permettez de différer les mises à jour de contenu en proposant un moyen de les demander plutôt qu'une mise à jour automatique. Proposez aussi de rendre les alertes non essentielles optionnelles.
- Veillez à ce que les utilisateur·ice·s puissent poursuivre une activité sans perte de données après une reconnexion suite à une session expirée, par exemple en sauvegardant l'état d'un questionnaire. Les données doivent être enregistrées de façon à pouvoir être modifiées après reconnexion. Avant la reconnexion, encodez les données comme cachées ou chiffrées.
- Prévoyez des avertissements en cas d'inactivité pouvant entraîner une perte de données. Lorsqu'un délai d'expiration est utilisé, indiquez précisément combien de temps entraînera la fin de session et la perte de données. L'exception concerne la conservation des données pendant plus de 20 heures sans action de l'utilisateur·ice.

## Navigation

La [règle 2.4 <sup>(angl.)</sup>](https://www.w3.org/WAI/WCAG21/Understanding/navigable) indique qu'il faut «&nbsp;fournir des moyens d'aider les utilisateur·ice·s à naviguer, à trouver du contenu et à déterminer où ils·elles se trouvent&nbsp;», et propose 10 recommandations pour garantir que le site soit navigable et que le contenu soit trouvable&nbsp;:

### Inclure un `<title>`

Veillez à inclure un élément HTML {{HTMLElement('title')}} pour le document, car les titres fournissent une description rapide et facile à référencer du sujet principal de l'écran. Les personnes ayant des troubles cognitifs, une mémoire à court terme limitée ou des difficultés de lecture bénéficient de la possibilité d'identifier ainsi le but du contenu.

### Titres et étiquettes

Incluez des titres clairs et descriptifs pour que les utilisateur·ice·s puissent facilement trouver l'information et comprendre les relations entre les différentes sections du contenu. Des étiquettes descriptives aident à identifier les composants spécifiques du contenu. Les personnes qui lisent lentement ou qui ont une mémoire à court terme limitée bénéficient de titres de section qui permettent de prédire le contenu de chaque partie.

### Titres de section

Les titres aident à définir l'organisation générale du contenu d'une page. Ils facilitent la navigation entre les sections et aident à la compréhension. Exemples de titres&nbsp;: chapitres, sections et sous-sections du contenu, etc.

Les titres sont des repères de navigation plus évidents que d'autres méthodes pour identifier les sections (bordures, espaces, règles horizontales, etc.).

### Plusieurs moyens de trouver du contenu

Différent·e·s utilisateur·ice·s préfèrent différentes méthodes pour trouver l'information, il est donc important de proposer plusieurs moyens d'accéder au contenu de votre site.

Fournir plus d'une façon de naviguer sur votre site peut aider à trouver l'information plus rapidement. Certain·e·s préféreront une table des matières, un plan du site ou une fonction de recherche plutôt que de parcourir plusieurs pages. D'autres préféreront explorer le site de manière séquentielle, en passant de page en page pour mieux comprendre la structure, le contenu et les concepts du site.

### Ability to bypass blocks of content

Providing a mechanism, such as a [skip link](/fr/docs/Web/HTML/Reference/Elements/a#skip_links), to bypass blocks of content that are repeated on multiple web pages.

### Focus order makes sense

The order of focus for interactive elements should make sense. To achieve this, the DOM order should match the visual order, which in turn should match the tabbing order. If the tab order jumps around, especially in a way that does not match the visual order when navigating with a keyboard, users can become disoriented.

### Focused elements should be visibly focused

When a user navigates using a keyboard, the UI should make it obvious which element currently has focus. Don't alter or remove the browser's default [`:focus`](/fr/docs/Web/CSS/Reference/Selectors/:focus) styling, unless you're making focus even more obvious.

### Link text conveys meaning

The link's text should clearly and concisely communicate what the user should expect to be navigated to next if they choose to activate it. Poorly phrased link text may confuse users as to its purpose or destination.

Some forms of assistive technology allow users to navigate by lists of all the links present on the page. Links will be removed from the context of their surrounding non-link content, making the need for understandable link text even more important. An example of a poor experience is a page full of links whose text reads, "Click here". Without indicating where "here" will take you, the link's purpose is unclear.

For screen readers, it is vital that linked text describes the purpose of each link. If you have added content to links for screen readers, and that content is verbose and potentially confusing to sighted readers, consider clipping the added text to visually hide it from those not using assistive technologies.

### Current location is available

Users should be able to orient themselves within a site or application. This is especially important and helpful for people with short attention spans who may become confused when following a long series of navigation steps.

All users benefit from information about where they are in a site's hierarchy, especially for sites or applications with large amounts of content or many subsections. [Breadcrumbs](/fr/docs/Glossary/Breadcrumb), [site maps](/fr/docs/Glossary/Site_map), and identifying the current page in the navigation as "current" are all techniques that help communicate the current location.

## Lisibilité

La [règle 3.1 <sup>(angl.)</sup>](https://www.w3.org/WAI/WCAG21/Understanding/readable) indique qu'il faut «&nbsp;rendre le contenu textuel lisible et compréhensible&nbsp;». Pour certain·e·s utilisateur·ice·s, il est difficile de déduire le sens d'un mot ou d'une expression à partir du contexte, surtout lorsque le mot ou l'expression est utilisé·e de manière inhabituelle ou a reçu un sens spécialisé.

Pour ces utilisateur·ice·s, la capacité à lire et à comprendre peut dépendre de la disponibilité de définitions précises ou de la forme développée des acronymes ou abréviations. Certain·e·s peuvent avoir beaucoup de mal à reconnaître les mots écrits, mais comprendre des documents très complexes lorsque le texte est lu à voix haute ou lorsque les processus et idées clés sont illustrés visuellement.

### Déclarer la langue de la page et de tout contenu dans une autre langue

La langue de chaque page doit être déclarée à l'aide de l'attribut [`lang`](/fr/docs/Web/HTML/Reference/Attributs_globaux/lang) sur l'élément HTML {{HTMLElement('html')}}. Ajoutez à nouveau l'attribut `lang` sur tout texte rédigé dans une langue différente de la langue principale du document.

Une utilisation correcte de `lang` permet à certains lecteurs d'écran d'annoncer correctement le texte lors de la conversion en synthèse vocale. Cela aide aussi les personnes qui utilisent des logiciels de lecture vocale.

### Définir les mots ou usages inhabituels

Certaines situations de handicap rendent difficile la compréhension des usages non littéraux, comme les idiomes, les expressions familières ou le jargon spécialisé. Les personnes non natives peuvent aussi avoir du mal avec ces termes. Si un mot ou une expression a un sens particulier, fournissez une définition en ligne ou un lien, dans un glossaire ou vers un dictionnaire en ligne. Si un mot ou une expression a plusieurs sens, définissez chaque usage.

### Définir les abréviations

Les abréviations peuvent prêter à confusion pour les personnes qui&nbsp;:

- Ont des difficultés à décoder les mots.
- Ont une mémoire limitée.
- Ont du mal à utiliser le contexte pour comprendre.
- Utilisent des loupes d'écran (qui réduisent souvent les indices contextuels).

Fournissez la forme développée de l'abréviation lors de sa première utilisation, suivie de l'abréviation placée dans un élément HTML {{HTMLElement('abbr')}}. Si une abréviation n'a pas de forme développée, ou s'il s'agit d'une abréviation d'un mot qui n'est pas dans la langue principale du document (comme le latin), expliquez sa signification. Pensez aussi à utiliser le [texte ruby](/fr/docs/Web/HTML/Reference/Elements/ruby) pour les sigles (prononciation des acronymes).

### Niveau de lecture

Le contenu doit être rédigé aussi clairement que possible. Une bonne règle consiste à rendre le contenu suffisamment simple pour qu'il soit compris dès la première lecture. Pour cela&nbsp;:

- Utilisez des mots courts et simples.
- Rédigez des phrases courtes.
- Utilisez la voix active au présent de l'indicatif.
- Respectez la grammaire et l'orthographe.

Il est utile pour les personnes ayant des troubles cognitifs de fournir un résumé du texte (parfois appelé TL;DR, ou «&nbsp;trop long&nbsp;; pas lu&nbsp;») à un niveau de lecture facile. Une autre technique consiste à proposer des visuels pour aider à expliquer les idées, événements et processus.

Il existe des outils qui peuvent évaluer le niveau de difficulté de votre contenu. Par exemple, ce document a un niveau moyen d'environ 11, ce qui signifie qu'il devrait être facilement compris par une personne francophone de 16 à 17 ans. Certains outils peuvent même suggérer des moyens de le simplifier.

### Prononciation

Il existe plusieurs techniques pour aider à enseigner la prononciation des mots&nbsp;:

- Fournir la prononciation immédiatement après le mot.
- Proposer un lien vers une liste de prononciations.
- Fournir un glossaire avec la prononciation.
- Utiliser l'élément HTML {{HTMLElement('ruby')}} pour illustrer la prononciation d'un mot.

Fournir des indications sur la prononciation des mots aide de nombreux types de personnes, notamment celles qui préfèrent lire à voix haute, les personnes non francophones, et celles qui ne connaissent pas le sens d'un terme dans le contexte.

Une autre solution consiste à utiliser des glyphes ou des signes diacritiques pour illustrer la prononciation. Cependant, si cette technique est utilisée, il doit exister un moyen de la désactiver. Il est également utile de proposer un lien vers un guide expliquant la signification de ces signes, car leur sens n'est pas toujours évident.

## Prévisibilité

La [règle 3.2 <sup>(angl.)</sup>](https://www.w3.org/WAI/WCAG21/Understanding/predictable) des WCAG indique&nbsp;: «&nbsp;faire en sorte que les pages web apparaissent et fonctionnent de manière prévisible&nbsp;». Il s'agit d'un principe fondamental de la conception d'une bonne expérience utilisateur. La cohérence est particulièrement importante pour les personnes ayant des difficultés cognitives. Cela inclut la cohérence de la mise en page et des composants interactifs prévisibles.

### Utiliser l'activation, pas la sélection, pour changer de contexte

Le changement de contexte doit être intentionnel. Ainsi, lorsqu'une fonctionnalité de l'interface reçoit la sélection ([focus](/fr/docs/Web/API/HTMLElement/focus)), elle ne doit pas déclencher d'autres actions visibles par l'utilisateur·ice. L'utilisateur·ice doit activer la fonctionnalité pour provoquer le changement.

### Changer un paramètre suite à une action explicite

L'utilisation d'un contrôle de formulaire ou la saisie de données doivent produire un comportement prévisible. Les changements de contexte peuvent désorienter les personnes ayant des troubles cognitifs et ne doivent donc se produire que lorsqu'il est clair qu'un tel changement résulte d'une action explicite de l'utilisateur·ice.

Le changement d'état doit toujours nécessiter une action volontaire. Par exemple&nbsp;: cocher une case, saisir une donnée ou modifier une option dans une liste déroulante. Prévoyez également un bouton de validation pour déclencher le changement de contexte, et décrivez ce qui va se passer avant que le changement n'ait lieu.

### Garder la navigation cohérente sur tout le site

L'ordre de navigation doit rester cohérent d'une page à l'autre. Par exemple, si vous avez une barre de navigation sur plusieurs pages, assurez-vous qu'elle soit identique partout, avec les mêmes liens au même endroit. Cela ne concerne pas que la navigation&nbsp;: présentez tous les éléments répétés dans le même ordre relatif à chaque apparition.

### Fournir un étiquetage cohérent

Des fonctions identiques doivent toujours avoir des étiquettes similaires. Des libellés de boutons cohérents, des textes alternatifs pour les icônes et une iconographie similaire pour des interactions semblables, même dans différentes sections de votre site, aident tou·te·s les utilisateur·ice·s.

### Être cohérent et prévisible, et respecter les conventions

Même si l'usage d'icônes sans étiquette n'est pas la méthode la plus efficace pour transmettre une information, il est important de garder l'utilisation des icônes (et, si elles sont étiquetées, leur texte) cohérente pour aider à leur compréhension. De même, ne modifiez pas les comportements par défaut comme le bouton «&nbsp;Précédent&nbsp;» du navigateur. Si vous devez rediriger un·e utilisateur·ice, prévenez-les à l'avance.

## Aide à la saisie

La [règle 3.3 <sup>(angl.)</sup>](https://www.w3.org/WAI/WCAG21/Understanding/input-assistance) vise à garantir la saisie correcte des données et indique&nbsp;: «&nbsp;aider les utilisateur·ice·s à éviter et corriger les erreurs&nbsp;». Tout le monde peut faire des erreurs, mais certaines personnes y sont plus sujettes, les remarquent moins ou ont plus de difficultés à les corriger.

Les recommandations sur l'aide à la saisie visent à réduire la probabilité que les utilisateur·ice·s, en particulier en situation de handicap, commettent une erreur et, si cela arrive, à augmenter la probabilité qu'ils·elles voient et comprennent le message d'erreur et puissent corriger l'erreur avec succès.

### Détection automatique des erreurs

Les utilisateur·ice·s doivent être averti·e·s en cas d'erreur et informé·e·s de la nature du problème. Si une détection d'erreur côté client est mise en place, respectez les recommandations suivantes pour rendre l'erreur aussi compréhensible que possible&nbsp;:

- Décrivez l'erreur dans le texte.
- Rendez le message d'erreur aussi précis que possible.
- Indiquez les champs obligatoires non remplis et fournissez une description textuelle si une valeur saisie est invalide.
- Si l'erreur empêche la soumission d'un formulaire, placez le focus sur l'erreur. S'il y a plusieurs erreurs, fournissez un résumé, chaque erreur étant liée au champ concerné.
- Ajoutez du texte en plus des icônes, images, couleurs, etc. Certaines personnes ont du mal à comprendre la signification des icônes ou autres indices visuels.
- D'autres peuvent avoir du mal à comprendre la version textuelle du message d'erreur. Pour ces personnes, proposez aussi des icônes et des couleurs.
- Prévoyez également un retour positif lors d'une soumission réussie.

### Fournir des instructions pour la saisie

Commencez le formulaire par des instructions textuelles sur son fonctionnement. Ajoutez des étiquettes ou des instructions lorsque des informations doivent être saisies, en utilisant les éléments HTML {{HTMLElement('label')}}, {{HTMLElement('fieldset')}} et {{HTMLElement('legend')}}.

Les étiquettes doivent être descriptives et placées près du champ concerné. Si un format précis est requis, fournissez un exemple correctement formaté. Pensez aussi à effectuer une validation côté serveur pour faciliter la saisie.

Si un champ est obligatoire, indiquez-le visuellement et [dans le code](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-required). Si un champ modifie le contexte, décrivez ce qui va se passer avant que l'utilisateur·ice ne provoque ce changement.

### Suggestions d'erreur

Proposez une saisie suggérée à l'utilisateur·ice si une erreur est détectée automatiquement et que des suggestions de correction sont connues (sauf si cela compromet la sécurité ou l'objectif du contenu).

### Prévenir les catastrophes

Pour les soumissions qui entraînent ou peuvent entraîner des conséquences juridiques, financières ou autres conséquences importantes, assurez-vous que les soumissions puissent être relues, confirmées et/ou annulées.

Les données saisies doivent être vérifiées avant la soumission, et l'utilisateur·ice doit pouvoir les corriger. Il·Elle doit pouvoir relire, confirmer et corriger les informations avant l'envoi final. Prévoyez aussi une case à cocher de confirmation en plus du bouton d'envoi.

Si une soumission entraîne une transaction juridique ou financière, indiquez un délai pendant lequel la demande peut être modifiée ou annulée.

### Fournir de l'aide

Proposez une aide contextuelle. Si un formulaire nécessite une saisie de texte, fournissez des instructions sur le but et la saisie attendue. Ajoutez la vérification orthographique et des suggestions pour les champs de texte long, ainsi que des liens vers l'aide et la documentation. Si un format de données précis est attendu, donnez un exemple.

## Notes

Les éléments ci-dessus sont de bonnes pratiques de conception. Ils bénéficient à tou·te·s.

- De nombreuses personnes ayant des troubles cognitifs présentent aussi des handicaps physiques. Les sites web doivent être conformes aux [Directives pour l'accessibilité du contenu Web du W3C <sup>(angl.)</sup>](https://www.w3.org/WAI/standards-guidelines/wcag/).
- Le [groupe de travail sur l'accessibilité cognitive et les troubles d'apprentissage du W3C <sup>(angl.)</sup>](https://www.w3.org/WAI/GL/task-forces/coga/) produit des recommandations pour l'accessibilité web des personnes ayant des troubles cognitifs.
- WebAIM propose une [page dédiée aux troubles cognitifs <sup>(angl.)</sup>](https://webaim.org/articles/cognitive/) avec des informations et ressources pertinentes.
- Les Centers for Disease Control des États-Unis estiment qu'en 2018, 1 citoyen·ne sur 4 avait un handicap et, parmi eux, [le trouble cognitif est le plus courant chez les jeunes <sup>(angl.)</sup>](https://archive.cdc.gov/www_cdc_gov/media/releases/2018/p0816-disability.html).
- Aux États-Unis, «&nbsp;déficience intellectuelle&nbsp;» (<i lang="en">intellectual disabilities</i>) était auparavant appelée «&nbsp;retard mental&nbsp;» (<i lang="en">mental retardation</i>). Au Royaume-Uni, <i lang="en">intellectual disabilities</i> correspond généralement à «&nbsp;troubles de l'apprentissage&nbsp;» <i lang="en">learning disabilities</i> ou «&nbsp;difficultés d'apprentissage&nbsp;» <i lang="en">learning difficulties</i>.

## Voir aussi

- [Recommandations d'accessibilité <sup>(angl.)</sup>](https://extensionworkshop.com/documentation/develop/build-an-accessible-extension/)
- [Qu'est-ce que l'accessibilité](/fr/docs/Learn_web_development/Core/Accessibility/What_is_accessibility)
- [Accessibilité pour les troubles épileptiques](/fr/docs/Web/Accessibility/Guides/Seizure_disorders)
- [Comprendre les recommandations WCAG](/fr/docs/Web/Accessibility/Guides/Understanding_WCAG)
- [Aperçu de l'accessibilité](/fr/docs/Learn_web_development/Core/Accessibility)
- [Web Content Accessibility Guidelines <sup>(angl.)</sup>](https://www.w3.org/WAI/standards-guidelines/wcag/), dont [les recommandations pour l'accessibilité cognitive](#règles_wcag)
- [Groupe de travail W3C sur l'accessibilité cognitive et les troubles d'apprentissage <sup>(angl.)</sup>](https://www.w3.org/WAI/GL/task-forces/coga/)
- [Informations WebAIM sur la cognition <sup>(angl.)</sup>](https://webaim.org/articles/cognitive/)
- [Informations CDC sur le handicap <sup>(angl.)</sup>](https://www.cdc.gov/disability-and-health/)
