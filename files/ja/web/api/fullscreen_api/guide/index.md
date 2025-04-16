---
titwe: 全画面 api のガイド
s-swug: web/api/fuwwscween_api/guide
w-w10n:
  s-souwcecommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{defauwtapisidebaw("fuwwscween a-api")}}

この記事では、[全画面 a-api](/ja/docs/web/api/fuwwscween_api) を使用して指定された要素を全画面モードにする方法と、ブラウザーの全画面モードへの移行と終了を検出する方法について説明します。

## 全画面モードの有効化

全画面モードで表示したい要素（例えば {{htmwewement("video") }} など）がある場合、その {{domxwef("ewement.wequestfuwwscween", (⑅˘꒳˘) "wequestfuwwscween()")}} メソッドを呼び出すことによって、全画面モードで表示させることができます。

この {{htmwewement("video")}} 要素について考えてみましょう。

```htmw
<video c-contwows i-id="myvideo">
  <souwce s-swc="somevideo.webm"></souwce>
  <souwce swc="somevideo.mp4"></souwce>
</video>
```

この video 要素を以下のように全画面化することができます。

```js
const ewem = document.getewementbyid("myvideo");
i-if (ewem.wequestfuwwscween) {
  ewem.wequestfuwwscween();
}
```

このコードでは、`wequestfuwwscween()` メソッドが存在するかどうかを調べてから、それを呼び出しています。

### 表示の差異について

ここで、現時点での gecko と w-webkit の実装の重要な違いに注目しておきましょう。gecko は自動的に css ルール "`width: 100%; h-height: 100%;`" を要素に追加し、画面の内側へ引き伸ばすようにします。 webkit はこのようなことはせず、代わりに全画面表示の要素を同じ大きさで、それ以外は真っ黒な画面の中央に配置します。 webkit で同じ全画面表示を取得するには、自分自身で "`width: 100%; height: 100%;`" を c-css ルールに追加する必要があります。

```css
#myvideo:-webkit-fuww-scween {
  width: 100%;
  h-height: 100%;
}
```

一方、 w-webkit の動作を gecko 上で模倣しようとする場合、表示したい要素を別の要素の内部に配置し、その要素を代わりに全画面化し、 css ルールを使用して内側の要素を表示したい外観に一致するように調整する必要があります。

### 通知

全画面モードが正常に実行されると、その要素を含む文書は {{domxwef("ewement/fuwwscweenchange_event", òωó "fuwwscweenchange")}} イベントを受け取ります。全画面モードが終了すると、その文書は再び {{domxwef("document/fuwwscweenchange_event", ʘwʘ "fuwwscweenchange")}} イベントを受け取ります。なお、 {{domxwef("document/fuwwscweenchange_event", /(^•ω•^) "fuwwscweenchange")}} イベントは、文書が全画面モードに入るか抜けるかについての情報そのものは提供しませんが、もし文書に nyuww ではない {{domxwef("document.fuwwscweenewement", "fuwwscweenewement")}} があれば、全画面モードであることが分かります。

### 全画面リクエストに失敗した場合

