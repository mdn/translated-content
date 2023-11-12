---
title: Como adicionar imagens e mídia
slug: MDN/Writing_guidelines/Howto/Images_media
---

{{MDNSidebar}}

## Adicionando imagens

Para adicionar uma imagem a um documento, adicione seu arquivo de imagem à pasta do documento e, em seguida, faça referência à imagem no arquivo `index.md` do documento usando um elemento `<img>` ou [a sintaxe Markdown equivalente](https://github.github.com/gfm/#images).

Vamos percorrer um exemplo:

1. Comece com um novo branch de trabalho com o conteúdo mais recente do branch `main` do remoto `mdn`.

   ```sh
   cd ~/caminho/para/mdn/conteúdo
   git checkout principal
   git pull mdn principal
   # Execute "yarn" novamente apenas para garantir que você
   # instalou a última dependência do Yari.
   yarn
   git checkout -b minhas-imagens
   ```

2. Adicione sua imagem à pasta de documentos. Para este exemplo, vamos supor
   estamos adicionando uma nova imagem ao documento `files/en-us/web/css`.

   ```sh
   cd ~/caminho/para/mdn/content
   cp ../some/path/my-cool-image.png files/en-us/web/css/
   ```

3. Execute `filecheck` em cada imagem, que pode reclamar se algo estiver errado.
   Para obter mais detalhes, consulte a seção [Compactando imagens](#compressing-images).

   ```sh
   yarn filecheck files/en-us/web/css/my-cool-image.png
   ```

4. Faça referência à sua imagem no documento com um elemento `<img>` e um atributo `alt` dentro de `files/en-us/web/css/index.md`:

   ```html
   <img src="my-cool-image.png" alt="Minha imagem legal" />
   ```

5. Adicione e confirme todos os arquivos excluídos, criados e modificados, bem como
   empurre sua ramificação para sua bifurcação:

   ```sh
   git add files/en-us/web/css/my-cool-image.png files/en-us/web/css/index.html
   git commit
   git push -u origin my-images
   ```

6. Agora você está pronto para criar seu
   [solicitação pull](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-solicitar).

## Adicionando texto alternativo às imagens

Cada imagem, `![]` e `<img>`, deve incluir o texto `alt`. Forneça um texto curto e conciso, fornecendo todas as informações relevantes que a imagem transmite. Este texto é lido por aqueles que não conseguem ver a imagem.

O conteúdo do texto `alt` difere com base no contexto. Por exemplo, se a foto de um cachorro é o avatar de uma avaliação de comida de cachorro Yuckymeat, `alt="Fluffy"` é apropriado. Se a foto for a imagem do cachorro em um site de adoção de resgate de animais, o `alt="Fluffy, um terrier tricolor de tamanho médio com cabelo muito curto, brincando com um brinquedo para mastigar."` é apropriado, pois a imagem transmite informações relevantes para possíveis pais de cães, que não é duplicado no texto ao redor. Raramente há necessidade de descrever a própria imagem; Fofo estar ao ar livre com uma coleira vermelha e uma coleira azul não adiciona informações úteis em nenhum dos contextos.

O texto alternativo deve incluir todas as informações que a imagem transmite que um usuário com visão pode acessar e é relevante para o contexto; nada mais. Mantenha-o curto, preciso e útil.

A sintaxe em markdown e HTML:

```md-nolint
![<alt-text>](<url-of-image>)
```

```html
<img alt="<alt-text>" src="<url-of-image>" />
```

Exemplos:

```html
![Logotipo OpenWebDocs: Carle, o verme dos livros](carle.png)
<img alt="OpenWebDocs Logo: Carle, o verme dos livros" src="carle.png" />
```

Embora as imagens puramente decorativas devam ter um `alt` vazio, as imagens adicionadas à documentação MDN devem ter um propósito e, portanto, exigir uma descrição de string não vazia.

## Comprimindo imagens

Ao adicionar imagens a uma página no MDN Web Docs, certifique-se de que elas sejam compactadas o máximo possível (sem degradar a qualidade) para economizar no tamanho do download para nossos leitores.
Na verdade, se você não fizer isso, nosso processo de CI falhará e os resultados da compilação avisarão que algumas de suas imagens são muito grandes.

A melhor maneira de compactar as imagens é usando a ferramenta de compactação integrada.
Você pode compactar uma imagem apropriadamente usando o comando `filecheck` com a opção `--save-compression`.
Esta opção comprime a imagem o máximo possível e substitui o original pela versão comprimida.
Por exemplo:

```sh
yarn filecheck files/en-us/web/css/my-cool-image.png --save-compression
```

## Adicionando vídeos

O MDN Web Docs não é um site com muitos vídeos, mas há certos lugares onde o conteúdo de vídeo faz sentido para ser usado como parte de um artigo.
Este artigo discute quando incluir vídeos em artigos é apropriado e fornece dicas sobre como criar vídeos simples, mas eficazes, dentro do orçamento.

Existem vários argumentos contra o uso de conteúdo de vídeo para documentação técnica, especialmente para material de referência e guias de nível avançado. Alguns deles estão listados abaixo:

- O vídeo é linear.
  As pessoas não tendem a ler a documentação on-line de maneira linear, começando no início e lendo até o fim.
  _Eles digitalizam._
  O vídeo é realmente difícil de escanear - ele força o usuário a consumir o conteúdo do começo ao fim.
- O vídeo é menos denso em informações do que o texto.
  Leva mais tempo para consumir um vídeo explicando algo do que para leras instruções equivalentes.
- O vídeo é grande em termos de tamanho de arquivo e, portanto, mais caro e com menos desempenho do que o texto.
- O vídeo tem problemas de acessibilidade: geralmente é mais caro produzir do que texto, mas especialmente para localizar ou tornar utilizável por usuários de leitores de tela.
- Seguindo do último ponto, o vídeo é muito mais difícil de editar/atualizar/manter do que o conteúdo de texto.

> **Nota:** Vale a pena ter esses problemas em mente mesmo quando estiver fazendo vídeos, para tentar amenizar alguns deles.

Existem muitos sites de vídeo populares que fornecem muitos tutoriais em vídeo.
O MDN Web Docs não é um site baseado em vídeo, mas o vídeo tem um lugar no MDN Web Docs em determinados contextos.

Costumamos usar o vídeo ao descrever algum tipo de sequência de instruções ou fluxo de trabalho de várias etapas que seria difícil de descrever de forma concisa em palavras: _"faça isso, depois faça aquilo, então isso acontecerá"_.
É especialmente útil ao tentar descrever processos que cruzam vários aplicativos ou janelas e que incluem interações GUI que podem não ser simples de descrever: _"agora clique no botão próximo ao canto superior esquerdo que se parece um pouco com um pato"_ .

Nesses casos, geralmente é mais eficaz apenas **mostrar** o que você quer dizer.

<!-- Geralmente usamos vídeos para explicar os recursos do [Firefox DevTools](https://firefox-source-docs.mozilla.org/devtools-user/index.html).-->

## Diretrizes para conteúdo de vídeo

O conteúdo de vídeo para MDN Web Docs deve ser:

- **Curto**: tente manter os vídeos com menos de 30 segundos, idealmente com menos de 20 segundos.
  Isso é curto o suficiente para não exigir muito da atenção dos leitores.
- **Simples**: tente simplificar o fluxo de trabalho, 2 a 4 peças distintas.
  Isso os torna mais fáceis de seguir.
- **Silencioso**: o áudio torna os vídeos muito mais envolventes, mas consome muito mais tempo para fazer.
  Além disso, ter que explicar o que você está fazendo torna os vídeos muito mais longos e aumenta os custos (tanto financeiros quanto de tempo) da localização.

Para explicar algo mais complexo, você pode usar uma mistura de vídeos curtos e capturas de tela, intercaladas com texto.
O texto pode ajudar a reforçar os pontos apresentados no vídeo, e o usuário pode confiar no texto ou no vídeo como preferir.
Veja [Trabalhando com o Animation Inspector](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/work_with_animations/index.html#animation-inspector) para um bom exemplo.

Além disso, você deve considerar as seguintes dicas:

- O vídeo acabará sendo carregado no YouTube antes de ser incorporado.
  Recomendamos uma proporção de 16:9 para esse uso, de modo que preencha todo o quadro de visualização e você não acabe com barras pretas feias na parte superior e inferior (ou esquerda e direita) do seu vídeo.
  Por exemplo, você pode escolher uma resolução de 1024×576, 1152×648 ou 1280×720.
- Grave o vídeo em HD, para que fique melhor quando carregado.
- Para vídeos DevTools, geralmente é uma boa ideia escolher um tema contrastante com o conteúdo da página. Por exemplo, escolha o tema escuro se a página da Web de exemplo tiver um tema claro. É mais fácil ver o que está acontecendo e onde o DevTools começa e a página termina.
- Para vídeos do DevTools, amplie o DevTools o máximo que puder enquanto ainda mostra tudo o que deseja mostrar e faz com que pareça OK.
- Certifique-se de que o que você está tentando demonstrar não está coberto pelo cursor do mouse.
- Considere se seria ou não útil configurar a ferramenta de gravação de tela para adicionar um indicador visual de cliques do mouse.

## Diretrizes para ferramentas de vídeo

Você precisará de uma ferramenta para gravar o vídeo.
Estes variam de gratuitos a caros e simples a complexos.
Se você já tem experiência na criação de conteúdo de vídeo, ótimo.
Caso contrário, recomendamos que você comece com uma ferramenta simples e depois trabalhe em algo mais complexo se começar a gostar de criar conteúdo de vídeo e quiser criar produções mais interessantes.

A tabela a seguir fornece algumas recomendações para boas ferramentas iniciais:

| Ferramenta                | SO                    | Custo  | Recursos de pós-produção disponíveis? |
| ------------------------- | --------------------- | ------ | ------------------------------------- |
| Open Broadcaster Software | macOS, Windows, Linux | Grátis | Sim                                   |
| CamStudio                 | Janelas               | Grátis | Limitada                              |
| Camtasia                  | Windows, macOS        | alta   | Sim                                   |
| QuickTime                 | mac OS                | Grátis | Não, apenas permite gravação simples  |
| Screenflow                | mac OS                | Médio  | Sim                                   |
| Kazam                     | Linux                 | Grátis | Mínimo                                |

### Dicas do QuickTime

Se você estiver usando o macOS, deverá ter o QuickTime disponível.
As etapas de gravação usando esta ferramenta são bem simples:

1. Escolha _Arquivo_ > _Nova Gravação de Tela_ no menu principal.
2. Na _Gravação de tela_ caixa, aperte o botão de gravação (o botão redondo vermelho).
3. Arraste um retângulo ao redor da área da tela que deseja gravar.
4. Pressione o botão _Iniciar gravação_.
5. Execute as ações que deseja gravar.
6. Pressione o botão _Parar_.
7. Escolha _Arquivo_ > _Exportar como..._ > _1080p_ no menu principal para salvar como alta definição.

### Outros recursos

- [Como adicionar frases de destaque personalizadas a vídeos de screencast no Screenflow](https://photography.tutsplus.com/tutorials/how-to-add-custom-callouts-to-screencast-videos-in-screenflow--cms-27122)

## Fluxo de trabalho para criação de vídeos

As subseções a seguir descrevem as etapas gerais que você deseja seguir para criar um vídeo e adicioná-lo a um artigo do MDN Web Docs.

### Preparando

Primeiro, planeje o fluxo que deseja capturar: considere os melhores pontos para começar e terminar.

Verifique se o plano de fundo da área de trabalho e o perfil do navegador estão limpos.
Planeje o tamanho e o posicionamento das janelas do navegador, especialmente se você usar várias janelas.

Planeje cuidadosamente o que você realmente vai gravar e pratique as etapas algumas vezes antes de gravá-las:

- Não inicie um vídeo no meio de um processo - considere se o espectador terá contexto suficiente para que suas ações façam sentido.
  Em um vídeo curto do DevTools, por exemplo, é uma boa ideia começar abrindo o DevTools para permitir que o visualizador se oriente.
- Considere quais são suas ações, desacelere e torne-as óbvias.
  Sempre que você tiver que executar uma ação (digamos, clicar em um ícone), vá devagar e torne isso óbvio. Assim, por exemplo:

  - Mova o mouse sobre o ícone.
  - Destaque ou zoom (nem sempre, dependendo se parece necessário).
  - Faça uma pausa.
  - Clique no ícone.

- Planeje os níveis de zoom para as partes da IU que você vai mostrar.
  Nem todos poderão visualizar seu vídeo em alta definição.
  Você poderá ampliar partes específicas na pós-produção, mas é uma boa ideia ampliar o aplicativo antes também.

> **Nota:** não amplie tanto que as IUs que você está mostrando comecem a parecer estranhas ou feias.

### Gravação

Ao gravar o fluxo de trabalho que deseja mostrar, percorra o fluxo de forma suave e constante.
Faça uma pausa de um ou dois segundos quando estiver em momentos-chave — por exemplo, quando estiver prestes a clicar em um botão.
Certifique-se de que o ponteiro do mouse não oculte nenhum ícone ou texto que seja importante para o que você está tentando demonstrar.

Lembre-se de fazer uma pausa de um ou dois segundos no final para mostrar o resultado do fluxo.

> **Nota:** Se você estiver usando uma ferramenta realmente simples como o QuickTime e a pós-produção não for uma opção por algum motivo, você deve configurar suas janelas no tamanho certo para mostrar a área que deseja mostrar. No Firefox DevTools, você pode usar a [Rulers Tool](https://firefox-source-docs.mozilla.org/devtools-user/rulers/index.html) para garantir que a viewport esteja na proporção correta para a gravação.

### Pós-processamento

Você será capaz de destacar momentos-chave na pós-produção.
Um destaque pode consistir em algumas coisas, que você costuma combinar, como:

- Aumente o zoom em partes da tela.
- Desvanecer o fundo.

Destaque os principais momentos do fluxo de trabalho, especialmente onde os detalhes são difíceis de ver: clicar em um ícone específico ou inserir uma URL específica, por exemplo.
Apontar para o destaque para durar 1-2 segundos.
É uma boa ideia adicionar uma transição curta (200-300 milissegundos) no início e no final dos realces.

Use alguma moderação aqui: não faça do vídeo uma procissão constante de zoom in e out, caso contrário, os espectadores ficarão enjoados.

Corte o vídeo na proporção desejada, se necessário.

### Enviando

Atualmente, os vídeos precisam ser carregados no YouTube para serem exibidos no MDN Web Docs, por exemplo, no canal [mozhacks](https://www.youtube.com/user/mozhacks/videos).
Peça a um membro da equipe MDN Web Docs para enviar o vídeo se você não tiver um local apropriado para colocá-lo.

> **Nota:** marque o vídeo como "não listado" se não fizer sentido fora do contexto da página (se for um vídeo curto, provavelmente não fará).

### Incorporação

Uma vez carregado, você pode incorporar o vídeo na página usando a macro [`EmbedYouTube`](https://github.com/mdn/yari/blob/main/kumascript/macros/EmbedYouTube.ejs).
Isso é usado inserindo o seguinte em sua página na posição em que deseja que o vídeo apareça:

```
\{{EmbedYouTube("you-tube-url-slug")}}
```

A única propriedade obtida pela chamada de macro é a sequência de caracteres no final do URL do vídeo, não o URL inteiro.
Por exemplo, se o URL do vídeo for `https://www.youtube.com/watch?v=ELS2OOUvxIw`, a chamada de macro necessária será:

```
\{{EmbedYouTube("ELS2OOUvxIw")}}
```
