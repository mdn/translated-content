---
title: <map>
slug: Web/HTML/Element/map
tags:
  - Element
  - HTML
  - Reference
  - Web
translation_of: Web/HTML/Element/map
---
{{HTMLRef}}

L'élément HTML **`<map>`** est utilisé avec des éléments {{HTMLElement("area")}} afin de définir une image cliquable divisée en régions.

{{EmbedInteractiveExample("pages/tabbed/map.html", "tabbed-standard")}}

## Attributs

Comme tous les autres éléments HTML, cet élément inclut [les attributs universels](/fr/docs/Web/HTML/Attributs_universels).

- {{htmlattrdef("name")}}
  - : Cet attribut fournit un nom afin que la carte cliquable puisse être référencée. Cet attribut est obligatoire et sa valeur doit être une chaîne de caractères non-vide qui ne contient pas de blancs. La valeur de cet attribut doit être unique pour tous les éléments {{HTMLElement("map")}} du document. Si l'attribut universel `id` est utilisé, `name` devra avoir la même valeur que celui-ci.

## Exemples

### HTML

```html
<map name="primary">
  <area shape="circle" coords="75,75,75" href="left.html">
  <area shape="circle" coords="275,75,75" href="right.html">
</map>
<img usemap="#primary" src="https://via.placeholder.com/350x150" alt="350 x 150 pic">
```

### Résultat

{{EmbedLiveSample("Exemples","450","230")}}

### Résultat attendu

L'exemple précédent devrait faire apparaître des images semblables (en utilisant la touche <kbd>tab</kbd> de votre clavier) :

_Pour le lien `left.html` :_
![](screen_shot_2017-02-02_at_10.48.40_pm.png)

_Pour le lien `right.html`&nbsp;:_
![](screen_shot_2017-02-02_at_10.49.04_pm.png)

## Résumé technique

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/fr/docs/Web/HTML/Catégorie_de_contenu"
          >Catégories de contenu</a
        >
      </th>
      <td>
        <a href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_de_flux"
          >Contenu de flux</a
        >,
        <a href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_phrasé"
          >contenu phrasé</a
        >,
        <a href="/fr/docs/Web/HTML/Cat%C3%A9gorie_de_contenu#Contenu_tangible"
          >contenu tangible</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Contenu autorisé</th>
      <td>
        Tout élément dont
        <a
          href="/fr/docs/Web/HTML/Cat%C3%A9gorie_de_contenu#Mod%C3%A8le_de_contenu_transparent"
          >le modèle de contenu est transparent</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Omission de balises</th>
      <td>{{no_tag_omission}}</td>
    </tr>
    <tr>
      <th scope="row">Parents autorisés</th>
      <td>
        Tout élément qui accepte
        <a
          href="/fr/docs/Web/HTML/Cat%C3%A9gorie_de_contenu#Contenu_phras%C3%A9"
          >du contenu phrasé</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Rôles ARIA autorisés</th>
      <td>Aucun.</td>
    </tr>
    <tr>
      <th scope="row">Interface DOM</th>
      <td>{{domxref("HTMLMapElement")}}</td>
    </tr>
  </tbody>
</table>

## Spécifications

| Spécification                                                                                                    | État                             | Commentaires         |
| ---------------------------------------------------------------------------------------------------------------- | -------------------------------- | -------------------- |
| {{SpecName('HTML WHATWG', 'embedded-content.html#the-map-element', '&lt;map&gt;')}} | {{Spec2('HTML WHATWG')}} |                      |
| {{SpecName('HTML5 W3C', 'embedded-content-0.html#the-map-element', '&lt;map&gt;')}} | {{Spec2('HTML5 W3C')}}     |                      |
| {{SpecName('HTML4.01', 'struct/objects.html#h-13.6.1', '&lt;map&gt;')}}                 | {{Spec2('HTML4.01')}}     | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("html.elements.map")}}

## Voir aussi

- {{HTMLElement("a")}}
- {{HTMLElement("area")}}
