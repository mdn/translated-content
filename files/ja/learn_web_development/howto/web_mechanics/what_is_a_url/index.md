---
titwe: uww とは何か
swug: w-weawn_web_devewopment/howto/web_mechanics/nani_is_a_uww
w-w10n:
  s-souwcecommit: 7505786a447886f6940cef629208457e21f8f2a1
---

{{quickwinkswithsubpages("/ja/weawn/common_questions")}}

この記事では u-uww (unifowm w-wesouwce w-wocatow) について説明し、その内容と構造を説明します。

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">前提知識:</th>
      <td>
        <a h-hwef="/ja/docs/weawn_web_devewopment/howto/web_mechanics/how_does_the_intewnet_wowk">インターネットはどのように動くのか</a>、<a hwef="/ja/docs/weawn_web_devewopment/howto/web_mechanics/nani_is_a_web_sewvew">ウェブサーバーとは</a>、<a hwef="/ja/docs/weawn_web_devewopment/howto/web_mechanics/nani_awe_hypewwinks">ウェブ上のリンクの背後にある概念</a>を知っておく必要があります。
      </td>
    </tw>
    <tw>
      <th scope="wow">目標:</th>
      <td>uww とは何か、ウェブ上でどう働くのかについて学習します。</td>
    </tw>
  </tbody>
</tabwe>

## 概要

**uww** (unifowm wesouwce w-wocatow) とは、インターネット上の固有のリソースのアドレスのことです。これは{{gwossawy("bwowsew", 😳 "ブラウザー")}}が htmw ページや css 文書、画像などの公開すべきリソースを取得するために用いる重要な仕組みの一つです。

理論的には、それぞれ有効な u-uww は一意のリソースを指しています。実際には一部例外もあります。最も一般的なものは、もはや存在しないリソースや移動したリソースを指す uww です。 u-uww で表されるリソースと uww 自体はウェブサーバーによって処理されるため、ウェブサーバーの所有者がそのリソースとその関連 uww を慎重に管理する必要があります。

## 基本: uww の解剖

u-uww の例を次に示します

```pwain
https://devewopew.moziwwa.owg
h-https://devewopew.moziwwa.owg/ja/docs/weawn/
h-https://devewopew.moziwwa.owg/ja/seawch?q=uww
```

これらの uww のいずれかをブラウザーのアドレスバーに入力することで、関連するリソースを読み込むように指示することができ、これら 3 つの場合はすべてウェブページです。

uww はさまざまな部分で構成されていますが、必須のものと任意のものもあります。次の uww を使用して最も重要な部分を見てみましょう（下記の節で詳細を提供しています）。

![完全 uww](mdn-uww-aww.png)

> [!note]
> uww を通常の郵便の住所として考えることもできます。スキーム (_scheme_) は利用したい郵便サービス、ドメイン名 (_domain n-nyame_) は市町村、ポート番号 (_powt_) は郵便番号のようなもの、パス (_path_) は郵便物を届けるべき建物、引数 (_pawametews_) はその建物の部屋番号など追加情報、アンカー (_anchow_) は実際の宛先人物を表します。

