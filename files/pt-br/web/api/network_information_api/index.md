---
title: Network Information API
slug: Web/API/Network_Information_API
translation_of: Web/API/Network_Information_API
original_slug: WebAPI/Network_Information
---
{{ SeeCompatTable() }}

A API de Informações de Rede fornece informação sobre a conexão do sistema, assim como a banda atual do dispositivo do usuário ou qualquer conexão que seja medida. Essa pode também ser usada para selecionar conteúdo de alta ou baixa definição baseado na conexão do usuário. Toda a API consiste na adição da interface domxref("Connection") e uma única propriedade a interface {{domxref("Navigator")}}: {{domxref("Navigator.connection")}}.

## Detectando mudanças de conexão

Este é um exemplo vê mudança na conexão do usuário. Essa é similar a como uma app pode alertar quando o usuário move de uma conexão de alto para baixo custo por exemplo, a fim de reduzir a demanda da banda para previnir que o usuário seja submetido a cargos substanciais.

```js
var connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;

function updateConnectionStatus() {
  alert("Connection bandwidth: " + connection.bandwidth + " MB/s");
  if (connection.metered) {
    alert("The connection is metered!");
  }
}

connection.addEventListener("change", updateConnectionStatus);
updateConnectionStatus();
```

## Especificações

| Specification                                                                                | Status                                       | Comment               |
| -------------------------------------------------------------------------------------------- | -------------------------------------------- | --------------------- |
| {{ SpecName('Network Information', '', 'Network Information API') }} | {{ Spec2('Network Information') }} | Initial specification |

## Compatibilidade com navegadores

{{Page('/en-US/docs/Web/API/window.navigator.connection','Browser compatibility')}}

## Veja também

- {{ spec("http://dvcs.w3.org/hg/dap/raw-file/tip/network-api/Overview.html", "Network Information API Specification", "ED") }}
- [Online and offline events](/en/Online_and_offline_events)
- {{domxref("window.navigator.connection")}}
