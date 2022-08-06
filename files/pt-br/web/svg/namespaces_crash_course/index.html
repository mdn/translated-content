---
title: Intensivo de Namespaces
slug: Web/SVG/Namespaces_Crash_Course
tags:
  - SVG
  - XML
translation_of: Web/SVG/Namespaces_Crash_Course
original_slug: Web/SVG/Intensivo_de_Namespaces
---
<p>Como um dialeto <a href="/pt-BR/docs/Glossario/XML" title="en-US/docs/Glossary/XML">XML</a>, o <a href="/pt-BR/docs/Web/SVG" title="en-US/docs/Web/SVG">SVG</a> tem <em>namespace</em>. É importante entender o conceito de <em><a href="/pt-BR/docs/Web/SVG/Intensivo_de_Namespaces">namespaces</a></em> e como eles são usados se você planeja criar seu próprio conteúdo em SVG. Versões de visualizadores SVG prévias ao lançamento do Firefox 1.5 infelizmente deu pouca atenção aos <em>namespaces </em>mas eles são essenciais para dialetos multi-XML suportando agentes de usuários como navegadores baseados em <a href="/en-US/docs/Mozilla/Gecko" title="en-US/docs/Mozilla/Gecko">Gecko</a> que devem ser muito rigorosos. Tome um tempo para entender <em>namespaces </em>agora e irá te privar de muita dor de cabeça no futuro.</p>

<h3 id="Experiência">Experiência</h3>

<p>Tem sido uma longa meta do W3C para fazer possível para diferentes tipos de conteúdo baseado em XML ser misturado no mesmo arquivo XML. Por exemplo, SVG e <a href="/en-US/docs/Web/MathML" title="en-US/docs/Web/MathML">MathML</a> podem ser incorporados diretamente em um documento cientificamente baseado em XHTML. Ser apto de misturar tipos de conteúdo como este tem muitas vantagens, mas também requeriu problemas reais para serem resolvidos.</p>

<p>Naturalmente, cada dialeto XML define o significado de um nome de tag de marcação descrito em sua especificação. O problema em misturar conteúdo de diferentes dialetos XML em um único documento XML é que as tags definidas por um dialeto podem ter o mesmo nome que as tags definidas por outro. Por exemplo, ambos XHTML e SVG tem uma tag <code>&lt;title&gt;</code>. Como o software deveria distinguir entre os dois? Na verdade, como o software conta quando o conteúdo XML é algo que ele conhece sobre, e não somente um arquivo XML sem significado contendo nomes de tags arbitrárias desconhecidas para ele?</p>

<p>Contrário à opinição popular, a resposta para esta pergunta não é "ele pode dizer pela declaração <code>DOCTYPE</code>". DTD's não foram feitos com conteúdo misto levado em consideração, e tentativas passadas de criar DTD's de conteúdo misto são hoje consideradas de terem falhado. O XML, e alguns dialetos XML (incluindo SVG), não requerem uma declaração <code>DOCTYPE</code>, e SVG 1.2 nem terá um. O fato que declarações <code>DOCTYPE</code> (usualmente) combinam o conteúdo em arquivos de tipo de conteúdo únicos é uma mera coincidência. Os DTDs são somente para validação, não para identificação de conteúdo. Softwared que enganam e identificam conteúdo XML usando sua declaração <code>DOCTYPE</code> causam dano.</p>

<p>A resposta real para a pergunta é que um conteúdo XML conta para o software qual dialeto os nomes de tag pertencem ao dar "declarações de <em>namespaces</em>" para as tags. </p>

<h3 id="Declaring_namespaces" name="Declaring_namespaces">Declarando <em>namespaces</em></h3>

<p>O que estas declarações de <em>namespace </em>parecem, e onde elas vão? Aqui vai um exemplo curto.</p>

<pre>&lt;svg xmlns="http://www.w3.org/2000/svg"&gt;
  &lt;!-- mais tags aqui --&gt;
