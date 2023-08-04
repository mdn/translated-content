---
title: Mise en forme avancée des formulaires HTML
slug: Learn/Forms/Advanced_form_styling
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Forms/Styling_web_forms", "Learn/Forms/UI_pseudo-classes", "Learn/Forms")}}

Dans cet article, nous verrons comment utiliser CSS pour mettre en forme les contrôles de formulaires qui sont les plus compliqués à mettre en forme. Comme abordé [dans l'article précédent](/fr/docs/Learn/Forms/Styling_web_forms), les champs texte et les boutons sont plutôt simples à mettre en forme. Nous verrons ici le changement de style pour les éléments de formulaire plus problématiques.

<table>
  <tbody>
    <tr>
      <th scope="row">Prérequis&nbsp;:</th>
      <td>
         Compréhension élémentaire de l'informatique et compréhension des bases de <a href="/fr/docs/Learn/HTML/Introduction_to_HTML">HTML</a> et de <a href="/fr/docs/Learn/CSS/First_steps">CSS</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Objectifs&nbsp;:</th>
      <td>
        Comprendre les composantes de formulaires qui sont difficiles à mettre en forme et pourquoi elles le sont. Apprendre comment personnaliser ces composantes.
      </td>
    </tr>
  </tbody>
</table>

Pour résumer ce que nous avons vu dans l'article précédent, nous avons&nbsp;:

**La brute**&nbsp;: certains éléments sont plus difficiles à mettre en forme et nécessitent du CSS plus complexe ou quelques astuces&nbsp;:

- Les cases à cocher (<i lang="en">checkbox</i>)
- Les boutons radio
- [`<input type="search">`](/fr/docs/Web/HTML/Element/Input/search)

**Le truand**&nbsp;: certains éléments ne peuvent pas être complètement mis en forme à l'aide CSS. Parmi ceux-là, nous avons&nbsp;:

- Les éléments qui créent des menus déroulants dont [`<select>`](/fr/docs/Web/HTML/Element/select), [`<option>`](/fr/docs/Web/HTML/Element/Option), [`<optgroup>`](/fr/docs/Web/HTML/Element/Optgroup) et [`<datalist>`](/fr/docs/Web/HTML/Element/datalist)
- [`<input type="color">`](/fr/docs/Web/HTML/Element/Input/color)
- Les contrôles pour les dates comme [`<input type="datetime-local">`](/fr/docs/Web/HTML/Element/Input/datetime-local)
- [`<input type="range">`](/fr/docs/Web/HTML/Element/Input/range)
- [`<input type="file">`](/fr/docs/Web/HTML/Element/Input/file)
- [`<progress>`](/fr/docs/Web/HTML/Element/Progress) et [`<meter>`](/fr/docs/Web/HTML/Element/Meter)

Pour commencer, abordons la propriété [`appearance`](/fr/docs/Web/CSS/appearance) qui s'avère plutôt utile pour simplifier la mise en forme de l'ensemble des éléments listés ci-avant.

## `appearance`&nbsp;: contrôler la mise en forme liée au système d'exploitation

Dans l'article précédent, nous avons vu que la mise en forme des contrôles de formulaire provenait historiquement du système d'exploitation sous-jacent, ce qui explique en partie la difficulté à personnaliser l'aspect de ces contrôles.

La propriété [`appearance`](/fr/docs/Web/CSS/appearance) a été créée comme une méthode pour contrôler les styles provenant du système d'exploitation et qui étaient appliqués aux contrôles de formulaire. Malheureusement, le comportement de cette propriété avec les implémentations initiales variait grandement d'un navigateur à l'autre, elle n'était donc que peu utilisable. Les implémentations plus récentes sont plus cohérentes et les différents navigateurs (que ce soit ceux basés sur Chromium comme Chrome, Opera, et Edge&nbsp;; Safari&nbsp;; et Firefox) prennent en charge la version préfixée avec `-webkit-` (`-webkit-appearance`).

Si on consulte la page de référence, on verra que `-webkit-appearance` peut prendre de nombreuses valeurs différentes. Toutefois, la valeur la plus utile et celle que vous utiliserez probablement est `none`. Cela empêche, autant que possible, l'utilisation des styles provenant du système, vous permettant ainsi de construire vos propres styles avec CSS.

Prenons l'exemple suivant avec ces différents contrôles&nbsp;:

```html
<form>
  <p>
    <label for="search">search:</label>
    <input id="search" name="search" type="search" />
  </p>
  <p>
    <label for="text">text:</label>
    <input id="text" name="text" type="text" />
  </p>
  <p>
    <label for="date">date:</label>
    <input id="date" name="date" type="datetime-local" />
  </p>
  <p>
    <label for="radio">radio:</label>
    <input id="radio" name="radio" type="radio" />
  </p>
  <p>
    <label for="checkbox">checkbox:</label>
    <input id="checkbox" name="checkbox" type="checkbox" />
  </p>
  <p><input type="submit" value="submit" /></p>
  <p><input type="button" value="button" /></p>
</form>
```

Appliquer la règle CSS suivante permettra de retirer la mise en forme provenant du système.

```css
input {
  -webkit-appearance: none;
  appearance: none;
}
```

> **Note :** Mieux vaut utiliser les deux déclarations (celle avec le préfixe et celle sans) lorsqu'on utilise une propriété préfixée. En effet, la version préfixée signifie généralement que du travail de standardisation est en cours et qu'il pourrait y avoir plus tard un consensus pour abandonner la version préfixée. Dans l'exemple qui précède, on se prémunit ainsi contre une telle situation.

L'aperçu qui suit montre&nbsp;: le rendu avec les styles système à gauche et le rendu avec `appearance: none` à droite ([vous pouvez également voir cet exemple sur cette page](https://mdn.github.io/learning-area/html/forms/styling-examples/appearance-tester.html) si vous voulez le tester sur d'autres systèmes).

