---
title: Publicando seu site
slug: Learn/Getting_started_with_the_web/Publishing_your_website
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn/Getting_started_with_the_web/JavaScript_basics", "Learn/Getting_started_with_the_web/How_the_Web_works", "Learn/Getting_started_with_the_web")}}

Uma vez que você tenha acabado de escrever seu código e organizar os arquivos que compõem seu site, você precisa disponibilizar tudo isso online para que as pessoas possam achá-lo. Este artigo mostra como colocar online seu código de amostra simples com o mínimo de esforço.

## Quais são as opções?

Publicar um site não é um tópico simples, principalmente porque há muitas maneiras diferentes de fazê-lo. Nesse artigo, nós não pretendemos documentar todos os métodos possíveis. Em vez disso, nós discutiremos os prós e contras de três estratégias do ponto de vista de um iniciante, e então o guiaremos por um método que irá funcionar por enquanto.

### Conseguindo uma hospedagem e um nome de domínio

Para ter mais controle sobre o conteúdo e a aparência do site, a maioria das pessoas escolhe comprar hospedagem na web e um nome de domínio:

- Hospedagem é um espaço para arquivos alugado no [servidor](/pt-BR/docs/Learn/Common_questions/o_que_e_um_web_server) de uma compania de hospedagem. O servidor disponibiliza o conteúdo do site para os usuários que o visitam.
- Um [nome de domínio](/pt-BR/docs/Learn/Common_questions/What_is_a_domain_name) é o endereço único onde pessoas encontram seu site, como `http://www.mozilla.org`, ou `http://www.bbc.co.uk`. Você aluga seu nome de domínio por tantos anos quanto desejar por meio de um **registrador de domínio**.

Muitos sites profissionais ficam online dessa maneira.

