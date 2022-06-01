---
title: GitHub para iniciantes
slug: MDN/Contribute/GitHub_beginners
tags:
  - Boas práticas
  - Comunidade
  - GitHub
  - MDN
  - Iniciantes
---
{{MDNSidebar}}

[Git](https://git-scm.com/) e [GitHub](https://github.com/) são ferramentas desafiadoras para aprender e dominar, mas com alguns poucos comandos simples e alguns bons conselhos, você deve ser capaz de fazer o suficiente para contribuir para o MDN sem muitos problemas. O intuito deste artigo não é te ajudar a dominar Git ou GitHub, mas te dar o bastante para ser produtivo com eles em um nível básico e contribuir para o MDN.

Se você já está familiarizado com o básico de Git/GitHub, você provavelmente não vai aprender nada novo aqui, mas você ainda pode achar este artigo útil como uma referência. Existe uma [folha de dicas de GitHub](/pt-BR/docs/MDN/Contribute/GitHub_cheatsheet) disponível também, apenas com os comandos e sem as longas explicações.

## Conceitos essenciais

A seguir estão os conceitos essenciais que você deve se familiarizar para tirar o melhor do Git e GitHub.

- Git é uma ferramenta de _sistema de controle de versão_ — uma classe de ferramentas essenciais em qualquer fluxo de trabalho de desenvolvimento. Ela permite que um grupo de desenvolvedores trabalhe na mesma base de código sem atrapalhar uns aos outros, permite que desenvolvedores voltem para estados anteriores no código se for necessário, e mais.
- GitHub é uma aplicação web que provê ferramentas úteis com base no Git para trabalhar com armazenamento de bases de código, assim como espaço para armazenar bases de código no servidor. Suas funcionalidades são similares a de outras aplicações, como [GitLab](https://about.gitlab.com/) ou [Bitbucket](https://bitbucket.org/).
- Cada base de código é armazenada em um container chamado _repositório_, ou _repo_.
- Fazer mudanças em um repositório involve, minimamente:
  - Criar a sua própria cópia daquele repo (chamada _fork_).
  - Criar uma versão diferente do código no seu fork do repositório (chamada _branch_) e adicionar suas mudanças para aquela versão alternativa.
  - Propor que essa mudança seja feita na cópia original do repositório por meio de um _pull request_. Você vai aprender todos estes passos neste guia.

## Suposições feitas neste artigo

Este artigo assume que:

- Você já está confortável usando linha de comando/terminal. Se você é novo com linha de comando, leia nosso [Curso intensivo de linha de comando](/pt-BR/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line).
- Você está trabalhando em um sistema que entende linhas de comando no padrão Unix. O macOS/Linux já tem isto disponível; [O Windows não é tão simples](/pt-BR/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line#windows) nesta questão, mas existem ferramentas úteis para emular estas funcionalidades no Windows, assim como o Gitbash.
- Você vai usar a linha de comando para interagir com o Git/GitHub. Existem inúmeras ferramentas GUI disponíveis para Git e GitHub, mas não vamos trabalhar com elas neste guia.

## Setup inicial

Antes de você começar a trabalhar com algum repo específico, siga estes passos:

1. Instale o Git no seu computador. Vá para [a página de downloads do Git](https://git-scm.com/downloads), baixe a última versão no seu computador, e a instale. Se você é um usuário de Windows, você também deve instalar o pacote [Git para Windows](https://gitforwindows.org/), que inclui o Gitbash.
2. Enquanto isso, instale as outras dependências necessárias para trabalhar localmente com o MDN — [Node.js](https://nodejs.org/pt-br/download/) e [yarn](https://classic.yarnpkg.com/en/docs/install).

    1. Instale o Node.js seguindo os links acima e baixe e instale a última versão no seu computador.
    2. Depois de você instalar o Node.js, instale o yarn rodando o comando `npm install --global yarn`.

3. Crie um diretório separado em algum lugar no seu computador para armazenar os seus repos do Git, que seja fácil para encontrar e navegar na linha de comando. Um diretório chamado mdn-git dentro do seu diretório home/user serviria.
4. [Se cadastre no GitHub](https://github.com/join) se você ainda não tiver uma conta. Você vai precisar disto para contribuir nos repositórios do MDN.

### Configurando a autenticação SSH no GitHub

Agora, você precisa configurar uma chave SSH na sua conta do GitHub. Isto é basicamente um mecanismo de segurança que identifica você para o GitHub, e significa que você não vai ter que se autenticar todas as vezes para usar os serviços do GitHub.

O GitHub criou um guia útil para configurar isto — veja o ponto de partida em [Conectando no GitHub com SSH](https://docs.github.com/pt/github/authenticating-to-github/connecting-to-github-with-ssh). Siga cada um dos passos aqui para configurar o SSH no GitHub.

Se você não fizer isto, você ainda vai ser capaz de contribuir para o MDN, mas você vai ter que inserir seu usuário e senha toda vez que interagir com o GitHub (e.g. sempre que você submeter um pull request, como visto abaixo).

## Preparando-se para trabalhar em um repo específico

Existem inúmeros repos diferentes que você pode ter que atualizar conforme você trabalha em tarefas diferentes do MDN (veja [Onde está tudo no MDN? Um guia para nossos repositórios](/pt-BR/docs/MDN/Contribute/Where_is_everything)), mas existem alguns passos que você deve seguir em todos os repos que você trabalhar, para fazer as coisas serem mais fáceis e consistentes.

### Bifurcando e clonando

_Bifurcar_, geralmente mencionado como _criar um fork_ ou _forkar_, e _clonar_ são dois termos com os quais você vai se deparar frequentemente no mundo do Git:

- Bifurcar significa criar sua própria cópia de um repo no GitHub.
- Clonar significa fazer uma cópia local de um repositório para você trabalhar nela (i.e. no seu disco rígido local).

É possível fazer as duas coisas separadamente, mas na prática você quase sempre irá fazer os dois juntos quando estiver contribuindo nos projetos de outras pessoas. Primeiro, você deve fazer um fork de cada repo no qual você quer trabalhar. Isto é necessário para você submeter as alterações solicitadas para a versão principal do repo (nós vamos aprender a criar um pull request mais tarde). Por segurança, você não pode submeter alterações diretamente para a versão principal do repositório. Então para submeter as mudanças, primeiro faça o fork do repo principal, então envie as mudanças para o seu fork, e então crie um pull request para que as mudanças do seu fork sejam mescladas no repositório principal.

Vamos criar um fork do <https://github.com/mdn/content> agora mesmo; você definitivamente vai estar contribuindo para este repo em algum momento. Siga estes passos:

1.  Localize o botão Fork no canto superior direito da página do repo content, e clique nele:

    ![Botão rotulado fork, com o número 609 próximo a ele](fork-button.png)

2.  Uma janela modular vai aparecer, perguntando onde você quer fazer o fork do repo. Selecione sua conta pessoal do GitHub.

  Uma mensagem vai aparecer dizendo algo como "Bifurcando mdn/content. Isso deve levar apenas alguns segundos.". Uma vez que o GitHub tenha terminado de fazer o fork, seu browser deve redirecionar para a página do novo fork. Como um exemplo, meu fork do <https://github.com/mdn/content> está disponível em <https://github.com/chrisdavidmills/content>.

Agora que você criou o fork do repo, é hora de clonar o fork localmente. Para fazer isto:

1.  Vá para a página do fork em github.com (e.g. `https://github.com/<seu-nome-de-usuario>/content`). 
2.  Clique no botão verde "Code" no topo da lista de arquivos. Algo similar ao popup abaixo deve aparecer:

    ![Janela popup mostrando uma URL para clonar junto com opções para abrir com o GitHub desktop e baixar o zip](code-popup.png)

3.  Se você configurar a autenticação SSH como mostrado acima, clique na tab "SSH" e copie a URL `git@github.com:<seu-nome-de-usuario>/content.git` do campo de texto na caixa. Se você não configurou a autenticação SSH, ao invés disso copie a URL do campo de texto na tab "HTTPS", que deve ser parecida com esta: `https://github.com/<seu-nome-de-usuario>/content.git`.
4.  Agora abra a linha de comando no seu computador, e navegue para o diretório que você configurou anteriormente para armazenar localmente os clones de repos usando o comando cd, e.g.

    ```bash
    cd git
    ```

5.  Clone seu fork inserindo um comando com a seguinte forma:

    ```bash
    git clone url-que-você-copiou
    ```

    Então, por exemplo, meu comando para clonar parecia com isto:

    ```bash
    git clone git@github.com:chrisdavidmills/content.git
    ```

Agora você deve encontrar um diretório content dentro do seu diretório do git, contendo o conteúdo do repo.

### Configurando um remoto para apontar para a versão principal do repo

Uma última coisa a se fazer antes de seguirmos é configurar um _remoto_ para apontar para a versão principal do repo, e.g. <https://github.com/mdn/content> no caso do nosso exemplo. Um remoto é basicamente um ponteiro para um repo remoto específico localizado no GitHub, e é mais comumente usado para atualizar seu clone local, então ele está atualizado com a última versão do repo principal, como nós veremos abaixo.

Um remoto é configurado com o comando `git remote add`, que se parece com isto:

```bash
git remote add nome-remoto repo-para-o-qual-você-quer-apontar
```

- _nome-remoto_ é um nome que você escolhe, que é usado para referenciar o remoto posteriormente. É bom manter um nome consistente para os remotos que tem o mesmo propósito pelos diferentes repos, então o remoto com o mesmo nome vai fazer a mesma coisa em todos os lugares, e você tem menos chance de ficar confuso. Então, por exemplo, a versão principal do repo do qual você bifurcou a sua versão é frequentemente chamado de "upstream repo", por isso as pessoas costumam usar "upstream" como nome do local para o remoto de upstream. Eu geralmente chamo meus upstream remotos como "mozilla", para significar que eles apontam para a cópia principal da Mozilla do repo.
- _repo-para-o-qual-você-quer-apontar_ é a URL SSH (ou HTTPS) do repo que você quer apontar, obtida da mesma forma que nós obtivemos quando nós clonamos o fork anteriormente.

Então, adicionar seu remoto:

1.  Vá para a página da versão principal do repo em github.com (<https://github.com/mdn/content> neste exemplo) e recupere a URL SSH ou HTTPS, como for conveniente, do popup "Code".
2.  Na sua linha de comando, `cd` para o seu diretório content:

    ```bash
    cd content
    ```

3.  Agora rode a linha a seguir, substituindo _nome-remoto_ e _repo-para-o-qual-você-quer-apontar_ de forma apropriada:

    ```bash
    git remote add nome-remoto repo-para-o-qual-você-quer-apontar
    ```

    Então, por exemplo, eu usei a URL SSH e chamei meu remoto de "mozilla":

    ```bash
    git remote add mozilla git@github.com:mdn/content.git
    ```

Seu remoto agora deve estar configurado. Você pode verificar isso rodando o comando `git remote -v` no seu terminal, o que irá produzir uma lista com os nomes do seus remotos e para onde eles apontam. Você deve ver algo como isto:

```plain
mozilla    git@github.com:mdn/content.git (fetch)
mozilla    git@github.com:mdn/content.git (push)
origin    git@github.com:chrisdavidmills/content.git (fetch)
origin    git@github.com:chrisdavidmills/content.git (push)
```

## Se preparando para fazer uma alteração no repo

Agora que você tem seu fork local, clonado e configurado para trabalhar, há um conjunto de comandos que você deve ter o hábito de rodar antes de tentar fazer qualquer mudança nova.

### Mudar para a branch main

Cada repo tem um número diferente de branches(ramos), que são, basicamente, versões diferentes do código base dentro do mesmo repo. A ideia é que para cada mudança no código base, a alteração seja feita em uma branch separada e testada lá primeiro, antes de enviar as mudanças para a cópia principal do código.

A branch principal do repositório content é chamada de "main" (pode ser chamado de outra coisa como "master" em outros repos, e se for o caso você terá que atualizar o nome em todos os comandos abaixo). Você estará nessa branch por padrão se você tiver acabado de clonar o repo, mas se você já tiver feito algum trabalho, provavelmente vai estar em uma branch diferente.
Tenha certeza de rodar o comando a seguir para mudar para a branch main antes de fazer qualquer outra coisa:

```bash
git switch main
```

> **Nota:** Em outros tutoriais você pode ter visto `git checkout` sendo usado para mudar de branches no repo. Isto funciona na maior parte do tempo, mas pode ter efeitos colaterais indesejados, por isso neste tutorial nós estamos recomendando o novo comando `git switch`, que é projetado puramente para trocar de branches e tem menos chance de dar problema. Se você estiver interessado em como estes comandos estão relacionados, e as diferenças entre eles [Destaques do Git 2.23 > Alternativas experimentais para o git checkout](https://github.blog/2019-08-16-highlights-from-git-2-23/#experimental-alternatives-for-git-checkout) tem um bom resumo.

### Atualize a sua branch main

Em seguida, você deveria atualizar sua branch main para que ela tenha o mesmo conteúdo que a branch main do repo principal. O repo content é atualizado muitas vezes por dia por uma grande quantidade de contribuidores, então se você não fizer isto, sua versão vai ficar desatualizada, e isto vai causar problemas quando você tentar submeter suas atualizações. É aqui que o seu remoto vai vir a calhar!

Para atualizar seu repo:

1.  Primeiro, busque o conteúdo atualizado do seu repositório remoto com o comando a seguir:

    ```bash
    git fetch nome-remoto
    ```

    Então por exemplo:

    ```bash
    git fetch mozilla
    ```

2.  Em seguida, substitua o conteúdo da sua branch main com o conteúdo da branch main do repo remoto. Existem várias formas que você poderia fazer isto, mas eu tendo a usar o comando `rebase`, assim:

    ```bash
    git rebase nome-remoto/nome-branch-principal
    ```

    Então por exemplo:

    ```bash
    git rebase mozilla/main
    ```

3.  Finalmente, suba essas mudanças para a versão remota do seu fork usando:

    ```bash
    git push
    ```

Você vai saber se as suas atualizações funcionaram corretamente vendo a página do seu fork em github.com (i.e. a minha é <https://github.com/chrisdavidmills/content>). Deve aparecer algo como "Esta branch está atualizada com mdn:main." em algum lugar próximo ao topo. Se estiver escrito que sua branch main está atrás da mdn:main por um número de commits, então você vai ter que tentar novamente ou leia [solução de problemas](#troubleshooting).

### Crie uma branch nova para você trabalhar

Uma vez que você tenha atualizado a branch principal do seu fork, você deve criar uma branch nova para fazer suas alterações. Você _nunca_ deve fazer seu trabalho na branch principal ou submeter a partir de lá — isso pode virar uma bagunça rapidamente, confie em nós. É bem mais limpo e menos sujeito a erros fazer todo o trabalho em branches separadas.

Para criar uma branch nova:

1.  Vá para a página do seu fork em github.com (i.e. a minha é <https://github.com/chrisdavidmills/content>) e encontre botão de branch no canto superior esquerdo da lista de arquivos, no qual deve estar escrito "main":

    ![Botão rotulado como main](branch-button.png)

2.  Clique nele, e você receberá uma lista de branches e um campo de texto que diz "Encontre ou crie uma branch...":

    ![menu mostrando a lista de nomes de branches com uma caixa de texto rotulada como encontre ou crie uma branch](branch-menu.png)

3.  Se você digitar parte do nome de uma branch que exista no campo de texto, a lista de branches vai ser filtrada a partir desse texto, permitindo que você busque por uma branch existente facilmente. Contudo, nós queremos criar uma branch nova. Digite o nome de uma branch que ainda não existe (tente algo como test-branch) e a tela vai mudar para te mostrar um botão rotulado "Crie uma branch: test-branch a partir da 'main'":

    ![menu mostrando uma nova branch chamada test-branch digitado em uma caixa de texto, com um botão de criar branch embaixo](new-branch.png)

4.  Assim que você estiver feliz com o nome da sua branch, clique no botão, e a tela vai ser atualizada para mostrar o nome da branch no botão branch:

    ![Botão rotulado test-branch](branch-button-new-branch.png)

É isso! Agora você criou uma nova branch para trabalhar. Esta branch é identica ao estado da branch main no momento em que você criou. Um bom ponto de partida para fazer o seu trabalho.

Dicas:

- Tenha certeza de sempre atualizar sua branch main para estar atualizada com a branch main da mozilla, conforme discutido na seção anterior, antes de criar uma branch nova.
- Tenha certeza de sempre criar uma branch nova baseada na main, e não alguma outra branch. Para fazer isto, tenha certeza que o botão branch mostre "main" antes de começar o processo. Se você não fizer isso, sua nova branch provavelmente estará desatualizada, o que irá causar problemas no conteúdo.

### Obtenha sua branch localmente e mude para ela

A seção anterior te ensinou com criar uma nova branch no seu fork, mas atualmente ela só existe na versão remota do seu fork. Para trabalhar nela, você vai precisar obter ela na sua versão local.

Para fazer isto, volte para o seu terminal e, tendo certeza que você está dentro do diretório do repo no qual você está trabalhando (`content` para este exemplo):

1.  Puxe as mudanças remotas para o seu clone local rodando o comando `git pull`
2.  Entre a mensagem exibida, você deve ver as linhas `* [new branch] test-branch -> origin/test-branch`
3.  Para mudar para sua branch (O que significa mudar do "main" para trabalhar na sua branch ao invés disso), rode o comando `git switch test-branch`

Se você foi bem sucedido, o git deve te dizer algo como:

```plain
Branch 'test-branch' set up to track remote branch 'test-branch' from 'origin'.
Switched to a new branch 'test-branch'
```

Note que você pode verificar o status do seu repo, incluindo em qual branch você está, a qualquer momento rodando o comando `git status`. Tente isto agora, e o git deve te dizer algo como isto:

```plain
On branch test-branch
Your branch is up to date with 'origin/test-branch'.

nothing to commit, working tree clean
```

Isto parece certo. Nós estamos na branch "test-branch", e nós ainda não fizemos mudanças.

## Adicionando, commitando e subindo

Neste ponto você já está preparado para fazer alterações no repo que você está trabalhando — para corrigir um bug no MDN ou qualquer coisa que você esteja fazendo. No geral, vamos pular esta parte, já que esse não é o objetivo do tutorial. Se você quiser corrigir um problema real no MDN, vá e escolha um bug para corrigir da nossa [lista de issues de conteúdo](https://github.com/mdn/content/issues/), ou leia [Contribuindo para o MDN](/pt-BR/docs/MDN/Contribute) para mais orientações.

Se você só quer seguir este tutorial com o propósito de ter um exemplo, vamos fazer algo simples.

1.  Vá para o arquivo `content/README.md`, e adicione uma única letra no título superior do README.
2.  Agora volte para a linha de comando e rode o comando `git status` de novo. Desta vez, o git deve dizer algo como:

    ```plain
    Your branch is up to date with 'origin/test-branch'.

        Changes not staged for commit:
          (use "git add <file>..." to update what will be committed)
          (use "git restore <file>..." to discard changes in working directory)
            modified:   README.md

        no changes added to commit (use "git add" and/or "git commit -a")
    ```

3.  Então, neste momento a mensagem está falando quais arquivos você modificou. A próxima etapa é "adicionar" eles, o que significa adicionar eles para uma lista de arquivos que você quer dar commit e então subir as alterações para o fork remoto. Para adicionar este arquivo para a lista de commit, digite o seguinte:

    ```bash
    git add README.md
    ```

    > **Nota:** `README.md` é o caminho para o arquivo que você alterou, não apenas o nome dele. Se ele estiver dentro de um subdiretório, você teria que escrever o caminho completo para o arquivo.

4.  Se você rodar `git status` de novo, você vai ver isto agora:

    ```plain
    On branch test-branch
        Your branch is up to date with 'origin/test-branch'.

        Changes to be committed:
          (use "git restore --staged <file>..." to unstage)
            modified:   README.md
    ```

5.  O Git está nos dizendo que `README.md` agora está em nossa lista de commit. Para incluir todos os arquivos da lista de commit em um commit (um único conjunto de mudanças que depois nós vamos tentar enviar para a branch principal), rode o seguinte (a opção `-m` é a abreviação para mensagem):

    ```bash
    git commit -m 'meu primeiro commit'
    ```

    O Git irá te dizer isto:

    ```plain
    [test-branch 44b207ef6] meu primeiro commit
         1 file changed, 1 insertion(+), 1 deletion(-)
    ```

    Para mostrar que o commit que você fez foi registrado.

6.  Rode `git status` de novo, e você vai obter esta informação:

    ```plain
    On branch test-branch
        Your branch is ahead of 'origin/test-branch' by 1 commit.
          (use "git push" to publish your local commits)

        nothing to commit, working tree clean
    ```

A informação lida basicamente foi redefinida — está nos dizendo que não temos mudanças para fazer um commit, porque agora nós mandamos nossas mudanças anteriores para o sistema como um commit. A diferença chave de antes é a linha "Your branch is ahead of 'origin/test-branch' by 1 commit." (Sua branch está na frente de 'origin/test-branch' por 1 commit.) — nossa versão local da branch "test-branch" agora está a frente da versão remota de "test-branch" por um commit — em outras palavras, nós fizemos uma mudança localmente que a branch remota não tem.

Vamos subir nossa mudança local para a branch remota. Você pode fazer isto rodando o comando `git push` — tente isto agora. Se não tiver erros, você deve ter lido algo como isto:

```plain
Enumerating objects: 5, done.
Counting objects: 100% (5/5), done.
Delta compression using up to 8 threads
Compressing objects: 100% (3/3), done.
Writing objects: 100% (3/3), 292 bytes | 292.00 KiB/s, done.
Total 3 (delta 2), reused 0 (delta 0)
remote: Resolving deltas: 100% (2/2), completed with 2 local objects.
To github.com:chrisdavidmills/content.git
    77215e31e..44b207ef6  test-branch -> test-branch
```

## Criando um pull request

Neste momento, volte para a página do fork remoto em github.com. Você deve ver uma mensagem parecida com "Sua branch está 1 commit a frente de mdn:main." o que significa que o conteúdo do nosso fork tem uma mudança (commit) nela que não existe na branch "main" do mozilla.

1.  Para enviar nossas mudanças para a cópia principal do repo, nós precisamos criar um pull request (PR). Isto pode ser feito facilmente usando o botão "Compare & pull request" que você deve ver no topo da lista de arquivos, uma vez que você tenha subido alterações na branch.

    ![Banner com o texto test branch tem alterações recentes, e um botão com o texto comparar e criar um pull request](compare-and-pull-request.png)

    Clique neste botão, e deve aparecer uma tela exibindo estas linhas:

    ![Formulário para abrir um pull request, que inclui os campos de texto para título e descrição](open-pull-request.png)

    > **Aviso:** Sigo os próximos passos apenas se você tiver uma alteração real para ser feito no repo! Por favor, não faça PRs de teste em nossos repos.

2.  Neste momento, coloque um título e uma descrição úteis para o seu PR, dizendo exatamente o que você mudou, o porquê disto ser uma coisa boa, e qual a issue que é corrigida, se necessário. Especificamente, inclua uma linha dizendo `Corrige url-issue`. O GitHub automaticamente renderiza isto como um link para o número da issue, e.g. `Corrige #1234` e, além disso, automaticamente fecha a issue relacionada uma vez que o pull request for mesclado.
3.  Uma vez que você esteja pronto para enviar o seu pull request, clique no botão "Criar pull request". Isto fará com que seu pull request apareça na [Lista de pull requests](https://github.com/mdn/content/pulls) do repo na qual ele será revisado pela equipe de revisão, e, com sorte, mesclado na base principal de código.

    Caso a equipe de revisão queira que você faça mudanças, eles vão te falar nos comentários do seu pull request (você deve receber uma notificação por email te avisando sobre isto).

4.  Se você quiser fazer mais mudanças para o mesmo pull request que você já submeteu, você pode fazer isso criando mais commits na mesma branch local e então dando push conforme foi explicado anteriormente. Não há necessidade de criar um novo pull request. **Tenha certeza de estar fazendo as alterações na mesma branch de antes**

## Solução de problemas

O tutorial acima tem a intenção de te fornecer os fundamentos do git e do GitHub que você vai precisar para contribuir em um nível básico ao repos do GitHub. Esperamos que seja útil! Nós também gostaríamos de discutir o fato de que, apesar de ser o sistema de controle de versão padrão da indústria para a web, o Git tem uma reputação meio mística/lendária de ser uma ferramenta dolorosa e difícil de aprender e usar.

Nós não achamos isto totalmente justo. O Git tem vários comandos que, pra ser justo, as vezes parecem enigmáticos em seu uso, e realmente tem um longo período para dominar. Também é justo dizer que se você esquecer alguns dos comandos ou fizer as coisas na ordem errada, você pode se encontrar em uma bagunça interessante e difícil de resolver. Contudo, enquanto você tiver bons hábitos conforme os escritos acima, você não deve prolongar tanto o erro. Também vale mencionar que o Git é bem mais fácil de usar do que era há 10 anos atrás.

Esta seção vai ser incrementada com o tempo, e incluir alguns comandos/sequências úteis para corrigir problemas comuns.

### Revertendo uma alteração feita em um arquivo que você ainda não tinha adicionado para a lista de commit

Se você tiver alterado um arquivo, mas ainda não tiver rodado o comando `git add caminho-do-arquivo` para adicioná-lo na lista de commit, você pode revertê-lo para o estado em que estava quando você entrou na branch pela primeira vez rodando:

```bash
git restore caminho-do-arquivo
```

### Removendo um arquivo da lista de commit

Se você já tiver rodado o comando `git add caminho-do-arquivo` para adicionar o arquivo na lista de commit, mas agora quer removê-lo da lista de commit, você pode usar o comando:

```bash
git restore --staged caminho-do-arquivo
```

### Revertendo um commit

Se você tiver feito o commit da lista usando `git commit -m 'minha mensagem do commit'`, e ainda não tiver feito push, mas percebeu que você colocou algo nele que você quer remover, você pode reverter seu commit local usando

```bash
git reset HEAD~1
```

Isto fará com que volte para o estado de quando as mudanças nesse commit ainda não tinhando sido adicionadas a lista de commit (você teria que adicionar novamente depois de descobrir o problema). Note que isso te leva de volta para o estado antes de você fazer o commit de qualquer coisa nesta sessão. Isto não te ajudará se você precisar fazer algo mais complexo, como apenas reverter o commit intermediário de uma lista de três. Nós vamos deixar assim para essa lição.

### Revertendo um commit que foi subido para o fork remoto

Neste ponto, não existe nenhum retorno real, ou forma de rebobinar. Ao invés disso, você vai precisar subir outro commit para reverter os efeitos do que você quer tirar. Você pode fazer isto manualmente usando algumas das ferramentas que nós te demos acima, mas tem um comando já existente que facilita isto — `git revert`. Ele pode ser usado para criar automaticamente um commit que reverte mudanças de volta para o ponto que você especificar.

1.  Da forma mais simples, você pode rodar o comando a seguir para criar um commit que vai fazer a sua branch remota voltar ao estado inicial em que ela estava antes de você começar a commitar: 

    ```bash
    git revert HEAD
    ```

2.  Isto vai resultar na abertura de uma mensagem de commit no seu editor padrão, a qual você precisa verificar se está como você gostaria. Feche-a, e o git vai finalizar criando o commit.
3.  Agora você só precisar fazer o push:

    ```bash
    git push
    ```

Se você olhar na página do github.com do seu fork remoto novamente, você verá o commit que você queria reverter, juntamente com o commit que reverte ele.

> **Nota:** Outra forma de conseguir se livrar dos arquivos que acabaram entrando no seu pull request e que você não quer que estejam lá é usar a interface do Github. Vá para a página do seu pull request em github.com, vá até a aba "Arquivos alterados", e encontre o arquivo que você quer remover do seu pull request. No canto superior direito do da caixa do arquivo na página, você verá um menu "três pontos" (`...`). Pressione o botão e escolha "Deletar o arquivo". Na página de confirmação, insira um título para o novo commit, tenha certeza de que a caixa de seleção "Fazer commit diretamente..." esteja selecionada, e pressione o botão "Fazer o commit das mudanças".
>
> Geralmente é uma boa ideia deixar o resto do pull request exatamente da forma que você deseja antes de fazer as mudanças pela interface do GitHub. Se você fizer algo assim e acabar tendo que fazer mais mudanças, você vai precisar lembrar de puxar as mudanças que você fez para a sua branch remota para a sua branch local (e.g. com `git pull`) antes que você consiga subir mais commits.

### Quer ver mais?

Se você acha que este guia de solução de problemas deveria ter mais informações, por favor [cria uma issue](https://github.com/mdn/content/issues/new) para sugerir o que você acha que nós devemos incluir.

## Veja também

- [Aprendendo com MDN > Git e GitHub](/pt-BR/docs/Learn/Tools_and_testing/GitHub)
- [Dangit, Git](https://dangitgit.com/en) — técnicas adicionais úteis de solução de problemas
- [Github Issues - 35 dicas do  que fazer e não fazer](https://hackernoon.com/45-github-issues-dos-and-donts-dfec9ab4b612)
- [gh CLI tool](https://cli.github.com/) — uma vez que você esteja habituado a usar os comandos do git CLI puro para controlar seus repos, você pode querer considerar instalar a ferramenta gh CLI do GitHub, a qual provê comandos para agilizar os processos discutidos acima.
