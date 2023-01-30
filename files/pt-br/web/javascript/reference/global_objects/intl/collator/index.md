---
title: Intl.Collator
slug: Web/JavaScript/Reference/Global_Objects/Intl/Collator
tags:
  - Class
  - Collator
  - Internationalization
  - Intl
  - JavaScript
  - Localization
  - Reference
browser-compat: javascript.builtins.Intl.Collator
translation_of: Web/JavaScript/Reference/Global_Objects/Intl/Collator
---

{{JSRef}}

O objeto **`Intl.Collator`** permite uma comparação de strings sensível a linguagem.

{{EmbedInteractiveExample("pages/js/intl-collator.html")}}

<!-- The source for this interactive example is stored in a GitHub repository. If you'd like to contribute to the interactive examples project, please clone https://github.com/mdn/interactive-examples and send us a pull request. -->

## Construtor

- {{jsxref("Intl/Collator/Collator", "Intl.Collator()")}}
  - : Cria um novo objeto `Collator`.

## Métodos estáticos

- {{jsxref("Intl/Collator/supportedLocalesOf", "Intl.Collator.supportedLocalesOf()")}}
  - : Retorna um array contendo as localizações (`locales`) providas que são suportados sem a necessidade de depender da localização padrão do runtime.

## Métodos de instância

- {{jsxref("Intl/Collator/compare", "Intl.Collator.prototype.compare")}}
	- : Função Getter que compara duas strings conforme a ordenação deste objeto {{jsxref("Global_Objects/Intl/Collator", "Intl.Collator")}}.
- {{jsxref("Intl/Collator/resolvedOptions", "Intl.Collator.prototype.resolvedOptions()")}}
	- : Retorna um novo objeto com as propriedades que refletem as opções de localização (`locale`) e agrupamento (`collation`) computadas durante a inicialização do objeto.
