---
title: CSS Layout cookbook
slug: Web/CSS/Layout_cookbook
tags:
  - CSS
  - Layout
  - NeedsTranslation
  - TopicStub
  - cookbook
  - recipes
translation_of: Web/CSS/Layout_cookbook
---
<div>{{CSSRef}}<br>
Книга рецептов CSS объединяет примеры большинства наиболее распространённых лейаут паттернов, которые могу встретиться вам при разработке веб-сайтов.<br>
<br>
В дополнение к представленным примерам кода, - которые вы вполне можете использовать в качестве отправной точки для своих проектов, - эти рецепты иллюстрируют нестандартные способы применения существующих лейаут (layout) спецификаций. Паттерны, представленные ниже, должны помочь вам увидеть новые варианты решения проблем, встречающихся в жизни разработчика.</div>

<div><br>
<strong>Примечание.</strong> Если вы новичок в в работе с CSS, то сначала вы можете взглянуть на наш модуль обучения макетам CSS, так как он даст вам базовые знания, необходимые для использования приведённых здесь рецептов.</div>

<h2 id="The_Recipes">The Recipes</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Recipe</th>
   <th scope="col">Description</th>
   <th scope="col">Layout Methods</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td><a href="/en-US/docs/Web/CSS/Layout_cookbook/Media_objects">Media Objects</a></td>
   <td>A two-column box with an image on one side and descriptive text on the other, e.g. a facebook post or tweet.</td>
   <td><a href="/en-US/docs/Web/CSS/CSS_Grid_Layout">CSS Grid</a>, {{cssxref("float")}} fallback, {{cssxref("fit-content")}} sizing</td>
  </tr>
  <tr>
   <td><a href="/en-US/docs/Web/CSS/Layout_cookbook/Column_layouts">Columns</a></td>
   <td>When to choose multi-column layout, flexbox or grid for your columns</td>
   <td><a href="/en-US/docs/Web/CSS/CSS_Grid_Layout">CSS Grid</a>, <a href="/en-US/docs/Web/CSS/CSS_Columns">Multicol</a>, <a href="/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout">Flexbox</a></td>
  </tr>
  <tr>
   <td><a href="/en-US/docs/Web/CSS/Layout_cookbook/Center_an_element">Center an element</a></td>
   <td>How to center an item horizontally and vertically</td>
   <td><a href="/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout">Flexbox</a>, <a href="/en-US/docs/Web/CSS/CSS_Box_Alignment">Box Alignment</a></td>
  </tr>
  <tr>
   <td><a href="/en-US/docs/Web/CSS/Layout_cookbook/Sticky_footers">Sticky footers</a></td>
   <td>Creating a footer which sits at the bottom of the container or viewport when the content is shorter. </td>
   <td><a href="/en-US/docs/Web/CSS/CSS_Grid_Layout">CSS Grid</a>, <a href="/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout">Flexbox</a></td>
  </tr>
  <tr>
   <td><a href="/en-US/docs/Web/CSS/Layout_cookbook/Split_Navigation">Split Navigation</a></td>
   <td>A navigation pattern where some links are visually separated from the others.</td>
   <td><a href="/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout">Flexbox</a>, {{cssxref("margin")}}</td>
  </tr>
  <tr>
   <td><a href="/en-US/docs/Web/CSS/Layout_cookbook/Breadcrumb_Navigation">Breadcrumb Navigation</a></td>
   <td>Creating a list of links to allow the visitor to navigate back up through the page hierarchy.</td>
   <td><a href="/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout">Flexbox</a></td>
  </tr>
 </tbody>
</table>

<h2 id="Contribute_a_Recipe">Contribute a Recipe</h2>

<p>As with all of MDN we would love you to contribute a recipe in the same format as the ones shown above. <a href="/en-US/docs/user:chrisdavidmills/Layout_Cookbook_Home/Contribute_a_recipe">See this page</a> for a template and guidelines for writing your own example.</p>
