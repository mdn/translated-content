---
title: Melhores práticas
slug: Web/API/Push_API/Best_Practices
---

Este artigo proporciona um compilado das melhores práticas a serem usadas enquanto estiver desenvolvendo websites e aplicações que usem Notificações push para engajamento de usuários.

> "Se feito de uma maneira correta, as notificações ajudam os usuarios, se não, so irritam." — Conversa entre dois desenvolvedores a respeito da etica das notificações push.

## Visão Geral do _web push notifications_

_Notificações Web Push_ (criadas usando uma combinação das APIs de _[Notificações](/pt-BR/docs/Web/API/Notifications_API)_, _[Push](/pt-BR/docs/Web/API/Push_API)_ e _[Service Worker](/pt-BR/docs/Web/API/Service_Worker_API)_) são parte de um movimento crescente em que desenvolvedores e comerciantes estão usando para conseguir atenção para seus sites. Uma procura rápida pelo termo "_web push notifications_", irá resultar em vários artigos, em que especialistas em marketing que acreditam que deve-se usar a API de Push para recapturar a atenção de pessoas que saíram de seu site para que possam terminar o que estavam fazendo, por exemplo, uma compra, ou então enviar as últimas notícias e até recomendação de produtos

### O Lado obscuro

Essa novidade oferece uma oportunidade nova e inexplorada para sites empresariais chegarem aos seus consumidores finais. Seu usuário trocou de aba para responder um email? Consiga-os de volta com uma oferta que expira em um tempo limitado ou oferecendo frete grátis, o qual ele não vai poder ignorar

Mas sério, qual o melhor uso das notificações push? Ou é apenas uma nova interação dos bons e velhos pop-ups?

> "O envio de notificações push não corre o risco de acabar na pasta de spam. Nem pode ser bloqueado por bloqueadores de anúncios. Ele aparece na sua área de trabalho, mesmo quando o site está fechado. No celular, ele aparece na barra de notificações, assim como as notificações por push do aplicativo, mesmo quando o navegador não está em execução." — um site de marketing anonimo

### Bons usos das notificações

Mas há também um lado bom no que se diz respeito as notificações por push. Digamos que você e sua equipe usem normalmente um programa de bate-papo para se comunicar, mas hoje você está feliz e saltitante trabalhando e surge um problema. Digamos que seu gerente tenha encontrado um problema nas aprovações e queira receber seu feedback sobre algo antes que ela prossiga.

Neste documento, falaremos sobre o uso correto das notificações por push da web. Às vezes, eles podem eliminar a frustração e o aborrecimento e, às vezes, causá-los. Cabe a você, como desenvolvedor, fazer recomendações (e decisões) sábias sobre o uso de notificações por push.

## O que se espera alcançar com as notificações push?

Como tudo, com grande poder vem uma grande responsabilidade. Toda notificação push devem ser úteis e sensíveis ao tempo, o usuário sempre deve fornecer a permissão antes de recebe-la primeiro e deve-se oferecer uma maneira fácil de optar por não receber mais no futuro.

Temos que responder algumas perguntas basicas para verificar se as notificações são necessarias:

- Existe alguém esperando em tempo real por uma resposta? No exemplo acima, o gerente aguarda sua resposta e, portanto, uma notificação por push é apropriada.
- A atualização em tempo real é necessária? Eu uso um serviço que agrega diferentes fontes de notícias de mídia social. Quando uma história em que estou interessado está em alta, gostaria de receber uma notificação!
- Há notícias de última hora relevantes? É aqui que fica um pouco complicado. Às vezes, os sites de notícias solicitam notificações por push para que possam dizer "Olhe para mim! Olhe para mim!" Tudo se resume ao que o usuário deseja, e você pode usar o comportamento para determinar a interação. Por exemplo, se o usuário visualizar mais de um artigo ou permanecer na sua página por vários minutos, ele poderá estar interessado em receber atualizações.

Além da questão de saber se uma notificação por push é necessária, existem muitas variedades de notificações por push, variando de casual e efêmera a persistente e exigente.

Aconselhamos que você use as notificações que exigem uma interação de forma conciente e com moderação, pois estas podem irritar seu usuario e afasta-lo. Suas notificações devem ser acolhedoras, não hostis.

## Gerando confiança

Alguns estudos mostraram que até 60% das notificações por push não chegam ao usuário final. Permitir que seu usuario receba notificações por push em tempo real exige confiança, por parte do aplicativo. Você pode criar confiança ao ter um site bem projetado que forneça um bom conteúdo e que mostre respeito pelo usuário alem de um valor claro para que o usuario aceite as notificações push.

## Mitigações dos navegadores

Por causa dos abusos da utilização das notificações por push no passado, os desenvolvedores de navegadores começaram a implementar estratégias para ajudar a mitigar esse problema. Por exemplo, o Safari 12.1 agora exige - e outros navegadores já o fazem ou estão planejando[\[1\]](#mitigations-footnote-1) fazer—que o usuário interaja com a página de alguma forma antes que ela possa solicitar permissão para executar notificações por push, assim como já acontece com os popups. Isso pelo menos impede que o usuário receba espontaneamente essa pergunta em páginas da Web que apenas olharam de uma só vez, raramente ou nunca mais.

\[1] No caso do Firefox, veja [Erro do Firefox 1524619](https://bugzil.la/1524619), podemos observar que Firefox 68 implementa isso, desabilitado por padrão, usando a preferência `dom.webnotifications.requireuserinteraction`.

## Veja também

- [Notifications API](/pt-BR/docs/Web/API/Notifications_API)
- [Using the Notifications API](/pt-BR/docs/Web/API/Notifications_API/Using_the_Notifications_API)
- [Push API](/pt-BR/docs/Web/API/Push_API)
