---
title: Gerenciamento de Conexão em HTTP/1.x
slug: Web/HTTP/Connection_management_in_HTTP_1.x
---

Gerenciamento de Conexão é um tema central em HTTP: abertura e manutenção de conexões e em grande parte tem impacto sobre o desempenho de Web sites e aplicações Web. Existem vários modelos, em HTTP/1.x: _ligações de curta duração, conexões persistentes, canalização e HTTP (HTTP pipelining)_.

HTTP é um protocolo de transporte que fornece conexão entre o cliente e o servidor geralmente depende de TCP. Em sua infância, HTTP usava um único modelo para lidar com tais conexões. Sua conexão é de curta duração. Essas conexões foram de curta duração: criado um novo cada vez que enviar um pedido necessário, e fechado uma vez a resposta tinha sido recebida.

Este simples modelo realiza uma limitação inata em desempenho: a abertura de cada uma das conexões TCP é uma operação de consumo de recursos.Várias mensagens devem ser trocadas entre o cliente e o servidor. Latência de rede e largura de banda afetam o desempenho quando precisa de uma solicitação de envio. Páginas de Web modernas exigem muitos pedidos (uma dúzia ou mais) para servir a quantidade de informação necessária, provando este modelo anterior ineficiente.

Dois novos modelos foram criados no HTTP/1.1.

1. **O modelo de conexão persistente**, mantém conexões abertas entre solicitações sucessivas, reduzindo o tempo necessário para abrir novas conexões.
2. **O modelo de pipelining HTTP**, vai um passo além, enviando várias solicitações sucessivas sem nem esperar por uma resposta, reduzindo em grande parte a latência da rede.

![Compares the performance of the three HTTP/1.x connection models: short-lived connections, persistent connections, and HTTP pipelining.](http1_x_connections.png)

> **Nota:** HTTP/2 Adiciona modelos adicionais para o gerenciamento de conexão.

