---
title: CSSStyleRule
slug: Web/API/CSSStyleRule
translation_of: Web/API/CSSStyleRule
---
<p>{{ APIRef("CSSOM") }}</p>

<p>CSSStyleRule représente une règle de style CSS unique. Il implémente l'interface {{domxref ("CSSRule")}} avec une valeur de type 1 (CSSRule STYLE_RULE).</p>

<h2 id="Syntax">Syntax</h2>

<p>La syntaxe est décrite à l'aide du format WebIDL.</p>

<pre>interface CSSStyleRule : CSSRule {
    attribute DOMString selectorText;
    readonly attribute CSSStyleDeclaration style;
};</pre>

<h2 id="Properties">Properties</h2>

<dl>
 <dt>{{domxref("CSSStyleRule.selectorText")}}</dt>
 <dd>Obtient la représentation textuelle du sélecteur pour cette règle, par exemple "H1, H2".</dd>
 <dt>{{domxref("CSSStyleRule.style")}}</dt>
 <dd>Retourne l'objet {{domxref("CSSStyleDeclaration")}} pour cette règle.</dd>
</dl>

<h2 id="Specifications">Specifications</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{ SpecName('CSSOM', '#the-cssstylerule-interface', 'CSSStyleRule') }}</td>
   <td>{{ Spec2('CSSOM') }}</td>
   <td>pas de changement</td>
  </tr>
  <tr>
   <td>{{ SpecName('DOM2 Style', 'css.html#CSS-CSSStyleRule', 'CSSRule') }}</td>
   <td>{{ Spec2('DOM2 Style') }}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("api.CSSStyleRule")}}</p>
