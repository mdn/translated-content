---
title: Window.navigator
slug: Web/API/Window/navigator
tags:
  - API
  - Propriedade
  - Referencia
  - Somente-leitura
  - Window
translation_of: Web/API/Window/navigator
---
<div>
 {{APIRef}}</div>
<p>A propriedade somente leitura <code>Window.navigator</code> retorna uma referência para o objeto {{domxref("Navigator")}}, que pode ser consultada para obter informações sobre a aplicação executando o script.</p>
<h2 id="Example" name="Example">Sintaxe</h2>
<pre class="syntaxbox"><em>navigatorObject<code> = window.navigator</code></em></pre>
<h2 id="Specification" name="Specification">Exemplos</h2>
<h3 id="Exemplo_1_Detecta_o_navegador_e_retorna_uma_string">Exemplo #1: Detecta o navegador e retorna uma string</h3>
<pre class="brush: js">var sBrowser, sUsrAg = navigator.userAgent;

if(sUsrAg.indexOf("Chrome") &gt; -1) {
    sBrowser = "Google Chrome";
} else if (sUsrAg.indexOf("Safari") &gt; -1) {
    sBrowser = "Apple Safari";
} else if (sUsrAg.indexOf("Opera") &gt; -1) {
    sBrowser = "Opera";
} else if (sUsrAg.indexOf("Firefox") &gt; -1) {
    sBrowser = "Mozilla Firefox";
} else if (sUsrAg.indexOf("MSIE") &gt; -1) {
    sBrowser = "Microsoft Internet Explorer";
}

alert("Você está utilizando: " + sBrowser);</pre>
<h3 id="Exemplo_2_Detecta_o_navegador_e_retorna_um_índice">Exemplo #2: Detecta o navegador e retorna um índice</h3>
<pre class="brush: js">function getBrowserId () {

    var
        aKeys = ["MSIE", "Firefox", "Safari", "Chrome", "Opera"],
        sUsrAg = navigator.userAgent, nIdx = aKeys.length - 1;

    for (nIdx; nIdx &gt; -1 &amp;&amp; sUsrAg.indexOf(aKeys[nIdx]) === -1; nIdx--);

    return nIdx

}

console.log(getBrowserId());</pre>
<h2 id="Specification" name="Specification">Especificação</h2>
<ul>
 <li>{{SpecName("HTML5 W3C", "webappapis.html#the-navigator-object","window.navigator")}}</li>
 <li>{{SpecName("HTML5.1", "webappapis.html#the-navigator-object", "window.navigator")}}</li>
 <li>{{SpecName("HTML WHATWG", "timers.html#the-navigator-object", "window.navigator")}}</li>
</ul>
<h2 id="See_also" name="See_also">Veja também</h2>
