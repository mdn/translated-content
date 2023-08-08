---
title: "<output> : l'élément de sortie"
slug: Web/HTML/Element/output
---

{{HTMLSidebar}}

L'élément HTML **`<output>`** représente un conteneur dans lequel un site ou une application peut injecter le résultat d'un calcul ou d'une action utilisateur.

## Attributs

Comme tous les autres éléments HTML, cet élément inclut [les attributs universels](/fr/docs/Web/HTML/Attributs_universels).

- `for`
  - : Une liste d'[identifiants](/fr/docs/Web/HTML/Attributs_universels/id) d'autres éléments, séparés par des espaces, qui ont joué un rôle dans le calcul (en tant que valeurs d'entrée ou autrement).
- `form`
  - : L'identifiant d'un élément de formulaire ({{HTMLElement("form")}}) auquel cet élément est rattaché. La valeur de cet attribut doit être un identifiant (`id`) d'un formulaire qui fait partie du même document. Cet attribut n'est pas nécessaire si l'élément `<output>` est situé dans un formulaire ou si l'élément `<output>` n'est pas du tout associé à un formulaire. Cet attribut permet ainsi de placer l'élément `<output>` où on veut dans le document, pas nécessairement comme descendant d'un formulaire.
- `name`
  - : Le nom de l'élément, utilisé pour identifier l'élément `<output>` lors de l'envoi du formulaire.

## Exemples

Le formulaire qui suit fournit un curseur dont la valeur peut aller de 0 à 100 ainsi qu'un élément {{HTMLElement("input")}} dans lequel on peut saisir un deuxième nombre. Les deux nombres sont additionnés et le résultat est affiché dans l'élément `<output>` et est actualisé lorsqu'une des deux valeurs est modifiée.

### HTML

```html
<form oninput="result.value=parseInt(a.value)+parseInt(b.value)">
  <input type="range" name="b" value="50" /> +
  <input type="number" name="a" value="10" /> =
  <output name="result">60</output>
</form>
```

### Résultat

{{EmbedLiveSample('Exemples','300','200')}}

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
        <a
          href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_associé_aux_formulaires"
          >contenu associé au formulaire (énuméré, étiquetable,
          réinitialisable)</a
        >,
        <a href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_tangible"
          >contenu tangible</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Contenu autorisé</th>
      <td>
        <a href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_phrasé"
          >Contenu phrasé</a
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
        Tout élément qui accepte du
        <a href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_phrasé"
          >contenu phrasé</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Rôles ARIA autorisés</th>
      <td>Tous les rôles sont autorisés.</td>
    </tr>
    <tr>
      <th scope="row">Interface DOM</th>
      <td>{{domxref("HTMLOutputElement")}}</td>
    </tr>
  </tbody>
</table>

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

> **Note :** La plupart des navigateurs implémente cet élément comme s'il avait l'attribut `aria-live` par défaut. Les outils d'assistance annonceront donc les résultats des interactions avec l'interface utilisateur qui arrivent sur cet élément sans demander à avoir passé le focus depuis un autre contrôle. Toutefois, ce comportement n'est pas précisément décrit dans les spécifications actuelles.

## Voir aussi

- Les autres éléments relatifs aux formulaires : {{HTMLElement("form")}}, {{HTMLElement("input")}}, {{HTMLElement("button")}}, {{HTMLElement("datalist")}}, {{HTMLElement("legend")}}, {{HTMLElement("label")}}, {{HTMLElement("select")}}, {{HTMLElement("optgroup")}}, {{HTMLElement("option")}}, {{HTMLElement("textarea")}}, {{HTMLElement("keygen")}}, {{HTMLElement("fieldset")}}, {{HTMLElement("progress")}} et {{HTMLElement("meter")}}.