Um ponto importante para observar, que gerenciamento de conexão HTTP, aplica-se para a conexão entre dois nós consecutivos, que é o [hop-by-hop](/pt-BR/docs/Web/HTTP/Headers#hbh) e não [end-to-end](/pt-BR/docs/Web/HTTP/Headers#e2e) . O modelo usado em conexões entre um cliente e seu primeiro proxy pode diferir do modelo entre um proxy e o servidor de destino (ou qualquer proxies intermédios). Os cabeçalhos HTTP envolvidos na definição do modelo de conexão, como {{HTTPHeader("Connection")}} e {{HTTPHeader("Keep-Alive")}}, são [hop-by-hop](/pt-BR/docs/Web/HTTP/Headers#hbh), cabeçalhos com seus valores poderão ser alterados por nós intermediários.

## Short-lived connections (Conexões de curta duração)

O modelo original de HTTP e o padrão HTTP/1.0, é short-lived connections (conexões de curta duração). Cada solicitação HTTP é concluída na sua própria conexão; Isto significa que um handshake TCP acontece antes de cada solicitação HTTP, e estas são serializadas.

O handshake TCP em si é demorado, mas uma conexão TCP adapta-se a sua carga, tornando-se mais eficiente com mais conexões sustentadas (ou aquecidas). Conexões de curta duração não fazem uso desse recurso de eficiência do TCP, e degrada o desempenho do ideal persistindo para transmitir mais de uma conexão nova, frio.

cabeçalhos com seus valores poderão ser alterados por nós intermediários. (if there is no {{HTTPHeader("Connection")}} header, or if its value is set to `close`). Em HTTP/1.1 este modelo é apenas usado quando o {{HTTPHeader("Connection")}}cabeçalho é enviado com um valor de fechamento.

> **Nota:** A menos que lidemos com um sistema muito antigo, que não suporta uma conexão persistente, não há nenhuma razão convincente para usar este modelo.

## Conexões Persistentes

Short-lived connections (conexões de curta duração) tem dois grandes problemas: o tempo necessário para estabelecer uma nova conexão é significativo, e desempenho da conexão TCP subjacente melhora somente quando esta conexão tem sido usado há algum tempo (conexão quente). Para aliviar estes problemas, foi concebido o conceito de uma conexão persistente, mesmo antes de HTTP/1.1. Alternativamente, este pode ser chamado uma conexão keep-alive.

É uma conexão persistente que permanece aberto por um período e pode ser reutilizado por vários pedidos, salvando a necessidade de um novo handshake TCP, e utilizando recursos para melhorar o desempenho do TCP. Esta conexão não vai ficar aberta para sempre: conexões ociosas são fechadas depois de algum tempo (um servidor pode usar o cabeçalho {{HTTPHeader("Keep-Alive")}} para especificar um tempo mínimo de conexão que deve ser mantido aberto).

Conexões persistentes também têm desvantagens, mesmo quando em marcha lenta eles consomem recursos do servidor e sob pesada carga, pode efetuar-se {{glossary("DoS attack", "DoS attacks")}}. Em tais casos, usar conexões não-persistentes, que estão fechadas, assim como elas estão ociosas, pode fornecer um melhor desempenho.HTTP/1.0 as conexões sem persistencia por default.Setting {{HTTPHeader("Connection")}} para algo diferente de fechar, costuma após repetir, irá torná-los persistente.

Em HTTP/1.1, persistencia é o padrão e o cabeçalho não é mais necessário (mas ele é adicionado frequentemente como uma medida defensiva contra casos que exigem um fallback para HTTP/1.0).

## HTTP pipelining

> **Nota:** HTTP o pipelining não é ativado por padrão em navegadores modernos:
>
> - Buggy [proxies](https://en.wikipedia.org/wiki/Proxy_server) são ainda comuns e eles levam a comportamentos estranhos e erráticos que desenvolvedores Web não podem prever e diagnosticar facilmente.
> - Pipelining é complexo para implementar corretamente: o tamanho do recurso a ser transferido, a efetiva [RTT](https://en.wikipedia.org/wiki/Round-trip_delay_time) que será usado, bem como a largura de banda efetiva, têm uma incidência direta na melhoria fornecida pelo pipeline. Sem conhecer eles, mensagens importantes podem ser atrasadas por detrás aqueles sem importância. A noção de importante mesmo evolui durante o layout de página! Pipeline HTTP, portanto, traz uma melhoria marginal na maioria dos casos apenas.
> - Pipelining está sujeito à problema [HOL](https://en.wikipedia.org/wiki/Head-of-line_blocking).
>
> Por estas razões, o pipelining tem sido substituído por um algoritmo melhor, multiplexação, que é usado pelo HTTP/2.

Por padrão, [HTTP](/pt-BR/HTTP) as solicitações são emitidas sequencialmente. A próxima solicitação só é emitida depois que recebeu a resposta para a solicitação atual. Como eles são afetados pelas latências de rede e as limitações de largura de banda, isso pode resultar em atrasos significativos antes que a próxima solicitação é vista pelo servidor.

Pipelining é o processo para enviar solicitações sucessivas, sobre a mesma conexão persistente, sem esperar pela resposta. Isso evita a latência da conexão. Teoricamente, desempenho também poderia ser melhorado se duas solicitações HTTP para ser embalado na mesma mensagem TCP. O [MSS](https://en.wikipedia.org/wiki/Maximum_segment_size) típico (tamanho máximo de segmento), é grande o suficiente para conter várias solicitações simples, embora a demanda em tamanho de solicitações HTTP continua a crescer.

Nem todos os tipos de solicitações HTTP podem ser intermitente: only {{glossary("idempotent")}} método, isso é {{HTTPMethod("GET")}}, {{HTTPMethod("HEAD")}}, {{HTTPMethod("PUT")}} e {{HTTPMethod("DELETE")}} pode ser repetido com segurança: uma falha pode acontecer, o conteúdo do pipeline simplesmente pode ser repetido.

Hoje, cada proxy HTTP/1.1-compatível e servidor devem apoiar o pipelining, embora muitos têm limitações na prática: uma razão significativa, nenhum navegador moderno ativa esse recurso por padrão.

## Domain sharding

> **Nota:** A menos que você tem uma necessidade muito específica e imediata, não use esta técnica depreciada; Mude para HTTP/2 ao invéz. Em HTTP/2, sharding domínio não é mais útil: a conexão HTTP/2 é capaz de manipular as solicitações sem prioridades paralelas muito bem. Sharding domínio é mesmo prejudicial ao desempenho. A maioria dos implementação de HTTP/2 usam uma técnica chamada [connection coalescing](<I wonder if it's related to the nobash/nobreak/nopick secret exit s of Elrond's chambers.>) para reverter o sharding de domínio eventual.

Como uma conexão de HTTP/1.x está serializando solicitações, mesmo sem qualquer ordenação, não pode ser ideal sem largura de banda grande o suficiente disponível. Como uma solução, os navegadores abrir várias conexões para cada domínio, enviando solicitações paralelas. Era padrão conexões de 2 a 3, mas isto agora aumentou para um uso mais comum de 6 conexões paralelas. Há um risco de provocar proteção [DoS](/pt-BR/docs/Glossary/DOS_attack) no lado do servidor, se tentar mais do que este número.

Se o servidor deseja um site de Web mais rápido ou resposta do aplicativo, é possível para o servidor forçar a abertura de mais conexões. Por exemplo, em vez de ter todos os recursos no mesmo domínio, diz www\.example.com, poderia dividir em vários domínios, www1.example.com, www2.example.com, www3.example.com. Cada um destes domínios resolver acessar o mesmo servidor e o navegador da Web abrirá 6 conexões para cada (no nosso exemplo, impulsionando as conexões para 18). Esta técnica é chamada sharding do domínio.

![](httpsharding.png)

## Conclusão

Gerenciamento de conexão melhorada permite considerável aumento de desempenho em HTTP. Com HTTP/1.1 ou HTTP/1.0, usando uma conexão persistente – pelo menos até que se torne ocioso – levando para o melhor desempenho. No entanto, o falha do pipelining tem levado para a concepção de modelos de gestão de conexão superior, que foram incorporados ao HTTP/2.
