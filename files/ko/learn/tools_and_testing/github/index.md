---
title: Git and GitHub
slug: Learn/Tools_and_testing/GitHub
---

{{LearnSidebar}}

모든 개발자는 **버전 관리 시스템** (**VCS**)을 사용하거나 앞으로 그럴 것이다. VCS는 다른 개발자와의 협업 시 코드 중복작성으로 인한 손실을 방지해 주고, 문재가 생겼을 시 이전 버전으로의 롤백을 쉽게 해준다. 가장 유명한 VCS는 Git와 그와 관련된 소셜 코딩 사이트, GitHub이다. 이 글은 이 두가지에 대해 설명할 것이다.

## 개요

VCS는 소프트웨어 개발을 할 때 필수적이다.

- 프로젝트를 완전히 직접 수행하는 일은 드물며 다른 사람들과 작업을 시작하자마자 서로의 작업과 충돌할 위험이 있다. 대표적인 예시가 두 사람이 같은 부분을 업데이트하려고 할 때이다. 동시에 코드의. 발생을 관리하고 결과적으로 작업 손실을 피할 수있는 메커니즘이 필요하다.
- 혼자 또는 다른 사람들과 함께 프로젝트를 수행 할 때 중앙 위치에 코드를 백업 할 수 있기 때문에 컴퓨터가 고장 나더라도 코드가 손실되지 않는다.
- 추후에 문제가 발견될 경우, 이전 버전을 찾게 될 수 있다. 우리는 이미 같은 파일의 다른 버전들을 생성함으로써 우리는 버전 컨트롤을 하고 있었을지도 모른다. 예를 들어, `myCode.js`, `myCode_v2.js`, `myCode_v3.js`, `myCode_final.js`, `myCode_really_really_final.js`, 등 이런식으로 말이다. 그러나 이런 방식은 에러에 취약하며 신뢰성이 떨어진다.
- Different team members will commonly want to create their own separate versions of the code (called **branches** in Git), work on a new feature in that version, and then get it merged in a controlled manner (in GitHub we use **pull requests**) with the master version when they are done with it.

VCSes provide tools to meet the above needs. [Git](https://git-scm.com/) is an example of a VCS, and [GitHub](https://github.com/) is a web site + infrastructure that provides a Git server plus a number of really useful tools for working with git repositories individually or in teams, such as reporting issues with the code, reviewing tools, project management features such as assigning tasks and task statuses, and more.

> **참고:** Git is actually a _distributed_ version control system, meaning that a complete copy of the repository containing the codebase is made on your computer (and everyone else's). You make changes to your own copy, and then push those changes back up to the server, where an administrator will decide whether to merge your changes with the master copy.

## 전제 조건

Git와 GitHub를 사용하려면, 다음과 같은 사양이 요구된다:

- Git가 설치된 데스크탑 컴퓨터([Git 설치 페이지](https://git-scm.com/downloads)를 참고하라).
- Git을 사용할 도구. 당신이 어떻게 일하고 싶은지에 따라 취향에 맞게 [Git GUI client](https://git-scm.com/downloads/guis/) (GitHub Desktop, SourceTree, Git Kraken을 추천합니다) 와 터미널 중에 고르실 수 있습니다. GUI를 사용하더라도 기본적인 git 터미널 명령어들을 숙지하고 있다면 더 큰 도움이 될 것입니다.
- [GitHub 계정](https://github.com/join). 만일 계정이 없다면, 이 링크에서 계정을 만들 수 있다.

이 모듈에 필요한 전제 지식과 관련해서 웹개발, Git/Github, VCS에 관한 지식은 없어도 시작할 수 있다. 그러나 어느정도의 컴퓨터 소양과 코딩 능력이 뒷바침되면 repository에 코드를 저장해 놓을 수 있으므로 코딩 지식이 있으면 좋다.

코딩 지식과 더불어 기초적인 용어에 대한 지식이 있으면 좋다. 예를 들어, 디렉토리를 이동하거나 파일생성, 그리고 시스템 `PATH`를 변경시키는것과 같은 기본적인 용어에 대한 지식이 있는 것이 추천된다.

> **참고:** Github is not the only site/toolset you can use with Git. There are other alternatives such as [GitLab](https://about.gitlab.com/) that you could try, and you could also try setting your own Git server up and using it instead of GitHub. We've only stuck with GitHub in this course to provide a single way that works.

## 가이드

아래 링크들은 모두 외부 사이트로 연결된다. Mozilla는 Mozilla만의 독자적인 Git/Github 과정을 만드는 것을 목표로 하고 있으나 당장은 아래에 있는 항목들이 Github을 직접 해볼 수 있도록 도와줄 것이다.

- [Hello World (from GitHub)](https://guides.github.com/activities/hello-world/)
  - : This is a good place to start — this practical guide gets you to jump right into using GitHub, learning the basics of Git such as creating repositories and branches, making commits, and opening and merging pull requests.
- [Git Handbook (from GitHub)](https://guides.github.com/introduction/git-handbook/)
  - : This Git Handbook goes into a little more depth, explaining what a VCS is, what a repository is, how the basic GitHub model works, Git commands and examples, and more.
- [Forking Projects (from GitHub)](https://guides.github.com/activities/forking/)
  - : Forking projects is essential when you want to contribute to someone else's code. This guide explains how.
- [About Pull Requests (from GitHub)](https://help.github.com/en/articles/about-pull-requests)
  - : A useful guide to managing pull requests, the way that your suggested code changes are delivered to people's repositories for consideration.
- [Mastering issues (from GitHub)](https://guides.github.com/features/issues/)
  - : Issues are like a forum for your GitHub project, where people can ask questions and report problems, and you can manage updates (for example assigning people to fix issues, clarifying the issue, letting people know things are fixed). This articles gives you what you need to know about issues.

> **참고:** There is **a lot more** that you can do with Git and GitHub, but we feel that the above represents the minimum you need to know to start using Git effectively. As you get deeper into Git, you'll start to realise that it is easy to go wrong when you start using more complicated commands. Don't worry, even professional web developers find Git confusing sometimes, and often solve problems by searching for solutions on the web, or consulting sites like [Flight rules for Git](https://github.com/k88hudson/git-flight-rules) and [Dangit, git!](https://dangitgit.com/)

## 바깥 고리

- [Understanding the GitHub flow](https://guides.github.com/introduction/flow/)
- [Git command list](https://git-scm.com/docs)
- [Mastering markdown](https://guides.github.com/features/mastering-markdown/) (the text format you write in on PR, issue comments, and `.md` files).
- [Getting Started with GitHub Pages](https://guides.github.com/features/pages/) (how to publish demos and websites on GitHub).
- [Learn Git branching](https://learngitbranching.js.org/)
- [Flight rules for Git](https://github.com/k88hudson/git-flight-rules) (a very useful compendium of ways to achieve specific things in Git, including how to correct things when you went wrong).
- [Dangit, git!](https://dangitgit.com/) (another useful compendium, specifically of ways to correct things when you went wrong).
