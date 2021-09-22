---
title: CustomElementRegistry.define()
slug: Web/API/CustomElementRegistry/define
translation_of: Web/API/CustomElementRegistry/define
---

<p>{{APIRef("CustomElementRegistry")}}</p>

<p>
    O método <code><strong>define()</strong></code> da interface {{domxref("CustomElementRegistry")}} define um novo elemento personalizado.
</p>

<p>Dois tipos de elementos personalizados podem ser criados:</p>

<ul>
    <li><strong>Elementos personalizados autônomos</strong>: Elementos autônomos; estes herdam de HTMLElement (Elemento HTML genérico).</li>
    <li>
        <strong>Elementos personalizados pré-construídos</strong>: Estes elementos herdam - e estendem - elementos HTML já existentes (p.ej HTMLParagraphElement que é um elemento HTML
        <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/p" title="The HTML &lt;p> element represents a paragraph."><code>&lt;p&gt;</code></a
        >).
    </li>
</ul>

<h2 id="Sintaxe">Sintaxe</h2>

<pre class="syntaxbox">
customElements.define(<em>name</em>, <em>constructor</em>, <em>options</em>);
</pre>

<h3 id="Parâmetros">Parâmetros</h3>

<dl>
    <dt>name</dt>
    <dd>Nome do novo item personalizado. Observe que os nomes dos elementos personalizados devem conter um hífen.</dd>
    <dt>constructor</dt>
    <dd>Construtor para o novo elemento personalizado</dd>
    <dt>options {{optional_inline}}</dt>
    <dd>
        Um objeto que controla como o elemento é definido. Atualmente, apenas uma opção é permitida:
        <ul>
            <li><code>extends</code>: String que especifica o nome do elemento pré-definido a partir do qual se estende. Usado para criar<em>elementos personalizados pré-construídos</em>.</li>
        </ul>
    </dd>
</dl>

<h3 id="Valor_de_retorno">Valor de retorno</h3>

<p>Void.</p>

<h3 id="Excecoes">Exceções</h3>

<table class="standard-table">
    <thead>
        <tr>
            <th scope="col">Exceção</th>
            <th scope="col">Descrição</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><code>NotSupportedError</code></td>
            <td>
                El {{domxref("CustomElementRegistry")}} já contém uma entrada com o mesmo nome ou o mesmo construtor (ou já foi definido de alguma outra forma), ou foi especificado
                <code>extends</code> mas o elemento do qual você está tentando estender é desconhecido.
            </td>
        </tr>
        <tr>
            <td><code>SyntaxError</code></td>
            <td>O nome fornecido não é um <a href="https://html.spec.whatwg.org/multipage/custom-elements.html#valid-custom-element-name">nome de elemento personalizado válido</a>.</td>
        </tr>
        <tr>
            <td><code>TypeError</code></td>
            <td>O constructor referenciado não é um constructor</td>
        </tr>
    </tbody>
</table>

<div class="note">
    <p>
        <strong>Nota</strong>: Exceções são frequentemente obtidas <code>NotSupportedError</code>s quando o método <code>define()</code> está falhando, mas é realmente um problema relacionado a
        {{domxref("Element.attachShadow()")}}.
    </p>
</div>

<h2 id="Exemplos">Exemplos</h2>

<h3 id="Elemento_personalizado_autônomo">Elemento personalizado autônomo</h3>

<p>
    O código a seguir é retirado do nosso exemplo <a href="https://github.com/mdn/web-components-examples/tree/master/popup-info-box-web-component">popup-info-box-web-component</a> (<a
        href="https://mdn.github.io/web-components-examples/popup-info-box-web-component/"
        >ver ao vivo</a
    >).
</p>

