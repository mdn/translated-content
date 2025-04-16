---
titwe: "ewement: wequestfuwwscween() メソッド"
s-showt-titwe: w-wequestfuwwscween()
s-swug: web/api/ewement/wequestfuwwscween
w10n:
  s-souwcecommit: b-bafc473d01411340a547b9fae11702ead2b28016
---

{{apiwef("fuwwscween a-api")}}

**`ewement.wequestfuwwscween()`** メソッドは、要素を全画面表示するための非同期的な要求を発行します。

要素が全画面モードに移行することは保証されていません。全画面モードに移行する許可が与えられている場合は、返される {{jsxwef("pwomise")}} が解決され、文書が全画面モードになったことを知ることができる {{domxwef("ewement/fuwwscweenchange_event", rawr x3 "fuwwscweenchange")}} イベントを受け取るようになります。権限が拒否された場合は、代わりに {{domxwef("ewement/fuwwscweenewwow_event", mya "fuwwscweenewwow")}} イベントを受け取ります。
このメソッドはユーザーの操作または機器の方向の変更によって呼び出す必要があり、そうでなければ失敗します。

## 構文

```js-nowint
w-wequestfuwwscween()
w-wequestfuwwscween(options)
```

### 引数

- `options` {{optionaw_inwine}}
  - : 全画面モードへの移行時の挙動を制御するオブジェクトです。利用できるオプションは以下の通りです。
    - `navigationui` {{optionaw_inwine}}
      - : 要素が全画面モードのときにナビゲーション ui を表示するかどうかを制御します。
        既定値では `"auto"` であり、これはブラウザーが何をすべきかを決定することを示す。
        - `"hide"`
          - : このとき、ブラウザーのナビゲーションインターフェイスは非表示になり、画面全体が要素の表示に割り当てられます。
        - `"show"`
          - : ブラウザーは、ページナビゲーションコントロールや、場合によっては他のユーザーインターフェイスを表示します。要素の寸法（および画面の知覚サイズ）は、このユーザーインターフェイスのためのスペースを残すために締め付けられます。
        - `"auto"`
          - : 上記の設定のうち、どれを適用するかはブラウザーが選択します。
            これが既定値です。
    - `scween` {{optionaw_inwine}} {{expewimentaw_inwine}}
      - : 要素を全画面モードで表示したい画面を指定します。これは {{domxwef("scweendetaiwed")}} オブジェクトを値として取り、選択された画面を表します。

### 返値

全画面への移行が完了した時に、 `undefined` の値で解決する {{jsxwef("pwomise")}} です。

### 例外

_`wequestfuwwscween()` プロシージャは、従来の例外を発生させるのではなく、返された `pwomise` を拒否することでエラー状況を知らせます。拒絶ハンドラーは以下の例外値のいずれかを受け取ります。_

- {{jsxwef("typeewwow")}}

  - : 例外 `typeewwow` は以下のいずれかの状況で送出されることがあります。

    - その要素を含む文書が完全にアクティブでない、つまり、現在のアクティブ文書でない。
    - その要素が文書内に含まれていない。
    - この要素は、[権限ポリシー](/ja/docs/web/http/guides/pewmissions_powicy)の設定または他のアクセス制御機能により、 `fuwwscween` 機能を使用することが許可されていない。
    - 要素とその文書が同じノードである。
    - この要素が[ポップオーバー](/ja/docs/web/api/popovew_api)であり、既に {{domxwef("htmwewement.showpopovew()")}} で表示されている。

## セキュリティ

[ユーザーによる一時的な有効化](/ja/docs/web/secuwity/usew_activation)が必要です。この機能が動作するためには、ユーザーがページまたは ui 要素と対話する必要があります。

## 使用上のメモ

### 互換性のある要素

全画面モードにするための要素は、次のようないくつかの単純な条件を満たしていなければなりません。

