---
title: Deixando seu site seguro
slug: Web/Security/Practical_implementation_guides
original_slug: Web/Security/Securing_your_site
---

Há várias coisas que você pode fazer para ajudar na segurança do seu site. Esse artigo oferece uma série de sugestões, bem como links para outros artigos fornecendo informações mais úteis.

> [!NOTE]
> Esse artigo é um trabalho em progresso e não está nem completo nem as sugestões a seguir irão garantir que seu site será completamente seguro.

## Segurança da informação do usuário

- [Como desligar o formulário de preenchimento automático](/pt-BR/How_to_Turn_Off_Form_Autocompletion)
  - : Campos de formulário têm preenchimento automático no Gecko, isto é, seus valores podem ser lembrados e automaticamente trazidos de volta na próxima vez que o usuário visitar seu site. Para certos tipos de dados, você pode querer desativar essa funcionalidade.
- [Privacidade e o seletor :visited](/pt-BR/docs/CSS/Privacy_and_the_:visited_selector)
  - : Esse artigo discute mudanças feitas no método `getComputedStyle()` que eliminam a habilidade de sites maliciosos de descobrir o histórico do navegador de usuários.

## Segurança de conteúdo

- [Configurar corretamente os tipos de MIME do servidor](/pt-BR/Properly_Configuring_Server_MIME_Types)
  - : Há várias formas para que tipos incorretos de MIME causem potenciais problemas de segurança no seu site. Esse artigo explica alguns deles e mostra como configurar seu servidor para fornecer arquivos com os tipos corretos de MIME.
- [HTTP Strict Transport Security](/pt-BR/docs/Security/HTTP_Strict_Transport_Security)
  - : O cabeçalho [HTTP](/pt-BR/HTTP) `Strict-Transport-Security:` permite a um site especificar que somente pode ser acessado usando HTTPS.
- [Controle de acesso HTTP](/en-US/HTTP_access_control)
  - : O padrão _Cross-Origin Resource Sharing_ fornece uma forma de especificar qual conteúdo pode ser carregado de outros domínios. Você pode usar isso para prevenir seu site de ser usado impropriamente; além disso, você pode usá-lo para estabelecer recursos que outros sites são expressamente permitidos de usar.
- [Política de Segurança de Conteúdo](/pt-BR/docs/Security/CSP)
  - : Uma camada de segurança adicionada que ajuda a detectar e evitar certos tipos de ataques, incluindo _Cross Site Scripting_ (XSS) e ataques de injeção de dados. Esses ataques são usado para tudo, desde roubo de dados até desfiguração de página ou distribuição de malware.
- [O cabeçalho de resposta X-FRAME-OPTIONS](/pt-BR/docs/Web/HTTP/Headers/X-Frame-Options)
  - : O cabeçalho de resposta [HTTP](/pt-BR/HTTP) `X-Frame-Options:` pode ser usado para indicar se um navegador deve ser autorizado a renderizar uma página ou não em um elemento {{ HTMLElement("frame") }}. Sites podem usar isso para evitar ataques do tipo _clickjacking_, garantindo que seus conteúdos não estão embutidos em outros sites.
- [Deixando seu site seguro usando o Htaccess](https://wparena.com/how-to-secure-and-protect-wordpress-website-through-htaccess-file/)
  - : Aprenda a melhor maneira e quase todos os truques para deixar seu site seguro usando o arquivo .htaccess. Você pode colocar endereços IPs em _blacklists_, restringir o acesso a certas áreas do website, proteger diferentes arquivos, proteger contra _hotlink_ de imagens e muito mais.

## Veja também

- [Projeto Open Web Application Security (OWASP)](http://www.owasp.org/)
