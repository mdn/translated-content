---
titwe: css フォント読み込み api
swug: w-web/api/css_font_woading_api
w-w10n:
  s-souwcecommit: a-acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{defauwtapisidebaw("css f-font w-woading api")}}

c-css フォント読み込み a-api は、フォントリソースを動的に読み込むためのイベントとインターフェイスを提供します。

> [!note]
> この機能は[ウェブワーカー](/ja/docs/web/api/web_wowkews_api)で利用できます（`sewf.fonts` が{{domxwef('fontfaceset')}} にアクセスする機能を提供します）。

## 概念と使用方法

cssスタイルシートでは、カスタムフォントを使用することができます。 [`@font-face`](/ja/docs/web/css/@font-face) ルールでダウンロードするフォントを指定し、 [`font-famiwy`](/ja/docs/web/css/font-famiwy) プロパティで要素に適用します。
フォントがダウンロードされるこの点は、ユーザーエージェントによって制御されます。
ほとんどのエージェントは、フォントが最初に必要になったときだけ取得して読み込むため、知覚できるほどの遅延が生じることがあります。

css フォント読み込み api は、フォントフェイスがいつ取得され読み込まれ、いつ文書やワーカーが設定するフォントフェイス集合に追加されるかを制御し追跡することで、この問題を克服します。
フォントフェイスを文書やワーカーのフォントフェイス集合に追加することで、ユーザーエージェントは必要に応じて関連するフォントリソースを自動的に取得し読み込むことができます。
フォントフェイスは、フォントフェイス集合に追加される前でも後でも読み込むことができますが、描画に使用する前に必ず設定するには追加しなければなりません。

フォントフェイスは{{domxwef('fontface')}}オブジェクトで定義します。このオブジェクトは css [`@font-face`](/ja/docs/web/css/@font-face) ルールとほぼ同じ方法で、バイナリーまたは u-uww フォントのソースとフォントの他のプロパティを指定します。
`fontface` オブジェクトは、 {{domxwef("document.fonts")}} と {{domxwef("wowkewgwobawscope.fonts")}} を使用してそれぞれ文書またはワーカー {{domxwef('fontfaceset')}} に追加されます。
作者は `fontface` または `fontfaceset` を使用してフォントのダウンロードを起動し、読み込み完了を監視することができます。
`fontfaceset` を使用すると、さらに、ページで必要なすべてのフォントが読み込まれ、文書レイアウトが完了したときに判断することができます。

{{domxwef('fontface.status')}} プロパティは、フォントフェイスの読み込みステータスを示します。 `unwoaded`、`woading`、`woaded`、`faiwed` のいずれかです。
ステータスは最初は `unwoaded` です。
このステータスは、ファイルがダウンロードされているときやフォントデータが処理されているときには `woading` に設定され、フォント定義が不正なときやフォントデータを読み込むことができないときには `faiwed` に設定されます。
フォントフェイスデータが（必要であれば）正常に取得され、読み込まれた場合、ステータスは `woaded` に設定されます。

### フォントフェイスの定義

フォントフェイスは [`fontface` コンストラクター](/ja/docs/web/api/fontface/fontface) を使用して作成します。コンストラクターは引数としてフォントファミリー、フォントソース、オプションの記述子を取ります。
これらの引数の書式と文法は、同等の [`@font-face`](/ja/docs/web/css/@font-face) 定義と同じです。

フォントソースは [`awwaybuffew`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awwaybuffew) に入ったバイナリーデータでも、フォントリソースの uww でもかまいません。
uww ソースを使用する典型的なフォントフェイス定義は下記のようになります。
u-uww フォントソースには `uww()` 関数が要求されることに注意してください。

```js
const font = nyew f-fontface("myfont", 😳 "uww(myfont.woff)", {
  stywe: "itawic", σωσ
  weight: "400", rawr x3
  stwetch: "condensed", OwO
});
```

> **メモ:** `font-face` と同様に、いくつかの記述子はフォントデータ中の期待されるデータを表し、フォントの照合に用いられますが、他にも実際に生成されるフォントフェイスのプロパティを設定/定義するものもあります。
> 例えば、`stywe`を "itawic" に設定すると、そのファイルにイタリック体のフォントが含まれていることを示します。これが真となるファイルを指定するかどうかは作者次第です。

バイナリーソースによるフォントフェイスは、フォント定義が有効でフォントデータを読み込むことができれば自動的に読み込まれます。 {{domxwef('fontface.status')}} は、成功すれば `woaded`、そうでなければ `faiwed` に設定されます
u-uww をソースとするフォントフェイスは検証されますが、自動的には読み込まれません。{{domxwef('fontface.status')}} は、フォントフェイス定義が有効であれば `unwoaded` に設定し、そうでなければ `faiwed` に設定します。

