---
title: Examples of web and XML development using the DOM
slug: Web/API/Document_Object_Model/Examples
translation_of: Web/API/Document_Object_Model/Examples
original_slug: DOM/Referencia_do_DOM/Examples
---
<p>Este capítulo fornece exemplos mais longos de desenvolvimento de Web e XML usando o DOM. Sempre que possível, os exemplos usam APIs, truques e padrões comuns no JavaScript para manipular o objeto de documento.</p>

<h2 id="Example_1:_height_and_width" name="Example_1:_height_and_width">Exemplo 1: altura e largura</h2>

<p>O exemplo a seguir mostra o uso das propriedades de altura e largura ao lado de imagens de dimensões variáveis:</p>

<pre class="brush:html">&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
&lt;title&gt;width/height example&lt;/title&gt;
&lt;script&gt;
function init() {
  var arrImages = new Array(3);

  arrImages[0] = document.getElementById("image1");
  arrImages[1] = document.getElementById("image2");
  arrImages[2] = document.getElementById("image3");

  var objOutput = document.getElementById("output");
  var strHtml = "&lt;ul&gt;";

  for (var i = 0; i &lt; arrImages.length; i++) {
    strHtml += "&lt;li&gt;image" + (i+1) +
            ": height=" + arrImages[i].height +
            ", width=" + arrImages[i].width +
            ", style.height=" + arrImages[i].style.height +
            ", style.width=" + arrImages[i].style.width +
            "&lt;\/li&gt;";
  }

  strHtml += "&lt;\/ul&gt;";

  objOutput.innerHTML = strHtml;
}
&lt;/script&gt;
&lt;/head&gt;
&lt;body onload="init();"&gt;

&lt;p&gt;Image 1: no height, width, or style
  &lt;img id="image1" src="http://www.mozilla.org/images/mozilla-banner.gif"&gt;
&lt;/p&gt;

&lt;p&gt;Image 2: height="50", width="500", but no style
  &lt;img id="image2"
       src="http://www.mozilla.org/images/mozilla-banner.gif"
       height="50" width="500"&gt;
&lt;/p&gt;

&lt;p&gt;Image 3: no height, width, but style="height: 50px; width: 500px;"
  &lt;img id="image3"
       src="http://www.mozilla.org/images/mozilla-banner.gif"
       style="height: 50px; width: 500px;"&gt;
&lt;/p&gt;

&lt;div id="output"&gt; &lt;/div&gt;
&lt;/body&gt;
&lt;/html&gt;
</pre>

<h2 id="Example_2:_Image_Attributes" name="Example_2:_Image_Attributes">Exemplo 2: Atributos de Imagem</h2>

<pre class="brush:html">&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
&lt;title&gt;Modifying an image border&lt;/title&gt;

&lt;script&gt;
function setBorderWidth(width) {
  document.getElementById("img1").style.borderWidth = width + "px";
}
&lt;/script&gt;
&lt;/head&gt;

&lt;body&gt;
&lt;p&gt;
  &lt;img id="img1"
       src="image1.gif"
       style="border: 5px solid green;"
       width="100" height="100" alt="border test"&gt;
&lt;/p&gt;

&lt;form name="FormName"&gt;
  &lt;input type="button" value="Make border 20px-wide" onclick="setBorderWidth(20);" /&gt;
  &lt;input type="button" value="Make border 5px-wide"  onclick="setBorderWidth(5);" /&gt;
&lt;/form&gt;

&lt;/body&gt;
&lt;/html&gt;
</pre>

<h2 id="Example_3:_Manipulating_Styles" name="Example_3:_Manipulating_Styles">Exemplo 3: Manipulando Estilos</h2>

<p>Neste exemplo simples, algumas propriedades de estilo básicas de um elemento de parágrafo HTML são acessadas usando o objeto de estilo no elemento e as propriedades de estilo CSS do objeto, que podem ser recuperadas e definidas a partir do DOM. Neste caso, você está manipulando os estilos individuais diretamente. No próximo exemplo (veja Exemplo 4), você pode usar folhas de estilo e suas regras para alterar estilos para documentos inteiros.</p>

