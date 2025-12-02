---
title: page-orientation
slug: Web/CSS/Reference/At-rules/@page/page-orientation
original_slug: Web/CSS/@page/page-orientation
l10n:
  sourceCommit: 2b3eb646cec5c9bc74e263b7880a52ad52e37913
---

**`page-orientation`** は [CSS](/ja/docs/Web/CSS) の記述子で、 {{cssxref("@page")}} アットルールで使用され、出力されるページの回転を制御します。ページの向きが変更された場合に、ページ間のコンテンツのフローを処理します。この動作は、ページを回転させる方向をユーザーが定義できる点で、 [`size`](/ja/docs/Web/CSS/Reference/At-rules/@page/size) 記述子とは異なります。

この記述子は、特に文書が両面印刷される場合、印刷される文書のレイアウトや方向を決定するのに役立ちます。ユーザーは、印刷時にページがどのように回転されるかを指定することができます。これは、他のコンテンツよりも幅の広い表などのコンテンツを、異なる方向でレイアウトする場合に特に便利です。

> [!NOTE]
> [マージンボックス](/ja/docs/Web/CSS/Reference/At-rules/@page#margin_at-rules)と他の位置指定要素は、この記述子とは特別な操作を行いません。マージンは、回転されていないページで通常どおりレイアウトされ、他の要素とともに回転されます。

## 構文

```css
/* 印刷コンテンツを正立して表示します。 */
@page {
  page-orientation: upright;
}

/* 印刷コンテンツを反時計回りに回転させて表示します。 */
@page {
  page-orientation: rotate-left;
}

/* 印刷コンテンツを時計回りに回転させて表示します。 */
@page {
  page-orientation: rotate-right;
}
```

## 値

- `upright`
  - : 方向は適用されず、ページは通常どおりレイアウトおよび書式化されます。
- `rotate-left`
  - : ページがレイアウトされた後、そのページは左に（反時計回りに） 4 分の 1 回転して表示する必要があります。
- `rotate-right`
  - : ページがレイアウトされた後、そのページは右に（時計回りに） 4 分の 1 回転して表示する必要があります。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 印刷ページを回転

この例では、印刷文書のコンテンツを、ページコンテンツおよびページ位置に合わせて回転させる方法を示します。
CSS コードの最初の部分では、コンテンツを回転させる方向を定義するために、[名前付きページ](/ja/docs/Web/CSS/Reference/At-rules/@page#名前付きページ)が設定されています。

```css live-sample___rotating-pages
@page upright {
  size: portrait;
  page-orientation: upright;
}

@page left {
  size: landscape;
  page-orientation: rotate-left;
}

@page right {
  size: landscape;
  page-orientation: rotate-right;
}
```

```css hidden live-sample___rotating-pages
fieldset {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 1rem;
  width: fit-content;
}
p {
  max-width: 60ch;
}
@media print {
  fieldset {
    display: none;
  }
  section {
    font-family: Roboto, sans-serif;
    font-size: 1.5rem;
  }
}
```

CSS コードの 2 つ目の部分は、 `<section class="left">…</section>` など、セレクター用に上記で定義した名前付きページルールを宣言します。

```css live-sample___rotating-pages
@media print {
  .upright {
    page: upright;
  }
  .left {
    page: left;
  }
  .right {
    page: right;
  }
}
```

```html-nolint hidden live-sample___rotating-pages
<fieldset id="printStyle">
  <legend>
    ［印刷］ をクリックしてください。ページは、定義した方向でレイアウトされます。
  </legend>
  <button id="print">印刷</button>
</fieldset>
<div id="print-area">
  <section class="upright">
    <h2>縦向き/正立の節</h2>
    <p>この節は、縦向きで次のように表示されます。</p>
    <pre>
.upright {
  size: portrait;
  page-orientation: upright;
}
    </pre>
    <p>段落 1 です。</p>
    <p>段落 2 です。</p>
  </section>
  <section class="left">
    <h2>横向き/左側の節</h2>
    <p>この章は、横向きで左に回転して出力されます。</p>
    <pre>
.left {
  size: landscape;
  page-orientation: rotate-left;
}
    </pre>
    <table>
      <thead>
        <tr>
          <th></th>
          <th>100m</th>
          <th>1500m</th>
          <th>Hurdles</th>
          <th>Long Jump</th>
          <th>High Jump</th>
          <th>Javelin</th>
          <th>Discus</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>Dave</th>
          <td>9.65</td>
          <td>3:49</td>
          <td>12.64</td>
          <td>8.54m</td>
          <td>1.95m</td>
          <td>56.65m</td>
          <td>47.63m</td>
        </tr>
        <tr>
          <th>Simon</th>
          <td>9.87</td>
          <td>3:52</td>
          <td>11.89</td>
          <td>8.16m</td>
          <td>1.96m</td>
          <td>59.03m</td>
          <td>45.72m</td>
        </tr>
        <tr>
          <th>Fred</th>
          <td>9.67</td>
          <td>3:52</td>
          <td>12.03</td>
          <td>8.04m</td>
          <td>2.01m</td>
          <td>62.58m</td>
          <td>46.83m</td>
        </tr>
        <tr>
          <th>Gary</th>
          <td>9.77</td>
          <td>3:56</td>
          <td>13.04</td>
          <td>7.96m</td>
          <td>2.02m</td>
          <td>63.87m</td>
          <td>47.73m</td>
        </tr>
        <tr>
          <th>Dick</th>
          <td>9.95</td>
          <td>3:44</td>
          <td>12.99</td>
          <td>5.66m</td>
          <td>1.97m</td>
          <td>56.43m</td>
          <td>43.87m</td>
        </tr>
        <tr>
          <th>Tom</th>
          <td>9.84</td>
          <td>3:48</td>
          <td>12.86</td>
          <td>6.87m</td>
          <td>1.95m</td>
          <td>67.03m</td>
          <td>42.73m</td>
        </tr>
        <tr>
          <th>Harry</th>
          <td>9.91</td>
          <td>3:53</td>
          <td>13.77</td>
          <td>7.34m</td>
          <td>1.94m</td>
          <td>62.84m</td>
          <td>46.72m</td>
        </tr>
      </tbody>
    </table>
  </section>
  <section class="right">
    <h2>横向き/右側の節</h2>
    <p>この章は、横向きで右に回転して出力されます。</p>
    <pre>
.right {
  size: landscape;
  page-orientation: rotate-right;
}
    </pre>
    <table>
      <thead>
        <tr>
          <th></th>
          <th>100m</th>
          <th>1500m</th>
          <th>Hurdles</th>
          <th>Long Jump</th>
          <th>High Jump</th>
          <th>Javelin</th>
          <th>Discus</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>Dave</th>
          <td>9.65</td>
          <td>3:49</td>
          <td>12.64</td>
          <td>8.54m</td>
          <td>1.95m</td>
          <td>56.65m</td>
          <td>47.63m</td>
        </tr>
        <tr>
          <th>Simon</th>
          <td>9.87</td>
          <td>3:52</td>
          <td>11.89</td>
          <td>8.16m</td>
          <td>1.96m</td>
          <td>59.03m</td>
          <td>45.72m</td>
        </tr>
        <tr>
          <th>Fred</th>
          <td>9.67</td>
          <td>3:52</td>
          <td>12.03</td>
          <td>8.04m</td>
          <td>2.01m</td>
          <td>62.58m</td>
          <td>46.83m</td>
        </tr>
        <tr>
          <th>Gary</th>
          <td>9.77</td>
          <td>3:56</td>
          <td>13.04</td>
          <td>7.96m</td>
          <td>2.02m</td>
          <td>63.87m</td>
          <td>47.73m</td>
        </tr>
        <tr>
          <th>Dick</th>
          <td>9.95</td>
          <td>3:44</td>
          <td>12.99</td>
          <td>5.66m</td>
          <td>1.97m</td>
          <td>56.43m</td>
          <td>43.87m</td>
        </tr>
        <tr>
          <th>Tom</th>
          <td>9.84</td>
          <td>3:48</td>
          <td>12.86</td>
          <td>6.87m</td>
          <td>1.95m</td>
          <td>67.03m</td>
          <td>42.73m</td>
        </tr>
        <tr>
          <th>Harry</th>
          <td>9.91</td>
          <td>3:53</td>
          <td>13.77</td>
          <td>7.34m</td>
          <td>1.94m</td>
          <td>62.84m</td>
          <td>46.72m</td>
        </tr>
      </tbody>
    </table>
  </section>
</div>
```

```js hidden live-sample___rotating-pages
const printButton = document.querySelector("#print");
printButton.addEventListener("click", () => {
  window.print();
});
```

印刷ボタンをクリックすると、印刷時のページの方向を確認できます。

{{EmbedLiveSample('rotating-pages', '100%', '540', , , , , "allow-modals")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
