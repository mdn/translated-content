---
title: Solucionando problemas de erros de KumaScript
slug: orphaned/MDN/Tools/KumaScript/Troubleshooting
---

{{MDNSidebar}}

Erros de [KumaScript](/pt-BR/docs/MDN/Kuma/Introduction_to_KumaScript) aparecendo numa página podem ser muito desagradáveis aos leitores, mostrando grandes e medonhas caixas vermelhas, mas felizmente qualquer pessoa com uma conta MDN pode editar um documento e consertar tais tipos de erros. Quando uma página possui algum erro, ela é adicionada na lista de [documentos com erros](/docs/with-errors). Editores do site passam por essa lista regularmente para achar e consertar erros. Este artigo detalha os quatro tipos de erros de KumaScript, e alguns passos que você pode fazer para consertá-los.

## Erro tipo _DocumentParsingError_

`DocumentParsingError` erros aparecem quando o KumaScript tem problemas para entender alguma coisa no próprio documento. A causa mais comum é um erro de sintaxe em alguma [macro](/pt-BR/docs/MDN/Contribute/Content/Macros).

Verifique:

- Uso de chaves sem a intenção de chamar uma macro.
  - : Se você pretende escrever \\{ num documento sem usar macro, você pode escapar as chaves com uma barra invertida \ da seguinte forma: `\\{`
- Uso de caractére especial nos parâmetros de uma macro.
  - : Se você pretende usar aspas duplas " ou barra invertida \ dentro de algum parâmetro para uma macro, eles podem ser escapados através de uma barra invertida \ da seguinte forma: `\\` or `\"`
- Falta de vírgula para separar parâmetros de macro.
  - : Parâmetros de macro precisam ser separados por uma vírgula (,) exceto no último parâmetro (ou se for único); por exemplo `\{\{compat("html.elements.link", 2)}}`.
- Tags HTML aparecendo dentro de uma chamada de macro
  - : Se você aplicar estilos a uma macro, geralmente não irá funcionar, pois uma tag `</code>` pode aparecer dentro do código fonte da macro, causado erros de sintaxe na macro. Verifique a visão de código-fonte para ver o código que foi gerado, e remova qualquer estilo desnecessário.

## Erro tipo _TemplateLoadingError_

`TemplateLoadingError` erros aparecendo quando um KumaScript tem problemas de encontrar qual [macro](/pt-BR/docs/MDN/Contribute/Content/Macros) incluir numa página.

Verifique:

- Nomes com erro ortográfico ou macros renomeadas.
  - : Você pode ver a lista de macros conhecidas no [Repositório do Github](https://github.com/mdn/kumascript/tree/master/macros).

> **Nota:** **Dica:** Você pode tornar mais rápido e fácil avançar para uma macro específica adicionando uma [busca por palavras-chave](http://kb.mozillazine.org/Using_keyword_searches) no Firefox. Veja [Using search keywords to open template pages](/pt-BR/docs/MDN/Contribute/Tools/KumaScript#using_search_keywords_to_open_template pages) para um guia passo-a-passo de criar uma busca para isso.

## Erro tipo _TemplateExecutionError_

`TemplateExecutionError` erros aparecem quando KumaScript encontra erros na macro. Esses erros só podem ser consertados por usuários administradores e precisam ser reportados como _bugs_.

Antes de reportar um erro, verifique se ele ainda não foi consertado. Você pode fazer isso forçando o KumaScript a te dar uma cópia fresca da página segurando <kbd>Shift</kbd> enquanto atualiza a página (<kbd>Shift</kbd> + <kbd>Ctrl</kbd> + <kbd>R</kbd> no Windows/Linux, <kbd>Shift</kbd> + <kbd>Cmd</kbd> + <kbd>R</kbd> no Mac).

Se os erros persistirem, [reporte um _bug_](https://bugzilla.mozilla.org/enter_bug.cgi?product=Mozilla_Developer_Network&component=General#h=detail|bug), incluindo a URL da página e o texto do erro.

## Erro tipo _Error_ & _Unknown_

Este é um tipo de erro que aparece quando o erro não pertence aos outros tipos de erros.

Verifique se existe alguma solução de contorno ou correção para o problema e reporte _bugs_ persistentes como descrito em [TemplateExecutionError](#TemplateExecutionError).
