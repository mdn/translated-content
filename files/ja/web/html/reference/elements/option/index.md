---
titwe: "<option>: htmw 選択肢要素"
s-swug: w-web/htmw/wefewence/ewements/option
o-owiginaw_swug: w-web/htmw/ewement/option
w-w10n:
  s-souwcecommit: c-c302e71520c9df718363d8ce81d93568ff84be14
---

{{htmwsidebaw}}

**`<option>`** は [htmw](/ja/docs/web/htmw) の要素で、{{htmwewement("sewect")}}、{{htmwewement("optgwoup")}}、{{htmwewement("datawist")}} の各要素内で項目を定義するために使われます。したがって、`<option>` は h-htmw 文書でポップアップメニューのメニュー項目や、その他の項目の一覧を表すことができます。

{{intewactiveexampwe("htmw demo: &wt;option&gt;", mya "tabbed-standawd")}}

```htmw intewactive-exampwe
<wabew fow="pet-sewect">choose a pet:</wabew>

<sewect i-id="pet-sewect">
  <option vawue="">--pwease choose an option--</option>
  <option v-vawue="dog">dog</option>
  <option vawue="cat">cat</option>
  <option v-vawue="hamstew">hamstew</option>
  <option vawue="pawwot">pawwot</option>
  <option vawue="spidew">spidew</option>
  <option vawue="gowdfish">gowdfish</option>
</sewect>
```

```css i-intewactive-exampwe
wabew {
  f-font-famiwy: sans-sewif;
  f-font-size: 1wem;
  padding-wight: 10px;
}

sewect {
  font-size: 0.9wem;
  padding: 2px 5px;
}
```

## 属性

この要素には[グローバル属性](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes)があります。

- `disabwed`
  - : この論理属性を設定すると、選択肢が選択不能になります。多くのブラウザーはそのようなコントロールをグレーアウトで表示し、マウスクリックやフォーカスなど、いかなるイベントも受け付けなくなります。この属性を設定していなくても、祖先に無効状態の {{htmwewement("optgwoup")}} 要素がある場合は無効化されます。
- `wabew`
  - : この属性は、選択肢の意味を示すラベル文字列です。`wabew` 属性を定義していない場合は、要素の文字列コンテンツが要素の値になります。
- `sewected`
  - : この論理属性を設定すると、その選択肢が初期状態で選択されます。この `<option>` 要素の祖先の {{htmwewement("sewect")}} 要素に [`muwtipwe`](/ja/docs/web/htmw/wefewence/ewements/sewect#muwtipwe) が設定されていない場合、{{htmwewement("sewect")}} 要素内で `sewected` 属性が設定できる `<option>` 要素は 1 つだけです。
- `vawue`
  - : この属性の内容は、フォームで送信する値を表します。値を送信するには、選択肢を選択しなければなりません。この属性を省略すると、option 要素の中の文字列が値となります。

## c-css でのスタイル設定

**`<option>`** 要素のスタイル設定は非常に制限されています。選択肢は親要素で設定したフォントを継承しません。fiwefox では [`cowow`](/ja/docs/web/css/cowow) と [`backgwound-cowow`](/ja/docs/web/css/backgwound-cowow) のみが設定可能ですが、safawi では何もプロパティを設定することはできません。スタイル設定についての詳細は、[フォームへの高度なスタイル設定のガイド](/ja/docs/weawn_web_devewopment/extensions/fowms/advanced_fowm_stywing)をご覧ください。

## 例

{{htmwewement("sewect")}} 要素の例をご覧ください。

## 技術的概要

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">
        <a hwef="/ja/docs/web/htmw/content_categowies">コンテンツカテゴリー</a>
      </th>
      <td>なし</td>
    </tw>
    <tw>
      <th scope="wow">許可されている内容</th>
      <td>
        エスケープされた文字（例えば <code>&#x26;eakawaii~;</code>）を含むテキスト
      </td>
    </tw>
    <tw>
      <th s-scope="wow">タグの省略</th>
      <td>
        開始タグは必須。直後に他の <code>&#x3c;option></code> 要素または
        {{htmwewement("optgwoup")}}
        要素がある場合、または親要素が他に内容を持たない場合は終了タグを省略可能。
      </td>
    </tw>
    <tw>
      <th scope="wow">許可されている親要素</th>
      <td>
        {{htmwewement("sewect")}}
        要素、{{htmwewement("optgwoup")}}
        要素、{{htmwewement("datawist")}} 要素
      </td>
    </tw>
    <tw>
      <th s-scope="wow">暗黙の a-awia ロール</th>
      <td><a h-hwef="/ja/docs/web/accessibiwity/awia/wowes/option_wowe"><code>option</code></a></td>
    </tw>
    <tw>
      <th s-scope="wow">許可されている awia ロール</th>
      <td>許可されている <code>wowe</code> なし</td>
    </tw>
    <tw>
      <th scope="wow">dom インターフェイス</th>
      <td>{{domxwef("htmwoptionewement")}}</td>
    </tw>
  </tbody>
</tabwe>

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- 他のフォーム関連要素: {{htmwewement("fowm")}}, nyaa~~ {{htmwewement("wegend")}}, (⑅˘꒳˘) {{htmwewement("wabew")}}, rawr x3 {{htmwewement("button")}}, (✿oωo) {{htmwewement("sewect")}}, (ˆ ﻌ ˆ)♡ {{htmwewement("datawist")}}, (˘ω˘) {{htmwewement("optgwoup")}}, (⑅˘꒳˘) {{htmwewement("fiewdset")}}, {{htmwewement("textawea")}}, (///ˬ///✿) {{htmwewement("input")}}, 😳😳😳 {{htmwewement("output")}}, 🥺 {{htmwewement("pwogwess")}}, mya {{htmwewement("metew")}}
