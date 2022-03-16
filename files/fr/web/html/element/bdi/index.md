---
title: '<bdi> : l''élément d''isolation bidirectionnelle'
slug: Web/HTML/Element/bdi
tags:
  - BDI
  - BiDi
  - Directionality
  - Element
  - HTML
  - HTML text-level semantics
  - HTML:Flow content
  - HTML:Palpable Content
  - HTML:Phrasing content
  - Internationalization
  - Left-to-Right
  - Reference
  - Right-to-left
  - Text
  - Web
  - direction
  - i18n
  - ltr
  - rtl
translation_of: Web/HTML/Element/bdi
browser-compat: html.elements.bdi
---
{{HTMLRef}}

L'élément **`<bdi>`** (ou élément d'isolation de texte bidirectionnel) isole une portée (_span_) de texte pouvant être formatée dans une direction différente de celle du texte qui l'entoure. Cela permet, par exemple, de présenter correctement une citation en arabe (écrit de droite à gauche) au sein d'un texte écrit en français (écrit de gauche à droite).

{{EmbedInteractiveExample("pages/tabbed/bdi.html", "tabbed-standard")}}

Un texte bidirectionnel est un texte qui contient à la fois des suites de caractères à lire de gauche à droite (LTR en anglais pour _left-to-right_) et des suites de caractères à lire de droite à gauche (RTL en anglais pour _right-to-left_), par exemple une citation en arabe dans un texte en néerlandais. Les navigateurs implémentent [l'algorithme de bidirection Unicode (W3C)(document en anglais)](https://www.w3.org/International/articles/inline-bidi-markup/uba-basics) afin de gérer ces cas. Dans cet algorithme, les caractères ont une direction implicite : les caractères latins sont considérés comme allant de gauche à droite et les caractères arabes comme allant de droite à gauche par exemple. D'autres caractères, comme les espaces ou certains caractères de ponctuation sont considérés comme neutres et leur direction est fournie par les caractères environnants.

La plupart du temps, cet algorithme fournira le bon résultat, sans que l'auteur ait besoin de fournir un balisage spécifique. Toutefois, dans certains cas, il faudra aider l'algorithme et c'est là qu'intervient `<bdi>`.

L'élément `<bdi>` est utilisé afin d'encadrer un fragment de texte pour indiquer à l'algorithme de traiter ce texte avec une direction différente du texte qui l'entoure. Cela fonctionne selon deux axes :

- La direction du texte contenu dans `<bdi>` _n'influence pas_ la direction du texte environnant.
- La direction du texte contenu dans `<bdi>` _n'est pas influencée_ par la direction du texte environnant.

Prenons le texte suivant :

```plain
TEXTE-INJECTÉ - 1re place
```

Si `TEXTE-INJECTÉ` est un texte écrit de gauche à droite, aucun problème. En revanche, si `TEXTE-INJECTÉ` est un texte écrit de droite à gauche, `- 1` sera considéré comme du texte RTL (car ce fragment est composé de caractères neutres/faibles pour la direction) et le résultat sera donc un mélange incohérent :

```plain
1 - TEXTE-INJECTÉre place
```

Si on connaît d'avance la direction de `TEXTE-INJECTÉ`, on peut corriger le problème en enveloppant `TEXTE-INJECTÉ` dans un élément [`<span>`](/fr/docs/Web/HTML/Element/span) avec un attribut [`dir`](/fr/docs/Web/HTML/Global_attributes#attr-dir) décrivant la bonne direction. Cependant, si on ne connaît pas la direction à l'avance (`TEXTE-INJECTÉ` provenant d'une base de données ou étant saisi par un utilisateur), on utilisera `<bdi>` afin d'empêcher la direction de `TEXTE-INJECTÉ` d'avoir un impact sur le texte environnant.

Bien que le même effet de rendu puisse être créé avec la règle CSS [`unicode-bidi`](/fr/docs/Web/CSS/unicode-bidi)`: isolate` sur un élément [`<span>`](/fr/docs/Web/HTML/Element/span) ou toute méthode de formatage du texte, la sémantique est ici uniquement portée par l'élément `<bdi>`. Les navigateurs peuvent notamment ignorer la mise en forme induite par la feuille CSS. Dans ce cas, le texte serait bien affiché en utilisant l'élément HTML mais deviendrait inutilisable si seul CSS est utilisé pour apporter cette information.

Utiliser `<span dir="auto">` aura le même effet qu'utiliser `<bdi>` mais la sémantique portée sera moindre.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/fr/docs/Web/Guide/HTML/Content_categories"
          >Catégories de contenu</a
        >
      </th>
      <td>
        <a href="/fr/docs/Web/Guide/HTML/Content_categories#flow_content"
          >Contenu de flux</a
        >,
        <a href="/fr/docs/Web/Guide/HTML/Content_categories#phrasing_content"
          >contenu phrasé</a
        >,
        <a href="/fr/docs/Web/Guide/HTML/Content_categories#palpable_content"
          >contenu tangible</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Contenu autorisé</th>
      <td>
        <a href="/fr/docs/Web/Guide/HTML/Content_categories#phrasing_content"
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
        <a href="/fr/docs/Web/Guide/HTML/Content_categories#phrasing_content"
          >contenu phrasé</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Rôle ARIA implicite</th>
      <td>
        <a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role"
          >Pas de rôle correspondant</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Rôles ARIA autorisés</th>
      <td>Tous les rôles sont autorisés.</td>
    </tr>
    <tr>
      <th scope="row">Interface DOM</th>
      <td>
        <a href="/fr/docs/Web/API/HTMLElement"><code>HTMLElement</code></a>
      </td>
    </tr>
  </tbody>
</table>

## Attributs

Comme tous les éléments HTML, cet élément dispose des [attributs universels](/fr/docs/Web/HTML/Global_attributes). Cependant il a une sémantique légèrement différente. En effet, l'attribut **`dir`** n'est pas hérité. S'il n'est pas renseigné, sa valeur par défaut sera `auto` et le navigateur décidera de la direction à appliquer selon le contenu de l'élément si aucune valeur parmi `"rtl"`, `"ltr"` n'est fournie.

## Exemples

### Gauche à droite sans bdi

Cet exemple affiche les gagnants d'une compétition grâce à des éléments [`<span>`](/fr/docs/Web/HTML/Element/span). Ici, les noms ne s'écrivent que de gauche à droite et le résultat s'affiche correctement :

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

{{EmbedLiveSample("Gauche_à_droite_sans_bdi", "100%", 150)}}

### Texte sans \<bdi> avec deux directionnalités

Cela fonctionne sans problème tant que les noms s'écrivent de gauche à droite. Lorsqu'on insère un nom écrit de droite à gauche, la partie « `- 1` » sera captée par le texte en RTL et le résultat sera confus :

#### Exemple sans bidi

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

{{EmbedLiveSample("Exemple_sans_bidi", "100%", 150)}}

### Texte avec \<bdi> et deux directionnalités

Pour éviter cet écueil, on pourra utiliser `<bdi>` pour séparer le contenu :

#### Exemple avec bidi

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

{{EmbedLiveSample("Exemple_avec_bidi", "100%", 150)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Le balisage en ligne et texte bidirectionnel en HTML (W3C)](https://www.w3.org/International/articles/inline-bidi-markup/) (en anglais)
- [Les bases de l'algorithme bidirectionnel Unicode (W3C)](https://www.w3.org/International/articles/inline-bidi-markup/uba-basics) (en anglais)
- Un élément HTML connexe : [`<bdo>`](/fr/docs/Web/HTML/Element/bdo)
- Les propriétés CSS [`direction`](/fr/docs/Web/CSS/direction) et [`unicode-bidi`](/fr/docs/Web/CSS/unicode-bidi)
