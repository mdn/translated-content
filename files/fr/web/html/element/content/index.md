---
title: '<content> : l''élément Shadow DOM d''emplacement du contenu'
slug: Web/HTML/Element/content
tags:
  - Content
  - DOM
  - Deprecated
  - Element
  - HTML
  - HTML Web Components
  - Placeholder
  - Reference
  - Web
  - Web Components
  - shadow dom
translation_of: Web/HTML/Element/content
browser-compat: html.elements.content
---
{{HTMLRef}}

> **Attention :** Cette fonctionnalité a été supprimée des standards du Web. Bien que quelques navigateurs puissent encore la supporter, elle est en cours d'éradication. Ne l'utilisez ni dans d'anciens projets, ni dans de nouveaux. Les pages et applications Web l'utilisant peuvent cesser de fonctionner à tout moment.

L'élément HTML **`<content>`** — une partie obsolète de la suite de technologies [Web Components](/fr/docs/Web/Web_Components) — était utilisé à l'intérieur de [Shadow DOM](/fr/docs/Web/Web_Components/Using_shadow_DOM) comme un point d'insertion, et n'était pas destiné à être utilisé dans du HTML ordinaire. Il a maintenant été remplacé par l'élément [`<slot>`](/fr/docs/Web/HTML/Element/slot), qui crée un point dans le DOM où un Shadow DOM peut être inséré.

> **Note :** Bien que présent dans les premières versions des spécifications et mis en œuvre dans plusieurs navigateurs, cet élément a été supprimé dans les versions ultérieures de la spécification, et ne doit pas être utilisé. Il est documenté ici pour aider à adapter le code écrit à l'époque où il était inclus dans la spécification afin qu'il fonctionne avec les versions plus récentes de la spécification.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/fr/docs/Web/Guide/HTML/Content_categories"
          >Catégories de contenu</a
        >
      </th>
      <td>
        <a
          href="/fr/docs/Web/Guide/HTML/Content_categories#transparent_content_model"
          >Contenu transparent</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Contenu autorisé</th>
      <td>
        <a href="/fr/docs/Web/Guide/HTML/Content_categories#flow_content"
          >Contenu de flux</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Omission de balises</th>
      <td>
        Aucune, la balise d'ouverture et la balise de fermeture sont
        obligatoires.
      </td>
    </tr>
    <tr>
      <th scope="row">Parents autorisés</th>
      <td>Tout élément qui accepte du contenu de flux.</td>
    </tr>
    <tr>
      <th scope="row">Interface DOM</th>
      <td>
        <a href="/fr/docs/Web/API/HTMLContentElement"
          ><code>HTMLContentElement</code></a
        >
      </td>
    </tr>
  </tbody>
</table>

## Attributs

Comme pour tous les éléments, on peut utiliser [les attributs universels](/fr/docs/Web/HTML/Global_attributes) sur `<content>`.

- `select`
  - : Une liste de sélecteurs séparés par des virgules. La syntaxe utilisée est la même que celle utilisée pour les sélecteurs CSS. Ils permettent de sélectionner le contenu à insérer à la place de l'élément `<content>`.

## Exemple

Voici un exemple simple d'utilisation de l'élément `<content>`. Il s'agit d'un fichier HTML It is an HTML file with everything needed in it.

> **Note :** Pour que ce code fonctionne, le navigateur utilisé doit prendre en charge les composants web (voir par exemple [l'activation des composants web dans Firefox](/fr/docs/Web/Web_Components#enabling_web_components_in_firefox)).

```html
<html>
  <head></head>
  <body>
  <!-- Le contenu original auquel on accède via <content> -->
  <div>
    <h4>L'en-tête de mon contenu</h4>
    <p>Le texte de mon contenu</p>
  </div>

  <script>
  // On récupère le <div> ci-avant.
  var myContent = document.querySelector('div');
  // On crée un shadow DOM sur le <div>
  var shadowroot = myContent.createShadowRoot();
  // On ajoute un nouvel en-tête dans le shadow DOM
  // et on conserve le paragraphe original.
  shadowroot.innerHTML =
   '<h2>Titre inséré</h2> <content select="p"></content>';
  </script>

  </body>
</html>
```

Si vous l'affichez dans un navigateur web, il devrait ressembler à ce qui suit.

![Contenu de l'exemple](content-example.png)

## Spécifications

Ce document ne fait plus partie d'aucune spécification.

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Web Components](/fr/docs/Web/Web_Components)
- Les éléments [`<shadow>`](/fr/docs/Web/HTML/Element/Shadow), [`<slot>`](/fr/docs/Web/HTML/Element/slot), [`<template>`](/fr/docs/Web/HTML/Element/template)
