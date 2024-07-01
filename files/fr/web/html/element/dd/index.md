---
title: "<dd> : l'élément de détail d'une description"
slug: Web/HTML/Element/dd
---

{{HTMLSidebar}}

L'élément HTML **`<dd>`** fournit la description, la définition ou la valeur du terme précédent ([`<dt>`](/fr/docs/Web/HTML/Element/dt)) dans une liste de description ([`<dl>`](/fr/docs/Web/HTML/Element/dl)).

{{EmbedInteractiveExample("pages/tabbed/dd.html","tabbed-standard")}}

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/fr/docs/Web/Guide/HTML/Content_categories"
          >Catégories de contenu</a
        >
      </th>
      <td>Aucune.</td>
    </tr>
    <tr>
      <th scope="row">Contenu autorisé</th>
      <td>
        <a href="/fr/docs/Web/Guide/HTML/Content_categories#flow_content"
          >Contenu de flux</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Omission de balises</th>
      <td>
        Cet élément doit avoir une balise ouvrante. La balise de fin peut être
        omise s'il est immédiatement suivi par un autre élément
        <code>&#x3C;dd></code> ou un autre élément <code>&#x3C;dt></code> ou
        s'il n'y a plus d'autre contenu dans l'élément parent.
      </td>
    </tr>
    <tr>
      <th scope="row">Parents autorisés</th>
      <td>
        Au sein d'un élément
        <a href="/fr/docs/Web/HTML/Element/dl"><code>&#x3C;dl></code></a> après
        un élément
        <a href="/fr/docs/Web/HTML/Element/dt"><code>&#x3C;dt></code></a> ou
        après un élément
        <a href="/fr/docs/Web/HTML/Element/dd"><code>&#x3C;dd></code></a
        >. Sinon (selon le WHATWG), au sein d'un élément
        <a href="/fr/docs/Web/HTML/Element/div"><code>&#x3C;div></code></a>
        situé dans un élément
        <a href="/fr/docs/Web/HTML/Element/dl"><code>&#x3C;dl></code></a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Rôle ARIA implicite</th>
      <td>
        <a href="https://w3c.github.io/aria/#definition"
          ><code>definition</code></a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Rôles ARIA autorisés</th>
      <td>Aucun.</td>
    </tr>
    <tr>
      <th scope="row">Interface DOM</th>
      <td>
        <a href="/fr/docs/Web/API/HTMLElement"><code>HTMLElement</code></a>
      </td>
    </tr>
  </tbody>
</table>

## Attributs

Cet élément inclut [les attributs universels](/fr/docs/Web/HTML/Global_attributes).

- `nowrap` {{non-standard_inline}}
  - : Si la valeur de cet attribut est `yes`, il n'y aura pas de retour à la ligne si le texte de la définition dépasse la taille de la ligne. La valeur par défaut est `no`.

## Exemples

Pour des exemples, voir les [exemples fournis pour l'élément `<dl>`](/fr/docs/Web/HTML/Element/dl#examples).

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément [`<dl>`](/fr/docs/Web/HTML/Element/dl)
- L'élément [`<dt>`](/fr/docs/Web/HTML/Element/dt)
