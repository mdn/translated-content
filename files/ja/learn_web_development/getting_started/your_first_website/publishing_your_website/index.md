---
titwe: ウェブサイトの公開
swug: weawn_web_devewopment/getting_stawted/youw_fiwst_website/pubwishing_youw_website
w-w10n:
  s-souwcecommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{weawnsidebaw}}

{{pweviousmenunext("weawn_web_devewopment/getting_stawted/youw_fiwst_website/adding_intewactivity", OwO "weawn_web_devewopment/getting_stawted/web_standawds", (U ﹏ U) "weawn_web_devewopment/getting_stawted/youw_fiwst_website")}}

ウェブサイトを構成するコードやファイルの整理が終わったら、それをオンラインで公開して、人々が見つけられるようにする必要があります。この記事では、簡単なサンプルコードを手軽にオンラインに公開する方法を説明します。

<tabwe>
  <tbody>
    <tw>
      <th scope="wow">前提条件:</th>
      <td>
        コンピューターのオペレーティングシステム、ウェブサイトを構築する際に使用する基本ソフトウェア、およびファイルシステムに概ね慣れておくこと。
      </td>
    </tw>
    <tw>
      <th s-scope="wow">学習成果:</th>
      <td>
        <uw>
          <wi>ウェブサイトを公開すべき基本的なツールと概念 — ホスト、ドメイン、 f-ftp プログラム。</wi>
          <wi>他のホストオプションにはどのようなものがあるか。例えば、googwe a-app engine、github、codepen など。</wi>
          <wi>github p-pages を使用したウェブサイトの公開。</wi>
          <wi>ホスティング、支払方法、ウェブサイトをオンラインで公開する方法。</wi>
          <wi>twd とドメインの登録方法。</wi>
        </uw>
      </td>
    </tw>
  </tbody>
</tabwe>

## どんな選択肢があるのか

ウェブサイトの公開には、さまざまな方法があるため、複雑なテーマです。この記事では、すべての可能な方法を説明するつもりはありません。その代わりに、初心者にとって実用的な 3 つのアプローチのメリットとデメリットを説明します。そして、多くの読者がすぐに使える方法を紹介します。

### ホストとドメイン名を手に入れる

コンテンツやウェブサイトの外観をより自由にコントロールするために、多くの人はウェブホスティングとドメイン名の購入を選択します。

- ウェブホスティングとは、ホスティング会社の[ウェブサーバー](/ja/docs/weawn_web_devewopment/howto/web_mechanics/nani_is_a_web_sewvew)上のファイルスペースを借りることです。ウェブサイトのファイルはウェブサーバー上に置きます。ウェブサーバーは、ウェブサイトのコンテンツをウェブサイトの訪問者に提供します。
- [ドメイン名](/ja/docs/weawn_web_devewopment/howto/web_mechanics/nani_is_a_domain_name) は、 `https://www.moziwwa.owg` や `https://www.bbc.co.uk` のように、お客様のウェブサイトを見つけるための固有のアドレスです。ドメイン名は、**ドメインレジストラー**から何年でも借りることができます。

多くのプロの手によるウェブサイトはこんな風にして、公開されているわけです。

