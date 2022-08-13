---
title: itemscope
slug: Web/HTML/Global_attributes/itemscope
tags:
  - Ejemplo
  - itemscope
  - itemtype
translation_of: Web/HTML/Global_attributes/itemscope
original_slug: Web/HTML/Atributos_Globales/itemscope
---
<div>{{HTMLSidebar("Global_attributes")}}</div>

<p><code><strong>itemscope</strong></code> es un <a href="/en-US/docs/Web/HTML/Global_attributes">atributo global</a> booleano que define el scope asociado del metadata. Especificando el atributo <code><strong>itemscope</strong></code> en un elemento crea un nuevo item, cuyos resultados estan en los numeros de pares name-value asociados con el elemento. Un atributo relativo, {{htmlattrxref("itemtype")}}, es usado para especificar el URL valido de un medio/recipe (como lo es <a href="http://schema.org/">schema.org</a>) que describe que el item es de propiedad contextual. En cada uno de los siguientes ejemplos, el medio/recipe es de <a href="https://schema.org/">schema.org</a>.</p>

<p>Todos los elementos HTML pueden tener un atributo <code>itemscope</code> especifico. Un elemento <code>itemscope</code> no tiene un asociado <code>itemtype</code> pero tiene un sociado <code>itemref</code>.</p>

<div class="note">
<p><strong>Nota:</strong> Encuentra mas acerca del atributo <code>itemtype</code> en <a href="http://schema.org/Thing">http://schema.org/Thing</a></p>
</div>

<h3 id="Ejemplo_simple">Ejemplo simple</h3>

<h4 id="HTML">HTML</h4>

<p>El siguiente ejemplo especifica que el atributo <code>itemscope</code>. El ejemplo especificado en el <code>itemtype</code> es "http://schema.org/Movie", y especifica tres atributos <code>itemprop</code> relativos.</p>

<pre class="brush:html">&lt;div itemscope itemtype="http://schema.org/Movie"&gt;
  &lt;h1 itemprop="nombre"&gt;Avatar&lt;/h1&gt;
  &lt;span&gt;Director: &lt;span itemprop="director"&gt;James Cameron&lt;/span&gt; (born August 16, 1954)&lt;/span&gt;
  &lt;span itemprop="genero"&gt;Ciencia ficcion&lt;/span&gt;
  &lt;a href="https://youtu.be/0AY1XIkX7bY" itemprop="trailer"&gt;Trailer&lt;/a&gt;
&lt;/div&gt;
</pre>

<h4 id="sect1"> </h4>

<h4 id="Esctructura_de_informacion">Esctructura de informacion</h4>

<p>La siguiente tabla muestran los datos esctructurados mostrados en el anterior ejemplo.</p>

<p> </p>

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

<h3 id="itemscope_Atributos_ID"><code>itemscope</code> Atributos ID</h3>

<p>Cuando especificas el atributo <code>itemscope</code> para un elemento, un nuevo item es creado. El item consiste de un grupo de pares de name-value. Para elementos con un atributo <code>itemscope</code> y un atributo <code>itemtype</code>, podrias tambien especificar un {{htmlattrxref("id")}} attribute. Puedes usar el atributo <code>id</code> para establecer un identificador global para el nuevo item. Un identificador global permite que los items relativos a otros items encuentren paginas atraves de la Web.</p>

<h3 id="Ejemplo">Ejemplo</h3>

<p>Hay 4 atributos <code>itemscope</code> en el siguiente ejemplo. Cada atributo <code>itemscope</code> establecen el scope correspondiente a sus atributos <code>itemtype</code>. El <code>itemtype</code>s, <code>Recipe</code>, <code>AggregateRating</code>, y <code>NutritionInformation</code> en el siguiente ejemplo son parte de la informacion estructura por medio de <a href="www.schema.org">schema.org</a>, se especifico el primer <code>itemtype</code>, http://schema.org/Recipe.</p>

