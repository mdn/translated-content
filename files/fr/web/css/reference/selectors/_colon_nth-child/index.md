---
title: :nth-child
slug: Web/CSS/Reference/Selectors/:nth-child
original_slug: Web/CSS/:nth-child
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

La fonction de [pseudo-classe](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-classes) [CSS](/fr/docs/Web/CSS) **`:nth-child()`** permet de cibler les éléments en se basant sur l'indice des éléments dans la liste des enfants de leur parent. Autrement dit, un sélecteur utilisant cette pseudo-classe ciblera les éléments selon leur position parmi leurs voisins appartenant à un même parent.

{{InteractiveExample("Démonstration CSS&nbsp;: :nth-child", "tabbed-shorter")}}

```css interactive-example
p {
  font-weight: bold;
}

li:nth-child(-n + 3) {
  border: 2px solid orange;
  margin-bottom: 1px;
}

li:nth-child(even) {
  background-color: lightyellow;
}
```

```html interactive-example
<p>Champions d'athlétisme&nbsp;:</p>
<ul>
  <li>Adhemar da Silva</li>
  <li>Wang Junxia</li>
  <li>Wilma Rudolph</li>
  <li>Babe Didrikson-Zaharias</li>
  <li>Betty Cuthbert</li>
  <li>Fanny Blankers-Koen</li>
  <li>Florence Griffith-Joyner</li>
  <li>Irena Szewinska</li>
  <li>Jackie Joyner-Kersee</li>
  <li>Shirley Strickland</li>
  <li>Carl Lewis</li>
  <li>Emil Zatopek</li>
  <li>Haile Gebrselassie</li>
  <li>Jesse Owens</li>
  <li>Jim Thorpe</li>
  <li>Paavo Nurmi</li>
  <li>Sergei Bubka</li>
  <li>Usain Bolt</li>
</ul>
```

> [!NOTE]
> Avec la syntaxe `element:nth-child()`, le nombre d'enfants compte les enfants voisins de n'importe quel type&nbsp;; toutefois, il y a uniquement correspondance lorsque l'élément _à cette position parmi les enfants_ correspond aux autres composantes du sélecteur.

## Syntaxe

```css-nolint
:nth-child([ <An+B> | even | odd ] [of <complex-selector-list>]?) {
  /* ... */
}
```

### Paramètres

`:nth-child()` prend un seul argument, qui décrit un motif de correspondance basé sur les indices des éléments d'une liste de voisin. Les indices des éléments démarrent à 1.

### Valeurs avec un mot-clé

- `odd`
  - : Représente les éléments dont la position numérique est impaire parmi la liste des voisins (1, 3, 5, etc.).
- `even`
  - : Représente les éléments dont la position numérique est paire parmi la liste des voisins (2, 4, 6, etc.).

### Notation fonctionnelle

- `<An+B>`
  - : Représente les éléments dont la position numérique au sein de la liste des voisins correspond au motif `An+B`, pour chaque entier positif `n`, où&nbsp;:
    - `A` est un incrément entier,
    - `B` est un décalage entier,
    - `n` représente les entiers positifs à partir de 0.

    Autrement dit, on cible les `An+B`-ième éléments de la liste. `A` et `B` doivent tout deux être des [valeurs entières (type CSS `<integer>`)](/fr/docs/Web/CSS/Reference/Values/integer).

### La syntaxe `of <selector>`

En passant un sélecteur en argument, on peut cibler le **n-ième** élément qui correspond à ce sélecteur. Ainsi, le sélecteur suivant cible les trois premiers éléments d'une liste qui ont `class="important"`.

```css
:nth-child(-n + 3 of li.important) {
}
```

Le résultat obtenu est différent si on sort le sélecteur de la fonction&nbsp;:

```css
li.important:nth-child(-n + 3) {
}
```

Dans ce deuxième cas, le sélecteur cible les éléments d'une liste s'ils font partie des trois premiers enfants et qu'ils correspondent au sélecteur `li.important`.

## Exemples

### Exemples de sélecteurs

- `tr:nth-child(odd)` ou `tr:nth-child(2n+1)`
  - : Cible les lignes impaires d'un tableau HTML&nbsp;: 1, 3, 5, etc.
- `tr:nth-child(even)` ou `tr:nth-child(2n)`
  - : Cible les lignes paires d'un tableau HTML &nbsp;: 2, 4, 6, etc.
- `:nth-child(7)`
  - : Cible le septième élément.
