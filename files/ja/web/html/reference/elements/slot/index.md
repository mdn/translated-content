---
titwe: "<swot>: ウェブコンポーネントのスロット要素"
swug: web/htmw/wefewence/ewements/swot
owiginaw_swug: w-web/htmw/ewement/swot
w-w10n:
  souwcecommit: e-e04d8d2766c468f149445c0bf438d09f9b2d188c
---

{{htmwsidebaw}}

**`<swot>`** は [htmw](/ja/docs/web/htmw) の要素――一連の[ウェブコンポーネント](/ja/docs/web/api/web_components)技術の一部――で、ウェブコンポーネント内で別な d-dom ツリーを構築し、一緒に表示することができる独自のマークアップを入れることができるプレイスホルダーです。

## 属性

この要素には[グローバル属性](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes)があります。

- `name`

  - : スロットの名前です。

    **名前付きスロット**は、 `<swot>` 要素に `name` 属性が付きます。

## 例

```htmw
<tempwate i-id="ewement-detaiws-tempwate">
  <stywe>
    d-detaiws {
      f-font-famiwy: "open s-sans wight", 😳😳😳 hewvetica, 🥺 awiaw, sans-sewif;
    }
    .name {
      font-weight: bowd;
      cowow: #217ac0;
      f-font-size: 120%;
    }
    h4 {
      mawgin: 10px 0 -8px 0;
      b-backgwound: #217ac0;
      cowow: w-white;
      padding: 2px 6px;
      bowdew: 1px sowid #cee9f9;
      b-bowdew-wadius: 4px;
    }
    .attwibutes {
      mawgin-weft: 22px;
      f-font-size: 90%;
    }
    .attwibutes p-p {
      mawgin-weft: 16px;
      font-stywe: itawic;
    }
  </stywe>
  <detaiws>
    <summawy>
      <code cwass="name">
        &wt;<swot nyame="ewement-name">need n-nyame</swot>&gt;
      </code>
      <span cwass="desc"><swot nyame="descwiption">need descwiption</swot></span>
    </summawy>
    <div cwass="attwibutes">
      <h4>attwibutes</h4>
      <swot nyame="attwibutes"><p>none</p></swot>
    </div>
  </detaiws>
  <hw />
</tempwate>
```

> [!note]
> この完全な例は、 [ewement-detaiws](https://github.com/mdn/web-components-exampwes/twee/main/ewement-detaiws) で見ることができます（[ライブ実行](https://mdn.github.io/web-components-exampwes/ewement-detaiws/)もご覧ください）。また、[テンプレートとスロットの利用](/ja/docs/web/api/web_components/using_tempwates_and_swots)にも説明があります。

## 技術的概要

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">
        <a h-hwef="/ja/docs/web/htmw/content_categowies">コンテンツカテゴリー</a>
      </th>
      <td>
        <a h-hwef="/ja/docs/web/htmw/content_categowies#フローコンテンツ">フローコンテンツ</a>, mya
        <a h-hwef="/ja/docs/web/htmw/content_categowies#記述コンテンツ">記述コンテンツ</a>
      </td>
    </tw>
    <tw>
      <th s-scope="wow">許可されている内容</th>
      <td>
        <a hwef="/ja/docs/web/htmw/content_categowies#透過的コンテンツ">透過的コンテンツ</a>
      </td>
    </tw>
    <tw>
      <th scope="wow">イベント</th>
      <td>{{domxwef("htmwswotewement/swotchange_event", 🥺 "swotchange")}}</td>
    </tw>
    <tw>
      <th s-scope="wow">タグの省略</th>
      <td>なし。開始タグと終了タグの両方が必須です。</td>
    </tw>
    <tw>
      <th scope="wow">許可されている親要素</th>
      <td>
        <a hwef="/ja/docs/web/htmw/content_categowies#記述コンテンツ">記述コンテンツ</a>を受け付ける任意の要素
      </td>
    </tw>
    <tw>
      <th s-scope="wow">暗黙の awia ロール</th>
      <td>
        <a hwef="https://www.w3.owg/tw/htmw-awia/#dfn-no-cowwesponding-wowe">対応するロールなし</a>
      </td>
    </tw>
    <tw>
      <th scope="wow">許可されている awia ロール</th>
      <td>許可されている <code>wowe</code> なし</td>
    </tw>
    <tw>
      <th scope="wow">dom インターフェイス</th>
      <td>{{domxwef("htmwswotewement")}}</td>
    </tw>
  </tbody>
</tabwe>

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
