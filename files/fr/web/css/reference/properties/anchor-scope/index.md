---
title: Propriété CSS `anchor-scope`
short-title: anchor-scope
slug: Web/CSS/Reference/Properties/anchor-scope
l10n:
  sourceCommit: 071fd0613b1b5728d2d83845ea11512cb615067a
---

La propriété [CSS](/fr/docs/Web/CSS) **`anchor-scope`** permet de limiter la portée dans laquelle un élément positionné peut être associé à des éléments d'ancre à un sous-arbre particulier.

## Syntaxe

```css
/* Valeurs uniques */
anchor-scope: none;
anchor-scope: all;
anchor-scope: --anchor-name;

/* Valeurs multiples de <dashed-ident> */
anchor-scope: --anchor-name, --another-name;

/* Valeurs globales */
anchor-scope: inherit;
anchor-scope: initial;
anchor-scope: revert;
anchor-scope: revert-layer;
anchor-scope: unset;
```

### Valeurs

Cette propriété est définie comme le mot-clé `none` ou `all` ou une liste séparée par des virgules de valeurs `<dashed-ident>`&nbsp;:

- `none`
  - : Aucun filtrage de portée d'ancre n'est appliqué à l'élément. Il s'agit de la valeur par défaut.
- `all`
  - : Définit la portée de sorte que _toutes_ les valeurs de `anchor-name` définies dans le sous-arbre ne puissent être associées qu'à des éléments positionnés dans ce même sous-arbre.
- {{CSSxRef("dashed-ident", "&lt;dashed-ident&gt;#")}}
  - : Un ou plusieurs {{CSSxRef("dashed-ident")}} séparés par des virgules représentant des noms d'ancre. Définit la portée de sorte que les valeurs de `anchor-name` définies, lorsqu'elles sont définies dans le sous-arbre, ne puissent être associées qu'à des éléments positionnés dans ce même sous-arbre.

## Description

