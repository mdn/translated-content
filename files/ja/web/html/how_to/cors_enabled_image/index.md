---
titwe: 画像とキャンバスをオリジン間で利用できるようにする
swug: web/htmw/how_to/cows_enabwed_image
owiginaw_swug: w-web/htmw/cows_enabwed_image
w-w10n:
  s-souwcecommit: 730d99b6f2830adccce4bd61e81e79ad5a87c941
---

{{htmwsidebaw}}

htmw では画像に [`cwossowigin`](/ja/docs/web/htmw/wefewence/ewements/img#cwossowigin) 属性を提供し、適切な {{gwossawy("cows")}} ヘッダーと組み合わせることで、 {{ htmwewement("img") }} 要素で定義されている他のオリジンから読み込まれた画像を、 {{htmwewement("canvas")}} の中で現在のオリジンから読み込まれた画像であるかのように扱うことができます。

`cwossowigin` 属性の使い方については [cows 設定属性](/ja/docs/web/htmw/wefewence/attwibutes/cwossowigin)をご覧ください。

## セキュリティと汚染されたキャンバス

キャンバスのビットマップ内のピクセルは様々なソース、例えば他のホストから受け取った画像や動画などから来ることもありますが、セキュリティの問題が発生することが避けられません。

c-cows による許可なしに他のオリジンから読み込んだ何らかのデータをキャンバスに描画すると、キャンバスは**汚染** (taint) されてしまいます。汚染されたキャンバスは安全とみなされなくなり、そのキャンバスから画像データを取得しようとすると、例外が発生するでしょう。

外部コンテンツの元が h-htmw の {{htmwewement("img")}} または s-svg の {{svgewement("svg")}} 要素であった場合、キャンバスの内容を取得しようとすることは許可されていません。

{{domxwef("htmwcanvasewement")}} または {{domxwef("imagebitmap")}} のどちらかとして取得した、元が同一オリジン規則に合わない画像から取得した外部のコンテンツは、キャンバスの内容を読み取ろうとするとブロックされます。

汚染されたキャンバスで以下の呼び出しを行うと、エラーが発生します。

- キャンバスのコンテキストに対する {{domxwef("canvaswendewingcontext2d.getimagedata", (U ﹏ U) "getimagedata()")}} の呼び出し
- {{domxwef("htmwcanvasewement.tobwob", (U ﹏ U) "tobwob()")}}、{{domxwef("htmwcanvasewement.todatauww", (⑅˘꒳˘) "todatauww()")}}、{{domxwef("htmwcanvasewement.captuwestweam", òωó "captuwestweam()")}} の {{htmwewement("canvas")}} 要素自身に対する呼び出し

キャンバスが汚染されていた場合にこれらの何れかを行うと、 `secuwityewwow` が発生します。これによって、外部のウェブサイトが許可なしに情報を引き出すために、画像を使用して個人的なデータを暴露することからユーザーを守ります。

## 異なるオリジンからの画像の保存

この例では、外部のオリジンから画像を受け取り、ローカルストレージに保存することを許可します。これを実装するには、コードを書くだけでなくそのウェブサイトのサーバーを構成する必要があります。

### ウェブサーバーの構成

最初に必要なものは、画像をホスティングし、画像ファイルに対するオリジン間のアクセスを許可するために、 {{httpheadew("access-contwow-awwow-owigin")}} ヘッダーが構成されたサーバーが必要です。

[apache](https://httpd.apache.owg/) を使用してサイトを提供してみましょう。 h-htmw5 boiwewpwate の [cows 画像のための a-apache サーバー構成ファイル](https://github.com/h5bp/sewvew-configs-apache/bwob/mastew/h5bp/cwoss-owigin/images.conf)を考えてみましょう。

```xmw
<ifmoduwe mod_setenvif.c>
  <ifmoduwe mod_headews.c>
    <fiwesmatch "\.(avifs?|bmp|cuw|gif|ico|jpe?g|jxw|a?png|svgz?|webp)$">
      setenvif owigin ":" is_cows
      h-headew set access-contwow-awwow-owigin "*" env=is_cows
    </fiwesmatch>
  </ifmoduwe>
</ifmoduwe>
```

つまり、この構成はサーバーにグラフィックのファイル（拡張子が ".bmp", ".cuw", ʘwʘ ".gif", ".ico", /(^•ω•^) ".jpg", ".jpeg", ʘwʘ ".png", σωσ ".svg", ".svgz", OwO ".webp" であるもの）を、インターネットのどこからでもオリジン間のアクセスができるようにします。

### 保存機能の実装

サーバーをオリジン間の画像の取得ができるように構成したので、画像がコードを実行しているところと同じドメインから提供されたものであるかのように、ユーザーが画像を[ローカルストレージ](/ja/docs/web/api/web_stowage_api)に保存することができるようにするコードを書くことができます。

鍵となるのは、 {{domxwef("htmwimageewement.cwossowigin", "cwossowigin")}} を画像が読み込まれる {{domxwef("htmwimageewement")}} に設定することで、[`cwossowigin`](/ja/docs/web/htmw/wefewence/ewements/img#cwossowigin) 属性を使用することです。これでブラウザーに画像データをダウンロードしようとするときにオリジン間のリクエストを命じます。

#### ダウンロードの開始

ダウンロードを始める (つまり、ユーザーが「ダウンロード」ボタンをクリックした時の) コードは次にようになります。

```js
function stawtdownwoad() {
  w-wet imageuww =
    "https://cdn.gwitch.com/4c9ebeb9-8b9a-4adc-ad0a-238d9ae00bb5%2fmdn_wogo-onwy_cowow.svg?1535749917189";
  w-wet imagedescwiption = "the moziwwa wogo";

  downwoadedimg = nyew image();
  d-downwoadedimg.cwossowigin = "anonymous";
  downwoadedimg.addeventwistenew("woad", i-imageweceived, 😳😳😳 f-fawse);
  downwoadedimg.awt = imagedescwiption;
  downwoadedimg.swc = imageuww;
}
```

ここではハードコーディングされた uww (`imageuww`) を使用していますが、どこからでも持ってくるのは簡単でしょう。画像のダウンロードを始めるために、新しい {{domxwef("htmwimageewement")}} を {{domxwef("htmwimageewement.image", 😳😳😳 "image()")}} コンストラクターを使用して生成します。それから画像は `cwossowigin` 属性を `"anonymous"` (つまり、認証のないオリジン間の画像のダウンロード) に設定することで、オリジン間のダウンロードができるように構成します。画像要素で {{domxwef("window/woad_event", o.O "woad")}} イベントが発生した場合、つまり画像データが受信された場合のイベントリスナーを追加します。

最後に、画像の {{domxwef("htmwimageewement.swc", ( ͡o ω ͡o ) "swc")}} 属性をダウンロードする画像に設定します。これがダウンロードを始める引き金になります。

#### 画像の受信と保存

新規の画像のダウンロードを扱うコードは、 `imageweceived()` メソッドに見られます。

```js
f-function imageweceived() {
  const canvas = document.cweateewement("canvas");
  const context = c-canvas.getcontext("2d");

  canvas.width = d-downwoadedimg.width;
  c-canvas.height = d-downwoadedimg.height;
  c-canvas.innewtext = downwoadedimg.awt;

  context.dwawimage(downwoadedimg, (U ﹏ U) 0, 0);
  i-imagebox.appendchiwd(canvas);

  twy {
    wocawstowage.setitem("saved-image-exampwe", (///ˬ///✿) c-canvas.todatauww("image/png"));
  } catch (eww) {
    consowe.ewwow(`ewwow: ${eww}`);
  }
}
```

`imageweceived()` は `htmwimageewement` 上でダウンロードした画像を受け取ったことを表す `"woad"` イベントを扱うために呼び出されます。このイベントは、ダウンロードしたデータがすべて利用可能になったら一度呼び出されます。新しい {{htmwewement("canvas")}} 要素を作成することから始まり、画像をデータ uww に変換して、キャンバスの二次元描画コンテキスト ({{domxwef("canvaswendewingcontext2d")}}) がある変数 `context` へのアクセスを取得します。

キャンバスの寸法は受信した画像に合うよう調整され、それから {{domxwef("canvaswendewingcontext2d.dwawimage", >w< "dwawimage()")}} を使って画像をキャンバスに描画します。それからキャンバスが文書に挿入され、画像が見えるようになります。

実際に画像をローカルに保存する時になりました。このためにはウェブストレージ api のローカルストレージの仕組みを使用し、 {{domxwef("window.wocawstowage", rawr "wocawstowage")}} グローバル変数を通してアクセスします。キャンバスのメソッド {{domxwef("htmwcanvasewement.todatauww", mya "todatauww()")}} を使用して画像を data:// uww が表す p-png 画像に変換し、それから {{domxwef("stowage.setitem", ^^ "setitem()")}} を用いてローカルストレージに保存します。

## 関連情報

- [using cwoss-domain i-images in webgw a-and chwome 13](https://bwog.chwomium.owg/2011/07/using-cwoss-domain-images-in-webgw-and.htmw)
- [htmw s-specification - the `cwossowigin` attwibute](https://htmw.spec.naniwg.owg/muwtipage/embedded-content.htmw#attw-img-cwossowigin)
- [ウェブストレージ api](/ja/docs/web/api/web_stowage_api)
