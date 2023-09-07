---
title: Degradação graciosa
slug: Glossary/Graceful_degradation
---

**Degradação graciosa** é uma filosofia de design centrada na tentativa de criar um site/aplicativo moderno que funcione nos navegadores mais recentes, mas recorre a uma experiência que, embora não tão boa, ainda oferece conteúdo e funcionalidade essenciais para os navegadores antigos.

{{Glossary("Polyfill","Polyfills")}} podem ser usados para criar com JavaScript recursos ausentes, mas alternativas aceitáveis para recursos como estilo e layout devem ser fornecidas sempre que possível, por exemplo, usando a cascata CSS ou o comportamento de HTML substituto. Alguns bons exemplos podem ser encontrados em [Handling common HTML and CSS problems](/pt-BR/docs/Learn/Tools_and_testing/Cross_browser_testing/HTML_and_CSS).

É uma técnica útil que permite aos desenvolvedores da Web se concentrarem no desenvolvimento dos melhores sites possíveis, uma vez que esses sites são acessados por vários user-agents desconhecidos.
{{Glossary("Progressive enhancement")}} está relacionado, mas é diferente - geralmente visto como na direção oposta à degradação graciosa. Na realidade, ambas as abordagens são válidas e geralmente podem se complementar.

1. [Graceful degradation](https://en.wikipedia.org/wiki/Graceful_degradation) on Wikipedia
2. [Handling common HTML and CSS problems](/pt-BR/docs/Learn/Tools_and_testing/Cross_browser_testing/HTML_and_CSS)
3. [Implementing feature detection](/pt-BR/docs/Learn/Tools_and_testing/Cross_browser_testing/Feature_detection)
4. [MDN Web Docs Glossary](/pt-BR/docs/Glossary)

   1. {{Glossary("Graceful degradation")}}
   2. {{Glossary("Polyfill")}}
   3. {{Glossary("Progressive enhancement")}}