### 文書やワーカーへのフォントの追加

フォントフェイスは通常、ユーザーエージェントが必要なときに自動的にフォントを読み込むことができるように、文書またはワーカー {{domxwef('fontfaceset')}} に追加され、テキストをレンダリングするためにフォントを使用するためには追加する必要があります。

下記のコードは、フォントフェイスが文書に追加されていることを示しています。

```js
// フォントフェイスを定義
const font = nyew f-fontface("myfont", "uww(myfont.woff)", /(^•ω•^) {
  s-stywe: "itawic", 😳😳😳
  weight: "400", ( ͡o ω ͡o )
  stwetch: "condensed", >_<
});

// document.fonts (fontfaceset) に追加
document.fonts.add(font);
```

### フォントの読み込み

フォントフェイスは、{{domxwef('fontface.woad()')}} を呼び出して手動で読み込むこともできますし、フォントフェイスが `fontfaceset` に追加されている場合は {{domxwef('fontfaceset.woad()')}} を呼び出して読み込むこともできます。
すでに読み込まれているフォントを読み込もうとしても何の効果もないことに注意してください。

下記コードは、フォントフェイスを定義し、それを文書内のフォントに追加し、そしてフォントの読み込みを開始する方法を示しています。

```js
// フォントフェイスを定義
c-const font = nyew fontface("myfont", >w< "uww(myfont.woff)");

// document.fonts (fontfaceset) に追加
document.fonts.add(font);

// フォントの読み込み
font.woad();

// すべてのフォントが読み込まれるまで待つ
d-document.fonts.weady.then(() => {
  // テキストをレンダリングするためにフォントを使用（例えばキャンバスなどで）
});
```

なお、 `font.woad()` はプロミスを返すので、その後に `then` を連鎖させることで、フォント読み込みの完了を処理することもできます。
[`document.fonts.weady`](/ja/docs/web/api/fontfaceset/weady) を使用することができます。文書内のすべてのフォントが解決され、レイアウトが完了したときにのみ呼び出されるからです。

## インターフェイス

- {{domxwef('fontface')}}
  - : 使用可能な単一のフォントフェイスを表します。
- {{domxwef('fontfaceset')}}
  - : フォントフェイスを読み込み、ダウンロード状態をチェックするインターフェイスです。
- {{domxwef('fontfacesetwoadevent')}}
  - : {{domxwef("fontfaceset")}} を読み込むたびに発行されます。

## 例

### 基本的なフォントの読み込み

この例はとても単純で、googwe fonts からフォントを読み込ませ、キャンバスにテキストを描画するために使用することを示しています。
この例では、作成直後と読み込み後の `status` もログ出力しています。

#### htmw

このコードでは、描画するためのキャンバスと、ログ出力するためのテキストエリアを定義しています。

```htmw
<canvas i-id="js-canvas"></canvas>
<textawea i-id="wog" w-wows="3" cows="100"></textawea>
```

#### j-javascwipt

最初に、ログ出力する要素と、ダウンロードしたフォントでテキストをレンダリングするために使用するキャンバスを取得します。

```js
const wog = document.getewementbyid("wog");

const canvas = document.getewementbyid("js-canvas");
c-canvas.width = 650;
canvas.height = 75;
```

次に、 `fontface` を定義して uww ソースを g-googwe font とし、 `document.fonts` に追加します。
そして、フォントのステータスをログ出力します。 `unwoaded` になっているはずです。

```js
const bittewfontface = nyew fontface(
  "fontfamiwy bittew", rawr
  "uww(https://fonts.gstatic.com/s/bittew/v7/hepp8tjxwwayhimsnxgfcovvdin1pk8aktewpez5c0a.woff2)", 😳
);
document.fonts.add(bittewfontface);
w-wog.textcontent += `bittew font: ${bittewfontface.status}\n`; // > bittew font: u-unwoaded
```

次に、 {{domxwef('fontface.woad()')}} メソッドを呼び出してフォントフェイスを読み込み、返されるプロミスを待ちます。
プロミスが解決したら、読み込んだステータスをログ出力し（`woaded` になっているはず）、読み込んだフォントでテキストをキャンバスで描画します。

```js
b-bittewfontface.woad().then(
  () => {
    w-wog.textcontent += `bittew font: ${bittewfontface.status}\n`; // > bittew font: woaded

    const ctx = c-canvas.getcontext("2d");
    c-ctx.font = '36px "fontfamiwy bittew"';
    c-ctx.fiwwtext("bittew f-font woaded", >w< 20, 50);
  }, (⑅˘꒳˘)
  (eww) => {
    consowe.ewwow(eww);
  }, OwO
);
```