<pre class="brush:html">&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
&lt;title&gt;Changing color and font-size example&lt;/title&gt;

&lt;script&gt;
function changeText() {
  var p = document.getElementById("pid");

  p.style.color = "blue"
  p.style.fontSize = "18pt"
}
&lt;/script&gt;
&lt;/head&gt;
&lt;body&gt;

&lt;p id="pid" onclick="window.location.href = 'http://www.cnn.com/';"&gt;linker&lt;/p&gt;

&lt;form&gt;
  &lt;p&gt;&lt;input value="rec" type="button" onclick="changeText();" /&gt;&lt;/p&gt;
&lt;/form&gt;

&lt;/body&gt;
&lt;/html&gt;
</pre>

<h2 id="Example_4:_Using_Stylesheets" name="Example_4:_Using_Stylesheets">Exemplo 4: Usando folhas de estilo</h2>

<p>A propriedade styleSheets no objeto de documento retorna uma lista das folhas de estilo que foram carregadas nesse documento. Você pode acessar essas folhas de estilo e suas regras individualmente usando os objetos stylesheet, style e CSSRule, como demonstrado neste exemplo, que imprime todos os seletores de regras de estilo para o console.</p>

<pre class="brush:js">var ss = document.styleSheets;

for(var i = 0; i &lt; ss.length; i++) {
  for(var j = 0; j &lt; ss[i].cssRules.length; j++) {
    dump( ss[i].cssRules[j].selectorText + "\n" );
  }
}</pre>

<p>Para um documento com uma única folha de estilo na qual as três regras a seguir são definidas:</p>

<pre class="brush:css">body { background-color: darkblue; }
p { font-face: Arial; font-size: 10pt; margin-left: .125in; }
#lumpy { display: none; }
</pre>

<p>Este script produz o seguinte:</p>

<pre>BODY
P
#LUMPY
</pre>

<h2 id="Example_5:_Event_Propagation" name="Example_5:_Event_Propagation"> </h2>

<h2 id="Example_5:_Event_Propagation" name="Example_5:_Event_Propagation">Exemplo 5: Propagação de Eventos</h2>

<p>Este exemplo demonstra como eventos disparar e são tratados no DOM de uma forma muito simples. Quando o corpo deste documento HTML é carregado, um ouvinte de evento é registrado com a linha superior da tabela. O ouvinte de eventos processa o evento executando a função stopEvent, que altera o valor na célula inferior da tabela.</p>

<p>No entanto, stopEvent também chama um método de objeto de evento, {{domxref ("event.stopPropagation")}}, que mantém o evento de borbulhar mais para cima no DOM. Observe que a própria tabela possui um manipulador de eventos {{domxref ("element.onclick", "onclick")}} que deve exibir uma mensagem quando a tabela é clicada. Mas o método stopEvent interrompeu a propagação e, portanto, após a atualização dos dados na tabela, a fase de evento é efetivamente encerrada e uma caixa de alerta é exibida para confirmar isso.</p>

<pre class="brush:html">&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
&lt;title&gt;Event Propagation&lt;/title&gt;

&lt;style&gt;
#t-daddy { border: 1px solid red }
#c1 { background-color: pink; }
&lt;/style&gt;

&lt;script&gt;
function stopEvent(ev) {
  c2 = document.getElementById("c2");
  c2.innerHTML = "hello";

  // this ought to keep t-daddy from getting the click.
  ev.stopPropagation();
  alert("event propagation halted.");
}

function load() {
  elem = document.getElementById("tbl1");
  elem.addEventListener("click", stopEvent, false);
}
&lt;/script&gt;
&lt;/head&gt;

&lt;body onload="load();"&gt;

&lt;table id="t-daddy" onclick="alert('hi');"&gt;
  &lt;tr id="tbl1"&gt;
    &lt;td id="c1"&gt;one&lt;/td&gt;
  &lt;/tr&gt;
  &lt;tr&gt;
    &lt;td id="c2"&gt;two&lt;/td&gt;
  &lt;/tr&gt;
