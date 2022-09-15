---
title: 'Erro de Sintaxe: faltando : depois da propriedade id'
slug: Web/JavaScript/Reference/Errors/Missing_colon_after_property_id
translation_of: Web/JavaScript/Reference/Errors/Missing_colon_after_property_id
---
<div>{{jsSidebar("Errors")}}</div>

<h2 id="Mensagem">Mensagem</h2>

<pre class="syntaxbox">SyntaxError: missing : after property id
</pre>

<h2 id="Tipo_de_erro">Tipo de erro</h2>

<p>{{jsxref("SyntaxError")}}</p>

<h2 id="O_que_deu_errado">O que deu errado?</h2>

<p>Ao criar objetos com a sintaxe do <a href="/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer">iniciador do objeto</a>, dois pontos (<code>:</code>) separam chaves e valores para as propriedades do objeto.</p>

<pre class="brush: js">var obj = { propertyKey: 'value' };
</pre>

<h2 id="Exemplos">Exemplos</h2>

<h3 id="Dois-pontos_contra_sinal_de_igualdade">Dois-pontos contra sinal de igualdade</h3>

<p>Este código falha, pois o sinal de igualdade não pode ser usado dessa maneira nesta sintaxe do iniciador do objeto.</p>

<pre class="brush: js example-bad">var obj = { propertyKey = 'value' };
// SyntaxError: missing : after property id
</pre>

<p>Correto seria usar um dois-pontos, ou usar colchetes para atribuir uma nova propriedade depois que o objeto já foi criado.</p>

<pre class="brush: js example-good">var obj = { propertyKey: 'value' };

// or alternatively

var obj = { };
obj['propertyKey'] = 'value';
</pre>

<h3 id="Propriedades_vazia">Propriedades vazia</h3>

<p>Você não pode criar propriedades vazias como esta:</p>

<pre class="brush: js example-bad">var obj = { propertyKey; };
// SyntaxError: missing : after property id
</pre>

<p>Se você precisa definir uma propriedade sem um valor, você pode usar {{jsxref("null")}} como um valor.</p>

<pre class="brush: js example-good">var obj = { propertyKey: null };</pre>

<h3 id="Propriedades_computadas">Propriedades computadas</h3>

<p>Se você criar uma chave de propriedade de uma expressão, você precisa usar colchetes. Caso contrário, o nome da propriedade não pode ser computado:</p>

<pre class="brush: js example-bad">var obj = { 'b'+'ar': 'foo' };
// SyntaxError: missing : after property id
</pre>

<p>Coloque a expressão entre parênteses <code>[]</code>:</p>

<pre class="brush: js example-good">var obj = { ['b'+'ar']: 'foo' };</pre>

<h2 id="Veja_também">Veja também</h2>

<ul>
 <li><a href="/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer">Inicializador de objeto</a></li>
</ul>
