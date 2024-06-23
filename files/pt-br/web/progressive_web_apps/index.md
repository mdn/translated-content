---
title: Progressive Web Apps
short-title: Progressive Web Apps
slug: Web/Progressive_web_apps
l10n:
  sourceCommit: 835d6632d59993861a0458510402787f8a2c3cb3
---

{{PWASidebar}}

Uma _**Progressive Web App**_ (PWA, "Aplicação _Web_ Progressiva") é uma aplicação criada com tecnologias _web_, mas que oferece uma experiência de usuário como a de uma específica de plataforma.

Assim como um _site_, uma PWA pode ser executada em várias plataformas e dispositivos a partir de uma única base de código. Da mesma forma que uma aplicação específica de plataforma, pode ser instalada no dispositivo, integrando-se a ele e a outras aplicações instaladas, além de operar _offline_ e em segundo plano.

## Guias

Estes guias fornecem explicações conceituais de diferentes aspectos das PWAs. Eles têm o objetivo de te ajudar a entender que tipos de coisas são possíveis com as elas e te fornecer orientações o suficiente para te mostrar como alcançá-las.

- [O que é uma _progressive web app_?](/pt-BR/docs/Web/Progressive_web_apps/Guides/What_is_a_progressive_web_app)
  - : Uma introdução às PWAs, comparando-as com _sites_ tradicionais e aplicações específicas de plataforma e descrevendo seus principais recursos.
- [Tornando PWAs instaláveis](/pt-BR/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable)
  - : Um dos aspectos que definem uma PWA é que ela pode ser instalada no dispositivo e em seguida aparecer para os usuários como uma aplicação específica da plataforma, um recurso permanente do dispositivo que pode ser iniciado diretamente do sistema operacional, como qualquer outro aplicativo. Neste guia, exploraremos o significado de "instalável", o que uma PWA precisa fornecer para ser instalável e como você pode personalizar a experiência de instalação.
- [Instalação e desinstalação de aplicações web](/pt-BR/docs/Web/Progressive_web_apps/Guides/Installing)
  - : Este guia aborda como os usuários podem instalar e desinstalar PWAs em seus dispositivos.
- [Operando offline e em segundo plano](/pt-BR/docs/Web/Progressive_web_apps/Guides/Offline_and_background_operation)
  - : Neste guia, apresentaremos um conjunto de tecnologias que permite que uma PWA forneça uma boa experiência ao usuário mesmo quando o dispositivo tem uma conexão com a internet intermitente e realize operações em segundo plano, mesmo quando a aplicação principal não estiver em execução.
- [Armazenando em _cache_](/pt-BR/docs/Web/Progressive_web_apps/Guides/Caching)
  - : Uma visão geral das APIs que permitem que uma PWA armazene recursos em _cache_ localmente e algumas estratégias comuns usadas por PWAs para implementar funcionalidades _offline_.
- [Melhores práticas para PWAs](/pt-BR/docs/Web/Progressive_web_apps/Guides/Best_practices)
  - : As PWAs devem se adaptar a diferentes navegadores e dispositivos, ser acessíveis, ter bom desempenho e se integrar bem ao sistema operacional. Este guia fornece uma lista de melhores práticas para te ajudar a garantir que sua PWA seja tão boa quanto for possível.

## Como fazer

Estes guias fornecem instruções práticas e detalhadas sobre como implementar recursos específicos de PWA.

- [Crie uma aplicação independente](/pt-BR/docs/Web/Progressive_web_apps/How_to/Create_a_standalone_app)
  - : Descreve como especificar que uma PWA deve ser aberta em sua própria janela dedicada quando for iniciada, em vez de em uma aba do navegador.
- [Defina os ícones da sua aplicação](/pt-BR/docs/Web/Progressive_web_apps/How_to/Define_app_icons)
  - : Descreve como definir que seu próprio conjunto de ícones deve ser usado quando a PWA estiver instalada em um dispositivo.
- [Personalize as cores da sua aplicação](/pt-BR/docs/Web/Progressive_web_apps/How_to/Customize_your_app_colors)
  - : Descreve como definir cores de fundo e de tema para uma PWA.
- [Exiba _badges_ (ícone de notificação)](/pt-BR/docs/Web/Progressive_web_apps/How_to/Display_badge_on_app_icon)
  - : Descreve como exibir um _badge_ (ícone de notificação) no ícone da PWA, por exemplo, para informar o usuário que há novas mensagens.
- [Exiba ações comuns da aplicação em atalhos](/pt-BR/docs/Web/Progressive_web_apps/How_to/Expose_common_actions_as_shortcuts)
  - : Descreve como exibir ações comuns para uma PWA que pode ser iniciada a partir do menu de atalhos de aplicativos do sistema operacional.
- [Compartilhe dados entre aplicações](/pt-BR/docs/Web/Progressive_web_apps/How_to/Share_data_between_apps)
  - : Descreve como as PWAs podem compartilhar dados entre si usando o mecanismo de compartilhamento das aplicações do sistema operacional.
- [Acionar a instalação a partir da sua PWA](/pt-BR/docs/Web/Progressive_web_apps/How_to/Trigger_install_prompt)
  - : Descreve como desenvolvedores podem fornecer sua própria interface para convidar os usuários a instalar sua PWA.
- [Associe arquivos à sua PWA](/pt-BR/docs/Web/Progressive_web_apps/How_to/Associate_files_with_your_PWA)
  - : Descreve como você pode criar uma associação entre tipos de arquivo e sua PWA, de modo que, quando o usuário clicar no arquivo, sua PWA seja iniciada para abri-lo.

## Tutoriais

