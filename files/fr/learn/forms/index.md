---
title: Formulaires HTML
slug: Learn/Forms
tags:
  - Apprentissage
  - Featured
  - Formulaires
  - Guide
  - HTML
  - Web
translation_of: Learn/Forms
original_slug: Web/Guide/HTML/Formulaires
---
{{learnSidebar}}

Ce guide est constitué d'une série d'articles qui vous aideront à maîtriser les formulaires HTML. Les formulaires HTML sont des outils très puissants pour interagir avec l'utilisateur ; toutefois, à cause de raisons historiques et techniques, il n'est pas forcément évident de savoir comment les utiliser de manière optimale. Nous allons aborder tous les aspects des formulaires HTML, de la structure à la décoration, de la gestion des données aux widgets sur-mesure.

## Prérequis

Avant de vous lancer dans  ce module, vous devez au moins avoir travaillé notre [Introduction au HTML](/fr/docs/Apprendre/HTML/Introduction_à_HTML). À partir de là, vous devriez trouver les {{anch("Éléments de base")}} faciles à comprendre et également être capable de vous servir du guide pour  les [widgets natifs pour formulaire](/fr/docs/Web/Guide/HTML/Formulaires/Les_blocs_de_formulaires_natifs).

Le reste du module est toutefois un peu plus difficile — il est facile de placer des widgets de formulaire dans une page, mais vous ne pourrez pas en faire vraiment quelque chose sans utiliser quelques fonctionnalités plus avancées, les CSS et le JavaScript. C'est pourquoi, avant de regarder ces autres parties, nous vous recommandons de faire un détour et de procéder d'abord à l'étude des [CSS](/fr/Apprendre/CSS/Introduction_à_CSS) et du [JavaScript](/fr/docs/Apprendre/JavaScript).

> **Note :** Si vous travaillez sur un ordinateur/tablette/autre appareil sur lequel vous n'avez pas la possiblité de créer vos propres fichiers, vous pourrez essayer (la plupart) des exemples de code sur un programme de codage en ligne comme [JSBin](http://jsbin.com/) ou [Thimble](https://thimble.mozilla.org/).

## Éléments de base

- [Mon premier formulaire HTML](/fr/docs/Web/Guide/HTML/Formulaires/Mon_premier_formulaire_HTML)
  - : Le premier article de notre série vous donne une toute première expérience de création de formulaire en HTML, y compris sa conception, sa mise en œuvre en utilisant les bons éléments HTML, l'ajout de quelques très simples décorations avec les CSS et le comment de l'envoi des données à un serveur.
- [Comment structurer un formulaire HTML](/fr/docs/Web/Guide/HTML/Formulaires/Comment_structurer_un_formulaire_HTML "/fr/docs/HTML/Formulaires/Comment_structurer_un_formulaire_HTML")
  - : Les bases vues, nous examinons maintenant plus en détail les éléments utilisés pour structurer et donner un sens aux différentes parties d'un formulaire.

## Quels sont les widgets pour formulaire disponibles ?

- [Les widgets natifs pour formulaire](/fr/docs/Web/Guide/HTML/Formulaires/Les_blocs_de_formulaires_natifs)
  - : Nous examinons maintenant en détail les fonctionnalités des widgets pour formulaire, en regardant quelles sont les options disponibles pour collecter différentes types de données.

## Validation et soumission des données de formulaires

- [Envoi des données de formulaire](/fr/docs/Web/Guide/HTML/Formulaires/Envoyer_et_extraire_les_donn%C3%A9es_des_formulaires)
  - : Cet article examine ce qui arrive quand un utilisateur soumet un formulaire — où les données vont-elles et comment les gère-t-on une fois à destination ? Nous examinerons aussi quelques problèmes de sécurité associés à l'envoi des données d'un formulaire.
- [Validation des données de formulaire](/fr/docs/Web/Guide/HTML/Formulaires/Envoyer_et_extraire_les_données_des_formulaires)
  - : Ce n'est pas tout d'envoyer des données — il faut aussi s'assurer que les données mises dans un formulaire par un utilisateur sont de format correct pour pouvoir les traiter correctement et qu'elles ne vont pas casser nos applications. Nous voulons également aider les utilisateurs à compléter les formulaires correctement et à ne pas ressentir de frustration en essayant d'utiliser nos applications. La validation et la soumission des données des formulaires vous aidera à remplir ces objectifs — cet article indique ce qui est nécessaire de savoir.

## Guides avancés

- [Comment construire des widgets de formulaires personnalisés](/fr/docs/Web/Guide/HTML/Formulaires/Comment_construire_des_widgets_de_formulaires_personnalisés)
  - : Nous allons voir quelques cas où les widgets natifs ne donnent pas ce dont vous avez besoin, pour des raisons fonctionnelles ou de style par exemple. Dans de tels cas, vous pouvez avoir besoin de construire vous même un widget de formulaire en dehors du HTML brut. Cet article explique comment faire, ainsi que les considérations à prendre en compte ce faisant, le tout à l'aide de l'étude d'un cas particulier.
- [Envoi de formulaires à l'aide du JavaScript](/fr/docs/Web/Guide/HTML/Formulaires/Sending_forms_through_JavaScript)
  - : Cet article examine les manières d'utiliser un formulaire pour assembler une requête HTTP et l'adresser par l'intermédiaire d'un JavaScript personnalisé, au lieu d'une soumission standard de formulaire. Il examine aussi pourquoi vous pouvez souhaiter faire ainsi et ce que cela implique corrélativement. (Voir aussi « Utilisation des objets FormData ».)
- [Formulaires HTML dans les navigateurs anciens](/fr/docs/Web/Guide/HTML/Formulaires/HTML_forms_in_legacy_browsers)
  - : Cet article couvre les détections de fonctionnalité, etc. Elles doivent être redirigées dans le module de tests croisés entre navigateurs, car la même problématique y sera mieux traitée.

## Guides de mise en forme des formulaires

- [Mise en forme des formulaires HTML](/fr/docs/Web/Guide/HTML/Formulaires/Apparence_des_formulaires_HTML)
  - : Cet article est une introduction à la mise en forme des formulaires à l'aide des CSS, y compris tous les éléments de base qu'il est nécessaire de connaître pour les tâches de décoration élémentaires.
- [Mise en forme avancée des formulaires HTML](/fr/docs/Web/Guide/HTML/Formulaires/Advanced_styling_for_HTML_forms)
  - : Dans cet article, nous regarderons des techniques de mise en forme plus avancées qu'il est nécessaire d'utiliser pour opérer sur les éléments les plus difficiles à traiter.
- [Tableau de compatibilité des propriétés entre widgets de formulaire](/fr/docs/Web/Guide/HTML/Formulaires/Property_compatibility_table_for_form_widgets)
  - : Ce dernier article fournit un référentiel pratique vous permettant de rechercher quelles propriétés des CSS sont compatibles avec tel ou tel élément de formulaire.

## Voir aussi

- [Référentiel pour éléments de formulaire HTML](/fr/docs/Web/HTML/Element#Forms)
- [Référentiel pour les types \<input> en HTML](/fr/docs/Web/HTML/Element/input)
