---
title: Les autres contrôles de formulaire
slug: Learn/Forms/Other_form_controls
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Forms/HTML5_input_types","Learn/Forms/Styling_web_forms", "Learn/Forms")}}

Voyons maintenant les fonctionnalités des éléments de formulaire qui ne sont pas des éléments `<input>`. C'est le cas par exemple des listes déroulantes, des champs textes sur plusieurs lignes mais aussi d'autres fonctionnalités comme l'élément [`<output>`](/fr/docs/Web/HTML/Element/output) (croisé dans l'article précédent), et des barres de progression.

<table>
  <tbody>
    <tr>
      <th scope="row">Prérequis&nbsp;:</th>
      <td>
        Notions informatiques de base et une <a href="/fr/docs/Learn/HTML/Introduction_to_HTML">compréhension élémentaire de HTML</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Objectifs&nbsp;:</th>
      <td>
        Comprendre les fonctionnalités des formulaires en dehors des éléments <code>&lt;input&gt;</code> et comment les implémenter l'aide de HTML.
      </td>
    </tr>
  </tbody>
</table>

## Champ texte sur plusieurs lignes

Un champ texte sur plusieurs lignes se crée à l'aide d'un élément [`<textarea>`](/fr/docs/Web/HTML/Element/Textarea) plutôt qu'avec un élément [`<input>`](/fr/docs/Web/HTML/Element/Input).

```html
<textarea cols="30" rows="8"></textarea>
```

Voici le résultat qu'on obtient avec le fragment HTML précédent&nbsp;:

{{EmbedLiveSample("", 120, 190)}}

La différence principale entre un élément `<textarea>` et un champ texte (`<input type="text">`) est qu'il permet de saisir des sauts de lignes (en appuyant sur Entrée) qui seront inclus dans les données envoyées avec le formulaire.

`<textarea>` utilise également une balise fermante et le texte contenu entre ces deux balises sera utilisé comme contenu par défaut. [`<input>`](/fr/docs/Web/HTML/Element/Input) est quant à lui un élément vide sans balise fermante et la valeur par défaut est portée par l'attribut [`value`](/fr/docs/Web/HTML/Element/Input#value).

