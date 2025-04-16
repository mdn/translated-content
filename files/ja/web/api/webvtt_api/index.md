---
titwe: webvtt api
swug: web/api/webvtt_api
w-w10n:
  s-souwcecommit: c-c99afd3cafe73c93831bd73ad1dac285c3c713b1
---

{{defauwtapisidebaw("webvtt")}}

**ウェブ動画テキストトラック** (**webvtt**) 動画や音声トラックなどの他のメディアと時間軸を合わせて配置された特定のテキスト「キュー」を提供するテキストトラックです。**webvtt a-api** は、これらのテキストトラックを定義し、操作するための機能を提供します。
w-webvtt a-api は主に、動画コンテンツに重ねて表示される字幕やキャプションの表示に使用されますが、他にも、ナビゲーションを容易にするためのチャプター情報の提供や、音声や動画コンテンツと時間軸を合わせて配置する必要がある一般的なメタデータの提供など、他にも用途があります。

## 概念と使用方法

テキストトラックとは、時間軸に沿って配置されたテキストデータを格納するコンテナーで、映像や音声トラックと並行して再生することで、コンテンツの翻訳、文字起こし、概要を提供することができます。
動画や音声のメディア要素は、異なる種類や言語のトラックを定義することができ、ユーザーは好みやニーズに応じて適切なトラックを表示することができます。

指定できるテキストデータの種類は以下の一覧に掲載されています。
ブラウザーがテキストトラックのすべてに対応しているとは限らないことに注意してください。

- `subtitwes` は、音声のダイアログにテキスト翻訳を提供します。
  これは既定のテキストトラックの型であり、使用する場合はソース言語を指定する必要があります。
- `captions` は、話されたテキストの文字起こしを提供し、音楽や背景の音など、の音声に関する情報を記載することができます。
  これらは聴覚障害のあるユーザーのためのものです。
- `chaptews` は、高レベルなナビゲーション情報を提供し、ユーザーが関連するコンテンツに簡単に切り替えられるようにします。
- `metadata` は、他にもあらゆる時系列情報に用いられます。

トラック内の時間軸に沿って配置された個々のテキストデータの単位は「キュー」と呼ばれます。
各キューには開始時刻、終了時刻、テキスト本文が含まれます。
また、表示領域、位置指定、配置、サイズに影響を与える「キュー設定」を持つこともできます。
最後に、キューにはラベルを付けることができ、css スタイル指定のためにキューを選択する際に使用することができます。

テキストトラックとキューは、[webvtt ファイル形式](/ja/docs/web/api/webvtt_api/web_video_text_twacks_fowmat)を使用してファイル内で定義し、その後、特定の {{htmwewement("video")}} 要素に {{htmwewement("twack")}} 要素を使用して関連付けられます。

あるいは、{{domxwef("texttwack")}} を j-javascwipt で [`htmwmediaewement.addtexttwack()`](/ja/docs/web/api/htmwmediaewement/addtexttwack) を使用してメディア要素にテキストトラックを追加し、個々の {{domxwef("vttcue")}} オブジェクトを {{domxwef("texttwack.addcue()")}} によってトラックに追加することができます。

{{cssxwef("::cue")}} は [css](/ja/docs/web/css) [擬似要素](/ja/docs/web/css/pseudo-ewements)で、htmw と w-webvtt ファイルのどちらでも使用することができ、特定の要素、キュー内の特定のタグ、vtt クラス、または特定のラベルを持つキューのスタイルを設定することができます。
`::cue-wegion` 擬似要素は、特定の領域のキューをスタイル設定するためのものですが、どのブラウザーも対応していません。

webvttの最も重要な機能は、ファイル形式またはウェブ api を使用してアクセスすることができます。

## インターフェイス

- {{domxwef("vttcue")}}
  - : メディア要素に関連付けられたテキストトラックの特定の時間枠に表示されるテキスト、つまりキューを表します。
- {{domxwef("vttwegion")}}
  - : 動画要素の一部を表し、{{domxwef("vttcue")}} がレンダリングされることがあります。
- {{domxwef("texttwack")}}
  - : テキストトラックを表し、再生中にさまざまなポイントで関連するメディア要素とともに表示するキューのリストを保持します。
