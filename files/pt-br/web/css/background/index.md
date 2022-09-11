---
title: background
slug: Web/CSS/background
tags:
  - Fundo CSS
  - Propriedades CSS
  - Referencia
translation_of: Web/CSS/background
---
<div>{{CSSRef ( "CSS Background")}}</div>

<h2 id="Resumo">Resumo</h2>

<p>A propriedade CSS <strong><code>background</code></strong> é um atalho para definir os valores de fundo individuais em um único lugar na folha de estilo. Background pode ser usado para definir os valores para um ou mais dos seguintes: {{cssxref("background-clip")}}, {{cssxref("background-color")}}, {{cssxref("background-image")}}, {{cssxref("background-origin")}}, {{cssxref("background-position")}} , {{cssxref("background-repeat")}}, {{cssxref("background-size")}} e {{cssxref("background-attachment")}}.</p>

<p>O <code>fundo</code> CSS propriedade estenográfica atribui valores dados explícitos e conjuntos de propriedades para seus valores iniciais em falta.</p>

<p>{{cssinfo}}</p>

<h2 id="Sintaxe">Sintaxe</h2>

<pre class="brush: css">/ * Usando uma &lt;<code>cor-de-fundo</code>&gt; * /
background: green;

/ * Usando uma &lt;<code>imagem-de-fundo</code>&gt; e &lt;<code>estilo-de-repetição</code>&gt; * /
background: url("test.jpg") repeat-y;

/ * Usando uma &lt;box&gt; e &lt;<code>cor-de-fundo</code>&gt; * /
background: border-box red;

/ * Uma única imagem, centrado e escalado * /
background: no-repeat center/80% url( "../img/image.png");
</pre>

<div class="note"><strong>Nota:</strong> O {{cssxref ( "background-color")}} só pode ser definido no último fundo, como há apenas uma cor de fundo para todo o elemento.</div>

<h3 id="Valores">Valores</h3>

<p>Um ou mais dos seguintes, por qualquer ordem:</p>

<dl>
 <dt><code>&lt;anexo&gt;</code></dt>
 <dd>Veja {{cssxref ( "background-attachment")}}</dd>
 <dt><code>&lt;box&gt;</code></dt>
 <dd>Veja {{cssxref ( "background-clip")}}</dd>
 <dt><code>&lt;cor-de-fundo&gt;</code></dt>
 <dd>Veja {{cssxref ( "background-color")}}</dd>
 <dt><code>&lt;imagem-de-fundo&gt;</code></dt>
 <dd>Veja {{Cssxref ( "background-image")}}</dd>
 <dt><code>&lt;posição&gt;</code></dt>
 <dd>Veja {{cssxref ( "background-position")}}</dd>
 <dt><code>&lt;estilo-de-repetição&gt;</code></dt>
 <dd>Veja {{cssxref ( "background-repeat")}}</dd>
 <dt><code>&lt;tamanho-do-fundo&gt;</code></dt>
 <dd>Veja {{cssxref ( "background-size")}}. Esta propriedade deve ser especificado após <strong>&lt;posição&gt;</strong> , separados com o caractere '/'.</dd>
</dl>

<h3 id="Sintaxe_formal">Sintaxe formal</h3>

<pre class="syntaxbox">{{csssyntax}}</pre>

<h2 id="Exemplos">Exemplos</h2>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;p class="Topbanner"&gt;
  céu estrelado&lt;br/&gt;
  Cintilando Cintilando&lt;br/&gt;
  Céu estrelado
&lt;/p&gt;
&lt;p class="atencao"&gt;Este é um parágrafo&lt;p&gt;</pre>

<h3 id="CSS">CSS</h3>

<pre class="brush:css">.atencao { 
  background: red; 
}

.Topbanner { 
  background: url("https://mdn.mozillademos.org/files/11983/starsolid.gif") #00D repeat-y fixed; 
}
</pre>

<h3 id="Resultado">Resultado</h3>

<p>{{EmbedLiveSample ( "Exemplos")}}</p>

<h2 id="Especificações">Especificações</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Especificação</th>
   <th scope="col">estado</th>
   <th scope="col">Comente</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName ( 'Fundos CSS3', '# a-fundo', 'fundo')}}</td>
   <td>{{Spec2 ( 'Fundos CSS3')}}</td>
   <td>A propriedade taquigráfica foi estendido para suportar múltiplas origens e a nova {{cssxref("background-size")}}, {{cssxref("background-origem")}} e {{cssxref("background-clip")}} propriedades.</td>
  </tr>
  <tr>
   <td>{{SpecName ( 'CSS2.1', '# propdef-fundo colors.html', 'background')}}</td>
   <td>{{Spec2 ( 'CSS2.1')}}</td>
   <td>Não ocorreram alterações significativas</td>
  </tr>
  <tr>
   <td>{{SpecName ( 'CSS1', '#background', 'background')}}</td>
   <td>{{Spec2 ( 'CSS1')}}</td>
   <td>definição inicial</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility">Compatibilidade com navegadores</h2>

<p>{{Compat("css.properties.background")}}</p>

<h2 id="Veja_também">Veja também</h2>

<ul>
 <li>{{Cssxref ( "- moz-fundo-inline-política")}}</li>
 <li><a href="/en-US/docs/CSS/Using_CSS_gradients">Usando gradientes</a></li>
 <li><a href="/en-US/docs/CSS/Multiple_backgrounds">Vários fundos</a></li>
</ul>
