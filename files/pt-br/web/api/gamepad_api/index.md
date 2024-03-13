---
title: Gamepad API
slug: Web/API/Gamepad_API
---

{{DefaultAPISidebar("Gamepad API")}}

A **Gamepad API** é uma maneira dos desenvolvedores acessarem e responderem à sinais oriundos de gamepads e outros controladores de games de forma simples e consistente. A API contém três interfaces, dois eventos e uma função especialista, para responder aos gamepads sendo conectados e desconectados, e acessar outras informações sobre o próprio gamepad, e quais botões e outros controles estão sendo de fato passados.

## Interfaces

- [`Gamepad`](/pt-BR/docs/Web/API/Gamepad)
  - : Representa o gamepad/controlador conectado ao computador.
- [`GamepadButton`](/pt-BR/docs/Web/API/GamepadButton)
  - : Representa um botão num dos controles conectados.
- [`GamepadEvent`](/pt-BR/docs/Web/API/GamepadEvent)
  - : O objeto de evento representando eventos disparados que são relacionados ao gamepad.

### Experimental Gamepad extensions

- [`GamepadHapticActuator`](/pt-BR/docs/Web/API/GamepadHapticActuator)
  - : Representa o hardware no controlador designado à prover feedbacks táteis ao usuário (Se disponível), mais comumente um hardware de vibração.
- [`GamepadPose`](/pt-BR/docs/Web/API/GamepadPose)
  - : Representa a "localização" de um controle (ex. posição e orientação no espaço 3D) no caso de um controlador WebVR.

Veja também as [extensões para a interface de Gamepad](/pt-BR/docs/Web/API/Gamepad#Experimental_extensions_to_Gamepad), para funcionalidades que permitem você acessar as informações acima.

### Extensions to other interfaces

#### Navigator

- {{domxref("Navigator.getGamepads()")}}
  - : Uma extensão para o objeto {{domxref("Navigator")}} que retorna um array de objetos {{domxref("Gamepad")}}, um para cada controlador conectado.

#### Window events

- {{domxref("Window.ongamepadconnected")}}
  - : Representa um controlador de evento que irá rodar quando o gamepad é conectado (quando o evento {{event('gamepadconnected')}} for disparado).
- {{domxref("Window.ongamepaddisconnected")}}
  - : Representa um controlador de evento que irá rodar quando o gamepad é desconectado (quando o evento {{event('gamepaddisconnected')}} for disparado).

## Guias e tutorias

- [Using the Gamepad API](/pt-BR/docs/Web/API/Gamepad_API/Using_the_Gamepad_API)
- [Implementing controls using the Gamepad API](/pt-BR/docs/Games/Techniques/Controls_Gamepad_API)

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- [The Gamepad API](https://hacks.mozilla.org/2013/12/the-gamepad-api/) por Ted Mielczarek and Robert Nyman
- [Simple API demo page](http://luser.github.io/gamepadtest/) ([source](https://github.com/luser/gamepadtest))
