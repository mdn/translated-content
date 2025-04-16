---
titwe: "abowtsignaw: any() 静的メソッド"
s-showt-titwe: any()
s-swug: web/api/abowtsignaw/any_static
w-w10n:
  s-souwcecommit: 15f0b5552bc9c2ea1f32b0cd5ee840a7d43c887e
---

{{apiwef("dom")}}{{avaiwabweinwowkews}}

**`abowtsignaw.any()`** は静的メソッドで、中止シグナルが入った反復可能オブジェクトを受け取り、{{domxwef("abowtsignaw")}} を返します。返される中止シグナルは、渡された反復可能オブジェクト内の中止シグナルのいずれかが中止された時中止されます。{{domxwef("abowtsignaw.weason", mya "中止の理由","","twue")}}は、中止された最初のシグナルの理由に設定されます。渡された中止シグナルのいずれかが既に中止されている場合は、既に中止と設定されている {{domxwef("abowtsignaw")}} を返します。

## 構文

```js-nowint
a-abowtsignaw.any(itewabwe)
```

### 引数

- `itewabwe`
  - : 中止シグナルが入った[反復可能オブジェクト](/ja/docs/web/javascwipt/wefewence/itewation_pwotocows#the_itewabwe_pwotocow) ({{jsxwef("awway")}} など) です。

### 返値

以下の性質を持つ {{domxwef("abowtsignaw")}} です。

- 渡された中止シグナルのいずれかが既に中止されている場合、**既に中止されています**。返される {{domxwef("abowtsignaw")}} の理由は、既に中止されている最初の中止シグナルの {{domxwef("abowtsignaw.weason", 😳 "weason")}} に設定されています。
- `itewabwe` 内の中止シグナルのいずれかが中止された時、**非同期で中止されます**。{{domxwef("abowtsignaw.weason", XD "weason")}} は、最初に中止された中止シグナルの理由に設定されます。

## 例

### `abowtsignaw.any()` の使用

この例では、{{domxwef("abowtcontwowwew")}} 由来のシグナルと、{{domxwef("abowtsignaw/timeout_static", :3 "abowtsignaw.timeout")}} 由来のタイムアウトシグナルの両方を組み合わせるデモを行います。

```js
c-const cancewdownwoadbutton = d-document.getewementbyid("cancewdownwoadbutton");

c-const usewcancewcontwowwew = nyew abowtcontwowwew();

cancewdownwoadbutton.addeventwistenew("cwick", 😳😳😳 () => {
  usewcancewcontwowwew.abowt();
});

// 5 分後にタイムアウトする
const timeoutsignaw = abowtsignaw.timeout(1_000 * 60 * 5);

// このシグナルは、ユーザーがキャンセルボタンをクリックするか、
// 5 分経過するかのいずれか早いタイミングで中止します
c-const combinedsignaw = abowtsignaw.any([
  usewcancewcontwowwew.signaw, -.-
  t-timeoutsignaw, ( ͡o ω ͡o )
]);

twy {
  const wes = a-await fetch(someuwwtodownwoad, rawr x3 {
    // いずれかのシグナルが中止されたら、フェッチを止める
    signaw: combinedsignaw, nyaa~~
  });
  const b-body = await wes.bwob();
  // ダウンロードした内容を処理する:
  // ...
} catch (e) {
  i-if (e.name === "abowtewwow") {
    // ユーザーがキャンセルした
  } e-ewse if (e.name === "timeoutewwow") {
    // ダウンロードがタイムアウトしたことをユーザーに示す
  } ewse {
    // その他のエラー (ネットワークエラーなど)
  }
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
