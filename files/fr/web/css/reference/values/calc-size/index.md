---
title: Fonction CSS `calc-size()`
short-title: calc-size()
slug: Web/CSS/Reference/Values/calc-size
l10n:
  sourceCommit: b760560abe30bd69ca968dac38528102f423b5ea
---

{{SeeCompatTable}}

La [fonction](/fr/docs/Web/CSS/Reference/Values/Functions) [CSS](/fr/docs/Web/CSS) **`calc-size()`** permet d'effectuer des calculs sur des valeurs de {{Glossary("intrinsic size", "taille intrinsèque")}} telles que `auto`, {{CSSxRef("fit-content")}} et {{CSSxRef("max-content")}}&nbsp;; cela n'est pas pris en charge par la fonction {{CSSxRef("calc()")}}.

Les valeurs retournées par `calc-size()` peuvent également être {{Glossary("Interpolation", "interpolées")}}, ce qui permet d'utiliser des valeurs de mots-clés de taille dans des [animations](/fr/docs/Web/CSS/Guides/Animations) et des [transitions](/fr/docs/Web/CSS/Guides/Transitions). En effet, inclure `calc-size()` dans une valeur de propriété applique automatiquement [`interpolate-size: allow-keywords`](/fr/docs/Web/CSS/Reference/Properties/interpolate-size) à la sélection.

Notez cependant que `interpolate-size` est hérité, donc l'appliquer à un élément permet l'interpolation des mots-clés de taille intrinsèque pour chaque propriété appliquée à cet élément et à ses enfants. Par conséquent, `interpolate-size` est la solution préférée pour activer les animations de taille intrinsèque. Vous ne devez utiliser `calc-size()` pour activer les animations de taille intrinsèque que si elles nécessitent également des calculs.

## Syntaxe

```css
/* Passer une valeur à travers calc-size() */
calc-size(auto, taille)
calc-size(fit-content, taille)

/* Effectuer un calcul */
calc-size(min-content, taille + 100px)
calc-size(fit-content, taille / 2)

/* Calcul incluant une fonction */
calc-size(auto, round(up, taille, 50px))
```

### Paramètres

La syntaxe de la fonction `calc-size()` est la suivante&nbsp;:

```plain
calc-size(<calc-size-basis>, <calc-sum>)
```

Les paramètres sont&nbsp;:

- `<calc-size-basis>`
  - : La valeur (le plus souvent une taille intrinsèque) sur laquelle vous souhaitez effectuer un calcul.

- {{CSSxRef("&lt;calc-sum&gt;")}}
  - : Une expression qui définit le calcul à effectuer sur le `<calc-size-basis>`.

### Valeur de retour

Retourne une valeur égale au `<calc-size-basis>` modifié par l'expression `<calc-sum>`. Comme la valeur `<calc-size-basis>` est une valeur de taille intrinsèque, la valeur de retour est une valeur de taille intrinsèque modifiée qui se comporte comme la valeur de taille intrinsèque entrée dans la fonction.

## Description

Certains algorithmes de mise en page des navigateurs ont des comportements spéciaux pour les mots-clés de taille intrinsèque. La fonction `calc-size()` est explicitement définie pour représenter une taille intrinsèque plutôt qu'une longueur ou un pourcentage ({{CSSxRef("length-percentage")}}), garantissant ainsi la correction. `calc-size()` permet d'effectuer des calculs sur des valeurs de taille intrinsèque de manière sûre et bien définie.

### Valeurs valides pour le premier argument (`<calc-size-basis>`)

Le premier argument de `calc-size()` peut être l'une des valeurs intrinsèques suivantes&nbsp;:

- `auto`
- {{CSSxRef("min-content")}}
- {{CSSxRef("max-content")}}
- {{CSSxRef("fit-content")}}
- `content` (pour les conteneurs dimensionnés en utilisant {{CSSxRef("flex-basis")}}).

Il existe également quelques valeurs spéciales que cet argument peut prendre&nbsp;:

- Une valeur `calc-size()` imbriquée. Ce n'est pas quelque chose que vous feriez très souvent, mais c'est disponible, garantissant que l'utilisation d'une [variable CSS](/fr/docs/Web/CSS/Guides/Cascading_variables/Using_custom_properties) comme `<calc-size-basis>` fonctionne toujours, à condition que la variable soit une valeur valide pour la propriété sur laquelle `calc-size()` est appliqué. Par exemple, ceci fonctionne&nbsp;:

  ```css
  section {
    height: calc-size(calc-size(max-content, size), size + 2rem);
  }
  ```

  Ceci fonctionne également&nbsp;:

  ```css
  :root {
    --taille-intrinseque: calc-size(max-content, size);
  }

  section {
    height: calc-size(var(--taille-intrinseque), size + 2rem);
  }
  ```

