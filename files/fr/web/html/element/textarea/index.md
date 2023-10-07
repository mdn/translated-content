---
title: <textarea>
slug: Web/HTML/Element/textarea
---

{{HTMLSidebar}}

L'élément HTML **`<textarea>`** représente un contrôle qui permet d'éditer du texte sur plusieurs lignes.

{{EmbedInteractiveExample("pages/tabbed/textarea.html", "tabbed-standard")}}

Dans les exemples ci-avant, on peut voir plusieurs fonctionnalités de `<textarea>`. Le premier exemple illustre l'utilisation la plus simple avec seul un attribut `id` qui permet d'associer l'élément `<textarea>` avec un élément {{HTMLElement("label")}} à des fins d'accessibilité ainsi qu'un attribut `name` qui permet de nommer la donnée qui sera envoyée au serveur lors de l'envoi du formulaire.

Le deuxième exemple détaille des fonctionnalités plus complexes :

- Les attributs `rows` et `cols` permettent de définir la taille exacte qui doit être occupée par l'élément `<textarea>`. Les navigateurs pouvant être différents, c'est une bonne idée que d'utiliser ces attributs pour garantir une certaine homogénéité.
- `maxlength` définit le nombre maximal de caractères qui peuvent être saisis dans l'élément `<textarea>`. Il est également possible de définir une taile minimale avec l'attribut `minlength` et d'utiliser l'attribut `required` afin de bloquer l'envoi du formulaire si aucune valeur n'est saisie. Cela permet une validation basique (on ne peut pas utiliser ici d'expressions rationnelles comme le permet l'attribut `pattern` sur les éléments {{HTMLElement("input")}}).
- `wrap` indique la gestion des retours à la ligne et la façon d'afficher le texte saisi lorsque celui-ci atteint le bord de la zone du `<textarea>`
- Pour prévoir un contenu par défaut, il faut inscrire le texte entre les balises de l'élément. `<textarea>` ne prend pas en charge l'attribut `value`.

L'élément `<textarea>` gère plusieurs attributs utilisés par les éléments `<input>` : `autocomplete`, `autofocus`, `disabled`, `placeholder`, `readonly` et `required`.

## Attributs

À l'instar des autres éléments HTML, cet élément inclut [les attributs universels](/fr/docs/Web/HTML/Attributs_universels).

- `autocapitalize` {{non-standard_inline}}

  - : Cet attribut est non standard, pris en charge par WebKit sur iOS, et contrôle la façon dont le texte saisi doit automatiquement être mis en majuscules. Les valeurs disponibles spour iOS 5 et les versions supérieures sont :

    - `none` : la mise en majuscules est complètement désactivée
    - `sentences` : la première lettre des phrases est automatiquement mise en majuscule
    - `words` : la première lettre de chaque mot est automatiquement mise en majuscule
    - `characters` : tous les caractères sont transformés en majuscules
    - `on` : {{deprecated_inline}} valeur dépréciée depuis iOS 5 et qui permettait d'activer la mise en majuscule automatique.
    - `off` : {{deprecated_inline}} valeur dépréciée depuis iOS 5 et qui permettait de désactiver la mise en majuscule automatique.

- `autocomplete`

  - : Cet attribut indique si la valeur saisie doit automatiquement être complétée par le navigateur. Cet attribut à valeur contrainte peut prendre l'une de ces deux valeurs :

    - `off` : l'utilisateur doit explicitement saisir une valeur dans ce champ à chaque fois qu'il l'utilise ou le document fournit son propre mécanisme d'auto-complétion. Le navigateur ne complète pas le texte saisi.
    - `on` : le navigateur peut compléter la saisie de l'utilisateur en fonction de ce que l'utilisateur a déjà saisi précédemment sur ce champ.

    Si l'attribut `autocomplete` n'est pas indiqué à même l'élément `<textarea>`, alors le navigateur utilise la valeur d'`autocomplete` pour le formulaire rattaché à cet élément (c'est-à-dire son élément ancêtre `<form>` ou le formulaire correspond à l'identifiant fourni par l'attribut `form`). Pour plus d'informations, se référer à la documentation de l'attribut [`autocomplete`](/fr/docs/Web/HTML/Element/form#autocomplete) de l'élément {{HTMLElement("form")}}.

- `autofocus`
  - : Cet attribut permet d'indiquer que ce contrôle doit recevoir le focus au chargement de la page. Seul un élément de formulaire au sein d'un document peut avoir cet attribut déclaré.
- `cols`
  - : La largeur visible du contrôle de saisie, exprimée en largeur moyenne de caractères. La valeur utilisée doit être un entier positif. La valeur par défaut de cet attribut est 20.
- `disabled`
  - : Cet attribut booléen indique que le contrôle est désactivé et que l'utilisateur ne peut pas interagir avec ce contrôle. Si cet attribut n'est pas utilisé, le contrôle héritera de l'état de son élément parent (par exemple de son éventuel élément parent {{HTMLElement("fieldset")}}). S'il n'existe pas d'élément englobant pour lequel l'attribut `disabled` est utilisé, le contrôle est alors actif.
- `form`
  - : L'élément de formulaire auquel l'élément `<textarea>` est rattaché. La valeur de cet attribut doit être l'identifiant (la valeur de l'attribut `id`) d'un élément {{HTMLElement("form")}} du même document. Si cet attribut n'est pas défini, l'élément `<textarea>` doit être un descendant d'un élément `<form>`. Cet attribut permet notamment de placer des éléments `<textarea>` où qu'on le veuille dans le document et pas uniquement comme des descendants des éléments de formulaire.
