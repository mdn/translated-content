---
title: Media queries
slug: Web/CSS/CSS_media_queries
---

{{CSSRef}}

Les requêtes média, plus souvent appelées **_media queries,_** sont un outil de _responsive design_ qui permet d'adapter la feuille de style CSS en fonction de différents paramètres ou caractéristiques de l'appareil. Par exemple, on pourra appliquer différents styles si l'écran de l'appareil utilisé pour consulter le document est plus petit qu'une taille donnée ou si l'utilisateur tient son appareil en mode portrait ou paysage. La règle @ (ou _at-rule_) {{cssxref("@media")}} est utilisée afin d'appliquer les styles de façon conditionnelle.

De plus, la syntaxe des requêtes média est également employée dans d'autres contextes, notamment l'attribut [`media`](/fr/docs/Web/HTML/Element/source#media) de l'élément {{HTMLElement("source")}} qui permet de définir une chaîne de caractères contenant une requête média afin de choisir le fichier source utilisé pour une image grâce à l'élément HTML {{HTMLElement("picture")}}.

De plus, la méthode du DOM {{domxref("Window.matchMedia()")}} peut être utilisée afin de tester le résultat d'une requête média pour la fenêtre courante. On peut également utiliser la méthode {{domxref("MediaQueryList.addListener()")}} afin de recevoir une notification lorsque l'état de la requête évolue. Grâce à cette fonctionnalité, un site ou une application peut réagir aux changements de configuration, d'orientation ou d'état.

Vous pouvez en découvrir plus dans l'article [Tester des requêtes media](/fr/docs/Web/CSS/Requêtes_média/Tester_les_media_queries).

## Référence

### Règles @

- {{cssxref("@import")}}
- {{cssxref("@media")}}

## Guides

- [Manipuler les requêtes média](/fr/docs/Web/CSS/Media_queries)
  - : Cet article présente les requêtes média, ce qu'elles font, et explique les différentes expressions qu'il est possible d'utiliser.
- [Tester les requêtes média](/fr/docs/Web/CSS/Media_Queries/Testing_media_queries)
  - : Cet article explique comment tester une requête média grâce à un programme JavaScript. On pourra par exemple déterminer l'état de l'appareil, mettre en place des gestionnaires d'évènements afin d'être notifié lorsque les résultats d'une requête média évoluent (par exemple lorsqu'un utilisateur tourne son appareil).
- [Utiliser des requêtes média pour l'accessibilité](/fr/docs/Web/CSS/Media_Queries/Using_Media_Queries_for_Accessibility)
  - : Cet article explique comment les requêtes média peuvent être utilisées afin de rendre un site plus accessible.

## Spécifications

{{Specifications}}

## Voir aussi

- La règle-@ {{cssxref("@supports")}} afin d'appliquer une mise en forme selon que l'agent utilisateur prend ou non en charge certaines technologies CSS.
