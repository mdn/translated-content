---
title: Exemple 1
slug: Learn/Forms/How_to_build_custom_form_controls/Example_1
tags:
  - Formulaires
  - Guide
  - HTML
translation_of: Learn/Forms/How_to_build_custom_form_controls/Example_1
original_slug: >-
  Web/Guide/HTML/Formulaires/Comment_construire_des_widgets_de_formulaires_personnalisés/Exemple_1
---
<p>C'est le premier exemple de code qui explique <a href="/fr/docs/Web/Guide/HTML/Forms/How_to_build_custom_form_widgets">comment construire un widget de formulaire personnalisé</a>.</p>

<h2 id="Basic_state">État initial</h2>

<h3 id="Basic_state_HTML">HTML</h3>

<pre class="brush: html">&lt;div class="select"&gt;
  &lt;span class="value"&gt;Cerise&lt;/span&gt;
  &lt;ul class="optList hidden"&gt;
    &lt;li class="option"&gt;Cerise&lt;/li&gt;
    &lt;li class="option"&gt;Citron&lt;/li&gt;
    &lt;li class="option"&gt;Banane&lt;/li&gt;
    &lt;li class="option"&gt;Fraise&lt;/li&gt;
    &lt;li class="option"&gt;Pomme&lt;/li&gt;
  &lt;/ul&gt;
&lt;/div&gt;</pre>

<h3 id="Basic_state_CSS">CSS</h3>

<pre class="brush: css">/* --------------- */
/* Styles Requis   */
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
/* Style  Chic  */
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
}
</pre>

<h3 id="Resultat_pour_l'état_initial">Resultat pour l'état initial</h3>

<div>{{ EmbedLiveSample("Basic_state", 120, 130) }}</div>

<h2 id="Active_state">État actif</h2>

<h3 id="Active_state_HTML">HTML</h3>

<pre class="brush:html">&lt;div class="select active"&gt;
  &lt;span class="value"&gt;Cerise&lt;/span&gt;
  &lt;ul class="optList hidden"&gt;
    &lt;li class="option"&gt;Cerise&lt;/li&gt;
    &lt;li class="option"&gt;Citron&lt;/li&gt;
    &lt;li class="option"&gt;Banane&lt;/li&gt;
    &lt;li class="option"&gt;Fraise&lt;/li&gt;
    &lt;li class="option"&gt;Pomme&lt;/li&gt;
  &lt;/ul&gt;
&lt;/div&gt;</pre>

<h3 id="Active_state_CSS">CSS</h3>

<pre class="brush:css">/* --------------- */
/* Styles Requis   */
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
/* Style  Chic  */
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

<h3 id="Résultat_pour_état_actif">Résultat pour état actif</h3>

<div>{{ EmbedLiveSample("Active_state", 120, 130) }}</div>

<h2 id="Open_state">État ouvert</h2>

<h3 id="Open_state_HTML">HTML</h3>

<pre class="brush:html">&lt;div class="select active"&gt;
  &lt;span class="value"&gt;Cerise&lt;/span&gt;
  &lt;ul class="optList"&gt;
    &lt;li class="option highlight"&gt;Cerise&lt;/li&gt;
    &lt;li class="option"&gt;Citron&lt;/li&gt;
    &lt;li class="option"&gt;Banane&lt;/li&gt;
    &lt;li class="option"&gt;Fraise&lt;/li&gt;
    &lt;li class="option"&gt;Pomme&lt;/li&gt;
  &lt;/ul&gt;
&lt;/div&gt;</pre>

<h3 id="Open_state_CSS">CSS</h3>

<pre class="brush:css">/* --------------- */
/* Styles Requis   */
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
/* Style  Chic  */
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

  box-shadow : 0 0.1em 0.2em rgba(0, 0, 0, .45); /* 0 1px 2px */

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
  color: #FFF;
}</pre>

<h3 id="Resultat_pour_état_ouvert">Resultat pour état ouvert</h3>

<div>{{ EmbedLiveSample("Open_state", 120, 130) }}</div>
