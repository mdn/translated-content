---
title: <length>
slug: Web/CSS/Reference/Values/length
original_slug: Web/CSS/length
l10n:
  sourceCommit: 70285e396b5c97675e90b85d573be42078e0168e
---

Le [type de données](/fr/docs/Web/CSS/Reference/Values/Data_types) [CSS](/fr/docs/Web/CSS) **`<length>`** correspond à une mesure de distance. Les longueurs peuvent être utilisées dans de nombreuses propriétés CSS, comme {{Cssxref("width")}}, {{Cssxref("height")}}, {{Cssxref("margin")}}, {{Cssxref("padding")}}, {{Cssxref("border-width")}}, {{Cssxref("font-size")}} et {{Cssxref("text-shadow")}}.

> [!NOTE]
> Bien que les valeurs {{cssxref("&lt;percentage&gt;")}} puissent être utilisées dans certaines propriétés qui acceptent des valeurs `<length>`, elles ne sont pas elles-mêmes des valeurs `<length>`. Voir {{cssxref("&lt;length-percentage&gt;")}}.

## Syntaxe

Le type de données `<length>` consiste en un nombre ({{cssxref("&lt;number&gt;")}}) suivi de l'une des unités listées ci-dessous. Comme pour toutes les dimensions CSS, il n'y a pas d'espace entre le nombre et l'unité littérale. L'unité de longueur est optionnelle si le nombre est `0`.

> [!NOTE]
> Certaines propriétés autorisent des valeurs `<length>` négatives, d'autres non.

