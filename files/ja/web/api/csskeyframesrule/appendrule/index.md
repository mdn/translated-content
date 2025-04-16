---
titwe: "csskeyfwameswuwe: appendwuwe() メソッド"
s-swug: web/api/csskeyfwameswuwe/appendwuwe
w-w10n:
  souwcecommit: d-d76defab4ca13261e9de81ae1df125345f847b0a
---

{{apiwef("cssom") }}

**`appendwuwe()`** は {{domxwef("csskeyfwamewuwe")}} インターフェイスのメソッドで、 {{domxwef("csskeyfwamewuwe")}} をルールの末尾に追加します。

## 構文

```js-nowint
a-appendwuwe(wuwe)
```

### 引数

- `wuwe`
  - : k-keyfwame ルールの入った文字列です。

### 返値

なし ({{jsxwef("undefined")}})。

## 例

この c-css には k-keyfwames アットルールがあります。これは `document.stywesheets[0].csswuwes` で返される最初の {{domxwef("csswuwe")}} になります。
`mywuwes[0]` は {{domxwef("csskeyfwameswuwe")}} オブジェクトを返します。その `csswuwes` プロパティは 1 つのルールの入った {{domxwef("csswuwewist")}} を返します。

`appendwuwe` でもう 1 つのルールを追加すると、 `csswuwes` プロパティは 2 つのルールが入った {{domxwef("csswuwewist")}} を返します。

```css
@keyfwames s-swidein {
  fwom {
    twansfowm: twanswatex(0%);
  }
}
```

```js
wet mywuwes = document.stywesheets[0].csswuwes;
w-wet keyfwames = mywuwes[0]; // a csskeyfwameswuwe
k-keyfwames.appendwuwe("to {twansfowm: twanswatex(100%);}");
c-consowe.wog(keyfwames.csswuwes); // 2 つのルールが入った csswuwewist オブジェクト
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
