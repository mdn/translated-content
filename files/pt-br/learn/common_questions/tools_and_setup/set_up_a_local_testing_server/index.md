---
title: Como configurar um servidor de testes local
slug: Learn/Common_questions/Tools_and_setup/set_up_a_local_testing_server
---

Este artigo explica como configurar um simples servidor de testes local em seu computador e o básico para utiliza-lo.

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">Pré-requisitos:</th>
      <td>
        <p>
          Primeiro você precisa saber
          <a
            href="https://developer.mozilla.org/pt-BR/docs/Learn/Common_questions/Como_a_internet_funciona"
            >como a internet funciona</a
          >
          e
          <a
            href="https://developer.mozilla.org/pt-BR/docs/Learn/Common_questions/o_que_e_um_web_server"
            >o que é um servidor Web</a
          >.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Objetivo:</th>
      <td>Você vai aprender como configurar um servidor de testes local.</td>
    </tr>
  </tbody>
</table>

## Arquivos locais vs. arquivos remotos

Ao longo da maior parte da área de aprendizagem, nós lhe dissemos apenas para abrir seus exemplos diretamente no navegador — Isto pode ser feito atráves de um duplo clique no arquivo HTML, arrastando e soltando o arquivo na janela do navegador ou escolhendo Arquivo > Abrir*...* e navegando para o arquivo HTML. Existem muitas maneiras de realizar isso.

Se o caminho do endereço web começa com `file://` seguido pelo caminho para o arquivo no seu disco rígido local, um arquivo local está sendo utilizado. No entanto, se você ver um dos nossos exemplos hospedado no GitHub (ou um exemplo em algum outro servidor remoto), o endereço web começará com `http://` ou `https://`, para mostrar que o arquivo foi recebido via HTTP.

## O problema com o teste de arquivos locais

Alguns exemplos não serão executados se você os abrir como arquivos locais. Isto pode ser devido a uma série de razões, sendo o mais provável:

- **Eles apresentam requisições assíncronas**. Alguns navegadores (incluindo o Chrome) não executarão requisições assíncronas (consulte [Buscando dados no servidor](/pt-BR/docs/Aprender/JavaScript/Client-side_web_APIs/Buscando_dados)) se você simplesmente executar o exemplo de um arquivo local. Isso ocorre devido a restrições de segurança (para mais informações sobre segurança na web, leia [Segurança do site](/pt-BR/docs/Learn/Server-side/First_steps/Seguranca_site)).
- **Eles apresentam uma linguagem do site do servidor**. Linguagens do lado do servidor (como PHP ou Python) requerem um servidor especial para interpretar o código e entregar os resultados.

## Executando um servidor HTTP local simples

Para contornar o problema de requisições assíncronas, precisamos testar esses exemplos executando-os através de um servidor web local. Uma das maneiras mais fáceis de fazer isso para nossos propósitos é usar o módulo `SimpleHTTPServer` do Python.

Para fazer isso:

1. Instale o Python. Se você estiver usando Linux ou macOS, ele já deverá estár disponível em seu sistema. Se você é um usuário do Windows, pode obter um instalador na página inicial do Python e seguir as instruções para instalá-lo:

   - Vá para [python.org](https://www.python.org/) (em inglês)
   - Na seção Download, clique no link para Python "3.xxx".
   - Na parte inferior da página, escolha o instalador executável do _Windows x86_ e baixe-o.
   - Quando tiver baixado, execute-o.
   - Na primeira página do instalador, certifique-se de marcar a caixa de seleção "Adicionar Python 3.xxx ao PATH".
   - Clique em _Instalar_ e então, clique em _Fechar_ quando a instalação terminar.

2. Abra seu prompt de comando (Windows)/ terminal (macOS/ Linux). Para verificar se o Python está instalado, digite o seguinte comando:

   ```bash
   python -V
   ```

3. Isso deve retornar um número de versão. Se estiver tudo OK, navegue até o diretório em que seu exemplo está dentro, usando o comando `cd`.

   ```bash
   # incluir o nome do diretório para entrar, por exemplo
   cd Desktop
   # use dois pontos para voltar um nível de diretório se você precisar
   cd ..
   ```

4. Digite o comando para inicializar o servidor nesse diretório:

   ```bash
   # Se a versão do Python retornada acima for 3.X
   python3 -m http.server
   # No windows, tente "python" em vez de "python3"
   # Se a versão do Python retornada acima for 2.X
   python -m SimpleHTTPServer
   ```

5. Por padrão, isso executará o conteúdo do diretório em um servidor web local, na porta 8000. Você pode ir para esse servidor acessando a URL `localhost:8000` no seu navegador web. Aqui você verá o conteúdo do diretório listado — clique no arquivo HTML que você deseja executar.

> **Nota:** Se você já tiver algo em execução na porta 8000, você poderá escolher outra porta executando o comando do servidor seguido por um número de porta alternativo, por exemplo `python3 -m http.server 7800` (Python 3.x) ou `python -m SimpleHTTPServer 7800` (Python 2.x). Você pode acessar seu conteúdo em `localhost:7800`.

## Executando linguagens do lado do servidor localmente

Os módulos `SimpleHTTPServer (python 2.0)` e `http.server (python 3.0)` do Python são úteis, mas não sabem como executar código escrito em linguagens como Python, PHP ou JavaScript. Para lidar com isso, você precisará de algo mais — exatamente o que você precisa depende da linguagem do lado do servidor que você está tentando executar. Aqui estão alguns exemplos:

- Para executar o código Python no lado do servidor, você precisará usar um framework web em Python. Você pode descobrir como usar o framework Django lendo [Django Web Framework (Python)](/pt-BR/docs/Learn/Server-side/Django). O [Flask](http://flask.pocoo.org/) (em inglês) também é uma boa alternativa ao Django (um pouco menos pesada). Para executar isso, você precisará [instalar o Python/PIP](/pt-BR/docs/Learn/Server-side/Django/development_environment#Installing_Python_3) e em seguida, instalar o Flask usando `pip3 install flask`. Neste ponto, você deve ser capaz de executar os exemplos em Python com Flask usando, por exemplo `python3 python-example.py` e em seguida acessar `localhost:5000` no seu navegador.
- Para executar o código Node.js (JavaScript) no lado do servidor, você precisará usar o nó bruto ou uma estrutura construída sobre ele. Express é uma boa escolha — veja [Express Web Framework (Node.js/JavaScript)](/pt-BR/docs/Learn/Server-side/Express_Nodejs).
- Para executar o código PHP no lado do servidor, inicie o [servidor de desenvolvimento interno do PHP](https://www.php.net/manual/pt_BR/features.commandline.webserver.php):

```
cd path/to/your/php/code
php -S localhost:8000
```
