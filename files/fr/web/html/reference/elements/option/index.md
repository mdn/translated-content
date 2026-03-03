---
title: "<option> : l'élément d'option"
slug: Web/HTML/Reference/Elements/option
l10n:
  sourceCommit: c10cfb6daba8fe6fc5366f2e1ca1bd32de8a537f
---

L'élément [HTML](/fr/docs/Web/HTML) **`<option>`** est utilisé pour définir un élément contenu dans un élément {{HTMLElement("select")}}, {{HTMLElement("optgroup")}} ou {{HTMLElement("datalist")}}. Ainsi, `<option>` peut représenter des éléments de menu dans des fenêtres contextuelles et d'autres listes d'éléments dans un document HTML.

{{InteractiveExample("Démonstration HTML&nbsp;: &lt;option&gt;", "tabbed-standard")}}

```html interactive-example
<label for="pet-select">Choisissez un animal&nbsp;:</label>

<select id="pet-select">
  <option value="">--Veuillez choisir une option--</option>
  <option value="dog">Chien</option>
  <option value="cat">Chat</option>
  <option value="hamster">Hamster</option>
  <option value="parrot">Perroquet</option>
  <option value="spider">Araignée</option>
  <option value="goldfish">Poisson rouge</option>
</select>
```

```css interactive-example
label {
  font-family: sans-serif;
  font-size: 1rem;
  padding-right: 10px;
}

select {
  font-size: 0.9rem;
  padding: 2px 5px;
}
```

## Attributs

Cet élément inclut les [attributs universels](/fr/docs/Web/HTML/Reference/Global_attributes).

- [`disabled`](/fr/docs/Web/HTML/Reference/Attributes/disabled)
  - : Si cet attribut booléen est défini, l'option ne peut pas être sélectionnée. Généralement, les navigateurs affichent l'option grisée et celle-ci ne reçoit pas les évènements de navigation (liés aux clics ou au focus par exemple). Si cet attribut n'est pas défini, l'élément peut tout de même être désactivé si un de ses ancêtres est un élément {{HTMLElement("optgroup")}} désactivé.
- `label`
  - : La valeur de cet attribut correspond au texte affiché pour expliquer l'option. Si cet attribut n'est pas défini, sa valeur correspondra à celle du texte contenu dans l'élément.
- `selected`
  - : S'il est présent, cet attribut booléen indique que l'option est sélectionnée à l'état initial. Si l'élément `<option>` est un élément descendant d'un élément {{HTMLElement("select")}} dont l'attribut [`multiple`](/fr/docs/Web/HTML/Reference/Elements/select#multiple) n'est pas activé, seul une `<option>` de cet élément {{HTMLElement("select")}} peut être sélectionnée de cette façon.
- `value`
  - : Le contenu de cet attribut représente la valeur qu'on souhaite envoyer au formulaire lorsque l'option est sélectionnée. Si cet attribut n'est pas défini, la valeur sera le contenu texuel de l'élément `<option>`.

## Mise en forme avec CSS

La mise en forme des éléments `<option>` a historiquement été très limitée. [Les éléments de sélection personnalisables](/fr/docs/Learn_web_development/Extensions/Forms/Customizable_select) expliquent les nouvelles fonctionnalités qui permettent leur personnalisation complète, comme n'importe quel élément du DOM.

### Mise en forme héritée des options

Dans les navigateurs qui ne prennent pas en charge les fonctionnalités de personnalisation modernes (ou dans les bases de code anciennes où elles ne peuvent pas être utilisées), la mise en forme disponible sur les éléments `<option>` dépend du navigateur et du système d'exploitation. Selon le système, la propriété {{CSSxRef("font-size")}} du `<select>` parent est respectée dans Firefox et Chromium. Chromium peut également permettre de définir {{CSSxRef("color")}}, {{CSSxRef("background-color")}}, {{CSSxRef("font-family")}}, {{CSSxRef("font-variant")}} et {{CSSxRef("text-align")}}.

Vous trouverez plus de détails sur la mise en forme héritée des `<option>` dans [notre guide sur la mise en forme avancée des formulaires](/fr/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling).

## Exemples

Voir {{HTMLElement("select")}} pour des exemples.

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
        Dans les éléments <code>&lt;select&gt;</code> traditionnels, seul le contenu textuel est autorisé, éventuellement avec des caractères échappés (comme <code>&#x26;eacute;</code>).
        Dans les <a href="/fr/docs/Learn_web_development/Extensions/Forms/Customizable_select">éléments de sélection personnalisables</a>, les éléments <code>&lt;option&gt;</code> peuvent contenir n'importe quel contenu.
      </td>
    </tr>
    <tr>
      <th scope="row">Omission de balises</th>
      <td>
        La balise de début est obligatoire. La balise de fin est optionnelle si
        l'élément est immédiatement suivi par un autre élément
        <code>&#x3C;option></code> ou {{HTMLElement("optgroup")}} ou si
        l'élément parent n'a plus d'autre contenu.
      </td>
    </tr>
    <tr>
      <th scope="row">Parents autorisés</th>
      <td>
        Un élément {{HTMLElement("select")}},
        {{HTMLElement("optgroup")}} ou
        {{HTMLElement("datalist")}}.
      </td>
    </tr>
    <tr>
      <th scope="row">Rôle ARIA implicite</th>
      <td><a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/option_role"><code>option</code></a></td>
    </tr>
    <tr>
      <th scope="row">Rôles autorisés</th>
      <td>Aucun <code>role</code> autorisé</td>
    </tr>
    <tr>
      <th scope="row">Interface DOM</th>
      <td>{{DOMxRef("HTMLOptionElement")}}</td>
    </tr>
  </tbody>
</table>

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les autres éléments relatifs aux formulaires&nbsp;: {{HTMLElement("form")}}, {{HTMLElement("legend")}}, {{HTMLElement("label")}}, {{HTMLElement("button")}}, {{HTMLElement("select")}}, {{HTMLElement("datalist")}}, {{HTMLElement("optgroup")}}, {{HTMLElement("fieldset")}}, {{HTMLElement("textarea")}}, {{HTMLElement("input")}}, {{HTMLElement("output")}}, {{HTMLElement("progress")}} et {{HTMLElement("meter")}}.
- [Les éléments de sélection personnalisables](/fr/docs/Learn_web_development/Extensions/Forms/Customizable_select)
