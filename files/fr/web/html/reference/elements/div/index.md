---
title: "<div> : l'élément de division du contenu"
slug: Web/HTML/Reference/Elements/div
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

L'élément [HTML](/fr/docs/Web/HTML) **`<div>`** est le conteneur générique du contenu de flux. Il n'a aucun effet sur le contenu ou la mise en page tant qu'il n'est pas mis en forme d'une manière quelconque à l'aide de {{Glossary("CSS")}} (par exemple, si la mise en forme lui est appliquée directement, ou si un modèle de mise en page tel que [Flexbox](/fr/docs/Web/CSS/Guides/Flexible_box_layout) est appliqué à son élément parent).

{{InteractiveExample("Démonstration HTML&nbsp;: &lt;div&gt;", "tabbed-standard")}}

```html interactive-example
<div class="warning">
  <img
    src="/shared-assets/images/examples/leopard.jpg"
    alt="Un léopard intimidant." />
  <p>Attention au léopard</p>
</div>
```

```css interactive-example
.warning {
  border: 10px ridge red;
  background-color: yellow;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
}

.warning img {
  width: 100%;
}

.warning p {
  font: small-caps bold 1.2rem sans-serif;
  text-align: center;
}
```

En tant que conteneur «&nbsp;pur&nbsp;», l'élément `<div>` ne représente rien en soi. Il est plutôt utilisé pour regrouper le contenu afin qu'il puisse être facilement stylé à l'aide des attributs [`class`](/fr/docs/Web/HTML/Reference/Global_attributes/class) ou [`id`](/fr/docs/Web/HTML/Reference/Global_attributes/id), pour marquer une section d'un document comme étant écrite dans une langue différente (à l'aide de l'attribut [`lang`](/fr/docs/Web/HTML/Reference/Global_attributes/lang)), etc.

## Attributs

Cet élément inclut les [attributs universels](/fr/docs/Web/HTML/Reference/Global_attributes).

> [!NOTE]
> L'attribut `align` est désormais obsolète et ne doit plus être appliqué pour un `<div>`. On privilégiera l'utilisation des propriétés et outils CSS (tels que [la grille CSS](/fr/docs/Web/CSS/Guides/Grid_layout) ou [les boîtes flexibles (flexbox)](/fr/docs/Learn_web_development/Core/CSS_layout/Flexbox)) pour aligner et positionner des éléments `<div>`.

## Notes d'utilisation

- L'élément `<div>` doit uniquement être utilisé lorsqu'il n'existe aucun autre élément dont la sémantique permet de représenter le contenu (par exemple {{HTMLElement("article")}} ou {{HTMLElement("nav")}}).

## Accessibilité

L'élément `<div>` possède [un rôle ARIA implicite `generic` <sup>(angl.)</sup>](https://w3c.github.io/aria/#generic) (plutôt qu'aucun rôle). Cela peut avoir un impact sur certaines combinaisons de déclarations ARIA qui nécessitent un élément descendant direct avec un rôle donné pour fonctionner correctement.

## Exemples

### Un exemple simple

```html
<div>
  <p>
    Tout type de contenu. Par exemple &lt;p&gt;, &lt;table&gt;. À vous de
    voir&nbsp;!
  </p>
</div>
```

#### Résultat

{{EmbedLiveSample("Un exemple simple", 650, 60)}}

### Un exemple mis en forme

Cet exemple crée une boîte avec une ombre en appliquant la mise en forme via du CSS sur l'élément `<div>`. On notera l'utilisation de l'attribut [`class`](/fr/docs/Web/HTML/Reference/Global_attributes/class) sur l'élément `<div>` afin d'appliquer la règle `"shadowbox"`.

#### HTML

```html
<div class="shadowbox">
  <p>
    Voici un paragraphe très intéressant inscrit dans une boîte avec une ombre.
  </p>
</div>
```

#### CSS

```css
.shadowbox {
  width: 15em;
  border: 1px solid #333;
  box-shadow: 8px 8px 5px #444;
  padding: 8px 12px;
  background-image: linear-gradient(180deg, #fff, #ddd 40%, #ccc);
}
```

#### Résultat

{{EmbedLiveSample("Un exemple mis en forme", 650, 120)}}

## Résumé technique

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/fr/docs/Web/HTML/Guides/Content_categories"
          >Catégories de contenu</a
        >
      </th>
      <td>
        <a href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_de_flux"
          >Contenu de flux</a
        >,
        <a href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_tangible"
          >contenu tangible</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Contenu autorisé</th>
      <td>
        <a href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_de_flux"
          >Contenu de flux</a
        >.<br />Ou (dans le {{Glossary("WHATWG")}} HTML)&nbsp;: Si l'élément parent est un élément {{HTMLElement("dl")}}&nbsp;: un ou plusieurs
        éléments {{HTMLElement("dt")}} suivis d'un ou plusieurs
        éléments {{HTMLElement("dd")}}, éventuellement mêlés à des
        éléments {{HTMLElement("script")}} et
        éléments {{HTMLElement("template")}}.
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
      <td>
        Tout élément qui accepte un
        <a href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_de_flux"
          >contenu de flux</a
        >.<br />Ou (dans le {{Glossary("WHATWG")}} HTML)&nbsp;: un élément {{HTMLElement("dl")}}.
      </td>
    </tr>
    <tr>
      <th scope="row">Rôle ARIA implicite</th>
      <td>
        <code
          ><a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/generic_role"
            >generic</a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Rôles ARIA autorisés</th>
      <td>Tous les rôles sont autorisés.</td>
    </tr>
    <tr>
      <th scope="row">Interface DOM</th>
      <td>{{DOMxRef("HTMLDivElement")}}</td>
    </tr>
  </tbody>
</table>

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les éléments de sectionnement sémantique&nbsp;: {{HTMLElement("section")}}, {{HTMLElement("article")}}, {{HTMLElement("nav")}}, {{HTMLElement("header")}}, {{HTMLElement("footer")}}
- L'élément {{HTMLElement("span")}} pour la mise en forme du contenu du phrasé
