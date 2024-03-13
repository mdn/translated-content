---
title: Event.stopImmediatePropagation()
slug: Web/API/Event/stopImmediatePropagation
---

{{APIRef("DOM")}}

Evita que outros _listeners_ escutem o evento.

## Sintaxe

```
event.stopImmediatePropagation();
```

## Notas

No caso de um evento onde vários _listeners_ o estão escutando, os mesmos são disparados na ordem em que foram adicionados. Porém, se durante uma chamada (ou disparo), `event.stopImmediatePropagation()` for chamado, os demais _listeners_ não serão disparados.

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}