- Une autre `<calc-sum>`, avec les mêmes restrictions que le `<calc-sum>` défini pour le deuxième argument, sauf que le mot-clé `size` ne peut pas être inclus. Vous ne faites probablement pas cela, car vous ne faites plus de calcul sur une valeur de taille intrinsèque, mais si une valeur de propriété personnalisée est un `<calc-sum>`, la fonction fonctionne toujours. Par exemple, ceci fonctionne directement ou si vous utilisez une propriété personnalisée avec une valeur de `300px + 2rem`&nbsp;:

  ```css
  section {
    height: calc-size(300px + 2rem, size / 2);
  }
  ```

- Le mot-clé `any`, qui représente une taille finie non définie. Dans ce cas, le mot-clé `size` ne peut pas être inclus dans le deuxième argument, et `calc-size()` renvoie le résultat du calcul du deuxième argument. Par exemple&nbsp;:

  ```css
  section {
    height: calc-size(any, 300px * 1.5); /* Retourne 450px */
  }
  ```

Mélanger différentes tailles intrinsèques dans le même calcul ne fonctionne pas. Par exemple, `max-content - min-content` n'a pas de sens. `calc-size()` ne permet qu'une seule valeur de taille intrinsèque dans chaque calcul, évitant ainsi ce problème.

### Valeurs valides pour le deuxième argument (`<calc-sum>`)

Le deuxième argument de `calc-size()` est une expression {{CSSxRef("calc-sum")}}.

Dans cette expression&nbsp;:

- Le mot-clé `size` représente le `<calc-size-basis>` défini comme premier argument.
- Les opérandes peuvent inclure `size` et tout type de valeur qui a du sens dans le contexte.
- Les opérateurs `+`, `-`, `*` et `/` peuvent être inclus.
- D'autres fonctions mathématiques peuvent être incluses, telles que {{CSSxRef("round()")}}, {{CSSxRef("max()")}}, ou même un `calc-size()` imbriqué.
- L'expression globale doit correspondre à une longueur ou un pourcentage ({{CSSxRef("&lt;length-percentage&gt;")}}), et se résoudre en une longueur ({{CSSxRef("length")}}).

### Activer l'animation des valeurs de taille intrinsèque

La valeur retournée par `calc-size()` peut être interpolée, ce qui permet d'animer entre une valeur {{CSSxRef("&lt;length-percentage&gt;")}} et une valeur de taille intrinsèque retournée par `calc-size()`.

> [!NOTE]
> Vous devez éviter d'animer les propriétés du modèle de boîte si possible, afin de réduire les évènements de mise en page et d'atténuer l'impact sur les performances (voir [Chemin de rendu critique > Mise en page](/fr/docs/Web/Performance/Guides/Critical_rendering_path#mise_en_page)).

Par exemple, vous pouvez utiliser une [transition](/fr/docs/Web/CSS/Guides/Transitions) pour animer la `width` d'un conteneur entre `0` et `auto` comme suit&nbsp;:

```css
section {
  width: 0;
  transition: width ease 1s;
}

section:hover,
section:focus {
  width: calc-size(auto, size);
}
```

Dans le cas ci-dessus, nous n'effectuons aucun calcul — nous plaçons simplement `auto` dans `calc-size()` et le retournons inchangé. La propriété {{CSSxRef("interpolate-size")}} rend les animations comme celle-ci plus simples à mettre en œuvre dans la plupart des cas, en particulier lorsqu'il y a plusieurs animations à prendre en compte. Elle est héritée et n'a donc besoin d'être déclarée qu'une seule fois sur une propriété ancêtre, ce qui signifie que nous aurions pu effectuer la transition entre `0` et `auto` sans utiliser `calc-size()`.

La fonction `calc-size()` ne doit être utilisée pour activer les animations de taille intrinsèque que si elles nécessitent également des calculs. Par exemple, dans le cas suivant, nous animons la `width` _et_ appliquons un calcul à l'état final de taille intrinsèque&nbsp;:

```css
section {
  width: 0;
  transition: width ease 1s;
}

section:hover,
section:focus {
  width: calc-size(auto, size + 2rem);
}
```

