---
title: 如何建構 HTML 表單
slug: Learn/Forms/How_to_structure_a_web_form
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Forms/Your_first_form", "Learn/Forms/Basic_native_form_controls", "Learn/Forms")}}

有了基礎後，我們就能探討表單元素，所提供的結構與文意之詳細資訊；還有各表單部份的相異之處。

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">先決條件：</th>
      <td>
        對電腦還有
        <a href="/zh-TW/docs/Learn/HTML/Introduction_to_HTML">HTML</a>
        有基本理解。
      </td>
    </tr>
    <tr>
      <th scope="row">目標：</th>
      <td>理解如何構建 HTML 表單並給予無障礙的語意化。</td>
    </tr>
  </tbody>
</table>

表單表單的彈性化令其成為 [HTML](/zh-TW/docs/Learn/HTML) 最複雜的結構之一。你能使用專用的表單元素和屬性，來構建任何類型的基本表單。使用正確的 HTML 表單結構能讓確保表單可用、且[無障礙](/zh-TW/docs/Learn/Accessibility)。

## \<form> 元素

{{HTMLElement("form")}} 元素會形式上的定義表單和決定行為屬性。每次建立 HTML 表單時，都必須使用 form 元素；並將所有內容嵌進去。大多數的輔助技術與瀏覽器套件，都能抓到 {{HTMLElement("form")}} 元素，並實做特殊的 hook，使其更易於使用。

我們之前就講過這件事了。

> **警告：** 絕對不能在表單裡面再嵌入表單。這會讓表單行為變得難以理解，所以是一個壞主意。

你可以從表單外面控制 {{HTMLElement("form")}} 。這麼做的話，除非使用 [`form`](/zh-TW/docs/Web/HTML/Attributes/form) 將其與表單關聯，否則該操作預設上和任何表單無關。引入此功能是為了可以在即使該操作未嵌在表單中，其依舊能顯式地將操作與表單綁定。

接下來就開始探討表單裡面可能會嵌入什麼吧。

## \<fieldset> and \<legend> 元素

{{HTMLElement("fieldset")}} 元素能方便地建立用途相近、樣式及語意化都很方便的小部件組（groups of widgets）。你可以透過添加 {{HTMLElement("legend")}} 來給 {{HTMLElement("fieldset")}} 的內部開頭添加標籤。{{HTMLElement("legend")}} 的文字內容能描述 {{HTMLElement("legend")}} 目的。

