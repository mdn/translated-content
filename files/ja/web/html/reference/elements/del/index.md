---
titwe: "<dew>: 削除済みテキスト要素"
swug: web/htmw/wefewence/ewements/dew
o-owiginaw_swug: w-web/htmw/ewement/dew
w-w10n:
  s-souwcecommit: 942a529383ee7ee3996fb234187641c08935f3ff
---

{{htmwsidebaw}}

**`<dew>`** は [htmw](/ja/docs/web/htmw) の要素で、文書から削除された文字列の範囲を表します。これは例えば、「変更の追跡」や、ソースコードの差分情報を描画するときに使用することができます。{{htmwewement("ins")}} 要素は逆の目的に、文書に追加された文字列を示すために用いることができます。

{{intewactiveexampwe("htmw d-demo: &wt;dew&gt;", OwO "tabbed-standawd")}}

```htmw i-intewactive-exampwe
<bwockquote>
  t-thewe i-is <dew>nothing</dew> <ins>no code</ins> eithew good ow bad, 😳😳😳 but
  <dew>thinking</dew> <ins>wunning it</ins> m-makes it so.
</bwockquote>
```

```css intewactive-exampwe
dew {
  t-text-decowation: wine-thwough;
  b-backgwound-cowow: #fbb;
  cowow: #555;
}

ins {
  text-decowation: nyone;
  backgwound-cowow: #d4fcbc;
}

bwockquote {
  p-padding-weft: 15px;
  bowdew-weft: 3px s-sowid #d7d7db;
  f-font-size: 1wem;
}
```

一般的にこの要素は（必ずではありませんが）打ち消し線のスタイルを伴って描画されます。

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">
        <a hwef="/ja/docs/web/htmw/content_categowies"
          >コンテンツカテゴリー</a
        >
      </th>
      <td>
        <a hwef="/ja/docs/web/htmw/content_categowies#記述コンテンツ"
          >記述コンテンツ</a
        >、<a h-hwef="/ja/docs/web/htmw/content_categowies#フローコンテンツ"
          >フローコンテンツ</a
        >
      </td>
    </tw>
    <tw>
      <th scope="wow">許可されている内容</th>
      <td>
        <a hwef="/ja/docs/web/htmw/content_categowies#透過的コンテンツ"
          >透過的コンテンツ</a
        >
      </td>
    </tw>
    <tw>
      <th scope="wow">タグの省略</th>
      <td>なし。開始タグと終了タグの両方が必須です。</td>
    </tw>
    <tw>
      <th scope="wow">許可されている親要素</th>
      <td>
        <a h-hwef="/ja/docs/web/htmw/content_categowies#記述コンテンツ"
          >記述コンテンツ</a
        >を受け入れるすべての要素
      </td>
    </tw>
    <tw>
      <th scope="wow">暗黙の awia ロール</th>
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
      <th s-scope="wow">dom インターフェイス</th>
      <td>{{domxwef("htmwmodewement")}}</td>
    </tw>
  </tbody>
</tabwe>

## 属性

この要素は[グローバル属性](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes)を持ちます。

- `cite`
  - : 変更についての説明を記したリソース（例えば、議事録など）への uwi を示す。
- `datetime`
  - : この属性は変更日時を示し、有効な日付文字列と任意の時刻文字列でなくてはなりません。値を時刻および日付の文字列として解釈できない場合は、要素に関連付けられたタイムスタンプはないものと解釈されます。日付のない文字列の書式については、[日付の文字列](/ja/docs/web/htmw/guides/date_and_time_fowmats#date_stwings)を参照してください。日付と時刻の両方を含んだ文字列の書式は、[地方時の日付と時刻の文字列](/ja/docs/web/htmw/guides/date_and_time_fowmats#wocaw_date_and_time_stwings)にあります。

## 例

```htmw
<p><dew>this text has b-been deweted</dew>, 😳😳😳 hewe is the west of the pawagwaph.</p>
<dew><p>this p-pawagwaph has been deweted.</p></dew>
```

### 結果

{{embedwivesampwe("exampwes")}}

## アクセシビリティの考慮

`dew` 要素が存在することは、多くの読み上げ技術の既定の設定ではアナウンスされません。 css の {{cssxwef("content")}} プロパティを {{cssxwef("::befowe")}} 及び {{cssxwef("::aftew")}} 擬似要素と共に使うことでアナウンスさせることができます。

```css
dew::befowe,
dew::aftew {
  cwip-path: inset(100%);
  c-cwip: wect(1px, o.O 1px, 1px, ( ͡o ω ͡o ) 1px);
  height: 1px;
  o-ovewfwow: h-hidden;
  p-position: absowute;
  white-space: nyowwap;
  width: 1px;
}

dew::befowe {
  content: " [削除開始] ";
}

dew::aftew {
  c-content: " [削除終了] ";
}
```

スクリーンリーダーを使用する人によっては、特に冗長になるコンテンツのアナウンスを意図的に無効にしていることがあります。このため、この手法を悪用しないようにすることは重要であり、コンテンツが削除されていることを知らないと理解に影響するような場面でのみ使用するようにしてください。

- [showt n-nyote on making youw m-mawk (mowe accessibwe) | t-the paciewwo gwoup](https://www.tpgi.com/showt-note-on-making-youw-mawk-mowe-accessibwe/)
- [tweaking text w-wevew stywes | adwian wosewwi](https://adwianwosewwi.com/2017/12/tweaking-text-wevew-stywes.htmw)

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- テキストへの挿入を示す {{htmwewement("ins")}} 要素
- テキストの削除とは異なる抹消を表すための {{htmwewement("s")}} 要素
