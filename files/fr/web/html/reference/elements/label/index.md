---
title: "<label> : l'élément de libellé"
slug: Web/HTML/Reference/Elements/label
l10n:
  sourceCommit: 7b8768d410a281446b0b95627c531d852e624353
---

L'élément [HTML](/fr/docs/Web/HTML) **`<label>`** représente une légende pour un élément d'une interface utilisateur.

{{InteractiveExample("Démonstration HTML&nbsp;: &lt;label&gt;", "tabbed-shorter")}}

```html interactive-example
<div class="preference">
  <label for="cheese">Aimez-vous le fromage&nbsp;?</label>
  <input type="checkbox" name="cheese" id="cheese" />
</div>

<div class="preference">
  <label for="peas">Aimez-vous les petits pois&nbsp;?</label>
  <input type="checkbox" name="peas" id="peas" />
</div>
```

```css interactive-example
.preference {
  display: flex;
  justify-content: space-between;
  width: 60%;
  margin: 0.5rem;
}
```

## Attributs

Cet élément inclut les [attributs universels](/fr/docs/Web/HTML/Reference/Global_attributes).

- [`for`](/fr/docs/Web/HTML/Reference/Attributes/for)
  - : La valeur correspond à l'[identifiant](/fr/docs/Web/HTML/Reference/Global_attributes/id) du contrôle de formulaire [étiquetable](/fr/docs/Web/HTML/Guides/Content_categories#labelable_éléments_étiquetables) dans le même document, [associant le `<label>` à ce contrôle de formulaire](#associer_un_libellé_à_un_contrôle_de_formulaire). Notez que sa propriété de réflexion JavaScript est [`htmlFor`](/fr/docs/Web/API/HTMLLabelElement/htmlFor).

## Notes d'utilisation

### Associer un libellé à un contrôle de formulaire

Le premier élément du document avec un attribut `id` correspondant à la valeur de l'attribut `for` est le _contrôle étiqueté_ pour cet élément `label` — si l'élément avec cet `id` est effectivement un [élément étiquetable](/fr/docs/Web/HTML/Guides/Content_categories#labelable_éléments_étiquetables). S'il ne s'agit _pas_ d'un élément étiquetable, alors l'attribut `for` n'a aucun effet. Si d'autres éléments correspondent aussi à la valeur de l'`id` plus loin dans le document, ils ne sont pas pris en compte.

Plusieurs éléments `<label>` peuvent être associés au même contrôle de formulaire en ayant plusieurs éléments `<label>` avec la même valeur d'attribut `for`, ce qui donne au contrôle de formulaire plusieurs étiquettes.

Associer un `<label>` à un contrôle de formulaire, comme {{HTMLElement("input")}} ou {{HTMLElement("textarea")}}, présente des avantages majeurs&nbsp;:

- Le texte du libellé n'est pas seulement associé visuellement à son champ de saisie correspondant&nbsp;; il est aussi associé de façon programmatique. Cela signifie, par exemple, qu'un lecteur d'écran lira le libellé quand l'utilisateur·ice sélectionne le champ de saisie, ce qui facilite la compréhension des données à saisir pour une personne utilisant une technologie d'assistance.
- Lorsqu'un·e utilisateur·ice clique ou touche un libellé, le navigateur passe la sélection à son champ associé (l'évènement résultant est aussi déclenché pour le champ). Cette zone de sélection élargie offre un avantage à toute personne souhaitant l'activer, y compris celles utilisant un appareil à écran tactile.

Il existe deux façons d'associer un `<label>` à un contrôle de formulaire, appelées association _explicite_ et _implicite_.

Pour associer explicitement un élément `<label>` à un élément `<input>`, il faut d'abord ajouter l'attribut `id` à l'élément `<input>`. Ensuite, il faut ajouter l'attribut `for` à l'élément `<label>`, où la valeur de `for` est la même que celle de l'attribut `id` de l'élément `<input>`.

```html
<label for="peas">J'aime les petits pois.</label>
<input type="checkbox" name="peas" id="peas" />
```

On peut aussi imbriquer directement l'élément `<input>` dans l'élément `<label>`, auquel cas les attributs `for` et `id` ne sont pas nécessaires car l'association est implicite&nbsp;:

```html
<label>
  J'aime les petits pois.
  <input type="checkbox" name="peas" />
</label>
```

> [!NOTE]
> Un élément `<label>` peut avoir à la fois un attribut `for` et un élément de contrôle contenu, tant que l'attribut `for` pointe vers l'élément contenu.

Ces deux méthodes sont équivalentes, mais il existe quelques points à considérer&nbsp;:

- Bien que les combinaisons courantes de navigateurs et de {{Glossary("screen reader", "lecteur d'écran")}} prennent en charge l'association implicite, toutes les technologies d'assistance ne le font pas.
- Selon votre conception, le type d'association peut avoir un impact sur la mise en forme. Faire des éléments `<label>` et du contrôle de formulaire des éléments placés côte à côte plutôt que parent-enfant signifie qu'ils sont séparés, ce qui permet une mise en page plus personnalisable, par exemple en les alignant avec des méthodes de grille ou de flex.
- L'association explicite exige que le contrôle de formulaire ait un attribut `id`, qui doit être unique dans tout le document. Cela peut être difficile, surtout dans une application composée de composants. Les frameworks proposent souvent leurs propres solutions, comme [`useId()`](https://fr.react.dev/reference/react/useId) de React, mais cela nécessite tout de même une orchestration supplémentaire pour bien fonctionner.

