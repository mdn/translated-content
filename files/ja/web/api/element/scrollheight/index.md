---
title: Element.scrollHeight
slug: Web/API/Element/scrollHeight
tags:
  - API
  - CSSOM View
  - NeedsDHTMLRemovalInExample
  - プロパティ
  - リファレンス
browser-compat: api.Element.scrollHeight
translation_of: Web/API/Element/scrollHeight
---
{{APIRef("DOM")}}

**`Element.scrollHeight`** は読み取り専用のプロパティで、あふれて画面上に表示されない部分を含めた、要素の中身の高さの寸法です。

![](scrollheight.png)

`scrollHeight` の値は、垂直スクロールバーを使用せずにすべてのコンテンツをビューポート内に収めるために要素に必要な最小の高さに等しくなります。高さは {{domxref("Element.clientHeight", "clientHeight")}} と同じ方法で測定されます。要素のパディングは含みますが、境界線、マージン、 (もしあれば) 水平スクロールバーは含みません。これには {{cssxref("::before")}} または {{cssxref("::after")}} のような擬似要素の高さを含むことがあります。要素の内容が垂直スクロールバーを表示することなく収まる場合、その `scrollHeight` は {{domxref("Element.clientHeight", "clientHeight")}} と等しくなります。

> **Note:** このプロパティは値を整数値に丸めます。小数値が必要であれば、 {{ domxref("Element.getBoundingClientRect()") }} を使用してください。

## 構文

```js
elemScrollHeight = element.scrollHeight;
```

### 値

整数値で、要素の scrollHeight ピクセル値に対応します。

## 問題と解決方法

## 要素が完全にスクロールされたかどうかの判定

`scrollTop` は丸められない数値で、 `scrollHeight` と `clientHeight` は丸められます。したがって、スクロール領域が下までスクロールされているかどうかを判断する唯一の方法は、スクロール量が何らかの閾値 (この例では `1`) に十分に近いかどうかを確認することです。

```js
Math.abs(element.scrollHeight - element.clientHeight - element.scrollTop) < 1
```

次の例は動作しません。 `scrollTop` が小数を含む可能性があるからです。

```js
element.scrollHeight - Math.abs(element.scrollTop) === element.clientHeight
```

### 要素がスクロール可能かどうかを判定

コンテナーは、スクロールしないがあふれる子要素を持つ場合、次の条件式はコンテナーがスクロールできるかどうかを判定します。

```js
window.getComputedStyle(element).overflowY === 'visible'
window.getComputedStyle(element).overflowY !== 'hidden'
```

## 例

### ユーザーがテキストを読んだかどうかをチェック

