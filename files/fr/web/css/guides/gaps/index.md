---
title: Espacements CSS
short-title: Espacements
slug: Web/CSS/Guides/Gaps
l10n:
  sourceCommit: 8a13259a44523cd17b4fe347088b62c6d7a35265
---

Le module des **espacements CSS** vous permet de définir l'espacement, ou les «&nbsp;enjambements&nbsp;», entre les éléments dans les mises en page [multi-colonnes](/fr/docs/Web/CSS/Guides/Multicol_layout), [de boîte flexible](/fr/docs/Web/CSS/Guides/Flexible_box_layout) et [grille](/fr/docs/Web/CSS/Guides/Grid_layout). Le module de [mise en page multi-colonnes CSS](/fr/docs/Web/CSS/Guides/Multicol_layout) définit à l'origine les espacements et les règles qui contrôlent l'espacement entre les colonnes dans les conteneurs multi-colonnes. Ce module étend ces séparateurs visibles, appelés _décorations d'espacement_, aux grilles et aux boîtes flexibles.

Alors que {{CSSxRef("margin")}} et {{CSSxRef("padding")}} définissent l'espacement visuel autour des boîtes individuelles, les propriétés de ce module permettent de définir l'espacement entre les boîtes adjacentes dans un contexte de mise en page donné pour les mises en page qui ont des {{Glossary("gutters", "gouttières")}} et des espacements, lorsque l'espacement est différent entre les boîtes voisines par rapport à l'espacement entre la première boîte, la dernière boîte et le bord du conteneur. Vous pouvez afficher des règles dans chaque espacement ou dans un sous-ensemble de espacements, en définissant des largeurs, des couleurs et des marges qui peuvent être entièrement animées.

Les décorations d'espacement sont peintes à l'intérieur d'un espacement sous forme d'un ou plusieurs segments de décoration d'espacement, les segments se produisant entre deux éléments adjacents.
Lorsque tous les segments sont dessinés, les règles de colonne et de ligne s'étendent sur toute la hauteur et la largeur du conteneur. La propriété {{CSSxRef("rule-visibility-items")}} définit si les segments doivent être dessinés autour des zones non occupées par des éléments. Les propriétés {{CSSxRef("rule-break")}} déterminent si les lignes se brisent lorsqu'elles intersectent un espacement, tandis que {{CSSxRef("rule-inset")}} définit où les segments commencent et se terminent lorsque les règles se brisent. Si elles ne se brisent pas, la propriété {{CSSxRef("rule-overlap")}} définit l'ordre de peinture des règles.

## Les espacements en action

Dans cet exemple, le poème de 2021 prononcé lors de la cérémonie d'investiture aux États-Unis, _The Hill We Climb_, d'Amanda Gorman, est présenté sur plusieurs colonnes, à l'instar de la mise en page des articles dans les journaux imprimés. Si JavaScript est activé, des commandes permettent de modifier les propriétés {{CSSxRef("column-gap")}}, {{CSSxRef("column-rule-color")}}, {{CSSxRef("column-rule-style")}} et {{CSSxRef("column-rule-width")}}, ainsi que le nombre de colonnes préféré et si le titre et une citation doivent s'étendre sur toutes les colonnes.

