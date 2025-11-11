---
title: system
slug: Web/CSS/Reference/At-rules/@counter-style/system
original_slug: Web/CSS/@counter-style/system
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Le {{Glossary("CSS_Descriptor", "descripteur")}} [CSS](/fr/docs/Web/CSS) **`system`** permet de spécifier l'algorithme à utiliser pour convertir la valeur entière d'un compteur en une représentation sous forme de chaîne de caractères. Il est utilisé dans une règle {{cssxref("@counter-style")}} pour définir le comportement du style défini.

Si l'algorithme spécifié dans le descripteur `system` ne peut pas construire la représentation pour une certaine valeur du compteur, alors la représentation de cette valeur sera construite en utilisant le système de repli fourni.

## Syntaxe

```css
/* Valeurs avec un mot-clé */
system: cyclic;
system: numeric;
system: alphabetic;
system: symbolic;
system: additive;
system: fixed;

/* Autres valeurs */
system: fixed 3;
system: extends decimal;
system: extends circled-letters;
```

## Valeurs

Ce descripteur peut prendre l'une des trois formes suivantes&nbsp;:

- L'une des valeurs clés&nbsp;: `cyclic`, `numeric`, `alphabetic`, `symbolic`, `additive` ou `fixed`.
- La valeur clé `fixed` suivie d'un entier.
- La valeur clé `extends` suivie d'une valeur [`<counter-style-name>`](/fr/docs/Web/CSS/Reference/At-rules/@counter-style#counter-style-name).

Les valeurs incluent&nbsp;:

- `cyclic`
  - : Parcourt la liste des symboles fournie dans le descripteur [`symbols`](/fr/docs/Web/CSS/Reference/At-rules/@counter-style/symbols). Une fois la fin de la liste atteinte, le cycle recommence au début. Cette valeur est utile aussi bien pour les styles de puces simples avec un seul symbole que pour les styles avec plusieurs symboles. Au moins un symbole doit être spécifié dans le descripteur `symbols`, sinon le style de compteur n'est pas valide.

- `numeric`
  - : Interprète les symboles du compteur comme des chiffres dans un système de numérotation à valeur de position (<i lang="en">place-value numbering system</i>). Le système numérique est similaire au système `alphabetic` décrit ci-dessus. La principale différence est que dans le système `alphabetic`, le premier symbole du compteur donné dans le descripteur `symbols` est interprété comme `1`, le suivant comme `2`, etc. Cependant, dans le système numérique, le premier symbole du compteur est interprété comme 0, le suivant comme `1`, puis `2`, etc.

    Au moins deux symboles de compteur doivent être spécifiés dans le descripteur `symbols`, sinon le style de compteur n'est pas valide.

- `alphabetic`
  - : Interprète les symboles spécifiés comme des chiffres, dans un système de numérotation alphabétique. Si les caractères de `"a"` à `"z"` sont spécifiés comme symboles dans un style de compteur avec le système `alphabetic`, alors les 26 premières représentations du compteur seront `"a"`, `"b"` jusqu'à `"z"`. Jusqu'à ce point, le comportement est le même que celui du système `symbolic` décrit ci-dessus. Cependant, après `"z"`, cela continue avec `"aa"`, `"ab"`, `"ac"`, etc.

    Le descripteur `symbols` doit contenir au moins deux symboles, sinon le style de compteur n'est pas valide. Le premier symbole du compteur fourni dans le descripteur `symbols` est interprété comme `1`, le suivant comme `2`, etc. Ce système ne fonctionne que pour les valeurs positives du compteur.

- `symbolic`
  - : Parcourt la liste des symboles fournie dans le descripteur `symbols` de façon répétée, doublant, triplant, etc., les symboles à chaque passage dans la liste. Par exemple, si deux symboles «&nbsp;◽&nbsp;» et «&nbsp;◾&nbsp;» sont spécifiés dans le descripteur `symbols`, à chaque passage, ils deviendront «&nbsp;◽◽&nbsp;» et «&nbsp;◾◾&nbsp;», puis «&nbsp;◽◽◽&nbsp;» et «&nbsp;◾◾◾&nbsp;», et ainsi de suite. Au moins un symbole doit être spécifié dans le descripteur `symbols`, sinon le style de compteur n'est pas valide. Ce système de compteur fonctionne uniquement pour les valeurs positives du compteur.

- `additive`
  - : Utilisé pour représenter les systèmes de numérotation à valeur de signe (<i lang="en">sign-value numbering systems</i>), comme les chiffres romains, qui, au lieu de réutiliser des chiffres à différentes positions pour obtenir différentes valeurs, définissent des chiffres supplémentaires pour les valeurs plus grandes. La valeur d'un nombre dans un tel système s'obtient en additionnant les chiffres du nombre.

    Un descripteur supplémentaire appelé `additive-symbols` doit être spécifié avec au moins un _tuple additif_, sinon la règle de style de compteur n'est pas valide. Un tuple additif est similaire à un symbole de compteur composite, composé de deux parties&nbsp;: un symbole de compteur normal et un poids entier positif ou nul. Les tuples additifs doivent être spécifiés dans l'ordre décroissant de leurs poids, sinon le système est invalide.

