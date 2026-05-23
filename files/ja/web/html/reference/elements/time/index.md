---
title: HTML `<time>` （日付）時刻要素
short-title: <time>
slug: Web/HTML/Reference/Elements/time
l10n:
  sourceCommit: c6894b701b2297a7523d07855b47605c06f29c91
---

**`<time>`** は [HTML](/ja/docs/Web/HTML) の要素で、特定の時の区間を表します。`datetime` 属性を使用して、機械可読な形式の日付を記述することができ、検索エンジンの結果を改善したりリマインダーなどの独自機能に使用したりすることができます。

次のうちの一つを表します。

- 24 時間制の時刻
- [グレゴリオ暦](https://ja.wikipedia.org/wiki/グレゴリオ暦)の正確な日付（時刻やタイムゾーンを伴うことも可能）
- [有効な期間](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-duration-string)

{{InteractiveExample("HTML デモ: &lt;time&gt;", "tabbed-shorter")}}

```html-nolint interactive-example
<p>
  ザ・キュアは、<time datetime="2018-07-07">7 月 7 日</time>にロンドンのハイド・パークで結成 40 周年を祝います。
</p>

<p>
  コンサートは <time datetime="20:00">20:00</time> に始まり、少なくとも <time datetime="PT2H30M">2 時間 30 分</time>の間、バンドの演奏をお楽しみいただけます。
</p>
```

```css interactive-example
time {
  font-weight: bold;
}
```

## 属性

他のすべての HTML 要素と同様に、この要素は[グローバル属性](/ja/docs/Web/HTML/Reference/Global_attributes)に対応しています。

- `datetime`
  - : この属性は要素の日付や時刻を表し、下記に示す書式のいずれかでなければなりません。

## 使用上のメモ

この要素は、機械可読な形式で日付や時刻を表現するためのものです。例えばユーザーエージェントが、ユーザーのカレンダーにイベントの予定情報を提供することに役立てることができます。

この要素はグレゴリオ暦導入前の日付に対して使用するべきではありません（日付の計算で混乱するため）。

_datetime 値_（機械可読な日時の値）は要素の `datetime` 属性の値であり、正しい書式（下記参照）でなければなりません。要素に `datetime` 属性がない場合、**子孫要素を持ってはならず**、 _datetime 値_ は要素のテキストの内容になります。

### 有効な datetime 値

<table class="no-markdown">
  <thead>
    <tr>
      <th scope="col">説明</th>
      <th scope="col">構文</th>
      <th scope="col">例</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>有効な月の文字列</td>
      <td><code><em>YYYY</em>-<em>MM</em></code></td>
      <td><code>2011-11</code>, <code>2013-05</code></td>
    </tr>
    <tr>
      <td>有効な日付の文字列</td>
      <td><code><em>YYYY</em>-<em>MM</em>-<em>DD</em></code></td>
      <td><code>1887-12-01</code></td>
    </tr>
    <tr>
      <td>年のない有効な日付の文字列</td>
      <td><code><em>MM</em>-<em>DD</em></code></td>
      <td><code>11-12</code></td>
    </tr>
    <tr>
      <td>有効な時刻の文字列</td>
      <td>
        <code><em>HH</em>:<em>MM</em></code><br />
        <code><em>HH</em>:<em>MM</em>:<em>SS</em></code><br />
        <code><em>HH</em>:<em>MM</em>:<em>SS</em>.<em>mmm</em></code>
      </td>
      <td>
        <code>23:59</code><br />
        <code>12:15:47</code><br />
        <code>12:15:52.998</code>
      </td>
    </tr>
    <tr>
      <td>有効なローカル日時の文字列</td>
      <td>
        <code><em>YYYY</em>-<em>MM</em>-<em>DD</em> <em>HH</em>:<em>MM</em></code><br />
        <code><em>YYYY</em>-<em>MM</em>-<em>DD</em> <em>HH</em>:<em>MM</em>:<em>SS</em></code><br />
        <code><em>YYYY</em>-<em>MM</em>-<em>DD</em> <em>HH</em>:<em>MM</em>:<em>SS</em>.<em>mmm</em></code><br />
        <code><em>YYYY</em>-<em>MM</em>-<em>DD</em>T<em>HH</em>:<em>MM</em></code><br />
        <code><em>YYYY</em>-<em>MM</em>-<em>DD</em>T<em>HH</em>:<em>MM</em>:<em>SS</em></code><br />
        <code><em>YYYY</em>-<em>MM</em>-<em>DD</em>T<em>HH</em>:<em>MM</em>:<em>SS</em>.<em>mmm</em></code>
      </td>
      <td>
        <code>2013-12-25 11:12</code><br />
        <code>1972-07-25 13:43:07</code><br />
        <code>1941-03-15 07:06:23.678</code><br />
        <code>2013-12-25T11:12</code><br />
        <code>1972-07-25T13:43:07</code><br />
        <code>1941-03-15T07:06:23.678</code>
      </td>
    </tr>
    <tr>
      <td>有効なタイムゾーンオフセット文字列</td>
      <td>
        <code>Z</code><br />
        <code>+<em>HHMM</em></code><br />
        <code>+<em>HH</em>:<em>MM</em></code><br />
        <code>-<em>HHMM</em></code><br />
        <code>-<em>HH</em>:<em>MM</em></code>
      </td>
      <td>
        <code>Z</code><br />
        <code>+0200</code><br />
        <code>+04:30</code><br />
        <code>-0300</code><br />
        <code>-08:00</code>
      </td>
    </tr>
    <tr>
      <td>有効なグローバル日時文字列</td>
      <td style="max-width:12em">
        有効な現地日時文字列と、その後に続く有効なタイムゾーンオフセット文字列の任意の組み合わせ
      </td>
      <td>
        <code>2013-12-25 11:12+0200</code><br />
        <code>1972-07-25 13:43:07+04:30</code><br />
        <code>1941-03-15 07:06:23.678Z</code><br />
        <code>2013-12-25T11:12-08:00</code>
      </td>
    </tr>
    <tr>
      <td>有効な週の文字列</td>
      <td><code><em>YYYY</em>-W<em>WW</em></code></td>
      <td><code>2013-W46</code></td>
    </tr>
    <tr>
      <td>4 桁以上の ASCII 数字</td>
      <td><code><em>YYYY</em></code></td>
      <td><code>2013</code>, <code>0001</code></td>
    </tr>
    <tr>
      <td>有効な期間の文字列</td>
      <td>
        <code>P<em>d</em>DT<em>h</em>H<em>m</em>M<em>s</em>S</code><br />
        <code>P<em>d</em>DT<em>h</em>H<em>m</em>M<em>s</em>.<em>X</em>S</code><br />
        <code>P<em>d</em>DT<em>h</em>H<em>m</em>M<em>s</em>.<em>XX</em>S</code><br />
        <code>P<em>d</em>DT<em>h</em>H<em>m</em>M<em>s</em>.<em>XXX</em>S</code><br />
        <code>PT<em>h</em>H<em>m</em>M<em>s</em>S</code><br />
        <code>PT<em>h</em>H<em>m</em>M<em>s</em>.<em>X</em>S</code><br />
        <code>PT<em>h</em>H<em>m</em>M<em>s</em>.<em>XX</em>S</code><br />
        <code>PT<em>h</em>H<em>m</em>M<em>s</em>.<em>XXX</em>S</code><br />
        <code><em>w</em>w <em>d</em>d <em>h</em>h <em>m</em>m <em>s</em>s</code>
      </td>
      <td>
        <code>P12DT7H12M13S</code><br />
        <code>P12DT7H12M13.3S</code><br />
        <code>P12DT7H12M13.45S</code><br />
        <code>P12DT7H12M13.455S</code><br />
        <code>PT7H12M13S</code><br />
        <code>PT7H12M13.2S</code><br />
        <code>PT7H12M13.56S</code><br />
        <code>PT7H12M13.999S</code><br />
        <code>7d 5h 24m 13s</code>
      </td>
    </tr>
  </tbody>
</table>

## 例

### 基本的な例

#### HTML

```html-nolint
<p>
  コンサートは <time datetime="2018-07-07T20:00:00">20:00</time> に始まります。
</p>
```

#### 結果

{{EmbedLiveSample('Basic_example', 250, 80)}}

### `datetime` の例

#### HTML

```html-nolint
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
        <a href="/ja/docs/Web/HTML/Guides/Content_categories">コンテンツカテゴリー</a>
      </th>
      <td>
        <a href="/ja/docs/Web/HTML/Guides/Content_categories#フローコンテンツ"
          >フローコンテンツ</a
        >,
        <a href="/ja/docs/Web/HTML/Guides/Content_categories#記述コンテンツ"
          >記述コンテンツ</a
        >, 知覚可能コンテンツ
      </td>
    </tr>
    <tr>
      <th scope="row">許可されている内容</th>
      <td>
        <a href="/ja/docs/Web/HTML/Guides/Content_categories#記述コンテンツ"
          >記述コンテンツ</a
        >
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
        <code
          ><a href="/ja/docs/Web/Accessibility/ARIA/Reference/Roles/structural_roles#structural_roles_with_html_equivalents">time</a
          ></code
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
