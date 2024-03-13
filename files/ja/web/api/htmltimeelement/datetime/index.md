---
title: "HTMLTimeElement: dateTime プロパティ"
short-title: dateTime
slug: Web/API/HTMLTimeElement/dateTime
l10n:
  sourceCommit: 942a529383ee7ee3996fb234187641c08935f3ff
---

{{ APIRef("HTML DOM") }}

**`HTMLTimeElement.dateTime`** プロパティは文字列で、HTML の [`datetime`](/ja/docs/Web/HTML/Element/time#datetime) 属性を反映し、要素の日付と時刻の値を機械可読な形で保持します。

文字列の形式は以下の HTML のマイクロ構文に従わなければなりません。

<table class="no-markdown">
  <thead>
    <tr>
      <th scope="col">マイクロ構文</th>
      <th scope="col">説明</th>
      <th scope="col">例</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>有効な月文字列</td>
      <td><em>YYYY</em><code>-</code><em>MM</em></td>
      <td><code>2011-11</code>, <code>2013-05</code></td>
    </tr>
    <tr>
      <td>有効な日付文字列</td>
      <td><em>YYYY</em><code>-</code><em>MM</em><code>-</code><em>DD</em></td>
      <td><code>1887-12-01</code></td>
    </tr>
    <tr>
      <td>有効な年のない日付文字列</td>
      <td><em>MM</em><code>-</code><em>DD</em></td>
      <td><code>11-12</code></td>
    </tr>
    <tr>
      <td>有効な時刻文字列</td>
      <td>
        <em>HH</em><code>:</code><em>MM</em><br /><em>HH</em><code>:</code
        ><em>MM</em><code>:</code><em>SS</em><br /><em>HH</em><code>:</code
        ><em>MM</em><code>:</code><em>SS</em><code>.</code><em>mmm</em>
      </td>
      <td>
        <code>23:59</code><br /><code>12:15:47</code><br /><code
          >12:15:52.998</code
        >
      </td>
    </tr>
    <tr>
      <td>有効なローカル日時文字列</td>
      <td>
        <em>YYYY</em><code>-</code><em>MM</em><code>-</code><em>DD</em>
        <em>HH</em><code>:</code><em>MM</em><br /><em>YYYY</em><code>-</code
        ><em>MM</em><code>-</code><em>DD</em> <em>HH</em><code>:</code
        ><em>MM</em><code>:</code><em>SS</em><br /><em>YYYY</em><code>-</code
        ><em>MM</em><code>-</code><em>DD</em> <em>HH</em><code>:</code
        ><em>MM</em><code>:</code><em>SS</em><code>.</code><em>mmm</em><br /><em
          >YYYY</em
        ><code>-</code><em>MM</em><code>-</code><em>DD</em><code>T</code
        ><em>HH</em><code>:</code><em>MM</em><br /><em>YYYY</em><code>-</code
        ><em>MM</em><code>-</code><em>DD</em><code>T</code><em>HH</em
        ><code>:</code><em>MM</em><code>:</code><em>SS</em><br /><em>YYYY</em
        ><code>-</code><em>MM</em><code>-</code><em>DD</em><code>T</code
        ><em>HH</em><code>:</code><em>MM</em><code>:</code><em>SS</em
        ><code>.</code><em>mmm</em>
      </td>
      <td>
        <code
          >2013-12-25 11:12<br />1972-07-25 13:43:07<br />1941-03-15
          07:06:23.678<br />2013-12-25T11:12<br />1972-07-25T13:43:07<br />1941-03-15T07:06:23.678</code
        >
      </td>
    </tr>
    <tr>
      <td>有効なタイムゾーンオフセット文字列</td>
      <td>
        <code>Z</code><br /><code>+</code><em>HHMM</em><br /><code>+</code
        ><em>HH</em><code>:</code><em>MM</em><br /><code>-</code><em>HHMM</em
        ><br /><code>-</code><em>HH</em><code>:</code><em>MM</em>
      </td>
      <td>
        <code>Z<br />+0200<br />+04:30<br />-0300<br />-08:00</code>
      </td>
    </tr>
    <tr>
      <td>有効なグローバル日時文字列</td>
      <td>
        <em
          >有効な日時文字列と有効なタイムゾーンオフセット文字列が続く任意の組み合わせ。</em
        >
      </td>
      <td>
        <code
          >2013-12-25 11:12+0200<br />1972-07-25 13:43:07+04:30<br />1941-03-15
          07:06:23.678Z<br />2013-12-25T11:12-08:00</code
        >
      </td>
    </tr>
    <tr>
      <td>有効な週文字列</td>
      <td><em>YYYY</em><code>-W</code><em>WW</em></td>
      <td><code>2013-W46</code></td>
    </tr>
    <tr>
      <td>4 桁以上の ASCII 数字</td>
      <td><em>YYYY</em></td>
      <td><code>2013</code>, <code>0001</code></td>
    </tr>
    <tr>
      <td>有効な期間文字列</td>
      <td>
        <code>P</code><em>d</em><code>D</code><code>T</code><em>h</em
        ><code>H</code><em>m</em><code>M</code><em>s</em><code>S</code
        ><br /><code>P</code><em>d</em><code>D</code><code>T</code><em>h</em
        ><code>H</code><em>m</em><code>M</code><em>s</em><code>.</code>X<code
          >S</code
        ><br /><code>P</code><em>d</em><code>D</code><code>T</code><em>h</em
        ><code>H</code><em>m</em><code>M</code><em>s</em><code>.</code>XX<code
          >S</code
        ><br /><code>P</code><em>d</em><code>D</code><code>T</code><em>h</em
        ><code>H</code><em>m</em><code>M</code><em>s</em><code>.</code>XXX<code
          >S</code
        ><br /><code>P</code><code>T</code><em>h</em><code>H</code><em>m</em
        ><code>M</code><em>s</em><code>S</code><br /><code>P</code><code>T</code
        ><em>h</em><code>H</code><em>m</em><code>M</code><em>s</em
        ><code>.</code>X<code>S</code><br /><code>P</code><code>T</code
        ><em>h</em><code>H</code><em>m</em><code>M</code><em>s</em
        ><code>.</code>XX<code>S</code><br /><code>P</code><code>T</code
        ><em>h</em><code>H</code><em>m</em><code>M</code><em>s</em
        ><code>.</code>XXX<code>S</code><br /><em>w</em><code>w </code><em>d</em
        ><code>d </code><em>h</em><code>h </code><em>m</em><code>m </code
        ><em>s</em><code>s</code>
      </td>
      <td>
        <code
          >P12DT7H12M13S<br />P12DT7H12M13.3S<br />P12DT7H12M13.45S<br />P12DT7H12M13.455S<br />PT7H12M13S<br />PT7H12M13.2S<br />PT7H12M13.56S<br />PT7H12M13.999S<br />7d
          5h 24m 13s</code
        >
      </td>
    </tr>
  </tbody>
</table>

## 値

文字列です。

## 例

```js
// HTML に <time id="t"> 要素があると仮定する

const t = document.getElementById("t");
t.dateTime = "6w 5h 34m 5s";
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 所属先の {{domxref("HTMLTimeElement")}} インターフェイス
