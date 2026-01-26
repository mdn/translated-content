---
title: "<dd> : l'élément de détail d'une description"
slug: Web/HTML/Reference/Elements/dd
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

L'élément [HTML](/fr/docs/Web/HTML) **`<dd>`** fournit la description, la définition ou la valeur du terme précédent ({{HTMLElement("dt")}}) dans une liste de description ({{HTMLElement("dl")}}).

{{InteractiveExample("Démonstration HTML&nbsp;: &lt;dd&gt;", "tabbed-standard")}}

```html interactive-example
<p>Cryptides de Cornouailles&nbsp;:</p>

<dl>
  <dt>Bête de Bodmin</dt>
  <dd>Un grand félin qui habite la lande de Bodmin.</dd>

  <dt>Morgawr</dt>
  <dd>Un serpent de mer.</dd>

  <dt>Homme-hibou</dt>
  <dd>Une créature géante ressemblant à un hibou.</dd>
</dl>
```

```css interactive-example
p,
dt {
  font-weight: bold;
}

dl,
dd {
  font-size: 0.9rem;
}

dd {
  margin-bottom: 1em;
}
```

## Attributs

Cet élément inclut uniquement les [attributs universels](/fr/docs/Web/HTML/Reference/Global_attributes).

## Exemples

Pour des exemples, voir les [exemples fournis pour l'élément `<dl>`](/fr/docs/Web/HTML/Reference/Elements/dl#exesmples).

## Résumé technique

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/fr/docs/Web/HTML/Guides/Content_categories"
          >Catégories de contenu</a
        >
      </th>
      <td>Aucune.</td>
    </tr>
    <tr>
      <th scope="row">Contenu autorisé</th>
      <td>
        <a href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_de_flux"
          >Contenu de flux</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Omission de balises</th>
      <td>
        Cet élément doit avoir une balise ouvrante. La balise de fin peut être
        omise s'il est immédiatement suivi par un autre élément
        <code>&#x3C;dd></code> ou un autre élément
        {{HTMLElement("dt")}} ou
        s'il n'y a plus d'autre contenu dans l'élément parent.
      </td>
    </tr>
    <tr>
      <th scope="row">Parents autorisés</th>
      <td>
        Un {{HTMLElement("dl")}} ou un
        {{HTMLElement("div")}} enfant d'un
        {{HTMLElement("dl")}}.<br />Cet élément peut être utilisé après un
        {{HTMLElement("dt")}} ou un autre élément <code>&lt;dd&gt;</code>
        .
      </td>
    </tr>
    <tr>
      <th scope="row">Rôle ARIA implicite</th>
      <td>
        <a href="https://w3c.github.io/html-aria/#dfn-no-corresponding-role"
          >Pas de rôle correspondant <sup>(angl.)</sup></a
        >
        </td>
    </tr>
    <tr>
      <th scope="row">Rôles ARIA autorisés</th>
      <td>Aucun <code>role</code> autorisé</td>
    </tr>
    <tr>
      <th scope="row">Interface DOM</th>
      <td>{{DOMxRef("HTMLElement")}}</td>
    </tr>
  </tbody>
</table>

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément {{HTMLElement("dl")}}
- L'élément {{HTMLElement("dt")}}
