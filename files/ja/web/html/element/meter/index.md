---
title: '<meter>: HTML メーター要素'
slug: Web/HTML/Element/meter
---

{{HTMLSidebar}}

**HTML の `<meter>` 要素**は、既知の範囲内のスカラー値、または小数値を表します。

{{EmbedInteractiveExample("pages/tabbed/meter.html", "tabbed-shorter")}}

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/ja/docs/Web/HTML/Content_categories">コンテンツカテゴリ</a>
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
      <th scope="row">暗黙の ARIA ロール</th>
      <td>
        <a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role"
          >対応するロールなし</a
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

## 属性

他のすべての要素と同様に、この要素は[グローバル属性](/ja/docs/Web/HTML/Global_attributes)を持ちます。

- `value`

  - : 現在の数値。`min` 属性と `max` 属性が指定されている場合、これらの表す範囲内に収まる値でなくてはなりません。この `value` 属性が未定義、あるいは不正な値であった場合は、その値は `0` となります。指定されている値が `min` 属性と `max` 属性が示す範囲の範囲外の値である場合、その範囲の内のもっとも近い値が適用されます。

    > **メモ:** `value` 属性の値が `0` を下限、`1` を上限とするものでない限り、`min` 属性および `max` 属性で `value` 属性の下限および上限を定義しなくてはなりません。

- `min`
  - : 範囲全体の下限。 `max` 属性により上限が設定されている場合は、それより小さい値でなくてはなりません。未設定の場合、下限値は `0` となります。
- `max`
  - : 範囲全体の上限。 `min` 属性により下限が設定されている場合は、それより大きい値でなくてはなりません。未設定の場合、上限値は `1` となります。
- `low`
  - : 「低」とされる範囲全体の上限値。属性値は、`min` 属性の値より大きく、かつ `high` 属性および `max` 属性の値より小さいものでなくてはなりません (※これらが定義されている場合)。`low` が未定義、もしくはその値が `min` 属性の値より小さい場合、`low` の値は最小値と同じです。
- `high`
  - : 「高」とされる範囲全体の下限値。属性値は、`max` 属性の値より小さく、かつ `low` 属性や `min` 属性の値より大きいものでなくてはなりません (※これらが定義されている場合)。`high` 属性が未定義、もしくはその値が `max` 属性の値より大きい場合、`high` の値は最大値と同じです。
- `optimum`
  - : **最適な数値の範囲**を表します。`min` 属性と `max` 属性によって定義される範囲内の値でなくてはなりません。 `low` 属性と `high` 属性が指定されている場合、この属性の値を含む範囲が最適な数値の範囲とみなされます。例えば、値が `min` 属性と `low` 属性の間のいずれかであった場合、「低」の範囲が最適な数値となります。ブラウザーは optimum の値以下であるかどうかでメーターのバーの色を変更することがあります。
- `form`
  - : `<meter>` 要素と関連付ける {{HTMLElement("form")}} 要素 (_フォームオーナー_) です。この属性の値は同じ文書内の `<form>` の [`id`](/ja/docs/Web/HTML/Global_attributes#id) である必要があります。この属性が設定されていなかった場合、その `<meter>` の祖先に `<form>` 要素があれば、それに関連付けられます。この属性は `<meter>` 要素がフォーム関連要素として使用されている場合、例えば対応する [`<input type="number">`](/ja/docs/Web/HTML/Element/input/number) の範囲を表示するようなものでのみ使用されます。

## 例

### シンプルな例

#### HTML

```html
<p>オーブンの温度: <meter min="200" max="500"
  value="350">350 degrees</meter></p>
```

#### 結果

{{EmbedLiveSample("Simple_example", 300, 60)}}

Google Chrome での表示結果は以下のようになります。

![current look of \<meter> in Google Chrome](screen_shot_2020-10-12_at_10.10.53_pm.png)

### 「高」の範囲と「低」の範囲の使用例

この例では [`min`](/ja/docs/Web/HTML/Element/meter#min)t/meter#min)t/meter#min) 属性が省略されています。よって、下限値は `0` となっています。

#### HTML

```html
<p>He got a <meter low="69" high="80" max="100"
  value="84">B</meter> on the exam.</p>
```

#### 結果

{{EmbedLiveSample("High_and_Low_range_example", 300, 60)}}

Google Chrome では、 meter の結果は次のように見えます。

![red meter in Google Chrome](screen_shot_2020-10-12_at_10.11.52_pm.png)

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTMLElement("progress")}}