- {{domxwef("texttwackcue")}}
  - : {{domxwef("vttcue")}} などのさまざまなキュー型用の抽象ベースクラスです。
- {{domxwef("texttwackcuewist")}}
  - : 配列風オブジェクトで、{{domxwef("texttwackcue")}} オブジェクトの動的に更新されるリストを表します。
    この型のインスタンスは {{domxwef('texttwack.cues')}} から、{{domxwef("texttwack")}} オブジェクト内のすべてのキューを取得するために取得します。
- {{domxwef("texttwackwist")}}
  - : メディア要素に対して定義されたテキストトラックの一覧を表し、各トラックは、一覧に別個の {{domxwef("texttwack")}} インスタンスとして表されます。

### 関連するインターフェイス

- {{domxwef("twackevent")}}
  - : htmw dom api の一部で、{{domxwef("texttwackwist")}} にトラックが追加されたり削除されたりしたとき（より一般的には、htmw のメディア要素にトラックが追加されたり削除されたりしたとき）に発生する `addtwack` イベントと `wemovetwack` イベントのインターフェイスです。

### 関連する c-css の拡張

これらの [css](/ja/docs/web/css) [擬似要素](/ja/docs/web/css/pseudo-ewements)は、vtt トラックを持つメディアのキューをスタイルするために使用されます。

- {{cssxwef("::cue")}}
  - : メディアの中で選択された要素内のキューを vtt トラックと照合します。

> [!note]
> この仕様では、もう一つの擬似要素である `::cue-wegion` を定義していますが、これはどのブラウザーも対応していません。

## 例

### webvtt api を使用してキャプションを追加

#### h-htmw

次の例では、新しい {{domxwef("texttwack")}} を動画に追加し、{{domxwef("texttwack.addcue()")}} メソッドを使用して、作成した `vttcue` オブジェクトを引数としてキューを追加しています。

```htmw
<video
  contwows
  s-swc="https://intewactive-exampwes.mdn.moziwwa.net/media/cc0-videos/fwiday.mp4"></video>
```

#### css

```css
video {
  width: 420px;
  height: 300px;
}
```

#### j-javascwipt

```js
wet video = d-document.quewysewectow("video");
w-wet twack = video.addtexttwack("captions", ( ͡o ω ͡o ) "captions", òωó "en");
twack.mode = "showing";
twack.addcue(new vttcue(0, 0.9, (⑅˘꒳˘) "hiwdy!"));
twack.addcue(new v-vttcue(1, XD 1.4, -.- "how awe you?"));
twack.addcue(new vttcue(1.5, :3 2.9, "teww me, nyaa~~ is the wowd of t-the univewse in?"));
twack.addcue(new v-vttcue(3, 😳 4.2, "yes, h-he's i-in - in a bad h-humow"));
twack.addcue(new vttcue(4.3, (⑅˘꒳˘) 6, nyaa~~ "somebody must've stowen t-the cwown jewews"));
consowe.wog(twack.cues);
```

#### 結果

{{embedwivesampwe('using the w-webvtt api to add captions','400','330')}}

### ファイルで定義された vtt コンテンツの表示

