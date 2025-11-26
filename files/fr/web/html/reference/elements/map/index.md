---
title: <map>
slug: Web/HTML/Reference/Elements/map
original_slug: Web/HTML/Element/map
---

{{HTMLSidebar}}

L'élément HTML **`<map>`** est utilisé avec des éléments {{HTMLElement("area")}} afin de définir une image cliquable divisée en régions.

{{InteractiveExample("HTML Demo: &lt;map&gt;", "tabbed-standard")}}

```html interactive-example
<map name="infographic">
  <area
    shape="poly"
    coords="130,147,200,107,254,219,130,228"
    href="https://developer.mozilla.org/docs/Web/HTML"
    alt="HTML" />
  <area
    shape="poly"
    coords="130,147,130,228,6,219,59,107"
    href="https://developer.mozilla.org/docs/Web/CSS"
    alt="CSS" />
  <area
    shape="poly"
    coords="130,147,200,107,130,4,59,107"
    href="https://developer.mozilla.org/docs/Web/JavaScript"
    alt="JavaScript" />
</map>
<img
  usemap="#infographic"
  src="/shared-assets/images/examples/mdn-info2.png"
  alt="MDN infographic" />
```

```css interactive-example
img {
  display: block;
  margin: 0 auto;
  width: 260px;
  height: 232px;
}
```

## Attributs

Comme tous les autres éléments HTML, cet élément inclut [les attributs universels](/fr/docs/Web/HTML/Reference/Global_attributes).

- `name`
  - : Cet attribut fournit un nom afin que la carte cliquable puisse être référencée. Cet attribut est obligatoire et sa valeur doit être une chaîne de caractères non-vide qui ne contient pas de blancs. La valeur de cet attribut doit être unique pour tous les éléments {{HTMLElement("map")}} du document. Si l'attribut universel `id` est utilisé, `name` devra avoir la même valeur que celui-ci.

## Exemples

### HTML

```html
<map name="primary">
  <area shape="circle" coords="75,75,75" href="left.html" />
  <area shape="circle" coords="275,75,75" href="right.html" />
</map>
<img
  usemap="#primary"
  src="https://via.placeholder.com/350x150"
  alt="350 x 150 pic" />
```

### Résultat

{{EmbedLiveSample("Exemples","450","230")}}

### Résultat attendu

L'exemple précédent devrait faire apparaître des images semblables (en utilisant la touche <kbd>tab</kbd> de votre clavier)&nbsp;:

_Pour le lien `left.html`&nbsp;:_
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
        <a href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_tangible"
          >contenu tangible</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Contenu autorisé</th>
      <td>
        Tout élément dont
        <a
          href="/fr/docs/Web/HTML/Catégorie_de_contenu#Modèle_de_contenu_transparent"
          >le modèle de contenu est transparent</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Omission de balises</th>
      <td>Aucune, la balise d'ouverture et la balise de fermeture sont obligatoires.</td>
    </tr>
    <tr>
      <th scope="row">Parents autorisés</th>
      <td>
        Tout élément qui accepte
        <a
          href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_phrasé"
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

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{HTMLElement("a")}}
- {{HTMLElement("area")}}
