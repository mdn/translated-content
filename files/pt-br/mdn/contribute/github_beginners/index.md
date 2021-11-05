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

_Bifurcar_, também conhecido como _criar um fork_, e _clonar_ são dois termos com os quais você vai se deparar frequentemente no mundo do Git:

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

### Configurando um ramo remoto para apontar para a versão principal do repo

Uma última coisa a se fazer antes de seguirmos é configurar um _ramo remoto_ para apontar para a versão principal do repo, e.g. <https://github.com/mdn/content> no caso do nosso exemplo. Um ramo remoto é basicamente um ponteiro para um repo remoto específico localizado no GitHub, e é mais comumente usado para atualizar seu clone local, então ele está atualizado com a última versão do repo principal, como nós veremos abaixo.

Um ramo remoto é configurado com o comando `git remote add`, que se parece com isto:

```bash
git remote add nome-ramo-remoto repo-para-o-qual-você-quer-apontar
```

- _nome-ramo-remoto_ é um nome que você escolhe, que é usado para referenciar o ramo remoto posteriormente. É bom manter um nome consistente para os ramos remotos que tem o mesmo propósito pelos diferentes repos, então o ramo remoto com o mesmo nome vai fazer a mesma coisa em todos os lugares, e você tem menos chance de ficar confuso. Então, por exemplo, a versão principal do repo que você bifurcou a sua versão é frequentemente chamado de "upstream repo", por isso as pessoas costumam usar "upstream" como nome do local remoto de upstream. Eu geralmente chamo meus upstream remotos como "mozilla", para significar que eles apontam para a cópia principal da Mozilla do repo.
- _repo-para-o-qual-você-quer-apontar_ é a URL SSH (ou HTTPS) do repo que você quer apontar, obtida da mesma forma que nós obtivemos quando nós clonamos o fork anteriormente.

Então, adicionar seu ramo remoto:

