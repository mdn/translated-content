---
title: URL とは何か
slug: Learn/Common_questions/Web_mechanics/What_is_a_URL
l10n:
  sourceCommit: 7505786a447886f6940cef629208457e21f8f2a1
---

{{QuicklinksWithSubPages("/ja/Learn/Common_questions")}}

この記事では URL (Uniform Resource Locator) について説明し、その内容と構造を説明します。

<table>
  <tbody>
    <tr>
      <th scope="row">前提知識:</th>
      <td>
        <a href="/ja/docs/Learn/Common_questions/Web_mechanics/How_does_the_Internet_work">インターネットはどのように動くのか</a>、<a href="/ja/docs/Learn/Common_questions/Web_mechanics/What_is_a_web_server">ウェブサーバーとは</a>、<a href="/ja/docs/Learn/Common_questions/Web_mechanics/What_are_hyperlinks">ウェブ上のリンクの背後にある概念</a>を知っておく必要があります。
      </td>
    </tr>
    <tr>
      <th scope="row">目標:</th>
      <td>URL とは何か、ウェブ上でどう働くのかについて学習します。</td>
    </tr>
  </tbody>
</table>

## 概要

**URL** (Uniform Resource Locator) とは、インターネット上の固有のリソースのアドレスのことです。これは{{Glossary("Browser", "ブラウザー")}}が HTML ページや CSS 文書、画像などの公開すべきリソースを取得するために用いる重要な仕組みの一つです。

理論的には、それぞれ有効な URL は一意のリソースを指しています。実際には一部例外もあります。最も一般的なものは、もはや存在しないリソースや移動したリソースを指す URL です。 URL で表されるリソースと URL 自体はウェブサーバーによって処理されるため、ウェブサーバーの所有者がそのリソースとその関連 URL を慎重に管理する必要があります。

## 基本: URL の解剖

URL の例を次に示します

```plain
https://developer.mozilla.org
https://developer.mozilla.org/ja/docs/Learn/
https://developer.mozilla.org/ja/search?q=URL
```

これらの URL のいずれかをブラウザーのアドレスバーに入力することで、関連するリソースを読み込むように指示することができ、これら 3 つの場合はすべてウェブページです。

URL はさまざまな部分で構成されていますが、必須のものと任意のものもあります。次の URL を使用して最も重要な部分を見てみましょう（下記の節で詳細を提供しています）。

![完全 URL](mdn-url-all.png)

> [!NOTE]
> URL を通常の郵便の住所として考えることもできます。スキーム (_scheme_) は利用したい郵便サービス、ドメイン名 (_domain name_) は市町村、ポート番号 (_port_) は郵便番号のようなもの、パス (_path_) は郵便物を届けるべき建物、引数 (_parameters_) はその建物の部屋番号など追加情報、アンカー (_anchor_) は実際の宛先人物を表します。