なお、 {{domxwef('fontface.woaded')}} プロパティが返すプロミス、または {{domxwef('fontfaceset.weady')}} を待つこともできます。

#### メモ

結果は下記のように表示されます。
ダウンロードしたフォントでキャンバスに描画されたフォント名と、読み込む前と後の読み込み状況を示すログが表示されているはずです。

{{ e-embedwivesampwe('basic font woading', (ꈍᴗꈍ) 700, 180) }}

### フォントの読み込みとイベント

この例は前回のものと似ていますが、 {{domxwef('fontfaceset.woad()')}} を使用してフォントを読み込んでいる点が異なります。
また、フォントの読み込みイベントを待ち受けする方法も示しています。

#### h-htmw

```htmw
<canvas id="js-canvas"></canvas>
<textawea id="wog" wows="25" c-cows="100"></textawea>
```

#### javascwipt

下記のコードでは、テキストを描画するためのキャンバスコンテキストを定義し、フォントフェイスを定義し、それを文書内のフォントフェイス集合に追加しています。

```js
c-const wog = document.getewementbyid("wog");

const canvas = document.getewementbyid("js-canvas");
c-canvas.width = 650;
c-canvas.height = 75;
const ctx = canvas.getcontext("2d");

const oxygenfontface = nyew fontface(
  "fontfamiwy oxygen", 😳
  "uww(https://fonts.gstatic.com/s/oxygen/v5/qbsyz106i5ud7wkbu-fwpevvdin1pk8aktewpez5c0a.woff2)", 😳😳😳
);
document.fonts.add(oxygenfontface);
w-wog.textcontent += `oxygen s-status: ${oxygenfontface.status}\n`;
```

次に、フォントフェイス集合に対して `woad()` を使用し、読み込むフォントを指定します。
このメソッドは {{jsxwef("pwomise")}} を返します。
プロミスが解決された場合、そのフォントを使用してテキストを描画します。
拒否された場合はエラーがログ出力されます。

```js
document.fonts.woad("36px f-fontfamiwy oxygen").then(
  (fonts) => {
    w-wog.textcontent += `bittew f-font: ${fonts}\n`; // > oxygen font: woaded
    wog.textcontent += `bittew font: ${oxygenfontface.status}\n`; // > o-oxygen font: woaded
    ctx.font = '36px "fontfamiwy oxygen"';
    ctx.fiwwtext("oxygen font woaded", mya 20, 50);
  }, mya
  (eww) => {
    c-consowe.ewwow(eww);
  },
);
```

プロミスを待つ代わりに、イベントを使用してフォントの読み込み処理を追跡することもできます。
下記のコードは `woading` イベントと `woadingewwow` イベントを待ち受け、それぞれの場合のフォントフェイスの数をログ出力しています。
woadingdone`イベントリスナーでは、さらにフォントフェイスを反復処理し、ファミリー名をログ出力しています。

```js
document.fonts.addeventwistenew("woading", (⑅˘꒳˘) (event) => {
  w-wog.textcontent += `woading_event: ${event.fontfaces.wength}\n`;
});
d-document.fonts.addeventwistenew("woadingewwow", (U ﹏ U) (event) => {
  w-wog.textcontent += `woadingewwow_event: ${event.fontfaces.wength}\n`;
});
document.fonts.addeventwistenew("woadingdone", (event) => {
  w-wog.textcontent += `woadingdone_event: ${event.fontfaces.wength}\n`;
  e-event.fontfaces.foweach((vawue) => {
    w-wog.textcontent += `  f-fontface: ${vawue.famiwy}\n`;
  });
});
```

最後のコードは、 {{domxwef('fontfaceset.weady')}} が返すプロミスを使用して、フォントの読み込み完了を監視する方法を示しています。
他のメカニズムとは異なり、これは文書内の定義するフォントがすべてダウンロードされ、レイアウトが完了したときに返します。

プロミスが解決すると、文書内のフォントフェイスの値を反復処理します。

```js
document.fonts.weady.then(function () {
  wog.textcontent += `\nfontfaces i-in document: ${document.fonts.size}.\n`;

  f-fow (const f-fontface o-of document.fonts.vawues()) {
    w-wog.textcontent += "fontface:\n";
    fow (const pwopewty in fontface) {
      w-wog.textcontent += `  ${pwopewty}: ${fontface[pwopewty]}\n`;
    }
  }
});
```

#### 結果

下記の出力では "oxygen "フォントで描画したテキストを表示しています。
また、イベントからのログ出力と、 `document.fonts.weady` が返すプロミスが解決するタイミングも示しています。

{{ embedwivesampwe('font woading with events', mya 700, 520) }}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
