---
title: '-moz-user-input'
slug: Web/CSS/-moz-user-input
tags:
  - CSS
  - Non-standard
  - Propriété
  - Reference
translation_of: Web/CSS/-moz-user-input
---
<div>{{Non-standard_header}}{{CSSRef}}{{Deprecated_Header(60)}}</div>

<p>Pour les applications Mozilla, la propriété <strong><code>-moz-user-input</code></strong> détermine si l'utilisateur peut effectuer une saisie sur l'élément (bien que rejetée, cette propriété a contribué à la construction de la propriété standard {{cssxref("user-input")}}.</p>

<pre class="brush:css">/* Valeurs avec un mot-clé */
-moz-user-input: none;
-moz-user-input: enabled;
-moz-user-input: disabled;

/* Valeurs globales */
-moz-user-input: inherit;
-moz-user-input: initial;
-moz-user-input: unset;
</pre>

<p>Pour les éléments qui acceptent la saisie par défaut (ex. les élémetns {{HTMLElement("textarea")}}), la valeur initiale de <code>-moz-user-input</code> sera <code>enabled</code>.</p>

<h2 id="Syntaxe">Syntaxe</h2>

<h3 id="Valeurs">Valeurs</h3>

<dl>
 <dt><code>none</code></dt>
 <dd>L'élément ne réagit pas aux saisies de l'utilisateur et il ne prend jamais l'état {{cssxref(":active")}}.</dd>
 <dt><code>enabled</code></dt>
 <dd>L'utilisateur peut effectuer une saisie sur cet élément. Pour les boîtes de texte, c'est le comportement par défaut. <strong>Cette valeur n'est plus prise en charge à partir de Firefox 60 (cf. {{bug(1405087)}}).</strong></dd>
 <dt><code>disabled</code></dt>
 <dd>L'utilisateur ne peut pas effectuer de saisie sur cet élément (cela n'est pas équivalent à utiliser l'attribut {{XULAttr("disabled")}} avec la valeur <code>true</code> car l'élément est dessiné normalement). <strong>Cette valeur n'est plus prise en charge à partir de Firefox 60 (cf. {{bug(1405087)}}).</strong></dd>
</dl>

<h3 id="Syntaxe_formelle">Syntaxe formelle</h3>

{{csssyntax}}

<h2 id="Exemples">Exemples</h2>

<pre class="brush:css">input.exemple {
  /* L'utilisateur pourra sélectionner le texte
     mais ne pourra pas le modifier. */
  -moz-user-input: disabled;
}
</pre>

<h2 id="Spécifications">Spécifications</h2>

<p>Cette propriété est une propriété propriétaire liée à Gecko/Mozilla et ne fait partie d'aucune spécification. Une propriété similaire : <code>user-focus</code> a été <a href="https://www.w3.org/TR/2000/WD-css3-userint-20000216">proposée pour des brouillons de l'ancienne spécifications CSS3 pour les interfaces utilisateurs</a> mais a été rejetée par le groupe de travail.</p>

<p>{{cssinfo}}</p>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("css.properties.-moz-user-input")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{cssxref("-moz-user-focus")}}</li>
 <li>{{cssxref("-moz-user-modify")}}</li>
 <li>{{cssxref("-moz-user-select")}}</li>
</ul>