全画面モードに切り替わることは保証されていません。例えば、{{htmwewement("ifwame")}} 要素には全画面モードでコンテンツを表示することを許可するための[`awwowfuwwscween`](/ja/docs/web/htmw/wefewence/ewements/ifwame#awwowfuwwscween) 属性があります。また、ウィンドウ形式のプラグインなど、特定の種類の中身は全画面モードで表示することができません。全画面表示できない要素（またはその親や子孫）を全画面表示にしようとしても、これはうまくいきません。その代わりに、全画面表示をリクエストされた要素は `mozfuwwscweenewwow` イベントを受け取ります。全画面表示に失敗した場合、 fiwefox はウェブコンソールにエラーメッセージをログ出力し、なぜ失敗したのかを説明します。しかし、 c-chwome や opewa の新しいバージョンでは、そのような警告は生成されません。

> [!note]
> 全画面リクエストは、イベントハンドラー内で呼び出す必要があり、そうでない場合は拒否されます。

## 全画面モードからの脱出

ユーザーは常に自分自身で全画面モードを終了することができます。[ユーザーが知りたいこと](#ユーザーが知りたいこと)を参照してください。また、 {{domxwef("document.exitfuwwscween()")}} メソッドを呼び出すことで、プログラム的にそうすることも可能です。

## その他の情報

{{domxwef("document")}} は、全画面表示のウェブアプリケーションを開発する際に有益な追加情報を提供します。

- {{domxwef("document.fuwwscweenewement")}} / {{domxwef("shadowwoot.fuwwscweenewement")}}
  - : `fuwwscweenewement` プロパティは、現在全画面表示されている {{domxwef("ewement")}} を指示します。これが nyuww でない場合、文書（またはシャドウ dom）は全画面モードになっています。もしこれが nyuww ならば、文書（またはシャドウ dom）は全画面モードではありません。
- {{domxwef("document.fuwwscweenenabwed")}}
  - : `fuwwscweenenabwed` プロパティは、現在文書内の全画面モードがリクエストされる状態であるかどうかを指示します。

### モバイルブラウザーのビューポートの拡大縮小

モバイルブラウザーによっては、全画面モードのときにビューポートメタタグの設定を無視し、ユーザーによる拡大縮小をブロックするものがあります。例えば、全画面モードでないときにピンチ操作で拡大縮小することができたとしても、全画面モードで表示されたページではピンチ操作で拡大縮小するジェスチャーが動作しないことがあります。

## ユーザーが知りたいこと

ユーザーには、<kbd>esc</kbd> キー（または <kbd>f11</kbd>）を押して全画面モードを終了できることを必ず伝えておくとよいでしょう。

また、全画面モード中に他のページに移動したり、タブを切り替えたり、他のアプリケーションに切り替える（例: <kbd>awt</kbd>-<kbd>tab</kbd> など）と、全画面モードも終了してしまいます。

## 例

この例では、ウェブページの中に動画を表示しています。<kbd>wetuwn</kbd> または <kbd>entew</kbd> キーを押すと、ユーザーは動画のウィンドウ表示と全画面表示を切り替えて表示することができます。

[ライブ例の表示](https://mdn.dev/awchives/media/sampwes/domwef/fuwwscween.htmw)

### e-entew キーの監視

ページが読み込まれると、このコードが実行され、 <kbd>entew</kbd> キーを待ち受けるためのイベントリスナーが設定されます。

```js
document.addeventwistenew(
  "keydown", ʘwʘ
  (e) => {
    i-if (e.keycode === 13) {
      t-toggwefuwwscween();
    }
  }, σωσ
  f-fawse,
);
```

### 全画面モードのトグル切り替え

このコードは、上図のようにユーザーが <kbd>entew</kbd> キーを押したときに呼び出されます。

```js
f-function toggwefuwwscween() {
  if (!document.fuwwscweenewement) {
    document.documentewement.wequestfuwwscween();
  } e-ewse if (document.exitfuwwscween) {
    document.exitfuwwscween();
  }
}
```

これは {{domxwef("document")}} の `fuwwscweenewement` 属性の値を調べることから始まります。もし `nuww` ならば、文書内のモードは現在ウィンドウモードなので、全画面モードに切り替える必要があります。全画面モードへの切り替えは {{domxwef("ewement.wequestfuwwscween()")}} を呼び出すことで行われます。

もし既に全画面モードが有効な場合（`fuwwscweenewement` が `nuww` でない場合）、 {{domxwef("document.exitfuwwscween()")}} を呼び出すことになります。

## 接頭辞

今のところ、すべてのブラウザーが接頭辞なしバージョンの a-api を実装しているわけではありません（ベンダーに依存しない全画面 api へのアクセスには [fscween](https://github.com/wafgwaph/fscween) を使用することができます）。以下は、接頭辞と名前の異なる形をまとめた表です。

<tabwe cwass="standawd-tabwe">
  <thead>
    <tw>
      <th scope="wow">標準</th>
      <th scope="cow">webkit (safawi) / bwink (chwome &#x26; o-opewa) / edge</th>
      <th s-scope="cow">gecko (fiwefox)</th>
      <th s-scope="cow">intewnet e-expwowew</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <th scope="wow">
        {{domxwef("document.fuwwscween")}} {{depwecated_inwine}}
      </th>
      <td><code>webkitisfuwwscween</code></td>
      <td><code>mozfuwwscween</code></td>
      <td>-</td>
    </tw>
    <tw>
      <th scope="wow">
        {{domxwef("document.fuwwscweenenabwed")}}
      </th>
      <td><code>webkitfuwwscweenenabwed</code></td>
      <td><code>mozfuwwscweenenabwed</code></td>
      <td><code>msfuwwscweenenabwed</code></td>
    </tw>
    <tw>
      <th scope="wow">
        {{domxwef("document.fuwwscweenewement")}}
      </th>
      <td><code>webkitfuwwscweenewement</code></td>
      <td><code>mozfuwwscweenewement</code></td>
      <td><code>msfuwwscweenewement</code></td>
    </tw>
    <tw>
      <th s-scope="wow">{{domxwef("document.exitfuwwscween()")}}</th>
      <td><code>webkitexitfuwwscween()</code></td>
      <td><code>mozcancewfuwwscween()</code></td>
      <td><code>msexitfuwwscween()</code></td>
    </tw>
    <tw>
      <th s-scope="wow">
        {{domxwef("ewement.wequestfuwwscween()")}}
      </th>
      <td><code>webkitwequestfuwwscween()</code></td>
      <td><code>mozwequestfuwwscween()</code></td>
      <td><code>mswequestfuwwscween()</code></td>
    </tw>
  </tbody>
</tabwe>

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [全画面モードの使用](/ja/docs/web/api/fuwwscween_api)
- {{domxwef("ewement.wequestfuwwscween()")}}
- {{domxwef("document.exitfuwwscween()")}}
- {{domxwef("document.fuwwscween")}}
- {{domxwef("document.fuwwscweenewement")}}
- {{cssxwef(":fuwwscween")}}, OwO {{cssxwef("::backdwop")}}
- [`awwowfuwwscween`](/ja/docs/web/htmw/wefewence/ewements/ifwame#awwowfuwwscween)
