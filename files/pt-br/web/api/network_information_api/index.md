---
title: A API de informações de rede
slug: Web/API/Network_Information_API
---

{{DefaultAPISidebar("Network Information API")}}{{SeeCompatTable}}

A API de informações de rede fornece informações sobre a conexão do sistema em termos de tipo de conexão geral (por exemplo, 'wifi, 'celular' etc.).
Isso pode ser usado para selecionar conteúdo de alta definição ou conteúdo de baixa definição com base na conexão do usuário.

A interface consiste em um único objeto {{domxref("NetworkInformation")}}, cuja instância é retornada pela propriedade {{domxref("Navigator.connection")}}.

{{AvailableInWorkers}}

## Interfaces

- {{domxref("NetworkInformation")}}
  - : fornece informações sobre a conexão que um dispositivo está usando para se comunicar com a rede e fornece um meio para que os scripts sejam notificados se o tipo de conexão for alterado. A interface `NetworkInformation` não pode ser instanciada. Em vez disso, é acessado através da interface {{domxref("Navigator")}}.

## Exemplos

### Detectar alterações de conexão

Este exemplo observa as alterações na conexão do usuário.

```js
let type = navigator.connection.effectiveType;

function updateConnectionStatus() {
  console.log(
    `Tipo de conexão alterado de ${type} para ${navigator.connection.effectiveType}`,
  );
  type = navigator.connection.effectiveType;
}

navigator.connection.addEventListener("change", updateConnectionStatus);
```

### Pré-carregue grandes recursos

O objeto de conexão é útil para decidir se deve pré-carregar recursos que consomem grandes quantidades de largura de banda ou memória. Este exemplo seria chamado logo após o carregamento da página para verificar um tipo de conexão em que o pré-carregamento de um vídeo pode não ser desejável. Se uma conexão de celular for encontrada, o sinalizador `preloadVideo` será definido como `false`. Para simplicidade e clareza, este exemplo testa apenas um tipo de conexão. Um caso de uso do mundo real provavelmente usaria uma instrução switch ou algum outro método para verificar todos os valores possíveis de {{domxref("NetworkInformation.type")}}. Independentemente do valor `type`, você pode obter uma estimativa da velocidade da conexão através da propriedade {{domxref("NetworkInformation.effectiveType")}}.

```js
let preloadVideo = true;
const connection = navigator.connection;
if (connection) {
  if (connection.effectiveType === "slow-2g") {
    preloadVideo = false;
  }
}
```

## Especificações

{{Specifications}}

## Compatibilidade do navegador

{{Compat}}

## Veja também

- [Eventos online e offline](/pt-BR/docs/Web/API/Navigator/onLine)