- `maxlength`
  - : Le nombre maximum de caractères, exprimé en codets Unicode, que l'utilisateur peut saisir. Si cet attribut n'est pas utilisé, l'utilisateur peut saisir un nombre illimité de caractères..
- `minlength`
  - : Le nombre minimal que l'utilisateur doit saisir dans le champ, exprimé en codets Unicode.
- `name`
  - : Le nom associé au contrôle.
- `placeholder`
  - : Une indication fournie à l'utilisateur sur la valeur qui peut être saisie dans le contrôle. Les retours à la ligne contenus dans la valeur de l'attribut doivent être interprétés comme des sauts de ligne lorsque l'indication est affichée pour l'utilisateur. Attention, les indications servent uniquement à indiquer le type de donnée qui peut être saisi dans un champ, elles n'ont pas à remplacer un élément {{HTMLElement("label")}}. (cf. {{HTMLElement("input")}} pour plus d'explications).
- `readonly`
  - : Cet attribut booléen indique que l'utilisateur ne peut pas modifier la valeur du contrôle. À la différence de l'attribut `disabled`, `readonly` n'empêche pas de cliquer ou de sélectionner le contrôle. La valeur d'un contrôle en lecture seule est tout de même envoyé avec les données du formulaire.
- `required`
  - : Cet attribut indique que l'utilisateur doit nécessairement saisir une valeur afin de pouvoir envoyer le formulaire.
- `rows`
  - : Le nombre de lignes de texte visibles pour le contrôle.
- `spellcheck`
  - : Lorsque cet attribut vaut `true`, cela indique que la vérification orthographique et grammaticale doit être activée. La valeur `default` indique que l'élément doit suivre le comportement par défaut, éventuellement basé sur la valeur de l'attribut `spellcheck` de l'élément parent. Si cet attribut vaut `false`, le texte de l'élément ne doit pas être contrôlé.
- `wrap`

  - : Cet attribut à valeur contrainte indique la façon dont les retours à la ligne automatiques sont utilisés. Les valeurs possibles pour cet attribut sont :

    - `hard` : le navigateur insère automatiquement des sauts de ligne (CR+LF) afin que chaque ligne ne soit pas plus longue que la largeur du contrôle. L'attribut `cols` doit alors être défini.
    - `soft` : le navigateur s'assure que tous les sauts de lignes soient représentés par une paire CR+LF mais il n'ajoute pas de sauts de ligne supplémentaires. C'est la valeur par défaut pour cet attribut.
    - `off` : {{non-standard_inline}}, proche de `soft` mais on a la règle CSS `white-space: pre` et les lignes qui dépassent `cols` ne sont pas ramenées à la ligne. Si elles dépassent, on peut faire défiler la zone d'édition horizontalement.

## Interaction avec CSS

Pour CSS, un élément `<textarea>` est [un élément remplacé](/fr/docs/Web/CSS/Élément_remplacé) qui possède des dimensions intrinsèques (comme une image matricielle). La valeur initiale de la propriété {{cssxref("display")}} pour cet élément est `block`.

[Le guide sur la mise en forme des formulaires HTML](/fr/docs/Web/Guide/HTML/Formulaires/Apparence_des_formulaires_HTML) fournit différentes indications pour mettre en forme les éléments `<textarea>`.

### Incohérences quant à la ligne de base