&lt;/svg&gt;
</pre>

<p>A declaração de <em>namespace </em>é fornecida por um atributo <code>xmlns</code>. Este atributo diz que a tag <code>&lt;svg&gt;</code> e suas tags filhas pertencem a qualquer dialeto XML que tem o nome de <em>namespace </em><span class="nowiki">'http://www.w3.org/2000/svg'</span> que é, com certeza, SVG. Note a declaração de <em>namespace </em>somente precisa ser ser fornecida de uma vez em uma tag raiz. A declaração define o <em>namespace padrão</em>, então o software sabe que todas as tags descendentes de tags <code>&lt;svg&gt;</code> também pertencem ao mesmo <em>namespace</em>. Softwares conferem para ver se eles reconhecem o nome de <em>namespace </em>para determinar se eles sabem como lidar com a marcação. </p>

<p>Note que nomes de <em>namespace </em>são somente strings, então o fato que o nome de <em>namespace </em>SVG também parece com um URI não é importante. URI's são comumente usadas porque eles são únicos, a intenção não é para "linkar" em algum lugar. (Na verdade URI's são usadas tão frequentemente que o termo "URI de <em>namespace</em>" é comumente usado ao invés de "nome de namespace".)</p>

<h4 id="Redeclaring_the_default_namespace" name="Redeclaring_the_default_namespace">Redeclarando o <em>namespace </em>padrão</h4>

<p>Se todos os descendentes da tag raiz também são definidos para estarem presentes no <em>namespace </em>padrão, como você mistura conteúdo de outro <em>namespace</em>? Fácil. Você apenas redefine o <em>namespace </em>padrão. Aqui vai um exemplo simples.</p>

<pre>&lt;html xmlns="http://www.w3.org/1999/xhtml"&gt;
  &lt;body&gt;
    &lt;!-- algumas tags XHTML aqui --&gt;
    &lt;svg xmlns="http://www.w3.org/2000/svg" width="300px" height="200px"&gt;
      &lt;!-- algumas tags SVG aqui --&gt;
    &lt;/svg&gt;
    &lt;!-- algumas tags XHTML aqui --&gt;
  &lt;/body&gt;
&lt;/html&gt;
</pre>

<p>Neste exemplo o atributo <code>xmlns</code> na tag raíz <code>&lt;html&gt;</code> declara o <em>namespace </em>padrão para ser XHTML. Como um resultado, ela e todas as tags filhas são interpretadas pelo software como pertencente ao XHTML, exceto para a tag <code>&lt;svg&gt;</code>. A tag <code>&lt;svg&gt;</code> tem seu próprio atributo <code>xmlns</code>, e ao redeclarar o <em>namespace </em>padrão, isto conta para o software que a tag <code>&lt;svg&gt;</code> e suas descendentes (a menos que elas também redeclarem o <em>namespace </em>padrão) pertencem ao SVG.</p>

<p>Viu? <em>Namespaces </em>não são tão difíceis.</p>

<h4 id="Declaring_namespace_prefixes" name="Declaring_namespace_prefixes">Declarando prefixos de <em>namespaces</em></h4>

<p>Dialetos XML não somente definem suas próprias tags, mas também seus próprios atributos. Por padrão, atributos não tem um <em>namespace</em>, e são conhecidos somente por ser únicos porque aparecem em um elemento que por si só tem um nome único. No entanto, algumas vezes é necessário definir atributos para que eles possam ser reusados em diferentes elementos e ainda sim serem considerados como sendo do mesmo atributo, independente do elemento com o qual eles são usados. Um exemplo muito bom disto é o atributo <code>href</code> definido pela especificação XLink. Este atributo é usado comumente por outros dialetos XML como um meio de conectar a recursos externos. Mas como você conta para o software qual dialeto o atributo pertence, neste caso XLink? Considere o exemplo seguinte.</p>