```html hidden live-sample___multicol
<article>
  <div class="titre">
    <h1>The Hill We Climb</h1>
    <p>&mdash;Amanda Gorman, 2021</p>
  </div>
  <p>
    Quand le jour se lève, nous nous demandons où trouver la lumière dans cette
    ombre sans fin ? La perte que nous portons en nous, une mer que nous devons
    affronter. Nous avons bravé les entrailles de la bête.
  </p>

  <p>
    Nous avons appris que le silence n'est pas toujours synonyme de paix et que
    les normes et les idées reçues sur ce qui est juste ne correspondent pas
    toujours à la justice. Et pourtant, l'aube se profile déjà, bien avant que
    nous ne nous en rendions compte, d'une manière ou d'une autre nous y
    parvenons, d'une manière ou d'une autre nous avons traversé les tempêtes et
    vu de nos propres yeux une nation qui n'est pas brisée, mais simplement
    inachevée.
  </p>

  <p>
    Nous, les héritiers d'un pays et d'une époque où une jeune fille noire,
    mince, issue d'une famille d'esclaves et élevée par une mère célibataire,
    peut rêver de devenir présidente, pour finalement se retrouver à réciter un
    discours pour l'un d'entre eux.
  </p>

  <p>
    Et oui, nous sommes loin d'être parfaits, loin d'être irréprochables, mais
    cela ne signifie pas que nous nous efforçons de former une union parfaite.
    Nous nous efforçons de forger notre union avec un but précis, de bâtir un
    pays engagé envers toutes les cultures, toutes les couleurs, tous les
    caractères et toutes les conditions de l'être humain. C'est pourquoi nous
    tournons notre regard non pas vers ce qui nous sépare, mais vers ce qui nous
    attend. Nous comblons le fossé parce que nous savons qu'il faut donner la
    priorité à notre avenir. Nous devons d'abord mettre nos différences de côté.
  </p>

  <p>
    Nous déposons les armes pour pouvoir tendre les bras les uns vers les
    autres. Nous ne voulons de mal à personne et aspirons à l'harmonie pour
    tous. Que le monde entier, à défaut d'autre chose, reconnaisse que c'est
    vrai, que même dans notre chagrin, nous avons grandi. Que même dans notre
    souffrance, nous avons gardé espoir.
  </p>

  <p>
    Que même si nous étions épuisés, nous avons persévéré. Que nous sommes liés
    à jamais, victorieux, non pas parce que nous ne connaîtrons plus jamais la
    défaite, mais parce que nous ne semerons plus jamais la division.
  </p>

  <p>
    Les Écritures nous invitent à imaginer que chacun s'assiéra sous sa vigne et
    son figuier, et que personne ne lui fera peur.
  </p>

  <p>
    Si nous voulons être à la hauteur de notre époque, la victoire ne réside pas
    dans le fer de l'épée, mais dans tous les ponts que nous avons construits,
    dans cette promesse de clarté, dans cette colline que nous gravissons si
    seulement nous osons le faire, car être américain, c'est bien plus qu'une
    fierté dont nous avons hérité. C'est le passé dans lequel nous nous sommes
    engagés et la manière dont nous le réparons.
  </p>

  <blockquote>
    <p>
      Nous avons vu une force qui préférerait briser notre nation plutôt que de
      la partager, qui détruirait notre pays si cela devait retarder la
      démocratie.
    </p>
  </blockquote>

  <p>
    Et cette tentative a failli aboutir. Mais si la démocratie peut être
    temporairement mise en échec, elle ne peut jamais être vaincue
    définitivement. C'est en cette vérité, en cette conviction, que nous avons
    confiance. Car tandis que nous avons les yeux tournés vers l'avenir,
    l'histoire a les yeux rivés sur nous.
  </p>

  <p>
    C'est l'ère où la rédemption est juste. Nous avons craint -- ses tromperies.
    Nous ne nous sentions pas prêts à être les héritiers d'un moment aussi
    terrifiant, mais c'est en son sein que nous avons trouvé la force d'écrire
    un nouveau chapitre, de nous offrir, à nous-mêmes, de l'espoir et des rires.
  </p>

  <p>
    Ainsi, alors qu'autrefois nous nous demandions « comment pourrions-nous bien
    triompher de la catastrophe ? », nous affirmons désormais : « comment la
    catastrophe pourrait-elle bien triompher de nous ? » Nous ne reviendrons pas
    en arrière, vers ce qui était, mais nous avançerons vers ce qui sera, un
    pays meurtri mais intact, bienveillant mais audacieux, farouche et libre.
    Nous ne nous laisserons ni faire rebrousser chemin ni freiner par
    l'intimidation.
  </p>

  <p>
    Car nous savons que notre inaction et notre inertie seront l'héritage de la
    prochaine génération. Nos erreurs deviendront leur fardeau. Mais une chose
    est certaine. Si nous allions la miséricorde à la puissance et la puissance
    au droit, alors l'amour deviendra notre héritage et le changement, le droit
    inaliénable de nos enfants.
  </p>

  <p>
    Laissons donc derrière nous un pays meilleur que celui dont nous avons
    hérité, chaque souffle de ma poitrine de bronze martelé contribuera à
    transformer ce monde meurtri en un monde merveilleux. Nous nous élèverons
    depuis les collines aux versants dorés de l'Ouest, nous nous élèverons
    depuis le Nord-Est balayé par les vents, là où nos ancêtres ont pour la
    première fois fait la révolution. Nous nous élèverons depuis les villes
    bordées de lacs des États du Midwest.
  </p>

  <p>
    Nous nous élèverons du Sud brûlé par le soleil. Nous reconstruirons, nous
    réconcilierons et nous nous relèverons, dans chaque recoin connu de notre
    nation, dans chaque coin appelé notre pays, notre peuple, divers et
    magnifique, émergera meurtri et magnifique.
  </p>

  <p>
    Quand le jour se lève, nous sortons de l'ombre, enflammés et sans crainte.
  </p>

  <p>
    La nouvelle aube s'épanouit à mesure que nous la libérons, car il y a
    toujours de la lumière, à condition d'être assez courageux pour la voir, à
    condition d'être assez courageux pour l'incarner.
  </p>
</article>
<fieldset id="options" class="open">
  <legend>
    <button aria-expanded="true" aria-controls="controls">
      Options de colonnes
    </button>
  </legend>
  <div id="controls">
    <p>
      <input type="checkbox" checked id="etendueColonne" />
      <label for="etendueColonne">
        Le paraphe s'étend sur toutes les colonnes
      </label>
    </p>
    <p>
      <input type="checkbox" id="etendueBloc" />
      <label for="etendueBloc">
        Le bloc de citation s'étend sur toutes les colonnes
      </label>
    </p>
    <section>
      <p>
        <label for="compteColonne">column-count</label>
        <input type="number" min="0" max="5" value="5" id="compteColonne" />
      </p>
      <p>
        <label for="hauteurColonne">column-height:</label>
        <input
          type="number"
          min="0"
          max="100"
          value="20"
          id="hauteurColonne"
          step="5" /><label for="hauteurColonne">vh</label>
      </p>
      <p>
        <label for="couleurColonne">rule-color:</label>
        <input type="color" id="couleurColonne" value="#FF0000" />
      </p>
      <p>
        <label for="regleStyleColonne">rule-style:</label>
        <select id="regleStyleColonne">
          <option>none</option>
          <option>hidden</option>
          <option>dotted</option>
          <option>dashed</option>
          <option>solid</option>
          <option selected>double</option>
          <option>groove</option>
          <option>ridge</option>
          <option>inset</option>
          <option>outset</option>
          <option></option>
        </select>
      </p>
      <p>
        <input
          type="range"
          min="0"
          max="4"
          value="1"
          step="0.5"
          id="tailleEspace" />
        <label for="tailleEspace">gap: </label
        ><output id="espace" class="sortie">1em</output>
      </p>
      <p>
        <input
          type="range"
          min="0"
          max="3"
          value="0.3"
          step="0.1"
          id="regleLargeurColonne" />
        <label for="regleLargeurColonne">rule-width: </label
        ><output id="regleLargeur" class="sortie">0.3em</output>
      </p>
      <p>
        <input
          type="range"
          min="-50"
          max="200"
          value="0"
          step="5"
          id="regleEncart" />
        <label for="regleEncart">rule-inset: </label
        ><output id="encart" class="sortie">0%</output>
      </p>
    </section>
  </div>
</fieldset>
```

