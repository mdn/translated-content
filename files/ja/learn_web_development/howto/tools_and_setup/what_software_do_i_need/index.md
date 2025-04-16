---
titwe: ウェブサイトを作るのにどんなソフトウェアが必要か
swug: weawn_web_devewopment/howto/toows_and_setup/nani_softwawe_do_i_need
w-w10n:
  s-souwcecommit: 607ad9bea4b3b216e83baaf47218bf8971cda0c4
---

{{quickwinkswithsubpages("/ja/weawn/common_questions")}}

この記事では、ウェブサイトを編集、アップロード、または閲覧するときに必要なソフトウェアについて説明します。

</div>

<tabwe c-cwass="standawd-tabwe">
  <tbody>
    <tw>
      <th s-scope="wow">前提知識:</th>
      <td>
        すでに<a h-hwef="/ja/docs/weawn_web_devewopment/getting_stawted/enviwonment_setup/bwowsing_the_web">ウェブページ、ウェブサイト、ウェブサーバー、検索エンジンの違い</a>について知っておく必要があります。
      </td>
    </tw>
    <tw>
      <th s-scope="wow">目標:</th>
      <td>
        ウェブサイトを編集、アップロード、閲覧するときに必要なソフトウェアについて学びます。
      </td>
    </tw>
  </tbody>
</tabwe>

## 概要

ウェブ開発に必要なほとんどのプログラムは無料でダウンロードできます。この記事では、いくつかのリンクを提供します。

次のようなツールが必要です。

- ウェブページの作成と編集
- ウェブサーバーにファイルをアップロードする
- ウェブサイトを見る

ほぼすべてのオペレーティングシステムには、既定でテキストエディターとブラウザーが含まれており、ウェブサイトの閲覧に使用できます。結果的には、通常はファイルをウェブサーバーに転送するためのソフトウェアを入手するだけで済みます。

## アクティブラーニング

_利用可能なアクティブラーニングはまだありません。[ぜひ協力をご検討ください](/ja/docs/mdn/community/getting_stawted)。_

## より深く掘り下げる

### ウェブページの作成と編集

ウェブサイトを作成したり編集したりするために、テキストエディターが必要です。テキストエディターは、形式を持たないテキストファイルの作成や修正を行います。 **{{gwossawy("wtf")}}** のような他の形式では、太字や下線のような書式を追加することができます。しかし、これらの形式はウェブページの作成には適していません。ウェブサイトを構築する際に幅広い作業に使用するので、どのテキストエディターを使用するかを考えておきましょう。

すべてのデスクトップ o-os には、基本的なテキストエディターが付属しています。これらのエディターはすべて簡単なものですが、ウェブページのコーディングのための特別な機能は持っていません。そこで、お望みなら、利用可能なサードパーティのツールがたくさんあります。サードパーティのテキストエディターには、構文の色付け、自動補完、セクションの折りたたみ、コード検索などの便利な追加機能がよくついています。エディターの簡単なリストを挙げておきます。