<pre>&lt;svg xmlns="http://www.w3.org/2000/svg"
     xmlns:xlink="http://www.w3.org/1999/xlink"&gt;
  &lt;script xlink:href="o-script-mais-legal.js" type="text/ecmascript"/&gt;
&lt;/svg&gt;
</pre>

<p>Este exemplo tem o atributo de aparência bastante incomum <code>xmlns:xlink</code>. Como você pode ter adivinhado da primeira parte 'xmlns', esta é outra declaração de <em>namespace</em>. Contudo, ao invés de definir o <em>namespace </em>padrão, esta declaração de <em>namespace </em>define o namespace para alguma coisa chamada como "prefixo <em>namespace</em>". Neste caso, nós escolhemos usar o prefixo <code>xlink</code> (a segunda parte) uma vez que o prefixo será usado para contar ao software sobre os atributos que pertencem ao XLink.</p>

<p>Como seus nomes sugerem, prefixos de <em>namespace </em>são usados para prefixar nomes de atributos e nomes de tags. Isto é feito colocando o prefixo de <em>namespace </em>e dois pontos antes do nomes de atributo como mostrado na tag <code>&lt;script&gt;</code> no exemplo acima. Isto conta para o software que aquele atributo particular pertence ao <em>namespace </em>atribuído ao prefixo de <em>namespace </em>(XLink), e é um atribuído que pode ser usado com o mesmo significado em outras tags.</p>

<p>Note que é um erro de XML usar um prefixo que não foi ligado au um nome de <em>namespace</em>. A ligação criada pelo atributo <code>xmlns:xlink</code> no exemplo acima é absolutamente essencial se o atributo <code>xlink:href</code> não é para para causar um erro. Este atributo XLink é também frequentemente usado no SVG nas tags <code>&lt;a&gt;</code>, <code>&lt;use&gt;</code> e <code>&lt;image&gt;</code>, dentre outros, então é uma boa idéia sempre incluir a declaração XLink em seus documentos.</p>

<p>Aparte, é útil saber que prefixos podem também ser usados para names de tags. Isto conta para o software que aquela tag em particular (não a tag filha) pertence ao <em>namespace </em>ligado ao prefixo. Saber disso irá te poupar de confusão se você se deparar com uma marcação como a do exemplo seguinte:</p>

<pre>&lt;html xmlns="http://www.w3.org/1999/xhtml"
      xmlns:svg="http://www.w3.org/2000/svg"&gt;
  &lt;body&gt;
    &lt;h1&gt;SVG incorporado inline no XHTML&lt;/h1&gt;
    &lt;svg:svg width="300px" height="200px"&gt;
      &lt;svg:circle cx="150" cy="100" r="50" fill="#ff0000"/&gt;
    &lt;/svg:svg&gt;
  &lt;/body&gt;
&lt;/html&gt;
</pre>

<p>Note que pelo prefixo de <em>namespace </em>ser usado para a tag <code>&lt;svg:svg&gt;</code> e seu filho <code>&lt;svg:circle&gt;</code>, não foi necessário redeclarar o <em>namespace </em>padrão. Em geral, é melhor redeclarar o <em>namespace </em>padrão ao invés de prefixar muitas tags desta forma. </p>

<h3 id="Scripting_in_namespaced_XML" name="Scripting_in_namespaced_XML"><em>Scripting </em>em XML com <em>namespaces</em></h3>

<p><em>Namespaces </em>não afetam somente a marcação, mas também o <em>scripting</em>. Se você escreve scripts para XML com <em>namespace</em>, como SVG, continue lendo.</p>

