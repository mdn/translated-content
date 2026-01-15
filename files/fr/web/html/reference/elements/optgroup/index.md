---
title: "<optgroup> : l'élément de groupe d'options"
slug: Web/HTML/Reference/Elements/optgroup
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

L'élément [HTML](/fr/docs/Web/HTML) **`<optgroup>`** crée un regroupement d'options à l'intérieur d'un élément HTML {{HTMLElement("select")}}.

Dans les [éléments `<select>` personnalisables](/fr/docs/Learn_web_development/Extensions/Forms/Customizable_select), l'élément {{HTMLElement("legend")}} est autorisé comme enfant de `<optgroup>`, pour fournir une étiquette facile à cibler et à mettre en forme. Cela remplace tout texte défini dans l'attribut `label` de l'élément `<optgroup>`, et possède la même sémantique.

{{InteractiveExample("Démonstration HTML&nbsp;: &lt;optgroup&gt;", "tabbed-standard")}}

```html interactive-example
<label for="dino-select">Choisissez un dinosaure&nbsp;:</label>
<select id="dino-select">
  <optgroup label="Théropodes">
    <option>Tyrannosaurus</option>
    <option>Velociraptor</option>
    <option>Deinonychus</option>
  </optgroup>
  <optgroup label="Sauropodes">
    <option>Diplodocus</option>
    <option>Saltasaurus</option>
    <option>Apatosaurus</option>
  </optgroup>
</select>
```

```css interactive-example
label {
  display: block;
  margin-bottom: 10px;
}
```

> [!NOTE]
> Il n'est pas possible d'imbriquer plusieurs éléments `<optgroup>` entre eux.

## Attributs

Cet élément inclut les [attributs universels](/fr/docs/Web/HTML/Reference/Global_attributes).

- [`disabled`](/fr/docs/Web/HTML/Reference/Attributes/disabled)
  - : Si cet attribut booléen est défini et aucun élément du groupe d'options ne peut être sélectionné. Cet élément ne recevra pas les évènements de navigation (tels que les clics ou les changements de sélection). Les navigateurs affichent ces éléments en les grisant.
- `label`
  - : Le nom du groupe d'options, que le navigateur peut utiliser pour étiqueter les options dans l'interface utilisateur. Cet attribut est obligatoire si cet élément est utilisé.

## Exemples

```html
<select>
  <optgroup label="Groupe 1">
    <option>Option 1.1</option>
  </optgroup>
  <optgroup label="Groupe 2">
    <option>Option 2.1</option>
    <option>Option 2.2</option>
  </optgroup>
  <optgroup label="Groupe 3" disabled>
    <option>Option 3.1</option>
    <option>Option 3.2</option>
    <option>Option 3.3</option>
  </optgroup>
</select>
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
      <td>Aucune.</td>
    </tr>
    <tr>
      <th scope="row">Contenu autorisé</th>
      <td>Zéro ou plusieurs éléments {{HTMLElement("option")}}. Dans <a href="/fr/docs/Learn_web_development/Extensions/Forms/Customizable_select">les éléments de sélection personnalisables</a>, un élément {{HTMLElement("legend")}} est autorisé comme enfant de <code>&lt;optgroup&gt;</code>.</td>
    </tr>
    <tr>
      <th scope="row">Omission de balises</th>
      <td>
        La balise de début est obligatoire, la balise de fin est optionnelle si
        l'élément est immédiatement suivi par un autre élément <code>&#x3C;optgroup></code>
        ou si l'élément parent n'a pas d'autre contenu.
      </td>
    </tr>
    <tr>
      <th scope="row">Parents autorisés</th>
      <td>Un élément {{HTMLElement("select")}}.</td>
    </tr>
    <tr>
      <th scope="row">Rôle ARIA implicite</th>
      <td><a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/group_role"><code>group</code></a></td>
    </tr>
    <tr>
      <th scope="row">Rôles ARIA autorisés</th>
      <td>Aucun <code>role</code> autorisé</td>
    </tr>
    <tr>
      <th scope="row">Interface DOM</th>
      <td>{{DOMxRef("HTMLOptGroupElement")}}</td>
    </tr>
  </tbody>
</table>

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les autres éléments relatifs aux formulaires&nbsp;: {{HTMLElement("form")}}, {{HTMLElement("legend")}}, {{HTMLElement("label")}}, {{HTMLElement("button")}}, {{HTMLElement("select")}}, {{HTMLElement("datalist")}}, {{HTMLElement("option")}}, {{HTMLElement("fieldset")}}, {{HTMLElement("textarea")}}, {{HTMLElement("input")}}, {{HTMLElement("output")}}, {{HTMLElement("progress")}} et {{HTMLElement("meter")}}.
- [Les éléments de sélection personnalisables](/fr/docs/Learn_web_development/Extensions/Forms/Customizable_select)
