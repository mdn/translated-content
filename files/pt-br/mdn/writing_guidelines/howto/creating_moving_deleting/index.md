---
title: Criando e editando páginas
slug: MDN/Writing_guidelines/Howto/Creating_moving_deleting
---

{{MDNSidebar}}

As duas tarefas mais básicas sobre MDN que quase todo contribuinte MDN irá eventualmente executar são para editar uma página já existente ou criar uma nova. Este artigo aborda os conceitos básicos de como fazer cada uma delas.

## Editando uma página existente

É fácil editar:

- Clique no botão editar próximo ao topo na direita no canto da página.
- A página recarregará com opções de formatação, assim, você pode adicionar ou deletar informação diretamente na página.
- Você pode adicionar parágrafos, deletar texto, inserir cabeçalhos, e mais das tarefas básicas que envolvem edição de textos.

### Ver mudanças

Para ver como suas mudanças ficaram:

- Clique no botão "Visualizar mudanças" (dentro da função de editar) acima do título da página.
- Isso abre uma páǵina de pré-visualização que inclui sua revisão em uma nova janela ou aba.
- Cada vez que você clica nesse botão, ele recarrega sua página de pré-visualização com as últimas mudanças feitas.

Tenha cuidado! Pré-visualizar uma página _não salva_ as alterações, sendo assim, se lembre de não fechar a página que você está editando sem salvar o conteúdo.

### Revisão de comentário

Depois que você pré-visualizou suas mudanças, você deve querer salvar sua revisão. Antes de salvar, procure pela caixa de comentários de revisão abaixo da sessão de título da página e deixe um comentário para informar a outros voluntários o que você mudou e o motivo. Por exemplo, você pode ter adicionado uma nova sessão, mudado algumas palavras para fazer a terminologia mais consistente, reescrito um parágrafo para esclarecer o idioma, ou removido informação porque é redundante.

### Tags

Você pode adicionar ou remover tags que descrevam o conteúdo da página. Veja [como adicionar tags às páginas corretamente](/pt-BR/docs/MDN/Contribute/guia/Como-marcar-as-paginas-corretamente) para mais informações em que as tags se aplicam.

### Precisa de revisão?

Se você quiser que um contribuidor experiente revise suas edições, você pode requisitar uma revisão técnica (para códigos, APIs, ou tecnologias), uma revisão editorial (textual, de gramática ou conteúdo), ou uma revisão de template (para código KumaScript) se certificando que a caixa está marcada, antes que você salve.

### Anexar arquivos

Se você quiser anexar um arquivo a uma página para adicionar uma ilustração ou tornar o conteúdo mais claro, o anexo pode ir no final da página.

### Salve, descarte ou continue editando

Quando você termina uma edição com seu preview, você pode salvar seu trabalho e comentários clicando no botão verde "Salvar alterações" à direita do título da página. Se você mudar de ideia, pode descartar suas edições clicando no botão vermelho "Descartar alterações", também à direita do título da página.

Pressionar **Enter** no comentário da revisão é equivalente a clicar em "Salvar e continuar editando".

## Criando uma nova página

Se você não sabe onde colocar seu artigo, **não se preocupe sobre isso!** Coloque-o em qualquer local e nós vamos encontrá-lo e movê-lo para onde ele pertence, ou mesclá-lo em conteúdo existente se for mais apropriado. Você também não precisa se preocupar sobre deixar tudo perfeito. Nós temos gnomos ajudantes felizes que vão ajudá-lo deixar seu conteúdo lindo.

Há algumas maneiras de criar uma nova página:

