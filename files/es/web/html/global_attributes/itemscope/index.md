---
title: itemscope
slug: Web/HTML/Global_attributes/itemscope
---

{{HTMLSidebar("Global_attributes")}}

**`itemscope`** es un [atributo global](/es/docs/Web/HTML/Global_attributes) booleano que define el scope asociado del metadata. Especificando el atributo **`itemscope`** en un elemento crea un nuevo item, cuyos resultados estan en los numeros de pares name-value asociados con el elemento. Un atributo relativo, [`itemtype`](/es/docs/Web/HTML/Global_attributes#itemtype), es usado para especificar el URL valido de un medio/recipe (como lo es [schema.org](http://schema.org/)) que describe que el item es de propiedad contextual. En cada uno de los siguientes ejemplos, el medio/recipe es de [schema.org](https://schema.org/).

Todos los elementos HTML pueden tener un atributo `itemscope` especifico. Un elemento `itemscope` no tiene un asociado `itemtype` pero tiene un sociado `itemref`.

> **Nota:** Encuentra mas acerca del atributo `itemtype` en <http://schema.org/Thing>

### Ejemplo simple

#### HTML

El siguiente ejemplo especifica que el atributo `itemscope`. El ejemplo especificado en el `itemtype` es "http\://schema.org/Movie", y especifica tres atributos `itemprop` relativos.

```html
<div itemscope itemtype="http://schema.org/Movie">
  <h1 itemprop="nombre">Avatar</h1>
  <span
    >Director: <span itemprop="director">James Cameron</span> (born August 16,
    1954)</span
  >
  <span itemprop="genero">Ciencia ficcion</span>
  <a href="https://youtu.be/0AY1XIkX7bY" itemprop="trailer">Trailer</a>
</div>
```

#### Esctructura de informacion

La siguiente tabla muestran los datos esctructurados mostrados en el anterior ejemplo.

<table class="standard-table">
  <tbody>
    <tr>
      <td rowspan="6">itemscope</td>
      <td>Itemtype</td>
      <td colspan="2">Movie</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>(itemprop name)</td>
      <td>(itemprop value)</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>director</td>
      <td>James Cameron</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>genero</td>
      <td>Ciencia Ficcion</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>nombre</td>
      <td>Avatar</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>https://youtu.be/0AY1XIkX7bY</td>
      <td>Trailer</td>
    </tr>
  </tbody>
</table>

### `itemscope` Atributos ID

Cuando especificas el atributo `itemscope` para un elemento, un nuevo item es creado. El item consiste de un grupo de pares de name-value. Para elementos con un atributo `itemscope` y un atributo `itemtype`, podrias tambien especificar un [`id`](/es/docs/Web/HTML/Global_attributes#id) attribute. Puedes usar el atributo `id` para establecer un identificador global para el nuevo item. Un identificador global permite que los items relativos a otros items encuentren paginas atraves de la Web.

### Ejemplo

Hay 4 atributos `itemscope` en el siguiente ejemplo. Cada atributo `itemscope` establecen el scope correspondiente a sus atributos `itemtype`. El `itemtype`s, `Recipe`, `AggregateRating`, y `NutritionInformation` en el siguiente ejemplo son parte de la informacion estructura por medio de [schema.org](https://schema.org), se especifico el primer `itemtype`, `http://schema.org/Recipe`.

```html
<div itemscope itemtype="http://schema.org/Recipe">
<h2 itemprop="name">Grandma's Holiday Apple Pie</h2>
<img itemprop="image" src="https://c1.staticflickr.com/1/30/42759561_8631e2f905_n.jpg" width="50" height="50"/>
<p>By <span itemprop="author" itemscope itemtype="http://schema.org/Person">
<span itemprop="name">Carol Smith</p></span>
</span>
<p>Published: <time datetime="2009-11-05" itemprop="datePublished">
November 5, 2009</p></time>
<span itemprop="description">This is my grandmother's apple pie recipe. I like to add a dash of nutmeg.<br></span>
 <span itemprop="aggregateRating" itemscope itemtype="http://schema.org/AggregateRating">
 <span itemprop="ratingValue">4.0</span> stars based on <span itemprop="reviewCount">35</span> reviews<br></span>
Prep time: <time datetime="PT30M" itemprop="prepTime">30 min<br></time>
 Cook time: <time datetime="PT1H" itemprop="cookTime">1 hour<br></time>
 Total time: <time datetime="PT1H30M" itemprop="totalTime">1 hour 30 min<br></time>
 Yield: <span itemprop="recipeYield">1 9" pie (8 servings)<br></span>
 <span itemprop="nutrition" itemscope itemtype="http://schema.org/NutritionInformation">
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

Los siguientes son un ejemplo renderizado resultado del codigo del anterior ejemplo.

{{EmbedLiveSample('', '500', '550')}}

#### Structured data

<table class="standard-table">
  <tbody>
    <tr>
      <td colspan="1" rowspan="14">itemscope</td>
      <td>itemtype</td>
      <td colspan="2" rowspan="1">Medio/Recipe</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>name</td>
      <td>Grandma's Holiday Apple Pie</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>image</td>
      <td>https://c1.staticflickr.com/1/30/42759561_8631e2f905_n.jpg</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>datePublished</td>
      <td>2009-11-05</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>description</td>
      <td>
        This is my grandmother's apple pie recipe. I like to add a dash of
        nutmeg.
      </td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>prepTime</td>
      <td>PT30M</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>cookTime</td>
      <td>PT1H</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>totalTime</td>
      <td>PT1H30M</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>recipeYield</td>
      <td>1 9" pie (8 servings)</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>recipeIngredient</td>
      <td>Thinly-sliced apples: 6 cups</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>recipeIngredient</td>
      <td>White sugar: 3/4 cup</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>recipeInstructions</td>
      <td>
        1. Cut and peel apples 2. Mix sugar and cinnamon. Use additional sugar
        for tart apples .
      </td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td colspan="2" rowspan="1">author [Person]</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>name</td>
      <td>Carol Smith</td>
    </tr>
    <tr>
      <td colspan="1" rowspan="3">itemscope</td>
      <td>itemprop[itemtype]</td>
      <td colspan="2" rowspan="1">aggregateRating [AggregateRating]</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>ratingValue</td>
      <td>4.0</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>reviewCount</td>
      <td>35</td>
    </tr>
    <tr>
      <td colspan="1" rowspan="4">itemscope</td>
      <td>itemprop[itemtype]</td>
      <td colspan="2" rowspan="1">nutrition [NutritionInformation]</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>servingSize</td>
      <td>1 medium slice</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>calories</td>
      <td>250 cal</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>fatContent</td>
      <td>12 g</td>
    </tr>
  </tbody>
</table>

> **Nota:** Una herramienta practica para extraer estructuras microdata del HTML es [Structured Data Testing Tool](https://developers.google.com/structured-data/testing-tool/) de Google. Pruebalo en el HTML del ejemplo anterior.

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver tambien

- [Otros atributos globales diferentes](/es/docs/Web/HTML/Global_attributes)
- Otro, microdata relativo, atributos globales:

  - [`itemid`](/es/docs/Web/HTML/Global_attributes#itemid)
  - [`itemprop`](/es/docs/Web/HTML/Global_attributes#itemprop)
  - [`itemref`](/es/docs/Web/HTML/Global_attributes#itemref)
  - [`itemtype`](/es/docs/Web/HTML/Global_attributes#itemtype)
