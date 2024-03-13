---
title: Sobre o MDN
slug: MDN/Writing_guidelines
---

{{MDNSidebar}}

A Rede de Desenvolvedores da Mozilla (MDN) é uma plataforma de aprendizagem em evolução para tecnologias da Web e o software que alimenta a Web, incluindo:

- Padrões web como [CSS](/pt-BR/docs/CSS), [HTML](/pt-BR/docs/HTML), e [JavaScript](/pt-BR/docs/JavaScript)
- [Open Web app development](/pt-BR/docs/Apps)
- [Firefox add-on development](/pt-BR/docs/Add-ons)

## Nossa missão

A missão da MDN é simples: prover uma completa, exata e útil documentação para tudo sobre a open Web, sendo ele construído, suportado ou não pela Mozilla. Se é uma tecnologia aberta e Web, queremos documentá-lo.

Além disso, podemos fornecer a documentação sobre como [desenvolver e contribuir com os projetos da Mozilla](/pt-BR/docs/Mozilla), [Firefox OS](/pt-BR/Firefox_OS) e [desenvolvimento de Web app](/pt-BR/Apps).

Se você não tem certeza se um tópico específico deve ser abordado no MDN leia: [Isso pertence ao MDN?](/pt-BR/docs/Project:MDN/Contributing/Does_this_belong)

## Como você pode ajudar

Você não precisa ser capaz de programar - or escrever - para poder ajudar a MDN! Nós temos muitos caminhos por onde você pode ajudar, de uma revisão de artigos para ter certeza que fazem sentido, até contribuindo com texto, adicionando códigos de exemplo. Na verdade existem tantas formas de ajudar que nós temos uma [ferramenta para ajudá-lo a escolher tarefas para ajudar](/pt-BR/docs/MDN/Quick_start), baseada em seus interesses e na sua quantidade de tempo livre.

## A comunidade MDN

Nossa comunidade é global! Nós temos contribuidores incríveis ao redor do mundo todo, em muitos idiomas. Se você gostaria de descobrir mais sobre nós, ou se precisa de qualquer tipo de ajuda com a MDN, fique livre para checar nosso fórum de discussões ou canal IRC!

## Licenças e cópias de direito