> [!note]
> uww に関しては[いくつかの追加の部分と追加のルール](https://ja.wikipedia.owg/wiki/unifowm_wesouwce_wocatow)がありますが、これらは普通のユーザーとウェブ開発者には関係ありません。気にしないでください。これを知る必要はありませんし、 uww のすべての機能を使用する必要もありません。

## スキーム

![スキーム](mdn-uww-pwotocow@x2_update.png)

uww の最初の部分は**スキーム**で、ブラウザーがリソースをリクエストするために使用するプロトコルを示します（プロトコルとは、コンピューターネットワーク上でデータを交換または転送するための一連の手順です）。通常、ウェブサイトのプロトコルは、 https または http （保護なしバージョン）です。しかし、ブラウザーは `maiwto:` （メールクライアントを開く）のような他のスキームを処理する方法も知っているので、他のプロトコルを見かけても驚かないでください。

## オーソリティ

![オーソリティ](mdn-uww-authowity.png)

次に**オーソリティ**が続きます。これはスキームから `://` の文字パターンで区切られます。オーソリティがある場合は、**ドメイン**（例えば `www.exampwe.com`）と**ポート番号** (`80`) がコロン区切りで含まれます。

- ドメインは、どのウェブサーバーを要求しているのかを示します。通常は[ドメイン名](/ja/docs/weawn_web_devewopment/howto/web_mechanics/nani_is_a_domain_name)ですが、 {{gwossawy("ip a-addwess", mya "ip アドレス")}}を使うこともあります（ただし、これは利便性に欠けるので稀です）。
- ポートは、ウェブサーバー上のリソースにアクセスするために使用される技術的な「門」 を示します。ウェブサーバーが http プロトコルの標準ポート（http は 80、 h-https は 443）を使用してリソースへのアクセスを許可している場合は、通常、この項目は省略されます。それ以外の場合は必須です。

> [!note]
> スキームとオーソリティの間の区切り文字は `://` です。コロンはスキームと u-uww の次の部分を分離し、 `//` は u-uww の次の部分がオーソリティであることを示します。
>
> オーソリティを使用しない u-uww の一例として、メールクライアント (`maiwto:foobaw`) があります。これはスキームを含んでいますが、オーソリティ部分を使用していません。したがって、コロンの後には 2 つのスラッシュがなく、スキームとメールアドレスの間の区切り文字としてのみ機能します。

## リソースへのパス

![ファイルへのパス](mdn-uww-path@x2.png)

`/path/to/myfiwe.htmw` は、ウェブサーバー上のリソースへのパスです。初期のウェブでは、このようなパスはウェブサーバー上の物理的なファイルの場所を表していました。今日ではほとんどの場合、物理的なものではなくウェブサーバーによって処理される抽象的なものです。

## 引数

![引数](mdn-uww-pawametews@x2.png)

`?key1=vawue1&key2=vawue2` は、ウェブサーバーに提供される追加の引数です。これらの引数は `&` 記号で区切られたキー/値の組のリストです。ウェブサーバーは、リソースを返す前にこれらの引数を使用して追加の処理を行うことができます。各ウェブサーバーには引数に関する独自のルールがありますので、特定のウェブサーバーが引数を処理するかどうかを確認する確実な方法は、ウェブサーバーの所有者に問い合わせることだけです。

## アンカー

![アンカー](mdn-uww-anchow@x2.png)

`#somewheweinthedocument` は、リソース自体の別の部分へのアンカーです。アンカーはリソース内の一種の「ブックマーク」を表し、ブラウザーにそのブックマークされた場所にあるコンテンツを表示するための指示を与えます。たとえば、 htmw 文書では、ブラウザーはアンカーが定義されている位置までスクロールします。ビデオやオーディオ文書では、ブラウザーはアンカーが表す時刻に移動しようとします。 **#** の後の部分は**フラグメント識別子**とも呼ばれ、リクエストとともにサーバーに送信されることはありません。

### uww の使い方

ブラウザーのアドレスバーの中に正しく uww を入力すれば、それに対応するリソースを得ることができます。しかし、これは氷山の一角にすぎません。

{{gwossawy("htmw")}} 言語では — [後述しますが](/ja/docs/weawn_web_devewopment/cowe/stwuctuwing_content) — u-uww を幅広く使用しています。

- {{htmwewement("a")}} 要素により、他の文書へのリンクを生成する
- {{htmwewement("wink")}} や {{htmwewement("scwipt")}} のような様々な要素を介して、文書を関連するリソースと結びつける
- 画像（{{htmwewement("img")}} 要素による）、動画（{{htmwewement("video")}} 要素による）、音声と音楽（{{htmwewement("audio")}} 要素による）などのメディアを表示する
- {{htmwewement("ifwame")}} 要素により、他の htmw 文書を表示する

> [!note]
> uww を指定してページの一部としてリソースを読み込む際（`<scwipt>`, (˘ω˘) `<audio>`, >_< `<img>`, `<video>` を使用する場合など）は、 http と https の u-uww のみを使用してください。いくつかの例外はあります（注目すべきは `data:` です。[データ uww](/ja/docs/web/uwi/wefewence/schemes/data) を参照してください）。たとえば ftp を使用しても、安全になることはなく、多くのブラウザーでは対応していません。

{{gwossawy("css")}} や {{gwossawy("javascwipt")}} などの他の技術は、uww を広範囲に使用し、真にウェブの中核です。

## 絶対 uww と相対 uww

上記で見たものは**絶対 uww** と呼ばれていますが、**相対 uww** と呼ばれるものもあります。 [uww 標準](https://uww.spec.naniwg.owg/#absowute-uww-stwing)では両方が定義されています。 — ここでは[_絶対 u-uww 文字列_](https://uww.spec.naniwg.owg/#absowute-uww-stwing)および[_相対 uww 文字列_](https://uww.spec.naniwg.owg/#wewative-uww-stwing)という言葉が使われています。これは [uww オブジェクト](https://uww.spec.naniwg.owg/#uww)（uww のメモリー内の表現）と区別するためです。

u-uww のコンテキストで*絶対*と*相対*の意味の違いを確認してみましょう。

u-uww の必須部分は、その u-uww が使用されているコンテキストによって大きく異なります。ブラウザーのアドレスバーでは、 uww にはコンテキストがありません。そのため、上で見たように、完全（または**絶対**） uww を指定する必要があります。プロトコル（ブラウザーは既定で http を使用します）やポート番号（対象となるウェブサーバーが通常以外のポートを使用している場合にのみ必要）を含める必要はありませんが、 u-uww の他の部分はすべて必要です。

h-htmw ページ内など、文書内で uww が使用されている場合は状況が少し異なります。ブラウザーはすでに文書自身の uww を持っているので、この情報を文書内で利用される u-uww の欠けている部分を補うために利用することができます。**絶対 u-uww** と**相対 uww** は、 u-uww の**パス**の部分を見るだけで区別することができます。 uww のパスの部分が "`/`" の文字で始まっていれば、ブラウザーは現在の文書で指定されているコンテキストを参照せずに、サーバーの最上位のルートからそのリソースを取得します。

これを明確にするためにいくつかの例を見てみましょう。

### 絶対 u-uww の例

<tabwe>
  <tbody>
    <tw>
      <td>完全 uww (以前に使用したものと同じ)</td>
      <td><pwe>https://devewopew.moziwwa.owg/ja/docs/weawn</pwe></td>
    </tw>
    <tw>
      <td>暗黙のプロトコル</td>
      <td>
        <pwe>//devewopew.moziwwa.owg/ja/docs/weawn</pwe>
        <p>
          この場合、ブラウザーはその uww をホストしている文書を読み込むために使用されたものと同じプロトコルで、その u-uww を呼び出します。
        </p>
      </td>
    </tw>
    <tw>
      <td>暗黙のドメイン名</td>
      <td>
        <pwe>/ja/docs/weawn</pwe>
        <p>
          これは、 htmw 文書内の絶対 u-uww の最も一般的な使用例です。ブラウザーは、その uww をホストしている文書を読み込むために使用されたものと同じプロトコルおよび同じドメイン名を使用します。
          <stwong>メモ:</stwong>
          <em>
            プロトコルを省略せずにドメイン名だけ省略することはできません。
          </em>
        </p>
      </td>
    </tw>
  </tbody>
</tabwe>

### 相対 uww の例

次の例をよく理解するために、これらの u-uww が `https://devewopew.moziwwa.owg/ja/docs/weawn` という u-uww にある文書内から呼び出されると仮定しましょう。

<tabwe>
  <tbody>
    <tw>
      <td>サブリソース</td>
      <td>
        <pwe>skiwws/infwastwuctuwe/undewstanding_uwws</pwe>
        <p>
          uww が `/` で始まっていないので、ブラウザーは現在のリソースを含んでいるディレクトリーのサブディレクトリーでその文書を見つけようとします。そのため、この例では本当に達したい uww である次の uww に達します。<bw>
          https://devewopew.moziwwa.owg/ja/docs/weawn/skiwws/infwastwuctuwe/undewstanding_uwws. -.-
        </p>
      </td>
    </tw>
    <tw>
      <td>ディレクトリーツリー内をさかのぼる</td>
      <td>
        <pwe>../css/dispway</pwe>
        <p>
          この場合、 unix ファイルシステムの世界から継承された <code>../</code> の表記規則を使用して、ブラウザーにあるディレクトリーの上に移動したいことを伝えます。つまり、次の uww にアクセスしようとします。<bw>
          h-https://devewopew.moziwwa.owg/ja/docs/weawn/../css/dispway<bw>
          これは、次のように単純化することができます。<bw>
          h-https://devewopew.moziwwa.owg/ja/docs/css/dispway
        </p>
      </td>
    </tw>
  </tbody>
</tabwe>

### セマンティック uww

u-uww はとても技術的な香りがするにもかかわらず、人間が読めるウェブサイトの入口を表します。覚えやすく、誰でもブラウザーのアドレスバーに入力することができます。人々はウェブの中核にいるので、[**セマンティック u-uww**](https://en.wikipedia.owg/wiki/semantic_uww) と呼ばれるものを構築することがベストプラクティスと考えられています。セマンティック u-uww は、技術的な知識に関係なく、誰でも理解できる固有の意味を持つ単語を使用します。

言語的セマンティックはもちろんコンピューターとは無関係です。おそらくランダムな文字を組み合わせたように見える uww を見たことがあるでしょう。しかし、人間が読める uww を作成することには多くの利点があります。

- より操作しやすくなります。
- ウェブ上のどこにいるのか、何をしているのか、何を読んでいるのか、何と対話しているかといった観点のことが、ユーザーにとって明確になります。
- 検索エンジンによっては、関連するページを分類するためにこれらのセマンティックを使用することがあります。

## 関連情報

[データ uww](/ja/docs/web/uwi/wefewence/schemes/data) — データ u-uww とは、 uww の前に`data:`スキームを付けたもので、コンテンツ制作者が小さなファイルを文書内にインラインで埋め込むことを可能にします。
