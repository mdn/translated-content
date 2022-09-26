---
title: 'Tutorial Django: Website da Biblioteca Local'
slug: Learn/Server-side/Django/Tutorial_local_library_website
tags:
  - Artigo
  - Guía
  - Iniciante
  - Tutorial
  - django
translation_of: Learn/Server-side/Django/Tutorial_local_library_website
original_slug: Learn/Server-side/Django/Tutorial_website_biblioteca_local
---
<div>{{LearnSidebar}}</div>

<div>{{PreviousMenuNext("Learn/Server-side/Django/development_environment", "Learn/Server-side/Django/skeleton_website", "Learn/Server-side/Django")}}</div>

<p class="summary">O primeiro artigo da nossa série de tutoriais práticos explica o que você irá aprender, e fornece uma visão do site de exemplo "biblioteca local" que estaremos trabalhando e evoluindo em artigos seguintes.</p>

<table class="learn-box standard-table">
 <tbody>
  <tr>
   <th scope="row">Pré-requisitos:</th>
   <td>Ler a <a href="/pt-BR/docs/Learn/Server-side/Django/Introduction">introdução ao Django</a>. Para os próximos artigos você também necessitará ter montando o <a href="/pt-BR/docs/Learn/Server-side/Django/development_environment">ambiente de desenvolvimento</a> para o Django.</td>
  </tr>
  <tr>
   <th scope="row">Objetivo:</th>
   <td>Introduzir o exemplo da aplicação usado neste tutorial, e permitir que os leitores entendam quais tópicos serão abordados.</td>
  </tr>
 </tbody>
</table>

<h2 id="Visão_geral">Visão geral</h2>

<p>Bem vindo ao tutorial Django "Biblioteca Local" do MDN, no qual desenvolveremos um website que pode ser usado para gerenciar um catálogo para uma biblioteca local.</p>

<p>Nessa série de artigos você irá:</p>

<ul>
 <li>Usar as ferramentas do Django para criar a estrutura de um website e aplicação.</li>
 <li>Começar e parar o servidor de desenvolvimento.</li>
 <li>Criar models para representar os dados da aplicação.</li>
 <li>Usar o <em>admin</em> do Django para popular os dados do seu site.</li>
 <li>Criar <em>views </em>para recuperar dados específicos em resposta a diferentes requisições, e <em>templates</em> para renderizar os dados como HTML para serem exibidos no navegador.</li>
 <li>Criar <em>mappers</em> para associar diferentes padrões de URL com as<em>views</em> específicas.</li>
 <li>Adicionar autorização de usuário e sessões para controlar o comportamento e acesso do site.</li>
 <li>Trabalhar com formulários.</li>
 <li>Criar teste de código para a sua aplicação.</li>
 <li>Usar a segurança do Django de forma eficaz.</li>
 <li>Implantar sua aplicação para produção. </li>
</ul>

<p>Você já aprendeu alguns desses tópicos e passou brevemente por outros. Até o final dessa série de tutoriais você deve saber o suficiente para desenvolver uma aplicação simples em Django sozinho.</p>

<h2 id="Website_da_Biblioteca_Local_-_LocalLibrary">Website da Biblioteca Local - LocalLibrary</h2>

<p><em>LocalLibrary</em> é o nome do site que vamos criar e evoluir ao longo dessa série de tutoriais. Como seria de esperar, a proposta do site é fornecer um catálogo online para uma pequena biblioteca local, onde os usuários podem procurar por livros disponíveis e gerenciar suas contas.</p>

<p>Esse exemplo foi cuidadosamente escolhido porque escalar para mostrar quanto detalhe precisamos, muito ou pouco, e pode ser usado para mostrar quase qualquer recurso do Django. Mais importante ainda, nos permite fornecer um caminho <em>guiado</em> através da funcionalidade mais importante do estrutura web do Django:</p>

<ul>
 <li>Nos primeiros tutoriais, vamos definir uma biblioteca simples de <em>navegação exclusiva</em> que os membros podem usar para procurar quais livros estão disponíveis. Isso nos permite explorar operações simples que são comuns para quase todos os sites: leitura e exibição de conteúdo de um banco de dados</li>
 <li>Conforme formos progredindo, o exemplo da biblioteca irá (naturalmente) se estender para demonstrar recursos mais avançados do Django. Nós podemos expandir a biblioteca, por exemplo, para permitir que usuários reservem livros, e usar isto para demonstrar como usar formulários e suporte a autenticação de usuários.</li>
