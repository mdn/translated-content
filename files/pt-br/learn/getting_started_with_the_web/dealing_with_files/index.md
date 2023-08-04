---
title: Lidando com arquivos
slug: Learn/Getting_started_with_the_web/Dealing_with_files
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Getting_started_with_the_web/What_will_your_website_look_like", "Learn/Getting_started_with_the_web/HTML_basics", "Learn/Getting_started_with_the_web")}}

Um site consiste de muitos arquivos: conteúdo em texto, código, folhas de estilo, conteúdo em mídia e por aí vai. Ao criar um site, você precisa reunir esses arquivos em uma certa estrutura no computador local, certificar-se de que eles possam se comunicar e obter todo o conteúdo antes de [enviá-los para o servidor](/pt-BR/docs/Aprender/Getting_started_with_the_web/Publicando_seu_site). _Lidando com Arquivos_ discute algumas questões às quais você deve estar ciente para que você possa configurar uma estrutura de arquivos para o seu site.

## Onde seu site deve residir no seu computador?

Quando você está trabalhando em um site localmente no seu próprio computador, você deve manter todos os arquivos relacionados em uma mesma pasta que reflete a estrutura dos arquivos do site publicado em um servidor. Essa pasta pode estar em qualquer lugar que você quiser, mas você deve colocá-la em algum lugar de fácil acesso, talvez no Desktop, na sua pasta Home, ou na raiz do seu HD.

1. Escolha um lugar para guardar seus projetos de site. Aqui, crie uma nova pasta chamada `projetos-web` (ou algo do tipo). Essa é a pasta onde todos seus projetos de site estarão.
2. Dentro dessa pasta, crie outra pasta para guardar seu primeiro site. Chame ela de `site-teste` (ou algo mais criativo).

## Deixando de lado as maiúsculas e espaços

Você vai perceber no decorrer desse artigo que nós pedimos para que você nomeie pastas e arquivos completamente em letras minúsculas e sem espaços. Isso acontece porque:

1. Muitos computadores, particularmente servidores web, são case-sensitive. Então, por exemplo, se você colocar uma imagem no seu site em `site-teste/MyImage.jpg`, e então em um outro arquivo você tentar chamar `site-teste/myimage.jpg`, não vai funcionar.
2. Navegadores, servidores web e linguagens de programação não lidam bem com espaços. Por exemplo, se você usa espaços no nome do seu arquivo, alguns sistemas vão tratar o nome do arquivo como dois nomes. Alguns servidores vão substituir os espaços no nome do arquivo por "%20" (o código para espaço em URLs), quebrando seus links. É melhor separar palavras com traços, em vez de sublinhado: `meu-arquivo.html` vs. `meu_arquivo.html`.

A resposta curta é que você deve usar um hífen para os nomes dos arquivos. O mecanismo de pesquisa do Google trata um hífen como separador de palavras, mas não considera um sublinhado dessa maneira. Por esses motivos, é melhor criar o hábito de escrever sua pasta e nomes de arquivos em letras minúsculas, sem espaços e com palavras separadas por traços, pelo menos até você saber o que está fazendo. Dessa forma, você encontrará menos problemas no futuro.

## Qual estrutura seu site deve ter?

A seguir, vamos ver qual estrutura seu site teste deve ter. As coisas mais comuns que temos em qualquer projeto de site que criamos são um arquivo de índice HTML e pastas que contém imagens, arquivos de estilo e arquivos de scripts. Vamos criá-los agora:

1. **`index.html`**: Esse arquivo vai geralmente conter o conteúdo da sua página, ou seja, os textos e as imagens que as pessoas veem quando acessam seu site pela primeira vez. Usando seu editor de texto, crie um novo arquivo chamado `index.html` e salve dentro da sua pasta `site-teste`.
2. **pasta `imagens`**: Essa pasta vai conter todas as imagens que você vai usar no seu site. Crie uma pasta chamada `imagens`, dentro da sua pasta `site-teste`.
3. **pasta `estilos`**: Essa pasta vai conter os códigos CSS usados para dar estilo ao seu conteúdo (por exemplo, configurando a cor do texto e do fundo da página). Crie uma pasta chamada `estilos`, dentro da pasta `site-teste`.
4. **pasta `scripts`**: Essa pasta vai conter todos os códigos JavaScript usados para adicionar funcionalidades interativas para seu site (ex.: botões que carregam dados quando clicados). Crie uma pasta chamada `scripts`, dentro da sua pasta `site-teste`.

