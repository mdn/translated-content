---
title: Primitivo
slug: Glossary/Primitive
translation_of: Glossary/Primitive
original_slug: Glossario/Primitivo
---
<h2 id="Resumo">Resumo</h2>

<p>Um <strong>primitivo</strong> (valor primitivo, tipo de dados primitivo) é um dado que não é representado através de um {{Glossary("Objeto")}} e, por consequência, não possui métodos.</p>

<h2 id="Em_detalhes">Em detalhes</h2>

<p>Na maior parte do tempo, um valor primitivo é representado diretamente através do mais baixo nível da implementação de uma linguagem.</p>

<p><span style="line-height: 1.5;">No {{Glossary("JavaScript")}}, existem 6 tipos primitivos:</span></p>

<ul>
 <li>{{Glossary("String")}}</li>
 <li>{{Glossary("Number")}}</li>
 <li>{{Glossary("Boolean")}}</li>
 <li>{{Glossary("Null")}}</li>
 <li>{{Glossary("undefined")}}</li>
 <li>{{Glossary("Symbol")}} (novo no {{Glossary("ECMAScript")}} 6)</li>
</ul>

<p>Todos os primitivos são <strong>imutáveis</strong> (não podem ter o seu valor modificado).</p>

<h3 id="Wrappers_em_JavaScript">Wrappers em JavaScript</h3>

<blockquote>
<p>NT: O termo "wrapper" em português significa "que envolve". No entanto, em tecnologia, é comum se usar a versão em inglês que possui o mesmo significado.</p>
</blockquote>

<p>À exceção do <code>null</code> e do <code>undefined</code>, todos os primitivos tem um objeto wrapper equivalente:</p>

<ul>
 <li>{{jsxref("String")}} para o primitivo string.</li>
 <li>{{jsxref("Number")}} para o primitivo .</li>
 <li>{{jsxref("Boolean")}} para o primitivo Boolean.</li>
 <li>{{jsxref("Symbol")}} para o primitivo  Symbol.</li>
</ul>

<p>O método <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/valueOf">valueOf()</a><font face="Consolas, Liberation Mono, Courier, monospace"> </font>do objeto wrapper retorna o valor primitivo.</p>

<blockquote>
<p>NT: É possível verificar o tipo da variável digitando typeof+nomedavariavel. Para saber mais, verifique <a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/typeof">typeof</a>.</p>
</blockquote>

<h2 id="Referências_externas">Referências externas</h2>

<ul>
 <li><a href="http://en.wikipedia.org/wiki/Primitive_data_type">Primitive data types on Wikipedia</a> (em inglês)</li>
 <li><a href="https://pt.wikipedia.org/wiki/Tipo_de_dado">Tipo de dado</a></li>
</ul>
