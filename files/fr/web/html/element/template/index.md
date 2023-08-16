---
title: <template>
slug: Web/HTML/Element/template
---

{{HTMLSidebar}}

L'élément HTML **`<template>`** (ou **_Template Content_** ou modèle de contenu) est un mécanisme utilisé pour stocker du contenu HTML (côté client) qui ne doit pas être affiché lors du chargement de la page mais qui peut être instancié et affiché par la suite grâce à un script JavaScript.

Cet élément est un fragment de contenu mis de côté pour être utilisé par la suite dans le document. Lorsque le moteur traite le contenu de l'élément `<template>` lors du chargement de la page, il ne fait que vérifier la validité du contenu, ce dernier n'est pas affiché.

## Attributs

Cet élément inclut uniquement [les attributs universels](/fr/docs/Web/HTML/Attributs_universels).

## Exemples

### HTML

```html
<table id="producttable">
  <thead>
    <tr>
      <td>UPC_Code</td>
      <td>Product_Name</td>
    </tr>
  </thead>
  <tbody>
    <!-- existing data could optionally be included here -->
  </tbody>
</table>

<template id="productrow">
  <tr>
    <td class="record"></td>
    <td></td>
  </tr>
</template>
```

Au début, on a un tableau HTML pour lequel on insèrera du contenu plus tard grâce à l'aide d'un script JavaScript. Ensuite, on a le _template_ qui décrit la structure du fragment HTML représentant une ligne de tableau.

### JavaScript

Avec le tableau créé et le template défini, on utilise JavaScript pour insérer des lignes dans le tableau dont chacune est construite à partir du _template_.

```js
// On vérifie si le navigateur prend en charge
// l'élément HTML template en vérifiant la présence
// de l'attribut content pour l'élément template.
if ("content" in document.createElement("template")) {
  // On prépare une ligne pour le tableau
  var template = document.querySelector("#productrow");

  // On clone la ligne et on l'insère dans le tableau
  var tbody = document.querySelector("tbody");
  var clone = document.importNode(template.content, true);
  var td = clone.querySelectorAll("td");
  td[0].textContent = "1235646565";
  td[1].textContent = "Stuff";

  tbody.appendChild(clone);

  // On fait de même pour une autre ligne
  var clone2 = document.importNode(template.content, true);
  td = clone2.querySelectorAll("td");
  td[0].textContent = "0384928528";
  td[1].textContent = "Acme Kidney Beans";

  // Puis on insère
  tbody.appendChild(clone2);
} else {
  // Une autre méthode pour ajouter les lignes
  // car l'élément HTML n'est pas pris en charge.
}
```

### Résultat

Le résultat correspond au tableau HTML original avec deux lignes supplémentaires qui ont été ajoutées grâce au code JavaScript :

```css hidden
table {
  background: #000;
}
table td {
  background: #fff;
}
```

{{EmbedLiveSample("Exemples", 500, 120)}}

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
        <a
          href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_de_méta-données"
          >Contenu de méta-données</a
        >,
        <a href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_de_flux"
          >contenu de flux</a
        >,
        <a href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_phras.C3.A9"
          >contenu phrasé</a
        >,
        <a
          href="/fr/docs/Web/Guide/HTML/Catégories_de_contenu#Éléments_supports_de_script"
          >élément destiné aux scripts</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Contenu autorisé</th>
      <td>Pas de restriction.</td>
    </tr>
    <tr>
      <th scope="row">Omission de balises</th>
      <td>{{no_tag_omission}}</td>
    </tr>
    <tr>
      <th scope="row">Parents autorisés</th>
      <td>
        Tout élément qui accepte du
        <a
          href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_de_méta-données"
          >Contenu de méta-données</a
        >, du
        <a href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_phras.C3.A9"
          >contenu phrasé</a
        >, ou
        <a
          href="/fr/docs/Web/Guide/HTML/Catégories_de_contenu#Éléments_supports_de_script"
          >des éléments destinés aux scripts</a
        >. L'élément {{HTMLElement("colgroup")}} est également autorisé
        s'il n'a pas l'attribut
        <a href="/fr/docs/Web/HTML/Element/colgroup#span"><code>span</code></a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Rôles ARIA autorisés</th>
      <td>Aucun.</td>
    </tr>
    <tr>
      <th scope="row">Interface DOM</th>
      <td>{{domxref("HTMLTemplateElement")}}</td>
    </tr>
  </tbody>
</table>

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{HTMLElement("slot")}}
- [Utiliser les gabarits et les emplacements (_templates and slots_)](/fr/docs/Web/Web_Components/Using_templates_and_slots)
- {{HTMLElement("shadow")}} {{deprecated_inline}}