- `:nth-child(5n)`
  - : Cible les éléments **5** \[=5×1], **10** \[=5×2], **15** \[=5×3], **etc.** La première valeur correspondant à cette formule est **0** \[=5x0], mais ne correspond à aucun élément, car ils sont indexés à partir de 1, même si `n` commence à 0. Cela peut sembler étrange, mais prend du sens quand on note que le coefficient `B` de la formule est strictement positif (`>0`), comme dans les exemples suivants.
- `:nth-child(n+7)`
  - : Cible le septième élément et ceux qui suivent&nbsp;: **7** \[=0+7], **8** \[=1+7], **9** \[=2+7], **etc.**
- `:nth-child(3n+4)`
  - : Cible les éléments **4** \[=(3×0)+4], **7** \[=(3×1)+4], **10** \[=(3×2)+4], **13** \[=(3×3)+4], **etc.**
- `:nth-child(-n+3)`
  - : Cible les trois premiers éléments. \[=-0+3, -1+3, -2+3]
- `p:nth-child(n)`
  - : Cible tous les éléments `<p>` d'un groupe de voisins. Cela sélectionne les mêmes éléments que le sélecteur simple `p` (mais avec une spécificité supérieure).
- `p:nth-child(1)` ou `p:nth-child(0n+1)`
  - : Cible tout élément `<p>` qui est le premier élément d'un group de voisin. Cette forme est équivalente au sélecteur [`:first-child`](/fr/docs/Web/CSS/Reference/Selectors/:first-child) (et possède la même spécificité).
- `p:nth-child(n+8):nth-child(-n+15)`
  - : Cible du huitième jusqu'au quinzième élément `<p>` d'un groupe de voisins.

### Exemple détaillé

#### HTML

```html
<h3>
  <code>span:nth-child(2n+1)</code>, sans <code>&lt;em&gt;</code> parmi les
  éléments enfants.
</h3>
<p>Les enfants 1, 3, 5, et 7 sont sélectionnés.</p>
<div class="premier">
  <span>Span 1 !</span>
  <span>Span 2</span>
  <span>Span 3 !</span>
  <span>Span 4</span>
  <span>Span 5 !</span>
  <span>Span 6</span>
  <span>Span 7 !</span>
</div>

<br />

<h3>
  <code>span:nth-child(2n+1)</code>, avec un <code>&lt;em&gt;</code> parmi les
  éléments enfants.
</h3>
<p>
  Les enfants 1, 5, et 7 sont ciblés.<br />
  3 est utilisé dans le compteur et est un enfant, mais il n'est pas ciblé, car
  ce n'est pas un <code>&lt;span&gt;</code>.
</p>
<div class="deuxieme">
  <span>Span !</span>
  <span>Span</span>
  <em>Voici un `em`.</em>
  <span>Span</span>
  <span>Span !</span>
  <span>Span</span>
  <span>Span !</span>
  <span>Span</span>
</div>

<br />

<h3>
  <code>span:nth-of-type(2n+1)</code>, avec un <code>&lt;em&gt;</code> parmi les
  éléments enfants.
</h3>
<p>
  Les enfants 1, 4, 6, et 8 sont ciblés.<br />
  3 n'est pas utilisé pour le compteur ou ciblé, car c'est un élément
  <code>&lt;em&gt;</code>, pas un <code>&lt;span&gt;</code>, et
  <code>nth-of-type</code> cible uniquement les enfants de ce type. L'élément
  <code>&lt;em&gt;</code> est complètement ignoré.
</p>
<div class="troisieme">
  <span>Span !</span>
  <span>Span</span>
  <em>Voici un `em`.</em>
  <span>Span !</span>
  <span>Span</span>
  <span>Span !</span>
  <span>Span</span>
  <span>Span !</span>
</div>
```

#### CSS

```css hidden
* {
  font-family: sans-serif;
}

span,
div em {
  padding: 5px;
  border: 1px solid tomato;
  display: inline-block;
  margin-bottom: 3px;
}
```

```css
.premier span:nth-child(2n + 1),
.deuxieme span:nth-child(2n + 1),
.troisieme span:nth-of-type(2n + 1) {
  background-color: tomato;
}
```

#### Résultat

{{EmbedLiveSample('exemple_détaillé', 550, 550)}}

### Utiliser `of`

Dans cet exemple, nous avons une liste de noms non-ordonnée, certains sont marqués comme **notés** à l'aide de `class="noted"`. Ceux-là ont été mis en avant avec une bordure inférieure épaisse.

#### HTML

