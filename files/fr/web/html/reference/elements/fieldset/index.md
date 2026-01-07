---
title: "<fieldset> : l'élément pour les ensembles de champs"
slug: Web/HTML/Reference/Elements/fieldset
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

L'élément [HTML](/fr/docs/Web/HTML) **`<fieldset>`** est utilisé afin de regrouper plusieurs contrôles interactifs ainsi que des étiquettes ({{HTMLElement("label")}}) dans un formulaire.

{{InteractiveExample("Démonstration HTML&nbsp;: &lt;fieldset&gt;", "tabbed-standard")}}

```html interactive-example
<form>
  <fieldset>
    <legend>Choisissez votre monstre préféré</legend>

    <input type="radio" id="kraken" name="monster" value="K" />
    <label for="kraken">Kraken</label><br />

    <input type="radio" id="sasquatch" name="monster" value="S" />
    <label for="sasquatch">Sasquatch</label><br />

    <input type="radio" id="mothman" name="monster" value="M" />
    <label for="mothman">Mothman</label>
  </fieldset>
</form>
```

```css interactive-example
legend {
  background-color: #000;
  color: #fff;
  padding: 3px 6px;
}

input {
  margin: 0.4rem;
}
```

Comme on peut le voir dans l'exemple ci-dessus, l'élément `<fieldset>` permet de regrouper une partie d'un formulaire HTML et d'associer une légende ({{HTMLElement("legend")}}) décrivant ce groupe. Cet élément utilise quelques attributs et notamment `form` dont la valeur correspond à la valeur de l'attribut `id` d'un élément {{HTMLElement("form")}} de la même page. De cette façon, on peut avoir un élément `<fieldset>` qui soit rattaché à un formulaire mais qui ne soit pas imbriqué dans ce formulaire. L'attribut `disabled` permet de désactiver l'élément `<fieldset>` ainsi que l'ensemble de son contenu via une seule valeur.

## Attributs

Cet élément inclut les [attributs universels](/fr/docs/Web/HTML/Reference/Global_attributes).

- [`disabled`](/fr/docs/Web/HTML/Reference/Attributes/disabled)
  - : Si cet attribut booléen est utilisé, tous les contrôles de formulaire descendants de `<fieldset>`, sont désactivés, c'est-à-dire qu'ils ne sont pas éditables et ne seront pas envoyés avec le {{HTMLElement("form")}}. Ils ne recevront aucun évènement de navigation, comme les clics de souris ou les évènements liés au focus. Par défaut, les navigateurs affichent ces contrôles comme grisés. Notez que les éléments de formulaire à l'intérieur de l'élément {{HTMLElement("legend")}} ne seront pas désactivés.
- [`form`](/fr/docs/Web/HTML/Reference/Attributes/form)
  - : Cet attribut prend la valeur de l'attribut [`id`](/fr/docs/Web/HTML/Reference/Global_attributes/id) d'un élément {{HTMLElement("form")}} auquel vous souhaitez rattacher le `<fieldset>`, même s'il n'est pas imbriqué dans le formulaire. Veuillez noter que l'utilisation de cet attribut peut prêter à confusion — si vous souhaitez que les éléments {{HTMLElement("input")}} à l'intérieur du `<fieldset>` soient associés au formulaire, il faut utiliser l'attribut `form` directement sur ces éléments. Vous pouvez vérifier quels éléments sont associés à un formulaire via JavaScript, en utilisant {{DOMxRef("HTMLFormElement.elements")}}.
- `name`
  - : Le nom associé au groupe.

    > [!NOTE]
    > L'étiquette du groupe de contrôle est donné par le premier élément enfant {{HTMLElement("legend")}} du `<fieldset>`.

## Mise en forme avec CSS

L'élément `<fieldset>` est quelque peu particulier pour la mise en forme.

