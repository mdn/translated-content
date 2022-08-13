---
title: Uso de busca Cross-global
slug: Web/API/Fetch_API/Cross-global_fetch_usage
translation_of: Web/API/Fetch_API/Cross-global_fetch_usage
original_slug: Web/API/Fetch_API/Uso_de_busca_Cross-global
---
<p class="summary"> </p>

<p class="summary">Este artigo explica um "edge case" (um problema ou situação que ocorre apenas em um parâmetro operacional extremo) que ocorre ao utilizar fetch (e potencialmente outras APIs que exibem o mesmo tipo de comportamento de recuperação de recurso). Quando uma busca de cross-origin envolvendo uma URL relativa é iniciada a partir de um {{htmlelement ("iframe")}}, a URL relativa costumava ser resolvida na localização global atual, em vez da localização do iframe.</p>

<h2 id="O_edge_case">O "edge case"</h2>

<p>Muitos sites nunca se deparam com este caso extremo. Para que isso aconteça:</p>

<ul>
 <li>Você precisa de um iframe de mesma origem</li>
 <li>Esse iframe de mesma origem precisa ter um local com um URL base diferente</li>
 <li>Você tem que usar a função de busca global, por exemplo, frame.contentWindow.fetch ()</li>
 <li>A URL passada precisa ser relativa</li>
</ul>

<h2 id="O_problema">O problema</h2>

<p>No passado, resolveríamos o URL relativo contra o global atual, por exemplo:</p>

<pre class="brush: js">let absolute = new URL(relative, window.location.href)</pre>

<p>Isto não é um problema como tal. É que diferentes APIs que exibem esse tipo de comportamento estavam fazendo isso de maneira inconsistente com o comportamento definido na especificação, o que poderia levar a problemas mais adiante.</p>

<h2 id="A_solução">A solução</h2>

<p>No Firefox 60 em diante, o Mozilla resolve a URL relativa contra o global que possui a função <code>fetch()</code> que está sendo usada (veja {{bug (1432272)}}). Portanto, no caso descrito acima, ele é resolvido em relação à localização do iframe:</p>

<pre class="brush: js">let absolute = new URL(relative, frame.contentWindow.location.href)</pre>

<p>Há muita discussão em andamento sobre a obtenção de novas especificações para se alinhar a essa mudança de comportamento, a fim de mitigar possíveis problemas no futuro.</p>