Lorsque plusieurs [éléments d'ancre](/fr/docs/Web/CSS/Guides/Anchor_positioning/Using#associer_des_éléments_dancre_et_positionnés) sur une page reçoivent la même valeur {{CSSxRef("anchor-name")}} et qu'un élément positionné est associé à ce nom d'ancre (en le définissant comme valeur de sa propriété {{CSSxRef("position-anchor")}}), l'élément positionné est associé au _dernier_ élément d'ancre dans l'ordre du code source portant ce nom d'ancre.

Cela peut poser problème dans certaines situations. Par exemple, si un document contient plusieurs composants répétés, chacun avec un élément positionné rattaché à une ancre, tous les éléments positionnés sont rattachés à la dernière ancre de la page, sauf si chaque composant utilise un nom d'ancre différent. Ce n'est probablement pas le comportement souhaité.

La propriété `anchor-scope` permet de corriger ce problème en limitant la visibilité, ou «&nbsp;portée&nbsp;», d'une valeur `anchor-name` à un sous-arbre spécifique. Le résultat est que chaque élément positionné ne peut être ancré qu'à un élément situé dans le même sous-arbre que l'élément sur lequel la portée est définie.

- `anchor-scope: all` définit la portée de sorte que _toutes_ les valeurs de `anchor-name` définies dans le sous-arbre ne puissent être associées qu'à des éléments positionnés dans ce même sous-arbre. Par exemple, si l'on inclut plusieurs ancres dans un document, toutes avec `anchor-name: --mon-ancre`, et qu'on les place dans des conteneurs séparés, puis qu'on applique `anchor-scope: all` à chaque conteneur, alors un élément positionné à l'intérieur d'un de ces conteneurs et ayant `--mon-ancre` comme valeur de sa propriété `position-anchor` est positionné par rapport à l'ancre du même conteneur.

  De plus, si l'on crée un autre élément positionné en dehors des conteneurs et qu'on lui donne le même nom d'ancre ou un autre, il n'est pas positionné par ancre par rapport à aucune des ancres, peu importe si les ancres possèdent ces noms dans leur propriété `anchor-name`. `anchor-scope: all` limite la portée des ancres pour les conteneurs sur lesquels il est appliqué à _toutes_ les ancres, quel que soit le `anchor-name`, uniquement aux éléments positionnés à l'intérieur des mêmes conteneurs.

- `anchor-scope: <dashed-ident>#` définit la portée de sorte que les valeurs de `anchor-name` définies, lorsqu'elles sont définies dans le sous-arbre, ne puissent être associées qu'à des éléments positionnés dans ce même sous-arbre. Si l'on reprend l'exemple précédent mais qu'on change la valeur de `anchor-scope` sur les conteneurs pour `--mon-ancre`&nbsp;:
  - Les éléments positionnés avec `position-anchor: --mon-ancre` sont limités à la portée imposée par le paramètre `anchor-scope`. Ils ne sont positionnés par rapport aux ancres que s'ils sont placés à l'intérieur des conteneurs.
  - En revanche, les éléments positionnés avec d'autres valeurs de `position-anchor` — par exemple, `--autre-ancre` — _peuvent_ être positionnés par rapport à l'une des ancres, qu'ils soient placés à l'intérieur ou à l'extérieur des conteneurs, à condition d'ajouter le nom d'ancre `--autre-ancre` à la propriété `anchor-name` de l'ancre. La propriété `anchor-scope` ne limite la portée que pour le nom d'ancre `--mon-ancre`, elle n'a donc aucun effet sur les autres noms d'ancre.

    Si plusieurs ancres reçoivent le nom d'ancre `--autre-ancre`, les éléments positionnés avec cette valeur de `position-anchor` sont positionnés par rapport à la dernière ancre dans l'ordre du code source portant ce nom.

- `anchor-scope: none` est la valeur par défaut, ce qui signifie qu'aucune portée d'ancre n'est définie. Si plusieurs ancres existent dans un document avec le même `anchor-name` et qu'un élément positionné reçoit ce nom comme valeur de sa propriété `position-anchor`, il est positionné par rapport à la dernière ancre dans l'ordre du code source, quel que soit son emplacement dans la hiérarchie du DOM.

Si, par exemple, vous avez trois valeurs `anchor-name` définies dans un sous-arbre (par exemple, `--ancre1`, `--ancre2` et `--ancre3`), définir `anchor-scope: --ancre1, --ancre2, --ancre3` sur l'élément de plus haut niveau du sous-arbre est équivalent à définir `anchor-scope: all`.

Les portées d'ancre n'affectent que les [associations d'ancre explicites](/fr/docs/Web/CSS/Guides/Anchor_positioning/Using#associer_explicitement_une_ancre_en_css), c'est-à-dire celles établies entre un élément d'ancre avec un `anchor-name` défini et un élément positionné faisant référence au nom d'ancre de l'élément d'ancre dans sa valeur `position-anchor`. Les portées d'ancre n'affectent pas les [associations d'ancre implicites](/fr/docs/Web/CSS/Guides/Anchor_positioning/Using#associer_implicitement_une_ancre).

Pour plus d'informations sur les fonctionnalités et l'utilisation des ancres, consultez le module [Positionnement par ancre CSS](/fr/docs/Web/CSS/Guides/Anchor_positioning) et le guide [Utilisation du positionnement par ancre CSS](/fr/docs/Web/CSS/Guides/Anchor_positioning/Using).

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Utilisation simple

Cet exemple montre comment fonctionne la portée d'ancre à un niveau basique. Il montre comment un élément d'ancre à l'intérieur d'un conteneur avec une portée peut être limité à n'avoir que des éléments positionnés à l'intérieur du même conteneur associés à lui.

#### HTML

Nous définissons un élément HTML {{HTMLElement("section")}} sur lequel nous allons définir une portée d'ancre. Celui-ci contient deux éléments HTML {{HTMLElement("div")}}, un qui est transformé en ancre et un qui est un élément positionné par ancre.

Nous incluons également un troisième `<div>` en dehors du `<section>`, qui est aussi transformé en élément positionné par ancre.

```html live-sample___basic-usage
<section class="portee">
  <div class="ancre">⚓︎</div>
  <div class="positionne">Position 1</div>
</section>

<div class="positionne">Position 2</div>
```

#### CSS

Nous commençons par définir `anchor-scope: --mon-ancre` sur le `<section>`. Cela limite sa portée de sorte que les descendants du `<section>` ayant un nom d'ancre `--mon-ancre` ne puissent être associés qu'à des éléments positionnés qui sont aussi des descendants du `<section>`.

Pour tester cela, nous déclarons le `<div>` `ancre` comme élément d'ancre en lui attribuant un {{CSSxRef("anchor-name")}} de `--mon-ancre`. Nous positionnons ensuite absolument les éléments `.positionne`, les associons à l'ancre en définissant leur {{CSSxRef("position-anchor")}} à `--mon-ancre`, et les positionnons à droite de l'ancre en définissant leur {{CSSxRef("position-area")}} à `right`&nbsp;:

```css hidden live-sample___basic-usage
.portee {
  padding: 20px;
  background: #eeeeee;
}

.ancre {
  font-size: 1.8rem;
  color: white;
  text-shadow: 1px 1px 1px black;
  background-color: blue;
  width: fit-content;
  padding: 3px;
}

.positionne {
  background: orange;
  width: fit-content;
  padding: 3px;
}
```

```css live-sample___basic-usage
.portee {
  anchor-scope: --mon-ancre;
}

.ancre {
  anchor-name: --mon-ancre;
}

.positionne {
  position: absolute;
  position-anchor: --mon-ancre;
  position-area: right;
}
```

#### Résultat

L'exemple s'affiche ainsi&nbsp;:

{{EmbedLiveSample("basic_usage", "100%", 225)}}

Remarquez que le premier élément positionné est placé à droite de l'ancre. Il est dans la portée pour être positionné par rapport à l'ancre `--mon-ancre`, car il est à l'intérieur de l'élément `<section>` où `anchor-scope: --mon-ancre` est défini.

En revanche, le second élément positionné n'est pas positionné par rapport à l'ancre. Il n'est pas un descendant de l'élément `<section>`, il est donc hors de la portée d'ancre.

### Comparaison des différentes valeurs de `anchor-scope`

Cet exemple montre les effets des différentes valeurs de `anchor-scope` en vous permettant d'appliquer différentes valeurs à plusieurs conteneurs, tous contenant des ancres avec la même valeur de `anchor-name`.

#### HTML

Nous définissons trois éléments HTML {{HTMLElement("section")}} sur lesquels nous allons définir une portée d'ancre. Chaque `<section>` contient deux éléments HTML {{HTMLElement("div")}}, un qui est transformé en ancre et un qui est un élément positionné par ancre.

Nous incluons également un `<div>` supplémentaire en dehors des éléments `<section>`, qui est aussi transformé en élément positionné par ancre. Celui-ci a des paramètres de positionnement d'ancre différents des autres.

Enfin, nous incluons un {{HTMLElement("form")}} contenant trois différents [`<input type="radio">`](/fr/docs/Web/HTML/Reference/Elements/input/radio) pour permettre de définir différentes valeurs de `anchor-scope` sur les éléments `<section>`.

```html live-sample___comparing-values
<section class="portee">
  <div class="ancre">⚓︎</div>
  <div class="positionne">Position 1</div>
</section>

<section class="portee">
  <div class="ancre">⚓︎</div>
  <div class="positionne">Position 2</div>
</section>

<section class="portee">
  <div class="ancre">⚓︎</div>
  <div class="positionne">Position 3</div>
</section>

<div class="positionne2">Position 4</div>

<form>
  <fieldset>
    <legend>Sélectionnez une valeur pour <code>anchor-scope</code></legend>

    <input type="radio" id="all" name="scope" value="all" checked />
    <label for="all"><code>all</code></label>
    <input type="radio" id="mon-ancre" name="scope" value="--mon-ancre" />
    <label for="mon-ancre"><code>--mon-ancre</code></label>
    <input type="radio" id="none" name="scope" value="none" />
    <label for="none"><code>none</code></label>
  </fieldset>
</form>
```

#### CSS

Nous commençons par définir nos éléments d'ancre comme ancres en leur donnant deux valeurs {{CSSxRef("anchor-name")}}&nbsp;: `--mon-ancre` et `--autre-ancre`.

```css hidden live-sample___comparing-values
body {
  display: flex;
  justify-content: center;
  gap: 50px;
  margin-top: 5px;
}

.portee {
  padding: 20px;
  background: #eeeeee;
  border: 2px solid #dddddd;
  border-radius: 10px;
  width: 100px;
  height: 100px;
}

.ancre {
  font-size: 1.8rem;
  color: white;
  text-shadow: 1px 1px 1px black;
  background-color: blue;
  width: fit-content;
  padding: 3px;
}

.positionne,
.positionne2 {
  border: 1px solid black;
  border-radius: 3px;
  width: fit-content;
  padding: 3px 6px;
  box-shadow: 3px 3px 3px rgb(0 0 0 / 0.2);
}

form {
  position: absolute;
  bottom: 5px;
  right: 5px;
}
```

```css live-sample___comparing-values
.ancre {
  anchor-name: --mon-ancre, --autre-ancre;
}
```

Ensuite, nous positionnons nos éléments `.positionne` par rapport à un élément d'ancre. Nous les positionnons absolument, leur donnons une valeur {{CSSxRef("position-anchor")}} de `--mon-ancre` pour les associer à une ancre, et les positionnons par rapport à l'ancre avec une valeur {{CSSxRef("position-area")}} de `right`.

L'élément `.positionne2` est positionné de façon similaire, sauf qu'il reçoit l'autre nom d'ancre disponible comme valeur de `position-anchor` — `--autre-ancre` — et il est positionné en bas de l'ancre. Nous lui donnons aussi une valeur {{CSSxRef("bottom")}} de `5px`, de sorte que si le positionnement par ancre ne fonctionne pas, il est positionné en bas du `<body>`. Cet élément n'est contenu dans aucun élément avec une portée, il n'est donc positionné par ancre que lorsque certaines valeurs de `anchor-scope` sont définies sur les éléments avec portée, comme expliqué plus loin.

```css live-sample___comparing-values
.positionne {
  position: absolute;
  position-anchor: --mon-ancre;
  position-area: right;
}

.positionne2 {
  position: absolute;
  bottom: 5px;
  position-anchor: --autre-ancre;
  position-area: bottom;
}
```

La gestion de la définition de `anchor-scope` sur les éléments HTML `<section>` lors de la sélection des boutons radio est assurée par du JavaScript, qui a été masqué pour plus de clarté.

```js hidden live-sample___comparing-values
const sections = document.querySelectorAll("section");
const form = document.querySelector("form");

function actualiserPortee(val) {
  sections.forEach((section) => (section.style.anchorScope = val));
}

form.addEventListener("input", (e) => {
  actualiserPortee(e.target.value);
});

actualiserPortee("all");
```

#### Résultat

L'exemple s'affiche comme suit&nbsp;:

{{EmbedLiveSample("comparing-values", "100%", 225)}}

Observez l'effet initial de positionnement appliqué aux éléments positionnés avec `anchor-scope: all` défini sur les éléments `<section>`, puis essayez de sélectionner les autres valeurs disponibles pour voir leur effet. Vous devez observer les comportements suivants&nbsp;:

- `all`&nbsp;: La portée pour le positionnement des éléments par rapport aux éléments d'ancre descendants des éléments `<section>` est limitée aux éléments positionnés qui sont eux-mêmes descendants des éléments `<section>`, quel que soit la valeur de `anchor-name` utilisée pour les associer. Ainsi, les éléments positionnés à l'intérieur des éléments `<section>` («&nbsp;Position 1 à 3&nbsp;») sont positionnés par ancre comme prévu, mais l'élément positionné en dehors des éléments `<section>` («&nbsp;Position 4&nbsp;») ne l'est pas. Il est hors de la portée.
- `--mon-ancre`&nbsp;: La portée pour le positionnement des éléments par rapport aux éléments d'ancre descendants des éléments `<section>` est limitée aux éléments positionnés qui sont eux-mêmes descendants des éléments `<section>`, uniquement si la valeur d'ancre `--mon-ancre` est utilisée pour les associer. Ainsi, les éléments positionnés à l'intérieur des éléments `<section>` («&nbsp;Position 1 à 3&nbsp;») sont positionnés par ancre comme prévu, et l'élément positionné en dehors des éléments `<section>` («&nbsp;Position 4&nbsp;») est aussi positionné par ancre comme prévu. Dans le premier cas, les éléments positionnés sont à l'intérieur de la portée définie, et dans le second cas, l'élément positionné n'est pas affecté par la portée définie, car il utilise un nom d'ancre hors de la portée (`--autre-ancre`). L'élément «&nbsp;Position 4&nbsp;» est positionné par rapport au dernier élément d'ancre dans le code source qui possède le nom d'ancre correspondant.
- `none`&nbsp;: Aucune portée d'ancre n'est définie sur les éléments `<section>`, tous les éléments positionnés sont donc positionnés par rapport au dernier élément d'ancre dans l'ordre du code source.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{CSSxRef("anchor-name")}}
- La propriété {{CSSxRef("position-anchor")}}
- Le module [Positionnement par ancre CSS](/fr/docs/Web/CSS/Guides/Anchor_positioning)
- Le guide [Utilisation du positionnement par ancre CSS](/fr/docs/Web/CSS/Guides/Anchor_positioning/Using)
