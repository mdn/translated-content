---
title: "<data> : l'élément de données"
slug: Web/HTML/Element/data
---

{{HTMLSidebar}}

L'élément HTML **`<data>`** relie un contenu à une version de ce contenu interprétable par un ordinateur. Si le contenu possède une composante temporelle, l'élément [`<time>`](/fr/docs/Web/HTML/Element/time) doit être utilisé.

{{EmbedInteractiveExample("pages/tabbed/data.html", "tabbed-shorter")}}

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/fr/docs/Web/Guide/HTML/Content_categories"
          >Catégories de contenu</a
        >
      </th>
      <td>
        <a href="/fr/docs/Web/Guide/HTML/Content_categories#flow_content"
          >Contenu de flux</a
        >,
        <a href="/fr/docs/Web/Guide/HTML/Content_categories#phrasing_content"
          >contenu phrasé</a
        >,
        <a href="/fr/docs/Web/Guide/HTML/Content_categories#palpable_content"
          >contenu tangible</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Contenu autorisé</th>
      <td>
        <a href="/fr/docs/Web/Guide/HTML/Content_categories#phrasing_content"
          >Contenu phrasé</a
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
      <th scope="row">Éléments parents autorisés</th>
      <td>
        Tout élément acceptant du
        <a href="/fr/docs/Web/Guide/HTML/Content_categories#phrasing_content"
          >contenu phrasé</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Rôle ARIA implicite</th>
      <td>
        <a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role"
          >Pas de rôle correspondant</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Rôles ARIA autorisés</th>
      <td>Tous les rôles.</td>
    </tr>
    <tr>
      <th scope="row">Interface DOM</th>
      <td>
        <a href="/fr/docs/Web/API/HTMLDataElement"
          ><code>HTMLDataElement</code></a
        >
      </td>
    </tr>
  </tbody>
</table>

## Attributs

Comme pour tous les autres éléments, on peut utiliser [les attributs universels](/fr/docs/Web/HTML/Global_attributes) sur `<data>`.

- `value`
  - : Cet attribut définit la version du contenu qui doit être interprétée par une machine.

## Exemples

Dans l'exemple suivant, on affiche des noms de produits avec des codes correspondants :

```html
<p>Nouveaux produits</p>
<ul>
  <li><data value="3251546">Mini voiture</data></li>
  <li><data value="5867654">Grande voiture</data></li>
  <li><data value="9887635">Énorme voiture</data></li>
</ul>
```

### Résultat

{{EmbedLiveSample('',640,160)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément [`<time>`](/fr/docs/Web/HTML/Element/time).