En général, il est recommandé d'utiliser l'association explicite avec l'attribut `for` afin d'assurer la compatibilité avec les outils externes et les technologies d'assistance. En fait, il est possible d'imbriquer _et_ de fournir `id`/`for` simultanément pour une compatibilité maximale.

Le contrôle de formulaire auquel un libellé est associé est appelé le _contrôle étiqueté_ de l'élément libellé. Plusieurs libellés peuvent être associés au même contrôle de formulaire&nbsp;:

```html
<label for="username">Saisissez votre nom d'utilisateur·ice&nbsp;:</label>
<input id="username" name="username" type="text" />
<label for="username">Nom d'utilisateur·ice oublié&nbsp;?</label>
```

Les éléments pouvant être associés à un élément `<label>` incluent {{HTMLElement("button")}}, {{HTMLElement("input")}} (sauf pour `type="hidden"`), {{HTMLElement("meter")}}, {{HTMLElement("output")}}, {{HTMLElement("progress")}}, {{HTMLElement("select")}} et {{HTMLElement("textarea")}}.

## Accessibilité

### Contenu interactif

À l'exception du contrôle de formulaire [associé implicitement](#associer_un_libellé_à_un_contrôle_de_formulaire), il ne faut pas placer d'autres éléments interactifs comme les {{HTMLElement("a", "ancres")}} ou {{HTMLElement("button", "boutons")}} à l'intérieur d'un `<label>`. Cela rend difficile l'activation du champ de formulaire associé au libellé.

**À ne pas faire&nbsp;:**

```html example-bad
<label for="tac">
  <input id="tac" type="checkbox" name="terms-and-conditions" />
  J'accepte <a href="terms-and-conditions.html">les conditions d'utilisation</a>
</label>
```

**À privilégier&nbsp;:**

```html example-good
<label for="tac">
  <input id="tac" type="checkbox" name="terms-and-conditions" />
  J'accepte les conditions d'utilisation
</label>
<p>
  <a href="terms-and-conditions.html">Lire les conditions d'utilisation</a>
</p>
```

> [!NOTE]
> Il est recommandé de placer tout contexte nécessaire, comme le lien vers les conditions d'utilisation, avant le contrôle de formulaire, afin que l'utilisateur·ice puisse le lire avant d'interagir avec le contrôle.

### Titres

Placer des [éléments de titres](/fr/docs/Web/HTML/Reference/Elements/Heading_Elements) à l'intérieur d'un élément `label` causera des interférences avec de nombreux outils d'assistance car les titres sont généralement utilisés comme [une aide à la navigation](/fr/docs/Web/HTML/Reference/Elements/Heading_Elements#navigation). Si le texte du libellé doit être ajusté visuellement, utilisez des classes CSS appliquées à l'élément `<label>`.

Si un [formulaire](/fr/docs/Web/HTML/Reference/Elements/form), ou une section de formulaire, a besoin d'un titre, utilisez l'élément {{HTMLElement("legend")}} placé dans un {{HTMLElement("fieldset")}}.

**À ne pas faire&nbsp;:**

```html example-bad
<label for="votre-nom">
  <h3>Votre nom</h3>
  <input id="votre-nom" name="votre-nom" type="text" />
</label>
```

**À privilégier&nbsp;:**

```html example-good
<label class="label-grand" for="votre-nom">
  Votre nom
  <input id="votre-nom" name="votre-nom" type="text" />
</label>
```

### Boutons

Un élément {{HTMLElement("input")}} avec `type="button"` et un attribut `value` valide ne nécessite pas l'ajout d'un libellé. Rajouter un libellé inutile pourra créer des interférences avec les outils d'assistance. Il en va de même pour l'élément {{HTMLElement("button")}}.

## Exemples

### Définir un libellé implicite

```html
<label>Cliquez ici <input type="text" /></label>
```

{{EmbedLiveSample("Définir un libellé implicite", 200, 50)}}

### Définir un libellé explicite avec l'attribut `for`

```html
<label for="nom-utilisateur">Cliquez ici</label>
<input type="text" id="nom-utilisateur" />
```

{{EmbedLiveSample("Définir un libellé explicite avec l'attribut `for`", 200, 50)}}

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
        <a
          href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_phrasé"
          >contenu phrasé</a
        >,
        <a
          href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_associé_aux_formulaires"
          >contenu associé aux formulaires</a
        >, contenu tangible.
      </td>
    </tr>
    <tr>
      <th scope="row">Contenu autorisé</th>
      <td>
        <a href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_phrasé"
          >Contenu phrasé</a
        >, sans élément <code>label</code> descendant. Aucun
        <a href="/fr/docs/Web/HTML/Guides/Content_categories#labelable_éléments_étiquetables"
          >élément étiquetable</a
        >
        autre que le contrôle étiqueté n'est autorisé.
      </td>
    </tr>
    <tr>
      <th scope="row">Omission de balise</th>
      <td>Aucune, la balise d'ouverture et la balise de fermeture sont obligatoires.</td>
    </tr>
    <tr>
      <th scope="row">Parents autorisés</th>
      <td>
        Tout élément acceptant du
        <a
          href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_phrasé"
          >contenu phrasé</a
        >.
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
      <td>{{DOMxRef("HTMLLabelElement")}}</td>
    </tr>
  </tbody>
</table>

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
