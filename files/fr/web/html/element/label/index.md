---
title: <label>
slug: Web/HTML/Element/label
---

{{HTMLSidebar}}

L'élément HTML **`<label>`** représente une légende pour un objet d'une interface utilisateur. Il peut être associé à un contrôle en utilisant l'attribut `for` ou en plaçant l'élément du contrôle à l'intérieur de l'élément `<label>`. Un tel contrôle est appelé _contrôle étiqueté_ par l'élément `<label>`.

{{EmbedInteractiveExample("pages/tabbed/label.html", "tabbed-shorter")}}

Rattacher un libellé à un élément de saisie ({{HTMLElement("input")}}) offre différents avantages :

- Le texte du libellé n'est pas seulement associé visuellement au champ, il est _techniquement_ associé avec le champ. Ainsi, lorsque l'utilisateur a le focus sur le champ, un lecteur d'écran pourra énoncer le contenu du libellé et permettre à l'utilisateur de disposer d'un meilleur contexte.
- Vous pouvez cliquer sur le libellé pour passer le focus voire activer le champ. De cette façon, on dispose d'une meilleure ergonomie car la surface d'utilisation du champ est agrandie, ce qui s'avère utile sur les petits appareils comme les téléphones portables.

Pour associer un élément `<label>` avec un élément `<input>`, il faut fournir un identifiant à l'élément `<input>` sous la forme d'un attribut `id`. Ensuite, on peut renseigner l'attribut `for` de l'élément `<label>` avec la valeur de cet identifiant.

On peut également créer un lien implicite en imbriquant l'élément `<input>` directement au sein d'un élément `<label>` . Dans ce cas, les attributs `for` et `id` ne sont plus nécessaires.

```html
<label
  >Aimez-vous les petits pois ?
  <input type="checkbox" name="petits_pois" />
</label>
```

## Attributs

Cet élément inclut [les attributs universels](/fr/docs/Web/HTML/Attributs_universels).