<p>A recomendação <a class="external" href="http://www.w3.org/TR/REC-DOM-Level-1/">DOM Level 1</a> foi criado antes da recomendação <em><a class="external" href="http://www.w3.org/TR/REC-xml-names/">original Namespaces in XML</a></em> ser lançada; assim sendo, DOM1 não está ciente de <em>namespaces</em>. Isto causa problemas para XML com namespaces, como SVG. Para resolver estes problemas, a recomendação <a class="external" href="http://www.w3.org/TR/DOM-Level-2-Core/">DOM Level 2 Core</a> adicionou equivalentes cientes do <em>namespace </em>de todos os métodos aplicáveis do DOM Nível 1. Quando estiver <em>scripting</em> em SVG, é <em><a href="http://www.w3.org/TR/DOM-Level-2-Core/core.html#Namespaces-Considerations">importante usar os métodos cientes de namespace</a></em>. A tabela abaixo lista os métodos DOM1 que não devem ser usados em SVG, junto com seus equivalentes em DOM2 que devem ser usados ao invés.</p>

<table class="fullwidth-table">
 <tbody>
  <tr>
   <th>DOM1 (não use)</th>
   <th>DOM2 (use estes!)</th>
  </tr>
  <tr>
   <td><a class="external" href="http://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#method-createAttribute">createAttribute</a></td>
   <td><a class="external" href="http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-DocCrAttrNS">createAttributeNS</a></td>
  </tr>
  <tr>
   <td><a class="external" href="http://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#method-createElement">createElement</a></td>
   <td><a class="external" href="http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-DocCrElNS">createElementNS</a></td>
  </tr>
  <tr>
   <td><a class="external" href="http://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#method-getAttributeNode">getAttributeNode</a></td>
   <td><a class="external" href="http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-ElGetAtNodeNS">getAttributeNodeNS</a></td>
  </tr>
  <tr>
   <td><a class="external" href="http://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#method-getAttribute">getAttribute</a></td>
   <td><a class="external" href="http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-ElGetAttrNS">getAttributeNS</a></td>
  </tr>
  <tr>
   <td><a class="external" href="http://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#method-getElementsByTagName">getElementsByTagName</a></td>
   <td><a class="external" href="http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-getElBTNNS">getElementsByTagNameNS</a> (também <a class="external" href="http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-A6C90942">added to Element</a>)</td>
  </tr>
  <tr>
   <td><a class="external" href="http://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#method-getNamedItem">getNamedItem</a></td>
   <td><a class="external" href="http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-getNamedItemNS">getNamedItemNS</a></td>
  </tr>
  <tr>
   <td><a class="external" href="http://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#">hasAttribute</a></td>
   <td><a class="external" href="http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-ElHasAttrNS">hasAttributeNS</a></td>
  </tr>
  <tr>
   <td><a class="external" href="http://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#method-removeAttribute">removeAttribute</a></td>
   <td><a class="external" href="http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-ElRemAtNS">removeAttributeNS</a></td>
  </tr>
  <tr>
   <td><a class="external" href="http://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#method-removeNamedItem">removeNamedItem</a></td>
   <td><a class="external" href="http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-removeNamedItemNS">removeNamedItemNS</a></td>
  </tr>
  <tr>
   <td><a class="external" href="http://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#method-setAttribute">setAttribute</a></td>
   <td><a class="external" href="http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-ElSetAttrNS">setAttributeNS</a></td>
  </tr>
  <tr>
   <td><a class="external" href="http://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#method-setAttributeNode">setAttributeNode</a></td>
   <td><a class="external" href="http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-ElSetAtNodeNS">setAttributeNodeNS</a></td>
  </tr>
  <tr>
   <td><a class="external" href="http://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#method-setNamedItem">setNamedItem</a></td>
   <td><a class="external" href="http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-setNamedItemNS">setNamedItemNS</a></td>
  </tr>
 </tbody>
</table>

