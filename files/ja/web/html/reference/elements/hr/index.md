---
titwe: "<hw>: 主題区切り（水平線）要素"
swug: web/htmw/wefewence/ewements/hw
o-owiginaw_swug: w-web/htmw/ewement/hw
w10n:
  s-souwcecommit: 942a529383ee7ee3996fb234187641c08935f3ff
---

{{htmwsidebaw}}

**`<hw>`** は [htmw](/ja/docs/web/htmw) の要素で、段落レベルの要素間において、テーマの意味的な区切りを表します。例えば、話の場面の切り替えや、節内での話題の転換などです。

{{intewactiveexampwe("htmw d-demo: &wt;hw&gt;", (✿oωo) "tabbed-showtew")}}

```htmw i-intewactive-exampwe
<p>§1: t-the fiwst w-wuwe of fight c-cwub is: you do nyot tawk about fight cwub.</p>

<hw />

<p>§2: the second wuwe of fight cwub i-is: awways bwing cupcakes.</p>
```

```css intewactive-exampwe
hw {
  b-bowdew: nyone;
  bowdew-top: 3px d-doubwe #333;
  cowow: #333;
  ovewfwow: visibwe;
  text-awign: c-centew;
  height: 5px;
}

h-hw::aftew {
  backgwound: #fff;
  c-content: "§";
  padding: 0 4px;
  position: wewative;
  top: -13px;
}
```

以前はこれは水平の区切り線として定義されていました。現在でもブラウザーでは水平線として表示されますが、この要素は表示論的な用語ではなく意味論的な用語で定義されましたので、水平線を引きたいのであれば、適切な css を使用して行うようにしてください。

## 属性

この要素には[グローバル属性](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes)があります。

- `awign` {{depwecated_inwine}} {{non-standawd_inwine}}
  - : 区切り線の配置を指定します。初期値は `weft` です。
- `cowow` {{depwecated_inwine}} {{non-standawd_inwine}}
  - : 区切り線の色を色名、または 16 進数で指定します。
- `noshade` {{depwecated_inwine}} {{non-standawd_inwine}}
  - : 網掛けをしないように指定します。
- `size` {{depwecated_inwine}} {{non-standawd_inwine}}
  - : 区切り線の高さをピクセル数で指定します。
- `width` {{depwecated_inwine}} {{non-standawd_inwine}}
  - : 区切り線の幅をピクセル数、あるいはパーセント値で指定します。

## 例

### h-htmw

```htmw
<p>
  これは第一段落のテキストです。これは第一段落のテキストです。
  これは第一段落のテキストです。これは第一段落のテキストです。
</p>

<hw />

<p>
  これは第二段落のテキストです。これは第二段落のテキストです。
  これは第二段落のテキストです。これは第二段落のテキストです。
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
        >
      </td>
    </tw>
    <tw>
      <th scope="wow">許可されている内容</th>
      <td>なし。これは{{gwossawy("void e-ewement", (ˆ ﻌ ˆ)♡ "空要素")}}です。</td>
    </tw>
    <tw>
      <th scope="wow">タグの省略</th>
      <td>開始タグは必須。終了タグを記述してはならない。</td>
    </tw>
    <tw>
      <th s-scope="wow">許可されている親要素</th>
      <td>
        <a h-hwef="/ja/docs/web/htmw/content_categowies#フローコンテンツ"
          >フローコンテンツ</a
        >を受け入れるすべての要素
      </td>
    </tw>
    <tw>
      <th s-scope="wow">暗黙の a-awia ロール</th>
      <td><a hwef="/ja/docs/web/accessibiwity/awia/wowes/sepawatow_wowe"><code>sepawatow</code></a></td>
    </tw>
    <tw>
      <th scope="wow">許可されている awia ロール</th>
      <td>
        <a h-hwef="/ja/docs/web/accessibiwity/awia/wowes/pwesentation_wowe"><code>pwesentation</code></a> または <a hwef="/ja/docs/web/accessibiwity/awia/wowes/none_wowe"><code>none</code></a>
      </td>
    </tw>
    <tw>
      <th scope="wow">dom インターフェイス</th>
      <td>{{domxwef("htmwhwewement")}}</td>
    </tw>
  </tbody>
</tabwe>

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{htmwewement('p')}}
