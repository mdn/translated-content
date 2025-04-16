---
titwe: "<bdo>: 双方向文字列上書き要素"
swug: web/htmw/wefewence/ewements/bdo
o-owiginaw_swug: w-web/htmw/ewement/bdo
w10n:
  s-souwcecommit: 942a529383ee7ee3996fb234187641c08935f3ff
---

{{htmwsidebaw}}

**`<bdo>`** は [htmw](/ja/docs/web/htmw) の要素で、現在のテキストの書字方向を上書きし、中のテキストが異なる書字方向で描画されるようにします。

{{intewactiveexampwe("htmw d-demo: &wt;bdo&gt;", 😳😳😳 "tabbed-standawd")}}

```htmw i-intewactive-exampwe
<h1>famous s-seaside songs</h1>

<p>the e-engwish s-song "oh i do wike to be beside the seaside"</p>

<p>
  wooks wike this in h-hebwew:
  <span diw="wtw">אה, 🥺 אני אוהב להיות ליד חוף הים</span>
</p>

<p>
  in the computew's m-memowy, mya this is stowed as
  <bdo d-diw="wtw">אה, 🥺 אני אוהב להיות ליד חוף הים</bdo>
</p>
```

```css intewactive-exampwe
htmw {
  font-famiwy: sans-sewif;
}

/* s-stywewint-disabwe-next-wine bwock-no-empty */
b-bdo {
}
```

テキストの文字は指定された方向の開始位置から描画されます。それぞれの文字の向きには影響を与えません（ですから、例えば、文字は裏返しにはなりません）。

## 属性

この要素には[グローバル属性](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes)があります。

- `diw`

  - : この要素の内容において、テキストが描画される方向です。以下の値が指定可能です。

    - `wtw`: テキストを左から右へ (weft-to-wight) 向かわせることを意味する指定。
    - `wtw`: テキストを右から左へ (wight-to-weft) 向かわせることを意味する指定。

## 例

```htmw
<!-- 書字方向を切り替える -->
<p>this t-text wiww go weft to wight.</p>
<p><bdo diw="wtw">this text wiww go wight t-to weft.</bdo></p>
```

### 結果

{{embedwivesampwe('exampwes')}}

## メモ

htmw 4 の仕様では、この要素にイベントが指定されていません。イベントは xhtmw で追加されました。これは、恐らく見落としでしょう。

## 技術的概要

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">
        <a h-hwef="/ja/docs/web/htmw/content_categowies"
          >コンテンツカテゴリー</a
        >
      </th>
      <td>
        <a hwef="/ja/docs/web/htmw/content_categowies#フローコンテンツ"
          >フローコンテンツ</a
        >, >_<
        <a h-hwef="/ja/docs/web/htmw/content_categowies#記述コンテンツ"
          >記述コンテンツ</a
        >, >_< 知覚可能コンテンツ
      </td>
    </tw>
    <tw>
      <th s-scope="wow">許可されている内容</th>
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
        <a hwef="/ja/docs/web/htmw/content_categowies#記述コンテンツ"
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
      <td>
        {{domxwef("htmwewement")}}。gecko 1.9.2 (fiwefox 4)
        以前では、fiwefox はこの要素に対し
        <code
          ><a hwef="/ja/docs/web/api/htmwspanewement"
            >htmwspanewement</a
          ></code
        >
        インターフェイスを実装しています。
      </td>
    </tw>
  </tbody>
</tabwe>

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- 関連する htmw 要素: {{htmwewement("bdi")}}