1.  Vá para a página da versão principal do repo em github.com (<https://github.com/mdn/content> neste exemplo) e recupere a URL SSH ou HTTPS, como for conveniente, do popup "Code".
2.  Na sua linha de comando, `cd` para o seu diretório content:

    ```bash
    cd content
    ```

3.  Agora rode a linha a seguir, substituindo _nome-ramo-remoto_ e _repo-para-o-qual-você-quer-apontar_ de forma apropriada:

    ```bash
    git remote add nome-ramo-remoto repo-para-o-qual-você-quer-apontar
    ```

    Então, por exemplo, eu usei a URL SSH e chamei meu ramo remoto de "mozilla":

    ```bash
    git remote add mozilla git@github.com:mdn/content.git
    ```

Seu ramo remoto agora deve estar configurado. Você pode verificar isso rodando o comando `git remote -v` no seu terminal, o que irá produzir uma lista com os nomes do seus ramos remotos e para onde eles apontam. Você deve ver algo como isto:

```plain
mozilla    git@github.com:mdn/content.git (fetch)
mozilla    git@github.com:mdn/content.git (push)
origin    git@github.com:chrisdavidmills/content.git (fetch)
origin    git@github.com:chrisdavidmills/content.git (push)
```

## Se preparando para fazer uma alteração no repo

Agora que você você tem seu fork local, clonado e configurado para trabalhar, há um conjunto de comandos que você deve ter o hábito de rodar antes de tentar fazer qualquer mudança nova.

### Switch to the main branch

Each repo has a number of different branches, which are basically different versions of the codebase inside the same repo. The idea is that for each change to a codebase, you make the change on a separate branch and test it there first, before then pushing the changes to the main copy of the code.

The main branch of the content repo is called "main" (it might be called something else like "master" in other repos, and if so you'll have to update the name of it in all commands shown below). You'll be on this branch by default if you've just cloned the repo, but if you've already done some work you'll likely be on a different branch.
Make sure you run the following to switch to the main branch before doing anything else:

```bash
git switch main
```

> **Note:** In other tutorials you may have seen `git checkout` used to change branches in a repo. That works fine most of the time, but can sometimes have unintended side-effects, therefore in this tutorial we are recommending the newer `git switch` command, which is designed purely for switching branches and has less chance of going wrong. If you are interested in how these commands are related, and the differences between them, [Highlights from Git 2.23 > Experimental alternatives for git checkout](https://github.blog/2019-08-16-highlights-from-git-2-23/#experimental-alternatives-for-git-checkout) provides a good summary.

### Update your main branch

Next up, you should update your main branch so that it contains the same content as the main branch of the main repo. The content repo is updated many times every day by a large number of contributors, so if you don't do this, your version will get out-of-date, and this will cause problems when you try to submit your updates. This is where your remote will come in handy!

To update your repo:

1.  First fetch the updated contents of your remote with the following command:

    ```bash
    git fetch remote-name
    ```

    So for example:

    ```bash
    git fetch mozilla
    ```

2.  Next, replace the contents of your main branch with the remote repo's main branch. There are many different ways you could do this, but I tend to use the `rebase` command, like this:

    ```bash
    git rebase remote-name/main-branch-name
    ```

    So for example:

    ```bash
    git rebase mozilla/main
    ```

3.  Finally, push those changes up to the remote version of your fork using:

    ```bash
    git push
    ```

You'll know if your updates worked properly by looking at the github.com page for your fork (i.e. mine is <https://github.com/chrisdavidmills/content>). It should say something like "This branch is even with mdn:main." somewhere near the top. If it says your main branch is behind mdn:main by a number of commits, then you'll need to try it again, or [troubleshoot](#troubleshooting).

### Create a new branch to do your work in

Once you've got your main branch up to date in your fork, you must always create a new branch to make a change in. You should _never_ do your work in the main branch and submit it from there — it can get messy very quickly, trust us. It is a lot cleaner and less error-prone to do all work in separate branches.

To create a new branch:

1.  Go to your fork's page on github.com (i.e. mine is <https://github.com/chrisdavidmills/content>) and find the branch button at the top left hand corner of the file list, which should say "main" on it:

    ![Button labeled main](branch-button.png)

2.  Click on this, and you'll be presented with a list of branches and a text field that says "Find or create a branch…":

    ![menu showing list of branch names with a text box labeled find or create a branch](branch-menu.png)

3.  If you enter part of an existing branch name in the text field, it will filter the list of branches against that string, allowing you to search for existing branches easily. However, we want to create a new branch. Enter a branch name that doesn't already exist (try something like test-branch) and the display will change to give you a button labelled "Create branch: test-branch from 'main'":

    ![menu showing a new branch name test-branch entered into a text box, with a create branch button below it](new-branch.png)

4.  Once you are happy with your branch name, click on this button, and the display will update to show the branch name in the branch button:

    ![Button labeled test-branch](branch-button-new-branch.png)

That's it! You have now created a new branch to do your work in. This branch is identical to the main branch's state at the time that you created it. A good starting point to do our work from.

Tips:

- Make sure that you always update your main branch to be in sync with the mozilla main branch, as discussed in the previous section, before creating a new branch.
- Make sure that you always create your new branch based on main, and not some other branch.To do this, makes sure that the branch button shows "main" before starting the process. If you don't, your new branch will likely be really out of date, which will create content problems.

### Get your branch locally and switch to it

The previous section taught you how to create a new branch in your fork, but it currently only exists in your remote version of the fork. To work on it, you need to get it into your local version.

To do this, go back to your terminal and, making sure you are inside the repo directory you are working with (`content` for this example):

1.  Pull remote changes to your local clone by running the command `git pull`
2.  You should get a message along the lines of `* [new branch] test-branch -> origin/test-branch`
3.  To switch to your branch (meaning change over from "main", to work in that branch instead) run the command `git switch test-branch`

If you were successful, git should tell you something like this:

```plain
Branch 'test-branch' set up to track remote branch 'test-branch' from 'origin'.
Switched to a new branch 'test-branch'
```

Note that you can check the status of your repo, including what branch you are on, at any time by running the command `git status`. Try this now, and git should tell you something like this:

```plain
On branch test-branch
Your branch is up to date with 'origin/test-branch'.

nothing to commit, working tree clean
```

This sounds about right. We are on the "test-branch" branch, and we've made no changes yet.

## Adding, committing, and pushing changes

At this point you are ready to make changes to the repo you are working on — to fix a bug on MDN or whatever it is that you are doing. We will mostly skip this part, as that's not the point of the tutorial. If you want to fix a real problem on MDN, go and choose a bug to fix from our [content issues list](https://github.com/mdn/content/issues/), or read [Contributing to MDN](/en-US/docs/MDN/Contribute) for more guidance.

If you just want to follow along with this tutorial for example's sake, let's do something simple.

1.  Go into the `content/README.md` file, and add a single letter into the top heading of the README.
2.  Now go back to your command line and enter the `git status` command again. This time git should tell you something like this:

    ```plain
    Your branch is up to date with 'origin/test-branch'.

        Changes not staged for commit:
          (use "git add <file>..." to update what will be committed)
          (use "git restore <file>..." to discard changes in working directory)
            modified:   README.md

        no changes added to commit (use "git add" and/or "git commit -a")
    ```

3.  So at this point it is telling you what files you have modified. The next stage is to "add" them, which means add them to a list of files that you want to commit to push up to the remote fork. To add this file to the commit list, type the following:

    ```bash
    git add README.md
    ```

    > **Note:** `README.md` is the path to the file you have changed, not just its name. If it were inside a subdirectory, you'd have to write the full path to the file.

4.  If you run `git status` again, you'll now see this:

    ```plain
    On branch test-branch
        Your branch is up to date with 'origin/test-branch'.

        Changes to be committed:
          (use "git restore --staged <file>..." to unstage)
            modified:   README.md
    ```

5.  Git is telling us that `README.md` is now in our commit list. To include all the files in the commit list in a commit (a single set of changes that we will later try to send to the main branch), enter the following (the `-m` option is short for message"):

    ```bash
    git commit -m 'my first commit'
    ```

    Git will tell you this:

    ```plain
    [test-branch 44b207ef6] my first commit
         1 file changed, 1 insertion(+), 1 deletion(-)
    ```

    To show that it has registered that you've made a commit.

6.  Run `git status` again, and you'll get this information:

    ```plain
    On branch test-branch
        Your branch is ahead of 'origin/test-branch' by 1 commit.
          (use "git push" to publish your local commits)

        nothing to commit, working tree clean
    ```

The information readout has basically reset — it is telling us that there are no changes to commit, because we've now sent our previous change into the system as a commit. The key difference from before is the line "Your branch is ahead of 'origin/test-branch' by 1 commit." — our local version of the "test-branch" branch is now ahead of the remote version of "test-branch" by one commit — in other words, we've made a change locally that the remote branch doesn't have.

Let's send our local change to the remote branch. You can do this by running the command `git push` — try this now. If there are no errors, you should get a readout like this:

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

## Creating a pull request

At this point, go back to your remote fork's github.com page. You should see a message along the lines of "This branch is 1 commit ahead of mdn:main. " meaning that our fork's content has a content change (commit) in it that mozilla's "main" branch doesn't have.

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

### Want to see more?

If you think this troubleshooting guide should contain more information, please [create an issue](https://github.com/mdn/content/issues/new) to suggest what you think we should include.

## See also

- [MDN Learn > Git and GitHub](/en-US/docs/Learn/Tools_and_testing/GitHub)
- [Dangit, Git](https://dangitgit.com/en) — additional useful troubleshooting techniques
- [45 Github Issues Dos and Don'ts](https://hackernoon.com/45-github-issues-dos-and-donts-dfec9ab4b612)
- [gh CLI tool](https://cli.github.com/) — once you are used to using the vanilla git CLI commands to control your repos, you might want to consider installing GitHub's own gh CLI tool, which provides commands to speed up a number of the processes discussed above.
