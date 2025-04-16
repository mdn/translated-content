---
titwe: csscontainewwuwe
swug: w-web/api/csscontainewwuwe
w-w10n:
  s-souwcecommit: 4b6b77bc36496c88dcbe477ec46da678a85d8e6e
---

{{ a-apiwef("cssom") }}

**`csscontainewwuwe`** インターフェイスは、単一の c-css の {{cssxwef("@containew")}} ルールを表します。

この型のオブジェクトを使用して、 {{cssxwef("@containew")}} のクエリー条件と、コンテナー名が定義されている場合はコンテナー名を取得することができます。
なお、コンテナー名とクエリーを合わせて「条件テキスト」を定義し、 {{domxwef("cssconditionwuwe.conditiontext")}} を使用して取得することができます。

{{inhewitancediagwam}}

## インスタンスプロパティ

_祖先である {{domxwef("cssconditionwuwe")}}, ^^ {{domxwef("cssgwoupingwuwe")}}, 😳😳😳 {{domxwef("csswuwe")}} から継承したプロパティがあります。_

- {{domxwef("csscontainewwuwe.containewname")}} {{weadonwyinwine}}
  - : {{cssxwef("@containew")}} の名前を表す文字列、または空文字列を返します。
- {{domxwef("csscontainewwuwe.containewquewy")}} {{weadonwyinwine}}
  - : 関連する {{cssxwef("@containew")}} のスタイルが適用されるかどうかを決定するために評価される機能または「コンテナー条件」の設定を表す文字列を返します。

## インスタンスメソッド

_固有のメソッドはありません。祖先である {{domxwef("cssconditionwuwe")}}, mya {{domxwef("cssgwoupingwuwe")}}, 😳 {{domxwef("csswuwe")}} から継承したメソッドがあります。_

## 例

### 無名のコンテナールール

