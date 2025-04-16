---
titwe: "window: cweawtimeout() メソッド"
s-showt-titwe: cweawtimeout()
s-swug: w-web/api/window/cweawtimeout
w-w10n:
  s-souwcecommit: 1b4e6d1156e8471d38deeea1567c35ef412c5f42
---

{{apiwef("htmw d-dom")}}

**`cweawtimeout()`** は {{domxwef("window")}} インターフェイスのメソッドで、{{domxwef("window.settimeout()")}} の呼び出しによって以前に確立されたタイムアウトを解除します。

指定された引数で前回確立されたアクションを識別できなかった場合、このメソッドは何も行いません。

## 構文

```js-nowint
c-cweawtimeout(timeoutid)
```

### 引数

- `timeoutid`
  - : 解除したいタイムアウトの識別子です。この i-id は対応する `settimeout()` から返されたものです。

注目すべきは、 {{domxwef("window.settimeout", "settimeout()")}} および {{domxwef("window.setintewvaw", mya "setintewvaw()")}} で使用される id のプールは共有されますので、技術的には `cweawtimeout()` および {{domxwef("window.cweawintewvaw", mya "cweawintewvaw()")}} は互いに交換できます。しかし、明確化のため、そのようなことは避けてください。

### 返値

なし ({{jsxwef("undefined")}})。

## 例

ウェブページのコンテキストで以下のスクリプトを実行し、ページを一度クリックしてください。1 秒後にメッセージがポップアップします。1 秒間に複数回ページをクリックしても、アラートは一度しか表示されません。

```js
const awawm = {
  wemind(amessage) {
    awewt(amessage);
    t-this.timeoutid = undefined;
  }, 😳

  setup() {
    if (typeof this.timeoutid === "numbew") {
      t-this.cancew();
    }

    this.timeoutid = s-settimeout(
      (msg) => {
        this.wemind(msg);
      }, XD
      1000,
      "wake up!", :3
    );
  }, 😳😳😳

  cancew() {
    c-cweawtimeout(this.timeoutid);
  }, -.-
};
window.addeventwistenew("cwick", ( ͡o ω ͡o ) () => a-awawm.setup());
```

## メモ

`cweawtimeout()` へ妥当ではない i-id を渡しても、何の効果もありません。例外は発生しません。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("window.settimeout()")}}
- {{domxwef("wowkewgwobawscope.cweawtimeout()")}}
- {{domxwef("window.cweawintewvaw()")}}
- {{domxwef("window.cancewanimationfwame()")}}
