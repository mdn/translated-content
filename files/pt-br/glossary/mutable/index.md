---
title: Mutável
slug: Glossary/Mutable
tags:
  - mutavel
translation_of: Glossary/Mutable
original_slug: Glossario/Mutavel
---
<p><em>Mutável</em> é o tipo da variável que pode ser alterada. Em {{glossary("JavaScript")}}, somente {{Glossary("Object","objetos")}} e {{Glossary("Array","arrays")}} são mutáveis, {{Glossary("primitive", "valores primitivos")}} não.</p>

<p>(Você <em>pode</em> fazer o nome da variável apontar para um novo valor, mas o valor anterior continua na memória. Logo, a necessidade da coleta de lixo, "garbage collection")</p>

<p>Um <strong>objeto mutável</strong> é um objeto cujo estado pode ser modificado após sua criação.</p>

<p><strong>Imutáveis</strong> são os objetos cujo o estado <strong>não</strong> podem ser mudados uma vez criados.</p>

<p><strong>Strings e Numbers são imutáveis</strong>. Vamos entender isso com um exemplo:</p>

<pre>var stringImutavel = 'Hello';

// No código acima, um novo objeto com o valor string é criado.

stringImutavel = stringImutavel + 'World';

// Agora nós estamos anexando 'World' ao valor existente.</pre>

<p>Ao anexar a 'stringImutavel' com um valor de string, os seguintes eventos ocorrem:</p>

<ol>
 <li>O valor existente de 'stringImutavel' é recuperado.</li>
 <li>'World' é anexado ao valor existente de 'stringImutavel'.</li>
 <li>O valor resultante é então alocado para um novo bloco na memória.</li>
 <li>O objeto 'stringImutavel' agora aponta para um novo espaço de memória criado.</li>
 <li>O espaço de memória criado anteriormente está habilitado para a coleta de lixo.</li>
</ol>

<p> </p>

<h2 id="Aprenda_mais">Aprenda mais</h2>

<h3 id="Conhecimentos_gerais">Conhecimentos gerais</h3>

<ul>
 <li><a href="https://pt.wikipedia.org/wiki/Objeto_imut%C3%A1vel">Objeto Mutavel</a></li>
</ul>