{{EmbedGHLiveSample("learning-area/html/forms/styling-examples/appearance-tester.html", '100%', 400)}}

Dans la plupart des cas, l'effet correspond au retrait de la mise en forme de la bordure, ce qui rend l'application de CSS plus simple, mais ce n'est pas réellement essentiel. Pour d'autres en revanche, comme les champs de recherche, les boutons radio et les cases à cocher, cela s'avère beaucoup plus utile. Voyons de quoi il en retourne.

### Dompter les champs de recherche

[`<input type="search">`](/fr/docs/Web/HTML/Element/Input/search) prend généralement la forme d'un champ texte, pourquoi donc `appearance: none;` devient-il utile ici&nbsp;? En fait, sur macOS, les navigateurs basés sur Chromium ont des restrictions quant aux styles des boîtes de recherche&nbsp;: par exemple, on ne peut pas ajuster librement leur hauteur (`height`) ou la taille de la police (`font-size`). Cela est dû [au fait que les navigateurs basés sur Chromium n'utilisent plus le moteur de rendu WebKit](https://www.wired.com/2013/04/blink/), ce qui a activé l'apparence «&nbsp;Aqua&nbsp;» par défaut pour certains contrôles de formulaires. Avec Aqua activé, certains contrôles de formulaire ne sont plus [redimensionnables](https://webkit.org/blog/28/buttons/).

Cela peut être corrigé avec `appearance: none;`, qui désactive cette apparence Aqua par défaut&nbsp;:

```css
input[type="search"] {
  -webkit-appearance: none;
  appearance: none;
}
```

Dans l'exemple qui suit, on peut voir deux champs de recherche identiques. Celui de droite est mis en forme avec `appearance: none;` et celui de gauche n'utilise pas cette propriété. Si vous consultez cet exemple sur Chrome sur macOS, vous verrez que l'exemplaire à gauche n'est pas dimensionné correctement.

{{EmbedGHLiveSample("learning-area/html/forms/styling-examples/search-appearance.html", '100%', 200)}}

De façon intéressante, définir la boardule ou l'arrière-plan du champ de recherche permet aussi de résoudre ce problème, car cela [désactive](https://webkit.org/blog/28/buttons/) ou «&nbsp;casse&nbsp;» l'apparence Aqua. L'exemple qui suit n'utilise pas du tout `appearance: none;`, mais, sur Chrome pour macOS, on peut voir qu'il ne souffre pas du même problème que l'exemple précédent.

{{EmbedGHLiveSample("learning-area/html/forms/styling-examples/styled-search.html", '100%', 200)}}

> **Note :** Vous pourrez remarquer que, dans le champ de recherche, l'icône de croix pour la suppression disparaît quand le champ perd le focus sur Edge et Chrome mais qu'il reste sur Safari. Pour la retirer en CSS (_y compris lorsqu'il y a le focus_), vous pouvez utiliser `input[type="search"]::-webkit-search-cancel-button { display: none; }`.

### Mettre en forme les cases à cocher et les boutons radio

La mise en forme d'une case à cocher ou d'un bouton radio s'avère délicate par défaut. Les dimensions des cases ou des boutons ne sont pas prévues pour être changées et les navigateurs réagissent différemment si vous essayez.

Prenons un cas de test simple&nbsp;:

```html
<span><input type="checkbox" /></span>
```

```css
span {
  display: inline-block;
  background: red;
}

input[type="checkbox"] {
  width: 100px;
  height: 100px;
}
```

Les différents navigateurs gèrent cela différemment, et souvent avec un résultat inadapté&nbsp;:

| Navigateur                          | Rendu                             |
| ----------------------------------- | --------------------------------- |
| Firefox 71 (macOS)                  | ![](firefox-mac-checkbox.png)     |
| Firefox 57 (Windows 10)             | ![](firefox-windows-checkbox.png) |
| Chrome 77 (macOS), Safari 13, Opera | ![](chrome-mac-checkbox.png)      |
| Chrome 63 (Windows 10)              | ![](chrome-windows-checkbox.png)  |
| Internet Explorer 11 (Windows 10)   | ![](ie11-checkbox.png)            |
| Edge 16 (Windows 10)                | ![](edge-checkbox.png)            |

#### Utiliser `appearance: none` sur les boutons radio et les cases à cocher

Comme nous l'avons vu, il est possible de retirer l'apparence par défaut d'une case à cocher ou d'un bouton radio avec [`appearance`](/fr/docs/Web/CSS/appearance)`:none;`. Prenons cet exemple en HTML:

```html
<form>
  <fieldset>
    <legend>Fruits préférés</legend>

    <p>
      <label>
        <input type="checkbox" name="fruit-1" value="cherry" />
        J'aime les cerises
      </label>
    </p>
    <p>
      <label>
        <input type="checkbox" name="fruit-2" value="banana" disabled />
        Je ne peux pas aimer les bananes
      </label>
    </p>
    <p>
      <label>
        <input type="checkbox" name="fruit-3" value="strawberry" />
        J'aime les fraises
      </label>
    </p>
  </fieldset>
</form>
```

Utilisons une mise en forme personnalisée pour les cases à cocher. Commençons par retirer le style du système&nbsp;:

```css
input[type="checkbox"] {
  -webkit-appearance: none;
  appearance: none;
}
```

Nous pouvons ensuite utiliser les pseudo-classes [`:checked`](/fr/docs/Web/CSS/:checked) et [`:disabled`](/fr/docs/Web/CSS/:disabled) pour changer l'apparence de nos cases à cocher lorsque leur état change&nbsp;:

```css
input[type="checkbox"] {
  position: relative;
  width: 1em;
  height: 1em;
  border: 1px solid gray;
  /* Ajuste la position de la case à cocher sur la ligne de base du texte */
  vertical-align: -2px;
  /* On définit ici afin que le mode de contraste élevé de Windows puisse
     surcharger */
  color: green;
}

input[type="checkbox"]::before {
  content: "✔";
  position: absolute;
  font-size: 1.2em;
  right: -1px;
  top: -0.3em;
  visibility: hidden;
}

input[type="checkbox"]:checked::before {
  /* On utilise `visibility` plutôt que `display` pour éviter le
     recalcul de la disposition */
  visibility: visible;
}

input[type="checkbox"]:disabled {
  border-color: black;
  background: #ddd;
  color: gray;
}
```

Nous en verrons plus sur les pseudo-classes [dans le prochain article](/fr/docs/Learn/Forms/UI_pseudo-classes). Voyons celles qui sont utilisées ici&nbsp;:

- `:checked` permet d'appliquer une mise en forme lorsque la case à cocher ou le bouton radio est dans un état sélectionné.
- `:disabled` permet d'appliquer une mise en forme lorsque la case à cocher ou le bouton radio est désactivé et qu'on ne peut pas interagir avec.

Voici le résultat de cet exemple&nbsp;:

{{EmbedLiveSample("", '100%', 200)}}

Voici quelques autres exemples pour vous donner d'autres idées&nbsp;

- [Mise en forme de boutons radio](https://mdn.github.io/learning-area/html/forms/styling-examples/radios-styled.html)&nbsp;: avec une mise en forme personnalisée pour des boutons radio
- [Exemple d'interrupteur](https://mdn.github.io/learning-area/html/forms/toggle-switch-example/)&nbsp;: une case à cocher mise en forme afin de ressembler à un interrupteur.

Si vous consultez ces exemples dans un navigateur qui ne prend pas en charge [`appearance`](/fr/docs/Web/CSS/appearance), votre conception ne sera pas visible, mais les éléments ressembleront à des cases à cocher et seront utilisables.

> **Note :** Bien qu'Internet Explorer ne prenne pas en charge `appearance`, `input[type=checkbox]::-ms-check` permet de cibler les cases à cocher dans IE. Cette technique fonctionne également pour les boutons radio malgré le nom `-ms-check`.

## Quid des éléments dans la catégorie des «&nbsp;truands&nbsp;»&nbsp;?

Voyons maintenant les contrôles qui tombent dans la catégorie des «&nbsp;truands&nbsp;» et qui sont très difficiles à mettre en forme. Il s'agit des contrôles avec des listes déroulantes ou de contrôles complexes comme [`color`](/fr/docs/Web/HTML/Element/Input/color), [`datetime-local`](/fr/docs/Web/HTML/Element/Input/datetime-local), et des contrôles de <i lang="en">feedback</i> comme [`<progress>`](/fr/docs/Web/HTML/Element/Progress) et [`<meter>`](/fr/docs/Web/HTML/Element/Meter).

Le problème est que ces éléments ont des apparences bien différentes entre les navigateurs et bien que certaines parties soient personnalisables, d'autres parties internes sont purement impossibles à mettre en forme.

Si quelques différences d'apparence ne vous dérangent pas, vous pourrez vous en sortir avec une mise en forme simple afin d'avoir un dimensionnement et une mise en forme cohérente pour des choses comme les couleurs d'arrière-plan. `appearance` vous permettra d'enlever la mise en forme système.

Prenons l'exemple suivant, qui illustre certaines fonctionnalités des formulaires parmi les «&nbsp;truands&nbsp;»&nbsp;:

{{EmbedGHLiveSample("learning-area/html/forms/styling-examples/ugly-controls.html", '100%', 750)}}

Dans cet exemple, on utilise le CSS suivant&nbsp;:

```css
body {
  font-family: "Josefin Sans", sans-serif;
  margin: 20px auto;
  max-width: 400px;
}

form > div {
  margin-bottom: 20px;
}

select {
  -webkit-appearance: none;
  appearance: none;
}

.select-wrapper {
  position: relative;
}

.select-wrapper::after {
  content: "▼";
  font-size: 1rem;
  top: 6px;
  right: 10px;
  position: absolute;
}

button,
label,
input,
select,
progress,
meter {
  display: block;
  font-family: inherit;
  font-size: 100%;
  margin: 0;
  box-sizing: border-box;
  width: 100%;
  padding: 5px;
  height: 30px;
}

input[type="text"],
input[type="datetime-local"],
input[type="color"],
select {
  box-shadow: inset 1px 1px 3px #ccc;
  border-radius: 5px;
}

label {
  margin-bottom: 5px;
}

button {
  width: 60%;
  margin: 0 auto;
}
```

> **Note :** Si vous souhaitez tester ces exemples sur différents navigateurs en même temps, vous pouvez [les retrouver ici](https://mdn.github.io/learning-area/html/forms/styling-examples/ugly-controls.html) (vous pouvez également [voir leur code source](https://github.com/mdn/learning-area/blob/main/html/forms/styling-examples/ugly-controls.html)).
>
> Il faut également garder à l'esprit que nous avons ajouté du JavaScript à la page qui liste les fichiers sélectionnés par le sélecteur de fichier (directement après le contrôle). Il s'agit d'une version simplifiée de l'exemple trouvé sur la page de référence pour [`<input type="file">`](/fr/docs/Web/HTML/Element/Input/file#exemples).

Comme vous pouvez le voir, on arrive à avoir un aspect relativement uniforme pour les différents navigateurs modernes.

Nous avons appliqué quelques règles CSS pour normaliser les contrôles et les libellés associés afin que leur dimensionnement, le choix de la police, etc. soient cohérents (voir l'article précédent pour plus d'explications)&nbsp;:

```css
button,
label,
input,
select,
progress,
meter {
  display: block;
  font-family: inherit;
  font-size: 100%;
  margin: 0;
  box-sizing: border-box;
  width: 100%;
  padding: 5px;
  height: 30px;
}
```

Nous ajoutons également des ombres et des coins arrondis aux contrôles qui le nécessitent&nbsp;:

```css
input[type="text"],
input[type="datetime-local"],
input[type="color"],
select {
  box-shadow: inset 1px 1px 3px #ccc;
  border-radius: 5px;
}
```

Cette dernière règle, sur d'autres contrôles comme les intervalles, barres de progression, n'auraient pas sens, car ils ajouteraient une boîte moche autour de la zone du contrôle.

Voyons quelques points relatifs à chaque type de contrôle et les difficultés associées.

### Sélecteurs et listes de données

Pour les navigateurs récents, les sélecteurs et listes de données ne sont pas trop compliqués à mettre en forme tant que vous ne souhaitez pas trop vous écartez des réglages par défaut.

Nous sommes parvenus à avoir un aspect de base uniforme et cohérent. Le contrôle de sélection est `<input type="text">`, nous savions donc que ce ne serait pas un gros problème.

Deux choses sont plus difficiles. Pour commencer, l'icône de flèche de sélection pour la liste déroulante qui varie d'un navigateur à l'autre. Elle a également tendance à changer si on augmente la taille de la boîte de sélection. Pour corriger ceci, on utilisera notre vieil ami `appearance: none` afin de supprimer l'icône&nbsp;:

```css
select {
  -webkit-appearance: none;
  appearance: none;
}
```

Nous allons créer notre propre icone à l'aide de contenu généré. On place un élément contenant le contrôle afin que [`::before`](/fr/docs/Web/CSS/::before)/[`::after`](/fr/docs/Web/CSS/::after) puissent fonctionner (en effet, ils n'ont pas d'effet sur les éléments `<select>`, car le contenu généré est placé relativement à la boîte de formatage d'un élément et que les champs de formulaires fonctionnent comme des éléments remplacés et ils n'ont donc pas de boîte de formatage)&nbsp;:

```html
<div class="select-wrapper">
  <select id="select" name="select">
    <option>Banane</option>
    <option>Cerise</option>
    <option>Citron</option>
  </select>
</div>
```

On utilise alors du contenu généré afin de créer une flèche qui pointe vers le bas et on la situe à la bonne place avec du positionnement&nbsp;:

```css
.select-wrapper {
  position: relative;
}

.select-wrapper::after {
  content: "▼";
  font-size: 1rem;
  top: 6px;
  right: 10px;
  position: absolute;
}
```

Le deuxième problème rencontré est l'absence de contrôle sur la boîte de choix qui apparaît lorsqu'on clique sur le sélecteur. Vous pourrez voir que les options de choix n'héritent pas de la police de leur parent. Il est également impossible de définir de façon cohérente l'espacement et les couleurs. Ainsi, Firefox appliquera [`color`](/fr/docs/Web/CSS/color) et [`background-color`](/fr/docs/Web/CSS/background-color) sur [`<option>`](/fr/docs/Web/HTML/Element/Option), mais Chrome ne le fera pas. Aucun n'appliquera d'espacement (par exemple celui-ci créé avec [`padding`](/fr/docs/Web/CSS/padding)). Il en va de même pour la liste de suggestion pour l'autocomplétion qui apparaît sur une liste de données.

Si vous avez besoin de contrôler complètement la mise en forme, il vous faudra utiliser une bibliothèque tierce ou construire votre propre contrôle. Une autre alternative pour l'élément `<select>` consiste à utiliser l'attribut `multiple` qui fait apparaître l'ensemble des options sur la page, contournant ainsi le problème&nbsp;:

```html
<select id="select" name="select" multiple>
  ...
</select>
```

### Les champs de date

Les champs pour les dates et heures ([`datetime-local`](/fr/docs/Web/HTML/Element/Input/datetime-local), [`time`](/fr/docs/Web/HTML/Element/Input/time), [`week`](/fr/docs/Web/HTML/Element/Input/week), [`month`](/fr/docs/Web/HTML/Element/Input/month)) partagent le même problème. La boîte englobante et le texte sont assez simples à mettre en forme et ce que nous avons jusqu'à présent est suffisant.

Toutefois, les parties internes du contrôle (le calendrier qui s'affiche pour sélectionner la date, le sélecteur pour incrémenter/décrémenter les valeurs) ne sont pas du tout personnalisables et on ne peut pas s'en débarrasser avec `appearance: none;`. Si vous devez maîtriser la forme de 1 à Z, vous devrez utiliser une bibliothèque tierce ou construire votre propre contrôle.

> **Note :** On notera que [`<input type="number">`](/fr/docs/Web/HTML/Element/Input/number) peut souffrir du même problème quant au mécanisme d'incrémentation/décrémentation. Toutefois, on peut contourner certains problèmes, lorsque les données collectées par le contrôle sont simples, en utilisant un champ de type `text` à la place.

### Les champs d'intervalle

[`<input type="range">`](/fr/docs/Web/HTML/Element/Input/range) est plutôt embêtant à mettre en forme. Vous pouvez utiliser ce qui suit pour retirer la piste par défaut et la remplacer avec une mise en forme personnalisée (ici une fine ligne rouge)&nbsp;:

```css
input[type="range"] {
  appearance: none;
  -webkit-appearance: none;
  background: red;
  height: 2px;
  padding: 0;
  outline: 1px solid transparent;
}
```

Il est toutefois très compliqué de personnaliser le style du curseur. Pour le personnaliser complètement, vous devrez utiliser beaucoup de CSS, y compris des pseudo-éléments non-standards, spécifiques à certains navigateurs. Vous pouvez lire [<i lang="en">Styling Cross-Browser Compatible Range Inputs with CSS</i>](https://css-tricks.com/styling-cross-browser-compatible-range-inputs-css/) sur CSS-Tricks pour un article détaillé sur ce qu'il faut faire.

### Les sélecteurs de couleur

Les sélecteurs de couleur ne sont pas trop difficiles. Pour les navigateurs qui les prennent en charge, ils sont généralement affichés avec un carré de couleur entouré d'une bordure.

Vous pouvez retirer la bordure afin de ne laisser que le bloc de couleur avec une règle comme&nbsp;:

```css
input[type="color"] {
  border: 0;
  padding: 0;
}
```

Toutefois, pour aller plus loin, vous devrez utiliser un contrôle personnalisé de A à Z.

### Les sélecteurs de fichier

Les sélecteurs de fichier sont plutôt corrects, comme nous l'avons vu dans notre exemple, il est plutôt facile d'obtenir quelque chose qui s'inscrit correctement dans le reste de la page.

Le seul problème concerne le bouton qui est fourni pour ouvrir l'explorateur de fichier. Ce dernier est complètement hors de contrôle, on ne peut pas le dimensionner ou changer sa couleur, voire changer sa police.

Une façon de contourner ce problème consiste à se reposer uniquement sur le libellé du contrôle. En effet, lorsqu'un libellé est associé à un contrôle de formulaire, cliquer sur le libellé entraînera l'activation du contrôle. On peut alors choisir de masquer le contrôle même avec quelque chose comme&nbsp;:

```css
input[type="file"] {
  height: 0;
  padding: 0;
  opacity: 0;
}
```

Ensuite, on peut mettre en forme le libellé afin qu'il agisse comme un bouton qui ouvrira le sélecteur lorsqu'on appuiera dessus&nbsp;:

```css
label[for="file"] {
  box-shadow: 1px 1px 3px #ccc;
  background: linear-gradient(to bottom, #eee, #ccc);
  border: 1px solid rgb(169, 169, 169);
  border-radius: 5px;
  text-align: center;
  line-height: 1.5;
}

label[for="file"]:hover {
  background: linear-gradient(to bottom, #fff, #ddd);
}

label[for="file"]:active {
  box-shadow: inset 1px 1px 3px #ccc;
}
```

Vous pouvez voir le résultat de la mise en forme précédente dans l'exemple qui suit (vous pouvez également le voir sur une autre page [styled-file-picker.html](https://mdn.github.io/learning-area/html/forms/styling-examples/styled-file-picker.html) et consulter [le code source](https://github.com/mdn/learning-area/blob/main/html/forms/styling-examples/styled-file-picker.html)).

{{EmbedGHLiveSample("learning-area/html/forms/styling-examples/styled-file-picker.html", '100%', 200)}}

### Les curseurs et indicateurs de progression

[`<meter>`](/fr/docs/Web/HTML/Element/Meter) et [`<progress>`](/fr/docs/Web/HTML/Element/Progress) sont potentiellement les pires. Comme nous l'avons vu précédemment, on peut définir leur largeur, mais au-delà de ça, il est très difficile de modifier la mise en forme. Le paramétrage de la hauteur varie d'un navigateur à l'autre, on peut changer la couleur de l'arrière-plan mais la barre au premier plan et `appearance: none` fera empirer les choses plutôt que le contraire.

Si vous souhaitez être capable de contrôler la mise en forme, il sera plus simple de créer votre propre contrôle.

## Testez vos compétences&nbsp;!

Vous avez fini cet article, mais vous rappelez-vous des informations essentielles&nbsp;? Pour vous évaluer et vérifier que vous avez retenu ce qu'il fallait avant de poursuivre, voyez [l'évaluation sur la mise en forme avancée](/fr/docs/Learn/Forms/Test_your_skills:_Advanced_styling). Attention, cette évaluation utilise également des notions abordées [dans le prochain article](/fr/docs/Learn/Forms/UI_pseudo-classes), n'hésitez pas à commencer par cette lecture avant l'évaluation.

## Résumé

Bien qu'il existe encore des difficultés pour utiliser CSS avec les formulaires HTML, il existe différentes façons de contourner les problèmes. Il n'existe pas de solution propre et universelle, mais les navigateurs récents offrent de nouvelles possibilités. La meilleure des solutions consiste à connaître les différences et la compatibilité des navigateurs pour le CSS qui porte sur les contrôles de formulaire.

Dans le prochain article de ce module, nous aborderons [les différentes pseudo-classes relatives à l'interface utilisateur](/fr/docs/Learn/Forms/UI_pseudo-classes) qui peuvent être utilisées dans les navigateurs modernes afin d'adapter la mise en forme d'un formulaire à différents états.

{{PreviousMenuNext("Learn/Forms/Styling_web_forms", "Learn/Forms/UI_pseudo-classes", "Learn/Forms")}}