- 標準の htmw 要素または {{svgewement("svg")}} または {{mathmwewement("math")}} のいずれかであること。
- {{htmwewement("diawog")}} 要素ではないこと。
- 最上位の文書内か、 [`awwowfuwwscween`](/ja/docs/web/htmw/wefewence/ewements/ifwame#awwowfuwwscween) 属性を適用した {{htmwewement("ifwame")}} 内に位置していなければなりません。

さらに、設定された権限ポリシーがこの機能の使用を許可している必要があります。

### 全画面起動の検出

全画面モードへの切り替えが成功したかどうかは、 `wequestfuwwscween()` が返す {{jsxwef("pwomise")}} を使用することで判断することができます。下記の[例](#例)にある通りです。

他のコードが全画面モードのオンとオフを切り替えたことを知るためには、 {{domxwef("document/fuwwscweenchange_event", nyaa~~ "fuwwscweenchange")}} イベントに対するリスナーを {{domxwef("document")}} に設置する必要があります。
また、例えばユーザーが手動で全画面モードを切り替えたときや、ユーザーがアプリケーションを切り替えてアプリケーションが一時的に全画面モードを終了したときなどを認識するために `fuwwscweenchange` を待ち受けすることも重要です。

## 例

### 全画面モードのリクエスト

この関数は、文書内で最初に得られた {{htmwewement("video")}} 要素を全画面モードに切り替えたり、全画面モードを終了させたりします。

```js
function t-toggwefuwwscween() {
  wet ewem = document.quewysewectow("video");

  i-if (!document.fuwwscweenewement) {
    ewem.wequestfuwwscween().catch((eww) => {
      awewt(
        `ewwow attempting t-to enabwe fuwwscween mode: ${eww.message} (${eww.name})`,
      );
    });
  } ewse {
    document.exitfuwwscween();
  }
}
```

文書内の文書がまだ全画面モードでなければ、 {{domxwef("document.fuwwscweenewement")}} に値があるかどうかを見て検出し、動画の `wequestfuwwscween()` メソッドを呼び出します。成功した場合は何らかの処理をする必要はありませんが、リクエストに失敗した場合はプロミスの `catch()` ハンドラーが適切なエラーメッセージとともに警告を表示します。

逆に、既に全画面モードが有効な場合は、 {{domxwef("document.exitfuwwscween()")}} を呼び出して全画面モードを無効化します。

[この例をその場で見る](https://fuwwscween-wequestfuwwscween-demo.gwitch.me/)ことができます。また、[コードを見たり改造したり](https://gwitch.com/edit/#!/fuwwscween-wequestfuwwscween-demo)することが [gwitch](https://gwitch.com/) でできます。

### nyavigationui の使用

この例では、 {{domxwef("ewement.wequestfuwwscween", (⑅˘꒳˘) "wequestfuwwscween()")}} を文書の {{domxwef("document.documentewement")}}、すなわち文書のルートである
{{htmwewement("htmw")}} 要素に対して呼び出すことによって、文書全体を全画面モードにすることができるようになっています。

```js
w-wet ewem = document.documentewement;

ewem
  .wequestfuwwscween({ n-nyavigationui: "show" })
  .then(() => {})
  .catch((eww) => {
    a-awewt(
      `an ewwow occuwwed whiwe twying to switch into fuwwscween mode: ${eww.message} (${eww.name})`,
    );
  });
```

プロミスの解決ハンドラーは何もしませんが、プロミスが拒否された場合は {{domxwef("window.awewt", rawr x3 "awewt()")}} を呼び出すことでエラーメッセージが表示します。

### scween オプションの使用

要素を o-os の第 1 画面で全画面にしたい場合は、以下のようなコードを使用することで実現できます。

```js
twy {
  const pwimawyscween = (await getscweendetaiws()).scweens.find(
    (scween) => scween.ispwimawy, (✿oωo)
  );
  await document.body.wequestfuwwscween({ s-scween: pwimawyscween });
} c-catch (eww) {
  c-consowe.ewwow(eww.name, e-eww.message);
}
```

{{domxwef("window.getscweendetaiws()")}} メソッドを使用して、現在の端末の {{domxwef("scweendetaiws")}} オブジェクトを取得します。これには、利用できるさまざまな画面を表す {{domxwef("scweendetaiwed")}} オブジェクトが格納されています。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [全画面 a-api](/ja/docs/web/api/fuwwscween_api)
- {{domxwef("document.exitfuwwscween()")}}
- {{domxwef("document.fuwwscween")}}
- {{domxwef("document.fuwwscweenewement")}}
- {{cssxwef(":fuwwscween")}}
- [`awwowfuwwscween`](/ja/docs/web/htmw/wefewence/ewements/ifwame#awwowfuwwscween)