Bien qu'on puisse mettre n'importe quoi à l'intérieur d'un élément `<textarea>` (y compris d'autres éléments HTML, CSS, et JavaScript), étant donné sa nature, tout le contenu sera affiché à l'écran comme du texte simple (on utilisera [`contenteditable`](/fr/docs/Web/HTML/Global_attributes/contenteditable) sur des éléments qui ne sont pas des contrôles de formulaire pour fournir une API permettant de capturer du contenu riche/complexe plutôt que du texte simple).

Sur le plan visuel, le texte saisi passe à la ligne automatiquement et le contrôle est redimensionnable par défaut. Les navigateurs récents fournissent une zone (généralement dans l'angle inférieur droit du contrôle) qui permet d'augmenter/réduire la taille de la zone de texte.

Les captures suivantes montrent l'aspect par défaut, avec le focus, ou désactivé d'éléments `<textarea>` sur Firefox 71 et Safari 13 sur macOS, et sur Edge 18, Yandex 14, Firefox 71 et Chrome 79 sur Windows 10.

![Aspect par défaut, avec le focus et désactivé pour les éléments 'textarea' sur Firefox 71 et Safari 13 sur macOS, et sur Edge 18, Yandex 14, Firefox et Chrome sur Windows 10.](textarea_basic.png)

> **Note :** Un autre exemple, peut-être plus intéressant, est [celui construit dans le premier article de cette série](https://mdn.github.io/learning-area/html/forms/your-first-HTML-form/first-form-styled.html) ([voir également le code source correspondant](https://github.com/mdn/learning-area/blob/main/html/forms/your-first-HTML-form/first-form-styled.html)).

### Contrôler l'affichage d'un champ multi-ligne

[`<textarea>`](/fr/docs/Web/HTML/Element/Textarea) accepte trois attributs qui contrôlent son aspect visuel&nbsp;:

- [`cols`](/fr/docs/Web/HTML/Element/Textarea#attr-cols)
  - : Indique la largeur visible (le nombre de colonnes de caractères) de la zone de texte. Celle-ci est mesurée en largeur moyenne de caractères. Il s'agit de la largeur initiale, celle-ci pouvant être modifiée lors du redimensionnement manuel ou surchargée avec CSS. La valeur par défaut est 20.
- [`rows`](/fr/docs/Web/HTML/Element/Textarea#attr-rows)
  - : Indique le nombre de lignes visibles de la zone de texte. Il s'agit de la hauteur initiale, celle-ci pouvant être modifiée lors du redimensionnement manuel ou surchargée avec CSS. La valeur par défaut est 2.
- [`wrap`](/fr/docs/Web/HTML/Element/Textarea#attr-wrap)
  - : Indique la façon dont le texte passe à la ligne automatiquement. Les valeurs sont&nbsp;:
    - `soft` (la valeur par défaut)
      - : Le texte affiché dans le navigateur passe à la ligne automatiquement, mais la valeur envoyée par le formulaire ne contient pas de sauts de ligne automatiques.
    - `hard`
      - : Lorsque cette valeur est utilisée, l'attribut `cols` doit être précisé. Cette valeur indique le texte affiché _et_ la valeur envoyée contiennent des sauts de ligne automatique.
    - `off`
      - : Il n'y a pas de passage automatique à la ligne.

### Contrôler le redimensionnement de la zone de texte

La capacité à redimensionner un élément `<textarea>` se contrôle grâce à la propriété CSS `resize`. Les valeurs possibles sont&nbsp;:

- `both`
  - : C'est la valeur par défaut. Le contrôle peut être redimensionné sur l'axe horizontal et l'axe vertical.
- `horizontal`
  - : Le redimensionnement est uniquement possible sur l'axe horizontal.
- `vertical`
  - : Le redimensionnement est uniquement possible sur l'axe vertical.
- `none`
  - : Aucun redimensionnement n'est possible.
- `block` et `inline`
  - : Ces valeurs logiques permettent le redimensionnement selon la direction de bloc ou la direction de ligne (qui varie selon la directionnalité du texte, voir [Gérer les différentes directions du texte](/fr/docs/Learn/CSS/Building_blocks/Handling_different_text_directions) pour en savoir plus).

Vous pouvez manipuler l'exemple interactif situé en haut de la page de référence pour [`resize`](/fr/docs/Web/CSS/resize) afin de voir comment ces valeurs fonctionnent.

## Contrôles de listes déroulantes

Les contrôles de listes déroulantes sont un outil pratique pour permettre de sélectionner une valeur parmi différentes options, sans occuper trop d'espace sur l'interface utilisateur. HTML dispose de deux formes de listes déroulantes&nbsp;: **la boîte de sélection avec `<select>`**, et **la boîte d'autocomplétion avec `<datalist>`**. Dans les deux cas, l'interaction est la même, une fois que le contrôle est activé, le navigateur affiche une liste de valeurs parmi lesquelles la personne peut choisir.

> **Note :** Vous pouvez trouver des exemples des différents types de contrôles correspondants sur GitHub sur [`drop-down-content.html`](https://github.com/mdn/learning-area/blob/main/html/forms/native-form-widgets/drop-down-content.html) ([voir le résultat de la démonstration](https://mdn.github.io/learning-area/html/forms/native-form-widgets/drop-down-content.html)).

### Boîte de sélection

On crée une boîte de sélection à l'aide d'un élément [`<select>`](/fr/docs/Web/HTML/Element/select) qui contient un ou plusieurs éléments [`<option>`](/fr/docs/Web/HTML/Element/Option) comme enfants, chacun de ces derniers fournissant une valeur possible.

#### Exemple simple

```html
<select id="simple" name="simple">
  <option>Banane</option>
  <option selected>Cerise</option>
  <option>Citron</option>
</select>
```

{{EmbedLiveSample("", 120, 120)}}

Si une valeur par défaut est nécessaire, on pourra l'indiquer à l'aide de l'attribut [`selected`](/fr/docs/Web/HTML/Element/Option#attr-selected) sur l'élément [`<option>`](/fr/docs/Web/HTML/Element/Option) voulu, l'option sera alors présélectionnée au chargement de la page.

#### Utiliser `<optgroup>`

Les éléments [`<option>`](/fr/docs/Web/HTML/Element/Option) peuvent être imbriqués dans des éléments [`<optgroup>`](/fr/docs/Web/HTML/Element/Optgroup) pour créer des groupes de valeurs distincts&nbsp;:

```html
<select id="groups" name="groups">
  <optgroup label="fruits">
    <option>Banane</option>
    <option selected>Cerise</option>
    <option>Citron</option>
  </optgroup>
  <optgroup label="legumes">
    <option>Carotte</option>
    <option>Aubergine</option>
    <option>Pomme de terre</option>
  </optgroup>
</select>
```

{{EmbedLiveSample("", 120, 120)}}

Sur l'élément [`<optgroup>`](/fr/docs/Web/HTML/Element/Optgroup), la valeur de l'attribut [`label`](/fr/docs/Web/HTML/Element/Optgroup#attr-label) est affichée avant les valeurs des options imbriquées. Le navigateur sépare généralement ce libellé des options sélectionnables (par exemple avec une mise en gras et un niveau d'imbrication différent) afin qu'il ne puisse pas être confondu avec les options.

#### Utiliser l'attribut `value`

Si un élément [`<option>`](/fr/docs/Web/HTML/Element/Option) possède explicitement un attribut `value`, c'est cette valeur qui sera envoyée avec le formulaire lors de l'envoi si cette option est sélectionnée. Si l'attribut `value` est absent (à l'instar des exemples précédents), c'est le contenu de l'élément [`<option>`](/fr/docs/Web/HTML/Element/Option) qui est utilisé comme valeur. Aussi, les attributs `value` ne sont pas strictement nécessaires mais peuvent s'avérer utiles lorsqu'on souhaite fournir une valeur raccourcie ou normalisée au serveur et qui est différente de la valeur affichée dans la boîte.

Par exemple&nbsp;:

```html
<select id="simple" name="simple">
  <option value="banane">Une belle banane bien jaune</option>
  <option value="cerise">Quelques cerises juteuses à souhait</option>
  <option value="citron">Un citron acide comme il faut</option>
</select>
```

Par défaut la taille de la boîte de sélection permet d'afficher une seule valeur. L'attribut optionnel [`size`](/fr/docs/Web/HTML/Attributes/size) permet de contrôler le nombre d'options visibles lorsque la boîte de sélection n'a pas le focus.

### Boîte de sélection à choix multiple

Par défaut, une boîte de sélection permet de choisir une seule valeur. En ajoutant l'attribut [`multiple`](/fr/docs/Web/HTML/Element/select#attr-multiple) à l'élément [`<select>`](/fr/docs/Web/HTML/Element/select), il devient possible de sélectionner plusieurs valeurs en utilisant le mécanisme de sélection multiple fourni par le système d'exploitation (par exemple en cliquant sur les différentes valeurs ou en maintenant les touches <kbd>Cmd</kbd>/<kbd>Ctrl</kbd> du clavier sur un ordinateur).

```html
<select id="multi" name="multi" multiple size="2">
  <optgroup label="fruits">
    <option>Banane</option>
    <option selected>Cerise</option>
    <option>Citron</option>
  </optgroup>
  <optgroup label="legumes">
    <option>Carotte</option>
    <option>Aubergine</option>
    <option>Pomme de terre</option>
  </optgroup>
</select>
```

{{EmbedLiveSample("", 120, 120)}}

> **Note :** Dans le cas d'une sélection multiple, on peut voir que la boîte de sélection n'affiche plus les valeurs comme une liste déroulante. À la place, l'ensemble des valeurs est affiché dans la liste et c'est l'attribut optionnel [`size`](/fr/docs/Web/HTML/Attributes/size) qui détermine la hauteur du contrôle.

> **Note :** Tous les navigateurs qui prennent en charge l'élément [`<select>`](/fr/docs/Web/HTML/Element/select) prennent également en charge l'attribut [`multiple`](/fr/docs/Web/HTML/Element/select#attr-multiple).

### Boîte d'autocomplétion

Il est possible de fournir des suggestions de valeurs qui pourront être utilisées en auto-complétion par les contrôles de formulaire avec l'élément [`<datalist>`](/fr/docs/Web/HTML/Element/datalist) qui contient des éléments [`<option>`](/fr/docs/Web/HTML/Element/Option), décrivant chacun une valeur à afficher. L'élément `<datalist>` doit avoir un attribut `id`.

La liste de données est rattachée à un élément [`<input>`](/fr/docs/Web/HTML/Element/Input) (par exemple de type `text` ou `email`) en utilisant l'attribut [`list`](/fr/docs/Web/HTML/Element/Input#attr-list) dont la valeur correspond à l'identifiant (`id`) de la liste.

Lorsqu'une liste de données est rattachée à un contrôle de formulaire, les options qu'elle fournit sont utilisées pour l'autocomplétion du texte saisi par la personne. Généralement, les suggestions sont présentées sous la forme d'une liste déroulante qui contient les correspondances possibles selon ce qui a déjà été saisi dans le champ.

#### Exemple simple

Prenons un exemple.

```html
<label for="monFruit">Quel est votre fruit préféré ?</label>
<input type="text" name="monFruit" id="monFruit" list="maSuggestion" />
<datalist id="maSuggestion">
  <option>Pomme</option>
  <option>Banane</option>
  <option>Cassis</option>
  <option>Myrtille</option>
  <option>Citron</option>
  <option>Litchi</option>
  <option>Pêche</option>
  <option>Poire</option>
</datalist>
```

{{EmbedLiveSample("", 120, 120)}}

#### Prise en charge et méthodes alternatives

La quasi-totalité des navigateurs prend en charge `<datalist>`, toutefois, si vous devez prendre en charge des versions d'Internet Explorer antérieures à IE10, voici une méthode alternative&nbsp;:

```html
<label for="monFruit">Quel est votre fruit préféré ? (avec alternative)</label>
<input type="text" id="monFruit" name="fruit" list="listeFruit" />

<datalist id="listeFruit">
  <label for="suggestion">ou sélectionnez un fruit</label>
  <select id="suggestion" name="altFruit">
    <option>Pomme</option>
    <option>Banane</option>
    <option>Cassis</option>
    <option>Myrtille</option>
    <option>Citron</option>
    <option>Litchi</option>
    <option>Pêche</option>
    <option>Poire</option>
  </select>
</datalist>
```

{{EmbedLiveSample("", 120, 120)}}

Les navigateurs qui prennent en charge l'élément [`<datalist>`](/fr/docs/Web/HTML/Element/datalist) ignoreront tous les éléments enfants qui ne sont pas des éléments [`<option>`](/fr/docs/Web/HTML/Element/Option), la liste fonctionnant alors comme on le souhaite. Les navigateurs qui ne prennent pas en charge [`<datalist>`](/fr/docs/Web/HTML/Element/datalist) afficheront le libellé et la boîte de sélection.

La capture d'écran qui suit illustre le résultat de cette méthode alternative avec Safari 6&nbsp;:

![Capture d'écran de l'élément dataliste avec une solution de recours sur Safari pour macOS](datalist-safari.png)

Si vous utilisez cette méthode alternative, il faudra vous assurer que les données de l'élément `<input>` et de l'élément `<select>` sont bien récupérées côté serveur.

#### Utilisations moins évidentes

Selon [la spécification HTML](https://www.w3.org/TR/html5/common-input-element-attributes.html#attr-input-list), l'attribut [`list`](/fr/docs/Web/HTML/Element/Input#attr-list) et l'élément [`<datalist>`](/fr/docs/Web/HTML/Element/datalist) peuvent être utilisés pour n'importe quel type de contrôle nécessitant une saisie de l'utilisatrice ou de l'utilisateur. Cela amène à certains cas d'usage qui peuvent sembler moins évidents au premier regard.

Ainsi, pour les navigateurs qui prennent en charge [`<datalist>`](/fr/docs/Web/HTML/Element/datalist) pour les champs de type `range`, une graduation sera affichée au-dessus de l'intervalle pour chaque option (fournie par [`<option>`](/fr/docs/Web/HTML/Element/Option)) de la liste de données. Vous pouvez en voir une implémentation [sur l'exemple de la page de référence pour `<input type="range">`](/fr/docs/Web/HTML/Element/input/range#un_contrôle_avec_des_marques).

Pour les navigateurs qui prennent en charge [`<datalist>`](/fr/docs/Web/HTML/Element/datalist) et [`<input type="color">`](/fr/docs/Web/HTML/Element/Input/color), ils devraient afficher une palette de couleurs personnalisée par défaut, tout en gardant la palette complète disponible.

Pour ces cas, les différents navigateurs se comportent de façon hétérogène et de tels usages devraient être considérés avec une amélioration progressive, en s'assurant que leur absence ne nuit pas à l'usage de la page ou de l'application.

## Autres fonctionnalités des formulaires

Il existe d'autres fonctionnalités relatives aux formulaires qui ne sont pas aussi évidentes que celles déjà abordées, mais qui s'avèrent utiles dans certaines situations. Voyons donc ces fonctionnalités rapidement.

> **Note :** Les exemples de cette section [peuvent être retrouvés sur GitHub avec le fichier `other-examples.html`](https://github.com/mdn/learning-area/blob/main/html/forms/native-form-widgets/other-examples.html) ([voir le résultat correspondant](https://mdn.github.io/learning-area/html/forms/native-form-widgets/other-examples.html)).

### Jauges et barres de progression

Les jauges et les barres de progression sont des représentations visuelles de valeurs numériques.

#### Barres de progression

Une barre de progression représente une valeur qui change au cours du temps jusqu'à atteindre une valeur maximale (indiquée par l'attribut [`max`](/fr/docs/Web/HTML/Element/Progress#attr-max)). Pour créer une telle barre, on utilisera l'élément [`<progress>`](/fr/docs/Web/HTML/Element/Progress).

```html
<progress max="100" value="75">75/100</progress>
```

{{EmbedLiveSample("", 120, 120)}}

Cet élément permet de restituer l'évolution d'une valeur comme le pourcentage de fichiers téléchargés, le nombre de questions renseignées dans un formulaire, etc.

Le contenu à l'intérieur d'un élément [`<progress>`](/fr/docs/Web/HTML/Element/Progress) agit comme contenu alternatif pour les navigateurs qui ne prennent pas en charge cet élément et pour les outils de lecture d'écran qui doivent vocaliser l'information.

#### Jauges

Une jauge représente une valeur fixe au sein d'un intervalle délimité par les valeurs des attributs [`max`](/fr/docs/Web/HTML/Element/Meter#attr-max) et [`min`](/fr/docs/Web/HTML/Element/Meter#attr-min). Cette valeur s'affiche comme une barre. Pour connaître comment la valeur est affichée, il faut la comparer à d'autres valeurs&nbsp;:

- Les attributs [`low`](/fr/docs/Web/HTML/Element/Meter#attr-low) et [`high`](/fr/docs/Web/HTML/Element/Meter#attr-high) partagent l'intervalle en trois parties&nbsp;:

  - La partie inférieure de l'intervalle est comprise entre [`min`](/fr/docs/Web/HTML/Element/Meter#attr-min) et [`low`](/fr/docs/Web/HTML/Element/Meter#attr-low) (inclus).
  - La partie intermédiaire de l'intervalle est comprise entre [`low`](/fr/docs/Web/HTML/Element/Meter#attr-low) et [`high`](/fr/docs/Web/HTML/Element/Meter#attr-high) (inclus).
  - La partie supérieure de l'intervalle est comprise entre [`high`](/fr/docs/Web/HTML/Element/Meter#attr-high) et [`max`](/fr/docs/Web/HTML/Element/Meter#attr-max) (inclus).

- La valeur de l'attribut [`optimum`](/fr/docs/Web/HTML/Element/Meter#attr-optimum) définit la valeur optimale pour l'élément [`<meter>`](/fr/docs/Web/HTML/Element/Meter). Avec les valeurs des attributs [`low`](/fr/docs/Web/HTML/Element/Meter#attr-low) et [`high`](/fr/docs/Web/HTML/Element/Meter#attr-high), elle définit les parties de l'intervalle qui sont privilégiées&nbsp;:

  - Si la valeur [`optimum`](/fr/docs/Web/HTML/Element/Meter#attr-optimum) est contenue dans la partie inférieure, c'est cette partie qui est privilégiée, la partie intermédiaire étant considérée comme moyenne et la partie supérieure étant considérée comme la pire.
  - Si la valeur [`optimum`](/fr/docs/Web/HTML/Element/Meter#attr-optimum) est contenue dans la partie intermédiaire, la partie inférieure et la partie supérieure sont considérées comme moyennes et la partie intermédiaire est considérée comme privilégiée.
  - Si la valeur [`optimum`](/fr/docs/Web/HTML/Element/Meter#attr-optimum) est contenue dans la partie supérieure, la partie inférieure sera considérée comme la pire, la partie intermédiaire sera considérée comme moyenne et la partie supérieure sera considérée comme privilégiée.

Tous les navigateurs implémentant l'élément [`<meter>`](/fr/docs/Web/HTML/Element/Meter) utilisent ces valeurs pour changer la couleur de la jauge&nbsp;:

- Si la valeur courante se situe dans la partie privilégiée de l'intervalle, la jauge sera verte.
- Si la valeur courante se situe dans la partie moyenne, la barre sera jaune.
- Si la valeur courante se situe dans la pire partie, la barre sera rouge.

Pour créer une telle jauge, on utilise l'élément [`<meter>`](/fr/docs/Web/HTML/Element/Meter). Ce dernier permet d'implémenter n'importe quel type de jauge, par exemple une barre représentant l'espace total utilisé sur un disque, qui devient rouge lorsque l'espace vient à manquer.

```html
<meter min="0" max="100" value="75" low="33" high="66" optimum="50">75</meter>
```

{{EmbedLiveSample("", 120, 120)}}

Le contenu situé à l'intérieur d'un élément [`<meter>`](/fr/docs/Web/HTML/Element/Meter) est utilisé comme contenu alternatif par les navigateurs qui ne prennent pas en charge cet élément et par les technologies d'assistance qui doivent vocaliser cette information.

La prise en charge de [`<progress>`](/fr/docs/Web/HTML/Element/Progress) et [`<meter>`](/fr/docs/Web/HTML/Element/Meter) est plutôt correcte, seul Internet Explorer ne prend pas en charge ces fonctionnalités.

## Testez vos compétences&nbsp;!

Vous avez atteint la fin de cet article. Mais avez-vous retenu les informations les plus importantes&nbsp;? Vous pouvez vous évaluer et vérifier que vous avez mémorisé ces informations avant d'aller plus loin. [Testez vos compétences&nbsp;: les autres contrôles de formulaire](/fr/docs/Learn/Forms/Test_your_skills:_Other_controls).

## Résumé

Au cours des derniers articles, nous avons vu qu'il existe de nombreux types de contrôles différents pour composer un formulaire. Il n'est pas nécessaire de tout retenir par cœur, vous pourrez revenir à ces articles en temps voulu pour revoir les détails.

Maintenant que vous en savez un peu plus sur le HTML derrière les différents contrôles de formulaire, voyons [comment les mettre en forme](/fr/docs/Learn/Forms/Styling_web_forms).

{{PreviousMenuNext("Learn/Forms/HTML5_input_types","Learn/Forms/Styling_web_forms", "Learn/Forms")}}
