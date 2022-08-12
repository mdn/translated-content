---
title: Controle de fluxo assíncrono usando async
slug: Learn/Server-side/Express_Nodejs/Displaying_data/flow_control_using_async
translation_of: Learn/Server-side/Express_Nodejs/Displaying_data/flow_control_using_async
---
<p>O código da <em>Controller</em>, para algumas de nossas páginas dependerá dos resultados de várias solicitações assíncronas, que talvez possam ser necessárias para serem executadas em uma ordem específica ou em paralelo. Para gerenciar o controle do nosso fluxo e renderizar páginas quando tivermos todas as informações necessárias disponíveis, usaremos o popular módulo <a href="https://www.npmjs.com/package/async">async</a>.</p>

<div class="note">
<p><strong>Nota:</strong> Há várias outras maneiras de gerenciar o comportamento assíncrono e o controle de fluxo em JavaScript, um dos recursos Javascript que pode ser utilizado, são as <a href="https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/Techniques/Promises">Promises</a>. </p>
</div>

<p>Async has a lot of useful methods (check out <a class="external external-icon" href="http://caolan.github.io/async/docs.html" rel="noopener">the documentation</a>). Some of the more important functions are:</p>

<ul>
 <li><code><a class="external external-icon" href="http://caolan.github.io/async/docs.html#parallel" rel="noopener">async.parallel()</a></code> executa qualquer operação que deva ser processada em paralelo.</li>
 <li><code><a class="external external-icon" href="http://caolan.github.io/async/docs.html#series" rel="noopener">async.series()</a></code> garante que as operações assíncronas sejam executadas em série.</li>
 <li><code><a class="external external-icon" href="http://caolan.github.io/async/docs.html#waterfall" rel="noopener">async.waterfall()</a></code> operações que devem ser executadas em série, baseando-se no resultado de cada operação anterior. </li>
</ul>

<h2 class="highlight-spanned" id="Por_que_isso_é_necessário"><span class="highlight-span">Por que isso é necessário ?</span></h2>

<p>A maioria dos métodos que usamos no Express são assíncronos - você especifica uma operação para executar, passando um <em>callback</em>. O método retorna imediatamente e o <em>callback </em>é invocado quando a operação solicitada é concluída. Por convenção no <em>Express</em>, as funções de <em>callback </em>passam um valor de erro como o primeiro parâmetro (ou nulo em sucesso) e os resultados da função (se houver algum) como o segundo parâmetro.</p>