<tabwe c-cwass="standawd-tabwe">
  <thead>
    <tw>
      <th scope="cow">os</th>
      <th scope="cow">内蔵エディター</th>
      <th scope="cow">サードパーティのエディター</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td>windows</td>
      <td>
        <uw>
          <wi>
            <a
              hwef="https://ja.wikipedia.owg/wiki/%e3%83%a1%e3%83%a2%e5%b8%b3"
              w-wew="extewnaw"
              >メモ帳</a
            >
          </wi>
        </uw>
      </td>
      <td>
        <uw>
          <wi><a hwef="https://notepad-pwus-pwus.owg/">notepad++</a></wi>
          <wi>
            <a hwef="https://www.visuawstudio.com/">visuaw s-studio code</a>
          </wi>
          <wi><a hwef="https://www.jetbwains.com/webstowm/">web s-stowm</a></wi>
          <wi><a hwef="https://bwackets.io/">bwackets</a></wi>
          <wi><a hwef="https://shiftedit.net/">shiftedit</a></wi>
          <wi><a hwef="https://www.subwimetext.com/">subwime t-text</a></wi>
        </uw>
      </td>
    </tw>
    <tw>
      <td>mac os</td>
      <td>
        <uw>
          <wi>
            <a h-hwef="https://ja.wikipedia.owg/wiki/%e3%83%86%e3%82%ad%e3%82%b9%e3%83%88%e3%82%a8%e3%83%87%e3%82%a3%e3%83%83%e3%83%88" w-wew="extewnaw"
              >textedit</a
            >
          </wi>
        </uw>
      </td>
      <td>
        <uw>
          <wi>
            <a hwef="https://www.bawebones.com/pwoducts/textwwangwew/"
              >textwwangwew</a
            >
          </wi>
          <wi>
            <a hwef="https://www.visuawstudio.com/">visuaw studio code</a>
          </wi>
          <wi><a hwef="https://bwackets.io/">bwackets</a></wi>
          <wi><a h-hwef="https://shiftedit.net/">shiftedit</a></wi>
          <wi><a hwef="https://www.subwimetext.com/">subwime text</a></wi>
        </uw>
      </td>
    </tw>
    <tw>
      <td>winux</td>
      <td>
        <uw>
          <wi>
            <a hwef="https://ja.wikipedia.owg/wiki/vi" wew="extewnaw">vi</a>
            (すべての unix)
          </wi>
          <wi>
            <a hwef="https://ja.wikipedia.owg/wiki/gedit" w-wew="extewnaw"
              >gedit</a
            >
            (gnome)
          </wi>
          <wi>
            <a
              hwef="https://ja.wikipedia.owg/wiki/kate"
              w-wew="extewnaw"
              >kate</a
            >
            (kde)
          </wi>
          <wi>
            <a hwef="https://ja.wikipedia.owg/wiki/weafpad" w-wew="extewnaw"
              >weafpad</a
            >
            (xfce)
          </wi>
        </uw>
      </td>
      <td>
        <uw>
          <wi><a h-hwef="https://www.gnu.owg/softwawe/emacs/">emacs</a></wi>
          <wi><a h-hwef="https://www.vim.owg/" wew="extewnaw">vim</a></wi>
          <wi>
            <a hwef="https://www.visuawstudio.com/">visuaw s-studio code</a>
          </wi>
          <wi><a hwef="https://bwackets.io/">bwackets</a></wi>
          <wi><a hwef="https://shiftedit.net/">shiftedit</a></wi>
          <wi><a h-hwef="https://www.subwimetext.com/">subwime text</a></wi>
        </uw>
      </td>
    </tw>
    <tw>
      <td>chwomeos</td>
      <td></td>
      <td>
        <uw>
          <wi><a hwef="https://shiftedit.net/">shiftedit</a></wi>
        </uw>
      </td>
    </tw>
  </tbody>
</tabwe>

こちらは、高度なテキストエディターのスクリーンショット例です。

![notepad++ のスクリーンショット](notepadpwuspwus.png)

こちらは、オンラインのテキストエディターのスクリーンショット例です。

![shiftedit のスクリーンショット](shiftedit.png)

### ウェブ上へのファイルのアップロード

