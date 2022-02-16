---
title: Document.registerElement()
slug: Web/API/Document/registerElement
tags:
  - API
  - Composants Web
  - DOM
  - Expérimental(2)
  - Méthode
  - Référence(2)
translation_of: Web/API/Document/registerElement
---
{{APIRef("DOM")}} {{Deprecated_header}}

> **Attention :** document.registerElement() est déprécié en faveur de [customElements.define()](/fr/docs/Web/API/CustomElementRegistry/define).

{{draft}}

La méthode **`Document.registerElement()`** permet d'enregistrer un nouvel [élément personnalisé](/fr/docs/Web/Web_Components/Custom_Elements) dans le navigateur, et retourne un constructeur pour ce nouvel élément.

> **Note :** Il s'agit d'une technologie expérimentale. Le navigateur dans lequel vous l'utilisez doit être compatible avec les Composants Web. Voir [Activer les Composants Web dans Firefox](/fr/docs/Web/Web_Components#Activer_les_Web_Components_dans_Firefox).

## Syntaxe

    var constructeur = document.registerElement(nom-tag, options);

### Paramètres

- _nom-tag_
  - : Le nom de l'élément personnalisé. Le nom doit contenir un tiret (-), par exemple `mon-tag`.
- _options {{optional_inline}}_
  - : Un objet définissant le prototype sur lequel se base l'élément personnalisé, ainsi qu'un tag existant à étendre.

## Exemple

Voici un exemple très simple :

```js
var Montag = document.registerElement('mon-tag');
```

Le nouveau tag est désormais enregistré dans le navigateur. La variable `Montag` contient un constructeur que vous pouvez utiliser pour créer des éléments `mon-tag` dans le document de la façon suivante :

```js
document.body.appendChild(new Montag());
```

Ceci insert un élément `mon-tag` vide qui sera visible si vous utilisez les outils de développement du navigateur. Il ne sera pas visible si vous utilisez la fonction de visualisation de la source du navigateur. Et il ne sera pas visible dans le navigateur tant que vous n'aurez pas ajouter du contenu au tag. Ce qui suit est un exemple d'ajout de contenu au nouveau tag :

```js
var montag = document.getElementsByTagName("mon-tag")[0];
montag.textContent = "Je suis un élément mon-tag.";
```

## Compatibilité avec les navigateurs

{{Compat("api.Document.registerElement")}}

## Voir aussi

- [Éléments personnalisés](/fr/docs/Web/Web_Components/Custom_Elements)
