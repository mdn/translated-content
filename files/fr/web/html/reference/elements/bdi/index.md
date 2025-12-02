---
title: "<bdi> : l'élément d'isolation bidirectionnelle"
slug: Web/HTML/Reference/Elements/bdi
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

L'élément [HTML](/fr/docs/Web/HTML) **`<bdi>`** indique à l'algorithme bidirectionnel du navigateur de traiter le texte qu'il contient indépendamment du texte qui l'entoure. Il est particulièrement utile lorsqu'un site insère dynamiquement du texte sans connaître la direction du texte inséré.

{{InteractiveExample("Démonstration HTML&nbsp;: &lt;bdi&gt;", "tabbed-standard")}}

```html interactive-example
<h1>Championnats du monde de lutte</h1>

<ul>
  <li><bdi class="name">Evil Steven</bdi>&nbsp;: 1<sup>re</sup> place</li>
  <li><bdi class="name">François fatale</bdi>&nbsp;: 2<sup>e</sup> place</li>
  <li><span class="name">سما</span>&nbsp;: 3<sup>e</sup> place</li>
  <li><bdi class="name">الرجل القوي إيان</bdi>&nbsp;: 4<sup>e</sup> place</li>
  <li><span class="name" dir="auto">سما</span>&nbsp;: 5<sup>e</sup> place</li>
</ul>
```

```css interactive-example
html {
  font-family: sans-serif;
}

bdi {
  /* Ajoutez vos styles ici */
}

.name {
  color: red;
}
```

