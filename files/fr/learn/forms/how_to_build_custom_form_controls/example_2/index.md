---
title: Exemple 2
slug: Learn/Forms/How_to_build_custom_form_controls/Example_2
tags:
  - Formulaires
  - HTML
translation_of: Learn/Forms/How_to_build_custom_form_controls/Example_2
original_slug: >-
  Web/Guide/HTML/Formulaires/Comment_construire_des_widgets_de_formulaires_personnalisés/Exemple_2
---
<p>Ceci est le deuxième exemple expliquant comment <a href="/fr/docs/HTML/Forms/How_to_build_custom_form_widgets" title="/en-US/docs/HTML/Forms/How_to_build_custom_form_widgets">construire un formulaire personnalisé</a>.</p>

<h2 id="JS">JS</h2>

<h3 id="HTML_Content">HTML Content</h3>

<pre class="brush: html">&lt;form class="no-widget"&gt;
  &lt;select name="myFruit"&gt;
      &lt;option&gt;Cerise&lt;/option&gt;
      &lt;option&gt;Citron&lt;/option&gt;
      &lt;option&gt;Banane&lt;/option&gt;
      &lt;option&gt;Fraise&lt;/option&gt;
      &lt;option&gt;Pomme&lt;/option&gt;
  &lt;/select&gt;

  &lt;div class="select"&gt;
    &lt;span class="value"&gt;Cerise&lt;/span&gt;
    &lt;ul class="optList hidden"&gt;
      &lt;li class="option"&gt;Cerise&lt;/li&gt;
      &lt;li class="option"&gt;Citron&lt;/li&gt;
      &lt;li class="option"&gt;Banane&lt;/li&gt;
      &lt;li class="option"&gt;Fraise&lt;/li&gt;
      &lt;li class="option"&gt;Pomme&lt;/li&gt;
    &lt;/ul&gt;
  &lt;/div&gt;
&lt;form&gt;
</pre>

<h3 id="CSS_Content">CSS Content</h3>

<pre class="brush: css">.widget select,
.no-widget .select {
  position : absolute;
  left     : -5000em;
  height   : 0;
  overflow : hidden;
}

/* --------------- */
/* Styles requis   */
/* --------------- */

.select {
  position: relative;
  display : inline-block;
}

.select.active,
.select:focus {
  box-shadow: 0 0 3px 1px #227755;
  outline: none;
}

.select .optList {
  position: absolute;
  top     : 100%;
  left    : 0;
}

.select .optList.hidden {
  max-height: 0;
  visibility: hidden;
}

/* ------------ */
/* Styles décor */
/* ------------ */

.select {
  font-size   : 0.625em; /* 10px */
  font-family : Verdana, Arial, sans-serif;

  -moz-box-sizing : border-box;
  box-sizing : border-box;

  padding : 0.1em 2.5em 0.2em 0.5em; /* 1px 25px 2px 5px */
  width   : 10em; /* 100px */

  border        : 0.2em solid #000; /* 2px */
  border-radius : 0.4em; /* 4px */

  box-shadow : 0 0.1em 0.2em rgba(0,0,0,.45); /* 0 1px 2px */

  background : #F0F0F0;
  background : -webkit-linear-gradient(90deg, #E3E3E3, #fcfcfc 50%, #f0f0f0);
  background : linear-gradient(0deg, #E3E3E3, #fcfcfc 50%, #f0f0f0);
}

.select .value {
  display  : inline-block;
  width    : 100%;
  overflow : hidden;

  white-space   : nowrap;
  text-overflow : ellipsis;
  vertical-align: top;
}

.select:after {
  content : "▼";
  position: absolute;
  z-index : 1;
  height  : 100%;
  width   : 2em; /* 20px */
  top     : 0;
  right   : 0;

  padding-top : .1em;

  -moz-box-sizing : border-box;
  box-sizing : border-box;

  text-align : center;

  border-left  : .2em solid #000;
  border-radius: 0 .1em .1em 0;

  background-color : #000;
  color : #FFF;
}

.select .optList {
  z-index : 2;

  list-style: none;
  margin : 0;
  padding: 0;

  background: #f0f0f0;
  border: .2em solid #000;
  border-top-width : .1em;
  border-radius: 0 0 .4em .4em;

  box-shadow: 0 .2em .4em rgba(0,0,0,.4);

  -moz-box-sizing : border-box;
  box-sizing : border-box;

  min-width : 100%;
  max-height: 10em; /* 100px */
  overflow-y: auto;
  overflow-x: hidden;
}

.select .option {
  padding: .2em .3em;
}

.select .highlight {
  background: #000;
  color: #FFFFFF;
}</pre>

<h3 id="Contenu_JavaScript">Contenu JavaScript</h3>

<pre class="brush: js">window.addEventListener("load", function () {
  var form = document.querySelector('form');

  form.classList.remove("no-widget");
  form.classList.add("widget");
});</pre>

<h3 id="Résultat_avec_JavaScript">Résultat avec JavaScript</h3>

<p>{{ EmbedLiveSample('JS', 120, 130) }}</p>

<h2 id="No_JS">Sans JS</h2>

<h3 id="HTML_Content_2">HTML Content</h3>

<pre class="brush: html">&lt;form class="no-widget"&gt;
  &lt;select name="myFruit"&gt;
      &lt;option&gt;Cerise&lt;/option&gt;
      &lt;option&gt;Citron&lt;/option&gt;
      &lt;option&gt;Banane&lt;/option&gt;
      &lt;option&gt;Fraise&lt;/option&gt;
      &lt;option&gt;Pomme&lt;/option&gt;
  &lt;/select&gt;

  &lt;div class="select"&gt;
    &lt;span class="value"&gt;Cerise&lt;/span&gt;
    &lt;ul class="optList hidden"&gt;
      &lt;li class="option"&gt;Cerise&lt;/li&gt;
      &lt;li class="option"&gt;Citron&lt;/li&gt;
      &lt;li class="option"&gt;Banane&lt;/li&gt;
      &lt;li class="option"&gt;Fraise&lt;/li&gt;
      &lt;li class="option"&gt;Pomme&lt;/li&gt;
    &lt;/ul&gt;
  &lt;/div&gt;
&lt;form&gt;</pre>

<h3 id="CSS_Content_2">CSS Content</h3>

<pre class="brush: css">.widget select,
.no-widget .select {
  position : absolute;
  left     : -5000em;
  height   : 0;
  overflow : hidden;
}</pre>

<h3 id="Result_for_No_JS">Result for No JS</h3>

<p>{{ EmbedLiveSample('No_JS', 120, 130) }}</p>

<p> </p>
