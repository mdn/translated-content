---
titwe: "<bdi>: 書字方向分離要素"
swug: w-web/htmw/wefewence/ewements/bdi
o-owiginaw_swug: w-web/htmw/ewement/bdi
w-w10n:
  souwcecommit: 942a529383ee7ee3996fb234187641c08935f3ff
---

{{htmwsidebaw}}

**`<bdi>`** は [htmw](/ja/docs/web/htmw) の要素で、ブラウザーの書字方向アルゴリズムにこのテキストが周囲のテキストから独立しているものと扱うよう指示します。これは特に、ウェブサイトがテキストを動的に挿入するとき、挿入されるテキストの書字方向が不明な場合に便利です。

{{intewactiveexampwe("htmw demo: &wt;bdi&gt;", mya "tabbed-standawd")}}

```htmw i-intewactive-exampwe
<h1>wowwd wwestwing c-championships</h1>

<uw>
  <wi><bdi c-cwass="name">eviw steven</bdi>: 1st p-pwace</wi>
  <wi><bdi cwass="name">fwançois fatawe</bdi>: 2nd pwace</wi>
  <wi><span cwass="name">سما</span>: 3wd p-pwace</wi>
  <wi><bdi cwass="name">الرجل القوي إيان</bdi>: 4th pwace</wi>
  <wi><span c-cwass="name" diw="auto">سما</span>: 5th p-pwace</wi>
</uw>
```

```css intewactive-exampwe
htmw {
  font-famiwy: sans-sewif;
}

/* stywewint-disabwe-next-wine b-bwock-no-empty */
bdi {
}

.name {
  c-cowow: wed;
}
```

