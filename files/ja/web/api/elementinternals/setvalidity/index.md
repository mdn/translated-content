---
title: "ElementInternals: setValidity() メソッド"
short-title: setValidity()
slug: Web/API/ElementInternals/setValidity
l10n:
  sourceCommit: ce10da0e9d23d241b175d8d68bf93507734b7c48
---

{{APIRef("Web Components")}}

**`setValidity()`** は {{domxref("ElementInternals")}} インターフェイスのメソッドで、この要素の妥当性を設定します。

## 構文

```js-nolint
setValidity(flags)
setValidity(flags, message)
setValidity(flags, message, anchor)
```

### 引数

- `flags` {{Optional_Inline}}

  - : 要素の有効状態を示す、 1 つ以上のフラグを含む辞書オブジェクトです。

    - `valueMissing`
      - : 論理値で、要素に [`required`](/ja/docs/Web/HTML/Element/input#required) 属性があって値がない場合は `true` となり、そうでない場合は `false` となります。もし `true` なら、その要素は CSS の {{cssxref(":invalid")}} の擬似クラスに一致します。
    - `typeMismatch`
      - : 論理値で、値が必要とされる構文でない場合（[`type`](/ja/docs/Web/HTML/Element/input#type) が `email` または `url` の場合）は `true` となり、構文が正しい場合は `false` となります。 `true` の場合、その要素は CSS の {{cssxref(":invalid")}} の擬似クラスに一致します。
    - `patternMismatch`
      - : 論理値で、指定された [`pattern`](/ja/docs/Web/HTML/Element/input#pattern) に一致しない場合は `true` となり、一致する場合は `false` となります。 `true` の場合、その要素は CSS の {{cssxref(":invalid")}} の擬似クラスに一致します。
    - `tooLong`
      - : 論理値で、値が {{domxref("HTMLInputElement")}} または {{domxref("HTMLTextAreaElement")}} オブジェクトで指定された `maxlength` を超える場合は `true` となり、最大の長さ以下の場合は `false` となります。 `true` の場合、その要素は CSS の {{cssxref(":invalid")}} および {{cssxref(":out-of-range")}} 擬似クラスに一致します。
    - `tooShort`
      - : 論理値で、値が {{domxref("HTMLInputElement")}} または {{domxref("HTMLTextAreaElement")}} オブジェクトで指定された `minlength` に満たない場合は `true` となり、最小の長さ以上の場合は `false` となります。 `true` の場合、その要素は CSS の {{cssxref(":invalid")}} および {{cssxref(":out-of-range")}} 擬似クラスに一致します。
    - `rangeUnderflow`
      - : 論理値で、値が [`min`](/ja/docs/Web/HTML/Element/input#min) 属性で指定された最小値より小さい場合は `true` となり、最小値以上の場合は `false` となります。 `true` の場合、要素は CSS の {{cssxref(":invalid")}} および {{cssxref(":out-of-range")}} 擬似クラスに一致します。
    - `rangeOverflow`
      - : 論理値で、値が [`max`](/ja/docs/Web/HTML/Element/input#max) 属性で指定された最大値より大きい場合は `true` となり、最大値以下であれば `false` となります。 `true` の場合、要素は CSS の {{cssxref(":invalid")}} および {{cssxref(":out-of-range")}} 擬似クラスに一致します。
    - `stepMismatch`
      - : 論理値で、値が [`step`](/ja/docs/Web/HTML/Element/input#step) 属性によって決定されるルールに適合しない（つまり、ステップ値で均等に割り切れない）場合は `true` となり、ステップのルールに適合する場合は `false` となります。 `true` の場合、要素は CSS の {{cssxref(":invalid")}} および {{cssxref(":out-of-range")}} 擬似クラスに一致します。
    - `badInput`
      - : 論理値で、ブラウザーが変換できない入力をユーザーが入力した場合に `true` となります。
    - `customError`
      - : 論理値で、この要素の {{domxref('HTMLObjectElement.setCustomValidity', 'setCustomValidity()')}} メソッドを呼び出すことで、要素のカスタム有効性メッセージが空でない文字列に設定されたかどうかを示します。

    > [!NOTE]
    > すべてのフラグを `false` に設定し、この要素がすべての制約の検証に合格したことを示すには、空のオブジェクト `{}` を渡してください。この場合、 `message` も渡す必要はありません。

- `message` {{Optional_Inline}}
  - : `flags` が `true` の場合に設定されるメッセージを含む文字列。すべての `flags` が `false` の場合のみ、この引数はオプションとなります。
- `anchor` {{Optional_Inline}}
  - : このフォーム送信に関する問題を報告するためにユーザーエージェントが使用する {{domxref("HTMLElement")}} です。

### 返値

なし ({{jsxref("undefined")}})。

### 例外

- `NotSupportedError` {{domxref("DOMException")}}
  - : 要素の `formAssociated` プロパティが `true` に設定されていない場合に発生します。
- {{jsxref("TypeError")}}
  - : 1 つ以上の `flags` が `true` の場合に発生します。
- `NotFoundError` {{domxref("DOMException")}}
  - : `anchor` が与えられているが、そのアンカーが要素のシャドウを含む子孫でない場合に発生します。

## 例

次の例では、 `setValidity` を空の `flags` 引数を指定して呼び出して、この要素が制約検証ルールを満たしていることを示します。

```js
this.internals_.setValidity({});
```

次の例では、 `valueMissing` フラグを `true` に設定して `setValidity` を呼び出しています。その際、 `message` 引数にメッセージを渡す必要があります。

```js
this.internals_.setValidity({ valueMissing: true }, "my message");
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