Un cas où `calc-size()` est utile est lorsque vous souhaitez animer entre une taille intrinsèque et une version modifiée de cette même taille intrinsèque. Cela n'est pas possible avec `interpolate-size` et `calc()`. Par exemple, la définition {{CSSxRef("@keyframes")}} suivante anime la `width` d'un conteneur entre `fit-content` et 70% du `fit-content`.

```css
@keyframes narrower {
  from {
    width: fit-content;
  }

  to {
    width: calc-size(fit-content, size * 0.7);
  }
}
```

> [!NOTE]
> Notez que `calc-size()` ne permet pas d'animer entre deux valeurs de taille intrinsèque différentes.

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Utilisation simple de `calc-size`

Cet exemple montre comment dimensionner de base un conteneur en utilisant `calc-size()`.

#### HTML

Le HTML contient un seul élément {{HTMLElement("section")}} qui contient du contenu enfant.

```html
<section>
  <h2>Citation favorite</h2>

  <p>
    La mode est quelque chose de tellement laid qu'il faut la changer toutes les
    quinze minutes.
  </p>
</section>
```

#### CSS

```css hidden
* {
  box-sizing: border-box;
}

section {
  font-family: "Helvetica", "Arial", sans-serif;
  border: 1px solid black;
}

h2 {
  margin: 0;
  font-weight: normal;
  font-size: 1.1rem;
  text-align: center;
  letter-spacing: 1px;
}

p {
  font-size: 0.8rem;
}
```

Dans le CSS, nous utilisons [les boîtes flexibles](/fr/docs/Web/CSS/Guides/Flexible_box_layout) pour centrer les éléments enfants à l'intérieur de la `<section>`, et nous définissons la largeur (`width`) et la hauteur (`height`) de la `<section>` avec des fonctions `calc-size()`. La `width` est définie égale à `fit-content` plus `6rem`. La `height` est définie à `auto` multiplié par deux.

```css
section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: calc-size(fit-content, size + 6rem);
  height: calc-size(auto, size * 2);
}
```

Le reste du CSS a été masqué pour des raisons de concision.

#### Résultat

Nous avons créé un espace horizontal et vertical pour que le texte soit centré, sans utiliser de padding.

{{EmbedLiveSample("Utilisation simple de `calc-size`", "100%", 150)}}

### Animations simples avec `calc-size`

Cet exemple montre comment utiliser `calc-size()` pour animer entre une taille spécifique et une taille intrinsèque. La démo présente un badge de personnage/«&nbsp;étiquette de nom&nbsp;», qui peut être survolé ou mis au point pour révéler des informations sur le personnage. La révélation est gérée par une transition de la hauteur ({{CSSxRef("height")}}) entre une longueur définie et `max-content`.

#### HTML

Le HTML contient un seul élément {{HTMLElement("section")}} avec [`tabindex="0"`](/fr/docs/Web/HTML/Reference/Global_attributes/tabindex) défini afin qu'il puisse recevoir la sélection clavier. La `<section>` contient des éléments HTML {{HTMLElement("header")}} et {{HTMLElement("main")}}, chacun avec leur propre contenu enfant.

```html
<section tabindex="0">
  <header>
    <h2>Chris Mills</h2>
  </header>
  <main>
    <p>Chris est le fantôme silencieux de MDN.</p>
    <ul>
      <li><strong>Hauteur</strong>: 3,03 m</li>
      <li><strong>Poids</strong>: 160 kg</li>
      <li><strong>Tech Fu</strong>: 7</li>
      <li><strong>Mauvaises blagues</strong>: 9</li>
    </ul>
  </main>
</section>
```

#### CSS

```css hidden
* {
  box-sizing: border-box;
}

section {
  font-family: "Helvetica", "Arial", sans-serif;
  width: 175px;
  border-radius: 5px;
  background: #eeeeee;
  box-shadow:
    inset 1px 1px 4px rgb(255 255 255 / 0.5),
    inset -1px -1px 4px rgb(0 0 0 / 0.5);
}

header {
  padding: 10px;
  border-bottom: 2px solid #cccccc;
}

main {
  padding: 0.7rem;
}

h2 {
  margin: 0;
  font-weight: normal;
  font-size: 1.1rem;
  text-align: center;
  letter-spacing: 1px;
}

p,
li {
  font-size: 0.8rem;
  line-height: 1.5;
}

p {
  margin-top: 0;
}
```

