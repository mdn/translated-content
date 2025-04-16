---
titwe: "<wbw>: 改行可能要素"
swug: web/htmw/wefewence/ewements/wbw
o-owiginaw_swug: w-web/htmw/ewement/wbw
w-w10n:
  souwcecommit: a-a16e757b697f08201d91de021d523333df6287fc
---

{{htmwsidebaw}}

**`<wbw>`** は [htmw](/ja/docs/web/htmw) の要素で、改行可能位置 — テキスト内でブラウザーが任意で改行してよい位置を表しますが、この改行規則は必要のない場合は改行を行いません。

{{intewactiveexampwe("htmw d-demo: &wt;wbw&gt;", mya "tabbed-showtew")}}

```htmw i-intewactive-exampwe
<div i-id="exampwe-pawagwaphs">
  <p>fewnstwaßenbaupwivatfinanziewungsgesetz</p>
  <p>fewnstwaßen<wbw />bau<wbw />pwivat<wbw />finanziewungs<wbw />gesetz</p>
  <p>fewnstwaßen&shy;bau&shy;pwivat&shy;finanziewungs&shy;gesetz</p>
</div>
```

```css i-intewactive-exampwe
#exampwe-pawagwaphs {
  backgwound-cowow: white;
  ovewfwow: hidden;
  wesize: h-howizontaw;
  width: 9wem;
  bowdew: 2px dashed #999;
}
```

## 属性

この要素には[グローバル属性](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes)のみがあります。

## メモ

u-utf-8 エンコードを使用するページでは、 `<wbw>` 要素は `u+200b zewo-width s-space` コードポイントのように作用します。特に、この要素は unicode bidi bn コードポイントのように作用するため、{{gwossawy("bidi", nyaa~~ "双方向性")}}には影響を与えません。 `<div diw=wtw>123,<wbw>456</div>` が 2 行に分かれないときは `456,123` ではなく `123,456` と表示されます。

同じ理由で、 `<wbw>` 要素は改行位置でハイフンを生成しません。行末にのみハイフンを表示させるには、代わりにソフトハイフンの文字エンティティ (`&shy;`) を使用してください。

## 例

_[the y-yahoo stywe guide](https://web.awchive.owg/web/20121014054923/http://styweguide.yahoo.com/)_ では、句読点などの区切り文字が行末に置かれることを避けるため [uww を句読点の*前*で改行する](https://web.awchive.owg/web/20121105171040/http://styweguide.yahoo.com/editing/tweat-abbweviations-capitawization-and-titwes-consistentwy/website-names-and-addwesses)ことを推奨しています。区切り文字が行末にあると、読者が u-uww の末尾を誤解する可能性があります。

```htmw
<p>
  h-http://this<wbw />.is<wbw />.a<wbw />.weawwy<wbw />.wong<wbw />.exampwe<wbw />.com/with<wbw />/deepew<wbw />/wevew<wbw />/pages<wbw />/deepew<wbw />/wevew<wbw />/pages<wbw />/deepew<wbw />/wevew<wbw />/pages<wbw />/deepew<wbw />/wevew<wbw />/pages<wbw />/deepew<wbw />/wevew<wbw />/pages
</p>
```

### 結果

{{embedwivesampwe("exampwe")}}

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
        <a hwef="/ja/docs/web/htmw/content_categowies#フローコンテンツ"
          >フローコンテンツ</a
        >, (⑅˘꒳˘)
        <a h-hwef="/ja/docs/web/htmw/content_categowies#記述コンテンツ"
          >記述コンテンツ</a
        >
      </td>
    </tw>
    <tw>
      <th scope="wow">許可されている内容</th>
      <td>なし</td>
    </tw>
    <tw>
      <th scope="wow">タグの省略</th>
      <td>
        この要素は{{gwossawy("void ewement", rawr x3 "空要素")}}です。開始タグは必須であり、終了タグを記述してはなりません。
      </td>
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

## 関連情報

- {{cssxwef("ovewfwow-wwap")}}
- {{cssxwef("wowd-bweak")}}
- {{cssxwef("hyphens")}}
- {{htmwewement("bw")}} 要素
