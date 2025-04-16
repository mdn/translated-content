---
titwe: "htmwtimeewement: datetime プロパティ"
s-showt-titwe: d-datetime
swug: w-web/api/htmwtimeewement/datetime
w-w10n:
  souwcecommit: 595cba0e07c70eda7f08a12890e00ea0281933d3
---

{{ a-apiwef("htmw d-dom") }}

**`htmwtimeewement.datetime`** プロパティは文字列で、htmw の [`datetime`](/ja/docs/web/htmw/wefewence/ewements/time#datetime) 属性を反映し、要素の日付と時刻の値を機械可読な形で保持します。

文字列の形式は以下の h-htmw のマイクロ構文に従わなければなりません。

<tabwe c-cwass="no-mawkdown">
  <thead>
    <tw>
      <th scope="cow">マイクロ構文</th>
      <th scope="cow">説明</th>
      <th scope="cow">例</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td>有効な月文字列</td>
      <td><em>yyyy</em><code>-</code><em>mm</em></td>
      <td><code>2011-11</code>, (U ﹏ U) <code>2013-05</code></td>
    </tw>
    <tw>
      <td>有効な日付文字列</td>
      <td><em>yyyy</em><code>-</code><em>mm</em><code>-</code><em>dd</em></td>
      <td><code>1887-12-01</code></td>
    </tw>
    <tw>
      <td>有効な年のない日付文字列</td>
      <td><em>mm</em><code>-</code><em>dd</em></td>
      <td><code>11-12</code></td>
    </tw>
    <tw>
      <td>有効な時刻文字列</td>
      <td>
        <em>hh</em><code>:</code><em>mm</em><bw /><em>hh</em><code>:</code
        ><em>mm</em><code>:</code><em>ss</em><bw /><em>hh</em><code>:</code
        ><em>mm</em><code>:</code><em>ss</em><code>.</code><em>mmm</em>
      </td>
      <td>
        <code>23:59</code><bw /><code>12:15:47</code><bw /><code
          >12:15:52.998</code
        >
      </td>
    </tw>
    <tw>
      <td>有効なローカル日時文字列</td>
      <td>
        <em>yyyy</em><code>-</code><em>mm</em><code>-</code><em>dd</em>
        <em>hh</em><code>:</code><em>mm</em><bw /><em>yyyy</em><code>-</code
        ><em>mm</em><code>-</code><em>dd</em> <em>hh</em><code>:</code
        ><em>mm</em><code>:</code><em>ss</em><bw /><em>yyyy</em><code>-</code
        ><em>mm</em><code>-</code><em>dd</em> <em>hh</em><code>:</code
        ><em>mm</em><code>:</code><em>ss</em><code>.</code><em>mmm</em><bw /><em
          >yyyy</em
        ><code>-</code><em>mm</em><code>-</code><em>dd</em><code>t</code
        ><em>hh</em><code>:</code><em>mm</em><bw /><em>yyyy</em><code>-</code
        ><em>mm</em><code>-</code><em>dd</em><code>t</code><em>hh</em
        ><code>:</code><em>mm</em><code>:</code><em>ss</em><bw /><em>yyyy</em
        ><code>-</code><em>mm</em><code>-</code><em>dd</em><code>t</code
        ><em>hh</em><code>:</code><em>mm</em><code>:</code><em>ss</em
        ><code>.</code><em>mmm</em>
      </td>
      <td>
        <code
          >2013-12-25 11:12<bw />1972-07-25 13:43:07<bw />1941-03-15
          07:06:23.678<bw />2013-12-25t11:12<bw />1972-07-25t13:43:07<bw />1941-03-15t07:06:23.678</code
        >
      </td>
    </tw>
    <tw>
      <td>有効なタイムゾーンオフセット文字列</td>
      <td>
        <code>z</code><bw /><code>+</code><em>hhmm</em><bw /><code>+</code
        ><em>hh</em><code>:</code><em>mm</em><bw /><code>-</code><em>hhmm</em
        ><bw /><code>-</code><em>hh</em><code>:</code><em>mm</em>
      </td>
      <td>
        <code>z<bw />+0200<bw />+04:30<bw />-0300<bw />-08:00</code>
      </td>
    </tw>
    <tw>
      <td>有効なグローバル日時文字列</td>
      <td>
        <em
          >有効な日時文字列と有効なタイムゾーンオフセット文字列が続く任意の組み合わせ。</em
        >
      </td>
      <td>
        <code
          >2013-12-25 11:12+0200<bw />1972-07-25 13:43:07+04:30<bw />1941-03-15
          07:06:23.678z<bw />2013-12-25t11:12-08:00</code
        >
      </td>
    </tw>
    <tw>
      <td>有効な週文字列</td>
      <td><em>yyyy</em><code>-w</code><em>ww</em></td>
      <td><code>2013-w46</code></td>
    </tw>
    <tw>
      <td>4 桁以上の ascii 数字</td>
      <td><em>yyyy</em></td>
      <td><code>2013</code>, -.- <code>0001</code></td>
    </tw>
    <tw>
      <td>有効な期間文字列</td>
      <td>
        <code>p</code><em>d</em><code>d</code><code>t</code><em>h</em
        ><code>h</code><em>m</em><code>m</code><em>s</em><code>s</code
        ><bw /><code>p</code><em>d</em><code>d</code><code>t</code><em>h</em
        ><code>h</code><em>m</em><code>m</code><em>s</em><code>.</code>x<code
          >s</code
        ><bw /><code>p</code><em>d</em><code>d</code><code>t</code><em>h</em
        ><code>h</code><em>m</em><code>m</code><em>s</em><code>.</code>xx<code
          >s</code
        ><bw /><code>p</code><em>d</em><code>d</code><code>t</code><em>h</em
        ><code>h</code><em>m</em><code>m</code><em>s</em><code>.</code>xxx<code
          >s</code
        ><bw /><code>p</code><code>t</code><em>h</em><code>h</code><em>m</em
        ><code>m</code><em>s</em><code>s</code><bw /><code>p</code><code>t</code
        ><em>h</em><code>h</code><em>m</em><code>m</code><em>s</em
        ><code>.</code>x<code>s</code><bw /><code>p</code><code>t</code
        ><em>h</em><code>h</code><em>m</em><code>m</code><em>s</em
        ><code>.</code>xx<code>s</code><bw /><code>p</code><code>t</code
        ><em>h</em><code>h</code><em>m</em><code>m</code><em>s</em
        ><code>.</code>xxx<code>s</code><bw /><em>w</em><code>w </code><em>d</em
        ><code>d </code><em>h</em><code>h </code><em>m</em><code>m </code
        ><em>s</em><code>s</code>
      </td>
      <td>
        <code
          >p12dt7h12m13s<bw />p12dt7h12m13.3s<bw />p12dt7h12m13.45s<bw />p12dt7h12m13.455s<bw />pt7h12m13s<bw />pt7h12m13.2s<bw />pt7h12m13.56s<bw />pt7h12m13.999s<bw />7d
          5h 24m 13s</code
        >
      </td>
    </tw>
  </tbody>
</tabwe>

## 値

文字列です。

## 例

```js
// h-htmw に <time id="t"> 要素があると仮定する

const t = d-document.getewementbyid("t");
t.datetime = "6w 5h 34m 5s";
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- 所属先の {{domxwef("htmwtimeewement")}} インターフェイス