&lt;/table&gt;

&lt;/body&gt;
&lt;/html&gt;
</pre>

<h2 id="Example_6:_getComputedStyle" name="Example_6:_getComputedStyle">Exemplo 6: getComputedStyle</h2>

<p>Este exemplo demonstra como o método {{domxref ("window.getComputedStyle")}} pode ser usado para obter os estilos de um elemento que não são definidos usando o atributo de estilo ou com JavaScript (por exemplo, elt.style.backgroundColor = "rgb (173, 216, 230) "). Estes últimos tipos de estilos podem ser recuperados com a propriedade {{domxref ("element.style", "elt.style")}} mais direta, cujas propriedades estão listadas na <a href="https://developer.mozilla.org/pt-BR/docs/Web/CSS/CSS_Reference">Lista de Propriedades do DOM CSS</a>.</p>

<p>GetComputedStyle() retorna um objeto ComputedCSSStyleDeclaration, cujas propriedades de estilo individuais podem ser referenciadas com o método getPropertyValue() desse objeto, como mostra o seguinte exemplo de documento.</p>

<pre class="brush:html">&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;

&lt;title&gt;getComputedStyle example&lt;/title&gt;

&lt;script&gt;
function cStyles() {
  var RefDiv = document.getElementById("d1");
  var txtHeight = document.getElementById("t1");
  var h_style = document.defaultView.getComputedStyle(RefDiv, null).getPropertyValue("height");

  txtHeight.value = h_style;

  var txtWidth = document.getElementById("t2");
  var w_style = document.defaultView.getComputedStyle(RefDiv, null).getPropertyValue("width");

  txtWidth.value = w_style;

  var txtBackgroundColor = document.getElementById("t3");
  var b_style = document.defaultView.getComputedStyle(RefDiv, null).getPropertyValue("background-color");

  txtBackgroundColor.value = b_style;
}
&lt;/script&gt;

&lt;style&gt;
#d1 {
  margin-left: 10px;
  background-color: rgb(173, 216, 230);
  height: 20px;
  max-width: 20px;
}
&lt;/style&gt;

&lt;/head&gt;

&lt;body&gt;

&lt;div id="d1"&gt;&amp;nbsp;&lt;/div&gt;

&lt;form action=""&gt;
  &lt;p&gt;
    &lt;button type="button" onclick="cStyles();"&gt;getComputedStyle&lt;/button&gt;
    height&lt;input id="t1" type="text" value="1" /&gt;
    max-width&lt;input id="t2" type="text" value="2" /&gt;
    bg-color&lt;input id="t3" type="text" value="3" /&gt;
  &lt;/p&gt;
&lt;/form&gt;

&lt;/body&gt;
&lt;/html&gt;
</pre>

<h2 id="Example_7:_Displaying_Event_Object_Properties" name="Example_7:_Displaying_Event_Object_Properties">Exemplo 7: Exibindo Propriedades de Evento do Objeto</h2>

<p>Este exemplo usa métodos DOM para exibir todas as propriedades do objeto {{domxref ("window.onload")}} {{domxref ("evento")}} e seus valores em uma tabela. Ele também mostra uma técnica útil de usar um laço para iterar sobre as propriedades de um objeto para obter seus valores.</p>

<p>As propriedades dos objetos de evento diferem muito entre os navegadores, o <a href="https://dom.spec.whatwg.org">WHATWG DOM Standard</a> lista as propriedades padrão, porém muitos navegadores estenderam muito esses valores.</p>

<p>Coloque o seguinte código em um arquivo de texto em branco e carregue-o em uma variedade de navegadores, você ficará surpreso com o número diferente e nomes de propriedades. Você também pode querer adicionar alguns elementos na página e chamar essa função de manipuladores de eventos diferentes.</p>

<pre class="brush:html">&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
&lt;meta charset="utf-8"/&gt;
&lt;title&gt;Show Event properties&lt;/title&gt;

&lt;style&gt;
table { border-collapse: collapse; }
thead { font-weight: bold; }
td { padding: 2px 10px 2px 10px; }

