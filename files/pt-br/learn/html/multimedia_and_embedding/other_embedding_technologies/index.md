---
title: Do objeto ao iframe - outras tecnologias de incorporação
slug: Learn/HTML/Multimedia_and_embedding/Other_embedding_technologies
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/HTML/Multimedia_and_embedding/Video_and_audio_content", "Learn/HTML/Multimedia_and_embedding/Adding_vector_graphics_to_the_Web", "Learn/HTML/Multimedia_and_embedding")}}

Até agora você já deve ter aprendido a incorporar coisas em suas páginas da web, incluindo imagens, vídeo e áudio. Neste ponto, gostaria de ter um pouco de um passo para o lado, olhando para alguns elementos que permitem incorporar uma ampla variedade de tipos de conteúdo em suas páginas: as [`<iframe>`](/pt-BR/docs/Web/HTML/Element/iframe), [`<embed>`](/pt-BR/docs/Web/HTML/Element/embed)e [`<object>`](/pt-BR/docs/Web/HTML/Element/object)elementos. `<iframe>`s são para incorporar outras páginas da Web, e as outras duas permitem incorporar PDFs, SVG e até Flash - uma tecnologia que está saindo, mas que você ainda verá semi-regularmente.

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">Pré-requisitos:</th>
      <td>
        Conhecimento básico em informática,
        <a
          href="/en-US/Learn/Getting_started_with_the_web/Installing_basic_software"
          >software básico instalado</a
        >
        , conhecimento básico sobre o
        <a href="/en-US/Learn/Getting_started_with_the_web/Dealing_with_files"
          >trabalho com arquivos</a
        >
        , familiaridade com os fundamentos de HTML (conforme abordado em
        <a href="/pt-BR/docs/Learn/HTML/Introduction_to_HTML/Getting_started"
          >Introdução ao HTML</a
        >
        ) e os artigos anteriores deste módulo.
      </td>
    </tr>
    <tr>
      <th scope="row">Objetivo:</th>
      <td>
        <table>
          <tbody>
            <tr>
              <td>
                Para saber como itens incorporar em páginas da web que usam
                <a
                  href="/pt-BR/docs/Web/HTML/Element/object"
                  ><code>&#x3C;object></code></a
                >,
                <a
                  href="/pt-BR/docs/Web/HTML/Element/embed"
                  ><code>&#x3C;embed></code></a
                >e
                <a
                  href="/pt-BR/docs/Web/HTML/Element/iframe"
                  ><code>&#x3C;iframe></code></a
                >, como filmes em Flash e outras páginas da web.
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
  </tbody>
</table>

## Uma breve história de incorporação

Há muito tempo, na Web, era popular o uso de **quadros** para criar sites - pequenas partes de um site armazenadas em páginas HTML individuais. Elas foram incorporadas em um documento mestre chamado **conjunto de quadros**, que permitiu especificar a área na tela que cada quadro preenchia, como dimensionar as colunas e linhas de uma tabela. Eles foram considerados o auge da frescura entre a metade e o final dos anos 90, e havia evidências de que ter uma página da Web dividida em partes menores como essa era melhor para as velocidades de download - especialmente perceptível pelas conexões de rede que eram tão lentas na época. No entanto, eles tinham muitos problemas, que superavam quaisquer positivos à medida que as velocidades da rede ficavam mais rápidas, para que você não as veja mais sendo usadas.

Um pouco mais tarde (final dos anos 90, início dos anos 2000), as tecnologias de plug-in tornaram-se muito populares, como [Java Applets](/pt-BR/docs/Glossary/Java) e [Flash](/pt-BR/docs/Glossary/Adobe_Flash) - isso permitiu que os desenvolvedores da Web incorporassem conteúdo rico em páginas da Web, como vídeos e animações, que não estavam disponíveis apenas no HTML. A incorporação dessas tecnologias foi alcançada através de elementos como [`<object>`](/pt-BR/docs/Web/HTML/Element/object), e os menos utilizados [`<embed>`](/pt-BR/docs/Web/HTML/Element/embed), e eles eram muito úteis na época. Desde então, ficaram fora de moda devido a muitos problemas, incluindo acessibilidade, segurança, tamanho do arquivo e muito mais; hoje em dia, a maioria dos dispositivos móveis não suporta mais esses plug-ins, e o suporte para desktop está saindo.

