---
title: "<textarea> : l'élément de zone de texte"
slug: Web/HTML/Reference/Elements/textarea
l10n:
  sourceCommit: f29e825161ee6776a395cd846f8570686f784341
---

L'élément [HTML](/fr/docs/Web/HTML) **`<textarea>`** représente un contrôle d'édition de texte brut sur plusieurs lignes, utile lorsque vous souhaitez permettre aux utilisateur·ice·s de saisir une quantité importante de texte libre, par exemple un commentaire sur un avis ou un formulaire de retour.

{{InteractiveExample("Démonstration HTML&nbsp;: &lt;textarea&gt;", "tabbed-standard")}}

```html interactive-example
<label for="story">Racontez-nous votre histoire&nbsp;:</label>

<textarea id="story" name="story" rows="5" cols="33">
C'était une nuit sombre et orageuse...
</textarea>
```

```css interactive-example
label,
textarea {
  font-size: 0.8rem;
  letter-spacing: 1px;
}

textarea {
  padding: 10px;
  max-width: 100%;
  line-height: 1.5;
  border-radius: 5px;
  border: 1px solid #cccccc;
  box-shadow: 1px 1px 1px #999999;
}

label {
  display: block;
  margin-bottom: 10px;
}
```

L'exemple ci-dessus met en avant plusieurs fonctionnalités de `<textarea>`&nbsp;:

- Un attribut `id` pour permettre d'associer l'élément `<textarea>` à un élément {{HTMLElement("label")}} à des fins d'accessibilité
- Un attribut `name` pour définir le nom de la donnée associée envoyée au serveur lors de la soumission du formulaire
- Les attributs `rows` et `cols` pour définir une taille exacte à occuper par l'élément `<textarea>`. Il est conseillé de les utiliser pour garantir une certaine homogénéité, car les valeurs par défaut des navigateurs peuvent différer
- L'élément `<textarea>` définit son contenu différemment selon le contexte HTML ou JavaScript&nbsp;:
  - En HTML, le contenu initial d'un `<textarea>` est défini entre ses balises ouvrante et fermante, et non via un attribut `value`
  - En JavaScript, les éléments `<textarea>` possèdent une propriété [`value`](/fr/docs/Web/API/HTMLTextAreaElement/value) qui permet d'obtenir ou de définir le contenu courant, et [`defaultValue`](/fr/docs/Web/API/HTMLTextAreaElement/defaultValue) pour obtenir ou définir la valeur initiale (équivalent à l'accès au contenu textuel de l'élément HTML)

L'élément `<textarea>` accepte également plusieurs attributs communs aux éléments de formulaire `<input>`, tels que `autocapitalize`, `autocomplete`, `autofocus`, `disabled`, `placeholder`, `readonly` et `required`.

## Attributs

Cet élément inclut les [attributs universels](/fr/docs/Web/HTML/Reference/Global_attributes).

- [`autocapitalize`](/fr/docs/Web/HTML/Reference/Global_attributes/autocapitalize)
  - : Contrôle si le texte saisi est automatiquement mis en majuscules et, le cas échéant, de quelle manière.

