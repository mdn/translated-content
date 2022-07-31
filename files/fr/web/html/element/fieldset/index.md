---
title: '<fieldset> : l''élément pour les ensembles de champs'
slug: Web/HTML/Element/Fieldset
tags:
  - Element
  - Forms
  - HTML
  - HTML forms
  - Reference
  - Web
translation_of: Web/HTML/Element/fieldset
browser-compat: html.elements.fieldset
---
{{HTMLRef}}

L'élément HTML **`<fieldset>`** est utilisé afin de regrouper plusieurs contrôles interactifs ainsi que des étiquettes ([`<label>`](/fr/docs/Web/HTML/Element/Label)) dans un formulaire HTML.

{{EmbedInteractiveExample("pages/tabbed/fieldset.html", "tabbed-standard")}}

Comme on peut le voir dans l'exemple ci-avant, l'élément `<fieldset>` permet de regrouper une partie d'un formulaire HTML et d'associer une légende ([`<legend>`](/fr/docs/Web/HTML/Element/Legend)) décrivant ce groupe. Cet élément utilise quelques attributs et notamment `form` dont la valeur correspond à la valeur de l'attribut `id` d'un élément [`<form>`](/fr/docs/Web/HTML/Element/Form) de la même page. De cette façon, on peut avoir un élément `<fieldset>` qui soit rattaché à un formulaire mais qui ne soit pas imbriqué dans ce formulaire. L'attribut `disabled` permet de désactiver l'élément `<fieldset>` ainsi que l'ensemble de son contenu via une seule valeur.

## Attributs

Cet élément prend en charge [les attributs universels](/fr/docs/Web/HTML/Global_attributes).

- `disabled`
  - : Si cet attribut booléen est utilisé, les contrôles de formulaires des éléments descendants sont désactivés (ils ne peuvent pas être édités). Bien qu'ils ne soient pas éditables, les données de ces contrôles seront envoyées avec le formulaire. Ces contrôles ne recevront pas les évènements liés à la navigation (tels que ceux liés aux clics ou au focus). La plupart du temps, ces contrôles désactivés apparaissent comme grisés. On notera que les éléments de formulaires au sein de l'élément [`<legend>`](/fr/docs/Web/HTML/Element/Legend) ne seront pas désactivés.
- `form`
  - : La valeur de cet attribut correspond à la valeur de l'attribut `id` de l'élément [`<form>`](/fr/docs/Web/HTML/Element/Form) auquel il est rattaché. La valeur par défaut est l'identifiant du plus proche élément [`<form>`](/fr/docs/Web/HTML/Element/Form) dont l'élément `<fieldset>` est le descendant. Attention, cet attribut peut être source de confusion, tout élément `<input>` contenu au sein du `<fieldset>` et qui devra être associé au formulaire devra également avoir l'attribut `form` explicitement défini. En JavaScript, on pourra utiliser la propriété [`HTMLFormElement.elements`](/fr/docs/Web/API/HTMLFormElement/elements) pour vérifier le bon rattachement des éléments au formulaire.
- `name`

  - : Le nom associé au groupe.

    > **Note :** L'étiquette du groupe de contrôle est donné par le premier élément enfant [`<legend>`](/fr/docs/Web/HTML/Element/Legend) du `<fieldset>`.

## Mise en forme avec CSS

L'élément `<fieldset>` est quelque peu particulier pour la mise en forme.

La valeur initiale de la propriété [`display`](/fr/docs/Web/CSS/display) pour cet élément est `block` et l'élément crée un [contexte de formatage de bloc](/fr/docs/Web/Guide/CSS/Block_formatting_context). Si l'élément `<fieldset>` est mis en forme avec une valeur `display` qui correspond à un style en ligne, celui-ci se comportera comme `inline-block` et sinon comme `block`. Par défaut, une bordure de 2 pixels ondulée entoure le contenu de l'élément et il y a un léger _padding_. Par défaut, l'élément a `min-inline-size: min-content`.

Si un élément [`<legend>`](/fr/docs/Web/HTML/Element/Legend) est présent, il est placé au-dessus de la bordure située au début de l'axe de bloc. L'élément `<legend>` se réduit si besoin et établit également un contexte de formatage. Sa valeur `display` utilisée est `block` (autrement dit, on pourra le cibler avec `display: inline`, il continuera de se comporter comme `block`).

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
    <input type="radio" name="radio" id="radio">
    <label for="radio">L'esprit de la radio</label>
  </fieldset>
</form>
```

#### Résultat

{{EmbedLiveSample('Exemple_simple', '100%', '80')}}

### \<fieldset> désactivé

Dans cet exemple, on voit comment l'attribut `disabled` permet de désactiver un élément `<fieldset>` et l'ensemble de ses éléments par la même occasion.

#### HTML

```html
<form action="#">
  <fieldset disabled>
    <legend>Fieldset désactivé</legend>
    <div>
      <label for="name">Nom : </label>
      <input type="text" id="name" value="Chris">
    </div>
    <div>
      <label for="pwd">Archétype : </label>
      <input type="password" id="pwd" value="Wookie">
    </div>
  </fieldset>
</form>
```

#### Résultat

{{EmbedLiveSample('fieldset_désactivé', '100%', '110') }}

## Résumé technique

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
        <a
          href="/fr/docs/Web/Guide/HTML/Using_HTML_sections_and_outlines#sectioning_root"
          >racine de sectionnement</a
        >,
        <a href="/fr/docs/Web/Guide/HTML/Content_categories#form_listed"
          >contenu énuméré</a
        >,
        <a href="/fr/docs/Web/Guide/HTML/Content_categories#form_listed"
          >élément relatif aux formulaires</a
        >,
        <a href="/fr/docs/Web/Guide/HTML/Content_categories#palpable_content"
          >contenu tangible</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Contenu autorisé</th>
      <td>
        Un éventuel élément
        <a href="/fr/docs/Web/HTML/Element/Legend"
          ><code>&#x3C;legend></code></a
        >
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
        <a href="/fr/docs/Web/Guide/HTML/Content_categories#contenu_de_flux"
          >contenu de flux</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Rôle ARIA implicite</th>
      <td>
        <a href="https://w3c.github.io/aria/#group"><code>group</code></a>
      </td>
    </tr>
    <tr>
      <th scope="row">Rôles ARIA autorisés</th>
      <td>
        <a href="https://w3c.github.io/aria/#radiogroup"
          ><code>radiogroup</code></a
        >,
        <a href="https://w3c.github.io/aria/#presentation"
          ><code>presentation</code></a
        >, <a href="https://w3c.github.io/aria/#none"><code>none</code></a>
      </td>
    </tr>
    <tr>
      <th scope="row">Interface DOM</th>
      <td>
        <a href="/fr/docs/Web/API/HTMLFieldSetElement"
          ><code>HTMLFieldSetElement</code></a
        >
      </td>
    </tr>
  </tbody>
</table>

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément [`<legend>`](/fr/docs/Web/HTML/Element/Legend)
- L'élément [`<input>`](/fr/docs/Web/HTML/Element/Input)
- L'élément [`<label>`](/fr/docs/Web/HTML/Element/Label)
- L'élément [`<form>`](/fr/docs/Web/HTML/Element/Form)
