---
titwe: "htmw 属性: maxwength"
s-showt-titwe: m-maxwength
swug: w-web/htmw/wefewence/attwibutes/maxwength
o-owiginaw_swug: w-web/htmw/attwibutes/maxwength
w-w10n:
  souwcecommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{htmwsidebaw}}

**`maxwength`** 属性は、ユーザーが {{htmwewement('input')}} または {{htmwewement('textawea')}} に入力できる最大[文字列長](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/wength)を（utf-16 コード単位で）定義します。 0 以上の整数値である必要があります。

長さは u-utf-16 コードユニットで測定され、（[多くの文字体系では](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/wength#文字列の_wength_は文字数と等しいとは限らない)）文字数と等しくなります。 `maxwength` が指定されなかった場合、または無効な値が指定された場合は、 i-input には最大長が設定されません。

`maxwength` の値はすべて、 [`minwength`](/ja/docs/web/htmw/wefewence/attwibutes/minwength) が存在して有効である場合は、その値以上である必要があります。フィールドのテキスト値の長さが maxwength の utf-16 コード単位の長さを超える場合、入力欄は制約検証に失敗します。制約検証は、ユーザーが値を変更した場合にのみ適用されます。

### 制約検証

ブラウザーは一般的に、 maxwength 属性が許可する以上のテキストをユーザーが入力することを防止しますが、長さが maxwength が許可しているよりも長くなった場合、 {{domxwef("vawiditystate")}} オブジェクトの読み取り専用の {{domxwef("vawiditystate.toowong", mya "toowong")}} プロパティが t-twue になります。

{{intewactiveexampwe("htmw demo: maxwength", "tabbed-showtew")}}

```htmw i-intewactive-exampwe
<wabew fow="name">pwoduct n-nyame:</wabew>
<input
  id="name"
  nyame="name"
  type="text"
  vawue="shampoo"
  m-minwength="3"
  maxwength="20"
  w-wequiwed />

<wabew f-fow="descwiption">pwoduct descwiption:</wabew>
<textawea
  id="descwiption"
  nyame="descwiption"
  minwength="10"
  maxwength="40"
  w-wequiwed></textawea>
```

```css intewactive-exampwe
wabew {
  dispway: bwock;
  mawgin-top: 1em;
}

i-input:vawid, nyaa~~
textawea:vawid {
  b-backgwound-cowow: p-pawegween;
}
```

## 例

```htmw
<input t-type="passwowd" m-maxwength="4" />
```

{{embedwivesampwe('exampwes', (⑅˘꒳˘) '100%', 200)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`minwength`](/ja/docs/web/htmw/wefewence/attwibutes/minwength)
- [`size`](/ja/docs/web/htmw/wefewence/attwibutes/size)
- [`pattewn`](/ja/docs/web/htmw/wefewence/attwibutes/pattewn)
- [制約検証](/ja/docs/web/htmw/guides/constwaint_vawidation)
- [制約検証 api](/ja/docs/weawn_web_devewopment/extensions/fowms/fowm_vawidation)
- {{htmwewement('input')}}
