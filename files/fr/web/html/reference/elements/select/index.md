---
title: "<select> : l'élément de liste déroulante"
slug: Web/HTML/Reference/Elements/select
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

L'élément [HTML](/fr/docs/Web/HTML) **`<select>`** représente un contrôle qui propose un menu d'options.

{{InteractiveExample("Démonstration HTML&nbsp;: &lt;select&gt;", "tabbed-standard")}}

```html interactive-example
<label for="pet-select">Choisissez un animal&nbsp;:</label>

<select name="pets" id="pet-select">
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

L'exemple ci-avant illustre une utilisation typique de `<select>`. Il reçoit un attribut `id` pour pouvoir être associé à un élément {{HTMLElement("label")}} à des fins d'accessibilité, ainsi qu'un attribut `name` pour représenter le nom de la donnée envoyée au serveur. Chaque option du menu est définie par un élément {{HTMLElement("option")}} imbriqué dans l'élément `<select>`.

Chaque élément `<option>` doit avoir un attribut [`value`](/fr/docs/Web/HTML/Reference/Elements/option#value) pour définir la valeur à envoyer au serveur lorsque cette option est sélectionnée. Si aucun attribut `value` n'est défini, la valeur par défaut sera le texte contenu dans l'élément. Vous pouvez définir un attribut [`selected`](/fr/docs/Web/HTML/Reference/Elements/option#selected) sur un élément `<option>` pour qu'il soit sélectionné par défaut au chargement de la page. Si aucun attribut `selected` n'est défini, le premier élément `<option>` sera sélectionné par défaut.

Un élément `<select>` est représenté en JavaScript par un objet {{DOMxRef("HTMLSelectElement")}}, et cet objet possède une propriété {{DOMxRef("HTMLSelectElement.value", "value")}} qui contient la valeur de l'option sélectionnée.

L'élément `<select>` possède des attributs spécifiques que vous pouvez utiliser pour le contrôler, comme `multiple` pour définir si plusieurs options peuvent être sélectionnées, et `size` pour définir combien d'options doivent être affichées en même temps. Il accepte aussi la plupart des attributs généraux des champs de formulaire comme `required`, `disabled`, `autofocus`, etc.

Vous pouvez également imbriquer des éléments {{HTMLElement("option")}} à l'intérieur d'éléments {{HTMLElement("optgroup")}} pour créer des groupes distincts d'options dans la liste déroulante. Il est aussi possible d'inclure des éléments {{HTMLElement("hr")}} pour créer des séparateurs qui ajoutent des ruptures visuelles entre les options.

Pour plus d'exemples, voir [les contrôles natifs pour les formulaires](/fr/docs/Learn_web_development/Extensions/Forms/Basic_native_form_controls#contenu_déroulant).

## Attributs

Cet élément inclut les [attributs universels](/fr/docs/Web/HTML/Reference/Global_attributes).

- [`autocomplete`](/fr/docs/Web/HTML/Reference/Attributes/autocomplete)
  - : Une chaîne de caractères qui fournit une indication à {{Glossary("user agent", "l'agent utilisateur")}} pour les fonctionnalités d'autocomplétion. Voir [la page sur l'attribut `autocomplete`](/fr/docs/Web/HTML/Reference/Attributes/autocomplete) pour une liste des valeurs utilisables et de leurs impacts sur l'autocomplétion.
- `autofocus`
  - : Cet attribut booléen permet d'indiquer si ce contrôle du formulaire devrait recevoir le focus au chargement de la page. Pour un même document, seul un élément de formulaire peut avoir l'attribut `autofocus` activé.
- [`disabled`](/fr/docs/Web/HTML/Reference/Attributes/disabled)
  - : Cet attribut booléen indique que l'utilisateur·ice ne peut pas intéragir avec le contrôle. Si cet attribut n'est pas utilisé, le contrôle héritera de l'état paramétré selon son conteneur (par exemple, via son élément parent {{HTMLElement("fieldset")}}. Si aucun élément parent n'a l'attribut `disabled` activé, le contrôle sera actif.
    [`form`](/fr/docs/Web/HTML/Reference/Attributes/form)
  - : L'élément {{HTMLElement("form")}} auquel associer le `<select>` (son _propriétaire de formulaire_). La valeur de cet attribut doit être l'[`id`](/fr/docs/Web/HTML/Reference/Global_attributes/id) d'un `<form>` dans le même document. (Si cet attribut n'est pas défini, le `<select>` est associé à son élément `<form>` ancêtre, s'il existe.)

    Cet attribut permet de définir l'association d'éléments `<select>` à des `<form>` n'importe où dans le document, pas seulement à l'intérieur d'un `<form>`. Il peut aussi définir une association différente de celle d'un ancêtre `<form>`.

- [`multiple`](/fr/docs/Web/HTML/Reference/Attributes/multiple)
  - : Cet attribut booléen indique qu'on peut sélectionner plusieurs options parmi celles offertes dans le contrôle. Par défaut, si cet attribut n'est pas utilisé, seule une option peut être sélectionnée.
- `name`
  - : Le nom associé au contrôle.
- [`required`](/fr/docs/Web/HTML/Reference/Attributes/required)
  - : Un attribut booléen qui indique qu'une option dont la valeur est une chaîne de caractères non-vide doit être sélectionnée.
- [`size`](/fr/docs/Web/HTML/Reference/Attributes/size)
  - : Si le contrôle est affiché comme une liste déroulante à défilement (par exemple, lorsque `multiple` est défini), cet attribut permet de définir le nombre de lignes de la liste qui doivent être visibles en même temps. Les navigateurs ne sont pas obligés d'afficher un élément select sous forme de liste à défilement. La valeur par défaut est `0`.

    > [!NOTE]
    > Selon la spécification HTML, la valeur par défaut de size doit être `1`&nbsp;; cependant, en pratique, cela a été constaté comme cassant certains sites web, et aucun autre navigateur ne fait cela actuellement, donc Mozilla a choisi de continuer à retourner `0` pour le moment avec Firefox.

## Notes d'utilisation

### Sélectionner plusieurs options

Sur un ordinateur de bureau, il existe différentes façons de sélectionner plusieurs options pour un élément `<select>` utilisant un attribut `multiple`.

Pour les personnes qui utilisent la souris, il est possible de maintenir les touches <kbd>Ctrl</kbd>, <kbd>Command</kbd> ou <kbd>Maj</kbd> (selon le système d'exploitation utilisé) et de cliquer sur les différentes options afin de les sélectionner/déselectionner.

> [!WARNING]
> Les moyens décrits ci-après pour sélectionner des options qui ne sont pas contigües semblent ne fonctionner qu'avec Firefox.
>
> Sous macOS, les raccourcis <kbd>Ctrl</kbd> + <kbd>Flèche vers le haut</kbd> et <kbd>Ctrl</kbd> + <kbd>Flèche vers le bas</kbd> sont en conflit avec les raccourcis système par défaut pour _Mission Control_ et _Fenêtres d'application_, il faudra donc les désactiver pour que cela fonctionne.

Les utilisateur·ice·s du clavier pourront sélectionner des options contigües de la façon suivante&nbsp;:

- Placer le focus sur l'élément `<select>` (avec la touche <kbd>Tab</kbd> par exemple).
- Sélectionner une option en haut ou en bas de l'intervalle en se déplaçant avec les touches <kbd>Haut</kbd> et <kbd>Bas</kbd>.
- Maintenir la touche <kbd>Shift</kbd> puis utiliser les touches <kbd>Haut</kbd> et <kbd>Bas</kbd> pour augmenter ou réduire le nombre d'options sélectionnées.

Les utilisateur·ice·s du clavier pourront sélectionner des options non-contigües de la façon suivante&nbsp;:

- Placer le focus sur l'élément `<select>` (avec la touche <kbd>Tab</kbd> par exemple).
- Maintenir la touche <kbd>Ctrl</kbd> puis utiliser les touches <kbd>Haut</kbd> et <kbd>Bas</kbd> pour modifier le focus sur l'option qu'on souhaite choisir ou rejeter. L'option avec le focus sera entourée par un contour en pointillé.
- Appuyer sur <kbd>Espace</kbd> pour sélectionner/déselectionner les options avec le focus et ainsi de suite pour les différentes options.

## Mise en forme avec CSS

L'élément `<select>` a historiquement été réputé difficile à mettre en forme efficacement avec CSS, d'où l'introduction de fonctionnalités permettant de créer des [éléments de sélection entièrement personnalisables](/fr/docs/Learn_web_development/Extensions/Forms/Customizable_select).

### Mise en forme héritée des select

Dans les navigateurs qui ne prennent pas en charge les fonctionnalités modernes de personnalisation (ou dans des bases de code anciennes où elles ne peuvent pas être utilisées), vous êtes limité·e à la manipulation du [modèle de boîte](/fr/docs/Learn_web_development/Core/Styling_basics/Box_model), de la [police affichée](/fr/docs/Web/CSS/Guides/Fonts), etc. Vous pouvez aussi utiliser la propriété CSS {{CSSxRef("appearance")}} pour supprimer l'apparence système par défaut.

Il reste cependant difficile d'obtenir un résultat cohérent entre navigateurs avec les éléments `<select>` traditionnels. Si vous souhaitez un contrôle total, il est conseillé d'utiliser une bibliothèque offrant de bonnes possibilités de mise en forme des modules complémentaires de formulaire, ou de créer votre propre menu déroulant à l'aide d'éléments non sémantiques, de JavaScript et de [WAI-ARIA](/fr/docs/Learn_web_development/Core/Accessibility/WAI-ARIA_basics) pour fournir la sémantique.

Vous pouvez utiliser la pseudo-classe CSS {{CSSxRef(":open")}} pour mettre en forme les éléments `<select>` à l'état ouvert, c'est-à-dire lorsque la liste déroulante des options est affichée. Cela ne s'applique pas aux éléments `<select>` multi-lignes (ceux avec l'attribut [`multiple`](/fr/docs/Web/HTML/Reference/Attributes/multiple) défini) — ils sont généralement rendus comme une liste à défilement plutôt qu'une liste déroulante, donc n'ont pas d'état ouvert.

Pour plus d'informations sur la mise en forme héritée des `<select>`&nbsp;:

- [Mettre en forme les formulaires HTML](/fr/docs/Learn_web_development/Extensions/Forms/Styling_web_forms)
- [Mise en forme avancée des formulaires HTML](/fr/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling)
- La propriété CSS {{CSSxRef("field-sizing")}}, qui contrôle la taille des éléments `<select>` par rapport à leurs options contenues.

## Accessibilité

L'élément `<hr>` à l'intérieur d'un `<select>` doit être considéré comme purement décoratif, car il n'est actuellement pas exposé dans l'arbre d'accessibilité et donc pas accessible aux technologies d'assistance.

## Exemples

### Sélecteur simple

#### HTML

```html
<!-- C'est la deuxième valeur qui sera initialement sélectionnée -->
<select id="monselect">
  <option value="valeur1">Valeur 1</option>
  <option value="valeur2" selected>Valeur 2</option>
  <option value="valeur3">Valeur 3</option>
