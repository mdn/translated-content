---
title: Introdução aos protocolos WebRTC
slug: Web/API/WebRTC_API/Protocols
---

{{DefaultAPISidebar("WebRTC")}}

Este artigo apresenta os protocolos sobre os quais a API WebRTC é construída.

## ICE

[Interactive Connectivity Establishment (ICE)](http://en.wikipedia.org/wiki/Interactive_Connectivity_Establishment) é a estrutura que permite seu navegador web se conectar com outras pessoas. Existem muitas razões pelas quais uma conexão direta do Ponto A para o Ponto B simplesmente não funciona. Ele precisa ignorar firewalls que impediriam a abertura de conexões, fornecer um endereço exclusivo, como na maioria das situações, caso seu dispositivo não tiver um endereço IP público e retransmitir dados por meio de um servidor ou se seu roteador não permitir a conexão direta com seus pares . O ICE usa servidores STUN e / ou TURN para fazer isso, conforme descrito abaixo.

## STUN

[Session Traversal Utilities for **NAT** (STU**N**)](http://en.wikipedia.org/wiki/STUN) (sigla dentro de uma sigla) é um protocolo para descobrir seu endereço público e determinar quaisquer restrições em seu roteador que poderiam impedir uma conexão direta com um par.

O cliente enviará uma solicitação a um servidor STUN na Internet que responderá com o endereço público do cliente e se o cliente está ou não acessível por meio do NAT do roteador.

![An interaction between two users of a WebRTC application involving a STUN server.](webrtc-stun.png)

## NAT

[Network Address Translation (NAT)](https://en.wikipedia.org/wiki/Network_address_translation) é usado para dar ao seu dispositivo um endereço IP público. Um roteador terá um endereço IP público e cada dispositivo conectado ao roteador terá um endereço IP privado. As solicitações serão traduzidas do IP privado do dispositivo para o IP público do roteador com uma porta exclusiva. Dessa forma, você não precisa de um IP público exclusivo para cada dispositivo, mas ainda pode ser descoberto na Internet.

Alguns roteadores terão restrições sobre quem pode se conectar a dispositivos na rede. Isso pode significar que, embora tenhamos o endereço IP público encontrado pelo servidor STUN, ninguém pode criar uma conexão. Nesta situação, precisamos voltar para TURN.

## TURN

Alguns roteadores que usam NAT empregam uma restrição chamada 'Symmetric NAT' (_NAT simétrico_). Isso significa que o roteador só aceitará conexões de pares aos quais você já se conectou.

[Traversal Using Relays around NAT (TURN)](http://en.wikipedia.org/wiki/TURN) destina-se a contornar a restrição de NAT simétrico abrindo uma conexão com um servidor TURN para que ele re-transmita toda informação. Você criaria uma conexão com um servidor TURN e avisaria a todos os pares (_peers_) para enviar pacotes para este servidor, que lhe encaminharia. Isso obviamente vem com alguma sobrecarga, então só é usado se não houver outras alternativas.

![An interaction between two users of a WebRTC application involving STUN and TURN servers.](webrtc-turn.png)

## SDP

[Session Description Protocol (SDP)](http://en.wikipedia.org/wiki/Session_Description_Protocol) é um padrão para descrever o conteúdo multimídia da conexão, como resolução, formatos, codecs, criptografia, etc., para que os dois pontos possam se entender uma vez que os dados estejam sendo transferidos. Em essência, são os metadados que descrevem o conteúdo e não o conteúdo da mídia em si.

Tecnicamente, então, SDP não é realmente um protocolo, mas um formato de dados usado para descrever a conexão que compartilha mídia entre dispositivos.

A documentação do SDP está bem fora do escopo desta documentação; no entanto, existem algumas coisas que vale a pena observar aqui.

### Estrutura

O SDP consiste em uma ou mais linhas de texto UTF-8, cada uma começando com um tipo de um caractere, seguido por um sinal de igual ("="), seguido por um texto estruturado contendo um valor ou descrição, cujo formato depende do tipo. As linhas de texto que começam com uma determinada letra são geralmente chamadas de "letter-lines" (_"linhas de letras"_). Por exemplo, as linhas que fornecem descrições de mídia têm o tipo "m", portanto, essas linhas são chamadas de "linhas m".

### Para mais informações

Para saber mais sobre o SDP, consulte os seguintes recursos úteis:

- Especificação: {{RFC(4566, "SDP: Session Description Protocol")}}
- [IANA registry of SDP parameters](https://www.iana.org/assignments/sip-parameters/sip-parameters.xhtml)
