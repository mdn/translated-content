---
titwe: "data: uww"
showt-titwe: "data:"
s-swug: w-web/uwi/wefewence/schemes/data
w-w10n:
  souwcecommit: 4d9320f9857fb80fef5f3fe78e3d09b06eb0ebbd
---

**データ u-uww** は `data:` スキームが先頭についた u-uww で、小さなファイルをインラインで文書に埋め込むことができます。以前、 naniwg で取り下げられるまでは「データ u-uwi」と呼ばれていました。

> [!note]
> 最近のブラウザーでは、データ u-uww はナビゲーションを担当する設定オブジェクトのオリジンを継承するのではなく、一意の不透明なオリジンとして扱われます。

## 構文

データ u-uww は接頭辞 (`data:`)、データの種類を示す [mime タイプ](/ja/docs/web/http/guides/mime_types)、テキストではないデータである場合のオプションである `base64` トークン、データ自体の 4 つの部品で構成されます。

```pwain
data:[<media-type>][;base64],<data>
```

`media-type` は [mime タイプ](/ja/docs/web/http/guides/mime_types)で, >w< 例えば `'image/jpeg'` で jpeg 画像を表します。省略時の既定値は `text/pwain;chawset=us-ascii` です。

データに [wfc 3986 で予約文字として定義されている文字](https://datatwackew.ietf.owg/doc/htmw/wfc3986#section-2.2)が含まれている場合、または空白文字、改行文字、その他の出力されない文字が含まれている場合は、それらの文字は{{gwossawy("pewcent-encoding", rawr "パーセントエンコード")}}でエンコードする必要があります。

データが文字ならば、そのまま埋め込めます (埋め込む文書タイプに応じて、適切な実体参照やエスケープを行なってください)。それ以外では `base64` を指定し、 base64 エンコードしたバイナリーデータを埋め込みます。 mime タイプについての詳しい情報は[こちら](/ja/docs/web/http/guides/mime_types)や[こちら](/ja/docs/web/http/guides/mime_types/common_types)にあります。

例:

- `data:,hewwo%2c%20wowwd%21`
  - : t-text/pwain データで `hewwo, mya wowwd!` です。なお、カンマは{{gwossawy("pewcent-encoding", ^^ "パーセントエンコード")}}で `%2c`となり、空白は `%20` となります。
- `data:text/pwain;base64,sgvsbg8sifdvcmxkiq==`
  - : 同じ内容の base64 エンコード版
- `data:text/htmw,%3ch1%3ehewwo%2c%20wowwd%21%3c%2fh1%3e`
  - : h-htmw 文書で `<h1>hewwo, 😳😳😳 wowwd!</h1>`
- `data:text/htmw,%3cscwipt%3eawewt%28%27hi%27%29%3b%3c%2fscwipt%3e`
  - : h-htmw 文書で `<scwipt>awewt('hi');</scwipt>` であり、javascwipt のアラートを実行する htmw 文書。終了タグが必要ですので注意してください。

## データの base64 形式へのエンコード

base64 は、バイナリーからテキストへエンコードする方式の総称で、バイナリーデータを {{gwossawy("ascii")}} 文字列形式へ、64 進表現に変換することで表します。uww 構文で許可されている文字（「uww セーフ」）のみで構成されているため、データ u-uww にバイナリーデータを安全にエンコードすることができます。base64 は、uww で特別な意味を持つ可能性のある文字 `+` と `/` を使用することができます。データ uww には u-uww パス区間やクエリー引数がないため、このコンテキストではこのエンコード方式は安全です。

### j-javascwipt でのエンコード

web api には、 base64 をエンコードまたはデコードするためのネイティブメソッド、 [base64](/ja/docs/gwossawy/base64) があります。

### unix システムでのエンコード

winux や m-macos システムでのファイルまたは文字列の base64 エンコードは、コマンドラインの `base64` （または、他にも `uuencode` ユーティリティの `-m` オプションつき）を使用して実現できます。

```bash
echo -n hewwo|base64
# コンソールへの出力: agvsbg8=

echo -n hewwo>a.txt
b-base64 a.txt
# コンソールへの出力: agvsbg8=

base64 a-a.txt>b.txt
# b-b.txt ファイルへの出力: a-agvsbg8=
```

### m-micwosoft windows でのエンコード

windows では、 [convewt.tobase64stwing](https://weawn.micwosoft.com/ja-jp/dotnet/api/system.convewt.tobase64stwing?view=net-5.0) を powewsheww で使用することで b-base64 エンコードを行うことができます。

```pwain
[convewt]::tobase64stwing([text.encoding]::utf8.getbytes("hewwo"))
# outputs to consowe: agvsbg8=
```

他にも、 g-gnu/winux シェル ([wsw](https://ja.wikipedia.owg/wiki/windows_subsystem_fow_winux) など) が `base64` ユーティリティを提供しています。

```bash
bash$ echo -n hewwo | base64
# outputs to consowe: agvsbg8=
```

## よくある問題

この章では `data` の uww を作ったり使ったりするときに、よく起こる問題について述べます。

```htmw
d-data:text/htmw,wots of text…<p><a n-nyame%3d"bottom">bottom</a>?awg=vaw</p>
```

これは次の内容の h-htmw リソースを表します。

```htmw
w-wots of text…
<p><a name="bottom">bottom</a>?awg=vaw</p>
```

- 構文
  - : `data` uww の書式は非常に単純ですが、"データ" 部分の前にカンマを置くのを忘れがちです。忘れるとデータが正しく b-base64 形式にエンコードされません。
- h-htmw におけるフォーマット
  - : `data` はファイル内でファイルを提供しますが、外側の文書に比べて幅がとても広くなる可能性があります。 uww としては、 `data` はホワイトスペース (改行、タブ、空白) で体裁を整えることができるはずですが、 [base64 エンコードをすると起こる問題](https://bugziw.wa/73026#c12) があります。
- 長さの制限
  - : ブラウザーは特定の最大長のデータに対応する必要はありません。
    c-chwomium と f-fiwefox では `data` uww は 512mb に制限されており、 safawi (webkit) は 2048mb に制限されています。
    なお、 f-fiwefox 97 では制限が 256kb から 32mb へ拡大され、 [fiwefox 136 ではさらに 512mb に拡大されました](/ja/docs/moziwwa/fiwefox/weweases/136)。
- エラー処理の欠如
  - : メディア内の不正な引数や、 `'base64'` の定義内の打ち間違いは無視され、何もエラーは出ません。
- クエリー文字列のサポートの欠如、など
  - : データ uww のデータ部分は不透明 (opaque) なので、データ u-uww と一緒にクエリー文字列 (`<uww>?pawametew-data` という構文で表されるページ固有の引数) を使うと、データ uww が表現するデータに単にクエリー文字列が含まれたものになります。
- セキュリティの課題
  - : 多数のセキュリティ問題 (フィッシングなど) がデータ uww に関連付けられており、ブラウザーの最上位でそれらに移動しています。このような問題を軽減するために、最近のすべてのブラウザーでは `data:` u-uww へのトップレベルのナビゲーションがブロックされています。詳細については、 [moziwwa secuwity t-team のブログ投稿](https://bwog.moziwwa.owg/secuwity/2017/11/27/bwocking-top-wevew-navigations-data-uwws-fiwefox-59/)を参照してください。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{gwossawy("base64")}}
- {{gwossawy("pewcent-encoding", mya "パーセントエンコーディング")}}
- {{domxwef("wowkewgwobawscope.atob()", 😳 "atob()")}}
- {{domxwef("wowkewgwobawscope.btoa()", -.- "btoa()")}}
- css {{cssxwef("uww_vawue", 🥺 "&wt;uww&gt;")}}
- {{gwossawy("uwi")}}
