---
title: Programação de site do lado do servidor
slug: Learn_web_development/Extensions/Server-side
original_slug: Learn/Server-side
---

{{LearnSidebar}}

O tópico de _**Websites Dinâmicos - Programação do lado do servidor**_ é uma série de módulos que mostram como criar sites dinâmicos; sites que fornecem informações personalizadas em resposta a solicitações HTTP. Os módulos fornecem uma introdução genérica à programação do lado do servidor, juntamente com guias específicos de nível iniciante sobre como usar os frameworks web Django (Python) e Express (Node.js / JavaScript) para criar aplicativos básicos.

A maioria dos principais sites utilizam algum tipo de tecnologia do lado do servidor para exibir dinamicamente dados diferentes conforme necessário. Por exemplo, imagine quantos produtos estão disponíveis na Amazon e imagine quantos posts foram escritos no Facebook? Exibir tudo isso usando páginas estáticas completamente diferentes seria completamente ineficiente, então, em vez disso, esses sites exibem modelos estáticos (construídos usando [HTML](/pt-BR/docs/conflicting/Learn_web_development/Core/Structuring_content_0e54a30456ec839b11e09e00670da56cde64ba985c2eb3da9b7805515585e95d), [CSS](/pt-BR/docs/conflicting/Learn_web_development/Core/Styling_basics), e [JavaScript](/pt-BR/docs/conflicting/Learn_web_development/Core/Scripting_785964b4c0711553d2bf3130baef052c6d78a03b4ce249eeb9d1ce2be1e3c308)), e então atualizam dinamicamente os dados exibidos dentro desses modelos quando necessário, por exemplo, quando você quiser ver um produto diferente na Amazon.

No mundo moderno do desenvolvimento web, aprender sobre o desenvolvimento do lado do servidor é altamente recomendado.

## Caminho de aprendizagem

Começar a usar a programação do lado do servidor geralmente é mais fácil do que com o desenvolvimento do lado do cliente, porque sites dinâmicos tendem a executar muitas operações similares (recuperando dados de um banco de dados e exibindo-os em uma página, validando dados inseridos pelo usuário e salvando-os em um banco de dados, verificando permissões de usuários e registrando usuários, etc.) e são construídos usando estruturas da Web que facilitam essas e outras operações comuns de servidor da Web.

Um conhecimento básico de conceitos de programação (ou de uma linguagem de programação específica) é útil, mas não essencial. Semelhantemente, a especialização em codificação do lado do cliente não é necessária, mas um conhecimento básico ajudará você a trabalhar melhor com os desenvolvedores criando seu "front end" da Web do lado do cliente.

Você precisará entender "como a web funciona". Recomendamos que você leia primeiro os seguintes tópicos:

- [O que é um servidor web?](/pt-BR/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_web_server)
- [Qual software eu preciso para construir um website?](/pt-BR/docs/Learn_web_development/Howto/Tools_and_setup/What_software_do_I_need)
- [Como você faz o upload de arquivos para um servidor web?](/pt-BR/docs/Learn_web_development/Howto/Tools_and_setup/Upload_files_to_a_web_server)

Com essa compreensão básica, você estará pronto para percorrer os módulos desta seção.

## Modulos

Este tópico contém os seguintes módulos. Você deve começar com o primeiro módulo e depois seguir para um dos módulos seguintes, que mostram como trabalhar com duas linguagens do lado do servidor muito populares usando estruturas da Web apropriadas.

- [Primeiros passos de programação do site do lado do servidor](/pt-BR/docs/Learn_web_development/Extensions/Server-side/First_steps)
  - : Este módulo fornece informações agnósticas sobre a tecnologia do servidor sobre programação de sites do lado do servidor, incluindo respostas a perguntas fundamentais de programação do lado do servidor — "o que é isso", "como ela difere da programação do lado do cliente", e "porque é tão útil" — e uma visão geral de alguns dos mais populares frameworks do lado do servidor e orientações sobre como selecionar o mais adequado para o seu site. Por fim, fornecemos uma seção introdutória sobre segurança do servidor da web.
- [Framework Web Django (Python)](/pt-BR/docs/Learn_web_development/Extensions/Server-side/Django)
  - : O Django é um framework web do lado do servidor extremamente popular e cheio de recursos, escrito em Python. O módulo explica por que o Django é uma estrutura de servidor da Web tão boa, como configurar um ambiente de desenvolvimento e como executar tarefas comuns com ele.
- [Framework Web Express (Node.js/JavaScript)](/pt-BR/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs)
  - : O Express é um framwork web popular, escrito em JavaScript e hospedado no ambiente de tempo de execução node.js. O módulo explica alguns dos principais benefícios dessa estrutura, como configurar seu ambiente de desenvolvimento e como executar tarefas comuns de desenvolvimento e implantação da web.
