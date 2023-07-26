---
title: API de tarefas em segundo plano
slug: Web/API/Background_Tasks_API
---

{{DefaultAPISidebar("Background Tasks")}}

A **API de agendamento cooperativo de tarefas em segundo plano** (também conhecida como API de tarefas em segundo plano ou API `requestIdleCallback()`) fornece a capacidade de enfileirar tarefas a serem executadas automaticamente pelo agente do usuário quando ele determina que há tempo para fazê-lo.

> **Nota:** esta API _não está disponível_ em [Web Workers](/pt-BR/docs/Web/API/Web_Workers_API).

## Conceitos e uso

A thread principal de um navegador da Web é centralizada em torno de seu loop de eventos. Este código desenha quaisquer atualizações pendentes para o {{domxref("Document")}} sendo exibido no momento, executa qualquer código JavaScript que a página precise executar, aceita eventos de dispositivos de entrada e despacha esses eventos para os elementos que devem recebê-los. Além disso, o loop de eventos lida com as interações com o sistema operacional, atualiza a própria interface do usuário do navegador e assim por diante. É um pedaço de código extremamente ocupado, e seu código JavaScript principal pode ser executado dentro desta thread junto com tudo isso. Certamente a maioria, se não todo o código capaz de fazer alterações no DOM, está sendo executado na thread principal, pois é comum que as alterações na interface do usuário estejam disponíveis apenas para a thread principal.

Como a manipulação de eventos e as atualizações de tela são duas das maneiras mais óbvias pelas quais os usuários notam problemas de desempenho, é importante que seu código seja um bom cidadão da Web e ajude a evitar interrupções na execução do loop de eventos. No passado, não havia outra maneira de fazer isso de forma confiável, a não ser escrevendo um código o mais eficiente possível e descarregando o máximo de trabalho possível para os [workers](/pt-BR/docs/Web/API/Web_Workers_API). {{domxref("Window.requestIdleCallback()")}} permite que você se envolva ativamente para ajudar a garantir que o loop de eventos do navegador funcione sem problemas, permitindo que o navegador diga ao seu código quanto tempo pode usar com segurança sem causar atrasos no sistema. Se você ficar dentro do limite indicado, poderá tornar a experiência do usuário muito melhor.

### Aproveitando ao máximo os retornos de idle callbacks

Como os retornos de idle callbacks são destinados a fornecer ao seu código uma maneira de cooperar com o loop de eventos para garantir que o sistema seja utilizado em todo o seu potencial sem sobrecarregá-lo, resultando em atraso ou outros problemas de desempenho, você deve pensar sobre como você vai sobre usá-los.

- **Use idle callbacks para tarefas que não têm alta prioridade.** Como você não sabe quantos callbacks foram estabelecidos e não sabe o quão ocupado o sistema do usuário está, você não sabe o quão freqüentemente seu retorno de chamada será executado (a menos que você especifique um `timeout`). Não há garantia de que cada passagem pelo loop de eventos (ou mesmo cada ciclo de atualização de tela) incluirá qualquer retorno de chamada ocioso sendo executado; se o loop de eventos usar todo o tempo disponível, você está sem sorte (novamente, a menos que tenha usado um `timeout`).
- **Retornos de idle callbacks devem fazer o possível para não ultrapassar o tempo alocado.** Enquanto o navegador, seu código e a Web em geral continuarão a funcionar normalmente se você ultrapassar o limite de tempo especificado (mesmo se o ultrapassar _muito_), a restrição de tempo destina-se a garantir que você deixe o sistema com tempo suficiente para concluir a passagem atual pelo loop de eventos e passar para o próximo sem causar gagueira em outro código ou atrasos nos efeitos de animação. Atualmente, {{domxref("IdleDeadline.timeRemaining", "timeRemaining()")}} tem um limite superior de 50 milissegundos, mas, na realidade, você geralmente terá menos tempo do que isso, pois o loop de eventos já pode estar consumindo isso tempo em sites complexos, com extensões de navegador que precisam de tempo de processamento e assim por diante.
- **Evite fazer alterações no DOM em seu retorno de idle callback.** No momento em que seu retorno de chamada é executado, o quadro atual já terminou de desenhar e todas as atualizações de layout e cálculos foram concluídos. Se você fizer alterações que afetem o layout, poderá forçar uma situação em que o navegador tenha que parar e fazer recálculos que, de outra forma, seriam desnecessários. Se seu retorno de chamada precisar alterar o DOM, ele deverá usar {{domxref("Window.requestAnimationFrame()")}} para agendar isso.
- **Evite tarefas cujo tempo de execução não pode ser previsto.** Seu idle callback deve evitar fazer qualquer coisa que possa levar um tempo imprevisível. Por exemplo, qualquer coisa que possa afetar o layout deve ser evitada. Você também deve evitar resolver ou rejeitar {{jsxref("Promise")}}s, pois isso invocaria o manipulador para a resolução ou rejeição dessa promessa assim que seu retorno de chamada retornar.
- **Use limites de tempo quando precisar, mas somente quando for necessário.** O uso de limites de tempo pode garantir que seu código seja executado em tempo hábil, mas também pode permitir que você cause atrasos ou falhas de animação ao exigir que o navegador chame você quando não há tempo suficiente para você correr sem interromper o desempenho.

## Interfaces

A API de tarefas em segundo plano adiciona apenas uma nova interface:

- {{domxref("IdleDeadline")}}
  - : Um objeto desse tipo é passado para o retorno de idle callback para fornecer uma estimativa de quanto tempo o período de inatividade deve durar, bem como se o retorno de chamada está ou não em execução porque seu período de tempo limite expirou.

A interface {{domxref("Window")}} também foi aprimorada por esta API para oferecer os novos métodos {{domxref("window.requestIdleCallback", "requestIdleCallback()")}} e {{domxref("window.cancelIdleCallback", "cancelIdleCallback()")}}.
