---
title: Usando ARIA para rótulos com campos incorporados - Multipart labels
slug: Web/Accessibility/ARIA/Multipart_labels
---

## O problema

Você tem um formulário onde existe uma pergunta simples e a resposta é mencionada na própria questão. Um exemplo clássico, que todos nós conhecemos das configurações de nossos navegadores, é a colocação "Deletar o histórico após x dias". "Apagar o histórico após" está à esquerda da caixa de texto, x é o número, por exemplo, 21 e a palavra "dias" vem depois dessa caixa, formando uma sentença de fácil compreensão.

Se você está usando um leitor de tela tem que perceber que, quando vai para esta configuração no Firefox, escuta a pergunta "Deletar o histórico depois de 21 dias?", seguida por um aviso de que você está em uma caixa de texto contendo o número 21. Isso não é legal? Você não precisa navegar ao redor para descobrir a unidade. "Dias" pode, facilmente, ser "meses", ou "anos" em muitos diálogos comuns, não havendo maneira de descobrir, a não ser com comandos para reexaminar a tela.

A solução está em um atributo ARIA chamado **aria-labelledby** (_aria-etiqueta liderada por_). Seu parâmetro é uma cadeia de caracteres (_string_) que consiste de IDs dos elementos HTML que você quer concatenar em um único nome acessível.

Tanto o atributo **aria-labelledby**, como o **aria-describedby** (_aria-descrito por_), são especificados no elemento de formulário que será rotulado, por exemplo uma \<input>. Em ambas as situações, as ligações do controle da rotulagem _for/label_, que podem, também, estar presentes, serão substituídas pelo atributo **aria-labelledby**. Se você oferecer o atributo **aria-labelledby** em uma página HTML, então deve, da mesma forma, providenciar uma arquitetura de rótulo que vá, igualmente, apoiar os navegadores mais antigos, que ainda não têm suporte ARIA. Com Firefox 3, seus utilizadores cegos conseguem, automaticamente, melhor acessibilidade com o novo atributo, mas quem utiliza navegadores antigos não sofrerá abandono no escuro, desta forma.

Exemplo:

```html
<input
  aria-labelledby="labelShutdown shutdownTime shutdownUnit"
  type="checkbox" />
<span id="labelShutdown">Shut down computer after</span>
<input
  aria-labelledby="labelShutdown shutdownTime shutdownUnit"
  id="shutdownTime"
  type="text"
  value="10" />
<span id="shutdownUnit"> minutes</span>
```

## Uma nota para quem usa JAWS 8

O JAWS 8.0 tem a sua própria lógica para encontrar os _labels_ e isso o faz, sempre, substituir a caixa de texto com o _accessibleName_ que uma página HTML recebe. Quanto ao JAWS 8, **eu** ainda não encontrei uma maneira de fazê-lo aceitar o _label_ do exemplo acima. Mas o NVDA e o Window-Eyes fazem isso muito bem e a Orca, no Linux, também não apresenta problemas. (Os **autores** do artigo, são: [bunnybooboo](/pt-BR/profiles/bunnybooboo), [kscarfone](/pt-BR/profiles/kscarfone), [StephenKelly](/pt-BR/profiles/StephenKelly), [Kritz](/pt-BR/profiles/Kritz), [Fredchat](/pt-BR/profiles/Fredchat), [Sheppy](/pt-BR/profiles/Sheppy), [Aaronlev](/pt-BR/profiles/Aaronlev))

> **Nota:** TBD: adicione mais informação de compatibilidade

## Isto pode ser executado sem ARIA?

O membro da comunidade Ben Millard apontou, numa publicação em um blogue, que os controles podem ser embutidos nos _labels,_ como mostrado no exemplo acima, usando HTML 4, [controls can be embedded in labels as shown in the above example using HTML 4](http://projectcerbera.com/blog/2008/03#day24), simplesmente com a incorporação da entrada (_input_) no rótulo (_label_). Agradecemos pela informação, Ben! É muito útil e deixa claro que algumas técnicas que estão disponíveis há anos escapam, às vezes, até mesmo aos gurus. Esta técnica funciona em Firefox; entretanto, isso não é verdade para muitos outros navegadores, inclusive IE. Para _labels_ com controles de formulários embutidos o uso do atributo **aria-labelledby** ainda é a melhor abordagem.
