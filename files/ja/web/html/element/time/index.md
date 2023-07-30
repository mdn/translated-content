---
title: "<time>: （日付）時刻要素"
slug: Web/HTML/Element/time
l10n:
  sourceCommit: c6894b701b2297a7523d07855b47605c06f29c91
---

{{HTMLSidebar}}

**`<time>`** は [HTML](/ja/docs/Web/HTML) の要素で、特定の時の区間を表します。`datetime` 属性を使用して、機械可読な形式の日付を記述することができ、検索エンジンの結果を改善したりリマインダーなどの独自機能に使用したりすることができます。

次のうちの一つを表します。

- 24 時間制の時刻
- [グレゴリオ暦](https://ja.wikipedia.org/wiki/グレゴリオ暦)の正確な日付 (時刻やタイムゾーンを伴うことも可能)
- [有効な期間](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-duration-string)

{{EmbedInteractiveExample("pages/tabbed/time.html", "tabbed-shorter")}}

## 属性

他のすべての HTML 要素と同様に、この要素は[グローバル属性](/ja/docs/Web/HTML/Global_attributes)に対応しています。

- `datetime`
  - : この属性は要素の日付や時刻を表し、下記に示す書式のうちの一つでなければなりません。

## 使用上のメモ

この要素は、機械可読な形式で日付や時刻を表現するためのものです。例えばユーザーエージェントが、ユーザーのカレンダーにイベントの予定情報を提供することに役立てることができます。

この要素はグレゴリオ暦導入前の日付に対して使用するべきではありません（日付の計算で混乱するため）。

_datetime 値_（機械可読な日時の値）は要素の `datetime` 属性の値であり、正しい書式（下記参照）でなければなりません。要素に `datetime` 属性がない場合、**子孫要素を持ってはならず**、 _datetime 値_ は要素のテキストの内容になります。

### 有効な datetime 値

- 有効な年の文字列
  - : `2011`
- 有効な月の文字列
  - : `2011-11`
- 有効な日付の文字列
  - : `2011-11-18`
- 年のない有効な日付の文字列
  - : `11-18`
- 有効な週の文字列
  - : `2011-W47`
- 有効な時刻の文字列

  - : `14:54`

    `14:54:39`

    `14:54:39.929`

- 有効なローカル日時の文字列

  - : `2011-11-18T14:54:39.929`

    `2011-11-18 14:54:39.929`

- 有効なグローバル日時の文字列

  - : `2011-11-18T14:54:39.929Z`

    `2011-11-18T14:54:39.929-0400`

    `2011-11-18T14:54:39.929-04:00`

    `2011-11-18 14:54:39.929Z`

    `2011-11-18 14:54:39.929-0400`

    `2011-11-18 14:54:39.929-04:00`

- 有効な期間の文字列
  - : `PT4H18M3S`

## 例

### 単純な例

#### HTML

```html
<p>コンサートは <time datetime="2018-07-07T20:00:00">20:00</time> に始まります。</p>
```

#### 結果

{{EmbedLiveSample('Simple_example', 250, 80)}}

### `datetime` の例

#### HTML

```html
<p>
  コンサートは <time datetime="2001-05-15T19:00">5 月 15 日</time>に開催されます。
</p>
```

#### 結果

{{EmbedLiveSample('datetime_example', 250, 80)}}

## 技術的概要

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
        >, 知覚可能コンテンツ
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
      <td>すべて</td>
    </tr>
    <tr>
      <th scope="row">DOM インターフェイス</th>
      <td>{{domxref("HTMLTimeElement")}}</td>
    </tr>
  </tbody>
</table>

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTMLElement("data")}} 要素では、他の種類の値を示すことが可能です。
