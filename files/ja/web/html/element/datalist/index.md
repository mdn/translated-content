---
title: <datalist>
slug: Web/HTML/Element/datalist
---

{{HTMLSidebar}}

**HTML の `<datalist>` 要素**は、他のコントロールで利用可能な値を表現する一連の {{HTMLElement("option")}} 要素を含みます。

{{EmbedInteractiveExample("pages/tabbed/datalist.html", "tabbed-standard")}}

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/ja/docs/Web/HTML/Content_categories">コンテンツカテゴリ</a>
      </th>
      <td>
        <a href="/ja/docs/Web/HTML/Content_categories#フローコンテンツ"
          >フローコンテンツ</a
        >、<a href="/ja/docs/Web/HTML/Content_categories#記述コンテンツ"
          >記述コンテンツ</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">許可されている内容</th>
      <td>
        <a href="/ja/docs/Web/HTML/Content_categories#記述コンテンツ"
          >記述コンテンツ</a
        >、または 0 個以上の {{HTMLElement("option")}} 要素のどちらか
      </td>
    </tr>
    <tr>
      <th scope="row">タグの省略</th>
      <td>{{no_tag_omission}}</td>
    </tr>
    <tr>
      <th scope="row">許可されている親要素</th>
      <td>
        <a href="/ja/docs/Web/HTML/Content_categories#記述コンテンツ"
          >記述コンテンツ</a
        >を受け入れるすべての要素
      </td>
    </tr>
    <tr>
      <th scope="row">許可されている ARIA ロール</th>
      <td>なし</td>
    </tr>
    <tr>
      <th scope="row">DOM インターフェイス</th>
      <td>{{domxref("HTMLDataListElement")}}</td>
    </tr>
  </tbody>
</table>

## 属性

この要素には、すべての要素が持つ[グローバル属性](/ja/docs/Web/HTML/Global_attributes)以外の属性はありません。

## 例

```html
<label for="myBrowser">一覧からブラウザーを選択して下さい:</label>
<input list="browsers" id="myBrowser" name="myBrowser" />
<datalist id="browsers">
  <option value="Chrome">
  <option value="Firefox">
  <option value="Internet Explorer">
  <option value="Opera">
  <option value="Safari">
  <option value="Microsoft Edge">
</datalist>
```

### 結果

{{EmbedLiveSample("Examples")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat("html.elements.datalist")}}

## 代替手段

古いブラウザーや非互換の現行ブラウザーで対応するための代替手段 (polyfill) を以下に挙げます。
[datalist-polyfill](https://github.com/mfranzke/datalist-polyfill)

## 関連情報

- {{HTMLElement("input")}} 要素、およびもっと具体的な [`list`](/ja/docs/Web/HTML/Element/input#list) 属性
- {{HTMLElement("option")}} 要素
