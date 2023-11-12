---
title: WebVR API
slug: Web/API/WebVR_API
---

{{DefaultAPISidebar("WebVR API")}}{{SeeCompatTable}}

O WebVR oferece suporte para expor dispositivos de realidade virtual - por exemplo, telas montadas na cabeça, como o Oculus Rift - para aplicativos da web, permitindo que os desenvolvedores traduzam informações de posição e movimento da tela para movimento em torno de uma cena 3D. Isso tem inúmeras aplicações muito interessantes, de passeios de produtos virtuais e aplicativos de treinamento interativo para super imersivo jogos em primeira pessoa.

## Conceitos e uso

![Sketch of a person in a chair with wearing goggles labelled Head mounted display (HMD) facing a monitor with a webcam labelled Position sensor ](hw-setup.png)

Todos os dispositivos VR ligados ao computador serão devolvidos pelo {{domxref("Navigator.getVRDisplays()")}} método. Que retorna uma matriz de objetos para representar os dispositivos conectados, que herdam do objeto geral {{domxref("VRDevice")}} Geralmente o display usado na cabeça terá dois dispositivos - o próprio display montado na cabeça, representado por {{domxref("HMDVRDevice")}}, e uma câmera com sensor na posição que manterá o controle de sua posição de cabeça, representada por {{domxref("PositionSensorVRDevice")}}.

O objeto {{domxref("PositionSensorVRDevice")}} contém o método {{domxref("PositionSensorVRDevice.getState", "getState()")}}, que retorna um objeto {{domxref("VRPositionState")}} - isto representa o estado do sensor num dado carimbo de data e inclui propriedades que contêm dados úteis tais como velocidade, aceleração e orientação atuais, úteis para atualizar o processamento de uma cena em cada trama de acordo com o movimento do visor montado na cabeça VR.

O método {{domxref("HMDVRDevice.getEyeParameters()")}} retorna um objeto {{domxref("VREyeParameters")}}, que pode ser usado para retornar informações do campo de exibição - quanto da cena a tela montada na cabeça pode ver.O {{domxref("VREyeParameters.currentFieldOfView")}} retorna um objeto {{domxref("VRFieldOfView")}} que contém 4 ângulos que descrevem a vista atual a partir de um ponto central. Você também pode alterar o campo de visualização usando {{domxref("HMDVRDevice.setFieldOfView()")}}.

## WebVR Interfaces

{{domxref("VRDisplay")}}
Representa qualquer dispositivo VR suportado por esta API. Ele inclui informações genéricas, como IDs de dispositivo e descrições, bem como métodos para começar a apresentar uma cena VR, recuperar os parâmetros do olho e exibir capacidades e outras funcionalidades importantes.
{{domxref("VRDisplayCapabilities")}}
Descreve os recursos de um {{domxref("VRDisplay")}} - seus recursos podem ser usados para executar testes de capacidade do dispositivo VR, por exemplo, ele pode retornar informações de posição.
{{domxref("VRPose")}}
Representa o estado de posição em um dado carimbo de data/hora (que inclui orientação, posição, velocidade e aceleração).
{{domxref ("VREyeParameters")}}
Fornece acesso a todas as informações necessárias para processar corretamente uma cena para cada olho, incluindo informações de campo de visão.
{{domxref("VRFieldOfView")}}
Representa um campo de visão definido por 4 valores de graus diferentes que descrevem a vista a partir de um ponto central.
{{Domxref("VRLayer")}}
Representa uma camada a ser apresentada em {{domxref("VRDisplay")}}.
{{domxref("VRStageParameters")}}
Representa os valores que descrevem a área de estágio para dispositivos que suportam experiências em escala de sala.

## Extensões para outras interfaces

{{domxref("Gamepad.displayId")}} {{readonlyInline}}
Retorna o {{domxref("VRDisplay.displayId")}} do associado {{domxref("VRDisplay")}} - o VRDisplay que o gamepad está controlando a cena exibida de.
{{domxref("Navigator.activeVRDisplays")}} {{readonlyInline}}
Retorna uma matriz contendo todos os objetos {{domxref("VRDisplay")}} que está sendo apresentado ({{domxref("VRDisplay.ispresenting")}}).
{{domxref("Navigator.getVRDisplays()")}}
Retorna uma promessa que resolve uma matriz de objetos {{domxref("VRDisplay")}} que representa qualquer dispositivo VR disponível conectado ao computador.
{{domxref("Window.onvrdisplayconnected")}}
Representa um manipulador de eventos que será executado quando um dispositivo VR compatível tiver sido conectado ao computador (quando o evento {{event("vrdisplayconnected")}} for acionado).
{{domxref("Window.onvrdisplaydisconnected")}}
Representa um manipulador de eventos que será executado quando um dispositivo VR compatível tiver sido desconectado do computador (quando o evento {{event("vrdisplaydisconnected")}} for acionado).
{{domxref("Window.onvrdisplaypresentchange")}}
Representa um manipulador de eventos que será executado quando o estado de apresentação de um dispositivo VR mudar - isto é, vai de apresentar a não apresentar, ou vice-versa (quando o evento {{event("onvrdisplaypresentchange")}} é acionado).

## Exemplos

Você pode encontrar uma série de exemplos nesses repositórios Github:

- [A-Frame](https://github.com/aframevr/aframe): Estrutura web de código aberto para a construção de experiências VR. Muitos exemplos.
- [mdn/webvr-tests](https://github.com/mdn/webvr-tests): Demonstrações simples construídas para ilustrar o uso de recursos básicos.
- [MozVR team](https://github.com/MozVR/): Mais demonstrações, sobre WebVR e muito mais!

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja Também

- [webvr.info](https://webvr.info)- Informações atualizadas sobre WebVR, configuração do navegador e comunidade.
- [webvr.rocks](https://iswebvrready.com)- Informações atualizadas sobre o suporte ao navegador WebVR (incluindo compilações experimentais).
- [MozVr.com](http://mozvr.com/)- Demos, downloads, outros recursos da equipe de VR da Mozilla.
- [A-Frame](https://aframe.io)- A web framework para a construção de experiências VR (com HTML), a partir da equipe Mozilla VR.
- [Console Game on Web](http://dsmu.me/ConsoleGameOnWeb/)- Uma coleção de demonstrações interessantes conceito de jogo, alguns dos quais incluem WebVR.
- [threejs-vr-boilerplate](https://github.com/MozVR/vr-web-examples/tree/master/threejs-vr-boilerplate)- Um modelo de iniciador muito útil para escrever aplicações WebVR.
- [Oculus Rift homepage](https://developer.oculus.com/)
