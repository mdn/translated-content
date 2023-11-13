---
title: API de Dispositivos de Saída de Áudio
slug: Web/API/Audio_Output_Devices_API
page-type: web-api-overview
status:
  - experimental
browser-compat:
  - api.MediaDevices.selectAudioOutput
  - api.HTMLMediaElement.setSinkId
  - api.HTMLMediaElement.sinkId
  - http.headers.Permissions-Policy.speaker-selection
spec-urls: https://w3c.github.io/mediacapture-output/#dom-mediadevices-selectaudiooutput
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
