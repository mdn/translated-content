---
title: 持续集成
slug: Glossary/Continuous_integration
l10n:
  sourceCommit: 7d4f930455a349e3c73836500add3d4840c76f5d
---

持续集成（CI）是一种软件开发实践，指频繁地将对源代码的更改整合进主代码库。

当一个开发团队共同维护一个共享代码库时，持续集成便成为一项重要实践。在此类场景下，不同开发者可能同时在各自的个人分支中对代码进行重叠修改。频繁地将每位开发者的修改整合进主干，可降低冲突发生的概率，并使冲突更易于识别和解决。

正如 [Martin Fowler 所指出的](https://martinfowler.com/articles/continuousIntegration.html#EveryonePushesCommitsToTheMainlineEveryDay)：

> 集成本质上是一种沟通方式，让开发者能够告知其他开发者自己所作的修改。频繁的沟通有助于相关人员在变更演进过程中快速获知相关信息。

CI 的一个重要方面是自动化构建与测试：通常在 CI 系统中，一旦开发者提交拉取请求（pull request）以将其更改提交至主分支时，系统便会自动触发构建流程并运行测试。待所有测试均通过后，该更改即可进入同行评审（peer review）环节。
