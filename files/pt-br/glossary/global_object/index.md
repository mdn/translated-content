---
title: Global object
slug: Glossary/Global_object
---

Um objeto global é um {{Glossary("objeto")}} que sempre está definido no {{Glossary("escopo global")}}.

Em JavaScript, um objeto global é sempre definido. No browser, quando scripts criam variáveis globais, elas são criadas como membros desse objeto global (Em {{Glossary("Node.js")}} isso não se aplica). A {{Glossary("interface")}} do objeto global depende do contexto de execução no qual o script está sendo executado. Por exemplo:

- Num navegador, qualquer código que o script não inicie especificamente como uma tarefa em background, tem um {{domxref("Window")}} como seu objeto global. Isto se aplica para a vasta maioria dos códigos JavaScript na Web.
- Códigos rodando num {{domxref("Worker")}} tem um objeto {{domxref("WorkerGlobalScope")}} como seu objeto global.
- Scripts que executam no {{Glossary("Node.js")}} tem um objeto [`global`](https://nodejs.org/api/globals.html#globals_global) como seu objeto global.
