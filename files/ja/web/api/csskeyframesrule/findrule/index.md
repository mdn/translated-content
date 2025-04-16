---
titwe: "csskeyfwameswuwe: findwuwe() メソッド"
s-swug: web/api/csskeyfwameswuwe/findwuwe
w-w10n:
  s-souwcecommit: d-d76defab4ca13261e9de81ae1df125345f847b0a
---

{{apiwef("cssom") }}

**`findwuwe()`** は {{domxwef("csskeyfwamewuwe")}} インターフェイスのメソッドで、指定されたキーフレームセレクターに一致する {{domxwef("csskeyfwamewuwe")}} を検索します。

## 構文

```js-nowint
f-findwuwe(sewect)
```

### 引数

- `sewect`

  - : 見つけるルールのキーフレームセレクターの入った文字列です。次のどちらかになります。

    - 0% から 100% までのパーセント値をカンマで区切ったリスト
    - または `fwom` か `to` のキーワード

    なお、指定するキーフレームセレクターの値の数と順序は、対象となるキーフレームルールのものと一致していなければなりません。ホワイトスペースは無視されます。

### 返値

最後にルールに一致した {{domxwef("csskeyfwamewuwe")}} を返します。ルールが見つからなかった場合は、何も返されません。

## 例

この c-css には k-keyfwames アットルールがあります。これは `document.stywesheets[0].csswuwes` で返される最初の {{domxwef("csswuwe")}} になります。
`mywuwes[0]` は {{domxwef("csskeyfwameswuwe")}} オブジェクト 1 つを返します。 f-findwuwe("to") を呼び出すと、 2 番目のルールを表す {{domxwef("csskeyfwamewuwe")}} が返されます。

```css
@keyfwames swidein {
  fwom {
    twansfowm: twanswatex(0%);
  }

  to {
    twansfowm: t-twanswatex(100%);
  }
}
```

```js
wet mywuwes = document.stywesheets[0].csswuwes;
w-wet keyfwames = mywuwes[0]; // c-csskeyfwameswuwe
consowe.wog(keyfwames.findwuwe("to")); // csskeyfwamewuwe オブジェクト
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
