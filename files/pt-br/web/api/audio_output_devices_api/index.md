---
title: API de Dispositivos de Saída de Áudio
slug: Web/API/Audio_Output_Devices_API
---

{{DefaultAPISidebar("Audio Output Devices API")}}{{securecontext_header}}{{SeeCompatTable}}

A **API de Dispositivos de Saída de Áudio** permite que aplicações web solicitem aos usuários qual dispositivo de saída deve ser usado para a reprodução de áudio.

## Conceitos e uso

Sistemas operacionais comumente permitem que os usuários especifiquem se o áudio deve ser reproduzido nos alto-falantes, em um fone de ouvido Bluetooth ou em algum outro dispositivo de saída de áudio.
Esta API permite que as aplicações ofereçam essa mesma funcionalidade a partir de uma página web.

Mesmo se permitido por uma política de permissões, o acesso a um dispositivo de saída de áudio específico ainda requer permissão explícita do usuário, pois o usuário pode estar em um local onde a reprodução de áudio através de alguns dispositivos de saída não seja apropriada.

A API fornece o método [`MediaDevices.selectAudioOutput()`](/pt-BR/docs/Web/API/MediaDevices/selectAudioOutput) que permite aos usuários selecionar sua saída de áudio desejada dentre aquelas permitidas pela diretiva [`speaker-selection`](/pt-BR/docs/Web/HTTP/Headers/Permissions-Policy/speaker-selection) do cabeçalho HTTP [`Permissions-Policy`](/pt-BR/docs/Web/HTTP/Headers/Permissions-Policy) do documento.
O dispositivo selecionado recebe, então, permissão do usuário, permitindo que ele seja enumerado com [`MediaDevices.enumerateDevices()`](/pt-BR/docs/Web/API/MediaDevices/enumerateDevices) e definido como dispositivo de saída de áudio usando [`HTMLMediaElement.setSinkId()`](/pt-BR/docs/Web/API/HTMLMediaElement/setSinkId).

Dispositivos de áudio podem se conectar e desconectar arbitrariamente. Aplicações que desejam reagir a esse tipo de mudança podem ouvir o evento [`devicechange` event](/pt-BR/docs/Web/API/MediaDevices/devicechange_event) e usar [`enumerateDevices()`](/pt-BR/docs/Web/API/MediaDevices/enumerateDevices) para determinar se `sinkId` está presente nos dispositivos retornados.
Isso pode iniciar, por exemplo, a pausa ou retomada da reprodução.

## Interfaces

### Extensões para interfaces

A API de Dispositivos de Saída de Áudio estende as seguintes APIs, adicionando as funcionalidades listadas:

#### MediaDevices

- [`MediaDevices.selectAudioOutput()`](/pt-BR/docs/Web/API/MediaDevices/selectAudioOutput)
  - : Este método solicita ao usuário a seleção de um dispositivo de saída de áudio específico, como um alto-falante ou fone de ouvido.
    Selecionar um dispositivo concede permissão do usuário para usá-lo e retorna informações sobre o dispositivo, incluindo seu ID.

#### HTMLMediaElement

- [`HTMLMediaElement.setSinkId()`](/pt-BR/docs/Web/API/HTMLMediaElement/setSinkId)
  - : Este método define o ID do dispositivo de áudio a ser usado para saída, que será usado se permitido.
- [`HTMLMediaElement.sinkId`](/pt-BR/docs/Web/API/HTMLMediaElement/sinkId)
  - : Esta propriedade retorna o ID único do dispositivo de áudio em uso, ou uma string vazia se o dispositivo padrão do agente do usuário estiver sendo usado.

## Requisitos de segurança

O acesso à API está sujeito às seguintes restrições:

- Todos os métodos e propriedades só podem ser chamados em um [contexto seguro](/pt-BR/docs/Web/Security/Secure_Contexts).

- [`MediaDevices.selectAudioOutput()`](/pt-BR/docs/Web/API/MediaDevices/selectAudioOutput) concede permissão do usuário para um dispositivo selecionado ser usado como o dispositivo de saída de áudio:

  - O acesso pode ser controlado pela política de permissões HTTP [`speaker-selection`](/pt-BR/docs/Web/HTTP/Headers/Permissions-Policy/speaker-selection).
  - [Ativação de usuário transitória](/pt-BR/docs/Web/Security/User_activation) é necessária.
    O usuário deve interagir com a página ou um elemento de interface do usuário para que o método seja chamado.

- [`HTMLMediaElement.setSinkId()`](/pt-BR/docs/Web/API/HTMLMediaElement/setSinkId) define um ID permitido como saída de áudio:

  - O acesso pode ser controlado pela política de permissões HTTP [`speaker-selection`](/pt-BR/docs/Web/HTTP/Headers/Permissions-Policy/speaker-selection).
  - É necessária a permissão do usuário para definir um ID de dispositivo não padrão.
    - Isso pode vir da seleção na janela de diálogo lançada por `MediaDevices.selectAudioOutput()`
    - A permissão do usuário para definir o dispositivo de saída é concedida implicitamente se o usuário já concedeu permissão para usar um dispositivo de entrada de mídia no mesmo grupo com [`MediaDevices.getUserMedia()`](/pt-BR/docs/Web/API/MediaDevices/getUserMedia).

O status da permissão pode ser consultado usando o método [Permissions API](/pt-BR/docs/Web/API/Permissions_API) [`navigator.permissions.query()`](/pt-BR/docs/Web/API/Permissions/query), passando um descritor de permissão com a permissão `speaker-selection`.

## Exemplos

Aqui está um exemplo de uso de `selectAudioOutput()`, dentro de uma função que é acionada por um clique em um botão, e em seguida definindo o dispositivo selecionado como saída de áudio.

O código primeiro verifica se `selectAudioOutput()` é suportado e, se for o caso, o utiliza para selecionar uma saída e retornar um [ID do dispositivo](/pt-BR/docs/Web/API/MediaDeviceInfo/deviceId).
Em seguida, reproduzimos algum áudio usando a saída padrão e, em seguida, chamamos `setSinkId()` para alternar para o dispositivo de saída selecionado.

```js
document.querySelector("#meuBotao").addEventListener("click", async () => {
  if (!navigator.mediaDevices.selectAudioOutput) {
    console.log(
      "selectAudioOutput() não suportado ou não está em contexto seguro.",
    );
    return;
  }

  // Exibe janela de seleção do dispositivo
  const dispositivoDeAudio = await navigator.mediaDevices.selectAudioOutput();

  // Cria um elemento de áudio e inicia a reprodução de áudio no dispositivo padrão
  const audio = document.createElement("audio");
  audio.src = "https://example.com/audio.mp3";
  audio.play();

  // Altera a saída para o dispositivo de áudio selecionado.
  audio.setSinkId(dispositivoDeAudio.deviceId);
});
```

Observe que se você registrar os detalhes de saída, eles podem se parecer com isso:

```js
console.log(
  `${dispositivoDeAudio.kind}: ${dispositivoDeAudio.label} id = ${dispositivoDeAudio.deviceId}`,
);
// saída de áudio: Saída Digital Realtek (Áudio Realtek(R)) id = 0wE6fURSZ20H0N2NbxqgowQJLWbwo+5ablCVVJwRM3k=
```

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}