```js hidden live-sample___multicol
const page = document.querySelector("article");
const titre = document.querySelector(".titre");
const option = document.querySelector("#options");
const legende = document.querySelector("#options > legend");
const btnLegende = document.querySelector("#options > legend > button");
const blocCitation = document.getElementsByTagName("blockquote")[0];

const compteColonne = document.getElementById("compteColonne");
const etendueColonne = document.getElementById("etendueColonne");
const etendueBloc = document.getElementById("etendueBloc");

const tailleEspace = document.getElementById("tailleEspace");
const espace = document.getElementById("espace");
const regleLargeurColonne = document.getElementById("regleLargeurColonne");
const regleLargeur = document.getElementById("regleLargeur");
const regleStyleColonne = document.getElementById("regleStyleColonne");
const regleStyle = document.getElementById("regleStyle");
const regleCouleurColonne = document.getElementById("couleurColonne");
const hauteurColonne = document.getElementById("hauteurColonne");
const regleEncart = document.getElementById("regleEncart");
const encart = document.getElementById("encart");

// Rend les options visibles si JavaScript est activé
option.style.display = "revert";

btnLegende.addEventListener("click", () => {
  showAndHideMenu();
});

compteColonne.addEventListener("change", () => {
  page.style.columnCount = compteColonne.value;
});

hauteurColonne.addEventListener("input", () => {
  page.style.columnHeight = `${hauteurColonne.value}vh`;
});

tailleEspace.addEventListener("input", () => {
  page.style.gap = `${tailleEspace.value}em`;
  espace.innerText = `${tailleEspace.value}em`;
});
regleEncart.addEventListener("input", () => {
  page.style.ruleInset = `${regleEncart.value}%`;
  encart.innerText = `${regleEncart.value}%`;
});

regleLargeurColonne.addEventListener("input", () => {
  page.style.columnRuleWidth = `${regleLargeurColonne.value}em`;
  page.style.ruleWidth = `${regleLargeurColonne.value}em`;
  regleLargeur.innerText = `${regleLargeurColonne.value}em`;
});

regleStyleColonne.addEventListener("input", () => {
  page.style.columnRuleStyle = regleStyleColonne.value;
  page.style.ruleStyle = regleStyleColonne.value;
});

etendueColonne.addEventListener("change", () => {
  definirEtendueColonne(etendueColonne, titre);
});

etendueBloc.addEventListener("change", () => {
  definirEtendueColonne(etendueBloc, blocCitation);
});

regleCouleurColonne.addEventListener("input", () => {
  page.style.columnRuleColor = regleCouleurColonne.value;
  page.style.ruleColor = regleCouleurColonne.value;
});

function showAndHideMenu() {
  if (btnLegende.getAttribute("aria-expanded") === "true") {
    // le fermer
    btnLegende.setAttribute("aria-expanded", "false");
    legende.classList.add("closed");
    legende.classList.remove("open");
  } else {
    // l'ouvrir
    btnLegende.setAttribute("aria-expanded", "true");
    legende.classList.remove("closed");
    legende.classList.add("open");
  }
}

function definirEtendueColonne(controle, element) {
  if (controle.checked) {
    element.style.columnSpan = "all";
  } else {
    element.style.columnSpan = "none";
  }
}
```

