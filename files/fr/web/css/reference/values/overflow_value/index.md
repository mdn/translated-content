---
title: <overflow>
slug: Web/CSS/Reference/Values/overflow_value
l10n:
  sourceCommit: 8fd626a7b7f1fcb19193325bbac5b87e719f83ea
---

Le [type de données](/fr/docs/Web/CSS/Reference/Values/Data_types) {{Glossary("enumerated", "énuméré")}} [CSS](/fr/docs/Web/CSS) **`<overflow>`** représente les mots-clés pour les propriétés {{CSSxRef("overflow-block")}}, {{CSSxRef("overflow-inline")}}, {{CSSxRef("overflow-x")}}, {{CSSxRef("overflow-y")}} et la propriété raccourcie {{CSSxRef("overflow")}}. Ces propriétés s'appliquent aux conteneurs de bloc, flex et grille.

## Syntaxe

```plain
<overflow> = visible | hidden | clip | scroll | auto
```

## Valeurs

Le type de valeur énuméré `<overflow>` définit l'une des valeurs listées ci‑dessous.

- `visible`
  - : Le contenu débordant n'est pas tronqué et peut être visible hors de la boîte de remplissage de l'élément. La boîte n'est pas un {{Glossary("scroll container", "conteneur de défilement")}}. C'est la valeur par défaut pour toutes les propriétés acceptant `<overflow>`.
- `hidden`
  - : Le contenu débordant est tronqué à la boîte de remplissage de l'élément. Il n'y a pas de barres de défilement et le contenu tronqué n'est pas visible (c'est‑à‑dire qu'il est masqué), mais il existe toujours. Les agents utilisateur n'ajoutent pas de barres de défilement et n'autorisent pas l'affichage du contenu hors de la zone tronquée par des actions comme le glissement tactile ou la molette de souris. Le contenu _peut_ être défilé de façon programmatique (par exemple, via {{DOMxRef("Element.scrollLeft", "scrollLeft")}} ou {{DOMxRef("Element.scrollTo", "scrollTo()")}}). Il peut aussi être défilé au clavier&nbsp;: les flèches permettent de faire défiler le contenu et la touche Tab permet de sélectionner un élément focalisable masqué. La boîte sur laquelle cette valeur est appliquée est un conteneur de défilement.
- `clip`
  - : Le contenu débordant est tronqué au _bord de découpe du débordement_ (<i lang="en">overflow clip edge</i>) défini par la propriété [`overflow-clip-margin`](/fr/docs/Web/CSS/Reference/Properties/overflow-clip-margin). Le contenu déborde la boîte de remplissage de la valeur {{CSSxRef("&lt;length&gt;")}} de `overflow-clip-margin` ou de `0px` si non définie. Le contenu hors de la région tronquée n'est pas visible, les agents utilisateur n'ajoutent pas de barre de défilement et le défilement programmatique n'est pas pris en charge. Aucun nouveau [contexte de formatage](/fr/docs/Web/CSS/Guides/Display/Block_formatting_context) n'est créé.
- `scroll`
  - : Le contenu débordant est tronqué à la boîte de remplissage de l'élément, et peut être défilé via des barres de défilement. Les agents utilisateur affichent des barres de défilement horizontales et verticales si une seule valeur est définie, que le contenu déborde ou non. Ce mot‑clé peut empêcher l'apparition/disparition des barres de défilement selon le contenu. Les imprimantes peuvent imprimer le contenu débordant. La boîte sur laquelle cette valeur est appliquée est un conteneur de défilement.
- `auto`
  - : Le contenu débordant est tronqué à la boîte de remplissage de l'élément, et peut être défilé. Contrairement à `scroll`, les barres de défilement ne s'affichent _que si_ le contenu déborde et sont masquées par défaut. Si le contenu tient dans la boîte, le rendu est identique à `visible` mais un nouveau contexte de formatage est créé. La boîte sur laquelle cette valeur est appliquée est un conteneur de défilement.

> [!NOTE]
> Le mot‑clé `overlay` est une valeur héritée équivalente à `auto`. Avec `overlay`, les barres de défilement sont affichées par‑dessus le contenu au lieu de prendre de l'espace.

## Exemples

Cet exemple montre toutes les valeurs énumérées `<overflow>` pour la propriété {{CSSxRef("overflow")}}.

### HTML

L'exemple HTML contient des paroles dans l'élément {{HTMLElement("pre")}}. Il inclut aussi un texte de lien pour tester les effets de la sélection clavier sur le débordement et le défilement. Le même code HTML est répété plusieurs fois pour montrer l'effet de chaque valeur énumérée `<overflow>`.

```html
<pre>&nbsp;
Oh, Petit Canard, tu es le meilleur
Tu rends l'heure du bain très amusante
Petit Canard, je t'aime beaucoup

Petit Canard, joie des joies
Quand je te presse, tu fais du bruit
Petit Canard, tu es mon·ma meilleur·e ami·e, c'est vrai

Oh, chaque jour quand je vais dans la baignoire
Je trouve un·e petit·e ami·e mignon·ne, jaune et dodu·e
Coin-coin-dodu

<a href="#">Petit Canard</a>, tu es si chou
Et j'ai de la chance que tu sois à moi
Petit Canard, je t'aime beaucoup
</pre>
```

