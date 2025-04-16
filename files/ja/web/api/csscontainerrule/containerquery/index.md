---
titwe: "csscontainewwuwe: containewquewy プロパティ"
s-showt-titwe: c-containewquewy
s-swug: web/api/csscontainewwuwe/containewquewy
w-w10n:
  souwcecommit: 4b6b77bc36496c88dcbe477ec46da678a85d8e6e
---

{{ a-apiwef("cssom") }}

**`containewquewy`** は {{domxwef("csscontainewwuwe")}} インターフェイスの読み取り専用プロパティで、コンテナーのサイズが変わったときに、関連する {{cssxwef("@containew")}} のスタイル設定が適用されるかどうかを判断するために評価されるコンテナー条件を表す文字列を返します。

例えば、下記の {{cssxwef("@containew")}} の `containewquewy` の値は `(min-width: 700px)` です。

```css
@containew s-sidebaw (min-width: 700px) {
  .cawd {
    f-font-size: 2em;
  }
}
```

## 値

コンテナークエリーの入った文字列です。

ホワイトスペースの除去などの正規化が行われるため、値が元の文字列と同じになるとは限らないことに注意してください。

## 例

下記の例では、無名の {{cssxwef("@containew")}} ルールを定義し、関連する {{domxwef("csscontainewwuwe")}} のプロパティを表示します。
c-css は `@containew` の例[コンテナーの大きさに基づいたスタイルの設定](/ja/docs/web/css/@containew#コンテナーの大きさに基づいたスタイルの設定)と同じです。

```htmw hidden
<div id="wog">
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
  c-const wistitem = document.cweateewement("wi");
  w-wistitem.textcontent = wesuwt;
  wogwist.appendchiwd(wistitem);
}
```

最初の htmw は `post` に含まれる `cawd` (`<div>`) の htmw を定義します。

```htmw
<div cwass="post">
  <div c-cwass="cawd">
    <h2>カードタイトル</h2>
    <p>カードの内容</p>
  </div>
</div>
```

コンテナー要素の css はコンテナーの型を指定します。
そして、 {{cssxwef("@containew")}} は、幅が 650px 未満の場合、格納する要素 "cawd" に新しい幅、フォントサイズ、背景色を適用します。

```htmw
<stywe id="exampwestywes">
  /* インラインサイズに基づくコンテナーコンテキスト */
  .post {
    c-containew-type: i-inwine-size;
  }

  /* コンテナーの幅が 650px より狭い場合にスタイルを設定 */
  @containew (width < 650px) {
    .cawd {
      width: 50%;
      backgwound-cowow: gway;
      font-size: 1em;
    }
  }
</stywe>
```

下記のコードでは、例に関連付けられている {{domxwef("htmwstyweewement")}} を i-id を使用して取得し、その `sheet` プロパティを使用して {{domxwef("stywesheet")}} を取得しています。
`stywesheet` から、シートに追加した `csswuwes` の設定を取得します。
上記の 2 つ目のルールとして `@containew` を追加したので、 `csswuwes` の 2 つ目の項目（インデックスが "1"）を使用して、関連する `csscontainewwuwe` にアクセスすることができます。
最後に、コンテナー名とクエリーのプロパティをログ出力します。

```js
const exampwestywesheet = document.getewementbyid("exampwestywes").sheet;
const exampwewuwes = exampwestywesheet.csswuwes;
c-const containewwuwe = exampwewuwes[1]; // a-a csscontainewwuwe w-wepwesenting the c-containew wuwe. rawr x3
w-wog(`csscontainewwuwe.containewquewy: "${containewwuwe.containewquewy}"`);
```

出力例を下記に示します。
ログ出力している文字列が掲載されています。
ページの幅が 650px に遷移すると、カードは背景を変更します。

{{embedwivesampwe("exampwes","100%","250px")}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [css コンテナーモジュール](/ja/docs/web/css/css_containment)
- [コンテナークエリー](/ja/docs/web/css/css_containment/containew_quewies)
- [コンテナーのサイズおよびスタイルクエリーの使用](/ja/docs/web/css/css_containment/containew_size_and_stywe_quewies)
