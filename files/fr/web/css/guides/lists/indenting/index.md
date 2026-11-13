---
title: Indentation homogène des listes
short-title: Indenter les listes
slug: Web/CSS/Guides/Lists/Indenting
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

L'une des modifications de style les plus courantes apportées aux listes consiste à modifier la distance d'indentation, c'est-à-dire la distance à laquelle les éléments de la liste sont décalés vers la droite. Cet article vous aide à comprendre comment indenter les éléments d'une liste afin que leurs marqueurs soient visibles.

Pour comprendre pourquoi il en est ainsi, et surtout comment éviter ce problème, il est nécessaire d'examiner en détail la structure d'une liste.

## Créer une liste

### Élément de liste autonome

Tout d'abord, nous considérons l'élément de liste pur, non imbriqué dans une liste d'éléments. Lors de l'utilisation de l'élément HTML {{HTMLElement("li")}}, le navigateur définit la valeur de {{CSSxRef("display")}} sur `list-item`. Le fait que les éléments de liste non imbriqués dans une liste reçoivent un marqueur (également appelé «&nbsp;puce&nbsp;») dépend du navigateur. Nous pouvons supprimer cette puce avec {{CSSxRef("list-style-type", "list-style-type: none")}}.

```css
li {
  border: 1px dashed red;
}
li:nth-of-type(n + 4) {
  list-style-type: none;
}
```

```css hidden
li {
  width: 15em;
}
```

```html hidden
<p>Puce par défaut selon le navigateur&nbsp;:</p>
<li>Un élément de la liste</li>
<li>Un élément de la liste</li>
<li>Un élément de la liste</li>
<p>Ces éléments de liste ont leurs puces supprimées&nbsp;:</p>
<li>Un élément de la liste</li>
<li>Un élément de la liste</li>
<li>Un élément de la liste</li>
```

{{EmbedLiveSample("Élément de liste autonome", "100%", 230)}}

Cette bordure rouge en pointillés représente les bords extérieurs de la zone de contenu de chaque élément de liste. À ce stade, les éléments de liste n'ont ni remplissage, ni bordures.

### Éléments de liste imbriqués

Maintenant, nous les enveloppons dans un élément parent&nbsp;; dans ce cas, nous les enveloppons dans une liste non ordonnée (c'est-à-dire `<ul>`). Selon le modèle de boîte CSS, les boîtes des éléments de liste doivent être affichées dans la zone de contenu de l'élément parent.

```css
ul {
  border: 1px dashed blue;
}
li {
  border: 1px dashed red;
  list-style-type: none;
}
```

```css hidden
body {
  width: 15em;
}
```

```html hidden
<ul>
  <li>Un élément de la liste</li>
  <li>Un élément de la liste</li>
  <li>Un élément de la liste</li>
</ul>
```

{{EmbedLiveSample("Éléments de liste imbriqués", "100%", 100)}}

La bordure bleue en pointillés nous montre les bords de la zone de contenu de l'élément `<ul>`. Cet élément parent est doté à la fois de marges et de remplissage. Les navigateurs appliquent les styles par défaut suivants aux listes non ordonnées&nbsp;:

```css
ul {
  /* styles de l'agent utilisateur */
  display: block;
  list-style-type: disc;
  margin-block-start: 1em;
  margin-block-end: 1em;
  padding-inline-start: 40px;
}
```

### Position par défaut des puces

Maintenant, nous remettons les marqueurs des éléments de liste à leur place. Puisqu'il s'agit d'une liste non ordonnée, les éléments de liste héritent des styles du navigateur `list-style-type: disc;`, qui sont des «&nbsp;puces&nbsp;» en cercles remplis, de leur parent `<ul>`.

```css
li {
  border: 1px dashed red;
}
ul {
  border: 1px dotted blue;
}
ul:last-of-type {
  list-style-position: inside;
}
```

```css hidden
ul {
  width: 15em;
}
```

```html hidden
<p>C'est par défaut sur <code>list-style-position: outside</code>.</p>
<ul>
  <li>Un élément de la liste</li>
  <li>Un élément de la liste</li>
  <li>Un élément de la liste</li>
</ul>
<p>Ces listes ont <code>list-style-position: inside</code> défini.</p>
<ul>
  <li>Un élément de la liste</li>
  <li>Un élément de la liste</li>
  <li>Un élément de la liste</li>
</ul>
```

{{EmbedLiveSample("Position par défaut des puces", "100%", 250)}}

Visuellement, les marqueurs sont _en dehors_ de la zone de contenu du `<ul>`, mais ce n'est pas la partie importante ici. Ce qui est essentiel, c'est que les marqueurs sont placés en dehors de la «&nbsp;boîte principale&nbsp;» des éléments `<li>`, et non du `<ul>`. Ils sont un peu comme des appendices des éléments de liste, suspendus en dehors de la zone de contenu du `<li>` mais toujours attachés au `<li>`.

C'est pourquoi, dans tous les navigateurs modernes, les marqueurs sont placés en dehors de toute bordure définie pour un élément `<li>` lorsque la valeur de {{CSSxRef("list-style-position")}} est par défaut ou définie explicitement sur `outside`. Lorsque nous l'avons changé en `inside`, les marqueurs ont été placés à l'intérieur du contenu du `<li>`, comme s'il s'agit d'une boîte en incise placée au tout début du `<li>`.

## Indentation par défaut

Comme indiqué ci-dessus, tous les navigateurs fournissent à l'élément parent `<ul>` à la fois des marges et des remplissages. Bien que les CSS des agents utilisateurs diffèrent quelque peu, ils incluent tous&nbsp;:

```css
ul,
ol {
  /* styles de l'agent utilisateur */
  display: block;
  list-style-type: disc;
  margin-block-start: 1em;
  margin-block-end: 1em;
  padding-inline-start: 40px;
}
ol {
  list-style-type: decimal;
}
li {
  display: list-item;
  text-align: match-parent;
}
::marker {
  unicode-bidi: isolate;
  font-variant-numeric: tabular-nums;
  text-transform: none;
}
```

Tous les navigateurs définissent {{CSSxRef("padding-inline-start")}} à 40 pixels pour l'élément `<ul>` par défaut. Dans les langues de gauche à droite, comme le français, il s'agit du _remplissage_ gauche. Tout remplissage défini dans les feuilles de style de l'auteur·ice (c'est-à-dire votre feuille de style) prévaut.

Si vous voulez être explicite, définissez ce qui suit dans vos feuilles de style pour vous assurer, sauf indication contraire, que les éléments de liste dans la zone de contenu principale de votre document, contenue dans la section {{HTMLElement("main")}}, sont correctement indentés&nbsp;:

```css
:where(main ol, main ul) {
  margin-inline-start: 0;
  padding-inline-start: 40px;
}
```

Et imbriquez toujours vos éléments `<li>` dans un `<ul>` ou un `<ol>`.
