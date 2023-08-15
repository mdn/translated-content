---
title: Visão geral da acessibilidade nas aplicações web e widgets
slug: Web/Accessibility/An_overview_of_accessible_web_applications_and_widgets
---

A Rede Mundial está mudando. Estatísticamente, os sítios baseados em páginas estão, cada vez mais, sendo repostos por aplicações dinâmicas, em estilo Ambiente, que fazem uso intenso de JavaScript e AJAX. Estilistas estão criando novos _widgets_ e controles inteiramente com a combinação de JavaScript, HTML e CSS. Este salto tem o potencial de aperfeiçoar, dramaticamente, a capacidade de resposta e a usabilidade da Rede, mas milhares de utilizadores estão sob o risco de exclusão, devido a algumas lacunas na acessibilidade. A JavaScript tem, tradicionalmente, tido a reputação de ser inviável para quem usa tecnologias assistivas, como leitores de tela mas, agora, existem maneiras de criar interfaces de utilização dinâmicas acessíveis a uma ampla variedade de pessoas.

## O problema

A maior parte do conjunto de ferramentas JavaScript oferece uma biblioteca de utilização de _widgets_ que imita o comportamento de interfaces de Ambiente familiares. Deslizantes, barras de menus, visão de arquivos em lista e muito mais pode ser construído com uma combinação de JavaScript, CSS e HTML. Uma vez que a especificação da HTML 4 não fornece etiquetas integradas (_built-in tags_) que descrevam estes tipos de _widgets_ semanticamente, os desenvolvedores recorrem ao uso de elementos genéricos, tais como \<div> e \<span>. Embora isto resulte em um _widget_ que se pareça com seu duplo de ambiente, geralmente não existe informação semântica suficiente, na marcação, para torná-lo utilizável por uma tecnologia assistiva. Teor dinâmico em uma página da Rede Mundial pode ser particularmente problemático para quem, por alguma razão, não pode ver a tela. Cotações de ações, alimentação instantânea de atualizações do twitter, indicadores de progresso e conteúdos similares alteram o DOM, enquanto uma tecnologia assistiva (TA/AT) pode não ser alertada disso. Aqui é onde o conjunto [ARIA](/pt-BR/ARIA) entra.

_Exemplo 1: Marcação para um widget de abas construído sem as indicações ARIA. Não existem informações semânticas, na marcação, que descrevam a sua forma, nem a sua função._

```html
<!-- This is a tabs widget. How would you know, looking only at the markup? -->
<ol>
  <li id="ch1Tab">
    <a href="#ch1Panel">Chapter 1</a>
  </li>
  <li id="ch2Tab">
    <a href="#ch2Panel">Chapter 2</a>
  </li>
  <li id="quizTab">
    <a href="#quizPanel">Quiz</a>
  </li>
</ol>

<div>
  <div id="ch1Panel">Chapter 1 content goes here</div>
  <div id="ch2Panel">Chapter 2 content goes here</div>
  <div id="quizPanel">Quiz content goes here</div>
</div>
```

_Exemplo 2: Como o widget de abas pode ser visto. Seus utilizadores podem reconhecer sua aparência, mas não há semântica legível por mecanismos de tecnologias assistivas._
![Screenshot of the tabs widget](/@api/deki/files/4926/=Tabs_Widget.png)

## ARIA