La spécification HTML ne définit pas l'emplacement de la ligne de base pour un élément `<textarea>`. Aussi, les différents navigateurs utilisent différentes positions. Pour Gecko, la ligne de base d'un élément `<textarea>` est définie sur la ligne de base de la première ligne du texte de `<textarea>`. Pour un autre navigateur, elle pourrait être définie par rapport au bas de la boîte de l'élément `<textarea>`. Pour ces raisons, on évitera d'utiliser {{cssxref("vertical-align")}}`: baseline` sur cet élément car le comportement serait imprévisible.

### Contrôler le caractère redimensionnable

Dans la plupart des navigateurs, il est possible de redimensionner les éléments `<textarea>` grâce au coin inférieur droit. Pour désactiver ce redimensionnement, on peut utiliser la propriété CSS {{cssxref("resize")}} avec la valeur `none` :

```css
textarea {
  resize: none;
}
```

### Mettre en forme les valeurs valides et invalides

Les valeurs valides et invalides saisies dans un élément `<textarea>` (par exemple celles qui ne respectent pas le nombre de caractères défini par `minlength` et `maxlength` ou quand la valeur est absente alors que l'attribut `required` est présent) peuvent être mise en forme grâce aux pseudo-classes {{cssxref(":valid")}} et {{cssxref(":invalid")}}. Ainsi, on peut définir une bordure différente selon que la valeur saisie est valide ou invalide :

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

L'exemple qui suit illustre une configuration simple avec un nombre donné de lignes et de colonnes et affiche un contenu par défaut.

```html
<textarea name="textarea" rows="10" cols="50">Vous pouvez écrire ici.</textarea>
```

#### Résultat

{{EmbedLiveSample('','600','150')}}

### Longueur minimale et longueur maximale

Cet exemple fixe un nombre de caractère minimal et maximal. Vous pouvez essayer de saisir un texte de moins de 10 caractères ou de plus de 30 caractères.

```html
<textarea name="textarea" rows="5" cols="30" minlength="10" maxlength="30">
Vous pouvez écrire ici.</textarea
>
```

#### Résultat

{{EmbedLiveSample('','600','80')}}

On notera que `minlength` n'empêche pas de retirer des caractères afin de réduire le texte en dessous de la longueur minimale. En revanche, cela rend la valeur `<textarea>` invalide. On notera aussi que, même lorsque `minlength` est défini, une valeur vide est considérée valide à moins que `required` soit présent.

### Indication

Dans cet exemple, on utilise l'attribut `placeholder` afin d'afficher une indication qui disparaît dès qu'on saisit quelque chose dans la zone.

```html
<textarea
  name="textarea"
  rows="5"
  cols="30"
  placeholder="Voici une indication."></textarea>
```

#### Résultat

{{EmbedLiveSample('','600','80')}}

> **Note :** Les indications ne remplacent pas les éléments {{HTMLElement("label")}}.

### Lecture seule et contrôle désactivé

Cet exemple affiche deux éléments `<textarea>` : le premier est désactivé avec `disabled` et le second est en lecture seule avec `readonly`. Vous pouvez les manipuler pour voir les différences : pour le premier, on ne peut pas sélectionné son contenu et la valeur n'est pas envoyée avec le formulaire ; pour le second, le contenu peut être sélectionné et la valeur est envoyée, il est uniquement impossible d'éditer le contenu.

```html
<textarea name="textarea" rows="5" cols="30" disabled>
Je suis désactivé</textarea
>
<textarea name="textarea" rows="5" cols="30" readonly>
Je suis en lecture seule</textarea
>
```

#### Résultat

{{EmbedLiveSample('','600','80')}}

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
        <a href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_interactif"
          >contenu interactif</a
        >,
        <a
          href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_associé_aux_formulaires"
          >contenu de formulaire (énuméré, étiquetable, réinitialisable,
          envoyable)</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Contenu autorisé</th>
      <td>Du texte.</td>
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
      <th scope="row">Rôles ARIA autorisés</th>
      <td>Aucun.</td>
    </tr>
    <tr>
      <th scope="row">Interface DOM</th>
      <td>{{domxref("HTMLTextAreaElement")}}</td>
    </tr>
  </tbody>
</table>

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les autres éléments relatifs aux formulaires : {{HTMLElement("form")}}, {{HTMLElement("button")}}, {{HTMLElement("datalist")}}, {{HTMLElement("legend")}}, {{HTMLElement("label")}}, {{HTMLElement("select")}}, {{HTMLElement("optgroup")}}, {{HTMLElement("option")}}, {{HTMLElement("input")}}, {{HTMLElement("keygen")}}, {{HTMLElement("fieldset")}}, {{HTMLElement("output")}}, {{HTMLElement("progress")}} et {{HTMLElement("meter")}}.
