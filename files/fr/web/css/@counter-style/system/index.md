---
title: system
slug: Web/CSS/@counter-style/system
tags:
  - CSS
  - Descripteur
  - Reference
translation_of: Web/CSS/@counter-style/system
---
{{CSSRef}}

La descripteur **`system`**, utilisé avec [la règle @](/fr/docs/Web/CSS/R%C3%A8gles_@) {{cssxref("@counter-style")}}, permet de définir l'algorithme utilisé pour convertir la valeur entière d'un compteur en une chaîne de caractères.

```css
/* Valeurs avec un mot-clé */
system: cyclic;
system: numeric;
system: alphabetic;
system: symbolic;
system: additive;
system: fixed;

/* Combinaison de valeurs */
system: fixed 3;
system: extends decimal;
```

Si l'algorithme défini dans ce descripteur est incapable de construire la chaîne de caractères pour une valeur donnée, ce sera le système de secours qui sera utilisé ({{cssxref("fallback")}}).

## Syntaxe

Ce descripteur peut prendre l'une de ces trois formes :

- Un des mots-clés parmi `cyclic`, `numeric`, `alphabetic`, `symbolic`, `additive`, `fixed`
- Le mot-clé `fixed` avec un entier
- Le mot-clé `extends` avec un nom correspondant à un {{cssxref("@counter-style")}}.

<!---->

- `cyclic`
  - : Le système itère et boucle parmi la liste des symboles fournis. Une fois que la fin de la liste est atteinte, le système reprend au début de la liste. Ce système est pertinent lorsqu'on a un seul symbole ou une liste non numérotée avec des puces. Afin que le style du compteur soit valide, il faut au moins définir un symbole via le descripteur {{cssxref("symbols()")}}.
- `fixed`
  - : Cette valeur permet de définir un ensemble fini de symboles. Une fois que le système a utilisé les différents symboles, il poursuivra en utilisant le système de secours. Afin que le style du compteur soit valide, il faut qu'au moins un symbole soit défini avec le descripteur `symbols`. On peut éventuellement ajouter un entier (valeur {{cssxref("integer")}}) après le système et qui définit la valeur du premier symbole. La valeur par défaut de ce paramètre (s'il est absent) est `1`.
- `symbolic`
  - : Le système itère sur la liste des symboles et à chaque boucle, on double, triple, etc. la représentation. Ainsi, si les symboles fournis sont ◽ et ◾, au cycle suivant, on aura ◽◽ puis ◾◾, ensuite ◽◽◽ et ◾◾◾ et ainsi de suite. Afin que le style du compteur soit valide, il faut définir au moins un symbole avec le descripteur `symbols`. Ce système de compteur ne fonctionne que pour les valeurs positives.