- `for`

  - : L'identifiant (la valeur de l'attribut [`id`](/fr/docs/Web/HTML/Global_attributes#id)) de l'élément de formulaire associé, appartenant au même document que l'élément label. Le premier élément du document dont l'identifiant correspond est alors le contrôle étiqueté par l'élément.

    > **Note :** Un élément label peut simultanément avoir un attribut `for` et contenir un élément de contrôle tant que l'attribut `for` pointe vers l'élément contenu.

- `form`

  - : L'élément de formulaire auquel l'élément label est associé (son formulaire propriétaire). La valeur de cet attribut doit être l'identifiant d'un élément {{HTMLElement("form")}} contenu au sein du même document. Si l'attribut n'est pas renseigné, cet élément \<label> doit être le descendant d'un élément {{HTMLElement("form")}}. Cet attribut permet de placer des éléments label dans le document sans qu'ils soient nécessairement imbriqués dans un formulaire.

    > **Note :** La spécification HTML a été mise à jour le 28 avril 2016 afin de déprécier l'attribut [`form`](/fr/docs/Web/HTML/Global_attributes#form). Celui-ci est toujours disponible dans les scripts mais sa définition a changé, il renvoie désormais le contrôle associé au formulaire ou `null` s'il n'y a pas de contrôle associé (autrement dit si {{domxref("HTMLLabelElement.control")}} vaut `null`).

## Notes d'utilisation

- Un élément `<label>` peut être associé à un contrôle en plaçant l'élément du contrôle dans l'élément `<label>` ou en utilisant l'attribut [`for`](/fr/docs/Web/HTML/Global_attributes#for). Un tel contrôle sera appelé le contrôle _étiqueté_ par l'élément `<label>`. Un contrôle peut être associé à plusieurs `<label>`.
- Les étiquettes ne sont pas directement associées aux formulaires. Elles le sont indirectement via le contrôle auquel elles sont rattachées.
- Lorsqu'on clique ou touche un élément `<label>` et que celui-ci est associé à un contrôle d'un formulaire, l'évènement `click` est également déclenché pour le contrôle.

## Mise en forme avec CSS

Il n'existe pas de spécificité relative à la mise en forme des éléments `<label>`. Par défaut, ce sont des éléments _inline_ et ils peuvent être mis en forme de la même façon que {{HTMLElement("span")}} et {{HTMLElement("a")}}.

## Exemples

### Exemple simple

#### HTML

```html
<label>Cliquez ici<input type="text" id="Utilisateur" name="Nom" /></label>
```

#### Résultat

{{EmbedLiveSample('Exemple_simple', '200', '50', '')}}

### Utiliser l'attribut `for`

#### HTML

```html
<label for="Utilisateur">Cliquez ici</label>
<input type="text" id="Utilisateur" name="Nom" />
```

#### Résultat

{{EmbedLiveSample("Utiliser_l'attribut_for", '200', '50', '')}}

## Accessibilité

### Contenu interactif

Il ne faut pas placer d'éléments interactifs (tels que les ancres ({{HTMLElement("a")}}) ou les boutons ({{HTMLElement("button")}})) dans un élément `label` sinon il sera difficile d'activer le contrôle associé à ce libellé.

#### Mauvaise pratique

```html example-bad
<label for="tac">
  <input id="tac" type="checkbox" name="terms-and-conditions" />
  J'accepte <a href="terms-and-conditions.html">les conditions d'utilisation</a>
</label>
```

#### Bonne pratique

```html example-good
<label for="tac">
  <input id="tac" type="checkbox" name="terms-and-conditions" />
  J'accepte les conditions d'utilisation
</label>
<p>
  <a href="terms-and-conditions.html">Lire les conditions d'utilisation</a>
</p>
```

### Titres

Placer des [éléments de titres](/fr/docs/Web/HTML/Element/Heading_Elements) à l'intérieur d'un élément `label` causera des interférences avec de nombreux outils d'assistance car les titres sont généralement utilisés comme [une aide à la navigation](/fr/docs/Web/HTML/Element/Heading_Elements#Navigation). Si le texte du libellé doit être ajusté visuellement, on utilisera une mise en forme via CSS.

S'il faut associer un titre à un formulaire ou à une section d'un formulaire, on utilisera l'élément {{HTMLElement("legend")}} au sein d'un élément {{HTMLElement("fieldset")}}.

#### Mauvaise pratique

```html example-bad
<label for="votre-nom">
  <h3>Votre nom</h3>
  <input id="votre-nom" name="votre-nom" type="text" />
</label>
```

#### Bonne pratique

```html example-good
<label class="label-grand" for="votre-nom">
  Votre nom
  <input id="votre-nom" name="votre-nom" type="text" />
</label>
```

### Boutons

Un élément {{HTMLElement("input")}} avec `type="button"` et un attribut `value` valide ne nécessite pas l'ajout d'un libellé. Rajouter un libellé inutile pourra créer des interférences avec les outils d'assistance. Il en va de même pour l'élément {{HTMLElement("button")}}.

## Résumé technique

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <dfn
          ><a href="/fr/docs/Web/HTML/Catégorie_de_contenu"
            >Catégories de contenu</a
          ></dfn
        >
      </th>
      <td>
        <a href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_de_flux"
          >Contenu de flux</a
        >,
        <a
          href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_phras.C3.A9"
          >contenu phrasé</a
        >,
        <a
          href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_associ.C3.A9_aux_formulaires"
          >contenu associé aux formulaires</a
        >
        (listed, submittable, resettable),
        <a href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_tangible"
          >contenu tangible</a
        >, contenu interactif.
      </td>
    </tr>
    <tr>
      <th scope="row">Contenu autorisé</th>
      <td>
        <a href="/fr/docs/HTML/Catégorie_de_contenu#Contenu_phras.C3.A9"
          >Contenu phrasé</a
        >
        sans éléments <code>label</code> descendants. À l'exception du contrôle
        lié à la légende, pas d'autres éléments pouvant contenir un élément
        <code>label</code>.
      </td>
    </tr>
    <tr>
      <th scope="row">Omission de balise</th>
      <td>{{no_tag_omission}}</td>
    </tr>
    <tr>
      <th scope="row">Parents autorisés</th>
      <td>
        Tout élément acceptant du
        <a
          href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_phras.C3.A9"
          >contenu phrasé</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Rôles ARIA autorisés</th>
      <td>Aucun.</td>
    </tr>
    <tr>
      <th scope="row">Interface DOM</th>
      <td>{{domxref("HTMLLabelElement")}}</td>
    </tr>
  </tbody>
</table>

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les autres éléments relatifs aux formulaires : {{HTMLElement("form")}}, {{HTMLElement("input")}}, {{HTMLElement("button")}}, {{HTMLElement("datalist")}}, {{HTMLElement("legend")}}, {{HTMLElement("select")}}, {{HTMLElement("optgroup")}}, {{HTMLElement("option")}}, {{HTMLElement("textarea")}}, {{HTMLElement("keygen")}}, {{HTMLElement("fieldset")}}, {{HTMLElement("output")}}, {{HTMLElement("progress")}} et {{HTMLElement("meter")}}.
