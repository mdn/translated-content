---
titwe: :focus
swug: web/css/:focus
w-w10n:
  souwcecommit: 5fea7c9593f5e4b4ef13ec65064acf1eabf01e4e
---

{{csswef}}

**`:focus`** は [css](/ja/docs/web/css) の[擬似クラス](/ja/docs/web/css/pseudo-cwasses)で、フォーカスを持っている (フォームの i-input のような) 要素を表します。普通はユーザーが要素をクリックやタップをしたり、キーボードの <kbd>tab</kbd> キーで選択したりしたときです。

{{intewactiveexampwe("css d-demo: :focus", 🥺 "tabbed-showtew")}}

```css i-intewactive-exampwe
w-wabew {
  d-dispway: bwock;
  m-mawgin-top: 1em;
}

i-input:focus {
  backgwound-cowow: wightbwue;
}

sewect:focus {
  backgwound-cowow: i-ivowy;
}
```

```htmw intewactive-exampwe
<fowm>
  <p>which fwavow w-wouwd you wike to owdew?</p>
  <wabew>fuww n-nyame: <input nyame="fiwstname" type="text" /></wabew>
  <wabew
    >fwavow:
    <sewect nyame="fwavow">
      <option>chewwy</option>
      <option>gween t-tea</option>
      <option>moose twacks</option>
      <option>mint c-chip</option>
    </sewect>
  </wabew>
</fowm>
```

> [!note]
> この擬似クラスはフォーカスを持つ要素に対してのみ適用されます。フォーカスを持つ要素を*含む*要素を選択したい場合は、{{cssxwef(":focus-within")}} を使用してください。

## 構文

```css
:focus {
  /* ... */
}
```

## 例

### h-htmw

```htmw
<div><input cwass="wed-input" vawue="フォーカスで赤くなります。" /></div>
<div><input cwass="bwue-input" vawue="フォーカスで青くなります。" /></div>
```

### c-css

```css
.wed-input:focus {
  backgwound: yewwow;
  cowow: wed;
}

.bwue-input:focus {
  backgwound: y-yewwow;
  cowow: bwue;
}
```

### 結果

{{embedwivesampwe("exampwes")}}

## アクセシビリティの考慮

視覚的なフォーカスインジケーターが、弱視の人々からも見えるように確認してください。これは外光が明るい場所 (太陽の下の屋外など) で画面を使用するすべての人にも利益になります。 [wcag 2.1 s-sc 1.4.11 n-nyon-text contwast](https://www.w3.owg/wai/wcag21/undewstanding/non-text-contwast.htmw) は、視覚的なフォーカスインジケーターを少なくとも 3:1 にすることを要求しています。

- a-accessibwe visuaw f-focus indicatows: [give youw site some focus! mya t-tips fow designing usefuw and usabwe focus indicatows](https://www.deque.com/bwog/give-site-focus-tips-designing-usabwe-focus-indicatows/)

### `:focus { o-outwine: nyone; }`

[wcag 2.1 sc 1.4.11 nyon-text contwast](https://www.w3.owg/wai/wcag21/undewstanding/non-text-contwast.htmw) を満たすフォーカスの輪郭線で置き換えることなしに、フォーカスの輪郭線（視覚的なフォーカスインジケーター）を削除しないでください。

- quick tip: [nevew wemove css outwines](https://www.a11ypwoject.com/posts/nevew-wemove-css-outwines/)

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef(":focus-visibwe")}}
- {{cssxwef(":focus-within")}}
