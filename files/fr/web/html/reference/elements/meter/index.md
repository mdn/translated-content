---
title: "<meter> : l'élément de mesure"
slug: Web/HTML/Reference/Elements/meter
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

L'élément [HTML](/fr/docs/Web/HTML) **`<meter>`** représente une valeur scalaire dans un intervalle donné ou une valeur fractionnaire.

{{InteractiveExample("Démonstration HTML&nbsp;: &lt;meter&gt;", "tabbed-shorter")}}

```html interactive-example
<label for="fuel">Niveau de carburant&nbsp;:</label>

<meter id="fuel" min="0" max="100" low="33" high="66" optimum="80" value="50">
  à 50/100
</meter>
```

```css interactive-example
label {
  padding-right: 10px;
  font-size: 1rem;
}
```

## Attributs

Cet élément inclut [les attributs universels](/fr/docs/Web/HTML/Reference/Global_attributes).

- `value`
  - : La valeur numérique courante. Elle doit être comprise entre les valeurs minimale et maximale (attributs `min` et `max`) si elles sont définies. Si elle n'est pas définie ou mal formée, la valeur est `0`. Si elle est définie mais n'est pas dans l'intervalle défini par les attributs `min` et `max`, la valeur est égale à l'extrémité la plus proche de l'intervalle.

    > [!NOTE]
    > À moins que l'attribut `value` soit compris entre `0` et `1` (inclus), les attributs `min` et `max` doivent définir l'intervalle de sorte que la valeur de l'attribut `value` soit incluse dedans.

- [`min`](/fr/docs/Web/HTML/Reference/Attributes/min)
  - : La borne numérique inférieure de l'intervalle mesuré. Elle doit être inférieure à la valeur maximale (attribut `max`), si elle est définie. Si elle n'est pas définie, la valeur minimale est `0`.
- [`max`](/fr/docs/Web/HTML/Reference/Attributes/max)
  - : La borne numérique supérieure de l'intervalle mesuré. Elle doit être supérieure à la valeur minimale (attribut `min`), si elle est définie. Si elle n'est pas définie, la valeur maximale est `1`.
- `low`
  - : La borne numérique supérieure de la partie basse de l'intervalle mesuré. Elle doit être supérieure à la valeur minimale (attribut `min`), et aussi inférieure à la valeur haute et à la valeur maximale (attributs `high` et `max` respectivement), si elles sont définies. Si elle n'est pas définie ou si elle est inférieure à la valeur minimale, la valeur de `low` est égale à la valeur minimale.
- `high`
  - : La borne numérique inférieure de la partie haute de l'intervalle mesuré. Elle doit être inférieure à la valeur maximale (attribut `max`), et aussi supérieure à la valeur basse et à la valeur minimale (attributs `low` et `min` respectivement), si elles sont définies. Si elle n'est pas définie ou si elle est supérieure à la valeur maximale, la valeur de `high` est égale à la valeur maximale.
- `optimum`
  - : Cet attribut indique la valeur numérique optimale. Elle doit être comprise dans l'intervalle (défini par les attributs `min` et `max`). Lorsqu'il est utilisé avec les attributs `low` et `high`, il indique quelle partie de l'intervalle est considérée comme préférable. Par exemple, s'il est compris entre les attributs `min` et `low`, alors la partie basse de l'intervalle est considérée comme préférable. Le navigateur peut colorer la barre du composant différemment selon que la valeur est inférieure ou égale à la valeur optimale.

## Exemples

### Exemple simple

#### HTML

```html
<p>Niveau de batterie&nbsp;: <meter min="0" max="100" value="75">75%</meter></p>
```

#### Résultat

{{EmbedLiveSample("Exemple simple", 300, 60)}}

### Exemple de plage haute et basse

On remarquera ici que l'attribut [`min`](#min) est absent (ce qui est autorisé), la valeur minimale sera alors `0`.

#### HTML

```html
<p>
  L'étudiante a eu un score de&nbsp;:
  <meter low="69" high="80" max="100" value="84">84%</meter>
</p>
```

#### Résultat

{{EmbedLiveSample("Exemple de plage haute et basse", 300, 60)}}

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
        >, contenu étiquetable, contenu tangible.
      </td>
    </tr>
    <tr>
      <th scope="row">Contenu autorisé</th>
      <td>
        <a
          href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_phrasé"
          >Contenu phrasé</a
        >
        ne possédant pas d'élément <code>&#x3C;meter></code> parmi ses
        descendants.
      </td>
    </tr>
    <tr>
      <th scope="row">Omission de balises</th>
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
        <code
          ><a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/structural_roles#rôles_structurels_avec_équivalents_html">meter</a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Rôles ARIA autorisés</th>
      <td>Aucun <code>role</code> autorisé</td>
    </tr>
    <tr>
      <th scope="row">Interface DOM</th>
      <td>{{DOMxRef("HTMLMeterElement")}}</td>
    </tr>
  </tbody>
</table>

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Créer des contrôles de formulaire verticaux](/fr/docs/Web/CSS/Guides/Writing_modes/Vertical_controls)
- L'élément HTML {{HTMLElement("progress")}}
- Les pseudo-éléments non-standards {{CSSxRef("::-webkit-meter-bar")}}, {{CSSxRef("::-webkit-meter-inner-element")}}, {{CSSxRef("::-webkit-meter-even-less-good-value")}}, {{CSSxRef("::-webkit-meter-optimum-value")}}, {{CSSxRef("::-webkit-meter-suboptimum-value")}}
