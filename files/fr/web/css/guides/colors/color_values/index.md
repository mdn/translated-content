---
title: Valeurs de couleur CSS
short-title: Valeurs de couleur
slug: Web/CSS/Guides/Colors/Color_values
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

Pour représenter une couleur dans le CSS, vous devez trouver un moyen de traduire le concept analogique de «&nbsp;couleur&nbsp;» en une forme numérique qu'un ordinateur peut utiliser. Cela se fait généralement en décomposant la couleur en composantes, tels que les quantités de différentes couleurs primaires à mélanger, ou la luminosité et la teinte. Les modèles de couleur définis garantissent que les couleurs apparaissent de la même manière, quel que soit l'endroit où elles sont affichées.

Un modèle de couleur est un modèle mathématique qui représente les couleurs à l'aide de valeurs numériques. Les modèles de couleur décrivent comment créer les couleurs disponibles dans un espace colorimétrique. {{Glossary("RGB")}} a été le premier modèle de couleur pour le web. L'espace colorimétrique `sRGB` du modèle de couleur RGB — l'espace colorimétrique standard rouge, vert et bleu — a été créé en 1996 pour les moniteurs d'ordinateur et le web. Un {{Glossary("color space", "espace colorimétrique")}} est un système de regroupement des couleurs afin que la description de toute couleur donnée soit cohérente. Si vous transformez une couleur entre deux espaces colorimétriques différents, elle doit apparaître identique dans les deux.

À l'origine, les moniteurs étaient limités quant au nombre de couleurs qu'ils pouvaient afficher, et les couleurs CSS étaient limitées par ces contraintes, s'étendant à mesure que les capacités s'amélioraient. Avec les appareils modernes n'étant plus limités au RGB, nous avons maintenant également des modèles de couleur basés sur la perception humaine, offrant une gamme beaucoup plus large de couleurs. Nous pouvons maintenant décrire la couleur en CSS de plusieurs manières, et les options continuent de s'élargir.

Ce guide présente les différents types de valeurs {{CSSxRef("&lt;color&gt;")}}. Pour une discussion plus détaillée, consultez les liens de référence fournis ci-dessous.

## Mots-clés

Le web définit un ensemble de noms de couleurs standard qui vous permet d'utiliser des mots-clés au lieu de représentations numériques pour décrire les couleurs. C'est une approche plus simple mais plus limitée — il se peut qu'il n'y ait pas de mot-clé représentant exactement la couleur que vous souhaitez utiliser.

Les mots-clés de couleur incluent les couleurs primaires et secondaires standard (comme `red`, `blue` ou `orange`), les nuances de gris (de `black` à `white`, y compris des couleurs comme `darkgray` et `lightgrey`), et une variété d'autres couleurs mélangées, y compris `lightseagreen`, `cornflowerblue` et `rebeccapurple`. Les couleurs nommées utilisent le modèle {{Glossary("RGB")}} et sont associées à l'espace colorimétrique sRGB (`srgb`).

Il existe plus de 160 couleurs nommées. Certaines couleurs nommées sont d'un intérêt particulier&nbsp;: [`transparent`](/fr/docs/Web/CSS/Reference/Values/named-color#transparent) définit une valeur de couleur transparente, tandis que [`currentColor`](/fr/docs/Web/CSS/Reference/Values/color_value#mot-clé_currentcolor) définit la valeur actuelle de la propriété CSS {{CSSxRef("color")}}. Il existe également des couleurs nommées {{CSSxRef("&lt;system-color&gt;")}}, telles que `accentcolortext` et `buttonface`, qui reflètent les choix de couleur par défaut effectués par l'utilisateur·ice, le navigateur ou le système d'exploitation.

Tous les mots-clés de couleur ne tiennent pas compte de la casse. Consultez le type de données {{CSSxRef("&lt;named-color&gt;")}} pour plus d'informations sur les mots-clés de couleur.

## Valeurs RGB

Il existe deux principales façons de définir une couleur {{Glossary("RGB")}} par ses composantes rouge, vert et bleu en CSS — les valeurs hexadécimales et les valeurs `rgb()`. Comme les couleurs nommées, ces méthodes utilisent le modèle {{Glossary("RGB")}} et sont associées à l'espace colorimétrique sRGB (`srgb`). Cependant, elles permettent de définir une gamme beaucoup plus large de couleurs.

### Notation sous forme de chaîne de caractères hexadécimale

La notation sous forme de chaîne de caractères hexadécimale (hex) utilise une valeur hexadécimale pour représenter chaque composante (rouge, vert et bleu) d'une couleur RVB. Elle peut également inclure une quatrième composante&nbsp;: le canal alpha (ou opacité).

