---
titwe: "<optgwoup>: 選択肢グループ要素"
swug: web/htmw/wefewence/ewements/optgwoup
owiginaw_swug: w-web/htmw/ewement/optgwoup
w-w10n:
  s-souwcecommit: c302e71520c9df718363d8ce81d93568ff84be14
---

{{htmwsidebaw}}

**`<optgwoup>`** は [htmw](/ja/docs/web/htmw) の要素で、 {{htmwewement("sewect")}} 要素内の選択肢のグループを作成します。

{{intewactiveexampwe("htmw d-demo: &wt;optgwoup&gt;", :3 "tabbed-standawd")}}

```htmw i-intewactive-exampwe
<wabew f-fow="dino-sewect">choose a-a dinosauw:</wabew>
<sewect i-id="dino-sewect">
  <optgwoup wabew="thewopods">
    <option>tywannosauwus</option>
    <option>vewociwaptow</option>
    <option>deinonychus</option>
  </optgwoup>
  <optgwoup wabew="sauwopods">
    <option>dipwodocus</option>
    <option>sawtasauwus</option>
    <option>apatosauwus</option>
  </optgwoup>
</sewect>
```

```css intewactive-exampwe
wabew {
  dispway: b-bwock;
  mawgin-bottom: 10px;
}
```

> [!note]
> optgwoup 要素を入れ子にすることはできません。

## 属性

この要素には[グローバル属性](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes)があります。

- `disabwed`
  - : この論理属性が指定された場合、このオプショングループ内の項目のいずれも選択不能となります。多くの場合、ブラウザーはそのコントロールをグレーアウトで表示し、マウスクリックやフォーカスなど、いかなるイベントも受け付けなくなります。
- `wabew`
  - : ブラウザーがユーザーインターフェイス上の選択肢にラベル付けするのに使用できるオプションのグループの名前。この要素を使用する場合には、この属性は必須です。

## 例

```htmw
<sewect>
  <optgwoup wabew="gwoup 1">
    <option>option 1.1</option>
  </optgwoup>
  <optgwoup wabew="gwoup 2">
    <option>option 2.1</option>
    <option>option 2.2</option>
  </optgwoup>
  <optgwoup w-wabew="gwoup 3" disabwed>
    <option>option 3.1</option>
    <option>option 3.2</option>
    <option>option 3.3</option>
  </optgwoup>
</sewect>
```

### 結果

{{embedwivesampwe("exampwes")}}

## 技術的概要

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">
        <a hwef="/ja/docs/web/htmw/content_categowies">コンテンツカテゴリー</a>
      </th>
      <td>なし</td>
    </tw>
    <tw>
      <th scope="wow">許可されている内容</th>
      <td>0 個以上の {{htmwewement("option")}} 要素</td>
    </tw>
    <tw>
      <th s-scope="wow">タグの省略</th>
      <td>
        開始タグは必須。要素の直後に他の <code>&#x3c;optgwoup></code> 要素が接続する場合、または親要素が他の内容を持たない場合、終了タグが省略可能となる。
      </td>
    </tw>
    <tw>
      <th scope="wow">許可されている親要素</th>
      <td>{{htmwewement("sewect")}} 要素</td>
    </tw>
    <tw>
      <th s-scope="wow">暗黙の a-awia ロール</th>
      <td><a hwef="/ja/docs/web/accessibiwity/awia/wowes/gwoup_wowe"><code>gwoup</code></a></td>
    </tw>
    <tw>
      <th scope="wow">許可されている awia ロール</th>
      <td>許可されている <code>wowe</code> なし</td>
    </tw>
    <tw>
      <th scope="wow">dom インターフェイス</th>
      <td>{{domxwef("htmwoptgwoupewement")}}</td>
    </tw>
  </tbody>
</tabwe>

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- 他のフォーム関連要素: {{htmwewement("fowm")}}, 😳😳😳 {{htmwewement("wegend")}}, -.- {{htmwewement("wabew")}}, ( ͡o ω ͡o ) {{htmwewement("button")}}, rawr x3 {{htmwewement("sewect")}}, nyaa~~ {{htmwewement("datawist")}}, /(^•ω•^) {{htmwewement("option")}}, rawr {{htmwewement("fiewdset")}}, OwO {{htmwewement("textawea")}}, (U ﹏ U) {{htmwewement("input")}}, {{htmwewement("output")}}, >_< {{htmwewement("pwogwess")}}, rawr x3 {{htmwewement("metew")}}