La valeur initiale de la propriété {{CSSxRef("display")}} pour cet élément est `block` et l'élément crée un [contexte de formatage de bloc](/fr/docs/Web/CSS/Guides/Display/Block_formatting_context). Si l'élément `<fieldset>` est mis en forme avec une valeur `display` qui correspond à un style en ligne, celui-ci se comportera comme `inline-block` et sinon comme `block`. Par défaut, une bordure de 2 pixels ondulée entoure le contenu de l'élément et il y a un léger _padding_. Par défaut, l'élément a {{CSSxRef("min-inline-size", "min-inline-size: min-content")}}.

Si un élément {{HTMLElement("legend")}} est présent, il est placé au-dessus de la bordure située au début de l'axe de bloc. L'élément `<legend>` se réduit si besoin et établit également un contexte de formatage. Sa valeur `display` utilisée est `block` (autrement dit, on pourra le cibler avec `display: inline`, il continuera de se comporter comme `block`).

Une boîte anonyme contiendra le contenu de `<fieldset>` et héritera de certaines propriétés de `<fieldset>`. Si l'élément `<fieldset>` est mis en forme avec `display: grid` ou `display: inline-grid`, la boîte anonyme aura un contexte de formatage de grille. Si `<fieldset>` est mis en forme avec `display: flex` ou `display: inline-flex`, la boîte anonyme aura un contexte de formatage flexible. Dans tous les autres cas, la boîte anonyme aura un contexte de formatage de bloc.

N'hésitez pas à donner au `<fieldset>` et au `<legend>` le style que vous souhaitez pour l'adapter au design de votre page.

## Exemples

### Exemple simple

Cet exemple montre un `<fieldset>` très simple, avec un `<legend>`, et un seul contrôle à l'intérieur.

#### HTML

```html
<form action="#">
  <fieldset>
    <legend>Titre simple</legend>
    <input type="radio" name="radio" id="radio" />
    <label for="radio">L'esprit de la radio</label>
  </fieldset>
</form>
```

#### Résultat

{{EmbedLiveSample('Exemple simple', '100%', 80)}}

### \<fieldset> désactivé

Dans cet exemple, on voit comment l'attribut `disabled` permet de désactiver un élément `<fieldset>` et l'ensemble de ses éléments par la même occasion.

#### HTML

```html
<form action="#">
  <fieldset disabled>
    <legend>Fieldset désactivé</legend>
    <div>
      <label for="name">Nom : </label>
      <input type="text" id="name" value="Chris" />
    </div>
    <div>
      <label for="pwd">Archétype : </label>
      <input type="password" id="pwd" value="Wookie" />
    </div>
  </fieldset>
</form>
```

#### Résultat

{{EmbedLiveSample('fieldset désactivé', '100%', 110) }}

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
        <a href="/fr/docs/Web/HTML/Guides/Content_categories#listed_éléments_listés"
          >éléments listés</a
        >,
        <a href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_associé_aux_formulaires"
          >élément relatif aux formulaires</a
        >, contenu tangible.
      </td>
    </tr>
    <tr>
      <th scope="row">Contenu autorisé</th>
      <td>
        Un éventuel élément {{HTMLElement("legend")}}
        suivi par du contenu de flux.
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
        Tout élément qui accepte du
        <a href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_de_flux"
          >contenu de flux</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Rôle ARIA implicite</th>
      <td><a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/group_role"><code>group</code></a></td>
    </tr>
    <tr>
      <th scope="row">Rôles ARIA autorisés</th>
      <td>
        <a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/radiogroup_role"><code>radiogroup</code></a>,
        <a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role"><code>presentation</code></a>, <a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/none_role"><code>none</code></a>
      </td>
    </tr>
    <tr>
      <th scope="row">Interface DOM</th>
      <td>{{DOMxRef("HTMLFieldSetElement")}}</td>
    </tr>
  </tbody>
</table>

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément {{HTMLElement("legend")}}
- L'élément {{HTMLElement("input")}}
- L'élément {{HTMLElement("label")}}
- L'élément {{HTMLElement("form")}}
