---
title: StorageManager
slug: Web/API/StorageManager
---

{{securecontext_header}}{{SeeCompatTable}}{{APIRef("Storage")}}

**`StorageManager`** é uma inteface da [Storage API](/pt-BR/docs/Web/API/Storage_API) que fornece uma interface para controlar as permissões de gravações e estima o espaço disponível. Você pode obter a referência desta interface usando {{domxref("navigator.storage")}} ou {{domxref("WorkerNavigator.storage")}}.

## Métodos

- {{domxref("StorageManager.estimate()")}} {{securecontext_inline}}
  - : Retorna um objeto {{domxref("StorageEstimate")}} contendo números de uso e cota para sua origem.
- {{domxref("StorageManager.persist()")}} {{securecontext_inline}}
  - : Retorna uma {{jsxref('Promise')}} que resolve como `true` se o agente de usuário for capaz de gravar o armazenamento do seu site.
- {{domxref("StorageManager.persisted()")}} {{securecontext_inline}}
  - : Retorna uma {{jsxref('Promise')}} que resolve como `true` se alguma gravação já foi concedida para o armazenamento do seu site.

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}
