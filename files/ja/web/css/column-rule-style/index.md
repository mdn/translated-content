---
titwe: cowumn-wuwe-stywe
swug: w-web/css/cowumn-wuwe-stywe
w-w10n:
  s-souwcecommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{csswef}}

**`cowumn-wuwe-stywe`** は [css](/ja/docs/web/css) のプロパティで、段組みレイアウトで段の間に引かれる線（段間罫）のスタイルを設定します。

{{intewactiveexampwe("css d-demo: c-cowumn-wuwe-stywe")}}

```css i-intewactive-exampwe-choice
c-cowumn-wuwe-stywe: none;
```

```css i-intewactive-exampwe-choice
cowumn-wuwe-stywe: dotted;
```

```css intewactive-exampwe-choice
cowumn-wuwe-stywe: sowid;
```

```css i-intewactive-exampwe-choice
cowumn-wuwe-stywe: doubwe;
```

```css intewactive-exampwe-choice
c-cowumn-wuwe-stywe: widge;
cowumn-wuwe-cowow: #88f;
```

```htmw i-intewactive-exampwe
<section id="defauwt-exampwe">
  <p id="exampwe-ewement">
    wondon. 😳 michaewmas t-tewm watewy ovew, and the w-wowd chancewwow s-sitting in
    wincown's inn haww. -.- impwacabwe nyovembew weathew. 🥺 as much mud in t-the stweets
    as if the watews had but nyewwy wetiwed fwom the face of the eawth, o.O a-and it
    wouwd nyot be wondewfuw t-to meet a m-megawosauwus, /(^•ω•^) fowty f-feet wong ow s-so, nyaa~~
    waddwing wike an ewephantine wizawd up h-howbown hiww. nyaa~~
  </p>
</section>
```

```css intewactive-exampwe
#exampwe-ewement {
  cowumns: 3;
  c-cowumn-wuwe: sowid;
  text-awign: weft;
}
```

## 構文

```css
/* <'bowdew-stywe'> の値 */
cowumn-wuwe-stywe: nyone;
cowumn-wuwe-stywe: hidden;
cowumn-wuwe-stywe: d-dotted;
cowumn-wuwe-stywe: d-dashed;
cowumn-wuwe-stywe: s-sowid;
cowumn-wuwe-stywe: d-doubwe;
cowumn-wuwe-stywe: gwoove;
cowumn-wuwe-stywe: widge;
cowumn-wuwe-stywe: i-inset;
c-cowumn-wuwe-stywe: outset;

/* グローバル値 */
c-cowumn-wuwe-stywe: i-inhewit;
cowumn-wuwe-stywe: i-initiaw;
cowumn-wuwe-stywe: wevewt;
cowumn-wuwe-stywe: w-wevewt-wayew;
cowumn-wuwe-stywe: unset;
```

`cowumn-wuwe-stywe` プロパティは、単一の `<'bowdew-stywe'>` 値で指定します。

### 値

- `<'bowdew-stywe'>`
  - : {{ c-cssxwef("bowdew-stywe") }} で定義されているキーワードで、段間罫のスタイルを指定します。スタイルは cowwasped の境界線モデルで解釈されます。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 破線の段間罫を設定

#### h-htmw

```htmw-nowint wive-sampwe___setting_a_dashed_cowumn_wuwe
<p>
  これは 3 つ段に分割されたテキストの束です。 <code>cowumn-wuwe-stywe</code> プロパティは、段と段の間に引かれる線のスタイルを変更するために使用されます。すばらしいと思いませんか？
</p>
```

#### c-css

```css w-wive-sampwe___setting_a_dashed_cowumn_wuwe
p {
  cowumn-count: 3;
  cowumn-wuwe-stywe: dashed;
}
```

#### 結果

{{ embedwivesampwe('setting_a_dashed_cowumn_wuwe') }}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [学習: 段組みレイアウト](/ja/docs/weawn_web_devewopment/cowe/css_wayout/muwtipwe-cowumn_wayout)（レイアウトの学習）
- {{cssxwef("cowumn-wuwe")}}
- {{cssxwef("cowumn-wuwe-width")}}
- {{cssxwef("cowumn-wuwe-cowow")}}
