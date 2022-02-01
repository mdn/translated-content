---
title: '<shadow> : l''élément obsolète pour la racine virtuelle'
slug: Web/HTML/Element/Shadow
tags:
  - Composant web
  - Déprécié
  - Element
  - HTML
  - Reference
  - Web
translation_of: Web/HTML/Element/shadow
---
{{deprecated_header}}{{HTMLRef}}

L'élément HTML **`<shadow>`** était utilisé comme un point d'insertion ({{glossary("insertion point")}}) du _shadow DOM_. Cet élément a été retiré de la spécification et est [désormais obsolète](https://github.com/w3c/webcomponents/commit/041ba5518b9372768234d2766de503b98a03fa45).

## Attributs

Cet élément inclut uniquement [les attributs universels](/fr/docs/Web/HTML/Attributs_universels).

## Exemples

Voici un exemple simple de l'utilisation de l'élément `<shadow>`. Il s'agit d'un fichier HTML pourvu de tout ce qui est nécessaire.

> **Note :** il s'agit d'une technologie expérimentale. Pour faire fonctionner ce code, le navigateur où vous l'affichez doit supporter les composants web (_web components_). Pour plus d'informations, voir [Activer les composants web sous Firefox](/fr/docs/Web/Web_Components#Activer_les_Web_Components_dans_Firefox).

### HTML

```html
<html>
  <head></head>
  <body>

  <!-- Ce <div> accueillera les shadow roots. -->
  <div>
    <!-- Ce titre ne sera pas affiché -->
    <h4>My Original Heading</h4>
  </div>

  <script>
    // Récupère le contenu du <div> ci-dessus
    var origContent = document.querySelector('div');
    // Crée le premier shadow root
    var shadowroot1 = origContent.createShadowRoot();
    // Crée le second shadow root
    var shadowroot2 = origContent.createShadowRoot();

    // Insère un contenu dans le plus vieux shadow root
    shadowroot1.innerHTML =
      '<p>Older shadow root inserted by &lt;shadow&gt;</p>';
    // Insère dans le plus jeune shadow root, y compris <shadow>.
    // La balise précédente ne sera pas affichée à moins que
    // l'élément <shadow> ne soit utilisé ci-dessous.
    shadowroot2.innerHTML =
      '<shadow></shadow> <p>Younger shadow root, displayed because it is the youngest.</p>';
  </script>

  </body>
</html>
```

### Résultat statique

![Exemple pour shadow](shadow-example.png)

## Résumé technique

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <dfn
          ><a href="/fr/docs/Web/HTML/Cat%C3%A9gorie_de_contenu"
            >Catégories de contenu</a
          ></dfn
        >
      </th>
      <td>
        <a href="/fr/docs/Web/HTML/Content_categories#Transparent_content_model"
          >Contenu transparent</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row"><dfn>Contenu autorisé</dfn></th>
      <td>
        <a href="/fr/docs/Web/HTML/Cat%C3%A9gorie_de_contenu#Contenu_de_flux"
          >Contenu de flux</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row"><dfn>Omission de balises</dfn></th>
      <td>{{no_tag_omission}}</td>
    </tr>
    <tr>
      <th scope="row"><dfn>Parents autorisés</dfn></th>
      <td>Tout élément qui accepte un contenu de flux.</td>
    </tr>
    <tr>
      <th scope="row">Rôles ARIA autorisés</th>
      <td>Aucun.</td>
    </tr>
    <tr>
      <th scope="row"><dfn>Interface DOM</dfn></th>
      <td>{{domxref("HTMLShadowElement")}}</td>
    </tr>
  </tbody>
</table>

## Spécifications

Cet élément ne fait plus partie d'aucune spécification.

## Compatibilité des navigateurs

{{Compat("html.elements.shadow")}}

## Voir aussi

- [Les composants web](/fr/docs/Web/Web_Components)
- {{HTMLElement("content")}}
- {{HTMLElement("template")}}
- {{HTMLElement("slot")}}
- {{HTMLElement("element")}}
