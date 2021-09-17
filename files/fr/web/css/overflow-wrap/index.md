---
title: overflow-wrap
slug: Web/CSS/overflow-wrap
tags:
  - CSS
  - Propriété
  - Reference
translation_of: Web/CSS/overflow-wrap
---
{{CSSRef}}

La propriété **`overflow-wrap`** s'applique aux éléments en ligne (_inline_) et est utilisée afin de définir si le navigateur peut ou non faire la césure à l'intérieur d'un mot pour éviter le dépassement d'une chaîne qui serait trop longue afin qu'elle ne dépasse pas de la boîte.

{{EmbedInteractiveExample("pages/css/overflow-wrap.html")}}

> **Note :** À la différence de {{cssxref("word-break")}}, `overflow-wrap` créera uniquement un saut de ligne si un mot entier ne peut pas être placé sur sa propre ligne sans dépasser.

À l'origine, cette propriété était une extension non-standard sans préfixe de Microsoft et intitulée `word-wrap`. Implémentée sous ce nom par la plupart des navigateurs depuis, elle a été renommée en `overflow-wrap` et `word-wrap` est devenu un alias.

## Syntaxe

```css
/* Avec un mot-clé */
overflow-wrap: normal;
overflow-wrap: break-word;
overflow-wrap: anywhere;

/* Valeurs globales */
overflow-wrap: inherit;
overflow-wrap: initial;
overflow-wrap: unset;
```

La propriété `overflow-wrap` peut être définie avec l'un des mots-clés suivants.

### Valeurs

- `normal`
  - : Indique que la césure d'une ligne ne peut avoir lieu qu'aux positions de césures normales.
- `anywhere`
  - : Indique que la césure pourra avoir lieu afin d'éviter le dépassement, y compris s'il n'y a pas de point de césure acceptable sur la ligne. Cela est notamment utile pour éviter le dépassement et qu'on a une longue ligne (un long mot ou une URL). Aucun caractère ne sera ajouté au point de césure. Les possibilités de rupture douces ajoutées par la césure sont prises en compte lors du calcul des tailles `min-content` intrinsèques.
- `break-word`
  - : Indique que les mots qui ne subissent habituellement pas de césure peuvent être scindés à n'importe quelle position s'il n'y a pas d'autres positions envisageables pour la césure de la ligne. Les possibilités de rupture douces ajoutées par la césure **ne sont pas** prises en compte lors du calcul des tailles `min-content` intrinsèques.

### Syntaxe formelle

{{csssyntax}}

## Exemples

### CSS

```css
p {
  width: 13em;
  margin: 2px;
  background: gold;
}

.ow-anywhere {
  overflow-wrap: anywhere;
}

.ow-break-word {
  overflow-wrap: break-word;
}

.word-break {
  word-break: break-all;
}

.hyphens {
  -webkit-hyphens: auto;
  -ms-hyphens: auto;
  hyphens: auto;
}
```

### HTML

```html
<h3><code>normal</code></h3>
<p>They say the fishing is excellent at
  Lake <em class="normal">Chargoggagoggmanchauggagoggchaubunagungamaugg</em>,
  though I've never been there myself.</p>
<h3><code>overflow-wrap: anywhere</code></h3>
<p>They say the fishing is excellent at
  Lake <em class="ow-anywhere">Chargoggagoggmanchauggagoggchaubunagungamaugg</em>,
  though I've never been there myself.</p>
<h3><code>overflow-wrap: break-word</code></h3>
<p>They say the fishing is excellent at
  Lake <em class="ow-break-word">Chargoggagoggmanchauggagoggchaubunagungamaugg</em>,
  though I've never been there myself. </p>
<h3><code>word-break: break-all</code></h3>
<p>They say the fishing is excellent at
  Lake <em class="word-break">Chargoggagoggmanchauggagoggchaubunagungamaugg</em>,
  though I've never been there myself.</p>
<h3><code>hyphens: auto</code>, without <code>lang</code> attribute</h3>
<p class="hyphens">They say the fishing is excellent at
  Lake <em>Chargoggagoggmanchauggagoggchaubunagungamaugg</em>
  though I've never been there myself. </p>
<h3><code>hyphens: auto</code>, English rules</h3>
<p class="hyphens" lang="en">They say the fishing is excellent at
  Lake <em>Chargoggagoggmanchauggagoggchaubunagungamaugg</em>,
  though I've never been there myself.</p>
<h3><code>hyphens: auto</code>, German rules</h3>
<p class="hyphens" lang="de">They say the fishing is excellent at
  Lake <em>Chargoggagoggmanchauggagoggchaubunagungamaugg</em>,
  though I've never been there myself.</p>
```

### Résultat

{{EmbedLiveSample("Exemples", '100%', 520)}}

## Spécifications

| Spécification                                                                                | État                         | Commentaires        |
| -------------------------------------------------------------------------------------------- | ---------------------------- | ------------------- |
| {{SpecName('CSS3 Text', '#propdef-overflow-wrap', 'overflow-wrap')}} | {{Spec2('CSS3 Text')}} | Définition initiale |

{{cssinfo}}

## Compatibilité des navigateurs

{{Compat("css.properties.overflow-wrap")}}

## Voir aussi

- {{cssxref("word-break")}}
- {{cssxref("hyphens")}}
- {{cssxref("text-overflow")}}
