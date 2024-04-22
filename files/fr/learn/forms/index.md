---
title: Formulaires web — Travailler avec les données saisies
slug: Learn/Forms
l10n:
  sourceCommit: 06bb246b52a759cc0b70c0bc2f72531afa7f8c6a
---

{{LearnSidebar}}

Ce module contient un ensemble d'article pour acquérir les notions fondamentales relatives aux formulaires web. Les formulaires web sont un outil puissant pour l'interaction avec les utilisatrices et utilisateurs. On les utilise généralement pour collecter des données saisies ou pour permettre le contrôle de l'interface. Toutefois, pour des raisons historiques et techniques, il n'est pas évident de les utiliser avec tout leur potentiel. Dans les articles indiqués ci-après, nous aborderons les concepts essentiels des formulaires web&nbsp;: leur structure HTML, la mise en forme des contrôles des formulaires, la validation des données, et l'envoi de données au serveur.

> **Remarque :**
>
> #### Vous souhaitez devenir développeuse ou développeur <i lang="en">front-end</i>&nbsp;?
>
> Nous avons construit un module qui contient toutes les informations essentielles pour parvenir à cet objectif.
>
> [**Commencez ici**](/fr/docs/Learn/Front-end_web_developer)

## Prérequis

Avant de démarrer ce module, vous devriez avoir lu [Introduction à HTML](/fr/docs/Learn/HTML/Introduction_to_HTML). Cela vous permettra de comprendre [les guides introductifs](#guides_introductifs) sans peine et d'utiliser [le guide sur les contrôles natifs de base des formulaires](/fr/docs/Learn/Forms/Basic_native_form_controls).

Pour maîtriser les formulaires, connaître le HTML ne sera pas suffisant. Il faudra aussi apprendre certaines techniques spécifiques pour mettre en forme les contrôles de formulaire et savoir manipuler les scripts pour gérer la validation et la création de contrôles spécifiques. Toutefois, avant d'attaquer les autres sections listées ci-après, nous vous conseillons de commencer par apprendre quelques notions de [CSS](/fr/docs/Learn/CSS) et de [JavaScript](/fr/docs/Learn/JavaScript) au préalable.

Le paragraphe précédent permet de comprendre pourquoi nous avons créé un module à part entière pour les formulaires (plutôt que de distiller le contenu sur les formulaires dans les sections sur HTML, CSS, et JavaScript). En effet, les éléments relatifs aux formulaires sont plus complexes que les autres éléments HTML et nécessite de travailler de concert avec des techniques basées sur CSS et ou JavaScript pour en tirer le meilleur parti.

> **Note :** Si vous travaillez sur un appareil (que ce soit un ordinateur, une tablette ou autre) où vous ne pouvez pas créer vos propres fichiers, vous pouvez essayer la plupart des exemples de code fournis dans ces articles dans des outils en ligne comme [JSBin](https://jsbin.com/) ou [Glitch](https://glitch.com/).

## Guides introductifs

- [Votre premier formulaire](/fr/docs/Learn/Forms/Your_first_form)
  - : Le premier article de cette série vous guidera pour créer votre premier formulaire web. Il aborde les étapes de conception, l'implémentation à l'aide des éléments HTML pertinents, l'ajout d'une mise en forme simple avec CSS et la façon dont les données sont envoyées au serveur.
- [Comment structurer un formulaire web](/fr/docs/Learn/Forms/How_to_structure_a_web_form)
  - : Maintenant que les bases ont été abordées, voyons avec un peu plus de détails les éléments utilisés pour structurer et donner un sens aux différentes parties d'un formulaire.

## Les différents contrôles d'un formulaire

- [Les contrôles natifs de base des formulaires](/fr/docs/Learn/Forms/Basic_native_form_controls)
  - : Pour le début de section, nous verrons les différentes fonctionnalités offertes nativement avec les différents types de l'élément HTML [`<input>`](/fr/docs/Web/HTML/Element/input) et les options disponibles pour collecter différents types de données.
- [Les types de champs HTML5](/fr/docs/Learn/Forms/HTML5_input_types)
  - : Nous continuons l'approfondissement sur l'élément `<input>`, en voyant notamment les types rajoutés avec HTML5 et les améliorations qu'ils apportent. Dans cet article, nous verrons également l'élément [`<output>`](/fr/docs/Web/HTML/Element/output).
- [Les autres contrôles de formulaire](/fr/docs/Learn/Forms/Other_form_controls)
  - : Ensuite, nous aborderons les contrôles de formulaire qui ne sont pas des éléments `<input>`, ainsi que les outils associés, comme&nbsp;: [`<select>`](/fr/docs/Web/HTML/Element/select), [`<textarea>`](/fr/docs/Web/HTML/Element/textarea), [`<meter>`](/fr/docs/Web/HTML/Element/meter), et [`<progress>`](/fr/docs/Web/HTML/Element/progress).

## Guides relatifs à la mise en forme des formulaires

- [Mise en forme des formulaires web](/fr/docs/Learn/Forms/Styling_web_forms)
  - : Cet article est une introduction à la mise en forme des formulaires à l'aide de CSS, couvrant l'ensemble des bases nécessaires à une mise en forme simple.
- [Mise en forme avancée des formulaires](/fr/docs/Learn/Forms/Advanced_form_styling)
  - : Ici, nous verrons certaines techniques plus avancées qui s'avèrent nécessaires lorsqu'on travaille avec certains éléments de formulaire plus difficiles à mettre en forme.
- [Les pseudo-classes relatives à l'interface utilisateur](/fr/docs/Learn/Forms/UI_pseudo-classes)
  - : Cet article introduit les pseudo-classes relatives à l'interface utilisateur et qui permettent de cibler des contrôles de formulaire HTML en fonction de leur état courant.

## Valider et soumettre les données d'un formulaire

- [Validation des données du formulaire côté client](/fr/docs/Learn/Forms/Form_validation)
  - : Envoyer les données est une chose, mais il ne faut pas oublier de vérifier que les données saisies dans les formulaires utilisent un format correct afin qu'elles puissent être traitées correctement et que cela ne casse pas nos applications. Nous voulons aussi aider les utilisatrices et utilisateurs à remplir correctement nos formulaires et leur éviter toute frustration lorsqu'ils utilisent nos applications. La validation des données du formulaire nous aide à parvenir à ces objectifs et cet article explique ce qu'il faut savoir à ce sujet.
- [Envoyer les données du formulaire](/fr/docs/Learn/Forms/Sending_and_retrieving_form_data)
  - : Dans cet article, nous détaillons ce qui se passe lorsqu'on envoie un formulaire&nbsp;: où vont les données, comment les traiter à leur arrivée, etc. Nous verrons également les problématiques de sécurité associées à l'envoi de données de formulaire.

## Articles avancés

Les articles suivants ne sont pas nécessaires à l'apprentissage initial, mais deviennent intéressants et utiles lorsque vous avez maîtrisé les techniques précédentes et que vous souhaitez approfondir.

- [Comment construire des contrôles de formulaire spécifiques](/fr/docs/Learn/Forms/How_to_build_custom_form_controls)
  - : Dans certains cas, les contrôles natifs des formulaires pourront ne pas répondre à votre besoin (que ce soit à cause de la mise en forme ou des fonctionnalités). Pour ces cas, vous aurez peut-être à construire votre propre contrôle à l'aide de HTML. Dans cet article, nous verrons comment faire et les considérations à avoir, tout en mettant en œuvre un cas pratique.
- [Envoyer des formulaires avec JavaScript](/fr/docs/Learn/Forms/Sending_forms_through_JavaScript)
  - : Dans cet article, nous verrons comment utiliser un formulaire pour créer une requête HTTP et l'envoyer avec du code JavaScript (plutôt que d'utiliser l'envoi standard natif). Nous verrons pourquoi cela peut être pertinent et les implications associées (voir aussi [Utiliser les objets `FormData`](/fr/docs/Web/API/FormData/Using_FormData_Objects)).
- [Tableau de compatibilité des propriétés CSS pour les contrôles de formulaire](/fr/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
  - : Ce dernier article fournit une référence pratique qui permet de connaître la compatibilité entre les propriétés CSS et les différents éléments de formulaire.

## Voir aussi

- [Référence des éléments HTML relatifs aux formulaires](/fr/docs/Web/HTML/Element#forms)
- [Référence des différents types d'élément `<input>`](/fr/docs/Web/HTML/Element/input)
- [Référence des attributs HTML](/fr/docs/Web/HTML/Attributes)