```html
<ul>
  <li class="noted">Diego</li>
  <li>Shilpa</li>
  <li class="noted">Caterina</li>
  <li>Jayla</li>
  <li>Tyrone</li>
  <li>Ricardo</li>
  <li class="noted">Gila</li>
  <li>Sienna</li>
  <li>Titilayo</li>
  <li class="noted">Lexi</li>
  <li>Aylin</li>
  <li>Leo</li>
  <li>Leyla</li>
  <li class="noted">Bruce</li>
  <li>Aisha</li>
  <li>Veronica</li>
  <li class="noted">Kyouko</li>
  <li>Shireen</li>
  <li>Tanya</li>
  <li class="noted">Marlene</li>
</ul>
```

#### CSS

```css hidden
* {
  font-family: sans-serif;
}

ul {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  font-size: 1.2rem;
  padding-left: 0;
}

li {
  margin: 0.125rem;
  padding: 0.25rem;
}

li {
  border: 1px solid tomato;
}

.noted {
  border-bottom: 5px solid tomato;
}
```

Avec le CSS qui suit, nous ciblons les éléments de la liste **pairs** parmi ceux qui ont `class="noted"`.

```css
li:nth-child(even of .noted) {
  background-color: tomato;
  border-bottom-color: seagreen;
}
```

#### Résultat

Les éléments avec `class="noted"` ont une bordure inférieure plus épaisse et les éléments 3, 10 et 17 ont un arrière-plan coloré, car ils sont les éléments _pairs_ de la liste des éléments ayant `class="noted"`.

{{EmbedLiveSample('utiliser_of', 550, 120)}}

### Syntaxe `of` et sélecteur du n-ième enfant

Dans cet exemple, nous avons deux listes de noms non-ordonnées. La première liste illustre l'effet de `li:nth-child(-n + 3 of .noted)` et la seconde celui de `li.noted:nth-child(-n + 3)`.

#### HTML

```html
<ul class="one">
  <li class="noted">Diego</li>
  <li>Shilpa</li>
  <li class="noted">Caterina</li>
  <li>Jayla</li>
  <li>Tyrone</li>
  <li>Ricardo</li>
  <li class="noted">Gila</li>
  <li>Sienna</li>
  <li>Titilayo</li>
  <li class="noted">Lexi</li>
</ul>
<ul class="two">
  <li class="noted">Diego</li>
  <li>Shilpa</li>
  <li class="noted">Caterina</li>
  <li>Jayla</li>
  <li>Tyrone</li>
  <li>Ricardo</li>
  <li class="noted">Gila</li>
  <li>Sienna</li>
  <li>Titilayo</li>
  <li class="noted">Lexi</li>
</ul>
```

#### CSS

```css hidden
* {
  font-family: sans-serif;
}

ul {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  font-size: 1.2rem;
  padding-left: 0;
}

li {
  margin: 0.125rem;
  padding: 0.25rem;
}

li {
  border: 1px solid tomato;
}

.noted {
  border-bottom: 5px solid tomato;
}
```

```css
ul.one > li:nth-child(-n + 3 of .noted) {
  background-color: tomato;
  border-bottom-color: seagreen;
}

ul.two > li.noted:nth-child(-n + 3) {
  background-color: tomato;
  border-bottom-color: seagreen;
}
```

#### Résultat

Dans le premier cas, on applique le style aux trois premiers éléments de la liste ayant `class="noted"`, qu'ils soient ou non parmi les trois premiers éléments de la liste.

Dans le second cas, on applique le style aux éléments ayant `class="noted"` s'ils font partie des trois premiers éléments de la liste.

{{EmbedLiveSample('syntaxe_of_et_sélecteur_du_n-ième_enfant', 550, 150)}}

### Utiliser `of` pour corriger les tableaux à bandes alternées

Il est fréquent d'utiliser des lignes alternant entre clair et sombre afin de faciliter la lecture d'un tableau et le rendre plus accessible. Toutefois, si on masque une ligne, les bandes apparaîtront comme fusionnées et empêcheront l'effet escompté. Dans cet exemple, vous pouvez voir deux tableaux qui possèdent une ligne masquée (avec `hidden`). Dans le second tableau, on gère les lignes masquées à l'aide de `of :not([hidden])`.

#### HTML

```html-nolint hidden
<div class="wrapper">
```

