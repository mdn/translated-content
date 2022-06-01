---
title: ValidityState
slug: Web/API/ValidityState
tags:
  - API
  - 制約検証 API
  - フォーム
  - HTML DOM
  - インターフェイス
browser-compat: api.ValidityState
translation_of: Web/API/ValidityState
---
{{APIRef("HTML DOM")}}

**`ValidityState`** インターフェイスは、制約の検証に関して、要素が取りうる*妥当性の状態*を表します。要素の値が不正な場合、なぜ検証に失敗したのかを知る手がかりにもなります。

## プロパティ

下記のプロパティはどれも論理値を返します。`true` は指定された検証が失敗したことを表します。ただし `valid` プロパティだけは例外で、 `true` が要素の値がすべての制約に適合していることを表します。

- {{domxref("ValidityState.badInput", "badInput")}} {{ReadOnlyInline}}
  - : 論理値で、 `true` はブラウザーが処理できない入力値をユーザーが入力したことを示します。
- `customError` {{ReadOnlyInline}}
  - : 論理値で、その要素のカスタム検証メッセージが {{domxref('HTMLObjectElement.setCustomValidity', 'setCustomValidity()')}} メソッドによって空でない文字列に設定されているかどうかを示します。
- {{domxref("ValidityState.patternMismatch", "patternMismatch")}} {{ReadOnlyInline}}
  - : 論理値で、 `true` は値が {{htmlattrxref("pattern", "input")}} の指定と一致しないことを示し、 `false` は一致することを示します。 `true` の場合、その要素は CSS の {{cssxref(":invalid")}} 擬似クラスに一致します。
- {{domxref("ValidityState.rangeOverflow", "rangeOverflow")}} {{ReadOnlyInline}}
  - : 論理値で、 `true` は値が {{htmlattrxref("max", "input")}} 属性で指定された最大値を超えていることを示し、 `false` はその最大値以下である場合を示します。 `true` の場合、その要素は CSS の {{cssxref(":invalid")}} および {{cssxref(":out-of-range")}} の各擬似クラスに一致します。
- {{domxref("ValidityState.rangeUnderflow", "rangeUnderflow")}} {{ReadOnlyInline}}
  - : 論理値で、 `true` は値が {{htmlattrxref("min", "input")}} 属性で指定された最小値未満であることを示し、 `false` はその最小値以上であることを示します。 `true` の場合、その要素は CSS の {{cssxref(":invalid")}} および {{cssxref(":out-of-range")}} の各擬似クラスに一致します。
- {{domxref("ValidityState.stepMismatch", "stepMismatch")}} {{ReadOnlyInline}}
  - : 論理値で、 `true` は値が {{htmlattrxref("step", "input")}} 属性で決められた規則に合わないこと (つまり、step の値で割り切れないこと) を示し、 `false` は刻みの規則に合っていることを示します。 `true` の場合、その要素は CSS の {{cssxref(":invalid")}} および {{cssxref(":out-of-range")}} の各擬似クラスに一致します。
- {{domxref("ValidityState.tooLong", "tooLong")}} {{ReadOnlyInline}}
  - : 論理値で、 `true` は値が {{domxref("HTMLInputElement")}} または {{domxref("HTMLTextAreaElement")}} オブジェクトの `maxlength` で指定された長さを超えていることを示し、 `false` は長さがその最長値以下であることを示します。 *注: Gecko ではこのプロパティが `true` になることはありません。要素の値の長さが `maxlength` を超えないようになっているからです。* `true` の場合、その要素は CSS の {{cssxref(":invalid")}} および {{cssxref(":out-of-range")}} の各擬似クラスに一致します。
- {{domxref("ValidityState.tooShort", "tooShort")}} {{ReadOnlyInline}}
  - : 論理値で、 `true` は値が {{domxref("HTMLInputElement")}} または {{domxref("HTMLTextAreaElement")}} オブジェクトの `minlength` で指定された長さに満たないことを示し、 `false` は長さがその最短値以上であることを示します。 `true` の場合、その要素は CSS の {{cssxref(":invalid")}} および {{cssxref(":out-of-range")}} の各擬似クラスに一致します。
- {{domxref("ValidityState.typeMismatch", "typeMismatch")}} {{ReadOnlyInline}}
  - : 論理値で、 `true` は値が ({{htmlattrxref("type", "input")}} が `email` または `url` の場合に) 要求された構文に合っていないことを示し、`false` は構文が正しいことを示します。 `true` の場合、その要素は CSS の {{cssxref(":invalid")}} 擬似クラスに一致します。
- `valid` {{ReadOnlyInline}}
  - : 論理値で、 `true` はその要素がすべての制約検証に適合し、合格したとみられることを示し、 `false` はいずれかの制約に適合しなかったことを示します。 `true` の場合、 CSS の {{cssxref(":valid")}} 擬似クラスに一致します。それ以外の場合は CSS の {{cssxref(":invalid")}} 擬似クラスに一致します。
- {{domxref("ValidityState.valueMissing", "valueMissing")}} {{ReadOnlyInline}}
  - : 論理値で、 `true` はその要素に {{htmlattrxref("required", "input")}} 属性があるものの、値がないことを示し、 `false` はそうではないことを示します。 `true` の場合、その要素は CSS の {{cssxref(":invalid")}} 擬似クラスに一致します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ガイド: 制約検証](/ja/docs/Web/Guide/HTML/Constraint_validation)
- [チュートリアル: フォームデータの検証](/ja/docs/Learn/Forms/Form_validation)