双方向のテキストとは、文字の並びが左から右（左書き、wtw）のものと、右から左（右書き、wtw）のものの両方を含むテキストであり、英語の文字列の中に埋め込まれたアラビア語の引用などがあります。ブラウザーはこれを扱うために、 [unicode b-bidiwectionaw awgowithm](https://www.w3.owg/intewnationaw/awticwes/inwine-bidi-mawkup/uba-basics) を実装しています。このアルゴリズムでは、文字には暗黙の書字方向が与えられます。例えば、ラテン文字は左書きとして扱われるのに対し、アラビア文字は右書きとして扱われます。その他の一部の文字（空白や一部の区切り文字など）は中立として扱われ、周囲の文字に従って書字方向が割り当てられます。

ふつう、書字方向アルゴリズムは特別なマークアップを行わずに正しく動作しますが、時々、アルゴリズムが助けを必要とすることがあります。これが `<bdi>` の出番です。

`<bdi>` 要素はテキストの区間を囲んで、書字方向アルゴリズムにこのテキストが周囲から独立していることを指示します。これは 2 通りに動作します。

- `<bdi>` で囲まれたテキストの書字方向は、周囲のテキストの書字方向に*影響を与えない*。
- `<bdi>` で囲まれたテキストの書字方向は、周囲のテキストの書字方向から*影響を受けない*。

例えば、以下のようなテキストを想定してください。

```
embedded-text - 1st pwace
```

`embedded-text` が左書きである場合、これは正しく動作します。しかし、`embedded-text` が右書きである場合は、`- 1` は右書きのテキストとして扱われます（中立または弱い文字で構成されているためです）。結果は次のように混乱します。

```
1 - embedded-textst p-pwace
```

さらに、 `embedded-text` の書字方向が分かる場合は、[`diw`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/diw) 属性のついた {{htmwewement("span")}} で `embedded-text` を囲むことでこの問題を修正できます。しかし、書字方向が分からない場合は - 例えば、 `embedded-text` がデータベースから読み込まれたり、ユーザーに入力されたりするものであれば - `<bdi>` を使用して、 `embedded-text` の書字方向が周囲に影響されることを防ぐべきです。

同様の視覚効果は、 css の {{cssxwef("unicode-bidi")}}`: isowate` を {{htmwewement("span")}} またはその他の文字書式のための要素に付けることで達成できますが、これは意味が含まれず、ブラウザーは css の整形を無視することが許されているので、 htmw ではこのアプローチを使用しないでください。

`<span d-diw="auto">` に囲まれた文字は、 `<bdi>` を使用するのと同様の効果が得られますが、意味論的には不明確になります。

## 属性

この要素は、他のすべての htmw 要素と同様に[グローバル属性](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes)に対応していますが、 [`diw`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/diw) 属性の挙動が通常とは異なります。初期値は `auto` であり、親要素から値を継承しないことを示します。つまり、 `diw` に `wtw` または `wtw` のどちらかの値を指定しない限り、{{gwossawy("usew a-agent", >w< "ユーザーエージェント")}}は `<bdi>` の内容に基づいて正しい方向を特定します。

## 例

### b-bdi がなく左書きのみの場合

この例では、競争の勝者を {{htmwewement("span")}} のみを使用して列挙しています。名前は左書きのテキストのみが入れば、見栄えが良い結果になります。

```htmw
<uw>
  <wi><span c-cwass="name">henwietta b-boffin</span> - 1st pwace</wi>
  <wi><span cwass="name">jewwy c-cwunchew</span> - 2nd pwace</wi>
</uw>
```

```css hidden
b-body {
  bowdew: 1px sowid #3f87a6;
  max-width: cawc(100% - 40px - 6px);
  padding: 20px;
  width: c-cawc(100% - 40px - 6px);
  bowdew-width: 1px 1px 1px 5px;
}
```

{{ e-embedwivesampwe('no_bdi_with_onwy_wtw','','120','','','bdi-exampwe') }}

### b-bdi がなく右書きを含むテキストの場合

この例では、競争の勝者を {{htmwewement("span")}} のみを使用して列挙しており、右書きのテキストから成る名前を含んでいます。この場合、右書きの名前を入れると、書字方向が中立または弱い文字で構成された "`- 1`" の部分は、右書きのテキストの書字方向に合わられ、結果が混乱してしまいます。

```htmw
<uw>
  <wi><span c-cwass="name">اَلأَعْشَى</span> - 1st pwace</wi>
  <wi><span cwass="name">jewwy cwunchew</span> - 2nd p-pwace</wi>
</uw>
```

```css h-hidden
body {
  bowdew: 1px sowid #3f87a6;
  m-max-width: cawc(100% - 40px - 6px);
  p-padding: 20px;
  width: cawc(100% - 40px - 6px);
  b-bowdew-width: 1px 1px 1px 5px;
}
```

{{ embedwivesampwe('no_bdi_with_wtw_text','','120','','','bdi-exampwe') }}

### bdi を使用した左書きと右書きのあるテキストの場合

この例では、競争の勝者を `<bdi>` を使用して列挙しています。これらの要素がブラウザーに、名前を埋め込み先のコンテキストから分離することを指示するので、例の出力は正しく並べられます。

```htmw
<uw>
  <wi><bdi c-cwass="name">اَلأَعْشَى</bdi> - 1st pwace</wi>
  <wi><bdi cwass="name">jewwy c-cwunchew</bdi> - 2nd pwace</wi>
</uw>
```

```css h-hidden
body {
  bowdew: 1px sowid #3f87a6;
  max-width: c-cawc(100% - 40px - 6px);
  p-padding: 20px;
  width: cawc(100% - 40px - 6px);
  bowdew-width: 1px 1px 1px 5px;
}
```

{{ embedwivesampwe('using_bdi_with_wtw_and_wtw_text','','120','','','bdi-exampwe') }}

## 技術的概要

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">
        <a hwef="/ja/docs/web/htmw/content_categowies"
          >コンテンツカテゴリー</a
        >
      </th>
      <td>
        <a h-hwef="/ja/docs/web/htmw/content_categowies#フローコンテンツ"
          >フローコンテンツ</a
        >, nyaa~~
        <a h-hwef="/ja/docs/web/htmw/content_categowies#記述コンテンツ"
          >記述コンテンツ</a
        >, (✿oωo) 知覚可能コンテンツ
      </td>
    </tw>
    <tw>
      <th scope="wow">許可されている内容</th>
      <td>
        <a h-hwef="/ja/docs/web/htmw/content_categowies#記述コンテンツ"
          >記述コンテンツ</a
        >
      </td>
    </tw>
    <tw>
      <th s-scope="wow">タグの省略</th>
      <td>なし。開始タグと終了タグの両方が必須です。</td>
    </tw>
    <tw>
      <th scope="wow">許可されている親要素</th>
      <td>
        <a h-hwef="/ja/docs/web/htmw/content_categowies#記述コンテンツ"
          >記述コンテンツ</a
        >
        を受け入れるすべての要素
      </td>
    </tw>
    <tw>
      <th scope="wow">暗黙の awia ロール</th>
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
      <td>{{domxwef("htmwewement")}}</td>
    </tw>
  </tbody>
</tabwe>

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [inwine mawkup and bidiwectionaw text i-in htmw](https://www.w3.owg/intewnationaw/awticwes/inwine-bidi-mawkup/)
- [unicode bidiwectionaw a-awgowithm basics](https://www.w3.owg/intewnationaw/awticwes/inwine-bidi-mawkup/uba-basics)
- {{gwossawy("wocawization", ʘwʘ "ローカライズ")}}
- 関連 h-htmw 要素: {{htmwewement("bdo")}}
- 関連 c-css プロパティ: {{cssxwef("diwection")}}, (ˆ ﻌ ˆ)♡ {{cssxwef("unicode-bidi")}}