```html-nolint
<table class="broken">
  <thead>
    <tr><th>Nom</th><th>Âge</th><th>Pays</th></tr>
  </thead>
  <tbody>
    <tr><td>Mamitiana</td><td>23</td><td>Madagascar</td></tr>
    <tr><td>Yuki</td><td>48</td><td>Japon</td></tr>
    <tr hidden><td>Tlayolotl</td><td>36</td><td>Mexique</td></tr>
    <tr><td>Adilah</td><td>27</td><td>Maroc</td></tr>
    <tr><td>Vieno</td><td>55</td><td>Finlande</td></tr>
    <tr><td>Ricardo</td><td>66</td><td>Brésil</td></tr>
  </tbody>
</table>
<table class="fixed">
  <thead>
    <tr><th>Nom</th><th>Âge</th><th>Pays</th></tr>
  </thead>
  <tbody>
    <tr><td>Mamitiana</td><td>23</td><td>Madagascar</td></tr>
    <tr><td>Yuki</td><td>48</td><td>Japon</td></tr>
    <tr hidden><td>Tlayolotl</td><td>36</td><td>Mexique</td></tr>
    <tr><td>Adilah</td><td>27</td><td>Maroc</td></tr>
    <tr><td>Vieno</td><td>55</td><td>Finlande</td></tr>
    <tr><td>Ricardo</td><td>66</td><td>Brésil</td></tr>
  </tbody>
</table>
```

```html hidden
</div>
```

#### CSS

```css hidden
.wrapper {
  display: flex;
  justify-content: space-around;
}
td {
  padding: 0.125rem 0.5rem;
}
```

```css
.broken > tbody > tr:nth-child(even) {
  background-color: silver;
}
```

```css
.fixed > tbody > tr:nth-child(even of :not([hidden])) {
  background-color: silver;
}
```

#### Résultat

Dans le premier tableau, on utilise simplement `:nth-child(even)`, qui cible la troisième ligne, également dotée de l'attribut `hidden`. On a donc la troisième ligne qui n'est pas visible et la deuxième et la quatrième qui sont comptées comme paires. Si c'est vrai sur le plan technique (l'arborescence du document), ce n'est pas le cas visuellement.

Dans le second tableau, on utilise la syntaxe `of` afin de cibler uniquement les lignes (`tr`) qui **ne sont pas** masquées, à l'aide de `:nth-child(even of :not([hidden]))`.

{{EmbedLiveSample('utiliser_of_pour_corriger_les_tableaux_à_bandes_alternées', 550, 180)}}

### Mettre en forme une colonne de tableau

Pour mettre en forme une colonne de tableau, on ne peut pas cibler l'élément [`<col>`](/fr/docs/Web/HTML/Reference/Elements/col), car les cellules du tableau n'en sont pas des enfants (alors que les cellules sont bien des enfants des lignes [`<tr>`](/fr/docs/Web/HTML/Reference/Elements/tr)). Les pseudo-classes comme `:nth-child()` s'avèrent alors particulièrement utiles pour sélectionner les cellules d'une colonne.

Dans cet exemple, on applique différents styles pour chaque colonne.

#### HTML

```html-nolint
<table>
<caption>Liste des élèves</caption>
<colgroup>
  <col/>
  <col/>
  <col/>
</colgroup>
  <thead>
    <tr><th>Nom</th><th>Âge</th><th>Pays</th></tr>
  </thead>
  <tbody>
    <tr><td>Mamitiana</td><td>23</td><td>Madagascar</td></tr>
    <tr><td>Yuki</td><td>48</td><td>Japon</td></tr>
  </tbody>
</table>

```

#### CSS

```css
td {
  padding: 0.125rem 0.5rem;
  height: 3rem;
  border: 1px solid black;
}

tr :nth-child(1) {
  text-align: left;
  vertical-align: bottom;
  background-color: silver;
}

tbody tr :nth-child(2) {
  text-align: center;
  vertical-align: middle;
}

tbody tr :nth-child(3) {
  text-align: right;
  vertical-align: top;
  background-color: tomato;
}
```

#### Résultat

{{EmbedLiveSample('mettre_en_forme_une_colonne_de_tableau', 100, 200)}}

## Specifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`:nth-of-type()`](/fr/docs/Web/CSS/Reference/Selectors/:nth-of-type)
- [`:nth-last-child()`](/fr/docs/Web/CSS/Reference/Selectors/:nth-last-child)
- La pseudo-classe [`:has()`](/fr/docs/Web/CSS/Reference/Selectors/:has) qui cible l'élément parent
- [Les pseudo-classes relatives à l'arborescence](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-classes#pseudo-classes_relatives_à_larborescence)
- Le module relatif [aux sélecteurs CSS](/fr/docs/Web/CSS/Guides/Selectors)
