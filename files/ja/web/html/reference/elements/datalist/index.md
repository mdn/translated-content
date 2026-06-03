---
title: "<datalist>: HTML データリスト要素"
slug: Web/HTML/Reference/Elements/datalist
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

**`<datalist>`** は [HTML](/ja/docs/Web/HTML) の要素で、この要素には {{HTMLElement("option")}} 要素の集合が含まれ、他のコントロール内で選択できる許容または推奨オプションを表します。

{{InteractiveExample("HTML デモ: &lt;datalist&gt;", "tabbed-standard")}}

```html interactive-example
<label for="ice-cream-choice">味を選んでください:</label>
<input list="ice-cream-flavors" id="ice-cream-choice" name="ice-cream-choice" />

<datalist id="ice-cream-flavors">
  <option value="チョコレート"></option>
  <option value="ココナッツ"></option>
  <option value="ミント"></option>
  <option value="イチゴ"></option>
  <option value="バニラ"></option>
</datalist>
```

```css interactive-example
label {
  display: block;
  margin-bottom: 10px;
}
```

`<datalist>` 要素をコントロールに結びつけるには、[`id`](/ja/docs/Web/HTML/Reference/Global_attributes/id) 属性で固有の識別子を与え、同じ識別子を値とした [`list`](/ja/docs/Web/HTML/Reference/Elements/input#list) 属性を {{HTMLElement("input")}} 要素に追加します。
この動作は、特定の種類の {{HTMLElement("input")}} だけが対応しており、また、ブラウザーの種類によっても異なる場合があります。

それぞれの `<option>` 要素には、入力欄に入力される候補を表す `value` 属性を指定する必要があります。また、`label` 属性を指定することも可能です。もし `label` 属性が指定されていない場合は、テキストコンテンツを記述することで、ブラウザーによっては `value` の代わりに (Firefox)、あるいは `value` に加えて（Chrome や Safari では補足テキストとして）表示されることがあります。ドロップダウンメニューの具体的なコンテンツはブラウザーによって異なりますが、クリックされた際、コントロールフィールドに入力される内容は常に `value` 属性から決まります。

> [!NOTE]
> `<option>` 要素は内部コンテンツとして、また `value` 属性と `label` 属性に値を格納することができます。ドロップダウンメニューでどちらが表示されるかはブラウザーに依存しますが、クリックされたときに制御フィールドに入力されるコンテンツは常に `value` 属性に由来します。

## 属性

この要素には、すべての要素が持つ[グローバル属性](/ja/docs/Web/HTML/Reference/Global_attributes)以外の属性はありません。

## アクセシビリティ

`<datalist>` 要素を使用する際には、以下のアクセシビリティ上の課題に留意する必要があります。

- データリストの選択肢のフォントサイズは拡大・縮小されず、常に同じサイズのままです。他のコンテンツの表示を拡大・縮小しても、サジェスト機能の内容は拡大・縮小されません。
- 選択肢リストを対象として CSS で指定することは、とても制限されているため、ハイコントラストモードでの表示スタイル設定はできません。
- 一部のスクリーンリーダーとブラウザーの組み合わせ、例えば NVDA と Firefox では、自動入力候補のポップアップのコンテンツが読み上げられません。

## 例

### テキスト型

{{HTMLElement("input/text", "text")}}、{{HTMLElement("input/search", "search")}}、{{HTMLElement("input/url", "url")}}、{{HTMLElement("input/tel", "tel")}}、{{HTMLElement("input/email", "email")}}、{{HTMLElement("input/number", "number")}} の各型は、ユーザーがコントロールをクリックまたはダブルクリックすると、ドロップダウンメニューで表示されます。
通常、コントロールの右側には、定義済みの値があることを示す矢印もあります。

```html
<label for="myBrowser">一覧からブラウザーを選択して下さい:</label>
<input list="browsers" id="myBrowser" name="myBrowser" />
<datalist id="browsers">
  <option value="Chrome"></option>
  <option value="Firefox"></option>
  <option value="Opera"></option>
  <option value="Safari"></option>
  <option value="Microsoft Edge"></option>
</datalist>
```

{{EmbedLiveSample("Textual_types", 600, 40)}}

### 日付と時刻型

{{HTMLElement("input/month", "month")}}、{{HTMLElement("input/week", "week")}}、{{HTMLElement("input/date", "date")}}、{{HTMLElement("input/time", "time")}}、{{HTMLElement("input/datetime-local", "datetime-local")}} の各型は、日付や時刻を便利に選択できるようなインターフェイスを表示することができます。
あらかじめ定義された値をそこに示すことで、ユーザーはすばやく制御値を満たすことができます。

> [!NOTE]
> これらの型に対応していない場合、単純なテキストフィールドを作成する `text` 型が代わりに使用されます。このフィールドは推奨値を正しく認識し、ドロップダウンメニューでユーザーに表示します。

```html
<input type="time" list="popularHours" />
<datalist id="popularHours">
  <option value="12:00"></option>
  <option value="13:00"></option>
  <option value="14:00"></option>
</datalist>
```

{{EmbedLiveSample("Date_and_Time_types", 600, 40)}}

### 範囲型

{{HTMLElement("input/range", "range")}} 入力型に関連付けられたデータリスト用に指定された `<option>` 要素に `value` 属性が含まれている場合、それらはユーザーが簡単に選択できる一連の目盛として示されます。

```html
<label for="tick">Tip amount:</label>
<input type="range" list="tickmarks" min="0" max="100" id="tick" name="tick" />
<datalist id="tickmarks">
  <option value="0" label="0%"></option>
  <option value="10" label="Minimum Tip"></option>
  <option value="20" label="Standard"></option>
  <option value="30" label="Generous"></option>
  <option value="50" label="Very Generous"></option>
</datalist>
```

{{EmbedLiveSample("Range_type", 600, 70)}}

> [!NOTE]
> `label` 属性は、[HTML 標準](<https://html.spec.whatwg.org/multipage/input.html#range-state-(type=range)>)で定義されているように、目盛のラベルを提供するためのものです。ただし、現在のブラウザーの対応状況はまちまちであり、ラベルが視覚的に表示されない場合や、ツールチップとして表示されない場合があります。

### 色型

{{HTMLElement("input/color", "color")}} の種類は、あらかじめ定義された色をブラウザーが提供するインターフェイスで示すことができます。

```html
<label for="colors">色を選択して下さい（赤系がおすすめ）:</label>
<input type="color" list="redColors" id="colors" />
<datalist id="redColors">
  <option value="#800000"></option>
  <option value="#8B0000"></option>
  <option value="#A52A2A"></option>
  <option value="#DC143C"></option>
</datalist>
```

{{EmbedLiveSample("Color_type", 600, 70)}}

## 技術的概要

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/ja/docs/Web/HTML/Guides/Content_categories"
          >コンテンツカテゴリー</a
        >
      </th>
      <td>
        <a href="/ja/docs/Web/HTML/Guides/Content_categories#フローコンテンツ"
          >フローコンテンツ</a
        >、<a href="/ja/docs/Web/HTML/Guides/Content_categories#記述コンテンツ"
          >記述コンテンツ</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">許可されている内容</th>
      <td>
        <a href="/ja/docs/Web/HTML/Guides/Content_categories#記述コンテンツ"
          >記述コンテンツ</a
        >、または 0 個以上の {{HTMLElement("option")}} 要素のどちらか
      </td>
    </tr>
    <tr>
      <th scope="row">タグの省略</th>
      <td>なし。開始タグと終了タグの両方が必須です。</td>
    </tr>
    <tr>
      <th scope="row">許可されている親要素</th>
      <td>
        <a href="/ja/docs/Web/HTML/Guides/Content_categories#記述コンテンツ"
          >記述コンテンツ</a
        >を受け入れるすべての要素
      </td>
    </tr>
    <tr>
      <th scope="row">暗黙の ARIA ロール</th>
      <td>
        <a href="/ja/docs/Web/Accessibility/ARIA/Reference/Roles/listbox_role"
          >listbox</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">許可されている ARIA ロール</th>
      <td>許可されている <code>role</code> なし</td>
    </tr>
    <tr>
      <th scope="row">DOM インターフェイス</th>
      <td>{{domxref("HTMLDataListElement")}}</td>
    </tr>
  </tbody>
</table>

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTMLElement("input")}} 要素、特に [`list`](/ja/docs/Web/HTML/Reference/Elements/input#list) 属性
- {{HTMLElement("option")}} 要素