- `fixed` ou `fixed <integer>`
  - : Définit un ensemble fini de symboles, en parcourant une seule fois la liste des symboles fournie dans le descripteur `symbols`. Une fois les symboles spécifiés parcourus, le style de compteur de repli est utilisé. Cette valeur clé est utile dans les cas où les valeurs du style de compteur sont finies. Au moins un symbole doit être spécifié dans le descripteur `symbols`, sinon le style de compteur n'est pas valide. Le mot-clé `fixed` peut être suivi d'une valeur {{cssxref("&lt;integer&gt;")}} optionnelle. Si elle est spécifiée, la valeur `<integer>` indique l'élément de la liste qui recevra le premier symbole de la liste des symboles. Si elle est omise, la valeur par défaut de `integer` est `1`, ce qui donne le premier symbole au premier élément de la liste.

- `extends`
  - : Étend l'algorithme d'un autre style de compteur défini par le navigateur ou l'auteur·ice, en permettant de modifier certains aspects du style de compteur étendu. Tout descripteur ou valeur non spécifié sera hérité du style de compteur étendu indiqué. Si le nom du style de compteur spécifié avec `extends` n'est pas encore défini, le style de compteur `decimal` sera étendu par défaut.

    Il ne doit pas contenir de descripteur `symbols` ou `additive-symbols`, sinon la règle de style de compteur sera invalide. Si une ou plusieurs définitions de styles de compteur forment un cycle avec leurs valeurs `extends`, le navigateur considérera que tous les styles de compteur concernés étendent le style `decimal`.

> [!NOTE]
> Le descripteur [`symbols`](/fr/docs/Web/CSS/Reference/At-rules/@counter-style/symbols) est requis lorsque la valeur est `cyclic`, `numeric`, `alphabetic`, `symbolic` ou `fixed`. Le descripteur [`additive-symbols`](/fr/docs/Web/CSS/Reference/At-rules/@counter-style/additive-symbols) est requis si la valeur `additive` est définie.

## Définition formelle

{{cssinfo}}

## Syntaxe formelle

{{csssyntax}}

## Exemples

### Compteur cyclique

La valeur `cyclic` parcourt la liste des symboles, en répétant la liste si nécessaire&nbsp;:

#### CSS

```html hidden
<ul>
  <li>Un</li>
  <li>Deux</li>
  <li>Trois</li>
  <li>Quatre</li>
  <li>Cinq</li>
  <li>Six</li>
</ul>
```

```css
@counter-style fisheye {
  system: cyclic;
  symbols: ◉ ➀;
  suffix: ": ";
}

ul {
  list-style: fisheye;
}
```

#### Résultat

{{ EmbedLiveSample('compteur_cyclique') }}

### Compteur fixe

La valeur `fixed` parcourt la liste des symboles une seule fois, en commençant le cycle unique à l'élément de liste indiqué par la valeur `integer`&nbsp;:

#### CSS

```html hidden
<ul>
  <li>Un</li>
  <li>Deux</li>
  <li>Trois</li>
  <li>Quatre</li>
  <li>Cinq</li>
  <li>Six</li>
</ul>
```

```css
@counter-style circled-digits {
  system: fixed 3;
  symbols: ➀ ➁ ➂;
  suffix: ": ";
}

ul {
  list-style: circled-digits;
}
```

#### Résultat

{{ EmbedLiveSample('compteur_fixe') }}

### Compteur symbolique

La valeur `symbolic` parcourt la liste définie dans le descripteur `symbols`, doublant et triplant le nombre de symboles pour le deuxième et le troisième passage dans la liste, respectivement&nbsp;:

#### CSS

```html hidden
<ul>
  <li>Un</li>
  <li>Deux</li>
  <li>Trois</li>
  <li>Quatre</li>
  <li>Cinq</li>
  <li>Six</li>
  <li>Sept</li>
  <li>Huit</li>
</ul>
```

```css
@counter-style abc {
  system: symbolic;
  symbols: a b c;
  suffix: ". ";
}

ul {
  list-style: abc;
}
```

#### Résultat

{{ EmbedLiveSample('compteur_symbolique') }}

### Compteur alphabétique

#### CSS

```html hidden
<ul>
  <li>Un</li>
  <li>Deux</li>
  <li>Trois</li>
  <li>Quatre</li>
  <li>Cinq</li>
  <li>Six</li>
  <li>Sept</li>
  <li>Huit</li>
</ul>
```

```css
@counter-style abc {
  system: alphabetic;
  symbols: a b c;
  suffix: ". ";
}

ul {
  list-style: abc;
}
```

#### Résultat

{{ EmbedLiveSample('compteur_alphabétique') }}

### Compteur numérique

Le premier symbole fourni dans le descripteur `symbols` est interprété ici comme `0`.

#### CSS

```html hidden
<ul>
  <li>Un</li>
  <li>Deux</li>
  <li>Trois</li>
  <li>Quatre</li>
  <li>Cinq</li>
  <li>Six</li>
  <li>Sept</li>
  <li>Huit</li>
</ul>
```

