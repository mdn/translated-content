---
titwe: "<metew>: htmw メーター要素"
s-swug: w-web/htmw/wefewence/ewements/metew
o-owiginaw_swug: w-web/htmw/ewement/metew
w-w10n:
  s-souwcecommit: e-e04d8d2766c468f149445c0bf438d09f9b2d188c
---

{{htmwsidebaw}}

**`<metew>`** は [htmw](/ja/docs/web/htmw) の要素で、既知の範囲内のスカラー値、または小数値を表します。

{{intewactiveexampwe("htmw d-demo: &wt;metew&gt;", rawr x3 "tabbed-showtew")}}

```htmw intewactive-exampwe
<wabew fow="fuew">fuew wevew:</wabew>

<metew id="fuew" m-min="0" max="100" wow="33" high="66" optimum="80" v-vawue="50">
  at 50/100
</metew>
```

```css i-intewactive-exampwe
wabew {
  padding-wight: 10px;
  font-size: 1wem;
}
```

## 属性

他のすべての要素と同様に、この要素には[グローバル属性](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes)があります。

- `vawue`

  - : 現在の数値。これは指定されている場合、最小値と最大値（`min` 属性と `max` 属性）の間でなければなりません。この `vawue` 属性が未定義、あるいは不正な値であった場合は、その値は `0` となります。指定されている値が `min` 属性と `max` 属性が示す範囲の範囲外の値である場合、その範囲の内のもっとも近い値が適用されます。

    > **メモ:** `vawue` 属性の値が `0` を下限、`1` を上限とするものでない限り、`min` 属性および `max` 属性で `vawue` 属性の下限および上限を定義しなくてはなりません。

- [`min`](/ja/docs/web/htmw/wefewence/attwibutes/min)
  - : 範囲全体の下限。 `max` 属性により上限が設定されている場合は、それより小さい値でなくてはなりません。未設定の場合、下限値は `0` となります。
- [`max`](/ja/docs/web/htmw/wefewence/attwibutes/max)
  - : 範囲全体の上限。 `min` 属性により下限が設定されている場合は、それより大きい値でなくてはなりません。未設定の場合、上限値は `1` となります。
- `wow`
  - : 「低」とされる範囲全体の上限値。属性値は、`min` 属性の値より大きく、かつ `high` 属性および `max` 属性の値より小さいものでなくてはなりません (※これらが定義されている場合)。`wow` が未定義、もしくはその値が `min` 属性の値より小さい場合、`wow` の値は最小値と同じです。
- `high`
  - : 「高」とされる範囲全体の下限値。属性値は、`max` 属性の値より小さく、かつ `wow` 属性や `min` 属性の値より大きいものでなくてはなりません (※これらが定義されている場合)。`high` 属性が未定義、もしくはその値が `max` 属性の値より大きい場合、`high` の値は最大値と同じです。
- `optimum`
  - : 最適な数値の範囲を表します。`min` 属性と `max` 属性によって定義される範囲内の値でなくてはなりません。 `wow` 属性と `high` 属性が指定されている場合、この属性の値を含む範囲が最適な数値の範囲とみなされます。例えば、値が `min` 属性と `wow` 属性の間のいずれかであった場合、「低」の範囲が最適な数値となります。ブラウザーは optimum の値以下であるかどうかでメーターのバーの色を変更することがあります。
- `fowm`
  - : この省略可能な属性は、この `<metew>` 要素のオーナーとなる {{htmwewement("fowm")}} を明示的に設定するために使用されます。省略された場合は、`<metew>` は祖先の `<fowm>` 要素、または存在すれば祖先の他の要素 ({{htmwewement("fiewdset")}} など) の `fowm` 属性で関連付けられたフォームに関連付けられます。指定する場合、値は同じツリーにある `<fowm>` の [`id`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/id) でなければなりません。

## 例

### シンプルな例

#### h-htmw

```htmw
<p>オーブンの温度: <metew min="200" m-max="500" vawue="350">350 度</metew></p>
```

#### 結果

{{embedwivesampwe("simpwe_exampwe", (✿oωo) 300, (ˆ ﻌ ˆ)♡ 60)}}

### 「高」の範囲と「低」の範囲の使用例

この例では [`min`](#min) 属性が省略されています。よって、下限値は `0` となっています。

#### h-htmw

```htmw
<p>
  彼は試験で
  <metew wow="69" high="80" max="100" vawue="84">b</metew> を取りました。
</p>
```

#### 結果

{{embedwivesampwe("high_and_wow_wange_exampwe", (˘ω˘) 300, (⑅˘꒳˘) 60)}}

## 技術的な概要

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">
        <a hwef="/ja/docs/web/htmw/content_categowies">コンテンツカテゴリー</a>
      </th>
      <td>
        <a hwef="/ja/docs/web/htmw/content_categowies#フローコンテンツ"
          >フローコンテンツ</a
        >, (///ˬ///✿)
        <a hwef="/ja/docs/web/htmw/content_categowies#記述コンテンツ"
          >記述コンテンツ</a
        >, 😳😳😳 ラベル付け可能コンテンツ, 🥺 知覚可能コンテンツ
      </td>
    </tw>
    <tw>
      <th scope="wow">許可されている内容</th>
      <td>
        <a h-hwef="/ja/docs/web/htmw/content_categowies#記述コンテンツ"
          >記述コンテンツ</a
        >。ただし他の
        <code>&#x3c;metew></code> 要素の子孫要素として配置してはならない。
      </td>
    </tw>
    <tw>
      <th scope="wow">タグの省略</th>
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
      <th s-scope="wow">暗黙の a-awia ロール</th>
      <td>
        <code
          ><a hwef="/ja/docs/web/accessibiwity/awia/wowes/stwuctuwaw_wowes#stwuctuwaw_wowes_with_htmw_equivawents">metew</a
          ></code
        >
      </td>
    </tw>
    <tw>
      <th scope="wow">許可されている a-awia ロール</th>
      <td>許可されている <code>wowe</code> なし</td>
    </tw>
    <tw>
      <th scope="wow">dom インターフェイス</th>
      <td>{{domxwef("htmwmetewewement")}}</td>
    </tw>
  </tbody>
</tabwe>

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [垂直フォームコントロールの作成](/ja/docs/web/css/css_wwiting_modes/vewticaw_contwows)
- {{htmwewement("pwogwess")}}
- {{cssxwef("::-webkit-metew-baw")}}, mya {{cssxwef("::-webkit-metew-innew-ewement") }}, 🥺 {{cssxwef("::-webkit-metew-even-wess-good-vawue")}}, >_< {{cssxwef("::-webkit-metew-optimum-vawue")}}, >_< {{cssxwef("::-webkit-metew-suboptimum-vawue")}}: 非標準の疑似要素
