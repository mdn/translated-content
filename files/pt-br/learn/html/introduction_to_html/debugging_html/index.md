---
title: Debugging HTML
slug: Learn/HTML/Introduction_to_HTML/Debugging_HTML
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/HTML/Introduction_to_HTML/Document_and_website_structure", "Learn/HTML/Introduction_to_HTML/Marking_up_a_letter", "Learn/HTML/Introduction_to_HTML")}}

Escrever HTML é legal, mas e se algo der errado, e você não conseguir descobrir onde está o erro no código? Este artigo apresentará algumas ferramentas que podem ajudá-lo a encontrar e corrigir erros no HTML.

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">Pré-requisitos:</th>
      <td>
        Familiaridade com HTML, conforme abordado, por exemplo, em
        <a href="/pt-BR/docs/Learn/HTML/Introduction_to_HTML/Getting_started"
          >Introdução ao HTML</a
        >,
        <a
          href="/pt-BR/docs/Aprender/HTML/Introduction_to_HTML/HTML_text_fundamentals"
          >Fundamentos de texto em HTML</a
        >
        e
        <a
          href="/pt-BR/docs/Aprender/HTML/Introduction_to_HTML/Creating_hyperlinks"
          >Criação de Hiperlinks</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Objetivo:</th>
      <td>
        Aprender o básico sobre o uso de ferramentas de depuração (debugging)
        para encontrar problemas em HTML.
      </td>
    </tr>
  </tbody>
</table>

## Depurar não é assustador

