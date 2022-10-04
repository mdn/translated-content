---
title: プルリクエストのガイドライン
slug: MDN/Community/Pull_requests
l10n:
  sourceCommit: e7981a5962663764c953ef509d7a8f2d0f934885
---

{{MDNSidebar}}

## プルリクエスト提出後のガイドライン

- **テストの失敗を処理してください**。 PR を提出すると、いくつかのテストが [GitHub Actions](https://github.com/features/actions) として自動的に実行されます。これらのテストのうち一つ以上が失敗した場合、根本的な問題を解決するのはあなたの責任です。もし、根本的な問題を解決する方法がわからなければ、助けを求めることができます。失敗したテストがある場合、あなたの PR は承認されず、マージされません。
- **マージの競合を解決してください**。もしあなたの PR がメインブランチと [マージ競合](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/addressing-merge-conflicts/about-merge-conflicts) があった場合（GitHub はこれを自動的にチェックして通知します）、あなたはそれを解決する責任があります。ここでは 2 つの選択肢があります。
  - 単純なマージの競合については、[GitHub の UI](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/addressing-merge-conflicts/resolving-a-merge-conflict-on-github) を使用して競合を解決することができます。
  - より複雑なマージ競合については、[コマンドライン（端末）](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/addressing-merge-conflicts/resolving-a-merge-conflict-using-the-command-line)を使用して競合を解決する必要があります。
- **閉じられたPRを再開しないでください**。レビュアーが閉じた PR を再び開くことは、議論して合意が得られていない限り、しないでください。ほとんどの場合、新しい PR を作成し、以前の PR を参照するのが最善です。

## プルリクエストのレビュー

このドキュメントは、 MDN Web Docs のコンテンツ変更のためのレビュープロセスについて説明し、 MDN コンテンツの PR のレビューを担当することになった人たちが使用するためのものです。

## コンテンツ変更の審査プロセス

私たちが MDN で返されるコンテンツの変更は、例えば、様々な作業の流れに関連しています。

- 日々のコンテンツ改善作業 - 新しい API、新しい CSS プロパティ、その他プラットフォームの重要な更新やコンテンツの追加。通常、Mozilla、Google、Open Web Docs、Samsung などで働く MDN スタッフによって行われますが、コミュニティのボランティアによっても行われることがあります。
- 「立ち寄り修正」 - 誤字脱字、文法的な問題、技術的な不正確さを修正するために行われる小さな更新で、通常は MDN Web Docs の読者によって見つけられたものです。
- MDN コンテンツのバグ修正 - 通常は、ボランティアによってこのリポジトリーの問題が閉じられるときに行われます。

コンテンツの変更がどのように行われるかにかかわらず、このリポジトリーで [プルリクエスト](https://github.com/mdn/content/pulls) として提出されます。サイトが古くならないように、迅速なレビューとマージが必要になります。これは以下のように扱われています。

1. MDN の様々なスタッフやボランティアが「トピックレビューオーナー」として割り当てられています。つまり、サイトの特定のトピック領域 (例: CSS リファレンスや学習領域) に関連する pull request が来た場合、その領域のトピックレビューオーナーに割り当てられ、レビュー依頼のメールが届くことになります。これは [CODEOWNERS](https://github.com/mdn/content/blob/main/.github/CODEOWNERS) ファイルを使用して処理されます。このファイルでは、特定のコンテンツディレクトリーがトピックレビューオーナーの GitHub ユーザーネームに割り当てられています。
1. レビューが行われ、プルリクエストが承認されたら、レビュアーはプルリクエストをマージする必要もあります。
1. このサイトは、コンテンツが古くならないように、 24 時間に一度、再構築されます。

## レビューのガイドライン

MDN コンテンツの変更をレビューする場合、以下のガイドラインに目を通してください。ここにはかなり多くのことが書かれていますが、すぐにこの点すべてに完璧に従ったレビューができなくても気にしないでください。コンテンツが読みやすく、有用で、正しく、不適切でないことを確認することは、すべてのガイドラインに忠実に従うことよりも重要なことです。

1. [MDN のコード例のガイドライン](/ja/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide)に目を通して、コード例がガイドラインに沿っていることを確認 してください。いずれは使用されるようになりますし、将来的にはガイドラインに対して自動的にリントを行う予定です。
1. [MDN の執筆スタイルガイド](/ja/docs/MDN/Writing_guidelines/Writing_style_guide)に目を通し、新しいテキストコンテンツのレビューに情報を使用してください。
1. MDN の[プルリクエストガイドライン](https://github.com/mdn/content/blob/main/README.md#pull-request-etiquette)をよく理解すること。
   この点の要点は以下の通りです。
   - 投稿者がこの変更を行う理由を説明していない場合、あなたにはレビューのためにさらなる情報を要求する権利があります。
   - あなたは、プルリクエストが複雑すぎる場合、および/または、無関係な複数の変更を含んでいる場合、プルリクエストを閉じることができ、より小さい原始的な塊で変更を提出するように依頼する権利があります。
1. プルリクエストをレビューするときは、 [GitHub レビューツール](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews)を使用してください。投稿者にもう少し作業をしてもらう必要があるようなレビューを投稿する場合は "Request changes"、投稿が追加できる状態になっており、マージしたい場合は "Approve" を使用してください。より多くの情報が欲しい場合は、[Reviewing proposed changes in a pull request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-proposed-changes-in-a-pull-request) も有用です。
1. レビューコメントを書くとき、あるいは投稿者や他のコミュニティメンバーと対話するときは、常に礼儀正しく、建設的であること。私たちは MDN に貢献するとき、Mozilla の[コミュニティ参加ガイドライン](https://www.mozilla.org/ja/about/governance/policies/participation/)を遵守することを意味する行動規範に拘束されます。もし誰かが違法となりうる行為や、あなたや他の誰かを危険、歓迎されない、不快にさせるような行為に及んだ場合には、[通報](https://www.mozilla.org/ja/about/governance/policies/participation/reporting/)することが推奨されます。私たちは MDN が、私たち全員が誇りに思えるような、歓迎され、友好的なコミュニティであることを望んでいます。
1. もしプルリクエストが小さなタイプミスや他にも小さな問題を除けば問題ない場合、提出者に修正を依頼するのではなく、自分で問題を修正したいと思うかもしれません。 PR が変更を許可するように設定されていれば、これは可能です（詳しくは [フォークから作成されたプルリクエストブランチへの変更を許可する](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/allowing-changes-to-a-pull-request-branch-created-from-a-fork) をご覧ください）。もし、他の人のプルリクエストに変更を加える方法がわからなければ、 [@vkWeb](https://github.com/vkWeb/) がコマンドラインでの簡単な方法を書いています。 [ReviewPRCommands](https://gist.github.com/vkWeb/dcec82b079f1edc19478ddb58b0ffc5e) をご覧ください。
   - プルリクエストの "Files changed" タブで編集したいファイルを探し、三点メニュー (...) > Edit file を選択してください。
1. 自分がレビューするよう選択されたコンテンツの変更について理解できない場合、またはその変更が自分にとって大きすぎ、複雑すぎると感じた場合でも、慌てないでください。同僚や、トピックレビューオーナーグループの誰か（誰か知っている場合）など、他の人に助けを依頼するために気軽に声をかけてみてください。もし、誰に助けを求めたらいいのかわからない場合は、私たちの `@core-yari-content` グループに ping を送って助けを求めてください。
1. この点に関連して、ページの完全な書き換えや、いくつかの新しい参照ページやチュートリアルの追加など、大規模で複雑なコンテンツの変更を予告なしにレビューする必要があることは稀です。通常、このような変更は、コンテンツの追加が承認され、レビュー担当者がすでに割り当てられているような、特定の作業の流れの中で行われます。このような場合、PRは、これらの詳細を説明する課題にリンクすべきです。よくわからない場合は、コンテンツのレビューが必要かどうか、また変更の根拠がどこに説明されているか、投稿者に依頼してください。それでもわからない場合、あるいはコンテンツが疑わしいと思われる場合は、 [MDN Web Docs チャットルーム](https://chat.mozilla.org/#/room/#mdn:mozilla.org) で私たちのチームに助けを求めてください。

注意: プルリクエストをレビューしていると、同じファイルのいくつかに触れている別のプルリクエストが、あなたがレビューしているものよりも先にマージされている場合、マージの競合に遭遇するかもしれません。 [Addressing merge conflicts](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/addressing-merge-conflicts) は、あなたの助けとなる有用なリソースです。必要であれば、気軽にあなたのチームに助けを求めてください。

## プルリクエストにおけるレビュー担当者の上書きについて

`content` リポジトリーに提出されるプルリクエストの中には、ブラウザベンダーやその他組織で行われている、ライターやレビュアーを定義した特定の仕事の流れに関連するものがあります。このような場合、PR の提出者は、例えばプルリクエストの説明の一番下にある行に、レビュー担当者のユーザー名を記載します。

`reviewer: @jpmedley`

プルリクエストを送信すると、プルリクエストの説明で指定されたレビュアーにレビューを依頼します。そのレビュアーが新しいコンテンツを承認すると、 `CODEOWNERS` システムで要求されているように、そのプルリクエストをマージ可能にするために、あなたに承認を依頼します。

したがって、もしあなたがプルリクエストのレビュー依頼を受けた後、上記の説明のようにあなたが他のレビュアーに上書きされたことがわかったら、プルリクエストをレビューしないでください。承認依頼を待つだけでいいのです。

## トピックレビューオーナー

以下の詳細な仕様書は、その下に掲載されている親切な人たちによって検討されています。彼らにていねいに接し、このプロジェクトに与えてくれるすべての手助けに感謝しましょう。もしあなたが MDN コンテンツのレビューを手伝いたいのであれば、[私たち連絡してください](/ja/docs/MDN/Community/Contributing/Getting_started#step_4_ask_for_help)。

以下の一覧に明示されていないコンテンツの変更は [@core-yari-content](https://github.com/orgs/mdn/teams/core-yari-content) チームによって処理されることに注意してください。

- [Web accessibility content](https://github.com/orgs/mdn/teams/yari-content-accessibility)
- [General learning content](https://github.com/orgs/mdn/teams/yari-content)
- [CSS learning content](https://github.com/orgs/mdn/teams/yari-content-css)
- [Server-side learning content](https://github.com/orgs/mdn/teams/yari-content)
- [MDN meta docs](https://github.com/orgs/mdn/teams/yari-content)
- [Firefox Developer Tools content](https://github.com/orgs/mdn/teams/yari-content)
- [Mozilla Add-ons reference content](https://github.com/orgs/mdn/teams/yari-content-mozilla-add-ons)
- [HTTP reference content](https://github.com/orgs/mdn/teams/yari-content-http)
- [CSS reference content](https://github.com/orgs/mdn/teams/yari-content-css)
- [HTML reference content](https://github.com/orgs/mdn/teams/yari-content-html)
- [JavaScript reference content](https://github.com/orgs/mdn/teams/yari-content-javascript)
- [Web API reference content](https://github.com/orgs/mdn/teams/yari-content-web-api)
- [SVG reference content](https://github.com/orgs/mdn/teams/yari-content-svg)
- [WebAssembly reference content](https://github.com/orgs/mdn/teams/content-webassembly)

### レビュアーの卒業生

以下の人々は、かつて我々のレビューチームの一員でしたが、現在は活動する時間がなくなってしまいました。この場を借りて彼らの助けに感謝したいと思います。

- [@vkWeb](https://github.com/vkWeb/)
- [@ericwbailey](https://github.com/ericwbailey)
- [@chrisdavidmills](https://github.com/chrisdavidmills/)
- [@mirunacurtean](https://github.com/mirunacurtean)

## 雑音ではなく、前進を

プロジェクトでのコミュニケーションの取り方についてよく考えましょう。それが有用であり、他の協力者の仕事を難しくしていないことを確認してください。問題を修正するためにプルリクエストを提出することは素晴らしいことですが、それらは本当に有用で、レビューしやすいものでしょうか？問題を提起し、他の会話に参加するのは良いことですが、あなたの問題やコメントはトピックに沿ったものですか、それとも単なる雑音に過ぎないものではないでしょうか？

ルールとして、以下のことを行ってください。

- PR ごとに 1 つの問題を修正する - これはあなたにとって少しばかり作業量が増えるかもしれませんが、単一の明確な修正をレビューするのはずっと簡単です。
- 有用かどうかわからない場合や簡単な疑問は、[チャットルーム](https://chat.mozilla.org/#/room/#mdn:mozilla.org)や[フォーラム](<(https://discourse.mozilla.org/c/mdn/236)>)などの別の仕組みを使用して質問を依頼してください。
- PRを提出する前に、まず[協力者ドキュメント]()と[ドキュメントの書き方]()を読んで、自分自身で答えを出してみてください。

以下のことを行わないでください。

- 複数の修正を単一のプルリクエストに詰め込もうとすること。レビューが非常に困難になりますし、疑惑を持たれてしまいます（有効な変更の間に悪意のあるコードを隠そうとしていると考える人がいるかもしれません）。

## プルリクエストの提出

## プルリクエストのレビュー

## 受け入れられるプルリクエスト

## プルリクエストの遊休化
