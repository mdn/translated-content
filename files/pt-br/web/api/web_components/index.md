---
title: Web Components
slug: Web/API/Web_components
---

{{DefaultAPISidebar("Web Components")}}

Web Components é uma suíte de diferentes tecnologias que permite a criação de elementos customizados reutilizáveis — com a funcionalidade separada do resto do seu código — e que podem ser utilizados em suas aplicações web.

## Conceitos e uso

Como desenvolvedores, sabemos que é uma boa ideia reutilizar o código o máximo que pudermos. Tradicionalmente, isso não tem sido fácil quando o assunto são estruturas de marcação customizadas — pense no complexo HTML (e estilo e script associados) que, às vezes, deve ser escrito para renderizar controles UI customizados e em como utilizá-los repetidas vezes pode tornar sua página uma bagunça se você não tomar cuidado.

Web Components buscam resolver esses problemas — são formados por três tecnologias principais, que podem ser usadas em conjunto para criar elementos customizados versáteis, com funcionalidade encapsulada, que podem ser reutilizados onde você quiser sem preocupação com conflito de código.

- **Elementos customizados**: Um conjunto de APIs JavaScript que permite definir elementos customizados e seus respectivos comportamentos, podendo ser utilizados de diferentes formas na interface da aplicação.
- **Shadow DOM**: Um conjunto de APIs JavaScript para incorporar uma árvore DOM "fantasma" encapsulada a um elemento — que é renderizada separadamente do DOM do documento principal — e controlar a funcionalidade associada. Nesse caso, você pode manter os recursos de um elemento privados, fazendo com que seu comportamento e estilo possam ser escritos sem medo de causar conflito com outras partes do documento.
- **Templates HTML**: Os elementos {{HTMLElement("template")}} e {{HTMLElement("slot")}} permitem que você escreva templates de marcação que não são exibidas na página. Elas podem então ser reutilizadas várias vezes como modelo de estrutura de um elemento customizado.

A abordagem básica para se implementar um componente web geralmente se parece com isso:

1. Crie uma classe na qual você especifica a funcionalidade do seu componente web, usando a sintaxe de classe do ECMAScript 2015 (veja [Classes](/pt-BR/docs/Web/JavaScript/Reference/Classes) para mais informações).
2. Registre seus elemento customizado através do método {{domxref("CustomElementRegistry.define()")}}, passando o nome do elemento a ser definido, a classe ou função na qual sua funcionalidade foi especificada, e opcionalmente, de qual elemento ele herda suas propriedades.
3. Se necessário, incorpore um shadow DOM ao elemento customizado usando o método {{domxref("Element.attachShadow()")}}. Adicione elementos filhos, listeners, etc., ao shadow DOM usando métodos normais de DOM.
4. Se necessário, defina um template HTML usando {{htmlelement("template")}} e {{htmlelement("slot")}}. Novamente, use os métodos normais de DOM methods para clonar o template e inclui-la ao shadow DOM.
5. Use seu elemento customizado onde você preferir em sua página, da mesma forma que usaria qualquer outro elemento HTML.

## Tutoriais

- [Usando elementos customizados](/pt-BR/docs/Web/Web_Components/Usando_custom_elements)
  - : Um guia que mostra como usar os recursos de elementos customizados para criar componentes web simples, além de como analisar o ciclo de vida das funções de retorno e outros recursos mais avançados.
- [Usando shadow DOM](/pt-BR/docs/Web/Web_Components/Using_shadow_DOM)
  - : Um guia que analisa os fundamentos do shadow DOM, mostrando como incorporá-lo a um elemento, adicioná-lo à árvore do shadow DOM, estilizá-lo, etc.
- [Usando templates e slots](/pt-BR/docs/Web/Web_Components/Using_templates_and_slots)
  - : Um guia que mostra como definir uma estrutura HTML reutilzável através dos elementos {{htmlelement("template")}} e {{htmlelement("slot")}}, e como utilizar essa estrutura dentro de elementos web.

## Referência

### Elementos customizados

- {{domxref("CustomElementRegistry")}}
  - : Contém funcionalidade relacionada a elementos personalizados, principalmente o método {{domxref("CustomElementRegistry.define()")}} usado para registrar novos elementos personalizados, para que possam ser usados em seu documento.
- {{domxref("Window.customElements")}}
  - : Retorna uma referência ao objeto `CustomElementRegistry`.