Ao escrever algum tipo de código, tudo costuma ir bem, até o temido momento quando ocorre um erro — você fez algo errado, então seu código não funciona - talvez não funcione mais nada ou não funciona exatamente como você queria. Por exemplo, a seguir é mostrado um erro relatado ao tentar {{glossary("Compile")}} um programa simples escrito na linguagem [Rust](https://www.rust-lang.org/).

![A console window showing the result of trying to compile a rust program with a missing quote around a string in a print statement. The error message reported is error: unterminated double quote string.](error-message.png)Aqui, a mensagem de erro é relativamente fácil de entender — "string de aspas duplas sem terminação". Se você olhar a listagem, provavelmente verá como `println!(Hello, world!");` pode estar faltando logicamente uma aspa dupla. No entanto, as mensagens de erro podem ficar mais complicadas e menos fáceis de interpretar à medida que os programas se tornam maiores, e até mesmo casos simples podem parecer um pouco intimidadores para alguém que não sabe nada sobre o Rust.

Depurar um código não tem que ser assustador, porém — a chave para se sentir confortável em escrever e depurar qualquer linguagem ou código de programação é a familiaridade com a linguagem e as ferramentas.

## HTML e depuração

HTML não é tão complicado de entender quanto o Rust. O HTML **não é compilado** em um formato diferente antes do navegador analisá-lo e mostrar o resultado (ele é interpretado, não compilado). E a sintaxe do {{glossary("Element")}} HTML é muito mais fácil de entender do que uma "linguagem de programação real" como Rust, {{glossary("JavaScript")}}, ou {{glossary("Python")}}. A forma como os navegadores analisam o HTML é muito mais **permissiva** do que a forma como as linguagens de programação são executadas, o que é bom e ruim.

### Código permissivo

Então, o que queremos dizer com permissivo? Bem, geralmente quando você faz algo errado no código, existem dois tipos principais de erros que você encontrará:

- **Erros de sintaxe**: São os erros de ortografia no seu código que realmente fazem com que o programa não seja executado, como o erro do Rust mostrado acima. Estes geralmente são fáceis de corrigir, desde que você esteja familiarizado com a sintaxe (forma de escrever) da linguagem e saiba o que significam as mensagens de erro.
- **Erros lógicos**: São erros onde a sintaxe está correta, mas o código não é o que você pretendia, o que significa que o programa é executado incorretamente. Geralmente, eles são mais difíceis de corrigir do que erros de sintaxe, pois não há uma mensagem de erro para direcioná-lo para a origem deste erro.

O próprio HTML não sofre de erros de sintaxe porque os navegadores o analisam permissivamente, o que significa que a página ainda é exibida mesmo se houver erros de sintaxe. Os navegadores têm regras internas para indicar como interpretar a marcação escrita incorretamente, para que você obtenha algo em execução, mesmo que não seja o esperado. Isso, claro, ainda pode ser um problema!

> **Nota:** O HTML é analisado permissivamente porque, quando a web foi criada, foi decidido que permitir que as pessoas publicassem seus conteúdos era mais importante do que garantir que a sintaxe estivesse absolutamente correta. A web provavelmente não seria tão popular quanto é hoje, se tivesse sido mais rigorosa desde o início.

### Aprendizado Ativo: Estudando código permissivo

É hora de estudar a natureza permissiva do código HTML.

1. Primeiramente, faça o download do [debug-example demo](https://github.com/mdn/learning-area/blob/master/html/introduction-to-html/debugging-html/debug-example.html) e o salve localmente. Esse exemplo contém erros propositais para que possamos explorá-los (tal código HTML é dito _**badly-formed**_, em contraponto ao HTML _**well-formed**_).
2. Em seguida, abra o arquivo em um navegador. Você verá algo como:![A simple HTML document with a title of HTML debugging examples, and some information about common HTML errors, such as unclosed elements, badly nested elements, and unclosed attributes. ](badly-formed-html.png)
3. Isso claramente não parece bom; vamos dar uma olhada no código fonte para tentar achar os erros (somente o conteúdo de _body_ é mostrado):

   ```html
   <h1>Exemplo de debugação HTML</h1>

   <p>O quê causa erros em HTML?

   <ul>
     <li>Elementos não fechados: Se um elemento não for <strong>fechado corretamente,
         pode se espalhar e afetar áreas que você não imaginava

     <li>Elementos desagrupados: Agrupar elementos corretamente é importante para
       o comportamento do código. <strong>negrito <em>negrito sublinhado?</strong>
         O que é isso?</em>

     <li>Atributos não fechados: Outra fonte comum de problemas HTML. Vamos dar uma olhada: <a href="https://www.mozilla.org/>Link para página da Mozilla</a>
   </ul>
   ```

4. Vamos analisar os erros:

   - Os elementos {{htmlelement("p","parágrafo")}} e {{htmlelement("li","item da lista")}} não possuem _tags_ de fechamento. Olhando a imagem acima, isso não parece ter afetado muito a renderização do HTML já que é fácil deduzir onde um elemento deveria terminar e outro, começar.
   - O primeiro elemento {{htmlelement("strong")}} não possui _tag_ de fechamento. Isto é um pouco mais problemático porque não é necessariamente fácil determinar onde um elemento deveria terminar. Assim, todo o resto do texto foi fortemente enfatizado.
   - Essa seção foi aninhada incorretamente: `<strong>negrito <em>negrito sublinhado?</strong> O que é isso?</em>`. Não é fácil dizer como esse trecho foi interpretado por causa do problema anterior.
   - O valor do atributo [`href`](/pt-BR/docs/Web/HTML/Element/a#href) não tem as aspas de fechamento. Isso parece ter causado o maior problema — o _link_ não foi renderizado.

5. Agora vamos dar uma olhada no HTML que o navegador renderizou, comparando-o com o nosso código fonte. Para fazer isso, usaremos as ferramentas de desenvolvimento oferecidas pelo navegador. Se você não está familiarizado com estas ferramentas, dê uma olhadinha nesse tutorial: [O que são as ferramentas de desenvolvimento do navegador](/pt-BR/docs/Learn/Common_questions/What_are_browser_developer_tools).
6. No inspetor DOM, você pode ver como o HTML renderizado fica: ![The HTML inspector in Firefox, with our example's paragraph highlighted, showing the text "What causes errors in HTML?" Here you can see that the paragraph element has been closed by the browser.](html-inspector.png)
7. Utilizando o inspetor DOM, vamos explorar nosso código detalhadamente para ver como o navegador tentou consertar os erros do código HTML (nós fizemos a análise com o Firefox, mas outros navegadores modernos _devem_ apresentar o mesmo resultado):

   - As _tags_ de fechamento foram colocadas nos parágrafos e itens da lista.
   - Não está claro onde o primeiro elemento `<strong>` deveria terminar, portanto o navegador envolveu cada bloco subsequente em uma _tag_ _strong_ própria até o fim do documento!
   - O aninhamento incorreto foi corrigido pelo navegador da seguinte maneira:

     ```html
     <strong
       >strong
       <em>strong emphasised?</em>
     </strong>
     <em> what is this?</em>
     ```

   - O link cujas aspas de fechamento não estavam presentes foi totalmente excluído da renderização. Então o último item ficou assim:

     ```html
     <li>
       <strong
         >Unclosed attributes: Another common source of HTML problems. Let's
         look at an example:
       </strong>
     </li>
     ```

### Validação HTML

Então, você pode ver pelo exemplo acima que você realmente quer ter certeza de que o seu HTML foi bem construido! Mas Como? Em um pequeno exemplo como o que foi visto acima, é facil analisar as linhas e achar os erros, mas e se fosse um gigante e complexo documento HTML?

A melhor estratégia é começar rodando a sua página HTML através do [Markup Validation Service](https://validator.w3.org/) — criado e mantido pelo W3C, uma organização que cuida das especificações que define o HTML, CSS, e outras tecnologias WEB. Esta página considera um documento HTML como uma entrada, fazendo a leitura dela e retornando o que há de errado com o seu HTML.

![The HTML validator homepage](validator.png)

Para especificar o HTML a ser validado, você pode dar um endereço web, fazer o upload de um arquivo HTML, ou diretamente inserir o código HTML.

### Aprendizado Ativo: Validando um documento HTML

Vamos tentar fazer isto com o nosso [sample document](https://github.com/mdn/learning-area/blob/master/html/introduction-to-html/debugging-html/debug-example.html).

1. Primero, carregue o [Markup Validation Service](https://validator.w3.org/) em uma aba no seu navegador, caso já não esteja carregada.
2. Troque para a aba [Validate by Direct Input](https://validator.w3.org/#validate_by_input).
3. Copie todo o código do documento de exemplo (não apenas o body) e cole dentro da grande área de texto mostrada no Markup Validation Service.
4. Pressione o botão _Check_.

Você deverá receber uma lista de erros e outras informações.

![A list of of HTML validation results from the W3C markup validation service](validation-results.png)

#### Interpretando as mensagens de erros

As mensagens de erros geralmente são úteis, mas algumas vezes elas não ajudam tanto; com um pouco de prática você pode descobrir como interpretar-lás para arrumar o seu código. Vamos dar uma olhada nas mensagens de erros e ver o que elas significam. Você verá que cada mensagem vem com um número para a linha e um para a coluna afim de ajudar você a localizar o erro facilmente.

- "End tag `li` implied, but there were open elements" (2 instances): Estas mensagens indicam que um elemento que esta aberto deveria estar fechado. O final da tag esta implicito, mas não esta realmente lá. A informação de linha/coluna indica para a primeira linha depois de onde a tag de fechamento realmente deveria estar, mas isto é uma pista boa o suficiente para ver o que há de errado.
- "Unclosed element `strong`": Este é muito fácil de entender — um {{htmlelement("strong")}} elemento esta aberto, e uma informação de linha/coluna indica diretamente para onde esta.
- "End tag `strong` violates nesting rules": Este aponta os elementos incorretamente aninhados, e a informação de linha/coluna aponta onde o erro está.
- "End of file reached when inside an attribute value. Ignoring tag": Essa é mais enigmática; se refere ao fato de que há um valor do atributo formado indevidamente em algum lugar, possivelmente próximo ao fim do arquivo porquê o fim do arquivo aparece dentro do valor do atributo. O fato de o navegador não renderizar o link deveria nos dar uma boa pista de qual elemento está em falta.
- "End of file seen and there were open elements": Essa é um pouco ambígua, mas basicamente se refere ao fato de que há elementos em aberto que devem ser fechados devidamente. A linha de números aponta para as últimas linhas do arquivo, e esta mensagem de erro vem com uma linha do código que aponta um exemplo de um elemento em aberto:

  ```
  Exemplo: <a href="https://www.mozilla.org/>link para página da Mozilla</a> ↩ </ul>↩ </body>↩</html>
  ```

  > **Nota:** Um atributo faltando uma aspas pode resultar em um elemento aberto porque o resto do documento é interpretado como conteúdo do atributo.

- "Unclosed element `ul`": Esta não ajuda em nada, já que o elemento {{htmlelement("ul")}} _está_ fechado corretamente. Este erro aparece porque o elemento {{htmlelement("a")}} não foi fechado, devido a falta de aspas de fechamento.

Se você não descobrir o significado de todas mensagens de erro, não se preocupe — uma boa ideia é tentar resolver alguns erros por vez. Então tente revalidar seu HTML para ver o que restou. Às vezes resolver erros anteriores pode te livrar de outras mensagens de erro — vários erros podem ser causados na maioria das vezes por um só, tipo um efeito dominó.

Você vai saber quando todos os seus erros forem resolvidos quando ver a seguinte bandeira no output:

![Banner that reads "The document validates according to the specified schema(s) and to additional constraints checked by the validator."](valid-html-banner.png)

## Sumário

Então é isso, uma introdução a debugação de HTML, na qual deve te dar dicas úteis quando você começar a debugar CSS, JavaScript, e outros tipos de códigos mais tarde na sua carreira. Isso também significa o fim dos artigos de aprendizado do Módulo de Introdução ao HTML — agora você pode testar a si mesmo com nossa avaliação: a primeira está no link abaixo.

{{PreviousMenuNext("Learn/HTML/Introduction_to_HTML/Document_and_website_structure", "Learn/HTML/Introduction_to_HTML/Marking_up_a_letter", "Learn/HTML/Introduction_to_HTML")}}
