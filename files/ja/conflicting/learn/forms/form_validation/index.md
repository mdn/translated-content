---
title: 制約検証 API
slug: conflicting/Learn/Forms/Form_validation
original_slug: Web/API/Constraint_validation
---

{{apiref()}}

制約検証 (Constraint Validation) API により、ユーザーがフォームコントロールに入力した値を、サーバーに値を送信する前にチェックすることができます。

## 概念と使用方法

{{HTMLElement("input")}}、{{HTMLElement("select")}}、{{HTMLElement("textarea")}} などの特定の HTML フォームコントロールは、 `required` や `pattern` などの属性を使用して基本的な制約を設定し、許容される値の形式を制限することができます。

しかし、より複雑な制約を課したい場合や、検証失敗の報告を既定のものよりも分かりやすくしたい場合もあるでしょう。このような場合には、制約検証 API を使用します。

> **メモ:** クライアント側の制約検証は、サーバー側での検証の必要性をなくすものではありません。クライアント側の検証によって、一般的な多くの種類の無効な値を防ぐことができても、古いブラウザーやウェブアプリケーションを騙そうとする攻撃者によって、無効な値が送信されることがあります。そのため、クライアント側で行っていることと矛盾しない方法で、サーバー側でも入力値を検証する必要があります。クライアント側の検証は、ユーザーにすばやくフィードバックを与えるためのツールです。サーバーが受信したデータを完全に無害化するためにこれに依存してはいけません。

制約検証 API による制約検証は、単一のフォーム要素で行われたり、フォームレベルでは {{ HTMLElement("form") }} 要素自体で行われたりします。

## 制約検証のインターフェイス

- [ValidityState](/ja/docs/Web/API/ValidityState)
  - : ValidityState インターフェイスは、フォームコントロール要素がその定義された制約に対して取り得る*有効性の状態*を表します。また、要素の値が検証に失敗するかどうか、またその理由を説明するのにも役立ちます。
- [invalid](/ja/docs/Web/API/HTMLInputElement/invalid_event) イベント
  - : このイベント型は、フォームコントロール要素が制約を満たさない場合に、フォームコントロール要素で発生します。

### 他のインターフェイスの拡張

制約検証 API は、下記のフォーム関連要素のインターフェイスを、数多くの新しいプロパティとメソッドで拡張します (フォームの所有者を示す `form` 属性を持つことができる要素です)。

- [**`HTMLButtonElement`**](/ja/docs/Web/API/HTMLButtonElement)
- [**`HTMLFieldsetElement`**](/ja/docs/Web/API/HTMLFieldSetElement)
- [**`HTMLInputElement`**](/ja/docs/Web/API/HTMLInputElement)
- [**`HTMLObjectElement`**](/ja/docs/Web/API/HTMLObjectElement)
- [**`HTMLOutputElement`**](/ja/docs/Web/API/HTMLOutputElement)
- [**`HTMLSelectElement`**](/ja/docs/Web/API/HTMLSelectElement)
- [**`HTMLTextAreaElement`**](/ja/docs/Web/API/HTMLTextAreaElement)

#### プロパティ

- {{domxref('HTMLObjectElement.validity', 'validity')}}
  - : 読み取り専用のプロパティで、 [`ValidityState`](/ja/docs/Web/API/ValidityState) オブジェクトを返します。そのプロパティは、その要素の値に対する検証エラーを表します。
- {{domxref('HTMLObjectElement.validationMessage','validationMessage')}}
  - : 読み取り専用のプロパティで、その要素が制約検証の候補になっていない場合は空の文字列を、その要素の値が妥当な場合はその値を返します。要素の値が妥当でない場合は、ローカライズされた検証メッセージを返します。これは、要素が有効性に問題のある唯一のフォームコントロールである場合、 UI に表示されます。 {{domxref('HTMLObjectElement.setCustomValidity','setCustomValidity()')}} を使用してカスタムエラーメッセージが設定されている場合、これが表示されます。
- {{domxref('HTMLObjectElement.willValidate', 'willValidate')}}
  - : 読み取り専用の boolean プロパティで、その要素が制約検証の候補である場合は `true` を、それ以外の場合は `false` を返します。 `HTMLObjectElement` インターフェイスを持つ要素は、制約検証の候補になることはありません。その他の要素は、特定の条件によって制約検証から除外されることがあります。

#### メソッド

- {{domxref('HTMLObjectElement.checkValidity', 'checkValidity()')}}
  - : 要素の値とその制約をチェックします。値が無効な場合は、要素に [invalid](/ja/docs/Web/API/HTMLInputElement/invalid_event) イベントを発生させて `false` を返し、それ以外の場合は `true` を返します。