</select>
```

#### Résultat

{{EmbedLiveSample("Sélecteur simple", "", 100)}}

### Sélecteur avec options groupées

L'exemple suivant crée un menu déroulant avec des groupes à l'aide de {{HTMLElement("optgroup")}} et {{HTMLElement("hr")}} pour faciliter la compréhension du contenu par l'utilisateur·ice.

```html
<label for="hr-select">Votre aliment préféré</label> <br />

<select name="foods" id="hr-select">
  <option value="">Choisissez un aliment</option>
  <hr />
  <optgroup label="Fruits">
    <option value="apple">Pommes</option>
    <option value="banana">Bananes</option>
    <option value="cherry">Cerises</option>
    <option value="damson">Prunes</option>
  </optgroup>
  <hr />
  <optgroup label="Légumes">
    <option value="artichoke">Artichauts</option>
    <option value="broccoli">Brocolis</option>
    <option value="cabbage">Choux</option>
  </optgroup>
  <hr />
  <optgroup label="Viandes">
    <option value="beef">Boeuf</option>
    <option value="chicken">Poulet</option>
    <option value="pork">Porc</option>
  </optgroup>
  <hr />
  <optgroup label="Poissons">
    <option value="cod">Cabillaud</option>
    <option value="haddock">Aiglefin</option>
    <option value="salmon">Saumon</option>
    <option value="turbot">Turbot</option>
  </optgroup>