> **Nota:** Em computadores com Windows, você deve ter problemas para ver os nomes dos arquivos, porque o Windows tem uma opção chamada **Ocultar as extensões dos tipos de arquivo conhecidos** ativada por padrão. Geralmente você pode desativar essa opção indo no Windows Explorer, selecionando a opção **Opções de pasta...**, desmarque a caixa de seleção **Ocultar as extensões dos tipos de arquivo conhecidos**, e clique em **OK**. Para mais informação sobre sua versão de Windows, procure na web.

## Caminhos de arquivo

Para fazer arquivos conversarem entre si, você tem que fornecer um caminho de arquivo entre eles — basicamente uma rota para que um arquivo saiba onde o outro está. Para demonstrar isso, nós vamos inserir um pouco de HTML no nosso arquivo `index.html`, e fazer mostrar a imagem que você escolheu no artigo ["](/en-US/Learn/Getting_started_with_the_web/What_should_your_web_site_be_like)[Como será o seu site?](/pt-BR/docs/Aprender/Getting_started_with_the_web/com_que_seu_site_vai_parecer)["](/en-US/Learn/Getting_started_with_the_web/What_should_your_web_site_be_like)

1. Copie a imagem que você escolheu antes para sua pasta `imagens`.
2. Abra seu arquivo `index.html` e insira o seguinte código exatamente como está escrito. Não se preocupe com o significado — nós vamos olhar com mais detalhes essa estrutura posteriormente.

   ```html
   <!doctype html>
   <html>
     <head>
       <meta charset="utf-8" />
       <title>Minha página de teste</title>
     </head>
     <body>
       <img src="" alt="Minha imagem de teste" />
     </body>
   </html>
   ```

3. A linha `<img src="" alt="Minha imagem de teste">` é o código HTML que vai inserir uma imagem na página. Nós precisamos dizer ao HTML onde a imagem está. A imagem está dentro da pasta _imagens_, no mesmo diretório do `index.html`. Para trilhar o caminho de `index.html` para nossa imagem, o caminho é `imagens/nome-da-sua-imagem`. Por exemplo, nossa imagem é chamada `firefox-icon.png`, então, nosso caminho é `imagens/firefox-icon.png`.
4. Insira o caminho dentro do seu código HTML, dentro das aspas do código `src=""`.
5. Salve seu arquivo HTML, então carregue em seu navegador web (dê um duplo-clique no arquivo). Você deve ver sua nova página mostrando sua imagem!

![A screenshot of our basic website showing just the firefox logo - a flaming fox wrapping the world](website-screenshot.png)

Algumas regras gerais para caminhos de arquivo:

- Para linkar para um arquivo no mesmo diretório do arquivo HTML, apenas use o nome do arquivo, ex.: `my-image.jpg`.
- Para linkar um arquivo em um sub-diretório, escreva o nome do diretório na frente, mais uma barra, ex.: `subdirectory/my-image.jpg`.
- Para linkar um arquivo **acima** do arquivo HTML, use dois pontos. Então, por exemplo, se `index.html` estiver dentro de uma subpasta de `site-teste` e `my-image.png` estiver dentro de `site-teste`, você pode fazer referência a `my-image.png` em `index.html` usando `../my-image.png`.
- Você pode combinar isso como preferir, por exemplo `../subdiretorio/outro-subdiretorio/my-image.png`.

Por agora, isso é tudo o que precisamos saber.

> **Nota:** O sistema de arquivos do Windows tende a usar barras invertidas, não barras normais , ex.: `C:\windows`. Isso não importa — mesmo se você estiver desenvolvendo seu site no Windows, você ainda deve usar barras normais no seu código.

## O que mais deve ser feito?

Por agora, é isso. Sua pasta deve parecer algo do tipo:

![A file structure in mac os x finder, showing an images folder with an image in, empty scripts and styles folders, and an index.html file](file-structure.png){{PreviousMenuNext("Learn/Getting_started_with_the_web/What_will_your_website_look_like", "Learn/Getting_started_with_the_web/HTML_basics", "Learn/Getting_started_with_the_web")}}
