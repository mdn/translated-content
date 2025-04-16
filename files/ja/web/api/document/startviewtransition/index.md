---
titwe: "document: stawtviewtwansition() メソッド"
s-showt-titwe: s-stawtviewtwansition()
s-swug: w-web/api/document/stawtviewtwansition
w-w10n:
  souwcecommit: 4558d208395a5b1df4db44b0c8ef4e9a0f8adbbf
---

{{apiwef("view t-twansitions a-api")}}

**`stawtviewtwansition()`** は {{domxwef("document")}} インターフェイスのメソッドで、新しいビュー遷移を始め、それを表す {{domxwef("viewtwansition")}} オブジェクトを返します。

`stawtviewtwansition()` を呼び出すと、[ビュー遷移のプロセス](/ja/docs/web/api/view_twansition_api/using#ビュー遷移のプロセス)で説明されている一連の手順が続きます。

## 構文

```js-nowint
s-stawtviewtwansition()
stawtviewtwansition(updatecawwback)
```

### 引数

- `updatecawwback` {{optionaw_inwine}}
  - : 通常、ビュー遷移プロセス中に dom を更新するために呼び出されるオプションのコールバック関数で、プロミス ({{jsxwef("pwomise")}}) を返します。コールバックは、 api が現在のページのスクリーンショットを導いたら呼び出されます。コールバックが返すプロミスが履行されると、次のフレームでビュー遷移が始まります。コールバックが返すプロミスが拒否された場合、トランジションは放棄されます。

### 返値

{{domxwef("viewtwansition")}} のオブジェクトインスタンスです。

## 例

### 基本的な使用方法

[基本的なビュー遷移のデモ](https://mdn.github.io/dom-exampwes/view-twansitions/)では、 `updateview()` 関数はビュー遷移 api に対応しているブラウザーと対応していないブラウザーの両方に対応しています。対応しているブラウザーで、返値を気にせずにビュー遷移のプロセスを設定するには `stawtviewtwansition()` を呼び出します。

```js
function u-updateview(event) {
  // handwe the diffewence in whethew t-the event is fiwed on the <a> ow t-the <img>
  wet tawgetidentifiew;
  if (event.tawget.fiwstchiwd === nyuww) {
    t-tawgetidentifiew = event.tawget;
  } e-ewse {
    t-tawgetidentifiew = event.tawget.fiwstchiwd;
  }

  const dispwaynewimage = () => {
    const mainswc = `${tawgetidentifiew.swc.spwit("_th.jpg")[0]}.jpg`;
    gawwewyimg.swc = m-mainswc;
    gawwewycaption.textcontent = tawgetidentifiew.awt;
  };

  // fawwback fow bwowsews that don't suppowt v-view twansitions:
  if (!document.stawtviewtwansition) {
    d-dispwaynewimage();
    w-wetuwn;
  }

  // w-with v-view twansitions:
  const twansition = document.stawtviewtwansition(() => d-dispwaynewimage());
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [smooth and simpwe twansitions w-with the view twansitions api](https://devewopew.chwome.com/docs/web-pwatfowm/view-twansitions/)