```css hidden live-sample___multicol
article {
  column-count: 5;
  gap: 1em;
  column-rule: 0.3em double red;
  rule: 0.3em double red;
  column-height: 20vh;
}
.titre {
  column-span: all;
  display: flex;
  align-items: baseline;
  gap: 1em;
  flex-wrap: wrap;
}
p {
  margin: 0 0 1em 0;
  line-height: 1.4;
}
blockquote {
  font-weight: bold;
  font-style: italic;
  margin: 0 0 0.25em 0;
}
blockquote p::before,
blockquote p::after {
  content: '"';
  vertical-align: baseline;
  color: red;
}

@layer form {
  #options {
    position: fixed;
    top: 1rem;
    right: 1rem;
    background: white;
    display: none;
    padding: 0.5em 1em;
  }
  section {
    font-family: monospace;
  }
  fieldset p {
    margin-bottom: 0.25em;
  }
  legend {
    position: relative;
    top: 0;
    transition: 200ms;
  }
  legend.closed {
    top: 0.75em;
  }
  legend.closed + #controls {
    display: none;
  }
  legend {
    background-color: #dedede;
    padding: 0.5em;
  }
  legend > button {
    all: unset;
    cursor: pointer;
  }
  legend.closed {
    margin: -1em;
    display: inline-block;
  }
  .sortie {
    display: inline-block;
    width: 2em;
  }
}
```

{{EmbedLiveSample("multicol", "", 800)}}

Lorsque la règle de colonne est plus grande que l'espacement des colonnes, la ligne décorative apparaît derrière le texte&nbsp;; cela ne change pas la taille de l'espacement.

## Référence

### Propriétés

- {{CSSxRef("column-gap")}}
- {{CSSxRef("column-rule")}}
- {{CSSxRef("column-rule-break")}}
- {{CSSxRef("column-rule-color")}}
- {{CSSxRef("column-rule-inset")}}
- {{CSSxRef("column-rule-inset-cap")}}
- {{CSSxRef("column-rule-inset-cap-end")}}
- {{CSSxRef("column-rule-inset-cap-start")}}
- {{CSSxRef("column-rule-inset-end")}}
- {{CSSxRef("column-rule-inset-junction")}}
- {{CSSxRef("column-rule-inset-junction-end")}}
- {{CSSxRef("column-rule-inset-junction-start")}}
- {{CSSxRef("column-rule-inset-start")}}
- {{CSSxRef("column-rule-style")}}
- {{CSSxRef("column-rule-visibility-items")}}
- {{CSSxRef("column-rule-width")}}
- {{CSSxRef("gap")}}
- {{CSSxRef("row-gap")}}
- {{CSSxRef("row-rule")}}
- {{CSSxRef("row-rule-break")}}
- {{CSSxRef("row-rule-color")}}
- {{CSSxRef("row-rule-inset")}}
- {{CSSxRef("row-rule-inset-cap")}}
- {{CSSxRef("row-rule-inset-cap-end")}}
- {{CSSxRef("row-rule-inset-cap-start")}}
- {{CSSxRef("row-rule-inset-end")}}
- {{CSSxRef("row-rule-inset-junction")}}
- {{CSSxRef("row-rule-inset-junction-end")}}
- {{CSSxRef("row-rule-inset-junction-start")}}
- {{CSSxRef("row-rule-inset-start")}}
- {{CSSxRef("row-rule-style")}}
- {{CSSxRef("row-rule-visibility-items")}}
- {{CSSxRef("row-rule-width")}}
- {{CSSxRef("rule")}}
- {{CSSxRef("rule-break")}}
- {{CSSxRef("rule-color")}}
- {{CSSxRef("rule-inset")}}
- {{CSSxRef("rule-inset-cap")}}
- {{CSSxRef("rule-inset-end")}}
- {{CSSxRef("rule-inset-junction")}}
- {{CSSxRef("rule-inset-start")}}
- {{CSSxRef("rule-overlap")}}
- {{CSSxRef("rule-style")}}
- {{CSSxRef("rule-visibility-items")}}
- {{CSSxRef("rule-width")}}

