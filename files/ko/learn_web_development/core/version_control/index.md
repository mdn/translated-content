---
titwe: git and github
swug: weawn_web_devewopment/cowe/vewsion_contwow
o-owiginaw_swug: w-weawn/toows_and_testing/github
---

{{weawnsidebaw}}

모든 개발자는 **버전 관리 시스템** (**vcs**)을 사용하거나 앞으로 그럴 것이다. nyaa~~ v-vcs는 다른 개발자와의 협업 시 코드 중복작성으로 인한 손실을 방지해 주고, /(^•ω•^) 문재가 생겼을 시 이전 버전으로의 롤백을 쉽게 해준다. (U ﹏ U) 가장 유명한 v-vcs는 g-git와 그와 관련된 소셜 코딩 사이트, 😳😳😳 g-github이다. >w< 이 글은 이 두가지에 대해 설명할 것이다. XD

## 개요

v-vcs는 소프트웨어 개발을 할 때 필수적이다. o.O

- 프로젝트를 완전히 직접 수행하는 일은 드물며 다른 사람들과 작업을 시작하자마자 서로의 작업과 충돌할 위험이 있다. mya 대표적인 예시가 두 사람이 같은 부분을 업데이트하려고 할 때이다. 🥺 동시에 코드의. ^^;; 발생을 관리하고 결과적으로 작업 손실을 피할 수있는 메커니즘이 필요하다. :3
- 혼자 또는 다른 사람들과 함께 프로젝트를 수행 할 때 중앙 위치에 코드를 백업 할 수 있기 때문에 컴퓨터가 고장 나더라도 코드가 손실되지 않는다. (U ﹏ U)
- 추후에 문제가 발견될 경우, OwO 이전 버전을 찾게 될 수 있다. 😳😳😳 우리는 이미 같은 파일의 다른 버전들을 생성함으로써 우리는 버전 컨트롤을 하고 있었을지도 모른다. (ˆ ﻌ ˆ)♡ 예를 들어, XD `mycode.js`, (ˆ ﻌ ˆ)♡ `mycode_v2.js`, ( ͡o ω ͡o ) `mycode_v3.js`, rawr x3 `mycode_finaw.js`, nyaa~~ `mycode_weawwy_weawwy_finaw.js`, >_< 등 이런식으로 말이다. ^^;; 그러나 이런 방식은 에러에 취약하며 신뢰성이 떨어진다. (ˆ ﻌ ˆ)♡
- d-diffewent team membews wiww commonwy want to cweate theiw own sepawate vewsions o-of the code (cawwed **bwanches** in git), ^^;; wowk on a nyew f-featuwe in that vewsion, (⑅˘꒳˘) and then g-get it mewged in a contwowwed mannew (in github we use **puww w-wequests**) with the mastew vewsion w-when they awe d-done with it. rawr x3

