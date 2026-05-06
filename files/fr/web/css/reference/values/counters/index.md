---
title: Fonction CSS `counters()`
short-title: counters()
slug: Web/CSS/Reference/Values/counters
l10n:
  sourceCommit: b760560abe30bd69ca968dac38528102f423b5ea
---

La [fonction](/fr/docs/Web/CSS/Reference/Values/Functions) [CSS](/fr/docs/Web/CSS) **`counters()`** permet de combiner des marqueurs lors de l'imbrication de compteurs. La fonction retourne une chaîne de caractères qui concatène les valeurs actuelles des compteurs nommés et imbriqués, le cas échéant, avec la chaîne de caractères fournie. Le troisième paramètre, optionnel, permet de définir le style de liste.

La fonction `counters()` est généralement utilisée au sein d'un [pseudo-élément](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-elements) avec la propriété {{CSSxRef("content")}}, mais théoriquement, elle peut être utilisée partout où une valeur {{CSSxRef("&lt;string&gt;")}} est acceptée.

La fonction `counters()` a deux formes&nbsp;: `counters(<name>, <string>)` et `counters(<name>, <string>, <style>)`. Le texte généré est la valeur de tous les compteurs avec le `<name>` donné, disposés du plus externe au plus interne, et séparés par la `<string>` définie. Les compteurs sont rendus dans le `<style>` indiqué, par défaut `decimal` si aucun `<style>` n'est défini.

{{InteractiveExample("Démonstration CSS&nbsp;: counters()", "tabbed-standard")}}

```css interactive-example
ol {
  counter-reset: index;
  list-style-type: none;
}

li::before {
  counter-increment: index;
  content: counters(index, ".", decimal) " ";
}
```

```html interactive-example
<ol>
  <li>Mars</li>
  <li>
    Saturne
    <ol>
      <li>Mimas</li>
      <li>Enceladus</li>
      <li>
        <ol>
          <li>Voyager</li>
          <li>Cassini</li>
        </ol>
      </li>
      <li>Téthys</li>
    </ol>
  </li>
  <li>
    Uranus
    <ol>
      <li>Titan</li>
    </ol>
  </li>
</ol>
```

## Syntaxe

```css
/* Utilisation simple - style decimal par défaut */
counters(counter-name, '.');

/* Changement du style d'affichage */
counters(counter-name, '-', upper-roman)
```

Un [compteur](/fr/docs/Web/CSS/Guides/Counter_styles/Using_counters) n'est pas visible en tant que tel. La fonction `counters()` (et la fonction {{CSSxRef("counter()")}}) est ce qui la rend utile en retournant du contenu défini par le·la développeur·euse.

### Valeurs

La fonction `counters()` accepte deux ou trois paramètres. Le premier paramètre est le `<counter-name>`. Le deuxième paramètre est le séparateur `<string>`. Le troisième paramètre optionnel est le `<counter-style>`.

- `<counter-name>`
  - : Un identifiant personnalisé ({{CSSxRef("&lt;custom-ident&gt;")}}) qui identifie les compteurs, et qui est le même nom sensible à la casse utilisé avec les valeurs de propriété {{CSSxRef("counter-reset")}} et {{CSSxRef("counter-increment")}}. Le nom du compteur ne peut pas commencer par deux tirets et ne peut pas être `none`, `unset`, `initial` ou `inherit`. Alternativement, pour les compteurs en ligne à usage unique, la fonction {{CSSxRef("symbols")}} peut être utilisée à la place d'un compteur nommé dans [les navigateurs qui prennent en charge `symbols()`](/fr/docs/Web/CSS/Reference/Values/symbols#compatibilité_des_navigateurs).
- {{CSSxRef("&lt;string&gt;")}}
  - : N'importe quel nombre en chaîne de caractères textuels. Les caractères non latins doivent être encodés en utilisant leurs séquences d'échappement Unicode&nbsp;: par exemple, `\000A9` représente le symbole de copyright (©).