- `alphabetic`
  - : Le système interprète les symboles comme les chiffres d'un système de numérotation alphabétique. Ainsi, si les lettres `a` à `z` sont définies comme symbole dans un style de compteur dont le système est `alphabetic`, les 26 premières représentations du compteur seront `a`, `b`, etc. jusqu'à `z` (jusqu'ici, le comportement est identique à celui obtenu grâce à `symbolic`) mais ensuite, le système poursuivra avec `aa`, `ab`, `ac`, etc.
    Pour que le style du compteur soit valide, il faut qu'au moins deux symboles soient fournis. Le premier symbole est interprété comme `1`, le suivant comme `2` et ainsi de suite. Ce système ne fonctionne que pour les valeurs positives.
- `numeric`
  - : Les symboles sont interprétés comme les chiffres d'un [système de notation positionnelle](https://fr.wikipedia.org/wiki/Notation_positionnelle). Ce système est très proche de celui qu'on peut obtenir avec `alphabetic` sauf que, pour ce dernier, le premier symbole fourni par `symbols` sera interprété comme `1`, le suivant comme `2` et ainsi de suite alors que pour `numeric`, le premier symbole est interprété comme 0, le suivant comme `1`, puis `2` etc. Pour que le style de compteur soit valide, il faut qu'au moins deux symboles soient définis avec `symbols`. Le premier symbole qui est fourni sera interprété comme `0`. Comme on peut le voir dans l'exemple ci-après, si on utilise les chiffres de `0` à `9` comme symboles, on obtiendra le même résultat qu'avec le système décimal.
- `additive`
  - : Ce système peut être utilisé pour représenter [des systèmes de numérotations additives](<https://fr.wikipedia.org/wiki/Notation_additive_(num%C3%A9ration)>) telles que les chiffres romains qui, plutôt que de réutiliser des chiffres pour obtenir différentes valeurs, définissent des chiffres supplémentaires pour représenter de grandes valeurs. La valeur d'un nombre représenté dans ce sytème est obtenue en sommant les différents chiffres qui le représentent. Le descripteur supplémentaire {{cssxref("additive-symbols")}} doit être utilisé avec au moins un tuple additif pour que le style de compteur soit considéré comme valide. Un tuple additif est composé d'un symbole de compteur et d'un poids entier positif. Les tuples additifs doivent être définis dans l'ordre décroissant de leurs poids afin que le système soit valide. On voit dans l'exemple ci-après que `range` est utilisé afin de définir l'intervalle de validité. Une fois en dehors de cet intervalle, on utilisera la représentation classique avec `decimal` (le style de secours). Si on veut utiliser les chiffres romains, on pourra utiliser les valeurs de style prédéfinies comme `upper-roman` ou `lower-roman` afin d'éviter de réinventer la roue.
- `extends`
  - : Ce mot-clé permet aux auteurs d'utiliser l'algorithme d'un autre style de compteur et de modifier ses autres caractéristiques. Si une règle d'un style de compteur utilise le système `extends` et que certains de ces descripteurs ne font pas définis, leurs valeurs seront prises depuis le style de compteur indiqué. Si le nom du style référencé n'existe pas, le style de secours (décimal) sera utilisé. Pour que le style de compteur soit valide, il ne doit pas contenir de descripteur `symbols` ou `additive-symbols`. Si, selon les différents styles de compteur, on a un cycle de référence (A qui pointe vers B qui pointe vers C qui pointe vers A par exemple), l'agent utilisateur considèrera que tous les styles étendent le style décimal. Dans l'exemple final, le style de compteur utiliser les valeurs du système de compteur `lower-alpha` mais retire le point comme suffixe et entour les caractères entre parenthèses (pour obtenir `(a)` `(b)` etc).

### Syntaxe formelle

{{csssyntax}}

## Exemples

### Utilisation de `cyclic`

#### CSS

```css
@counter-style fisheye {
  system: cyclic;
  symbols: ◉;
  suffix: " ";
}

.list {
    list-style: fisheye;
}
```

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

#### Résultat

{{EmbedLiveSample('Utilisation_de_cyclic')}}

### Utilisation de `fixed`

#### CSS

```css
@counter-style circled-digits {
  system: fixed;
  symbols: ➀ ➁ ➂;
  suffix: ' ';
}

.list {
  list-style: circled-digits;
}
```

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

#### Résultat

{{EmbedLiveSample('Utilisation_de_fixed')}}

### Utilisation de `symbolic`

#### CSS

```css
@counter-style abc {
  system: symbolic;
  symbols: a b c;
  suffix: ". ";
}

.list {
  list-style: abc;
}
```

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

#### Résultat

{{EmbedLiveSample('Utilisation_de_symbolic')}}

### Utilisation de `alphabetic`

#### CSS

```css
@counter-style abc {
  system: alphabetic;
  symbols: a b c;
  suffix: ". ";
}

.list {
  list-style: abc;
}
```

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

#### Résultat

{{EmbedLiveSample('Utilisation_de_alphabetic')}}

### Utilisation de `numeric` avec des lettres

#### CSS

```css
@counter-style abc {
  system: numeric;
  symbols: a b c;
  suffix: ". ";
}

.list {
  list-style: abc;
}
```

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

#### Résultat

{{EmbedLiveSample('Utilisation_de_numeric_avec_des_lettres')}}

### Utilisation de `numeric` avec des chiffres

#### CSS

```css
@counter-style numbers {
  system: numeric;
  symbols: 0 1 2 3 4 5 6 7 8 9;
  suffix: ". ";
}

.list {
  list-style: numbers;
}
```

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

{{EmbedLiveSample("Utilisation_de_numeric_avec_des_chiffres")}}

### Utilisation de `additive`

#### CSS

```css
@counter-style upper-roman {
  system: additive;
  range: 1 3999;
  additive-symbols: 1000 M, 900 CM, 500 D, 400 CD, 100 C, 90 XC, 50 L, 40 XL, 10 X, 9 IX, 5 V, 4 IV, 1 I;
}

.list {
  list-style: upper-roman;
}
```

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

#### Résultat

{{EmbedLiveSample('Utilisation_de_additive')}}

### Combinaison avec `extends`

#### CSS

```css
@counter-style alpha-modified {
  system: extends lower-alpha;
  prefix: "(";
  suffix: ") ";
}

.list {
  list-style: alpha-modified;
}
```

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

#### Résultat

{{EmbedLiveSample('Combinaison_avec_extends')}}

## Spécifications

| Spécification                                                                                | État                                         | Commentaires         |
| -------------------------------------------------------------------------------------------- | -------------------------------------------- | -------------------- |
| {{SpecName('CSS3 Counter Styles', '#counter-style-system', 'system')}} | {{Spec2('CSS3 Counter Styles')}} | Définition initiale. |

{{cssinfo}}

## Compatibilité des navigateurs

{{Compat("css.at-rules.counter-style.system")}}

## Voir aussi

- {{cssxref("list-style")}},
- {{cssxref("list-style-image")}},
- {{cssxref("list-style-position")}},
- {{cssxref("symbols()", "symbols()")}}, la notation fonctionnelle utilisée pour créer des styles de compteur anonymes.
