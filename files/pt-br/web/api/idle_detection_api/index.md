---
title: Idle Detection API
slug: Web/API/Idle_Detection_API
---

{{securecontext_header}}{{DefaultAPISidebar("Idle Detection API")}}{{SeeCompatTable}}

A API de detecção de inatividade permite detectar quando um usuário está inativo, especificamente, ativo, inativo ou bloqueado, bem como ser notificado em alterações de inatividade, sem consultar nenhum script.

## Casos de uso

Aplicativos nativos e extensões de navegadores usam detecção de inatividade para melhorar a experiência do usuário enquanto o mesmo interage com o dispositivo. Por exemplo, aplicativos de bate-papo podem mostrar a outros usuários do aplicativo se um usuário estiver disponível (ativo). Outros aplicativos podem optar por mostrar notificações somente quando um usuário estiver interagindo com o aplicativo. Uma aplicação web poderia usar esta API para casos de uso semelhantes. Além disso, um PWA (Progressive Web App) pode usar a detecção de inatividade para acionar uma atualização do service worker quando o aplicativo não estiver sendo usado.

## Interfaces

- {{domxref("IdleDetector")}} {{Experimental_Inline}}
  - : Fornece métodos e eventos para detectar a atividade do usuário em um dispositivo ou tela.

## Exemplos

O exemplo a seguir mostra a criação de um detector e registra as alterações no estado do usuário. Um botão é usado para solicitar a permissão necessária antes de obter a ativação.

```js
const controller = new AbortController();
const signal = controller.signal;

startButton.addEventListener("click", async () => {
  if ((await IdleDetector.requestPermission()) !== "granted") {
    console.error("Idle detection permission denied.");
    return;
  }

  try {
    const idleDetector = new IdleDetector();
    idleDetector.addEventListener("change", () => {
      const userState = idleDetector.userState;
      const screenState = idleDetector.screenState;
      console.log(`Idle change: ${userState}, ${screenState}.`);
    });

    await idleDetector.start({
      threshold: 60_000,
      signal,
    });
    console.log("IdleDetector is active.");
  } catch (err) {
    // Deal with initialization errors like permission denied,
    // running outside of top-level frame, etc.
    console.error(err.name, err.message);
  }
});

stopButton.addEventListener("click", () => {
  controller.abort();
  console.log("IdleDetector is stopped.");
});
```

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}