### Termes et définitions du glossaire

- {{Glossary("Grid", "Grille")}}
- {{Glossary("Grid cell", "Cellule de grille")}}
- {{Glossary("Grid column", "Colonne de grille")}}
- {{Glossary("Grid lines", "Lignes de grille")}}
- {{Glossary("Grid row", "Ligne de grille")}}
- {{Glossary("Gutters", "Gouttières")}}

## Guides

- [Les mises en forme des colonnes](/fr/docs/Web/CSS/Guides/Multicol_layout/Styling_columns)
  - : Guide pour mettre en forme les colonnes et gérer l'espacement entre les colonnes.
- [Gérer les sauts de contenu dans une mise en page multi-colonnes](/fr/docs/Web/CSS/Guides/Multicol_layout/Handling_content_breaks)
  - : Introduction à la spécification de fragmentation et comment contrôler où le contenu des colonnes se coupe.
- [Les guides d'alignement des boîtes](/fr/docs/Web/CSS/Guides/Box_alignment#guides)
  - : Comment [l'alignement des boîtes](/fr/docs/Web/CSS/Guides/Box_alignment/Overview) fonctionne dans le contexte de la [boîte flexible](/fr/docs/Web/CSS/Guides/Box_alignment/In_flexbox), de la [mise en page en grille](/fr/docs/Web/CSS/Guides/Box_alignment/In_grid_layout), de la [mise en page multi-colonnes](/fr/docs/Web/CSS/Guides/Box_alignment/In_multi-column_layout), et pour la [mise en page en bloc, positionnée absolument et en tableau](/fr/docs/Web/CSS/Guides/Box_alignment/In_block_abspos_tables).

## Concepts associés

Le module [de disposition en boîte flexible CSS](/fr/docs/Web/CSS/Guides/Flexible_box_layout)

- {{CSSxRef("flex")}}
- {{CSSxRef("flex-basis")}}
- {{CSSxRef("flex-direction")}}
- {{CSSxRef("flex-flow")}}
- {{CSSxRef("flex-grow")}}
- {{CSSxRef("flex-shrink")}}
- {{CSSxRef("flex-wrap")}}

Le module [de disposition en grille CSS](/fr/docs/Web/CSS/Guides/Grid_layout)

- {{CSSxRef("grid")}}
- {{CSSxRef("grid-column")}}
- {{CSSxRef("grid-row")}}
- {{CSSxRef("repeat()")}}

Le module [de mise en page multi-colonnes CSS](/fr/docs/Web/CSS/Guides/Multicol_layout)

- {{CSSxRef("column-fill")}}
- {{CSSxRef("column-span")}}
- {{CSSxRef("columns")}} (raccourcie)
  - {{CSSxRef("column-count")}}
  - {{CSSxRef("column-height")}}
  - {{CSSxRef("column-width")}}
- {{CSSxRef("column-wrap")}}
- {{CSSxRef("::column")}}

[L'alignement des boîtes CSS](/fr/docs/Web/CSS/Guides/Box_alignment)

- {{CSSxRef("align-content")}}
- {{CSSxRef("justify-content")}}

Le module [de dimensionnement des boîtes CSS](/fr/docs/Web/CSS/Guides/Box_sizing)

- {{CSSxRef("height")}}
- {{CSSxRef("max-height")}}
- {{CSSxRef("block-size")}}
- {{CSSxRef("width")}}
- {{CSSxRef("max-width")}}

Le module [d'affichage CSS](/fr/docs/Web/CSS/Guides/Display)

- {{CSSxRef("display")}}
- Le guide [du contexte de formatage en bloc](/fr/docs/Web/CSS/Guides/Display/Block_formatting_context)

## Spécifications

{{Specifications}}

## Voir aussi

- [Concepts de base des boîtes flexibles](/fr/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts)
- [Aligner les éléments dans un conteneur flexible](/fr/docs/Web/CSS/Guides/Flexible_box_layout/Aligning_items)
- [Alignement des boîtes dans la disposition en grille](/fr/docs/Web/CSS/Guides/Box_alignment/In_grid_layout)