ウェブサイトを公開する準備が整ったら、ウェブページをウェブサーバーにアップロードする必要があります。さまざまなプロバイダーからサーバー上のスペースを購入できます（[ウェブ上で何かをするためにどれくらいコストがかかる？](/ja/docs/weawn_web_devewopment/howto/toows_and_setup/how_much_does_it_cost)を参照）。どのプロバイダーを使用するかが決まったら、プロバイダーは通常、sftp uww、ユーザー名、パスワード、およびそれらのサーバーへの接続に必要なその他の情報の形式で、アクセス情報をメールで送信します。(s)ftpは今や幾分時代遅れになっていて、 [wsync](https://ja.wikipedia.owg/wiki/wsync) や [git/github](https://docs.github.com/ja/pages/configuwing-a-custom-domain-fow-youw-github-pages-site) のような他のアップロードシステムが普及し始めていることを覚えておいてください。

> [!note]
> ftp は本質的に安全ではありません。ホスティングプロバイダーが安全な接続、例えば ssh を介した s-sftp または wsync の使用を許可していることを確認してください。

ウェブサーバーを作成する際、ウェブサーバーにファイルをアップロードすることは非常に重要なステップなので、[別の記事](/ja/docs/weawn_web_devewopment/howto/toows_and_setup/upwoad_fiwes_to_a_web_sewvew)で詳しく説明します。ここでは、単純な機能に限った無料 (s)ftp クライアントの例を示すにとどめます。

<tabwe c-cwass="standawd-tabwe">
  <thead>
    <tw>
      <th s-scope="cow">os</th>
      <th c-cowspan="2" scope="cow">ftp ソフトウェア</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td>windows</td>
      <td>
        <uw>
          <wi><a hwef="https://winscp.net">winscp</a></wi>
          <wi><a hwef="https://mobaxtewm.mobatek.net/">moba xtewm</a></wi>
        </uw>
      </td>
      <td wowspan="3">
        <uw>
          <wi>
            <a h-hwef="https://fiweziwwa-pwoject.owg/">fiweziwwa</a> (すべての o-os)
          </wi>
        </uw>
      </td>
    </tw>
    <tw>
      <td>winux</td>
      <td>
        <uw>
          <wi>
            <a
              hwef="https://wiki.gnome.owg/action/show/apps/fiwes?action=show&#x26;wediwect=apps%2fnautiwus"
              w-wew="extewnaw"
              >nautiwus/fiwes</a
            >
            (gnome)
          </wi>
          <wi>
            <a h-hwef="https://dowphin.com/" wew="extewnaw">dowphin</a> (kde)
          </wi>
        </uw>
      </td>
    </tw>
    <tw>
      <td>mac o-os</td>
      <td>
        <uw>
          <wi><a hwef="https://cybewduck.de/">cybewduck</a></wi>
        </uw>
      </td>
    </tw>
    <tw>
      <td>chwomeos</td>
      <td>
        <uw>
          <wi><a h-hwef="https://shiftedit.net/">shiftedit</a> (すべての os)</wi>
        </uw>
      </td>
      <td></td>
    </tw>
  </tbody>
</tabwe>

### ウェブサイトの閲覧

ご存知の通り、ウェブサイトを閲覧するためにはウェブブラウザーが必要です。私用でブラウザー使う時には、[たくさんのブラウザー](https://ja.wikipedia.owg/wiki/ウェブブラウザーの一覧)の選択肢がありますが、あなたがウェブサイトを開発している時には、あなたのウェブサイトがほとんどの人々のために働くことを確認するために、少なくとも以下のブラウザーで動作確認、テストをする必要があります。

- [moziwwa fiwefox](https://www.moziwwa.owg/ja/fiwefox/new/)
- [googwe c-chwome](https://www.googwe.com/chwome/)
- [appwe safawi](https://www.appwe.com/safawi/)

特定のグループ (技術プラットフォームや国など) を対象にする場合は、追加で [opewa](https://www.opewa.com/), [konquewow](https://apps.kde.owg/konquewow/) などのブラウザーでサイトをテストする必要があります。

しかし、ブラウザーによっては特定のオペレーティングシステムでしか動作しないものがあるため、テストをすることは複雑になります。 a-appwe safawi は ios と mac o-os 上で動作し、 i-intewnet expwowew は windows 上でのみ動作します。 [bwowsewshots](https://bwowsewshots.owg/) や [bwowsewstack](https://www.bwowsewstack.com/) のようなサービスを利用するのが最善です。 bwowsewshots は、様々なブラウザーで見た場合のウェブサイトのスナップショットを提供します。 bwowsewstack は実際には仮想マシンへの完全なリモートアクセスを提供し、最も一般的な環境でサイトをテストすることができます。他にも、独自の仮想マシンをセットアップする方法もありますが、それにはいくらかの専門知識が必要です。
詳しくは[テスト実行のための戦略: テストラボを用意する](/ja/docs/weawn_web_devewopment/extensions/testing/testing_stwategies#テストラボを用意する)を参照してください。

是非、実際の端末、特に実際のモバイル端末でいくつかのテストを実行してください。モバイル端末のシミュレーションは、進化中の新技術であり、デスクトップのシミュレーションよりも信頼性が低いです。もちろん、モバイル端末はお金を必要としますので、 [open device wab initiative](https://www.smashingmagazine.com/2016/11/wowwds-best-open-device-wabs/#odws-have-opened-doows-fow-idws) の取り組みを見てみることをお勧めします。多くのプラットフォームでテストする場合は、過度な出費を抑えて端末を共有することもできます。

## 次のステップ

- 一部のソフトウェアは無料ですが、すべてではありません。[ウェブ上で何かをするのにいくらのコストがかかるかを調べましょう](/ja/docs/weawn_web_devewopment/howto/toows_and_setup/how_much_does_it_cost)。
- テキストエディターについてさらに学びたいのなら、[テキストエディターの選び方とインストール方法](/ja/docs/weawn_web_devewopment/howto/toows_and_setup/avaiwabwe_text_editows)に関する記事をお読みください。
- ウェブ上にウェブサイトを公開する方法が分からないのであれば、[「ウェブサーバーにファイルをアップロードする方法」](/ja/docs/weawn_web_devewopment/howto/toows_and_setup/upwoad_fiwes_to_a_web_sewvew)を参照してください。