- {{domxref('HTMLFormElement.reportValidity','reportValidity()')}} (HTMLFormElement のメソッド)
  - : 要素の値をその制約と照合し、有効性の状態を報告します。値が無効な場合は、要素で [invalid](/ja/docs/Web/API/HTMLInputElement/invalid_event) イベントを発生させて `false` を返し、ユーザーエージェントが利用可能な方法でユーザーに有効性の状態を報告します。それ以外の場合は、 `true` を返します。
- {{domxref('HTMLObjectElement.setCustomValidity','setCustomValidity(<em>message</em>)')}}
  - : 値が有効でない理由を説明するカスタムエラーメッセージ文字列を設定し、これがフォームの送信時にユーザーに表示されます。メッセージが設定されると、有効性の状態が無効に設定されます。この状態を解除するには、引数に空の文字列を渡してこの関数を呼び出ししてください。この場合、カスタムエラーメッセージは消去され、要素は有効とみなされ、メッセージは表示されません。

## 例

以下のフォームを取り上げてみましょう。

```html
<form>
  <label for="name">ユーザー名を入力してください (英大文字と小文字で): </label>
  <input type="text" name="name" id="name" required pattern="[A-Za-z]+">
  <button>Submit</button>
</form>
```

HTML フォームの基本的な検証機能により、有効な値が入力されていなかったり、または [`pattern`](/ja/docs/Web/HTML/Attributes/pattern) に一致しない値を入力したりしてフォームを送信しようとすると、既定のエラーメッセージが表示されます。

代わりに独自のエラーメッセージを表示させたい場合は、以下のような JavaScript を使用します。

```js
const nameInput = document.querySelector('input');
const form = document.querySelector('form');

nameInput.addEventListener('input', () => {
  nameInput.setCustomValidity('');
  nameInput.checkValidity();
});

nameInput.addEventListener('invalid', () => {
  if(nameInput.value === '') {
    nameInput.setCustomValidity('ユーザー名を入力してください！');
  } else {
    nameInput.setCustomValidity('ユーザー名は英大文字と小文字のみしか入れられません。やり直してください！');
  }
});
```

この例は次のように表示されます。

{{EmbedLiveSample('Examples')}}

要点:

- input 要素の値が変更されるたびに、 `input` イベントハンドラーから `checkValidity()` メソッドを実行して、入力要素の有効状態をチェックしています。
- 値が無効な場合は、 `invalid` イベントが発生し、 `invalid` イベントハンドラー関数が実行されます。この関数の中では、値が空であるために無効なのか、パターンに一致しないために無効なのかを、 `if()` ブロックを使って判断し、独自の検証エラーメッセージを設定します。
- その結果、送信ボタンが押されたときに入力値が無効であれば、カスタムエラーメッセージのいずれかが表示されます。
- 有効であれば、期待通りに送信されます。そのためには、空の文字列値で `setCustomValidity()` を呼び出すことによって、カスタム検証をキャンセルしなければなりません。そのため、 `input` イベントが発生するたびにこれを行います。これを行わず、以前にカスタム検証が設定されていた場合、送信時に現在有効な値を含んでいても、入力は無効と登録されてしまいます。

> **メモ:** Firefox は、多くのバージョンで `x-moz-errormessage` という独自のエラー属性に対応しており、同様の方法で独自のエラーメッセージを設定することができました。これはバージョン 66 で削除されました ([バグ 1513890](https://bugzilla.mozilla.org/show_bug.cgi?id=1513890) 参照)。

## 仕様書

{{Specifications}}

## 関連情報

- [`<input>`](/ja/docs/Web/HTML/Element/input)
- [`<select>`](/ja/docs/Web/HTML/Element/select)
- [`<textarea>`](/ja/docs/Web/HTML/Element/textarea)
- `{{domxref('ValidityState')}}` のプロパティ: {{domxref('validityState.badInput', 'badInput')}}, {{domxref('validityState.customError','customError')}}, {{domxref('validityState.patternMismatch','patternMismatch')}}, {{domxref('validityState.rangeOverflow','rangeOverflow')}}, {{domxref('validityState.rangeUnderflow','rangeUnderflow')}}, {{domxref('validityState.stepMismatch','stepMismatch')}}, {{domxref('validityState.tooLong','tooLong')}}, {{domxref('validityState.tooShort','tooShort')}}, {{domxref('validityState.typeMismatch','typeMismatch')}}, {{domxref('validityState.valid','valid')}}, {{domxref('validityState.valueMissing','valueMissing')}}