<p>O primeiro argumento para todos os métodos cientes de <em>namespace </em>em DOM2 devem ser nomes de <em>namespace </em>(também conhecidos como <em>namespace </em>URI) do elemento ou atributo em questão. Para <strong>elementos</strong> SVG isto é <span class="nowiki">'http://www.w3.org/2000/svg'</span>. Contudo, note cuidadosamente: as recomendações <em><a class="external" href="http://www.w3.org/TR/xml-names11/#defaulting">Namespaces in XML 1.1</a></em> declara que o nome de <em>namespace </em>para atributos sem um prefixo não tem um valor. Em outras palavras, states that the <em>namespace </em>name for attributes without a prefix does not have a value. In other words, embora os atributos pertencem ao namespace da tag, você não usa o nome de namespace da tag. Em vez disso, <strong>você deve usar nulo como nome de <em>namespace </em>para atributos não qualificados(sem prefixos)</strong>. Então, para criar um <em>elemento</em> SVG <code>rect</code> usando <code>document.createElementNS()</code>, você deve escrever:</p>

<pre><code class="language-javascript">document.createElementNS('http://www.w3.org/2000/svg', 'rect');</code></pre>

<p>Mas para recuperar o valor de atributo <code>x</code> em um elemento SVG <code>rect</code>, você deve escrever:</p>

<pre class="eval"><code class="language-javascript">rect.getAttributeNS(<strong>null</strong>, 'x');</code></pre>

<p>Note que isto não é o caso para atributos <em>com</em> um prefixo de <em>namespace </em>(atributos que não pertencem ao mesmo dialeto XML como a tag). Atributos como o <code>xlink:href</code> requerem o nome de <em>namespace </em>que foi designado para aquele prefixo (<span class="nowiki">http://www.w3.org/1999/xlink</span> para XLink). Consequentemente para pegar o valor do atributo <code>xlink:href</code> de um elemento <code>&lt;a&gt;</code> em SVG você deveria escrever:</p>

<pre><code class="language-javascript">elt.getAttributeNS('http://www.w3.org/1999/xlink', 'href');</code></pre>

<p>Para definir atributos que tem um <em>namespace</em>, é recomendado (mas não requerido) que você também inclua seus prefixos no segundo argumento para que o DOM possa, depois, ser facilmente convertido depois para XML (se, por exemplo você quer enviá-los de volta para o servidor). Por exemplo: </p>

<pre><code class="language-javascript">elt.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', 'otherdoc.svg');</code></pre>

<p>Como um exemplo final, aqui está a demonstração de como você deveria criar um elemento <code>&lt;image&gt;</code> dinamicamente usando script: </p>

<pre><code class="language-javascript">var SVG_NS = 'http://www.w3.org/2000/svg';
var XLink_NS = 'http://www.w3.org/1999/xlink';
var image = document.createElementNS(SVG_NS, 'image');
image.setAttributeNS(null, 'width', '100');
image.setAttributeNS(null, 'height', '100');
image.setAttributeNS(XLink_NS, 'xlink:href', 'flower.png');
</code></pre>

<h3 id="Conclusion" name="Conclusion">Conclusão</h3>

<p>Tenha certeza que você sempre declara os <em>namespaces </em>que você usa em seus arquivos XML. Se você não usar, softwares como Firefox não reconhecerão seus conteúdos e irão simplesmente mostrar a marcação XML ou informar o usuário que há um erro no XML. É uma boa idéia usar um template que inclui todas as declarações de <em>namespace </em>comumente usadas ao criar novos arquivos SVG. Se você não tem um ainda, faça um começando com o seguinte código: </p>

<pre>&lt;svg xmlns="http://www.w3.org/2000/svg"
     xmlns:xlink="http://www.w3.org/1999/xlink"&gt;
&lt;/svg&gt;
</pre>

<p>Mesmo que você não use todos aqueles <em>namespaces</em> em um documento, não há dano ao incluir declarações de <em>namespace</em>. Isto pode te privar de alguns erros irritantes se você acabar adicionando conteúdo de um dos <em>namespaces </em>não usados em datas posteriores. </p>

<h3 id="A_full_example" name="A_full_example">Um exemplo completo</h3>

<p>Para um exemplo completo, veja <em><a href="/en-US/docs/Web/SVG/Namespaces_Crash_Course/Example">SVG: Namespaces Crash Course: Example</a></em>.</p>
