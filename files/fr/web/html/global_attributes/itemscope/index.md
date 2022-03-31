---
title: itemscope
slug: Web/HTML/Global_attributes/itemscope
tags:
  - Attribut
  - Attribut universel
  - HTML
  - Micro-données
  - Microdata
  - Reference
translation_of: Web/HTML/Global_attributes/itemscope
original_slug: Web/HTML/Attributs_universels/itemscope
---
{{HTMLSidebar("Global_attributes")}}

L'[attribut universel](/fr/docs/Web/HTML/Attributs_universels) **`itemscope`** fonctionne généralement avec l'attribut `itemtype` afin d'indiquer qu'un bloc HTML contient un objet donné. `itemscope` crée l'objet et définit la portée de l'`itemtype` associé. Il est possible d'associer un attribut `itemscope` à n'importe quel élément HTML.

### Les identifiants rattachés à `itemscope`

Un élément qui possède un attribut `itemscope` permet de définir un nouvel élément qui sera un groupe de paires de noms/valeurs. Les éléments qui ont un attribut `itemscope` et un attribut `itemtype` peuvent également définir un attribut `id` (à ne pas confondre avec `itemid)` pour identifier de façon unique l'élément sur le Web.

## Syntaxe

### Syntaxe formelle

    itemscope

## Exemple

Dans cet exemple, on a trois attributs `itemscopes`. Ces trois `itemscopes` définissent les portées respectives des `itemtypes` correspondants qui sont : Recipe, AggregateRating et NutritionInformation.

### HTML

```html
<div itemscope itemtype="https://schema.org/Recipe">
<h2 itemprop="name">Grandma's Holiday Apple Pie</h2>
<img itemprop="image" src="https://c1.staticflickr.com/1/30/42759561_8631e2f905_n.jpg" width="50" height="50"/>
<p>By <span itemprop="author" itemscope itemtype="https://schema.org/Person">
<span itemprop="name">Carol Smith</p></span>
</span>
<p>Published: <time datetime="2009-11-05" itemprop="datePublished">
November 5, 2009</p></time>
<span itemprop="description">This is my grandmother's apple pie recipe. I like to add a dash of nutmeg.<br></span>
 <span itemprop="aggregateRating" itemscope itemtype="https://schema.org/AggregateRating">
 <span itemprop="ratingValue">4.0</span> stars based on <span itemprop="reviewCount">35</span> reviews<br></span>
Prep time: <time datetime="PT30M" itemprop="prepTime">30 min<br></time>
 Cook time: <time datetime="PT1H" itemprop="cookTime">1 hour<br></time>
 Total time: <time datetime="PT1H30M" itemprop="totalTime">1 hour 30 min<br></time>
 Yield: <span itemprop="recipeYield">1 9" pie (8 servings)<br></span>
 <span itemprop="nutrition" itemscope itemtype="https://schema.org/NutritionInformation">
 Serving size: <span itemprop="servingSize">1 medium slice<br></span>
 Calories per serving: <span itemprop="calories">250 cal<br></span>
 Fat per serving: <span itemprop="fatContent">12 g<br></span>
</span>
<p>Ingredients:<br>
  <span itemprop="recipeIngredient">Thinly-sliced apples: 6 cups<br></span>
  <span itemprop="recipeIngredient">White sugar: 3/4 cup<br></span>
 ... </p>

Directions: <br>
  <div itemprop="recipeInstructions">
    1. Cut and peel apples<br>
    2. Mix sugar and cinnamon. Use additional sugar for tart apples. <br>
    ...
  </div>
</div>
```

### Structure des données

<table class="standard-table">
  <tbody>
    <tr>
      <td colspan="1" rowspan="14">itemscope</td>
      <td>itemtype</td>
      <td colspan="2" rowspan="1">Recipe</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>name:</td>
      <td>Grandma's Holiday Apple Pie</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>image:</td>
      <td>https://c1.staticflickr.com/1/30/42759561_8631e2f905_n.jpg</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>datePublished:</td>
      <td>2009-11-05</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>description:</td>
      <td>
        This is my grandmother's apple pie recipe. I like to add a dash of
        nutmeg.
      </td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>prepTime:</td>
      <td>PT30M</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>cookTime:</td>
      <td>PT1H</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>totalTime:</td>
      <td>PT1H30M</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>recipeYield:</td>
      <td>1 9" pie (8 servings)</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>recipeIngredient:</td>
      <td>Thinly-sliced apples: 6 cups</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>recipeIngredient:</td>
      <td>White sugar: 3/4 cup</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>recipeInstructions:</td>
      <td>
        1. Cut and peel apples 2. Mix sugar and cinnamon. Use additional sugar
        for tart apples .
      </td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td colspan="2" rowspan="1">author [Person]:</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>name:</td>
      <td>Carol Smith</td>
    </tr>
    <tr>
      <td colspan="1" rowspan="3">itemscope</td>
      <td>itemprop[itemtype]</td>
      <td colspan="2" rowspan="1">aggregateRating [AggregateRating]:</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>ratingValue:</td>
      <td>4.0</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>reviewCount:</td>
      <td>35</td>
    </tr>
    <tr>
      <td colspan="1" rowspan="4">itemscope</td>
      <td>itemprop[itemtype]</td>
      <td colspan="2" rowspan="1">nutrition [NutritionInformation]:</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>servingSize:</td>
      <td>1 medium slice</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>calories:</td>
      <td>250 cal</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>fatContent:</td>
      <td>12 g</td>
    </tr>
  </tbody>
</table>

> **Note :** Pour extraire des micro-données d'un document HTML, vous pouvez utiliser [l'outil d'extraction de Google pour les micro-données.](https://developers.google.com/structured-data/testing-tool/) Vous pouvez par exemple utiliser le document HTML précédent.

## Spécifications

| Spécification                                                                                    | État                                 | Commentaires |
| ------------------------------------------------------------------------------------------------ | ------------------------------------ | ------------ |
| {{SpecName('HTML Microdata', "#dfn-itemscope", "itemscope")}}                 | {{Spec2('HTML Microdata')}} |              |
| {{SpecName('HTML WHATWG', "microdata.html#attr-itemscope", "itemscope")}} | {{Spec2('HTML WHATWG')}}     |              |

## Compatibilité des navigateurs

{{Compat("html.global_attributes.itemscope")}}

## Voir aussi

- [Les différents attributs universels](/fr/docs/Web/HTML/Attributs_universels)
- Les autres attributs universels relatifs aux microdonnées :

  - {{htmlattrxref("itemid")}}
  - {{htmlattrxref("itemprop")}}
  - {{htmlattrxref("itemref")}}
  - {{htmlattrxref("itemscope")}}
  - {{htmlattrxref("itemtype")}}