La [valeur définie](/fr/docs/Web/CSS/Guides/Cascade/Property_value_processing#valeur_définie) d'une longueur (_longueur définie_) est représentée par sa quantité et son unité. La [valeur calculée](/fr/docs/Web/CSS/Guides/Cascade/Property_value_processing#valeur_calculée) d'une longueur (_longueur calculée_) est la longueur spécifiée résolue en une longueur absolue, et son unité n'est pas distinguée.

Les unités `<length>` peuvent être relatives ou absolues. Les longueurs relatives représentent une mesure en fonction d'une autre distance. Selon l'unité, cette distance peut être la taille d'un caractère spécifique, la [hauteur de ligne](/fr/docs/Web/CSS/Reference/Properties/line-height), ou la taille de la {{Glossary("viewport", "zone d'affichage")}}. Les feuilles de style qui utilisent des unités de longueur relatives peuvent plus facilement s'adapter d'un environnement de sortie à un autre.

> [!NOTE]
> Les éléments enfants n'héritent pas des valeurs relatives telles que spécifiées pour leur parent&nbsp;; ils héritent des valeurs calculées.

## Unités de longueur relatives

Les unités de longueur relatives CSS sont basées sur la police, le conteneur ou la taille de la zone d'affichage.

### Unités de longueur relatives basées sur la police

Les longueurs liées à la police définissent la valeur `<length>` en fonction de la taille d'un caractère particulier ou d'une caractéristique de la police actuellement utilisée dans un élément ou son parent.

> [!NOTE]
> Ces unités, en particulier `em` et la racine relative `rem`, sont souvent utilisées pour créer des mises en page adaptatives, qui maintiennent le rythme vertical de la page même lorsque l'utilisateur·ice change la taille de la police.

- `cap`
  - : Représente la hauteur nominale des lettres capitales (<i lang="en">cap height</i>) de la police ({{Cssxref("font")}}) de l'élément.
- `ch`
  - : Représente la largeur ou, plus précisément, la {{Glossary("advance measure", "mesure d'avancement")}} du glyphe `0` (zéro, le caractère Unicode U+0030) dans la police ({{Cssxref("font")}}) de l'élément.
    Dans les cas où il est impossible ou peu pratique de déterminer la mesure du glyphe `0`, il faut supposer qu'il mesure `0.5em` de large sur `1em` de haut.
- `em`
  - : Représente la taille de police ({{Cssxref("font-size")}}) calculée de l'élément. Si utilisée sur la propriété {{Cssxref("font-size")}}, elle représente la taille de police _héritée_ de l'élément.
- `ex`
  - : Représente la [hauteur d'x](https://fr.wikipedia.org/wiki/Hauteur_d%27x) de la police ({{Cssxref("font")}}) de l'élément. Dans les polices comportant la lettre `x`, il s'agit généralement de la hauteur des lettres minuscules de la police&nbsp;; `1ex ≈ 0.5em` dans de nombreuses polices.
- `ic`
  - : Égal à la {{Glossary("advance measure", "mesure d'avancement")}} utilisée du glyphe "水" (idéogramme CJK de l'eau, U+6C34), trouvée dans la police utilisée pour l'afficher.
- `lh`
  - : Égal à la valeur calculée de la propriété {{Cssxref("line-height")}} de l'élément sur lequel elle est utilisée, convertie en longueur absolue. Cette unité permet des calculs de longueur basés sur la taille théorique d'une ligne vide idéale. Cependant, la taille réelle des boîtes de ligne peut différer selon leur contenu.

### Unités de longueur relatives basées sur la police de l'élément racine

Les unités de longueur relatives à la police de l'élément racine définissent la valeur `<length>` en fonction de la taille d'un caractère particulier ou d'une caractéristique de la police de l'élément {{Cssxref(":root")}}.

- `rcap`
  - : Représente la hauteur nominale des lettres capitales (<i lang="en">cap height</i>) de la police ({{Cssxref("font")}}) de l'élément racine.
- `rch`
  - : Représente la largeur ou, plus précisément, la {{Glossary("advance measure", "mesure d'avancement")}} du glyphe `0` (zéro, le caractère Unicode U+0030) dans la police ({{Cssxref("font")}}) de l'élément racine.
- `rem`
  - : Représente la taille de police ({{Cssxref("font-size")}}) de l'élément racine (généralement l'élément {{HTMLElement("html")}}). Lorsqu'elle est utilisée sur la propriété {{Cssxref("font-size")}} de l'élément racine, elle représente sa valeur initiale. La valeur par défaut courante dans les navigateurs est `16px`, mais les préférences utilisateur·ice·s peuvent la modifier.
- `rex`
  - : Représente la hauteur d'x de la police ({{Cssxref("font")}}) de l'élément racine.
- `ric`
  - : Représente la valeur de l'unité [`ic`](#ic) sur la police de l'élément racine.
- `rlh`
  - : Représente la valeur de l'unité [`lh`](#lh) sur la police de l'élément racine. Cette unité permet des calculs de longueur basés sur la taille théorique d'une ligne vide idéale. Cependant, la taille réelle des boîtes de ligne peut différer selon leur contenu.

### Unités de longueur relatives à la zone d'affichage

Les **unités de longueur en pourcentage de la zone d'affichage** sont basées sur quatre tailles différentes de zone d'affichage&nbsp;: petite, grande, dynamique et par défaut. Cette distinction répond au fait que les interfaces des navigateurs peuvent s'étendre ou se rétracter dynamiquement, masquant ou affichant le contenu sous-jacent.

- **Unités pour petite zone d'affichage**
  - : Lorsque vous souhaitez utiliser la plus petite zone d'affichage possible en réponse à l'expansion dynamique des interfaces du navigateur, utilisez la «&nbsp;petite&nbsp;» taille de zone d'affichage. Cette taille permet au contenu de remplir toute la zone d'affichage lorsque les interfaces du navigateur sont étendues. Ce choix peut toutefois laisser des espaces vides lorsque les interfaces se rétractent.

    Par exemple, un élément dimensionné avec des unités en pourcentage basées sur la petite zone d'affichage remplira parfaitement l'écran sans que son contenu ne soit masqué lorsque toutes les interfaces dynamiques du navigateur sont affichées. Lorsque ces interfaces sont masquées, il peut cependant y avoir de l'espace supplémentaire autour de l'élément. Ainsi, les unités pour petite zone d'affichage sont généralement plus «&nbsp;sûres&nbsp;», mais peuvent produire une mise en page moins esthétique après interaction de l'utilisateur·ice avec la page.

    La petite zone d'affichage est représentée par le préfixe `sv` et donne les unités de longueur en pourcentage `sv*`. Les tailles de ces unités sont fixes, donc stables, sauf si la zone d'affichage elle-même est redimensionnée.

- **Unités pour grande zone d'affichage**
  - : Lorsque vous souhaitez utiliser la plus grande zone d'affichage possible en réponse à la rétraction dynamique des interfaces du navigateur, utilisez la «&nbsp;grande&nbsp;» taille de zone d'affichage. Cette taille permet au contenu de remplir toute la zone d'affichage lorsque les interfaces du navigateur sont rétractées. Attention&nbsp;: le contenu peut être masqué lorsque les interfaces s'étendent.

    Par exemple, sur les téléphones mobiles où l'espace d'affichage est limité, les navigateurs masquent souvent tout ou partie de la barre de titre et de la barre d'adresse après un défilement. Un élément dimensionné avec une unité, en pourcentage, basée sur la grande zone d'affichage remplira toute la page visible lorsque ces interfaces sont masquées. Cependant, lorsque ces interfaces rétractables sont affichées, elles peuvent masquer le contenu dimensionné ou positionné avec les unités pour grande zone d'affichage.

    La grande zone d'affichage est représentée par le préfixe `lv` et donne les unités de longueur en pourcentage `lv*`. Les tailles de ces unités sont fixes, donc stables, sauf si la zone d'affichage elle-même est redimensionnée.

- **Unités pour zone d'affichage dynamique**
  - : Lorsque vous souhaitez que la zone d'affichage soit automatiquement dimensionnée en fonction de l'expansion ou de la rétraction dynamique des interfaces du navigateur, utilisez la taille «&nbsp;dynamique&nbsp;» de zone d'affichage. Cette taille permet au contenu de s'adapter exactement à la zone d'affichage, quelle que soit la présence d'interfaces dynamiques.

    La zone d'affichage dynamique est représentée par le préfixe `dv` et donne les unités de longueur en pourcentage `dv*`. Les tailles de ces unités ne sont pas stables, même si la zone d'affichage elle-même ne change pas.

    > [!NOTE]
    > Bien que la zone d'affichage dynamique offre plus de contrôle et de flexibilité, l'utilisation d'unités, en pourcentage, basées sur cette taille peut entraîner un redimensionnement du contenu lors du défilement de la page, ce qui peut dégrader l'interface et impacter les performances.

- **Unités pour zone d'affichage par défaut**
  - : La taille de zone d'affichage par défaut est définie par le navigateur. Le comportement de l'unité résultante peut être équivalent à celui d'une unité basée sur la petite, la grande, une taille intermédiaire ou la zone d'affichage dynamique.

    > [!NOTE]
    > Par exemple, un navigateur peut implémenter l'unité par défaut pour la hauteur (`vh`) comme équivalente à l'unité de hauteur pour grande zone d'affichage (`lvh`). Cela peut masquer du contenu sur un affichage en pleine page lorsque l'interface du navigateur est étendue. Actuellement, toutes les unités par défaut (`vh`, `vw`, etc.) sont équivalentes à leurs homologues pour grande zone d'affichage (`lvh`, `lvw`, etc.).

Les longueurs en pourcentage de la zone d'affichage définissent des valeurs `<length>` en pourcentage par rapport à la taille du [bloc englobant initial](/fr/docs/Web/CSS/Guides/Display/Containing_block), qui dépend soit de la taille de la {{Glossary("viewport", "zone d'affichage")}}, soit de la zone de page, c'est-à-dire la partie visible du document. Lorsque la hauteur ou la largeur du bloc englobant initial change, les éléments dimensionnés en fonction de celui-ci sont redimensionnés en conséquence. Il existe une variante d'unité de longueur en pourcentage de la zone d'affichage pour chacune des tailles décrites ci-dessus.

> [!NOTE]
> Les longueurs de la zone d'affichage sont invalides dans les blocs de déclaration {{cssxref("@page")}}.

- `vh`
  - : Représente un pourcentage de la hauteur du [bloc englobant initial](/fr/docs/Web/CSS/Guides/Display/Containing_block) de la zone d'affichage. `1vh` correspond à 1% de la hauteur de la zone d'affichage. Par exemple, si la hauteur de la zone d'affichage est de `300px`, une valeur de `70vh` pour une propriété donnera `210px`.

    Les unités respectives pour petite, grande et dynamique zone d'affichage sont `svh`, `lvh` et `dvh`. `vh` est équivalent à `lvh`, c'est-à-dire l'unité basée sur la grande zone d'affichage.

- `vw`
  - : Représente un pourcentage de la largeur du [bloc englobant initial](/fr/docs/Web/CSS/Guides/Display/Containing_block) de la zone d'affichage. `1vw` correspond à 1% de la largeur de la zone d'affichage. Par exemple, si la largeur de la zone d'affichage est de `800px`, une valeur de `50vw` pour une propriété donnera `400px`.

    Pour les zones d'affichage petite, grande et dynamique, les unités respectives sont `svw`, `lvw` et `dvw`. `vw` est équivalent à `lvw`, c'est-à-dire l'unité basée sur la grande zone d'affichage.

- `vmax`
  - : Représente en pourcentage la plus grande valeur entre `vw` et `vh`.

    Pour les zones d'affichage petite, grande et dynamique, les unités respectives sont `svmax`, `lvmax` et `dvmax`. `vmax` est équivalent à `lvmax`, c'est-à-dire l'unité basée sur la grande zone d'affichage.

- `vmin`
  - : Représente en pourcentage la plus petite valeur entre `vw` et `vh`.

    Pour les zones d'affichage petite, grande et dynamique, les unités respectives sont `svmin`, `lvmin` et `dvmin`. `vmin` est équivalent à `lvmin`, c'est-à-dire l'unité basée sur la grande zone d'affichage.

- `vb`
  - : Représente le pourcentage de la taille du [bloc englobant initial](/fr/docs/Web/CSS/Guides/Display/Containing_block), dans la direction de l'[axe de bloc](/fr/docs/Web/CSS/Guides/Logical_properties_and_values) de l'élément racine.

    Pour les zones d'affichage petite, grande et dynamique, les unités respectives sont `svb`, `lvb` et `dvb`. `vb` est équivalent à `lvb`, c'est-à-dire l'unité basée sur la grande zone d'affichage.

- `vi`
  - : Représente un pourcentage de la taille du [bloc englobant initial](/fr/docs/Web/CSS/Guides/Display/Containing_block), dans la direction de l'[axe en ligne](/fr/docs/Web/CSS/Guides/Logical_properties_and_values) de l'élément racine.

    Pour les zones d'affichage petite, grande et dynamique, les unités respectives sont `svi`, `lvi` et `dvi`. `vi` est équivalent à `lvi`, c'est-à-dire l'unité basée sur la grande zone d'affichage.

### Unités de longueur relatives au conteneur

Lorsque vous appliquez des styles à un conteneur à l'aide de requêtes de conteneur, vous pouvez utiliser des unités de longueur relatives au conteneur.
Ces unités spécifient une longueur relative aux dimensions du conteneur de requête.
Les composants qui utilisent des unités de longueur relatives à leur conteneur sont plus flexibles à utiliser dans différents conteneurs sans avoir à recalculer des valeurs de longueur concrètes.

Si aucun conteneur éligible n'est disponible pour la requête, l'unité de longueur relative au conteneur prend par défaut la [petite unité de zone d'affichage](#unités_pour_petite_zone_daffichage) pour cet axe (`sv*`).

Pour plus d'informations, voir [Requêtes de conteneur](/fr/docs/Web/CSS/CSS_containment/Container_queries).

- `cqw`
  - : Représente un pourcentage de la largeur du conteneur de requête. `1cqw` correspond à 1% de la largeur du conteneur de requête. Par exemple, si la largeur du conteneur de requête est de `800px`, une valeur de `50cqw` pour une propriété donnera `400px`.

- `cqh`
  - : Représente un pourcentage de la hauteur du conteneur de requête. `1cqh` correspond à 1% de la hauteur du conteneur de requête. Par exemple, si la hauteur du conteneur de requête est de `300px`, une valeur de `10cqh` pour une propriété donnera `30px`.

- `cqi`
  - : Représente un pourcentage de la taille en ligne du conteneur de requête. `1cqi` correspond à 1% de la taille en ligne du conteneur de requête. Par exemple, si la taille en ligne du conteneur de requête est de `800px`, une valeur de `50cqi` pour une propriété donnera `400px`.

- `cqb`
  - : Représente un pourcentage de la taille de bloc du conteneur de requête. `1cqb` correspond à 1% de la taille de bloc du conteneur de requête. Par exemple, si la taille de bloc du conteneur de requête est de `300px`, une valeur de `10cqb` pour une propriété donnera `30px`.

- `cqmin`
  - : Représente un pourcentage de la plus petite valeur entre la taille en ligne ou la taille de bloc du conteneur de requête. `1cqmin` correspond à 1% de la plus petite valeur entre la taille en ligne ou la taille de bloc du conteneur de requête. Par exemple, si la taille en ligne du conteneur de requête est de `800px` et sa taille de bloc de `300px`, une valeur de `50cqmin` pour une propriété donnera `150px`.

- `cqmax`
  - : Représente un pourcentage de la plus grande valeur entre la taille en ligne ou la taille de bloc du conteneur de requête. `1cqmax` correspond à 1% de la plus grande valeur entre la taille en ligne ou la taille de bloc du conteneur de requête. Par exemple, si la taille en ligne du conteneur de requête est de `800px` et sa taille de bloc de `300px`, une valeur de `50cqmax` pour une propriété donnera `400px`.

## Unités de longueur absolues

Les **unités de longueur absolues** représentent une mesure physique lorsque les propriétés physiques du support de sortie sont connues, comme pour la mise en page à l'impression. Cela se fait en ancrant l'une des unités à une **unité physique** ou à l'**unité d'angle visuel**, puis en définissant les autres par rapport à celle-ci. Les unités physiques incluent `cm`, `in`, `mm`, `pc`, `pt`, `px` et `Q`. L'ancrage est réalisé différemment pour les appareils à basse résolution, comme les écrans, et pour les appareils à haute résolution, comme les imprimantes.

Pour les appareils à faible densité de pixels (<abbr title="dots per inch">dpi</abbr> pour <abbr title="points par pouce">ppp</abbr> en français), l'unité `px` représente le _pixel de référence physique_&nbsp;; les autres unités sont définies par rapport à celle-ci. Ainsi, `1in` est défini comme `96px`, ce qui équivaut à `72pt`. Par conséquent, sur ces appareils, les dimensions décrites en pouces (`in`), centimètres (`cm`) ou millimètres (`mm`) ne correspondent pas nécessairement à la taille de l'unité physique du même nom.

Pour les appareils à haute densité de pixels, les pouces (`in`), centimètres (`cm`) et millimètres (`mm`) sont identiques à leurs équivalents physiques. L'unité `px` est donc définie par rapport à eux (1/96 de `1in`).

> [!NOTE]
> De nombreux·ses utilisateur·ice·s augmentent la taille de police par défaut de leur {{Glossary("user agent", "agent utilisateur")}} pour améliorer la lisibilité du texte. Les longueurs absolues peuvent poser des problèmes d'accessibilité car elles sont fixes et ne s'adaptent pas aux préférences utilisateur·ice·s. Pour cette raison, il est préférable d'utiliser des longueurs relatives (comme `em` ou `rem`) lors de la définition de `font-size`.

- `px`
  - : Un pixel. Pour les écrans, cela représente traditionnellement un {{glossary("device pixel", "pixel matériel")}} (point). Cependant, pour les _imprimantes_ et les _écrans haute résolution_, un pixel CSS correspond à plusieurs pixels matériels. `1px` = `1in / 96`.
- `cm`
  - : Un centimètre. `1cm` = `96px / 2,54`.
- `mm`
  - : Un millimètre. `1mm` = `1cm / 10`.
- `Q`
  - : Un quart de millimètre. `1Q` = `1cm / 40`.
- `in`
  - : Un pouce. `1in` = `2,54cm` = `96px`.
- `pc`
  - : Un pica. `1pc` = `12pt` = `1in / 6`.
- `pt`
  - : Un point. `1pt` = `1in / 72`.

## Interpolation

Lorsqu'elles sont animées, les valeurs du type de données `<length>` sont interpolées comme des nombres réels à virgule flottante. L'{{Glossary("interpolation", "interpolation")}} s'effectue sur la valeur calculée. La vitesse de l'interpolation est déterminée par la {{cssxref("easing-function","fonction de temporisation","",1)}} associée à l'animation.

## Exemples

### Comparer différentes unités de longueur

L'exemple suivant vous propose un champ de saisie dans lequel vous pouvez entrer une valeur `<length>` (par exemple&nbsp;: `300px`, `50%`, `30vw`) pour définir la largeur d'une barre de résultat qui apparaîtra en dessous après avoir appuyé sur la touche <kbd>Entrée</kbd> ou <kbd>Retour arrière</kbd>.

Cela vous permet de comparer les effets des différentes unités de longueur.

#### HTML

```html
<div class="outer">
  <div class="input-container">
    <label for="length">Entrer la largeur&nbsp;:</label>
    <input type="text" id="length" />
  </div>
  <div class="inner"></div>
</div>
<div class="results"></div>
```

#### CSS

```css
html {
  font-family: sans-serif;
  font-weight: bold;
  box-sizing: border-box;
}

.outer {
  width: 100%;
  height: 50px;
  background-color: #eeeeee;
  position: relative;
}

.inner {
  height: 50px;
  background-color: #999999;
  box-shadow:
    inset 3px 3px 5px rgb(255 255 255 / 50%),
    inset -3px -3px 5px rgb(0 0 0 / 50%);
}

.result {
  height: 20px;
  box-shadow:
    inset 3px 3px 5px rgb(255 255 255 / 50%),
    inset -3px -3px 5px rgb(0 0 0 / 50%);
  background-color: orange;
  display: flex;
  align-items: center;
  margin-top: 10px;
}

.result code {
  position: absolute;
  margin-left: 20px;
}

.results {
  margin-top: 10px;
}

.input-container {
  position: absolute;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 50px;
}

label {
  margin: 0 10px 0 20px;
}
```

#### JavaScript

```js
const inputDiv = document.querySelector(".inner");
const inputElem = document.querySelector("input");
const resultsDiv = document.querySelector(".results");

inputElem.addEventListener("change", () => {
  inputDiv.style.width = inputElem.value;

  const result = document.createElement("div");
  result.className = "result";
  result.style.width = inputElem.value;
  const code = document.createElement("code");
  code.textContent = `width: ${inputElem.value}`;
  result.appendChild(code);
  resultsDiv.appendChild(result);

  inputElem.value = "";
  inputElem.focus();
});
```

#### Résultat

{{EmbedLiveSample('Comparer différentes unités de longueur', '100%', 700)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Tutoriel sur les unités et valeurs CSS](/fr/docs/Learn_web_development/Core/Styling_basics/Values_and_units)
- [Référence des unités et valeurs en CSS](/fr/docs/Web/CSS/Guides/Values_and_units)
- [Modèle de boîtes CSS](/fr/docs/Web/CSS/Guides/Box_model)
