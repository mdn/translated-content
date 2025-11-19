---
title: Exemples interactifs (EmbedLiveSample)
short-title: Exemples interactifs
slug: MDN/Writing_guidelines/Page_structures/Live_samples
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

MDN prend en charge l'affichage de blocs de code dans les articles sous forme d'_exemples interactifs_, afin que les lecteur·ice·s puissent voir à la fois le code source et son résultat tel qu'il apparaît sur une page web.
Cette fonctionnalité permet aux lecteur·ice·s de comprendre exactement ce que le code exécuté produira, rendant la documentation dynamique et instructive.
Elle permet aussi aux auteur·ice·s d'être absolument certain·e·s que les blocs de code de la documentation produisent le résultat attendu et fonctionnent correctement avec différents navigateurs.

Le système d'exemples interactifs peut traiter des blocs de code écrits en HTML, CSS et JavaScript, quel que soit l'ordre dans lequel ils sont placés dans la page.
Cela garantit que le résultat correspond au code source combiné, car le système exécute le code directement dans la page.

Contrairement aux [exemples interactifs](/fr/docs/MDN/Writing_guidelines/Page_structures/Code_examples#quels_types_dexemples_de_code_existe), les exemples interactifs n'offrent pas de prise en charge intégrée pour la capture des logs de la console ou la réinitialisation des exemples modifiés par l'utilisateur·ice.
La section [Exemples](#exemples) montre comment vous pouvez implémenter ces fonctionnalités et d'autres options utiles.

## Comment fonctionnent les exemples interactifs ?

Les exemples interactifs regroupent les blocs de code, les fusionnent en HTML et affichent le HTML dans un {{HTMLElement("iframe")}}.
Un exemple interactif se compose de deux parties&nbsp;:

- Un ou plusieurs blocs de code regroupés
- Un appel de macro qui affiche le résultat des blocs de code dans un {{HTMLElement("iframe")}}

Chaque [bloc de code](/fr/docs/MDN/Writing_guidelines/Howto/Markdown_in_MDN#blocs_de_code_dexemple) contenant le code pour le résultat possède un identifiant de langage — `html`, `css` ou `js` — qui précise s'il s'agit de code HTML, CSS ou JavaScript. Les identifiants de langage doivent être présents sur les blocs de code concernés, et un appel de macro (`EmbedLiveSample`) doit être présent dans la page pour afficher le résultat&nbsp;:

````md
## Exemples

```html
<!-- HTML code -->
```

```css
/* CSS code */
```

\{{EmbedLiveSample("Exemples")}}
````

Le système d'exemples interactifs permet de regrouper les blocs de code de différentes manières pour afficher efficacement le résultat. La section suivante décrit ces méthodes.

### Regroupement des blocs de code

Les blocs de code peuvent être regroupés de deux manières&nbsp;:

1. En utilisant l'identifiant (ID) d'un titre ou d'un élément de bloc qui contient les blocs de code comme identifiant du groupe
2. En définissant une chaîne d'identification avec les blocs de code

Les blocs de code qui ne spécifient pas explicitement d'identifiant sont, par défaut, regroupés à l'aide de l'ID du titre ou de l'élément de bloc qui les contient. L'identifiant dans ce cas est l'ID d'un titre ou d'un élément de bloc (comme un {{HTMLElement("div")}}). Cela est illustré dans l'exemple ci-dessous, où les codes `html` et `css` du bloc «&nbsp;Mise en forme d'un paragraphe&nbsp;» sont utilisés pour générer le résultat de l'appel de macro `EmbedLiveSample`.

````md
## Exemples

### Mise en forme d'un paragraphe

Dans cet exemple, nous utilisons du CSS pour mettre en forme les paragraphes ayant la classe `fancy`.

#### HTML

```html
<p>Je ne suis pas stylé.</p>

<p class="fancy">Mais moi oui&nbsp;!</p>
```

#### CSS

```css
p.fancy {
  color: red;
}
```

#### Résultat

\{{EmbedLiveSample("Mise en forme d'un paragraphe")}}

Seul l'élément `<p>` avec `class="fancy"` sera affiché en rouge.
````

- Si l'ID appartient à un élément de bloc, le groupe inclut tous les blocs de code à l'intérieur de cet élément de bloc dont l'ID est utilisé.
- Si l'ID appartient à un titre, le groupe inclut tous les blocs de code qui suivent ce titre et précèdent le prochain titre du même niveau. Notez que les blocs de code sous les sous-titres du titre spécifié sont tous utilisés&nbsp;; si ce n'est pas l'effet souhaité, utilisez un ID sur un élément de bloc ou une chaîne d'identification.

Pour regrouper des blocs de code à l'aide d'un identifiant, ajoutez une chaîne au format `live-sample___{IDENTIFIANT}` dans l'info string du bloc de code. L'identifiant doit être unique pour les blocs de code que vous souhaitez regrouper. Par exemple, `live-sample___color-picker` utilise `color-picker` comme identifiant pour le système d'exemples interactifs, et tous les blocs de code avec `live-sample___color-picker` dans leur info string sont combinés dans l'exemple interactif.
L'exemple suivant regroupe un bloc CSS et un bloc JavaScript à l'aide de l'identifiant `color-picker`&nbsp;:

````md
## Exemples

### Mise en forme d'un paragraphe

Dans cet exemple, nous utilisons du CSS pour mettre en forme les paragraphes ayant la classe `fancy`.

```html live-sample___mise-en-forme-dun-paragraphe
<p>Je ne suis pas stylé.</p>

<p class="fancy">Mais moi oui&nbsp;!</p>
```

```css live-sample___mise-en-forme-dun-paragraphe
p.fancy {
  color: red;
}
```

Seul l'élément `<p>` avec `class="fancy"` sera affiché en rouge&nbsp;:

\{{EmbedLiveSample("mise-en-forme-dun-paragraphe")}}

```css live-sample___mise-en-forme-paragraphe
p.fancy {
  color: red;
}
```

Seul l'élément `<p>` avec `class="fancy"` sera affiché en rouge&nbsp;:

\{{EmbedLiveSample("mise-en-forme-paragraphe")}}
````

La macro utilise une URL spéciale qui inclut l'ID pour récupérer le résultat d'un groupe de blocs de code donné. Vous ne devez jamais coder en dur cette URL dans le contenu&nbsp;: si vous devez créer un lien vers l'exemple, utilisez la macro [`LiveSampleLink`](#macro_livesamplelink).

Le cadre (ou la page) résultant est sandboxé, sécurisé, et peut techniquement faire tout ce qui fonctionne sur le web. Bien sûr, en pratique, le code doit être pertinent pour le contenu de la page&nbsp;; tout contenu non pertinent pourra être supprimé par la communauté éditoriale de MDN.

Le système d'exemples interactifs propose de nombreuses options, que nous allons détailler point par point.

### Macros d'exemples interactifs

Il existe deux macros que vous pouvez utiliser pour afficher des exemples interactifs&nbsp;:

- [`EmbedLiveSample` <sup>(angl.)</sup>](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/embeds/embed_live_sample.rs) insère un exemple interactif dans une page
- [`LiveSampleLink` <sup>(angl.)</sup>](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/embeds/live_sample_link.rs) crée un lien qui ouvre l'exemple interactif dans une nouvelle page

Dans de nombreux cas, vous pouvez ajouter la macro `EmbedLiveSample` ou `LiveSampleLink` à des pages sans travail supplémentaire&nbsp;! Tant que l'exemple peut être identifié par l'ID d'un titre ou se trouve dans un bloc avec un ID utilisable, l'ajout de la macro suffit.

#### Macro EmbedLiveSample

```plain
\{{EmbedLiveSample(sample_id, width, height, screenshot_URL, page_slug, class_name, allow, sandbox)}}
```

- `sample_id`
  - : Obligatoire&nbsp;: il peut s'agir de la chaîne identifiant l'exemple ou de l'ID du titre ou du bloc englobant à partir duquel extraire le code.
    Pour vérifier si vous avez le bon ID de titre, regardez l'URL de la section dans la table des matières de la page&nbsp;; vous pouvez aussi le vérifier en consultant le code source de la page.
- `width` {{Deprecated_Inline}}
  - : L'attribut `width` pour le {{HTMLElement("iframe")}}, définit en `px`. Obsolète car il n'a plus d'effet&nbsp;: les exemples interactifs occupent toujours toute la largeur de la zone de contenu.
- `height`
  - : L'attribut `height` du {{HTMLElement("iframe")}}, définit en `px`. Doit être au moins `60`. Ce paramètre est optionnel&nbsp;; une hauteur par défaut raisonnable sera utilisée si vous l'omettez.
- `screenshot_URL` {{Deprecated_Inline}}
  - : L'URL d'une capture d'écran montrant à quoi doit ressembler l'exemple interactif. Obsolète&nbsp;; n'ajoutez des exemples interactifs que s'il existe un support navigateur raisonnable.
- `page_slug` {{Deprecated_Inline}}
  - : Le slug de la page contenant l'exemple&nbsp;; ce paramètre est optionnel, et s'il n'est pas fourni, l'exemple est extrait de la même page que celle où la macro est utilisée. Obsolète&nbsp;; n'incluez des exemples interactifs que si le code est sur la même page.
- `class_name` {{Deprecated_Inline}}
  - : Le nom de classe à appliquer au {{HTMLElement("iframe")}}. Obsolète&nbsp;; il n'y a aucune raison d'utiliser un autre nom de classe.
- `allow`
  - : L'attribut `allow` pour le {{HTMLElement("iframe")}}. Ce paramètre est optionnel&nbsp;; par défaut, aucune fonctionnalité n'est autorisée.
- `sandbox`
  - : Une chaîne contenant les attributs `sandbox` que l'exemple doit inclure.
    Les valeurs autorisées sont `allow-modals`, `allow-forms` et `allow-popups`.
    Plusieurs valeurs peuvent être fournies, comme `"allow-modals allow-popups"`.

#### Macro LiveSampleLink

```plain
\{{LiveSampleLink(block_ID, link_text)}}
```

- `block_ID`
  - : L'ID du titre ou du bloc englobant à partir duquel extraire le code. Pour être sûr d'avoir le bon ID, regardez l'URL de la section dans la table des matières de la page&nbsp;; vous pouvez aussi le vérifier en consultant le code source de la page.
- `link_text`
  - : Une chaîne de caractères à utiliser comme texte du lien.

## Utiliser le système d'exemples interactifs

Les sections ci-dessous décrivent quelques cas d'usage courants du système d'exemples interactifs.

### Mise en forme des exemples interactifs

Si vous écrivez un exemple interactif dans la section «&nbsp;Exemples&nbsp;», fournissez un titre H3 descriptif (`###`) pour cet exemple. Idéalement, écrivez une courte description de l'exemple expliquant le scénario et ce que vous souhaitez démontrer. Ajoutez ensuite des sous-sections avec les titres H4 suivants (`####`), dans l'ordre indiqué&nbsp;:

- HTML
- CSS
- JavaScript
- Résultat

Écrivez les blocs de code dans les sous-sections correspondantes ci-dessus.

Dans la sous-section **Résultat**, ajoutez l'appel à la macro `EmbedLiveSample`. De préférence, ajoutez aussi du texte pour décrire le résultat.

Si vous n'utilisez pas un certain type de langage (par exemple, si vous n'utilisez pas JavaScript) ou si vous masquez le bloc de code, vous devez omettre le titre correspondant.

### Masquer du code

Parfois, vous souhaitez simplement afficher le bloc de code statique pertinent pour l'exemple rendu dans la page. Cependant, vous avez toujours besoin des blocs de code HTML, CSS et JavaScript pour générer cet exemple.

Pour cela, vous pouvez masquer les blocs de code non pertinents en ajoutant l'info string `hidden` à l'identifiant de langage. Si vous faites cela, omettez les titres `### HTML/CSS/JavaScript` pour les blocs de code masqués.

En reprenant l'exemple ci-dessus mais en masquant le code HTML, cela donnerait&nbsp;:

````md
## Exemples

### Mise en forme d'un paragraphe

Dans cet exemple, nous utilisons du CSS pour mettre en forme les paragraphes ayant la classe `fancy`.

```html hidden
<p>Je ne suis pas stylé.</p>

<p class="fancy">Mais moi oui&nbsp;!</p>
```

#### CSS

```css
p.fancy {
  color: red;
}
```

#### Résultat

Seul l'élément `<p>` avec `class="fancy"` sera affiché en rouge.

\{{EmbedLiveSample("Mise en forme d'un paragraphe")}}
````

### Transformer des extraits en exemples interactifs

Un cas d'usage courant consiste à prendre des extraits de code déjà présents sur MDN et à les transformer en exemples interactifs.
La première étape consiste à ajouter des extraits de code ou à s'assurer que les extraits existants sont prêts à être utilisés comme exemples interactifs, tant sur le fond que sur la forme. Les extraits de code, pris ensemble, doivent constituer un exemple complet et exécutable. Par exemple, si l'extrait existant ne montre que du CSS, il peut être nécessaire d'ajouter un extrait HTML pour que le CSS s'applique.

Chaque morceau de code doit être dans un bloc de code, avec un bloc séparé pour chaque langage, correctement marqué selon le langage. La plupart du temps, cela a déjà été fait, mais il est toujours utile de vérifier que chaque bloc de code est bien configuré avec la bonne coloration syntaxique. Cela se fait avec un identifiant de langage sur le bloc de code de type `type-langage`, où _type-langage_ est le type de langage du bloc, par exemple `html`, `css` ou `js`.

> [!NOTE]
> Vous pouvez avoir plusieurs blocs pour chaque langage&nbsp;; ils seront tous concaténés. Cela permet d'avoir un morceau de code, suivi d'une explication, puis un autre morceau, etc. Cela facilite la création de tutoriels utilisant des exemples interactifs entrecoupés de texte explicatif.

Assurez-vous donc que les blocs de code HTML, CSS et/ou JavaScript sont bien configurés pour la coloration syntaxique du langage, et c'est tout bon.

## Exemples

Cette section contient des exemples montrant comment le système d'exemples interactifs peut être utilisé, y compris les différentes façons de regrouper les blocs de code qui composent un exemple, et comment afficher la sortie de journalisation dans vos exemples.

Notez que les titres des blocs de code («&nbsp;HTML&nbsp;», «&nbsp;CSS&nbsp;» ou «&nbsp;JavaScript&nbsp;») sont utilisés par convention dans la plupart des exemples MDN, mais ne sont pas obligatoires pour la macro d'exemple interactif.

### Regroupement des blocs de code par titre

#### HTML

Ce code HTML crée un paragraphe et des blocs pour nous aider à positionner et à styliser un message.

```html
<p>Un exemple simple du système d'exemples interactifs en action.</p>
<div class="box">
  <div id="item">Bonjour le monde&nbsp;! Bienvenue sur MDN</div>
</div>
```

#### CSS

Le code CSS met en forme la boîte ainsi que le texte à l'intérieur.

```css
.box {
  width: 200px;
  border-radius: 6px;
  padding: 20px;
  background-color: #ffaabb;
}

#item {
  font-weight: bold;
  text-align: center;
  font-family: sans-serif;
  font-size: 1.5em;
}
```

#### JavaScript

Dans l'exemple JavaScript, nous attachons un gestionnaire d'événement au texte «&nbsp;Bonjour le monde&nbsp;!&nbsp;» qui le bascule lorsqu'il est cliqué.

```js
const el = document.getElementById("item");
let toggleClick = false;
el.onclick = function () {
  this.textContent = toggleClick
    ? "Bonjour le monde ! Bienvenue sur MDN"
    : "Aïe, arrêtez de me cliquer dessus !";
  toggleClick = !toggleClick;
};
```

#### Résultat

Voici le résultat de l'exécution des blocs de code ci-dessus via `\{{EmbedLiveSample('grouping_code_blocks_by_heading')}}`&nbsp;:

{{EmbedLiveSample('grouping_code_blocks_by_heading')}}

Voici un lien généré en appelant ces blocs de code via `\{{LiveSampleLink('grouping_code_blocks_by_heading', 'Lien de démonstration d\'exemple interactif')}}`&nbsp;:

{{LiveSampleLink('grouping_code_blocks_by_heading', 'Lien de démonstration d\'exemple interactif')}}

### Regroupement des blocs de code par identifiant

Ce code HTML crée un paragraphe et des blocs pour nous aider à positionner et à styliser un message. La chaîne `live-sample___hello-world` a été ajoutée à l'identifiant de langage `html` pour ce bloc de code.

```html live-sample___hello-world
<p>Un exemple simple du système d'exemples interactifs en action.</p>
<div class="box">
  <div id="item">Bonjour le monde ! Bienvenue sur MDN</div>
</div>
```

Le code CSS met en forme la boîte ainsi que le texte à l'intérieur. La chaîne `live-sample___hello-world` a été ajoutée à l'identifiant de langage `css` pour ce bloc de code.

```css live-sample___hello-world
.box {
  width: 200px;
  border-radius: 6px;
  padding: 20px;
  background-color: #ffaabb;
}

#item {
  font-weight: bold;
  text-align: center;
  font-family: sans-serif;
  font-size: 1.5em;
}
```

Ce code JavaScript attache un gestionnaire d'événement au texte « Bonjour le monde ! » qui le bascule lorsqu'il est cliqué. La chaîne `live-sample___hello-world` a aussi été ajoutée à l'identifiant de langage `js` pour ce bloc de code.

```js live-sample___hello-world
const el = document.getElementById("item");
let toggleClick = false;
el.onclick = function () {
  this.textContent = toggleClick
    ? "Bonjour le monde ! Bienvenue sur MDN"
    : "Aïe, arrêtez de me cliquer dessus !";
  toggleClick = !toggleClick;
};
```

On obtient ce résultat en exécutant les blocs de code ci-dessus en utilisant l'identifiant de chaîne `hello-world` dans l'appel de macro `\{{EmbedLiveSample('hello-world')}}`&nbsp;:

{{EmbedLiveSample("hello-world")}}

### Affichage d'un `<iframe>` d'une certaine taille

Utilisez le paramètre `height` pour spécifier la taille de l'élément `<iframe>` qui contient le résultat de l'exemple interactif.

```html
<p>Juste un texte simple ici.</p>
```

Résultat de `\{{EmbedLiveSample("iframe_size", "", "60")}}`&nbsp;:

{{EmbedLiveSample("iframe_size", "", "60")}}

Résultat de `\{{EmbedLiveSample("iframe_size", "", "120")}}`&nbsp;:

{{EmbedLiveSample("iframe_size", "", "120")}}

### Autoriser des fonctionnalités

Le paramètre `allow` peut être utilisé pour spécifier les fonctionnalités autorisées dans l'élément `<iframe>` qui contient le résultat de l'exemple interactif. Les valeurs disponibles proviennent de la [syntaxe de la politique d'autorisations pour les frames](/fr/docs/Web/HTTP/Guides/Permissions_Policy#syntaxe_du_cadre_intégré).

```html
<div id="fullscreen-content">
  <button id="toggle-btn">Basculer en plein écran</button>
</div>
```

```js
const toggleBtn = document.getElementById("toggle-btn");
const fullscreenContent = document.getElementById("fullscreen-content");

toggleBtn.addEventListener("click", () => {
  if (document.fullscreenElement) {
    document.exitFullscreen();
  } else {
    fullscreenContent.requestFullscreen();
  }
});
```

Résultat de `\{{EmbedLiveSample("allowing_features", "", "60", "", "", "", "fullscreen")}}`&nbsp;:

{{EmbedLiveSample("allowing_features", "", "60", "", "", "", "fullscreen")}}

Résultat de `\{{EmbedLiveSample("allowing_features", "", "60")}}`&nbsp;:

{{EmbedLiveSample("allowing_features", "", "60")}}

### Affichage d'un journal à entrée unique

Cet exemple montre comment implémenter un journal à entrée unique dans votre exemple interactif, où la valeur précédente est remplacée à chaque nouvelle entrée de journal.

Pour plus de clarté, cet exemple sépare le code de journalisation et le code qui l'utilise, et affiche d'abord le code de journalisation.
En général, lors de l'implémentation de vos propres exemples, placez les éléments de journalisation sous les autres éléments d'interface utilisateur.

> [!NOTE]
> Afficher la sortie du journal dans l'exemple offre une bien meilleure expérience utilisateur que d'utiliser `console.log()`.

#### HTML

Créez un élément {{HTMLElement("pre")}} avec un `id` de `"log"` pour afficher la sortie du journal.

```html
<pre id="log"></pre>
```

#### JavaScript

Définissez ensuite la fonction de journalisation `log()`.
Elle prend le texte à journaliser en argument et l'utilise pour remplacer le journal existant.

```js
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = text;
}
```

Notez que le contenu de l'élément de journal est défini en utilisant la propriété `innerText`, ce qui est plus sûr que d'utiliser `innerHTML` car le texte journalisé n'est pas interprété comme du HTML (ce qui pourrait potentiellement injecter du code malveillant).

#### CSS

Le CSS définit la hauteur de l'élément de journalisation.

```css
#log {
  height: 20px;
}
```

#### Code de test du journal

Cet exemple est conçu pour montrer « comment journaliser », donc « ce qui est journalisé » n'a pas d'importance.
C'est donc trivialement implémenté comme un bouton que l'utilisateur·ice peut cliquer pour incrémenter une valeur.

```html
<button id="increment" type="button">Cliquez-moi plusieurs fois</button>
```

```js
const incrementButton = document.querySelector("#increment");
let incrementValue = 0;
incrementButton.addEventListener("click", () => {
  incrementValue++;
  log(`Le bouton a été cliqué ${incrementValue} fois`);
});
```

#### Résultat

Cliquez sur le bouton pour ajouter une nouvelle entrée au journal.

{{EmbedLiveSample("Affichage d'un journal à entrée unique", "100%", "80px")}}

### Affichage d'un journal qui ajoute des éléments

Cet exemple montre comment implémenter une «&nbsp;console de journalisation&nbsp;» simple dans votre exemple interactif.
La console ajoute une nouvelle ligne à la fin de la sortie à chaque fois qu'une entrée de journal est ajoutée, en faisant défiler le nouvel élément dans la vue.

Pour plus de clarté, cet exemple sépare le code de journalisation et le code qui l'utilise, et affiche d'abord le code de journalisation.
En général, lors de l'implémentation de vos propres exemples, placez les éléments de journalisation sous les autres éléments d'interface utilisateur.

> [!NOTE]
> Afficher la sortie du journal dans l'exemple offre une bien meilleure expérience utilisateur que d'utiliser `console.log()`.
>
> Voir [`DataTransfer.effectAllowed`](/fr/docs/Web/API/DataTransfer/effectAllowed#paramètre_effectallowed) pour un exemple plus complet.

#### HTML

Créez un élément {{HTMLElement("pre")}} avec un `id` de `"log"` pour afficher la sortie du journal.

```html
<pre id="log"></pre>
```

#### JavaScript

Définissez ensuite la fonction de journalisation `log()`.
Elle prend le texte à journaliser en argument et l'ajoute au contenu de l'élément de journal comme une nouvelle ligne.
La fonction définit aussi la propriété `scrollTop` de l'élément à la valeur de `scrollHeight`, ce qui force la nouvelle ligne à défiler dans la vue.

```js
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}
```

Comme dans l'exemple précédent, nous utilisons la propriété `innerText` pour définir le contenu, car cela est moins susceptible d'introduire du code malveillant que d'utiliser `innerHTML`.

#### CSS

Le CSS ajoute des barres de défilement si le contenu de l'élément déborde, définit la hauteur de l'élément de journalisation et ajoute une bordure.
Notez que le JavaScript ci-dessus garantit que si le contenu déborde, l'ajout d'une nouvelle ligne de journal fera défiler le texte dans la vue.

```css
#log {
  height: 100px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
}
```

#### Code de test du journal

Cet exemple est conçu pour montrer «&nbsp;comment journaliser&nbsp;», donc «&nbsp;ce qui est journalisé&nbsp;» n'a pas d'importance.
C'est donc trivialement implémenté comme un bouton que l'utilisateur·ice peut cliquer pour incrémenter une valeur.

```html
<button id="increment" type="button">Cliquez-moi plusieurs fois</button>
```

```js
const incrementButton = document.querySelector("#increment");
let incrementValue = 0;
incrementButton.addEventListener("click", () => {
  incrementValue++;
  log(`Le bouton a été cliqué ${incrementValue} fois`);
});
```

#### Résultat

Cliquez sur le bouton pour ajouter une nouvelle entrée au journal.

{{EmbedLiveSample("Affichage d'un journal qui ajoute des éléments", "100%", "180px")}}

### Affichage d'un bouton de réinitialisation

Un bouton de réinitialisation peut être utile pour les exemples qui ne peuvent pas être restaurés à leur état initial sans recharger la page.
Par exemple, [l'exemple «&nbsp;paramètre priority&nbsp;» de `Highlight.priority`](/fr/docs/Web/API/Highlight/priority#résultat_2) nécessite un bouton de réinitialisation, car une fois que vous avez défini l'une ou l'autre priorité, l'état initial n'est plus disponible.

Cet exemple montre comment ajouter un bouton de réinitialisation à l'exemple [Affichage d'un journal qui ajoute des éléments](#affichage_dun_journal_qui_ajoute_des_éléments) ci-dessus.
Notez que le JavaScript et le CSS pour le code de journalisation sont les mêmes que dans l'exemple précédent, donc ce code est masqué.

#### HTML

Le HTML de l'exemple inclut maintenant un bouton de réinitialisation.

```html
<button id="increment" type="button">Cliquez-moi plusieurs fois</button>
<button id="reset" type="button">Réinitialiser</button>
<pre id="log"></pre>
```

#### JavaScript

Le code du bouton ajoute un gestionnaire d'événement `click` qui recharge simplement le cadre contenant l'exemple courant.

```js
const reload = document.querySelector("#reset");

reload.addEventListener("click", () => {
  window.location.reload(true);
});
```

```css hidden
#log {
  height: 100px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
}
```

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}

const incrementButton = document.querySelector("#increment");
let incrementValue = 0;
incrementButton.addEventListener("click", () => {
  incrementValue++;
  log(`Le bouton a été cliqué ${incrementValue} fois`);
});
```

#### Résultat

Cliquez sur le bouton «&nbsp;Cliquez-moi plusieurs fois&nbsp;» un certain nombre de fois.
Réinitialisez l'exemple en appuyant sur le bouton «&nbsp;Réinitialiser&nbsp;».

{{EmbedLiveSample("Affichage d'un bouton de réinitialisation", "100%", "180px")}}

## Conventions concernant les exemples interactifs

- Ordre des blocs de code
  - : Lors de l'ajout d'un exemple interactif, les blocs de code doivent être triés de sorte que le premier corresponde au langage principal de l'exemple (s'il y en a un). Par exemple, pour un exemple interactif dans la référence HTML, le premier bloc doit être HTML&nbsp;; pour la référence CSS, il doit s'agir de CSS, etc.
- Nom des titres
  - : Lorsqu'il n'y a pas d'ambiguïté (par exemple, si l'exemple est dans une section «&nbsp;Exemples&nbsp;»), les titres doivent être simples, avec uniquement le nom du langage correspondant&nbsp;: HTML, CSS, JavaScript, SVG, etc. (voir ci-dessus). Des titres comme «&nbsp;Contenu HTML&nbsp;» ou «&nbsp;Contenu JavaScript&nbsp;» ne doivent pas être utilisés. Cependant, si un titre court rend le contenu peu clair, un titre plus explicite peut être utilisé.
- Utilisation d'un bloc «&nbsp;Résultat&nbsp;»
  - : Après les différents blocs de code, veuillez utiliser un dernier bloc «&nbsp;Résultat&nbsp;» avant d'utiliser la macro `EmbedLiveSample` (voir ci-dessus). Cela permet de clarifier la sémantique de l'exemple pour les lecteur·ice·s et les outils qui analysent la page (par exemple, lecteur d'écran, robot d'indexation).