- [Link para "página inexistente"](#link-para-pagina-inexistente)
- [Nova página sem link](#nova-pagina-sem-link)
- [Subpágina de uma página existente](#subpagina-de-uma-pagina-existente)
- [Clone de uma página existente](#clone-de-uma-pagina-existente)
- [Link para página existente](#link-para-uma-pagina-existente)

### Link para uma página inexistente

Como na maioria das wikis, na MDN é possível criar links para uma página que ainda não existe. Por exemplo, um autor pode criar uma lista de todos os membros de uma API, antes de criar as páginas para esses membros. Na MDN, links para página inexistentes geralmente são exibidos em vermelho.

Para criar um link para uma "página inexistente":

1. Certifique-se que você está logado na MDN. (Se você não estiver, vai receber um erro 404).
2. Clique no link "página inexistente". O [MDN Editor UI](/pt-BR/docs/MDN/Contribute/Editor) abrirá, pronto para você criar a página inexistente.
3. Escreva o conteúdo da página e salve-a.

### Nova página sem link

_Para criar uma nova página sem linkar de outra página_, informe o nome único de uma página na barra de endereços do seu navegador. Por exemplo, se você inserir:

```html
https://developer.mozilla.org/pt-BR/docs/FooBar
```

O MDN cria uma nova página com o título "FooBar" e abre o editor para você inserir o conteúdo nessa página. Veja a sessão "[Editando uma página existente](<#Editando uma págia existente>)" nesse artigo para ver como usar o editor.

### Subpágina de uma página existente

Para criar uma subpágina que você quer que seja filha de uma página existente:

1. Na página "pai", clique no menu **Avançado** (o ícone de engrenagem na barra de ferramentas) e clique em **Nova subpágina**.
2. Digite um título para o documento no campo **Título**.
3. Mude o **Slug** se necessário (por exemplo, se o título for muito longo e você quiser um título menor). Esse campo é gerado automaticamente pelo editor, substituindo underlines por espaços no título. Nesse caso, você pode mudar apenas a última parte da URL do documento.

### Clone de uma página existente

Se houver uma página existente cujo formato você quer usar numa página nova, você pode clonar essa página e mudar seu conteúdo

1. Na página original, clique no menu **Avançado** (o ícone de engrenagem na barra de ferramentas) e clique em **Clonar essa página**. O editor vai abrir para que você mude seu conteúdo.
2. Mude o **Título** da página conforme apropriado. O campo **Slug** é atualizado automaticamente quando você muda o campo **Título**.
3. Se necessário, mude o caminho do campo **Slug** para colocar o documento em uma parte diferente da hierarquia dele.
4. No campo **TOC**, selecione os níveis de cabeçalho que você quer que sejam automaticamente exibidos na tabela de conteúdo da página, ou "Sem tabela de conteúdos" se a página não precisar de uma.
5. Escreva o conteúdo da página e salve suas alterações. Veja a sessão "[Editando uma página existente](<#Editando uma págia existente>)" nesse artigo para ver como usar o editor.

### Link para uma página existente

Esse método é um pouco híbrido. Você pode criar um link em outra página, e clicar no link que você inseriu, para criar a nova página.

1. Digite o nome da página nova em qualquer lugar (que faça sentido) no texto de uma página existente.
2. Selecione o nome e clique no **ícone de link (![](/files/3810/link-icon.png))** na barra de ferramentas do editor. A caixa de diálogo para "**Atualizar Link"** vai abrir com o texto selecionado no campo "**Linkar para**".
3. "/pt-BR/docs/" é inserido por padrão no começo do campo URL. Insira o nome da página depois de "/pt-BR/docs/". (O nome da página não tem de ser o mesmo texto do link).
4. Clique em OK para criar e inserir o link.

Se a página já não existir, o link é mostrado em vermelho. Se a página já existir, o link é mostrado em azul. Se você quiser criar uma nova página mas o título da página que você quer já estiver sendo usado, verifique primeiro se não faz mais sentido ajudar a editar o conteúdo existente. Senão, pense num título diferente para sua nova página e crie um link para ela. Veja o [guia para nomear páginas](/pt-BR/docs/MDN/Contribute/Content/Style_guide).

Para adicionar conteúdo para sua nova página, clique no link vermelho que você acabou de criar (depois de salvar e fechar o editor). A nova página abre no modo de edição, assim você pode começar a editar o conteúdo. Veja a sessão "[Editando uma página existente](<#Editando uma págia existente>)" nesse artigo para ver como usar o editor.

## Atualizando o conteúdo da página

O suporte do MDN para macros KumaScript e transclusão de conteúdo de uma página para outra pode algumas vezes ser dificultada pela necessidade de fazer um cache das páginas geradas para melhorar a performance. Páginas são feitas do seu código-fonte, e a saída é cacheada para requisições futuras. A partir de lá, quaisquer macros (templates) ou transclusões (utilizando a macro Page) na página não vão refletir mudanças feitar para o macro, a saída do macro, ou o conteúdo do material transcluso.

- Para atualizar a página manualmente, você pode forçar uma atualização no seu browser. MDN detecta esse gatilho e a página é refeita, inserindo a atualização feita pela saída do macro e o conteúdo da página.
- Você também pode configurar páginas para serem refeitas periodicamente. Isso não deve ser feito a não ser que você precise que a página seja atualizada frequentemente. Veja [regeneração de página](/pt-BR/docs/MDN/Contribute/Tools/Page_regeneration) para detalhes.

## Veja também

- [Guia do editor do MDN](/pt-BR/docs/MDN/Contribute/Editor)
- [Guia de estilos do MDN](/pt-BR/docs/MDN/Contribute/Content/Style_guide)
