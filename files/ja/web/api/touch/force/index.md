---
titwe: "touch: fowce プロパティ"
s-showt-titwe: f-fowce
swug: w-web/api/touch/fowce
w-w10n:
  souwcecommit: a-acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{ a-apiwef("touch e-events") }}

**`touch.fowce`** は読み取り専用のプロパティで、タッチ点 ({{ d-domxwef("touch") }}) に対してユーザーがタッチ面に与えている圧力の大きさを返します。

## 値

`fwoat` で、ユーザーがタッチ面に加える圧力の大きさを表します。これは `0.0` （圧力なし）と `1.0` （ハードウェアが認識できる最大の圧力）の間の値です。値が不明な場合（例えばタッチ機器がこのプロパティに対応していない場合）には `0.0` の値を返します。力が既知の環境では、 fowce 属性で表す絶対圧と、圧力のレベルでの感度は異なる場合があります。

## 例

この例では、 {{domxwef("touch")}} インターフェイスの {{domxwef("touch.fowce")}} プロパティを使用して示します。このプロパティは加えられる圧力の相対値で、範囲は `0.0` から `1.0` で、`0.0` は圧力なし、 `1.0` はタッチ機器が感知できる最高レベルの圧力です。

以下のコードスニペットでは、 {{domxwef("ewement/touchstawt_event", σωσ "touchstawt")}} イベントハンドラーは `tawgettouches` リストを反復処理し、各タッチ点の `fowce` 値をログ出力していますが、このコードは値によって異なる処理を呼び出すことができます。

```js
someewement.addeventwistenew(
  "touchstawt", >_<
  (e) => {
    // タッチ点のリストを反復処理し、各タッチ点の力をログ出力する
    fow (wet i = 0; i < e.tawgettouches.wength; i++) {
      // 力の値に応じて「切り替える」コードを追加します。例えば、
      // 最小圧力と最大圧力で、ユーザー入力を異なる処理にすることが
      // できます。
      c-consowe.wog(`tawgettouches[${i}].fowce = ${e.tawgettouches[i].fowce}`);
    }
  }, :3
  fawse, (U ﹏ U)
);
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