</select>
```

#### Résultat

{{EmbedLiveSample("Sélecteur avec options groupées", "", 100)}}

### Sélecteur avancé avec multi-sélection

L'exemple qui suit est légèrement plus complexe et illustre certaines fonctionnalités qui peuvent être utilisées avec un élément `<select>`&nbsp;:

```html
<label
  >Veuillez choisir un ou plusieurs animaux&nbsp;:
  <select name="pets" multiple size="4">
    <optgroup label="Animaux à 4-pattes">
      <option value="Chien">Chien</option>
      <option value="chat">Chat</option>
      <option value="hamster" disabled>Hamster</option>
    </optgroup>
    <optgroup label="Animaux volants">
      <option value="perroquet">Perroquet</option>
      <option value="macaw">Macaw</option>
      <option value="albatros">Albatros</option>
    </optgroup>
  </select>
</label>
```

#### Résultat

{{EmbedLiveSample("Sélecteur avancé avec multi-sélection", "", 100)}}

Vous pourrez voir que&nbsp;:

- Plusieurs options peuvent être sélectionnées grâce à l'attribut `multiple`.
- L'attribut `size` permet d'afficher uniquement 4 lignes simultanément et qu'il faut faire défiler le contenu.
- Les éléments {{HTMLElement("optgroup")}} ont été utilisés pour diviser les choix en différents groupes. Cela applique un effet simplement visuel (avec le nom en gras et les options indentées).
- Le choix "Hamster" est présent avec l'attribut `disabled` et ne peut donc pas être sélectionné.

## Résumé technique

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/fr/docs/Web/HTML/Guides/Content_categories"c          >Catégories de contenu</a
        >
      </th>
      <td>
        <a href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_de_flux"
          >Contenu de flux</a
        >,
        <a href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_phrasé"
          >contenu phrasé</a
        >,
        <a href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_interactif"
          >contenu interactif</a
        >,
        <a href="/fr/docs/Web/HTML/Guides/Content_categories#listed_éléments_listés"
          >listé</a
        >,
        <a href="/fr/docs/Web/HTML/Guides/Content_categories#labelable_éléments_étiquetables"
          >étiquetable</a
        >,
        <a href="/fr/docs/Web/HTML/Guides/Content_categories#resettable_éléments_de_ré-initialisation"
          >réinitialisable</a
        > et
        <a href="/fr/docs/Web/HTML/Guides/Content_categories#submittable_éléments_participants_à_lenvoi_du_formulaire"
          >qui peut être envoyé</a
        > d'élément
        <a
          href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_associé_aux_formulaires"
          >associé aux formulaires</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Contenu autorisé</th>
      <td>
        Zéro ou plusieurs éléments {{HTMLElement("option")}},
        {{HTMLElement("optgroup")}}, ou {{HTMLElement("hr")}} dans les éléments <code>&lt;select&gt;</code> traditionnels. Dans les <a href="/fr/docs/Learn_web_development/Extensions/Forms/Customizable_select">éléments de sélection personnalisables</a>&nbsp;:
        <ul>
          <li>Le bouton de sélection {{HTMLElement("button")}} peut être inclus en tant qu'enfant <code>&lt;button&gt;</code> avec un élément {{HTMLElement("selectedcontent")}} imbriqué.</li>
          <li>Le sélecteur déroulant est défini comme n'importe quel autre contenu, ce qui peut inclure zéro ou plusieurs éléments <code>&lt;option&gt;</code>, <code>&lt;optgroup&gt;</code>, <code>&lt;hr&gt;</code>, {{HTMLElement("div")}}, {{HTMLElement("script")}}, {{HTMLElement("template")}} et {{HTMLElement("noscript")}}.</li>
        </ul>
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
      <td>
        <a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role"><code>combobox</code></a> avec <strong>aucun</strong> attribut
        <code>multiple</code> et <strong>aucun</strong> attribut
        <code>size</code> supérieur à 1, sinon
        <a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/listbox_role"><code>listbox</code></a>
      </td>
    </tr>
    <tr>
      <th scope="row">Rôles ARIA autorisé</th>
      <td>
        <a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/menu_role"><code>menu</code></a> avec <strong>aucun</strong> attribut
        <code>multiple</code> et <strong>aucun</strong> attribut
        <code>size</code> supérieur à 1, sinon aucun
        <code>role</code> autorisé
      </td>
    </tr>
    </tr>
    <tr>
      <th scope="row">Interface DOM</th>
      <td>{{DOMxRef("HTMLSelectElement")}}</td>
    </tr>
  </tbody>
</table>

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Événements déclenchés par `<select>`&nbsp;: {{DOMxRef("HTMLElement/change_event", "change")}}, {{DOMxRef("Element/input_event", "input")}}
- L'élément {{HTMLElement("option")}}
- L'élément {{HTMLElement("optgroup")}}
- [Les éléments de sélection personnalisables](/fr/docs/Learn_web_development/Extensions/Forms/Customizable_select)