Une couleur en notation hexadécimale commence toujours par le caractère `"#"`. Ensuite, viennent les chiffres hexadécimaux du code couleur. La chaîne n'est pas sensible à la casse.

- `"#rrggbb"`
  - : Définit une couleur entièrement opaque dont la composante rouge est le nombre hexadécimal `0xrr`, la composante verte est `0xgg` et la composante bleue est `0xbb`.

- `"#rrggbbaa"`
  - : Définit une couleur dont la composante rouge est le nombre hexadécimal `0xrr`, la composante verte est `0xgg` et la composante bleue est `0xbb`. Le canal alpha est défini par `0xaa`&nbsp;; plus cette valeur est basse, plus la couleur devient translucide.

- `"#rgb"`
  - : Définit une couleur dont la composante rouge est le nombre hexadécimal `0xrr`, la composante verte est `0xgg` et la composante bleue est `0xbb`.

- `"#rgba"`
  - : Définit une couleur dont la composante rouge est le nombre hexadécimal `0xrr`, la composante verte est `0xgg` et la composante bleue est `0xbb`. Le canal alpha est défini par `0xaa`&nbsp;; plus cette valeur est basse, plus la couleur devient translucide.

Comme indiqué ci-dessus, les composantes de couleur rouge, verte et bleue peuvent chacune être représentées par une valeur hexadécimale à deux chiffres représentant un nombre compris entre 0 (`00`) et 255 (`FF`) ou une valeur hexadécimale à un chiffre (un nombre compris entre 0 (`0`) et 15 (`F`)).

> [!NOTE]
> Le préfixe `0x` dans les valeurs ci-dessus indique un littéral entier hexadécimal. Les entiers hexadécimaux peuvent inclure des chiffres (`0` - `9`) et les lettres `a` à `f` et `A` à `F`. La casse d'un caractère ne change pas sa valeur. Par conséquent&nbsp;: `0xa` = `0xA` = `10` et `0xf` = `0xF` = `15`.

Ces deux codes hexadécimaux correspondent à la même couleur&nbsp;; ils désignent tous deux le rouge&nbsp;:

```css
color: #ff0000;
color: #f00;
```

Toutes les composantes _doivent_ être définies en utilisant le même nombre de chiffres. Si vous utilisez la notation à un seul chiffre, la couleur finale est calculée en utilisant chaque chiffre de la composante deux fois&nbsp;; c'est-à-dire que `"#D"` devient `"#DD"` lors du rendu.

Pour rendre les valeurs 25% opaques, ajoutez la valeur du canal alpha comme indiqué ci-dessous&nbsp;:

```css
color: #ff000044;
color: #f004;
```

Voir le type de données {{CSSxRef("&lt;hex-color&gt;")}} pour plus d'informations sur la notation sous forme de chaîne de caractères hexadécimale pour les couleurs.

#### Type de saisie de couleur HTML

Il existe de nombreuses situations dans lesquelles votre site web peut avoir besoin de permettre à l'utilisateur·ice de sélectionner une couleur. Peut-être avez-vous une interface utilisateur personnalisable, ou vous implémentez une application de dessin. Peut-être avez-vous du texte modifiable et devez permettre à l'utilisateur·ice de choisir la couleur du texte. Ou peut-être votre application permet-elle à l'utilisateur·ice d'assigner des couleurs à des dossiers ou des éléments. Pour de tels cas d'utilisation, l'élément HTML {{HTMLElement("input")}} dispose d'un [`type`](/fr/docs/Web/HTML/Reference/Elements/input#type) `"color"`, qui affiche un contrôle de sélection de couleur.

Cet exemple permet de choisir une couleur. Une fois un choix effectué, la couleur de la bordure ({{CSSxRef("border-color")}}) est définie sur cette couleur, et la valeur est affichée.

```html
<div id="boite">
  <label for="choixCouleur">Couleur de la bordure&nbsp;:</label>
  <input type="color" value="#8888ff" id="choixCouleur" />
  <output></output>
</div>
```

Le HTML crée une boîte contenant un contrôle de sélection de couleur (avec une étiquette créée à l'aide de l'élément HTML {{HTMLElement("label")}}) et un élément HTML {{HTMLElement("output")}} vide dans lequel nous affichons la valeur de la couleur à l'aide de JavaScript. La valeur de l'entrée de couleur est toujours une chaîne hexadécimale.

{{EmbedLiveSample("Type de saisie de couleur HTML", 525, 120)}}

```css hidden
#boite {
  width: 500px;
  height: 100px;
  border: 5px solid rgb(245 220 225);
  padding: 4px 6px;
  font:
    16px "Lucida Grande",
    "Helvetica",
    "Arial",
    sans-serif;
}
```