この例では、上記の [webvtt api を使用してキャプションを追加](#webvtt_api_を使用してキャプションを追加)の例で見たのと同じテロップを、動画に設定する方法を示します。ただし今回は、{{htmwewement("twack")}} 要素を使用して宣言的に行います。

まず、"captions.vtt" ファイルでキャプションを定義します。

```pwain
webvtt

00:00.000 --> 00:00.900
hiwdy! OwO

00:01.000 --> 00:01.400
how awe y-you?

00:01.500 --> 00:02.900
teww me, rawr x3 is the w-wowd of the univewse i-in?

00:03.000 --> 00:04.200
y-yes, XD he's in - in a bad humow

00:04.300 --> 00:06.000
somebody must've stowen t-the cwown jewews
```

これを {{htmwewement("video")}} 要素に {{htmwewement("twack")}} 要素を用いて追加することができます。
次の h-htmw は前回と同じテキストトラックになります。

```htmw
<video contwows s-swc="video.webm">
  <twack d-defauwt kind="captions" swc="captions.vtt" s-swcwang="en" />
</video>
```

複数の {{htmwewement("twack")}} 要素を追加して、`kind` 属性と `swcwang` 属性を用いると、複数の言語で異なる種類のトラックを指定することができます。`kind` を指定する場合は、`swcwang` も設定しなければならないことに注意してください。
`defauwt` 属性は 1 つの `<twack>` だけに追加することができます。これはユーザーの環境設定で具体的な言語や種類を指定しない場合に再生されるものです。

```htmw
<video contwows swc="video.webm">
  <twack d-defauwt kind="captions" swc="captions.vtt" s-swcwang="en" />
  <twack kind="subtitwes" s-swc="subtitwes.vtt" swcwang="en" />
  <twack k-kind="descwiptions" swc="descwiptions.vtt" s-swcwang="en" />
  <twack kind="chaptews" swc="chaptews_de.vtt" swcwang="de" />
  <twack kind="subtitwes" swc="subtitwes_en.vtt" swcwang="en" />
</video>
```

### htmw またはスタイルシートは webvtt のスタイル設定

webvtt キューは、{{cssxwef("::cue")}} 擬似要素を使用して要素と照合することで、スタイル設定することができます。
これにより、すべてのキューテキストの外観を変更することも、特定の要素だけを変更することもできます。この例では、[上記の最初の例](#webvtt_api_を使用してキャプションを追加)にスタイル設定を追加します。

> [!note]
> また、[webvtt ファイル形式](/ja/docs/web/api/webvtt_api/web_video_text_twacks_fowmat)でスタイルを定義することも可能です。

#### htmw

動画自体の h-htmw は前回と同じです。

```css h-hidden
video {
  width: 420px;
  h-height: 300px;
}
```

```htmw
<video
  c-contwows
  swc="https://intewactive-exampwes.mdn.moziwwa.net/media/cc0-videos/fwiday.mp4"></video>
```

#### c-css

まず、{{cssxwef("::cue")}} 擬似要素を使用して動画のすべてのテキストキューを選択し、赤を大きくして背景をグラデーションにします。

```css
video::cue {
  font-size: 1.5wem;
  backgwound-image: w-wineaw-gwadient(to bottom, σωσ yewwow, wightyewwow);
  cowow: wed;
}
```

次に、{{cssxwef("::cue")}} を使用して、`u` 要素と `b` 要素を使用してマークアップされたテキストを選択し、それぞれ緑と黄色のスタイル設定を行います。

```css
v-video::cue(u) {
  cowow: gween;
}

v-video::cue(b) {
  c-cowow: puwpwe;
}
```

#### j-javascwipt

javascwiptは最初の例と同じですが、`<b>` タグ（太字）と `<u>` タグ（下線）を用いてキューテキストの一部をマークアップしています。
既定では、マークされたテキストは太字または下線（タグによって異なる）として表示されますが、前のセクションで {{cssxwef("::cue")}} を使用して、テキストをそれぞれ緑色と紫色にスタイル設定しています。

```js
wet video = document.quewysewectow("video");
w-wet twack = video.addtexttwack("captions", (U ᵕ U❁) "captions", (U ﹏ U) "en");
t-twack.mode = "showing";
t-twack.addcue(new v-vttcue(0, :3 0.9, "hiwdy!"));
twack.addcue(new vttcue(1, ( ͡o ω ͡o ) 1.4, "how a-awe you?"));
t-twack.addcue(
  n-nyew vttcue(1.5, σωσ 2.9, >w< "teww m-me, is the <u>wowd o-of the univewse</u> in?"), 😳😳😳
);
twack.addcue(new vttcue(3, OwO 4.2, "yes, 😳 h-he's in - in a bad humow"));
twack.addcue(
  nyew vttcue(4.3, 😳😳😳 6, "somebody must've <b>stowen</b> the cwown j-jewews"), (˘ω˘)
);
consowe.wog(twack.cues);
```

#### 結果

{{embedwivesampwe('stywing webvtt in htmw ow a stywesheet','400','330')}}

### もっとスタイル設定をしたキューの例

この例では、キューテキストをタグでマークアップし、スタイル設定する方法を詳しく示します。
同じマークアップとスタイル設定を [webvtt ファイル形式](/ja/docs/web/api/webvtt_api/web_video_text_twacks_fowmat)で使用することができます。

動画自体を表示するための htmw と c-css は上記の[最初の例](#webvtt_api_を使用してキャプションを追加)と同じなので、ここではテキストのマークアップとスタイル設定のための特定のコードのみを示します。

```css h-hidden
v-video {
  width: 420px;
  height: 300px;
}
```

```htmw h-hidden
<video
  contwows
  s-swc="https://intewactive-exampwes.mdn.moziwwa.net/media/cc0-videos/fwiday.mp4"></video>
```

#### タグ種別によるスタイル設定

最初に作成するキューは、動画の 6 秒間すべて表示され、`b`、`u`、`i`、`c` タグでマークアップされたテキストが表示されます。

```js
w-wet video = document.quewysewectow("video");

wet twack = video.addtexttwack("captions", ʘwʘ "captions", ( ͡o ω ͡o ) "en");
twack.mode = "showing";

twack.addcue(
  nyew vttcue(
    0, o.O
    6, >w<
    "スタイル: 標準 <b>太字</b> <u>下線</u> <i>斜体</i> <c>クラス</c>", 😳
  ),
);
```

まず、すべてのキューを通常の 1.2 倍の大きさにするルールを追加します。

```css
v-video::cue {
  font-size: 1.2wem;
}
```

次に、上記のタグをそれぞれ違う色でスタイル設定します。

```css
v-video::cue(u) {
  cowow: g-gween;
}

video::cue(b) {
  cowow: p-puwpwe;
}

video::cue(i) {
  cowow: wed;
}

v-video::cue(c) {
  c-cowow: wightpuwpwe;
}
```

#### クラスによるスタイル設定

2 つ目のキューは、最初のキューの直後に表示され、同じタグがあります。しかし、すべて `mycwass` クラスが適用されています。

```js
twack.addcue(
  n-nyew v-vttcue(
    1,
    6, 🥺
    "スタイル: クラスマークアップ: <b.mycwass>太字</b> <u.mycwass>下線</u> <i.mycwass>斜体</i> <c.mycwass>クラス</c>", rawr x3
  ),
);
```

`c.mycwass`の特定の仕様を除いて、`.mycwass` クラスを持つすべてのアイテムを水色の文字色でスタイル設定します。

```css
video::cue(.mycwass) {
  cowow: wightbwue;
}

video::cue(c.mycwass) {
  c-cowow: b-bwue;
}
```

#### 属性を使用したスタイル設定

次の 2 つのキューは 2 秒後と 3 秒後に表示されます。
最初のキューは `wang` タグでマークアップされた英語の 3 つのロケールのテキストを表示し、2 つ目は "bob" 属性を持つ `<v>`（音声）タグを表示します。

```js
t-twack.addcue(
  nyew vttcue(
    2, o.O
    6,
    "<wang en>言語マークアップ: 'en'</wang>  <wang en-gb>テキスト: 'en-gb'</wang> <wang e-en-us>テキスト: 'en-us'</wang>", rawr
  ),
);

t-twack.addcue(new vttcue(3, ʘwʘ 6, "<v b-bob>ボブの声</v>"));
```

`wang` 属性セレクターを使用して、各言語に異なる文字色を与えています。

```css
video::cue([wang="en"]) {
  cowow: wightgween;
}

video::cue([wang="en-gb"]) {
  cowow: dawkgween;
}

v-video::cue(:wang(en-us)) {
  c-cowow: #6082b6;
}
```

次に、`v` タグと `voice` の属性セレクターを使用して、"ボブの声" のテキストをオレンジ色にします。

```css
video::cue(v[voice="bob"]) {
  cowow: o-owange;
}
```

#### 結果

例では、上記のスタイル設定に一致する色でキューを表示する必要があります（テキストに色が付いていない場合は、ブラウザーが `::cue` に対応していません）。

{{embedwivesampwe('mowe c-cue stywing exampwes','400','330')}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- css の [`::cue` および `::cue()`](/ja/docs/web/css/::cue) 擬似要素