Nestes tutoriais, você criará uma PWA do zero. Os tutoriais percorrem as etapas de criação de uma aplicação, do início ao fim, explicando como os diferentes recursos dela são implementados.

- [Criando sua primeira PWA](/pt-BR/docs/Web/Progressive_web_apps/Tutorials/CycleTracker)
  - : Este tutorial para iniciantes apresenta a criação de uma PWA para o monitoramento de ciclos menstruais. As lições incluem um passo-a-passo dos HTML, CSS e JavaScript necessários para se criar um _site_ totalmente funcional, com a configuração de um ambiente de testes e explicações completas que vão te orientar na transformação dele em uma PWA, incluindo o desenvolvimento e a revisão de um manifesto, a adição de um _service worker_ e o uso desse para se excluir _caches_ antigos.
- [Mergulhe fundo nas PWAs](/pt-BR/docs/Web/Progressive_web_apps/Tutorials/js13kGames)
  - : Este tutorial de nível intermediário aborda a criação de uma PWA que lista informações sobre jogos submetidos para a categoria A-_Frame_ na competição [js13kGames 2017](https://2017.js13kgames.com/). Este tutorial inclui todos os conceitos básicos para a criação de uma PWA com recursos adicionais, abrangendo notificações - inclusive as do tipo _push_ - e técnicas de melhoria de desempenho desempenho de aplicação.

## Referências

Documentação de referência para as tecnologias _web_ que você vai usar para criar uma PWA.

### Web app manifest

- [Web app manifest](/pt-BR/docs/Web/Manifest)
  - : Desenvolvedores podem usar os "membros" do _web app manifest_ ["manifesto da aplicação web", tradução própria] para descrever uma PWA, personalizar sua aparência e integrá-la mais profundamente ao sistema operacional.

### APIs de _Service Worker_

#### Comunicação com a aplicação

As APIs a seguir podem ser usadas por um _service worker_ para se comunicar com sua PWA cliente associada:

- [`Client.postMessage()`](/pt-BR/docs/Web/API/Client/postMessage)
  - : Permite que um _service worker_ envie uma mensagem para sua PWA cliente.
- [Broadcast Channel API](/pt-BR/docs/Web/API/Broadcast_Channel_API)
  - : Permite que um _service worker_ e sua PWA cliente estabeleçam um canal de comunicação bidirecional básico.

#### Operação offline

As seguintes APIs podem ser usadas por um _service worker_ para fazer sua aplicação funcionar _offline_:

- [`Cache`](/pt-BR/docs/Web/API/Cache)
  - : Um mecanismo de armazenamento em _cache_ para respostas HTTP usado para manter _assets_ que podem ser reutilizados quando a aplicação está _offline_.
- [`Clients`](/pt-BR/docs/Web/API/Clients)
  - : Uma interface usada para fornecer acesso aos documentos que são controlados pelo _service worker_.
- [`FetchEvent`](/pt-BR/docs/Web/API/FetchEvent)
  - : Um evento enviado no _service worker_ com cada requisição HTTP feita pela PWA cliente. O evento pode ser usado para se enviar a requisição ao servidor normalmente e salvar-se a resposta para uso futuro, ou para se interceptá-la e respondê-la imediatamente com uma resposta armazenada em _cache_ anteriormente.

#### Operação em segundo plano

As APIs a seguir podem ser usadas por um _service worker_ para se executar tarefas em segundo plano, mesmo quando a aplicação não estiver em execução:

- [API Background Synchronization](/pt-BR/docs/Web/API/Background_Synchronization_API)
  - : Uma forma de se adiar a execução de tarefas em um _service worker_ para que ocorram somente quando houver uma conexão com a internet estável.
- [API Web Periodic Background Synchronization](/pt-BR/docs/Web/API/Web_Periodic_Background_Synchronization_API)
  - : Uma maneira de registrar-se tarefas a serem executadas em um _service worker_ em intervalos periódicos com conexão de rede.
- [API Background Fetch](/pt-BR/docs/Web/API/Background_Fetch_API)
  - : Um método para um _service worker_ gerenciar downloads que podem levar um tempo significativo, como arquivos de vídeo ou áudio.

### Outras APIs _web_

- [IndexedDB](/pt-BR/docs/Web/API/IndexedDB_API)
  - : Uma API de armazenamento no lado do cliente para quantidades significativas de dados estruturados, incluindo arquivos.
- [API Badging](/pt-BR/docs/Web/API/Badging_API)
  - : Um método para se colocar um _badge_ (ícone de notificação) no ícone da aplicação, fornecendo-se uma notificação de pouca distração.
- [API Notifications](/pt-BR/docs/Web/API/Notifications_API)
  - : Uma maneira de se enviar notificações que são exibidas a nível de sistema operacional.
- [API Web Share](/pt-BR/docs/Web/API/Web_Share_API)
  - : Um mecanismo para compartilhamento de texto, _links_, arquivos e outros conteúdos com outras aplicações selecionadas pelo usuário em seu dispositivo.
- [API Window Controls Overlay](/pt-BR/docs/Web/API/Window_Controls_Overlay_API)
  - : Uma API para PWAs instaladas em sistemas operacionais de _desktop_ que permite ocultar-se a barra de título da janela padrão, possibilitando que a aplicação fique em tela cheia, porém exibindo-se os botões de sistema (minimizar, maximizar, fechar) e os específicos do navegador.

## Veja também

- [Progressive Web Apps](https://web.dev/explore/progressive-web-apps?hl=pt-br) em web.dev
- [Aprenda sobre PWA<sup>(inglês)</sup>](https://web.dev/learn/pwa/) em web.dev
- [Progressive Web Apps](https://learn.microsoft.com/pt-br/microsoft-edge/progressive-web-apps-chromium/) em learn.microsoft.com (2023)