> [!NOTE]
> URL に関しては[いくつかの追加の部分と追加のルール](https://ja.wikipedia.org/wiki/Uniform_Resource_Locator)がありますが、これらは普通のユーザーとウェブ開発者には関係ありません。気にしないでください。これを知る必要はありませんし、 URL のすべての機能を使用する必要もありません。

## スキーム

![スキーム](mdn-url-protocol@x2_update.png)

URL の最初の部分は**スキーム**で、ブラウザーがリソースをリクエストするために使用するプロトコルを示します（プロトコルとは、コンピューターネットワーク上でデータを交換または転送するための一連の手順です）。通常、ウェブサイトのプロトコルは、 HTTPS または HTTP （保護なしバージョン）です。しかし、ブラウザーは `mailto:` （メールクライアントを開く）のような他のスキームを処理する方法も知っているので、他のプロトコルを見かけても驚かないでください。

## オーソリティ

![オーソリティ](mdn-url-authority.png)

次に**オーソリティ**が続きます。これはスキームから `://` の文字パターンで区切られます。オーソリティがある場合は、**ドメイン**（例えば `www.example.com`）と**ポート番号** (`80`) がコロン区切りで含まれます。

- ドメインは、どのウェブサーバーを要求しているのかを示します。通常は[ドメイン名](/ja/docs/Learn/Common_questions/Web_mechanics/What_is_a_domain_name)ですが、 {{Glossary("IP address", "IP アドレス")}}を使うこともあります（ただし、これは利便性に欠けるので稀です）。
- ポートは、ウェブサーバー上のリソースにアクセスするために使用される技術的な「門」 を示します。ウェブサーバーが HTTP プロトコルの標準ポート（HTTP は 80、 HTTPS は 443）を使用してリソースへのアクセスを許可している場合は、通常、この項目は省略されます。それ以外の場合は必須です。

> [!NOTE]
> スキームとオーソリティの間の区切り文字は `://` です。コロンはスキームと URL の次の部分を分離し、 `//` は URL の次の部分がオーソリティであることを示します。
>
> オーソリティを使用しない URL の一例として、メールクライアント (`mailto:foobar`) があります。これはスキームを含んでいますが、オーソリティ部分を使用していません。したがって、コロンの後には 2 つのスラッシュがなく、スキームとメールアドレスの間の区切り文字としてのみ機能します。

## リソースへのパス

![ファイルへのパス](mdn-url-path@x2.png)

`/path/to/myfile.html` は、ウェブサーバー上のリソースへのパスです。初期のウェブでは、このようなパスはウェブサーバー上の物理的なファイルの場所を表していました。今日ではほとんどの場合、物理的なものではなくウェブサーバーによって処理される抽象的なものです。

## 引数

![引数](mdn-url-parameters@x2.png)

`?key1=value1&key2=value2` は、ウェブサーバーに提供される追加の引数です。これらの引数は `&` 記号で区切られたキー/値の組のリストです。ウェブサーバーは、リソースを返す前にこれらの引数を使用して追加の処理を行うことができます。各ウェブサーバーには引数に関する独自のルールがありますので、特定のウェブサーバーが引数を処理するかどうかを確認する確実な方法は、ウェブサーバーの所有者に問い合わせることだけです。

## アンカー

![アンカー](mdn-url-anchor@x2.png)

`#SomewhereInTheDocument` は、リソース自体の別の部分へのアンカーです。アンカーはリソース内の一種の「ブックマーク」を表し、ブラウザーにそのブックマークされた場所にあるコンテンツを表示するための指示を与えます。たとえば、 HTML 文書では、ブラウザーはアンカーが定義されている位置までスクロールします。ビデオやオーディオ文書では、ブラウザーはアンカーが表す時刻に移動しようとします。 **#** の後の部分は**フラグメント識別子**とも呼ばれ、リクエストとともにサーバーに送信されることはありません。

### URL の使い方

ブラウザーのアドレスバーの中に正しく URL を入力すれば、それに対応するリソースを得ることができます。しかし、これは氷山の一角にすぎません。

{{Glossary("HTML")}} 言語では — [後述しますが](/ja/docs/Learn/HTML/Introduction_to_HTML) — URL を幅広く使用しています。

- {{HTMLElement("a")}} 要素により、他の文書へのリンクを生成する
- {{HTMLElement("link")}} や {{HTMLElement("script")}} のような様々な要素を介して、文書を関連するリソースと結びつける
- 画像（{{HTMLElement("img")}} 要素による）、動画（{{HTMLElement("video")}} 要素による）、音声と音楽（{{HTMLElement("audio")}} 要素による）などのメディアを表示する
- {{HTMLElement("iframe")}} 要素により、他の HTML 文書を表示する

> [!NOTE]
> URL を指定してページの一部としてリソースを読み込む際（`<script>`, `<audio>`, `<img>`, `<video>` を使用する場合など）は、 HTTP と HTTPS の URL のみを使用してください。いくつかの例外はあります（注目すべきは `data:` です。[データ URL](/ja/docs/Web/HTTP/Basics_of_HTTP/Data_URLs) を参照してください）。たとえば FTP を使用しても、安全になることはなく、多くのブラウザーでは対応していません。

{{Glossary("CSS")}} や {{Glossary("JavaScript")}} などの他の技術は、URL を広範囲に使用し、真にウェブの中核です。

## 絶対 URL と相対 URL

上記で見たものは**絶対 URL** と呼ばれていますが、**相対 URL** と呼ばれるものもあります。 [URL 標準](https://url.spec.whatwg.org/#absolute-url-string)では両方が定義されています。 — ここでは[_絶対 URL 文字列_](https://url.spec.whatwg.org/#absolute-url-string)および[_相対 URL 文字列_](https://url.spec.whatwg.org/#relative-url-string)という言葉が使われています。これは [URL オブジェクト](https://url.spec.whatwg.org/#url)（URL のメモリー内の表現）と区別するためです。

URL のコンテキストで*絶対*と*相対*の意味の違いを確認してみましょう。

URL の必須部分は、その URL が使用されているコンテキストによって大きく異なります。ブラウザーのアドレスバーでは、 URL にはコンテキストがありません。そのため、上で見たように、完全（または**絶対**） URL を指定する必要があります。プロトコル（ブラウザーは既定で HTTP を使用します）やポート番号（対象となるウェブサーバーが通常以外のポートを使用している場合にのみ必要）を含める必要はありませんが、 URL の他の部分はすべて必要です。

HTML ページ内など、文書内で URL が使用されている場合は状況が少し異なります。ブラウザーはすでに文書自身の URL を持っているので、この情報を文書内で利用される URL の欠けている部分を補うために利用することができます。**絶対 URL** と**相対 URL** は、 URL の**パス**の部分を見るだけで区別することができます。 URL のパスの部分が "`/`" の文字で始まっていれば、ブラウザーは現在の文書で指定されているコンテキストを参照せずに、サーバーの最上位のルートからそのリソースを取得します。

これを明確にするためにいくつかの例を見てみましょう。

### 絶対 URL の例

<table>
  <tbody>
    <tr>
      <td>完全 URL (以前に使用したものと同じ)</td>
      <td><pre>https://developer.mozilla.org/ja/docs/Learn</pre></td>
    </tr>
    <tr>
      <td>暗黙のプロトコル</td>
      <td>
        <pre>//developer.mozilla.org/ja/docs/Learn</pre>
        <p>
          この場合、ブラウザーはその URL をホストしている文書を読み込むために使用されたものと同じプロトコルで、その URL を呼び出します。
        </p>
      </td>
    </tr>
    <tr>
      <td>暗黙のドメイン名</td>
      <td>
        <pre>/ja/docs/Learn</pre>
        <p>
          これは、 HTML 文書内の絶対 URL の最も一般的な使用例です。ブラウザーは、その URL をホストしている文書を読み込むために使用されたものと同じプロトコルおよび同じドメイン名を使用します。
          <strong>メモ:</strong>
          <em>
            プロトコルを省略せずにドメイン名だけ省略することはできません。
          </em>
        </p>
      </td>
    </tr>
  </tbody>
</table>

### 相対 URL の例

次の例をよく理解するために、これらの URL が `https://developer.mozilla.org/ja/docs/Learn` という URL にある文書内から呼び出されると仮定しましょう。

<table>
  <tbody>
    <tr>
      <td>サブリソース</td>
      <td>
        <pre>Skills/Infrastructure/Understanding_URLs</pre>
        <p>
          URL が `/` で始まっていないので、ブラウザーは現在のリソースを含んでいるディレクトリーのサブディレクトリーでその文書を見つけようとします。そのため、この例では本当に達したい URL である次の URL に達します。<br>
          https://developer.mozilla.org/ja/docs/Learn/Skills/Infrastructure/Understanding_URLs.
        </p>
      </td>
    </tr>
    <tr>
      <td>ディレクトリーツリー内をさかのぼる</td>
      <td>
        <pre>../CSS/display</pre>
        <p>
          この場合、 UNIX ファイルシステムの世界から継承された <code>../</code> の表記規則を使用して、ブラウザーにあるディレクトリーの上に移動したいことを伝えます。つまり、次の URL にアクセスしようとします。<br>
          https://developer.mozilla.org/ja/docs/Learn/../CSS/display<br>
          これは、次のように単純化することができます。<br>
          https://developer.mozilla.org/ja/docs/CSS/display
        </p>
      </td>
    </tr>
  </tbody>
</table>

### セマンティック URL

URL はとても技術的な香りがするにもかかわらず、人間が読めるウェブサイトの入口を表します。覚えやすく、誰でもブラウザーのアドレスバーに入力することができます。人々はウェブの中核にいるので、[**セマンティック URL**](https://en.wikipedia.org/wiki/Semantic_URL) と呼ばれるものを構築することがベストプラクティスと考えられています。セマンティック URL は、技術的な知識に関係なく、誰でも理解できる固有の意味を持つ単語を使用します。

言語的セマンティックはもちろんコンピューターとは無関係です。おそらくランダムな文字を組み合わせたように見える URL を見たことがあるでしょう。しかし、人間が読める URL を作成することには多くの利点があります。

- より操作しやすくなります。
- ウェブ上のどこにいるのか、何をしているのか、何を読んでいるのか、何と対話しているかといった観点のことが、ユーザーにとって明確になります。
- 検索エンジンによっては、関連するページを分類するためにこれらのセマンティックを使用することがあります。

## 関連情報

[データ URL](/ja/docs/Web/HTTP/Basics_of_HTTP/Data_URLs) — データ URL とは、 URL の前に`data:`スキームを付けたもので、コンテンツ制作者が小さなファイルを文書内にインラインで埋め込むことを可能にします。
