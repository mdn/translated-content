---
title: Large-Allocation
slug: orphaned/Web/HTTP/Headers/Large-Allocation
original_slug: Web/HTTP/Headers/Large-Allocation
---

{{HTTPSidebar}}

O cabeçalho de resposta não padronizado **`Large-Allocation`** diz ao nevagador que a página que está sendo carregada vai performar uma grande alocação. Ele é atualmente implementado somente no Firefox, mas é inofensivo para ser enviado para qualquer navegador.

Aplicações [WebAssembly](/pt-BR/docs/WebAssembly) ou _asm.js_ podem usar grandes blocos contíguos de memória alocada. Para jogos complexos, por exemplo, estas alocações podem ser bem grandes, algumas vezes grandes na escala de 1GB. O `Large-Allocation` diz ao navegador que o conteúdo web que será carregado vai querer performar uma grande alocação de memória contígua e o navegador pode reagir a este cabeçalho iniciando um processo dedicado para carregador o documento, por exemplo.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Tipo de cabeçalho</th>
      <td>{{Glossary("Response header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>não</td>
    </tr>
  </tbody>
</table>

## Sintaxe

```
Large-Allocation: 0
Large-Allocation: <megabytes>
```

## Diretivas

- `0`
  - : 0 é um valor especial que representa incerteza em relação a qual será o tamanho da alocação.
- `<megabytes>`
  - : O tamanho esperado da alocação a ser performada, em megabytes.

## Exemplos

```
Large-Allocation: 0
Large-Allocation: 500
```

## Tratamento de erros

O cabeçalho `Large-Allocation` joga mensagens de aviso ou erro quando utilizado incorretamente. Você vai encontrá-los no [console web](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html).

- This page was loaded in a new process due to a `Large-Allocation` header.
  - : Esta mensagem significa que o navegador viu o cabeçalho `Large-Allocation`, e conseguiu recarregar a página em um novo processo que deve ter mais memória contígua disponível.
- A `Large-Allocation` header was ignored due to the load being triggered by a non-GET request.
  - : Quando uma requisição {{HTTPMethod("POST")}} é usada para carregar um documento, aquele carregamento não pode ser redirecionado para um novo processo. Este erro é mostrado quando carregando um documento com um cabeçalho `Large-Allocation` com um método HTTP que não seja GET. Isto pode ter sido causado devido ao documento estar sendo carregado por um formulário de submissão, por exemplo.
- A `Large-Allocation` header was ignored due to the presence of windows which have a reference to this browsing context through the frame hierarchy or {{domxref("window.opener")}}.

  - : Este erro significa que o documento não foi carregado no nível mais alto de uma janela ou aba aberta, ou não aberta do usuário. Ele pode ocorrere nestas situações:

    - O documento com cabeçalho `Large-Allocation` foi carregado em um {{HTMLElement("iframe")}}. O Firefox não pode mover um iframe em um novo processo atualmente, então o documento deve carregar no novo processo.
    - O documento com cabeçalho `Large-Allocation` foi carregado em uma em uma janela que foi aberta pelo {{domxref("window.open()")}}, `<a target="_blank">` ou outros métodos similares sem `rel="noopener"` ou a funcionalidade `"noopener"` sendo colocado. Estas janelas devem permanecer no mesmo processo que o abriu, já que eles podem se comunicar, significando que não podemos permití-los trocar processos.
    - O documento cabeçalho `Large-Allocation` abriu outra janela com {{domxref("window.open()")}}, `<a target="_blank">` ou outros métodos similares sem a funcionalidade `rel="noopener"` ou `"noopener"` sem colocada. Isto é para o mesmo motivo, This is for the same reason as above, ou seja, que eles podem se comunicar e, portanto, não podemos permitir que eles alternem processos.

- A `Large-Allocation` header was ignored due to the document not being loaded out of process.
  - : O Firefox moveu para uma [arquitetura multiprocesso](/pt-BR/docs/Mozilla/Firefox/Multiprocess_Firefox), e esta arquitetura é necessária para suportar o cabeçalho `Large-Allocation`. Alguns [Addons legado](/pt-BR/docs/Mozilla/Add-ons/SDK) podem previnir o Firefox de usar esta nova, e mais rápida arquitetura multiprocesso. Se você tem um destes Addons, então nós vamos continuar a utilizar a antiga arquitetura de processo único para compatibilidade, e não pode lidar com o cabeçalho `Large-Allocation`.
- This page would be loaded in a new process due to a `Large-Allocation` header, however `Large-Allocation` process creation is disabled on non-Win32 platforms.

  - : O Firefox atualmente somente suporta o cabeçalho `Large-Allocation` nas versões 32-bits do Windows, como fragmentação de memória não é um problema em versões 64-bits. Se você está rodando uma versão não _win32_ do Firefox, este erro irá aparecer. Esta checagem pode ser desabilitada com a preferência de booleano "dom.largeAllocation.

    forceEnable" em about:config.

## Especificações

Não faz parte de nenhuma especificação atualmente. Uma explicação das ideias por trás deste cabeçalho podem ser encontradas [neste documento](https://gist.github.com/mystor/5739e222e398efc6c29108be55eb6fe3).

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- [WebAssembly](/pt-BR/docs/WebAssembly)
