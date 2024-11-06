---
title: Aplicações web e ARIA - Perguntas Frequentes (FAQ)
slug: conflicting/Web/Accessibility/ARIA_184f054b1090ff5cd518146ac4e09122
---

## O que significa ARIA?

WAI-ARIA, que quer dizer [Accessible Rich Internet Applications](https://www.w3.org/WAI/intro/aria.php)(Aplicações Ricas para uma Internete Acessível), são as especificações da [Web Accessibility Initiative](https://www.w3.org/WAI/) (Iniciativa pela Acessibilidade na _Web_), da [W3C](https://www.w3.org/) (World Wide Web Consortium). O conjunto ARIA oferece a maneira de tornar as aplicações e _widgets_ da rede mundial mais acessíveis a uma diversidade maior de pessoas, incluindo quem utiliza tecnologias assistivas, como leitores de telas, ou lentes de aumento.

O conjunto ARIA fornece semânticas adicionais para descrever a função (role), estado (state) e funcionalidade de muitos controles familiares da interface de utilização, tais como menus, deslizantes, árvores e diálogos. E, também, provê informação estrutural adicional, o que auxilia os autores a identificar as áreas de referência (_landmarks_), regiões e malhas nas suas páginas. O conjunto ARIA habilita aplicações dinâmicas e _widgets_ gerenciados pela JavaScript a interoperar com uma gama de tecnologias assistivas baseadas em ambiente.

Para mais informações sobre como criar _widgets_ acessíveis com ARIA, veja a [Visão geral da acessibilidade em aplicações _web_ e _widgets_ - Overview of accessible web applications and widgets](/en/Accessibility/An_overview_of_accessible_web_applications_and_widgets).

## ARIA - onde tem suporte?

ARIA é um grupo de especificações relativamente novo, mas o suporte está crescendo. Uma larga variedade de navegadores comumente usados, tecnologias assistivas, conjunto de ferramentas JavaScript e aplicações, agora, suportam o conjunto ARIA. Entretanto, velhas versões destas tecnologias ainda podem estar sendo utilizadas por muita gente. Quem sabe você possa considerar a implementação de ARIA pela utilização de técnicas de aprimoramento progressivo — como adicionar ARIA usando JavaScript e não diretamente na sua marcação — no intuito de obter, graciosamente, o suporte nos navegadores e tecnologias assistivas mais antigos.

### Navegadores

O conjunto ARIA encontra suporte nos seguintes navegadores:

| Navegadorr                                                                                       | Versão Mínima | Observações                                                                                                                 |
| ------------------------------------------------------------------------------------------------ | ------------- | --------------------------------------------------------------------------------------------------------------------------- |
| Firefox                                                                                          | 3.0+          | Funciona com NVDA, JAWS 10+ e Orca                                                                                          |
| [Chrome](http://dev.chromium.org/developers/design-documents/accessibility#TOC-WAI-ARIA-Support) | Mais recentes | O suporte a leitores de tela ainda é experimental a partir do Chrome 15                                                     |
| Safari                                                                                           | 4+            | No Safari 5 o suporte está muito melhorado. Para regiões dinâmicas é preciso o Safari 5 com VoiceOver no iOS5, ou OS X Lion |
| [Opera](http://www.opera.com/docs/specs/presto28/wai-aria/roleattributes/)                       | 9.5+          | Necessita o VoiceOver no OS X. TBD: como está funcionando atualmente?                                                       |
| [Internet Explorer](http://msdn.microsoft.com/en-us/library/cc891505%28v=vs.85%29.aspx)          | 8+            | Funciona com JAWS 10+ e NVDA. Não existe suporte para regiões dinâmicas no NVDA. O suporte em IE9 está muito aperfeiçoado.  |

Em certos casos, as versões anteriores podem suportar, apenas, algumas características do conjunto ARIA. Tabelas mais detalhadas da compatibilidade de navegadores estão disponíveis a partir de múltiplas fontes:

- [caniuse.com](http://caniuse.com/wai-aria)
- [The Paciello Group](http://www.paciellogroup.com/blog/2012/02/rough-guide-browsers-operating-systems-and-screen-reader-support/)

### Tecnologias Assistivas

As tecnologias assistivas estão, progressivamente, abraçando o conjunto ARIA. Algumas delas incluem:

| Tecnologia Assistiva | Versão mínima para o conjunto ARIA básico          | Versão mínima para regiões dinâmicas e suportes de alerta                       |
| -------------------- | -------------------------------------------------- | ------------------------------------------------------------------------------- |
| NVDA                 | 2010.2 (NVDA é, sempre, um aprimoramento gratuito) | 2011.1 para Firefox, sem apoio para regiões dinãmicas no IE a partir de 2011.2. |
| Orca                 | ? (TBD)                                            | ? (TBD)                                                                         |
| VoiceOver            | OSX 10.5, iOS 4                                    | OS X 10.7 iOS 5                                                                 |
| JAWS                 | 8                                                  | 10                                                                              |
| Window-Eyes          | 7                                                  | Atualmente, sem suporte para regiões vivas                                      |
| ZoomText             | ?                                                  | Atualmente, sem suporte para regiões vivas                                      |

Nota: as primeiras versões destas ferramentas tinham, muitas vezes, implementações ARIA parciais, ou com problemas.

Para notas sobre o suporte JAWS para ARIA a partir do JAWS 10, veja este artigo do Paciello Group: [JAWS Support for ARIA](http://www.paciellogroup.com/blog/2010/10/jaws-support-for-aria/).

### O Conjunto de Ferramentas JavaScript

Funções, estados, e propriedades ARIA foram adicionadas a uma série de conjuntos de ferramentas JavaScript populares para a interface de utilização, incluindo:

- Dojo/Dijit
- jQuery UI
- Fluid Infusion
- Google Closure
- Google Web Toolkit
- BBC Glow
- Yahoo! User Interface Library (YUI)

Para mais informações sobre acessibilidade com o conjunto de ferramentas JavaScript, leia:

- Steve Faulkner's [WAI-ARIA Implementation in JavaScript UI Libraries](http://www.paciellogroup.com/blog/2009/07/wai-aria-implementation-in-javascript-ui-libraries/)

## Você pode me dar um exemplo do conjunto ARIA em ação?

Com prazer: ) Eis, aqui, a marcação para um _widget_ de uma barra de progresso:

```html
<div id="percent-loaded" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" />
```

Esta barra de progresso é construída usando uma `<div>`, o que não é muito descritivo. Infelizmente, não há muitas etiquetas semânticas disponíveis para desenvolvedores em HTML 4, logo, nós precisamos incluir as funções e propriedades ARIA. Estas são especificadas pela adição de atributos ao elemento. Neste exemplo, o atributo `role="progressbar"` informa, ao navegador, que este elemento é, agora, um _widget_ de barra de progresso movimentado pela JavaScript. Os atributos **aria-valuemin** (aria-valor mínimo) e **aria-valuemax** (aria-valor máximo) determinam os valores mínimo e máximo para essa barra de progresso e o **aria-valuenow** (aria-valor agora) descreve o seu estado atual.

Além de inseridos diretamente na marcação, os atributos ARIA podem ser adicionados ao elemento e atualizados dinamicamente pela utilização de códigos em JavaScript, como este:

```js
// Find the progress bar <div> in the DOM.
var progressBar = document.getElementById("percent-loaded");

// Set its ARIA roles and states, so that assistive technologies know what kind of widget it is.
progressBar.setAttribute("role", "progressbar");
progressBar.setAttribute("aria-valuemin", 0);
progressBar.setAttribute("aria-valuemax", 100);

// Create a function that can be called at any time to update the value of the progress bar.
function updateProgress(percentComplete) {
  progressBar.setAttribute("aria-valuenow", percentComplete);
}
```

## Se eu adicionar ARIA a estruturação, ou o comportamento, da minha página vão mudar?

Não, o conjunto ARIA é disponibilizado, apenas, para as tecnologias assistivas APIs (Interface de Programação de Aplicações) e não afeta as funcionalidades nativas dos navegadores em relação ao DOM, nem ao estilo. Do ponto de vista dos navegadores, a HTML nativa define o significado semântico e o comportamento de um elemento, com os atributos ARIA agindo como uma camada de topo, com a finalidade de dar suporte à TA/AT API. Embora o conjunto ARIA não vá alterar qualquer modelo, bem como todos os atributos HTML, a CSS pode tirar vantagem dos atributos ARIA como seletores de elemento. Isto pode providenciar um mecanismo conveniente para o modelo de _widgets_ capacitados com ARIA.

```css
.tab-panel[aria-hidden="true"] {
  display: none;
  }

.tab-panel[aria-hidden="false"] {
  display: block;
  }
```

**E quanto à validação?**

Os novos atributos introduzidas em ARIA, tais como **role** e aqueles com o prefixo **aria-**, não são, oficialmente, parte das especificações HTML 4, ou XHTML 4. Como resultado, as páginas que incluem ARIA podem não validar o uso ferramentas como o [W3C's Markup Validator](http://validator.w3.org/).

A primeira solução potencial para este problema é evitar inserir as funções e os estados ARIA diretamente na sua marcação. Em vez disso, use a JavaScript para adicionar, dinamicamente, o conjunto ARIA à sua página, como mostrado na resposta à " [Você pode me dar um exemplo do conjunto ARIA em ação?](/#aria-in-action "#aria-in-action")". A sua página ainda vai ser, teoricamente, inválida, mas vai passar todas as verificações de validação estática corretamente.

Outra alternativa é usar a declaração de tipo de documento (_doctype_) HTML5, que inclui suporte embutido para ARIA. O validador HTML5 do W3C nunca vai encontrar usos inválidos de ARIA em páginas HTML5 para você.

## Como a HTML 5 se relaciona com o conjunto ARIA?

A HTML 5 introduz uma série de novas etiquetas semânticas úteis na linguagem HTML. Algumas delas se justapõe, diretamente, com as funções disponíveis em ARIA, tais como o novo elemento \<progress>. Nos casos em que o navegador suporte uma marcação HTML que também exista em ARIA, normalmente, não há a necessidade de acrescentar as funções e estados ARIA ao elemento. O conjunto ARIA engloba muitas funções, estados e propriedades que não estão disponíveis em HTML5, então, estas continuarão sendo úteis aos desenvolvedores que usam HTML5. Para mais informações, Steve Faulkner escreveu um ótimo [overview of the relationship between HTML5 and ARIA](http://www.paciellogroup.com/blog/2010/04/html5-and-the-myth-of-wai-aria-redundance/) (em inglês).

#### _Degrading Gracefully_ de HTML5 para ARIA

Ao entregar conteúdo a navegadores que não são sensíveis à linguagem HTML5, você pode considerar uma _gracefully degrading_ para o uso do conjunto ARIA, quando necessário. Assim, utilizando o exemplo da barra de progresso, você pode fazer a alteração para uma `"role="progressbar"`, nos casos em que a marcação `<progressbar>` não for suportada.

Aqui você tem um exemplo da marcação usada para uma barra de progresso em HTML5:

```html
<!DOCTYPE html>
<html>
  <head><title>Gracefully degrading progress bar</title></head>
  <body>
    <progress id="progress-bar" value="0" max="100">0% complete</progress>
    <button id="update-button">Update</button>
 </body>
</html>
```

...e aqui está o código JavaScript que vai garantir que a barra de progresso ainda funcione em navegadores mais antigos:

```js
var progressBar = document.getElementById("progress-bar");

// Check to see if the browser supports the HTML5 <progress> tag.
var supportsHTML5Progress = (typeof (HTMLProgressElement) !== "undefined");

function setupProgress() {
  if (!supportsHTML5Progress) {
    // HTML5 <progress> isn't supported in this browser, so we need to add
    // ARIA roles and states to the element.
    progressBar.setAttribute("role", "progressbar");
    progressBar.setAttribute("aria-valuemin", 0);
    progressBar.setAttribute("aria-valuemax", 100);
  }
}

function updateProgress(percentComplete) {
  if (!supportsHTML5Progress) {
    // HTML5 <progress> isn't supported by this browser,
    // so we need to update the aria-valuenow attribute
    progressBar.setAttribute("aria-valuenow", percentComplete);
  } else {
    // HTML5 <progress> is supported, so update the value attribute instead.
    progressBar.setAttribute("value", percentComplete);
  }

  progressBar.textContent = percentComplete + "% complete";
}

function initDemo() {
  setupProgress(); // Setup the progress bar.

  // Bind a click handler to the button, which will update the progress bar to 75%.
  document.getElementById("update-button").addEventListener("click", function (e) {
    updateProgress(75);
    e.preventDefault();
  }, false);
}
initDemo();
```

## Como funcionam as tecnologias assistivas?

Tecnologias assistivas usam uma API (Interface de Programação de Aplicações) construída em cada sistema operacional, concebida, especificamente, para descrever as funções, estados e estruturas da interface de utilização de uma aplicação. Por exemplo, um leitor de tela utiliza esta API para ler a interface de utilização com um mecanismo de vocalização do texto, uma lente de aumento a utiliza para realçar áreas importantes - ou ativas - da tela e um teclado virtual pode utilizá-la para proporcionar um tipo de teclado mais eficiente dentro de determinado contexto - ou o controle da UI. Tecnologias assistivas, muitas vezes, também acessam uma página do DOM, do princípio ao fim, através desta API, para entender sua semântica e atributos da página.

O conjunto ARIA proporciona uma ponte entre o mundo do DOM e a área de trabalho. Os navegadores expõe os elementos capacitados com o conjunto ARIA para as APIs das tecnologias assistivas, como se estes fossem _widgets_ nativos. Como resultado, quem os utiliza ganha uma experiência de uso muito mais consistente, na qual _widgets_ dinâmicos, da _web_, impulsionados pela JavaScript são comparáveis aos seus equivalentes da área de trabalho.

## Como experimento o uso que fiz do conjunto ARIA? Existem ferramentas gratuitas disponíveis?

Existem várias ferramentas de inspeção e depuração para ajudar você no seu teste da ação do conjunto ARIA:

- Inspetor de Objetos no Windows
- Inspetor de Acessibilidade em OS X
- AccProbe em Linux
- Inspetor Firebug's DOM
- O [Accessibility Inspector for Firebug](http://code.google.com/p/ainspector/)
- [Ferramentas para Desenvolvedores de Acessibilidade (Accessibility Developer Tools)](https://chrome.google.com/webstore/detail/accessibility-developer-t/fpkknkljclfencbdbgkenhalefipecmb), para Chrome

Há vários leitores de tela gratuitos, ou de código aberto, que podem ser utilizados, para você colocar a mão na massa nos seus testes com ARIA. Estes incluem:

- [Orca](http://live.gnome.org/Orca) para Linux
- [NVDA](http://www.nvda-project.org/) para Windows
- [VoiceOver](http://www.apple.com/accessibility/voiceover/) é construído dentro do OS X

Quando você estiver testando um leitor de tela, mantenha dois pontos-chave em mente:

1. Experimentadores ocasionais de leitores de tela nunca vão opinar suficientemente, por isso, teste e obtenha respostas de quem, realmente, utiliza essas tecnologias.
2. A acessibilidade vai muito além de, apenas, dar suporte aos leitores de tela. Tente experimentar uma variedade de técnicas de usabilidade e acessibilidade.

Outras ferramentas de teste úteis e técnicas para aplicativos e _widgets_ com habilitação ARIA:

- [Yahoo!'s ARIA bookmarklets](http://yaccessibilityblog.com/library/test-aria-focus-bookmarklets.html) (marcadores de ítens ARIA, da Yahoo!)
- Fluid Project's [simple accessibility evaluation techniques](http://wiki.fluidproject.org/display/fluid/Simple+Accessibility+Review+Protocol)

## Onde acontecem as discussões sobre ARIA?

- [Wai-xtech mailing list](http://lists.w3.org/Archives/Public/wai-xtech/) -- holds discussions on ARIA specs. (mantém discussões sobre as especificações ARIA)
- [Free-ARIA google group](http://groups.google.com/group/free-aria) -- para desenvolvedores e utilizadores dos recursos e ferramentas gratuitas.

## Onde posso aprender mais sobre ARIA?

- [Visão geral sobre a acessibilidade nas aplicações e _widgets_ _web_](/en/Accessibility/An_overview_of_accessible_web_applications_and_widgets "en/Accessibility/An overview of accessible web applications and widgets")
- [Formulários acessíveis](/en/Accessibility/Accessible_forms "en/Accessibility/Accessible forms")
- The W3C's [WAI-ARIA Frequently Asked Questions](https://www.w3.org/WAI/aria/faq)
- WebAIM's [Accessibility of Rich Internet Applications](http://webaim.org/techniques/aria/)

a autoria do artigo é de: morenoh149, kscarfone, akhabibullina, xfq, Fredchat, mpiotrowicz, Sheppy, BrendanMcKeon, anastasia, jswisher, Aaronlev, colinbdclark.
