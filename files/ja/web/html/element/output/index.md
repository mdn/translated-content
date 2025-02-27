---
title: "<output>: 出力要素"
slug: Web/HTML/Element/output
l10n:
  sourceCommit: 942a529383ee7ee3996fb234187641c08935f3ff
---

{{HTMLSidebar}}

**`<output>`** は [HTML](/ja/docs/Web/HTML) の要素で、サイトやアプリが計算結果やユーザー操作の結果を挿入することができるコンテナー要素です。

## 属性

この要素には[グローバル属性](/ja/docs/Web/HTML/Global_attributes)があります。

- `for`
  - : 他の要素の [`id`](/ja/docs/Web/HTML/Global_attributes#id) の空白区切りのリストで、入力値が計算に使用される（または何らかの影響を与える）要素を示します。
- `form`

  - : この要素に関連付けられた (*フォームオーナー*である) {{HTMLElement("form")}} 要素を指定します。この値は、同じ文書内の `<form>` 要素の [`id`](/ja/docs/Web/HTML/Global_attributes#id) である必要があります。 (この属性が設定されていない場合、 `<output>` 要素は祖先の `<form>` があれば、その要素に関連づけられます。

    この属性は `<output>` 要素を、包含する `<form>` に限らず文書中のどこにある `<form>` にも結び付けることができます。これは祖先の `<form>` 要素を上書きもします。

- `name`
  - : 要素の名前です。 {{domxref("HTMLFormElement.elements", "form.elements")}} API で使用されます。

`<output>` の値、名前、内容はフォーム送信の過程で送信されません。

## 例

以下の例では、フォームに `0` から `100` までの範囲の値を取るスライダーと、第 2 の値を入力できる {{HTMLElement("input")}} 要素があります。どちらかのコントロールの値が変更されるたびに、2 つの値が合計された結果が `<output>` 要素の中に表示されます。

```html
<form oninput="result.value=parseInt(a.value)+parseInt(b.value)">
  <input type="range" id="b" name="b" value="50" /> +
  <input type="number" id="a" name="a" value="10" /> =
  <output name="result" for="a b">60</output>
</form>
```

### 結果

{{ EmbedLiveSample('Examples')}}

## アクセシビリティの考慮

多くのブラウザーでは、この要素を [`aria-live`](/ja/docs/Web/Accessibility/ARIA/ARIA_Live_Regions) 領域として実装しています。これにより、支援技術は、その中に出力された UI 操作の結果を読み上げますが、その結果を生成するコントロールからフォーカスを外す必要はありません。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/ja/docs/Web/HTML/Content_categories">コンテンツカテゴリー</a>
      </th>
      <td>
        <a href="/ja/docs/Web/HTML/Content_categories#フローコンテンツ"
          >フローコンテンツ</a
        >、
        <a href="/ja/docs/Web/HTML/Content_categories#記述コンテンツ"
          >記述コンテンツ</a
        >、
        <a href="/ja/docs/Web/HTML/Content_categories#リスト化"
          >リスト化</a
        >、
        <a href="/ja/docs/Web/HTML/Content_categories#ラベル付け可能"
          >ラベル付け可能</a
        >、
        <a href="/ja/docs/Web/HTML/Content_categories#リセット可能"
          >リセット可能</a
        >
        <a
          href="/ja/docs/Web/HTML/Content_categories#フォーム関連コンテンツ"
          >フォーム関連要素</a
        >、知覚可能コンテンツ
      </td>
    </tr>
    <tr>
      <th scope="row">許可されている内容</th>
      <td>
        <a href="/ja/docs/Web/HTML/Content_categories#記述コンテンツ"
          >記述コンテンツ</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">タグの省略</th>
      <td>なし。開始タグと終了タグの両方が必須です。</td>
    </tr>
    <tr>
      <th scope="row">許可された親要素</th>
      <td>
        <a href="/ja/docs/Web/HTML/Content_categories#記述コンテンツ"
          >記述コンテンツ</a
        >を受け入れるすべての要素
      </td>
    </tr>
    <tr>
      <th scope="row">暗黙の ARIA ロール</th>
      <td><a href="/ja/docs/Web/Accessibility/ARIA/Roles/status_role"><code>status</code></a></td>
    </tr>
    <tr>
      <th scope="row">許可された ARIA ロール</th>
      <td>すべて</td>
    </tr>
    <tr>
      <th scope="row">DOM インターフェイス</th>
      <td>{{domxref("HTMLOutputElement")}}</td>
    </tr>
  </tbody>
</table>

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