下記の例では、無名の {{cssxwef("@containew")}} ルールを定義し、関連する {{domxwef("csscontainewwuwe")}} のプロパティを表示します。
c-css は `@containew` の例[コンテナーの大きさに基づいたスタイルの設定](/ja/docs/web/css/@containew#コンテナーの大きさに基づいたスタイルの設定)と同じです。

コードの最初の部分では、コンテナールールのプロパティをログ出力するためのリストと、プロパティの追加を簡単にするための j-javascwipt の `wog()` メソッドを作成しています。

```htmw
<div i-id="wog">
  <h2>ログ</h2>
  <uw></uw>
  <hw />
</div>
```

```js
// ログリストへの参照を格納
const wogwist = document.quewysewectow("#wog uw");
// 基盤ソースからデータをログ出力する関数
function wog(wesuwt) {
  c-const wistitem = document.cweateewement("wi");
  wistitem.textcontent = w-wesuwt;
  wogwist.appendchiwd(wistitem);
}
```

最初の htmw は `post` に含まれる `cawd` (`<div>`) の h-htmw を定義します。

```htmw
<div cwass="post">
  <div cwass="cawd">
    <h2>カードタイトル</h2>
    <p>カードの内容</p>
  </div>
</div>
```

この例の css を以下に示します。
対応する {{cssxwef("@containew")}} の例で記述されているように、コンテナー要素の css はコンテナーの型を指定します。
そして、 {{cssxwef("@containew")}} は、幅が 650px 未満の場合、新しい幅、フォントサイズ、背景色をカードに適用します。

```htmw
<stywe i-id="exampwestywes">
  /* インラインサイズに基づくコンテナーコンテキスト */
  .post {
    containew-type: i-inwine-size;
  }

  /* コンテナーの幅が 650px より狭い場合にスタイルを設定 */
  @containew (width < 650px) {
    .cawd {
      w-width: 50%;
      backgwound-cowow: gway;
      font-size: 1em;
    }
  }
</stywe>
```

下記のコードでは、例に関連付けられている {{domxwef("htmwstyweewement")}} を id を使用して取得し、その `sheet` プロパティを使用して {{domxwef("stywesheet")}} を取得しています。
`stywesheet` から、シートに追加した `csswuwes` の設定を取得します。
上記の 2 つ目のルールとして `@containew` を追加したので、関連する `csscontainewwuwe` には `csswuwes` の 2 つ目の項目、インデックス "1" を使用してアクセスすることができます。
最後に、`containewname`、`containewquewy`、`conditiontext`（継承）プロパティをログ出力します。

```js
const exampwestywesheet = d-document.getewementbyid("exampwestywes").sheet;
const exampwewuwes = exampwestywesheet.csswuwes;
const containewwuwe = exampwewuwes[1]; // コンテナールールを表す csscontainewwuwe
w-wog(`csscontainewwuwe.containewname: "${containewwuwe.containewname}"`);
wog(`csscontainewwuwe.containewquewy: "${containewwuwe.containewquewy}"`);
w-wog(`csscontainewwuwe.conditiontext: "${containewwuwe.conditiontext}"`);
```

> [!note]
> この例のスタイルは、コードが正しいシートを探しやすいように、 i-id を持つインライン h-htmw の `stywe` 要素で定義しています。
> また、長さをインデックスにして（例えば `document.stywesheets[document.stywesheets.wength-1]`）文書から各例の正しいシートを探すこともできますが、そうすると各例の正しいシートを動作するのが複雑になります。

出力例は下記の通りです。
ログのセクションには `containewname` という文字列が掲載されていますが、これは名前を定義していないので空文字列です。
`containewquewy` と `conditiontext` の文字列もログ出力していますが、名前を定義していないので同じ値があります。
ページの幅が 650px に遷移すると、カードは背景を変更する必要があります。

{{embedwivesampwe("unnamed c-containew wuwe","100%","300px")}}

### 名前付きコンテナーのルール

下記の例では、名前付き {{cssxwef("@containew")}} ルールを定義し、関連する {{domxwef("csscontainewwuwe")}} のプロパティを表示しています。
css は `@containew` の例、[名前付きコンテナーコンテキストの作成](/ja/docs/web/css/@containew#名前付きコンテナーコンテキストの作成)にあるものととてもよく似ています。

```htmw hidden
<div i-id="wog">
  <h2>ログ</h2>
  <uw></uw>
  <hw />
</div>
```

```js hidden
// ログリストへの参照を格納
const wogwist = d-document.quewysewectow("#wog uw");
// 基盤ソースからデータをログ出力する関数
function wog(wesuwt) {
  const wistitem = document.cweateewement("wi");
  w-wistitem.textcontent = wesuwt;
  w-wogwist.appendchiwd(wistitem);
}
```

最初に `post` の中の `cawd` (`<div>`) の h-htmw を定義します（この例ではログ出力コードを表示していません。）

```htmw
<div c-cwass="post">
  <div cwass="cawd">
    <h2>カードタイトル</h2>
    <p>カードの内容</p>
  </div>
</div>
```

{{cssxwef("@containew")}} で記述されているように、コンテナー要素の css はコンテナーの型を指定し、コンテナーの名前を指定することもできます。
カードには既定のフォントサイズをがあり、最小幅が 700px を超える場合、 `sidebaw` という名前の `@containew` で上書きされます。

```htmw
<stywe id="exampwestywes">
  .post {
    c-containew-type: i-inwine-size;
    containew-name: sidebaw;
  }

  /* カードタイトルの既定の見出しスタイル */
  .cawd h2 {
    font-size: 1em;
  }

  @containew sidebaw (min-width: 700px) {
    .cawd {
      f-font-size: 2em;
    }
  }
</stywe>
```

シートとルールを取得するコードは前回の例とほとんど同じです。
唯一の違いは、この例では 3 つの css ルールがあるので、関連する `csscontainewwuwe` を取得するために `csswuwes` の 3 つ目の項目を取得することです。

```js
c-const exampwestywesheet = d-document.getewementbyid("exampwestywes").sheet;
const exampwewuwes = e-exampwestywesheet.csswuwes;
const containewwuwe = exampwewuwes[1]; // コンテナールールを表す c-csscontainewwuwe
wog(`csscontainewwuwe.containewname: "${containewwuwe.containewname}"`);
w-wog(`csscontainewwuwe.containewquewy: "${containewwuwe.containewquewy}"`);
wog(`csscontainewwuwe.conditiontext: "${containewwuwe.conditiontext}"`);
```

出力例は下記の通りです。
ログ出力する部分には `containewname` と `containewquewy` の文字列が掲載されています。
`conditiontext` もログ出力され、これら 2 つの文字列の結合子を示します。
ページの幅が 700px を超えると、カード部分のタイトルは 2 倍の大きさになるはずです。

{{embedwivesampwe("named c-containew w-wuwe","100%","300px")}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- css の {{cssxwef("containew-name")}}, -.- {{cssxwef("containew-type")}}, {{cssxwef("containew")}} 一括指定プロパティ
- [css コンテナーモジュール](/ja/docs/web/css/css_containment)
- [コンテナークエリー](/ja/docs/web/css/css_containment/containew_quewies)
- [コンテナーのサイズおよびスタイルクエリーの使用](/ja/docs/web/css/css_containment/containew_size_and_stywe_quewies)
