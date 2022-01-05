---
title: Utiliser le rôle article
slug: Web/Accessibility/ARIA/ARIA_Techniques/Using_the_article_role
tags:
  - ARIA
  - Accessibilité
  - Rôle
  - À relire
translation_of: Web/Accessibility/ARIA/ARIA_Techniques/Using_the_article_role
original_slug: Accessibilité/ARIA/Techniques_ARIA/Utiliser_le_rôle_article
---
### Description

Cette technique présente l’utilisation du rôle [`article` (en)](http://www.w3.org/TR/wai-aria/roles#article) et décrit les effets produits sur les navigateurs et les technologies d’assistance.

Le rôle `article` est utilisé pour identifier une section de page qui forme une partie indépendante d'un document, d'une page ou d'un site. Les exemples d'article peuvent être des billets de blogs ou des articles d'un magazine ou d'un journal ou encore les commentaires soumis par les utilisateurs. Ils sont _indépendants_ dans le sens où leur contenu pourrait être autonome, par exemple pour un flux de syndication.

Les articles peuvent être imbriqués. Par exemple, une entrée de blog sur un site acceptant les commentaires des visiteurs pourrait représenter ces commentaires comme des articles incluent dans l'article de l'entrée de blog.

Le rôle ARIA `article` est similaire à l'élément {{ HTMLVersionInline("5") }} {{ HTMLElement("article") }}. Cependant l'élément {{ HTMLElement("article") }} devrait toujours recevoir le rôle ARIA `article` car toutes les technologies d'assistance ne prennent pas encore en charge HTML5.

### Effets possibles sur les agents utilisateurs et les technologies d’assistance

Lorsque l'utilisateur navigue dans un élément ayant le rôle `article`, les technologies d'assistance qui interceptent généralement les événements clavier standards **doivent** basculer en mode de navigation du document, plutôt que de passer les événements clavier à l'application web.

Les technologies d'assistance **doivent** fournit une fonctionnalité permettant à l'utilisateur de naviguer dans la hiérarchie de chacun des éléments `article` imbriqués.

> **Note :** il existe plusieurs points de vue sur la façon dont les technologies d’assistance devraient traiter cette technique. L’information fournie ci-dessus est l’une de ces opinions et n’est pas normative.

### Exemples

#### Utilisation du role article sans élément article :

```html
<div role="article">

  <h1>Une titre de billet de blog</h1>
  <p>contenu du billet...</p>

  <div class="comments">
    <div role="article">
      <p>Un premier commentaire</p>
    </div>
    <div role="article">
      <p>Un deuxième commentaire</p>
    </div>
  </div>

</div>
```

### Autres ressources

[Spécification WAI-ARIA du rôle `article` (en)](http://www.w3.org/TR/wai-aria/roles#article)
