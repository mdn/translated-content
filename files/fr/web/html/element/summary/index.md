---
title: "<summary> : l'élément de révélation d'un résumé"
slug: Web/HTML/Element/summary
---

{{HTMLSidebar}}

L'élément HTML **`<summary>`** représente une boîte permettant de révéler le contenu d'un résumé ou d'une légende pour le contenu d'un élément {{HTMLElement("details")}}. En cliquant sur l'élément `<summary>`, on passe de l'état affiché à l'état masqué (et vice versa) de l'élément `<details>` parent.

{{EmbedInteractiveExample("pages/tabbed/summary.html","tabbed-shorter")}}

## Attributs

Cet élément inclut uniquement [les attributs universels](/fr/docs/Web/HTML/Attributs_universels).

## Notes d'utilisation

Un élément `<summary>` peut contenir des éléments de titre, du texte simple ou tout contenu HTML pouvant être placé au sein d'un paragraphe.

Un élément `<summary>` peut uniquement être utilisé comme le premier élément fils d'un élément `<details>`. Lorsque l'utilisateur clique sur le résumé, l'élément `<details>` parent change d'état (affiché ou masqué) et un évènement [`toggle`](/fr/docs/Web/API/HTMLDetailsElement/toggle_event) est envoyé à l'élément `<details>` (ce qui permet de détecter un changement d'état via un script).

### Libellé par défaut

Si l'élément `<summary>` est absent au sein d'un élément `<details>`, c'est le titre contenu dans l'élément {{HTMLElement("details")}} qui sera utilisé.

### Mise en forme par défaut

La mise en forme par défaut pour `<summary>` est `display: list-item`, tel qu'indiqué dans [le standard HTML](https://html.spec.whatwg.org/multipage/rendering.html#the-details-and-summary-elements). Cela permet de modifier ou de retirer l'icône affiché pour le contrôle d'affichage/masquage. Par défaut, cette icône est généralement un triangle.

Si la mise en forme est surchargée avec `display: block`, l'icône triangulaire qui révèle le contenu sera masquée.

Voir la section ci-après sur la compatibilité des navigateurs à ce sujet car certains navigateurs ne prennent pas en charge tout ces aspects.

## Exemples

### Exemple simple

#### HTML

```html
<details open>
  <summary>Détails produit</summary>
  <p>Ce produit a été fabriqué par ACME et respecte les pandas.</p>
</details>
```

#### Résultat

{{EmbedLiveSample("","100%","160")}}

### Utilisation de titres

Il est possible d'utiliser des titres au sein d'un résumé.

#### HTML

```html
<details open>
  <summary><h4>Détails produit</h4></summary>
  <ol>
    <li>Date de fabrication : 01 janvier 2018</li>
    <li>Numéro de lot : LMA2542501</li>
    <li>Date limite de consommation : 31 août 2018</li>
  </ol>
</details>
```

#### Résultat

{{EmbedLiveSample("", 650, 120)}}

### Utiliser avec divers éléments HTML

#### HTML

```html
<details open>
  <summary><strong>Détails</strong></summary>
  <ol>
    <li>Date de fabrication : 01 janvier 2018</li>
    <li>Numéro de lot : LMA2542501</li>
    <li>Date limite de consommation : 31 août 2018</li>
  </ol>
</details>
```

#### Résultat

{{EmbedLiveSample("", 650, 120)}}

## Résumé technique

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Contenu autorisé</th>
      <td>
        <a href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_phras.C3.A9"
          >Contenu phrasé</a
        >
        ou un élément décrivant du
        <a href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_de_titre"
          >contenu de titre</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Omission de balises</th>
      <td>
        Aucune, la balise ouvrante et la balise fermante sont obligatoires.
      </td>
    </tr>
    <tr>
      <th scope="row">Parents autorisés</th>
      <td>Un élément {{HTMLElement("details")}}.</td>
    </tr>
    <tr>
      <th scope="row">Rôles ARIA autorisés</th>
      <td><code><a href="/fr/docs/Web/Accessibility/ARIA/Roles/button_role">button</a></code></td>
    </tr>
    <tr>
      <th scope="row">Interface DOM</th>
      <td>{{domxref("HTMLElement")}}</td>
    </tr>
  </tbody>
</table>

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{HTMLElement("details")}}
