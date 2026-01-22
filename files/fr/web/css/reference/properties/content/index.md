---
title: content
slug: Web/CSS/Reference/Properties/content
original_slug: Web/CSS/content
l10n:
  sourceCommit: e82803beedb7f1d8a8e918c1071752f18e1e3f28
---

La propriété [CSS](/fr/docs/Web/CSS) **`content`** remplace le contenu par une valeur générée. Elle peut être utilisée pour définir ce qui est affiché à l'intérieur d'un élément ou d'un pseudo-élément. Pour les éléments, la propriété `content` spécifie si l'élément s'affiche normalement (`normal` ou `none`) ou s'il est remplacé par une image (et le texte alternatif (`alt`) associé). Pour les pseudo-éléments et les marges, `content` définit le contenu comme des images, du texte, les deux ou aucun, ce qui détermine si l'élément est affiché ou non.

Les objets insérés à l'aide de la propriété `content` sont **des {{glossary("replaced elements", "éléments remplacés")}} anonymes**.

{{InteractiveExample("Démonstration CSS&nbsp;: content", "tabbed-shorter")}}

```css interactive-example
.topic-games::before {
  content: "🎮 " / "jeux";
}

.topic-weather::before {
  content: "⛅ " / "nuageux";
}

.topic-hot::before {
  content: url("/shared-assets/images/examples/fire.png") / "En feu";
  margin-right: 6px;
}
```

```html interactive-example
<p class="topic-games">
  Actualités jeux vidéo&nbsp;: aucun nouveau titre de inFamous n'est prévu
</p>

<p class="topic-weather">
  Météo du jour&nbsp;: chaleur, tempêtes violentes et tornades
</p>

<p class="topic-hot">
  Article tendance&nbsp;: vidéos incontournables de la semaine
</p>
```

## Syntaxe

```css
/* Des mots-clés qui ne peuvent pas être mélangés avec d'autres valeurs */
content: normal;
content: none;

/* Valeurs pour une image (<image>) */
content: url("http://www.example.com/test.png");
content: linear-gradient(#e66465, #9198e5);
content: image-set("image1x.png" 1x, "image2x.png" 2x);

/* Texte alternatif pour le contenu, ajouté avec le niveau 3 de la spécification */
content: url("http://www.example.com/test.png") / "Le texte alternatif";

/* Une valeur <string>, les caractères non-latin */
/* doivent être échappées par ex. \000A9 for &copy; */
content: "préfixe";

/* Valeurs utilisant un compteur, éventuellement
   avec <list-style-type> */
content: counter(compteur_chapitre);
content: counter(compteur_chapitre, upper-roman);
content: counters(compteur_section, ".");
content: counters(compteur_section, ".", decimal-leading-zero);

/* attr() lie à la valeur de l'attribut HTML */
content: attr(value string);

/* Mots-clés dépendant de langue ou de la position */
content: open-quote;
content: close-quote;
content: no-open-quote;
content: no-close-quote;

/* Sauf avec normal et none, on peut utiliser */
/* plusieurs valeurs de façon simultanée */
content: "préfixe" url("http://www.example.com/test.png");
content: "préfixe" url("/img/test.png") "suffixe" / "Le texte alternatif";
content: open-quote counter(chapter_counter);

/* Valeurs globales */
content: inherit;
content: initial;
content: revert;
content: revert-layer;
content: unset;
```

### Valeurs

La valeur peut être&nbsp;:

- L'un des deux mots-clés&nbsp;: `none` ou `normal`. `normal` est la valeur par défaut de la propriété.
- `<content-replacement>` lors du remplacement d'un nœud DOM. `<content-replacement>` est toujours une `<image>`.
- Une `<content-list>` lors du remplacement des pseudo-éléments et des marges. Une `<content-list>` est une liste d'une ou plusieurs boîtes en ligne (<i lang="en">inline box</i> en anglais) anonymes apparaissant dans l'ordre spécifié. Chaque élément de la `<content-list>` est de type [`<string>`](#string), [`<image>`](#image), [`<counter>`](#counter), [`<quote>`](#quote), [`<target>`](#target) ou [`<leader()>`](#leader).
- Une valeur de texte alternatif facultative d'un `<string>` ou d'un `<counter>`, précédée d'une barre oblique (`/`).

Les mots-clés et les types de données mentionnés ci-dessus sont décrits plus en détail ci-dessous&nbsp;:

- `none`
  - : Quand il est appliqué à un pseudo-élément, le pseudo-élément n'est pas généré.
    Lorsqu'il est appliqué à un élément, la valeur n'a aucun effet.

- `normal`
  - : Pour les pseudo-éléments {{cssxref("::before")}} et {{cssxref("::after")}}, cette valeur est calculée comme `none`. Pour d'autres pseudo-éléments tels que {{cssxref("::marker")}}, {{cssxref("::placeholder")}} ou {{cssxref("::file-selector-button")}}, elle produit le contenu initial (ou normal) de l'élément. Pour les éléments réguliers ou les boîtes de marge de page, elle est calculée comme les descendants de l'élément. C'est la valeur par défaut.

- {{cssxref("&lt;string&gt;")}}
  - : A sequence of characters enclosed in matching single or double quotes. Multiple string values will be concatenated (there is no concatenation operator in CSS).

- {{cssxref("&lt;image&gt;")}}
  - : Une {{cssxref("&lt;image&gt;")}}, représentant une image à afficher. Cela peut être égal à une {{cssxref("url_value", "&lt;url&gt;")}}, {{cssxref("image/image-set", "image-set()")}}, ou {{cssxref("&lt;gradient&gt;")}} type de données, ou une partie de la page Web elle-même, définie par la {{cssxref("element", "element()")}} fonction.

- `<counter>`
  - : La valeur `<counter>` est un [compteur CSS](/fr/docs/Web/CSS/Guides/Counter_styles/Using_counters), généralement un nombre produit par des calculs définis par les {{cssxref("&lt;counter-reset&gt;")}} et {{cssxref("&lt;counter-increment&gt;")}} propriétés. Il peut être affiché à l'aide de la {{cssxref("counter", "counter()")}} ou {{cssxref("counters", "counters()")}} fonction.
    - {{cssxref("counter", "counter()")}}
      - : La {{cssxref("counter", "counter()")}} fonction a deux formes : 'counter(_name_)' ou 'counter(_name_, style)'. Le texte généré est la valeur du compteur le plus interne du nom donné dans le contexte du pseudo-élément donné. Il est formaté dans le {{cssxref("&lt;list-style-type&gt;")}} spécifié (`decimal` par défaut).
    - {{cssxref("counters", "counters()")}}
      - : La {{cssxref("counters", "counters()")}} fonction a également deux formes : 'counters(_name_, _string_)' ou 'counters(_name_, _string_, _style_)'. Le texte généré est la valeur de tous les compteurs avec le nom donné dans le contexte du pseudo-élément donné, du plus externe au plus interne, séparés par la chaîne spécifiée. Les compteurs sont rendus dans le {{cssxref("&lt;list-style-type&gt;")}} indiqué (`decimal` par défaut).

- `<quote>`
  - : Le type de données `<quote>` comprend des mots-clés dépendants de la langue et de la position&nbsp;:
    - `open-quote` et `close-quote`
      - : Ces valeurs sont remplacées par la chaîne appropriée de la {{cssxref("quotes")}} propriété.
    - `no-open-quote` et `no-close-quote`
      - : N'introduit aucun contenu, mais incrémente (décrémente) le niveau de nesting pour les citations.

- `<target>`
  - : Le type de données `<target>` comprend trois fonctions cibles, `<target-counter()>`, `<target-counters()>`, et `<target-text()>` qui créent des références croisées obtenues à partir de l'extrémité cible d'un lien. Voir [Syntaxe formelle](#syntaxe_formelle).

- `<leader()>`
  - : Le type de données `<leader()>` comprend une fonction leader : `leader( <leader-type> )`. Cette fonction accepte les valeurs de mots-clés `dotted`, `solid`, ou `space` (égal à `leader(".")`, `leader("_")`, et `leader(" ")`, respectivement), ou une `<string>` comme paramètre. Lorsqu'il est pris en charge et utilisé comme valeur pour `content`, le type de leader fourni sera inséré comme un motif répétitif, reliant visuellement le contenu à travers une ligne horizontale.

- `attr(x)`
  - : La fonction CSS `attr(x)` récupère la valeur d'un attribut de l'élément sélectionné, ou de l'élément d'origine du pseudo-élément. La valeur de l'attribut `x` de l'élément est une chaîne non analysée représentant le nom de l'attribut. S'il n'y a pas d'attribut `x`, une chaîne vide est renvoyée. La sensibilité à la casse du paramètre de nom d'attribut dépend de la langue du document.

- les textes alternatifs&nbsp;: `/ <string> | <counter>`
  - : Le texte alternatif peut être spécifié pour une image ou tout élément de `<content-list>`, en ajoutant une barre oblique et ensuite une chaîne de texte ou un compteur. Le texte alternatif est destiné à la sortie vocale par les lecteurs d'écran, mais peut également être affiché dans certains navigateurs. Les types de données {{cssxref("string", "/ &lt;string>")}} ou {{cssxref("counter", "/ &lt;counter>")}} spécifient le "texte alternatif" pour l'élément.

## Définition formelle

{{cssinfo}}

## Syntaxe formelle

{{csssyntax}}

## Accessibilité

Le contenu généré par CSS n'est pas inclus dans le [DOM](/fr/docs/Web/API/Document_Object_Model). Pour cette raison, il ne fait pas partie de l'[arbre d'accessibilité](/fr/docs/Learn_web_development/Core/Accessibility/What_is_accessibility#accessibility_apis) et certaines technologies d'assistances ou certains navigateurs ne permettront pas d'annoncer ce contenu. Si ce contenu porte des informations essentielles à la compréhension de la page, il faut inclure ces informations de façon sémantique dans le document principal.

- [La prise en charge relative à l'accessibilité pour les contenus générés par CSS — Tink <sup>(angl.)</sup>](https://tink.uk/accessibility-support-for-css-generated-content/)
- [Comprendre les règles WCAG 1.3](/fr/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.3_—_create_content_that_can_be_presented_in_different_ways)
- [Comprendre le critère de succès 1.3.1 | W3C Comprendre les WCAG 2.0 <sup>(angl.)</sup>](https://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-programmatic.html)
- [Non-respect du critère de succès 1.3.1&nbsp;: insertion de contenu généré non décoratif <sup>(angl.)</sup>](https://www.w3.org/TR/WCAG20-TECHS/F87) dans Techniques pour le WCAG 2.0

## Exemples

Les cinq premiers exemples créent du contenu généré sur des pseudo-éléments. Les trois derniers sont des [exemples de remplacement d'éléments](#exemples_de_remplacement_déléments).

### Ajouter du contenu en fonction de la classe d'un élément

Cet exemple insère du texte généré après le texte des éléments qui ont un nom de classe particulier. Le texte est coloré en rouge.

#### HTML

```html
<h2>Meilleures ventes de livres de poche</h2>
<ol>
  <li>Thriller politique</li>
  <li class="new-entry">Histoires d'Halloween</li>
  <li>Ma biographie</li>
  <li class="new-entry">Romance vampirique</li>
</ol>
```

#### CSS

```css
.new-entry::after {
  content: " Nouveau !";
  /* L'espace avant la première lettre est
     voulu afin de détacher le mot du reste
     du contenu */
  color: red;
}
```

#### Résultat

{{EmbedLiveSample('ajouter_du_contenu_en_fonction_de_la_classe_dun_élément', '100%', 160)}}

### Citations

Cet exemple insère des guillemets de couleur différente autour des citations.

#### HTML

```html
<p>
  Commençons par une citation de Sir Tim Berners-Lee,
  <q cite="http://www.w3.org/People/Berners-Lee/FAQ.html#Internet">
    I was lucky enough to invent the Web at the time when the Internet already
    existed - and had for a decade and a half.</q
  >
  We must understand that there is nothing fundamentally wrong with building on
  the contributions of others.
</p>
<p lang="fr-fr">
  Mais c'est Magritte qui a dit,
  <q lang="fr-fr"> Ceci n'est pas une pipe. </q>.
</p>
```

#### CSS

```css
q {
  color: blue;
}

q::before,
q::after {
  font-size: larger;
  color: red;
  background: #cccccc;
}

q::before {
  content: open-quote;
}

q::after {
  content: close-quote;
}
```

#### Résultat

{{EmbedLiveSample('citations', '100%', 200)}}

Notez que le [type de guillemets générés](/fr/docs/Web/CSS/Reference/Properties/quotes#auto_quotes) est basé sur la langue. Les navigateurs ajoutent des guillemets ouvrants et fermants avant et après les éléments {{HTMLElement("q")}} par défaut, de sorte que les guillemets dans cet exemple apparaîtraient sans qu'ils soient explicitement définis. Ils auraient pu être désactivés en définissant les valeurs de propriété `content` respectives sur `no-open-quote` et `no-close-quote`, ou en les définissant toutes deux sur `none`. Ils peuvent également être désactivés en définissant la propriété {{cssxref("quotes")}} sur `none` à la place.

### Ajouter du texte aux compteurs d'éléments de liste

Cet exemple combine un compteur encadré entre deux `<string>`s préfixés à tous les éléments de liste, créant un marqueur plus détaillé pour les éléments de liste ({{HTMLElement("li")}}) au sein des listes non ordonnées ({{HTMLElement("ol")}}).

#### HTML

```html
<ol>
  <li>Chiens</li>
  <li>Chats</li>
  <li>
    Oiseaux
    <ol>
      <li>Chouettes</li>
      <li>Canards</li>
      <li>Incapables de voler</li>
    </ol>
  </li>
  <li>Marsupiaux</li>
</ol>
```

#### CSS

```css
ol {
  counter-reset: items;
  margin-left: 2em;
}
li {
  counter-increment: items;
}
li::marker {
  content: "élément " counters(items, ".", numeric) ": ";
}
```

#### Résultat

{{EmbedLiveSample('ajouter_du_texte_aux_compteurs_déléments_de_liste', '100%', 200)}}

Le contenu généré sur le marqueur de chaque élément de liste ajoute le texte "élément " comme préfixe, y compris un espace pour séparer le préfixe du compteur, qui est suivi de ": ", d'un deux-points et d'un espace supplémentaire. La fonction {{cssxref("counters", "counters()")}} définit un compteur numérique `items`, dans lequel les numéros des listes ordonnées imbriquées ont leurs numéros séparés par un point (`.`) dans la plupart des navigateurs.

### Chaînes de caractères avec valeurs d'attribut

Cet exemple est utile pour les feuilles de style d'impression. Il utilise un [sélecteur d'attribut](/fr/docs/Web/CSS/Reference/Selectors/Attribute_selectors) pour sélectionner chaque lien sécurisé entièrement qualifié, ajoutant la valeur de l'attribut `href` après le texte du lien comme contenu du pseudo-élément {{cssxref("::after")}}.

#### HTML

```html
<ul>
  <li><a href="https://mozilla.com">Mozilla</a></li>
  <li><a href="/">MDN</a></li>
  <li><a href="https://openwebdocs.org">OpenWebDocs</a></li>
</ul>
```

#### CSS

```css
a[href^="https://"]::after {
  content: " (Lien : " attr(href) ")";
  color: darkgreen;
}
```

#### Résultat

{{EmbedLiveSample('chaînes_de_caractères_avec_valeurs_dattribut', '100%', 200)}}

Le contenu généré est la valeur de l'attribut `href`, précédée de "Lien : ", avec un espace, le tout entre parenthèses.

### Ajouter une image avec un texte alternatif

Cet exemple insère une image avant tous les liens. Deux valeurs `content` sont fournies. La dernière valeur `content` inclut une image avec un texte alternatif que les lecteurs d'écran peuvent lire à voix haute.

#### HTML

```html
<a href="https://www.mozilla.org/fr/">Page d'accueil de Mozilla</a>
```

#### CSS

Le CSS pour afficher l'image et définir le texte alternatif est montré ci-dessous.
Cela définit également la police et la couleur pour le contenu.

```css
a::before {
  content: url("https://mozorg.cdn.mozilla.net/media/img/favicon.ico") /
    " MOZILLA: ";
}
```

#### Résultat

{{EmbedLiveSample('Adding_an_image_with_alternative_text', '100%', 60)}}

> [!NOTE]
> La valeur du texte alternatif est exposée dans l'arbre d'accessibilité du navigateur. Consultez la section [Voir aussi](#voir_aussi) pour les panneaux d'accessibilité spécifiques au navigateur.

Si vous utilisez un lecteur d'écran, il devrait prononcer le mot "MOZILLA" lorsqu'il atteint l'image. Vous pouvez sélectionner le pseudo-élément `::before` avec l'outil de sélection des outils de développement, et voir le {{glossary("accessible name")}} dans le panneau d'accessibilité.

### Remplacement d'élément avec un lien

Cet exemple remplace un élément régulier&nbsp;! Le contenu de l'élément est remplacé par un SVG utilisant le type {{cssxref("url_value", "&lt;url&gt;")}}.

Les pseudo-éléments ne sont pas rendus sur les éléments remplacés. Comme cet élément est remplacé, tous les `::after` ou `::before` correspondants ne sont pas générés ou appliqués. Pour démontrer cela, nous incluons un bloc de déclaration `::after`, tentant d'ajouter l'`id` en tant que contenu généré. Ce pseudo-élément ne sera pas généré car l'élément est remplacé.

#### HTML

```html
<div id="replaced">Ce contenu est remplacé&nbsp;!</div>
```

#### CSS

```css
#replaced {
  content: url("mdn.svg");
}

/* ne s'affichera pas si le remplacement d'élément est pris en charge */
div::after {
  content: " (" attr(id) ")";
}
```

#### Résultat

{{EmbedLiveSample('remplacement_delement_avec_un_lien', '100%',400)}}

Lorsqu'on génère du contenu sur des éléments réguliers (plutôt que juste sur des pseudo-éléments), l'élément entier est remplacé. Cela signifie que les pseudo-éléments `::before` et `::after` ne sont pas générés.

### Remplacement d'élément avec `<gradient>`

Cet exemple démontre comment le contenu d'un élément peut être remplacé par n'importe quel type d'`<image>`, dans ce cas, un dégradé CSS. Le contenu de l'élément est remplacé par un {{cssxref("gradient/linear-gradient", "linear-gradient()")}}. Nous fournissons un texte alternatif car toutes les images doivent être décrites pour l'accessibilité.

#### HTML

```html
<div id="replaced">Je disparais</div>
```

#### CSS

```css
div {
  border: 1px solid;
  background-color: #cccccc;
  min-height: 100px;
  min-width: 100px;
}

#replaced {
  content: repeating-linear-gradient(blue 0, orange 10%) /
    "Les dégradés et le texte alternatif sont pris en charge";
}
```

#### Résultat

{{EmbedLiveSample('Element_replacement_with_gradient', '100%', 200)}}

Vérifiez le [tableau de compatibilité des navigateurs](#compatibilité_des_navigateurs). Tous les navigateurs prennent en charge les dégradés et tous les navigateurs prennent en charge le remplacement d'éléments par des images, mais tous les navigateurs ne prennent pas en charge les dégradés en tant que valeur `content`.

### Remplacement d'élément avec `image-set()`

Cet exemple remplace le contenu d'un élément par un {{cssxref("image/image-set", "image-set()")}}. Si l'affichage des utilisateurs a une résolution normale, le `1x.png` sera affiché. Les écrans avec une résolution plus élevée afficheront l'image `2x.png`.

#### HTML

```html
<div id="replaced">Je disparais&nbsp;!</div>
```

#### CSS

```css hidden
div {
  width: 100px;
  border: 1px solid lightgrey;
}
```

```css-nolint
#replaced {
  content: image-set(
    "1x.png" 1x,
    "2x.png" 2x
  ) / "DPI";
}
```

#### Résultat

{{EmbedLiveSample('remplacement_delement_avec_image-set', '100%', 110)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{Cssxref("::after")}}
- {{Cssxref("::before")}}
- {{Cssxref("::marker")}}
- {{cssxref("::scroll-button()")}}
- {{cssxref("::scroll-marker")}}
- {{cssxref(":target-current")}}
- {{Cssxref("contain")}}
- {{Cssxref("quotes")}}
- {{cssxref("gradient", "&lt;gradient&gt;")}}
- {{cssxref("image/image-set", "image-set()")}}
- {{cssxref("url_value", "&lt;url&gt;")}}
- {{glossary("Replaced elements")}}
- Le module de [contenu généré par CSS](/fr/docs/Web/CSS/Guides/Generated_content) module
- Le module des [listes et compteurs CSS](/fr/docs/Web/CSS/Guides/Lists) module
- Panneaux d'accessibilité du navigateur&nbsp;:
  - [Inspecteur d'accessibilité de Firefox](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/)
  - [Panneau d'accessibilité de Chrome](https://developer.chrome.com/docs/devtools/accessibility/reference#pane)
  - [Arbre d'accessibilité de Safari](https://webflow.com/glossary/accessibility-tree#:~:text=To%20view%20a%20website%E2%80%99s%20accessibility%20tree%20in%20Safari)
