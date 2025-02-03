---
title: "<meter>: HTML メーター要素"
slug: Web/HTML/Element/meter
l10n:
  sourceCommit: e04d8d2766c468f149445c0bf438d09f9b2d188c
---

{{HTMLSidebar}}

**`<meter>`** は [HTML](/ja/docs/Web/HTML) の要素で、既知の範囲内のスカラー値、または小数値を表します。

{{EmbedInteractiveExample("pages/tabbed/meter.html", "tabbed-shorter")}}

## 属性

他のすべての要素と同様に、この要素には[グローバル属性](/ja/docs/Web/HTML/Global_attributes)があります。

- `value`

  - : 現在の数値。これは指定されている場合、最小値と最大値（`min` 属性と `max` 属性）の間でなければなりません。この `value` 属性が未定義、あるいは不正な値であった場合は、その値は `0` となります。指定されている値が `min` 属性と `max` 属性が示す範囲の範囲外の値である場合、その範囲の内のもっとも近い値が適用されます。

    > **メモ:** `value` 属性の値が `0` を下限、`1` を上限とするものでない限り、`min` 属性および `max` 属性で `value` 属性の下限および上限を定義しなくてはなりません。

- [`min`](/ja/docs/Web/HTML/Attributes/min)
  - : 範囲全体の下限。 `max` 属性により上限が設定されている場合は、それより小さい値でなくてはなりません。未設定の場合、下限値は `0` となります。
- [`max`](/ja/docs/Web/HTML/Attributes/max)
  - : 範囲全体の上限。 `min` 属性により下限が設定されている場合は、それより大きい値でなくてはなりません。未設定の場合、上限値は `1` となります。
- `low`
  - : 「低」とされる範囲全体の上限値。属性値は、`min` 属性の値より大きく、かつ `high` 属性および `max` 属性の値より小さいものでなくてはなりません (※これらが定義されている場合)。`low` が未定義、もしくはその値が `min` 属性の値より小さい場合、`low` の値は最小値と同じです。
- `high`
  - : 「高」とされる範囲全体の下限値。属性値は、`max` 属性の値より小さく、かつ `low` 属性や `min` 属性の値より大きいものでなくてはなりません (※これらが定義されている場合)。`high` 属性が未定義、もしくはその値が `max` 属性の値より大きい場合、`high` の値は最大値と同じです。
- `optimum`
  - : 最適な数値の範囲を表します。`min` 属性と `max` 属性によって定義される範囲内の値でなくてはなりません。 `low` 属性と `high` 属性が指定されている場合、この属性の値を含む範囲が最適な数値の範囲とみなされます。例えば、値が `min` 属性と `low` 属性の間のいずれかであった場合、「低」の範囲が最適な数値となります。ブラウザーは optimum の値以下であるかどうかでメーターのバーの色を変更することがあります。
- `form`
  - : この省略可能な属性は、この `<meter>` 要素のオーナーとなる {{HTMLElement("form")}} を明示的に設定するために使用されます。省略された場合は、`<meter>` は祖先の `<form>` 要素、または存在すれば祖先の他の要素 ({{HTMLElement("fieldset")}} など) の `form` 属性で関連付けられたフォームに関連付けられます。指定する場合、値は同じツリーにある `<form>` の [`id`](/ja/docs/Web/HTML/Global_attributes/id) でなければなりません。

## 例

### シンプルな例

#### HTML

```html
<p>オーブンの温度: <meter min="200" max="500" value="350">350 度</meter></p>
```

#### 結果

{{EmbedLiveSample("Simple_example", 300, 60)}}

### 「高」の範囲と「低」の範囲の使用例

この例では [`min`](#min) 属性が省略されています。よって、下限値は `0` となっています。

#### HTML

```html
<p>
  彼は試験で
  <meter low="69" high="80" max="100" value="84">B</meter> を取りました。
</p>
```

#### 結果

{{EmbedLiveSample("High_and_Low_range_example", 300, 60)}}

## 技術的な概要

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/ja/docs/Web/HTML/Content_categories">コンテンツカテゴリー</a>
      </th>
      <td>
        <a href="/ja/docs/Web/HTML/Content_categories#フローコンテンツ"
          >フローコンテンツ</a
        >,
        <a href="/ja/docs/Web/HTML/Content_categories#記述コンテンツ"
          >記述コンテンツ</a
        >, ラベル付け可能コンテンツ, 知覚可能コンテンツ
      </td>
    </tr>
    <tr>
      <th scope="row">許可されている内容</th>
      <td>
        <a href="/ja/docs/Web/HTML/Content_categories#記述コンテンツ"
          >記述コンテンツ</a
        >。ただし他の
        <code>&#x3C;meter></code> 要素の子孫要素として配置してはならない。
      </td>
    </tr>
    <tr>
      <th scope="row">タグの省略</th>
      <td>なし。開始タグと終了タグの両方が必須です。</td>
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
      <th scope="row">暗黙の ARIA ロール</th>
      <td>
        <code
          ><a href="/ja/docs/Web/Accessibility/ARIA/Roles/structural_roles#structural_roles_with_html_equivalents">meter</a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">許可されている ARIA ロール</th>
      <td>許可されている <code>role</code> なし</td>
    </tr>
    <tr>
      <th scope="row">DOM インターフェイス</th>
      <td>{{domxref("HTMLMeterElement")}}</td>
    </tr>
  </tbody>
</table>

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [垂直フォームコントロールの作成](/ja/docs/Web/CSS/CSS_writing_modes/Vertical_controls)
- {{HTMLElement("progress")}}
- {{cssxref("::-webkit-meter-bar")}}, {{cssxref("::-webkit-meter-inner-element") }}, {{cssxref("::-webkit-meter-even-less-good-value")}}, {{cssxref("::-webkit-meter-optimum-value")}}, {{cssxref("::-webkit-meter-suboptimum-value")}}: 非標準の疑似要素
