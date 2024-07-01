---
title: API do Service Worker
slug: Web/API/Service_Worker_API
---

{{DefaultAPISidebar("Service Workers API")}}

Essencialmente, um _service worker_ se comporta como um servidor _proxy_ situado entre uma aplicação web, o navegador e a rede (quando esta estiver disponível). Eles servem, dentre outras coisas, para possibilitar a criação de experiências _offline_ eficientes, interceptar requisições de rede – agindo adequadamente de acordo com o _status_ atual da conexão – e atualizar os _assets_ que residem no servidor. Service workers também permitem o acesso às APIs de _push notification_ e _background sync_.

## Service worker - Conceitos e uso

Um _service worker_ é um tipo especial de _[worker](/pt-BR/docs/Web/API/Worker)_ baseado em eventos, o qual é registrado para um determinado _path_ e origem. Na prática, ele é um arquivo JavaScript que pode controlar as páginas do site ao qual ele está associado, interceptando e modificando requisições e a navegação em si. Ele também faz _cache_ dos recursos trafegados de maneira bastante granular, visando oferecer controle total sobre como a sua aplicação se comporta em determinadas situações (o exemplo mais óbvio, naturalmente, é quando não há conexão de rede disponível).

Assim como outros tipos de _worker_, um _service worker_ é executado em um contexto isolado. Dessa forma, não tem acesso ao DOM e roda em uma thread completamente separada, sendo incapaz de realizar operações blocantes. Service workers foram projetados para ser totalmente assíncronos; como consequência disso, não permitem o acesso a APIs como [XHR síncrono](/pt-BR/docs/Web/API/XMLHttpRequest/Requisicoes_sincronas_e_assincronas#Synchronous_request) e [localStorage](/pt-BR/docs/Web/API/Window/Window.localStorage).

Por questões de segurança, _service workers_ funcionam apenas em sites servidos via HTTPS. A possibilidade de modificar requisições em um domínio desprotegido contra ataques do tipo [man-in-the-middle](/pt-BR/docs/Glossary/MitM) seria desastrosa. No Firefox, é vetado o acesso à API de _service workers_ para sites abertos no [Modo de navegação privativa](https://support.mozilla.org/pt-BR/kb/navegacao-privativa-use-firefox-sem-historico).

> **Nota:** Os service workers superaram tentativas anteriores de resolver problemas semelhantes, como o [AppCache](http://alistapart.com/article/application-cache-is-a-douchebag). Há uma explicação simples para eles terem sido bem-sucedidos: Service workers **não** tentam adivinhar o que você está tentando fazer e, muito menos, deixam de funcionar caso não tenham adivinhado corretamente. Pelo contrário, você tem o controle milimétrico de tudo.

> **Nota:** Service workers fazem uso intenso de [promessas](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Promise), uma vez que eles têm de esperar por respostas assíncronas para, após retornadas, poderem executar a ação apropriada (de sucesso ou erro). A arquitetura de promessas é ideal para esse tipo de cenário.

### Registrando

O registro inicial de um _service worker_ é feito através do método {{domxref("ServiceWorkerContainer.register()")}}. Se bem-sucedido, seu _service worker_ será descarregado no cliente e então ocorrerá a tentativa de instalação/ativação para as URLs acessadas pelo usuário sob a origem registrada ou, caso deseje, apenas dentro de um subconjunto limitado por você.

### Download, instalação e ativação

Nesse estágio, seu service worker seguirá o seguinte ciclo de vida:

1. Download
2. Instalação
3. Ativação

Quando o usuário acessa pela primeira vez um site ou página controlado por um service worker, ele é descarregado imediatamente.

Após isso, serão feitos novos downloads em intervalos de aproximadamente 24 horas. O download **pode** ocorrer mais frequentemente, mas ele **precisa** ser feito a cada 24 horas para prevenir que scripts ruins sejam um problema por períodos muito extensos.

A tentativa de instalação é feita sempre que o arquivo descarregado é identificado como novo – seja por diferir dos _service workers_ pré-existentes (é feita uma comparação binária nessa etapa) ou por ser o primeiro descoberto para a página ou site em questão.

Na primeira vez que um _service worker_ é disponibilizado, é feita a tentativa de instalação. Se bem-sucedida, ele é ativado.

Se, por outro lado, já existe um _service worker_ pré-instalado para uma página ou site e for disponibilizada uma nova versão, ela será descarregada, mas não imediatamente ativada. Isso é chamado de **_worker_ em espera**. Só será efetuada a ativação da versão atualizada quando não houver mais páginas utilizando a anterior. Após isso, ele passa a ser o **_worker_ ativo**. Caso necessário, é possível pular a etapa de espera com o método {{domxref("ServiceWorkerGlobalScope.skipWaiting()")}}. Em seguida, o novo worker ativo pode reivindicar as páginas existentes usando {{domxref("Clients.claim()")}}.

Você pode adicionar um _listener_ para o evento {{domxref("InstallEvent")}}. Uma ação padrão, quando esse evento é disparado, é preparar o seu _service worker_ para ser utilizado (por exemplo: criado um cache usando a API de storage nativa e armazenando nela os _assets_ que você quer que permaneçam disponíveis caso a aplicação fique _offline_).

Há também o evento `activate`. O momento em que ele é disparado é geralmente o ideal para limpar caches antigos e outras coisas associadas com a versão anterior do seu _service worker_.

Seu service worker pode responder a requisições usando o {{domxref("FetchEvent")}}. Você pode manipular a resposta a essas requisições da maneira que quiser, através do método {{domxref("FetchEvent.respondWith")}}.

> **Nota:**Como `oninstall` e `onactivate` podem demorar a serem concluídos, a especificação de _service workers_ disponibiliza um método [waitUntil](/pt-BR/docs/Web/API/ExtendableEvent/waitUntil). Ele recebe como parâmetro uma [promessa](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Promise), notificando o navegador que há trabalho em andamento até que aquela promessa seja resolvida. O navegador, portanto, não deverá encerrar o service worker durante esse período de espera.

Para um tutorial completo, mostrando como construir seu primeiro exemplo do zero, leia [Usando Service Workers](/pt-BR/docs/Web/API/Service_Worker_API/Using_Service_Workers).

## Outras ideias de usos possíveis

- Sincronização de dados em _background_
- Responder a requisições de recursos a partir de outras origens
- Receber de forma centralizada atualizações para dados de cálculo mais custoso, como geolocalização ou giroscópio, de forma a permitir que múltiplas páginas façam uso de um único conjunto de dados.
- No lado do cliente, fazer compilação e gerenciamento de dependências para CoffeeScript, LESS, módulos CommonJS/AMD, entre outros.
- _Hooks_ para serviços em _background_.
- Templates customizados com base em certos padrões de URL.
- Melhorias de performance como, por exemplo, fazer o pré-carregamento de recursos que o usuário provavelmente irá precisar a curto prazo, como as próximas fotos de um álbum.

No futuro, service workers serão capazes de fazer várias outras coisas úteis para a plataforma web, deixando-a mais próxima de _apps_ nativos em.

É interessante mencionar que outras especificações podem e irão passar a usar o contexto de service workers, por exemplo:

- [Sincronização em background](https://github.com/WICG/BackgroundSync): Iniciar um service worker mesmo quando não há usuários no site, de forma que o cache possa ser atualizado;
- [Reagir a mensagens push](/pt-BR/docs/Web/API/Push_API): Iniciar um service worker para enviar uma mensagem aos usuários dizendo que há conteúdo novo disponível;
- Reagir a uma data/hora específica;
- Entrar em uma [geo-fence](https://en.wikipedia.org/wiki/Geo-fence).

## Interfaces

- {{domxref("Cache")}}
  - : Representa o armazenamento para os pares de objeto {{domxref("Request")}} e {{domxref("Response")}}, os quais são cacheados como parte do ciclo de vida do {{domxref("ServiceWorker")}}.
- {{domxref("CacheStorage")}}
  - : Representa o armazenamento para objetos {{domxref("Cache")}}. Ele disponibiliza um diretório-mestre com todos os caches nomeados que um {{domxref("ServiceWorker")}} pode acessar, mantendo o mapeamento de nomes para os objetos {{domxref("Cache")}} correspondentes.
- {{domxref("Client")}}
  - : Representa o escopo do cliente de um _service worker_. Um cliente pode ser um documento no contexto de um navegador ou um {{domxref("SharedWorker")}}, o qual é controlado por um _worker_ ativo.
- {{domxref("Clients")}}
  - : Representa o container para uma lista de objetos {{domxref("Client")}}. É a principal forma de acessar os clientes na origem atual para o _service worker_ ativo.
- {{domxref("ExtendableEvent")}}
  - : Estende a vida dos eventos `install` e `activate` disparados no {{domxref("ServiceWorkerGlobalScope")}}, como parte do ciclo de vida do _service worker_. Isso garante que qualquer evento funcional (como o {{domxref("FetchEvent")}}) não seja despachado para o {{domxref("ServiceWorker")}} até que ele conclua as ações em andamento, como por exemplo: atualizar esquemas de banco de dados, apagar caches defasados, etc.
- {{domxref("ExtendableMessageEvent")}}
  - : O objeto de evento do {{event("message_(ServiceWorker)","message")}}, o qual é disparado em um _service worker_ (quando uma mensagem de canal é recebida no {{domxref("ServiceWorkerGlobalScope")}} a partir de outro contexto) — estende o tempo de vida desses eventos.
- {{domxref("FetchEvent")}}
  - : O parâmetro recebido no _handler_ {{domxref("ServiceWorkerGlobalScope.onfetch")}}. O `FetchEvent` representa uma ação de descarregamento que é despachada no {{domxref("ServiceWorkerGlobalScope")}} de um {{domxref("ServiceWorker")}}. Ele contém informações sobre a requisição e a resposta resultante, além de disponibilizar o método {{domxref("FetchEvent.respondWith", "FetchEvent.respondWith()")}}, o qual nos permite devolver uma resposta customizada para a página que está sendo controlada.
- {{domxref("InstallEvent")}}
  - : O parâmetro recebido no _handler_ {{domxref("ServiceWorkerGlobalScope.oninstall", "oninstall")}}. A interface `InstallEvent` representa uma ação de instalação que é despachada no {{domxref("ServiceWorkerGlobalScope")}} de um {{domxref("ServiceWorker")}}. Como deriva do {{domxref("ExtendableEvent")}}, ele assegura que eventos funcionais, como o {{domxref("FetchEvent")}}, não sejam despachados durante a instalação.
- {{domxref("NavigationPreloadManager")}}
  - : Disponibiliza métodos para gerenciar o pré-carregamento de recursos com um _service worker._
- {{domxref("Navigator.serviceWorker")}}
  - : Retornar um objeto {{domxref("ServiceWorkerContainer")}}, o qual permite accesso ao registro, remoção, atualização e comunicação com os objetos {{domxref("ServiceWorker")}} para o [documento associado](https://html.spec.whatwg.org/multipage/browsers.html#concept-document-window).
- {{domxref("NotificationEvent")}}
  - : O parâmetro recebido no _handler_ {{domxref("ServiceWorkerGlobalScope.onnotificationclick", "onnotificationclick")}}. A interface `NotificationEvent` representa um evento de _click_ em uma notificação que é despachado no {{domxref("ServiceWorkerGlobalScope")}} de um {{domxref("ServiceWorker")}}.
- {{domxref("ServiceWorker")}}
  - : Representa um _service worker_. Diferentes contextos de navegação (ex: páginas, _workers_, etc.) podem ser associados com o mesmo objeto `ServiceWorker`.
- {{domxref("ServiceWorkerContainer")}}
  - : Disponibiliza um objeto representando o service worker como uma unidade global no ecossistema de rede, incluindo métodos para registrar, desregistrar e atualizar _service workers_, além de poder acessar o status de cada _worker_ e seus registros.
- {{domxref("ServiceWorkerGlobalScope")}}
  - : Representa o contexto de execução global de um _service worker_.
- {{domxref("ServiceWorkerMessageEvent")}} {{deprecated_inline}}
  - : Representa uma mensagem enviada a um {{domxref("ServiceWorkerGlobalScope")}}. **Vale ressaltar que essa interface está defasada em navegadores modernos. As mensagens de _service worker_ agora usam a interface {{domxref("MessageEvent")}} para manter consistência com outras funcionalidades de messageria da web.**
- {{domxref("ServiceWorkerRegistration")}}
  - : Representa o registro de um _service worker_.
- {{domxref("ServiceWorkerState")}} {{experimental_inline}}
  - : Associado com o estado do [`ServiceWorker`](/pt-BR/docs/Web/API/ServiceWorker).
- {{domxref("SyncEvent")}} {{non-standard_inline}}
  - : A interface SyncEvent representa uma ação de sincronização que é despachada no {{domxref("ServiceWorkerGlobalScope")}} de um ServiceWorker.
- {{domxref("SyncManager")}} {{non-standard_inline}}
  - : Disponibiliza uma interface para registrar e listar registros de sincronização.
- {{domxref("WindowClient")}}
  - : Representa o escopo de um cliente de _service worker_ que é um documento em um contexto de navegador, o qual é controlado por um _worker_ ativo. Esse é um tipo especial de objeto {{domxref("Client")}}, como alguns métodos e propriedades adicionais disponíveis.

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- [ServiceWorker Cookbook](https://github.com/mdn/serviceworker-cookbook/)
- [Using Service Workers](/pt-BR/docs/Web/API/ServiceWorker_API/Using_Service_Workers)
- [Service workers basic code example](https://github.com/mdn/sw-test)
- [Is ServiceWorker ready?](https://jakearchibald.github.io/isserviceworkerready/)
- [Promises](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [Using web workers](/pt-BR/docs/Web/Guide/Performance/Using_web_workers)
- [Best Practices for using the VARY header](https://www.fastly.com/blog/best-practices-for-using-the-vary-header)