Finalmente, o elemento [`<iframe>`](/pt-BR/docs/Web/HTML/Element/iframe) apareceu (juntamente com outras formas de incorporar conteúdo, como [`<canvas>`](/pt-BR/docs/Web/HTML/Element/canvas), `<video>` etc.). Isso fornece uma maneira de incorporar um documento da Web inteiro dentro de outro, como se fosse um [`<img>`](/pt-BR/docs/Web/HTML/Element/img)ou outro elemento, e é usado regularmente hoje .

Com a lição de história fora do caminho, vamos seguir em frente e ver como usar algumas delas.

## Aprendizado ativo: usos clássicos de incorporação

Neste artigo, vamos pular direto para uma seção de aprendizado ativo, para fornecer imediatamente uma idéia real de para que servem as tecnologias de incorporação. O mundo on-line está muito familiarizado com o [Youtube](https://www.youtube.com/) , mas muitas pessoas não conhecem alguns dos recursos de compartilhamento disponíveis. Vejamos como o YouTube nos permite incorporar um vídeo em qualquer página que gostamos de usar [`<iframe>`](/pt-BR/docs/Web/HTML/Element/iframe).

1. Primeiro, vá ao Youtube e encontre o vídeo que você gosta.
2. Abaixo do vídeo, você encontrará um botão _Compartilhar_ - selecione para exibir as opções de compartilhamento.
3. Selecione o botão _Incorporar_ e você receberá um `<iframe>`código - copie isso.
4. Insira-o na caixa de _entrada_ abaixo e veja qual é o resultado na _saída_ .

Para pontos de bônus, você também pode tentar incorporar um [mapa do Google](https://www.google.com/maps/) no exemplo:

1. Vá para o Google Maps e encontre um mapa que você gosta.
2. Clique no "Menu Hamburger" (três linhas horizontais) no canto superior esquerdo da interface do usuário.
3. Selecione a opção _Compartilhar ou incorporar mapa_ .
4. Selecione a opção Incorporar mapa, que fornecerá algum `<iframe>`código - copie isso.
5. Insira-o na caixa de _entrada_ abaixo e veja qual é o resultado na _saída_ .

Se você cometer um erro, sempre poderá redefini-lo usando o botão _Redefinir_ . Se você realmente ficar atolado, pressione o botão _Mostrar solução_ para ver uma resposta.

```html hidden
<h2>Live output</h2>

<div class="output" style="min-height: 250px;"></div>

<h2>Editable code</h2>
<p class="a11y-label">
  Press Esc to move focus away from the code area (Tab inserts a tab character).
</p>

<textarea
  id="code"
  class="input"
  style="width: 95%;min-height: 100px;"></textarea>

<div class="playable-buttons">
  <input id="reset" type="button" value="Reset" />
  <input id="solution" type="button" value="Show solution" />
</div>
```

```css hidden
html {
  font-family: sans-serif;
}

h2 {
  font-size: 16px;
}

.a11y-label {
  margin: 0;
  text-align: right;
  font-size: 0.7rem;
  width: 98%;
}

body {
  margin: 10px;
  background: #f5f9fa;
}
```

```js hidden
const textarea = document.getElementById("code");
const reset = document.getElementById("reset");
const solution = document.getElementById("solution");
const output = document.querySelector(".output");
let code = textarea.value;
let userEntry = textarea.value;

function updateCode() {
  output.innerHTML = textarea.value;
}

reset.addEventListener("click", function () {
  textarea.value = code;
  userEntry = textarea.value;
  solutionEntry = htmlSolution;
  solution.value = "Show solution";
  updateCode();
});

solution.addEventListener("click", function () {
  if (solution.value === "Show solution") {
    textarea.value = solutionEntry;
    solution.value = "Hide solution";
  } else {
    textarea.value = userEntry;
    solution.value = "Show solution";
  }
  updateCode();
});

const htmlSolution =
  '<iframe width="420" height="315" src="https://www.youtube.com/embed/QH2-TGUlwu4" frameborder="0" allowfullscreen>\n</iframe>\n\n<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d37995.65748333395!2d-2.273568166412784!3d53.473310471916975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bae6c05743d3d%3A0xf82fddd1e49fc0a1!2sThe+Lowry!5e0!3m2!1sen!2suk!4v1518171785211" width="600" height="450" frameborder="0" style="border:0" allowfullscreen>\n</iframe>';
let solutionEntry = htmlSolution;

textarea.addEventListener("input", updateCode);
window.addEventListener("load", updateCode);

// stop tab key tabbing out of textarea and
// make it write a tab at the caret position instead

textarea.onkeydown = function (e) {
  if (e.keyCode === 9) {
    e.preventDefault();
    insertAtCaret("\t");
  }

  if (e.keyCode === 27) {
    textarea.blur();
  }
};

function insertAtCaret(text) {
  const scrollPos = textarea.scrollTop;
  const caretPos = textarea.selectionStart;

  const front = textarea.value.substring(0, caretPos);
  const back = textarea.value.substring(
    textarea.selectionEnd,
    textarea.value.length,
  );
  textarea.value = front + text + back;
  caretPos = caretPos + text.length;
  textarea.selectionStart = caretPos;
  textarea.selectionEnd = caretPos;
  textarea.focus();
  textarea.scrollTop = scrollPos;
}

// Update the saved userCode every time the user updates the text area code

textarea.onkeyup = function () {
  // We only want to save the state when the user code is being shown,
  // not the solution, so that solution is not saved over the user code
  if (solution.value === "Show solution") {
    userEntry = textarea.value;
  } else {
    solutionEntry = textarea.value;
  }

  updateCode();
};
```

{{ EmbedLiveSample('Playable_code', 700, 600, "", "", "hide-codepen-jsfiddle") }}

## Iframes em detalhes

Então, isso foi fácil e divertido, certo? Os elementos [`<iframe>`](/pt-BR/docs/Web/HTML/Element/iframe) foram projetados para permitir que você incorpore outros documentos da Web ao documento atual. Isso é ótimo para incorporar conteúdo de terceiros em seu site sobre o qual você pode não ter controle direto e não querer implementar sua própria versão - como vídeo de fornecedores de vídeo on-line, sistemas de comentários como [Disqus](https://disqus.com/) , mapas on-line fornecedores de mapas, banners publicitários etc. Os exemplos editáveis ao vivo que você está usando neste curso são implementados usando `<iframe>`s.

Existem algumas sérias [preocupações de segurança](/pt-BR/docs/Learn/HTML/Multimedia_and_embedding/Other_embedding_technologies#Security_concerns) a serem consideradas com `<iframe>`s, como discutiremos abaixo, mas isso não significa que você não deve usá-las em seus sites - apenas requer algum conhecimento e pensamento cuidadoso. Vamos explorar o código um pouco mais detalhadamente. Digamos que você queira incluir o glossário MDN em uma de suas páginas da web - você pode tentar algo como isto:

```
<iframe src="/pt-BR/docs/Glossary"
        width="100%" height="500" frameborder="0"
        allowfullscreen sandbox>
  <p>
    <a href="/pt-BR/docs/Glossary">
       Fallback link for browsers that don't support iframes
    </a>
  </p>
</iframe>
```

Este exemplo inclui os fundamentos básicos necessários para usar um `<iframe>`:

- [`allowfullscreen`](/pt-BR/docs/Web/HTML/Element/iframe#attr-allowfullscreen)
  - : Se definido, ele `<iframe>`poderá ser colocado no modo de tela cheia usando a [API de tela cheia](/pt-BR/docs/Web/API/Fullscreen_API) (um pouco além do escopo deste artigo).
- [`frameborder`](/pt-BR/docs/Web/HTML/Element/iframe#attr-frameborder)
  - : Se definido como 1, isso indica ao navegador para desenhar uma borda entre esse quadro e outros quadros, que é o comportamento padrão. 0 remove a borda. Usar isso não é mais recomendado, pois o mesmo efeito pode ser melhor alcançado usando em seu [CSS](/pt-BR/docs/Glossary/CSS) .[`border`](/pt-BR/docs/Web/CSS/border)`: none;`
- [`src`](/pt-BR/docs/Web/HTML/Element/iframe#attr-src)
  - : Este atributo, como [`<video>`](/pt-BR/docs/Web/HTML/Element/video)/ [`<img>`](/pt-BR/docs/Web/HTML/Element/img), contém um caminho apontando para o URL do documento a ser incorporado.
- [`width`](/pt-BR/docs/Web/HTML/Element/iframe#attr-width) e [`height`](/pt-BR/docs/Web/HTML/Element/iframe#attr-height)
  - : Esses atributos especificam a largura e a altura que você deseja que o iframe seja.
- Conteúdo alternativo
  - : Da mesma forma que outros elementos semelhantes [`<video>`](/pt-BR/docs/Web/HTML/Element/video), você pode incluir conteúdo de fallback entre as `<iframe></iframe>`tags de abertura e fechamento que aparecerão se o navegador não suportar `<iframe>`. Nesse caso, incluímos um link para a página. É improvável que você encontre qualquer navegador que não suporte `<iframe>`s atualmente.
- [`sandbox`](/pt-BR/docs/Web/HTML/Element/iframe#attr-sandbox)
  - : Esse atributo, que funciona em navegadores um pouco mais modernos que o restante dos `<iframe>`recursos (por exemplo, IE 10 e superior), requer configurações de segurança mais elevadas; falaremos mais sobre isso na próxima seção.

> **Nota:** Para melhorar a velocidade, é uma boa ideia definir o `src`atributo do iframe com JavaScript após o carregamento do conteúdo principal. Isso torna sua página utilizável mais cedo e diminui o tempo de carregamento da página oficial (uma importante métrica de [SEO](/pt-BR/docs/Glossary/SEO) ).

### Preocupações com segurança

Acima, mencionamos preocupações de segurança - vamos abordar isso com mais detalhes agora. Não esperamos que você entenda todo esse conteúdo perfeitamente da primeira vez; queremos apenas que você fique ciente dessa preocupação e forneça uma referência para retornar à medida que for mais experiente e começar a considerar o uso de `<iframe>`s em seus experimentos e trabalhos. Além disso, não há necessidade de ter medo e não usar `<iframe>`s - você só precisa ter cuidado. Leia...

Fabricantes de navegadores e desenvolvedores da Web descobriram da maneira mais difícil que iframes são um alvo comum (termo oficial: **vetor de ataque** ) para pessoas más na Web (geralmente chamadas de **hackers** ou, mais precisamente, **crackers** ) atacarem se estiverem tentando modificar maliciosamente seu página da web ou induzir as pessoas a fazer algo que não desejam, como revelar informações confidenciais como nomes de usuário e senhas. Por esse motivo, engenheiros de especificações e desenvolvedores de navegadores desenvolveram vários mecanismos de segurança para torná- `<iframe>`los mais seguros, e também existem práticas recomendadas a serem consideradas - abordaremos alguns deles abaixo.

> **Nota:** [Clickjacking](https://pt.wikipedia.org/wiki/Clickjacking) é um tipo comum de ataque iframe, no qual hackers incorporam um iframe invisível ao documento (ou incorporam o documento ao próprio site malicioso) e o usam para capturar as interações dos usuários. Essa é uma maneira comum de enganar os usuários ou roubar dados confidenciais.

Um primeiro exemplo rápido - tente carregar o exemplo anterior que mostramos acima em seu navegador - você pode [encontrá-lo ao vivo no Github](http://mdn.github.io/learning-area/html/multimedia-and-embedding/other-embedding-technologies/iframe-detail.html) ( [consulte o código-fonte](https://github.com/mdn/learning-area/blob/gh-pages/html/multimedia-and-embedding/other-embedding-technologies/iframe-detail.html) também.) Na verdade, você não verá nada exibido na página e se olhar para o _console_ nas [ferramentas de desenvolvedor](/pt-BR/docs/Learn/Common_questions/What_are_browser_developer_tools) do [navegador](/pt-BR/docs/Learn/Common_questions/What_are_browser_developer_tools) , você verá uma mensagem informando o motivo. No Firefox, você será informado sobre o _Load negado pelo X-Frame-Options: /pt-BR/docs/Glossary não permite o enquadramento_ . Isso ocorre porque os desenvolvedores que criaram o MDN incluíram uma configuração no servidor que serve as páginas do site para impedir que elas sejam incorporadas dentro de `<iframe>`s (consulte [Configurar diretivas CSP](/pt-BR/docs/Learn/HTML/Multimedia_and_embedding/Other_embedding_technologies#Configure_CSP_directives), abaixo.) Isso faz sentido - uma página MDN inteira não faz sentido para ser incorporada em outras páginas, a menos que você queira fazer algo como incorporá-las ao seu site e reivindicá-las como suas - ou tentar roubar dados via clickjacking , que são coisas muito ruins para se fazer. Além disso, se todos começassem a fazer isso, toda a largura de banda adicional começaria a custar muito dinheiro à Mozilla.

#### Incorporar somente quando necessário

Às vezes, faz sentido incorporar conteúdo de terceiros - como vídeos e mapas do youtube -, mas você pode economizar muitas dores de cabeça se incorporar apenas conteúdo de terceiros quando completamente necessário. Uma boa regra geral para a segurança da Web é _"Você nunca pode ser muito cauteloso. Se você fez isso, verifique-o de qualquer maneira. Se alguém o fez, assuma que é perigoso até prova em contrário"._

Além da segurança, você também deve estar ciente dos problemas de propriedade intelectual. A maioria dos conteúdos tem direitos autorais, offline e online, mesmo o conteúdo que você não pode esperar (por exemplo, a maioria das imagens no [Wikimedia Commons](https://commons.wikimedia.org/wiki/Main_Page) ). Nunca exiba conteúdo em sua página da Web, a menos que você seja o proprietário ou os proprietários tenham lhe dado uma permissão inequívoca por escrito. As penalidades por violação de direitos autorais são severas. Novamente, você nunca pode ser muito cauteloso.

Se o conteúdo for licenciado, você deverá obedecer aos termos da licença. Por exemplo, o conteúdo no MDN é [licenciado sob CC-BY-SA](/pt-BR/docs/MDN/About#Copyrights_and_licenses) . Isso significa que você deve [creditar-nos adequadamente](https://wiki.creativecommons.org/wiki/Best_practices_for_attribution) quando citar nosso conteúdo, mesmo que faça alterações substanciais.

#### Use HTTPS

{{Glossary("HTTPS")}} é a versão criptografada do {{Glossary("HTTP")}}. Você deve utilizar HTTPS em seus websites sempre que possível:

1. HTTPS reduz a chance de que conteúdo remoto tenha sido adulterado no caminho.
2. HTTPS previne que conteúdo que tenha incorporado ao site acesse conteúdo em seu documento de origem, e vice versa.

Utilizar HTTPS requer um certificado de segurança, que pode ser bem caro (apesar que o [Let's Encrypt](https://letsencrypt.org/) deixe as coisas mais fáceis) — se você não puder obter um certificado, você deve fornecer seus documentos com HTTP. Contudo, por conta do segundo benefício do HTTPS descrito acima, _não importa o custo, você nunca deve incorporar conteúdo de terceiros em HTTP._ (No caso do melhor cenário, o navegador de seu usuário irá dá-lo um aviso assustador.) Todas as empresas com boa reputação irão fornecer conteúdo para ser incoporado por meio `<iframe>` irá fazê-lo disponível através de HTTPS — veja a URLs dentro do `<iframe>` `no`atributo src, quando você está incorporando conteúdo do Google Maps ou Youtube, por exemplo.

> **Nota:** [Páginas do Github](/pt-BR/docs/Learn/Common_questions/Using_Github_pages) permitem que conteúdo seja fornecido via HTTPS por padrão, então é útil para hospedar conteúdo. Se você está utilizando uma hospedagem diferente e não tem certeza do mesmo, pergunte sobre com o seu provedor de hospedagem.

#### Sempre utilize o atributo `sandbox`

Você deseja que os atacantes tenham a menor quantidade possível de poder para causar danos ao seu website, portanto, você deve dar ao conteúdo incorporado _apenas a permissão para fazer o seu trabalho._ É claro, isto se aplica ao seu próprio conteúdo, também. Um container para código onde ele possa ser utilizado apropriadamente — ou para testes — mas não pode causar nenhum dano ao resto do código base (tanto acidental quanto maliciosa) é chamado [sandbox](<https://en.wikipedia.org/wiki/Sandbox_(computer_security)>).

Conteúdo fora de uma sandbox pode fazer muito mais que o esperado (executar JavaScript, submeter forms, criar novas janelas no navegador, etc.) Por padrão, você deve impor todas as restrições disponíveis utilizando o atributo`sandbox` sem parâmetros, como mostrado em nosso exemplo anterior.

Se absolutamente necessário, você pode adicionar permissões uma a uma (dentro do valor do atributo`sandbox=""`) — veja em [`sandbox`](/pt-BR/docs/Web/HTML/Element/iframe#sandbox) as referências de entrada para todas as opções disponíveis. Uma nota importante é que você _nunca_ deve adicionar ambos `allow-scripts` e `allow-same-origin` no atributo de sandbox — neste caso, conteúdo incorporado pode burlar a política de segurança de mesmo destino que impede sites de executarem scripts, e utilizar JavaScript para desativar o sandboxing completamente.

> **Nota:** Sandboxing não fornece nenhuma proteção se atacantes puderem enganar os usuários para que visitem conteúdo malicioso diretamete (fora de um `iframe`). Se existir qualquer chance que certo conteúdo possa ser malicioso (exemplo, conteúdo gerado por usuários), por favor forneça-o em um {{glossary("domain")}} diferente de seu site principal.

#### Configure directivas CSP

{{Glossary("CSP")}} significa **[política de segurança de conteúdo](/pt-BR/docs/Web/Security/CSP)** e fornece um [conjunto de cabeçalhos HTTP](/pt-BR/docs/Web/Security/CSP/CSP_policy_directives) (metadados enviados junto com suas páginas da web quando são veiculados de um servidor da web) projetados para melhorar a segurança do seu documento HTML. Quando se trata de proteger `<iframe>`'s, você pode _[configurar seu servidor para enviar um cabeçalho `X-Frame-Options` apropriado](/pt-BR/docs/Web/HTTP/X-Frame-Options)_. Isso pode impedir que outros sites incorporem seu conteúdo em suas páginas da Web (o que habilitaria o [clickjacking](https://pt.wikipedia.org/wiki/clickjacking) e vários outros ataques), exatamente o que os desenvolvedores do MDN fizeram, como vimos anteriormente.

> **Nota:** Você pode ler a publicação de Frederik Braun [X-Frame-Options Security Header](https://blog.mozilla.org/security/2013/12/12/on-the-x-frame-options-security-header/) para obter mais informações sobre este tópico. Obviamente, está fora do escopo uma explicação completa neste artigo.

## The \<embed> and \<object> elements

The {{htmlelement("embed")}} and {{htmlelement("object")}} elements serve a different function to {{htmlelement("iframe")}} — these elements are general purpose embedding tools for embedding multiple types of external content, which include plugin technologies like Java Applets and Flash, PDF (which can be shown in a browser with a PDF plugin), and even content like videos, SVG and images!

> **Nota:** A **plugin**, in this context, refers to software that provides access to content the browser cannot read natively.

However, you are unlikely to use these elements very much — Applets haven't been used for years, Flash is no longer very popular, due to a number of reasons (see [The case against plugins](#the_case_against_plugins), below), PDFs tend to be better linked to than embedded, and other content such as images and video have much better, easier elements to handle those. Plugins and these embedding methods are really a legacy technology, and we are mainly mentioning them in case you come across them in certain circumstances like intranets, or enterprise projects.

If you find yourself needing to embed plugin content, this is the kind of information you'll need, at a minimum:

|                                                                            | {{htmlelement("embed")}}                                                                                  | {{htmlelement("object")}}                                                                                   |
| -------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| {{glossary("URL")}} of the embedded content                                | [`src`](/pt-BR/docs/Web/HTML/Element/embed#src)                                                           | [`data`](/pt-BR/docs/Web/HTML/Element/object#data)                                                          |
| _accurate_ {{glossary("MIME type", 'media type')}} of the embedded content | [`type`](/pt-BR/docs/Web/HTML/Element/embed#type)                                                         | [`type`](/pt-BR/docs/Web/HTML/Element/object#type)                                                          |
| height and width (in CSS pixels) of the box controlled by the plugin       | [`height`](/pt-BR/docs/Web/HTML/Element/embed#height) [`width`](/pt-BR/docs/Web/HTML/Element/embed#width) | [`height`](/pt-BR/docs/Web/HTML/Element/object#height) [`width`](/pt-BR/docs/Web/HTML/Element/object#width) |
| names and values, to feed the plugin as parameters                         | ad hoc attributes with those names and values                                                             | single-tag {{htmlelement("param")}} elements, contained within `<object>`                                   |
| independent HTML content as fallback for an unavailable resource           | not supported (`<noembed>` is obsolete)                                                                   | contained within `<object>`, after `<param>` elements                                                       |

> **Nota:** `<object>` requires a `data` attribute, a `type` attribute, or both. If you use both, you may also use the [`typemustmatch`](/pt-BR/docs/Web/HTML/Element/object#typemustmatch) attribute (only implemented in Firefox, as of this writing). `typemustmatch` keeps the embedded file from running unless the `type` attribute provides the correct media type. `typemustmatch` can therefore confer significant security benefits when you're embedding content from a different {{glossary("origin")}} (it can keep attackers from running arbitrary scripts through the plugin).

Here's an example that uses the {{htmlelement("embed")}} element to embed a Flash movie (see this [live on Github](http://mdn.github.io/learning-area/html/multimedia-and-embedding/other-embedding-technologies/embed-flash.html), and [check the source code](https://github.com/mdn/learning-area/blob/gh-pages/html/multimedia-and-embedding/other-embedding-technologies/embed-flash.html) too):

```html
<embed
  src="whoosh.swf"
  quality="medium"
  bgcolor="#ffffff"
  width="550"
  height="400"
  name="whoosh"
  align="middle"
  allowScriptAccess="sameDomain"
  allowFullScreen="false"
  type="application/x-shockwave-flash"
  pluginspage="http://www.macromedia.com/go/getflashplayer" />
```

Pretty horrible, isn't it? The HTML generated by the Adobe Flash tool tended to be even worse, using an `<object>` element with an `<embed>` element embedded in it, to cover all bases (check out an example.) Flash was even used successfully as fallback content for HTML5 video, for a time, but this is increasingly being seen as not necessary.

Now let's look at an `<object>` example that embeds a PDF into a page (see the [live example](http://mdn.github.io/learning-area/html/multimedia-and-embedding/other-embedding-technologies/object-pdf.html) and the [source code](https://github.com/mdn/learning-area/blob/gh-pages/html/multimedia-and-embedding/other-embedding-technologies/object-pdf.html)):

```html
<object
  data="mypdf.pdf"
  type="application/pdf"
  width="800"
  height="1200"
  typemustmatch>
  <p>
    You don't have a PDF plugin, but you can
    <a href="mypdf.pdf">download the PDF file. </a>
  </p>
</object>
```

PDFs were a necessary stepping stone between paper and digital, but they pose many [accessibility challenges](http://webaim.org/techniques/acrobat/acrobat) and can be hard to read on small screens. They do still tend to be popular in some circles, but it is much better to link to them so they can be downloaded or read on a separate page, rather than embedding them in a webpage.

### The case against plugins

Once upon a time, plugins were indispensable on the Web. Remember the days when you had to install Adobe Flash Player just to watch a movie online? And then you constantly got annoying alerts about updating Flash Player and your Java Runtime Environment. Web technologies have since grown much more robust, and those days are over. For virtually all applications, it's time to stop delivering content that depends on plugins and start taking advantage of Web technologies instead.

- **Broaden your reach to everyone.** Everyone has a browser, but plugins are increasingly rare, especially among mobile users. Since the Web is easily used without any plugins, people would rather just go to your competitors' websites than install a plugin.
- **Give yourself a break from the [extra accessibility headaches](https://webaim.org/techniques/flash/) that come with Flash and other plugins.**
- **Stay clear of additional security hazards.** Adobe Flash is [notoriously insecure,](https://www.cvedetails.com/product/6761/Adobe-Flash-Player.html?vendor_id=53) even after countless patches. In 2015, Alex Stamos, then-Chief Security Officer at Facebook, [requested that Adobe discontinue Flash.](https://www.theverge.com/2015/7/13/8948459/adobe-flash-insecure-says-facebook-cso)

> **Nota:**Due to its inherent issues and the lack of support for Flash, Adobe announced that they would stop supporting it at the end of 2020. As of January 2020, most browsers block Flash content by default, and by December 31st of 2020, all browsers will have completly removed all Flash functionality. Any existing Flash content will be inaccessable after that date.

So what should you do? If you need interactivity, HTML and {{glossary("JavaScript")}} can readily get the job done for you with no need for Java applets or outdated ActiveX/BHO technology. Instead of relying on Adobe Flash, you should use [HTML5 video](/pt-BR/docs/Learn/HTML/Howto/Add_audio_or_video_content_to_a_webpage) for your media needs, [SVG](/pt-BR/docs/Learn/HTML/Howto/Add_vector_image_to_a_webpage) for vector graphics, and [Canvas](/pt-BR/docs/Web/API/Canvas_API/Tutorial) for complex images and animations. [Peter Elst was already writing some years ago](https://plus.google.com/+PeterElst/posts/P5t4pFhptvp) that Adobe Flash is rarely the right tool for the job. As for ActiveX, even Microsoft's {{glossary("Microsoft Edge","Edge")}} browser no longer supports it.

## Test your skills!

You've reached the end of the this article, but can you remember the most important information? You can find some further tests to verify that you've retained this information before you move on — see [Test your skills: Multimedia and embedding](/pt-BR/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content/Test_your_skills:_Multimedia_and_embedding).

## Summary

The topic of embedding other content in web documents can quickly become very complex, so in this article, we've tried to introduce it in a simple, familiar way that will immediately seem relevant, while still hinting at some of the more advanced features of the involved technologies. To start with, you are unlikely to use embedding for much beyond including third-party content like maps and videos on your pages. As you become more experienced, however, you are likely to start finding more uses for them.

There are many other technologies that involve embedding external content besides the ones we discussed here. We saw some in earlier articles, such as {{htmlelement("video")}}, {{htmlelement("audio")}}, and {{htmlelement("img")}}, but there are others to discover, such as {{htmlelement("canvas")}} for JavaScript-generated 2D and 3D graphics, and {{SVGElement("svg")}} for embedding vector graphics. We'll look at [SVG](/pt-BR/docs/Web/SVG) in the next article of the module.

{{PreviousMenuNext("Learn/HTML/Multimedia_and_embedding/Video_and_audio_content", "Learn/HTML/Multimedia_and_embedding/Adding_vector_graphics_to_the_Web", "Learn/HTML/Multimedia_and_embedding")}}
