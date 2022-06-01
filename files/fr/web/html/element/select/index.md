---
title: <select>
slug: Web/HTML/Element/select
tags:
  - Element
  - Formulaires
  - HTML
  - Reference
  - Web
translation_of: Web/HTML/Element/select
---
{{HTMLRef}}

L'élément HTML **`<select>`** représente un contrôle qui fournit une liste d'options parmi lesquelles l'utilisateur pourra choisir.

{{EmbedInteractiveExample("pages/tabbed/select.html", "tabbed-standard")}}

L'exemple ci-avant illustre une utilisation simple de `<select>` où l'attribut `id` peut être associé à un élément {{htmlelement("label")}} qui permettra d'avoir un libellé accessible pour ce champ et où un attribut `name` représente le nom de la donnée qui sera envoyée au serveur. Chaque option est définie grâce à un élément {{htmlelement("option")}} qui se situe à l'intérieur de l'élément `<select>`.

Chaque élément `<option>` doit avoir un attribut `value` qui contient la valeur qui sera envoyée au serveur lorsque l'option est sélectionnée. Si aucune valeur n'est fournie, la valeur par défaut sera le texte contenu dans l'élément. Il est possible d'inclure un attribut `selected` sur un élément `<option>` afin que cette option soit sélectionnée par défaut au chargement de la page.

L'élément `<select>` possède certains attributs spécifiques dont `multiple` qui permet de choisir plusieurs options simultanément et `size` qui indique le nombre d'options affichées en même temps. Cet élément accepte également divers attributs qui sont utilisés pour les champs de formulaire tels que `required`, `disabled`, `autofocus`, etc.

Il est possible de regrouper plusieurs éléments `<option>` à l'intérieur d'éléments {{htmlelement("optgroup")}} afin de créer des groupes d'options distincts.

Pour plus d'exemples, voir [les contrôles natifs pour les formulaires](/fr/docs/Web/Guide/HTML/Formulaires/Les_blocs_de_formulaires_natifs#Contenu_déroulant).

## Attributs

Comme tous les autres éléments HTML, celui-ci inclut [les attributs universels](/fr/docs/Web/HTML/Attributs_universels).