```html hidden
<pre>&nbsp;
Oh, Petit Canard, tu es le meilleur
Tu rends l'heure du bain très amusante
Petit Canard, je t'aime beaucoup

Petit Canard, joie des joies
Quand je te presse, tu fais du bruit
Petit Canard, tu es mon·ma meilleur·e ami·e, c'est vrai

Oh, chaque jour quand je vais dans la baignoire
Je trouve un·e petit·e ami·e mignon·ne, jaune et dodu·e
Coin-coin-dodu

<a href="#">Petit Canard</a>, tu es si chou
Et j'ai de la chance que tu sois à moi
Petit Canard, je t'aime beaucoup
</pre>

<pre>&nbsp;
Oh, Petit Canard, tu es le meilleur
Tu rends l'heure du bain très amusante
Petit Canard, je t'aime beaucoup

Petit Canard, joie des joies
Quand je te presse, tu fais du bruit
Petit Canard, tu es mon·ma meilleur·e ami·e, c'est vrai

Oh, chaque jour quand je vais dans la baignoire
Je trouve un·e petit·e ami·e mignon·ne, jaune et dodu·e
Coin-coin-dodu

<a href="#">Petit Canard</a>, tu es si chou
Et j'ai de la chance que tu sois à moi
Petit Canard, je t'aime beaucoup
</pre>

<pre>&nbsp;
Oh, Petit Canard, tu es le meilleur
Tu rends l'heure du bain très amusante
Petit Canard, je t'aime beaucoup

Petit Canard, joie des joies
Quand je te presse, tu fais du bruit
Petit Canard, tu es mon·ma meilleur·e ami·e, c'est vrai

Oh, chaque jour quand je vais dans la baignoire
Je trouve un·e petit·e ami·e mignon·ne, jaune et dodu·e
Coin-coin-dodu

<a href="#">Petit Canard</a>, tu es si chou
Et j'ai de la chance que tu sois à moi
Petit Canard, je t'aime beaucoup
</pre>

<pre>&nbsp;
Oh, Petit Canard, tu es le meilleur
Tu rends l'heure du bain très amusante
Petit Canard, je t'aime beaucoup

Petit Canard, joie des joies
Quand je te presse, tu fais du bruit
Petit Canard, tu es mon·ma meilleur·e ami·e, c'est vrai

Oh, chaque jour quand je vais dans la baignoire
Je trouve un·e petit·e ami·e mignon·ne, jaune et dodu·e
Coin-coin-dodu

<a href="#">Petit Canard</a>, tu es si chou
Et j'ai de la chance que tu sois à moi
Petit Canard, je t'aime beaucoup
</pre>

<pre>&nbsp;
Oh, Petit Canard, tu es le meilleur
Tu rends l'heure du bain très amusante
Petit Canard, je t'aime beaucoup

Petit Canard, joie des joies
Quand je te presse, tu fais du bruit
Petit Canard, tu es mon·ma meilleur·e ami·e, c'est vrai

Oh, chaque jour quand je vais dans la baignoire
Je trouve un·e petit·e ami·e mignon·ne, jaune et dodu·e
Coin-coin-dodu

<a href="#">Petit Canard</a>, tu es si chou
Et j'ai de la chance que tu sois à moi
Petit Canard, je t'aime beaucoup
</pre>
```

### CSS

Pour la démonstration, la taille de la boîte `<pre>` est définie pour que le contenu déborde en direction inline et block. Une valeur `<overflow>` différente est appliquée à chaque élément `<pre>`. Pour la valeur `clip`, une propriété {{CSSxRef("overflow-clip-margin")}} est ajoutée.

```css hidden
pre {
  border: 2px dashed red;
  margin-bottom: 3em;
}

::before {
  font-weight: bold;
  color: white;
  background: crimson;
  display: inline-block;
  width: 100%;
  padding: 3px 5px;
  box-sizing: border-box;
}
```

```css
pre {
  block-size: 100px;
  inline-size: 295px;
}

pre:nth-of-type(1) {
  overflow: hidden;
}
pre:nth-of-type(1)::before {
  content: "hidden: ";
}

pre:nth-of-type(2) {
  overflow: clip;
  overflow-clip-margin: 1em;
}
pre:nth-of-type(2)::before {
  content: "clip: ";
}

pre:nth-of-type(3) {
  overflow: scroll;
}
pre:nth-of-type(3)::before {
  content: "scroll: ";
}

pre:nth-of-type(4) {
  overflow: auto;
}
pre:nth-of-type(4)::before {
  content: "auto: ";
}

pre:nth-of-type(5) {
  overflow: clip;
  overflow: overlay;
  overflow-clip-margin: 3em;
}
pre:nth-of-type(5)::before {
  content: "overlay (or clip if not supported): ";
}

pre:nth-of-type(6) {
  overflow: visible;
}
pre:nth-of-type(6)::before {
  content: "visible: ";
}
```

### Résultat

{{EmbedLiveSample("Exemples", "500", "800")}}

Pour observer l'effet de la sélection clavier sur le débordement et le défilement, utilisez la touche Tab pour parcourir tous les liens de l'exemple. Remarquez que la boîte `clip` ne crée pas de conteneur de défilement et que le lien ne devient pas visible lorsqu'il est sélectionné. La valeur `visible`, qui garde le lien toujours en vue, n'est pas non plus un conteneur de défilement.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Propriétés utilisant ce type de données&nbsp;: {{CSSxRef("overflow-x")}}, {{CSSxRef("overflow-y")}}, {{CSSxRef("overflow-inline")}}, {{CSSxRef("overflow-block")}} et {{CSSxRef("overflow")}}
- Le module [d'overflow CSS](/fr/docs/Web/CSS/Guides/Overflow)