<p>Se uma <em>Controller </em>só precisa <em>executar</em> <em><strong>uma </strong>operação assíncrona</em> para obter as informações necessárias para renderizar uma página, a implementação é fácil —simplesmente renderizamos o <em>template</em> no <em>callback</em>. O código abaixo ilustra uma função que renderiza a contagem de um <em>model</em> <font face="consolas, Liberation Mono, courier, monospace"><span style="background-color: rgba(220, 220, 220, 0.5);">ExampleModel </span></font>(usando o método <code><a href="http://mongoosejs.com/docs/api.html#model_Model.count" rel="noopener">count()</a> </code> do Mongoose.</p>

<pre class="brush: js"><code>exports.example_model_count = function(req, res, next) {

</code>  <font face="consolas, Liberation Mono, courier, monospace"><span style="background-color: rgba(220, 220, 220, 0.5);">ExampleModel </span></font>.count({ a_model_field: 'match_value' }, function (err, count) {
    // ... do something if there is an err

    // On success, render the result by passing count into the render function (here, as the variable 'data').
    res.render('the_template', { data: count } );
  });
<code>}</code>
</pre>

<p>However what if you need to make <strong>multiple </strong>asynchronous queries, and you can't render the page until all the operations have completed? A naive implementation could "daisy chain" the requests, kicking off subsequent requests in the callback of a previous request, and rendering the response in the final callback. The problem with this approach is that our requests would have to be run in series, even though it might be more efficient to run them in parallel. This could also result in complicated nested code, commonly referred to as <a class="external external-icon" href="http://callbackhell.com/" rel="noopener">callback hell</a>.</p>

<p>A much better solution would be to execute all the requests in parallel and then have a single callback that executes when all of the queries have completed. This is the sort of flow operation that the <em>Async</em> module makes easy!</p>

<h2 class="highlight-spanned" id="Operações_assíncronas_em_paralelo"><span class="highlight-span">Operações assíncronas em paralelo</span></h2>

<p>The method <code><a class="external external-icon" href="http://caolan.github.io/async/docs.html#parallel" rel="noopener">async.parallel()</a></code> is used to run multiple asynchronous operations in parallel.</p>

<p>The first argument to <code>async.parallel()</code> is a collection of the asynchronous functions to run (an array, object or other iterable). Each function is passed a <code>callback(err, result)</code> which it must call on completion with an error <code>err</code> (which can be <code>null</code>) and an optional <code>results</code> value.</p>

<p>The optional second argument to  <code>async.parallel()</code> is a callback that will be run when all the functions in the first argument have completed. The callback is invoked with an error argument and a result collection that contains the results of the individual asynchronous operations. The result collection is of the same type as the first argument (i.e. if you pass an array of asynchronous functions, the final callback will be invoked with an array of results). If any of the parallel functions reports an error the callback is invoked early (with the error value).</p>

<p>The example below shows how this works when we pass an object as the first argument. As you can see, the results are <em>returned</em> in an object with the same property names as the original functions that were passed in.</p>

<pre class="brush: js line-numbers  language-js"><code class="language-js"><span class="keyword token">async</span><span class="punctuation token">.</span><span class="function token">parallel</span><span class="punctuation token">(</span><span class="punctuation token">{</span>
  one<span class="punctuation token">:</span> <span class="keyword token">function</span><span class="punctuation token">(</span>callback<span class="punctuation token">)</span> <span class="punctuation token">{</span> <span class="punctuation token">.</span><span class="punctuation token">.</span><span class="punctuation token">.</span> <span class="punctuation token">}</span><span class="punctuation token">,</span>
  two<span class="punctuation token">:</span> <span class="keyword token">function</span><span class="punctuation token">(</span>callback<span class="punctuation token">)</span> <span class="punctuation token">{</span> <span class="punctuation token">.</span><span class="punctuation token">.</span><span class="punctuation token">.</span> <span class="punctuation token">}</span><span class="punctuation token">,</span>
  <span class="punctuation token">.</span><span class="punctuation token">.</span><span class="punctuation token">.</span>
  something_else<span class="punctuation token">:</span> <span class="keyword token">function</span><span class="punctuation token">(</span>callback<span class="punctuation token">)</span> <span class="punctuation token">{</span> <span class="punctuation token">.</span><span class="punctuation token">.</span><span class="punctuation token">.</span> <span class="punctuation token">}</span>
  <span class="punctuation token">}</span><span class="punctuation token">,</span>
  <span class="comment token">// optional callback</span>
  <span class="keyword token">function</span><span class="punctuation token">(</span>err<span class="punctuation token">,</span> results<span class="punctuation token">)</span> <span class="punctuation token">{</span>
    <span class="comment token">// 'results' is now equal to: {one: 1, two: 2, ..., something_else: some_value}</span>
  <span class="punctuation token">}</span>
<span class="punctuation token">)</span><span class="punctuation token">;</span></code></pre>

<p>If you instead pass an array of functions as the first argument, the results will be an array (the array order results will match the original order that the functions were declared—not the order in which they completed).</p>

<h2 class="highlight-spanned" id="Operações_assíncronas_em_série"><span class="highlight-span">Operações assíncronas em série</span></h2>

<p>The method <code><a class="external external-icon" href="http://caolan.github.io/async/docs.html#series" rel="noopener">async.series()</a></code> is used to run multiple asynchronous operations in sequence, when subsequent functions do not depend on the output of earlier functions. It is essentially declared and behaves in the same way as <code>async.parallel()</code>.</p>

<pre class="brush: js line-numbers  language-js"><code class="language-js"><span class="keyword token">async</span><span class="punctuation token">.</span><span class="function token">series</span><span class="punctuation token">(</span><span class="punctuation token">{</span>
  one<span class="punctuation token">:</span> <span class="keyword token">function</span><span class="punctuation token">(</span>callback<span class="punctuation token">)</span> <span class="punctuation token">{</span> <span class="punctuation token">.</span><span class="punctuation token">.</span><span class="punctuation token">.</span> <span class="punctuation token">}</span><span class="punctuation token">,</span>
  two<span class="punctuation token">:</span> <span class="keyword token">function</span><span class="punctuation token">(</span>callback<span class="punctuation token">)</span> <span class="punctuation token">{</span> <span class="punctuation token">.</span><span class="punctuation token">.</span><span class="punctuation token">.</span> <span class="punctuation token">}</span><span class="punctuation token">,</span>
  <span class="punctuation token">.</span><span class="punctuation token">.</span><span class="punctuation token">.</span>
  something_else<span class="punctuation token">:</span> <span class="keyword token">function</span><span class="punctuation token">(</span>callback<span class="punctuation token">)</span> <span class="punctuation token">{</span> <span class="punctuation token">.</span><span class="punctuation token">.</span><span class="punctuation token">.</span> <span class="punctuation token">}</span>
  <span class="punctuation token">}</span><span class="punctuation token">,</span>
  <span class="comment token">// optional callback after the last asynchronous function completes.</span>
  <span class="keyword token">function</span><span class="punctuation token">(</span>err<span class="punctuation token">,</span> results<span class="punctuation token">)</span> <span class="punctuation token">{</span>
    <span class="comment token">// 'results' is now equals to: {one: 1, two: 2, ..., something_else: some_value} </span>
  <span class="punctuation token">}</span>
<span class="punctuation token">)</span><span class="punctuation token">;</span></code></pre>

<div class="note">
<p><strong>Note:</strong> The ECMAScript (JavaScript) language specification states that the order of enumeration of an object is undefined, so it is possible that the functions will not be called in the same order as you specify them on all platforms. If the order really is important, then you should pass an array instead of an object, as shown below.</p>
</div>

<pre class="brush: js line-numbers  language-js"><code class="language-js"><span class="keyword token">async</span><span class="punctuation token">.</span><span class="function token">series</span><span class="punctuation token">(</span><span class="punctuation token">[</span>
  <span class="keyword token">function</span><span class="punctuation token">(</span>callback<span class="punctuation token">)</span> <span class="punctuation token">{</span>
    <span class="comment token">// do some stuff ...</span>
    <span class="function token">callback</span><span class="punctuation token">(</span><span class="keyword token">null</span><span class="punctuation token">,</span> <span class="string token">'one'</span><span class="punctuation token">)</span><span class="punctuation token">;</span>
  <span class="punctuation token">}</span><span class="punctuation token">,</span>
  <span class="keyword token">function</span><span class="punctuation token">(</span>callback<span class="punctuation token">)</span> <span class="punctuation token">{</span>
    <span class="comment token">// do some more stuff ... </span>
    <span class="function token">callback</span><span class="punctuation token">(</span><span class="keyword token">null</span><span class="punctuation token">,</span> <span class="string token">'two'</span><span class="punctuation token">)</span><span class="punctuation token">;</span>
  <span class="punctuation token">}</span>
 <span class="punctuation token">]</span><span class="punctuation token">,</span>
  <span class="comment token">// optional callback</span>
  <span class="keyword token">function</span><span class="punctuation token">(</span>err<span class="punctuation token">,</span> results<span class="punctuation token">)</span> <span class="punctuation token">{</span>
  <span class="comment token">// results is now equal to ['one', 'two'] </span>
  <span class="punctuation token">}</span>
<span class="punctuation token">)</span><span class="punctuation token">;</span></code></pre>

<h2 class="highlight-spanned" id="Operações_assíncronas_dependentes_em_série"><span class="highlight-span">Operações assíncronas dependentes em série</span></h2>

<p>The method <code><a class="external external-icon" href="http://caolan.github.io/async/docs.html#waterfall" rel="noopener">async.waterfall()</a></code> is used to run multiple asynchronous operations in sequence when each operation is dependent on the result of the previous operation.</p>

<p>The callback invoked by each asynchronous function contains <code>null</code> for the first argument and results in subsequent arguments. Each function in the series takes the results arguments of the previous callback as the first parameters, and then a callback function. When all operations are complete, a final callback is invoked with the result of the last operation. The way this works is more clear when you consider the code fragment below (this example is from the <em>async</em> documentation):</p>

<pre class="brush: js line-numbers  language-js"><code class="language-js"><span class="keyword token">async</span><span class="punctuation token">.</span><span class="function token">waterfall</span><span class="punctuation token">(</span><span class="punctuation token">[</span>
  <span class="keyword token">function</span><span class="punctuation token">(</span>callback<span class="punctuation token">)</span> <span class="punctuation token">{</span>
    <span class="function token">callback</span><span class="punctuation token">(</span><span class="keyword token">null</span><span class="punctuation token">,</span> <span class="string token">'one'</span><span class="punctuation token">,</span> <span class="string token">'two'</span><span class="punctuation token">)</span><span class="punctuation token">;</span>
  <span class="punctuation token">}</span><span class="punctuation token">,</span>
  <span class="keyword token">function</span><span class="punctuation token">(</span>arg1<span class="punctuation token">,</span> arg2<span class="punctuation token">,</span> callback<span class="punctuation token">)</span> <span class="punctuation token">{</span>
    <span class="comment token">// arg1 now equals 'one' and arg2 now equals 'two' </span>
    <span class="function token">callback</span><span class="punctuation token">(</span><span class="keyword token">null</span><span class="punctuation token">,</span> <span class="string token">'three'</span><span class="punctuation token">)</span><span class="punctuation token">;</span>
  <span class="punctuation token">}</span><span class="punctuation token">,</span>
  <span class="keyword token">function</span><span class="punctuation token">(</span>arg1<span class="punctuation token">,</span> callback<span class="punctuation token">)</span> <span class="punctuation token">{</span>
    <span class="comment token">// arg1 now equals 'three'</span>
    <span class="function token">callback</span><span class="punctuation token">(</span><span class="keyword token">null</span><span class="punctuation token">,</span> <span class="string token">'done'</span><span class="punctuation token">)</span><span class="punctuation token">;</span>
  <span class="punctuation token">}</span>
<span class="punctuation token">]</span><span class="punctuation token">,</span> <span class="keyword token">function</span> <span class="punctuation token">(</span>err<span class="punctuation token">,</span> result<span class="punctuation token">)</span> <span class="punctuation token">{</span>
  <span class="comment token">// result now equals 'done'</span>
<span class="punctuation token">}</span>
<span class="punctuation token">)</span><span class="punctuation token">;</span></code></pre>

<h2 class="highlight-spanned" id="Instalando_o_async"><span class="highlight-span">Instalando o async</span></h2>

<p>Install the async module using the NPM package manager so that we can use it in our code. You do this in the usual way, by opening a prompt in the root of the <em>LocalLibrary</em> project and enter the following command:</p>

<pre class="brush: bash line-numbers  language-bash"><code class="language-bash">npm install async</code></pre>

<h2 id="Next_steps">Next steps</h2>

<ul>
 <li>Return to <a href="/en-US/docs/Learn/Server-side/Express_Nodejs/Displaying_data">Express Tutorial Part 5: Displaying library data</a>.</li>
 <li>Proceed to the next subarticle of Part 5: <a href="/en-US/docs/Learn/Server-side/Express_Nodejs/Displaying_data/Template_primer">Template primer</a>.</li>
</ul>