</ul>

<p>Embora este seja um exemplo extenso, ele é chamado Biblioteca<strong> Local</strong> por uma razão - nós esperamos mostrar o mínimo de informação necessária para ajudar a desenvolver e executar uma aplicação com o Django rapidamente. Como resultado nós armazenaremos informações sobre livros, seus exemplares, autores e outras informações chave. Contudo, nós não armazenaremos informações sobre outros itens que uma biblioteca pode utilizar, ou fornecer a infraestrutura necessária para dar suporte a sites multi-biblioteca ou outros recursos do tipo "grande biblioteca".</p>

<h2 id="Onde_posso_obter_o_código_fonte">Onde posso obter o código fonte?</h2>

<p>Na medida em que você avança com o tutorial, nós forneceremos os fragmentos de código apropriados para que você possa copiá-los e colá-los em cada ponto. Também existirão outros códigos que você estenderá por conta própria (com alguma orientação).</p>

<p>Se você travar, a versão completa do website pode ser encontrada<a href="https://github.com/mdn/django-locallibrary-tutorial"> aqui no Github</a>.</p>

<h2 id="Resumo">Resumo</h2>

<p>Agora que você sabe um pouco mais sobre o website <em>LocalLIbrary</em> e o que você irá aprender, é hora de começar a criar um <a href="/pt-BR/docs/Learn/Server-side/Django/skeleton_website">escopo do projeto</a>.</p>

<p>{{PreviousMenuNext("Learn/Server-side/Django/development_environment", "Learn/Server-side/Django/skeleton_website", "Learn/Server-side/Django")}}</p>



<h2 id="Neste_módulo">Neste módulo</h2>

<ul>
 <li><a href="/pt-BR/docs/Learn/Server-side/Django/Introduction">Introdução ao Django</a></li>
 <li><a href="/pt-BR/docs/Learn/Server-side/Django/development_environment">Configurando um ambiente de desenvolvimento Django</a></li>
 <li><a href="/pt-BR/docs/Learn/Server-side/Django/Tutorial_local_library_website">Tutorial Django: Website de uma Biblioteca Local</a></li>
 <li><a href="/pt-BR/docs/Learn/Server-side/Django/skeleton_website">Tutorial Django Parte 2: Criando a base do website</a></li>
 <li><a href="/pt-BR/docs/Learn/Server-side/Django/Models">Tutorial Django Parte 3: Usando models</a></li>
 <li><a href="/pt-BR/docs/Learn/Server-side/Django/Admin_site">Tutorial Django Parte 4: Django admin site</a></li>
 <li><a href="/pt-BR/docs/Learn/Server-side/Django/Home_page">Tutorial Django Parte 5: Criando nossa página principal</a></li>
 <li><a href="/pt-BR/docs/Learn/Server-side/Django/Generic_views">Tutorial Django Parte 6: Lista genérica e detail views</a></li>
 <li><a href="/pt-BR/docs/Learn/Server-side/Django/Sessions">Tutorial Django Parte 7: Framework de Sessões</a></li>
 <li><a href="/pt-BR/docs/Learn/Server-side/Django/Authentication">Tutorial Django Parte 8: Autenticação de Usuário e permissões</a></li>
 <li><a href="/pt-BR/docs/Learn/Server-side/Django/Forms">Tutorial Django Parte 9: Trabalhando com formulários</a></li>
 <li><a href="/pt-BR/docs/Learn/Server-side/Django/Testing">Tutorial Django Parte 10: Testando uma aplicação web Django</a></li>
 <li><a href="/pt-BR/docs/Learn/Server-side/Django/Deployment">Tutorial Django Parte 11: Implantando Django em produção</a></li>
 <li><a rel="nofollow" title="A página ainda não foi criada.">Segurança de aplicações web Django</a></li>
 <li><a href="/pt-BR/docs/Learn/Server-side/Django/django_assessment_blog">DIY Django mini blog</a></li>
</ul>