- {{htmlattrdef("autocomplete")}}
  - : Une chaîne de caractères qui fournit une indication à l'agent utilisateur pour les fonctionnalités d'autocomplétion. Voir [la page sur l'attribut `autocomplete`](/fr/docs/Web/HTML/Attributs/autocomplete) pour une liste des valeurs utilisables et de leurs impacts sur l'autocomplétion.
- {{htmlattrdef("autofocus")}}
  - : Cet attribut booléen permet d'indiquer si ce contrôle du formulaire devrait recevoir le focus au chargement de la page. Pour un même document, seul un élément de formulaire peut avoir l'attribut `autofocus` activé.
- {{htmlattrdef("disabled")}}
  - : Cet attribut booléen indique que l'utilisateur ne peut pas intéragir avec le contrôle. Si cet attribut n'est pas utilisé, le contrôle héritera de l'état paramétré selon son conteneur (par exemple, via son élément parent {{HTMLElement("fieldset")}}. Si aucun élément parent n'a l'attribut `disabled` activé, le contrôle sera actif.
- {{htmlattrdef("form")}}
  - : Cet attribut sert de référence au formulaire auquel est associé cet élément. Si cet attribut est utilisé, sa valeur doit être l'identifiant d'un élément {{HTMLElement("form")}} du même document. Cet attribut permet de placer des éléments n'importe où dans le document et pas nécessairement comme descendants d'un formulaire.
- {{htmlattrdef("multiple")}}
  - : Cet attribut booléen indique qu'on peut sélectionner plusieurs options parmi celles offertes dans le contrôle. Par défaut, si cet attribut n'est pas utilisé, seule une option peut être sélectionnée.
- {{htmlattrdef("name")}}
  - : Le nom associé au contrôle.
- {{htmlattrdef("required")}}
  - : Un attribut booléen qui indique qu'une option dont la valeur est une chaîne de caractères non-vide doit être sélectionnée.
- {{htmlattrdef("size")}}
  - : Si le contrôle est affichée comme une liste déroulante, cet attribut indique le nombre de lignes qui doivent être visibles à l'écran en même temps. On notera que les navigateurs ne sont pas obligés de présenter un élément ` <select``> ` sous la forme d'une liste déroulante. La valeur par défaut de cet attribut est 0 (cf. notes de compatibilité ci-après).

## Mise en forme avec CSS

Il est communément admis que l'élément `<select>` est difficilement mis en forme avec CSS. Certains aspects de l'élément, [son modèle de boîte](/fr/docs/Apprendre/CSS/Introduction_à_CSS/Le_modèle_de_boîte), [la police utilisée](/fr/docs/Web/CSS/CSS_Fonts) ou encore l'apparence ({{cssxref("appearance")}}), peuvent être modifiés.

Toutefois, ces propriétés peuvent fournir des résultats incohérents entre les différents navigateurs et il peut être difficile d'aligner différents contrôles sur une colonne.Aussi, si la structure interne de cet élément est trop complexe, on pourra créer un tel contrôle en utilisant des éléments non sémantiques, du code JavaScript et WAI-ARIA afin de décrire la sémantique du contrôle.

Pour plus d'informations sur la mise en forme de `<select>` :

- [Mettre en forme les formulaires HTML](/fr/docs/Web/Guide/HTML/Formulaires/Apparence_des_formulaires_HTML)
- [Mise en forme avancée des formulaires HTML](/fr/docs/Web/Guide/HTML/Formulaires/Advanced_styling_for_HTML_forms)

## Exemples

### Exemple basique

#### HTML

```html
<!-- C'est la deuxième valeur -->
<!-- qui sera initialement sélectionnée -->
<select id="monselect">
  <option value="valeur1">Valeur 1</option>
  <option value="valeur2" selected>Valeur 2</option>
  <option value="valeur3">Valeur 3</option>
</select>
```

#### Résultat

{{EmbedLiveSample("Exemple_basique","100%","150")}}

### Exemple multi-selection

L'exemple qui suit est légèrement plus complexe et illustre certaines fonctionnalités qui peuvent être utilisées avec un élément `<select>` :

```html
<label>Veuillez choisir un ou plusieurs animaux :
  <select name="pets" multiple size="4">
    <optgroup label="Animaux à 4-jambes">
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

Cet exemple n'est pas disponible de façon interactive (le moteur de MDN supprime l'attribut `multiple` lors de l'affichage de la page) mais vous pouvez voir [l'exemple sur GitHub](https://mdn.github.io/learning-area/html/forms/select-example/select-multiple.html).

Vous pourrez voir que :

- Plusieurs options peuvent être sélectionnées grâce à l'attribut `multiple`.
- L'attribut `size` permet d'afficher uniquement 4 lignes simultanément et qu'il faut faire défiler le contenu.
- Les éléments `<optgroup>` ont été utilisés pour diviser les choix en différents groupes. Cela applique un effet simplement visuel (avec le nom en gras et les options indentées).
- Le choix "Hamster" est présent avec l'attribut `disabled` et ne peut donc pas être sélectionné.

> **Note :** Sur un ordinateur de bureau, on pourra maintenir les touches <kbd>Ctrl</kbd>, <kbd>Command</kbd>, ou <kbd>Shift</kbd> en cliquant afin de sélectionner/déselectionner plusieurs options.

### Sélectionner plusieurs options

Sur un ordinateur de bureau, il existe différentes façons de sélectionner plusieurs options pour un élément `<select>` utilisant un attribut `multiple`.

Pour les personnes qui utilisent la souris, il est possible de maintenir les touches <kbd>Ctrl</kbd>, <kbd>Command</kbd> ou <kbd>Shift</kbd> (selon le système d'exploitation utilisé) et de cliquer sur les différentes options afin de les sélectionner/déselectionner.

> **Attention :** Les moyens décrits ci-après pour sélectionner des options qui ne sont pas contigües semblent ne fonctionner qu'avec Firefox. On notera également que sur macOS, les raccourcis <kbd>Ctrl</kbd> + <kbd>Bas</kbd> et <kbd>Ctrl</kbd> + <kbd>Haut</kbd> sont utilisées par défaut par le système d'exploitation et qu'il faut les désactiver si on souhaite qu'ils fonctionnent dans le navigateurs.

Les utilisateurs du clavier pourront sélectionner des options contigües de la façon suivante :

- Placer le focus sur l'élément `<select>` (avec la touche

  <kbd>Tab</kbd>

  par exemple).

- Sélectionner une option en haut ou en bas de l'intervalle en se déplaçant avec les touches

  <kbd>Haut</kbd>

  et

  <kbd>Bas</kbd>

  .

- Maintenir la touche

  <kbd>Shift</kbd>

  puis utiliser les touches

  <kbd>Haut</kbd>

  et

  <kbd>Bas</kbd>

  pour augmenter ou réduire le nombre d'options sélectionnées.

Les utilisateurs du clavier pourront sélectionner des options non-contigües de la façon suivante :

- Placer le focus sur l'élément `<select>` (avec la touche

  <kbd>Tab</kbd>

  par exemple).

- Maintenir la touche

  <kbd>Ctrl</kbd>

  puis utiliser les touches

  <kbd>Haut</kbd>

  et

  <kbd>Bas</kbd>

  pour modifier le focus sur l'option qu'on souhaite choisir ou rejeter. L'option avec le focus sera entourée par un contour en pointillé.

- Appuyer sur

  <kbd>Espace</kbd>

  pour sélectionner/déselectionner les options avec le focus et ainsi de suite pour les différentes options.

## Résumé technique

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/fr/docs/Web/HTML/Catégorie_de_contenu"
          >Catégories de contenu</a
        >
      </th>
      <td>
        <a href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_de_flux"
          >Contenu de flux</a
        >,
        <a href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_phrasé"
          >contenu phrasé</a
        >,
        <a href="/fr/docs/Web/HTML/Cat%C3%A9gorie_de_contenu#Contenu_interactif"
          >contenu interactif</a
        >,
        <a
          href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_associé_aux_formulaires"
          >contenu de formulaire</a
        >
        (listé, étiquetable, réinitialisable, qui peut être envoyé).
      </td>
    </tr>
    <tr>
      <th scope="row">Contenu autorisé</th>
      <td>
        Zéro ou plusieurs éléments {{HTMLElement("option")}} ou
        {{HTMLElement("optgroup")}}.
      </td>
    </tr>
    <tr>
      <th scope="row">Omission de balises</th>
      <td>{{no_tag_omission}}</td>
    </tr>
    <tr>
      <th scope="row">Parents autorisés</th>
      <td>
        Tout élément qui accepte du
        <a href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_phrasé"
          >contenu phrasé</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Rôles ARIA autorisé</th>
      <td>{{ARIARole("menu")}}</td>
    </tr>
    <tr>
      <th scope="row">Interface DOM</th>
      <td>{{domxref("HTMLSelectElement")}}</td>
    </tr>
  </tbody>
</table>

## Spécifications

| Spécification                                                                                            | État                             | Commentaires |
| -------------------------------------------------------------------------------------------------------- | -------------------------------- | ------------ |
| {{SpecName('HTML WHATWG', 'forms.html#the-select-element', '&lt;select&gt;')}} | {{Spec2('HTML WHATWG')}} |              |
| {{SpecName('HTML5 W3C', 'forms.html#the-select-element', '&lt;select&gt;')}}     | {{Spec2('HTML5 W3C')}}     |              |
| {{SpecName('HTML4.01', 'interact/forms.html#h-17.6', '&lt;select&gt;')}}         | {{Spec2('HTML4.01')}}     |              |

## Compatibilité des navigateurs

{{Compat("html.elements.select")}}

## Voir aussi

- Les autres éléments relatifs aux formulaires : {{HTMLElement("form")}}, {{HTMLElement("legend")}}, {{HTMLElement("label")}}, {{HTMLElement("button")}}, {{HTMLElement("option")}}, {{HTMLElement("datalist")}}, {{HTMLElement("optgroup")}}, {{HTMLElement("fieldset")}}, {{HTMLElement("textarea")}}, {{HTMLElement("keygen")}}, {{HTMLElement("input")}}, {{HTMLElement("output")}}, {{HTMLElement("progress")}} et {{HTMLElement("meter")}}
- Les évènements déclenchés par `<select>` : [`input`](/fr/docs/Web/Events/input), [`change`](/fr/docs/Web/Events/change)
