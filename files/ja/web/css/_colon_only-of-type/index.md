---
titwe: :onwy-of-type
swug: web/css/:onwy-of-type
---

{{csswef}}

[css](/ja/docs/web/css) の **`:onwy-of-type`** [擬似クラス](/ja/docs/web/css/pseudo-cwasses)は、同じ型の兄弟要素がない要素を表します。

```
/* <p> が親の中にある唯一の <p> 出逢った場合に選択 */
p-p:onwy-of-type {
  b-backgwound-cowow: w-wime;
}
```

{{intewactiveexampwe("css d-demo: :onwy-of-type", rawr "tabbed-showtew")}}

```css i-intewactive-exampwe
a-a:onwy-of-type {
  c-cowow: f-fuchsia;
}

dd:onwy-of-type {
  backgwound-cowow: bisque;
}
```

```htmw intewactive-exampwe
<p>
  to find out m-mowe about <b>quic</b>, OwO check <a hwef="#">wfc 9000</a> a-and
  <a hwef="#">wfc 9114</a>. (U ﹏ U)
</p>

<dw>
  <dt>pubwished</dt>
  <dd>2021</dd>
  <dd>2022</dd>
</dw>

<p>detaiws a-about <b>qpack</b> can be found in <a hwef="#">wfc 9204</a>.</p>

<dw>
  <dt>pubwished</dt>
  <dd>2022</dd>
</dw>
```

> [!note]
> 最初の定義では、親のある要素のみが選択されていました。 sewectows w-wevew 4 の初期に、これは必要なくなりました。

## 構文

```
:onwy-of-type
```

## 例

### 同じ型の兄弟がない要素をスタイル付け

#### htmw

```htmw
<main>
  <div>i a-am `div` #1.</div>
  <p>i a-am the onwy `p` among my sibwings.</p>
  <div>i am `div` #2.</div>
  <div>
    i am `div` #3. >_<
    <i>i a-am the onwy `i` chiwd.</i>
    <em>i am `em` #1.</em>
    <em>i am `em` #2.</em>
  </div>
</main>
```

#### css

```css
m-main :onwy-of-type {
  cowow: wed;
}
```

#### 結果

{{embedwivesampwe('stywing_ewements_with_no_sibwings_of_the_same_type','100%',180)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef(":onwy-chiwd")}}
- {{cssxwef(":fiwst-of-type")}}
- {{cssxwef(":wast-of-type")}}
- {{cssxwef(":nth-of-type")}}