.odd { background-color: #efdfef; }
.even { background-color: #ffffff; }
&lt;/style&gt;

&lt;script&gt;

function showEventProperties(e) {
  function addCell(row, text) {
    var cell = row.insertCell(-1);
    cell.appendChild(document.createTextNode(text));
  }

  var e = e || window.event;
  document.getElementById('eventType').innerHTML = e.type;

  var table = document.createElement('table');
  var thead = table.createTHead();
  var row = thead.insertRow(-1);
  var lableList = ['#', 'Property', 'Value'];
  var len = lableList.length;

  for (var i=0; i&lt;len; i++) {
    addCell(row, lableList[i]);
  }

  var tbody = document.createElement('tbody');
  table.appendChild(tbody);

  for (var p in e) {
    row = tbody.insertRow(-1);
    row.className = (row.rowIndex % 2)? 'odd':'even';
    addCell(row, row.rowIndex);
    addCell(row, p);
    addCell(row, e[p]);
  }

  document.body.appendChild(table);
}

window.onload = function(event){
  showEventProperties(event);
}
&lt;/script&gt;
&lt;/head&gt;

&lt;body&gt;
&lt;h1&gt;Properties of the DOM &lt;span id="eventType"&gt;&lt;/span&gt; Event Object&lt;/h1&gt;
&lt;/body&gt;

&lt;/html&gt;
</pre>

<h2 id="Example_8:_Using_the_DOM_Table_Interface" name="Example_8:_Using_the_DOM_Table_Interface">Exemplo 8: Usando a interface de tabela  do DOM</h2>

<p>A interface DOM HTMLTableElement fornece alguns métodos de conveniência para criar e manipular tabelas. Dois métodos usados com freqüência são {{domxref ("HTMLTableElement.insertRow")}} e {{domxref ("tableRow.insertCell")}}.</p>

<p>Para adicionar uma linha e algumas células a uma tabela existente:</p>

<pre class="brush:html">&lt;table id="table0"&gt;
 &lt;tr&gt;
  &lt;td&gt;Row 0 Cell 0&lt;/td&gt;
  &lt;td&gt;Row 0 Cell 1&lt;/td&gt;
 &lt;/tr&gt;
&lt;/table&gt;

&lt;script&gt;
var table = document.getElementById('table0');
var row = table.insertRow(-1);
var cell,
    text;

for (var i = 0; i &lt; 2; i++) {
  cell = row.insertCell(-1);
  text = 'Row ' + row.rowIndex + ' Cell ' + i;
  cell.appendChild(document.createTextNode(text));
}
&lt;/script&gt;
</pre>

<h3 id="Notes" name="Notes"><br>
 Notas</h3>

<ul>
 <li>A propriedade {{domxref ("element.innerHTML", "innerHTML")}} de uma tabela nunca deve ser usada para modificar uma tabela, embora você possa usá-la para escrever uma tabela inteira ou o conteúdo de uma célula.</li>
 <li>Se os métodos DOM Core {{domxref ("document.createElement")}} e {{domxref ("Node.appendChild")}} são usados para criar linhas e células, o IE requer que eles sejam anexados a um elemento tbody, enquanto outros Os navegadores permitirão acrescentar a um elemento da tabela (as linhas serão adicionadas ao último elemento tbody).</li>
 <li>Há uma série de outros métodos convenientes pertencentes à<a href="/en-US/docs/"> tabela de interface</a> que podem ser usados para criar e modificar tabelas.</li>
</ul>

<h2 id="Subnav">Subnav</h2>

<ul>
 <li><a href="/en-US/docs/Web/API/Document_Object_Model">DOM Reference</a></li>
 <li><a href="/en-US/docs/Web/API/Document_Object_Model/Introduction">Introduction to the DOM</a></li>
 <li><a href="/en-US/docs/Web/API/Document_Object_Model/Events">Events and the DOM</a></li>
 <li><a href="/en-US/docs/Web/API/Document_Object_Model/Examples">Examples</a></li>
</ul>
