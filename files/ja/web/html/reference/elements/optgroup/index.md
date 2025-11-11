---
title: "<optgroup>: 選択肢グループ要素"
slug: Web/HTML/Reference/Elements/optgroup
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

**`<optgroup>`** は [HTML](/ja/docs/Web/HTML) の要素で、 {{HTMLElement("select")}} 要素内の選択肢のグループを作成します。

[カスタマイズ可能な `<select>` 要素](/ja/docs/Learn_web_development/Extensions/Forms/Customizable_select) では、{{htmlelement("legend")}} 要素を `<optgroup>` の子要素として使用できるため、対象とスタイル設定がしやすいラベルを提供できます。これは `<optgroup>` 要素の `label` 属性で設定されたテキストを置き換え、そして同じ意味づけを持ちます。

{{InteractiveExample("HTML デモ: &lt;optgroup&gt;", "tabbed-standard")}}

```html interactive-example
<label for="dino-select">恐竜を選択:</label>
<select id="dino-select">
  <optgroup label="獣脚類">
    <option>ティラノサウルス</option>
    <option>ヴェロキラプトル</option>
    <option>デイノニクス</option>
  </optgroup>
  <optgroup label="竜脚類">
    <option>ディプロドクス</option>
    <option>ソルトサウルス</option>
    <option>アパトサウルス</option>
  </optgroup>
</select>
```

```css interactive-example
label {
  display: block;
  margin-bottom: 10px;
}
```

> [!NOTE]
> optgroup 要素を入れ子にすることはできません。

## 属性

この要素には[グローバル属性](/ja/docs/Web/HTML/Reference/Global_attributes)があります。

- [`disabled`](/ja/docs/Web/HTML/Reference/Attributes/disabled)
  - : この論理属性が指定された場合、この選択肢グループ内の選択肢のすべてが選択不能となります。多くの場合、ブラウザーはそのコントロールを灰色で表示し、マウスクリックやフォーカスなど、いかなるイベントも受け付けなくなります。
- `label`
  - : 選択肢のグループ名。ブラウザーがユーザーインターフェイスで選択肢にラベル付けを行う際に使用できます。この要素を使用する場合、この属性は必須です。

## 例

```html
<select>
  <optgroup label="グループ 1">
    <option>選択肢 1.1</option>
  </optgroup>
  <optgroup label="グループ 2">
    <option>選択肢 2.1</option>
    <option>選択肢 2.2</option>
  </optgroup>
  <optgroup label="グループ 3" disabled>
    <option>選択肢 3.1</option>
    <option>選択肢 3.2</option>
    <option>選択肢 3.3</option>
  </optgroup>
</select>
```

### 結果

{{EmbedLiveSample("Examples")}}

## 技術的概要

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/ja/docs/Web/HTML/Guides/Content_categories"
          >コンテンツカテゴリー</a
        >
      </th>
      <td>なし</td>
    </tr>
    <tr>
      <th scope="row">許可されている内容</th>
      <td>0 個以上の {{HTMLElement("option")}} 要素。 <a href="/ja/docs/Learn_web_development/Extensions/Forms/Customizable_select">カスタマイズ可能な select 要素</a>では、 {{htmlelement("legend")}} 要素が <code>&lt;optgroup&gt;</code> の子として許可されます。</td>
    </tr>
    <tr>
      <th scope="row">タグの省略</th>
      <td>
        開始タグは必須。要素の直後に他の <code>&#x3C;optgroup></code> 要素が接続する場合、または親要素が他の内容を持たない場合、終了タグが省略可能となる。
      </td>
    </tr>
    <tr>
      <th scope="row">許可されている親要素</th>
      <td>{{HTMLElement("select")}} 要素</td>
    </tr>
    <tr>
      <th scope="row">暗黙の ARIA ロール</th>
      <td><a href="/ja/docs/Web/Accessibility/ARIA/Reference/Roles/group_role"><code>group</code></a></td>
    </tr>
    <tr>
      <th scope="row">許可されている ARIA ロール</th>
      <td>許可されている <code>role</code> なし</td>
    </tr>
    <tr>
      <th scope="row">DOM インターフェイス</th>
      <td>{{domxref("HTMLOptGroupElement")}}</td>
    </tr>
  </tbody>
</table>

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 他のフォーム関連要素: {{HTMLElement("form")}}、{{HTMLElement("legend")}}、{{HTMLElement("label")}}、{{HTMLElement("button")}}、{{HTMLElement("select")}}、{{HTMLElement("datalist")}}、{{HTMLElement("option")}}、{{HTMLElement("fieldset")}}、{{HTMLElement("textarea")}}、{{HTMLElement("input")}}、{{HTMLElement("output")}}、{{HTMLElement("progress")}}、{{HTMLElement("meter")}}
- [カスタマイズ可能な select 要素](/ja/docs/Learn_web_development/Extensions/Forms/Customizable_select)