Os documentos wiki da MDN foram preparados com as contribuições de muitos autores, de dentro e de fora da Mozilla Foundation. A menos que seja indicado, o conteúdo está disponível sob os termos da [Creative Commons Attribution-ShareAlike license](http://creativecommons.org/licenses/by-sa/2.5/) (CC-BY-SA), v2.5 ou qualquer versão mais recente. Por favor, atribua "Mozilla Contributors" e inclua um hyperlink (online) ou URL (impresso) para a página da wiki específica do conteúdo referenciado. Por exemplo, para atribuir a este artigo, você pode escrever:

> [About MDN](/pt-BR/docs/MDN/About) por [Mozilla Contributors](/pt-BR/docs/MDN/About$history) está licenciado sob [CC-BY-SA 2.5](http://creativecommons.org/licenses/by-sa/2.5/).

Note que nesse exemplo, "Mozilla Contributors" leva para a história da página citada. Veja [Best practices for attribution](http://wiki.creativecommons.org/Marking/Users) para explicações mais detalhadas.

> **Nota:** Veja [MDN content on WebPlatform.org](/pt-BR/docs/MDN_content_on_WebPlatform.org) para informações sobre como reutilizar e atribuir conteúdo da MDN naquele site.

Amostras de código adicionadas a esta wiki antes de 20 de agosto de 2010 estão disponíveis sob a [MIT license](http://www.opensource.org/licenses/mit-license.php); você deveria inserir a seguinte informação de atribuição no template MIT: "© \<data da última revisão da página da wiki> \<nome da pessoa que a inseriu na wiki>".

Amostras de código adicionadas no dia 20 de agosto de 2010 ou depois estão no [public domain](http://creativecommons.org/publicdomain/zero/1.0/). Não é necessário um aviso de licença, mas se você precisa de um, você pode utilizar: "Qualquer direito de cópia é dedicado ao Domínio Público. <http://creativecommons.org/publicdomain/zero/1.0/>".

Se você deseja contribuir para esta wiki, você deve tornar sua documentação disponível pela licença Attribution-ShareAlike (ou ocasionalmente uma licença alternativa já especificada pela página que você está editando), e suas amostras de código disponívels sob a [Creative Commons CC-0](http://creativecommons.org/publicdomain/zero/1.0/) (uma dedicação de Domínio Público). Acrescentar a esta wiki significa que você concorda que suas contribuições serão feitas sob estas licenças.

Alguns conteúdos mais antigos foram disponibilizados sob uma licença diferente das citadas acima; estas são indicadas no final de cada página em um [Alternate License Block](/Project:en/Examples/Alternate_License_Block).

> **Aviso:** **Importante:** Nenhuma nova página deve ser criada usando licenças alternativas.

Os direitos de cópia para materiais de contribuição permanecem com o(a) autor(a), a menos que ele(a) os atribua a outra pessoa.

Se você tem perguntas ou dúvidas sobre algo exposto aqui, por favor contate [Eric Shepherd](mailto:eshepherd@mozilla.com).

---

Os direitos das marcas, logos, marcas de serviço da Mozilla Foundation, bem como o visual e estrutura deste site, não estão licenciados pela Creative Commons, e enquanto são trabalhos autorais (como logos e design gráfico), eles não estão inclusos no trabalho que está licenciado nesses termos. Se você utilizar o texto de documentos, e quiser também usar qualquer um destes direitos, ou se tem outras perguntas sobre cumprir com nossos termos de licença para esta coleção, você deve contatar a Mozilla Foundation aqui: <licensing@mozilla.org>.

## Baixar conteúdo

Você pode baixar o conteúdo de uma página individual na MDN adicionando [document parameters](/pt-BR/docs/Project:MDN/Kuma/API#Document_parameters) à URL para especificar qual formato deseja.

Se você quiser baixar um dump SQL completo e anonimizado da base de dados da MDN — isto é, uma cópia da base de dados com todas as informações privadas de usuários removidas, nós também fornecemos isso. Esse dump é atualizado no primeiro dia de todo mês.

Existem três arquivos que compreendem o dump mensal anonimizado da MDN:

- `<date>.sanitized.devmo_sanitize.sql.gz`
  - : O dump de banco de dados MySQL sanitizado de todo o conteúdo da MDN, registros de datas, e assim por diante. Inclui todo o conteúdo de artigos, registros de histórico, e assim por diante. Todas as informações pessoais de usuários são retiradas (como endereços de email).
- `attachments-<date>.tar.gz`
  - : Esse arquivo contém todos os uploads de arquivos anexos feitos para a wiki.
- `uploads-<date>.tar.gz`
  - : Esse arquivo (muito grande!) contém os uploads de arquivos para o Demo Studio. Se você tem interesse apenas no conteúdo da wiki, você não precisa baixar isso.

[Visite o aterro da MDN](https://developer.allizom.org/landfill/) para baixar esses arquivos.

### Ferramentas de terceiros

Você também pode visualizar o conteúdo da MDN via ferramentas de terceiros como o [Dash](http://kapeli.com/dash) (para Mac OS) e [Zeal](http://zealdocs.org/) (para Linux e Windows).

## Informando problemas com a MDN

De vez em quando, você pode encontrar problemas usando a MDN. Seja um problema com a infraestrutura do site ou um erro no conteúdo da documentação, você pode tentar consertar sozinho ou reportar o problema. Enquanto a primeira opção é preferida, a última é às vezes o melhor que você consegue fazer, e tudo bem com isso também.

### Erros na documentação

Obviamente, já que a MDN é uma wiki, a melhor coisa que você pode fazer é consertar problemas que você encontrar sozinho. Mas talvez você não saiba a resposta, ou esteja no meio de uma correria para o hospital ou algo assim, e precise anotar o problema pra que alguém possa olhar depois.

Como tudo o que é Mozilla, você pode reportar um problema na documentação registrando um bug. É aí que entra o registro de um [documentation request bug](https://bugzilla.mozilla.org/form.doc). Nosso útil formulário de solicitação de documentação reunirá as informações necessárias para que possamos começar a consertar o problema.

Naturalmente, nossa comunidade de escrita é atarefada, então às vezes a forma mais rápida de ver um problema de documentação resolvido é consertá-lo você mesmo. Veja [Criando e editando páginas](/pt-BR/docs/MDN/Contribute/Creating_and_editing_pages) para detalhes.

### Bugs do site ou solicitar recursos

[Kuma](/pt-BR/docs/Project:MDN/Kuma), a plataforma desenvolvida pela Mozilla usada para o web site da MDN, está em um constante estado de desenvolvimento. Nossos desenvolvedores—assim como vários contribuidores voluntários—estão constantemente fazendo melhorias. Se você encontrar um bug, ou tiver um problema com o site, ou ainda tiver uma sugestão para algo que poderia tornar o software mais incrível, você pode usar o [Kuma bug form](https://bugzilla.mozilla.org/form.mdn) para preencher um relatório.

## História da MDN

O projeto Mozilla Developer Network (a.k.a. Mozilla Developer Center (MDC), a.k.a. _Devmo_) começou no início de 2005, quando a [Mozilla Foundation](http://www.mozillafoundation.org) obteve uma licença da AOL para utilizar o conteúdo original [DevEdge](/Project:en/DevEdge). Os materiais ainda úteis foram extraídos do conteúdo DevEdge, e então migrados por voluntários para essa wiki, pra que a manutenção e atualização fossem mais fáceis.

Desde então, o projeto continuou a crescer e agora forma um nexo central para toda a documentação para desenvolvedores relacionada ao Mozilla Project e tecnologias abertas da web. Em 2010, o nome mudou para Mozilla Developer Network; 2011 viu a adição do [Demo Studio](http://developer.mozilla.org/pt-BR/demos) para desenvolvedores web compartilharem e exibirem seu código, e páginas [Learning](http://developer.mozilla.org/pt-BR/learn) para fornecer links de tutoriais. (O nome MDC ainda vive como "MDN Doc Center" para a seção de documentação.) A tempo, espera-se que a Mozilla Developer Network se torne um recurso que web designers, desenvolvedores de aplicações, e escritores de extensões e temas visitam regularmente.

## Sobre a Mozilla

Se você quer saber mais sobre quem somos, como fazer parte da Mozilla ou apenas onde nos encontrar, você veio ao lugar certo. Para descobrir o que nos impulsiona e nos torna diferentes, visite nossa página de [missão](http://www.mozilla.org/pt-BR/mission/).