- `<counter-style>`
  - : Un nom de style de compteur ou une fonction {{CSSxRef("symbols()")}}. Le nom du style de compteur peut être un style prédéfini tel que numérique, alphabétique ou symbolique, un style prédéfini complexe en écriture asiatique ou éthiopienne, ou un autre [style de compteur prédéfini](/fr/docs/Web/CSS/Guides/Counter_styles). Si omis, le style de compteur par défaut est `decimal`.

La valeur de retour est une chaîne de caractères contenant toutes les valeurs de tous les compteurs dans l'ensemble de compteurs CSS de l'élément nommé `<counter-name>` dans le style de compteur défini par `<counter-style>` (ou décimal, si omis). La chaîne de caractères de retour est triée de l'extérieur vers l'intérieur, jointe par la chaîne de caractères (`<string>`) définie.

> [!NOTE]
> Pour obtenir des informations sur les compteurs non concaténés, consultez la fonction {{CSSxRef("counter()")}}, qui omet le paramètre `<string>`.

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Comparer la valeur par défaut du compteur avec les chiffres romains majuscules

Cet exemple inclut deux fonctions `counters()`&nbsp;: l'une avec `<counter-style>` défini et l'autre utilisant la valeur par défaut `decimal`.

#### HTML

```html
<ol>
  <li>
    <ol>
      <li></li>
      <li></li>
      <li></li>
    </ol>
  </li>
  <li></li>
  <li></li>
  <li>
    <ol>
      <li></li>
      <li>
        <ol>
          <li></li>
          <li></li>
          <li></li>
        </ol>
      </li>
    </ol>
  </li>
</ol>
```

#### CSS

```css-nolint
ol {
  counter-reset: listCounter;
}
li {
  counter-increment: listCounter;
}
li::marker {
  content:
    counters(listCounter, ".", upper-roman) ") ";
}
li::before {
  content:
    counters(listCounter, ".") " == "
    counters(listCounter, ".", lower-roman);
}
```

#### Résultat

{{EmbedLiveSample("Comparer la valeur par défaut du compteur avec les chiffres romains majuscules", "100%", 270)}}

### Comparer la valeur du compteur `decimal-leading-zero` avec les lettres minuscules

Cet exemple inclut trois fonctions `counters()`, chacune avec des valeurs `<string>` et `<counter-style>` différentes.

#### HTML

```html
<ol>
  <li>
    <ol>
      <li></li>
      <li></li>
      <li></li>
    </ol>
  </li>
  <li></li>
  <li></li>
  <li>
    <ol>
      <li></li>
      <li>
        <ol>
          <li></li>
          <li></li>
          <li></li>
        </ol>
      </li>
    </ol>
  </li>
</ol>
```

#### CSS

```css-nolint
ol {
  counter-reset: count;
}
li {
  counter-increment: count;
}
li::marker {
  content:
    counters(count, "-", decimal-leading-zero) ") ";
}
li::before {
  content:
    counters(count, "~", upper-alpha) " == "
    counters(count,  "*", lower-alpha);
}
```

#### Résultat

{{EmbedLiveSample("Comparer la valeur du compteur `decimal-leading-zero` avec les lettres minuscules", "100%", 270)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Utiliser les compteurs CSS](/fr/docs/Web/CSS/Guides/Counter_styles/Using_counters)
- La propriété {{CSSxRef("counter-reset")}}
- La propriété {{CSSxRef("counter-set")}}
- La propriété {{CSSxRef("counter-increment")}}
- La règle {{CSSxRef("@counter-style")}}
- La fonction {{CSSxRef("counters()")}}
- Le pseudo-élément {{CSSxRef("::marker")}}
- Le module [des listes et compteurs CSS](/fr/docs/Web/CSS/Guides/Lists)
- Le module [des styles de compteurs CSS](/fr/docs/Web/CSS/Guides/Counter_styles)
- Le module [du contenu généré CSS](/fr/docs/Web/CSS/Guides/Generated_content)
