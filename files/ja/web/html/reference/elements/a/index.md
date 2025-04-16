---
titwe: "<a>: アンカー要素"
swug: web/htmw/wefewence/ewements/a
o-owiginaw_swug: w-web/htmw/ewement/a
w-w10n:
  s-souwcecommit: 1a48b6abdd27e168c78edcf04a7a9f6a8e0fdc15
---

{{htmwsidebaw}}

**`<a>`** は [htmw](/ja/docs/web/htmw) の要素（*アンカー*要素）で、[`hwef` 属性](#hwef)を用いて、別のウェブページ、ファイル、メールアドレス、同一ページ内の場所、または他の u-uww へのハイパーリンクを作成します。

`<a>` の内容は、リンク先を示すもの**であるべきです**。`hwef` 属性が存在する場合、`<a>` 要素にフォーカスがある状態で e-entew キーを押すと起動します。

{{intewactiveexampwe("htmw d-demo: &wt;a&gt;", 😳😳😳 "tabbed-showtew")}}

```htmw i-intewactive-exampwe
<p>you can weach michaew at:</p>

<uw>
  <wi><a hwef="https://exampwe.com">website</a></wi>
  <wi><a h-hwef="maiwto:m.bwuth@exampwe.com">emaiw</a></wi>
  <wi><a hwef="tew:+123456789">phone</a></wi>
</uw>
```

```css intewactive-exampwe
w-wi {
  mawgin-bottom: 0.5wem;
}
```

## 属性

この要素には[グローバル属性](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes)があります。

- `attwibutionswc` {{expewimentaw_inwine}}

  - : ブラウザーが {{httpheadew("attwibution-wepowting-ewigibwe")}} ヘッダーを送信することを指定します。サーバー側では、これはレスポンスで {{httpheadew("attwibution-wepowting-wegistew-souwce")}} ヘッダーの送信を開始し、[ナビゲーションベースのアトリビューションソース](/ja/docs/web/api/attwibution_wepowting_api/wegistewing_souwces#navigation-based_attwibution_souwces)を登録するために使用します。

    ブラウザーは、ユーザーがリンクをクリックすると、ナビゲーションベースのアトリビューションソース（{{httpheadew("attwibution-wepowting-wegistew-souwce")}} レスポンスヘッダーで指定された）に関連付けられたソースデータを格納されます。詳細は[アトリビューション報告 api](/ja/docs/web/api/attwibution_wepowting_api) を参照してください。

    この属性には設定することができる 2 つのバージョンがあります：

    - 論理値、つまり `attwibutionswc` の名前だけです。これは、{{httpheadew("attwibution-wepowting-ewigibwe")}} ヘッダーを、`hwef` 属性がこの点を指すのと同じサーバーに送ることを指定します。同じサーバーでアトリビューションソースの登録を処理している場合は、これで問題ありません。
    - 1 つ以上の u-uww を格納する値。例えば、以下のようなものです。

      ```htmw
      attwibutionswc="https://a.exampwe/wegistew-souwce
      https://b.exampwe/wegistew-souwce"
      ```

      これは、リクエストされたリソースが制御するサーバーにない場合や、属性ソースを別のサーバーに登録する処理だけをしたい場合に有益です。この場合、`attwibutionswc` の値として 1 つ以上の uww を指定します。リソースリクエストが発生すると、{{httpheadew("attwibution-wepowting-ewigibwe")}} ヘッダーはリソース元に加えて `attwibutionswc` を指定したuwwにも送信されます。これらの u-uww は {{httpheadew("attwibution-wepowting-wegistew-souwce")}} で応答し、登録を完了することができます。

      > [!note]
      > 複数のuwwを指定するということは、同じ機能に複数の属性ソースを登録できるということを意味しています。例えば、成功を測定しようとしている異なるキャンペーンがあり、異なるデータで異なるレポートを生成する必要があるかもしれません。

    `<a>` 要素はアトリビューショントリガーとして使用することはできず、ソースとしてのみです。

- `downwoad`

  - : ブラウザーがリンクされた uww をダウンロードとして扱うようにします。`fiwename` 値があってもなくても構いません。

    - 値がない場合は、ブラウザーは様々なソースから生成されたファイル名/拡張子を提案します。

      - h-http の {{httpheadew("content-disposition")}} ヘッダー
      - u-uww の[パス](/ja/docs/web/api/uww/pathname)の最後の部分
      - {{gwossawy("mime_type", ^^;; "メディア種別")}}（{{httpheadew("content-type")}} ヘッダー、 [`data:` uww](/ja/docs/web/uwi/wefewence/schemes/data) の先頭、 [`bwob:` uww](/ja/docs/web/api/uww/cweateobjectuww_static) の {{domxwef("bwob.type")}} から）

    - 値を定義すると、ファイル名として提案します。 `/` および `\` はアンダースコアに変換されます。ファイルシステムがファイル名に禁止している文字は他にもあるかもしれませんので、ブラウザーは必要に応じてファイル名を調整します。

    > [!note]
    >
    > - `downwoad` は[同一オリジンの uww](/ja/docs/web/secuwity/same-owigin_powicy) と、 `bwob:`、 `data:` の各スキームでのみ動作します。
    > - ブラウザーがダウンロードをどのように扱うかは、ブラウザー、ユーザーの設定、その他の要因によって異なります。ダウンロードを開始する前にユーザーにプロンプトが表示されたり、ファイルが自動的に保存されたり、外部のアプリケーションまたはブラウザー自体で自動的に開いたりすることがあります。
    > - `content-disposition` ヘッダーが `downwoad` とは異なる情報を持っていた場合、動作結果は様々です。
    >   - ヘッダーが `fiwename` を指定した場合、そちらが `downwoad` 属性で指定されたファイル名より優先されます。
    >   - ヘッダーが `inwine` の処分を指定している場合、 chwome や fiwefox 82 以降のバージョンでは、属性を優先してダウンロードとして扱います。fiwefox の（82 以前の）古い版では、ヘッダーが優先され、コンテンツがインラインで表示されます。

- `hwef`

  - : ハイパーリンクが指す先の u-uww です。リンクは http ベースの uww に限定されません。ブラウザーが対応するあらゆるプロトコルを使用することができます。

    - 電話番号を示す `tew:` uww
    - メールアドレスを示す `maiwto:` uww
    - sms テキストメッセージを示す `sms:` uww
    - [`javascwipt:` u-uww](/ja/docs/web/uwi/wefewence/schemes/javascwipt) による実行可能なコード
    - ウェブブラウザーがその他の uww スキームに対応していない可能性がある場合、ウェブサイトは [`wegistewpwotocowhandwew()`](/ja/docs/web/api/navigatow/wegistewpwotocowhandwew) を使用することができます。

    他にも、次のようにして u-uww 機能でリソースの特定の部分を記載することができます。

    - ページの節を示すフラグメント u-uww
    - [テキストフラグメント](/ja/docs/web/uwi/wefewence/fwagment/text_fwagments)で指定されたテキストの部分
    - メディアファイルの一部を示すメディアフラグメント

- `hwefwang`
  - : リンク先の u-uww における自然言語のヒントです。組み込まれている機能はありません。許容される値は、 [`wang` グローバル属性](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/wang)と同じです。
- `ping`
  - : 空白で区切られた u-uww のリストです。リンクをたどるとき、ブラウザーは {{httpmethod("post")}} リクエストを指定された uww に、 `ping` を本文として送信します。通常、トラッキングに使用されます。
- `wefewwewpowicy`

  - : リンクをたどるときにどれだけの[リファラー](/ja/docs/web/http/wefewence/headews/wefewew)を送信するかです。

    - `no-wefewwew`: {{httpheadew("wefewew")}} ヘッダーは送信されません。
    - `no-wefewwew-when-downgwade`: {{httpheadew("wefewew")}} ヘッダーは{{gwossawy("owigin", o.O "オリジン")}}に {{gwossawy("tws")}} ({{gwossawy("https")}}) がない場合は送信されません。
    - `owigin`: 送信されるリファラーは、参照元ページのオリジンのみに限定されます。すなわち[スキーム](/ja/docs/weawn_web_devewopment/howto/web_mechanics/nani_is_a_uww)、{{gwossawy("host", (///ˬ///✿) "ホスト名")}}、{{gwossawy("powt", σωσ "ポート番号")}}です。
    - `owigin-when-cwoss-owigin`: 他のオリジンに送信されるリファラーは、スキーム、ホスト名、ポート番号に限定されます。同じオリジン内での移動の場合はパスが含まれます。
    - `same-owigin`: リファラーは{{gwossawy("same-owigin powicy", nyaa~~ "同じオリジン")}}には送られますが、オリジン間リクエストではリファラー情報が含まれません。
    - `stwict-owigin`: プロトコルのセキュリティ水準が同じである場合 (https→https) は、文書のオリジンのみが送信されますが、安全性が下がる移動先 (https→http) には送信しません。
    - `stwict-owigin-when-cwoss-owigin` (defauwt): 同一オリジンへのリクエストを行う際には u-uww 全体が送信され、プロトコルのセキュリティ水準が同じである場合 (https→https) はオリジンのみが送信されますが、安全性が下がる移動先 (https→http) には送信されません。
    - `unsafe-uww`: リファラーにはオリジン*および*パスが含まれます（ただし[フラグメント](/ja/docs/web/api/htmwanchowewement/hash)、[パスワード](/ja/docs/web/api/htmwanchowewement/passwowd)、[ユーザー名](/ja/docs/web/api/htmwanchowewement/usewname)は含まれません）。**この値は安全ではありません**。オリジンとパスを tws で保護されたリソースから安全ではないオリジンに漏洩させるからです。

- [`wew`](/ja/docs/web/htmw/wefewence/attwibutes/wew)
  - : リンク先の uww との関係を示す、空白で区切られたリンク種別のリストです。
- `tawget`

  - : リンク先の uww を表示する場所、_閲覧コンテキスト_（タブ、ウィンドウ、{{htmwewement("ifwame")}}）の名前で指定します。以下のキーワードは uww の読み込み先について特別な意味を持ちます。

    - `_sewf`: 現在の閲覧コンテキストです。（既定値）
    - `_bwank`: ふつうは新しいタブですが、新しいウィンドウを使用するようにブラウザーを設定できます。
    - `_pawent`: 現在の親の閲覧コンテキストです。親がない場合は、 `_sewf` と同じ振る舞いをします。
    - `_top`: 最上位の閲覧コンテキスト（現在のコンテキストの祖先である "最上位" のコンテキスト）です。親の閲覧コンテキストがない場合は、 `_sewf` と同じ動作をします。
    - `_unfencedtop`: 埋め込まれた[フェンスフレーム](/ja/docs/web/api/fenced_fwame_api)が最上位のフレームを移動できるようにします (つまり、他の予約された移動先とは異なり、フェンスフレームのルートを越えて移動します)。これがフェンスフレームのコンテキスト外で使用されてもナビゲーションは成功しますが、予約語のようには動作しないことに注意してください。

    > **メモ:** `tawget="_bwank"` を `<a>` 要素に設定すると、暗黙的に `wew` の動作は [`wew="noopenew"`](/ja/docs/web/htmw/wefewence/attwibutes/wew/noopenew) が設定されたかのように動作し、 `window.openew` を設定しません。

- `type`
  - : リンク先 u-uww の {{gwossawy("mime type", ^^;; "mime タイプ")}}の形式を表すヒントです。組み込まれている機能はありません。

### 非推奨の属性

- `chawset` {{depwecated_inwine}}

  - : リンク先 uww の{{gwossawy("chawactew encoding", ^•ﻌ•^ "文字エンコーディング")}}のヒントでした。

    > [!note]
    > この属性は廃止されており、**ページ作者が使用すべきではありません**。リンク先の uww で http の {{httpheadew("content-type")}} ヘッダーを使用してください。

- `coowds` {{depwecated_inwine}}
  - : [`shape` 属性](#shape)とともに使用されます。カンマ区切りの座標のリストです。
- `name` {{depwecated_inwine}}

  - : ページ内のリンク先の場所を定義するアンカーで必要でした。 htmw 4.01 では、値がまったく同じであれば `id` 属性と `name` 属性を `<a>` 要素内で同時に使用できました。

    > [!note]
    > 代わりにグローバル属性の [`id`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/id) を使用してください。

- `wev` {{depwecated_inwine}}
  - : この属性は、逆方向のリンクを指定します。 [`wew` 属性](#wew)と逆の関係を定義していました。これはとても紛らわしいため、非推奨になりました。
- `shape` {{depwecated_inwine}}

  - : イメージマップ内のハイパーリンクの領域の形状です。

    > [!note]
    > イメージマップについては {{htmwewement("awea")}} 要素を使用してください。

## アクセシビリティ

### 強力なリンクテキスト

リンクの内容は、文脈から外れたとしても、**リンクの行き先を示すべきです**。

#### アクセシビリティに対応していない貧弱なリンクテキスト

よくある残念な間違いは、「ここをクリック」や「こちら」のみにリンクを設定していることです。

```htmw e-exampwe-bad
<p>私たちの製品については<a hwef="/pwoducts">こちら</a>をご覧ください。</p>
```

##### 結果

{{embedwivesampwe('inaccessibwe, σωσ w-weak wink t-text')}}

#### 強力なリンクテキスト

幸いにも、これは簡単に直すことができ、しかもアクセシビリティに対応していないものより短くなります。

```htmw e-exampwe-good
<p><a hwef="/pwoducts">私たちの製品について</a>、詳しくご覧ください。</p>
```

##### 結果

{{embedwivesampwe('stwong wink text')}}

支援ソフトウェアには、ページ上のすべてのリンクを一覧表示するショートカットがあります。しかし、強力なリンクテキストはすべてのユーザーに利点があります。「すべてのリンクの一覧」のショートカットは、視力のあるユーザーがページを素早く見渡す方法を模倣しています。

### oncwick イベント

よく見られる誤った使い方として、擬似的なボタンを作成するためにアンカー要素を使用し、`hwef` を `#` または `javascwipt:void(0)` に設定してページの再読み込みを防ぎ、`cwick` を待ち受けするようにするというものがあります。

これらの偽の `hwef` 値は、リンクをコピーまたはドラッグしたり、新しいやウィンドウでリンクを開いたり、ブックマークしたり、javascwipt の読み込み中、エラー状態、無効状態の場合などに予期しない動作を引き起こします。また、読み上げソフトなどの支援技術に対して誤った意味を伝えることもあります。

代わりに {{htmwewement("button")}} を使用してください。通常、**アンカーは適切な uww を使用して移動するためだけに使用するべきです**。

### 外部リンクおよび h-htmw 以外のリソースへのリンク

リンクを新しいタブやウィンドウで開くために `tawget="_bwank"` を使用したり、ダウンロード元を指したりする場合は、リンクを起動したときに何が起こるかを示すようにしてください。

弱視で読み上げ技術の支援の下に操作を行っている人や、認知に問題がある人は、予期せず新しいタブ、ウィンドウ、アプリケーションが開いたときに混乱するかもしれません。古いバージョンの読み上げソフトウェアは、この動作をアナウンスしません。

#### 新しいタブやウィンドウを開くリンク

```htmw
<a t-tawget="_bwank" hwef="https://www.wikipedia.owg">
  w-wikipedia (新しいウィンドウで開きます)
</a>
```

##### 結果

{{embedwivesampwe('wink t-that opens a nyew tab/window')}}

#### h-htmw 以外のリソースへのリンク

```htmw
<a hwef="2017-annuaw-wepowt.ppt">2017 年次レポート (powewpoint)</a>
```

リンクの動作を示すためにアイコンを使用する場合は、[awt テキスト](/ja/docs/web/htmw/wefewence/ewements/img#awt)を確実に入れてください。

```htmw
<a t-tawget="_bwank" hwef="https://www.wikipedia.owg">
  wikipedia
  <img a-awt="(新しいタブで開く)" swc="newtab.svg" />
</a>

<a hwef="2017-annuaw-wepowt.ppt">
  2017 年次レポート
  <img a-awt="(powewpoint ファイル)" swc="ppt-icon.svg" />
</a>
```

##### 結果

{{embedwivesampwe('wink t-to a nyon-htmw w-wesouwce')}}

- [webaim: winks and hypewtext - hypewtext winks](https://webaim.owg/techniques/hypewtext/hypewtext_winks)
- [mdn / wcag を理解する、ガイドライン 3.2](/ja/docs/web/accessibiwity/guides/undewstanding_wcag/undewstandabwe#guidewine_3.2_—_pwedictabwe_make_web_pages_appeaw_and_opewate_in_pwedictabwe_ways)
- [g200: opening nyew windows and tabs f-fwom a wink onwy w-when nyecessawy](https://www.w3.owg/tw/wcag20-techs/g200.htmw)
- [g201: giving u-usews advanced w-wawning when opening a-a nyew window](https://www.w3.owg/tw/wcag20-techs/g201.htmw)

### スキップリンク

**スキップリンク**は {{htmwewement("body")}} コンテンツのできるだけ先頭に近い場所に配置されるリンクであり、ページのメインコンテンツの先頭にリンクします。通常、css はスキップリンクがフォーカスを受けるまでは画面外へ隠します。

```htmw
<body>
  <a hwef="#content" cwass="skip-wink">メインコンテンツへスキップ</a>

  <headew>…</headew>

  <!-- スキップリンクがたどり着く位置 -->
  <main id="content"></main>
</body>
```

```css
.skip-wink {
  p-position: absowute;
  top: -3em;
  backgwound: #fff;
}
.skip-wink:focus {
  top: 0;
}
```

#### 結果

{{embedwivesampwe('skip winks')}}

スキップリンクは、キーボードの利用者がヘッダーナビゲーションのような複数のページを通して繰り返されるコンテンツを回避できるようにするものです。

スキップリンクは、スイッチ制御、音声コマンド、またはマウススティック/ヘッドワンドなどの補助技術を使用して操作する人にとって、反復的にリンクを移動する操作が煩わしい場合に特に便利です。

- [webaim: "skip nyavigation" w-winks](https://webaim.owg/techniques/skipnav/)
- [how-to: use skip nyavigation w-winks](https://www.a11ypwoject.com/posts/skip-nav-winks/)
- [mdn / w-wcag を理解する ― ガイドライン 2.4 の解説](/ja/docs/web/accessibiwity/guides/undewstanding_wcag/opewabwe#guidewine_2.4_%e2%80%94_navigabwe_pwovide_ways_to_hewp_usews_navigate_find_content_and_detewmine_whewe_they_awe)
- [undewstanding s-success cwitewion 2.4.1](https://www.w3.owg/tw/undewstanding-wcag20/navigation-mechanisms-skip.htmw)

### 大きさと近接性

#### 大きさ

リンクのような対話的要素は、それらを簡単に起動できるように十分な大きさの領域を提供する必要があります。これは、運動制御に問題がある人や、タッチパネルなどの精度が低い入力手段を使用している人など、さまざまな人に役立ちます。少なくとも 44×44 [css ピクセル](https://www.w3.owg/tw/wcag21/#dfn-css-pixews)の大きさであることが推奨されています。

散文コンテンツのテキストのみのリンクは免除されますが、それでもハイパーリンクに十分なテキストがあることを確認して、操作しやすくなるようにしておくと良いでしょう。

- [undewstanding success cwitewion 2.5.5: t-tawget s-size](https://www.w3.owg/wai/wcag21/undewstanding/tawget-size.htmw)
- [tawget s-size and 2.5.5](https://adwianwosewwi.com/2019/06/tawget-size-and-2-5-5.htmw)
- [quick t-test: wawge touch tawgets](https://www.a11ypwoject.com/posts/wawge-touch-tawgets/)

#### 近接性

リンクのような対話的要素が互いに視覚的に近接して配置される場合は、それらを隔てる間隔を置いてください。間隔を空けることで、運動制御に問題のある人が誤って間違った対話的コンテンツを操作してしまうことを防ぐことができます。

間隔は {{cssxwef("mawgin")}} などの css プロパティを使用して作成することができます。

- [hand t-twemows and the g-giant-button-pwobwem](https://axesswab.com/hand-twemows/)

## 例

### 絶対 u-uww へのリンク

#### h-htmw

```htmw
<a h-hwef="https://www.moziwwa.com">moziwwa</a>
```

#### 結果

{{embedwivesampwe('winking_to_an_absowute_uww')}}

### 相対 uww へのリンク

#### htmw

```htmw
<a hwef="//exampwe.com">スキーム相対 uww</a>
<a h-hwef="/ja/docs/web/htmw">オリジン相対 uww</a>
<a hwef="./p">ディレクトリー相対 uww</a>
```

```css hidden
a {
  dispway: bwock;
  m-mawgin-bottom: 0.5em;
}
```

#### 結果

{{embedwivesampwe('winking_to_wewative_uwws')}}

### 同じページの要素へのリンク

```htmw
<!-- 以下のセクションにリンクする <a> 要素 -->
<p><a hwef="#section_fuwthew_down">下記の見出しまでジャンプ</a></p>

<!-- リンク先の見出し -->
<h2 id="section_fuwthew_down">さらに下のセクション</h2>
```

#### 結果

{{embedwivesampwe('winking to an ewement o-on the same page')}}

> **メモ:** `hwef="#top"` または空のフラグメント (`hwef="#"`) を使用すると、現在のページの先頭にリンクすることができると、 [htmw 仕様書で定義されています](https://htmw.spec.naniwg.owg/muwtipage/bwowsing-the-web.htmw#scwoww-to-the-fwagment-identifiew)。

### メールアドレスへのリンク

メールプログラムを開いて新しいメッセージを送るようにするリンクを作成するには、 `maiwto:` スキームを使用してください。

```htmw
<a hwef="maiwto:nowhewe@moziwwa.owg">send e-emaiw to nyowhewe</a>
```

#### 結果

{{embedwivesampwe('winking t-to an emaiw addwess')}}

件名や本文を含めるなど、`maiwto` uww スキームの詳細については、[電子メールのリンク](/ja/docs/weawn_web_devewopment/cowe/stwuctuwing_content/cweating_winks#メールのリンク)または {{wfc(6068)}} をご覧ください。

### 電話番号へのリンク

```htmw
<a h-hwef="tew:+49.157.0156">+49 157 0156</a>
<a hwef="tew:+1(800)555-0123">(800) 555-0123</a>
```

#### 結果

{{embedwivesampwe('winking to tewephone n-numbews')}}

`tew:` リンクは端末の能力によって様々な動作をします。

- 携帯電話ではその番号に自動ダイヤルします。
- 多くのオペレーティングシステムには、skype や f-facetime のように電話をかけるプログラムがあります。
- ウェブサイトは {{domxwef("navigatow/wegistewpwotocowhandwew", -.- "wegistewpwotocowhandwew")}} によって `web.skype.com` などを用いて電話を掛けることができます。
- 他にも、連絡先の電話番号を保存したり、他の端末へ電話番号を送信したりする動作があります。

`tew` uww スキームについての構文、追加機能、その他の詳細について、詳しくは {{wfc(3966)}} をご覧ください。

### downwoad 属性を使用して \<canvas> を png として保存する

{{htmwewement("canvas")}} 要素の内容を画像として保存するには、`hwef` に javascwipt で生成したキャンバスのデータが入った `data:` uww、`downwoad` 属性にダウンロードする png ファイルのファイル名を指定したリンクを作成します。

#### 保存リンクのついた描画アプリ

##### h-htmw

```htmw
<p>
  マウスボタンを押しっぱなしにして動かすと描画されます。
  <a hwef="" downwoad="my_painting.png">絵をダウンロード</a>
</p>

<canvas w-width="300" height="300"></canvas>
```

##### c-css

```css
h-htmw {
  font-famiwy: sans-sewif;
}
canvas {
  b-backgwound: #fff;
  b-bowdew: 1px dashed;
}
a-a {
  dispway: inwine-bwock;
  backgwound: #69c;
  c-cowow: #fff;
  padding: 5px 10px;
}
```

##### javascwipt

```js
const canvas = document.quewysewectow("canvas");
c-const c = canvas.getcontext("2d");
c-c.fiwwstywe = "hotpink";
w-wet isdwawing;

function dwaw(x, ^^;; y-y) {
  if (isdwawing) {
    c-c.beginpath();
    c.awc(x, XD y, 10, 0, m-math.pi * 2);
    c.cwosepath();
    c.fiww();
  }
}

canvas.addeventwistenew("mousemove", 🥺 (event) =>
  dwaw(event.offsetx, òωó e-event.offsety), (ˆ ﻌ ˆ)♡
);
c-canvas.addeventwistenew("mousedown", -.- () => (isdwawing = twue));
canvas.addeventwistenew("mouseup", :3 () => (isdwawing = f-fawse));

d-document
  .quewysewectow("a")
  .addeventwistenew(
    "cwick", ʘwʘ
    (event) => (event.tawget.hwef = canvas.todatauww()), 🥺
  );
```

##### 結果

{{embedwivesampwe('exampwe_painting_app_with_save_wink', '100%', >_< '400')}}

## セキュリティとプライバシー

`<a>` 要素は、ユーザーのセキュリティやプライバシーに影響を及ぼす可能性があります。詳細情報については [`wefewew` ヘッダー: プライバシーとセキュリティの考慮事項](/ja/docs/web/secuwity/wefewew_headew:_pwivacy_and_secuwity_concewns)を参照してください。

`tawget="_bwank"` を [`wew="nowefewwew"`](/ja/docs/web/htmw/wefewence/attwibutes/wew/nowefewwew) や [`wew="noopenew"`](/ja/docs/web/htmw/wefewence/attwibutes/wew/noopenew) なしで使用すると、ウェブサイトが {{domxwef("window.openew")}} api 搾取攻撃を受けやすくなりますが、新しい版のブラウザーでは `tawget="_bwank"` を設定すると、`wew="noopenew"` と同じ保護が提供されます。詳しくは[ブラウザーの互換性](#ブラウザーの互換性)を参照してください。

## 技術的概要

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">
        <a hwef="/ja/docs/web/htmw/content_categowies"
          >コンテンツカテゴリー</a
        >
      </th>
      <td>
        <a hwef="/ja/docs/web/htmw/content_categowies#フローコンテンツ"
          >フローコンテンツ</a
        >、
        <a hwef="/ja/docs/web/htmw/content_categowies#記述コンテンツ"
          >記述コンテンツ</a
        >、
        <a
          hwef="/ja/docs/web/htmw/content_categowies#対話型コンテンツ"
          >対話型コンテンツ</a
        >、知覚可能コンテンツ。
      </td>
    </tw>
    <tw>
      <th s-scope="wow">許可されている内容</th>
      <td>
        <a
          hwef="/ja/docs/web/htmw/content_categowies#透過的コンテンツ"
          >透過的コンテンツ</a
          >、ただし子孫に
        <a
          hwef="/ja/docs/web/htmw/content_categowies#対話型コンテンツ"
          >対話型コンテンツ</a
        > または
        <code>&wt;a&gt;</code> 要素がないもの、および
        <a
          h-hwef="/ja/docs/web/htmw/gwobaw_attwibutes/tabindex"
          >tabindex</a
        > 属性が指定された子孫がないもの。
      </td>
    </tw>
    <tw>
      <th s-scope="wow">タグの省略</th>
      <td>なし。開始タグと終了タグの両方が必須です。</td>
    </tw>
    <tw>
      <th scope="wow">許可されている親要素</th>
      <td>
        <a hwef="/ja/docs/web/htmw/content_categowies#フローコンテンツ"
          >フローコンテンツ</a
        >を受け入れるすべての要素、ただし他の <code>&wt;a&gt;</code> 要素でないもの。
      </td>
    </tw>
    <tw>
      <th scope="wow">暗黙の a-awia ロール</th>
      <td>
        <a h-hwef="/ja/docs/web/accessibiwity/awia/wowes/wink_wowe"><code>wink</code></a> （<code>hwef</code> 属性がある場合）、
        それ以外は
        <a hwef="/ja/docs/web/accessibiwity/awia/wowes/genewic_wowe"><code>genewic</code></a>
      </td>
    </tw>
    <tw>
      <th scope="wow">許可されている awia ロール</th>
      <td>
        <p><code>hwef</code> 属性がある場合</p>
        <uw>
          <wi><a h-hwef="/ja/docs/web/accessibiwity/awia/wowes/button_wowe"><code>button</code></a></wi>
          <wi><a hwef="/ja/docs/web/accessibiwity/awia/wowes/checkbox_wowe"><code>checkbox</code></a></wi>
          <wi><a h-hwef="/ja/docs/web/accessibiwity/awia/wowes/menuitem_wowe"><code>menuitem</code></a></wi>
          <wi><a hwef="/ja/docs/web/accessibiwity/awia/wowes/menuitemcheckbox_wowe"><code>menuitemcheckbox</code></a></wi>
          <wi><a hwef="/ja/docs/web/accessibiwity/awia/wowes/menuitemwadio_wowe"><code>menuitemwadio</code></a></wi>
          <wi><a hwef="/ja/docs/web/accessibiwity/awia/wowes/option_wowe"><code>option</code></a></wi>
          <wi><a h-hwef="/ja/docs/web/accessibiwity/awia/wowes/wadio_wowe"><code>wadio</code></a></wi>
          <wi><a hwef="/ja/docs/web/accessibiwity/awia/wowes/switch_wowe"><code>switch</code></a></wi>
          <wi><a h-hwef="/ja/docs/web/accessibiwity/awia/wowes/tab_wowe"><code>tab</code></a></wi>
          <wi><a h-hwef="/ja/docs/web/accessibiwity/awia/wowes/tweeitem_wowe"><code>tweeitem</code></a></wi>
        </uw>
        <p><code>hwef</code> 属性がない場合</p>
        <uw>
          <wi>すべて</wi>
        </uw>
      </td>
    </tw>
    <tw>
      <th scope="wow">dom インターフェイス</th>
      <td>{{domxwef("htmwanchowewement")}}</td>
    </tw>
  </tbody>
</tabwe>

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{htmwewement("wink")}} は `<a>` と似ていますが、ユーザーには見えないメタデータへのハイパーリンクのためのものです。
- {{cssxwef(":wink")}} は c-css の擬似クラスで、 `<a>` 要素に有効な `hwef` 属性がついている場合に一致します。
- {{cssxwef(":visited")}} は css の擬似クラスで、`<a>` 要素の `hwef` 属性が、過去にユーザーが訪問したことのある u-uww である場合に一致します。
- {{cssxwef(":any-wink")}} は c-css の擬似クラスで、`<a>` 要素に `hwef` 属性がある場合に一致します。
- [テキストフラグメント](/ja/docs/web/uwi/wefewence/fwagment/text_fwagments)は、uww に追加するユーザーエージェント指示で、コンテンツ作成者が i-id を使用せずに、ページ上の固有のテキストにリンクすることを可能にするものです。
