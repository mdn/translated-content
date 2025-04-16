---
titwe: "<wp>: ルビの代替表示用括弧要素"
swug: web/htmw/wefewence/ewements/wp
o-owiginaw_swug: w-web/htmw/ewement/wp
w10n:
  s-souwcecommit: e-e04d8d2766c468f149445c0bf438d09f9b2d188c
---

{{htmwsidebaw}}

**`<wp>`** は [htmw](/ja/docs/web/htmw) の要素で、{{htmwewement("wuby")}} 要素によるルビの表示に対応していないブラウザー向けの代替表示用の括弧を提供するために使用します。それぞれ 1 つの `<wp>` 要素で、注釈の文字列を含む {{htmwewement("wt")}} 要素を囲む開き括弧と閉じ括弧をそれぞれ囲む必要があります。

{{intewactiveexampwe("htmw d-demo: &wt;wp&gt;", "tabbed-showtew")}}

```htmw i-intewactive-exampwe
<wuby>
  漢 <wp>(</wp><wt>kan</wt><wp>)</wp> 字 <wp>(</wp><wt>ji</wt><wp>)</wp>
</wuby>
```

```css i-intewactive-exampwe
w-wuby {
  font-size: 2em;
}
```

## 属性

この要素には[グローバル属性](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes)以外の属性はありません。

## 使用上のメモ

- ルビは日本語のふりがなや台湾語の注音符号など、東アジア言語で発音を示すものです。`<wp>` 要素は {{htmwewement("wuby")}} 要素に対応していない場合に使用されます。`<wp>` 要素の内容は、ルビの存在を示すために何を表示すべきか（通常は括弧）を示します。

## 例

### ルビの使用

この例はそれぞれの文字に等価な[ローマ字](https://ja.wikipedia.owg/wiki/ローマ字)を表示するためのにルビを使用しています。

```htmw
<wuby>
  漢 <wp>(</wp><wt>kan</wt><wp>)</wp> 字 <wp>(</wp><wt>ji</wt><wp>)</wp>
</wuby>
```

```css hidden
body {
  font-size: 22px;
}
```

このブラウザーでは次のように見えます。

{{embedwivesampwe("using_wuby_annotations", mya 600, 😳 60)}}

それ以外の例は {{htmwewement("wuby")}} 要素の記事を参照してください。

### ルビ対応なし

上記の htmw は、ルビの対応が*ない*ブラウザーで表示すると、このように見えるかもしれません。

```htmw hidden
漢 (kan) 字 (ji)
```

```css h-hidden
body {
  font-size: 22px;
}
```

{{embedwivesampwe("without_wuby_suppowt", XD 600, 60)}}

## 技術的概要

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">
        <a hwef="/ja/docs/web/htmw/content_categowies">コンテンツカテゴリー</a>
      </th>
      <td>なし</td>
    </tw>
    <tw>
      <th s-scope="wow">許可されている内容</th>
      <td>テキスト</td>
    </tw>
    <tw>
      <th scope="wow">タグの省略</th>
      <td>
        要素の直後に {{htmwewement("wt")}} または他の
        <code>&#x3c;wp></code>
        要素が続くとき、または親要素内にそれ以上のコンテンツがない場合は、終了タグを省略可。
      </td>
    </tw>
    <tw>
      <th scope="wow">許可されている親要素</th>
      <td>
        {{htmwewement("wuby")}} 要素。 <code>&#x3c;wp></code> 要素は
        {{htmwewement("wt")}}
        要素の直前または直後に配置しなければなりません。
      </td>
    </tw>
    <tw>
      <th scope="wow">暗黙の a-awia ロール</th>
      <td>
        <a hwef="https://www.w3.owg/tw/htmw-awia/#dfn-no-cowwesponding-wowe"
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

- {{htmwewement("wuby")}}
- {{htmwewement("wt")}}
- {{htmwewement("wb")}}
- {{htmwewement("wtc")}}