Un texte bidirectionnel est un texte qui contient à la fois des suites de caractères à lire de gauche à droite (LTR en anglais pour _left-to-right_) et des suites de caractères à lire de droite à gauche (RTL en anglais pour _right-to-left_), par exemple une citation en arabe dans un texte en néerlandais. Les navigateurs implémentent [l'algorithme de bidirection Unicode (W3C)(document en anglais)](https://www.w3.org/International/articles/inline-bidi-markup/uba-basics) afin de gérer ces cas. Dans cet algorithme, les caractères ont une direction implicite : les caractères latins sont considérés comme allant de gauche à droite et les caractères arabes comme allant de droite à gauche par exemple. D'autres caractères, comme les espaces ou certains caractères de ponctuation sont considérés comme neutres et leur direction est fournie par les caractères environnants.

La plupart du temps, cet algorithme fournira le bon résultat, sans que l'auteur ait besoin de fournir un balisage spécifique. Toutefois, dans certains cas, il faudra aider l'algorithme et c'est là qu'intervient `<bdi>`.

L'élément `<bdi>` est utilisé afin d'encadrer un fragment de texte pour indiquer à l'algorithme de traiter ce texte avec une direction différente du texte qui l'entoure. Cela fonctionne selon deux axes&nbsp;:

- La direction du texte contenu dans `<bdi>` _n'influence pas_ la direction du texte environnant.
- La direction du texte contenu dans `<bdi>` _n'est pas influencée_ par la direction du texte environnant.

Prenons le texte suivant&nbsp;:

```plain
TEXTE-INJECTÉ - 1re place
```

Si `TEXTE-INJECTÉ` est un texte écrit de gauche à droite, aucun problème. En revanche, si `TEXTE-INJECTÉ` est un texte écrit de droite à gauche, `- 1` sera considéré comme du texte RTL (car ce fragment est composé de caractères neutres/faibles pour la direction) et le résultat sera donc un mélange incohérent :

```plain
1 - TEXTE-INJECTÉre place
```

Si vous connaissez à l'avance la direction de `TEXTE-INJECTÉ`, vous pouvez corriger ce problème en enveloppant `TEXTE-INJECTÉ` dans un élément {{HTMLElement("span")}} avec l'attribut [`dir`](/fr/docs/Web/HTML/Reference/Global_attributes/dir) défini sur la direction connue. Mais si vous ne connaissez pas la direction — par exemple, parce que `TEXTE-INJECTÉ` provient d'une base de données ou est saisi par l'utilisateur·ice — vous devez utiliser `<bdi>` pour empêcher la direction de `TEXTE-INJECTÉ` d'affecter son environnement.

Bien que le même effet visuel puisse être obtenu en utilisant la règle CSS {{CSSxRef("unicode-bidi", "unicode-bidi: isolate")}} sur un élément {{HTMLElement("span")}} ou un autre élément de formatage de texte, il ne faut pas utiliser cette approche car elle n'est pas sémantique et les navigateurs peuvent ignorer la mise en forme CSS.

Envelopper les caractères dans `<span dir="auto">` a le même effet que d'utiliser `<bdi>`, mais la sémantique est moins claire.

## Attributs

Cet élément inclut les [attributs universels](/fr/docs/Web/HTML/Reference/Global_attributes).

Cependant il a une sémantique légèrement différente. En effet, l'attribut **`dir`** n'est pas hérité. S'il n'est pas renseigné, sa valeur par défaut sera `auto` et le navigateur décidera de la direction à appliquer selon le contenu de l'élément si aucune valeur parmi `"rtl"`, `"ltr"` n'est fournie.

## Exemples

### Gauche à droite sans bdi

Cet exemple liste les gagnant·e·s d'une compétition en utilisant uniquement des éléments HTML {{HTMLElement("span")}}. Lorsque les noms ne contiennent que du texte LTR, le résultat s'affiche correctement&nbsp;:

```html
<ul>
  <li><span class="name">Henrietta Boffin</span> - 1<sup>re</sup> place</li>
  <li><span class="name">Jerry Cruncher</span> - 2<sup>e</sup> place</li>
</ul>
```

```css hidden
body {
  border: 1px solid #3f87a6;
  max-width: calc(100% - 40px - 6px);
  padding: 20px;
  width: calc(100% - 40px - 6px);
  border-width: 1px 1px 1px 5px;
}
```

{{EmbedLiveSample('Gauche à droite sans bdi', '', 120)}}

### Texte sans `<bdi>` avec deux directionnalités

Cet exemple liste les gagnant·e·s d'une compétition en utilisant uniquement des éléments {{HTMLElement("span")}}, et l'un·e des gagnant·e·s a un nom composé de texte de droite à gauche. Dans ce cas, le `- 1`, qui est composé de caractères à directionnalité neutre ou faible, adoptera la direction du texte de droite à gauche, et le résultat sera brouillé&nbsp;:

```html
<ul>
  <li><span class="name">اَلأَعْشَى</span> - 1<sup>re</sup> place</li>
  <li><span class="name">Jerry Cruncher</span> - 2<sup>e</sup> place</li>
</ul>
```

```css hidden
body {
  border: 1px solid #3f87a6;
  max-width: calc(100% - 40px - 6px);
  padding: 20px;
  width: calc(100% - 40px - 6px);
  border-width: 1px 1px 1px 5px;
}
```

{{EmbedLiveSample('Texte sans `<bdi>` avec deux directionnalités', '', 120)}}

### Texte avec `<bdi>` et deux directionnalités

Cet exemple liste les gagnant·e·s d'une compétition en utilisant des éléments `<bdi>`. Ces éléments indiquent au navigateur de traiter le nom isolément de son contexte d'inclusion, de sorte que le résultat de l'exemple est correctement ordonné&nbsp;:

```html
<ul>
  <li><bdi class="name">اَلأَعْشَى</bdi> - 1<sup>re</sup> place</li>
  <li><bdi class="name">Jerry Cruncher</bdi> - 2<sup>e</sup> place</li>
</ul>
```

```css hidden
body {
  border: 1px solid #3f87a6;
  max-width: calc(100% - 40px - 6px);
  padding: 20px;
  width: calc(100% - 40px - 6px);
  border-width: 1px 1px 1px 5px;
}
```

{{EmbedLiveSample('Texte avec `<bdi>` et deux directionnalités', '', 120)}}

## Résumé technique

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/fr/docs/Web/HTML/Guides/Content_categories"
          >Catégories de contenu</a
        >
      </th>
      <td>
        <a href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_de_flux"
          >Contenu de flux</a
        >,
        <a href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_phrasé"
          >contenu phrasé</a
        >, contenu tangible.
      </td>
    </tr>
    <tr>
      <th scope="row">Contenu autorisé</th>
      <td>
        <a href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_phrasé"
          >Contenu phrasé</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Omission de balises</th>
      <td>
        Aucune, la balise d'ouverture et la balise de fermeture sont
        obligatoires.
      </td>
    </tr>
    <tr>
      <th scope="row">Parents autorisés</th>
      <td>
        Tout élément acceptant du
        <a href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_phrasé"
          >contenu phrasé</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Rôle ARIA implicite</th>
      <td>
        <code
          ><a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/generic_role"
            >generic</a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Rôles ARIA autorisés</th>
      <td>Tous les rôles sont autorisés.</td>
    </tr>
    <tr>
      <th scope="row">Interface DOM</th>
      <td>{{DOMxRef("HTMLElement")}}</td>
    </tr>
  </tbody>
</table>

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'entrée de glossaire {{Glossary("Localization", "Localisation")}}
- Un élément HTML connexe&nbsp;: {{HTMLElement("bdo")}}
- Les propriétés CSS {{CSSxRef("direction")}} et {{CSSxRef("unicode-bidi")}}
- [Le balisage en ligne et texte bidirectionnel en HTML (W3C) <sup>(angl.)</sup>](https://www.w3.org/International/articles/inline-bidi-markup/)
- [Les bases de l'algorithme bidirectionnel Unicode (W3C) <sup>(angl.)</sup>](https://www.w3.org/International/articles/inline-bidi-markup/uba-basics)