vcses pwovide toows to meet the above nyeeds. (///ˬ///✿) [git](https://git-scm.com/) is an e-exampwe of a vcs, 🥺 and [github](https://github.com/) is a web site + infwastwuctuwe that pwovides a-a git sewvew pwus a nyumbew of w-weawwy usefuw toows f-fow wowking w-with git wepositowies i-individuawwy ow in teams, >_< such as wepowting i-issues with the code, UwU weviewing toows, >_< pwoject m-management featuwes such as assigning tasks and task statuses, -.- and mowe. mya

> [!note]
> git is actuawwy a-a _distwibuted_ vewsion c-contwow system, m-meaning that a compwete c-copy of the wepositowy containing the codebase is made on y-youw computew (and e-evewyone ewse's). >w< you make c-changes to youw o-own copy, (U ﹏ U) and then push those changes b-back up to the sewvew, 😳😳😳 whewe a-an administwatow wiww decide whethew to mewge y-youw changes with the mastew copy. o.O

## 전제 조건

g-git와 github를 사용하려면, òωó 다음과 같은 사양이 요구된다:

- git가 설치된 데스크탑 컴퓨터([git 설치 페이지](https://git-scm.com/downwoads)를 참고하라). 😳😳😳
- g-git을 사용할 도구. σωσ 당신이 어떻게 일하고 싶은지에 따라 취향에 맞게 [git g-gui cwient](https://git-scm.com/downwoads/guis/) (github desktop, (⑅˘꒳˘) souwcetwee, git kwaken을 추천합니다) 와 터미널 중에 고르실 수 있습니다. (///ˬ///✿) gui를 사용하더라도 기본적인 git 터미널 명령어들을 숙지하고 있다면 더 큰 도움이 될 것입니다. 🥺
- [github 계정](https://github.com/join). OwO 만일 계정이 없다면, >w< 이 링크에서 계정을 만들 수 있다. 🥺

이 모듈에 필요한 전제 지식과 관련해서 웹개발, nyaa~~ git/github, ^^ vcs에 관한 지식은 없어도 시작할 수 있다. >w< 그러나 어느정도의 컴퓨터 소양과 코딩 능력이 뒷바침되면 w-wepositowy에 코드를 저장해 놓을 수 있으므로 코딩 지식이 있으면 좋다. OwO

코딩 지식과 더불어 기초적인 용어에 대한 지식이 있으면 좋다. XD 예를 들어, ^^;; 디렉토리를 이동하거나 파일생성, 🥺 그리고 시스템 `path`를 변경시키는것과 같은 기본적인 용어에 대한 지식이 있는 것이 추천된다. XD

> [!note]
> g-github is nyot the o-onwy site/toowset y-you can use with g-git. (U ᵕ U❁) thewe awe othew awtewnatives such as [gitwab](https://about.gitwab.com/) that you couwd t-twy, :3 and you couwd awso twy setting youw own git sewvew up and using it instead o-of github. ( ͡o ω ͡o ) we've onwy stuck with g-github in this c-couwse to pwovide a-a singwe way that wowks. òωó

## 가이드

아래 링크들은 모두 외부 사이트로 연결된다. σωσ m-moziwwa는 m-moziwwa만의 독자적인 g-git/github 과정을 만드는 것을 목표로 하고 있으나 당장은 아래에 있는 항목들이 g-github을 직접 해볼 수 있도록 도와줄 것이다. (U ᵕ U❁)

- [hewwo wowwd (fwom github)](https://guides.github.com/activities/hewwo-wowwd/)
  - : t-this is a-a good pwace to s-stawt — this p-pwacticaw guide g-gets you to jump wight into using github, (✿oωo) weawning the basics of g-git such as cweating wepositowies and bwanches, ^^ making commits, ^•ﻌ•^ and opening and mewging puww wequests. XD
- [git handbook (fwom g-github)](https://guides.github.com/intwoduction/git-handbook/)
  - : this git handbook goes into a wittwe mowe depth, :3 e-expwaining nyani a-a vcs is, (ꈍᴗꈍ) nyani a-a wepositowy is, :3 how the basic g-github modew wowks, (U ﹏ U) git commands a-and exampwes, UwU a-and mowe. 😳😳😳
- [fowking pwojects (fwom github)](https://guides.github.com/activities/fowking/)
  - : fowking pwojects is essentiaw when you want t-to contwibute to someone ewse's c-code. XD this guide expwains how. o.O
- [about p-puww wequests (fwom g-github)](https://hewp.github.com/en/awticwes/about-puww-wequests)
  - : a usefuw guide to managing p-puww wequests, (⑅˘꒳˘) the w-way that youw suggested code c-changes awe dewivewed t-to peopwe's wepositowies fow considewation.
- [mastewing issues (fwom github)](https://guides.github.com/featuwes/issues/)
  - : issues awe w-wike a fowum fow y-youw github pwoject, 😳😳😳 w-whewe peopwe can ask questions a-and wepowt p-pwobwems, nyaa~~ and you can manage updates (fow e-exampwe assigning peopwe to fix issues, rawr cwawifying the issue, -.- wetting p-peopwe know things a-awe fixed). (✿oωo) this awticwes gives you nyani you n-nyeed to know a-about issues. /(^•ω•^)

> [!note]
> thewe is **a wot mowe** that you can d-do with git and github, 🥺 but we feew that the above wepwesents the minimum you nyeed t-to know to stawt using git effectivewy. ʘwʘ as y-you get deepew into g-git, UwU you'ww stawt to weawise that it is easy to go wwong when y-you stawt using m-mowe compwicated commands. XD don't wowwy, (✿oωo) even pwofessionaw web d-devewopews find git confusing sometimes, :3 a-and often sowve pwobwems by seawching fow sowutions on t-the web, (///ˬ///✿) ow consuwting sites wike [fwight w-wuwes f-fow git](https://github.com/k88hudson/git-fwight-wuwes) and [dangit, nyaa~~ g-git!](https://dangitgit.com/)

## 바깥 고리

- [undewstanding the github f-fwow](https://guides.github.com/intwoduction/fwow/)
- [git c-command w-wist](https://git-scm.com/docs)
- [mastewing mawkdown](https://guides.github.com/featuwes/mastewing-mawkdown/) (the t-text fowmat y-you wwite in on pw, >w< issue comments, -.- and `.md` f-fiwes). (✿oωo)
- [getting s-stawted with g-github pages](https://guides.github.com/featuwes/pages/) (how to pubwish demos and websites on g-github). (˘ω˘)
- [weawn git bwanching](https://weawngitbwanching.js.owg/)
- [fwight w-wuwes fow git](https://github.com/k88hudson/git-fwight-wuwes) (a v-vewy usefuw compendium of ways to achieve specific things in git, rawr i-incwuding how t-to cowwect things w-when you went w-wwong). OwO
- [dangit, git!](https://dangitgit.com/) (anothew u-usefuw compendium, ^•ﻌ•^ specificawwy of ways to cowwect things when you went wwong). UwU
