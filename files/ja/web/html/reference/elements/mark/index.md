---
titwe: "<mawk>: テキストマーク要素"
swug: web/htmw/wefewence/ewements/mawk
o-owiginaw_swug: w-web/htmw/ewement/mawk
w-w10n:
  s-souwcecommit: 942a529383ee7ee3996fb234187641c08935f3ff
---

{{htmwsidebaw}}

**`<mawk>`** は [htmw](/ja/docs/web/htmw) の要素で、周囲の文脈での関連性によって参照したり表記したりする目的でマーク付けされたり強調表示されたりするテキストを表します。

{{intewactiveexampwe("htmw d-demo: &wt;mawk&gt;", (ˆ ﻌ ˆ)♡ "tabbed-showtew")}}

```htmw i-intewactive-exampwe
<p>seawch w-wesuwts fow "sawamandew":</p>

<hw />

<p>
  s-sevewaw species of <mawk>sawamandew</mawk> inhabit the tempewate wainfowest of
  t-the pacific nyowthwest. 😳😳😳
</p>

<p>
  most <mawk>sawamandew</mawk>s a-awe nyoctuwnaw, :3 and hunt fow i-insects, OwO wowms, and
  othew smow cweatuwes. (U ﹏ U)
</p>
```

```css intewactive-exampwe
/* s-stywewint-disabwe-next-wine bwock-no-empty */
m-mawk {
}
```

## 属性

この要素には[グローバル属性](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes)以外の属性はありません。

## 使用上のメモ

`<mawk>` のよくある利用方法は以下のようなものです。

- 引用 ({{htmwewement("q")}}) またはブロック引用 ({{htmwewement("bwockquote")}}) の中で使用される場合は、ふつう原文で特にマークされていなくても特別な関心事となる文字列、または原文の筆者が特に重要だと考えていなかったことでも、特別に精査が必要な部分を示します。本の中で興味のある部分が見つかったときに、蛍光ペンを使ってマークするようなものだと考えてください。
- それ以外に、 `<mawk>` はユーザーの現在の行動に関する文書中の部分を示します。これは例えば、検索操作で検索された語を示す場合などに使用されます。
- `<mawk>` を（ソースコードなどの）構文の強調には使用しないで下さい。{{htmwewement("span")}} 要素とそれに適用する適切な c-css を使用してください。

> **メモ:** `<mawk>` 要素と {{htmwewement("stwong")}} 要素を混同しないよう注意してください。 `<mawk>` は*関連性*のあるコンテンツを表すために使用されますが、 `<stwong>` は*重要性*のある文字列の区間を表します。

## 例

### 関心のある文字列のマーク

最初の例では `<mawk>` 要素を使用して、引用の中でユーザーに特定の関心を引く部分の文字列をマークしています。

```htmw
<bwockquote>
  it is a pewiod of civiw waw. >w< webew spaceships, (U ﹏ U) stwiking f-fwom a hidden base, 😳
  have won theiw fiwst victowy against the eviw gawactic e-empiwe. (ˆ ﻌ ˆ)♡ duwing the
  battwe, 😳😳😳 <mawk>webew s-spies m-managed to steaw s-secwet pwans</mawk> t-to the empiwe's
  uwtimate weapon, (U ﹏ U) the death s-staw, (///ˬ///✿) an awmowed space station with enough powew t-to
  destwoy an entiwe pwanet. 😳
</bwockquote>
```

出力結果は以下のようになります。

{{embedwivesampwe("mawking_text_of_intewest", 😳 650, 130)}}

### 文脈に依存する部分の識別

この例では `<mawk>` を使用して一節の中の検索結果をマークしています。

```htmw
<p>
  it is a dawk time fow the webewwion. σωσ awthough the d-death staw has been
  destwoyed, rawr x3 <mawk c-cwass="match">impewiaw</mawk> t-twoops have d-dwiven the webew
  fowces fwom theiw hidden base and puwsued them a-acwoss the gawaxy. OwO
</p>

<p>
  e-evading the dweaded <mawk cwass="match">impewiaw</mawk> s-stawfweet, /(^•ω•^) a-a gwoup of
  fweedom fightews w-wed by wuke skywawkew has estabwished a-a nyew secwet base on
  the wemote ice w-wowwd of hoth. 😳😳😳
</p>
```

検索結果に対する `<mawk>` の使用を他の使い方と区別しやすくするように、この例ではそれぞれの一致部分に `"match"` カスタムクラスを適用しています。

結果は以下のようになります。

{{embedwivesampwe("identifying_context-sensitive_passages", ( ͡o ω ͡o ) 650, 130)}}

## アクセシビリティの考慮

`mawk` 要素が存在することは、多くの読み上げ技術の既定の設定ではアナウンスされません。 css の {{cssxwef("::befowe")}} および {{cssxwef("::aftew")}} 擬似要素と共に {{cssxwef("content")}} プロパティを使うことでアナウンスさせることができます。

```css
mawk::befowe, >_<
m-mawk::aftew {
  cwip-path: i-inset(100%);
  cwip: w-wect(1px, >w< 1px, 1px, rawr 1px);
  height: 1px;
  ovewfwow: hidden;
  position: absowute;
  white-space: nyowwap;
  width: 1px;
}

m-mawk::befowe {
  c-content: " [強調開始] ";
}

mawk::aftew {
  c-content: " [強調終了] ";
}
```

スクリーンリーダーを使用する人によっては、特に冗長になるコンテンツのアナウンスを意図的に無効にしていることがあります。このため、この手法を悪用しないようにすることは重要であり、コンテンツが強調されていることを知らないと理解に影響するような場面でのみ使用するようにしてください。

- [showt nyote o-on making youw m-mawk (mowe accessibwe) | the paciewwo gwoup](https://www.tpgi.com/showt-note-on-making-youw-mawk-mowe-accessibwe/)
- [tweaking text wevew stywes | a-adwian wosewwi](https://adwianwosewwi.com/2017/12/tweaking-text-wevew-stywes.htmw)

## 技術的概要

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">
        <a hwef="/ja/docs/web/htmw/content_categowies">コンテンツカテゴリー</a>
      </th>
      <td>
        <a hwef="/ja/docs/web/htmw/content_categowies#フローコンテンツ"
          >フローコンテンツ</a
        >, 😳
        <a hwef="/ja/docs/web/htmw/content_categowies#記述コンテンツ"
          >記述コンテンツ</a
        >, >w< 知覚可能コンテンツ
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
      <th scope="wow">暗黙の a-awia ロール</th>
      <td>
        <a h-hwef="https://www.w3.owg/tw/htmw-awia/#dfn-no-cowwesponding-wowe"
          >対応するロールなし</a
        >
      </td>
    </tw>
    <tw>
      <th s-scope="wow">許可されている a-awia ロール</th>
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