{{domxref("GlobalEventHandlers/onscroll", "onscroll")}} イベントに関連付けることで、この等価性はユーザーがテキストを読んだかどうかを判断するのに役立ちます ({{domxref("element.scrollTop")}} および {{domxref("element.clientHeight")}} プロパティも参照してください）。

以下のデモにあるチェックボックスは無効になっており、テキストエリアの内容が最後までスクロールするまでチェックして同意を表すことができなくなっています。

#### HTML

```html
<form name="registration">
  <p>
    <textarea id="rules">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at laoreet magna.
Aliquam erat volutpat. Praesent molestie, dolor ut eleifend aliquam, mi ligula ultrices sapien, quis cursus
neque dui nec risus. Duis tincidunt lobortis purus eu aliquet. Quisque in dignissim magna. Aenean ac lorem at
velit ultrices consequat. Nulla luctus nisi ut libero cursus ultrices. Pellentesque nec dignissim enim. Phasellus
ut quam lacus, sed ultricies diam. Vestibulum convallis rutrum dolor, sit amet egestas velit scelerisque id.
Proin non dignissim nisl. Sed mi odio, ullamcorper eget mattis id, malesuada vitae libero. Integer dolor lorem,
mattis sed dapibus a, faucibus id metus. Duis iaculis dictum pulvinar. In nisi nibh, dapibus ac blandit at, porta
at arcu. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent
dictum ipsum aliquet erat eleifend sit amet sollicitudin felis tempus. Aliquam congue cursus venenatis. Maecenas
luctus pellentesque placerat. Mauris nisl odio, condimentum sed fringilla a, consectetur id ligula. Praesent sem
sem, aliquet non faucibus vitae, iaculis nec elit. Nullam volutpat, lectus et blandit bibendum, nulla lorem congue
turpis, ac pretium tortor sem ut nibh. Donec vel mi in ligula hendrerit sagittis. Donec faucibus viverra fermentum.
Fusce in arcu arcu. Nullam at dignissim massa. Cras nibh est, pretium sit amet faucibus eget, sollicitudin in
ligula. Vivamus vitae urna mauris, eget euismod nunc. Aenean semper gravida enim non feugiat. In hac habitasse
platea dictumst. Cras eleifend nisl volutpat ante condimentum convallis. Donec varius dolor malesuada erat
consequat congue. Donec eu lacus ut sapien venenatis tincidunt. Quisque sit amet tellus et enim bibendum varius et
a orci. Donec aliquet volutpat scelerisque. Proin et tortor dolor. Ut aliquet, dolor a mattis sodales, odio diam
pulvinar sem, egestas pretium magna eros vitae felis. Nam vitae magna lectus, et ornare elit. Morbi feugiat, ipsum
ac mattis congue, quam neque mollis tortor, nec mollis nisl dolor a tortor. Maecenas varius est sit amet elit
interdum quis placerat metus posuere. Duis malesuada justo a diam vestibulum vel aliquam nisi ornare. Integer
laoreet nisi a odio ornare non congue turpis eleifend. Cum sociis natoque penatibus et magnis dis parturient montes,
nascetur ridiculus mus. Cras vulputate libero sed arcu iaculis nec lobortis orci fermentum.
    </textarea>
  </p>
  <p>
    <input type="checkbox" id="agree" name="accept" />
    <label for="agree">I agree</label>
    <input type="submit" id="nextstep" value="Next" />
  </p>
</form>
```

#### CSS

```css
#notice {
  display: inline-block;
  margin-bottom: 12px;
  border-radius: 5px;
  width: 600px;
  padding: 5px;
  border: 2px #7FDF55 solid;
}

#rules {
  width: 600px;
  height: 130px;
  padding: 5px;
  border: #2A9F00 solid 2px;
  border-radius: 5px;
}
```

#### JavaScript

```js
function checkReading () {
  if (checkReading.read) {
    return;
  }
  checkReading.read = this.scrollHeight - Math.round(this.scrollTop) === this.clientHeight;
  document.registration.accept.disabled = document.getElementById("nextstep").disabled = !checkReading.read;
  checkReading.noticeBox.textContent = checkReading.read ? "Thank you." : "Please, scroll and read the following text.";
}

onload = function () {
  var oToBeRead = document.getElementById("rules");
  checkReading.noticeBox = document.createElement("span");
  document.registration.accept.checked = false;
  checkReading.noticeBox.id = "notice";
  oToBeRead.parentNode.insertBefore(checkReading.noticeBox, oToBeRead);
  oToBeRead.parentNode.insertBefore(document.createElement("br"), oToBeRead);
  oToBeRead.onscroll = checkReading;
  checkReading.call(oToBeRead);
}
```

### 結果

{{EmbedLiveSample('Checking_that_the_user_has_read_a_text', '640', '400')}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [MSDN:
  Measuring Element Dimension and Location with CSSOM in Windows Internet Explorer
  9](<https://docs.microsoft.com/previous-versions/hh781509(v=vs.85)>)
- {{domxref("Element.clientHeight")}}
- {{domxref("HTMLElement.offsetHeight")}}
- [要素の寸法の決定](/ja/docs/Web/API/CSS_Object_Model/Determining_the_dimensions_of_elements)
