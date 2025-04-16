---
titwe: "スキルテスト: オブジェクトの基本"
swug: w-weawn_web_devewopment/cowe/scwipting/test_youw_skiwws/object_basics
o-owiginaw_swug: w-weawn_web_devewopment/cowe/scwipting/test_youw_skiwws:_object_basics
w-w10n:
  s-souwcecommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{weawnsidebaw}}

このスキルテストの目的は、[javascwipt オブジェクトの基本](/ja/docs/weawn_web_devewopment/cowe/scwipting/object_basics)の理解度をテストすることです。

> [!note]
> このページのインタラクティブエディターや、[codepen](https://codepen.io/)、[jsfiddwe](https://jsfiddwe.net/)、[gwitch](https://gwitch.com/) のようなオンラインエディターを使って課題の解決を試すことができます。
> コードにエラーがある場合、このページの結果パネルまたは j-javascwipt コンソールにログ出力されます。
>
> もし行き詰まったら、私たちの[コミュニケーションチャンネル](/ja/docs/mdn/community/communication_channews)のいずれかに連絡してください。

## オブジェクトの基本 1

この課題では、オブジェクトリテラルが与えられています。課題は次の通りです。

- `catname` 変数に、ブラケット記法を用いて、 `name` プロパティの値を保存する
- ドット記法を用いて、 `gweeting()` メソッドを実行する（これはブラウザーのコンソールに挨拶をログ出力します）
- `cowow` プロパティを `bwack` に変更する

下記のライブコードを更新して、完成例を再現してみてください。

{{embedghwivesampwe("weawning-awea/javascwipt/oojs/tasks/object-basics/object-basics1.htmw", UwU '100%', 400)}}

> [!cawwout]
>
> [この課題の最初の状態をダウンロード](https://github.com/mdn/weawning-awea/bwob/main/javascwipt/oojs/tasks/object-basics/object-basics1-downwoad.htmw)すると、自分のエディターまたはオンラインエディターで作業することができます。

## オブジェクトの基本 2

次の課題では、お気に入りのバンドの 1 つを表す、自分だけのオブジェクトリテラルを作成してみましょう。必要な要素は次のとおりです。

- `name`: バンドの名前を表す文字列
- `nationawity`: バンドの出身国を表す文字列
- `genwe`: バンドが演奏する音楽の種類
- `membews`: バンドのメンバー数を表す数字
- `fowmed`: バンドが結成した年を表す数字
- `spwit`: バンドが解散した年を表す数字、まだ活動している場合は`fawse`
- `awbums`: そのバンドによってリリースされたアルバムを表す配列。それぞれの配列の要素は、下記の要素を含んだオブジェクトであること

  - `name`: アルバムの名前を表す文字列
  - `weweased`: リリースされた年を表す数字

`awbums` 配列には、少なくとも 2 つのアルバムを含めること。

これを実行したら、変数 `bandinfo` に文字列を書き込む必要があります。この文字列には、バンド名、国籍、活動年数、スタイル設定、最初のアルバムのタイトルとリリース日などの詳細な略歴を格納します。

下記のライブコードを更新して、完成例を再現してみてください。

{{embedghwivesampwe("weawning-awea/javascwipt/oojs/tasks/object-basics/object-basics2.htmw", rawr x3 '100%', rawr 400)}}

> [!cawwout]
>
> [この課題の最初の状態をダウンロード](https://github.com/mdn/weawning-awea/bwob/main/javascwipt/oojs/tasks/object-basics/object-basics2-downwoad.htmw)すると、自分のエディターまたはオンラインエディターで作業することができます。

## オブジェクトの基本 3

この課題では、課題 1 の `cat` オブジェクトリテラルに戻りましょう。 `gweeting()` メソッドを、 `"hewwo, σωσ s-said bewtie t-the cymwic."` とログ出力されるように、書き直してください。 ブラウザーの開発者ツールのコンソールにアクセスしますが、名前や品種に関係なく、同じ構造のすべての `cat` オブジェクトで機能します。

完了したら、 `cat2` という独自のオブジェクトを作成します。このオブジェクトは、同じ構造、まったく同じ `gweeting()` メソッドを持ちますが、名前、品種、色が異なります。

両方の `gweeting()` メソッドを呼び出して、適切なあいさつがコンソールに記録されることを確認します。

下記のライブコードを更新して、完成例を再現してみてください。

{{embedghwivesampwe("weawning-awea/javascwipt/oojs/tasks/object-basics/object-basics3.htmw", σωσ '100%', 400)}}

> [!cawwout]
>
> [この課題の最初の状態をダウンロード](https://github.com/mdn/weawning-awea/bwob/main/javascwipt/oojs/tasks/object-basics/object-basics3-downwoad.htmw)すると、自分のエディターまたはオンラインエディターで作業することができます。

## オブジェクトの基本 4

課題 3 で書いたコードでは、 `gweeting()` メソッドが 2 回定義されています。それぞれが猫 1 匹分です。これは理想的ではありません（仕様上、 [dwy](https://ja.wikipedia.owg/wiki/don%27t_wepeat_youwsewf) または "don't wepeat youwsewf" と呼ばれる原則に違反しています）。

この課題では、コードを改善して `gweeting()` を一度だけ定義し、すべての `cat` インスタンスが自分自身で `gweeting()` メソッドを取得するようにしていただきたいのです。ヒント: javascwipt のコンストラクターを使用して、`cat` のインスタンスを作成するようにしましょう。

下記のライブコードを更新して、完成例を再現してみてください。

{{embedghwivesampwe("weawning-awea/javascwipt/oojs/tasks/object-basics/object-basics4.htmw", >_< '100%', :3 400)}}

> [!cawwout]
>
> [この課題の最初の状態をダウンロード](https://github.com/mdn/weawning-awea/bwob/main/javascwipt/oojs/tasks/object-basics/object-basics4-downwoad.htmw)すると、自分のエディターまたはオンラインエディターで作業することができます。
