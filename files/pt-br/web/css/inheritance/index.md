---
title: Herança
slug: Web/CSS/inheritance
tags:
  - CSS
  - Guide
  - Guía
  - Web
translation_of: Web/CSS/inheritance
---
<h2 id="Resumo">Resumo</h2>

<p>O resumo de cada <a href="/pt-BR/docs/Web/CSS/Reference" title="Referência CSS">definição de propriedade do CSS</a> diz se tal propriedade é herdada por padrão ("Inherited": sim) ou é não herdada por padrão ("Inherited": não). Isso controla o que ocorre quando nenhum valor é especificado para uma propriedade em um elemento.</p>

<h2 id="Propriedades_herdadas" name="Propriedades_herdadas">Propriedades herdadas</h2>

<p>Quando nenhum valor de uma <strong>propriedade herdada</strong> foi especificado em um elemento, o elemento obtém o <a href="/pt-BR/docs/Web/CSS/computed_value" title="valor computado">valor computado</a> desta propriedade em seu elemento pai. Apenas o elemento raiz do documento obtém o <a href="/pt-BR/docs/Web/CSS/initial_value" title="valor inicial">valor inicial</a> dado no resumo da propriedade.</p>

<p>Um exemplo típico de uma propriedade herdada é a propriedade {{ Cssxref("color") }}. Dadas as seguintes regras de estilo:</p>

<pre class="brush: css">p { color: green }</pre>

<p>e o markup:</p>

<pre class="brush: html">&lt;p&gt;Este paragrafo tem &lt;em&gt;texto enfatizado&lt;/em&gt; dentro dele.&lt;/p&gt;</pre>

<p>As palavras "texto enfatizado" vão aparecer em verde, já que o elemento <code>em</code> herdou o valor da propriedade {{ Cssxref("color") }} do elemento <code>p</code>. Ele <em>não</em> obtém o valor inicial da propriedade (o qual é a cor usada pelo elemento raiz quando a página não especifica nenhuma cor).</p>

<h2 id="Propriedades_nao_herdadas" name="Propriedades_nao_herdadas">Propriedades não herdadas</h2>

<p>Quando nenhum valor para uma <strong>propriedade não herdada</strong> (algumas vezes chamada de <strong>reset property</strong> em código Mozilla) é especificado em um elemento, o elemento obtém o <a href="/pt-BR/docs/CSS/initial_value" title="valor inicial">valor inicial</a> desta propriedade (como especificado no resumo da propriedade).</p>

<p>Um exemplo típico de uma propriedade não herdada é a propriedade {{ Cssxref("border") }}. Dadas as seguintes regras de estilo:</p>

<pre class="brush: css"> p { border: medium solid }</pre>

<p>e o markup</p>

<pre class="brush: html">  &lt;p&gt;Este paragrafo tem &lt;em&gt;texto enfatizado&lt;/em&gt; dentro dele.&lt;/p&gt;</pre>

<p>As palavras "texto enfatizado" não vão ter uma borda (já que o valor inicial de {{ Cssxref("border-style") }} é <code>none</code>).</p>

<h2 id="Notas" name="Notas">Notas</h2>

<p>A palavra-chave {{ Cssxref("inherit") }} permite aos autores especificar explicitamente a herança. Ela funciona tanto em propriedades herdadas como não herdadas.</p>

<h2 id="Veja_tambem" name="Veja_tambem">Veja também</h2>

<ul>
 <li><a href="/pt-BR/docs/Web/CSS/Reference" title="Referência CSS">Referência CSS</a></li>
 <li>{{ CSS_key_concepts() }}</li>
 <li>{{ Cssxref("inherit") }}</li>
</ul>