Você vai precisar ainda de um programa de {{Glossary("FTP", "Protocolo de Transferência de Arquivos (FTP)")}} (veja [Quanto custa: software](/pt-BR/docs/Learn/Common_questions/Quanto_custa_fazer_algo_web#Software) para mais detalhes) para transferir os arquivos do site ao servidor. Programas FTP variam, mas geralmente você tem que logar no servidor usando detalhes fornecidos por sua empresa de hospedagem (ex. nome de usuário, senha, nome de host). Então, o programa mostra para você os arquivos locais e do servidor em duas janelas, para que você possa transferí-los ao servidor e de volta para o computador:

![](ftp.jpg)

#### Dicas para encontrar hospedagem e domínios

- Nós não promovemos empresas de hospedagem comercial ou para registro de nome de domínio. Para encontrar empresas de hospedagem e registradores de domínio, basta procurar por "hospedagem web" e "nomes de domínio". Todos os registradores terão um recurso para permitir que você verifique se o nome de domínio desejado está disponível.
- Seu {{Glossary("ISP", "provedor de serviço de internet")}} local ou empresarial pode fornecer uma hospedagem limitada para um site pequeno. O conjunto de recursos disponíveis será limitado, mas pode ser perfeito para seus primeiros experimentos — entre em contato com eles e pergunte!
- Há alguns serviços disponíveis gratuitamente, como [Neocities](https://neocities.org/), [Blogspot](https://www.blogger.com) e [Wordpress](https://wordpress.com/). Às vezes, você recebe o que paga, mas às vezes esses recursos são bons o suficiente para suas experiências iniciais.
- Muitas empresas fornecem hospedagem e registro de domínio.

### Usando uma ferramenta online como Github ou Google App Engine

Algumas ferramentas permitem que você publique seu site online:

- [Github](https://github.com/) é um site de "codificação social". Ele permite que você faça upload de repositórios de código para armazenamento no **sistema de controle de versão** [Git](http://git-scm.com/)**.** Você pode então colaborar em projetos de código, e o sistema é open-source por padrão, o que significa que todo mundo pode encontrar seu código Github, usá-lo, aprender com ele e se aprimorar. O Gitub tem um recurso muito útil chamado [GitHub Pages](https://pages.github.com/), que permite expor o código do site ao vivo na web.
- O [Google App Engine](https://cloud.google.com/appengine/) é uma plataforma poderosa que permite criar e executar aplicativos na infraestrutura do Google, seja para criar um aplicativo da Web de várias camadas a partir do zero ou para hospedar um site estático. Veja [Como você hospeda seu website no Google App Engine?](/pt-BR/docs/Learn/Common_questions/Como_voce_hospeda_seu_site_Google_App_Engine) Para maiores informações.

Diferente da maioria das hospedagens, essas ferramentas geralmentre são gratuitas, mas você tem um conjunto limitado de recursos.

### Usando uma IDE baseada na web como o CodePen

Há um número grande de web apps que emulam um ambiente de desenvolvimento de site, permitindo a você escrever HTML, CSS e JavaScript e então expor o resultado renderizado como em um site — tudo em uma aba do navegador! Falando de forma genérica, essas ferramentas são fáceis, boas para aprender e gratuitas (para recursos básicos), e elas geralmente hospedam sua página em um endereço único na web. No entanto, os recursos são limitados e esses aplicativos geralmente não provêem espaço de hospedagem para recursos (como imagens).

Tente codificar com alguns desses exemplos, e veja qual se encaixa melhor para você:

- [JSFiddle](http://jsfiddle.net/)
- [Thimble](https://thimble.mozilla.org/pt-BR/)
- [JSBin](http://jsbin.com/)
- [CodePen](https://codepen.io/)

![](jsbin-screen.png)

## Publicando via Github

Agora vamos mostrar como publicar seu site facilmente por meio das páginas do GitHub.

1. Primeiro de tudo, [inscreva-se no GitHub](https://github.com) e verifique seu e-mail.
2. Em seguida, você precisa [criar um repositório](https:/github.com/new) para colocar seus arquivos.
3. Nesta página, na caixa _Repository name_ (nome do repositório), digite username.github.io, onde _username_ é o seu nome de usuário. Então, por exemplo, nosso amigo bobsmith entraria em bobsmith.github.io. Além disso, marque _Initialize this repository with a README_ (inicializar este repositório com um README) e então clique em _Create repository_ (Criar repositório).
4. ![](github-create-repo.png)
5. Arraste e solte o conteúdo da pasta do site no seu repositório e clique em _Commit changes_ (confirmar alterações).

   > **Nota:** Nota: Certifique-se que sua pasta possui um arquivo `index.html`.

6. Navegue em seu navegador até _username_.github.io para ver seu site online. Por exemplo, para o usuário _chrisdavidmills_, vá para [_chrisdavidmills_.github.io](http://chrisdavidmills.github.io/).

> **Nota:** Nota: Pode levar alguns minutos para seu site ficar online. Se ele não funcionar imediatamente, talvez seja necessário aguardar alguns minutos e tentar novamente.

Para aprender mais, consulte a [Ajuda do Github Pages](https://help.github.com/en/categories/github-pages-basics) (em inglês).

## Leitura complementar

- [O que é um servidor web](/pt-BR/docs/Learn/Common_questions/o_que_e_um_web_server)
- [Entendendo nomes de domínio](/pt-BR/docs/Learn/Common_questions/What_is_a_domain_name)
- [Quanto custa fazer algo na web?](/pt-BR/docs/Learn/Common_questions/Quanto_custa_fazer_algo_web)
- [Publicar um site](https://www.codecademy.com/learn/deploy-a-website): Um bom tutorial da Codecademy que vai um pouco além e mostra algumas técnicas adicionais.
- [Hospedagem baratas ou gratuitas de sites estáticos](https://alignedleft.com/resources/cheap-web-hosting), por Scott Murray, tem algumas idéias úteis sobre serviços disponíveis.

{{PreviousMenuNext("Learn/Getting_started_with_the_web/JavaScript_basics", "Learn/Getting_started_with_the_web/How_the_Web_works", "Learn/Getting_started_with_the_web")}}