<pre class="brush: html">&lt;div itemscope itemtype="http://schema.org/Recipe"&gt;
&lt;h2 itemprop="name"&gt;Grandma's Holiday Apple Pie&lt;/h2&gt;
&lt;img itemprop="image" src="https://c1.staticflickr.com/1/30/42759561_8631e2f905_n.jpg" width="50" height="50"/&gt;
&lt;p&gt;By &lt;span itemprop="author" itemscope itemtype="http://schema.org/Person"&gt;
&lt;span itemprop="name"&gt;Carol Smith&lt;/p&gt;&lt;/span&gt;
&lt;/span&gt;
&lt;p&gt;Published: &lt;time datetime="2009-11-05" itemprop="datePublished"&gt;
November 5, 2009&lt;/p&gt;&lt;/time&gt;
&lt;span itemprop="description"&gt;This is my grandmother's apple pie recipe. I like to add a dash of nutmeg.&lt;br&gt;&lt;/span&gt;
 &lt;span itemprop="aggregateRating" itemscope itemtype="http://schema.org/AggregateRating"&gt;
 &lt;span itemprop="ratingValue"&gt;4.0&lt;/span&gt; stars based on &lt;span itemprop="reviewCount"&gt;35&lt;/span&gt; reviews&lt;br&gt;&lt;/span&gt;
Prep time: &lt;time datetime="PT30M" itemprop="prepTime"&gt;30 min&lt;br&gt;&lt;/time&gt;
 Cook time: &lt;time datetime="PT1H" itemprop="cookTime"&gt;1 hour&lt;br&gt;&lt;/time&gt;
 Total time: &lt;time datetime="PT1H30M" itemprop="totalTime"&gt;1 hour 30 min&lt;br&gt;&lt;/time&gt;
 Yield: &lt;span itemprop="recipeYield"&gt;1 9" pie (8 servings)&lt;br&gt;&lt;/span&gt;
 &lt;span itemprop="nutrition" itemscope itemtype="http://schema.org/NutritionInformation"&gt;
 Serving size: &lt;span itemprop="servingSize"&gt;1 medium slice&lt;br&gt;&lt;/span&gt;
 Calories per serving: &lt;span itemprop="calories"&gt;250 cal&lt;br&gt;&lt;/span&gt;
 Fat per serving: &lt;span itemprop="fatContent"&gt;12 g&lt;br&gt;&lt;/span&gt;
&lt;/span&gt;
&lt;p&gt;Ingredients:&lt;br&gt;
  &lt;span itemprop="recipeIngredient"&gt;Thinly-sliced apples: 6 cups&lt;br&gt;&lt;/span&gt;
  &lt;span itemprop="recipeIngredient"&gt;White sugar: 3/4 cup&lt;br&gt;&lt;/span&gt;
 ... &lt;/p&gt;

Directions: &lt;br&gt;
  &lt;div itemprop="recipeInstructions"&gt;
    1. Cut and peel apples&lt;br&gt;
    2. Mix sugar and cinnamon. Use additional sugar for tart apples. &lt;br&gt;
    ...
  &lt;/div&gt;
&lt;/div&gt; </pre>

<h3 id="Resultados">Resultados</h3>

<h4 id="HTML_2">HTML</h4>

<p>Los siguientes son un ejemplo renderizado resultado del codigo del anterior ejemplo.</p>

<p>{{EmbedLiveSample('Example', '500', '550', '', 'Web/HTML/Global_attributes/itemscope')}}</p>

<h4 id="Structured_data">Structured data</h4>

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
   <td>This is my grandmother's apple pie recipe. I like to add a dash of nutmeg.</td>
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
   <td>1. Cut and peel apples 2. Mix sugar and cinnamon. Use additional sugar for tart apples .</td>
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

<div class="note">
<p><strong>Note</strong>: Una herramienta practica para extraer estructuras microdata del HTML es<a href="https://developers.google.com/structured-data/testing-tool/"> Structured Data Testing Tool</a> de Google. Pruebalo en el HTML del ejemplo anterior.</p>
</div>

<h2 id="Especificaciones">Especificaciones</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Especificaciones</th>
   <th scope="col">Estados</th>
   <th scope="col">Comentario</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('HTML Microdata', "#dfn-itemscope", "itemscope")}}</td>
   <td>{{Spec2('HTML Microdata')}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName('HTML WHATWG', "microdata.html#attr-itemscope", "itemscope")}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Navegadores_compatibles">Navegadores compatibles</h2>



<p>{{Compat("html.global_attributes.itemscope")}}</p>

<h2 id="Ver_tambien">Ver tambien</h2>

<ul>
 <li><a href="/en-US/docs/Web/HTML/Global_attributes">Otros atributos globales diferentes</a></li>
 <li>Otro, microdata relativo, atributos globales:
  <ul>
   <li>{{htmlattrxref("itemid")}}</li>
   <li>{{htmlattrxref("itemprop")}}</li>
   <li>{{htmlattrxref("itemref")}}</li>
   <li>{{htmlattrxref("itemscope")}}</li>
   <li>{{htmlattrxref("itemtype")}}</li>
  </ul>
 </li>
</ul>
