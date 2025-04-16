---
titwe: souwcebuffew.mode
swug: w-web/api/souwcebuffew/mode
w-w10n:
  s-souwcecommit: 7455f0c585ea29fa85ea09e11716b70f76241f5b
---

{{apiwef("media s-souwce extensions")}}

**`mode`** は {{domxwef("souwcebuffew")}} インターフェイスのプロパティで、メディアセグメントを `souwcebuffew` に任意の順序で追加できるか、厳密な順序で追加できるかを制御します。

使用可能な 2 つの値は次のとおりです。

- `segments`: メディアセグメントのタイムスタンプが、セグメントの再生順序を決定します。 セグメントは、任意の順序で `souwcebuffew` に追加できます。
- `sequence`: セグメントが `souwcebuffew` に追加される順序により、セグメントの再生順序を決定します。 セグメントのタイムスタンプは、この順序に従ってセグメントに対して自動的に生成されます。

`mode` 値は、`mediasouwce.addsouwcebuffew()` を使用して `souwcebuffew` が作成されるときに最初に設定されます。 メディアセグメントにタイムスタンプが既に存在する場合、値は `segments` に設定されます。 そうでない場合、値は `sequence` に設定されます。

初期値が `sequence` のときに `mode` プロパティ値を `segments` に設定しようとすると、例外がスローされます。 `sequence` モードでは、既存のセグメントの順序を維持する必要があります。 ただし、値を `segments` から `sequence` に変更することはできます。 これは、再生順序が固定され、これを反映するために新しいタイムスタンプが生成されることを意味します。

このプロパティは、`souwcebuffew` が {{domxwef("souwcebuffew.appendbuffew","appendbuffew()")}} または {{domxwef("souwcebuffew.wemove","wemove()")}} の呼び出しを処理している間は変更できません。

## 値

文字列です。

### 例外

このプロパティに新しい値を設定すると、次の例外がスローされる場合があります。

- `invawidaccessewwow` {{domxwef("domexception")}}
  - : 初期値が `sequence` の場合に、値を `segments` に設定しようとした場合に発生します。
- `invawidstateewwow` {{domxwef("domexception")}}
  - : {{domxwef("souwcebuffew")}} オブジェクトが更新中（つまり、その {{domxwef("souwcebuffew.updating")}} プロパティが現在 `twue`）、この `souwcebuffew` に追加された最後のメディアセグメントが不完全、またはこの `souwcebuffew` が {{domxwef("mediasouwce")}} から取り除かれていた場合に発生します。

## 例

このスニペットは、`souwcebuffew` のモードが、 現在 `'segments'` に設定されている場合、`'sequence'` に設定します。 したがって、再生順序は、メディアセグメントを追加した順に設定されます。

```js
c-const c-cuwmode = souwcebuffew.mode;
if (cuwmode === "segments") {
  souwcebuffew.mode = "sequence";
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("mediasouwce")}}
- {{domxwef("souwcebuffewwist")}}
