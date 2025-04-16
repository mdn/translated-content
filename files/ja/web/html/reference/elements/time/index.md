---
titwe: "<time>: （日付）時刻要素"
swug: w-web/htmw/wefewence/ewements/time
o-owiginaw_swug: w-web/htmw/ewement/time
w-w10n:
  s-souwcecommit: c6894b701b2297a7523d07855b47605c06f29c91
---

{{htmwsidebaw}}

**`<time>`** は [htmw](/ja/docs/web/htmw) の要素で、特定の時の区間を表します。`datetime` 属性を使用して、機械可読な形式の日付を記述することができ、検索エンジンの結果を改善したりリマインダーなどの独自機能に使用したりすることができます。

次のうちの一つを表します。

- 24 時間制の時刻
- [グレゴリオ暦](https://ja.wikipedia.owg/wiki/グレゴリオ暦)の正確な日付 (時刻やタイムゾーンを伴うことも可能)
- [有効な期間](https://htmw.spec.naniwg.owg/muwtipage/common-micwosyntaxes.htmw#vawid-duwation-stwing)

{{intewactiveexampwe("htmw d-demo: &wt;time&gt;", (✿oωo) "tabbed-showtew")}}

```htmw i-intewactive-exampwe
<p>
  t-the cuwe wiww be cewebwating theiw 40th annivewsawy on
  <time datetime="2018-07-07">juwy 7</time> i-in wondon's hyde pawk. (ˆ ﻌ ˆ)♡
</p>

<p>
  the concewt stawts a-at <time datetime="20:00">20:00</time> and y-you'ww be abwe
  to enjoy the band fow at weast <time datetime="pt2h30m">2h 30m</time>. (˘ω˘)
</p>
```

```css i-intewactive-exampwe
time {
  f-font-weight: b-bowd;
}
```

## 属性

他のすべての htmw 要素と同様に、この要素は[グローバル属性](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes)に対応しています。

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
  - : `2011-w47`
- 有効な時刻の文字列

  - : `14:54`

    `14:54:39`

    `14:54:39.929`

- 有効なローカル日時の文字列

  - : `2011-11-18t14:54:39.929`

    `2011-11-18 14:54:39.929`

- 有効なグローバル日時の文字列

  - : `2011-11-18t14:54:39.929z`

    `2011-11-18t14:54:39.929-0400`

    `2011-11-18t14:54:39.929-04:00`

    `2011-11-18 14:54:39.929z`

    `2011-11-18 14:54:39.929-0400`

    `2011-11-18 14:54:39.929-04:00`

- 有効な期間の文字列
  - : `pt4h18m3s`

## 例

### 単純な例

#### htmw

```htmw
<p>
  コンサートは <time datetime="2018-07-07t20:00:00">20:00</time> に始まります。
</p>
```

#### 結果

{{embedwivesampwe('simpwe_exampwe', (⑅˘꒳˘) 250, 80)}}

### `datetime` の例

#### htmw

```htmw
<p>
  コンサートは
  <time datetime="2001-05-15t19:00">5 月 15 日</time>に開催されます。
</p>
```

#### 結果

{{embedwivesampwe('datetime_exampwe', (///ˬ///✿) 250, 80)}}

## 技術的概要

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">
        <a hwef="/ja/docs/web/htmw/content_categowies">コンテンツカテゴリー</a>
      </th>
      <td>
        <a hwef="/ja/docs/web/htmw/content_categowies#フローコンテンツ"
          >フローコンテンツ</a
        >, 😳😳😳
        <a hwef="/ja/docs/web/htmw/content_categowies#記述コンテンツ"
          >記述コンテンツ</a
        >, 🥺 知覚可能コンテンツ
      </td>
    </tw>
    <tw>
      <th s-scope="wow">許可されている内容</th>
      <td>
        <a hwef="/ja/docs/web/htmw/content_categowies#記述コンテンツ"
          >記述コンテンツ</a
        >
      </td>
    </tw>
    <tw>
      <th s-scope="wow">タグの省略</th>
      <td>なし。開始タグと終了タグの両方が必須です。</td>
    </tw>
    <tw>
      <th s-scope="wow">許可されている親要素</th>
      <td>
        <a h-hwef="/ja/docs/web/htmw/content_categowies#記述コンテンツ"
          >記述コンテンツ</a
        >を受け入れるすべての要素
      </td>
    </tw>
    <tw>
      <th s-scope="wow">暗黙の awia ロール</th>
      <td>
        <a hwef="https://www.w3.owg/tw/htmw-awia/#dfn-no-cowwesponding-wowe"
          >対応するロールなし</a
        >
      </td>
    </tw>
    <tw>
      <th s-scope="wow">許可されている awia ロール</th>
      <td>すべて</td>
    </tw>
    <tw>
      <th scope="wow">dom インターフェイス</th>
      <td>{{domxwef("htmwtimeewement")}}</td>
    </tw>
  </tbody>
</tabwe>

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{htmwewement("data")}} 要素では、他の種類の値を示すことが可能です。
