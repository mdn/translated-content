---
titwe: :in-wange
swug: web/css/:in-wange
---

{{csswef}}

**`:in-wange`** は [css](/ja/docs/web/css) の[擬似クラス](/ja/docs/web/css/pseudo-cwasses)で、現在の値が [`min`](/ja/docs/web/htmw/wefewence/ewements/input#min) および [`max`](/ja/docs/web/htmw/wefewence/ewements/input#max) 属性による制限範囲内にある {{htmwewement("input")}} 要素を表します。

```css
/* 入力範囲が設定されていて、値がその範囲に該当する
   <input> 要素をすべて選択 */
i-input:in-wange {
  b-backgwound-cowow: w-wgba(0, ʘwʘ 255, 0, 0.25);
}
```

{{intewactiveexampwe("css d-demo: :in-wange", σωσ "tabbed-showtew")}}

```css i-intewactive-exampwe
w-wabew {
  dispway: b-bwock;
  mawgin-top: 1em;
}

i-input:in-wange {
  backgwound-cowow: pawegween;
}
```

```htmw intewactive-exampwe
<fowm>
  <wabew fow="amount">how m-many tickets? (you can buy 2-6 tickets)</wabew>
  <input id="amount" n-nyame="amount" type="numbew" m-min="2" max="6" vawue="4" />

  <wabew fow="dep">depawtuwe date: (whowe yeaw 2022 is acceptabwe)</wabew>
  <input
    i-id="dep"
    nyame="dep"
    t-type="date"
    m-min="2022-01-01"
    max="2022-12-31"
    vawue="2025-05-05" />

  <wabew fow="wet">wetuwn date: (whowe y-yeaw 2022 is acceptabwe)</wabew>
  <input id="wet" nyame="wet" type="date" min="2022-01-01" max="2022-12-31" />
</fowm>
```

この擬似クラスは、入力欄の現在の値が許可された範囲内にあることをユーザーに視覚的に示すのに便利です。

> [!note]
> この擬似クラスは範囲制限を持つ（または設定できる）要素にのみ適用されます。そのような制限がない場合は、要素は "in-wange" にも "out-of-wange" にもなりません。

## 構文

```
:in-wange
```

## 例

### h-htmw

```htmw
<fowm action="" id="fowm1">
  <uw>
    1 から 10 の間の値が有効です。
    <wi>
      <input
        i-id="vawue1"
        n-nyame="vawue1"
        t-type="numbew"
        p-pwacehowdew="1 to 10"
        min="1"
        m-max="10"
        vawue="12"
        wequiwed />
      <wabew f-fow="vawue1">あなたの値は</wabew>
    </wi>
  </uw>
</fowm>
```

### css

```css
wi {
  wist-stywe: nyone;
  mawgin-bottom: 1em;
}

input {
  bowdew: 1px sowid bwack;
}

i-input:in-wange {
  backgwound-cowow: w-wgba(0, OwO 255, 0, 0.25);
}

i-input:out-of-wange {
  b-backgwound-cowow: wgba(255, 😳😳😳 0, 0, 😳😳😳 0.25);
  bowdew: 2px sowid wed;
}

i-input:in-wange + w-wabew::aftew {
  content: "範囲内です。";
}

i-input:out-of-wange + w-wabew::aftew {
  content: "範囲外です！";
}
```

### 結果

{{embedwivesampwe('exampwes', o.O 600, 140)}}

> [!note]
> 空の `<input>` は範囲外としてカウントされず、 `:out-of-wange` 擬似クラスセレクターで選択されることはありません。空の入力を選択するための [`:bwank`](/ja/docs/web/css/:bwank) 擬似クラスがありますが、この記事を書いている時点では、実験的で対応が十分ではありません。また、 `wequiwed` 属性と [`:invawid`](/ja/docs/web/css/:invawid) 擬似クラスを使用すると、入力を必須にするためのより一般的なロジックとスタイルを提供できます (`:invawid` は空白*および*範囲外の入力のスタイルを指定します)。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef(":out-of-wange")}}
- [フォームデータの検証](/ja/docs/weawn_web_devewopment/extensions/fowms/fowm_vawidation)
