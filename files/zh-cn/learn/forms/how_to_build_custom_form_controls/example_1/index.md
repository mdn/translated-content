---
title: Example 1
slug: Learn/Forms/How_to_build_custom_form_controls/Example_1
tags:
  - HTML
  - 表单
translation_of: Learn/Forms/How_to_build_custom_form_controls/Example_1
original_slug: Learn/HTML/Forms/How_to_build_custom_form_widgets/Example_1
---
<p>这是第一个<a href="/en-US/docs/Web/Guide/HTML/Forms/How_to_build_custom_form_widgets">如果构建自定义表单小部件</a>的代码解释事例。</p>

<h2 id="Basic_state">基本状态</h2>

<h3 id="Basic_state_HTML">HTML</h3>

<pre class="brush: html">&lt;div class="select"&gt;
  &lt;span class="value"&gt;Cherry&lt;/span&gt;
  &lt;ul class="optList hidden"&gt;
    &lt;li class="option"&gt;Cherry&lt;/li&gt;
    &lt;li class="option"&gt;Lemon&lt;/li&gt;
    &lt;li class="option"&gt;Banana&lt;/li&gt;
    &lt;li class="option"&gt;Strawberry&lt;/li&gt;
    &lt;li class="option"&gt;Apple&lt;/li&gt;
  &lt;/ul&gt;
&lt;/div&gt;</pre>

<h3 id="Basic_state_CSS">CSS</h3>

<pre class="brush: css">/* --------------- */
/* Required Styles */
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
/* Fancy Styles */
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

<h3 id="基本状态结果">基本状态结果</h3>

<div>{{ EmbedLiveSample('Basic_state', 120, 130) }}</div>

<h2 id="Active_state">活动状态</h2>

<h3 id="Active_state_HTML">HTML</h3>

<pre class="brush:html">&lt;div class="select active"&gt;
  &lt;span class="value"&gt;Cherry&lt;/span&gt;
  &lt;ul class="optList hidden"&gt;
    &lt;li class="option"&gt;Cherry&lt;/li&gt;
    &lt;li class="option"&gt;Lemon&lt;/li&gt;
    &lt;li class="option"&gt;Banana&lt;/li&gt;
    &lt;li class="option"&gt;Strawberry&lt;/li&gt;
    &lt;li class="option"&gt;Apple&lt;/li&gt;
  &lt;/ul&gt;
&lt;/div&gt;</pre>

<h3 id="Active_state_CSS">CSS</h3>

<pre class="brush:css">/* --------------- */
/* Required Styles */
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
/* Fancy Styles */
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

<h3 id="活动状态结果">活动状态结果</h3>

<div>{{ EmbedLiveSample('Active_state', 120, 130) }}</div>

<h2 id="Open_state">展开状态</h2>

<h3 id="Open_state_HTML">HTML</h3>

<pre class="brush:html">&lt;div class="select active"&gt;
  &lt;span class="value"&gt;Cherry&lt;/span&gt;
  &lt;ul class="optList"&gt;
    &lt;li class="option highlight"&gt;Cherry&lt;/li&gt;
    &lt;li class="option"&gt;Lemon&lt;/li&gt;
    &lt;li class="option"&gt;Banana&lt;/li&gt;
    &lt;li class="option"&gt;Strawberry&lt;/li&gt;
    &lt;li class="option"&gt;Apple&lt;/li&gt;
  &lt;/ul&gt;
&lt;/div&gt;</pre>

<h3 id="Open_state_CSS">CSS</h3>

<pre class="brush:css">/* --------------- */
/* Required Styles */
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
/* Fancy Styles */
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

<h3 id="展开状态结果">展开状态结果</h3>

<div>{{ EmbedLiveSample('Open_state', 120, 130) }}</div>