- [`autocomplete`](/fr/docs/Web/HTML/Reference/Attributes/autocomplete)
  - : Cet attribut indique si la valeur saisie doit automatiquement être complétée par le navigateur. Cet attribut à valeur contrainte peut prendre l'une de ces deux valeurs :
    - `off` : l'utilisateur·ice doit explicitement saisir une valeur dans ce champ à chaque fois qu'il l'utilise ou le document fournit son propre mécanisme d'auto-complétion. Le navigateur ne complète pas le texte saisi.
    - `on` : le navigateur peut compléter la saisie de l'utilisateur·ice en fonction de ce que l'utilisateur·ice a déjà saisi précédemment sur ce champ.
    - [`<token-list>`](/fr/docs/Web/HTML/Reference/Attributes/autocomplete#jetons_de_la_liste_de_jetons)&nbsp;: Un ensemble ordonné de jetons de détails de remplissage automatique séparés par des espaces, précédé éventuellement d'un jeton de section, d'un jeton de groupe de facturation ou d'expédition, et/ou d'un jeton identifiant le type de destinataire.

    Les éléments `<textarea>` qui ne définissent pas l'attribut `autocomplete` héritent du statut `on` ou `off` défini sur le propriétaire du formulaire du `<textarea>`. Le propriétaire du formulaire est soit l'élément {{HTMLElement("form")}} dont cet élément `<textarea>` est un descendant, soit l'élément de formulaire dont l'`id` est défini par l'attribut `form` de l'élément de saisie. Pour plus d'informations, consultez l'attribut [`autocomplete`](/fr/docs/Web/HTML/Reference/Elements/form#autocomplete) dans {{HTMLElement("form")}}.

- [`autocorrect`](/fr/docs/Web/HTML/Reference/Global_attributes/autocorrect)
  - : Contrôle si la correction orthographique automatique et le traitement du texte sont activés pendant que l'utilisateur·ice édite ce `textarea`.
    Les valeurs autorisées sont&nbsp;:
    - `on`
      - : Active la correction orthographique automatique et les substitutions de texte.
    - `off`
      - : Désactive la correction orthographique automatique et les substitutions de texte.

- [`autofocus`](/fr/docs/Web/HTML/Reference/Global_attributes/autofocus)
  - : Cet attribut booléen permet d'indiquer que ce contrôle doit recevoir la sélection au chargement de la page. Seul un élément de formulaire au sein d'un document peut avoir cet attribut déclaré.
- `cols`
  - : La largeur visible du contrôle de saisie, exprimée en largeur moyenne de caractères. La valeur utilisée doit être un entier positif. La valeur par défaut de cet attribut est 20.
- [`dirname`](/fr/docs/Web/HTML/Reference/Attributes/dirname)
  - : Cet attribut est utilisé pour indiquer la direction du texte du contenu de l'élément.
    Pour plus d'informations, consultez l'attribut [`dirname`](/fr/docs/Web/HTML/Reference/Attributes/dirname).
- [`disabled`](/fr/docs/Web/HTML/Reference/Attributes/disabled)
  - : Cet attribut booléen indique que le contrôle est désactivé et que l'utilisateur·ice ne peut pas interagir avec ce contrôle. Si cet attribut n'est pas utilisé, le contrôle héritera de l'état de son élément parent (par exemple de son éventuel élément parent {{HTMLElement("fieldset")}}). S'il n'existe pas d'élément englobant pour lequel l'attribut `disabled` est utilisé, le contrôle est alors actif.
- [`form`](/fr/docs/Web/HTML/Reference/Attributes/form)
  - : L'élément de formulaire auquel l'élément `<textarea>` est rattaché. La valeur de cet attribut doit être l'identifiant (la valeur de l'attribut `id`) d'un élément {{HTMLElement("form")}} du même document. Si cet attribut n'est pas défini, l'élément `<textarea>` doit être un descendant d'un élément `<form>`. Cet attribut permet notamment de placer des éléments `<textarea>` où qu'on le veuille dans le document et pas uniquement comme des descendants des éléments de formulaire.
- [`maxlength`](/fr/docs/Web/HTML/Reference/Attributes/maxlength)
  - : La longueur maximale de la chaîne de caractères (mesurée en {{Glossary("UTF-16", "unités de code UTF-16")}}) que l'utilisateur·ice peut saisir. Si cette valeur n'est pas définie, l'utilisateur·ice peut saisir un nombre illimité de caractères.
- [`minlength`](/fr/docs/Web/HTML/Reference/Attributes/minlength)
  - : La longueur minimale de la chaîne de caractères (mesurée en {{Glossary("UTF-16", "unités de code UTF-16")}}) requise que l'utilisateur·ice doit saisir.
- `name`
  - : Le nom associé au contrôle.
- `placeholder`
  - : Une indication à l'utilisateur·ice sur ce qui peut être saisi dans le contrôle. Les retours chariot ou sauts de ligne dans le texte de l'indication doivent être traités comme des sauts de ligne lors de l'affichage de l'indication.

    > [!NOTE]
    > Les indications doivent uniquement servir à montrer un exemple du type de donnée à saisir dans un formulaire&nbsp;; elles ne sont _pas_ un substitut à un véritable élément {{HTMLElement("label")}} associé au champ. Voir [les libellés de `<input>`](/fr/docs/Web/HTML/Reference/Elements/input#libellés) pour une explication complète.

- [`readonly`](/fr/docs/Web/HTML/Reference/Attributes/readonly)
  - : Cet attribut booléen indique que l'utilisateur·ice ne peut pas modifier la valeur du contrôle. À la différence de l'attribut `disabled`, `readonly` n'empêche pas de cliquer ou de sélectionner le contrôle. La valeur d'un contrôle en lecture seule est tout de même envoyé avec les données du formulaire.
- [`required`](/fr/docs/Web/HTML/Reference/Attributes/required)
  - : Cet attribut indique que l'utilisateur·ice doit nécessairement saisir une valeur afin de pouvoir envoyer le formulaire.
- `rows`
  - : Le nombre de lignes de texte visibles pour le contrôle.
- [`spellcheck`](/fr/docs/Web/HTML/Reference/Global_attributes/spellcheck)
  - : Définit si le `<textarea>` est soumis à la vérification orthographique par le navigateur ou le système d'exploitation sous-jacent. La valeur peut être&nbsp;:
    - `true`&nbsp;: Indique que l'élément doit avoir son orthographe et sa grammaire vérifiées.
    - `default`&nbsp;: Indique que l'élément doit agir selon un comportement par défaut, éventuellement basé sur la propre valeur `spellcheck` de l'élément parent.
    - `false`&nbsp;: Indique que l'élément ne doit pas être soumis à la vérification orthographique.

- `wrap`
  - : Cet attribut à valeur contrainte indique la façon dont les retours à la ligne automatiques sont utilisés. Les valeurs possibles pour cet attribut sont&nbsp;:
    - `hard`&nbsp;: le navigateur insère automatiquement des sauts de ligne (CR+LF) afin que chaque ligne ne soit pas plus longue que la largeur du contrôle. L'attribut `cols` doit alors être défini.
    - `soft`&nbsp;: le navigateur s'assure que tous les sauts de lignes soient représentés par une paire CR+LF mais il n'ajoute pas de sauts de ligne supplémentaires. C'est la valeur par défaut pour cet attribut.
    - `off` {{Non-standard_Inline}}&nbsp;: proche de `soft` mais on a la règle CSS `white-space: pre` et les lignes qui dépassent `cols` ne sont pas ramenées à la ligne. Si elles dépassent, on peut faire défiler la zone d'édition horizontalement.

    Si cet attribut n'est pas défini, `soft` est sa valeur par défaut.

## Mise en forme avec CSS

`<textarea>` est un {{Glossary("replaced elements", "élément remplacé")}} — il possède des dimensions intrinsèques, comme une image matricielle. Par défaut, sa valeur {{CSSxRef("display")}} est `inline-block`. Comparé aux autres éléments de formulaire, il est relativement facile à mettre en forme, avec son modèle de boîte, ses polices, son jeu de couleurs, etc. étant facilement manipulables avec du CSS classique.

[Mise en forme des formulaires HTML](/fr/docs/Learn_web_development/Extensions/Forms/Styling_web_forms) fournit des conseils utiles pour la mise en forme des `<textarea>`.

### Incohérences quant à la ligne de base

La spécification HTML ne définit pas l'emplacement de la ligne de base pour un élément `<textarea>`. Aussi, les différents navigateurs utilisent différentes positions. Pour Gecko, la ligne de base d'un élément `<textarea>` est définie sur la ligne de base de la première ligne du texte de `<textarea>`. Pour un autre navigateur, elle pourrait être définie par rapport au bas de la boîte de l'élément `<textarea>`. Pour ces raisons, on évitera d'utiliser {{CSSxRef("vertical-align", "vertical-align: baseline")}} sur cet élément car le comportement serait imprévisible.

### Contrôler le caractère redimensionnable

Dans la plupart des navigateurs, les `<textarea>` sont redimensionnables — vous remarquerez la poignée de redimensionnement dans le coin droit, qui peut être utilisée pour modifier la taille de l'élément sur la page. Ceci est contrôlé par la propriété CSS {{CSSxRef("resize")}} — le redimensionnement est activé par défaut, mais vous pouvez le désactiver explicitement en utilisant la valeur `none` pour `resize`&nbsp;:

```css
textarea {
  resize: none;
}
```

### Mettre en forme les valeurs valides et invalides

Les valeurs valides et invalides d'un élément `<textarea>` (par exemple, celles qui respectent ou dépassent les limites définies par `minlength`, `maxlength` ou `required`) peuvent être mises en évidence à l'aide des pseudo-classes {{CSSxRef(":valid")}} et {{CSSxRef(":invalid")}}. Par exemple, pour donner à votre textarea une bordure différente selon qu'elle est valide ou invalide&nbsp;:

```css
textarea:invalid {
  border: 2px dashed red;
}

textarea:valid {
  border: 2px solid lime;
}
```

## Exemples

### Exemple simple

L'exemple suivant montre une zone de texte avec un nombre défini de lignes et de colonnes, un contenu par défaut, et des styles CSS qui empêchent les utilisateur·ice·s de redimensionner l'élément au-delà de 500 pixels de large et 130 pixels de haut&nbsp;:

```html
<textarea name="textarea" rows="5" cols="15">Vous pouvez écrire ici.</textarea>
```

```css
textarea {
  max-height: 130px;
  max-width: 500px;
}
```

#### Résultat

{{EmbedLiveSample("Exemple simple")}}

### Longueur minimale et longueur maximale

Cet exemple impose un nombre minimal et maximal de caractères — respectivement 10 et 20. Essayez et observez le résultat.

```html
<textarea name="textarea" rows="5" cols="30" minlength="10" maxlength="20">
Vous pouvez écrire ici.
</textarea>
```

```css
textarea {
  max-height: 130px;
  max-width: 500px;
}
```

#### Résultat

{{EmbedLiveSample("Longueur minimale et longueur maximale")}}

Notez que `minlength` n'empêche pas l'utilisateur·ice de retirer des caractères pour que le nombre saisi soit inférieur au minimum, mais cela rend la valeur saisie dans le `<textarea>` invalide. Notez aussi que même si vous avez défini une valeur `minlength` (3, par exemple), une zone de texte vide est toujours considérée comme valide sauf si l'attribut `required` est également présent.

### Exemple avec `placeholder`

Cet exemple utilise une indication. Remarquez qu'elle disparaît dès que vous commencez à saisir du texte dans la zone.

```html
<textarea
  name="textarea"
  rows="5"
  cols="30"
  placeholder="Voici une indication."></textarea>
```

```css
textarea {
  max-height: 130px;
  max-width: 500px;
}
```

#### Résultat

{{EmbedLiveSample("Exemple avec `placeholder`")}}

> [!NOTE]
> Les indications doivent uniquement servir à montrer un exemple du type de donnée à saisir dans un formulaire&nbsp;; elles ne sont _pas_ un substitut à un véritable élément {{HTMLElement("label")}} associé au champ. Voir [libellés de `<input>`](/fr/docs/Web/HTML/Reference/Elements/input#libellés) pour une explication complète.

### Lecture seule et contrôle désactivé

Cet exemple montre deux `<textarea>` — l'un possède l'attribut [`readonly`](/fr/docs/Web/HTML/Reference/Attributes/readonly) et l'autre l'attribut [`disabled`](/fr/docs/Web/HTML/Reference/Attributes/disabled).
Vous ne pouvez pas modifier le contenu d'aucun des deux éléments, mais celui avec l'attribut `readonly` peut recevoir la sélection et sa valeur est envoyée dans les formulaires.
La valeur de celui avec l'attribut `disabled` n'est pas envoyée et il ne peut pas recevoir la sélection.

```html
<textarea name="textarea" rows="5" cols="30" readonly>
Je suis en lecture seule.
</textarea>
<textarea name="textarea" rows="5" cols="30" disabled>
Je suis désactivé.
</textarea>
```

#### Résultat

{{EmbedLiveSample("Lecture seule et contrôle désactivé", "", 200)}}

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
        >,
        <a href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_interactif"
          >contenu interactif</a
        >,
        <a href="/fr/docs/Web/HTML/Guides/Content_categories#listed_éléments_listés"
          >éléments listés</a
        >,
        <a href="/fr/docs/Web/HTML/Guides/Content_categories#labelable_éléments_étiquetables"
          >éléments étiquetables</a
        >,
        <a href="/fr/docs/Web/HTML/Guides/Content_categories#resettable_éléments_de_ré-initialisation"
          >éléments de ré-initialisation</a
        > et
        <a href="/fr/docs/Web/HTML/Guides/Content_categories#submittable_éléments_participants_à_lenvoi_du_formulaire"
          >éléments participants à l'envoi du formulaire</a
        >
        <a
          href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_associé_aux_formulaires"
          >de contenu de formulaire</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Contenu autorisé</th>
      <td>Du texte.</td>
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
        <code
          ><a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/textbox_role"
            >textbox</a
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
      <td>{{DOMxRef("HTMLTextAreaElement")}}</td>
    </tr>
  </tbody>
</table>

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les autres éléments relatifs aux formulaires&nbsp;:
  - {{ HTMLElement("form")}}
  - {{ HTMLElement("button")}}
  - {{ HTMLElement("datalist")}}
  - {{ HTMLElement("legend")}}
  - {{ HTMLElement("label")}}
  - {{ HTMLElement("select")}}
  - {{ HTMLElement("optgroup")}}
  - {{ HTMLElement("option")}}
  - {{ HTMLElement("input")}}
  - {{ HTMLElement("fieldset")}}
  - {{ HTMLElement("output")}}
  - {{ HTMLElement("progress")}}
  - {{ HTMLElement("meter")}}
