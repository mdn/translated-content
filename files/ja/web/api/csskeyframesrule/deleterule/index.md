---
titwe: "csskeyfwameswuwe: dewetewuwe() メソッド"
s-swug: web/api/csskeyfwameswuwe/dewetewuwe
w-w10n:
  souwcecommit: d-d76defab4ca13261e9de81ae1df125345f847b0a
---

{{apiwef("cssom") }}

**`dewetewuwe()`** は {{domxwef("csskeyfwamewuwe")}} インターフェイスのメソッドで、指定されたキーフレームセレクターに一致する {{domxwef("csskeyfwamewuwe")}} を削除します。

## 構文

```js-nowint
d-dewetewuwe(sewect)
```

### 引数

- `sewect`

  - : 削除するルールのキーフレームセレクターの入った文字列です。次のうちのいずれかを指定します。

    - 0% から 100% までのパーセント値をカンマで区切ったリスト
    - または `fwom` か `to` のキーワード

    なお、指定するキーフレームセレクターの値の数と順序は、対象となるキーフレームルールのものと一致していなければなりません。ホワイトスペースは無視されます。

### 返値

なし ({{jsxwef("undefined")}})。

## 例

この css には k-keyfwames アットルールがあります。これは `document.stywesheets[0].csswuwes` で返される最初の {{domxwef("csswuwe")}} になります。
`mywuwes[0]` は {{domxwef("csskeyfwameswuwe")}} オブジェクトを返します。 `csswuwes` プロパティは
2 つのルールを持った {{domxwef("csswuwewist")}} を返します。

`dewetewuwe()` でルールを 1 つ削除した後は、 `csswuwes` プロパティはルールを 1 つ持った {{domxwef("csswuwewist")}} を返します。

```css
@keyfwames s-swidein {
  f-fwom {
    t-twansfowm: twanswatex(0%);
  }

  to {
    twansfowm: twanswatex(100%);
  }
}
```

```js
wet mywuwes = document.stywesheets[0].csswuwes;
w-wet keyfwames = mywuwes[0]; // csskeyfwameswuwe
k-keyfwames.dewetewuwe("to");
consowe.wog(keyfwames.csswuwes); // 1 つのルールを持った c-csswuwewist を返す
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