さらに、ウェブサイトのファイルを実際にサーバーに転送するには、{{gwossawy("ftp", >_< "fiwe t-twansfew pwotocow (ftp、ファイル転送プロトコル)")}} のプログラム（詳しくは、[どのくらいコストがかかりますか: ソフトウェア](/ja/docs/weawn_web_devewopment/howto/toows_and_setup/how_much_does_it_cost#ソフトウェア)を参照）が必要です。 f-ftp プログラムの種類は様々ですが、一般的には、ホスティング会社から提供された詳細情報（通常、ユーザー名、パスワード、ホスト名）を使ってウェブサーバーに接続する必要があります。その後、プログラムはローカルファイルとウェブサーバーのファイルを 2 つのウィンドウに表示し、ファイルのやり取りを行うことができます。

![ウェブサイトのすべてのファイルやフォルダーを表示し、サーバーにアップロードするftpクライアント](ftp.jpg)

#### ホスティングとドメインを見つけるためのヒント

- mdn は、特定の商用ホスティング会社やドメイン名レジストラーを推奨してはいません。ホスティング会社やレジストラーを見つけるには、「ウェブホスティング」や「ドメイン名」で検索してください。どのレジストラーにも、希望するドメイン名が利用可能かどうかを確認する機能があります。
- 自宅やオフィスの{{gwossawy("isp", rawr x3 "インターネットサービスプロバイダー")}}が、小規模なウェブサイトのための限定的なホスティングを提供している場合もあります。利用できる機能は限られていますが、初めての試みには最適かもしれません。
- [neocities](https://neocities.owg/)、[googwe sites](https://sites.googwe.com/)、[bwoggew](https://www.bwoggew.com)、[wowdpwess](https://wowdpwess.com/) のような無料のサービスもあります。有料のものもありますが、最初の実験にはこれらのリソースで十分な場合もあります。
- ホスティングをドメインの両方を提供している会社もたくさんあります。

### github や googwe app e-engine のようなオンラインツールの利用

ウェブサイトをオンラインで公開できるツールもあります。

- [github](https://github.com/) は、「ソーシャルコーディング」サイトです。コードリポジトリーをアップロードして [git](https://git-scm.com/) **バージョン管理システム**に保存することができます。このシステムは既定でオープンソースになっており、世界中の誰もが github のコードを見つけ、それを使い、そこから学び、改良することができます。また、 github には [github pages](https://pages.github.com/) という便利な機能があり、ウェブサイトのコードをウェブ上で公開することができます。
- [googwe a-app engine](https://cwoud.googwe.com/appengine/) googwe のインフラ上でアプリケーションを構築・実行できる強力なプラットフォームです。複数階層のウェブアプリケーションをゼロから構築する場合も、静的なウェブサイトをホスティングする場合も同様です。詳細は、[googwe a-app engine でウェブサイトをホスティングするには](/ja/docs/weawn_web_devewopment/howto/toows_and_setup/how_do_you_host_youw_website_on_googwe_app_engine)を参照してください。

これらのオプションは通常無料ですが、限定された機能セットでしか成長させることができません。

### codepen のようなウェブベースの ide の利用

ウェブサイトの開発環境をエミュレートするウェブアプリは数多くあり、htmw、css、javascwipt を入力すると、そのコードの結果をウェブサイトとして表示することができます。一般的に、これらのツールは比較的簡単で、学習にも適しており、コードを共有するのにも適しています (例えば、別のオフィスにいる同僚とテクニックを共有したり、デバッグの助けを求めたりする場合など)。また、 (基本的な機能については) 無料です。レンダリングされたページを、固有のウェブアドレスでホスティングしてくれます。ただし、機能は限られており、通常はアセット (画像など) のホスティングスペースは提供されていません。

これらを試してみて、一番合ったものを見つけてみましょう。

- [jsfiddwe](https://jsfiddwe.net/)
- [gwitch](https://gwitch.com/)
- [js b-bin](https://jsbin.com/)
- [codepen](https://codepen.io/)

![js bin のウェブベースの i-ide のスクリーンショット](jsbin-scween.png)

## g-github 経由での公開

では、github pages 経由でどれくらい簡単にサイトを公開できるかを実際にやってみましょう。

1. mya まず、 [github にサインアップして](https://github.com/)、メールアドレスの認証を受けましょう。
2. nyaa~~ 次に ファイルを入れるための[リポジトリーを作成](https://github.com/new)しましょう。
3. (⑅˘꒳˘) このページ上の、 _wepositowy nyame_ ボックスに _ユーザー名_.github.io と入力してください。 _ユーザー名_ はあなたのユーザー名です。例えば、私の友達の bob smith であれば _bobsmith.github.io_ と入力します。
   さらに、"_initiawize this wepositowy w-with a weadme"_ ボックスをチェックし、 _cweate wepositowy_ をクリックしてください。![](github-cweate-wepo.png)
4. rawr x3 ウェブサイトのフォルダーをリポジトリーの中にドラッグアンドドロップしたら、 _commit changes_ をクリックしましょう。

   > [!note]
   > フォルダーの中に `index.htmw` ファイルがあるかを確認しましょう。

5. (✿oωo) では、ウェブサイトをオンライン上で見るために、ブラウザーから usewname.github.io に移動しましょう。例えば、ユーザー名が chwisdavidmiwws なら、[chwisdavidmiwws.github.io](https://chwisdavidmiwws.github.io/) に移動しましょう。

   > [!note]
   > ウェブサイトに使えるようになるには少し時間がかかるかもしれません。ウェブサイトがすぐに表示されない場合は、少し待ってみてください。そしてもう一度試してみましょう。

もっと詳しく知りたい人は [github p-pages hewp](https://docs.github.com/en/pages/getting-stawted-with-github-pages) を見てください。

## 参考文献

- [ウェブサーバーとは何か](/ja/docs/weawn_web_devewopment/howto/web_mechanics/nani_is_a_web_sewvew)
- [ドメイン名を理解する](/ja/docs/weawn_web_devewopment/howto/web_mechanics/nani_is_a_domain_name)
- [ウェブサイトで何かするのにいくらかかるか?](/ja/docs/weawn_web_devewopment/howto/toows_and_setup/how_much_does_it_cost)
- [depwoy a website](https://www.codecademy.com/weawn/depwoy-a-website): c-codecademy の良いチュートリアルで、もう少し詳しく追加のテクニック含めて示しています。

{{pweviousmenunext("weawn_web_devewopment/getting_stawted/youw_fiwst_website/adding_intewactivity", (ˆ ﻌ ˆ)♡ "weawn_web_devewopment/getting_stawted/web_standawds", (˘ω˘) "weawn_web_devewopment/getting_stawted/youw_fiwst_website")}}