Dans le CSS, nous définissons la hauteur ({{CSSxRef("height")}}) de la `<section>` à `2.5rem` et le débordement ({{CSSxRef("overflow")}}) à `hidden` afin que seul le `<header>` soit affiché par défaut, puis nous spécifions une `transition` qui anime la `height` de la `<section>` sur 1 seconde lors des changements d'état. Enfin, nous définissons la `height` de la `<section>` à un appel de fonction `calc-size()` sur {{CSSxRef(":hover")}} et {{CSSxRef(":focus")}}. La valeur de retour de la fonction est l'équivalent de `max-content` + `2rem`.

```css
section {
  height: 2.5rem;
  overflow: hidden;
  transition: height ease 1s;
}

section:hover,
section:focus {
  height: calc-size(max-content, size + 2rem);
}
```

Le reste du CSS a été masqué pour des raisons de concision.

#### Résultat

Essayez de survoler la `<section>` ou de la sélectionner avec le clavier — elle s'anime jusqu'à sa hauteur maximale + 2rem, révélant tout le contenu avec 2rems d'espace supplémentaire en bas.

{{EmbedLiveSample("Animations simples avec `calc-size`", "100%", 250)}}

### Ajuster la largeur de lecture en fonction de `fit-content`

Cet exemple montre un conteneur avec du texte à l'intérieur, et un bouton qui peut être cliqué pour rendre la largeur du conteneur plus étroite ou plus large en fonction des préférences de lecture.

#### HTML

Le HTML contient un seul élément {{HTMLElement("section")}} avec du contenu texte enfant, ainsi qu'un {{HTMLElement("button")}} pour changer la largeur de la `<section>`.

```html
<section class="easy-reader">
  <h2>Lecture facile</h2>

  <p>
    Eius velit aperiam ipsa. Deleniti eum excepturi ut magni maxime maxime
    beatae. Dicta aperiam est laudantium ut illum facere qui officiis. Sunt
    deleniti quam id. Quis sunt voluptatem praesentium minima dolorum autem
    consequatur velit.
  </p>

  <p>
    Vitae ab incidunt velit aspernatur deleniti distinctio rerum. Et natus sed
    et quos mollitia quia quod. Quae officia ex ea. Ducimus ut voluptatem et et
    debitis. Quidem provident laboriosam exercitationem similique deleniti.
    Temporibus vel veniam mollitia magni unde a nostrum.
  </p>

  <button class="width-adjust">Plus étroit</button>
</section>
```

#### CSS

```css hidden
* {
  box-sizing: border-box;
}

body {
  width: 600px;
  margin: 0 auto;
}

section {
  margin-top: 20px;
  font-family: "Helvetica", "Arial", sans-serif;
  background: #eeeeee;
  border: 2px solid #cccccc;
  padding: 0 20px;
  position: relative;
}

p,
li {
  font-size: 0.8rem;
  line-height: 1.5;
}

button {
  position: absolute;
  top: 2px;
  right: 2px;
}
```

