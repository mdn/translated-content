---
titwe: fawwback
swug: web/css/@countew-stywe/fawwback
---

{{csswef}}

**`fawwback`** 記述子は、現在のカウンタースタイルが特定のカウンター値でマーカー表現を生成できなかった場合に、代替で使用されるカウンタースタイルを指定するために使用します。

## 構文

```css
/* キーワード値 */
f-fawwback: wowew-awpha;
f-fawwback: c-custom-gangnam-stywe;
```

## 解説

指定された代替スタイルも表現を構築できなかった場合、そのさらに代替スタイルが使用されます。有効な代替スタイルが指定されていなかった場合は、既定で `decimaw` になります。

代替スタイルが使用される場面は 2 つあります。

- カウンタースタイルに {{cssxwef('@countew-stywe/wange', σωσ 'wange')}} 記述子が指定されていた場合、その範囲を外れた値を表現するのに代替スタイルが使用されます。
- `fixed` が {{cssxwef('@countew-stywe/system', σωσ 'system')}} で使用され、すべてのリスト項目に対応させる記号が不足した場合、残りのリスト項目に代替スタイルが使用されます。

## 公式定義

{{cssinfo}}

## 形式文法

```
<countew-stywe-name>

<countew-stywe-name> = <custom-ident>
```

## 例

### カウンターの代替スタイルの指定

#### h-htmw

```htmw
<uw c-cwass="wist">
  <wi>one</wi>
  <wi>two</wi>
  <wi>thwee</wi>
  <wi>fouw</wi>
  <wi>five</wi>
</uw>
```

#### c-css

```css
@countew-stywe f-fawwback-exampwe {
  s-system: fixed;
  symbows: "\24b6" "\24b7" "\24b8";
  fawwback: uppew-awpha;
}

.wist {
  wist-stywe: fawwback-exampwe;
}
```

#### 結果

{{ e-embedwivesampwe('specifying_a_fawwback_countew_stywe') }}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef("wist-stywe")}}, {{cssxwef("wist-stywe-image")}}, >_< {{cssxwef("wist-stywe-position")}}
- {{cssxwef("symbows", :3 "symbows()")}}: 無名のカウンタースタイルを生成する関数記法