- [Callbacks do ciclo de vida](/pt-BR/docs/Web/Web_Components/Using_custom_elements#Using_the_lifecycle_callbacks)

  - : Funções callback especiais definidas dentro da definição de classe de elemento customizado, afetando seu comportamento:

    - `connectedCallback`: Invocada quando um elemento customizado é adicionao ao DOM do documento.
    - `disconnectedCallback`: Invocada quando o elemento customizado é desconectado do DOM do documento.
    - `adoptedCallback`: Invocada quando o elemento customizado é movido para um novo documento.
    - `attributeChangedCallback`: Invocada quando um dos atributos de um elemento customizado é adicionado, removido ou alterado.

- Extensões para criação de elementos built-in customizados

  - : The following extensions are defined:

    - O atributo HTML global [`is`](/pt-BR/docs/Web/HTML/Global_attributes#is): Permite especificar que um elemento HTML padrão deve se comportar como um elemento built-in customizado registrado.
    - A opção "is" do método {{domxref("Document.createElement()")}}: Permite criar uma instância de um elemento HTML standard que se comporta como um determinado elemento built-in customizado registrado.

- CSS pseudo-classes

  - : Pseudo-classes relacionadas especificamente a elementos customizados:

    - {{cssxref(":defined")}}: Corresponde a qualquer elemento que está definido, incluindo elementos built-in e elementos customizados que foram definidos com `CustomElementRegistry.define()`).
    - {{cssxref(":host")}}: Seleciona o host fantasma do [shadow DOM](/pt-BR/docs/Web/Web_Components/Using_shadow_DOM) contendo o CSS utilizado internamente.
    - {{cssxref(":host()")}}: Seleciona o host fantasma do [shadow DOM](/pt-BR/docs/Web/Web_Components/Using_shadow_DOM) contendo o CSS utilizado internamente (permitindo selecionar um elemento customizado de dentro de seu shadow DOM) — mas somente se o seletor que foi passado via parâmetro da função corresponder ao host fantasma.
    - {{cssxref(":host-context()")}}: Seleciona o host fantasma do [shadow DOM](/pt-BR/docs/Web/Web_Components/Using_shadow_DOM) contendo o CSS utilizado internamente (permitindo selecionar um elemento customizado de dentro de seu shadow DOM) — mas somente se o seletor que foi passado via parâmetro da função corresponder ao(s) ancestral(ais) do host fantasma relativo à posição que ele toma dentro da hierarquida do DOM.

- CSS pseudo-elementos

  - : Pseudo-elementos relacionados especificamente a elementos customizados:

    - {{cssxref("::part")}}: Representa qualquer elemento dentro de uma [shadow tree](/pt-BR/docs/Web/Web_Components/Using_shadow_DOM) que tenha um atributo [`part`](/pt-BR/docs/Web/HTML/Global_attributes#part) correspondente.

### Shadow DOM

- {{domxref("ShadowRoot")}}
  - : Representa o nó raíz de uma sub-árvore DOM fantasma.
- {{domxref("DocumentOrShadowRoot")}}
  - : Um mixin que define funcionalidades que ficam disponíveis através do documento e das raízes fantasma.
- Extensões {{domxref("Element")}}

  - : Extensões à interface `Element` relacionado ao shadow DOM:

    - O método {{domxref("Element.attachShadow()")}} vincula uma árvore DOM fantasma ao elemento especificado.
    - A propriedade {{domxref("Element.shadowRoot")}} retorna a árvore fantasma raíz vinculada ao elemento especificado, ou `null` se não existir nenhuma árvore fantasma vinculada.

- Adições relevantes {{domxref("Node")}}

  - : Adicionais à interface `Node` pertinentes ao shadow DOM:

    - O método {{domxref("Node.getRootNode()")}} retorna a raíz do objeto contexto, que opcionalmente inclui a "raíz fantasma" (shadow root) se a mesma estiver dispinível.
    - A propriedade {{domxref("Node.isConnected")}} retorna um boolean indicando se o Nó está ou não conectado (direta ou indiretamente) ao objeto contexto, ex. o objeto {{domxref("Document")}} no caso de um DOM normal, ou o {{domxref("ShadowRoot")}} no caso de um DOM fantasma (shadow DOM).

- Extensões {{domxref("Event")}}

  - : Extensões para a interface de `Event` relacionado a shadow DOM:

    - {{domxref("Event.composed")}}: Retorna um {{jsxref("Boolean")}} que indica
      se o evento irá se propagar através dos limites do shadow DOM para dentro do DOM padrão (`true`), ou não (`false`).
    - {{domxref("Event.composedPath")}}: Retorna o caminho do evento (objetos nos quais os listeners serão invocados). Não inclui nós na shadow tree se a shadow root foi criada com {{domxref("ShadowRoot.mode")}} closed (fechado).

### Templates HTML

- {{htmlelement("template")}}
  - : Contém um fragmento HTML que não é renderizado quando um documento que o contém é inicialmente carregado, mas pode ser exibido em tempo de execução usando JavaScript, geralmente utilizado como base de estruturas de elementos customizados. A interface DOM associada é {{domxref("HTMLTemplateElement")}}.
- {{htmlelement("slot")}}
  - : Um placeholder dentro de um web component que você pode preencher com seu texto de marcação, permitindo criar árvores DOM separadas e apresentar delas juntas. A interface DOM associada é a {{domxref("HTMLSlotElement")}}.
- `O atributo HTML global slot`
  - : Atribui um slot em uma árvore shadow DOM a um elemento.
- {{domxref("Slotable")}}
  - : Um mixin implementado por ambos os nós {{domxref("Element")}} e{{domxref("Text")}} definindo funcionalidades que permitem tornar-se conteúdo de um elemento {{htmlelement("slot")}}. O mixin define um atributo, {{domxref("Slotable.assignedSlot")}}, o qual retorna uma referência do slot em que o nó está sendo inserido.
- Extensões {{domxref("Element")}}

  - : Extensões para a interface de `Element` relacionado a slots:

    - {{domxref("Element.slot")}}: Retorna o nome do slot do shadow DOM associado ao elemento.

- Pseudo-elementos CSS

  - : Pseudo-elementos relacionados especificamente a slots:

    - {{cssxref("::slotted")}}: Corresponde a qualquer conteúdo inserido naquele slot.

- O evento {{event("slotchange")}}
  - : Disparado em uma instância {{domxref("HTMLSlotElement")}} (elemento {{htmlelement("slot")}}) quando há mudança no nó(s) contido naquele slot.

## Exemplos

Estamos construindo alguns exemplos em nosso repo do GitHub [web-components-examples](https://github.com/mdn/web-components-examples).
Mais exemplos serão adicionados com o passar do tempo.

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- [webcomponents.org](https://www.webcomponents.org/) — site apresentando exemplos de web components, tutoriais e outras informações.
- [FAST](https://fast.design/) é uma biblioteca de web component construída pela Microsoft que oferece vários pacotes para potencializar dependendo das necessidades do seu projeto. [Fast Element](https://github.com/microsoft/fast/tree/master/packages/web-components/fast-element) é um meio fácil de criar Web Components de alto desempenho, com eficiência de memória e em conformidade com os padrões. [Fast Foundation](https://github.com/microsoft/fast/tree/master/packages/web-components/fast-foundation) é uma biblioteca de classes, modelos e outros utilitários de Web Components criados em elementos rápidos destinados a serem compostos em Web Components registrados.
- [Hybrids](https://github.com/hybridsjs/hybrids) — Biblioteca web components de código aberto, que favorece objetos simples e funções puras em vez de `class` e this sintaxe. Ele fornece uma API simples e funcional para a criação de elementos personalizados.
- [Polymer](https://www.polymer-project.org/) — Framework de web components do Google - um conjunto de polyfills, melhorias e exemplos. Atualmente, a maneira mais fácil de usar os web components em vários navegadores.
- [Snuggsi](https://github.com/devpunks/snuggsi#readme) — Web Components fáceis com \~1kB _Incluindo polyfill_ — Tudo que você precisa é um navegador e um conhecimento básico de HTML, CSS e classes JavaScript para ser produtivo.
- [Slim.js](https://github.com/slimjs/slim.js) — Biblioteca web components de código aberto - uma biblioteca de alto desempenho para criação rápida e fácil de componentes; extensível e plugável e compatível com cross-framework.
- [Stencil](https://stenciljs.com/) — Conjunto de ferramentas para a construção de sistemas de design reutilizáveis e escalonáveis em web components.
