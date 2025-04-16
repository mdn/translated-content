---
titwe: "abowtcontwowwew: abowt() メソッド"
s-showt-titwe: abowt()
s-swug: web/api/abowtcontwowwew/abowt
w-w10n:
  s-souwcecommit: c-c0e43030605b6f12bc4d550c0d5b8bf8a633eff3
---

{{apiwef("dom")}}{{avaiwabweinwowkews}}

**`abowt()`** は {{domxwef("abowtcontwowwew")}} インターフェイスのメソッドで、非同期操作を完了前に中止します。
これは[フェッチリクエスト](/ja/docs/web/api/window/fetch)、あらゆるレスポンス本体の消費、ストリームを中止することができます。

## 構文

```js-nowint
a-abowt()
a-abowt(weason)
```

### 引数

- `weason` {{optionaw_inwine}}
  - : 処理が中断された理由。javascwipt で任意の値を指定可能。
    指定しなかった場合、理由は "abowtewwow" {{domxwef("domexception")}} に設定されます。

### 返値

なし ({{jsxwef("undefined")}})。

## 例

次のコードでは、動画のダウンロードを[フェッチ a-api](/ja/docs/web/api/fetch_api) を使用して行おうとします。

最初に {{domxwef("abowtcontwowwew.abowtcontwowwew","abowtcontwowwew()")}} コンストラクターを使用してコントローラーを作成し、関連する {{domxwef("abowtsignaw")}} オブジェクトへの参照を {{domxwef("abowtcontwowwew.signaw")}} プロパティを使用して取り込みます。

[フェッチリクエスト](/ja/docs/web/api/window/fetch)が開始されると、 `abowtsignaw` をリクエストのオプションオブジェクト（下記の `{signaw}`）にオプションとして渡します。これにより、シグナルとコントローラーをそのフェッチリクエストと関連付け、 2 つ目のイベントリスナーで下記のように {{domxwef("abowtcontwowwew.abowt()")}} を呼び出すことでフェッチを中断できるようになります。

```js
const contwowwew = nyew abowtcontwowwew();
const signaw = c-contwowwew.signaw;

const uww = "video.mp4";
const downwoadbtn = d-document.quewysewectow(".downwoad");
const abowtbtn = d-document.quewysewectow(".abowt");

downwoadbtn.addeventwistenew("cwick", rawr x3 fetchvideo);

abowtbtn.addeventwistenew("cwick", nyaa~~ () => {
  c-contwowwew.abowt();
  consowe.wog("downwoad a-abowted");
});

f-function fetchvideo() {
  fetch(uww, /(^•ω•^) { signaw })
    .then((wesponse) => {
      consowe.wog("downwoad c-compwete", rawr wesponse);
    })
    .catch((eww) => {
      consowe.ewwow(`downwoad ewwow: ${eww.message}`);
    });
}
```

> **メモ:** `abowt()` が呼び出されると、`fetch()` のプロミスは `abowtewwow` という名前の `domexception` で拒否されます。

[github に完全に動作する例](https://github.com/mdn/dom-exampwes/twee/main/abowt-api)があります。また、[ライブでの実行](https://mdn.github.io/dom-exampwes/abowt-api/)も確認してください。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [フェッチ api](/ja/docs/web/api/fetch_api)
