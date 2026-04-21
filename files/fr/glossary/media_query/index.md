---
title: Requête média (Media query)
slug: Glossary/Media_query
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Une **requête média** est une expression logique qui permet à CSS, JavaScript, HTML et d'autres langages web de vérifier certains aspects de l'agent utilisateur·ice ou du dispositif sur lequel le document est affiché, indépendamment du contenu du document, afin de déterminer si le bloc de code ou la fonctionnalité associée doit être appliqué.

Les requêtes média servent à appliquer conditionnellement des styles CSS avec les règles @ de CSS {{CSSxRef("@media")}} et {{CSSxRef("@import")}}, et en JavaScript pour tester et surveiller les états des médias, par exemple avec la méthode {{DOMxRef("Window.matchMedia", "matchMedia()")}}, la propriété {{DOMxRef("MediaQueryList.matches", "matches")}} et l'évènement {{DOMxRef("MediaQueryList.change_event", "change")}}. Les requêtes média sont utilisées comme valeurs des attributs `media` des éléments [HTML](/fr/docs/Web/HTML) [`<link>`](/fr/docs/Web/HTML/Reference/Elements/link#media), [`<source>`](/fr/docs/Web/HTML/Reference/Elements/source#media) et [`<style>`](/fr/docs/Web/HTML/Reference/Elements/style#media), appliquant conditionnellement le lien, la source ou le style si la requête média est vraie. Si l'attribut `media` est omis, il a pour valeur par défaut `true`. Les requêtes média sont aussi utilisées comme valeur de l'attribut [`sizes`](/fr/docs/Web/API/HTMLImageElement/sizes) de l'élément {{HTMLElement("img")}}.

Les requêtes média sont composées de modificateurs optionnels, de types de média et de zéro ou plusieurs conditions média, ainsi que d'opérateurs logiques.

Les requêtes média sont réévaluées en réponse aux changements de l'environnement utilisateur, par exemple lorsqu'un·e utilisateur·ice agrandit la fenêtre du navigateur ou fait pivoter un appareil mobile, passant de l'orientation portrait à paysage.

Plusieurs requêtes média séparées par des virgules créent une **liste de requêtes média**. Une liste de requêtes média est vraie si l'une de ses requêtes composantes est vraie, et fausse seulement si toutes ses requêtes composantes sont fausses.

Une requête média peut éventuellement être précédée d'un seul modificateur ou de `not` ou `only`, dans le cas de `not`, cela inverse le sens de la requête média qui suit.

## Voir aussi

- [Utiliser les requêtes média](/fr/docs/Web/CSS/Guides/Media_queries/Using)
- [Le module CSS des requêtes média](/fr/docs/Web/CSS/Guides/Media_queries/Using)