Le JavaScript suivant met à jour la couleur de la bordure pour correspondre à la valeur initiale du sélecteur de couleur, puis ajoute deux gestionnaires d'évènements à l'élément HTML `{{HTMLElement("input/color", "&lt;input type=\"color\"&gt;")}}` pour répondre aux modifications apportées à sa valeur.

```js
const choixCouleur = document.querySelector("#choixCouleur");
const boite = document.querySelector("#boite");
const output = document.querySelector("output");

boite.style.borderColor = choixCouleur.value;

choixCouleur.addEventListener("input", (event) => {
  boite.style.borderColor = event.target.value;
});

choixCouleur.addEventListener("change", (event) => {
  output.innerText = `${choixCouleur.value}`;
});
```

L'évènement {{DOMxRef("Element/input_event", "input")}} est envoyé chaque fois que la valeur de l'élément change&nbsp;; c'est-à-dire chaque fois que l'utilisateur·ice ajuste la couleur dans le sélecteur de couleur. Chaque fois que cet évènement arrive, nous définissons la couleur de la bordure de la boîte pour correspondre à la valeur actuelle du sélecteur de couleur.

L'évènement {{DOMxRef("HTMLElement/change_event", "change")}} est reçu lorsque le sélecteur de couleur a une valeur définitive. Nous répondons en définissant le contenu de l'élément `<output>` sur la valeur de chaîne de caractères de la couleur sélectionnée.

### Notation fonctionnelle RGB