As definições para [WAI-ARIA](https://www.w3.org/WAI/intro/aria.php) **Accessible Rich Internet Applications** (Aplicações Ricas para uma Internete Acessível), da W3C - [Web Accessibility Initiative](https://www.w3.org/WAI/) (Iniciativa pela Acessibilidade na Rede Mundial/World Wide Web Consortium-W3C) - oferecem uma via para a adição das necessidades semânticas perdidas pelas tecnologias assistivas, como os leitores de tela. O conjunto ARIA possibilita que desenvolvedores possam descrever seus _widgets_ de forma mais detalhada com a inclusão de atributos especiais à marcação. Projetado para preencher a lacuna entre o padrão de rotulagem HTML e os controles com estilo ambiente encontrados em aplicações dinâmicas pela _web_, o conjunto ARIA fornece funções (roles) e estados (states) que descrevem o comportamento da maioria das interfaces de utilização dos _widgets_ conhecidas.

A especificação ARIA está dividida em três tipos diferentes de atributos: funções (roles), estados (states) e propriedades (properties). As funções (roles) descrevem os _widgets_ que não estão disponíveis de outra forma em HTML 4, como deslizantes, barras de menu, abas e diálogos. As propriedades (properties) descrevem as características desses _widgets_ - se podem ser arrastados (_draggable_), se existe algum elemento obrigatório, ou se trazem uma janela de explosão (popup) associada. Os estados (states) descrevem a interação atual de um elemento, informando à tecnlogia assistiva se este se encontra ativo, desativado, selecionado, ou oculto.

Os atributos ARIA são projetados para serem interpretados automaticamente pelo navegador e traduzidos para as APIs (Application Programming Interface/Interface de Programação de Aplicativo) de acessibilidade nativas do sistema operacional. Quando o conjunto ARIA está presente as tecnologias assistivas são capazes de reconhecer e interagir com os controles personalizados pela JavaScript da mesma forma que fazem com os seus equivalentes de ambiente. Isto tem o potencial de oferecer uma experiência de utilização muito mais consistente do que aquela que foi possível nas gerações anteriores das aplicações da Rede, uma vez que os utilizadores de tecnologias assistivas podem empregar todo o seu conhecimento sobre o funcionamento das aplicações de ambiente, ao usar aquelas que são baseadas na _web_.

_Exemplo 3: Marcação para um widget de abas com os atributos ARIA adicionados:_

```html
<!-- Now *these* are Tabs! -->
<!-- We've added role attributes to describe the tab list and each tab. -->
<ol role="tablist">
  <li id="ch1Tab" role="tab">
    <a href="#ch1Panel">Chapter 1</a>
  </li>
  <li id="ch2Tab" role="tab">
    <a href="#ch2Panel">Chapter 2</a>
  </li>
  <li id="quizTab" role="tab">
    <a href="#quizPanel">Quiz</a>
  </li>
</ol>

<div>
  <!-- Notice the role and aria-labelledby attributes we've added to describe these panels. -->
  <div id="ch1Panel" role="tabpanel" aria-labelledby="ch1Tab">
    Chapter 1 content goes here
  </div>
  <div id="ch2Panel" role="tabpanel" aria-labelledby="ch2Tab">
    Chapter 2 content goes here
  </div>
  <div id="quizPanel" role="tabpanel" aria-labelledby="quizTab">
    Quiz content goes here
  </div>
</div>
```

O conjunto ARIA tem suporte nas últimas versões de todos os maiores navegadores, incluindo Firefox, Safari, Opera, Chrome e Internet Explorer. Muitas das tecnologias assistivas, como as de código aberto NVDA e os leitores de tela Orca, da mesma foma, trazem suporte ao ARIA. Progressivamente, as bibliotecas JavaScript para _widget_, tais como jQuery UI, YUI, Google Closure e Dojo Dijit também incluem as marcações ARIA.

### Mudanças na apresentação

Mudanças de apresentação dinâmicas agregam o uso de CSS para alterar a aparência do conteúdo (uma borda vermelha em volta de algum dado inválido, ou a troca da cor de fundo de uma caixa de seleção já marcada), bem como quando um item é exibido, ou escondido.

#### Mudanças de estado

O conjunto ARIA provê atributos para declarar o estado atual da interface de utilização de um _widget_. Os exemplos abrangem (mas não são apenas estes, com certeza) :

- `aria-checked` (marcada)
  - : indica o estado de uma caixa de seleção, ou de um botão de alternativa (`radio`)
- `aria-disabled` (desativado)
  - : indica que um elemento está visível, mas não pode ser editado, tampouco é executável.
- `aria-grabbed` (arrastado)
  - : indica o estado "arrastado" para um objeto, em uma operação de "arrastar e soltar".

(Para uma lista completa de estados ARIA, consulte a [ARIA list of states and properties](https://www.w3.org/TR/wai-aria/states_and_properties) (lista de estados e propriedades ARIA).

Os desenvolvedores devem dar preferência ao uso dos estados ARIA para indicar a situação atual dos elemento*s widgets* na interface de utilização (UI) e os seletores de atributos CSS para alterar a sua aparência, com base nas mudanças desses estados (em vez de usar um roteiro (_script_) para mudar um nome de classe de um elemento).

A _Open Ajax Alliance_ (OAA - Aliança _OpenAJAX_ ) disponibiliza um exemplo de um seletor de atributos CSS baseado nos estados ARIA (em inglês) - an example of CSS attribute selectors based on ARIA states. O exemplo mostra a interface de um editor WYS/WYG com um sistema de menu dinâmico. Os itens selecionados no menu, como o tipo de fonte estão, visualmente, distintos dos outros. As partes importantes do exemplo são explicadas a seguir.

Neste exemplo, a HTML para um menu tem a forma exibida abaixo. Note como, nas linhas 7 e 13, a propriedade (_property_) **`aria-checked`** é usada para declarar o estado da seleção dos itens do menu.

_Exemplo 1a: HTML para um menu selecionável._

```html
<ul id="fontMenu" class="menu" role="menu" aria-hidden="true">
  <li
    id="sans-serif"
    class="menu-item"
    role="menuitemradio"
    tabindex="-1"
    aria-controls="st1"
    aria-checked="true">
    Sans-serif
  </li>
  <li
    id="serif"
    class="menu-item"
    role="menuitemradio"
    tabindex="-1"
    aria-controls="st1"
    aria-checked="false">
    Serif
  </li>
  ...
</ul>
```

A CSS usada para alterar a aparência do item selecionado é mostrada no Exemplo 1b. Perceba que não existe um nome de classe (_classname_) de personalização, apenas o estado do atributo **`aria-checked`**, na linha 1.

_Exemplo 1b: Seletor baseado em atributo para indicar um estado._

```css
li[aria-checked="true"] {
  font-weight: bold;
  background-image: url("images/dot.png");
  background-repeat: no-repeat;
  background-position: 5px 10px;
}
```

O JavaScript para atualizar a propriedade **`aria-checked`** tem a forma exibida no Exemplo 1c. Repare que o roteiro (_script_) apenas atualiza o atributo **`aria-checked`** (linhas 3 e 8); também não é necessário adicionar, ou remover, um nome de classe personalizada.

_Exemplo 1c: A JavaScript atualiza o atributo aria-checked_.

```js
var processMenuChoice = function (item) {
  // 'check' the selected item
  item.setAttribute("aria-checked", "true");
  // 'un-check' the other menu items
  var sib = item.parentNode.firstChild;
  for (; sib; sib = sib.nextSibling) {
    if (sib.nodeType === 1 && sib !== item) {
      sib.setAttribute("aria-checked", "false");
    }
  }
};
```

#### Alterações visuais

Quando o conteúdo visual é alterado (isto é, um elemento é escondido, ou mostrado), os desenvolvedores devem mudar o valor da propriedade **`aria-hidden`**. As técnicas descritas acima devem ser usadas, a fim de declarar a CSS para ocultar um elemento utilizando `display:none` (_exibir:nenhum_).

O sítio da _Open Ajax Alliance_ fornece um exemplo de uma dica de tela (_tooltip_) que utiliza o estado aria-hidden para controlar a sua visibilidade (em inglês) an example of a tooltip that uses **`aria-hidden`** to control the visibility of the tooltip. O exemplo mostra um formulário _web_ simples, com caixas de dicas de tela contendo instruções associadas aos campos de entrada. As partes relevantes deste exemplo estão explicadas abaixo.

Aqui, a HTML para a dica de tela tem a forma exibida no Exemplo 2a. A linha 9 configura o estado da **`aria-hidden`** para `true`.

_Exemplo 2a: HTML para dicas de tela._

```html
<div class="text">
  <label id="tp1-label" for="first">First Name:</label>
  <input
    type="text"
    id="first"
    name="first"
    size="20"
    aria-labelledby="tp1-label"
    aria-describedby="tp1"
    aria-required="false" />
  <div id="tp1" class="tooltip" role="tooltip" aria-hidden="true">
    Your first name is optional
  </div>
</div>
```

A CSS para esta marcação está explicada no Exemplo 2b. Veja que não há uso de _classname_ personalizada, apenas o estado do atributo **`aria-hidden`**, na linha 1.

_Exemplo 2b: Seletor basedo em atributo para indicar um estado._

```css
div.tooltip[aria-hidden="true"] {
  display: none;
}
```

O JavaScript que atualiza a propriedade **`aria-hidden`** tem a forma exposta no Exemplo 2c. Observe que o roteiro apenas atualiza o atributo **`aria-hidden`** (linha 2); não é necessário adicionar, nem remover, uma _classname_ customizada.

_Exemplo 2c: JavaScript para atualização do atributo aria-checked._

```js
var showTip = function (el) {
  el.setAttribute("aria-hidden", "false");
};
```

### Mudança de Atributo (_Role_)

> **Nota:** Em construção

O conjunto ARIA possibilita que os desenvolvedores possam declarar uma função semântica para um elemento que, de outro modo, não a apresentaria, ou a ofereceria de forma incorreta. Por exemplo, quando alguma lista desordenada é utilizada para criar um menu, à {{ HTMLElement("ul") }} deve ser dada uma **`role`** de `menubar` e cada {{ HTMLElement("li") }} deve ter uma **`role`** de `menuitem`.

O papel (**`role`**) de um elemento não deve mudar. Em vez disso, remova o elemento original e ocupe seu lugar com um elemento que tenha a função (**`role`**) nova.

Por exemplo, considere um _widget_ de edição "_inline_": um componente que possibilita que seus utilizadores sejam capazes de editar uma parte de um texto, sem mudar toda a composição. Este componente carrega o modo "_visualizar_", no qual o texto não pode ser modificado, mas pode ser ativado e um modo "_editar_", no qual o texto pode ser alterado. Se você o desenvolve, pode ter a tentação de implementar o modo "_visualizar_" com o uso do elemento texto "_somente leitura_" {{ HTMLElement("input") }}, definindo a sua ARIA **`role`** para `button` e, em seguida, alternando para o modo "_editar_", para tornar o elemento apto à gravação e removendo o atributo **`role`** no modo "editar" (desde que os elementos {{ HTMLElement("input") }} tenham as suas próprias funções semânticas).

Não faça isso. Em substituição, implemente o modo "_visualizar_" usando um elemento completamente diferente, tal como uma {{ HTMLElement("div") }}, ou {{ HTMLElement("span") }} com uma **`role`** de `button` e o modo « _edit_ » utilizando um elemento texto {{ HTMLElement("input") }}.

### Mudanças assíncronas de conteúdo

> **Nota:** Em construção. Veja, também, [Regiões Dinâmicas](/pt-BR/ARIA/Live_Regions)

## Navegação pelo Teclado

Muitas vezes, os desenvolvedores negligenciam o suporte ao teclado quando criam _widgets_ personalizados. Para ser acessível a uma gama maior de pessoas, todas as configurações de uma aplicação _web_, ou de um _widget_, devem oferecer controles pelo teclado, sem a necessidade de um rato. Na prática isto, frequentemente, envolve as convenções suportadas por _widgets_ similares, de ambiente, tirando plena vantagem das teclas Tab, Entra*,* Barra de Espaço e Setas.

Tradicionalmente, a navegação pelo teclado na _web_ tem sido limitada à tecla Tab, que é pressionada para dar foco a cada botão, vínculo, ou formulário na página, em uma ordenação linear e Shift-Tab para navegar em sentido contrário (navegação regresssiva). É uma forma unidimensional de navegação - para frente e para trás, um elemento por vez. Em páginas mais pesadas, alguém que navegue apenas pelo teclado deve pressioná-lo dezenas de vezes antes de alcançar a seção desejada. Implementar as convenções para teclado no modelo ambiente, para a _web_, tem o potencial de tornar a navegação significativamente mais rápida para essas pessoas.

Aqui está um resumo sobre como a navegação pelo teclado deve funcionar, com a habilitação do conjunto ARIA, na aplicação _web_:

- A tecla TAB deve fornecer o foco para o _widget_, como um todo. Por exemplo, a tabulação em uma barra de menu deve ter seu foco em seu primeiro elemento.
- As teclas de setas devem permitir uma seleção, ou a navegação dentro do _widget_. Por exemplo, as setas "_esquerda_" e "_direita_" devem levar o foco para o item anterior, ou próximo, do menu.
- Quando o widget não estiver dentro de um formulário, as teclas "_Entra_" e "_barra de espaço_" devem selecionar, ou ativar o controle.
- Dentro de um formulário, a tecla "barra de spaço" deve selecionar, ou ativar um controle, enquanto a tecla "Entra" deve submeter sua ação padrão.
- Se houver dúvidas, copie o comportamento das ações padronizadas para ambiente nos controles que você estiver criando.

Assim, para o exemplo de _widget_ de abas acima, a pessoa que estiver navegando deve ser capaz de entrar e sair da caixa que o contém usando as teclas "_Tab_" e "_Shift+Tab_" ( a \<ol> na nossa marcação). Uma vez que o foco, pelo teclado, estiver dentro do contêiner, as teclas de setas devem permitir a navegação entre as suas diferentes guias (os elementos \<li> ). A partir daqui as convenções variam de plataforma para plataforma. No Windows, a próxima aba deve ser ativada, automaticamente, quando as teclas de setas forem pressionadas. Em Mac OS X, seus utilizadores ativam a próxima aba pressionando a tecla "_Entra_", ou a "_barra de espaço_". Um tutorial abrangente, para a criação de _widgets_, com navegação pelo teclado, descreve como implementar esse comportamento utilizando JavaScript [Keyboard-navigable JavaScript widgets (_JavaScript para_ _widgets navegáveis pelo teclado_)](/pt-BR/Accessibility/Keyboard-navigable_JavaScript_widgets).

Para mais detalhes sobre as convenções da navegação pelo teclado em modelo ambiente, um guia completo (em inglês) [DHTML style guide (_guia de estilos da HTML Dinâmica_)](http://access.aol.com/dhtml-style-guide-working-group/) está disponível. Este guia oferece uma visão global de como a navegação pelo teclado deve funcionar em cada tipo de _widget_ suportado pelo conjunto ARIA. A W3C também oferece um documento que ajuda muito, [ARIA Best Practices](https://www.w3.org/WAI/PF/aria-practices/Overview.html), incluindo a navegação pelo teclado e as convenções de atalhos para uma variedade de _widgets_.

## Veja, também

- [ARIA](/pt-BR/ARIA)
- [Web applications and ARIA FAQ](/pt-BR/Accessibility/Web_applications_and_ARIA_FAQ)
- [WAI-ARIA Specification](https://www.w3.org/TR/wai-aria/)
- [WAI-ARIA Best Practices](https://www.w3.org/WAI/PF/aria-practices/Overview.html)
- [DHTML Style Guide](http://access.aol.com/dhtml-style-guide-working-group/)