<pre class="brush: js">
// Crie uma classe para o elemento
class PopUpInfo extends HTMLElement {
  constructor() {
    // Sempre a primeira coisa a fazer é chamar super no construtor
    super();

    // crie um shadow root
    var shadow = this.attachShadow({mode: 'open'});

    // Crie três elementos span
    var wrapper = document.createElement('span');
    wrapper.setAttribute('class','wrapper');

    var icon = document.createElement('span');
    icon.setAttribute('class','icon');
    icon.setAttribute('tabindex', 0);

    var info = document.createElement('span');
    info.setAttribute('class','info');

    // Pegue o conteúdo do atributo de texto e coloque-o no span info
    var text = this.getAttribute('text');
    info.textContent = text;

    // Pegue o conteúdo do atributo img (se existir) e coloque-o no ícone de span
    var imgUrl;
    if(this.hasAttribute('img')) {
      imgUrl = this.getAttribute('img');
    } else {
      imgUrl = 'img/default.png';
    }

    // A extensão não pode ter diretamente uma imagem, mas se contiver um elemento img
    var img = document.createElement('img');
    img.src = imgUrl;
    icon.appendChild(img);

    // Crie os estilos CSS e inclua-os no shadow DOM
    var style = document.createElement('style');

    style.textContent = '.wrapper {' +
                           'position: relative;' +
                        '}' +

                         '.info {' +
                            'font-size: 0.8rem;' +
                            'width: 200px;' +
                            'display: inline-block;' +
                            'border: 1px solid black;' +
                            'padding: 10px;' +
                            'background: white;' +
                            'border-radius: 10px;' +
                            'opacity: 0;' +
                            'transition: 0.6s all;' +
                            'position: absolute;' +
                            'bottom: 20px;' +
                            'left: 10px;' +
                            'z-index: 3;' +
                          '}' +

                          'img {' +
                            'width: 1.2rem' +
                          '}' +

                          '.icon:hover + .info, .icon:focus + .info {' +
                            'opacity: 1;' +
                          '}';

    // anexar os elementos criados (extensões e estilo) ao shadow DOM
    // observe que o span wrapper contém o ícone e os spans de informações

    shadow.appendChild(style);
    shadow.appendChild(wrapper);
    wrapper.appendChild(icon);
    wrapper.appendChild(info);
  }
}

 // Defina um novo elemento
customElements.define('popup-info', PopUpInfo);
</pre>

<pre class="brush: html">&lt;popup-info img="img/alt.png" text="O código de validação do seu cartão (CVC) é um recurso segurança extra - consiste em 3 ou 4 números no verso do seu cartão."&gt;</pre>

<div class="note">
    <p><strong>Nota</strong>: Construtores de elementos personalizados autocontidos devem estender {{domxref("HTMLElement")}}.</p>
</div>

<h3 id="Elemento_personalizado_preconstruido">Elemento personalizado pré-construído</h3>

<p>
    O código a seguir é retirado do nosso exemplo <a href="https://github.com/mdn/web-components-examples/tree/master/word-count-web-component">word-count-web-component</a> (<a
        href="https://mdn.github.io/web-components-examples/word-count-web-component/"
        >ver ao vivo</a
    >).
</p>

<pre class="brush: js">
 
    // Crie uma classe para o elemento
class WordCount extends HTMLParagraphElement {
  constructor() {
    // Sempre a primeira coisa a fazer é chamar super no construtor
    super();

    // contar palavras do pai deste elemento
    var wcParent = this.parentNode;

    // A função countWords conta palavras (mesmo que sejam separadas por amis de um espaço)
    // que existe no nó passado como parâmetro.
    // innerText está definido para objetos <code>HTMLElement</code>, enquanto textContent para todos os objetos Node
    // o operador || nos faz pegar pelo menos um dos dois

    function countWords(node){
      var text = node.innerText || node.textContent
      return text.split(/\s+/g).length;
    }

    var count = 'Words: ' + countWords(wcParent);

    // crie um shadow root
    var shadow = this.attachShadow({mode: 'open'});

    // Crie um nó span com o número de palavras
    var text = document.createElement('span');
    text.textContent = count;

    // Adicione ao shadow root
    shadow.appendChild(text);


    // Atualize o contador quando o conteúdo do elemento mudar
    setInterval(function() {
      var count = 'Words: ' + countWords(wcParent);
      text.textContent = count;
    }, 200)

  }
}

// Defina o novo elemento
customElements.define('word-count', WordCount, { extends: 'p' });</pre
>

<pre class="brush: html">&lt;p is="word-count"&gt;&lt;/p&gt;</pre>

<h3>Criando elemento que desativa a capacidade de utilizar attach no shadow root</h3>

<p>
    Se a classe usada para o elemento contém a propriedade estática `disabledFeatures` retornando a string "shadow" isso fará com que {{domxref("Element.attachShadow()")}} retorne um
    {{domxref("DOMException")}} `NotSupportedError`.
</p>

<pre class="brush: js">
    class PopUpInfo extends HTMLElement {
        static get disabledFeatures() { return ['shadow']; }
      
        constructor() {
          super();
      
          var shadow = this.attachShadow({mode: 'open'});
          // isso fará com que um erro seja lançado quando o elemento for definido.
        }
      }
</pre>

<h2 id="Especificaciones">Especificações</h2>

<table class="standard-table">
    <tbody>
        <tr>
            <th scope="col">Especificação</th>
            <th scope="col">Estado</th>
            <th scope="col">Comentário</th>
        </tr>
        <tr>
            <td>{{SpecName("HTML WHATWG", "custom-elements.html#dom-customelementregistry-define", "customElements.define()")}}</td>
            <td>{{Spec2("HTML WHATWG")}}</td>
            <td>Initial definition.</td>
        </tr>
    </tbody>
</table>

<h2 id="Compatibilidade_navegadores">Compatibilidade com navegadores</h2>

<div>
    <p>{{Compat("api.CustomElementRegistry.define")}}</p>
</div>