La notation fonctionnelle RGB (Rouge/Vert/Bleu), comme la notation hexadécimale, représente les couleurs en utilisant leurs composantes rouge, vert et bleu (et, éventuellement, une composante de canal alpha pour l'opacité). Cependant, au lieu d'utiliser une chaîne de caractères, la couleur est définie en utilisant la fonction CSS {{CSSxRef("color_value/rgb", "rgb()")}}. Cette fonction accepte 3 ou 4 paramètres d'entrée — les valeurs des composantes rouge, vert et bleu et une valeur optionnelle pour le canal alpha.

Les valeurs légales pour chacun de ces paramètres sont&nbsp;:

- `red`, `green` et `blue`
  - : Chacun doit être une valeur {{CSSxRef("&lt;number&gt;")}} comprise entre 0 et 255 (inclus), un {{CSSxRef("&lt;percentage&gt;")}} de 0% à 100%, ou le mot-clé `none`, qui équivaut à `0` dans ce cas.

- `alpha`
  - : Le canal alpha est défini en pourcentage entre `0%` (totalement transparent) et `100%` (totalement opaque), ou un nombre entre `0.0` (équivalent à `0%`) et `1.0` (équivalent à `100%`).

Par exemple, un rouge vif à 50% d'opacité peut être représenté par `rgb(255 0 0 / 50%)` ou `rgb(100% 0 0 / 0.5)`.

Voir la fonction de couleur {{CSSxRef("color_value/rgb", "rgb()")}} pour plus d'informations sur la notation fonctionnelle RGB.

## Fonctions de couleur avec une composante de teinte

Les fonctions de couleur qui ont une composante de teinte ({{CSSxRef("&lt;hue&gt;")}}) — un angle ({{CSSxRef("&lt;angle&gt;")}}) provenant de la {{Glossary("color wheel", "roue des couleurs")}} de ce modèle de couleur — incluent les fonctions de couleur `srgb` `hsl()` et `hwb()`, la fonction `lch()` de CIElab et la fonction de couleur `oklch()` de OKLab. Ces fonctions de couleur sont plus intuitives, car la teinte nous permet de distinguer ou de comparer des couleurs comme le rouge, l'orange, le jaune, le vert, le bleu, etc.

### Notation fonctionnelle HSL

La fonction de couleur CSS `hsl()` a été la première fonction de couleur basée sur la teinte à être prise en charge dans les navigateurs. `hsl()` est plus intuitive que `rgb()` — il est généralement plus facile de déterminer l'effet de la variation des valeurs de teinte (`h`), de saturation (`s`) et de luminosité (`l`) que de déclarer des couleurs spécifiques avec les valeurs des canaux rouge, vert et bleu. De plus, HSL est similaire au sélecteur de couleurs HSB (teinte, saturation et luminosité) dans Photoshop, ce qui l'a rendu immédiatement familier à de nombreuses personnes lorsqu'il a été pris en charge pour la première fois.

Les fonctions de couleur sRGB `hsl()` et `hwb()` sont toutes deux cylindriques. La teinte définit la couleur comme un angle ({{CSSxRef("angle")}}) sur une {{Glossary("color wheel", "roue des couleurs")}} circulaire. Le diagramme ci-dessous montre un cylindre de couleur HSL. La saturation est un pourcentage qui définit à quel point la couleur se situe sur une échelle allant du gris complet à la quantité maximale possible de la teinte donnée.
À mesure que la valeur de luminosité augmente, la couleur passe de la couleur la plus sombre à la couleur la plus claire possible (du noir au blanc).

![Cylindre de couleur HSL](640px-hsl_color_solid_cylinder.png)

Image reproduite avec l'aimable autorisation de l'utilisateur·ice [SharkD <sup>(angl.)</sup>](https://commons.wikimedia.org/wiki/User:SharkD) sur [Wikipedia <sup>(angl.)</sup>](https://en.wikipedia.org/), distribuée sous la licence [CC BY-SA 3.0 <sup>(angl.)</sup>](https://creativecommons.org/licenses/by-sa/3.0/).

La valeur de la composante de teinte (`H`) d'une couleur HSL (ou HWB) est un angle qui commence à 0° pour le rouge, puis passe par le jaune, le vert, le cyan, le bleu et le magenta, avant de revenir au rouge à 360°. La valeur peut être définie dans n'importe quelle unité {{CSSxRef("&lt;angle&gt;")}} prise en charge par CSS, y compris les degrés (`deg`), les radians (`rad`), les grades (`grad`) ou les tours (`turn`). La valeur de la teinte identifie la teinte de base de la couleur, mais elle ne contrôle pas la vivacité ou la douceur, ni la clarté ou l'obscurité de la couleur.

La composante de saturation (`S`) définit le pourcentage de la couleur finale composé de la teinte définie, 100% étant complètement saturé et 0 % étant une absence totale de couleur (niveaux de gris). La composante de luminosité (`L`) définit la clarté de la couleur sur une échelle allant du noir complet (`0%`) au blanc complet (`100%`). Vous pouvez également inclure facultativement un canal alpha, précédé d'une barre oblique (`/`) pour rendre la couleur moins de 100% opaque.

Voici quelques exemples de couleurs en notation HSL&nbsp;:

```css hidden
table {
  border: 1px solid black;
  font:
    16px "Open Sans",
    "Helvetica",
    "Arial",
    sans-serif;
  border-spacing: 0;
  border-collapse: collapse;
}

th,
td {
  border: 1px solid black;
  padding: 4px 6px;
  text-align: left;
}

th {
  background-color: hsl(0 0% 75%);
}
```

```html hidden
<table>
  <thead>
    <tr>
      <th scope="col">Couleur en notation HSL</th>
      <th scope="col">Exemple</th>
    </tr>
  </thead>
  <tbody></tbody>
</table>
```

```js hidden
const couleurs = [
  "hsl(90deg 0% 50%)",
  "hsl(90 100% 50%)",
  "hsl(0.15turn 50% 75%)",
  "hsl(0.15turn 90% 75%)",
  "hsl(0.15turn 90% 50%)",
  "hsl(270deg 90% 50% / 50%)",
];

const tbody = document.querySelector("tbody");
for (const couleur of couleurs) {
  const tr = document.createElement("tr");
  const td1 = document.createElement("td");
  td1.appendChild(document.createElement("code")).textContent = couleur;
  const td2 = document.createElement("td");
  td2.style.backgroundColor = couleur;
  tr.appendChild(td1);
  tr.appendChild(td2);
  tbody.appendChild(tr);
}
```

{{EmbedLiveSample("Notation fonctionnelle HSL", 300, 200)}}

La dernière valeur est semi-transparente&nbsp;; elle inclut la valeur alpha optionnelle, précédée d'une barre oblique.

> [!NOTE]
> Lorsque vous omettez l'unité de la teinte, elle est supposée être en degrés (`deg`).

### Notation fonctionnelle HWB

La fonction de couleur {{CSSxRef("color_value/hwb", "hwb()")}} utilise le même système de coordonnées de teinte que `hsl()`, avec `0deg` représentant le rouge. Cependant, au lieu de la luminosité et de la saturation de `hsl()`, les fonctions `hwb()` définissent la blancheur (`W`) et la noirceur (`B`). Cette fonction est également assez intuitive — vous permettant de choisir une teinte puis de mélanger des quantités de blanc et/ou de noir pour obtenir la couleur souhaitée.

Les valeurs `W` et `B` ont une plage de `0%` à `100%` (ou de `0` à `1`). Si la valeur combinée de `W` et `B` est de 100% (ou `1`) ou plus, la couleur est grise, similaire à la définition de `s` à `0%` avec `hsl()`. Comme pour `hsl()`, une valeur alpha optionnelle peut être incluse, précédée d'une barre oblique `/`.

Voici quelques exemples d'utilisation de la notation HWB&nbsp;:

```css
/* Ces exemples définissent tous différentes nuances de vert citron. */
hwb(90 10% 10%)
hwb(90 50% 10%)
hwb(90deg 10% 10%)
hwb(1.5708rad 60% 0%)
hwb(.25turn 0% 40%)

/* Même vert citron mais avec une valeur alpha */
hwb(90 10% 10% / 0.5)
hwb(90 10% 10% / 50%)
```

Dans les exemples ci-dessous, nous définissons les mêmes teintes que dans les exemples `hsl()`, mais nous ajoutons de la blancheur et de la noirceur à chaque teinte avec `hwb()` au lieu de la saturation et de la luminosité&nbsp;:

```css hidden live-sample___hwb_functional_notation
table {
  border: 1px solid black;
  font:
    16px "Open Sans",
    "Helvetica",
    "Arial",
    sans-serif;
  border-spacing: 0;
  border-collapse: collapse;
}

th,
td {
  border: 1px solid black;
  padding: 4px 6px;
  text-align: left;
}

th {
  background-color: hwb(0 75% 25%);
}
```

```html hidden live-sample___hwb_functional_notation
<table>
  <thead>
    <tr>
      <th scope="col">Couleur en notation HWB</th>
      <th scope="col">Exemple</th>
    </tr>
  </thead>
  <tbody></tbody>
</table>
```

```js hidden live-sample___hwb_functional_notation
const couleurs = [
  "hwb(90deg 50% 50%)",
  "hwb(90 0% 0%)",
  "hwb(0.15turn 25% 0%)",
  "hwb(0.15turn 10% 25%)",
  "hwb(1turn 10% 65%)",
  "hwb(270deg 75% 10%)",
];

const tbody = document.querySelector("tbody");
for (const couleur of couleurs) {
  const tr = document.createElement("tr");
  const td1 = document.createElement("td");
  td1.appendChild(document.createElement("code")).textContent = couleur;
  const td2 = document.createElement("td");
  td2.style.backgroundColor = couleur;
  tr.appendChild(td1);
  tr.appendChild(td2);
  tbody.appendChild(tr);
}
```

{{EmbedLiveSample("Notation fonctionnelle HWB", 300, 200)}}

### LCH et OkLCh : les espaces colorimétriques CIELAB et Oklab

Bien que `hsl()` et `hwb()` soient intuitives, elles présentent un inconvénient majeur. Avec ces fonctions, chaque angle de teinte entièrement saturé (`hsl(<angle> 100% 50%)` ou `hwb(<angle> 0% 0%)`) a la même luminosité, mais ce n'est pas ainsi que fonctionne la vision humaine ou les écrans. Mettre du texte blanc sur un bleu entièrement saturé (`hsl(240deg 100% 50%)`) est lisible, mais ce même texte sur un jaune entièrement saturé (`hsl(60deg 100% 50%)`) est non seulement illisible, mais peut également nuire aux yeux de vos utilisateur·ice·s. Dans ces fonctions de couleur, la luminosité d'une couleur est relative à d'autres couleurs, et non à la perception humaine. En réalité, toutes les teintes n'ont pas la même saturation maximale.

Ne serait-il pas fantastique de pouvoir simplement changer le canal de teinte d'une couleur sur un site sans rendre le texte illisible&nbsp;? C'est possible avec les fonctions de couleur dans les espaces colorimétriques CIELAB et Oklab.

Les espaces colorimétriques CIELAB et Oklab représentent l'ensemble des couleurs que l'œil humain peut percevoir. Les fonctions de couleur CIE Lab incluent {{CSSxRef("color_value/lch", "lch()")}} et {{CSSxRef("color_value/lab", "lab()")}}. Les fonctions de couleur Oklab incluent {{CSSxRef("color_value/oklch", "oklch()")}} et {{CSSxRef("color_value/oklab", "oklab()")}}. L'objectif principal de ces modèles est qu'ils sont uniformes, de sorte qu'une distance donnée entre deux points quelconques dans l'espace colorimétrique doit apparaître également différente pour un observateur. Oklab est un espace colorimétrique qui utilise le même type de modèle que CIELAB mais est construit en utilisant des étapes d'optimisation numérique supplémentaires, de sorte que les valeurs sont considérées comme plus précises que CIELAB. Grâce à cette optimisation, les teintes sont plus uniformes perceptuellement.

Les fonctions `lch()` et `oklch()` utilisent la luminosité (`L`), la chroma (`C`) et la teinte (`H`), et sont discutées plus en détail dans cette section. Les fonctions [`lab()` et `oklab()`](#lab_et_oklab) fonctionnent différemment, utilisant la luminosité (`L`), la rouge/vert (le long de l'axe `a`) et le jaune/bleu (le long de l'axe `b`). Ces axes sont appelés coordonnées rectangulaires. Le principal avantage de ces fonctions de couleur est que la «&nbsp;luminosité&nbsp;» est perçue comme telle&nbsp;; c'est la luminosité d'une couleur telle qu'elle est perçue par l'œil humain plutôt que la luminosité par rapport à d'autres couleurs.

Similaire aux fonctions de couleur de teinte sRGB, la valeur de teinte (`h`) dans `lch()` et `oklch()` est un nombre, un angle ou le mot-clé `none` (équivalent à `0deg`) représentant l'angle de teinte de la couleur. Cependant, les couleurs à chaque valeur d'angle ne sont pas les mêmes. Les angles correspondant à des teintes particulières diffèrent entre les espaces colorimétriques sRGB, CIELAB (utilisé par `lch()`) et Oklab (utilisé par `oklch()`).

Les dégradés suivants montrent les couleurs de teinte à chaque angle de `0deg` à `360deg` dans les espaces colorimétriques sRGB, CIE Lab et OKlab&nbsp;:

```html hidden live-sample___hues
<p>sRGB (<code>hsl()</code> et <code>hwb()</code>)</p>
<div id="srgb"></div>
<p>CIE Lab (<code>lch()</code>)</p>
<div id="lch"></div>
<p>OKLab (<code>oklch()</code>)</p>
<div id="oklch"></div>
<p>
  <label><input type="checkbox" /> Basculer en niveaux de gris</label>
</p>
```

```css hidden live-sample___hues
div:has(~ p input:checked) {
  filter: grayscale(100%);
}
p {
  margin: 0;
}
div {
  height: 50px;
  margin-bottom: 10px;
}
#srgb {
  background: linear-gradient(
    to right,
    hsl(0deg 100% 50%),
    hsl(90deg 100% 50%),
    hsl(180deg 100% 50%),
    hsl(270deg 100% 50%),
    hsl(360deg 100% 50%)
  );
}
#lch {
  background: linear-gradient(
    to right,
    lch(50% 100% 0deg),
    lch(50% 100% 90deg),
    lch(50% 100% 180deg),
    lch(50% 100% 270deg),
    lch(50% 100% 360deg)
  );
}
#oklch {
  background: linear-gradient(
    to right,
    oklch(50% 100% 0deg),
    oklch(50% 100% 90deg),
    oklch(50% 100% 180deg),
    oklch(50% 100% 270deg),
    oklch(50% 100% 360deg)
  );
}
```

{{EmbedLiveSample("hues", 100, 260)}}

Vous pouvez remarquer comment la luminosité des derniers dégradés est plus uniforme à travers le spectre des teintes que le dégradé sRGB. Sélectionnez la case à cocher dans l'exemple ci-dessus pour convertir le dégradé de teintes en niveaux de gris afin de rendre cela plus apparent.

Notez également comment la répartition des valeurs de bleu dans CIE Lab est plus longue que dans les deux autres. C'est la différence entre `lch()` et `oklch()`. La répartition du bleu dans `lch()` est due à un bogue qui déplace la chroma et la luminosité des valeurs de teinte entre `270deg` et `330deg`. Ça été résolu dans l'espace colorimétrique oklab et donc la notation de couleur `oklch()`.

Comme mentionné ci-dessus, la teinte (`H`) dans les fonctions `lch()` et `oklch()` est un `<angle>`, un `number` ou le mot-clé `none`. La `lightness` est soit un pourcentage ({{CSSxRef("&lt;percentage&gt;")}}), soit pour `lch()` un nombre entre `0` et `100` et pour `oklch()` un nombre entre `0` et `1`, avec `0` ou `0%` représentant l'absence totale de luminosité, ce qui correspond au noir.

Le `C` est un nombre (`<number>`), pourcentage (`<percentage>`), ou le mot-clé `none` (équivalent à `0%`) et représente la chroma de la couleur, ou la «&nbsp;quantité de couleur&nbsp;». C'est similaire à la valeur de saturation `S` de la fonction de couleur `hsl()`. La valeur `0` représente l'absence totale de chroma ou de saturation&nbsp;; ce qui donne un gris entre le blanc et le noir inclus, selon la valeur de luminosité. Les valeurs numériques sont théoriquement illimitées, `100%` étant égal à `150` pour `lch()` et `0.4` pour `oklch()`.

Comme pour les autres fonctions de couleur, il existe également une valeur de transparence alpha optionnelle, précédée d'une barre oblique (`/`).

L'exemple ci-dessous montre l'effet de la modification de la valeur de luminosité dans les fonctions `lch()` et `oklch()`.

```css hidden live-sample___lch-colors
/* Variations de nuances de rose */
.conteneur {
  display: grid;
  font-family: sans-serif;
  font-size: 14px;
  color: white;
  grid-template-columns: repeat(6, 1fr);
  gap: 4px;
}

.texte-sombre {
  color: lch(1% 40 0deg);
}

.conteneur div {
  border-radius: 8px;
  padding: 8px 4px;
}
```

```html hidden live-sample___lch-colors
<div class="conteneur"></div>
```

```js hidden live-sample___lch-colors
const conteneur = document.querySelector(".conteneur");
for (let l = 0; l <= 100; l += 10) {
  const div = document.createElement("div");
  const usedL = l === 0 ? 1 : l === 100 ? 99 : l;
  div.textContent = div.style.backgroundColor = `lch(${usedL}% 40 0)`;
  if (usedL >= 80) div.classList.add("texte-sombre");
  conteneur.appendChild(div);
}
conteneur.appendChild(document.createElement("div"));
for (let l = 0; l <= 100; l += 10) {
  const div = document.createElement("div");
  const usedL = l === 0 ? 1 : l === 100 ? 99 : l;
  div.textContent = div.style.backgroundColor = `oklch(${usedL}% 0.12 0)`;
  if (usedL >= 80) div.classList.add("texte-sombre");
  conteneur.appendChild(div);
}
```

{{EmbedLiveSample("lch-colors", 100, 200)}}

## Lab et OKLab

La notation fonctionnelle {{CSSxRef("color_value/lab", "lab()")}} exprime une couleur donnée dans l'espace colorimétrique CIE L\*a\*b\*. La fonction {{CSSxRef("color_value/oklab", "oklab()")}} définit les couleurs dans l'espace colorimétrique OKLab. Ces fonctions représentent l'ensemble des couleurs que l'œil humain peut percevoir en définissant la luminosité de la couleur (`L`), une valeur de l'axe rouge/vert (`a`), une valeur de l'axe bleu/jaune (`b`) et une valeur de transparence alpha optionnelle.

Similaire à `lch()` et `oklch()`, la `lightness` est soit&nbsp;:

- Un pourcentage ({{CSSxRef("&lt;percentage&gt;")}}), avec `0%` étant complètement noir et `100%` étant complètement blanc.
- Un nombre compris entre `0` et `100` pour `lab()` et entre `0` et `1` pour `oklab()`, où `0` est complètement noir et `1`/`100` est complètement blanc.

La valeur `a` est un nombre (`<number>`) compris entre `-125` et `125` pour `lab()` ou entre `-0,4` et `0.4` pour `oklab()`, un pourcentage (`<percentage>`) compris entre `-100%` et `100%`, ou le mot-clé `none` (équivalent à `0%` dans ce cas). Cette valeur définit la distance de la couleur le long de l'axe a dans l'espace colorimétrique, ce qui définit à quel point la couleur est verte (en se rapprochant de -100%) ou rouge (en se rapprochant de +100%).

Notez que ces valeurs sont signées (permettant à la fois des valeurs positives et négatives) et théoriquement illimitées, ce qui signifie que vous pouvez définir des valeurs en dehors des limites ±125 ou ±0,4 (±100%). En pratique, les valeurs ne peuvent pas dépasser ±160 ou ±0,5, respectivement.

La valeur `b` a les mêmes contraintes. Elle définit la distance de la couleur le long de l'axe b dans l'espace colorimétrique, ce qui définit à quel point la couleur est bleue (en se rapprochant de -100%) ou jaune (en se rapprochant de +100%).

L'exemple suivant montre les effets de la variation de l'axe `a` avec une fonction `lab()` et de l'axe `b` avec une fonction `oklab()`.

```html hidden live-sample___lab-colors
<div class="conteneur"></div>
```

```css hidden live-sample___lab-colors
/* Variations de nuances de rose */
.conteneur {
  display: grid;
  font-family: sans-serif;
  font-size: 14px;
  color: white;
  grid-template-columns: repeat(5, 1fr);
  gap: 4px;
}
.conteneur div {
  border-radius: 8px;
  padding: 8px 4px;
}
```

```js hidden live-sample___lab-colors
const conteneur = document.querySelector(".conteneur");

for (let a = -100; a <= 100; a += 25) {
  const div = document.createElement("div");
  div.textContent = div.style.backgroundColor = `lab(50% ${a}% 0)`;
  conteneur.appendChild(div);
}
conteneur.appendChild(document.createElement("div"));
for (let b = -4; b <= 4; b++) {
  const div = document.createElement("div");
  div.textContent = div.style.backgroundColor = `oklab(50% 0 ${b / 10})`;
  conteneur.appendChild(div);
}
```

{{EmbedLiveSample("lab-colors", 100, 150)}}

## Notations fonctionnelles de couleur supplémentaires

### La fonction `color()`

Si vous souhaitez un contrôle explicite sur les espaces colorimétriques lors de la définition des couleurs, vous pouvez utiliser la fonction {{CSSxRef("color_value/color", "color()")}}.

C'est utile pour décrire une couleur pour des appareils haute définition avec des {{Glossary("Gamut", "gammes de couleurs")}} plus larges. Par exemple, si vous souhaitez afficher la couleur `display-p3 0 0 1`, qui est en dehors de la gamme sRGB, vous pouvez utiliser une règle `@media` {{CSSxRef("@media/color-gamut", "color-gamut")}} pour détecter si le matériel du client prend en charge les couleurs dans cette plage avant d'essayer de l'utiliser&nbsp;:

```css
.vibrant {
  background-color: color(srgb 0 0 1);
}

@media (color-gamut: p3) {
  .vibrant {
    background-color: color(display-p3 0 0 1);
    /* Equivalent à la couleur hors gamme (srgb 0 0 1.042) */
  }
}
```

Comprendre `color()` est important lorsqu'il s'agit de couleurs relatives, discutées ci-dessous. Les anciennes notations de couleur sRGB mentionnées ci-dessus — `hsl()`, `hwb()` et `rgb()` — n'expriment pas le spectre complet des couleurs visibles, tandis que la fonction `color()` prend en charge un gamut de couleurs beaucoup plus large. Par conséquent, lors de l'utilisation des anciens types de fonctions pour définir des couleurs relatives, la couleur de sortie retournée par la propriété {{DOMxRef("HTMLElement.style")}} ou la méthode {{DOMxRef("CSSStyleDeclaration.getPropertyValue()")}} est une valeur `color(srgb ...)`.

Pour voir un exemple de conversion des formats de couleur `rgb()`, `hsl()`, `hwb()` et autres [formats de couleur](/fr/docs/Web/CSS/Reference/Values/color_value), consultez notre [outil de conversion de formats de couleur](/fr/docs/Web/CSS/Guides/Colors/Color_format_converter).

### Couleurs relatives

Chaque fonction de couleur énumérée ci-dessus peut être utilisée pour définir des [**couleurs relatives**](/fr/docs/Web/CSS/Guides/Colors/Using_relative_colors), ce qui permet de définir des valeurs {{CSSxRef("&lt;color&gt;")}} par rapport à d'autres couleurs existantes, plutôt que de définir une valeur de couleur à partir de zéro à chaque fois. Cette fonctionnalité puissante permet de créer des compléments aux couleurs existantes — comme des variantes plus claires, plus foncées, saturées, semi-transparentes ou inversées d'une couleur originale. Les couleurs relatives offrent un mécanisme efficace pour créer des palettes et définir des ajustements de couleur. Consultez chaque page de fonction de couleur pour en savoir plus sur leurs syntaxes relatives.

Comme mentionné ci-dessus, lors de l'utilisation de `rgb()`, `hsl()`, ou `hwb()` pour produire une couleur relative, la couleur de sortie est une fonction `color()` dans l'espace colorimétrique `srgb`.

### La fonction `color-mix()`

La fonction {{CSSxRef("color_value/color-mix", "color-mix()")}} prend deux valeurs de couleur de n'importe quelle syntaxe mentionnée ci-dessus, éventuellement avec des valeurs proportionnelles en pourcentage pour chaque couleur, et retourne le résultat de leur mélange dans un espace colorimétrique donné selon une quantité donnée.

### La fonction `light-dark()`

La fonction {{CSSxRef("color_value/light-dark", "light-dark()")}} permet de définir deux valeurs de couleur pour une propriété destinée à être utilisée dans des thèmes clairs et sombres, respectivement. La couleur utilisée dépend de si le·la développeur·euse a défini·e ou si l'utilisateur·ice a demandé·e un thème clair ou sombre. Il s'agit d'une fonction raccourcie, permettant d'obtenir les mêmes résultats que la requête de média {{CSSxRef("@media/prefers-color-scheme", "prefers-color-scheme")}} mais avec moins de code.

## Voir aussi

- [Appliquer de la couleur aux éléments HTML en utilisant CSS](/fr/docs/Web/CSS/Guides/Colors/Applying_color)
- [Utiliser la couleur judicieusement](/fr/docs/Web/CSS/Guides/Colors/Using_color_wisely)
- [Utiliser des couleurs relatives](/fr/docs/Web/CSS/Guides/Colors/Using_relative_colors)
- [Comprendre la couleur et la luminance](/fr/docs/Web/Accessibility/Guides/Colors_and_Luminance)
- [WCAG 1.4.1&nbsp;: Contraste des couleurs](/fr/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable/Color_contrast)
- Le module [de couleur CSS](/fr/docs/Web/CSS/Guides/Colors)
