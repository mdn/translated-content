---
title: "<progress> : l'élément d'indicateur de progression"
slug: Web/HTML/Reference/Elements/progress
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

L'élément [HTML](/fr/docs/Web/HTML) **`<progress>`** indique l'état de complétion d'une tâche et est généralement représenté par une barre de progression.

{{InteractiveExample("Démonstration HTML&nbsp;: &lt;progress&gt;", "tabbed-standard")}}

```html interactive-example
<label for="file">Progression du fichier&nbsp;:</label>

<progress id="file" max="100" value="70">70%</progress>
```

```css interactive-example
label {
  padding-right: 10px;
  font-size: 1rem;
}
```

## Attributs

Cet élément inclut les [attributs universels](/fr/docs/Web/HTML/Reference/Global_attributes).

- [`max`](/fr/docs/Web/HTML/Reference/Attributes/max)
  - : Cet attribut indique la valeur correspondant à la complétion de la tâche. Si l'attribut `max` est présent, sa valeur doit être un nombre décimal supérieur à `0`. La valeur par défaut est `1`.
- `value`
  - : Cet attribut indique l'état actuel de complétion de la tâche avec une valeur numérique. La valeur de l'attribut doit être un nombre décimal compris entre `0` et `max` (ou entre `0` et `1` si l'attribut `max` est absent). Si l'attribut `value` est absent, la barre de progression traduit un état indéterminé&nbsp;; cela indique qu'une activité est en cours sans indication de la durée prévue.

> [!NOTE]
> Contrairement à l'élément {{HTMLElement("meter")}}, la valeur minimale est toujours 0 et l'attribut `min` n'est pas autorisé pour l'élément `<progress>`.

> [!NOTE]
> La pseudo-classe CSS {{CSSxRef(":indeterminate")}} peut être utilisée pour cibler les barres de progression indéterminées. Pour qu'une barre de progression redevienne indéterminée après lui avoir donné une valeur, il faut retirer l'attribut `value` avec {{DOMxRef("Element.removeAttribute", "element.removeAttribute('value')")}}.

## Accessibilité

### Étiquetage

Dans la plupart des cas, vous devez fournir une étiquette accessible lors de l'utilisation de `<progress>`. Vous pouvez utiliser les attributs ARIA standards d'étiquetage [`aria-labelledby`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) ou [`aria-label`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) comme pour tout élément avec `role="progressbar"`, mais avec `<progress>`, vous pouvez aussi utiliser l'élément {{HTMLElement("label")}}.

> [!NOTE]
> Le texte placé entre les balises de l'élément n'est pas une étiquette accessible, il est seulement recommandé comme solution de repli pour les anciens navigateurs qui ne prennent pas en charge cet élément.

#### Exemples

```html
<label>
  Téléversement du document&nbsp;:
  <progress value="70" max="100">70 %</progress>
</label>

<!-- OU -->
<br />

<label for="progress-bar">Téléversement du document</label>
<progress id="progress-bar" value="70" max="100">70 %</progress>
```

#### Résultat

{{EmbedLiveSample("Étiquetage")}}

### Description d'une région particulière

Si l'élément `<progress>` décrit la progression du chargement d'une section d'une page, utilisez [`aria-describedby`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) pour pointer vers l'état, et définissez [`aria-busy="true"`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-busy) sur la section qui est mise à jour, en supprimant l'attribut `aria-busy` lorsqu'elle a fini de charger.

#### Exemples

```html
<div aria-busy="true" aria-describedby="progress-bar">
  <!-- le contenu de cette région est en cours de chargement -->
</div>

<!-- ... -->

<progress id="progress-bar" aria-label="Chargement du contenu…"></progress>
```

##### Résultat

{{EmbedLiveSample("Description d'une région particulière")}}

## Exemples

```html
<progress value="70" max="100">70 %</progress>
```

### Résultat

{{EmbedLiveSample("Exemples", 200, 50)}}

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
        <a href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_phrasé"
          >contenu phrasé</a
        >, contenu étiquetable,
        <a href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_tangible"
          >contenu tangible</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Contenu autorisé</th>
      <td>
        <a href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_phrasé"
          >Contenu phrasé</a
        >
        sans élément <code>&#x3C;progress></code> parmi ses descendants.
      </td>
    </tr>
    <tr>
      <th scope="row">Omission de balises</th>
      <td>Aucune, la balise d'ouverture et la balise de fermeture sont obligatoires.</td>
    </tr>
    <tr>
      <th scope="row">Parents autorisés</th>
      <td>
        Tout élément qui accepte du
        <a href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_phrasé"
          >contenu phrasé</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Rôle ARIA implicite</th>
      <td><a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/progressbar_role"><code>progressbar</code></a></td>
    </tr>
    <tr>
      <th scope="row">Rôles ARIA autorisés</th>
      <td>Aucun <code>role</code> autorisé</td>
    </tr>
    <tr>
      <th scope="row">Interface DOM</th>
      <td>{{DOMxRef("HTMLProgressElement")}}.</td>
    </tr>
  </tbody>
</table>

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Créer des contrôles de formulaire verticaux](/fr/docs/Web/CSS/Guides/Writing_modes/Vertical_controls)
- L'élément {{HTMLElement("meter")}}
- La pseudo-classe CSS {{CSSxRef(":indeterminate")}}
- La propriété CSS {{CSSxRef("-moz-orient")}}
- Le pseudo-élément CSS {{CSSxRef("::-moz-progress-bar")}}
- Le pseudo-élément CSS {{CSSxRef("::-webkit-progress-bar")}}
- Le pseudo-élément CSS {{CSSxRef("::-webkit-progress-value")}}
- Le pseudo-élément CSS {{CSSxRef("::-webkit-progress-inner-element")}}
