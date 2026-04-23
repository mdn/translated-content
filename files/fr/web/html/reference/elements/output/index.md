---
title: "<output> : l'élément de sortie"
slug: Web/HTML/Reference/Elements/output
l10n:
  sourceCommit: f29e825161ee6776a395cd846f8570686f784341
---

L'élément [HTML](/fr/docs/Web/HTML) **`<output>`** est un élément conteneur dans lequel un site ou une application peut injecter les résultats d'un calcul ou le résultat d'une action utilisateur.

## Attributs

Cet élément inclut les [attributs universels](/fr/docs/Web/HTML/Reference/Global_attributes).

- [`for`](/fr/docs/Web/HTML/Reference/Attributes/for)
  - : Une liste d'[`id`](/fr/docs/Web/HTML/Reference/Global_attributes/id) d'autres éléments, séparés par des espaces, qui ont joué un rôle dans le calcul (en tant que valeurs d'entrée ou autrement).
- [`form`](/fr/docs/Web/HTML/Reference/Attributes/form)
  - : L'élément {{HTMLElement("form")}} auquel associer la sortie (son propriétaire de formulaire). La valeur de cet attribut doit être l'[`id`](/fr/docs/Web/HTML/Reference/Global_attributes/id) d'un `<form>` dans le même document. (Si cet attribut n'est pas défini, l'élément `<output>` est associé à son ancêtre `<form>`, s'il existe.)

    Cet attribut permet d'associer des éléments `<output>` à des `<form>` n'importe où dans le document, pas seulement à l'intérieur d'un `<form>`. Il peut aussi remplacer un ancêtre `<form>`. Le nom et le contenu de l'élément `<output>` ne sont pas envoyés lors de la soumission du formulaire.

- `name`
  - : Le nom de l'élément. Utilisé dans l'API {{DOMxRef("HTMLFormElement.elements", "form.elements")}}.

La valeur, le nom et le contenu de l'élément `<output>` ne sont PAS envoyés lors de la soumission du formulaire.

## Accessibilité

De nombreux navigateurs implémentent cet élément comme une région [`aria-live`](/fr/docs/Web/Accessibility/ARIA/Guides/Live_regions). Les technologies d'assistance annoncent ainsi les résultats des interactions de l'utilisateur·ice affichés dans cet élément sans exiger que la sélection soit déplacée depuis les contrôles qui produisent ces résultats.

## Exemples

Le formulaire qui suit fournit un curseur dont la valeur peut aller de `0` à `100` ainsi qu'un élément HTML {{HTMLElement("input")}} dans lequel on peut saisir un deuxième nombre. Les deux nombres sont additionnés et le résultat est affiché dans l'élément `<output>` et est actualisé lorsqu'une des deux valeurs est modifiée.

```html
<form id="formulaire-exemple">
  <input type="range" name="b" value="50" /> +
  <input type="number" name="a" value="10" /> =
  <output name="resultat" for="a b">60</output>
</form>
```

```js
const form = document.getElementById("formulaire-exemple");
const a = form.elements["a"];
const b = form.elements["b"];
const result = form.elements["resultat"];

function updateResult() {
  const aValue = a.valueAsNumber;
  const bValue = b.valueAsNumber;
  result.value = aValue + bValue;
}

form.addEventListener("input", updateResult);

updateResult();
```

### Résultat

{{EmbedLiveSample("Exemples")}}

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
        <a href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_phrasé"
          >contenu phrasé</a
        >,
        <a href="/fr/docs/Web/HTML/Guides/Content_categories#listed_éléments_listés"
          >contenu listé</a
        >,
        <a href="/fr/docs/Web/HTML/Guides/Content_categories#labelable_éléments_étiquetables"
          >contenu étiquetable</a
        >,
        <a href="/fr/docs/Web/HTML/Guides/Content_categories#resettable_éléments_de_ré-initialisation"
          >contenu réinitialisable</a
        >,
        <a
          href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_associé_aux_formulaires"
          >form-associated element</a
        >, contenu tangible.
      </td>
    </tr>
    <tr>
      <th scope="row">Contenu autorisé</th>
      <td>
        <a href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_phrasé"
          >Contenu phrasé</a
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
        Tout élément qui accepte du
        <a href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_phrasé"
          >contenu phrasé</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Rôle ARIA implicite</th>
      <td><a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/status_role"><code>status</code></a></td>
    </tr>
    <tr>
      <th scope="row">Rôles ARIA autorisés</th>
      <td>Tous les rôles sont autorisés.</td>
    </tr>
    <tr>
      <th scope="row">Interface DOM</th>
      <td>{{DOMxRef("HTMLOutputElement")}}</td>
    </tr>
  </tbody>
</table>

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
