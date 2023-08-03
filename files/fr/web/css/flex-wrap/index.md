---
title: flex-wrap
slug: Web/CSS/flex-wrap
---

{{CSSRef}}

La propriété **`flex-wrap`** indique si les éléments flexibles sont contraints à être disposés sur une seule ligne ou s'ils peuvent être affichés sur plusieurs lignes avec un retour automatique. Si le retour à la ligne est autorisé, la propriété permet également de contrôler la direction dans laquelle les lignes sont empilées.

{{EmbedInteractiveExample("pages/css/flex-wrap.html")}}

Pour plus d'informations, voir la page [Utiliser les boîtes flexibles (_flexbox_) CSS](/fr/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox).

## Syntaxe

```css
/* Valeurs avec un mot-clé */
flex-wrap: nowrap; /* Valeur par défaut */
flex-wrap: wrap;
flex-wrap: wrap-reverse;

/* Valeurs globales */
flex-wrap: inherit;
flex-wrap: initial;
flex-wrap: unset;
```

La propriété `flex-wrap` peut être défini grâce à l'un des mots-clés suivants.

### Valeurs

- `nowrap`
  - : Les éléments flexibles sont disposés sur une seule ligne. Cela peut entraîner un dépassement du conteneur. La ligne **cross-start** est équivalente à **start** ou à **before** selon la valeur de {{cssxref("flex-direction")}}. Cette valeur est la valeur par défaut.
- `wrap`
  - : Les éléments flexibles sont disposé sur plusieurs lignes. La ligne **cross-start** est équivalente à **start** ou **before** en fonction de la valeur de `flex-direction` et la ligne **cross-end** est à l'opposée **cross-start**.
- `wrap-reverse`
  - : Se comporte comme `wrap` mais **cross-start** et **cross-end** sont permutées.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### HTML

```html
<h4>Un exemple de flex-wrap:wrap</h4>
<div class="contenu">
  <div class="rouge">1</div>
  <div class="vert">2</div>
  <div class="bleu">3</div>
</div>

<h4>Un exemple de flex-wrap:nowrap</h4>
<div class="contenu1">
  <div class="rouge">1</div>
  <div class="vert">2</div>
  <div class="bleu">3</div>
</div>

<h4>Un exemple de flex-wrap:wrap-reverse</h4>
<div class="contenu2">
  <div class="rouge">1</div>
  <div class="vert">2</div>
  <div class="bleu">3</div>
</div>
```

### CSS

```css
.contenu,
.contenu1,
.contenu2 {
  color: #fff;
  font: 100 24px/100px sans-serif;
  height: 150px;
  width: 897px;
  text-align: center;
}

.contenu div,
.contenu1 div,
.contenu2 div {
  height: 50%;
  width: 300px;
}
.rouge {
  background: orangered;
}
.vert {
  background: yellowgreen;
}
.bleu {
  background: steelblue;
}

/* Styles pour les boîtes flexibles*/
.contenu {
  display: flex;
  flex-wrap: wrap;
}
.contenu1 {
  display: flex;
  flex-wrap: nowrap;
}
.contenu2 {
  display: flex;
  flex-wrap: wrap-reverse;
}
```

### Résultat

{{EmbedLiveSample('Exemples', '700px', '700px')}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Guide sur les boîtes flexibles : _[Les concepts de bases](/fr/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox)_
- Guide sur les boîtes flexibles : _[Maîtriser le retour à la ligne des éléments flexibles](/fr/docs/Web/CSS/CSS_Flexible_Box_Layout/Mastering_Wrapping_of_Flex_Items)_
