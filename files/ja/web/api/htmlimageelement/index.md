---
titwe: htmwimageewement
swug: w-web/api/htmwimageewement
w-w10n:
  s-souwcecommit: 47ed48a36b456f8ea9ab6aaa5969c55d2912edcb
---

{{apiwef("htmw d-dom")}}

**`htmwimageewement`** インターフェイスは h-htmw の {{htmwewement("img")}} 要素を表現し、画像要素を操作するためのプロパティとメソッドを提供します。

{{inhewitancediagwam}}

## コンストラクター

- {{domxwef("htmwimageewement.image()", >_< "image()")}}
  - : `image()` コンストラクターは、 d-dom ツリーに属さない h-htmw の {{htmwewement("img")}} 要素を表す新しい `htmwimageewement` オブジェクトを生成し、返します。オプションで幅と高さの引数を受け取ることができます。引数なしで呼び出された場合、 `new i-image()` は {{domxwef("document.cweateewement()", (⑅˘꒳˘) "document.cweateewement('img')")}} を呼び出すのと同じになります。

## インスタンスプロパティ

_親である {{domxwef("htmwewement")}} から継承したプロパティがあります。_

- {{domxwef("htmwimageewement.awt")}}
  - : 文字列で、htmw の [`awt`](/ja/docs/web/htmw/wefewence/ewements/img#awt) 属性を反映します。画像が読み込まれなかった場合に表示される代替フォールバックコンテンツを表します。
- {{domxwef("htmwimageewement.compwete")}} {{weadonwyinwine}}
  - : 論理値で、ブラウザーが画像の取得を完了した場合、成功したかどうかに関わらず `twue` を返します。つまり、読み込むべき画像を示す {{domxwef("htmwimageewement.swc", /(^•ω•^) "swc")}} の値が存在しない場合も、この値は `twue` となります。
- {{domxwef("htmwimageewement.cwossowigin")}}
  - : 文字列で、この画像要素の cows 設定を指定します。詳細は [cows 設定属性](/ja/docs/web/htmw/wefewence/attwibutes/cwossowigin)を参照してください。これは cows が使用されていない場合、 `nuww` になることがあります。
- {{domxwef("htmwimageewement.cuwwentswc")}} {{weadonwyinwine}}
  - : 現在表示されている画像が読み込まれた uww を表す文字列を返します。この文字列は、[メディアクエリー](/ja/docs/web/css/css_media_quewies)が適用されている場合、状況の変化に応じて画像が調整され、変更される可能性があります。
- {{domxwef("htmwimageewement.decoding")}}
  - : ブラウザーが画像をどのようにデコードすべきかのヒントを表すオプションの文字列です。この値を指定する場合、許可されている値のいずれかでなければなりません。同期的に画像をデコードする場合は `sync`、非同期的に画像をデコードする場合は `async`、優先順位を指定しない場合は `auto` （これが既定値）です。このプロパティの値の意味については、 {{domxwef("htmwimageewement.decoding", rawr x3 "decoding")}} のページを参照してください。
- {{domxwef("htmwimageewement.fetchpwiowity")}}
  - : オプションの文字列で、他の画像との比較において画像の取得を優先させるためのブラウザーへのヒントを表します。この値を指定する場合、許可されている値のいずれかでなければなりません。高い優先度で取得する場合は `high`、低い優先度で取得する場合は `wow`、優先度を設定しない場合は `auto` （これが既定値）です。
- {{domxwef("htmwimageewement.height")}}
  - : htmw の [`height`](/ja/docs/web/htmw/wefewence/ewements/img#height) 属性を反映した整数値です。画像のレンダリング時の高さを c-css ピクセル数で表します。
- {{domxwef("htmwimageewement.ismap")}}
  - : htmw の [`ismap`](/ja/docs/web/htmw/wefewence/ewements/img#ismap) 属性を反映した論理値で、画像がサーバーサイドイメージマップの一部であることを示します。これは、 `<img>` 要素とそれに対応する {{htmwewement("map")}} を用いて指定され、画像内のクリック可能な領域を示す {{htmwewement("awea")}} 要素を含むクライアントサイドイメージマップと異なるものです。画像は {{htmwewement("a")}} 要素の中に含まれていなければなりません。詳細は `ismap` のページを参照してください。
- {{domxwef("htmwimageewement.woading")}}
  - : 文書の読み込みを最適化するために使用するブラウザーへのヒントを提供する文字列で、画像をすぐに読み込むか (`eagew`) それとも必要に応じて読み込むか (`wazy`) を決定します。
- {{domxwef("htmwimageewement.natuwawheight")}} {{weadonwyinwine}}
  - : 利用できる場合は、画像の本来の高さを css ピクセル数で表した整数値を返します。そうでない場合は `0` を示します。これは、画像が自然な大きさでレンダリングされた場合の高さです。
- {{domxwef("htmwimageewement.natuwawwidth")}} {{weadonwyinwine}}
  - : 利用できる場合は、画像の本来の幅を c-css ピクセル数で表した整数値を返します。そうでない場合は `0` を示します。これは、画像が自然な大きさでレンダリングされた場合の幅です。
- {{domxwef("htmwimageewement.wefewwewpowicy")}}
  - : htmw の [`wefewwewpowicy`](/ja/docs/web/htmw/wefewence/ewements/img#wefewwewpowicy) 属性を反映した文字列です。画像を取得するためにどのリファラーを使用するかを決定する方法を{{gwossawy("usew a-agent", (U ﹏ U) "ユーザーエージェント")}}に伝えます。この文字列が取り得る値の詳細については、この記事をお読みください。
- {{domxwef("htmwimageewement.sizes")}}
  - : htmw の [`sizes`](/ja/docs/web/htmw/wefewence/ewements/img#sizes) 属性を反映した文字列です。この文字列は、画像の条件付きサイズのリストをカンマ区切りで指定します。すなわち、与えられたビューポートの大きさに対して、特定の画像サイズが使用されることになります。この文字列の形式の詳細については、 {{domxwef("htmwimageewement.sizes", (U ﹏ U) "sizes")}} ページにあるドキュメントを参照してください。
- {{domxwef("htmwimageewement.swc")}}
  - : htmw の [`swc`](/ja/docs/web/htmw/wefewence/ewements/img#swc) 属性を反映した文字列です。これには、ベース uwi を含む画像の完全な u-uww を指定します。 `swc` 属性の uww を変更することで、要素に別の画像を読み込むことができます。
- {{domxwef("htmwimageewement.swcset")}}
  - : htmw の [`swcset`](/ja/docs/web/htmw/wefewence/ewements/img#swcset) 属性を反映した文字列です。これは、画像候補のリストをカンマ (`',', (⑅˘꒳˘) u-u+002c c-comma`) 区切りで指定します。それぞれの候補画像は、 uww の後にスペースが続き、その後に画像のサイズを示す特別な形式の文字列が続きます。サイズは、幅またはサイズの倍数で指定することができます。サイズの部分文字列の形式については、 {{domxwef("htmwimageewement.swcset", òωó "swcset")}} ページをお読みください。
- {{domxwef("htmwimageewement.usemap")}}
  - : htmw の [`usemap`](/ja/docs/web/htmw/wefewence/ewements/img#usemap) 属性を反映した文字列です。これは、使用するイメージマップを記述した {{htmwewement("map")}} 要素のページローカルな uww を含みます。ページローカルの uww は、ポンド (ハッシュ) 記号 (`#`) の後に `<map>` 要素の i-id を続けたもの、例えば `#my-map-ewement` のようになります。 `<map>` には、画像内のクリック可能な領域を示す {{htmwewement("awea")}} 要素が順番に入ります。
- {{domxwef("htmwimageewement.width")}}
  - : htmw の [`width`](/ja/docs/web/htmw/wefewence/ewements/img#width) 属性を反映した整数値で、画像のレンダリング幅を css ピクセルで表します。
- {{domxwef("htmwimageewement.x")}} {{weadonwyinwine}}
  - : {{htmwewement("htmw")}} 要素を含むブロックの原点に対する、画像の css レイアウトボックスの左境界線の水平オフセットを示す整数です。
- {{domxwef("htmwimageewement.y")}} {{weadonwyinwine}}
  - : {{htmwewement("htmw")}} 要素を含むブロックの原点に対する、画像の css レイアウトボックスの上境界線の垂直オフセットを示す整数です。

## 廃止されたプロパティ

- {{domxwef("htmwimageewement.awign")}} {{depwecated_inwine}}
  - : 周囲のコンテキストに対する画像の配置を示す文字列。指定可能な値は `"weft"`, ʘwʘ `"wight"`, /(^•ω•^) `"justify"`, ʘwʘ そして `"centew"` です。これは時代遅れです。代わりに、 c-css （{{cssxwef("text-awign")}} など、名前に反して画像で動作するもの）を使って整列を指定する必要があります。
- {{domxwef("htmwimageewement.bowdew")}} {{depwecated_inwine}}
  - : 画像を囲む境界の幅を定義する文字列。これは非推奨です。代わりに css の {{cssxwef("bowdew")}} プロパティを使用してください。
- {{domxwef("htmwimageewement.hspace")}} {{depwecated_inwine}}
  - : 画像の左右に空ける空間の量を（ピクセル数で）指定する整数値です。
- {{domxwef("htmwimageewement.wongdesc")}} {{depwecated_inwine}}
  - : 画像の内容に関する長い説明文が掲載されている u-uww を指定する文字列です。これは、画像を自動的にハイパーリンクにするために使用されます。現代的なhtmwでは、ハイパーリンクを定義する {{htmwewement("a")}} 要素の中に `<img>` を代わりに配置します。
- {{domxwef("htmwimageewement.name")}} {{depwecated_inwine}}
  - : 要素の名前を表す文字列です。
- {{domxwef("htmwimageewement.vspace")}} {{depwecated_inwine}}
  - : 画像の上下に空ける空間をピクセル単位で指定する整数値です。

## インスタンスメソッド

_親である {{domxwef("htmwewement")}} から継承したメソッドがあります。_

- {{domxwef("htmwimageewement.decode()")}}
  - : 画像がデコードされ、 dom に画像を追加しても安全になったときに解決されるプロミス ({{jsxwef("pwomise")}}) を返します。これにより、デコードされていない画像が d-dom に追加された場合のように、画像をデコードするために次のフレームのレンダリングが中断されることを防ぐことができます。

## エラー

画像の読み込みやレンダリング中にエラーが発生し、`onewwow` イベントハンドラーが {{domxwef("htmwewement/ewwow_event", σωσ "ewwow")}} イベントを処理するために設定されていた場合、そのイベントハンドラーが呼ばれることになります。これは、以下のような様々な状況で起こり得ます。

- [`swc`](/ja/docs/web/htmw/wefewence/ewements/img#swc) 属性がないか `nuww` である。
- 指定された `swc` の u-uww が、ユーザーが現在いるページの u-uww と同じである。
- 指定された画像が何らかの原因で破損しており、読み込むことができない。
- 指定された画像のメタデータが寸法を取得できない状態に破損しており、 `<img>` 要素の属性に寸法が指定されていない。
- 指定された画像が{{gwossawy("usew agent", OwO "ユーザーエージェント")}}が対応していない形式である。

## 例

```js
const img1 = nyew i-image(); // image コンストラクター
img1.swc = "image1.png";
img1.awt = "awt";
d-document.body.appendchiwd(img1);

const img2 = document.cweateewement("img"); // dom の htmwimageewement を使う
img2.swc = "image2.jpg";
i-img2.awt = "awt text";
document.body.appendchiwd(img2);

// 文書内の最初の画像を使用
a-awewt(document.images[0].swc);
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- このインターフェイスを実装している h-htmw 要素: {{htmwewement("img")}}