多數輔助科技會在 {{HTMLElement("legend")}} 元素被 {{HTMLElement("fieldset")}} 包住時偵測並使用它。比如說 [Jaws](http://www.freedomscientific.com/products/software/jaws/) 與 [NVDA](http://www.nvda-project.org/) 之類的螢幕報讀器就會在讀到每個控件的標籤前，讀出 legend 的內容。

下面就有一個示例：

```html
<form>
  <fieldset>
    <legend>Fruit juice size</legend>
    <p>
      <input type="radio" name="size" id="size_1" value="small" />
      <label for="size_1">Small</label>
    </p>
    <p>
      <input type="radio" name="size" id="size_2" value="medium" />
      <label for="size_2">Medium</label>
    </p>
    <p>
      <input type="radio" name="size" id="size_3" value="large" />
      <label for="size_3">Large</label>
    </p>
  </fieldset>
</form>
```

> **備註：** 你可以在[fieldset-legend.html](https://github.com/mdn/learning-area/blob/master/html/forms/html-form-structure/fieldset-legend.html) 觀察範例（[或著觀察這個動態互動](https://mdn.github.io/learning-area/html/forms/html-form-structure/fieldset-legend.html)）。

在閱讀表單時，螢幕報讀器會針對第一個小部件組，說出「Fruit juice size small」、接著針對第二個小部件組，說出「Fruit juice size medium」、第三個則是「Fruit juice size large」。

這個示例的是最重要的用法之一：每次有一組 radio 按鈕時，就該在裡面放一個 {{HTMLElement("fieldset")}} 元素。{{HTMLElement("fieldset")}} 也能用在表單的其他地方。理想上，要是表單一長，就要把他放到其他頁面。但如果做不到這點，那將不同的相關部分，放在不同的 fieldsets 之中，也可以提高可用性。

由於 {{HTMLElement("fieldset")}} 對輔助技術的影響，這個元素是建立無障礙表單的基石，但請注意不要濫用這個元素。可以的話，[聽聽螢幕報讀是怎麼講的](/zh-TW/docs/Learn/Tools_and_testing/Cross_browser_testing/Accessibility#Screenreaders)。如果踢起來怪怪的，那就試著改進表單。

## \<label> 元素

正如上篇文章中所見，{{HTMLElement("label")}} 元素是定義 HTML 表單控件的正式方法。如果要構建無障礙的表單，這是最重要的元素：正確實做後，螢幕閱讀器會說出表單元素標籤、以及相關說明，同時也對有視力的用戶很有用。以這個例子為例，我們在上一篇文章中看過：

```html
<label for="name">Name:</label> <input type="text" id="name" name="user_name" />
```

在 `<label>` 元素透過 `for` 屬性與 `<input>` 元素的 `id` 屬性正確連結後，螢幕閱讀器就會讀出「Name, edit text」這樣的文字。

還有另一種控制標籤與表單控件關聯的方法：那就是把表單控件嵌在 `<label>` 元素裡面，以便隱式關聯。

```html
<label for="name">
  Name: <input type="text" id="name" name="user_name" />
</label>
```

但即使在這種情況下，最好還是設置 `for` 屬性，以確保所有輔具都能理解標籤和控件之間的關係。

如果沒有標籤、或著說表單控件沒有被顯式或隱式關聯，螢幕閱讀器會讀出沒啥幫助的「Edit text blank」。

### 標籤也能點喔！

使用標籤的另一個好處，就是能在點選該標籤後，啟動相對應的小部件。這種功能在控制文字輸入的時候會很好用：用戶點選標籤時就可以 focus 到 input 那邊。這對 button 與 checkbox 尤其有用：因為點選的區域可能很小，因此使它盡可能簡單地啟用，會是很有用的。

例如在下面的示例中，點選「I like cherry」標籤文字後會切換 _taste_cherry_ checkbox 的點選狀態：

```html
<form>
  <p>
    <input type="checkbox" id="taste_1" name="taste_cherry" value="cherry" />
    <label for="taste_1">I like cherry</label>
  </p>
  <p>
    <input type="checkbox" id="taste_2" name="taste_banana" value="banana" />
    <label for="taste_2">I like banana</label>
  </p>
</form>
```

> **備註：** 你可以在 [checkbox-label.html](https://github.com/mdn/learning-area/blob/master/html/forms/html-form-structure/checkbox-label.html) 觀察示例（[這裡有展示版本！](https://mdn.github.io/learning-area/html/forms/html-form-structure/checkbox-label.html)）

### 多個標籤

嚴格來說，一個小部件組能放很多個標籤，但由於部分輔助科技處理上會有問題，所以這也不是個好點子。如果有多個標籤，請試著把巢狀各個小部件，並在裡面只安插一個 {{htmlelement("label")}} 元素。

來看看這個例子：

```html
<p>Required fields are followed by <abbr title="required">*</abbr>.</p>

<!-- So this: -->
<div>
  <label for="username">Name:</label>
  <input id="username" type="text" name="username" />
  <label for="username"
    ><abbr title="required" aria-label="required">*</abbr></label
  >
</div>

<!-- would be better done like this: -->
<div>
  <label for="username">
    <span>Name:</span>
    <input id="username" type="text" name="username" />
    <abbr title="required" aria-label="required">*</abbr>
  </label>
</div>

<!-- But this is probably best: -->
<div>
  <label for="username"
    >Name: <abbr title="required" aria-label="required">*</abbr></label
  >
  <input id="username" type="text" name="username" />
</div>
```

{{EmbedLiveSample("多個標籤", 120, 120)}}

The paragraph at the top states a rule for required elements. The rule must be included _before_ it is used so that sighted users and users of assistive technologies such as screen readers can learn what it means before they encounter a required element. While this helps inform users what an asterisk means, it can not be relied upon. A screen reader will speak an asterisk as "_star_" when encountered. When hovered by a sighted mouse user, "_required_" should appear, which is achieved by use of the `title` attribute. Titles being read aloud depend on the screen reader's settings, so it is more reliable to also include the [`aria-label`](/zh-TW/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-label_attribute) attribute, which is always read by screen readers.

The above variants increase in effectiveness as you go through them:

- In the first example, the label is not read out at all with the input — you just get "edit text blank", plus the actual labels are read out separately. The multiple `<label>` elements confuse the screenreader.
- In the second example, things are a bit clearer — the label read out along with the input is "name star name edit text required", and the labels are still read out separately. Things are still a bit confusing, but it's a bit better this time because the `<input>` has a label associated with it.
- The third example is best — the actual label is read out all together, and the label read out with the input is "name required edit text".

> **備註：** You might get slightly different results, depending on your screenreader. This was tested in VoiceOver (and NVDA behaves similarly). We'd love to hear about your experiences too.

> **備註：** You can find this example on GitHub as [required-labels.html](https://github.com/mdn/learning-area/blob/master/html/forms/html-form-structure/required-labels.html) ([see it live also](https://mdn.github.io/learning-area/html/forms/html-form-structure/required-labels.html)). don't test the example with 2 or 3 of the versions uncommented — screenreaders will definitely get confused if you have multiple labels AND multiple inputs with the same ID!

## 建立表單所常用的 HTML 結構

Beyond the structures specific to web forms, it's good to remember that form markup is just HTML. This means that you can use all the power of HTML to structure a web form.

As you can see in the examples, it's common practice to wrap a label and its widget with a {{HTMLElement("li")}} element within a {{HTMLElement("ul")}} or {{HTMLElement("ol")}} list. {{HTMLElement("p")}} and {{HTMLElement("div")}} elements are also commonly used. Lists are recommended for structuring multiple checkboxes or radio buttons.

In addition to the {{HTMLElement("fieldset")}} element, it's also common practice to use HTML titles (e.g. {{htmlelement("h1")}}, {{htmlelement("h2")}}) and sectioning (e.g. {{htmlelement("section")}}) to structure complex forms.

Above all, it is up to you to find a comfortable coding style that results in accessible, usable forms. Each separate section of functionality should be contained in a separate {{htmlelement("section")}} element, with {{htmlelement("fieldset")}} elements to contain radio buttons.

### 主動學習：建立表單結構

Let's put these ideas into practice and build a slightly more involved form — a payment form. This form will contain a number of control types that you may not yet understand. Don't worry about this for now; you'll find out how they work in the next article ([Basic native form controls](/zh-TW/docs/Learn/Forms/Basic_native_form_controls)). For now, read the descriptions carefully as you follow the below instructions, and start to form an appreciation of which wrapper elements we are using to structure the form, and why.

1. To start with, make a local copy of our [blank template file](https://github.com/mdn/learning-area/blob/master/html/introduction-to-html/getting-started/index.html) and the [CSS for our payment form](https://github.com/mdn/learning-area/blob/master/html/forms/html-form-structure/payment-form.css) in a new directory on your computer.
2. Apply the CSS to the HTML by adding the following line inside the HTML {{htmlelement("head")}}:

   ```html
   <link href="payment-form.css" rel="stylesheet" />
   ```

3. Next, create your form by adding the outer {{htmlelement("form")}} element:

   ```html
   <form></form>
   ```

4. Inside the `<form>` tags, add a heading and paragraph to inform users how required fields are marked:

   ```html
   <h1>Payment form</h1>
   <p>
     Required fields are followed by
     <strong><abbr title="required">*</abbr></strong
     >.
   </p>
   ```

5. Next we'll add a larger section of code into the form, below our previous entry. Here you'll see that we are wrapping the contact information fields inside a distinct {{htmlelement("section")}} element. Moreover, we have a set of two radio buttons, each of which we are putting inside its own list ({{htmlelement("li")}}) element. We also have two standard text {{htmlelement("input")}}s and their associated {{htmlelement("label")}} elements, each contained inside a {{htmlelement("p")}}, and a password input for entering a password. Add this code to your form:

   ```html
   <section>
     <h2>Contact information</h2>
     <fieldset>
       <legend>Title</legend>
       <ul>
         <li>
           <label for="title_1">
             <input type="radio" id="title_1" name="title" value="K" />
             King
           </label>
         </li>
         <li>
           <label for="title_2">
             <input type="radio" id="title_2" name="title" value="Q" />
             Queen
           </label>
         </li>
         <li>
           <label for="title_3">
             <input type="radio" id="title_3" name="title" value="J" />
             Joker
           </label>
         </li>
       </ul>
     </fieldset>
     <p>
       <label for="name">
         <span>Name: </span>
         <strong><abbr title="required">*</abbr></strong>
       </label>
       <input type="text" id="name" name="username" />
     </p>
     <p>
       <label for="mail">
         <span>E-mail: </span>
         <strong><abbr title="required">*</abbr></strong>
       </label>
       <input type="email" id="mail" name="usermail" />
     </p>
     <p>
       <label for="pwd">
         <span>Password: </span>
         <strong><abbr title="required">*</abbr></strong>
       </label>
       <input type="password" id="pwd" name="password" />
     </p>
   </section>
   ```

6. The second `<section>` of our form is the payment information. We have three distinct controls along with their labels, each contained inside a `<p>`. The first is a drop-down menu ({{htmlelement("select")}}) for selecting credit card type. The second is an `<input>` element of type `tel`, for entering a credit card number; while we could have used the `number` type, we don't want the number's spinner UI. The last one is an `<input>` element of type `date`, for entering the expiration date of the card; this one will come up with a date picker widget in supporting browsers, and fall back to a normal text input in non-supporting browsers. These newer input types are reintroduced in [The HTML5 input types](/zh-TW/docs/Learn/Forms/HTML5_input_types).

   Enter the following below the previous section:

   ```html
   <section>
     <h2>Payment information</h2>
     <p>
       <label for="card">
         <span>Card type:</span>
       </label>
       <select id="card" name="usercard">
         <option value="visa">Visa</option>
         <option value="mc">Mastercard</option>
         <option value="amex">American Express</option>
       </select>
     </p>
     <p>
       <label for="number">
         <span>Card number:</span>
         <strong><abbr title="required">*</abbr></strong>
       </label>
       <input type="tel" id="number" name="cardnumber" />
     </p>
     <p>
       <label for="date">
         <span>Expiration date:</span>
         <strong><abbr title="required">*</abbr></strong>
         <em>formatted as mm/dd/yyyy</em>
       </label>
       <input type="date" id="date" name="expiration" />
     </p>
   </section>
   ```

7. The last section we'll add is a lot simpler, containing only a {{htmlelement("button")}} of type `submit`, for submitting the form data. Add this to the bottom of your form now:

   ```html
   <p><button type="submit">Validate the payment</button></p>
   ```

You can see the finished form in action below (also find it on GitHub — see our payment-form.html [source](https://github.com/mdn/learning-area/blob/master/html/forms/html-form-structure/payment-form.html) and [running live](https://mdn.github.io/learning-area/html/forms/html-form-structure/payment-form.html)):

{{EmbedLiveSample("主動學習：建立表單結構","100%",620)}}

## 結論

你現在擁有了正確建構 HTML 表單的所有知識。接下來將介紹本章介紹的許多功能。在下一篇文章中，將詳細探討如何使用各種不同類型的表單小部件，來收集用戶的訊息。

## 參見

- [A List Apart: _Sensible Forms: A Form Usability Checklist_](http://www.alistapart.com/articles/sensibleforms/)

{{PreviousMenuNext("Learn/Forms/Your_first_form", "Learn/Forms/Basic_native_form_controls", "Learn/Forms")}}
