---
title: "<selectedcontent>: 選択中選択肢表示要素"
slug: Web/HTML/Reference/Elements/selectedcontent
l10n:
  sourceCommit: 6eae35bc64a49865a469ca29bc40e6993b9cb8cc
---

{{SeeCompatTable}}

**`<selectedcontent>`** [HTML](/ja/docs/Web/HTML) は、{{htmlelement("select")}} 要素内で使用され、現在選択されている {{htmlelement("option")}} のコンテンツを、その最初のまず子要素である {{htmlelement("button")}} 内に表示させます。これにより、 `<select>` 要素のすべての部分をスタイル設定することができるようになり、これを「[カスタマイズ可能な選択リスト](/ja/docs/Learn_web_development/Extensions/Forms/Customizable_select)」と呼びます。

## 属性

この要素には[グローバル属性](/ja/docs/Web/HTML/Reference/Global_attributes)があります。

## 解説

`<selectedcontent>` 要素は、 {{htmlelement("button")}} 要素の唯一の子要素として使用されます。この `<button>` 要素は、 {{htmlelement("select")}} 要素の最初の子要素でなければなりません。 `<select>` 要素の他の有効な子要素である {{htmlelement("option")}} 要素は、 `<button>` 要素と入れ子になった `<selectedcontent>` ペアの後方に配置する必要があります。

```html
<select>
  <button>
    <selectedcontent></selectedcontent>
  </button>
  <option></option>
  ...
</select>
```

### `<selectedcontent>` は内部でどのように動作するのか

`<selectedcontent>` 要素には、現在選択されている {{htmlelement("option")}} のコンテンツの複製が含まれています。 ブラウザーは {{domxref("Node.cloneNode", "cloneNode()")}} を使用してこの複製をレンダリングします。選択された `<option>` が変更された場合（例えば [`change`](/ja/docs/Web/API/HTMLElement/change_event) イベント発生時）、 `<selectedcontent>` のコンテンツは新たに選択された `<option>` の複製に置き換えます。この動作を理解することは、特に動的コンテンツと一緒に作業する際に重要です。

> [!WARNING]
> ブラウザーは選択された `<option>` が変更された場合にのみ `<selectedcontent>` を更新するため、選択された `<option>` のコンテンツを `<select>` のレンダリング後に動的に変更しても、その変更は `<selectedcontent>` に複製されません。 `<selectedcontent>` を手動で更新する必要があります。初期レンダリング後に `<option>` 要素が動的に更新される一般的なフロントエンド JavaScript フレームワークを使用している場合は、 `<selectedcontent>` の結果が期待通りにならないことがあるため、注意が必要です。

### `<selectedcontent>` の不活性

既定では、 `<select>` 要素内の `<button>` はすべて[不活性](/ja/docs/Web/HTML/Reference/Global_attributes/inert)です。その結果、そのボタン内のすべてのコンテンツ（`<selectedcontent>` を含む）も不活性となります。
これは、ユーザーが `<selectedcontent>` 内のコンテンツを操作したりフォーカスしたりできないということです。

### 選択されたオプションのコンテンツを CSS でスタイル設定する

現在選択されている `<option>` 要素のコンテンツを対象に、選択ボタン内での現れる方法をスタイル設定できます。ボタン自体のスタイル設定は、複製された `<option>` 要素のコンテンツのスタイルには影響しません。これにより、ドロップダウンリストでの表示とは別に、選択されたオプションがボタン内でどのように現れるかを独自にカスタマイズできます。

例えば、 `<option>` 要素にはアイコンや画像、さらには動画が含まれている場合があります。これらはドロップダウン内で美しく表示されますが、選択の `<button>` のサイズを大きくしたり、見た目を乱雑にしたり、周囲のレイアウトに影響を与える可能性があります。 `<selectedcontent>` 内のコンテンツを対象とすることで、ボタン内の画像などの要素を非表示にできます。これにより、ドロップダウン内での表示方法に影響を与えることなく、次のスニペットに示すように調整が可能です。

```css
selectedcontent img {
  display: none;
}
```

> [!NOTE]
> `<select>` 内に `<button>` 要素や `<selectedcontent>` 要素が含まれていない場合、ブラウザーは暗黙的に `<button>` を作成し、選択された `<option>` のコンテンツを表示します。この代替ボタンは、 CSS の `button` や `selectedcontent` の要素型セレクターでは対象にできません。

## 例

`<selectedcontent>` 要素を含む完全な例は、[カスタマイズ可能な select 要素](/ja/docs/Learn_web_development/Extensions/Forms/Customizable_select)ガイドで参照できます。

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
       なし
      </td>
    </tr>
    <tr>
      <th scope="row">許可されている内容</th>
      <td>
        選択されている {{htmlelement("option")}} から内容を反映
      </td>
    </tr>
    <tr>
      <th scope="row">タグの省略</th>
      <td>なし。開始タグと終了タグの両方が必須です。</td>
    </tr>
    <tr>
      <th scope="row">許可されている親要素</th>
      <td>
        {{htmlelement("select")}} 要素の最初の子である {{htmlelement("button")}} 要素。
      </td>
    </tr>
    <tr>
      <th scope="row">暗黙の ARIA ロール</th>
      <td>
        なし
      </td>
    </tr>
    <tr>
      <th scope="row">許可されている ARIA ロール</th>
      <td>
        なし
      </td>
    </tr>
    <tr>
      <th scope="row">DOM インターフェイス</th>
      <td>{{domxref("HTMLSelectedContentElement")}}</td>
    </tr>
  </tbody>
</table>

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTMLElement("select")}} 要素
- {{HTMLElement("option")}} 要素
- {{HTMLElement("optgroup")}} 要素
- [カスタマイズ可能な select 要素](/ja/docs/Learn_web_development/Extensions/Forms/Customizable_select)
