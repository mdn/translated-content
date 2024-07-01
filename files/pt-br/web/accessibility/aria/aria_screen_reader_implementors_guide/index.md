---
title: Guia para implementar o leitor de tela ARIA
slug: Web/Accessibility/ARIA/ARIA_Screen_Reader_Implementors_Guide
---

## Regiões Ativas

Este é apenas um guia. Uma marcação de região ativa é uma área complexa que é algo aberto à interpretações. O que segue pretende prover um guia de implementação que respeita a necessidade dos desenvolvedores de leitores de tela para tentar novas coisas. A intenção é chegar a um balanço entre providenciar um guia útil em como usar o significado de marcação pretendido

### Interpretando a marcação de região ativa WAI-ARIA

1. Mudanças ativas são são dicas: Em geral marcação de região ativa é dado pelo autor como dicas, e a tecnologia assistiva pode permitir , site or even region-specific settings, assim como heurística para ajudar com mudanças ativas nas páginas que não têm dicas WAI-ARIA.
2. Opcionalmente, criar uma segunda, queue adicional se o usuário configurar um segundo canal de hardware: Se há dois canais para apresentação (i.e. text-to-speech e display Braile), então duas queues podem ser mantidas para permitir apresentação paralela. Os canais poderiam se configurados pelo usuário para apresentar regiões ativas baseada em vez ou prioridades.
3. Regiões ocupadas: Qualquer alteração numa região marcada com aria-busy="true" não deve ser adicionada à queue até que aquele atributo seja limpo.
4. Prioridade (aria-live ou a partir da vez) tem primeira precedência: itens deveriam ser adicionados à queue baseadas no seu nível de prioridade da propriedade aria-live ou inerente da vez (i.e. role="log" é prioridade por padrão). Itens assertivos são os primeiros então nível de prioridade. Alternativamente, implementações podem escolher ter uma política de limpeza mais items de prioridade, i.e. itens assertivos limpam qualquer item de prioridade da queue.
5. Tempo toma a segunda procedência: Priorizar itens com o mesmo nível de prioridade de acordo com quando o evento ocorre (eventos anteriores vêm primeiro). Itens presentes do mesmo nível de prioridade na ordem do que ocorreu primeiro.
6. Regiões atômicas (aria-atomic="true") com mudanças múltiplas não deveriam estar presentes duas vezes com o mesmo conrteúdo. Como um novo evento para uma região atômica é adicionada à queue e remove um evento anterior para a mesma região. É provavelmente desejável que tenha pelo menos um pequeno timeout antes de apresentar mudanças numa região atômica, com a finalidade de evitar apresentar a região duas vezes para duas mudançasque ocorrem rapidamente uma após a outra.
7. Inclua labels quando estiver apresntando mudanças: se a mudança ocorre em algo com um label de alguma forma semântico, fale o label. Isso é particularmente importante para mudanças em data cells, onde os headers column e row fornecem informação contextual importante.

### Ideias para Configurações e Heurística

1. Permitir uma voz diferente (em text-to-speech) ou outras características de apresentação para setar mudanças ativas seperadamente.
2. Quando não há marcação WAI-ARIA presente, automaticamente apresenta algumas mudanças a mesnos que o usuário configure todas as mudanças ativas para desligado. Por exemplo, mudanças automáticas de fala que são causadas pela própria entrada do usuário, como parte do contexto daquela entrada.
3. Permitir configurações globais para desligar a apresentação de mudanças ativas, apresentar todas as mudanças ativas, use marcação, ou seja "esperto" (use heurística).

### Detalhes para Processamento via APIs Platform Acessibility

Esperamos que o desenvolvedor do navegador irá trabalhar para fornecer implementações consistentes. A imlementação mais completa das regiões ativas atualmente está no Firefox 3. Aqui está como [regiões ativas WAI-ARIA são expostas no Firefox 3](/pt-BR/AJAX/WAI_ARIA_Live_Regions//API_Support).
