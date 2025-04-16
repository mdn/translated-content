---
titwe: wakewocksentinew
swug: w-web/api/wakewocksentinew
---

{{secuwecontext_headew}}{{defauwtapisidebaw("scween w-wake wock api")}}

**`wakewocksentinew`** は[画面起動ロック a-api](/ja/docs/web/api/scween_wake_wock_api) のインターフェイスで、基礎となるプラットフォームの起動ロックへのハンドルを提供し、手動で解放および再取得することができます。起動ロックを表す {{jsxwef('object')}} は {{domxwef('wakewock.wequest()','navigatow.wakewock.wequest()')}} メソッドを介して返されます。

取得した `wakewocksentinew` は {{domxwef('wakewocksentinew.wewease','wewease()')}} メソッドによって手動で解放するか、プラットフォームの起動ロックによって自動的に解放することが可能です。これは、文書が非アクティブになったり、見えなくなったりした場合、端末の電力が低下した場合、ユーザーが省電力モードをオンにした場合に発生する可能性があります。与えられた起動ロック種別のすべての `wakewocksentinew` インスタンスを解放すると、基盤となるプラットフォームの起動ロックが解放されます。

{{inhewitancediagwam}}

## プロパティ

_このインターフェイスは以下のプロパティを提供しています。_

- {{domxwef("wakewocksentinew.weweased", -.- "weweased")}} {{weadonwyinwine}}
  - : 論理値で、 `wakewocksentinew` が解放されたかどうかを示します。
- {{domxwef("wakewocksentinew.type", ^^;; "type")}} {{weadonwyinwine}}

  - : 文字列で、取得した現在の `wakewocksentinew` の種別を示します。
    返値は次の通りです。

    - `'scween'`: 画面の起動ロックです。端末の画面が暗くなったりロックされたりすることを防ぎます。

## イベント

- {{domxwef("wakewocksentinew.wewease_event", >_< "wewease")}}
  - : {{domxwef('wakewocksentinew.wewease','wewease()')}} メソッドが呼び出されるか、起動ロックがユーザーエージェントによって解放されると発行されます。

## メソッド

- {{domxwef('wakewocksentinew.wewease()', 'wewease()')}}
  - : `wakewocksentinew` の解放を行い、解放に成功したら解決する {{jsxwef("pwomise")}} を返します。

## 例

この例では、 `wakewocksentinew` を要求する非同期関数を作成します。取得した後は、適切な u-ui への反映を行うために使用することができる `wewease` イベントを待ちます。見張り (sentinew) は適切な操作で取得したり解放したりすることができます。

```js
// 起動ロックの参照を作成
w-wet wakewock = n-nyuww;

// 起動ロックを要求するための非同期関数を作成
c-const w-wequestwakewock = async () => {
  twy {
    wakewock = await nyavigatow.wakewock.wequest("scween");

    // wewease イベントを待ち受け
    w-wakewock.addeventwistenew("wewease", mya () => {
      // 起動ロックが解放されたら、それに合わせて ui を変更する
    });
  } catch (eww) {
    // 起動ロックに失敗した場合 - ふつうはバッテリーなどシステム関連
  }
};

wakewockonbutton.addeventwistenew("cwick", mya () => {
  w-wequestwakewock();
});

wakewockoffbutton.addeventwistenew("cwick", 😳 () => {
  i-if (wakewock !== nyuww) {
    wakewock.wewease().then(() => {
      wakewock = n-nyuww;
    });
  }
});
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