Dans le CSS, nous définissons la largeur ({{CSSxRef("width")}}) de la `<section>` à une valeur par défaut de {{CSSxRef("fit-content")}}. Nous définissons ensuite deux ensembles de {{CSSxRef("@keyframes")}}, `narrower`, qui anime de `fit-content` à 70 % de `fit-content` (calculé à l'aide de `calc-size()`), et `wider`, qui anime les mêmes valeurs mais dans la direction opposée. Enfin, nous attachons ces animations à deux classes — `.narrower` et `.wider`. Chaque animation est définie pour durer une seconde et pour conserver l'état final une fois terminée.

```css
section {
  width: fit-content;
}

@keyframes narrower {
  from {
    width: fit-content;
  }

  to {
    width: calc-size(fit-content, size * 0.7);
  }
}

@keyframes wider {
  from {
    width: calc-size(fit-content, size * 0.7);
  }

  to {
    width: fit-content;
  }
}

.narrower {
  animation: narrower 1s ease forwards;
}

.wider {
  animation: wider 1s ease forwards;
}
```

Le reste du CSS a été masqué pour des raisons de concision.

#### JavaScript

Le JavaScript fournit un basculeur plus étroit/plus large qui applique la classe pertinente à la `<section>` lorsque le bouton est cliqué&nbsp;:

```js
const widthAdjustBtn = document.querySelector(".width-adjust");
const easyReader = document.querySelector(".easy-reader");

widthAdjustBtn.addEventListener("click", () => {
  if (easyReader.classList.length === 1) {
    easyReader.classList.add("narrower");
    widthAdjustBtn.textContent = "Plus large";
  } else if (easyReader.classList.contains("wider")) {
    easyReader.classList.replace("wider", "narrower");
    widthAdjustBtn.textContent = "Plus large";
  } else if (easyReader.classList.contains("narrower")) {
    easyReader.classList.replace("narrower", "wider");
    widthAdjustBtn.textContent = "Plus étroit";
  }
});
```

#### Résultat

Essayez de cliquer sur le `<button>` plusieurs fois pour ajuster la `<section>` entre la largeur et la lecture étroite, réalisée en manipulant la `width` en fonction de la valeur `fit-content`.

{{EmbedLiveSample("Ajuster la largeur de lecture en fonction de `fit-content`", "100%", 300)}}

### Utiliser une fonction à l'intérieur de la fonction `calc-size()`

Comme mentionné précédemment, il est possible d'utiliser une autre fonction à l'intérieur de `calc-size()`. Cet exemple définit [`field-sizing: content`](/fr/docs/Web/CSS/Reference/Properties/field-sizing) sur les éléments HTML {{HTMLElement("input")}} pour les rendre aussi larges que le contenu saisi, puis utilise une fonction [`max()`](/fr/docs/Web/CSS/Reference/Values/max) à l'intérieur de `calc-size()` pour s'assurer que les `<input>` ont au moins une taille minimale, et ne commencent à croître que lorsque le texte saisi devient plus large que cette taille — en étant défini sur `fit-content` plus `20px`.

#### HTML

Le HTML contient un élément HTML {{HTMLElement("form")}} contenant trois types de `<input>` textuels. Chaque `<input>` a un {{HTMLElement("label")}} associé pour rendre le formulaire accessible, et un [`maxlength`](/fr/docs/Web/HTML/Reference/Attributes/maxlength) appliqué pour empêcher les valeurs saisies de devenir suffisamment longues pour casser la mise en page du formulaire.

```html
<form>
  <div>
    <label for="name">Nom&nbsp;:</label>
    <input type="text" id="name" name="name" maxlength="48" />
  </div>
  <div>
    <label for="email">Courriel&nbsp;:</label>
    <input type="email" id="email" name="email" maxlength="48" />
  </div>
  <div>
    <label for="address">Adresse&nbsp;:</label>
    <input type="text" id="address" name="address" maxlength="60" />
  </div>
</form>
```

#### CSS

```css hidden
* {
  box-sizing: border-box;
}

body {
  width: 600px;
  margin: 0 auto;
}

form {
  margin-top: 20px;
  padding: 20px;
  font-family: "Helvetica", "Arial", sans-serif;
  background: #eeeeee;
  border: 2px solid #cccccc;
}

div {
  display: flex;
  align-items: center;
}

div:not(div:last-child) {
  margin-bottom: 20px;
}
```

Dans le CSS, nous définissons la largeur (`width`) des éléments `<label>` à `100px`. Nous définissons `field-sizing: content` sur les éléments HTML {{HTMLElement("input")}} pour les rendre aussi larges que le contenu saisi — par défaut, ils n'ont aucune largeur, car rien n'est saisi. Pour y remédier, nous définissons leurs valeurs de `width` à `calc-size(fit-content, max(100px, size + 20px))`. Cela signifie qu'ils ont une largeur minimale de `100px`, même sans valeur saisie. Lorsque la valeur saisie devient plus large que `100px`, leur largeur (`width`) change en `fit-content` plus `20px`, ce qui signifie qu'ils commencent à croître avec la taille du contenu tout en gardant un écart de `20px` sur le côté droit.

```css
label {
  width: 100px;
}

input {
  field-sizing: content;
  width: calc-size(fit-content, max(100px, size + 20px));
}
```

Le reste du CSS a été masqué pour des raisons de concision.

#### Résultat

Essayez de saisir du texte dans les champs du formulaire et observez comment ils s'agrandissent lorsque les valeurs commencent à devenir aussi larges que la largeur minimale imposée par la fonction `max()`.

{{EmbedLiveSample("Utiliser une fonction à l'intérieur de la fonction `calc-size()`", "100%", 200)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{CSSxRef("interpolate-size")}}
- La fonction {{CSSxRef("calc()")}}
- La fonction {{CSSxRef("round()")}}
- [Animer vers `height: auto;` (et d'autres mots-clés de dimensionnement intrinsèque) en CSS](https://developer.chrome.com/docs/css-ui/animate-to-height-auto?hl=fr) sur developer.chrome.com (2024)
