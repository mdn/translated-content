---
title: window.openDialog
slug: Web/API/Window/openDialog
translation_of: Web/API/Window/openDialog
---
<p>{{ ApiRef() }}</p>

<h3 id="Summary" name="Summary">Resumo</h3>

<p><code>window.openDialog</code> é uma extensão para <a href="/en/DOM/window.open" title="en/DOM/window.open">window.open</a>. Ela se comporta da mesma maneira, exceto que pode opcionalmente usar um ou mais parâmetros passado por <code>windowFeatures</code>, e <code>windowFeatures</code> em si é tratado um pouco diferente.</p>

<p>Parâmetros opcionais, se presentes, serão incluídos no JavaScript Array object e adicionados a nova janela criada como uma propriedade chamada <a href="/en/DOM/window.arguments" title="en/DOM/window.arguments">window.arguments</a>. Eles podem ser referenciados no javascript da janela a qualquer momento, incluindo durante a execução da <code>load</code> handler. Esses parâmetros podem ser usados, e depois, para passar argumentos para e da janela de diálogo.</p>

<p>Note que a chamada para <code>openDialog()</code> retorna imediatamente. Se você quer que a chamada seja bloqueada até o usuário fechar a janela de diálogo, forneça <code>modal</code> como um parâmetro <code>windowFeatures</code>. Note que isso significa que o usuário não poderá interagir com a janela que abriu a janela modal (modal dialog) enquanto o usuário não fechá-la.</p>

<h3 id="Syntax" name="Syntax">Sintaxe</h3>

<pre class="eval"><em>newWindow</em> = openDialog(<em>url</em>, <em>name</em>, <em>features</em>, <em>arg1</em>, <em>arg2</em>, ...)
</pre>

<dl>
 <dt>newWindow </dt>
 <dd>A janela aberta</dd>
 <dt>url </dt>
 <dd>A URL a ser carregada na nova janela aberta.</dd>
 <dt>name </dt>
 <dd>O nome da janela (opcional). Veja a descrição de <a href="/en/DOM/window.open" title="en/DOM/window.open">window.open</a> para informações detalhadas.</dd>
 <dt>features </dt>
 <dd>Consulte <a href="/en/DOM/window.open" title="en/DOM/window.open">window.open</a> para descrição.</dd>
 <dt>arg1, arg2, ... </dt>
 <dd>Os argumentos podem ser passados para a nova janela (opcional).</dd>
</dl>

<h3 id="Example" name="Example">Exemplo</h3>

<pre class="brush: js">var win = openDialog("<span class="nowiki">http://example.tld/zzz.xul</span>", "dlg", "", "pizza", 6.98);
</pre>

<h3 id="Notes" name="Notes">Observações</h3>

<h4 id="New_Features" name="New_Features">Novas funcionalidades</h4>

<p><code>all</code> - Initially activates (or deactivates <code>("all=no")</code>) all chrome (except the behaviour flags <code>chrome</code>, <code>dialog</code> and <code>modal</code>). These can be overridden (so <code>"menubar=no,all"</code> turns on all chrome except the menubar.) This feature is explicitly ignored by <a href="/en/DOM/window.open" title="en/DOM/window.open">window.open</a>. <code>window.openDialog</code> finds it useful because of its different default assumptions.</p>

<h4 id="Default_behaviour" name="Default_behaviour">Comportamento padrão</h4>

<p>The <code>chrome</code> and <code>dialog</code> features are always assumed on, unless explicitly turned off ("<code>chrome=no</code>"). <code>openDialog</code> treats the absence of the features parameter as does <a href="/en/DOM/window.open" title="en/DOM/window.open">window.open</a>, (that is, an empty string sets all features to off) except <code>chrome</code> and <code>dialog</code>, which default to on. If the <code>features</code> parameter is a zero-length string, or contains only one or more of the behaviour features (<code>chrome</code>, <code>dependent</code>, <code>dialog</code> and <code>modal</code>) the chrome features are assumed "OS' choice." That is, window creation code is not given specific instructions, but is instead allowed to select the chrome that best fits a dialog on that operating system.</p>

<h4 id="Passing_extra_parameters_to_the_dialog" name="Passing_extra_parameters_to_the_dialog">Passando parâmetros extras para o diálogo</h4>

<p>Para passar parâmento extra para a janela de diálogo, você pode simplesmente pode fornece=lo depois do parâmetro <code>windowFeatures</code>:</p>

<pre class="brush: js">openDialog("<span class="brush: js">http://example.tld/zzz.xul</span>", "dlg", "", "pizza", 6.98);
</pre>

<p>Os parâmetros serão empacotados em uma propriedade chamada <code>arguments</code> do tipo <a href="/en/Core_JavaScript_1.5_Reference/Global_Objects/Array" title="en/Core_JavaScript_1.5_Reference/Global_Objects/Array">Array</a>, e essa propriedade será adicionada para a nova janela de diálogo.</p>

<p>Para acessar esses parâmetros extras da janela de diálogo, use o seguinte esquema:</p>

<pre class="brush: js">var food  = window.arguments[0];
var price = window.arguments[1];
</pre>

<p>Note que você pode acessar esta propriedade de qualwuer lugar do código de diálogo.. (<a href="/en/Code_snippets/Dialogs_and_Prompts#Passing_arguments_and_displaying_a_dialog" title="en/Code_snippets/Dialogs_and_Prompts#Passing_arguments_and_displaying_a_dialog">Outro exemplo</a>).</p>

<h4 id="Returning_values_from_the_dialog" name="Returning_values_from_the_dialog">Retornando valores do diálogo</h4>

<p>Dado que <code>window.close()</code> apaga todas a propriedades associadas com a janela de diálogo (isto é, as variáveis especificadas no código javascript que é carregado a partir da janela de diálogo), não é possível passar os valores retornados depois da operação de fechamento usando variáveis globais (ou qualquer outro construtor).</p>

<p>Para ser possível passar valores de volta para a janela que chamou, você deve fornecer algum objeto via parâmetros extra. Em seguida, pode acessar esse objeto de dentro do código de diálogo e definir as propriedades nele, que contém os valores que você deseja retornar ou preservar passado a operação <code>window.close()</code>.</p>

<pre class="brush: js">var retVals = { address: null, delivery: null };
openDialog("<span class="brush: js">http://example.tld/zzz.xul</span>", "dlg", "modal", "pizza", 6.98, retVals);
</pre>

<p>Se você definir as propriedades do objeto <code>retVals</code> no código de diálogo, conforme descrito abaixo, agora você pode acessá-los via array <code>retVals</code> depois do retorno da chamada de <code>openDialog()</code>.</p>

<p>Dentro do código de diálogo, você pode definir as propriedades da seguinte forma:</p>

<pre class="brush: js">var retVals = window.arguments[2];
retVals.address  = enteredAddress;
retVals.delivery = "immediate";
</pre>

<p>Veja também . (<a href="/en/Code_snippets/Dialogs_and_Prompts#Passing_arguments_and_displaying_a_dialog" title="en/Code_snippets/Dialogs_and_Prompts#Passing_arguments_and_displaying_a_dialog">Outro exemplo</a>).<br>
 veja também window.importDialog (mobile).</p>

<h3 id="Specification" name="Specification">Especificação</h3>

{{Specifications}}