```css
@counter-style abc {
  system: numeric;
  symbols: a b c;
  suffix: ". ";
}

ul {
  list-style: abc;
}
```

#### Résultat

{{ EmbedLiveSample('compteur_numérique') }}

### Compteur numérique avec symboles numériques

Comme le montre l'exemple suivant, si les chiffres de `0` à `9` sont spécifiés comme symboles, ce style de compteur affichera les symboles comme le style de compteur décimal.

#### CSS

```html hidden
<ul class="list">
  <li>Un</li>
  <li>Deux</li>
  <li>Trois</li>
  <li>Quatre</li>
  <li>Cinq</li>
  <li>Six</li>
  <li>Sept</li>
  <li>Huit</li>
  <li>Neuf</li>
  <li>Dix</li>
</ul>
```

```css
@counter-style numbers {
  system: numeric;
  symbols: "0" "1" "2" "3" "4" "5" "6" "7" "8" "9";
  suffix: ".";
}

ul {
  list-style: numbers;
}
```

#### Résultat

{{ EmbedLiveSample('compteur_numérique_avec_symboles_numériques') }}

### Compteur additif

Cet exemple affiche une liste en chiffres romains. Notez qu'une plage `range` est spécifiée. Cela s'explique par le fait que la représentation produira des chiffres romains corrects uniquement jusqu'à la valeur de compteur `3999`. Au-delà de cette plage, les autres représentations du compteur seront basées sur le style `decimal`, qui sert de repli. Si vous souhaitez représenter des valeurs de compteur en chiffres romains, vous pouvez utiliser l'un des styles de compteur prédéfinis, `upper-roman` ou `lower-roman`, plutôt que de recréer la règle vous-même.

#### HTML

Nous utilisons l'attribut [`start`](/fr/docs/Web/HTML/Reference/Elements/ol#start) sur l'élément {{HTMLElement("ol")}} pour montrer que le comptage ne doit pas forcément commencer à `1`. De plus, nous utilisons l'attribut [`value`](/fr/docs/Web/HTML/Reference/Elements/li#value) sur le cinquième élément {{HTMLElement("li")}} pour montrer que les compteurs que vous définissez avec `@counter-style` se comportent comme les compteurs natifs.

```html
<ol start="48">
  <li>48</li>
  <li>49</li>
  <li>50</li>
  <li>51</li>
  <li value="109">109</li>
  <li>110</li>
  <ol></ol>
</ol>
```

#### CSS

```css
@counter-style uppercase-roman {
  system: additive;
  range: 1 3999;
  additive-symbols:
    1000 M,
    900 CM,
    500 D,
    400 CD,
    100 C,
    90 XC,
    50 L,
    40 XL,
    10 X,
    9 IX,
    5 V,
    4 IV,
    1 I;
}

ol {
  list-style: uppercase-roman;
  padding-left: 5em;
}
```

#### Résultat

{{ EmbedLiveSample('compteur_additif', '') }}

### Extension d'un compteur

Cet exemple utilise l'algorithme, les symboles et autres propriétés de [`lower-alpha`](/fr/docs/Web/CSS/Reference/Properties/list-style-type#lower-alpha), l'une des nombreuses valeurs natives de {{CSSXref("list-style-type")}}, mais l'étend en supprimant le point (`'.'`) après la représentation du compteur et en entourant les caractères de parenthèses, comme `(a)` et `(b)`.

#### HTML

```html
<ul class="list">
  <li>Un</li>
  <li>Deux</li>
  <li>Trois</li>
  <li>Quatre</li>
  <li>Cinq</li>
</ul>
```

#### CSS

```css
@counter-style alpha-modified {
  system: extends lower-alpha;
  prefix: "(";
  suffix: ") ";
}

ul {
  list-style: alpha-modified;
}
```

#### Résultat

{{ EmbedLiveSample('extension_dun_compteur') }}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les descripteurs de {{cssxref("@counter-style")}}&nbsp;: {{cssxref("@counter-style/symbols", "symbols")}}, {{cssxref("@counter-style/additive-symbols", "additive-symbols")}}, {{cssxref("@counter-style/negative", "negative")}}, {{cssxref("@counter-style/prefix", "prefix")}}, {{cssxref("@counter-style/suffix", "suffix")}}, {{cssxref("@counter-style/range", "range")}}, {{cssxref("@counter-style/pad", "pad")}}, {{cssxref("@counter-style/speak-as", "speak-as")}} et {{cssxref("@counter-style/fallback", "fallback")}}
- Propriétés de style de liste&nbsp;: {{Cssxref("list-style")}}, {{Cssxref("list-style-image")}}, {{Cssxref("list-style-position")}}
- La fonction {{cssxref("symbols", "symbols()")}} pour créer des styles de compteur anonymes.
- Le module de [styles de compteur CSS](/fr/docs/Web/CSS/Guides/Counter_styles)
- Le module de [listes et compteurs CSS](/fr/docs/Web/CSS/Guides/Lists)
