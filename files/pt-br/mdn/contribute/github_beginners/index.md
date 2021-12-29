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

- Git é uma ferramente de _sistema de controle de versão_ — uma classe de ferramentas essenciais em qualquer fluxo de trabalho de desenvolvimento. Ela permite que um grupo de desenvolvedores trabalhe na mesma base de código sem atrapalhar uns aos outros, permite que desenvolvedores voltem para estados anteriores no código se for necessário, e mais.
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

1.  Vá para a página do fork em github.com (e.g. `https://github.com/<your-user-name>/content`). 
2.  Clique no botão verde "Code" no topo da lista de arquivos. Algo similar ao popup abaixo deve aparecer:

    ![Janela popup mostrando uma URL para clonar junto com opções para abrir com o GitHub desktop e baixar o zip](code-popup.png)

3.  Se você configurar a autenticação SSH como mostrado acima, clique na tab "SSH" e copie a URL `git@github.com:<your-user-name>/content.git` do campo de texto na caixa. Se você não configurou a autenticação SSH, ao invés disso copie a URL do campo de texto na tab "HTTPS", que deve ser parecida com esta: `https://github.com/<your-user-name>/content.git`.
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

3.  Finalmente, envie essas mudanças para a versão remota do seu fork usando:

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

    ![menu mostrando a lista de nomes de branches com uma caixa de texto rotulada como encontre ou crie um ramo](branch-menu.png)

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
3.  Para mudar para sua branch (O que significa mudar do "main" para trabalhar na sua branch ao invés disso) rodando o comando `git switch test-branch`

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

## Adicionando, commitando e dando push

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

3.  Então, neste momento a mensagem está falando quais arquivos você modificou. A próxima etapa é "adicionar" eles, o que significa adicionar eles para uma lista de arquivos que você quer dar commit e então dar push nas alterações para o fork remoto. Para adicionar este arquivo para a lista de commit, digite o seguinte:

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

Vamos enviar nossa mudança local para a branch remota. Você pode fazer isto rodando o comando `git push` — tente isto agora. Se não tiver erros, você deve ter lido algo como isto:

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

1.  To send our change up to the main copy of the repo, we need to create a pull request. This can be easily done using the "Compare & pull request" button that you should see up the top of the files list, once the branch has had a change pushed to it.

    ![Banner with text test branch had recent pushes, and a button labeled compare and pull request](compare-and-pull-request.png)

    Press this button, and you should get a new screen appearing along these lines:

    ![open pull request form, which includes text fields for title and description](open-pull-request.png)

    > **Warning:** Only follow the rest of these steps if you have a real change to make to the repo! Please do not actually submit test PRs to our repos.

2.  At this point, enter a useful title and description for your PR, saying exactly what it changed, why this is a good thing, and what related issue it fixed, if appropriate. Specifically, include a line saying `Fixes issue-url`. GitHub automatically renders this as a link to the issue number, e.g. `Fixes #1234` and, in addition, automatically closes the related issue once the pull request is merged.
3.  Once you are ready to send your pull request, click the "Create pull request" button. This will cause your pull request (PR) to appear in the repo's [Pull requests list](https://github.com/mdn/content/pulls), where it'll be reviewed by our review teams, and hopefully merged into the main codebase.

    If the review team has changes they want you to make, they'll tell you in comments in the pull request thread (you should receive an email notification to tell you this).

4.  If you want to make further changes to the same pull request you've already submitted, you can do so by making more commits on the same local branch and then pushing them as explained previously. There is no need to create a completely new pull request. **Just make sure you are making them on the same branch as before**.

## Troubleshooting

The above tutorial is aimed at providing you with the basics of git and GitHub that you'll need to contribute to GitHub repos at a basic level. We hope it was helpful! We'd also like to discuss the fact that, despite being the industry standard version control system for the web industry, Git has a kind of mythical/legendary reputation as a painfully difficult tool to learn and use.

We're not sure this is entirely fair. Git has a lot of commands that are sometimes fairly cryptic in their use, and does take a long time to master. It is also fair to say that if you forget some of the commands or do things in the wrong order you can find yourself in some interesting messes that are hard to get out of. However, as long as you get yourself into some good habits as described above, you shouldn't go too far wrong. It is also worth mentioning that Git is much easier to use than it was 10 years ago.

This section will be added to over time, and includes some useful commands/sequences to help you fix common problems.

### Reverting a change you made to a file that you haven't yet added to the commit list

If you've changed a file, but have not yet run the `git add file-path` command to add it to the commit list, you can revert it to the state it was when you first checked out the branch by running

```bash
git restore file-path
```

### Removing a file from the commit list

If you've already run the `git add file-path` command to add a file to the commit list, but now want to remove it from the commit list, you can use the command

```bash
git restore --staged file-path
```

### Reversing a commit

If you've committed the commit list using `git commit -m 'my commit message'`, and not yet pushed it, but now realized that you put something in there that you want to remove, you can reverse your local commit using

```bash
git reset HEAD~1
```

This will take it back to the state when the changes in that commit are not yet added to the commit list (you would need to git add them again after figuring out the problem). Note that this gets you back to the state before you started committing anything in this session. This won't help you if you need to do something more complex, like only revert the middle commit out of a set of three. We'll leave it there for this lesson.

### Reversing a commit that has been pushed to the remote fork

At this point, there is not really any going back, or rewinding. Instead, you need to push another commit to reverse the effects of the one you want to get rid of. You could do this manually using some of the tools we've already given you above, but there is a built-in command that makes this easier — `git revert`. This can be used to automatically create a commit that reverts changes back to the point you specify.

1.  At its simplest, you can run the following command to create a commit that will get your remote branch back to the state you were in before you started committing:

    ```bash
    git revert HEAD
    ```

2.  This will result in a commit message file being opened up in your default text editor that you need to check to make sure you are happy with it. Close this, and git will finalize creating the commit.
3.  Now you just need to push it:

    ```bash
    git push
    ```

If you look at your remote fork's github.com page again, you'll see the commit that you wanted to reverse, plus the commit that reverses it.

> **Note:** Another way to handle getting rid of files that have ended up in pull requests that you don't want to be there is to use the GitHub UI. Go to your pull request's page on github.com, go to the "Files changed" tab, and find the file you want to remove from the pull request. At the top right of the file's box in the page there will be a "three dot" (`...`) menu. Press this button and choose "Delete file". In the confirmation page, enter a title for the new commit, make sure the "Commit directly..." checkbox is selected, and press the "Commit changes" button.
>
> It is usually a good idea to get the rest of the pull request looking exactly how you want it before you make changes via the GitHub UI. If you do something like this and then end up having to make more changes, you'll need to remember to pull the changes you made to your remote branch down to your local branch (e.g. with `git pull`) before you can push more commits.

### Quer ver mais?

Se você acha que este guia de solução de problemas deveria ter mais informações, por favor [cria uma issue](https://github.com/mdn/content/issues/new) para sugerir o que você acha que nós devemos incluir.

## Veja também

- [MDN Learn > Git and GitHub](/pt-BR/docs/Learn/Tools_and_testing/GitHub)
- [Dangit, Git](https://dangitgit.com/en) — additional useful troubleshooting techniques
- [45 Github Issues Dos and Don'ts](https://hackernoon.com/45-github-issues-dos-and-donts-dfec9ab4b612)
- [gh CLI tool](https://cli.github.com/) — once you are used to using the vanilla git CLI commands to control your repos, you might want to consider installing GitHub's own gh CLI tool, which provides commands to speed up a number of the processes discussed above.
